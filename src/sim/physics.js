// Collision + line-of-sight queries shared by player, AI, animals, combat.
import { TILE, WORLD, SAFE_R, MON_NOBUILD, HEAD_R } from './config.js';
import { gkey, ekey, ptSeg, segSeg, dist2 } from './util.js';
import { maskHit } from './nav.js';

export function wallSegOf(key, w) {
  const p = key.split(',');
  const gx = +p[1], gy = +p[2];
  if (p[0] === 'V') return [gx * TILE, gy * TILE, gx * TILE, (gy + 1) * TILE];
  if (p[0] === 'H') return [gx * TILE, gy * TILE, (gx + 1) * TILE, gy * TILE];
  // D: diagonal across the cell, rot 0 = '\', rot 1 = '/'
  if (w && w.rot === 1) return [gx * TILE, (gy + 1) * TILE, (gx + 1) * TILE, gy * TILE];
  return [gx * TILE, gy * TILE, (gx + 1) * TILE, (gy + 1) * TILE];
}

// iterate wall keys that could touch cell (gx,gy)
const CELL_KEYS = (gx, gy) => [
  ekey('V', gx, gy), ekey('V', gx + 1, gy), ekey('H', gx, gy), ekey('H', gx, gy + 1), ekey('D', gx, gy),
];

export function eachWallNear(S, x, y, r, fn) {
  const g0x = Math.floor((x - r) / TILE), g1x = Math.floor((x + r) / TILE);
  const g0y = Math.floor((y - r) / TILE), g1y = Math.floor((y + r) / TILE);
  for (let gy = g0y; gy <= g1y; gy++) for (let gx = g0x; gx <= g1x; gx++) {
    for (const k of CELL_KEYS(gx, gy)) {
      const w = S.walls.get(k);
      if (w && w.hp > 0) { if (fn(k, w) === true) return true; }
    }
  }
  return false;
}

export function wallNear(S, x, y, r, opts = {}) {
  return eachWallNear(S, x, y, r + 8, (k, w) => {
    if (w.type === 'door' && (w.open || (opts.passOwner && w.lock && w.lock.by === opts.passOwner && opts.openDoors))) return false;
    if (w.type === 'door' && w.open) return false;
    const s = wallSegOf(k, w);
    if (ptSeg(x, y, s[0], s[1], s[2], s[3]) < r + 6) return true;
  });
}

export function isSolidAt(S, x, y, passOwner) {
  const d = S.deploys.get(gkey(Math.floor(x / TILE), Math.floor(y / TILE)));
  if (!d) return false;
  if (passOwner && d.type === 'cupboard' && d.owner === passOwner) return false;
  return d.type === 'turret' || d.type === 'cupboard' || d.type === 'box';
}

export function circleHitsSolid(S, x, y, r, passOwner) {
  if (isSolidAt(S, x, y, passOwner)) return true;
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    if (isSolidAt(S, x + Math.cos(a) * r, y + Math.sin(a) * r, passOwner)) return true;
  }
  return false;
}

export function boulderBlocks(S, x, y, r) {
  for (const b of S.world.boulders) if (dist2(x, y, b.x, b.y) < (r + b.r) * (r + b.r)) return true;
  return false;
}
export function boulderAt(S, x, y) {
  for (const b of S.world.boulders) if (dist2(x, y, b.x, b.y) < (b.r + 12) * (b.r + 12)) return b;
  return null;
}
export function boulderLine(S, x0, y0, x1, y1) {
  for (const b of S.world.boulders) if (ptSeg(b.x, b.y, x0, y0, x1, y1) < b.r) return true;
  return false;
}

export function fenceBlocks(S, x, y, r) {
  for (const f of S.fences) {
    if (f.hp <= 0) continue;
    if (ptSeg(x, y, f.x0, f.y0, f.x1, f.y1) < r + 4) return f;
  }
  return null;
}

// Master movement-blocking test.
export function blocked(S, x, y, r, opts = {}) {
  if (!S.world.onLand(x, y)) return true;
  if (boulderBlocks(S, x, y, r)) return true;
  if (!maskHit(S, x, y)) return false; // nothing built anywhere near
  if (circleHitsSolid(S, x, y, r, opts.passOwner)) return true;
  if (fenceBlocks(S, x, y, r)) return true;
  let hit = false;
  eachWallNear(S, x, y, r + 8, (k, w) => {
    if (w.type === 'door' && w.open) return false;
    if (w.type === 'door' && opts.openOwnDoors && w.lock && w.lock.by === opts.passOwner) {
      // walking into an own closed door opens it
      w.open = true; w.closeT = S.t + 1.0; S.nav.stamp++;
      return false;
    }
    const s = wallSegOf(k, w);
    // movement uses a slimmer reach (r+4) than bullets/LOS so doorway
    // corridors between jamb end-caps stay comfortably walkable
    if (ptSeg(x, y, s[0], s[1], s[2], s[3]) < r + 4) { hit = true; return true; }
  });
  return hit;
}

// View/bullet blocking: closed walls + closed doors cross test along a segment.
export function wallBlocksView(S, x0, y0, x1, y1) {
  const minx = Math.min(x0, x1) - TILE, maxx = Math.max(x0, x1) + TILE;
  const miny = Math.min(y0, y1) - TILE, maxy = Math.max(y0, y1) + TILE;
  const g0x = Math.floor(minx / TILE), g1x = Math.floor(maxx / TILE);
  const g0y = Math.floor(miny / TILE), g1y = Math.floor(maxy / TILE);
  // walk cells along the segment instead of the full bounding box when long
  const len = Math.hypot(x1 - x0, y1 - y0);
  if (len > TILE * 3) {
    const steps = Math.ceil(len / (TILE * 0.5));
    const seen = new Set();
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const gx = Math.floor((x0 + (x1 - x0) * t) / TILE), gy = Math.floor((y0 + (y1 - y0) * t) / TILE);
      const id = gx * 10007 + gy;
      if (seen.has(id)) continue;
      seen.add(id);
      for (const k of CELL_KEYS(gx, gy)) {
        const w = S.walls.get(k);
        if (!w || w.hp <= 0 || (w.type === 'door' && w.open)) continue;
        const s = wallSegOf(k, w);
        if (segSeg(x0, y0, x1, y1, s[0], s[1], s[2], s[3])) return true;
      }
    }
    return false;
  }
  for (let gy = g0y; gy <= g1y; gy++) for (let gx = g0x; gx <= g1x; gx++) {
    for (const k of CELL_KEYS(gx, gy)) {
      const w = S.walls.get(k);
      if (!w || w.hp <= 0 || (w.type === 'door' && w.open)) continue;
      const s = wallSegOf(k, w);
      if (segSeg(x0, y0, x1, y1, s[0], s[1], s[2], s[3])) return true;
    }
  }
  return false;
}

export function inSafeZone(S, x, y) {
  return dist2(x, y, S.world.shop.x, S.world.shop.y) < SAFE_R * SAFE_R;
}
export function inMonZone(S, x, y) {
  for (const m of S.world.monuments) if (dist2(x, y, m.x, m.y) < MON_NOBUILD * MON_NOBUILD) return m;
  return null;
}

// Head-shot: bullet path segment passes within HEAD_R of body center.
export function segHitsHead(cx, cy, b) {
  return ptSeg(cx, cy, b.px, b.py, b.x, b.y) < HEAD_R;
}

// Axis-separated circle mover with push-out (player + animals + simple movers).
export function moveCircle(S, e, nx, ny, r, opts) {
  let movedX = false, movedY = false;
  if (!blocked(S, nx, e.y, r, opts)) { e.x = nx; movedX = true; }
  if (!blocked(S, e.x, ny, r, opts)) { e.y = ny; movedY = true; }
  e.x = Math.min(WORLD.w - 12, Math.max(12, e.x));
  e.y = Math.min(WORLD.h - 12, Math.max(12, e.y));
  return movedX || movedY;
}
