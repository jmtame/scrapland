# SCRAPLAND

A top-down survival game inspired by Rust built with Opus 4.8 over a weekend. Scavenge scrap, build and fortify a base, arm up at the trade zone, and outlast rival AI teams that gather, fortify, and raid each other across a large, procedurally-built map.

Features: weather system (rain/fog/day/night), multiple biomes (desert/winter/jungle), animal system, base building, raids, trade zone, monuments.

Runs entirely in the browser — no build step, no dependencies, no server.

<img width="1283" height="1278" alt="Screenshot 2026-06-01 at 7 50 13 AM" src="https://github.com/user-attachments/assets/6ae6d535-1661-47aa-9e25-38f7023b1cce" />


## Play

Download or clone the repo, then open `index.html` in any modern browser
(Chrome, Edge, Firefox, or Safari). Double-clicking the file works.

```
git clone https://github.com/jmtame/scrapland.git
cd scrapland
open index.html      # macOS — or just double-click the file
```

It's two files sharing one global scope: `index.html` (the game) and
`enemyai.js` (the AI). Keep them in the same folder.

## Controls

```
Move             W A S D
Run              hold Shift
Aim / shoot      mouse — hold left button to fire
Reload           R
Interact         E    enter/exit vehicles, open the trade store
Weapon slots     1 – 9
Throw grenade    Q
Place fence      G    drop wood cover in front of you

Build mode       B
  rotate piece     R
  cycle piece      mouse wheel  (or Q)
  upgrade          U    also upgrades a turret under the cursor
Close menu       Esc
```

## Notes

The AI teams run a full build-first economy: they start with nothing, gather
scrap, found bases, buy weapons and explosives at the trade zone, and launch
coordinated raids — breaching walls to reach a base's tool cupboard. Watch the
map collapse from many teams down to a winner.
