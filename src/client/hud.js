// DOM HUD: inventory, leaderboard, hotbar, build menu, ammo, vitals, modals.
import { WEAPONS, PIECES, BUILD, SHOP, ARMOR, OWNER, TTIER } from '../sim/config.js';
import { selectSlot, curWeapon, doTrade, doBuy, buyMisc, storeMove } from '../sim/player.js';

const ICONS = {
  tool: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20l7-7"/><path d="M14 4l6 6-5 5-6-6z" fill="currentColor"/></svg>',
  pistol: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 8h16v4h-6l-1 5h-4l1-5H6a3 3 0 0 1-3-3z"/></svg>',
  rifle: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1 11h18l4-2v3l-4 1h-5l-1 5h-3l1-5H1z"/></svg>',
  minigun: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="7" width="14" height="3"/><rect x="2" y="11" width="14" height="3"/><rect x="2" y="15" width="14" height="3"/><rect x="15" y="6" width="6" height="13" rx="2"/></svg>',
  rocket: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 10h13l5 2-5 2H2z"/><path d="M20 8l3 4-3 4z"/></svg>',
  build: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21l4-12 6 6-10 6z" fill="currentColor"/><path d="M13 5l6 6"/></svg>',
  sniper: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="1" y="10" width="20" height="3"/><rect x="6" y="6" width="6" height="3" rx="1"/><path d="M21 9l2 2-2 2z"/></svg>',
  shotgun: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1 10h17v5H8l-2 4H3l2-4H1z"/></svg>',
  hmg: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="1" y="9" width="19" height="5"/><rect x="6" y="14" width="6" height="6"/><path d="M20 9l3 2.5-3 2.5z"/></svg>',
};
const SLOTS = [
  ['Tool', 'tool'], ['Pistol', 'pistol'], ['Rifle', 'rifle'], ['Minigun', 'minigun'], ['Rocket', 'rocket'],
  ['Build', 'build'], ['Sniper', 'sniper'], ['Shotgun', 'shotgun'], ['HMG', 'hmg'],
];
const SLOT_WEAPON = { 1: 'pistol', 2: 'rifle', 3: 'minigun', 4: 'rocket', 6: 'sniper', 7: 'shotgun', 8: 'hmg' };
const BPREV = {
  floor: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="16" height="16" rx="2"/></svg>',
  wall: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="10" y="3" width="4" height="18" rx="1"/></svg>',
  door: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="9" y="3" width="6" height="18" rx="1"/><circle cx="13" cy="12" r="1.4" fill="#15130e"/></svg>',
  turret: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="13" r="6"/><rect x="12" y="11" width="10" height="4" rx="1"/></svg>',
  cupboard: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="3" width="14" height="18" rx="2"/><rect x="11.4" y="5" width="1.2" height="14" fill="#15130e"/></svg>',
};

export function makeHud(S, view) {
  const $ = (id) => document.getElementById(id);
  const hotbar = $('hotbar');
  SLOTS.forEach(([name, icon], i) => {
    const d = document.createElement('div');
    d.className = 'slot';
    d.innerHTML = `<span class="key">${i + 1}</span>${ICONS[icon]}<span class="nm">${name}</span>`;
    d.addEventListener('mousedown', (e) => { e.stopPropagation(); selectSlot(S, i); });
    hotbar.appendChild(d);
  });
  const bpieces = $('bpieces');
  for (const p of PIECES) {
    const d = document.createElement('div');
    d.className = 'bpiece';
    d.dataset.piece = p;
    const cost = Object.entries(BUILD[p].cost).map(([k, v]) => v + ' ' + k).join(' + ');
    d.innerHTML = `${BPREV[p]}${BUILD[p].name}<br><span style="opacity:.7">${cost}</span>`;
    d.addEventListener('mousedown', (e) => { e.stopPropagation(); S.buildPiece = p; });
    bpieces.appendChild(d);
  }

  // top buttons
  const btn = (id, fn) => $(id).addEventListener('mousedown', (e) => { e.stopPropagation(); fn($(id)); });
  btn('mapbtn', (b) => { view.godView = !view.godView; b.classList.toggle('on', view.godView); b.textContent = view.godView ? 'Exit Map' : 'Map View'; });
  btn('ghostbtn', (b) => { S.ghost = !S.ghost; b.classList.toggle('on', S.ghost); b.textContent = S.ghost ? 'Ghost: ON' : 'Ghost'; });
  btn('rocketbtn', (b) => { S.rapidRockets = !S.rapidRockets; b.classList.toggle('on', S.rapidRockets); b.textContent = S.rapidRockets ? 'Rockets: ON' : 'Rapid Rockets'; });
  btn('refillbtn', () => window.__refillAll());
  btn('boosthardbtn', () => window.__boostHard());
  btn('debugbtn', (b) => { view.debugPaths = !view.debugPaths; b.classList.toggle('on', view.debugPaths); b.textContent = view.debugPaths ? 'Debug: ON' : 'Debug paths'; });
  $('ghostbtn').classList.add('on');
  $('ghostbtn').textContent = 'Ghost: ON';
  $('helpToggle').addEventListener('click', () => {
    const h = $('help');
    h.classList.toggle('min');
    $('helpToggle').textContent = h.classList.contains('min') ? 'show' : 'hide';
  });
  document.querySelectorAll('.spdbtn').forEach((b) => {
    b.addEventListener('mousedown', (e) => {
      e.stopPropagation();
      view.speed = +b.dataset.spd;
      document.querySelectorAll('.spdbtn').forEach((o) => o.classList.toggle('on', o === b));
    });
  });

  let lbT = 0;
  let lastStore = null, lastShop = false;

  function buildShop() {
    const el = $('shop');
    let html = '<h3>Trade Shop</h3><div style="margin-bottom:8px">Scrap: <b id="shop-scrap">0</b></div><div class="cols"><div class="col"><h5>SELL → SCRAP</h5>';
    SHOP.trades.forEach(([k, amt, sc], i) => {
      html += `<div class="trow"><span>${amt} ${k} → ${sc} scrap</span><button data-trade="${i}">Sell</button></div>`;
    });
    html += '</div><div class="col"><h5>BUY WEAPONS + GEAR</h5>';
    for (const k in SHOP.buys) {
      html += `<div class="trow"><span id="shopown-${k}">${WEAPONS[k].name} <small>+${SHOP.buys[k].ammo} ammo</small></span><button data-buy="${k}">${SHOP.buys[k].cost} scrap</button></div>`;
    }
    html += `<div class="trow"><span>Jackhammer <small>3× gather</small></span><button data-misc="jackhammer">${SHOP.jackhammer} scrap</button></div>`;
    html += `<div class="trow"><span>Rifle laser sight</span><button data-misc="laser">${SHOP.laser} scrap</button></div>`;
    html += `<div class="trow"><span>Wood fence (G)</span><button data-misc="fence">${SHOP.fenceWood} wood</button></div>`;
    html += `<div class="trow"><span>Grenade (Q)</span><button data-misc="grenade">${SHOP.grenade} scrap</button></div>`;
    html += `<div class="trow"><span>Supply signal (T)</span><button data-misc="signal">${SHOP.signal} scrap</button></div>`;
    html += `<div class="trow"><span>+10 HQM</span><button data-misc="hqm">${SHOP.hqm.cost} scrap</button></div>`;
    html += `<div class="trow"><span id="fm-lbl">Facemask</span><button data-misc="facemask">buy</button></div>`;
    html += `<div class="trow"><span id="ba-lbl">Body armor</span><button data-misc="bodyArmor">buy</button></div>`;
    html += `<div class="trow"><span>Hire worker</span><button data-misc="worker">${SHOP.worker} scrap</button></div>`;
    html += '</div></div><button class="close">Close (E / Esc)</button>';
    el.innerHTML = html;
    el.querySelectorAll('button').forEach((b) => {
      b.addEventListener('mousedown', (e) => e.stopPropagation());
      b.addEventListener('click', () => {
        if (b.dataset.trade !== undefined) doTrade(S, +b.dataset.trade);
        else if (b.dataset.buy) doBuy(S, b.dataset.buy);
        else if (b.dataset.misc) buyMisc(S, b.dataset.misc);
        else { S.shopOpen = false; el.classList.add('hidden'); }
        refreshShop();
      });
    });
    refreshShop();
  }

  function refreshShop() {
    const sc = $('shop-scrap');
    if (sc) sc.textContent = S.inv.scrap | 0;
    const fm = $('fm-lbl');
    if (fm) {
      const next = S.player.facemask + 1;
      fm.textContent = next <= 3 ? `Facemask L${next} (${ARMOR.cost[next]} scrap)` : 'Facemask MAX';
    }
    const ba = $('ba-lbl');
    if (ba) {
      const next = S.player.bodyArmor + 1;
      ba.textContent = next <= 3 ? `Body armor L${next} (${ARMOR.cost[next]} scrap)` : 'Body armor MAX';
    }
    for (const k in SHOP.buys) {
      const own = $('shopown-' + k);
      if (own) own.style.color = S.owned[k] ? 'var(--accent2)' : 'var(--ink)';
    }
  }

  function buildStore(key) {
    const el = $('store');
    const d = S.deploys.get(key);
    if (!d) return;
    let html = `<h3>${d.type === 'cupboard' ? 'Tool Cupboard' : 'Storage'}</h3>`;
    for (const k of ['wood', 'stone', 'metal', 'scrap']) {
      html += `<div class="strow"><span class="ic ${k}"></span>
        <button data-mv="${k},-9999">◀ all</button><button data-mv="${k},-0.1">◀ 10%</button>
        <span class="cnt"><b id="st-${k}">0</b> store · bag <b id="inv-${k}">0</b></span>
        <button data-mv="${k},0.1">10% ▶</button><button data-mv="${k},9999">all ▶</button>
        <span></span></div>`;
    }
    html += '<button class="close">Close (E / Esc)</button>';
    el.innerHTML = html;
    el.querySelectorAll('button').forEach((b) => {
      b.addEventListener('mousedown', (e) => e.stopPropagation());
      b.addEventListener('click', () => {
        if (b.dataset.mv) {
          const [k, amt] = b.dataset.mv.split(',');
          storeMove(S, k, +amt);
          refreshStore();
        } else { S.storeOpen = null; el.classList.add('hidden'); }
      });
    });
    refreshStore();
  }
  function refreshStore() {
    const d = S.deploys.get(S.storeOpen);
    if (!d || !d.store) return;
    for (const k of ['wood', 'stone', 'metal', 'scrap']) {
      const a = $('st-' + k), b = $('inv-' + k);
      if (a) a.textContent = d.store[k] | 0;
      if (b) b.textContent = S.inv[k] | 0;
    }
  }

  return {
    closeModals() {
      $('store').classList.add('hidden');
      $('shop').classList.add('hidden');
    },
    update() {
      $('r-wood').textContent = S.inv.wood | 0;
      $('r-stone').textContent = S.inv.stone | 0;
      $('r-metal').textContent = S.inv.metal | 0;
      $('r-scrap').textContent = S.inv.scrap | 0;
      const mm = Math.floor(S.t / 60), ss = Math.floor(S.t % 60);
      $('playtime').textContent = mm + ':' + String(ss).padStart(2, '0');
      // hp
      const p = S.player;
      const f = Math.max(0, p.health / p.maxhp);
      const fill = $('hpfill');
      fill.style.width = (f * 100) + '%';
      fill.style.background = f > 0.5 ? 'linear-gradient(180deg,#9ccb5a,#6fae3e)' : f > 0.25 ? 'linear-gradient(180deg,#e0c14e,#c9962f)' : 'linear-gradient(180deg,#d76a4a,#b23b2a)';
      $('hptxt').textContent = Math.ceil(Math.max(0, p.health));
      // hotbar
      const slots = hotbar.children;
      for (let i = 0; i < slots.length; i++) {
        slots[i].classList.toggle('sel', S.slot === i);
        const wk = SLOT_WEAPON[i];
        slots[i].classList.toggle('dim', !!wk && !S.owned[wk]);
      }
      // build menu
      $('buildmenu').classList.toggle('hidden', !S.buildMode);
      if (S.buildMode) {
        for (const d of bpieces.children) {
          d.classList.toggle('sel', d.dataset.piece === S.buildPiece);
          let can = true;
          for (const k in BUILD[d.dataset.piece].cost) if ((S.inv[k] || 0) < BUILD[d.dataset.piece].cost[k]) can = false;
          d.classList.toggle('cant', !can);
        }
      }
      // ammo
      const wk = curWeapon(S);
      $('ammo').classList.toggle('hidden', !wk);
      if (wk) {
        const w = S.weapons[wk];
        $('ammo-mag').innerHTML = `${w.ammo} <small>/ ${w.reserve}</small>`;
        const mg = wk === 'minigun' && w.spin > 0 && w.spin < WEAPONS.minigun.windup;
        $('ammo-rl').textContent = w.reloading > 0 ? 'RELOADING' : mg ? 'SPINNING…' : w.ammo === 0 ? 'PRESS R' : '';
      }
      // tip
      const tip = $('tip');
      if (S.tip) { tip.textContent = S.tip.text; tip.classList.add('show'); }
      else tip.classList.remove('show');
      // modals
      if (S.shopOpen !== lastShop) {
        lastShop = S.shopOpen;
        $('shop').classList.toggle('hidden', !S.shopOpen);
        if (S.shopOpen) buildShop();
      } else if (S.shopOpen && S.tick % 30 === 0) refreshShop();
      if (S.storeOpen !== lastStore) {
        lastStore = S.storeOpen;
        $('store').classList.toggle('hidden', !S.storeOpen);
        if (S.storeOpen) buildStore(S.storeOpen);
      } else if (S.storeOpen && S.tick % 30 === 0) refreshStore();
      // leaderboard (0.4 s throttle)
      if (S.t - lbT > 0.4) {
        lbT = S.t;
        updateLeaderboard();
      }
    },
  };

  function updateLeaderboard() {
    const rows = [];
    rows.push({
      id: OWNER, name: 'You', col: '#c4d66a', alive: !S.player.dead, you: true,
      kills: S.playerKills, scrap: S.inv.scrap | 0, res: (S.inv.wood + S.inv.stone + S.inv.metal) | 0, tier: '',
    });
    for (const team of S.teams) {
      let kills = 0, scrap = 0, res = 0, alive = false;
      for (const u of S.units) {
        if (u.owner !== team.owner) continue;
        kills += u.kills; scrap += u.scrap;
        res += u.inv.wood + u.inv.stone + u.inv.metal;
        if (!u.eliminated) alive = true;
      }
      const rec = team.bases.find((r) => !r.dead);
      if (rec) {
        const tc = S.deploys.get(rec.tcKey);
        if (tc && tc.store) { res += tc.store.wood + tc.store.stone + tc.store.metal; scrap += tc.store.scrap; }
      }
      rows.push({
        id: team.id, name: 'Base ' + (team.id + 1), col: team.col, alive: alive && !team.eliminated,
        kills, scrap: scrap | 0, res: res | 0, tier: team.hard ? 'HARD' : team.weak ? 'EASY' : '',
      });
    }
    let bounty = null, bk = 0;
    for (const r of rows) if (!r.you && r.alive && r.kills > bk) { bk = r.kills; bounty = r.id; }
    rows.sort((a, b) => b.scrap - a.scrap || b.kills - a.kills || b.res - a.res);
    const fmtK = (n) => n >= 10000 ? (n / 1000 | 0) + 'k' : n >= 1000 ? (n / 1000).toFixed(1) + 'k' : n;
    $('lb-rows').innerHTML = rows.map((r) => `
      <div class="lbr ${r.alive ? '' : 'dead'} ${r.id === bounty ? 'lb-bounty' : ''}">
        <span class="dot" style="background:${r.col}"></span>
        <span class="nm">${r.id === bounty ? '★ ' : ''}${r.name}</span>
        ${r.tier ? `<span class="pill ${r.tier.toLowerCase()}">${r.tier}</span>` : ''}
        <span>${r.kills}</span><span style="color:var(--ink-dim)">${fmtK(r.scrap)}</span><span style="color:var(--ink-dim)">${fmtK(r.res)}</span>
      </div>`).join('');
  }
}
