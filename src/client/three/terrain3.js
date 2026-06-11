// Ground: the whole map painted once into a big canvas texture (smooth
// island coast, sand band, roads, rails, decor) draped on a single quad,
// with an ocean backdrop plane. Reuses the proven 2D painter approach.
import * as THREE from 'three';
import { WORLD, TILE } from '../../sim/config.js';
import { hash2, smooth01, clamp } from '../../sim/util.js';

const SCALE = 0.45; // texture px per world px (≈6221×4147) — sharp at play zoom

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
  tex.anisotropy = 8;
  tex.minFilter = THREE.LinearMipmapLinearFilter;

  // map texture has a TRANSPARENT ocean so the animated water shows through
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(WORLD.w, WORLD.h),
    new THREE.MeshLambertMaterial({ map: tex, transparent: true }),
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.set(WORLD.w / 2, 0, WORLD.h / 2);
  // draw FIRST among transparents so decals (footprints, scorch, shadows)
  // layer on top of the land; water shimmer sits beneath at -2
  ground.renderOrder = -1;
  scene.add(ground);

  // animated ocean: base water + a scrolling shimmer layer
  const ocean = new THREE.Mesh(
    new THREE.PlaneGeometry(WORLD.w * 6, WORLD.h * 6),
    new THREE.MeshLambertMaterial({ color: 0x10303c }),
  );
  ocean.rotation.x = -Math.PI / 2;
  ocean.position.set(WORLD.w / 2, -3, WORLD.h / 2);
  scene.add(ocean);

  // sparse glint texture: tiny bright flecks, mostly empty — reads as light
  // dancing on water instead of tiles
  const noise = document.createElement('canvas');
  noise.width = 256; noise.height = 256;
  const nc = noise.getContext('2d');
  for (let i = 0; i < 260; i++) {
    const x = Math.random() * 256, y = Math.random() * 256;
    nc.fillStyle = `rgba(200,235,245,${0.25 + Math.random() * 0.5})`;
    nc.fillRect(x, y, 1.6 + Math.random() * 2.4, 1.2);
  }
  const noiseTex = new THREE.CanvasTexture(noise);
  noiseTex.wrapS = noiseTex.wrapT = THREE.RepeatWrapping;
  noiseTex.repeat.set(220, 146);
  const shimmer = new THREE.Mesh(
    new THREE.PlaneGeometry(WORLD.w * 6, WORLD.h * 6),
    new THREE.MeshBasicMaterial({ map: noiseTex, transparent: true, opacity: 0.5, depthWrite: false, blending: THREE.AdditiveBlending }),
  );
  shimmer.rotation.x = -Math.PI / 2;
  shimmer.position.set(WORLD.w / 2, -1.5, WORLD.h / 2);
  shimmer.renderOrder = -2;
  scene.add(shimmer);
  const noiseTex2 = noiseTex.clone();
  noiseTex2.wrapS = noiseTex2.wrapT = THREE.RepeatWrapping;
  noiseTex2.repeat.set(133, 88);
  const shimmer2 = new THREE.Mesh(
    new THREE.PlaneGeometry(WORLD.w * 6, WORLD.h * 6),
    new THREE.MeshBasicMaterial({ map: noiseTex2, transparent: true, opacity: 0.3, depthWrite: false, blending: THREE.AdditiveBlending }),
  );
  shimmer2.rotation.x = -Math.PI / 2;
  shimmer2.position.set(WORLD.w / 2, -1.2, WORLD.h / 2);
  shimmer2.renderOrder = -2;
  scene.add(shimmer2);

  // live lake water: lake-shaped translucent surface with drifting glints
  // over the painted depth color (frozen lakes keep their painted ice)
  const lakeTexes = [];
  for (const L of S.world.lakes) {
    if (L.frozen) continue;
    const shape = new THREE.Shape();
    for (let i = 0; i <= 28; i++) {
      const a = (i / 28) * Math.PI * 2;
      const r = L.r * L.wob[i % 28];
      const px = Math.cos(a) * r, py = -Math.sin(a) * r * 0.84;
      i ? shape.lineTo(px, py) : shape.moveTo(px, py);
    }
    const geo = new THREE.ShapeGeometry(shape);
    const water = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({
      color: 0x2e6478, transparent: true, opacity: 0.45, depthWrite: false,
    }));
    water.rotation.x = -Math.PI / 2;
    water.position.set(L.x, 1.2, L.y);
    water.renderOrder = 1;
    scene.add(water);
    const gtex = noiseTex.clone();
    gtex.wrapS = gtex.wrapT = THREE.RepeatWrapping;
    gtex.repeat.set(0.045, 0.045);
    const glint = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({
      map: gtex, transparent: true, opacity: 0.4, depthWrite: false, blending: THREE.AdditiveBlending,
    }));
    glint.rotation.x = -Math.PI / 2;
    glint.position.set(L.x, 1.5, L.y);
    glint.renderOrder = 2;
    scene.add(glint);
    lakeTexes.push(gtex);
  }

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
      for (const gt of lakeTexes) { gt.offset.x += dt * 0.006; gt.offset.y += dt * 0.0035; }
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

  // ---- roads: CONTINUOUS polyline runs (no per-segment cap seams).
  // Two global passes (rim for all roads, then fill for all) so junctions
  // and overlaps merge into one seamless surface.
  c.lineCap = 'round';
  c.lineJoin = 'round';
  const roadRuns = [];
  for (const rd of S.world.roads) {
    let run = null;
    for (let i = 0; i < rd.pts.length; i++) {
      if (rd.fade[i] > 0.05) {
        if (!run) run = { rd, pts: [] };
        run.pts.push(rd.pts[i]);
      } else if (run) { if (run.pts.length > 1) roadRuns.push(run); run = null; }
    }
    if (run && run.pts.length > 1) roadRuns.push(run);
  }
  // organic Rust-style roads: stamp jittered discs along densified paths so
  // edges are ragged and width breathes — no clean ribbon borders
  const densify = (pts, step) => {
    const out = [];
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i], b = pts[i + 1];
      const len = Math.hypot(b.x - a.x, b.y - a.y);
      const n = Math.max(1, Math.ceil(len / step));
      for (let k = 0; k < n; k++) out.push({ x: a.x + (b.x - a.x) * (k / n), y: a.y + (b.y - a.y) * (k / n) });
    }
    out.push(pts[pts.length - 1]);
    return out;
  };
  const stampRun = (run, col, baseR, jitterAmp, alpha) => {
    c.fillStyle = col;
    c.globalAlpha = alpha;
    const dense = densify(run.pts, baseR * 0.55);
    for (let i = 0; i < dense.length; i++) {
      const p = dense[i];
      const h1 = hash2((p.x * 0.13) | 0, (p.y * 0.13) | 0);
      const h2 = hash2((p.x * 0.31) | 0, (p.y * 0.07) | 0);
      const r = baseR * (0.86 + h1 * 0.34);
      const ox = (h2 - 0.5) * jitterAmp, oy = (h1 - 0.5) * jitterAmp;
      c.beginPath();
      c.arc(p.x + ox, p.y + oy, r, 0, 7);
      c.fill();
    }
    c.globalAlpha = 1;
  };
  for (const run of roadRuns) stampRun(run, '#564a31', run.rd.w * 0.62, 9, 0.85);   // shoulder, ragged
  for (const run of roadRuns) stampRun(run, '#6c5d3b', run.rd.w * 0.46, 6, 1);      // packed dirt
  for (const run of roadRuns) stampRun(run, '#75653f', run.rd.w * 0.3, 8, 0.5);     // dusty middle blotches
  // sparse crumbs OUTSIDE the edge for broken borders
  for (const run of roadRuns) {
    c.fillStyle = '#5d5034';
    const dense = densify(run.pts, 34);
    for (let i = 0; i < dense.length; i++) {
      const p = dense[i];
      const h = hash2((p.x * 0.21) | 0, (p.y * 0.17) | 0);
      if (h < 0.45) continue;
      const prev = dense[Math.max(0, i - 1)], next = dense[Math.min(dense.length - 1, i + 1)];
      const ang = Math.atan2(next.y - prev.y, next.x - prev.x) + Math.PI / 2;
      const side = h > 0.72 ? 1 : -1;
      const d = run.rd.w * 0.58 + (h * 53 % 1) * 14;
      c.globalAlpha = 0.4;
      c.beginPath();
      c.arc(p.x + Math.cos(ang) * d * side, p.y + Math.sin(ang) * d * side, 2.5 + (h * 31 % 1) * 5, 0, 7);
      c.fill();
    }
    c.globalAlpha = 1;
  }
  // wheel ruts + potholes
  c.globalAlpha = 0.3;
  for (const run of roadRuns) {
    c.strokeStyle = '#544731';
    c.lineWidth = 4;
    c.beginPath();
    run.pts.forEach((p, i) => (i ? c.lineTo(p.x, p.y) : c.moveTo(p.x, p.y)));
    c.stroke();
  }
  c.globalAlpha = 1;
  for (const run of roadRuns) {
    const dense = densify(run.pts, 90);
    c.fillStyle = 'rgba(58,48,30,0.5)';
    for (const p of dense) {
      const h = hash2((p.x * 0.07) | 0, (p.y * 0.23) | 0);
      if (h > 0.82) {
        c.beginPath();
        c.ellipse(p.x + (h * 91 % 1 - 0.5) * run.rd.w * 0.5, p.y + (h * 47 % 1 - 0.5) * run.rd.w * 0.5, 4 + h * 5, 3 + h * 3, h * 6, 0, 7);
        c.fill();
      }
    }
  }

  // ---- rail crossings: gravel pad + boards UNDER the rails so the road
  // runs smoothly across and the rails stay embedded (like a real crossing)
  const GA = 11;
  for (const cr of S.world.crossings) {
    const ca = Math.cos(cr.railAng), sa = Math.sin(cr.railAng);
    c.save();
    c.translate(cr.x, cr.y);
    c.rotate(cr.railAng);
    // gravel blend pad (soft edges)
    const pg = c.createRadialGradient(0, 0, 10, 0, 0, 64);
    pg.addColorStop(0, 'rgba(116,104,78,0.95)');
    pg.addColorStop(0.7, 'rgba(108,96,72,0.7)');
    pg.addColorStop(1, 'rgba(100,90,68,0)');
    c.fillStyle = pg;
    c.beginPath(); c.ellipse(0, 0, 64, 50, 0, 0, 7); c.fill();
    // crossing boards parallel to the rails (between + outside the rail pair)
    c.fillStyle = '#7b6a45';
    for (const off of [-GA - 7, 0, GA + 7]) {
      c.fillRect(-34, off - 3.4, 68, 6.8);
    }
    c.strokeStyle = 'rgba(60,50,34,0.5)';
    c.lineWidth = 1.2;
    for (const off of [-GA - 7, 0, GA + 7]) c.strokeRect(-34, off - 3.4, 68, 6.8);
    c.restore();
  }

  // ---- rails: continuous ballast + rails; ties skipped through crossings
  const nearCrossing = (x, y) => S.world.crossings.some(cr => (x - cr.x) * (x - cr.x) + (y - cr.y) * (y - cr.y) < 52 * 52);
  for (const rl of S.world.rails) {
    const path = () => {
      c.beginPath();
      rl.pts.forEach((p, i) => (i ? c.lineTo(p.x, p.y) : c.moveTo(p.x, p.y)));
    };
    // ballast (drawn semi-transparent over crossing pads so they blend)
    path(); c.strokeStyle = 'rgba(87,77,64,0.85)'; c.lineWidth = 2 * GA + 16; c.stroke();
    path(); c.strokeStyle = 'rgba(107,95,78,0.85)'; c.lineWidth = 2 * GA + 7; c.stroke();
    // ties
    c.strokeStyle = '#3a2e1d';
    c.lineWidth = 4.5;
    for (let i = 0; i < rl.pts.length - 1; i++) {
      const a = rl.pts[i], b = rl.pts[i + 1];
      const len = Math.hypot(b.x - a.x, b.y - a.y);
      const ang = Math.atan2(b.y - a.y, b.x - a.x);
      const px = -Math.sin(ang), py = Math.cos(ang);
      for (let d = 8; d < len; d += 24) {
        const tx = a.x + Math.cos(ang) * d, ty = a.y + Math.sin(ang) * d;
        if (nearCrossing(tx, ty)) continue;
        c.beginPath();
        c.moveTo(tx - px * (GA + 5), ty - py * (GA + 5));
        c.lineTo(tx + px * (GA + 5), ty + py * (GA + 5));
        c.stroke();
      }
    }
    // steel rails: continuous offset polylines (always on top, embedded look)
    c.strokeStyle = '#a4abb2';
    c.lineWidth = 2.8;
    for (const off of [-GA, GA]) {
      c.beginPath();
      for (let i = 0; i < rl.pts.length; i++) {
        const prev = rl.pts[Math.max(0, i - 1)], next = rl.pts[Math.min(rl.pts.length - 1, i + 1)];
        const ang = Math.atan2(next.y - prev.y, next.x - prev.x);
        const px = -Math.sin(ang), py = Math.cos(ang);
        const x = rl.pts[i].x + px * off, y = rl.pts[i].y + py * off;
        i ? c.lineTo(x, y) : c.moveTo(x, y);
      }
      c.stroke();
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
