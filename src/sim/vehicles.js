// Vehicles & roaming NPC machines: minicopter flight, transport heli squad
// carrier, trains (kill sweep), armored convoy, patrol helicopter.
import { COPTER, TRANSPORT, CONVOY, PATROL, WORLD, TILE, OWNER } from './config.js';
import { TAU, clamp, dist, dist2, ptSeg, turnToward } from './util.js';
import { blocked, wallBlocksView, boulderLine, inSafeZone } from './physics.js';
import { hurtPlayer, hurtBot, vehicleWreck, botDie, spawnBullet, explode } from './combat.js';
import { damageStructure, damageWall, damageDeploy, foundationAt } from './building.js';
import { addFloat, burst, addLoot, spillStack } from './state.js';

// ---- player minicopter ----
export function moveCopter(S, dt) {
  const c = S.copter, p = S.player, cmd = S.cmd;
  if (!c || c.destroyed) { p.inCopter = false; return; }
  if (cmd.left) c.angle -= COPTER.turn * dt;
  if (cmd.right) c.angle += COPTER.turn * dt;
  let thr = 0;
  if (cmd.up) thr = 1; else if (cmd.down) thr = -0.55;
  const cap = cmd.run ? COPTER.boost : COPTER.speed;
  c.vx += Math.cos(c.angle) * COPTER.accel * thr * dt;
  c.vy += Math.sin(c.angle) * COPTER.accel * thr * dt;
  const drag = Math.pow(thr !== 0 ? COPTER.drag : COPTER.dragIdle, dt);
  c.vx *= drag; c.vy *= drag;
  const sp = Math.hypot(c.vx, c.vy);
  if (sp > cap) { c.vx *= cap / sp; c.vy *= cap / sp; }
  c.x += c.vx * dt; c.y += c.vy * dt;
  if (c.x < COPTER.r) { c.x = COPTER.r; c.vx *= -0.3; }
  if (c.y < COPTER.r) { c.y = COPTER.r; c.vy *= -0.3; }
  if (c.x > WORLD.w - COPTER.r) { c.x = WORLD.w - COPTER.r; c.vx *= -0.3; }
  if (c.y > WORLD.h - COPTER.r) { c.y = WORLD.h - COPTER.r; c.vy *= -0.3; }
  c.spd = Math.hypot(c.vx, c.vy);
  c.rotor += dt * (20 + c.spd * 0.05);
  p.x = c.x; p.y = c.y; p.vx = c.vx; p.vy = c.vy;
}

// ---- transports ----
export function buyTransport(S, team, buyer) {
  const shop = S.world.shop;
  const tr = {
    owner: team.owner, x: shop.x, y: shop.y + (shop.r || 120) + 90, angle: 0, vx: 0, vy: 0, rotor: 0,
    hp: TRANSPORT.hp, max: TRANSPORT.hp, destroyed: false, state: 'idle', stateT: 0, boardT: 0,
    homeX: buyer.hx, homeY: buyer.hy, riders: [], destX: 0, destY: 0,
  };
  S.transports.push(tr);
  addFloat(S, tr.x, tr.y, '+transport heli', '#bfe3ff');
  return tr;
}

export function transportBoard(S, b, tr) {
  if (tr.riders.length >= TRANSPORT.seats || tr.state === 'fly' || tr.state === 'unload') return false;
  b.aboard = tr; b.flying = true; b.wasRaid = false; b.state = 'raid';
  tr.riders.push(b);
  if (tr.state === 'idle') tr.state = 'board';
  return true;
}

function transportPhysics(S, tr, tx, ty, dt) {
  const d = dist(tr.x, tr.y, tx, ty);
  const aim = Math.atan2(ty - tr.y, tx - tr.x);
  tr.angle = turnToward(tr.angle, aim, dt * 3);
  const thr = d > 220 ? 1 : Math.max(0.08, d / 220);
  tr.vx += Math.cos(tr.angle) * TRANSPORT.accel * thr * dt;
  tr.vy += Math.sin(tr.angle) * TRANSPORT.accel * thr * dt;
  const drag = Math.pow(TRANSPORT.drag, dt);
  tr.vx *= drag; tr.vy *= drag;
  const sp = Math.hypot(tr.vx, tr.vy);
  if (sp > TRANSPORT.speed) { tr.vx *= TRANSPORT.speed / sp; tr.vy *= TRANSPORT.speed / sp; }
  tr.x = clamp(tr.x + tr.vx * dt, TRANSPORT.r, WORLD.w - TRANSPORT.r);
  tr.y = clamp(tr.y + tr.vy * dt, TRANSPORT.r, WORLD.h - TRANSPORT.r);
  return d;
}

export function updateTransports(S, dt) {
  for (let i = S.transports.length - 1; i >= 0; i--) {
    const tr = S.transports[i];
    if (tr.hp <= 0 || tr.destroyed) {
      vehicleWreck(S, tr.x, tr.y);
      for (const r of tr.riders) {
        r.aboard = null; r.flying = false;
        r.x = tr.x + S.rng.rand(-30, 30); r.y = tr.y + S.rng.rand(-30, 30);
        botDie(S, r);
      }
      S.transports.splice(i, 1);
      continue;
    }
    tr.riders = tr.riders.filter(r => !r.dead && r.aboard === tr);
    tr.stateT += dt;
    const occupied = tr.riders.length > 0;
    if (occupied || tr.state === 'fly' || tr.state === 'unload' || tr.state === 'return') tr.rotor += dt * 40;
    const raidTeam = tr.riders.length ? tr.riders[0].raid : null;
    const raidRec = raidTeam && raidTeam.bases ? raidTeam.bases.find(r => !r.dead) : null;

    if (tr.state === 'idle' || tr.state === 'board') {
      if (occupied && raidRec) {
        tr.boardT += dt;
        if (tr.riders.length >= 2 || tr.boardT > 5) {
          const d = dist(tr.x, tr.y, raidRec.hx, raidRec.hy);
          const f = Math.max(0, (d - 620) / Math.max(1, d));
          tr.destX = tr.x + (raidRec.hx - tr.x) * f;
          tr.destY = tr.y + (raidRec.hy - tr.y) * f;
          tr.state = 'fly'; tr.stateT = 0; tr.boardT = 0;
        }
      } else if (occupied) {
        transportPhysics(S, tr, tr.homeX - TILE * 5, tr.homeY, dt);
      } else { tr.vx = tr.vy = 0; tr.boardT = 0; }
      for (const r of tr.riders) { r.x = tr.x; r.y = tr.y; }
    } else if (tr.state === 'fly') {
      const d = transportPhysics(S, tr, tr.destX, tr.destY, dt);
      for (const r of tr.riders) { r.x = tr.x; r.y = tr.y; }
      if (d < 200 || !raidRec || tr.stateT > 16) { tr.state = 'unload'; tr.stateT = 0; }
    } else if (tr.state === 'unload') {
      for (const r of tr.riders) {
        let rx = tr.x + S.rng.rand(-60, 60), ry = tr.y + S.rng.rand(-60, 60);
        for (let t = 0; t < 14 && blocked(S, rx, ry, 12); t++) {
          const a = S.rng.rand(0, TAU), dd = S.rng.rand(40, 150);
          rx = tr.x + Math.cos(a) * dd; ry = tr.y + Math.sin(a) * dd;
        }
        r.x = clamp(rx, 12, WORLD.w - 12); r.y = clamp(ry, 12, WORLD.h - 12);
        r.aboard = null; r.flying = false;
      }
      tr.riders = [];
      tr.state = 'return'; tr.stateT = 0;
    } else if (tr.state === 'return') {
      const d = transportPhysics(S, tr, tr.homeX - TILE * 5, tr.homeY, dt);
      if (d < 160 || tr.stateT > 16) { tr.state = 'idle'; tr.vx = tr.vy = 0; }
    }
  }
}

// ---- trains ----
export function updateTrains(S, dt) {
  if (S.world.rails.length) {
    S.trainT -= dt;
    if (S.trainT <= 0 && S.trains.length < 2) {
      S.trainT = S.rng.rand(30, 90);
      const rail = S.rng.pick(S.world.rails);
      const fwd = S.rng.chance(0.5);
      const pts = fwd ? rail.pts : [...rail.pts].reverse();
      S.trains.push({ pts, seg: 0, x: pts[0].x, y: pts[0].y, px: pts[0].x, py: pts[0].y, ang: 0, speed: S.rng.rand(460, 640), smokeT: 0 });
    }
  }
  for (let i = S.trains.length - 1; i >= 0; i--) {
    const tr = S.trains[i];
    tr.px = tr.x; tr.py = tr.y;
    let move = tr.speed * dt;
    while (move > 0 && tr.seg < tr.pts.length - 1) {
      const a = tr.pts[tr.seg], b = tr.pts[tr.seg + 1];
      const segLen = dist(a.x, a.y, b.x, b.y);
      const done = dist(a.x, a.y, tr.x, tr.y);
      const left = segLen - done;
      if (move < left) {
        const f = (done + move) / segLen;
        tr.x = a.x + (b.x - a.x) * f; tr.y = a.y + (b.y - a.y) * f;
        move = 0;
      } else { tr.seg++; tr.x = b.x; tr.y = b.y; move -= left; }
    }
    tr.ang = Math.atan2(tr.y - tr.py, tr.x - tr.px) || tr.ang;
    // kill sweep
    const KR = 36;
    const p = S.player;
    if (!p.dead && !p.inCopter && ptSeg(p.x, p.y, tr.px, tr.py, tr.x, tr.y) < KR) hurtPlayer(S, 999, tr.px, tr.py, 'train');
    for (const u of S.units) if (!u.dead && !u.flying && !u.eliminated && ptSeg(u.x, u.y, tr.px, tr.py, tr.x, tr.y) < KR) hurtBot(S, u, 999, tr.px, tr.py, 'train');
    for (const a of S.animals) if (!a.dead && ptSeg(a.x, a.y, tr.px, tr.py, tr.x, tr.y) < KR) { a.hp = 0; a.dead = true; a.respawnT = S.rng.rand(11, 18); }
    for (const o of S.barrels) if (o.hp > 0 && ptSeg(o.x, o.y, tr.px, tr.py, tr.x, tr.y) < KR) o.hp = 0;
    // flatten building along sweep
    const sweepLen = dist(tr.px, tr.py, tr.x, tr.y);
    const steps = Math.max(1, Math.ceil(sweepLen / TILE));
    for (let s2 = 0; s2 <= steps; s2++) {
      const t = s2 / steps;
      const gx = Math.floor((tr.px + (tr.x - tr.px) * t) / TILE), gy = Math.floor((tr.py + (tr.y - tr.py) * t) / TILE);
      damageStructure(S, gx + ',' + gy, 9999);
      damageDeploy(S, gx + ',' + gy, 9999, 'train');
      for (const k of ['V,' + gx + ',' + gy, 'V,' + (gx + 1) + ',' + gy, 'H,' + gx + ',' + gy, 'H,' + gx + ',' + (gy + 1)]) damageWall(S, k, 9999, 'train');
    }
    // smoke
    tr.smokeT -= dt;
    if (tr.smokeT <= 0) {
      tr.smokeT = 0.28;
      const hx = tr.x + Math.cos(tr.ang) * 16, hy = tr.y + Math.sin(tr.ang) * 16;
      S.particles.push({ x: hx, y: hy, vx: S.rng.rand(-7, 7) + S.wind * 5, vy: -S.rng.rand(6, 16), life: S.rng.rand(11, 15), max: 15, r: S.rng.rand(5, 10), col: 'rgba(74,74,80,0.5)' });
      S.particles.push({ x: hx, y: hy, vx: S.rng.rand(-4, 4), vy: -S.rng.rand(4, 10), life: S.rng.rand(8, 12), max: 12, r: S.rng.rand(3, 6), col: 'rgba(40,40,46,0.45)' });
    }
    if (tr.seg >= tr.pts.length - 1) S.trains.splice(i, 1);
  }
  // crossings
  for (const c of S.world.crossings) {
    c.active = S.trains.some(tr => dist2(tr.x, tr.y, c.x, c.y) < 820 * 820);
    c.gate += ((c.active ? 1 : 0) - c.gate) * Math.min(1, dt * 3);
  }
}

// ---- armored convoy ----
export function updateConvoys(S, dt) {
  if (!S.convoys.length) {
    S.convoyT -= dt;
    if (S.convoyT <= 0) spawnConvoy(S);
  }
  for (let i = S.convoys.length - 1; i >= 0; i--) {
    const cv = S.convoys[i];
    if (cv.hp <= 0 && !cv.dead) {
      cv.dead = true;
      burst(S, cv.x, cv.y, '#ffb24a', 30, 340);
      burst(S, cv.x, cv.y, '#ffe2a0', 16, 220);
      S.flashes.push({ x: cv.x, y: cv.y, r: 96, life: 0.25, max: 0.25 });
      S.shake = Math.max(S.shake, 12);
      S.scorch.push({ x: cv.x, y: cv.y, r: 60 });
      if (S.scorch.length > 36) S.scorch.shift();
      spillStack(S, cv.x, cv.y, 'metal', S.rng.randi(50, 90));
      spillStack(S, cv.x, cv.y, 'scrap', S.rng.randi(60, 110));
      addLoot(S, cv.x, cv.y, 'ammo', S.rng.randi(50, 100));
      for (let r = 0, n = S.rng.randi(3, 5); r < n; r++) addLoot(S, cv.x, cv.y, 'rocket', 1);
      for (let r = 0, n = S.rng.randi(2, 4); r < n; r++) addLoot(S, cv.x, cv.y, 'satchel', 1);
      for (const g of cv.guards) if (!g.dead) addLoot(S, g.x, g.y, 'ammo', S.rng.randi(8, 16));
      addFloat(S, cv.x, cv.y, 'convoy destroyed!', '#ffd0a0');
      S.events.push({ type: 'explosion', x: cv.x, y: cv.y, r: 96 });
      S.convoys.splice(i, 1);
      continue;
    }
    cv.px = cv.x; cv.py = cv.y;
    let move = CONVOY.speed * dt;
    while (move > 0 && cv.seg < cv.pts.length - 1) {
      const a = cv.pts[cv.seg], b = cv.pts[cv.seg + 1];
      const segLen = dist(a.x, a.y, b.x, b.y);
      const done = dist(a.x, a.y, cv.x, cv.y);
      const left = segLen - done;
      if (move < left) { const f = (done + move) / segLen; cv.x = a.x + (b.x - a.x) * f; cv.y = a.y + (b.y - a.y) * f; move = 0; }
      else { cv.seg++; cv.x = b.x; cv.y = b.y; move -= left; }
    }
    cv.ang = Math.atan2(cv.y - cv.py, cv.x - cv.px) || cv.ang;
    if (cv.seg >= cv.pts.length - 1) { S.convoys.splice(i, 1); continue; } // escaped

    // turret
    cv.gunCd = Math.max(0, cv.gunCd - dt);
    let tgt = null, td = CONVOY.trange;
    const p = S.player;
    if (!p.dead && !p.inCopter && !S.ghost) {
      const d = dist(cv.x, cv.y, p.x, p.y);
      if (d < td && !wallBlocksView(S, cv.x, cv.y, p.x, p.y) && !boulderLine(S, cv.x, cv.y, p.x, p.y)) { tgt = p; td = d; }
    }
    for (const u of S.units) {
      if (u.dead || u.flying || u.eliminated) continue;
      const d = dist(cv.x, cv.y, u.x, u.y);
      if (d < td && !wallBlocksView(S, cv.x, cv.y, u.x, u.y) && !boulderLine(S, cv.x, cv.y, u.x, u.y)) { tgt = u; td = d; }
    }
    if (tgt) {
      cv.taim = Math.atan2(tgt.y - cv.y, tgt.x - cv.x);
      if (cv.gunCd <= 0) {
        cv.gunCd = CONVOY.trof;
        spawnBullet(S, { x: cv.x + Math.cos(cv.taim) * 30, y: cv.y + Math.sin(cv.taim) * 30, angle: cv.taim + S.rng.rand(-0.04, 0.04), speed: CONVOY.bspeed, dmg: CONVOY.tdmg, from: 'convoy', life: 0.6 });
        burst(S, cv.x + Math.cos(cv.taim) * 30, cv.y + Math.sin(cv.taim) * 30, '#ffd76b', 2, 90);
      }
    } else cv.taim = cv.ang;

    // escorts
    const slots = [[-46, 28], [-46, -28], [50, 30], [50, -30]];
    for (let gi = 0; gi < cv.guards.length; gi++) {
      const g = cv.guards[gi];
      if (g.dead) continue;
      g.gunCd = Math.max(0, g.gunCd - dt);
      let gt = null, gd = CONVOY.grange;
      if (!p.dead && !p.inCopter && !S.ghost) {
        const d = dist(g.x, g.y, p.x, p.y);
        if (d < gd && !wallBlocksView(S, g.x, g.y, p.x, p.y) && !boulderLine(S, g.x, g.y, p.x, p.y)) { gt = p; gd = d; }
      }
      for (const u of S.units) {
        if (u.dead || u.flying || u.eliminated) continue;
        const d = dist(g.x, g.y, u.x, u.y);
        if (d < gd && !wallBlocksView(S, g.x, g.y, u.x, u.y) && !boulderLine(S, g.x, g.y, u.x, u.y)) { gt = u; gd = d; }
      }
      if (dist(g.x, g.y, cv.x, cv.y) > CONVOY.leash) gt = null;
      if (gt) {
        const aim = Math.atan2(gt.y - g.y, gt.x - g.x);
        g.angle = turnToward(g.angle, aim, dt * 9);
        if (g.gunCd <= 0 && Math.abs(angShort(g.angle, aim)) < 0.3) {
          g.gunCd = CONVOY.grof;
          spawnBullet(S, { x: g.x + Math.cos(g.angle) * 14, y: g.y + Math.sin(g.angle) * 14, angle: g.angle + S.rng.rand(-0.06, 0.06), speed: CONVOY.bspeed, dmg: CONVOY.gdmg, from: 'convoy', life: 0.55 });
        }
        let mvx = 0, mvy = 0;
        if (gd > 260) { mvx = Math.cos(aim); mvy = Math.sin(aim); }
        else if (gd < 150) { mvx = -Math.cos(aim); mvy = -Math.sin(aim); }
        const nx = g.x + mvx * CONVOY.gspeed * dt, ny = g.y + mvy * CONVOY.gspeed * dt;
        if (!blocked(S, nx, ny, 12)) { g.x = nx; g.y = ny; }
      } else {
        const sx = cv.x + Math.cos(cv.ang) * slots[gi][0] - Math.sin(cv.ang) * slots[gi][1];
        const sy = cv.y + Math.sin(cv.ang) * slots[gi][0] + Math.cos(cv.ang) * slots[gi][1];
        const d = dist(g.x, g.y, sx, sy);
        if (d > 4) {
          const sp = CONVOY.speed + 50;
          g.x += (sx - g.x) / d * Math.min(d, sp * dt);
          g.y += (sy - g.y) / d * Math.min(d, sp * dt);
        }
        g.angle = turnToward(g.angle, cv.ang, dt * 5);
      }
    }
  }
}

export function spawnConvoy(S) {
  S.convoyT = S.rng.rand(180, 300);
  // pick a random dirt road and run its longest on-land span end-to-end
  const cands = [];
  for (const rd of S.world.roads) {
    let start = -1, best = null;
    for (let i = 0; i <= rd.pts.length; i++) {
      const ok = i < rd.pts.length && rd.fade[i] > 0.05; // fade encodes coast + lakes
      if (ok && start === -1) start = i;
      if (!ok && start !== -1) {
        if (!best || i - start > best.len) best = { start, len: i - start };
        start = -1;
      }
    }
    if (best && best.len >= 10) cands.push({ rd, ...best });
  }
  if (!cands.length) return;
  const pick = cands[Math.floor(S.rng.next() * cands.length)];
  let pts = pick.rd.pts.slice(pick.start, pick.start + pick.len);
  if (S.rng.chance(0.5)) pts = [...pts].reverse();
  const cv = { pts, seg: 0, x: pts[0].x, y: pts[0].y, px: pts[0].x, py: pts[0].y, ang: 0, taim: 0, hp: CONVOY.vhp, max: CONVOY.vhp, gunCd: 0, dead: false, guards: [] };
  for (let i = 0; i < 4; i++) cv.guards.push({ x: pts[0].x, y: pts[0].y, hp: CONVOY.ghp, max: CONVOY.ghp, angle: 0, gunCd: 0, dead: false });
  S.convoys.push(cv);
  S.events.push({ type: 'convoy', x: cv.x, y: cv.y });
}

// ---- patrol helicopter ----
export function updatePatrol(S, dt) {
  if (!S.patrol) {
    S.patrolT -= dt;
    if (S.patrolT <= 0) spawnPatrol(S);
    return;
  }
  const p = S.patrol;
  p.rotor += dt * 28;
  const team = S.teams.find(t => t.owner === p.huntOwner && !t.eliminated && t.bases.some(r => !r.dead));
  if (p.hp <= 0) { patrolCrash(S); return; }
  let goalX, goalY, leaving = false;
  if (!team || p.orbitT <= 0) {
    leaving = true;
    goalX = p.exitX; goalY = p.exitY;
    if (p.x < -320 || p.x > WORLD.w + 320 || p.y < -320 || p.y > WORLD.h + 320) { S.patrol = null; S.patrolT = S.rng.rand(240, 420); return; }
  } else {
    const rec = team.bases.find(r => !r.dead);
    const d = dist(p.x, p.y, rec.hx, rec.hy);
    if (d > 460 && !p.orbiting) { goalX = rec.hx; goalY = rec.hy; }
    else {
      p.orbiting = true;
      p.orbitA += 0.55 * dt;
      p.orbitT -= dt;
      goalX = rec.hx + Math.cos(p.orbitA) * PATROL.orbitR;
      goalY = rec.hy + Math.sin(p.orbitA) * PATROL.orbitR;
    }
  }
  const aim = Math.atan2(goalY - p.y, goalX - p.x);
  p.angle = turnToward(p.angle, aim, dt * 3);
  const d2g = dist(p.x, p.y, goalX, goalY);
  p.spd = Math.min(PATROL.speed, PATROL.speed * d2g / 300 + 40);
  p.x += Math.cos(p.angle) * p.spd * dt;
  p.y += Math.sin(p.angle) * p.spd * dt;
  p.flash = Math.max(0, p.flash - dt);

  if (team && !leaving) {
    p.strafeT -= dt;
    if (p.strafeT <= 0) {
      p.strafeT = 1.2;
      let v = null, vd = PATROL.strafeR;
      for (const u of S.units) {
        if (u.owner !== p.huntOwner || u.dead || u.eliminated || u.flying) continue;
        const d = dist(p.x, p.y, u.x, u.y);
        if (d < vd) { vd = d; v = u; }
      }
      if (v) {
        for (let i = 0; i < 5; i++) {
          const lead = 0.18 + i * 0.02;
          const tx = v.x + v.vx * lead + S.rng.rand(-26, 26), ty = v.y + v.vy * lead + S.rng.rand(-26, 26);
          spawnBullet(S, { x: p.x, y: p.y, angle: Math.atan2(ty - p.y, tx - p.x), speed: 900, dmg: 9, from: 'patrol', life: 1.0, col: 'hmg' });
        }
        p.flash = 0.12;
      }
    }
    // defender flak
    for (const u of S.units) {
      if (u.owner !== p.huntOwner || u.dead || u.eliminated || u.flying) continue;
      if (dist2(p.x, p.y, u.x, u.y) > PATROL.flakR * PATROL.flakR) continue;
      u.flakT = (u.flakT || 0) - dt;
      if (u.flakT <= 0) {
        u.flakT = 1.0;
        const lead = dist(p.x, p.y, u.x, u.y) / 1100;
        const tx = p.x + Math.cos(p.angle) * p.spd * lead, ty = p.y + Math.sin(p.angle) * p.spd * lead;
        const a = Math.atan2(ty - u.y, tx - u.x) + S.rng.rand(-0.07, 0.07);
        u.angle = a;
        // flak resolves immediately against the heli path (own lane, ignores walls)
        const fx = u.x + Math.cos(a) * 1100 * 0.7, fy = u.y + Math.sin(a) * 1100 * 0.7;
        S.events.push({ type: 'flak', x0: u.x, y0: u.y, x1: fx, y1: fy });
        if (ptSeg(p.x, p.y, u.x, u.y, fx, fy) < 40) {
          p.hp -= 6;
          burst(S, p.x, p.y, '#aab1b8', 3, 120);
        }
      }
    }
  }
}

function spawnPatrol(S) {
  // hunt the richest team
  let best = null, bs = -1;
  for (const t of S.teams) {
    if (t.eliminated) continue;
    const rec = t.bases.find(r => !r.dead);
    if (!rec) continue;
    const live = S.units.filter(u => u.owner === t.owner && !u.dead && !u.eliminated).length;
    let floors = 0;
    for (const s of S.structures.values()) if (s.owner === t.owner) floors++;
    const tc = S.deploys.get(rec.tcKey);
    const bank = tc ? tc.store.wood + tc.store.stone + tc.store.metal : 0;
    const score = live * 10 + floors * 2 + bank * 0.01;
    if (score > bs) { bs = score; best = { t, rec }; }
  }
  if (!best) { S.patrolT = S.rng.rand(120, 240); return; }
  const { t, rec } = best;
  const fromLeft = rec.hx > WORLD.w / 2;
  S.patrol = {
    huntOwner: t.owner, huntId: t.id,
    x: fromLeft ? -200 : WORLD.w + 200,
    y: clamp(rec.hy + S.rng.rand(-600, 600), 200, WORLD.h - 200),
    exitX: fromLeft ? WORLD.w + 360 : -360, exitY: rec.hy,
    angle: 0, rotor: 0, spd: 0, hp: PATROL.hp, max: PATROL.hp,
    orbitA: S.rng.rand(0, TAU), orbitT: PATROL.orbitT, orbiting: false, strafeT: 1.0, flash: 0,
  };
  addFloat(S, rec.hx, rec.hy - 80, 'Patrol helicopter inbound!', '#ffb84a');
  S.elims.push({ text: 'PATROL HELI hunts Base ' + (t.id + 1), t: 10 });
}

export function patrolCrash(S) {
  const p = S.patrol;
  burst(S, p.x, p.y, '#ffb24a', 40, 360);
  burst(S, p.x, p.y, '#ff9b3d', 24, 280);
  S.scorch.push({ x: p.x, y: p.y, r: 64 });
  if (S.scorch.length > 36) S.scorch.shift();
  S.wrecks.push({ x: p.x, y: p.y, t: 15 });
  for (let i = 0, n = S.rng.randi(4, 6); i < n; i++) addLoot(S, p.x + S.rng.rand(-30, 30), p.y + S.rng.rand(-30, 30), 'rocket', 1);
  for (let i = 0, n = S.rng.randi(2, 3); i < n; i++) addLoot(S, p.x + S.rng.rand(-30, 30), p.y + S.rng.rand(-30, 30), 'satchel', 1);
  addLoot(S, p.x, p.y, 'ammo', S.rng.randi(100, 180));
  spillStack(S, p.x, p.y, 'scrap', S.rng.randi(80, 150));
  spillStack(S, p.x, p.y, 'metal', S.rng.randi(50, 90));
  S.elims.push({ text: 'PATROL HELI DOWN', t: 12 });
  S.events.push({ type: 'explosion', x: p.x, y: p.y, r: 110 });
  S.shake = Math.max(S.shake, 14);
  S.patrol = null;
  S.patrolT = S.rng.rand(240, 420);
}

const angShort = (a, b) => {
  let d = (b - a) % TAU;
  if (d > Math.PI) d -= TAU;
  if (d < -Math.PI) d += TAU;
  return d;
};
