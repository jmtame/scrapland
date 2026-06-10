// Building: placement, tiers, repair locks, decay/upkeep, TC bases, AI base
// layouts. Shared by the player and AI (one rule set, one validator).
import { TILE, BUILD, UPGRADE, tierHp, CLAIM_R, MIN_TC_DIST, BASE_MAX, REPAIR_LOCK, HIT_LOCK, UPKEEP, DECAY_UNCLAIMED, DECAY_CENTER, DECAY_EDGE, OWNER, SAFE_R } from './config.js';
import { gkey, ekey, dist, dist2, clamp } from './util.js';
import { inSafeZone, inMonZone, boulderAt, wallSegOf } from './physics.js';
import { addFloat, burst, spillContainer, teamOf } from './state.js';

export const cellCenter = (gx, gy) => ({ x: gx * TILE + TILE / 2, y: gy * TILE + TILE / 2 });

export function foundationAt(S, x, y) {
  return S.structures.get(gkey(Math.floor(x / TILE), Math.floor(y / TILE))) || null;
}

export function nearestCupboard(S, x, y, owner) {
  let best = null, bd = CLAIM_R * CLAIM_R;
  for (const [k, d] of S.deploys) {
    if (d.type !== 'cupboard') continue;
    if (owner && d.owner !== owner) continue;
    const [gx, gy] = k.split(',').map(Number);
    const c = cellCenter(gx, gy);
    const dd = dist2(x, y, c.x, c.y);
    if (dd < bd) { bd = dd; best = { key: k, d, x: c.x, y: c.y }; }
  }
  return best;
}

export function tcOf(S, tcKey) {
  const d = S.deploys.get(tcKey);
  return d && d.type === 'cupboard' ? d : null;
}

// ---- wallets ----
export const wallet = {
  has(stores, cost) {
    for (const k in cost) {
      let have = 0;
      for (const s of stores) have += s[k] || 0;
      if (have < cost[k]) return false;
    }
    return true;
  },
  pay(stores, cost) {
    if (!wallet.has(stores, cost)) return false;
    for (const k in cost) {
      let need = cost[k];
      for (const s of stores) {
        const take = Math.min(need, s[k] || 0);
        s[k] = (s[k] || 0) - take; need -= take;
        if (need <= 0) break;
      }
    }
    return true;
  },
};

// ---- placement ----
export function exceedsBase(S, owner, gx, gy) {
  let minx = gx, maxx = gx, miny = gy, maxy = gy, found = false;
  for (const [k, s] of S.structures) {
    if (s.owner !== owner) continue;
    const [x, y] = k.split(',').map(Number);
    // only the contiguous base near this cell matters; cheap proxy: within claim
    if (Math.abs(x - gx) * TILE > CLAIM_R || Math.abs(y - gy) * TILE > CLAIM_R) continue;
    found = true;
    minx = Math.min(minx, x); maxx = Math.max(maxx, x);
    miny = Math.min(miny, y); maxy = Math.max(maxy, y);
  }
  if (!found) return false;
  return (maxx - minx + 1) > BASE_MAX || (maxy - miny + 1) > BASE_MAX;
}

export function edgeHasFoundation(S, key) {
  const p = key.split(','), gx = +p[1], gy = +p[2];
  if (p[0] === 'V') return S.structures.has(gkey(gx - 1, gy)) || S.structures.has(gkey(gx, gy));
  return S.structures.has(gkey(gx, gy - 1)) || S.structures.has(gkey(gx, gy));
}

export function canPlace(S, owner, piece, target) {
  const def = BUILD[piece];
  if (!def) return false;
  if (def.cat === 'cell') {
    const { gx, gy } = target;
    const c = cellCenter(gx, gy);
    if (gx < 1 || gy < 1 || c.x > 13824 - TILE || c.y > 9216 - TILE) return false;
    if (inSafeZone(S, c.x, c.y) || inMonZone(S, c.x, c.y)) return false;
    if (boulderAt(S, c.x, c.y)) return false;
    if (!S.world.onLand(c.x, c.y) || S.world.lakeAt(c.x, c.y)) return false;
    if (def.found) {
      if (S.structures.has(gkey(gx, gy))) return false;
      if (S.deploys.has(gkey(gx, gy))) return false;
      if (exceedsBase(S, owner, gx, gy)) return false;
      if (copterOnCell(S, gx, gy)) return false;
      return true;
    }
    // deployable
    if (S.deploys.has(gkey(gx, gy))) return false;
    if (def.tc || def.box) { if (!S.structures.has(gkey(gx, gy))) return false; }
    if (def.tc) {
      if (owner === OWNER && [...S.deploys.values()].some(d => d.type === 'cupboard' && d.owner === OWNER)) return false;
      for (const [k, d] of S.deploys) {
        if (d.type !== 'cupboard') continue;
        const [x2, y2] = k.split(',').map(Number);
        const cc = cellCenter(x2, y2);
        if (dist(c.x, c.y, cc.x, cc.y) < MIN_TC_DIST) return false;
      }
    }
    if (def.turret && !nearestCupboard(S, c.x, c.y, owner)) return false;
    return true;
  }
  if (def.cat === 'edge') {
    const key = target.key;
    if (S.walls.has(key)) return false;
    if (!edgeHasFoundation(S, key)) return false;
    const w = { type: piece };
    const s = wallSegOf(key, w);
    const mx = (s[0] + s[2]) / 2, my = (s[1] + s[3]) / 2;
    if (inSafeZone(S, mx, my) || inMonZone(S, mx, my)) return false;
    return true;
  }
  if (def.cat === 'diag') {
    const key = target.key;
    if (S.walls.has(key)) return false;
    const p = key.split(',');
    if (!S.structures.has(gkey(+p[1], +p[2]))) return false;
    return true;
  }
  return false;
}

export function copterOnCell(S, gx, gy) {
  const c = cellCenter(gx, gy);
  const test = (cp) => cp && !cp.destroyed && Math.abs(cp.x - c.x) < 38 && Math.abs(cp.y - c.y) < 38;
  if (test(S.copter)) return true;
  for (const u of S.units) if (test(u.copter)) return true;
  return false;
}

export function place(S, owner, piece, target, stores, opts = {}) {
  const def = BUILD[piece];
  if (!canPlace(S, owner, piece, target)) return null;
  if (stores && !wallet.pay(stores, def.cost)) return null;
  const mat = opts.mat || 'wood';
  const hp = tierHp(def, mat);
  let obj;
  if (def.cat === 'cell' && def.found) {
    obj = { type: piece, mat, hp, max: hp, owner, hitT: -100, rot: (opts.rot || 0) & 3 };
    S.structures.set(gkey(target.gx, target.gy), obj);
  } else if (def.cat === 'cell') {
    obj = { type: piece, mat: 'wood', hp: def.hp, max: def.hp, owner, hitT: -100 };
    if (def.store) obj.store = { wood: 0, stone: 0, metal: 0, scrap: 0 };
    if (def.turret) { obj.tier = opts.tier || 1; obj.angle = 0; obj.cd = 0; obj.mag = 12; obj.reload = 0; obj.ext = !!opts.ext; obj.scanT = S.rng.rand(0.5, 4.5); }
    if (def.tc || def.box || def.door) obj.lock = { by: owner };
    S.deploys.set(gkey(target.gx, target.gy), obj);
  } else {
    obj = { type: piece, mat, hp: tierHp(def, mat), max: tierHp(def, mat), owner, hitT: -100, open: false, rot: (opts.rot || 0) & 1 };
    if (def.door) obj.lock = { by: owner };
    S.walls.set(target.key, obj);
  }
  S.nav.stamp++;
  return obj;
}

export function upgradeStructure(S, obj, def, stores) {
  const up = UPGRADE[obj.mat];
  if (!up || !def.up) return false;
  if (stores && !wallet.pay(stores, up.cost)) return false;
  obj.mat = up.to;
  obj.max = tierHp(def, obj.mat);
  obj.hp = obj.max;
  return true;
}

// ---- damage & destruction ----
export function damageWall(S, key, dmg, by) {
  const w = S.walls.get(key);
  if (!w || w.hp <= 0) return false;
  w.hp -= dmg; w.hitT = S.t;
  if (w.hp <= 0) {
    const s = wallSegOf(key, w);
    burst(S, (s[0] + s[2]) / 2, (s[1] + s[3]) / 2, '#8a7a5c', 10, 160);
    S.walls.delete(key);
    S.breachT[key] = S.t;
    S.nav.stamp++;
    S.events.push({ type: 'wallDown', x: (s[0] + s[2]) / 2, y: (s[1] + s[3]) / 2 });
    return true;
  }
  return false;
}

export function damageStructure(S, key, dmg) {
  const s = S.structures.get(key);
  if (!s) return false;
  s.hp -= dmg; s.hitT = S.t;
  if (s.hp <= 0) {
    S.structures.delete(key);
    S.breachT[key] = S.t;
    cleanupOrphans(S, key);
    S.nav.stamp++;
    return true;
  }
  return false;
}

export function damageDeploy(S, key, dmg, by) {
  const d = S.deploys.get(key);
  if (!d) return false;
  d.hp -= dmg; d.hitT = S.t;
  if (d.hp <= 0) { destroyDeploy(S, key, d, by); return true; }
  return false;
}

export function destroyDeploy(S, key, d, by) {
  const [gx, gy] = key.split(',').map(Number);
  const c = cellCenter(gx, gy);
  spillContainer(S, c.x, c.y, d);
  S.deploys.delete(key);
  S.nav.stamp++;
  burst(S, c.x, c.y, '#caa24a', 14, 220);
  if (d.type === 'cupboard') {
    addFloat(S, c.x, c.y, 'TC destroyed!', '#ff7a4a');
    S.metrics.tcKilled++;
    if (d.owner === OWNER) {
      // dump player carried resources at their TC (v1 rule)
      for (const k of ['wood', 'stone', 'metal']) { if (S.inv[k] > 0) { /* spilled with container */ } }
    }
    clearDeadBase(S, d.owner, c.x, c.y);
    const team = teamOf(S, d.owner);
    if (team) {
      const rec = team.bases.find(r => r.tcKey === key);
      if (rec) rec.dead = true;
    }
  }
}

// Wipe a cracked base's debris so corpse-bases don't litter (radius 560).
export function clearDeadBase(S, owner, tx, ty) {
  for (const [k, w] of [...S.walls]) {
    if (w.owner !== owner) continue;
    const s = wallSegOf(k, w);
    if (dist((s[0] + s[2]) / 2, (s[1] + s[3]) / 2, tx, ty) < 560) { S.walls.delete(k); }
  }
  for (const [k, st] of [...S.structures]) {
    if (st.owner !== owner) continue;
    const [gx, gy] = k.split(',').map(Number);
    const c = cellCenter(gx, gy);
    if (dist(c.x, c.y, tx, ty) < 560) { S.structures.delete(k); burst(S, c.x, c.y, '#6b5a40', 3, 120); }
  }
  for (const [k, d] of [...S.deploys]) {
    if (d.owner !== owner || d.type === 'cupboard') continue;
    const [gx, gy] = k.split(',').map(Number);
    const c = cellCenter(gx, gy);
    if (dist(c.x, c.y, tx, ty) < 560) S.deploys.delete(k);
  }
  S.nav.stamp++;
}

export function cleanupOrphans(S, cellKey) {
  const [gx, gy] = cellKey.split(',').map(Number);
  for (const k of [ekey('D', gx, gy)]) S.walls.delete(k);
  for (const k of [ekey('V', gx, gy), ekey('V', gx + 1, gy), ekey('H', gx, gy), ekey('H', gx, gy + 1)]) {
    if (S.walls.has(k) && !edgeHasFoundation(S, k)) S.walls.delete(k);
  }
}

// ---- repair ----
export function repairCost(def, obj, frac) {
  const cost = {};
  for (const k in def.cost) cost[k] = Math.max(1, Math.ceil(def.cost[k] * frac));
  if (obj.mat === 'stone' || obj.mat === 'metal') cost.stone = (cost.stone || 0) + Math.ceil(15 * frac);
  if (obj.mat === 'metal') cost.metal = (cost.metal || 0) + Math.ceil(20 * frac);
  return cost;
}

export function tryRepair(S, obj, def, stores, lock = HIT_LOCK) {
  if (obj.hp >= obj.max) return false;
  if (S.t - obj.hitT < lock) return false;
  const heal = Math.min(obj.max - obj.hp, obj.max * 0.2);
  const frac = heal / obj.max;
  if (!wallet.pay(stores, repairCost(def, obj, frac))) return false;
  obj.hp += heal;
  return true;
}

// ---- decay & upkeep (0.5 s cadence) ----
export function updateDecay(S, dt) {
  S.decayT = (S.decayT || 0) + dt;
  if (S.decayT < 0.5) return;
  const step = S.decayT; S.decayT = 0;

  const tcs = [];
  for (const [k, d] of S.deploys) {
    if (d.type !== 'cupboard') continue;
    const [gx, gy] = k.split(',').map(Number);
    tcs.push({ key: k, d, ...cellCenter(gx, gy), n: 0 });
  }
  const decayOne = (key, obj, isWall) => {
    const p = key.split(',');
    const gx = +p[p.length - 2], gy = +p[p.length - 1];
    const c = cellCenter(isWall ? gx : gx, gy);
    let tc = null, bd = CLAIM_R * CLAIM_R;
    for (const t of tcs) { const dd = dist2(c.x, c.y, t.x, t.y); if (dd < bd) { bd = dd; tc = t; } }
    if (tc) {
      tc.n++;
      const stocked = (tc.d.store.wood + tc.d.store.stone + tc.d.store.metal) > 0;
      if (stocked) return;
      const f = Math.sqrt(bd) / CLAIM_R;
      const time = DECAY_CENTER + (DECAY_EDGE - DECAY_CENTER) * f;
      obj.hp -= obj.max * (step / time);
    } else {
      obj.hp -= obj.max * (step / DECAY_UNCLAIMED);
    }
    if (obj.hp <= 0) {
      if (isWall) { S.walls.delete(key); S.nav.stamp++; }
      else { S.structures.delete(key); cleanupOrphans(S, key); S.nav.stamp++; }
    }
  };
  for (const [k, w] of [...S.walls]) decayOne(k, w, true);
  for (const [k, s] of [...S.structures]) decayOne(k, s, false);
  // upkeep drain
  for (const t of tcs) {
    let drain = t.n * UPKEEP * step;
    for (const k of ['wood', 'stone', 'metal']) {
      if (drain <= 0) break;
      const take = Math.min(drain, t.d.store[k]);
      t.d.store[k] -= take; drain -= take;
    }
  }
}

// ---- AI base layout ----
export function foundBase(S, team, bx, by) {
  const gx0 = Math.floor(bx / TILE), gy0 = Math.floor(by / TILE);
  const owner = team.owner;
  for (let dy = 0; dy < 3; dy++) for (let dx = 0; dx < 3; dx++) {
    S.structures.set(gkey(gx0 + dx, gy0 + dy), { type: 'floor', mat: 'wood', hp: 100, max: 100, owner, hitT: -100 });
  }
  const wall = (key) => S.walls.set(key, { type: 'wall', mat: 'wood', hp: 100, max: 100, owner, hitT: -100, open: false });
  const door = (key) => S.walls.set(key, { type: 'door', mat: 'wood', hp: 50, max: 50, owner, hitT: -100, open: false, lock: { by: owner } });
  for (let dx = 0; dx < 3; dx++) wall(ekey('H', gx0 + dx, gy0));
  wall(ekey('H', gx0, gy0 + 3)); wall(ekey('H', gx0 + 2, gy0 + 3));
  door(ekey('H', gx0 + 1, gy0 + 3)); // south outer door
  for (let dy = 0; dy < 3; dy++) { wall(ekey('V', gx0, gy0 + dy)); wall(ekey('V', gx0 + 3, gy0 + dy)); }
  // TC core airlock
  const cgx = gx0 + 1, cgy = gy0 + 1;
  door(ekey('H', cgx, cgy));      // inner north door
  wall(ekey('V', cgx, cgy)); wall(ekey('V', cgx + 1, cgy));
  door(ekey('H', cgx, cgy + 1));  // inner south door
  // TC
  const tcKey = gkey(cgx, cgy);
  S.deploys.set(tcKey, {
    type: 'cupboard', mat: 'wood', hp: 300, max: 300, owner, hitT: -100, lock: { by: owner },
    store: { wood: 200 + S.rng.randi(20, 70), stone: 0, metal: S.rng.randi(0, 40), scrap: 0 },
  });
  // NE turret
  S.deploys.set(gkey(gx0 + 2, gy0), { type: 'turret', mat: 'wood', hp: 150, max: 150, owner, hitT: -100, tier: team.hard ? 3 : team.weak ? 1 : 2, angle: 0, cd: 0, mag: 12, reload: 0, ext: false, scanT: S.rng.rand(0.5, 4.5) });
  if (team.hard) {
    for (const [, w] of S.walls) if (w.owner === owner && w.mat === 'wood') { w.mat = 'metal'; w.max = tierHp(BUILD[w.type], 'metal'); w.hp = w.max; }
  }
  const c = cellCenter(cgx, cgy);
  const rec = {
    owner, tcKey, hx: c.x, hy: c.y,
    doorX: (gx0 + 1) * TILE + TILE / 2, doorY: (gy0 + 3) * TILE, doorGy: gy0 + 3,
    kind: 'home', dead: false, cleared: false,
  };
  team.bases.push(rec);
  ensureSideDoors(S, team, rec);
  S.nav.stamp++;
  return rec;
}

export function baseBounds(S, owner, hx, hy) {
  let minx = 1e9, miny = 1e9, maxx = -1e9, maxy = -1e9, found = false;
  for (const [k, s] of S.structures) {
    if (s.owner !== owner) continue;
    const [gx, gy] = k.split(',').map(Number);
    const c = cellCenter(gx, gy);
    if (dist2(c.x, c.y, hx, hy) > CLAIM_R * CLAIM_R) continue;
    found = true;
    minx = Math.min(minx, gx); maxx = Math.max(maxx, gx);
    miny = Math.min(miny, gy); maxy = Math.max(maxy, gy);
  }
  return found ? { minx, miny, maxx, maxy } : null;
}

// Convert the mid wall of each perimeter side into a door (keeps HP).
export function ensureSideDoors(S, team, rec) {
  const b = baseBounds(S, team.owner, rec.hx, rec.hy);
  if (!b) return;
  const midGx = Math.floor((b.minx + b.maxx) / 2), midGy = Math.floor((b.miny + b.maxy) / 2);
  const keys = [ekey('H', midGx, b.miny), ekey('H', midGx, b.maxy + 1), ekey('V', b.minx, midGy), ekey('V', b.maxx + 1, midGy)];
  for (const k of keys) {
    const w = S.walls.get(k);
    if (w && w.owner === team.owner && w.type === 'wall' && w.hp > 0) {
      w.type = 'door'; w.lock = { by: team.owner }; w.open = false;
      // keep current hp/max (no weaker to raiders)
    }
  }
  S.nav.stamp++;
}

export function baseDoors(S, team, rec) {
  const b = baseBounds(S, team.owner, rec.hx, rec.hy);
  if (!b) return [];
  const out = [];
  for (const [k, w] of S.walls) {
    if (w.owner !== team.owner || w.type !== 'door' || w.hp <= 0) continue;
    const s = wallSegOf(k, w);
    const mx = (s[0] + s[2]) / 2, my = (s[1] + s[3]) / 2;
    if (dist2(mx, my, rec.hx, rec.hy) > CLAIM_R * CLAIM_R) continue;
    out.push({ key: k, x: mx, y: my });
  }
  return out;
}

// Exposed perimeter edge with no wall = breach (south doorway exempt).
export function findBreach(S, team, rec) {
  const owner = team.owner;
  const doorKey = ekey('H', Math.floor(rec.doorX / TILE), rec.doorGy);
  for (const [k, s] of S.structures) {
    if (s.owner !== owner) continue;
    const [gx, gy] = k.split(',').map(Number);
    const c = cellCenter(gx, gy);
    if (dist2(c.x, c.y, rec.hx, rec.hy) > CLAIM_R * CLAIM_R) continue;
    const edges = [
      [ekey('V', gx, gy), gkey(gx - 1, gy)], [ekey('V', gx + 1, gy), gkey(gx + 1, gy)],
      [ekey('H', gx, gy), gkey(gx, gy - 1)], [ekey('H', gx, gy + 1), gkey(gx, gy + 1)],
    ];
    for (const [ek, nk] of edges) {
      const nb = S.structures.get(nk);
      if (nb && nb.owner === owner) continue; // interior edge
      if (ek === doorKey) continue;
      const w = S.walls.get(ek);
      if (!w || w.hp <= 0) return ek;
    }
  }
  return null;
}

export function sealWall(S, team, ek, stores) {
  if (S.t - (S.breachT[ek] || -1e9) < REPAIR_LOCK) return false;
  if (!wallet.pay(stores, { wood: 40 })) return false;
  S.walls.set(ek, { type: 'wall', mat: 'wood', hp: 100, max: 100, owner: team.owner, hitT: -100, open: false });
  S.nav.stamp++;
  return true;
}

export function worstDamagedWall(S, team, rec) {
  let worst = null, wf = 0.6; // below 60%
  for (const [k, w] of S.walls) {
    if (w.owner !== team.owner || w.type === 'door' || w.hp <= 0) continue;
    if (S.t - w.hitT < HIT_LOCK) continue;
    const s = wallSegOf(k, w);
    if (dist2((s[0] + s[2]) / 2, (s[1] + s[3]) / 2, rec.hx, rec.hy) > CLAIM_R * CLAIM_R) continue;
    const f = w.hp / w.max;
    if (f < wf) { wf = f; worst = k; }
  }
  return worst;
}

export function repairWall(S, team, k, stores) {
  const w = S.walls.get(k);
  if (!w || S.t - w.hitT < HIT_LOCK) return false;
  const cost = w.mat === 'metal' ? { metal: 8 } : w.mat === 'stone' ? { stone: 8 } : { wood: 12 };
  if (!wallet.pay(stores, cost)) return false;
  w.hp = Math.min(w.max, w.hp + w.max * 0.5);
  return true;
}
