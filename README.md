# SCRAPLAND

A top-down survival game inspired by Rust built with Opus 4.8 over a weekend. Scavenge scrap, build and fortify a
base, arm up at the trade zone, and outlast rival AI teams that gather, fortify, and raid each other across a large, procedurally-built map.

Runs entirely in the browser — no build step, no dependencies, no server.

<img width="1275" height="1282" alt="Screenshot 2026-06-01 at 7 48 24 AM" src="https://github.com/user-attachments/assets/92692dab-8041-4808-8809-13e555f7ca36" />


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
