"use strict";
// Boot/init, the requestAnimationFrame game loop (with headless test mode and sim speed-up),
// and the window.__testAPI__ bridge that the automated test suite drives.

function loop(now) {
  // Clamp dt to [0, 0.033]: the lower bound guards against clock skew handing the sim a
  // negative dt and corrupting it into NaN.
  game.dt = Math.min(0.033, Math.max(0, (now - game.last) / 1000));
  game.last = now;
  // HEADLESS TEST MODE: the harness drives the sim via __testAPI__.step() only; the rAF
  // auto-loop must NOT also advance update() with real-time dt, because that interleaves
  // between awaited test calls and makes matches non-deterministic. Keep the frame pump
  // alive (so the loop resumes if re-enabled) but skip update/render.
  if (game.loopOff) {
    requestAnimationFrame(loop);
    return;
  }
  // Speed-up: run the sim N sub-steps per frame at a stable dt (2x/5x advance faster
  // without tunneling); render once.
  const steps = (game.speed || 1);
  for (let s = 0; s < steps; s++) {
    game.t += game.dt;
    update(game.dt);
  }
  render();
  updateHUD();
  requestAnimationFrame(loop);
}

/* ===================== TEST API — window.__testAPI__ =====================
   First-class in-game harness so automated tests inspect state and issue high-level
   actions instead of poking internals. Playwright/Puppeteer is only the execution shell;
   screenshots validate just what the player would actually see. Deterministic via a
   seeded RNG. */
(function () {
  function mulberry32(a) {
    return function () {
      a |= 0;
      a = a + 0x6D2B79F5 | 0;
      let t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }

  const API = {
    // ---- determinism ----
    seed(n) {
      Math.random = mulberry32((n >>> 0) || 1);
      return n;
    },
    unseed() {
      delete Math.random;
    },

    // ---- deterministic world reset ----
    reset(seed) {
      if (seed !== undefined) API.seed(seed);
      for (const k of ['resources', 'animals', 'barrels', 'dummies', 'enemies', 'fences', 'raids',
                       'loot', 'bullets', 'rockets', 'particles', 'satchels', 'grenades', 'scorch',
                       'blasts', 'floats', 'elims', 'transports', 'footprints', 'convoys']) {
        if (Array.isArray(game[k])) game[k].length = 0;
      }
      for (const k of ['structures', 'walls', 'deploys']) {
        if (game[k] && game[k].clear) game[k].clear();   // buildWorld appends, so clear first or entities double
      }
      game.teamBases = {};
      game.plane = null;
      game.airdrop = null;
      game.airdropT = 150;
      game.aggressor = -1;
      game.aggressorOwner = null;
      game.aggroT = 0;
      game._breachT = {};
      game.trains = [];
      game.trainT = undefined;
      game.crossings = [];
      game.fireflies = null;
      game.clouds = null;
      game.footprints = [];
      game.convoys = [];
      game.convoyT = undefined;
      game.convoyRoad = null;
      game.t = 0;
      buildWorld();
      selectSlot(0);
      return API.snapshot();
    },

    // ---- headless time control (drives update(); no rAF, no draw) ----
    step(seconds, dt) {
      dt = dt || 1 / 60;
      const n = Math.max(1, Math.round(seconds / dt));
      for (let i = 0; i < n; i++) {
        game.t += dt;
        update(dt);
      }
      return n;
    },
    stepRender(seconds, dt) {
      dt = dt || 1 / 60;
      const n = Math.max(1, Math.round(seconds / dt));
      for (let i = 0; i < n; i++) {
        game.t += dt;
        update(dt);
        render();
      }
      return n;
    },
    tick(dt) {
      dt = dt || 1 / 60;
      game.t += dt;
      update(dt);
    },

    // ---- JSON-safe state snapshots ----
    snapshot() {
      return {
        t: +game.t.toFixed(2), zoom: game.zoom, godView: !!game.godView,
        player: {
          x: Math.round(player.x), y: Math.round(player.y), hp: Math.round(player.health),
          dead: !!player.dead, slot: game.slot, inCopter: !!player.inCopter,
          owned: Object.assign({}, game.owned)
        },
        inv: Object.assign({}, game.inv),
        weapons: Object.fromEntries(Object.keys(WEAPONS).map(k => [k, { ammo: WEAPONS[k].ammo, reserve: WEAPONS[k].reserve }])),
        weather: { mode: game.weather.mode, rain: +game.weather.rain.toFixed(3), timer: +game.weather.timer.toFixed(2) },
        counts: {
          structures: game.structures.size, walls: game.walls.size, deploys: game.deploys.size,
          loot: game.loot.length, bullets: game.bullets.length
        },
        enemies: game.enemies.filter(b => !b.eliminated).map(b => ({
          id: b.id, owner: b.owner, primary: !!b.primary, ally: !!b.ally, hard: !!b.hard, weak: !!b.weak,
          x: Math.round(b.x), y: Math.round(b.y), hx: Math.round(b.hx), hy: Math.round(b.hy),
          hp: Math.round(b.hp), state: b.state, dead: !!b.dead, flying: !!b.flying,
          blocked: !!b._blocked, stuck: +(b._stuck || 0).toFixed(2),
          rockets: b.rockets | 0, scrap: b.scrap | 0, inv: Object.assign({}, b.inv)
        })),
        airdrop: game.airdrop ? {
          x: Math.round(game.airdrop.x), y: Math.round(game.airdrop.y), gy: Math.round(game.airdrop.gy),
          fall: +game.airdrop.fall.toFixed(3), hp: game.airdrop.hp, loot: game.airdrop.loot.map(l => l[0])
        } : null,
        plane: game.plane ? { x: Math.round(game.plane.x), released: !!game.plane.released } : null,
        airdropT: +game.airdropT.toFixed(1),
        copters: {
          player: game.copter
            ? { x: Math.round(game.copter.x), y: Math.round(game.copter.y), destroyed: !!game.copter.destroyed }
            : null,
          enemy: game.enemies.filter(b => b.copter && !b.eliminated).map(b => ({
            owner: b.owner, x: Math.round(b.copter.x), y: Math.round(b.copter.y), destroyed: !!b.copter.destroyed
          }))
        }
      };
    },

    // ---- accessors / escape hatches ----
    bots() { return game.enemies.filter(b => !b.eliminated); },
    bot(pred) { return game.enemies.find(pred); },
    maxStuckOver(seconds, dt) {
      dt = dt || 1 / 60;
      const n = Math.max(1, Math.round(seconds / dt));
      let mx = 0;
      for (let i = 0; i < n; i++) {
        game.t += dt;
        update(dt);
        for (const b of game.enemies) {
          if (!b.eliminated && b.state !== 'raid') mx = Math.max(mx, b._stuck || 0);
        }
      }
      return +mx.toFixed(2);
    },
    raw() { return { game, player, WEAPONS, mouse }; },   // direct refs (top-level consts aren't on window)
    get(path) {
      const ks = path.split('.');
      const roots = { game, player, WEAPONS, mouse, COL, BUILD, WORLD, PIECES };
      let o = (ks[0] in roots) ? roots[ks[0]] : window[ks[0]];
      for (let i = 1; i < ks.length; i++) {
        o = o && o[ks[i]];
      }
      return o;
    },
    set(path, val) {
      const ks = path.split('.');
      const last = ks.pop();
      const roots = { game, player, WEAPONS, mouse };
      let o = (ks[0] in roots) ? roots[ks[0]] : window[ks[0]];
      for (let i = 1; i < ks.length; i++) {
        o = o && o[ks[i]];
      }
      if (o) o[last] = val;
      return val;
    },
    call(name, ...args) { return (typeof window[name] === 'function') ? window[name](...args) : undefined; },

    // ---- high-level input simulation ----
    input(action, a) {
      a = a || {};
      switch (action) {
        case 'move':
          player.x = a.x;
          player.y = a.y;
          break;
        case 'aimAt':
          player.angle = Math.atan2(a.y - player.y, a.x - player.x);
          break;
        case 'slot':
          selectSlot(a.slot);
          break;
        case 'fireAt': {
          player.angle = Math.atan2(a.y - player.y, a.x - player.x);
          const m = screenToWorld;
          if (typeof fire === 'function') fire();
          break;
        }
        case 'spawnAirdrop':
          spawnAirdrop();
          break;
        case 'refill':
          if (typeof refillAll === 'function') refillAll();
          break;
        case 'godView':
          game.godView = !!a.on;
          break;
        default:
          return { error: 'unknown action ' + action };
      }
      return API.snapshot();
    }
  };

  window.__testAPI__ = API;
})();

function init() {
  resize();
  game.seed = (Math.random() * 1e9) >>> 0;   // pick & lock a seed: the game is reproducible and the seed can be shown
  if (window.__testAPI__ && window.__testAPI__.seed) window.__testAPI__.seed(game.seed);
  game.ghost = true;   // the main player defaults to ghost (observer) mode
  {
    // Reflect the default ghost state on the button.
    const gb = document.getElementById('ghostbtn');
    if (gb) {
      gb.classList.add('on');
      gb.textContent = 'Ghost: ON';
    }
  }
  {
    // Show the seed in the Guide panel.
    const sv = document.getElementById('seedval');
    if (sv) sv.textContent = game.seed;
  }
  buildWorld();
  buildHotbarDOM();
  buildMenuDOM();
  buildStoreDOM();
  buildShopDOM();
  selectSlot(0);
  updateHUD();
  game.last = performance.now();
  requestAnimationFrame(loop);
}

init();
