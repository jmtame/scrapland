// Animal + monument guard behavior.
import { ANIMALS, ANIM_PAUSE, GUARD, OWNER, WORLD, TILE } from './config.js';
import { TAU, dist, dist2, clamp, turnToward } from './util.js';
import { blocked, wallBlocksView, inSafeZone, moveCircle } from './physics.js';
import { hurtPlayer, hurtBot, spawnBullet } from './combat.js';
import { burst } from './state.js';
import { cellCenter, damageDeploy } from './building.js';

export function updateAnimals(S, dt) {
  const p = S.player;
  for (const a of S.animals) {
    if (a.dead) {
      a.respawnT -= dt;
      if (a.respawnT <= 0) respawnAnimal(S, a);
      continue;
    }
    const def = ANIMALS[a.type];
    a.atkcd = Math.max(0, a.atkcd - dt);
    a.hit = Math.max(0, a.hit - dt);
    if (a.pauseT > 0) { a.pauseT -= dt; a.vx = a.vy = 0; continue; }

    // --- target selection (full rescan every ~0.2 s, staggered) ---
    if (a.phase === undefined) a.phase = (S.rng.next() * 12) | 0;
    let tgt, tgtKind, tdist = 1e9;
    if ((S.tick + a.phase) % 12 === 0 || a.tgtCache === undefined) {
      tgt = null; tgtKind = null;
      const playerHidden = p.dead || p.inCopter || S.ghost || inSafeZone(S, p.x, p.y);
      let botT = null, botD = 1e9;
      for (const u of S.units) {
        if (u.dead || u.flying || u.eliminated) continue;
        const d = dist(a.x, a.y, u.x, u.y);
        if (d < def.detect && d < botD && !wallBlocksView(S, a.x, a.y, u.x, u.y)) { botD = d; botT = u; }
      }
      if (!playerHidden) {
        const d = dist(a.x, a.y, p.x, p.y);
        if (d < def.detect && d <= botD && !wallBlocksView(S, a.x, a.y, p.x, p.y)) { tgt = p; tgtKind = 'player'; }
      }
      if (!tgt && botT) { tgt = botT; tgtKind = 'bot'; }
      if (!tgt) {
        let tk = null, td = def.detect * def.detect;
        for (const [k, d2] of S.deploys) {
          if (d2.type !== 'turret') continue;
          const [gx, gy] = k.split(',').map(Number);
          const c = cellCenter(gx, gy);
          const dd = dist2(a.x, a.y, c.x, c.y);
          if (dd < td && !wallBlocksView(S, a.x, a.y, c.x, c.y)) { td = dd; tk = { key: k, x: c.x, y: c.y }; }
        }
        if (tk) { tgt = tk; tgtKind = 'turret'; }
      }
      if (!tgt && a.hostile) {
        let o = null, od = def.detect * def.detect;
        for (const b of S.animals) {
          if (b === a || b.dead) continue;
          const dd = dist2(a.x, a.y, b.x, b.y);
          if (dd < od) { od = dd; o = b; }
        }
        if (o) { tgt = o; tgtKind = 'animal'; }
      }
      if (!tgt && a.foe) {
        const f = a.foe;
        if (typeof f === 'object' && !f.dead && dist(a.x, a.y, f.x, f.y) < def.detect * 1.4) {
          tgt = f;
          tgtKind = f === p ? 'player' : (f.owner !== undefined ? 'bot' : 'animal');
        }
      }
      a.tgtCache = tgt ? { tgt, kind: tgtKind } : null;
    } else if (a.tgtCache) {
      const c = a.tgtCache;
      const dead2 = c.tgt.dead || (c.kind === 'player' && (p.dead || S.ghost)) || (c.kind === 'turret' && !S.deploys.has(c.tgt.key));
      if (dead2) a.tgtCache = null;
    }
    tgt = a.tgtCache ? a.tgtCache.tgt : null;
    tgtKind = a.tgtCache ? a.tgtCache.kind : null;
    if (tgt) tdist = dist(a.x, a.y, tgt.x, tgt.y);
    // de-aggro by leash
    if (tgt && tgtKind !== 'turret' && tdist > def.lose) { tgt = null; a.aggro = null; }

    let sp = def.walk, mx = 0, my = 0;
    if (tgt) {
      a.aggro = tgtKind;
      sp = def.chase;
      const d = Math.max(1, tdist);
      mx = (tgt.x - a.x) / d; my = (tgt.y - a.y) / d;
      // attack reach
      const reach = tgtKind === 'turret' ? a.r + 35.2 : tgtKind === 'player' ? a.r + 16 + 2 : a.r + 16;
      if (a.atkcd <= 0 && tdist < reach) {
        if (tgtKind === 'player') {
          hurtPlayer(S, def.dmg, a.x, a.y, 'animal');
          if (def.poison) p.poison = Math.max(p.poison, 10);
        } else if (tgtKind === 'bot') hurtBot(S, tgt, def.dmg, a.x, a.y, 'animal');
        else if (tgtKind === 'turret') damageDeploy(S, tgt.key, def.dmg, 'animal');
        else if (tgtKind === 'animal') { tgt.hp -= def.dmg; tgt.foe = a; tgt.hit = 0.12; if (tgt.hp <= 0) { tgt.dead = true; tgt.respawnT = S.rng.rand(11, 18); } }
        a.atkcd = def.atk;
        a.pauseT = ANIM_PAUSE;
        continue;
      }
    } else {
      a.aggro = null;
      a.wanderT -= dt;
      if (a.avoidT > 0) { a.avoidT -= dt; a.dir = a.avoidA; }
      else if (a.wanderT <= 0) {
        a.wanderT = S.rng.rand(1.2, 3.2);
        if (a.lake && dist(a.x, a.y, a.lake.x, a.lake.y) > a.lake.r * 0.9) a.dir = Math.atan2(a.lake.y - a.y, a.lake.x - a.x);
        else if (a.lake && S.rng.chance(0.55)) { a.vx = a.vy = 0; continue; }
        else if (S.rng.chance(0.3)) { a.vx = a.vy = 0; continue; }
        else a.dir = S.rng.rand(0, TAU);
      }
      // steer away from any TC within 340 (don't loiter at bases)
      for (const [k, d2] of S.deploys) {
        if (d2.type !== 'cupboard') continue;
        const [gx, gy] = k.split(',').map(Number);
        const c = cellCenter(gx, gy);
        if (dist2(a.x, a.y, c.x, c.y) < 340 * 340) {
          a.avoidA = Math.atan2(a.y - c.y, a.x - c.x);
          a.avoidT = 1.2; a.dir = a.avoidA;
          break;
        }
      }
      mx = Math.cos(a.dir); my = Math.sin(a.dir);
    }

    const nx = a.x + mx * sp * dt, ny = a.y + my * sp * dt;
    const before = { x: a.x, y: a.y };
    const opts = a.lake ? { allowLake: true } : {};
    const ok = moveAnimal(S, a, nx, ny);
    a.vx = (a.x - before.x) / dt; a.vy = (a.y - before.y) / dt;

    // anti-stuck (aggro only): give up at 1.5 s, relocate at 3 s if sealed in
    if (tgt) {
      const moved = dist(a.x, a.y, before.x, before.y);
      if (moved < sp * dt * 0.25) {
        a.stuckT += dt;
        if (a.stuckT > 3) { respawnAnimal(S, a); continue; }
        if (a.stuckT > 1.5) { a.aggro = null; a.foe = null; a.stuckT = 0; a.dir = S.rng.rand(0, TAU); }
      } else a.stuckT = Math.max(0, a.stuckT - dt * 2);
    } else if (!ok && S.rng.chance(0.5)) a.dir = S.rng.rand(0, TAU);
  }
}

function moveAnimal(S, a, nx, ny) {
  // animals never enter the safe zone
  if (inSafeZone(S, nx, ny)) return false;
  let moved = false;
  if (blocked(S, a.x, a.y, a.r * 0.7)) { a.x = nx; a.y = ny; moved = true; } // escape rule
  else {
    if (!blocked(S, nx, a.y, a.r * 0.7) && (a.lake || !S.world.lakeAt(nx, a.y))) { a.x = nx; moved = true; }
    if (!blocked(S, a.x, ny, a.r * 0.7) && (a.lake || !S.world.lakeAt(a.x, ny))) { a.y = ny; moved = true; }
  }
  a.x = clamp(a.x, 20, WORLD.w - 20); a.y = clamp(a.y, 20, WORLD.h - 20);
  return moved;
}

export function respawnAnimal(S, a) {
  const def = ANIMALS[a.type];
  const W = WORLD.w;
  const band = def.biome === 'desert' ? [0, W / 3] : def.biome === 'jungle' ? [W / 3, 2 * W / 3] : def.biome === 'winter' ? [2 * W / 3, W] : [0, W];
  for (let t = 0; t < 30; t++) {
    let x, y;
    if (a.lake) {
      const ang = S.rng.rand(0, TAU);
      x = a.lake.x + Math.cos(ang) * (a.lake.r + S.rng.rand(30, 200));
      y = a.lake.y + Math.sin(ang) * (a.lake.r + S.rng.rand(30, 200));
    } else {
      x = S.rng.rand(Math.max(90, band[0] - 90), Math.min(W - 90, band[1] + 90));
      y = S.rng.rand(90, WORLD.h - 90);
    }
    if (dist(x, y, S.player.x, S.player.y) < 520) continue;
    if (S.world.landFactor(x, y) < 0.05) continue;
    if (S.world.lakeAt(x, y) && !a.lake) continue;
    if (blocked(S, x, y, a.r)) continue;
    a.x = x; a.y = y;
    break;
  }
  a.dead = false; a.hp = a.max; a.aggro = null; a.foe = null; a.pauseT = 0; a.stuckT = 0;
  a.dir = S.rng.rand(0, TAU); a.respawnT = 0; a.looted = false;
}

// ---- monument guards ----
export function updateGuards(S, dt) {
  const p = S.player;
  for (const g of S.guards) {
    if (g.dead) {
      g.respawnT -= dt;
      if (g.respawnT <= 0) {
        const a = S.rng.rand(0, TAU), d = S.rng.rand(0.35 * g.mr, 0.8 * g.mr);
        g.x = g.mx + Math.cos(a) * d; g.y = g.my + Math.sin(a) * d;
        g.hp = g.max; g.dead = false;
      }
      continue;
    }
    g.gunCd = Math.max(0, g.gunCd - dt);
    // target: player + bots within detect, LOS
    let tgt = null, td = GUARD.detect;
    if (!p.dead && !p.inCopter && !S.ghost && !inSafeZone(S, p.x, p.y)) {
      const d = dist(g.x, g.y, p.x, p.y);
      if (d < td && !wallBlocksView(S, g.x, g.y, p.x, p.y)) { tgt = p; td = d; }
    }
    for (const u of S.units) {
      if (u.dead || u.flying || u.eliminated) continue;
      const d = dist(g.x, g.y, u.x, u.y);
      if (d < td && !wallBlocksView(S, g.x, g.y, u.x, u.y)) { tgt = u; td = d; }
    }
    const homeD = dist(g.x, g.y, g.mx, g.my);
    if (homeD > g.mr + GUARD.leash) tgt = null; // leashed

    if (tgt) {
      const aim = Math.atan2(tgt.y - g.y, tgt.x - g.x);
      g.angle = turnToward(g.angle, aim, Math.min(1, dt * 9) * Math.PI);
      if (td < GUARD.range && g.gunCd <= 0 && Math.abs(angShort(g.angle, aim)) < 0.30) {
        g.gunCd = GUARD.rof;
        const a2 = g.angle + S.rng.rand(-GUARD.spread, GUARD.spread);
        spawnBullet(S, { x: g.x + Math.cos(g.angle) * 16, y: g.y + Math.sin(g.angle) * 16, angle: a2, speed: GUARD.bspeed, dmg: GUARD.dmg, from: 'guard', life: GUARD.range / GUARD.bspeed + 0.1 });
        burst(S, g.x + Math.cos(g.angle) * 16, g.y + Math.sin(g.angle) * 16, '#ffd76b', 2, 90);
      }
      let mvx = 0, mvy = 0;
      if (td > 300) { mvx = Math.cos(aim); mvy = Math.sin(aim); }
      else if (td < 150) { mvx = -Math.cos(aim); mvy = -Math.sin(aim); }
      else { mvx = -Math.sin(aim) * (g.seed > 4.5 ? 1 : -1); mvy = Math.cos(aim) * (g.seed > 4.5 ? 1 : -1); }
      const nx = g.x + mvx * GUARD.speed * dt, ny = g.y + mvy * GUARD.speed * dt;
      if (!blocked(S, nx, ny, GUARD.r)) { g.x = nx; g.y = ny; }
      g.hasWp = false;
    } else {
      const ROAM = Math.min(620 - 40, g.mr * 2.6);
      if (homeD > ROAM + 90) {
        const aim = Math.atan2(g.my - g.y, g.mx - g.x);
        g.angle = turnToward(g.angle, aim, dt * 4);
        const nx = g.x + Math.cos(g.angle) * GUARD.speed * dt, ny = g.y + Math.sin(g.angle) * GUARD.speed * dt;
        if (!blocked(S, nx, ny, GUARD.r)) { g.x = nx; g.y = ny; }
        g.hasWp = false;
      } else {
        g.wpT -= dt;
        if (!g.hasWp || g.wpT <= 0 || dist(g.x, g.y, g.wpX, g.wpY) < 26) {
          const a = S.rng.rand(0, TAU), d = S.rng.rand(0.25 * g.mr, ROAM);
          g.wpX = g.mx + Math.cos(a) * d; g.wpY = g.my + Math.sin(a) * d;
          g.wpT = S.rng.rand(2.4, 6.0); g.hasWp = true;
        }
        const aim = Math.atan2(g.wpY - g.y, g.wpX - g.x);
        g.angle = turnToward(g.angle, aim, dt * 3.5);
        const sp = GUARD.speed * 0.55;
        const nx = g.x + Math.cos(g.angle) * sp * dt, ny = g.y + Math.sin(g.angle) * sp * dt;
        if (!blocked(S, nx, ny, GUARD.r)) { g.x = nx; g.y = ny; }
        else g.hasWp = false; // drop waypoint instead of twitching
      }
    }
  }
}

const angShort = (a, b) => {
  let d = (b - a) % TAU;
  if (d > Math.PI) d -= TAU;
  if (d < -Math.PI) d += TAU;
  return d;
};
