// Frame orchestration: terrain chunks → ground decals → y-sorted scene →
// FX → ambience → lighting → screen overlays. Camera transform once.
import { TILE, OWNER, CLAIM_R, TTIER } from '../../sim/config.js';
import { wallSegOf, wallBlocksView } from '../../sim/physics.js';
import { makeTerrain } from './terrain.js';
import { makeLighting } from './lighting.js';
import { makeWeather } from './weather.js';
import * as SP from './sprites.js';
import * as FX from './fx.js';
import { makeUi } from './ui.js';
import { PAL } from './palette.js';

export function makeRenderer(S, view, cam) {
  const terrain = makeTerrain(S);
  const lighting = makeLighting(S, view, cam);
  const weather = makeWeather(S, view, cam);
  const ui = makeUi(S, view, cam, lighting);
  const ctx = view.ctx;

  function render(dt) {
    const VW = view.VW, VH = view.VH;
    ctx.fillStyle = PAL.ocean1;
    ctx.fillRect(0, 0, VW, VH);

    ctx.save();
    ctx.translate(VW / 2, VH / 2);
    ctx.scale(cam.zoom, cam.zoom);
    ctx.translate(-cam.cx, -cam.cy);

    // ocean waves
    drawOceanWaves();

    // baked terrain
    terrain.draw(ctx, cam, view);

    // lakes
    for (const L of S.world.lakes) if (cam.inView(L.x, L.y, L.r * 1.4)) SP.drawLake(ctx, S, L);

    // ground layer decals
    FX.drawScorch(ctx, S, cam);
    weather.drawCloudShadows(ctx);
    for (const r of S.world.rocks) if (cam.inView(r.x, r.y, 20)) SP.drawRock(ctx, r);
    for (const f of S.world.flora) if (cam.inView(f.x, f.y, 30)) SP.drawFlora(ctx, S, f);
    FX.drawFootprints(ctx, S, cam);

    // floors
    for (const [k, s] of S.structures) {
      const [gx, gy] = k.split(',').map(Number);
      if (!cam.inView(gx * TILE + 32, gy * TILE + 32, 70)) continue;
      SP.drawFloor(ctx, gx, gy, s);
    }
    FX.drawLoot(ctx, S, cam);

    // ---- y-sorted batch ----
    const items = [];
    const add = (y, fn) => items.push({ y, fn });
    for (const b of S.world.boulders) if (cam.inView(b.x, b.y, b.r + 30)) add(b.y + b.r * 0.5, () => SP.drawBoulder(ctx, b));
    for (const p of S.world.palms) if (cam.inView(p.x, p.y, 50)) add(p.y, () => SP.drawPalm(ctx, S, p));
    for (const n of S.resources) if (n.amount > 0 && cam.inView(n.x, n.y, 70)) add(n.y, () => SP.drawNode(ctx, S, n));
    for (const o of S.barrels) if (o.hp > 0 && cam.inView(o.x, o.y, 50)) add(o.y, () => SP.drawBarrel(ctx, S, o));
    for (const f of S.fences) if (cam.inView(f.x, f.y, 40)) add(f.y, () => SP.drawFence(ctx, f));
    for (const d of S.dummies) if (cam.inView(d.x, d.y, 40)) add(d.y, () => SP.drawDummy(ctx, S, d));
    for (const a of S.animals) if (!a.dead && cam.inView(a.x, a.y, 60)) add(a.y, () => SP.drawAnimal(ctx, S, a));
    for (const g of S.guards) if (!g.dead && cam.inView(g.x, g.y, 40)) add(g.y, () => SP.drawGuard(ctx, S, g));
    for (const cv of S.convoys) {
      if (!cv.dead && cam.inView(cv.x, cv.y, 90)) add(cv.y, () => SP.drawConvoy(ctx, S, cv));
      for (const g of cv.guards) if (!g.dead && cam.inView(g.x, g.y, 30)) add(g.y, () => SP.drawConvoyGuard(ctx, g));
    }
    for (const [k, d] of S.deploys) {
      const [gx, gy] = k.split(',').map(Number);
      const cx2 = gx * TILE + 32, cy2 = gy * TILE + 32;
      if (!cam.inView(cx2, cy2, 70)) continue;
      const sortY = gy * TILE + TILE;
      if (d.type === 'cupboard') add(sortY, () => SP.drawCupboard(ctx, S, gx, gy, d, teamColOf(d.owner)));
      else if (d.type === 'turret') add(sortY, () => SP.drawTurret(ctx, S, gx, gy, d));
      else add(sortY, () => SP.drawBox(ctx, gx, gy, d));
    }
    for (const [k, w] of S.walls) {
      const seg = wallSegOf(k, w);
      const mx = (seg[0] + seg[2]) / 2, my = (seg[1] + seg[3]) / 2;
      if (!cam.inView(mx, my, 80)) continue;
      add(Math.max(seg[1], seg[3]), () => SP.drawWall(ctx, S, k, w));
    }
    add(S.world.shop.y + 46, () => SP.drawShop(ctx, S));
    for (const m of S.world.monuments) if (cam.inView(m.x, m.y, 700)) add(m.y + m.r, () => SP.drawMonument(ctx, S, m));
    for (const u of S.units) {
      if (u.dead || u.eliminated) continue;
      if (u.copter && !u.copter.destroyed && cam.inView(u.copter.x, u.copter.y, 60)) {
        const c = u.copter;
        add(u.flying ? 1e9 : c.y, () => SP.drawMinicopter(ctx, S, c, u.col, u.flying));
      }
      if (!u.flying && cam.inView(u.x, u.y, 50)) add(u.y, () => SP.drawUnit(ctx, S, u));
    }
    if (!S.player.inCopter) add(S.player.y, () => SP.drawPlayer(ctx, S));
    if (S.copter && !S.copter.destroyed && cam.inView(S.copter.x, S.copter.y, 70)) {
      add(S.player.inCopter ? 1e9 : S.copter.y, () => SP.drawMinicopter(ctx, S, S.copter, '#5d684c', S.player.inCopter));
    }
    for (const tr of S.transports) if (cam.inView(tr.x, tr.y, 90)) add(tr.riders.length || tr.state === 'fly' ? 1e9 : tr.y, () => SP.drawTransport(ctx, S, tr, teamColOf(tr.owner)));
    items.sort((a, b) => a.y - b.y);
    for (const it of items) it.fn();

    // above-scene FX + events
    FX.drawLaserSight(ctx, S, cam, wallBlocksView);
    FX.drawFires(ctx, S, cam);
    FX.drawWrecks(ctx, S, cam);
    FX.drawSatchels(ctx, S, cam);
    FX.drawGrenades(ctx, S, cam);
    if (view.debugPaths) ui.drawDebugPaths(ctx);
    FX.drawBullets(ctx, S, cam);
    FX.drawRockets(ctx, S, cam);
    FX.drawFlashes(ctx, S, cam);
    SP.drawQuarry(ctx, S, S.world.monuments.find(m => m.type === 'quarry'));
    FX.drawSignal(ctx, S, cam);
    SP.drawAirdrop(ctx, S);
    SP.drawPatrol(ctx, S);
    SP.drawLockedCrate(ctx, S);
    for (const tr2 of S.trains) SP.drawTrain(ctx, tr2);
    for (const c of S.world.crossings) if (cam.inView(c.x, c.y, 90)) SP.drawCrossing(ctx, S, c);
    FX.drawParticles(ctx, S, cam);
    FX.drawFloats(ctx, S, cam);
    weather.drawWorld(ctx);
    weather.drawClouds(ctx, lighting.lightLevel());
    ui.drawBuildGhost(ctx);

    ctx.restore();

    // range rings (screen-space stroke widths, world positions)
    ui.drawRangeRings(ctx);

    // lighting + grade + weather + overlays
    lighting.draw(ctx);
    weather.drawScreen(ctx);
    ui.drawScreen(ctx, dt);
    // drain transient events the renderer consumed
    S.events.length = 0;
  }

  function teamColOf(owner) {
    if (owner === OWNER) return '#7ec850';
    const t = S.teams.find(t2 => t2.owner === owner);
    return t ? t.col : '#888';
  }

  function drawOceanWaves() {
    if (cam.zoom <= 0.5) return;
    const v = cam.viewRect(120);
    ctx.strokeStyle = PAL.wave;
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    const t = S.t;
    for (let y = Math.floor(v.y0 / 64) * 64; y < v.y1; y += 64) {
      const ph = Math.sin(y * 0.05 + t * 0.6) * 28 + t * 16;
      for (let x = Math.floor(v.x0 / 170) * 170; x < v.x1; x += 170) {
        const wx = x + (ph % 170);
        if (S.world.landFactor(wx + 23, y) > -0.01) continue;
        ctx.beginPath();
        ctx.moveTo(wx, y);
        ctx.lineTo(wx + 46, y);
        ctx.stroke();
      }
    }
  }

  return { render };
}
