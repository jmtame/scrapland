// AI base development: founding, floors, walls, turrets, hardening, sealing,
// repairs, worker hiring, multi-base expansion.
import { TILE, BUILD, tierHp, AI, SAFE_R, MIN_TC_DIST, CLAIM_R, OWNER } from '../config.js';
import { gkey, ekey, dist, dist2 } from '../util.js';
import { inSafeZone, inMonZone, boulderAt } from '../physics.js';
import { foundBase, baseBounds, ensureSideDoors, findBreach, sealWall, worstDamagedWall, repairWall, wallet, cellCenter, tcOf } from '../building.js';
import { addFloat } from '../state.js';
import { spawnUnit } from '../state.js';

export function botStores(S, u) {
  const rec = homeRec(S, u);
  const tc = rec && tcOf(S, rec.tcKey);
  return tc ? [u.inv, tc.store] : [u.inv];
}
export function homeRec(S, u) {
  const team = S.teams[u.id];
  if (!team || u.ally) return null;
  return team.bases.find(r => r.tcKey === u.tcKey && !r.dead) || team.bases.find(r => !r.dead) || null;
}
export function teamBank(S, team) {
  const rec = team.bases.find(r => !r.dead);
  const tc = rec && tcOf(S, rec.tcKey);
  return tc ? tc.store : null;
}

export function siteClear(S, x, y) {
  if (x < 1400 || y < 1400 || x > 13824 - 1400 || y > 9216 - 1400) return false;
  if (!S.world.onLand(x, y) || S.world.lakeAt(x, y)) return false;
  if (S.world.railDist(x, y) < 360 || S.world.pathDist(x, y) < 320) return false;
  if (S.world.landFactor(x, y) < 0.12) return false;
  if (dist(x, y, S.world.shop.x, S.world.shop.y) < SAFE_R + 450) return false;
  for (const m of S.world.monuments) if (dist(x, y, m.x, m.y) < SAFE_R + 200) return false;
  for (const L of S.world.lakes) if (dist(x, y, L.x, L.y) < L.r + 560) return false;
  for (const b of S.world.boulders) if (dist(x, y, b.x, b.y) < b.r + 300) return false;
  for (const [k, d] of S.deploys) {
    if (d.type !== 'cupboard') continue;
    const [gx, gy] = k.split(',').map(Number);
    const c = cellCenter(gx, gy);
    if (dist(x, y, c.x, c.y) < MIN_TC_DIST) return false;
  }
  return true;
}

export function foundTeamBase(S, team, primary) {
  const carried = primary.inv.wood + primary.inv.stone + primary.inv.metal;
  if (carried < 220) return false;
  let pay = 220;
  for (const k of ['wood', 'stone', 'metal']) {
    const take = Math.min(pay, primary.inv[k]);
    primary.inv[k] -= take; pay -= take;
    if (pay <= 0) break;
  }
  const rec = foundBase(S, team, primary.siteX, primary.siteY);
  for (const u of S.units) {
    if (u.owner !== team.owner) continue;
    u.unfounded = false;
    u.hx = rec.hx; u.hy = rec.hy; u.tcKey = rec.tcKey;
    u.doorX = rec.doorX; u.doorY = rec.doorY; u.doorGy = rec.doorGy;
  }
  addFloat(S, rec.hx, rec.hy, 'base founded', '#9ad06a');
  return true;
}

// ---- proactive development (builder at home) ----
export function botBuild(S, u) {
  const team = S.teams[u.id];
  const rec = homeRec(S, u);
  if (!team || !rec) return false;
  const stores = botStores(S, u);
  const floors = countFloors(S, team.owner, rec);
  const turrets = countTurrets(S, team.owner, rec);
  const minFloors = u.hard ? 9 : 5;
  const maxTur = u.hard ? 10 : u.weak ? 5 : 8;
  const capFloors = u.hard ? 49 : 36;

  if (floors < minFloors && botAddFloor(S, u, team, rec, stores)) return true;
  if (u.primary && floors >= 5 && botHireWorker(S, u)) return true;
  if (turrets < maxTur && botAddTurret(S, u, team, rec, stores)) return true;
  if (u.hard && botHarden(S, u, team, rec, stores)) return true;
  if (!u.jack && wallet.pay(stores, { wood: 120, metal: 60 })) { u.jack = true; addFloat(S, u.x, u.y, '+jackhammer', '#ffd76b'); return true; }
  u.hf = !u.hf;
  if (u.hf ? botHardenFloor(S, u, team, rec, stores) || botHarden(S, u, team, rec, stores)
           : botHarden(S, u, team, rec, stores) || botHardenFloor(S, u, team, rec, stores)) return true;
  if (floors < capFloors && botAddFloor(S, u, team, rec, stores)) return true;
  return false;
}

export function countFloors(S, owner, rec) {
  let n = 0;
  for (const [k, s] of S.structures) {
    if (s.owner !== owner) continue;
    const [gx, gy] = k.split(',').map(Number);
    const c = cellCenter(gx, gy);
    if (dist2(c.x, c.y, rec.hx, rec.hy) < CLAIM_R * CLAIM_R) n++;
  }
  return n;
}
export function countTurrets(S, owner, rec) {
  let n = 0;
  for (const [k, d] of S.deploys) {
    if (d.type !== 'turret' || d.owner !== owner) continue;
    const [gx, gy] = k.split(',').map(Number);
    const c = cellCenter(gx, gy);
    if (dist2(c.x, c.y, rec.hx, rec.hy) < CLAIM_R * CLAIM_R) n++;
  }
  return n;
}

function cellFreeForFloor(S, gx, gy, team, rec) {
  const k = gkey(gx, gy);
  if (S.structures.has(k) || S.deploys.has(k)) return false;
  const c = cellCenter(gx, gy);
  if (gy >= rec.doorGy) return false;              // bases grow NORTH of the south door
  if (inSafeZone(S, c.x, c.y) || inMonZone(S, c.x, c.y)) return false;
  if (!S.world.onLand(c.x, c.y) || S.world.lakeAt(c.x, c.y) || boulderAt(S, c.x, c.y)) return false;
  for (const a of S.animals) if (!a.dead && Math.abs(a.x - c.x) < TILE && Math.abs(a.y - c.y) < TILE) return false;
  const b = baseBounds(S, team.owner, rec.hx, rec.hy);
  if (b) {
    const minx = Math.min(b.minx, gx), maxx = Math.max(b.maxx, gx);
    const miny = Math.min(b.miny, gy), maxy = Math.max(b.maxy, gy);
    if (maxx - minx + 1 > 10 || maxy - miny + 1 > 10) return false;
  }
  return true;
}

// Would placing a wall on `key` fully seal any adjacent floored cell
// (no door, no opening)? Trapping units inside the own base is forbidden.
function wallWouldTrap(S, owner, key) {
  const p = key.split(',');
  const gx = +p[1], gy = +p[2];
  const cells = p[0] === 'V' ? [[gx - 1, gy], [gx, gy]] : [[gx, gy - 1], [gx, gy]];
  for (const [cx, cy] of cells) {
    if (!S.structures.has(gkey(cx, cy))) continue;
    let openings = 0;
    for (const ek2 of [ekey('V', cx, cy), ekey('V', cx + 1, cy), ekey('H', cx, cy), ekey('H', cx, cy + 1)]) {
      if (ek2 === key) continue; // the wall being placed
      const w = S.walls.get(ek2);
      if (!w || w.hp <= 0 || w.type === 'door') openings++;
    }
    if (openings === 0) return true;
  }
  return false;
}

export function botAddFloor(S, u, team, rec, stores) {
  if (!wallet.has(stores, { wood: 40 })) return false;
  const cands = [];
  for (const [k, s] of S.structures) {
    if (s.owner !== team.owner) continue;
    const [gx, gy] = k.split(',').map(Number);
    const c = cellCenter(gx, gy);
    if (dist2(c.x, c.y, rec.hx, rec.hy) > CLAIM_R * CLAIM_R) continue;
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      if (cellFreeForFloor(S, gx + dx, gy + dy, team, rec)) cands.push([gx + dx, gy + dy]);
    }
  }
  if (!cands.length) return false;
  const [gx, gy] = cands[Math.floor(S.rng.next() * cands.length)];
  if (!wallet.pay(stores, { wood: 40 })) return false;
  S.structures.set(gkey(gx, gy), { type: 'floor', mat: 'wood', hp: 100, max: 100, owner: team.owner, hitT: -100 });
  // wall exposed sides — but NEVER fully box any floored cell without a door
  const edges = [
    [ekey('V', gx, gy), gkey(gx - 1, gy)], [ekey('V', gx + 1, gy), gkey(gx + 1, gy)],
    [ekey('H', gx, gy), gkey(gx, gy - 1)], [ekey('H', gx, gy + 1), gkey(gx, gy + 1)],
  ];
  for (const [ek2, nk] of edges) {
    const nb = S.structures.get(nk);
    if (nb && nb.owner === team.owner) continue;
    if (S.walls.has(ek2)) continue;
    if (wallWouldTrap(S, team.owner, ek2)) continue;
    S.walls.set(ek2, { type: 'wall', mat: 'wood', hp: 100, max: 100, owner: team.owner, hitT: -100, open: false });
  }
  ensureSideDoors(S, team, rec);
  S.nav.stamp++;
  addFloat(S, gx * TILE + TILE / 2, gy * TILE + TILE / 2, '+room', '#bcd0e0');
  return true;
}

export function botAddTurret(S, u, team, rec, stores) {
  if (!wallet.has(stores, { wood: 40, metal: 30 })) return false;
  const b = baseBounds(S, team.owner, rec.hx, rec.hy);
  if (!b) return false;
  const doorGx = Math.floor(rec.doorX / TILE);
  const cands = [];
  for (let gy = b.miny - 1; gy <= b.maxy + 1; gy++) for (let gx = b.minx - 1; gx <= b.maxx + 1; gx++) {
    const k = gkey(gx, gy);
    if (S.structures.has(k) || S.deploys.has(k)) continue;
    if (gy >= rec.doorGy && Math.abs(gx - doorGx) <= 1) continue; // keep the door lane clear
    const c = cellCenter(gx, gy);
    if (inSafeZone(S, c.x, c.y) || inMonZone(S, c.x, c.y)) continue;
    if (!S.world.onLand(c.x, c.y) || S.world.lakeAt(c.x, c.y) || boulderAt(S, c.x, c.y)) continue;
    // 8-neighbor adjacency to own floor
    let adj = false, nextToTurret = false;
    for (let dy = -1; dy <= 1 && !adj; dy++) for (let dx = -1; dx <= 1; dx++) {
      const nb = S.structures.get(gkey(gx + dx, gy + dy));
      if (nb && nb.owner === team.owner) { adj = true; break; }
    }
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const nd = S.deploys.get(gkey(gx + dx, gy + dy));
      if (nd && nd.type === 'turret') { nextToTurret = true; break; }
    }
    if (adj && !nextToTurret) cands.push({ gx, gy, c });
  }
  if (!cands.length) return false;
  // raid-facing side first: farthest from own door
  cands.sort((a, c2) => dist2(c2.c.x, c2.c.y, rec.doorX, rec.doorY) - dist2(a.c.x, a.c.y, rec.doorX, rec.doorY));
  const pick = cands[0];
  if (!wallet.pay(stores, { wood: 40, metal: 30 })) return false;
  S.deploys.set(gkey(pick.gx, pick.gy), {
    type: 'turret', mat: 'wood', hp: 150, max: 150, owner: team.owner, hitT: -100,
    tier: u.hard ? 3 : u.weak ? 1 : 2, angle: 0, cd: 0, mag: 12, reload: 0, ext: true, scanT: S.rng.rand(0.5, 4.5),
  });
  S.nav.stamp++;
  addFloat(S, pick.c.x, pick.c.y, '+turret', '#bcd0e0');
  return true;
}

const WALL_UP = { wood: { mat: 'stone', cost: { stone: 15 } }, stone: { mat: 'metal', cost: { metal: 20 } }, metal: { mat: 'armored', hqm: 8 } };
const FLOOR_UP = { wood: { mat: 'stone', cost: { stone: 12 } }, stone: { mat: 'metal', cost: { metal: 16 } }, metal: { mat: 'armored', hqm: 6 } };

export function botHarden(S, u, team, rec, stores) {
  for (const [k, w] of S.walls) {
    if (w.owner !== team.owner || w.hp <= 0) continue;
    const up = WALL_UP[w.mat];
    if (!up) continue;
    if (up.hqm) {
      if (u.hqm < up.hqm) continue;
      u.hqm -= up.hqm;
    } else if (!wallet.pay(stores, up.cost)) continue;
    w.mat = up.mat; w.max = tierHp(BUILD[w.type], w.mat); w.hp = w.max;
    addFloat(S, u.x, u.y, '+' + up.mat, up.mat === 'armored' ? '#7f93ad' : up.mat === 'metal' ? '#aeb6bf' : '#c2c8cf');
    return true;
  }
  return false;
}

export function botHardenFloor(S, u, team, rec, stores) {
  for (const [k, s] of S.structures) {
    if (s.owner !== team.owner) continue;
    const up = FLOOR_UP[s.mat];
    if (!up) continue;
    if (up.hqm) {
      if (u.hqm < up.hqm) continue;
      u.hqm -= up.hqm;
    } else if (!wallet.pay(stores, up.cost)) continue;
    s.mat = up.mat; s.max = tierHp(BUILD[s.type], s.mat); s.hp = s.max;
    return true;
  }
  return false;
}

export function botHireWorker(S, u) {
  const team = S.teams[u.id];
  if (!team || !u.primary) return false;
  const cap = u.hard ? AI.HIRE_CAP_HARD : AI.HIRE_CAP;
  const count = S.units.filter(o => o.owner === team.owner && !o.eliminated).length;
  if (count >= cap) return false;
  const rec = homeRec(S, u);
  const tc = rec && tcOf(S, rec.tcKey);
  let cost = AI.WORKER_COST;
  const fromPocket = Math.min(cost, u.scrap);
  if (fromPocket + (tc ? tc.store.scrap : 0) < cost) return false;
  u.scrap -= fromPocket; cost -= fromPocket;
  if (cost > 0) tc.store.scrap -= cost;
  const w = spawnUnit(S, team, u.hx + S.rng.rand(-46, 46), u.hy + S.rng.rand(24, 64), false);
  w.hx = u.hx; w.hy = u.hy; w.tcKey = u.tcKey; w.doorX = u.doorX; w.doorY = u.doorY; w.doorGy = u.doorGy;
  w.unfounded = u.unfounded;
  addFloat(S, w.x, w.y, '+worker hired', '#9ad06a');
  return true;
}

// ---- multi-base expansion (primary, per-frame cheap) ----
export function expandTeamBases(S, team, dt) {
  const primary = S.units.find(u2 => u2.owner === team.owner && u2.primary && !u2.eliminated);
  if (!primary || primary.unfounded || team.eliminated) return;
  const live = team.bases.filter(r => !r.dead);
  if (!live.length) return;
  const maxBases = team.hard ? 4 : 3;
  const bank = teamBank(S, team);
  const bankSum = bank ? bank.wood + bank.stone + bank.metal : 0;
  const brain = team.brain;

  // forward raid base
  primary.fwdT -= dt;
  if (brain.aggressor && brain.raidTarget && live.length < maxBases && bankSum >= 170 && primary.fwdT <= 0) {
    primary.fwdT = 10;
    const tgtRec = raidTargetRec(S, brain.raidTarget);
    if (tgtRec && !live.some(r => dist(r.hx, r.hy, tgtRec.hx, tgtRec.hy) < 2400)) {
      const home = live[0];
      const ang = Math.atan2(home.hy - tgtRec.hy, home.hx - tgtRec.hx);
      for (const back of [1800, 2300, 1400, 2700]) {
        const x = tgtRec.hx + Math.cos(ang) * back, y = tgtRec.hy + Math.sin(ang) * back;
        if (siteClear(S, x, y)) {
          payBank(bank, 200);
          const rec = foundBase(S, team, x, y);
          rec.kind = 'raid-forward';
          addFloat(S, x, y, '+raid base', '#ffd0a0');
          return;
        }
      }
    }
  }
  // normal expansion
  primary.expT -= dt;
  if (primary.expT <= 0) {
    primary.expT = S.rng.rand(50, 90);
    const need = brain.attack ? 160 : 260;
    if (live.length >= 1 && live.length < maxBases && bankSum >= need) {
      const site = pickSecondarySite(S, team, live[0]);
      if (site) {
        payBank(bank, 240);
        const rec = foundBase(S, team, site.x, site.y);
        rec.kind = site.kind;
        addFloat(S, site.x, site.y, '+' + site.kind + ' base', '#bcd0e0');
      }
    }
  }
}

function payBank(bank, amt) {
  if (!bank) return;
  for (const k of ['wood', 'stone', 'metal']) {
    const take = Math.min(amt, bank[k]);
    bank[k] -= take; amt -= take;
    if (amt <= 0) return;
  }
}

export function raidTargetRec(S, target) {
  if (!target) return null;
  if (target === 'player') {
    for (const [k, d] of S.deploys) {
      if (d.type === 'cupboard' && d.owner === OWNER) {
        const [gx, gy] = k.split(',').map(Number);
        const c = cellCenter(gx, gy);
        return { owner: OWNER, tcKey: k, hx: c.x, hy: c.y, isPlayer: true };
      }
    }
    return null;
  }
  return target.bases ? target.bases.find(r => !r.dead) || null : null;
}

function pickSecondarySite(S, team, home) {
  // 1. monument claim
  for (const m of S.world.monuments) {
    let claimed = false;
    for (const t2 of S.teams) {
      if (t2.bases.some(r => !r.dead && dist(r.hx, r.hy, m.x, m.y) < SAFE_R + 900)) { claimed = true; break; }
    }
    if (claimed) continue;
    for (let s = 0; s < 8; s++) {
      const a = (s / 8) * Math.PI * 2;
      const x = m.x + Math.cos(a) * (SAFE_R + TILE * 5), y = m.y + Math.sin(a) * (SAFE_R + TILE * 5);
      if (siteClear(S, x, y)) return { x, y, kind: 'monument' };
    }
  }
  // 2. forward
  const tgtRec = raidTargetRec(S, team.brain.raidTarget) || farthestEnemyRec(S, team, home);
  if (tgtRec) {
    const ang = Math.atan2(tgtRec.hy - home.hy, tgtRec.hx - home.hx);
    for (const d of [1700, 2200, 1300]) {
      const x = home.hx + Math.cos(ang) * d, y = home.hy + Math.sin(ang) * d;
      if (siteClear(S, x, y)) return { x, y, kind: 'raid-forward' };
    }
  }
  // 3. survival spread
  for (let t = 0; t < 10; t++) {
    const a = S.rng.rand(0, Math.PI * 2), d = S.rng.rand(MIN_TC_DIST + 200, MIN_TC_DIST + 1600);
    const x = home.hx + Math.cos(a) * d, y = home.hy + Math.sin(a) * d;
    if (siteClear(S, x, y)) return { x, y, kind: 'survival' };
  }
  return null;
}

export function farthestEnemyRec(S, team, home) {
  let best = null, bd = 3000 * 3000;
  for (const t2 of S.teams) {
    if (t2 === team || t2.eliminated) continue;
    for (const r of t2.bases) {
      if (r.dead) continue;
      const dd = dist2(home.hx, home.hy, r.hx, r.hy);
      if (dd > bd) { bd = dd; best = r; }
    }
  }
  return best;
}

// last-resort: cut an own wall into a door (only if pathing out truly fails)
export function botFreeWall(S, u) {
  if (u.ally) return false;
  const gx = Math.floor(u.x / TILE), gy = Math.floor(u.y / TILE);
  let best = null, bs = -1;
  for (const [ek2, nk, south] of [
    [ekey('V', gx, gy), gkey(gx - 1, gy), false], [ekey('V', gx + 1, gy), gkey(gx + 1, gy), false],
    [ekey('H', gx, gy), gkey(gx, gy - 1), false], [ekey('H', gx, gy + 1), gkey(gx, gy + 1), true],
  ]) {
    const w = S.walls.get(ek2);
    if (!w || w.owner !== u.owner || w.type === 'door') continue;
    const score = (S.structures.has(nk) ? 0 : 60) + (south ? 12 : 0) + S.rng.rand(0, 2);
    if (score > bs) { bs = score; best = ek2; }
  }
  if (!best) return false;
  const w = S.walls.get(best);
  w.type = 'door'; w.open = true; w.closeT = S.t + 1.2; w.lock = { by: u.owner };
  w.hp = Math.max(w.hp, 50); w.max = Math.max(w.max, 50);
  S.nav.stamp++;
  S.metrics.doorCuts = (S.metrics.doorCuts || 0) + 1;
  addFloat(S, u.x, u.y, 'cut a door', '#caa46a');
  return true;
}
