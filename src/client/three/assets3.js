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
