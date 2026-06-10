// Entity sprites — redrawn for the gritty look: material textures, wear,
// rim shading, team trims. Sizes/conditions preserved from v1 spec.
import { TILE, PLAYER_R, SAFE_R, MON_NOBUILD, GUARD, TTIER, ARMOR, REPAIR_LOCK, HIT_LOCK } from '../../sim/config.js';
import { wallSegOf } from '../../sim/physics.js';
import { PAL, matCols, rrect, fillRR, vgrad, rgrad, shadow, blob, poly, hpRing } from './palette.js';

const TAU = Math.PI * 2;

// ---- lakes ----
export function drawLake(ctx, S, L) {
  const t = S.t;
  ctx.save();
  ctx.translate(L.x, L.y);
  const path = () => {
    ctx.beginPath();
    for (let i = 0; i <= 28; i++) {
      const a = (i / 28) * TAU;
      const r = L.r * L.wob[i % 28];
      const px = Math.cos(a) * r, py = Math.sin(a) * r * 0.84;
      i ? ctx.lineTo(px, py) : ctx.moveTo(px, py);
    }
    ctx.closePath();
  };
  // bank
  ctx.save();
  ctx.scale(L.frozen ? 1.07 : 1.06, L.frozen ? 1.07 : 1.06);
  path();
  ctx.fillStyle = L.frozen ? 'rgba(238,246,251,.95)' : 'rgba(96,118,66,.7)';
  ctx.fill();
  ctx.restore();
  path();
  if (L.frozen) {
    const g = ctx.createRadialGradient(0, -0.35 * L.r, L.r * 0.1, 0, 0, L.r * 1.1);
    g.addColorStop(0, '#dfeaf2');
    g.addColorStop(1, '#96b2c8');
    ctx.fillStyle = g;
    ctx.fill();
    ctx.save(); path(); ctx.clip();
    ctx.fillStyle = 'rgba(255,255,255,0.28)';
    ctx.beginPath(); ctx.ellipse(-0.3 * L.r, -0.3 * L.r, 0.34 * L.r, 0.18 * L.r, -0.5, 0, TAU); ctx.fill();
    for (let i = 0; i < 9; i++) {
      if (Math.sin(t * 1.6 + i * 1.7 + L.seed * 3) > 0.62) {
        const sx = Math.sin(i * 37.7 + L.seed) * L.r * 0.6, sy = Math.cos(i * 21.3) * L.r * 0.5;
        ctx.fillStyle = 'rgba(255,255,255,.9)';
        ctx.beginPath(); ctx.arc(sx, sy, 1.5, 0, TAU); ctx.fill();
        ctx.fillStyle = 'rgba(255,255,255,.25)';
        ctx.beginPath(); ctx.arc(sx, sy, 3.4, 0, TAU); ctx.fill();
      }
    }
    ctx.restore();
  } else {
    const g = ctx.createRadialGradient(0, -0.3 * L.r, L.r * 0.1, 0, 0, L.r);
    g.addColorStop(0, '#33687c');
    g.addColorStop(1, '#0c2531');
    ctx.fillStyle = g;
    ctx.fill();
    ctx.save(); path(); ctx.clip();
    // moving sheen
    ctx.fillStyle = 'rgba(190,225,238,0.13)';
    ctx.beginPath();
    ctx.ellipse(Math.sin(t * 0.4 + L.seed) * L.r * 0.1 - L.r * 0.05, -0.28 * L.r, 0.32 * L.r, 0.15 * L.r, -0.3, 0, TAU);
    ctx.fill();
    // ripple rings
    for (let i = 0; i < 2; i++) {
      const ph = ((t * 0.14 + i * 0.5 + L.seed * 0.1) % 1);
      ctx.strokeStyle = `rgba(180,215,228,${0.12 * (1 - ph)})`;
      ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.arc(0, 0, L.r * 0.25 + ph * L.r * 0.6, 0, TAU); ctx.stroke();
    }
    for (const pad of L.pads) {
      const px = Math.cos(pad.a) * L.r * pad.rr, py = Math.sin(pad.a) * L.r * pad.rr * 0.84;
      ctx.fillStyle = '#41763c';
      ctx.beginPath(); ctx.ellipse(px, py, pad.s, pad.s * 0.8, pad.a, 0, TAU); ctx.fill();
      ctx.fillStyle = '#335f2f';
      ctx.beginPath(); ctx.moveTo(px, py);
      ctx.arc(px, py, pad.s, pad.a + 0.4, pad.a + 0.7);
      ctx.closePath(); ctx.fill();
    }
    ctx.restore();
  }
  ctx.restore();
}

// ---- nodes (3 discrete stages) ----
export const nodeStep = (f) => f > 0.66 ? 1 : f > 0.33 ? 0.62 : 0.3;

export function drawNode(ctx, S, n) {
  const stepv = nodeStep(n.amount / n.max);
  const t = S.t;
  if (n.type === 'tree') {
    const sc = 0.5 + 0.5 * stepv;
    const sway = Math.sin(t * 1.5 + n.seed) * 2.6;
    shadow(ctx, n.x, n.y + 6, n.r * 1.2 * sc);
    fillRR(ctx, n.x - 4, n.y - 8, 8, 16, 3, '#5d3f20');
    ctx.fillStyle = '#3c2a12';
    ctx.fillRect(n.x - 4, n.y - 8, 3, 16);
    const R = n.r * 1.35 * sc;
    for (const [rr, c0, c1, dy] of [[R + 3, '#3d5526', '#1f2c12', 0], [R, '#4b6a31', '#2a3d18', -3], [R * 0.66, '#6f944c', '#3f5a2a', -6]]) {
      ctx.fillStyle = rgrad(ctx, n.x + sway * 0.4, n.y - 14 + dy, rr, c0, c1);
      blob(ctx, n.x + sway * 0.4, n.y - 14 + dy, rr, n.seed);
      ctx.fill();
    }
    ctx.globalAlpha = 0.5;
    ctx.fillStyle = '#92b863';
    blob(ctx, n.x + sway * 0.5 - R * 0.22, n.y - 20 - R * 0.2, R * 0.26, n.seed + 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  } else if (n.type === 'stone') {
    const sc = 0.55 + 0.45 * stepv;
    shadow(ctx, n.x, n.y + 4, n.r * sc);
    ctx.fillStyle = PAL.stoneDk;
    poly(ctx, n.x + 1.5, n.y + 2.5, n.r * sc, 6, n.seed); ctx.fill();
    ctx.fillStyle = rgrad(ctx, n.x, n.y, n.r * sc, '#9aa1a8', '#565c63');
    poly(ctx, n.x, n.y, n.r * sc, 6, n.seed); ctx.fill();
    ctx.globalAlpha = 0.85;
    ctx.fillStyle = PAL.stoneLt;
    poly(ctx, n.x - n.r * sc * 0.12, n.y - n.r * sc * 0.18, n.r * sc * 0.55, 5, n.seed + 1); ctx.fill();
    ctx.globalAlpha = 1;
  } else {
    const sc = 0.55 + 0.45 * stepv;
    shadow(ctx, n.x, n.y + 4, n.r * sc);
    ctx.fillStyle = '#4e3f23';
    poly(ctx, n.x + 1.5, n.y + 2.5, n.r * sc, 6, n.seed); ctx.fill();
    ctx.fillStyle = rgrad(ctx, n.x, n.y, n.r * sc, '#8d774a', '#54462a');
    poly(ctx, n.x, n.y, n.r * sc, 6, n.seed); ctx.fill();
    ctx.fillStyle = '#b09657';
    poly(ctx, n.x - n.r * sc * 0.1, n.y - n.r * sc * 0.15, n.r * sc * 0.5, 5, n.seed + 1); ctx.fill();
    for (let i = 0; i < 6; i++) {
      const a = i * 1.047 + n.seed;
      const gx = n.x + Math.cos(a) * n.r * sc * 0.45, gy = n.y + Math.sin(a) * n.r * sc * 0.4;
      ctx.fillStyle = rgrad(ctx, gx, gy, 2.6, '#ffc46a', '#d27c28');
      ctx.beginPath(); ctx.arc(gx, gy, 2.4, 0, TAU); ctx.fill();
      if (Math.sin(t * 3 + i * 2.1 + n.seed) > 0.55) {
        ctx.fillStyle = 'rgba(255,246,210,.9)';
        ctx.beginPath(); ctx.arc(gx - 0.5, gy - 0.5, 1.6, 0, TAU); ctx.fill();
      }
    }
  }
}

// ---- barrels / crates ----
export function drawBarrel(ctx, S, o) {
  shadow(ctx, o.x, o.y + o.r * 0.6, o.r * 1.1);
  if (o.crate) {
    const r = o.r;
    ctx.save(); ctx.translate(o.x, o.y);
    fillRR(ctx, -r, -r, 2 * r, 2 * r, 4, '#3a2a14');
    ctx.fillStyle = vgrad(ctx, 0, -r + 2, 0, 2 * r - 4, '#8a6230', '#54391b');
    rrect(ctx, -r + 2, -r + 2, 2 * r - 4, 2 * r - 4, 3); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,.08)';
    ctx.fillRect(-r + 2, -r + 2, 2 * r - 4, 5);
    ctx.fillStyle = '#bd9450';
    ctx.fillRect(-r, -3, 2 * r, 6);
    fillRR(ctx, -4, -4, 8, 8, 1.5, '#c6cdc6');
    ctx.fillStyle = '#1e1812';
    ctx.fillRect(-1.4, -3, 2.8, 6);
    ctx.restore();
    hpRing(ctx, o.x, o.y, o.r + 5, o.hp / o.max, '#caa15f');
  } else {
    const bw = 1.55 * o.r, bh = 2.05 * o.r;
    ctx.save(); ctx.translate(o.x, o.y);
    ctx.fillStyle = vgrad(ctx, 0, -bh / 2, 0, bh, '#a44f2e', '#5c2814');
    rrect(ctx, -bw / 2, -bh / 2, bw, bh, 0.34 * bw); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,.10)';
    ctx.fillRect(-bw / 2 + 2, -bh / 2 + 3, bw * 0.3, bh - 6);
    ctx.strokeStyle = '#caa14a'; ctx.lineWidth = 2.4;
    for (const dy of [-0.24 * bh, 0.24 * bh]) {
      ctx.beginPath(); ctx.moveTo(-bw / 2, dy); ctx.lineTo(bw / 2, dy); ctx.stroke();
    }
    ctx.strokeStyle = '#401f0e'; ctx.lineWidth = 1.6;
    rrect(ctx, -bw / 2, -bh / 2, bw, bh, 0.34 * bw); ctx.stroke();
    ctx.fillStyle = rgrad(ctx, 0, -bh / 2 + 3, bw * 0.3, '#d8ad62', '#8a6630');
    ctx.beginPath(); ctx.ellipse(0, -bh / 2 + 4, bw * 0.25, bw * 0.13, 0, 0, TAU); ctx.fill();
    ctx.restore();
    hpRing(ctx, o.x, o.y, o.r + 6, o.hp / o.max, '#d2664a');
  }
}

// ---- boulders / rocks / palms / flora ----
export function drawBoulder(ctx, b) {
  shadow(ctx, b.x, b.y + b.r * 0.5, b.r * 1.15);
  const c0 = b.winter ? '#c2ccd4' : '#8b9197', c1 = b.winter ? '#7e8c98' : '#4f545a';
  ctx.fillStyle = '#33363b';
  poly(ctx, b.x + 2, b.y + 3, b.r, 7, b.seed); ctx.fill();
  ctx.fillStyle = rgrad(ctx, b.x, b.y, b.r, c0, c1);
  poly(ctx, b.x, b.y, b.r, 7, b.seed); ctx.fill();
  ctx.globalAlpha = 0.7;
  ctx.fillStyle = b.winter ? '#e8eff5' : '#a9b0b6';
  poly(ctx, b.x - b.r * 0.18, b.y - b.r * 0.22, b.r * 0.5, 5, b.seed + 3); ctx.fill();
  ctx.globalAlpha = 1;
  if (b.winter) {
    ctx.fillStyle = 'rgba(240,248,253,.75)';
    blob(ctx, b.x - b.r * 0.1, b.y - b.r * 0.45, b.r * 0.42, b.seed); ctx.fill();
  }
}
export function drawRock(ctx, r2) {
  const c0 = r2.winter ? '#dfe7ee' : '#878d95', c1 = r2.winter ? '#b4c5d2' : '#5d626a';
  ctx.fillStyle = c1;
  ctx.beginPath(); ctx.ellipse(r2.x + 0.7, r2.y + 1, r2.r, r2.r * 0.8, 0.3, 0, TAU); ctx.fill();
  ctx.fillStyle = c0;
  ctx.beginPath(); ctx.ellipse(r2.x, r2.y, r2.r * 0.8, r2.r * 0.6, 0.3, 0, TAU); ctx.fill();
}
export function drawPalm(ctx, S, p) {
  const t = S.t;
  const sway = Math.sin(t * 1.1 + p.seed) * 3;
  shadow(ctx, p.x, p.y + 4, 16);
  ctx.strokeStyle = p.desert ? '#7d6238' : '#6b4f28';
  ctx.lineWidth = 4.5;
  ctx.beginPath(); ctx.moveTo(p.x, p.y);
  ctx.quadraticCurveTo(p.x + 4, p.y - 14, p.x + 7 + sway * 0.4, p.y - 26);
  ctx.stroke();
  const tx = p.x + 7 + sway * 0.4, ty = p.y - 26;
  ctx.strokeStyle = p.desert ? '#8a9a4a' : '#4d7a30';
  ctx.lineWidth = 2.6;
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * TAU + p.seed;
    ctx.beginPath();
    ctx.moveTo(tx, ty);
    ctx.quadraticCurveTo(tx + Math.cos(a) * 11, ty + Math.sin(a) * 5 - 5, tx + Math.cos(a) * 19 + sway * 0.4, ty + Math.sin(a) * 9 + 2);
    ctx.stroke();
  }
}
export function drawFlora(ctx, S, f) {
  const t = S.t;
  if (f.type === 'flower') {
    const lean = (S.wind + Math.sin(t * 1.1 + 7 * f.seed) * 0.3) * 4;
    ctx.strokeStyle = '#3e5a2a'; ctx.lineWidth = 1.3;
    ctx.beginPath(); ctx.moveTo(f.x, f.y); ctx.quadraticCurveTo(f.x + lean * 0.5, f.y - 5, f.x + lean, f.y - 9); ctx.stroke();
    ctx.fillStyle = f.col;
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * TAU + f.seed;
      ctx.beginPath(); ctx.arc(f.x + lean + Math.cos(a) * 2.6, f.y - 9 + Math.sin(a) * 2.6, 1.9, 0, TAU); ctx.fill();
    }
    ctx.fillStyle = '#3a2c12';
    ctx.beginPath(); ctx.arc(f.x + lean, f.y - 9, 1.7, 0, TAU); ctx.fill();
  } else if (f.type === 'fern' || f.type === 'shrub') {
    ctx.strokeStyle = 'rgba(86,134,52,.7)'; ctx.lineWidth = 1.5;
    const sway = S.wind * 2;
    for (let i = -1; i <= 1; i++) {
      ctx.beginPath(); ctx.moveTo(f.x, f.y);
      ctx.quadraticCurveTo(f.x + i * 4 + sway, f.y - 6, f.x + i * 7 + sway, f.y - 11);
      ctx.stroke();
    }
  } else if (f.type === 'cactus') {
    shadow(ctx, f.x, f.y + 3, 9);
    fillRR(ctx, f.x - 3, f.y - 20, 6.5, 21, 3, '#4e7a3a');
    ctx.fillStyle = 'rgba(255,255,255,.12)';
    ctx.fillRect(f.x - 3, f.y - 20, 2, 21);
    if (f.arms > 0) { fillRR(ctx, f.x - 10, f.y - 14, 7, 3.4, 2, '#477036'); fillRR(ctx, f.x - 10, f.y - 19, 3.4, 7, 2, '#477036'); }
    if (f.arms > 1) { fillRR(ctx, f.x + 3.5, f.y - 11, 7, 3.4, 2, '#477036'); fillRR(ctx, f.x + 7, f.y - 17, 3.4, 8, 2, '#477036'); }
  } else {
    ctx.fillStyle = 'rgba(140,118,72,.5)';
    blob(ctx, f.x, f.y, 6, f.seed); ctx.fill();
  }
}

// ---- buildings ----
function floorCols(mat) {
  if (mat === 'metal') return ['#4e555e', '#33383e', '#262b30', '#7d8893'];
  if (mat === 'stone') return ['#767d85', '#4e535a', '#3a3f45', '#a5acb3'];
  if (mat === 'armored') return ['#39455a', '#242d3c', '#1a212d', '#7f93ad'];
  return ['#6e5128', '#4b3517', '#33240e', '#a87c40'];
}

export function drawFloor(ctx, gx, gy, s) {
  const x = gx * TILE, y = gy * TILE;
  const [a, b, seam, edge] = floorCols(s.mat);
  ctx.fillStyle = vgrad(ctx, x, y, 0, TILE, a, b);
  rrect(ctx, x + 1, y + 1, TILE - 2, TILE - 2, 5); ctx.fill();
  ctx.strokeStyle = seam; ctx.lineWidth = 1.4;
  for (const dy of [16, 32, 48]) {
    ctx.beginPath(); ctx.moveTo(x + 3, y + dy); ctx.lineTo(x + TILE - 3, y + dy); ctx.stroke();
  }
  if (s.mat !== 'wood') {
    ctx.beginPath(); ctx.moveTo(x + TILE / 2, y + 3); ctx.lineTo(x + TILE / 2, y + TILE - 3); ctx.stroke();
    // rivets
    ctx.fillStyle = 'rgba(255,255,255,.12)';
    for (const [rx, ry] of [[8, 8], [TILE - 8, 8], [8, TILE - 8], [TILE - 8, TILE - 8]]) {
      ctx.beginPath(); ctx.arc(x + rx, y + ry, 1.6, 0, TAU); ctx.fill();
    }
  }
  ctx.strokeStyle = 'rgba(255,255,255,.09)'; ctx.lineWidth = 1.5;
  rrect(ctx, x + 1, y + 1, TILE - 2, TILE - 2, 5); ctx.stroke();
  // damage cracks
  if (s.hp < s.max * 0.5) {
    ctx.strokeStyle = 'rgba(12,10,8,.5)'; ctx.lineWidth = 1.2;
    ctx.beginPath(); ctx.moveTo(x + 12, y + 10); ctx.lineTo(x + 28, y + 30); ctx.lineTo(x + 22, y + 48); ctx.stroke();
    if (s.hp < s.max * 0.25) { ctx.beginPath(); ctx.moveTo(x + 48, y + 14); ctx.lineTo(x + 38, y + 34); ctx.lineTo(x + 50, y + 52); ctx.stroke(); }
  }
}

export function drawWall(ctx, S, key, w) {
  const seg = wallSegOf(key, w);
  const m = matCols(w.mat);
  const vert = seg[0] === seg[2];
  const mx = (seg[0] + seg[2]) / 2, my = (seg[1] + seg[3]) / 2;
  if (w.type === 'door' && w.open) {
    // jamb stubs
    ctx.fillStyle = m.dk;
    if (vert) { ctx.fillRect(seg[0] - 5, seg[1], 10, 10); ctx.fillRect(seg[0] - 5, seg[3] - 10, 10, 10); }
    else { ctx.fillRect(seg[0], seg[1] - 5, 10, 10); ctx.fillRect(seg[2] - 10, seg[1] - 5, 10, 10); }
    return;
  }
  ctx.save();
  ctx.translate(mx, my);
  if (!vert) ctx.rotate(Math.PI / 2);
  const W = 12, L = TILE;
  fillRR(ctx, -W / 2 - 1, -L / 2, W + 2, L, 3, m.dk);
  const g = ctx.createLinearGradient(-W / 2, 0, W / 2, 0);
  g.addColorStop(0, m.lt); g.addColorStop(1, m.dk);
  ctx.fillStyle = g;
  rrect(ctx, -W / 2, -L / 2 + 1, W, L - 2, 2); ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,.14)';
  ctx.fillRect(-W / 2, -L / 2 + 1, 2, L - 2);
  if (w.type === 'door') {
    ctx.fillStyle = '#2c1f0e';
    ctx.fillRect(-0.8, -L / 2 + 3, 1.6, L - 6);
    ctx.fillStyle = '#d8b65e';
    ctx.beginPath(); ctx.arc(W / 4, 0, 2.4, 0, TAU); ctx.fill();
  }
  if (w.mat === 'metal' || w.mat === 'armored') {
    ctx.fillStyle = 'rgba(0,0,0,.3)';
    for (const dy of [-L / 2 + 8, 0, L / 2 - 8]) { ctx.beginPath(); ctx.arc(0, dy, 1.4, 0, TAU); ctx.fill(); }
  }
  if (w.hp < w.max * 0.5) {
    ctx.strokeStyle = 'rgba(10,9,7,.6)'; ctx.lineWidth = 1.1;
    ctx.beginPath(); ctx.moveTo(-W / 4, -L / 4); ctx.lineTo(W / 4, 0); ctx.lineTo(-W / 5, L / 4); ctx.stroke();
  }
  ctx.restore();
  // hp ring (gray during repair-lock)
  if (w.hp < w.max) {
    const locked = (S.t - w.hitT) < HIT_LOCK;
    const col = locked ? '#8b9099' : w.mat === 'metal' || w.mat === 'armored' ? '#9ab0d0' : w.mat === 'stone' ? '#c6ccd2' : '#d2664a';
    hpRing(ctx, mx, my, 10, w.hp / w.max, col);
  }
  // lock badge
  if (w.type === 'door' && w.lock) drawLock(ctx, mx, my, w.lock.by === 'p1');
}

function drawLock(ctx, x, y, own) {
  ctx.strokeStyle = own ? '#7bbf4f' : '#c0432f';
  ctx.lineWidth = 1.6;
  ctx.beginPath(); ctx.arc(x, y - 4, 3, Math.PI, 0); ctx.stroke();
  ctx.fillStyle = own ? '#7bbf4f' : '#c0432f';
  fillRR(ctx, x - 4, y - 4, 8, 6.5, 1.5, own ? '#5f9c3c' : '#9c3322');
}

export function drawCupboard(ctx, S, gx, gy, d, teamCol) {
  const x = gx * TILE, y = gy * TILE, cx = x + TILE / 2, cy = y + TILE / 2;
  shadow(ctx, cx, cy + 14, 26);
  fillRR(ctx, x + 6, y + 6, TILE - 12, TILE - 12, 6, '#241806');
  const lt = shade(teamCol, 1.3), dk = shade(teamCol, 0.58);
  ctx.fillStyle = vgrad(ctx, 0, y + 9, 0, TILE - 18, lt, dk);
  rrect(ctx, x + 9, y + 9, TILE - 18, TILE - 18, 4); ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,.13)';
  ctx.fillRect(x + 9, y + 9, TILE - 18, 5);
  ctx.strokeStyle = '#2c1f0c'; ctx.lineWidth = 1.6;
  rrect(ctx, x + 9, y + 9, TILE - 18, TILE - 18, 4); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(cx, y + 11); ctx.lineTo(cx, y + TILE - 11); ctx.stroke();
  ctx.fillStyle = '#d8b65e';
  ctx.beginPath(); ctx.arc(cx - 4, cy, 1.6, 0, TAU); ctx.fill();
  ctx.beginPath(); ctx.arc(cx + 4, cy, 1.6, 0, TAU); ctx.fill();
  const stocked = d.store && (d.store.wood + d.store.stone + d.store.metal) > 0;
  ctx.shadowColor = stocked ? '#76e06a' : '#ff5a3c';
  ctx.shadowBlur = 6;
  ctx.fillStyle = stocked ? '#76e06a' : '#ff5a3c';
  ctx.beginPath(); ctx.arc(cx, y + 15, 2.8, 0, TAU); ctx.fill();
  ctx.shadowBlur = 0;
  if (d.lock) drawLock(ctx, x + TILE - 13, y + 15, d.lock.by === 'p1');
  hpRing(ctx, cx, cy, 0.44 * TILE, d.hp / d.max, '#caa15f');
}

export function drawBox(ctx, gx, gy, d) {
  const x = gx * TILE, y = gy * TILE, cx = x + TILE / 2, cy = y + TILE / 2;
  shadow(ctx, cx, cy + 12, 24);
  fillRR(ctx, x + 5, y + 5, TILE - 10, TILE - 10, 5, '#33240f');
  ctx.fillStyle = vgrad(ctx, 0, y + 7, 0, TILE - 14, '#8a6230', '#4f3517');
  rrect(ctx, x + 7, y + 7, TILE - 14, TILE - 14, 4); ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,.1)';
  ctx.fillRect(x + 7, y + 7, TILE - 14, 4);
  ctx.fillStyle = '#caa15f';
  ctx.fillRect(cx - 3, y + 7, 6, TILE - 14);
  hpRing(ctx, cx, cy, 0.42 * TILE, d.hp / d.max, '#caa15f');
}

export function drawTurret(ctx, S, gx, gy, d) {
  const x = gx * TILE, y = gy * TILE, cx = x + TILE / 2, cy = y + TILE / 2;
  const AC = d.tier === 3 ? '#5fc8e0' : d.tier === 2 ? '#e0a23a' : '#9aa1a8';
  shadow(ctx, cx, cy + 12, 22);
  fillRR(ctx, x + 8, y + 8, TILE - 16, TILE - 16, 5, '#2f352c');
  ctx.strokeStyle = AC; ctx.lineWidth = 2;
  ctx.globalAlpha = 0.8;
  ctx.beginPath(); ctx.arc(cx, cy, 17, 0, TAU); ctx.stroke();
  ctx.globalAlpha = 1;
  ctx.fillStyle = rgrad(ctx, cx, cy, 15, '#79836f', '#3b4138');
  ctx.beginPath(); ctx.arc(cx, cy, 15, 0, TAU); ctx.fill();
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(d.angle || 0);
  if (d.tier === 3) {
    fillRR(ctx, 0, -3, 40, 6, 2, '#22262a');
    ctx.fillStyle = 'rgba(255,255,255,.25)'; ctx.fillRect(2, -3, 36, 1.6);
    ctx.fillStyle = AC; fillRR(ctx, 8, -8.5, 7, 5, 1.5, AC);
    ctx.beginPath(); ctx.arc(42, 0, 2, 0, TAU); ctx.fill();
  } else if (d.tier === 2) {
    fillRR(ctx, 0, -5.5, 30, 4, 1.5, '#22262a');
    fillRR(ctx, 0, 1.5, 30, 4, 1.5, '#22262a');
    ctx.fillStyle = AC; fillRR(ctx, 9, -2, 6, 4, 1, AC);
  } else {
    fillRR(ctx, 0, -4, 22, 8, 3, '#23272b');
    ctx.fillStyle = AC;
    ctx.beginPath(); ctx.arc(24, 0, 2.2, 0, TAU); ctx.fill();
  }
  ctx.restore();
  ctx.fillStyle = '#383f35';
  ctx.beginPath(); ctx.arc(cx, cy, 8, 0, TAU); ctx.fill();
  ctx.shadowColor = AC; ctx.shadowBlur = 5;
  ctx.fillStyle = AC;
  ctx.beginPath(); ctx.arc(cx, cy, 3, 0, TAU); ctx.fill();
  ctx.shadowBlur = 0;
  for (let i = 0; i < (d.tier || 1); i++) {
    ctx.beginPath(); ctx.arc(cx - 6 + i * 6, cy + 0.31 * TILE, 1.8, 0, TAU); ctx.fill();
  }
  hpRing(ctx, cx, cy, 19, d.hp / d.max, '#9ab0d0');
}

export function drawFence(ctx, f) {
  ctx.save();
  ctx.translate(f.x, f.y);
  ctx.rotate(f.a);
  ctx.fillStyle = '#6b4d28';
  ctx.fillRect(-23, -7, 46, 3.4);
  ctx.fillRect(-23, 1, 46, 3.4);
  for (let px = -21; px <= 21; px += 9) {
    ctx.fillStyle = '#7d5c30';
    ctx.fillRect(px - 2.2, -9, 4.5, 18);
    ctx.fillStyle = 'rgba(255,255,255,.15)';
    ctx.fillRect(px - 2.2, -9, 4.5, 2);
  }
  const dmg = 1 - f.hp / f.max;
  if (dmg > 0.02) {
    ctx.strokeStyle = `rgba(20,14,8,${0.2 + 0.5 * dmg})`;
    ctx.lineWidth = 1.3;
    ctx.beginPath(); ctx.moveTo(-12, -6); ctx.lineTo(-4, 2); ctx.lineTo(6, -4); ctx.stroke();
  }
  ctx.restore();
  if (f.hp < f.max) {
    ctx.fillStyle = 'rgba(0,0,0,.5)';
    ctx.fillRect(f.x - 16, f.y - 14, 32, 3);
    ctx.fillStyle = '#c79a5e';
    ctx.fillRect(f.x - 16, f.y - 14, 32 * (f.hp / f.max), 3);
  }
}

// ---- units ----
function shade(hex, f) {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.min(255, ((n >> 16) & 255) * f) | 0;
  const g = Math.min(255, ((n >> 8) & 255) * f) | 0;
  const b = Math.min(255, (n & 255) * f) | 0;
  return `rgb(${r},${g},${b})`;
}

export function drawUnit(ctx, S, u) {
  if (u.dead || u.eliminated) return;
  const t = S.t;
  const moving = Math.hypot(u.vx, u.vy) > 20;
  shadow(ctx, u.x, u.y + 11, 15);
  // legs
  const kick = moving ? Math.sin(t * 10 + u.id) * 2.4 : 0;
  ctx.fillStyle = '#2b251c';
  fillRR(ctx, u.x - 6.5, u.y + 4 + kick, 5, 9, 2.2, '#2b251c');
  fillRR(ctx, u.x + 1.5, u.y + 4 - kick, 5, 9, 2.2, '#2b251c');
  // arm + held item
  ctx.save();
  ctx.translate(u.x, u.y);
  ctx.rotate(u.angle);
  if (u.gathering) {
    ctx.rotate(-0.4 + Math.sin(u.swing) * 0.9);
    fillRR(ctx, 8, -2, 14, 3.6, 1.5, '#5b4226');
    fillRR(ctx, 20, -5.5, 5.5, 10, 1.5, '#b9c0c7');
  } else {
    fillRR(ctx, 6, -2.5, 9, 5, 2, PAL.skin);
    const gunLen = u.gun === 'rifle' ? 19 : u.gun === 'shotgun' ? 15 : u.gun === 'hmg' ? 22 : 13;
    fillRR(ctx, 10, -3, gunLen, 6, 2, '#23261f');
    ctx.fillStyle = 'rgba(255,255,255,.2)';
    ctx.fillRect(10, -3, gunLen, 1.6);
    if (u.rifleLaser) {
      ctx.fillStyle = '#ff3a2a';
      ctx.beginPath(); ctx.arc(10 + gunLen, 0, 1.5, 0, TAU); ctx.fill();
    }
  }
  ctx.restore();
  // torso
  ctx.fillStyle = PAL.ink;
  fillRR(ctx, u.x - 9.5, u.y - 8, 19, 16, 5.5, PAL.ink);
  ctx.fillStyle = vgrad(ctx, 0, u.y - 7, 0, 14, shade(u.col, 1.06), shade(u.col, 0.55));
  rrect(ctx, u.x - 7.5, u.y - 6.5, 15, 13.5, 4.5); ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,.14)';
  ctx.fillRect(u.x - 6, u.y - 6, 12, 2.6);
  // body armor
  if (u.bodyArmor > 0) {
    const ac = ARMOR.bodyCol[u.bodyArmor] || '#9fb0c8';
    fillRR(ctx, u.x - 7, u.y - 5, 14, 11, 3, ac);
    ctx.fillStyle = 'rgba(255,255,255,.18)';
    ctx.fillRect(u.x - 6, u.y - 4.5, 12, 2);
    ctx.fillStyle = 'rgba(10,12,16,.5)';
    ctx.fillRect(u.x - 0.7, u.y - 5, 1.4, 11);
    for (let i = 0; i < u.bodyArmor; i++) {
      ctx.fillStyle = 'rgba(14,16,20,.8)';
      ctx.fillRect(u.x - 5 + i * 4, u.y + 3.4, 3, 1.6);
    }
  }
  // head
  ctx.fillStyle = PAL.ink;
  ctx.beginPath(); ctx.arc(u.x, u.y - 1.5, 7, 0, TAU); ctx.fill();
  ctx.fillStyle = rgrad(ctx, u.x, u.y - 2, 5.6, '#d9b48c', '#9a7350');
  ctx.beginPath(); ctx.arc(u.x, u.y - 1.5, 5.6, 0, TAU); ctx.fill();
  // team band
  ctx.strokeStyle = u.col; ctx.lineWidth = 2.2;
  ctx.beginPath(); ctx.arc(u.x, u.y - 1.5, 5.4, Math.PI * 1.05, Math.PI * 1.95); ctx.stroke();
  // facemask
  if (u.facemask > 0) {
    const hc = ARMOR.headCol[u.facemask] || '#aab4c2';
    ctx.fillStyle = hc;
    ctx.beginPath(); ctx.arc(u.x, u.y - 1.5, 6, 0, TAU); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,.22)';
    ctx.beginPath(); ctx.arc(u.x - 1.6, u.y - 3.4, 2.8, 0, TAU); ctx.fill();
    ctx.fillStyle = '#11151c';
    fillRR(ctx, u.x - 5, u.y - 2.6, 10, 2.6, 1.2, '#11151c');
  }
  // hp bar when hurt
  if (u.hp < u.max) {
    ctx.fillStyle = 'rgba(0,0,0,.65)';
    ctx.fillRect(u.x - 12, u.y - 14, 24, 4);
    ctx.fillStyle = '#d2553c';
    ctx.fillRect(u.x - 12, u.y - 14, 24 * Math.max(0, u.hp / u.max), 4);
  }
}

export function drawPlayer(ctx, S) {
  const p = S.player;
  const t = S.t;
  ctx.save();
  if (S.ghost) ctx.globalAlpha = 0.4;
  if (p.dead) {
    shadow(ctx, p.x, p.y + 8, 15);
    ctx.fillStyle = PAL.playerDk;
    ctx.beginPath(); ctx.arc(p.x, p.y, PLAYER_R - 3, 0, TAU); ctx.fill();
    ctx.fillStyle = PAL.blood;
    for (let i = 0; i < 6; i++) {
      const a = i * 1.047;
      ctx.beginPath(); ctx.arc(p.x + Math.cos(a) * 15, p.y + Math.sin(a) * 10, 3, 0, TAU); ctx.fill();
    }
    ctx.restore();
    return;
  }
  shadow(ctx, p.x, p.y + 12, PLAYER_R * 1.05);
  const moving = p.moving;
  const kick = moving ? Math.sin(t * 12) * 2.4 : 0;
  fillRR(ctx, p.x - 7, p.y + 5 + kick, 5, 11, 2.2, '#3b342a');
  fillRR(ctx, p.x + 2, p.y + 5 - kick, 5, 11, 2.2, '#3b342a');
  // arm + weapon
  const off = 11 - p.recoil;
  ctx.save();
  ctx.translate(p.x, p.y);
  ctx.rotate(p.angle);
  const slot = S.slot;
  fillRR(ctx, 6, -2.5, 9, 5, 2, PAL.skin);
  if (slot === 0) {
    if (S.jackhammer) {
      ctx.save();
      ctx.rotate(0.12 + (p.swing > 0 ? Math.sin(t * 60) * 0.09 : 0));
      fillRR(ctx, off, -5, 12, 10, 2, '#caa23a');
      ctx.fillStyle = 'rgba(255,255,255,.2)'; ctx.fillRect(off, -5, 12, 2.5);
      fillRR(ctx, off + 12, -3, 4, 6, 1, '#3a3f37');
      fillRR(ctx, off + 16, -2.1, 13, 4.2, 1, '#b9c0c7');
      ctx.restore();
    } else {
      ctx.save();
      ctx.rotate(p.swing > 0 ? -0.4 + (0.16 - p.swing) * 5 : -0.2);
      fillRR(ctx, off, -2, 16, 4, 1.5, '#5b4226');
      fillRR(ctx, off + 14, -6, 7, 12, 2, '#b9c0c7');
      ctx.restore();
    }
  } else if (slot === 5) {
    fillRR(ctx, off, -2, 13, 4, 1.5, '#5b4226');
    fillRR(ctx, off + 11, -5, 7, 10, 2, '#9aa1a8');
  } else {
    const k = { 1: [13, 6], 2: [20, 6], 3: [18, 10], 4: [26, 10], 6: [30, 5], 7: [17, 8], 8: [24, 9] }[slot] || [13, 6];
    if (slot === 3) {
      fillRR(ctx, off, -6, 12, 12, 2, '#3a3f37');
      const wob = S.weapons.minigun.spin > 0 ? Math.sin(t * 30) * 2 : 0;
      for (const dy of [-4, 0, 4]) fillRR(ctx, off + 10, dy - 1.5 + wob * 0.3, 20, 3, 1.5, '#22262a');
    } else if (slot === 4) {
      fillRR(ctx, off, -5, 26, 10, 3, '#39402f');
      ctx.fillStyle = '#ff9b3d'; ctx.fillRect(off + 2, -5, 24, 2);
      ctx.fillStyle = '#14130d';
      ctx.beginPath(); ctx.arc(off + 24, 0, 5, 0, TAU); ctx.fill();
    } else {
      fillRR(ctx, off, -k[1] / 2, k[0], k[1], 2, '#23261f');
      ctx.fillStyle = 'rgba(255,255,255,.22)';
      ctx.fillRect(off, -k[1] / 2, k[0], 1.8);
      if (slot === 6) { fillRR(ctx, off + 9, -k[1] / 2 - 4, 7, 4, 1.5, '#9fb0bd'); }
      if (slot === 7) { fillRR(ctx, off - 4, 2, 6, 5, 1.5, '#5b4226'); }
      if (slot === 8) { fillRR(ctx, off + 7, 3, 7, 7, 1.5, '#3a3f37'); }
    }
  }
  ctx.restore();
  // torso
  fillRR(ctx, p.x - 9, p.y - 7.5, 18, 15, 5, '#15140e');
  ctx.fillStyle = vgrad(ctx, 0, p.y - 6.5, 0, 13, p.hurt > 0 ? '#c47a5e' : '#8a995e', p.hurt > 0 ? '#7a3e2c' : '#4d5732');
  rrect(ctx, p.x - 7, p.y - 6.5, 14, 13, 4.5); ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,.15)';
  ctx.fillRect(p.x - 5.5, p.y - 6, 11, 2.4);
  if (p.bodyArmor > 0) {
    const ac = ARMOR.bodyCol[p.bodyArmor];
    fillRR(ctx, p.x - 7, p.y - 5, 14, 11, 3, ac);
    ctx.fillStyle = 'rgba(10,12,16,.5)'; ctx.fillRect(p.x - 0.7, p.y - 5, 1.4, 11);
    for (let i = 0; i < p.bodyArmor; i++) { ctx.fillStyle = 'rgba(14,16,20,.8)'; ctx.fillRect(p.x - 5 + i * 4, p.y + 3.6, 3, 1.6); }
  }
  // head
  ctx.fillStyle = '#15140e';
  ctx.beginPath(); ctx.arc(p.x, p.y - 1.5, 7, 0, TAU); ctx.fill();
  ctx.fillStyle = rgrad(ctx, p.x, p.y - 2, 5.6, '#e2bd96', '#a9805a');
  ctx.beginPath(); ctx.arc(p.x, p.y - 1.5, 5.6, 0, TAU); ctx.fill();
  ctx.fillStyle = '#3a2a18';
  ctx.beginPath(); ctx.arc(p.x, p.y - 3, 5.4, Math.PI, 0); ctx.fill();
  const fr = Math.cos(p.angle) >= 0 ? 1 : -1;
  ctx.fillStyle = '#1c150d';
  ctx.beginPath(); ctx.arc(p.x + fr * 1.8, p.y - 2.5, 1.05, 0, TAU); ctx.fill();
  ctx.beginPath(); ctx.arc(p.x + fr * 4.3, p.y - 2.5, 1.05, 0, TAU); ctx.fill();
  if (p.facemask > 0) {
    const hc = ARMOR.headCol[p.facemask];
    ctx.fillStyle = hc;
    ctx.beginPath(); ctx.arc(p.x, p.y - 1.5, 6, 0, TAU); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,.25)';
    ctx.beginPath(); ctx.arc(p.x - 1.8, p.y - 3.6, 2.6, 0, TAU); ctx.fill();
    fillRR(ctx, p.x - 5, p.y - 2.8, 10, 2.6, 1.2, '#11151c');
  }
  if (p.invuln > 0) {
    ctx.strokeStyle = `rgba(150,205,255,${0.35 + 0.3 * Math.sin(t * 22)})`;
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(p.x, p.y, PLAYER_R + 6, 0, TAU); ctx.stroke();
  }
  ctx.restore();
}

// ---- guards / animals ----
export function drawGuard(ctx, S, g) {
  const t = S.t;
  shadow(ctx, g.x, g.y + 10, 14);
  const kick = Math.sin(t * 9 + g.seed) * 1.6;
  fillRR(ctx, g.x - 6, g.y + 4 + kick, 4.5, 9, 2, '#2c2218');
  fillRR(ctx, g.x + 1.5, g.y + 4 - kick, 4.5, 9, 2, '#2c2218');
  ctx.save();
  ctx.translate(g.x, g.y);
  ctx.rotate(g.angle);
  fillRR(ctx, 6, -2.4, 8, 4.8, 2, PAL.skin);
  fillRR(ctx, 10, -3, 17, 6, 2, '#23261f');
  ctx.fillStyle = 'rgba(255,255,255,.2)'; ctx.fillRect(10, -3, 17, 1.6);
  ctx.restore();
  fillRR(ctx, g.x - 8, g.y - 7.5, 16, 15, 5, '#171410');
  ctx.fillStyle = vgrad(ctx, 0, g.y - 6.5, 0, 13, PAL.guard, PAL.guardDk);
  rrect(ctx, g.x - 6.5, g.y - 6.5, 13, 13, 4); ctx.fill();
  ctx.globalAlpha = 0.5;
  ctx.fillStyle = '#f4f0e4';
  ctx.fillRect(g.x - 6.5, g.y + 0.5, 13, 2.4);
  ctx.globalAlpha = 1;
  ctx.fillStyle = rgrad(ctx, g.x, g.y - 2, 5.4, '#d3a87e', '#9a7350');
  ctx.beginPath(); ctx.arc(g.x, g.y - 1.5, 5.4, 0, TAU); ctx.fill();
  ctx.fillStyle = '#c0432f';
  ctx.beginPath(); ctx.arc(g.x, g.y - 2.8, 5.2, Math.PI, 0); ctx.fill();
  hpRing(ctx, g.x, g.y, GUARD.r + 4, g.hp / g.max, '#e2664a');
}

const ANIMAL_COLS = {
  boar: ['#7e6244', '#54402b'], wolf: ['#75767f', '#46474d'], bear: ['#61482f', '#3a2c1c'],
  alligator: ['#557036', '#31491c'], snake: ['#b29a3a', '#71611e'], scorpion: ['#7e5226', '#472e12'],
  polarbear: ['#dde5eb', '#a4b2bd'],
};

export function drawAnimal(ctx, S, a) {
  if (a.dead) return;
  const [col, colDk] = ANIMAL_COLS[a.type] || ['#888', '#555'];
  const ang = (a.vx || a.vy) ? Math.atan2(a.vy, a.vx) : a.dir;
  const t = S.t;
  shadow(ctx, a.x, a.y + a.r * 0.5, a.r * 1.1);
  ctx.save();
  ctx.translate(a.x, a.y);
  ctx.rotate(ang);
  if (a.type === 'snake') {
    for (let i = 6; i >= 0; i--) {
      const sx = -i * 5.2, sy = Math.sin(t * 7 - i * 0.6) * 4.5;
      ctx.fillStyle = i % 2 ? colDk : col;
      ctx.beginPath(); ctx.arc(sx, sy, 6 - i * 0.5, 0, TAU); ctx.fill();
    }
    ctx.fillStyle = col;
    ctx.beginPath(); ctx.ellipse(6, 0, 7, 5, 0, 0, TAU); ctx.fill();
    ctx.fillStyle = '#1c150d';
    ctx.beginPath(); ctx.arc(8, -2, 1.3, 0, TAU); ctx.fill();
    ctx.beginPath(); ctx.arc(8, 2, 1.3, 0, TAU); ctx.fill();
    ctx.strokeStyle = '#c0432f'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(13, 0); ctx.lineTo(17, -1.6); ctx.moveTo(13, 0); ctx.lineTo(17, 1.6); ctx.stroke();
  } else if (a.type === 'scorpion') {
    ctx.strokeStyle = colDk; ctx.lineWidth = 2;
    for (const s of [-1, 1]) for (const lx of [-4, 0, 4]) {
      ctx.beginPath(); ctx.moveTo(lx, 0); ctx.lineTo(lx + 3, s * a.r * 0.8); ctx.stroke();
    }
    ctx.fillStyle = colDk;
    ctx.beginPath(); ctx.ellipse(0, 0, a.r * 0.7, a.r * 0.5, 0, 0, TAU); ctx.fill();
    ctx.fillStyle = col;
    ctx.beginPath(); ctx.ellipse(1, 0, a.r * 0.55, a.r * 0.38, 0, 0, TAU); ctx.fill();
    for (const s of [-1, 1]) {
      ctx.strokeStyle = col; ctx.lineWidth = 2.4;
      ctx.beginPath(); ctx.moveTo(a.r * 0.4, s * 2); ctx.lineTo(a.r * 0.95, s * a.r * 0.5); ctx.stroke();
      ctx.fillStyle = colDk;
      ctx.beginPath(); ctx.arc(a.r * 0.95, s * a.r * 0.5, 2.4, 0, TAU); ctx.fill();
    }
    ctx.strokeStyle = col; ctx.lineWidth = 2.6;
    ctx.beginPath(); ctx.moveTo(-a.r * 0.5, 0); ctx.quadraticCurveTo(-a.r * 1.1, -a.r * 0.5, -a.r * 0.9, -a.r * 0.9); ctx.stroke();
    ctx.fillStyle = '#3a2410';
    ctx.beginPath(); ctx.arc(-a.r * 0.9, -a.r * 0.9, 2.2, 0, TAU); ctx.fill();
  } else {
    ctx.fillStyle = PAL.ink;
    ctx.beginPath(); ctx.ellipse(0, 0, a.r * 1.28, a.r * 0.97, 0, 0, TAU); ctx.fill();
    ctx.fillStyle = colDk;
    ctx.beginPath(); ctx.ellipse(0, 0, a.r * 1.18, a.r * 0.86, 0, 0, TAU); ctx.fill();
    ctx.fillStyle = col;
    ctx.beginPath(); ctx.ellipse(0, 0, a.r * 1.02, a.r * 0.72, 0, 0, TAU); ctx.fill();
    // fur texture hint
    ctx.strokeStyle = 'rgba(0,0,0,.12)'; ctx.lineWidth = 1;
    for (let i = -2; i <= 2; i++) {
      ctx.beginPath(); ctx.moveTo(i * a.r * 0.3, -a.r * 0.5); ctx.quadraticCurveTo(i * a.r * 0.3 + 3, 0, i * a.r * 0.3, a.r * 0.5); ctx.stroke();
    }
    if (a.type === 'alligator') {
      ctx.fillStyle = colDk;
      ctx.beginPath();
      ctx.moveTo(-a.r * 0.9, -a.r * 0.22); ctx.lineTo(-a.r * 1.8, 0); ctx.lineTo(-a.r * 0.9, a.r * 0.22);
      ctx.closePath(); ctx.fill();
      ctx.fillStyle = col;
      ctx.beginPath(); ctx.ellipse(a.r * 1.2, 0, a.r * 0.55, a.r * 0.3, 0, 0, TAU); ctx.fill();
      ctx.fillStyle = colDk;
      for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.moveTo(-a.r * 0.5 + i * a.r * 0.34, -3);
        ctx.lineTo(-a.r * 0.36 + i * a.r * 0.34, -7);
        ctx.lineTo(-a.r * 0.22 + i * a.r * 0.34, -3);
        ctx.closePath(); ctx.fill();
      }
      ctx.fillStyle = '#10100a';
      ctx.beginPath(); ctx.arc(a.r * 1.2, -3, 1.9, 0, TAU); ctx.fill();
    } else {
      ctx.fillStyle = col;
      ctx.beginPath(); ctx.arc(a.r * 0.96, 0, a.r * 0.5, 0, TAU); ctx.fill();
      if (a.type === 'bear' || a.type === 'polarbear') {
        ctx.fillStyle = colDk;
        ctx.beginPath(); ctx.arc(a.r * 0.7, -a.r * 0.5, a.r * 0.22, 0, TAU); ctx.fill();
        ctx.beginPath(); ctx.arc(a.r * 0.7, a.r * 0.5, a.r * 0.22, 0, TAU); ctx.fill();
      }
      if (a.type === 'wolf') {
        ctx.fillStyle = colDk;
        for (const s of [-1, 1]) {
          ctx.beginPath();
          ctx.moveTo(a.r * 0.6, s * a.r * 0.34);
          ctx.lineTo(a.r * 0.9, s * a.r * 0.7);
          ctx.lineTo(a.r * 1.0, s * a.r * 0.25);
          ctx.closePath(); ctx.fill();
        }
      }
      if (a.type === 'boar') {
        ctx.fillStyle = '#e8e0cf';
        ctx.fillRect(a.r * 1.28, -4, 5, 2);
        ctx.fillRect(a.r * 1.28, 2, 5, 2);
      }
      ctx.fillStyle = '#10100a';
      ctx.beginPath(); ctx.arc(a.r * 0.96, -3, 1.9, 0, TAU); ctx.fill();
    }
  }
  ctx.restore();
  if (a.hit > 0) {
    ctx.globalAlpha = 0.42;
    ctx.fillStyle = '#fff';
    ctx.beginPath(); ctx.arc(a.x, a.y, a.r * 1.12, 0, TAU); ctx.fill();
    ctx.globalAlpha = 1;
  }
  if (a.aggro) {
    ctx.fillStyle = '#e2664a';
    ctx.font = 'bold 13px Trebuchet MS';
    ctx.textAlign = 'center';
    ctx.fillText('!', a.x, a.y - a.r - 9);
  }
  hpRing(ctx, a.x, a.y, a.r + 5, a.hp / a.max, a.type.includes('bear') ? '#e2664a' : '#e8b06a');
}

// ---- vehicles ----
export function drawMinicopter(ctx, S, c, teamCol, flying) {
  const lift = flying ? 12 : 2;
  shadow(ctx, c.x, c.y + 16, 26);
  ctx.save();
  ctx.translate(c.x, c.y - lift);
  ctx.rotate(c.angle || 0);
  fillRR(ctx, -28, -3, 21, 6, 2, '#2c3328');
  ctx.fillStyle = '#2c3328';
  ctx.fillRect(-30, -8, 5, 16);
  const hull = teamCol || '#5d684c';
  ctx.fillStyle = rgrad(ctx, 0, 0, 19, shade(hull, 1.15), shade(hull, 0.5));
  ctx.beginPath(); ctx.ellipse(0, 0, 19, 13, 0, 0, TAU); ctx.fill();
  ctx.fillStyle = 'rgba(150,200,230,.55)';
  ctx.beginPath(); ctx.ellipse(8, 0, 7, 8, 0, 0, TAU); ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,.2)';
  ctx.beginPath(); ctx.ellipse(5, -4, 5, 2.5, -0.4, 0, TAU); ctx.fill();
  ctx.strokeStyle = '#252b22'; ctx.lineWidth = 3;
  for (const s of [-1, 1]) {
    ctx.beginPath(); ctx.moveTo(-10, s * 15); ctx.lineTo(18, s * 15); ctx.stroke();
  }
  ctx.globalAlpha = flying ? 0.5 : 0.85;
  ctx.strokeStyle = '#191c15'; ctx.lineWidth = 5;
  const r = c.rotor || 0;
  ctx.beginPath();
  ctx.moveTo(Math.cos(r) * 24, Math.sin(r) * 24); ctx.lineTo(-Math.cos(r) * 24, -Math.sin(r) * 24);
  ctx.moveTo(Math.cos(r + 1.57) * 24, Math.sin(r + 1.57) * 24); ctx.lineTo(-Math.cos(r + 1.57) * 24, -Math.sin(r + 1.57) * 24);
  ctx.stroke();
  if (flying) {
    ctx.globalAlpha = 0.18;
    ctx.beginPath(); ctx.arc(0, 0, 25, 0, TAU); ctx.stroke();
  }
  ctx.globalAlpha = 1;
  ctx.fillStyle = '#11140f';
  ctx.beginPath(); ctx.arc(0, 0, 3.4, 0, TAU); ctx.fill();
  ctx.restore();
  if (c.hp < c.max && !c.destroyed) {
    ctx.fillStyle = 'rgba(0,0,0,.6)'; ctx.fillRect(c.x - 16, c.y - 26, 32, 4);
    ctx.fillStyle = '#9ad06a'; ctx.fillRect(c.x - 16, c.y - 26, 32 * Math.max(0, c.hp / c.max), 4);
  }
}

export function drawTransport(ctx, S, tr, teamCol) {
  shadow(ctx, tr.x + 6, tr.y + 22, 44);
  ctx.save();
  ctx.translate(tr.x, tr.y - 10);
  ctx.rotate(tr.angle);
  fillRR(ctx, -52, -4, 26, 8, 3, '#262c22');
  ctx.fillStyle = '#262c22'; ctx.fillRect(-54, -12, 6, 24);
  ctx.fillStyle = rgrad(ctx, 0, 0, 34, shade(teamCol, 1.1), shade(teamCol, 0.45));
  ctx.beginPath(); ctx.ellipse(0, 0, 32, 19, 0, 0, TAU); ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,.12)';
  ctx.beginPath(); ctx.ellipse(-4, -7, 18, 5, -0.1, 0, TAU); ctx.fill();
  ctx.fillStyle = 'rgba(150,200,230,.5)';
  ctx.beginPath(); ctx.ellipse(17, 0, 9, 10, 0, 0, TAU); ctx.fill();
  ctx.strokeStyle = '#1c211a'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.ellipse(0, 0, 32, 19, 0, 0, TAU); ctx.stroke();
  const r = tr.rotor;
  ctx.globalAlpha = 0.45;
  ctx.strokeStyle = '#15180f'; ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(Math.cos(r) * 40, Math.sin(r) * 40); ctx.lineTo(-Math.cos(r) * 40, -Math.sin(r) * 40);
  ctx.moveTo(Math.cos(r + 1.57) * 40, Math.sin(r + 1.57) * 40); ctx.lineTo(-Math.cos(r + 1.57) * 40, -Math.sin(r + 1.57) * 40);
  ctx.stroke();
  ctx.globalAlpha = 1;
  ctx.restore();
  if (tr.riders.length) {
    ctx.fillStyle = '#ffd76b';
    ctx.font = 'bold 11px Trebuchet MS';
    ctx.textAlign = 'center';
    ctx.fillText('×' + tr.riders.length, tr.x, tr.y - 38);
  }
  if (tr.hp < tr.max) {
    ctx.fillStyle = 'rgba(0,0,0,.6)'; ctx.fillRect(tr.x - 22, tr.y - 34, 44, 4);
    ctx.fillStyle = '#9ad06a'; ctx.fillRect(tr.x - 22, tr.y - 34, 44 * Math.max(0, tr.hp / tr.max), 4);
  }
}

export function drawTrain(ctx, tr) {
  ctx.save();
  ctx.translate(tr.x, tr.y);
  ctx.rotate(tr.ang);
  ctx.fillStyle = 'rgba(10,9,6,.3)';
  rrect(ctx, -118, -15 + 6, 150, 30, 8); ctx.fill();
  for (const off of [-44, -88]) {
    ctx.fillStyle = vgrad(ctx, 0, -14, 0, 28, '#5a4a36', '#39301f');
    rrect(ctx, off - 19, -14, 38, 28, 3); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,.12)'; ctx.fillRect(off - 19, -14, 38, 4);
    ctx.fillStyle = '#23201a'; ctx.fillRect(off - 19, 11, 38, 3);
  }
  ctx.fillStyle = vgrad(ctx, 0, -15, 0, 30, '#3a4048', '#1c2026');
  rrect(ctx, -23, -15, 46, 30, 4); ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,.14)'; ctx.fillRect(-23, -15, 46, 4);
  ctx.fillStyle = '#11151a'; fillRR(ctx, -18, -10, 16, 20, 2, '#11151a');
  ctx.shadowColor = '#ffe9a3'; ctx.shadowBlur = 6;
  ctx.fillStyle = '#ffe9a3';
  ctx.beginPath(); ctx.arc(24, 0, 3.4, 0, TAU); ctx.fill();
  ctx.shadowBlur = 0;
  ctx.fillStyle = '#1c2026';
  ctx.beginPath(); ctx.moveTo(20, -13); ctx.lineTo(27, 0); ctx.lineTo(20, 13); ctx.closePath(); ctx.fill();
  ctx.restore();
}

export function drawConvoy(ctx, S, cv) {
  // escorts drawn separately in y-sort; this draws the truck
  shadow(ctx, cv.x, cv.y + 14, 38);
  ctx.save();
  ctx.translate(cv.x, cv.y);
  ctx.rotate(cv.ang);
  ctx.fillStyle = vgrad(ctx, 0, -18, 0, 36, '#56604a', '#333b29');
  rrect(ctx, -34, -18, 68, 36, 5); ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,.1)'; ctx.fillRect(-34, -18, 68, 5);
  ctx.fillStyle = '#23281c';
  ctx.fillRect(-34, -19.5, 68, 3.4); ctx.fillRect(-34, 16.1, 68, 3.4);
  ctx.fillStyle = '#1f2418';
  fillRR(ctx, 15, -13, 15, 26, 3, '#272d1e');
  ctx.save();
  ctx.rotate(cv.taim - cv.ang);
  ctx.fillStyle = '#39423'+'3';
  ctx.beginPath(); ctx.arc(0, 0, 11, 0, TAU); ctx.fill();
  ctx.fillStyle = '#13160e';
  fillRR(ctx, 0, -2.6, 32, 5.2, 2, '#13160e');
  ctx.restore();
  ctx.restore();
  if (cv.hp < cv.max) {
    const f = Math.max(0, cv.hp / cv.max);
    ctx.fillStyle = 'rgba(0,0,0,.6)'; ctx.fillRect(cv.x - 28, cv.y - 31, 56, 5);
    ctx.fillStyle = f > 0.5 ? '#86c861' : f > 0.25 ? '#e0b24a' : '#d2664a';
    ctx.fillRect(cv.x - 28, cv.y - 31, 56 * f, 5);
  }
}

export function drawConvoyGuard(ctx, g) {
  shadow(ctx, g.x, g.y + 8, 10);
  ctx.save();
  ctx.translate(g.x, g.y);
  ctx.rotate(g.angle);
  fillRR(ctx, 6, -1.6, 16, 3.2, 1.5, '#13160e');
  ctx.restore();
  ctx.fillStyle = '#6f7a4e';
  ctx.beginPath(); ctx.arc(g.x, g.y, 7, 0, TAU); ctx.fill();
  ctx.fillStyle = '#39402c';
  ctx.beginPath(); ctx.arc(g.x, g.y - 1, 4.4, 0, TAU); ctx.fill();
  if (g.hp < g.max) {
    ctx.fillStyle = 'rgba(0,0,0,.6)'; ctx.fillRect(g.x - 9, g.y - 13, 18, 3);
    ctx.fillStyle = '#cdd6c4'; ctx.fillRect(g.x - 9, g.y - 13, 18 * Math.max(0, g.hp / g.max), 3);
  }
}

export function drawPatrol(ctx, S) {
  const p = S.patrol;
  if (!p) return;
  shadow(ctx, p.x + 26, p.y + 30, 52);
  ctx.save();
  ctx.translate(p.x, p.y);
  ctx.rotate(p.angle);
  ctx.fillStyle = '#333c30';
  fillRR(ctx, -42, -4, 34, 8, 3, '#333c30');
  ctx.fillRect(-46, -12, 8, 24);
  ctx.fillStyle = rgrad(ctx, 0, 0, 30, '#48543e', '#272e22');
  ctx.beginPath(); ctx.ellipse(0, 0, 30, 15, 0, 0, TAU); ctx.fill();
  ctx.fillStyle = '#36402f';
  ctx.beginPath(); ctx.ellipse(0, 0, 22, 12, 0, 0, TAU); ctx.fill();
  ctx.fillStyle = 'rgba(150,200,230,.6)';
  ctx.beginPath(); ctx.ellipse(14, 0, 12, 8, 0, 0, TAU); ctx.fill();
  ctx.fillStyle = '#41464d';
  fillRR(ctx, -8, -24, 16, 8, 2, '#41464d');
  fillRR(ctx, -8, 16, 16, 8, 2, '#41464d');
  if (p.flash > 0) {
    ctx.fillStyle = '#ffd76b';
    ctx.beginPath(); ctx.arc(26, 0, 7, 0, TAU); ctx.fill();
  }
  ctx.strokeStyle = 'rgba(20,22,16,.55)'; ctx.lineWidth = 4;
  ctx.beginPath(); ctx.ellipse(0, 0, 56, 17.9, 0, p.rotor, p.rotor + 4.4); ctx.stroke();
  ctx.restore();
  if (p.hp < p.max) {
    const f = Math.max(0, p.hp / p.max);
    ctx.fillStyle = 'rgba(0,0,0,.6)'; ctx.fillRect(p.x - 30, p.y - 44, 60, 6);
    ctx.fillStyle = f > 0.4 ? '#9ad06a' : '#d9694f';
    ctx.fillRect(p.x - 30, p.y - 44, 60 * f, 6);
  }
  if (Math.sin(S.t * 3.9) > 0) {
    ctx.fillStyle = '#ff3a2a';
    ctx.beginPath(); ctx.arc(p.x - 18, p.y - 14, 3, 0, TAU); ctx.fill();
  }
}

// ---- shop / monuments / quarry / events ----
export function drawShop(ctx, S) {
  const sh = S.world.shop;
  const t = S.t;
  // safe ring
  ctx.fillStyle = 'rgba(120,200,255,0.04)';
  ctx.beginPath(); ctx.arc(sh.x, sh.y, SAFE_R, 0, TAU); ctx.fill();
  ctx.setLineDash([18, 14]);
  ctx.strokeStyle = `rgba(150,215,255,${0.26 + 0.12 * (0.5 + 0.5 * Math.sin(t * 1.5))})`;
  ctx.lineWidth = 4;
  ctx.beginPath(); ctx.arc(sh.x, sh.y, SAFE_R, 0, TAU); ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = 'rgba(150,215,255,.5)';
  ctx.font = 'bold 22px Trebuchet MS';
  ctx.textAlign = 'center';
  ctx.fillText('SAFE ZONE', sh.x, sh.y - SAFE_R + 30);
  // stall
  shadow(ctx, sh.x, sh.y + 30, 52);
  ctx.fillStyle = rgrad(ctx, sh.x, sh.y, 46, '#6a5836', '#332d1f');
  ctx.beginPath(); ctx.arc(sh.x, sh.y, 46, 0, TAU); ctx.fill();
  ctx.fillStyle = vgrad(ctx, 0, sh.y - 21, 0, 26, '#9a6e3c', '#5e4326');
  rrect(ctx, sh.x - 30, sh.y - 21, 60, 26, 4); ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,.12)'; ctx.fillRect(sh.x - 30, sh.y - 21, 60, 5);
  ctx.fillStyle = vgrad(ctx, 0, sh.y - 40, 0, 22, '#b35140', '#7e3322');
  ctx.beginPath();
  ctx.moveTo(sh.x - 40, sh.y - 18); ctx.lineTo(sh.x, sh.y - 42); ctx.lineTo(sh.x + 40, sh.y - 18);
  ctx.closePath(); ctx.fill();
  ctx.fillStyle = '#e8b04a';
  for (let i = 0; i < 5; i++) {
    ctx.beginPath(); ctx.arc(sh.x - 32 + i * 16, sh.y - 17, 4, 0, Math.PI); ctx.fill();
  }
  ctx.fillStyle = '#1f2616';
  ctx.font = 'bold 12px Trebuchet MS';
  ctx.fillText('TRADE', sh.x, sh.y - 3);
  const p = S.player;
  if (!p.dead && Math.hypot(p.x - sh.x, p.y - sh.y) < sh.r + 16 + 44) {
    ctx.fillStyle = '#c4d66a';
    ctx.font = '12px Trebuchet MS';
    ctx.fillText('E — trade', sh.x, sh.y - 50);
  }
}

export function drawMonument(ctx, S, m) {
  const t = S.t;
  ctx.textAlign = 'center';
  if (m.type === 'quarry') { drawQuarry(ctx, S, m); return; }
  ctx.save();
  ctx.translate(m.x, m.y);
  if (m.type === 'gas') {
    ctx.fillStyle = 'rgba(20,16,10,.25)';
    for (let i = 0; i < 5; i++) { blob(ctx, -70 + i * 38, 30 - (i % 2) * 50, 13, i); ctx.fill(); }
    for (const px of [-96, -30, 36, 96]) {
      ctx.fillStyle = '#3f4750'; ctx.fillRect(px - 3, -70, 6, 52);
    }
    ctx.fillStyle = vgrad(ctx, 0, -82, 0, 24, '#a8432e', '#73291a');
    rrect(ctx, -108, -82, 216, 24, 6); ctx.fill();
    ctx.fillStyle = 'rgba(244,240,228,.9)'; ctx.fillRect(-108, -73, 216, 7);
    for (const dx of [-58, 0]) {
      ctx.fillStyle = '#5b636b'; fillRR(ctx, dx - 9, -30, 18, 30, 2, '#5b636b');
      ctx.fillStyle = '#a8432e'; fillRR(ctx, dx - 7, -28, 14, 15, 2, '#a8432e');
      ctx.fillStyle = '#cfe0ea'; ctx.fillRect(dx - 5, -25, 10, 6);
    }
    ctx.fillStyle = vgrad(ctx, 0, -47, 0, 58, '#8a9199', '#4a5158');
    rrect(ctx, 31, -47, 54, 58, 3); ctx.fill();
    ctx.fillStyle = '#33363b'; ctx.fillRect(44, -25, 18, 22);
    ctx.fillStyle = '#bfe0ef'; ctx.fillRect(66, -38, 18, 16);
    ctx.fillStyle = '#3f4750'; ctx.fillRect(-106, -46, 5, 46);
    ctx.fillStyle = '#caa14a'; fillRR(ctx, -118, -74, 28, 28, 3, '#caa14a');
    ctx.fillStyle = '#2c2718'; ctx.font = 'bold 16px Trebuchet MS'; ctx.fillText('$', -104, -54);
  } else if (m.type === 'junk') {
    ctx.setLineDash([12, 8]);
    ctx.strokeStyle = '#4a4036'; ctx.lineWidth = 3;
    ctx.strokeRect(-118, -92, 236, 184);
    ctx.setLineDash([]);
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * TAU;
      const hx = Math.cos(a) * 70, hy = Math.sin(a) * 54;
      ctx.fillStyle = rgrad(ctx, hx, hy, 17, '#7e848c', '#3e4248');
      ctx.beginPath(); ctx.ellipse(hx, hy, 16, 9.5, 0, 0, TAU); ctx.fill();
      ctx.fillStyle = '#5a4030'; ctx.fillRect(hx - 13, hy - 4, 26, 4);
      ctx.fillStyle = '#8a3a2a'; ctx.fillRect(hx, hy - 8, 9, 5);
    }
    for (const [cx2, cy2, rot, col] of [[-58, -40, 0.3, '#7a4030'], [54, 44, -0.5, '#3a5a6a']]) {
      ctx.save(); ctx.translate(cx2, cy2); ctx.rotate(rot);
      fillRR(ctx, -28, -13, 56, 26, 7, col);
      ctx.fillStyle = 'rgba(255,255,255,.1)'; ctx.fillRect(-28, -13, 56, 5);
      fillRR(ctx, -13, -9, 26, 12, 4, 'rgba(20,22,20,.6)');
      ctx.fillStyle = '#22211c';
      for (const wx of [-18, 14]) for (const wy of [-14, 12]) {
        ctx.beginPath(); ctx.arc(wx, wy, 5, 0, TAU); ctx.fill();
      }
      ctx.restore();
    }
    for (const [tx2, ty2] of [[70, -50], [-66, 58]]) {
      for (let i = 0; i < 3; i++) {
        ctx.strokeStyle = '#23211d'; ctx.lineWidth = 5;
        ctx.beginPath(); ctx.arc(tx2, ty2 - i * 5, 11 - i * 1.2, 0, TAU); ctx.stroke();
      }
    }
  } else {
    ctx.fillStyle = 'rgba(10,9,6,.3)';
    ctx.beginPath(); ctx.ellipse(0, 78, 128, 20, 0, 0, TAU); ctx.fill();
    ctx.fillStyle = vgrad(ctx, 0, -82, 0, 164, '#7e848e', '#3a4048');
    rrect(ctx, -126, -82, 252, 164, 8); ctx.fill();
    ctx.fillStyle = '#5b626b'; ctx.fillRect(-132, -92, 264, 22);
    ctx.fillStyle = 'rgba(255,255,255,.07)';
    for (let i = 0; i < 6; i++) ctx.fillRect(-120 + i * 42, -60, 3, 140);
    for (const dx of [-72, 0, 72]) {
      ctx.fillStyle = '#2a2f35'; fillRR(ctx, dx - 30, 26, 60, 56, 3, '#2a2f35');
      ctx.strokeStyle = 'rgba(255,255,255,.1)'; ctx.lineWidth = 2;
      for (let i = 1; i < 4; i++) {
        ctx.beginPath(); ctx.moveTo(dx - 26, 26 + i * 13); ctx.lineTo(dx + 26, 26 + i * 13); ctx.stroke();
      }
    }
    ctx.fillStyle = '#4a5158';
    fillRR(ctx, -50, -104, 30, 16, 2, '#4a5158');
    fillRR(ctx, 24, -104, 30, 16, 2, '#4a5158');
  }
  ctx.restore();
  // no-build ring + name
  ctx.setLineDash([16, 14]);
  ctx.strokeStyle = `rgba(220,170,90,${0.2 + 0.1 * Math.sin(t * 1.6)})`;
  ctx.lineWidth = 3.5;
  ctx.beginPath(); ctx.arc(m.x, m.y, MON_NOBUILD, 0, TAU); ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = 'rgba(220,180,110,.5)';
  ctx.font = '15px Trebuchet MS';
  ctx.fillText('NO BUILD', m.x, m.y - MON_NOBUILD + 22);
  ctx.fillStyle = '#f0e4c4';
  ctx.font = 'bold 14px Trebuchet MS';
  ctx.fillText(m.name, m.x, m.y - 0.62 * m.r);
}

export function drawQuarry(ctx, S, m) {
  const q = S.quarry;
  const t = S.t;
  ctx.save();
  ctx.translate(q.x, q.y);
  ctx.fillStyle = 'rgba(70,62,44,.55)';
  ctx.beginPath(); ctx.arc(0, 0, q.r * 0.66, 0, TAU); ctx.fill();
  ctx.fillStyle = '#3a3426';
  ctx.beginPath(); ctx.ellipse(-36, 26, 44, 24, 0, 0, TAU); ctx.fill();
  ctx.fillStyle = 'rgba(0,0,0,.3)';
  ctx.beginPath(); ctx.ellipse(-36, 26, 30, 15, 0, 0, TAU); ctx.fill();
  ctx.fillStyle = PAL.metalDk; ctx.fillRect(8 - 6, -46 - 32, 12, 64);
  ctx.fillStyle = PAL.metal; ctx.fillRect(8 - 10, -46 - 42, 20, 10);
  const armA = q.owner ? Math.sin(q.arm * 2.4) * 0.35 : -0.18;
  ctx.save();
  ctx.translate(14, -44);
  ctx.rotate(armA);
  fillRR(ctx, -43, -5, 86, 10, 3, PAL.metalLt);
  ctx.fillStyle = '#a4502e';
  ctx.beginPath(); ctx.arc(-43, 0, 9, 0, TAU); ctx.fill();
  ctx.restore();
  ctx.fillStyle = '#4d3a20'; ctx.fillRect(-44 - 2, -58 - 40, 4, 46);
  const team = q.owner ? S.teams.find(tm => tm.owner === q.owner) : null;
  const fcol = q.owner === 'p1' ? '#7ec850' : team ? team.col : '#6e6a5a';
  ctx.fillStyle = fcol;
  ctx.fillRect(-42, -96, 26, 14);
  if (q.capT > 0) {
    ctx.strokeStyle = 'rgba(255,220,120,.85)'; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.arc(0, 0, q.r * 0.66, -Math.PI / 2, -Math.PI / 2 + (q.capT / 8) * TAU); ctx.stroke();
  }
  ctx.restore();
}

export function drawAirdrop(ctx, S) {
  const a = S.airdrop;
  if (a) {
    if (a.fall < 1) {
      // parachute + crate falling
      const sway = Math.sin(a.sway) * 12;
      shadow(ctx, a.x, a.gy, 26 * (0.4 + 0.6 * a.fall));
      ctx.save();
      ctx.translate(a.x + sway, a.y);
      ctx.fillStyle = '#b8503a';
      ctx.beginPath(); ctx.arc(0, -34, 26, Math.PI, 0); ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,.16)';
      ctx.beginPath(); ctx.arc(-7, -36, 12, Math.PI, 0); ctx.fill();
      ctx.strokeStyle = 'rgba(230,230,230,.6)'; ctx.lineWidth = 1.2;
      for (const dx of [-24, -8, 8, 24]) {
        ctx.beginPath(); ctx.moveTo(dx, -34); ctx.lineTo(0, -8); ctx.stroke();
      }
      fillRR(ctx, -14, -12, 28, 22, 3, '#5d6452');
      ctx.fillStyle = '#ffd76b'; ctx.fillRect(-14, -4, 28, 4);
      ctx.restore();
    } else {
      shadow(ctx, a.x, a.y + 12, 26);
      fillRR(ctx, a.x - 16, a.y - 13, 32, 26, 3, '#525a47');
      ctx.fillStyle = vgrad(ctx, 0, a.y - 13, 0, 26, '#6c7558', '#3f4634');
      rrect(ctx, a.x - 14, a.y - 11, 28, 22, 2); ctx.fill();
      ctx.fillStyle = '#ffd76b'; ctx.fillRect(a.x - 14, a.y - 2, 28, 4);
      ctx.fillStyle = 'rgba(0,0,0,.6)'; ctx.fillRect(a.x - 19, a.y - 22, 38, 4);
      ctx.fillStyle = '#e0b24a'; ctx.fillRect(a.x - 19, a.y - 22, 38 * Math.max(0, a.hp / a.max), 4);
    }
  }
  const pl = S.plane;
  if (pl) {
    ctx.save();
    ctx.translate(pl.x, pl.y);
    if (pl.vx < 0) ctx.scale(-1, 1);
    ctx.fillStyle = 'rgba(10,9,6,.2)';
    ctx.beginPath(); ctx.ellipse(0, 30, 30, 6, 0, 0, TAU); ctx.fill();
    ctx.fillStyle = '#7e8691';
    ctx.beginPath(); ctx.ellipse(0, 0, 26, 7, 0, 0, TAU); ctx.fill();
    ctx.fillStyle = '#5e6670';
    ctx.beginPath(); ctx.moveTo(-4, 0); ctx.lineTo(-20, -14); ctx.lineTo(-12, 0); ctx.closePath(); ctx.fill();
    ctx.fillStyle = '#6b727c';
    ctx.beginPath(); ctx.moveTo(2, -2); ctx.lineTo(-8, 14); ctx.lineTo(-14, 0); ctx.closePath(); ctx.fill();
    ctx.restore();
  }
}

export function drawLockedCrate(ctx, S) {
  const c = S.lockedCrate;
  if (!c) return;
  shadow(ctx, c.x, c.y + 14, 26);
  fillRR(ctx, c.x - 20, c.y - 16, 40, 30, 3, PAL.metalDk);
  ctx.fillStyle = PAL.metal; ctx.fillRect(c.x - 20, c.y - 16, 40, 8);
  ctx.strokeStyle = PAL.metalLt; ctx.lineWidth = 2;
  rrect(ctx, c.x - 20, c.y - 16, 40, 30, 3); ctx.stroke();
  fillRR(ctx, c.x - 3, c.y - 8, 6, 10, 1.5, '#1c1f24');
  const on = (c.blink % 0.8) < 0.4;
  ctx.fillStyle = on ? (c.started ? '#ffb84a' : '#d23c28') : '#3a3f45';
  if (on) { ctx.shadowColor = ctx.fillStyle; ctx.shadowBlur = 6; }
  ctx.beginPath(); ctx.arc(c.x + 13, c.y - 11, 3.4, 0, TAU); ctx.fill();
  ctx.shadowBlur = 0;
  ctx.strokeStyle = 'rgba(255,200,90,.85)'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.arc(c.x, c.y, 30, -Math.PI / 2, -Math.PI / 2 + (1 - c.t / 60) * TAU); ctx.stroke();
}

export function drawCrossing(ctx, S, c) {
  ctx.save();
  ctx.translate(c.x, c.y);
  ctx.rotate(c.railAng);
  for (const side of [-1, 1]) {
    ctx.save();
    ctx.translate(0, side * 38);
    ctx.fillStyle = 'rgba(10,9,6,.3)';
    ctx.beginPath(); ctx.ellipse(0, 3, 8, 3, 0, 0, TAU); ctx.fill();
    fillRR(ctx, -3, -13, 6, 13, 1.5, '#26262b');
    const raised = 0.46 * Math.PI;
    const ang = raised * (1 - c.gate) * -side;
    ctx.save();
    ctx.translate(0, -11);
    ctx.rotate(ang + (side < 0 ? Math.PI : 0));
    ctx.fillStyle = '#1c1c20'; ctx.fillRect(0, -2, 40, 4);
    for (let i = 0; i < 4; i++) {
      ctx.fillStyle = i % 2 ? '#e8e4da' : '#c03a2a';
      ctx.fillRect(3 + i * 9.2, -2, 8, 4);
    }
    ctx.restore();
    if (c.active) {
      const ph = Math.sin(S.t * 10) > 0;
      for (const lx of [-4.5, 4.5]) {
        const lit = (lx < 0) === ph;
        ctx.fillStyle = lit ? '#ff3a2a' : '#521616';
        if (lit) { ctx.shadowColor = '#ff3a2a'; ctx.shadowBlur = 7; }
        ctx.beginPath(); ctx.arc(lx, -7, 2.7, 0, TAU); ctx.fill();
        ctx.shadowBlur = 0;
      }
    }
    ctx.restore();
  }
  ctx.restore();
}

export function drawDummy(ctx, S, d) {
  shadow(ctx, d.x, d.y + 8, d.r);
  ctx.fillStyle = '#5b4a2c';
  ctx.fillRect(d.x - 3, d.y - 4, 6, d.r + 8);
  for (const [r, col] of [[d.r, '#d8c79a'], [d.r * 0.74, '#b23b2a'], [d.r * 0.5, '#e8e0cf'], [d.r * 0.28, '#b23b2a']]) {
    ctx.fillStyle = col;
    ctx.beginPath(); ctx.arc(d.x, d.y - 6, r, 0, TAU); ctx.fill();
  }
  if (d.hit > 0) {
    ctx.globalAlpha = 0.45; ctx.fillStyle = '#fff';
    ctx.beginPath(); ctx.arc(d.x, d.y - 6, d.r, 0, TAU); ctx.fill();
    ctx.globalAlpha = 1;
  }
  hpRing(ctx, d.x, d.y, d.r + 5, d.hp / d.max, '#e8b06a');
}
