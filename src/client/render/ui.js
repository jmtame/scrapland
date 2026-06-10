// Screen-space overlays: vignette/grain, reticle, banners, alarms, markers,
// god-view map, death screen, build ghost, hover HP, debug paths.
import { TILE, OWNER, CLAIM_R, TTIER, SAFE_R, BUILD, WORLD } from '../../sim/config.js';
import { canPlace } from '../../sim/building.js';
import { buildTargetAt } from '../../sim/player.js';
import { wallSegOf } from '../../sim/physics.js';
import { PAL } from './palette.js';

export function makeUi(S, view, cam, lighting) {
  let grain = null;

  function makeGrain() {
    grain = document.createElement('canvas');
    grain.width = 128; grain.height = 128;
    const g = grain.getContext('2d');
    const img = g.createImageData(128, 128);
    for (let i = 0; i < img.data.length; i += 4) {
      const v = 118 + Math.random() * 20;
      img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
      img.data[i + 3] = 14;
    }
    g.putImageData(img, 0, 0);
  }

  return {
    drawBuildGhost(ctx) {
      if (!S.buildMode) return;
      // grid hint
      const v = cam.viewRect(0);
      ctx.strokeStyle = 'rgba(196,214,106,.08)';
      ctx.lineWidth = 1 / cam.zoom;
      ctx.beginPath();
      for (let x = Math.floor(v.x0 / TILE) * TILE; x < v.x1; x += TILE) { ctx.moveTo(x, v.y0); ctx.lineTo(x, v.y1); }
      for (let y = Math.floor(v.y0 / TILE) * TILE; y < v.y1; y += TILE) { ctx.moveTo(v.x0, y); ctx.lineTo(v.x1, y); }
      ctx.stroke();
      const t = buildTargetAt(S, S.cmd.mx, S.cmd.my);
      const ok = canPlace(S, OWNER, S.buildPiece, t) && afford();
      const colF = ok ? 'rgba(180,220,120,.45)' : 'rgba(210,80,60,.5)';
      const colS = ok ? '#c4d66a' : '#d2553c';
      const def = BUILD[S.buildPiece];
      if (def.cat === 'cell') {
        ctx.fillStyle = colF;
        ctx.fillRect(t.gx * TILE, t.gy * TILE, TILE, TILE);
        ctx.strokeStyle = colS;
        ctx.lineWidth = 2 / cam.zoom;
        ctx.strokeRect(t.gx * TILE, t.gy * TILE, TILE, TILE);
        if (S.buildPiece === 'turret') {
          ctx.strokeStyle = 'rgba(0,0,0,.4)';
          ctx.beginPath(); ctx.arc(t.gx * TILE + 32, t.gy * TILE + 32, 14, 0, 7); ctx.stroke();
        }
      } else {
        const w = { type: S.buildPiece, rot: S.buildRot & 1 };
        const s = wallSegOf(t.key, w);
        ctx.strokeStyle = colF;
        ctx.lineWidth = 12;
        ctx.lineCap = 'round';
        ctx.globalAlpha = 0.7;
        ctx.beginPath(); ctx.moveTo(s[0], s[1]); ctx.lineTo(s[2], s[3]); ctx.stroke();
        ctx.globalAlpha = 1;
      }
      function afford() {
        for (const k in def.cost) if ((S.inv[k] || 0) < def.cost[k]) return false;
        return true;
      }
    },

    drawRangeRings(ctx) {
      if (S.player.inCopter || view.godView) return;
      for (const [k, d] of S.deploys) {
        if (d.type !== 'cupboard' || d.owner !== OWNER) continue;
        const [gx, gy] = k.split(',').map(Number);
        const p = cam.worldToScreen(gx * TILE + 32, gy * TILE + 32);
        ctx.setLineDash([11, 9]);
        ctx.strokeStyle = 'rgba(126,200,80,0.34)';
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(p.x, p.y, CLAIM_R * cam.zoom, 0, 7); ctx.stroke();
        ctx.setLineDash([]);
      }
      // hovered turret range
      if (!S.shopOpen && !S.storeOpen) {
        const gx = Math.floor(S.cmd.mx / TILE), gy = Math.floor(S.cmd.my / TILE);
        const d = S.deploys.get(gx + ',' + gy);
        if (d && d.type === 'turret') {
          const p = cam.worldToScreen(gx * TILE + 32, gy * TILE + 32);
          ctx.setLineDash([6, 7]);
          ctx.strokeStyle = 'rgba(240,156,72,0.3)';
          ctx.lineWidth = 2;
          ctx.beginPath(); ctx.arc(p.x, p.y, TTIER[d.tier || 1].range * cam.zoom, 0, 7); ctx.stroke();
          ctx.setLineDash([]);
        }
      }
      // hover HP bar
      const hov = hoverTarget();
      if (hov) {
        const p = cam.worldToScreen(hov.x, hov.y);
        const f = Math.max(0, hov.hp / hov.max);
        ctx.fillStyle = 'rgba(0,0,0,.7)';
        ctx.fillRect(p.x - 18, p.y - 40 * cam.zoom - 8, 36, 5);
        ctx.fillStyle = f > 0.5 ? '#7bbf4f' : f > 0.25 ? '#d8b24a' : '#c0432f';
        ctx.fillRect(p.x - 18, p.y - 40 * cam.zoom - 8, 36 * f, 5);
      }
    },

    drawScreen(ctx, dt) {
      const VW = view.VW, VH = view.VH;
      const t = S.t;
      // vignette (gentle; none at all in map view)
      if (!view.godView) {
        const vg = ctx.createRadialGradient(VW / 2, VH / 2, 0.34 * Math.min(VW, VH), VW / 2, VH / 2, 0.72 * Math.max(VW, VH));
        vg.addColorStop(0, 'rgba(8,7,5,0)');
        vg.addColorStop(1, 'rgba(8,7,5,0.16)');
        ctx.fillStyle = vg;
        ctx.fillRect(0, 0, VW, VH);
      }
      // film grain (subtle)
      if (!grain) makeGrain();
      ctx.globalAlpha = 0.05;
      ctx.globalCompositeOperation = 'overlay';
      for (let y = 0; y < VH; y += 128) for (let x = 0; x < VW; x += 128) ctx.drawImage(grain, x, y);
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 1;

      if (view.godView) drawMapMarkers(ctx);
      else drawReticle(ctx);

      // off-screen blast arrows
      for (const b of S.blasts || []) {
        const p = cam.worldToScreen(b.x, b.y);
        if (p.x > -46 && p.x < VW + 46 && p.y > -46 && p.y < VH + 46) continue;
        const cxp = Math.max(24, Math.min(VW - 24, p.x)), cyp = Math.max(24, Math.min(VH - 24, p.y));
        const a = b.life / b.max;
        ctx.fillStyle = `rgba(255,178,74,${0.5 * a})`;
        ctx.beginPath(); ctx.arc(cxp, cyp, 18 * (1.3 - a), 0, 7); ctx.fill();
      }

      // event markers
      marker(ctx, S.airdrop && { x: S.airdrop.x, y: S.airdrop.fall < 1 ? S.airdrop.gy : S.airdrop.y }, 'AIRDROP', '#ffd76b', '✈');
      if (S.quarry) {
        const team = S.teams.find(t2 => t2.owner === S.quarry.owner);
        const col = S.quarry.owner === OWNER ? '#7ec850' : team ? team.col : '#b9b39d';
        marker(ctx, S.quarry, 'QUARRY', col, 'Q');
      }
      if (S.lockedCrate) {
        const c = S.lockedCrate;
        marker(ctx, c, c.started ? 'CRATE ' + Math.ceil(c.t) + 's' : 'LOCKED CRATE', '#ffb84a', 'C');
      }

      // raid alarm
      if (S.raidAlarm) {
        const al = Math.min(1, S.raidAlarm.t / 1.5);
        ctx.fillStyle = `rgba(180,30,20,${0.16 * al})`;
        ctx.fillRect(0, 0, VW, VH);
        ctx.font = 'bold 22px Trebuchet MS';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'rgba(0,0,0,.7)';
        ctx.fillText('BASE UNDER ATTACK', VW / 2 + 2, 54);
        ctx.fillStyle = `rgba(255,${80 + 110 * (0.5 + 0.5 * Math.sin(t * 8))},55,${al})`;
        ctx.fillText('BASE UNDER ATTACK', VW / 2, 52);
      }
      // hurt flash
      if (S.player.hurt > 0) {
        ctx.fillStyle = `rgba(150,28,18,${S.player.hurt * 0.5})`;
        ctx.fillRect(0, 0, VW, VH);
      }
      // death screen
      if (S.player.dead) {
        ctx.fillStyle = 'rgba(10,6,4,.55)';
        ctx.fillRect(0, 0, VW, VH);
        ctx.textAlign = 'center';
        ctx.fillStyle = '#e6d9b8';
        ctx.font = 'bold 44px Trebuchet MS';
        ctx.fillText('YOU DIED', VW / 2, VH / 2 - 4);
        ctx.fillStyle = '#b9a06f';
        ctx.font = '15px Trebuchet MS';
        ctx.fillText('respawning…', VW / 2, VH / 2 + 24);
      }
      // elimination feed
      ctx.textAlign = 'left';
      ctx.font = 'bold 14px Trebuchet MS';
      S.elims.forEach((e, i) => {
        const a = Math.min(1, e.t / 3);
        ctx.globalAlpha = a;
        ctx.fillStyle = 'rgba(0,0,0,.5)';
        ctx.fillRect(VW / 2 - 130, 92 + i * 24, 264, 20);
        ctx.fillStyle = '#e2664a';
        ctx.fillText(e.text, VW / 2 - 122, 106 + i * 24);
      });
      ctx.globalAlpha = 1;
    },

    drawDebugPaths(ctx) {
      for (const u of S.units) {
        if (u.dead || u.eliminated || u.flying) continue;
        if (!cam.inView(u.x, u.y, 600)) continue;
        const col = u.ally ? '#7ec850' : u.col;
        if (u.path && u.pathI < u.path.length) {
          ctx.strokeStyle = col;
          ctx.lineWidth = 1.6;
          ctx.globalAlpha = 0.8;
          ctx.beginPath();
          ctx.moveTo(u.x, u.y);
          for (let i = u.pathI; i < u.path.length; i++) ctx.lineTo(u.path[i].x, u.path[i].y);
          ctx.stroke();
          ctx.fillStyle = col;
          for (let i = u.pathI; i < u.path.length; i++) {
            ctx.beginPath(); ctx.arc(u.path[i].x, u.path[i].y, u.path[i].door ? 4 : 2.6, 0, 7); ctx.fill();
          }
          ctx.globalAlpha = 1;
        }
        ctx.font = 'bold 10px Trebuchet MS';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#000';
        ctx.fillText(u.act || u.state, u.x + 1, u.y - 29);
        ctx.fillStyle = col;
        ctx.fillText(u.act || u.state, u.x, u.y - 30);
      }
    },
  };

  function hoverTarget() {
    if (S.shopOpen || S.storeOpen || S.player.inCopter) return null;
    const gx = Math.floor(S.cmd.mx / TILE), gy = Math.floor(S.cmd.my / TILE);
    const d = S.deploys.get(gx + ',' + gy);
    if (d) return { x: gx * TILE + 32, y: gy * TILE + 32, hp: d.hp, max: d.max };
    const st = S.structures.get(gx + ',' + gy);
    if (st) return { x: gx * TILE + 32, y: gy * TILE + 32, hp: st.hp, max: st.max };
    for (const k of ['V,' + gx + ',' + gy, 'V,' + (gx + 1) + ',' + gy, 'H,' + gx + ',' + gy, 'H,' + gx + ',' + (gy + 1)]) {
      const w = S.walls.get(k);
      if (!w) continue;
      const s = wallSegOf(k, w);
      const mx = (s[0] + s[2]) / 2, my = (s[1] + s[3]) / 2;
      if (Math.hypot(S.cmd.mx - mx, S.cmd.my - my) < 16) return { x: mx, y: my, hp: w.hp, max: w.max };
    }
    return null;
  }

  function drawReticle(ctx) {
    const x = view.mouseSX, y = view.mouseSY;
    if (x === undefined) return;
    ctx.strokeStyle = 'rgba(225,235,195,.9)';
    ctx.lineWidth = 3.5;
    ctx.lineCap = 'round';
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      ctx.beginPath();
      ctx.moveTo(x + dx * 6, y + dy * 6);
      ctx.lineTo(x + dx * 16, y + dy * 16);
      ctx.stroke();
    }
    ctx.fillStyle = 'rgba(225,235,195,.9)';
    ctx.fillRect(x - 2, y - 2, 4, 4);
  }

  function marker(ctx, obj, label, col, chip) {
    if (!obj) return;
    const p = cam.worldToScreen(obj.x, obj.y);
    const VW = view.VW, VH = view.VH;
    ctx.textAlign = 'center';
    if (p.x > 0 && p.x < VW && p.y > 0 && p.y < VH) {
      if (view.godView) return;
      ctx.font = 'bold 11px Trebuchet MS';
      ctx.fillStyle = 'rgba(0,0,0,.7)';
      ctx.fillText(label, p.x + 1, p.y - 43);
      ctx.fillStyle = col;
      ctx.fillText(label, p.x, p.y - 44);
    } else {
      const cx2 = Math.max(54, Math.min(VW - 54, p.x)), cy2 = Math.max(54, Math.min(VH - 54, p.y));
      ctx.fillStyle = col;
      ctx.globalAlpha = 0.92;
      ctx.beginPath(); ctx.arc(cx2, cy2, 14, 0, 7); ctx.fill();
      ctx.globalAlpha = 1;
      ctx.fillStyle = '#1c1812';
      ctx.font = 'bold 13px Trebuchet MS';
      ctx.fillText(chip, cx2, cy2 + 4.5);
    }
  }

  function drawMapMarkers(ctx) {
    const t = S.t;
    ctx.textAlign = 'center';
    // monuments
    for (const m of S.world.monuments) {
      const p = cam.worldToScreen(m.x, m.y);
      ctx.fillStyle = '#caa24a';
      ctx.beginPath(); ctx.arc(p.x, p.y, 5, 0, 7); ctx.fill();
      ctx.font = '10px Trebuchet MS';
      ctx.fillStyle = '#e8dcc0';
      ctx.fillText(m.name, p.x, p.y - 9);
    }
    // bases
    for (const team of S.teams) {
      for (const rec of team.bases) {
        if (rec.dead) continue;
        const p = cam.worldToScreen(rec.hx, rec.hy);
        ctx.fillStyle = team.col;
        ctx.fillRect(p.x - 6, p.y - 6, 12, 12);
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 9px Trebuchet MS';
        ctx.fillText(String(team.id + 1), p.x, p.y + 3.5);
      }
    }
    // player base
    for (const [k, d] of S.deploys) {
      if (d.type === 'cupboard' && d.owner === OWNER) {
        const [gx, gy] = k.split(',').map(Number);
        const p = cam.worldToScreen(gx * TILE + 32, gy * TILE + 32);
        ctx.strokeStyle = '#caa24a';
        ctx.lineWidth = 2;
        ctx.strokeRect(p.x - 5, p.y - 5, 10, 10);
      }
    }
    // units
    for (const u of S.units) {
      if (u.dead || u.eliminated) continue;
      const p = cam.worldToScreen(u.x, u.y);
      ctx.fillStyle = 'rgba(0,0,0,.8)';
      ctx.beginPath(); ctx.arc(p.x, p.y, (u.primary ? 3 : 2) + 1, 0, 7); ctx.fill();
      ctx.fillStyle = u.ally ? '#7ec850' : u.col;
      ctx.beginPath(); ctx.arc(p.x, p.y, u.primary ? 3 : 2, 0, 7); ctx.fill();
    }
    // raids
    for (const r of S.raids) {
      const p = cam.worldToScreen(r.x, r.y);
      const pulse = 0.5 + 0.5 * Math.sin(t * 6);
      ctx.fillStyle = `rgba(255,82,56,${0.35 + 0.4 * (r.t / 60)})`;
      ctx.beginPath(); ctx.arc(p.x, p.y, 7 + 3 * pulse, 0, 7); ctx.fill();
      ctx.fillStyle = '#ff5238';
      ctx.beginPath(); ctx.arc(p.x, p.y, 3.2, 0, 7); ctx.fill();
    }
    // airdrop / convoy / plane
    if (S.airdrop) {
      const p = cam.worldToScreen(S.airdrop.x, S.airdrop.gy);
      ctx.strokeStyle = '#ffd76b';
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(p.x, p.y, 8 + 3 * Math.sin(t * 5), 0, 7); ctx.stroke();
    }
    for (const cv of S.convoys) {
      const p = cam.worldToScreen(cv.x, cv.y);
      ctx.fillStyle = '#8a9a5a';
      ctx.fillRect(p.x - 5, p.y - 3, 10, 6);
    }
    if (S.plane) {
      const p = cam.worldToScreen(S.plane.x, S.plane.y);
      ctx.fillStyle = '#e6eef4';
      ctx.beginPath(); ctx.arc(p.x, p.y, 3.2, 0, 7); ctx.fill();
    }
    // death skull
    if (S.deathMark) {
      const p = cam.worldToScreen(S.deathMark.x, S.deathMark.y);
      ctx.fillStyle = '#000';
      ctx.beginPath(); ctx.arc(p.x, p.y, 8, 0, 7); ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.beginPath(); ctx.arc(p.x, p.y - 1, 5, 0, 7); ctx.fill();
      ctx.fillRect(p.x - 3, p.y + 2, 6, 4);
      ctx.fillStyle = '#000';
      ctx.beginPath(); ctx.arc(p.x - 2, p.y - 2, 1.6, 0, 7); ctx.fill();
      ctx.beginPath(); ctx.arc(p.x + 2, p.y - 2, 1.6, 0, 7); ctx.fill();
    }
    // YOU marker
    const yp = cam.worldToScreen(S.player.x, S.player.y);
    ctx.strokeStyle = '#7ec850';
    ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.arc(yp.x, yp.y, 11 + 3 * Math.sin(t * 6), 0, 7); ctx.stroke();
    ctx.fillStyle = '#7ec850';
    ctx.beginPath(); ctx.arc(yp.x, yp.y, 5, 0, 7); ctx.fill();
    ctx.font = 'bold 11px Trebuchet MS';
    ctx.fillText('YOU', yp.x, yp.y - 18);
    ctx.fillStyle = '#d8d0ba';
    ctx.font = 'bold 14px Trebuchet MS';
    ctx.fillText('Click anywhere on the map to travel there', view.VW / 2, view.VH - 66);
  }
}
