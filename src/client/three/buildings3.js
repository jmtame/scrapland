// Static world + buildings in 3D: resource nodes (instanced), boulders,
// palms, monuments, shop, crossings, barrels — and the diff-synced player/AI
// structures (floors, walls, doors, turrets, cupboards) from the sim Maps.
import * as THREE from 'three';
import { TILE, SAFE_R, TTIER } from '../../sim/config.js';
import { wallSegOf } from '../../sim/physics.js';
import { GEO, mat, basic, glowSprite, blobShadow, TIER_COLS, TIER_DARK, tierWallMat, tierFloorMat } from './assets3.js';

const TAU = Math.PI * 2;

export function makeBuildings3(S, scene) {
  // ---------- resource nodes (instanced, scale tracks depletion) ----------
  const trees = S.resources.filter(n => n.type === 'tree');
  const stones = S.resources.filter(n => n.type === 'stone');
  const ores = S.resources.filter(n => n.type === 'metal');

  const trunkI = new THREE.InstancedMesh(GEO.cyl, mat(0x5d3f20), trees.length);
  const canopyI = new THREE.InstancedMesh(GEO.cone, mat(0xffffff), trees.length);
  const canopy2I = new THREE.InstancedMesh(GEO.cone, mat(0xffffff), trees.length);
  const snowCapI = new THREE.InstancedMesh(GEO.cone, mat(0xeef4f9), trees.length);
  const stoneI = new THREE.InstancedMesh(GEO.ico, mat(0x8d948b), stones.length);
  const oreI = new THREE.InstancedMesh(GEO.ico, mat(0x8d774a), ores.length);
  const oreTipI = new THREE.InstancedMesh(GEO.ico, mat(0xd8a850, { emissive: 0x6a4a10 }), ores.length);
  for (const m2 of [trunkI, canopyI, canopy2I, snowCapI, stoneI, oreI, oreTipI]) {
    m2.frustumCulled = false;
    scene.add(m2);
  }
  // per-tree canopy color variation (and winter detection for snow caps)
  const C1 = new THREE.Color(), C2 = new THREE.Color();
  const treeWinter = [];
  trees.forEach((n, i) => {
    const j = 0.85 + ((n.seed * 7.3) % 1) * 0.4;
    const winter = S.world.biomeAt(n.x, n.y) === 'winter';
    treeWinter.push(winter);
    C1.setHex(winter ? 0x3c5530 : 0x35511f).multiplyScalar(j);
    C2.setHex(winter ? 0x5b7a4a : 0x507a30).multiplyScalar(j);
    canopyI.setColorAt(i, C1);
    canopy2I.setColorAt(i, C2);
  });
  if (canopyI.instanceColor) canopyI.instanceColor.needsUpdate = true;
  if (canopy2I.instanceColor) canopy2I.instanceColor.needsUpdate = true;
  const M = new THREE.Matrix4();
  let nodeRefresh = 0;

  function refreshNodes() {
    trees.forEach((n, i) => {
      const s = n.amount <= 0 ? 0.001 : 0.55 + 0.45 * (n.amount / n.max);
      const lean = ((n.seed * 13.7) % 1 - 0.5) * 0.12;
      M.makeRotationZ(lean).scale(new THREE.Vector3(7 * s, 30 * s, 7 * s)).setPosition(n.x, 15 * s, n.y);
      trunkI.setMatrixAt(i, M);
      M.makeRotationY(n.seed).scale(new THREE.Vector3(30 * s, 42 * s, 30 * s)).setPosition(n.x, 36 * s, n.y);
      canopyI.setMatrixAt(i, M);
      M.makeRotationY(n.seed * 2).scale(new THREE.Vector3(20 * s, 30 * s, 20 * s)).setPosition(n.x + 4, 56 * s, n.y - 3);
      canopy2I.setMatrixAt(i, M);
      const capS = treeWinter[i] ? s : 0.001;
      M.makeScale(13 * capS, 12 * capS, 13 * capS).setPosition(n.x + 4, 70 * capS, n.y - 3);
      snowCapI.setMatrixAt(i, M);
    });
    snowCapI.instanceMatrix.needsUpdate = true;
    stones.forEach((n, i) => {
      const s = n.amount <= 0 ? 0.001 : (0.55 + 0.45 * (n.amount / n.max)) * n.r;
      M.makeRotationY(n.seed).scale(new THREE.Vector3(s, s * 0.75, s)).setPosition(n.x, s * 0.45, n.y);
      stoneI.setMatrixAt(i, M);
    });
    ores.forEach((n, i) => {
      const s = n.amount <= 0 ? 0.001 : (0.55 + 0.45 * (n.amount / n.max)) * n.r;
      M.makeRotationY(n.seed * 2).scale(new THREE.Vector3(s, s * 0.7, s)).setPosition(n.x, s * 0.42, n.y);
      oreI.setMatrixAt(i, M);
      M.makeScale(s * 0.4, s * 0.34, s * 0.4).setPosition(n.x + 3, s * 0.85, n.y - 2);
      oreTipI.setMatrixAt(i, M);
    });
    for (const m2 of [trunkI, canopyI, canopy2I, stoneI, oreI, oreTipI]) m2.instanceMatrix.needsUpdate = true;
  }
  refreshNodes();

  // ---------- boulders, rocks, palms, desert cacti ----------
  const boulderI = new THREE.InstancedMesh(GEO.ico, mat(0x787e84), S.world.boulders.length || 1);
  S.world.boulders.forEach((b, i) => {
    M.makeRotationY(b.seed).scale(new THREE.Vector3(b.r, b.r * 0.8, b.r)).setPosition(b.x, b.r * 0.45, b.y);
    boulderI.setMatrixAt(i, M);
  });
  boulderI.frustumCulled = false;
  scene.add(boulderI);
  const rockI = new THREE.InstancedMesh(GEO.ico, mat(0x84898f), S.world.rocks.length || 1);
  S.world.rocks.forEach((r, i) => {
    M.makeRotationY(r.seed).scale(new THREE.Vector3(r.r, r.r * 0.6, r.r)).setPosition(r.x, r.r * 0.3, r.y);
    rockI.setMatrixAt(i, M);
  });
  rockI.frustumCulled = false;
  scene.add(rockI);

  const palmTrunkI = new THREE.InstancedMesh(GEO.cyl, mat(0x6b4f28), S.world.palms.length || 1);
  const palmTopI = new THREE.InstancedMesh(GEO.cone, mat(0x4d7a30), S.world.palms.length || 1);
  S.world.palms.forEach((p, i) => {
    M.makeScale(3.4, 44, 3.4).setPosition(p.x, 22, p.y);
    palmTrunkI.setMatrixAt(i, M);
    M.makeScale(26, 14, 26).setPosition(p.x, 48, p.y);
    palmTopI.setMatrixAt(i, M);
  });
  palmTrunkI.frustumCulled = false; palmTopI.frustumCulled = false;
  scene.add(palmTrunkI, palmTopI);

  const cacti = S.world.flora.filter(f => f.type === 'cactus');
  const cactusI = new THREE.InstancedMesh(GEO.cyl, mat(0x4e7a3a), cacti.length || 1);
  cacti.forEach((f, i) => {
    M.makeScale(4.5, 22, 4.5).setPosition(f.x, 11, f.y);
    cactusI.setMatrixAt(i, M);
  });
  cactusI.frustumCulled = false;
  scene.add(cactusI);
  const shrubs = S.world.flora.filter(f => f.type === 'fern' || f.type === 'shrub');
  const shrubI = new THREE.InstancedMesh(GEO.ico, mat(0x55703a), shrubs.length || 1);
  shrubs.forEach((f, i) => {
    M.makeScale(8, 6, 8).setPosition(f.x, 4, f.y);
    shrubI.setMatrixAt(i, M);
  });
  shrubI.frustumCulled = false;
  scene.add(shrubI);

  // ---------- ambient ground scatter (client-only, deterministic) ----------
  buildScatter(S, scene);

  // ---------- barrels & crates (visibility tracks hp) ----------
  const barrelMeshes = S.barrels.map((o) => {
    let m2;
    if (o.crate) {
      m2 = new THREE.Mesh(GEO.box, mat(0x8a6230));
      m2.scale.set(o.r * 1.8, o.r * 1.5, o.r * 1.8);
      m2.position.set(o.x, o.r * 0.75, o.y);
    } else {
      m2 = new THREE.Mesh(GEO.cyl, mat(0xa44f2e));
      m2.scale.set(o.r * 0.9, o.r * 1.7, o.r * 0.9);
      m2.position.set(o.x, o.r * 0.85, o.y);
    }
    scene.add(m2);
    return m2;
  });

  // ---------- monuments / shop / quarry / crossings ----------
  const animated = { quarryArm: null, gates: [], fadeables: [] };
  for (const m2 of S.world.monuments) buildMonument(S, scene, m2, animated);
  buildShop(S, scene);
  for (const cr of S.world.crossings) {
    const g = new THREE.Group();
    g.position.set(cr.x, 0, cr.y);
    g.rotation.y = -cr.railAng;
    for (const side of [-1, 1]) {
      const post = new THREE.Mesh(GEO.box, mat(0x26262b));
      post.scale.set(5, 20, 5);
      post.position.set(0, 10, side * 38);
      g.add(post);
      const gate = new THREE.Mesh(GEO.box, mat(0xc03a2a));
      gate.scale.set(40, 3.6, 3.6);
      gate.position.set(20, 18, side * 38);
      const pivot = new THREE.Group();
      pivot.position.set(0, 18, side * 38);
      gate.position.set(20, 0, 0);
      pivot.add(gate);
      g.add(pivot);
      animated.gates.push({ pivot, cr, side });
    }
    scene.add(g);
  }

  // ---------- player/AI structures (diff sync on nav.stamp) ----------
  const bGroup = new THREE.Group();
  scene.add(bGroup);
  const wallMeshes = new Map();    // key -> {mesh, sig}
  const floorMeshes = new Map();
  const deployMeshes = new Map();  // key -> {group, sig, barrel?, led?}
  let lastStamp = -1;
  const seen = new Set();

  function teamColOf(owner) {
    if (owner === 'p1') return 0x7ec850;
    const t = S.teams.find(t2 => t2.owner === owner);
    return t ? parseInt(t.col.slice(1), 16) : 0x888888;
  }

  function syncBuildings() {
    if (S.nav.stamp === lastStamp) return;
    lastStamp = S.nav.stamp;
    // floors
    seen.clear();
    for (const [k, s] of S.structures) {
      seen.add(k);
      const sig = s.mat;
      let e = floorMeshes.get(k);
      if (e && e.sig !== sig) { bGroup.remove(e.mesh); floorMeshes.delete(k); e = null; }
      if (!e) {
        const [gx, gy] = k.split(',').map(Number);
        const m2 = new THREE.Mesh(GEO.box, tierFloorMat(s.mat || 'wood'));
        m2.scale.set(TILE - 2, 5, TILE - 2);
        m2.position.set(gx * TILE + TILE / 2, 2.5, gy * TILE + TILE / 2);
        bGroup.add(m2);
        floorMeshes.set(k, { mesh: m2, sig });
      }
    }
    for (const [k, e] of floorMeshes) if (!seen.has(k)) { bGroup.remove(e.mesh); floorMeshes.delete(k); }
    // walls
    seen.clear();
    for (const [k, w] of S.walls) {
      if (w.hp <= 0) continue;
      seen.add(k);
      const sig = w.type + w.mat + (w.open ? 'o' : 'c');
      let e = wallMeshes.get(k);
      if (e && e.sig !== sig) { bGroup.remove(e.mesh); wallMeshes.delete(k); e = null; }
      if (!e) {
        const seg = wallSegOf(k, w);
        const mx = (seg[0] + seg[2]) / 2, my = (seg[1] + seg[3]) / 2;
        const vert = seg[0] === seg[2];
        const g = new THREE.Group();
        if (w.type === 'door' && w.open) {
          for (const off of [-26, 26]) {
            const stub = new THREE.Mesh(GEO.box, mat(TIER_DARK[w.mat] || TIER_DARK.wood));
            stub.scale.set(vert ? 11 : 12, 40, vert ? 12 : 11);
            stub.position.set(vert ? 0 : off, 20, vert ? off : 0);
            g.add(stub);
          }
        } else {
          const wallM = tierWallMat(w.mat || 'wood');
          const box = new THREE.Mesh(GEO.box, wallM);
          const h = w.type === 'door' ? 42 : 48;
          box.scale.set(vert ? 11 : TILE, h, vert ? TILE : 11);
          box.position.y = h / 2;
          if (w.type === 'door') {
            // doors: darker tinted clone of the tier texture
            box.material = wallM.clone();
            box.material.color.setScalar(0.78);
          }
          g.add(box);
          const cap = new THREE.Mesh(GEO.box, mat(TIER_DARK[w.mat] || TIER_DARK.wood));
          cap.scale.set(vert ? 13 : TILE + 2, 4, vert ? TILE + 2 : 13);
          cap.position.y = h + 2;
          g.add(cap);
          if (w.type === 'door') {
            const knob = new THREE.Mesh(GEO.sphere, mat(0xd8b65e));
            knob.scale.set(2.5, 2.5, 2.5);
            knob.position.set(vert ? 7 : 10, 22, vert ? 10 : 7);
            g.add(knob);
          }
        }
        g.position.set(mx, 0, my);
        bGroup.add(g);
        wallMeshes.set(k, { mesh: g, sig });
      }
    }
    for (const [k, e] of wallMeshes) if (!seen.has(k)) { bGroup.remove(e.mesh); wallMeshes.delete(k); }
    // deploys
    seen.clear();
    for (const [k, d] of S.deploys) {
      seen.add(k);
      const sig = d.type + (d.tier || '') + d.owner;
      let e = deployMeshes.get(k);
      if (e && e.sig !== sig) { bGroup.remove(e.group); deployMeshes.delete(k); e = null; }
      if (!e) {
        const [gx, gy] = k.split(',').map(Number);
        const cx = gx * TILE + TILE / 2, cy = gy * TILE + TILE / 2;
        const g = new THREE.Group();
        g.position.set(cx, 0, cy);
        let entry = { group: g, sig };
        if (d.type === 'turret') {
          // Rust-style auto turret: splayed tripod legs, center column,
          // twin yoke plates, boxy sensor head with lens + slung gun
          const AC = d.tier === 3 ? 0x5fc8e0 : d.tier === 2 ? 0xe0a23a : 0x9aa1a8;
          for (let li = 0; li < 3; li++) {
            const a = (li / 3) * TAU + 0.5;
            const leg = new THREE.Mesh(GEO.cyl, mat(0x2e3330));
            leg.scale.set(2.2, 18, 2.2);
            leg.position.set(Math.cos(a) * 11, 8, Math.sin(a) * 11);
            leg.rotation.z = -Math.cos(a) * 0.5;
            leg.rotation.x = Math.sin(a) * 0.5;
            g.add(leg);
            const foot = new THREE.Mesh(GEO.box, mat(0x23272b));
            foot.scale.set(6, 2, 6);
            foot.position.set(Math.cos(a) * 16, 1, Math.sin(a) * 16);
            g.add(foot);
          }
          const column = new THREE.Mesh(GEO.cyl, mat(0x3a3f44));
          column.scale.set(3.6, 16, 3.6);
          column.position.y = 16;
          g.add(column);
          const pivot = new THREE.Group();
          pivot.position.y = 26;
          // yoke plates
          for (const sz of [-1, 1]) {
            const plate = new THREE.Mesh(GEO.box, mat(0x4a5054));
            plate.scale.set(12, 13, 2.4);
            plate.position.set(0, 2, sz * 7.6);
            pivot.add(plate);
          }
          // sensor head
          const head = new THREE.Mesh(GEO.box, mat(0x565d5a));
          head.scale.set(13, 9.5, 12);
          head.position.y = 3;
          pivot.add(head);
          const lens = new THREE.Mesh(GEO.cyl, mat(0x14181c));
          lens.scale.set(3.2, 2, 3.2);
          lens.rotation.z = Math.PI / 2;
          lens.position.set(7.6, 4.5, 0);
          pivot.add(lens);
          const eye = new THREE.Mesh(GEO.sphere, mat(0xd23c28, { emissive: 0xd23c28, emissiveIntensity: 0.8 }));
          eye.scale.set(1.5, 1.5, 1.5);
          eye.position.set(9.2, 4.5, 0);
          pivot.add(eye);
          // slung gun under the head (stubby; length varies slightly by tier)
          const len = d.tier === 3 ? 22 : d.tier === 2 ? 17 : 13;
          const gun = new THREE.Mesh(GEO.box, mat(0x1e2226));
          gun.scale.set(len, 3.8, 3.4);
          gun.position.set(len / 2 + 5, -2.6, 0);
          pivot.add(gun);
          if (d.tier === 2) {
            const gun2 = gun.clone();
            gun2.position.z = 4.4;
            pivot.add(gun2);
          }
          const muzzle = new THREE.Mesh(GEO.cyl, mat(AC, { emissive: AC, emissiveIntensity: 0.45 }));
          muzzle.scale.set(2, 2.6, 2);
          muzzle.rotation.z = Math.PI / 2;
          muzzle.position.set(len + 6, -2.6, 0);
          pivot.add(muzzle);
          // tier band on the column
          const band = new THREE.Mesh(GEO.cyl, mat(AC, { emissive: AC, emissiveIntensity: 0.3 }));
          band.scale.set(4.1, 2, 4.1);
          band.position.y = 21;
          g.add(band);
          g.add(pivot);
          entry.pivot = pivot;
        } else if (d.type === 'cupboard') {
          const body = new THREE.Mesh(GEO.box, mat(teamColOf(d.owner)));
          body.scale.set(42, 40, 42);
          body.position.y = 20;
          g.add(body);
          const trim = new THREE.Mesh(GEO.box, mat(0x2c1f0c));
          trim.scale.set(46, 5, 46);
          trim.position.y = 42;
          g.add(trim);
          const led = glowSprite(0x76e06a, 26);
          led.position.y = 50;
          g.add(led);
          entry.led = led;
        } else {
          const body = new THREE.Mesh(GEO.box, mat(0x6b4a24));
          body.scale.set(40, 24, 40);
          body.position.y = 12;
          g.add(body);
        }
        bGroup.add(g);
        deployMeshes.set(k, entry);
      }
    }
    for (const [k, e] of deployMeshes) if (!seen.has(k)) { bGroup.remove(e.group); deployMeshes.delete(k); }
  }

  // ---------- fences (small pool, rebuilt cheaply on count change) ----------
  const fenceGroup = new THREE.Group();
  scene.add(fenceGroup);
  let fenceCount = -1;
  function syncFences() {
    if (S.fences.length === fenceCount) return;
    fenceCount = S.fences.length;
    fenceGroup.clear();
    for (const f of S.fences) {
      const m2 = new THREE.Mesh(GEO.box, mat(0x7d5c30));
      m2.scale.set(46, 22, 5);
      m2.position.set(f.x, 11, f.y);
      m2.rotation.y = -f.a;
      fenceGroup.add(m2);
    }
  }

  return {
    sync(dt) {
      nodeRefresh -= dt;
      if (nodeRefresh <= 0) { nodeRefresh = 0.25; refreshNodes(); }
      S.barrels.forEach((o, i) => { barrelMeshes[i].visible = o.hp > 0; });
      syncBuildings();
      syncFences();
      // animate turret barrels + TC LEDs
      for (const [k, e] of deployMeshes) {
        const d = S.deploys.get(k);
        if (!d) continue;
        if (e.pivot) e.pivot.rotation.y = -(d.angle || 0);
        if (e.led && d.store) {
          const stocked = d.store.wood + d.store.stone + d.store.metal > 0;
          e.led.material.color.setHex(stocked ? 0x76e06a : 0xff5a3c);
        }
      }
      // quarry pump + crossing gates
      if (animated.quarryArm) {
        const q = S.quarry;
        animated.quarryArm.rotation.z = q && q.owner ? Math.sin(q.arm * 2.4) * 0.35 : -0.18;
      }
      for (const ga of animated.gates) {
        ga.pivot.rotation.z = (1 - ga.cr.gate) * 1.35;
      }
      // monument buildings go translucent while the player is inside the
      // monument zone, so interior loot is visible
      const p = S.player;
      for (const f of animated.fadeables) {
        const dx = p.x - f.x, dy = p.y - f.y;
        const near = !p.dead && (dx * dx + dy * dy) < (f.r + 90) * (f.r + 90);
        const target = near ? 0.3 : 1;
        for (const m2 of f.mats) m2.opacity += (target - m2.opacity) * Math.min(1, dt * 7);
      }
    },
  };
}

// grass tufts (jungle), pebbles (desert), snow lumps (winter) — pure visual
// detail from a deterministic hash grid; no sim interaction, fully instanced.
function buildScatter(S, scene) {
  const { hash2 } = scatterHash;
  const grass = [], pebbles = [], lumps = [];
  const W = 13824, H = 9216;
  for (let y = 120; y < H - 120; y += 150) {
    for (let x = 120; x < W - 120; x += 150) {
      const h = hash2((x / 150) | 0, (y / 150) | 0);
      if (h > 0.62) continue;
      const px = x + (h * 977 % 1) * 130, py = y + (h * 467 % 1) * 130;
      if (!S.world.onLand(px, py) || S.world.lakeAt(px, py)) continue;
      if (S.world.pathDist(px, py) < 40) continue;
      const b = S.world.biomeAt(px, py);
      if (b === 'jungle') grass.push({ x: px, y: py, h });
      else if (b === 'desert') { if (h < 0.3) pebbles.push({ x: px, y: py, h }); }
      else if (h < 0.4) lumps.push({ x: px, y: py, h });
    }
  }
  const M = new THREE.Matrix4();
  const C = new THREE.Color();
  const grassI = new THREE.InstancedMesh(GEO.cone, mat(0xffffff), grass.length || 1);
  grass.forEach((g, i) => {
    const s = 5 + g.h * 8;
    M.makeRotationY(g.h * 6).scale(new THREE.Vector3(s, s * 1.8, s)).setPosition(g.x, s * 0.9, g.y);
    grassI.setMatrixAt(i, M);
    C.setHex(0x4a6a2e).multiplyScalar(0.8 + (g.h * 37 % 1) * 0.5);
    grassI.setColorAt(i, C);
  });
  const pebbleI = new THREE.InstancedMesh(GEO.ico, mat(0xffffff), pebbles.length || 1);
  pebbles.forEach((p, i) => {
    const s = 3 + p.h * 8;
    M.makeRotationY(p.h * 9).scale(new THREE.Vector3(s, s * 0.55, s)).setPosition(p.x, s * 0.3, p.y);
    pebbleI.setMatrixAt(i, M);
    C.setHex(0x9c8a60).multiplyScalar(0.85 + (p.h * 53 % 1) * 0.3);
    pebbleI.setColorAt(i, C);
  });
  const lumpI = new THREE.InstancedMesh(GEO.sphere, mat(0xe8eff5), lumps.length || 1);
  lumps.forEach((l, i) => {
    const s = 6 + l.h * 12;
    M.makeScale(s, s * 0.4, s * 0.8).setPosition(l.x, s * 0.16, l.y);
    lumpI.setMatrixAt(i, M);
  });
  for (const m2 of [grassI, pebbleI, lumpI]) {
    m2.frustumCulled = false;
    if (m2.instanceColor) m2.instanceColor.needsUpdate = true;
    scene.add(m2);
  }
}
// tiny local hash (avoids importing sim utils into the render bundle twice)
const scatterHash = {
  hash2(x, y) {
    let h = (x * 374761393 + y * 668265263) | 0;
    h = (h ^ (h >> 13)) | 0;
    h = Math.imul(h, 1274126177);
    return ((h ^ (h >> 16)) >>> 0) / 4294967296;
  },
};

function buildMonument(S, scene, m, animated) {
  const g = new THREE.Group();
  g.position.set(m.x, 0, m.y);
  const add = (geo, hex, sx, sy, sz, x, y, z, ry = 0, opts) => {
    const mm = new THREE.Mesh(geo, mat(hex, opts));
    mm.scale.set(sx, sy, sz);
    mm.position.set(x, y, z);
    mm.rotation.y = ry;
    g.add(mm);
    return mm;
  };
  // occluder version: clones the material so it can fade to translucent
  // when the player is at the monument (loot inside stays visible)
  const fadeMats = [];
  const addFade = (...args) => {
    const mm = add(...args);
    const cloned = mm.material.clone();
    cloned.transparent = true;
    mm.material = cloned;
    fadeMats.push(cloned);
    return mm;
  };
  if (m.type === 'gas') {
    addFade(GEO.box, 0xa8432e, 216, 8, 30, 0, 64, -70);       // canopy
    for (const px of [-96, -30, 36, 96]) add(GEO.box, 0x3f4750, 6, 60, 6, px, 30, -62);
    for (const dx of [-58, 0]) add(GEO.box, 0x5b636b, 18, 30, 16, dx, 15, -22);
    addFade(GEO.box, 0x8a9199, 54, 52, 50, 58, 26, -16);      // building
    add(GEO.box, 0xbfe0ef, 18, 14, 2, 66, 34, 10);            // window
    add(GEO.box, 0xcaa14a, 26, 26, 6, -104, 40, -62);         // price sign
  } else if (m.type === 'junk') {
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * TAU;
      add(GEO.ico, 0x6e747c, 26, 14, 20, Math.cos(a) * 70, 8, Math.sin(a) * 54, a);
    }
    add(GEO.box, 0x7a4030, 56, 22, 26, -58, 11, -40, 0.3);    // wreck cars
    add(GEO.box, 0x3a5a6a, 56, 22, 26, 54, 11, 44, -0.5);
    add(GEO.cyl, 0x23211d, 12, 16, 12, 70, 8, -50);           // tire stack
    add(GEO.cyl, 0x23211d, 12, 16, 12, -66, 8, 58);
  } else if (m.type === 'warehouse') {
    addFade(GEO.box, 0x7e848e, 252, 70, 164, 0, 35, 0);
    addFade(GEO.box, 0x5b626b, 264, 10, 176, 0, 74, 0);       // roof lip
    for (const dx of [-72, 0, 72]) addFade(GEO.box, 0x2a2f35, 60, 46, 4, dx, 23, 84);
    addFade(GEO.box, 0x4a5158, 30, 14, 16, -38, 84, 0);       // vents
    addFade(GEO.box, 0x4a5158, 30, 14, 16, 38, 84, 0);
  } else if (m.type === 'quarry') {
    add(GEO.cyl, 0x3a3426, 46, 8, 28, -36, 4, 26);            // pit mound
    add(GEO.box, 0x3c4147, 12, 64, 12, 8, 32, -46);           // derrick
    const armPivot = new THREE.Group();
    armPivot.position.set(14, 60, -44);
    const arm = new THREE.Mesh(GEO.box, mat(0x7d8893));
    arm.scale.set(86, 9, 9);
    armPivot.add(arm);
    const weight = new THREE.Mesh(GEO.sphere, mat(0xa4502e));
    weight.scale.set(9, 9, 9);
    weight.position.x = -43;
    armPivot.add(weight);
    g.add(armPivot);
    animated.quarryArm = armPivot;
    add(GEO.box, 0x4d3a20, 4, 46, 4, -44, 23, -58);           // flag pole
    add(GEO.box, 0x6e6a5a, 24, 13, 2, -32, 40, -58);
  }
  if (fadeMats.length) animated.fadeables.push({ x: m.x, y: m.y, r: m.r, mats: fadeMats });
  scene.add(g);
}

function buildShop(S, scene) {
  const sh = S.world.shop;
  const g = new THREE.Group();
  g.position.set(sh.x, 0, sh.y);
  const deck = new THREE.Mesh(GEO.cyl, mat(0x6a5836));
  deck.scale.set(46, 6, 46);
  deck.position.y = 3;
  g.add(deck);
  const counter = new THREE.Mesh(GEO.box, mat(0x9a6e3c));
  counter.scale.set(60, 24, 22);
  counter.position.set(0, 16, 2);
  g.add(counter);
  const awning = new THREE.Mesh(GEO.cone, mat(0xb35140));
  awning.scale.set(52, 26, 52);
  awning.position.y = 56;
  g.add(awning);
  for (const px of [-34, 34]) {
    const post = new THREE.Mesh(GEO.cyl, mat(0x5e4326));
    post.scale.set(3, 44, 3);
    post.position.set(px, 22, 8);
    g.add(post);
  }
  // safe-zone ring (flat)
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(SAFE_R - 7, SAFE_R, 72),
    new THREE.MeshBasicMaterial({ color: 0x96d7ff, transparent: true, opacity: 0.3, side: THREE.DoubleSide, depthWrite: false }),
  );
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 1.2;
  g.add(ring);
  scene.add(g);
}
