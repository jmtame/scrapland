"use strict";
// DOM HUD: hotbar + build menu, store and shop panels, the leaderboard, and the per-frame
// HUD readouts (resources, play timer, health bar, ammo).

/* ---- hotbar / build-menu icon markup ---- */

const ICONS = {
  tool: '<svg viewBox="0 0 24 24" width="26" height="26"><path d="M4 21 L13 12" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M12 4 q7 0 8 8 q-6 -2 -10 3 z" fill="currentColor"/></svg>',
  pistol: '<svg viewBox="0 0 24 24" width="26" height="26"><path d="M3 7 h14 v3 h-3 v2 h-3 l-1 5 h-4 l1 -5 h-1 z" fill="currentColor"/></svg>',
  rifle: '<svg viewBox="0 0 28 24" width="28" height="24"><path d="M2 9 h22 v2 h-3 l-1 2 h-2 v-2 h-4 l-2 5 h-3 l1 -5 h-6 z" fill="currentColor"/></svg>',
  minigun: '<svg viewBox="0 0 30 24" width="30" height="24"><rect x="2" y="9" width="13" height="6" rx="1" fill="currentColor"/><rect x="14" y="7" width="12" height="2.6" fill="currentColor"/><rect x="14" y="10.7" width="13" height="2.6" fill="currentColor"/><rect x="14" y="14.4" width="12" height="2.6" fill="currentColor"/></svg>',
  rocket: '<svg viewBox="0 0 28 24" width="28" height="24"><rect x="3" y="9" width="15" height="6" rx="1.6" fill="currentColor"/><path d="M18 7.5 l6.5 4.5 -6.5 4.5 z" fill="currentColor"/><path d="M3 15 l-1.5 4.5 4.5 -2.2 z" fill="currentColor"/></svg>',
  build: '<svg viewBox="0 0 24 24" width="26" height="26"><path d="M13 2 l8 4 -2 4 -3 -1.4 -7 12 -3.6 -2.1 7.2 -12 -2.6 -1.2 z" fill="currentColor"/></svg>',
  sniper: '<svg viewBox="0 0 30 24" width="30" height="24"><rect x="2" y="10" width="24" height="2.6" fill="currentColor"/><rect x="9" y="12" width="3" height="5" fill="currentColor"/><circle cx="18" cy="7.5" r="3.2" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="24" y="9.5" width="4" height="3.4" fill="currentColor"/></svg>',
  shotgun: '<svg viewBox="0 0 30 24" width="30" height="24"><rect x="3" y="9" width="20" height="3.2" fill="currentColor"/><rect x="3" y="12.4" width="20" height="3.2" fill="currentColor"/><path d="M5 9 q-3 3 0 6" fill="none" stroke="currentColor" stroke-width="2"/><rect x="22" y="9" width="6" height="6.6" fill="currentColor"/></svg>',
  hmg: '<svg viewBox="0 0 30 24" width="30" height="24"><rect x="2" y="8" width="22" height="6" rx="1" fill="currentColor"/><rect x="22" y="9.4" width="6" height="3.2" fill="currentColor"/><rect x="8" y="14" width="7" height="6" rx="1" fill="currentColor"/><rect x="3" y="6.2" width="13" height="1.8" fill="currentColor"/></svg>'
};

const BPREV = {
  floor: '<svg viewBox="0 0 34 34" width="34" height="34"><rect x="3" y="3" width="28" height="28" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M3 13 h28 M3 22 h28" stroke="currentColor" stroke-width="1.4"/></svg>',
  trifloor: '<svg viewBox="0 0 34 34" width="34" height="34"><path d="M4 30 L4 4 L30 30 Z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M4 18 L17 30 M4 12 L23 30" stroke="currentColor" stroke-width="1.2"/></svg>',
  wall: '<svg viewBox="0 0 34 34" width="34" height="34"><rect x="4" y="4" width="26" height="26" rx="2" fill="currentColor"/></svg>',
  triangle: '<svg viewBox="0 0 34 34" width="34" height="34"><line x1="5" y1="29" x2="29" y2="5" stroke="currentColor" stroke-width="6" stroke-linecap="round"/></svg>',
  door: '<svg viewBox="0 0 34 34" width="34" height="34"><rect x="4" y="4" width="26" height="26" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><rect x="9" y="9" width="16" height="16" rx="1" fill="currentColor"/></svg>',
  box: '<svg viewBox="0 0 34 34" width="34" height="34"><rect x="5" y="5" width="24" height="24" rx="2" fill="currentColor"/><path d="M5 5 L29 29 M29 5 L5 29" stroke="#000" stroke-opacity=".35" stroke-width="2"/></svg>',
  turret: '<svg viewBox="0 0 34 34" width="34" height="34"><circle cx="17" cy="20" r="9" fill="currentColor"/><rect x="15.5" y="3" width="3" height="13" rx="1" fill="currentColor"/></svg>',
  cupboard: '<svg viewBox="0 0 34 34" width="34" height="34"><rect x="6" y="5" width="22" height="24" rx="2" fill="currentColor"/><path d="M17 6 V28" stroke="#000" stroke-opacity=".4" stroke-width="2"/><circle cx="13" cy="17" r="1.4" fill="#000" fill-opacity=".5"/><circle cx="21" cy="17" r="1.4" fill="#000" fill-opacity=".5"/></svg>'
};

const SLOTS = [
  ['tool', 'Tool'], ['pistol', 'Pistol'], ['rifle', 'Rifle'], ['minigun', 'Minigun'],
  ['rocket', 'Rocket'], ['build', 'Build'], ['sniper', 'Sniper'], ['shotgun', 'Shotgun'],
  ['hmg', 'HMG']
];

function buildHotbarDOM() {
  const hb = document.getElementById('hotbar');
  hb.innerHTML = '';
  SLOTS.forEach((d, i) => {
    const el = document.createElement('div');
    el.className = 'slot panel';
    el.innerHTML = '<span class="key">' + (i + 1) + '</span><span class="gi">' + ICONS[d[0]] +
      '</span><span class="nm">' + d[1] + '</span>';
    el.addEventListener('mousedown', e => { e.stopPropagation(); });
    el.addEventListener('click', () => selectSlot(i));
    hb.appendChild(el);
  });
}

function buildMenuDOM() {
  const bm = document.getElementById('buildmenu');
  bm.innerHTML = '';
  const hint = document.createElement('div');
  hint.className = 'bhint';
  hint.innerHTML = '<b>Q</b>/scroll: piece &nbsp; <b>R</b>: rotate &nbsp; <b>U</b>: upgrade→metal &nbsp; <b>L</b>: lock &nbsp; <b>RMB</b>: remove';
  bm.appendChild(hint);
  const row = document.createElement('div');
  row.className = 'brow';
  PIECES.forEach(key => {
    const def = BUILD[key];
    const el = document.createElement('div');
    el.className = 'bpiece';
    el.dataset.k = key;
    let cost = '';
    for (const c in def.cost) cost += '<span><b>' + def.cost[c] + '</b> ' + c + '</span>';
    el.innerHTML = '<div class="pv">' + BPREV[key] + '</div><div class="bn">' + def.name +
      '</div><div class="cost">' + cost + '</div>';
    el.addEventListener('mousedown', e => { e.stopPropagation(); });
    el.addEventListener('click', () => {
      game.buildPiece = key;
      refreshBuildMenu();
    });
    row.appendChild(el);
  });
  bm.appendChild(row);
}

function buildStoreDOM() {
  const r = document.getElementById('store-rows');
  r.innerHTML = '';
  for (const kind of ['wood', 'stone', 'metal', 'scrap']) {
    const row = document.createElement('div');
    row.className = 'store-row';
    row.innerHTML = '<button data-k="' + kind + '" data-a="-9999">◀all</button><button data-k="' + kind + '" data-a="-0.1">◀10%</button>'
      + '<span class="sk">' + kind + ' <b id="st-' + kind + '">0</b></span>'
      + '<button data-k="' + kind + '" data-a="0.1">10%▶</button><button data-k="' + kind + '" data-a="9999">all▶</button>'
      + '<span class="iv">bag <b id="inv-' + kind + '">0</b></span>';
    r.appendChild(row);
  }
  r.querySelectorAll('button').forEach(b => {
    b.addEventListener('mousedown', e => e.stopPropagation());
    b.addEventListener('click', () => storeMove(b.dataset.k, +b.dataset.a));
  });
  document.getElementById('store-close').addEventListener('click', closeStore);
}

function buildShopDOM() {
  const tr = document.getElementById('shop-trades');
  tr.innerHTML = '';
  SHOP.trades.forEach((t, i) => {
    const give = Object.entries(t.give).map(([k, v]) => v + ' ' + k).join(' + ');
    const b = document.createElement('div');
    b.className = 'shop-row';
    b.innerHTML = '<span>' + give + '</span><span class="sx">' + t.get + ' scrap</span>';
    b.addEventListener('mousedown', e => e.stopPropagation());
    b.addEventListener('click', () => doTrade(i));
    tr.appendChild(b);
  });

  const by = document.getElementById('shop-buys');
  by.innerHTML = '';
  SHOP.buys.forEach((bd, i) => {
    const b = document.createElement('div');
    b.className = 'shop-row';
    b.id = 'shopbuy-' + i;
    b.addEventListener('mousedown', e => e.stopPropagation());
    b.addEventListener('click', () => doBuy(i));
    by.appendChild(b);
  });
  refreshShopBuys();

  // Jackhammer: permanent gather upgrade.
  const jh = document.createElement('div');
  jh.className = 'shop-row';
  jh.id = 'buy-jack';
  jh.addEventListener('mousedown', e => e.stopPropagation());
  jh.addEventListener('click', buyJackhammer);
  by.appendChild(jh);
  refreshJackRow();

  // Rifle laser-sight upgrade.
  const ls = document.createElement('div');
  ls.className = 'shop-row';
  ls.id = 'buy-laser';
  ls.addEventListener('mousedown', e => e.stopPropagation());
  ls.addEventListener('click', buyRifleLaser);
  by.appendChild(ls);
  refreshLaserRow();

  // Wood fence (placeable cover).
  const fc = document.createElement('div');
  fc.className = 'shop-row';
  fc.innerHTML = '<span>Wood fence · cover (G)</span><span class="sx">10 wood</span>';
  fc.addEventListener('mousedown', e => e.stopPropagation());
  fc.addEventListener('click', buyFence);
  by.appendChild(fc);

  // Grenade.
  const gr = document.createElement('div');
  gr.className = 'shop-row';
  gr.innerHTML = '<span>Grenade · throw (Q)</span><span class="sx">8 scrap</span>';
  gr.addEventListener('mousedown', e => e.stopPropagation());
  gr.addEventListener('click', buyGrenade);
  by.appendChild(gr);

  // Supply signal (targeted airdrop).
  const sg = document.createElement('div');
  sg.className = 'shop-row';
  sg.id = 'buy-signal';
  sg.addEventListener('mousedown', e => e.stopPropagation());
  sg.addEventListener('click', buySignal);
  by.appendChild(sg);
  refreshSignalRow();

  // High-quality metal (armored wall upgrades).
  const hq = document.createElement('div');
  hq.className = 'shop-row';
  hq.innerHTML = '<span>+10 HQM · armored walls</span><span class="sx">12 scrap</span>';
  hq.addEventListener('mousedown', e => e.stopPropagation());
  hq.addEventListener('click', buyHQM);
  by.appendChild(hq);

  // Facemask (head protection).
  const fm = document.createElement('div');
  fm.className = 'shop-row';
  fm.id = 'buy-facemask';
  fm.addEventListener('mousedown', e => e.stopPropagation());
  fm.addEventListener('click', () => buyArmor('head'));
  by.appendChild(fm);

  // Body armor (chest protection).
  const ba = document.createElement('div');
  ba.className = 'shop-row';
  ba.id = 'buy-bodyarmor';
  ba.addEventListener('mousedown', e => e.stopPropagation());
  ba.addEventListener('click', () => buyArmor('body'));
  by.appendChild(ba);
  refreshArmorRows();

  // Hire a worker.
  const wk = document.createElement('div');
  wk.className = 'shop-row';
  wk.innerHTML = '<span>Hire worker · gather/fight</span><span class="sx">100 scrap</span>';
  wk.addEventListener('mousedown', e => e.stopPropagation());
  wk.addEventListener('click', buyWorker);
  by.appendChild(wk);

  document.getElementById('shop-close').addEventListener('click', closeShop);
}

function refreshJackRow() {
  const jh = document.getElementById('buy-jack');
  if (!jh) return;
  jh.innerHTML = game.jackhammer
    ? '<span>Jackhammer</span><span class="sx">owned ✓</span>'
    : '<span>Jackhammer · 3× gather</span><span class="sx">30 scrap</span>';
  jh.style.opacity = game.jackhammer ? 0.6 : 1;
}

function refreshHotbar() {
  document.querySelectorAll('#hotbar .slot').forEach((s, i) => {
    s.classList.toggle('sel', i === game.slot);
    if (weaponOf(i)) s.style.opacity = ownsSlot(i) ? 1 : 0.35;   // unowned weapon slots stay dimmed until bought at the shop
  });
  document.getElementById('ammo').classList.toggle('hidden', !curWeapon());
  document.getElementById('buildmenu').classList.toggle('hidden', game.slot !== 5);
  refreshBuildMenu();
}

function refreshBuildMenu() {
  document.querySelectorAll('#buildmenu .bpiece').forEach(el => {
    const k = el.dataset.k;
    el.classList.toggle('sel', k === game.buildPiece);
    el.classList.toggle('cant', !canAfford(BUILD[k].cost));
  });
}

function fmtK(n) {
  n = Math.round(n || 0);
  if (n >= 1000) return (n / 1000).toFixed(n >= 10000 ? 0 : 1) + 'k';
  return '' + n;
}

let lbT = 0;   // leaderboard refresh throttle timer

function updateLeaderboard(dt) {
  // Throttled to ~2.5 refreshes per second.
  lbT -= dt || 0;
  if (lbT > 0) return;
  lbT = 0.4;
  const rows = [{
    id: OWNER, name: 'You', col: '#c4d66a', alive: !player.dead, kills: (game.playerKills || 0),
    res: (game.inv.wood + game.inv.stone + game.inv.metal), scrap: (game.inv.scrap | 0), you: true
  }];

  // Aggregate each base's units (primary + workers) into one row.
  const byId = {};
  for (const b of game.enemies) {
    if (b.ally) continue;   // the player's allied workers count under "You"
    let r = byId[b.id];
    if (!r) {
      r = byId[b.id] = { id: b.id, name: 'Base ' + (b.id + 1), col: b.col, alive: false, kills: 0, res: 0, scrap: 0 };
    }
    r.kills += (b.kills || 0);
    r.scrap += (b.scrap || 0);
    r.res += (b.inv.wood + b.inv.stone + b.inv.metal);
    if (!b.eliminated) r.alive = true;
  }
  for (const id in byId) {
    const r = byId[id];
    const rep = game.enemies.find(e => e.id === +id && e.primary) || game.enemies.find(e => e.id === +id);
    const box = rep && game.deploys.get(rep.boxKey);
    const tc = rep && game.deploys.get(rep.tcKey);
    if (box && box.store) r.res += box.store.wood + box.store.stone + box.store.metal;
    if (tc && tc.store) {
      // Scrap stored in the Tool Cupboard counts for the team.
      r.res += tc.store.wood + tc.store.stone + tc.store.metal;
      r.scrap += (tc.store.scrap || 0);
    }
    r.tier = rep && rep.hard ? 'HARD' : (rep && rep.weak ? 'EASY' : '');   // difficulty badge
    rows.push(r);
  }

  // The bounty goes on the kill leader (excluding the player).
  let lead = null;
  for (const r of rows) {
    if (r.you) continue;
    if (r.alive && (!lead || r.kills > lead.kills)) lead = { id: r.id, kills: r.kills };
  }
  game.bounty = (lead && lead.kills > 0) ? lead.id : null;

  rows.sort((a, b) => (b.scrap - a.scrap) || (b.kills - a.kills) || (b.res - a.res));   // most scrap at the top
  document.getElementById('lb-rows').innerHTML = rows.map(r =>
    '<div class="lb-row' + (r.alive ? '' : ' lb-dead') + ((!r.you && r.id === game.bounty) ? ' lb-bounty' : '') +
    '"><span class="lb-dot" style="background:' + r.col + '"></span>' +
    '<span class="lb-name">' + ((!r.you && r.id === game.bounty) ? '★ ' : '') + r.name + '</span>' +
    (r.tier ? ('<span class="lb-tier ' + (r.tier === 'HARD' ? 'lb-hard' : 'lb-easy') + '">' + r.tier + '</span>') : '') +
    '<span class="lb-k">' + r.kills + '</span>' +
    '<span class="lb-res"><span class="ic scrap"></span>' + fmtK(r.scrap) + '</span></div>').join('');
}

function updateHUD() {
  document.getElementById('r-wood').textContent = game.inv.wood | 0;
  document.getElementById('r-stone').textContent = game.inv.stone | 0;
  document.getElementById('r-metal').textContent = game.inv.metal | 0;
  document.getElementById('r-scrap').textContent = game.inv.scrap | 0;
  const playtimeEl = document.getElementById('playtime');
  if (playtimeEl) {
    // Elapsed play time (mm:ss); advances faster at 2x/5x sim speed.
    const tt = Math.max(0, game.t | 0);
    playtimeEl.textContent = (tt / 60 | 0) + ':' + ('0' + (tt % 60)).slice(-2);
  }
  updateLeaderboard(game.dt);
  const hp = clamp(player.health / player.maxhp, 0, 1);
  const fill = document.getElementById('hpfill');
  fill.style.width = (hp * 100) + '%';
  fill.style.background = hp > 0.5 ? 'linear-gradient(90deg,#9ccb5a,#6fae3e)'
    : hp > 0.25 ? 'linear-gradient(90deg,#e0c14e,#c9962f)' : 'linear-gradient(90deg,#d76a4a,#b23b2a)';
  document.getElementById('hptxt').textContent = Math.ceil(player.health);
  const w = curWeapon();
  if (w) {
    document.getElementById('ammo-mag').innerHTML = w.ammo + ' <small>/ ' + w.reserve + '</small>';
    let reloadLabel = w.reloading > 0 ? 'RELOADING' : (w.ammo === 0 ? 'PRESS R' : '');
    const mg = WEAPONS.minigun;
    if (w === mg && mg.spin > 0 && mg.spin < mg.windup) reloadLabel = 'SPINNING…';
    document.getElementById('ammo-rl').textContent = reloadLabel;
  }
}
