// First-person input: pointer-lock mouselook + yaw-relative WASD.
// Keyboard bindings otherwise unchanged from the top-down build.
import { selectSlot, reload, interact, throwGrenade, dropPlayerFence, upgradeUnderCursor, tryPlace, tryRemove, fire, bailOut } from '../sim/player.js';
import { throwSupplySignal } from '../sim/worldevents.js';
import { PIECES, PLAYER_R } from '../sim/config.js';
import { blocked } from '../sim/physics.js';
import { clamp } from '../sim/util.js';

const SENS = 0.0023;

export function bindInput(S, view, camera, hud) {
  const keys = {};
  const canvas = view.canvas;
  const locked = () => document.pointerLockElement === canvas;
  const modalOpen = () => !!(S.shopOpen || S.storeOpen);

  function lockPointer() {
    if (!locked() && !view.godView && !modalOpen() && !S.player.dead) {
      canvas.requestPointerLock();
    }
  }
  function unlockPointer() { if (locked()) document.exitPointerLock(); }

  // aim point follows the camera centre every frame
  function refreshAim() {
    if (S.player.inCopter && S.copter) {
      // transfer accumulated stick deltas as rates (px/s) for torque
      const now = performance.now();
      const el = Math.max(0.008, (now - stickT) / 1000);
      stickT = now;
      S.cmd.stickPitch = stickAY / el; // mouse forward (−Y) → nose-down torque
      S.cmd.stickRoll = stickAX / el;   // mouse right → roll right torque
      stickAX = 0; stickAY = 0;
      S.cmd.flat = !!(keys['control'] || keys['c']); // precision flat turns
      if (!keys['alt']) { // freelook eases back to centre when released
        camera.flyYawOff = (camera.flyYawOff || 0) * 0.82;
        camera.flyPitchOff = (camera.flyPitchOff || 0) * 0.82;
      }
      S.cmd.mx = S.copter.x + Math.cos(S.copter.angle) * 620;
      S.cmd.my = S.copter.y + Math.sin(S.copter.angle) * 620;
    } else {
      const w = camera.aimPoint();
      S.cmd.mx = w.x; S.cmd.my = w.y;
      S.cmd.stickPitch = 0; S.cmd.stickRoll = 0;
    }
    view.mouseSX = view.VW / 2; view.mouseSY = view.VH / 2;
  }

  function setMapView(on) {
    view.godView = on;
    const b = document.getElementById('mapbtn');
    b.classList.toggle('on', on);
    b.textContent = on ? 'Exit Map (M)' : 'Map (M)';
    if (on) unlockPointer();
  }

  addEventListener('keydown', (e) => {
    const k = e.key.toLowerCase();
    if (S.storeOpen) { if (k === 'escape' || k === 'e') { S.storeOpen = null; hud.closeModals(); } e.preventDefault(); return; }
    if (S.shopOpen) { if (k === 'escape' || k === 'e') { S.shopOpen = false; hud.closeModals(); } e.preventDefault(); return; }
    keys[k] = true;
    syncMoveKeys();
    if (k === 'm') { setMapView(!view.godView); if (!view.godView) lockPointer(); }
    if (k === 'e') {
      interact(S);
      if (modalOpen()) unlockPointer(); // shop/storage opened — free the mouse
    }
    if (k === 'g' && !S.player.inCopter) dropPlayerFence(S);
    if (k === 'q') { if (S.buildMode) cyclePiece(S, 1); else if (!S.player.inCopter) throwGrenade(S); }
    if (k === 't' && !S.buildMode && !S.player.inCopter) throwSupplySignal(S, S.cmd.mx, S.cmd.my);
    if (/^Digit[1-9]$|^Numpad[1-9]$/.test(e.code) && !S.player.inCopter) {
      const n = +e.code.slice(-1) - 1;
      // in build mode the digits pick the piece (clicks can't reach the menu
      // while the pointer is locked); 6–9 still switch weapon slots
      if (S.buildMode && n < PIECES.length) S.buildPiece = PIECES[n];
      else selectSlot(S, n);
    }
    if (k === 'b' && !S.player.inCopter) selectSlot(S, S.buildMode ? 0 : 5);
    if (k === 'r') { if (S.buildMode) S.buildRot = (S.buildRot + 1) % 4; else reload(S); }
    if (k === 'u') upgradeUnderCursor(S);
    if (k === ' ' && !e.repeat) {
      if (S.player.inCopter) {
        const alt = bailOut(S); // eject — fall damage if you're high
        if (alt > 24) camera.fall(alt);
      } else camera.jump();
    }
    if (['w', 'a', 's', 'd', ' ', 'alt', 'control'].includes(k)) e.preventDefault();
  });
  addEventListener('keyup', (e) => { keys[e.key.toLowerCase()] = false; syncMoveKeys(); });
  addEventListener('blur', () => { for (const k in keys) keys[k] = false; syncMoveKeys(); S.cmd.fireHeld = false; });

  function syncMoveKeys() {
    S.cmd.run = !!keys['shift'];
    if (S.player.inCopter) {
      // cockpit controls: W/S throttle, A/D yaw — raw, not look-relative
      S.cmd.up = !!keys['w']; S.cmd.down = !!keys['s'];
      S.cmd.left = !!keys['a']; S.cmd.right = !!keys['d'];
      S.cmd.moveX = 0; S.cmd.moveY = 0;
      return;
    }
    // on foot: WASD relative to where you LOOK (analog world-space vector)
    const f = (keys['w'] ? 1 : 0) - (keys['s'] ? 1 : 0);
    const r = (keys['d'] ? 1 : 0) - (keys['a'] ? 1 : 0);
    const A = camera.simAngle();
    S.cmd.moveX = f * Math.cos(A) - r * Math.sin(A);
    S.cmd.moveY = f * Math.sin(A) + r * Math.cos(A);
    // legacy booleans for any path still reading them
    S.cmd.right = S.cmd.moveX > 0.38; S.cmd.left = S.cmd.moveX < -0.38;
    S.cmd.down = S.cmd.moveY > 0.38; S.cmd.up = S.cmd.moveY < -0.38;
  }

  // ---- mouselook / flight stick ----
  let stickAX = 0, stickAY = 0, stickT = performance.now();
  addEventListener('mousemove', (e) => {
    if (!locked()) return;
    if (S.player.inCopter && S.copter) {
      if (keys['alt']) {
        // freelook: scan around without touching the controls
        camera.flyYawOff = clamp((camera.flyYawOff || 0) + e.movementX * SENS, -2.7, 2.7);
        camera.flyPitchOff = clamp((camera.flyPitchOff || 0) + e.movementY * SENS, -0.5, 0.9);
      } else {
        // the mouse is a virtual joystick: deltas become pitch/roll torque
        stickAX += e.movementX;
        stickAY += e.movementY;
      }
      return;
    }
    camera.yaw -= e.movementX * SENS;
    camera.pitch = clamp(camera.pitch - e.movementY * SENS, -1.25, 1.2);
    syncMoveKeys(); // movement follows the new facing immediately
  });

  addEventListener('wheel', (e) => {
    if (S.buildMode && !modalOpen()) { cyclePiece(S, e.deltaY > 0 ? 1 : -1); e.preventDefault(); }
  }, { passive: false });

  canvas.addEventListener('mousedown', (e) => {
    if (view.godView) {
      if (e.button === 0) {
        const r = canvas.getBoundingClientRect();
        const w = camera.screenToWorld(e.clientX - r.left, e.clientY - r.top);
        S.cmd.mx = w.x; S.cmd.my = w.y;
        mapTeleport(S, view, setMapView);
        lockPointer();
      }
      return;
    }
    if (!locked()) { lockPointer(); return; } // first click captures the mouse
    if (e.button === 0) {
      S.cmd.fireHeld = true;
      if (S.buildMode) tryPlace(S);
      else if (!modalOpen()) fire(S);
    } else if (e.button === 2) {
      if (S.buildMode) tryRemove(S);
    }
  });
  addEventListener('mouseup', () => { S.cmd.fireHeld = false; });
  canvas.addEventListener('contextmenu', (e) => e.preventDefault());

  // re-aim every frame-ish; manage pointer state on death/modals
  setInterval(() => {
    if (!view.godView) refreshAim();
    syncMoveKeys(); // keeps mapping fresh across copter enter/exit + look changes
    if ((S.player.dead || modalOpen()) && locked()) unlockPointer();
  }, 16);

  document.addEventListener('pointerlockchange', () => {
    document.getElementById('fphint').classList.toggle(
      'hidden', locked() || view.godView || modalOpen() || S.player.dead,
    );
    if (!locked()) S.cmd.fireHeld = false;
  });
  // keep the hint in sync when state changes without a lock event
  setInterval(() => {
    document.getElementById('fphint').classList.toggle(
      'hidden', locked() || view.godView || modalOpen() || S.player.dead,
    );
    document.getElementById('xhair').classList.toggle('hidden', !locked() || view.godView);
  }, 200);

  refreshAim();
}

export function cyclePiece(S, dir) {
  const i = PIECES.indexOf(S.buildPiece);
  S.buildPiece = PIECES[(i + dir + PIECES.length) % PIECES.length];
}

function mapTeleport(S, view, setMapView) {
  let x = S.cmd.mx, y = S.cmd.my;
  x = clamp(x, PLAYER_R, 13824 - PLAYER_R);
  y = clamp(y, PLAYER_R, 9216 - PLAYER_R);
  for (let t = 0; t < 24 && blocked(S, x, y, PLAYER_R); t++) {
    x += (Math.random() * 2 - 1) * 40;
    y += (Math.random() * 2 - 1) * 40;
  }
  S.player.x = x; S.player.y = y;
  S.player.inCopter = false;
  setMapView(false);
  S.tip = { text: 'arrived', t: 1.2 };
}
