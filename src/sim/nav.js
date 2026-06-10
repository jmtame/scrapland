// Navigation: one fine grid at TILE (64 px) resolution over the whole map
// (216×144 = 31k cells). Walls/doors block EDGES between cells, so paths are
// exact around and through bases — this replaces v1's Bug2 wall-following,
// door hysteresis, committed arcs and teleport unstickers entirely.
import { TILE, WORLD } from './config.js';
import { gkey, ekey, clamp } from './util.js';

const COLS = Math.ceil(WORLD.w / TILE);
const ROWS = Math.ceil(WORLD.h / TILE);
const N = COLS * ROWS;

export function buildNav(S) {
  const terrain = new Uint8Array(N);   // 1 = hard blocked (ocean/boulder/diag)
  const cost = new Float32Array(N);    // movement cost multiplier
  for (let gy = 0; gy < ROWS; gy++) {
    for (let gx = 0; gx < COLS; gx++) {
      const x = gx * TILE + TILE / 2, y = gy * TILE + TILE / 2;
      const i = gy * COLS + gx;
      let c = 1;
      if (!S.world.onLand(x, y)) { terrain[i] = 1; cost[i] = 1; continue; }
      const lake = S.world.lakeAt(x, y);
      if (lake) c = lake.frozen ? 1.15 : 3.0;     // wade is slow; prefer around
      for (const b of S.world.boulders) {
        if ((x - b.x) * (x - b.x) + (y - b.y) * (y - b.y) < (b.r + 18) * (b.r + 18)) { terrain[i] = 1; break; }
      }
      if (S.world.pathDist(x, y) < 26) c = Math.min(c, 0.85); // roads feel natural
      cost[i] = c;
    }
  }
  S.nav = {
    COLS, ROWS, N, terrain, cost,
    stamp: 1,                       // bumped whenever walls/deploys/fences change
    penalty: new Map(),             // cellIdx -> expireT (anti-loop cost bump)
    g: new Float32Array(N), came: new Int32Array(N),
    vis: new Int32Array(N), gen: 0,
    heap: new Int32Array(N + 1), heapF: new Float32Array(N + 1),
  };
}

export const cellIdx = (gx, gy) => (gx < 0 || gy < 0 || gx >= COLS || gy >= ROWS) ? -1 : gy * COLS + gx;

function deployBlocked(S, gx, gy, owner) {
  const d = S.deploys.get(gkey(gx, gy));
  if (!d) return false;
  if (d.type === 'cupboard') return d.owner !== owner;
  return true; // turret/box solid for everyone
}

function cellPass(S, gx, gy, owner) {
  const i = cellIdx(gx, gy);
  if (i < 0 || S.nav.terrain[i]) return false;
  if (S.walls.has('D,' + gx + ',' + gy)) return false; // diagonal wall: treat cell solid
  if (deployBlocked(S, gx, gy, owner)) return false;
  if (S.nav.fenceCells && S.nav.fenceCells.has(i)) return false;
  return true;
}

// Edge between two orthogonally adjacent cells. Returns 0 free, 1 door (own), 2 blocked.
export function edgeState(S, gx, gy, nx, ny, owner) {
  let k;
  if (nx > gx) k = ekey('V', nx, gy);
  else if (nx < gx) k = ekey('V', gx, gy);
  else if (ny > gy) k = ekey('H', gx, ny);
  else k = ekey('H', gx, gy);
  const w = S.walls.get(k);
  if (!w || w.hp <= 0) return 0;
  if (w.type === 'door') {
    if (w.open) return 1;
    if (w.lock && w.lock.by === owner) return 1;
    return 2;
  }
  return 2;
}

function stepOk(S, gx, gy, nx, ny, owner) {
  if (!cellPass(S, nx, ny, owner)) return -1;
  const e = edgeState(S, gx, gy, nx, ny, owner);
  if (e === 2) return -1;
  return e; // 0 or 1(door)
}

function cellCost(S, i, t) {
  let c = S.nav.cost[i];
  const p = S.nav.penalty.get(i);
  if (p !== undefined) { if (p > t) c += 6; else S.nav.penalty.delete(i); }
  return c;
}

export function addPenalty(S, x, y, dur = 12) {
  const i = cellIdx(Math.floor(x / TILE), Math.floor(y / TILE));
  if (i >= 0) S.nav.penalty.set(i, S.t + dur);
}

// Coarse 256-px mask: does this region contain ANY wall/deploy/fence?
// Lets collision skip wall scans across the (mostly empty) open world.
const MASK_CS = 256;
const MCOLS = Math.ceil(WORLD.w / MASK_CS), MROWS = Math.ceil(WORLD.h / MASK_CS);
export function wallMask(S) {
  const nav = S.nav;
  if (nav.maskStamp === nav.stamp && nav.mask) return nav.mask;
  const mask = nav.mask && nav.maskStamp !== undefined ? nav.mask.fill(0) : new Uint8Array(MCOLS * MROWS);
  const mark = (x, y) => {
    const mx = (x / MASK_CS) | 0, my = (y / MASK_CS) | 0;
    for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
      const i = (my + dy) * MCOLS + (mx + dx);
      if (mx + dx >= 0 && my + dy >= 0 && mx + dx < MCOLS && my + dy < MROWS) mask[i] = 1;
    }
  };
  for (const k of S.walls.keys()) {
    const p = k.split(',');
    mark(+p[1] * TILE, +p[2] * TILE);
  }
  for (const k of S.deploys.keys()) {
    const p = k.split(',');
    mark(+p[0] * TILE, +p[1] * TILE);
  }
  for (const f of S.fences) mark(f.x, f.y);
  nav.mask = mask;
  nav.maskStamp = nav.stamp;
  return mask;
}
export function maskHit(S, x, y) {
  const m = wallMask(S);
  const i = ((y / MASK_CS) | 0) * MCOLS + ((x / MASK_CS) | 0);
  return m[i] === 1;
}

// Rebuild the dynamic fence-cell set (called on fence add/remove).
export function refreshFenceCells(S) {
  const set = new Set();
  for (const f of S.fences) set.add(cellIdx(Math.floor(f.x / TILE), Math.floor(f.y / TILE)));
  S.nav.fenceCells = set;
  S.nav.stamp++;
}

export function nearestOpen(S, gx, gy, owner) {
  if (cellPass(S, gx, gy, owner)) return { gx, gy };
  for (let r = 1; r <= 8; r++) {
    for (let dy = -r; dy <= r; dy++) for (let dx = -r; dx <= r; dx++) {
      if (Math.max(Math.abs(dx), Math.abs(dy)) !== r) continue;
      if (cellPass(S, gx + dx, gy + dy, owner)) return { gx: gx + dx, gy: gy + dy };
    }
  }
  return null;
}

// ---- binary heap on f ----
function heapPush(nav, i, f) {
  let n = ++nav.heapN;
  const H = nav.heap, HF = nav.heapF;
  while (n > 1) {
    const p = n >> 1;
    if (HF[p] <= f) break;
    H[n] = H[p]; HF[n] = HF[p]; n = p;
  }
  H[n] = i; HF[n] = f;
}
function heapPop(nav) {
  const H = nav.heap, HF = nav.heapF;
  const top = H[1];
  const li = H[nav.heapN], lf = HF[nav.heapN--];
  let n = 1;
  while (true) {
    let c = n << 1;
    if (c > nav.heapN) break;
    if (c + 1 <= nav.heapN && HF[c + 1] < HF[c]) c++;
    if (HF[c] >= lf) break;
    H[n] = H[c]; HF[n] = HF[c]; n = c;
  }
  H[n] = li; HF[n] = lf;
  return top;
}

const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];

// A* from world (sx,sy) to (tx,ty) honoring walls/doors for `owner`.
// Returns array of waypoints [{x,y,door?}] or null.
export function findPath(S, owner, sx, sy, tx, ty, maxIterOpt) {
  const nav = S.nav;
  let sgx = clamp(Math.floor(sx / TILE), 0, COLS - 1), sgy = clamp(Math.floor(sy / TILE), 0, ROWS - 1);
  let tgx = clamp(Math.floor(tx / TILE), 0, COLS - 1), tgy = clamp(Math.floor(ty / TILE), 0, ROWS - 1);
  const sFix = nearestOpen(S, sgx, sgy, owner); if (!sFix) return null;
  const tFix = nearestOpen(S, tgx, tgy, owner); if (!tFix) return null;
  sgx = sFix.gx; sgy = sFix.gy; tgx = tFix.gx; tgy = tFix.gy;
  if (sgx === tgx && sgy === tgy) return [{ x: tx, y: ty }];

  const gen = ++nav.gen;
  nav.heapN = 0;
  const start = sgy * COLS + sgx, goal = tgy * COLS + tgx;
  nav.vis[start] = gen; nav.g[start] = 0; nav.came[start] = -1;
  heapPush(nav, start, 0);
  const distTiles = Math.max(Math.abs(tgx - sgx), Math.abs(tgy - sgy));
  const maxIter = maxIterOpt || Math.min(26000, 3000 + distTiles * 90);
  let iter = 0, found = false;

  while (nav.heapN > 0 && iter++ < maxIter) {
    const cur = heapPop(nav);
    if (cur === goal) { found = true; break; }
    const cgx = cur % COLS, cgy = (cur / COLS) | 0;
    const cg = nav.g[cur];
    for (let d = 0; d < 8; d++) {
      const dx = DIRS[d][0], dy = DIRS[d][1];
      const ngx = cgx + dx, ngy = cgy + dy;
      const ni = cellIdx(ngx, ngy);
      if (ni < 0) continue;
      let doorCost = 0;
      if (d < 4) {
        const st = stepOk(S, cgx, cgy, ngx, ngy, owner);
        if (st < 0) continue;
        if (st === 1) doorCost = 2;
      } else {
        // diagonal: both orthogonal lanes must be fully open (no corner cutting, no door diagonals)
        if (stepOk(S, cgx, cgy, cgx + dx, cgy, owner) !== 0) continue;
        if (stepOk(S, cgx, cgy, cgx, cgy + dy, owner) !== 0) continue;
        if (stepOk(S, cgx + dx, cgy, ngx, ngy, owner) !== 0) continue;
        if (stepOk(S, cgx, cgy + dy, ngx, ngy, owner) !== 0) continue;
      }
      const step = (d < 4 ? 1 : 1.41421) * cellCost(S, ni, S.t) + doorCost;
      const ng = cg + step;
      if (nav.vis[ni] === gen && nav.g[ni] <= ng) continue;
      nav.vis[ni] = gen; nav.g[ni] = ng; nav.came[ni] = cur;
      const hdx = Math.abs(ngx - tgx), hdy = Math.abs(ngy - tgy);
      const h = (Math.max(hdx, hdy) + 0.41421 * Math.min(hdx, hdy)) * 0.85;
      heapPush(nav, ni, ng + h);
    }
  }
  if (!found) return null;

  // reconstruct (cell centers), mark door crossings
  const rev = [];
  let cur = goal;
  while (cur !== -1) { rev.push(cur); cur = nav.came[cur]; }
  rev.reverse();
  const pts = [];
  for (let i = 0; i < rev.length; i++) {
    const gx = rev[i] % COLS, gy = (rev[i] / COLS) | 0;
    let door = false;
    if (i > 0) {
      const pgx = rev[i - 1] % COLS, pgy = (rev[i - 1] / COLS) | 0;
      if (Math.abs(gx - pgx) + Math.abs(gy - pgy) === 1) door = edgeState(S, pgx, pgy, gx, gy, owner) === 1;
    }
    pts.push({ x: gx * TILE + TILE / 2, y: gy * TILE + TILE / 2, door });
  }
  pts[pts.length - 1] = { x: tx, y: ty, door: pts[pts.length - 1].door };

  // string-pull between pinned (door) points using full LOS
  const out = [pts[0]];
  let anchor = 0;
  for (let i = 1; i < pts.length; i++) {
    if (pts[i].door || i === pts.length - 1) {
      // greedy pull from anchor to i
      let a = anchor;
      while (a < i) {
        let far = a + 1;
        for (let j = i; j > a; j--) {
          if (pts[j].door && j !== i) continue;
          if (losMove(S, owner, pts[a].x, pts[a].y, pts[j].x, pts[j].y)) { far = j; break; }
        }
        out.push(pts[far]);
        a = far;
      }
      anchor = i;
    }
  }
  // drop the leading start-cell center when the second point is directly
  // reachable from the TRUE position — units strafe/drift between plans and
  // must never be sent backward into a corner they've already left.
  if (out.length > 1 && !out[0].door && losMove(S, owner, sx, sy, out[1].x, out[1].y)) out.shift();
  return out;
}

// LOS for MOVEMENT smoothing: blocked by terrain cells, walls/closed doors
// (not the mover's own doors — those stay pinned waypoints), solid deploys.
export function losMove(S, owner, x0, y0, x1, y1) {
  const d = Math.hypot(x1 - x0, y1 - y0);
  const steps = Math.max(1, Math.ceil(d / (TILE * 0.4)));
  let pgx = Math.floor(x0 / TILE), pgy = Math.floor(y0 / TILE);
  for (let i = 1; i <= steps; i++) {
    const t = i / steps;
    const x = x0 + (x1 - x0) * t, y = y0 + (y1 - y0) * t;
    const gx = Math.floor(x / TILE), gy = Math.floor(y / TILE);
    if (gx === pgx && gy === pgy) continue;
    if (!cellPass(S, gx, gy, owner)) return false;
    // crossing one or two edges
    if (gx !== pgx && gy !== pgy) {
      if (stepOk(S, pgx, pgy, gx, pgy, owner) !== 0 || stepOk(S, gx, pgy, gx, gy, owner) !== 0) return false;
      if (stepOk(S, pgx, pgy, pgx, gy, owner) !== 0 || stepOk(S, pgx, gy, gx, gy, owner) !== 0) return false;
    } else if (edgeState(S, pgx, pgy, gx, gy, owner) !== 0) return false;
    pgx = gx; pgy = gy;
  }
  return true;
}

// Terrain-only LOS (lake/ocean/boulder), for gather scoring etc.
export function losTerrain(S, x0, y0, x1, y1) {
  const d = Math.hypot(x1 - x0, y1 - y0);
  const steps = Math.max(1, Math.ceil(d / (TILE * 0.5)));
  for (let i = 1; i <= steps; i++) {
    const t = i / steps;
    const i2 = cellIdx(Math.floor((x0 + (x1 - x0) * t) / TILE), Math.floor((y0 + (y1 - y0) * t) / TILE));
    if (i2 < 0 || S.nav.terrain[i2]) return false;
  }
  return true;
}
