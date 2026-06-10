// Weather + ambience drawing: rain/snow (screen space, biome-blended by
// camera), lightning, ground fog banks, clouds + shadows, fireflies.
import { WORLD } from '../../sim/config.js';
import { smooth01, clamp } from '../../sim/util.js';

export function makeWeather(S, view, cam) {
  let flakes = null, drops = null, bolt = null, boltT = 0;

  function ensureParticles() {
    if (!flakes) {
      flakes = [];
      for (let i = 0; i < 340; i++) flakes.push({ x: Math.random(), y: Math.random(), sp: 0.10 + Math.random() * 0.22, r: 1 + Math.random() * 2.3, drift: Math.random() * 7, near: Math.random() < 0.4 });
      drops = [];
      for (let i = 0; i < 460; i++) drops.push({ x: Math.random(), y: Math.random(), sp: 0.45 + Math.random() * 1.15, len: 7 + Math.random() * 15, near: Math.random() < 0.34 });
    }
  }

  return {
    drawWorld(ctx) {
      // fog banks (world space, skipped in winter biome)
      const W = S.weather;
      if (W.fog > 0.02 && S.fogBanks) {
        for (const f of S.fogBanks) {
          if (!cam.inView(f.x, f.y, f.r * 1.6)) continue;
          if (S.world.biomeAt(f.x, f.y) === 'winter') continue;
          for (const p of f.puffs) {
            const a = W.fog * f.dens * 0.6;
            const g = ctx.createRadialGradient(f.x + p.dx, f.y + p.dy, p.r * 0.15, f.x + p.dx, f.y + p.dy, p.r);
            g.addColorStop(0, `rgba(216,224,232,${a})`);
            g.addColorStop(0.5, `rgba(213,221,230,${a * 0.5})`);
            g.addColorStop(1, 'rgba(210,218,228,0)');
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.ellipse(f.x + p.dx, f.y + p.dy, p.r, p.r * 0.82, 0, 0, 7);
            ctx.fill();
          }
        }
      }
      // fireflies (jungle, additive)
      if (S.fireflies) {
        const dark = 1 - (0.5 + 0.5 * Math.cos(Math.PI * 2 * ((S.t % 240) / 240)));
        ctx.globalCompositeOperation = 'lighter';
        for (const ff of S.fireflies) {
          if (!cam.inView(ff.x, ff.y, 30)) continue;
          if (S.world.biomeAt(ff.x, ff.y) !== 'jungle') continue;
          const boost = 0.45 + 0.4 * dark + 0.45 * Math.min(1, S.weather.fog);
          const a = clamp(boost * (0.6 + 0.4 * Math.sin(ff.ph)), 0, 1);
          const g = ctx.createRadialGradient(ff.x, ff.y, 0, ff.x, ff.y, 7);
          g.addColorStop(0, `rgba(216,255,134,${0.9 * a})`);
          g.addColorStop(1, 'rgba(150,220,90,0)');
          ctx.fillStyle = g;
          ctx.beginPath(); ctx.arc(ff.x, ff.y, 7, 0, 7); ctx.fill();
          ctx.fillStyle = `rgba(240,255,205,${a})`;
          ctx.beginPath(); ctx.arc(ff.x, ff.y, 1.4, 0, 7); ctx.fill();
        }
        ctx.globalCompositeOperation = 'source-over';
      }
    },
    drawCloudShadows(ctx) {
      if (!S.clouds) return;
      for (const cl of S.clouds) {
        if (!cam.inView(cl.x + 64, cl.y + 86, cl.r * 1.6)) continue;
        for (const p of cl.puffs) {
          const a = (cl.heavy ? 0.30 : 0.18) * cl.op;
          const g = ctx.createRadialGradient(cl.x + p.dx + 64, cl.y + p.dy + 86, p.r * 0.2, cl.x + p.dx + 64, cl.y + p.dy + 86, p.r);
          g.addColorStop(0, `rgba(12,17,27,${a})`);
          g.addColorStop(1, 'rgba(12,17,27,0)');
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.ellipse(cl.x + p.dx + 64, cl.y + p.dy + 86, p.r, p.r * 0.74, 0, 0, 7);
          ctx.fill();
        }
      }
    },
    drawClouds(ctx, lightLevel) {
      if (!S.clouds) return;
      const bright = 0.6 + 0.4 * lightLevel;
      for (const cl of S.clouds) {
        if (!cam.inView(cl.x, cl.y, cl.r * 1.6)) continue;
        for (const p of cl.puffs) {
          const a0 = (cl.heavy ? 0.72 : 0.42) * cl.op;
          const g = ctx.createRadialGradient(cl.x + p.dx, cl.y + p.dy, p.r * 0.15, cl.x + p.dx, cl.y + p.dy, p.r);
          g.addColorStop(0, `rgba(${248 * bright | 0},${250 * bright | 0},${253 * bright | 0},${a0})`);
          g.addColorStop(1, 'rgba(244,248,252,0)');
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.ellipse(cl.x + p.dx, cl.y + p.dy, p.r, p.r * 0.78, 0, 0, 7);
          ctx.fill();
        }
      }
    },
    // screen-space precipitation; biome blend by camera position
    drawScreen(ctx) {
      const W = S.weather;
      if (W.rain <= 0.02) { bolt = null; return; }
      ensureParticles();
      const t = (cam.cx + S.world.biomeRidge(cam.cy)) / WORLD.w;
      const bl = 0.085;
      const snowAmt = smooth01((t - (2 / 3 - bl)) / (2 * bl));
      const rainAmt = smooth01((t - (1 / 3 - bl)) / (2 * bl)) * (1 - snowAmt);
      const rI = W.rain * rainAmt, sI = W.rain * snowAmt;
      const VW = view.VW, VH = view.VH;
      if (sI > 0.02) {
        ctx.fillStyle = `rgba(210,224,238,${sI * 0.16})`;
        ctx.fillRect(0, 0, VW, VH);
        ctx.fillStyle = '#f4f8fc';
        for (const f of flakes) {
          const fall = ((f.y + S.t * f.sp * 0.18) % 1.06);
          const y = fall * (VH + 40) - 20;
          const x = (f.x * VW + Math.sin(S.t * 0.8 + f.drift) * 10 + S.wind * 22 * fall + VW) % VW;
          ctx.globalAlpha = (f.near ? 0.9 : 0.55) * clamp(sI * 1.4, 0, 1);
          ctx.beginPath(); ctx.arc(x, y, f.r * (f.near ? 1.4 : 1), 0, 7); ctx.fill();
        }
        ctx.globalAlpha = 1;
      }
      if (rI > 0.02) {
        ctx.fillStyle = `rgba(26,36,54,${rI * 0.32})`;
        ctx.fillRect(0, 0, VW, VH);
        const slant = 0.24 + S.wind * 0.05;
        const sn = Math.sin(slant), cs = Math.cos(slant);
        for (const pass of [0, 1]) {
          ctx.strokeStyle = pass ? `rgba(198,214,240,${0.42 * rI})` : `rgba(168,188,220,${0.22 * rI})`;
          ctx.lineWidth = pass ? 1.7 : 1;
          ctx.beginPath();
          for (const d of drops) {
            if (pass !== (d.near ? 1 : 0)) continue;
            const fall = ((d.y + S.t * d.sp * 0.5) % 1.08);
            const y = fall * (VH + 60) - 30;
            const x = (d.x * VW + S.wind * 40 * fall + VW) % VW;
            const L = d.len * (pass ? 1.5 : 1);
            ctx.moveTo(x, y);
            ctx.lineTo(x + sn * L, y + cs * L * 2.2);
          }
          ctx.stroke();
        }
      }
      // lightning
      if (rainAmt > 0.55) {
        for (const e of S.events) {
          if (e.type === 'bolt') {
            bolt = { pts: makeBolt(VW, VH), life: 0.5, max: 0.5 };
          }
        }
        if (W.flash > 0.01) {
          ctx.fillStyle = `rgba(222,232,255,${W.flash * 0.5})`;
          ctx.fillRect(0, 0, VW, VH);
        }
        if (bolt) {
          bolt.life -= 1 / 60;
          if (bolt.life <= 0) bolt = null;
          else {
            const a = bolt.life / bolt.max;
            ctx.strokeStyle = `rgba(236,242,255,${a})`;
            ctx.lineWidth = 2.4 + 2 * a;
            ctx.shadowColor = 'rgba(200,220,255,.9)';
            ctx.shadowBlur = 14;
            ctx.beginPath();
            bolt.pts.forEach((p, i) => i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y));
            ctx.stroke();
            ctx.shadowBlur = 0;
          }
        }
      }
    },
  };

  function makeBolt(VW, VH) {
    const pts = [];
    let x = (0.2 + Math.random() * 0.6) * VW, y = 0;
    const endY = VH * (0.5 + Math.random() * 0.4);
    while (y < endY) {
      pts.push({ x, y });
      y += 20 + Math.random() * 28;
      x += (Math.random() * 2 - 1) * 42;
    }
    return pts;
  }
}
