// Transient FX: tracers, rockets, explosions, fires, particles, floats,
// decals, footprints. Additive glow where it sells the grit.
import { PAL, fillRR, rrect, shadow } from './palette.js';

const TAU = Math.PI * 2;

export function drawScorch(ctx, S, cam) {
  for (const s of S.scorch) {
    if (!cam.inView(s.x, s.y, s.r + 20)) continue;
    const g = ctx.createRadialGradient(s.x, s.y, s.r * 0.1, s.x, s.y, s.r);
    g.addColorStop(0, 'rgba(16,12,8,.55)');
    g.addColorStop(0.7, 'rgba(18,14,10,.35)');
    g.addColorStop(1, 'rgba(18,14,10,0)');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.ellipse(s.x, s.y, s.r, s.r * 0.72, 0, 0, TAU); ctx.fill();
  }
}

export function drawFootprints(ctx, S, cam) {
  for (const f of S.footprints) {
    if (!cam.inView(f.x, f.y, 20)) continue;
    ctx.globalAlpha = (1 - f.t / 10) * 0.28;
    ctx.fillStyle = 'rgb(28,22,14)';
    ctx.save();
    ctx.translate(f.x, f.y);
    ctx.rotate(f.a);
    ctx.beginPath(); ctx.ellipse(0, 0, 4.4, 2.5, 0, 0, TAU); ctx.fill();
    ctx.restore();
  }
  ctx.globalAlpha = 1;
}

export function drawBullets(ctx, S, cam) {
  for (const b of S.bullets) {
    if (!cam.inView(b.x, b.y, 60)) continue;
    let col = PAL.tracer, lw = 3, head = 2, glow = false;
    if (b.col === 'hmg') { col = PAL.hmgTracer; lw = 4; head = 2.8; glow = true; }
    else if (b.col === 'ricochet' || b.ricochet) { col = PAL.ricochet; lw = 4; head = 2.8; glow = true; }
    if (glow) { ctx.shadowColor = col; ctx.shadowBlur = 6; }
    ctx.strokeStyle = col;
    ctx.lineWidth = lw;
    ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(b.px, b.py); ctx.lineTo(b.x, b.y); ctx.stroke();
    ctx.fillStyle = glow ? col : '#fff';
    ctx.beginPath(); ctx.arc(b.x, b.y, head, 0, TAU); ctx.fill();
    ctx.shadowBlur = 0;
  }
}

export function drawRockets(ctx, S, cam) {
  for (const r of S.rockets) {
    if (!cam.inView(r.x, r.y, 40)) continue;
    ctx.save();
    ctx.translate(r.x, r.y);
    ctx.rotate(Math.atan2(r.vy, r.vx));
    ctx.fillStyle = '#8a8f7a';
    ctx.fillRect(-9, -4, 4, 8);
    fillRR(ctx, -7, -3.5, 13, 7, 2, '#39402f');
    ctx.fillStyle = PAL.explosion;
    ctx.beginPath(); ctx.moveTo(6, -3.5); ctx.lineTo(12, 0); ctx.lineTo(6, 3.5); ctx.closePath(); ctx.fill();
    // exhaust
    ctx.shadowColor = '#ff9b3d'; ctx.shadowBlur = 8;
    ctx.fillStyle = 'rgba(255,155,61,.9)';
    ctx.beginPath(); ctx.arc(-10, 0, 3 + Math.random() * 1.5, 0, TAU); ctx.fill();
    ctx.shadowBlur = 0;
    ctx.restore();
  }
}

export function drawGrenades(ctx, S, cam) {
  for (const g of S.grenades) {
    if (!cam.inView(g.x, g.y, 20)) continue;
    shadow(ctx, g.x, g.y + 4, 5);
    ctx.fillStyle = '#2c3a22';
    ctx.beginPath(); ctx.arc(g.x, g.y, 6, 0, TAU); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,.2)';
    ctx.beginPath(); ctx.arc(g.x - 1.6, g.y - 1.6, 2.2, 0, TAU); ctx.fill();
    if (Math.sin(g.bob * 30) > 0) {
      ctx.fillStyle = '#ff3a2a';
      ctx.beginPath(); ctx.arc(g.x + 3, g.y - 4, 1.6, 0, TAU); ctx.fill();
    }
  }
}

export function drawSatchels(ctx, S, cam) {
  for (const s of S.satchels) {
    if (!cam.inView(s.x, s.y, 20)) continue;
    fillRR(ctx, s.x - 7, s.y - 6, 14, 12, 2, '#3a342c');
    ctx.fillStyle = '#23201a'; ctx.fillRect(s.x - 7, s.y - 6, 14, 3);
    const on = Math.sin(S.t * 18) > 0;
    ctx.fillStyle = on ? '#ff3a2a' : '#7a1a12';
    if (on) { ctx.shadowColor = '#ff3a2a'; ctx.shadowBlur = 6; }
    ctx.beginPath(); ctx.arc(s.x + 4, s.y - 2, 2, 0, TAU); ctx.fill();
    ctx.shadowBlur = 0;
  }
}

export function drawFires(ctx, S, cam) {
  for (const f of S.fires) {
    if (!cam.inView(f.x, f.y, f.r + 40)) continue;
    const a = Math.min(1, f.life / 2) * Math.min(1, (f.max - f.life) / 0.5);
    ctx.globalAlpha = a;
    const g = ctx.createRadialGradient(f.x, f.y, 2, f.x, f.y, f.r);
    g.addColorStop(0, 'rgba(255,150,45,0.5)');
    g.addColorStop(1, 'rgba(255,150,45,0)');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(f.x, f.y, f.r, 0, TAU); ctx.fill();
    for (let k = 0; k < 5; k++) {
      const ph = S.t * 9 + k * 1.7 + f.x * 0.07;
      const x = f.x + Math.sin(ph) * 5 + (k - 2) * 6;
      const h = 16 + Math.sin(1.3 * ph) * 7 + (k === 2 ? 8 : 0);
      const gg = ctx.createLinearGradient(0, f.y, 0, f.y - h);
      gg.addColorStop(0, '#cf3c18');
      gg.addColorStop(0.55, '#ff8a2a');
      gg.addColorStop(1, '#ffe46e');
      ctx.fillStyle = gg;
      ctx.beginPath();
      ctx.moveTo(x - 4, f.y);
      ctx.quadraticCurveTo(x - 5, f.y - h * 0.5, x, f.y - h);
      ctx.quadraticCurveTo(x + 5, f.y - h * 0.5, x + 4, f.y);
      ctx.closePath(); ctx.fill();
    }
    ctx.globalAlpha = 1;
  }
}

export function drawWrecks(ctx, S, cam) {
  for (const w of S.wrecks) {
    if (!cam.inView(w.x, w.y, 60)) continue;
    ctx.fillStyle = '#22211c';
    ctx.save();
    ctx.translate(w.x, w.y);
    ctx.rotate(w.x % 1.3);
    fillRR(ctx, -16, -9, 32, 18, 4, '#26241e');
    ctx.fillStyle = '#16151278';
    ctx.fillRect(-10, -5, 20, 10);
    ctx.restore();
    const flick = 0.7 + Math.sin(S.t * 11 + w.x) * 0.3;
    const g = ctx.createRadialGradient(w.x, w.y - 4, 1, w.x, w.y - 4, 22 * flick);
    g.addColorStop(0, 'rgba(255,170,60,.8)');
    g.addColorStop(1, 'rgba(255,120,30,0)');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(w.x, w.y - 4, 22 * flick, 0, TAU); ctx.fill();
  }
}

export function drawParticles(ctx, S, cam) {
  for (const p of S.particles) {
    if (!cam.inView(p.x, p.y, 30)) continue;
    ctx.globalAlpha = Math.max(0, p.life / p.max);
    ctx.fillStyle = p.col;
    ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, TAU); ctx.fill();
  }
  ctx.globalAlpha = 1;
}

export function drawFlashes(ctx, S, cam) {
  for (const f of S.flashes) {
    if (!cam.inView(f.x, f.y, f.r * 2)) continue;
    const t = f.life / f.max;
    ctx.globalAlpha = 0.8 * t;
    ctx.fillStyle = PAL.explosion;
    ctx.beginPath(); ctx.arc(f.x, f.y, f.r * (1.1 - 0.5 * t), 0, TAU); ctx.fill();
    ctx.globalAlpha = t;
    ctx.fillStyle = '#fff3c8';
    ctx.beginPath(); ctx.arc(f.x, f.y, 0.5 * f.r * (1 - 0.4 * t), 0, TAU); ctx.fill();
    // shockwave ring
    ctx.globalAlpha = 0.5 * t;
    ctx.strokeStyle = 'rgba(255,220,160,.8)';
    ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(f.x, f.y, f.r * (1.5 - t), 0, TAU); ctx.stroke();
  }
  ctx.globalAlpha = 1;
  if (S.muzzle) {
    const m = S.muzzle;
    ctx.save();
    ctx.translate(m.x, m.y);
    ctx.rotate(m.a);
    ctx.fillStyle = PAL.flash;
    ctx.beginPath();
    for (let i = 0; i < 10; i++) {
      const r = i % 2 ? 4 : 9;
      const a = (i / 10) * TAU;
      i ? ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r) : ctx.moveTo(r, 0);
    }
    ctx.closePath(); ctx.fill();
    ctx.fillStyle = '#fff6c8';
    ctx.beginPath(); ctx.arc(0, 0, 3, 0, TAU); ctx.fill();
    ctx.restore();
  }
}

export function drawFloats(ctx, S, cam) {
  ctx.font = 'bold 13px Trebuchet MS';
  ctx.textAlign = 'center';
  for (const f of S.floats) {
    if (!cam.inView(f.x, f.y, 60)) continue;
    const a = Math.max(0, f.life / f.max);
    ctx.globalAlpha = a;
    ctx.fillStyle = '#000';
    ctx.fillText(f.text, f.x + 1, f.y + 1);
    ctx.fillStyle = f.col;
    ctx.fillText(f.text, f.x, f.y);
  }
  ctx.globalAlpha = 1;
}

export function drawLoot(ctx, S, cam) {
  const COLS = {
    wood: ['#b98446', '#6f4a22'], stone: ['#aab1b8', '#5f656c'], metal: ['#e8a24e', '#a85f1c'],
    scrap: ['#d6dce0', '#717880'], ammo: ['#ffe08a', '#b8902a'], rocket: ['#ff9a5a', '#c2461c'],
    sniper: ['#bfe3ff', '#5f7e9e'], satchel: ['#c8b88a', '#6a5c3a'], gun: ['#c4c9bd', '#5a6052'],
  };
  for (const L of S.loot) {
    if (!cam.inView(L.x, L.y, 20)) continue;
    const c = COLS[L.kind] || COLS.metal;
    const bob = Math.sin(L.bob * 3) * 2;
    shadow(ctx, L.x, L.y + 6, 6);
    fillRR(ctx, L.x - 5, L.y - 5 + bob, 10, 10, 3, c[1]);
    fillRR(ctx, L.x - 4, L.y - 4 + bob, 8, 4, 2, c[0]);
    ctx.strokeStyle = 'rgba(0,0,0,.4)'; ctx.lineWidth = 1;
    rrect(ctx, L.x - 5, L.y - 5 + bob, 10, 10, 3); ctx.stroke();
  }
}

export function drawSignal(ctx, S, cam) {
  const s = S.signal;
  if (!s || !cam.inView(s.x, s.y, 40)) return;
  fillRR(ctx, s.x - 4, s.y - 3, 8, 6, 2, '#5d3a78');
  ctx.fillStyle = '#a96bd4';
  ctx.fillRect(s.x - 4, s.y - 3, 8, 2);
}

export function drawLaserSight(ctx, S, cam, wallBlocksView) {
  const p = S.player;
  if (!p.rifleLaser || S.slot !== 2 || p.dead || p.inCopter) return;
  const a = p.angle;
  let len = 640;
  for (let d = 60; d <= 640; d += 60) {
    const x = p.x + Math.cos(a) * d, y = p.y + Math.sin(a) * d;
    if (wallBlocksView(S, p.x, p.y, x, y)) { len = d; break; }
  }
  const x0 = p.x + Math.cos(a) * 22, y0 = p.y + Math.sin(a) * 22;
  const x1 = p.x + Math.cos(a) * len, y1 = p.y + Math.sin(a) * len;
  ctx.strokeStyle = PAL.laser;
  ctx.lineWidth = 1.4;
  ctx.shadowColor = 'rgba(255,40,30,.8)';
  ctx.shadowBlur = 5;
  ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke();
  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(255,90,80,0.95)';
  ctx.beginPath(); ctx.arc(x1, y1, 2.3, 0, TAU); ctx.fill();
}
