# SCRAPLAND

A top-down survival game inspired by Rust. Scavenge scrap, build and fortify a
base, arm up at the trade zone, and outlast 7 rival AI teams that gather,
fortify, and raid each other across a large, procedurally-built map.

Features: coordinated AI raids, build-first economy, weather + day/night with
dynamic lighting, three biomes, wildlife, monuments + guards, quarry capture,
armored convoy, patrol helicopter, locked crates, trains, airdrops.

## Play

Clone the repo and open `index.html` in any modern browser — the committed
bundle (`dist/game.js`) means double-clicking the file just works.

```
git clone https://github.com/jmtame/scrapland.git
cd scrapland
open index.html
```

## Controls

```
Move             W A S D        Run            hold Shift
Aim / shoot      mouse          Reload         R
Interact         E              Weapon slots   1 – 9
Throw grenade    Q              Place fence    G
Supply signal    T

Build mode       B   (slot 6)
  cycle piece      Q / mouse wheel
  rotate           R
  upgrade          U   (also upgrades a turret under the cursor)
  remove           right-click
```

## Architecture (v2)

The game is a deterministic, fixed-timestep simulation with a separate
renderer:

- `src/sim/` — pure game logic, no DOM. Runs identically in the browser and
  headless in node. Seeded RNG: a seed fully reproduces a match.
- `src/sim/nav.js` — wall- and door-aware A* over a 64 px grid. Doors are
  graph edges (owners path through their own doors; raiders must breach).
  A goal-progress watchdog repaths with cell penalties; units never phase,
  teleport, or wall-follow.
- `src/sim/ai/` — per-unit committed-task FSM (gather / build / defend /
  raid / return / trade) under a per-team commander that assigns defenders,
  one sticky builder, and rocketers; raids stage at a standoff ring, focus one
  breach piece on the cheapest path to the tool cupboard, then push in.
- `src/client/` — three.js renderer (WebGL): tilted low-poly 3D — extruded
  bases, instanced nature, sun day-cycle (never dark), glow FX, weather —
  plus a 2D overlay for markers/banners and the DOM HUD.

### Develop

```
npm install          # esbuild + three
npm run build        # src/ → dist/game.js  (commit the bundle)
npm run watch
npm test             # tests-v2/verify.js — world/combat invariants + match bars
node tests-v2/sim_match.js 15 42    # headless match: minutes, seed
node tests-v2/shot.js out.png 42 5  # headless debug-map snapshot (sim only)
```

The headless suite checks, per seed: anti-stuck bars (peak non-raid stuck
< 30 s — typical peaks are under 15 s), zero wall-phasing, zero forced
teleports, no unit sealed inside its own base, founding < 3 min, active
economy, ricochet wall-safety, explosion line-of-sight gating, repair locks.

### Known follow-up

Match pacing: raids breach and tool cupboards fall, but full team
eliminations can still run long on some seeds. Tuning assault tempo
(rocket throughput at the wall, post-breach pushes) is the next round.
