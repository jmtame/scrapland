// 2D overlay canvas on top of the WebGL view: reticle, floats, banners,
// event markers, raid alarm, death screen, build ghost, range rings,
// hover HP, debug paths, god-view extras. Projects world → screen via rig.
import { TILE, OWNER, CLAIM_R, TTIER, BUILD } from '../../sim/config.js';
import { canPlace } from '../../sim/building.js';
import { buildTargetAt } from '../../sim/player.js';
import { wallSegOf } from '../../sim/physics.js';

export function makeOverlay3(S, view, rig) {
  const cv = document.createElement('canvas');
  cv.id = 'overlay';
  cv.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:5';
  document.body.appendChild(cv);
  const ctx = cv.getContext('2d');

  function resize() {
    cv.width = view.VW;
    cv.height = view.VH;
  }
  resize();
  addEventListener('resize', resize);

  const P = (x, y, h = 0) => rig.worldToScreen(x, y, h);

  function ringAt(x, y, R, style, dash) {
    ctx.strokeStyle = style;
    ctx.lineWidth = 2;
    if (dash) ctx.setLineDash(dash);
    ctx.beginPath();
    for (let i = 0; i <= 36; i++) {
      const a = (i / 36) * Math.PI * 2;
      const p = P(x + Math.cos(a) * R, y + Math.sin(a) * R);
      i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y);
    }
    ctx.stroke();
    ctx.setLineDash([]);
  }

  return {
    draw() {
      const VW = view.VW, VH = view.VH;
      ctx.clearRect(0, 0, VW, VH);
      const t = S.t;

      // floats (world-anchored text; hidden in map view — they're clutter there)
      ctx.font = 'bold 13px Trebuchet MS';
      ctx.textAlign = 'center';
      for (const f of view.godView ? [] : S.floats) {
        const p = P(f.ox, f.y, 40);
        if (p.behind) continue;
        const a = Math.max(0, f.life / f.max);
        ctx.globalAlpha = a;
        ctx.fillStyle = '#000';
        ctx.fillText(f.text, p.x + 1, p.y - f.lift + 1);
        ctx.fillStyle = f.col;
        ctx.fillText(f.text, p.x, p.y - f.lift);
      }
      ctx.globalAlpha = 1;

      // build ghost
      if (S.buildMode && !view.godView) {
        const tgt = buildTargetAt(S, S.cmd.mx, S.cmd.my);
        const ok = canPlace(S, OWNER, S.buildPiece, tgt) && afford();
        ctx.fillStyle = ok ? 'rgba(180,220,120,.4)' : 'rgba(210,80,60,.45)';
        ctx.strokeStyle = ok ? '#c4d66a' : '#d2553c';
        ctx.lineWidth = 2;
        const def = BUILD[S.buildPiece];
        if (def.cat === 'cell') {
          const gx = tgt.gx * TILE, gy = tgt.gy * TILE;
          ctx.beginPath();
          [[0, 0], [TILE, 0], [TILE, TILE], [0, TILE]].forEach(([dx, dy], i) => {
            const p = P(gx + dx, gy + dy);
            i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y);
          });
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        } else {
          const seg = wallSegOf(tgt.key, { type: S.buildPiece, rot: S.buildRot & 1 });
          const a = P(seg[0], seg[1]), b = P(seg[2], seg[3]);
          ctx.lineWidth = 8;
          ctx.globalAlpha = 0.75;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
        function afford() {
          for (const k in def.cost) if ((S.inv[k] || 0) < def.cost[k]) return false;
          return true;
        }
      }

      // range rings + hover HP (not in god view)
      if (!view.godView && !S.player.inCopter) {
        for (const [k, d] of S.deploys) {
          if (d.type !== 'cupboard' || d.owner !== OWNER) continue;
          const [gx, gy] = k.split(',').map(Number);
          ringAt(gx * TILE + 32, gy * TILE + 32, CLAIM_R, 'rgba(126,200,80,0.3)', [10, 8]);
        }
        if (!S.shopOpen && !S.storeOpen) {
          const gx = Math.floor(S.cmd.mx / TILE), gy = Math.floor(S.cmd.my / TILE);
          const d = S.deploys.get(gx + ',' + gy);
          if (d && d.type === 'turret') ringAt(gx * TILE + 32, gy * TILE + 32, TTIER[d.tier || 1].range, 'rgba(240,156,72,0.3)', [6, 7]);
          const hov = hoverTarget(gx, gy);
          if (hov) {
            const p = P(hov.x, hov.y, 50);
            const f = Math.max(0, hov.hp / hov.max);
            ctx.fillStyle = 'rgba(0,0,0,.7)';
            ctx.fillRect(p.x - 18, p.y - 8, 36, 5);
            ctx.fillStyle = f > 0.5 ? '#7bbf4f' : f > 0.25 ? '#d8b24a' : '#c0432f';
            ctx.fillRect(p.x - 18, p.y - 8, 36 * f, 5);
          }
        }
      }

      // debug paths
      if (view.debugPaths) {
        ctx.font = 'bold 10px Trebuchet MS';
        for (const u of S.units) {
          if (u.dead || u.eliminated || u.flying) continue;
          if (!rig.inView(u.x, u.y, 600)) continue;
          const col = u.ally ? '#7ec850' : u.col;
          if (u.path && u.pathI < u.path.length) {
            ctx.strokeStyle = col;
            ctx.lineWidth = 1.5;
            ctx.globalAlpha = 0.8;
            ctx.beginPath();
            let p = P(u.x, u.y);
            ctx.moveTo(p.x, p.y);
            for (let i = u.pathI; i < u.path.length; i++) {
              p = P(u.path[i].x, u.path[i].y);
              ctx.lineTo(p.x, p.y);
            }
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
          const p2 = P(u.x, u.y, 56);
          ctx.fillStyle = '#000';
          ctx.fillText(u.act || u.state, p2.x + 1, p2.y + 1);
          ctx.fillStyle = col;
          ctx.fillText(u.act || u.state, p2.x, p2.y);
        }
      }

      // event markers (screen-clamped chips when offscreen)
      marker(S.airdrop && { x: S.airdrop.x, y: S.airdrop.fall < 1 ? S.airdrop.gy : S.airdrop.y }, 'AIRDROP', '#ffd76b', '✈');
      if (S.quarry) {
        const team = S.teams.find(t2 => t2.owner === S.quarry.owner);
        marker(S.quarry, 'QUARRY', S.quarry.owner === OWNER ? '#7ec850' : team ? team.col : '#b9b39d', 'Q');
      }
      if (S.lockedCrate) {
        const c = S.lockedCrate;
        marker(c, c.started ? 'CRATE ' + Math.ceil(c.t) + 's' : 'LOCKED CRATE', '#ffb84a', 'C');
      }

      // god-view extras: team bases + units + raids + you
      if (view.godView) {
        ctx.font = 'bold 9px Trebuchet MS';
        for (const team of S.teams) {
          for (const rec of team.bases) {
            if (rec.dead) continue;
            const p = P(rec.hx, rec.hy);
            ctx.fillStyle = team.col;
            ctx.fillRect(p.x - 6, p.y - 6, 12, 12);
            ctx.fillStyle = '#fff';
            ctx.fillText(String(team.id + 1), p.x, p.y + 3.5);
          }
        }
        for (const u of S.units) {
          if (u.dead || u.eliminated) continue;
          const p = P(u.x, u.y);
          ctx.fillStyle = u.ally ? '#7ec850' : u.col;
          ctx.beginPath();
          ctx.arc(p.x, p.y, u.primary ? 3.4 : 2.4, 0, 7);
          ctx.fill();
        }
        for (const r of S.raids) {
          const p = P(r.x, r.y);
          ctx.fillStyle = `rgba(255,82,56,${0.35 + 0.4 * (r.t / 60)})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 7 + 3 * Math.sin(t * 6), 0, 7);
          ctx.fill();
        }
        if (S.deathMark) {
          const p = P(S.deathMark.x, S.deathMark.y);
          ctx.fillStyle = '#000';
          ctx.beginPath(); ctx.arc(p.x, p.y, 8, 0, 7); ctx.fill();
          ctx.fillStyle = '#fff';
          ctx.beginPath(); ctx.arc(p.x, p.y - 1, 5, 0, 7); ctx.fill();
        }
        const yp = P(S.player.x, S.player.y);
        ctx.strokeStyle = '#7ec850';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(yp.x, yp.y, 11 + 3 * Math.sin(t * 6), 0, 7);
        ctx.stroke();
        ctx.font = 'bold 11px Trebuchet MS';
        ctx.fillStyle = '#7ec850';
        ctx.fillText('YOU', yp.x, yp.y - 18);
        ctx.fillStyle = '#d8d0ba';
        ctx.font = 'bold 14px Trebuchet MS';
        ctx.fillText('Click anywhere on the map to travel there', VW / 2, VH - 66);
      } else {
        // reticle
        const mx = view.mouseSX, my = view.mouseSY;
        if (mx !== undefined) {
          ctx.strokeStyle = 'rgba(225,235,195,.9)';
          ctx.lineWidth = 3;
          ctx.lineCap = 'round';
          for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
            ctx.beginPath();
            ctx.moveTo(mx + dx * 6, my + dy * 6);
            ctx.lineTo(mx + dx * 15, my + dy * 15);
            ctx.stroke();
          }
        }
      }

      // raid alarm / hurt / death / banners
      if (S.raidAlarm) {
        const al = Math.min(1, S.raidAlarm.t / 1.5);
        ctx.fillStyle = `rgba(180,30,20,${0.14 * al})`;
        ctx.fillRect(0, 0, VW, VH);
        ctx.textAlign = 'center';
        ctx.font = 'bold 22px Trebuchet MS';
        ctx.fillStyle = 'rgba(0,0,0,.7)';
        ctx.fillText('BASE UNDER ATTACK', VW / 2 + 2, 54);
        ctx.fillStyle = `rgba(255,${80 + 110 * (0.5 + 0.5 * Math.sin(t * 8))},55,${al})`;
        ctx.fillText('BASE UNDER ATTACK', VW / 2, 52);
      }
      if (S.player.hurt > 0) {
        ctx.fillStyle = `rgba(150,28,18,${S.player.hurt * 0.4})`;
        ctx.fillRect(0, 0, VW, VH);
      }
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
      ctx.textAlign = 'center';
    },
  };

  function hoverTarget(gx, gy) {
    const d = S.deploys.get(gx + ',' + gy);
    if (d) return { x: gx * TILE + 32, y: gy * TILE + 32, hp: d.hp, max: d.max };
    const st = S.structures.get(gx + ',' + gy);
    if (st) return { x: gx * TILE + 32, y: gy * TILE + 32, hp: st.hp, max: st.max };
    for (const k of ['V,' + gx + ',' + gy, 'V,' + (gx + 1) + ',' + gy, 'H,' + gx + ',' + gy, 'H,' + gx + ',' + (gy + 1)]) {
      const w = S.walls.get(k);
      if (!w) continue;
      const s = wallSegOf(k, w);
      const mx2 = (s[0] + s[2]) / 2, my2 = (s[1] + s[3]) / 2;
      if (Math.hypot(S.cmd.mx - mx2, S.cmd.my - my2) < 16) return { x: mx2, y: my2, hp: w.hp, max: w.max };
    }
    return null;
  }

  function marker(obj, label, col, chip) {
    if (!obj) return;
    const p = P(obj.x, obj.y);
    const VW = view.VW, VH = view.VH;
    ctx.textAlign = 'center';
    if (!p.behind && p.x > 0 && p.x < VW && p.y > 0 && p.y < VH) {
      if (view.godView) return;
      ctx.font = 'bold 11px Trebuchet MS';
      ctx.fillStyle = 'rgba(0,0,0,.7)';
      ctx.fillText(label, p.x + 1, p.y - 49);
      ctx.fillStyle = col;
      ctx.fillText(label, p.x, p.y - 50);
    } else {
      const cx2 = Math.max(54, Math.min(VW - 54, p.x));
      const cy2 = Math.max(54, Math.min(VH - 54, p.behind ? VH - 54 : p.y));
      ctx.fillStyle = col;
      ctx.globalAlpha = 0.92;
      ctx.beginPath(); ctx.arc(cx2, cy2, 14, 0, 7); ctx.fill();
      ctx.globalAlpha = 1;
      ctx.fillStyle = '#1c1812';
      ctx.font = 'bold 13px Trebuchet MS';
      ctx.fillText(chip, cx2, cy2 + 4.5);
    }
  }
}
