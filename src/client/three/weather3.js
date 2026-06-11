// Weather + ambience in 3D: precipitation points around the camera (biome
// blended), drifting cloud sprites with ground shadows, fog-bank sprites,
// firefly glow points. Tints stay mild — never darkens gameplay.
import * as THREE from 'three';
import { WORLD } from '../../sim/config.js';
import { smooth01, clamp } from '../../sim/util.js';
import { glowTexture, blobTexture, puffTexture } from './assets3.js';

export function makeWeather3(S, scene) {
  // precipitation
  const N = 700;
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(N * 3);
  const meta = [];
  for (let i = 0; i < N; i++) {
    meta.push({ x: Math.random(), z: Math.random(), y: Math.random(), sp: 0.4 + Math.random() * 0.8 });
  }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const rainMat = new THREE.PointsMaterial({ color: 0xbcd2ec, size: 5, transparent: true, opacity: 0, depthWrite: false });
  const rain = new THREE.Points(geo, rainMat);
  rain.frustumCulled = false;
  scene.add(rain);

  // clouds: low-poly puff CLUSTERS built from the sim's per-cloud puff data
  // (flattened icosahedra, soft-shaded) + one broken ground-shadow each
  // natural clouds: smaller translucent puff clusters high above the action,
  // fading to near-invisible when they drift over the camera target so they
  // never block gameplay
  const cloudGroups = [];
  const ensureClouds = () => {
    if (cloudGroups.length || !S.clouds) return;
    const ico = new THREE.IcosahedronGeometry(1, 0);
    for (const cl of S.clouds) {
      const matC = new THREE.MeshLambertMaterial({
        color: 0xf7fafc, emissive: 0x8d99a4, flatShading: true,
        transparent: true, opacity: 0.5, depthWrite: false,
      });
      const g = new THREE.Group();
      cl.puffs.forEach((p, i) => {
        const m = new THREE.Mesh(ico, matC);
        const r = p.r * 0.45 * (cl.heavy ? 1.0 : 0.85);
        m.scale.set(r, r * 0.45, r * 0.72);
        m.position.set(p.dx * 0.55, ((i * 37) % 17) - 6, p.dy * 0.55);
        m.rotation.y = i * 1.7;
        g.add(m);
      });
      scene.add(g);
      // ground shadow: prominent, sun-offset, never fades (a cloud you can't
      // see overhead still darkens the ground — that's the read players use)
      const sh = new THREE.Mesh(
        new THREE.CircleGeometry(cl.r * 1.05, 14),
        new THREE.MeshBasicMaterial({ map: blobTexture(), transparent: true, opacity: 0.5 * cl.op, depthWrite: false }),
      );
      sh.rotation.x = -Math.PI / 2;
      sh.scale.set(1.35, 1, 1);
      scene.add(sh);
      cloudGroups.push({ cl, g, sh, matC });
    }
  };

  // fog banks: LAYERED soft puff planes at staggered heights that slowly
  // rotate and breathe — reads as a volume of mist, not a spotlight disc
  const fogSprites = [];
  const fogGeo = new THREE.CircleGeometry(1, 16);
  const ensureFog = () => {
    if (fogSprites.length || !S.fogBanks) return;
    for (const f of S.fogBanks) {
      const group = new THREE.Group();
      const puffs = [];
      f.puffs.forEach((p, i) => {
        const m = new THREE.MeshBasicMaterial({
          map: puffTexture(), color: 0xc8d0d8, transparent: true, opacity: 0,
          depthWrite: false,
        });
        const s = new THREE.Mesh(fogGeo, m);
        s.rotation.x = -Math.PI / 2;
        const r = p.r * (0.85 + (i % 3) * 0.18);
        s.scale.set(r, r * 0.8, 1);
        s.position.set(p.dx * 0.6, 2 + i * 4.5, p.dy * 0.6);
        s.renderOrder = 3 + i;
        group.add(s);
        puffs.push({ s, r, phase: i * 1.7 + f.dens * 5, spin: (i % 2 ? 1 : -1) * (0.015 + i * 0.004) });
      });
      scene.add(group);
      fogSprites.push({ f, group, puffs });
    }
  };

  // fireflies
  const ffGeo = new THREE.BufferGeometry();
  const ffPos = new Float32Array(40 * 3);
  ffGeo.setAttribute('position', new THREE.BufferAttribute(ffPos, 3));
  const ffMat = new THREE.PointsMaterial({ color: 0xd8ff86, size: 9, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true });
  const ff = new THREE.Points(ffGeo, ffMat);
  ff.frustumCulled = false;
  scene.add(ff);

  return {
    sync(dt, rig) {
      ensureClouds();
      ensureFog();
      const W = S.weather;
      // biome blend by camera position
      const t = (rig.cx + S.world.biomeRidge(rig.cy)) / WORLD.w;
      const bl = 0.085;
      const snowAmt = smooth01((t - (2 / 3 - bl)) / (2 * bl));
      const rainAmt = smooth01((t - (1 / 3 - bl)) / (2 * bl)) * (1 - snowAmt);
      const inten = W.rain * (rainAmt + snowAmt);
      rainMat.opacity = Math.min(0.75, inten * 0.8);
      rainMat.color.setHex(snowAmt > rainAmt ? 0xf4f8fc : 0xbcd2ec);
      rainMat.size = snowAmt > rainAmt ? 7 : 4.5;
      if (inten > 0.02) {
        const R = 1700;
        const fallSpeed = snowAmt > rainAmt ? 0.12 : 0.55;
        for (let i = 0; i < N; i++) {
          const m = meta[i];
          const fall = (m.y + S.t * m.sp * fallSpeed) % 1;
          pos[i * 3] = rig.cx + (m.x - 0.5) * 2 * R + S.wind * 60 * fall;
          pos[i * 3 + 1] = 700 * (1 - fall);
          pos[i * 3 + 2] = rig.cy + (m.z - 0.5) * 2 * R;
        }
        geo.attributes.position.needsUpdate = true;
      }
      const cLight = rig.lightLevel();
      for (const { cl, g, sh, matC } of cloudGroups) {
        // altitude must stay BELOW the camera eye (~1230 at default zoom) or
        // clouds fall outside the downward frustum and never appear in play
        g.position.set(cl.x, 560, cl.y);
        sh.position.set(cl.x + 64, 2.5, cl.y + 86);
        // ~50% transparent overall; softer (not invisible) over the action
        const dx = cl.x - rig.cx, dy = cl.y - rig.cy;
        const d = Math.sqrt(dx * dx + dy * dy);
        const targetOp = (d < 700 ? 0.22 : d < 1400 ? 0.22 + (d - 700) / 700 * 0.28 : 0.5) * cl.op;
        matC.opacity += (targetOp - matC.opacity) * Math.min(1, dt * 4);
        matC.color.setScalar(0.82 + cLight * 0.18);
        sh.material.opacity = (0.32 + 0.26 * cLight) * cl.op; // crisper at noon
      }
      for (const { f, group, puffs } of fogSprites) {
        const winter = S.world.biomeAt(f.x, f.y) === 'winter';
        group.position.set(f.x, 0, f.y);
        const base = winter ? 0 : Math.min(0.16, W.fog * f.dens * 0.15);
        for (const pf of puffs) {
          pf.s.material.opacity = base;
          pf.s.rotation.z = pf.phase + S.t * pf.spin;
          const pulse = 1 + Math.sin(S.t * 0.27 + pf.phase) * 0.07;
          pf.s.scale.set(pf.r * pulse, pf.r * 0.8 * pulse, 1);
        }
      }
      let n = 0;
      if (S.fireflies) {
        const dark = 1 - rig.lightLevel();
        ffMat.opacity = 0.35 + 0.5 * dark + 0.3 * Math.min(1, W.fog);
        for (const fl of S.fireflies) {
          if (n >= 40) break;
          if (S.world.biomeAt(fl.x, fl.y) !== 'jungle') continue;
          ffPos[n * 3] = fl.x;
          ffPos[n * 3 + 1] = 16 + Math.sin(fl.ph) * 8;
          ffPos[n * 3 + 2] = fl.y;
          n++;
        }
        ffGeo.attributes.position.needsUpdate = true;
      }
      ffGeo.setDrawRange(0, n);
    },
  };
}
