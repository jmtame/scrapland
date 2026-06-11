// Dynamic actors + FX: units, player, guards, animals, vehicles,
// projectiles, loot, fires, wrecks, scorch decals, particles, flashes.
// Pool pattern: sim object ref → mesh group, hidden when gone.
import * as THREE from 'three';
import { TILE, GUARD, OWNER } from '../../sim/config.js';
import { GEO, mat, glowSprite, blobShadow, tierWallMat, puffTexture } from './assets3.js';
import { makeHumanoid, makeAnimalRig } from './rigs3.js';

const TAU = Math.PI * 2;
const SLOT_GUN = { 0: 'tool', 1: 'pistol', 2: 'rifle', 3: 'hmg', 4: 'rocket', 5: 'hammer', 6: 'rifle', 7: 'shotgun', 8: 'hmg' };

class Pool {
  constructor(scene, makeFn) {
    this.scene = scene;
    this.make = makeFn;
    this.map = new Map();
    this.seen = new Set();
    this.miss = new Map();
  }
  get(key, ...args) {
    this.seen.add(key);
    let e = this.map.get(key);
    if (!e) {
      e = this.make(...args);
      this.map.set(key, e);
      this.scene.add(e);
    }
    e.visible = true;
    return e;
  }
  sweep() {
    for (const [k, e] of this.map) {
      if (!this.seen.has(k)) {
        e.visible = false;
        const n = (this.miss.get(k) || 0) + 1;
        // drop stale entries (dead projectiles etc.) so the pool can't leak
        if (n > 300) {
          this.scene.remove(e);
          this.map.delete(k);
          this.miss.delete(k);
        } else this.miss.set(k, n);
      } else this.miss.delete(k);
    }
    this.seen.clear();
  }
}

export function makeActors3(S, scene) {
  const persons = new Pool(scene, (colHex, gun, scientist) => makeHumanoid(colHex, { gun, scientist }));
  const animals = new Pool(scene, (type, r) => makeAnimalRig(type, r));
  function basicDark() { return mat(0x191c15); }
  const bx = (hex, sx, sy, sz, x, y, z) => {
    const m = new THREE.Mesh(GEO.box, mat(hex));
    m.scale.set(sx, sy, sz);
    m.position.set(x, y, z);
    return m;
  };

  // Rust minicopter: skeletal frame, exposed seat, mast rotor, tail rotor, skids
  const copters = new Pool(scene, (colHex) => {
    const g = new THREE.Group();
    g.add(bx(0x33372e, 34, 3, 24, 2, 8, 0));                 // floor plate
    g.add(bx(colHex, 15, 11, 15, 4, 15, 0));                 // seat
    g.add(bx(colHex, 13, 16, 3.4, -3, 24, 0));               // seat back
    g.add(bx(0x23261f, 9, 7, 12, 15, 13, 0));                // console
    g.add(bx(0x3a3f37, 10, 10, 11, -11, 14, 0));             // engine block
    const mast = new THREE.Mesh(GEO.cyl, mat(0x2c2f28));
    mast.scale.set(2.4, 16, 2.4);
    mast.position.set(-2, 32, 0);
    g.add(mast);
    // tail boom + fin + tail rotor
    g.add(bx(0x2c2f28, 42, 3.6, 3.6, -32, 22, 0));
    g.add(bx(0x33372e, 8, 12, 2.4, -51, 26, 0));             // fin
    const tailRotor = bx(0x191c15, 1.4, 16, 2.6, -53, 24, 3);
    g.add(tailRotor);
    // skids
    for (const sz of [-1, 1]) {
      const skid = new THREE.Mesh(GEO.cyl, mat(0x23261f));
      skid.scale.set(1.8, 52, 1.8);
      skid.rotation.z = Math.PI / 2;
      skid.position.set(2, 2.5, sz * 13);
      g.add(skid);
      g.add(bx(0x23261f, 2, 8, 2, -8, 5, sz * 13));
      g.add(bx(0x23261f, 2, 8, 2, 12, 5, sz * 13));
    }
    const rotor = bx(0x191c15, 96, 1.6, 7, -2, 41, 0);
    g.add(rotor);
    // seated pilot (visible only when flying)
    const pilot = new THREE.Group();
    pilot.add(bx(colHex, 8, 11, 9, 4, 21, 0));
    const phead = new THREE.Mesh(GEO.sphere, mat(0xc79c74));
    phead.scale.set(4.5, 4.5, 4.5);
    phead.position.set(4, 30, 0);
    pilot.add(phead);
    pilot.visible = false;
    g.add(pilot);
    const sh = blobShadow(86);
    sh.position.y = 1;
    g.add(sh);
    g.userData = { rotor, tailRotor, sh, pilot };
    return g;
  });

  // Rust transport = tandem-rotor Chinook: long fuselage, two masts, ramp
  const transports = new Pool(scene, (colHex) => {
    const g = new THREE.Group();
    g.add(bx(colHex, 104, 30, 34, 0, 26, 0));                // fuselage
    g.add(bx(0x262c22, 104, 8, 35, 0, 13, 0));               // belly
    g.add(bx(0x1f2419, 18, 22, 30, 56, 24, 0));              // nose/cockpit
    g.add(bx(0x9fc2d8, 6, 9, 26, 64, 30, 0));                // windshield
    const ramp = bx(0x2c3328, 20, 4, 30, -56, 12, 0);
    ramp.rotation.z = 0.5;
    g.add(ramp);
    for (let i = 0; i < 4; i++) g.add(bx(0x14181c, 7, 7, 2, 32 - i * 22, 30, 17.6)); // windows
    for (let i = 0; i < 4; i++) g.add(bx(0x14181c, 7, 7, 2, 32 - i * 22, 30, -17.6));
    g.add(bx(0x3a4034, 26, 10, 20, -38, 46, 0));             // rear pylon
    const mastF = bx(0x2c2f28, 4, 12, 4, 38, 46, 0);
    g.add(mastF);
    const rotor = bx(0x191c15, 100, 2, 8, 38, 54, 0);
    g.add(rotor);
    const rotor2 = bx(0x191c15, 100, 2, 8, -38, 58, 0);
    g.add(rotor2);
    // wheels
    for (const [wx, wz] of [[44, 14], [44, -14], [-40, 16], [-40, -16]]) {
      const w = new THREE.Mesh(GEO.cyl, mat(0x14181c));
      w.scale.set(4.5, 3, 4.5);
      w.rotation.x = Math.PI / 2;
      w.position.set(wx, 5, wz);
      g.add(w);
    }
    const sh = blobShadow(150);
    sh.position.y = 1;
    g.add(sh);
    g.userData = { rotor, rotor2, sh };
    return g;
  });

  const simpleMeshes = new Pool(scene, (build) => build());
  const glows = new Pool(scene, (hex, scale) => glowSprite(hex, scale));

  // footprints: instanced flat decals, shrink-fading with age (sim keeps 10 s)
  const FPMAX = 700;
  const fpI = new THREE.InstancedMesh(
    GEO.quad,
    new THREE.MeshBasicMaterial({ color: 0x241c12, transparent: true, opacity: 0.34, depthWrite: false, side: THREE.DoubleSide }),
    FPMAX,
  );
  fpI.frustumCulled = false;
  fpI.renderOrder = 2; // above the (transparent) ground quad
  scene.add(fpI);
  const fpM = new THREE.Matrix4();
  const fpR = new THREE.Matrix4();
  const fpS = new THREE.Vector3();

  // harvest debris: chunks knocked off nodes (gravity + tumble) and, with the
  // jackhammer, hot sparks. Client-only; spawned from sim 'harvest' events.
  const DMAX = 64;
  const debris = [];
  const debrisI = new THREE.InstancedMesh(GEO.box, new THREE.MeshLambertMaterial({ color: 0xffffff, flatShading: true }), DMAX);
  debrisI.frustumCulled = false;
  scene.add(debrisI);
  const dM = new THREE.Matrix4();
  const dC = new THREE.Color();
  const DEB_COL = { wood: 0x8a6230, stone: 0x84898f, metal: 0xc89544 };
  const SMAX = 90;
  const sparks = [];
  const sGeo = new THREE.BufferGeometry();
  const sPos = new Float32Array(SMAX * 3);
  sGeo.setAttribute('position', new THREE.BufferAttribute(sPos, 3));
  const sparkPts = new THREE.Points(sGeo, new THREE.PointsMaterial({
    color: 0xffe9a3, size: 6, transparent: true, opacity: 0.95,
    blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true,
  }));
  sparkPts.frustumCulled = false;
  scene.add(sparkPts);

  function spawnHarvestFx(e) {
    const n = e.jack ? 5 : 3;
    for (let i = 0; i < n; i++) {
      if (debris.length >= DMAX) debris.shift();
      const a = Math.random() * TAU;
      debris.push({
        x: e.x + Math.cos(a) * 6, y: e.y + Math.sin(a) * 6, h: 18 + Math.random() * 14,
        vx: Math.cos(a) * (40 + Math.random() * 70), vy: Math.sin(a) * (40 + Math.random() * 70),
        vh: 60 + Math.random() * 90, life: 0.85, rot: Math.random() * 7, vrot: (Math.random() - 0.5) * 14,
        s: 2.2 + Math.random() * (e.jack ? 3.4 : 2.2), col: DEB_COL[e.kind] || 0x8a6230,
      });
    }
    if (e.jack) {
      for (let i = 0; i < 7; i++) {
        if (sparks.length >= SMAX) sparks.shift();
        const a = Math.random() * TAU;
        sparks.push({
          x: e.x, y: e.y, h: 16,
          vx: Math.cos(a) * (90 + Math.random() * 160), vy: Math.sin(a) * (90 + Math.random() * 160),
          vh: 40 + Math.random() * 120, life: 0.22 + Math.random() * 0.14,
        });
      }
    }
  }

  function updateHarvestFx(dt) {
    for (let i = debris.length - 1; i >= 0; i--) {
      const d = debris[i];
      d.life -= dt;
      if (d.life <= 0) { debris.splice(i, 1); continue; }
      d.vh -= 320 * dt;
      d.x += d.vx * dt; d.y += d.vy * dt; d.h += d.vh * dt;
      if (d.h < 1.5) { d.h = 1.5; d.vh *= -0.35; d.vx *= 0.6; d.vy *= 0.6; }
      d.rot += d.vrot * dt;
    }
    debris.forEach((d, i) => {
      dM.makeRotationY(d.rot).scale(new THREE.Vector3(d.s, d.s, d.s)).setPosition(d.x, d.h, d.y);
      debrisI.setMatrixAt(i, dM);
      dC.setHex(d.col);
      debrisI.setColorAt(i, dC);
    });
    debrisI.count = debris.length;
    debrisI.instanceMatrix.needsUpdate = true;
    if (debrisI.instanceColor) debrisI.instanceColor.needsUpdate = true;
    let sn = 0;
    for (let i = sparks.length - 1; i >= 0; i--) {
      const s = sparks[i];
      s.life -= dt;
      if (s.life <= 0) { sparks.splice(i, 1); continue; }
      s.vh -= 260 * dt;
      s.x += s.vx * dt; s.y += s.vy * dt; s.h = Math.max(1, s.h + s.vh * dt);
    }
    for (const s of sparks) {
      if (sn >= SMAX) break;
      sPos[sn * 3] = s.x; sPos[sn * 3 + 1] = s.h; sPos[sn * 3 + 2] = s.y;
      sn++;
    }
    sGeo.setDrawRange(0, sn);
    sGeo.attributes.position.needsUpdate = true;
  }

  // train smoke: billowing gray puffs (grow, rise, drift with wind, fade)
  const SMKMAX = 46;
  const smokeSprites = [];
  for (let i = 0; i < SMKMAX; i++) {
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({
      map: puffTexture(), color: 0x868c92, transparent: true, opacity: 0,
      depthWrite: false,
    }));
    sp.visible = false;
    scene.add(sp);
    smokeSprites.push(sp);
  }
  const smokes = [];
  function spawnSmoke(x, y, h, big) {
    if (smokes.length >= SMKMAX) smokes.shift();
    smokes.push({ x, y, h, life: 2.8, max: 2.8, s0: 26 * big, drift: Math.random() * 7 });
  }
  function updateSmoke(dt) {
    for (let i = smokes.length - 1; i >= 0; i--) {
      const s = smokes[i];
      s.life -= dt;
      if (s.life <= 0) { smokes.splice(i, 1); continue; }
      s.h += 50 * dt;
      s.x += S.wind * 9 * dt;
      s.y += Math.sin(s.drift) * 3 * dt;
    }
    smokeSprites.forEach((sp, i) => {
      const s = smokes[i];
      if (!s) { sp.visible = false; return; }
      sp.visible = true;
      const age = 1 - s.life / s.max;
      const sc = s.s0 * (1 + age * 2.4);
      sp.scale.set(sc, sc, 1);
      sp.position.set(s.x, s.h, s.y);
      sp.material.opacity = 0.36 * (s.life / s.max) * Math.min(1, age * 6 + 0.2);
    });
  }
  // articulated train chain: world position+angle at arc offsets behind the head
  function trainChain(tr, offsets) {
    const pts = tr.pts;
    let acc = 0;
    for (let i = 0; i < tr.seg && i < pts.length - 1; i++) acc += Math.hypot(pts[i + 1].x - pts[i].x, pts[i + 1].y - pts[i].y);
    acc += Math.hypot(tr.x - pts[Math.min(tr.seg, pts.length - 1)].x, tr.y - pts[Math.min(tr.seg, pts.length - 1)].y);
    const out = [];
    for (const off of offsets) {
      const d = Math.max(0.1, acc + off);
      let i = 0, run = 0;
      while (i < pts.length - 2) {
        const L = Math.hypot(pts[i + 1].x - pts[i].x, pts[i + 1].y - pts[i].y);
        if (run + L >= d) break;
        run += L;
        i++;
      }
      const a = pts[i], b = pts[i + 1];
      const L = Math.hypot(b.x - a.x, b.y - a.y) || 1;
      const t = Math.max(0, Math.min(1, (d - run) / L));
      out.push({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, a: Math.atan2(b.y - a.y, b.x - a.x) });
    }
    return out;
  }

  // particles
  const PMAX = 1200;
  const pGeo = new THREE.BufferGeometry();
  const pPos = new Float32Array(PMAX * 3);
  const pCol = new Float32Array(PMAX * 3);
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
  pGeo.setAttribute('color', new THREE.BufferAttribute(pCol, 3));
  const points = new THREE.Points(pGeo, new THREE.PointsMaterial({
    size: 7, vertexColors: true, transparent: true, opacity: 0.9,
    sizeAttenuation: true, depthWrite: false,
  }));
  points.frustumCulled = false;
  scene.add(points);
  const colCache = new Map();
  function parseCol(cs) {
    let c = colCache.get(cs);
    if (!c) {
      c = new THREE.Color();
      try {
        if (cs.startsWith('rgba')) {
          const m = cs.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)/);
          if (m) c.setRGB(+m[1] / 255, +m[2] / 255, +m[3] / 255);
        } else c.set(cs);
      } catch { c.setRGB(0.7, 0.7, 0.7); }
      colCache.set(cs, c);
    }
    return c;
  }

  let curDt = 1 / 60;
  function syncPerson(g, x, y, angle, colHex, opts = {}) {
    g.position.set(x, 0, y);
    g.rotation.y = -angle;
    const u = g.userData;
    u.setColor(colHex);
    if (opts.gun) u.setGun(opts.gun);
    u.setArmor(opts.bodyArmor || 0, opts.facemask || 0);
    // movement direction relative to facing → natural leg orientation
    let relMove = null;
    if ((opts.vx || opts.vy) && Math.hypot(opts.vx, opts.vy) > 18) {
      relMove = Math.atan2(opts.vy, opts.vx) - angle;
    }
    u.animate(S.t, opts.moveAmt ?? 0, !!opts.gathering, !!opts.jack, relMove);
    if (u.judder) { g.position.x += u.judder.x; g.position.z += u.judder.z; }
    // wading: submerge to head height in unfrozen lakes
    const lake = S.world.lakeAt(x, y);
    const sink = lake && !lake.frozen ? 30 : 0;
    u.sinkY = (u.sinkY ?? 0) + (sink - (u.sinkY ?? 0)) * Math.min(1, curDt * 5);
    g.position.y -= u.sinkY;
  }

  return {
    sync(dt, rig) {
      curDt = dt;
      // ---- units ----
      for (const u of S.units) {
        if (u.dead || u.eliminated) continue;
        // own minicopter (parked or flying with them)
        if (u.copter && !u.copter.destroyed && rig.inView(u.copter.x, u.copter.y, 200)) {
          const cg = copters.get(u.copter, parseInt(u.col.slice(1), 16));
          const fly = u.flying && u.state === 'trade';
          cg.position.set(u.copter.x, fly ? 70 : 0, u.copter.y);
          cg.rotation.y = -(u.copter.angle || 0);
          cg.userData.rotor.rotation.y = u.copter.rotor || 0;
          cg.userData.tailRotor.rotation.z = (u.copter.rotor || 0) * 4;
          cg.userData.pilot.visible = fly;
          cg.userData.sh.position.y = fly ? -68 : 1;
        }
        if (u.flying) continue;
        if (!rig.inView(u.x, u.y, 200)) continue;
        const colHex = parseInt((u.ally ? '#7ec850' : u.col).slice(1), 16);
        const g = persons.get(u, colHex, u.gun);
        const moveAmt = Math.min(1, Math.hypot(u.vx, u.vy) / 120);
        syncPerson(g, u.x, u.y, u.angle, colHex, {
          gun: u.gathering ? (u.jack ? 'jack' : 'tool') : u.gun, moveAmt, gathering: u.gathering,
          jack: u.jack, bodyArmor: u.bodyArmor, facemask: u.facemask, vx: u.vx, vy: u.vy,
        });
      }
      // ---- player ----
      const p = S.player;
      if (!p.inCopter) {
        const g = persons.get(p, 0x7a8a50, 'pistol');
        const moveAmt = p.moving ? 1 : 0;
        const jacking = S.slot === 0 && S.jackhammer;
        syncPerson(g, p.x, p.y, p.angle, p.hurt > 0 ? 0xc47a5e : 0x7a8a50, {
          gun: S.slot === 0 && S.jackhammer ? 'jack' : SLOT_GUN[S.slot] || 'pistol', moveAmt,
          gathering: p.swing > 0 && S.slot === 0,
          jack: jacking, bodyArmor: p.bodyArmor, facemask: p.facemask, vx: p.vx, vy: p.vy,
        });
        if (p.dead) g.visible = false;
      }
      if (S.copter && !S.copter.destroyed) {
        const cg = copters.get(S.copter, 0x5d684c);
        const fly = p.inCopter;
        cg.position.set(S.copter.x, fly ? 80 : 0, S.copter.y);
        cg.rotation.y = -(S.copter.angle || 0);
        cg.userData.rotor.rotation.y = (S.copter.rotor || 0) * 3;
        cg.userData.tailRotor.rotation.z = (S.copter.rotor || 0) * 11;
        cg.userData.pilot.visible = fly;
        cg.userData.sh.position.y = fly ? -78 : 1;
      }
      // ---- guards ----
      for (const gd of S.guards) {
        if (gd.dead || !rig.inView(gd.x, gd.y, 150)) continue;
        const g = persons.get(gd, 0xbd5e2c, 'rifle', true); // orange scientists
        const moveAmt = Math.min(1, Math.hypot(gd.vx || 0, gd.vy || 0) / 90 + 0.2);
        syncPerson(g, gd.x, gd.y, gd.angle, 0xbd5e2c, { gun: 'rifle', moveAmt, vx: gd.vx, vy: gd.vy });
      }
      // ---- animals ----
      for (const a of S.animals) {
        if (a.dead || !rig.inView(a.x, a.y, 150)) continue;
        const g = animals.get(a, a.type, a.r);
        // alligators submerge in water: body sinks below the surface plane,
        // only the head (and a hint of ridge) stays visible
        let sink = 0;
        if (a.type === 'alligator' && S.world.lakeAt(a.x, a.y)) sink = a.r * 0.62;
        g.userData.sinkY = (g.userData.sinkY ?? 0) + (sink - (g.userData.sinkY ?? 0)) * Math.min(1, dt * 5);
        g.position.set(a.x, -g.userData.sinkY, a.y);
        const sp = Math.hypot(a.vx || 0, a.vy || 0);
        const ang = sp > 2 ? Math.atan2(a.vy, a.vx) : a.dir;
        g.rotation.y = -ang;
        g.userData.animate(S.t, Math.min(1, sp / 80));
      }
      // ---- transports / trains / convoy / patrol / plane ----
      for (const tr of S.transports) {
        const colHex = tr.owner === OWNER ? 0x7ec850 : parseInt((S.teams.find(t => t.owner === tr.owner) || { col: '#888888' }).col.slice(1), 16);
        const g = transports.get(tr, colHex);
        const fly = tr.state === 'fly' || tr.state === 'return' || tr.riders.length > 0;
        g.position.set(tr.x, fly ? 110 : 2, tr.y);
        g.rotation.y = -tr.angle;
        g.userData.rotor.rotation.y = tr.rotor;
        g.userData.rotor2.rotation.y = -tr.rotor; // counter-rotating tandem
        g.userData.sh.position.y = fly ? -106 : 1;
      }
      for (const tr of S.trains) {
        const g = simpleMeshes.get(tr, () => {
          const gg = new THREE.Group();
          // locomotive: riveted metal, cab, chimney, cowcatcher, headlight
          const locoM = tierWallMat('metal').clone();
          locoM.color.setScalar(0.62);
          const loco = new THREE.Mesh(GEO.box, locoM);
          loco.scale.set(54, 30, 26);
          loco.position.y = 17;
          gg.add(loco);
          gg.add(bx(0x23272c, 18, 14, 27, -14, 38, 0));      // cab
          gg.add(bx(0x9fc2d8, 4, 7, 22, -4, 39, 0));         // cab glass
          const chim = new THREE.Mesh(GEO.cyl, mat(0x1c2026));
          chim.scale.set(4.5, 12, 4.5);
          chim.position.set(16, 38, 0);
          gg.add(chim);
          const cow = bx(0x2a2e33, 12, 10, 24, 30, 8, 0);
          cow.rotation.z = -0.5;
          gg.add(cow);
          const light = glowSprite(0xffe9a3, 44);
          light.position.set(30, 20, 0);
          gg.add(light);
          // boxcars: plank-textured, per-car tint, dark roofs
          const cars = [];
          for (let ci = 0; ci < 4; ci++) {
            const car = new THREE.Group();
            const m2 = tierWallMat('wood').clone();
            m2.color.setScalar(0.78 + (ci % 2) * 0.14);
            const body = new THREE.Mesh(GEO.box, m2);
            body.scale.set(46, 26, 24);
            body.position.y = 15;
            car.add(body);
            const roof = bx(0x2c2620, 48, 3.5, 26, 0, 30, 0);
            car.add(roof);
            car.add(bx(0x1f1a14, 8, 12, 25, 0, 14, 0));      // side door
            gg.add(car);
            cars.push(car);
          }
          gg.userData = { cars, smokeT: 0 };
          return gg;
        });
        // articulate: cars follow the rail behind the loco
        const chain = trainChain(tr, [0, -64, -116, -168, -220]);
        const head = chain[0];
        g.position.set(head.x, 0, head.y);
        g.rotation.y = -head.a;
        g.userData.cars.forEach((car, ci) => {
          const w = chain[ci + 1];
          // world → loco-local
          const dx = w.x - head.x, dy = w.y - head.y;
          const ca = Math.cos(head.a), sa = Math.sin(head.a);
          car.position.set(dx * ca + dy * sa, 0, -dx * sa + dy * ca);
          car.rotation.y = -(w.a - head.a);
        });
        // billowing smoke from the chimney
        g.userData.smokeT -= dt;
        if (g.userData.smokeT <= 0) {
          g.userData.smokeT = 0.12;
          const sx = head.x + Math.cos(head.a) * 16, sy = head.y + Math.sin(head.a) * 16;
          spawnSmoke(sx, sy, 40, 1.0);
        }
      }
      for (const cv of S.convoys) {
        if (cv.dead) continue;
        const g = simpleMeshes.get(cv, () => {
          const gg = new THREE.Group();
          const hull = new THREE.Mesh(GEO.box, mat(0x56604a));
          hull.scale.set(68, 24, 36);
          hull.position.y = 12;
          gg.add(hull);
          const turret = new THREE.Group();
          turret.position.y = 28;
          const dome = new THREE.Mesh(GEO.cyl, mat(0x394233));
          dome.scale.set(12, 9, 12);
          turret.add(dome);
          const barrel = new THREE.Mesh(GEO.box, mat(0x13160e));
          barrel.scale.set(32, 5, 5);
          barrel.position.x = 20;
          turret.add(barrel);
          gg.add(turret);
          gg.userData = { turret };
          const sh = blobShadow(90);
          sh.position.y = 1;
          gg.add(sh);
          return gg;
        });
        g.position.set(cv.x, 0, cv.y);
        g.rotation.y = -cv.ang;
        g.userData.turret.rotation.y = -(cv.taim - cv.ang);
        for (const gd of cv.guards) {
          if (gd.dead) continue;
          const pg = persons.get(gd, 0x3a6ea5, 'rifle', true); // blue scientists
          syncPerson(pg, gd.x, gd.y, gd.angle, 0x3a6ea5, { gun: 'rifle', moveAmt: 0.6 });
        }
      }
      if (S.patrol) {
        const pt = S.patrol;
        const g = simpleMeshes.get('patrol', () => {
          const gg = new THREE.Group();
          gg.add(bx(0x48543e, 76, 20, 20, 0, 0, 0));         // fuselage
          gg.add(bx(0x3a4434, 76, 6, 21, 0, -12, 0));        // belly
          const nose = new THREE.Mesh(GEO.sphere, mat(0x48543e));
          nose.scale.set(14, 11, 10);
          nose.position.set(40, -1, 0);
          gg.add(nose);
          gg.add(bx(0x14181c, 14, 8, 14, 26, 8, 0));         // canopy
          gg.add(bx(0x9fc2d8, 4, 6, 12, 34, 7, 0));          // glass
          // chin gun
          gg.add(bx(0x1e2226, 10, 6, 6, 36, -13, 0));
          gg.add(bx(0x14181c, 14, 2.6, 2.6, 46, -13, 0));
          // stub wings + rocket pods
          for (const sz of [-1, 1]) {
            gg.add(bx(0x3a4434, 16, 4, 26, 2, 2, sz * 22));
            for (const pz of [16, 26]) {
              const pod = new THREE.Mesh(GEO.cyl, mat(0x2b3026));
              pod.scale.set(4.5, 16, 4.5);
              pod.rotation.z = Math.PI / 2;
              pod.position.set(4, -3, sz * pz);
              gg.add(pod);
            }
          }
          // tail boom, fin, tail rotor
          gg.add(bx(0x333c30, 52, 6, 6, -58, 4, 0));
          gg.add(bx(0x3a4434, 9, 18, 3, -82, 12, 0));
          const tailRotor = bx(0x191c15, 1.6, 20, 3, -84, 10, 4);
          gg.add(tailRotor);
          const mast = bx(0x2c2f28, 5, 8, 5, 0, 13, 0);
          gg.add(mast);
          const rotor = bx(0x191c15, 124, 2.2, 9, 0, 19, 0);
          gg.add(rotor);
          gg.userData = { rotor, tailRotor };
          return gg;
        });
        g.position.set(pt.x, 150, pt.y);
        g.rotation.y = -pt.angle;
        g.userData.rotor.rotation.y = pt.rotor;
        g.userData.tailRotor.rotation.z = pt.rotor * 4;
      }
      if (S.plane) {
        const g = simpleMeshes.get('plane', () => {
          const gg = new THREE.Group();
          const body = new THREE.Mesh(GEO.sphere, mat(0x7e8691));
          body.scale.set(28, 8, 8);
          gg.add(body);
          const wing = new THREE.Mesh(GEO.box, mat(0x6b727c));
          wing.scale.set(10, 2, 52);
          gg.add(wing);
          return gg;
        });
        g.position.set(S.plane.x, 320, S.plane.y);
        g.rotation.y = S.plane.vx < 0 ? Math.PI : 0;
      }
      if (S.airdrop) {
        const a = S.airdrop;
        const g = simpleMeshes.get('airdrop', () => {
          const gg = new THREE.Group();
          const crate = new THREE.Mesh(GEO.box, mat(0x5d6452));
          crate.scale.set(30, 24, 30);
          crate.position.y = 12;
          gg.add(crate);
          const band = new THREE.Mesh(GEO.box, mat(0xffd76b));
          band.scale.set(32, 5, 32);
          band.position.y = 12;
          gg.add(band);
          const chute = new THREE.Mesh(GEO.cone, mat(0xb8503a, { transparent: true, opacity: 0.9 }));
          chute.scale.set(34, 26, 34);
          chute.position.y = 56;
          gg.add(chute);
          gg.userData = { chute };
          return gg;
        });
        const h = a.fall < 1 ? (1 - a.fall) * 320 : 0;
        g.position.set(a.x + (a.fall < 1 ? Math.sin(a.sway) * 12 : 0), h, a.fall < 1 ? a.gy : a.y);
        g.userData.chute.visible = a.fall < 1;
      }
      if (S.lockedCrate) {
        const c = S.lockedCrate;
        const g = simpleMeshes.get('crate', () => {
          const gg = new THREE.Group();
          const box = new THREE.Mesh(GEO.box, mat(0x3c4147));
          box.scale.set(40, 26, 30);
          box.position.y = 13;
          gg.add(box);
          const light = glowSprite(0xffb84a, 22);
          light.position.set(13, 26, -8);
          gg.add(light);
          gg.userData = { light };
          return gg;
        });
        g.position.set(c.x, 0, c.y);
        const on = (c.blink % 0.8) < 0.4;
        g.userData.light.visible = on;
        g.userData.light.material.color.setHex(c.started ? 0xffb84a : 0xd23c28);
      }
      // ---- projectiles: tracer = hot head + tapered fading tail ----
      for (const b of S.bullets) {
        const g = simpleMeshes.get(b, () => {
          const gg = new THREE.Group();
          const head = new THREE.Mesh(GEO.sphere, new THREE.MeshBasicMaterial({ color: 0xffd9a0, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false }));
          head.scale.set(3.4, 3, 3);
          gg.add(head);
          // tapered tail cone pointing backward
          const tail = new THREE.Mesh(GEO.cone, new THREE.MeshBasicMaterial({ color: 0xffb054, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false }));
          tail.scale.set(2.6, 30, 2.6);
          tail.rotation.z = Math.PI / 2; // apex toward -x (behind)
          tail.position.x = -15;
          gg.add(tail);
          const tail2 = new THREE.Mesh(GEO.cone, new THREE.MeshBasicMaterial({ color: 0xff9434, transparent: true, opacity: 0.2, blending: THREE.AdditiveBlending, depthWrite: false }));
          tail2.scale.set(4.5, 44, 4.5);
          tail2.rotation.z = Math.PI / 2;
          tail2.position.x = -22;
          gg.add(tail2);
          gg.userData = { head, tail, tail2 };
          return gg;
        });
        g.position.set(b.x, 18, b.y);
        g.rotation.y = -Math.atan2(b.vy, b.vx);
        const hot = b.col === 'hmg' ? 0xff6a30 : b.ricochet ? 0x9ae2ff : 0xffd9a0;
        const warm = b.col === 'hmg' ? 0xe83c14 : b.ricochet ? 0x5cb8e8 : 0xffb054;
        g.userData.head.material.color.setHex(hot);
        g.userData.tail.material.color.setHex(warm);
        g.userData.tail2.material.color.setHex(warm);
      }
      for (const r of S.rockets) {
        const g = simpleMeshes.get(r, () => {
          const gg = new THREE.Group();
          const body = new THREE.Mesh(GEO.cone, mat(0x39402f));
          body.scale.set(5, 18, 5);
          body.rotation.z = -Math.PI / 2;
          gg.add(body);
          const glow = glowSprite(0xff9b3d, 34);
          glow.position.x = -12;
          gg.add(glow);
          return gg;
        });
        g.position.set(r.x, 18, r.y);
        g.rotation.y = -Math.atan2(r.vy, r.vx);
      }
      for (const gr of S.grenades) {
        const g = simpleMeshes.get(gr, () => {
          const m2 = new THREE.Mesh(GEO.sphere, mat(0x2c3a22));
          m2.scale.set(6, 6, 6);
          return m2;
        });
        g.position.set(gr.x, 8 + Math.abs(Math.sin(gr.bob * 6)) * 8, gr.y);
      }
      for (const st of S.satchels) {
        const g = simpleMeshes.get(st, () => {
          const m2 = new THREE.Mesh(GEO.box, mat(0x3a342c));
          m2.scale.set(14, 9, 12);
          m2.position.y = 4;
          return m2;
        });
        g.position.set(st.x, 4, st.y);
        g.visible = Math.sin(S.t * 18) > -0.6;
      }
      for (const L of S.loot) {
        if (!rig.inView(L.x, L.y, 100)) continue;
        const g = simpleMeshes.get(L, () => {
          const m2 = new THREE.Mesh(GEO.box, mat(0xd6dce0));
          m2.scale.set(9, 9, 9);
          return m2;
        });
        const KC = { wood: 0xb98446, stone: 0xaab1b8, metal: 0xe8a24e, scrap: 0xd6dce0, ammo: 0xffe08a, rocket: 0xff9a5a, sniper: 0xbfe3ff, satchel: 0xc8b88a, gun: 0xc4c9bd };
        g.material = mat(KC[L.kind] || 0xd6dce0);
        g.position.set(L.x, 8 + Math.sin(L.bob * 3) * 2.5, L.y);
        g.rotation.y = L.bob;
      }
      // ---- fires / wrecks / scorch ----
      for (const f of S.fires) {
        const g = glows.get(f, 0xff8a2a, 90);
        g.position.set(f.x, 16, f.y);
        const flick = 0.8 + Math.sin(S.t * 11 + f.x) * 0.25;
        g.scale.set(90 * flick, 110 * flick, 1);
      }
      for (const w of S.wrecks) {
        const g = simpleMeshes.get(w, () => {
          const gg = new THREE.Group();
          const husk = new THREE.Mesh(GEO.box, mat(0x26241e));
          husk.scale.set(30, 14, 20);
          husk.position.y = 7;
          husk.rotation.y = 0.5;
          gg.add(husk);
          const glow = glowSprite(0xffaa3c, 60);
          glow.position.y = 14;
          gg.add(glow);
          return gg;
        });
        g.position.set(w.x, 0, w.y);
      }
      for (const sc of S.scorch) {
        const g = simpleMeshes.get(sc, () => {
          const m2 = new THREE.Mesh(new THREE.CircleGeometry(1, 12), new THREE.MeshBasicMaterial({ color: 0x14100c, transparent: true, opacity: 0.45, depthWrite: false }));
          m2.rotation.x = -Math.PI / 2;
          m2.position.y = 0.8;
          return m2;
        });
        g.position.set(sc.x, 0.8, sc.y);
        g.scale.set(sc.r, sc.r, 1);
      }
      // ---- flashes / muzzle ----
      for (const fl of S.flashes) {
        const g = glows.get(fl, 0xffb24a, fl.r * 2.4);
        g.position.set(fl.x, 20, fl.y);
        const t2 = fl.life / fl.max;
        g.material.opacity = t2;
        g.scale.set(fl.r * (2.6 - t2), fl.r * (2.6 - t2), 1);
      }
      if (S.muzzle) {
        const g = glows.get('muzzle', 0xffd76b, 46);
        g.position.set(S.muzzle.x, 18, S.muzzle.y);
        g.material.opacity = S.muzzle.t / 0.08;
      }
      // ---- harvest FX (from sim events) ----
      for (const e of S.events) if (e.type === 'harvest' && rig.inView(e.x, e.y, 300)) spawnHarvestFx(e);
      updateHarvestFx(dt);
      updateSmoke(dt);

      // ---- footprints ----
      let fn = 0;
      for (const f of S.footprints) {
        if (fn >= FPMAX) break;
        const fade = 1 - f.t / 10;
        if (fade < 0.06 || !rig.inView(f.x, f.y, 60)) continue;
        const s = 6.2 * (0.45 + 0.55 * fade);
        fpM.makeRotationY(-f.a);
        fpR.makeRotationX(-Math.PI / 2);
        fpM.multiply(fpR);
        fpS.set(s, s * 0.55, 1);
        fpM.scale(fpS);
        fpM.setPosition(f.x, 0.45 + (fn % 9) * 0.025, f.y);
        fpI.setMatrixAt(fn, fpM);
        fn++;
      }
      fpI.count = fn;
      fpI.instanceMatrix.needsUpdate = true;

      // ---- particles ----
      let pi = 0;
      for (const pt of S.particles) {
        if (pi >= PMAX) break;
        pPos[pi * 3] = pt.x;
        pPos[pi * 3 + 1] = 10 + (1 - pt.life / pt.max) * 14;
        pPos[pi * 3 + 2] = pt.y;
        const c = parseCol(pt.col);
        const a = Math.max(0, pt.life / pt.max);
        pCol[pi * 3] = c.r * a;
        pCol[pi * 3 + 1] = c.g * a;
        pCol[pi * 3 + 2] = c.b * a;
        pi++;
      }
      pGeo.setDrawRange(0, pi);
      pGeo.attributes.position.needsUpdate = true;
      pGeo.attributes.color.needsUpdate = true;

      persons.sweep();
      animals.sweep();
      copters.sweep();
      transports.sweep();
      simpleMeshes.sweep();
      glows.sweep();
    },
  };
}
