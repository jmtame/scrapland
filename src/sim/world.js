// Procedural world: island, biomes, lakes, roads, rails, convoy lane,
// monuments + quarry, resource nodes, boulders, flora, wildlife placement.
import { TILE, WORLD, SAFE_R, MON_NOBUILD, MONUMENTS, GUARD, ANIMALS, ANIMAL_SPAWNS, QUARRY, COPTER } from './config.js';
import { TAU, clamp, dist, dist2, smooth01, segSeg, segXpt, ptSeg } from './util.js';

export function buildWorld(S) {
  const R = S.rng;
  const W = WORLD.w, H = WORLD.h;

  // ---- island coastline ----
  const N = 200, cx = W / 2, cy = H / 2, rx = 0.47 * W, ry = 0.47 * H;
  const harm = [];
  for (let k = 0; k < 5; k++) harm.push({ f: k + 2, w: 1 / (k + 1.2), p: R.rand(0, TAU) });
  let raw = [], lo = 1e9, hi = -1e9;
  for (let i = 0; i < N; i++) {
    const a = (i / N) * TAU;
    let v = 0;
    for (const h of harm) v += Math.sin(a * h.f + h.p) * h.w;
    raw.push(v); lo = Math.min(lo, v); hi = Math.max(hi, v);
  }
  const rad = raw.map(v => {
    const n = (v - lo) / (hi - lo) * 2 - 1; // [-1,1]
    return 1 - 0.22 * (0.5 - 0.5 * n);
  });
  const island = { cx, cy, rx, ry, N, rad };
  const islandRadAt = (ang) => {
    let a = ang % TAU; if (a < 0) a += TAU;
    const f = (a / TAU) * N;
    const i0 = Math.floor(f) % N, i1 = (i0 + 1) % N;
    return rad[i0] + (rad[i1] - rad[i0]) * (f - i0);
  };
  const landFactor = (x, y) => {
    const dx = (x - cx) / rx, dy = (y - cy) / ry;
    const r = Math.sqrt(dx * dx + dy * dy);
    return islandRadAt(Math.atan2(dy, dx)) - r;
  };
  const onLand = (x, y) => landFactor(x, y) > 0;
  const islandPath = [];
  for (let i = 0; i < N; i++) {
    const a = (i / N) * TAU;
    islandPath.push({ x: cx + Math.cos(a) * rad[i] * rx, y: cy + Math.sin(a) * rad[i] * ry });
  }

  // ---- biomes ----
  const biomeRidge = (y) => (y === undefined ? 0 : (Math.sin(y * 0.0016 + 1.7) * 0.62 + Math.sin(y * 0.0043 + 4.2) * 0.38) * W * 0.055);
  const biomeAt = (x, y) => {
    const t = (x + biomeRidge(y)) / W;
    return t < 1 / 3 ? 'desert' : t < 2 / 3 ? 'jungle' : 'winter';
  };

  const shop = { x: W / 2, y: H / 2, r: 46 };

  // ---- roads ----
  const roads = [];
  for (let p = 0; p < 5; p++) {
    const horiz = p % 2 === 0;
    const span = horiz ? W : H, cspan = horiz ? H : W;
    const base = R.rand(0.14, 0.86) * cspan, amp = R.rand(260, 820), freq = R.rand(1.4, 3.2), ph = R.rand(0, TAU);
    const pts = [];
    for (let i = 0; i <= 30; i++) {
      const t = i / 30;
      const cross = clamp(base + Math.sin(t * freq * TAU + ph) * amp, 60, cspan - 60);
      pts.push(horiz ? { x: t * span, y: cross } : { x: cross, y: t * span });
    }
    const w = R.rand(26, 42);
    const poles = [];
    const side = R.chance(0.5) ? 1 : -1;
    for (let i = 0; i < pts.length; i += 2) {
      const a = roadAngAt(pts, i);
      poles.push({
        x: clamp(pts[i].x + Math.cos(a + Math.PI / 2) * side * (w / 2 + 24), 20, W - 20),
        y: clamp(pts[i].y + Math.sin(a + Math.PI / 2) * side * (w / 2 + 24), 20, H - 20),
      });
    }
    roads.push({ pts, w, poles, fade: pts.map(() => 1) });
  }
  function roadAngAt(pts, i) {
    const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)];
    return Math.atan2(b.y - a.y, b.x - a.x);
  }

  // trim a polyline to the island: drop off-land ends, bisect the boundary
  // points onto the waterline so roads/rails END at the coast, not in the sea
  const coastPoint = (onPt, offPt) => {
    let a = onPt, b = offPt;
    for (let i = 0; i < 7; i++) {
      const m = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
      if (landFactor(m.x, m.y) > 0.015) a = m; else b = m;
    }
    return { x: a.x, y: a.y };
  };
  const trimToLand = (pts) => {
    const on = pts.map(p => landFactor(p.x, p.y) > 0.015);
    let i0 = on.indexOf(true);
    let i1 = on.lastIndexOf(true);
    if (i0 === -1 || i1 - i0 < 2) return null;
    const out = pts.slice(i0, i1 + 1);
    if (i0 > 0) out[0] = coastPoint(out[0], pts[i0 - 1]);
    if (i1 < pts.length - 1) out[out.length - 1] = coastPoint(out[out.length - 1], pts[i1 + 1]);
    return out;
  };

  // ---- rails ----
  const railHoriz = R.chance(0.5);
  const rails = [];
  for (const band of [[0.15, 0.35], [0.65, 0.85]]) {
    const span = railHoriz ? W : H, cspan = railHoriz ? H : W;
    for (let attempt = 0; attempt < 4 && !rails.some(r => r.band === band[0]); attempt++) {
      const base = R.rand(band[0], band[1]) * cspan, amp = R.rand(70, Math.min(300, cspan * 0.09)), freq = R.rand(0.7, 1.5), ph = R.rand(0, TAU);
      let pts = [];
      for (let i = 0; i <= 46; i++) {
        const t = i / 46;
        const cross = clamp(base + Math.sin(t * freq * TAU + ph) * amp, 90, cspan - 90);
        pts.push(railHoriz ? { x: t * span, y: cross } : { x: cross, y: t * span });
      }
      pts = trimToLand(pts);
      if (!pts) continue;
      let crosses = false;
      for (const other of rails) {
        for (let i = 0; i < pts.length - 1 && !crosses; i++)
          for (let j = 0; j < other.pts.length - 1; j++)
            if (segSeg(pts[i].x, pts[i].y, pts[i + 1].x, pts[i + 1].y, other.pts[j].x, other.pts[j].y, other.pts[j + 1].x, other.pts[j + 1].y)) { crosses = true; break; }
      }
      if (!crosses) rails.push({ pts, band: band[0] });
    }
  }

  const polyDist = (x, y, polys) => {
    let best = 1e9;
    for (const r of polys) {
      const pts = r.pts;
      for (let i = 0; i < pts.length - 1; i++) best = Math.min(best, ptSeg(x, y, pts[i].x, pts[i].y, pts[i + 1].x, pts[i + 1].y));
    }
    return best;
  };
  const railDist = (x, y) => polyDist(x, y, rails);
  const pathDist = (x, y) => polyDist(x, y, roads);

  // (road fade is computed after lakes are generated — see below)

  // ---- crossings ----
  const crossings = [];
  for (const rl of rails) for (let i = 0; i < rl.pts.length - 1; i++) {
    for (const rd of roads) for (let j = 0; j < rd.pts.length - 1; j++) {
      const pt = segXpt(rl.pts[i].x, rl.pts[i].y, rl.pts[i + 1].x, rl.pts[i + 1].y, rd.pts[j].x, rd.pts[j].y, rd.pts[j + 1].x, rd.pts[j + 1].y);
      if (pt) crossings.push({ x: pt.x, y: pt.y, railAng: Math.atan2(rl.pts[i + 1].y - rl.pts[i].y, rl.pts[i + 1].x - rl.pts[i].x), gate: 0, active: false });
    }
  }

  // ---- lakes (after rails so railDist works) ----
  const lakes = [];
  for (let a = 0; a < 26 && lakes.length < 5; a++) {
    const x = R.rand(0.34 * W, 0.97 * W), y = R.rand(0.14 * H, 0.86 * H), r = R.rand(170, 330);
    if (landFactor(x, y) < r / Math.min(rx, ry) + 0.06) continue;
    if (biomeAt(x, y) === 'desert') continue;
    if (railDist(x, y) < r + 120) continue;
    if (dist(x, y, shop.x, shop.y) < SAFE_R + r + 260) continue;
    if (lakes.some(L => dist(x, y, L.x, L.y) < r + L.r + 220)) continue;
    const wob = [];
    const h3 = [{ f: 2, p: R.rand(0, TAU) }, { f: 3, p: R.rand(0, TAU) }, { f: 5, p: R.rand(0, TAU) }];
    for (let i = 0; i < 28; i++) {
      const ang = (i / 28) * TAU;
      let v = 0;
      for (let k = 0; k < 3; k++) v += Math.sin(ang * h3[k].f + h3[k].p) / (k + 1.6);
      wob.push(1 + 0.17 * Math.max(-1, Math.min(1, v)));
    }
    const frozen = biomeAt(x, y) === 'winter';
    const pads = [];
    if (!frozen) for (let i = 0, n = R.randi(2, 4); i < n; i++) pads.push({ a: R.rand(0, TAU), rr: R.rand(0.2, 0.72), s: R.rand(9, 16) });
    lakes.push({ x, y, r, wob, frozen, pads, seed: R.rand(0, 9) });
  }
  const lakeAt = (x, y) => {
    for (const L of lakes) if (dist2(x, y, L.x, L.y) < L.r * L.r) return L;
    return null;
  };

  // road fade: taper at the coast AND at lake shores (roads end naturally
  // at water — never across it). Rails still get crossing pads.
  for (const rd of roads) {
    rd.fade = rd.pts.map(p => {
      const lf = landFactor(p.x, p.y);
      if (lf <= 0.015) return 0;
      let f = smooth01((lf - 0.015) / 0.05);
      for (const L of lakes) {
        const dEdge = dist(p.x, p.y, L.x, L.y) - L.r * 1.08;
        f *= smooth01((dEdge - 12) / 70);
      }
      return f;
    });
    rd.poles = rd.poles.filter(p => landFactor(p.x, p.y) > 0.03 && !lakes.some(L => dist(p.x, p.y, L.x, L.y) < L.r + 40));
  }

  // (the old dedicated straight convoy lane is gone — convoys now run a
  // random dirt road end-to-end; see vehicles.spawnConvoy)

  // ---- monuments ----
  const monuments = [];
  for (const def of MONUMENTS) {
    let x = def.fx * W, y = def.fy * H;
    for (let i = 0; i < 8 && (landFactor(x, y) < 0.12 || lakeAt(x, y)); i++) { x = x * 0.78 + cx * 0.22; y = y * 0.78 + cy * 0.22; }
    monuments.push({ type: def.type, name: def.name, x, y, r: 200, crates: def.crates, nbarrels: def.barrels, nguards: def.guards });
  }

  // ---- quarry (deterministic placement, no RNG draws) ----
  const minShopDist = SAFE_R + 240 + 700;
  let q = { x: 0.40 * W, y: 0.52 * H };
  outer: for (let ring = 0; ring < 6; ring++) {
    const radius = minShopDist + ring * 700;
    for (let s = 0; s < 16; s++) {
      const a = (s / 16) * TAU;
      const x = shop.x + Math.cos(a) * radius, y = shop.y + Math.sin(a) * radius;
      if (x < 600 || y < 600 || x > W - 600 || y > H - 600) continue;
      if (landFactor(x, y) < 0.12 || lakeAt(x, y)) continue;
      if (railDist(x, y) < 360 || pathDist(x, y) < 320) continue;
      if (dist(x, y, shop.x, shop.y) < minShopDist) continue;
      q = { x, y }; break outer;
    }
  }
  monuments.push({ type: 'quarry', name: 'Quarry', x: q.x, y: q.y, r: 170 });
  S.quarry = { x: q.x, y: q.y, r: QUARRY.capR, owner: null, capOwner: null, capT: 0, payT: 0, arm: 0, paid: 0 };

  // ---- boulders + small rocks (jungle/winter only) ----
  const boulders = [], rocks = [];
  const okRock = (x, y, r, list) => {
    if (landFactor(x, y) < 0.06 || lakeAt(x, y)) return false;
    const b = biomeAt(x, y);
    if (b !== 'jungle' && b !== 'winter') return false;
    if (dist(x, y, shop.x, shop.y) < SAFE_R + r) return false;
    for (const m of monuments) if (dist(x, y, m.x, m.y) < m.r + 240) return false;
    if (railDist(x, y) < r + 90) return false;
    for (const o of list) if (dist(x, y, o.x, o.y) < r + o.r + 44) return false;
    return true;
  };
  for (let n = 0; n < 34; n++) for (let t = 0; t < 30; t++) {
    const x = R.rand(W / 3, W - 120), y = R.rand(120, H - 120), r = R.rand(28, 42);
    if (okRock(x, y, r, boulders)) { boulders.push({ x, y, r, seed: R.rand(0, 9), winter: biomeAt(x, y) === 'winter' }); break; }
  }
  for (let n = 0; n < 72; n++) for (let t = 0; t < 18; t++) {
    const x = R.rand(W / 3, W - 100), y = R.rand(100, H - 100), r = R.rand(7, 13);
    if (okRock(x, y, r, boulders)) { rocks.push({ x, y, r, seed: R.rand(0, 9), winter: biomeAt(x, y) === 'winter' }); break; }
  }

  S.world = {
    island, islandPath, onLand, landFactor, islandRadAt, biomeAt, biomeRidge, shop,
    roads, rails, railHoriz, crossings, lakes, lakeAt, railDist, pathDist,
    monuments, boulders, rocks, flora: [], palms: [],
  };

  // ---- nodes / barrels / crates / guards / flora / animals ----
  spawnNodes(S);
  spawnMonumentLoot(S);
  spawnFlora(S);
  spawnAnimals(S);

  S.copter = { x: S.player.x + 120, y: S.player.y, angle: 0, rotor: 0, vx: 0, vy: 0, spd: 0, hp: COPTER.hp, max: COPTER.hp, destroyed: false };
}

function spawnNoOverlap(S, list, r, margin) {
  const R = S.rng;
  for (let t = 0; t < 40; t++) {
    const x = R.rand(margin, WORLD.w - margin), y = R.rand(margin, WORLD.h - margin);
    if (dist(x, y, S.player.x, S.player.y) < 220) continue;
    if (S.world.landFactor(x, y) < 0.05 || S.world.lakeAt(x, y)) continue;
    let bad = false;
    for (const o of list) if (dist(x, y, o.x, o.y) < r + o.r + 24) { bad = true; break; }
    if (!bad) return { x, y };
  }
  return null;
}

function spawnNodes(S) {
  const R = S.rng;
  const defs = [
    ['tree', 290, 22, 120, 'wood'], ['stone', 190, 26, 140, 'stone'], ['metal', 150, 24, 110, 'metal'],
  ];
  const all = [];
  for (const [type, count, r, amt, base] of defs) {
    for (let i = 0; i < count; i++) {
      const p = spawnNoOverlap(S, all, r, 90);
      if (!p) continue;
      const node = { type, x: p.x, y: p.y, r, amount: amt, max: amt, regen: 0, seed: R.rand(0, 1000), base, by: null, byT: 0 };
      all.push(node); S.resources.push(node);
    }
  }
}

function spawnMonumentLoot(S) {
  const R = S.rng;
  for (const m of S.world.monuments) {
    if (m.type === 'quarry') continue;
    for (let i = 0; i < m.crates; i++) {
      const a = R.rand(0, TAU), d = R.rand(24, 0.62 * m.r);
      S.barrels.push({ x: m.x + Math.cos(a) * d, y: m.y + Math.sin(a) * d, r: 18, hp: 45, max: 45, seed: R.rand(0, 9), tier: 'mon', crate: true, respawnT: 0 });
    }
    for (let i = 0; i < m.nbarrels; i++) {
      const a = R.rand(0, TAU), d = R.rand(0.45 * m.r, 0.95 * m.r);
      S.barrels.push({ x: m.x + Math.cos(a) * d, y: m.y + Math.sin(a) * d, r: 16, hp: 30, max: 30, seed: R.rand(0, 9), tier: 'mon', respawnT: 0 });
    }
    for (let i = 0; i < m.nguards; i++) spawnGuard(S, m);
  }
  // roadside barrels
  for (const rd of S.world.roads) {
    if (rd.convoy) continue;
    for (let i = 0; i < rd.pts.length; i += 2) {
      if (i % 4 !== 0 || !R.chance(0.7)) continue;
      const p = rd.pts[i];
      const a = R.rand(0, TAU);
      const x = clamp(p.x + Math.cos(a) * (rd.w / 2 + R.rand(16, 70)), 30, WORLD.w - 30);
      const y = clamp(p.y + Math.sin(a) * (rd.w / 2 + R.rand(16, 70)), 30, WORLD.h - 30);
      if (dist(x, y, S.world.shop.x, S.world.shop.y) < SAFE_R + 60) continue;
      if (!S.world.onLand(x, y) || S.world.lakeAt(x, y)) continue;
      S.barrels.push({ x, y, r: 16, hp: 30, max: 30, seed: R.rand(0, 9), tier: 'road', respawnT: 0 });
    }
  }
}

export function spawnGuard(S, m) {
  const R = S.rng;
  const a = R.rand(0, TAU), d = R.rand(0.35 * m.r, 0.8 * m.r);
  S.guards.push({
    mx: m.x, my: m.y, mr: m.r, x: m.x + Math.cos(a) * d, y: m.y + Math.sin(a) * d,
    hp: GUARD.hp, max: GUARD.hp, angle: R.rand(0, TAU), gunCd: R.rand(0, 0.6), dead: false, respawnT: 0,
    wpX: 0, wpY: 0, wpT: 0, hasWp: false, seed: R.rand(0, 9), vx: 0, vy: 0,
  });
}

function spawnFlora(S) {
  const R = S.rng;
  const W = WORLD.w, H = WORLD.h;
  const FLOWER_COLS = ['#d96a83', '#dbb44a', '#c46ac4', '#e8e4da', '#e08a52', '#7aa0e0'];
  for (let i = 0, n = R.randi(200, 300); i < n; i++) {
    const x = R.rand(W / 3, 2 * W / 3), y = R.rand(60, H - 60);
    if (!S.world.onLand(x, y) || S.world.lakeAt(x, y) || S.world.biomeAt(x, y) !== 'jungle') continue;
    const t = R.next();
    S.world.flora.push({ x, y, type: t < 0.4 ? 'flower' : t < 0.72 ? 'fern' : 'shrub', seed: R.rand(0, 9), col: R.pick(FLOWER_COLS) });
  }
  for (let i = 0, n = R.randi(90, 140); i < n; i++) {
    const x = R.rand(30, W / 3), y = R.rand(60, H - 60);
    if (!S.world.onLand(x, y) || S.world.lakeAt(x, y) || S.world.biomeAt(x, y) !== 'desert') continue;
    S.world.flora.push({ x, y, type: R.chance(0.5) ? 'cactus' : 'deshrub', seed: R.rand(0, 9), arms: R.randi(0, 2) });
  }
  // palms: jungle shoreline + dry desert palms
  for (let i = 0; i < S.world.islandPath.length; i += 2) {
    const p = S.world.islandPath[i];
    const x = S.world.island.cx + (p.x - S.world.island.cx) * 0.93;
    const y = S.world.island.cy + (p.y - S.world.island.cy) * 0.93;
    if (S.world.biomeAt(x, y) === 'jungle' && R.chance(0.34)) S.world.palms.push({ x, y, seed: R.rand(0, 9) });
  }
  for (let i = 0, n = R.randi(10, 16); i < n; i++) {
    const x = R.rand(40, W / 3 - 20), y = R.rand(80, H - 80);
    if (S.world.biomeAt(x, y) === 'desert' && S.world.onLand(x, y) && !S.world.lakeAt(x, y)) S.world.palms.push({ x, y, seed: R.rand(0, 9), desert: true });
  }
}

function spawnAnimals(S) {
  const R = S.rng;
  const W = WORLD.w, H = WORLD.h;
  const bandOf = (biome) => biome === 'desert' ? [0, W / 3] : biome === 'jungle' ? [W / 3, 2 * W / 3] : biome === 'winter' ? [2 * W / 3, W] : [0, W];
  const placed = [];
  for (const [type, count] of ANIMAL_SPAWNS) {
    const def = ANIMALS[type];
    for (let i = 0; i < count; i++) {
      const leader = spawnOneAnimal(S, type, def, bandOf(def.biome), placed, null);
      if (leader && def.pack && R.chance(0.45)) {
        for (let p = 0, n = R.randi(1, 2); p < n; p++) spawnOneAnimal(S, type, def, bandOf(def.biome), placed, leader);
      }
    }
  }
}

function spawnOneAnimal(S, type, def, band, placed, leader) {
  const R = S.rng;
  for (let t = 0; t < 40; t++) {
    let x, y, lake = leader ? leader.lake : null;
    if (leader) { x = leader.x + R.rand(-150, 150); y = leader.y + R.rand(-150, 150); }
    else if (def.lake) {
      const lakes = S.world.lakes.filter(L => !L.frozen || def.biome !== 'jungle');
      if (!lakes.length) return null;
      lake = R.pick(lakes);
      const a = R.rand(0, TAU), d = lake.r + R.rand(30, 200);
      x = lake.x + Math.cos(a) * d; y = lake.y + Math.sin(a) * d;
    } else { x = R.rand(band[0], band[1]); y = R.rand(90, WORLD.h - 90); }
    x = clamp(x, band[0] - 70, band[1] + 70); y = clamp(y, 90, WORLD.h - 90);
    if (dist(x, y, S.player.x, S.player.y) < 220) continue;
    if (dist(x, y, S.world.shop.x, S.world.shop.y) < SAFE_R + 200) continue; // never near the safe zone
    if (S.world.landFactor(x, y) < 0.05) continue;
    if (S.world.lakeAt(x, y) && !def.lake) continue;
    let bad = false;
    for (const o of placed) if (dist(x, y, o.x, o.y) < def.r + o.r + 8) { bad = true; break; }
    if (bad) continue;
    const a = {
      type, x, y, vx: 0, vy: 0, r: def.r, hp: def.hp, max: def.hp, aggro: null, atkcd: 0, hit: 0,
      wanderT: R.rand(0, 2), dir: R.rand(0, TAU), respawnT: 0, hostile: R.chance(0.1), foe: null,
      lake, pauseT: 0, stuckT: 0, blockedAll: 0, dead: false, avoidT: 0, avoidA: 0,
    };
    placed.push(a); S.animals.push(a);
    return a;
  }
  return null;
}
