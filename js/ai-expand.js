/* SCRAPLAND enemy AI — base expansion: spending gathered resources to grow & harden the base (floors,
   turrets, wall/floor tiers, sealing & repair, deposits). Uses main-game globals at call time. */
"use strict";

function botBaseBounds(owner) {
  let minx = 1e9;
  let miny = 1e9;
  let maxx = -1e9;
  let maxy = -1e9;
  let any = false;
  for (const [k, s] of game.structures) {
    if (s.owner !== owner || (s.type !== 'floor' && s.type !== 'trifloor')) continue;
    const [gx, gy] = k.split(',').map(Number);
    any = true;
    if (gx < minx) minx = gx;
    if (gy < miny) miny = gy;
    if (gx > maxx) maxx = gx;
    if (gy > maxy) maxy = gy;
  }
  return any ? { minx, miny, maxx, maxy } : null;
}

// Carried inventory + the Tool Cupboard (the team's ONE store).
function botStores(b) {
  const out = [b.inv];
  const tc = game.deploys.get(b.tcKey);
  if (tc && tc.store) out.push(tc.store);
  return out;
}

function botHas(b, res, amt) {
  let total = 0;
  for (const s of botStores(b)) total += (s[res] || 0);
  return total >= amt;
}

function botPay(b, res, amt) {
  for (const s of botStores(b)) {
    if (amt <= 0) break;
    const take = Math.min(s[res] || 0, amt);
    s[res] -= take;
    amt -= take;
  }
}

function botBaseFloors(owner) {
  let n = 0;
  for (const [, s] of game.structures) {
    if (s.owner === owner && (s.type === 'floor' || s.type === 'trifloor')) n++;
  }
  return n;
}

function botOwnerTurrets(owner) {
  let n = 0;
  for (const [, s] of game.deploys) {
    if (s.owner === owner && s.type === 'turret') n++;
  }
  return n;
}

function botEstablished(b) {    // built up enough to go raid
  return botBaseFloors(b.owner) >= 8 && botOwnerTurrets(b.owner) >= 1;
}

// Would adding this wall box a floored cell in with no usable exit? (walls AND solid turrets/boxes both
// block an exit)
function wallWouldTrap(key) {
  const parts = key.split(',');
  const axis = parts[0];
  const kx = +parts[1];
  const ky = +parts[2];
  const cells = axis === 'V' ? [[kx - 1, ky], [kx, ky]] : [[kx, ky - 1], [kx, ky]];
  for (const [gx, gy] of cells) {
    if (!game.structures.has(gkey(gx, gy))) continue;
    const edges = [['V,' + gx + ',' + gy, gx - 1, gy], ['V,' + (gx + 1) + ',' + gy, gx + 1, gy],
                   ['H,' + gx + ',' + gy, gx, gy - 1], ['H,' + gx + ',' + (gy + 1), gx, gy + 1]];
    let blockedEdges = 0;
    let hasDoor = false;
    for (const [e, nx, ny] of edges) {
      if (e === key) { blockedEdges++; continue; }
      const w = game.walls.get(e);
      if (w) {
        blockedEdges++;
        if (w.type === 'door') hasDoor = true;
        continue;
      }
      // an exit that only leads into a solid turret/box is no exit
      const dep = game.deploys.get(gkey(nx, ny));
      if (dep && dep.type !== 'cupboard') blockedEdges++;
    }
    if (blockedEdges >= 4 && !hasDoor) {
      const cx = gx * TILE + TILE / 2;
      const cy = gy * TILE + TILE / 2;
      // only allow full enclosure if a player is inside
      const playerInside = !player.dead && Math.abs(player.x - cx) < TILE / 2 && Math.abs(player.y - cy) < TILE / 2;
      if (!playerInside) return true;
    }
  }
  return false;
}

// Would dropping a solid deploy on (gx,gy) leave an adjacent own floor with no open exit?
function deployWouldTrap(gx, gy) {
  for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
    const nx = gx + dx;
    const ny = gy + dy;
    if (!foundationAt(nx, ny)) continue;
    const edges = [['V,' + nx + ',' + ny, nx - 1, ny], ['V,' + (nx + 1) + ',' + ny, nx + 1, ny],
                   ['H,' + nx + ',' + ny, nx, ny - 1], ['H,' + nx + ',' + (ny + 1), nx, ny + 1]];
    let openEdges = 0;
    for (const [e, ex, ey] of edges) {
      const w = game.walls.get(e);
      if (w && w.type !== 'door') continue;                  // walled edge -> closed
      if (ex === gx && ey === gy) continue;                  // this edge would open into the NEW deploy -> closed
      const dep = game.deploys.get(gkey(ex, ey));
      if (dep && dep.type !== 'cupboard') continue;          // opens into an existing solid deploy -> closed
      openEdges++;
    }
    if (openEdges === 0) return true;
  }
  return false;
}

function botAddFloor(b) {
  if (!botHas(b, 'wood', 40)) return false;
  const bb = botBaseBounds(b.owner);
  if (!bb) return false;
  const cand = [];
  for (const [k, s] of game.structures) {
    if (s.owner !== b.owner || (s.type !== 'floor' && s.type !== 'trifloor')) continue;
    const [gx, gy] = k.split(',').map(Number);
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const nx = gx + dx;
      const ny = gy + dy;
      const nk = gkey(nx, ny);
      if (game.structures.has(nk) || game.deploys.has(nk)) continue;
      if (typeof copterAtCell === 'function' && copterAtCell(nx, ny)) continue;   // no foundation on a minicopter
      // base may grow up to 10x10
      if ((Math.max(bb.maxx, nx) - Math.min(bb.minx, nx) + 1) > 10 ||
          (Math.max(bb.maxy, ny) - Math.min(bb.miny, ny) + 1) > 10) continue;
      if (b.doorGy !== undefined && ny >= b.doorGy) continue;    // never wall off the door side
      const cx = nx * TILE + TILE / 2;
      const cy = ny * TILE + TILE / 2;
      if (inSafeZone(cx, cy) || (typeof inMonZone === 'function' && inMonZone(cx, cy))) continue;
      // never expand the base onto water/ocean (would strand units against it)
      if ((typeof lakeAt === 'function' && lakeAt(cx, cy)) ||
          (typeof onLand === 'function' && !onLand(cx, cy))) continue;
      if (typeof boulderAt === 'function' && boulderAt(cx, cy)) continue;    // never build on a boulder (solid)
      // can't lay a foundation on top of an animal
      if (game.animals && game.animals.some(a => a.hp > 0 &&
          Math.floor(a.x / TILE) === nx && Math.floor(a.y / TILE) === ny)) continue;
      cand.push({ nx, ny, nk });
    }
  }
  if (!cand.length) return false;
  const cell = cand[randi(0, cand.length - 1)];
  botPay(b, 'wood', 40);
  game.structures.set(cell.nk, { type: 'floor', mat: 'wood', hp: 100, max: 100, owner: b.owner });
  const wkeys = [];
  if (!game.structures.has(gkey(cell.nx, cell.ny - 1))) wkeys.push('H,' + cell.nx + ',' + cell.ny);
  if (!game.structures.has(gkey(cell.nx, cell.ny + 1))) wkeys.push('H,' + cell.nx + ',' + (cell.ny + 1));
  if (!game.structures.has(gkey(cell.nx - 1, cell.ny))) wkeys.push('V,' + cell.nx + ',' + cell.ny);
  if (!game.structures.has(gkey(cell.nx + 1, cell.ny))) wkeys.push('V,' + (cell.nx + 1) + ',' + cell.ny);
  for (const wk of wkeys) {
    if (!wallWouldTrap(wk)) eWall(wk, 'wall', b.owner);    // never box a cell in on all sides (anti-trap)
  }
  addFloat(cell.nx * TILE + TILE / 2, cell.ny * TILE + TILE / 2 - 10, '+room', '#9ad06a');
  ensureSideDoors(b.owner);    // keep a door on each side of the GROWN perimeter
  return true;
}

// Turrets go on the EXTERIOR perimeter: clear LOS to raiders/animals (interior turrets are blind behind
// their own walls), and they don't clog the inside.
function botAddTurret(b) {
  if (!botHas(b, 'metal', 30) || !botHas(b, 'wood', 40)) return false;
  const bb = botBaseBounds(b.owner);
  if (!bb) return false;
  const doorGx = Math.floor((b.doorX !== undefined ? b.doorX : b.hx) / TILE);
  const cand = [];
  for (let nx = bb.minx - 1; nx <= bb.maxx + 1; nx++) {
    for (let ny = bb.miny - 1; ny <= bb.maxy + 1; ny++) {
      const nk = gkey(nx, ny);
      if (game.structures.has(nk) || game.deploys.has(nk)) continue;    // an empty ground cell, not a floor/deploy
      let adj = false;
      for (let ax = -1; ax <= 1 && !adj; ax++) {
        for (let ay = -1; ay <= 1 && !adj; ay++) {
          const s = game.structures.get(gkey(nx + ax, ny + ay));
          if (s && s.owner === b.owner && (s.type === 'floor' || s.type === 'trifloor')) adj = true;
        }
      }
      if (!adj) continue;    // must hug the base wall
      // keep the south door lane clear so units can get out
      if (b.doorGy !== undefined && ny >= b.doorGy && Math.abs(nx - doorGx) <= 1) continue;
      const cx = nx * TILE + TILE / 2;
      const cy = ny * TILE + TILE / 2;
      if (inSafeZone(cx, cy) || (typeof inMonZone === 'function' && inMonZone(cx, cy))) continue;
      // not on water
      if ((typeof lakeAt === 'function' && lakeAt(cx, cy)) ||
          (typeof onLand === 'function' && !onLand(cx, cy))) continue;
      if (typeof boulderAt === 'function' && boulderAt(cx, cy)) continue;    // not on a boulder
      if (typeof copterAtCell === 'function' && copterAtCell(nx, ny)) continue;
      let nearTurret = false;
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const dep = game.deploys.get(gkey(nx + dx, ny + dy));
        if (dep && dep.type === 'turret') { nearTurret = true; break; }
      }
      if (nearTurret) continue;    // space turrets out (dotted ring) so units keep clear lanes around the base
      cand.push({ nk, cx, cy });
    }
  }
  if (cand.length) {
    // cover the raid-facing sides first (farthest from our own door)
    cand.sort((p, q) => Math.hypot(q.cx - (b.doorX || b.hx), q.cy - (b.doorY || b.hy)) -
                        Math.hypot(p.cx - (b.doorX || b.hx), p.cy - (b.doorY || b.hy)));
    const cell = cand[0];
    game.deploys.set(cell.nk, {
      type: 'turret', mat: 'wood', hp: 150, max: 150, angle: 0, cd: 0, owner: b.owner,
      tier: (b.hard ? 3 : b.weak ? 1 : 2), ext: true    // ext: placed on the exterior perimeter
    });
    game._turBuilt = game._turBuilt || { ext: 0, int: 0 };
    game._turBuilt.ext++;
    botPay(b, 'metal', 30);
    botPay(b, 'wood', 40);
    addFloat(cell.cx, cell.cy - 10, '+turret', '#9ad06a');
    return true;
  }
  for (const [k, s] of game.structures) {    // fallback: no exterior spot -> an interior floor (rare)
    if (s.owner !== b.owner || s.type !== 'floor' || game.deploys.has(k)) continue;
    const [gx, gy] = k.split(',').map(Number);
    if (deployWouldTrap(gx, gy)) continue;
    game.deploys.set(k, {
      type: 'turret', mat: 'wood', hp: 150, max: 150, angle: 0, cd: 0, owner: b.owner,
      tier: (b.hard ? 3 : b.weak ? 1 : 2), ext: false
    });
    game._turBuilt = game._turBuilt || { ext: 0, int: 0 };
    game._turBuilt.int++;
    botPay(b, 'metal', 30);
    botPay(b, 'wood', 40);
    addFloat(gx * TILE + TILE / 2, gy * TILE + TILE / 2 - 10, '+turret', '#9ad06a');
    return true;
  }
  return false;
}

// Where to PARK the minicopter: just off the base footprint, on the side AWAY from the nearest enemy base
// (gunfire comes from that direction — keep the copter sheltered so it isn't lost).
function botParkSpot(b) {
  const bb = botBaseBounds(b.owner);
  const cxB = bb ? ((bb.minx + bb.maxx + 1) * TILE / 2) : b.hx;
  const cyB = bb ? ((bb.miny + bb.maxy + 1) * TILE / 2) : b.hy;
  let enemyX = null;
  let enemyY = null;
  let bd = 1e18;
  for (const o of game.enemies) {
    if (o.owner === b.owner || !o.primary || o.eliminated || !baseAlive(o)) continue;
    const d = dist2(cxB, cyB, o.hx, o.hy);
    if (d < bd) {
      bd = d;
      enemyX = o.hx;
      enemyY = o.hy;
    }
  }
  let ax = -1;
  let ay = 0;
  if (enemyX !== null) {    // unit vector FROM the enemy base toward us = the sheltered side
    const a = Math.atan2(cyB - enemyY, cxB - enemyX);
    ax = Math.cos(a) || -1;
    ay = Math.sin(a) || 0;
  }
  const reach = (bb ? Math.max(bb.maxx - bb.minx + 1, bb.maxy - bb.miny + 1) : 3) * TILE / 2 + TILE * 2.5;
  return { x: clamp(cxB + ax * reach, COPTER.r, WORLD.w - COPTER.r),
           y: clamp(cyB + ay * reach, COPTER.r, WORLD.h - COPTER.r), cxB, cyB, ax, ay };
}

// A parked copter must never sit on the buildable footprint, and parks on the side sheltered from the
// nearest enemy base.
function botParkCopterClear(b) {
  const c = b.copter;
  if (!c || c.destroyed || b.flying || b._aboard) return;
  const bb = botBaseBounds(b.owner);
  if (!bb) return;
  const spot = botParkSpot(b);
  const copterGx = Math.floor(c.x / TILE);
  const copterGy = Math.floor(c.y / TILE);
  const onFootprint = copterGx >= bb.minx - 1 && copterGx <= bb.maxx + 1 &&
                      copterGy >= bb.miny - 1 && copterGy <= bb.maxy + 1;
  // copter currently sits on the enemy-facing half -> exposed, move it to shelter
  const enemySide = ((c.x - spot.cxB) * (-spot.ax) + (c.y - spot.cyB) * (-spot.ay)) > 0;
  if ((onFootprint || enemySide) && Math.hypot(c.x - spot.x, c.y - spot.y) > TILE * 1.2) {
    c.x = clamp(spot.x, COPTER.r, WORLD.w - COPTER.r);
    c.y = clamp(spot.y, COPTER.r, WORLD.h - COPTER.r);
    c.vx = 0;
    c.vy = 0;
    if ((game.t - (b._parkT || -1e9)) > 5) {
      b._parkT = game.t;
      addFloat(c.x, c.y - 22, 'moved copter', '#bcd0e0');
    }
  }
}

// Harden a wall — CASCADE one wall up as far as resources allow in a single call
// (wood->stone->metal->armored), so a base actually reaches ARMORED (depth-first) instead of every wall
// creeping up one tier at a time.
function botHarden(b) {
  for (const [k, w] of game.walls) {
    if (w.owner !== b.owner || w.mat === 'armored') continue;
    let upgraded = false;
    if (w.mat === 'wood' && botHas(b, 'stone', 15)) {
      botPay(b, 'stone', 15);
      w.mat = 'stone';
      upgraded = true;
    }
    if (w.mat === 'stone' && botHas(b, 'metal', 20)) {
      botPay(b, 'metal', 20);
      w.mat = 'metal';
      upgraded = true;
    }
    // spend HQM (bought at the trade zone) to ARMOR-PLATE the wall (2x metal HP)
    if (w.mat === 'metal' && (b.hqm || 0) >= 8) {
      b.hqm -= 8;
      w.mat = 'armored';
      upgraded = true;
    }
    if (upgraded) {
      w.max = tierHp(BUILD[w.type], w.mat);
      w.hp = w.max;
      const sg = wallSegOf(k, w);
      addFloat((sg[0] + sg[2]) / 2, (sg[1] + sg[3]) / 2, '+' + w.mat,
               w.mat === 'armored' ? '#7f93ad' : w.mat === 'metal' ? '#aeb6bf' : '#c2c8cf');
      return true;
    }
  }
  return false;
}

// Also upgrade FOUNDATIONS (floors) wood->stone->metal->armored — its OWN build step (not gated behind
// every wall being armored, so growing bases still reinforce their floors).
function botHardenFloor(b) {
  for (const [k, s] of game.structures) {
    if (s.owner !== b.owner || (s.type !== 'floor' && s.type !== 'trifloor') || s.mat === 'armored') continue;
    let upgraded = false;
    if (s.mat === 'wood' && botHas(b, 'stone', 12)) {
      botPay(b, 'stone', 12);
      s.mat = 'stone';
      upgraded = true;
    }
    if (s.mat === 'stone' && botHas(b, 'metal', 16)) {
      botPay(b, 'metal', 16);
      s.mat = 'metal';
      upgraded = true;
    }
    if (s.mat === 'metal' && (b.hqm || 0) >= 6) {
      b.hqm -= 6;
      s.mat = 'armored';
      upgraded = true;
    }
    if (upgraded) {
      s.max = tierHp(BUILD[s.type], s.mat);
      s.hp = s.max;
      const comma = k.indexOf(',');
      const gx = +k.slice(0, comma);
      const gy = +k.slice(comma + 1);
      addFloat(gx * TILE + TILE / 2, gy * TILE + TILE / 2, '+' + s.mat,
               s.mat === 'armored' ? '#7f93ad' : s.mat === 'metal' ? '#aeb6bf' : '#c2c8cf');
      return true;
    }
  }
  return false;
}

// Proactive base development, in the user's priority order (hard bots build bigger, tougher,
// costlier-to-raid bases).
function botBuild(b) {
  botParkCopterClear(b);    // first move the helicopter off the build area if it's in the way
  const floors = botBaseFloors(b.owner);
  // ~7x7 (hard) / 6x6 fortress: still tough, but CRACKABLE so matches resolve, and a smaller
  // footprint = far less at-base circling/idle
  const minFloors = b.hard ? 9 : 5;
  const maxTur = b.hard ? 10 : b.weak ? 5 : 8;
  const capFloors = b.hard ? 49 : 36;
  // 1: footprint (hard = larger = longer path to the Tool Cupboard)
  if (floors < minFloors && botAddFloor(b)) return true;
  // 2: HIRE workers — each one compounds the whole economy, so hiring outranks defenses (capped per team)
  if (b.primary && floors >= 5 && botHireWorker(b)) return true;
  // 3: ring with turrets (hard = more) for animal + raid defense
  if (botOwnerTurrets(b.owner) < maxTur && botAddTurret(b)) return true;
  // hard bots harden walls to stone/metal early -> expensive to breach
  if (b.hard && botHarden(b)) return true;
  // 4: jackhammer (3x gather)
  if (!b.jack && botHas(b, 'wood', 120) && botHas(b, 'metal', 60)) {
    botPay(b, 'wood', 120);
    botPay(b, 'metal', 60);
    b.jack = true;
    addFloat(b.x, b.y - 22, '+jackhammer', '#e6c878');
    return true;
  }
  // 4: harden WALLS and FOUNDATIONS, alternating which is tried first so BOTH advance even while the base
  // keeps expanding (walls alone would always have work and floors would never upgrade)
  b._hf = !b._hf;
  if (b._hf) {
    if (botHardenFloor(b)) return true;
    if (botHarden(b)) return true;
  } else {
    if (botHarden(b)) return true;
    if (botHardenFloor(b)) return true;
  }
  if (floors < capFloors && botAddFloor(b)) return true;    // keep growing when resource-rich
  return false;
}

// A perimeter gap (no wall, not the doorway) in our base -> needs sealing.
function botBreached(b) {
  const doorKey = b.doorGy !== undefined ? ('H,' + Math.floor((b.doorX || b.hx) / TILE) + ',' + b.doorGy) : null;
  for (const [k, s] of game.structures) {
    if (s.owner !== b.owner || (s.type !== 'floor' && s.type !== 'trifloor')) continue;
    const [gx, gy] = k.split(',').map(Number);
    const sides = [['H,' + gx + ',' + gy, gx, gy - 1], ['H,' + gx + ',' + (gy + 1), gx, gy + 1],
                   ['V,' + gx + ',' + gy, gx - 1, gy], ['V,' + (gx + 1) + ',' + gy, gx + 1, gy]];
    for (const [ek, nx, ny] of sides) {
      if (game.structures.has(gkey(nx, ny))) continue;    // shared interior edge -> fine
      if (ek === doorKey) continue;                       // the doorway is meant to be open
      const w = game.walls.get(ek);
      if (!w || w.hp <= 0) {
        // just tore this down to escape -> leave it open briefly (no churn)
        if (game._freed && (game._freed[ek] || 0) > (game.t || 0)) continue;
        return ek;    // exposed perimeter edge -> breach
      }
    }
  }
  return null;
}

function botUpkeepStores(b) {    // seal/repair draw the same single store (the Tool Cupboard)
  return botStores(b);
}

function botPayUpkeep(b, res, amt) {
  const stores = botUpkeepStores(b);
  let have = 0;
  for (const s of stores) have += (s[res] || 0);
  if (have < amt) return false;
  for (const s of stores) {
    if (amt <= 0) break;
    const take = Math.min(s[res] || 0, amt);
    s[res] -= take;
    amt -= take;
  }
  return true;
}

function botSealWall(b, ek) {
  if (!ek) ek = botBreached(b);
  if (!ek) return false;
  // a DESTROYED wall's spot can't be re-walled for REPAIR_LOCK -> a committed raid stays open and
  // actually breaks in (no instant reseal)
  const lock = (typeof REPAIR_LOCK !== 'undefined' ? REPAIR_LOCK : 30);
  if (game._breachT && (game.t || 0) - (game._breachT[ek] || -1e9) < lock) return false;
  if (!botPayUpkeep(b, 'wood', 40)) return false;
  eWall(ek, 'wall', b.owner);
  const w = game.walls.get(ek);
  if (w) {
    const sg = wallSegOf(ek, w);
    addFloat((sg[0] + sg[2]) / 2, (sg[1] + sg[3]) / 2 - 8, 'sealed', '#9ad06a');
  }
  return true;
}

// A perimeter wall below 60% hp -> wants repair (most-damaged first).
function botDamagedWall(b) {
  let worst = null;
  let worstFrac = 0.6;
  const lock = (typeof REPAIR_LOCK !== 'undefined' ? REPAIR_LOCK : 10);
  for (const [k, w] of game.walls) {
    if (w.owner !== b.owner || w.type === 'door' || w.hp <= 0) continue;
    // skip walls hit in the last REPAIR_LOCK s (no instant repairs)
    if (game.t - (w._hitT !== undefined ? w._hitT : -1e9) < lock) continue;
    const f = w.hp / w.max;
    if (f < worstFrac) {
      worstFrac = f;
      worst = k;
    }
  }
  return worst;
}

function botRepairCost(w) {
  return w.mat === 'metal' ? ['metal', 8] : w.mat === 'stone' ? ['stone', 8] : ['wood', 12];
}

function botRepairWall(b, k) {
  const w = game.walls.get(k);
  if (!w) return false;
  if (game.t - (w._hitT !== undefined ? w._hitT : -1e9) <
      (typeof REPAIR_LOCK !== 'undefined' ? REPAIR_LOCK : 10)) return false;
  const cost = botRepairCost(w);
  if (!botPayUpkeep(b, cost[0], cost[1])) return false;
  w.hp = Math.min(w.max, w.hp + w.max * 0.5);
  const sg = wallSegOf(k, w);
  addFloat((sg[0] + sg[2]) / 2, (sg[1] + sg[3]) / 2 - 8, 'repaired', '#9ad06a');
  return true;
}

// Enough in the TC to NOT decay for 5 minutes -> objective flips to raiding.
function botSafe(b) {
  const tc = game.deploys.get(b.tcKey);
  if (!tc || !tc.store) return false;
  const store = tc.store.wood + tc.store.stone + tc.store.metal;
  const n = botBaseFloors(b.owner) + botOwnerTurrets(b.owner) + 2;
  const upkeepRate = (typeof UPKEEP !== 'undefined' ? UPKEEP : 0.0075);
  return store > n * upkeepRate * 300;
}

// Drop ALL carried loot into the Tool Cupboard (the TC is the one store).
function depositHome(b) {
  if (b.ally) {    // the player's workers stock the player's stockpile
    for (const r of ['wood', 'stone', 'metal']) {
      if (b.inv[r] > 0) {
        game.inv[r] = (game.inv[r] || 0) + b.inv[r];
        b.inv[r] = 0;
      }
    }
    if (b.scrap > 0) {
      game.inv.scrap = (game.inv.scrap | 0) + b.scrap;
      b.scrap = 0;
    }
    return;
  }
  const tc = game.deploys.get(b.tcKey);
  if (!tc || !tc.store) return;
  for (const r of ['wood', 'stone', 'metal']) {
    if (b.inv[r] > 0) {
      tc.store[r] = (tc.store[r] || 0) + b.inv[r];
      b.inv[r] = 0;
    }
  }
  if ((b.scrap || 0) > 0) {
    tc.store.scrap = (tc.store.scrap || 0) + b.scrap;
    b.scrap = 0;
  }
}
