// Input → sim commands. Keyboard/mouse bindings ported from v1.
import { selectSlot, reload, interact, throwGrenade, dropPlayerFence, upgradeUnderCursor, tryPlace, tryRemove, fire } from '../sim/player.js';
import { throwSupplySignal } from '../sim/worldevents.js';
import { PIECES, PLAYER_R } from '../sim/config.js';
import { blocked } from '../sim/physics.js';
import { clamp } from '../sim/util.js';

export function bindInput(S, view, camera, hud) {
  const keys = {};
  const canvas = view.canvas;

  const refreshMouseWorld = (sx, sy) => {
    const w = camera.screenToWorld(sx, sy);
    S.cmd.mx = w.x; S.cmd.my = w.y;
    view.mouseSX = sx; view.mouseSY = sy;
  };

  addEventListener('keydown', (e) => {
    const k = e.key.toLowerCase();
    if (S.storeOpen) { if (k === 'escape' || k === 'e') { S.storeOpen = null; hud.closeModals(); } e.preventDefault(); return; }
    if (S.shopOpen) { if (k === 'escape' || k === 'e') { S.shopOpen = false; hud.closeModals(); } e.preventDefault(); return; }
    keys[k] = true;
    syncMoveKeys();
    if (k === 'e') interact(S);
    if (k === 'g' && !S.player.inCopter) dropPlayerFence(S);
    if (k === 'q') { if (S.buildMode) cyclePiece(S, 1); else if (!S.player.inCopter) throwGrenade(S); }
    if (k === 't' && !S.buildMode && !S.player.inCopter) throwSupplySignal(S, S.cmd.mx, S.cmd.my);
    if (/^Digit[1-9]$|^Numpad[1-9]$/.test(e.code) && !S.player.inCopter) selectSlot(S, +e.code.slice(-1) - 1);
    if (k === 'b' && !S.player.inCopter) selectSlot(S, S.buildMode ? 0 : 5);
    if (k === 'r') { if (S.buildMode) S.buildRot = (S.buildRot + 1) % 4; else reload(S); }
    if (k === 'u') upgradeUnderCursor(S);
    if (['w', 'a', 's', 'd', ' '].includes(k)) e.preventDefault();
  });
  addEventListener('keyup', (e) => { keys[e.key.toLowerCase()] = false; syncMoveKeys(); });
  addEventListener('blur', () => { for (const k in keys) keys[k] = false; syncMoveKeys(); S.cmd.fireHeld = false; });

  function syncMoveKeys() {
    // WASD stays SCREEN-relative when the view is rotated (middle-drag):
    // rotate the input vector by the camera orbit before mapping to world
    const sx = (keys['d'] ? 1 : 0) - (keys['a'] ? 1 : 0);
    const sy = (keys['s'] ? 1 : 0) - (keys['w'] ? 1 : 0);
    const a = camera.orbit || 0;
    const wx = sx * Math.cos(a) + sy * Math.sin(a);
    const wy = -sx * Math.sin(a) + sy * Math.cos(a);
    S.cmd.right = wx > 0.38; S.cmd.left = wx < -0.38;
    S.cmd.down = wy > 0.38; S.cmd.up = wy < -0.38;
    S.cmd.run = !!keys['shift'];
  }

  addEventListener('wheel', (e) => {
    if (S.buildMode && !S.shopOpen && !S.storeOpen) { cyclePiece(S, e.deltaY > 0 ? 1 : -1); e.preventDefault(); return; }
    if (!view.godView && !S.shopOpen && !S.storeOpen && camera.zoomFactor !== undefined) {
      camera.zoomFactor = clamp(camera.zoomFactor * (1 + e.deltaY * 0.0011), 0.55, 1.9);
      e.preventDefault();
    }
  }, { passive: false });

  // middle-mouse drag rotates the player view
  let orbitDrag = null;
  canvas.addEventListener('mousedown', (e) => {
    if (e.button === 1 && !view.godView) {
      orbitDrag = { x: e.clientX, start: camera.orbit || 0 };
      e.preventDefault();
    }
  });
  addEventListener('mousemove', (e) => {
    if (orbitDrag && camera.orbit !== undefined) {
      camera.orbit = orbitDrag.start + (e.clientX - orbitDrag.x) * 0.006;
      syncMoveKeys();
    }
  });
  addEventListener('mouseup', (e) => { if (e.button === 1) orbitDrag = null; });
  canvas.addEventListener('auxclick', (e) => { if (e.button === 1) e.preventDefault(); });

  canvas.addEventListener('mousemove', (e) => {
    const r = canvas.getBoundingClientRect();
    refreshMouseWorld(e.clientX - r.left, e.clientY - r.top);
  });
  canvas.addEventListener('mousedown', (e) => {
    const r = canvas.getBoundingClientRect();
    refreshMouseWorld(e.clientX - r.left, e.clientY - r.top);
    if (e.button === 0) {
      if (view.godView) { mapTeleport(S, view); return; }
      S.cmd.fireHeld = true;
      if (S.buildMode) tryPlace(S);
      else if (!S.shopOpen && !S.storeOpen) {
        const k = S.slot;
        fire(S); // semi-auto fires on click; auto handled by held flag
      }
    } else if (e.button === 2) {
      if (S.buildMode) tryRemove(S);
    }
  });
  addEventListener('mouseup', () => { S.cmd.fireHeld = false; });
  canvas.addEventListener('contextmenu', (e) => e.preventDefault());

  // refresh world mouse as the camera moves
  setInterval(() => { if (view.mouseSX !== undefined) refreshMouseWorld(view.mouseSX, view.mouseSY); }, 50);
}

export function cyclePiece(S, dir) {
  const i = PIECES.indexOf(S.buildPiece);
  S.buildPiece = PIECES[(i + dir + PIECES.length) % PIECES.length];
}

function mapTeleport(S, view) {
  let x = S.cmd.mx, y = S.cmd.my;
  x = clamp(x, PLAYER_R, 13824 - PLAYER_R);
  y = clamp(y, PLAYER_R, 9216 - PLAYER_R);
  for (let t = 0; t < 24 && blocked(S, x, y, PLAYER_R); t++) {
    x += (Math.random() * 2 - 1) * 40;
    y += (Math.random() * 2 - 1) * 40;
  }
  S.player.x = x; S.player.y = y;
  S.player.inCopter = false;
  view.godView = false;
  document.getElementById('mapbtn').classList.remove('on');
  document.getElementById('mapbtn').textContent = 'Map View';
  S.tip = { text: 'arrived', t: 1.2 };
}
