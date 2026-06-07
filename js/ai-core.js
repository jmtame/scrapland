/* SCRAPLAND enemy AI — tuning constants, team/base spawning and founding, side doors, worker hiring.
   Enemy-AI module: references globals from the main game modules (game, player, TILE, ...) at call time. */
"use strict";

const ENEMY_COLS = ['#b85b5b', '#5b8bb8', '#b89b5b', '#7bb85b', '#9b5bb8',
                    '#5bb8a8', '#b8765b', '#8b8b5b', '#b85b9b', '#6b78b8'];
const ENEMY_COUNT = 7;
const ROCKET_MIN = 230;        // never fire a rocket closer than this (anti-suicide; rocket splash R≈96)
const STRAFE_FLIP = 0.9;       // seconds between strafe-direction commits (a per-frame flip reads as jitter)
const BOT_SPEED = 160;         // ONE uniform on-foot travel speed for EVERY unit (no unit outruns another)
const MINICOPTER_COST = 30;    // scrap to buy an EXTRA team minicopter at the trade zone (a team starts with
                               // one on the primary; units can buy more — capped)
// A unit only REACTS to threats within its own viewport (~screen half-width) of its BODY. It still DECIDES
// to do far things (raid/monument/trade/return home) as deliberate goals — but it never reacts to a distant
// event it couldn't see. Localizing reactions kills the "charge a far foe across my own base" jitter.
const REACT_R = 640;

function spawnEnemyBases() {
  const used = [{ x: game.shop.x, y: game.shop.y, r: SAFE_R + 500 }, { x: player.x, y: player.y, r: 700 }];
  for (const m of (game.monuments || [])) {
    used.push({ x: m.x, y: m.y, r: SAFE_R + 320 });    // bases never spawn inside a monument no-build zone
  }
  for (let i = 0; i < ENEMY_COUNT; i++) {
    let bx = 0;
    let by = 0;
    let ok = false;
    for (let t = 0; t < 120 && !ok; t++) {
      bx = rand(1400, WORLD.w - 1400);
      by = rand(1400, WORLD.h - 1400);
      ok = true;
      // the base footprint must sit on solid land, not coast/lake
      if (typeof landFactor === 'function' &&
          (landFactor(bx, by) < 0.12 || (typeof lakeAt === 'function' && lakeAt(bx, by)))) ok = false;
      // keep the whole base footprint + guard ring well clear of water -> units never circle a lake at home
      if (ok && game.lakes) {
        for (const L of game.lakes) {
          if (dist2(bx, by, L.x, L.y) < (L.r + 560) * (L.r + 560)) { ok = false; break; }
        }
      }
      // never start a team ON the railroad tracks (a train would flatten the base)
      if (ok && typeof railDist === 'function' && railDist(bx, by) < 400) ok = false;
      // never start a team ON a dirt road (roads stay clear for the convoy)
      if (ok && typeof pathDist === 'function' && pathDist(bx, by) < 340) ok = false;
      if (ok) {
        for (const u of used) {
          if (dist2(bx, by, u.x, u.y) < u.r * u.r) { ok = false; break; }
        }
      }
    }
    if (!ok) continue;
    used.push({ x: bx, y: by, r: MIN_TC_DIST });
    // teams start as UNITS ONLY at a planned site — they gather, then BUILD the first base (no starting base)
    spawnEnemyTeam(i, bx, by);
  }
}

// Spawn a team's primary + 3 workers UNFOUNDED at a site (their home keys point to where the base WILL
// be once founded).
function spawnEnemyTeam(i, bx, by) {
  const owner = 'e' + i;
  const col = ENEMY_COLS[i % ENEMY_COLS.length];
  const gx0 = Math.floor(bx / TILE);
  const gy0 = Math.floor(by / TILE);
  const tcKey = gkey(gx0 + 1, gy0 + 1);
  const boxKey = tcKey;                       // boxKey aliases the TC key (all loot lives in the cupboard)
  const cx = (gx0 + 1) * TILE + TILE / 2;
  const cy = (gy0 + 1) * TILE + TILE / 2;
  const doorX = (gx0 + 1) * TILE + TILE / 2;
  const doorY = (gy0 + 3) * TILE;
  const doorGy = gy0 + 3;
  const tierRoll = Math.random();
  const hard = tierRoll < 0.25;
  const weak = tierRoll >= 0.75;
  const role = ['raider', 'turtle', 'nomad'][i % 3];
  const shotgun = (Math.random() < 0.3);
  // HARD teams are elite: innate armor (mitigates head/body damage) + better aim + faster siege
  game.enemies.push({
    id: i, owner, col, x: cx, y: cy + 30, hx: cx, hy: cy, hp: 100, max: 100,
    dead: false, eliminated: false, _unfounded: true,
    respawnT: 0, inv: { wood: 120, stone: 30, metal: 10 }, rockets: 0, satchels: 0,
    state: 'gather', angle: 0, gunCd: 0, rkCd: 0, think: 0,
    expandT: rand(3, 9), tx: cx, ty: cy, raid: null, target: null, flying: false,
    tcKey: tcKey, boxKey: boxKey,
    kills: 0, scrap: 0, jack: false, hard, weak, shotgun,
    facemask: (hard ? 1 : 0), bodyArmor: (hard ? 2 : 0), gun: 'pistol', primary: true,
    lastHitBy: null, role, _lane: rand(-10, 10), _hoff: rand(-26, 26),
    doorX: doorX, doorY: doorY, doorGy: doorGy,
    copter: { x: cx - TILE * 4, y: cy, angle: 0, rotor: 0, spin: 0, hp: 160, max: 160, destroyed: false }
  });
  for (let w = 0; w < 3; w++) {
    game.enemies.push({
      id: i, owner, col, worker: true, hard, weak, shotgun,
      facemask: (hard ? 1 : 0), bodyArmor: (hard ? 2 : 0), gun: 'pistol', _unfounded: true,
      x: cx + rand(-46, 46), y: cy + rand(24, 64), hx: cx, hy: cy, hp: 100, max: 100,
      dead: false, eliminated: false,
      respawnT: 0, inv: { wood: 0, stone: 0, metal: 0 }, rockets: 0,
      state: 'gather', angle: 0, gunCd: 0, rkCd: 0, think: rand(0, 1),
      expandT: rand(3, 9), tx: cx, ty: cy, raid: null, target: null, flying: false,
      tcKey: tcKey, boxKey: boxKey,
      kills: 0, scrap: 0, jack: false, lastHitBy: null, role,
      _lane: rand(-12, 12), _hoff: rand(-26, 26),
      doorX: doorX, doorY: doorY, doorGy: doorGy, copter: null
    });
  }
}

function teamPrimary(owner) {
  for (const e of game.enemies) {
    if (e.primary && e.owner === owner && !e.eliminated) return e;
  }
  return null;
}

// A valid spot for a NEW base: on land, off water, outside safe/monument no-build zones, and
// >= MIN_TC_DIST from EVERY existing base (Rust rule).
function siteClear(x, y) {
  if (x < 1400 || y < 1400 || x > WORLD.w - 1400 || y > WORLD.h - 1400) return false;
  if ((typeof onLand === 'function' && !onLand(x, y)) || (typeof lakeAt === 'function' && lakeAt(x, y))) return false;
  // never found a base on/near the railroad tracks (a train would flatten it)
  if (typeof railDist === 'function' && railDist(x, y) < 360) return false;
  // never found a base on a dirt road (roads stay clear for the convoy)
  if (typeof pathDist === 'function' && pathDist(x, y) < 320) return false;
  if (typeof landFactor === 'function' && landFactor(x, y) < 0.12) return false;
  if (game.shop && dist2(x, y, game.shop.x, game.shop.y) < (SAFE_R + 450) * (SAFE_R + 450)) return false;
  if (game.monuments) {
    for (const m of game.monuments) {
      if (dist2(x, y, m.x, m.y) < (SAFE_R + 200) * (SAFE_R + 200)) return false;
    }
  }
  if (game.lakes) {
    for (const L of game.lakes) {
      if (dist2(x, y, L.x, L.y) < (L.r + 560) * (L.r + 560)) return false;
    }
  }
  if (game.boulders) {
    for (const b of game.boulders) {    // keep the base footprint off boulders (solid)
      if (dist2(x, y, b.x, b.y) < (b.r + 300) * (b.r + 300)) return false;
    }
  }
  for (const [k, d] of game.deploys) {
    if (d.type !== 'cupboard') continue;
    const comma = k.indexOf(',');
    const gx = +k.slice(0, comma);
    const gy = +k.slice(comma + 1);
    if (dist2(x, y, gx * TILE + TILE / 2, gy * TILE + TILE / 2) < MIN_TC_DIST * MIN_TC_DIST) return false;
  }
  return true;
}

function teamHasBaseNear(owner, x, y, rad) {
  for (const r of teamBaseRecs(owner)) {
    if (baseRecAlive(r) && dist2(x, y, r.hx, r.hy) < rad * rad) return true;
  }
  return false;
}

// Choose a STRATEGIC site for the team's next base: (1) near a monument, (2) FORWARD toward a far
// enemy (raid base), (3) spread out (survival).
function pickSecondarySite(b) {
  if (game.monuments) {
    for (const m of game.monuments) {
      // a monument with no team base yet -> claim it
      if (teamHasBaseNear(b.owner, m.x, m.y, SAFE_R + 900)) continue;
      for (let k = 0; k < 8; k++) {
        const a = k / 8 * TAU;
        const x = m.x + Math.cos(a) * (SAFE_R + TILE * 5);
        const y = m.y + Math.sin(a) * (SAFE_R + TILE * 5);
        if (siteClear(x, y)) return { x, y, kind: 'monument' };
      }
    }
  }
  const teamState = game._team && game._team[b.owner];
  // FORWARD raid base toward the team's ACTIVE raid target (else the farthest enemy) so forward
  // respawns land near the fight
  const fwd = (teamState && teamState.raidTarget &&
               (typeof baseAlive === 'function' && baseAlive(teamState.raidTarget)))
    ? teamState.raidTarget : botFarthestEnemy(b);
  if (fwd) {
    const a = Math.atan2(fwd.hy - b.hy, fwd.hx - b.hx);
    for (const dd of [1700, 2200, 1300]) {
      const x = b.hx + Math.cos(a) * dd;
      const y = b.hy + Math.sin(a) * dd;
      if (siteClear(x, y)) return { x, y, kind: 'raid-forward' };
    }
  }
  for (let k = 0; k < 10; k++) {    // spread out for survival
    const a = rand(0, TAU);
    const dd = rand(MIN_TC_DIST + 200, MIN_TC_DIST + 1600);
    const x = b.hx + Math.cos(a) * dd;
    const y = b.hy + Math.sin(a) * dd;
    if (siteClear(x, y)) return { x, y, kind: 'survival' };
  }
  return null;
}

// Established teams build EXTRA bases (mobility + survival). Only the FIRST base keeps the one minicopter.
function expandTeamBases(dt) {
  for (const b of game.enemies) {
    if (!b.primary || b.eliminated || b._unfounded) continue;
    const recs = teamBaseRecs(b.owner).filter(baseRecAlive);
    const maxBases = b.hard ? 4 : 3;
    const tc = game.deploys.get(b.tcKey);
    const bank = tc && tc.store ? (tc.store.wood + tc.store.stone + tc.store.metal) : 0;
    const teamState = game._team && game._team[b.owner];
    // FORWARD RAID BASE: the AGGRESSOR commits to a target with no staging near it -> build a forward
    // base ASAP (cheaper + faster than normal expansion). Raiders respawn here (forward respawn) so the
    // FULL-TEAM assault PERSISTS while the defenders are on their 15s respawn -> a real, coordinated
    // raid cracks the base.
    if (teamState && teamState.aggressor && teamState.raidTarget &&
        (typeof baseAlive === 'function' && baseAlive(teamState.raidTarget)) &&
        recs.length < maxBases && bank >= 170 &&
        !teamHasBaseNear(b.owner, teamState.raidTarget.hx, teamState.raidTarget.hy, 2400)) {
      if ((b._fwdT = (b._fwdT || 0) - dt) <= 0) {
        b._fwdT = 10;
        const far = teamState.raidTarget;
        const a = Math.atan2(far.hy - b.hy, far.hx - b.hx);
        let site = null;
        // ~1.4-2.7k px back from the TARGET on our approach side (siteClear keeps the Rust
        // MIN_TC_DIST so it's never on the enemy)
        for (const dd of [1800, 2300, 1400, 2700]) {
          const x = far.hx - Math.cos(a) * dd;
          const y = far.hy - Math.sin(a) * dd;
          if (siteClear(x, y)) { site = { x, y }; break; }
        }
        if (site) {
          const newRec = foundBase(b.owner, site.x, site.y, false);
          newRec.kind = 'raid-forward';
          if (tc && tc.store) {
            let pay = 200;
            for (const r of ['wood', 'stone', 'metal']) {
              const take = Math.min(tc.store[r] || 0, pay);
              tc.store[r] -= take;
              pay -= take;
            }
          }
          addFloat(site.x, site.y - 30, '+raid base', '#ffd0a0');
          continue;
        }
      }
    }
    b._expT = (b._expT || rand(40, 80)) - dt;
    if (b._expT > 0) continue;
    b._expT = rand(50, 90);
    if (recs.length < 1 || recs.length >= maxBases) continue;
    const underRaid = teamState && teamState.attack;
    // need banked resources (cheaper if we're being raided and need a fallback)
    if (bank < 260 && !(underRaid && bank >= 160)) continue;
    const site = pickSecondarySite(b);
    if (!site) continue;
    const newRec = foundBase(b.owner, site.x, site.y, false);
    newRec.kind = site.kind;
    if (tc && tc.store) {
      let pay = 240;
      for (const r of ['wood', 'stone', 'metal']) {
        const take = Math.min(tc.store[r] || 0, pay);
        tc.store[r] -= take;
        pay -= take;
      }
    }
    // staffed naturally by respawns (units spawn at any team base) — no disruptive re-homing of live workers
    addFloat(site.x, site.y - 30, '+' + site.kind + ' base', '#bcd0e0');
  }
}

function botNearestWood(b) {
  let best = null;
  let bd = 2600 * 2600;
  for (const o of game.resources) {
    if (o.amount <= 0 || o.base !== 'wood') continue;
    const d = dist2(b.x, b.y, o.x, o.y);
    if (d < bd) { bd = d; best = o; }
  }
  return best;
}

// The unfounded primary spends gathered material to build the FIRST base at the planned site, then the
// whole team homes to it.
function foundTeamBase(b) {
  const rec = foundBase(b.owner, b.hx, b.hy, true);
  let pay = 220;
  for (const r of ['wood', 'stone', 'metal']) {
    const take = Math.min(b.inv[r] || 0, pay);
    b.inv[r] -= take;
    pay -= take;
  }
  for (const e of game.enemies) {
    if (e.owner !== b.owner) continue;
    e._unfounded = false;
    e.tcKey = rec.tcKey;
    e.boxKey = rec.boxKey;
    e.hx = rec.hx;
    e.hy = rec.hy;
    e.doorX = rec.doorX;
    e.doorY = rec.doorY;
    e.doorGy = rec.doorGy;
  }
  addFloat(rec.hx, rec.hy - 30, 'base founded', '#9ad06a');
}

function eWall(key, type, owner) {
  const def = BUILD[type];
  game.walls.set(key, {
    type, mat: 'wood', hp: def.hp, max: def.hp, open: false,
    lock: type === 'door' ? { by: owner, locked: true, authorized: (owner === OWNER) } : null, owner
  });
}

// Build a fresh 3x3 base (TC + floors + walls + door + turret) at (bx,by) and register it for the team.
function foundBase(owner, bx, by, primary) {
  const gx0 = Math.floor(bx / TILE);
  const gy0 = Math.floor(by / TILE);
  for (let dx = 0; dx < 3; dx++) {
    for (let dy = 0; dy < 3; dy++) {
      game.structures.set(gkey(gx0 + dx, gy0 + dy), { type: 'floor', mat: 'wood', hp: 100, max: 100, owner });
    }
  }
  for (let dx = 0; dx < 3; dx++) {
    eWall('H,' + (gx0 + dx) + ',' + gy0, 'wall', owner);
    if (dx !== 1) eWall('H,' + (gx0 + dx) + ',' + (gy0 + 3), 'wall', owner);
  }
  // south door
  game.walls.set('H,' + (gx0 + 1) + ',' + (gy0 + 3), {
    type: 'door', mat: 'wood', hp: 50, max: 50, open: false,
    lock: { by: owner, locked: true, authorized: (owner === OWNER) }, owner
  });
  for (let dy = 0; dy < 3; dy++) {
    eWall('V,' + gx0 + ',' + (gy0 + dy), 'wall', owner);
    eWall('V,' + (gx0 + 3) + ',' + (gy0 + dy), 'wall', owner);
  }
  const tcKey = gkey(gx0 + 1, gy0 + 1);
  const boxKey = tcKey;        // ALL loot lives in the Tool Cupboard (boxKey aliases the TC)
  game.deploys.set(tcKey, {
    type: 'cupboard', mat: 'wood', hp: 300, max: 300, open: false,
    lock: { by: owner, locked: true, authorized: (owner === OWNER) }, owner, loot: true,
    store: { wood: 200 + randi(20, 70), stone: 0, metal: randi(0, 40), scrap: 0 }
  });
  game.deploys.set(gkey(gx0 + 2, gy0), { type: 'turret', mat: 'wood', hp: 150, max: 150, angle: 0, cd: 0, owner });
  // INNER CORE ring around the Tool Cupboard so the PATH TO THE TC crosses MULTIPLE doors (airlock),
  // not one weak door. The inner door sits on the SAME side as the outer south door -> the owner's path
  // IN to the TC is STRAIGHT (an enter-south-then-zigzag-north layout causes in-base looping); a raider
  // still has to breach a 2nd door.
  const coreGx = gx0 + 1;
  const coreGy = gy0 + 1;
  // inner core door NORTH — bases grow NORTH so units inside approach the TC from the north; they reach
  // it directly (no arc around the inner ring)
  game.walls.set('H,' + coreGx + ',' + coreGy, {
    type: 'door', mat: 'wood', hp: 50, max: 50, open: false,
    lock: { by: owner, locked: true, authorized: (owner === OWNER) }, owner
  });
  // core west + east walls keep the airlock a real 2-layer barrier on the sides
  eWall('V,' + coreGx + ',' + coreGy, 'wall', owner);
  eWall('V,' + (coreGx + 1) + ',' + coreGy, 'wall', owner);
  // inner core door SOUTH (aligned with the south outer door) — N+S inner doors cover the main traffic,
  // E/W stay walled
  game.walls.set('H,' + coreGx + ',' + (coreGy + 1), {
    type: 'door', mat: 'wood', hp: 50, max: 50, open: false,
    lock: { by: owner, locked: true, authorized: (owner === OWNER) }, owner
  });
  const primaryUnit = (typeof teamPrimary === 'function') ? teamPrimary(owner) : null;
  // HARD teams found with METAL walls (4x wood HP) and then HQM-armor them -> a tough fortress fast
  if (primaryUnit && primaryUnit.hard) {
    for (const [k, w] of game.walls) {
      if (w.owner === owner) {
        w.mat = 'metal';
        w.max = tierHp(BUILD[w.type], 'metal');
        w.hp = w.max;
      }
    }
  }
  const cx = (gx0 + 1) * TILE + TILE / 2;
  const cy = (gy0 + 1) * TILE + TILE / 2;
  const rec = {
    owner, tcKey: tcKey, boxKey: boxKey, hx: cx, hy: cy,
    doorX: (gx0 + 1) * TILE + TILE / 2, doorY: (gy0 + 3) * TILE, doorGy: gy0 + 3, primary: !!primary
  };
  if (!game.teamBases) game.teamBases = {};
  (game.teamBases[owner] = game.teamBases[owner] || []).push(rec);
  // MULTI-SIDE DOORS: an outer door on each side so units exit/enter toward their goal via the NEAREST
  // side, instead of rounding the whole base to one south door (the orbit/loop cause)
  ensureSideDoors(owner);
  return rec;
}

// Ensure the CURRENT outer perimeter has a DOOR at the midpoint of each side. Doors KEEP the wall's HP
// (passable to the owner, no weaker to a raider than the wall was) -> units exit/enter toward their goal
// without rounding the base.
function ensureSideDoors(owner) {
  const bb = (typeof botBaseBounds === 'function') ? botBaseBounds(owner) : null;
  if (!bb) return [];
  const midGx = Math.floor((bb.minx + bb.maxx) / 2);
  const midGy = Math.floor((bb.miny + bb.maxy) / 2);
  const sides = [
    { k: 'H,' + midGx + ',' + bb.miny,       x: (midGx + 0.5) * TILE, y: bb.miny * TILE,       nx: 0,  ny: -1 },  // N
    { k: 'H,' + midGx + ',' + (bb.maxy + 1), x: (midGx + 0.5) * TILE, y: (bb.maxy + 1) * TILE, nx: 0,  ny: 1 },   // S
    { k: 'V,' + bb.minx + ',' + midGy,       x: bb.minx * TILE,       y: (midGy + 0.5) * TILE, nx: -1, ny: 0 },   // W
    { k: 'V,' + (bb.maxx + 1) + ',' + midGy, x: (bb.maxx + 1) * TILE, y: (midGy + 0.5) * TILE, nx: 1,  ny: 0 }];  // E
  const doors = [];
  for (const s of sides) {
    const w = game.walls.get(s.k);
    // convert the midpoint perimeter wall -> a door (keep HP); a usable exit on this side
    if (w && w.hp > 0) {
      if (w.type !== 'door') {
        w.type = 'door';
        w.open = false;
        if (!w.lock) w.lock = { by: owner, locked: true, authorized: (owner === OWNER) };
      }
      doors.push(s);
    }
  }
  return doors;
}

// Cache the perimeter doors (recompute ~1.2s) for routing.
function baseDoorsCached(b) {
  if (!b._sd || (game.t - (b._sdT || 0)) > 1.2) {
    b._sd = ensureSideDoors(b.owner);
    b._sdT = game.t || 0;
  }
  return b._sd;
}

// The door nearest the target point; COMMITTED ~0.9s so the choice can't flip-flop as the unit moves
// (that would re-create the orbit).
function nearestDoor(b, tx, ty) {
  const ds = baseDoorsCached(b);
  if (!ds || !ds.length) return null;
  if (b._curDoor && (game.t - (b._curDoorT || 0)) < 0.9) {
    for (const door of ds) {
      if (door.k === b._curDoor.k) return door;
    }
  }
  let best = null;
  let bd = 1e18;
  for (const door of ds) {
    const dSq = dist2(door.x, door.y, tx, ty);
    if (dSq < bd) { bd = dSq; best = door; }
  }
  b._curDoor = best;
  b._curDoorT = game.t || 0;
  return best;
}

function teamBaseRecs(owner) {
  return (game.teamBases && game.teamBases[owner]) || [];
}

function baseRecAlive(r) {
  const tc = game.deploys.get(r.tcKey);
  return !!(tc && tc.type === 'cupboard');
}

function teamAliveBaseCount(owner) {
  let n = 0;
  for (const r of teamBaseRecs(owner)) {
    if (baseRecAlive(r)) n++;
  }
  return n;
}

// Point a unit at its NEAREST still-alive team base.
function rehomeUnit(b) {
  let best = null;
  let bd = 1e18;
  for (const r of teamBaseRecs(b.owner)) {
    if (!baseRecAlive(r)) continue;
    const d = dist2(b.x, b.y, r.hx, r.hy);
    if (d < bd) { bd = d; best = r; }
  }
  if (!best) return false;
  b.tcKey = best.tcKey;
  b.boxKey = best.boxKey;
  b.hx = best.hx;
  b.hy = best.hy;
  b.doorX = best.doorX;
  b.doorY = best.doorY;
  b.doorGy = best.doorGy;
  return true;
}

function buildEnemyBase(i, bx, by) {
  const owner = 'e' + i;
  const col = ENEMY_COLS[i % ENEMY_COLS.length];
  const rec = foundBase(owner, bx, by, true);
  const tierRoll = Math.random();
  const hard = tierRoll < 0.25;      // 25% hard (better aim, aggressive), 25% weak (pistol only), 50% normal
  const weak = tierRoll >= 0.75;
  game.enemies.push({
    id: i, owner, col, x: rec.hx, y: rec.hy + 30, hx: rec.hx, hy: rec.hy, hp: 100, max: 100,
    dead: false, eliminated: false,
    respawnT: 0, inv: { wood: 1000, stone: 250, metal: 100 }, rockets: 0, satchels: 0,
    state: 'gather', angle: 0, gunCd: 0, rkCd: 0, think: 0,
    expandT: rand(3, 9), tx: rec.hx, ty: rec.hy, raid: null, target: null, flying: false,
    tcKey: rec.tcKey, boxKey: rec.boxKey,
    kills: 0, scrap: 0, jack: false, hard, weak, shotgun: (Math.random() < 0.3), gun: 'pistol',
    primary: true, lastHitBy: null, role: ['raider', 'turtle', 'nomad'][i % 3],
    _lane: rand(-10, 10), _hoff: rand(-26, 26),
    doorX: rec.doorX, doorY: rec.doorY, doorGy: rec.doorGy,
    // the team's ONE minicopter, parked well west of the base (clear of unit routing)
    copter: { x: rec.hx - TILE * 4, y: rec.hy, angle: 0, rotor: 0, spin: 0, hp: 160, max: 160, destroyed: false }
  });
}

// A worker: an extra unit sharing its base's owner, home, storage and tier.
function spawnUnit(base) {
  game.enemies.push({
    id: base.id, owner: base.owner, col: base.col, worker: true, ally: base.ally,
    hard: base.hard, weak: base.weak, shotgun: base.shotgun,
    facemask: (base.facemask || 0), bodyArmor: (base.bodyArmor || 0), gun: (base.gun || 'pistol'),
    x: base.hx + rand(-46, 46), y: base.hy + rand(24, 64), hx: base.hx, hy: base.hy, hp: 100, max: 100,
    dead: false, eliminated: false,
    respawnT: 0, inv: { wood: 0, stone: 0, metal: 0 }, rockets: 0,
    state: 'gather', angle: 0, gunCd: 0, rkCd: 0, think: rand(0, 1),
    expandT: rand(3, 9), tx: base.hx, ty: base.hy, raid: null, target: null, flying: false,
    tcKey: base.tcKey, boxKey: base.boxKey,
    kills: 0, scrap: 0, jack: false, lastHitBy: null, role: base.role,
    _lane: rand(-12, 12), _hoff: rand(-26, 26),
    doorX: base.doorX, doorY: base.doorY, doorGy: base.doorGy,
    copter: null     // ONE copter per team -> only the primary holds it; workers have none
  });
}

function spawnWorkers() {    // each AI starts with 3 workers
  const bases = game.enemies.filter(b => b.primary);
  for (const base of bases) {
    for (let w = 0; w < 3; w++) spawnUnit(base);
  }
}

const WORKER_COST = 50;    // scrap to hire an extra worker (a fast way to grow the economy — but capped,
                           // so teams don't just max worker count)

function teamUnitCount(owner) {
  let n = 0;
  for (const e of game.enemies) {
    if (e.owner === owner && !e.eliminated) n++;
  }
  return n;
}

// Minicopters a team currently fields (start: 1 on the primary; bought extras add to this, capped).
function teamCopterCount(owner) {
  let n = 0;
  for (const e of game.enemies) {
    if (e.owner === owner && !e.eliminated && e.copter && !e.copter.destroyed) n++;
  }
  return n;
}

// Spend banked scrap to hire ONE more worker; capped per team so it stays balanced.
function botHireWorker(b) {
  // total team units (1 primary + workers): hard teams up to 15 workers, everyone else 7.
  // Capped so teams don't cluster/camp at base.
  const cap = b.hard ? 16 : 8;
  if (!b.primary || teamUnitCount(b.owner) >= cap) return false;
  const tc = game.deploys.get(b.tcKey);
  const tcScrap = (tc && tc.store) ? (tc.store.scrap || 0) : 0;
  const have = (b.scrap || 0) + tcScrap;
  if (have < WORKER_COST) return false;
  let pay = WORKER_COST;
  const fromCarried = Math.min(b.scrap || 0, pay);
  b.scrap -= fromCarried;
  pay -= fromCarried;
  if (pay > 0 && tc && tc.store) tc.store.scrap = Math.max(0, tcScrap - pay);
  spawnUnit(b);
  if (typeof addFloat === 'function') addFloat(b.hx, b.hy - 30, '+worker hired', '#bcd0e0');
  return true;
}

// A hired ally that fights for the player (gathers into the player's stockpile, defends, raids enemies).
function spawnPlayerWorker() {
  const pb = (typeof playerBaseTarget === 'function') ? playerBaseTarget() : null;
  const hx = pb ? pb.hx : player.x;
  const hy = pb ? pb.hy : player.y;
  const key = pb ? pb.boxKey : gkey(Math.floor(hx / TILE), Math.floor(hy / TILE));
  // spawn at the trade zone
  const sx = (game.shop ? game.shop.x : hx) + rand(-60, 60);
  const sy = (game.shop ? game.shop.y + (game.shop.r || 120) + 40 : hy);
  game.enemies.push({
    id: -1, owner: OWNER, ally: true, worker: true, col: '#7ec850',
    x: sx, y: sy, hx, hy, hp: 100, max: 100, dead: false, eliminated: false,
    respawnT: 0, inv: { wood: 0, stone: 0, metal: 0 }, rockets: 0,
    state: 'gather', angle: 0, gunCd: 0, rkCd: 0, think: rand(0, 1),
    expandT: 1e9, tx: hx, ty: hy, raid: null, target: null, flying: false, tcKey: key, boxKey: key,
    kills: 0, scrap: 0, jack: false, lastHitBy: null, role: 'raider', raidUrge: rand(12, 24), gun: 'rifle',
    doorX: hx, doorY: hy + TILE, doorGy: Math.floor(hy / TILE) + 1,
    // the player's team shares ONE minicopter (game.copter) — allies don't each get their own.
    // Allies are paid soldiers -> rifle.
    copter: null
  });
  return true;
}
