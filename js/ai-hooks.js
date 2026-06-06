"use strict";
/* ---------------- combat hooks (called from main updateBullets/explode) ---------------- */
function creditKill(by){ if(!by) return; const reward=12;                       // kills pay out scrap
  if(by===OWNER){ game.playerKills=(game.playerKills||0)+1; game.inv.scrap=(game.inv.scrap|0)+reward; }
  else { const k=game.enemies.find(e=>e.owner===by); if(k){ k.kills=(k.kills||0)+1; k.scrap=(k.scrap||0)+reward; } } }
function hurtBot(b,dmg,sx,sy,by){ if(b.dead||b.flying||b.eliminated) return; if(typeof inSafeZone==='function' && inSafeZone(b.x,b.y)) return;   // no damage in the trade safe zone
  b.hp-=dmg; burst(b.x,b.y,COL.blood,5,140);
  b.regenT=4;                                                          // pause health regen for a few seconds after being hit
  if(by) b.lastHitBy=by;
  if(sx!==undefined){ b.threatX=sx; b.threatY=sy; b.retaliateT=2.2; }   // remember who shot us -> return fire
  if(b.hp<=0) botDie(b); }
function botDie(b){ b.dead=true; b.respawnT=15; b.flying=false;   // 15s respawn: a BIG coordinated raid out-cycles a base's trickle of respawning defenders (its real advantage), while a forward raid base puts the raiders' own respawns back on the wall fast
  for(const r of ['wood','stone','metal']){ if(b.inv[r]>0){ spillStack(b.x,b.y,r,b.inv[r]); b.inv[r]=0; } }   // killed -> drop carried resources on the ground
  if(typeof addLoot==='function'){                                                            // ALSO drop their rockets, ammo, GUN and scrap (so loot is recoverable, matching the player) -> the winning side scavenges it and snowballs (momentum)
    if(b.rockets>0){ for(let i=0;i<b.rockets && i<12;i++) addLoot(b.x,b.y,'rocket',1); b.rockets=0; }
    if((b.grenades||0)>0){ for(let i=0;i<b.grenades && i<6;i++) addLoot(b.x,b.y,'rocket',1); b.grenades=0; }
    addLoot(b.x,b.y,'ammo', (typeof randi==='function')?randi(24,60):40);
    if(b.gun && b.gun!=='pistol'){ addLoot(b.x,b.y,'gun',1,b.gun); b.gun='pistol'; } }          // DROP THE GUN -> a scavenger upgrades from it; the dead unit reverts to a pistol (must re-earn its weapon) — momentum for the winning team
  if((b.scrap||0)>0 && typeof spillStack==='function'){ spillStack(b.x,b.y,'scrap',b.scrap); b.scrap=0; }
  if(b.id===game.bounty && b.lastHitBy===OWNER){ game.inv.scrap=(game.inv.scrap|0)+BOUNTY_REWARD; addFloat(player.x,player.y-30,'+'+BOUNTY_REWARD+' bounty!','#ffe07a'); game.bounty=null; }
  creditKill(b.lastHitBy); burst(b.x,b.y,COL.blood,20,220); addFloat(b.x,b.y-20,'down','#e2664a'); }
function botEliminate(b){ b.eliminated=true; b.dead=true; game.elims.push({text:'Base '+(b.id+1)+' ELIMINATED', t:30}); }
function clearDeadBase(owner, tx, ty){   // a base whose TC was cracked -> clear its orphaned walls/floors/turrets so they don't litter the map (units would otherwise circle dead-base wall debris) — also speeds the field collapse. Tight radius so a team's OTHER base (>=900px away) is untouched.
  const R2=560*560;
  for(const [k,w] of [...game.walls]){ if(w.owner!==owner) continue; const sg=wallSegOf(k,w); if(dist2(tx,ty,(sg[0]+sg[2])/2,(sg[1]+sg[3])/2)<R2) game.walls.delete(k); }
  for(const [k,s] of [...game.structures]){ if(s.owner!==owner||(s.type!=='floor'&&s.type!=='trifloor')) continue; const c=k.indexOf(','),gx=+k.slice(0,c),gy=+k.slice(c+1), cx=gx*TILE+TILE/2, cy=gy*TILE+TILE/2; if(dist2(tx,ty,cx,cy)<R2){ game.structures.delete(k); if(typeof burst==='function') burst(cx,cy,'#6f4a22',3,90); } }
  for(const [k,d] of [...game.deploys]){ if(d.owner!==owner||d.type==='cupboard') continue; const c=k.indexOf(','),gx=+k.slice(0,c),gy=+k.slice(c+1); if(dist2(tx,ty,gx*TILE+TILE/2,gy*TILE+TILE/2)<R2) game.deploys.delete(k); } }

