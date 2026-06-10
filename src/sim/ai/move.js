// Unit locomotion. One entry point — goto() — plans/follows wall-aware paths,
// opens own doors, and runs a goal-progress watchdog with penalty-repaths.
// No phasing, no teleports: if a unit truly cannot make progress the caller
// is told so and abandons the task (and the metrics record it).
import { TILE, AI, WORLD } from '../config.js';
import { dist, dist2, clamp, TAU } from '../util.js';
import { findPath, losMove, addPenalty } from '../nav.js';
import { blocked } from '../physics.js';

export function clearPath(u) {
  u.path = null; u.pathI = 0; u.repathN = 0;
}

// returns 'arrived' | 'moving' | 'stuck'
export function goto(S, u, tx, ty, dt, opts = {}) {
  const arrive = opts.arrive || 16;
  const d = dist(u.x, u.y, tx, ty);
  if (d <= arrive) { clearPath(u); u.progBest = 1e9; return 'arrived'; }

  // (re)plan — rate-limited so jittering goals (e.g. loot being magnet-pulled
  // around) can't thrash the planner every tick
  const goalMoved = dist(u.pathGX, u.pathGY, tx, ty) > 90;
  const stale = S.t - u.pathT > 3.0;
  const canPlan = !u.path || S.t - (u.lastPlanT || -1) > 0.5;
  if ((!u.path || goalMoved || stale || u.pathI >= u.path.length) && canPlan) {
    u.lastPlanT = S.t;
    // short hops with clear LOS skip pathfinding entirely
    if (d < TILE * 3 && losMove(S, u.owner, u.x, u.y, tx, ty)) {
      u.path = [{ x: tx, y: ty }];
      u.pathI = 0;
    } else {
      const p = findPath(S, u.owner, u.x, u.y, tx, ty);
      S.metrics.repaths++;
      if (!p) {
        S.metrics.pathFails++;
        u.path = [{ x: tx, y: ty }]; // direct fallback (e.g. target inside enemy base)
        u.pathI = 0;
        u.directFallback = true;
      } else { u.path = p; u.pathI = 0; u.directFallback = false; }
    }
    u.pathGX = tx; u.pathGY = ty; u.pathT = S.t;
  }

  // follow
  let wp = u.path[Math.min(u.pathI, u.path.length - 1)];
  // waypoint advance (door waypoints need a tighter touch)
  const wpR = wp.door ? 12 : 15;
  if (dist(u.x, u.y, wp.x, wp.y) < wpR && u.pathI < u.path.length - 1) {
    u.pathI++;
    wp = u.path[u.pathI];
  }
  // opportunistic skip when the next-next point is visible (smooths corners)
  if (!wp.door && u.pathI + 1 < u.path.length && !u.path[u.pathI + 1].door) {
    if (S.tick % 7 === u.tickPhase % 7 && losMove(S, u.owner, u.x, u.y, u.path[u.pathI + 1].x, u.path[u.pathI + 1].y)) {
      u.pathI++;
      wp = u.path[u.pathI];
    }
  }

  let speed = opts.speed || AI.BOT_SPEED;
  const lake = S.world.lakeAt(u.x, u.y);
  if (lake && !lake.frozen) speed *= 0.5;

  const wd = Math.max(1, dist(u.x, u.y, wp.x, wp.y));
  const mvx = (wp.x - u.x) / wd, mvy = (wp.y - u.y) / wd;
  const step = Math.min(speed * dt, wd);
  const nx = u.x + mvx * step, ny = u.y + mvy * step;
  const before = u.x, beforeY = u.y;
  const mOpts = { passOwner: u.owner, openOwnDoors: true };
  let moved = false;
  // escape rule: if the CURRENT spot already overlaps a blocker (e.g. a wall
  // was just built on top of us), movement is free — never pin a unit.
  if (blocked(S, u.x, u.y, 13, mOpts)) { u.x = nx; u.y = ny; moved = true; }
  else if (!blocked(S, nx, ny, 13, mOpts)) { u.x = nx; u.y = ny; moved = true; }
  else {
    // axis-separated slide
    if (!blocked(S, nx, u.y, 13, mOpts)) { u.x = nx; moved = true; }
    if (!blocked(S, u.x, ny, 13, mOpts)) { u.y = ny; moved = true; }
  }
  u.x = clamp(u.x, 12, WORLD.w - 12);
  u.y = clamp(u.y, 12, WORLD.h - 12);
  u.vx = (u.x - before) / dt; u.vy = (u.y - beforeY) / dt;
  if (moved) {
    const want = Math.atan2(mvy, mvx);
    u.angle = u.angle + angShort(u.angle, want) * Math.min(1, dt * 7);
  }

  // --- progress watchdog ---
  u.progT += dt;
  if (u.progT >= 0.5) {
    u.progT = 0;
    const cur = dist(u.x, u.y, tx, ty);
    if (cur < u.progBest - 12) {
      u.progBest = cur;
      u.noProgT = 0;
      u.repathN = 0;
    } else {
      u.noProgT = (u.noProgT || 0) + 0.5;
      if (u.noProgT >= 1.5) {
        u.noProgT = 0;
        u.repathN++;
        addPenalty(S, u.x, u.y, 12);
        addPenalty(S, u.x + (tx > u.x ? 64 : -64), u.y, 10);
        addPenalty(S, u.x, u.y + (ty > u.y ? 64 : -64), 10);
        S.metrics.stuckTotal += 1.5;
        u.path = null; u.lastPlanT = -1; // force immediate replan
        if (u.repathN === 2) {
          // try a perpendicular detour goal once
          const a = Math.atan2(ty - u.y, tx - u.x) + (u.id % 2 ? 1 : -1) * Math.PI / 2;
          u.detourX = u.x + Math.cos(a) * 220;
          u.detourY = u.y + Math.sin(a) * 220;
          u.detourT = S.t + 2.5;
        }
        if (u.repathN >= 3) {
          u.repathN = 0;
          u.progBest = 1e9;
          clearPath(u);
          S.metrics.stuckLog.push({ t: S.t, owner: u.owner, x: u.x | 0, y: u.y | 0 });
          return 'stuck';
        }
      }
    }
  }
  // active detour overrides briefly
  if (u.detourT && S.t < u.detourT) {
    const dd = dist(u.x, u.y, u.detourX, u.detourY);
    if (dd > 20) {
      const da = Math.atan2(u.detourY - u.y, u.detourX - u.x);
      const dnx = u.x + Math.cos(da) * speed * dt, dny = u.y + Math.sin(da) * speed * dt;
      if (!blocked(S, dnx, dny, 13, mOpts)) { u.x = dnx; u.y = dny; }
    } else u.detourT = 0;
  }

  // waypoint stall: pressing at an unreachable (stale) waypoint → skip it
  if (!moved && u.path && u.pathI < u.path.length - 1) {
    u.wpStallT = (u.wpStallT || 0) + dt;
    if (u.wpStallT > 0.6) { u.wpStallT = 0; u.pathI++; }
  } else if (moved) u.wpStallT = 0;

  // stuck-in-place accounting (raiders pressing enemy walls are exempt from
  // the headline metric, like v1's non-raid bars — they breach, not path)
  u.gotoTick = S.tick;
  if (!moved) {
    u.stuckT += dt;
    if (u.state !== 'raid') S.metrics.maxStuck = Math.max(S.metrics.maxStuck, u.stuckT);
  } else u.stuckT = Math.max(0, u.stuckT - dt * 2);

  return 'moving';
}

// gentle same-team separation so squads don't stack in doorways
export function separate(S, u, dt) {
  for (const o of S.units) {
    if (o === u || o.dead || o.eliminated || o.flying || o.owner !== u.owner) continue;
    const dd = dist2(u.x, u.y, o.x, o.y);
    if (dd > 0.01 && dd < 18 * 18) {
      const d = Math.sqrt(dd);
      const push = (18 - d) * 0.5 * dt * 6;
      const px = (u.x - o.x) / d * push, py = (u.y - o.y) / d * push;
      if (!blocked(S, u.x + px, u.y + py, 13, { passOwner: u.owner })) { u.x += px; u.y += py; }
    }
  }
}

export function faceToward(u, tx, ty, dt, rate = 8) {
  const want = Math.atan2(ty - u.y, tx - u.x);
  u.angle = u.angle + angShort(u.angle, want) * Math.min(1, dt * rate);
}

export const angShort = (a, b) => {
  let d = (b - a) % TAU;
  if (d > Math.PI) d -= TAU;
  if (d < -Math.PI) d += TAU;
  return d;
};
