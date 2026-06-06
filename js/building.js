"use strict";
/* ------------------------------- building ------------------------------- */
let tipTimer=0;
function flashTip(t){ const el=document.getElementById('tip'); el.textContent=t; el.classList.add('show'); tipTimer=1.4; }
function buildGhostCell(){ const w=screenToWorld(mouse.sx,mouse.sy); return cellOf(w.x,w.y); }
function inWorldCell(gx,gy){ return gx>=0&&gy>=0&&gx<Math.ceil(WORLD.w/TILE)&&gy<Math.ceil(WORLD.h/TILE); }
function structBounds(extra){   // bounding box of FOUNDATION (floor) cells only (+ optional candidate)
  let minx=1e9,miny=1e9,maxx=-1e9,maxy=-1e9,any=false;
  const acc=(gx,gy)=>{any=true; if(gx<minx)minx=gx; if(gy<miny)miny=gy; if(gx>maxx)maxx=gx; if(gy>maxy)maxy=gy;};
  for(const [k,s] of game.structures){ if(s.owner!==OWNER || (s.type!=='floor'&&s.type!=='trifloor')) continue; const [gx,gy]=k.split(',').map(Number); acc(gx,gy); }  // only the player's own base counts toward the size cap
  if(extra) acc(extra.gx,extra.gy);
  return any?{minx,miny,maxx,maxy,w:maxx-minx+1,h:maxy-miny+1}:null;
}
function exceedsBase(gx,gy){ if(!BUILD[game.buildPiece].found) return false;
  const b=structBounds({gx,gy}); return !!(b && (b.w>BASE_MAX || b.h>BASE_MAX)); }
function foundationAt(gx,gy){ const s=game.structures.get(gkey(gx,gy)); return !!(s && (s.type==='floor'||s.type==='trifloor')); }
function copterAtCell(gx,gy){ const cx=gx*TILE+TILE/2, cy=gy*TILE+TILE/2, R=COPTER.r+8;     // a minicopter sitting on this cell (foundations can't be placed on it)
  if(game.copter && !game.copter.destroyed && Math.abs(game.copter.x-cx)<R && Math.abs(game.copter.y-cy)<R) return game.copter;
  for(const e of game.enemies){ const c=e.copter; if(c && !c.destroyed && Math.abs(c.x-cx)<R && Math.abs(c.y-cy)<R) return c; }
  return null; }
function structByKey(key){ return (key[0]==='H'||key[0]==='V'||key[0]==='D') ? game.walls.get(key) : game.structures.get(key); }
function edgeUnderCursor(){    // nearest straight edge of the foundation cell under the cursor
  const w=screenToWorld(mouse.sx,mouse.sy);
  const gx=Math.floor(w.x/TILE), gy=Math.floor(w.y/TILE), lx=w.x-gx*TILE, ly=w.y-gy*TILE;
  const d={top:ly, bottom:TILE-ly, left:lx, right:TILE-lx}; let side='top',bd=1e9;
  for(const k in d){ if(d[k]<bd){ bd=d[k]; side=k; } }
  const key = side==='top'?'H,'+gx+','+gy : side==='bottom'?'H,'+gx+','+(gy+1)
            : side==='left'?'V,'+gx+','+gy : 'V,'+(gx+1)+','+gy;
  return {key, gx, gy};
}
function edgeHasFoundation(key){
  const p=key.split(','), t=p[0], a=+p[1], b=+p[2];
  return t==='V' ? (foundationAt(a,b)||foundationAt(a-1,b)) : (foundationAt(a,b)||foundationAt(a,b-1));
}
function inSafeZone(x,y){ return game.shop && dist2(x,y,game.shop.x,game.shop.y) < SAFE_R*SAFE_R; }
const MON_NOBUILD = SAFE_R;     // monuments are no-build zones, same radius as the trade safe zone
function inMonZone(x,y){ if(!game.monuments) return false; for(const m of game.monuments){ if(dist2(x,y,m.x,m.y) < MON_NOBUILD*MON_NOBUILD) return true; } return false; }
function nearestCupboard(x,y){ let best=null,bd=CLAIM_R*CLAIM_R;
  for(const [k,s] of game.deploys){ if(s.type!=='cupboard') continue; const [gx,gy]=k.split(',').map(Number), cx=gx*TILE+TILE/2, cy=gy*TILE+TILE/2;
    const d=dist2(x,y,cx,cy); if(d<bd){ bd=d; best={s,cx,cy,d:Math.sqrt(d)}; } }
  return best; }
function placeStructure(){
  const piece=game.buildPiece, def=BUILD[piece];
  if(def.cat==='cell'){
    const {gx,gy}=buildGhostCell(); if(!inWorldCell(gx,gy)) return;
    const key=gkey(gx,gy), cx=gx*TILE+TILE/2, cy=gy*TILE+TILE/2;
    if(inSafeZone(cx,cy)){ flashTip('Shop safe zone — no building'); return; }
    if(inMonZone(cx,cy)){ flashTip('Monument — no building here'); return; }
    if(boulderAt(cx,cy)){ flashTip('A boulder blocks building here'); return; }
    if(def.box||def.turret||def.tc){                 // deployables sit ON a foundation/ground (own map)
      if(game.deploys.has(key)){ flashTip('Already something here'); return; }
      if((def.box||def.tc) && !foundationAt(gx,gy)){ flashTip(def.tc?'Cupboard goes on a foundation':'Box needs a foundation'); return; }
      if(def.tc){
        for(const [,s2] of game.deploys){ if(s2.type==='cupboard' && s2.owner===OWNER){ flashTip('You can only have one Tool Cupboard'); return; } }  // own TC rule takes priority
        for(const [k2,s2] of game.deploys){ if(s2.type!=='cupboard') continue; const [ox,oy]=k2.split(',').map(Number);
          if(dist2(cx,cy,ox*TILE+TILE/2,oy*TILE+TILE/2)<MIN_TC_DIST*MIN_TC_DIST){ flashTip('Too close to another base'); return; } } }
      if(def.turret && !nearestCupboard(cx,cy)){ flashTip('Turret needs a Tool Cupboard base'); return; }
      const pc=cellOf(player.x,player.y); if(pc.gx===gx&&pc.gy===gy){ flashTip("Can't build on yourself"); return; }
      if(!canAfford(def.cost)){ flashTip('Not enough resources'); return; }
      pay(def.cost);
      const o={type:piece, mat:'wood', hp:def.hp, max:def.hp, open:false, angle:0, cd:0, lock:(def.lockable?{by:OWNER,locked:true,authorized:true}:null), owner:OWNER};   // lockables (box/cupboard) auto-lock to the owner on placement (no manual lock toggle)
      if(def.store) o.store={wood:0,stone:0,metal:0,scrap:0};
      game.deploys.set(key,o);
      burst(cx,cy, def.tc?COL.tcLt:COL.boxLt, 11,130); if(def.tc) addFloat(cx,cy-22,'base claimed','#caa24a'); return;
    }
    if(game.structures.has(key)){ flashTip('Tile occupied'); return; }              // foundations
    if(copterAtCell(gx,gy)){ flashTip('Move the minicopter first'); return; }       // can't lay a foundation on a minicopter
    if(def.found && exceedsBase(gx,gy)){ flashTip('Base limited to '+BASE_MAX+'×'+BASE_MAX); return; }
    if(!canAfford(def.cost)){ flashTip('Not enough resources'); return; }
    pay(def.cost);
    const o={type:piece, mat:'wood', hp:def.hp, max:def.hp, owner:OWNER};
    if(def.tri) o.rot=game.buildRot&3;
    game.structures.set(key,o);
    burst(cx,cy, COL.woodLt, 12, 130);
  } else if(def.cat==='edge'){
    const e=edgeUnderCursor(), s=wallSegOf(e.key,null), mx=(s[0]+s[2])/2, my=(s[1]+s[3])/2;
    if(inSafeZone(mx,my)){ flashTip('Shop safe zone — no building'); return; }
    if(inMonZone(mx,my)){ flashTip('Monument — no building here'); return; }
    if(game.walls.has(e.key)){ flashTip('Edge occupied'); return; }                 // never two walls on one edge (no stacking)
    if(!edgeHasFoundation(e.key)){ flashTip('Walls go on foundation edges'); return; }
    // BASE walls & doors may be placed ANYWHERE in the base (interior edges included) — only the deployable 'wood wall' fence is barred from the base. (No perimeter-only rule.)
    if(!canAfford(def.cost)){ flashTip('Not enough resources'); return; }
    pay(def.cost);
    game.walls.set(e.key,{type:piece, mat:'wood', hp:def.hp, max:def.hp, open:false, lock:(piece==='door'?{by:OWNER,locked:true,authorized:true}:null), owner:OWNER});   // doors are AUTOMATICALLY locked to the owner when placed
    burst(mx,my, COL.woodLt, 9, 120);
  } else { // diagonal wall in a foundation cell
    const {gx,gy}=buildGhostCell(), key='D,'+gx+','+gy, cx=gx*TILE+TILE/2, cy=gy*TILE+TILE/2;
    if(inSafeZone(cx,cy)){ flashTip('Shop safe zone — no building'); return; }
    if(inMonZone(cx,cy)){ flashTip('Monument — no building here'); return; }
    if(!foundationAt(gx,gy)){ flashTip('Triangle needs a foundation'); return; }
    if(game.walls.has(key)){ flashTip('Occupied'); return; }
    if(!canAfford(def.cost)){ flashTip('Not enough resources'); return; }
    pay(def.cost);
    game.walls.set(key,{type:'triangle', mat:'wood', hp:def.hp, max:def.hp, rot:game.buildRot&1, lock:null, owner:OWNER});
    burst(cx,cy, COL.woodLt, 9, 120);
  }
}
function refund(obj){ const d=BUILD[obj.type]; for(const k in d.cost) give(k, Math.floor(d.cost[k]/2));
  if(obj.mat==='stone'||obj.mat==='metal') give('stone',7);
  if(obj.mat==='metal') give('metal',10); }
function removeWall(key){ const w=game.walls.get(key); if(!w) return; refund(w);
  game.walls.delete(key); const s=wallSegOf(key,w); burst((s[0]+s[2])/2,(s[1]+s[3])/2,'#8a8f7a',8,120); }
function removeCell(key){ const s=game.structures.get(key); if(!s) return; refund(s);
  game.structures.delete(key); const [gx,gy]=key.split(',').map(Number);
  if(s.type==='floor'||s.type==='trifloor') cleanupOrphans(gx,gy);
  burst(gx*TILE+TILE/2,gy*TILE+TILE/2,'#8a8f7a',8,120); }
function removeDeploy(key){ const b=game.deploys.get(key); if(!b) return; refund(b); game.deploys.delete(key);
  const [gx,gy]=key.split(',').map(Number); burst(gx*TILE+TILE/2,gy*TILE+TILE/2,'#8a8f7a',8,120); }
function removeStructure(){
  const def=BUILD[game.buildPiece];
  if(def.cat==='edge'){ removeWall(edgeUnderCursor().key); }
  else if(def.cat==='diag'){ const {gx,gy}=buildGhostCell(); removeWall('D,'+gx+','+gy); }
  else if(def.box||def.turret||def.tc){ const {gx,gy}=buildGhostCell(); removeDeploy(gkey(gx,gy)); }
  else { const {gx,gy}=buildGhostCell(); removeCell(gkey(gx,gy)); }
}
function cyclePiece(dir){ let i=PIECES.indexOf(game.buildPiece); i=(i+dir+PIECES.length)%PIECES.length;
  game.buildPiece=PIECES[i]; refreshBuildMenu(); }
function targetForBuild(){     // resolve the structure the current piece would act on + its center
  const def=BUILD[game.buildPiece];
  if(def.cat==='edge'){ const e=edgeUnderCursor(); const o=game.walls.get(e.key); const s=wallSegOf(e.key,o);
    return {obj:o, key:e.key, cx:(s[0]+s[2])/2, cy:(s[1]+s[3])/2}; }
  if(def.cat==='diag'){ const {gx,gy}=buildGhostCell(); const key='D,'+gx+','+gy;
    return {obj:game.walls.get(key), key, cx:gx*TILE+TILE/2, cy:gy*TILE+TILE/2}; }
  const {gx,gy}=buildGhostCell(); const key=gkey(gx,gy);
  const d=BUILD[game.buildPiece];
  const obj = (d.box||d.turret||d.tc) ? game.deploys.get(key) : game.structures.get(key);
  return {obj, key, cx:gx*TILE+TILE/2, cy:gy*TILE+TILE/2};
}
function structUnderCursor(){     // whatever structure is under the cursor (wall edge first, then the cell), regardless of selected piece
  const w=screenToWorld(mouse.sx,mouse.sy), gx=Math.floor(w.x/TILE), gy=Math.floor(w.y/TILE), ck=gkey(gx,gy);
  const e=edgeUnderCursor(), wl=game.walls.get(e.key);
  if(wl){ const sg=wallSegOf(e.key,wl); if(ptSeg(w.x,w.y,sg[0],sg[1],sg[2],sg[3])<18) return {obj:wl,key:e.key,cx:(sg[0]+sg[2])/2,cy:(sg[1]+sg[3])/2}; }
  const d=game.deploys.get(ck); if(d) return {obj:d,key:ck,cx:gx*TILE+TILE/2,cy:gy*TILE+TILE/2};
  const st=game.structures.get(ck); if(st) return {obj:st,key:ck,cx:gx*TILE+TILE/2,cy:gy*TILE+TILE/2};
  return {obj:null};
}
function upgradeStructure(){
  const t=structUnderCursor();
  if(!t.obj){ flashTip('Aim at a structure'); return; }
  if(!BUILD[t.obj.type] || !BUILD[t.obj.type].up){ flashTip("Can't upgrade that"); return; }
  const mat=t.obj.mat||'wood', up=UPGRADE[mat];
  if(!up){ flashTip('Already armored (max tier)'); return; }
  if(!canAfford(up.cost)){ flashTip('Need '+Object.entries(up.cost).map(([k,v])=>v+' '+(k==='hqm'?'HQM (buy at shop)':k)).join(', ')); return; }
  pay(up.cost); t.obj.mat=up.next; t.obj.max=tierHp(BUILD[t.obj.type], up.next); t.obj.hp=t.obj.max;
  burst(t.cx,t.cy, up.next==='armored'?'#7f93ad':up.next==='metal'?'#cfd6cf':'#c2c8cf',16,150); addFloat(t.cx,t.cy-8,up.next,'#cfe0ff');
}
/* ----- container storage (box / cupboard) ----- */
function openStore(s, title){ game.store={ref:s, title:title||'Box'}; for(const kk in keys) keys[kk]=false; mouse.down=false;
  document.getElementById('store-title').textContent=game.store.title;
  document.getElementById('store').classList.remove('hidden'); refreshStore(); }
function closeStore(){ game.store=null; document.getElementById('store').classList.add('hidden'); }
function storeMove(kind, amt){ const s=game.store&&game.store.ref; if(!s||!s.store) return;
  if(amt!==0 && Math.abs(amt)<1){ const f=Math.abs(amt);                                                       // fractional = 10% of bag (deposit) / store (withdraw)
    amt = amt>0 ? Math.max(1,Math.ceil(f*(game.inv[kind]|0))) : -Math.max(1,Math.ceil(f*(s.store[kind]|0))); }
  if(amt>0){ amt=Math.min(amt, game.inv[kind]|0); game.inv[kind]-=amt; s.store[kind]=(s.store[kind]|0)+amt; }   // deposit
  else { amt=Math.min(-amt, s.store[kind]|0); s.store[kind]-=amt; game.inv[kind]+=amt; }                       // withdraw
  refreshStore(); }
function refreshStore(){ const s=game.store&&game.store.ref; if(!s||!s.store) return;
  for(const kind of ['wood','stone','metal','scrap']){ const st=document.getElementById('st-'+kind), iv=document.getElementById('inv-'+kind);
    if(st) st.textContent=(s.store[kind]|0); if(iv) iv.textContent=(game.inv[kind]|0); } }
/* ----- trade shop ----- */
function openShop(){ game.shopOpen=true; for(const kk in keys) keys[kk]=false; mouse.down=false;
  document.getElementById('shop-scrap').textContent=game.inv.scrap|0; refreshArmorRows(); refreshShopBuys(); document.getElementById('shop').classList.remove('hidden'); }
function closeShop(){ game.shopOpen=false; document.getElementById('shop').classList.add('hidden'); }
function doTrade(i){ const t=SHOP.trades[i]; if(!canAfford(t.give)){ flashTip('Not enough resources'); return; }
  pay(t.give); give('scrap', t.get); document.getElementById('shop-scrap').textContent=game.inv.scrap|0; flashTip('+'+t.get+' scrap'); }
function doBuy(i){ const b=SHOP.buys[i]; if((game.inv.scrap|0) < b.scrap){ flashTip('Need '+b.scrap+' scrap'); return; }
  game.inv.scrap-=b.scrap; const W=WEAPONS[b.w], justUnlocked=!game.owned[b.w]; game.owned[b.w]=true; W.reserve+=b.ammo; if(justUnlocked && W.ammo<W.magSize) W.ammo=W.magSize;   // first purchase UNLOCKS the weapon (+ a full mag); later purchases just add reserve ammo
  document.getElementById('shop-scrap').textContent=game.inv.scrap|0; if(typeof refreshHotbar==='function') refreshHotbar(); refreshShopBuys();
  flashTip(justUnlocked ? (W.name+' unlocked! (press '+({pistol:2,rifle:3,minigun:4,rocket:5,sniper:7,shotgun:8,hmg:9}[b.w])+')') : ('+'+b.ammo+' '+W.name+' ammo')); }
function refreshShopBuys(){ SHOP.buys.forEach((b,i)=>{ const el=document.getElementById('shopbuy-'+i); if(!el) return; const owned=!!game.owned[b.w];
    el.innerHTML='<span>'+(owned?('+'+b.ammo+' '+WEAPONS[b.w].name+' ammo'):('Buy '+WEAPONS[b.w].name+' — unlock'))+'</span><span class="sx">'+b.scrap+' scrap'+(owned?'':' ✦')+'</span>'; }); }
function buyJackhammer(){ if(game.jackhammer){ flashTip('Jackhammer already owned'); return; }
  if((game.inv.scrap|0) < 30){ flashTip('Need 30 scrap'); return; }
  game.inv.scrap-=30; game.jackhammer=true; document.getElementById('shop-scrap').textContent=game.inv.scrap|0;
  refreshJackRow(); flashTip('Jackhammer acquired — 3× gathering'); }
function buyRifleLaser(){ if(player.rifleLaser){ flashTip('Rifle laser already owned'); return; }
  if(!game.owned.rifle){ flashTip('Buy the Rifle first'); return; }
  if((game.inv.scrap|0) < 14){ flashTip('Need 14 scrap'); return; }
  game.inv.scrap-=14; player.rifleLaser=true; document.getElementById('shop-scrap').textContent=game.inv.scrap|0;
  refreshLaserRow(); flashTip('Rifle laser sight fitted — tighter aim'); }
function refreshLaserRow(){ const el=document.getElementById('buy-laser'); if(!el) return;
  el.innerHTML = player.rifleLaser ? '<span>Rifle laser sight</span><span class="sx">owned ✓</span>'
                                   : '<span>Rifle laser sight · tighter aim</span><span class="sx">14 scrap</span>';
  el.style.opacity = player.rifleLaser?0.6:1; }
function buyFence(){ if((game.inv.wood|0)<10){ flashTip('Need 10 wood'); return; }      // wood fence: cheap bullet cover
  game.inv.wood-=10; game.inv.fence=(game.inv.fence|0)+1; flashTip('+1 fence ('+(game.inv.fence|0)+' held)  — press G to place'); }
function buyGrenade(){ if((game.inv.scrap|0)<8){ flashTip('Need 8 scrap'); return; }                      // throwable grenade (Q)
  game.inv.scrap-=8; game.inv.grenade=(game.inv.grenade|0)+1; document.getElementById('shop-scrap').textContent=game.inv.scrap|0; flashTip('+1 grenade ('+(game.inv.grenade|0)+' held) — press Q to throw'); }
function dropPlayerFence(){ if((game.inv.fence|0)<=0){ flashTip('No fences — buy at the trade shop (10 wood)'); return; }
  const a=player.angle, fx=player.x+Math.cos(a)*34, fy=player.y+Math.sin(a)*34;
  if(foundationAt(Math.floor(fx/TILE),Math.floor(fy/TILE))){ flashTip("Can't deploy a wall on a foundation / inside a base"); return; }   // regression fix: deployable walls go in the open, not on foundations
  if(!placeFence(fx,fy,a+Math.PI/2,OWNER)){ flashTip("Can't deploy a wall here"); return; }
  game.inv.fence--; flashTip('Fence placed ('+(game.inv.fence|0)+' left)'); }
function buyWorker(){ if((game.inv.scrap|0)<100){ flashTip('Need 100 scrap'); return; }                  // hire an ally worker
  if(typeof spawnPlayerWorker!=='function'){ flashTip('Workers unavailable'); return; }
  game.inv.scrap-=100; spawnPlayerWorker(); document.getElementById('shop-scrap').textContent=game.inv.scrap|0; flashTip('Worker hired — gathers, defends & raids for you'); }
function buyHQM(){ if((game.inv.scrap|0)<12){ flashTip('Need 12 scrap'); return; }                          // high-quality metal: armored-tier upgrades only (buy-only)
  game.inv.scrap-=12; game.inv.hqm=(game.inv.hqm|0)+10; document.getElementById('shop-scrap').textContent=game.inv.scrap|0; flashTip('+10 HQM ('+(game.inv.hqm|0)+' held) — upgrade a metal wall/door to armored'); }
function buyArmor(kind){ const cur=(kind==='head'?player.facemask:player.bodyArmor)|0; const name=kind==='head'?'Facemask':'Body armor';   // facemask/body armor: 3 levels, each tier costs more scrap
  if(cur>=3){ flashTip(name+' maxed (L3)'); return; }
  const cost=ARMOR.cost[cur+1]; if((game.inv.scrap|0)<cost){ flashTip('Need '+cost+' scrap'); return; }
  game.inv.scrap-=cost; if(kind==='head') player.facemask=cur+1; else player.bodyArmor=cur+1;
  document.getElementById('shop-scrap').textContent=game.inv.scrap|0; refreshArmorRows();
  flashTip(name+' → Level '+(cur+1)+(cur+1===3?' (best protection)':'')); }
function refreshArmorRows(){ const f=document.getElementById('buy-facemask'), b=document.getElementById('buy-bodyarmor');
  if(f){ const lv=player.facemask|0; f.innerHTML = lv>=3?'<span>Facemask · L3 head</span><span class="sx">maxed ✓</span>':'<span>Facemask L'+(lv+1)+' · head</span><span class="sx">'+ARMOR.cost[lv+1]+' scrap</span>'; f.style.opacity=lv>=3?0.6:1; }
  if(b){ const lv=player.bodyArmor|0; b.innerHTML = lv>=3?'<span>Body armor · L3 chest</span><span class="sx">maxed ✓</span>':'<span>Body armor L'+(lv+1)+' · chest</span><span class="sx">'+ARMOR.cost[lv+1]+' scrap</span>'; b.style.opacity=lv>=3?0.6:1; } }

