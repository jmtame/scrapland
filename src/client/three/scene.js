// Three.js scene rig: tilted low-poly view. Sim coords map x→x, y→z (y-up).
// Exposes a 2D-compatible camera shim (screenToWorld/worldToScreen/inView)
// so input + overlay UI keep working unchanged.
import * as THREE from 'three';
import { WORLD, DAY_LEN } from '../../sim/config.js';
import { clamp, lerp } from '../../sim/util.js';

export function makeScene(S, view) {
  const renderer = new THREE.WebGLRenderer({ canvas: view.canvas, antialias: true });
  renderer.setPixelRatio(Math.min(2, devicePixelRatio || 1));
  renderer.setSize(view.VW, view.VH); // updateStyle: keep CSS size = viewport
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0d2430);

  const camera = new THREE.PerspectiveCamera(50, view.VW / view.VH, 10, 60000);

  // lights — bright, readable at all times of day (night mode stays removed)
  const hemi = new THREE.HemisphereLight(0xeaf2f8, 0x4a4438, 0.95);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xfff2dc, 1.35);
  sun.position.set(-0.45, 1, -0.3).multiplyScalar(1000);
  scene.add(sun);
  const sunTarget = new THREE.Object3D();
  scene.add(sunTarget);
  sun.target = sunTarget;

  // atmospheric depth
  scene.fog = new THREE.Fog(0x9fb4be, 2600, 9000);

  const rig = {
    renderer, scene, camera, sun, hemi,
    cx: S.player.x, cy: S.player.y,      // look-at point in sim coords
    dist: 1150, elev: 0.96,              // elevation angle (rad) ~55°
    shakeX: 0, shakeY: 0,
    _ray: new THREE.Raycaster(),
    _plane: new THREE.Plane(new THREE.Vector3(0, 1, 0), 0),
    _v3: new THREE.Vector3(),

    lightLevel() {
      return 0.5 + 0.5 * Math.cos(Math.PI * 2 * ((S.t % DAY_LEN) / DAY_LEN));
    },

    resize() {
      camera.aspect = view.VW / view.VH;
      camera.updateProjectionMatrix();
      renderer.setSize(view.VW, view.VH);
    },

    update(dt) {
      const p = S.player;
      let tx = p.x, ty = p.y, tdist = 1500, telev = 0.96;
      if (view.godView) {
        // near-top-down, distance computed to FIT the whole map at any aspect
        tx = WORLD.w / 2; ty = WORLD.h / 2;
        telev = 1.52;
        const tanV = Math.tan((camera.fov / 2) * Math.PI / 180);
        const fitH = (WORLD.h / 2 + 500) / tanV;
        const fitW = (WORLD.w / 2 + 500) / (tanV * camera.aspect);
        tdist = Math.max(fitH, fitW) * 1.02;
      } else if (p.inCopter && S.copter) {
        const spd = Math.hypot(S.copter.vx, S.copter.vy);
        tdist = 1850 + spd * 0.9;
      }
      // snap (no cross-map lerp) when toggling map view — the camera must be
      // ON the player the instant you exit the map
      if (rig._wasGod !== view.godView) {
        rig._wasGod = view.godView;
        rig.cx = tx; rig.cy = ty;
        rig.dist = tdist; rig.elev = telev;
      }
      const k = Math.min(1, dt * (view.godView ? 6 : 5));
      rig.cx = lerp(rig.cx, tx, k);
      rig.cy = lerp(rig.cy, ty, k);
      rig.dist = lerp(rig.dist, tdist, Math.min(1, dt * 4));
      rig.elev = lerp(rig.elev, telev, Math.min(1, dt * 4));
      if (S.shake > 0) {
        rig.shakeX = (Math.random() * 2 - 1) * S.shake;
        rig.shakeY = (Math.random() * 2 - 1) * S.shake;
      } else { rig.shakeX = 0; rig.shakeY = 0; }

      const cx = rig.cx + rig.shakeX, cy = rig.cy + rig.shakeY;
      const h = Math.sin(rig.elev) * rig.dist;
      const back = Math.cos(rig.elev) * rig.dist;
      camera.position.set(cx, h, cy + back);
      camera.lookAt(cx, 0, cy);
      sunTarget.position.set(cx, 0, cy);

      // day cycle: hue/intensity shift only — never dark (player rule)
      const light = rig.lightLevel();
      const dusk = Math.sin((1 - light) * Math.PI);
      sun.intensity = 1.0 + light * 0.45;
      sun.color.setHSL(0.105 - dusk * 0.045, 0.52 + dusk * 0.25, 0.62 - dusk * 0.06);
      hemi.intensity = 0.78 + light * 0.25;
      const sunA = (S.t % DAY_LEN) / DAY_LEN * Math.PI * 2;
      sun.position.set(
        cx + Math.cos(sunA) * 1400,
        900 + light * 600,
        cy + Math.sin(sunA) * 1400 - 400,
      );
      // fog scales with camera distance (god view must see the whole map)
      scene.fog.near = rig.dist * 2.2;
      scene.fog.far = rig.dist * 8;
      // camera-space view rect cache for inView culling (generous radius —
      // a tilted camera sees far up-screen)
      rig._viewR = rig.dist * 1.9;
    },

    render() { renderer.render(scene, camera); },

    // ---- 2D-compat camera shim ----
    screenToWorld(sx, sy) {
      const ndc = new THREE.Vector2((sx / view.VW) * 2 - 1, -(sy / view.VH) * 2 + 1);
      rig._ray.setFromCamera(ndc, camera);
      const hit = new THREE.Vector3();
      rig._ray.ray.intersectPlane(rig._plane, hit);
      return hit ? { x: hit.x, y: hit.z } : { x: rig.cx, y: rig.cy };
    },
    worldToScreen(x, y, h = 0) {
      rig._v3.set(x, h, y).project(camera);
      return {
        x: (rig._v3.x + 1) / 2 * view.VW,
        y: (-rig._v3.y + 1) / 2 * view.VH,
        behind: rig._v3.z > 1,
      };
    },
    inView(x, y, m = 0) {
      const dx = x - rig.cx, dy = y - rig.cy;
      return dx * dx + dy * dy < (rig._viewR + m) * (rig._viewR + m);
    },
    viewRect(margin = 0) {
      const r = rig._viewR + margin;
      return { x0: rig.cx - r, y0: rig.cy - r, x1: rig.cx + r, y1: rig.cy + r };
    },
    get zoom() { return 900 / rig.dist; }, // approximate px-per-world-unit feel
  };
  rig.update(0.1);
  return rig;
}
