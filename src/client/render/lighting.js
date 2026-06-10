// Day/night lighting: half-res darkness canvas with punched radial lights,
// composited over the scene. Warm dusk grade, deep blue night, point lights
// for fires, furnaces, muzzle flashes, explosions, turret cores, the shop.
import { DAY_LEN } from '../../sim/config.js';

export function makeLighting(S, view, cam) {
  const cv = document.createElement('canvas');
  const c = cv.getContext('2d');

  function lightLevel() {
    return 0.5 + 0.5 * Math.cos(Math.PI * 2 * ((S.t % DAY_LEN) / DAY_LEN));
  }

  function addLight(lx, ly, r, intensity) {
    const p = cam.worldToScreen(lx, ly);
    const sr = r * cam.zoom;
    if (p.x < -sr || p.y < -sr || p.x > view.VW + sr || p.y > view.VH + sr) return;
    const g = c.createRadialGradient(p.x / 2, p.y / 2, 0, p.x / 2, p.y / 2, sr / 2);
    g.addColorStop(0, `rgba(255,255,255,${intensity})`);
    g.addColorStop(1, 'rgba(255,255,255,0)');
    c.fillStyle = g;
    c.beginPath(); c.arc(p.x / 2, p.y / 2, sr / 2, 0, 7); c.fill();
  }

  return {
    lightLevel,
    draw(ctx) {
      // Night mode removed by request: days roll into a barely-tinted dusk
      // (≤ 8% alpha) and the map view is never tinted at all.
      if (view.godView) return;
      const light = lightLevel();
      const dark = 1 - light;
      if (dark < 0.04) return;
      const w = Math.ceil(view.VW / 2), h = Math.ceil(view.VH / 2);
      if (cv.width !== w || cv.height !== h) { cv.width = w; cv.height = h; }
      const duskiness = Math.sin(Math.min(1, dark) * Math.PI);
      c.globalCompositeOperation = 'source-over';
      const nightA = Math.min(0.08, dark * 0.09);
      c.fillStyle = `rgba(12,18,34,${nightA})`;
      c.fillRect(0, 0, w, h);
      if (duskiness > 0.1) {
        c.fillStyle = `rgba(150,82,30,${duskiness * 0.05})`;
        c.fillRect(0, 0, w, h);
      }
      // punch lights
      c.globalCompositeOperation = 'destination-out';
      const lit = Math.min(1, dark * 1.2);
      for (const f of S.fires) addLight(f.x, f.y, 150 + Math.sin(S.t * 9 + f.x) * 14, 0.85 * lit);
      for (const wreck of S.wrecks) addLight(wreck.x, wreck.y, 120, 0.7 * lit);
      if (S.muzzle) addLight(S.muzzle.x, S.muzzle.y, 130, 0.8 * lit);
      for (const fl of S.flashes) addLight(fl.x, fl.y, fl.r * 2.4 * (fl.life / fl.max), 0.95 * lit);
      addLight(S.world.shop.x, S.world.shop.y, 320, 0.5 * lit);
      // TC LEDs / turret cores glow faintly at night
      if (dark > 0.45) {
        for (const [k, d] of S.deploys) {
          if (d.type !== 'cupboard' && d.type !== 'turret') continue;
          const [gx, gy] = k.split(',').map(Number);
          addLight(gx * 64 + 32, gy * 64 + 32, d.type === 'cupboard' ? 70 : 46, 0.25 * lit);
        }
        for (const u of S.units) {
          if (u.dead || u.eliminated) continue;
          addLight(u.x, u.y, 60, 0.18 * lit); // unit silhouette readability
        }
        addLight(S.player.x, S.player.y, 130, 0.4 * lit);
      }
      c.globalCompositeOperation = 'source-over';
      ctx.drawImage(cv, 0, 0, view.VW, view.VH);
    },
  };
}
