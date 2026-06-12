// First-person viewmodel: forearms + current weapon rendered in a separate
// overlay scene (depth cleared) so it never clips into world geometry.
import * as THREE from 'three';
import { GEO, mat, glowTexture } from './assets3.js';
import { GUNS } from './rigs3.js';

const SKIN = 0xc79c74;
const SLEEVE = 0x55604a;
const KIND_BY_SLOT = { 0: 'tool', 1: 'pistol', 2: 'rifle', 3: 'hmg', 4: 'rocket', 5: 'hammer', 6: 'rifle', 7: 'shotgun', 8: 'hmg' };
const KICK = { pistol: 1.1, rifle: 0.9, minigun: 0.45, sniper: 2.6, shotgun: 2.2, hmg: 0.8, rocket: 3.0 };
const TWO_HANDED = new Set(['rifle', 'hmg', 'shotgun', 'rocket', 'jack']);

export function makeViewmodel(S, view, rig) {
  const vmScene = new THREE.Scene();
  const vmCam = new THREE.PerspectiveCamera(56, view.VW / view.VH, 1, 300);
  vmScene.add(new THREE.HemisphereLight(0xeaf2f8, 0x4a4438, 1.05));
  const dl = new THREE.DirectionalLight(0xfff2dc, 0.9);
  dl.position.set(40, 80, 30);
  vmScene.add(dl);

  // arm anchor: rotated so gun +x points away from the camera
  const anchor = new THREE.Group();
  anchor.rotation.y = Math.PI / 2;
  vmScene.add(anchor);

  const bx = (hex, sx, sy, sz, x, y, z) => {
    const m = new THREE.Mesh(GEO.box, mat(hex));
    m.scale.set(sx, sy, sz);
    m.position.set(x, y, z);
    return m;
  };

  // forearm + hands (persistent), gun rebuilt on weapon change
  anchor.add(bx(SLEEVE, 9, 4.8, 4.8, -7, -1.6, 0));   // sleeve
  anchor.add(bx(SKIN, 7, 4.2, 4.2, -0.5, -0.9, 0));   // forearm
  const handR = bx(SKIN, 4.2, 4.6, 4.6, 4.5, 0, 0);   // trigger hand
  anchor.add(handR);
  const handL = bx(SKIN, 4, 4.2, 4.2, 14, -1.2, 0);   // support hand
  anchor.add(handL);

  let gunGroup = null, gunKind = null, gunLen = 22;
  function setGun(kind) {
    if (kind === gunKind) return;
    gunKind = kind;
    if (gunGroup) anchor.remove(gunGroup);
    gunGroup = new THREE.Group();
    (GUNS[kind] || GUNS.pistol)(gunGroup);
    anchor.add(gunGroup);
    gunLen = { pistol: 16, rifle: 25, shotgun: 21, hmg: 28, tool: 18, rocket: 25, hammer: 16, jack: 32 }[kind] || 20;
    handL.visible = TWO_HANDED.has(kind);
    handL.position.set(kind === 'rocket' ? 18 : 13.5, -1.4, 0);
    flash.position.set(gunLen + 5, 0.5, 0);
  }

  // muzzle flash
  const flash = new THREE.Sprite(new THREE.SpriteMaterial({
    map: glowTexture(), color: 0xffd9a0, transparent: true, opacity: 0, depthTest: false,
  }));
  flash.scale.set(10, 10, 1);
  anchor.add(flash);

  let bobT = 0, recoil = 0, flashT = 0;
  const BASE = { x: 7.8, y: -6.6, z: -17.5 };

  return {
    sync(dt) {
      const p = S.player;
      const show = !view.godView && !p.dead && !p.inCopter;
      anchor.visible = show;
      if (!show) return;

      // weapon selection (build mode shows the hammer, like Rust's planner)
      const kind = S.buildMode ? 'hammer'
        : S.slot === 0 ? (S.jackhammer ? 'jack' : 'tool')
        : KIND_BY_SLOT[S.slot] || 'pistol';
      setGun(kind);

      // events → recoil + muzzle flash (player-only 'shot' events)
      for (const e of S.events) {
        if (e.type !== 'shot') continue;
        recoil = Math.min(3.4, recoil + (KICK[e.weapon] || 1));
        if (e.weapon !== 'rocket') flashT = 0.055;
      }
      recoil *= Math.exp(-11 * dt);
      flashT = Math.max(0, flashT - dt);
      flash.material.opacity = flashT > 0 ? 0.95 : 0;
      flash.material.rotation = Math.random() * Math.PI;
      const fs = 8 + Math.random() * 5;
      flash.scale.set(fs, fs, 1);

      // walk bob + sway
      const moveAmt = p.moving ? 1 : 0;
      bobT += dt * (4 + 8.5 * moveAmt) * (S.cmd.run ? 1.25 : 1);
      let ox = Math.cos(bobT * 0.5) * 0.5 * moveAmt;
      let oy = Math.sin(bobT) * 0.6 * moveAmt + Math.sin(S.t * 1.7) * 0.12;
      let oz = recoil * 1.1;
      let rotX = -recoil * 0.045;

      // tool/hammer swing + jackhammer judder
      const melee = kind === 'tool' || kind === 'hammer';
      if (melee && p.swing > 0) rotX += -0.5 - Math.sin(S.t * 15) * 0.32;
      if (kind === 'jack' && p.swing > 0) {
        ox += (Math.random() - 0.5) * 0.7;
        oy += (Math.random() - 0.5) * 0.7;
        rotX += -0.18;
      }

      anchor.position.set(BASE.x + ox, BASE.y + oy, BASE.z + oz);
      anchor.rotation.x = rotX;
      anchor.rotation.z = Math.cos(bobT * 0.5) * 0.012 * moveAmt;
    },
    render(renderer) {
      if (vmCam.aspect !== view.VW / view.VH) {
        vmCam.aspect = view.VW / view.VH;
        vmCam.updateProjectionMatrix();
      }
      renderer.autoClear = false;
      renderer.clearDepth();
      renderer.render(vmScene, vmCam);
      renderer.autoClear = true;
    },
  };
}
