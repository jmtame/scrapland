"use strict";
/* ---------------- base expansion (spend gathered resources to grow & harden) ---------------- */
function botBaseBounds(owner){ let minx=1e9,miny=1e9,maxx=-1e9,maxy=-1e9,any=false;
  for(const [k,s] of game.structures){ if(s.owner!==owner||(s.type!=='floor'&&s.type!=='trifloor')) continue;
    const [gx,gy]=k.split(',').map(Number); any=true; if(gx<minx)minx=gx; if(gy<miny)miny=gy; if(gx>maxx)maxx=gx; if(gy>maxy)maxy=gy; }
  return any?{minx,miny,maxx,maxy}:null; }
function botStores(b){ const out=[b.inv]; const tc=game.deploys.get(b.tcKey); if(tc&&tc.store) out.push(tc.store); return out; }   // carried + the Tool Cupboard (the ONE store now — box removed)
function botHas(b,res,amt){ let t=0; for(const s of botStores(b)) t+=(s[res]||0); return t>=amt; }
function botPay(b,res,amt){ for(const s of botStores(b)){ if(amt<=0) break; const take=Math.min(s[res]||0,amt); s[res]-=take; amt-=take; } }
function botBaseFloors(owner){ let n=0; for(const [,s] of game.structures){ if(s.owner===owner&&(s.type==='floor'||s.type==='trifloor')) n++; } return n; }
function botOwnerTurrets(owner){ let n=0; for(const [,s] of game.deploys){ if(s.owner===owner&&s.type==='turret') n++; } return n; }
function botEstablished(b){ return botBaseFloors(b.owner)>=8 && botOwnerTurrets(b.owner)>=1; }   // built up enough to go raid
function wallWouldTrap(key){           // would adding this wall box a floored cell in with no usable exit? (walls AND solid turrets/boxes both block an exit)
  const p=key.split(','), t=p[0], a=+p[1], c=+p[2];
  const cells = t==='V' ? [[a-1,c],[a,c]] : [[a,c-1],[a,c]];
  for(const [gx,gy] of cells){ if(!game.structures.has(gkey(gx,gy))) continue;
    const edges=[['V,'+gx+','+gy,gx-1,gy], ['V,'+(gx+1)+','+gy,gx+1,gy], ['H,'+gx+','+gy,gx,gy-1], ['H,'+gx+','+(gy+1),gx,gy+1]];
    let blocked=0, hasDoor=false;
    for(const [e,nx,ny] of edges){ if(e===key){ blocked++; continue; }
      const w=game.walls.get(e); if(w){ blocked++; if(w.type==='door') hasDoor=true; continue; }
      const d=game.deploys.get(gkey(nx,ny)); if(d && d.type!=='cupboard'){ blocked++; } }    // an exit that only leads into a solid turret/box is no exit
    if(blocked>=4 && !hasDoor){ const cx=gx*TILE+TILE/2, cy=gy*TILE+TILE/2;
      const pIn = !player.dead && Math.abs(player.x-cx)<TILE/2 && Math.abs(player.y-cy)<TILE/2;   // only allow full enclosure if a player is inside
      if(!pIn) return true; } }
  return false; }
function deployWouldTrap(gx,gy){       // would dropping a solid deploy on (gx,gy) leave an adjacent own floor with no open exit?
  for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]){ const nx=gx+dx, ny=gy+dy; if(!foundationAt(nx,ny)) continue;
    const edges=[['V,'+nx+','+ny,nx-1,ny], ['V,'+(nx+1)+','+ny,nx+1,ny], ['H,'+nx+','+ny,nx,ny-1], ['H,'+nx+','+(ny+1),nx,ny+1]];
    let open=0;
    for(const [e,ex,ey] of edges){ const w=game.walls.get(e); if(w && w.type!=='door') continue;     // walled edge -> closed
      if(ex===gx && ey===gy) continue;                                                                 // this edge would open into the NEW deploy -> closed
      const dd=game.deploys.get(gkey(ex,ey)); if(dd && dd.type!=='cupboard') continue;                 // opens into an existing solid deploy -> closed
      open++; }
    if(open===0) return true; }
  return false; }
function botAddFloor(b){ if(!botHas(b,'wood',40)) return false; const bb=botBaseBounds(b.owner); if(!bb) return false;
  const cand=[];
  for(const [k,s] of game.structures){ if(s.owner!==b.owner||(s.type!=='floor'&&s.type!=='trifloor')) continue;
    const [gx,gy]=k.split(',').map(Number);
    for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]){ const nx=gx+dx, ny=gy+dy, nk=gkey(nx,ny);
      if(game.structures.has(nk)||game.deploys.has(nk)) continue;
      if(typeof copterAtCell==='function' && copterAtCell(nx,ny)) continue;             // can't lay a foundation on a minicopter
      if((Math.max(bb.maxx,nx)-Math.min(bb.minx,nx)+1)>10 || (Math.max(bb.maxy,ny)-Math.min(bb.miny,ny)+1)>10) continue;   // base may grow up to 10x10
      if(b.doorGy!==undefined && ny>=b.doorGy) continue;               // never wall off the door side
      const cx=nx*TILE+TILE/2, cy=ny*TILE+TILE/2; if(inSafeZone(cx,cy)||(typeof inMonZone==='function'&&inMonZone(cx,cy))) continue;
      if((typeof lakeAt==='function'&&lakeAt(cx,cy)) || (typeof onLand==='function'&&!onLand(cx,cy))) continue;   // never expand the base onto water/ocean (would strand units against it)
      if(typeof boulderAt==='function'&&boulderAt(cx,cy)) continue;                                             // never build on a boulder (solid)
      if(game.animals && game.animals.some(a=>a.hp>0 && Math.floor(a.x/TILE)===nx && Math.floor(a.y/TILE)===ny)) continue;   // can't lay a foundation on top of an animal
      cand.push({nx,ny,nk}); } }
  if(!cand.length) return false;
  const c=cand[randi(0,cand.length-1)]; botPay(b,'wood',40);
  game.structures.set(c.nk,{type:'floor',mat:'wood',hp:100,max:100,owner:b.owner});
  const wkeys=[];
  if(!game.structures.has(gkey(c.nx,c.ny-1))) wkeys.push('H,'+c.nx+','+c.ny);
  if(!game.structures.has(gkey(c.nx,c.ny+1))) wkeys.push('H,'+c.nx+','+(c.ny+1));
  if(!game.structures.has(gkey(c.nx-1,c.ny))) wkeys.push('V,'+c.nx+','+c.ny);
  if(!game.structures.has(gkey(c.nx+1,c.ny))) wkeys.push('V,'+(c.nx+1)+','+c.ny);
  for(const wk of wkeys){ if(!wallWouldTrap(wk)) eWall(wk,'wall',b.owner); }   // never box a cell in on all sides (anti-trap)
  addFloat(c.nx*TILE+TILE/2, c.ny*TILE+TILE/2-10,'+room','#9ad06a'); ensureSideDoors(b.owner); return true; }   // keep a door on each side of the GROWN perimeter
function botAddTurret(b){ if(!botHas(b,'metal',30)||!botHas(b,'wood',40)) return false;       // turrets go on the EXTERIOR perimeter: clear LOS to raiders/animals (interior turrets are blind behind their own walls), and they don't clog the inside
  const bb=botBaseBounds(b.owner); if(!bb) return false;
  const doorGx=Math.floor((b.doorX!==undefined?b.doorX:b.hx)/TILE);
  const cand=[];
  for(let nx=bb.minx-1; nx<=bb.maxx+1; nx++) for(let ny=bb.miny-1; ny<=bb.maxy+1; ny++){
    const nk=gkey(nx,ny); if(game.structures.has(nk)||game.deploys.has(nk)) continue;          // an empty ground cell, not a floor/deploy
    let adj=false; for(let ax=-1;ax<=1&&!adj;ax++) for(let ay=-1;ay<=1&&!adj;ay++){ const s=game.structures.get(gkey(nx+ax,ny+ay)); if(s&&s.owner===b.owner&&(s.type==='floor'||s.type==='trifloor')) adj=true; }
    if(!adj) continue;                                                                          // must hug the base wall
    if(b.doorGy!==undefined && ny>=b.doorGy && Math.abs(nx-doorGx)<=1) continue;                // keep the south door lane clear so units can get out
    const cx=nx*TILE+TILE/2, cy=ny*TILE+TILE/2;
    if(inSafeZone(cx,cy)||(typeof inMonZone==='function'&&inMonZone(cx,cy))) continue;
    if((typeof lakeAt==='function'&&lakeAt(cx,cy))||(typeof onLand==='function'&&!onLand(cx,cy))) continue;   // not on water
    if(typeof boulderAt==='function'&&boulderAt(cx,cy)) continue;                                            // not on a boulder
    if(typeof copterAtCell==='function'&&copterAtCell(nx,ny)) continue;
    let near=false; for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]){ const dd=game.deploys.get(gkey(nx+dx,ny+dy)); if(dd&&dd.type==='turret'){ near=true; break; } }
    if(near) continue;                                                                          // space turrets out (dotted ring) so units keep clear lanes around the base
    cand.push({nk,cx,cy}); }
  if(cand.length){ cand.sort((p,q)=> Math.hypot(q.cx-(b.doorX||b.hx),q.cy-(b.doorY||b.hy)) - Math.hypot(p.cx-(b.doorX||b.hx),p.cy-(b.doorY||b.hy)) );   // cover the raid-facing sides first (farthest from our own door)
    const c=cand[0]; game.deploys.set(c.nk,{type:'turret',mat:'wood',hp:150,max:150,angle:0,cd:0,owner:b.owner, tier:(b.hard?3:b.weak?1:2), ext:true});   // ext: placed on the exterior perimeter
    game._turBuilt=game._turBuilt||{ext:0,int:0}; game._turBuilt.ext++;
    botPay(b,'metal',30); botPay(b,'wood',40); addFloat(c.cx,c.cy-10,'+turret','#9ad06a'); return true; }
  for(const [k,s] of game.structures){ if(s.owner!==b.owner||s.type!=='floor'||game.deploys.has(k)) continue;   // fallback: no exterior spot -> an interior floor (rare)
    const [gx,gy]=k.split(',').map(Number); if(deployWouldTrap(gx,gy)) continue;
    game.deploys.set(k,{type:'turret',mat:'wood',hp:150,max:150,angle:0,cd:0,owner:b.owner, tier:(b.hard?3:b.weak?1:2), ext:false});
    game._turBuilt=game._turBuilt||{ext:0,int:0}; game._turBuilt.int++;
    botPay(b,'metal',30); botPay(b,'wood',40); addFloat(gx*TILE+TILE/2,gy*TILE+TILE/2-10,'+turret','#9ad06a'); return true; }
  return false; }
function botParkSpot(b){                        // where to PARK the minicopter: just off the base footprint, on the side AWAY from the nearest enemy base (gunfire comes from that direction — keep the copter sheltered so it isn't lost)
  const bb=botBaseBounds(b.owner);
  const cxB = bb?((bb.minx+bb.maxx+1)*TILE/2):b.hx, cyB = bb?((bb.miny+bb.maxy+1)*TILE/2):b.hy;
  let ex=null,ey=null,bd=1e18;
  for(const o of game.enemies){ if(o.owner===b.owner||!o.primary||o.eliminated||!baseAlive(o)) continue; const d=dist2(cxB,cyB,o.hx,o.hy); if(d<bd){ bd=d; ex=o.hx; ey=o.hy; } }
  let ax=-1, ay=0; if(ex!==null){ const a=Math.atan2(cyB-ey, cxB-ex); ax=Math.cos(a)||-1; ay=Math.sin(a)||0; }   // unit vector FROM the enemy base toward us = the sheltered side
  const reach=(bb?Math.max(bb.maxx-bb.minx+1, bb.maxy-bb.miny+1):3)*TILE/2 + TILE*2.5;
  return { x:clamp(cxB+ax*reach,COPTER.r,WORLD.w-COPTER.r), y:clamp(cyB+ay*reach,COPTER.r,WORLD.h-COPTER.r), cxB, cyB, ax, ay }; }
function botParkCopterClear(b){ const c=b.copter; if(!c||c.destroyed||b.flying||b._aboard) return;   // a parked copter must never sit on the buildable footprint, and parks on the side sheltered from the nearest enemy base
  const bb=botBaseBounds(b.owner); if(!bb) return;
  const sp=botParkSpot(b);
  const cg=Math.floor(c.x/TILE), cgy=Math.floor(c.y/TILE);
  const onFootprint = cg>=bb.minx-1 && cg<=bb.maxx+1 && cgy>=bb.miny-1 && cgy<=bb.maxy+1;
  const enemySide = ((c.x-sp.cxB)*(-sp.ax) + (c.y-sp.cyB)*(-sp.ay)) > 0;                          // copter currently sits on the enemy-facing half -> exposed, move it to shelter
  if((onFootprint || enemySide) && Math.hypot(c.x-sp.x, c.y-sp.y) > TILE*1.2){
    c.x=clamp(sp.x,COPTER.r,WORLD.w-COPTER.r); c.y=clamp(sp.y,COPTER.r,WORLD.h-COPTER.r); c.vx=0; c.vy=0;
    if((game.t-(b._parkT||-1e9))>5){ b._parkT=game.t; addFloat(c.x,c.y-22,'moved copter','#bcd0e0'); } } }
function botHarden(b){   // harden a wall — CASCADE one wall up as far as resources allow in a single call (wood->stone->metal->armored), so a base actually reaches ARMORED (depth-first) instead of every wall creeping up one tier at a time
  for(const [k,w] of game.walls){ if(w.owner!==b.owner || w.mat==='armored') continue;
    let upg=false;
    if(w.mat==='wood' && botHas(b,'stone',15)){ botPay(b,'stone',15); w.mat='stone'; upg=true; }
    if(w.mat==='stone' && botHas(b,'metal',20)){ botPay(b,'metal',20); w.mat='metal'; upg=true; }
    if(w.mat==='metal' && (b.hqm||0)>=8){ b.hqm-=8; w.mat='armored'; upg=true; }                       // spend HQM (bought at the trade zone) to ARMOR-PLATE the wall (2x metal HP)
    if(upg){ w.max=tierHp(BUILD[w.type],w.mat); w.hp=w.max; const sg=wallSegOf(k,w);
      addFloat((sg[0]+sg[2])/2,(sg[1]+sg[3])/2,'+'+w.mat, w.mat==='armored'?'#7f93ad':w.mat==='metal'?'#aeb6bf':'#c2c8cf'); return true; } }
  return false; }
function botHardenFloor(b){   // also upgrade FOUNDATIONS (floors) wood->stone->metal->armored — its OWN build step (not gated behind every wall being armored, so growing bases still reinforce their floors)
  for(const [k,s] of game.structures){ if(s.owner!==b.owner || (s.type!=='floor'&&s.type!=='trifloor') || s.mat==='armored') continue;
    let upg=false;
    if(s.mat==='wood' && botHas(b,'stone',12)){ botPay(b,'stone',12); s.mat='stone'; upg=true; }
    if(s.mat==='stone' && botHas(b,'metal',16)){ botPay(b,'metal',16); s.mat='metal'; upg=true; }
    if(s.mat==='metal' && (b.hqm||0)>=6){ b.hqm-=6; s.mat='armored'; upg=true; }
    if(upg){ s.max=tierHp(BUILD[s.type],s.mat); s.hp=s.max; const c=k.indexOf(','), gx=+k.slice(0,c), gy=+k.slice(c+1);
      addFloat(gx*TILE+TILE/2,gy*TILE+TILE/2,'+'+s.mat, s.mat==='armored'?'#7f93ad':s.mat==='metal'?'#aeb6bf':'#c2c8cf'); return true; } }
  return false; }
function botBuild(b){    // proactive base development, in the user's priority order (hard bots build bigger, tougher, costlier-to-raid bases)
  botParkCopterClear(b);                                          // first move the helicopter off the build area if it's in the way
  const floors=botBaseFloors(b.owner);
  const minFloors=b.hard?9:5, maxTur=b.hard?10:b.weak?5:8, capFloors=b.hard?49:36;   // ~7x7 (hard) / 6x6 fortress: still tough, but CRACKABLE so matches resolve, and a smaller footprint = far less at-base circling/idle
  if(floors<minFloors && botAddFloor(b)) return true;            // 1: footprint (hard = larger = longer path to the Tool Cupboard)
  if(b.primary && floors>=5 && botHireWorker(b)) return true;    // 2: HIRE workers — each one compounds the whole economy, so hiring outranks defenses (capped per team)
  if(botOwnerTurrets(b.owner)<maxTur && botAddTurret(b)) return true; // 3: ring with turrets (hard = more) for animal + raid defense
  if(b.hard && botHarden(b)) return true;                        // hard bots harden walls to stone/metal early -> expensive to breach
  if(!b.jack && botHas(b,'wood',120) && botHas(b,'metal',60)){ botPay(b,'wood',120); botPay(b,'metal',60); b.jack=true;  // 4: jackhammer (3x gather)
    addFloat(b.x,b.y-22,'+jackhammer','#e6c878'); return true; }
  b._hf=!b._hf;                                                  // 4: harden WALLS and FOUNDATIONS, alternating which is tried first so BOTH advance even while the base keeps expanding (walls alone would always have work and floors would never upgrade)
  if(b._hf){ if(botHardenFloor(b)) return true; if(botHarden(b)) return true; }
  else { if(botHarden(b)) return true; if(botHardenFloor(b)) return true; }
  if(floors<capFloors && botAddFloor(b)) return true;            // keep growing when resource-rich
  return false; }
function botBreached(b){   // a perimeter gap (no wall, not the doorway) in our base -> needs sealing
  const doorKey = b.doorGy!==undefined ? ('H,'+Math.floor((b.doorX||b.hx)/TILE)+','+b.doorGy) : null;
  for(const [k,s] of game.structures){ if(s.owner!==b.owner||(s.type!=='floor'&&s.type!=='trifloor')) continue;
    const [gx,gy]=k.split(',').map(Number);
    const sides=[['H,'+gx+','+gy,gx,gy-1],['H,'+gx+','+(gy+1),gx,gy+1],['V,'+gx+','+gy,gx-1,gy],['V,'+(gx+1)+','+gy,gx+1,gy]];
    for(const [ek,nx,ny] of sides){ if(game.structures.has(gkey(nx,ny))) continue;   // shared interior edge -> fine
      if(ek===doorKey) continue;                                                       // the doorway is meant to be open
      const w=game.walls.get(ek); if(!w || w.hp<=0){ if(game._freed && (game._freed[ek]||0) > (game.t||0)) continue;   // just tore this down to escape -> leave it open briefly (no churn)
        return ek; } } }                                                               // exposed perimeter edge -> breach
  return null; }
function botUpkeepStores(b){ return botStores(b); }   // box removed -> seal/repair draw the same single store (the Tool Cupboard)
function botPayUpkeep(b,res,amt){ const stores=botUpkeepStores(b); let have=0; for(const s of stores) have+=(s[res]||0); if(have<amt) return false; for(const s of stores){ if(amt<=0)break; const take=Math.min(s[res]||0,amt); s[res]-=take; amt-=take; } return true; }
function botSealWall(b,ek){ if(!ek) ek=botBreached(b); if(!ek) return false;
  const lock=(typeof REPAIR_LOCK!=='undefined'?REPAIR_LOCK:30);                              // a DESTROYED wall's spot can't be re-walled for REPAIR_LOCK (30s) -> a committed raid stays open and actually breaks in (no instant reseal)
  if(game._breachT && (game.t||0)-(game._breachT[ek]||-1e9) < lock) return false;
  if(!botPayUpkeep(b,'wood',40)) return false;
  eWall(ek,'wall',b.owner); const w=game.walls.get(ek); if(w){ const sg=wallSegOf(ek,w); addFloat((sg[0]+sg[2])/2,(sg[1]+sg[3])/2-8,'sealed','#9ad06a'); } return true; }
function botDamagedWall(b){ let worst=null, wf=0.6; const lock=(typeof REPAIR_LOCK!=='undefined'?REPAIR_LOCK:10);   // a perimeter wall below 60% hp -> wants repair (most-damaged first)
  for(const [k,w] of game.walls){ if(w.owner!==b.owner||w.type==='door'||w.hp<=0) continue; if(game.t-(w._hitT!==undefined?w._hitT:-1e9)<lock) continue; const f=w.hp/w.max; if(f<wf){ wf=f; worst=k; } } return worst; }   // skip walls hit in the last REPAIR_LOCK s (no instant repairs)
function botRepairCost(w){ return w.mat==='metal'?['metal',8]:w.mat==='stone'?['stone',8]:['wood',12]; }
function botRepairWall(b,k){ const w=game.walls.get(k); if(!w) return false; if(game.t-(w._hitT!==undefined?w._hitT:-1e9)<(typeof REPAIR_LOCK!=='undefined'?REPAIR_LOCK:10)) return false; const c=botRepairCost(w);
  if(!botPayUpkeep(b,c[0],c[1])) return false; w.hp=Math.min(w.max,w.hp+w.max*0.5);
  const sg=wallSegOf(k,w); addFloat((sg[0]+sg[2])/2,(sg[1]+sg[3])/2-8,'repaired','#9ad06a'); return true; }
function botSafe(b){ const tc=game.deploys.get(b.tcKey); if(!tc||!tc.store) return false;   // enough in the TC to NOT decay for 5 minutes -> objective flips to raiding
  const store=tc.store.wood+tc.store.stone+tc.store.metal, n=botBaseFloors(b.owner)+botOwnerTurrets(b.owner)+2, up=(typeof UPKEEP!=='undefined'?UPKEEP:0.0075);
  return store > n*up*300; }
function depositHome(b){   // drop ALL carried loot into the Tool Cupboard (box removed — the TC is the one store)
  if(b.ally){ for(const r of ['wood','stone','metal']){ if(b.inv[r]>0){ game.inv[r]=(game.inv[r]||0)+b.inv[r]; b.inv[r]=0; } } if(b.scrap>0){ game.inv.scrap=(game.inv.scrap|0)+b.scrap; b.scrap=0; } return; }   // player's workers stock the player's stockpile
  const tc=game.deploys.get(b.tcKey); if(!tc||!tc.store) return;
  for(const r of ['wood','stone','metal']){ if(b.inv[r]>0){ tc.store[r]=(tc.store[r]||0)+b.inv[r]; b.inv[r]=0; } }
  if((b.scrap||0)>0){ tc.store.scrap=(tc.store.scrap||0)+b.scrap; b.scrap=0; } }

