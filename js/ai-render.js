"use strict";
/* ---------------- rendering (called inside the world transform / LOS clip) ---------------- */
function drawTransports(){ if(!game.transports) return; for(const tr of game.transports){ if(tr.destroyed || !inView(tr.x,tr.y,TRANSPORT.r+40)) continue;
  const s=worldToScreen(tr.x,tr.y), col=ENEMY_COLS[(parseInt((tr.owner||'e0').slice(1))||0)%ENEMY_COLS.length];
  ctx.fillStyle='rgba(0,0,0,.25)'; ctx.beginPath(); ctx.ellipse(s.x,s.y+10,TRANSPORT.r,TRANSPORT.r*0.6,0,0,TAU); ctx.fill();
  ctx.save(); ctx.translate(s.x,s.y-16); ctx.rotate(tr.angle);
  ctx.fillStyle=COL.copterDk; ctx.fillRect(-TRANSPORT.r*1.5,-5,TRANSPORT.r,10);                                   // tail boom
  ctx.fillStyle=col; ctx.beginPath(); ctx.ellipse(0,0,TRANSPORT.r*0.98,TRANSPORT.r*0.62,0,0,TAU); ctx.fill();      // big hull
  ctx.strokeStyle='rgba(0,0,0,.35)'; ctx.lineWidth=2; ctx.stroke();
  ctx.fillStyle='rgba(0,0,0,.28)'; ctx.beginPath(); ctx.ellipse(0,TRANSPORT.r*0.2,TRANSPORT.r*0.8,TRANSPORT.r*0.3,0,0,TAU); ctx.fill();
  ctx.fillStyle='rgba(210,238,255,.92)'; ctx.beginPath(); ctx.ellipse(TRANSPORT.r*0.55,0,TRANSPORT.r*0.3,TRANSPORT.r*0.34,0,0,TAU); ctx.fill();   // cockpit glass
  ctx.restore();
  ctx.save(); ctx.translate(s.x,s.y-16); ctx.rotate(tr.rotor||0); ctx.fillStyle='rgba(36,42,32,.5)'; ctx.fillRect(-5,-TRANSPORT.r*1.6,10,TRANSPORT.r*3.2); ctx.fillRect(-TRANSPORT.r*1.6,-5,TRANSPORT.r*3.2,10); ctx.restore();
  if(tr.riders&&tr.riders.length){ ctx.fillStyle='#e6c45e'; ctx.font='bold 11px sans-serif'; ctx.textAlign='center'; ctx.fillText('×'+tr.riders.length, s.x, s.y-TRANSPORT.r-12); ctx.textAlign='left'; }
  if(tr.hp<tr.max){ const f=Math.max(0,tr.hp/tr.max); ctx.fillStyle='rgba(0,0,0,.6)'; ctx.fillRect(s.x-22,s.y-TRANSPORT.r-22,44,4); ctx.fillStyle='#d2553c'; ctx.fillRect(s.x-22,s.y-TRANSPORT.r-22,44*f,4); } } }
function drawBotCopter(b){ const c=b.copter; if(!c || c.destroyed) return; if(!inView(c.x,c.y,40)) return;
  const s=worldToScreen(c.x,c.y), fly=b.flying, lift=fly?12:2;
  ctx.fillStyle='rgba(0,0,0,.25)'; ctx.beginPath(); ctx.ellipse(s.x,s.y+6,COPTER.r*0.9,COPTER.r*0.55,0,0,TAU); ctx.fill();
  ctx.save(); ctx.translate(s.x,s.y-lift); ctx.rotate(c.angle);
  ctx.fillStyle=COL.copterDk; ctx.fillRect(-COPTER.r*1.4,-3,COPTER.r*0.9,6);                          // tail boom
  ctx.fillStyle=rgrad(2,-3,COPTER.r*0.85,b.col,'rgba(0,0,0,.55)');                                    // tinted hull, shaded
  ctx.beginPath(); ctx.ellipse(0,0,COPTER.r*0.8,COPTER.r*0.58,0,0,TAU); ctx.fill();
  ctx.strokeStyle='rgba(0,0,0,.3)'; ctx.lineWidth=1.5; ctx.beginPath(); ctx.ellipse(0,0,COPTER.r*0.8,COPTER.r*0.58,0,0,TAU); ctx.stroke();
  ctx.fillStyle=rgrad(COPTER.r*0.5,-2,COPTER.r*0.3,'rgba(210,238,255,.95)','rgba(110,160,200,.6)');   // glass
  ctx.beginPath(); ctx.ellipse(COPTER.r*0.5,0,COPTER.r*0.27,COPTER.r*0.31,0,0,TAU); ctx.fill();
  ctx.fillStyle='rgba(255,255,255,.5)'; ctx.beginPath(); ctx.ellipse(COPTER.r*0.42,-COPTER.r*0.12,COPTER.r*0.09,COPTER.r*0.12,0,0,TAU); ctx.fill();
  ctx.restore();
  ctx.save(); ctx.translate(s.x,s.y-lift); ctx.rotate(c.rotor||0); ctx.fillStyle='rgba(36,42,32,'+(fly?0.5:0.9)+')';
  ctx.fillRect(-3,-COPTER.r*1.2,6,COPTER.r*2.4); ctx.fillRect(-COPTER.r*1.2,-3,COPTER.r*2.4,6); ctx.restore(); }
function drawBot(b){ const s=worldToScreen(b.x,b.y);
  shadow(s.x,s.y+12,14);
  const moving=(b.state==='gather'||b.state==='raid'||b.state==='return'), lk=moving?Math.sin(game.t*10+(b.id||0))*1.8:0;
  ctx.fillStyle=vgrad(s.x,s.y+5,0,12,'#3a322a','#1c160f'); fillRR(s.x-7,s.y+5+lk,5,11,2.2,ctx.fillStyle); fillRR(s.x+2,s.y+5-lk,5,11,2.2,ctx.fillStyle);  // legs
  ctx.save(); ctx.translate(s.x,s.y-1); ctx.rotate(b.angle);                                          // arm + tool/gun
  ctx.fillStyle='#c39e76'; fillRR(2,-2.5,9,5,2,ctx.fillStyle);                                         // forearm
  if(b.gathering){ ctx.save(); ctx.translate(8,0); ctx.rotate(-0.4+Math.sin(b.swing||0)*0.9);          // swing a tool exactly like the player gathering
      ctx.fillStyle='#5b4226'; ctx.fillRect(0,-2,16,4); ctx.fillStyle='#b9c0c7'; ctx.fillRect(13,-6,7,12); ctx.restore(); }
  else { ctx.fillStyle='#23261f'; fillRR(8,-3,17,6,2,ctx.fillStyle); ctx.fillStyle='#54584c'; ctx.fillRect(8,-3,17,1.5);
         if(b.rifleLaser){ ctx.fillStyle='#ff5a4a'; ctx.beginPath(); ctx.arc(26,0,1.7,0,TAU); ctx.fill(); } }   // rifle/pistol (+ red laser-sight emitter when upgraded)
  ctx.restore();
  ctx.fillStyle='#15140e'; fillRR(s.x-9,s.y-7,18,15,5,ctx.fillStyle);                                 // torso
  ctx.fillStyle=b.col; fillRR(s.x-7,s.y-6,14,13,4,ctx.fillStyle);
  ctx.fillStyle='rgba(0,0,0,.34)'; rrect(s.x-7,s.y+1,14,6,3); ctx.fill();                              // lower shade
  ctx.fillStyle='rgba(255,255,255,.16)'; fillRR(s.x-7,s.y-6,14,4,3,ctx.fillStyle);                     // shoulder sheen
  if(b.bodyArmor>0 && typeof ARMOR!=='undefined'){ ctx.fillStyle=(ARMOR.bodyCol&&ARMOR.bodyCol[b.bodyArmor])||'#9fb0c8'; fillRR(s.x-6,s.y-4,12,9,2.5,ctx.fillStyle);   // BODY ARMOR plate -> hard teams visibly wear armor
    ctx.fillStyle='rgba(0,0,0,.42)'; for(let i=0;i<b.bodyArmor;i++) ctx.fillRect(s.x-4+i*3.4,s.y+3,2.2,1.4); }                                                         // level pips
  const hy=s.y-13; ctx.fillStyle='#15140e'; ctx.beginPath(); ctx.arc(s.x,hy,7,0,TAU); ctx.fill();       // head
  ctx.fillStyle=rgrad(s.x,hy,6,'#e2bd96','#a9805a'); ctx.beginPath(); ctx.arc(s.x,hy,5.4,0,TAU); ctx.fill();
  ctx.fillStyle=b.col; fillRR(s.x-5,hy-6,10,3.4,1.5,ctx.fillStyle);                                     // team band
  if(b.facemask>0 && typeof ARMOR!=='undefined'){ ctx.fillStyle=(ARMOR.headCol&&ARMOR.headCol[b.facemask])||'#aab4c2'; fillRR(s.x-5,hy-1,10,5,2,ctx.fillStyle); }   // FACEMASK / visor over the face
  if(b.hp<b.max){ const f=Math.max(0,b.hp/b.max); ctx.fillStyle='rgba(0,0,0,.6)'; fillRR(s.x-12,s.y-27,24,4,2,ctx.fillStyle);
    ctx.fillStyle='#d2553c'; fillRR(s.x-12,s.y-27,24*f,4,2,ctx.fillStyle); } }
function drawEnemies(){ drawTransports();
  for(const b of game.enemies){ if(b.eliminated) continue;
  drawBotCopter(b);
  const inCopter = b.flying && b.copter && !b.copter.destroyed;                 // only a bot actually riding an intact copter is hidden (it's drawn AS the copter)
  if(!b.dead && !inCopter && inView(b.x,b.y,40)) drawBot(b); } }                // otherwise the bot is always drawn — no invisible units
/* ---------------- debug paths overlay (toggled by the HUD "Debug paths" button) ---------------- */
function botAction(b){               // short label for what this unit is currently DOING — uses the ground-truth b._act set each frame in updateBot (build/gather/toNode/monument/trade/return/raid/defend/loot/airdrop/roam/found)
  if(b._unfounded) return b._act || (b.primary ? 'found' : 'gather');
  return b._act || b.state || 'gather';
}
function drawDebugPaths(){           // draw each live unit's current ROUTE (waypoints) + ACTION label, so pathing/jitter is visible
  if(!game.enemies) return;
  ctx.save(); ctx.lineWidth=1.6; ctx.font='bold 10px sans-serif'; ctx.textAlign='center';
  for(const b of game.enemies){ if(b.eliminated||b.dead||b.flying) continue; if(!inView(b.x,b.y,120)) continue;
    const s=worldToScreen(b.x,b.y), col=b.ally?'#7ec850':(b.col||'#dddddd'), pl=b._plan;
    ctx.strokeStyle=col; ctx.fillStyle=col; ctx.globalAlpha=0.8;
    if(pl && pl.mode==='path' && pl.path && pl.path.length){                    // A* terrain path
      ctx.beginPath(); ctx.moveTo(s.x,s.y); for(let i=(pl.i||0);i<pl.path.length;i++){ const w=worldToScreen(pl.path[i].x,pl.path[i].y); ctx.lineTo(w.x,w.y); } ctx.stroke();
      for(let i=(pl.i||0);i<pl.path.length;i++){ const w=worldToScreen(pl.path[i].x,pl.path[i].y); ctx.beginPath(); ctx.arc(w.x,w.y,2.6,0,TAU); ctx.fill(); }
    } else if(pl && pl.mode==='around' && pl.cs){                               // rounding our own base via committed corners
      ctx.beginPath(); ctx.moveTo(s.x,s.y); for(let i=(pl.i||0);i<pl.cs.length;i++){ const w=worldToScreen(pl.cs[i].x,pl.cs[i].y); ctx.lineTo(w.x,w.y); } ctx.stroke();
      for(let i=(pl.i||0);i<pl.cs.length;i++){ const w=worldToScreen(pl.cs[i].x,pl.cs[i].y); ctx.beginPath(); ctx.arc(w.x,w.y,3,0,TAU); ctx.stroke(); }
    } else if(b._navX!==undefined){                                            // immediate move target (door routing / direct)
      const w=worldToScreen(b._navX,b._navY); ctx.setLineDash([4,4]); ctx.beginPath(); ctx.moveTo(s.x,s.y); ctx.lineTo(w.x,w.y); ctx.stroke(); ctx.setLineDash([]);
    }
    ctx.globalAlpha=1; const act=botAction(b);
    ctx.fillStyle='rgba(0,0,0,.7)'; ctx.fillText(act, s.x+1, s.y-29); ctx.fillStyle=col; ctx.fillText(act, s.x, s.y-30);
  }
  ctx.globalAlpha=1; ctx.restore();
}
