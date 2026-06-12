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

  const EYE = 38; // below wall height (48) — walls block view like Rust
  const rig = {
    renderer, scene, camera, sun, hemi,
    cx: S.player.x, cy: S.player.y,      // look-at point in sim coords
    dist: 1150, elev: 0.96,              // elevation angle (rad) ~55°
    shakeX: 0, shakeY: 0,
    orbit: 0,                            // user view rotation (middle-drag)
    zoomFactor: 1,                       // user wheel zoom (clamped)
    // ---- first person ----
    fp: true,
    yaw: 0, pitch: -0.08,                // three-space yaw/pitch (mouselook)
    eyeH: EYE,
    jumpH: 0, jumpV: 0,                  // cosmetic hop (sim stays 2D)
    jump() {
      const p = S.player;
      const lk = S.world.lakeAt(p.x, p.y);
      if (view.godView || p.dead || p.inCopter || rig.jumpH > 0 || (lk && !lk.frozen)) return;
      rig.jumpV = 100;
      rig.jumpH = 0.001;
    },
    fall(h) { // bailed out of the copter — drop from its altitude
      rig.jumpH = Math.max(rig.jumpH, h);
      rig.jumpV = -10;
    },
    _ray: new THREE.Raycaster(),
    _plane: new THREE.Plane(new THREE.Vector3(0, 1, 0), 0),
    _v3: new THREE.Vector3(),

    // sim-space facing angle derived from yaw (sim x→x, y→z)
    simAngle() { return Math.atan2(-Math.cos(rig.yaw), -Math.sin(rig.yaw)); },
    setYawFromSim(a) { rig.yaw = Math.atan2(-Math.cos(a), -Math.sin(a)); },
    // ground point the camera centre is looking at (Rust-style aim/build point)
    aimPoint() {
      const A = rig.simAngle();
      const p = S.player;
      let hd = 560;
      if (rig.pitch < -0.055) hd = (rig.eyeH + rig.jumpH) / Math.tan(-rig.pitch);
      hd = clamp(hd, 70, 980);
      return { x: p.x + Math.cos(A) * hd, y: p.y + Math.sin(A) * hd };
    },

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
      if (S.shake > 0) {
        rig.shakeX = (Math.random() * 2 - 1) * S.shake;
        rig.shakeY = (Math.random() * 2 - 1) * S.shake;
      } else { rig.shakeX = 0; rig.shakeY = 0; }

      let cx, cy;
      if (view.godView) {
        // map view: near-top-down, distance computed to FIT the map at any aspect
        cx = WORLD.w / 2; cy = WORLD.h / 2;
        const telev = 1.52;
        const tanV = Math.tan((camera.fov / 2) * Math.PI / 180);
        const fitH = (WORLD.h / 2 + 500) / tanV;
        const fitW = (WORLD.w / 2 + 500) / (tanV * camera.aspect);
        const tdist = Math.max(fitH, fitW) * 1.02;
        if (rig._wasGod !== true) { rig.dist = tdist; rig.elev = telev; camera.fov = 50; camera.updateProjectionMatrix(); }
        rig._wasGod = true;
        rig.hideOwnRig = false; // you can see yourself on the map
        rig.cx = cx; rig.cy = cy;
        rig.dist = lerp(rig.dist, tdist, Math.min(1, dt * 4));
        const h = Math.sin(rig.elev) * rig.dist;
        const back = Math.cos(rig.elev) * rig.dist;
        camera.position.set(cx, h, cy + back);
        camera.lookAt(cx, 0, cy);
        rig._viewR = rig.dist * 1.9;
        scene.fog.near = rig.dist * 2.2;
        scene.fog.far = rig.dist * 8;
      } else {
        // ---- first person ----
        if (rig._wasGod !== false) { rig._wasGod = false; camera.fov = 74; camera.updateProjectionMatrix(); }
        rig.hideOwnRig = true; // first person — the viewmodel is your body
        // eye height: wading sinks to chin, copter rides high
        let eyeT = EYE;
        const lk = S.world.lakeAt(p.x, p.y);
        if (p.inCopter && S.copter) {
          // third-person chase cam: behind + above, smoothed, freelook orbit.
          // The camera never steers the craft — the mouse stick does.
          const c2 = S.copter;
          const calt = c2.alt || 0;
          const H = c2.angle + (rig.flyYawOff || 0);
          const back = 235 + c2.spd * 0.08, up = 112 + (rig.flyPitchOff || 0) * 150;
          const tcx = c2.x - Math.cos(H) * back;
          const tcy = c2.y - Math.sin(H) * back;
          const tcz = calt + up;
          if (!rig._fly) { rig._fly = true; rig._camX = tcx; rig._camY = tcy; rig._camZ = tcz; }
          const kc = Math.min(1, dt * 6);
          rig._camX = lerp(rig._camX, tcx, kc);
          rig._camY = lerp(rig._camY, tcy, kc);
          rig._camZ = lerp(rig._camZ, tcz, kc);
          camera.position.set(rig._camX + rig.shakeX * 0.45, Math.max(16, rig._camZ), rig._camY + rig.shakeY * 0.45);
          camera.lookAt(c2.x, calt + 24, c2.y);
          camera.rotateZ(-(c2.rollA || 0) * 0.2); // bank reads on the horizon
          rig.cx = c2.x; rig.cy = c2.y;
          rig.dist = 320;
          // keep yaw/pitch coherent so dismount resumes looking along the nose
          rig.setYawFromSim(c2.angle);
          rig.pitch = (c2.pitchA || 0) * 0.4 - 0.1;
          cx = c2.x; cy = c2.y;
        } else {
          if (rig._fly) rig._fly = false; // dismount: free look resumes from the nose
          if (lk && !lk.frozen) eyeT = 15;
          rig.eyeH = lerp(rig.eyeH, eyeT, Math.min(1, dt * 5));
          // jump arc (cosmetic; collision/aim stay 2D)
          if (rig.jumpH > 0 || rig.jumpV > 0) {
            rig.jumpH += rig.jumpV * dt;
            rig.jumpV -= 400 * dt;
            if (rig.jumpH <= 0) { rig.jumpH = 0; rig.jumpV = 0; }
          }
          cx = p.x; cy = p.y;
          rig.cx = p.x; rig.cy = p.y;
          rig.dist = 320; // for overlay zoom heuristics
          camera.position.set(p.x + rig.shakeX * 0.35, rig.eyeH + rig.jumpH, p.y + rig.shakeY * 0.35);
          camera.rotation.order = 'YXZ';
          camera.rotation.y = rig.yaw + rig.shakeX * 0.0012;
          camera.rotation.x = rig.pitch + rig.shakeY * 0.0012;
          camera.rotation.z = 0;
        }
        rig._viewR = 2800;
        scene.fog.near = 2000;
        scene.fog.far = 8200;
      }
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
    },

    render() { renderer.render(scene, camera); },

    // ---- 2D-compat camera shim ----
    screenToWorld(sx, sy) {
      const ndc = new THREE.Vector2((sx / view.VW) * 2 - 1, -(sy / view.VH) * 2 + 1);
      rig._ray.setFromCamera(ndc, camera);
      const hit = new THREE.Vector3();
      const ok = rig._ray.ray.intersectPlane(rig._plane, hit);
      return ok ? { x: hit.x, y: hit.z } : { x: rig.cx, y: rig.cy };
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
  rig.setYawFromSim(S.player.angle || 0);
  rig.update(0.1);
  return rig;
}
