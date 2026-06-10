// Ground: the whole map painted once into a big canvas texture (smooth
// island coast, sand band, roads, rails, decor) draped on a single quad,
// with an ocean backdrop plane. Reuses the proven 2D painter approach.
import * as THREE from 'three';
import { WORLD, TILE } from '../../sim/config.js';
import { hash2, smooth01, clamp } from '../../sim/util.js';

const SCALE = 0.3; // texture px per world px (≈4147×2765)

export function makeTerrain3(S, scene) {
  const W = Math.round(WORLD.w * SCALE), H = Math.round(WORLD.h * SCALE);
  const cv = document.createElement('canvas');
  cv.width = W; cv.height = H;
  const c = cv.getContext('2d');
  c.save();
  c.scale(SCALE, SCALE);
  paintMap(S, c);
  c.restore();

  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  tex.minFilter = THREE.LinearMipmapLinearFilter;

  // map texture has a TRANSPARENT ocean so the animated water shows through
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(WORLD.w, WORLD.h),
    new THREE.MeshLambertMaterial({ map: tex, transparent: true }),
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.set(WORLD.w / 2, 0, WORLD.h / 2);
  ground.renderOrder = 1;
  scene.add(ground);

  // animated ocean: base water + a scrolling shimmer layer
  const ocean = new THREE.Mesh(
    new THREE.PlaneGeometry(WORLD.w * 6, WORLD.h * 6),
    new THREE.MeshLambertMaterial({ color: 0x10303c }),
  );
  ocean.rotation.x = -Math.PI / 2;
  ocean.position.set(WORLD.w / 2, -3, WORLD.h / 2);
  scene.add(ocean);

  const noise = document.createElement('canvas');
  noise.width = 128; noise.height = 128;
  const nc = noise.getContext('2d');
  for (let y = 0; y < 128; y += 4) {
    for (let x = 0; x < 128; x += 4) {
      const v = Math.random();
      nc.fillStyle = `rgba(190,230,240,${v > 0.82 ? 0.5 : v > 0.6 ? 0.16 : 0})`;
      nc.fillRect(x, y, 4, 4);
    }
  }
  const noiseTex = new THREE.CanvasTexture(noise);
  noiseTex.wrapS = noiseTex.wrapT = THREE.RepeatWrapping;
  noiseTex.repeat.set(70, 46);
  const shimmer = new THREE.Mesh(
    new THREE.PlaneGeometry(WORLD.w * 6, WORLD.h * 6),
    new THREE.MeshBasicMaterial({ map: noiseTex, transparent: true, opacity: 0.10, depthWrite: false }),
  );
  shimmer.rotation.x = -Math.PI / 2;
  shimmer.position.set(WORLD.w / 2, -1.5, WORLD.h / 2);
  scene.add(shimmer);
  const shimmer2 = shimmer.clone();
  shimmer2.material = new THREE.MeshBasicMaterial({ map: noiseTex.clone(), transparent: true, opacity: 0.07, depthWrite: false });
  shimmer2.material.map.wrapS = shimmer2.material.map.wrapT = THREE.RepeatWrapping;
  shimmer2.material.map.repeat.set(41, 27);
  shimmer2.position.y = -1.2;
  scene.add(shimmer2);

  // sky dome + sun disc
  const skyCv = document.createElement('canvas');
  skyCv.width = 4; skyCv.height = 256;
  const sc = skyCv.getContext('2d');
  const sg = sc.createLinearGradient(0, 0, 0, 256);
  sg.addColorStop(0, '#5d9bd3');
  sg.addColorStop(0.62, '#9cc3dd');
  sg.addColorStop(0.78, '#cfddd8');
  sg.addColorStop(1, '#dfe5da');
  sc.fillStyle = sg;
  sc.fillRect(0, 0, 4, 256);
  const skyTex = new THREE.CanvasTexture(skyCv);
  skyTex.colorSpace = THREE.SRGBColorSpace;
  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(34000, 18, 12, 0, Math.PI * 2, 0, Math.PI / 2),
    new THREE.MeshBasicMaterial({ map: skyTex, side: THREE.BackSide, fog: false }),
  );
  sky.position.set(WORLD.w / 2, -40, WORLD.h / 2);
  scene.add(sky);
  scene.background = null;

  return {
    tex,
    sync(dt, S2, rig) {
      const m1 = shimmer.material.map, m2 = shimmer2.material.map;
      m1.offset.x += dt * 0.0022; m1.offset.y += dt * 0.0013;
      m2.offset.x -= dt * 0.0011; m2.offset.y += dt * 0.0008;
      // sky follows the camera target so the dome never shows an edge
      sky.position.set(rig.cx, -40, rig.cy);
      const light = rig.lightLevel();
      sky.material.color.setHSL(0.58, 0.18, 0.62 + light * 0.38);
    },
  };
}

function biomeCols(S, x, y) {
  const t = (x + S.world.biomeRidge(y)) / WORLD.w;
  const tw = 0.05;
  const dj = smooth01((t - (1 / 3 - tw)) / (2 * tw));
  const jw = smooth01((t - (2 / 3 - tw)) / (2 * tw));
  const mix = (a, b, f) => [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f];
  const des = [181, 154, 102], jun = [74, 92, 48], win = [185, 199, 209];
  let cc = mix(des, jun, dj);
  cc = mix(cc, win, jw);
  return cc;
}

function traceIsland(S, c) {
  c.beginPath();
  S.world.islandPath.forEach((p, i) => (i ? c.lineTo(p.x, p.y) : c.moveTo(p.x, p.y)));
  c.closePath();
}

// paints the entire map in WORLD coordinates onto ctx (caller pre-scales).
// The ocean stays TRANSPARENT — animated water planes render beneath.
export function paintMap(S, c) {
  const W = WORLD.w, H = WORLD.h;

  // shallow halo
  c.lineJoin = 'round';
  c.strokeStyle = 'rgba(64,124,134,0.45)';
  c.lineWidth = 64;
  traceIsland(S, c); c.stroke();
  c.strokeStyle = 'rgba(90,150,158,0.30)';
  c.lineWidth = 26;
  traceIsland(S, c); c.stroke();

  c.save();
  traceIsland(S, c);
  c.clip();

  // ground cells
  const CS = 32;
  for (let y = 0; y < H; y += CS) {
    for (let x = 0; x < W; x += CS) {
      const lf = S.world.landFactor(x + CS / 2, y + CS / 2);
      if (lf <= -0.25) continue;
      let [r, g, b] = biomeCols(S, x + CS / 2, y + CS / 2);
      const n = hash2((x / CS) | 0, (y / CS) | 0);
      const n2 = hash2((x / 96) | 0, (y / 96) | 0);
      const shade = 0.88 + n * 0.14 + (n2 - 0.5) * 0.12 - (y / H) * 0.06;
      r *= shade; g *= shade; b *= shade;
      c.fillStyle = `rgb(${r | 0},${g | 0},${b | 0})`;
      c.fillRect(x - 1, y - 1, CS + 2, CS + 2);
    }
  }

  // beach band + wet line + foam (per-segment biome colors)
  c.lineCap = 'round';
  const ipath = S.world.islandPath;
  for (let pass = 0; pass < 3; pass++) {
    const lw = pass === 0 ? 96 : pass === 1 ? 30 : 7;
    for (let i = 0; i < ipath.length; i++) {
      const a = ipath[i], b2 = ipath[(i + 1) % ipath.length];
      const winter = S.world.biomeAt((a.x + b2.x) / 2, (a.y + b2.y) / 2) === 'winter';
      c.strokeStyle = pass === 0 ? (winter ? 'rgba(214,227,235,0.95)' : 'rgba(186,166,120,0.95)')
        : pass === 1 ? (winter ? 'rgba(168,190,204,0.9)' : 'rgba(146,128,92,0.9)')
        : 'rgba(240,248,252,0.55)';
      c.lineWidth = lw;
      c.beginPath();
      c.moveTo(a.x, a.y);
      c.lineTo(b2.x, b2.y);
      c.stroke();
    }
  }

  // lakes (static look in 3D; sparkle is unnecessary at tilt)
  for (const L of S.world.lakes) {
    c.save();
    c.translate(L.x, L.y);
    const path = () => {
      c.beginPath();
      for (let i = 0; i <= 28; i++) {
        const a = (i / 28) * Math.PI * 2;
        const r = L.r * L.wob[i % 28];
        const px = Math.cos(a) * r, py = Math.sin(a) * r * 0.84;
        i ? c.lineTo(px, py) : c.moveTo(px, py);
      }
      c.closePath();
    };
    c.save();
    c.scale(1.06, 1.06);
    path();
    c.fillStyle = L.frozen ? 'rgba(238,246,251,.95)' : 'rgba(96,118,66,.7)';
    c.fill();
    c.restore();
    path();
    const g = c.createRadialGradient(0, -0.3 * L.r, L.r * 0.1, 0, 0, L.r);
    if (L.frozen) { g.addColorStop(0, '#dfeaf2'); g.addColorStop(1, '#96b2c8'); }
    else { g.addColorStop(0, '#33687c'); g.addColorStop(1, '#0c2531'); }
    c.fillStyle = g;
    c.fill();
    c.restore();
  }

  // monument pads
  for (const m of S.world.monuments) {
    const g = c.createRadialGradient(m.x, m.y, m.r * 0.2, m.x, m.y, m.r);
    g.addColorStop(0, 'rgba(110,106,95,.5)');
    g.addColorStop(0.8, 'rgba(98,94,84,.32)');
    g.addColorStop(1, 'rgba(90,86,76,0)');
    c.fillStyle = g;
    c.beginPath(); c.arc(m.x, m.y, m.r, 0, 7); c.fill();
  }

  // roads
  c.lineCap = 'round';
  for (const rd of S.world.roads) {
    for (let i = 0; i < rd.pts.length - 1; i++) {
      const a = rd.pts[i], b = rd.pts[i + 1];
      const fade = Math.min(rd.fade[i], rd.fade[i + 1]);
      if (fade <= 0.02) continue;
      c.globalAlpha = fade;
      c.strokeStyle = '#4f4430'; c.lineWidth = rd.w;
      c.beginPath(); c.moveTo(a.x, a.y); c.lineTo(b.x, b.y); c.stroke();
      c.strokeStyle = '#665838'; c.lineWidth = rd.w - 4;
      c.beginPath(); c.moveTo(a.x, a.y); c.lineTo(b.x, b.y); c.stroke();
      c.globalAlpha = 1;
    }
  }
  // rails
  const GA = 11;
  for (const rl of S.world.rails) {
    for (let i = 0; i < rl.pts.length - 1; i++) {
      const a = rl.pts[i], b = rl.pts[i + 1];
      c.strokeStyle = '#574d40'; c.lineWidth = 2 * GA + 16;
      c.beginPath(); c.moveTo(a.x, a.y); c.lineTo(b.x, b.y); c.stroke();
      c.strokeStyle = '#6b5f4e'; c.lineWidth = 2 * GA + 7;
      c.beginPath(); c.moveTo(a.x, a.y); c.lineTo(b.x, b.y); c.stroke();
      const len = Math.hypot(b.x - a.x, b.y - a.y);
      const ang = Math.atan2(b.y - a.y, b.x - a.x);
      const px = -Math.sin(ang), py = Math.cos(ang);
      c.strokeStyle = '#3a2e1d'; c.lineWidth = 4.5;
      for (let d = 8; d < len; d += 24) {
        const tx = a.x + Math.cos(ang) * d, ty = a.y + Math.sin(ang) * d;
        c.beginPath();
        c.moveTo(tx - px * (GA + 5), ty - py * (GA + 5));
        c.lineTo(tx + px * (GA + 5), ty + py * (GA + 5));
        c.stroke();
      }
      c.strokeStyle = '#9aa1a8'; c.lineWidth = 2.6;
      for (const off of [-GA, GA]) {
        c.beginPath();
        c.moveTo(a.x + px * off, a.y + py * off);
        c.lineTo(b.x + px * off, b.y + py * off);
        c.stroke();
      }
    }
  }
  // light decor dots (texture-level variety; real flora is 3D)
  for (let y = 0; y < H; y += 96) {
    for (let x = 0; x < W; x += 96) {
      if (!S.world.onLand(x, y) || S.world.lakeAt(x, y)) continue;
      const h = hash2((x / 96) | 0, (y / 96) | 0);
      if (h > 0.5) continue;
      const [r, g, b] = biomeCols(S, x, y);
      c.fillStyle = `rgba(${(r * 0.75) | 0},${(g * 0.75) | 0},${(b * 0.75) | 0},0.5)`;
      c.beginPath();
      c.ellipse(x + h * 80, y + ((h * 7919) % 1) * 80, 9 + h * 14, 5 + h * 8, h * 6, 0, 7);
      c.fill();
    }
  }
  c.restore();
}
