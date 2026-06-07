"use strict";
// Combat: weapon fire, swept bullet hit-tests (ricochets, head shots), loot pickup, rockets,
// satchels, fires, vehicle wrecks, and explosion damage with line-of-sight shielding.

/* ------------------------------- shooting ------------------------------- */

function fire() {
  const w = curWeapon();
  if (!w) return;
  if (inSafeZone(player.x, player.y)) {  // weapons are disabled inside the trade safe zone
    flashTip('No weapons in the safe zone');
    return;
  }
  if (w.reloading > 0 || w.cd > 0) return;
  if (w.ammo <= 0) {
    reload();
    return;
  }
  w.ammo--;
  w.cd = w.rof;
  const spread = (game.slot === 2 && player.rifleLaser) ? w.spread * 0.4 : w.spread;  // rifle laser-sight upgrade tightens spread
  const tracer = (w === WEAPONS.hmg) ? COL.hmgTracer : null;  // the HMG fires hot-orange tracers so the heavy gun is obvious
  const pellets = w.pellets || 1;
  let lastAng = player.angle;
  let lastX = player.x + 26;
  let lastY = player.y;
  for (let p = 0; p < pellets; p++) {
    const ang = player.angle + rand(-spread, spread);
    const tx = player.x + Math.cos(ang) * 26;
    const ty = player.y + Math.sin(ang) * 26;
    lastAng = ang;
    lastX = tx;
    lastY = ty;
    if (w.rocket) {
      game.rockets.push({
        x: tx, y: ty,
        vx: Math.cos(ang) * w.speed, vy: Math.sin(ang) * w.speed,
        life: w.range, w, smoke: 0, from: OWNER
      });
    } else {
      game.bullets.push({
        x: tx, y: ty, px: tx, py: ty,
        vx: Math.cos(ang) * w.speed, vy: Math.sin(ang) * w.speed,
        life: w.range, dmg: w.dmg, from: OWNER, col: tracer
      });
    }
  }
  player.recoil = Math.min(12, player.recoil + w.kick);
  game.muzzle = { x: lastX, y: lastY, a: lastAng, life: w.rocket ? 0.08 : 0.05 };
  burst(lastX, lastY, COL.flash, 3, 130);  // no screen shake on firing — only a rocket exploding in view shakes
}

function fireRapidRocket() {  // infinite-ammo rapid rockets toward the cursor (never inside the safe zone)
  if (inSafeZone(player.x, player.y)) return;
  const w = WEAPONS.rocket;
  const t = screenToWorld(mouse.sx, mouse.sy);
  const ang = Math.atan2(t.y - player.y, t.x - player.x);
  const tx = player.x + Math.cos(ang) * 26;
  const ty = player.y + Math.sin(ang) * 26;
  game.rockets.push({
    x: tx, y: ty,
    vx: Math.cos(ang) * w.speed, vy: Math.sin(ang) * w.speed,
    life: w.range, w, smoke: 0, from: OWNER
  });
  player.recoil = Math.min(12, player.recoil + 2);
  game.muzzle = { x: tx, y: ty, a: ang, life: 0.08 };
  burst(tx, ty, COL.flash, 3, 130);
}

function updateRapidRockets(dt) {
  game.rapidCd -= dt;
  if (!game.rapidRockets) return;
  if (mouse.down && !player.dead && !player.inCopter && !game.store && !game.shopOpen &&
      !game.godView && !game.buildMode && game.rapidCd <= 0) {
    game.rapidCd = 0.1;
    fireRapidRocket();
  }
}

function damageBarrel(barrel, dmg, impact) {
  barrel.hp -= dmg;
  burst(impact.x, impact.y, COL.barrelLt, 5, 160);
  addFloat(barrel.x, barrel.y - barrel.r, '-' + Math.round(dmg), '#ffd0c0');
  if (barrel.hp <= 0) {
    burst(barrel.x, barrel.y, COL.barrel, 28, 280);
    burst(barrel.x, barrel.y, '#ffcaa0', 14, 200);
    const tier = barrel.tier || 'basic';  // monument barrels drop the most; roadside drop scrap + ammo
    if (tier === 'mon') {
      spillStack(barrel.x, barrel.y, 'scrap', randi(22, 42));
      addLoot(barrel.x, barrel.y, 'ammo', randi(45, 85));
    } else if (tier === 'road') {
      spillStack(barrel.x, barrel.y, 'scrap', randi(8, 16));
      addLoot(barrel.x, barrel.y, 'ammo', randi(16, 34));
    } else {
      spillStack(barrel.x, barrel.y, 'scrap', randi(3, 7));
      for (let i = 0; i < randi(2, 5); i++) addLoot(barrel.x, barrel.y, 'metal', 1);
    }
    barrel.respawn = (tier === 'mon') ? 82 : 22;  // monument loot respawns slowest; roadside quickly
  }
}

function damageDummy(dummy, dmg, impact) {
  dummy.hp -= dmg;
  dummy.hit = 0.12;
  burst(impact.x, impact.y, '#d8c79a', 4, 120);
  addFloat(dummy.x, dummy.y - dummy.r - 4, '-' + dmg, '#ffe0b0');
  if (dummy.hp <= 0) {
    burst(dummy.x, dummy.y, '#b9a06f', 18, 210);
    const wood = randi(5, 9);
    for (let i = 0; i < wood; i++) addLoot(dummy.x, dummy.y, 'wood', 1);
    dummy.respawn = 12;
  }
}

function bulletHitStruct(b) {  // gunfire chips structures: a crossed wall takes the hit (and shields the turret behind it)
  const wallDmg = Math.max(1, Math.round((b.dmg || 10) * 0.10));  // bullets only chip walls
  const gx = Math.floor(b.x / TILE);
  const gy = Math.floor(b.y / TILE);
  for (const k of ['V,' + gx + ',' + gy, 'V,' + (gx + 1) + ',' + gy, 'H,' + gx + ',' + gy,
      'H,' + gx + ',' + (gy + 1), 'D,' + gx + ',' + gy]) {
    const wall = game.walls.get(k);
    if (!wall || wall.hp <= 0) continue;
    const seg = wallSegOf(k, wall);
    if (segSeg(b.px, b.py, b.x, b.y, seg[0], seg[1], seg[2], seg[3]) ||
        ptSeg(b.x, b.y, seg[0], seg[1], seg[2], seg[3]) < 10) {
      if ((wall.owner || OWNER) !== b.from) damageWall(k, wallDmg);  // no friendly fire: never damage your own team's wall
      return;
    }
  }
  if (typeof wallBlocksView === 'function' && wallBlocksView(b.px, b.py, b.x, b.y)) return;  // a wall between shooter and deploy shields the turret behind it
  const cellKey = gkey(gx, gy);
  const deploy = game.deploys.get(cellKey);
  if (deploy && deploy.hp !== undefined && (deploy.owner || OWNER) !== b.from) {  // never damage your own turret/cupboard/box (including turret fire on a friendly turret)
    const mul = deploy.type === 'cupboard' ? 0.05 : 0.25;  // guns barely scratch a Tool Cupboard — rockets/satchels break it
    damageDeploy(cellKey, Math.max(1, Math.round((b.dmg || 10) * mul)));
  }
}

function bulletSurfaceNormal(b) {  // approximate unit normal of whatever the bullet just hit (for the ricochet reflection)
  const gx = Math.floor(b.x / TILE);
  const gy = Math.floor(b.y / TILE);
  for (const k of ['V,' + gx + ',' + gy, 'V,' + (gx + 1) + ',' + gy, 'H,' + gx + ',' + gy,
      'H,' + gx + ',' + (gy + 1), 'D,' + gx + ',' + gy]) {
    const wall = game.walls.get(k);
    if (!wall || wall.hp <= 0) continue;
    const seg = wallSegOf(k, wall);
    if (segSeg(b.px, b.py, b.x, b.y, seg[0], seg[1], seg[2], seg[3]) ||
        ptSeg(b.x, b.y, seg[0], seg[1], seg[2], seg[3]) < 10) {
      if (k[0] === 'V') return { x: 1, y: 0 };  // vertical wall -> horizontal normal (flips vx)
      if (k[0] === 'H') return { x: 0, y: 1 };  // horizontal wall -> vertical normal (flips vy)
      const dx = seg[2] - seg[0];               // diagonal wall: perpendicular of the segment
      const dy = seg[3] - seg[1];
      const L = Math.hypot(dx, dy) || 1;
      return { x: -dy / L, y: dx / L };
    }
  }
  const boulder = (typeof boulderAt === 'function') ? boulderAt(b.x, b.y) : null;
  if (boulder) {  // boulder: radial normal from its centre
    const dx = b.x - boulder.x;
    const dy = b.y - boulder.y;
    const L = Math.hypot(dx, dy) || 1;
    return { x: dx / L, y: dy / L };
  }
  // Turret/cupboard cell: normal points out from the cell centre.
  const cx = gx * TILE + TILE / 2;
  const cy = gy * TILE + TILE / 2;
  const dx = b.x - cx;
  const dy = b.y - cy;
  const L = Math.hypot(dx, dy) || 1;
  return { x: dx / L, y: dy / L };
}

function updateBullets(dt) {
  // A bullet may travel at most ~2x the current viewport, then it dies — no shots flying clear across the map.
  const maxRange = 2 * Math.max(VW || 1280, VH || 800) / (game.zoom || 1);
  for (let i = game.bullets.length - 1; i >= 0; i--) {
    const b = game.bullets[i];
    b.px = b.x;
    b.py = b.y;
    b.x += b.vx * dt;
    b.y += b.vy * dt;
    b.life -= dt;
    let dead = false;

    if (b.ricochet) {  // a ricocheted bullet decelerates, then disappears
      const dec = Math.pow(0.3, dt);
      b.vx *= dec;
      b.vy *= dec;
      if (Math.hypot(b.vx, b.vy) < 150) dead = true;
    }
    b.dist = (b.dist || 0) + Math.hypot(b.x - b.px, b.y - b.py);
    if (b.dist > maxRange) dead = true;
    if (b.x < 0 || b.y < 0 || b.x > WORLD.w || b.y > WORLD.h || b.life <= 0) dead = true;

    if (!dead) {  // walls / solid structures / boulders
      const wallHit = wallBlocksView(b.px, b.py, b.x, b.y);
      let solidHit = isSolidAt(b.x, b.y);
      // Boulders stop bullets and take no damage (ricochet still applies).
      const boulderHit = (typeof boulderBlocks === 'function') && boulderBlocks(b.x, b.y, 0);
      if (solidHit && !wallHit) {  // a shot passes over its own team's turrets (friendly turrets don't block the line of fire) — but still stops at walls
        const cellKey = gkey(Math.floor(b.x / TILE), Math.floor(b.y / TILE));
        const occupant = game.deploys.get(cellKey) || game.structures.get(cellKey);
        if (occupant && occupant.type === 'turret' && (occupant.owner || OWNER) === b.from) solidHit = false;
      }
      if (solidHit || wallHit || boulderHit) {
        if (wallHit || solidHit) bulletHitStruct(b);  // chip walls/structures (not boulders — they're indestructible)
        // Ricochet: 80% off a rounded boulder, 15% off a wall/turret — still does damage, loses energy and fades.
        if ((b.bounces || 0) < 2 && Math.random() < (boulderHit ? 0.80 : 0.15)) {
          let n = bulletSurfaceNormal(b);
          if (b.vx * n.x + b.vy * n.y > 0) n = { x: -n.x, y: -n.y };  // orient the normal outward, back toward the shooter's side of the wall
          const vn = b.vx * n.x + b.vy * n.y;
          const rx = b.vx - 2 * vn * n.x;  // mirror reflection -> now points away from the wall
          const ry = b.vy - 2 * vn * n.y;
          const da = rand(-0.45, 0.45);    // plus a slight random scatter (~±26°)
          const cs = Math.cos(da);
          const sn = Math.sin(da);
          let vx2 = rx * cs - ry * sn;
          let vy2 = rx * sn + ry * cs;
          if (vx2 * n.x + vy2 * n.y < 0.05 * Math.hypot(vx2, vy2)) {  // scatter tipped it back into the wall -> drop the scatter; a ricochet must never cross the wall (bullets don't pass through walls)
            vx2 = rx;
            vy2 = ry;
          }
          b.vx = vx2 * 0.6;
          b.vy = vy2 * 0.6;
          b.x = b.px + n.x * 6;  // step off along the outward normal from the pre-impact (outside) position -> can never land on the far side / inside a base
          b.y = b.py + n.y * 6;
          b.ricochet = true;
          b.bounces = (b.bounces || 0) + 1;
          b.dmg = Math.max(1, Math.round(b.dmg * 0.6));  // ricochets hit a bit softer
          burst(b.px, b.py, COL.ricochet, 7, 220);       // spark at the impact
        } else {
          burst(b.x, b.y, '#cfd6c0', 5, 150);
          dead = true;
        }
      }
    }

    if (!dead && game.fences) {  // wood fences stop bullets
      for (const f of game.fences) {
        if (f.hp <= 0) continue;
        if (segSeg(b.px, b.py, b.x, b.y, f.x0, f.y0, f.x1, f.y1) ||
            ptSeg(b.x, b.y, f.x0, f.y0, f.x1, f.y1) < 5) {
          damageFence(f, b.dmg);
          burst(b.x, b.y, '#d8b888', 5, 150);
          dead = true;
          break;
        }
      }
    }

    if (!dead) {
      for (const o of game.barrels) {
        if (o.hp <= 0) continue;
        if (dist2(b.x, b.y, o.x, o.y) < (o.r + 2) * (o.r + 2)) {
          damageBarrel(o, b.dmg, b);
          dead = true;
          break;
        }
      }
    }

    if (!dead && game.airdrop && game.airdrop.fall >= 1) {  // shoot the landed airdrop crate to spill the loot (segment test: fast bullets never tunnel past)
      const a = game.airdrop;
      if (ptSeg(a.x, a.y, b.px, b.py, b.x, b.y) < 22) {
        a.hp -= b.dmg;
        burst(b.x, b.y, COL.barrelLt, 5, 160);
        addFloat(a.x, a.y - 26, '-' + Math.round(b.dmg), '#ffd0c0');
        if (a.hp <= 0) {
          spillAirdrop(a);
          game.airdrop = null;
        }
        dead = true;
      }
    }

    if (!dead) {
      for (const o of game.dummies) {
        if (o.hp <= 0) continue;
        if (dist2(b.x, b.y, o.x, o.y) < (o.r + 2) * (o.r + 2)) {
          damageDummy(o, b.dmg, b);
          dead = true;
          break;
        }
      }
    }

    if (!dead) {
      for (const a of game.animals) {
        if (a.hp <= 0) continue;
        if (ptSeg(a.x, a.y, b.px, b.py, b.x, b.y) < (a.r + 2)) {  // swept hit-test: no tunneling
          damageAnimal(a, b.dmg, b.px, b.py);
          dead = true;
          break;
        }
      }
    }

    if (!dead && b.from !== 'guard' && game.guards) {  // monument guards take fire from everyone (player + bots); guards never hit each other
      for (const g of game.guards) {
        if (g.dead) continue;
        if (ptSeg(g.x, g.y, b.px, b.py, b.x, b.y) < (GUARD.r + 2)) {  // swept hit-test: no tunneling
          const head = segHitsHead(g.x, g.y, b);
          hurtGuard(g, b.dmg * (head ? HEADSHOT_MUL : 1), b.from);
          if (head && b.from === OWNER) addFloat(g.x, g.y - 24, 'headshot', '#ffe07a');
          dead = true;
          break;
        }
      }
    }

    if (!dead) {  // enemy bots
      for (const e of game.enemies) {
        if (e.dead || e.flying || e.eliminated || b.from === e.owner) continue;
        // Swept hit-test over the bullet's whole path this step (not just its end point) -> fast
        // bullets never tunnel through a unit at coarse dt / high speed.
        if (ptSeg(e.x, e.y, b.px, b.py, b.x, b.y) < 14) {
          let ax = b.px;  // tell the bot where the shot came from — the closest same-team shooter
          let ay = b.py;
          if (b.from === OWNER) {
            let bestDistSq = (player.dead || player.inCopter || game.ghost) ? 1e18 : dist2(e.x, e.y, player.x, player.y);
            ax = player.x;
            ay = player.y;
            for (const al of game.enemies) {
              if (al.ally && !al.dead && !al.eliminated) {
                const dd = dist2(e.x, e.y, al.x, al.y);
                if (dd < bestDistSq) {
                  bestDistSq = dd;
                  ax = al.x;
                  ay = al.y;
                }
              }
            }
          } else if (b.from) {
            const shooter = game.enemies.find(z => z.owner === b.from);
            if (shooter) {
              ax = shooter.x;
              ay = shooter.y;
            }
          }
          const head = segHitsHead(e.x, e.y, b);
          const dmg = botArmorMitigate(e, b.dmg * (head ? HEADSHOT_MUL : 1), head);  // head shots hurt more; worn armor mitigates
          hurtBot(e, dmg, ax, ay, b.from);
          if (head && b.from === OWNER) addFloat(e.x, e.y - 24, 'headshot', '#ffe07a');
          dead = true;
          break;
        }
      }
    }

    if (!dead && game.transports) {  // a transport heli can be shot down (destruction is handled in updateTransports)
      for (const tr of game.transports) {
        if (tr.destroyed || tr.owner === b.from) continue;
        if (ptSeg(tr.x, tr.y, b.px, b.py, b.x, b.y) < (TRANSPORT.r + 2)) {  // swept hit-test: no tunneling
          tr.hp -= b.dmg;
          burst(b.x, b.y, '#cfd6cf', 5, 150);
          if (tr.hp <= 0) tr.destroyed = true;
          dead = true;
          break;
        }
      }
    }

    if (!dead && b.from !== 'convoy' && game.convoys) {  // the armored convoy and its escorts take fire from everyone (player + bots), never from itself
      for (const c of game.convoys) {
        if (ptSeg(c.x, c.y, b.px, b.py, b.x, b.y) < 26) {
          c.hp -= b.dmg;
          burst(b.x, b.y, '#ffd27a', 4, 150);
          dead = true;
          break;
        }
        for (const g of c.guards) {
          if (g.dead) continue;
          if (ptSeg(g.x, g.y, b.px, b.py, b.x, b.y) < 14) {
            g.hp -= b.dmg;
            burst(b.x, b.y, COL.blood, 5, 140);
            if (g.hp <= 0) {
              g.dead = true;
              if (typeof addLoot === 'function') addLoot(g.x, g.y, 'ammo', randi(6, 12));
            }
            dead = true;
            break;
          }
        }
        if (dead) break;
      }
    }

    if (!dead && b.from && b.from !== OWNER && !player.dead && !player.inCopter) {  // enemy bullet hits the player
      if (ptSeg(player.x, player.y, b.px, b.py, b.x, b.y) < (PLAYER_R + 2)) {  // swept hit-test: no tunneling
        player.lastHitBy = b.from;
        const head = segHitsHead(player.x, player.y, b);  // head shots hurt more; facemask/body armor mitigate
        hurtPlayer(playerArmorMitigate(b.dmg * (head ? HEADSHOT_MUL : 1), head), b.x, b.y);
        dead = true;
      }
    }

    if (dead) game.bullets.splice(i, 1);
  }
}

function updateLoot(dt) {
  const playerLoots = !player.inCopter && !player.dead && !game.ghost;  // in ghost mode the player neither attracts nor picks up loot — the AI grabs it instead
  for (let i = game.loot.length - 1; i >= 0; i--) {
    const o = game.loot[i];
    o.life += dt;
    o.bob += dt * 6;
    o.x += o.vx * dt;
    o.y += o.vy * dt;
    o.vx *= 0.88;
    o.vy *= 0.88;

    if (playerLoots) {  // player magnet + pickup
      const d = dist(o.x, o.y, player.x, player.y);
      if (o.life > 0.35 && d < 150 && d > 0.01) {
        const pull = 210 * dt;
        o.x += (player.x - o.x) / d * pull;
        o.y += (player.y - o.y) / d * pull;
      }
      if (d < 20) {
        if (o.kind === 'ammo') {
          WEAPONS.rifle.reserve += o.amt;
          WEAPONS.pistol.reserve += Math.ceil(o.amt * 0.4);
          WEAPONS.shotgun.reserve += Math.ceil(o.amt * 0.3);
          addFloat(player.x, player.y - 26, '+' + o.amt + ' ammo', '#ffe9a3');
        } else if (o.kind === 'rocket') {
          WEAPONS.rocket.reserve += o.amt;
          addFloat(player.x, player.y - 26, '+' + o.amt + ' rocket', '#ffb98a');
        } else if (o.kind === 'satchel') {
          if (WEAPONS.satchel) {
            WEAPONS.satchel.reserve = (WEAPONS.satchel.reserve || 0) + o.amt;
            if (typeof refreshHotbar === 'function') refreshHotbar();
            addFloat(player.x, player.y - 26, '+' + o.amt + ' satchel', '#ffd0a0');
          } else {
            give('scrap', o.amt * 8);
            addFloat(player.x, player.y - 26, '+' + (o.amt * 8) + ' scrap', '#cfd6cf');
          }
        } else if (o.kind === 'sniper') {
          const isNew = !game.owned.sniper;
          game.owned.sniper = true;
          WEAPONS.sniper.reserve += 12;
          if (typeof refreshHotbar === 'function') refreshHotbar();
          addFloat(player.x, player.y - 26, isNew ? 'SNIPER unlocked!' : '+12 sniper ammo', '#bfe3ff');
        } else if (o.kind === 'gun') {  // scavenge a dropped enemy gun
          if (o.gun) {
            const isNew = !game.owned[o.gun];
            game.owned[o.gun] = true;
            if (WEAPONS[o.gun]) WEAPONS[o.gun].reserve = (WEAPONS[o.gun].reserve || 0) + (o.gun === 'hmg' ? 60 : 30);
            if (typeof refreshHotbar === 'function') refreshHotbar();
            addFloat(player.x, player.y - 26,
                     isNew ? (o.gun.toUpperCase() + ' looted!') : ('+' + o.gun + ' ammo'), '#cfe0a0');
          }
        } else {
          give(o.kind, o.amt);
          if (o.kind === 'scrap') addFloat(player.x, player.y - 26, '+' + o.amt + ' scrap', '#cfd6cf');
        }
        game.loot.splice(i, 1);
        continue;
      }
    }

    if (o.life > 0.3 && game.enemies && game.enemies.length) {  // AI magnet + pickup — bots collect every loot kind
      let near = null;
      let bestDistSq = 180 * 180;
      for (const bot of game.enemies) {
        if (bot.dead || bot.eliminated || bot.flying) continue;
        const dd = dist2(o.x, o.y, bot.x, bot.y);
        if (dd < bestDistSq) {
          bestDistSq = dd;
          near = bot;
        }
      }
      if (near) {
        const d = Math.sqrt(bestDistSq) || 1;
        if (d > 22) {  // pull loot toward the nearest bot
          const pull = 240 * dt;
          o.x += (near.x - o.x) / d * pull;
          o.y += (near.y - o.y) / d * pull;
        } else {
          if (o.kind === 'scrap') near.scrap = (near.scrap || 0) + o.amt;
          else if (o.kind === 'rocket') near.rockets = (near.rockets || 0) + o.amt;    // scavenged rockets feed more rocket raids
          else if (o.kind === 'satchel') near.satchels = (near.satchels || 0) + o.amt; // scavenged satchels become breaching charges
          else if (o.kind === 'ammo') near.scrap = (near.scrap || 0) + Math.ceil(o.amt / 8);  // bots can't use ammo — bank a little scrap so nothing is left behind
          else if (o.kind === 'sniper') near.scrap = (near.scrap || 0) + 30;           // bots can't equip the player sniper — bank its value
          else if (o.kind === 'gun') {  // a better gun off the dead upgrades the bot's weapon (winning-team momentum); a redundant gun banks a little scrap
            if (o.gun && gunRank(o.gun) > gunRank(near.gun)) near.gun = o.gun;
            else near.scrap = (near.scrap || 0) + 10;
          }
          else near.inv[o.kind] = (near.inv[o.kind] || 0) + o.amt;
          game.loot.splice(i, 1);
          continue;
        }
      }
    }
  }
}

/* --------------------------- rockets & damage --------------------------- */

function cleanupOrphans(gx, gy) {  // a destroyed floor takes its diagonal and any now-unsupported edge walls with it
  game.walls.delete('D,' + gx + ',' + gy);
  for (const ek of ['H,' + gx + ',' + gy, 'H,' + gx + ',' + (gy + 1),
      'V,' + gx + ',' + gy, 'V,' + (gx + 1) + ',' + gy]) {
    if (game.walls.has(ek) && !edgeHasFoundation(ek)) game.walls.delete(ek);
  }
}

function damageStructure(key, dmg) {
  const s = game.structures.get(key);
  if (!s) return;
  s.hp -= dmg;
  s._hitT = game.t;  // hit timestamp blocks repair for REPAIR_LOCK seconds (no instant repairs mid-raid)
  const [gx, gy] = key.split(',').map(Number);
  const cx = gx * TILE + TILE / 2;
  const cy = gy * TILE + TILE / 2;
  if (s.hp <= 0) {
    game.structures.delete(key);
    game._breachT = game._breachT || {};
    game._breachT[key] = game.t;  // breach timestamp: this spot can't be rebuilt for REPAIR_LOCK seconds (raids stay open)
    burst(cx, cy, matCols(s.mat).lt, 16, 210);
    burst(cx, cy, '#6f4a22', 10, 150);
    if (s.type === 'floor' || s.type === 'trifloor') cleanupOrphans(gx, gy);
  } else {
    burst(cx, cy, matCols(s.mat).lt, 4, 120);
  }
}

function damageWall(key, dmg) {
  const wl = game.walls.get(key);
  if (!wl) return;
  wl.hp -= dmg;
  wl._hitT = game.t;  // hit timestamp blocks repair for REPAIR_LOCK seconds (no instant repairs mid-raid)
  const sg = wallSegOf(key, wl);
  const cx = (sg[0] + sg[2]) / 2;
  const cy = (sg[1] + sg[3]) / 2;
  if (wl.hp <= 0) {
    game.walls.delete(key);
    game._breachT = game._breachT || {};
    game._breachT[key] = game.t;  // breach timestamp: this edge can't be re-walled for REPAIR_LOCK seconds — a destroyed wall stays a hole, so raids actually break in
    burst(cx, cy, matCols(wl.mat).lt, 14, 200);
  } else {
    burst(cx, cy, matCols(wl.mat).lt, 4, 120);
  }
}

function explode(x, y, w, from) {
  burst(x, y, COL.explosion, 34, 360);
  burst(x, y, '#ffe2a0', 18, 240);
  burst(x, y, '#5a4a36', 16, 160);
  game.flashes.push({ x, y, life: 0.25, max: 0.25, r: w.splash });
  game.scorch.push({ x, y, r: w.splash * 0.66 });
  if (game.scorch.length > 36) game.scorch.shift();
  if (w.rocket && inView(x, y, 40)) {  // only an in-view rocket blast shakes the screen
    game.shake = Math.max(game.shake, 16);
  } else if (w.rocket) {               // off-screen rocket -> directional blast indicator, no shake
    game.blasts.push({ x, y, life: 1.4, max: 1.4 });
    if (game.blasts.length > 12) game.blasts.shift();
  }
  const R = w.splash;
  const sd = w.structDmg || w.splashDmg;

  // "BASE UNDER ATTACK" warning: only an enemy ROCKET or SATCHEL landing on the player's base
  // triggers it — gunfire never does. Checked BEFORE damage is applied so a destroyed-then-
  // orphan-cleaned wall doesn't hide the hit.
  if ((w === WEAPONS.rocket || w === SATCHEL) && from && from !== OWNER) {
    let hit = false;
    for (const [key, s] of game.structures) {
      if ((s.owner || OWNER) !== OWNER) continue;
      const [gx, gy] = key.split(',').map(Number);
      if (dist(x, y, gx * TILE + TILE / 2, gy * TILE + TILE / 2) < R + TILE) {
        hit = true;
        break;
      }
    }
    if (!hit) {
      for (const [key, wl] of game.walls) {
        if ((wl.owner || OWNER) !== OWNER) continue;
        const sg = wallSegOf(key, wl);
        if (ptSeg(x, y, sg[0], sg[1], sg[2], sg[3]) < R + TILE) {
          hit = true;
          break;
        }
      }
    }
    if (!hit) {
      for (const [key, b] of game.deploys) {
        if ((b.owner || OWNER) !== OWNER) continue;
        const [gx, gy] = key.split(',').map(Number);
        if (dist(x, y, gx * TILE + TILE / 2, gy * TILE + TILE / 2) < R + TILE) {
          hit = true;
          break;
        }
      }
    }
    if (hit) game.raidAlarm = { x, y, t: 1.5 };
  }

  // Minimap raid pulse: only a ROCKET/SATCHEL landing on someone else's base lights the red dot
  // (never mere approach/targeting). Keyed per raided owner -> one pulse per base, refreshed on
  // each hit, fades after the last.
  if ((w === WEAPONS.rocket || w === SATCHEL) && from != null) {
    let raidedOwner = null;
    for (const [key, wl] of game.walls) {
      const o = (wl.owner || OWNER);
      if (o === from) continue;
      const sg = wallSegOf(key, wl);
      if (ptSeg(x, y, sg[0], sg[1], sg[2], sg[3]) < R + TILE) {
        raidedOwner = o;
        break;
      }
    }
    if (raidedOwner === null) {
      for (const [key, b] of game.deploys) {
        const o = (b.owner || OWNER);
        if (o === from) continue;
        const [gx, gy] = key.split(',').map(Number);
        if (dist(x, y, gx * TILE + TILE / 2, gy * TILE + TILE / 2) < R + TILE) {
          raidedOwner = o;
          break;
        }
      }
    }
    if (raidedOwner === null) {
      for (const [key, s] of game.structures) {
        const o = (s.owner || OWNER);
        if (o === from) continue;
        const [gx, gy] = key.split(',').map(Number);
        if (dist(x, y, gx * TILE + TILE / 2, gy * TILE + TILE / 2) < R + TILE) {
          raidedOwner = o;
          break;
        }
      }
    }
    if (raidedOwner !== null && typeof markRaid === 'function') markRaid(x, y, 'raid_' + raidedOwner);
  }

  for (const key of [...game.structures.keys()]) {
    const s = game.structures.get(key);
    if ((s.owner || OWNER) === from) continue;  // no friendly fire on your own base
    if (s.type === 'turret' || s.type === 'box') {  // turret/box take splash damage
      const [gx, gy] = key.split(',').map(Number);
      const cx = gx * TILE + TILE / 2;
      const cy = gy * TILE + TILE / 2;
      const d = dist(x, y, cx, cy);
      const reach = R + TILE * 0.5;
      if (d < reach) damageStructure(key, w.splashDmg * clamp(1 - d / reach, 0, 1));
      continue;
    }
    const [gx, gy] = key.split(',').map(Number);  // floors/cupboard take structure damage
    const cx = gx * TILE + TILE / 2;
    const cy = gy * TILE + TILE / 2;
    const d = dist(x, y, cx, cy);
    const reach = R + TILE * 0.5;
    if (d < reach) damageStructure(key, sd * clamp(1 - d / reach, 0, 1));
  }

  for (const key of [...game.walls.keys()]) {
    const wl = game.walls.get(key);
    if (!wl) continue;
    if ((wl.owner || OWNER) === from) continue;
    const sg = wallSegOf(key, wl);
    const d = ptSeg(x, y, sg[0], sg[1], sg[2], sg[3]);
    if (d < R) damageWall(key, sd * clamp(1 - d / R, 0, 1));
  }

  for (const key of [...game.deploys.keys()]) {
    const b = game.deploys.get(key);  // !b guard: clearDeadBase (below) can delete sibling deploys mid-loop when a TC cracks
    if (!b) continue;
    if ((b.owner || OWNER) === from) continue;
    const [gx, gy] = key.split(',').map(Number);
    const cx = gx * TILE + TILE / 2;
    const cy = gy * TILE + TILE / 2;
    const d = dist(x, y, cx, cy);
    const reach = R + TILE * 0.4;
    if (d >= reach) continue;
    // Line of sight required: a wall/door between the blast and a turret/Tool Cupboard SHIELDS it.
    // Raiders must breach walls/doors to expose the TC, then blow it — a satchel on an outer wall
    // can never one-shot a TC through the base. Raids break in layer by layer.
    if (typeof wallBlocksView === 'function' && wallBlocksView(x, y, cx, cy)) continue;
    b.hp -= w.splashDmg * clamp(1 - d / reach, 0, 1);
    if (b.hp <= 0) {
      const wasTC = b.type === 'cupboard';
      const tcOwner = b.owner;
      spillContainer(cx, cy, b);
      game.deploys.delete(key);
      burst(cx, cy, COL.boxLt, 12, 180);
      if (wasTC && typeof clearDeadBase === 'function') clearDeadBase(tcOwner, cx, cy);  // cracking a TC also clears the dead base's debris
    }
  }

  for (const a of game.animals) {
    if (a.hp <= 0) continue;
    const d = dist(x, y, a.x, a.y);
    if (d < R + a.r) damageAnimal(a, w.splashDmg * clamp(1 - d / (R + a.r), 0, 1), x, y);
  }
  if (game.guards) {  // explosions hit monument guards too
    for (const g of game.guards) {
      if (g.dead) continue;
      const d = dist(x, y, g.x, g.y);
      if (d < R + GUARD.r) hurtGuard(g, w.splashDmg * clamp(1 - d / (R + GUARD.r), 0, 1), from);
    }
  }
  if (game.convoys) {  // rockets/satchels wreck the armored convoy fast (and its escorts)
    for (const c of game.convoys) {
      if (from === 'convoy') continue;
      if (dist(x, y, c.x, c.y) < R + 26) c.hp -= w.splashDmg * 1.5;
      for (const g of c.guards) {
        if (g.dead) continue;
        if (dist(x, y, g.x, g.y) < R + 14) {
          g.hp -= w.splashDmg;
          if (g.hp <= 0) {
            g.dead = true;
            if (typeof addLoot === 'function') addLoot(g.x, g.y, 'ammo', randi(6, 12));
          }
        }
      }
    }
  }
  for (const o of game.barrels) {
    if (o.hp <= 0) continue;
    if (dist(x, y, o.x, o.y) < R + o.r) damageBarrel(o, w.splashDmg, { x: o.x, y: o.y });
  }
  for (let fi = game.fences.length - 1; fi >= 0; fi--) {  // explosions shred fences
    const f = game.fences[fi];
    if (dist(x, y, f.x, f.y) < R + FENCE.half) damageFence(f, w.splashDmg);
  }
  for (const o of game.dummies) {
    if (o.hp <= 0) continue;
    if (dist(x, y, o.x, o.y) < R + o.r) damageDummy(o, w.splashDmg, { x: o.x, y: o.y });
  }
  const dp = dist(x, y, player.x, player.y);
  if (dp < R + PLAYER_R && !player.inCopter) {
    if (from && from !== OWNER) player.lastHitBy = from;
    hurtPlayer(Math.round(w.splashDmg * 0.45 * clamp(1 - dp / (R + PLAYER_R), 0, 1)), x, y);
  }
  for (const e of game.enemies) {  // no friendly splash on teammates
    if (e.dead || e.flying || e.eliminated) continue;
    if (from && e.owner === from) continue;
    const d = dist(x, y, e.x, e.y);
    if (d < R + 14) hurtBot(e, w.splashDmg * 0.8 * clamp(1 - d / (R + 14), 0, 1), x, y, from);
  }

  // Minicopters can be blown up.
  if (game.copter && !game.copter.destroyed && from !== OWNER) {
    const d = dist(x, y, game.copter.x, game.copter.y);
    if (d < R + COPTER.r) hurtCopter(game.copter, w.splashDmg * clamp(1 - d / (R + COPTER.r), 0, 1), null);
  }
  for (const e of game.enemies) {
    const c = e.copter;
    if (!c || c.destroyed) continue;
    if (from === e.owner) continue;
    const d = dist(x, y, c.x, c.y);
    if (d < R + COPTER.r) hurtCopter(c, w.splashDmg * clamp(1 - d / (R + COPTER.r), 0, 1), e);
  }
  if (w.rocket && Math.random() < 0.25) spawnFire(x, y);  // 25% of rockets ignite a fire
}

function vehicleWreck(x, y) {  // a destroyed copter/heli: big explosion plus a burning wreck (fire + smoke) for ~15s
  burst(x, y, COL.explosion, 40, 400);
  burst(x, y, '#ffe2a0', 20, 260);
  burst(x, y, '#3a3026', 18, 160);
  game.flashes.push({ x, y, life: 0.32, max: 0.32, r: 96 });
  if (typeof inView === 'function' && inView(x, y, 60)) game.shake = Math.max(game.shake, 15);
  game.scorch.push({ x, y, r: 52 });
  if (game.scorch.length > 36) game.scorch.shift();
  game.wrecks.push({ x, y, t: 15, max: 15, seed: rand(0, 9) });
  if (game.wrecks.length > 24) game.wrecks.shift();
}

function updateWrecks(dt) {
  if (!game.wrecks) return;
  for (let i = game.wrecks.length - 1; i >= 0; i--) {
    if ((game.wrecks[i].t -= dt) <= 0) game.wrecks.splice(i, 1);
  }
}

function drawWrecks() {
  if (!game.wrecks) return;
  for (const w of game.wrecks) {
    if (!inView(w.x, w.y, 60)) continue;
    const s = worldToScreen(w.x, w.y);
    const f = clamp(w.t / w.max, 0, 1);

    ctx.fillStyle = '#17130d';  // charred hull
    ctx.beginPath();
    ctx.ellipse(s.x, s.y, 13, 8, 0, 0, TAU);
    ctx.fill();

    const fl = 0.55 + 0.45 * Math.sin(game.t * 15 + w.seed);  // flame flicker
    ctx.fillStyle = 'rgba(196,60,30,' + (0.55 * f) + ')';
    ctx.beginPath();
    ctx.ellipse(s.x, s.y - 5, 8 * (0.55 + 0.45 * fl), 13 * (0.55 + 0.45 * fl), 0, 0, TAU);
    ctx.fill();
    ctx.fillStyle = 'rgba(255,150,40,' + (0.6 * f) + ')';
    ctx.beginPath();
    ctx.ellipse(s.x, s.y - 4, 5 * (0.55 + 0.45 * fl), 9 * (0.55 + 0.45 * fl), 0, 0, TAU);
    ctx.fill();
    ctx.fillStyle = 'rgba(255,228,140,' + (0.55 * f) + ')';
    ctx.beginPath();
    ctx.ellipse(s.x, s.y - 3, 2.4, 5 * (0.6 + 0.4 * fl), 0, 0, TAU);
    ctx.fill();

    for (let k = 0; k < 5; k++) {  // rising smoke column (keeps smoking even as the flames die)
      const ph = ((game.t * 0.45) + k * 0.2 + w.seed) % 1;
      const sy = s.y - 6 - ph * 54;
      const sr = 3 + ph * 11;
      const al = (1 - ph) * 0.42 * Math.min(1, f + 0.25);
      ctx.fillStyle = 'rgba(46,42,36,' + al + ')';
      ctx.beginPath();
      ctx.arc(s.x + Math.sin((game.t + k) * 1.2 + w.seed) * 7, sy, sr, 0, TAU);
      ctx.fill();
    }
  }
}

function hurtCopter(c, dmg, ownerBot) {  // ownerBot is set for an enemy copter; null = the player's copter
  if (!c || c.destroyed || dmg <= 0) return;
  c.hp -= dmg;
  burst(c.x, c.y, '#cfd6cf', 5, 160);
  if (c.hp <= 0) {  // destroyed: explosion + 15s fire/smoke; the occupant dies and their loot falls
    c.destroyed = true;
    vehicleWreck(c.x, c.y);
    if (ownerBot) {
      ownerBot.flying = false;
      ownerBot.x = c.x;
      ownerBot.y = c.y;
      if (typeof botDie === 'function' && !ownerBot.dead) botDie(ownerBot);
    } else if (player.inCopter) {
      player.inCopter = false;
      player.x = c.x;
      player.y = c.y;
      player.health = 0;
      if (!player.dead) playerDie();
    }
  }
}

function updateSatchels(dt) {
  for (let i = game.satchels.length - 1; i >= 0; i--) {
    const s = game.satchels[i];
    s.t -= dt;
    if (s.t <= 0) {
      explode(s.x, s.y, SATCHEL, s.from);
      game.satchels.splice(i, 1);
    }
  }
}

function spawnFire(x, y) {
  if (game.fires.length >= 80) return;
  game.fires.push({ x, y, life: 30, max: 30, r: 36, spreadT: rand(3, 7), spreads: 0, tick: 0 });
}

function fireAt(x, y) {
  for (const f of game.fires) {
    if (dist2(f.x, f.y, x, y) < (f.r * 0.6) * (f.r * 0.6)) return true;
  }
  return false;
}

function fireFuelNear(x, y, rad) {  // nearest structure not already burning (fire needs fuel to spread); fire can't jump a wall
  let best = null;
  let bestDistSq = rad * rad;
  for (const [k, s] of game.structures) {
    const [gx, gy] = k.split(',').map(Number);
    const cx = gx * TILE + TILE / 2;
    const cy = gy * TILE + TILE / 2;
    const d = dist2(x, y, cx, cy);
    if (d < bestDistSq && !fireAt(cx, cy) && !wallBlocksView(x, y, cx, cy)) {
      bestDistSq = d;
      best = { x: cx, y: cy };
    }
  }
  return best;
}

function updateFires(dt) {
  for (let i = game.fires.length - 1; i >= 0; i--) {
    const f = game.fires[i];
    f.life -= dt;
    if (f.life <= 0) {
      game.fires.splice(i, 1);
      continue;
    }
    if (Math.random() < dt * 7) {
      game.particles.push({
        x: f.x + rand(-9, 9), y: f.y - rand(0, 10),
        vx: rand(-7, 7), vy: -rand(22, 52),
        life: rand(0.5, 1.1), max: 1.1, color: 'rgba(60,55,50,0.5)', r: rand(3, 6)
      });
    }
    f.tick -= dt;
    if (f.tick > 0) continue;  // damage + spread are throttled to one pass every D seconds
    const D = 0.3;
    f.tick = D;
    for (const [k, s] of [...game.structures]) {
      const [gx, gy] = k.split(',').map(Number);
      const cx = gx * TILE + TILE / 2;
      const cy = gy * TILE + TILE / 2;
      if (dist2(f.x, f.y, cx, cy) < f.r * f.r) damageStructure(k, 22 * D);
    }
    for (const [k, wl] of [...game.walls]) {
      const sg = wallSegOf(k, wl);
      const mx = (sg[0] + sg[2]) / 2;
      const my = (sg[1] + sg[3]) / 2;
      if (dist2(f.x, f.y, mx, my) < f.r * f.r) damageWall(k, 18 * D);
    }
    if (!player.dead && !player.inCopter &&
        dist2(f.x, f.y, player.x, player.y) < (f.r + PLAYER_R) * (f.r + PLAYER_R)) {
      hurtPlayer(15 * D, f.x, f.y + 50);
    }
    for (const e of game.enemies) {
      if (e.dead || e.flying || e.eliminated) continue;
      if (dist2(f.x, f.y, e.x, e.y) < (f.r + 12) * (f.r + 12)) hurtBot(e, 15 * D);
    }
    if (f.spreads < 3) {  // a fire spreads at most 3 times, 25% chance per attempt
      f.spreadT -= D;
      if (f.spreadT <= 0) {
        f.spreadT = rand(4, 8);
        if (Math.random() < 0.25) {
          const c = fireFuelNear(f.x, f.y, f.r + TILE);
          if (c) {
            spawnFire(c.x, c.y);
            f.spreads++;
          }
        }
      }
    }
  }
}

function updateRockets(dt) {
  for (let i = game.rockets.length - 1; i >= 0; i--) {
    const r = game.rockets[i];
    r.x += r.vx * dt;
    r.y += r.vy * dt;
    r.life -= dt;
    r.smoke -= dt;
    if (r.smoke <= 0) {  // trailing smoke plume
      const bx = r.x - r.vx * 0.012;
      const by = r.y - r.vy * 0.012;
      game.particles.push({
        x: bx, y: by, vx: rand(-8, 8), vy: -rand(6, 22),
        life: rand(0.6, 1.3), max: 1.3, color: 'rgba(150,146,138,0.7)', r: rand(3, 6)
      });
      game.particles.push({
        x: bx, y: by, vx: rand(-5, 5), vy: -rand(2, 10),
        life: rand(0.3, 0.6), max: 0.6, color: 'rgba(255,170,70,0.6)', r: rand(2, 3.5)
      });
      r.smoke = 0.016;
    }
    let boom = (r.x < 0 || r.y < 0 || r.x > WORLD.w || r.y > WORLD.h || r.life <= 0);
    // Detonates on walls/doors/box/turret and on boulders (boulders take no damage — the blast just stops there).
    if (!boom && (isSolidAt(r.x, r.y) || wallNear(r.x, r.y, 2) || boulderBlocks(r.x, r.y, 2))) boom = true;
    if (!boom) {
      for (const a of game.animals) {
        if (a.hp > 0 && dist2(r.x, r.y, a.x, a.y) < (a.r + 3) * (a.r + 3)) {
          boom = true;
          break;
        }
      }
    }
    if (!boom) {
      for (const o of game.barrels) {
        if (o.hp > 0 && dist2(r.x, r.y, o.x, o.y) < (o.r + 3) * (o.r + 3)) {
          boom = true;
          break;
        }
      }
    }
    if (!boom && game.copter && !game.copter.destroyed && r.from !== OWNER &&
        dist2(r.x, r.y, game.copter.x, game.copter.y) < (COPTER.r + 3) * (COPTER.r + 3)) {  // detonates on minicopters
      boom = true;
    }
    if (!boom) {
      for (const e of game.enemies) {
        const c = e.copter;
        if (c && !c.destroyed && r.from !== e.owner && dist2(r.x, r.y, c.x, c.y) < (COPTER.r + 3) * (COPTER.r + 3)) {
          boom = true;
          break;
        }
      }
    }
    if (boom) {
      explode(r.x, r.y, r.w, r.from);
      game.rockets.splice(i, 1);
    }
  }
}
