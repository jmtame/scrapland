// Character + animal rigs: articulated low-poly figures with walk cycles.
// Each builder returns a Group with userData.animate(t, moveAmt, opts).
import * as THREE from 'three';
import { GEO, mat, blobShadow } from './assets3.js';

const SKIN = 0xc79c74;
const TAU2 = Math.PI * 2;

function box(hex, sx, sy, sz, x, y, z) {
  const m = new THREE.Mesh(GEO.box, mat(hex));
  m.scale.set(sx, sy, sz);
  m.position.set(x, y, z);
  return m;
}
function ball(hex, r, x, y, z, sy = 1, sz = 1) {
  const m = new THREE.Mesh(GEO.sphere, mat(hex));
  m.scale.set(r, r * sy, r * sz);
  m.position.set(x, y, z);
  return m;
}

// ---------- humanoid ----------
const GUNS = {
  pistol: (g) => g.add(box(0x23261f, 10, 4, 3.4, 11, 0, 0)),
  rifle: (g) => { g.add(box(0x23261f, 20, 3.6, 3.4, 15, 0, 0)); g.add(box(0x4a3a20, 5, 5, 3.8, 7, -1, 0)); },
  shotgun: (g) => { g.add(box(0x2b2620, 16, 4.6, 4, 13, 0, 0)); g.add(box(0x5b4226, 5, 5.5, 4.2, 5, -1, 0)); },
  hmg: (g) => { g.add(box(0x23261f, 24, 5, 4.4, 16, 0, 0)); g.add(box(0x3a3f37, 6, 7, 4.8, 10, -3, 0)); },
  tool: (g) => { g.add(box(0x5b4226, 13, 3, 3, 9, 0, 0)); g.add(box(0xb9c0c7, 4, 8, 3.4, 16, 1, 0)); },
  rocket: (g) => { g.add(box(0x39402f, 22, 6.5, 6, 14, 1, 0)); g.add(box(0xff9b3d, 3, 7, 6.4, 25, 1, 0)); },
  hammer: (g) => { g.add(box(0x5b4226, 11, 3, 3, 8, 0, 0)); g.add(box(0x9aa1a8, 4, 7, 4.4, 14, 1, 0)); },
  jack: (g) => {
    g.add(box(0x1c1c1c, 4, 4, 3.4, 6, 1, 0));            // grip
    g.add(box(0xcaa23a, 11, 9, 5.5, 13, 0, 0));          // yellow housing
    g.add(box(0x3a3f37, 4, 5.5, 4, 20, -1, 0));          // collar
    g.add(box(0xb9c0c7, 11, 2.6, 2.6, 27, -2, 0));       // chisel
  },
};

export function makeHumanoid(colHex, opts = {}) {
  const g = new THREE.Group();
  const parts = {};

  parts.shadow = blobShadow(46);
  parts.shadow.position.y = 1;
  g.add(parts.shadow);

  // lower body: hips + legs rotate toward the TRAVEL direction,
  // independent of where the torso/gun are aiming
  parts.lower = new THREE.Group();
  g.add(parts.lower);
  for (const side of ['L', 'R']) {
    const pivot = new THREE.Group();
    pivot.position.set(0, 12, side === 'L' ? -3.2 : 3.2);
    const leg = box(0x32302a, 4.6, 12, 4.6, 0, -6, 0);
    pivot.add(leg);
    parts.lower.add(pivot);
    parts['leg' + side] = pivot;
  }
  // torso
  parts.torso = box(colHex, 10, 14, 12, 0, 24.5, 0);
  g.add(parts.torso);
  parts.torsoShade = box(shade(colHex, 0.7), 10.4, 4.5, 12.4, 0, 19, 0);
  g.add(parts.torsoShade);
  // armor chest plate (visibility by level)
  parts.armor = box(0x959ca3, 11, 10, 13, 0.8, 24.5, 0);
  parts.armor.visible = false;
  g.add(parts.armor);
  // backpack
  parts.pack = box(0x4a4034, 4, 9, 8, -7, 25, 0);
  g.add(parts.pack);
  // left arm (pivot at shoulder, swings)
  parts.armL = new THREE.Group();
  parts.armL.position.set(0, 30, -7.4);
  const armLm = box(SKIN, 3.6, 11, 3.6, 0, -5, 0);
  parts.armL.add(armLm);
  g.add(parts.armL);
  // right arm + held item (aims forward +x)
  parts.armR = new THREE.Group();
  parts.armR.position.set(2, 29, 7.4);
  parts.armR.add(box(SKIN, 9, 3.6, 3.6, 4.5, 0, -1.5));
  parts.gun = new THREE.Group();
  parts.armR.add(parts.gun);
  g.add(parts.armR);
  // head
  parts.head = new THREE.Group();
  parts.head.position.y = 38;
  parts.head.add(ball(SKIN, 5.6, 0, 0, 0));
  const hair = new THREE.Mesh(GEO.sphere, mat(opts.hairCol ?? 0x3a2a18));
  hair.scale.set(5.9, 4.4, 5.9);
  hair.position.y = 2.2;
  parts.head.add(hair);
  // team band
  const band = new THREE.Mesh(GEO.cyl, mat(colHex));
  band.scale.set(5.9, 1.6, 5.9);
  band.position.y = 1.2;
  parts.head.add(band);
  parts.band = band;
  // helmet (facemask levels)
  parts.helmet = new THREE.Group();
  const dome = new THREE.Mesh(GEO.sphere, mat(0x9aabb8));
  dome.scale.set(6.3, 6.3, 6.3);
  parts.helmet.add(dome);
  const visor = box(0x11151c, 3, 3, 9.5, 4.6, -0.5, 0);
  parts.helmet.add(visor);
  parts.helmet.visible = false;
  parts.head.add(parts.helmet);
  g.add(parts.head);

  g.userData = {
    parts,
    colHex,
    phase: Math.random() * 7,
    setGun(kind) {
      if (g.userData.gunKind === kind) return;
      g.userData.gunKind = kind;
      parts.gun.clear();
      (GUNS[kind] || GUNS.pistol)(parts.gun);
    },
    setArmor(body, head) {
      parts.armor.visible = body > 0;
      if (body > 0) parts.armor.material = mat(body >= 3 ? 0x5d7a9b : body === 2 ? 0x959ca3 : 0x857748);
      parts.helmet.visible = head > 0;
      if (head > 0) parts.helmet.children[0].material = mat(head >= 3 ? 0x7c8ec9 : head === 2 ? 0x9aabb8 : 0xcdbb92);
    },
    setColor(hex) {
      if (g.userData.colHex === hex) return;
      g.userData.colHex = hex;
      parts.torso.material = mat(hex);
      parts.torsoShade.material = mat(shade(hex, 0.7));
      band.material = mat(hex);
    },
    animate(t, moveAmt, gathering, jack, relMove) {
      const u2 = g.userData;
      const dtA = Math.min(0.1, Math.max(0.001, t - (u2.lastT ?? t)));
      u2.lastT = t;
      // hips face travel; torso keeps aiming. Backward-ish travel (>118°
      // off-aim) backpedals: hips stay forward, stride reverses + shortens.
      let hipsTarget = u2.hipsCur ?? 0, strideDir = 1, strideAmp = 1;
      if (moveAmt > 0.05 && relMove !== null && relMove !== undefined) {
        let a = relMove % TAU2;
        if (a > Math.PI) a -= TAU2;
        if (a < -Math.PI) a += TAU2;
        if (Math.abs(a) > 2.06) {
          strideDir = -1; strideAmp = 0.72;
          a = a > 0 ? a - Math.PI : a + Math.PI;
        }
        hipsTarget = a;
      } else if (moveAmt <= 0.05) hipsTarget = 0;
      let cur = u2.hipsCur ?? 0;
      let d = (hipsTarget - cur) % TAU2;
      if (d > Math.PI) d -= TAU2;
      if (d < -Math.PI) d += TAU2;
      cur += d * Math.min(1, dtA * 14);
      u2.hipsCur = cur;
      parts.lower.rotation.y = -cur;

      const ph = t * 11 + u2.phase;
      const swing = Math.sin(ph) * 0.75 * moveAmt * strideAmp * strideDir;
      parts.legL.rotation.z = swing;
      parts.legR.rotation.z = -swing;
      parts.armL.rotation.z = -swing * 0.55;
      g.position.y = Math.abs(Math.sin(ph)) * 1.4 * moveAmt;
      if (gathering && jack) {
        // jackhammer: braced arm + violent high-frequency judder through the
        // whole body (the model shakes, not the camera)
        parts.armR.rotation.z = -0.22 + Math.sin(t * 62) * 0.05;
        const jx = Math.sin(t * 57) * 1.5, jy = Math.sin(t * 71) * 1.1;
        g.position.y += Math.abs(jy) * 0.8;
        g.userData.judder = { x: jx, z: Math.cos(t * 49) * 1.3 };
      } else {
        g.userData.judder = null;
        if (gathering) parts.armR.rotation.z = -0.5 + Math.sin(t * 9) * 0.55;
        else parts.armR.rotation.z = 0;
      }
    },
  };
  g.userData.setGun(opts.gun || 'pistol');
  return g;
}

function shade(hex, f) {
  const r = Math.min(255, (((hex >> 16) & 255) * f)) | 0;
  const gg = Math.min(255, (((hex >> 8) & 255) * f)) | 0;
  const b = Math.min(255, ((hex & 255) * f)) | 0;
  return (r << 16) | (gg << 8) | b;
}

// ---------- animals ----------
function quadLegs(g, col, r, lx, lz, h) {
  const legs = [];
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const pivot = new THREE.Group();
    pivot.position.set(sx * lx, h, sz * lz);
    const leg = new THREE.Mesh(GEO.cyl, mat(col));
    leg.scale.set(r * 0.16, h, r * 0.16);
    leg.position.y = -h / 2;
    pivot.add(leg);
    g.add(pivot);
    legs.push({ pivot, phase: (sx * sz > 0 ? 0 : Math.PI) });
  }
  return legs;
}

export function makeAnimalRig(type, r) {
  const g = new THREE.Group();
  const u = { legs: [], extra: null };
  const C = {
    boar: [0x7e6244, 0x54402b], wolf: [0x75767f, 0x46474d], bear: [0x61482f, 0x3a2c1c],
    polarbear: [0xdde5eb, 0xaebcc8], alligator: [0x557036, 0x31491c],
    snake: [0xb29a3a, 0x71611e], scorpion: [0x7e5226, 0x472e12],
  }[type] || [0x888888, 0x555555];
  const [col, colDk] = C;

  const sh = blobShadow(r * 3.2);
  sh.position.y = 0.8;
  g.add(sh);

  if (type === 'snake') {
    u.segs = [];
    for (let i = 0; i < 6; i++) {
      const s = ball(i % 2 ? colDk : col, r * (0.55 - i * 0.05), -i * r * 0.5, r * 0.4, 0);
      g.add(s);
      u.segs.push(s);
    }
    const head = ball(col, r * 0.62, r * 0.45, r * 0.45, 0, 0.8, 0.9);
    g.add(head);
    u.head = head;
  } else if (type === 'scorpion') {
    g.add(ball(colDk, r * 0.85, 0, r * 0.4, 0, 0.5, 0.8));
    g.add(ball(col, r * 0.62, r * 0.2, r * 0.55, 0, 0.5, 0.75));
    for (const sz of [-1, 1]) {
      g.add(box(col, r * 0.8, r * 0.2, r * 0.18, r * 0.75, r * 0.35, sz * r * 0.5));
      g.add(ball(colDk, r * 0.26, r * 1.2, r * 0.35, sz * r * 0.62));
    }
    // curled tail
    u.tail = new THREE.Group();
    u.tail.position.set(-r * 0.7, r * 0.5, 0);
    let tx = 0, ty = 0;
    for (let i = 0; i < 3; i++) {
      tx -= r * 0.3; ty += r * 0.34;
      u.tail.add(ball(colDk, r * 0.2, tx, ty, 0));
    }
    const sting = new THREE.Mesh(GEO.cone, mat(0x3a2410));
    sting.scale.set(r * 0.14, r * 0.3, r * 0.14);
    sting.position.set(tx + r * 0.16, ty + r * 0.22, 0);
    sting.rotation.z = -1;
    u.tail.add(sting);
    g.add(u.tail);
  } else if (type === 'alligator') {
    const h = r * 0.55;
    g.add(ball(colDk, r, 0, h, 0, 0.5, 0.72));
    g.add(ball(col, r * 0.82, 0, h + r * 0.18, 0, 0.42, 0.6));
    g.add(ball(col, r * 0.5, r * 1.15, h, 0, 0.5, 0.62));    // snout
    g.add(box(colDk, r * 0.9, r * 0.16, r * 0.5, r * 1.25, h - r * 0.1, 0)); // jaw
    // tail segments
    g.add(ball(colDk, r * 0.62, -r * 1.05, h, 0, 0.45, 0.6));
    g.add(ball(colDk, r * 0.4, -r * 1.7, h * 0.9, 0, 0.45, 0.55));
    // dorsal ridges
    for (let i = 0; i < 4; i++) {
      const spike = new THREE.Mesh(GEO.cone, mat(colDk));
      spike.scale.set(r * 0.12, r * 0.25, r * 0.12);
      spike.position.set(-r * 0.6 + i * r * 0.42, h + r * 0.42, 0);
      g.add(spike);
    }
    u.legs = quadLegs(g, colDk, r, r * 0.55, r * 0.5, h * 0.8);
  } else {
    // boar / wolf / bears
    const bulk = type === 'bear' || type === 'polarbear' ? 1.18 : 1;
    const h = r * 0.78 * bulk;
    g.add(ball(colDk, r * 1.05 * bulk, 0, h, 0, 0.78, 0.78));
    g.add(ball(col, r * 0.92 * bulk, 0, h + r * 0.12, 0, 0.72, 0.7));
    if (bulk > 1) g.add(ball(col, r * 0.7, -r * 0.25, h + r * 0.55, 0)); // shoulder hump
    const headR = r * (type === 'wolf' ? 0.46 : 0.55);
    const head = new THREE.Group();
    head.position.set(r * 0.95 * bulk, h + r * 0.18, 0);
    head.add(ball(col, headR, 0, 0, 0));
    if (type === 'wolf') {
      head.add(ball(colDk, headR * 0.55, headR * 0.8, -headR * 0.15, 0, 0.7, 0.6)); // snout
      for (const sz of [-1, 1]) {
        const ear = new THREE.Mesh(GEO.cone, mat(colDk));
        ear.scale.set(headR * 0.3, headR * 0.6, headR * 0.3);
        ear.position.set(-headR * 0.3, headR * 0.85, sz * headR * 0.5);
        head.add(ear);
      }
    } else if (type === 'boar') {
      head.add(ball(colDk, headR * 0.5, headR * 0.85, -headR * 0.2, 0, 0.7, 0.8)); // snout
      for (const sz of [-1, 1]) {
        const tusk = new THREE.Mesh(GEO.cone, mat(0xe8e0cf));
        tusk.scale.set(headR * 0.12, headR * 0.4, headR * 0.12);
        tusk.position.set(headR * 0.9, -headR * 0.25, sz * headR * 0.4);
        tusk.rotation.z = 0.7;
        head.add(tusk);
      }
    } else {
      for (const sz of [-1, 1]) head.add(ball(colDk, headR * 0.28, -headR * 0.2, headR * 0.85, sz * headR * 0.6));
    }
    g.add(head);
    u.head = head;
    u.legs = quadLegs(g, colDk, r * bulk, r * 0.5 * bulk, r * 0.42 * bulk, h * 0.85);
  }

  g.userData = {
    ...u,
    phase: Math.random() * 7,
    animate(t, moveAmt) {
      const ph = t * 9 + g.userData.phase;
      for (const L of u.legs) L.pivot.rotation.z = Math.sin(ph + L.phase) * 0.55 * moveAmt;
      if (u.segs) {
        for (let i = 0; i < u.segs.length; i++) u.segs[i].position.z = Math.sin(t * 7 - i * 0.8) * r * 0.3 * (0.4 + moveAmt);
      }
      if (u.tail) u.tail.rotation.z = Math.sin(t * 3) * 0.08;
      if (u.head && !u.segs) u.head.rotation.z = Math.sin(t * 2.2 + g.userData.phase) * 0.06;
    },
  };
  return g;
}
