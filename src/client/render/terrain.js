// Terrain pre-baked into offscreen chunks (512 px): biome ground with value-
// noise mottling, shoreline, roads with wear, rails, crossings base, decor.
// Baked once per chunk on demand — the per-frame cost of v1's cell fills and
// hash decor is gone entirely.
import { WORLD, TILE } from '../../sim/config.js';
import { hash2, smooth01, clamp } from '../../sim/util.js';
import { PAL } from './palette.js';

const CHUNK = 512;

export function makeTerrain(S) {
  const cols = Math.ceil(WORLD.w / CHUNK), rows = Math.ceil(WORLD.h / CHUNK);
  const chunks = new Array(cols * rows).fill(null);

  function biomeCols(x, y) {
    const t = (x + S.world.biomeRidge(y)) / WORLD.w;
    const tw = 0.05;
    const dj = smooth01((t - (1 / 3 - tw)) / (2 * tw));
    const jw = smooth01((t - (2 / 3 - tw)) / (2 * tw));
    const mix = (a, b, f) => [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f];
    const des = [181, 154, 102], jun = [74, 92, 48], win = [185, 199, 209];
    let c = mix(des, jun, dj);
    c = mix(c, win, jw);
    return c;
  }

  function bake(ci) {
    const cgx = ci % cols, cgy = (ci / cols) | 0;
    const ox = cgx * CHUNK, oy = cgy * CHUNK;
    const cv = document.createElement('canvas');
    cv.width = CHUNK; cv.height = CHUNK;
    const c = cv.getContext('2d');

    // ocean base (land drawn on top)
    c.fillStyle = PAL.ocean0;
    c.fillRect(0, 0, CHUNK, CHUNK);

    // ground cells (32 px) with noise mottling, only on land
    const CS = 32;
    for (let y = 0; y < CHUNK; y += CS) {
      for (let x = 0; x < CHUNK; x += CS) {
        const wx = ox + x + CS / 2, wy = oy + y + CS / 2;
        const lf = S.world.landFactor(wx, wy);
        if (lf <= -0.02) continue;
        let [r, g, b] = biomeCols(wx, wy);
        // depth shading + noise
        const n = hash2((wx / CS) | 0, (wy / CS) | 0);
        const n2 = hash2((wx / 96) | 0, (wy / 96) | 0);
        const shade = 0.88 + n * 0.14 + (n2 - 0.5) * 0.12 - (wy / WORLD.h) * 0.06;
        r *= shade; g *= shade; b *= shade;
        // shoreline sand blend
        if (lf < 0.045) {
          const f = clamp(lf / 0.045, 0, 1);
          const winter = S.world.biomeAt(wx, wy) === 'winter';
          const s = winter ? [204, 219, 228] : [179, 160, 117];
          const wet = winter ? [150, 170, 185] : [141, 125, 92];
          const sandC = lf < 0.02 ? wet : s;
          r = sandC[0] + (r - sandC[0]) * f; g = sandC[1] + (g - sandC[1]) * f; b = sandC[2] + (b - sandC[2]) * f;
        }
        c.fillStyle = `rgb(${r | 0},${g | 0},${b | 0})`;
        c.fillRect(x - 1, y - 1, CS + 2, CS + 2);
      }
    }

    // decor per 48px cell (static bake; the world is big — keep it subtle)
    for (let y = 0; y < CHUNK; y += 48) {
      for (let x = 0; x < CHUNK; x += 48) {
        const wx = ox + x, wy = oy + y;
        if (!S.world.onLand(wx, wy) || S.world.lakeAt(wx, wy)) continue;
        const cx = (wx / 48) | 0, cy = (wy / 48) | 0;
        const h = hash2(cx, cy);
        const biome = S.world.biomeAt(wx, wy);
        const lx = x + (hash2(cx + 7, cy) - 0.5) * 40 + 24;
        const ly = y + (hash2(cx, cy + 13) - 0.5) * 40 + 24;
        if (h < 0.09) {
          // grass tuft / sand ripple / snow streak
          if (biome === 'desert') {
            c.fillStyle = 'rgba(120,96,52,.35)';
            c.beginPath(); c.ellipse(lx, ly, 8, 2.6, h * 6, 0, 7); c.fill();
          } else if (biome === 'winter') {
            c.strokeStyle = 'rgba(225,236,243,.6)';
            c.lineWidth = 1.5;
            c.beginPath(); c.moveTo(lx - 5, ly + 2); c.quadraticCurveTo(lx, ly - 5, lx + 5, ly + 1); c.stroke();
          } else {
            c.strokeStyle = `rgba(${60 + h * 220 | 0},116,44,.65)`;
            c.lineWidth = 1.5;
            for (let bl = -1; bl <= 1; bl++) {
              c.beginPath(); c.moveTo(lx + bl * 2.4, ly + 3);
              c.quadraticCurveTo(lx + bl * 3.6, ly - 3, lx + bl * 5, ly - 6.5);
              c.stroke();
            }
          }
        }
        const hr = hash2(3 * cx + 11, 5 * cy + 7);
        if (hr > 0.93) {
          const pr = 2.2 + hr * 3;
          const cols2 = biome === 'winter' ? ['#dfe7ee', '#b4c5d2'] : biome === 'desert' ? ['#a8905c', '#7d6940'] : ['#7e848c', '#565b62'];
          c.fillStyle = cols2[1];
          c.beginPath(); c.ellipse(lx + 14, ly + 10, pr, pr * 0.75, 0.4, 0, 7); c.fill();
          c.fillStyle = cols2[0];
          c.beginPath(); c.ellipse(lx + 13.4, ly + 9.4, pr * 0.7, pr * 0.5, 0.4, 0, 7); c.fill();
        }
        const hg = hash2(2 * cx + 5, 9 * cy + 1);
        if (biome === 'jungle' && hg > 0.78) {
          c.strokeStyle = `rgba(96,150,60,${0.3 + 0.3 * hg})`;
          c.lineWidth = 1.4;
          for (let f = -1; f <= 1; f++) {
            c.beginPath(); c.moveTo(lx - 14, ly + 16);
            c.quadraticCurveTo(lx - 14 + f * 5, ly + 6, lx - 14 + f * 9, ly + 1);
            c.stroke();
          }
        } else if (biome === 'desert' && hg > 0.92) {
          c.fillStyle = '#4e7a3a';
          c.fillRect(lx + 6, ly - 18, 3.6, 13);
          c.fillRect(lx + 2, ly - 14, 4, 3);
          c.fillRect(lx + 9.6, ly - 16, 4, 3);
        } else if (biome === 'winter' && hg > 0.88) {
          c.fillStyle = 'rgba(240,248,253,.7)';
          c.beginPath(); c.ellipse(lx, ly + 12, 5 + 4 * hg, 3 + 2 * hg, 0, 0, 7); c.fill();
        }
      }
    }

    // monument concrete pads
    for (const m of S.world.monuments) {
      if (m.x + m.r < ox || m.x - m.r > ox + CHUNK || m.y + m.r < oy || m.y - m.r > oy + CHUNK) continue;
      const g = c.createRadialGradient(m.x - ox, m.y - oy, m.r * 0.2, m.x - ox, m.y - oy, m.r);
      g.addColorStop(0, 'rgba(96,92,82,.85)');
      g.addColorStop(0.8, 'rgba(86,82,72,.55)');
      g.addColorStop(1, 'rgba(80,76,66,0)');
      c.fillStyle = g;
      c.beginPath(); c.arc(m.x - ox, m.y - oy, m.r, 0, 7); c.fill();
      // cracks
      c.strokeStyle = 'rgba(40,38,32,.4)';
      c.lineWidth = 1.2;
      for (let k = 0; k < 5; k++) {
        const a = hash2(k, m.x | 0) * 6.28;
        c.beginPath();
        c.moveTo(m.x - ox + Math.cos(a) * m.r * 0.2, m.y - oy + Math.sin(a) * m.r * 0.2);
        c.lineTo(m.x - ox + Math.cos(a + 0.4) * m.r * 0.7, m.y - oy + Math.sin(a + 0.4) * m.r * 0.7);
        c.stroke();
      }
    }

    // roads (with rail fade + wear)
    c.lineCap = 'round'; c.lineJoin = 'round';
    for (const rd of S.world.roads) {
      for (let i = 0; i < rd.pts.length - 1; i++) {
        const a = rd.pts[i], b = rd.pts[i + 1];
        if (Math.max(a.x, b.x) < ox - 60 || Math.min(a.x, b.x) > ox + CHUNK + 60) continue;
        if (Math.max(a.y, b.y) < oy - 60 || Math.min(a.y, b.y) > oy + CHUNK + 60) continue;
        const fade = Math.min(rd.fade[i], rd.fade[i + 1]);
        if (fade <= 0.02) continue;
        c.globalAlpha = fade;
        c.strokeStyle = PAL.road0; c.lineWidth = rd.w;
        c.beginPath(); c.moveTo(a.x - ox, a.y - oy); c.lineTo(b.x - ox, b.y - oy); c.stroke();
        c.strokeStyle = PAL.road1; c.lineWidth = rd.w - 4;
        c.beginPath(); c.moveTo(a.x - ox, a.y - oy); c.lineTo(b.x - ox, b.y - oy); c.stroke();
        // tire wear streaks
        const ang = Math.atan2(b.y - a.y, b.x - a.x);
        const px = -Math.sin(ang), py = Math.cos(ang);
        c.strokeStyle = PAL.roadWear; c.lineWidth = 3;
        for (const off of [-rd.w * 0.22, rd.w * 0.22]) {
          c.beginPath();
          c.moveTo(a.x - ox + px * off, a.y - oy + py * off);
          c.lineTo(b.x - ox + px * off, b.y - oy + py * off);
          c.stroke();
        }
        c.globalAlpha = 1;
      }
    }
    // rails
    const GA = 11;
    for (const rl of S.world.rails) {
      for (let i = 0; i < rl.pts.length - 1; i++) {
        const a = rl.pts[i], b = rl.pts[i + 1];
        if (Math.max(a.x, b.x) < ox - 60 || Math.min(a.x, b.x) > ox + CHUNK + 60) continue;
        if (Math.max(a.y, b.y) < oy - 60 || Math.min(a.y, b.y) > oy + CHUNK + 60) continue;
        c.strokeStyle = PAL.ballast0; c.lineWidth = 2 * GA + 16;
        c.beginPath(); c.moveTo(a.x - ox, a.y - oy); c.lineTo(b.x - ox, b.y - oy); c.stroke();
        c.strokeStyle = PAL.ballast1; c.lineWidth = 2 * GA + 7;
        c.beginPath(); c.moveTo(a.x - ox, a.y - oy); c.lineTo(b.x - ox, b.y - oy); c.stroke();
        const len = Math.hypot(b.x - a.x, b.y - a.y);
        const ang = Math.atan2(b.y - a.y, b.x - a.x);
        const px = -Math.sin(ang), py = Math.cos(ang);
        c.strokeStyle = PAL.tie; c.lineWidth = 4.5;
        for (let d = 8; d < len; d += 24) {
          const tx = a.x + Math.cos(ang) * d - ox, ty = a.y + Math.sin(ang) * d - oy;
          c.beginPath();
          c.moveTo(tx - px * (GA + 5), ty - py * (GA + 5));
          c.lineTo(tx + px * (GA + 5), ty + py * (GA + 5));
          c.stroke();
        }
        c.strokeStyle = PAL.rail; c.lineWidth = 2.6;
        for (const off of [-GA, GA]) {
          c.beginPath();
          c.moveTo(a.x - ox + px * off, a.y - oy + py * off);
          c.lineTo(b.x - ox + px * off, b.y - oy + py * off);
          c.stroke();
        }
      }
    }
    // powerline pole bases + poles
    for (const rd of S.world.roads) {
      for (const p of rd.poles) {
        if (p.x < ox - 30 || p.x > ox + CHUNK + 30 || p.y < oy - 40 || p.y > oy + CHUNK + 40) continue;
        const x = p.x - ox, y = p.y - oy;
        c.fillStyle = 'rgba(10,9,6,.3)';
        c.beginPath(); c.ellipse(x, y + 2, 7, 3, 0, 0, 7); c.fill();
        c.fillStyle = '#33291d'; c.fillRect(x - 2, y - 29, 4, 31);
        c.fillStyle = '#463a28'; c.fillRect(x - 9, y - 27, 18, 3);
        c.fillStyle = '#1c160e'; c.fillRect(x - 7.5, y - 31, 2.5, 5); c.fillRect(x + 5, y - 31, 2.5, 5);
      }
    }
    return cv;
  }

  return {
    draw(ctx, cam, view) {
      const v = cam.viewRect(40);
      const c0x = clamp((v.x0 / CHUNK) | 0, 0, cols - 1), c1x = clamp((v.x1 / CHUNK) | 0, 0, cols - 1);
      const c0y = clamp((v.y0 / CHUNK) | 0, 0, rows - 1), c1y = clamp((v.y1 / CHUNK) | 0, 0, rows - 1);
      for (let cy = c0y; cy <= c1y; cy++) {
        for (let cx = c0x; cx <= c1x; cx++) {
          const i = cy * cols + cx;
          if (!chunks[i]) chunks[i] = bake(i);
          ctx.drawImage(chunks[i], cx * CHUNK, cy * CHUNK);
        }
      }
    },
  };
}
