"use strict";
// Ambient world systems and scene rendering: clouds, fog, trains + railroad crossings, the
// armored convoy, fireflies, footprints, lakes/shore/palms, the airdrop, and render() itself.

/* ---- drifting clouds: transparent puffs in the sky + soft shadows that slide across the ground ---- */

function makeCloud(x, y, heavy) {
  // Heavy clouds are bigger and denser, with a whiter body and a darker shadow.
  const n = randi(5, 9);
  const puffs = [];
  const baseR = heavy ? rand(86, 140) : rand(70, 128);
  let R = 0;
  for (let k = 0; k < n; k++) {
    const dx = rand(-baseR * 0.95, baseR * 0.95);
    const dy = rand(-baseR * 0.42, baseR * 0.42);
    const r = baseR * rand(0.55, 1.0);
    puffs.push({ dx, dy, r });
    R = Math.max(R, Math.hypot(dx, dy) + r);
  }
  // op = opacity, sp = drift speed.
  return { x, y, puffs, r: R, op: heavy ? rand(0.92, 1) : rand(0.7, 1), sp: rand(9, 19), heavy: !!heavy };
}

function buildClouds() {
  game.clouds = [];
  const N = randi(7, 10);
  let made = 0;
  while (made < N) {
    if (made <= N - 2 && Math.random() < 0.5) {
      // Some clouds bunch into heavier clusters.
      const cx = rand(-160, WORLD.w);
      const cy = rand(0, WORLD.h);
      const groupSize = Math.min(N - made, randi(2, 3));
      for (let k = 0; k < groupSize; k++) {
        game.clouds.push(makeCloud(cx + rand(-150, 150), cy + rand(-95, 95), true));
        made++;
      }
    } else {
      game.clouds.push(makeCloud(rand(-200, WORLD.w), rand(0, WORLD.h), Math.random() < 0.4));
      made++;
    }
  }
}

function updateClouds(dt) {
  if (!game.clouds) buildClouds();
  for (const c of game.clouds) {
    c.x += c.sp * dt;
    // Drift east; recycle off the right edge, keeping the cloud's weight class.
    if (c.x - c.r > WORLD.w + 160) {
      Object.assign(c, makeCloud(-c.r - rand(0, 500), rand(0, WORLD.h), c.heavy));
    }
  }
}

const CLOUD_OX = 64;   // shadow offset from the cloud (sun from the upper-left)
const CLOUD_OY = 86;

function drawCloudShadows() {
  // Soft dark patches on the ground, drawn over terrain and under units.
  if (!game.clouds) return;
  for (const c of game.clouds) {
    const sx = c.x + CLOUD_OX;
    const sy = c.y + CLOUD_OY;
    if (!inView(sx, sy, c.r + 140)) continue;
    const s0 = c.heavy ? 0.36 : 0.22;   // heavy clouds cast a darker shadow
    const s1 = c.heavy ? 0.2 : 0.12;
    for (const p of c.puffs) {
      const px = sx + p.dx;
      const py = sy + p.dy;
      const g = ctx.createRadialGradient(px, py, p.r * 0.2, px, py, p.r);
      g.addColorStop(0, 'rgba(12,17,27,' + (s0 * c.op).toFixed(3) + ')');
      g.addColorStop(0.7, 'rgba(12,17,27,' + (s1 * c.op).toFixed(3) + ')');
      g.addColorStop(1, 'rgba(12,17,27,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.ellipse(px, py, p.r, p.r * 0.74, 0, 0, TAU);
      ctx.fill();
    }
  }
}

function drawClouds() {
  // Light transparent cloud bodies in the sky (topmost world layer).
  if (!game.clouds) return;
  const lit = 0.6 + 0.4 * lightLevel();
  for (const c of game.clouds) {
    if (!inView(c.x, c.y, c.r + 140)) continue;
    const a0 = c.heavy ? 0.75 : 0.42;   // heavy = whiter, denser body, still ~25% transparent at the core
    const a1 = c.heavy ? 0.5 : 0.26;
    for (const p of c.puffs) {
      const px = c.x + p.dx;
      const py = c.y + p.dy;
      const g = ctx.createRadialGradient(px, py, p.r * 0.15, px, py, p.r);
      g.addColorStop(0, 'rgba(252,253,255,' + (a0 * c.op * lit).toFixed(3) + ')');
      g.addColorStop(0.55, 'rgba(244,248,252,' + (a1 * c.op * lit).toFixed(3) + ')');
      g.addColorStop(1, 'rgba(244,248,252,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.ellipse(px, py, p.r, p.r * 0.78, 0, 0, TAU);
      ctx.fill();
    }
  }
}

/* ---- fog: patchy drifting ground mist on its own cycle (so it can overlap rain/snow/day/night);
        never shown in the winter biome; density varies per patch; banks float and drift ---- */

function makeFogBank(x, y) {
  const n = randi(2, 5);
  const puffs = [];
  const baseR = rand(150, 320);
  let R = 0;
  for (let k = 0; k < n; k++) {
    const dx = rand(-baseR, baseR);
    const dy = rand(-baseR * 0.6, baseR * 0.6);
    const r = baseR * rand(0.7, 1.2);
    puffs.push({ dx, dy, r });
    R = Math.max(R, Math.hypot(dx, dy) + r);
  }
  // dens = this patch's thickness, so some areas read foggier than others.
  return { x, y, puffs, r: R, dens: rand(0.5, 1.15), sp: rand(5, 12), vy: rand(-3, 3) };
}

function buildFog() {
  game.fogBanks = [];
  const N = randi(13, 20);   // bank count sets the overall cover density
  for (let i = 0; i < N; i++) {
    game.fogBanks.push(makeFogBank(rand(0, WORLD.w), rand(0, WORLD.h)));
  }
}

function updateFog(dt) {
  const W = game.weather;
  if (!W) return;
  // Fog runs its own slow cycle, so it can co-occur with rain, snow, or night.
  if (W.fogTimer === undefined) {
    W.fogTimer = rand(12, 30);
    W.fogMode = 0;
    W.fog = 0;
  }
  W.fogTimer -= dt;
  if (W.fogTimer <= 0) {
    // Rolls in for a stretch, then clears for longer.
    W.fogMode = W.fogMode ? 0 : 1;
    W.fogTimer = W.fogMode ? rand(28, 60) : rand(45, 95);
  }
  W.fog += ((W.fogMode ? 1 : 0) - (W.fog || 0)) * Math.min(1, dt * 0.22);   // ease density in/out slowly
  if (!game.fogBanks) buildFog();
  for (const f of game.fogBanks) {
    f.x += f.sp * dt;
    f.y += f.vy * dt;
    // Recycle banks that drift off the right edge.
    if (f.x - f.r > WORLD.w + 220) {
      Object.assign(f, makeFogBank(-f.r - rand(0, 450), rand(0, WORLD.h)));
    }
  }
}

function drawFog() {
  const W = game.weather;
  if (!W || (W.fog || 0) < 0.02 || !game.fogBanks) return;
  for (const f of game.fogBanks) {
    if (!inView(f.x, f.y, f.r + 200)) continue;
    if (typeof biomeAt === 'function' && biomeAt(f.x, f.y) === 'winter') continue;   // no fog in the winter biome
    const a = (W.fog || 0) * f.dens * 0.6;   // global intensity scaled by this patch's density
    for (const p of f.puffs) {
      const px = f.x + p.dx;
      const py = f.y + p.dy;
      const g = ctx.createRadialGradient(px, py, p.r * 0.1, px, py, p.r);
      g.addColorStop(0, 'rgba(216,224,232,' + a.toFixed(3) + ')');
      g.addColorStop(0.65, 'rgba(212,220,230,' + (a * 0.5).toFixed(3) + ')');
      g.addColorStop(1, 'rgba(210,218,228,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.ellipse(px, py, p.r, p.r * 0.82, 0, 0, TAU);
      ctx.fill();
    }
  }
}

/* ---- trains: a train periodically barrels down a random rail, running over any unit/structure/barrel
        on the tracks (teams avoid building on rails because of this) ---- */

function spawnTrain() {
  if (!game.rails || !game.rails.length) return;
  const rl = game.rails[randi(0, game.rails.length - 1)];
  const pts = (Math.random() < 0.5) ? rl.pts : rl.pts.slice().reverse();
  game.trains.push({
    pts, seg: 0, x: pts[0].x, y: pts[0].y, px: pts[0].x, py: pts[0].y,
    ang: 0, speed: rand(460, 640), horn: 0
  });
}

function updateTrains(dt) {
  if (!game.trains) game.trains = [];
  if (game.trainT === undefined) game.trainT = rand(20, 60);
  game.trainT -= dt;
  if (game.trainT <= 0 && game.rails && game.rails.length) {
    spawnTrain();
    game.trainT = rand(30, 90);   // a train every 30-90s
  }
  const KR = 36;   // kill radius around the swept track segment
  for (let i = game.trains.length - 1; i >= 0; i--) {
    const tr = game.trains[i];
    tr.px = tr.x;
    tr.py = tr.y;

    // Advance along the rail polyline.
    let move = tr.speed * dt;
    while (move > 0 && tr.seg < tr.pts.length - 1) {
      const nx = tr.pts[tr.seg + 1];
      const dx = nx.x - tr.x;
      const dy = nx.y - tr.y;
      const dl = Math.hypot(dx, dy) || 1;
      if (dl <= move) {
        tr.x = nx.x;
        tr.y = nx.y;
        move -= dl;
        tr.seg++;
      } else {
        tr.x += dx / dl * move;
        tr.y += dy / dl * move;
        tr.ang = Math.atan2(dy, dx);
        move = 0;
      }
    }
    if (tr.seg >= tr.pts.length - 1) {
      // Off the far end of the line: despawn.
      game.trains.splice(i, 1);
      continue;
    }

    // Run over units, animals, and barrels caught in the swept path.
    if (!player.dead && !player.inCopter && !game.ghost &&
        ptSeg(player.x, player.y, tr.px, tr.py, tr.x, tr.y) < KR) {
      hurtPlayer(999, tr.x, tr.y);
    }
    for (const e of game.enemies) {
      if (e.dead || e.eliminated || e.flying) continue;
      if (ptSeg(e.x, e.y, tr.px, tr.py, tr.x, tr.y) < KR && typeof hurtBot === 'function') {
        hurtBot(e, 999, tr.x, tr.y);
      }
    }
    for (const a of game.animals) {
      if (a.hp > 0 && ptSeg(a.x, a.y, tr.px, tr.py, tr.x, tr.y) < KR) {
        a.hp = 0;
        a.respawn = rand(11, 18);
      }
    }
    for (const o of game.barrels) {
      if (o.hp > 0 && ptSeg(o.x, o.y, tr.px, tr.py, tr.x, tr.y) < KR) o.hp = 0;
    }

    // Flatten structures, deploys, and walls on the swept tiles.
    const steps = Math.max(1, Math.ceil(Math.hypot(tr.x - tr.px, tr.y - tr.py) / TILE));
    for (let st = 0; st <= steps; st++) {
      const fx = tr.px + (tr.x - tr.px) * st / Math.max(1, steps);
      const fy = tr.py + (tr.y - tr.py) * st / Math.max(1, steps);
      const gx = Math.floor(fx / TILE);
      const gy = Math.floor(fy / TILE);
      const k = gkey(gx, gy);
      if (game.structures.has(k)) damageStructure(k, 9999);
      if (game.deploys.has(k)) damageDeploy(k, 9999);
      for (const wk of ['V,' + gx + ',' + gy, 'V,' + (gx + 1) + ',' + gy, 'H,' + gx + ',' + gy, 'H,' + gx + ',' + (gy + 1)]) {
        if (game.walls.has(wk)) damageWall(wk, 9999);
      }
    }

    // Smokestack puffs: long-lived particles that drift, rise, and fade over ~15s.
    tr.smoke = (tr.smoke || 0) - dt;
    if (tr.smoke <= 0) {
      tr.smoke = 0.28;
      const lx = tr.x + Math.cos(tr.ang) * 16;
      const ly = tr.y + Math.sin(tr.ang) * 16;
      game.particles.push({
        x: lx, y: ly, vx: rand(-7, 7) + (game.wind || 0) * 5, vy: -rand(6, 16),
        life: rand(11, 15), max: 15, color: 'rgba(74,74,80,0.5)', r: rand(5, 10)
      });
      game.particles.push({
        x: lx, y: ly, vx: rand(-4, 4), vy: -rand(4, 10),
        life: rand(8, 12), max: 12, color: 'rgba(40,40,46,0.45)', r: rand(3, 6)
      });
    }
  }
}

function drawTrains() {
  if (!game.trains) return;
  for (const tr of game.trains) {
    if (!inView(tr.x, tr.y, 140)) continue;
    const s = worldToScreen(tr.x, tr.y);
    ctx.save();
    ctx.translate(s.x, s.y);
    ctx.rotate(tr.ang);
    ctx.fillStyle = 'rgba(0,0,0,.32)';   // long shadow under the whole train
    fillRR(-118, -15, 150, 30, 6, ctx.fillStyle);
    for (let c = 1; c <= 2; c++) {
      // Freight cars.
      const off = -c * 44;
      ctx.fillStyle = vgrad(0, -14, 0, 28, '#5a4a36', '#39301f');
      fillRR(off - 19, -14, 38, 28, 4, ctx.fillStyle);
      ctx.fillStyle = 'rgba(255,255,255,.10)';
      fillRR(off - 19, -14, 38, 5, 3, ctx.fillStyle);
      ctx.fillStyle = '#23211c';
      ctx.fillRect(off - 19, 9, 38, 3);
    }
    ctx.fillStyle = vgrad(0, -15, 0, 30, '#3a4048', '#1c2026');   // locomotive body
    fillRR(-22, -15, 46, 30, 5, ctx.fillStyle);
    ctx.fillStyle = 'rgba(255,255,255,.12)';
    fillRR(-22, -15, 46, 6, 3, ctx.fillStyle);
    ctx.fillStyle = '#11151a';   // cab
    fillRR(2, -10, 16, 20, 3, '#11151a');
    // Headlight.
    ctx.fillStyle = '#ffe9a3';
    ctx.shadowColor = '#ffe9a3';
    ctx.shadowBlur = 6;
    ctx.beginPath();
    ctx.arc(24, 0, 3.4, 0, TAU);
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#1c2026';   // pilot / cowcatcher at the front
    ctx.fillRect(20, -13, 6, 26);
    ctx.restore();
  }
}

/* ---- railroad crossings: where a dirt road meets a rail, a crossing guard with flashing lights
        + boom gates that drop when a train is near ---- */

function segXpt(ax, ay, bx, by, cx, cy, dx, dy) {
  // Intersection point of segments AB and CD, or null when they miss or are parallel.
  const r1 = bx - ax;
  const r2 = by - ay;
  const s1 = dx - cx;
  const s2 = dy - cy;
  const den = r1 * s2 - r2 * s1;
  if (Math.abs(den) < 1e-9) return null;
  const tt = ((cx - ax) * s2 - (cy - ay) * s1) / den;
  const uu = ((cx - ax) * r2 - (cy - ay) * r1) / den;
  if (tt < 0 || tt > 1 || uu < 0 || uu > 1) return null;
  return { x: ax + r1 * tt, y: ay + r2 * tt };
}

function buildCrossings() {
  game.crossings = [];
  if (!game.rails || !game.paths) return;
  for (const rl of game.rails) {
    const rp = rl.pts;
    for (const pth of game.paths) {
      const pp = pth.pts;
      for (let i = 0; i < rp.length - 1; i++) {
        for (let j = 0; j < pp.length - 1; j++) {
          const p = segXpt(
            rp[i].x, rp[i].y, rp[i + 1].x, rp[i + 1].y,
            pp[j].x, pp[j].y, pp[j + 1].x, pp[j + 1].y
          );
          if (p) {
            p.railAng = Math.atan2(rp[i + 1].y - rp[i].y, rp[i + 1].x - rp[i].x);
            p.gate = 0;
            p.active = false;
            game.crossings.push(p);
          }
        }
      }
    }
  }
}

function updateCrossings(dt) {
  if (!game.crossings) return;
  for (const c of game.crossings) {
    // A train within ~820px triggers the warning.
    c.active = !!(game.trains && game.trains.some(tr => dist2(tr.x, tr.y, c.x, c.y) < 820 * 820));
    c.gate += ((c.active ? 1 : 0) - (c.gate || 0)) * Math.min(1, dt * 3);   // boom lowers/raises smoothly
  }
}

function drawCrossings() {
  if (!game.crossings) return;
  const blink = Math.sin(game.t * 10) > 0;
  for (const c of game.crossings) {
    if (!inView(c.x, c.y, 120)) continue;
    const s = worldToScreen(c.x, c.y);
    ctx.save();
    ctx.translate(s.x, s.y);
    ctx.rotate(c.railAng);   // local frame: +x runs along the rail; posts straddle the track bed
    for (const side of [-1, 1]) {
      ctx.save();
      ctx.translate(0, side * 38);
      // Boom gate: down across the road when a train is near, raised ~80 degrees when clear.
      const raise = (1 - (c.gate || 0)) * (Math.PI * 0.46);
      const baseA = side > 0 ? Math.PI : 0;
      ctx.save();
      ctx.rotate(baseA + side * raise);
      ctx.fillStyle = '#15151a';
      ctx.fillRect(0, -2, 40, 4);
      for (let k = 0; k < 4; k++) {
        // Red/white striped boom.
        ctx.fillStyle = k % 2 ? '#ec2b22' : '#f0f0f0';
        ctx.fillRect(2 + k * 9.2, -2.4, 8, 4.8);
      }
      ctx.restore();
      ctx.fillStyle = 'rgba(0,0,0,.3)';
      ctx.beginPath();
      ctx.ellipse(0, 3, 7, 3, 0, 0, TAU);
      ctx.fill();
      ctx.fillStyle = '#26262b';   // guard post
      fillRR(-3, -4, 6, 13, 1.5, '#26262b');
      // Two flasher lights that alternate while a train is near.
      const onL = (c.active && blink);
      const onR = (c.active && !blink);
      ctx.fillStyle = onL ? '#ff3a2a' : '#521616';
      if (onL) {
        ctx.shadowColor = '#ff3a2a';
        ctx.shadowBlur = 7;
      }
      ctx.beginPath();
      ctx.arc(-4.5, -7, 2.7, 0, TAU);
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.fillStyle = onR ? '#ff3a2a' : '#521616';
      if (onR) {
        ctx.shadowColor = '#ff3a2a';
        ctx.shadowBlur = 7;
      }
      ctx.beginPath();
      ctx.arc(4.5, -7, 2.7, 0, TAU);
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.restore();
    }
    ctx.restore();
  }
}

/* ---- armored convoy: a turret-truck + 4 escort guards roll the convoy road end-to-end every
        3-5 min; wreck it for rich loot (metal/scrap/ammo/satchels/rockets) ---- */

const CONVOY = {
  vhp: 1100,     // truck hp
  ghp: 80,       // guard hp
  speed: 120,    // truck speed
  trange: 560,   // turret range
  tdmg: 13,      // turret bullet damage
  trof: 0.34,    // turret seconds between shots
  gdmg: 9,       // guard bullet damage
  grof: 0.5,     // guard seconds between shots
  grange: 440,   // guard range
  gspeed: 120,   // guard move speed
  leash: 300,    // max guard distance from the truck
  bspeed: 1300   // bullet speed
};

function spawnConvoy() {
  if (!game.convoyRoad) return;
  const road = game.convoyRoad;
  const pts = (Math.random() < 0.5) ? road.pts.slice() : road.pts.slice().reverse();
  const c = {
    pts, seg: 0, x: pts[0].x, y: pts[0].y, px: pts[0].x, py: pts[0].y, ang: 0, taim: 0,
    speed: CONVOY.speed, hp: CONVOY.vhp, max: CONVOY.vhp, gunCd: 0, dead: false, guards: []
  };
  // Four escorts: two ahead and two behind, flanking the truck.
  for (const o of [[-46, 28], [-46, -28], [50, 30], [50, -30]]) {
    c.guards.push({
      ox: o[0], oy: o[1], x: c.x, y: c.y, hp: CONVOY.ghp, max: CONVOY.ghp,
      angle: 0, gunCd: rand(0, 0.6), dead: false
    });
  }
  game.convoys.push(c);
}

function convoyTarget(cx, cy) {
  // Nearest intruder (player OR any bot) with a clear shot — the convoy is hostile to everyone.
  let target = null;
  let bestDistSq = CONVOY.trange * CONVOY.trange;
  if (!player.dead && !player.inCopter && !game.ghost) {
    const d = dist2(cx, cy, player.x, player.y);
    if (d < bestDistSq && !wallBlocksView(cx, cy, player.x, player.y) && !boulderLine(cx, cy, player.x, player.y)) {
      bestDistSq = d;
      target = player;
    }
  }
  for (const e of game.enemies) {
    if (e.dead || e.eliminated || e.flying) continue;
    const d = dist2(cx, cy, e.x, e.y);
    if (d < bestDistSq && !wallBlocksView(cx, cy, e.x, e.y) && !boulderLine(cx, cy, e.x, e.y)) {
      bestDistSq = d;
      target = e;
    }
  }
  return target;
}

function updateConvoys(dt) {
  if (!game.convoys) game.convoys = [];
  if (game.convoyT === undefined) game.convoyT = rand(120, 200);   // first convoy ~2-3 min in
  game.convoyT -= dt;
  if (game.convoyT <= 0 && game.convoyRoad && !game.convoys.length) {
    // One convoy at a time, every 3-5 min.
    spawnConvoy();
    game.convoyT = rand(180, 300);
  }
  for (let i = game.convoys.length - 1; i >= 0; i--) {
    const c = game.convoys[i];

    // Advance the truck along its single road path.
    c.px = c.x;
    c.py = c.y;
    let move = c.speed * dt;
    while (move > 0 && c.seg < c.pts.length - 1) {
      const nx = c.pts[c.seg + 1];
      const dx = nx.x - c.x;
      const dy = nx.y - c.y;
      const dl = Math.hypot(dx, dy) || 1;
      if (dl <= move) {
        c.x = nx.x;
        c.y = nx.y;
        move -= dl;
        c.seg++;
      } else {
        c.x += dx / dl * move;
        c.y += dy / dl * move;
        c.ang = Math.atan2(dy, dx);
        move = 0;
      }
    }
    if (c.seg >= c.pts.length - 1) {
      // Reached the far edge: gone, escaped with its loot.
      game.convoys.splice(i, 1);
      continue;
    }

    // Mounted turret rifle.
    c.gunCd -= dt;
    const tgt = convoyTarget(c.x, c.y);
    if (tgt) {
      const want = Math.atan2(tgt.y - c.y, tgt.x - c.x);
      c.taim = want;
      if (c.gunCd <= 0) {
        c.gunCd = CONVOY.trof;
        const a = want + rand(-0.04, 0.04);
        const bx = c.x + Math.cos(a) * 30;
        const by = c.y + Math.sin(a) * 30;
        game.bullets.push({
          x: bx, y: by, px: bx, py: by, vx: Math.cos(a) * CONVOY.bspeed, vy: Math.sin(a) * CONVOY.bspeed,
          life: 0.6, dmg: CONVOY.tdmg, from: 'convoy', enemy: true
        });
        burst(bx, by, COL.flash, 2, 90);
      }
    } else {
      c.taim = c.ang;
    }

    // Escort guards: hold formation alongside the truck, break off to engage threats,
    // and never stray past the leash.
    for (const g of c.guards) {
      if (g.dead) continue;
      g.gunCd -= dt;
      const fx = c.x + Math.cos(c.ang) * g.ox - Math.sin(c.ang) * g.oy;   // formation slot
      const fy = c.y + Math.sin(c.ang) * g.ox + Math.cos(c.ang) * g.oy;
      let gTarget = null;
      let gBestDistSq = CONVOY.grange * CONVOY.grange;
      if (!player.dead && !player.inCopter && !game.ghost) {
        const d = dist2(g.x, g.y, player.x, player.y);
        if (d < gBestDistSq && !wallBlocksView(g.x, g.y, player.x, player.y) &&
            !boulderLine(g.x, g.y, player.x, player.y)) {
          gBestDistSq = d;
          gTarget = player;
        }
      }
      for (const e of game.enemies) {
        if (e.dead || e.eliminated || e.flying) continue;
        const d = dist2(g.x, g.y, e.x, e.y);
        if (d < gBestDistSq && !wallBlocksView(g.x, g.y, e.x, e.y) && !boulderLine(g.x, g.y, e.x, e.y)) {
          gBestDistSq = d;
          gTarget = e;
        }
      }
      const pastLeash = Math.hypot(g.x - c.x, g.y - c.y) > CONVOY.leash;
      if (gTarget && !pastLeash) {
        const d = Math.sqrt(gBestDistSq) || 1;
        const want = Math.atan2(gTarget.y - g.y, gTarget.x - g.x);
        g.angle += angDiff(g.angle, want) * Math.min(1, dt * 9);
        if (d < CONVOY.grange && g.gunCd <= 0 && Math.abs(angDiff(g.angle, want)) < 0.3) {
          g.gunCd = CONVOY.grof;
          const a = g.angle + rand(-0.06, 0.06);
          const bx = g.x + Math.cos(a) * 14;
          const by = g.y + Math.sin(a) * 14;
          game.bullets.push({
            x: bx, y: by, px: bx, py: by, vx: Math.cos(a) * CONVOY.bspeed, vy: Math.sin(a) * CONVOY.bspeed,
            life: 0.55, dmg: CONVOY.gdmg, from: 'convoy', enemy: true
          });
          burst(bx, by, COL.flash, 2, 80);
        }
        // Keep fighting distance: close in beyond 260px, back off inside 150px.
        let mvx = 0;
        let mvy = 0;
        if (d > 260) {
          mvx = (gTarget.x - g.x) / d;
          mvy = (gTarget.y - g.y) / d;
        } else if (d < 150) {
          mvx = -(gTarget.x - g.x) / d;
          mvy = -(gTarget.y - g.y) / d;
        }
        const nx = g.x + mvx * CONVOY.gspeed * dt;
        const ny = g.y + mvy * CONVOY.gspeed * dt;
        if (typeof blocked !== 'function' || !blocked(nx, ny, 12)) {
          g.x = nx;
          g.y = ny;
        }
      } else {
        // Return to / ride in the formation slot.
        const dx = fx - g.x;
        const dy = fy - g.y;
        const dl = Math.hypot(dx, dy) || 1;
        if (dl > 4) {
          const sp = Math.min(dl, (c.speed + 50) * dt);
          g.x += dx / dl * sp;
          g.y += dy / dl * sp;
          g.angle += angDiff(g.angle, c.ang) * Math.min(1, dt * 5);
        }
      }
    }

    if (c.hp <= 0) {
      convoyDestroyed(c);
      game.convoys.splice(i, 1);
    }
  }
}

function convoyDestroyed(c) {
  burst(c.x, c.y, COL.explosion, 30, 340);
  burst(c.x, c.y, '#ffe2a0', 16, 220);
  game.flashes.push({ x: c.x, y: c.y, life: 0.25, max: 0.25, r: 96 });
  if (inView(c.x, c.y, 60)) game.shake = Math.max(game.shake, 12);
  game.scorch.push({ x: c.x, y: c.y, r: 60 });
  if (game.scorch.length > 36) game.scorch.shift();
  // Rich convoy haul.
  addLoot(c.x, c.y, 'metal', randi(50, 90));
  addLoot(c.x, c.y, 'scrap', randi(60, 110));
  addLoot(c.x, c.y, 'ammo', randi(50, 100));
  addLoot(c.x, c.y, 'rocket', randi(3, 5));
  addLoot(c.x, c.y, 'satchel', randi(2, 4));
  for (const g of c.guards) {
    if (!g.dead) addLoot(g.x, g.y, 'ammo', randi(8, 16));
  }
  addFloat(c.x, c.y - 30, 'convoy destroyed!', '#ffd0a0');
}

function drawConvoyVehicle(c) {
  const s = worldToScreen(c.x, c.y);
  ctx.save();
  ctx.translate(s.x, s.y);
  ctx.fillStyle = 'rgba(0,0,0,.32)';
  ctx.beginPath();
  ctx.ellipse(0, 7, 42, 18, 0, 0, TAU);
  ctx.fill();
  ctx.save();
  ctx.rotate(c.ang);
  ctx.fillStyle = vgrad(0, -18, 0, 36, '#5b6452', '#373f2d');   // olive armored hull
  fillRR(-34, -18, 68, 36, 5, ctx.fillStyle);
  ctx.fillStyle = 'rgba(255,255,255,.08)';
  fillRR(-34, -18, 68, 7, 4, ctx.fillStyle);
  ctx.fillStyle = '#23271d';   // tread bands
  ctx.fillRect(-34, -20, 68, 3.4);
  ctx.fillRect(-34, 16.6, 68, 3.4);
  ctx.fillStyle = '#2c3326';   // cab
  fillRR(15, -13, 15, 26, 3, '#2c3326');
  ctx.restore();
  // Turret + rifle barrel track the current aim.
  ctx.save();
  ctx.rotate(c.taim || c.ang);
  ctx.fillStyle = '#3a4233';
  ctx.beginPath();
  ctx.arc(0, 0, 11, 0, TAU);
  ctx.fill();
  ctx.fillStyle = '#15180f';
  ctx.fillRect(0, -2.6, 32, 5.2);
  ctx.restore();
  // Health bar once damaged.
  const f = clamp(c.hp / c.max, 0, 1);
  if (f < 1) {
    ctx.fillStyle = 'rgba(0,0,0,.55)';
    ctx.fillRect(-28, -31, 56, 5);
    ctx.fillStyle = f > 0.5 ? '#86c861' : f > 0.25 ? '#e0b24a' : '#d2664a';
    ctx.fillRect(-28, -31, 56 * f, 5);
  }
  ctx.restore();
}

function drawConvoyGuard(g) {
  const s = worldToScreen(g.x, g.y);
  ctx.save();
  ctx.translate(s.x, s.y);
  ctx.fillStyle = 'rgba(0,0,0,.3)';
  ctx.beginPath();
  ctx.ellipse(0, 3, 7, 3, 0, 0, TAU);
  ctx.fill();
  ctx.rotate(g.angle);
  ctx.fillStyle = '#15180f';   // rifle
  ctx.fillRect(2, -1.6, 16, 3.2);
  ctx.fillStyle = '#6f7a4e';   // olive body
  ctx.beginPath();
  ctx.arc(0, 0, 7, 0, TAU);
  ctx.fill();
  ctx.fillStyle = '#39402c';   // helmet
  ctx.beginPath();
  ctx.arc(0, 0, 4.4, 0, TAU);
  ctx.fill();
  ctx.restore();
  const f = clamp(g.hp / g.max, 0, 1);
  if (f < 1) {
    ctx.fillStyle = 'rgba(0,0,0,.5)';
    ctx.fillRect(s.x - 9, s.y - 13, 18, 3);
    ctx.fillStyle = '#cdd6c4';
    ctx.fillRect(s.x - 9, s.y - 13, 18 * f, 3);
  }
}

/* ---- fireflies: harmless glowing motes that wander the jungle biome; lit at all times,
        brighter at night and in fog ---- */

function buildFireflies() {
  game.fireflies = [];
  const x0 = WORLD.w / 3;   // jungle band = middle third of the map
  const x1 = 2 * WORLD.w / 3;
  const N = randi(16, 28);
  for (let i = 0; i < N; i++) {
    game.fireflies.push({
      x: rand(x0 + 40, x1 - 40), y: rand(60, WORLD.h - 60),
      vx: rand(-28, 28), vy: rand(-28, 28),
      ph: rand(0, TAU), fs: rand(2.5, 4.5), turn: rand(0, 1.6)
    });
  }
}

function updateFireflies(dt) {
  if (!game.fireflies) buildFireflies();
  const x0 = WORLD.w / 3;
  const x1 = 2 * WORLD.w / 3;
  for (const f of game.fireflies) {
    // Gentle random wander: pick a new heading every so often.
    f.turn -= dt;
    if (f.turn <= 0) {
      f.turn = rand(0.5, 1.7);
      const a = rand(0, TAU);
      const s = rand(14, 40);
      f.vx = Math.cos(a) * s;
      f.vy = Math.sin(a) * s;
    }
    f.x += f.vx * dt;
    f.y += f.vy * dt;
    // Bounce back inside the jungle band.
    if (f.x < x0 + 20) f.vx = Math.abs(f.vx);
    else if (f.x > x1 - 20) f.vx = -Math.abs(f.vx);
    f.y = clamp(f.y, 40, WORLD.h - 40);
    f.ph += dt * f.fs;
  }
}

function drawFireflies() {
  if (!game.fireflies) return;
  const W = game.weather;
  const night = 1 - lightLevel();
  const fog = (W && W.fog) || 0;
  const boost = 0.45 + 0.4 * night + 0.45 * Math.min(1, fog);   // glow always; brighter at night and in fog
  ctx.save();
  ctx.globalCompositeOperation = 'lighter';
  for (const f of game.fireflies) {
    if (!inView(f.x, f.y, 14)) continue;
    if (typeof biomeAt === 'function' && biomeAt(f.x, f.y) !== 'jungle') continue;   // only glow inside the jungle
    const a = clamp(boost * (0.6 + 0.4 * Math.sin(f.ph)), 0, 1);
    const g = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, 7);
    g.addColorStop(0, 'rgba(216,255,134,' + (0.9 * a).toFixed(3) + ')');
    g.addColorStop(1, 'rgba(150,220,90,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(f.x, f.y, 7, 0, TAU);
    ctx.fill();
    ctx.fillStyle = 'rgba(240,255,205,' + a.toFixed(3) + ')';
    ctx.beginPath();
    ctx.arc(f.x, f.y, 1.4, 0, TAU);
    ctx.fill();
  }
  ctx.restore();
}

/* ---- footprints: every walker leaves faint tracks on the ground that fade out over 10s ---- */

function updateFootprints(dt) {
  if (!game.footprints) game.footprints = [];
  const FP = game.footprints;
  for (let i = FP.length - 1; i >= 0; i--) {
    if ((FP[i].t += dt) >= 10) FP.splice(i, 1);   // fade out after 10s
  }
  const leave = (o) => {
    if (o.dead || o.eliminated || o.flying || o.inCopter) return;
    const dx = o.x - (o._fpx !== undefined ? o._fpx : o.x);
    const dy = o.y - (o._fpy !== undefined ? o._fpy : o.y);
    const dl = Math.hypot(dx, dy);
    o._fpx = o.x;
    o._fpy = o.y;
    o._fpAcc = (o._fpAcc || 0) + dl;
    // A print every ~30px walked, and only near the camera, so the array stays bounded.
    if (o._fpAcc >= 30 && dl > 0.01 && (typeof inView !== 'function' || inView(o.x, o.y, 60))) {
      o._fpAcc = 0;
      o._fpSide = o._fpSide ? 0 : 1;   // alternate left/right of the walk line
      const a = Math.atan2(dy, dx);
      const s = (o._fpSide ? 1 : -1) * 5;
      FP.push({ x: o.x - Math.sin(a) * s, y: o.y + Math.cos(a) * s, a, t: 0 });
      if (FP.length > 700) FP.shift();
    }
  };
  if (!player.dead && !player.inCopter) leave(player);
  if (game.enemies) {
    for (const e of game.enemies) leave(e);
  }
}

function drawFootprints() {
  const FP = game.footprints;
  if (!FP || !FP.length) return;
  for (const f of FP) {
    if (!inView(f.x, f.y, 16)) continue;
    const a = (1 - f.t / 10) * 0.28;
    ctx.save();
    ctx.translate(f.x, f.y);
    ctx.rotate(f.a);
    ctx.fillStyle = 'rgba(28,22,14,' + a.toFixed(3) + ')';
    ctx.beginPath();
    ctx.ellipse(0, 0, 4.4, 2.5, 0, 0, TAU);
    ctx.fill();
    ctx.restore();
  }
}

/* ---- world + frame rendering ---- */

function drawWorld() {
  drawGround();
  drawLakes();
  drawMonuments();
  drawScorch();
  drawCloudShadows();
  if (game.rocks) {
    // Small rocks are flat ground decor: under everything, walkable.
    for (const o of game.rocks) {
      if (inView(o.x, o.y, 24)) drawSmallRock(o);
    }
  }
  drawFlora();        // jungle flowers/ferns/shrubs (ground decor)
  drawFootprints();   // fading walk tracks on the ground (under units/structures)
  for (const [k, st] of game.structures) {
    const [gx, gy] = k.split(',').map(Number);
    if (!inView(gx * TILE, gy * TILE, TILE)) continue;
    if (st.type === 'floor') drawFloor(gx, gy, st.mat);
    else if (st.type === 'trifloor') drawTriFloor(gx, gy, st.mat, st.rot);
  }
  drawLoot();

  // Everything below is y-sorted so units can walk behind taller objects.
  const draw = [];
  if (game.boulders) {
    for (const b of game.boulders) {
      if (inView(b.x, b.y, b.r + 20)) draw.push({ y: b.y + b.r * 0.5, f: () => drawBoulder(b) });
    }
  }
  if (game.palms) {
    // Palms on the jungle shoreline (plus dry desert palms).
    for (const pp of game.palms) {
      if (inView(pp.x, pp.y, 60)) draw.push({ y: pp.y, f: () => drawPalm(pp) });
    }
  }
  for (const oo of game.resources) {
    if (oo.amount <= 0 || !inView(oo.x, oo.y, 60)) continue;
    if (oo.type === 'tree') draw.push({ y: oo.y, f: () => drawTree(oo) });
    else draw.push({ y: oo.y, f: () => drawRock(oo, oo.type === 'metal') });
  }
  for (const oo of game.barrels) {
    if (oo.hp > 0 && inView(oo.x, oo.y, 40)) draw.push({ y: oo.y, f: () => drawBarrel(oo) });
  }
  for (const f of game.fences) {
    if (f.hp > 0 && inView(f.x, f.y, 48)) draw.push({ y: f.y, f: () => drawFence(f) });
  }
  for (const oo of game.dummies) {
    if (oo.hp > 0 && inView(oo.x, oo.y, 40)) draw.push({ y: oo.y, f: () => drawDummy(oo) });
  }
  for (const a of game.animals) {
    if (a.hp > 0 && inView(a.x, a.y, 46)) draw.push({ y: a.y, f: () => drawAnimal(a) });
  }
  if (game.guards) {
    // Monument guards.
    for (const g of game.guards) {
      if (!g.dead && inView(g.x, g.y, 40)) draw.push({ y: g.y, f: () => drawGuard(g) });
    }
  }
  if (game.convoys) {
    // Armored convoy + its escorts.
    for (const c of game.convoys) {
      if (inView(c.x, c.y, 90)) draw.push({ y: c.y, f: () => drawConvoyVehicle(c) });
      for (const g of c.guards) {
        if (!g.dead && inView(g.x, g.y, 30)) draw.push({ y: g.y, f: () => drawConvoyGuard(g) });
      }
    }
  }
  for (const [k, d] of game.deploys) {
    const [gx, gy] = k.split(',').map(Number);
    if (!inView(gx * TILE, gy * TILE, TILE)) continue;
    draw.push({
      y: gy * TILE + TILE,
      f: () => d.type === 'turret' ? drawTurret(gx, gy, d) :
        d.type === 'cupboard' ? drawCupboard(gx, gy, d) : drawBox(gx, gy, d)
    });
  }
  for (const [k, w] of game.walls) {
    const sg = wallSegOf(k, w);
    const mx = (sg[0] + sg[2]) / 2;
    const my = (sg[1] + sg[3]) / 2;
    if (inView(mx, my, TILE)) draw.push({ y: Math.max(sg[1], sg[3]), f: () => drawWall(k, w) });
  }
  if (game.shop && inView(game.shop.x, game.shop.y, 80)) {
    draw.push({ y: game.shop.y + game.shop.r, f: drawShop });
  }
  if (!player.inCopter) draw.push({ y: player.y, f: drawPlayer });
  draw.sort((a, b) => a.y - b.y);
  for (const d of draw) d.f();

  drawLaserSight();
  drawFires();
  drawWrecks();
  drawSatchels();
  drawGrenades();
  if (typeof drawEnemies === 'function') drawEnemies();
  if (game.debugPaths && typeof drawDebugPaths === 'function') {
    drawDebugPaths();   // overlay each unit's route + action when the Debug button is on
  }
  drawCopter();
  drawBullets();
  drawRockets();
  drawMuzzle();
  drawQuarry();
  drawSignal();
  drawAirdrop();
  drawPatrolHeli();
  drawParticles();
  drawFlashes();
  drawFloats();
  drawFog();
  drawTrains();
  drawClouds();
  drawFireflies();
}

function drawOcean(v) {
  const x0 = v.x0 - 120;
  const y0 = v.y0 - 120;
  const x1 = v.x1 + 120;
  const y1 = v.y1 + 120;
  const g = ctx.createLinearGradient(0, y0, 0, y1);
  g.addColorStop(0, '#15435a');
  g.addColorStop(1, '#0e2c3c');
  ctx.fillStyle = g;
  ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
  if (game.zoom > 0.5) {
    // Drifting wave glints (skipped when zoomed far out).
    ctx.strokeStyle = 'rgba(150,205,230,0.10)';
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.beginPath();
    const drift = (game.t * 16);
    for (let yy = Math.floor(y0 / 64) * 64; yy < y1; yy += 64) {
      const ph = Math.sin(yy * 0.05 + game.t * 0.6) * 28;
      const base = ((drift + yy * 0.7) % 170);
      for (let xx = Math.floor(x0 / 170) * 170 - 170; xx < x1; xx += 170) {
        const wx = xx + base + ph;
        ctx.moveTo(wx, yy);
        ctx.lineTo(wx + 46, yy);
      }
    }
    ctx.stroke();
    ctx.lineCap = 'butt';
  }
}

function islandPathOf(scale) {
  const pts = [];
  const n = ISLAND.N;
  const s = scale || 1;
  for (let i = 0; i < n; i++) {
    const ang = i / n * TAU;
    const R = ISLAND.rad[i] * s;
    pts.push([ISLAND.cx + Math.cos(ang) * ISLAND.rx * R, ISLAND.cy + Math.sin(ang) * ISLAND.ry * R]);
  }
  return pts;
}

function drawShore() {
  // Beach band hugging the irregular coast (icy in the winter biome). The caller clips to land,
  // so only the inner half of the wide stroke shows.
  if (!ISLAND) return;
  const ip = islandPathOf(1);
  const n = ip.length;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.lineWidth = 120;
  for (let i = 0; i < n; i++) {
    const a = ip[i];
    const b = ip[(i + 1) % n];
    const mx = (a[0] + b[0]) / 2;
    const my = (a[1] + b[1]) / 2;
    ctx.strokeStyle = biomeAt(mx, my) === 'winter' ? 'rgba(216,233,243,0.95)' : 'rgba(214,194,148,0.95)';
    ctx.beginPath();
    ctx.moveTo(a[0], a[1]);
    ctx.lineTo(b[0], b[1]);
    ctx.stroke();
  }
  // Foam line at the waterline.
  ctx.lineWidth = 2.5;
  ctx.strokeStyle = 'rgba(245,250,255,0.5)';
  ctx.beginPath();
  ctx.moveTo(ip[0][0], ip[0][1]);
  for (let i = 1; i < n; i++) ctx.lineTo(ip[i][0], ip[i][1]);
  ctx.closePath();
  ctx.stroke();
  ctx.lineCap = 'butt';
}

function lakePath(L, scale) {
  const W = L.wob || [1];
  const n = W.length;
  const s = scale || 1;
  ctx.beginPath();
  for (let i = 0; i <= n; i++) {
    const ang = (i % n) / n * TAU;
    const R = L.r * W[i % n] * s;
    const x = L.x + Math.cos(ang) * R;
    const y = L.y + Math.sin(ang) * R * 0.84;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
}

function drawLakes() {
  if (!game.lakes) return;
  for (const L of game.lakes) {
    if (!inView(L.x, L.y, L.r + 50)) continue;
    if (L.frozen) {
      lakePath(L, 1.07);   // snowy bank
      ctx.fillStyle = 'rgba(238,246,251,0.95)';
      ctx.fill();
      lakePath(L, 1.0);    // ice sheet
      ctx.fillStyle = rgrad(L.x, L.y - L.r * 0.35, L.r * 1.1, '#e4eff6', '#9fbdd2');
      ctx.fill();
      ctx.save();
      lakePath(L, 1.0);
      ctx.clip();
      // Sheen highlight.
      ctx.fillStyle = 'rgba(255,255,255,0.28)';
      ctx.beginPath();
      ctx.ellipse(L.x - L.r * 0.3, L.y - L.r * 0.3, L.r * 0.34, L.r * 0.18, -0.5, 0, TAU);
      ctx.fill();
      // Subtle frozen-ice sparkle: a gentle twinkle, like the metal-ore glints.
      for (let i = 0; i < 9; i++) {
        const sx = L.x + (hash(L.seed + i * 3, i) * 2 - 1) * L.r * 0.82;
        const sy = L.y + (hash(i, L.seed + i * 2) * 2 - 1) * L.r * 0.66;
        const tw = Math.sin(game.t * 1.6 + i * 1.7 + L.seed * 3);
        if (tw > 0.62) {
          ctx.globalAlpha = (tw - 0.62) * 0.95;
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(sx, sy, 1.5, 0, TAU);
          ctx.fill();
          ctx.globalAlpha = (tw - 0.62) * 0.45;
          ctx.beginPath();
          ctx.arc(sx, sy, 3.4, 0, TAU);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
      ctx.restore();
    } else {
      lakePath(L, 1.06);   // mossy/muddy bank
      ctx.fillStyle = 'rgba(120,150,86,0.7)';
      ctx.fill();
      lakePath(L, 1.0);    // shallow-to-deep water
      ctx.fillStyle = rgrad(L.x, L.y - L.r * 0.3, L.r * 1.05, '#3f7f96', '#0f2f3e');
      ctx.fill();
      ctx.save();
      lakePath(L, 1.0);
      ctx.clip();
      // Static sky reflection.
      ctx.fillStyle = 'rgba(210,238,248,0.16)';
      ctx.beginPath();
      ctx.ellipse(L.x - L.r * 0.32, L.y - L.r * 0.3, L.r * 0.32, L.r * 0.16, -0.5, 0, TAU);
      ctx.fill();
      // Lily pads.
      for (const p of (L.pads || [])) {
        const px = L.x + Math.cos(p.a) * L.r * p.rr;
        const py = L.y + Math.sin(p.a) * L.r * p.rr * 0.84;
        ctx.fillStyle = '#4a8a44';
        ctx.beginPath();
        ctx.ellipse(px, py, p.s, p.s * 0.8, p.a, 0, TAU);
        ctx.fill();
        ctx.fillStyle = '#3a6f36';
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.arc(px, py, p.s, p.a + 0.4, p.a + 0.4 + 0.7);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();
    }
  }
}

function drawPalm(p) {
  const s = worldToScreen(p.x, p.y);
  const sw = Math.sin(game.t * 1.3 + p.seed) * 3;   // sway
  const dry = p.desert;
  shadow(s.x + 5, s.y + 7, 16);
  // Curved trunk (desert palms are paler/tan).
  ctx.strokeStyle = dry ? '#a4824e' : '#7a5a30';
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(s.x, s.y);
  ctx.quadraticCurveTo(s.x + sw * 0.6, s.y - 22, s.x + sw, s.y - 40);
  ctx.stroke();
  // Fronds: desert palms are sun-bleached khaki and droop more.
  const hx = s.x + sw;
  const hy = s.y - 42;
  ctx.strokeStyle = dry ? '#9a953f' : '#3f7a34';
  ctx.lineWidth = 4;
  ctx.lineCap = 'round';
  const nf = dry ? 5 : 6;
  for (let k = 0; k < nf; k++) {
    const a = k / nf * TAU + p.seed;
    ctx.beginPath();
    ctx.moveTo(hx, hy);
    ctx.quadraticCurveTo(
      hx + Math.cos(a) * 16, hy + Math.sin(a) * 10 + (dry ? 9 : -4),
      hx + Math.cos(a) * 30, hy + Math.sin(a) * 20 + (dry ? 13 : 4)
    );
    ctx.stroke();
  }
  ctx.fillStyle = dry ? '#b08a3c' : '#caa24a';
  ctx.beginPath();
  ctx.arc(hx, hy, 3.2, 0, TAU);
  ctx.fill();
  ctx.lineCap = 'butt';
}

function buildPalms() {
  game.palms = [];
  if (!ISLAND) return;
  const n = ISLAND.N;
  // Lush palms along the jungle shoreline.
  for (let i = 0; i < n; i += 2) {
    const ang = i / n * TAU;
    const R = ISLAND.rad[i] * 0.93;
    const x = ISLAND.cx + Math.cos(ang) * ISLAND.rx * R;
    const y = ISLAND.cy + Math.sin(ang) * ISLAND.ry * R;
    if (biomeAt(x, y) !== 'jungle' || rand(0, 1) > 0.34) continue;
    game.palms.push({ x, y, seed: rand(0, 9) });
  }
  // Dry desert palms scattered through the desert band (distinct from the lush jungle palms).
  const dn = randi(10, 16);
  for (let i = 0; i < dn; i++) {
    const x = rand(40, WORLD.w / 3 - 20);
    const y = rand(80, WORLD.h - 80);
    if (biomeAt(x, y) !== 'desert' || (typeof onLand === 'function' && !onLand(x, y)) ||
        (typeof lakeAt === 'function' && lakeAt(x, y))) continue;
    game.palms.push({ x, y, seed: rand(0, 9), desert: true });
  }
}

/* ---- THE QUARRY: a capturable production monument. Stand on it UNCONTESTED for 8s to take it;
   it then trickles stone/metal/scrap to the owner unattended until someone takes it back. The
   periodic income makes it a standing reason for teams to leave their bases and fight in the
   open. ---- */
const QUARRY_CAP_T = 8;

function updateQuarry(dt) {
  const q = game.quarry;
  if (!q) return;
  // who is standing on it?
  const present = new Set();
  if (!player.dead && !game.ghost && dist2(player.x, player.y, q.x, q.y) < q.r * q.r) {
    present.add(OWNER);
  }
  for (const b of game.enemies) {
    if (b.dead || b.eliminated || b.flying) continue;
    if (dist2(b.x, b.y, q.x, q.y) < q.r * q.r) present.add(b.owner);
  }
  if (present.size === 1) {
    const who = [...present][0];
    if (who !== q.owner) {   // sole non-owner present -> capture progress
      if (q.capOwner !== who) { q.capOwner = who; q.capT = 0; }
      q.capT += dt;
      if (q.capT >= QUARRY_CAP_T) {
        q.owner = who;
        q.capT = 0;
        q.capOwner = null;
        const label = who === OWNER ? 'YOU' : 'Base ' + ((teamPrimary(who) || { id: -1 }).id + 1);
        flashTip(who === OWNER ? 'Quarry captured!' : 'Quarry captured by ' + label);
        game.elims.push({ text: 'QUARRY → ' + label, t: 10 });
      }
    } else {
      q.capT = 0;
      q.capOwner = null;
    }
  } else {
    q.capT = Math.max(0, q.capT - dt);   // contested or empty -> capture progress drains
  }
  if (!q.owner) return;
  // a dead team can't own it — it goes neutral
  if (q.owner !== OWNER && !game.enemies.some(b => b.owner === q.owner && b.primary && !b.eliminated)) {
    q.owner = null;
    return;
  }
  // production runs unattended
  q.arm += dt;
  q.payT += dt;
  if (q.payT >= 6) {
    q.payT = 0;
    q.paid++;
    if (q.owner === OWNER) {
      game.inv.stone += 10;
      game.inv.metal += 6;
      game.inv.scrap += 4;
    } else {
      const prim = teamPrimary(q.owner);
      const tc = prim && game.deploys.get(prim.tcKey);
      if (tc && tc.store) {
        tc.store.stone = (tc.store.stone || 0) + 10;
        tc.store.metal = (tc.store.metal || 0) + 6;
        tc.store.scrap = (tc.store.scrap || 0) + 4;
      }
    }
    addFloat(q.x, q.y - 44, '+stone +metal +scrap', '#cdd6a3');
  }
}

function quarryOwnerCol() {
  const q = game.quarry;
  if (!q || !q.owner) return null;
  if (q.owner === OWNER) return COL.player;
  const prim = teamPrimary(q.owner);
  return prim ? prim.col : '#999';
}

function drawQuarry() {
  const q = game.quarry;
  if (!q || !inView(q.x, q.y, 220)) return;
  // gravel pad + pit
  ctx.fillStyle = 'rgba(70,62,44,.55)';
  ctx.beginPath();
  ctx.arc(q.x, q.y, q.r * 0.66, 0, TAU);
  ctx.fill();
  ctx.fillStyle = '#3a3426';
  ctx.beginPath();
  ctx.ellipse(q.x - 36, q.y + 26, 44, 24, 0, 0, TAU);
  ctx.fill();
  // derrick tower
  shadow(q.x + 26, q.y + 18, 40, 12);
  ctx.fillStyle = COL.steelDk;
  ctx.fillRect(q.x + 8, q.y - 46, 12, 64);
  ctx.fillStyle = COL.steel;
  ctx.fillRect(q.x + 4, q.y - 50, 20, 10);
  // rocking beam arm: animated while producing, parked otherwise
  const rock = q.owner ? Math.sin(q.arm * 2.4) * 0.35 : -0.18;
  ctx.save();
  ctx.translate(q.x + 14, q.y - 44);
  ctx.rotate(rock);
  ctx.fillStyle = COL.steelLt;
  ctx.fillRect(-52, -5, 86, 10);
  ctx.fillStyle = COL.barrel;
  ctx.beginPath();
  ctx.arc(-52, 0, 9, 0, TAU);   // counterweight head
  ctx.fill();
  ctx.restore();
  // owner flag
  const col = quarryOwnerCol();
  ctx.fillStyle = COL.woodDk;
  ctx.fillRect(q.x - 44, q.y - 58, 4, 46);
  ctx.fillStyle = col || '#6e6a5a';
  ctx.fillRect(q.x - 40, q.y - 58, 26, 14);
  // capture progress ring
  if (q.capT > 0) {
    ctx.strokeStyle = 'rgba(255,220,120,.85)';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(q.x, q.y, q.r * 0.66, -Math.PI / 2, -Math.PI / 2 + TAU * Math.min(1, q.capT / QUARRY_CAP_T));
    ctx.stroke();
  }
}

function drawQuarryMarker() {
  // Screen-space: small label/edge chip so the quarry's status reads at a glance.
  const q = game.quarry;
  if (!q) return;
  const sx = (q.x - game.cam.cx) * game.zoom + VW / 2;
  const sy = (q.y - game.cam.cy) * game.zoom + VH / 2;
  const m = 54;
  const col = quarryOwnerCol() || '#b9b39d';
  ctx.save();
  if (sx >= m && sx <= VW - m && sy >= m && sy <= VH - m) {
    ctx.globalAlpha = 0.85;
    ctx.fillStyle = col;
    ctx.font = 'bold 11px "Trebuchet MS",sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('QUARRY', sx, sy - 64);
  } else {
    const ex = clamp(sx, m, VW - m);
    const ey = clamp(sy, m, VH - m);
    ctx.translate(ex, ey);
    ctx.globalAlpha = 0.85;
    ctx.fillStyle = col;
    ctx.beginPath();
    ctx.arc(0, 0, 12, 0, TAU);
    ctx.fill();
    ctx.fillStyle = '#26220f';
    ctx.font = 'bold 11px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Q', 0, 4);
  }
  ctx.restore();
  ctx.textAlign = 'left';
}

/* ---- supply signal: a shop-bought flare (60 scrap, press T) thrown at the cursor. Purple smoke
   burns ~6s, then the cargo plane delivers an airdrop ON the smoke. Classic risk/reward: every AI
   team sees the falling crate too (local race + hard-team map-wide loot runners). ---- */
function throwSupplySignal() {
  if (player.dead || player.inCopter || game.buildMode) return;
  if ((game.inv.signal | 0) <= 0) {
    flashTip('No supply signal — buy one at the trade zone (60 scrap)');
    return;
  }
  if (game.signal) {
    flashTip('A supply signal is already burning');
    return;
  }
  const w = screenToWorld(mouse.sx, mouse.sy);
  const throwR = 700;
  const d = Math.hypot(w.x - player.x, w.y - player.y);
  let tx = w.x;
  let ty = w.y;
  if (d > throwR) {   // clamp to throwing range, toward the cursor
    tx = player.x + (w.x - player.x) / d * throwR;
    ty = player.y + (w.y - player.y) / d * throwR;
  }
  if (inSafeZone(tx, ty)) {
    flashTip('Not in the safe zone');
    return;
  }
  game.inv.signal--;
  game.signal = { x: tx, y: ty, t: 0, dur: 6, puff: 0, called: false };
  flashTip('Supply signal out — the drop is coming (everyone saw it)');
}

function updateSignals(dt) {
  const s = game.signal;
  if (!s) return;
  s.t += dt;
  s.puff -= dt;
  if (s.puff <= 0) {   // rising purple smoke
    s.puff = 0.12;
    burst(s.x + rand(-8, 8), s.y + rand(-6, 2), '#a96bd4', 3, 60);
  }
  // after the burn, call the plane — waits for the sky to be free (one plane/crate at a time)
  if (s.t >= s.dur && !s.called && !game.plane && !game.airdrop) {
    spawnAirdrop(s.x, s.y);
    s.called = true;
  }
  if (s.called || s.t > s.dur + 60) game.signal = null;   // delivered (or gave up after 60s of busy sky)
}

function drawSignal() {
  const s = game.signal;
  if (!s || !inView(s.x, s.y, 80)) return;
  // flare canister + pulsing glow
  ctx.fillStyle = '#5a2d78';
  ctx.fillRect(s.x - 3, s.y - 8, 6, 10);
  const glow = 0.5 + 0.5 * Math.sin(s.t * 9);
  ctx.fillStyle = 'rgba(190,120,235,' + (0.35 + glow * 0.45) + ')';
  ctx.beginPath();
  ctx.arc(s.x, s.y - 10, 6 + glow * 3, 0, TAU);
  ctx.fill();
}

/* ---- patrol helicopter: every ~4-7 min an NPC gunship hunts the RICHEST team (most units,
   biggest base, fattest bank — the snowball leader), strafes its base area for ~22s with HMG
   bursts, then leaves. Anyone can shoot it down; the strafed team returns fire. A kill drops
   elite loot at the crash site. Anti-snowball pressure, announced map-wide. ---- */
const PATROL_HP = 450;   // big teams that focus fire CAN down it (~once per couple of visits) — the crash loot is the reward
const PATROL_SPEED = 330;

function patrolPickTarget() {
  let best = null;
  let bestScore = -1;
  for (const b of game.enemies) {
    if (!b.primary || b.eliminated || b._unfounded || !baseAlive(b)) continue;
    let units = 0;
    for (const e of game.enemies) {
      if (e.owner === b.owner && !e.eliminated && !e.dead) units++;
    }
    const tc = game.deploys.get(b.tcKey);
    const bank = tc && tc.store
      ? (tc.store.wood + tc.store.stone + tc.store.metal + (tc.store.scrap || 0)) : 0;
    const score = units * 10 + botBaseFloors(b.owner) * 2 + bank * 0.01;
    if (score > bestScore) { bestScore = score; best = b; }
  }
  return best;
}

function updatePatrolHeli(dt) {
  game.patrolT = (game.patrolT === undefined ? rand(180, 280) : game.patrolT - dt);
  if (game.patrolT <= 0 && !game.patrol) {
    const tgt = patrolPickTarget();
    game.patrolT = rand(240, 420);
    if (tgt) {
      game.patrol = {
        x: tgt.hx > WORLD.w / 2 ? -200 : WORLD.w + 200,
        y: clamp(tgt.hy + rand(-600, 600), 200, WORLD.h - 200),
        owner: tgt.owner, tid: tgt.id, tx: tgt.hx, ty: tgt.hy,
        hp: PATROL_HP, max: PATROL_HP,
        rotor: 0, angle: 0, orbitT: 22, orbA: rand(0, TAU), gunCd: 1.2, flash: 0, leaving: false
      };
      flashTip('Patrol helicopter inbound!');
      game.elims.push({ text: 'PATROL HELI hunts Base ' + (tgt.id + 1), t: 10 });
    }
  }
  const p = game.patrol;
  if (!p) return;
  p.rotor += dt * 28;
  p.flash = Math.max(0, p.flash - dt);
  p.gunCd -= dt;
  // hunted team already eliminated -> just leave
  if (!p.leaving && !game.enemies.some(b => b.owner === p.owner && b.primary && !b.eliminated)) {
    p.leaving = true;
  }
  let mx;
  let my;
  if (p.leaving) {
    mx = p.x < WORLD.w / 2 ? -360 : WORLD.w + 360;
    my = p.y;
    if (p.x < -320 || p.x > WORLD.w + 320) { game.patrol = null; return; }
  } else if (dist2(p.x, p.y, p.tx, p.ty) > 460 * 460) {
    mx = p.tx;   // transit: fly straight at the target base
    my = p.ty;
  } else {
    // on station: orbit the base and strafe
    p.orbitT -= dt;
    p.orbA += dt * 0.55;
    mx = p.tx + Math.cos(p.orbA) * 420;
    my = p.ty + Math.sin(p.orbA) * 420;
    if (p.orbitT <= 0) p.leaving = true;
    if (p.gunCd <= 0) {
      // strafe: an HMG burst at one unit of the hunted team (or the player, if they are the
      // hunted "team" stand-in nearby and actually have a base worth punishing)
      let victim = null;
      let bd = 760 * 760;
      for (const e of game.enemies) {
        if (e.owner !== p.owner || e.dead || e.eliminated || e.flying) continue;
        const d = dist2(p.x, p.y, e.x, e.y);
        if (d < bd) { bd = d; victim = e; }
      }
      if (victim) {
        p.gunCd = 1.2;
        p.flash = 0.12;
        for (let i = 0; i < 5; i++) {
          const lead = 0.18 + i * 0.02;
          const ax = victim.x + (victim.vx || 0) * lead + rand(-26, 26);
          const ay = victim.y + (victim.vy || 0) * lead + rand(-26, 26);
          const ang = Math.atan2(ay - p.y, ax - p.x);
          const sp = 900;
          game.bullets.push({
            x: p.x, y: p.y, px: p.x, py: p.y,
            vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp,
            life: Math.hypot(ax - p.x, ay - p.y) / sp + 0.1,
            dmg: 9, from: 'patrol', enemy: true, col: COL.hmgTracer
          });
        }
      }
    }
  }
  // The hunted team fires FLAK back (own projectile lane: aimed UP at an aircraft, it ignores
  // ground clutter — regular bullets died on the defenders' own walls, so the heli kept escaping
  // at single-digit HP). Led shots; per-shot damage is low, so only a BIG team's massed fire
  // downs it inside one visit — exactly the anti-snowball dial.
  p.flak = p.flak || [];
  for (const e of game.enemies) {
    if (e.owner !== p.owner || e.dead || e.eliminated || e.flying) continue;
    if ((e._aaCd = (e._aaCd || 0) - dt) <= 0 && dist2(p.x, p.y, e.x, e.y) < 720 * 720) {
      e._aaCd = 1.0;
      const flight = Math.hypot(p.x - e.x, p.y - e.y) / 1100;
      const ax = p.x + Math.cos(p.angle) * (p.spd || 0) * flight;
      const ay = p.y + Math.sin(p.angle) * (p.spd || 0) * flight;
      const ang = Math.atan2(ay - e.y, ax - e.x) + rand(-0.07, 0.07);
      e.angle = ang;   // they visibly aim skyward at it
      p.flak.push({ x: e.x, y: e.y, px: e.x, py: e.y,
                    vx: Math.cos(ang) * 1100, vy: Math.sin(ang) * 1100, life: 0.7 });
    }
  }
  for (let i = p.flak.length - 1; i >= 0; i--) {
    const f = p.flak[i];
    f.px = f.x;
    f.py = f.y;
    f.x += f.vx * dt;
    f.y += f.vy * dt;
    f.life -= dt;
    if (ptSeg(p.x, p.y, f.px, f.py, f.x, f.y) < 40) {
      p.hp -= 6;
      burst(f.x, f.y, COL.steelLt, 3, 120);
      if (p.hp <= 0) { patrolCrash(p); return; }
      p.flak.splice(i, 1);
    } else if (f.life <= 0) {
      p.flak.splice(i, 1);
    }
  }
  const want = Math.atan2(my - p.y, mx - p.x);
  p.angle += angDiff(p.angle, want) * Math.min(1, dt * 3);
  const d = Math.hypot(mx - p.x, my - p.y) || 1;
  const sp = Math.min(PATROL_SPEED, PATROL_SPEED * d / 300);
  p.spd = sp;   // current speed, used by defenders to lead their shots
  p.x += Math.cos(p.angle) * sp * dt;
  p.y += Math.sin(p.angle) * sp * dt;
}

// Crash payout: elite loot where it falls (rockets + satchels mark it as a hard-team loot-run prize).
function patrolCrash(p) {
  burst(p.x, p.y, COL.explosion, 40, 360);
  burst(p.x, p.y, COL.rocketHot, 24, 280);
  game.scorch.push({ x: p.x, y: p.y, r: 64 });
  for (let i = 0, n = randi(4, 6); i < n; i++) addLoot(p.x, p.y, 'rocket', 1);
  for (let i = 0, n = randi(2, 3); i < n; i++) addLoot(p.x, p.y, 'satchel', 1);
  addLoot(p.x, p.y, 'ammo', randi(100, 180));
  spillStack(p.x, p.y, 'scrap', randi(80, 150));
  spillStack(p.x, p.y, 'metal', randi(50, 90));
  flashTip('Patrol helicopter DOWN!');
  game.elims.push({ text: 'PATROL HELI DOWN', t: 12 });
  game.patrol = null;
}

function drawPatrolHeli() {
  const p = game.patrol;
  if (!p) return;
  // flak tracers (drawn even when the heli itself is off-screen)
  if (p.flak && p.flak.length) {
    ctx.strokeStyle = 'rgba(255,233,163,.8)';
    ctx.lineWidth = 2;
    for (const f of p.flak) {
      if (!inView(f.x, f.y, 60)) continue;
      ctx.beginPath();
      ctx.moveTo(f.px, f.py);
      ctx.lineTo(f.x, f.y);
      ctx.stroke();
    }
  }
  if (!inView(p.x, p.y, 140)) return;
  shadow(p.x + 26, p.y + 30, 52, 14);
  ctx.save();
  ctx.translate(p.x, p.y);
  ctx.rotate(p.angle);
  // tail boom + fin
  ctx.fillStyle = COL.copterDk;
  ctx.fillRect(-52, -4, 34, 8);
  ctx.fillRect(-56, -12, 8, 24);
  // hull
  ctx.fillStyle = '#3c4435';
  ctx.beginPath();
  ctx.ellipse(0, 0, 30, 15, 0, 0, TAU);
  ctx.fill();
  ctx.fillStyle = COL.copterDk;
  ctx.beginPath();
  ctx.ellipse(-6, 0, 22, 12, 0, 0, TAU);
  ctx.fill();
  // canopy
  ctx.fillStyle = COL.glass;
  ctx.beginPath();
  ctx.ellipse(14, 0, 12, 8, 0, 0, TAU);
  ctx.fill();
  // stub wings (rocket pods)
  ctx.fillStyle = COL.steelDk;
  ctx.fillRect(-10, -24, 16, 8);
  ctx.fillRect(-10, 16, 16, 8);
  // muzzle flash while strafing
  if (p.flash > 0) {
    ctx.fillStyle = COL.flash;
    ctx.beginPath();
    ctx.arc(26, 0, 7, 0, TAU);
    ctx.fill();
  }
  // main rotor (spinning blur)
  ctx.strokeStyle = 'rgba(20,22,16,.55)';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.ellipse(0, 0, 56, 56 * 0.32, 0, p.rotor % TAU, (p.rotor % TAU) + 4.4);
  ctx.stroke();
  ctx.restore();
  // hp bar when damaged
  if (p.hp < p.max) {
    const frac = Math.max(0, p.hp / p.max);
    ctx.fillStyle = 'rgba(10,10,8,.6)';
    ctx.fillRect(p.x - 30, p.y - 44, 60, 6);
    ctx.fillStyle = frac > 0.4 ? '#9ad06a' : '#d9694f';
    ctx.fillRect(p.x - 29, p.y - 43, 58 * frac, 4);
  }
  // red beacon
  const blink = (p.rotor % 1.6) < 0.8;
  if (blink) {
    ctx.fillStyle = '#ff4a3a';
    ctx.beginPath();
    ctx.arc(p.x - 18, p.y - 14, 3, 0, TAU);
    ctx.fill();
  }
}

function drawAirdrop() {
  // World-space: the cargo plane overhead plus the parachuting / landed supply crate.
  const a = game.airdrop;
  if (a && inView(a.x, a.y, 140)) {
    if (a.fall < 1) {
      // Parachute with the crate dangling beneath, swaying as it falls.
      const sway = Math.sin(a.sway) * 12;
      ctx.save();
      ctx.translate(a.x + sway, a.y);
      ctx.fillStyle = '#cf4a44';   // canopy
      ctx.beginPath();
      ctx.moveTo(-30, -34);
      ctx.quadraticCurveTo(0, -66, 30, -34);
      ctx.quadraticCurveTo(0, -24, -30, -34);
      ctx.fill();
      ctx.fillStyle = '#b23d38';   // canopy shading
      ctx.beginPath();
      ctx.moveTo(-30, -34);
      ctx.quadraticCurveTo(-15, -29, 0, -30);
      ctx.quadraticCurveTo(-9, -46, -30, -34);
      ctx.fill();
      ctx.strokeStyle = 'rgba(245,245,245,.7)';   // shroud lines
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(-26, -33);
      ctx.lineTo(-9, -6);
      ctx.moveTo(26, -33);
      ctx.lineTo(9, -6);
      ctx.moveTo(0, -28);
      ctx.lineTo(0, -8);
      ctx.stroke();
      ctx.fillStyle = '#9a7b3e';   // crate
      fillRR(-13, -6, 26, 22, 3, ctx.fillStyle);
      ctx.strokeStyle = '#5e4a22';
      ctx.lineWidth = 2;
      ctx.strokeRect(-13, -6, 26, 22);
      ctx.strokeStyle = '#e6c45e';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-13, 5);
      ctx.lineTo(13, 5);
      ctx.moveTo(0, -6);
      ctx.lineTo(0, 16);
      ctx.stroke();
      ctx.restore();
    } else {
      // Landed crate — shoot it to spill the loot.
      shadow(a.x, a.y + 12, 17);
      ctx.save();
      ctx.translate(a.x, a.y);
      ctx.fillStyle = '#9a7b3e';
      fillRR(-17, -15, 34, 30, 4, ctx.fillStyle);
      ctx.strokeStyle = '#5e4a22';
      ctx.lineWidth = 2.5;
      ctx.strokeRect(-17, -15, 34, 30);
      ctx.strokeStyle = '#e6c45e';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(-17, 0);
      ctx.lineTo(17, 0);
      ctx.moveTo(0, -15);
      ctx.lineTo(0, 15);
      ctx.stroke();
      ctx.fillStyle = '#e6c45e';
      ctx.font = 'bold 13px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('✈', 0, -19);
      ctx.textAlign = 'left';
      ctx.restore();
      // Health bar once damaged.
      const fr = Math.max(0, a.hp / a.max);
      if (fr < 1) {
        ctx.fillStyle = 'rgba(0,0,0,.55)';
        fillRR(a.x - 19, a.y - 30, 38, 4, 2, ctx.fillStyle);
        ctx.fillStyle = '#ff7a4a';
        fillRR(a.x - 19, a.y - 30, 38 * fr, 4, 2, ctx.fillStyle);
      }
    }
  }
  const p = game.plane;
  if (p) {
    // C-130-ish cargo plane, high overhead.
    const dir = p.vx > 0 ? 1 : -1;
    ctx.save();
    ctx.translate(p.x, p.y - 150);
    ctx.scale(dir, 1);
    ctx.fillStyle = '#8b949d';   // fuselage
    fillRR(-50, -10, 100, 20, 9, ctx.fillStyle);
    ctx.beginPath();   // nose
    ctx.moveTo(50, -8);
    ctx.lineTo(66, 0);
    ctx.lineTo(50, 8);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#727b84';   // wing
    ctx.beginPath();
    ctx.moveTo(-12, -9);
    ctx.lineTo(20, -9);
    ctx.lineTo(4, -34);
    ctx.lineTo(-16, -34);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();   // tail fin
    ctx.moveTo(-50, -7);
    ctx.lineTo(-36, -7);
    ctx.lineTo(-44, -26);
    ctx.lineTo(-52, -26);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#cfe0ee';   // windows
    for (let i = -32; i <= 24; i += 12) {
      ctx.beginPath();
      ctx.arc(i, -1, 2.3, 0, TAU);
      ctx.fill();
    }
    ctx.restore();
  }
}

function drawAirdropMarker() {
  // Screen-space: directional arrow / label guiding the player to the active airdrop.
  const a = game.airdrop;
  if (!a) return;
  const tx = a.x;
  const ty = (a.fall < 1 ? a.gy : a.y);
  const sx = (tx - game.cam.cx) * game.zoom + VW / 2;
  const sy = (ty - game.cam.cy) * game.zoom + VH / 2;
  const m = 54;   // screen-edge margin
  if (sx >= m && sx <= VW - m && sy >= m && sy <= VH - m) {
    // On screen: just a label above the drop.
    ctx.save();
    ctx.globalAlpha = 0.9;
    ctx.fillStyle = '#ffd25a';
    ctx.font = 'bold 11px "Trebuchet MS",sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('AIRDROP', sx, sy - 34);
    ctx.restore();
    ctx.textAlign = 'left';
    return;
  }
  // Off screen: arrow pinned to the viewport edge, pointing at the drop.
  const cx = VW / 2;
  const cy = VH / 2;
  const ang = Math.atan2(sy - cy, sx - cx);
  const ex = clamp(sx, m, VW - m);
  const ey = clamp(sy, m, VH - m);
  ctx.save();
  ctx.translate(ex, ey);
  ctx.fillStyle = 'rgba(255,210,90,.92)';
  ctx.beginPath();
  ctx.arc(0, 0, 15, 0, TAU);
  ctx.fill();
  ctx.fillStyle = '#3a2c0a';
  ctx.font = 'bold 13px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('✈', 0, 4);
  ctx.rotate(ang);
  ctx.fillStyle = '#ffb24a';
  ctx.beginPath();
  ctx.moveTo(21, 0);
  ctx.lineTo(9, -7);
  ctx.lineTo(9, 7);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
  ctx.textAlign = 'left';
}

function render() {
  ctx.fillStyle = '#123445';   // deep ocean backdrop
  ctx.fillRect(0, 0, VW, VH);
  ctx.save();
  ctx.translate(VW / 2, VH / 2);
  ctx.scale(game.zoom, game.zoom);
  ctx.translate(-game.cam.cx, -game.cam.cy);
  const v = game._v = vrange();
  drawOcean(v);   // animated water everywhere; land draws on top, so the map reads as an island

  // Clip the land to the irregular island shape (ocean shows through outside).
  ctx.save();
  ctx.beginPath();
  if (ISLAND) {
    const ip = islandPathOf(1);
    ctx.moveTo(ip[0][0], ip[0][1]);
    for (let i = 1; i < ip.length; i++) ctx.lineTo(ip[i][0], ip[i][1]);
    ctx.closePath();
  } else {
    ctx.rect(0, 0, WORLD.w, WORLD.h);
  }
  ctx.clip();
  const foot = !player.inCopter && !game.godView;
  drawWorld();
  drawShore();   // beach band hugging the coastline (icy in winter)
  drawBuildOverlay();
  drawHoverHp();
  ctx.restore();
  ctx.restore();

  const dark = 1 - lightLevel();
  // The whole viewport is always fully visible: there is no fog-of-war or LOS vision mask,
  // only the flat cosmetic day/night tint applied below.
  if (foot) {
    // Range rings: green = your Tool Cupboard's claim radius (always shown); a faint turret
    // firing range shows only for the turret under the cursor.
    ctx.save();
    ctx.lineWidth = 2;
    for (const [k, d] of game.deploys) {
      if ((d.owner || OWNER) !== OWNER || d.type !== 'cupboard') continue;
      const [gx, gy] = k.split(',').map(Number);
      const bx = (gx * TILE + TILE / 2 - game.cam.cx) * game.zoom + VW / 2;
      const by = (gy * TILE + TILE / 2 - game.cam.cy) * game.zoom + VH / 2;
      ctx.strokeStyle = 'rgba(126,200,80,0.34)';
      ctx.setLineDash([11, 9]);
      ctx.beginPath();
      ctx.arc(bx, by, CLAIM_R * game.zoom, 0, TAU);
      ctx.stroke();
    }
    if (!game.store && !game.shopOpen) {
      // Hovering a turret shows its firing range (faint).
      const hw = screenToWorld(mouse.sx, mouse.sy);
      const hd = game.deploys.get(gkey(Math.floor(hw.x / TILE), Math.floor(hw.y / TILE)));
      if (hd && hd.type === 'turret') {
        const tt = TTIER[hd.tier || 1];
        const hg = gkey(Math.floor(hw.x / TILE), Math.floor(hw.y / TILE)).split(',').map(Number);
        const bx = (hg[0] * TILE + TILE / 2 - game.cam.cx) * game.zoom + VW / 2;
        const by = (hg[1] * TILE + TILE / 2 - game.cam.cy) * game.zoom + VH / 2;
        ctx.strokeStyle = 'rgba(240,156,72,0.16)';
        ctx.setLineDash([6, 7]);
        ctx.beginPath();
        ctx.arc(bx, by, tt.range * game.zoom, 0, TAU);
        ctx.stroke();
      }
    }
    ctx.setLineDash([]);
    ctx.restore();
  }
  if (dark > 0.03) {
    // Flat day/night tint (uniform — not a vision mask).
    ctx.fillStyle = 'rgba(10,16,38,' + (dark * 0.5) + ')';
    ctx.fillRect(0, 0, VW, VH);
  }
  {
    // Mild vignette.
    const vg = ctx.createRadialGradient(
      VW / 2, VH / 2, Math.min(VW, VH) * 0.34,
      VW / 2, VH / 2, Math.max(VW, VH) * 0.72
    );
    vg.addColorStop(0, 'rgba(0,0,0,0)');
    vg.addColorStop(1, 'rgba(0,0,0,' + (0.22 + dark * 0.2) + ')');
    ctx.fillStyle = vg;
    ctx.fillRect(0, 0, VW, VH);
  }
  drawWeather();
  if (game.godView) drawMapMarkers();
  else drawReticle();
  drawBlasts();
  drawAirdropMarker();
  drawQuarryMarker();
  drawRaidAlarm();
  if (player.hurt > 0) {
    ctx.fillStyle = 'rgba(150,28,18,' + (player.hurt * 0.5) + ')';
    ctx.fillRect(0, 0, VW, VH);
  }
  if (player.dead) {
    ctx.fillStyle = 'rgba(10,6,4,.55)';
    ctx.fillRect(0, 0, VW, VH);
    ctx.textAlign = 'center';
    ctx.fillStyle = '#e6d9b8';
    ctx.font = 'bold 44px "Trebuchet MS",sans-serif';
    ctx.fillText('YOU DIED', VW / 2, VH / 2 - 4);
    ctx.fillStyle = '#b9a06f';
    ctx.font = '15px "Trebuchet MS",sans-serif';
    ctx.fillText('respawning…', VW / 2, VH / 2 + 24);
    ctx.textAlign = 'left';
  }
  if (game.elims.length) {
    // Elimination feed, top-left.
    ctx.textAlign = 'left';
    ctx.font = 'bold 14px "Trebuchet MS",sans-serif';
    for (let i = 0; i < game.elims.length; i++) {
      const e = game.elims[i];
      ctx.globalAlpha = Math.min(1, e.t / 3);
      ctx.fillStyle = 'rgba(0,0,0,.5)';
      ctx.fillRect(14, 92 + i * 24, 232, 20);
      ctx.fillStyle = '#e2664a';
      ctx.fillText(e.text, 22, 106 + i * 24);
    }
    ctx.globalAlpha = 1;
  }
}
