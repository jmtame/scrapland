// Gritty earth palette + tiny canvas helpers shared by the render modules.
export const PAL = {
  ocean0: '#0d2b35', ocean1: '#081b24', wave: 'rgba(140,190,205,0.08)',
  sand: '#b3a075', sandWet: '#8d7d5c', iceShore: '#ccdbe4',
  desert0: '#b59a66', desert1: '#8c7544', desertPatch: 'rgba(120,96,52,.4)',
  jungle0: '#4a5c30', jungle1: '#2c3a1c', junglePatch: 'rgba(26,40,16,.5)',
  winter0: '#b9c7d1', winter1: '#8a9aa8', winterPatch: 'rgba(225,236,243,.5)',
  road0: '#4f4430', road1: '#665838', roadWear: 'rgba(30,25,16,.25)',
  rail: '#9aa1a8', tie: '#3a2e1d', ballast0: '#574d40', ballast1: '#6b5f4e',
  ink: '#171510', shadow: 'rgba(10,9,6,0.35)',
  woodDk: '#5d3f1e', wood: '#8a6230', woodLt: '#b08348',
  stoneDk: '#565c63', stone: '#7f868d', stoneLt: '#a5acb3',
  metalDk: '#3c4147', metal: '#585f66', metalLt: '#7d8893',
  armorDk: '#272f3c', armor: '#41526b', armorLt: '#7f93ad',
  tcGold: '#c89d48', skin: '#c79c74',
  tracer: '#ffe9a3', hmgTracer: '#ff5a2a', ricochet: '#86d8ff', flash: '#ffd76b',
  blood: '#7e2317', explosion: '#ffb24a',
  laser: 'rgba(255,46,40,0.5)',
  player: '#7a8a50', playerDk: '#4d5732',
  guard: '#bd5e2c', guardDk: '#7e3318',
  night: '#060b1c',
};

export function matCols(mat) {
  if (mat === 'stone') return { dk: PAL.stoneDk, mid: PAL.stone, lt: PAL.stoneLt };
  if (mat === 'metal') return { dk: PAL.metalDk, mid: PAL.metal, lt: PAL.metalLt };
  if (mat === 'armored') return { dk: PAL.armorDk, mid: PAL.armor, lt: PAL.armorLt };
  return { dk: PAL.woodDk, mid: PAL.wood, lt: PAL.woodLt };
}

export function rrect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  if (ctx.roundRect) ctx.roundRect(x, y, w, h, r);
  else ctx.rect(x, y, w, h);
}
export function fillRR(ctx, x, y, w, h, r, col) {
  ctx.fillStyle = col;
  rrect(ctx, x, y, w, h, r);
  ctx.fill();
}
export function vgrad(ctx, x, y, w, h, c0, c1) {
  const g = ctx.createLinearGradient(0, y, 0, y + h);
  g.addColorStop(0, c0); g.addColorStop(1, c1);
  return g;
}
export function rgrad(ctx, x, y, r, c0, c1) {
  const g = ctx.createRadialGradient(x - 0.32 * r, y - 0.32 * r, r * 0.1, x, y, r);
  g.addColorStop(0, c0); g.addColorStop(1, c1);
  return g;
}
export function shadow(ctx, x, y, r) {
  const g = ctx.createRadialGradient(x, y, 0, x, y, r);
  g.addColorStop(0, 'rgba(8,7,5,.34)');
  g.addColorStop(0.6, 'rgba(8,7,5,.18)');
  g.addColorStop(1, 'rgba(8,7,5,0)');
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.ellipse(x, y, r, r * 0.55, 0, 0, Math.PI * 2);
  ctx.fill();
}
export function blob(ctx, x, y, r, seed) {
  ctx.beginPath();
  for (let i = 0; i <= 9; i++) {
    const a = (i / 9) * Math.PI * 2;
    const rr = r * (0.84 + 0.18 * Math.sin(3 * a + seed));
    const px = x + Math.cos(a) * rr, py = y + Math.sin(a) * rr;
    i ? ctx.lineTo(px, py) : ctx.moveTo(px, py);
  }
  ctx.closePath();
}
export function poly(ctx, x, y, r, n, seed) {
  ctx.beginPath();
  for (let i = 0; i <= n; i++) {
    const a = (i / n) * Math.PI * 2;
    const rr = r * (0.78 + 0.26 * Math.sin(2.3 * i + seed));
    const px = x + Math.cos(a) * rr, py = y + Math.sin(a) * rr;
    i ? ctx.lineTo(px, py) : ctx.moveTo(px, py);
  }
  ctx.closePath();
}
export function hpRing(ctx, x, y, r, frac, col) {
  if (frac >= 1) return;
  ctx.lineWidth = 3;
  ctx.strokeStyle = 'rgba(0,0,0,.6)';
  ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.stroke();
  ctx.strokeStyle = col;
  ctx.beginPath(); ctx.arc(x, y, r, -Math.PI / 2, -Math.PI / 2 + frac * Math.PI * 2); ctx.stroke();
}
