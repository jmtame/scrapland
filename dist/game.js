(()=>{var xe={w:13824,h:9216},jt=16,ra=64,Ke="p1",Dr=1/60,ln={pistol:{name:"Pistol",magSize:12,reserve:96,dmg:14,rof:.22,spread:.03,speed:1150,auto:!1,reloadT:1,kick:6,range:1.6},rifle:{name:"Rifle",magSize:30,reserve:180,dmg:11,rof:.09,spread:.05,speed:1500,auto:!0,reloadT:1.6,kick:4,range:2.4},minigun:{name:"Minigun",magSize:200,reserve:200,dmg:6,rof:.045,spread:.09,speed:1300,auto:!0,reloadT:4.5,kick:2,range:1.8,windup:2.6},rocket:{name:"Rocket",magSize:1,reserve:50,dmg:55,rof:.9,spread:.012,speed:560,auto:!1,reloadT:1.9,kick:16,range:2.8,rocket:!0,splash:96,splashDmg:150,structDmg:55},sniper:{name:"Sniper",magSize:1,reserve:30,dmg:60,rof:1,spread:.004,speed:1180,auto:!1,reloadT:1.8,kick:14,range:3.4,locked:!0},shotgun:{name:"Shotgun",magSize:6,reserve:48,dmg:9,rof:.3,spread:.17,speed:1050,auto:!0,reloadT:1.5,kick:9,range:1.1,pellets:7},hmg:{name:"HMG",magSize:100,reserve:300,dmg:15,rof:.05,spread:.11,speed:1500,auto:!0,reloadT:3,kick:9,range:2.4,locked:!0,tracer:"hmg"}};var zs={splash:120,splashDmg:120,structDmg:22,fuse:2},Qt={floor:{name:"Floor",cost:{wood:5},cat:"cell",hp:100,found:!0,up:!0},trifloor:{name:"Tri-Floor",cost:{wood:4},cat:"cell",hp:90,found:!0,up:!0,tri:!0,hidden:!0},wall:{name:"Wall",cost:{wood:10},cat:"edge",hp:100,up:!0},triangle:{name:"Triangle",cost:{wood:8},cat:"diag",hp:100,up:!0,hidden:!0},door:{name:"Door",cost:{wood:10,metal:5},cat:"edge",hp:50,up:!0,mMul:2,door:!0},box:{name:"Box",cost:{wood:15},cat:"cell",hp:90,box:!0,store:!0,hidden:!0},turret:{name:"Turret",cost:{wood:40,metal:30},cat:"cell",hp:150,solid:!0,turret:!0},cupboard:{name:"Cupboard",cost:{wood:60,metal:25},cat:"cell",hp:300,solid:!0,tc:!0,store:!0}},gs=["floor","wall","door","turret","cupboard"];var $c=10,uf={wood:{to:"stone",cost:{stone:15}},stone:{to:"metal",cost:{metal:20}},metal:{to:"armored",cost:{hqm:8}}};function Ei(n,e){let t=n.mMul||4;return e==="armored"?n.hp*t*2:e==="metal"?n.hp*t:e==="stone"?Math.round(n.hp*(1+t)/2):n.hp}var Ht=900,qi=900,Lr=.0075,pf=30,oa=10,mf=600,Kc=3600,gf=1200,Nr=240,Tt=620,Jc=620,jc=50,Yi={hp:200,len:46,half:23,life:60},xf=7,aa=1.9,yf=.65,xs={head:[0,.25,.45,.62],body:[0,.18,.34,.5],cost:[0,16,34,60],headCol:[null,"#cdbb92","#9aabb8","#7c8ec9"],bodyCol:[null,"#857748","#959ca3","#5d7a9b"]},Qc=(n,e)=>xs[e][L0(n)],L0=n=>n<0?0:n>3?3:n|0,vt={speed:560,boost:980,accel:360,drag:.55,dragIdle:.85,turn:2.1,r:30,hp:260},Zt={speed:455,accel:300,drag:.55,turn:1.6,r:46,seats:4,cost:40,hp:360},la={1:{name:"Pistol",dmg:14,rof:.5,speed:1e3,spread:.05,mag:12,reload:1.6,range:340,lead:0},2:{name:"Rifle",dmg:11,rof:.12,speed:1500,spread:.05,mag:30,reload:2,range:380,lead:.55},3:{name:"Sniper",dmg:60,rof:1.3,speed:1900,spread:0,mag:1,reload:2.4,range:460,lead:1}},_f={2:50,3:250},eh=50,ys={boar:{hp:35,r:17,walk:62,chase:128,dmg:7,atk:.8,detect:300,lose:560,loot:["wood",1,3]},wolf:{hp:62,r:15,walk:84,chase:190,dmg:12,atk:.6,detect:430,lose:720,loot:["metal",1,2],biome:"jungle",pack:!0},bear:{hp:165,r:25,walk:54,chase:132,dmg:24,atk:1,detect:360,lose:660,loot:["metal",3,6],biome:"winter"},alligator:{hp:140,r:22,walk:48,chase:158,dmg:22,atk:.9,detect:340,lose:620,loot:["metal",2,5],biome:"jungle",lake:!0},snake:{hp:42,r:11,walk:78,chase:214,dmg:14,atk:.5,detect:380,lose:640,loot:["metal",1,2],biome:"desert"},scorpion:{hp:28,r:12,walk:74,chase:158,dmg:6,atk:.7,detect:300,lose:540,loot:["metal",1,2],biome:"desert",poison:!0},polarbear:{hp:205,r:27,walk:58,chase:142,dmg:28,atk:1,detect:380,lose:690,loot:["metal",4,7],biome:"winter"}},vf=[["boar",12],["wolf",7],["bear",6],["alligator",8],["snake",9],["scorpion",8],["polarbear",5]],Vt={trades:[["wood",100,6],["stone",100,9],["metal",50,10]],buys:{pistol:{ammo:48,cost:6},rifle:{ammo:90,cost:10},minigun:{ammo:200,cost:16},rocket:{ammo:2,cost:24},shotgun:{ammo:24,cost:9},sniper:{ammo:5,cost:24},hmg:{ammo:150,cost:20}},jackhammer:30,laser:14,fenceWood:10,grenade:8,signal:60,hqm:{cost:12,amt:10},worker:100},qt={hp:64,r:14,dmg:8,rof:.5,range:430,detect:540,speed:118,leash:170,bspeed:1200,spread:.06},Mf=[{type:"gas",name:"Gas Station",fx:.26,fy:.3,crates:4,barrels:12,guards:3},{type:"junk",name:"Junkyard",fx:.75,fy:.32,crates:5,barrels:7,guards:3},{type:"warehouse",name:"Abandoned Warehouse",fx:.5,fy:.74,crates:7,barrels:7,guards:4}],Kn={capR:240,capT:8,payEvery:6,pay:{stone:10,metal:6,scrap:4}},fn={vhp:1100,ghp:80,speed:120,trange:560,tdmg:13,trof:.34,gdmg:9,grof:.5,grange:440,gspeed:120,leash:300,bspeed:1300},Jn={hp:450,speed:330,orbitR:420,orbitT:22,strafeR:760,flakR:720},Vs={hackT:60,r:150},xt={TEAM_COUNT:7,COLS:["#b85b5b","#5b8bb8","#b89b5b","#7bb85b","#9b5bb8","#5bb8a8","#b8765b","#8b8b5b","#b85b9b","#6b78b8"],BOT_SPEED:160,ROCKET_MIN:230,STRAFE_FLIP:.9,REACT_R:640,WORKER_COST:50,GATHER_LOAD:300,MINICOPTER_COST:30,SIGNAL_COST:60,HIRE_CAP_HARD:16,HIRE_CAP:8,RESPAWN_T:15,TRIPWIRE:2600,RAID_DEF_W:.55,RAID_TUR_W:.3,ENDGAME_T:420,ENDGAME_BASES:6};function bf(n){let e=n>>>0||1,t=()=>{e|=0,e=e+1831565813|0;let i=Math.imul(e^e>>>15,1|e);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296};return{next:t,rand:(i=0,s=1)=>i+t()*(s-i),randi:(i,s)=>Math.floor(i+t()*(s-i+1)),chance:i=>t()<i,pick:i=>i[Math.floor(t()*i.length)],angle:()=>t()*Math.PI*2}}var Ze=Math.PI*2,st=(n,e,t)=>n<e?e:n>t?t:n,Ur=(n,e,t)=>n+(e-n)*t,_e=(n,e,t,i)=>{let s=t-n,r=i-e;return s*s+r*r},te=(n,e,t,i)=>Math.sqrt(_e(n,e,t,i)),Ai=n=>(n=st(n,0,1),n*n*(3-2*n));function N0(n,e){let t=(e-n)%Ze;return t>Math.PI&&(t-=Ze),t<-Math.PI&&(t+=Ze),t}function Ri(n,e,t){let i=N0(n,e);return Math.abs(i)<=t?e:n+Math.sign(i)*t}var et=(n,e)=>n+","+e,Oe=(n,e,t)=>n+","+e+","+t;function At(n,e,t,i,s,r){let o=s-t,a=r-i,l=o*o+a*a;if(l===0)return te(n,e,t,i);let c=((n-t)*o+(e-i)*a)/l;return c=st(c,0,1),te(n,e,t+c*o,i+c*a)}function oi(n,e,t,i,s,r,o,a){let l=ca(s,r,o,a,n,e),c=ca(s,r,o,a,t,i),d=ca(n,e,t,i,s,r),h=ca(n,e,t,i,o,a);return(l>0&&c<0||l<0&&c>0)&&(d>0&&h<0||d<0&&h>0)}function ca(n,e,t,i,s,r){return(t-n)*(r-e)-(i-e)*(s-n)}function wf(n,e,t,i,s,r,o,a){let l=t-n,c=i-e,d=o-s,h=a-r,f=l*h-c*d;if(Math.abs(f)<1e-9)return null;let u=((s-n)*h-(r-e)*d)/f,p=((s-n)*c-(r-e)*l)/f;return u<0||u>1||p<0||p>1?null:{x:n+u*l,y:e+u*c}}function Zi(n,e){let t=n*374761393+e*668265263|0;return t=t^t>>13|0,t=Math.imul(t,1274126177),((t^t>>16)>>>0)/4294967296}function Ef(n){let e=n.rng,t=xe.w,i=xe.h,s=200,r=t/2,o=i/2,a=.47*t,l=.47*i,c=[];for(let se=0;se<5;se++)c.push({f:se+2,w:1/(se+1.2),p:e.rand(0,Ze)});let d=[],h=1e9,f=-1e9;for(let se=0;se<s;se++){let re=se/s*Ze,F=0;for(let ne of c)F+=Math.sin(re*ne.f+ne.p)*ne.w;d.push(F),h=Math.min(h,F),f=Math.max(f,F)}let u=d.map(se=>1-.22*(.5-.5*((se-h)/(f-h)*2-1))),p={cx:r,cy:o,rx:a,ry:l,N:s,rad:u},x=se=>{let re=se%Ze;re<0&&(re+=Ze);let F=re/Ze*s,ne=Math.floor(F)%s,oe=(ne+1)%s;return u[ne]+(u[oe]-u[ne])*(F-ne)},m=(se,re)=>{let F=(se-r)/a,ne=(re-o)/l,oe=Math.sqrt(F*F+ne*ne);return x(Math.atan2(ne,F))-oe},g=(se,re)=>m(se,re)>0,y=[];for(let se=0;se<s;se++){let re=se/s*Ze;y.push({x:r+Math.cos(re)*u[se]*a,y:o+Math.sin(re)*u[se]*l})}let v=se=>se===void 0?0:(Math.sin(se*.0016+1.7)*.62+Math.sin(se*.0043+4.2)*.38)*t*.055,w=(se,re)=>{let F=(se+v(re))/t;return F<1/3?"desert":F<2/3?"jungle":"winter"},E={x:t/2,y:i/2,r:46},T=[];for(let se=0;se<5;se++){let re=se%2===0,F=re?t:i,ne=re?i:t,oe=e.rand(.14,.86)*ne,O=e.rand(260,820),V=e.rand(1.4,3.2),de=e.rand(0,Ze),U=[];for(let ye=0;ye<=30;ye++){let I=ye/30,ee=st(oe+Math.sin(I*V*Ze+de)*O,60,ne-60);U.push(re?{x:I*F,y:ee}:{x:ee,y:I*F})}let G=e.rand(26,42),$=[],Q=e.chance(.5)?1:-1;for(let ye=0;ye<U.length;ye+=2){let I=P(U,ye);$.push({x:st(U[ye].x+Math.cos(I+Math.PI/2)*Q*(G/2+24),20,t-20),y:st(U[ye].y+Math.sin(I+Math.PI/2)*Q*(G/2+24),20,i-20)})}T.push({pts:U,w:G,poles:$,fade:U.map(()=>1)})}function P(se,re){let F=se[Math.max(0,re-1)],ne=se[Math.min(se.length-1,re+1)];return Math.atan2(ne.y-F.y,ne.x-F.x)}let _=(se,re)=>{let F=se,ne=re;for(let oe=0;oe<7;oe++){let O={x:(F.x+ne.x)/2,y:(F.y+ne.y)/2};m(O.x,O.y)>.015?F=O:ne=O}return{x:F.x,y:F.y}},M=se=>{let re=se.map(O=>m(O.x,O.y)>.015),F=re.indexOf(!0),ne=re.lastIndexOf(!0);if(F===-1||ne-F<2)return null;let oe=se.slice(F,ne+1);return F>0&&(oe[0]=_(oe[0],se[F-1])),ne<se.length-1&&(oe[oe.length-1]=_(oe[oe.length-1],se[ne+1])),oe},S=e.chance(.5),R=[];for(let se of[[.15,.35],[.65,.85]]){let re=S?t:i,F=S?i:t;for(let ne=0;ne<4&&!R.some(oe=>oe.band===se[0]);ne++){let oe=e.rand(se[0],se[1])*F,O=e.rand(70,Math.min(300,F*.09)),V=e.rand(.7,1.5),de=e.rand(0,Ze),U=[];for(let $=0;$<=46;$++){let Q=$/46,ye=st(oe+Math.sin(Q*V*Ze+de)*O,90,F-90);U.push(S?{x:Q*re,y:ye}:{x:ye,y:Q*re})}if(U=M(U),!U)continue;let G=!1;for(let $ of R)for(let Q=0;Q<U.length-1&&!G;Q++)for(let ye=0;ye<$.pts.length-1;ye++)if(oi(U[Q].x,U[Q].y,U[Q+1].x,U[Q+1].y,$.pts[ye].x,$.pts[ye].y,$.pts[ye+1].x,$.pts[ye+1].y)){G=!0;break}G||R.push({pts:U,band:se[0]})}}let L=(se,re,F)=>{let ne=1e9;for(let oe of F){let O=oe.pts;for(let V=0;V<O.length-1;V++)ne=Math.min(ne,At(se,re,O[V].x,O[V].y,O[V+1].x,O[V+1].y))}return ne},W=(se,re)=>L(se,re,R),X=(se,re)=>L(se,re,T),N=[];for(let se of R)for(let re=0;re<se.pts.length-1;re++)for(let F of T)for(let ne=0;ne<F.pts.length-1;ne++){let oe=wf(se.pts[re].x,se.pts[re].y,se.pts[re+1].x,se.pts[re+1].y,F.pts[ne].x,F.pts[ne].y,F.pts[ne+1].x,F.pts[ne+1].y);oe&&N.push({x:oe.x,y:oe.y,railAng:Math.atan2(se.pts[re+1].y-se.pts[re].y,se.pts[re+1].x-se.pts[re].x),gate:0,active:!1})}let B=[];for(let se=0;se<26&&B.length<5;se++){let re=e.rand(.34*t,.97*t),F=e.rand(.14*i,.86*i),ne=e.rand(170,330);if(m(re,F)<ne/Math.min(a,l)+.06||w(re,F)==="desert"||W(re,F)<ne+120||te(re,F,E.x,E.y)<Tt+ne+260||B.some(U=>te(re,F,U.x,U.y)<ne+U.r+220))continue;let oe=[],O=[{f:2,p:e.rand(0,Ze)},{f:3,p:e.rand(0,Ze)},{f:5,p:e.rand(0,Ze)}];for(let U=0;U<28;U++){let G=U/28*Ze,$=0;for(let Q=0;Q<3;Q++)$+=Math.sin(G*O[Q].f+O[Q].p)/(Q+1.6);oe.push(1+.17*Math.max(-1,Math.min(1,$)))}let V=w(re,F)==="winter",de=[];if(!V)for(let U=0,G=e.randi(2,4);U<G;U++)de.push({a:e.rand(0,Ze),rr:e.rand(.2,.72),s:e.rand(9,16)});B.push({x:re,y:F,r:ne,wob:oe,frozen:V,pads:de,seed:e.rand(0,9)})}let Y=(se,re)=>{for(let F of B)if(_e(se,re,F.x,F.y)<F.r*F.r)return F;return null};for(let se of T)se.fade=se.pts.map(re=>{let F=m(re.x,re.y);if(F<=.015)return 0;let ne=Ai((F-.015)/.05);for(let oe of B){let O=te(re.x,re.y,oe.x,oe.y)-oe.r*1.08;ne*=Ai((O-12)/70)}return ne}),se.poles=se.poles.filter(re=>m(re.x,re.y)>.03&&!B.some(F=>te(re.x,re.y,F.x,F.y)<F.r+40));let ce=[];for(let se of Mf){let re=se.fx*t,F=se.fy*i;for(let ne=0;ne<8&&(m(re,F)<.12||Y(re,F));ne++)re=re*.78+r*.22,F=F*.78+o*.22;ce.push({type:se.type,name:se.name,x:re,y:F,r:200,crates:se.crates,nbarrels:se.barrels,nguards:se.guards})}let pe=Tt+240+700,Ee={x:.4*t,y:.52*i};e:for(let se=0;se<6;se++){let re=pe+se*700;for(let F=0;F<16;F++){let ne=F/16*Ze,oe=E.x+Math.cos(ne)*re,O=E.y+Math.sin(ne)*re;if(!(oe<600||O<600||oe>t-600||O>i-600)&&!(m(oe,O)<.12||Y(oe,O))&&!(W(oe,O)<360||X(oe,O)<320)&&!(te(oe,O,E.x,E.y)<pe)){Ee={x:oe,y:O};break e}}}ce.push({type:"quarry",name:"Quarry",x:Ee.x,y:Ee.y,r:170}),n.quarry={x:Ee.x,y:Ee.y,r:Kn.capR,owner:null,capOwner:null,capT:0,payT:0,arm:0,paid:0};let De=[],He=[],Qe=(se,re,F,ne)=>{if(m(se,re)<.06||Y(se,re))return!1;let oe=w(se,re);if(oe!=="jungle"&&oe!=="winter"||te(se,re,E.x,E.y)<Tt+F)return!1;for(let O of ce)if(te(se,re,O.x,O.y)<O.r+240)return!1;if(W(se,re)<F+90)return!1;for(let O of ne)if(te(se,re,O.x,O.y)<F+O.r+44)return!1;return!0};for(let se=0;se<34;se++)for(let re=0;re<30;re++){let F=e.rand(t/3,t-120),ne=e.rand(120,i-120),oe=e.rand(28,42);if(Qe(F,ne,oe,De)){De.push({x:F,y:ne,r:oe,seed:e.rand(0,9),winter:w(F,ne)==="winter"});break}}for(let se=0;se<72;se++)for(let re=0;re<18;re++){let F=e.rand(t/3,t-100),ne=e.rand(100,i-100),oe=e.rand(7,13);if(Qe(F,ne,oe,De)){He.push({x:F,y:ne,r:oe,seed:e.rand(0,9),winter:w(F,ne)==="winter"});break}}n.world={island:p,islandPath:y,onLand:g,landFactor:m,islandRadAt:x,biomeAt:w,biomeRidge:v,shop:E,roads:T,rails:R,railHoriz:S,crossings:N,lakes:B,lakeAt:Y,railDist:W,pathDist:X,monuments:ce,boulders:De,rocks:He,flora:[],palms:[]},k0(n),F0(n),B0(n),H0(n),n.copter={x:n.player.x+120,y:n.player.y,angle:0,rotor:0,vx:0,vy:0,spd:0,hp:vt.hp,max:vt.hp,destroyed:!1}}function U0(n,e,t,i){let s=n.rng;for(let r=0;r<40;r++){let o=s.rand(i,xe.w-i),a=s.rand(i,xe.h-i);if(te(o,a,n.player.x,n.player.y)<220||n.world.landFactor(o,a)<.05||n.world.lakeAt(o,a))continue;let l=!1;for(let c of e)if(te(o,a,c.x,c.y)<t+c.r+24){l=!0;break}if(!l)return{x:o,y:a}}return null}function k0(n){let e=n.rng,t=[["tree",290,22,120,"wood"],["stone",190,26,140,"stone"],["metal",150,24,110,"metal"]],i=[];for(let[s,r,o,a,l]of t)for(let c=0;c<r;c++){let d=U0(n,i,o,90);if(!d)continue;let h={type:s,x:d.x,y:d.y,r:o,amount:a,max:a,regen:0,seed:e.rand(0,1e3),base:l,by:null,byT:0};i.push(h),n.resources.push(h)}}function F0(n){let e=n.rng;for(let t of n.world.monuments)if(t.type!=="quarry"){for(let i=0;i<t.crates;i++){let s=e.rand(0,Ze),r=e.rand(24,.62*t.r);n.barrels.push({x:t.x+Math.cos(s)*r,y:t.y+Math.sin(s)*r,r:18,hp:45,max:45,seed:e.rand(0,9),tier:"mon",crate:!0,respawnT:0})}for(let i=0;i<t.nbarrels;i++){let s=e.rand(0,Ze),r=e.rand(.45*t.r,.95*t.r);n.barrels.push({x:t.x+Math.cos(s)*r,y:t.y+Math.sin(s)*r,r:16,hp:30,max:30,seed:e.rand(0,9),tier:"mon",respawnT:0})}for(let i=0;i<t.nguards;i++)O0(n,t)}for(let t of n.world.roads)if(!t.convoy)for(let i=0;i<t.pts.length;i+=2){if(i%4!==0||!e.chance(.7))continue;let s=t.pts[i],r=e.rand(0,Ze),o=st(s.x+Math.cos(r)*(t.w/2+e.rand(16,70)),30,xe.w-30),a=st(s.y+Math.sin(r)*(t.w/2+e.rand(16,70)),30,xe.h-30);te(o,a,n.world.shop.x,n.world.shop.y)<Tt+60||!n.world.onLand(o,a)||n.world.lakeAt(o,a)||n.barrels.push({x:o,y:a,r:16,hp:30,max:30,seed:e.rand(0,9),tier:"road",respawnT:0})}}function O0(n,e){let t=n.rng,i=t.rand(0,Ze),s=t.rand(.35*e.r,.8*e.r);n.guards.push({mx:e.x,my:e.y,mr:e.r,x:e.x+Math.cos(i)*s,y:e.y+Math.sin(i)*s,hp:qt.hp,max:qt.hp,angle:t.rand(0,Ze),gunCd:t.rand(0,.6),dead:!1,respawnT:0,wpX:0,wpY:0,wpT:0,hasWp:!1,seed:t.rand(0,9),vx:0,vy:0})}function B0(n){let e=n.rng,t=xe.w,i=xe.h,s=["#d96a83","#dbb44a","#c46ac4","#e8e4da","#e08a52","#7aa0e0"];for(let r=0,o=e.randi(200,300);r<o;r++){let a=e.rand(t/3,2*t/3),l=e.rand(60,i-60);if(!n.world.onLand(a,l)||n.world.lakeAt(a,l)||n.world.biomeAt(a,l)!=="jungle")continue;let c=e.next();n.world.flora.push({x:a,y:l,type:c<.4?"flower":c<.72?"fern":"shrub",seed:e.rand(0,9),col:e.pick(s)})}for(let r=0,o=e.randi(90,140);r<o;r++){let a=e.rand(30,t/3),l=e.rand(60,i-60);!n.world.onLand(a,l)||n.world.lakeAt(a,l)||n.world.biomeAt(a,l)!=="desert"||n.world.flora.push({x:a,y:l,type:e.chance(.5)?"cactus":"deshrub",seed:e.rand(0,9),arms:e.randi(0,2)})}for(let r=0;r<n.world.islandPath.length;r+=2){let o=n.world.islandPath[r],a=n.world.island.cx+(o.x-n.world.island.cx)*.93,l=n.world.island.cy+(o.y-n.world.island.cy)*.93;n.world.biomeAt(a,l)==="jungle"&&e.chance(.34)&&n.world.palms.push({x:a,y:l,seed:e.rand(0,9)})}for(let r=0,o=e.randi(10,16);r<o;r++){let a=e.rand(40,t/3-20),l=e.rand(80,i-80);n.world.biomeAt(a,l)==="desert"&&n.world.onLand(a,l)&&!n.world.lakeAt(a,l)&&n.world.palms.push({x:a,y:l,seed:e.rand(0,9),desert:!0})}}function H0(n){let e=n.rng,t=xe.w,i=xe.h,s=o=>o==="desert"?[0,t/3]:o==="jungle"?[t/3,2*t/3]:o==="winter"?[2*t/3,t]:[0,t],r=[];for(let[o,a]of vf){let l=ys[o];for(let c=0;c<a;c++){let d=Tf(n,o,l,s(l.biome),r,null);if(d&&l.pack&&e.chance(.45))for(let h=0,f=e.randi(1,2);h<f;h++)Tf(n,o,l,s(l.biome),r,d)}}}function Tf(n,e,t,i,s,r){let o=n.rng;for(let a=0;a<40;a++){let l,c,d=r?r.lake:null;if(r)l=r.x+o.rand(-150,150),c=r.y+o.rand(-150,150);else if(t.lake){let u=n.world.lakes.filter(m=>!m.frozen||t.biome!=="jungle");if(!u.length)return null;d=o.pick(u);let p=o.rand(0,Ze),x=d.r+o.rand(30,200);l=d.x+Math.cos(p)*x,c=d.y+Math.sin(p)*x}else l=o.rand(i[0],i[1]),c=o.rand(90,xe.h-90);if(l=st(l,i[0]-70,i[1]+70),c=st(c,90,xe.h-90),te(l,c,n.player.x,n.player.y)<220||te(l,c,n.world.shop.x,n.world.shop.y)<Tt+200||n.world.landFactor(l,c)<.05||n.world.lakeAt(l,c)&&!t.lake)continue;let h=!1;for(let u of s)if(te(l,c,u.x,u.y)<t.r+u.r+8){h=!0;break}if(h)continue;let f={type:e,x:l,y:c,vx:0,vy:0,r:t.r,hp:t.hp,max:t.hp,aggro:null,atkcd:0,hit:0,wanderT:o.rand(0,2),dir:o.rand(0,Ze),respawnT:0,hostile:o.chance(.1),foe:null,lake:d,pauseT:0,stuckT:0,blockedAll:0,dead:!1,avoidT:0,avoidA:0};return s.push(f),n.animals.push(f),f}return null}var _n=Math.ceil(xe.w/64),Gs=Math.ceil(xe.h/64),$i=_n*Gs;function If(n){let e=new Uint8Array($i),t=new Float32Array($i);for(let i=0;i<Gs;i++)for(let s=0;s<_n;s++){let r=s*64+64/2,o=i*64+64/2,a=i*_n+s,l=1;if(!n.world.onLand(r,o)){e[a]=1,t[a]=1;continue}let c=n.world.lakeAt(r,o);c&&(l=c.frozen?1.15:3);for(let d of n.world.boulders)if((r-d.x)*(r-d.x)+(o-d.y)*(o-d.y)<(d.r+18)*(d.r+18)){e[a]=1;break}n.world.pathDist(r,o)<26&&(l=Math.min(l,.85)),t[a]=l}n.nav={COLS:_n,ROWS:Gs,N:$i,terrain:e,cost:t,stamp:1,penalty:new Map,g:new Float32Array($i),came:new Int32Array($i),vis:new Int32Array($i),gen:0,heap:new Int32Array($i+1),heapF:new Float32Array($i+1)}}var Fr=(n,e)=>n<0||e<0||n>=_n||e>=Gs?-1:e*_n+n;function z0(n,e,t,i){let s=n.deploys.get(et(e,t));return s?s.type==="cupboard"?s.owner!==i:!0:!1}function da(n,e,t,i){let s=Fr(e,t);return!(s<0||n.nav.terrain[s]||n.walls.has("D,"+e+","+t)||z0(n,e,t,i)||n.nav.fenceCells&&n.nav.fenceCells.has(s))}function th(n,e,t,i,s,r){let o;i>e?o=Oe("V",i,t):i<e?o=Oe("V",e,t):s>t?o=Oe("H",e,s):o=Oe("H",e,t);let a=n.walls.get(o);return!a||a.hp<=0?0:a.type==="door"&&(a.open||a.lock&&a.lock.by===r)?1:2}function Ci(n,e,t,i,s,r){if(!da(n,i,s,r))return-1;let o=th(n,e,t,i,s,r);return o===2?-1:o}function V0(n,e,t){let i=n.nav.cost[e],s=n.nav.penalty.get(e);return s!==void 0&&(s>t?i+=6:n.nav.penalty.delete(e)),i}function fa(n,e,t,i=12){let s=Fr(Math.floor(e/64),Math.floor(t/64));s>=0&&n.nav.penalty.set(s,n.t+i)}var Ws=256,ha=Math.ceil(xe.w/Ws),Af=Math.ceil(xe.h/Ws);function G0(n){let e=n.nav;if(e.maskStamp===e.stamp&&e.mask)return e.mask;let t=e.mask&&e.maskStamp!==void 0?e.mask.fill(0):new Uint8Array(ha*Af),i=(s,r)=>{let o=s/Ws|0,a=r/Ws|0;for(let l=-1;l<=1;l++)for(let c=-1;c<=1;c++){let d=(a+l)*ha+(o+c);o+c>=0&&a+l>=0&&o+c<ha&&a+l<Af&&(t[d]=1)}};for(let s of n.walls.keys()){let r=s.split(",");i(+r[1]*64,+r[2]*64)}for(let s of n.deploys.keys()){let r=s.split(",");i(+r[0]*64,+r[1]*64)}for(let s of n.fences)i(s.x,s.y);return e.mask=t,e.maskStamp=e.stamp,t}function Pf(n,e,t){let i=G0(n),s=(t/Ws|0)*ha+(e/Ws|0);return i[s]===1}function Df(n){let e=new Set;for(let t of n.fences)e.add(Fr(Math.floor(t.x/64),Math.floor(t.y/64)));n.nav.fenceCells=e,n.nav.stamp++}function Rf(n,e,t,i){if(da(n,e,t,i))return{gx:e,gy:t};for(let s=1;s<=8;s++)for(let r=-s;r<=s;r++)for(let o=-s;o<=s;o++)if(Math.max(Math.abs(o),Math.abs(r))===s&&da(n,e+o,t+r,i))return{gx:e+o,gy:t+r};return null}function Cf(n,e,t){let i=++n.heapN,s=n.heap,r=n.heapF;for(;i>1;){let o=i>>1;if(r[o]<=t)break;s[i]=s[o],r[i]=r[o],i=o}s[i]=e,r[i]=t}function W0(n){let e=n.heap,t=n.heapF,i=e[1],s=e[n.heapN],r=t[n.heapN--],o=1;for(;;){let a=o<<1;if(a>n.heapN||(a+1<=n.heapN&&t[a+1]<t[a]&&a++,t[a]>=r))break;e[o]=e[a],t[o]=t[a],o=a}return e[o]=s,t[o]=r,i}var Sf=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];function Lf(n,e,t,i,s,r,o){let a=n.nav,l=st(Math.floor(t/64),0,_n-1),c=st(Math.floor(i/64),0,Gs-1),d=st(Math.floor(s/64),0,_n-1),h=st(Math.floor(r/64),0,Gs-1),f=Rf(n,l,c,e);if(!f)return null;let u=Rf(n,d,h,e);if(!u)return null;if(l=f.gx,c=f.gy,d=u.gx,h=u.gy,l===d&&c===h)return[{x:s,y:r}];let p=++a.gen;a.heapN=0;let x=c*_n+l,m=h*_n+d;a.vis[x]=p,a.g[x]=0,a.came[x]=-1,Cf(a,x,0);let g=Math.max(Math.abs(d-l),Math.abs(h-c)),y=o||Math.min(26e3,3e3+g*90),v=0,w=!1;for(;a.heapN>0&&v++<y;){let S=W0(a);if(S===m){w=!0;break}let R=S%_n,L=S/_n|0,W=a.g[S];for(let X=0;X<8;X++){let N=Sf[X][0],B=Sf[X][1],Y=R+N,ce=L+B,pe=Fr(Y,ce);if(pe<0)continue;let Ee=0;if(X<4){let F=Ci(n,R,L,Y,ce,e);if(F<0)continue;F===1&&(Ee=2)}else if(Ci(n,R,L,R+N,L,e)!==0||Ci(n,R,L,R,L+B,e)!==0||Ci(n,R+N,L,Y,ce,e)!==0||Ci(n,R,L+B,Y,ce,e)!==0)continue;let De=(X<4?1:1.41421)*V0(n,pe,n.t)+Ee,He=W+De;if(a.vis[pe]===p&&a.g[pe]<=He)continue;a.vis[pe]=p,a.g[pe]=He,a.came[pe]=S;let Qe=Math.abs(Y-d),se=Math.abs(ce-h),re=(Math.max(Qe,se)+.41421*Math.min(Qe,se))*.85;Cf(a,pe,He+re)}}if(!w)return null;let E=[],T=m;for(;T!==-1;)E.push(T),T=a.came[T];E.reverse();let P=[];for(let S=0;S<E.length;S++){let R=E[S]%_n,L=E[S]/_n|0,W=!1;if(S>0){let X=E[S-1]%_n,N=E[S-1]/_n|0;Math.abs(R-X)+Math.abs(L-N)===1&&(W=th(n,X,N,R,L,e)===1)}P.push({x:R*64+64/2,y:L*64+64/2,door:W})}P[P.length-1]={x:s,y:r,door:P[P.length-1].door};let _=[P[0]],M=0;for(let S=1;S<P.length;S++)if(P[S].door||S===P.length-1){let R=M;for(;R<S;){let L=R+1;for(let W=S;W>R;W--)if(!(P[W].door&&W!==S)&&kr(n,e,P[R].x,P[R].y,P[W].x,P[W].y)){L=W;break}_.push(P[L]),R=L}M=S}return _.length>1&&!_[0].door&&kr(n,e,t,i,_[1].x,_[1].y)&&_.shift(),_}function kr(n,e,t,i,s,r){let o=Math.hypot(s-t,r-i),a=Math.max(1,Math.ceil(o/(64*.4))),l=Math.floor(t/64),c=Math.floor(i/64);for(let d=1;d<=a;d++){let h=d/a,f=t+(s-t)*h,u=i+(r-i)*h,p=Math.floor(f/64),x=Math.floor(u/64);if(!(p===l&&x===c)){if(!da(n,p,x,e))return!1;if(p!==l&&x!==c){if(Ci(n,l,c,p,c,e)!==0||Ci(n,p,c,p,x,e)!==0||Ci(n,l,c,l,x,e)!==0||Ci(n,l,x,p,x,e)!==0)return!1}else if(th(n,l,c,p,x,e)!==0)return!1;l=p,c=x}}return!0}function Nf(n,e,t,i,s){let r=Math.hypot(i-e,s-t),o=Math.max(1,Math.ceil(r/(64*.5)));for(let a=1;a<=o;a++){let l=a/o,c=Fr(Math.floor((e+(i-e)*l)/64),Math.floor((t+(s-t)*l)/64));if(c<0||n.nav.terrain[c])return!1}return!0}function nh(n){let e={seed:n>>>0,rng:bf(n),t:0,tick:0,resources:[],barrels:[],loot:[],bullets:[],rockets:[],grenades:[],satchels:[],fences:[],fires:[],wrecks:[],animals:[],guards:[],dummies:[],structures:new Map,walls:new Map,deploys:new Map,units:[],teams:[],transports:[],trains:[],convoys:[],airdrop:null,plane:null,airdropT:150,signal:null,patrol:null,patrolT:0,lockedCrate:null,crateT:0,quarry:null,trainT:0,convoyT:0,clouds:null,fogBanks:null,fireflies:null,footprints:[],weather:{mode:"clear",timer:28,rain:0,boltT:0,flash:0,fog:0,fogTimer:18,fogOn:!1},wind:0,player:{x:xe.w/2,y:xe.h/2+260,vx:0,vy:0,angle:0,walk:200,run:340,recoil:0,health:100,maxhp:100,hurt:0,regenDelay:0,dead:!1,deadT:0,invuln:0,moving:!1,inCopter:!1,facemask:0,bodyArmor:0,rifleLaser:!1,poison:0,swing:0,gatherCd:0,lastHitBy:null},inv:{wood:1e4,stone:1e4,metal:1e4,scrap:0,hqm:0,fence:10,grenade:3,signal:0},owned:{pistol:!0,rifle:!1,minigun:!1,rocket:!1,sniper:!1,shotgun:!1,hmg:!1},weapons:X0(),slot:0,buildMode:!1,buildPiece:"wall",buildRot:0,jackhammer:!1,ghost:!0,copter:null,playerKills:0,deathMark:null,bounty:null,raids:[],elims:[],raidAlarm:null,breachT:{},shake:0,aggressor:-1,aggressorOwner:null,aggroT:0,roleT:0,aliveBases:0,dbSweepT:0,events:[],muzzle:null,blasts:[],scorch:[],flashes:[],floats:[],particles:[],cmd:{mx:0,my:0,fire:!1,fireHeld:!1,up:!1,down:!1,left:!1,right:!1,run:!1},metrics:{hardUnstick:0,wallPhase:0,stuckTotal:0,maxStuck:0,repaths:0,pathFails:0,act:{},raidsLaunched:0,tcKilled:0,elims:0,winner:null,decisiveT:null,workerLog:[],stuckLog:[],regionStuck:{base:0,lake:0,monument:0,open:0}}};return Ef(e),If(e),q0(e),e.trainT=e.rng.rand(20,60),e.patrolT=e.rng.rand(180,280),e.crateT=e.rng.rand(100,180),e.convoyT=e.rng.rand(120,200),e}function X0(){let n={};for(let e in ln){let t=ln[e];n[e]={ammo:t.magSize,reserve:t.reserve,reloading:0,cd:0,spin:0}}return n}function q0(n){let e=n.rng,t=[{x:n.world.shop.x,y:n.world.shop.y,r:Tt+500},{x:n.player.x,y:n.player.y,r:700},...n.world.monuments.map(i=>({x:i.x,y:i.y,r:Tt+320}))];for(let i=0;i<xt.TEAM_COUNT;i++){let s=null;for(let d=0;d<120&&!s;d++){let h=e.rand(1400,xe.w-1400),f=e.rand(1400,xe.h-1400);n.world.landFactor(h,f)<.12||n.world.lakeAt(h,f)||n.world.lakes.some(u=>te(h,f,u.x,u.y)<u.r+560)||n.world.railDist(h,f)<400||n.world.pathDist(h,f)<340||t.some(u=>te(h,f,u.x,u.y)<u.r)||(s={x:h,y:f})}if(!s)continue;t.push({x:s.x,y:s.y,r:qi});let r=e.next(),o=r<.25,a=r>=.75,l={id:i,owner:"e"+i,col:xt.COLS[i%xt.COLS.length],hard:o,weak:a,role:["raider","turtle","nomad"][i%3],shotgun:e.chance(.3),eliminated:!1,bases:[],brain:{sealed:!0,decaying:!1,ready:!1,attack:!1,attackers:0,urgent:!1,aggressor:!1,raidTarget:null,raidPhase:null,breachKey:null,breachT:0,buildHoldT:0,builderId:null,lootCd:0,qCd:0,sigCd:0,statusT:e.rand(0,.5),stage:null,stageT:0}};n.teams.push(l);let c=Or(n,l,s.x,s.y,!0);c.inv={wood:120,stone:30,metal:10},c.unfounded=!0,c.siteX=s.x,c.siteY=s.y,c.copter={x:s.x-256,y:s.y,angle:0,rotor:0,spin:0,vx:0,vy:0,hp:160,max:160,destroyed:!1};for(let d=0;d<3;d++){let h=Or(n,l,s.x+e.rand(-46,46),s.y+e.rand(24,64),!1);h.unfounded=!0,h.siteX=s.x,h.siteY=s.y}}}function Or(n,e,t,i,s){let r=n.rng,o={id:e.id,owner:e.owner,col:e.col,primary:!!s,worker:!s,ally:!1,hard:e.hard,weak:e.weak,shotgun:e.shotgun,role:e.role,x:t,y:i,vx:0,vy:0,angle:r.rand(0,Math.PI*2),hx:t,hy:i,tcKey:null,doorX:t,doorY:i+64,doorGy:Math.floor(i/64)+1,hp:100,max:100,dead:!1,respawnT:0,eliminated:!1,regenT:0,lastHitBy:null,inv:{wood:0,stone:0,metal:0},scrap:0,rockets:0,satchels:0,grenades:0,hqm:0,gun:"pistol",rifleLaser:!1,facemask:e.hard?1:0,bodyArmor:e.hard?2:0,jack:!1,kills:0,state:"gather",act:"gather",unfounded:!1,siteX:0,siteY:0,think:r.rand(0,1),gunCd:0,rkCd:0,gnCd:0,fenceCd:0,expandT:r.rand(3,9),retaliateT:0,threatX:0,threatY:0,disengageT:0,defendT:0,defHold:0,defTgt:null,retreat:!1,raid:null,wasRaid:!1,raidCd:0,raidBias:r.next(),raidUrge:0,defDuty:!1,buildDuty:!1,rocketer:!1,lootRun:null,qRun:null,monRun:!1,monRunT:0,monCd:0,monStay:0,tgtNode:null,skipNode:null,skipT:0,lootTgt:null,lootSkip:null,lootSkipT:0,lane:r.rand(-12,12),hoff:r.rand(-26,26),path:null,pathI:0,pathGX:0,pathGY:0,pathT:0,navStamp:0,repathN:0,noPathT:0,progT:0,progBest:1e9,stuckT:0,baseT:0,idleT:0,aiNetT:0,aiPx:t,aiPy:i,retT:0,maintT:-10,hireT:0,stT:0,expT:r.rand(40,80),fwdT:0,endgame:!1,copter:null,flying:!1,aboard:null,tradeDone:!1,parkChk:0,gathering:!1,swing:0,hf:!1,strafeT:0,strafeS:1,backoff:!1,tickPhase:n.units.length%9};return n.units.push(o),o}function Uf(n){let e=n.rng,t=n.world.shop,i=Y0(n),r=Or(n,{id:-1,owner:Ke,col:"#7ec850",hard:!1,weak:!1,shotgun:!1,role:"raider"},t.x+e.rand(-60,60),t.y+(t.r||120)+40,!1);return r.ally=!0,r.gun="rifle",r.col="#7ec850",r.raidUrge=e.rand(12,24),r.facemask=0,r.bodyArmor=0,i?(r.hx=i.hx,r.hy=i.hy,r.tcKey=i.tcKey):(r.hx=n.player.x,r.hy=n.player.y),r.doorX=r.hx,r.doorY=r.hy+64,r.doorGy=Math.floor(r.hy/64)+1,r}function Y0(n){for(let[e,t]of n.deploys)if(t.type==="cupboard"&&t.owner===Ke){let[i,s]=e.split(",").map(Number);return{owner:Ke,tcKey:e,hx:i*64+64/2,hy:s*64+64/2,isPlayer:!0}}return null}var kf=(n,e)=>n.teams.find(t=>t.owner===e)||null;function Xe(n,e,t,i,s){let r=0,o=n.floats[n.floats.length-1];o&&n.t-o.born<1&&Math.abs(o.ox-e)<60&&Math.abs(o.oy-t)<44&&(r=o.lift+15),n.floats.push({x:e,y:t-r,ox:e,oy:t,lift:r,text:i,col:s||"#e8e2cf",vy:-26,life:.9,max:.9,born:n.t}),n.floats.length>90&&n.floats.shift()}function pt(n,e,t,i,s,r){for(let o=0;o<s;o++){let a=n.rng.rand(0,Math.PI*2),l=n.rng.rand(.3*r,r);n.particles.push({x:e,y:t,vx:Math.cos(a)*l,vy:Math.sin(a)*l,life:n.rng.rand(.25,.6),max:.6,r:n.rng.rand(1.5,3.5),col:i})}n.particles.length>900&&n.particles.splice(0,n.particles.length-900)}function Rt(n,e,t,i,s,r){let o=n.rng.rand(0,Math.PI*2),a=n.rng.rand(40,90);n.loot.push({x:e,y:t,vx:Math.cos(o)*a,vy:Math.sin(o)*a,kind:i,amt:s,gun:r||null,life:0,bob:n.rng.rand(0,Math.PI*2)})}function cn(n,e,t,i,s){if(s<=0)return;let r=Math.min(12,Math.max(1,Math.ceil(s/50))),o=s;for(let a=0;a<r;a++){let l=Math.min(o,Math.ceil(s/r));if(l<=0)break;Rt(n,e+n.rng.rand(-14,14),t+n.rng.rand(-14,14),i,l),o-=l}}function Ff(n,e,t,i){if(i.store)for(let s of["wood","stone","metal"])cn(n,e,t,s,i.store[s]|0),i.store[s]=0}function Of(n,e,t,i){let s=n.raids.find(r=>r.id===i);if(s){s.x=e,s.y=t,s.t=60;return}n.raids.push({x:e,y:t,id:i,t:60}),n.raids.length>40&&n.raids.shift()}function ua(n,e){if(!e)return;if(e===Ke){n.playerKills++,n.inv.scrap+=12;return}let t=n.units.find(i=>i.owner===e&&i.primary&&!i.eliminated)||n.units.find(i=>i.owner===e&&!i.eliminated);t&&(t.kills++,t.scrap+=12)}function Ft(n,e){let t=n.split(","),i=+t[1],s=+t[2];return t[0]==="V"?[i*64,s*64,i*64,(s+1)*64]:t[0]==="H"?[i*64,s*64,(i+1)*64,s*64]:e&&e.rot===1?[i*64,(s+1)*64,(i+1)*64,s*64]:[i*64,s*64,(i+1)*64,(s+1)*64]}var ih=(n,e)=>[Oe("V",n,e),Oe("V",n+1,e),Oe("H",n,e),Oe("H",n,e+1),Oe("D",n,e)];function sh(n,e,t,i,s){let r=Math.floor((e-i)/64),o=Math.floor((e+i)/64),a=Math.floor((t-i)/64),l=Math.floor((t+i)/64);for(let c=a;c<=l;c++)for(let d=r;d<=o;d++)for(let h of ih(d,c)){let f=n.walls.get(h);if(f&&f.hp>0&&s(h,f)===!0)return!0}return!1}function Br(n,e,t,i){let s=n.deploys.get(et(Math.floor(e/64),Math.floor(t/64)));return!s||i&&s.type==="cupboard"&&s.owner===i?!1:s.type==="turret"||s.type==="cupboard"||s.type==="box"}function Z0(n,e,t,i,s){if(Br(n,e,t,s))return!0;for(let r=0;r<8;r++){let o=r/8*Math.PI*2;if(Br(n,e+Math.cos(o)*i,t+Math.sin(o)*i,s))return!0}return!1}function rh(n,e,t,i){for(let s of n.world.boulders)if(_e(e,t,s.x,s.y)<(i+s.r)*(i+s.r))return!0;return!1}function Hr(n,e,t){for(let i of n.world.boulders)if(_e(e,t,i.x,i.y)<(i.r+12)*(i.r+12))return i;return null}function ai(n,e,t,i,s){for(let r of n.world.boulders)if(At(r.x,r.y,e,t,i,s)<r.r)return!0;return!1}function $0(n,e,t,i){for(let s of n.fences)if(!(s.hp<=0)&&At(e,t,s.x0,s.y0,s.x1,s.y1)<i+4)return s;return null}function Et(n,e,t,i,s={}){if(!n.world.onLand(e,t)||rh(n,e,t,i))return!0;if(!Pf(n,e,t))return!1;if(Z0(n,e,t,i,s.passOwner)||$0(n,e,t,i))return!0;let r=!1;return sh(n,e,t,i+8,(o,a)=>{if(a.type==="door"&&a.open)return!1;if(a.type==="door"&&s.openOwnDoors&&a.lock&&a.lock.by===s.passOwner)return a.open=!0,a.closeT=n.t+1,n.nav.stamp++,!1;let l=Ft(o,a);if(At(e,t,l[0],l[1],l[2],l[3])<i+4)return r=!0,!0}),r}function zt(n,e,t,i,s){let r=Math.min(e,i)-64,o=Math.max(e,i)+64,a=Math.min(t,s)-64,l=Math.max(t,s)+64,c=Math.floor(r/64),d=Math.floor(o/64),h=Math.floor(a/64),f=Math.floor(l/64),u=Math.hypot(i-e,s-t);if(u>192){let p=Math.ceil(u/(64*.5)),x=new Set;for(let m=0;m<=p;m++){let g=m/p,y=Math.floor((e+(i-e)*g)/64),v=Math.floor((t+(s-t)*g)/64),w=y*10007+v;if(!x.has(w)){x.add(w);for(let E of ih(y,v)){let T=n.walls.get(E);if(!T||T.hp<=0||T.type==="door"&&T.open)continue;let P=Ft(E,T);if(oi(e,t,i,s,P[0],P[1],P[2],P[3]))return!0}}}return!1}for(let p=h;p<=f;p++)for(let x=c;x<=d;x++)for(let m of ih(x,p)){let g=n.walls.get(m);if(!g||g.hp<=0||g.type==="door"&&g.open)continue;let y=Ft(m,g);if(oi(e,t,i,s,y[0],y[1],y[2],y[3]))return!0}return!1}function bt(n,e,t){return _e(e,t,n.world.shop.x,n.world.shop.y)<Tt*Tt}function Xs(n,e,t){for(let i of n.world.monuments)if(_e(e,t,i.x,i.y)<Jc*Jc)return i;return null}function pa(n,e,t){return At(n,e,t.px,t.py,t.x,t.y)<xf}var ht=(n,e)=>({x:n*64+64/2,y:e*64+64/2});function K0(n,e,t,i){let s=null,r=Ht*Ht;for(let[o,a]of n.deploys){if(a.type!=="cupboard"||i&&a.owner!==i)continue;let[l,c]=o.split(",").map(Number),d=ht(l,c),h=_e(e,t,d.x,d.y);h<r&&(r=h,s={key:o,d:a,x:d.x,y:d.y})}return s}function En(n,e){let t=n.deploys.get(e);return t&&t.type==="cupboard"?t:null}var Cn={has(n,e){for(let t in e){let i=0;for(let s of n)i+=s[t]||0;if(i<e[t])return!1}return!0},pay(n,e){if(!Cn.has(n,e))return!1;for(let t in e){let i=e[t];for(let s of n){let r=Math.min(i,s[t]||0);if(s[t]=(s[t]||0)-r,i-=r,i<=0)break}}return!0}};function J0(n,e,t,i){let s=t,r=t,o=i,a=i,l=!1;for(let[c,d]of n.structures){if(d.owner!==e)continue;let[h,f]=c.split(",").map(Number);Math.abs(h-t)*64>Ht||Math.abs(f-i)*64>Ht||(l=!0,s=Math.min(s,h),r=Math.max(r,h),o=Math.min(o,f),a=Math.max(a,f))}return l?r-s+1>$c||a-o+1>$c:!1}function Bf(n,e){let t=e.split(","),i=+t[1],s=+t[2];return t[0]==="V"?n.structures.has(et(i-1,s))||n.structures.has(et(i,s)):n.structures.has(et(i,s-1))||n.structures.has(et(i,s))}function oh(n,e,t,i){let s=Qt[t];if(!s)return!1;if(s.cat==="cell"){let{gx:r,gy:o}=i,a=ht(r,o);if(r<1||o<1||a.x>13760||a.y>9152||bt(n,a.x,a.y)||Xs(n,a.x,a.y)||Hr(n,a.x,a.y)||!n.world.onLand(a.x,a.y)||n.world.lakeAt(a.x,a.y))return!1;if(s.found)return!(n.structures.has(et(r,o))||n.deploys.has(et(r,o))||J0(n,e,r,o)||j0(n,r,o));if(n.deploys.has(et(r,o))||(s.tc||s.box)&&!n.structures.has(et(r,o)))return!1;if(s.tc){if(e===Ke&&[...n.deploys.values()].some(l=>l.type==="cupboard"&&l.owner===Ke))return!1;for(let[l,c]of n.deploys){if(c.type!=="cupboard")continue;let[d,h]=l.split(",").map(Number),f=ht(d,h);if(te(a.x,a.y,f.x,f.y)<qi)return!1}}return!(s.turret&&!K0(n,a.x,a.y,e))}if(s.cat==="edge"){let r=i.key;if(n.walls.has(r)||!Bf(n,r))return!1;let a=Ft(r,{type:t}),l=(a[0]+a[2])/2,c=(a[1]+a[3])/2;return!(bt(n,l,c)||Xs(n,l,c))}if(s.cat==="diag"){let r=i.key;if(n.walls.has(r))return!1;let o=r.split(",");return!!n.structures.has(et(+o[1],+o[2]))}return!1}function j0(n,e,t){let i=ht(e,t),s=r=>r&&!r.destroyed&&Math.abs(r.x-i.x)<38&&Math.abs(r.y-i.y)<38;if(s(n.copter))return!0;for(let r of n.units)if(s(r.copter))return!0;return!1}function Hf(n,e,t,i,s,r={}){let o=Qt[t];if(!oh(n,e,t,i)||s&&!Cn.pay(s,o.cost))return null;let a=r.mat||"wood",l=Ei(o,a),c;return o.cat==="cell"&&o.found?(c={type:t,mat:a,hp:l,max:l,owner:e,hitT:-100,rot:(r.rot||0)&3},n.structures.set(et(i.gx,i.gy),c)):o.cat==="cell"?(c={type:t,mat:"wood",hp:o.hp,max:o.hp,owner:e,hitT:-100},o.store&&(c.store={wood:0,stone:0,metal:0,scrap:0}),o.turret&&(c.tier=r.tier||1,c.angle=0,c.cd=0,c.mag=12,c.reload=0,c.ext=!!r.ext,c.scanT=n.rng.rand(.5,4.5)),(o.tc||o.box||o.door)&&(c.lock={by:e}),n.deploys.set(et(i.gx,i.gy),c)):(c={type:t,mat:a,hp:Ei(o,a),max:Ei(o,a),owner:e,hitT:-100,open:!1,rot:(r.rot||0)&1},o.door&&(c.lock={by:e}),n.walls.set(i.key,c)),n.nav.stamp++,c}function zf(n,e,t,i){let s=uf[e.mat];return!s||!t.up||i&&!Cn.pay(i,s.cost)?!1:(e.mat=s.to,e.max=Ei(t,e.mat),e.hp=e.max,!0)}function qs(n,e,t,i){let s=n.walls.get(e);if(!s||s.hp<=0)return!1;if(s.hp-=t,s.hitT=n.t,s.hp<=0){let r=Ft(e,s);return pt(n,(r[0]+r[2])/2,(r[1]+r[3])/2,"#8a7a5c",10,160),n.walls.delete(e),n.breachT[e]=n.t,n.nav.stamp++,n.events.push({type:"wallDown",x:(r[0]+r[2])/2,y:(r[1]+r[3])/2}),!0}return!1}function zr(n,e,t){let i=n.structures.get(e);return i?(i.hp-=t,i.hitT=n.t,i.hp<=0?(n.structures.delete(e),n.breachT[e]=n.t,ma(n,e),n.nav.stamp++,!0):!1):!1}function _s(n,e,t,i){let s=n.deploys.get(e);return s?(s.hp-=t,s.hitT=n.t,s.hp<=0?(ah(n,e,s,i),!0):!1):!1}function ah(n,e,t,i){let[s,r]=e.split(",").map(Number),o=ht(s,r);if(Ff(n,o.x,o.y,t),n.deploys.delete(e),n.nav.stamp++,pt(n,o.x,o.y,"#caa24a",14,220),t.type==="cupboard"){if(Xe(n,o.x,o.y,"TC destroyed!","#ff7a4a"),n.metrics.tcKilled++,t.owner===Ke)for(let l of["wood","stone","metal"])n.inv[l]>0;lh(n,t.owner,o.x,o.y);let a=kf(n,t.owner);if(a){let l=a.bases.find(c=>c.tcKey===e);l&&(l.dead=!0)}}}function lh(n,e,t,i){for(let[s,r]of[...n.walls]){if(r.owner!==e)continue;let o=Ft(s,r);te((o[0]+o[2])/2,(o[1]+o[3])/2,t,i)<560&&n.walls.delete(s)}for(let[s,r]of[...n.structures]){if(r.owner!==e)continue;let[o,a]=s.split(",").map(Number),l=ht(o,a);te(l.x,l.y,t,i)<560&&(n.structures.delete(s),pt(n,l.x,l.y,"#6b5a40",3,120))}for(let[s,r]of[...n.deploys]){if(r.owner!==e||r.type==="cupboard")continue;let[o,a]=s.split(",").map(Number),l=ht(o,a);te(l.x,l.y,t,i)<560&&n.deploys.delete(s)}n.nav.stamp++}function ma(n,e){let[t,i]=e.split(",").map(Number);for(let s of[Oe("D",t,i)])n.walls.delete(s);for(let s of[Oe("V",t,i),Oe("V",t+1,i),Oe("H",t,i),Oe("H",t,i+1)])n.walls.has(s)&&!Bf(n,s)&&n.walls.delete(s)}function Q0(n,e,t){let i={};for(let s in n.cost)i[s]=Math.max(1,Math.ceil(n.cost[s]*t));return(e.mat==="stone"||e.mat==="metal")&&(i.stone=(i.stone||0)+Math.ceil(15*t)),e.mat==="metal"&&(i.metal=(i.metal||0)+Math.ceil(20*t)),i}function Vf(n,e,t,i,s=oa){if(e.hp>=e.max||n.t-e.hitT<s)return!1;let r=Math.min(e.max-e.hp,e.max*.2),o=r/e.max;return Cn.pay(i,Q0(t,e,o))?(e.hp+=r,!0):!1}function Gf(n,e){if(n.decayT=(n.decayT||0)+e,n.decayT<.5)return;let t=n.decayT;n.decayT=0;let i=[];for(let[r,o]of n.deploys){if(o.type!=="cupboard")continue;let[a,l]=r.split(",").map(Number);i.push({key:r,d:o,...ht(a,l),n:0})}let s=(r,o,a)=>{let l=r.split(","),c=+l[l.length-2],d=+l[l.length-1],h=ht(c,d),f=null,u=Ht*Ht;for(let p of i){let x=_e(h.x,h.y,p.x,p.y);x<u&&(u=x,f=p)}if(f){if(f.n++,f.d.store.wood+f.d.store.stone+f.d.store.metal>0)return;let x=Math.sqrt(u)/Ht,m=Kc+(gf-Kc)*x;o.hp-=o.max*(t/m)}else o.hp-=o.max*(t/mf);o.hp<=0&&(a?(n.walls.delete(r),n.nav.stamp++):(n.structures.delete(r),ma(n,r),n.nav.stamp++))};for(let[r,o]of[...n.walls])s(r,o,!0);for(let[r,o]of[...n.structures])s(r,o,!1);for(let r of i){let o=r.n*Lr*t;for(let a of["wood","stone","metal"]){if(o<=0)break;let l=Math.min(o,r.d.store[a]);r.d.store[a]-=l,o-=l}}}function ga(n,e,t,i){let s=Math.floor(t/64),r=Math.floor(i/64),o=e.owner;for(let p=0;p<3;p++)for(let x=0;x<3;x++)n.structures.set(et(s+x,r+p),{type:"floor",mat:"wood",hp:100,max:100,owner:o,hitT:-100});let a=p=>n.walls.set(p,{type:"wall",mat:"wood",hp:100,max:100,owner:o,hitT:-100,open:!1}),l=p=>n.walls.set(p,{type:"door",mat:"wood",hp:50,max:50,owner:o,hitT:-100,open:!1,lock:{by:o}});for(let p=0;p<3;p++)a(Oe("H",s+p,r));a(Oe("H",s,r+3)),a(Oe("H",s+2,r+3)),l(Oe("H",s+1,r+3));for(let p=0;p<3;p++)a(Oe("V",s,r+p)),a(Oe("V",s+3,r+p));let c=s+1,d=r+1;l(Oe("H",c,d)),a(Oe("V",c,d)),a(Oe("V",c+1,d)),l(Oe("H",c,d+1));let h=et(c,d);if(n.deploys.set(h,{type:"cupboard",mat:"wood",hp:300,max:300,owner:o,hitT:-100,lock:{by:o},store:{wood:200+n.rng.randi(20,70),stone:0,metal:n.rng.randi(0,40),scrap:0}}),n.deploys.set(et(s+2,r),{type:"turret",mat:"wood",hp:150,max:150,owner:o,hitT:-100,tier:e.hard?3:e.weak?1:2,angle:0,cd:0,mag:12,reload:0,ext:!1,scanT:n.rng.rand(.5,4.5)}),e.hard)for(let[,p]of n.walls)p.owner===o&&p.mat==="wood"&&(p.mat="metal",p.max=Ei(Qt[p.type],"metal"),p.hp=p.max);let f=ht(c,d),u={owner:o,tcKey:h,hx:f.x,hy:f.y,doorX:(s+1)*64+64/2,doorY:(r+3)*64,doorGy:r+3,kind:"home",dead:!1,cleared:!1};return e.bases.push(u),ch(n,e,u),n.nav.stamp++,u}function xa(n,e,t,i){let s=1e9,r=1e9,o=-1e9,a=-1e9,l=!1;for(let[c,d]of n.structures){if(d.owner!==e)continue;let[h,f]=c.split(",").map(Number),u=ht(h,f);_e(u.x,u.y,t,i)>Ht*Ht||(l=!0,s=Math.min(s,h),o=Math.max(o,h),r=Math.min(r,f),a=Math.max(a,f))}return l?{minx:s,miny:r,maxx:o,maxy:a}:null}function ch(n,e,t){let i=xa(n,e.owner,t.hx,t.hy);if(!i)return;let s=Math.floor((i.minx+i.maxx)/2),r=Math.floor((i.miny+i.maxy)/2),o=[Oe("H",s,i.miny),Oe("H",s,i.maxy+1),Oe("V",i.minx,r),Oe("V",i.maxx+1,r)];for(let a of o){let l=n.walls.get(a);l&&l.owner===e.owner&&l.type==="wall"&&l.hp>0&&(l.type="door",l.lock={by:e.owner},l.open=!1)}n.nav.stamp++}function Vr(n,e,t){let i=e.owner,s=Oe("H",Math.floor(t.doorX/64),t.doorGy);for(let[r,o]of n.structures){if(o.owner!==i)continue;let[a,l]=r.split(",").map(Number),c=ht(a,l);if(_e(c.x,c.y,t.hx,t.hy)>Ht*Ht)continue;let d=[[Oe("V",a,l),et(a-1,l)],[Oe("V",a+1,l),et(a+1,l)],[Oe("H",a,l),et(a,l-1)],[Oe("H",a,l+1),et(a,l+1)]];for(let[h,f]of d){let u=n.structures.get(f);if(u&&u.owner===i||h===s)continue;let p=n.walls.get(h);if(!p||p.hp<=0)return h}}return null}function hh(n,e,t,i){return n.t-(n.breachT[t]||-1e9)<pf||!Cn.pay(i,{wood:40})?!1:(n.walls.set(t,{type:"wall",mat:"wood",hp:100,max:100,owner:e.owner,hitT:-100,open:!1}),n.nav.stamp++,!0)}function ya(n,e,t){let i=null,s=.6;for(let[r,o]of n.walls){if(o.owner!==e.owner||o.type==="door"||o.hp<=0||n.t-o.hitT<oa)continue;let a=Ft(r,o);if(_e((a[0]+a[2])/2,(a[1]+a[3])/2,t.hx,t.hy)>Ht*Ht)continue;let l=o.hp/o.max;l<s&&(s=l,i=r)}return i}function Wf(n,e,t,i){let s=n.walls.get(t);if(!s||n.t-s.hitT<oa)return!1;let r=s.mat==="metal"?{metal:8}:s.mat==="stone"?{stone:8}:{wood:12};return Cn.pay(i,r)?(s.hp=Math.min(s.max,s.hp+s.max*.5),!0):!1}function Ln(n,e){n.bullets.push({x:e.x,y:e.y,px:e.x,py:e.y,vx:Math.cos(e.angle)*e.speed,vy:Math.sin(e.angle)*e.speed,life:e.life,dmg:e.dmg,from:e.from,col:e.col||null,turret:!!e.turret,enemy:e.from!==Ke,bounces:0,ricochet:!1,dist:0})}function Gr(n,e,t,i,s){let r=ln.rocket;n.rockets.push({x:e,y:t,vx:Math.cos(i)*r.speed,vy:Math.sin(i)*r.speed,life:r.range,w:r,smoke:0,from:s}),n.events.push({type:"rocketLaunch",x:e,y:t})}var eg=(n,e,t)=>e*(1-Qc(t?n.player.facemask:n.player.bodyArmor,t?"head":"body")),tg=(n,e,t)=>e*(1-Qc(t?n.facemask:n.bodyArmor,t?"head":"body"));function vs(n,e,t,i,s){let r=n.player;if(!(r.dead||r.invuln>0||n.ghost||bt(n,r.x,r.y))){if(r.health-=e,r.regenDelay=4.5,r.hurt=.28,s&&(r.lastHitBy=s),t!==void 0){let o=Math.max(1,te(t,i,r.x,r.y));r.x+=(r.x-t)/o*7,r.y+=(r.y-i)/o*7}pt(n,r.x,r.y,"#9e2b1e",6,160),r.health<=0&&Wr(n)}}function Wr(n,e){let t=n.player;if(t.dead)return;t.dead=!0,t.deadT=e?4:2.2,n.deathMark={x:t.x,y:t.y},ua(n,t.lastHitBy);for(let a of["wood","stone","metal"])cn(n,t.x,t.y,a,n.inv[a]),n.inv[a]=0;let i=0;for(let a in n.weapons)a!=="rocket"&&(i+=n.weapons[a].ammo+n.weapons[a].reserve,n.weapons[a].ammo=0,n.weapons[a].reserve=0);let s=Math.min(8,Math.ceil(i/30));for(let a=0;a<s;a++)Rt(n,t.x,t.y,"ammo",Math.ceil(i/Math.max(1,s)));let r=n.weapons.rocket,o=Math.min(12,r.ammo+r.reserve);r.ammo=0,r.reserve=0;for(let a=0;a<o;a++)Rt(n,t.x,t.y,"rocket",1);n.events.push({type:"playerDie",x:t.x,y:t.y})}function Ms(n,e,t,i,s,r){e.dead||e.flying||e.eliminated||bt(n,e.x,e.y)||(e.hp-=t,pt(n,e.x,e.y,"#9e2b1e",4,150),e.regenT=4,e.lastHitBy=r||null,i!==void 0&&(e.threatX=i,e.threatY=s,e.retaliateT=2.2),e.hp<=0&&fh(n,e))}function fh(n,e){if(e.dead)return;e.dead=!0,e.respawnT=15,e.flying=!1,e.aboard=null;for(let s of["wood","stone","metal"])cn(n,e.x,e.y,s,e.inv[s]),e.inv[s]=0;let t=Math.min(12,e.rockets);e.rockets=0;for(let s=0;s<t;s++)Rt(n,e.x,e.y,"rocket",1);let i=Math.min(6,e.grenades);e.grenades=0;for(let s=0;s<i;s++)Rt(n,e.x,e.y,"rocket",1);Rt(n,e.x,e.y,"ammo",n.rng.randi(24,60)),e.gun!=="pistol"&&(Rt(n,e.x,e.y,"gun",1,e.gun),e.gun="pistol"),e.scrap>0&&(cn(n,e.x,e.y,"scrap",e.scrap),e.scrap=0),e.id===n.bounty&&e.lastHitBy===Ke&&(n.inv.scrap+=jc,Xe(n,e.x,e.y,"+"+jc+" bounty!","#ffd76b"),n.bounty=null),ua(n,e.lastHitBy),pt(n,e.x,e.y,"#9e2b1e",14,220),Xe(n,e.x,e.y,"down","#e2664a")}function Xf(n,e,t,i){e.dead||(e.hp-=t,pt(n,e.x,e.y,"#9e2b1e",5,140),e.hp<=0&&(e.dead=!0,e.respawnT=82,pt(n,e.x,e.y,"#9e2b1e",20,220),cn(n,e.x,e.y,"scrap",n.rng.randi(4,9)),Rt(n,e.x,e.y,"ammo",n.rng.randi(12,26)),i===Ke?(n.inv.scrap+=8,Xe(n,e.x,e.y,"+8 guard","#ffe07a")):(Xe(n,e.x,e.y,"guard down","#e2664a"),ua(n,i))))}function _a(n,e,t,i,s,r){if(!e.dead){if(e.hp-=t,e.hit=.12,i!==void 0){let o=Math.max(1,te(i,s,e.x,e.y)),a=Math.min(16,t*.4);e.x+=(e.x-i)/o*a,e.y+=(e.y-s)/o*a}if(e.foe=r||e.foe,e.aggro=e.aggro||"hit",Xe(n,e.x,e.y-e.r,"-"+Math.round(t),"#e8b06a"),e.hp<=0){e.dead=!0,e.respawnT=n.rng.rand(11,18),pt(n,e.x,e.y,"#9e2b1e",12,200);let o=ys[e.type];o&&o.loot&&Rt(n,e.x,e.y,o.loot[0],n.rng.randi(o.loot[1],o.loot[2])),Xe(n,e.x,e.y,(o?e.type:"animal")+" down","#caa46a")}}}function qf(n,e,t,i){if(e.hp-=t,e.hp>0){pt(n,e.x,e.y,"#d2664a",3,120);return}pt(n,e.x,e.y,e.crate?"#caa15f":"#d2664a",14,230),e.tier==="mon"?(cn(n,e.x,e.y,"scrap",n.rng.randi(e.crate?22:12,e.crate?42:26)),Rt(n,e.x,e.y,"ammo",n.rng.randi(45,85)),e.respawnT=82):e.tier==="road"?(cn(n,e.x,e.y,"scrap",n.rng.randi(8,16)),Rt(n,e.x,e.y,"ammo",n.rng.randi(16,34)),e.respawnT=22):(cn(n,e.x,e.y,"scrap",n.rng.randi(3,7)),cn(n,e.x,e.y,"metal",n.rng.randi(2,5)),e.respawnT=22),e.hp=0}function ng(n,e){let t=Math.floor(e.x/64),i=Math.floor(e.y/64),s=[Oe("V",t,i),Oe("V",t+1,i),Oe("H",t,i),Oe("H",t,i+1),Oe("D",t,i)];for(let o of s){let a=n.walls.get(o);if(!a||a.hp<=0||a.type==="door"&&a.open)continue;let l=Ft(o,a);if(oi(e.px,e.py,e.x,e.y,l[0],l[1],l[2],l[3])||At(e.x,e.y,l[0],l[1],l[2],l[3])<10)return ig(n,a)!==e.from&&qs(n,o,Math.max(1,Math.round(e.dmg*.1)),e.from),{kind:"wall",key:o,w:a}}let r=n.deploys.get(et(t,i));if(r&&r.owner!==e.from){let o=ht(t,i);if(!zt(n,e.px,e.py,o.x,o.y)){let a=r.type==="cupboard"?.05:.25;_s(n,et(t,i),Math.max(1,Math.round(e.dmg*a)),e.from)}return{kind:"deploy",key:et(t,i),d:r}}return null}var ig=(n,e)=>e.owner;function sg(n,e,t){if(t&&t.kind==="wall"){let i=t.key.split(",");if(i[0]==="V")return{x:1,y:0};if(i[0]==="H")return{x:0,y:1};let s=Ft(t.key,t.w),r=s[2]-s[0],o=s[3]-s[1],a=Math.hypot(r,o);return{x:-o/a,y:r/a}}if(t&&t.cx!==void 0){let i=Math.max(1,te(e.px,e.py,t.cx,t.cy));return{x:(e.px-t.cx)/i,y:(e.py-t.cy)/i}}return{x:0,y:1}}function rg(n,e,t,i){if(e.bounces>=2||!n.rng.chance(i))return!1;let s=sg(n,e,t);s.x*(e.px-e.x)+s.y*(e.py-e.y)<0&&(s.x=-s.x,s.y=-s.y);let r=e.vx*s.x+e.vy*s.y,o=e.vx-2*r*s.x,a=e.vy-2*r*s.y,l=n.rng.rand(-.45,.45),c=Math.cos(l),d=Math.sin(l),h=o*c-a*d,f=o*d+a*c,u=Math.hypot(h,f);return h*s.x+f*s.y>=.05*u&&(o=h,a=f),e.vx=o*.6,e.vy=a*.6,e.x=e.px+s.x*6,e.y=e.py+s.y*6,e.dmg=Math.max(1,Math.round(e.dmg*.6)),e.bounces++,e.ricochet=!0,e.col="ricochet",pt(n,e.x,e.y,"#86d8ff",4,180),!0}function Yf(n,e){let t=n.player;for(let i=n.bullets.length-1;i>=0;i--){let s=n.bullets[i];if(s.px=s.x,s.py=s.y,s.ricochet){let l=Math.pow(.3,e);if(s.vx*=l,s.vy*=l,Math.hypot(s.vx,s.vy)<150){n.bullets.splice(i,1);continue}}if(s.x+=s.vx*e,s.y+=s.vy*e,s.dist+=Math.hypot(s.vx,s.vy)*e,s.life-=e,s.life<=0||s.x<0||s.y<0||s.x>xe.w||s.y>xe.h||s.dist>3400){n.bullets.splice(i,1);continue}let r=!1,o=null;if(sh(n,(s.px+s.x)/2,(s.py+s.y)/2,Math.abs(s.x-s.px)+Math.abs(s.y-s.py)+12,(l,c)=>{if(c.type==="door"&&c.open)return!1;let d=Ft(l,c);if(oi(s.px,s.py,s.x,s.y,d[0],d[1],d[2],d[3]))return o={kind:"wall",key:l,w:c},!0}),!o&&Br(n,s.x,s.y)){let l=Math.floor(s.x/64),c=Math.floor(s.y/64),d=n.deploys.get(et(l,c));if(!(d&&d.type==="turret"&&d.owner===s.from)){let h=ht(l,c);o={kind:"solid",key:et(l,c),d,cx:h.x,cy:h.y}}}let a=null;if(!o){for(let l of n.world.boulders)if(At(l.x,l.y,s.px,s.py,s.x,s.y)<l.r){a={cx:l.x,cy:l.y};break}}if(o||a){o&&ng(n,s),rg(n,s,o||a,a?.8:.15)||(pt(n,s.px,s.py,"#bfb49a",3,110),n.bullets.splice(i,1));continue}for(let l=n.fences.length-1;l>=0;l--){let c=n.fences[l];if(oi(s.px,s.py,s.x,s.y,c.x0,c.y0,c.x1,c.y1)||At(s.x,s.y,c.x0,c.y0,c.x1,c.y1)<5){Zf(n,c,s.dmg),r=!0;break}}if(r){n.bullets.splice(i,1);continue}for(let l of n.barrels)if(!(l.hp<=0)&&_e(s.x,s.y,l.x,l.y)<(l.r+2)*(l.r+2)){qf(n,l,s.dmg,s.from),r=!0;break}if(r){n.bullets.splice(i,1);continue}if(n.patrol&&s.from!=="patrol"&&At(n.patrol.x,n.patrol.y,s.px,s.py,s.x,s.y)<34){n.patrol.hp-=s.dmg,pt(n,s.x,s.y,"#aab1b8",2,120),n.bullets.splice(i,1);continue}if(n.airdrop&&n.airdrop.fall>=1&&At(n.airdrop.x,n.airdrop.y,s.px,s.py,s.x,s.y)<22){n.airdrop.hp-=s.dmg,n.bullets.splice(i,1);continue}for(let l of n.animals)if(!l.dead&&At(l.x,l.y,s.px,s.py,s.x,s.y)<l.r+2){_a(n,l,s.dmg,s.px,s.py,s.from),r=!0;break}if(r){n.bullets.splice(i,1);continue}if(s.from!=="guard"){for(let l of n.guards)if(!l.dead&&At(l.x,l.y,s.px,s.py,s.x,s.y)<qt.r+2){let c=pa(l.x,l.y,s);Xf(n,l,s.dmg*(c?aa:1),s.from),c&&s.from===Ke&&Xe(n,l.x,l.y-14,"headshot","#ffe07a"),r=!0;break}}if(r){n.bullets.splice(i,1);continue}for(let l of n.units)if(!(l.dead||l.flying||l.eliminated||l.owner===s.from)&&At(l.x,l.y,s.px,s.py,s.x,s.y)<14){let c=pa(l.x,l.y,s),d=s.dmg*(c?aa:1);d=tg(l,d,c);let h=s.px,f=s.py;Ms(n,l,d,h,f,s.from),c&&s.from===Ke&&Xe(n,l.x,l.y-14,"headshot","#ffe07a"),r=!0;break}if(r){n.bullets.splice(i,1);continue}for(let l of n.transports)if(!(l.destroyed||l.owner===s.from)&&At(l.x,l.y,s.px,s.py,s.x,s.y)<Zt.r+2){l.hp-=s.dmg,l.hp<=0&&(l.destroyed=!0),r=!0;break}if(r){n.bullets.splice(i,1);continue}for(let l of n.convoys){if(s.from==="convoy")break;if(!l.dead&&At(l.x,l.y,s.px,s.py,s.x,s.y)<26){l.hp-=s.dmg,r=!0;break}for(let c of l.guards)if(!c.dead&&At(c.x,c.y,s.px,s.py,s.x,s.y)<14){c.hp-=s.dmg,c.hp<=0&&(c.dead=!0,Rt(n,c.x,c.y,"ammo",n.rng.randi(6,12))),r=!0;break}if(r)break}if(r){n.bullets.splice(i,1);continue}if(s.from!==Ke&&!t.dead&&!t.inCopter&&!n.ghost&&At(t.x,t.y,s.px,s.py,s.x,s.y)<18){let l=pa(t.x,t.y,s);vs(n,eg(n,s.dmg*(l?aa:1),l),s.px,s.py,s.from),n.bullets.splice(i,1);continue}}}function Zf(n,e,t){e.hp-=t,e.hp<=0?(pt(n,e.x,e.y,"#caa46a",14,200),n.fences.splice(n.fences.indexOf(e),1),n.needFenceRefresh=!0):pt(n,e.x,e.y,"#d8b888",3,120)}function uh(n,e,t,i,s){let r=i.splash,o=i.splashDmg,a=i.structDmg||i.splashDmg;pt(n,e,t,"#ffb24a",22,320),pt(n,e,t,"#5a534a",12,200),n.flashes.push({x:e,y:t,r,life:.25,max:.25}),n.scorch.push({x:e,y:t,r:r*.66}),n.scorch.length>36&&n.scorch.shift(),n.events.push({type:"explosion",x:e,y:t,r}),n.shake=Math.max(n.shake,16);let l=i===ln.rocket||i.structDmg===50;if(l&&s!==Ke){let h=!1;for(let[f,u]of n.structures)if(u.owner===Ke){let[p,x]=f.split(",").map(Number),m=ht(p,x);if(_e(e,t,m.x,m.y)<(r+64)*(r+64)){h=!0;break}}h&&(n.raidAlarm={x:e,y:t,t:1.5})}if(l){let h=og(n,e,t,r+128);h&&h!==s&&Of(n,e,t,"raid_"+h)}for(let[h,f]of[...n.structures]){let[u,p]=h.split(",").map(Number),x=ht(u,p),m=te(e,t,x.x,x.y);m>r+32||f.owner===s||zr(n,h,a*(1-m/(r+32)))}for(let[h,f]of[...n.walls]){if(f.owner===s)continue;let u=Ft(h,f),p=At(e,t,u[0],u[1],u[2],u[3]);p>r||qs(n,h,a*(1-p/r),s)}for(let[h,f]of[...n.deploys]){if(f.owner===s)continue;let[u,p]=h.split(",").map(Number),x=ht(u,p),m=te(e,t,x.x,x.y);m>r+25.6||zt(n,e,t,x.x,x.y)||_s(n,h,o*(1-m/(r+25.6)),s)}for(let h of n.animals){if(h.dead)continue;let f=te(e,t,h.x,h.y);f<r+h.r&&_a(n,h,o*(1-f/(r+h.r)),e,t,s)}for(let h of n.guards){if(h.dead)continue;let f=te(e,t,h.x,h.y);f<r+14&&Xf(n,h,o*(1-f/(r+14)),s)}for(let h of n.convoys){let f=te(e,t,h.x,h.y);!h.dead&&f<r+26&&(h.hp-=o*1.5*(1-f/(r+26)));for(let u of h.guards){if(u.dead)continue;let p=te(e,t,u.x,u.y);p<r+14&&(u.hp-=o*(1-p/(r+14)),u.hp<=0&&(u.dead=!0,Rt(n,u.x,u.y,"ammo",n.rng.randi(6,12))))}}for(let h of n.barrels){if(h.hp<=0)continue;let f=te(e,t,h.x,h.y);f<r+h.r&&qf(n,h,o*(1-f/(r+h.r)),s)}for(let h=n.fences.length-1;h>=0;h--){let f=n.fences[h],u=te(e,t,f.x,f.y);u<r+23&&Zf(n,f,o*(1-u/(r+23)))}let c=n.player;if(!c.dead&&!c.inCopter){let h=te(e,t,c.x,c.y);if(h<r+16){let f=1-h/(r+16);s===Ke?n.ghost||(c.health-=Math.round(o*.45*f),c.regenDelay=4.5,c.hurt=.28,c.health<=0&&Wr(n)):vs(n,Math.round(o*.45*f),e,t,s)}}for(let h of n.units){if(h.dead||h.eliminated||h.owner===s)continue;let f=te(e,t,h.x,h.y);f<r+14&&Ms(n,h,o*.8*(1-f/(r+14)),e,t,s)}let d=(h,f,u)=>{if(!h||h.destroyed||f===s)return;let p=te(e,t,h.x,h.y);p<r+30&&ag(n,h,o*(1-p/(r+30)),u)};d(n.copter,Ke,!0);for(let h of n.units)d(h.copter,h.owner,!1,h);for(let h of n.transports){if(h.destroyed||h.owner===s)continue;let f=te(e,t,h.x,h.y);f<r+Zt.r&&(h.hp-=o*(1-f/(r+Zt.r)),h.hp<=0&&(h.destroyed=!0))}if(i.rocket&&n.rng.chance(.25)&&$f(n,e,t),n.patrol){let h=te(e,t,n.patrol.x,n.patrol.y);h<r+34&&(n.patrol.hp-=o*(1-h/(r+34)))}}function og(n,e,t,i){for(let[s,r]of n.structures){let[o,a]=s.split(",").map(Number),l=ht(o,a);if(_e(e,t,l.x,l.y)<i*i)return r.owner}for(let[s,r]of n.walls){let o=Ft(s,r);if(At(e,t,o[0],o[1],o[2],o[3])<i)return r.owner}return null}function ag(n,e,t,i,s){e.hp-=t,!(e.hp>0||e.destroyed)&&(e.destroyed=!0,ph(n,e.x,e.y),i&&n.player.inCopter&&(n.player.inCopter=!1,n.player.health=0,Wr(n)))}function ph(n,e,t){pt(n,e,t,"#ffb24a",30,340),pt(n,e,t,"#5a534a",18,240),n.flashes.push({x:e,y:t,r:96,life:.25,max:.25}),n.scorch.push({x:e,y:t,r:52}),n.scorch.length>36&&n.scorch.shift(),n.wrecks.push({x:e,y:t,t:15}),n.wrecks.length>24&&n.wrecks.shift(),n.shake=Math.max(n.shake,15),n.events.push({type:"explosion",x:e,y:t,r:96})}function $f(n,e,t){n.fires.length>=80||n.fires.push({x:e,y:t,r:36,life:30,max:30,dmgT:0,spread:0,spreadT:n.rng.rand(3,7)})}function Kf(n,e){for(let t=n.fires.length-1;t>=0;t--){let i=n.fires[t];if(i.life-=e,i.life<=0){n.fires.splice(t,1);continue}if(i.dmgT-=e,i.dmgT<=0){i.dmgT=.3;for(let[r,o]of[...n.structures]){let[a,l]=r.split(",").map(Number),c=ht(a,l);_e(i.x,i.y,c.x,c.y)<i.r*i.r&&zr(n,r,22*.3)}for(let[r,o]of[...n.walls]){let a=Ft(r,o);At(i.x,i.y,a[0],a[1],a[2],a[3])<i.r&&qs(n,r,18*.3,"fire")}let s=n.player;!s.dead&&_e(i.x,i.y,s.x,s.y)<(i.r+16)*(i.r+16)&&vs(n,15*.3,void 0,void 0,"fire");for(let r of n.units)r.dead||r.eliminated||_e(i.x,i.y,r.x,r.y)<(i.r+12)*(i.r+12)&&Ms(n,r,15*.3)}if(i.spreadT-=e,i.spreadT<=0&&i.spread<3&&(i.spreadT=n.rng.rand(4,8),n.rng.chance(.25))){let s=null,r=(i.r+64)*(i.r+64);for(let[o,a]of n.structures){let[l,c]=o.split(",").map(Number),d=ht(l,c),h=_e(i.x,i.y,d.x,d.y);h<r&&!zt(n,i.x,i.y,d.x,d.y)&&(r=h,s=d)}s&&($f(n,s.x,s.y),i.spread++)}n.rng.chance(.3)&&n.particles.push({x:i.x+n.rng.rand(-10,10),y:i.y+n.rng.rand(-10,10),vx:n.wind*8,vy:-n.rng.rand(20,50),life:n.rng.rand(.6,1.4),max:1.4,r:n.rng.rand(2,5),col:"rgba(60,56,50,0.5)"})}}function Jf(n,e){for(let t=n.satchels.length-1;t>=0;t--){let i=n.satchels[t];i.t-=e,i.t<=0&&(n.satchels.splice(t,1),uh(n,i.x,i.y,{splash:88,splashDmg:120,structDmg:50},i.from))}}function jf(n,e){for(let t=n.grenades.length-1;t>=0;t--){let i=n.grenades[t],s=i.x,r=i.y,o=Math.pow(.9,e*60);i.vx*=o,i.vy*=o,i.x=st(i.x+i.vx*e,8,xe.w-8),i.y=st(i.y+i.vy*e,8,xe.h-8),i.bob+=e,i.t-=e,zt(n,s,r,i.x,i.y)&&(i.x=s,i.y=r,i.t=0),i.t<=0&&(n.grenades.splice(t,1),uh(n,i.x,i.y,zs,i.from))}}function Qf(n,e){for(let t=n.rockets.length-1;t>=0;t--){let i=n.rockets[t],s=i.x,r=i.y;i.x+=i.vx*e,i.y+=i.vy*e,i.life-=e,i.smoke-=e,i.smoke<=0&&(i.smoke=.016,n.particles.push({x:i.x,y:i.y,vx:n.rng.rand(-12,12),vy:n.rng.rand(-12,12),life:.5,max:.5,r:n.rng.rand(2,4),col:"rgba(120,114,104,0.5)"}));let o=i.life<=0||i.x<4||i.y<4||i.x>xe.w-4||i.y>xe.h-4;if(!o&&(Br(n,i.x,i.y)||rh(n,i.x,i.y,2))&&(o=!0),!o&&zt(n,s,r,i.x,i.y)&&(o=!0,i.x=s,i.y=r),!o){for(let a of n.animals)if(!a.dead&&_e(i.x,i.y,a.x,a.y)<(a.r+3)*(a.r+3)){o=!0;break}}if(!o){for(let a of n.barrels)if(a.hp>0&&_e(i.x,i.y,a.x,a.y)<(a.r+3)*(a.r+3)){o=!0;break}}if(!o){let a=(l,c)=>l&&!l.destroyed&&c!==i.from&&_e(i.x,i.y,l.x,l.y)<1089;if(a(n.copter,Ke)&&(o=!0),!o){for(let l of n.units)if(a(l.copter,l.owner)){o=!0;break}}}o&&(n.rockets.splice(t,1),uh(n,i.x,i.y,i.w,i.from))}}function eu(n,e){for(let[t,i]of n.deploys){if(i.type!=="turret")continue;let[s,r]=t.split(",").map(Number),o=ht(s,r),a=la[i.tier||1];if(n.tick%30===0&&(i.tcOk=lg(n,i.owner)),i.tcOk===!1)continue;i.cd=Math.max(0,(i.cd||0)-e),i.reload>0&&(i.reload-=e,i.reload<=0&&(i.mag=a.mag)),i.targT=(i.targT||0)-e;let l=i.tgt||null;if(l){let c=l.ref;!c||c.dead||c.flying||c.eliminated||c===n.player&&(n.ghost||c.inCopter)||_e(o.x,o.y,c.x,c.y)>a.range*a.range*1.2?(l=null,i.tgt=null):(l.x=c.x,l.y=c.y,l.vx=c.vx||0,l.vy=c.vy||0)}if(i.targT<=0){i.targT=.12;let c=a.range*a.range;l=null;let d=(f,u,p,x,m)=>{let g=_e(o.x,o.y,f,u);g<c&&!hg(n,i.owner,o.x,o.y,f,u)&&(c=g,l={x:f,y:u,vx:p||0,vy:x||0,ref:m})};for(let f of n.animals)!f.dead&&_e(o.x,o.y,f.x,f.y)<c&&d(f.x,f.y,f.vx,f.vy,f);for(let f of n.units)!f.dead&&!f.flying&&!f.eliminated&&f.owner!==i.owner&&d(f.x,f.y,f.vx,f.vy,f);let h=n.player;i.owner!==Ke&&!h.dead&&!h.inCopter&&!n.ghost&&d(h.x,h.y,h.vx,h.vy,h),i.tgt=l}if(l){let c=te(o.x,o.y,l.x,l.y),d=Math.min(.45,c/a.speed)*a.lead,h=Math.atan2(l.y+l.vy*d-o.y,l.x+l.vx*d-o.x),f=(i.tier===3?16:10)*e;if(i.angle=dh(i.angle,h,f),Math.abs(tu(i.angle,h))<.22&&i.cd<=0&&i.reload<=0)if(i.mag<=0)i.reload=a.reload;else{i.mag--,i.cd=a.rof;let u=i.angle+n.rng.rand(-a.spread,a.spread);Ln(n,{x:o.x+Math.cos(i.angle)*eh,y:o.y+Math.sin(i.angle)*eh,angle:u,speed:a.speed,dmg:a.dmg,from:i.owner,life:a.range/a.speed+.1,turret:!0}),n.events.push({type:"turretFire",x:o.x,y:o.y,a:i.angle})}}else{if(n.tick%18===0||i.trk===void 0){let d=null,h=(a.range*2.2)**2;for(let f of n.units)if(!f.dead&&!f.eliminated&&f.owner!==i.owner){let u=_e(o.x,o.y,f.x,f.y);u<h&&(h=u,d=f)}i.trk=d}let c=i.trk&&!i.trk.dead?i.trk:null;if(c)i.angle=dh(i.angle,Math.atan2(c.y-o.y,c.x-o.x),5*e);else{if(i.scanT-=e,i.scanT<=0){i.scanT=n.rng.rand(2.5,6.5);let d=cg(n,i.owner,o.x,o.y),h=d?Math.atan2(o.y-d.y,o.x-d.x):n.rng.rand(0,Ze);i.scanAim=h+n.rng.rand(-1.1,1.1)}i.scanAim!==void 0&&(i.angle=dh(i.angle,i.scanAim,1.6*e))}}}}function lg(n,e){for(let t of n.deploys.values())if(t.type==="cupboard"&&t.owner===e)return!0;return!1}function cg(n,e,t,i){let s=null,r=1e18;for(let[o,a]of n.deploys){if(a.type!=="cupboard"||a.owner!==e)continue;let[l,c]=o.split(",").map(Number),d=ht(l,c),h=_e(t,i,d.x,d.y);h<r&&(r=h,s=d)}return s}function hg(n,e,t,i,s,r){let o=Math.min(t,s),a=Math.max(t,s),l=!1;return dg(n,t,i,s,r,(c,d)=>{if(d.owner===e||d.type==="door"&&d.open)return!1;let h=Ft(c,d);if(oi(t,i,s,r,h[0],h[1],h[2],h[3]))return l=!0,!0}),l}function dg(n,e,t,i,s,r){let o=Math.hypot(i-e,s-t),a=Math.max(1,Math.ceil(o/(64*.5))),l=new Set;for(let c=0;c<=a;c++){let d=c/a,h=Math.floor((e+(i-e)*d)/64),f=Math.floor((t+(s-t)*d)/64),u=h*10007+f;if(!l.has(u)){l.add(u);for(let p of[Oe("V",h,f),Oe("V",h+1,f),Oe("H",h,f),Oe("H",h,f+1),Oe("D",h,f)]){let x=n.walls.get(p);if(x&&x.hp>0&&r(p,x)===!0)return}}}}var dh=(n,e,t)=>{let i=tu(n,e);return Math.abs(i)<=t?e:n+Math.sign(i)*t},tu=(n,e)=>{let t=(e-n)%Ze;return t>Math.PI&&(t-=Ze),t<-Math.PI&&(t+=Ze),t};function nu(n,e){let t=n.player;for(let i=n.loot.length-1;i>=0;i--){let s=n.loot[i];s.life+=e,s.bob+=e;let r=Math.pow(.88,e*60);if(s.vx*=r,s.vy*=r,s.x+=s.vx*e,s.y+=s.vy*e,!t.dead&&!t.inCopter&&!n.ghost&&s.life>.35){let o=te(t.x,t.y,s.x,s.y);if(o<150&&(s.x+=(t.x-s.x)/o*210*e,s.y+=(t.y-s.y)/o*210*e,o<20)){fg(n,s),n.loot.splice(i,1);continue}}if(s.life>.3){let o=null,a=32400;for(let l of n.units){if(l.dead||l.eliminated||l.flying)continue;let c=_e(l.x,l.y,s.x,s.y);c<a&&(a=c,o=l)}if(o){let l=Math.sqrt(a)||1;if(s.x+=(o.x-s.x)/l*240*e,s.y+=(o.y-s.y)/l*240*e,l<22){ug(n,o,s),n.loot.splice(i,1);continue}}}s.life>120&&n.loot.splice(i,1)}}function fg(n,e){let t=n.weapons,i=n.player;if(e.kind==="ammo")t.rifle.reserve+=e.amt,t.pistol.reserve+=Math.ceil(e.amt*.4),t.shotgun.reserve+=Math.ceil(e.amt*.3),Xe(n,i.x,i.y-20,"+"+e.amt+" ammo","#ffe08a");else if(e.kind==="rocket")t.rocket.reserve+=e.amt,Xe(n,i.x,i.y-20,"+"+e.amt+" rocket","#ff9a5a");else if(e.kind==="satchel")n.inv.scrap+=e.amt*8,Xe(n,i.x,i.y-20,"+"+e.amt*8+" scrap","#d6dce0");else if(e.kind==="sniper")n.owned.sniper=!0,t.sniper.reserve+=12,Xe(n,i.x,i.y-20,"SNIPER unlocked!","#bfe3ff");else if(e.kind==="gun")e.gun&&n.owned[e.gun]!==void 0&&(n.owned[e.gun]=!0,t[e.gun].reserve+=e.gun==="hmg"?60:30,Xe(n,i.x,i.y-20,"+"+e.gun.toUpperCase(),"#bfe3ff"));else{n.inv[e.kind]=(n.inv[e.kind]||0)+e.amt;let s={wood:"#b98446",stone:"#aab1b8",metal:"#e8a24e",scrap:"#d6dce0"};Xe(n,i.x,i.y-20,"+"+e.amt+" "+e.kind,s[e.kind]||"#d8e0c2")}}function ug(n,e,t){if(t.kind==="scrap")e.scrap+=t.amt;else if(t.kind==="rocket")e.rockets+=t.amt;else if(t.kind==="satchel")e.satchels+=t.amt;else if(t.kind==="ammo")e.scrap+=Math.ceil(t.amt/8);else if(t.kind==="sniper")e.scrap+=30;else if(t.kind==="gun"){let i={pistol:1,shotgun:2,rifle:3,hmg:4};(i[t.gun]||0)>(i[e.gun]||0)?e.gun=t.gun:e.scrap+=10}else e.inv[t.kind]=(e.inv[t.kind]||0)+t.amt}function iu(n,e){for(let t=n.wrecks.length-1;t>=0;t--){let i=n.wrecks[t];if(i.t-=e,i.t<=0){n.wrecks.splice(t,1);continue}n.rng.chance(.25)&&n.particles.push({x:i.x+n.rng.rand(-12,12),y:i.y+n.rng.rand(-8,8),vx:n.wind*10,vy:-n.rng.rand(24,60),life:n.rng.rand(.7,1.6),max:1.6,r:n.rng.rand(2.5,6),col:"rgba(50,46,44,0.55)"})}}function su(n,e){let t=n.copter,i=n.player,s=n.cmd;if(!t||t.destroyed){i.inCopter=!1;return}s.left&&(t.angle-=vt.turn*e),s.right&&(t.angle+=vt.turn*e);let r=0;s.up?r=1:s.down&&(r=-.55);let o=s.run?vt.boost:vt.speed;t.vx+=Math.cos(t.angle)*vt.accel*r*e,t.vy+=Math.sin(t.angle)*vt.accel*r*e;let a=Math.pow(r!==0?vt.drag:vt.dragIdle,e);t.vx*=a,t.vy*=a;let l=Math.hypot(t.vx,t.vy);l>o&&(t.vx*=o/l,t.vy*=o/l),t.x+=t.vx*e,t.y+=t.vy*e,t.x<vt.r&&(t.x=vt.r,t.vx*=-.3),t.y<vt.r&&(t.y=vt.r,t.vy*=-.3),t.x>xe.w-vt.r&&(t.x=xe.w-vt.r,t.vx*=-.3),t.y>xe.h-vt.r&&(t.y=xe.h-vt.r,t.vy*=-.3),t.spd=Math.hypot(t.vx,t.vy),t.rotor+=e*(20+t.spd*.05),i.x=t.x,i.y=t.y,i.vx=t.vx,i.vy=t.vy}function ru(n,e,t){let i=n.world.shop,s={owner:e.owner,x:i.x,y:i.y+(i.r||120)+90,angle:0,vx:0,vy:0,rotor:0,hp:Zt.hp,max:Zt.hp,destroyed:!1,state:"idle",stateT:0,boardT:0,homeX:t.hx,homeY:t.hy,riders:[],destX:0,destY:0};return n.transports.push(s),Xe(n,s.x,s.y,"+transport heli","#bfe3ff"),s}function ou(n,e,t){return t.riders.length>=Zt.seats||t.state==="fly"||t.state==="unload"?!1:(e.aboard=t,e.flying=!0,e.wasRaid=!1,e.state="raid",t.riders.push(e),t.state==="idle"&&(t.state="board"),!0)}function mh(n,e,t,i,s){let r=te(e.x,e.y,t,i),o=Math.atan2(i-e.y,t-e.x);e.angle=Ri(e.angle,o,s*3);let a=r>220?1:Math.max(.08,r/220);e.vx+=Math.cos(e.angle)*Zt.accel*a*s,e.vy+=Math.sin(e.angle)*Zt.accel*a*s;let l=Math.pow(Zt.drag,s);e.vx*=l,e.vy*=l;let c=Math.hypot(e.vx,e.vy);return c>Zt.speed&&(e.vx*=Zt.speed/c,e.vy*=Zt.speed/c),e.x=st(e.x+e.vx*s,Zt.r,xe.w-Zt.r),e.y=st(e.y+e.vy*s,Zt.r,xe.h-Zt.r),r}function au(n,e){for(let t=n.transports.length-1;t>=0;t--){let i=n.transports[t];if(i.hp<=0||i.destroyed){ph(n,i.x,i.y);for(let a of i.riders)a.aboard=null,a.flying=!1,a.x=i.x+n.rng.rand(-30,30),a.y=i.y+n.rng.rand(-30,30),fh(n,a);n.transports.splice(t,1);continue}i.riders=i.riders.filter(a=>!a.dead&&a.aboard===i),i.stateT+=e;let s=i.riders.length>0;(s||i.state==="fly"||i.state==="unload"||i.state==="return")&&(i.rotor+=e*40);let r=i.riders.length?i.riders[0].raid:null,o=r&&r.bases?r.bases.find(a=>!a.dead):null;if(i.state==="idle"||i.state==="board"){if(s&&o){if(i.boardT+=e,i.riders.length>=2||i.boardT>5){let a=te(i.x,i.y,o.hx,o.hy),l=Math.max(0,(a-620)/Math.max(1,a));i.destX=i.x+(o.hx-i.x)*l,i.destY=i.y+(o.hy-i.y)*l,i.state="fly",i.stateT=0,i.boardT=0}}else s?mh(n,i,i.homeX-320,i.homeY,e):(i.vx=i.vy=0,i.boardT=0);for(let a of i.riders)a.x=i.x,a.y=i.y}else if(i.state==="fly"){let a=mh(n,i,i.destX,i.destY,e);for(let l of i.riders)l.x=i.x,l.y=i.y;(a<200||!o||i.stateT>16)&&(i.state="unload",i.stateT=0)}else if(i.state==="unload"){for(let a of i.riders){let l=i.x+n.rng.rand(-60,60),c=i.y+n.rng.rand(-60,60);for(let d=0;d<14&&Et(n,l,c,12);d++){let h=n.rng.rand(0,Ze),f=n.rng.rand(40,150);l=i.x+Math.cos(h)*f,c=i.y+Math.sin(h)*f}a.x=st(l,12,xe.w-12),a.y=st(c,12,xe.h-12),a.aboard=null,a.flying=!1}i.riders=[],i.state="return",i.stateT=0}else i.state==="return"&&(mh(n,i,i.homeX-320,i.homeY,e)<160||i.stateT>16)&&(i.state="idle",i.vx=i.vy=0)}}function lu(n,e){if(n.world.rails.length&&(n.trainT-=e,n.trainT<=0&&n.trains.length<2)){n.trainT=n.rng.rand(30,90);let t=n.rng.pick(n.world.rails),s=n.rng.chance(.5)?t.pts:[...t.pts].reverse();n.trains.push({pts:s,seg:0,x:s[0].x,y:s[0].y,px:s[0].x,py:s[0].y,ang:0,speed:n.rng.rand(460,640),smokeT:0})}for(let t=n.trains.length-1;t>=0;t--){let i=n.trains[t];i.px=i.x,i.py=i.y;let s=i.speed*e;for(;s>0&&i.seg<i.pts.length-1;){let c=i.pts[i.seg],d=i.pts[i.seg+1],h=te(c.x,c.y,d.x,d.y),f=te(c.x,c.y,i.x,i.y),u=h-f;if(s<u){let p=(f+s)/h;i.x=c.x+(d.x-c.x)*p,i.y=c.y+(d.y-c.y)*p,s=0}else i.seg++,i.x=d.x,i.y=d.y,s-=u}i.ang=Math.atan2(i.y-i.py,i.x-i.px)||i.ang;let r=36,o=n.player;!o.dead&&!o.inCopter&&At(o.x,o.y,i.px,i.py,i.x,i.y)<r&&vs(n,999,i.px,i.py,"train");for(let c of n.units)!c.dead&&!c.flying&&!c.eliminated&&At(c.x,c.y,i.px,i.py,i.x,i.y)<r&&Ms(n,c,999,i.px,i.py,"train");for(let c of n.animals)!c.dead&&At(c.x,c.y,i.px,i.py,i.x,i.y)<r&&(c.hp=0,c.dead=!0,c.respawnT=n.rng.rand(11,18));for(let c of n.barrels)c.hp>0&&At(c.x,c.y,i.px,i.py,i.x,i.y)<r&&(c.hp=0);let a=te(i.px,i.py,i.x,i.y),l=Math.max(1,Math.ceil(a/64));for(let c=0;c<=l;c++){let d=c/l,h=Math.floor((i.px+(i.x-i.px)*d)/64),f=Math.floor((i.py+(i.y-i.py)*d)/64);zr(n,h+","+f,9999),_s(n,h+","+f,9999,"train");for(let u of["V,"+h+","+f,"V,"+(h+1)+","+f,"H,"+h+","+f,"H,"+h+","+(f+1)])qs(n,u,9999,"train")}if(i.smokeT-=e,i.smokeT<=0){i.smokeT=.28;let c=i.x+Math.cos(i.ang)*16,d=i.y+Math.sin(i.ang)*16;n.particles.push({x:c,y:d,vx:n.rng.rand(-7,7)+n.wind*5,vy:-n.rng.rand(6,16),life:n.rng.rand(11,15),max:15,r:n.rng.rand(5,10),col:"rgba(74,74,80,0.5)"}),n.particles.push({x:c,y:d,vx:n.rng.rand(-4,4),vy:-n.rng.rand(4,10),life:n.rng.rand(8,12),max:12,r:n.rng.rand(3,6),col:"rgba(40,40,46,0.45)"})}i.seg>=i.pts.length-1&&n.trains.splice(t,1)}for(let t of n.world.crossings)t.active=n.trains.some(i=>_e(i.x,i.y,t.x,t.y)<820*820),t.gate+=((t.active?1:0)-t.gate)*Math.min(1,e*3)}function cu(n,e){n.convoys.length||(n.convoyT-=e,n.convoyT<=0&&pg(n));for(let t=n.convoys.length-1;t>=0;t--){let i=n.convoys[t];if(i.hp<=0&&!i.dead){i.dead=!0,pt(n,i.x,i.y,"#ffb24a",30,340),pt(n,i.x,i.y,"#ffe2a0",16,220),n.flashes.push({x:i.x,y:i.y,r:96,life:.25,max:.25}),n.shake=Math.max(n.shake,12),n.scorch.push({x:i.x,y:i.y,r:60}),n.scorch.length>36&&n.scorch.shift(),cn(n,i.x,i.y,"metal",n.rng.randi(50,90)),cn(n,i.x,i.y,"scrap",n.rng.randi(60,110)),Rt(n,i.x,i.y,"ammo",n.rng.randi(50,100));for(let c=0,d=n.rng.randi(3,5);c<d;c++)Rt(n,i.x,i.y,"rocket",1);for(let c=0,d=n.rng.randi(2,4);c<d;c++)Rt(n,i.x,i.y,"satchel",1);for(let c of i.guards)c.dead||Rt(n,c.x,c.y,"ammo",n.rng.randi(8,16));Xe(n,i.x,i.y,"convoy destroyed!","#ffd0a0"),n.events.push({type:"explosion",x:i.x,y:i.y,r:96}),n.convoys.splice(t,1);continue}i.px=i.x,i.py=i.y;let s=fn.speed*e;for(;s>0&&i.seg<i.pts.length-1;){let c=i.pts[i.seg],d=i.pts[i.seg+1],h=te(c.x,c.y,d.x,d.y),f=te(c.x,c.y,i.x,i.y),u=h-f;if(s<u){let p=(f+s)/h;i.x=c.x+(d.x-c.x)*p,i.y=c.y+(d.y-c.y)*p,s=0}else i.seg++,i.x=d.x,i.y=d.y,s-=u}if(i.ang=Math.atan2(i.y-i.py,i.x-i.px)||i.ang,i.seg>=i.pts.length-1){n.convoys.splice(t,1);continue}i.gunCd=Math.max(0,i.gunCd-e);let r=null,o=fn.trange,a=n.player;if(!a.dead&&!a.inCopter&&!n.ghost){let c=te(i.x,i.y,a.x,a.y);c<o&&!zt(n,i.x,i.y,a.x,a.y)&&!ai(n,i.x,i.y,a.x,a.y)&&(r=a,o=c)}for(let c of n.units){if(c.dead||c.flying||c.eliminated)continue;let d=te(i.x,i.y,c.x,c.y);d<o&&!zt(n,i.x,i.y,c.x,c.y)&&!ai(n,i.x,i.y,c.x,c.y)&&(r=c,o=d)}r?(i.taim=Math.atan2(r.y-i.y,r.x-i.x),i.gunCd<=0&&(i.gunCd=fn.trof,Ln(n,{x:i.x+Math.cos(i.taim)*30,y:i.y+Math.sin(i.taim)*30,angle:i.taim+n.rng.rand(-.04,.04),speed:fn.bspeed,dmg:fn.tdmg,from:"convoy",life:.6}),pt(n,i.x+Math.cos(i.taim)*30,i.y+Math.sin(i.taim)*30,"#ffd76b",2,90))):i.taim=i.ang;let l=[[-46,28],[-46,-28],[50,30],[50,-30]];for(let c=0;c<i.guards.length;c++){let d=i.guards[c];if(d.dead)continue;d.gunCd=Math.max(0,d.gunCd-e);let h=null,f=fn.grange;if(!a.dead&&!a.inCopter&&!n.ghost){let u=te(d.x,d.y,a.x,a.y);u<f&&!zt(n,d.x,d.y,a.x,a.y)&&!ai(n,d.x,d.y,a.x,a.y)&&(h=a,f=u)}for(let u of n.units){if(u.dead||u.flying||u.eliminated)continue;let p=te(d.x,d.y,u.x,u.y);p<f&&!zt(n,d.x,d.y,u.x,u.y)&&!ai(n,d.x,d.y,u.x,u.y)&&(h=u,f=p)}if(te(d.x,d.y,i.x,i.y)>fn.leash&&(h=null),h){let u=Math.atan2(h.y-d.y,h.x-d.x);d.angle=Ri(d.angle,u,e*9),d.gunCd<=0&&Math.abs(xg(d.angle,u))<.3&&(d.gunCd=fn.grof,Ln(n,{x:d.x+Math.cos(d.angle)*14,y:d.y+Math.sin(d.angle)*14,angle:d.angle+n.rng.rand(-.06,.06),speed:fn.bspeed,dmg:fn.gdmg,from:"convoy",life:.55}));let p=0,x=0;f>260?(p=Math.cos(u),x=Math.sin(u)):f<150&&(p=-Math.cos(u),x=-Math.sin(u));let m=d.x+p*fn.gspeed*e,g=d.y+x*fn.gspeed*e;Et(n,m,g,12)||(d.x=m,d.y=g)}else{let u=i.x+Math.cos(i.ang)*l[c][0]-Math.sin(i.ang)*l[c][1],p=i.y+Math.sin(i.ang)*l[c][0]+Math.cos(i.ang)*l[c][1],x=te(d.x,d.y,u,p);if(x>4){let m=fn.speed+50;d.x+=(u-d.x)/x*Math.min(x,m*e),d.y+=(p-d.y)/x*Math.min(x,m*e)}d.angle=Ri(d.angle,i.ang,e*5)}}}}function pg(n){n.convoyT=n.rng.rand(180,300);let e=[];for(let r of n.world.roads){let o=-1,a=null;for(let l=0;l<=r.pts.length;l++){let c=l<r.pts.length&&r.fade[l]>.05;c&&o===-1&&(o=l),!c&&o!==-1&&((!a||l-o>a.len)&&(a={start:o,len:l-o}),o=-1)}a&&a.len>=10&&e.push({rd:r,...a})}if(!e.length)return;let t=e[Math.floor(n.rng.next()*e.length)],i=t.rd.pts.slice(t.start,t.start+t.len);n.rng.chance(.5)&&(i=[...i].reverse());let s={pts:i,seg:0,x:i[0].x,y:i[0].y,px:i[0].x,py:i[0].y,ang:0,taim:0,hp:fn.vhp,max:fn.vhp,gunCd:0,dead:!1,guards:[]};for(let r=0;r<4;r++)s.guards.push({x:i[0].x,y:i[0].y,hp:fn.ghp,max:fn.ghp,angle:0,gunCd:0,dead:!1});n.convoys.push(s),n.events.push({type:"convoy",x:s.x,y:s.y})}function hu(n,e){if(!n.patrol){n.patrolT-=e,n.patrolT<=0&&mg(n);return}let t=n.patrol;t.rotor+=e*28;let i=n.teams.find(c=>c.owner===t.huntOwner&&!c.eliminated&&c.bases.some(d=>!d.dead));if(t.hp<=0){gg(n);return}let s,r,o=!1;if(!i||t.orbitT<=0){if(o=!0,s=t.exitX,r=t.exitY,t.x<-320||t.x>xe.w+320||t.y<-320||t.y>xe.h+320){n.patrol=null,n.patrolT=n.rng.rand(240,420);return}}else{let c=i.bases.find(h=>!h.dead);te(t.x,t.y,c.hx,c.hy)>460&&!t.orbiting?(s=c.hx,r=c.hy):(t.orbiting=!0,t.orbitA+=.55*e,t.orbitT-=e,s=c.hx+Math.cos(t.orbitA)*Jn.orbitR,r=c.hy+Math.sin(t.orbitA)*Jn.orbitR)}let a=Math.atan2(r-t.y,s-t.x);t.angle=Ri(t.angle,a,e*3);let l=te(t.x,t.y,s,r);if(t.spd=Math.min(Jn.speed,Jn.speed*l/300+40),t.x+=Math.cos(t.angle)*t.spd*e,t.y+=Math.sin(t.angle)*t.spd*e,t.flash=Math.max(0,t.flash-e),i&&!o){if(t.strafeT-=e,t.strafeT<=0){t.strafeT=1.2;let c=null,d=Jn.strafeR;for(let h of n.units){if(h.owner!==t.huntOwner||h.dead||h.eliminated||h.flying)continue;let f=te(t.x,t.y,h.x,h.y);f<d&&(d=f,c=h)}if(c){for(let h=0;h<5;h++){let f=.18+h*.02,u=c.x+c.vx*f+n.rng.rand(-26,26),p=c.y+c.vy*f+n.rng.rand(-26,26);Ln(n,{x:t.x,y:t.y,angle:Math.atan2(p-t.y,u-t.x),speed:900,dmg:9,from:"patrol",life:1,col:"hmg"})}t.flash=.12}}for(let c of n.units)if(!(c.owner!==t.huntOwner||c.dead||c.eliminated||c.flying)&&!(_e(t.x,t.y,c.x,c.y)>Jn.flakR*Jn.flakR)&&(c.flakT=(c.flakT||0)-e,c.flakT<=0)){c.flakT=1;let d=te(t.x,t.y,c.x,c.y)/1100,h=t.x+Math.cos(t.angle)*t.spd*d,f=t.y+Math.sin(t.angle)*t.spd*d,u=Math.atan2(f-c.y,h-c.x)+n.rng.rand(-.07,.07);c.angle=u;let p=c.x+Math.cos(u)*1100*.7,x=c.y+Math.sin(u)*1100*.7;n.events.push({type:"flak",x0:c.x,y0:c.y,x1:p,y1:x}),At(t.x,t.y,c.x,c.y,p,x)<40&&(t.hp-=6,pt(n,t.x,t.y,"#aab1b8",3,120))}}}function mg(n){let e=null,t=-1;for(let o of n.teams){if(o.eliminated)continue;let a=o.bases.find(u=>!u.dead);if(!a)continue;let l=n.units.filter(u=>u.owner===o.owner&&!u.dead&&!u.eliminated).length,c=0;for(let u of n.structures.values())u.owner===o.owner&&c++;let d=n.deploys.get(a.tcKey),h=d?d.store.wood+d.store.stone+d.store.metal:0,f=l*10+c*2+h*.01;f>t&&(t=f,e={t:o,rec:a})}if(!e){n.patrolT=n.rng.rand(120,240);return}let{t:i,rec:s}=e,r=s.hx>xe.w/2;n.patrol={huntOwner:i.owner,huntId:i.id,x:r?-200:xe.w+200,y:st(s.hy+n.rng.rand(-600,600),200,xe.h-200),exitX:r?xe.w+360:-360,exitY:s.hy,angle:0,rotor:0,spd:0,hp:Jn.hp,max:Jn.hp,orbitA:n.rng.rand(0,Ze),orbitT:Jn.orbitT,orbiting:!1,strafeT:1,flash:0},Xe(n,s.hx,s.hy-80,"Patrol helicopter inbound!","#ffb84a"),n.elims.push({text:"PATROL HELI hunts Base "+(i.id+1),t:10})}function gg(n){let e=n.patrol;pt(n,e.x,e.y,"#ffb24a",40,360),pt(n,e.x,e.y,"#ff9b3d",24,280),n.scorch.push({x:e.x,y:e.y,r:64}),n.scorch.length>36&&n.scorch.shift(),n.wrecks.push({x:e.x,y:e.y,t:15});for(let t=0,i=n.rng.randi(4,6);t<i;t++)Rt(n,e.x+n.rng.rand(-30,30),e.y+n.rng.rand(-30,30),"rocket",1);for(let t=0,i=n.rng.randi(2,3);t<i;t++)Rt(n,e.x+n.rng.rand(-30,30),e.y+n.rng.rand(-30,30),"satchel",1);Rt(n,e.x,e.y,"ammo",n.rng.randi(100,180)),cn(n,e.x,e.y,"scrap",n.rng.randi(80,150)),cn(n,e.x,e.y,"metal",n.rng.randi(50,90)),n.elims.push({text:"PATROL HELI DOWN",t:12}),n.events.push({type:"explosion",x:e.x,y:e.y,r:110}),n.shake=Math.max(n.shake,14),n.patrol=null,n.patrolT=n.rng.rand(240,420)}var xg=(n,e)=>{let t=(e-n)%Ze;return t>Math.PI&&(t-=Ze),t<-Math.PI&&(t+=Ze),t};function du(n,e){let t=n.weather;t.timer-=e,t.timer<=0&&(t.mode==="clear"?(t.mode="rain",t.timer=n.rng.rand(8,16),t.boltT=n.rng.rand(3,8)):(t.mode="clear",t.timer=n.rng.rand(90,170)));let i=t.mode==="rain"?1:0;t.rain+=(i-t.rain)*Math.min(1,e*.5),t.rain>.4&&(t.boltT-=e,t.boltT<=0&&(t.boltT=n.rng.rand(4,13),t.flash=1,n.events.push({type:"bolt"}))),t.flash=Math.max(0,t.flash-e*2.4),t.fogTimer-=e,t.fogTimer<=0&&(t.fogOn=!t.fogOn,t.fogTimer=t.fogOn?n.rng.rand(28,60):n.rng.rand(45,95)),t.fog+=((t.fogOn?1:0)-t.fog)*Math.min(1,e*.22),n.wind=(Math.sin(n.t*.5)*.5+Math.sin(n.t*1.9+1.1)*.5)*(1+t.rain*1.7)}function fu(n,e){if(!n.plane&&!n.airdrop&&(n.airdropT-=e,n.airdropT<=0&&(uu(n),n.airdropT=n.rng.rand(120,300))),n.plane){let t=n.plane;t.x+=t.vx*e,t.prop+=e*30,!t.released&&(t.vx>0&&t.x>=t.dropX||t.vx<0&&t.x<=t.dropX)&&(t.released=!0,n.airdrop={x:t.dropX,y:t.dropY-780,gy:t.dropY,hp:90,max:90,fall:0,sway:n.rng.rand(0,Ze),loot:yg(n)},Xe(n,t.dropX,t.dropY,"Airdrop incoming!","#ffe07a"),n.events.push({type:"airdropCalled",x:t.dropX,y:t.dropY})),(t.x<-300||t.x>xe.w+300)&&(n.plane=null)}if(n.airdrop){let t=n.airdrop;if(t.fall<1){t.fall=Math.min(1,t.fall+e*.16);let i=t.fall*t.fall*(3-2*t.fall);t.y=t.gy-780+780*i,t.sway+=e*1.5}else t.hp<=0&&(_g(n,t),n.airdrop=null)}}function uu(n,e,t){let i=e,s=t;if(i===void 0){for(let o=0;o<24;o++){let a=n.rng.rand(.16*xe.w,.84*xe.w),l=n.rng.rand(.16*xe.h,.84*xe.h);if(!(te(a,l,n.world.shop.x,n.world.shop.y)<Tt+160)){i=a,s=l;break}}i===void 0&&(i=xe.w*.25,s=xe.h*.25)}let r=n.rng.chance(.5);n.plane={x:i+(r?-1700:1700),y:s,vx:r?820:-820,dropX:i,dropY:s,released:!1,prop:0}}function yg(n){let e=[["scrap",n.rng.randi(50,110)]];return n.rng.chance(.85)&&e.push(["rocket",n.rng.randi(2,6)]),n.rng.chance(.85)&&e.push(["ammo",n.rng.randi(70,150)]),n.rng.chance(.55)&&e.push(["metal",n.rng.randi(25,60)]),n.rng.chance(.5)&&e.push(["wood",n.rng.randi(30,70)]),n.rng.chance(.4)&&e.push(["sniper",1]),e}function _g(n,e){pt(n,e.x,e.y,"#ffd27a",30,300),pt(n,e.x,e.y,"#d2664a",16,220);for(let[t,i]of e.loot)if(t==="rocket")for(let s=0;s<i;s++)Rt(n,e.x,e.y,"rocket",1);else t==="sniper"?Rt(n,e.x,e.y,"sniper",1):t==="ammo"?Rt(n,e.x,e.y,"ammo",i):cn(n,e.x,e.y,t,i);Xe(n,e.x,e.y-30,"AIRDROP LOOTED!","#ffe07a")}function gh(n,e,t){if(n.signal)return!1;let i=n.player,s=te(i.x,i.y,e,t);if(s>700){let r=700/s;e=i.x+(e-i.x)*r,t=i.y+(t-i.y)*r}return bt(n,e,t)?(Xe(n,i.x,i.y-20,"Not in the safe zone","#d2664a"),!1):(n.inv.signal|0)<1?(Xe(n,i.x,i.y-20,"No supply signal \u2014 buy one at the trade zone","#d2664a"),!1):(n.inv.signal--,n.signal={x:e,y:t,t:0,dur:6,puff:0,called:!1},Xe(n,i.x,i.y-20,"Supply signal out \u2014 everyone saw it","#c9a0ff"),!0)}function pu(n,e,t){return n.signal||n.plane||n.airdrop?!1:(n.signal={x:e,y:t,t:0,dur:6,puff:0,called:!1},!0)}function mu(n,e){let t=n.signal;t&&(t.t+=e,t.puff-=e,t.puff<=0&&(t.puff=.12,pt(n,t.x+n.rng.rand(-8,8),t.y+n.rng.rand(-6,2),"#a96bd4",3,60)),!t.called&&t.t>t.dur&&!n.plane&&!n.airdrop&&(uu(n,t.x,t.y),t.called=!0),(t.called||t.t>t.dur+60)&&(n.signal=null))}function gu(n,e){let t=n.quarry;if(!t)return;let i=new Set;!n.player.dead&&!n.player.inCopter&&!n.ghost&&_e(n.player.x,n.player.y,t.x,t.y)<t.r*t.r&&i.add(Ke);for(let s of n.units)s.dead||s.eliminated||s.flying||_e(s.x,s.y,t.x,t.y)<t.r*t.r&&i.add(s.owner);if(i.size===1){let s=[...i][0];if(s!==t.owner){if(t.capOwner!==s&&(t.capOwner=s,t.capT=0),t.capT+=e,t.capT>=Kn.capT){t.owner=s,t.capT=0,t.capOwner=null,t.payT=0;let r=n.teams.find(a=>a.owner===s),o=s===Ke?"You":"Base "+(r?r.id+1:"?");Xe(n,t.x,t.y-44,"Quarry captured!","#cdd6a3"),n.elims.push({text:"QUARRY \u2192 "+o,t:10})}}else t.capT=0}else t.capT=Math.max(0,t.capT-e);if(t.owner&&t.owner!==Ke){let s=n.teams.find(o=>o.owner===t.owner);s&&!s.eliminated&&n.units.some(o=>o.owner===t.owner&&o.primary&&!o.eliminated)||(t.owner=null)}if(t.owner&&(t.arm+=e,t.payT+=e,t.payT>=Kn.payEvery)){if(t.payT=0,t.paid++,t.owner===Ke)n.inv.stone+=Kn.pay.stone,n.inv.metal+=Kn.pay.metal,n.inv.scrap+=Kn.pay.scrap;else{let s=n.teams.find(a=>a.owner===t.owner),r=s&&s.bases.find(a=>!a.dead),o=r&&n.deploys.get(r.tcKey);o&&o.store&&(o.store.stone+=Kn.pay.stone,o.store.metal+=Kn.pay.metal,o.store.scrap+=Kn.pay.scrap)}Xe(n,t.x,t.y-44,"+stone +metal +scrap","#cdd6a3")}}function xu(n,e){if(!n.lockedCrate){if(n.crateT-=e,n.crateT<=0){let s=n.world.monuments.filter(a=>a.type!=="quarry"),r=n.rng.pick(s),o=n.rng.rand(0,Ze);n.lockedCrate={x:r.x+Math.cos(o)*(r.r+90),y:r.y+Math.sin(o)*(r.r+90),mon:r.name,t:Vs.hackT,started:!1,blink:0},Xe(n,n.lockedCrate.x,n.lockedCrate.y-30,"Locked crate at the "+r.name+"!","#ffb84a"),n.elims.push({text:"LOCKED CRATE \u2014 "+r.name,t:12}),n.crateT=n.rng.rand(240,360)}return}let t=n.lockedCrate;t.blink+=e;let i=!n.player.dead&&!n.ghost&&_e(n.player.x,n.player.y,t.x,t.y)<Vs.r*Vs.r;if(!i){for(let s of n.units)if(!(s.dead||s.eliminated||s.flying)&&_e(s.x,s.y,t.x,t.y)<Vs.r*Vs.r){i=!0;break}}if(i&&(t.started=!0,t.t-=e),t.t<=0){pt(n,t.x,t.y,"#ffd27a",30,300),pt(n,t.x,t.y,"#d2664a",16,220),cn(n,t.x,t.y,"scrap",n.rng.randi(80,140)),cn(n,t.x,t.y,"metal",n.rng.randi(40,80));for(let s=0,r=n.rng.randi(3,6);s<r;s++)Rt(n,t.x+n.rng.rand(-20,20),t.y+n.rng.rand(-20,20),"rocket",1);for(let s=0,r=n.rng.randi(2,4);s<r;s++)Rt(n,t.x+n.rng.rand(-20,20),t.y+n.rng.rand(-20,20),"satchel",1);Rt(n,t.x,t.y,"ammo",n.rng.randi(80,160)),n.rng.chance(.5)&&Rt(n,t.x,t.y,"sniper",1),Xe(n,t.x,t.y-24,"Locked crate opened!","#ffb84a"),n.lockedCrate=null}}function xh(n){let e=n.rng,t=xe.w,i=xe.h,s=(o,a,l)=>{let c=l?e.rand(86,140):e.rand(70,128),d=[],h=c;for(let f=0,u=e.randi(5,9);f<u;f++){let p=e.rand(-.95,.95)*c,x=e.rand(-.42,.42)*c,m=c*e.rand(.55,1);d.push({dx:p,dy:x,r:m}),h=Math.max(h,Math.hypot(p,x)+m)}return{x:o,y:a,puffs:d,r:h,op:l?e.rand(.92,1):e.rand(.7,1),sp:e.rand(9,19),heavy:l}};n.clouds=[];let r=e.randi(7,10);for(;r>0;)if(r>=2&&e.chance(.5)){let o=e.rand(0,t),a=e.rand(0,i),l=Math.min(r,e.randi(2,3));for(let c=0;c<l;c++)n.clouds.push(s(o+e.rand(-150,150),a+e.rand(-95,95),!0));r-=l}else n.clouds.push(s(e.rand(0,t),e.rand(0,i),e.chance(.4))),r--;n.fogBanks=[];for(let o=0,a=e.randi(13,20);o<a;o++){let l=e.rand(150,320),c=[];for(let d=0,h=e.randi(2,5);d<h;d++)c.push({dx:e.rand(-1,1)*l,dy:e.rand(-.6,.6)*l,r:l*e.rand(.7,1.2)});n.fogBanks.push({x:e.rand(0,t),y:e.rand(0,i),r:l,puffs:c,dens:e.rand(.5,1.15),sp:e.rand(5,12),vy:e.rand(-3,3)})}n.fireflies=[];for(let o=0,a=e.randi(16,28);o<a;o++)n.fireflies.push({x:e.rand(t/3+30,2*t/3-30),y:e.rand(60,i-60),vx:e.rand(-28,28),vy:e.rand(-28,28),ph:e.rand(0,Ze),fs:e.rand(2.5,4.5),wT:e.rand(.5,1.7)})}function yu(n,e){let t=xe.w,i=xe.h;n.clouds||xh(n);for(let o of n.clouds)o.x+=o.sp*e,o.x-o.r>t+160&&(o.x=-o.r-n.rng.rand(0,500),o.y=n.rng.rand(0,i));for(let o of n.fogBanks)o.x+=o.sp*e,o.y+=o.vy*e,o.x-o.r>t+220&&(o.x=-o.r-n.rng.rand(0,450),o.y=n.rng.rand(0,i)),o.y<-o.r?o.y=i+o.r*.5:o.y>i+o.r&&(o.y=-o.r*.5);let s=t/3+20,r=2*t/3-20;for(let o of n.fireflies){if(o.wT-=e,o.wT<=0){o.wT=n.rng.rand(.5,1.7);let a=n.rng.rand(0,Ze),l=n.rng.rand(14,40);o.vx=Math.cos(a)*l,o.vy=Math.sin(a)*l}o.x+=o.vx*e,o.y+=o.vy*e,o.x<s&&(o.x=s,o.vx=Math.abs(o.vx)),o.x>r&&(o.x=r,o.vx=-Math.abs(o.vx)),o.y=st(o.y,40,i-40),o.ph+=o.fs*e}for(let o=n.footprints.length-1;o>=0;o--)n.footprints[o].t+=e,n.footprints[o].t>=10&&n.footprints.splice(o,1)}function va(n,e,t){if(e.fpAcc=(e.fpAcc||0)+te(e.x,e.y,e.fpX||e.x,e.fpY||e.y),e.fpX=e.x,e.fpY=e.y,e.fpAcc<30)return;e.fpAcc=0,e.fpSide=!e.fpSide;let i=n.world.lakeAt(e.x,e.y);if(i&&!i.frozen){n.events.push({type:"splash",x:e.x,y:e.y});return}let s=e.fpSide?5:-5;n.footprints.push({x:e.x-Math.sin(t)*s,y:e.y+Math.cos(t)*s,a:t,t:0}),n.footprints.length>700&&n.footprints.shift()}function _u(n,e){for(let t of n.resources)t.amount>=t.max||(t.regen+=e,t.amount<=0?t.regen>=29&&(t.amount=t.max,t.regen=0):t.regen>=2.5&&(t.amount=Math.min(t.max,t.amount+Math.ceil(t.max*.05)),t.regen=0));for(let t of n.barrels)t.hp>0||(t.respawnT-=e,t.respawnT<=0&&(t.hp=t.max))}var vu={1:"pistol",2:"rifle",3:"minigun",4:"rocket",6:"sniper",7:"shotgun",8:"hmg"};function Xr(n){let e=vu[n.slot];return e&&n.owned[e]?e:null}function Mu(n,e){let t=n.player,i=n.cmd;if(t.gatherCd=Math.max(0,(t.gatherCd||0)-e),t.recoil=Math.max(0,t.recoil-42*e),t.swing=Math.max(0,t.swing-e),t.hurt=Math.max(0,t.hurt-e),t.invuln=Math.max(0,t.invuln-e),t.dead){t.deadT-=e,t.deadT<=0&&bg(n);return}if(t.poison>0&&(t.poison-=e,t.regenDelay=Math.max(t.regenDelay,1.5),t.health-=3.2*e,n.tick%60===0&&Xe(n,t.x,t.y-20,"poison","#7bbf4f"),t.health<=0)){Wr(n,!0);return}if(t.regenDelay=Math.max(0,t.regenDelay-e),t.regenDelay<=0&&t.health<t.maxhp&&(t.health=Math.min(t.maxhp,t.health+12*e)),t.inCopter){su(n,e);return}t.angle=Math.atan2(i.my-t.y,i.mx-t.x);let s=(i.right?1:0)-(i.left?1:0),r=(i.down?1:0)-(i.up?1:0),o=i.run?t.run:t.walk,a=Xr(n);a==="minigun"&&n.weapons.minigun.spin>=ln.minigun.windup&&(o*=.4);let l=n.world.lakeAt(t.x,t.y);l&&!l.frozen&&(o*=.5);let c=Math.hypot(s,r),d=0,h=0;if(c>0&&(d=s/c*o,h=r/c*o),l&&l.frozen){let y=Math.min(1,e*1.1);if(t.vx+=(d-t.vx)*y,t.vy+=(h-t.vy)*y,c===0){let v=Math.pow(.6,e);t.vx*=v,t.vy*=v}}else t.vx=d,t.vy=h;t.moving=Math.hypot(t.vx,t.vy)>10;let f={passOwner:Ke,openOwnDoors:!1},u=t.x+t.vx*e,p=t.y+t.vy*e;Et(n,t.x,t.y,jt,f)?(t.x=u,t.y=p):(Et(n,u,t.y,jt,f)?t.vx*=-.2:t.x=u,Et(n,t.x,p,jt,f)?t.vy*=-.2:t.y=p),t.x=st(t.x,jt,xe.w-jt),t.y=st(t.y,jt,xe.h-jt);for(let y of n.resources)y.amount>0&&Ma(t,y.x,y.y,y.r+jt-6);for(let y of n.barrels)y.hp>0&&Ma(t,y.x,y.y,y.r+jt-4);for(let y of n.world.boulders)Ma(t,y.x,y.y,y.r+jt-2);Ma(t,n.world.shop.x,n.world.shop.y,n.world.shop.r+jt),t.moving&&va(n,t,Math.atan2(t.vy,t.vx));let x=a&&n.weapons[a],m=a&&ln[a];if(x&&(x.cd=Math.max(0,x.cd-e),x.reloading>0&&(x.reloading-=e,x.reloading<=0))){let y=Math.min(m.magSize-x.ammo,x.reserve);x.ammo+=y,x.reserve-=y}let g=!n.buildMode&&!t.dead&&!t.inCopter&&!n.shopOpen&&!n.storeOpen;if(g&&a==="minigun"){let y=n.weapons.minigun;i.fireHeld?y.spin=Math.min(m.windup+.4,y.spin+e):y.spin=Math.max(0,y.spin-1.6*e),i.fireHeld&&y.spin>=m.windup&&ba(n)}else g&&i.fireHeld&&m&&m.auto?ba(n):g&&i.fireHeld&&n.slot===0&&t.gatherCd<=0&&(t.gatherCd=.34,vg(n));n.rapidRockets&&g&&i.fireHeld&&(n.rapidCd=Math.max(0,(n.rapidCd||0)-e),n.rapidCd<=0&&!bt(n,t.x,t.y)&&(n.rapidCd=.1,Gr(n,t.x+Math.cos(t.angle)*26,t.y+Math.sin(t.angle)*26,t.angle,Ke)))}function Ma(n,e,t,i){let s=_e(n.x,n.y,e,t);if(s<i*i&&s>.01){let r=Math.sqrt(s);n.x+=(n.x-e)/r*(i-r),n.y+=(n.y-t)/r*(i-r)}}function ba(n){let e=n.player,t=Xr(n);if(!t)return;if(bt(n,e.x,e.y)){mn(n,"No weapons in the safe zone");return}let i=n.weapons[t],s=ln[t];if(i.reloading>0||i.cd>0)return;if(i.ammo<=0){yh(n);return}i.ammo--,i.cd=s.rof;let r=s.spread;t==="rifle"&&e.rifleLaser&&(r*=.4);let o=s.pellets||1;for(let a=0;a<o;a++){let l=e.angle+n.rng.rand(-r,r),c=e.x+Math.cos(l)*26,d=e.y+Math.sin(l)*26;s.rocket?Gr(n,c,d,l,Ke):Ln(n,{x:c,y:d,angle:l,speed:s.speed,dmg:s.dmg,from:Ke,life:s.range,col:s.tracer||null})}e.recoil=Math.min(12,e.recoil+s.kick),n.muzzle={x:e.x+Math.cos(e.angle)*30,y:e.y+Math.sin(e.angle)*30,a:e.angle,t:s.rocket?.08:.05},n.events.push({type:"shot",x:e.x,y:e.y,a:e.angle,weapon:t})}function yh(n){let e=Xr(n);if(!e)return;let t=n.weapons[e],i=ln[e];t.reloading>0||t.ammo>=i.magSize||t.reserve<=0||(t.reloading=i.reloadT)}function qr(n,e){if(n.player.inCopter)return;let t=vu[e];if(t&&!n.owned[t]){mn(n,"locked \u2014 buy it at the trade shop");return}n.slot=e,n.buildMode=e===5,n.rapidRockets&&e!==4&&(n.rapidRockets=!1)}function vg(n){let e=n.player;e.swing=.16;let t=null,i=ra*.85;for(let o of n.animals){if(o.dead)continue;let a=te(e.x,e.y,o.x,o.y)-o.r;a<i&&(i=a,t=o)}if(t){_a(n,t,18,e.x,e.y,Ke);return}if(Mg(n))return;let s=null,r=ra;for(let o of n.resources){if(o.amount<=0)continue;let a=te(e.x,e.y,o.x,o.y)-o.r;a<r&&(r=a,s=o)}if(s){let o=s.base==="wood"?8:s.base==="stone"?6:5,a=Math.min((n.jackhammer?3:1)*o,s.amount);s.amount-=a,s.regen=0,n.inv[s.base]+=a,Xe(n,s.x,s.y-s.r,"+"+a+" "+s.base,"#d8e0c2"),pt(n,s.x,s.y,"#caa07a",n.jackhammer?6:3,140),n.events.push({type:"harvest",x:s.x,y:s.y,kind:s.base,jack:n.jackhammer})}}function Mg(n){let e=n.player,t=ra+38.4,i=null,s=t,r=null,o=null;for(let[c,d]of n.structures){if(d.owner!==Ke||d.hp>=d.max)continue;let[h,f]=c.split(",").map(Number),u=ht(h,f),p=te(e.x,e.y,u.x,u.y);p<s&&(s=p,i=d,r="cell",o=c)}for(let[c,d]of n.walls){if(d.owner!==Ke||d.hp>=d.max)continue;let h=Ft(c,d),f=te(e.x,e.y,(h[0]+h[2])/2,(h[1]+h[3])/2);f<s&&(s=f,i=d,r="wall",o=c)}for(let[c,d]of n.deploys){if(d.owner!==Ke||d.hp>=d.max)continue;let[h,f]=c.split(",").map(Number),u=ht(h,f),p=te(e.x,e.y,u.x,u.y);p<s&&(s=p,i=d,r="deploy",o=c)}if(!i)return!1;let a=Qt[i.type],l=r==="deploy"?0:void 0;return Vf(n,i,a,[n.inv],l)&&Xe(n,e.x,e.y-20,"repaired","#9ad06a"),!0}function bu(n){let e=n.player;if(e.inCopter){let a=Math.floor(e.x/64),l=Math.floor(e.y/64);if(n.structures.has(et(a,l))){mn(n,"Can't land on a base");return}e.inCopter=!1,e.y+=vt.r+jt+6;return}if(n.copter&&!n.copter.destroyed&&te(e.x,e.y,n.copter.x,n.copter.y)<vt.r+jt+34){e.inCopter=!0,mn(n,"liftoff");return}let t=n.world.shop;if(te(e.x,e.y,t.x,t.y)<t.r+jt+44){n.shopOpen=!n.shopOpen;return}let i=null,s=64*1.4,r=null,o=null;for(let[a,l]of n.walls){if(l.type!=="door"||l.hp<=0)continue;let c=Ft(a,l),d=te(e.x,e.y,(c[0]+c[2])/2,(c[1]+c[3])/2);d<s&&(s=d,i=l,r="door",o=a)}for(let[a,l]of n.deploys){if(!(l.type==="cupboard"||l.type==="box"))continue;let[c,d]=a.split(",").map(Number),h=ht(c,d),f=te(e.x,e.y,h.x,h.y);f<s&&(s=f,i=l,r="store",o=a)}if(i){if(i.lock&&i.lock.by!==Ke){mn(n,"Locked \u2014 not your base");return}r==="door"?(i.open=!i.open,n.nav.stamp++):n.storeOpen=o}}function Yr(n,e,t){let i=n.buildPiece,s=Qt[i],r=Math.floor(e/64),o=Math.floor(t/64);if(s.cat==="cell")return{gx:r,gy:o};if(s.cat==="diag")return{key:Oe("D",r,o)};let a=e-r*64,l=t-o*64;return{key:[{key:Oe("V",r,o),d:a},{key:Oe("V",r+1,o),d:64-a},{key:Oe("H",r,o),d:l},{key:Oe("H",r,o+1),d:64-l}].sort((d,h)=>d.d-h.d)[0].key}}function wu(n){let e=Yr(n,n.cmd.mx,n.cmd.my),t=n.buildPiece;Hf(n,Ke,t,e,[n.inv],{rot:n.buildRot})?(Qt[t].tc&&Xe(n,n.cmd.mx,n.cmd.my,"base claimed","#9ad06a"),n.events.push({type:"place",x:n.cmd.mx,y:n.cmd.my})):mn(n,"can't place there")}function Tu(n){let e=Yr(n,n.cmd.mx,n.cmd.my),t=Math.floor(n.cmd.mx/64),i=Math.floor(n.cmd.my/64),s=(l,c)=>{for(let d in l.cost)n.inv[d]+=Math.ceil(l.cost[d]/2);(c.mat==="stone"||c.mat==="metal")&&(n.inv.stone+=7),c.mat==="metal"&&(n.inv.metal+=10)};if(e.key){let l=n.walls.get(e.key);if(l&&l.owner===Ke){s(Qt[l.type],l),n.walls.delete(e.key),n.nav.stamp++;return}}let r=et(t,i),o=n.deploys.get(r);if(o&&o.owner===Ke){s(Qt[o.type],o),n.deploys.delete(r),n.nav.stamp++;return}let a=n.structures.get(r);if(a&&a.owner===Ke){s(Qt[a.type],a),n.structures.delete(r),ma(n,r),n.nav.stamp++;return}}function Eu(n){let e=n.cmd.mx,t=n.cmd.my,i=Math.floor(e/64),s=Math.floor(t/64);if(n.buildMode){let r=Yr(n,e,t),o=a=>a&&a.owner===Ke&&zf(n,a,Qt[a.type],[n.inv]);for(let a of[Oe("V",i,s),Oe("V",i+1,s),Oe("H",i,s),Oe("H",i,s+1)]){let l=n.walls.get(a);if(!l)continue;let c=Ft(a,l);if(Math.min(te(e,t,c[0],c[1]),te(e,t,c[2],c[3]),te(e,t,(c[0]+c[2])/2,(c[1]+c[3])/2))<18&&o(l))return}if(o(n.structures.get(et(i,s))))return}else{let r=n.deploys.get(et(i,s));if(r&&r.type==="turret"&&r.owner===Ke){let o=(r.tier||1)+1,a=_f[o];a&&n.inv.scrap>=a&&(n.inv.scrap-=a,r.tier=o,r.mag=30,r.reload=0,Xe(n,e,t,"turret T"+o,"#9ab0d0"))}}}function Au(n){let e=n.player;if(n.inv.grenade<=0){mn(n,"No grenades \u2014 buy at the trade shop");return}if(bt(n,e.x,e.y)){mn(n,"No weapons in the safe zone");return}n.inv.grenade--;let t=Math.min(560,te(e.x,e.y,n.cmd.mx,n.cmd.my)),i=Math.max(120,t*6)*.2,s=e.angle;n.grenades.push({x:e.x+Math.cos(s)*22,y:e.y+Math.sin(s)*22,vx:Math.cos(s)*i,vy:Math.sin(s)*i,t:zs.fuse,from:Ke,bob:0})}function Ru(n){let e=n.player;if(n.inv.fence<=0){mn(n,"No fences \u2014 buy more (10 wood)");return}let t=e.x+Math.cos(e.angle)*34,i=e.y+Math.sin(e.angle)*34;if(n.structures.has(et(Math.floor(t/64),Math.floor(i/64)))){mn(n,"Not on a base");return}n.inv.fence--;let s=e.angle+Math.PI/2;n.fences.push({x:t,y:i,a:s,owner:Ke,hp:Yi.hp,max:Yi.hp,t:Yi.life,x0:t-Math.cos(s)*Yi.half,y0:i-Math.sin(s)*Yi.half,x1:t+Math.cos(s)*Yi.half,y1:i+Math.sin(s)*Yi.half}),n.needFenceRefresh=!0}function bg(n){let e=n.player;e.dead=!1,e.health=e.maxhp,e.invuln=1.8,e.poison=0;let t=null;for(let[i,s]of n.deploys)if(s.type==="cupboard"&&s.owner===Ke){let[r,o]=i.split(",").map(Number),a=ht(r,o);t={x:a.x,y:a.y+64};break}if(t)e.x=t.x,e.y=t.y;else for(let i=0;i<60;i++){let s=n.rng.rand(600,xe.w-600),r=n.rng.rand(600,xe.h-600);if(!(!n.world.onLand(s,r)||n.world.lakeAt(s,r)||bt(n,s,r)||Et(n,s,r,jt))){e.x=s,e.y=r;break}}n.copter&&n.copter.destroyed&&(n.copter.destroyed=!1,n.copter.hp=n.copter.max,n.copter.x=e.x+120,n.copter.y=e.y);for(let i of n.animals)i.aggro=null,i.foe=null,!i.dead&&_e(i.x,i.y,e.x,e.y)<4e4&&(i.dead=!0,i.respawnT=.6)}function Cu(n,e){let[t,i,s]=Vt.trades[e];if(n.inv[t]<i){mn(n,"not enough "+t);return}n.inv[t]-=i,n.inv.scrap+=s}function Su(n,e){let t=Vt.buys[e];if(!t||n.inv.scrap<t.cost){mn(n,"not enough scrap");return}n.inv.scrap-=t.cost;let i=n.weapons[e];n.owned[e]?i.reserve+=t.ammo:(n.owned[e]=!0,i.ammo<ln[e].magSize&&(i.ammo=ln[e].magSize),Xe(n,n.player.x,n.player.y-20,ln[e].name+" unlocked!","#bfe3ff"))}function Iu(n,e){let t=n.player,i=s=>n.inv.scrap<s?(mn(n,"not enough scrap"),!1):(n.inv.scrap-=s,!0);switch(e){case"jackhammer":!n.jackhammer&&i(Vt.jackhammer)&&(n.jackhammer=!0,mn(n,"Jackhammer! 3\xD7 gather"));break;case"laser":if(!n.owned.rifle){mn(n,"buy the rifle first");break}!t.rifleLaser&&i(Vt.laser)&&(t.rifleLaser=!0);break;case"fence":n.inv.wood>=Vt.fenceWood?(n.inv.wood-=Vt.fenceWood,n.inv.fence++):mn(n,"not enough wood");break;case"grenade":i(Vt.grenade)&&n.inv.grenade++;break;case"signal":i(Vt.signal)&&(n.inv.signal=(n.inv.signal|0)+1);break;case"hqm":i(Vt.hqm.cost)&&(n.inv.hqm+=Vt.hqm.amt);break;case"facemask":{let s=t.facemask+1;s<=3&&i(xs.cost[s])&&(t.facemask=s);break}case"bodyArmor":{let s=t.bodyArmor+1;s<=3&&i(xs.cost[s])&&(t.bodyArmor=s);break}case"worker":i(Vt.worker)&&(Uf(n),mn(n,"worker hired \u2014 they gather and fight for you"));break}}function Pu(n,e,t){let i=n.deploys.get(n.storeOpen);if(!(!i||!i.store))if(t>0){let s=t>=9e3?n.inv[e]:Math.max(1,Math.floor(n.inv[e]*t)),r=Math.min(s,n.inv[e]);n.inv[e]-=r,i.store[e]+=r}else{let s=-t,r=s>=9e3?i.store[e]:Math.max(1,Math.floor(i.store[e]*s)),o=Math.min(r,i.store[e]);i.store[e]-=o,n.inv[e]+=o}}function mn(n,e){n.tip={text:e,t:1.4}}function Lu(n,e){let t=n.player;for(let i of n.animals){if(i.dead){i.respawnT-=e,i.respawnT<=0&&Du(n,i);continue}let s=ys[i.type];if(i.atkcd=Math.max(0,i.atkcd-e),i.hit=Math.max(0,i.hit-e),i.pauseT>0){i.pauseT-=e,i.vx=i.vy=0;continue}i.phase===void 0&&(i.phase=n.rng.next()*12|0);let r,o,a=1e9;if((n.tick+i.phase)%12===0||i.tgtCache===void 0){r=null,o=null;let m=t.dead||t.inCopter||n.ghost||bt(n,t.x,t.y),g=null,y=1e9;for(let v of n.units){if(v.dead||v.flying||v.eliminated||bt(n,v.x,v.y))continue;let w=te(i.x,i.y,v.x,v.y);w<s.detect&&w<y&&!zt(n,i.x,i.y,v.x,v.y)&&(y=w,g=v)}if(!m){let v=te(i.x,i.y,t.x,t.y);v<s.detect&&v<=y&&!zt(n,i.x,i.y,t.x,t.y)&&(r=t,o="player")}if(!r&&g&&(r=g,o="bot"),!r){let v=null,w=s.detect*s.detect;for(let[E,T]of n.deploys){if(T.type!=="turret")continue;let[P,_]=E.split(",").map(Number),M=ht(P,_),S=_e(i.x,i.y,M.x,M.y);S<w&&!zt(n,i.x,i.y,M.x,M.y)&&(w=S,v={key:E,x:M.x,y:M.y})}v&&(r=v,o="turret")}if(!r&&i.hostile){let v=null,w=s.detect*s.detect;for(let E of n.animals){if(E===i||E.dead)continue;let T=_e(i.x,i.y,E.x,E.y);T<w&&(w=T,v=E)}v&&(r=v,o="animal")}if(!r&&i.foe){let v=i.foe;typeof v=="object"&&!v.dead&&te(i.x,i.y,v.x,v.y)<s.detect*1.4&&(r=v,o=v===t?"player":v.owner!==void 0?"bot":"animal")}i.tgtCache=r?{tgt:r,kind:o}:null}else if(i.tgtCache){let m=i.tgtCache;(m.tgt.dead||m.kind==="player"&&(t.dead||n.ghost)||m.kind==="turret"&&!n.deploys.has(m.tgt.key))&&(i.tgtCache=null)}r=i.tgtCache?i.tgtCache.tgt:null,o=i.tgtCache?i.tgtCache.kind:null,r&&(a=te(i.x,i.y,r.x,r.y)),r&&o!=="turret"&&a>s.lose&&(r=null,i.aggro=null);let l=s.walk,c=0,d=0;if(r){i.aggro=o,l=s.chase;let m=Math.max(1,a);c=(r.x-i.x)/m,d=(r.y-i.y)/m;let g=o==="turret"?i.r+35.2:o==="player"?i.r+16+2:i.r+16;if(i.atkcd<=0&&a<g){o==="player"?(vs(n,s.dmg,i.x,i.y,"animal"),s.poison&&(t.poison=Math.max(t.poison,10))):o==="bot"?Ms(n,r,s.dmg,i.x,i.y,"animal"):o==="turret"?_s(n,r.key,s.dmg,"animal"):o==="animal"&&(r.hp-=s.dmg,r.foe=i,r.hit=.12,r.hp<=0&&(r.dead=!0,r.respawnT=n.rng.rand(11,18))),i.atkcd=s.atk,i.pauseT=yf;continue}}else{if(i.aggro=null,i.wanderT-=e,i.avoidT>0)i.avoidT-=e,i.dir=i.avoidA;else if(i.wanderT<=0)if(i.wanderT=n.rng.rand(1.2,3.2),i.lake&&te(i.x,i.y,i.lake.x,i.lake.y)>i.lake.r*.9)i.dir=Math.atan2(i.lake.y-i.y,i.lake.x-i.x);else if(i.lake&&n.rng.chance(.55)){i.vx=i.vy=0;continue}else if(n.rng.chance(.3)){i.vx=i.vy=0;continue}else i.dir=n.rng.rand(0,Ze);for(let[m,g]of n.deploys){if(g.type!=="cupboard")continue;let[y,v]=m.split(",").map(Number),w=ht(y,v);if(_e(i.x,i.y,w.x,w.y)<340*340){i.avoidA=Math.atan2(i.y-w.y,i.x-w.x),i.avoidT=1.2,i.dir=i.avoidA;break}}{let m=n.world.shop;_e(i.x,i.y,m.x,m.y)<760*760&&(i.avoidA=Math.atan2(i.y-m.y,i.x-m.x)+n.rng.rand(-.3,.3),i.avoidT=1.6,i.dir=i.avoidA)}c=Math.cos(i.dir),d=Math.sin(i.dir)}let h=i.x+c*l*e,f=i.y+d*l*e,u={x:i.x,y:i.y},p=i.lake?{allowLake:!0}:{},x=wg(n,i,h,f);if(i.vx=(i.x-u.x)/e,i.vy=(i.y-u.y)/e,r)if(te(i.x,i.y,u.x,u.y)<l*e*.25){if(i.stuckT+=e,i.stuckT>3){Du(n,i);continue}i.stuckT>1.5&&(i.aggro=null,i.foe=null,i.stuckT=0,i.dir=n.rng.rand(0,Ze))}else i.stuckT=Math.max(0,i.stuckT-e*2);else!x&&n.rng.chance(.5)&&(i.dir=n.rng.rand(0,Ze))}}function wg(n,e,t,i){if(bt(n,t,i)){let r=n.world.shop;e.avoidA=Math.atan2(e.y-r.y,e.x-r.x)+n.rng.rand(-.6,.6),e.avoidT=1.6,e.dir=e.avoidA,e.aggro=null,e.foe=null;let o=!1;return!bt(n,t,e.y)&&!Et(n,t,e.y,e.r*.7)?(e.x=t,o=!0):!bt(n,e.x,i)&&!Et(n,e.x,i,e.r*.7)&&(e.y=i,o=!0),e.x=st(e.x,20,xe.w-20),e.y=st(e.y,20,xe.h-20),o}let s=!1;return Et(n,e.x,e.y,e.r*.7)?(e.x=t,e.y=i,s=!0):(!Et(n,t,e.y,e.r*.7)&&(e.lake||!n.world.lakeAt(t,e.y))&&(e.x=t,s=!0),!Et(n,e.x,i,e.r*.7)&&(e.lake||!n.world.lakeAt(e.x,i))&&(e.y=i,s=!0)),e.x=st(e.x,20,xe.w-20),e.y=st(e.y,20,xe.h-20),s}function Du(n,e){let t=ys[e.type],i=xe.w,s=t.biome==="desert"?[0,i/3]:t.biome==="jungle"?[i/3,2*i/3]:t.biome==="winter"?[2*i/3,i]:[0,i];for(let r=0;r<30;r++){let o,a;if(e.lake){let l=n.rng.rand(0,Ze);o=e.lake.x+Math.cos(l)*(e.lake.r+n.rng.rand(30,200)),a=e.lake.y+Math.sin(l)*(e.lake.r+n.rng.rand(30,200))}else o=n.rng.rand(Math.max(90,s[0]-90),Math.min(i-90,s[1]+90)),a=n.rng.rand(90,xe.h-90);if(!(te(o,a,n.player.x,n.player.y)<520)&&!(te(o,a,n.world.shop.x,n.world.shop.y)<820)&&!(n.world.landFactor(o,a)<.05)&&!(n.world.lakeAt(o,a)&&!e.lake)&&!Et(n,o,a,e.r)){e.x=o,e.y=a;break}}e.dead=!1,e.hp=e.max,e.aggro=null,e.foe=null,e.pauseT=0,e.stuckT=0,e.dir=n.rng.rand(0,Ze),e.respawnT=0,e.looted=!1}function Nu(n,e){let t=n.player;for(let i of n.guards){if(i.dead){if(i.respawnT-=e,i.respawnT<=0){let a=n.rng.rand(0,Ze),l=n.rng.rand(.35*i.mr,.8*i.mr);i.x=i.mx+Math.cos(a)*l,i.y=i.my+Math.sin(a)*l,i.hp=i.max,i.dead=!1}continue}i.gunCd=Math.max(0,i.gunCd-e);let s=null,r=qt.detect;if(!t.dead&&!t.inCopter&&!n.ghost&&!bt(n,t.x,t.y)){let a=te(i.x,i.y,t.x,t.y);a<r&&!zt(n,i.x,i.y,t.x,t.y)&&(s=t,r=a)}for(let a of n.units){if(a.dead||a.flying||a.eliminated)continue;let l=te(i.x,i.y,a.x,a.y);l<r&&!zt(n,i.x,i.y,a.x,a.y)&&(s=a,r=l)}let o=te(i.x,i.y,i.mx,i.my);if(o>i.mr+qt.leash&&(s=null),s){let a=Math.atan2(s.y-i.y,s.x-i.x);if(i.angle=Ri(i.angle,a,Math.min(1,e*9)*Math.PI),r<qt.range&&i.gunCd<=0&&Math.abs(Tg(i.angle,a))<.3){i.gunCd=qt.rof;let f=i.angle+n.rng.rand(-qt.spread,qt.spread);Ln(n,{x:i.x+Math.cos(i.angle)*16,y:i.y+Math.sin(i.angle)*16,angle:f,speed:qt.bspeed,dmg:qt.dmg,from:"guard",life:qt.range/qt.bspeed+.1}),pt(n,i.x+Math.cos(i.angle)*16,i.y+Math.sin(i.angle)*16,"#ffd76b",2,90)}let l=0,c=0;r>300?(l=Math.cos(a),c=Math.sin(a)):r<150?(l=-Math.cos(a),c=-Math.sin(a)):(l=-Math.sin(a)*(i.seed>4.5?1:-1),c=Math.cos(a)*(i.seed>4.5?1:-1));let d=i.x+l*qt.speed*e,h=i.y+c*qt.speed*e;Et(n,d,h,qt.r)||(i.x=d,i.y=h),i.hasWp=!1}else{let a=Math.min(580,i.mr*2.6);if(o>a+90){let l=Math.atan2(i.my-i.y,i.mx-i.x);i.angle=Ri(i.angle,l,e*4);let c=i.x+Math.cos(i.angle)*qt.speed*e,d=i.y+Math.sin(i.angle)*qt.speed*e;Et(n,c,d,qt.r)||(i.x=c,i.y=d),i.hasWp=!1}else{if(i.wpT-=e,!i.hasWp||i.wpT<=0||te(i.x,i.y,i.wpX,i.wpY)<26){let f=n.rng.rand(0,Ze),u=n.rng.rand(.25*i.mr,a);i.wpX=i.mx+Math.cos(f)*u,i.wpY=i.my+Math.sin(f)*u,i.wpT=n.rng.rand(2.4,6),i.hasWp=!0}let l=Math.atan2(i.wpY-i.y,i.wpX-i.x);i.angle=Ri(i.angle,l,e*3.5);let c=qt.speed*.55,d=i.x+Math.cos(i.angle)*c*e,h=i.y+Math.sin(i.angle)*c*e;Et(n,d,h,qt.r)?i.hasWp=!1:(i.x=d,i.y=h)}}}}var Tg=(n,e)=>{let t=(e-n)%Ze;return t>Math.PI&&(t-=Ze),t<-Math.PI&&(t+=Ze),t};function Ys(n,e){let t=Vn(n,e),i=t&&En(n,t.tcKey);return i?[e.inv,i.store]:[e.inv]}function Vn(n,e){let t=n.teams[e.id];return!t||e.ally?null:t.bases.find(i=>i.tcKey===e.tcKey&&!i.dead)||t.bases.find(i=>!i.dead)||null}function Zr(n,e){let t=e.bases.find(s=>!s.dead),i=t&&En(n,t.tcKey);return i?i.store:null}function wa(n,e,t){if(e<1400||t<1400||e>12424||t>7816||!n.world.onLand(e,t)||n.world.lakeAt(e,t)||n.world.railDist(e,t)<360||n.world.pathDist(e,t)<320||n.world.landFactor(e,t)<.12||te(e,t,n.world.shop.x,n.world.shop.y)<Tt+450)return!1;for(let i of n.world.monuments)if(te(e,t,i.x,i.y)<Tt+200)return!1;for(let i of n.world.lakes)if(te(e,t,i.x,i.y)<i.r+560)return!1;for(let i of n.world.boulders)if(te(e,t,i.x,i.y)<i.r+300)return!1;for(let[i,s]of n.deploys){if(s.type!=="cupboard")continue;let[r,o]=i.split(",").map(Number),a=ht(r,o);if(te(e,t,a.x,a.y)<qi)return!1}return!0}function Ou(n,e,t){if(t.inv.wood+t.inv.stone+t.inv.metal<220)return!1;let s=220;for(let o of["wood","stone","metal"]){let a=Math.min(s,t.inv[o]);if(t.inv[o]-=a,s-=a,s<=0)break}let r=ga(n,e,t.siteX,t.siteY);for(let o of n.units)o.owner===e.owner&&(o.unfounded=!1,o.hx=r.hx,o.hy=r.hy,o.tcKey=r.tcKey,o.doorX=r.doorX,o.doorY=r.doorY,o.doorGy=r.doorGy);return Xe(n,r.hx,r.hy,"base founded","#9ad06a"),!0}function Bu(n,e){let t=n.teams[e.id],i=Vn(n,e);if(!t||!i)return!1;let s=Ys(n,e),r=Eg(n,t.owner,i),o=Ag(n,t.owner,i),a=e.hard?9:5,l=e.hard?10:e.weak?5:8,c=e.hard?49:36;return r<a&&Uu(n,e,t,i,s)||e.primary&&r>=5&&Ta(n,e)||o<l&&Sg(n,e,t,i,s)||e.hard&&_h(n,e,t,i,s)?!0:!e.jack&&Cn.pay(s,{wood:120,metal:60})?(e.jack=!0,Xe(n,e.x,e.y,"+jackhammer","#ffd76b"),!0):(e.hf=!e.hf,!!((e.hf?ku(n,e,t,i,s)||_h(n,e,t,i,s):_h(n,e,t,i,s)||ku(n,e,t,i,s))||r<c&&Uu(n,e,t,i,s)))}function Eg(n,e,t){let i=0;for(let[s,r]of n.structures){if(r.owner!==e)continue;let[o,a]=s.split(",").map(Number),l=ht(o,a);_e(l.x,l.y,t.hx,t.hy)<Ht*Ht&&i++}return i}function Ag(n,e,t){let i=0;for(let[s,r]of n.deploys){if(r.type!=="turret"||r.owner!==e)continue;let[o,a]=s.split(",").map(Number),l=ht(o,a);_e(l.x,l.y,t.hx,t.hy)<Ht*Ht&&i++}return i}function Rg(n,e,t,i,s){let r=et(e,t);if(n.structures.has(r)||n.deploys.has(r))return!1;let o=ht(e,t);if(t>=s.doorGy||bt(n,o.x,o.y)||Xs(n,o.x,o.y)||!n.world.onLand(o.x,o.y)||n.world.lakeAt(o.x,o.y)||Hr(n,o.x,o.y))return!1;for(let l of n.animals)if(!l.dead&&Math.abs(l.x-o.x)<64&&Math.abs(l.y-o.y)<64)return!1;let a=xa(n,i.owner,s.hx,s.hy);if(a){let l=Math.min(a.minx,e),c=Math.max(a.maxx,e),d=Math.min(a.miny,t),h=Math.max(a.maxy,t);if(c-l+1>10||h-d+1>10)return!1}return!0}function Cg(n,e,t){let i=t.split(","),s=+i[1],r=+i[2],o=i[0]==="V"?[[s-1,r],[s,r]]:[[s,r-1],[s,r]];for(let[a,l]of o){if(!n.structures.has(et(a,l)))continue;let c=0;for(let d of[Oe("V",a,l),Oe("V",a+1,l),Oe("H",a,l),Oe("H",a,l+1)]){if(d===t)continue;let h=n.walls.get(d);(!h||h.hp<=0||h.type==="door")&&c++}if(c===0)return!0}return!1}function Uu(n,e,t,i,s){if(!Cn.has(s,{wood:40}))return!1;let r=[];for(let[c,d]of n.structures){if(d.owner!==t.owner)continue;let[h,f]=c.split(",").map(Number),u=ht(h,f);if(!(_e(u.x,u.y,i.hx,i.hy)>Ht*Ht))for(let[p,x]of[[1,0],[-1,0],[0,1],[0,-1]])Rg(n,h+p,f+x,t,i)&&r.push([h+p,f+x])}if(!r.length)return!1;let[o,a]=r[Math.floor(n.rng.next()*r.length)];if(!Cn.pay(s,{wood:40}))return!1;n.structures.set(et(o,a),{type:"floor",mat:"wood",hp:100,max:100,owner:t.owner,hitT:-100});let l=[[Oe("V",o,a),et(o-1,a)],[Oe("V",o+1,a),et(o+1,a)],[Oe("H",o,a),et(o,a-1)],[Oe("H",o,a+1),et(o,a+1)]];for(let[c,d]of l){let h=n.structures.get(d);h&&h.owner===t.owner||n.walls.has(c)||Cg(n,t.owner,c)||n.walls.set(c,{type:"wall",mat:"wood",hp:100,max:100,owner:t.owner,hitT:-100,open:!1})}return ch(n,t,i),n.nav.stamp++,Xe(n,o*64+64/2,a*64+64/2,"+room","#bcd0e0"),!0}function Sg(n,e,t,i,s){if(!Cn.has(s,{wood:40,metal:30}))return!1;let r=xa(n,t.owner,i.hx,i.hy);if(!r)return!1;let o=Math.floor(i.doorX/64),a=[];for(let c=r.miny-1;c<=r.maxy+1;c++)for(let d=r.minx-1;d<=r.maxx+1;d++){let h=et(d,c);if(n.structures.has(h)||n.deploys.has(h)||c>=i.doorGy&&Math.abs(d-o)<=1)continue;let f=ht(d,c);if(bt(n,f.x,f.y)||Xs(n,f.x,f.y)||!n.world.onLand(f.x,f.y)||n.world.lakeAt(f.x,f.y)||Hr(n,f.x,f.y))continue;let u=!1,p=!1;for(let x=-1;x<=1&&!u;x++)for(let m=-1;m<=1;m++){let g=n.structures.get(et(d+m,c+x));if(g&&g.owner===t.owner){u=!0;break}}for(let[x,m]of[[1,0],[-1,0],[0,1],[0,-1]]){let g=n.deploys.get(et(d+x,c+m));if(g&&g.type==="turret"){p=!0;break}}u&&!p&&a.push({gx:d,gy:c,c:f})}if(!a.length)return!1;a.sort((c,d)=>_e(d.c.x,d.c.y,i.doorX,i.doorY)-_e(c.c.x,c.c.y,i.doorX,i.doorY));let l=a[0];return Cn.pay(s,{wood:40,metal:30})?(n.deploys.set(et(l.gx,l.gy),{type:"turret",mat:"wood",hp:150,max:150,owner:t.owner,hitT:-100,tier:e.hard?3:e.weak?1:2,angle:0,cd:0,mag:12,reload:0,ext:!0,scanT:n.rng.rand(.5,4.5)}),n.nav.stamp++,Xe(n,l.c.x,l.c.y,"+turret","#bcd0e0"),!0):!1}var Ig={wood:{mat:"stone",cost:{stone:15}},stone:{mat:"metal",cost:{metal:20}},metal:{mat:"armored",hqm:8}},Pg={wood:{mat:"stone",cost:{stone:12}},stone:{mat:"metal",cost:{metal:16}},metal:{mat:"armored",hqm:6}};function _h(n,e,t,i,s){for(let[r,o]of n.walls){if(o.owner!==t.owner||o.hp<=0)continue;let a=Ig[o.mat];if(a){if(a.hqm){if(e.hqm<a.hqm)continue;e.hqm-=a.hqm}else if(!Cn.pay(s,a.cost))continue;return o.mat=a.mat,o.max=Ei(Qt[o.type],o.mat),o.hp=o.max,Xe(n,e.x,e.y,"+"+a.mat,a.mat==="armored"?"#7f93ad":a.mat==="metal"?"#aeb6bf":"#c2c8cf"),!0}}return!1}function ku(n,e,t,i,s){for(let[r,o]of n.structures){if(o.owner!==t.owner)continue;let a=Pg[o.mat];if(a){if(a.hqm){if(e.hqm<a.hqm)continue;e.hqm-=a.hqm}else if(!Cn.pay(s,a.cost))continue;return o.mat=a.mat,o.max=Ei(Qt[o.type],o.mat),o.hp=o.max,!0}}return!1}function Ta(n,e){let t=n.teams[e.id];if(!t||!e.primary)return!1;let i=e.hard?xt.HIRE_CAP_HARD:xt.HIRE_CAP;if(n.units.filter(d=>d.owner===t.owner&&!d.eliminated).length>=i)return!1;let r=Vn(n,e),o=r&&En(n,r.tcKey),a=xt.WORKER_COST,l=Math.min(a,e.scrap);if(l+(o?o.store.scrap:0)<a)return!1;e.scrap-=l,a-=l,a>0&&(o.store.scrap-=a);let c=Or(n,t,e.hx+n.rng.rand(-46,46),e.hy+n.rng.rand(24,64),!1);return c.hx=e.hx,c.hy=e.hy,c.tcKey=e.tcKey,c.doorX=e.doorX,c.doorY=e.doorY,c.doorGy=e.doorGy,c.unfounded=e.unfounded,Xe(n,c.x,c.y,"+worker hired","#9ad06a"),!0}function Hu(n,e,t){let i=n.units.find(c=>c.owner===e.owner&&c.primary&&!c.eliminated);if(!i||i.unfounded||e.eliminated)return;let s=e.bases.filter(c=>!c.dead);if(!s.length)return;let r=e.hard?4:3,o=Zr(n,e),a=o?o.wood+o.stone+o.metal:0,l=e.brain;if(i.fwdT-=t,l.aggressor&&l.raidTarget&&s.length<r&&a>=170&&i.fwdT<=0){i.fwdT=10;let c=Gn(n,l.raidTarget);if(c&&!s.some(d=>te(d.hx,d.hy,c.hx,c.hy)<2400)){let d=s[0],h=Math.atan2(d.hy-c.hy,d.hx-c.hx);for(let f of[1800,2300,1400,2700]){let u=c.hx+Math.cos(h)*f,p=c.hy+Math.sin(h)*f;if(wa(n,u,p)){Fu(o,200);let x=ga(n,e,u,p);x.kind="raid-forward",Xe(n,u,p,"+raid base","#ffd0a0");return}}}}if(i.expT-=t,i.expT<=0){i.expT=n.rng.rand(50,90);let c=l.attack?160:260;if(s.length>=1&&s.length<r&&a>=c){let d=Dg(n,e,s[0]);if(d){Fu(o,240);let h=ga(n,e,d.x,d.y);h.kind=d.kind,Xe(n,d.x,d.y,"+"+d.kind+" base","#bcd0e0")}}}}function Fu(n,e){if(n)for(let t of["wood","stone","metal"]){let i=Math.min(e,n[t]);if(n[t]-=i,e-=i,e<=0)return}}function Gn(n,e){if(!e)return null;if(e==="player"){for(let[t,i]of n.deploys)if(i.type==="cupboard"&&i.owner===Ke){let[s,r]=t.split(",").map(Number),o=ht(s,r);return{owner:Ke,tcKey:t,hx:o.x,hy:o.y,isPlayer:!0}}return null}return e.bases&&e.bases.find(t=>!t.dead)||null}function Dg(n,e,t){for(let s of n.world.monuments){let r=!1;for(let o of n.teams)if(o.bases.some(a=>!a.dead&&te(a.hx,a.hy,s.x,s.y)<Tt+900)){r=!0;break}if(!r)for(let o=0;o<8;o++){let a=o/8*Math.PI*2,l=s.x+Math.cos(a)*(Tt+320),c=s.y+Math.sin(a)*(Tt+320);if(wa(n,l,c))return{x:l,y:c,kind:"monument"}}}let i=Gn(n,e.brain.raidTarget)||Lg(n,e,t);if(i){let s=Math.atan2(i.hy-t.hy,i.hx-t.hx);for(let r of[1700,2200,1300]){let o=t.hx+Math.cos(s)*r,a=t.hy+Math.sin(s)*r;if(wa(n,o,a))return{x:o,y:a,kind:"raid-forward"}}}for(let s=0;s<10;s++){let r=n.rng.rand(0,Math.PI*2),o=n.rng.rand(qi+200,qi+1600),a=t.hx+Math.cos(r)*o,l=t.hy+Math.sin(r)*o;if(wa(n,a,l))return{x:a,y:l,kind:"survival"}}return null}function Lg(n,e,t){let i=null,s=3e3*3e3;for(let r of n.teams)if(!(r===e||r.eliminated))for(let o of r.bases){if(o.dead)continue;let a=_e(t.hx,t.hy,o.hx,o.hy);a>s&&(s=a,i=o)}return i}function vh(n,e){if(e.ally)return!1;let t=Math.floor(e.x/64),i=Math.floor(e.y/64),s=null,r=-1;for(let[a,l,c]of[[Oe("V",t,i),et(t-1,i),!1],[Oe("V",t+1,i),et(t+1,i),!1],[Oe("H",t,i),et(t,i-1),!1],[Oe("H",t,i+1),et(t,i+1),!0]]){let d=n.walls.get(a);if(!d||d.owner!==e.owner||d.type==="door")continue;let h=(n.structures.has(l)?0:60)+(c?12:0)+n.rng.rand(0,2);h>r&&(r=h,s=a)}if(!s)return!1;let o=n.walls.get(s);return o.type="door",o.open=!0,o.closeT=n.t+1.2,o.lock={by:e.owner},o.hp=Math.max(o.hp,50),o.max=Math.max(o.max,50),n.nav.stamp++,n.metrics.doorCuts=(n.metrics.doorCuts||0)+1,Xe(n,e.x,e.y,"cut a door","#caa46a"),!0}function $r(n){n.path=null,n.pathI=0,n.repathN=0}function Gt(n,e,t,i,s,r={}){let o=r.arrive||16,a=te(e.x,e.y,t,i);if(a<=o)return $r(e),e.progBest=1e9,"arrived";let l=te(e.pathGX,e.pathGY,t,i)>90,c=n.t-e.pathT>3,d=!e.path||n.t-(e.lastPlanT||-1)>.5;if((!e.path||l||c||e.pathI>=e.path.length)&&d){if(e.lastPlanT=n.t,a<192&&kr(n,e.owner,e.x,e.y,t,i))e.path=[{x:t,y:i}],e.pathI=0;else{let M=Lf(n,e.owner,e.x,e.y,t,i);n.metrics.repaths++,M?(e.path=M,e.pathI=0,e.directFallback=!1):(n.metrics.pathFails++,e.path=[{x:t,y:i}],e.pathI=0,e.directFallback=!0)}e.pathGX=t,e.pathGY=i,e.pathT=n.t}let h=e.path[Math.min(e.pathI,e.path.length-1)],f=h.door?12:15;te(e.x,e.y,h.x,h.y)<f&&e.pathI<e.path.length-1&&(e.pathI++,h=e.path[e.pathI]),!h.door&&e.pathI+1<e.path.length&&!e.path[e.pathI+1].door&&n.tick%7===e.tickPhase%7&&kr(n,e.owner,e.x,e.y,e.path[e.pathI+1].x,e.path[e.pathI+1].y)&&(e.pathI++,h=e.path[e.pathI]);let u=r.speed||xt.BOT_SPEED,p=n.world.lakeAt(e.x,e.y);p&&!p.frozen&&(u*=.5);let x=Math.max(1,te(e.x,e.y,h.x,h.y)),m=(h.x-e.x)/x,g=(h.y-e.y)/x,y=Math.min(u*s,x),v=e.x+m*y,w=e.y+g*y,E=e.x,T=e.y,P={passOwner:e.owner,openOwnDoors:!0},_=!1;if(Et(n,e.x,e.y,13,P)?(e.x=v,e.y=w,_=!0):Et(n,v,w,13,P)?(Et(n,v,e.y,13,P)||(e.x=v,_=!0),Et(n,e.x,w,13,P)||(e.y=w,_=!0)):(e.x=v,e.y=w,_=!0),e.x=st(e.x,12,xe.w-12),e.y=st(e.y,12,xe.h-12),e.vx=(e.x-E)/s,e.vy=(e.y-T)/s,_){let M=Math.atan2(g,m);e.angle=e.angle+Ea(e.angle,M)*Math.min(1,s*7)}if(e.progT+=s,e.progT>=.5){e.progT=0;let M=te(e.x,e.y,t,i);if(M<e.progBest-12)e.progBest=M,e.noProgT=0,e.repathN=0;else if(e.noProgT=(e.noProgT||0)+.5,e.noProgT>=1.5){if(e.noProgT=0,e.repathN++,fa(n,e.x,e.y,12),fa(n,e.x+(t>e.x?64:-64),e.y,10),fa(n,e.x,e.y+(i>e.y?64:-64),10),n.metrics.stuckTotal+=1.5,e.path=null,e.lastPlanT=-1,e.repathN===2){let S=Math.atan2(i-e.y,t-e.x)+(e.id%2?1:-1)*Math.PI/2;e.detourX=e.x+Math.cos(S)*220,e.detourY=e.y+Math.sin(S)*220,e.detourT=n.t+2.5}if(e.repathN>=3)return e.repathN=0,e.progBest=1e9,$r(e),n.metrics.stuckLog.push({t:n.t,owner:e.owner,x:e.x|0,y:e.y|0}),"stuck"}}if(e.detourT&&n.t<e.detourT)if(te(e.x,e.y,e.detourX,e.detourY)>20){let S=Math.atan2(e.detourY-e.y,e.detourX-e.x),R=e.x+Math.cos(S)*u*s,L=e.y+Math.sin(S)*u*s;Et(n,R,L,13,P)||(e.x=R,e.y=L)}else e.detourT=0;return!_&&e.path&&e.pathI<e.path.length-1?(e.wpStallT=(e.wpStallT||0)+s,e.wpStallT>.6&&(e.wpStallT=0,e.pathI++)):_&&(e.wpStallT=0),e.gotoTick=n.tick,_?e.stuckT=Math.max(0,e.stuckT-s*2):(e.stuckT+=s,e.state!=="raid"&&(n.metrics.maxStuck=Math.max(n.metrics.maxStuck,e.stuckT))),"moving"}function zu(n,e,t){for(let i of n.units){if(i===e||i.dead||i.eliminated||i.flying||i.owner!==e.owner)continue;let s=_e(e.x,e.y,i.x,i.y);if(s>.01&&s<324){let r=Math.sqrt(s),o=(18-r)*.5*t*6,a=(e.x-i.x)/r*o,l=(e.y-i.y)/r*o;Et(n,e.x+a,e.y+l,13,{passOwner:e.owner})||(e.x+=a,e.y+=l)}}}function Nn(n,e,t,i,s=8){let r=Math.atan2(t-n.y,e-n.x);n.angle=n.angle+Ea(n.angle,r)*Math.min(1,i*s)}var Ea=(n,e)=>{let t=(e-n)%Ze;return t>Math.PI&&(t-=Ze),t<-Math.PI&&(t+=Ze),t};var Vu=xt.BOT_SPEED;function Yu(n,e,t){if(e.eliminated)return;let i=e.ally?null:n.teams[e.id];if(!e.ally&&!e.unfounded){let f=Vn(n,e);if(!f){Zu(n,e,i);return}f.tcKey!==e.tcKey&&$u(n,e,f);let u=En(n,f.tcKey);u&&(u.store.wood=Math.max(u.store.wood,40))}if(e.dead){e.respawnT-=t,e.respawnT<=0&&Ug(n,e,i);return}if(e.gunCd=Math.max(0,e.gunCd-t),e.rkCd=Math.max(0,e.rkCd-t),e.gnCd=Math.max(0,e.gnCd-t),e.fenceCd=Math.max(0,e.fenceCd-t),e.think-=t,e.expandT-=t,e.retaliateT=Math.max(0,e.retaliateT-t),e.disengageT=Math.max(0,e.disengageT-t),e.regenT=Math.max(0,e.regenT-t),e.regenT<=0&&e.hp<e.max&&(e.hp=Math.min(e.max,e.hp+9*t)),e.primary&&!e.unfounded&&!e.ally&&(e.hireT-=t,e.hireT<=0)){e.hireT=2;let f=Vn(n,e),u=f&&En(n,f.tcKey);e.scrap+(u?u.store.scrap:0)>=xt.WORKER_COST+24&&Ta(n,e)}if(e.aboard)if(e.aboard.destroyed||!e.aboard.riders.includes(e))e.aboard=null,e.flying=!1;else{e.flying=!0;return}if(e.flying&&(!e.copter||e.copter.destroyed)&&(e.flying=!1),e.flying&&e.state!=="trade"&&tp(e),e.unfounded){kg(n,e,i,t),Gu(n,e,t);return}e.endgame=n.aliveBases<=xt.ENDGAME_BASES||n.t>xt.ENDGAME_T;let s=i?i.brain:Ng,r=e.retaliateT>0&&_e(e.x,e.y,e.threatX,e.threatY)<xt.REACT_R*xt.REACT_R&&!bt(n,e.x,e.y);(n.tick+e.tickPhase)%9===0||e.thCache===void 0?e.thCache=ep(n,e)||Ah(n,e):e.thCache&&e.thCache.ref&&!e.thCache.ref.dead?(e.thCache.x=e.thCache.ref.x,e.thCache.y=e.thCache.ref.y):e.thCache&&e.thCache.ref&&e.thCache.ref.dead&&(e.thCache=null);let o=r?{x:e.threatX,y:e.threatY,vx:0,vy:0}:e.thCache,a=te(e.x,e.y,e.hx,e.hy);_e(e.x,e.y,n.world.shop.x,n.world.shop.y)<(Tt+140)*(Tt+140)&&(o=null),e.ally&&(e.raidUrge-=t);let l=e.raid&&Gn(n,e.raid),c=e.rocketer&&(e.state==="raid"||e.wasRaid)&&l&&e.rockets>0&&e.hp>=e.max*.2&&!s.urgent,d=o?te(e.x,e.y,o.x,o.y):1e9;switch(o&&!c&&(e.defDuty||r&&!e.wasRaid||s.urgent||e.ally)&&!((e.wasRaid||e.endgame)&&d>=230)&&!(s.aggressor&&d>=160)?(e.state="defend",e.defHold=e.defDuty&&(s.attack||s.urgent)?2.5:.7,e.defTgt={x:o.x,y:o.y,vx:o.vx||0,vy:o.vy||0,ref:o.ref}):e.state==="defend"?(e.defHold-=t,e.defHold<=0&&(e.state="gather",e.defendT=0,e.defTgt=null)):e.state==="raid"&&(!l||i&&s.decaying)?(e.raid=null,e.wasRaid=!1,e.state="gather"):e.defDuty&&(s.attackers>0||s.urgent)&&a>340&&e.state!=="raid"&&e.state!=="trade"?e.state="return":e.state==="gather"&&Fg(n,e,i,s)&&(e.state=Og(n,e,i,s)),e.act=e.state,e.state){case"defend":Vg(n,e,i,s,o,t);break;case"raid":Gg(n,e,i,s,t);break;case"return":qg(n,e,t);break;case"trade":Yg(n,e,i,s,t);break;default:$g(n,e,i,s,t);break}Gu(n,e,t)}var Ng={sealed:!0,decaying:!1,ready:!1,attack:!1,urgent:!1,aggressor:!1,raidTarget:null};function Gu(n,e,t){if(zu(n,e,t),e.gotoTick!==n.tick&&(e.stuckT=Math.max(0,e.stuckT-t)),!e.flying&&(e.state==="gather"||e.state==="raid"||e.state==="return"||e.state==="trade")&&Math.hypot(e.vx,e.vy)>30&&va(n,e,Math.atan2(e.vy,e.vx)),e.directFallback&&e.stuckT>1.5){let i=Math.floor(e.x/64),s=Math.floor(e.y/64),r=n.structures.get(i+","+s);r&&r.owner===e.owner&&vh(n,e)&&($r(e),e.directFallback=!1,e.stuckT=0)}n.metrics.act[e.act]=(n.metrics.act[e.act]||0)+t}function Zu(n,e,t){e.eliminated=!0,e.dead=!0,e.primary&&t&&!t.elimsPosted&&(t.elimsPosted=!0,t.eliminated=!0,n.elims.push({text:"Base "+(e.id+1)+" ELIMINATED",t:30}),n.metrics.elims++)}function $u(n,e,t){e.hx=t.hx,e.hy=t.hy,e.tcKey=t.tcKey,e.doorX=t.doorX,e.doorY=t.doorY,e.doorGy=t.doorGy,$r(e)}function Ug(n,e,t){if(e.ally){e.hp=e.max,e.dead=!1,e.x=e.hx,e.y=e.hy+50,e.state="gather";return}if(!t)return;let i=t.bases.filter(r=>!r.dead);if(!i.length){Zu(n,e,t);return}let s=i[0];if(i.length>1&&!e.primary){let r=Gn(n,t.brain.raidTarget);r&&(e.rocketer||e.wasRaid||e.state==="raid")?s=i.reduce((o,a)=>_e(o.hx,o.hy,r.hx,r.hy)<_e(a.hx,a.hy,r.hx,r.hy)?o:a):s=i[Math.floor(n.rng.next()*i.length)]}$u(n,e,s),e.hp=e.max,e.dead=!1,e.x=s.hx,e.y=s.hy+50,e.state="gather",e.raid=null,e.wasRaid=!1,e.primary&&e.copter&&(e.copter.destroyed=!1,e.copter.hp=e.copter.max,e.copter.x=e.hx-256,e.copter.y=e.hy)}function kg(n,e,t,i){e.act="found";let s=e.inv.wood+e.inv.stone+e.inv.metal,r=ep(n,e);if(r&&!bt(n,e.x,e.y)){ip(n,e,r,i);return}if(e.primary){if(s>=220){if(te(e.x,e.y,e.siteX,e.siteY)<=128){Ou(n,t,e);return}Gt(n,e,e.siteX,e.siteY,i);return}}else if(s>=70)if(te(e.x,e.y,e.siteX,e.siteY)<=192){let a=n.units.find(l=>l.owner===e.owner&&l.primary&&!l.dead);if(a)for(let l of["wood","stone","metal"])a.inv[l]+=e.inv[l],e.inv[l]=0}else{Gt(n,e,e.siteX,e.siteY,i);return}e.act="gather";let o=e.tgtNode;(!o||o.amount<=0)&&(o=Qg(n,e,"wood",2600)||qu(n,e,4e3)||qu(n,e,1e9),e.tgtNode=o),o&&np(n,e,o,i)}function Fg(n,e,t,i){if(e.monRun)return!1;let s=e.inv.wood+e.inv.stone+e.inv.metal;return!!(s>=xt.GATHER_LOAD||e.scrap>40||!e.ally&&t&&(i.breach||i.damaged&&bh(n,e)>=12||e.rocketer&&e.rockets<8&&e.role!=="turtle"&&n.t>=(e.tradeCd||0)&&(e.scrap>=12||s>=100||Th(n,e)>=24)||Ku(n,e,i)||Ju(n,e,i))||e.ally&&e.raidUrge<=0)}function Ku(n,e,t){if(e.ally||e.role==="turtle"||n.t<(e.tradeCd||0)||e.rockets>=(e.primary?12:6))return!1;let i=e.inv.wood+e.inv.stone+e.inv.metal;return(e.scrap>=24||i>=120||e.primary&&Th(n,e)>=48)&&(t.aggressor||Bg(n,e)||t.ready)}function Ju(n,e,t){return!(n.t>120||e.endgame)||n.t<e.raidCd||e.role==="turtle"&&!e.endgame||!(e.rockets>0||e.satchels>0||e.endgame)?!1:e.endgame||t.aggressor?!0:t.ready&&t.raidTarget&&e.raidBias<.72&&Hg(n,e)>=4}function Og(n,e,t,i){let s=e.inv.wood+e.inv.stone+e.inv.metal;if(!e.ally&&t){let r=i.breach;if(r&&bh(n,e)<40)return"gather";let o=te(e.x,e.y,e.hx,e.hy);if(r||i.damaged&&bh(n,e)>=12)return o>180?"return":"gather";if(e.rocketer&&e.rockets<8&&e.role!=="turtle"&&n.t>=(e.tradeCd||0)&&(e.scrap>=12||s>=100||Th(n,e)>=24))return"trade";if(e.scrap>40||s>=xt.GATHER_LOAD)return"return";if(Ku(n,e,i))return"trade";if(Ju(n,e,i)){let a=i.raidTarget;if(n.transports.find(c=>c.owner===e.owner&&!c.destroyed&&c.state!=="fly"&&c.state!=="unload"&&c.riders.length<Zt.seats)){let c=Qu(n,t);c&&(a=c)}if((!a||!Gn(n,a))&&(a=Eh(n,t,e)),a)return e.raid=a,e.raidCd=n.t+2,n.metrics.raidsLaunched++,"raid"}}if(e.ally&&e.raidUrge<=0){let r=zg(n);if(r)return e.raid=r,e.raidUrge=n.rng.rand(24,44),"raid";e.raidUrge=n.rng.rand(8,14)}return"gather"}var bh=(n,e)=>e.inv.wood+ju(n,e,"wood"),Th=(n,e)=>ju(n,e,"scrap");function ju(n,e,t){let i=Vn(n,e),s=i&&En(n,i.tcKey);return s?s.store[t]:0}function Bg(n,e){let t=Vn(n,e),i=t&&En(n,t.tcKey);if(!i)return!1;let s=n.teams[e.id],r=2;for(let o of n.structures.values())o.owner===e.owner&&r++;for(let o of n.deploys.values())o.owner===e.owner&&o.type==="turret"&&r++;return i.store.wood+i.store.stone+i.store.metal>r*.0075*300}function Hg(n,e){let t=0;for(let i of n.structures.values())i.owner===e.owner&&(i.type==="floor"||i.type==="trifloor")&&t++;return t}function Eh(n,e,t){let i=null,s=1e18,r=e.bases.find(a=>!a.dead);if(!r)return null;for(let a of n.teams){if(a===e||a.eliminated)continue;let l=a.bases.find(p=>!p.dead);if(!l)continue;let c=En(n,l.tcKey),d=c?c.store.wood+c.store.stone+c.store.metal:0,h=0;for(let p of n.deploys.values())p.owner===a.owner&&p.type==="turret"&&h++;let f=0;if(e.hard)for(let p of n.units)p.owner===a.owner&&!p.dead&&!p.eliminated&&_e(p.x,p.y,l.hx,l.hy)<720*720&&f++;let u=_e(r.hx,r.hy,l.hx,l.hy)*(1+h*xt.RAID_TUR_W)*(1+f*xt.RAID_DEF_W)/(1+d*.003);u<s&&(s=u,i=a)}let o=Gn(n,"player");return o&&!n.ghost&&_e(r.hx,r.hy,o.hx,o.hy)<s&&(i="player"),i}function zg(n){let e=null,t=1e18;for(let i of n.teams){if(i.eliminated)continue;let s=i.bases.find(o=>!o.dead);if(!s)continue;let r=_e(n.player.x,n.player.y,s.hx,s.hy);r<t&&(t=r,e=i)}return e}function Qu(n,e){let t=e.bases.find(r=>!r.dead);if(!t)return null;let i=null,s=3e3*3e3;for(let r of n.teams){if(r===e||r.eliminated)continue;let o=r.bases.find(l=>!l.dead);if(!o)continue;let a=_e(t.hx,t.hy,o.hx,o.hy);a>s&&(s=a,i=r)}return i}function ep(n,e){if(e.disengageT>0||bt(n,e.x,e.y))return null;let t=null,i=xt.REACT_R*xt.REACT_R,s=n.player,r=(o,a,l,c,d,h)=>{if(d===e.unreach&&n.t<e.unreachT)return;let f=_e(e.x,e.y,o,a);f>=i||h&&f>h*h||bt(n,o,a)||ai(n,e.x,e.y,o,a)||(i=f,t={x:o,y:a,vx:l,vy:c,ref:d})};!e.ally&&!s.dead&&!s.inCopter&&!n.ghost&&r(s.x,s.y,s.vx,s.vy,s);for(let o of n.units)o.owner===e.owner||o.dead||o.flying||o.eliminated||r(o.x,o.y,o.vx,o.vy,o);for(let o of n.animals)!o.dead&&o.aggro&&r(o.x,o.y,o.vx,o.vy,o,360);for(let o of n.guards)o.dead||r(o.x,o.y,0,0,o,480);return t}function Ah(n,e){if(e.disengageT>0||bt(n,e.x,e.y))return null;let t=null,i=430*430,s=n.player,r=(o,a,l,c,d)=>{if(d===e.unreach&&n.t<e.unreachT)return;let h=_e(e.x,e.y,o,a);h>=i||bt(n,o,a)||ai(n,e.x,e.y,o,a)||(i=h,t={x:o,y:a,vx:l,vy:c,ref:d})};!e.ally&&!s.dead&&!s.inCopter&&!n.ghost&&r(s.x,s.y,s.vx,s.vy,s);for(let o of n.units)o.owner===e.owner||o.dead||o.flying||o.eliminated||r(o.x,o.y,o.vx,o.vy,o);for(let o of n.guards)o.dead||r(o.x,o.y,0,0,o);return t}function Vg(n,e,t,i,s,r){e.defendT+=r;let o=s||e.defTgt;if(!o){e.state="gather";return}let a=e.raid&&Gn(n,e.raid),c=e.inv.wood+e.inv.stone+e.inv.metal>60||e.scrap>20,d=e.hp<e.max*.2;if((e.hp<e.max*(c?.45:.28)&&!a||d)&&!e.endgame&&!e.retreat&&n.rng.chance(c?.05:.02)&&(e.retreat=!0),e.retreat)if(e.hp>=e.max*.85||e.defendT>9)e.retreat=!1;else{e.disengageT=Math.max(e.disengageT,2.5),zt(n,e.x,e.y,o.x,o.y)||jr(n,e,o,r),(Gt(n,e,e.hx+e.lane,e.hy+e.hoff,r)==="arrived"||te(e.x,e.y,e.hx,e.hy)<64*1.5)&&(e.retreat=!1,e.state="return");return}ip(n,e,o,r),nx(n,e,o);let f=a?2.2:7;e.defendT>f&&(a?e.state="raid":(e.disengageT=6,e.state="gather"),e.defendT=0)}function Gg(n,e,t,i,s){e.wasRaid=!0,e.act="raid";let r=Gn(n,e.raid);if(!r){e.wasRaid=!1,e.state="return";return}let o=En(n,r.tcKey);if(!o){e.wasRaid=!1,e.state="return";return}if(e.rockets<=0&&e.satchels<=0&&!e.endgame){e.raid=null,e.wasRaid=!1;let m=e.inv.wood+e.inv.stone+e.inv.metal;e.state=e.scrap>=8||m>=100?"trade":"gather";return}if(!e.aboard&&te(e.x,e.y,e.hx,e.hy)<600&&te(r.hx,r.hy,e.hx,e.hy)>2800){let m=n.transports.find(g=>g.owner===e.owner&&!g.destroyed&&(g.state==="idle"||g.state==="board")&&g.riders.length<Zt.seats);if(m){if(te(e.x,e.y,m.x,m.y)<70){ou(n,e,m);return}Gt(n,e,m.x,m.y,s);return}}let a=te(e.x,e.y,r.hx,r.hy),c=n.units.filter(m=>m.owner===e.owner&&m.state==="raid"&&m.raid===e.raid&&!m.dead&&_e(m.x,m.y,r.hx,r.hy)<560*560).length>=2||e.endgame||e.ally;if(e.stagedFor!==e.raid&&(e.staged=!1,e.stagedFor=e.raid),a<700?e.staged=!0:a>1600&&(e.staged=!1),!e.staged){let m=Math.atan2(e.hy-r.hy,e.hx-r.hx),g=(e.id%5-2)*70+e.lane*2,y=r.hx+Math.cos(m)*540+Math.cos(m+Math.PI/2)*g,v=r.hy+Math.sin(m)*540+Math.sin(m+Math.PI/2)*g;Gt(n,e,y,v,s)==="stuck"&&(e.raidCd=n.t+8,e.raid=null,e.wasRaid=!1,e.state="gather");return}if(c&&a<(e.endgame?420:300)&&!zt(n,e.x,e.y,r.hx,r.hy)){Nn(e,r.hx,r.hy,s),o.hp-=(e.endgame?140:e.hard?24:14)*s,o.hitT=n.t,n.rng.chance(.2)&&n.particles.push({x:r.hx+n.rng.rand(-10,10),y:r.hy+n.rng.rand(-10,10),vx:n.rng.rand(-40,40),vy:n.rng.rand(-60,-20),life:.4,max:.4,r:2,col:"#caa24a"}),o.hp<=0&&ah(n,r.tcKey,o,e.owner);return}let d=Wg(n,e,r),h=null,f=null,u=!1;if(d)h=d.c,f=d.key;else{let m=Xg(n,e,t,r);m?(h=m.c,f=m.key,u=m.door):h={x:r.hx,y:r.hy}}let p=te(e.x,e.y,h.x,h.y);if(e.rockets>0){if(a>=xt.ROCKET_MIN&&a<460&&!zt(n,e.x,e.y,r.hx,r.hy)){Nn(e,r.hx,r.hy,s),wh(n,e,r.hx,r.hy,2.2);return}if(p>380){let m=Math.atan2(e.y-h.y,e.x-h.x),g=(e.id%5-2)*70,y=h.x+Math.cos(m)*320+Math.cos(m+Math.PI/2)*g,v=h.y+Math.sin(m)*320+Math.sin(m+Math.PI/2)*g;Gt(n,e,y,v,s),Wu(n,e,r)}else if(p<xt.ROCKET_MIN){let m=Math.atan2(e.y-h.y,e.x-h.x),g=e.x+Math.cos(m)*120*s,y=e.y+Math.sin(m)*120*s;Et(n,g,y,13,{passOwner:e.owner})||(e.x=g,e.y=y)}else Nn(e,h.x,h.y,s),wh(n,e,h.x,h.y,2.2);return}if(e.satchels>0&&c){p<100?e.rkCd<=0&&(n.satchels.push({x:h.x,y:h.y,t:2,from:e.owner}),e.satchels--,e.rkCd=2.6,Xe(n,e.x,e.y,"satchel!","#ffd0a0")):(Gt(n,e,h.x,h.y,s,{arrive:80}),Wu(n,e,r));return}let x=Ah(n,e);if(x)te(e.x,e.y,x.x,x.y)<480?(Nn(e,x.x,x.y,s),jr(n,e,x,s)):Gt(n,e,x.x,x.y,s);else if(c){let m=Math.atan2(e.hy-r.hy,e.hx-r.hx),g=(e.id%5-2)*64;Gt(n,e,h.x+Math.cos(m)*380+Math.cos(m+Math.PI/2)*g,h.y+Math.sin(m)*380+Math.sin(m+Math.PI/2)*g,s,{arrive:40})}else if(p<380){let m=Math.atan2(e.y-h.y,e.x-h.x),g=e.x+Math.cos(m)*Vu*s,y=e.y+Math.sin(m)*Vu*s;Et(n,g,y,13,{passOwner:e.owner})||(e.x=g,e.y=y)}else Gt(n,e,h.x,h.y,s,{arrive:340})}function Wg(n,e,t){let i=null,s=1e18;for(let[r,o]of n.deploys){if(o.type!=="turret"||o.owner!==t.owner)continue;let[a,l]=r.split(",").map(Number),c=ht(a,l),d={1:340,2:380,3:460}[o.tier||1]+60,h=_e(e.x,e.y,c.x,c.y);h<d*d&&!zt(n,e.x,e.y,c.x,c.y)&&h<s&&(s=h,i={key:r,c})}return i}function Xg(n,e,t,i){for(let f of n.units)if(!(f.owner!==e.owner||f.dead||f.raid!==e.raid)&&_e(f.x,f.y,i.hx,i.hy)<760*760&&!zt(n,f.x,f.y,i.hx,i.hy))return null;let s=t?t.brain:null;if(s&&s.breachKey&&n.t-s.breachT<1.5){let f=n.walls.get(s.breachKey);if(f&&f.hp>0&&!(f.type==="door"&&f.open)){let u=Aa(n,s.breachKey,f);return{key:s.breachKey,c:u,door:f.type==="door"}}}let r=0,o=0,a=0;for(let f of n.units)f.owner===e.owner&&f.raid===e.raid&&!f.dead&&(r+=f.x,o+=f.y,a++);a||(r=e.x,o=e.y,a=1),r/=a,o/=a;let l=null,c=1e18,d=!1;for(let[f,u]of n.walls){if(u.owner!==i.owner||u.hp<=0||u.type==="door"&&u.open)continue;let p=Aa(n,f,u);if(_e(p.x,p.y,i.hx,i.hy)>Ht*Ht)continue;let x=(te(r,o,p.x,p.y)+te(p.x,p.y,i.hx,i.hy))*(u.type==="door"?.6:1);x<c&&(c=x,l=f,d=u.type==="door")}if(!l)return null;s&&(s.breachKey=l,s.breachT=n.t);let h=n.walls.get(l);return{key:l,c:Aa(n,l,h),door:d}}function Aa(n,e,t){let i=e.split(","),s=+i[1],r=+i[2];return i[0]==="V"?{x:s*64,y:r*64+64/2}:{x:s*64+64/2,y:r*64}}function Wu(n,e,t){let i=null,s=57600,r=!1;for(let[a,l]of n.walls){if(l.owner!==t.owner||l.hp<=0||l.type==="door"&&l.open)continue;let c=Aa(n,a,l),d=_e(e.x,e.y,c.x,c.y),h=l.type==="door";(d<s||h&&!r&&d<57600)&&(h||!r)&&(s=d,i=c,r=h)}if(!i||e.rkCd>0)return;let o=te(e.x,e.y,i.x,i.y);e.rockets>0&&o>=xt.ROCKET_MIN?(Nn(e,i.x,i.y,1),wh(n,e,i.x,i.y,2.2)):o<90&&e.satchels>0&&(n.satchels.push({x:i.x,y:i.y,t:3,from:e.owner}),e.satchels--,e.rkCd=4.5)}function qg(n,e,t){e.wasRaid=!1,e.act="return",e.retT+=t;let i=Gt(n,e,e.hx+e.lane,e.hy+e.hoff,t,{arrive:64*1.5});if(i==="arrived"){Jr(n,e),e.state="gather",e.retT=0;return}if(i==="stuck"||e.retT>14){let s=e.ally?null:n.teams[e.id],r=s&&Vn(n,e);s&&r&&Vr(n,s,r)?i==="stuck"&&vh(n,e):(Jr(n,e),e.state="gather",e.retT=0)}}function Jr(n,e){if(e.ally){for(let s of["wood","stone","metal"])n.inv[s]+=e.inv[s],e.inv[s]=0;n.inv.scrap+=e.scrap,e.scrap=0;return}let t=Vn(n,e),i=t&&En(n,t.tcKey);if(i){for(let s of["wood","stone","metal"])i.store[s]+=e.inv[s],e.inv[s]=0;i.store.scrap+=e.scrap,e.scrap=0}}function Yg(n,e,t,i,s){e.act="trade";let r=n.world.shop;if(!r){e.state="return";return}let o=(e.id>=0?e.id:3)+(e.tradeJitter||0),a=r.x+Math.cos(o*2.39996)*Tt*.34,l=r.y+Math.sin(o*2.39996)*Tt*.34;if(!e.tradeDone){if(te(e.x,e.y,r.x,r.y)>Tt*.55){if(e.copter&&!e.copter.destroyed){Xu(n,e,a,l,s,Tt*.5);return}Gt(n,e,a,l,s,{arrive:30})==="stuck"&&(e.tradeCd=n.t+20,e.tradeJitter=(e.tradeJitter||0)+1,e.state="return");return}Zg(n,e,t,i),e.tradeDone=!0;return}if(e.flying){Xu(n,e,e.hx-256,e.hy,s,46)&&(tp(e),e.tradeDone=!1,e.state="return");return}e.tradeDone=!1,e.state="return"}function Zg(n,e,t,i){let s=0;for(;e.inv.wood>=100;)e.inv.wood-=100,e.scrap+=6,s+=6;for(;e.inv.stone>=100;)e.inv.stone-=100,e.scrap+=9,s+=9;for(;e.inv.metal>=50;)e.inv.metal-=50,e.scrap+=10,s+=10;s>0&&Xe(n,e.x,e.y,"+"+s+" scrap","#ffe07a");let r=Vn(n,e),o=r&&En(n,r.tcKey);if(o){if(e.primary)e.scrap+=o.store.scrap,o.store.scrap=0;else if(e.rocketer){let c=Math.max(0,o.store.scrap-100);e.scrap+=c,o.store.scrap-=c}}let a=!1;for(e.primary&&t&&e.scrap>=Zt.cost&&!n.transports.some(c=>c.owner===e.owner&&!c.destroyed)&&Qu(n,t)&&(e.scrap-=Zt.cost,ru(n,t,e),a=!0),!e.weak&&e.gun==="pistol"&&e.scrap>=10&&(e.scrap-=10,e.gun=e.shotgun?"shotgun":"rifle",Xe(n,e.x,e.y,"+"+e.gun,"#bfe3ff"),a=!0),e.hard&&e.gun==="rifle"&&!e.rifleLaser&&e.scrap>=10&&(e.scrap-=10,e.rifleLaser=!0,Xe(n,e.x,e.y,"+laser","#ff6a6a"),a=!0);e.rockets<2&&e.scrap>=12;)e.scrap-=12,e.rockets++,a=!0;if(e.primary&&e.rockets>=2)for(;e.scrap>=xt.WORKER_COST&&Ta(n,e);)a=!0;for(;e.rockets<12&&e.scrap>=12;)e.scrap-=12,e.rockets++,a=!0;for(;e.satchels<4&&e.scrap>=8;)e.scrap-=8,e.satchels++,a=!0;if(e.grenades<2&&e.scrap>=8&&(e.scrap-=8,e.grenades++,a=!0),e.hard){for(;e.scrap>=14&&e.bodyArmor<3;)e.scrap-=14,e.bodyArmor++,Xe(n,e.x,e.y,"+armor","#9fb0c8"),a=!0;for(;e.scrap>=12&&e.facemask<3;)e.scrap-=12,e.facemask++,a=!0;for(;e.scrap>=20&&e.hqm<60;)e.scrap-=14,e.hqm+=10,a=!0}let l=n.units.filter(c=>c.owner===e.owner&&c.copter&&!c.copter.destroyed).length;(!e.copter||e.copter.destroyed)&&!e.aboard&&e.scrap>=xt.MINICOPTER_COST&&l<(e.hard?3:2)&&(e.scrap-=xt.MINICOPTER_COST,e.copter={x:e.x-128,y:e.y,angle:0,rotor:0,spin:0,vx:0,vy:0,hp:160,max:160,destroyed:!1},Xe(n,e.x,e.y,"+minicopter","#bfe3ff"),a=!0),a&&Xe(n,e.x,e.y-16,"resupplied","#bfe3ff")}function Xu(n,e,t,i,s,r=44){let o=e.copter;if(!o||o.destroyed)return!0;e.flying||(o.x=e.x,o.y=e.y,e.flying=!0,e.flyT=0),e.flyT=(e.flyT||0)+s;let a=te(o.x,o.y,t,i);if(a<r||e.flyT>9)return e.flyT>9&&(o.x=t,o.y=i,o.vx=o.vy=0),e.x=o.x,e.y=o.y,!0;let l=Math.atan2(i-o.y,t-o.x);o.angle=o.angle+Ea(o.angle,l)*Math.min(1,s*4),o.rotor+=s*46;let c=a>160?1:Math.max(.12,a/160);o.vx+=Math.cos(o.angle)*vt.accel*c*s,o.vy+=Math.sin(o.angle)*vt.accel*c*s;let d=Math.pow(vt.drag,s);o.vx*=d,o.vy*=d;let h=Math.hypot(o.vx,o.vy);return h>vt.speed&&(o.vx*=vt.speed/h,o.vy*=vt.speed/h),o.x=st(o.x+o.vx*s,vt.r,xe.w-vt.r),o.y=st(o.y+o.vy*s,vt.r,xe.h-vt.r),e.x=o.x,e.y=o.y,!1}function tp(n){n.copter&&(n.copter.x=n.x,n.copter.y=n.y,n.copter.vx=0,n.copter.vy=0,n.copter.spin=0),n.flying=!1}function $g(n,e,t,i,s){e.wasRaid=!1,e.retT=0;let r=e.inv.wood+e.inv.stone+e.inv.metal,o=te(e.x,e.y,e.hx,e.hy),a=o<200;e.gathering=!1;let l=t&&Vn(n,e);if(e.buildDuty&&t&&l){let h=Vr(n,t,l);if(h){if(e.act="build",o>200){Gt(n,e,e.hx+e.lane,e.hy+e.hoff,s);return}r>0&&Jr(n,e),hh(n,t,h,Ys(n,e))&&(Xe(n,e.x,e.y,"sealed","#9ad06a"),e.maintT=n.t);return}if(a){r>0&&Jr(n,e);let f=ya(n,t,l);if(f&&Wf(n,t,f,Ys(n,e))){e.act="build",e.maintT=n.t,Xe(n,e.x,e.y,"repaired","#9ad06a");return}if(e.expandT<=0&&(e.expandT=n.rng.rand(2.5,6),Bu(n,e))){e.act="build",e.maintT=n.t;return}}}if(a&&t&&l&&((r>100||e.scrap>0)&&Jr(n,e),i.breach&&hh(n,t,i.breach,Ys(n,e))&&(i.breach=null,i.sealed=!0,e.maintT=n.t,Xe(n,e.x,e.y,"sealed","#9ad06a"))),e.qRun){let h=n.quarry;if(!h||h.owner===e.owner||n.t>e.qRun.until)e.qRun=null;else{e.act="quarry";let f=Ah(n,e),u=te(e.x,e.y,h.x,h.y);if(f&&u<h.r){Nn(e,f.x,f.y,s,10),jr(n,e,f,s);return}u>h.r*.5&&Gt(n,e,h.x,h.y,s,{arrive:h.r*.4})==="stuck"&&(e.qRun=null);return}}if(e.lootRun){let h=e.lootRun,f=n.t<h.until;if(h.kind==="crate"&&(f=f&&!!n.lockedCrate),h.kind==="airdrop"){let u=te(e.x,e.y,h.x,h.y);(u<2200&&n.airdrop||!n.airdrop&&u<480)&&(f=!1)}if(h.kind==="pile"&&(te(e.x,e.y,h.x,h.y)<480?f=!1:n.loot.some(p=>(p.kind==="rocket"||p.kind==="satchel")&&_e(p.x,p.y,h.x,h.y)<300*300)||(f=!1)),!f)e.lootRun=null;else{e.act="loot",h.kind==="crate"&&n.lockedCrate&&te(e.x,e.y,n.lockedCrate.x,n.lockedCrate.y)<=90||Gt(n,e,h.x,h.y,s,{arrive:80,speed:170})==="stuck"&&(e.lootRun=null);return}}if(e.lootSkipSet&&n.t>e.lootSkipT&&(e.lootSkipSet=null),e.lootTgt&&(!n.loot.includes(e.lootTgt)||_e(e.x,e.y,e.lootTgt.x,e.lootTgt.y)>560*560)&&(e.lootTgt=null),!e.lootTgt){let h=null,f=520*520;for(let u of n.loot){if(e.lootSkipSet&&e.lootSkipSet.has(u))continue;let p=_e(e.x,e.y,u.x,u.y);p<f&&(f=p,h=u)}e.lootTgt=h}if(e.lootTgt){e.act="loot",(Gt(n,e,e.lootTgt.x,e.lootTgt.y,s,{arrive:22,speed:170})==="stuck"||e.directFallback&&e.stuckT>2)&&(e.lootSkipSet||(e.lootSkipSet=new Set),e.lootSkipSet.add(e.lootTgt),e.lootSkipT=n.t+25,e.lootTgt=null);return}if(n.airdrop&&n.t>(e.airdropCd||0)&&_e(e.x,e.y,n.airdrop.x,n.airdrop.gy)<2600*2600){let h=n.airdrop;e.act="airdrop";let f=h.fall<1?h.gy:h.y,u=te(e.x,e.y,h.x,f);if(h.fall>=1&&u<150){Nn(e,h.x,h.y,s,10),e.gunCd<=0&&Ra(n,e,h.x,h.y);return}if(u>130){Gt(n,e,h.x,f,s,{arrive:120,speed:165})==="stuck"&&(e.airdropCd=n.t+25);return}return}if(n.lockedCrate&&!e.buildDuty&&n.t>(e.crateCd||0)&&_e(e.x,e.y,n.lockedCrate.x,n.lockedCrate.y)<1600*1600){let h=n.lockedCrate;if(e.act="crate",te(e.x,e.y,h.x,h.y)>90){Gt(n,e,h.x,h.y,s,{arrive:80,speed:165})==="stuck"&&(e.crateCd=n.t+30);return}return}if(!e.endgame){if(e.monRun){let h=Mh(n,e),f=h&&Kr(n,h);if(e.monRunT+=s,!f||r>=340||e.monRunT>12)e.monRun=!1,e.monCd=n.t+n.rng.rand(60,110);else{e.act="monument";let u=ex(n,h);if(u&&_e(e.x,e.y,h.x,h.y)<(h.r+320)*(h.r+320)){te(e.x,e.y,u.x,u.y)>340||zt(n,e.x,e.y,u.x,u.y)?Gt(n,e,u.x,u.y,s,{arrive:300})==="stuck"&&(e.monRun=!1,e.monCd=n.t+30):(Nn(e,u.x,u.y,s,10),jr(n,e,{x:u.x,y:u.y,ref:u},s));return}let p=Kr(n,h);if(p){te(e.x,e.y,p.x,p.y)>120?Gt(n,e,p.x,p.y,s,{arrive:110,speed:150})==="stuck"&&(e.monRun=!1,e.monCd=n.t+14):(Nn(e,p.x,p.y,s,10),e.gunCd<=0&&Ra(n,e,p.x,p.y));return}}}else if(n.t>e.monCd&&r<200){let h=Mh(n,e);h&&Kr(n,h)&&(_e(h.x,h.y,e.hx,e.hy)<2100*2100||_e(h.x,h.y,e.x,e.y)<1300*1300)&&(e.monRun=!0,e.monRunT=0)}}let c=Mh(n,e);c&&_e(e.x,e.y,c.x,c.y)<(c.r+150)*(c.r+150)&&!e.monRun?(e.monStay+=s,e.monStay>10&&(e.monStay=0,e.monCd=n.t+45,e.tgtNode=null)):e.monStay=Math.max(0,e.monStay-2*s);let d=Kg(n,e);if(d){np(n,e,d,s);return}if(c&&Kr(n,c)&&n.t>e.monCd){let h=Kr(n,c);e.act="monument",te(e.x,e.y,h.x,h.y)>120?Gt(n,e,h.x,h.y,s,{arrive:110,speed:150})==="stuck"&&(e.monCd=n.t+30):(Nn(e,h.x,h.y,s,10),e.gunCd<=0&&Ra(n,e,h.x,h.y));return}e.act="roam",tx(n,e,s)}function np(n,e,t,i){if(te(e.x,e.y,t.x,t.y)>t.r+22){e.act="toNode",Gt(n,e,t.x,t.y,i,{arrive:t.r+18})==="stuck"&&((!e.skipSet||n.t>e.skipT)&&(e.skipSet=new Set),e.skipSet.add(t),e.skipT=n.t+10,e.tgtNode=null);return}if(e.act="gather",e.gathering=!0,Nn(e,t.x,t.y,i),e.swing+=i*9,e.think<=0){e.think=.5;let r=Math.min(e.jack?24:8,t.amount);r>0&&(t.amount-=r,t.regen=0,e.inv[t.base]+=r,n.events.push({type:"harvest",x:t.x,y:t.y,kind:t.base,jack:e.jack}))}}function Kg(n,e){if(e.tgtNode){let i=e.tgtNode,s=i.by&&i.by!==e&&!i.by.dead&&n.t-i.byT<3;if(i.amount>0&&!s)return i.by=e,i.byT=n.t,i;e.tgtNode=null}let t=[1400,2800,5600,1e9];for(let i of t){let s=null,r=1e18;for(let o of n.resources){if(o.amount<=0||e.skipSet&&e.skipSet.has(o)&&n.t<e.skipT)continue;let a=_e(o.x,o.y,e.hx,e.hy);if(a<57600||a>i*i||o.by&&o.by!==e&&!o.by.dead&&n.t-o.byT<2.5||n.structures.has(Jg(o.x,o.y)))continue;let l=_e(e.x,e.y,o.x,o.y);l*=jg(n,e,o)?1:6,l<r&&(r=l,s=o)}if(s)return s.by=e,s.byT=n.t,e.tgtNode=s,s}return null}var Jg=(n,e)=>Math.floor(n/64)+","+Math.floor(e/64);function jg(n,e,t){return t._losT&&n.t-t._losT<2&&t._losFor===e||(t._los=Nf(n,e.x,e.y,t.x,t.y),t._losT=n.t,t._losFor=e),t._los}function qu(n,e,t){let i=null,s=t*t;for(let r of n.resources){if(r.amount<=0)continue;let o=_e(e.x,e.y,r.x,r.y);o<s&&(s=o,i=r)}return i}function Qg(n,e,t,i){let s=null,r=i*i;for(let o of n.resources){if(o.amount<=0||o.base!==t)continue;let a=_e(e.x,e.y,o.x,o.y);a<r&&(r=a,s=o)}return s}function Mh(n,e){let t=null,i=1e18;for(let s of n.world.monuments){if(s.type==="quarry")continue;let r=_e(e.x,e.y,s.x,s.y);r<i&&(i=r,t=s)}return t}function Kr(n,e){for(let t of n.barrels)if(!(t.hp<=0||t.tier!=="mon")&&_e(t.x,t.y,e.x,e.y)<(e.r+220)*(e.r+220))return t;return null}function ex(n,e){let t=null,i=(e.r+280)*(e.r+280);for(let s of n.guards){if(s.dead)continue;let r=_e(s.x,s.y,e.x,e.y);r<i&&(i=r,t=s)}return t}function tx(n,e,t){if(!e.roamX||te(e.x,e.y,e.roamX,e.roamY)<140||n.t>(e.roamT||0))for(let i=0;i<12;i++){let s=n.rng.rand(800,xe.w-800),r=n.rng.rand(800,xe.h-800);if(!(!n.world.onLand(s,r)||n.world.lakeAt(s,r))){e.roamX=s,e.roamY=r,e.roamT=n.t+n.rng.rand(7,13);break}}e.roamX&&Gt(n,e,e.roamX,e.roamY,t,{speed:140,arrive:120})==="stuck"&&(e.roamX=0)}function ip(n,e,t,i){e.hp<e.max*.35&&ix(n,e,t);let s=t.x,r=t.y;if(e.hard&&(t.vx||t.vy)){let l=e.weak?1150:1500,c=Math.min(.7,te(e.x,e.y,t.x,t.y)/l);s+=(t.vx||0)*c,r+=(t.vy||0)*c}let o=te(e.x,e.y,t.x,t.y);if(!zt(n,e.x,e.y,t.x,t.y)&&!ai(n,e.x,e.y,t.x,t.y)&&o<460){if(Nn(e,s,r,i,10),jr(n,e,{x:s,y:r,ref:t.ref},i),o<140?e.backoff=!0:o>180&&(e.backoff=!1),e.backoff){let l=Math.atan2(e.y-t.y,e.x-t.x),c=e.x+Math.cos(l)*120*i,d=e.y+Math.sin(l)*120*i;Et(n,c,d,13,{passOwner:e.owner})||(e.x=c,e.y=d,e.path=null)}else if(e.regenT>0||e.retaliateT>0){e.strafeT-=i,e.strafeT<=0&&(e.strafeT=xt.STRAFE_FLIP,e.strafeS=-e.strafeS);let l=Math.atan2(t.y-e.y,t.x-e.x)+Math.PI/2*e.strafeS,c=e.x+Math.cos(l)*120*i,d=e.y+Math.sin(l)*120*i;Et(n,c,d,13,{passOwner:e.owner})||(e.x=c,e.y=d,e.path=null)}}else Gt(n,e,t.x,t.y,i,{arrive:380})==="stuck"&&(e.disengageT=4,e.retaliateT=0,e.defHold=0,e.defTgt=null,e.thCache=null,t.ref&&(e.unreach=t.ref,e.unreachT=n.t+25))}function jr(n,e,t,i){e.gunCd>0||e.flying||e.dead||bt(n,e.x,e.y)||bt(n,t.x,t.y)||zt(n,e.x,e.y,t.x,t.y)||ai(n,e.x,e.y,t.x,t.y)||Ra(n,e,t.x,t.y)}function Ra(n,e,t,i){let s=te(e.x,e.y,t,i),r=Math.atan2(i-e.y,t-e.x);e.angle=r;let o=18;if(e.gun==="shotgun"&&s<420){e.gunCd=.34;for(let a=0;a<6;a++)Ln(n,{x:e.x+Math.cos(r)*o,y:e.y+Math.sin(r)*o,angle:r+n.rng.rand(-.18,.18),speed:1050,dmg:8,from:e.owner,life:.95})}else if(e.gun==="rifle"){e.gunCd=e.hard?.12:.16;let a=e.hard?.02:.055;e.rifleLaser&&(a*=.45),Ln(n,{x:e.x+Math.cos(r)*o,y:e.y+Math.sin(r)*o,angle:r+n.rng.rand(-a,a),speed:1500,dmg:e.hard?13:11,from:e.owner,life:1.6})}else e.gunCd=.3,Ln(n,{x:e.x+Math.cos(r)*o,y:e.y+Math.sin(r)*o,angle:r+n.rng.rand(-.1,.1),speed:1150,dmg:7,from:e.owner,life:1.6});n.events.push({type:"botShot",x:e.x,y:e.y,a:r})}function wh(n,e,t,i,s){if(e.rkCd>0||e.rockets<=0||te(e.x,e.y,t,i)<xt.ROCKET_MIN||bt(n,e.x,e.y))return!1;e.rkCd=s||2.4,e.rockets--;let r=Math.atan2(i-e.y,t-e.x);return Gr(n,e.x+Math.cos(r)*22,e.y+Math.sin(r)*22,r,e.owner),!0}function nx(n,e,t){if(e.grenades<=0||e.gnCd>0)return;let i=te(e.x,e.y,t.x,t.y);if(i<150||i>380)return;let s=!1,r=n.player;if(!r.dead&&_e(t.x,t.y,r.x,r.y)<4900&&(s=!0),!s){for(let l of n.units)if(!l.dead&&l.owner!==e.owner&&_e(t.x,t.y,l.x,l.y)<4900){s=!0;break}}if(!s)return;e.gnCd=n.rng.rand(5,8),e.grenades--;let o=Math.atan2(t.y-e.y,t.x-e.x),a=Math.min(420,i)*5.4;n.grenades.push({x:e.x+Math.cos(o)*22,y:e.y+Math.sin(o)*22,vx:Math.cos(o)*a*.2,vy:Math.sin(o)*a*.2,t:zs.fuse,from:e.owner,bob:0}),Xe(n,e.x,e.y,"grenade!","#ffd0a0")}function ix(n,e,t){if(e.fenceCd>0)return;let i=Ys(n,e),s=0;for(let f of i)s+=f.wood||0;if(s<10)return;let r=Math.atan2(t.y-e.y,t.x-e.x),o=e.x+Math.cos(r)*30,a=e.y+Math.sin(r)*30,l=Math.floor(o/64),c=Math.floor(a/64);if(n.structures.has(l+","+c))return;let d=10;for(let f of i){let u=Math.min(d,f.wood||0);if(f.wood-=u,d-=u,d<=0)break}let h=r+Math.PI/2;n.fences.push({x:o,y:a,a:h,owner:e.owner,hp:200,max:200,t:60,x0:o-Math.cos(h)*23,y0:a-Math.sin(h)*23,x1:o+Math.cos(h)*23,y1:a+Math.sin(h)*23}),n.fences.length>120&&n.fences.shift(),n.needFenceRefresh=!0,e.fenceCd=9}function sp(n,e){for(let[o,a]of n.walls)a.type==="door"&&a.open&&a.closeT!==void 0&&n.t>a.closeT&&(a.open=!1,n.nav.stamp++);let t=0;for(let o of n.teams)o.eliminated||(o.bases.some(a=>!a.dead)||n.units.some(a=>a.owner===o.owner&&a.unfounded&&!a.eliminated))&&t++;if(n.aliveBases=t,n.dbSweepT-=e,n.dbSweepT<=0){n.dbSweepT=2;for(let o of n.teams)for(let a of o.bases)!a.dead&&!En(n,a.tcKey)&&(a.dead=!0),a.dead&&!a.cleared&&(a.cleared=!0,lh(n,o.owner,a.hx,a.hy))}if(n.aggroT-=e,n.aggroT<=0){let o=n.teams.find(l=>l.owner===n.aggressorOwner);if(o&&!o.eliminated&&o.brain.raidTarget&&Gn(n,o.brain.raidTarget)&&n.units.some(l=>l.owner===o.owner&&!l.dead&&!l.eliminated))n.aggroT=8;else{let l=n.teams.filter(c=>!c.eliminated&&n.units.some(d=>d.owner===c.owner&&d.primary&&!d.eliminated));if(l.length){let c=l[Math.floor(n.rng.next()*l.length)];n.aggressor=c.id,n.aggressorOwner=c.owner}n.aggroT=n.rng.rand(35,55)}}n.roleT-=e;let i=n.roleT<=0;i&&(n.roleT=.4);for(let o of n.teams){if(o.eliminated)continue;let a=o.brain,l=o.bases.filter(M=>!M.dead);if(!l.length)continue;let c=n.units.find(M=>M.owner===o.owner&&M.primary&&!M.eliminated);if(a.statusT-=e,a.statusT<=0){a.statusT=.5;let M=l[0];a.breach=Vr(n,o,M),a.damaged=ya(n,o,M),a.sealed=!a.breach;let S=2,R=0,L=0;for(let B of n.structures.values())B.owner===o.owner&&(S++,L++);for(let B of n.deploys.values())B.owner===o.owner&&B.type==="turret"&&(S++,R++);let W=Zr(n,o),X=W?W.wood+W.stone+W.metal:0;a.decaying=X<S*Lr*150;let N=o.hard?4:o.weak?2:3;a.ready=a.sealed&&R>=N&&X>S*Lr*300&&L>=(o.hard?6:4),a.floors=L,a.turrets=R}if(!i)continue;let d=n.units.filter(M=>M.owner===o.owner&&!M.eliminated&&!M.dead&&!M.flying&&!M.unfounded&&!M.aboard),h=(M,S)=>l.some(R=>_e(M,S,R.hx,R.hy)<720*720),f=0,u=0,p=0,x=n.player;!x.dead&&!x.inCopter&&!n.ghost&&h(x.x,x.y)&&(f++,u+=x.x,p+=x.y);for(let M of n.units)M.owner===o.owner||M.dead||M.flying||M.eliminated||h(M.x,M.y)&&(f++,u+=M.x,p+=M.y);let m=!1;for(let M of n.rockets)if(M.from!==o.owner&&h(M.x,M.y)){m=!0;break}if(!m){for(let M of n.satchels)if(M.from!==o.owner&&h(M.x,M.y)){m=!0;break}}a.attackers=f,a.urgent=m,a.attack=f>0||n.units.some(M=>M.raid===o&&M.state==="raid"&&!M.dead),a.aggressor=o.owner===n.aggressorOwner||n.aliveBases<=3;let g=0;if(o.hard)for(let M of n.units)M.owner===o.owner||M.dead||M.eliminated||M.state==="raid"&&M.raid===o&&l.some(S=>_e(M.x,M.y,S.hx,S.hy)<1400*1400)&&g++;let y=Math.max(f,g),v=m?d.length:y>0?Math.min(y+1,d.length):0;f>0?(u/=f,p/=f):(u=l[0].hx,p=l[0].hy);let w=[...d].sort((M,S)=>_e(M.x,M.y,u,p)-_e(S.x,S.y,u,p));for(let M=0;M<w.length;M++)w[M].defDuty=M<v;let E=Zr(n,o);(!a.sealed||E&&E.wood>=40&&a.floors<(o.hard?49:36))&&(a.buildHoldT=n.t+6);let P=d.filter(M=>!M.defDuty),_=null;n.t<a.buildHoldT&&P.length>=2&&(_=P.find(M=>M.buildDuty)||P.reduce((M,S)=>_e(M.x,M.y,l[0].hx,l[0].hy)<_e(S.x,S.y,l[0].hx,l[0].hy)?M:S,P[0]));for(let M of d)M.buildDuty=M===_;if(m||f>0&&!a.aggressor){a.raidTarget=null;for(let M of d)M.rocketer=!1}else if(a.ready||a.aggressor){let M=0;for(let N of d)M+=N.rockets+N.satchels;let S=d.filter(N=>!N.defDuty&&!N.buildDuty),R=Math.min(n.aliveBases<=4?3:2,S.length),L=S.filter(N=>N.rocketer);for(let N of d)N.rocketer&&(N.defDuty||N.buildDuty)&&(N.rocketer=!1,L=L.filter(B=>B!==N));if(L.length<R){let N=S.filter(B=>!B.rocketer).sort((B,Y)=>Y.rockets+Y.satchels-(B.rockets+B.satchels)||_e(B.x,B.y,l[0].hx,l[0].hy)-_e(Y.x,Y.y,l[0].hx,l[0].hy));for(let B of N){if(L.length>=R)break;B.rocketer=!0,L.push(B)}}let W=a.aggressor?2:4,X=d.filter(N=>!N.defDuty).length;c&&X>=2&&M>=W?(!a.raidTarget||!Gn(n,a.raidTarget))&&(a.raidTarget=Eh(n,o,c)):a.raidTarget=null}else{a.raidTarget=null;for(let M of d)M.rocketer=!1}if(o.hard&&n.t>a.lootCd&&!n.units.some(M=>M.owner===o.owner&&M.lootRun)){let M=null;if(n.lockedCrate)M={x:n.lockedCrate.x,y:n.lockedCrate.y,kind:"crate"};else if(n.airdrop)M={x:n.airdrop.x,y:n.airdrop.gy,kind:"airdrop"};else for(let S of n.loot){if(S.kind!=="rocket"&&S.kind!=="satchel")continue;let R=!1;for(let L of n.teams)if(!(L===o||L.eliminated)&&L.bases.some(W=>!W.dead&&_e(S.x,S.y,W.hx,W.hy)<800*800)){R=!0;break}if(!R){M={x:S.x,y:S.y,kind:"pile"};break}}if(M){let S=n.units.filter(R=>R.owner===o.owner&&!R.dead&&!R.eliminated&&!R.primary&&!R.defDuty&&!R.buildDuty&&!R.rocketer&&!R.monRun&&R.state==="gather").sort((R,L)=>_e(R.x,R.y,M.x,M.y)-_e(L.x,L.y,M.x,M.y))[0];if(S){let R=te(S.x,S.y,M.x,M.y),L=M.kind==="pile"?520:2400;R>L&&R<4500&&(S.lootRun={x:M.x,y:M.y,kind:M.kind,until:n.t+R/xt.BOT_SPEED*1.8+(M.kind==="crate"?170:20)},a.lootCd=n.t+45)}}}if(n.quarry&&n.quarry.owner!==o.owner&&n.t>a.qCd&&!n.units.some(M=>M.owner===o.owner&&M.qRun)){let M=n.units.filter(S=>S.owner===o.owner&&!S.dead&&!S.eliminated&&!S.primary&&!S.defDuty&&!S.buildDuty&&!S.rocketer&&!S.monRun&&!S.lootRun&&S.state==="gather").sort((S,R)=>_e(S.x,S.y,n.quarry.x,n.quarry.y)-_e(R.x,R.y,n.quarry.x,n.quarry.y))[0];if(M){let S=te(M.x,M.y,n.quarry.x,n.quarry.y);S<5200&&(M.qRun={until:n.t+S/xt.BOT_SPEED*1.8+25},a.qCd=n.t+(o.hard?90:150))}}if(o.hard&&c&&!n.signal&&!n.plane&&!n.airdrop&&n.t>a.sigCd){let M=Zr(n,o);if(c.scrap+(M?M.scrap:0)>=xt.SIGNAL_COST+60){let R=l[0];for(let L=0;L<8;L++){let W=L/8*Math.PI*2,X=R.hx+Math.cos(W)*620,N=R.hy+Math.sin(W)*620;if(X<300||N<300||X>xe.w-300||N>xe.h-300||te(X,N,n.world.shop.x,n.world.shop.y)<Tt||!n.world.onLand(X,N)||n.world.lakeAt(X,N))continue;let B=xt.SIGNAL_COST,Y=Math.min(B,c.scrap);c.scrap-=Y,B-=Y,B>0&&M&&(M.scrap-=B),pu(n,X,N),a.sigCd=n.t+n.rng.rand(150,240),Xe(n,R.hx,R.hy-40,"supply signal!","#c9a0ff");break}}}}for(let o of n.teams)o.eliminated||Hu(n,o,e);let s=0,r=null;for(let o of n.teams){if(o.eliminated)continue;let a=0;for(let l of n.units)l.owner===o.owner&&(a+=l.kills);a>s&&(s=a,r=o.id)}if(n.bounty=s>0?r:null,!n.metrics.winner){let o=n.teams.filter(a=>!a.eliminated);o.length===1&&n.teams.length>1&&(n.metrics.winner=o[0].owner,n.metrics.decisiveT=n.t)}}function rp(n){let e=Dr;n.t+=e,n.tick++,n.clouds||xh(n),n.needFenceRefresh&&(n.needFenceRefresh=!1,Df(n)),Mu(n,e),Qf(n,e),Lu(n,e),Nu(n,e),eu(n,e),Gf(n,e),du(n,e),yu(n,e),lu(n,e),cu(n,e),fu(n,e),gu(n,e),mu(n,e),hu(n,e),xu(n,e),Kf(n,e),iu(n,e),Jf(n,e),jf(n,e),sx(n,e),rx(n,e),n.raidAlarm&&(n.raidAlarm.t-=e,n.raidAlarm.t<=0&&(n.raidAlarm=null)),sp(n,e),au(n,e);for(let t of n.units)Yu(n,t,e);for(let t=n.elims.length-1;t>=0;t--)n.elims[t].t-=e,n.elims[t].t<=0&&n.elims.splice(t,1);Yf(n,e),nu(n,e),_u(n,e);for(let t=n.particles.length-1;t>=0;t--){let i=n.particles[t],s=Math.pow(.9,e*60);i.vx*=s,i.vy*=s,i.x+=i.vx*e,i.y+=i.vy*e,i.life-=e,i.life<=0&&n.particles.splice(t,1)}for(let t=n.floats.length-1;t>=0;t--){let i=n.floats[t];i.y+=i.vy*e,i.life-=e,i.life<=0&&n.floats.splice(t,1)}for(let t=n.flashes.length-1;t>=0;t--)n.flashes[t].life-=e,n.flashes[t].life<=0&&n.flashes.splice(t,1);for(let t=n.blasts.length-1;t>=0;t--)n.blasts[t].life-=e,n.blasts[t].life<=0&&n.blasts.splice(t,1);n.muzzle&&(n.muzzle.t-=e,n.muzzle.t<=0&&(n.muzzle=null)),n.shake=Math.max(0,n.shake-26*e),n.tip&&(n.tip.t-=e,n.tip.t<=0&&(n.tip=null)),n.events.length>600&&n.events.splice(0,n.events.length-600),n.tick%120===0&&ax(n)}function sx(n,e){for(let t=n.fences.length-1;t>=0;t--){let i=n.fences[t];i.t-=e,i.t<=0&&(n.fences.splice(t,1),n.needFenceRefresh=!0)}}function rx(n,e){for(let t=n.raids.length-1;t>=0;t--)n.raids[t].t-=e,n.raids[t].t<=0&&n.raids.splice(t,1)}function ox(n,e){let t=Math.floor(e.x/64),i=Math.floor(e.y/64);for(let s of["V,"+t+","+i,"V,"+(t+1)+","+i,"H,"+t+","+i,"H,"+t+","+(i+1)]){let r=n.walls.get(s);if(!r||r.hp<=0||r.type==="door"&&r.open||r.owner===e.owner)continue;let o=Ft(s,r);if(At(e.x,e.y,o[0],o[1],o[2],o[3])<3)return!0}return!1}function ax(n){let e=n.metrics;for(let t of n.units)if(!(t.dead||t.eliminated)&&((!isFinite(t.x)||!isFinite(t.y))&&(e.nan=(e.nan||0)+1,t.x=t.hx,t.y=t.hy),ox(n,t)&&e.wallPhase++,t.stuckT>1.5&&t.state!=="raid")){let i=n.world.lakeAt(t.x,t.y),s="open";if(Math.abs(t.x-t.hx)<460&&Math.abs(t.y-t.hy)<460)s="base";else if(i)s="lake";else for(let r of n.world.monuments)if((t.x-r.x)**2+(t.y-r.y)**2<(r.r+220)**2){s="monument";break}e.regionStuck[s]+=2}if((!isFinite(n.player.x)||!isFinite(n.player.y))&&(e.nan=(e.nan||0)+1,n.player.x=6912,n.player.y=4868),n.t-(e._wlT||0)>=60){e._wlT=n.t;let t={t:Math.round(n.t)};for(let i of n.teams)t[i.owner]=n.units.filter(s=>s.owner===i.owner&&!s.eliminated).length;e.workerLog.push(t)}}var zp=0,md=1,Vp=2;var Go=1,Gp=2,Tr=3,Fi=0,xn=1,In=2,_i=0,ns=1,wn=2,gd=3,xd=4,Wp=5;var is=100,Xp=101,qp=102,Yp=103,Zp=104,$p=200,Kp=201,Jp=202,jp=203,il=204,sl=205,Qp=206,em=207,tm=208,nm=209,im=210,sm=211,rm=212,om=213,am=214,rl=0,ol=1,al=2,Rs=3,ll=4,cl=5,hl=6,dl=7,Wl=0,lm=1,cm=2,ni=0,yd=1,_d=2,vd=3,Md=4,bd=5,wd=6,Td=7;var Ed=300,cs=301,Ns=302,Xl=303,ql=304,Wo=306,di=1e3,hi=1001,fl=1002,pn=1003,hm=1004;var Xo=1005;var gn=1006,Yl=1007;var vi=1008;var Pn=1009,Ad=1010,Rd=1011,Er=1012,Zl=1013,ii=1014,Zn=1015,Mi=1016,$l=1017,Kl=1018,Ar=1020,Cd=35902,Sd=35899,Id=1021,Pd=1022,$n=1023,fi=1026,hs=1027,Jl=1028,jl=1029,ds=1030,Ql=1031;var ec=1033,qo=33776,Yo=33777,Zo=33778,$o=33779,tc=35840,nc=35841,ic=35842,sc=35843,rc=36196,oc=37492,ac=37496,lc=37488,cc=37489,Ko=37490,hc=37491,dc=37808,fc=37809,uc=37810,pc=37811,mc=37812,gc=37813,xc=37814,yc=37815,_c=37816,vc=37817,Mc=37818,bc=37819,wc=37820,Tc=37821,Ec=36492,Ac=36494,Rc=36495,Cc=36283,Sc=36284,Jo=36285,Ic=36286;var fo=2300,ul=2301,nl=2302,td=2303,nd=2400,id=2401,sd=2402;var dm=3200;var Pc=0,fm=1,Vi="",on="srgb",uo="srgb-linear",po="linear",Ct="srgb";var As=7680;var rd=519,um=512,pm=513,mm=514,Dc=515,gm=516,xm=517,Lc=518,ym=519,pl=35044;var Dd="300 es",ti=2e3,ur=2001;function lx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function cx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function mo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function _m(){let n=mo("canvas");return n.style.display="block",n}var op={},pr=null;function go(...n){let e="THREE."+n.shift();pr?pr("log",e,...n):console.log(e,...n)}function vm(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function nt(...n){n=vm(n);let e="THREE."+n.shift();if(pr)pr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function tt(...n){n=vm(n);let e="THREE."+n.shift();if(pr)pr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ml(...n){let e=n.join(" ");e in op||(op[e]=!0,nt(...n))}function Mm(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var bm={[rl]:ol,[al]:hl,[ll]:dl,[Rs]:cl,[ol]:rl,[hl]:al,[dl]:ll,[cl]:Rs},ui=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Rh=Math.PI/180,gl=180/Math.PI;function Ui(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]).toLowerCase()}function mt(n,e,t){return Math.max(e,Math.min(t,n))}function hx(n,e){return(n%e+e)%e}function Ch(n,e,t){return(1-t)*n+t*e}function ci(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Lt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Ue=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pi=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],d=i[s+2],h=i[s+3],f=r[o+0],u=r[o+1],p=r[o+2],x=r[o+3];if(h!==x||l!==f||c!==u||d!==p){let m=l*f+c*u+d*p+h*x;m<0&&(f=-f,u=-u,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),v=Math.sin(y);g=Math.sin(g*y)/v,a=Math.sin(a*y)/v,l=l*g+f*a,c=c*g+u*a,d=d*g+p*a,h=h*g+x*a}else{l=l*g+f*a,c=c*g+u*a,d=d*g+p*a,h=h*g+x*a;let y=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=y,c*=y,d*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],d=i[s+3],h=r[o],f=r[o+1],u=r[o+2],p=r[o+3];return e[t]=a*p+d*h+l*u-c*f,e[t+1]=l*p+d*f+c*h-a*u,e[t+2]=c*p+d*u+a*f-l*h,e[t+3]=d*p-a*h-l*f-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(s/2),h=a(r/2),f=l(i/2),u=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*d*h+c*u*p,this._y=c*u*h-f*d*p,this._z=c*d*p+f*u*h,this._w=c*d*h-f*u*p;break;case"YXZ":this._x=f*d*h+c*u*p,this._y=c*u*h-f*d*p,this._z=c*d*p-f*u*h,this._w=c*d*h+f*u*p;break;case"ZXY":this._x=f*d*h-c*u*p,this._y=c*u*h+f*d*p,this._z=c*d*p+f*u*h,this._w=c*d*h-f*u*p;break;case"ZYX":this._x=f*d*h-c*u*p,this._y=c*u*h+f*d*p,this._z=c*d*p-f*u*h,this._w=c*d*h+f*u*p;break;case"YZX":this._x=f*d*h+c*u*p,this._y=c*u*h+f*d*p,this._z=c*d*p-f*u*h,this._w=c*d*h-f*u*p;break;case"XZY":this._x=f*d*h-c*u*p,this._y=c*u*h-f*d*p,this._z=c*d*p+f*u*h,this._w=c*d*h+f*u*p;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],h=t[10],f=i+a+h;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(d-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(i>a&&i>h){let u=2*Math.sqrt(1+i-a-h);this._w=(d-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>h){let u=2*Math.sqrt(1+a-i-h);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+d)/u}else{let u=2*Math.sqrt(1+h-i-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+d)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+o*a+s*c-r*l,this._y=s*d+o*l+r*a-i*c,this._z=r*d+o*c+i*l-s*a,this._w=o*d-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ap.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ap.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),d=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*d,this.y=i+l*d+a*c-r*h,this.z=s+l*h+r*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Sh.copy(this).projectOnVector(e),this.sub(Sh)}reflect(e){return this.sub(Sh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Sh=new k,ap=new pi,ot=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],u=i[5],p=i[8],x=s[0],m=s[3],g=s[6],y=s[1],v=s[4],w=s[7],E=s[2],T=s[5],P=s[8];return r[0]=o*x+a*y+l*E,r[3]=o*m+a*v+l*T,r[6]=o*g+a*w+l*P,r[1]=c*x+d*y+h*E,r[4]=c*m+d*v+h*T,r[7]=c*g+d*w+h*P,r[2]=f*x+u*y+p*E,r[5]=f*m+u*v+p*T,r[8]=f*g+u*w+p*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-i*r*d+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,f=a*l-d*r,u=c*r-o*l,p=t*h+i*f+s*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=h*x,e[1]=(s*c-d*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(d*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=u*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ih.makeScale(e,t)),this}rotate(e){return this.premultiply(Ih.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ih.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ih=new ot,lp=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cp=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dx(){let n={enabled:!0,workingColorSpace:uo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ct&&(s.r=ki(s.r),s.g=ki(s.g),s.b=ki(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ct&&(s.r=dr(s.r),s.g=dr(s.g),s.b=dr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Vi?po:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ml("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ml("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[uo]:{primaries:e,whitePoint:i,transfer:po,toXYZ:lp,fromXYZ:cp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:e,whitePoint:i,transfer:Ct,toXYZ:lp,fromXYZ:cp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),n}var yt=dx();function ki(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function dr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Zs,xl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Zs===void 0&&(Zs=mo("canvas")),Zs.width=e.width,Zs.height=e.height;let s=Zs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Zs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=mo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ki(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ki(t[i]/255)*255):t[i]=ki(t[i]);return{data:t,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},fx=0,mr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=Ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ph(s[o].image)):r.push(Ph(s[o]))}else r=Ph(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Ph(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}var ux=0,Dh=new k,Rn=class n extends ui{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=hi,s=hi,r=gn,o=vi,a=$n,l=Pn,c=n.DEFAULT_ANISOTROPY,d=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=Ui(),this.name="",this.source=new mr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Dh).x}get height(){return this.source.getSize(Dh).y}get depth(){return this.source.getSize(Dh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){nt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){nt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ed)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case di:e.x=e.x-Math.floor(e.x);break;case hi:e.x=e.x<0?0:1;break;case fl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case di:e.y=e.y-Math.floor(e.y);break;case hi:e.y=e.y<0?0:1;break;case fl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Ed;Rn.DEFAULT_ANISOTROPY=1;var Kt=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],u=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,w=(u+1)/2,E=(g+1)/2,T=(d+f)/4,P=(h+x)/4,_=(p+m)/4;return v>w&&v>E?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=T/i,r=P/i):w>E?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=T/s,r=_/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=P/r,s=_/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-p)*(m-p)+(h-x)*(h-x)+(f-d)*(f-d));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(h-x)/y,this.z=(f-d)/y,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yl=class extends ui{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Kt(0,0,e,t),this.scissorTest=!1,this.viewport=new Kt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new Rn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new mr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fn=class extends yl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},xo=class extends Rn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var _l=class extends Rn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _t=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,l,c,d,h,f,u,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,d,h,f,u,p,x,m)}set(e,t,i,s,r,o,a,l,c,d,h,f,u,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=d,g[10]=h,g[14]=f,g[3]=u,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,s=1/$s.setFromMatrixColumn(e,0).length(),r=1/$s.setFromMatrixColumn(e,1).length(),o=1/$s.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*d,u=o*h,p=a*d,x=a*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=u+p*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=p+u*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*d,u=l*h,p=c*d,x=c*h;t[0]=f+x*a,t[4]=p*a-u,t[8]=o*c,t[1]=o*h,t[5]=o*d,t[9]=-a,t[2]=u*a-p,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*d,u=l*h,p=c*d,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=p+u*a,t[1]=u+p*a,t[5]=o*d,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*d,u=o*h,p=a*d,x=a*h;t[0]=l*d,t[4]=p*c-u,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=u*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,u=o*c,p=a*l,x=a*c;t[0]=l*d,t[4]=x-f*h,t[8]=p*h+u,t[1]=h,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=u*h+p,t[10]=f-x*h}else if(e.order==="XZY"){let f=o*l,u=o*c,p=a*l,x=a*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=f*h+x,t[5]=o*d,t[9]=u*h-p,t[2]=p*h-u,t[6]=a*d,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(px,e,mx)}lookAt(e,t,i){let s=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),Ki.crossVectors(i,Un),Ki.lengthSq()===0&&(Math.abs(i.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),Ki.crossVectors(i,Un)),Ki.normalize(),Ca.crossVectors(Un,Ki),s[0]=Ki.x,s[4]=Ca.x,s[8]=Un.x,s[1]=Ki.y,s[5]=Ca.y,s[9]=Un.y,s[2]=Ki.z,s[6]=Ca.z,s[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],u=i[13],p=i[2],x=i[6],m=i[10],g=i[14],y=i[3],v=i[7],w=i[11],E=i[15],T=s[0],P=s[4],_=s[8],M=s[12],S=s[1],R=s[5],L=s[9],W=s[13],X=s[2],N=s[6],B=s[10],Y=s[14],ce=s[3],pe=s[7],Ee=s[11],De=s[15];return r[0]=o*T+a*S+l*X+c*ce,r[4]=o*P+a*R+l*N+c*pe,r[8]=o*_+a*L+l*B+c*Ee,r[12]=o*M+a*W+l*Y+c*De,r[1]=d*T+h*S+f*X+u*ce,r[5]=d*P+h*R+f*N+u*pe,r[9]=d*_+h*L+f*B+u*Ee,r[13]=d*M+h*W+f*Y+u*De,r[2]=p*T+x*S+m*X+g*ce,r[6]=p*P+x*R+m*N+g*pe,r[10]=p*_+x*L+m*B+g*Ee,r[14]=p*M+x*W+m*Y+g*De,r[3]=y*T+v*S+w*X+E*ce,r[7]=y*P+v*R+w*N+E*pe,r[11]=y*_+v*L+w*B+E*Ee,r[15]=y*M+v*W+w*Y+E*De,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],u=e[14],p=e[3],x=e[7],m=e[11],g=e[15],y=l*u-c*f,v=a*u-c*h,w=a*f-l*h,E=o*u-c*d,T=o*f-l*d,P=o*h-a*d;return t*(x*y-m*v+g*w)-i*(p*y-m*E+g*T)+s*(p*v-x*E+g*P)-r*(p*w-x*T+m*P)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],u=e[11],p=e[12],x=e[13],m=e[14],g=e[15],y=t*a-i*o,v=t*l-s*o,w=t*c-r*o,E=i*l-s*a,T=i*c-r*a,P=s*c-r*l,_=d*x-h*p,M=d*m-f*p,S=d*g-u*p,R=h*m-f*x,L=h*g-u*x,W=f*g-u*m,X=y*W-v*L+w*R+E*S-T*M+P*_;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/X;return e[0]=(a*W-l*L+c*R)*N,e[1]=(s*L-i*W-r*R)*N,e[2]=(x*P-m*T+g*E)*N,e[3]=(f*T-h*P-u*E)*N,e[4]=(l*S-o*W-c*M)*N,e[5]=(t*W-s*S+r*M)*N,e[6]=(m*w-p*P-g*v)*N,e[7]=(d*P-f*w+u*v)*N,e[8]=(o*L-a*S+c*_)*N,e[9]=(i*S-t*L-r*_)*N,e[10]=(p*T-x*w+g*y)*N,e[11]=(h*w-d*T-u*y)*N,e[12]=(a*M-o*R-l*_)*N,e[13]=(t*R-i*M+s*_)*N,e[14]=(x*v-p*E-m*y)*N,e[15]=(d*E-h*v+f*y)*N,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,d=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,d*a+i,d*l-s*o,0,c*l-s*a,d*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,d=o+o,h=a+a,f=r*c,u=r*d,p=r*h,x=o*d,m=o*h,g=a*h,y=l*c,v=l*d,w=l*h,E=i.x,T=i.y,P=i.z;return s[0]=(1-(x+g))*E,s[1]=(u+w)*E,s[2]=(p-v)*E,s[3]=0,s[4]=(u-w)*T,s[5]=(1-(f+g))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(p+v)*P,s[9]=(m-y)*P,s[10]=(1-(f+x))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinant();if(r===0)return i.set(1,1,1),t.identity(),this;let o=$s.set(s[0],s[1],s[2]).length(),a=$s.set(s[4],s[5],s[6]).length(),l=$s.set(s[8],s[9],s[10]).length();r<0&&(o=-o),jn.copy(this);let c=1/o,d=1/a,h=1/l;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=d,jn.elements[5]*=d,jn.elements[6]*=d,jn.elements[8]*=h,jn.elements[9]*=h,jn.elements[10]*=h,t.setFromRotationMatrix(jn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=ti,l=!1){let c=this.elements,d=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),u=(i+s)/(i-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===ti)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===ur)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ti,l=!1){let c=this.elements,d=2/(t-e),h=2/(i-s),f=-(t+e)/(t-e),u=-(i+s)/(i-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===ti)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===ur)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},$s=new k,jn=new _t,px=new k(0,0,0),mx=new k(1,1,1),Ki=new k,Ca=new k,Un=new k,hp=new _t,dp=new pi,Oi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],d=s[9],h=s[2],f=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,u),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return hp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dp.setFromEuler(this),this.setFromQuaternion(dp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Oi.DEFAULT_ORDER="XYZ";var gr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},gx=0,fp=new k,Ks=new pi,Si=new _t,Sa=new k,Qr=new k,xx=new k,yx=new pi,up=new k(1,0,0),pp=new k(0,1,0),mp=new k(0,0,1),gp={type:"added"},_x={type:"removed"},Js={type:"childadded",child:null},Lh={type:"childremoved",child:null},an=class n extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new k,t=new Oi,i=new pi,s=new k(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new ot}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.premultiply(Ks),this}rotateX(e){return this.rotateOnAxis(up,e)}rotateY(e){return this.rotateOnAxis(pp,e)}rotateZ(e){return this.rotateOnAxis(mp,e)}translateOnAxis(e,t){return fp.copy(e).applyQuaternion(this.quaternion),this.position.add(fp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(up,e)}translateY(e){return this.translateOnAxis(pp,e)}translateZ(e){return this.translateOnAxis(mp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Sa.copy(e):Sa.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Qr,Sa,this.up):Si.lookAt(Sa,Qr,this.up),this.quaternion.setFromRotationMatrix(Si),s&&(Si.extractRotation(s.matrixWorld),Ks.setFromRotationMatrix(Si),this.quaternion.premultiply(Ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gp),Js.child=e,this.dispatchEvent(Js),Js.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_x),Lh.child=e,this.dispatchEvent(Lh),Lh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gp),Js.child=e,this.dispatchEvent(Js),Js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,e,xx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,yx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),u=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),u.length>0&&(i.animations=u),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};an.DEFAULT_UP=new k(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var je=class extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}},vx={type:"move"},xr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),u=.02,p=.005;c.inputState.pinching&&f>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new je;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},wm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},Ia={h:0,s:0,l:0};function Nh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var it=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=yt.workingColorSpace){return this.r=e,this.g=t,this.b=i,yt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=yt.workingColorSpace){if(e=hx(e,1),t=mt(t,0,1),i=mt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Nh(o,r,e+1/3),this.g=Nh(o,r,e),this.b=Nh(o,r,e-1/3)}return yt.colorSpaceToWorking(this,s),this}setStyle(e,t=on){function i(r){r!==void 0&&parseFloat(r)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:nt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){let i=wm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return yt.workingToColorSpace(Mn.copy(this),e),Math.round(mt(Mn.r*255,0,255))*65536+Math.round(mt(Mn.g*255,0,255))*256+Math.round(mt(Mn.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(Mn.copy(this),t);let i=Mn.r,s=Mn.g,r=Mn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,d=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=on){yt.workingToColorSpace(Mn.copy(this),e);let t=Mn.r,i=Mn.g,s=Mn.b;return e!==on?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+t,Ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ji),e.getHSL(Ia);let i=Ch(Ji.h,Ia.h,t),s=Ch(Ji.s,Ia.s,t),r=Ch(Ji.l,Ia.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new it;it.NAMES=wm;var yo=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new it(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},_o=class extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Qn=new k,Ii=new k,Uh=new k,Pi=new k,js=new k,Qs=new k,xp=new k,kh=new k,Fh=new k,Oh=new k,Bh=new Kt,Hh=new Kt,zh=new Kt,Ni=class n{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Qn.subVectors(e,t),s.cross(Qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Qn.subVectors(s,t),Ii.subVectors(i,t),Uh.subVectors(e,t);let o=Qn.dot(Qn),a=Qn.dot(Ii),l=Qn.dot(Uh),c=Ii.dot(Ii),d=Ii.dot(Uh),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,u=(c*l-a*d)*f,p=(o*d-a*l)*f;return r.set(1-u-p,p,u)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pi.x),l.addScaledVector(o,Pi.y),l.addScaledVector(a,Pi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Bh.setScalar(0),Hh.setScalar(0),zh.setScalar(0),Bh.fromBufferAttribute(e,t),Hh.fromBufferAttribute(e,i),zh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Bh,r.x),o.addScaledVector(Hh,r.y),o.addScaledVector(zh,r.z),o}static isFrontFacing(e,t,i,s){return Qn.subVectors(i,t),Ii.subVectors(e,t),Qn.cross(Ii).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),Qn.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;js.subVectors(s,i),Qs.subVectors(r,i),kh.subVectors(e,i);let l=js.dot(kh),c=Qs.dot(kh);if(l<=0&&c<=0)return t.copy(i);Fh.subVectors(e,s);let d=js.dot(Fh),h=Qs.dot(Fh);if(d>=0&&h<=d)return t.copy(s);let f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(i).addScaledVector(js,o);Oh.subVectors(e,r);let u=js.dot(Oh),p=Qs.dot(Oh);if(p>=0&&u<=p)return t.copy(r);let x=u*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Qs,a);let m=d*p-u*h;if(m<=0&&h-d>=0&&u-p>=0)return xp.subVectors(r,s),a=(h-d)/(h-d+(u-p)),t.copy(s).addScaledVector(xp,a);let g=1/(m+x+f);return o=x*g,a=f*g,t.copy(i).addScaledVector(js,o).addScaledVector(Qs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},mi=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ei):ei.fromBufferAttribute(r,o),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pa.copy(i.boundingBox)),Pa.applyMatrix4(e.matrixWorld),this.union(Pa)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(eo),Da.subVectors(this.max,eo),er.subVectors(e.a,eo),tr.subVectors(e.b,eo),nr.subVectors(e.c,eo),ji.subVectors(tr,er),Qi.subVectors(nr,tr),bs.subVectors(er,nr);let t=[0,-ji.z,ji.y,0,-Qi.z,Qi.y,0,-bs.z,bs.y,ji.z,0,-ji.x,Qi.z,0,-Qi.x,bs.z,0,-bs.x,-ji.y,ji.x,0,-Qi.y,Qi.x,0,-bs.y,bs.x,0];return!Vh(t,er,tr,nr,Da)||(t=[1,0,0,0,1,0,0,0,1],!Vh(t,er,tr,nr,Da))?!1:(La.crossVectors(ji,Qi),t=[La.x,La.y,La.z],Vh(t,er,tr,nr,Da))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Di=[new k,new k,new k,new k,new k,new k,new k,new k],ei=new k,Pa=new mi,er=new k,tr=new k,nr=new k,ji=new k,Qi=new k,bs=new k,eo=new k,Da=new k,La=new k,ws=new k;function Vh(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ws.fromArray(n,r);let a=s.x*Math.abs(ws.x)+s.y*Math.abs(ws.y)+s.z*Math.abs(ws.z),l=e.dot(ws),c=t.dot(ws),d=i.dot(ws);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}var rn=new k,Na=new Ue,Mx=0,en=class extends ui{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=pl,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Na.fromBufferAttribute(this,t),Na.applyMatrix3(e),this.setXY(t,Na.x,Na.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ci(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pl&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var vo=class extends en{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Mo=class extends en{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var St=class extends en{constructor(e,t,i){super(new Float32Array(e),t,i)}},bx=new mi,to=new k,Gh=new k,Bi=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):bx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;to.subVectors(e,this.center);let t=to.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(to,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(to.copy(e.center).add(Gh)),this.expandByPoint(to.copy(e.center).sub(Gh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},wx=0,Wn=new _t,Wh=new an,ir=new k,kn=new mi,no=new mi,un=new k,Yt=class n extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lx(e)?Mo:vo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ot().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,i){return Wn.makeTranslation(e,t,i),this.applyMatrix4(Wn),this}scale(e,t,i){return Wn.makeScale(e,t,i),this.applyMatrix4(Wn),this}lookAt(e){return Wh.lookAt(e),Wh.updateMatrix(),this.applyMatrix4(Wh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new St(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];kn.setFromBufferAttribute(r),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let i=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];no.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(kn.min,no.min),kn.expandByPoint(un),un.addVectors(kn.max,no.max),kn.expandByPoint(un)):(kn.expandByPoint(no.min),kn.expandByPoint(no.max))}kn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)un.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(un));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)un.fromBufferAttribute(a,c),l&&(ir.fromBufferAttribute(e,c),un.add(ir)),s=Math.max(s,i.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let _=0;_<i.count;_++)a[_]=new k,l[_]=new k;let c=new k,d=new k,h=new k,f=new Ue,u=new Ue,p=new Ue,x=new k,m=new k;function g(_,M,S){c.fromBufferAttribute(i,_),d.fromBufferAttribute(i,M),h.fromBufferAttribute(i,S),f.fromBufferAttribute(r,_),u.fromBufferAttribute(r,M),p.fromBufferAttribute(r,S),d.sub(c),h.sub(c),u.sub(f),p.sub(f);let R=1/(u.x*p.y-p.x*u.y);isFinite(R)&&(x.copy(d).multiplyScalar(p.y).addScaledVector(h,-u.y).multiplyScalar(R),m.copy(h).multiplyScalar(u.x).addScaledVector(d,-p.x).multiplyScalar(R),a[_].add(x),a[M].add(x),a[S].add(x),l[_].add(m),l[M].add(m),l[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let _=0,M=y.length;_<M;++_){let S=y[_],R=S.start,L=S.count;for(let W=R,X=R+L;W<X;W+=3)g(e.getX(W+0),e.getX(W+1),e.getX(W+2))}let v=new k,w=new k,E=new k,T=new k;function P(_){E.fromBufferAttribute(s,_),T.copy(E);let M=a[_];v.copy(M),v.sub(E.multiplyScalar(E.dot(M))).normalize(),w.crossVectors(T,M);let R=w.dot(l[_])<0?-1:1;o.setXYZW(_,v.x,v.y,v.z,R)}for(let _=0,M=y.length;_<M;++_){let S=y[_],R=S.start,L=S.count;for(let W=R,X=R+L;W<X;W+=3)P(e.getX(W+0)),P(e.getX(W+1)),P(e.getX(W+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,u=i.count;f<u;f++)i.setXYZ(f,0,0,0);let s=new k,r=new k,o=new k,a=new k,l=new k,c=new k,d=new k,h=new k;if(e)for(let f=0,u=e.count;f<u;f+=3){let p=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),d.subVectors(o,r),h.subVectors(s,r),d.cross(h),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=t.count;f<u;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),d.subVectors(o,r),h.subVectors(s,r),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(a,l){let c=a.array,d=a.itemSize,h=a.normalized,f=new c.constructor(l.length*d),u=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?u=l[x]*a.data.stride+a.offset:u=l[x]*d;for(let g=0;g<d;g++)f[p++]=c[u++]}return new en(f,d,h)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let d=0,h=c.length;d<h;d++){let f=c[d],u=e(f,i);l.push(u)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){let u=c[h];d.push(u.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(t))}let r=e.morphAttributes;for(let c in r){let d=[],h=r[c];for(let f=0,u=h.length;f<u;f++)d.push(h[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,d=o.length;c<d;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},vl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=pl,this.updateRanges=[],this.version=0,this.uuid=Ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},An=new k,bo=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ci(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Lt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ci(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array),r=Lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){go("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new en(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){go("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Tx=0,gi=class extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=ns,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=il,this.blendDst=sl,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){nt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){nt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(i.blending=this.blending),this.side!==Fi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==il&&(i.blendSrc=this.blendSrc),this.blendDst!==sl&&(i.blendDst=this.blendDst),this.blendEquation!==is&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(i.stencilFail=this.stencilFail),this.stencilZFail!==As&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ss=class extends gi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},sr,io=new k,rr=new k,or=new k,ar=new Ue,so=new Ue,Tm=new _t,Ua=new k,ro=new k,ka=new k,yp=new Ue,Xh=new Ue,_p=new Ue,Cs=class extends an{constructor(e=new ss){if(super(),this.isSprite=!0,this.type="Sprite",sr===void 0){sr=new Yt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new vl(t,5);sr.setIndex([0,1,2,0,2,3]),sr.setAttribute("position",new bo(i,3,0,!1)),sr.setAttribute("uv",new bo(i,2,3,!1))}this.geometry=sr,this.material=e,this.center=new Ue(.5,.5),this.count=1}raycast(e,t){e.camera===null&&tt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rr.setFromMatrixScale(this.matrixWorld),Tm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),or.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rr.multiplyScalar(-or.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Fa(Ua.set(-.5,-.5,0),or,o,rr,s,r),Fa(ro.set(.5,-.5,0),or,o,rr,s,r),Fa(ka.set(.5,.5,0),or,o,rr,s,r),yp.set(0,0),Xh.set(1,0),_p.set(1,1);let a=e.ray.intersectTriangle(Ua,ro,ka,!1,io);if(a===null&&(Fa(ro.set(-.5,.5,0),or,o,rr,s,r),Xh.set(0,1),a=e.ray.intersectTriangle(Ua,ka,ro,!1,io),a===null))return;let l=e.ray.origin.distanceTo(io);l<e.near||l>e.far||t.push({distance:l,point:io.clone(),uv:Ni.getInterpolation(io,Ua,ro,ka,yp,Xh,_p,new Ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Fa(n,e,t,i,s,r){ar.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(so.x=r*ar.x-s*ar.y,so.y=s*ar.x+r*ar.y):so.copy(ar),n.copy(e),n.x+=so.x,n.y+=so.y,n.applyMatrix4(Tm)}var Li=new k,qh=new k,Oa=new k,es=new k,Yh=new k,Ba=new k,Zh=new k,yr=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){qh.copy(e).add(t).multiplyScalar(.5),Oa.copy(t).sub(e).normalize(),es.copy(this.origin).sub(qh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Oa),a=es.dot(this.direction),l=-es.dot(Oa),c=es.lengthSq(),d=Math.abs(1-o*o),h,f,u,p;if(d>0)if(h=o*l-a,f=o*a-l,p=r*d,h>=0)if(f>=-p)if(f<=p){let x=1/d;h*=x,f*=x,u=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),u=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),u=-h*h+f*(f+2*l)+c;else f<=-p?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),u=-h*h+f*(f+2*l)+c):f<=p?(h=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),u=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),u=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(qh).addScaledVector(Oa,f),u}intersectSphere(e,t){Li.subVectors(e.center,this.origin);let i=Li.dot(this.direction),s=Li.dot(Li)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),d>=0?(r=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(r=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,i,s,r){Yh.subVectors(t,e),Ba.subVectors(i,e),Zh.crossVectors(Yh,Ba);let o=this.direction.dot(Zh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;es.subVectors(this.origin,e);let l=a*this.direction.dot(Ba.crossVectors(es,Ba));if(l<0)return null;let c=a*this.direction.dot(Yh.cross(es));if(c<0||l+c>o)return null;let d=-a*es.dot(Zh);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xt=class extends gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=Wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},vp=new _t,Ts=new yr,Ha=new Bi,Mp=new k,za=new k,Va=new k,Ga=new k,$h=new k,Wa=new k,bp=new k,Xa=new k,ve=class extends an{constructor(e=new Yt,t=new Xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Wa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=a[l],h=r[l];d!==0&&($h.fromBufferAttribute(h,e),o?Wa.addScaledVector($h,d):Wa.addScaledVector($h.sub(t),d))}t.add(Wa)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ha.copy(i.boundingSphere),Ha.applyMatrix4(r),Ts.copy(e.ray).recast(e.near),!(Ha.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(Ha,Mp)===null||Ts.origin.distanceToSquared(Mp)>(e.far-e.near)**2))&&(vp.copy(r).invert(),Ts.copy(e.ray).applyMatrix4(vp),!(i.boundingBox!==null&&Ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ts)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],y=Math.max(m.start,u.start),v=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let w=y,E=v;w<E;w+=3){let T=a.getX(w),P=a.getX(w+1),_=a.getX(w+2);s=qa(this,g,e,i,c,d,h,T,P,_),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){let y=a.getX(m),v=a.getX(m+1),w=a.getX(m+2);s=qa(this,o,e,i,c,d,h,y,v,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],y=Math.max(m.start,u.start),v=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let w=y,E=v;w<E;w+=3){let T=w,P=w+1,_=w+2;s=qa(this,g,e,i,c,d,h,T,P,_),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,u.start),x=Math.min(l.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){let y=m,v=m+1,w=m+2;s=qa(this,o,e,i,c,d,h,y,v,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Ex(n,e,t,i,s,r,o,a){let l;if(e.side===xn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Fi,a),l===null)return null;Xa.copy(a),Xa.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Xa);return c<t.near||c>t.far?null:{distance:c,point:Xa.clone(),object:n}}function qa(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,za),n.getVertexPosition(l,Va),n.getVertexPosition(c,Ga);let d=Ex(n,e,t,i,za,Va,Ga,bp);if(d){let h=new k;Ni.getBarycoord(bp,za,Va,Ga,h),s&&(d.uv=Ni.getInterpolatedAttribute(s,a,l,c,h,new Ue)),r&&(d.uv1=Ni.getInterpolatedAttribute(r,a,l,c,h,new Ue)),o&&(d.normal=Ni.getInterpolatedAttribute(o,a,l,c,h,new k),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new k,materialIndex:0};Ni.getNormal(za,Va,Ga,f.normal),d.face=f,d.barycoord=h}return d}var wo=class extends Rn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=pn,d=pn,h,f){super(null,o,a,l,c,d,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var To=class extends en{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},lr=new _t,wp=new _t,Ya=[],Tp=new mi,Ax=new _t,oo=new ve,ao=new Bi,It=class extends ve{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new To(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Ax)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,lr),Tp.copy(e.boundingBox).applyMatrix4(lr),this.boundingBox.union(Tp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,lr),ao.copy(e.boundingSphere).applyMatrix4(lr),this.boundingSphere.union(ao)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(oo.geometry=this.geometry,oo.material=this.material,oo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ao.copy(this.boundingSphere),ao.applyMatrix4(i),e.ray.intersectsSphere(ao)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,lr),wp.multiplyMatrices(i,lr),oo.matrixWorld=wp,oo.raycast(e,Ya);for(let o=0,a=Ya.length;o<a;o++){let l=Ya[o];l.instanceId=r,l.object=this,t.push(l)}Ya.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new To(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new wo(new Float32Array(s*this.count),s,this.count,Jl,Zn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Kh=new k,Rx=new k,Cx=new ot,Xn=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Kh.subVectors(i,t).cross(Rx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Kh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Cx.getNormalMatrix(e),s=this.coplanarPoint(Kh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Es=new Bi,Sx=new Ue(.5,.5),Za=new k,_r=class{constructor(e=new Xn,t=new Xn,i=new Xn,s=new Xn,r=new Xn,o=new Xn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ti,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],d=r[4],h=r[5],f=r[6],u=r[7],p=r[8],x=r[9],m=r[10],g=r[11],y=r[12],v=r[13],w=r[14],E=r[15];if(s[0].setComponents(c-o,u-d,g-p,E-y).normalize(),s[1].setComponents(c+o,u+d,g+p,E+y).normalize(),s[2].setComponents(c+a,u+h,g+x,E+v).normalize(),s[3].setComponents(c-a,u-h,g-x,E-v).normalize(),i)s[4].setComponents(l,f,m,w).normalize(),s[5].setComponents(c-l,u-f,g-m,E-w).normalize();else if(s[4].setComponents(c-l,u-f,g-m,E-w).normalize(),t===ti)s[5].setComponents(c+l,u+f,g+m,E+w).normalize();else if(t===ur)s[5].setComponents(l,f,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(e){Es.center.set(0,0,0);let t=Sx.distanceTo(e.center);return Es.radius=.7071067811865476+t,Es.applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Za.x=s.normal.x>0?e.max.x:e.min.x,Za.y=s.normal.y>0?e.max.y:e.min.y,Za.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Za)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xi=class extends gi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ep=new _t,od=new yr,$a=new Bi,Ka=new k,Hi=class extends an{constructor(e=new Yt,t=new xi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$a.copy(i.boundingSphere),$a.applyMatrix4(s),$a.radius+=r,e.ray.intersectsSphere($a)===!1)return;Ep.copy(s).invert(),od.copy(e.ray).applyMatrix4(Ep);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let p=f,x=u;p<x;p++){let m=c.getX(p);Ka.fromBufferAttribute(h,m),Ap(Ka,m,l,s,e,t,this)}}else{let f=Math.max(0,o.start),u=Math.min(h.count,o.start+o.count);for(let p=f,x=u;p<x;p++)Ka.fromBufferAttribute(h,p),Ap(Ka,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ap(n,e,t,i,s,r,o){let a=od.distanceSqToPoint(n);if(a<t){let l=new k;od.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Eo=class extends Rn{constructor(e=[],t=cs,i,s,r,o,a,l,c,d){super(e,t,i,s,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},qn=class extends Rn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var zi=class extends Rn{constructor(e,t,i=ii,s,r,o,a=pn,l=pn,c,d=fi,h=1){if(d!==fi&&d!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,s,r,o,a,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ml=class extends zi{constructor(e,t=ii,i=cs,s,r,o=pn,a=pn,l,c=fi){let d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,t,i,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ao=class extends Rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},rs=class n extends Yt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],d=[],h=[],f=0,u=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new St(c,3)),this.setAttribute("normal",new St(d,3)),this.setAttribute("uv",new St(h,2));function p(x,m,g,y,v,w,E,T,P,_,M){let S=w/P,R=E/_,L=w/2,W=E/2,X=T/2,N=P+1,B=_+1,Y=0,ce=0,pe=new k;for(let Ee=0;Ee<B;Ee++){let De=Ee*R-W;for(let He=0;He<N;He++){let Qe=He*S-L;pe[x]=Qe*y,pe[m]=De*v,pe[g]=X,c.push(pe.x,pe.y,pe.z),pe[x]=0,pe[m]=0,pe[g]=T>0?1:-1,d.push(pe.x,pe.y,pe.z),h.push(He/P),h.push(1-Ee/_),Y+=1}}for(let Ee=0;Ee<_;Ee++)for(let De=0;De<P;De++){let He=f+De+N*Ee,Qe=f+De+N*(Ee+1),se=f+(De+1)+N*(Ee+1),re=f+(De+1)+N*Ee;l.push(He,Qe,re),l.push(Qe,se,re),ce+=6}a.addGroup(u,ce,M),u+=ce,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var yi=class n extends Yt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new k,d=new Ue;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){let u=i+h/t*s;c.x=e*Math.cos(u),c.y=e*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[f]/e+1)/2,d.y=(o[f+1]/e+1)/2,l.push(d.x,d.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new St(o,3)),this.setAttribute("normal",new St(a,3)),this.setAttribute("uv",new St(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ss=class n extends Yt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let d=[],h=[],f=[],u=[],p=0,x=[],m=i/2,g=0;y(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(d),this.setAttribute("position",new St(h,3)),this.setAttribute("normal",new St(f,3)),this.setAttribute("uv",new St(u,2));function y(){let w=new k,E=new k,T=0,P=(t-e)/i;for(let _=0;_<=r;_++){let M=[],S=_/r,R=S*(t-e)+e;for(let L=0;L<=s;L++){let W=L/s,X=W*l+a,N=Math.sin(X),B=Math.cos(X);E.x=R*N,E.y=-S*i+m,E.z=R*B,h.push(E.x,E.y,E.z),w.set(N,P,B).normalize(),f.push(w.x,w.y,w.z),u.push(W,1-S),M.push(p++)}x.push(M)}for(let _=0;_<s;_++)for(let M=0;M<r;M++){let S=x[M][_],R=x[M+1][_],L=x[M+1][_+1],W=x[M][_+1];(e>0||M!==0)&&(d.push(S,R,W),T+=3),(t>0||M!==r-1)&&(d.push(R,L,W),T+=3)}c.addGroup(g,T,0),g+=T}function v(w){let E=p,T=new Ue,P=new k,_=0,M=w===!0?e:t,S=w===!0?1:-1;for(let L=1;L<=s;L++)h.push(0,m*S,0),f.push(0,S,0),u.push(.5,.5),p++;let R=p;for(let L=0;L<=s;L++){let X=L/s*l+a,N=Math.cos(X),B=Math.sin(X);P.x=M*B,P.y=m*S,P.z=M*N,h.push(P.x,P.y,P.z),f.push(0,S,0),T.x=N*.5+.5,T.y=B*.5*S+.5,u.push(T.x,T.y),p++}for(let L=0;L<s;L++){let W=E+L,X=R+L;w===!0?d.push(X,X+1,W):d.push(X+1,X,W),_+=3}c.addGroup(g,_,w===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ro=class n extends Ss{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},bl=class n extends Yt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),d(),this.setAttribute("position",new St(r,3)),this.setAttribute("normal",new St(r.slice(),3)),this.setAttribute("uv",new St(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let v=new k,w=new k,E=new k;for(let T=0;T<t.length;T+=3)u(t[T+0],v),u(t[T+1],w),u(t[T+2],E),l(v,w,E,y)}function l(y,v,w,E){let T=E+1,P=[];for(let _=0;_<=T;_++){P[_]=[];let M=y.clone().lerp(w,_/T),S=v.clone().lerp(w,_/T),R=T-_;for(let L=0;L<=R;L++)L===0&&_===T?P[_][L]=M:P[_][L]=M.clone().lerp(S,L/R)}for(let _=0;_<T;_++)for(let M=0;M<2*(T-_)-1;M++){let S=Math.floor(M/2);M%2===0?(f(P[_][S+1]),f(P[_+1][S]),f(P[_][S])):(f(P[_][S+1]),f(P[_+1][S+1]),f(P[_+1][S]))}}function c(y){let v=new k;for(let w=0;w<r.length;w+=3)v.x=r[w+0],v.y=r[w+1],v.z=r[w+2],v.normalize().multiplyScalar(y),r[w+0]=v.x,r[w+1]=v.y,r[w+2]=v.z}function d(){let y=new k;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];let w=m(y)/2/Math.PI+.5,E=g(y)/Math.PI+.5;o.push(w,1-E)}p(),h()}function h(){for(let y=0;y<o.length;y+=6){let v=o[y+0],w=o[y+2],E=o[y+4],T=Math.max(v,w,E),P=Math.min(v,w,E);T>.9&&P<.1&&(v<.2&&(o[y+0]+=1),w<.2&&(o[y+2]+=1),E<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function u(y,v){let w=y*3;v.x=e[w+0],v.y=e[w+1],v.z=e[w+2]}function p(){let y=new k,v=new k,w=new k,E=new k,T=new Ue,P=new Ue,_=new Ue;for(let M=0,S=0;M<r.length;M+=9,S+=6){y.set(r[M+0],r[M+1],r[M+2]),v.set(r[M+3],r[M+4],r[M+5]),w.set(r[M+6],r[M+7],r[M+8]),T.set(o[S+0],o[S+1]),P.set(o[S+2],o[S+3]),_.set(o[S+4],o[S+5]),E.copy(y).add(v).add(w).divideScalar(3);let R=m(E);x(T,S+0,y,R),x(P,S+2,v,R),x(_,S+4,w,R)}}function x(y,v,w,E){E<0&&y.x===1&&(o[v]=y.x-1),w.x===0&&w.z===0&&(o[v]=E/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var On=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){nt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let d=i[s],f=i[s+1]-d,u=(o-d)/f;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Ue:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new k,s=[],r=[],o=[],a=new k,l=new _t;for(let u=0;u<=e;u++){let p=u/e;s[u]=this.getTangentAt(p,new k)}r[0]=new k,o[0]=new k;let c=Number.MAX_VALUE,d=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);d<=c&&(c=d,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(mt(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,p))}o[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(mt(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(u=-u);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],u*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},vr=class extends On{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ue){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let d=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*d-u*h+this.aX,c=f*h+u*d+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},wl=class extends vr{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ld(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,d,h){let f=(o-r)/c-(a-r)/(c+d)+(a-o)/d,u=(a-o)/d-(l-o)/(d+h)+(l-a)/h;f*=d,u*=d,s(o,a,f,u)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Rp=new k,Cp=new k,Jh=new Ld,jh=new Ld,Qh=new Ld,Tl=class extends On{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new k){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,d;this.closed||a>0?c=s[(a-1)%r]:(Cp.subVectors(s[0],s[1]).add(s[0]),c=Cp);let h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?d=s[(a+2)%r]:(Rp.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=Rp),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(h),u),x=Math.pow(h.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(d),u);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Jh.initNonuniformCatmullRom(c.x,h.x,f.x,d.x,p,x,m),jh.initNonuniformCatmullRom(c.y,h.y,f.y,d.y,p,x,m),Qh.initNonuniformCatmullRom(c.z,h.z,f.z,d.z,p,x,m)}else this.curveType==="catmullrom"&&(Jh.initCatmullRom(c.x,h.x,f.x,d.x,this.tension),jh.initCatmullRom(c.y,h.y,f.y,d.y,this.tension),Qh.initCatmullRom(c.z,h.z,f.z,d.z,this.tension));return i.set(Jh.calc(l),jh.calc(l),Qh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new k().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Sp(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Ix(n,e){let t=1-n;return t*t*e}function Px(n,e){return 2*(1-n)*n*e}function Dx(n,e){return n*n*e}function co(n,e,t,i){return Ix(n,e)+Px(n,t)+Dx(n,i)}function Lx(n,e){let t=1-n;return t*t*t*e}function Nx(n,e){let t=1-n;return 3*t*t*n*e}function Ux(n,e){return 3*(1-n)*n*n*e}function kx(n,e){return n*n*n*e}function ho(n,e,t,i,s){return Lx(n,e)+Nx(n,t)+Ux(n,i)+kx(n,s)}var Co=class extends On{constructor(e=new Ue,t=new Ue,i=new Ue,s=new Ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Ue){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ho(e,s.x,r.x,o.x,a.x),ho(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},El=class extends On{constructor(e=new k,t=new k,i=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new k){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ho(e,s.x,r.x,o.x,a.x),ho(e,s.y,r.y,o.y,a.y),ho(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},So=class extends On{constructor(e=new Ue,t=new Ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ue){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Al=class extends On{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Io=class extends On{constructor(e=new Ue,t=new Ue,i=new Ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ue){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(co(e,s.x,r.x,o.x),co(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Rl=class extends On{constructor(e=new k,t=new k,i=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new k){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(co(e,s.x,r.x,o.x),co(e,s.y,r.y,o.y),co(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Po=class extends On{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ue){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],d=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(Sp(a,l.x,c.x,d.x,h.x),Sp(a,l.y,c.y,d.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new Ue().fromArray(s))}return this}},Ip=Object.freeze({__proto__:null,ArcCurve:wl,CatmullRomCurve3:Tl,CubicBezierCurve:Co,CubicBezierCurve3:El,EllipseCurve:vr,LineCurve:So,LineCurve3:Al,QuadraticBezierCurve:Io,QuadraticBezierCurve3:Rl,SplineCurve:Po}),Cl=class extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ip[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let d=l[c];i&&i.equals(d)||(t.push(d),i=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Ip[s.type]().fromJSON(s))}return this}},Do=class extends Cl{constructor(e){super(),this.type="Path",this.currentPoint=new Ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new So(this.currentPoint.clone(),new Ue(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Io(this.currentPoint.clone(),new Ue(e,t),new Ue(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Co(this.currentPoint.clone(),new Ue(e,t),new Ue(i,s),new Ue(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Po(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new vr(e,t,i,s,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Mr=class extends Do{constructor(e){super(e),this.uuid=Ui(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Do().fromJSON(s))}return this}};function Fx(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Em(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Vx(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let d=a,h=l;for(let f=t;f<s;f+=t){let u=n[f],p=n[f+1];u<a&&(a=u),p<l&&(l=p),u>d&&(d=u),p>h&&(h=p)}c=Math.max(d-a,h-l),c=c!==0?32767/c:0}return Lo(r,o,t,a,l,c,0),o}function Em(n,e,t,i,s){let r;if(s===Qx(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Pp(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Pp(o/i|0,n[o],n[o+1],r);return r&&br(r,r.next)&&(Uo(r),r=r.next),r}function Is(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(br(t,t.next)||$t(t.prev,t,t.next)===0)){if(Uo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Lo(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Yx(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Bx(n,i,s,r):Ox(n)){e.push(l.i,n.i,c.i),Uo(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Hx(Is(n),e),Lo(n,e,t,i,s,r,2)):o===2&&zx(n,e,t,i,s,r):Lo(Is(n),e,t,i,s,r,1);break}}}function Ox(n){let e=n.prev,t=n,i=n.next;if($t(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,d=Math.min(s,r,o),h=Math.min(a,l,c),f=Math.max(s,r,o),u=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=d&&p.x<=f&&p.y>=h&&p.y<=u&&lo(s,a,r,l,o,c,p.x,p.y)&&$t(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Bx(n,e,t,i){let s=n.prev,r=n,o=n.next;if($t(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,d=s.y,h=r.y,f=o.y,u=Math.min(a,l,c),p=Math.min(d,h,f),x=Math.max(a,l,c),m=Math.max(d,h,f),g=ad(u,p,e,t,i),y=ad(x,m,e,t,i),v=n.prevZ,w=n.nextZ;for(;v&&v.z>=g&&w&&w.z<=y;){if(v.x>=u&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&lo(a,d,l,h,c,f,v.x,v.y)&&$t(v.prev,v,v.next)>=0||(v=v.prevZ,w.x>=u&&w.x<=x&&w.y>=p&&w.y<=m&&w!==s&&w!==o&&lo(a,d,l,h,c,f,w.x,w.y)&&$t(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;v&&v.z>=g;){if(v.x>=u&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&lo(a,d,l,h,c,f,v.x,v.y)&&$t(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;w&&w.z<=y;){if(w.x>=u&&w.x<=x&&w.y>=p&&w.y<=m&&w!==s&&w!==o&&lo(a,d,l,h,c,f,w.x,w.y)&&$t(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function Hx(n,e){let t=n;do{let i=t.prev,s=t.next.next;!br(i,s)&&Rm(i,t,t.next,s)&&No(i,s)&&No(s,i)&&(e.push(i.i,t.i,s.i),Uo(t),Uo(t.next),t=n=s),t=t.next}while(t!==n);return Is(t)}function zx(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Kx(o,a)){let l=Cm(o,a);o=Is(o,o.next),l=Is(l,l.next),Lo(o,e,t,i,s,r,0),Lo(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Vx(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Em(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push($x(c))}s.sort(Gx);for(let r=0;r<s.length;r++)t=Wx(s[r],t);return t}function Gx(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Wx(n,e){let t=Xx(n,e);if(!t)return e;let i=Cm(t,n);return Is(i,i.next),Is(t,t.next)}function Xx(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(br(n,t))return t;do{if(br(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,d=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Am(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let h=Math.abs(s-t.y)/(i-t.x);No(t,n)&&(h<d||h===d&&(t.x>o.x||t.x===o.x&&qx(o,t)))&&(o=t,d=h)}t=t.next}while(t!==a);return o}function qx(n,e){return $t(n.prev,n,e.prev)<0&&$t(e.next,n,n.next)<0}function Yx(n,e,t,i){let s=n;do s.z===0&&(s.z=ad(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Zx(s)}function Zx(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function ad(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function $x(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Am(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function lo(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Am(n,e,t,i,s,r,o,a)}function Kx(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Jx(n,e)&&(No(n,e)&&No(e,n)&&jx(n,e)&&($t(n.prev,n,e.prev)||$t(n,e.prev,e))||br(n,e)&&$t(n.prev,n,n.next)>0&&$t(e.prev,e,e.next)>0)}function $t(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function br(n,e){return n.x===e.x&&n.y===e.y}function Rm(n,e,t,i){let s=ja($t(n,e,t)),r=ja($t(n,e,i)),o=ja($t(t,i,n)),a=ja($t(t,i,e));return!!(s!==r&&o!==a||s===0&&Ja(n,t,e)||r===0&&Ja(n,i,e)||o===0&&Ja(t,n,i)||a===0&&Ja(t,e,i))}function Ja(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ja(n){return n>0?1:n<0?-1:0}function Jx(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Rm(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function No(n,e){return $t(n.prev,n,n.next)<0?$t(n,e,n.next)>=0&&$t(n,n.prev,e)>=0:$t(n,e,n.prev)<0||$t(n,n.next,e)<0}function jx(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Cm(n,e){let t=ld(n.i,n.x,n.y),i=ld(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Pp(n,e,t,i){let s=ld(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Uo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ld(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Qx(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var cd=class{static triangulate(e,t,i=2){return Fx(e,t,i)}},fr=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Dp(e),Lp(i,e);let o=e.length;t.forEach(Dp);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Lp(i,t[l]);let a=cd.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Dp(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Lp(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Ps=class n extends bl{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Yn=class n extends Yt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,d=l+1,h=e/a,f=t/l,u=[],p=[],x=[],m=[];for(let g=0;g<d;g++){let y=g*f-o;for(let v=0;v<c;v++){let w=v*h-r;p.push(w,-y,0),x.push(0,0,1),m.push(v/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let v=y+c*g,w=y+c*(g+1),E=y+1+c*(g+1),T=y+1+c*g;u.push(v,w,T),u.push(w,E,T)}this.setIndex(u),this.setAttribute("position",new St(p,3)),this.setAttribute("normal",new St(x,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Ds=class n extends Yt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],d=[],h=e,f=(t-e)/s,u=new k,p=new Ue;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){let g=r+m/i*o;u.x=h*Math.cos(g),u.y=h*Math.sin(g),l.push(u.x,u.y,u.z),c.push(0,0,1),p.x=(u.x/t+1)/2,p.y=(u.y/t+1)/2,d.push(p.x,p.y)}h+=f}for(let x=0;x<s;x++){let m=x*(i+1);for(let g=0;g<i;g++){let y=g+m,v=y,w=y+i+1,E=y+i+2,T=y+1;a.push(v,w,T),a.push(w,E,T)}}this.setIndex(a),this.setAttribute("position",new St(l,3)),this.setAttribute("normal",new St(c,3)),this.setAttribute("uv",new St(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},ko=class n extends Yt{constructor(e=new Mr([new Ue(0,.5),new Ue(-.5,-.5),new Ue(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let d=0;d<e.length;d++)c(e[d]),this.addGroup(a,l,d),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new St(s,3)),this.setAttribute("normal",new St(r,3)),this.setAttribute("uv",new St(o,2));function c(d){let h=s.length/3,f=d.extractPoints(t),u=f.shape,p=f.holes;fr.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,g=p.length;m<g;m++){let y=p[m];fr.isClockWise(y)===!0&&(p[m]=y.reverse())}let x=fr.triangulateShape(u,p);for(let m=0,g=p.length;m<g;m++){let y=p[m];u=u.concat(y)}for(let m=0,g=u.length;m<g;m++){let y=u[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,g=x.length;m<g;m++){let y=x[m],v=y[0]+h,w=y[1]+h,E=y[2]+h;i.push(v,w,E),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return ey(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function ey(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var Ls=class n extends Yt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,d=[],h=new k,f=new k,u=[],p=[],x=[],m=[];for(let g=0;g<=i;g++){let y=[],v=g/i,w=0;g===0&&o===0?w=.5/t:g===i&&l===Math.PI&&(w=-.5/t);for(let E=0;E<=t;E++){let T=E/t;h.x=-e*Math.cos(s+T*r)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(s+T*r)*Math.sin(o+v*a),p.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(T+w,1-v),y.push(c++)}d.push(y)}for(let g=0;g<i;g++)for(let y=0;y<t;y++){let v=d[g][y+1],w=d[g][y],E=d[g+1][y],T=d[g+1][y+1];(g!==0||o>0)&&u.push(v,w,T),(g!==i-1||l<Math.PI)&&u.push(w,E,T)}this.setIndex(u),this.setAttribute("position",new St(p,3)),this.setAttribute("normal",new St(x,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Us(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Np(s))s.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Np(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Tn(n){let e={};for(let t=0;t<n.length;t++){let i=Us(n[t]);for(let s in i)e[s]=i[s]}return e}function Np(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function ty(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Nd(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}var Sm={clone:Us,merge:Tn},ny=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bn=class extends gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ny,this.fragmentShader=iy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.uniformsGroups=ty(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Sl=class extends Bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Sn=class extends gi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pc,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=Wl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Il=class extends gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Pl=class extends gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Qa(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}var os=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Dl=class extends os{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nd,endingEnd:nd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case id:r=e,a=2*t-i;break;case sd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case id:o=e,l=2*i-t;break;case sd:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,d=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,u=this._weightNext,p=(i-t)/(s-t),x=p*p,m=x*p,g=-f*m+2*f*x-f*p,y=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*p+1,v=(-1-u)*m+(1.5+u)*x+.5*p,w=u*m-u*x;for(let E=0;E!==a;++E)r[E]=g*o[d+E]+y*o[c+E]+v*o[l+E]+w*o[h+E];return r}},Ll=class extends os{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=(i-t)/(s-t),h=1-d;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*d;return r}},Nl=class extends os{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ul=class extends os{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this.settings||this.DefaultSettings_,h=d.inTangents,f=d.outTangents;if(!h||!f){let x=(i-t)/(s-t),m=1-x;for(let g=0;g!==a;++g)r[g]=o[c+g]*m+o[l+g]*x;return r}let u=a*2,p=e-1;for(let x=0;x!==a;++x){let m=o[c+x],g=o[l+x],y=p*u+x*2,v=f[y],w=f[y+1],E=e*u+x*2,T=h[E],P=h[E+1],_=(i-t)/(s-t),M,S,R,L,W;for(let X=0;X<8;X++){M=_*_,S=M*_,R=1-_,L=R*R,W=L*R;let B=W*t+3*L*_*v+3*R*M*T+S*s-i;if(Math.abs(B)<1e-10)break;let Y=3*L*(v-t)+6*R*_*(T-v)+3*M*(s-T);if(Math.abs(Y)<1e-10)break;_=_-B/Y,_=Math.max(0,Math.min(1,_))}r[x]=W*m+3*L*_*w+3*R*M*P+S*g}return r}},Hn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qa(t,this.TimeBufferType),this.values=Qa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Qa(e.times,Array),values:Qa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ul(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case fo:t=this.InterpolantFactoryMethodDiscrete;break;case ul:t=this.InterpolantFactoryMethodLinear;break;case nl:t=this.InterpolantFactoryMethodSmooth;break;case td:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return nt("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fo;case this.InterpolantFactoryMethodLinear:return ul;case this.InterpolantFactoryMethodSmooth:return nl;case this.InterpolantFactoryMethodBezier:return td}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(tt("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(tt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){tt("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){tt("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&cx(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){tt("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===nl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],d=e[a+1];if(c!==d&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*i,f=h-i,u=h+i;for(let p=0;p!==i;++p){let x=t[h+p];if(x!==t[f+p]||x!==t[u+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,f=o*i;for(let u=0;u!==i;++u)t[f+u]=t[h+u]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Hn.prototype.ValueTypeName="";Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=ul;var as=class extends Hn{constructor(e,t,i){super(e,t,i)}};as.prototype.ValueTypeName="bool";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=fo;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var kl=class extends Hn{constructor(e,t,i,s){super(e,t,i,s)}};kl.prototype.ValueTypeName="color";var Fl=class extends Hn{constructor(e,t,i,s){super(e,t,i,s)}};Fl.prototype.ValueTypeName="number";var Ol=class extends os{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let d=c+a;c!==d;c+=4)pi.slerpFlat(r,0,o,c-a,o,c,l);return r}},Fo=class extends Hn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Ol(this.times,this.values,this.getValueSize(),e)}};Fo.prototype.ValueTypeName="quaternion";Fo.prototype.InterpolantFactoryMethodSmooth=void 0;var ls=class extends Hn{constructor(e,t,i){super(e,t,i)}};ls.prototype.ValueTypeName="string";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=fo;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Bl=class extends Hn{constructor(e,t,i,s){super(e,t,i,s)}};Bl.prototype.ValueTypeName="vector";var Hl=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){let h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,f=c.length;h<f;h+=2){let u=c[h],p=c[h+1];if(u.global&&(u.lastIndex=0),u.test(d))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Im=new Hl,zl=class{constructor(e){this.manager=e!==void 0?e:Im,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};zl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Oo=class extends an{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Bo=class extends Oo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.groundColor=new it(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ed=new _t,Up=new k,kp=new k,hd=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _r,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Up.setFromMatrixPosition(e.matrixWorld),t.position.copy(Up),kp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kp),t.updateMatrixWorld(),ed.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ed,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===ur||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ed)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},el=new k,tl=new pi,li=new k,Ho=class extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(el,tl,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(el,tl,li.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(el,tl,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(el,tl,li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ts=new k,Fp=new Ue,Op=new Ue,bn=class extends Ho{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=gl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Rh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gl*2*Math.atan(Math.tan(Rh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ts.x,ts.y).multiplyScalar(-e/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ts.x,ts.y).multiplyScalar(-e/ts.z)}getViewSize(e,t){return this.getViewBounds(e,Fp,Op),t.subVectors(Op,Fp)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Rh*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var wr=class extends Ho{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},dd=class extends hd{constructor(){super(new wr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zo=class extends Oo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new dd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var cr=-90,hr=1,Vl=class extends an{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new bn(cr,hr,e,t);s.layers=this.layers,this.add(s);let r=new bn(cr,hr,e,t);r.layers=this.layers,this.add(r);let o=new bn(cr,hr,e,t);o.layers=this.layers,this.add(o);let a=new bn(cr,hr,e,t);a.layers=this.layers,this.add(a);let l=new bn(cr,hr,e,t);l.layers=this.layers,this.add(l);let c=new bn(cr,hr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ti)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ur)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(h,f,u),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Gl=class extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Ud="\\[\\]\\.:\\/",sy=new RegExp("["+Ud+"]","g"),kd="[^"+Ud+"]",ry="[^"+Ud.replace("\\.","")+"]",oy=/((?:WC+[\/:])*)/.source.replace("WC",kd),ay=/(WCOD+)?/.source.replace("WCOD",ry),ly=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kd),cy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kd),hy=new RegExp("^"+oy+ay+ly+cy+"$"),dy=["material","materials","bones","map"],fd=class{constructor(e,t,i){let s=i||Wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Wt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sy,"")}static parseTrackName(e){let t=hy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);dy.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){tt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){tt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){tt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){tt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){tt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;tt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Wt.Composite=fd;Wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Wt.prototype.GetterByBindingType=[Wt.prototype._getValue_direct,Wt.prototype._getValue_array,Wt.prototype._getValue_arrayElement,Wt.prototype._getValue_toArray];Wt.prototype.SetterByBindingTypeAndVersioning=[[Wt.prototype._setValue_direct,Wt.prototype._setValue_direct_setNeedsUpdate,Wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_array,Wt.prototype._setValue_array_setNeedsUpdate,Wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_arrayElement,Wt.prototype._setValue_arrayElement_setNeedsUpdate,Wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_fromArray,Wt.prototype._setValue_fromArray_setNeedsUpdate,Wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var eE=new Float32Array(1);var Bp=new _t,Vo=class{constructor(e,t,i=0,s=1/0){this.ray=new yr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new gr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):tt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Bp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bp),this}intersectObject(e,t=!0,i=[]){return ud(e,this,i,t),i.sort(Hp),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)ud(e[s],this,i,t);return i.sort(Hp),i}};function Hp(n,e){return n.distance-e.distance}function ud(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)ud(r[o],e,t,!0)}}var pd=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};function Fd(n,e,t,i){let s=fy(i);switch(t){case Id:return n*e;case Jl:return n*e/s.components*s.byteLength;case jl:return n*e/s.components*s.byteLength;case ds:return n*e*2/s.components*s.byteLength;case Ql:return n*e*2/s.components*s.byteLength;case Pd:return n*e*3/s.components*s.byteLength;case $n:return n*e*4/s.components*s.byteLength;case ec:return n*e*4/s.components*s.byteLength;case qo:case Yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Zo:case $o:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nc:case sc:return Math.max(n,16)*Math.max(e,8)/4;case tc:case ic:return Math.max(n,8)*Math.max(e,8)/2;case rc:case oc:case lc:case cc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ac:case Ko:case hc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case dc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case uc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case pc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case mc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case gc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case xc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case yc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case _c:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case vc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case bc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case wc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Tc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ec:case Ac:case Rc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Cc:case Sc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Jo:case Ic:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fy(n){switch(n){case Pn:case Ad:return{byteLength:1,components:1};case Er:case Rd:case Mi:return{byteLength:2,components:1};case $l:case Kl:return{byteLength:2,components:4};case ii:case Zl:case Zn:return{byteLength:4,components:1};case Cd:case Sd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");function Qm(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function py(n){let e=new WeakMap;function t(a,l){let c=a.array,d=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,d),a.onUploadCallback();let u;if(c instanceof Float32Array)u=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=n.HALF_FLOAT:u=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=n.SHORT;else if(c instanceof Uint32Array)u=n.UNSIGNED_INT;else if(c instanceof Int32Array)u=n.INT;else if(c instanceof Int8Array)u=n.BYTE;else if(c instanceof Uint8Array)u=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let d=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,d);else{h.sort((u,p)=>u.start-p.start);let f=0;for(let u=1;u<h.length;u++){let p=h[f],x=h[u];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,h[f]=x)}h.length=f+1;for(let u=0,p=h.length;u<p;u++){let x=h[u];n.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var my=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_y=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,My=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,by=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ty=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ey=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ay=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ry=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Iy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Py=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ly=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ny=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Uy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ky=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Fy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Oy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,By=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xy="gl_FragColor = linearToOutputTexel( gl_FragColor );",qy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Zy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$y=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ky=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,e_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,n_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,i_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,r_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,o_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,a_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,l_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,c_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,d_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,f_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,u_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,p_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,m_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,g_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x_=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,y_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,__=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,b_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,w_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,T_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,E_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,R_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,C_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,I_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,D_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,N_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,U_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,O_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,B_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,H_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,z_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,G_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,W_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,X_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,q_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Z_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,K_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,j_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Q_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ev=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,iv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ov=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,av=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,pv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_v=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Tv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Av=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Iv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Nv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ov=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Hv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Wv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:my,alphahash_pars_fragment:gy,alphamap_fragment:xy,alphamap_pars_fragment:yy,alphatest_fragment:_y,alphatest_pars_fragment:vy,aomap_fragment:My,aomap_pars_fragment:by,batching_pars_vertex:wy,batching_vertex:Ty,begin_vertex:Ey,beginnormal_vertex:Ay,bsdfs:Ry,iridescence_fragment:Cy,bumpmap_pars_fragment:Sy,clipping_planes_fragment:Iy,clipping_planes_pars_fragment:Py,clipping_planes_pars_vertex:Dy,clipping_planes_vertex:Ly,color_fragment:Ny,color_pars_fragment:Uy,color_pars_vertex:ky,color_vertex:Fy,common:Oy,cube_uv_reflection_fragment:By,defaultnormal_vertex:Hy,displacementmap_pars_vertex:zy,displacementmap_vertex:Vy,emissivemap_fragment:Gy,emissivemap_pars_fragment:Wy,colorspace_fragment:Xy,colorspace_pars_fragment:qy,envmap_fragment:Yy,envmap_common_pars_fragment:Zy,envmap_pars_fragment:$y,envmap_pars_vertex:Ky,envmap_physical_pars_fragment:a_,envmap_vertex:Jy,fog_vertex:jy,fog_pars_vertex:Qy,fog_fragment:e_,fog_pars_fragment:t_,gradientmap_pars_fragment:n_,lightmap_pars_fragment:i_,lights_lambert_fragment:s_,lights_lambert_pars_fragment:r_,lights_pars_begin:o_,lights_toon_fragment:l_,lights_toon_pars_fragment:c_,lights_phong_fragment:h_,lights_phong_pars_fragment:d_,lights_physical_fragment:f_,lights_physical_pars_fragment:u_,lights_fragment_begin:p_,lights_fragment_maps:m_,lights_fragment_end:g_,lightprobes_pars_fragment:x_,logdepthbuf_fragment:y_,logdepthbuf_pars_fragment:__,logdepthbuf_pars_vertex:v_,logdepthbuf_vertex:M_,map_fragment:b_,map_pars_fragment:w_,map_particle_fragment:T_,map_particle_pars_fragment:E_,metalnessmap_fragment:A_,metalnessmap_pars_fragment:R_,morphinstance_vertex:C_,morphcolor_vertex:S_,morphnormal_vertex:I_,morphtarget_pars_vertex:P_,morphtarget_vertex:D_,normal_fragment_begin:L_,normal_fragment_maps:N_,normal_pars_fragment:U_,normal_pars_vertex:k_,normal_vertex:F_,normalmap_pars_fragment:O_,clearcoat_normal_fragment_begin:B_,clearcoat_normal_fragment_maps:H_,clearcoat_pars_fragment:z_,iridescence_pars_fragment:V_,opaque_fragment:G_,packing:W_,premultiplied_alpha_fragment:X_,project_vertex:q_,dithering_fragment:Y_,dithering_pars_fragment:Z_,roughnessmap_fragment:$_,roughnessmap_pars_fragment:K_,shadowmap_pars_fragment:J_,shadowmap_pars_vertex:j_,shadowmap_vertex:Q_,shadowmask_pars_fragment:ev,skinbase_vertex:tv,skinning_pars_vertex:nv,skinning_vertex:iv,skinnormal_vertex:sv,specularmap_fragment:rv,specularmap_pars_fragment:ov,tonemapping_fragment:av,tonemapping_pars_fragment:lv,transmission_fragment:cv,transmission_pars_fragment:hv,uv_pars_fragment:dv,uv_pars_vertex:fv,uv_vertex:uv,worldpos_vertex:pv,background_vert:mv,background_frag:gv,backgroundCube_vert:xv,backgroundCube_frag:yv,cube_vert:_v,cube_frag:vv,depth_vert:Mv,depth_frag:bv,distance_vert:wv,distance_frag:Tv,equirect_vert:Ev,equirect_frag:Av,linedashed_vert:Rv,linedashed_frag:Cv,meshbasic_vert:Sv,meshbasic_frag:Iv,meshlambert_vert:Pv,meshlambert_frag:Dv,meshmatcap_vert:Lv,meshmatcap_frag:Nv,meshnormal_vert:Uv,meshnormal_frag:kv,meshphong_vert:Fv,meshphong_frag:Ov,meshphysical_vert:Bv,meshphysical_frag:Hv,meshtoon_vert:zv,meshtoon_frag:Vv,points_vert:Gv,points_frag:Wv,shadow_vert:Xv,shadow_frag:qv,sprite_vert:Yv,sprite_frag:Zv},Le={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},wi={basic:{uniforms:Tn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Tn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new it(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Tn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Tn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Tn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new it(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Tn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Tn([Le.points,Le.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Tn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Tn([Le.common,Le.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Tn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Tn([Le.sprite,Le.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:Tn([Le.common,Le.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:Tn([Le.lights,Le.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};wi.physical={uniforms:Tn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var Nc={r:0,b:0,g:0},$v=new _t,e0=new ot;e0.set(-1,0,0,0,1,0,0,0,1);function Kv(n,e,t,i,s,r){let o=new it(0),a=s===!0?0:1,l,c,d=null,h=0,f=null;function u(y){let v=y.isScene===!0?y.background:null;if(v&&v.isTexture){let w=y.backgroundBlurriness>0;v=e.get(v,w)}return v}function p(y){let v=!1,w=u(y);w===null?m(o,a):w&&w.isColor&&(m(w,1),v=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||v)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(y,v){let w=u(v);w&&(w.isCubeTexture||w.mapping===Wo)?(c===void 0&&(c=new ve(new rs(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:Us(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4($v.makeRotationFromEuler(v.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(e0),c.material.toneMapped=yt.getTransfer(w.colorSpace)!==Ct,(d!==w||h!==w.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=w,h=w.version,f=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new ve(new Yn(2,2),new Bn({name:"BackgroundMaterial",uniforms:Us(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=yt.getTransfer(w.colorSpace)!==Ct,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||h!==w.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=w,h=w.version,f=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,v){y.getRGB(Nc,Nd(n)),t.buffers.color.setClear(Nc.r,Nc.g,Nc.b,v,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),a=v,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:x,dispose:g}}function Jv(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(R,L,W,X,N){let B=!1,Y=h(R,X,W,L);r!==Y&&(r=Y,c(r.object)),B=u(R,X,W,N),B&&p(R,X,W,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,w(R,L,W,X),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return n.createVertexArray()}function c(R){return n.bindVertexArray(R)}function d(R){return n.deleteVertexArray(R)}function h(R,L,W,X){let N=X.wireframe===!0,B=i[L.id];B===void 0&&(B={},i[L.id]=B);let Y=R.isInstancedMesh===!0?R.id:0,ce=B[Y];ce===void 0&&(ce={},B[Y]=ce);let pe=ce[W.id];pe===void 0&&(pe={},ce[W.id]=pe);let Ee=pe[N];return Ee===void 0&&(Ee=f(l()),pe[N]=Ee),Ee}function f(R){let L=[],W=[],X=[];for(let N=0;N<t;N++)L[N]=0,W[N]=0,X[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:W,attributeDivisors:X,object:R,attributes:{},index:null}}function u(R,L,W,X){let N=r.attributes,B=L.attributes,Y=0,ce=W.getAttributes();for(let pe in ce)if(ce[pe].location>=0){let De=N[pe],He=B[pe];if(He===void 0&&(pe==="instanceMatrix"&&R.instanceMatrix&&(He=R.instanceMatrix),pe==="instanceColor"&&R.instanceColor&&(He=R.instanceColor)),De===void 0||De.attribute!==He||He&&De.data!==He.data)return!0;Y++}return r.attributesNum!==Y||r.index!==X}function p(R,L,W,X){let N={},B=L.attributes,Y=0,ce=W.getAttributes();for(let pe in ce)if(ce[pe].location>=0){let De=B[pe];De===void 0&&(pe==="instanceMatrix"&&R.instanceMatrix&&(De=R.instanceMatrix),pe==="instanceColor"&&R.instanceColor&&(De=R.instanceColor));let He={};He.attribute=De,De&&De.data&&(He.data=De.data),N[pe]=He,Y++}r.attributes=N,r.attributesNum=Y,r.index=X}function x(){let R=r.newAttributes;for(let L=0,W=R.length;L<W;L++)R[L]=0}function m(R){g(R,0)}function g(R,L){let W=r.newAttributes,X=r.enabledAttributes,N=r.attributeDivisors;W[R]=1,X[R]===0&&(n.enableVertexAttribArray(R),X[R]=1),N[R]!==L&&(n.vertexAttribDivisor(R,L),N[R]=L)}function y(){let R=r.newAttributes,L=r.enabledAttributes;for(let W=0,X=L.length;W<X;W++)L[W]!==R[W]&&(n.disableVertexAttribArray(W),L[W]=0)}function v(R,L,W,X,N,B,Y){Y===!0?n.vertexAttribIPointer(R,L,W,N,B):n.vertexAttribPointer(R,L,W,X,N,B)}function w(R,L,W,X){x();let N=X.attributes,B=W.getAttributes(),Y=L.defaultAttributeValues;for(let ce in B){let pe=B[ce];if(pe.location>=0){let Ee=N[ce];if(Ee===void 0&&(ce==="instanceMatrix"&&R.instanceMatrix&&(Ee=R.instanceMatrix),ce==="instanceColor"&&R.instanceColor&&(Ee=R.instanceColor)),Ee!==void 0){let De=Ee.normalized,He=Ee.itemSize,Qe=e.get(Ee);if(Qe===void 0)continue;let se=Qe.buffer,re=Qe.type,F=Qe.bytesPerElement,ne=re===n.INT||re===n.UNSIGNED_INT||Ee.gpuType===Zl;if(Ee.isInterleavedBufferAttribute){let oe=Ee.data,O=oe.stride,V=Ee.offset;if(oe.isInstancedInterleavedBuffer){for(let de=0;de<pe.locationSize;de++)g(pe.location+de,oe.meshPerAttribute);R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let de=0;de<pe.locationSize;de++)m(pe.location+de);n.bindBuffer(n.ARRAY_BUFFER,se);for(let de=0;de<pe.locationSize;de++)v(pe.location+de,He/pe.locationSize,re,De,O*F,(V+He/pe.locationSize*de)*F,ne)}else{if(Ee.isInstancedBufferAttribute){for(let oe=0;oe<pe.locationSize;oe++)g(pe.location+oe,Ee.meshPerAttribute);R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let oe=0;oe<pe.locationSize;oe++)m(pe.location+oe);n.bindBuffer(n.ARRAY_BUFFER,se);for(let oe=0;oe<pe.locationSize;oe++)v(pe.location+oe,He/pe.locationSize,re,De,He*F,He/pe.locationSize*oe*F,ne)}}else if(Y!==void 0){let De=Y[ce];if(De!==void 0)switch(De.length){case 2:n.vertexAttrib2fv(pe.location,De);break;case 3:n.vertexAttrib3fv(pe.location,De);break;case 4:n.vertexAttrib4fv(pe.location,De);break;default:n.vertexAttrib1fv(pe.location,De)}}}}y()}function E(){M();for(let R in i){let L=i[R];for(let W in L){let X=L[W];for(let N in X){let B=X[N];for(let Y in B)d(B[Y].object),delete B[Y];delete X[N]}}delete i[R]}}function T(R){if(i[R.id]===void 0)return;let L=i[R.id];for(let W in L){let X=L[W];for(let N in X){let B=X[N];for(let Y in B)d(B[Y].object),delete B[Y];delete X[N]}}delete i[R.id]}function P(R){for(let L in i){let W=i[L];for(let X in W){let N=W[X];if(N[R.id]===void 0)continue;let B=N[R.id];for(let Y in B)d(B[Y].object),delete B[Y];delete N[R.id]}}}function _(R){for(let L in i){let W=i[L],X=R.isInstancedMesh===!0?R.id:0,N=W[X];if(N!==void 0){for(let B in N){let Y=N[B];for(let ce in Y)d(Y[ce].object),delete Y[ce];delete N[B]}delete W[X],Object.keys(W).length===0&&delete i[L]}}}function M(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:M,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function jv(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,d){d!==0&&(n.drawArraysInstanced(i,l,c,d),t.update(c,i,d))}function a(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let f=0;for(let u=0;u<d;u++)f+=c[u];t.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Qv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==$n&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let _=P===Mi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Pn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Zn&&!_)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(nt("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:w,maxSamples:E,samples:T}}function eM(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Xn,a=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let u=h.length!==0||f||i!==0||s;return s=f,i=h.length,u},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=d(h,f,0)},this.setState=function(h,f,u){let p=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,g=n.get(h);if(!s||p===null||p.length===0||r&&!m)r?d(null):c();else{let y=r?0:i,v=y*4,w=g.clippingState||null;l.value=w,w=d(p,f,v,u);for(let E=0;E!==v;++E)w[E]=t[E];g.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,u,p){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=u+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let v=0,w=u;v!==x;++v,w+=4)o.copy(h[v]).applyMatrix4(y,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var fs=4,Pm=[.125,.215,.35,.446,.526,.582],ks=20,tM=256,jo=new wr,Dm=new it,Od=null,Bd=0,Hd=0,zd=!1,nM=new k,kc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=nM}=r;Od=this._renderer.getRenderTarget(),Bd=this._renderer.getActiveCubeFace(),Hd=this._renderer.getActiveMipmapLevel(),zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Um(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Od,Bd,Hd),this._renderer.xr.enabled=zd,e.scissorTest=!1,Rr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cs||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Od=this._renderer.getRenderTarget(),Bd=this._renderer.getActiveCubeFace(),Hd=this._renderer.getActiveMipmapLevel(),zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:Mi,format:$n,colorSpace:uo,depthBuffer:!1},s=Lm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lm(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=iM(r)),this._blurMaterial=rM(r,e,t),this._ggxMaterial=sM(r,e,t)}return s}_compileMaterial(e){let t=new ve(new Yt,e);this._renderer.compile(t,jo)}_sceneToCubeUV(e,t,i,s,r){let l=new bn(90,1,t,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(Dm),h.toneMapping=ni,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ve(new rs,new Xt({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,g=!1,y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,g=!0):(m.color.copy(Dm),g=!0);for(let v=0;v<6;v++){let w=v%3;w===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[v],r.y,r.z)):w===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[v]));let E=this._cubeSize;Rr(s,w*E,v>2?E:0,E,E),h.setRenderTarget(s),g&&h.render(x,l),h.render(e,l)}h.toneMapping=u,h.autoClear=f,e.background=y}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===cs||e.mapping===Ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Um()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nm());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Rr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,jo)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),f=0+c*1.25,u=h*f,{_lodMax:p}=this,x=this._sizeLods[i],m=3*x*(i>p-fs?i-p+fs:0),g=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=u,l.mipInt.value=p-t,Rr(r,m,g,3*x,2*x),s.setRenderTarget(r),s.render(a,jo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-i,Rr(e,m,g,3*x,2*x),s.setRenderTarget(e),s.render(a,jo)}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&tt("blur direction must be either latitudinal or longitudinal!");let d=3,h=this._lodMeshes[s];h.material=c;let f=c.uniforms,u=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*ks-1),x=r/p,m=isFinite(r)?1+Math.floor(d*x):ks;m>ks&&nt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ks}`);let g=[],y=0;for(let P=0;P<ks;++P){let _=P/x,M=Math.exp(-_*_/2);g.push(M),P===0?y+=M:P<m&&(y+=2*M)}for(let P=0;P<g.length;P++)g[P]=g[P]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=p,f.mipInt.value=v-i;let w=this._sizeLods[s],E=3*w*(s>v-fs?s-v+fs:0),T=4*(this._cubeSize-w);Rr(t,E,T,3*w,2*w),l.setRenderTarget(t),l.render(h,jo)}};function iM(n){let e=[],t=[],i=[],s=n,r=n-fs+1+Pm.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-fs?l=Pm[o-n+fs-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],u=6,p=6,x=3,m=2,g=1,y=new Float32Array(x*p*u),v=new Float32Array(m*p*u),w=new Float32Array(g*p*u);for(let T=0;T<u;T++){let P=T%3*2/3-1,_=T>2?0:-1,M=[P,_,0,P+2/3,_,0,P+2/3,_+1,0,P,_,0,P+2/3,_+1,0,P,_+1,0];y.set(M,x*p*T),v.set(f,m*p*T);let S=[T,T,T,T,T,T];w.set(S,g*p*T)}let E=new Yt;E.setAttribute("position",new en(y,x)),E.setAttribute("uv",new en(v,m)),E.setAttribute("faceIndex",new en(w,g)),i.push(new ve(E,null)),s>fs&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Lm(n,e,t){let i=new Fn(n,e,t);return i.texture.mapping=Wo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Rr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function sM(n,e,t){return new Bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:tM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function rM(n,e,t){let i=new Float32Array(ks),s=new k(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Nm(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Um(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Bc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Fc=class extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Eo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new rs(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:Us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:_i});r.uniforms.tEquirect.value=t;let o=new ve(s,r),a=t.minFilter;return t.minFilter===vi&&(t.minFilter=gn),new Vl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}};function oM(n){let e=new WeakMap,t=new WeakMap,i=null;function s(f,u=!1){return f==null?null:u?o(f):r(f)}function r(f){if(f&&f.isTexture){let u=f.mapping;if(u===Xl||u===ql)if(e.has(f)){let p=e.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let x=new Fc(p.height);return x.fromEquirectangularTexture(n,f),e.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let u=f.mapping,p=u===Xl||u===ql,x=u===cs||u===Ns;if(p||x){let m=t.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return i===null&&(i=new kc(n)),m=p?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let y=f.image;return p&&y&&y.height>0||x&&y&&l(y)?(i===null&&(i=new kc(n)),m=p?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",d),m.texture):null}}}return f}function a(f,u){return u===Xl?f.mapping=cs:u===ql&&(f.mapping=Ns),f}function l(f){let u=0,p=6;for(let x=0;x<p;x++)f[x]!==void 0&&u++;return u===p}function c(f){let u=f.target;u.removeEventListener("dispose",c);let p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function d(f){let u=f.target;u.removeEventListener("dispose",d);let p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function aM(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&ml("WebGLRenderer: "+i+" extension not supported."),s}}}function lM(n,e,t,i){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete s[f.id];let u=r.get(f);u&&(e.remove(u),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let u in f)e.update(f[u],n.ARRAY_BUFFER)}function c(h){let f=[],u=h.index,p=h.attributes.position,x=0;if(p===void 0)return;if(u!==null){let y=u.array;x=u.version;for(let v=0,w=y.length;v<w;v+=3){let E=y[v+0],T=y[v+1],P=y[v+2];f.push(E,T,T,P,P,E)}}else{let y=p.array;x=p.version;for(let v=0,w=y.length/3-1;v<w;v+=3){let E=v+0,T=v+1,P=v+2;f.push(E,T,T,P,P,E)}}let m=new(p.count>=65535?Mo:vo)(f,1);m.version=x;let g=r.get(h);g&&e.remove(g),r.set(h,m)}function d(h){let f=r.get(h);if(f){let u=h.index;u!==null&&f.version<u.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function cM(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){n.drawElements(i,f,r,h*o),t.update(f,i,1)}function c(h,f,u){u!==0&&(n.drawElementsInstanced(i,f,r,h*o,u),t.update(f,i,u))}function d(h,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,h,0,u);let x=0;for(let m=0;m<u;m++)x+=f[m];t.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function hM(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:tt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function dM(n,e,t){let i=new WeakMap,s=new Kt;function r(o,a,l){let c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0,f=i.get(a);if(f===void 0||f.count!==h){let M=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;u===!0&&(v=1),p===!0&&(v=2),x===!0&&(v=3);let w=a.attributes.position.count*v,E=1;w>e.maxTextureSize&&(E=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let T=new Float32Array(w*E*4*h),P=new xo(T,w,E,h);P.type=Zn,P.needsUpdate=!0;let _=v*4;for(let S=0;S<h;S++){let R=m[S],L=g[S],W=y[S],X=w*E*4*S;for(let N=0;N<R.count;N++){let B=N*_;u===!0&&(s.fromBufferAttribute(R,N),T[X+B+0]=s.x,T[X+B+1]=s.y,T[X+B+2]=s.z,T[X+B+3]=0),p===!0&&(s.fromBufferAttribute(L,N),T[X+B+4]=s.x,T[X+B+5]=s.y,T[X+B+6]=s.z,T[X+B+7]=0),x===!0&&(s.fromBufferAttribute(W,N),T[X+B+8]=s.x,T[X+B+9]=s.y,T[X+B+10]=s.z,T[X+B+11]=W.itemSize===4?s.w:1)}}f={count:h,texture:P,size:new Ue(w,E)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let u=0;for(let x=0;x<c.length;x++)u+=c[x];let p=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function fM(n,e,t,i,s){let r=new WeakMap;function o(c){let d=s.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==d&&(e.update(f),r.set(f,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==d&&(u.update(),r.set(u,d))}return f}function a(){r=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:a}}var uM={[yd]:"LINEAR_TONE_MAPPING",[_d]:"REINHARD_TONE_MAPPING",[vd]:"CINEON_TONE_MAPPING",[Md]:"ACES_FILMIC_TONE_MAPPING",[wd]:"AGX_TONE_MAPPING",[Td]:"NEUTRAL_TONE_MAPPING",[bd]:"CUSTOM_TONE_MAPPING"};function pM(n,e,t,i,s){let r=new Fn(e,t,{type:n,depthBuffer:i,stencilBuffer:s,depthTexture:i?new zi(e,t):void 0}),o=new Fn(e,t,{type:Mi,depthBuffer:!1,stencilBuffer:!1}),a=new Yt;a.setAttribute("position",new St([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new St([0,2,0,0,2,0],2));let l=new Sl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new ve(a,l),d=new wr(-1,1,1,-1,0,1),h=null,f=null,u=!1,p,x=null,m=[],g=!1;this.setSize=function(y,v){r.setSize(y,v),o.setSize(y,v);for(let w=0;w<m.length;w++){let E=m[w];E.setSize&&E.setSize(y,v)}},this.setEffects=function(y){m=y,g=m.length>0&&m[0].isRenderPass===!0;let v=r.width,w=r.height;for(let E=0;E<m.length;E++){let T=m[E];T.setSize&&T.setSize(v,w)}},this.begin=function(y,v){if(u||y.toneMapping===ni&&m.length===0)return!1;if(x=v,v!==null){let w=v.width,E=v.height;(r.width!==w||r.height!==E)&&this.setSize(w,E)}return g===!1&&y.setRenderTarget(r),p=y.toneMapping,y.toneMapping=ni,!0},this.hasRenderPass=function(){return g},this.end=function(y,v){y.toneMapping=p,u=!0;let w=r,E=o;for(let T=0;T<m.length;T++){let P=m[T];if(P.enabled!==!1&&(P.render(y,E,w,v),P.needsSwap!==!1)){let _=w;w=E,E=_}}if(h!==y.outputColorSpace||f!==y.toneMapping){h=y.outputColorSpace,f=y.toneMapping,l.defines={},yt.getTransfer(h)===Ct&&(l.defines.SRGB_TRANSFER="");let T=uM[f];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(x),y.render(c,d),x=null,u=!1},this.isCompositing=function(){return u},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),a.dispose(),l.dispose()}}var t0=new Rn,Wd=new zi(1,1),n0=new xo,i0=new _l,s0=new Eo,km=[],Fm=[],Om=new Float32Array(16),Bm=new Float32Array(9),Hm=new Float32Array(4);function Sr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=km[s];if(r===void 0&&(r=new Float32Array(s),km[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function hn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function dn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Hc(n,e){let t=Fm[e];t===void 0&&(t=new Int32Array(e),Fm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function mM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function gM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2fv(this.addr,e),dn(t,e)}}function xM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;n.uniform3fv(this.addr,e),dn(t,e)}}function yM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4fv(this.addr,e),dn(t,e)}}function _M(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,i))return;Hm.set(i),n.uniformMatrix2fv(this.addr,!1,Hm),dn(t,i)}}function vM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,i))return;Bm.set(i),n.uniformMatrix3fv(this.addr,!1,Bm),dn(t,i)}}function MM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,i))return;Om.set(i),n.uniformMatrix4fv(this.addr,!1,Om),dn(t,i)}}function bM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function wM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2iv(this.addr,e),dn(t,e)}}function TM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;n.uniform3iv(this.addr,e),dn(t,e)}}function EM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4iv(this.addr,e),dn(t,e)}}function AM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function RM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2uiv(this.addr,e),dn(t,e)}}function CM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;n.uniform3uiv(this.addr,e),dn(t,e)}}function SM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4uiv(this.addr,e),dn(t,e)}}function IM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Wd.compareFunction=t.isReversedDepthBuffer()?Lc:Dc,r=Wd):r=t0,t.setTexture2D(e||r,s)}function PM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||i0,s)}function DM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||s0,s)}function LM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||n0,s)}function NM(n){switch(n){case 5126:return mM;case 35664:return gM;case 35665:return xM;case 35666:return yM;case 35674:return _M;case 35675:return vM;case 35676:return MM;case 5124:case 35670:return bM;case 35667:case 35671:return wM;case 35668:case 35672:return TM;case 35669:case 35673:return EM;case 5125:return AM;case 36294:return RM;case 36295:return CM;case 36296:return SM;case 35678:case 36198:case 36298:case 36306:case 35682:return IM;case 35679:case 36299:case 36307:return PM;case 35680:case 36300:case 36308:case 36293:return DM;case 36289:case 36303:case 36311:case 36292:return LM}}function UM(n,e){n.uniform1fv(this.addr,e)}function kM(n,e){let t=Sr(e,this.size,2);n.uniform2fv(this.addr,t)}function FM(n,e){let t=Sr(e,this.size,3);n.uniform3fv(this.addr,t)}function OM(n,e){let t=Sr(e,this.size,4);n.uniform4fv(this.addr,t)}function BM(n,e){let t=Sr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function HM(n,e){let t=Sr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function zM(n,e){let t=Sr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function VM(n,e){n.uniform1iv(this.addr,e)}function GM(n,e){n.uniform2iv(this.addr,e)}function WM(n,e){n.uniform3iv(this.addr,e)}function XM(n,e){n.uniform4iv(this.addr,e)}function qM(n,e){n.uniform1uiv(this.addr,e)}function YM(n,e){n.uniform2uiv(this.addr,e)}function ZM(n,e){n.uniform3uiv(this.addr,e)}function $M(n,e){n.uniform4uiv(this.addr,e)}function KM(n,e,t){let i=this.cache,s=e.length,r=Hc(t,s);hn(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Wd:o=t0;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function JM(n,e,t){let i=this.cache,s=e.length,r=Hc(t,s);hn(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||i0,r[o])}function jM(n,e,t){let i=this.cache,s=e.length,r=Hc(t,s);hn(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||s0,r[o])}function QM(n,e,t){let i=this.cache,s=e.length,r=Hc(t,s);hn(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||n0,r[o])}function e1(n){switch(n){case 5126:return UM;case 35664:return kM;case 35665:return FM;case 35666:return OM;case 35674:return BM;case 35675:return HM;case 35676:return zM;case 5124:case 35670:return VM;case 35667:case 35671:return GM;case 35668:case 35672:return WM;case 35669:case 35673:return XM;case 5125:return qM;case 36294:return YM;case 36295:return ZM;case 36296:return $M;case 35678:case 36198:case 36298:case 36306:case 35682:return KM;case 35679:case 36299:case 36307:return JM;case 35680:case 36300:case 36308:case 36293:return jM;case 36289:case 36303:case 36311:case 36292:return QM}}var Xd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=NM(t.type)}},qd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=e1(t.type)}},Yd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Vd=/(\w+)(\])?(\[|\.)?/g;function zm(n,e){n.seq.push(e),n.map[e.id]=e}function t1(n,e,t){let i=n.name,s=i.length;for(Vd.lastIndex=0;;){let r=Vd.exec(i),o=Vd.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){zm(t,c===void 0?new Xd(a,n,e):new qd(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Yd(a),zm(t,h)),t=h}}}var Cr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);t1(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Vm(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var n1=37297,i1=0;function s1(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Gm=new ot;function r1(n){yt._getMatrix(Gm,yt.workingColorSpace,n);let e=`mat3( ${Gm.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(n)){case po:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Wm(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+s1(n.getShaderSource(e),a)}else return r}function o1(n,e){let t=r1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var a1={[yd]:"Linear",[_d]:"Reinhard",[vd]:"Cineon",[Md]:"ACESFilmic",[wd]:"AgX",[Td]:"Neutral",[bd]:"Custom"};function l1(n,e){let t=a1[e];return t===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Uc=new k;function c1(){yt.getLuminanceCoefficients(Uc);let n=Uc.x.toFixed(4),e=Uc.y.toFixed(4),t=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function h1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function d1(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function f1(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ea(n){return n!==""}function Xm(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var u1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zd(n){return n.replace(u1,m1)}var p1=new Map;function m1(n,e){let t=ft[e];if(t===void 0){let i=p1.get(e);if(i!==void 0)t=ft[i],nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Zd(t)}var g1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ym(n){return n.replace(g1,x1)}function x1(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zm(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var y1={[Go]:"SHADOWMAP_TYPE_PCF",[Tr]:"SHADOWMAP_TYPE_VSM"};function _1(n){return y1[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var v1={[cs]:"ENVMAP_TYPE_CUBE",[Ns]:"ENVMAP_TYPE_CUBE",[Wo]:"ENVMAP_TYPE_CUBE_UV"};function M1(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":v1[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var b1={[Ns]:"ENVMAP_MODE_REFRACTION"};function w1(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":b1[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var T1={[Wl]:"ENVMAP_BLENDING_MULTIPLY",[lm]:"ENVMAP_BLENDING_MIX",[cm]:"ENVMAP_BLENDING_ADD"};function E1(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":T1[n.combine]||"ENVMAP_BLENDING_NONE"}function A1(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function R1(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=_1(t),c=M1(t),d=w1(t),h=E1(t),f=A1(t),u=h1(t),p=d1(r),x=s.createProgram(),m,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ea).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ea).join(`
`),g.length>0&&(g+=`
`)):(m=[Zm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),g=[Zm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?ft.tonemapping_pars_fragment:"",t.toneMapping!==ni?l1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,o1("linearToOutputTexel",t.outputColorSpace),c1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ea).join(`
`)),o=Zd(o),o=Xm(o,t),o=qm(o,t),a=Zd(a),a=Xm(a,t),a=qm(a,t),o=Ym(o),a=Ym(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Dd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=y+m+o,w=y+g+a,E=Vm(s,s.VERTEX_SHADER,v),T=Vm(s,s.FRAGMENT_SHADER,w);s.attachShader(x,E),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(R){if(n.debug.checkShaderErrors){let L=s.getProgramInfoLog(x)||"",W=s.getShaderInfoLog(E)||"",X=s.getShaderInfoLog(T)||"",N=L.trim(),B=W.trim(),Y=X.trim(),ce=!0,pe=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ce=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,E,T);else{let Ee=Wm(s,E,"vertex"),De=Wm(s,T,"fragment");tt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+N+`
`+Ee+`
`+De)}else N!==""?nt("WebGLProgram: Program Info Log:",N):(B===""||Y==="")&&(pe=!1);pe&&(R.diagnostics={runnable:ce,programLog:N,vertexShader:{log:B,prefix:m},fragmentShader:{log:Y,prefix:g}})}s.deleteShader(E),s.deleteShader(T),_=new Cr(s,x),M=f1(s,x)}let _;this.getUniforms=function(){return _===void 0&&P(this),_};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,n1)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=i1++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=T,this}var C1=0,$d=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Kd(e),t.set(e,i)),i}},Kd=class{constructor(e){this.id=C1++,this.code=e,this.usedTimes=0}};function S1(n){return n===ds||n===Ko||n===Jo}function I1(n,e,t,i,s,r){let o=new gr,a=new $d,l=new Set,c=[],d=new Map,h=i.logarithmicDepthBuffer,f=i.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,M,S,R,L,W){let X=R.fog,N=L.geometry,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ce=e.get(_.envMap||B,Y),pe=ce&&ce.mapping===Wo?ce.image.height:null,Ee=u[_.type];_.precision!==null&&(f=i.getMaxPrecision(_.precision),f!==_.precision&&nt("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let De=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,He=De!==void 0?De.length:0,Qe=0;N.morphAttributes.position!==void 0&&(Qe=1),N.morphAttributes.normal!==void 0&&(Qe=2),N.morphAttributes.color!==void 0&&(Qe=3);let se,re,F,ne;if(Ee){let at=wi[Ee];se=at.vertexShader,re=at.fragmentShader}else se=_.vertexShader,re=_.fragmentShader,a.update(_),F=a.getVertexShaderID(_),ne=a.getFragmentShaderID(_);let oe=n.getRenderTarget(),O=n.state.buffers.depth.getReversed(),V=L.isInstancedMesh===!0,de=L.isBatchedMesh===!0,U=!!_.map,G=!!_.matcap,$=!!ce,Q=!!_.aoMap,ye=!!_.lightMap,I=!!_.bumpMap,ee=!!_.normalMap,K=!!_.displacementMap,D=!!_.emissiveMap,ue=!!_.metalnessMap,Ae=!!_.roughnessMap,ze=_.anisotropy>0,Me=_.clearcoat>0,dt=_.dispersion>0,C=_.iridescence>0,b=_.sheen>0,Z=_.transmission>0,ae=ze&&!!_.anisotropyMap,ge=Me&&!!_.clearcoatMap,Te=Me&&!!_.clearcoatNormalMap,Re=Me&&!!_.clearcoatRoughnessMap,le=C&&!!_.iridescenceMap,me=C&&!!_.iridescenceThicknessMap,Fe=b&&!!_.sheenColorMap,Ge=b&&!!_.sheenRoughnessMap,Ie=!!_.specularMap,Ce=!!_.specularColorMap,rt=!!_.specularIntensityMap,ct=Z&&!!_.transmissionMap,wt=Z&&!!_.thicknessMap,H=!!_.gradientMap,Se=!!_.alphaMap,he=_.alphaTest>0,Be=!!_.alphaHash,Pe=!!_.extensions,be=ni;_.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(be=n.toneMapping);let Ye={shaderID:Ee,shaderType:_.type,shaderName:_.name,vertexShader:se,fragmentShader:re,defines:_.defines,customVertexShaderID:F,customFragmentShaderID:ne,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:de,batchingColor:de&&L._colorsTexture!==null,instancing:V,instancingColor:V&&L.instanceColor!==null,instancingMorph:V&&L.morphTexture!==null,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:U,matcap:G,envMap:$,envMapMode:$&&ce.mapping,envMapCubeUVHeight:pe,aoMap:Q,lightMap:ye,bumpMap:I,normalMap:ee,displacementMap:K,emissiveMap:D,normalMapObjectSpace:ee&&_.normalMapType===fm,normalMapTangentSpace:ee&&_.normalMapType===Pc,packedNormalMap:ee&&_.normalMapType===Pc&&S1(_.normalMap.format),metalnessMap:ue,roughnessMap:Ae,anisotropy:ze,anisotropyMap:ae,clearcoat:Me,clearcoatMap:ge,clearcoatNormalMap:Te,clearcoatRoughnessMap:Re,dispersion:dt,iridescence:C,iridescenceMap:le,iridescenceThicknessMap:me,sheen:b,sheenColorMap:Fe,sheenRoughnessMap:Ge,specularMap:Ie,specularColorMap:Ce,specularIntensityMap:rt,transmission:Z,transmissionMap:ct,thicknessMap:wt,gradientMap:H,opaque:_.transparent===!1&&_.blending===ns&&_.alphaToCoverage===!1,alphaMap:Se,alphaTest:he,alphaHash:Be,combine:_.combine,mapUv:U&&p(_.map.channel),aoMapUv:Q&&p(_.aoMap.channel),lightMapUv:ye&&p(_.lightMap.channel),bumpMapUv:I&&p(_.bumpMap.channel),normalMapUv:ee&&p(_.normalMap.channel),displacementMapUv:K&&p(_.displacementMap.channel),emissiveMapUv:D&&p(_.emissiveMap.channel),metalnessMapUv:ue&&p(_.metalnessMap.channel),roughnessMapUv:Ae&&p(_.roughnessMap.channel),anisotropyMapUv:ae&&p(_.anisotropyMap.channel),clearcoatMapUv:ge&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:Te&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:me&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&p(_.sheenRoughnessMap.channel),specularMapUv:Ie&&p(_.specularMap.channel),specularColorMapUv:Ce&&p(_.specularColorMap.channel),specularIntensityMapUv:rt&&p(_.specularIntensityMap.channel),transmissionMapUv:ct&&p(_.transmissionMap.channel),thicknessMapUv:wt&&p(_.thicknessMap.channel),alphaMapUv:Se&&p(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ee||ze),vertexNormals:!!N.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!N.attributes.uv&&(U||Se),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||N.attributes.normal===void 0&&ee===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:O,skinning:L.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:He,morphTextureStride:Qe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&S.length>0,shadowMapType:n.shadowMap.type,toneMapping:be,decodeVideoTexture:U&&_.map.isVideoTexture===!0&&yt.getTransfer(_.map.colorSpace)===Ct,decodeVideoTextureEmissive:D&&_.emissiveMap.isVideoTexture===!0&&yt.getTransfer(_.emissiveMap.colorSpace)===Ct,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===In,flipSided:_.side===xn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Pe&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&_.extensions.multiDraw===!0||de)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ye.vertexUv1s=l.has(1),Ye.vertexUv2s=l.has(2),Ye.vertexUv3s=l.has(3),l.clear(),Ye}function m(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let S in _.defines)M.push(S),M.push(_.defines[S]);return _.isRawShaderMaterial===!1&&(g(M,_),y(M,_),M.push(n.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function g(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function y(_,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),_.push(o.mask)}function v(_){let M=u[_.type],S;if(M){let R=wi[M];S=Sm.clone(R.uniforms)}else S=_.uniforms;return S}function w(_,M){let S=d.get(M);return S!==void 0?++S.usedTimes:(S=new R1(n,M,_,s),c.push(S),d.set(M,S)),S}function E(_){if(--_.usedTimes===0){let M=c.indexOf(_);c[M]=c[c.length-1],c.pop(),d.delete(_.cacheKey),_.destroy()}}function T(_){a.remove(_)}function P(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:v,acquireProgram:w,releaseProgram:E,releaseShaderCache:T,programs:c,dispose:P}}function P1(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function D1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function $m(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Km(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function a(f,u,p,x,m,g){let y=n[e];return y===void 0?(y={id:f.id,object:f,geometry:u,material:p,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:g},n[e]=y):(y.id=f.id,y.object=f,y.geometry=u,y.material=p,y.materialVariant=o(f),y.groupOrder=x,y.renderOrder=f.renderOrder,y.z=m,y.group=g),e++,y}function l(f,u,p,x,m,g){let y=a(f,u,p,x,m,g);p.transmission>0?i.push(y):p.transparent===!0?s.push(y):t.push(y)}function c(f,u,p,x,m,g){let y=a(f,u,p,x,m,g);p.transmission>0?i.unshift(y):p.transparent===!0?s.unshift(y):t.unshift(y)}function d(f,u){t.length>1&&t.sort(f||D1),i.length>1&&i.sort(u||$m),s.length>1&&s.sort(u||$m)}function h(){for(let f=e,u=n.length;f<u;f++){let p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:h,sort:d}}function L1(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Km,n.set(i,[o])):s>=r.length?(o=new Km,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function N1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new it};break;case"SpotLight":t={position:new k,direction:new k,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function U1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var k1=0;function F1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function O1(n){let e=new N1,t=U1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);let s=new k,r=new _t,o=new _t;function a(c){let d=0,h=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let u=0,p=0,x=0,m=0,g=0,y=0,v=0,w=0,E=0,T=0,P=0;c.sort(F1);for(let M=0,S=c.length;M<S;M++){let R=c[M],L=R.color,W=R.intensity,X=R.distance,N=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===ds?N=R.shadow.map.texture:N=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)d+=L.r*W,h+=L.g*W,f+=L.b*W;else if(R.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(R.sh.coefficients[B],W);P++}else if(R.isDirectionalLight){let B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Y=R.shadow,ce=t.get(R);ce.shadowIntensity=Y.intensity,ce.shadowBias=Y.bias,ce.shadowNormalBias=Y.normalBias,ce.shadowRadius=Y.radius,ce.shadowMapSize=Y.mapSize,i.directionalShadow[u]=ce,i.directionalShadowMap[u]=N,i.directionalShadowMatrix[u]=R.shadow.matrix,y++}i.directional[u]=B,u++}else if(R.isSpotLight){let B=e.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(L).multiplyScalar(W),B.distance=X,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,i.spot[x]=B;let Y=R.shadow;if(R.map&&(i.spotLightMap[E]=R.map,E++,Y.updateMatrices(R),R.castShadow&&T++),i.spotLightMatrix[x]=Y.matrix,R.castShadow){let ce=t.get(R);ce.shadowIntensity=Y.intensity,ce.shadowBias=Y.bias,ce.shadowNormalBias=Y.normalBias,ce.shadowRadius=Y.radius,ce.shadowMapSize=Y.mapSize,i.spotShadow[x]=ce,i.spotShadowMap[x]=N,w++}x++}else if(R.isRectAreaLight){let B=e.get(R);B.color.copy(L).multiplyScalar(W),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=B,m++}else if(R.isPointLight){let B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),B.distance=R.distance,B.decay=R.decay,R.castShadow){let Y=R.shadow,ce=t.get(R);ce.shadowIntensity=Y.intensity,ce.shadowBias=Y.bias,ce.shadowNormalBias=Y.normalBias,ce.shadowRadius=Y.radius,ce.shadowMapSize=Y.mapSize,ce.shadowCameraNear=Y.camera.near,ce.shadowCameraFar=Y.camera.far,i.pointShadow[p]=ce,i.pointShadowMap[p]=N,i.pointShadowMatrix[p]=R.shadow.matrix,v++}i.point[p]=B,p++}else if(R.isHemisphereLight){let B=e.get(R);B.skyColor.copy(R.color).multiplyScalar(W),B.groundColor.copy(R.groundColor).multiplyScalar(W),i.hemi[g]=B,g++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Le.LTC_FLOAT_1,i.rectAreaLTC2=Le.LTC_FLOAT_2):(i.rectAreaLTC1=Le.LTC_HALF_1,i.rectAreaLTC2=Le.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;let _=i.hash;(_.directionalLength!==u||_.pointLength!==p||_.spotLength!==x||_.rectAreaLength!==m||_.hemiLength!==g||_.numDirectionalShadows!==y||_.numPointShadows!==v||_.numSpotShadows!==w||_.numSpotMaps!==E||_.numLightProbes!==P)&&(i.directional.length=u,i.spot.length=x,i.rectArea.length=m,i.point.length=p,i.hemi.length=g,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=w+E-T,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=P,_.directionalLength=u,_.pointLength=p,_.spotLength=x,_.rectAreaLength=m,_.hemiLength=g,_.numDirectionalShadows=y,_.numPointShadows=v,_.numSpotShadows=w,_.numSpotMaps=E,_.numLightProbes=P,i.version=k1++)}function l(c,d){let h=0,f=0,u=0,p=0,x=0,m=d.matrixWorldInverse;for(let g=0,y=c.length;g<y;g++){let v=c[g];if(v.isDirectionalLight){let w=i.directional[h];w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),h++}else if(v.isSpotLight){let w=i.spot[u];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),u++}else if(v.isRectAreaLight){let w=i.rectArea[p];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){let w=i.point[f];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let w=i.hemi[x];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Jm(n){let e=new O1(n),t=[],i=[],s=[];function r(f){h.camera=f,t.length=0,i.length=0,s.length=0}function o(f){t.push(f)}function a(f){i.push(f)}function l(f){s.push(f)}function c(){e.setup(t)}function d(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:d,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function B1(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Jm(n),e.set(s,[a])):r>=o.length?(a=new Jm(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var H1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,V1=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],G1=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],jm=new _t,Qo=new k,Gd=new k;function W1(n,e,t){let i=new _r,s=new Ue,r=new Ue,o=new Kt,a=new Il,l=new Pl,c={},d=t.maxTextureSize,h={[Fi]:xn,[xn]:Fi,[In]:In},f=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:H1,fragmentShader:z1}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let p=new Yt;p.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ve(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Go;let g=this.type;this.render=function(T,P,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Gp&&(nt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Go);let M=n.getRenderTarget(),S=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),L=n.state;L.setBlending(_i),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let W=g!==this.type;W&&P.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(N=>N.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,N=T.length;X<N;X++){let B=T[X],Y=B.shadow;if(Y===void 0){nt("WebGLShadowMap:",B,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let ce=Y.getFrameExtents();s.multiply(ce),r.copy(Y.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ce.x),s.x=r.x*ce.x,Y.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ce.y),s.y=r.y*ce.y,Y.mapSize.y=r.y));let pe=n.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=pe,Y.map===null||W===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Tr){if(B.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Fn(s.x,s.y,{format:ds,type:Mi,minFilter:gn,magFilter:gn,generateMipmaps:!1}),Y.map.texture.name=B.name+".shadowMap",Y.map.depthTexture=new zi(s.x,s.y,Zn),Y.map.depthTexture.name=B.name+".shadowMapDepth",Y.map.depthTexture.format=fi,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=pn,Y.map.depthTexture.magFilter=pn}else B.isPointLight?(Y.map=new Fc(s.x),Y.map.depthTexture=new Ml(s.x,ii)):(Y.map=new Fn(s.x,s.y),Y.map.depthTexture=new zi(s.x,s.y,ii)),Y.map.depthTexture.name=B.name+".shadowMap",Y.map.depthTexture.format=fi,this.type===Go?(Y.map.depthTexture.compareFunction=pe?Lc:Dc,Y.map.depthTexture.minFilter=gn,Y.map.depthTexture.magFilter=gn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=pn,Y.map.depthTexture.magFilter=pn);Y.camera.updateProjectionMatrix()}let Ee=Y.map.isWebGLCubeRenderTarget?6:1;for(let De=0;De<Ee;De++){if(Y.map.isWebGLCubeRenderTarget)n.setRenderTarget(Y.map,De),n.clear();else{De===0&&(n.setRenderTarget(Y.map),n.clear());let He=Y.getViewport(De);o.set(r.x*He.x,r.y*He.y,r.x*He.z,r.y*He.w),L.viewport(o)}if(B.isPointLight){let He=Y.camera,Qe=Y.matrix,se=B.distance||He.far;se!==He.far&&(He.far=se,He.updateProjectionMatrix()),Qo.setFromMatrixPosition(B.matrixWorld),He.position.copy(Qo),Gd.copy(He.position),Gd.add(V1[De]),He.up.copy(G1[De]),He.lookAt(Gd),He.updateMatrixWorld(),Qe.makeTranslation(-Qo.x,-Qo.y,-Qo.z),jm.multiplyMatrices(He.projectionMatrix,He.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(jm,He.coordinateSystem,He.reversedDepth)}else Y.updateMatrices(B);i=Y.getFrustum(),w(P,_,Y.camera,B,this.type)}Y.isPointLightShadow!==!0&&this.type===Tr&&y(Y,_),Y.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(M,S,R)};function y(T,P){let _=e.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,u.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Fn(s.x,s.y,{format:ds,type:Mi})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(P,null,_,f,x,null),u.uniforms.shadow_pass.value=T.mapPass.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(P,null,_,u,x,null)}function v(T,P,_,M){let S=null,R=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)S=R;else if(S=_.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let L=S.uuid,W=P.uuid,X=c[L];X===void 0&&(X={},c[L]=X);let N=X[W];N===void 0&&(N=S.clone(),X[W]=N,P.addEventListener("dispose",E)),S=N}if(S.visible=P.visible,S.wireframe=P.wireframe,M===Tr?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:h[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,_.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let L=n.properties.get(S);L.light=_}return S}function w(T,P,_,M,S){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Tr)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);let W=e.update(T),X=T.material;if(Array.isArray(X)){let N=W.groups;for(let B=0,Y=N.length;B<Y;B++){let ce=N[B],pe=X[ce.materialIndex];if(pe&&pe.visible){let Ee=v(T,pe,M,S);T.onBeforeShadow(n,T,P,_,W,Ee,ce),n.renderBufferDirect(_,null,W,Ee,T,ce),T.onAfterShadow(n,T,P,_,W,Ee,ce)}}}else if(X.visible){let N=v(T,X,M,S);T.onBeforeShadow(n,T,P,_,W,N,null),n.renderBufferDirect(_,null,W,N,T,null),T.onAfterShadow(n,T,P,_,W,N,null)}}let L=T.children;for(let W=0,X=L.length;W<X;W++)w(L[W],P,_,M,S)}function E(T){T.target.removeEventListener("dispose",E);for(let _ in c){let M=c[_],S=T.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function X1(n,e){function t(){let H=!1,Se=new Kt,he=null,Be=new Kt(0,0,0,0);return{setMask:function(Pe){he!==Pe&&!H&&(n.colorMask(Pe,Pe,Pe,Pe),he=Pe)},setLocked:function(Pe){H=Pe},setClear:function(Pe,be,Ye,at,tn){tn===!0&&(Pe*=at,be*=at,Ye*=at),Se.set(Pe,be,Ye,at),Be.equals(Se)===!1&&(n.clearColor(Pe,be,Ye,at),Be.copy(Se))},reset:function(){H=!1,he=null,Be.set(-1,0,0,0)}}}function i(){let H=!1,Se=!1,he=null,Be=null,Pe=null;return{setReversed:function(be){if(Se!==be){let Ye=e.get("EXT_clip_control");be?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),Se=be;let at=Pe;Pe=null,this.setClear(at)}},getReversed:function(){return Se},setTest:function(be){be?oe(n.DEPTH_TEST):O(n.DEPTH_TEST)},setMask:function(be){he!==be&&!H&&(n.depthMask(be),he=be)},setFunc:function(be){if(Se&&(be=bm[be]),Be!==be){switch(be){case rl:n.depthFunc(n.NEVER);break;case ol:n.depthFunc(n.ALWAYS);break;case al:n.depthFunc(n.LESS);break;case Rs:n.depthFunc(n.LEQUAL);break;case ll:n.depthFunc(n.EQUAL);break;case cl:n.depthFunc(n.GEQUAL);break;case hl:n.depthFunc(n.GREATER);break;case dl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Be=be}},setLocked:function(be){H=be},setClear:function(be){Pe!==be&&(Pe=be,Se&&(be=1-be),n.clearDepth(be))},reset:function(){H=!1,he=null,Be=null,Pe=null,Se=!1}}}function s(){let H=!1,Se=null,he=null,Be=null,Pe=null,be=null,Ye=null,at=null,tn=null;return{setTest:function(Pt){H||(Pt?oe(n.STENCIL_TEST):O(n.STENCIL_TEST))},setMask:function(Pt){Se!==Pt&&!H&&(n.stencilMask(Pt),Se=Pt)},setFunc:function(Pt,Ti,si){(he!==Pt||Be!==Ti||Pe!==si)&&(n.stencilFunc(Pt,Ti,si),he=Pt,Be=Ti,Pe=si)},setOp:function(Pt,Ti,si){(be!==Pt||Ye!==Ti||at!==si)&&(n.stencilOp(Pt,Ti,si),be=Pt,Ye=Ti,at=si)},setLocked:function(Pt){H=Pt},setClear:function(Pt){tn!==Pt&&(n.clearStencil(Pt),tn=Pt)},reset:function(){H=!1,Se=null,he=null,Be=null,Pe=null,be=null,Ye=null,at=null,tn=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,d={},h={},f={},u=new WeakMap,p=[],x=null,m=!1,g=null,y=null,v=null,w=null,E=null,T=null,P=null,_=new it(0,0,0),M=0,S=!1,R=null,L=null,W=null,X=null,N=null,B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,ce=0,pe=n.getParameter(n.VERSION);pe.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(pe)[1]),Y=ce>=1):pe.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(pe)[1]),Y=ce>=2);let Ee=null,De={},He=n.getParameter(n.SCISSOR_BOX),Qe=n.getParameter(n.VIEWPORT),se=new Kt().fromArray(He),re=new Kt().fromArray(Qe);function F(H,Se,he,Be){let Pe=new Uint8Array(4),be=n.createTexture();n.bindTexture(H,be),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ye=0;Ye<he;Ye++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(Se,0,n.RGBA,1,1,Be,0,n.RGBA,n.UNSIGNED_BYTE,Pe):n.texImage2D(Se+Ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Pe);return be}let ne={};ne[n.TEXTURE_2D]=F(n.TEXTURE_2D,n.TEXTURE_2D,1),ne[n.TEXTURE_CUBE_MAP]=F(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[n.TEXTURE_2D_ARRAY]=F(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ne[n.TEXTURE_3D]=F(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(n.DEPTH_TEST),o.setFunc(Rs),I(!1),ee(md),oe(n.CULL_FACE),Q(_i);function oe(H){d[H]!==!0&&(n.enable(H),d[H]=!0)}function O(H){d[H]!==!1&&(n.disable(H),d[H]=!1)}function V(H,Se){return f[H]!==Se?(n.bindFramebuffer(H,Se),f[H]=Se,H===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Se),H===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Se),!0):!1}function de(H,Se){let he=p,Be=!1;if(H){he=u.get(Se),he===void 0&&(he=[],u.set(Se,he));let Pe=H.textures;if(he.length!==Pe.length||he[0]!==n.COLOR_ATTACHMENT0){for(let be=0,Ye=Pe.length;be<Ye;be++)he[be]=n.COLOR_ATTACHMENT0+be;he.length=Pe.length,Be=!0}}else he[0]!==n.BACK&&(he[0]=n.BACK,Be=!0);Be&&n.drawBuffers(he)}function U(H){return x!==H?(n.useProgram(H),x=H,!0):!1}let G={[is]:n.FUNC_ADD,[Xp]:n.FUNC_SUBTRACT,[qp]:n.FUNC_REVERSE_SUBTRACT};G[Yp]=n.MIN,G[Zp]=n.MAX;let $={[$p]:n.ZERO,[Kp]:n.ONE,[Jp]:n.SRC_COLOR,[il]:n.SRC_ALPHA,[im]:n.SRC_ALPHA_SATURATE,[tm]:n.DST_COLOR,[Qp]:n.DST_ALPHA,[jp]:n.ONE_MINUS_SRC_COLOR,[sl]:n.ONE_MINUS_SRC_ALPHA,[nm]:n.ONE_MINUS_DST_COLOR,[em]:n.ONE_MINUS_DST_ALPHA,[sm]:n.CONSTANT_COLOR,[rm]:n.ONE_MINUS_CONSTANT_COLOR,[om]:n.CONSTANT_ALPHA,[am]:n.ONE_MINUS_CONSTANT_ALPHA};function Q(H,Se,he,Be,Pe,be,Ye,at,tn,Pt){if(H===_i){m===!0&&(O(n.BLEND),m=!1);return}if(m===!1&&(oe(n.BLEND),m=!0),H!==Wp){if(H!==g||Pt!==S){if((y!==is||E!==is)&&(n.blendEquation(n.FUNC_ADD),y=is,E=is),Pt)switch(H){case ns:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wn:n.blendFunc(n.ONE,n.ONE);break;case gd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xd:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:tt("WebGLState: Invalid blending: ",H);break}else switch(H){case ns:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case gd:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xd:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",H);break}v=null,w=null,T=null,P=null,_.set(0,0,0),M=0,g=H,S=Pt}return}Pe=Pe||Se,be=be||he,Ye=Ye||Be,(Se!==y||Pe!==E)&&(n.blendEquationSeparate(G[Se],G[Pe]),y=Se,E=Pe),(he!==v||Be!==w||be!==T||Ye!==P)&&(n.blendFuncSeparate($[he],$[Be],$[be],$[Ye]),v=he,w=Be,T=be,P=Ye),(at.equals(_)===!1||tn!==M)&&(n.blendColor(at.r,at.g,at.b,tn),_.copy(at),M=tn),g=H,S=!1}function ye(H,Se){H.side===In?O(n.CULL_FACE):oe(n.CULL_FACE);let he=H.side===xn;Se&&(he=!he),I(he),H.blending===ns&&H.transparent===!1?Q(_i):Q(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let Be=H.stencilWrite;a.setTest(Be),Be&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),D(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):O(n.SAMPLE_ALPHA_TO_COVERAGE)}function I(H){R!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),R=H)}function ee(H){H!==zp?(oe(n.CULL_FACE),H!==L&&(H===md?n.cullFace(n.BACK):H===Vp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):O(n.CULL_FACE),L=H}function K(H){H!==W&&(Y&&n.lineWidth(H),W=H)}function D(H,Se,he){H?(oe(n.POLYGON_OFFSET_FILL),(X!==Se||N!==he)&&(X=Se,N=he,o.getReversed()&&(Se=-Se),n.polygonOffset(Se,he))):O(n.POLYGON_OFFSET_FILL)}function ue(H){H?oe(n.SCISSOR_TEST):O(n.SCISSOR_TEST)}function Ae(H){H===void 0&&(H=n.TEXTURE0+B-1),Ee!==H&&(n.activeTexture(H),Ee=H)}function ze(H,Se,he){he===void 0&&(Ee===null?he=n.TEXTURE0+B-1:he=Ee);let Be=De[he];Be===void 0&&(Be={type:void 0,texture:void 0},De[he]=Be),(Be.type!==H||Be.texture!==Se)&&(Ee!==he&&(n.activeTexture(he),Ee=he),n.bindTexture(H,Se||ne[H]),Be.type=H,Be.texture=Se)}function Me(){let H=De[Ee];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function dt(){try{n.compressedTexImage2D(...arguments)}catch(H){tt("WebGLState:",H)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(H){tt("WebGLState:",H)}}function b(){try{n.texSubImage2D(...arguments)}catch(H){tt("WebGLState:",H)}}function Z(){try{n.texSubImage3D(...arguments)}catch(H){tt("WebGLState:",H)}}function ae(){try{n.compressedTexSubImage2D(...arguments)}catch(H){tt("WebGLState:",H)}}function ge(){try{n.compressedTexSubImage3D(...arguments)}catch(H){tt("WebGLState:",H)}}function Te(){try{n.texStorage2D(...arguments)}catch(H){tt("WebGLState:",H)}}function Re(){try{n.texStorage3D(...arguments)}catch(H){tt("WebGLState:",H)}}function le(){try{n.texImage2D(...arguments)}catch(H){tt("WebGLState:",H)}}function me(){try{n.texImage3D(...arguments)}catch(H){tt("WebGLState:",H)}}function Fe(H){return h[H]!==void 0?h[H]:n.getParameter(H)}function Ge(H,Se){h[H]!==Se&&(n.pixelStorei(H,Se),h[H]=Se)}function Ie(H){se.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),se.copy(H))}function Ce(H){re.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),re.copy(H))}function rt(H,Se){let he=c.get(Se);he===void 0&&(he=new WeakMap,c.set(Se,he));let Be=he.get(H);Be===void 0&&(Be=n.getUniformBlockIndex(Se,H.name),he.set(H,Be))}function ct(H,Se){let Be=c.get(Se).get(H);l.get(Se)!==Be&&(n.uniformBlockBinding(Se,Be,H.__bindingPointIndex),l.set(Se,Be))}function wt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},h={},Ee=null,De={},f={},u=new WeakMap,p=[],x=null,m=!1,g=null,y=null,v=null,w=null,E=null,T=null,P=null,_=new it(0,0,0),M=0,S=!1,R=null,L=null,W=null,X=null,N=null,se.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:oe,disable:O,bindFramebuffer:V,drawBuffers:de,useProgram:U,setBlending:Q,setMaterial:ye,setFlipSided:I,setCullFace:ee,setLineWidth:K,setPolygonOffset:D,setScissorTest:ue,activeTexture:Ae,bindTexture:ze,unbindTexture:Me,compressedTexImage2D:dt,compressedTexImage3D:C,texImage2D:le,texImage3D:me,pixelStorei:Ge,getParameter:Fe,updateUBOMapping:rt,uniformBlockBinding:ct,texStorage2D:Te,texStorage3D:Re,texSubImage2D:b,texSubImage3D:Z,compressedTexSubImage2D:ae,compressedTexSubImage3D:ge,scissor:Ie,viewport:Ce,reset:wt}}function q1(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,d=new WeakMap,h=new Set,f,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,b){return p?new OffscreenCanvas(C,b):mo("canvas")}function m(C,b,Z){let ae=1,ge=dt(C);if((ge.width>Z||ge.height>Z)&&(ae=Z/Math.max(ge.width,ge.height)),ae<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let Te=Math.floor(ae*ge.width),Re=Math.floor(ae*ge.height);f===void 0&&(f=x(Te,Re));let le=b?x(Te,Re):f;return le.width=Te,le.height=Re,le.getContext("2d").drawImage(C,0,0,Te,Re),nt("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Te+"x"+Re+")."),le}else return"data"in C&&nt("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),C;return C}function g(C){return C.generateMipmaps}function y(C){n.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(C,b,Z,ae,ge,Te=!1){if(C!==null){if(n[C]!==void 0)return n[C];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Re;ae&&(Re=e.get("EXT_texture_norm16"),Re||nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let le=b;if(b===n.RED&&(Z===n.FLOAT&&(le=n.R32F),Z===n.HALF_FLOAT&&(le=n.R16F),Z===n.UNSIGNED_BYTE&&(le=n.R8),Z===n.UNSIGNED_SHORT&&Re&&(le=Re.R16_EXT),Z===n.SHORT&&Re&&(le=Re.R16_SNORM_EXT)),b===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(le=n.R8UI),Z===n.UNSIGNED_SHORT&&(le=n.R16UI),Z===n.UNSIGNED_INT&&(le=n.R32UI),Z===n.BYTE&&(le=n.R8I),Z===n.SHORT&&(le=n.R16I),Z===n.INT&&(le=n.R32I)),b===n.RG&&(Z===n.FLOAT&&(le=n.RG32F),Z===n.HALF_FLOAT&&(le=n.RG16F),Z===n.UNSIGNED_BYTE&&(le=n.RG8),Z===n.UNSIGNED_SHORT&&Re&&(le=Re.RG16_EXT),Z===n.SHORT&&Re&&(le=Re.RG16_SNORM_EXT)),b===n.RG_INTEGER&&(Z===n.UNSIGNED_BYTE&&(le=n.RG8UI),Z===n.UNSIGNED_SHORT&&(le=n.RG16UI),Z===n.UNSIGNED_INT&&(le=n.RG32UI),Z===n.BYTE&&(le=n.RG8I),Z===n.SHORT&&(le=n.RG16I),Z===n.INT&&(le=n.RG32I)),b===n.RGB_INTEGER&&(Z===n.UNSIGNED_BYTE&&(le=n.RGB8UI),Z===n.UNSIGNED_SHORT&&(le=n.RGB16UI),Z===n.UNSIGNED_INT&&(le=n.RGB32UI),Z===n.BYTE&&(le=n.RGB8I),Z===n.SHORT&&(le=n.RGB16I),Z===n.INT&&(le=n.RGB32I)),b===n.RGBA_INTEGER&&(Z===n.UNSIGNED_BYTE&&(le=n.RGBA8UI),Z===n.UNSIGNED_SHORT&&(le=n.RGBA16UI),Z===n.UNSIGNED_INT&&(le=n.RGBA32UI),Z===n.BYTE&&(le=n.RGBA8I),Z===n.SHORT&&(le=n.RGBA16I),Z===n.INT&&(le=n.RGBA32I)),b===n.RGB&&(Z===n.UNSIGNED_SHORT&&Re&&(le=Re.RGB16_EXT),Z===n.SHORT&&Re&&(le=Re.RGB16_SNORM_EXT),Z===n.UNSIGNED_INT_5_9_9_9_REV&&(le=n.RGB9_E5),Z===n.UNSIGNED_INT_10F_11F_11F_REV&&(le=n.R11F_G11F_B10F)),b===n.RGBA){let me=Te?po:yt.getTransfer(ge);Z===n.FLOAT&&(le=n.RGBA32F),Z===n.HALF_FLOAT&&(le=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(le=me===Ct?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT&&Re&&(le=Re.RGBA16_EXT),Z===n.SHORT&&Re&&(le=Re.RGBA16_SNORM_EXT),Z===n.UNSIGNED_SHORT_4_4_4_4&&(le=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(le=n.RGB5_A1)}return(le===n.R16F||le===n.R32F||le===n.RG16F||le===n.RG32F||le===n.RGBA16F||le===n.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function E(C,b){let Z;return C?b===null||b===ii||b===Ar?Z=n.DEPTH24_STENCIL8:b===Zn?Z=n.DEPTH32F_STENCIL8:b===Er&&(Z=n.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ii||b===Ar?Z=n.DEPTH_COMPONENT24:b===Zn?Z=n.DEPTH_COMPONENT32F:b===Er&&(Z=n.DEPTH_COMPONENT16),Z}function T(C,b){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==pn&&C.minFilter!==gn?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function P(C){let b=C.target;b.removeEventListener("dispose",P),M(b),b.isVideoTexture&&d.delete(b),b.isHTMLTexture&&h.delete(b)}function _(C){let b=C.target;b.removeEventListener("dispose",_),R(b)}function M(C){let b=i.get(C);if(b.__webglInit===void 0)return;let Z=C.source,ae=u.get(Z);if(ae){let ge=ae[b.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&S(C),Object.keys(ae).length===0&&u.delete(Z)}i.remove(C)}function S(C){let b=i.get(C);n.deleteTexture(b.__webglTexture);let Z=C.source,ae=u.get(Z);delete ae[b.__cacheKey],o.memory.textures--}function R(C){let b=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(b.__webglFramebuffer[ae]))for(let ge=0;ge<b.__webglFramebuffer[ae].length;ge++)n.deleteFramebuffer(b.__webglFramebuffer[ae][ge]);else n.deleteFramebuffer(b.__webglFramebuffer[ae]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[ae])}else{if(Array.isArray(b.__webglFramebuffer))for(let ae=0;ae<b.__webglFramebuffer.length;ae++)n.deleteFramebuffer(b.__webglFramebuffer[ae]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ae=0;ae<b.__webglColorRenderbuffer.length;ae++)b.__webglColorRenderbuffer[ae]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[ae]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let Z=C.textures;for(let ae=0,ge=Z.length;ae<ge;ae++){let Te=i.get(Z[ae]);Te.__webglTexture&&(n.deleteTexture(Te.__webglTexture),o.memory.textures--),i.remove(Z[ae])}i.remove(C)}let L=0;function W(){L=0}function X(){return L}function N(C){L=C}function B(){let C=L;return C>=s.maxTextures&&nt("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),L+=1,C}function Y(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function ce(C,b){let Z=i.get(C);if(C.isVideoTexture&&ze(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&Z.__version!==C.version){let ae=C.image;if(ae===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{O(Z,C,b);return}}else C.isExternalTexture&&(Z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+b)}function pe(C,b){let Z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Z.__version!==C.version){O(Z,C,b);return}else C.isExternalTexture&&(Z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+b)}function Ee(C,b){let Z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Z.__version!==C.version){O(Z,C,b);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+b)}function De(C,b){let Z=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&Z.__version!==C.version){V(Z,C,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+b)}let He={[di]:n.REPEAT,[hi]:n.CLAMP_TO_EDGE,[fl]:n.MIRRORED_REPEAT},Qe={[pn]:n.NEAREST,[hm]:n.NEAREST_MIPMAP_NEAREST,[Xo]:n.NEAREST_MIPMAP_LINEAR,[gn]:n.LINEAR,[Yl]:n.LINEAR_MIPMAP_NEAREST,[vi]:n.LINEAR_MIPMAP_LINEAR},se={[um]:n.NEVER,[ym]:n.ALWAYS,[pm]:n.LESS,[Dc]:n.LEQUAL,[mm]:n.EQUAL,[Lc]:n.GEQUAL,[gm]:n.GREATER,[xm]:n.NOTEQUAL};function re(C,b){if(b.type===Zn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===gn||b.magFilter===Yl||b.magFilter===Xo||b.magFilter===vi||b.minFilter===gn||b.minFilter===Yl||b.minFilter===Xo||b.minFilter===vi)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,He[b.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,He[b.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,He[b.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Qe[b.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Qe[b.minFilter]),b.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,se[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===pn||b.minFilter!==Xo&&b.minFilter!==vi||b.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let Z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function F(C,b){let Z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",P));let ae=b.source,ge=u.get(ae);ge===void 0&&(ge={},u.set(ae,ge));let Te=Y(b);if(Te!==C.__cacheKey){ge[Te]===void 0&&(ge[Te]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),ge[Te].usedTimes++;let Re=ge[C.__cacheKey];Re!==void 0&&(ge[C.__cacheKey].usedTimes--,Re.usedTimes===0&&S(b)),C.__cacheKey=Te,C.__webglTexture=ge[Te].texture}return Z}function ne(C,b,Z){return Math.floor(Math.floor(C/Z)/b)}function oe(C,b,Z,ae){let Te=C.updateRanges;if(Te.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,Z,ae,b.data);else{Te.sort((Ge,Ie)=>Ge.start-Ie.start);let Re=0;for(let Ge=1;Ge<Te.length;Ge++){let Ie=Te[Re],Ce=Te[Ge],rt=Ie.start+Ie.count,ct=ne(Ce.start,b.width,4),wt=ne(Ie.start,b.width,4);Ce.start<=rt+1&&ct===wt&&ne(Ce.start+Ce.count-1,b.width,4)===ct?Ie.count=Math.max(Ie.count,Ce.start+Ce.count-Ie.start):(++Re,Te[Re]=Ce)}Te.length=Re+1;let le=t.getParameter(n.UNPACK_ROW_LENGTH),me=t.getParameter(n.UNPACK_SKIP_PIXELS),Fe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let Ge=0,Ie=Te.length;Ge<Ie;Ge++){let Ce=Te[Ge],rt=Math.floor(Ce.start/4),ct=Math.ceil(Ce.count/4),wt=rt%b.width,H=Math.floor(rt/b.width),Se=ct,he=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,wt),t.pixelStorei(n.UNPACK_SKIP_ROWS,H),t.texSubImage2D(n.TEXTURE_2D,0,wt,H,Se,he,Z,ae,b.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,le),t.pixelStorei(n.UNPACK_SKIP_PIXELS,me),t.pixelStorei(n.UNPACK_SKIP_ROWS,Fe)}}function O(C,b,Z){let ae=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ae=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ae=n.TEXTURE_3D);let ge=F(C,b),Te=b.source;t.bindTexture(ae,C.__webglTexture,n.TEXTURE0+Z);let Re=i.get(Te);if(Te.version!==Re.__version||ge===!0){if(t.activeTexture(n.TEXTURE0+Z),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let he=yt.getPrimaries(yt.workingColorSpace),Be=b.colorSpace===Vi?null:yt.getPrimaries(b.colorSpace),Pe=b.colorSpace===Vi||he===Be?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe)}t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment);let me=m(b.image,!1,s.maxTextureSize);me=Me(b,me);let Fe=r.convert(b.format,b.colorSpace),Ge=r.convert(b.type),Ie=w(b.internalFormat,Fe,Ge,b.normalized,b.colorSpace,b.isVideoTexture);re(ae,b);let Ce,rt=b.mipmaps,ct=b.isVideoTexture!==!0,wt=Re.__version===void 0||ge===!0,H=Te.dataReady,Se=T(b,me);if(b.isDepthTexture)Ie=E(b.format===hs,b.type),wt&&(ct?t.texStorage2D(n.TEXTURE_2D,1,Ie,me.width,me.height):t.texImage2D(n.TEXTURE_2D,0,Ie,me.width,me.height,0,Fe,Ge,null));else if(b.isDataTexture)if(rt.length>0){ct&&wt&&t.texStorage2D(n.TEXTURE_2D,Se,Ie,rt[0].width,rt[0].height);for(let he=0,Be=rt.length;he<Be;he++)Ce=rt[he],ct?H&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Ce.width,Ce.height,Fe,Ge,Ce.data):t.texImage2D(n.TEXTURE_2D,he,Ie,Ce.width,Ce.height,0,Fe,Ge,Ce.data);b.generateMipmaps=!1}else ct?(wt&&t.texStorage2D(n.TEXTURE_2D,Se,Ie,me.width,me.height),H&&oe(b,me,Fe,Ge)):t.texImage2D(n.TEXTURE_2D,0,Ie,me.width,me.height,0,Fe,Ge,me.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ct&&wt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,Ie,rt[0].width,rt[0].height,me.depth);for(let he=0,Be=rt.length;he<Be;he++)if(Ce=rt[he],b.format!==$n)if(Fe!==null)if(ct){if(H)if(b.layerUpdates.size>0){let Pe=Fd(Ce.width,Ce.height,b.format,b.type);for(let be of b.layerUpdates){let Ye=Ce.data.subarray(be*Pe/Ce.data.BYTES_PER_ELEMENT,(be+1)*Pe/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,be,Ce.width,Ce.height,1,Fe,Ye)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Ce.width,Ce.height,me.depth,Fe,Ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,Ie,Ce.width,Ce.height,me.depth,0,Ce.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ct?H&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Ce.width,Ce.height,me.depth,Fe,Ge,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,Ie,Ce.width,Ce.height,me.depth,0,Fe,Ge,Ce.data)}else{ct&&wt&&t.texStorage2D(n.TEXTURE_2D,Se,Ie,rt[0].width,rt[0].height);for(let he=0,Be=rt.length;he<Be;he++)Ce=rt[he],b.format!==$n?Fe!==null?ct?H&&t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,Ce.width,Ce.height,Fe,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,he,Ie,Ce.width,Ce.height,0,Ce.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?H&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Ce.width,Ce.height,Fe,Ge,Ce.data):t.texImage2D(n.TEXTURE_2D,he,Ie,Ce.width,Ce.height,0,Fe,Ge,Ce.data)}else if(b.isDataArrayTexture)if(ct){if(wt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,Ie,me.width,me.height,me.depth),H)if(b.layerUpdates.size>0){let he=Fd(me.width,me.height,b.format,b.type);for(let Be of b.layerUpdates){let Pe=me.data.subarray(Be*he/me.data.BYTES_PER_ELEMENT,(Be+1)*he/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Be,me.width,me.height,1,Fe,Ge,Pe)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Fe,Ge,me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,me.width,me.height,me.depth,0,Fe,Ge,me.data);else if(b.isData3DTexture)ct?(wt&&t.texStorage3D(n.TEXTURE_3D,Se,Ie,me.width,me.height,me.depth),H&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Fe,Ge,me.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,me.width,me.height,me.depth,0,Fe,Ge,me.data);else if(b.isFramebufferTexture){if(wt)if(ct)t.texStorage2D(n.TEXTURE_2D,Se,Ie,me.width,me.height);else{let he=me.width,Be=me.height;for(let Pe=0;Pe<Se;Pe++)t.texImage2D(n.TEXTURE_2D,Pe,Ie,he,Be,0,Fe,Ge,null),he>>=1,Be>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in n){let he=n.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),me.parentNode!==he){he.appendChild(me),h.add(b),he.onpaint=at=>{let tn=at.changedElements;for(let Pt of h)tn.includes(Pt.image)&&(Pt.needsUpdate=!0)},he.requestPaint();return}let Be=0,Pe=n.RGBA,be=n.RGBA,Ye=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,Be,Pe,be,Ye,me),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(rt.length>0){if(ct&&wt){let he=dt(rt[0]);t.texStorage2D(n.TEXTURE_2D,Se,Ie,he.width,he.height)}for(let he=0,Be=rt.length;he<Be;he++)Ce=rt[he],ct?H&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Fe,Ge,Ce):t.texImage2D(n.TEXTURE_2D,he,Ie,Fe,Ge,Ce);b.generateMipmaps=!1}else if(ct){if(wt){let he=dt(me);t.texStorage2D(n.TEXTURE_2D,Se,Ie,he.width,he.height)}H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Fe,Ge,me)}else t.texImage2D(n.TEXTURE_2D,0,Ie,Fe,Ge,me);g(b)&&y(ae),Re.__version=Te.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function V(C,b,Z){if(b.image.length!==6)return;let ae=F(C,b),ge=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+Z);let Te=i.get(ge);if(ge.version!==Te.__version||ae===!0){t.activeTexture(n.TEXTURE0+Z);let Re=yt.getPrimaries(yt.workingColorSpace),le=b.colorSpace===Vi?null:yt.getPrimaries(b.colorSpace),me=b.colorSpace===Vi||Re===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let Fe=b.isCompressedTexture||b.image[0].isCompressedTexture,Ge=b.image[0]&&b.image[0].isDataTexture,Ie=[];for(let be=0;be<6;be++)!Fe&&!Ge?Ie[be]=m(b.image[be],!0,s.maxCubemapSize):Ie[be]=Ge?b.image[be].image:b.image[be],Ie[be]=Me(b,Ie[be]);let Ce=Ie[0],rt=r.convert(b.format,b.colorSpace),ct=r.convert(b.type),wt=w(b.internalFormat,rt,ct,b.normalized,b.colorSpace),H=b.isVideoTexture!==!0,Se=Te.__version===void 0||ae===!0,he=ge.dataReady,Be=T(b,Ce);re(n.TEXTURE_CUBE_MAP,b);let Pe;if(Fe){H&&Se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Be,wt,Ce.width,Ce.height);for(let be=0;be<6;be++){Pe=Ie[be].mipmaps;for(let Ye=0;Ye<Pe.length;Ye++){let at=Pe[Ye];b.format!==$n?rt!==null?H?he&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye,0,0,at.width,at.height,rt,at.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye,wt,at.width,at.height,0,at.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye,0,0,at.width,at.height,rt,ct,at.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye,wt,at.width,at.height,0,rt,ct,at.data)}}}else{if(Pe=b.mipmaps,H&&Se){Pe.length>0&&Be++;let be=dt(Ie[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Be,wt,be.width,be.height)}for(let be=0;be<6;be++)if(Ge){H?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Ie[be].width,Ie[be].height,rt,ct,Ie[be].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,wt,Ie[be].width,Ie[be].height,0,rt,ct,Ie[be].data);for(let Ye=0;Ye<Pe.length;Ye++){let tn=Pe[Ye].image[be].image;H?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye+1,0,0,tn.width,tn.height,rt,ct,tn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye+1,wt,tn.width,tn.height,0,rt,ct,tn.data)}}else{H?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,rt,ct,Ie[be]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,wt,rt,ct,Ie[be]);for(let Ye=0;Ye<Pe.length;Ye++){let at=Pe[Ye];H?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye+1,0,0,rt,ct,at.image[be]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye+1,wt,rt,ct,at.image[be])}}}g(b)&&y(n.TEXTURE_CUBE_MAP),Te.__version=ge.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function de(C,b,Z,ae,ge,Te){let Re=r.convert(Z.format,Z.colorSpace),le=r.convert(Z.type),me=w(Z.internalFormat,Re,le,Z.normalized,Z.colorSpace),Fe=i.get(b),Ge=i.get(Z);if(Ge.__renderTarget=b,!Fe.__hasExternalTextures){let Ie=Math.max(1,b.width>>Te),Ce=Math.max(1,b.height>>Te);ge===n.TEXTURE_3D||ge===n.TEXTURE_2D_ARRAY?t.texImage3D(ge,Te,me,Ie,Ce,b.depth,0,Re,le,null):t.texImage2D(ge,Te,me,Ie,Ce,0,Re,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Ae(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,ge,Ge.__webglTexture,0,ue(b)):(ge===n.TEXTURE_2D||ge>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ae,ge,Ge.__webglTexture,Te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function U(C,b,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,C),b.depthBuffer){let ae=b.depthTexture,ge=ae&&ae.isDepthTexture?ae.type:null,Te=E(b.stencilBuffer,ge),Re=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ae(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue(b),Te,b.width,b.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue(b),Te,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Te,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Re,n.RENDERBUFFER,C)}else{let ae=b.textures;for(let ge=0;ge<ae.length;ge++){let Te=ae[ge],Re=r.convert(Te.format,Te.colorSpace),le=r.convert(Te.type),me=w(Te.internalFormat,Re,le,Te.normalized,Te.colorSpace);Ae(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue(b),me,b.width,b.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue(b),me,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,me,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function G(C,b,Z){let ae=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ge=i.get(b.depthTexture);if(ge.__renderTarget=b,(!ge.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ae){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,b.depthTexture.addEventListener("dispose",P)),ge.__webglTexture===void 0){ge.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ge.__webglTexture),re(n.TEXTURE_CUBE_MAP,b.depthTexture);let Fe=r.convert(b.depthTexture.format),Ge=r.convert(b.depthTexture.type),Ie;b.depthTexture.format===fi?Ie=n.DEPTH_COMPONENT24:b.depthTexture.format===hs&&(Ie=n.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Ie,b.width,b.height,0,Fe,Ge,null)}}else ce(b.depthTexture,0);let Te=ge.__webglTexture,Re=ue(b),le=ae?n.TEXTURE_CUBE_MAP_POSITIVE_X+Z:n.TEXTURE_2D,me=b.depthTexture.format===hs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===fi)Ae(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,le,Te,0,Re):n.framebufferTexture2D(n.FRAMEBUFFER,me,le,Te,0);else if(b.depthTexture.format===hs)Ae(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,le,Te,0,Re):n.framebufferTexture2D(n.FRAMEBUFFER,me,le,Te,0);else throw new Error("Unknown depthTexture format")}function $(C){let b=i.get(C),Z=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){let ae=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ae){let ge=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ae.removeEventListener("dispose",ge)};ae.addEventListener("dispose",ge),b.__depthDisposeCallback=ge}b.__boundDepthTexture=ae}if(C.depthTexture&&!b.__autoAllocateDepthBuffer)if(Z)for(let ae=0;ae<6;ae++)G(b.__webglFramebuffer[ae],C,ae);else{let ae=C.texture.mipmaps;ae&&ae.length>0?G(b.__webglFramebuffer[0],C,0):G(b.__webglFramebuffer,C,0)}else if(Z){b.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[ae]),b.__webglDepthbuffer[ae]===void 0)b.__webglDepthbuffer[ae]=n.createRenderbuffer(),U(b.__webglDepthbuffer[ae],C,!1);else{let ge=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=b.__webglDepthbuffer[ae];n.bindRenderbuffer(n.RENDERBUFFER,Te),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,Te)}}else{let ae=C.texture.mipmaps;if(ae&&ae.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),U(b.__webglDepthbuffer,C,!1);else{let ge=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Te),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,Te)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Q(C,b,Z){let ae=i.get(C);b!==void 0&&de(ae.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&$(C)}function ye(C){let b=C.texture,Z=i.get(C),ae=i.get(b);C.addEventListener("dispose",_);let ge=C.textures,Te=C.isWebGLCubeRenderTarget===!0,Re=ge.length>1;if(Re||(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=b.version,o.memory.textures++),Te){Z.__webglFramebuffer=[];for(let le=0;le<6;le++)if(b.mipmaps&&b.mipmaps.length>0){Z.__webglFramebuffer[le]=[];for(let me=0;me<b.mipmaps.length;me++)Z.__webglFramebuffer[le][me]=n.createFramebuffer()}else Z.__webglFramebuffer[le]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Z.__webglFramebuffer=[];for(let le=0;le<b.mipmaps.length;le++)Z.__webglFramebuffer[le]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(Re)for(let le=0,me=ge.length;le<me;le++){let Fe=i.get(ge[le]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&Ae(C)===!1){Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let le=0;le<ge.length;le++){let me=ge[le];Z.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[le]);let Fe=r.convert(me.format,me.colorSpace),Ge=r.convert(me.type),Ie=w(me.internalFormat,Fe,Ge,me.normalized,me.colorSpace,C.isXRRenderTarget===!0),Ce=ue(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,Ie,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,Z.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),U(Z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Te){t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),re(n.TEXTURE_CUBE_MAP,b);for(let le=0;le<6;le++)if(b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)de(Z.__webglFramebuffer[le][me],C,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,me);else de(Z.__webglFramebuffer[le],C,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);g(b)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let le=0,me=ge.length;le<me;le++){let Fe=ge[le],Ge=i.get(Fe),Ie=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Ie=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ie,Ge.__webglTexture),re(Ie,Fe),de(Z.__webglFramebuffer,C,Fe,n.COLOR_ATTACHMENT0+le,Ie,0),g(Fe)&&y(Ie)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(le=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,ae.__webglTexture),re(le,b),b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)de(Z.__webglFramebuffer[me],C,b,n.COLOR_ATTACHMENT0,le,me);else de(Z.__webglFramebuffer,C,b,n.COLOR_ATTACHMENT0,le,0);g(b)&&y(le),t.unbindTexture()}C.depthBuffer&&$(C)}function I(C){let b=C.textures;for(let Z=0,ae=b.length;Z<ae;Z++){let ge=b[Z];if(g(ge)){let Te=v(C),Re=i.get(ge).__webglTexture;t.bindTexture(Te,Re),y(Te),t.unbindTexture()}}}let ee=[],K=[];function D(C){if(C.samples>0){if(Ae(C)===!1){let b=C.textures,Z=C.width,ae=C.height,ge=n.COLOR_BUFFER_BIT,Te=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=i.get(C),le=b.length>1;if(le)for(let Fe=0;Fe<b.length;Fe++)t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);let me=C.texture.mipmaps;me&&me.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Fe=0;Fe<b.length;Fe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ge|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ge|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Re.__webglColorRenderbuffer[Fe]);let Ge=i.get(b[Fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ge,0)}n.blitFramebuffer(0,0,Z,ae,0,0,Z,ae,ge,n.NEAREST),l===!0&&(ee.length=0,K.length=0,ee.push(n.COLOR_ATTACHMENT0+Fe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ee.push(Te),K.push(Te),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,K)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ee))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let Fe=0;Fe<b.length;Fe++){t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,Re.__webglColorRenderbuffer[Fe]);let Ge=i.get(b[Fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,Ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let b=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function ue(C){return Math.min(s.maxSamples,C.samples)}function Ae(C){let b=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ze(C){let b=o.render.frame;d.get(C)!==b&&(d.set(C,b),C.update())}function Me(C,b){let Z=C.colorSpace,ae=C.format,ge=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Z!==uo&&Z!==Vi&&(yt.getTransfer(Z)===Ct?(ae!==$n||ge!==Pn)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",Z)),b}function dt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=W,this.getTextureUnits=X,this.setTextureUnits=N,this.setTexture2D=ce,this.setTexture2DArray=pe,this.setTexture3D=Ee,this.setTextureCube=De,this.rebindTextures=Q,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Ae,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Y1(n,e){function t(i,s=Vi){let r,o=yt.getTransfer(s);if(i===Pn)return n.UNSIGNED_BYTE;if(i===$l)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Kl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Cd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Sd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ad)return n.BYTE;if(i===Rd)return n.SHORT;if(i===Er)return n.UNSIGNED_SHORT;if(i===Zl)return n.INT;if(i===ii)return n.UNSIGNED_INT;if(i===Zn)return n.FLOAT;if(i===Mi)return n.HALF_FLOAT;if(i===Id)return n.ALPHA;if(i===Pd)return n.RGB;if(i===$n)return n.RGBA;if(i===fi)return n.DEPTH_COMPONENT;if(i===hs)return n.DEPTH_STENCIL;if(i===Jl)return n.RED;if(i===jl)return n.RED_INTEGER;if(i===ds)return n.RG;if(i===Ql)return n.RG_INTEGER;if(i===ec)return n.RGBA_INTEGER;if(i===qo||i===Yo||i===Zo||i===$o)if(o===Ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===qo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===qo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Yo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===tc||i===nc||i===ic||i===sc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===tc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ic)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rc||i===oc||i===ac||i===lc||i===cc||i===Ko||i===hc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===rc||i===oc)return o===Ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ac)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===lc)return r.COMPRESSED_R11_EAC;if(i===cc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ko)return r.COMPRESSED_RG11_EAC;if(i===hc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===dc||i===fc||i===uc||i===pc||i===mc||i===gc||i===xc||i===yc||i===_c||i===vc||i===Mc||i===bc||i===wc||i===Tc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===dc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===uc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===mc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_c)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Tc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ec||i===Ac||i===Rc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ec)return o===Ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ac)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Rc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Cc||i===Sc||i===Jo||i===Ic)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Cc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Sc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Jo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ic)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ar?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Z1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Jd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ao(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Bn({vertexShader:Z1,fragmentShader:$1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ve(new Yn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},jd=class extends ui{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,f=null,u=null,p=null,x=typeof XRWebGLBinding<"u",m=new Jd,g={},y=t.getContextAttributes(),v=null,w=null,E=[],T=[],P=new Ue,_=null,M=new bn;M.viewport=new Kt;let S=new bn;S.viewport=new Kt;let R=[M,S],L=new Gl,W=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let ne=E[F];return ne===void 0&&(ne=new xr,E[F]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(F){let ne=E[F];return ne===void 0&&(ne=new xr,E[F]=ne),ne.getGripSpace()},this.getHand=function(F){let ne=E[F];return ne===void 0&&(ne=new xr,E[F]=ne),ne.getHandSpace()};function N(F){let ne=T.indexOf(F.inputSource);if(ne===-1)return;let oe=E[ne];oe!==void 0&&(oe.update(F.inputSource,F.frame,c||o),oe.dispatchEvent({type:F.type,data:F.inputSource}))}function B(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",Y);for(let F=0;F<E.length;F++){let ne=T[F];ne!==null&&(T[F]=null,E[F].disconnect(ne))}W=null,X=null,m.reset();for(let F in g)delete g[F];e.setRenderTarget(v),u=null,f=null,h=null,s=null,w=null,re.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,i.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,i.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(F){if(s=F,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",B),s.addEventListener("inputsourceschange",Y),y.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(P),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,O=null,V=null;y.depth&&(V=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=y.stencil?hs:fi,O=y.stencil?Ar:ii);let de={colorFormat:t.RGBA8,depthFormat:V,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(de),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new Fn(f.textureWidth,f.textureHeight,{format:$n,type:Pn,depthTexture:new zi(f.textureWidth,f.textureHeight,O,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let oe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),w=new Fn(u.framebufferWidth,u.framebufferHeight,{format:$n,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),re.setContext(s),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(F){for(let ne=0;ne<F.removed.length;ne++){let oe=F.removed[ne],O=T.indexOf(oe);O>=0&&(T[O]=null,E[O].disconnect(oe))}for(let ne=0;ne<F.added.length;ne++){let oe=F.added[ne],O=T.indexOf(oe);if(O===-1){for(let de=0;de<E.length;de++)if(de>=T.length){T.push(oe),O=de;break}else if(T[de]===null){T[de]=oe,O=de;break}if(O===-1)break}let V=E[O];V&&V.connect(oe)}}let ce=new k,pe=new k;function Ee(F,ne,oe){ce.setFromMatrixPosition(ne.matrixWorld),pe.setFromMatrixPosition(oe.matrixWorld);let O=ce.distanceTo(pe),V=ne.projectionMatrix.elements,de=oe.projectionMatrix.elements,U=V[14]/(V[10]-1),G=V[14]/(V[10]+1),$=(V[9]+1)/V[5],Q=(V[9]-1)/V[5],ye=(V[8]-1)/V[0],I=(de[8]+1)/de[0],ee=U*ye,K=U*I,D=O/(-ye+I),ue=D*-ye;if(ne.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(ue),F.translateZ(D),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),V[10]===-1)F.projectionMatrix.copy(ne.projectionMatrix),F.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let Ae=U+D,ze=G+D,Me=ee-ue,dt=K+(O-ue),C=$*G/ze*Ae,b=Q*G/ze*Ae;F.projectionMatrix.makePerspective(Me,dt,C,b,Ae,ze),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function De(F,ne){ne===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(ne.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(s===null)return;let ne=F.near,oe=F.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(oe=m.depthFar)),L.near=S.near=M.near=ne,L.far=S.far=M.far=oe,(W!==L.near||X!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),W=L.near,X=L.far),L.layers.mask=F.layers.mask|6,M.layers.mask=L.layers.mask&-5,S.layers.mask=L.layers.mask&-3;let O=F.parent,V=L.cameras;De(L,O);for(let de=0;de<V.length;de++)De(V[de],O);V.length===2?Ee(L,M,S):L.projectionMatrix.copy(M.projectionMatrix),He(F,L,O)};function He(F,ne,oe){oe===null?F.matrix.copy(ne.matrixWorld):(F.matrix.copy(oe.matrixWorld),F.matrix.invert(),F.matrix.multiply(ne.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(ne.projectionMatrix),F.projectionMatrixInverse.copy(ne.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=gl*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(F){l=F,f!==null&&(f.fixedFoveation=F),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=F)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(F){return g[F]};let Qe=null;function se(F,ne){if(d=ne.getViewerPose(c||o),p=ne,d!==null){let oe=d.views;u!==null&&(e.setRenderTargetFramebuffer(w,u.framebuffer),e.setRenderTarget(w));let O=!1;oe.length!==L.cameras.length&&(L.cameras.length=0,O=!0);for(let G=0;G<oe.length;G++){let $=oe[G],Q=null;if(u!==null)Q=u.getViewport($);else{let I=h.getViewSubImage(f,$);Q=I.viewport,G===0&&(e.setRenderTargetTextures(w,I.colorTexture,I.depthStencilTexture),e.setRenderTarget(w))}let ye=R[G];ye===void 0&&(ye=new bn,ye.layers.enable(G),ye.viewport=new Kt,R[G]=ye),ye.matrix.fromArray($.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray($.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Q.x,Q.y,Q.width,Q.height),G===0&&(L.matrix.copy(ye.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),O===!0&&L.cameras.push(ye)}let V=s.enabledFeatures;if(V&&V.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=i.getBinding();let G=h.getDepthInformation(oe[0]);G&&G.isValid&&G.texture&&m.init(G,s.renderState)}if(V&&V.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let G=0;G<oe.length;G++){let $=oe[G].camera;if($){let Q=g[$];Q||(Q=new Ao,g[$]=Q);let ye=h.getCameraImage($);Q.sourceTexture=ye}}}}for(let oe=0;oe<E.length;oe++){let O=T[oe],V=E[oe];O!==null&&V!==void 0&&V.update(O,ne,c||o)}Qe&&Qe(F,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),p=null}let re=new Qm;re.setAnimationLoop(se),this.setAnimationLoop=function(F){Qe=F},this.dispose=function(){}}},K1=new _t,r0=new ot;r0.set(-1,0,0,0,1,0,0,0,1);function J1(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Nd(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,y,v,w){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),h(m,g)):g.isMeshPhongMaterial?(r(m,g),d(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&u(m,g,w)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,v):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===xn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===xn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=e.get(g),v=y.envMap,w=y.envMapRotation;v&&(m.envMap.value=v,m.envMapRotation.value.setFromMatrix4(K1.makeRotationFromEuler(w)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(r0),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,v){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=v*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function d(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function u(m,g,y){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===xn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function j1(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){let w=v.program;i.uniformBlockBinding(y,w)}function c(y,v){let w=s[y.id];w===void 0&&(p(y),w=d(y),s[y.id]=w,y.addEventListener("dispose",m));let E=v.program;i.updateUBOMapping(y,E);let T=e.render.frame;r[y.id]!==T&&(f(y),r[y.id]=T)}function d(y){let v=h();y.__bindingPointIndex=v;let w=n.createBuffer(),E=y.__size,T=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,E,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,w),w}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let v=s[y.id],w=y.uniforms,E=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let T=0,P=w.length;T<P;T++){let _=Array.isArray(w[T])?w[T]:[w[T]];for(let M=0,S=_.length;M<S;M++){let R=_[M];if(u(R,T,M,E)===!0){let L=R.__offset,W=Array.isArray(R.value)?R.value:[R.value],X=0;for(let N=0;N<W.length;N++){let B=W[N],Y=x(B);typeof B=="number"||typeof B=="boolean"?(R.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,L+X,R.__data)):B.isMatrix3?(R.__data[0]=B.elements[0],R.__data[1]=B.elements[1],R.__data[2]=B.elements[2],R.__data[3]=0,R.__data[4]=B.elements[3],R.__data[5]=B.elements[4],R.__data[6]=B.elements[5],R.__data[7]=0,R.__data[8]=B.elements[6],R.__data[9]=B.elements[7],R.__data[10]=B.elements[8],R.__data[11]=0):ArrayBuffer.isView(B)?R.__data.set(new B.constructor(B.buffer,B.byteOffset,R.__data.length)):(B.toArray(R.__data,X),X+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(y,v,w,E){let T=y.value,P=v+"_"+w;if(E[P]===void 0)return typeof T=="number"||typeof T=="boolean"?E[P]=T:ArrayBuffer.isView(T)?E[P]=T.slice():E[P]=T.clone(),!0;{let _=E[P];if(typeof T=="number"||typeof T=="boolean"){if(_!==T)return E[P]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(_.equals(T)===!1)return _.copy(T),!0}}return!1}function p(y){let v=y.uniforms,w=0,E=16;for(let P=0,_=v.length;P<_;P++){let M=Array.isArray(v[P])?v[P]:[v[P]];for(let S=0,R=M.length;S<R;S++){let L=M[S],W=Array.isArray(L.value)?L.value:[L.value];for(let X=0,N=W.length;X<N;X++){let B=W[X],Y=x(B),ce=w%E,pe=ce%Y.boundary,Ee=ce+pe;w+=pe,Ee!==0&&E-Ee<Y.storage&&(w+=E-Ee),L.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=w,w+=Y.storage}}}let T=w%E;return T>0&&(w+=E-T),y.__size=w,y.__cache={},this}function x(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):nt("WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){let v=y.target;v.removeEventListener("dispose",m);let w=o.indexOf(v.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function g(){for(let y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}var Q1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),bi=null;function eb(){return bi===null&&(bi=new wo(Q1,16,16,ds,Mi),bi.name="DFG_LUT",bi.minFilter=gn,bi.magFilter=gn,bi.wrapS=hi,bi.wrapT=hi,bi.generateMipmaps=!1,bi.needsUpdate=!0),bi}var Oc=class{constructor(e={}){let{canvas:t=_m(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:u=Pn}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let x=u,m=new Set([ec,Ql,jl]),g=new Set([Pn,ii,Er,Ar,$l,Kl]),y=new Uint32Array(4),v=new Int32Array(4),w=new k,E=null,T=null,P=[],_=[],M=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,R=!1,L=null;this._outputColorSpace=on;let W=0,X=0,N=null,B=-1,Y=null,ce=new Kt,pe=new Kt,Ee=null,De=new it(0),He=0,Qe=t.width,se=t.height,re=1,F=null,ne=null,oe=new Kt(0,0,Qe,se),O=new Kt(0,0,Qe,se),V=!1,de=new _r,U=!1,G=!1,$=new _t,Q=new k,ye=new Kt,I={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ee=!1;function K(){return N===null?re:1}let D=i;function ue(A,q){return t.getContext(A,q)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"184"}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",Ye,!1),t.addEventListener("webglcontextcreationerror",at,!1),D===null){let q="webgl2";if(D=ue(q,A),D===null)throw ue(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw tt("WebGLRenderer: "+A.message),A}let Ae,ze,Me,dt,C,b,Z,ae,ge,Te,Re,le,me,Fe,Ge,Ie,Ce,rt,ct,wt,H,Se,he;function Be(){Ae=new aM(D),Ae.init(),H=new Y1(D,Ae),ze=new Qv(D,Ae,e,H),Me=new X1(D,Ae),ze.reversedDepthBuffer&&f&&Me.buffers.depth.setReversed(!0),dt=new hM(D),C=new P1,b=new q1(D,Ae,Me,C,ze,H,dt),Z=new oM(S),ae=new py(D),Se=new Jv(D,ae),ge=new lM(D,ae,dt,Se),Te=new fM(D,ge,ae,Se,dt),rt=new dM(D,ze,b),Ge=new eM(C),Re=new I1(S,Z,Ae,ze,Se,Ge),le=new J1(S,C),me=new L1,Fe=new B1(Ae),Ce=new Kv(S,Z,Me,Te,p,l),Ie=new W1(S,Te,ze),he=new j1(D,dt,ze,Me),ct=new jv(D,Ae,dt),wt=new cM(D,Ae,dt),dt.programs=Re.programs,S.capabilities=ze,S.extensions=Ae,S.properties=C,S.renderLists=me,S.shadowMap=Ie,S.state=Me,S.info=dt}Be(),x!==Pn&&(M=new pM(x,t.width,t.height,s,r));let Pe=new jd(S,D);this.xr=Pe,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let A=Ae.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Ae.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(A){A!==void 0&&(re=A,this.setSize(Qe,se,!1))},this.getSize=function(A){return A.set(Qe,se)},this.setSize=function(A,q,ie=!0){if(Pe.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}Qe=A,se=q,t.width=Math.floor(A*re),t.height=Math.floor(q*re),ie===!0&&(t.style.width=A+"px",t.style.height=q+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(Qe*re,se*re).floor()},this.setDrawingBufferSize=function(A,q,ie){Qe=A,se=q,re=ie,t.width=Math.floor(A*ie),t.height=Math.floor(q*ie),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(x===Pn){tt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){nt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ce)},this.getViewport=function(A){return A.copy(oe)},this.setViewport=function(A,q,ie,J){A.isVector4?oe.set(A.x,A.y,A.z,A.w):oe.set(A,q,ie,J),Me.viewport(ce.copy(oe).multiplyScalar(re).round())},this.getScissor=function(A){return A.copy(O)},this.setScissor=function(A,q,ie,J){A.isVector4?O.set(A.x,A.y,A.z,A.w):O.set(A,q,ie,J),Me.scissor(pe.copy(O).multiplyScalar(re).round())},this.getScissorTest=function(){return V},this.setScissorTest=function(A){Me.setScissorTest(V=A)},this.setOpaqueSort=function(A){F=A},this.setTransparentSort=function(A){ne=A},this.getClearColor=function(A){return A.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,ie=!0){let J=0;if(A){let j=!1;if(N!==null){let ke=N.texture.format;j=m.has(ke)}if(j){let ke=N.texture.type,We=g.has(ke),Ne=Ce.getClearColor(),qe=Ce.getClearAlpha(),$e=Ne.r,lt=Ne.g,ut=Ne.b;We?(y[0]=$e,y[1]=lt,y[2]=ut,y[3]=qe,D.clearBufferuiv(D.COLOR,0,y)):(v[0]=$e,v[1]=lt,v[2]=ut,v[3]=qe,D.clearBufferiv(D.COLOR,0,v))}else J|=D.COLOR_BUFFER_BIT}q&&(J|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ie&&(J|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&D.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),L=A},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",at,!1),Ce.dispose(),me.dispose(),Fe.dispose(),C.dispose(),Z.dispose(),Te.dispose(),Se.dispose(),he.dispose(),Re.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",rf),Pe.removeEventListener("sessionend",of),ms.stop()};function be(A){A.preventDefault(),go("WebGLRenderer: Context Lost."),R=!0}function Ye(){go("WebGLRenderer: Context Restored."),R=!1;let A=dt.autoReset,q=Ie.enabled,ie=Ie.autoUpdate,J=Ie.needsUpdate,j=Ie.type;Be(),dt.autoReset=A,Ie.enabled=q,Ie.autoUpdate=ie,Ie.needsUpdate=J,Ie.type=j}function at(A){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function tn(A){let q=A.target;q.removeEventListener("dispose",tn),Pt(q)}function Pt(A){Ti(A),C.remove(A)}function Ti(A){let q=C.get(A).programs;q!==void 0&&(q.forEach(function(ie){Re.releaseProgram(ie)}),A.isShaderMaterial&&Re.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,ie,J,j,ke){q===null&&(q=I);let We=j.isMesh&&j.matrixWorld.determinant()<0,Ne=R0(A,q,ie,J,j);Me.setMaterial(J,We);let qe=ie.index,$e=1;if(J.wireframe===!0){if(qe=ge.getWireframeAttribute(ie),qe===void 0)return;$e=2}let lt=ie.drawRange,ut=ie.attributes.position,Je=lt.start*$e,Dt=(lt.start+lt.count)*$e;ke!==null&&(Je=Math.max(Je,ke.start*$e),Dt=Math.min(Dt,(ke.start+ke.count)*$e)),qe!==null?(Je=Math.max(Je,0),Dt=Math.min(Dt,qe.count)):ut!=null&&(Je=Math.max(Je,0),Dt=Math.min(Dt,ut.count));let nn=Dt-Je;if(nn<0||nn===1/0)return;Se.setup(j,J,Ne,ie,qe);let Jt,Ut=ct;if(qe!==null&&(Jt=ae.get(qe),Ut=wt,Ut.setIndex(Jt)),j.isMesh)J.wireframe===!0?(Me.setLineWidth(J.wireframeLinewidth*K()),Ut.setMode(D.LINES)):Ut.setMode(D.TRIANGLES);else if(j.isLine){let yn=J.linewidth;yn===void 0&&(yn=1),Me.setLineWidth(yn*K()),j.isLineSegments?Ut.setMode(D.LINES):j.isLineLoop?Ut.setMode(D.LINE_LOOP):Ut.setMode(D.LINE_STRIP)}else j.isPoints?Ut.setMode(D.POINTS):j.isSprite&&Ut.setMode(D.TRIANGLES);if(j.isBatchedMesh)if(Ae.get("WEBGL_multi_draw"))Ut.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let yn=j._multiDrawStarts,Ve=j._multiDrawCounts,Dn=j._multiDrawCount,Mt=qe?ae.get(qe).bytesPerElement:1,zn=C.get(J).currentProgram.getUniforms();for(let ri=0;ri<Dn;ri++)zn.setValue(D,"_gl_DrawID",ri),Ut.render(yn[ri]/Mt,Ve[ri])}else if(j.isInstancedMesh)Ut.renderInstances(Je,nn,j.count);else if(ie.isInstancedBufferGeometry){let yn=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Ve=Math.min(ie.instanceCount,yn);Ut.renderInstances(Je,nn,Ve)}else Ut.render(Je,nn)};function si(A,q,ie){A.transparent===!0&&A.side===In&&A.forceSinglePass===!1?(A.side=xn,A.needsUpdate=!0,sa(A,q,ie),A.side=Fi,A.needsUpdate=!0,sa(A,q,ie),A.side=In):sa(A,q,ie)}this.compile=function(A,q,ie=null){ie===null&&(ie=A),T=Fe.get(ie),T.init(q),_.push(T),ie.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),A!==ie&&A.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),T.setupLights();let J=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let ke=j.material;if(ke)if(Array.isArray(ke))for(let We=0;We<ke.length;We++){let Ne=ke[We];si(Ne,ie,j),J.add(Ne)}else si(ke,ie,j),J.add(ke)}),T=_.pop(),J},this.compileAsync=function(A,q,ie=null){let J=this.compile(A,q,ie);return new Promise(j=>{function ke(){if(J.forEach(function(We){C.get(We).currentProgram.isReady()&&J.delete(We)}),J.size===0){j(A);return}setTimeout(ke,10)}Ae.get("KHR_parallel_shader_compile")!==null?ke():setTimeout(ke,10)})};let Yc=null;function E0(A){Yc&&Yc(A)}function rf(){ms.stop()}function of(){ms.start()}let ms=new Qm;ms.setAnimationLoop(E0),typeof self<"u"&&ms.setContext(self),this.setAnimationLoop=function(A){Yc=A,Pe.setAnimationLoop(A),A===null?ms.stop():ms.start()},Pe.addEventListener("sessionstart",rf),Pe.addEventListener("sessionend",of),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;L!==null&&L.renderStart(A,q);let ie=Pe.enabled===!0&&Pe.isPresenting===!0,J=M!==null&&(N===null||ie)&&M.begin(S,N);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(q),q=Pe.getCamera()),A.isScene===!0&&A.onBeforeRender(S,A,q,N),T=Fe.get(A,_.length),T.init(q),T.state.textureUnits=b.getTextureUnits(),_.push(T),$.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),de.setFromProjectionMatrix($,ti,q.reversedDepth),G=this.localClippingEnabled,U=Ge.init(this.clippingPlanes,G),E=me.get(A,P.length),E.init(),P.push(E),Pe.enabled===!0&&Pe.isPresenting===!0){let We=S.xr.getDepthSensingMesh();We!==null&&Zc(We,q,-1/0,S.sortObjects)}Zc(A,q,0,S.sortObjects),E.finish(),S.sortObjects===!0&&E.sort(F,ne),ee=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1,ee&&Ce.addToRenderList(E,A),this.info.render.frame++,U===!0&&Ge.beginShadows();let j=T.state.shadowsArray;if(Ie.render(j,A,q),U===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(J&&M.hasRenderPass())===!1){let We=E.opaque,Ne=E.transmissive;if(T.setupLights(),q.isArrayCamera){let qe=q.cameras;if(Ne.length>0)for(let $e=0,lt=qe.length;$e<lt;$e++){let ut=qe[$e];lf(We,Ne,A,ut)}ee&&Ce.render(A);for(let $e=0,lt=qe.length;$e<lt;$e++){let ut=qe[$e];af(E,A,ut,ut.viewport)}}else Ne.length>0&&lf(We,Ne,A,q),ee&&Ce.render(A),af(E,A,q)}N!==null&&X===0&&(b.updateMultisampleRenderTarget(N),b.updateRenderTargetMipmap(N)),J&&M.end(S),A.isScene===!0&&A.onAfterRender(S,A,q),Se.resetDefaultState(),B=-1,Y=null,_.pop(),_.length>0?(T=_[_.length-1],b.setTextureUnits(T.state.textureUnits),U===!0&&Ge.setGlobalState(S.clippingPlanes,T.state.camera)):T=null,P.pop(),P.length>0?E=P[P.length-1]:E=null,L!==null&&L.renderEnd()};function Zc(A,q,ie,J){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)ie=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLightProbeGrid)T.pushLightProbeGrid(A);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||de.intersectsSprite(A)){J&&ye.setFromMatrixPosition(A.matrixWorld).applyMatrix4($);let We=Te.update(A),Ne=A.material;Ne.visible&&E.push(A,We,Ne,ie,ye.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||de.intersectsObject(A))){let We=Te.update(A),Ne=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ye.copy(A.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),ye.copy(We.boundingSphere.center)),ye.applyMatrix4(A.matrixWorld).applyMatrix4($)),Array.isArray(Ne)){let qe=We.groups;for(let $e=0,lt=qe.length;$e<lt;$e++){let ut=qe[$e],Je=Ne[ut.materialIndex];Je&&Je.visible&&E.push(A,We,Je,ie,ye.z,ut)}}else Ne.visible&&E.push(A,We,Ne,ie,ye.z,null)}}let ke=A.children;for(let We=0,Ne=ke.length;We<Ne;We++)Zc(ke[We],q,ie,J)}function af(A,q,ie,J){let{opaque:j,transmissive:ke,transparent:We}=A;T.setupLightsView(ie),U===!0&&Ge.setGlobalState(S.clippingPlanes,ie),J&&Me.viewport(ce.copy(J)),j.length>0&&ia(j,q,ie),ke.length>0&&ia(ke,q,ie),We.length>0&&ia(We,q,ie),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function lf(A,q,ie,J){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[J.id]===void 0){let Je=Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[J.id]=new Fn(1,1,{generateMipmaps:!0,type:Je?Mi:Pn,minFilter:vi,samples:Math.max(4,ze.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace})}let ke=T.state.transmissionRenderTarget[J.id],We=J.viewport||ce;ke.setSize(We.z*S.transmissionResolutionScale,We.w*S.transmissionResolutionScale);let Ne=S.getRenderTarget(),qe=S.getActiveCubeFace(),$e=S.getActiveMipmapLevel();S.setRenderTarget(ke),S.getClearColor(De),He=S.getClearAlpha(),He<1&&S.setClearColor(16777215,.5),S.clear(),ee&&Ce.render(ie);let lt=S.toneMapping;S.toneMapping=ni;let ut=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),T.setupLightsView(J),U===!0&&Ge.setGlobalState(S.clippingPlanes,J),ia(A,ie,J),b.updateMultisampleRenderTarget(ke),b.updateRenderTargetMipmap(ke),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Dt=0,nn=q.length;Dt<nn;Dt++){let Jt=q[Dt],{object:Ut,geometry:yn,material:Ve,group:Dn}=Jt;if(Ve.side===In&&Ut.layers.test(J.layers)){let Mt=Ve.side;Ve.side=xn,Ve.needsUpdate=!0,cf(Ut,ie,J,yn,Ve,Dn),Ve.side=Mt,Ve.needsUpdate=!0,Je=!0}}Je===!0&&(b.updateMultisampleRenderTarget(ke),b.updateRenderTargetMipmap(ke))}S.setRenderTarget(Ne,qe,$e),S.setClearColor(De,He),ut!==void 0&&(J.viewport=ut),S.toneMapping=lt}function ia(A,q,ie){let J=q.isScene===!0?q.overrideMaterial:null;for(let j=0,ke=A.length;j<ke;j++){let We=A[j],{object:Ne,geometry:qe,group:$e}=We,lt=We.material;lt.allowOverride===!0&&J!==null&&(lt=J),Ne.layers.test(ie.layers)&&cf(Ne,q,ie,qe,lt,$e)}}function cf(A,q,ie,J,j,ke){A.onBeforeRender(S,q,ie,J,j,ke),A.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(S,q,ie,J,A,ke),j.transparent===!0&&j.side===In&&j.forceSinglePass===!1?(j.side=xn,j.needsUpdate=!0,S.renderBufferDirect(ie,q,J,j,A,ke),j.side=Fi,j.needsUpdate=!0,S.renderBufferDirect(ie,q,J,j,A,ke),j.side=In):S.renderBufferDirect(ie,q,J,j,A,ke),A.onAfterRender(S,q,ie,J,j,ke)}function sa(A,q,ie){q.isScene!==!0&&(q=I);let J=C.get(A),j=T.state.lights,ke=T.state.shadowsArray,We=j.state.version,Ne=Re.getParameters(A,j.state,ke,q,ie,T.state.lightProbeGridArray),qe=Re.getProgramCacheKey(Ne),$e=J.programs;J.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?q.environment:null,J.fog=q.fog;let lt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;J.envMap=Z.get(A.envMap||J.environment,lt),J.envMapRotation=J.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,$e===void 0&&(A.addEventListener("dispose",tn),$e=new Map,J.programs=$e);let ut=$e.get(qe);if(ut!==void 0){if(J.currentProgram===ut&&J.lightsStateVersion===We)return df(A,Ne),ut}else Ne.uniforms=Re.getUniforms(A),L!==null&&A.isNodeMaterial&&L.build(A,ie,Ne),A.onBeforeCompile(Ne,S),ut=Re.acquireProgram(Ne,qe),$e.set(qe,ut),J.uniforms=Ne.uniforms;let Je=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Je.clippingPlanes=Ge.uniform),df(A,Ne),J.needsLights=S0(A),J.lightsStateVersion=We,J.needsLights&&(Je.ambientLightColor.value=j.state.ambient,Je.lightProbe.value=j.state.probe,Je.directionalLights.value=j.state.directional,Je.directionalLightShadows.value=j.state.directionalShadow,Je.spotLights.value=j.state.spot,Je.spotLightShadows.value=j.state.spotShadow,Je.rectAreaLights.value=j.state.rectArea,Je.ltc_1.value=j.state.rectAreaLTC1,Je.ltc_2.value=j.state.rectAreaLTC2,Je.pointLights.value=j.state.point,Je.pointLightShadows.value=j.state.pointShadow,Je.hemisphereLights.value=j.state.hemi,Je.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Je.spotLightMatrix.value=j.state.spotLightMatrix,Je.spotLightMap.value=j.state.spotLightMap,Je.pointShadowMatrix.value=j.state.pointShadowMatrix),J.lightProbeGrid=T.state.lightProbeGridArray.length>0,J.currentProgram=ut,J.uniformsList=null,ut}function hf(A){if(A.uniformsList===null){let q=A.currentProgram.getUniforms();A.uniformsList=Cr.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function df(A,q){let ie=C.get(A);ie.outputColorSpace=q.outputColorSpace,ie.batching=q.batching,ie.batchingColor=q.batchingColor,ie.instancing=q.instancing,ie.instancingColor=q.instancingColor,ie.instancingMorph=q.instancingMorph,ie.skinning=q.skinning,ie.morphTargets=q.morphTargets,ie.morphNormals=q.morphNormals,ie.morphColors=q.morphColors,ie.morphTargetsCount=q.morphTargetsCount,ie.numClippingPlanes=q.numClippingPlanes,ie.numIntersection=q.numClipIntersection,ie.vertexAlphas=q.vertexAlphas,ie.vertexTangents=q.vertexTangents,ie.toneMapping=q.toneMapping}function A0(A,q){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;w.setFromMatrixPosition(q.matrixWorld);for(let ie=0,J=A.length;ie<J;ie++){let j=A[ie];if(j.texture!==null&&j.boundingBox.containsPoint(w))return j}return null}function R0(A,q,ie,J,j){q.isScene!==!0&&(q=I),b.resetTextureUnits();let ke=q.fog,We=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?q.environment:null,Ne=N===null?S.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:yt.workingColorSpace,qe=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,$e=Z.get(J.envMap||We,qe),lt=J.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,ut=!!ie.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Je=!!ie.morphAttributes.position,Dt=!!ie.morphAttributes.normal,nn=!!ie.morphAttributes.color,Jt=ni;J.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Jt=S.toneMapping);let Ut=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,yn=Ut!==void 0?Ut.length:0,Ve=C.get(J),Dn=T.state.lights;if(U===!0&&(G===!0||A!==Y)){let Bt=A===Y&&J.id===B;Ge.setState(J,A,Bt)}let Mt=!1;J.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Dn.state.version||Ve.outputColorSpace!==Ne||j.isBatchedMesh&&Ve.batching===!1||!j.isBatchedMesh&&Ve.batching===!0||j.isBatchedMesh&&Ve.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ve.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ve.instancing===!1||!j.isInstancedMesh&&Ve.instancing===!0||j.isSkinnedMesh&&Ve.skinning===!1||!j.isSkinnedMesh&&Ve.skinning===!0||j.isInstancedMesh&&Ve.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ve.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ve.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ve.instancingMorph===!1&&j.morphTexture!==null||Ve.envMap!==$e||J.fog===!0&&Ve.fog!==ke||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Ge.numPlanes||Ve.numIntersection!==Ge.numIntersection)||Ve.vertexAlphas!==lt||Ve.vertexTangents!==ut||Ve.morphTargets!==Je||Ve.morphNormals!==Dt||Ve.morphColors!==nn||Ve.toneMapping!==Jt||Ve.morphTargetsCount!==yn||!!Ve.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Mt=!0):(Mt=!0,Ve.__version=J.version);let zn=Ve.currentProgram;Mt===!0&&(zn=sa(J,q,j),L&&J.isNodeMaterial&&L.onUpdateProgram(J,zn,Ve));let ri=!1,Gi=!1,Bs=!1,kt=zn.getUniforms(),sn=Ve.uniforms;if(Me.useProgram(zn.program)&&(ri=!0,Gi=!0,Bs=!0),J.id!==B&&(B=J.id,Gi=!0),Ve.needsLights){let Bt=A0(T.state.lightProbeGridArray,j);Ve.lightProbeGrid!==Bt&&(Ve.lightProbeGrid=Bt,Gi=!0)}if(ri||Y!==A){Me.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),kt.setValue(D,"projectionMatrix",A.projectionMatrix),kt.setValue(D,"viewMatrix",A.matrixWorldInverse);let Xi=kt.map.cameraPosition;Xi!==void 0&&Xi.setValue(D,Q.setFromMatrixPosition(A.matrixWorld)),ze.logarithmicDepthBuffer&&kt.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&kt.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),Y!==A&&(Y=A,Gi=!0,Bs=!0)}if(Ve.needsLights&&(Dn.state.directionalShadowMap.length>0&&kt.setValue(D,"directionalShadowMap",Dn.state.directionalShadowMap,b),Dn.state.spotShadowMap.length>0&&kt.setValue(D,"spotShadowMap",Dn.state.spotShadowMap,b),Dn.state.pointShadowMap.length>0&&kt.setValue(D,"pointShadowMap",Dn.state.pointShadowMap,b)),j.isSkinnedMesh){kt.setOptional(D,j,"bindMatrix"),kt.setOptional(D,j,"bindMatrixInverse");let Bt=j.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),kt.setValue(D,"boneTexture",Bt.boneTexture,b))}j.isBatchedMesh&&(kt.setOptional(D,j,"batchingTexture"),kt.setValue(D,"batchingTexture",j._matricesTexture,b),kt.setOptional(D,j,"batchingIdTexture"),kt.setValue(D,"batchingIdTexture",j._indirectTexture,b),kt.setOptional(D,j,"batchingColorTexture"),j._colorsTexture!==null&&kt.setValue(D,"batchingColorTexture",j._colorsTexture,b));let Wi=ie.morphAttributes;if((Wi.position!==void 0||Wi.normal!==void 0||Wi.color!==void 0)&&rt.update(j,ie,zn),(Gi||Ve.receiveShadow!==j.receiveShadow)&&(Ve.receiveShadow=j.receiveShadow,kt.setValue(D,"receiveShadow",j.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&q.environment!==null&&(sn.envMapIntensity.value=q.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=eb()),Gi){if(kt.setValue(D,"toneMappingExposure",S.toneMappingExposure),Ve.needsLights&&C0(sn,Bs),ke&&J.fog===!0&&le.refreshFogUniforms(sn,ke),le.refreshMaterialUniforms(sn,J,re,se,T.state.transmissionRenderTarget[A.id]),Ve.needsLights&&Ve.lightProbeGrid){let Bt=Ve.lightProbeGrid;sn.probesSH.value=Bt.texture,sn.probesMin.value.copy(Bt.boundingBox.min),sn.probesMax.value.copy(Bt.boundingBox.max),sn.probesResolution.value.copy(Bt.resolution)}Cr.upload(D,hf(Ve),sn,b)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Cr.upload(D,hf(Ve),sn,b),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&kt.setValue(D,"center",j.center),kt.setValue(D,"modelViewMatrix",j.modelViewMatrix),kt.setValue(D,"normalMatrix",j.normalMatrix),kt.setValue(D,"modelMatrix",j.matrixWorld),J.uniformsGroups!==void 0){let Bt=J.uniformsGroups;for(let Xi=0,Hs=Bt.length;Xi<Hs;Xi++){let ff=Bt[Xi];he.update(ff,zn),he.bind(ff,zn)}}return zn}function C0(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function S0(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(A,q,ie){let J=C.get(A);J.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),C.get(A.texture).__webglTexture=q,C.get(A.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:ie,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){let ie=C.get(A);ie.__webglFramebuffer=q,ie.__useDefaultFramebuffer=q===void 0};let I0=D.createFramebuffer();this.setRenderTarget=function(A,q=0,ie=0){N=A,W=q,X=ie;let J=null,j=!1,ke=!1;if(A){let Ne=C.get(A);if(Ne.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(D.FRAMEBUFFER,Ne.__webglFramebuffer),ce.copy(A.viewport),pe.copy(A.scissor),Ee=A.scissorTest,Me.viewport(ce),Me.scissor(pe),Me.setScissorTest(Ee),B=-1;return}else if(Ne.__webglFramebuffer===void 0)b.setupRenderTarget(A);else if(Ne.__hasExternalTextures)b.rebindTextures(A,C.get(A.texture).__webglTexture,C.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let lt=A.depthTexture;if(Ne.__boundDepthTexture!==lt){if(lt!==null&&C.has(lt)&&(A.width!==lt.image.width||A.height!==lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(A)}}let qe=A.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(ke=!0);let $e=C.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray($e[q])?J=$e[q][ie]:J=$e[q],j=!0):A.samples>0&&b.useMultisampledRTT(A)===!1?J=C.get(A).__webglMultisampledFramebuffer:Array.isArray($e)?J=$e[ie]:J=$e,ce.copy(A.viewport),pe.copy(A.scissor),Ee=A.scissorTest}else ce.copy(oe).multiplyScalar(re).floor(),pe.copy(O).multiplyScalar(re).floor(),Ee=V;if(ie!==0&&(J=I0),Me.bindFramebuffer(D.FRAMEBUFFER,J)&&Me.drawBuffers(A,J),Me.viewport(ce),Me.scissor(pe),Me.setScissorTest(Ee),j){let Ne=C.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ne.__webglTexture,ie)}else if(ke){let Ne=q;for(let qe=0;qe<A.textures.length;qe++){let $e=C.get(A.textures[qe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+qe,$e.__webglTexture,ie,Ne)}}else if(A!==null&&ie!==0){let Ne=C.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ne.__webglTexture,ie)}B=-1},this.readRenderTargetPixels=function(A,q,ie,J,j,ke,We,Ne=0){if(!(A&&A.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=C.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&We!==void 0&&(qe=qe[We]),qe){Me.bindFramebuffer(D.FRAMEBUFFER,qe);try{let $e=A.textures[Ne],lt=$e.format,ut=$e.type;if(A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ne),!ze.textureFormatReadable(lt)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(ut)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-J&&ie>=0&&ie<=A.height-j&&D.readPixels(q,ie,J,j,H.convert(lt),H.convert(ut),ke)}finally{let $e=N!==null?C.get(N).__webglFramebuffer:null;Me.bindFramebuffer(D.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(A,q,ie,J,j,ke,We,Ne=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=C.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&We!==void 0&&(qe=qe[We]),qe)if(q>=0&&q<=A.width-J&&ie>=0&&ie<=A.height-j){Me.bindFramebuffer(D.FRAMEBUFFER,qe);let $e=A.textures[Ne],lt=$e.format,ut=$e.type;if(A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ne),!ze.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Je=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Je),D.bufferData(D.PIXEL_PACK_BUFFER,ke.byteLength,D.STREAM_READ),D.readPixels(q,ie,J,j,H.convert(lt),H.convert(ut),0);let Dt=N!==null?C.get(N).__webglFramebuffer:null;Me.bindFramebuffer(D.FRAMEBUFFER,Dt);let nn=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Mm(D,nn,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Je),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ke),D.deleteBuffer(Je),D.deleteSync(nn),ke}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,ie=0){let J=Math.pow(2,-ie),j=Math.floor(A.image.width*J),ke=Math.floor(A.image.height*J),We=q!==null?q.x:0,Ne=q!==null?q.y:0;b.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,ie,0,0,We,Ne,j,ke),Me.unbindTexture()};let P0=D.createFramebuffer(),D0=D.createFramebuffer();this.copyTextureToTexture=function(A,q,ie=null,J=null,j=0,ke=0){let We,Ne,qe,$e,lt,ut,Je,Dt,nn,Jt=A.isCompressedTexture?A.mipmaps[ke]:A.image;if(ie!==null)We=ie.max.x-ie.min.x,Ne=ie.max.y-ie.min.y,qe=ie.isBox3?ie.max.z-ie.min.z:1,$e=ie.min.x,lt=ie.min.y,ut=ie.isBox3?ie.min.z:0;else{let sn=Math.pow(2,-j);We=Math.floor(Jt.width*sn),Ne=Math.floor(Jt.height*sn),A.isDataArrayTexture?qe=Jt.depth:A.isData3DTexture?qe=Math.floor(Jt.depth*sn):qe=1,$e=0,lt=0,ut=0}J!==null?(Je=J.x,Dt=J.y,nn=J.z):(Je=0,Dt=0,nn=0);let Ut=H.convert(q.format),yn=H.convert(q.type),Ve;q.isData3DTexture?(b.setTexture3D(q,0),Ve=D.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(b.setTexture2DArray(q,0),Ve=D.TEXTURE_2D_ARRAY):(b.setTexture2D(q,0),Ve=D.TEXTURE_2D),Me.activeTexture(D.TEXTURE0),Me.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,q.flipY),Me.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),Me.pixelStorei(D.UNPACK_ALIGNMENT,q.unpackAlignment);let Dn=Me.getParameter(D.UNPACK_ROW_LENGTH),Mt=Me.getParameter(D.UNPACK_IMAGE_HEIGHT),zn=Me.getParameter(D.UNPACK_SKIP_PIXELS),ri=Me.getParameter(D.UNPACK_SKIP_ROWS),Gi=Me.getParameter(D.UNPACK_SKIP_IMAGES);Me.pixelStorei(D.UNPACK_ROW_LENGTH,Jt.width),Me.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Jt.height),Me.pixelStorei(D.UNPACK_SKIP_PIXELS,$e),Me.pixelStorei(D.UNPACK_SKIP_ROWS,lt),Me.pixelStorei(D.UNPACK_SKIP_IMAGES,ut);let Bs=A.isDataArrayTexture||A.isData3DTexture,kt=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){let sn=C.get(A),Wi=C.get(q),Bt=C.get(sn.__renderTarget),Xi=C.get(Wi.__renderTarget);Me.bindFramebuffer(D.READ_FRAMEBUFFER,Bt.__webglFramebuffer),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,Xi.__webglFramebuffer);for(let Hs=0;Hs<qe;Hs++)Bs&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,C.get(A).__webglTexture,j,ut+Hs),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,C.get(q).__webglTexture,ke,nn+Hs)),D.blitFramebuffer($e,lt,We,Ne,Je,Dt,We,Ne,D.DEPTH_BUFFER_BIT,D.NEAREST);Me.bindFramebuffer(D.READ_FRAMEBUFFER,null),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||C.has(A)){let sn=C.get(A),Wi=C.get(q);Me.bindFramebuffer(D.READ_FRAMEBUFFER,P0),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,D0);for(let Bt=0;Bt<qe;Bt++)Bs?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,sn.__webglTexture,j,ut+Bt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,sn.__webglTexture,j),kt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Wi.__webglTexture,ke,nn+Bt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Wi.__webglTexture,ke),j!==0?D.blitFramebuffer($e,lt,We,Ne,Je,Dt,We,Ne,D.COLOR_BUFFER_BIT,D.NEAREST):kt?D.copyTexSubImage3D(Ve,ke,Je,Dt,nn+Bt,$e,lt,We,Ne):D.copyTexSubImage2D(Ve,ke,Je,Dt,$e,lt,We,Ne);Me.bindFramebuffer(D.READ_FRAMEBUFFER,null),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else kt?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(Ve,ke,Je,Dt,nn,We,Ne,qe,Ut,yn,Jt.data):q.isCompressedArrayTexture?D.compressedTexSubImage3D(Ve,ke,Je,Dt,nn,We,Ne,qe,Ut,Jt.data):D.texSubImage3D(Ve,ke,Je,Dt,nn,We,Ne,qe,Ut,yn,Jt):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ke,Je,Dt,We,Ne,Ut,yn,Jt.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ke,Je,Dt,Jt.width,Jt.height,Ut,Jt.data):D.texSubImage2D(D.TEXTURE_2D,ke,Je,Dt,We,Ne,Ut,yn,Jt);Me.pixelStorei(D.UNPACK_ROW_LENGTH,Dn),Me.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Mt),Me.pixelStorei(D.UNPACK_SKIP_PIXELS,zn),Me.pixelStorei(D.UNPACK_SKIP_ROWS,ri),Me.pixelStorei(D.UNPACK_SKIP_IMAGES,Gi),ke===0&&q.generateMipmaps&&D.generateMipmap(Ve),Me.unbindTexture()},this.initRenderTarget=function(A){C.get(A).__webglFramebuffer===void 0&&b.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),Me.unbindTexture()},this.resetState=function(){W=0,X=0,N=null,Me.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}};function o0(n,e){let t=new Oc({canvas:e.canvas,antialias:!0});t.setPixelRatio(Math.min(2,devicePixelRatio||1)),t.setSize(e.VW,e.VH),t.outputColorSpace=on;let i=new _o;i.background=new it(861232);let s=new bn(50,e.VW/e.VH,10,6e4),r=new Bo(15397624,4867128,.95);i.add(r);let o=new zo(16773852,1.35);o.position.set(-.45,1,-.3).multiplyScalar(1e3),i.add(o);let a=new an;i.add(a),o.target=a,i.fog=new yo(10466494,2600,9e3);let l={renderer:t,scene:i,camera:s,sun:o,hemi:r,cx:n.player.x,cy:n.player.y,dist:1150,elev:.96,shakeX:0,shakeY:0,orbit:0,zoomFactor:1,_ray:new Vo,_plane:new Xn(new k(0,1,0),0),_v3:new k,lightLevel(){return .5+.5*Math.cos(Math.PI*2*(n.t%Nr/Nr))},resize(){s.aspect=e.VW/e.VH,s.updateProjectionMatrix(),t.setSize(e.VW,e.VH)},update(c){let d=n.player,h=d.x,f=d.y,u=1500*l.zoomFactor,p=.96;if(e.godView){h=xe.w/2,f=xe.h/2,p=1.52;let _=Math.tan(s.fov/2*Math.PI/180),M=(xe.h/2+500)/_,S=(xe.w/2+500)/(_*s.aspect);u=Math.max(M,S)*1.02}else d.inCopter&&n.copter&&(u=(1850+Math.hypot(n.copter.vx,n.copter.vy)*.9)*l.zoomFactor);l._wasGod!==e.godView&&(l._wasGod=e.godView,l.cx=h,l.cy=f,l.dist=u,l.elev=p);let x=Math.min(1,c*(e.godView?6:5));l.cx=Ur(l.cx,h,x),l.cy=Ur(l.cy,f,x),l.dist=Ur(l.dist,u,Math.min(1,c*4)),l.elev=Ur(l.elev,p,Math.min(1,c*4)),n.shake>0?(l.shakeX=(Math.random()*2-1)*n.shake,l.shakeY=(Math.random()*2-1)*n.shake):(l.shakeX=0,l.shakeY=0);let m=l.cx+l.shakeX,g=l.cy+l.shakeY,y=Math.sin(l.elev)*l.dist,v=Math.cos(l.elev)*l.dist,w=e.godView?0:l.orbit;s.position.set(m+Math.sin(w)*v,y,g+Math.cos(w)*v),s.lookAt(m,0,g),a.position.set(m,0,g);let E=l.lightLevel(),T=Math.sin((1-E)*Math.PI);o.intensity=1+E*.45,o.color.setHSL(.105-T*.045,.52+T*.25,.62-T*.06),r.intensity=.78+E*.25;let P=n.t%Nr/Nr*Math.PI*2;o.position.set(m+Math.cos(P)*1400,900+E*600,g+Math.sin(P)*1400-400),i.fog.near=l.dist*2.2,i.fog.far=l.dist*8,l._viewR=l.dist*1.9},render(){t.render(i,s)},screenToWorld(c,d){let h=new Ue(c/e.VW*2-1,-(d/e.VH)*2+1);l._ray.setFromCamera(h,s);let f=new k;return l._ray.ray.intersectPlane(l._plane,f),f?{x:f.x,y:f.z}:{x:l.cx,y:l.cy}},worldToScreen(c,d,h=0){return l._v3.set(c,h,d).project(s),{x:(l._v3.x+1)/2*e.VW,y:(-l._v3.y+1)/2*e.VH,behind:l._v3.z>1}},inView(c,d,h=0){let f=c-l.cx,u=d-l.cy;return f*f+u*u<(l._viewR+h)*(l._viewR+h)},viewRect(c=0){let d=l._viewR+c;return{x0:l.cx-d,y0:l.cy-d,x1:l.cx+d,y1:l.cy+d}},get zoom(){return 900/l.dist}};return l.update(.1),l}var zc=.5;function l0(n,e){let t=Math.round(xe.w*zc),i=Math.round(xe.h*zc),s=document.createElement("canvas");s.width=t,s.height=i;let r=s.getContext("2d");r.save(),r.scale(zc,zc),tb(n,r),r.restore();let o=new qn(s);o.colorSpace=on,o.anisotropy=8,o.minFilter=vi;let a=new ve(new Yn(xe.w,xe.h),new Sn({map:o,transparent:!0}));a.rotation.x=-Math.PI/2,a.position.set(xe.w/2,0,xe.h/2),a.renderOrder=-1,e.add(a);let l=new ve(new Yn(xe.w*6,xe.h*6),new Sn({color:1060924}));l.rotation.x=-Math.PI/2,l.position.set(xe.w/2,-3,xe.h/2),e.add(l);let c=document.createElement("canvas");c.width=256,c.height=256;let d=c.getContext("2d");for(let E=0;E<260;E++){let T=Math.random()*256,P=Math.random()*256;d.fillStyle=`rgba(200,235,245,${.25+Math.random()*.5})`,d.fillRect(T,P,1.6+Math.random()*2.4,1.2)}let h=new qn(c);h.wrapS=h.wrapT=di,h.repeat.set(220,146);let f=new ve(new Yn(xe.w*6,xe.h*6),new Xt({map:h,transparent:!0,opacity:.5,depthWrite:!1,blending:wn}));f.rotation.x=-Math.PI/2,f.position.set(xe.w/2,-1.5,xe.h/2),f.renderOrder=-2,e.add(f);let u=h.clone();u.wrapS=u.wrapT=di,u.repeat.set(133,88);let p=new ve(new Yn(xe.w*6,xe.h*6),new Xt({map:u,transparent:!0,opacity:.3,depthWrite:!1,blending:wn}));p.rotation.x=-Math.PI/2,p.position.set(xe.w/2,-1.2,xe.h/2),p.renderOrder=-2,e.add(p);let x=[];for(let E of n.world.lakes){if(E.frozen)continue;let T=new Mr;for(let R=0;R<=28;R++){let L=R/28*Math.PI*2,W=E.r*E.wob[R%28],X=Math.cos(L)*W,N=-Math.sin(L)*W*.84;R?T.lineTo(X,N):T.moveTo(X,N)}let P=new ko(T),_=new ve(P,new Xt({color:3040376,transparent:!0,opacity:.45,depthWrite:!1}));_.rotation.x=-Math.PI/2,_.position.set(E.x,1.2,E.y),_.renderOrder=1,e.add(_);let M=h.clone();M.wrapS=M.wrapT=di,M.repeat.set(.045,.045);let S=new ve(P,new Xt({map:M,transparent:!0,opacity:.4,depthWrite:!1,blending:wn}));S.rotation.x=-Math.PI/2,S.position.set(E.x,1.5,E.y),S.renderOrder=2,e.add(S),x.push(M)}let m=document.createElement("canvas");m.width=4,m.height=256;let g=m.getContext("2d"),y=g.createLinearGradient(0,0,0,256);y.addColorStop(0,"#5d9bd3"),y.addColorStop(.62,"#9cc3dd"),y.addColorStop(.78,"#cfddd8"),y.addColorStop(1,"#dfe5da"),g.fillStyle=y,g.fillRect(0,0,4,256);let v=new qn(m);v.colorSpace=on;let w=new ve(new Ls(34e3,18,12,0,Math.PI*2,0,Math.PI/2),new Xt({map:v,side:xn,fog:!1}));return w.position.set(xe.w/2,-40,xe.h/2),e.add(w),e.background=null,{tex:o,sync(E,T,P){let _=f.material.map,M=p.material.map;_.offset.x+=E*.0022,_.offset.y+=E*.0013,M.offset.x-=E*.0011,M.offset.y+=E*8e-4;for(let R of x)R.offset.x+=E*.006,R.offset.y+=E*.0035;w.position.set(P.cx,-40,P.cy);let S=P.lightLevel();w.material.color.setHSL(.58,.18,.62+S*.38)}}}function a0(n,e,t){let i=(e+n.world.biomeRidge(t))/xe.w,s=.05,r=Ai((i-(1/3-s))/(2*s)),o=Ai((i-(2/3-s))/(2*s)),a=(f,u,p)=>[f[0]+(u[0]-f[0])*p,f[1]+(u[1]-f[1])*p,f[2]+(u[2]-f[2])*p],l=[181,154,102],c=[74,92,48],d=[185,199,209],h=a(l,c,r);return h=a(h,d,o),h}function Qd(n,e){e.beginPath(),n.world.islandPath.forEach((t,i)=>i?e.lineTo(t.x,t.y):e.moveTo(t.x,t.y)),e.closePath()}function tb(n,e){let t=xe.w,i=xe.h;e.lineJoin="round",e.strokeStyle="rgba(64,124,134,0.45)",e.lineWidth=64,Qd(n,e),e.stroke(),e.strokeStyle="rgba(90,150,158,0.30)",e.lineWidth=26,Qd(n,e),e.stroke(),e.save(),Qd(n,e),e.clip();let s=32;for(let h=0;h<i;h+=s)for(let f=0;f<t;f+=s){if(n.world.landFactor(f+s/2,h+s/2)<=-.25)continue;let[p,x,m]=a0(n,f+s/2,h+s/2),g=Zi(f/s|0,h/s|0),y=Zi(f/96|0,h/96|0),v=.88+g*.14+(y-.5)*.12-h/i*.06;p*=v,x*=v,m*=v,e.fillStyle=`rgb(${p|0},${x|0},${m|0})`,e.fillRect(f-1,h-1,s+2,s+2)}e.lineCap="round";let r=n.world.islandPath;for(let h=0;h<3;h++){let f=h===0?96:h===1?30:7;for(let u=0;u<r.length;u++){let p=r[u],x=r[(u+1)%r.length],m=n.world.biomeAt((p.x+x.x)/2,(p.y+x.y)/2)==="winter";e.strokeStyle=h===0?m?"rgba(214,227,235,0.95)":"rgba(186,166,120,0.95)":h===1?m?"rgba(168,190,204,0.9)":"rgba(146,128,92,0.9)":"rgba(240,248,252,0.55)",e.lineWidth=f,e.beginPath(),e.moveTo(p.x,p.y),e.lineTo(x.x,x.y),e.stroke()}}for(let h of n.world.lakes){e.save(),e.translate(h.x,h.y);let f=()=>{e.beginPath();for(let p=0;p<=28;p++){let x=p/28*Math.PI*2,m=h.r*h.wob[p%28],g=Math.cos(x)*m,y=Math.sin(x)*m*.84;p?e.lineTo(g,y):e.moveTo(g,y)}e.closePath()};e.save(),e.scale(1.06,1.06),f(),e.fillStyle=h.frozen?"rgba(238,246,251,.95)":"rgba(96,118,66,.7)",e.fill(),e.restore(),f();let u=e.createRadialGradient(0,-.3*h.r,h.r*.1,0,0,h.r);h.frozen?(u.addColorStop(0,"#dfeaf2"),u.addColorStop(1,"#96b2c8")):(u.addColorStop(0,"#33687c"),u.addColorStop(1,"#0c2531")),e.fillStyle=u,e.fill(),e.restore()}for(let h of n.world.monuments){let f=e.createRadialGradient(h.x,h.y,h.r*.2,h.x,h.y,h.r);f.addColorStop(0,"rgba(110,106,95,.5)"),f.addColorStop(.8,"rgba(98,94,84,.32)"),f.addColorStop(1,"rgba(90,86,76,0)"),e.fillStyle=f,e.beginPath(),e.arc(h.x,h.y,h.r,0,7),e.fill()}e.lineCap="round",e.lineJoin="round";let o=[];for(let h of n.world.roads){let f=null;for(let u=0;u<h.pts.length;u++)h.fade[u]>.05?(f||(f={rd:h,pts:[]}),f.pts.push(h.pts[u])):f&&(f.pts.length>1&&o.push(f),f=null);f&&f.pts.length>1&&o.push(f)}let a=(h,f)=>{let u=[];for(let p=0;p<h.length-1;p++){let x=h[p],m=h[p+1],g=Math.hypot(m.x-x.x,m.y-x.y),y=Math.max(1,Math.ceil(g/f));for(let v=0;v<y;v++)u.push({x:x.x+(m.x-x.x)*(v/y),y:x.y+(m.y-x.y)*(v/y)})}return u.push(h[h.length-1]),u},l=(h,f,u,p,x)=>{e.fillStyle=f,e.globalAlpha=x;let m=a(h.pts,u*.55);for(let g=0;g<m.length;g++){let y=m[g],v=Zi(y.x*.13|0,y.y*.13|0),w=Zi(y.x*.31|0,y.y*.07|0),E=u*(.86+v*.34),T=(w-.5)*p,P=(v-.5)*p;e.beginPath(),e.arc(y.x+T,y.y+P,E,0,7),e.fill()}e.globalAlpha=1};for(let h of o)l(h,"#564a31",h.rd.w*.62,9,.85);for(let h of o)l(h,"#6c5d3b",h.rd.w*.46,6,1);for(let h of o)l(h,"#75653f",h.rd.w*.3,8,.5);for(let h of o){e.fillStyle="#5d5034";let f=a(h.pts,34);for(let u=0;u<f.length;u++){let p=f[u],x=Zi(p.x*.21|0,p.y*.17|0);if(x<.45)continue;let m=f[Math.max(0,u-1)],g=f[Math.min(f.length-1,u+1)],y=Math.atan2(g.y-m.y,g.x-m.x)+Math.PI/2,v=x>.72?1:-1,w=h.rd.w*.58+x*53%1*14;e.globalAlpha=.4,e.beginPath(),e.arc(p.x+Math.cos(y)*w*v,p.y+Math.sin(y)*w*v,2.5+x*31%1*5,0,7),e.fill()}e.globalAlpha=1}e.globalAlpha=.3;for(let h of o)e.strokeStyle="#544731",e.lineWidth=4,e.beginPath(),h.pts.forEach((f,u)=>u?e.lineTo(f.x,f.y):e.moveTo(f.x,f.y)),e.stroke();e.globalAlpha=1;for(let h of o){let f=a(h.pts,90);e.fillStyle="rgba(58,48,30,0.5)";for(let u of f){let p=Zi(u.x*.07|0,u.y*.23|0);p>.82&&(e.beginPath(),e.ellipse(u.x+(p*91%1-.5)*h.rd.w*.5,u.y+(p*47%1-.5)*h.rd.w*.5,4+p*5,3+p*3,p*6,0,7),e.fill())}}let c=11;for(let h of n.world.crossings){let f=Math.cos(h.railAng),u=Math.sin(h.railAng);e.save(),e.translate(h.x,h.y),e.rotate(h.railAng);let p=e.createRadialGradient(0,0,10,0,0,64);p.addColorStop(0,"rgba(116,104,78,0.95)"),p.addColorStop(.7,"rgba(108,96,72,0.7)"),p.addColorStop(1,"rgba(100,90,68,0)"),e.fillStyle=p,e.beginPath(),e.ellipse(0,0,64,50,0,0,7),e.fill(),e.fillStyle="#7b6a45";for(let x of[-c-7,0,c+7])e.fillRect(-34,x-3.4,68,6.8);e.strokeStyle="rgba(60,50,34,0.5)",e.lineWidth=1.2;for(let x of[-c-7,0,c+7])e.strokeRect(-34,x-3.4,68,6.8);e.restore()}let d=(h,f)=>n.world.crossings.some(u=>(h-u.x)*(h-u.x)+(f-u.y)*(f-u.y)<2704);for(let h of n.world.rails){let f=()=>{e.beginPath(),h.pts.forEach((u,p)=>p?e.lineTo(u.x,u.y):e.moveTo(u.x,u.y))};f(),e.strokeStyle="rgba(87,77,64,0.85)",e.lineWidth=2*c+16,e.stroke(),f(),e.strokeStyle="rgba(107,95,78,0.85)",e.lineWidth=2*c+7,e.stroke()}for(let h=0;h<i;h+=96)for(let f=0;f<t;f+=96){if(!n.world.onLand(f,h)||n.world.lakeAt(f,h))continue;let u=Zi(f/96|0,h/96|0);if(u>.5)continue;let[p,x,m]=a0(n,f,h);e.fillStyle=`rgba(${p*.75|0},${x*.75|0},${m*.75|0},0.5)`,e.beginPath(),e.ellipse(f+u*80,h+u*7919%1*80,9+u*14,5+u*8,u*6,0,7),e.fill()}e.restore()}var ef=new Map;function we(n,e={}){let t=n+JSON.stringify(e);return ef.has(t)||ef.set(t,new Sn({color:n,emissive:e.emissive||0,emissiveIntensity:e.emissiveIntensity??1,transparent:!!e.transparent,opacity:e.opacity??1,flatShading:!0})),ef.get(t)}var fe={box:new rs(1,1,1),cyl:new Ss(1,1,1,8),cyl6:new Ss(1,1.18,1,6),cone:new Ro(1,1,7),ico:new Ps(1,0),sphere:new Ls(1,8,6),quad:new Yn(1,1)},Vc=null;function nb(){if(Vc)return Vc;let n=document.createElement("canvas");n.width=64,n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.4,"rgba(255,255,255,0.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),Vc=new qn(n),Vc}var Gc=null;function Xc(){if(Gc)return Gc;let n=document.createElement("canvas");n.width=128,n.height=128;let e=n.getContext("2d"),t=e.createRadialGradient(64,64,6,64,64,64);t.addColorStop(0,"rgba(255,255,255,0.5)"),t.addColorStop(.55,"rgba(255,255,255,0.42)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),e.globalCompositeOperation="destination-out";for(let i=0;i<5;i++){let s=i*1.26,r=58,o=e.createRadialGradient(64+Math.cos(s)*r,64+Math.sin(s)*r,2,64+Math.cos(s)*r,64+Math.sin(s)*r,26);o.addColorStop(0,"rgba(0,0,0,0.5)"),o.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=o,e.fillRect(0,0,128,128)}return Gc=new qn(n),Gc}var Wc=null;function nf(){if(Wc)return Wc;let n=document.createElement("canvas");n.width=64,n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,4,32,32,30);return t.addColorStop(0,"rgba(8,8,6,0.42)"),t.addColorStop(.7,"rgba(8,8,6,0.22)"),t.addColorStop(1,"rgba(8,8,6,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),Wc=new qn(n),Wc}function us(n,e=60){let t=new ss({map:nb(),color:n,transparent:!0,blending:wn,depthWrite:!1,depthTest:!1}),i=new Cs(t);return i.scale.set(e,e,1),i.renderOrder=4,i}var tf=null;function Os(n=40){tf||(tf=new yi(.5,14));let e=new Xt({map:nf(),transparent:!0,depthWrite:!1}),t=new ve(tf,e);return t.rotation.x=-Math.PI/2,t.scale.set(n,n*.8,1),t}var ta={wood:6111006,stone:5659747,metal:3948871,armored:2567996},Ir=new Map;function c0(n){let e=document.createElement("canvas");e.width=128,e.height=128;let t=e.getContext("2d"),i=ib(n.length*1337+7);if(n==="wood"){t.fillStyle="#86602e",t.fillRect(0,0,128,128);for(let r=0;r<128;r+=21){t.fillStyle=`rgba(${70+i()*50|0},${48+i()*34|0},${20+i()*16|0},0.55)`,t.fillRect(r,0,21,128),t.fillStyle="rgba(42,28,12,0.85)",t.fillRect(r,0,2,128),t.strokeStyle="rgba(50,34,14,0.30)",t.lineWidth=1;for(let o=0;o<5;o++){let a=r+4+i()*14;t.beginPath(),t.moveTo(a,0),t.bezierCurveTo(a+i()*4-2,40,a+i()*4-2,88,a,128),t.stroke()}if(i()>.55){let o=r+6+i()*10,a=i()*128;t.fillStyle="rgba(40,26,10,0.6)",t.beginPath(),t.ellipse(o,a,3.2,4.5,.3,0,7),t.fill(),t.strokeStyle="rgba(120,90,48,0.5)",t.beginPath(),t.ellipse(o,a,5,6.5,.3,0,7),t.stroke()}}t.fillStyle="rgba(255,235,200,0.05)",t.fillRect(0,0,128,10)}else if(n==="stone"){t.fillStyle="#7b8289",t.fillRect(0,0,128,128);let r=26;for(let o=0;o<5;o++){let a=o%2*26;for(let l=-26;l<128;l+=52){let c=l+a;t.fillStyle=`rgba(${108+i()*34|0},${114+i()*32|0},${120+i()*30|0},0.7)`,t.fillRect(c+2,o*r+2,48,r-4),t.strokeStyle="rgba(60,66,72,0.35)",t.lineWidth=1;for(let d=0;d<3;d++){let h=c+6+i()*38,f=o*r+5+i()*(r-10);t.beginPath(),t.moveTo(h,f),t.lineTo(h+6+i()*8,f+i()*3-1.5),t.stroke()}}t.fillStyle="rgba(70,76,82,0.9)",t.fillRect(0,o*r-1.5,128,3)}}else if(n==="metal"){t.fillStyle="#5b6168",t.fillRect(0,0,128,128);for(let r=0;r<128;r+=43){t.fillStyle=`rgba(${80+i()*26|0},${88+i()*22|0},${96+i()*20|0},0.45)`,t.fillRect(r+2,0,39,128),t.fillStyle="rgba(34,38,43,0.9)",t.fillRect(r,0,2.4,128);for(let o=8;o<128;o+=18)t.fillStyle="rgba(28,32,36,0.9)",t.beginPath(),t.arc(r+6,o,1.9,0,7),t.fill(),t.fillStyle="rgba(200,210,218,0.5)",t.beginPath(),t.arc(r+5.4,o-.6,.8,0,7),t.fill()}t.strokeStyle="rgba(168,178,188,0.25)";for(let r=0;r<7;r++){let o=i()*128,a=i()*128;t.beginPath(),t.moveTo(o,a),t.lineTo(o+10+i()*22,a+i()*6-3),t.stroke()}for(let r=0;r<5;r++){let o=i()*128,a=i()*128,l=t.createRadialGradient(o,a,1,o,a,7+i()*10);l.addColorStop(0,"rgba(140,72,30,0.5)"),l.addColorStop(1,"rgba(140,72,30,0)"),t.fillStyle=l,t.fillRect(o-18,a-18,36,36)}}else{t.fillStyle="#3c4a5e",t.fillRect(0,0,128,128),t.strokeStyle="rgba(22,28,38,0.9)",t.lineWidth=6,t.strokeRect(3,3,122,122),t.strokeStyle="rgba(30,38,50,0.85)",t.lineWidth=10,t.beginPath(),t.moveTo(0,0),t.lineTo(128,128),t.stroke(),t.beginPath(),t.moveTo(128,0),t.lineTo(0,128),t.stroke(),t.strokeStyle="rgba(110,130,160,0.35)",t.lineWidth=2,t.beginPath(),t.moveTo(0,0),t.lineTo(128,128),t.stroke(),t.beginPath(),t.moveTo(128,0),t.lineTo(0,128),t.stroke(),t.fillStyle="rgba(190,205,225,0.6)";for(let[r,o]of[[12,12],[116,12],[12,116],[116,116],[64,14],[64,114],[14,64],[114,64]])t.beginPath(),t.arc(r,o,2.6,0,7),t.fill();t.fillStyle="rgba(255,255,255,0.05)",t.fillRect(0,0,128,22)}let s=new qn(e);return s.wrapS=s.wrapT=di,s.colorSpace=on,s}function ib(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function na(n){let e="w"+n;return Ir.has(e)||Ir.set(e,new Sn({map:c0(n),flatShading:!0})),Ir.get(e)}function h0(n){let e="f"+n;if(!Ir.has(e)){let t=new Sn({map:c0(n),flatShading:!0});t.color.setScalar(.72),Ir.set(e,t)}return Ir.get(e)}var d0=Math.PI*2;function f0(n,e){let t=n.resources.filter(O=>O.type==="tree"),i=n.resources.filter(O=>O.type==="stone"),s=n.resources.filter(O=>O.type==="metal"),r=new It(fe.cyl,we(6111008),t.length),o=new It(fe.cone,we(16777215),t.length),a=new It(fe.cone,we(16777215),t.length),l=new It(fe.cone,we(16777215),t.length),c=new It(fe.ico,we(16777215),t.length),d=new It(fe.ico,we(16777215),t.length),h=new It(fe.cone,we(15660281),t.length),f=new It(fe.ico,we(9278603),i.length),u=new It(fe.ico,we(8094328),i.length),p=new It(fe.ico,we(9271114),s.length),x=new It(fe.ico,we(14198864,{emissive:6965776}),s.length),m=new It(fe.ico,we(13145412,{emissive:5914124}),s.length);for(let O of[r,o,a,l,c,d,h,f,u,p,x,m])O.frustumCulled=!1,e.add(O);let g=new it,y=new it,v=[],w=[];t.forEach((O,V)=>{let de=.85+O.seed*7.3%1*.4,U=n.world.biomeAt(O.x,O.y)==="winter",G=!U&&O.seed*13.1%1<.42;v.push(U),w.push(G),g.setHex(U?3953968:3494175).multiplyScalar(de),y.setHex(U?5995082:5274160).multiplyScalar(de),o.setColorAt(V,g),a.setColorAt(V,y),l.setColorAt(V,y),g.setHex(4613672).multiplyScalar(de),y.setHex(6127926).multiplyScalar(de),c.setColorAt(V,g),d.setColorAt(V,y)});for(let O of[o,a,l,c,d])O.instanceColor&&(O.instanceColor.needsUpdate=!0);let E=new _t,T=0;function P(){let O=new k(.001,.001,.001);t.forEach((V,de)=>{let U=V.amount<=0?.001:.55+.45*(V.amount/V.max),G=(V.seed*13.7%1-.5)*.12,$=w[de];E.makeRotationZ(G).scale(new k(7*U,30*U,7*U)).setPosition(V.x,15*U,V.y),r.setMatrixAt(de,E),E.makeRotationY(V.seed).scale($?O:new k(31*U,36*U,31*U)).setPosition(V.x,32*U,V.y),o.setMatrixAt(de,E),E.makeRotationY(V.seed*2).scale($?O:new k(23*U,28*U,23*U)).setPosition(V.x+2,52*U,V.y-2),a.setMatrixAt(de,E),E.makeRotationY(V.seed*3).scale($?O:new k(14*U,22*U,14*U)).setPosition(V.x+3,70*U,V.y-3),l.setMatrixAt(de,E),E.makeRotationY(V.seed).scale($?new k(26*U,20*U,26*U):O).setPosition(V.x,42*U,V.y),c.setMatrixAt(de,E),E.makeRotationY(V.seed*2.3).scale($?new k(17*U,14*U,17*U):O).setPosition(V.x+6*U,56*U,V.y-4*U),d.setMatrixAt(de,E);let Q=v[de]?U:.001;E.makeScale(11*Q,10*Q,11*Q).setPosition(V.x+3,80*Q,V.y-3),h.setMatrixAt(de,E)}),i.forEach((V,de)=>{let U=V.amount<=0?.001:(.55+.45*(V.amount/V.max))*V.r;E.makeRotationY(V.seed).scale(new k(U,U*.75,U)).setPosition(V.x,U*.45,V.y),f.setMatrixAt(de,E),E.makeRotationY(V.seed*3).scale(new k(U*.45,U*.35,U*.45)).setPosition(V.x+U*.9,U*.2,V.y+U*.35),u.setMatrixAt(de,E)}),s.forEach((V,de)=>{let U=V.amount<=0?.001:(.55+.45*(V.amount/V.max))*V.r;E.makeRotationY(V.seed*2).scale(new k(U,U*.7,U)).setPosition(V.x,U*.42,V.y),p.setMatrixAt(de,E),E.makeScale(U*.4,U*.34,U*.4).setPosition(V.x+3,U*.85,V.y-2),x.setMatrixAt(de,E),E.makeScale(U*.26,U*.22,U*.26).setPosition(V.x-U*.5,U*.7,V.y+U*.3),m.setMatrixAt(de,E)});for(let V of[r,o,a,l,c,d,h,f,u,p,x,m])V.instanceMatrix.needsUpdate=!0}P();let _=new It(fe.ico,we(7896708),n.world.boulders.length||1);n.world.boulders.forEach((O,V)=>{E.makeRotationY(O.seed).scale(new k(O.r,O.r*.8,O.r)).setPosition(O.x,O.r*.45,O.y),_.setMatrixAt(V,E)}),_.frustumCulled=!1,e.add(_);let M=new It(fe.ico,we(8685967),n.world.rocks.length||1);n.world.rocks.forEach((O,V)=>{E.makeRotationY(O.seed).scale(new k(O.r,O.r*.6,O.r)).setPosition(O.x,O.r*.3,O.y),M.setMatrixAt(V,E)}),M.frustumCulled=!1,e.add(M);let S=new It(fe.cyl,we(7032616),n.world.palms.length||1),R=new It(fe.cone,we(5077552),n.world.palms.length||1);n.world.palms.forEach((O,V)=>{E.makeScale(3.4,44,3.4).setPosition(O.x,22,O.y),S.setMatrixAt(V,E),E.makeScale(26,14,26).setPosition(O.x,48,O.y),R.setMatrixAt(V,E)}),S.frustumCulled=!1,R.frustumCulled=!1,e.add(S,R);let L=n.world.flora.filter(O=>O.type==="cactus"),W=new It(fe.cyl,we(5143098),L.length||1);L.forEach((O,V)=>{E.makeScale(4.5,22,4.5).setPosition(O.x,11,O.y),W.setMatrixAt(V,E)}),W.frustumCulled=!1,e.add(W);let X=n.world.flora.filter(O=>O.type==="fern"||O.type==="shrub"),N=new It(fe.ico,we(5599290),X.length||1);X.forEach((O,V)=>{E.makeScale(8,6,8).setPosition(O.x,4,O.y),N.setMatrixAt(V,E)}),N.frustumCulled=!1,e.add(N),sb(n,e);{let O=[],V=new je,de=we(10133928),U=11;for(let $ of n.world.rails)for(let Q=0;Q<$.pts.length-1;Q++){let ye=$.pts[Q],I=$.pts[Q+1],ee=Math.hypot(I.x-ye.x,I.y-ye.y),K=Math.atan2(I.y-ye.y,I.x-ye.x),D=-Math.sin(K),ue=Math.cos(K);for(let Ae=8;Ae<ee;Ae+=24){let ze=ye.x+Math.cos(K)*Ae,Me=ye.y+Math.sin(K)*Ae;n.world.crossings.some(dt=>(ze-dt.x)**2+(Me-dt.y)**2<2704)||O.push({x:ze,y:Me,a:K})}for(let Ae of[-U,U]){let ze=new ve(fe.box,de);ze.scale.set(ee+2,2.2,2.4),ze.position.set((ye.x+I.x)/2+D*Ae,1.6,(ye.y+I.y)/2+ue*Ae),ze.rotation.y=-K,V.add(ze)}}let G=new It(fe.box,we(4141858),O.length||1);O.forEach(($,Q)=>{E.makeRotationY(-$.a).scale(new k(5,1.6,2*U+10)).setPosition($.x,.9,$.y),G.setMatrixAt(Q,E)}),G.frustumCulled=!1,e.add(G,V)}let B=n.barrels.map(O=>{let V;return O.crate?(V=new ve(fe.box,we(9069104)),V.scale.set(O.r*1.8,O.r*1.5,O.r*1.8),V.position.set(O.x,O.r*.75,O.y)):(V=new ve(fe.cyl,we(10768174)),V.scale.set(O.r*.9,O.r*1.7,O.r*.9),V.position.set(O.x,O.r*.85,O.y)),e.add(V),V}),Y={quarryArm:null,gates:[],fadeables:[]};for(let O of n.world.monuments)ob(n,e,O,Y);ab(n,e);for(let O of n.world.crossings){let V=new je;V.position.set(O.x,0,O.y),V.rotation.y=-O.railAng;for(let de of[-1,1]){let U=new ve(fe.box,we(2500139));U.scale.set(5,20,5),U.position.set(0,10,de*38),V.add(U);let G=new ve(fe.box,we(12597802));G.scale.set(40,3.6,3.6),G.position.set(20,18,de*38);let $=new je;$.position.set(0,18,de*38),G.position.set(20,0,0),$.add(G),V.add($),Y.gates.push({pivot:$,cr:O,side:de})}e.add(V)}let ce=new je;e.add(ce);let pe=new Map,Ee=new Map,De=new Map,He=-1,Qe=new Set;function se(O){if(O==="p1")return 8308816;let V=n.teams.find(de=>de.owner===O);return V?parseInt(V.col.slice(1),16):8947848}function re(){if(n.nav.stamp!==He){He=n.nav.stamp,Qe.clear();for(let[O,V]of n.structures){Qe.add(O);let de=V.mat,U=Ee.get(O);if(U&&U.sig!==de&&(ce.remove(U.mesh),Ee.delete(O),U=null),!U){let[G,$]=O.split(",").map(Number),Q=new ve(fe.box,h0(V.mat||"wood"));Q.scale.set(62,5,62),Q.position.set(G*64+64/2,2.5,$*64+64/2),ce.add(Q),Ee.set(O,{mesh:Q,sig:de})}}for(let[O,V]of Ee)Qe.has(O)||(ce.remove(V.mesh),Ee.delete(O));Qe.clear();for(let[O,V]of n.walls){if(V.hp<=0)continue;Qe.add(O);let de=V.type+V.mat+(V.open?"o":"c"),U=pe.get(O);if(U&&U.sig!==de&&(ce.remove(U.mesh),pe.delete(O),U=null),!U){let G=Ft(O,V),$=(G[0]+G[2])/2,Q=(G[1]+G[3])/2,ye=G[0]===G[2],I=new je;if(V.type==="door"&&V.open)for(let ee of[-26,26]){let K=new ve(fe.box,we(ta[V.mat]||ta.wood));K.scale.set(ye?11:12,40,ye?12:11),K.position.set(ye?0:ee,20,ye?ee:0),I.add(K)}else{let ee=na(V.mat||"wood"),K=new ve(fe.box,ee),D=V.type==="door"?42:48;K.scale.set(ye?11:64,D,ye?64:11),K.position.y=D/2,V.type==="door"&&(K.material=ee.clone(),K.material.color.setScalar(.78)),I.add(K);let ue=new ve(fe.box,we(ta[V.mat]||ta.wood));if(ue.scale.set(ye?13:66,4,ye?66:13),ue.position.y=D+2,I.add(ue),V.type==="door"){let Ae=new ve(fe.sphere,we(14202462));Ae.scale.set(2.5,2.5,2.5),Ae.position.set(ye?7:10,22,ye?10:7),I.add(Ae)}}I.position.set($,0,Q),ce.add(I),pe.set(O,{mesh:I,sig:de})}}for(let[O,V]of pe)Qe.has(O)||(ce.remove(V.mesh),pe.delete(O));Qe.clear();for(let[O,V]of n.deploys){Qe.add(O);let de=V.type+(V.tier||"")+V.owner,U=De.get(O);if(U&&U.sig!==de&&(ce.remove(U.group),De.delete(O),U=null),!U){let[G,$]=O.split(",").map(Number),Q=G*64+64/2,ye=$*64+64/2,I=new je;I.position.set(Q,0,ye);let ee={group:I,sig:de};if(V.type==="turret"){let K=V.tier===3?6277344:V.tier===2?14721594:10133928;for(let ae=0;ae<3;ae++){let ge=ae/3*d0+.5,Te=new ve(fe.cyl,we(3027760));Te.scale.set(2.2,18,2.2),Te.position.set(Math.cos(ge)*11,8,Math.sin(ge)*11),Te.rotation.z=-Math.cos(ge)*.5,Te.rotation.x=Math.sin(ge)*.5,I.add(Te);let Re=new ve(fe.box,we(2303787));Re.scale.set(6,2,6),Re.position.set(Math.cos(ge)*16,1,Math.sin(ge)*16),I.add(Re)}let D=new ve(fe.cyl,we(3817284));D.scale.set(3.6,16,3.6),D.position.y=16,I.add(D);let ue=new je;ue.position.y=26;for(let ae of[-1,1]){let ge=new ve(fe.box,we(4870228));ge.scale.set(12,13,2.4),ge.position.set(0,2,ae*7.6),ue.add(ge)}let Ae=new ve(fe.box,we(5659994));Ae.scale.set(13,9.5,12),Ae.position.y=3,ue.add(Ae);let ze=new ve(fe.cyl,we(1316892));ze.scale.set(3.2,2,3.2),ze.rotation.z=Math.PI/2,ze.position.set(7.6,4.5,0),ue.add(ze);let Me=new ve(fe.sphere,we(13777960,{emissive:13777960,emissiveIntensity:.8}));Me.scale.set(1.5,1.5,1.5),Me.position.set(9.2,4.5,0),ue.add(Me);let dt=V.tier===3?22:V.tier===2?17:13,C=new ve(fe.box,we(1974822));if(C.scale.set(dt,3.8,3.4),C.position.set(dt/2+5,-2.6,0),ue.add(C),V.tier===2){let ae=C.clone();ae.position.z=4.4,ue.add(ae)}let b=new ve(fe.cyl,we(K,{emissive:K,emissiveIntensity:.45}));b.scale.set(2,2.6,2),b.rotation.z=Math.PI/2,b.position.set(dt+6,-2.6,0),ue.add(b);let Z=new ve(fe.cyl,we(K,{emissive:K,emissiveIntensity:.3}));Z.scale.set(4.1,2,4.1),Z.position.y=21,I.add(Z),I.add(ue),ee.pivot=ue}else if(V.type==="cupboard"){let K=new ve(fe.box,we(se(V.owner)));K.scale.set(42,40,42),K.position.y=20,I.add(K);let D=new ve(fe.box,we(2891532));D.scale.set(46,5,46),D.position.y=42,I.add(D);let ue=us(7790698,26);ue.position.y=50,I.add(ue),ee.led=ue}else{let K=new ve(fe.box,we(7031332));K.scale.set(40,24,40),K.position.y=12,I.add(K)}ce.add(I),De.set(O,ee)}}for(let[O,V]of De)Qe.has(O)||(ce.remove(V.group),De.delete(O))}}let F=new je;e.add(F);let ne=-1;function oe(){if(n.fences.length!==ne){ne=n.fences.length,F.clear();for(let O of n.fences){let V=new ve(fe.box,we(8215600));V.scale.set(46,22,5),V.position.set(O.x,11,O.y),V.rotation.y=-O.a,F.add(V)}}}return{sync(O){T-=O,T<=0&&(T=.25,P()),n.barrels.forEach((de,U)=>{B[U].visible=de.hp>0}),re(),oe();for(let[de,U]of De){let G=n.deploys.get(de);if(G&&(U.pivot&&(U.pivot.rotation.y=-(G.angle||0)),U.led&&G.store)){let $=G.store.wood+G.store.stone+G.store.metal>0;U.led.material.color.setHex($?7790698:16734780)}}if(Y.quarryArm){let de=n.quarry;Y.quarryArm.rotation.z=de&&de.owner?Math.sin(de.arm*2.4)*.35:-.18}for(let de of Y.gates)de.pivot.rotation.z=(1-de.cr.gate)*1.35;let V=n.player;for(let de of Y.fadeables){let U=V.x-de.x,G=V.y-de.y,Q=!V.dead&&U*U+G*G<(de.r+90)*(de.r+90)?.3:1;for(let ye of de.mats)ye.opacity+=(Q-ye.opacity)*Math.min(1,O*7)}}}}function sb(n,e){let{hash2:t}=rb,i=[],s=[],r=[],o=13824,a=9216;for(let u=120;u<a-120;u+=150)for(let p=120;p<o-120;p+=150){let x=t(p/150|0,u/150|0);if(x>.62)continue;let m=p+x*977%1*130,g=u+x*467%1*130;if(!n.world.onLand(m,g)||n.world.lakeAt(m,g)||n.world.pathDist(m,g)<40)continue;let y=n.world.biomeAt(m,g);y==="jungle"?i.push({x:m,y:g,h:x}):y==="desert"?x<.3&&s.push({x:m,y:g,h:x}):x<.4&&r.push({x:m,y:g,h:x})}let l=new _t,c=new it,d=new It(fe.cone,we(16777215),i.length||1);i.forEach((u,p)=>{let x=5+u.h*8;l.makeRotationY(u.h*6).scale(new k(x,x*1.8,x)).setPosition(u.x,x*.9,u.y),d.setMatrixAt(p,l),c.setHex(4876846).multiplyScalar(.8+u.h*37%1*.5),d.setColorAt(p,c)});let h=new It(fe.ico,we(16777215),s.length||1);s.forEach((u,p)=>{let x=3+u.h*8;l.makeRotationY(u.h*9).scale(new k(x,x*.55,x)).setPosition(u.x,x*.3,u.y),h.setMatrixAt(p,l),c.setHex(10259040).multiplyScalar(.85+u.h*53%1*.3),h.setColorAt(p,c)});let f=new It(fe.sphere,we(15265781),r.length||1);r.forEach((u,p)=>{let x=6+u.h*12;l.makeScale(x,x*.4,x*.8).setPosition(u.x,x*.16,u.y),f.setMatrixAt(p,l)});for(let u of[d,h,f])u.frustumCulled=!1,u.instanceColor&&(u.instanceColor.needsUpdate=!0),e.add(u)}var rb={hash2(n,e){let t=n*374761393+e*668265263|0;return t=t^t>>13|0,t=Math.imul(t,1274126177),((t^t>>16)>>>0)/4294967296}};function ob(n,e,t,i){let s=new je;s.position.set(t.x,0,t.y);let r=(l,c,d,h,f,u,p,x,m=0,g)=>{let y=new ve(l,we(c,g));return y.scale.set(d,h,f),y.position.set(u,p,x),y.rotation.y=m,s.add(y),y},o=[],a=(...l)=>{let c=r(...l),d=c.material.clone();return d.transparent=!0,c.material=d,o.push(d),c};if(t.type==="gas"){a(fe.box,11027246,216,8,30,0,64,-70);for(let l of[-96,-30,36,96])r(fe.box,4147024,6,60,6,l,30,-62);for(let l of[-58,0])r(fe.box,5989227,18,30,16,l,15,-22);a(fe.box,9081241,54,52,50,58,26,-16),r(fe.box,12574959,18,14,2,66,34,10),r(fe.box,13279562,26,26,6,-104,40,-62)}else if(t.type==="junk"){for(let l=0;l<5;l++){let c=l/5*d0;r(fe.ico,7238780,26,14,20,Math.cos(c)*70,8,Math.sin(c)*54,c)}r(fe.box,8011824,56,22,26,-58,11,-40,.3),r(fe.box,3824234,56,22,26,54,11,44,-.5),r(fe.cyl,2302237,12,16,12,70,8,-50),r(fe.cyl,2302237,12,16,12,-66,8,58)}else if(t.type==="warehouse"){a(fe.box,8291470,252,70,164,0,35,0),a(fe.box,5988971,264,10,176,0,74,0);for(let l of[-72,0,72])a(fe.box,2764597,60,46,4,l,23,84);a(fe.box,4870488,30,14,16,-38,84,0),a(fe.box,4870488,30,14,16,38,84,0)}else if(t.type==="quarry"){r(fe.cyl,3814438,46,8,28,-36,4,26),r(fe.box,3948871,12,64,12,8,32,-46);let l=new je;l.position.set(14,60,-44);let c=new ve(fe.box,we(8226963));c.scale.set(86,9,9),l.add(c);let d=new ve(fe.sphere,we(10768430));d.scale.set(9,9,9),d.position.x=-43,l.add(d),s.add(l),i.quarryArm=l,r(fe.box,5061152,4,46,4,-44,23,-58),r(fe.box,7236186,24,13,2,-32,40,-58)}o.length&&i.fadeables.push({x:t.x,y:t.y,r:t.r,mats:o}),e.add(s)}function ab(n,e){let t=n.world.shop,i=new je;i.position.set(t.x,0,t.y);let s=new ve(fe.cyl,we(6969398));s.scale.set(46,6,46),s.position.y=3,i.add(s);let r=new ve(fe.box,we(10120764));r.scale.set(60,24,22),r.position.set(0,16,2),i.add(r);let o=new ve(fe.cone,we(11751744));o.scale.set(52,26,52),o.position.y=56,i.add(o);for(let l of[-34,34]){let c=new ve(fe.cyl,we(6177574));c.scale.set(3,44,3),c.position.set(l,22,8),i.add(c)}let a=new ve(new Ds(Tt-7,Tt,72),new Xt({color:9885695,transparent:!0,opacity:.3,side:In,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=1.2,i.add(a),e.add(i)}var sf=13081716,Pr=Math.PI*2;function Nt(n,e,t,i,s,r,o){let a=new ve(fe.box,we(n));return a.scale.set(e,t,i),a.position.set(s,r,o),a}function gt(n,e,t,i,s,r=1,o=1){let a=new ve(fe.sphere,we(n));return a.scale.set(e,e*r,e*o),a.position.set(t,i,s),a}var u0={pistol:n=>n.add(Nt(2303519,10,4,3.4,11,0,0)),rifle:n=>{n.add(Nt(2303519,20,3.6,3.4,15,0,0)),n.add(Nt(4864544,5,5,3.8,7,-1,0))},shotgun:n=>{n.add(Nt(2827808,16,4.6,4,13,0,0)),n.add(Nt(5980710,5,5.5,4.2,5,-1,0))},hmg:n=>{n.add(Nt(2303519,24,5,4.4,16,0,0)),n.add(Nt(3817271,6,7,4.8,10,-3,0))},tool:n=>{n.add(Nt(5980710,13,3,3,9,0,0)),n.add(Nt(12173511,4,8,3.4,16,1,0))},rocket:n=>{n.add(Nt(3751983,22,6.5,6,14,1,0)),n.add(Nt(16751421,3,7,6.4,25,1,0))},hammer:n=>{n.add(Nt(5980710,11,3,3,8,0,0)),n.add(Nt(10133928,4,7,4.4,14,1,0))},jack:n=>{n.add(Nt(1842204,4,4,3.4,6,1,0)),n.add(Nt(13279802,11,9,5.5,13,0,0)),n.add(Nt(3817271,4,5.5,4,20,-1,0)),n.add(Nt(12173511,11,2.6,2.6,27,-2,0))}};function m0(n,e={}){let t=new je,i={};i.shadow=Os(46),i.shadow.position.y=1,t.add(i.shadow),i.lower=new je,t.add(i.lower);for(let l of["L","R"]){let c=new je;c.position.set(0,12,l==="L"?-3.2:3.2);let d=Nt(3289130,4.6,12,4.6,0,-6,0);c.add(d),i.lower.add(c),i["leg"+l]=c}i.torso=Nt(n,10,14,12,0,24.5,0),t.add(i.torso),i.torsoShade=Nt(p0(n,.7),10.4,4.5,12.4,0,19,0),t.add(i.torsoShade),i.armor=Nt(9804963,11,10,13,.8,24.5,0),i.armor.visible=!1,t.add(i.armor),i.pack=Nt(4866100,4,9,8,-7,25,0),t.add(i.pack),i.armL=new je,i.armL.position.set(0,30,-7.4);let s=Nt(sf,3.6,11,3.6,0,-5,0);i.armL.add(s),t.add(i.armL),i.armR=new je,i.armR.position.set(2,29,7.4),i.armR.add(Nt(sf,9,3.6,3.6,4.5,0,-1.5)),i.gun=new je,i.armR.add(i.gun),t.add(i.armR),i.head=new je,i.head.position.y=38;let r=null;if(e.scientist){i.head.add(gt(n,6.3,0,.4,0)),i.head.add(Nt(1974822,5.5,4.5,7.5,4.2,-1.2,0));for(let c of[-1,1])i.head.add(gt(14214848,1.3,5.2,1.4,c*2.4));let l=new ve(fe.cyl,we(5857382));l.scale.set(3.6,12,3.6),l.position.set(-8,25,0),t.add(l),i.pack.visible=!1}else{i.head.add(gt(sf,5.6,0,0,0));let l=new ve(fe.sphere,we(e.hairCol??3811864));l.scale.set(5.9,4.4,5.9),l.position.y=2.2,i.head.add(l),r=new ve(fe.cyl,we(n)),r.scale.set(5.9,1.6,5.9),r.position.y=1.2,i.head.add(r)}i.band=r,i.helmet=new je;let o=new ve(fe.sphere,we(10136504));o.scale.set(6.3,6.3,6.3),i.helmet.add(o);let a=Nt(1119516,3,3,9.5,4.6,-.5,0);return i.helmet.add(a),i.helmet.visible=!1,i.head.add(i.helmet),t.add(i.head),t.userData={parts:i,colHex:n,phase:Math.random()*7,setGun(l){t.userData.gunKind!==l&&(t.userData.gunKind=l,i.gun.clear(),(u0[l]||u0.pistol)(i.gun))},setArmor(l,c){i.armor.visible=l>0,l>0&&(i.armor.material=we(l>=3?6126235:l===2?9804963:8746824)),i.helmet.visible=c>0,c>0&&(i.helmet.children[0].material=we(c>=3?8163017:c===2?10136504:13482898))},setColor(l){t.userData.colHex!==l&&(t.userData.colHex=l,i.torso.material=we(l),i.torsoShade.material=we(p0(l,.7)),r&&(r.material=we(l)))},animate(l,c,d,h,f){let u=t.userData,p=Math.min(.1,Math.max(.001,l-(u.lastT??l)));u.lastT=l;let x=u.hipsCur??0,m=1,g=1;if(c>.05&&f!==null&&f!==void 0){let T=f%Pr;T>Math.PI&&(T-=Pr),T<-Math.PI&&(T+=Pr),Math.abs(T)>2.06&&(m=-1,g=.72,T=T>0?T-Math.PI:T+Math.PI),x=T}else c<=.05&&(x=0);let y=u.hipsCur??0,v=(x-y)%Pr;v>Math.PI&&(v-=Pr),v<-Math.PI&&(v+=Pr),y+=v*Math.min(1,p*14),u.hipsCur=y,i.lower.rotation.y=-y;let w=l*11+u.phase,E=Math.sin(w)*.75*c*g*m;if(i.legL.rotation.z=E,i.legR.rotation.z=-E,i.armL.rotation.z=-E*.55,t.position.y=Math.abs(Math.sin(w))*1.4*c,d&&h){i.armR.rotation.z=-.22+Math.sin(l*62)*.05;let T=Math.sin(l*57)*1.5,P=Math.sin(l*71)*1.1;t.position.y+=Math.abs(P)*.8,t.userData.judder={x:T,z:Math.cos(l*49)*1.3}}else t.userData.judder=null,d?i.armR.rotation.z=-.5+Math.sin(l*9)*.55:i.armR.rotation.z=0}},t.userData.setGun(e.gun||"pistol"),t}function p0(n,e){let t=Math.min(255,(n>>16&255)*e)|0,i=Math.min(255,(n>>8&255)*e)|0,s=Math.min(255,(n&255)*e)|0;return t<<16|i<<8|s}function qc(n,e,t,i,s,r){let o=[];for(let a of[-1,1])for(let l of[-1,1]){let c=new je;c.position.set(a*i,r,l*s);let d=new ve(fe.cyl,we(e));d.scale.set(t*.16,r,t*.16),d.position.y=-r/2,c.add(d),n.add(c),o.push({pivot:c,phase:a*l>0?0:Math.PI})}return o}function g0(n,e){let t=new je,i={legs:[],extra:null},s={boar:[8282692,5521451],wolf:[7698047,4605773],bear:[6375471,3812380],polarbear:[14542315,11451592],alligator:[5599286,3229980],snake:[11704890,7430430],scorpion:[8278566,4664850]}[n]||[8947848,5592405],[r,o]=s,a=Os(e*3.2);if(a.position.y=.8,t.add(a),n==="snake"){i.segs=[];for(let c=0;c<6;c++){let d=gt(c%2?o:r,e*(.55-c*.05),-c*e*.5,e*.4,0);t.add(d),i.segs.push(d)}let l=gt(r,e*.62,e*.45,e*.45,0,.8,.9);t.add(l),i.head=l}else if(n==="scorpion"){t.add(gt(o,e*.85,0,e*.4,0,.5,.8)),t.add(gt(r,e*.62,e*.2,e*.55,0,.5,.75));for(let h of[-1,1])t.add(Nt(r,e*.8,e*.2,e*.18,e*.75,e*.35,h*e*.5)),t.add(gt(o,e*.26,e*1.2,e*.35,h*e*.62));i.tail=new je,i.tail.position.set(-e*.7,e*.5,0);let l=0,c=0;for(let h=0;h<3;h++)l-=e*.3,c+=e*.34,i.tail.add(gt(o,e*.2,l,c,0));let d=new ve(fe.cone,we(3810320));d.scale.set(e*.14,e*.3,e*.14),d.position.set(l+e*.16,c+e*.22,0),d.rotation.z=-1,i.tail.add(d),t.add(i.tail)}else if(n==="alligator"){let l=e*.55;t.add(gt(o,e,0,l,0,.5,.72)),t.add(gt(r,e*.82,0,l+e*.18,0,.42,.6)),t.add(gt(r,e*.5,e*1.15,l,0,.5,.62)),t.add(Nt(o,e*.9,e*.16,e*.5,e*1.25,l-e*.1,0)),t.add(gt(o,e*.62,-e*1.05,l,0,.45,.6)),t.add(gt(o,e*.4,-e*1.7,l*.9,0,.45,.55));for(let c=0;c<4;c++){let d=new ve(fe.cone,we(o));d.scale.set(e*.12,e*.25,e*.12),d.position.set(-e*.6+c*e*.42,l+e*.42,0),t.add(d)}i.legs=qc(t,o,e,e*.55,e*.5,l*.8)}else if(n==="bear"||n==="polarbear"){let l=e*.95;t.add(gt(r,e*.88,e*.2,l,0,.95,.78)),t.add(gt(o,e*.74,-e*.62,l*.88,0,.85,.74)),t.add(gt(r,e*.46,e*.05,l+e*.62,0)),t.add(gt(o,e*.16,-e*1.28,l*.95,0));let c=new je;c.position.set(e*1,l+e*.42,0),c.add(gt(r,e*.42,0,0,0)),c.add(gt(o,e*.26,e*.4,-e*.06,0,.75,.7)),c.add(gt(1840144,e*.08,e*.62,-e*.04,0));for(let d of[-1,1])c.add(gt(o,e*.13,-e*.18,e*.36,d*e*.26)),c.add(gt(1314828,e*.05,e*.3,e*.12,d*e*.2));t.add(c),i.head=c,i.legs=qc(t,o,e*1.25,e*.52,e*.4,l*.92)}else if(n==="wolf"){let l=e*.95;t.add(gt(r,e*.85,e*.15,l,0,.62,.52)),t.add(gt(o,e*.66,-e*.6,l*.96,0,.55,.48));let c=new je;c.add(gt(o,e*.22,-e*1.15,l+e*.1,0,1,.8)),c.add(gt(o,e*.16,-e*1.45,l+e*.3,0)),t.add(c);let d=new je;d.position.set(e*.95,l+e*.3,0),d.add(gt(r,e*.34,0,0,0)),d.add(gt(o,e*.18,e*.36,-e*.05,0,.7,.6)),d.add(gt(1840144,e*.06,e*.52,-e*.02,0));for(let h of[-1,1]){let f=new ve(fe.cone,we(o));f.scale.set(e*.1,e*.26,e*.1),f.position.set(-e*.12,e*.4,h*e*.18),d.add(f),d.add(gt(14206010,e*.05,e*.26,e*.1,h*e*.15))}t.add(d),i.head=d,i.legs=qc(t,o,e*.85,e*.5,e*.3,l*1)}else{let l=e*.66;t.add(gt(o,e*1,0,l,0,.72,.72)),t.add(gt(r,e*.88,e*.1,l+e*.08,0,.66,.64));for(let d=0;d<4;d++){let h=new ve(fe.cone,we(4075554));h.scale.set(e*.1,e*.2,e*.1),h.position.set(e*.45-d*e*.3,l+e*.52-d*e*.03,0),t.add(h)}t.add(gt(o,e*.1,-e*1.05,l+e*.15,0));let c=new je;c.position.set(e*.92,l,0),c.add(gt(r,e*.46,0,0,0,.9,.8)),c.add(gt(9071192,e*.2,e*.5,-e*.12,0,.7,.9));for(let d of[-1,1]){let h=new ve(fe.cone,we(15261903));h.scale.set(e*.06,e*.2,e*.06),h.position.set(e*.42,-e*.16,d*e*.22),h.rotation.z=.6,c.add(h);let f=new ve(fe.cone,we(o));f.scale.set(e*.1,e*.18,e*.1),f.position.set(-e*.2,e*.38,d*e*.24),f.rotation.x=d*.4,c.add(f),c.add(gt(1314828,e*.05,e*.3,e*.14,d*e*.22))}t.add(c),i.head=c,i.legs=qc(t,o,e*.95,e*.48,e*.36,l*.9)}return t.userData={...i,phase:Math.random()*7,animate(l,c){let d=l*9+t.userData.phase;for(let h of i.legs)h.pivot.rotation.z=Math.sin(d+h.phase)*.55*c;if(i.segs)for(let h=0;h<i.segs.length;h++)i.segs[h].position.z=Math.sin(l*7-h*.8)*e*.3*(.4+c);i.tail&&(i.tail.rotation.z=Math.sin(l*3)*.08),i.head&&!i.segs&&(i.head.rotation.z=Math.sin(l*2.2+t.userData.phase)*.06)}},t}var x0=Math.PI*2,lb={0:"tool",1:"pistol",2:"rifle",3:"hmg",4:"rocket",5:"hammer",6:"rifle",7:"shotgun",8:"hmg"},ps=class{constructor(e,t){this.scene=e,this.make=t,this.map=new Map,this.seen=new Set,this.miss=new Map}get(e,...t){this.seen.add(e);let i=this.map.get(e);return i||(i=this.make(...t),this.map.set(e,i),this.scene.add(i)),i.visible=!0,i}sweep(){for(let[e,t]of this.map)if(this.seen.has(e))this.miss.delete(e);else{t.visible=!1;let i=(this.miss.get(e)||0)+1;i>300?(this.scene.remove(t),this.map.delete(e),this.miss.delete(e)):this.miss.set(e,i)}this.seen.clear()}};function y0(n,e){let t=new ps(e,(U,G,$)=>m0(U,{gun:G,scientist:$})),i=new ps(e,(U,G)=>g0(U,G));function s(){return we(1645589)}let r=(U,G,$,Q,ye,I,ee)=>{let K=new ve(fe.box,we(U));return K.scale.set(G,$,Q),K.position.set(ye,I,ee),K},o=new ps(e,U=>{let G=new je;G.add(r(3356462,34,3,24,2,8,0)),G.add(r(U,15,11,15,4,15,0)),G.add(r(U,13,16,3.4,-3,24,0)),G.add(r(2303519,9,7,12,15,13,0)),G.add(r(3817271,10,10,11,-11,14,0));let $=new ve(fe.cyl,we(2895656));$.scale.set(2.4,16,2.4),$.position.set(-2,32,0),G.add($),G.add(r(2895656,42,3.6,3.6,-32,22,0)),G.add(r(3356462,8,12,2.4,-51,26,0));let Q=r(1645589,1.4,16,2.6,-53,24,3);G.add(Q);for(let D of[-1,1]){let ue=new ve(fe.cyl,we(2303519));ue.scale.set(1.8,52,1.8),ue.rotation.z=Math.PI/2,ue.position.set(2,2.5,D*13),G.add(ue),G.add(r(2303519,2,8,2,-8,5,D*13)),G.add(r(2303519,2,8,2,12,5,D*13))}let ye=r(1645589,96,1.6,7,-2,41,0);G.add(ye);let I=new je;I.add(r(U,8,11,9,4,21,0));let ee=new ve(fe.sphere,we(13081716));ee.scale.set(4.5,4.5,4.5),ee.position.set(4,30,0),I.add(ee),I.visible=!1,G.add(I);let K=Os(86);return K.position.y=1,G.add(K),G.userData={rotor:ye,tailRotor:Q,sh:K,pilot:I},G}),a=new ps(e,U=>{let G=new je;G.add(r(U,104,30,34,0,26,0)),G.add(r(2501666,104,8,35,0,13,0)),G.add(r(2040857,18,22,30,56,24,0)),G.add(r(10470104,6,9,26,64,30,0));let $=r(2896680,20,4,30,-56,12,0);$.rotation.z=.5,G.add($);for(let K=0;K<4;K++)G.add(r(1316892,7,7,2,32-K*22,30,17.6));for(let K=0;K<4;K++)G.add(r(1316892,7,7,2,32-K*22,30,-17.6));G.add(r(3817524,26,10,20,-38,46,0));let Q=r(2895656,4,12,4,38,46,0);G.add(Q);let ye=r(1645589,100,2,8,38,54,0);G.add(ye);let I=r(1645589,100,2,8,-38,58,0);G.add(I);for(let[K,D]of[[44,14],[44,-14],[-40,16],[-40,-16]]){let ue=new ve(fe.cyl,we(1316892));ue.scale.set(4.5,3,4.5),ue.rotation.x=Math.PI/2,ue.position.set(K,5,D),G.add(ue)}let ee=Os(150);return ee.position.y=1,G.add(ee),G.userData={rotor:ye,rotor2:I,sh:ee},G}),l=new ps(e,U=>U()),c=new ps(e,(U,G)=>us(U,G)),d=700,h=new It(fe.quad,new Xt({color:2366482,transparent:!0,opacity:.34,depthWrite:!1,side:In}),d);h.frustumCulled=!1,h.renderOrder=2,e.add(h);let f=new _t,u=new _t,p=new k,x=64,m=[],g=new It(fe.box,new Sn({color:16777215,flatShading:!0}),x);g.frustumCulled=!1,e.add(g);let y=new _t,v=new it,w={wood:9069104,stone:8685967,metal:13145412},E=90,T=[],P=new Yt,_=new Float32Array(E*3);P.setAttribute("position",new en(_,3));let M=new Hi(P,new xi({color:16771491,size:6,transparent:!0,opacity:.95,blending:wn,depthWrite:!1,sizeAttenuation:!0}));M.frustumCulled=!1,e.add(M);function S(U){let G=U.jack?5:3;for(let $=0;$<G;$++){m.length>=x&&m.shift();let Q=Math.random()*x0;m.push({x:U.x+Math.cos(Q)*6,y:U.y+Math.sin(Q)*6,h:18+Math.random()*14,vx:Math.cos(Q)*(40+Math.random()*70),vy:Math.sin(Q)*(40+Math.random()*70),vh:60+Math.random()*90,life:.85,rot:Math.random()*7,vrot:(Math.random()-.5)*14,s:2.2+Math.random()*(U.jack?3.4:2.2),col:w[U.kind]||9069104})}if(U.jack)for(let $=0;$<7;$++){T.length>=E&&T.shift();let Q=Math.random()*x0;T.push({x:U.x,y:U.y,h:16,vx:Math.cos(Q)*(90+Math.random()*160),vy:Math.sin(Q)*(90+Math.random()*160),vh:40+Math.random()*120,life:.22+Math.random()*.14})}}function R(U){for(let $=m.length-1;$>=0;$--){let Q=m[$];if(Q.life-=U,Q.life<=0){m.splice($,1);continue}Q.vh-=320*U,Q.x+=Q.vx*U,Q.y+=Q.vy*U,Q.h+=Q.vh*U,Q.h<1.5&&(Q.h=1.5,Q.vh*=-.35,Q.vx*=.6,Q.vy*=.6),Q.rot+=Q.vrot*U}m.forEach(($,Q)=>{y.makeRotationY($.rot).scale(new k($.s,$.s,$.s)).setPosition($.x,$.h,$.y),g.setMatrixAt(Q,y),v.setHex($.col),g.setColorAt(Q,v)}),g.count=m.length,g.instanceMatrix.needsUpdate=!0,g.instanceColor&&(g.instanceColor.needsUpdate=!0);let G=0;for(let $=T.length-1;$>=0;$--){let Q=T[$];if(Q.life-=U,Q.life<=0){T.splice($,1);continue}Q.vh-=260*U,Q.x+=Q.vx*U,Q.y+=Q.vy*U,Q.h=Math.max(1,Q.h+Q.vh*U)}for(let $ of T){if(G>=E)break;_[G*3]=$.x,_[G*3+1]=$.h,_[G*3+2]=$.y,G++}P.setDrawRange(0,G),P.attributes.position.needsUpdate=!0}let L=46,W=[];for(let U=0;U<L;U++){let G=new Cs(new ss({map:Xc(),color:8817810,transparent:!0,opacity:0,depthWrite:!1}));G.visible=!1,e.add(G),W.push(G)}let X=[];function N(U,G,$,Q){X.length>=L&&X.shift(),X.push({x:U,y:G,h:$,life:2.8,max:2.8,s0:26*Q,drift:Math.random()*7})}function B(U){for(let G=X.length-1;G>=0;G--){let $=X[G];if($.life-=U,$.life<=0){X.splice(G,1);continue}$.h+=50*U,$.x+=n.wind*9*U,$.y+=Math.sin($.drift)*3*U}W.forEach((G,$)=>{let Q=X[$];if(!Q){G.visible=!1;return}G.visible=!0;let ye=1-Q.life/Q.max,I=Q.s0*(1+ye*2.4);G.scale.set(I,I,1),G.position.set(Q.x,Q.h,Q.y),G.material.opacity=.36*(Q.life/Q.max)*Math.min(1,ye*6+.2)})}function Y(U,G){let $=U.pts,Q=0;for(let I=0;I<U.seg&&I<$.length-1;I++)Q+=Math.hypot($[I+1].x-$[I].x,$[I+1].y-$[I].y);Q+=Math.hypot(U.x-$[Math.min(U.seg,$.length-1)].x,U.y-$[Math.min(U.seg,$.length-1)].y);let ye=[];for(let I of G){let ee=Math.max(.1,Q+I),K=0,D=0;for(;K<$.length-2;){let dt=Math.hypot($[K+1].x-$[K].x,$[K+1].y-$[K].y);if(D+dt>=ee)break;D+=dt,K++}let ue=$[K],Ae=$[K+1],ze=Math.hypot(Ae.x-ue.x,Ae.y-ue.y)||1,Me=Math.max(0,Math.min(1,(ee-D)/ze));ye.push({x:ue.x+(Ae.x-ue.x)*Me,y:ue.y+(Ae.y-ue.y)*Me,a:Math.atan2(Ae.y-ue.y,Ae.x-ue.x)})}return ye}let ce=18,pe=[],Ee=[];for(let U=0;U<ce;U++){let G=new ve(new Ds(.6,1,14),new Xt({color:12575468,transparent:!0,opacity:0,depthWrite:!1}));G.rotation.x=-Math.PI/2,G.renderOrder=3,G.visible=!1,e.add(G),Ee.push(G)}function De(U,G){pe.length>=ce&&pe.shift(),pe.push({x:U+(Math.random()-.5)*6,y:G+(Math.random()-.5)*6,life:.5,max:.5})}function He(U){for(let G=pe.length-1;G>=0;G--){let $=pe[G];$.life-=U,$.life<=0&&pe.splice(G,1)}Ee.forEach((G,$)=>{let Q=pe[$];if(!Q){G.visible=!1;return}G.visible=!0;let I=5+(1-Q.life/Q.max)*17;G.scale.set(I,I,1),G.position.set(Q.x,2.2,Q.y),G.material.opacity=.55*(Q.life/Q.max)})}let Qe=1200,se=new Yt,re=new Float32Array(Qe*3),F=new Float32Array(Qe*3);se.setAttribute("position",new en(re,3)),se.setAttribute("color",new en(F,3));let ne=new Hi(se,new xi({size:7,vertexColors:!0,transparent:!0,opacity:.9,sizeAttenuation:!0,depthWrite:!1}));ne.frustumCulled=!1,e.add(ne);let oe=new Map;function O(U){let G=oe.get(U);if(!G){G=new it;try{if(U.startsWith("rgba")){let $=U.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)/);$&&G.setRGB(+$[1]/255,+$[2]/255,+$[3]/255)}else G.set(U)}catch{G.setRGB(.7,.7,.7)}oe.set(U,G)}return G}let V=1/60;function de(U,G,$,Q,ye,I={}){U.position.set(G,0,$),U.rotation.y=-Q;let ee=U.userData;ee.setColor(ye),I.gun&&ee.setGun(I.gun),ee.setArmor(I.bodyArmor||0,I.facemask||0);let K=null;(I.vx||I.vy)&&Math.hypot(I.vx,I.vy)>18&&(K=Math.atan2(I.vy,I.vx)-Q),ee.animate(n.t,I.moveAmt??0,!!I.gathering,!!I.jack,K),ee.judder&&(U.position.x+=ee.judder.x,U.position.z+=ee.judder.z);let D=n.world.lakeAt(G,$),ue=D&&!D.frozen?30:0;ee.sinkY=(ee.sinkY??0)+(ue-(ee.sinkY??0))*Math.min(1,V*5),U.position.y-=ee.sinkY}return{sync(U,G){V=U;for(let I of n.units){if(I.dead||I.eliminated)continue;if(I.copter&&!I.copter.destroyed&&G.inView(I.copter.x,I.copter.y,200)){let ue=o.get(I.copter,parseInt(I.col.slice(1),16)),Ae=I.flying&&I.state==="trade";ue.position.set(I.copter.x,Ae?70:0,I.copter.y),ue.rotation.y=-(I.copter.angle||0),ue.userData.rotor.rotation.y=I.copter.rotor||0,ue.userData.tailRotor.rotation.z=(I.copter.rotor||0)*4,ue.userData.pilot.visible=Ae,ue.userData.sh.position.y=Ae?-68:1}if(I.flying||!G.inView(I.x,I.y,200))continue;let ee=parseInt((I.ally?"#7ec850":I.col).slice(1),16),K=t.get(I,ee,I.gun),D=Math.min(1,Math.hypot(I.vx,I.vy)/120);de(K,I.x,I.y,I.angle,ee,{gun:I.gathering?I.jack?"jack":"tool":I.gun,moveAmt:D,gathering:I.gathering,jack:I.jack,bodyArmor:I.bodyArmor,facemask:I.facemask,vx:I.vx,vy:I.vy})}let $=n.player;if(!$.inCopter){let I=t.get($,8030800,"pistol"),ee=$.moving?1:0,K=n.slot===0&&n.jackhammer;de(I,$.x,$.y,$.angle,$.hurt>0?12876382:8030800,{gun:n.slot===0&&n.jackhammer?"jack":lb[n.slot]||"pistol",moveAmt:ee,gathering:$.swing>0&&n.slot===0,jack:K,bodyArmor:$.bodyArmor,facemask:$.facemask,vx:$.vx,vy:$.vy}),$.dead&&(I.visible=!1)}if(n.copter&&!n.copter.destroyed){let I=o.get(n.copter,6121548),ee=$.inCopter;I.position.set(n.copter.x,ee?80:0,n.copter.y),I.rotation.y=-(n.copter.angle||0),I.userData.rotor.rotation.y=(n.copter.rotor||0)*3,I.userData.tailRotor.rotation.z=(n.copter.rotor||0)*11,I.userData.pilot.visible=ee,I.userData.sh.position.y=ee?-78:1}for(let I of n.guards){if(I.dead||!G.inView(I.x,I.y,150))continue;let ee=t.get(I,12410412,"rifle",!0),K=Math.min(1,Math.hypot(I.vx||0,I.vy||0)/90+.2);de(ee,I.x,I.y,I.angle,12410412,{gun:"rifle",moveAmt:K,vx:I.vx,vy:I.vy})}for(let I of n.animals){if(I.dead||!G.inView(I.x,I.y,150))continue;let ee=i.get(I,I.type,I.r),K=0;I.type==="alligator"&&n.world.lakeAt(I.x,I.y)&&(K=I.r*.62),ee.userData.sinkY=(ee.userData.sinkY??0)+(K-(ee.userData.sinkY??0))*Math.min(1,U*5),ee.position.set(I.x,-ee.userData.sinkY,I.y);let D=Math.hypot(I.vx||0,I.vy||0),ue=D>2?Math.atan2(I.vy,I.vx):I.dir;ee.rotation.y=-ue,ee.userData.animate(n.t,Math.min(1,D/80))}for(let I of n.transports){let ee=I.owner===Ke?8308816:parseInt((n.teams.find(ue=>ue.owner===I.owner)||{col:"#888888"}).col.slice(1),16),K=a.get(I,ee),D=I.state==="fly"||I.state==="return"||I.riders.length>0;K.position.set(I.x,D?110:2,I.y),K.rotation.y=-I.angle,K.userData.rotor.rotation.y=I.rotor,K.userData.rotor2.rotation.y=-I.rotor,K.userData.sh.position.y=D?-106:1}for(let I of n.trains){let ee=l.get(I,()=>{let ue=new je,Ae=na("metal").clone();Ae.color.setScalar(.62);let ze=new ve(fe.box,Ae);ze.scale.set(54,30,26),ze.position.y=17,ue.add(ze),ue.add(r(2303788,18,14,27,-14,38,0)),ue.add(r(10470104,4,7,22,-4,39,0));let Me=new ve(fe.cyl,we(1843238));Me.scale.set(4.5,12,4.5),Me.position.set(16,38,0),ue.add(Me);let dt=r(2764339,12,10,24,30,8,0);dt.rotation.z=-.5,ue.add(dt);let C=us(16771491,44);C.position.set(30,20,0),ue.add(C);let b=[];for(let Z=0;Z<4;Z++){let ae=new je,ge=na("wood").clone();ge.color.setScalar(.78+Z%2*.14);let Te=new ve(fe.box,ge);Te.scale.set(46,26,24),Te.position.y=15,ae.add(Te);let Re=r(2893344,48,3.5,26,0,30,0);ae.add(Re),ae.add(r(2038292,8,12,25,0,14,0)),ue.add(ae),b.push(ae)}return ue.userData={cars:b,smokeT:0},ue}),K=Y(I,[0,-64,-116,-168,-220]),D=K[0];if(ee.position.set(D.x,0,D.y),ee.rotation.y=-D.a,ee.userData.cars.forEach((ue,Ae)=>{let ze=K[Ae+1],Me=ze.x-D.x,dt=ze.y-D.y,C=Math.cos(D.a),b=Math.sin(D.a);ue.position.set(Me*C+dt*b,0,-Me*b+dt*C),ue.rotation.y=-(ze.a-D.a)}),ee.userData.smokeT-=U,ee.userData.smokeT<=0){ee.userData.smokeT=.12;let ue=D.x+Math.cos(D.a)*16,Ae=D.y+Math.sin(D.a)*16;N(ue,Ae,40,1)}}for(let I of n.convoys){if(I.dead)continue;let ee=l.get(I,()=>{let K=new je,D=new ve(fe.box,we(5660746));D.scale.set(68,24,36),D.position.y=12,K.add(D);let ue=new je;ue.position.y=28;let Ae=new ve(fe.cyl,we(3752499));Ae.scale.set(12,9,12),ue.add(Ae);let ze=new ve(fe.box,we(1250830));ze.scale.set(32,5,5),ze.position.x=20,ue.add(ze),K.add(ue),K.userData={turret:ue};let Me=Os(90);return Me.position.y=1,K.add(Me),K});ee.position.set(I.x,0,I.y),ee.rotation.y=-I.ang,ee.userData.turret.rotation.y=-(I.taim-I.ang);for(let K of I.guards){if(K.dead)continue;let D=t.get(K,3829413,"rifle",!0);de(D,K.x,K.y,K.angle,3829413,{gun:"rifle",moveAmt:.6})}}if(n.patrol){let I=n.patrol,ee=l.get("patrol",()=>{let K=new je;K.add(r(4740158,76,20,20,0,0,0)),K.add(r(3818548,76,6,21,0,-12,0));let D=new ve(fe.sphere,we(4740158));D.scale.set(14,11,10),D.position.set(40,-1,0),K.add(D),K.add(r(1316892,14,8,14,26,8,0)),K.add(r(10470104,4,6,12,34,7,0)),K.add(r(1974822,10,6,6,36,-13,0)),K.add(r(1316892,14,2.6,2.6,46,-13,0));for(let Me of[-1,1]){K.add(r(3818548,16,4,26,2,2,Me*22));for(let dt of[16,26]){let C=new ve(fe.cyl,we(2830374));C.scale.set(4.5,16,4.5),C.rotation.z=Math.PI/2,C.position.set(4,-3,Me*dt),K.add(C)}}K.add(r(3357744,52,6,6,-58,4,0)),K.add(r(3818548,9,18,3,-82,12,0));let ue=r(1645589,1.6,20,3,-84,10,4);K.add(ue);let Ae=r(2895656,5,8,5,0,13,0);K.add(Ae);let ze=r(1645589,124,2.2,9,0,19,0);return K.add(ze),K.userData={rotor:ze,tailRotor:ue},K});ee.position.set(I.x,150,I.y),ee.rotation.y=-I.angle,ee.userData.rotor.rotation.y=I.rotor,ee.userData.tailRotor.rotation.z=I.rotor*4}if(n.plane){let I=l.get("plane",()=>{let ee=new je,K=new ve(fe.sphere,we(8291985));K.scale.set(28,8,8),ee.add(K);let D=new ve(fe.box,we(7041660));return D.scale.set(10,2,52),ee.add(D),ee});I.position.set(n.plane.x,320,n.plane.y),I.rotation.y=n.plane.vx<0?Math.PI:0}if(n.airdrop){let I=n.airdrop,ee=l.get("airdrop",()=>{let D=new je,ue=new ve(fe.box,we(6120530));ue.scale.set(30,24,30),ue.position.y=12,D.add(ue);let Ae=new ve(fe.box,we(16766827));Ae.scale.set(32,5,32),Ae.position.y=12,D.add(Ae);let ze=new ve(fe.cone,we(12079162,{transparent:!0,opacity:.9}));return ze.scale.set(34,26,34),ze.position.y=56,D.add(ze),D.userData={chute:ze},D}),K=I.fall<1?(1-I.fall)*320:0;ee.position.set(I.x+(I.fall<1?Math.sin(I.sway)*12:0),K,I.fall<1?I.gy:I.y),ee.userData.chute.visible=I.fall<1}if(n.lockedCrate){let I=n.lockedCrate,ee=l.get("crate",()=>{let D=new je,ue=new ve(fe.box,we(3948871));ue.scale.set(40,26,30),ue.position.y=13,D.add(ue);let Ae=us(16758858,22);return Ae.position.set(13,26,-8),D.add(Ae),D.userData={light:Ae},D});ee.position.set(I.x,0,I.y);let K=I.blink%.8<.4;ee.userData.light.visible=K,ee.userData.light.material.color.setHex(I.started?16758858:13777960)}for(let I of n.bullets){let ee=l.get(I,()=>{let ue=new je,Ae=new ve(fe.sphere,new Xt({color:16767392,transparent:!0,opacity:.95,blending:wn,depthWrite:!1}));Ae.scale.set(3.4,3,3),ue.add(Ae);let ze=new ve(fe.cone,new Xt({color:16756820,transparent:!0,opacity:.5,blending:wn,depthWrite:!1}));ze.scale.set(2.6,30,2.6),ze.rotation.z=Math.PI/2,ze.position.x=-15,ue.add(ze);let Me=new ve(fe.cone,new Xt({color:16749620,transparent:!0,opacity:.2,blending:wn,depthWrite:!1}));return Me.scale.set(4.5,44,4.5),Me.rotation.z=Math.PI/2,Me.position.x=-22,ue.add(Me),ue.userData={head:Ae,tail:ze,tail2:Me},ue});ee.position.set(I.x,18,I.y),ee.rotation.y=-Math.atan2(I.vy,I.vx);let K=I.col==="hmg"?16738864:I.ricochet?10150655:16767392,D=I.col==="hmg"?15219732:I.ricochet?6076648:16756820;ee.userData.head.material.color.setHex(K),ee.userData.tail.material.color.setHex(D),ee.userData.tail2.material.color.setHex(D)}for(let I of n.rockets){let ee=l.get(I,()=>{let K=new je,D=new ve(fe.cone,we(3751983));D.scale.set(5,18,5),D.rotation.z=-Math.PI/2,K.add(D);let ue=us(16751421,34);return ue.position.x=-12,K.add(ue),K});ee.position.set(I.x,18,I.y),ee.rotation.y=-Math.atan2(I.vy,I.vx)}for(let I of n.grenades)l.get(I,()=>{let K=new ve(fe.sphere,we(2898466));return K.scale.set(6,6,6),K}).position.set(I.x,8+Math.abs(Math.sin(I.bob*6))*8,I.y);for(let I of n.satchels){let ee=l.get(I,()=>{let K=new ve(fe.box,we(3814444));return K.scale.set(14,9,12),K.position.y=4,K});ee.position.set(I.x,4,I.y),ee.visible=Math.sin(n.t*18)>-.6}for(let I of n.loot){if(!G.inView(I.x,I.y,100))continue;let ee=l.get(I,()=>{let D=new ve(fe.box,we(14081248));return D.scale.set(9,9,9),D}),K={wood:12158022,stone:11186616,metal:15245902,scrap:14081248,ammo:16769162,rocket:16751194,sniper:12575743,satchel:13154442,gun:12896701};ee.material=we(K[I.kind]||14081248),ee.position.set(I.x,8+Math.sin(I.bob*3)*2.5,I.y),ee.rotation.y=I.bob}for(let I of n.fires){let ee=c.get(I,16747050,90);ee.position.set(I.x,16,I.y);let K=.8+Math.sin(n.t*11+I.x)*.25;ee.scale.set(90*K,110*K,1)}for(let I of n.wrecks)l.get(I,()=>{let K=new je,D=new ve(fe.box,we(2499614));D.scale.set(30,14,20),D.position.y=7,D.rotation.y=.5,K.add(D);let ue=us(16755260,60);return ue.position.y=14,K.add(ue),K}).position.set(I.x,0,I.y);for(let I of n.scorch){let ee=l.get(I,()=>{let K=new ve(new yi(1,12),new Xt({color:1314828,transparent:!0,opacity:.45,depthWrite:!1}));return K.rotation.x=-Math.PI/2,K.position.y=.8,K});ee.position.set(I.x,.8,I.y),ee.scale.set(I.r,I.r,1)}for(let I of n.flashes){let ee=c.get(I,16757322,I.r*2.4);ee.position.set(I.x,20,I.y);let K=I.life/I.max;ee.material.opacity=K,ee.scale.set(I.r*(2.6-K),I.r*(2.6-K),1)}if(n.muzzle){let I=c.get("muzzle",16766827,46);I.position.set(n.muzzle.x,18,n.muzzle.y),I.material.opacity=n.muzzle.t/.08}for(let I of n.events)I.type==="harvest"&&G.inView(I.x,I.y,300)?S(I):I.type==="splash"&&G.inView(I.x,I.y,300)&&De(I.x,I.y);R(U),He(U),B(U);let Q=0;for(let I of n.footprints){if(Q>=d)break;let ee=1-I.t/10;if(ee<.06||!G.inView(I.x,I.y,60))continue;let K=6.2*(.45+.55*ee);f.makeRotationY(-I.a),u.makeRotationX(-Math.PI/2),f.multiply(u),p.set(K,K*.55,1),f.scale(p),f.setPosition(I.x,.45+Q%9*.025,I.y),h.setMatrixAt(Q,f),Q++}h.count=Q,h.instanceMatrix.needsUpdate=!0;let ye=0;for(let I of n.particles){if(ye>=Qe)break;re[ye*3]=I.x,re[ye*3+1]=10+(1-I.life/I.max)*14,re[ye*3+2]=I.y;let ee=O(I.col),K=Math.max(0,I.life/I.max);F[ye*3]=ee.r*K,F[ye*3+1]=ee.g*K,F[ye*3+2]=ee.b*K,ye++}se.setDrawRange(0,ye),se.attributes.position.needsUpdate=!0,se.attributes.color.needsUpdate=!0,t.sweep(),i.sweep(),o.sweep(),a.sweep(),l.sweep(),c.sweep()}}}function _0(n,e){let i=new Yt,s=new Float32Array(700*3),r=[];for(let g=0;g<700;g++)r.push({x:Math.random(),z:Math.random(),y:Math.random(),sp:.4+Math.random()*.8});i.setAttribute("position",new en(s,3));let o=new xi({color:12374764,size:5,transparent:!0,opacity:0,depthWrite:!1}),a=new Hi(i,o);a.frustumCulled=!1,e.add(a);let l=[],c=()=>{if(l.length||!n.clouds)return;let g=new Ps(1,0);for(let y of n.clouds){let v=new Sn({color:16251644,emissive:9279908,flatShading:!0,transparent:!0,opacity:.5,depthWrite:!1}),w=new je;y.puffs.forEach((T,P)=>{let _=new ve(g,v),M=T.r*.45*(y.heavy?1:.85);_.scale.set(M,M*.45,M*.72),_.position.set(T.dx*.55,P*37%17-6,T.dy*.55),_.rotation.y=P*1.7,w.add(_)}),e.add(w);let E=new ve(new yi(y.r*1.05,14),new Xt({map:nf(),transparent:!0,opacity:.5*y.op,depthWrite:!1}));E.rotation.x=-Math.PI/2,E.scale.set(1.35,1,1),e.add(E),l.push({cl:y,g:w,sh:E,matC:v})}},d=[],h=new yi(1,16),f=()=>{if(!(d.length||!n.fogBanks))for(let g of n.fogBanks){let y=new je,v=[];g.puffs.forEach((w,E)=>{let T=new Xt({map:Xc(),color:13160664,transparent:!0,opacity:0,depthWrite:!1}),P=new ve(h,T);P.rotation.x=-Math.PI/2;let _=w.r*(.85+E%3*.18);P.scale.set(_,_*.8,1),P.position.set(w.dx*.6,2+E*4.5,w.dy*.6),P.renderOrder=3+E,y.add(P),v.push({s:P,r:_,phase:E*1.7+g.dens*5,spin:(E%2?1:-1)*(.015+E*.004)})}),e.add(y),d.push({f:g,group:y,puffs:v})}},u=new Yt,p=new Float32Array(120);u.setAttribute("position",new en(p,3));let x=new xi({color:14221190,size:9,transparent:!0,opacity:.9,blending:wn,depthWrite:!1,sizeAttenuation:!0}),m=new Hi(u,x);return m.frustumCulled=!1,e.add(m),{sync(g,y){c(),f();let v=n.weather,w=(y.cx+n.world.biomeRidge(y.cy))/xe.w,E=.085,T=Ai((w-(2/3-E))/(2*E)),P=Ai((w-(1/3-E))/(2*E))*(1-T),_=v.rain*(P+T);if(o.opacity=Math.min(.75,_*.8),o.color.setHex(T>P?16054524:12374764),o.size=T>P?7:4.5,_>.02){let L=T>P?.12:.55;for(let W=0;W<700;W++){let X=r[W],N=(X.y+n.t*X.sp*L)%1;s[W*3]=y.cx+(X.x-.5)*2*1700+n.wind*60*N,s[W*3+1]=700*(1-N),s[W*3+2]=y.cy+(X.z-.5)*2*1700}i.attributes.position.needsUpdate=!0}let M=y.lightLevel();for(let{cl:R,g:L,sh:W,matC:X}of l){L.position.set(R.x,560,R.y),W.position.set(R.x+64,2.5,R.y+86);let N=R.x-y.cx,B=R.y-y.cy,Y=Math.sqrt(N*N+B*B),ce=(Y<700?.22:Y<1400?.22+(Y-700)/700*.28:.5)*R.op;X.opacity+=(ce-X.opacity)*Math.min(1,g*4),X.color.setScalar(.82+M*.18),W.material.opacity=(.32+.26*M)*R.op}for(let{f:R,group:L,puffs:W}of d){let X=n.world.biomeAt(R.x,R.y)==="winter";L.position.set(R.x,0,R.y);let N=X?0:Math.min(.16,v.fog*R.dens*.15);for(let B of W){B.s.material.opacity=N,B.s.rotation.z=B.phase+n.t*B.spin;let Y=1+Math.sin(n.t*.27+B.phase)*.07;B.s.scale.set(B.r*Y,B.r*.8*Y,1)}}let S=0;if(n.fireflies){let R=1-y.lightLevel();x.opacity=.35+.5*R+.3*Math.min(1,v.fog);for(let L of n.fireflies){if(S>=40)break;n.world.biomeAt(L.x,L.y)==="jungle"&&(p[S*3]=L.x,p[S*3+1]=16+Math.sin(L.ph)*8,p[S*3+2]=L.y,S++)}u.attributes.position.needsUpdate=!0}u.setDrawRange(0,S)}}}function v0(n,e,t){let i=document.createElement("canvas");i.id="overlay",i.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:5",document.body.appendChild(i);let s=i.getContext("2d");function r(){i.width=e.VW,i.height=e.VH}r(),addEventListener("resize",r);let o=(d,h,f=0)=>t.worldToScreen(d,h,f);function a(d,h,f,u,p){s.strokeStyle=u,s.lineWidth=2,p&&s.setLineDash(p),s.beginPath();for(let x=0;x<=36;x++){let m=x/36*Math.PI*2,g=o(d+Math.cos(m)*f,h+Math.sin(m)*f);x?s.lineTo(g.x,g.y):s.moveTo(g.x,g.y)}s.stroke(),s.setLineDash([])}return{draw(){let d=e.VW,h=e.VH;s.clearRect(0,0,d,h);let f=n.t;s.font="bold 13px Trebuchet MS",s.textAlign="center";for(let u of e.godView?[]:n.floats){let p=o(u.ox,u.y,40);if(p.behind)continue;let x=Math.max(0,u.life/u.max);s.globalAlpha=x,s.fillStyle="#000",s.fillText(u.text,p.x+1,p.y-u.lift+1),s.fillStyle=u.col,s.fillText(u.text,p.x,p.y-u.lift)}if(s.globalAlpha=1,n.buildMode&&!e.godView){let m=function(){for(let g in x.cost)if((n.inv[g]||0)<x.cost[g])return!1;return!0},u=Yr(n,n.cmd.mx,n.cmd.my),p=oh(n,Ke,n.buildPiece,u)&&m();s.fillStyle=p?"rgba(180,220,120,.4)":"rgba(210,80,60,.45)",s.strokeStyle=p?"#c4d66a":"#d2553c",s.lineWidth=2;let x=Qt[n.buildPiece];if(x.cat==="cell"){let g=u.gx*64,y=u.gy*64;s.beginPath(),[[0,0],[64,0],[64,64],[0,64]].forEach(([v,w],E)=>{let T=o(g+v,y+w);E?s.lineTo(T.x,T.y):s.moveTo(T.x,T.y)}),s.closePath(),s.fill(),s.stroke()}else{let g=Ft(u.key,{type:n.buildPiece,rot:n.buildRot&1}),y=o(g[0],g[1]),v=o(g[2],g[3]);s.lineWidth=8,s.globalAlpha=.75,s.beginPath(),s.moveTo(y.x,y.y),s.lineTo(v.x,v.y),s.stroke(),s.globalAlpha=1}}if(!e.godView&&!n.player.inCopter){for(let[u,p]of n.deploys){if(p.type!=="cupboard"||p.owner!==Ke)continue;let[x,m]=u.split(",").map(Number);a(x*64+32,m*64+32,Ht,"rgba(126,200,80,0.3)",[10,8])}if(!n.shopOpen&&!n.storeOpen){let u=Math.floor(n.cmd.mx/64),p=Math.floor(n.cmd.my/64),x=n.deploys.get(u+","+p);x&&x.type==="turret"&&a(u*64+32,p*64+32,la[x.tier||1].range,"rgba(240,156,72,0.3)",[6,7]);let m=l(u,p);if(m){let g=o(m.x,m.y,50),y=Math.max(0,m.hp/m.max);s.fillStyle="rgba(0,0,0,.7)",s.fillRect(g.x-18,g.y-8,36,5),s.fillStyle=y>.5?"#7bbf4f":y>.25?"#d8b24a":"#c0432f",s.fillRect(g.x-18,g.y-8,36*y,5)}}}if(e.debugPaths){s.font="bold 10px Trebuchet MS";for(let u of n.units){if(u.dead||u.eliminated||u.flying||!t.inView(u.x,u.y,600))continue;let p=u.ally?"#7ec850":u.col;if(u.path&&u.pathI<u.path.length){s.strokeStyle=p,s.lineWidth=1.5,s.globalAlpha=.8,s.beginPath();let m=o(u.x,u.y);s.moveTo(m.x,m.y);for(let g=u.pathI;g<u.path.length;g++)m=o(u.path[g].x,u.path[g].y),s.lineTo(m.x,m.y);s.stroke(),s.globalAlpha=1}let x=o(u.x,u.y,56);s.fillStyle="#000",s.fillText(u.act||u.state,x.x+1,x.y+1),s.fillStyle=p,s.fillText(u.act||u.state,x.x,x.y)}}if(c(n.airdrop&&{x:n.airdrop.x,y:n.airdrop.fall<1?n.airdrop.gy:n.airdrop.y},"AIRDROP","#ffd76b","\u2708"),n.quarry){let u=n.teams.find(p=>p.owner===n.quarry.owner);c(n.quarry,"QUARRY",n.quarry.owner===Ke?"#7ec850":u?u.col:"#b9b39d","Q")}if(n.lockedCrate){let u=n.lockedCrate;c(u,u.started?"CRATE "+Math.ceil(u.t)+"s":"LOCKED CRATE","#ffb84a","C")}if(e.godView){s.font="bold 9px Trebuchet MS";for(let p of n.teams)for(let x of p.bases){if(x.dead)continue;let m=o(x.hx,x.hy);s.fillStyle=p.col,s.fillRect(m.x-6,m.y-6,12,12),s.fillStyle="#fff",s.fillText(String(p.id+1),m.x,m.y+3.5)}for(let p of n.units){if(p.dead||p.eliminated)continue;let x=o(p.x,p.y);s.fillStyle=p.ally?"#7ec850":p.col,s.beginPath(),s.arc(x.x,x.y,p.primary?3.4:2.4,0,7),s.fill()}for(let p of n.raids){let x=o(p.x,p.y);s.fillStyle=`rgba(255,82,56,${.35+.4*(p.t/60)})`,s.beginPath(),s.arc(x.x,x.y,7+3*Math.sin(f*6),0,7),s.fill()}if(n.deathMark){let p=o(n.deathMark.x,n.deathMark.y);s.fillStyle="#000",s.beginPath(),s.arc(p.x,p.y,8,0,7),s.fill(),s.fillStyle="#fff",s.beginPath(),s.arc(p.x,p.y-1,5,0,7),s.fill()}let u=o(n.player.x,n.player.y);s.strokeStyle="#7ec850",s.lineWidth=2.5,s.beginPath(),s.arc(u.x,u.y,11+3*Math.sin(f*6),0,7),s.stroke(),s.font="bold 11px Trebuchet MS",s.fillStyle="#7ec850",s.fillText("YOU",u.x,u.y-18),s.fillStyle="#d8d0ba",s.font="bold 14px Trebuchet MS",s.fillText("Click anywhere on the map to travel there",d/2,h-66)}else{let u=e.mouseSX,p=e.mouseSY;if(u!==void 0){s.strokeStyle="rgba(225,235,195,.9)",s.lineWidth=3,s.lineCap="round";for(let[x,m]of[[1,0],[-1,0],[0,1],[0,-1]])s.beginPath(),s.moveTo(u+x*6,p+m*6),s.lineTo(u+x*15,p+m*15),s.stroke()}}if(n.raidAlarm){let u=Math.min(1,n.raidAlarm.t/1.5);s.fillStyle=`rgba(180,30,20,${.14*u})`,s.fillRect(0,0,d,h),s.textAlign="center",s.font="bold 22px Trebuchet MS",s.fillStyle="rgba(0,0,0,.7)",s.fillText("BASE UNDER ATTACK",d/2+2,54),s.fillStyle=`rgba(255,${80+110*(.5+.5*Math.sin(f*8))},55,${u})`,s.fillText("BASE UNDER ATTACK",d/2,52)}n.player.hurt>0&&(s.fillStyle=`rgba(150,28,18,${n.player.hurt*.4})`,s.fillRect(0,0,d,h)),n.player.dead&&(s.fillStyle="rgba(10,6,4,.55)",s.fillRect(0,0,d,h),s.textAlign="center",s.fillStyle="#e6d9b8",s.font="bold 44px Trebuchet MS",s.fillText("YOU DIED",d/2,h/2-4),s.fillStyle="#b9a06f",s.font="15px Trebuchet MS",s.fillText("respawning\u2026",d/2,h/2+24)),s.textAlign="left",s.font="bold 14px Trebuchet MS",n.elims.forEach((u,p)=>{let x=Math.min(1,u.t/3);s.globalAlpha=x,s.fillStyle="rgba(0,0,0,.5)",s.fillRect(d/2-130,92+p*24,264,20),s.fillStyle="#e2664a",s.fillText(u.text,d/2-122,106+p*24)}),s.globalAlpha=1,s.textAlign="center"}};function l(d,h){let f=n.deploys.get(d+","+h);if(f)return{x:d*64+32,y:h*64+32,hp:f.hp,max:f.max};let u=n.structures.get(d+","+h);if(u)return{x:d*64+32,y:h*64+32,hp:u.hp,max:u.max};for(let p of["V,"+d+","+h,"V,"+(d+1)+","+h,"H,"+d+","+h,"H,"+d+","+(h+1)]){let x=n.walls.get(p);if(!x)continue;let m=Ft(p,x),g=(m[0]+m[2])/2,y=(m[1]+m[3])/2;if(Math.hypot(n.cmd.mx-g,n.cmd.my-y)<16)return{x:g,y,hp:x.hp,max:x.max}}return null}function c(d,h,f,u){if(!d)return;let p=o(d.x,d.y),x=e.VW,m=e.VH;if(s.textAlign="center",!p.behind&&p.x>0&&p.x<x&&p.y>0&&p.y<m){if(e.godView)return;s.font="bold 11px Trebuchet MS",s.fillStyle="rgba(0,0,0,.7)",s.fillText(h,p.x+1,p.y-49),s.fillStyle=f,s.fillText(h,p.x,p.y-50)}else{let g=Math.max(54,Math.min(x-54,p.x)),y=Math.max(54,Math.min(m-54,p.behind?m-54:p.y));s.fillStyle=f,s.globalAlpha=.92,s.beginPath(),s.arc(g,y,14,0,7),s.fill(),s.globalAlpha=1,s.fillStyle="#1c1812",s.font="bold 13px Trebuchet MS",s.fillText(u,g,y+4.5)}}}function b0(n,e,t,i){let s={},r=e.canvas,o=(c,d)=>{let h=t.screenToWorld(c,d);n.cmd.mx=h.x,n.cmd.my=h.y,e.mouseSX=c,e.mouseSY=d};addEventListener("keydown",c=>{let d=c.key.toLowerCase();if(n.storeOpen){(d==="escape"||d==="e")&&(n.storeOpen=null,i.closeModals()),c.preventDefault();return}if(n.shopOpen){(d==="escape"||d==="e")&&(n.shopOpen=!1,i.closeModals()),c.preventDefault();return}s[d]=!0,a(),d==="e"&&bu(n),d==="g"&&!n.player.inCopter&&Ru(n),d==="q"&&(n.buildMode?M0(n,1):n.player.inCopter||Au(n)),d==="t"&&!n.buildMode&&!n.player.inCopter&&gh(n,n.cmd.mx,n.cmd.my),/^Digit[1-9]$|^Numpad[1-9]$/.test(c.code)&&!n.player.inCopter&&qr(n,+c.code.slice(-1)-1),d==="b"&&!n.player.inCopter&&qr(n,n.buildMode?0:5),d==="r"&&(n.buildMode?n.buildRot=(n.buildRot+1)%4:yh(n)),d==="u"&&Eu(n),["w","a","s","d"," "].includes(d)&&c.preventDefault()}),addEventListener("keyup",c=>{s[c.key.toLowerCase()]=!1,a()}),addEventListener("blur",()=>{for(let c in s)s[c]=!1;a(),n.cmd.fireHeld=!1});function a(){let c=(s.d?1:0)-(s.a?1:0),d=(s.s?1:0)-(s.w?1:0),h=t.orbit||0,f=c*Math.cos(h)+d*Math.sin(h),u=-c*Math.sin(h)+d*Math.cos(h);n.cmd.right=f>.38,n.cmd.left=f<-.38,n.cmd.down=u>.38,n.cmd.up=u<-.38,n.cmd.run=!!s.shift}addEventListener("wheel",c=>{if(n.buildMode&&!n.shopOpen&&!n.storeOpen){M0(n,c.deltaY>0?1:-1),c.preventDefault();return}!e.godView&&!n.shopOpen&&!n.storeOpen&&t.zoomFactor!==void 0&&(t.zoomFactor=st(t.zoomFactor*(1+c.deltaY*.0011),.55,1.9),c.preventDefault())},{passive:!1});let l=null;r.addEventListener("mousedown",c=>{c.button===1&&!e.godView&&(l={x:c.clientX,start:t.orbit||0},c.preventDefault())}),addEventListener("mousemove",c=>{l&&t.orbit!==void 0&&(t.orbit=l.start+(c.clientX-l.x)*.006,a())}),addEventListener("mouseup",c=>{c.button===1&&(l=null)}),r.addEventListener("auxclick",c=>{c.button===1&&c.preventDefault()}),r.addEventListener("mousemove",c=>{let d=r.getBoundingClientRect();o(c.clientX-d.left,c.clientY-d.top)}),r.addEventListener("mousedown",c=>{let d=r.getBoundingClientRect();if(o(c.clientX-d.left,c.clientY-d.top),c.button===0){if(e.godView){cb(n,e);return}if(n.cmd.fireHeld=!0,n.buildMode)wu(n);else if(!n.shopOpen&&!n.storeOpen){let h=n.slot;ba(n)}}else c.button===2&&n.buildMode&&Tu(n)}),addEventListener("mouseup",()=>{n.cmd.fireHeld=!1}),r.addEventListener("contextmenu",c=>c.preventDefault()),setInterval(()=>{e.mouseSX!==void 0&&o(e.mouseSX,e.mouseSY)},50)}function M0(n,e){let t=gs.indexOf(n.buildPiece);n.buildPiece=gs[(t+e+gs.length)%gs.length]}function cb(n,e){let t=n.cmd.mx,i=n.cmd.my;t=st(t,jt,13824-jt),i=st(i,jt,9216-jt);for(let s=0;s<24&&Et(n,t,i,jt);s++)t+=(Math.random()*2-1)*40,i+=(Math.random()*2-1)*40;n.player.x=t,n.player.y=i,n.player.inCopter=!1,e.godView=!1,document.getElementById("mapbtn").classList.remove("on"),document.getElementById("mapbtn").textContent="Map View",n.tip={text:"arrived",t:1.2}}var hb={tool:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20l7-7"/><path d="M14 4l6 6-5 5-6-6z" fill="currentColor"/></svg>',pistol:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 8h16v4h-6l-1 5h-4l1-5H6a3 3 0 0 1-3-3z"/></svg>',rifle:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1 11h18l4-2v3l-4 1h-5l-1 5h-3l1-5H1z"/></svg>',minigun:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="7" width="14" height="3"/><rect x="2" y="11" width="14" height="3"/><rect x="2" y="15" width="14" height="3"/><rect x="15" y="6" width="6" height="13" rx="2"/></svg>',rocket:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 10h13l5 2-5 2H2z"/><path d="M20 8l3 4-3 4z"/></svg>',build:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21l4-12 6 6-10 6z" fill="currentColor"/><path d="M13 5l6 6"/></svg>',sniper:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="1" y="10" width="20" height="3"/><rect x="6" y="6" width="6" height="3" rx="1"/><path d="M21 9l2 2-2 2z"/></svg>',shotgun:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1 10h17v5H8l-2 4H3l2-4H1z"/></svg>',hmg:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="1" y="9" width="19" height="5"/><rect x="6" y="14" width="6" height="6"/><path d="M20 9l3 2.5-3 2.5z"/></svg>'},db=[["Tool","tool"],["Pistol","pistol"],["Rifle","rifle"],["Minigun","minigun"],["Rocket","rocket"],["Build","build"],["Sniper","sniper"],["Shotgun","shotgun"],["HMG","hmg"]],fb={1:"pistol",2:"rifle",3:"minigun",4:"rocket",6:"sniper",7:"shotgun",8:"hmg"},ub={floor:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="16" height="16" rx="2"/></svg>',wall:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="10" y="3" width="4" height="18" rx="1"/></svg>',door:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="9" y="3" width="6" height="18" rx="1"/><circle cx="13" cy="12" r="1.4" fill="#15130e"/></svg>',turret:'<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="13" r="6"/><rect x="12" y="11" width="10" height="4" rx="1"/></svg>',cupboard:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="3" width="14" height="18" rx="2"/><rect x="11.4" y="5" width="1.2" height="14" fill="#15130e"/></svg>'};function w0(n,e){let t=p=>document.getElementById(p),i=t("hotbar");db.forEach(([p,x],m)=>{let g=document.createElement("div");g.className="slot",g.innerHTML=`<span class="key">${m+1}</span>${hb[x]}<span class="nm">${p}</span>`,g.addEventListener("mousedown",y=>{y.stopPropagation(),qr(n,m)}),i.appendChild(g)});let s=t("bpieces");for(let p of gs){let x=document.createElement("div");x.className="bpiece",x.dataset.piece=p;let m=Object.entries(Qt[p].cost).map(([g,y])=>y+" "+g).join(" + ");x.innerHTML=`${ub[p]}${Qt[p].name}<br><span style="opacity:.7">${m}</span>`,x.addEventListener("mousedown",g=>{g.stopPropagation(),n.buildPiece=p}),s.appendChild(x)}let r=(p,x)=>t(p).addEventListener("mousedown",m=>{m.stopPropagation(),x(t(p))});r("mapbtn",p=>{e.godView=!e.godView,p.classList.toggle("on",e.godView),p.textContent=e.godView?"Exit Map":"Map View"}),r("ghostbtn",p=>{n.ghost=!n.ghost,p.classList.toggle("on",n.ghost),p.textContent=n.ghost?"Ghost: ON":"Ghost"}),r("rocketbtn",p=>{n.rapidRockets=!n.rapidRockets,p.classList.toggle("on",n.rapidRockets),p.textContent=n.rapidRockets?"Rockets: ON":"Rapid Rockets"}),r("refillbtn",()=>window.__refillAll()),r("boosthardbtn",()=>window.__boostHard()),r("debugbtn",p=>{e.debugPaths=!e.debugPaths,p.classList.toggle("on",e.debugPaths),p.textContent=e.debugPaths?"Debug: ON":"Debug paths"}),t("ghostbtn").classList.add("on"),t("ghostbtn").textContent="Ghost: ON",t("helpToggle").addEventListener("click",()=>{let p=t("help");p.classList.toggle("min"),t("helpToggle").textContent=p.classList.contains("min")?"show":"hide"}),document.querySelectorAll(".spdbtn").forEach(p=>{p.addEventListener("mousedown",x=>{x.stopPropagation(),e.speed=+p.dataset.spd,document.querySelectorAll(".spdbtn").forEach(m=>m.classList.toggle("on",m===p))})});let o=0,a=null,l=!1;function c(){let p=t("shop"),x='<h3>Trade Shop</h3><div style="margin-bottom:8px">Scrap: <b id="shop-scrap">0</b></div><div class="cols"><div class="col"><h5>SELL \u2192 SCRAP</h5>';Vt.trades.forEach(([m,g,y],v)=>{x+=`<div class="trow"><span>${g} ${m} \u2192 ${y} scrap</span><button data-trade="${v}">Sell</button></div>`}),x+='</div><div class="col"><h5>BUY WEAPONS + GEAR</h5>';for(let m in Vt.buys)x+=`<div class="trow"><span id="shopown-${m}">${ln[m].name} <small>+${Vt.buys[m].ammo} ammo</small></span><button data-buy="${m}">${Vt.buys[m].cost} scrap</button></div>`;x+=`<div class="trow"><span>Jackhammer <small>3\xD7 gather</small></span><button data-misc="jackhammer">${Vt.jackhammer} scrap</button></div>`,x+=`<div class="trow"><span>Rifle laser sight</span><button data-misc="laser">${Vt.laser} scrap</button></div>`,x+=`<div class="trow"><span>Wood fence (G)</span><button data-misc="fence">${Vt.fenceWood} wood</button></div>`,x+=`<div class="trow"><span>Grenade (Q)</span><button data-misc="grenade">${Vt.grenade} scrap</button></div>`,x+=`<div class="trow"><span>Supply signal (T)</span><button data-misc="signal">${Vt.signal} scrap</button></div>`,x+=`<div class="trow"><span>+10 HQM</span><button data-misc="hqm">${Vt.hqm.cost} scrap</button></div>`,x+='<div class="trow"><span id="fm-lbl">Facemask</span><button data-misc="facemask">buy</button></div>',x+='<div class="trow"><span id="ba-lbl">Body armor</span><button data-misc="bodyArmor">buy</button></div>',x+=`<div class="trow"><span>Hire worker</span><button data-misc="worker">${Vt.worker} scrap</button></div>`,x+='</div></div><button class="close">Close (E / Esc)</button>',p.innerHTML=x,p.querySelectorAll("button").forEach(m=>{m.addEventListener("mousedown",g=>g.stopPropagation()),m.addEventListener("click",()=>{m.dataset.trade!==void 0?Cu(n,+m.dataset.trade):m.dataset.buy?Su(n,m.dataset.buy):m.dataset.misc?Iu(n,m.dataset.misc):(n.shopOpen=!1,p.classList.add("hidden")),d()})}),d()}function d(){let p=t("shop-scrap");p&&(p.textContent=n.inv.scrap|0);let x=t("fm-lbl");if(x){let g=n.player.facemask+1;x.textContent=g<=3?`Facemask L${g} (${xs.cost[g]} scrap)`:"Facemask MAX"}let m=t("ba-lbl");if(m){let g=n.player.bodyArmor+1;m.textContent=g<=3?`Body armor L${g} (${xs.cost[g]} scrap)`:"Body armor MAX"}for(let g in Vt.buys){let y=t("shopown-"+g);y&&(y.style.color=n.owned[g]?"var(--accent2)":"var(--ink)")}}function h(p){let x=t("store"),m=n.deploys.get(p);if(!m)return;let g=`<h3>${m.type==="cupboard"?"Tool Cupboard":"Storage"}</h3>`;for(let y of["wood","stone","metal","scrap"])g+=`<div class="strow"><span class="ic ${y}"></span>
        <button data-mv="${y},-9999">\u25C0 all</button><button data-mv="${y},-0.1">\u25C0 10%</button>
        <span class="cnt"><b id="st-${y}">0</b> store \xB7 bag <b id="inv-${y}">0</b></span>
        <button data-mv="${y},0.1">10% \u25B6</button><button data-mv="${y},9999">all \u25B6</button>
        <span></span></div>`;g+='<button class="close">Close (E / Esc)</button>',x.innerHTML=g,x.querySelectorAll("button").forEach(y=>{y.addEventListener("mousedown",v=>v.stopPropagation()),y.addEventListener("click",()=>{if(y.dataset.mv){let[v,w]=y.dataset.mv.split(",");Pu(n,v,+w),f()}else n.storeOpen=null,x.classList.add("hidden")})}),f()}function f(){let p=n.deploys.get(n.storeOpen);if(!(!p||!p.store))for(let x of["wood","stone","metal","scrap"]){let m=t("st-"+x),g=t("inv-"+x);m&&(m.textContent=p.store[x]|0),g&&(g.textContent=n.inv[x]|0)}}return{closeModals(){t("store").classList.add("hidden"),t("shop").classList.add("hidden")},update(){t("r-wood").textContent=n.inv.wood|0,t("r-stone").textContent=n.inv.stone|0,t("r-metal").textContent=n.inv.metal|0,t("r-scrap").textContent=n.inv.scrap|0;let p=Math.floor(n.t/60),x=Math.floor(n.t%60);t("playtime").textContent=p+":"+String(x).padStart(2,"0");let m=n.player,g=Math.max(0,m.health/m.maxhp),y=t("hpfill");y.style.width=g*100+"%",y.style.background=g>.5?"linear-gradient(180deg,#9ccb5a,#6fae3e)":g>.25?"linear-gradient(180deg,#e0c14e,#c9962f)":"linear-gradient(180deg,#d76a4a,#b23b2a)",t("hptxt").textContent=Math.ceil(Math.max(0,m.health));let v=i.children;for(let T=0;T<v.length;T++){v[T].classList.toggle("sel",n.slot===T);let P=fb[T];v[T].classList.toggle("dim",!!P&&!n.owned[P])}if(t("buildmenu").classList.toggle("hidden",!n.buildMode),n.buildMode)for(let T of s.children){T.classList.toggle("sel",T.dataset.piece===n.buildPiece);let P=!0;for(let _ in Qt[T.dataset.piece].cost)(n.inv[_]||0)<Qt[T.dataset.piece].cost[_]&&(P=!1);T.classList.toggle("cant",!P)}let w=Xr(n);if(t("ammo").classList.toggle("hidden",!w),w){let T=n.weapons[w];t("ammo-mag").innerHTML=`${T.ammo} <small>/ ${T.reserve}</small>`;let P=w==="minigun"&&T.spin>0&&T.spin<ln.minigun.windup;t("ammo-rl").textContent=T.reloading>0?"RELOADING":P?"SPINNING\u2026":T.ammo===0?"PRESS R":""}let E=t("tip");n.tip?(E.textContent=n.tip.text,E.classList.add("show")):E.classList.remove("show"),n.shopOpen!==l?(l=n.shopOpen,t("shop").classList.toggle("hidden",!n.shopOpen),n.shopOpen&&c()):n.shopOpen&&n.tick%30===0&&d(),n.storeOpen!==a?(a=n.storeOpen,t("store").classList.toggle("hidden",!n.storeOpen),n.storeOpen&&h(n.storeOpen)):n.storeOpen&&n.tick%30===0&&f(),n.t-o>.4&&(o=n.t,u())}};function u(){let p=[];p.push({id:Ke,name:"You",col:"#c4d66a",alive:!n.player.dead,you:!0,kills:n.playerKills,scrap:n.inv.scrap|0,res:n.inv.wood+n.inv.stone+n.inv.metal|0,tier:""});for(let y of n.teams){let v=0,w=0,E=0,T=!1;for(let _ of n.units)_.owner===y.owner&&(v+=_.kills,w+=_.scrap,E+=_.inv.wood+_.inv.stone+_.inv.metal,_.eliminated||(T=!0));let P=y.bases.find(_=>!_.dead);if(P){let _=n.deploys.get(P.tcKey);_&&_.store&&(E+=_.store.wood+_.store.stone+_.store.metal,w+=_.store.scrap)}p.push({id:y.id,name:"Base "+(y.id+1),col:y.col,alive:T&&!y.eliminated,kills:v,scrap:w|0,res:E|0,tier:y.hard?"HARD":y.weak?"EASY":""})}let x=null,m=0;for(let y of p)!y.you&&y.alive&&y.kills>m&&(m=y.kills,x=y.id);p.sort((y,v)=>v.scrap-y.scrap||v.kills-y.kills||v.res-y.res);let g=y=>y>=1e4?(y/1e3|0)+"k":y>=1e3?(y/1e3).toFixed(1)+"k":y;t("lb-rows").innerHTML=p.map(y=>`
      <div class="lbr ${y.alive?"":"dead"} ${y.id===x?"lb-bounty":""}">
        <span class="dot" style="background:${y.col}"></span>
        <span class="nm">${y.id===x?"\u2605 ":""}${y.name}</span>
        ${y.tier?`<span class="pill ${y.tier.toLowerCase()}">${y.tier}</span>`:""}
        <span>${y.kills}</span><span style="color:var(--ink-dim)">${g(y.scrap)}</span><span style="color:var(--ink-dim)">${g(y.res)}</span>
      </div>`).join("")}}var T0=Math.random()*1e9>>>0,Ot=nh(T0);Ot.ghost=!0;function pb(){let e={canvas:document.getElementById("game"),VW:innerWidth,VH:innerHeight,speed:1,godView:!1,debugPaths:!1},t=o0(Ot,e),i=l0(Ot,t.scene),s=f0(Ot,t.scene),r=y0(Ot,t.scene),o=_0(Ot,t.scene),a=v0(Ot,e,t),l=w0(Ot,e);b0(Ot,e,t,l),addEventListener("resize",()=>{e.VW=innerWidth,e.VH=innerHeight,t.resize()});let c=document.getElementById("seedval");c&&(c.textContent=String(T0)),window.__refillAll=()=>{for(let u in Ot.owned)Ot.owned[u]=!0;for(let u in Ot.weapons){let p=Ot.weapons[u];p.reserve=Math.max(p.reserve,u==="rocket"?80:u==="sniper"?60:u==="shotgun"?80:600),p.ammo=ln[u].magSize,p.reloading=0}for(let u of["wood","stone","metal"])Ot.inv[u]=Math.max(Ot.inv[u],1e4);Ot.inv.scrap=Math.max(Ot.inv.scrap,500),Ot.inv.fence=Math.max(Ot.inv.fence,10),Ot.tip={text:"Refilled ammo + resources",t:1.4}},window.__boostHard=()=>{let u=0;for(let p of Ot.units)!p.hard||p.dead||p.eliminated||(u++,p.hp=p.max,p.rockets=Math.max(p.rockets,12),p.satchels=Math.max(p.satchels,6),p.grenades=Math.max(p.grenades,4),p.hqm=Math.max(p.hqm,80),p.gun=p.shotgun?"shotgun":"rifle",p.facemask=Math.max(p.facemask,2),p.bodyArmor=Math.max(p.bodyArmor,3),p.jack=!0);for(let p of Ot.teams){if(!p.hard||p.eliminated)continue;let x=p.bases.find(m=>!m.dead);if(x){let m=Ot.deploys.get(x.tcKey);m&&m.store&&(m.store.wood=Math.max(m.store.wood,3e3),m.store.stone=Math.max(m.store.stone,1500),m.store.metal=Math.max(m.store.metal,1500),m.store.scrap=Math.max(m.store.scrap,600))}}Ot.tip={text:"Boosted "+u+" hard units",t:1.4}};let d=performance.now(),h=0;function f(u){requestAnimationFrame(f);let p=Math.min(.1,(u-d)/1e3);d=u,h+=p*e.speed;let x=0,m=Math.max(4,e.speed*4);for(;h>=Dr&&x<m;)rp(Ot),h-=Dr,x++;x>=m&&(h=0),t.update(p),i.sync(p,Ot,t),s.sync(p),r.sync(p,t),o.sync(p,t),t.render(),a.draw(),l.update(),Ot.events.length=0}requestAnimationFrame(f)}try{pb()}catch(n){console.error("SCRAPLAND boot failed: WebGL unavailable \u2014",n&&n.message);let e=document.createElement("div");e.style.cssText="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;color:#ddd5c2;font:16px Trebuchet MS;background:#14120e;z-index:99",e.textContent="SCRAPLAND needs WebGL \u2014 please enable hardware acceleration and reload.",document.body&&document.body.appendChild(e)}})();
