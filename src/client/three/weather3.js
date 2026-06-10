// Weather + ambience in 3D: precipitation points around the camera (biome
// blended), drifting cloud sprites with ground shadows, fog-bank sprites,
// firefly glow points. Tints stay mild — never darkens gameplay.
import * as THREE from 'three';
import { WORLD } from '../../sim/config.js';
import { smooth01, clamp } from '../../sim/util.js';
import { glowTexture, blobTexture } from './assets3.js';

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
  const cloudMat = new THREE.MeshLambertMaterial({ color: 0xf7fafc, emissive: 0x7d8893, flatShading: true });
  const cloudGroups = [];
  const ensureClouds = () => {
    if (cloudGroups.length || !S.clouds) return;
    const ico = new THREE.IcosahedronGeometry(1, 0);
    for (const cl of S.clouds) {
      const g = new THREE.Group();
      // main puffs from sim layout
      cl.puffs.forEach((p, i) => {
        const m = new THREE.Mesh(ico, cloudMat);
        const r = p.r * (cl.heavy ? 1.0 : 0.85);
        m.scale.set(r, r * 0.52, r * 0.78);
        m.position.set(p.dx, ((i * 37) % 23) - 8, p.dy);
        m.rotation.y = i * 1.7;
        g.add(m);
      });
      // a couple of small cap puffs on top for volume
      for (let i = 0; i < 2; i++) {
        const m = new THREE.Mesh(ico, cloudMat);
        const r = cl.r * 0.34;
        m.scale.set(r, r * 0.5, r * 0.7);
        m.position.set((i - 0.5) * cl.r * 0.5, cl.r * 0.22, ((i * 53) % 17) - 8);
        g.add(m);
      }
      scene.add(g);
      const sh = new THREE.Mesh(
        new THREE.CircleGeometry(cl.r * 1.15, 12),
        new THREE.MeshBasicMaterial({ map: blobTexture(), transparent: true, opacity: 0.4 * cl.op, depthWrite: false }),
      );
      sh.rotation.x = -Math.PI / 2;
      scene.add(sh);
      cloudGroups.push({ cl, g, sh });
    }
  };

  // fog banks
  const fogSprites = [];
  const ensureFog = () => {
    if (fogSprites.length || !S.fogBanks) return;
    for (const f of S.fogBanks) {
      const m = new THREE.SpriteMaterial({ map: glowTexture(), color: 0xd6dee6, transparent: true, opacity: 0, depthWrite: false });
      const s = new THREE.Sprite(m);
      s.scale.set(f.r * 3, f.r * 1.6, 1);
      scene.add(s);
      fogSprites.push({ f, s });
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
      for (const { cl, g, sh } of cloudGroups) {
        g.position.set(cl.x, 880, cl.y);
        sh.position.set(cl.x + 64, 2.5, cl.y + 86);
      }
      // day tint on the shared cloud material (bright noon, warm-gray dusk)
      const cLight = rig.lightLevel();
      cloudMat.color.setScalar(0.82 + cLight * 0.18);
      for (const { f, s } of fogSprites) {
        const winter = S.world.biomeAt(f.x, f.y) === 'winter';
        s.material.opacity = winter ? 0 : Math.min(0.5, W.fog * f.dens * 0.5);
        s.position.set(f.x, 26, f.y);
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
