"use strict";
/* building.js — build mode (foundations, walls, doors, deployables, upgrades),
   container storage (box / cupboard), and the trade shop. */

let tipTimer = 0;

function flashTip(t) {
  const el = document.getElementById('tip');
  el.textContent = t;
  el.classList.add('show');
  tipTimer = 1.4;
}

function buildGhostCell() {
  const w = screenToWorld(mouse.sx, mouse.sy);
  return cellOf(w.x, w.y);
}

function inWorldCell(gx, gy) {
  return gx >= 0 && gy >= 0 && gx < Math.ceil(WORLD.w / TILE) && gy < Math.ceil(WORLD.h / TILE);
}

// Bounding box of FOUNDATION (floor) cells only, plus an optional candidate cell.
function structBounds(extra) {
  let minx = 1e9;
  let miny = 1e9;
  let maxx = -1e9;
  let maxy = -1e9;
  let any = false;
  const addCell = (gx, gy) => {
    any = true;
    if (gx < minx) minx = gx;
    if (gy < miny) miny = gy;
    if (gx > maxx) maxx = gx;
    if (gy > maxy) maxy = gy;
  };
  // Only the player's own base counts toward the size cap.
  for (const [k, s] of game.structures) {
    if (s.owner !== OWNER || (s.type !== 'floor' && s.type !== 'trifloor')) continue;
    const [gx, gy] = k.split(',').map(Number);
    addCell(gx, gy);
  }
  if (extra) addCell(extra.gx, extra.gy);
  return any ? { minx, miny, maxx, maxy, w: maxx - minx + 1, h: maxy - miny + 1 } : null;
}

function exceedsBase(gx, gy) {
  if (!BUILD[game.buildPiece].found) return false;
  const b = structBounds({ gx, gy });
  return !!(b && (b.w > BASE_MAX || b.h > BASE_MAX));
}

function foundationAt(gx, gy) {
  const s = game.structures.get(gkey(gx, gy));
  return !!(s && (s.type === 'floor' || s.type === 'trifloor'));
}

// A minicopter sitting on this cell (foundations can't be placed on one).
function copterAtCell(gx, gy) {
  const cx = gx * TILE + TILE / 2;
  const cy = gy * TILE + TILE / 2;
  const R = COPTER.r + 8;
  if (game.copter && !game.copter.destroyed &&
      Math.abs(game.copter.x - cx) < R && Math.abs(game.copter.y - cy) < R) return game.copter;
  for (const e of game.enemies) {
    const c = e.copter;
    if (c && !c.destroyed && Math.abs(c.x - cx) < R && Math.abs(c.y - cy) < R) return c;
  }
  return null;
}

function structByKey(key) {
  return (key[0] === 'H' || key[0] === 'V' || key[0] === 'D') ? game.walls.get(key) : game.structures.get(key);
}

// Nearest straight edge of the foundation cell under the cursor.
function edgeUnderCursor() {
  const w = screenToWorld(mouse.sx, mouse.sy);
  const gx = Math.floor(w.x / TILE);
  const gy = Math.floor(w.y / TILE);
  const lx = w.x - gx * TILE;
  const ly = w.y - gy * TILE;
  const d = { top: ly, bottom: TILE - ly, left: lx, right: TILE - lx };
  let side = 'top';
  let bestDist = 1e9;
  for (const k in d) {
    if (d[k] < bestDist) {
      bestDist = d[k];
      side = k;
    }
  }
  const key = side === 'top' ? 'H,' + gx + ',' + gy
    : side === 'bottom' ? 'H,' + gx + ',' + (gy + 1)
    : side === 'left' ? 'V,' + gx + ',' + gy
    : 'V,' + (gx + 1) + ',' + gy;
  return { key, gx, gy };
}

function edgeHasFoundation(key) {
  const parts = key.split(',');
  const kind = parts[0];
  const a = +parts[1];
  const b = +parts[2];
  return kind === 'V' ? (foundationAt(a, b) || foundationAt(a - 1, b))
                      : (foundationAt(a, b) || foundationAt(a, b - 1));
}

function inSafeZone(x, y) {
  return game.shop && dist2(x, y, game.shop.x, game.shop.y) < SAFE_R * SAFE_R;
}

const MON_NOBUILD = SAFE_R;   // monuments are no-build zones, same radius as the trade safe zone

function inMonZone(x, y) {
  if (!game.monuments) return false;
  for (const m of game.monuments) {
    if (dist2(x, y, m.x, m.y) < MON_NOBUILD * MON_NOBUILD) return true;
  }
  return false;
}

function nearestCupboard(x, y) {
  let best = null;
  let bestDistSq = CLAIM_R * CLAIM_R;
  for (const [k, s] of game.deploys) {
    if (s.type !== 'cupboard') continue;
    const [gx, gy] = k.split(',').map(Number);
    const cx = gx * TILE + TILE / 2;
    const cy = gy * TILE + TILE / 2;
    const distSq = dist2(x, y, cx, cy);
    if (distSq < bestDistSq) {
      bestDistSq = distSq;
      best = { s, cx, cy, d: Math.sqrt(distSq) };
    }
  }
  return best;
}

// Places the currently selected build piece at the cursor (cell, edge, or diagonal).
function placeStructure() {
  const piece = game.buildPiece;
  const def = BUILD[piece];

  if (def.cat === 'cell') {
    const { gx, gy } = buildGhostCell();
    if (!inWorldCell(gx, gy)) return;
    const key = gkey(gx, gy);
    const cx = gx * TILE + TILE / 2;
    const cy = gy * TILE + TILE / 2;
    if (inSafeZone(cx, cy)) {
      flashTip('Shop safe zone — no building');
      return;
    }
    if (inMonZone(cx, cy)) {
      flashTip('Monument — no building here');
      return;
    }
    if (boulderAt(cx, cy)) {
      flashTip('A boulder blocks building here');
      return;
    }

    // Deployables (box / turret / cupboard) sit ON a foundation or open ground.
    if (def.box || def.turret || def.tc) {
      if (game.deploys.has(key)) {
        flashTip('Already something here');
        return;
      }
      if ((def.box || def.tc) && !foundationAt(gx, gy)) {
        flashTip(def.tc ? 'Cupboard goes on a foundation' : 'Box needs a foundation');
        return;
      }
      if (def.tc) {
        // The one-TC-per-player rule takes priority over the spacing rule.
        for (const [, s2] of game.deploys) {
          if (s2.type === 'cupboard' && s2.owner === OWNER) {
            flashTip('You can only have one Tool Cupboard');
            return;
          }
        }
        for (const [k2, s2] of game.deploys) {
          if (s2.type !== 'cupboard') continue;
          const [ox, oy] = k2.split(',').map(Number);
          if (dist2(cx, cy, ox * TILE + TILE / 2, oy * TILE + TILE / 2) < MIN_TC_DIST * MIN_TC_DIST) {
            flashTip('Too close to another base');
            return;
          }
        }
      }
      if (def.turret && !nearestCupboard(cx, cy)) {
        flashTip('Turret needs a Tool Cupboard base');
        return;
      }
      const playerCell = cellOf(player.x, player.y);
      if (playerCell.gx === gx && playerCell.gy === gy) {
        flashTip("Can't build on yourself");
        return;
      }
      if (!canAfford(def.cost)) {
        flashTip('Not enough resources');
        return;
      }
      pay(def.cost);
      // Lockables (box / cupboard) auto-lock to the owner on placement; there is no manual lock toggle.
      const o = {
        type: piece, mat: 'wood', hp: def.hp, max: def.hp, open: false, angle: 0, cd: 0,
        lock: (def.lockable ? { by: OWNER, locked: true, authorized: true } : null), owner: OWNER
      };
      if (def.store) o.store = { wood: 0, stone: 0, metal: 0, scrap: 0 };
      game.deploys.set(key, o);
      burst(cx, cy, def.tc ? COL.tcLt : COL.boxLt, 11, 130);
      if (def.tc) addFloat(cx, cy - 22, 'base claimed', '#caa24a');
      return;
    }

    // Foundations and other cell pieces.
    if (game.structures.has(key)) {
      flashTip('Tile occupied');
      return;
    }
    if (copterAtCell(gx, gy)) {
      flashTip('Move the minicopter first');
      return;
    }
    if (def.found && exceedsBase(gx, gy)) {
      flashTip('Base limited to ' + BASE_MAX + '×' + BASE_MAX);
      return;
    }
    if (!canAfford(def.cost)) {
      flashTip('Not enough resources');
      return;
    }
    pay(def.cost);
    const o = { type: piece, mat: 'wood', hp: def.hp, max: def.hp, owner: OWNER };
    if (def.tri) o.rot = game.buildRot & 3;
    game.structures.set(key, o);
    burst(cx, cy, COL.woodLt, 12, 130);

  } else if (def.cat === 'edge') {
    const e = edgeUnderCursor();
    const seg = wallSegOf(e.key, null);
    const mx = (seg[0] + seg[2]) / 2;
    const my = (seg[1] + seg[3]) / 2;
    if (inSafeZone(mx, my)) {
      flashTip('Shop safe zone — no building');
      return;
    }
    if (inMonZone(mx, my)) {
      flashTip('Monument — no building here');
      return;
    }
    if (game.walls.has(e.key)) {   // never two walls on one edge (no stacking)
      flashTip('Edge occupied');
      return;
    }
    if (!edgeHasFoundation(e.key)) {
      flashTip('Walls go on foundation edges');
      return;
    }
    // Base walls & doors may be placed ANYWHERE in the base (interior edges included) —
    // only the deployable wood-wall fence is barred from the base. No perimeter-only rule.
    if (!canAfford(def.cost)) {
      flashTip('Not enough resources');
      return;
    }
    pay(def.cost);
    // Doors are automatically locked to the owner when placed.
    game.walls.set(e.key, {
      type: piece, mat: 'wood', hp: def.hp, max: def.hp, open: false,
      lock: (piece === 'door' ? { by: OWNER, locked: true, authorized: true } : null), owner: OWNER
    });
    burst(mx, my, COL.woodLt, 9, 120);

  } else {
    // Diagonal wall in a foundation cell.
    const { gx, gy } = buildGhostCell();
    const key = 'D,' + gx + ',' + gy;
    const cx = gx * TILE + TILE / 2;
    const cy = gy * TILE + TILE / 2;
    if (inSafeZone(cx, cy)) {
      flashTip('Shop safe zone — no building');
      return;
    }
    if (inMonZone(cx, cy)) {
      flashTip('Monument — no building here');
      return;
    }
    if (!foundationAt(gx, gy)) {
      flashTip('Triangle needs a foundation');
      return;
    }
    if (game.walls.has(key)) {
      flashTip('Occupied');
      return;
    }
    if (!canAfford(def.cost)) {
      flashTip('Not enough resources');
      return;
    }
    pay(def.cost);
    game.walls.set(key, {
      type: 'triangle', mat: 'wood', hp: def.hp, max: def.hp, rot: game.buildRot & 1, lock: null, owner: OWNER
    });
    burst(cx, cy, COL.woodLt, 9, 120);
  }
}

// Refunds half the build cost, plus some of the upgrade materials for stone/metal tiers.
function refund(obj) {
  const def = BUILD[obj.type];
  for (const k in def.cost) give(k, Math.floor(def.cost[k] / 2));
  if (obj.mat === 'stone' || obj.mat === 'metal') give('stone', 7);
  if (obj.mat === 'metal') give('metal', 10);
}

function removeWall(key) {
  const wall = game.walls.get(key);
  if (!wall) return;
  refund(wall);
  game.walls.delete(key);
  const seg = wallSegOf(key, wall);
  burst((seg[0] + seg[2]) / 2, (seg[1] + seg[3]) / 2, '#8a8f7a', 8, 120);
}

function removeCell(key) {
  const s = game.structures.get(key);
  if (!s) return;
  refund(s);
  game.structures.delete(key);
  const [gx, gy] = key.split(',').map(Number);
  if (s.type === 'floor' || s.type === 'trifloor') cleanupOrphans(gx, gy);
  burst(gx * TILE + TILE / 2, gy * TILE + TILE / 2, '#8a8f7a', 8, 120);
}

function removeDeploy(key) {
  const dep = game.deploys.get(key);
  if (!dep) return;
  refund(dep);
  game.deploys.delete(key);
  const [gx, gy] = key.split(',').map(Number);
  burst(gx * TILE + TILE / 2, gy * TILE + TILE / 2, '#8a8f7a', 8, 120);
}

// Removes whatever the currently selected piece type points at under the cursor.
function removeStructure() {
  const def = BUILD[game.buildPiece];
  if (def.cat === 'edge') {
    removeWall(edgeUnderCursor().key);
  } else if (def.cat === 'diag') {
    const { gx, gy } = buildGhostCell();
    removeWall('D,' + gx + ',' + gy);
  } else if (def.box || def.turret || def.tc) {
    const { gx, gy } = buildGhostCell();
    removeDeploy(gkey(gx, gy));
  } else {
    const { gx, gy } = buildGhostCell();
    removeCell(gkey(gx, gy));
  }
}

function cyclePiece(dir) {
  let i = PIECES.indexOf(game.buildPiece);
  i = (i + dir + PIECES.length) % PIECES.length;
  game.buildPiece = PIECES[i];
  refreshBuildMenu();
}

// Resolves the structure the current piece would act on, plus its center point.
function targetForBuild() {
  const def = BUILD[game.buildPiece];
  if (def.cat === 'edge') {
    const e = edgeUnderCursor();
    const o = game.walls.get(e.key);
    const seg = wallSegOf(e.key, o);
    return { obj: o, key: e.key, cx: (seg[0] + seg[2]) / 2, cy: (seg[1] + seg[3]) / 2 };
  }
  if (def.cat === 'diag') {
    const { gx, gy } = buildGhostCell();
    const key = 'D,' + gx + ',' + gy;
    return { obj: game.walls.get(key), key, cx: gx * TILE + TILE / 2, cy: gy * TILE + TILE / 2 };
  }
  const { gx, gy } = buildGhostCell();
  const key = gkey(gx, gy);
  const d = BUILD[game.buildPiece];
  const obj = (d.box || d.turret || d.tc) ? game.deploys.get(key) : game.structures.get(key);
  return { obj, key, cx: gx * TILE + TILE / 2, cy: gy * TILE + TILE / 2 };
}

// Whatever structure sits under the cursor (wall edge first, then the cell), regardless of selected piece.
function structUnderCursor() {
  const w = screenToWorld(mouse.sx, mouse.sy);
  const gx = Math.floor(w.x / TILE);
  const gy = Math.floor(w.y / TILE);
  const cellKey = gkey(gx, gy);
  const e = edgeUnderCursor();
  const wall = game.walls.get(e.key);
  if (wall) {
    const sg = wallSegOf(e.key, wall);
    if (ptSeg(w.x, w.y, sg[0], sg[1], sg[2], sg[3]) < 18) {
      return { obj: wall, key: e.key, cx: (sg[0] + sg[2]) / 2, cy: (sg[1] + sg[3]) / 2 };
    }
  }
  const dep = game.deploys.get(cellKey);
  if (dep) return { obj: dep, key: cellKey, cx: gx * TILE + TILE / 2, cy: gy * TILE + TILE / 2 };
  const struct = game.structures.get(cellKey);
  if (struct) return { obj: struct, key: cellKey, cx: gx * TILE + TILE / 2, cy: gy * TILE + TILE / 2 };
  return { obj: null };
}

function upgradeStructure() {
  const t = structUnderCursor();
  if (!t.obj) {
    flashTip('Aim at a structure');
    return;
  }
  if (!BUILD[t.obj.type] || !BUILD[t.obj.type].up) {
    flashTip("Can't upgrade that");
    return;
  }
  const mat = t.obj.mat || 'wood';
  const up = UPGRADE[mat];
  if (!up) {
    flashTip('Already armored (max tier)');
    return;
  }
  if (!canAfford(up.cost)) {
    flashTip('Need ' + Object.entries(up.cost).map(([k, v]) => v + ' ' + (k === 'hqm' ? 'HQM (buy at shop)' : k)).join(', '));
    return;
  }
  pay(up.cost);
  t.obj.mat = up.next;
  t.obj.max = tierHp(BUILD[t.obj.type], up.next);
  t.obj.hp = t.obj.max;
  burst(t.cx, t.cy, up.next === 'armored' ? '#7f93ad' : up.next === 'metal' ? '#cfd6cf' : '#c2c8cf', 16, 150);
  addFloat(t.cx, t.cy - 8, up.next, '#cfe0ff');
}

/* ----- container storage (box / cupboard) ----- */

function openStore(s, title) {
  game.store = { ref: s, title: title || 'Box' };
  for (const kk in keys) keys[kk] = false;
  mouse.down = false;
  document.getElementById('store-title').textContent = game.store.title;
  document.getElementById('store').classList.remove('hidden');
  refreshStore();
}

function closeStore() {
  game.store = null;
  document.getElementById('store').classList.add('hidden');
}

function storeMove(kind, amt) {
  const s = game.store && game.store.ref;
  if (!s || !s.store) return;
  // A fractional amount moves that fraction of the bag (deposit) or of the store (withdraw).
  if (amt !== 0 && Math.abs(amt) < 1) {
    const frac = Math.abs(amt);
    amt = amt > 0 ? Math.max(1, Math.ceil(frac * (game.inv[kind] | 0)))
                  : -Math.max(1, Math.ceil(frac * (s.store[kind] | 0)));
  }
  if (amt > 0) {   // deposit
    amt = Math.min(amt, game.inv[kind] | 0);
    game.inv[kind] -= amt;
    s.store[kind] = (s.store[kind] | 0) + amt;
  } else {         // withdraw
    amt = Math.min(-amt, s.store[kind] | 0);
    s.store[kind] -= amt;
    game.inv[kind] += amt;
  }
  refreshStore();
}

function refreshStore() {
  const s = game.store && game.store.ref;
  if (!s || !s.store) return;
  for (const kind of ['wood', 'stone', 'metal', 'scrap']) {
    const storeEl = document.getElementById('st-' + kind);
    const invEl = document.getElementById('inv-' + kind);
    if (storeEl) storeEl.textContent = (s.store[kind] | 0);
    if (invEl) invEl.textContent = (game.inv[kind] | 0);
  }
}

/* ----- trade shop ----- */

function openShop() {
  game.shopOpen = true;
  for (const kk in keys) keys[kk] = false;
  mouse.down = false;
  document.getElementById('shop-scrap').textContent = game.inv.scrap | 0;
  refreshArmorRows();
  refreshShopBuys();
  document.getElementById('shop').classList.remove('hidden');
}

function closeShop() {
  game.shopOpen = false;
  document.getElementById('shop').classList.add('hidden');
}

function doTrade(i) {
  const t = SHOP.trades[i];
  if (!canAfford(t.give)) {
    flashTip('Not enough resources');
    return;
  }
  pay(t.give);
  give('scrap', t.get);
  document.getElementById('shop-scrap').textContent = game.inv.scrap | 0;
  flashTip('+' + t.get + ' scrap');
}

// First purchase UNLOCKS the weapon (plus a full mag); later purchases just add reserve ammo.
function doBuy(i) {
  const b = SHOP.buys[i];
  if ((game.inv.scrap | 0) < b.scrap) {
    flashTip('Need ' + b.scrap + ' scrap');
    return;
  }
  game.inv.scrap -= b.scrap;
  const W = WEAPONS[b.w];
  const justUnlocked = !game.owned[b.w];
  game.owned[b.w] = true;
  W.reserve += b.ammo;
  if (justUnlocked && W.ammo < W.magSize) W.ammo = W.magSize;
  document.getElementById('shop-scrap').textContent = game.inv.scrap | 0;
  if (typeof refreshHotbar === 'function') refreshHotbar();
  refreshShopBuys();
  flashTip(justUnlocked
    ? (W.name + ' unlocked! (press ' +
       ({ pistol: 2, rifle: 3, minigun: 4, rocket: 5, sniper: 7, shotgun: 8, hmg: 9 }[b.w]) + ')')
    : ('+' + b.ammo + ' ' + W.name + ' ammo'));
}

function refreshShopBuys() {
  SHOP.buys.forEach((b, i) => {
    const el = document.getElementById('shopbuy-' + i);
    if (!el) return;
    const owned = !!game.owned[b.w];
    el.innerHTML = '<span>' +
      (owned ? ('+' + b.ammo + ' ' + WEAPONS[b.w].name + ' ammo') : ('Buy ' + WEAPONS[b.w].name + ' — unlock')) +
      '</span><span class="sx">' + b.scrap + ' scrap' + (owned ? '' : ' ✦') + '</span>';
  });
}

function buyJackhammer() {
  if (game.jackhammer) {
    flashTip('Jackhammer already owned');
    return;
  }
  if ((game.inv.scrap | 0) < 30) {
    flashTip('Need 30 scrap');
    return;
  }
  game.inv.scrap -= 30;
  game.jackhammer = true;
  document.getElementById('shop-scrap').textContent = game.inv.scrap | 0;
  refreshJackRow();
  flashTip('Jackhammer acquired — 3× gathering');
}

function buyRifleLaser() {
  if (player.rifleLaser) {
    flashTip('Rifle laser already owned');
    return;
  }
  if (!game.owned.rifle) {
    flashTip('Buy the Rifle first');
    return;
  }
  if ((game.inv.scrap | 0) < 14) {
    flashTip('Need 14 scrap');
    return;
  }
  game.inv.scrap -= 14;
  player.rifleLaser = true;
  document.getElementById('shop-scrap').textContent = game.inv.scrap | 0;
  refreshLaserRow();
  flashTip('Rifle laser sight fitted — tighter aim');
}

function refreshLaserRow() {
  const el = document.getElementById('buy-laser');
  if (!el) return;
  el.innerHTML = player.rifleLaser
    ? '<span>Rifle laser sight</span><span class="sx">owned ✓</span>'
    : '<span>Rifle laser sight · tighter aim</span><span class="sx">14 scrap</span>';
  el.style.opacity = player.rifleLaser ? 0.6 : 1;
}

// Wood fence: cheap deployable bullet cover.
function buyFence() {
  if ((game.inv.wood | 0) < 10) {
    flashTip('Need 10 wood');
    return;
  }
  game.inv.wood -= 10;
  game.inv.fence = (game.inv.fence | 0) + 1;
  flashTip('+1 fence (' + (game.inv.fence | 0) + ' held)  — press G to place');
}

// Throwable grenade (Q).
function buyGrenade() {
  if ((game.inv.scrap | 0) < 8) {
    flashTip('Need 8 scrap');
    return;
  }
  game.inv.scrap -= 8;
  game.inv.grenade = (game.inv.grenade | 0) + 1;
  document.getElementById('shop-scrap').textContent = game.inv.scrap | 0;
  flashTip('+1 grenade (' + (game.inv.grenade | 0) + ' held) — press Q to throw');
}

function dropPlayerFence() {
  if ((game.inv.fence | 0) <= 0) {
    flashTip('No fences — buy at the trade shop (10 wood)');
    return;
  }
  const a = player.angle;
  const fx = player.x + Math.cos(a) * 34;
  const fy = player.y + Math.sin(a) * 34;
  // Deployable walls go in the open, never on foundations / inside a base.
  if (foundationAt(Math.floor(fx / TILE), Math.floor(fy / TILE))) {
    flashTip("Can't deploy a wall on a foundation / inside a base");
    return;
  }
  if (!placeFence(fx, fy, a + Math.PI / 2, OWNER)) {
    flashTip("Can't deploy a wall here");
    return;
  }
  game.inv.fence--;
  flashTip('Fence placed (' + (game.inv.fence | 0) + ' left)');
}

// Hires an ally worker.
function buyWorker() {
  if ((game.inv.scrap | 0) < 100) {
    flashTip('Need 100 scrap');
    return;
  }
  if (typeof spawnPlayerWorker !== 'function') {
    flashTip('Workers unavailable');
    return;
  }
  game.inv.scrap -= 100;
  spawnPlayerWorker();
  document.getElementById('shop-scrap').textContent = game.inv.scrap | 0;
  flashTip('Worker hired — gathers, defends & raids for you');
}

// High-quality metal, used for armored-tier upgrades; buy-only.
function buyHQM() {
  if ((game.inv.scrap | 0) < 12) {
    flashTip('Need 12 scrap');
    return;
  }
  game.inv.scrap -= 12;
  game.inv.hqm = (game.inv.hqm | 0) + 10;
  document.getElementById('shop-scrap').textContent = game.inv.scrap | 0;
  flashTip('+10 HQM (' + (game.inv.hqm | 0) + ' held) — upgrade a metal wall/door to armored');
}

// Facemask / body armor: 3 levels, each tier costs more scrap.
function buyArmor(kind) {
  const cur = (kind === 'head' ? player.facemask : player.bodyArmor) | 0;
  const name = kind === 'head' ? 'Facemask' : 'Body armor';
  if (cur >= 3) {
    flashTip(name + ' maxed (L3)');
    return;
  }
  const cost = ARMOR.cost[cur + 1];
  if ((game.inv.scrap | 0) < cost) {
    flashTip('Need ' + cost + ' scrap');
    return;
  }
  game.inv.scrap -= cost;
  if (kind === 'head') player.facemask = cur + 1;
  else player.bodyArmor = cur + 1;
  document.getElementById('shop-scrap').textContent = game.inv.scrap | 0;
  refreshArmorRows();
  flashTip(name + ' → Level ' + (cur + 1) + (cur + 1 === 3 ? ' (best protection)' : ''));
}

function refreshArmorRows() {
  const faceEl = document.getElementById('buy-facemask');
  const bodyEl = document.getElementById('buy-bodyarmor');
  if (faceEl) {
    const lv = player.facemask | 0;
    faceEl.innerHTML = lv >= 3
      ? '<span>Facemask · L3 head</span><span class="sx">maxed ✓</span>'
      : '<span>Facemask L' + (lv + 1) + ' · head</span><span class="sx">' + ARMOR.cost[lv + 1] + ' scrap</span>';
    faceEl.style.opacity = lv >= 3 ? 0.6 : 1;
  }
  if (bodyEl) {
    const lv = player.bodyArmor | 0;
    bodyEl.innerHTML = lv >= 3
      ? '<span>Body armor · L3 chest</span><span class="sx">maxed ✓</span>'
      : '<span>Body armor L' + (lv + 1) + ' · chest</span><span class="sx">' + ARMOR.cost[lv + 1] + ' scrap</span>';
    bodyEl.style.opacity = lv >= 3 ? 0.6 : 1;
  }
}
