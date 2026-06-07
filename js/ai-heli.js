/* SCRAPLAND enemy AI — team transport helicopter (buying, boarding, ferrying raid squads) plus raid
   actions: breach targeting, path turrets, escape door-cutting, fences, grenades. Uses main-game globals. */
"use strict";

function teamTransport(owner) {
  if (!game.transports) return null;
  for (const t of game.transports) {
    if (t.owner === owner && !t.destroyed) return t;
  }
  return null;
}

// One transport per team, bought at the shop.
function buyTransport(b) {
  if (!game.transports || teamTransport(b.owner) || (b.scrap || 0) < TRANSPORT.cost) return false;
  b.scrap -= TRANSPORT.cost;
  const sx = game.shop ? game.shop.x : b.hx;
  const sy = game.shop ? (game.shop.y + (game.shop.r || 120) + 90) : b.hy;
  game.transports.push({
    owner: b.owner, x: sx, y: sy, angle: 0, rotor: 0, hp: TRANSPORT.hp, max: TRANSPORT.hp,
    destroyed: false, vx: 0, vy: 0, state: 'idle', destX: b.hx, destY: b.hy,
    homeX: b.hx, homeY: b.hy, riders: [], boardT: 0
  });
  addFloat(sx, sy - 44, '+transport heli', '#bfe3ff');
  return true;
}

function transportPhysics(tr, tx, ty, dt) {
  tr.angle += angDiff(tr.angle, Math.atan2(ty - tr.y, tx - tr.x)) * Math.min(1, dt * 3);
  tr.vx = tr.vx || 0;
  tr.vy = tr.vy || 0;
  const d = Math.hypot(tx - tr.x, ty - tr.y);
  const throttle = d > 220 ? 1 : Math.max(0.08, d / 220);
  tr.vx += Math.cos(tr.angle) * TRANSPORT.accel * throttle * dt;
  tr.vy += Math.sin(tr.angle) * TRANSPORT.accel * throttle * dt;
  const drag = TRANSPORT.drag * dt;
  tr.vx -= tr.vx * drag;
  tr.vy -= tr.vy * drag;
  const speed = Math.hypot(tr.vx, tr.vy);
  if (speed > TRANSPORT.speed) {
    tr.vx = tr.vx / speed * TRANSPORT.speed;
    tr.vy = tr.vy / speed * TRANSPORT.speed;
  }
  tr.x = clamp(tr.x + tr.vx * dt, TRANSPORT.r, WORLD.w - TRANSPORT.r);
  tr.y = clamp(tr.y + tr.vy * dt, TRANSPORT.r, WORLD.h - TRANSPORT.r);
  return d;
}

function transportBoard(b, tr) {
  if (tr.riders.length >= TRANSPORT.seats || tr.state === 'fly' || tr.state === 'unload') return false;
  b._aboard = tr;
  tr.riders.push(b);
  b.flying = true;
  b._wasRaid = false;
  b.state = 'raid';
  return true;
}

function updateTransports(dt) {
  if (!game.transports) return;
  for (let i = game.transports.length - 1; i >= 0; i--) {
    const tr = game.transports[i];
    if (tr.destroyed || tr.hp <= 0) {
      // SHOT DOWN -> explosion + 15s fire/smoke; every rider DIES and their loot falls
      if (typeof vehicleWreck === 'function') vehicleWreck(tr.x, tr.y);
      for (const r of tr.riders) {
        if (!r) continue;
        r._aboard = null;
        r.flying = false;
        r.x = tr.x + rand(-30, 30);
        r.y = tr.y + rand(-30, 30);
        if (typeof botDie === 'function' && !r.dead && !r.eliminated) botDie(r);
      }
      game.transports.splice(i, 1);
      continue;
    }
    tr.riders = tr.riders.filter(r => r && !r.dead && !r.eliminated && r._aboard === tr);
    tr.stateT = (tr.stateT || 0) + dt;
    // a transport NEVER flies on its own — it only moves with an occupant aboard to pilot it
    const occupied = tr.riders.length >= 1;
    // rotor idles when parked & empty
    if (occupied || tr.state === 'fly' || tr.state === 'unload' || tr.state === 'return') tr.rotor += dt * 40;
    let raidTarget = null;
    for (const r of tr.riders) {
      if (r.raid && baseAlive(r.raid)) { raidTarget = r.raid; break; }
    }
    if (tr.state === 'idle' || tr.state === 'board') {
      if (occupied && raidTarget) {
        tr.boardT = (tr.boardT || 0) + dt;
        if (tr.riders.length >= 2 || tr.boardT > 5) {
          const key = raidTarget.tcKey || raidTarget.boxKey;
          const parts = key.split(',').map(Number);
          const tx = parts[0] * TILE + TILE / 2;
          const ty = parts[1] * TILE + TILE / 2;
          const a = Math.atan2(ty - tr.y, tx - tr.x);
          tr.destX = tx - Math.cos(a) * 620;
          tr.destY = ty - Math.sin(a) * 620;
          tr.state = 'fly';
          tr.stateT = 0;
          tr.boardT = 0;
        }
      } else if (occupied) {    // riders aboard but no target yet -> hold near base (piloted)
        tr.boardT = 0;
        transportPhysics(tr, tr.homeX - TILE * 5, tr.homeY, dt);
      } else {    // EMPTY -> grounded; it does not hover or fly on its own
        tr.boardT = 0;
        tr.vx = 0;
        tr.vy = 0;
      }
      for (const r of tr.riders) {
        r.x = tr.x;
        r.y = tr.y;
        r.flying = true;
      }
    } else if (tr.state === 'fly') {
      const d = transportPhysics(tr, tr.destX, tr.destY, dt);
      for (const r of tr.riders) {
        r.x = tr.x;
        r.y = tr.y;
        r.flying = true;
      }
      // ANTI-ORBIT timeout: never circle the drop point forever
      if (d < 200 || !raidTarget || tr.stateT > 16) {
        tr.state = 'unload';
        tr.stateT = 0;
      }
    } else if (tr.state === 'unload') {
      for (const r of tr.riders) {    // drop each rider onto OPEN ground near the heli (not water / a wall)
        r._aboard = null;
        r.flying = false;
        let rx = tr.x + rand(-60, 60);
        let ry = tr.y + rand(-60, 60);
        for (let k = 0; k < 14 && (typeof blocked === 'function' && blocked(rx, ry, 12)); k++) {
          const a = rand(0, TAU);
          const rr = rand(40, 150);
          rx = tr.x + Math.cos(a) * rr;
          ry = tr.y + Math.sin(a) * rr;
        }
        r.x = clamp(rx, 12, WORLD.w - 12);
        r.y = clamp(ry, 12, WORLD.h - 12);
      }
      tr.riders.length = 0;
      tr.state = 'return';
      tr.stateT = 0;
    } else if (tr.state === 'return') {    // anti-orbit timeout on the way home too
      const d = transportPhysics(tr, tr.homeX - TILE * 5, tr.homeY, dt);
      if (d < 160 || tr.stateT > 16) {
        tr.state = 'idle';
        tr.stateT = 0;
      }
    }
  }
}

function breachIfBlocked(b, tgt) {
  // prefer the target's door (1 rocket) — fastest way in
  let pick = null;
  let bd = 240 * 240;
  for (const [k, w] of game.walls) {
    if (w.owner !== tgt.owner) continue;
    const sg = wallSegOf(k, w);
    const mx = (sg[0] + sg[2]) / 2;
    const my = (sg[1] + sg[3]) / 2;
    const dd = dist2(b.x, b.y, mx, my);
    if (dd < bd && (!pick || w.type === 'door')) {
      if (!pick || w.type === 'door') {
        pick = { mx, my, door: w.type === 'door' };
        if (w.type === 'door') bd = dd;
      }
    }
  }
  if (pick && b.rkCd <= 0) {
    const dd = dist2(b.x, b.y, pick.mx, pick.my);
    if (b.rockets > 0 && dd >= ROCKET_MIN * ROCKET_MIN) {
      // rocket the door FROM RANGE (never point-blank)
      botTryRocket(b, pick.mx, pick.my, { cd: 2.2 });
    } else if (dd < 90 * 90 && (b.satchels || 0) > 0) {
      // up close -> plant a satchel (only if we BOUGHT some)
      b.satchels--;
      b.rkCd = 4.5;
      game.satchels.push({ x: pick.mx, y: pick.my, t: 3.0, from: b.owner });
      addFloat(pick.mx, pick.my - 16, 'satchel!', '#e08a36');
    }
  }
}

// TEAM-COORDINATED CHEAPEST PATH: the whole squad focuses ONE piece so rockets punch a SINGLE LANE to the
// TC instead of scattering across the perimeter (a real raid concentrates fire). The piece = the standing
// wall/DOOR minimizing dist(squad->piece)+dist(piece->TC) — i.e. the next obstacle ON the lane from the
// squad to the cupboard — doors preferred (cheapest). Cached on the team state (recomputed when that piece
// falls or ~every 1.5s) so every rocketer hits the same piece. As lane pieces fall the focus moves inward
// -> toward the TC.
function botBreachAim(b, tgt) {
  const teamState = game._team && game._team[b.owner];
  {
    // LANE OPEN? if ANY raider on this target already has a clear line to the cupboard, STOP breaching
    // walls and go for the TC (push in & siege) — otherwise raiders rocket walls forever while breaches
    // reseal (the treadmill: walls destroyed but no TC kill)
    const key = tgt.tcKey || tgt.boxKey;
    const comma = key.indexOf(',');
    const tcX = (+key.slice(0, comma) + 0.5) * TILE;
    const tcY = (+key.slice(comma + 1) + 0.5) * TILE;
    if (typeof wallBlocksView === 'function') {
      for (const u of game.enemies) {
        if (u.owner === b.owner && !u.dead && !u.eliminated && u.raid === tgt &&
            Math.hypot(u.x - tcX, u.y - tcY) < 760 && !wallBlocksView(u.x, u.y, tcX, tcY)) {
          if (teamState) teamState.breachKey = null;
          return null;
        }
      }
    }
  }
  if (teamState) {
    const cached = teamState.breachKey && game.walls.get(teamState.breachKey);
    if (cached && cached.owner === tgt.owner && cached.hp > 0 && !(cached.type === 'door' && cached.open) &&
        (game.t || 0) < (teamState.breachT || 0)) {
      const sg = wallSegOf(teamState.breachKey, cached);
      return { x: (sg[0] + sg[2]) / 2, y: (sg[1] + sg[3]) / 2, door: cached.type === 'door' };
    }
    const key = tgt.tcKey || tgt.boxKey;
    const comma = key.indexOf(',');
    const tcX = (+key.slice(0, comma) + 0.5) * TILE;
    const tcY = (+key.slice(comma + 1) + 0.5) * TILE;
    let sumX = 0;
    let sumY = 0;
    let count = 0;
    for (const u of game.enemies) {
      if (u.owner === b.owner && !u.dead && !u.eliminated && u.raid === tgt) {
        sumX += u.x;
        sumY += u.y;
        count++;
      }
    }
    const squadX = count ? sumX / count : b.x;    // squad centroid (the approach point)
    const squadY = count ? sumY / count : b.y;
    let bestK = null;
    let bestScore = 1e18;
    let bestSeg = null;
    for (const [k, w] of game.walls) {
      if (w.owner !== tgt.owner || w.hp <= 0) continue;
      if (w.type === 'door' && w.open) continue;
      const sg = wallSegOf(k, w);
      const mx = (sg[0] + sg[2]) / 2;
      const my = (sg[1] + sg[3]) / 2;
      // minimized ALONG the squad->TC line; doors cheaper
      const score = (Math.hypot(squadX - mx, squadY - my) + Math.hypot(mx - tcX, my - tcY)) *
                    (w.type === 'door' ? 0.6 : 1);
      if (score < bestScore) {
        bestScore = score;
        bestK = k;
        bestSeg = { x: mx, y: my, door: w.type === 'door' };
      }
    }
    teamState.breachKey = bestK;
    teamState.breachT = (game.t || 0) + 1.5;
    if (bestSeg) return bestSeg;
  }
  // fallback (no team state): nearest standing piece
  let pick = null;
  let pickScore = 1e18;
  for (const [k, w] of game.walls) {
    if (w.owner !== tgt.owner || w.hp <= 0) continue;
    if (w.type === 'door' && w.open) continue;
    const sg = wallSegOf(k, w);
    const mx = (sg[0] + sg[2]) / 2;
    const my = (sg[1] + sg[3]) / 2;
    const score = dist2(b.x, b.y, mx, my) * (w.type === 'door' ? 0.4 : 1);
    if (score < pickScore) {
      pickScore = score;
      pick = { x: mx, y: my, door: w.type === 'door' };
    }
  }
  return pick;
}

// A target turret that can shoot a raider on the way to the TC -> clear ONLY these (not every turret —
// that's inefficient). Nearest such turret within its own range of us.
function botPathTurret(b, tgt) {
  let pick = null;
  let bd = 1e18;
  for (const [k, d] of game.deploys) {
    if (d.type !== 'turret' || d.owner !== tgt.owner || d.hp <= 0) continue;
    const comma = k.indexOf(',');
    const tx = (+k.slice(0, comma) + 0.5) * TILE;
    const ty = (+k.slice(comma + 1) + 0.5) * TILE;
    const range = (typeof TTIER !== 'undefined' && TTIER[d.tier || 1]) ? TTIER[d.tier || 1].range : 340;
    const dd = dist2(b.x, b.y, tx, ty);
    if (dd < (range + 60) * (range + 60) && dd < bd) {    // only turrets whose range covers us right now
      bd = dd;
      pick = { x: tx, y: ty, k };
    }
  }
  return pick;
}

// Boxed in -> CUT A LOCKED DOOR through one blocking own wall: we can open & pass it (escape) but it stays
// a sealed, defended opening (no hole, no wall-phasing) — remove a wall to get out, then it reseals.
function botFreeWall(b) {
  if (b.ally) return false;
  const gx = Math.floor(b.x / TILE);
  const gy = Math.floor(b.y / TILE);
  let best = null;
  let bestDx = 0;
  let bestDy = 0;
  let bestScore = -1e18;
  for (const [k, dx, dy] of [['V,' + gx + ',' + gy, -1, 0], ['V,' + (gx + 1) + ',' + gy, 1, 0],
                             ['H,' + gx + ',' + gy, 0, -1], ['H,' + gx + ',' + (gy + 1), 0, 1]]) {
    const w = game.walls.get(k);
    if (!w || w.owner !== b.owner || w.type === 'door') continue;
    // prefer cutting toward OPEN ground (a real way out), then toward the south (the base's main door side)
    const neighborFloor = foundationAt(gx + dx, gy + dy);
    const score = (neighborFloor ? 0 : 60) + (dy > 0 ? 12 : 0) + rand(0, 2);
    if (score > bestScore) {
      bestScore = score;
      best = k;
      bestDx = dx;
      bestDy = dy;
    }
  }
  if (!best) return false;
  const w = game.walls.get(best);
  w.type = 'door';
  w.open = true;
  w._closeT = (game.t || 0) + 1.2;
  w.lock = { by: b.owner };
  w.hp = Math.max(w.hp || 0, 50);
  w.max = Math.max(w.max || 0, 50);
  b._escAng = Math.atan2(bestDy, bestDx);    // head out through the new doorway
  const sg = wallSegOf(best, w);
  addFloat((sg[0] + sg[2]) / 2, (sg[1] + sg[3]) / 2, 'cut a door', '#9ad06a');
  return true;
}

// Low-HP cover: a wood fence between us and the threat.
function botDropFence(b, tx, ty) {
  if ((b.fenceCd || 0) > 0 || !botHas(b, 'wood', 10)) return;
  const a = Math.atan2(ty - b.y, tx - b.x);
  const fx = b.x + Math.cos(a) * 30;
  const fy = b.y + Math.sin(a) * 30;
  if (typeof placeFence !== 'function') return;
  // don't try to drop a fence on a foundation (it'd be rejected) — don't waste the wood
  if (typeof foundationAt === 'function' && foundationAt(Math.floor(fx / TILE), Math.floor(fy / TILE))) return;
  botPay(b, 'wood', 10);
  if (placeFence(fx, fy, a + Math.PI / 2, b.owner)) {
    b.fenceCd = 9;
    addFloat(b.x, b.y - 22, '+fence', '#c79a5e');
  }
}

function botMaybeGrenade(b, tgt) {
  if ((b.grenades || 0) <= 0 || (b.gnCd || 0) > 0 || typeof GRENADE === 'undefined' || !game.grenades) return;
  const d = Math.hypot(tgt.x - b.x, tgt.y - b.y);
  if (d < 150 || d > 380) return;    // mid-range sweet spot: not point-blank (self-splash), within lob reach
  // GRENADES ARE FOR HOSTILE PLAYERS/BOTS — never waste them on animals
  let hitsUnit = false;
  if (b.owner !== OWNER && !player.dead && !player.inCopter && !game.ghost &&
      Math.hypot(player.x - tgt.x, player.y - tgt.y) < 70) hitsUnit = true;
  if (!hitsUnit) {
    for (const o of game.enemies) {
      if (o === b || o.dead || o.eliminated || o.flying || o.owner === b.owner) continue;
      if (Math.hypot(o.x - tgt.x, o.y - tgt.y) < 70) { hitsUnit = true; break; }
    }
  }
  if (!hitsUnit) return;    // the threat here is an animal (or nothing) -> hold the grenade
  b.grenades--;
  b.gnCd = rand(5, 8);
  const a = Math.atan2(tgt.y - b.y, tgt.x - b.x);
  const reach = Math.min(420, d);
  const speed = reach * 5.4;
  game.grenades.push({
    x: b.x + Math.cos(a) * 22, y: b.y + Math.sin(a) * 22,
    vx: Math.cos(a) * speed, vy: Math.sin(a) * speed, t: GRENADE.fuse, from: b.owner, bob: 0
  });
  addFloat(b.x, b.y - 22, 'grenade!', '#ffd27a');
}
