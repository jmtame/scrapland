"use strict";
/* ------------------------------ rendering ------------------------------- */
function hash(x,y){ let h=(x|0)*374761393+(y|0)*668265263; h=(h^(h>>13))*1274126177; return ((h^(h>>16))>>>0)/4294967295; }
function vrange(){ const hw=(VW/2)/game.zoom, hh=(VH/2)/game.zoom;
  return {x0:game.cam.cx-hw, y0:game.cam.cy-hh, x1:game.cam.cx+hw, y1:game.cam.cy+hh}; }
function inView(x,y,m){ const v=game._v||vrange(); return x>v.x0-m && x<v.x1+m && y>v.y0-m && y<v.y1+m; }
/* the world rendered as a flat schematic (always-visible wall/floor layout, no live entities) */
function drawBlueprint(){
  const v=game._v, x0=Math.max(0,v.x0), y0=Math.max(0,v.y0), x1=Math.min(WORLD.w,v.x1), y1=Math.min(WORLD.h,v.y1);
  ctx.fillStyle=COL.bpFill; ctx.fillRect(x0,y0,x1-x0,y1-y0);
  ctx.strokeStyle=COL.bpFloor; ctx.lineWidth=1.5/game.zoom;
  for(const [k,st] of game.structures){ if(st.type!=='floor'&&st.type!=='trifloor') continue; const [gx,gy]=k.split(',').map(Number);
    if(inView(gx*TILE,gy*TILE,TILE)) ctx.strokeRect(gx*TILE+2,gy*TILE+2,TILE-4,TILE-4); }
  ctx.strokeStyle=COL.bpWall; ctx.lineWidth=2/game.zoom;
  for(const [k,d] of game.deploys){ const [gx,gy]=k.split(',').map(Number); if(!inView(gx*TILE,gy*TILE,TILE)) continue;
    ctx.strokeRect(gx*TILE+6,gy*TILE+6,TILE-12,TILE-12);
    if(d.type==='turret'){ ctx.beginPath(); ctx.arc(gx*TILE+32,gy*TILE+32,9,0,TAU); ctx.stroke(); } }
  if(game.shop && inView(game.shop.x,game.shop.y,80)){ ctx.beginPath(); ctx.arc(game.shop.x,game.shop.y,game.shop.r,0,TAU); ctx.stroke(); }
  ctx.lineWidth=3/game.zoom; ctx.lineCap='round';
  for(const [k,w] of game.walls){ const sg=wallSegOf(k,w), mx=(sg[0]+sg[2])/2, my=(sg[1]+sg[3])/2; if(!inView(mx,my,TILE)) continue;
    if(w.type==='door'&&w.open){ const vert=sg[0]===sg[2]; ctx.beginPath();
      if(vert){ ctx.moveTo(sg[0],sg[1]); ctx.lineTo(sg[0],sg[1]+12); ctx.moveTo(sg[0],sg[3]-12); ctx.lineTo(sg[0],sg[3]); }
      else    { ctx.moveTo(sg[0],sg[1]); ctx.lineTo(sg[0]+12,sg[1]); ctx.moveTo(sg[2]-12,sg[1]); ctx.lineTo(sg[2],sg[1]); }
      ctx.stroke(); }
    else { ctx.beginPath(); ctx.moveTo(sg[0],sg[1]); ctx.lineTo(sg[2],sg[3]); ctx.stroke(); } }
  ctx.lineCap='butt';
}
function shadow(x,y,r){ const g=ctx.createRadialGradient(x,y,r*0.1,x,y,r);    // soft, feathered drop shadow
  g.addColorStop(0,'rgba(0,0,0,.34)'); g.addColorStop(0.7,'rgba(0,0,0,.18)'); g.addColorStop(1,'rgba(0,0,0,0)');
  ctx.fillStyle=g; ctx.beginPath(); ctx.ellipse(x,y,r,r*0.55,0,0,TAU); ctx.fill(); }
function rrect(x,y,w,h,r){ const m=Math.max(0,Math.min(r,w/2,h/2)); ctx.beginPath();
  if(ctx.roundRect){ ctx.roundRect(x,y,w,h,m); }
  else { ctx.moveTo(x+m,y); ctx.arcTo(x+w,y,x+w,y+h,m); ctx.arcTo(x+w,y+h,x,y+h,m); ctx.arcTo(x,y+h,x,y,m); ctx.arcTo(x,y,x+w,y,m); ctx.closePath(); } }
function vgrad(x,y,w,h,c0,c1){ const g=ctx.createLinearGradient(x,y,x,y+h); g.addColorStop(0,c0); g.addColorStop(1,c1); return g; }
function rgrad(x,y,r,c0,c1){ const g=ctx.createRadialGradient(x-r*0.32,y-r*0.32,r*0.08,x,y,r); g.addColorStop(0,c0); g.addColorStop(1,c1); return g; }
function fillRR(x,y,w,h,r,style){ rrect(x,y,w,h,r); ctx.fillStyle=style; ctx.fill(); }
function blob(x,y,r,seed){ ctx.beginPath(); const n=9; for(let i=0;i<=n;i++){ const a=i/n*TAU;
  const rr=r*(0.84+0.18*Math.sin(a*3+seed)); const px=x+Math.cos(a)*rr, py=y+Math.sin(a)*rr;
  i?ctx.lineTo(px,py):ctx.moveTo(px,py);} ctx.closePath(); ctx.fill(); }
function poly(x,y,r,n,seed){ ctx.beginPath(); for(let i=0;i<n;i++){ const a=i/n*TAU+seed;
  const rr=r*(0.78+0.26*Math.sin(i*2.3+seed)); const px=x+Math.cos(a)*rr, py=y+Math.sin(a)*rr;
  i?ctx.lineTo(px,py):ctx.moveTo(px,py);} ctx.closePath(); ctx.fill(); }
function star(x,y,R,r,n){ ctx.beginPath(); for(let i=0;i<n*2;i++){ const a=i/(n*2)*TAU; const rr=i%2?r:R;
  const px=x+Math.cos(a)*rr, py=y+Math.sin(a)*rr; i?ctx.lineTo(px,py):ctx.moveTo(px,py);} ctx.closePath(); ctx.fill(); }

const FLOWERCOLS=['#e7d24a','#e3705c','#d98ad0','#e7e3ef','#6fb6e0','#e89a4e'];
function drawPaths(v){ if(!game.paths||!game.paths.length) return;
  ctx.lineCap='round'; ctx.lineJoin='round';
  for(const pth of game.paths){
    let near=false; for(const p of pth.pts){ if(p.x>v.x0-80&&p.x<v.x1+80&&p.y>v.y0-80&&p.y<v.y1+80){ near=true; break; } }
    if(!near) continue;
    const f=pth.fade||null;                                                                       // per-segment alpha so the road TAPERS OUT (yields) where it meets a rail — drawn segment-by-segment
    for(let i=0;i<pth.pts.length-1;i++){ const a=f?Math.min(f[i],f[i+1]):1; if(a<=0.02) continue;   // road faded to nothing at the tracks -> skip (the road "stops" smoothly)
      const p0=pth.pts[i], p1=pth.pts[i+1]; ctx.globalAlpha=a;
      ctx.strokeStyle='#5b4a2c'; ctx.lineWidth=pth.w;   ctx.beginPath(); ctx.moveTo(p0.x,p0.y); ctx.lineTo(p1.x,p1.y); ctx.stroke();   // thin packed-earth rim (low contrast — no heavy outline)
      ctx.strokeStyle='#6b5532'; ctx.lineWidth=pth.w-3; ctx.beginPath(); ctx.moveTo(p0.x,p0.y); ctx.lineTo(p1.x,p1.y); ctx.stroke(); } // dirt fills almost the whole width
    ctx.globalAlpha=1;
    if(pth.poles && pth.poles.length>1){                                                          // powerlines beside the road
      ctx.strokeStyle='rgba(18,20,16,0.6)'; ctx.lineWidth=1.3; ctx.beginPath();
      for(let i=0;i<pth.poles.length-1;i++){ const a=pth.poles[i], c=pth.poles[i+1], mx=(a.x+c.x)/2, my=(a.y+c.y)/2+12;
        ctx.moveTo(a.x-3,a.y-21); ctx.quadraticCurveTo(mx-3,my-21,c.x-3,c.y-21);
        ctx.moveTo(a.x+3,a.y-21); ctx.quadraticCurveTo(mx+3,my-21,c.x+3,c.y-21); }
      ctx.stroke();
      for(const p of pth.poles){ if(p.x<v.x0-40||p.x>v.x1+40||p.y<v.y0-40||p.y>v.y1+40) continue;
        ctx.fillStyle='rgba(0,0,0,.2)'; ctx.beginPath(); ctx.ellipse(p.x,p.y+2,7,3,0,0,TAU); ctx.fill();
        ctx.fillStyle='#3a3026'; ctx.fillRect(p.x-2,p.y-27,4,29); ctx.fillStyle='#4a3d2e'; ctx.fillRect(p.x-9,p.y-25,18,3);
        ctx.fillStyle='#211a12'; ctx.fillRect(p.x-9,p.y-27,2.5,5); ctx.fillRect(p.x+6.5,p.y-27,2.5,5); }
    }
  }
  ctx.lineCap='butt'; ctx.lineJoin='round';
}
function drawRails(v){ if(!game.rails||!game.rails.length) return;
  const GA=11;                                                                                    // half the rail gauge
  ctx.lineCap='butt'; ctx.lineJoin='round';
  for(const rl of game.rails){ const pts=rl.pts;
    let near=false; for(const p of pts){ if(p.x>v.x0-90&&p.x<v.x1+90&&p.y>v.y0-90&&p.y<v.y1+90){ near=true; break; } } if(!near) continue;
    ctx.strokeStyle='#574d40'; ctx.lineWidth=GA*2+16; ctx.beginPath(); pts.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y)); ctx.stroke();   // ballast bed (gravel)
    ctx.strokeStyle='#6b5f4e'; ctx.lineWidth=GA*2+7;  ctx.beginPath(); pts.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y)); ctx.stroke();
    ctx.strokeStyle='#3a2e1d'; ctx.lineWidth=4.5;                                                  // wooden ties (sleepers) — perpendicular bars
    for(let i=0;i<pts.length-1;i++){ const a=pts[i], b2=pts[i+1]; let dx=b2.x-a.x, dy=b2.y-a.y; const ln=Math.hypot(dx,dy)||1; dx/=ln; dy/=ln; const nx=-dy, ny=dx, ties=Math.max(1,Math.floor(ln/24));
      for(let k=0;k<ties;k++){ const tt=(k+0.5)/ties, cx=a.x+dx*ln*tt, cy=a.y+dy*ln*tt;
        if(cx<v.x0-30||cx>v.x1+30||cy<v.y0-30||cy>v.y1+30) continue;
        ctx.beginPath(); ctx.moveTo(cx+nx*(GA+5),cy+ny*(GA+5)); ctx.lineTo(cx-nx*(GA+5),cy-ny*(GA+5)); ctx.stroke(); } }
    for(const s of [1,-1]){ ctx.strokeStyle='#aab1b8'; ctx.lineWidth=2.6; ctx.beginPath();           // two steel rails (offset along the local perpendicular)
      for(let i=0;i<pts.length;i++){ const p=pts[i], pr=pts[i-1]||p, nx2=pts[i+1]||p; let dx=nx2.x-pr.x, dy=nx2.y-pr.y; const ln=Math.hypot(dx,dy)||1; const nx=-dy/ln, ny=dx/ln;
        const ox=p.x+nx*GA*s, oy=p.y+ny*GA*s; i?ctx.lineTo(ox,oy):ctx.moveTo(ox,oy); }
      ctx.stroke(); } }
  ctx.lineCap='butt';
}
function _col(c){ if(c[0]==='#'){ const n=parseInt(c.slice(1),16); return [n>>16,(n>>8)&255,n&255]; } const m=c.match(/[\d.]+/g)||[0,0,0]; return [+m[0],+m[1],+m[2]]; }
function lerpHex(a,b,t){ const A=_col(a), B=_col(b);                 // accepts BOTH '#rrggbb' and 'rgb(...)' (boundary blends are rgb, so re-blending them stays valid — no black seams)
  return 'rgb('+Math.round(A[0]+(B[0]-A[0])*t)+','+Math.round(A[1]+(B[1]-A[1])*t)+','+Math.round(A[2]+(B[2]-A[2])*t)+')'; }
function smooth01(t){ t=clamp(t,0,1); return t*t*(3-2*t); }
function biomeCols(x,y){ x+=biomeRidge(y); const b1=WORLD.w/3, b2=2*WORLD.w/3, tw=WORLD.w*0.05;   // wavy (ridged) biome boundaries, lightly blended
  const D=BIOME.desert.ground, J=BIOME.jungle.ground, W=BIOME.winter.ground;
  if(x<b1-tw) return D;
  if(x<b1+tw){ const t=smooth01((x-(b1-tw))/(2*tw)); return [lerpHex(D[0],J[0],t), lerpHex(D[1],J[1],t)]; }
  if(x<b2-tw) return J;
  if(x<b2+tw){ const t=smooth01((x-(b2-tw))/(2*tw)); return [lerpHex(J[0],W[0],t), lerpHex(J[1],W[1],t)]; }
  return W; }
function drawGround(){
  const v=vrange();
  const x0=Math.max(0,v.x0), y0=Math.max(0,v.y0), x1=Math.min(WORLD.w,v.x1), y1=Math.min(WORLD.h,v.y1);
  const CS = game.zoom<0.45 ? 192 : 64;                                                        // cell fill so biome boundaries are wavy/ridged (not straight strips); coarser when zoomed out
  for(let cyy=Math.floor(y0/CS)*CS; cyy<y1; cyy+=CS) for(let cxx=Math.floor(x0/CS)*CS; cxx<x1; cxx+=CS){
    const gc=biomeCols(cxx+CS/2, cyy+CS/2), f=clamp(cyy/WORLD.h,0,1);                            // shade top->bottom for depth
    ctx.fillStyle=lerpHex(gc[0],gc[1],f); ctx.fillRect(cxx,cyy,CS+1,CS+1); }
  drawPaths(v);
  drawRails(v); drawCrossings();
  const wind=game.wind||0;
  const g=48, ix0=Math.floor(x0/g), ix1=Math.floor(x1/g), iy0=Math.floor(y0/g), iy1=Math.floor(y1/g);
  for(let ix=ix0; ix<=ix1; ix++) for(let iy=iy0; iy<=iy1; iy++){ const h=hash(ix,iy), x=ix*g, y=iy*g;
    const bm=biomeAt(x + (hash(ix*5+2,iy*3+8)-0.5)*WORLD.w*0.10), B=BIOME[bm];   // jittered boundary -> decoration types interleave
    if(h<0.08){                                                                              // sparse wind-blown grass tufts (replaces the old blob patches)
      const bx=x+18+(hash(ix+1,iy)-0.5)*22, by=y+24+(hash(ix,iy+1)-0.5)*22, sw=(wind*1.3+Math.sin(game.t*1.7+h*40))*4.5;
      if(bm==='desert'){ ctx.fillStyle='rgba(150,120,60,.35)'; ctx.beginPath(); ctx.ellipse(bx,by,7,3,0,0,TAU); ctx.fill(); }   // faint sand tuft
      else { ctx.strokeStyle = bm==='winter' ? 'rgba(170,192,214,.55)' : 'rgba('+(70+(h*200|0))+',128,52,.6)';
        ctx.lineWidth=1.6; ctx.lineCap='round'; ctx.beginPath();
        ctx.moveTo(bx-3,by); ctx.lineTo(bx-4+sw*0.7,by-7);
        ctx.moveTo(bx,by);   ctx.lineTo(bx+sw,by-11);
        ctx.moveTo(bx+3,by); ctx.lineTo(bx+4+sw*0.8,by-7); ctx.stroke(); ctx.lineCap='butt'; } }
    const hr=hash(ix*3+11,iy*5+7);                                                            // rocks (desert/winter) / pebbles
    if(hr>0.93){ const rx=x+(hr*97%g), ry=y+(hr*131%g), rr=2.2+hr*3, rc=bm==='winter'?['#e6eef4','#bcd0dd']:bm==='desert'?['#b59a5e','#897245']:['#878d95','#5d626a'];
      ctx.fillStyle=rc[1]; ctx.beginPath(); ctx.ellipse(rx,ry+1,rr,rr*0.7,0,0,TAU); ctx.fill();
      ctx.fillStyle=rc[0]; ctx.beginPath(); ctx.ellipse(rx-rr*0.2,ry-rr*0.2,rr*0.6,rr*0.42,0,0,TAU); ctx.fill(); }
    const hg=hash(ix*2+5,iy*9+1);
    if(bm==='jungle' && hg>0.74){ const bx=x+(hg*53%g), by=y+(hg*89%g), sw=(wind+Math.sin(game.t*1.3+hg*9)*0.35)*5;   // lush grass/ferns
      ctx.strokeStyle='rgba(96,150,60,'+(0.34+hg*0.3)+')'; ctx.lineWidth=1.6; ctx.lineCap='round'; ctx.beginPath();
      ctx.moveTo(bx,by); ctx.lineTo(bx-3+sw,by-9); ctx.moveTo(bx,by); ctx.lineTo(bx+sw*1.1,by-12); ctx.moveTo(bx,by); ctx.lineTo(bx+4+sw,by-8); ctx.stroke(); ctx.lineCap='butt'; }
    else if(bm==='desert' && hg>0.9){ const cx2=x+(hg*53%g), cy2=y+(hg*61%g);                  // cactus
      ctx.fillStyle='#4e7a3a'; fillRR(cx2-2,cy2-14,4,15,2,ctx.fillStyle);                       // trunk
      ctx.fillRect(cx2-6,cy2-7,5,3); ctx.fillRect(cx2-6,cy2-11,3,5);                            // left arm
      ctx.fillRect(cx2+1,cy2-9,5,3); ctx.fillRect(cx2+3,cy2-13,3,5); }                          // right arm
    else if(bm==='winter' && hg>0.86){ const sx2=x+(hg*53%g), sy2=y+(hg*61%g);                 // snow mound
      ctx.fillStyle='rgba(240,248,253,.7)'; ctx.beginPath(); ctx.ellipse(sx2,sy2,5+hg*4,3+hg*2,0,0,TAU); ctx.fill(); }
    const hf=hash(ix*7+3,iy*2+19);                                                            // flowers (jungle only)
    if(bm==='jungle' && hf>0.9){ const fx=x+(hf*61%g), fy=y+(hf*37%g), lean=(wind+Math.sin(game.t*1.1+hf*7)*0.3)*4, tx=fx+lean, ty=fy-9;
      ctx.strokeStyle='#3e6a2a'; ctx.lineWidth=1.4; ctx.beginPath(); ctx.moveTo(fx,fy); ctx.quadraticCurveTo(fx+lean*0.5,fy-5,tx,ty); ctx.stroke();
      const col=FLOWERCOLS[Math.floor(hf*97)%FLOWERCOLS.length];
      ctx.fillStyle=col; for(let k=0;k<5;k++){ const a=k/5*TAU+hf*6; ctx.beginPath(); ctx.arc(tx+Math.cos(a)*2.6, ty+Math.sin(a)*2.6, 1.9,0,TAU); ctx.fill(); }
      ctx.fillStyle='#3a2c12'; ctx.beginPath(); ctx.arc(tx,ty,1.7,0,TAU); ctx.fill(); }
  }
}
function drawBoulder(b){ const s=worldToScreen(b.x,b.y), R=b.r;                                      // big SOLID boulder
  ctx.fillStyle='rgba(0,0,0,.26)'; ctx.beginPath(); ctx.ellipse(s.x,s.y+R*0.5,R*0.96,R*0.42,0,0,TAU); ctx.fill();
  const c0=b.winter?'#cdd6dd':'#8d9197', c1=b.winter?'#8ea0ad':'#52565c';
  ctx.fillStyle=rgrad(s.x,s.y-R*0.2,R*1.05,c0,c1); blob(s.x,s.y,R,b.seed); ctx.fill();
  ctx.strokeStyle='rgba(0,0,0,.30)'; ctx.lineWidth=1.6; blob(s.x,s.y,R,b.seed); ctx.stroke();
  ctx.fillStyle='rgba(0,0,0,.18)'; ctx.beginPath(); ctx.moveTo(s.x-R*0.1,s.y-R*0.1); ctx.lineTo(s.x+R*0.5,s.y+R*0.2); ctx.lineTo(s.x+R*0.2,s.y+R*0.5); ctx.closePath(); ctx.fill();   // facet shadow
  ctx.fillStyle='rgba(255,255,255,.14)'; blob(s.x-R*0.24,s.y-R*0.28,R*0.5,b.seed+3); ctx.fill();      // top-left highlight
  if(b.winter){ ctx.fillStyle='rgba(255,255,255,.55)'; blob(s.x-R*0.08,s.y-R*0.42,R*0.6,b.seed+1); ctx.fill(); } }   // snow cap
function drawSmallRock(o){ const s=worldToScreen(o.x,o.y), R=o.r;                                     // small WALKABLE rock (flat decor)
  ctx.fillStyle='rgba(0,0,0,.16)'; ctx.beginPath(); ctx.ellipse(s.x,s.y+R*0.35,R*0.95,R*0.4,0,0,TAU); ctx.fill();
  const c0=o.winter?'#c6d0d8':'#979ba2', c1=o.winter?'#9aacb8':'#5c616a';
  ctx.fillStyle=rgrad(s.x,s.y,R,c0,c1); blob(s.x,s.y,R,o.seed); ctx.fill();
  ctx.fillStyle='rgba(255,255,255,.16)'; ctx.beginPath(); ctx.arc(s.x-R*0.3,s.y-R*0.3,R*0.4,0,TAU); ctx.fill(); }
const FLOWER_COLS=['#e86a8a','#f0c24a','#d96ad9','#f4f4f4','#ff8a4a','#7aa8ff'];
function buildFlora(){ game.flora=[]; const x0=WORLD.w/3, x1=2*WORLD.w/3, N=randi(200,300);   // flowers / ferns / shrubs scattered across the JUNGLE (walkable ground decor)
  for(let i=0;i<N;i++){ const x=rand(x0,x1), y=rand(60,WORLD.h-60);
    if((typeof onLand==='function'&&!onLand(x,y))||(typeof lakeAt==='function'&&lakeAt(x,y))) continue;
    if(typeof biomeAt==='function' && biomeAt(x,y)!=='jungle') continue;
    const t=Math.random(), type = t<0.4?'flower' : t<0.72?'fern' : 'shrub';
    game.flora.push({x,y,type,seed:rand(0,9), col: type==='flower'?FLOWER_COLS[randi(0,FLOWER_COLS.length-1)]:null}); }
  const M=randi(90,140);                                                                      // DESERT: scattered cactus + dry brush (walkable decor)
  for(let i=0;i<M;i++){ const x=rand(30,WORLD.w/3), y=rand(60,WORLD.h-60);
    if(typeof onLand==='function' && !onLand(x,y)) continue;
    if(typeof biomeAt==='function' && biomeAt(x,y)!=='desert') continue;
    const type = Math.random()<0.5?'cactus':'deshrub';
    game.flora.push({x,y,type,seed:rand(0,9), col:null, arms: type==='cactus'?randi(0,2):0}); } }
function drawFlora(){ if(!game.flora) return;
  for(const f of game.flora){ if(!inView(f.x,f.y,16)) continue; const s=worldToScreen(f.x,f.y);
    if(f.type==='shrub'){ ctx.fillStyle='rgba(0,0,0,.14)'; ctx.beginPath(); ctx.ellipse(s.x,s.y+5,8,3,0,0,TAU); ctx.fill();
      ctx.fillStyle=rgrad(s.x,s.y-2,9,'#56823a','#33521f'); blob(s.x,s.y-1,8,f.seed); ctx.fill();
      ctx.fillStyle='#6a9a48'; blob(s.x-2,s.y-3,4.5,f.seed+4); ctx.fill(); }
    else if(f.type==='fern'){ ctx.strokeStyle='#4a7a36'; ctx.lineWidth=1.5; ctx.lineCap='round';
      for(let k=0;k<5;k++){ const a=-Math.PI/2 + (k-2)*0.42 + Math.sin(f.seed+k)*0.05; ctx.beginPath(); ctx.moveTo(s.x,s.y+3); ctx.lineTo(s.x+Math.cos(a)*8, s.y+3+Math.sin(a)*8); ctx.stroke(); } ctx.lineCap='butt'; }
    else if(f.type==='cactus'){ const h=14+f.seed*1.3;                                          // saguaro: ribbed green column with 0-2 arms
      ctx.fillStyle='rgba(0,0,0,.16)'; ctx.beginPath(); ctx.ellipse(s.x,s.y+4,6,2.5,0,0,TAU); ctx.fill();
      ctx.strokeStyle='#3f7d4a'; ctx.lineWidth=5; ctx.lineCap='round';
      ctx.beginPath(); ctx.moveTo(s.x,s.y+3); ctx.lineTo(s.x,s.y-h); ctx.stroke();
      ctx.lineWidth=3.4; if(f.arms>=1){ ctx.beginPath(); ctx.moveTo(s.x,s.y-h*0.55); ctx.lineTo(s.x-6,s.y-h*0.55); ctx.lineTo(s.x-6,s.y-h*0.85); ctx.stroke(); }
      if(f.arms>=2){ ctx.beginPath(); ctx.moveTo(s.x,s.y-h*0.42); ctx.lineTo(s.x+6,s.y-h*0.42); ctx.lineTo(s.x+6,s.y-h*0.70); ctx.stroke(); }
      ctx.strokeStyle='#2c5a34'; ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(s.x,s.y+2); ctx.lineTo(s.x,s.y-h+2); ctx.stroke(); ctx.lineCap='butt'; }   // rib line
    else if(f.type==='deshrub'){ ctx.strokeStyle='#9c7b46'; ctx.lineWidth=1.3; ctx.lineCap='round';   // dry, sparse desert brush
      for(let k=0;k<6;k++){ const a=-Math.PI/2 + (k-2.5)*0.5 + Math.sin(f.seed+k)*0.12; ctx.beginPath(); ctx.moveTo(s.x,s.y+3); ctx.lineTo(s.x+Math.cos(a)*7, s.y+3+Math.sin(a)*7); ctx.stroke(); } ctx.lineCap='butt'; }
    else { ctx.strokeStyle='#3e6a2c'; ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(s.x,s.y+4); ctx.lineTo(s.x,s.y-2); ctx.stroke();   // flower: stem + petal ring + center
      ctx.fillStyle=f.col; for(let k=0;k<5;k++){ const a=k/5*TAU+f.seed; ctx.beginPath(); ctx.arc(s.x+Math.cos(a)*2.3, s.y-3+Math.sin(a)*2.3, 1.7,0,TAU); ctx.fill(); }
      ctx.fillStyle='#f5d040'; ctx.beginPath(); ctx.arc(s.x,s.y-3,1.5,0,TAU); ctx.fill(); } }
}
function nodeStep(a){ return a>0.66?1 : a>0.33?0.62 : 0.3; }   // 3 DISCRETE harvest stages (Rust-style chunky shrink: full -> 2/3 -> 1/3), not a smooth shrink
function drawTree(o){ const s=worldToScreen(o.x,o.y), a=nodeStep(o.amount/o.max), sc=0.5+0.5*a, R=o.r*sc;
  const sw=Math.sin(game.t*1.5+o.seed)*2.6;                 // gentle canopy sway
  shadow(s.x+4,s.y+8,o.r*1.2);
  ctx.fillStyle=vgrad(s.x-4,s.y-4,8,16,'#7a5430','#4a3018'); rrect(s.x-4,s.y-3,8,15,3); ctx.fill();   // trunk
  ctx.fillStyle=rgrad(s.x+sw*0.5,s.y-7,R+4,'#4c6a38','#243218'); blob(s.x+sw*0.5,s.y-6,R+3,o.seed);    // canopy depth
  ctx.fillStyle=rgrad(s.x-1+sw,s.y-11,R,'#5d8040','#33491f'); blob(s.x-2+sw,s.y-9,R,o.seed+5);
  ctx.fillStyle=rgrad(s.x-4+sw*1.3,s.y-15,R*0.7,'#86ad5b','#4a6633'); blob(s.x-4+sw*1.3,s.y-12,R*0.66,o.seed+9);  // sunlit crown
  ctx.globalAlpha=0.5; ctx.fillStyle='#a8c878'; blob(s.x-R*0.4+sw*1.3,s.y-15,R*0.26,o.seed+2); ctx.globalAlpha=1;  // highlight
}
function drawRock(o,ore){ const s=worldToScreen(o.x,o.y), a=nodeStep(o.amount/o.max), sc=0.55+0.45*a, R=o.r*sc;
  shadow(s.x+3,s.y+5,o.r*1.05);
  ctx.fillStyle=ore?'#5a4a2a':COL.stoneDk; poly(s.x,s.y+1,R+2,6,o.seed);                         // base / contact shade
  ctx.fillStyle=ore? rgrad(s.x,s.y,R,'#9a834d','#5e5030') : rgrad(s.x,s.y,R,'#aab1b8','#5f656c'); poly(s.x-1,s.y-2,R,6,o.seed+2);
  ctx.fillStyle=ore?'#c0a866':COL.stoneLt; ctx.globalAlpha=0.85; poly(s.x-R*0.18,s.y-R*0.22,R*0.55,5,o.seed+4); ctx.globalAlpha=1;  // top facet
  if(ore){ for(let i=0;i<6;i++){ const an=hash(o.seed*9+i,i)*TAU, rr=R*0.6*hash(i,o.seed), vx=s.x+Math.cos(an)*rr, vy=s.y+Math.sin(an)*rr;
      ctx.fillStyle=rgrad(vx,vy,3.4,'#ffc46a',COL.metalOre); ctx.beginPath(); ctx.arc(vx,vy,2.4,0,TAU); ctx.fill(); }
    for(let i=0;i<3;i++){ const tw=Math.sin(game.t*3+i*2.1+o.seed); if(tw>0.55){    // twinkle
      const an=hash(o.seed+i*5,i)*TAU, rr=R*0.5*hash(i+3,o.seed);
      ctx.globalAlpha=(tw-0.55)/0.45; ctx.fillStyle='#fff6d2';
      ctx.beginPath(); ctx.arc(s.x+Math.cos(an)*rr, s.y+Math.sin(an)*rr,2,0,TAU); ctx.fill(); ctx.globalAlpha=1; } } }
}
function hpRing(x,y,r,f,col){ if(f>=1) return; ctx.lineWidth=3;
  ctx.strokeStyle='rgba(0,0,0,.4)'; ctx.beginPath(); ctx.arc(x,y,r,0,TAU); ctx.stroke();
  ctx.strokeStyle=col; ctx.beginPath(); ctx.arc(x,y,r,-Math.PI/2,-Math.PI/2+TAU*f); ctx.stroke(); }
function drawBarrel(o){ const s=worldToScreen(o.x,o.y);
  if(o.crate){ shadow(s.x,s.y+4,o.r);                                   // monument loot crate
    ctx.fillStyle=vgrad(s.x,s.y-o.r,0,o.r*2,'#9a6e3c','#5e4326'); fillRR(s.x-o.r,s.y-o.r,o.r*2,o.r*2,4,ctx.fillStyle);
    ctx.fillStyle='rgba(255,255,255,.16)'; fillRR(s.x-o.r,s.y-o.r,o.r*2,4,2,ctx.fillStyle);
    ctx.strokeStyle='#3e2c16'; ctx.lineWidth=2; rrect(s.x-o.r,s.y-o.r,o.r*2,o.r*2,4); ctx.stroke();
    ctx.fillStyle='#caa15f'; ctx.fillRect(s.x-o.r,s.y-2,o.r*2,4); ctx.fillStyle='#cfd6cf'; ctx.fillRect(s.x-4,s.y-4,8,8);
    hpRing(s.x,s.y,o.r+5,o.hp/o.max,'#caa15f'); return; }
  const bw=o.r*1.55, bh=o.r*2.05, x0=s.x-bw/2, y0=s.y-bh/2, rr=bw*0.34;                       // an actual oil-drum: tall rounded-rect body + steel hoops + a lid (a 3/4 view, not flat rings)
  shadow(s.x,s.y+bh*0.42,o.r*0.95);
  ctx.fillStyle=vgrad(s.x,y0,0,bh,'#bd5e3c','#6f3019'); fillRR(x0,y0,bw,bh,rr,ctx.fillStyle);   // red-metal body
  ctx.fillStyle='rgba(255,255,255,.16)'; fillRR(x0+2,y0+3,bw*0.30,bh-6,rr*0.5,ctx.fillStyle);  // left sheen
  ctx.fillStyle='rgba(0,0,0,.22)'; fillRR(x0+bw*0.74,y0+3,bw*0.22,bh-6,rr*0.5,ctx.fillStyle);  // right shade
  ctx.fillStyle='#d8b24a';                                                                     // steel hoops
  for(const fy of [-0.24,0.24]) ctx.fillRect(x0, s.y+fy*bh-1.6, bw, 3.2);
  ctx.strokeStyle='#4a2614'; ctx.lineWidth=1.4; rrect(x0,y0,bw,bh,rr); ctx.stroke();           // outline
  ctx.fillStyle=rgrad(s.x,y0+2,bw*0.55,'#d8ad62','#8a6630'); ctx.beginPath(); ctx.ellipse(s.x,y0+2,bw*0.5,bw*0.26,0,0,TAU); ctx.fill();   // top lid
  ctx.strokeStyle='#5e4022'; ctx.lineWidth=1.3; ctx.beginPath(); ctx.ellipse(s.x,y0+2,bw*0.5,bw*0.26,0,0,TAU); ctx.stroke();
  ctx.fillStyle='#7a5a2c'; ctx.beginPath(); ctx.arc(s.x,y0+2,bw*0.13,0,TAU); ctx.fill();        // bung/cap on the lid
  hpRing(s.x,s.y,o.r+6,o.hp/o.max,'#d2664a');
}
function gasPump(x,y){ ctx.fillStyle='#2a2e34'; fillRR(x-9,y-26,18,30,3,ctx.fillStyle);                 // a fuel pump
  ctx.fillStyle=vgrad(x,y-24,0,16,'#e15a3a','#9a3324'); fillRR(x-7,y-24,14,15,2,ctx.fillStyle);
  ctx.fillStyle='#cfe0ea'; fillRR(x-5,y-22,10,6,1,ctx.fillStyle);                                      // display
  ctx.fillStyle='#1a1c20'; fillRR(x-9,y-6,18,10,2,ctx.fillStyle);
  ctx.strokeStyle='#2a2e34'; ctx.lineWidth=2.5; ctx.beginPath(); ctx.moveTo(x+9,y-18); ctx.quadraticCurveTo(x+18,y-14,x+16,y-2); ctx.stroke(); }   // hose
function wreckedCar(x,y,rot,col){ ctx.save(); ctx.translate(x,y); ctx.rotate(rot);
  ctx.fillStyle='rgba(0,0,0,.28)'; ctx.beginPath(); ctx.ellipse(0,4,30,15,0,0,TAU); ctx.fill();
  ctx.fillStyle=vgrad(0,-12,0,26,col,'#2c2c30'); fillRR(-28,-12,56,26,7,ctx.fillStyle);                // body
  ctx.fillStyle='#26282c'; fillRR(-14,-10,26,12,4,ctx.fillStyle);                                      // cabin/broken windshield
  ctx.fillStyle='#3a3d42'; ctx.fillRect(-30,-9,4,20); ctx.fillRect(26,-9,4,20);                         // dents
  ctx.fillStyle='#15140f'; for(const wx of [-18,18]) for(const wy of [-13,13]){ ctx.beginPath(); ctx.arc(wx,wy,5,0,TAU); ctx.fill(); }  // wheels
  ctx.restore(); }
function tireStack(x,y){ for(let i=0;i<3;i++){ ctx.fillStyle=i%2?'#222':'#2c2c2c'; ctx.beginPath(); ctx.arc(x,y-i*5,11,0,TAU); ctx.fill();
  ctx.fillStyle='#3a3d42'; ctx.beginPath(); ctx.arc(x,y-i*5,5,0,TAU); ctx.fill(); } }
function drawMonuments(){ if(!game.monuments) return;
  for(const m of game.monuments){ const x=m.x, y=m.y;
    if(inView(x,y,MON_NOBUILD)){ const pulse=0.5+0.5*Math.sin(game.t*1.6);                 // no-build ring (same radius as the trade safe zone)
      ctx.fillStyle='rgba(228,196,120,0.04)'; ctx.beginPath(); ctx.arc(x,y,MON_NOBUILD,0,TAU); ctx.fill();
      ctx.strokeStyle='rgba(232,205,128,'+(0.22+0.12*pulse)+')'; ctx.lineWidth=3.5; ctx.setLineDash([16,14]); ctx.beginPath(); ctx.arc(x,y,MON_NOBUILD,0,TAU); ctx.stroke(); ctx.setLineDash([]);
      ctx.fillStyle='rgba(240,220,150,.7)'; ctx.font='bold 15px "Trebuchet MS",sans-serif'; ctx.textAlign='center'; ctx.fillText('NO BUILD', x, y-MON_NOBUILD+24); ctx.textAlign='left'; }
    if(!inView(x,y,m.r)) continue;
    ctx.fillStyle=rgrad(x,y,m.r,'rgba(58,54,46,0.6)','rgba(40,38,32,0)'); ctx.beginPath(); ctx.arc(x,y,m.r,0,TAU); ctx.fill();   // worn concrete pad
    if(m.type==='gas'){
      ctx.fillStyle='rgba(20,18,14,.4)'; for(let i=0;i<5;i++){ ctx.beginPath(); ctx.ellipse(x-40+i*20,y+30,9,5,0,0,TAU); ctx.fill(); }  // oil stains
      ctx.fillStyle='#3a3026'; for(const px of [-96,-30,36,96]) ctx.fillRect(x+px-3,y-14,6,52);          // canopy posts
      ctx.fillStyle=vgrad(x,y-70,0,24,'#e2533c','#8a2f24'); fillRR(x-108,y-70,216,24,6,ctx.fillStyle);   // big canopy
      ctx.fillStyle='#f0f2f4'; fillRR(x-108,y-58,216,7,2,ctx.fillStyle);                                 // white stripe
      gasPump(x-60,y+8); gasPump(x+4,y+8);                                                               // two pumps
      ctx.fillStyle=vgrad(x+58,y-18,0,58,'#9aa1a8','#5a606a'); fillRR(x+58,y-18,54,58,5,ctx.fillStyle);   // station building
      ctx.fillStyle='#2a2e34'; fillRR(x+66,y+18,18,22,2,ctx.fillStyle);                                  // door
      ctx.fillStyle='#bfe0ef'; fillRR(x+88,y-8,18,16,2,ctx.fillStyle);                                   // window
      ctx.fillStyle='#3a3026'; ctx.fillRect(x-104,y-2,5,46); ctx.fillStyle=vgrad(x-100,y-30,0,28,'#ffd24a','#d89a2a'); fillRR(x-116,y-30,28,28,4,ctx.fillStyle);  // price sign pole
      ctx.fillStyle='#1f2616'; ctx.font='bold 11px sans-serif'; ctx.textAlign='center'; ctx.fillText('$', x-102, y-12);
    } else if(m.type==='junk'){
      ctx.strokeStyle='#4a4036'; ctx.lineWidth=3; ctx.setLineDash([12,8]); ctx.strokeRect(x-118,y-92,236,184); ctx.setLineDash([]);   // chain fence
      for(let i=0;i<5;i++){ const a=i/5*TAU+0.4, rx=x+Math.cos(a)*70, ry=y+Math.sin(a)*54;               // scrap heaps
        ctx.fillStyle=rgrad(rx,ry,34,'#838890','#3e4248'); ctx.beginPath(); ctx.ellipse(rx,ry,32,19,0,0,TAU); ctx.fill();
        ctx.fillStyle='#5a4030'; ctx.fillRect(rx-13,ry-10,26,7); ctx.fillStyle='#8a3a2a'; ctx.fillRect(rx-5,ry-3,17,10); }
      wreckedCar(x-58,y-40,0.3,'#7a4030'); wreckedCar(x+54,y+44,-0.5,'#3a5a6a');                          // two wrecks
      tireStack(x+70,y-50); tireStack(x-66,y+58);                                                         // tire stacks
      ctx.fillStyle='#5a5048'; fillRR(x-12,y-18,24,40,3,ctx.fillStyle); ctx.fillStyle='#3a342e'; fillRR(x-30,y-26,18,10,2,ctx.fillStyle);  // crusher
    } else {
      ctx.fillStyle='rgba(0,0,0,.3)'; ctx.beginPath(); ctx.ellipse(x,y+78,128,20,0,0,TAU); ctx.fill();
      ctx.fillStyle=vgrad(x,y-78,0,164,'#828892','#3e444c'); fillRR(x-126,y-78,252,164,8,ctx.fillStyle);  // big warehouse
      ctx.fillStyle=vgrad(x,y-92,0,22,'#9098a2','#6a7079'); fillRR(x-132,y-92,264,22,5,ctx.fillStyle);    // roof lip
      ctx.strokeStyle='rgba(0,0,0,.26)'; ctx.lineWidth=2; for(let i=1;i<7;i++){ ctx.beginPath(); ctx.moveTo(x-126,y-78+i*23); ctx.lineTo(x+126,y-78+i*23); ctx.stroke(); }  // corrugation
      for(const dx of [-72,0,72]){ ctx.fillStyle='#2a2e34'; fillRR(x+dx-30,y+30,60,56,3,ctx.fillStyle);   // 3 loading docks
        ctx.strokeStyle='#454b52'; ctx.lineWidth=2; for(let k=1;k<4;k++){ ctx.beginPath(); ctx.moveTo(x+dx-30,y+30+k*14); ctx.lineTo(x+dx+30,y+30+k*14); ctx.stroke(); } }
      ctx.fillStyle='#5a606a'; fillRR(x-40,y-104,30,16,2,ctx.fillStyle); fillRR(x+12,y-104,30,16,2,ctx.fillStyle);   // roof vents
    }
    ctx.font='bold 14px "Trebuchet MS",sans-serif'; ctx.textAlign='center';
    ctx.fillStyle='rgba(0,0,0,.6)'; ctx.fillText(m.name, x+1, y-m.r*0.62+1); ctx.fillStyle='#f0e4c4'; ctx.fillText(m.name, x, y-m.r*0.62); ctx.textAlign='left';
  }
}
function drawDummy(o){ const s=worldToScreen(o.x,o.y);
  shadow(s.x,s.y+4,o.r);
  ctx.fillStyle='#5b4a2c'; ctx.fillRect(s.x-3,s.y,6,o.r+8);
  const rings=[['#d8c79a',o.r],['#b23b2a',o.r*0.74],['#e8e0cf',o.r*0.5],['#b23b2a',o.r*0.28]];
  for(const [c,r] of rings){ ctx.fillStyle=c; ctx.beginPath(); ctx.arc(s.x,s.y-2,r,0,TAU); ctx.fill(); }
  if(o.hit>0){ ctx.fillStyle='rgba(255,255,255,.45)'; ctx.beginPath(); ctx.arc(s.x,s.y-2,o.r,0,TAU); ctx.fill(); }
  hpRing(s.x,s.y-2,o.r+5,o.hp/o.max,'#e8b06a');
}
function plankBox(x,y,w,h,metal){ const c=matCols(metal);
  ctx.fillStyle=c.dk; ctx.fillRect(x,y,w,h);
  ctx.fillStyle=c.mid; ctx.fillRect(x+2,y+2,w-4,h-4);
  ctx.fillStyle=c.lt; const ph=(h-8)/3; for(let i=0;i<3;i++) ctx.fillRect(x+4, y+4+i*ph, w-8, ph-3);
  if(metal){ ctx.fillStyle='#2c3036'; for(const [rx,ry] of [[x+6,y+6],[x+w-6,y+6],[x+6,y+h-6],[x+w-6,y+h-6]]){ ctx.beginPath(); ctx.arc(rx,ry,2,0,TAU); ctx.fill(); } }
  ctx.strokeStyle='rgba(0,0,0,.3)'; ctx.lineWidth=2; ctx.strokeRect(x+1,y+1,w-2,h-2);
}
function drawLockBadge(ox,oy,s){ if(!s.lock) return; const lx=ox+TILE-13, ly=oy+15;
  const col=(s.lock.by===OWNER)?COL.lockGreen:COL.lockRed;   // GREEN only on MY locks; RED on every enemy lock (regardless of locked/cut state)
  ctx.strokeStyle=col; ctx.lineWidth=2; ctx.beginPath(); ctx.arc(lx,ly-3,3.2,Math.PI,0); ctx.stroke();
  ctx.fillStyle=col; ctx.fillRect(lx-4,ly-1,8,7); ctx.fillStyle='#1a140d'; ctx.fillRect(lx-1,ly+1,2,3);
}
const TRIF={0:[[0,0],[1,0],[0,1]],1:[[1,0],[1,1],[0,0]],2:[[1,1],[0,1],[1,0]],3:[[0,1],[0,0],[1,1]]};
function floorCols(mat){ return mat==='metal'?{a:'#565d66',b:'#3a3f46',seam:'#2b3036',edge:'#7d8893'}
  :mat==='stone'?{a:'#7e858d',b:'#565b62',seam:'#3f444a',edge:'#aab1b8'}
  :{a:'#7a5a30',b:'#553c1d',seam:'#3a2913',edge:'#b98446'}; }
function drawFloor(gx,gy,mat){ const s=worldToScreen(gx*TILE,gy*TILE), c=floorCols(mat);
  ctx.fillStyle=vgrad(s.x,s.y,0,TILE,c.a,c.b); fillRR(s.x+1,s.y+1,TILE-2,TILE-2,5,ctx.fillStyle);   // shaded slab
  ctx.strokeStyle='rgba(0,0,0,.28)'; ctx.lineWidth=1; ctx.beginPath();                              // plank seams
  for(let i=1;i<4;i++){ ctx.moveTo(s.x+3,s.y+i*16); ctx.lineTo(s.x+TILE-3,s.y+i*16); }
  if(mat!=='wood'){ ctx.moveTo(s.x+TILE/2,s.y+3); ctx.lineTo(s.x+TILE/2,s.y+TILE-3); } ctx.stroke();
  rrect(s.x+1.5,s.y+1.5,TILE-3,TILE-3,5); ctx.strokeStyle='rgba(255,255,255,.10)'; ctx.lineWidth=1.5; ctx.stroke();  // top bevel
}
function drawTriFloor(gx,gy,mat,rot){ const s=worldToScreen(gx*TILE,gy*TILE), c=floorCols(mat), v=TRIF[rot||0];
  const path=()=>{ ctx.beginPath(); v.forEach((p,i)=>{ const px=s.x+p[0]*TILE, py=s.y+p[1]*TILE; i?ctx.lineTo(px,py):ctx.moveTo(px,py); }); ctx.closePath(); };
  path(); ctx.fillStyle=vgrad(s.x,s.y,0,TILE,c.a,c.b); ctx.fill(); ctx.save(); ctx.clip();
  ctx.strokeStyle='rgba(0,0,0,.28)'; ctx.lineWidth=1; ctx.beginPath();
  for(let i=1;i<4;i++){ ctx.moveTo(s.x+2,s.y+i*16); ctx.lineTo(s.x+TILE-2,s.y+i*16); } ctx.stroke(); ctx.restore();
  path(); ctx.strokeStyle='rgba(255,255,255,.10)'; ctx.lineWidth=1.5; ctx.stroke();
}
function teamColor(owner){ if(!owner || owner===OWNER) return '#7ec850';                              // a base's team colour (for the cupboard)
  const i=parseInt(String(owner).slice(1),10); return (typeof ENEMY_COLS!=='undefined' && ENEMY_COLS[((i%ENEMY_COLS.length)+ENEMY_COLS.length)%ENEMY_COLS.length]) || COL.tcLt; }
function drawCupboard(gx,gy,s){ const o=worldToScreen(gx*TILE,gy*TILE), cx=o.x+TILE/2, cy=o.y+TILE/2;
  shadow(cx,cy+TILE*0.34,TILE*0.4);
  ctx.fillStyle='#2e2008'; fillRR(o.x+6,o.y+6,TILE-12,TILE-12,6,ctx.fillStyle);                       // frame
  const tcol=teamColor(s.owner), tcl=lerpHex(tcol,'#ffffff',0.30), tcd=lerpHex(tcol,'#000000',0.42);  // tinted to the team colour -> base colour is identifiable
  ctx.fillStyle=vgrad(o.x,o.y+8,0,TILE-16,tcl,tcd); fillRR(o.x+9,o.y+9,TILE-18,TILE-18,4,ctx.fillStyle);  // body
  ctx.fillStyle='rgba(255,255,255,.18)'; fillRR(o.x+9,o.y+9,TILE-18,6,3,ctx.fillStyle);                // top sheen
  ctx.strokeStyle='#3a2a12'; ctx.lineWidth=2; rrect(o.x+9,o.y+9,TILE-18,TILE-18,4); ctx.stroke();
  ctx.fillStyle='#3a2a12'; ctx.fillRect(cx-1,o.y+12,2,TILE-24);                                        // door seam
  for(const hx of [cx-7,cx+5]){ ctx.fillStyle='#2a1d0a'; ctx.beginPath(); ctx.arc(hx,cy+4,1.8,0,TAU); ctx.fill(); }  // handles
  const tot=s.store?(s.store.wood+s.store.stone+s.store.metal):0;                                      // stocked indicator
  ctx.fillStyle=tot>0?COL.lockGreen:COL.lockRed; ctx.shadowColor=ctx.fillStyle; ctx.shadowBlur=6;
  ctx.beginPath(); ctx.arc(cx,o.y+15,3,0,TAU); ctx.fill(); ctx.shadowBlur=0;
  drawLockBadge(o.x,o.y,s);
  hpRing(cx,cy,TILE*0.44,s.hp/s.max,'#caa15f');
}
function drawWallHp(w,cx,cy){ if(w.hp>=w.max) return; const f=w.hp/w.max;
  ctx.lineWidth=2.5; ctx.strokeStyle='rgba(0,0,0,.4)'; ctx.beginPath(); ctx.arc(cx,cy,10,0,TAU); ctx.stroke();
  const locked = game.t-(w._hitT!==undefined?w._hitT:-1e9) < REPAIR_LOCK;                                  // under repair-lock (can't be repaired yet) -> ring is GRAY; flips back to the material colour once it can be repaired again
  ctx.strokeStyle = locked ? '#8b9099' : (w.mat==='metal'?'#9ab0d0':w.mat==='stone'?'#c6ccd2':'#d2664a'); ctx.beginPath(); ctx.arc(cx,cy,10,-Math.PI/2,-Math.PI/2+TAU*f); ctx.stroke(); }
function drawLockSeg(cx,cy,w){ const col=(w.lock.by===OWNER)?COL.lockGreen:COL.lockRed;   // GREEN only on MY locks; RED on enemy
  ctx.strokeStyle=col; ctx.lineWidth=2; ctx.beginPath(); ctx.arc(cx,cy-3,3,Math.PI,0); ctx.stroke();
  ctx.fillStyle=col; ctx.fillRect(cx-4,cy-1,8,6); ctx.fillStyle='#1a140d'; ctx.fillRect(cx-1,cy+1,2,3); }
function drawWall(key,w){          // edge wall / door / diagonal (triangle), drawn in world coords
  const sg=wallSegOf(key,w), c=matCols(w.mat), mx=(sg[0]+sg[2])/2, my=(sg[1]+sg[3])/2;
  if(w.type==='triangle'){
    ctx.lineCap='round';
    ctx.strokeStyle=c.dk;  ctx.lineWidth=WALL_T+3; ctx.beginPath(); ctx.moveTo(sg[0],sg[1]); ctx.lineTo(sg[2],sg[3]); ctx.stroke();
    ctx.strokeStyle=c.mid; ctx.lineWidth=WALL_T-2; ctx.beginPath(); ctx.moveTo(sg[0],sg[1]); ctx.lineTo(sg[2],sg[3]); ctx.stroke();
    ctx.strokeStyle=c.lt;  ctx.lineWidth=3;        ctx.beginPath(); ctx.moveTo(sg[0],sg[1]); ctx.lineTo(sg[2],sg[3]); ctx.stroke();
    ctx.lineCap='butt'; drawWallHp(w,mx,my); return;
  }
  const vert = sg[0]===sg[2];
  const x = vert ? sg[0]-WALL_T/2 : sg[0], y = vert ? sg[1] : sg[1]-WALL_T/2;
  const wd = vert ? WALL_T : TILE, ht = vert ? TILE : WALL_T;
  if(w.type==='door' && w.open){
    ctx.fillStyle=c.dk;
    if(vert){ ctx.fillRect(x,y,wd,10); ctx.fillRect(x,y+ht-10,wd,10); }
    else    { ctx.fillRect(x,y,10,ht); ctx.fillRect(x+wd-10,y,10,ht); }
  } else {
    ctx.fillStyle=c.dk; fillRR(x,y,wd,ht,3,ctx.fillStyle);
    ctx.fillStyle=vert?vgrad(x,y,0,ht,c.lt,c.dk):ctx.createLinearGradient(x,y,x,y+ht); // shaded face
    if(vert){ ctx.fillStyle=ctx.createLinearGradient(x,y,x+wd,y); ctx.fillStyle.addColorStop(0,c.lt); ctx.fillStyle.addColorStop(1,c.dk); }
    else { ctx.fillStyle=vgrad(x,y,0,ht,c.lt,c.dk); }
    fillRR(x+1,y+1,wd-2,ht-2,2.5,ctx.fillStyle);
    ctx.fillStyle='rgba(255,255,255,.16)'; if(vert) ctx.fillRect(x+2,y+2,2,ht-4); else ctx.fillRect(x+2,y+2,wd-4,2);  // edge highlight
    if(w.type==='door'){ ctx.fillStyle='#3a2a12';                                       // door seam + brass knob, fit to wall
      if(vert){ ctx.fillRect(x+wd*0.5-0.8,y+4,1.6,ht-8); } else { ctx.fillRect(x+4,y+ht*0.5-0.8,wd-8,1.6); }
      ctx.fillStyle='#e6c878'; ctx.beginPath(); ctx.arc(mx,my,2.4,0,TAU); ctx.fill(); }
  }
  if(w.lock) drawLockSeg(mx,my,w);
  drawWallHp(w,mx,my);
}
function drawShop(){ const sh=game.shop; if(!sh) return; const x=sh.x, y=sh.y;
  const pulse=0.5+0.5*Math.sin(game.t*1.5);                                       // safe-zone ring (no weapons / no damage inside)
  ctx.fillStyle='rgba(120,200,255,0.05)'; ctx.beginPath(); ctx.arc(x,y,SAFE_R,0,TAU); ctx.fill();
  ctx.strokeStyle='rgba(150,215,255,'+(0.30+0.12*pulse)+')'; ctx.lineWidth=4; ctx.setLineDash([18,14]); ctx.beginPath(); ctx.arc(x,y,SAFE_R,0,TAU); ctx.stroke(); ctx.setLineDash([]);
  ctx.fillStyle='rgba(180,225,255,.8)'; ctx.font='bold 22px "Trebuchet MS",sans-serif'; ctx.textAlign='center'; ctx.fillText('SAFE ZONE', x, y-SAFE_R+30); ctx.textAlign='left';
  shadow(x,y+sh.r*0.5,sh.r*1.1);
  ctx.fillStyle=rgrad(x,y,sh.r,'#6a5836','#332d1f'); ctx.beginPath(); ctx.arc(x,y,sh.r,0,TAU); ctx.fill();   // wooden deck
  ctx.fillStyle=vgrad(x-30,y-8,0,26,'#9a6e3c','#5e4326'); fillRR(x-30,y-8,60,26,4,ctx.fillStyle);             // counter
  ctx.fillStyle='rgba(255,255,255,.16)'; fillRR(x-30,y-8,60,6,3,ctx.fillStyle);
  ctx.fillStyle=vgrad(x,y-40,0,32,'#d2664a','#9a3a26');                                                       // awning
  ctx.beginPath(); ctx.moveTo(x-40,y-8); ctx.lineTo(x,y-40); ctx.lineTo(x+40,y-8); ctx.closePath(); ctx.fill();
  ctx.fillStyle='#e8b04a'; for(let i=-2;i<=2;i++){ ctx.beginPath(); ctx.moveTo(x+i*16,y-8-Math.abs(i)*0+0); ctx.lineTo(x+i*16+8,y-8); ctx.lineTo(x+i*16+4,y-3); ctx.closePath(); ctx.fill(); }  // scalloped trim
  ctx.fillStyle='#1f2616'; ctx.font='bold 12px "Trebuchet MS",sans-serif'; ctx.textAlign='center'; ctx.fillText('TRADE', x, y+10);
  if(!player.inCopter && dist2(player.x,player.y,x,y) < (sh.r+PLAYER_R+44)*(sh.r+PLAYER_R+44)){
    ctx.fillStyle='#c4d66a'; ctx.fillText('E — trade', x, y-46); }
  ctx.textAlign='left';
}
function drawBox(gx,gy,s){ const o=worldToScreen(gx*TILE,gy*TILE);
  shadow(o.x+TILE/2,o.y+TILE-6,TILE*0.42);
  ctx.fillStyle=COL.boxDk; fillRR(o.x+5,o.y+5,TILE-10,TILE-10,5,ctx.fillStyle);
  ctx.fillStyle=vgrad(o.x,o.y+7,0,TILE-14,COL.boxLt,COL.boxDk); fillRR(o.x+7,o.y+7,TILE-14,TILE-14,4,ctx.fillStyle);
  ctx.fillStyle='rgba(255,255,255,.18)'; fillRR(o.x+7,o.y+7,TILE-14,5,2,ctx.fillStyle);            // lid sheen
  ctx.strokeStyle='#3e2c16'; ctx.lineWidth=2; ctx.beginPath();                                     // strap + corner banding
  ctx.moveTo(o.x+TILE/2,o.y+8); ctx.lineTo(o.x+TILE/2,o.y+TILE-8); ctx.stroke();
  rrect(o.x+7,o.y+7,TILE-14,TILE-14,4); ctx.stroke();
  ctx.fillStyle='#caa15f'; ctx.fillRect(o.x+TILE/2-3,o.y+TILE/2-2,6,4);                             // latch
  if(s.open){ ctx.fillStyle='rgba(0,0,0,.4)'; fillRR(o.x+11,o.y+11,TILE-22,TILE-22,3,ctx.fillStyle); }
  drawLockBadge(o.x,o.y,s);
  hpRing(o.x+TILE/2,o.y+TILE/2,TILE*0.42,s.hp/s.max,'#caa15f');
}
function drawTurret(gx,gy,s){ const o=worldToScreen(gx*TILE,gy*TILE), cx=o.x+TILE/2, cy=o.y+TILE/2;
  const tier=s.tier||1, AC={1:'#9aa1a8',2:'#e0a23a',3:'#5fc8e0'}[tier];                              // TIER accent colour: T1 steel · T2 amber · T3 cyan
  shadow(cx,cy+TILE*0.3,TILE*0.36);
  ctx.fillStyle=COL.turretDk; fillRR(o.x+8,o.y+8,TILE-16,TILE-16,5,ctx.fillStyle);                  // base plate
  ctx.strokeStyle=AC; ctx.lineWidth=2; ctx.beginPath(); ctx.arc(cx,cy,17,0,TAU); ctx.stroke();      // tier accent ring around the base
  ctx.fillStyle=rgrad(cx,cy,16, s.mat==='metal'?'#9aa3ad':'#7a8270', s.mat==='metal'?'#41464d':'#3b4138');
  ctx.beginPath(); ctx.arc(cx,cy,15,0,TAU); ctx.fill();
  ctx.save(); ctx.translate(cx,cy); ctx.rotate(s.angle||0);                                         // barrel SHAPE differs by tier
  if(tier===1){ ctx.fillStyle='#23261f'; fillRR(2,-4,22,8,3,ctx.fillStyle); ctx.fillStyle='#54584c'; ctx.fillRect(2,-4,22,2);   // short single barrel
      ctx.fillStyle='#15140f'; ctx.beginPath(); ctx.arc(24,0,2.2,0,TAU); ctx.fill(); }
  else if(tier===2){ ctx.fillStyle='#23261f'; fillRR(2,-5.5,30,4,2,ctx.fillStyle); fillRR(2,1.5,30,4,2,ctx.fillStyle);          // TWIN barrels + amber sight
      ctx.fillStyle='#54584c'; ctx.fillRect(2,-5.5,30,1.4); ctx.fillStyle=AC; fillRR(9,-2,6,4,1,AC); }
  else { ctx.fillStyle='#1d2230'; fillRR(2,-3,40,6,2,ctx.fillStyle); ctx.fillStyle='#7fd0e0'; ctx.fillRect(2,-3,40,1.6);        // long thin SNIPER barrel + scope
      ctx.fillStyle='#15140f'; ctx.beginPath(); ctx.arc(42,0,2,0,TAU); ctx.fill();
      ctx.fillStyle='#23261f'; fillRR(8,-6,7,5,1.5,ctx.fillStyle); ctx.strokeStyle=AC; ctx.lineWidth=1; ctx.strokeRect(8,-6,7,5); }
  ctx.restore();
  ctx.fillStyle=rgrad(cx,cy,8,'#8b937e','#454c3c'); ctx.beginPath(); ctx.arc(cx,cy,8,0,TAU); ctx.fill();
  ctx.fillStyle=AC; ctx.shadowColor=AC; ctx.shadowBlur=5; ctx.beginPath(); ctx.arc(cx,cy,3,0,TAU); ctx.fill(); ctx.shadowBlur=0;  // core glows the tier colour
  for(let i=0;i<tier;i++){ ctx.fillStyle=AC; ctx.beginPath(); ctx.arc(cx-(tier-1)*3+i*6, cy+TILE*0.31, 1.8, 0, TAU); ctx.fill(); }   // 1/2/3 tier pips
  hpRing(cx,cy,19,s.hp/s.max,'#9ab0d0');
}
function drawCopter(){ const c=game.copter; if(!c || c.destroyed) return; const s=worldToScreen(c.x,c.y);
  const fly=player.inCopter, lift=fly?12:2;
  ctx.fillStyle='rgba(0,0,0,.25)'; ctx.beginPath(); ctx.ellipse(s.x,s.y+6,COPTER.r*0.9,COPTER.r*0.55,0,0,TAU); ctx.fill();
  ctx.save(); ctx.translate(s.x,s.y-lift); ctx.rotate(c.angle);
  ctx.fillStyle=COL.copterDk; ctx.fillRect(-COPTER.r*1.45,-3,COPTER.r*0.95,6);                       // tail boom
  ctx.fillStyle='#2a3228'; fillRR(-COPTER.r*1.5,-7,7,14,2,ctx.fillStyle);                            // tail fin
  ctx.fillStyle=rgrad(2,-3,COPTER.r*0.9,COL.copterLt,COL.copterDk);                                  // hull, lit from above
  ctx.beginPath(); ctx.ellipse(0,0,COPTER.r*0.84,COPTER.r*0.62,0,0,TAU); ctx.fill();
  ctx.strokeStyle='rgba(0,0,0,.3)'; ctx.lineWidth=1.5; ctx.beginPath(); ctx.ellipse(0,0,COPTER.r*0.84,COPTER.r*0.62,0,0,TAU); ctx.stroke();
  ctx.fillStyle=rgrad(COPTER.r*0.5,-2,COPTER.r*0.34,'rgba(210,238,255,.95)','rgba(110,160,200,.6)'); // glass canopy
  ctx.beginPath(); ctx.ellipse(COPTER.r*0.5,0,COPTER.r*0.3,COPTER.r*0.34,0,0,TAU); ctx.fill();
  ctx.fillStyle='rgba(255,255,255,.5)'; ctx.beginPath(); ctx.ellipse(COPTER.r*0.42,-COPTER.r*0.12,COPTER.r*0.1,COPTER.r*0.14,0,0,TAU); ctx.fill();
  ctx.strokeStyle='#2b322a'; ctx.lineWidth=3; ctx.lineCap='round';                                   // skids
  ctx.beginPath(); ctx.moveTo(-10,-COPTER.r*0.74); ctx.lineTo(18,-COPTER.r*0.74);
  ctx.moveTo(-10,COPTER.r*0.74); ctx.lineTo(18,COPTER.r*0.74); ctx.stroke(); ctx.lineCap='butt';
  ctx.restore();
  ctx.save(); ctx.translate(s.x,s.y-lift); ctx.rotate(c.rotor);
  ctx.fillStyle='rgba(36,42,32,'+(fly?0.5:0.9)+')';
  ctx.fillRect(-3,-COPTER.r*1.2,6,COPTER.r*2.4); ctx.fillRect(-COPTER.r*1.2,-3,COPTER.r*2.4,6);
  ctx.fillStyle='#20251c'; ctx.beginPath(); ctx.arc(0,0,4,0,TAU); ctx.fill(); ctx.restore();
  if(!fly && dist2(player.x,player.y,c.x,c.y)<(COPTER.r+PLAYER_R+34)*(COPTER.r+PLAYER_R+34)){
    ctx.fillStyle='#c4d66a'; ctx.font='bold 12px "Trebuchet MS",sans-serif'; ctx.textAlign='center';
    ctx.fillText('E — fly', s.x, s.y-COPTER.r-12); ctx.textAlign='left'; }
}
function drawPlayer(){ const s=worldToScreen(player.x,player.y);
  if(game.ghost) ctx.globalAlpha=0.4;                 // ghost mode: faded, ignored by AI
  if(player.dead){ ctx.globalAlpha=1;
    ctx.fillStyle='rgba(0,0,0,.3)'; ctx.beginPath(); ctx.ellipse(s.x,s.y,PLAYER_R,PLAYER_R*0.6,0,0,TAU); ctx.fill();
    ctx.fillStyle=COL.playerDk; ctx.beginPath(); ctx.arc(s.x,s.y,PLAYER_R-3,0,TAU); ctx.fill();
    ctx.fillStyle=COL.blood; for(let i=0;i<6;i++){ const a=i/6*TAU; ctx.beginPath(); ctx.arc(s.x+Math.cos(a)*15,s.y+Math.sin(a)*10,3,0,TAU); ctx.fill(); }
    return;
  }
  const ang=player.angle, fr=Math.cos(ang)>=0?1:-1, off=11-player.recoil, bob=player.moving?Math.sin(game.t*12):0;
  if(game.jackhammer && game.slot===0 && player.swing>0){ s.x+=rand(-1.6,1.6); s.y+=rand(-1.6,1.6); }   // JACKHAMMER vibration — the whole body shakes while drilling
  shadow(s.x,s.y+12,PLAYER_R*1.05);
  const lk=player.moving?Math.sin(game.t*12)*2:0;                                                  // walk cycle
  ctx.fillStyle=vgrad(s.x,s.y+5,0,12,'#4a4036','#2a241d'); fillRR(s.x-7,s.y+5+lk,5,11,2.2,ctx.fillStyle); fillRR(s.x+2,s.y+5-lk,5,11,2.2,ctx.fillStyle);  // legs
  ctx.save(); ctx.translate(s.x,s.y-1); ctx.rotate(ang);                                          // aiming arm + weapon
  ctx.fillStyle=COL.skin; ctx.fillRect(2,-2.5,9,5);
  if(game.slot===0){ ctx.save(); ctx.translate(8,0);
      if(game.jackhammer){ const v=(player.swing>0)?rand(-1,1):0; ctx.rotate(0.12+v*0.09);             // JACKHAMMER: blocky yellow body + steel chisel bit — clearly different from the hatchet, and it judders while used
        ctx.fillStyle='#1c1c1c'; ctx.fillRect(2,-7.5,5,3.5);                                            // top grip
        ctx.fillStyle='#caa23a'; fillRR(0,-5,12,10,2,ctx.fillStyle);                                    // yellow housing
        ctx.fillStyle='rgba(255,255,255,.18)'; ctx.fillRect(0,-5,12,2.5);                               // sheen
        ctx.fillStyle='#3a3f37'; ctx.fillRect(11,-3,4,6);                                               // collar
        ctx.fillStyle='#b9c0c7'; ctx.fillRect(15,-2.1,13,4.2); }                                        // chisel bit
      else { ctx.rotate(-0.4+player.swing*5);
        ctx.fillStyle='#5b4226'; ctx.fillRect(0,-2,16,4); ctx.fillStyle='#b9c0c7'; ctx.fillRect(13,-6,7,12); }   // hatchet (handle + head)
      ctx.restore(); }
  else if(game.slot===5){ ctx.fillStyle='#5b4226'; ctx.fillRect(8,-2,13,4); ctx.fillStyle='#9aa1a8'; ctx.fillRect(19,-5,7,10); }
  else if(game.slot===4){ ctx.fillStyle=COL.rocket; ctx.fillRect(off-2,-5,26,10); ctx.fillStyle=COL.gunLt; ctx.fillRect(off-2,-5,26,2);
      ctx.fillStyle='#1c1c1c'; ctx.beginPath(); ctx.arc(off+24,0,5,0,TAU); ctx.fill(); }
  else if(game.slot===3){ const sgn=Math.sin(game.t*30)*(WEAPONS.minigun.spin>0?2:0);
      ctx.fillStyle='#3a3f37'; ctx.fillRect(off-4,-6,12,12);
      ctx.fillStyle=COL.gun; ctx.fillRect(off+6,-5+sgn,20,3); ctx.fillRect(off+6,-1,20,3); ctx.fillRect(off+6,3-sgn,20,3); }
  else if(game.slot===1||game.slot===2){ const long=game.slot===2?20:13;
      ctx.fillStyle=COL.gun; ctx.fillRect(off,-3,long,6); ctx.fillStyle=COL.gunLt; ctx.fillRect(off,-3,long,2); }
  else if(game.slot===6){ ctx.fillStyle=COL.gun; ctx.fillRect(off,-2.5,30,5); ctx.fillStyle=COL.gunLt; ctx.fillRect(off,-2.5,30,1.6);   // long sniper barrel
      ctx.fillStyle='#23261f'; ctx.fillRect(off+9,-6,7,4); ctx.strokeStyle='#9fb0bd'; ctx.lineWidth=1; ctx.strokeRect(off+9,-6,7,4); }   // scope
  else if(game.slot===7){ ctx.fillStyle=COL.gun; ctx.fillRect(off,-4,17,8); ctx.fillStyle=COL.gunLt; ctx.fillRect(off,-4,17,2.4);        // wide double-barrel shotgun
      ctx.fillStyle='#5b4226'; ctx.fillRect(off-3,-3,6,6); }
  else if(game.slot===8){ ctx.fillStyle='#2b2f27'; ctx.fillRect(off-4,-4.5,24,9);                                                      // HMG: long heavy receiver
      ctx.fillStyle=COL.gun; ctx.fillRect(off+18,-2.5,9,5); ctx.fillStyle=COL.gunLt; ctx.fillRect(off-4,-4.5,30,1.8);                  // barrel + sheen
      ctx.fillStyle='#3a3f37'; ctx.fillRect(off+2,4,7,7); }                                                                           // box magazine slung underneath
  ctx.restore();
  ctx.fillStyle='#15140e'; fillRR(s.x-9,s.y-7,18,15,5,ctx.fillStyle);                               // torso outline
  ctx.fillStyle=player.hurt>0?vgrad(s.x,s.y-6,0,13,'#c47a5e','#7a3e2c'):vgrad(s.x,s.y-6,0,13,'#8a995e','#4d5732');
  fillRR(s.x-7,s.y-6,14,13,4,ctx.fillStyle);
  ctx.fillStyle='rgba(255,255,255,.14)'; fillRR(s.x-7,s.y-6,14,4,3,ctx.fillStyle);                  // shoulder sheen
  if(player.bodyArmor>0){ const bc=ARMOR.bodyCol[player.bodyArmor];                                 // BODY ARMOR plate over the torso (colour = level)
    fillRR(s.x-7,s.y-5,14,11,3,bc); ctx.fillStyle='rgba(255,255,255,.16)'; fillRR(s.x-7,s.y-5,14,3,2,ctx.fillStyle);
    ctx.fillStyle='rgba(0,0,0,.32)'; ctx.fillRect(s.x-1,s.y-4,2,9);                                 // chest seam
    ctx.fillStyle='#10100b'; for(let i=0;i<player.bodyArmor;i++) ctx.fillRect(s.x-5+i*4.4, s.y+6, 3, 1.6); }   // level pips
  const hy=s.y-13+bob;                                                                             // head
  ctx.fillStyle='#15140e'; ctx.beginPath(); ctx.arc(s.x,hy,7,0,TAU); ctx.fill();
  ctx.fillStyle=rgrad(s.x,hy,6,'#e2bd96','#a9805a'); ctx.beginPath(); ctx.arc(s.x,hy,5.6,0,TAU); ctx.fill();
  ctx.fillStyle='#3a2a18'; ctx.beginPath(); ctx.arc(s.x,hy-1,5.6,Math.PI,0); ctx.fill();            // hair
  ctx.fillStyle='#15140e'; ctx.beginPath(); ctx.arc(s.x+fr*1.8,hy,1.05,0,TAU); ctx.arc(s.x+fr*4.3,hy,1.05,0,TAU); ctx.fill();
  if(player.facemask>0){ const fcc=ARMOR.headCol[player.facemask];                                  // FACEMASK / helmet over the face (colour = level)
    ctx.fillStyle=fcc; ctx.beginPath(); ctx.arc(s.x,hy,6,0,TAU); ctx.fill();
    ctx.fillStyle='rgba(255,255,255,.18)'; ctx.beginPath(); ctx.arc(s.x-2,hy-2.2,2,0,TAU); ctx.fill();   // highlight
    ctx.fillStyle='rgba(12,12,9,.72)'; ctx.fillRect(s.x-5,hy-1,10,2.6); }                            // dark visor slit
  if(player.invuln>0){ ctx.strokeStyle='rgba(150,205,255,'+(0.35+0.3*Math.sin(game.t*22))+')';
    ctx.lineWidth=2; ctx.beginPath(); ctx.arc(s.x,s.y,PLAYER_R+6,0,TAU); ctx.stroke(); }
  ctx.globalAlpha=1;
}
function drawLaserSight(){     // RIFLE laser-sight upgrade: a thin red beam from the muzzle, stopped at the first wall
  if(!player.rifleLaser || game.slot!==2 || player.dead || player.inCopter || game.godView) return;
  const psx=(player.x-game.cam.cx)*game.zoom+VW/2, psy=(player.y-game.cam.cy)*game.zoom+VH/2;   // never draw the beam when the player is >3 viewports off-screen (so it can't appear across the map if the camera is ever detached)
  if(Math.abs(psx-VW/2) > VW*3 || Math.abs(psy-VH/2) > VH*3) return;
  const a=player.angle, mwx=player.x+Math.cos(a)*22, mwy=player.y+Math.sin(a)*22;
  let len=640; for(let d=60; d<=640; d+=60){ if(wallBlocksView(mwx,mwy, mwx+Math.cos(a)*d, mwy+Math.sin(a)*d)){ len=d; break; } }
  const m=worldToScreen(mwx,mwy), e=worldToScreen(mwx+Math.cos(a)*len, mwy+Math.sin(a)*len);
  ctx.save(); ctx.strokeStyle='rgba(255,46,40,0.5)'; ctx.lineWidth=1.4; ctx.shadowColor='rgba(255,30,30,0.9)'; ctx.shadowBlur=5;
  ctx.beginPath(); ctx.moveTo(m.x,m.y); ctx.lineTo(e.x,e.y); ctx.stroke(); ctx.shadowBlur=0;
  ctx.fillStyle='rgba(255,90,80,0.95)'; ctx.beginPath(); ctx.arc(e.x,e.y,2.3,0,TAU); ctx.fill(); ctx.restore(); return true; }
function drawMuzzle(){ if(!game.muzzle) return; const s=worldToScreen(game.muzzle.x,game.muzzle.y);
  ctx.save(); ctx.translate(s.x,s.y); ctx.rotate(game.muzzle.a);
  ctx.fillStyle=COL.flash; star(9,0,9,4,5); ctx.fillStyle='#fff6c8'; ctx.beginPath(); ctx.arc(7,0,3,0,TAU); ctx.fill(); ctx.restore(); }
function drawBullets(){ ctx.lineCap='round';
  for(const b of game.bullets){ const s=worldToScreen(b.x,b.y), p=worldToScreen(b.px,b.py);
    const col = b.ricochet ? COL.ricochet : (b.col||COL.tracer), fat = b.ricochet || !!b.col;   // ricochet = cyan, HMG = hot-orange (both thicker + glowing); normal = thin pale tracer
    ctx.save(); if(fat){ ctx.shadowColor=col; ctx.shadowBlur=6; }
    ctx.strokeStyle=col; ctx.lineWidth=fat?4:3; ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(s.x,s.y); ctx.stroke();
    ctx.shadowBlur=0; ctx.fillStyle=fat?col:'#fff'; ctx.beginPath(); ctx.arc(s.x,s.y,fat?2.8:2,0,TAU); ctx.fill(); ctx.restore(); } }
function drawLoot(){ for(const o of game.loot){ const s=worldToScreen(o.x,o.y), yy=s.y+Math.sin(o.bob)*2;
  shadow(s.x,s.y+5,6);
  const LC={wood:['#b98446','#6f4a22'],stone:['#aab1b8','#5f656c'],metal:['#e8a24e','#a85f1c'],scrap:['#d6dce0','#717880'],ammo:['#ffe08a','#b8902a'],rocket:['#ff9a5a','#c2461c'],sniper:['#bfe3ff','#5f7e9e']};
  const c=LC[o.kind]||LC.metal, base=c[0], dk=c[1];
  ctx.fillStyle=rgrad(s.x,yy,6,base,dk); fillRR(s.x-5,yy-5,10,10,3,ctx.fillStyle);
  ctx.fillStyle='rgba(255,255,255,.4)'; fillRR(s.x-5,yy-5,10,3,2,ctx.fillStyle);
  ctx.strokeStyle='rgba(0,0,0,.3)'; ctx.lineWidth=1; rrect(s.x-5,yy-5,10,10,3); ctx.stroke(); } }
function drawParticles(){ for(const p of game.particles){ const s=worldToScreen(p.x,p.y);
  ctx.globalAlpha=clamp(p.life/p.max,0,1); ctx.fillStyle=p.color; ctx.beginPath(); ctx.arc(s.x,s.y,p.r,0,TAU); ctx.fill(); }
  ctx.globalAlpha=1; }
function drawScorch(){ for(const sc of game.scorch){ const s=worldToScreen(sc.x,sc.y);
  ctx.fillStyle=COL.scorch; ctx.beginPath(); ctx.ellipse(s.x,s.y,sc.r,sc.r*0.72,0,0,TAU); ctx.fill(); } }
function drawSatchels(){ for(const s of game.satchels){ if(!inView(s.x,s.y,20)) continue; const p=worldToScreen(s.x,s.y);
  shadow(p.x,p.y+3,7); ctx.fillStyle='#3a342c'; fillRR(p.x-7,p.y-6,14,12,2,ctx.fillStyle);
  ctx.fillStyle='#5a5048'; fillRR(p.x-7,p.y-6,14,3,1,ctx.fillStyle);
  if(Math.sin(s.t*18)>0){ ctx.fillStyle='#ff3a2a'; ctx.shadowColor='#ff3a2a'; ctx.shadowBlur=6; } else ctx.fillStyle='#7a1a12';
  ctx.beginPath(); ctx.arc(p.x+4,p.y-2,2,0,TAU); ctx.fill(); ctx.shadowBlur=0; } }
function drawFires(){ for(const f of game.fires){ if(!inView(f.x,f.y,f.r+24)) continue; const s=worldToScreen(f.x,f.y);
  ctx.globalAlpha=clamp(f.life/2,0,1)*clamp((f.max-f.life)/0.5,0,1);                       // fade in then out
  const gl=ctx.createRadialGradient(s.x,s.y,2,s.x,s.y,f.r); gl.addColorStop(0,'rgba(255,150,45,0.5)'); gl.addColorStop(1,'rgba(255,90,20,0)');
  ctx.fillStyle=gl; ctx.beginPath(); ctx.arc(s.x,s.y,f.r,0,TAU); ctx.fill();               // ember glow
  for(let k=0;k<5;k++){ const ph=game.t*9+k*1.7+f.x*0.07, fx=s.x+Math.sin(ph)*5+(k-2)*6, h=16+Math.sin(ph*1.3)*7+(k===2?8:0);
    const fg=ctx.createLinearGradient(fx,s.y+4,fx,s.y-h); fg.addColorStop(0,'#cf3c18'); fg.addColorStop(0.5,'#ff8a2a'); fg.addColorStop(1,'#ffe46e');
    ctx.fillStyle=fg; ctx.beginPath(); ctx.moveTo(fx-5,s.y+5); ctx.quadraticCurveTo(fx-4,s.y-h*0.5,fx,s.y-h); ctx.quadraticCurveTo(fx+4,s.y-h*0.5,fx+5,s.y+5); ctx.closePath(); ctx.fill(); }
  ctx.globalAlpha=1; } }
function drawGuard(g){ const s=worldToScreen(g.x,g.y);                                   // monument guard NPC (hazmat-orange, red helmet) — hostile to all
  shadow(s.x,s.y+11,GUARD.r*0.95);
  const lk=Math.sin(game.t*9+g.seed)*1.6;
  ctx.fillStyle=vgrad(s.x,s.y+5,0,12,'#3a3026','#221c14'); fillRR(s.x-7,s.y+5+lk,5,11,2.2,ctx.fillStyle); fillRR(s.x+2,s.y+5-lk,5,11,2.2,ctx.fillStyle);   // legs
  ctx.save(); ctx.translate(s.x,s.y-1); ctx.rotate(g.angle);                              // arm + rifle
  ctx.fillStyle=COL.skin; ctx.fillRect(2,-2.5,9,5); ctx.fillStyle=COL.gun; ctx.fillRect(8,-3,17,6); ctx.fillStyle=COL.gunLt; ctx.fillRect(8,-3,17,2); ctx.restore();
  ctx.fillStyle='#15140e'; fillRR(s.x-8,s.y-7,16,15,5,ctx.fillStyle);                     // torso outline
  ctx.fillStyle=vgrad(s.x,s.y-6,0,13,'#c8642e','#7e3318'); fillRR(s.x-7,s.y-6,14,13,4,ctx.fillStyle);   // hazmat-orange uniform
  ctx.fillStyle='rgba(255,255,255,.5)'; fillRR(s.x-7,s.y+1,14,2,1,ctx.fillStyle);          // hi-vis stripe
  const hy=s.y-13;
  ctx.fillStyle='#15140e'; ctx.beginPath(); ctx.arc(s.x,hy,7,0,TAU); ctx.fill();
  ctx.fillStyle='#caa07a'; ctx.beginPath(); ctx.arc(s.x,hy,5.4,0,TAU); ctx.fill();
  ctx.fillStyle='#c0432f'; ctx.beginPath(); ctx.arc(s.x,hy-0.5,5.4,Math.PI,0); ctx.fill(); // red helmet
  hpRing(s.x,s.y,GUARD.r+4, g.hp/g.max, '#e2664a');
}
function drawAnimal(a){ const s=worldToScreen(a.x,a.y), def=ANIMALS[a.type];
  let ang = (a.vx||a.vy)?Math.atan2(a.vy,a.vx):(a.dir||0);
  shadow(s.x,s.y+a.r*0.5,a.r);
  ctx.save(); ctx.translate(s.x,s.y); ctx.rotate(ang);
  if(a.type==='snake'){                                                                          // slithering segmented body
    for(let i=7;i>=1;i--){ const px=-i*5.2, off=Math.sin(game.t*7 - i*0.6)*4.5;
      ctx.fillStyle=i%2?def.colDk:def.col; ctx.beginPath(); ctx.arc(px,off,6-i*0.5,0,TAU); ctx.fill(); }
    ctx.fillStyle=def.col; ctx.beginPath(); ctx.ellipse(6,0,7,5,0,0,TAU); ctx.fill();
    ctx.fillStyle='#15110b'; ctx.beginPath(); ctx.arc(9,-2,1.3,0,TAU); ctx.arc(9,2,1.3,0,TAU); ctx.fill();
    ctx.strokeStyle='#c0432f'; ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(12,0); ctx.lineTo(16,-2); ctx.moveTo(12,0); ctx.lineTo(16,2); ctx.stroke();
  } else if(a.type==='scorpion'){                                                                // flat body + forward pincers + curled tail with a stinger
    ctx.fillStyle=def.colDk; ctx.beginPath(); ctx.ellipse(0,0,a.r*0.7,a.r*0.5,0,0,TAU); ctx.fill();
    ctx.fillStyle=def.col; ctx.beginPath(); ctx.ellipse(0,0,a.r*0.55,a.r*0.38,0,0,TAU); ctx.fill();
    ctx.strokeStyle=def.colDk; ctx.lineWidth=2; ctx.lineCap='round';                              // legs
    for(let i=-1;i<=1;i++){ ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(-2+i*3, -a.r*0.8); ctx.moveTo(0,0); ctx.lineTo(-2+i*3, a.r*0.8); ctx.stroke(); }
    ctx.beginPath(); ctx.moveTo(a.r*0.4,-a.r*0.3); ctx.lineTo(a.r*0.95,-a.r*0.5); ctx.moveTo(a.r*0.4,a.r*0.3); ctx.lineTo(a.r*0.95,a.r*0.5); ctx.stroke();   // pincer arms
    ctx.fillStyle=def.colDk; ctx.beginPath(); ctx.arc(a.r*1.0,-a.r*0.5,2.4,0,TAU); ctx.arc(a.r*1.0,a.r*0.5,2.4,0,TAU); ctx.fill();                          // pincers
    ctx.beginPath(); ctx.moveTo(-a.r*0.6,0); ctx.quadraticCurveTo(-a.r*1.3,-a.r*0.2,-a.r*0.9,-a.r*0.9); ctx.stroke();                                       // curled tail
    ctx.fillStyle='#3a2410'; ctx.beginPath(); ctx.arc(-a.r*0.9,-a.r*0.9,2.2,0,TAU); ctx.fill(); ctx.lineCap='butt';                                          // stinger
  } else {
    ctx.fillStyle=COL.ink; ctx.beginPath(); ctx.ellipse(0,0,a.r*1.28,a.r*0.97,0,0,TAU); ctx.fill();   // bold outline
    ctx.fillStyle=def.colDk; ctx.beginPath(); ctx.ellipse(0,0,a.r*1.18,a.r*0.86,0,0,TAU); ctx.fill();
    ctx.fillStyle=def.col;   ctx.beginPath(); ctx.ellipse(0,0,a.r*1.02,a.r*0.72,0,0,TAU); ctx.fill();
    if(a.type==='alligator'){                                                                    // tail + snout + back ridges
      ctx.fillStyle=def.colDk; ctx.beginPath(); ctx.moveTo(-a.r*1.0,0); ctx.lineTo(-a.r*1.8,-a.r*0.22); ctx.lineTo(-a.r*1.8,a.r*0.22); ctx.closePath(); ctx.fill();
      ctx.fillStyle=def.col; ctx.beginPath(); ctx.ellipse(a.r*1.2,0,a.r*0.55,a.r*0.3,0,0,TAU); ctx.fill();   // snout
      ctx.fillStyle=def.colDk; for(let i=-2;i<=1;i++){ ctx.beginPath(); ctx.moveTo(i*a.r*0.4,-a.r*0.62); ctx.lineTo(i*a.r*0.4+a.r*0.18,-a.r*0.95); ctx.lineTo(i*a.r*0.4+a.r*0.36,-a.r*0.62); ctx.closePath(); ctx.fill(); }
    } else { ctx.fillStyle=def.colDk; ctx.beginPath(); ctx.arc(a.r*0.96,0,a.r*0.5,0,TAU); ctx.fill(); }
    if(a.type==='bear'||a.type==='polarbear'){ ctx.fillStyle=def.colDk; ctx.beginPath(); ctx.arc(a.r*0.7,-a.r*0.5,a.r*0.22,0,TAU); ctx.arc(a.r*0.7,a.r*0.5,a.r*0.22,0,TAU); ctx.fill(); }
    if(a.type==='wolf'){ ctx.fillStyle=def.colDk; ctx.beginPath();
      ctx.moveTo(a.r*0.6,-a.r*0.5); ctx.lineTo(a.r*0.55,-a.r*0.95); ctx.lineTo(a.r*0.9,-a.r*0.4); ctx.closePath();
      ctx.moveTo(a.r*0.6,a.r*0.5);  ctx.lineTo(a.r*0.55,a.r*0.95);  ctx.lineTo(a.r*0.9,a.r*0.4);  ctx.closePath(); ctx.fill(); }
    if(a.type==='boar'){ ctx.fillStyle='#e8e0cf'; ctx.fillRect(a.r*1.28,-3.5,5,2); ctx.fillRect(a.r*1.28,1.5,5,2); }
    ctx.fillStyle='#15110b'; ctx.beginPath(); ctx.arc(a.type==='alligator'?a.r*1.2:a.r*1.06,-a.r*0.22,1.9,0,TAU); ctx.fill();
  }
  ctx.restore();
  if(a.hit>0){ ctx.fillStyle='rgba(255,255,255,.42)'; ctx.beginPath(); ctx.arc(s.x,s.y,a.r*1.12,0,TAU); ctx.fill(); }
  if(a.aggro){ ctx.fillStyle='#e2664a'; ctx.font='bold 13px "Trebuchet MS",sans-serif'; ctx.textAlign='center';
    ctx.fillText('!',s.x,s.y-a.r-9); ctx.textAlign='left'; }
  hpRing(s.x,s.y,a.r+5,a.hp/a.max, a.type==='bear'?'#e2664a':'#e8b06a');
}
function drawRockets(){ for(const r of game.rockets){ const s=worldToScreen(r.x,r.y), ang=Math.atan2(r.vy,r.vx);
  ctx.save(); ctx.translate(s.x,s.y); ctx.rotate(ang);
  ctx.fillStyle='#8a8f7a'; ctx.fillRect(-9,-4,4,8);
  ctx.fillStyle=COL.rocket; ctx.fillRect(-7,-3.5,13,7);
  ctx.fillStyle=COL.rocketHot; ctx.beginPath(); ctx.moveTo(6,-3.5); ctx.lineTo(12,0); ctx.lineTo(6,3.5); ctx.closePath(); ctx.fill();
  ctx.restore(); } }
function drawFlashes(){ for(const f of game.flashes){ const s=worldToScreen(f.x,f.y), t=f.life/f.max;
  ctx.globalAlpha=t*0.8; ctx.fillStyle=COL.explosion; ctx.beginPath(); ctx.arc(s.x,s.y,f.r*(1.1-t*0.5),0,TAU); ctx.fill();
  ctx.globalAlpha=t; ctx.fillStyle='#fff3c8'; ctx.beginPath(); ctx.arc(s.x,s.y,f.r*0.5*(1-t*0.4),0,TAU); ctx.fill();
  ctx.globalAlpha=1; } }
function drawFloats(){ ctx.textAlign='center'; ctx.font='bold 13px "Trebuchet MS",sans-serif';
  for(const f of game.floats){ const s=worldToScreen(f.x,f.y); ctx.globalAlpha=clamp(f.life/f.max,0,1);
    ctx.fillStyle='rgba(0,0,0,.6)'; ctx.fillText(f.text,s.x+1,s.y+1); ctx.fillStyle=f.color; ctx.fillText(f.text,s.x,s.y); }
  ctx.globalAlpha=1; ctx.textAlign='left'; }
function drawBuildOverlay(){
  if(!game.buildMode) return;
  const v=game._v; ctx.strokeStyle='rgba(196,214,106,.10)'; ctx.lineWidth=1/game.zoom;
  const gx0=Math.max(0,Math.floor(v.x0/TILE)), gx1=Math.min(WORLD.w/TILE,Math.ceil(v.x1/TILE));
  const gy0=Math.max(0,Math.floor(v.y0/TILE)), gy1=Math.min(WORLD.h/TILE,Math.ceil(v.y1/TILE));
  const yA=Math.max(0,v.y0), yB=Math.min(WORLD.h,v.y1), xA=Math.max(0,v.x0), xB=Math.min(WORLD.w,v.x1);
  for(let gx=gx0; gx<=gx1; gx++){ ctx.beginPath(); ctx.moveTo(gx*TILE,yA); ctx.lineTo(gx*TILE,yB); ctx.stroke(); }
  for(let gy=gy0; gy<=gy1; gy++){ ctx.beginPath(); ctx.moveTo(xA,gy*TILE); ctx.lineTo(xB,gy*TILE); ctx.stroke(); }
  const def=BUILD[game.buildPiece];
  if(def.cat==='cell'){
    const {gx,gy}=buildGhostCell();
    const ok=inWorldCell(gx,gy)&&!game.structures.has(gkey(gx,gy))&&canAfford(def.cost)&&!(def.found&&exceedsBase(gx,gy));
    ctx.globalAlpha=0.55; ctx.fillStyle=ok?COL.ghostOk:COL.ghostBad; ctx.fillRect(gx*TILE+1,gy*TILE+1,TILE-2,TILE-2);
    if(game.buildPiece==='turret'){ ctx.globalAlpha=0.4; ctx.fillStyle='#000'; ctx.beginPath(); ctx.arc(gx*TILE+TILE/2,gy*TILE+TILE/2,14,0,TAU); ctx.fill(); }
    ctx.globalAlpha=1; ctx.lineWidth=2/game.zoom; ctx.strokeStyle=ok?'#c4d66a':'#d2553c'; ctx.strokeRect(gx*TILE+1,gy*TILE+1,TILE-2,TILE-2);
  } else {
    let key,seg,ok;
    if(def.cat==='edge'){ const e=edgeUnderCursor(); key=e.key; seg=wallSegOf(key,null); ok=!game.walls.has(key)&&edgeHasFoundation(key)&&canAfford(def.cost); }
    else { const {gx,gy}=buildGhostCell(); key='D,'+gx+','+gy; seg=wallSegOf(key,{rot:game.buildRot&1}); ok=foundationAt(gx,gy)&&!game.walls.has(key)&&canAfford(def.cost); }
    ctx.globalAlpha=0.7; ctx.lineCap='round'; ctx.lineWidth=WALL_T; ctx.strokeStyle=ok?'#c4d66a':'#d2553c';
    ctx.beginPath(); ctx.moveTo(seg[0],seg[1]); ctx.lineTo(seg[2],seg[3]); ctx.stroke();
    ctx.lineCap='butt'; ctx.globalAlpha=1;
  }
}
function drawHoverHp(){          // show a structure's HP bar when hovering it (see decay)
  if(game.store||game.shopOpen||player.inCopter) return;
  const w=screenToWorld(mouse.sx,mouse.sy), gx=Math.floor(w.x/TILE), gy=Math.floor(w.y/TILE), ck=gkey(gx,gy);
  let obj=game.deploys.get(ck)||game.structures.get(ck), cx=gx*TILE+TILE/2, cy=gy*TILE+TILE/2;
  if(!obj){ const e=edgeUnderCursor(), wl=game.walls.get(e.key); if(wl){ const sg=wallSegOf(e.key,wl);
    if(ptSeg(w.x,w.y,sg[0],sg[1],sg[2],sg[3])<16){ obj=wl; cx=(sg[0]+sg[2])/2; cy=(sg[1]+sg[3])/2; } } }
  if(!obj || obj.hp===undefined || obj.max===undefined) return;
  const f=clamp(obj.hp/obj.max,0,1), bw=36, x=cx-bw/2, y=cy-TILE/2-6;
  ctx.fillStyle='rgba(0,0,0,.6)'; ctx.fillRect(x-1,y-1,bw+2,6);
  ctx.fillStyle=f>0.5?'#7bbf4f':f>0.25?'#d8b24a':'#c0432f'; ctx.fillRect(x,y,bw*f,4);
}
function drawWeather(){ const W=game.weather; if(!W || W.rain<=0.02) return;
  // GRADUAL biome blend: rain fades in toward the jungle and fades out into the winter as snow fades in (a sleet MIX in the transitions); the desert stays dry. No abrupt switch at the boundary.
  const t=(game.cam.cx + biomeRidge(game.cam.cy))/WORLD.w, b1=1/3, b2=2/3, bl=0.085;
  const snowAmt = smooth01((t-(b2-bl))/(2*bl));
  const rainAmt = smooth01((t-(b1-bl))/(2*bl)) * (1-snowAmt);
  const rI=W.rain*rainAmt, sI=W.rain*snowAmt;
  if(sI>0.02){                                                                                // SNOW (drifting flakes)
    ctx.fillStyle='rgba(210,224,238,'+(sI*0.16)+')'; ctx.fillRect(0,0,VW,VH);
    if(!W.flakes){ W.flakes=[]; for(let i=0;i<340;i++) W.flakes.push({x:Math.random(), y:Math.random(), sp:0.10+Math.random()*0.22, r:1+Math.random()*2.3, drift:Math.random()*TAU, near:Math.random()<0.4}); }
    const windx=(game.wind||0);
    for(const fk of W.flakes){ const fall=(fk.y + game.t*fk.sp*0.18)%1.06, sway=Math.sin(game.t*0.8+fk.drift)*10 + windx*22*fall;
      const x=fk.x*VW+sway, y=fall*(VH+40)-20, r=fk.r*(fk.near?1.4:1);
      ctx.globalAlpha=(fk.near?0.9:0.55)*clamp(sI*1.4,0,1); ctx.fillStyle='#f4f8fc';
      ctx.beginPath(); ctx.arc(x,y,r,0,TAU); ctx.fill(); }
    ctx.globalAlpha=1;
  }
  if(rI>0.02){                                                                                // RAIN (+ lightning only in solid rain)
    ctx.fillStyle='rgba(26,36,54,'+(rI*0.32)+')'; ctx.fillRect(0,0,VW,VH);
    if(!W.drops){ W.drops=[]; for(let i=0;i<460;i++) W.drops.push({x:Math.random(), y:Math.random(), sp:0.45+Math.random()*1.15, len:7+Math.random()*15, near:Math.random()<0.34}); }
    const windx=(game.wind||0), ang=0.24+windx*0.05, sinx=Math.sin(ang), cosy=Math.cos(ang);
    ctx.lineCap='round';
    for(const near of [false,true]){
      ctx.strokeStyle = near?'rgba(198,214,240,'+(0.42*rI)+')':'rgba(168,188,220,'+(0.22*rI)+')';
      ctx.lineWidth = near?1.7:1; ctx.beginPath();
      for(const d of W.drops){ if(d.near!==near) continue;
        const fall=(d.y + game.t*d.sp*0.5)%1.08, x=d.x*VW + windx*40*fall, y=fall*(VH+60)-30, L=d.len*(near?1.5:1);
        ctx.moveTo(x,y); ctx.lineTo(x+sinx*L, y+cosy*L*2.2); }
      ctx.stroke();
    }
    ctx.lineCap='butt';
    if(W.flash>0 && rainAmt>0.55){ ctx.fillStyle='rgba(222,232,255,'+(W.flash*0.5)+')'; ctx.fillRect(0,0,VW,VH); }
    if(W.bolt && rainAmt>0.55){ const b=W.bolt, a=clamp(b.life/b.max,0,1); ctx.strokeStyle='rgba(236,242,255,'+a+')'; ctx.lineWidth=2.4+a*2;
      ctx.lineCap='round'; ctx.shadowColor='rgba(200,220,255,.9)'; ctx.shadowBlur=14;
      ctx.beginPath(); b.pts.forEach((p,i)=> i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y)); ctx.stroke(); ctx.shadowBlur=0; ctx.lineCap='butt'; }
  }
}
function drawRaidAlarm(){ const a=game.raidAlarm; if(!a) return; const al=clamp(a.t/1.5,0,1), pulse=0.5+0.5*Math.sin(game.t*8);
  ctx.fillStyle='rgba(180,30,20,'+(0.16*al)+')'; ctx.fillRect(0,0,VW,VH);
  ctx.font='bold 22px "Trebuchet MS",sans-serif'; ctx.textAlign='center';
  ctx.fillStyle='rgba(0,0,0,.6)'; ctx.fillText('BASE UNDER ATTACK', VW/2+2, 54);
  ctx.fillStyle='rgba(255,'+Math.round(80+110*pulse)+',55,'+al+')'; ctx.fillText('BASE UNDER ATTACK', VW/2, 52);
  ctx.textAlign='left';
  const sx=(a.x-game.cam.cx)*game.zoom+VW/2, sy=(a.y-game.cam.cy)*game.zoom+VH/2, m=54;   // arrow to the attacker if off-screen
  if(sx<m||sx>VW-m||sy<m||sy>VH-m){ const ang=Math.atan2(sy-VH/2,sx-VW/2), ex=clamp(sx,m,VW-m), ey=clamp(sy,m,VH-m);
    ctx.save(); ctx.translate(ex,ey); ctx.rotate(ang); ctx.globalAlpha=al; ctx.fillStyle='#ff3a2a';
    ctx.beginPath(); ctx.moveTo(18,0); ctx.lineTo(-10,-11); ctx.lineTo(-4,0); ctx.lineTo(-10,11); ctx.closePath(); ctx.fill(); ctx.restore(); ctx.globalAlpha=1; } }
function drawMapMarkers(){ const z=game.zoom, W2S=(wx,wy)=>({x:(wx-game.cam.cx)*z+VW/2, y:(wy-game.cam.cy)*z+VH/2});
  for(const m of (game.monuments||[])){ const p=W2S(m.x,m.y);                       // monuments
    ctx.fillStyle='rgba(232,200,120,.95)'; ctx.beginPath(); ctx.arc(p.x,p.y,5,0,TAU); ctx.fill();
    ctx.fillStyle='#f0e4c4'; ctx.font='bold 10px sans-serif'; ctx.textAlign='center'; ctx.fillText(m.name, p.x, p.y-9); }
  if(game.teamBases) for(const ow in game.teamBases){ const id=parseInt(ow.slice(1))||0,        // base marker + team NUMBER on EVERY alive base (a multi-base team shows its number on each of its bases)
      col=(typeof ENEMY_COLS!=='undefined')?ENEMY_COLS[id%ENEMY_COLS.length]:'#b85b5b';
    for(const r of (game.teamBases[ow]||[])){ const tcd=game.deploys.get(r.tcKey); if(!tcd||tcd.type!=='cupboard') continue;   // only bases whose Tool Cupboard is still alive
      const bp=W2S(r.hx,r.hy); ctx.fillStyle=col; ctx.fillRect(bp.x-6,bp.y-6,12,12); ctx.strokeStyle='rgba(0,0,0,.5)'; ctx.lineWidth=1; ctx.strokeRect(bp.x-6,bp.y-6,12,12);
      ctx.fillStyle='#fff'; ctx.font='bold 10px sans-serif'; ctx.textAlign='center'; ctx.fillText(''+(id+1), bp.x, bp.y+3.5); } }
  if(game.enemies) for(const b of game.enemies){ if(b.eliminated||b.dead) continue;             // live unit dots (base + its workers)
    if(b.ally){ const pp=W2S(b.x,b.y); ctx.fillStyle='#7ec850'; ctx.beginPath(); ctx.arc(pp.x,pp.y,2.6,0,TAU); ctx.fill(); ctx.strokeStyle='rgba(0,0,0,.6)'; ctx.lineWidth=1; ctx.stroke(); continue; }  // allied worker dot
    const pp=W2S(b.x,b.y); ctx.fillStyle=b.col; ctx.beginPath(); ctx.arc(pp.x,pp.y,b.primary?3:2,0,TAU); ctx.fill(); ctx.strokeStyle='rgba(0,0,0,.6)'; ctx.lineWidth=1; ctx.stroke();
  }
  for(const r of (game.raids||[])){ const p=W2S(r.x,r.y), pulse=0.5+0.5*Math.sin(game.t*7);    // live raids (red, fade after 60s)
    ctx.fillStyle='rgba(225,60,45,'+(0.35+0.4*clamp(r.t/60,0,1))+')'; ctx.beginPath(); ctx.arc(p.x,p.y,7+pulse*3,0,TAU); ctx.fill();
    ctx.fillStyle='#ff5238'; ctx.beginPath(); ctx.arc(p.x,p.y,3.2,0,TAU); ctx.fill(); }
  if(game.airdrop){ const a=game.airdrop, q=W2S(a.x, a.fall<1?a.gy:a.y), pulse=0.5+0.5*Math.sin(game.t*6);   // active airdrop on the map (until looted)
    ctx.fillStyle='rgba(255,210,90,'+(0.45+0.45*pulse)+')'; ctx.beginPath(); ctx.arc(q.x,q.y,8+pulse*3,0,TAU); ctx.fill();
    ctx.fillStyle='#3a2c0a'; ctx.font='bold 11px sans-serif'; ctx.textAlign='center'; ctx.fillText('✈',q.x,q.y+4); }
  if(game.convoys) for(const c of game.convoys){ const q=W2S(c.x,c.y), pulse=0.5+0.5*Math.sin(game.t*5);   // armored convoy on the map (roaming loot target) + its escort guards
    ctx.fillStyle='rgba(130,170,95,'+(0.4+0.45*pulse)+')'; ctx.beginPath(); ctx.arc(q.x,q.y,8+pulse*3,0,TAU); ctx.fill();
    ctx.fillStyle='#566b3e'; ctx.fillRect(q.x-5,q.y-3,10,6); ctx.fillStyle='#15180f'; ctx.fillRect(q.x+2.5,q.y-2,2.6,4);   // little olive truck + cab
    for(const g of c.guards){ if(g.dead) continue; const gp=W2S(g.x,g.y); ctx.fillStyle='#8a9a64'; ctx.beginPath(); ctx.arc(gp.x,gp.y,1.6,0,TAU); ctx.fill(); } }
  if(game.plane){ const pl=W2S(game.plane.x,game.plane.y); ctx.fillStyle='#e6eef4'; ctx.beginPath(); ctx.arc(pl.x,pl.y,3.2,0,TAU); ctx.fill(); }
  if(game.deathMark){ const d=W2S(game.deathMark.x,game.deathMark.y);                              // SKULL at your last death location
    ctx.fillStyle='#1a1a1a'; ctx.beginPath(); ctx.arc(d.x,d.y,8,0,TAU); ctx.fill();
    ctx.fillStyle='#eef0ee'; ctx.beginPath(); ctx.arc(d.x,d.y-1,6,0,TAU); ctx.fill(); ctx.fillRect(d.x-3,d.y+2,6,4);   // skull head + jaw
    ctx.fillStyle='#1a1a1a'; ctx.beginPath(); ctx.arc(d.x-2.3,d.y-1.5,1.7,0,TAU); ctx.arc(d.x+2.3,d.y-1.5,1.7,0,TAU); ctx.fill();   // eye sockets
    ctx.fillRect(d.x-0.6,d.y+0.6,1.2,2.4); ctx.fillRect(d.x-1.8,d.y+3.2,0.9,2.8); ctx.fillRect(d.x+0.9,d.y+3.2,0.9,2.8);   // nose + tooth gaps
    ctx.fillStyle='#e6d9b8'; ctx.font='bold 9px sans-serif'; ctx.textAlign='center'; ctx.fillText('last death', d.x, d.y-11); }
  const tc=playerCupboard(); if(tc){ const p=W2S(tc.cx,tc.cy); ctx.strokeStyle='#caa24a'; ctx.lineWidth=2; ctx.strokeRect(p.x-5,p.y-5,10,10); }   // your base
  const pp=W2S(player.x,player.y), pulse=Math.sin(game.t*6)*3;                       // YOU marker (pulsing)
  ctx.strokeStyle='rgba(120,230,120,.9)'; ctx.lineWidth=2.5; ctx.beginPath(); ctx.arc(pp.x,pp.y,11+pulse,0,TAU); ctx.stroke();
  ctx.fillStyle='#7ce06f'; ctx.beginPath(); ctx.arc(pp.x,pp.y,5,0,TAU); ctx.fill();
  ctx.fillStyle='#0a0d08'; ctx.font='bold 9px sans-serif'; ctx.textAlign='center'; ctx.fillText('YOU', pp.x, pp.y+3);
  ctx.fillStyle='rgba(235,240,205,.9)'; ctx.font='bold 14px "Trebuchet MS",sans-serif'; ctx.fillText('Click anywhere on the map to travel there', VW/2, VH-66); ctx.textAlign='left';
}
function drawBlasts(){ if(!game.blasts.length) return;       // screen-edge arrows pointing at off-screen explosions
  const cx=VW/2, cy=VH/2, m=46;
  for(const b of game.blasts){ const sx=(b.x-game.cam.cx)*game.zoom+VW/2, sy=(b.y-game.cam.cy)*game.zoom+VH/2;
    if(sx>=m && sx<=VW-m && sy>=m && sy<=VH-m) continue;     // came on-screen — no marker needed
    const ang=Math.atan2(sy-cy,sx-cx), ex=clamp(sx,m,VW-m), ey=clamp(sy,m,VH-m), a=clamp(b.life/b.max,0,1);
    ctx.save(); ctx.translate(ex,ey);
    ctx.globalAlpha=a*0.5; ctx.fillStyle='#ffb24a'; ctx.beginPath(); ctx.arc(0,0,18*(1.3-a),0,TAU); ctx.fill();
    ctx.rotate(ang); ctx.globalAlpha=0.55+0.45*a; ctx.fillStyle='#ff7a2a';
    ctx.beginPath(); ctx.moveTo(16,0); ctx.lineTo(-9,-10); ctx.lineTo(-3,0); ctx.lineTo(-9,10); ctx.closePath(); ctx.fill();
    ctx.restore(); }
  ctx.globalAlpha=1;
}
function drawFence(f){ const s=worldToScreen(f.x,f.y), dmg=1-f.hp/f.max;
  shadow(s.x,s.y+5,FENCE.half*0.9);
  ctx.save(); ctx.translate(s.x,s.y); ctx.rotate(f.a);
  ctx.fillStyle='#7a5a32'; fillRR(-FENCE.half,-7,FENCE.len,3.4,1.4,ctx.fillStyle); fillRR(-FENCE.half,1,FENCE.len,3.4,1.4,ctx.fillStyle);   // two rails
  ctx.fillStyle='#8a6a3c'; for(let i=-FENCE.half+4;i<=FENCE.half-4;i+=9) fillRR(i,-10,4.5,18,1.4,ctx.fillStyle);                              // pickets
  ctx.fillStyle='rgba(255,255,255,.12)'; for(let i=-FENCE.half+4;i<=FENCE.half-4;i+=9) ctx.fillRect(i,-10,4.5,2);
  if(dmg>0.02){ ctx.strokeStyle='rgba(20,15,8,'+(0.2+dmg*0.5)+')'; ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(-6,-9); ctx.lineTo(2,6); ctx.stroke(); }
  ctx.restore();
  if(f.hp<f.max){ const w=FENCE.len*0.7, fr=Math.max(0,f.hp/f.max); ctx.fillStyle='rgba(0,0,0,.55)'; fillRR(s.x-w/2,s.y-20,w,3,1.5,ctx.fillStyle); ctx.fillStyle='#c79a5e'; fillRR(s.x-w/2,s.y-20,w*fr,3,1.5,ctx.fillStyle); } }
function drawReticle(){ const x=mouse.sx,y=mouse.sy,g=6,L=10;
  ctx.strokeStyle='rgba(225,235,195,.9)'; ctx.lineWidth=3.5; ctx.beginPath();
  ctx.moveTo(x-g-L,y); ctx.lineTo(x-g,y); ctx.moveTo(x+g,y); ctx.lineTo(x+g+L,y);
  ctx.moveTo(x,y-g-L); ctx.lineTo(x,y-g); ctx.moveTo(x,y+g); ctx.lineTo(x,y+g+L); ctx.stroke();
  ctx.fillStyle='rgba(225,235,195,.95)'; ctx.fillRect(x-2,y-2,4,4); }

