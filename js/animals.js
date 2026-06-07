"use strict";
// Wildlife: animal damage/respawn and behavior (target picking, wandering, attacks, anti-stuck),
// plus player HP, death, and respawn.

/* ------------------------------- animals -------------------------------- */

function damageAnimal(a, dmg, fromx, fromy) {
  dmg = Math.round(dmg);
  if (dmg <= 0) return;
  a.hp -= dmg;
  a.hit = 0.12;
  a.aggro = true;
  const d = dist(a.x, a.y, fromx, fromy) || 1;
  const kb = Math.min(16, dmg * 0.4);  // knockback away from the hit, capped
  a.x += (a.x - fromx) / d * kb;
  a.y += (a.y - fromy) / d * kb;
  burst(a.x, a.y, COL.blood, 6, 150);
  addFloat(a.x, a.y - a.r - 4, '-' + dmg, '#ff9c8a');
  if (a.hp <= 0) {
    const def = ANIMALS[a.type];
    burst(a.x, a.y, COL.blood, 20, 220);
    const n = randi(def.lootMin, def.lootMax);
    for (let i = 0; i < n; i++) addLoot(a.x, a.y, def.lootKind, 1);
    addFloat(a.x, a.y - a.r, def.name + ' down', '#c4d66a');
    a.respawn = rand(11, 18);
  }
}

function respawnAnimal(a) {
  const biome = ANIMALS[a.type].biome;
  // Biome x-band: desert = west third, jungle = middle third, winter = east third.
  const xLo = biome === 'jungle' ? WORLD.w / 3 : biome === 'winter' ? 2 * WORLD.w / 3 : 0;
  const xHi = biome === 'desert' ? WORLD.w / 3 : biome === 'jungle' ? 2 * WORLD.w / 3 : WORLD.w;
  for (let t = 0; t < 30; t++) {  // pick a spot well away from the player
    const x = rand((biome ? xLo : 0) + 90, (biome ? xHi : WORLD.w) - 90);
    const y = rand(90, WORLD.h - 90);
    if (dist2(x, y, player.x, player.y) > 520 * 520) {
      a.x = x;
      a.y = y;
      break;
    }
  }
  a.hp = a.max;
  a.aggro = false;
  a.atkcd = 0;
  a._pauseT = 0;
  a._foe = null;
  a.hit = 0;
  a.dir = rand(0, TAU);
  a.wanderT = rand(0, 2);
}

function damageDeploy(key, dmg) {
  const d = game.deploys.get(key);
  if (!d) return;
  d.hp -= dmg;
  const [gx, gy] = key.split(',').map(Number);
  const cx = gx * TILE + TILE / 2;
  const cy = gy * TILE + TILE / 2;
  if (d.hp <= 0) {
    spillContainer(cx, cy, d);
    game.deploys.delete(key);
    burst(cx, cy, d.type === 'turret' ? '#9aa1a8' : COL.boxLt, 14, 180);
  } else {
    burst(cx, cy, '#cfd6cf', 4, 110);
  }
}

function nearestTurret(x, y, maxd) {
  let best = null;
  let bestDistSq = maxd * maxd;
  for (const [k, s] of game.deploys) {
    if (s.type !== 'turret' || s.hp <= 0) continue;
    const [gx, gy] = k.split(',').map(Number);
    const cx = gx * TILE + TILE / 2;
    const cy = gy * TILE + TILE / 2;
    const d = dist2(x, y, cx, cy);
    if (d < bestDistSq) {
      bestDistSq = d;
      best = { x: cx, y: cy, k };
    }
  }
  return best;
}

function updateAnimals(dt) {
  for (const a of game.animals) {
    if (a.hit > 0) a.hit -= dt;
    if (a.hp <= 0) {  // dead: tick down to respawn
      if (a.respawn > 0) {
        a.respawn -= dt;
        if (a.respawn <= 0) respawnAnimal(a);
      }
      continue;
    }
    if (a.atkcd > 0) a.atkcd -= dt;
    if (a._pauseT > 0) a._pauseT -= dt;  // post-attack recovery freeze ticking down
    const def = ANIMALS[a.type];
    const hidden = player.dead || player.inCopter || game.ghost || inSafeZone(player.x, player.y);  // a dead/pilot/ghost/safe-zone player draws no aggro
    const dToP = dist(a.x, a.y, player.x, player.y);

    // Pick a target: the player or the nearest bot (whoever is closer and in range), else the nearest turret.
    let tx = null;
    let ty = null;
    let turretKey = null;
    let botTarget = null;
    let nearBot = null;
    let nearBotDistSq = def.detect * def.detect;
    for (const e of game.enemies) {  // animals only notice a unit they can SEE (clear line of sight) — they never chase anyone into a walled base
      if (e.dead || e.flying || e.eliminated) continue;
      const dd = dist2(a.x, a.y, e.x, e.y);
      if (dd < nearBotDistSq && !wallBlocksView(a.x, a.y, e.x, e.y)) {
        nearBotDistSq = dd;
        nearBot = e;
      }
    }
    const seesPlayer = !hidden && dToP < def.detect && !wallBlocksView(a.x, a.y, player.x, player.y);
    if (seesPlayer) a.aggro = true;
    if (a.aggro && seesPlayer && dToP <= def.lose && (!nearBot || dToP * dToP <= nearBotDistSq)) {  // the player is closer and in sight
      tx = player.x;
      ty = player.y;
    } else if (nearBot) {  // a visible bot is closer -> hunt it
      tx = nearBot.x;
      ty = nearBot.y;
      botTarget = nearBot;
      a.aggro = true;
    } else {
      a.aggro = false;
      const turret = nearestTurret(a.x, a.y, def.detect);
      if (turret) {
        tx = turret.x;
        ty = turret.y;
        turretKey = turret.k;
        a.aggro = true;
      }
    }

    let foeTarget = null;
    if (tx === null && (a.hostile || (a._foe && a._foe.hp > 0))) {
      // No human/bot/turret target: hostile animals hunt other animals, and a wounded animal
      // defends against its attacker.
      if (a._foe && a._foe.hp > 0 && dist2(a.x, a.y, a._foe.x, a._foe.y) < (def.detect * 1.4) * (def.detect * 1.4)) {
        foeTarget = a._foe;
      } else {
        a._foe = null;
        if (a.hostile) {
          let bestFoe = null;
          let bestFoeDistSq = def.detect * def.detect;
          for (const o of game.animals) {
            if (o === a || o.hp <= 0) continue;
            const dd = dist2(a.x, a.y, o.x, o.y);
            if (dd < bestFoeDistSq) {
              bestFoeDistSq = dd;
              bestFoe = o;
            }
          }
          foeTarget = bestFoe;
        }
      }
      if (foeTarget) {
        tx = foeTarget.x;
        ty = foeTarget.y;
        a.aggro = true;
      }
    }

    let dx = 0;
    let dy = 0;
    let sp = 0;
    if (tx !== null) {  // chase the target
      dx = tx - a.x;
      dy = ty - a.y;
      const l = Math.hypot(dx, dy) || 1;
      dx /= l;
      dy /= l;
      sp = def.chase;
    } else {  // wander
      a.wanderT -= dt;
      if (a.wanderT <= 0) {
        if (def.lake && a._lake) {  // alligators prefer their lake: bask in the water, head back if they drift out
          const dl = dist(a.x, a.y, a._lake.x, a._lake.y);
          if (dl > a._lake.r * 0.9) a.dir = Math.atan2(a._lake.y - a.y, a._lake.x - a.x);
          else a.dir = Math.random() < 0.55 ? null : rand(0, TAU);
        } else {
          a.dir = Math.random() < 0.3 ? null : rand(0, TAU);
        }
        a.wanderT = rand(1.2, 3.2);
      }
      let coreX = null;
      let coreY = null;
      let coreDistSq = 340 * 340;
      for (const [k, s] of game.deploys) {  // nearest base core (Tool Cupboard)
        if (s.type !== 'cupboard') continue;
        const comma = k.indexOf(',');
        const gx = +k.slice(0, comma);
        const gy = +k.slice(comma + 1);
        const cx = gx * TILE + TILE / 2;
        const cy = gy * TILE + TILE / 2;
        const dd = dist2(a.x, a.y, cx, cy);
        if (dd < coreDistSq) {
          coreDistSq = dd;
          coreX = cx;
          coreY = cy;
        }
      }
      if (coreX !== null) {  // a wandering animal near a base core steers AWAY — animals don't loiter in/around bases
        a.dir = Math.atan2(a.y - coreY, a.x - coreX);
        a.wanderT = Math.max(a.wanderT, 1.2);
      }
      if (a.dir !== null) {
        dx = Math.cos(a.dir);
        dy = Math.sin(a.dir);
        sp = def.walk;
      }
    }
    // Frozen briefly right after attacking — gives the target room to back off and shoot
    // (animals out-run fleeing units otherwise).
    if (a._pauseT > 0) sp = 0;

    if (sp > 0) {
      const step = sp * dt;
      const nx = a.x + dx * step;
      const ny = a.y + dy * step;
      if (!blocked(nx, a.y, a.r)) a.x = nx;
      else if (!a.aggro) a.dir = rand(0, TAU);
      if (!blocked(a.x, ny, a.r)) a.y = ny;
      else if (!a.aggro) a.dir = rand(0, TAU);
      a.x = clamp(a.x, a.r, WORLD.w - a.r);
      a.y = clamp(a.y, a.r, WORLD.h - a.r);
      a.vx = dx;
      a.vy = dy;
    } else {
      a.vx = 0;
      a.vy = 0;
    }

    // Animals must never get stuck on a base: an aggro animal that can't make progress gives up
    // and wanders off; one fully boxed in on a foundation is relocated out.
    if (tx !== null) {
      const moved = Math.hypot(a.x - (a._apx || a.x), a.y - (a._apy || a.y));
      if (moved < (sp * dt) * 0.25) {
        a._stuckT = (a._stuckT || 0) + dt;
        if (a._stuckT > 1.5) {  // can't reach the target -> stop chasing, wander away
          a.aggro = false;
          a.dir = rand(0, TAU);
        }
        if (a._stuckT > 3) {  // blocked on all four sides (a base foundation closed around it) -> relocate the animal
          let walls = 0;
          for (const [ddx, ddy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
            if (blocked(a.x + ddx * (a.r + 6), a.y + ddy * (a.r + 6), a.r)) walls++;
          }
          if (walls >= 4) {
            a._stuckT = 0;
            respawnAnimal(a);
          }
        }
      } else {
        a._stuckT = 0;
      }
    }
    a._apx = a.x;
    a._apy = a.y;

    if (tx !== null && a.atkcd <= 0) {  // close enough? attack, then freeze briefly
      const d = dist(a.x, a.y, tx, ty);
      if (turretKey) {
        if (d < a.r + TILE * 0.55) {
          damageDeploy(turretKey, def.dmg);
          a.atkcd = def.atk;
          a._pauseT = ANIM_PAUSE;
          burst(tx, ty, '#9aa1a8', 4, 120);
        }
      } else if (botTarget) {  // maul a bot
        if (d < a.r + 16 && typeof hurtBot === 'function') {
          hurtBot(botTarget, def.dmg, a.x, a.y);
          a.atkcd = def.atk;
          a._pauseT = ANIM_PAUSE;
          burst(botTarget.x, botTarget.y, COL.blood, 4, 120);
        }
      } else if (foeTarget) {  // bite another animal -> the victim now fights back
        if (foeTarget.hp > 0 && d < a.r + foeTarget.r + 2) {
          damageAnimal(foeTarget, def.dmg, a.x, a.y);
          foeTarget._foe = a;
          a.atkcd = def.atk;
          a._pauseT = ANIM_PAUSE;
        }
      } else if (!hidden && d < a.r + PLAYER_R + 2) {  // bite the player; a scorpion sting poisons (10s DoT)
        hurtPlayer(def.dmg, a.x, a.y);
        if (def.poison) player.poison = Math.max(player.poison || 0, 10);
        a.atkcd = def.atk;
        a._pauseT = ANIM_PAUSE;
      }
    }
  }
}

/* ------------------------------- player hp ------------------------------ */

function hurtPlayer(dmg, fromx, fromy) {
  if (player.dead || player.invuln > 0 || game.ghost || dmg <= 0 || inSafeZone(player.x, player.y)) return;  // no damage inside the trade safe zone
  player.health -= dmg;
  player.hurt = 0.28;
  player.regenDelay = 4.5;
  const d = dist(player.x, player.y, fromx, fromy) || 1;  // knockback away from the hit
  player.x += (player.x - fromx) / d * 7;
  player.y += (player.y - fromy) / d * 7;
  player.x = clamp(player.x, PLAYER_R, WORLD.w - PLAYER_R);
  player.y = clamp(player.y, PLAYER_R, WORLD.h - PLAYER_R);
  burst(player.x, player.y, COL.blood, 6, 140);
  if (player.health <= 0) {
    player.health = 0;
    playerDie();
  }
}

function playerDie() {
  player.dead = true;
  player.deadT = 2.2;
  burst(player.x, player.y, COL.blood, 28, 240);
  game.deathMark = { x: player.x, y: player.y };  // remember where we died -> skull on the map
  if (typeof creditKill === 'function' && player.lastHitBy) creditKill(player.lastHitBy);
  player.lastHitBy = null;
  for (const k of ['wood', 'stone', 'metal']) {  // drop carried resources
    if (game.inv[k] > 0) {
      spillStack(player.x, player.y, k, game.inv[k]);
      game.inv[k] = 0;
    }
  }
  let ammo = 0;  // pool all gun ammo, then drop it as up to 8 piles
  for (const key in WEAPONS) {
    const w = WEAPONS[key];
    if (w === WEAPONS.rocket) continue;
    ammo += (w.ammo | 0) + (w.reserve | 0);
    w.ammo = 0;
    w.reserve = 0;
  }
  for (let i = 0, piles = Math.min(8, Math.ceil(ammo / 30)); i < piles && ammo > 0; i++) {
    addLoot(player.x, player.y, 'ammo', Math.ceil(ammo / piles));
  }
  const rk = (WEAPONS.rocket.ammo | 0) + (WEAPONS.rocket.reserve | 0);  // drop rockets (at most 12)
  WEAPONS.rocket.ammo = 0;
  WEAPONS.rocket.reserve = 0;
  for (let i = 0; i < rk && i < 12; i++) addLoot(player.x, player.y, 'rocket', 1);
}

function playerCupboard() {
  for (const [k, s] of game.deploys) {
    if (s.type === 'cupboard' && s.owner === OWNER) {
      const [gx, gy] = k.split(',').map(Number);
      return { gx, gy, cx: gx * TILE + TILE / 2, cy: gy * TILE + TILE / 2 };
    }
  }
  return null;
}

function respawnPlayer() {
  player.dead = false;
  player.health = player.maxhp;
  player.hurt = 0;
  player.regenDelay = 0;
  player.invuln = 1.8;
  player.inCopter = false;
  const tc = playerCupboard();
  if (tc) {  // respawn at the base Tool Cupboard
    player.x = clamp(tc.cx, PLAYER_R, WORLD.w - PLAYER_R);
    player.y = clamp(tc.cy, PLAYER_R, WORLD.h - PLAYER_R);
  } else {  // no base — random open spot on the map, away from the safe zone
    let rx = WORLD.w / 2;
    let ry = WORLD.h / 2;
    for (let tries = 0; tries < 60; tries++) {
      const x = 80 + Math.random() * (WORLD.w - 160);
      const y = 80 + Math.random() * (WORLD.h - 160);
      if (inSafeZone(x, y)) continue;
      if (blocked(x, y, PLAYER_R)) continue;
      rx = x;
      ry = y;
      break;
    }
    player.x = rx;
    player.y = ry;
  }
  if (game.copter && game.copter.destroyed) {  // hand back a fresh minicopter
    game.copter.destroyed = false;
    game.copter.hp = game.copter.max;
    game.copter.x = player.x + 120;
    game.copter.y = player.y;
    game.copter.vx = 0;
    game.copter.vy = 0;
    game.copter.spd = 0;
  }
  for (const a of game.animals) {  // clear all aggro; any animal camping the spawn point is despawned to respawn elsewhere
    a.aggro = false;
    if (dist2(a.x, a.y, player.x, player.y) < 200 * 200) {
      a.x += 260;
      a.respawn = 0.6;
      a.hp = 0;
    }
  }
}
