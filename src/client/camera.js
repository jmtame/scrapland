// Camera: follows the player (or copter), god-view fits the map, shake.
import { WORLD } from '../sim/config.js';
import { clamp, lerp } from '../sim/util.js';

export function makeCamera(S, view) {
  const cam = {
    cx: S.player.x, cy: S.player.y, zoom: 1,
    screenToWorld(sx, sy) {
      return { x: (sx - view.VW / 2) / cam.zoom + cam.cx, y: (sy - view.VH / 2) / cam.zoom + cam.cy };
    },
    worldToScreen(x, y) {
      return { x: (x - cam.cx) * cam.zoom + view.VW / 2, y: (y - cam.cy) * cam.zoom + view.VH / 2 };
    },
    viewRect(margin = 0) {
      const hw = view.VW / 2 / cam.zoom + margin, hh = view.VH / 2 / cam.zoom + margin;
      return { x0: cam.cx - hw, y0: cam.cy - hh, x1: cam.cx + hw, y1: cam.cy + hh };
    },
    inView(x, y, m = 0) {
      const v = cam._v || cam.viewRect(0);
      return x > v.x0 - m && x < v.x1 + m && y > v.y0 - m && y < v.y1 + m;
    },
    update(dt) {
      const p = S.player;
      let targetZoom = 1, tx = p.x, ty = p.y;
      if (view.godView) {
        targetZoom = Math.min(view.VW / WORLD.w, view.VH / WORLD.h) * 0.98;
        tx = WORLD.w / 2; ty = WORLD.h / 2;
      } else if (p.inCopter && S.copter) {
        const spd = Math.hypot(S.copter.vx, S.copter.vy);
        targetZoom = clamp(0.82 - 0.42 * (spd / 980), 0.40, 0.82);
      }
      cam.zoom = lerp(cam.zoom, targetZoom, Math.min(1, dt * (view.godView ? 6 : 4)));
      const over = view.godView ? 0 : 300;
      const hw = view.VW / 2 / cam.zoom, hh = view.VH / 2 / cam.zoom;
      cam.cx = view.godView ? tx : clamp(tx, hw - over, WORLD.w - hw + over);
      cam.cy = view.godView ? ty : clamp(ty, hh - over, WORLD.h - hh + over);
      if (WORLD.w < view.VW / cam.zoom) cam.cx = WORLD.w / 2;
      if (WORLD.h < view.VH / cam.zoom) cam.cy = WORLD.h / 2;
      if (S.shake > 0) {
        cam.cx += (Math.random() * 2 - 1) * S.shake * 0.5;
        cam.cy += (Math.random() * 2 - 1) * S.shake * 0.5;
      }
      cam._v = cam.viewRect(0);
    },
  };
  return cam;
}
