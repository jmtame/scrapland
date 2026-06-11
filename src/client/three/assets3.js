// Shared low-poly geometry + material factory. Flat-shaded, palette-driven.
import * as THREE from 'three';

const matCache = new Map();
export function mat(hex, opts = {}) {
  const key = hex + JSON.stringify(opts);
  if (!matCache.has(key)) {
    matCache.set(key, new THREE.MeshLambertMaterial({
      color: hex,
      emissive: opts.emissive || 0x000000,
      emissiveIntensity: opts.emissiveIntensity ?? 1,
      transparent: !!opts.transparent,
      opacity: opts.opacity ?? 1,
      flatShading: true,
    }));
  }
  return matCache.get(key);
}
export function basic(hex, opts = {}) {
  const key = 'b' + hex + JSON.stringify(opts);
  if (!matCache.has(key)) {
    matCache.set(key, new THREE.MeshBasicMaterial({
      color: hex, transparent: !!opts.transparent, opacity: opts.opacity ?? 1,
      blending: opts.additive ? THREE.AdditiveBlending : THREE.NormalBlending,
      depthWrite: opts.depthWrite ?? true,
    }));
  }
  return matCache.get(key);
}

export const GEO = {
  box: new THREE.BoxGeometry(1, 1, 1),
  cyl: new THREE.CylinderGeometry(1, 1, 1, 8),
  cyl6: new THREE.CylinderGeometry(1, 1.18, 1, 6),
  cone: new THREE.ConeGeometry(1, 1, 7),
  ico: new THREE.IcosahedronGeometry(1, 0),
  sphere: new THREE.SphereGeometry(1, 8, 6),
  quad: new THREE.PlaneGeometry(1, 1),
};

// radial glow sprite texture (shared)
let glowTex = null;
export function glowTexture() {
  if (glowTex) return glowTex;
  const cv = document.createElement('canvas');
  cv.width = 64; cv.height = 64;
  const c = cv.getContext('2d');
  const g = c.createRadialGradient(32, 32, 2, 32, 32, 32);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.4, 'rgba(255,255,255,0.45)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  c.fillStyle = g;
  c.fillRect(0, 0, 64, 64);
  glowTex = new THREE.CanvasTexture(cv);
  return glowTex;
}
let blobTex = null;
export function blobTexture() {
  if (blobTex) return blobTex;
  const cv = document.createElement('canvas');
  cv.width = 64; cv.height = 64;
  const c = cv.getContext('2d');
  const g = c.createRadialGradient(32, 32, 4, 32, 32, 30);
  g.addColorStop(0, 'rgba(8,8,6,0.42)');
  g.addColorStop(0.7, 'rgba(8,8,6,0.22)');
  g.addColorStop(1, 'rgba(8,8,6,0)');
  c.fillStyle = g;
  c.fillRect(0, 0, 64, 64);
  blobTex = new THREE.CanvasTexture(cv);
  return blobTex;
}

export function glowSprite(hex, scale = 60) {
  const m = new THREE.SpriteMaterial({
    map: glowTexture(), color: hex, transparent: true,
    blending: THREE.AdditiveBlending, depthWrite: false,
  });
  const s = new THREE.Sprite(m);
  s.scale.set(scale, scale, 1);
  return s;
}
// flat ground-shadow disc (a real plane, NOT a billboard sprite)
let shadowGeo = null;
export function blobShadow(scale = 40) {
  if (!shadowGeo) shadowGeo = new THREE.CircleGeometry(0.5, 14);
  const m = new THREE.MeshBasicMaterial({ map: blobTexture(), transparent: true, depthWrite: false });
  const s = new THREE.Mesh(shadowGeo, m);
  s.rotation.x = -Math.PI / 2;
  s.scale.set(scale, scale * 0.8, 1);
  return s;
}

export const TIER_COLS = {
  wood: 0x8a6230, stone: 0x7f868d, metal: 0x585f66, armored: 0x41526b,
};
export const TIER_DARK = {
  wood: 0x5d3f1e, stone: 0x565c63, metal: 0x3c4147, armored: 0x272f3c,
};

// ---- procedural Rust-style material textures (tileable 128px canvases) ----
const tierTexCache = new Map();
function paintTier(kind) {
  const cv = document.createElement('canvas');
  cv.width = 128; cv.height = 128;
  const c = cv.getContext('2d');
  const rnd = mulberry(kind.length * 1337 + 7);
  if (kind === 'wood') {
    c.fillStyle = '#86602e';
    c.fillRect(0, 0, 128, 128);
    for (let px = 0; px < 128; px += 21) {
      // per-plank tone
      c.fillStyle = `rgba(${70 + rnd() * 50 | 0},${48 + rnd() * 34 | 0},${20 + rnd() * 16 | 0},0.55)`;
      c.fillRect(px, 0, 21, 128);
      // plank gap
      c.fillStyle = 'rgba(42,28,12,0.85)';
      c.fillRect(px, 0, 2, 128);
      // grain streaks
      c.strokeStyle = 'rgba(50,34,14,0.30)';
      c.lineWidth = 1;
      for (let i = 0; i < 5; i++) {
        const gx = px + 4 + rnd() * 14;
        c.beginPath();
        c.moveTo(gx, 0);
        c.bezierCurveTo(gx + rnd() * 4 - 2, 40, gx + rnd() * 4 - 2, 88, gx, 128);
        c.stroke();
      }
      // knot
      if (rnd() > 0.55) {
        const kx = px + 6 + rnd() * 10, ky = rnd() * 128;
        c.fillStyle = 'rgba(40,26,10,0.6)';
        c.beginPath(); c.ellipse(kx, ky, 3.2, 4.5, 0.3, 0, 7); c.fill();
        c.strokeStyle = 'rgba(120,90,48,0.5)';
        c.beginPath(); c.ellipse(kx, ky, 5, 6.5, 0.3, 0, 7); c.stroke();
      }
    }
    // weathering
    c.fillStyle = 'rgba(255,235,200,0.05)';
    c.fillRect(0, 0, 128, 10);
  } else if (kind === 'stone') {
    c.fillStyle = '#7b8289';
    c.fillRect(0, 0, 128, 128);
    const rowH = 26;
    for (let row = 0; row < 5; row++) {
      const off = (row % 2) * 26;
      for (let bx = -26; bx < 128; bx += 52) {
        const x = bx + off;
        c.fillStyle = `rgba(${108 + rnd() * 34 | 0},${114 + rnd() * 32 | 0},${120 + rnd() * 30 | 0},0.7)`;
        c.fillRect(x + 2, row * rowH + 2, 48, rowH - 4);
        // chisel marks
        c.strokeStyle = 'rgba(60,66,72,0.35)';
        c.lineWidth = 1;
        for (let i = 0; i < 3; i++) {
          const sx = x + 6 + rnd() * 38, sy = row * rowH + 5 + rnd() * (rowH - 10);
          c.beginPath(); c.moveTo(sx, sy); c.lineTo(sx + 6 + rnd() * 8, sy + rnd() * 3 - 1.5); c.stroke();
        }
      }
      // mortar
      c.fillStyle = 'rgba(70,76,82,0.9)';
      c.fillRect(0, row * rowH - 1.5, 128, 3);
    }
  } else if (kind === 'metal') {
    c.fillStyle = '#5b6168';
    c.fillRect(0, 0, 128, 128);
    // sheet panels
    for (let px = 0; px < 128; px += 43) {
      c.fillStyle = `rgba(${80 + rnd() * 26 | 0},${88 + rnd() * 22 | 0},${96 + rnd() * 20 | 0},0.45)`;
      c.fillRect(px + 2, 0, 39, 128);
      c.fillStyle = 'rgba(34,38,43,0.9)';
      c.fillRect(px, 0, 2.4, 128);
      // rivets along seams
      for (let ry = 8; ry < 128; ry += 18) {
        c.fillStyle = 'rgba(28,32,36,0.9)';
        c.beginPath(); c.arc(px + 6, ry, 1.9, 0, 7); c.fill();
        c.fillStyle = 'rgba(200,210,218,0.5)';
        c.beginPath(); c.arc(px + 5.4, ry - 0.6, 0.8, 0, 7); c.fill();
      }
    }
    // scratches + rust stains (the Rust look)
    c.strokeStyle = 'rgba(168,178,188,0.25)';
    for (let i = 0; i < 7; i++) {
      const sx = rnd() * 128, sy = rnd() * 128;
      c.beginPath(); c.moveTo(sx, sy); c.lineTo(sx + 10 + rnd() * 22, sy + rnd() * 6 - 3); c.stroke();
    }
    for (let i = 0; i < 5; i++) {
      const sx = rnd() * 128, sy = rnd() * 128;
      const g = c.createRadialGradient(sx, sy, 1, sx, sy, 7 + rnd() * 10);
      g.addColorStop(0, 'rgba(140,72,30,0.5)');
      g.addColorStop(1, 'rgba(140,72,30,0)');
      c.fillStyle = g;
      c.fillRect(sx - 18, sy - 18, 36, 36);
    }
  } else { // armored / HQM
    c.fillStyle = '#3c4a5e';
    c.fillRect(0, 0, 128, 128);
    // heavy plate frame
    c.strokeStyle = 'rgba(22,28,38,0.9)';
    c.lineWidth = 6;
    c.strokeRect(3, 3, 122, 122);
    // diagonal reinforcement straps
    c.strokeStyle = 'rgba(30,38,50,0.85)';
    c.lineWidth = 10;
    c.beginPath(); c.moveTo(0, 0); c.lineTo(128, 128); c.stroke();
    c.beginPath(); c.moveTo(128, 0); c.lineTo(0, 128); c.stroke();
    c.strokeStyle = 'rgba(110,130,160,0.35)';
    c.lineWidth = 2;
    c.beginPath(); c.moveTo(0, 0); c.lineTo(128, 128); c.stroke();
    c.beginPath(); c.moveTo(128, 0); c.lineTo(0, 128); c.stroke();
    // bolts
    c.fillStyle = 'rgba(190,205,225,0.6)';
    for (const [bx, by] of [[12, 12], [116, 12], [12, 116], [116, 116], [64, 14], [64, 114], [14, 64], [114, 64]]) {
      c.beginPath(); c.arc(bx, by, 2.6, 0, 7); c.fill();
    }
    // brushed sheen
    c.fillStyle = 'rgba(255,255,255,0.05)';
    c.fillRect(0, 0, 128, 22);
  }
  const tex = new THREE.CanvasTexture(cv);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
function mulberry(seed) {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// material caches for textured building pieces
export function tierWallMat(kind) {
  const key = 'w' + kind;
  if (!tierTexCache.has(key)) {
    tierTexCache.set(key, new THREE.MeshLambertMaterial({ map: paintTier(kind), flatShading: true }));
  }
  return tierTexCache.get(key);
}
export function tierFloorMat(kind) {
  const key = 'f' + kind;
  if (!tierTexCache.has(key)) {
    const m = new THREE.MeshLambertMaterial({ map: paintTier(kind), flatShading: true });
    m.color.setScalar(0.72); // foundations read darker than walls
    tierTexCache.set(key, m);
  }
  return tierTexCache.get(key);
}

// simple capsule person: body cylinder + head sphere + gun box, team-tinted
export function makePerson(colHex, opts = {}) {
  const g = new THREE.Group();
  const body = new THREE.Mesh(GEO.cyl, mat(colHex));
  body.scale.set(10, 22, 10);
  body.position.y = 11;
  g.add(body);
  const head = new THREE.Mesh(GEO.sphere, mat(opts.headCol ?? 0xc79c74));
  head.scale.set(7, 7, 7);
  head.position.y = 27;
  g.add(head);
  const gun = new THREE.Mesh(GEO.box, mat(0x23261f));
  gun.scale.set(opts.gunLen ?? 20, 4, 4);
  gun.position.set((opts.gunLen ?? 20) / 2 + 6, 18, 0);
  g.add(gun);
  const shadow = blobShadow(42);
  shadow.position.y = 1.2;
  g.add(shadow);
  g.userData = { body, head, gun, shadow };
  return g;
}
