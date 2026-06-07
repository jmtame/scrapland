/* SCRAPLAND enemy AI — per-bot helpers: threat sensing, node/loot/raid target picking, ground navigation
   (anti-jitter movement + base-door routing), shooting and copter flight. Uses main-game globals at call time. */
"use strict";

function baseAlive(b) {
  if (b.ally) return true;
  if (b._unfounded) return true;
  if (b.isPlayer) return !!game.deploys.get(b.boxKey);
  const tc = game.deploys.get(b.tcKey);
  return !!(tc && tc.type === 'cupboard');
}

// The player's base as a raid target — the Tool Cupboard (all loot lives in the TC).
function playerBaseTarget() {
  let tc = null;
  for (const [k, s] of game.deploys) {
    if (s.owner === OWNER && s.type === 'cupboard') { tc = { k }; break; }
  }
  if (!tc) return null;
  const [gx, gy] = tc.k.split(',').map(Number);
  return { owner: OWNER, boxKey: tc.k, tcKey: tc.k,
           hx: gx * TILE + TILE / 2, hy: gy * TILE + TILE / 2, isPlayer: true };
}

function botThreat(b) {
  // cooling off from a standoff (still fights back if shot, via retaliate)
  if ((b.disengageT || 0) > 0) return null;
  // never fight while inside the trade safe zone (weapons disabled there)
  if (typeof inSafeZone === 'function' && inSafeZone(b.x, b.y)) return null;
  // LOCAL only: react to hostiles within our own viewport (of the BODY), not distant events near our base
  const RR = REACT_R * REACT_R;
  let best = null;
  let bd = 1e18;
  // A SOLID boulder on the line is real cover -> don't target through it (no shooting at each other across
  // a boulder). We still engage foes behind our own walls (routing reaches them).
  const consider = (tx, ty, vx, vy) => {
    if (typeof inSafeZone === 'function' && inSafeZone(tx, ty)) return;
    if (typeof boulderLine === 'function' && boulderLine(b.x, b.y, tx, ty)) return;
    const d = dist2(b.x, b.y, tx, ty);
    if (d < bd) { bd = d; best = { x: tx, y: ty, vx: vx || 0, vy: vy || 0 }; }
  };
  if (!b.ally && !player.dead && !player.inCopter && !game.ghost &&
      dist2(player.x, player.y, b.x, b.y) < RR) consider(player.x, player.y, player.vx, player.vy);
  for (const o of game.enemies) {
    // never target a teammate / our own workers
    if (o === b || o.dead || o.flying || o.eliminated || o.owner === b.owner) continue;
    // a hostile within our local view -> engage (a raider AT our base is in-view when we're home;
    // a far foe is the RETURN logic's job, not a reactive charge)
    if (dist2(o.x, o.y, b.x, b.y) < RR) consider(o.x, o.y, o.vx, o.vy);
  }
  if (game.animals) {
    for (const a of game.animals) {    // fight off aggressive animals nearby
      if (a.hp <= 0 || !a.aggro) continue;
      if (dist2(a.x, a.y, b.x, b.y) < 360 * 360) consider(a.x, a.y);
    }
  }
  if (game.guards) {
    // monument NPCs are hostile -> engage them (guards only exist near monuments, so this only fires there)
    for (const g of game.guards) {
      if (g.dead) continue;
      if (dist2(g.x, g.y, b.x, b.y) < 480 * 480) consider(g.x, g.y);
    }
  }
  return best;
}

// A hostile right next to our BODY (independent of home) — makes raiders return fire and two teams
// meeting at a monument engage each other.
function botNearThreat(b) {
  if ((b.disengageT || 0) > 0) return null;
  // no fighting inside the trade safe zone
  if (typeof inSafeZone === 'function' && inSafeZone(b.x, b.y)) return null;
  const R = 430;
  const RR = R * R;
  let best = null;
  let bd = 1e18;
  // a solid boulder on the line = cover -> skip (don't shoot through it)
  const consider = (tx, ty, vx, vy) => {
    if (typeof inSafeZone === 'function' && inSafeZone(tx, ty)) return;
    if (typeof boulderLine === 'function' && boulderLine(b.x, b.y, tx, ty)) return;
    const d = dist2(b.x, b.y, tx, ty);
    if (d < bd) { bd = d; best = { x: tx, y: ty, vx: vx || 0, vy: vy || 0 }; }
  };
  if (!b.ally && !player.dead && !player.inCopter && !game.ghost &&
      dist2(player.x, player.y, b.x, b.y) < RR) consider(player.x, player.y, player.vx, player.vy);
  for (const o of game.enemies) {
    if (o === b || o.dead || o.flying || o.eliminated || o.owner === b.owner) continue;
    if (dist2(o.x, o.y, b.x, b.y) < RR) consider(o.x, o.y, o.vx, o.vy);
  }
  if (game.guards) {
    for (const g of game.guards) {    // a monument guard right next to us -> shoot it
      if (g.dead) continue;
      if (dist2(g.x, g.y, b.x, b.y) < RR) consider(g.x, g.y);
    }
  }
  return best;
}

// Nearest LIVING guard at this monument.
function botMonumentGuard(b, m) {
  if (!game.guards || !m) return null;
  let best = null;
  let bd = 1e18;
  const rr = (m.r + 280) * (m.r + 280);
  for (const g of game.guards) {
    if (g.dead) continue;
    if (dist2(g.x, g.y, m.x, m.y) > rr) continue;
    const d = dist2(b.x, b.y, g.x, g.y);
    if (d < bd) { bd = d; best = g; }
  }
  return best;
}

function botNearestNode(b) {
  let best = null;
  let bd = 1500 * 1500;
  const now = (game.t || 0);
  for (const o of game.resources) {
    if (o.amount <= 0) continue;
    // a node we just gave up on (was circling toward it) -> ignore briefly so we re-pick
    if (o === b._skipNode && (game.t || 0) < (b._skipT || 0)) continue;
    // node sits ON a base foundation (built over / walled in) -> unreachable; never target it (root of
    // in-base circling: a unit endlessly routing toward a node behind its own — or an enemy's — walls)
    if (typeof foundationAt === 'function' && foundationAt(Math.floor(o.x / TILE), Math.floor(o.y / TILE))) continue;
    const homeDistSq = dist2(o.x, o.y, b.hx, b.hy);
    // ranged ring: not too close (park) nor too far
    if (homeDistSq > 2200 * 2200 || homeDistSq < 240 * 240) continue;
    // a teammate already works this node -> pick another so units SPREAD OUT (no clumping)
    if (o._by && o._by !== b && !o._by.dead && !o._by.eliminated && o._by.owner === b.owner &&
        (now - (o._byT || 0)) < 2.5) continue;
    const d = dist2(b.x, b.y, o.x, o.y);
    if (d < bd) { bd = d; best = o; }
  }
  if (best) {
    best._by = b;
    best._byT = now;
  }
  return best;
}

// Nearest resource ANYWHERE (no home-distance cap) -> idle units range out to work, never park at base.
function botAnyNode(b) {
  let best = null;
  let bd = 1e18;
  const now = (game.t || 0);
  for (const o of game.resources) {
    if (o.amount <= 0) continue;
    if (o === b._skipNode && now < (b._skipT || 0)) continue;
    // node built over / walled inside a base -> unreachable, skip it
    if (typeof foundationAt === 'function' && foundationAt(Math.floor(o.x / TILE), Math.floor(o.y / TILE))) continue;
    if (dist2(o.x, o.y, b.hx, b.hy) < 240 * 240) continue;    // not right on top of home
    // a teammate already works it -> spread out
    if (o._by && o._by !== b && !o._by.dead && !o._by.eliminated && o._by.owner === b.owner &&
        (now - (o._byT || 0)) < 2.5) continue;
    const d = dist2(b.x, b.y, o.x, o.y);
    if (d < bd) { bd = d; best = o; }
  }
  if (best) {
    best._by = b;
    best._byT = now;
  }
  return best;
}

// A gatherer COMMITS to ONE node until it's depleted (or a teammate claims it) — NOT a per-frame re-pick.
// Re-picking the nearest every frame churns the target (~13/min) and units wander without harvesting.
function botPickNode(b) {
  const now = game.t || 0;
  // has resources & reachable (not walled into a base)
  const ok = (o) => o && o.amount > 0 &&
    !(typeof foundationAt === 'function' && foundationAt(Math.floor(o.x / TILE), Math.floor(o.y / TILE)));
  // a teammate is already working it
  const claimedByOther = (o) => o._by && o._by !== b && !o._by.dead && !o._by.eliminated &&
    o._by.owner === b.owner && (now - (o._byT || 0)) < 3;
  // KEEP our committed node until it's exhausted
  if (ok(b._tgtNode) && !claimedByOther(b._tgtNode)) {
    b._tgtNode._by = b;
    b._tgtNode._byT = now;
    return b._tgtNode;
  }
  // Else claim a fresh node, CONFINED to the base: search expanding HOME rings (≈1 viewport, then wider)
  // and only step out if a ring is empty. Within a ring pick the node nearest the UNIT (reachable, fans
  // out via claims). A unit out at a monument therefore returns to a home-ring node instead of gathering
  // far away.
  let best = null;
  let bd = 1e18;
  for (const R of [1400, 2800, 5600, 1e9]) {
    const R2 = R * R;
    best = null;
    bd = 1e18;
    for (const o of game.resources) {
      if (!ok(o) || claimedByOther(o)) continue;
      if (o === b._skipNode && now < (b._skipT || 0)) continue;
      if (dist2(o.x, o.y, b.hx, b.hy) > R2) continue;    // must be within this ring OF HOME
      // PREFER DIRECTLY-REACHABLE nodes: picking the straight-line-nearest node even when a lake/coast/
      // boulder is in the way makes units WIND the long way around it (circling outside the base instead
      // of gathering). A terrain-blocked node is heavily penalised so a clear node wins unless it's much
      // farther.
      const clear = (typeof navLOS !== 'function') || navLOS(b.x, b.y, o.x, o.y);
      const score = dist2(b.x, b.y, o.x, o.y) * (clear ? 1 : 6);
      if (score < bd) { bd = score; best = o; }
    }
    if (best) break;    // found one in this ring -> stop (expand outward only when the inner ring is exhausted)
  }
  if (best) {
    best._by = b;
    best._byT = now;
  }
  b._tgtNode = best || null;
  return b._tgtNode;
}

// Last-resort: keep MOVING across the map (never loiter in one region) when there's no node/monument to work.
function botRoam(b, dt) {
  if (!b._roam || Math.hypot(b._roam.x - b.x, b._roam.y - b.y) < 140 || (b._roamT = (b._roamT || 0) - dt) <= 0) {
    for (let k = 0; k < 12; k++) {
      const x = rand(800, WORLD.w - 800);
      const y = rand(800, WORLD.h - 800);
      if ((typeof onLand !== 'function' || onLand(x, y)) && (typeof lakeAt !== 'function' || !lakeAt(x, y))) {
        b._roam = { x, y };
        b._roamT = rand(7, 13);
        break;
      }
    }
  }
  if (b._roam) botGoto(b, b._roam.x, b._roam.y, 140, dt);
}

// Grab dropped loot only if it's reasonably CLOSE (don't run across the map for scraps).
// COMMIT to ONE loot item until grabbed / gone / out of range — re-picking the nearest every frame makes
// units ZIGZAG between scattered items near their base (a big chunk of the near-base loop). The loot
// magnet pulls the committed item in.
function botNearestLoot(b) {
  if (!game.loot || !game.loot.length) {
    b._lootTgt = null;
    return null;
  }
  const skipped = (o) => o === b._lootSkip && (game.t || 0) < (b._lootSkipT || 0);
  if (b._lootTgt && game.loot.indexOf(b._lootTgt) >= 0 &&
      dist2(b.x, b.y, b._lootTgt.x, b._lootTgt.y) < 560 * 560 && !skipped(b._lootTgt)) return b._lootTgt;
  let best = null;
  let bd = 520 * 520;
  for (const o of game.loot) {
    if (skipped(o)) continue;
    const d = dist2(b.x, b.y, o.x, o.y);
    if (d < bd) { bd = d; best = o; }
  }
  b._lootTgt = best;
  return best;
}

function botNearestMonument(b) {
  if (!game.monuments || !game.monuments.length) return null;
  let best = null;
  let bd = 1e18;
  for (const m of game.monuments) {
    const d = dist2(b.x, b.y, m.x, m.y);
    if (d < bd) { bd = d; best = m; }
  }
  return best;
}

// A crate/barrel at this monument, nearest to the bot.
function botMonumentBarrel(b, m) {
  if (!game.barrels) return null;
  let best = null;
  let bd = 1e18;
  const rr = (m.r + 50) * (m.r + 50);
  for (const o of game.barrels) {
    if (o.hp <= 0) continue;
    if (dist2(o.x, o.y, m.x, m.y) > rr) continue;
    const d = dist2(b.x, b.y, o.x, o.y);
    if (d < bd) { bd = d; best = o; }
  }
  return best;
}

function botRaidTarget(b) {
  let best = null;
  let bd = 1e18;
  for (const o of game.enemies) {
    // every ALIVE, FOUNDED enemy base is a target -> the field collapses to a winner
    if (o.owner === b.owner || !o.primary || o._unfounded || !baseAlive(o)) continue;
    const box = game.deploys.get(o.boxKey);
    const loot = box && box.store ? (box.store.wood + box.store.stone + box.store.metal) : 0;
    const turrets = botOwnerTurrets(o.owner);
    // prefer closer + weaker-defended + lootier
    const score = dist2(b.hx, b.hy, o.hx, o.hy) * (1 + turrets * 0.30) / (1 + loot * 0.003);
    if (score < bd) { bd = score; best = o; }
  }
  if (!b.ally) {    // enemies raid the player too; allied workers don't
    const pt = playerBaseTarget();
    if (pt) {
      const score = dist2(b.hx, b.hy, pt.hx, pt.hy);
      if (score < bd) { bd = score; best = pt; }
    }
  }
  return best;
}

// The FARTHEST alive enemy base — a transport-heli raid target (otherwise too far to bother walking).
function botFarthestEnemy(b) {
  let best = null;
  let bd = -1;
  for (const o of game.enemies) {
    if (o.owner === b.owner || !o.primary || !baseAlive(o)) continue;
    const d = dist2(b.hx, b.hy, o.hx, o.hy);
    if (d > bd && d > 3000 * 3000) { bd = d; best = o; }
  }
  return best;
}

function botMoveTo(b, tx, ty, sp, dt) {
  b._navX = tx;
  b._navY = ty;
  const distToGoal = Math.hypot(tx - b.x, ty - b.y) || 1;
  let step = sp * dt;
  if (typeof lakeAt === 'function') {
    const lake = lakeAt(b.x, b.y);
    if (lake && !lake.frozen) step *= 0.5;    // wading through lake water is slow
  }
  // NO unit phases walls (own OR enemy) — INCLUDING the player's allied workers. Everyone uses doors
  // (which they must OPEN) / breaches. A stuck-escape only phases TERRAIN + their own turret/box.
  game._passOwner = b.owner;
  game._passWalls = false;
  game._noDoor = !!b._noDoor;
  game._passDeploy = !!b._escaping;
  game._ghostMove = !!b._hardEscape;
  game._escapeSoft = !!b._escaping;
  game._mustOpenDoor = true;
  const goalAng = Math.atan2(ty - b.y, tx - b.x);
  const free = a => !blocked(b.x + Math.cos(a) * step, b.y + Math.sin(a) * step, 12);
  let moveAng = null;
  // Bug2 leave-point: once hugging an obstacle, DON'T cut back toward the goal until we're genuinely
  // closer than where we hit it -> rounds lakes/enemy bases instead of orbiting them forever.
  const canLeave = !b._wf || (free(goalAng) && distToGoal < (b._wfHit || 1e9) - 10);
  if (canLeave && free(goalAng)) {    // clear path & allowed to leave -> straight
    moveAng = goalAng;
    b._wf = 0;
  } else {
    // blocked (or still rounding): commit ONE turn side and hug the obstacle (no oscillation)
    if (!b._wf) {
      b._wf = free(goalAng + 0.6) ? 1 : (free(goalAng - 0.6) ? -1 : (((b.id || 0) & 1) ? 1 : -1));
      b._wfHit = distToGoal;    // remember the goal-distance where we hit the wall
    }
    for (let k = 1; k <= 12 && moveAng === null; k++) {
      const a = goalAng + b._wf * k * (Math.PI / 10);
      if (free(a)) moveAng = a;
    }
    if (moveAng === null) {
      for (let k = 1; k <= 12 && moveAng === null; k++) {
        const a = goalAng - b._wf * k * (Math.PI / 10);
        if (free(a)) moveAng = a;
      }
    }
    if (moveAng === null && free(goalAng)) {    // fully boxed except straight -> take it
      moveAng = goalAng;
      b._wf = 0;
    }
  }
  // ANTI-JITTER momentum guard: while hugging an obstacle (not escaping), NEVER reverse the heading >130°
  // in one frame — that corner flip-flop IS the jitter. Prefer a free direction near the last heading;
  // if none, don't move (a brief block trips the clean door-cut/escape instead of vibrating).
  if (moveAng !== null && b._wf && !b._escaping && b._lastMv !== undefined &&
      Math.abs(angDiff(moveAng, b._lastMv)) > 2.3) {
    let alt = null;
    for (let k = 0; k <= 9 && alt === null; k++) {
      for (const s of (k === 0 ? [0] : [1, -1])) {
        const a = b._lastMv + s * k * (Math.PI / 14);
        if (Math.abs(angDiff(a, b._lastMv)) <= 1.7 && free(a)) { alt = a; break; }
      }
    }
    moveAng = alt;    // keep momentum, else null (block -> escape handles it; no reversal vibration)
  }
  if (moveAng !== null) {
    b.x += Math.cos(moveAng) * step;
    b.y += Math.sin(moveAng) * step;
    b._lastMv = moveAng;
  }
  game._passOwner = null;
  game._passWalls = false;
  game._noDoor = false;
  game._passDeploy = false;
  game._ghostMove = false;
  game._escapeSoft = false;
  game._mustOpenDoor = false;
  b.x = clamp(b.x, 12, WORLD.w - 12);
  b.y = clamp(b.y, 12, WORLD.h - 12);
  // smooth facing (no twitch)
  b.angle += angDiff(b.angle, moveAng !== null ? moveAng : goalAng) * Math.min(1, dt * 7);
  b.vx = moveAng !== null ? Math.cos(moveAng) * sp : 0;    // track velocity (used for predictive aim)
  b.vy = moveAng !== null ? Math.sin(moveAng) * sp : 0;
  b._blocked = moveAng === null;
  return distToGoal;
}

// OPEN any of our team's doors we're walking up to (incl. the player's allied workers) so we're never
// blocked at a closed door; they auto-close shortly after we pass (sweep in updateEnemies).
function botUseDoors(b) {
  const gx = Math.floor(b.x / TILE);
  const gy = Math.floor(b.y / TILE);
  for (let ax = -1; ax <= 1; ax++) {
    for (let ay = -1; ay <= 1; ay++) {
      const cx = gx + ax;
      const cy = gy + ay;
      for (const k of ['V,' + cx + ',' + cy, 'V,' + (cx + 1) + ',' + cy,
                       'H,' + cx + ',' + cy, 'H,' + cx + ',' + (cy + 1)]) {
        const w = game.walls.get(k);
        if (!w || w.type !== 'door' || w.owner !== b.owner) continue;
        const sg = wallSegOf(k, w);
        if (Math.hypot((sg[0] + sg[2]) / 2 - b.x, (sg[1] + sg[3]) / 2 - b.y) < TILE * 1.7) {
          w.open = true;
          w._closeT = (game.t || 0) + 1.0;
        }
      }
    }
  }
}

// PATH-FOLLOW around terrain (lakes/boulders/coast). When the straight line is terrain-clear -> go direct
// (no overhead). Otherwise follow a cached A* path of LOS-clear waypoints -> smooth, no reactive
// wall-hugging jitter, no orbiting big obstacles. Repaths only on goal-change / ~0.8s staleness (repath on
// invalidation, not every frame); transient blockers between waypoints are handled by botMoveTo's local
// sidestep, and a true stall by the anti-stuck watchdog / hard-escape.
function botNavStep(b, tx, ty, sp, dt) {
  if (typeof navLOS !== 'function' || navLOS(b.x, b.y, tx, ty)) {
    b._path = null;
    return botMoveTo(b, tx, ty, sp, dt);
  }
  b._pathT = (b._pathT || 0) - dt;
  const goalMoved = b._pgx === undefined || Math.hypot(tx - b._pgx, ty - b._pgy) > 180;
  if (!b._path || goalMoved || b._pathT <= 0) {
    b._path = (typeof navFindPath === 'function') ? navFindPath(b.x, b.y, tx, ty) : null;
    b._pgx = tx;
    b._pgy = ty;
    b._pathT = 0.8;
    b._pathI = 0;
  }
  // no route -> fall back to local steering + recovery
  if (!b._path || !b._path.length) return botMoveTo(b, tx, ty, sp, dt);
  let i = b._pathI || 0;
  const CS = (typeof NAV !== 'undefined' && NAV) ? NAV.CS : 128;
  // skip ahead to the furthest waypoint already in sight
  while (i < b._path.length - 1 && navLOS(b.x, b.y, b._path[i + 1].x, b._path[i + 1].y)) i++;
  while (i < b._path.length - 1 && Math.hypot(b._path[i].x - b.x, b._path[i].y - b.y) < CS * 0.6) i++;
  b._pathI = i;
  const wp = b._path[i];
  botMoveTo(b, wp.x, wp.y, sp, dt);
  return Math.hypot(tx - b.x, ty - b.y);
}

// Does segment (1->2) touch/enter the axis-aligned rect? (used to detour around our own base)
function segHitsRect(x1, y1, x2, y2, rx0, ry0, rx1, ry1) {
  if ((x1 > rx0 && x1 < rx1 && y1 > ry0 && y1 < ry1) || (x2 > rx0 && x2 < rx1 && y2 > ry0 && y2 < ry1)) return true;
  return segSeg(x1, y1, x2, y2, rx0, ry0, rx1, ry0) || segSeg(x1, y1, x2, y2, rx1, ry0, rx1, ry1) ||
         segSeg(x1, y1, x2, y2, rx1, ry1, rx0, ry1) || segSeg(x1, y1, x2, y2, rx0, ry1, rx0, ry0);
}

// WAYPOINT TRAVEL: decisions are made at PLAN time (goal-change / waypoint reached / ~0.7s staleness) —
// NOT every frame — so a grazing LOS/obstacle flicker can never flip the route and make the unit jitter.
// planTravel picks ONE route mode; botTravel commits to it.
function planTravel(b, tx, ty) {
  // only round our OWN built base (allies/unfounded have none)
  const bb = (!b.ally && !b._unfounded) ? b._bb : null;
  if (bb) {
    // wide berth keeps the round arc clear of the walls
    const margin = TILE * 1.7;
    const ex0 = bb.minx * TILE - margin;
    const ey0 = bb.miny * TILE - margin;
    const ex1 = (bb.maxx + 1) * TILE + margin;
    const ey1 = (bb.maxy + 1) * TILE + margin;
    if (segHitsRect(b.x, b.y, tx, ty, ex0, ey0, ex1, ey1)) {
      // Straight path clips our base -> round it. COMMIT to ONE rotation direction and follow corners IN
      // ORDER until a corner has a clear shot to the goal. (Re-minimizing a single "best" corner every
      // step ping-pongs between the two corners on the goal's side whenever the goal sits level with the
      // base, and the unit circles the base forever — THE loop bug. Walking one committed way always
      // terminates in <= 4 corners.)
      // CW: NW, NE, SE, SW
      const corners = [{ x: ex0, y: ey0 }, { x: ex1, y: ey0 }, { x: ex1, y: ey1 }, { x: ex0, y: ey1 }];
      let startIdx = 0;
      let startDist = 1e18;
      for (let k = 0; k < 4; k++) {    // corner nearest the unit = where we join the arc
        const d = Math.hypot(corners[k].x - b.x, corners[k].y - b.y);
        if (d < startDist) { startDist = d; startIdx = k; }
      }
      const build = (dir) => {
        const seq = [];
        let k = startIdx;
        let px = b.x;
        let py = b.y;
        let len = 0;
        for (let n = 0; n < 4; n++) {
          const c = corners[k];
          seq.push(c);
          len += Math.hypot(c.x - px, c.y - py);
          px = c.x;
          py = c.y;
          if (!segHitsRect(c.x, c.y, tx, ty, ex0, ey0, ex1, ey1)) {
            len += Math.hypot(tx - c.x, ty - c.y);
            break;
          }
          k = (k + dir + 4) % 4;
        }
        return { seq, len };
      };
      const cw = build(1);
      const ccw = build(-1);
      const pick = (cw.len <= ccw.len) ? cw : ccw;    // take the shorter way around
      b._plan = { mode: 'around', cs: pick.seq, i: 0, rx0: ex0, ry0: ey0, rx1: ex1, ry1: ey1 };
      return;
    }
  }
  // terrain (lake/boulder/coast) in the way -> follow a cached A* path of LOS-clear waypoints
  if (typeof navLOS === 'function' && !navLOS(b.x, b.y, tx, ty)) {
    const path = (typeof navFindPath === 'function') ? navFindPath(b.x, b.y, tx, ty) : null;
    if (path && path.length) {
      b._plan = { mode: 'path', path, i: 0 };
      return;
    }
  }
  b._plan = { mode: 'direct' };
}

function botTravel(b, tx, ty, sp, dt) {
  b._planT = (b._planT || 0) - dt;
  const goalMoved = b._pgx === undefined || Math.hypot(tx - b._pgx, ty - b._pgy) > 140;
  // The arc is COMMITTED to its rotation direction -> don't replan mid-stride (re-planning flip-flops the
  // unit between corners = circling). It self-terminates via the clear-LOS early-out below.
  const roundInProgress = b._plan && b._plan.mode === 'around';
  if (goalMoved || !b._plan || (b._planT <= 0 && !roundInProgress)) {    // REPLAN only here — never mid-stride
    planTravel(b, tx, ty);
    b._pgx = tx;
    b._pgy = ty;
    b._planT = 0.7;
  }
  const plan = b._plan;
  if (plan.mode === 'around') {
    if (segHitsRect(b.x, b.y, tx, ty, plan.rx0, plan.ry0, plan.rx1, plan.ry1)) {    // still need to round the base
      let corner = plan.cs[plan.i] || { x: tx, y: ty };
      // reached this corner -> advance (forward only, never back) or, arc exhausted, go direct
      if (Math.hypot(corner.x - b.x, corner.y - b.y) < TILE * 0.8) {
        if (plan.i < plan.cs.length - 1) {
          plan.i++;
          corner = plan.cs[plan.i];
        } else plan.mode = 'direct';
      }
      if (plan.mode === 'around') return botMoveTo(b, corner.x, corner.y, sp, dt);
    } else {
      // CLEAR shot to the goal -> break out of the arc immediately (this is what stops the orbit;
      // the unit never finishes a needless lap)
      plan.mode = 'direct';
    }
  } else if (plan.mode === 'path') {
    let i = plan.i || 0;
    const P = plan.path;
    const CS = (typeof NAV !== 'undefined' && NAV) ? NAV.CS : 128;
    // skip to the furthest visible waypoint (monotonic -> no backward flip)
    while (i < P.length - 1 && navLOS(b.x, b.y, P[i + 1].x, P[i + 1].y)) i++;
    while (i < P.length - 1 && Math.hypot(P[i].x - b.x, P[i].y - b.y) < CS * 0.6) i++;
    plan.i = i;
    if (i >= P.length - 1 && navLOS(b.x, b.y, tx, ty)) plan.mode = 'direct';
  }
  if (plan.mode === 'path') {
    const wp = plan.path[plan.i] || { x: tx, y: ty };
    botMoveTo(b, wp.x, wp.y, sp, dt);
    return Math.hypot(tx - b.x, ty - b.y);
  }
  return botMoveTo(b, tx, ty, sp, dt);
}

function botGoto(b, tx, ty, sp, dt) {
  // UNIFORM travel speed for EVERY unit on foot (overrides the per-call speed) — no unit outruns another
  sp = BOT_SPEED;
  // GOAL LOCK: commit to a travel target for ~0.6s instead of re-picking every frame. The state machine
  // sometimes issues two different targets on alternating frames (e.g. a node vs the door) -> a per-frame
  // goal flip = jitter. (Escapes/threats use their own paths, so this never blocks a real reaction.)
  if ((b._glk = (b._glk || 0) - dt) > 0 && b._glX !== undefined &&
      Math.hypot(b._glX - b.x, b._glY - b.y) > TILE * 0.6) {
    tx = b._glX;
    ty = b._glY;
  } else {
    b._glX = tx;
    b._glY = ty;
    b._glk = 0.6;
  }
  // allied workers / UNFOUNDED units (no base built yet): waypoint travel directly — no phantom
  // door-routing around a base that doesn't exist
  if (b.ally || !b.boxKey || b._unfounded) return botTravel(b, tx, ty, sp, dt);
  const parts = b.boxKey.split(',');
  const gx0 = +parts[0];
  const gy0 = +parts[1];
  // cache the FULL base footprint — bases GROW well past the original 3x3, and routing off the 3x3 makes
  // units circle the EXPANDED base (the at-base idle/jitter root)
  if (!b._bb || (game.t - (b._bbT || 0)) > 0.5) {
    b._bb = botBaseBounds(b.owner);
    b._bbT = game.t || 0;
  }
  const bb = b._bb;
  // FULL footprint (multi-door: every side has a door, so the south row is not special)
  const x0 = (bb ? bb.minx : gx0) * TILE;
  const x1 = ((bb ? bb.maxx : gx0 + 2) + 1) * TILE;
  const y0 = (bb ? bb.miny : gy0) * TILE;
  const y1 = ((bb ? bb.maxy : gy0 + 2) + 1) * TILE;
  const pad = 6;
  const inside = (x, y) => x > x0 - pad && x < x1 + pad && y > y0 - pad && y < y1 + pad;
  // HYSTERESIS on the in/out side: only flip when CLEARLY past the wall line (no door-edge jitter)
  const strongIn = b.x > x0 + 20 && b.x < x1 - 20 && b.y > y0 + 20 && b.y < y1 - 20;
  const strongOut = b.x < x0 - 20 || b.x > x1 + 20 || b.y < y0 - 20 || b.y > y1 + 20;
  if (b._side === undefined) b._side = inside(b.x, b.y);
  if (strongIn) b._side = true;
  else if (strongOut) b._side = false;    // in the deadband near a wall, keep the previous side (no flip-flop)
  const meIn = b._side;
  const tgtIn = inside(tx, ty);
  if (meIn === tgtIn) {    // same side of the wall -> no door transit needed
    if (meIn) return botMoveTo(b, tx, ty, sp, dt);    // both inside: the cupboard is passable to us, walk straight
    // both outside: waypoint travel — rounds our OWN base at a wide berth if it's in the way,
    // else routes around terrain
    b._noDoor = true;
    const res = botTravel(b, tx, ty, sp, dt);
    b._noDoor = false;
    return res;
  }
  // DOOR TRANSIT via the NEAREST door: ENTER the door closest to US, EXIT the door closest to the GOAL ->
  // no rounding the whole base to one fixed door (the orbit/loop cause)
  const door = nearestDoor(b, meIn ? tx : b.x, meIn ? ty : b.y);
  if (!door) {    // no doors yet -> fall back to plain travel
    b._noDoor = true;
    const res = botTravel(b, tx, ty, sp, dt);
    b._noDoor = false;
    return res;
  }
  const lane = (b._lane || 0);
  // per-unit lane ALONG the door (perpendicular to its outward normal) so units don't stack on the exact point
  const laneX = door.x + (door.nx === 0 ? lane : 0);
  const laneY = door.y + (door.ny === 0 ? lane : 0);
  // waypoints just OUTSIDE / INSIDE the chosen door
  const outX = laneX + door.nx * 54;
  const outY = laneY + door.ny * 54;
  const inX = laneX - door.nx * 44;
  const inY = laneY - door.ny * 44;
  if (tgtIn) {    // ENTER: line up outside the door, then COMMIT straight in (no reversing at the threshold)
    const along = (b.x - laneX) * door.nx + (b.y - laneY) * door.ny;   // >0 = outside (along the door normal)
    const perp = Math.abs((b.x - laneX) * (-door.ny) + (b.y - laneY) * door.nx);    // offset from the door's axis
    const aligned = along > 8 && perp < TILE * 0.6;
    // once lined up at the opening, hold the inward push so crossing the wall-line doesn't flip us back out
    if (aligned) b._entIn = 0.9;
    else b._entIn = (b._entIn || 0) - dt;
    if (aligned || b._entIn > 0) return botMoveTo(b, inX, inY, sp, dt);    // push inward through the opening
    // not lined up yet -> round to the outside-door point of the NEAREST door (a short hop, not a lap of the base)
    b._noDoor = true;
    const res = botTravel(b, outX, outY, sp, dt);
    b._noDoor = false;
    return res;
  }
  // EXIT: head straight out the chosen door (the one toward the goal); once outside -> "both outside"
  // skirts to the target
  return botMoveTo(b, outX, outY, sp, dt);
}

function botShoot(b, tx, ty) {
  // a bot in its copter (drawn as the copter) or dead never fires — no invisible shooters
  if (b.gunCd > 0 || b.flying || b.dead) return;
  // guns are DISABLED in the trade safe zone (no shooting in or into it)
  if (typeof inSafeZone === 'function' && (inSafeZone(b.x, b.y) || inSafeZone(tx, ty))) return;
  if (typeof wallBlocksView === 'function' && wallBlocksView(b.x, b.y, tx, ty)) return;   // needs line of sight
  // a solid boulder is in the way -> hold fire (no shooting through the rock)
  if (typeof boulderLine === 'function' && boulderLine(b.x, b.y, tx, ty)) return;
  if (b.gun === 'shotgun' && Math.hypot(tx - b.x, ty - b.y) < 420) {
    // SHOTGUN (bought): 6-pellet spread, brutal up close
    b.gunCd = 0.34;
    for (let p = 0; p < 6; p++) {
      const a = Math.atan2(ty - b.y, tx - b.x) + rand(-0.18, 0.18);
      const x = b.x + Math.cos(a) * 18;
      const y = b.y + Math.sin(a) * 18;
      game.bullets.push({ x, y, px: x, py: y, vx: Math.cos(a) * 1050, vy: Math.sin(a) * 1050,
                          life: 0.95, dmg: 8, from: b.owner, enemy: true });
    }
    burst(b.x + Math.cos(b.angle) * 18, b.y + Math.sin(b.angle) * 18, COL.flash, 4, 110);
    return;
  }
  // everyone STARTS with a pistol (weak — defend vs animals while building); buy a RIFLE/SHOTGUN at the
  // trade zone to progress
  let cd;
  let spread;
  let dmg;
  let speed;
  if (b.gun === 'rifle') {    // rifle (upgraded); laser sight tightens spread
    cd = b.hard ? 0.12 : 0.16;
    spread = b.hard ? 0.02 : 0.055;
    if (b.rifleLaser) spread *= 0.45;
    dmg = b.hard ? 13 : 11;
    speed = 1500;
  } else {    // pistol (start / weak / not yet upgraded)
    cd = 0.30;
    spread = 0.10;
    dmg = 7;
    speed = 1150;
  }
  b.gunCd = cd;
  const ang = Math.atan2(ty - b.y, tx - b.x) + rand(-spread, spread);
  const x = b.x + Math.cos(ang) * 18;
  const y = b.y + Math.sin(ang) * 18;
  game.bullets.push({ x, y, px: x, py: y, vx: Math.cos(ang) * speed, vy: Math.sin(ang) * speed,
                      life: 1.6, dmg, from: b.owner, enemy: true });
  burst(x, y, COL.flash, 2, 90);
}

function botRocketAt(b, tx, ty) {
  // no weapons in the trade safe zone
  if (typeof inSafeZone === 'function' && (inSafeZone(b.x, b.y) || inSafeZone(tx, ty))) return;
  const ang = Math.atan2(ty - b.y, tx - b.x);
  const x = b.x + Math.cos(ang) * 22;
  const y = b.y + Math.sin(ang) * 22;
  game.rockets.push({ x, y, vx: Math.cos(ang) * 560, vy: Math.sin(ang) * 560,
                      life: 2.8, w: WEAPONS.rocket, smoke: 0, from: b.owner });
  burst(x, y, COL.flash, 3, 120);
}

// Single rocket choke point: never fire point-blank (anti-suicide).
function botTryRocket(b, tx, ty, opts) {
  opts = opts || {};
  if (b.rkCd > 0 || b.rockets <= 0) return false;
  if (dist2(b.x, b.y, tx, ty) < ROCKET_MIN * ROCKET_MIN) return false;
  b.rkCd = opts.cd || 2.4;
  b.rockets--;
  botRocketAt(b, tx, ty);
  return true;
}

// One canonical "fight this point": LOS-gated fire + dead-band back-off + timed strafe (no jitter).
function botCombatStep(b, tgt, dt) {
  const dist = Math.hypot(tgt.x - b.x, tgt.y - b.y);
  if (b.hp < b.max * 0.35) botDropFence(b, tgt.x, tgt.y);    // low HP -> drop cover
  let aimX = tgt.x;
  let aimY = tgt.y;
  if (b.hard && (tgt.vx || tgt.vy)) {
    // hard bots LEAD where the target is moving (not where it last fired)
    const bulletSpeed = b.weak ? 1150 : 1500;
    const lead = Math.min(0.7, dist / bulletSpeed);
    aimX = tgt.x + tgt.vx * lead;
    aimY = tgt.y + tgt.vy * lead;
  }
  const los = !(typeof wallBlocksView === 'function' && wallBlocksView(b.x, b.y, tgt.x, tgt.y));
  if (los && dist < 460) {
    botShoot(b, aimX, aimY);
    // hysteresis band 140..180 -> no oscillation at the edge
    b._backoff = dist < 140 ? true : (dist > 180 ? false : b._backoff);
    if (b._backoff) {    // too close -> back off
      botMoveTo(b, b.x + (b.x - tgt.x), b.y + (b.y - tgt.y), 120, dt);
    } else if ((b.regenT || 0) > 0 || (b.retaliateT || 0) > 0) {
      // only DODGE (strafe) while actually taking fire; otherwise HOLD position and shoot
      // (combat strafing is fine — excluded from the loop metric)
      b._strafeT = (b._strafeT || 0) - dt;
      if (b._strafeT <= 0) {
        b._strafe = (b._strafe === 1 ? -1 : 1);
        b._strafeT = STRAFE_FLIP;
      }
      const strafeAng = Math.atan2(tgt.y - b.y, tgt.x - b.x) + b._strafe * Math.PI / 2;
      botMoveTo(b, b.x + Math.cos(strafeAng) * 120, b.y + Math.sin(strafeAng) * 120, 120, dt);
    }
  } else {
    botGoto(b, tgt.x, tgt.y, 170, dt);    // no LOS / far -> close in (via our door)
  }
}

// Shared AI copter physics — accelerate toward heading, drag, cap at the NORMAL cruise speed (matches the
// player; eases off near the target). No constant boost.
function botCopterFly(c, tx, ty, dt, maxv) {
  c.spin = 1;
  c.angle += angDiff(c.angle, Math.atan2(ty - c.y, tx - c.x)) * Math.min(1, dt * 4);
  c.rotor += dt * 46;
  c.vx = c.vx || 0;
  c.vy = c.vy || 0;
  const d = Math.hypot(tx - c.x, ty - c.y);
  const throttle = d > 160 ? 1 : Math.max(0.12, d / 160);    // throttle eases off as we close -> decelerate into the target
  c.vx += Math.cos(c.angle) * COPTER.accel * throttle * dt;
  c.vy += Math.sin(c.angle) * COPTER.accel * throttle * dt;
  const drag = COPTER.drag * dt;
  c.vx -= c.vx * drag;
  c.vy -= c.vy * drag;
  const speed = Math.hypot(c.vx, c.vy);
  const maxSpeed = (maxv || COPTER.speed);
  if (speed > maxSpeed) {
    c.vx = c.vx / speed * maxSpeed;
    c.vy = c.vy / speed * maxSpeed;
  }
  c.x = clamp(c.x + c.vx * dt, COPTER.r, WORLD.w - COPTER.r);
  c.y = clamp(c.y + c.vy * dt, COPTER.r, WORLD.h - COPTER.r);
}

function botFly(b, tx, ty, dt) {
  const c = b.copter;
  if (!b.flying) {
    c.x = b.x;
    c.y = b.y;
    c.vx = 0;
    c.vy = 0;
    b.flying = true;
  }
  botCopterFly(c, tx, ty, dt);
  b.x = c.x;
  b.y = c.y;
}

function botLand(b, dt) {
  const c = b.copter;
  const gx = Math.floor(b.x / TILE);
  const gy = Math.floor(b.y / TILE);
  if (!foundationAt(gx, gy) && !game.deploys.has(gkey(gx, gy)) && !inSafeZone(b.x, b.y)) {
    // land on open ground only
    b.flying = false;
    c.spin = 0;
  } else {
    c.angle += 0.25;
    const step = COPTER.boost * dt;
    c.x = clamp(c.x + Math.cos(c.angle) * step, COPTER.r, WORLD.w - COPTER.r);
    c.y = clamp(c.y + Math.sin(c.angle) * step, COPTER.r, WORLD.h - COPTER.r);
    c.rotor += dt * 46;
    b.x = c.x;
    b.y = c.y;
  }
}

// Fly the team copter toward a point; true when arrived (airborne -> ignores ground collision, never stuck).
function botFlyTo(b, tx, ty, dt, reach) {
  const c = b.copter;
  if (!c || c.destroyed) return true;
  if (!b.flying) {
    c.x = b.x;
    c.y = b.y;
    c.vx = 0;
    c.vy = 0;
    b.flying = true;
    c._flyT = 0;
  }
  c._flyT = (c._flyT || 0) + dt;
  botCopterFly(c, tx, ty, dt);
  b.x = c.x;
  b.y = c.y;
  // ANTI-ORBIT: if we've been flying toward this point too long (circling it on momentum), settle and
  // arrive — a minicopter never gets stuck airborne
  const arrived = Math.hypot(tx - b.x, ty - b.y) < (reach || 44) || c._flyT > 9;
  if (arrived) {
    if (c._flyT > 9) {
      c.x = b.x = clamp(tx, COPTER.r, WORLD.w - COPTER.r);
      c.y = b.y = clamp(ty, COPTER.r, WORLD.h - COPTER.r);
      c.vx = c.vy = 0;
    }
    c._flyT = 0;
  }
  return arrived;
}
