"use strict";
/* update.js — the main per-frame update loop, plus player/minicopter movement,
   turret AI, and base decay/upkeep. */

// Rust-like flight: gradual yaw, throttle + momentum (starts slow, accelerates).
function moveCopter(dt) {
  const c = game.copter;
  let turn = 0;
  if (keys['a']) turn--;
  if (keys['d']) turn++;
  c.angle += turn * COPTER.turn * dt;
  let throttle = 0;
  if (keys['w']) throttle = 1;
  else if (keys['s']) throttle = -0.55;
  c.vx = c.vx || 0;
  c.vy = c.vy || 0;
  if (throttle) {
    c.vx += Math.cos(c.angle) * COPTER.accel * throttle * dt;
    c.vy += Math.sin(c.angle) * COPTER.accel * throttle * dt;
  }
  const dr = (throttle ? COPTER.drag : COPTER.dragIdle) * dt;
  c.vx -= c.vx * dr;
  c.vy -= c.vy * dr;
  const maxSpeed = keys['shift'] ? COPTER.boost : COPTER.speed;
  const speed = Math.hypot(c.vx, c.vy);
  if (speed > maxSpeed) {
    c.vx = c.vx / speed * maxSpeed;
    c.vy = c.vy / speed * maxSpeed;
  }
  c.x = clamp(c.x + c.vx * dt, COPTER.r, WORLD.w - COPTER.r);
  c.y = clamp(c.y + c.vy * dt, COPTER.r, WORLD.h - COPTER.r);
  if (c.x <= COPTER.r || c.x >= WORLD.w - COPTER.r) c.vx *= -0.3;
  if (c.y <= COPTER.r || c.y >= WORLD.h - COPTER.r) c.vy *= -0.3;
  player.x = c.x;
  player.y = c.y;
  c.spd = Math.hypot(c.vx, c.vy);
  player.moving = c.spd > 20;
}

function baseHasTC(owner) {
  for (const [k, s] of game.deploys) {
    if (s.type === 'cupboard' && (s.owner || OWNER) === owner) return true;
  }
  return false;
}

function updateTurrets(dt) {
  // Each owner's TC position (the "base core") lets idle turrets face outward.
  const tcPos = {};
  for (const [k, d] of game.deploys) {
    if (d.type === 'cupboard') {
      const [gx, gy] = k.split(',').map(Number);
      tcPos[d.owner || OWNER] = { x: gx * TILE + TILE / 2, y: gy * TILE + TILE / 2 };
    }
  }

  for (const [k, s] of game.deploys) {
    if (s.type !== 'turret') continue;
    const [gx, gy] = k.split(',').map(Number);
    const cx = gx * TILE + TILE / 2;
    const cy = gy * TILE + TILE / 2;
    const owner = s.owner || OWNER;
    if (!baseHasTC(owner)) continue;   // Tool Cupboard destroyed -> base turrets are disabled
    const tt = TTIER[s.tier || 1];
    if (s.ammo === undefined) s.ammo = tt.mag;
    if (s.cd > 0) s.cd -= dt;
    if (s.reloadT > 0) {   // reloading -> can't fire (like the player's guns; no ammo cap)
      s.reloadT -= dt;
      if (s.reloadT <= 0) s.ammo = tt.mag;
      continue;
    }

    // Pick the closest visible target; turrets NEVER fire across walls (need clear LOS).
    let best = null;
    let bestDistSq = tt.range * tt.range;
    for (const a of game.animals) {
      if (a.hp <= 0) continue;
      const d = dist2(cx, cy, a.x, a.y);
      if (d < bestDistSq && !wallBlocksView(cx, cy, a.x, a.y)) {
        bestDistSq = d;
        best = a;
      }
    }
    for (const e of game.enemies) {
      if (e.dead || e.flying || e.eliminated || e.owner === owner) continue;
      const d = dist2(cx, cy, e.x, e.y);
      if (d < bestDistSq && !wallBlocksView(cx, cy, e.x, e.y)) {
        bestDistSq = d;
        best = e;
      }
    }
    if (owner !== OWNER && !player.dead && !player.inCopter && !game.ghost) {   // enemy turrets also shoot the player
      const d = dist2(cx, cy, player.x, player.y);
      if (d < bestDistSq && !wallBlocksView(cx, cy, player.x, player.y)) {
        bestDistSq = d;
        best = player;
      }
    }

    if (!best) {
      // Nothing to shoot: still TRACK the nearest enemy (anticipates where a raid comes from);
      // with no one around, face outward from the base core.
      let near = null;
      let nearDistSq = (tt.range * 2.2) * (tt.range * 2.2);
      for (const e of game.enemies) {
        if (e.dead || e.flying || e.eliminated || e.owner === owner) continue;
        const d = dist2(cx, cy, e.x, e.y);
        if (d < nearDistSq) {
          nearDistSq = d;
          near = e;
        }
      }
      if (owner !== OWNER && !player.dead && !player.inCopter && !game.ghost) {
        const d = dist2(cx, cy, player.x, player.y);
        if (d < nearDistSq) {
          nearDistSq = d;
          near = player;
        }
      }
      const tc = tcPos[owner];
      if (near) {
        // Face the nearest threat even when it's out of range or behind a wall.
        const wantAngle = Math.atan2(near.y - cy, near.x - cx);
        s.angle += angDiff(s.angle, wantAngle) * Math.min(1, dt * 5);
      } else {
        // Truly idle: slow, Rust-like scan. Each turret runs its OWN randomized schedule
        // so they don't all sweep in unison.
        const outA = (tc && (Math.abs(cx - tc.x) > 4 || Math.abs(cy - tc.y) > 4))
          ? Math.atan2(cy - tc.y, cx - tc.x)
          : (s._scanA !== undefined ? s._scanA : s.angle);
        if (s._scanT === undefined) {   // randomized initial phase -> desynchronized
          s._scanT = rand(0.5, 4.5);
          s._scanA = outA + rand(-0.8, 0.8);
        }
        s._scanT -= dt;
        if (s._scanT <= 0) {   // every few seconds pick a new idle facing (biased outward) and sweep to it
          s._scanT = rand(2.5, 6.5);
          s._scanA = outA + rand(-1.1, 1.1);
        }
        s.angle += angDiff(s.angle, s._scanA) * Math.min(1, dt * 1.6);   // slow idle sweep, not a snap
      }
      continue;
    }

    // Lead a moving target: T3 fully predicts (lands shots ahead of movement), T2 partial, T1 none.
    const tier = s.tier || 1;
    const leadF = tier >= 3 ? 1.0 : tier === 2 ? 0.55 : 0;
    const tlead = leadF > 0 ? Math.min(0.45, Math.sqrt(bestDistSq) / tt.speed) * leadF : 0;
    const aimx = best.x + (best.vx || 0) * tlead;
    const aimy = best.y + (best.vy || 0) * tlead;
    const want = Math.atan2(aimy - cy, aimx - cx);
    s.angle += angDiff(s.angle, want) * Math.min(1, dt * (tier >= 3 ? 16 : 10));   // T3 slews faster onto the lead point
    if (s.cd <= 0 && Math.abs(angDiff(s.angle, want)) < 0.22) {
      s.cd = tt.rof;
      const ang = s.angle + rand(-tt.spread, tt.spread);
      const tx = cx + Math.cos(ang) * TURRET.muzzle;
      const ty = cy + Math.sin(ang) * TURRET.muzzle;
      game.bullets.push({
        x: tx, y: ty, px: tx, py: ty, vx: Math.cos(ang) * tt.speed, vy: Math.sin(ang) * tt.speed,
        life: tt.range / tt.speed + 0.1, dmg: tt.dmg, from: owner, enemy: owner !== OWNER, turret: true
      });
      game.muzzle = { x: tx, y: ty, a: ang, life: 0.04 };
      burst(tx, ty, COL.flash, 2, 90);
      s.ammo--;
      if (s.ammo <= 0) s.reloadT = tt.reload;   // empty clip -> reload
    }
  }
}

function upgradeHoverTurret() {
  const w = screenToWorld(mouse.sx, mouse.sy);
  const gx = Math.floor(w.x / TILE);
  const gy = Math.floor(w.y / TILE);
  const s = game.deploys.get(gkey(gx, gy));
  if (!s || s.type !== 'turret' || (s.owner || OWNER) !== OWNER) {
    flashTip('Hover your own turret, then press U to upgrade');
    return;
  }
  const next = (s.tier || 1) + 1;
  if (next > 3) {
    flashTip('Turret maxed (Tier 3 · Sniper)');
    return;
  }
  const cost = TURRET_UP[next];
  if ((game.inv.scrap | 0) < cost) {
    flashTip('Need ' + cost + ' scrap to upgrade');
    return;
  }
  game.inv.scrap -= cost;
  s.tier = next;
  s.ammo = TTIER[next].mag;
  s.reloadT = 0;
  flashTip('Turret → Tier ' + next + ' · ' + TTIER[next].name + ' (' + cost + ' scrap)');
}

function movePlayer(dt) {
  if (player.inCopter) {
    moveCopter(dt);
    return;
  }
  if (player.dead) {
    player.moving = false;
    return;
  }
  let dx = 0;
  let dy = 0;
  if (keys['w']) dy--;
  if (keys['s']) dy++;
  if (keys['a']) dx--;
  if (keys['d']) dx++;
  player.moving = !!(dx || dy);
  if (dx || dy) {
    const len = Math.hypot(dx, dy);
    dx /= len;
    dy /= len;
  }
  let base = keys['shift'] ? player.run : player.walk;
  if (game.slot === 3 && WEAPONS.minigun.spin > 0) base *= 0.4;   // slow while the minigun is spun up
  {
    const lk = lakeAt(player.x, player.y);
    if (lk && !lk.frozen) base *= 0.5;   // wading through lake water is slow
  }
  const ivx = dx * base;   // intended velocity
  const ivy = dy * base;
  // Frozen lakes are slippery: sluggish to start/turn, and you glide.
  const onIce = !!((lakeAt(player.x, player.y) || {}).frozen);
  const ctrl = onIce ? Math.min(1, dt * 1.1) : 1;
  player.svx = (player.svx || 0) + (ivx - (player.svx || 0)) * ctrl;
  player.svy = (player.svy || 0) + (ivy - (player.svy || 0)) * ctrl;
  if (onIce && !(dx || dy)) {   // no input on ice -> slide to a slow stop
    player.svx *= (1 - dt * 0.6);
    player.svy *= (1 - dt * 0.6);
  }
  player.vx = player.svx;   // exposed velocity, read by AI predictive aim
  player.vy = player.svy;
  const nx = player.x + player.svx * dt;
  const ny = player.y + player.svy * dt;
  if (blocked(player.x, player.y, PLAYER_R)) {   // already stuck inside something -> move freely to escape
    player.x = nx;
    player.y = ny;
  } else {
    if (!blocked(nx, player.y, PLAYER_R)) player.x = nx;
    else player.svx *= -0.2;
    if (!blocked(player.x, ny, PLAYER_R)) player.y = ny;
    else player.svy *= -0.2;
  }
  player.x = clamp(player.x, PLAYER_R, WORLD.w - PLAYER_R);
  player.y = clamp(player.y, PLAYER_R, WORLD.h - PLAYER_R);
  resolveCircle(game.resources);
  resolveCircle(game.barrels);
  resolveCircle(game.dummies);
  if (game.boulders) resolveCircle(game.boulders);
  if (game.shop) resolveCircle([game.shop]);
}

// Base decay + cupboard upkeep, throttled to one pass per 0.5s.
function updateDecay(dt) {
  game.decayT = (game.decayT || 0) + dt;
  if (game.decayT < 0.5) return;
  const D = game.decayT;
  game.decayT = 0;

  const tcs = [];
  for (const [k, s] of game.deploys) {
    if (s.type === 'cupboard') {
      const [gx, gy] = k.split(',').map(Number);
      tcs.push({ s, x: gx * TILE + TILE / 2, y: gy * TILE + TILE / 2, n: 0 });
    }
  }

  const decayObj = (x, y, o) => {
    let tc = null;
    let best = CLAIM_R * CLAIM_R;
    for (const t of tcs) {
      const d = dist2(x, y, t.x, t.y);
      if (d < best) {
        best = d;
        tc = t;
      }
    }
    if (tc) {
      tc.n++;
      const st = tc.s.store;
      if (st && (st.wood + st.stone + st.metal) > 0) return;   // stocked TC -> protected
      const frac = Math.sqrt(best) / CLAIM_R;   // farther from the TC = faster decay
      const time = DECAY_CENTER + (DECAY_EDGE - DECAY_CENTER) * frac;
      o.hp -= o.max * (D / time);
    } else {
      o.hp -= o.max * (D / DECAY_UNCLAIMED);   // unclaimed structures decay fully in ~5 min
    }
  };

  for (const [key, s] of [...game.structures]) {
    if (s.type !== 'floor' && s.type !== 'trifloor') continue;
    const [gx, gy] = key.split(',').map(Number);
    decayObj(gx * TILE + TILE / 2, gy * TILE + TILE / 2, s);
    if (s.hp <= 0) {
      game.structures.delete(key);
      cleanupOrphans(gx, gy);
    }
  }
  for (const [key, wl] of [...game.walls]) {
    const sg = wallSegOf(key, wl);
    decayObj((sg[0] + sg[2]) / 2, (sg[1] + sg[3]) / 2, wl);
    if (wl.hp <= 0) game.walls.delete(key);
  }

  // Upkeep: each TC drains stored resources in proportion to the pieces it protects.
  for (const t of tcs) {
    if (t.n > 0 && t.s.store) {
      let drain = t.n * UPKEEP * D;
      for (const r of ['wood', 'stone', 'metal']) {
        if (drain <= 0) break;
        const take = Math.min(t.s.store[r], drain);
        t.s.store[r] -= take;
        drain -= take;
      }
    }
  }
}

function lightLevel() {   // 1 = noon, 0 = midnight
  const t = (game.t % DAY_LEN) / DAY_LEN;
  return 0.5 + 0.5 * Math.cos(t * TAU);
}

function update(dt) {
  game.gatherCd = Math.max(0, (game.gatherCd || 0) - dt);
  const mg = WEAPONS.minigun;
  const canAct = !game.buildMode && !player.dead && !player.inCopter && !game.keypad && !game.shopOpen;
  if (canAct) {
    if (game.slot === 0 && mouse.down && game.gatherCd <= 0) gatherSwing();
    if (game.slot === 3) {
      if (mouse.down) {   // minigun fires only once spun up
        mg.spin = Math.min(mg.windup + 0.4, mg.spin + dt);
        if (mg.spin >= mg.windup) fire();
      }
    }
    const w = curWeapon();
    if (w && w !== mg && w.auto && mouse.down) fire();
  }
  if (!(canAct && game.slot === 3 && mouse.down)) mg.spin = Math.max(0, mg.spin - dt * 1.6);

  const m = screenToWorld(mouse.sx, mouse.sy);
  mouse.wx = m.x;
  mouse.wy = m.y;
  if (!player.dead && !player.inCopter) player.angle = Math.atan2(m.y - player.y, m.x - player.x);
  updateRapidRockets(dt);

  movePlayer(dt);
  updateRockets(dt);
  updateAnimals(dt);
  updateGuards(dt);
  updateTurrets(dt);
  updateDecay(dt);
  updateWeather(dt);
  updateClouds(dt);
  updateFog(dt);
  updateFireflies(dt);
  updateFootprints(dt);
  updateTrains(dt);
  updateConvoys(dt);
  updateCrossings(dt);
  updateAirdrop(dt);
  updateFires(dt);
  updateWrecks(dt);
  updateSatchels(dt);
  ageFences(dt);
  ageRaids(dt);
  updateGrenades(dt);
  if (game.raidAlarm) {
    game.raidAlarm.t -= dt;
    if (game.raidAlarm.t <= 0) game.raidAlarm = null;
  }
  if (typeof updateEnemies === 'function') updateEnemies(dt);
  for (let i = game.elims.length - 1; i >= 0; i--) {
    game.elims[i].t -= dt;
    if (game.elims[i].t <= 0) game.elims.splice(i, 1);
  }
  if (game.copter) {   // rotor blades spin only while the copter is being driven
    const c = game.copter;
    c.spin = (c.spin || 0) + ((player.inCopter ? 1 : 0) - (c.spin || 0)) * Math.min(1, dt * 2.2);
    c.rotor += dt * c.spin * 46;
  }

  // Weapon cooldowns and reloads.
  for (const key in WEAPONS) {
    const w = WEAPONS[key];
    if (w.cd > 0) w.cd -= dt;
    if (w.reloading > 0) {
      w.reloading -= dt;
      if (w.reloading <= 0) {
        const need = w.magSize - w.ammo;
        const take = Math.min(need, w.reserve);
        w.ammo += take;
        w.reserve -= take;
      }
    }
  }
  player.recoil = Math.max(0, player.recoil - 42 * dt);
  player.swing = Math.max(0, (player.swing || 0) - dt);
  player.hurt = Math.max(0, player.hurt - dt);
  if (player.invuln > 0) player.invuln -= dt;
  if (player.dead) {
    player.deadT -= dt;
    if (player.deadT <= 0) respawnPlayer();
  } else {
    // Scorpion poison: damage over time (~10s) that also blocks health regen.
    if (player.poison > 0) {
      player.poison -= dt;
      player.health -= 3.2 * dt;
      player.hurt = Math.max(player.hurt, 0.1);
      player.regenDelay = Math.max(player.regenDelay, 1.5);
      if (Math.random() < dt * 3) addFloat(player.x, player.y - 28, 'poison', '#7ad06a');
      if (player.health <= 0) {
        player.health = 0;
        player.dead = true;
        player.deadT = 4;
        game.deathMark = { x: player.x, y: player.y };
      }
    }
    if (player.regenDelay > 0) player.regenDelay -= dt;
    else if (player.health < player.maxhp) player.health = Math.min(player.maxhp, player.health + 12 * dt);
  }

  updateBullets(dt);
  updateLoot(dt);

  for (let i = game.particles.length - 1; i >= 0; i--) {
    const p = game.particles[i];
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.vx *= 0.9;
    p.vy *= 0.9;
    p.life -= dt;
    if (p.life <= 0) game.particles.splice(i, 1);
  }
  for (let i = game.floats.length - 1; i >= 0; i--) {
    const f = game.floats[i];
    f.y += f.vy * dt;
    f.life -= dt;
    if (f.life <= 0) game.floats.splice(i, 1);
  }
  for (let i = game.flashes.length - 1; i >= 0; i--) {
    const f = game.flashes[i];
    f.life -= dt;
    if (f.life <= 0) game.flashes.splice(i, 1);
  }

  // Resource nodes, barrels, and dummies respawn over time.
  for (const o of game.resources) {
    if (o.amount < o.max) {
      o.regen += dt;
      if (o.amount <= 0) {   // a fully depleted node respawns after 29s
        if (o.regen > 29) {
          o.amount = o.max;
          o.regen = 0;
        }
      } else if (o.regen > 2.5) {   // a partially mined node trickles back
        o.amount = Math.min(o.max, o.amount + Math.ceil(o.max * 0.05));
        o.regen = 0;
      }
    }
  }
  for (const o of game.barrels) {
    if (o.hp <= 0 && o.respawn > 0) {
      o.respawn -= dt;
      if (o.respawn <= 0) o.hp = o.max;
    }
  }
  for (const o of game.dummies) {
    if (o.hit > 0) o.hit -= dt;
    if (o.hp <= 0 && o.respawn > 0) {
      o.respawn -= dt;
      if (o.respawn <= 0) o.hp = o.max;
    }
  }

  if (game.muzzle) {
    game.muzzle.life -= dt;
    if (game.muzzle.life <= 0) game.muzzle = null;
  }
  for (let i = game.blasts.length - 1; i >= 0; i--) {
    game.blasts[i].life -= dt;
    if (game.blasts[i].life <= 0) game.blasts.splice(i, 1);
  }

  game.shake = Math.max(0, game.shake - dt * 26);

  // Camera: zoom out while flying — more at speed (GTA-style); god view fits the whole map.
  let targetZoom = 1;
  if (player.inCopter) {
    const sp = (game.copter && game.copter.spd) || 0;
    targetZoom = clamp(0.82 - (sp / COPTER.boost) * 0.42, 0.40, 0.82);
  }
  if (game.godView) targetZoom = Math.min((VW / WORLD.w), (VH / WORLD.h)) * 0.98;
  game.zoom += (targetZoom - game.zoom) * Math.min(1, dt * (game.godView ? 6 : 4));
  const hw = (VW / 2) / game.zoom;
  const hh = (VH / 2) / game.zoom;
  // On foot the camera may drift past the world edge so the surrounding ocean/beach shows (island feel).
  const SV = (player.inCopter || game.godView) ? 0 : 300;
  let cx = WORLD.w <= 2 * hw ? WORLD.w / 2 : clamp(player.x, hw - SV, WORLD.w - hw + SV);
  let cy = WORLD.h <= 2 * hh ? WORLD.h / 2 : clamp(player.y, hh - SV, WORLD.h - hh + SV);
  if (game.godView) {
    cx = WORLD.w / 2;
    cy = WORLD.h / 2;
  }
  if (game.shake > 0 && !game.godView) {
    cx += rand(-game.shake, game.shake);
    cy += rand(-game.shake, game.shake);
  }
  game.cam.cx = cx;
  game.cam.cy = cy;

  if (tipTimer > 0) {
    tipTimer -= dt;
    if (tipTimer <= 0) document.getElementById('tip').classList.remove('show');
  }
}
