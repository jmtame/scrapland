// Dynamic actors + FX: units, player, guards, animals, vehicles,
// projectiles, loot, fires, wrecks, scorch decals, particles, flashes.
// Pool pattern: sim object ref → mesh group, hidden when gone.
import * as THREE from 'three';
import { TILE, GUARD, OWNER } from '../../sim/config.js';
import { GEO, mat, glowSprite, blobShadow } from './assets3.js';
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
  const persons = new Pool(scene, (colHex, gun) => makeHumanoid(colHex, { gun }));
  const animals = new Pool(scene, (type, r) => makeAnimalRig(type, r));
  const copters = new Pool(scene, (colHex) => {
    const g = new THREE.Group();
    const hull = new THREE.Mesh(GEO.sphere, mat(colHex));
    hull.scale.set(20, 12, 14);
    hull.position.y = 12;
    g.add(hull);
    const tail = new THREE.Mesh(GEO.box, mat(0x2c3328));
    tail.scale.set(26, 5, 5);
    tail.position.set(-22, 14, 0);
    g.add(tail);
    const rotor = new THREE.Mesh(GEO.box, basicDark());
    rotor.scale.set(52, 1.5, 5);
    rotor.position.y = 22;
    g.add(rotor);
    const sh = blobShadow(60);
    sh.position.y = 1;
    g.add(sh);
    g.userData = { rotor, sh };
    return g;
  });
  function basicDark() { return mat(0x191c15); }

  const transports = new Pool(scene, (colHex) => {
    const g = new THREE.Group();
    const hull = new THREE.Mesh(GEO.sphere, mat(colHex));
    hull.scale.set(34, 17, 22);
    hull.position.y = 16;
    g.add(hull);
    const tail = new THREE.Mesh(GEO.box, mat(0x262c22));
    tail.scale.set(40, 7, 7);
    tail.position.set(-36, 20, 0);
    g.add(tail);
    const rotor = new THREE.Mesh(GEO.box, basicDark());
    rotor.scale.set(84, 2, 7);
    rotor.position.y = 30;
    g.add(rotor);
    const sh = blobShadow(96);
    sh.position.y = 1;
    g.add(sh);
    g.userData = { rotor, sh };
    return g;
  });

  const simpleMeshes = new Pool(scene, (build) => build());
  const glows = new Pool(scene, (hex, scale) => glowSprite(hex, scale));

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

  function syncPerson(g, x, y, angle, colHex, opts = {}) {
    g.position.set(x, 0, y);
    g.rotation.y = -angle;
    const u = g.userData;
    u.setColor(colHex);
    if (opts.gun) u.setGun(opts.gun);
    u.setArmor(opts.bodyArmor || 0, opts.facemask || 0);
    u.animate(S.t, opts.moveAmt ?? 0, !!opts.gathering);
  }

  return {
    sync(dt, rig) {
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
          cg.userData.sh.position.y = fly ? -68 : 1;
        }
        if (u.flying) continue;
        if (!rig.inView(u.x, u.y, 200)) continue;
        const colHex = parseInt((u.ally ? '#7ec850' : u.col).slice(1), 16);
        const g = persons.get(u, colHex, u.gun);
        const moveAmt = Math.min(1, Math.hypot(u.vx, u.vy) / 120);
        syncPerson(g, u.x, u.y, u.angle, colHex, {
          gun: u.gathering ? 'tool' : u.gun, moveAmt, gathering: u.gathering,
          bodyArmor: u.bodyArmor, facemask: u.facemask,
        });
      }
      // ---- player ----
      const p = S.player;
      if (!p.inCopter) {
        const g = persons.get(p, 0x7a8a50, 'pistol');
        const moveAmt = p.moving ? 1 : 0;
        syncPerson(g, p.x, p.y, p.angle, p.hurt > 0 ? 0xc47a5e : 0x7a8a50, {
          gun: SLOT_GUN[S.slot] || 'pistol', moveAmt,
          gathering: p.swing > 0 && S.slot === 0,
          bodyArmor: p.bodyArmor, facemask: p.facemask,
        });
        if (p.dead) g.visible = false;
      }
      if (S.copter && !S.copter.destroyed) {
        const cg = copters.get(S.copter, 0x5d684c);
        const fly = p.inCopter;
        cg.position.set(S.copter.x, fly ? 80 : 0, S.copter.y);
        cg.rotation.y = -(S.copter.angle || 0);
        cg.userData.rotor.rotation.y = (S.copter.rotor || 0) * 3;
        cg.userData.sh.position.y = fly ? -78 : 1;
      }
      // ---- guards ----
      for (const gd of S.guards) {
        if (gd.dead || !rig.inView(gd.x, gd.y, 150)) continue;
        const g = persons.get(gd, 0xbd5e2c, 'rifle');
        const moveAmt = Math.min(1, Math.hypot(gd.vx || 0, gd.vy || 0) / 90 + 0.2);
        syncPerson(g, gd.x, gd.y, gd.angle, 0xbd5e2c, { gun: 'rifle', moveAmt, facemask: 1 });
      }
      // ---- animals ----
      for (const a of S.animals) {
        if (a.dead || !rig.inView(a.x, a.y, 150)) continue;
        const g = animals.get(a, a.type, a.r);
        g.position.set(a.x, 0, a.y);
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
        g.position.set(tr.x, fly ? 110 : 4, tr.y);
        g.rotation.y = -tr.angle;
        g.userData.rotor.rotation.y = tr.rotor;
        g.userData.sh.position.y = fly ? -106 : 1;
      }
      for (const tr of S.trains) {
        const g = simpleMeshes.get(tr, () => {
          const gg = new THREE.Group();
          const loco = new THREE.Mesh(GEO.box, mat(0x3a4048));
          loco.scale.set(48, 30, 26);
          loco.position.y = 15;
          gg.add(loco);
          for (const off of [-46, -90]) {
            const car = new THREE.Mesh(GEO.box, mat(0x5a4a36));
            car.scale.set(38, 24, 24);
            car.position.set(off, 12, 0);
            gg.add(car);
          }
          const light = glowSprite(0xffe9a3, 40);
          light.position.set(28, 14, 0);
          gg.add(light);
          return gg;
        });
        g.position.set(tr.x, 0, tr.y);
        g.rotation.y = -tr.ang;
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
          const pg = persons.get(gd, 0x6f7a4e, 'rifle');
          syncPerson(pg, gd.x, gd.y, gd.angle, 0x6f7a4e, { gun: 'rifle', moveAmt: 0.6, facemask: 2 });
        }
      }
      if (S.patrol) {
        const pt = S.patrol;
        const g = simpleMeshes.get('patrol', () => {
          const gg = new THREE.Group();
          const hull = new THREE.Mesh(GEO.sphere, mat(0x48543e));
          hull.scale.set(32, 15, 18);
          gg.add(hull);
          const tail = new THREE.Mesh(GEO.box, mat(0x333c30));
          tail.scale.set(36, 6, 6);
          tail.position.x = -34;
          gg.add(tail);
          const rotor = new THREE.Mesh(GEO.box, basicDark());
          rotor.scale.set(96, 2, 8);
          rotor.position.y = 14;
          gg.add(rotor);
          gg.userData = { rotor };
          return gg;
        });
        g.position.set(pt.x, 150, pt.y);
        g.rotation.y = -pt.angle;
        g.userData.rotor.rotation.y = pt.rotor;
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
      // ---- projectiles ----
      for (const b of S.bullets) {
        const g = simpleMeshes.get(b, () => {
          const m2 = new THREE.Mesh(GEO.box, new THREE.MeshBasicMaterial({ color: 0xffe9a3, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false }));
          m2.scale.set(26, 2.5, 2.5);
          return m2;
        });
        g.position.set(b.x, 16, b.y);
        g.rotation.y = -Math.atan2(b.vy, b.vx);
        g.material.color.setHex(b.col === 'hmg' ? 0xff5a2a : b.ricochet ? 0x86d8ff : 0xffe9a3);
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
