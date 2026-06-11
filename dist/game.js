(()=>{var ue={w:13824,h:9216},jt=16,ra=64,Ye="p1",Pr=1/60,ln={pistol:{name:"Pistol",magSize:12,reserve:96,dmg:14,rof:.22,spread:.03,speed:1150,auto:!1,reloadT:1,kick:6,range:1.6},rifle:{name:"Rifle",magSize:30,reserve:180,dmg:11,rof:.09,spread:.05,speed:1500,auto:!0,reloadT:1.6,kick:4,range:2.4},minigun:{name:"Minigun",magSize:200,reserve:200,dmg:6,rof:.045,spread:.09,speed:1300,auto:!0,reloadT:4.5,kick:2,range:1.8,windup:2.6},rocket:{name:"Rocket",magSize:1,reserve:50,dmg:55,rof:.9,spread:.012,speed:560,auto:!1,reloadT:1.9,kick:16,range:2.8,rocket:!0,splash:96,splashDmg:150,structDmg:55},sniper:{name:"Sniper",magSize:1,reserve:30,dmg:60,rof:1,spread:.004,speed:1180,auto:!1,reloadT:1.8,kick:14,range:3.4,locked:!0},shotgun:{name:"Shotgun",magSize:6,reserve:48,dmg:9,rof:.3,spread:.17,speed:1050,auto:!0,reloadT:1.5,kick:9,range:1.1,pellets:7},hmg:{name:"HMG",magSize:100,reserve:300,dmg:15,rof:.05,spread:.11,speed:1500,auto:!0,reloadT:3,kick:9,range:2.4,locked:!0,tracer:"hmg"}};var zs={splash:120,splashDmg:120,structDmg:22,fuse:2},Qt={floor:{name:"Floor",cost:{wood:5},cat:"cell",hp:100,found:!0,up:!0},trifloor:{name:"Tri-Floor",cost:{wood:4},cat:"cell",hp:90,found:!0,up:!0,tri:!0,hidden:!0},wall:{name:"Wall",cost:{wood:10},cat:"edge",hp:100,up:!0},triangle:{name:"Triangle",cost:{wood:8},cat:"diag",hp:100,up:!0,hidden:!0},door:{name:"Door",cost:{wood:10,metal:5},cat:"edge",hp:50,up:!0,mMul:2,door:!0},box:{name:"Box",cost:{wood:15},cat:"cell",hp:90,box:!0,store:!0,hidden:!0},turret:{name:"Turret",cost:{wood:40,metal:30},cat:"cell",hp:150,solid:!0,turret:!0},cupboard:{name:"Cupboard",cost:{wood:60,metal:25},cat:"cell",hp:300,solid:!0,tc:!0,store:!0}},gs=["floor","wall","door","turret","cupboard"];var $c=10,uf={wood:{to:"stone",cost:{stone:15}},stone:{to:"metal",cost:{metal:20}},metal:{to:"armored",cost:{hqm:8}}};function Ei(n,e){let t=n.mMul||4;return e==="armored"?n.hp*t*2:e==="metal"?n.hp*t:e==="stone"?Math.round(n.hp*(1+t)/2):n.hp}var zt=900,qi=900,Dr=.0075,pf=30,oa=10,mf=600,Kc=3600,gf=1200,Lr=240,wt=620,Jc=620,jc=50,Yi={hp:200,len:46,half:23,life:60},xf=7,aa=1.9,yf=.65,xs={head:[0,.25,.45,.62],body:[0,.18,.34,.5],cost:[0,16,34,60],headCol:[null,"#cdbb92","#9aabb8","#7c8ec9"],bodyCol:[null,"#857748","#959ca3","#5d7a9b"]},Qc=(n,e)=>xs[e][L0(n)],L0=n=>n<0?0:n>3?3:n|0,_t={speed:560,boost:980,accel:360,drag:.55,dragIdle:.85,turn:2.1,r:30,hp:260},Zt={speed:455,accel:300,drag:.55,turn:1.6,r:46,seats:4,cost:40,hp:360},la={1:{name:"Pistol",dmg:14,rof:.5,speed:1e3,spread:.05,mag:12,reload:1.6,range:340,lead:0},2:{name:"Rifle",dmg:11,rof:.12,speed:1500,spread:.05,mag:30,reload:2,range:380,lead:.55},3:{name:"Sniper",dmg:60,rof:1.3,speed:1900,spread:0,mag:1,reload:2.4,range:460,lead:1}},_f={2:50,3:250},eh=50,ys={boar:{hp:35,r:17,walk:62,chase:128,dmg:7,atk:.8,detect:300,lose:560,loot:["wood",1,3]},wolf:{hp:62,r:15,walk:84,chase:190,dmg:12,atk:.6,detect:430,lose:720,loot:["metal",1,2],biome:"jungle",pack:!0},bear:{hp:165,r:25,walk:54,chase:132,dmg:24,atk:1,detect:360,lose:660,loot:["metal",3,6],biome:"winter"},alligator:{hp:140,r:22,walk:48,chase:158,dmg:22,atk:.9,detect:340,lose:620,loot:["metal",2,5],biome:"jungle",lake:!0},snake:{hp:42,r:11,walk:78,chase:214,dmg:14,atk:.5,detect:380,lose:640,loot:["metal",1,2],biome:"desert"},scorpion:{hp:28,r:12,walk:74,chase:158,dmg:6,atk:.7,detect:300,lose:540,loot:["metal",1,2],biome:"desert",poison:!0},polarbear:{hp:205,r:27,walk:58,chase:142,dmg:28,atk:1,detect:380,lose:690,loot:["metal",4,7],biome:"winter"}},vf=[["boar",12],["wolf",7],["bear",6],["alligator",8],["snake",9],["scorpion",8],["polarbear",5]],Vt={trades:[["wood",100,6],["stone",100,9],["metal",50,10]],buys:{pistol:{ammo:48,cost:6},rifle:{ammo:90,cost:10},minigun:{ammo:200,cost:16},rocket:{ammo:2,cost:24},shotgun:{ammo:24,cost:9},sniper:{ammo:5,cost:24},hmg:{ammo:150,cost:20}},jackhammer:30,laser:14,fenceWood:10,grenade:8,signal:60,hqm:{cost:12,amt:10},worker:100},Xt={hp:64,r:14,dmg:8,rof:.5,range:430,detect:540,speed:118,leash:170,bspeed:1200,spread:.06},Mf=[{type:"gas",name:"Gas Station",fx:.26,fy:.3,crates:4,barrels:12,guards:3},{type:"junk",name:"Junkyard",fx:.75,fy:.32,crates:5,barrels:7,guards:3},{type:"warehouse",name:"Abandoned Warehouse",fx:.5,fy:.74,crates:7,barrels:7,guards:4}],Kn={capR:240,capT:8,payEvery:6,pay:{stone:10,metal:6,scrap:4}},fn={vhp:1100,ghp:80,speed:120,trange:560,tdmg:13,trof:.34,gdmg:9,grof:.5,grange:440,gspeed:120,leash:300,bspeed:1300},Jn={hp:450,speed:330,orbitR:420,orbitT:22,strafeR:760,flakR:720},Hs={hackT:60,r:150},mt={TEAM_COUNT:7,COLS:["#b85b5b","#5b8bb8","#b89b5b","#7bb85b","#9b5bb8","#5bb8a8","#b8765b","#8b8b5b","#b85b9b","#6b78b8"],BOT_SPEED:160,ROCKET_MIN:230,STRAFE_FLIP:.9,REACT_R:640,WORKER_COST:50,GATHER_LOAD:300,MINICOPTER_COST:30,SIGNAL_COST:60,HIRE_CAP_HARD:16,HIRE_CAP:8,RESPAWN_T:15,TRIPWIRE:2600,RAID_DEF_W:.55,RAID_TUR_W:.3,ENDGAME_T:420,ENDGAME_BASES:6};function bf(n){let e=n>>>0||1,t=()=>{e|=0,e=e+1831565813|0;let i=Math.imul(e^e>>>15,1|e);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296};return{next:t,rand:(i=0,s=1)=>i+t()*(s-i),randi:(i,s)=>Math.floor(i+t()*(s-i+1)),chance:i=>t()<i,pick:i=>i[Math.floor(t()*i.length)],angle:()=>t()*Math.PI*2}}var Xe=Math.PI*2,it=(n,e,t)=>n<e?e:n>t?t:n,Nr=(n,e,t)=>n+(e-n)*t,me=(n,e,t,i)=>{let s=t-n,r=i-e;return s*s+r*r},ee=(n,e,t,i)=>Math.sqrt(me(n,e,t,i)),Ai=n=>(n=it(n,0,1),n*n*(3-2*n));function N0(n,e){let t=(e-n)%Xe;return t>Math.PI&&(t-=Xe),t<-Math.PI&&(t+=Xe),t}function Ri(n,e,t){let i=N0(n,e);return Math.abs(i)<=t?e:n+Math.sign(i)*t}var Je=(n,e)=>n+","+e,Ne=(n,e,t)=>n+","+e+","+t;function Et(n,e,t,i,s,r){let o=s-t,a=r-i,l=o*o+a*a;if(l===0)return ee(n,e,t,i);let c=((n-t)*o+(e-i)*a)/l;return c=it(c,0,1),ee(n,e,t+c*o,i+c*a)}function oi(n,e,t,i,s,r,o,a){let l=ca(s,r,o,a,n,e),c=ca(s,r,o,a,t,i),d=ca(n,e,t,i,s,r),h=ca(n,e,t,i,o,a);return(l>0&&c<0||l<0&&c>0)&&(d>0&&h<0||d<0&&h>0)}function ca(n,e,t,i,s,r){return(t-n)*(r-e)-(i-e)*(s-n)}function wf(n,e,t,i,s,r,o,a){let l=t-n,c=i-e,d=o-s,h=a-r,f=l*h-c*d;if(Math.abs(f)<1e-9)return null;let u=((s-n)*h-(r-e)*d)/f,p=((s-n)*c-(r-e)*l)/f;return u<0||u>1||p<0||p>1?null:{x:n+u*l,y:e+u*c}}function Zi(n,e){let t=n*374761393+e*668265263|0;return t=t^t>>13|0,t=Math.imul(t,1274126177),((t^t>>16)>>>0)/4294967296}function Ef(n){let e=n.rng,t=ue.w,i=ue.h,s=200,r=t/2,o=i/2,a=.47*t,l=.47*i,c=[];for(let ie=0;ie<5;ie++)c.push({f:ie+2,w:1/(ie+1.2),p:e.rand(0,Xe)});let d=[],h=1e9,f=-1e9;for(let ie=0;ie<s;ie++){let ne=ie/s*Xe,B=0;for(let O of c)B+=Math.sin(ne*O.f+O.p)*O.w;d.push(B),h=Math.min(h,B),f=Math.max(f,B)}let u=d.map(ie=>1-.22*(.5-.5*((ie-h)/(f-h)*2-1))),p={cx:r,cy:o,rx:a,ry:l,N:s,rad:u},x=ie=>{let ne=ie%Xe;ne<0&&(ne+=Xe);let B=ne/Xe*s,O=Math.floor(B)%s,k=(O+1)%s;return u[O]+(u[k]-u[O])*(B-O)},m=(ie,ne)=>{let B=(ie-r)/a,O=(ne-o)/l,k=Math.sqrt(B*B+O*O);return x(Math.atan2(O,B))-k},g=(ie,ne)=>m(ie,ne)>0,y=[];for(let ie=0;ie<s;ie++){let ne=ie/s*Xe;y.push({x:r+Math.cos(ne)*u[ie]*a,y:o+Math.sin(ne)*u[ie]*l})}let v=ie=>ie===void 0?0:(Math.sin(ie*.0016+1.7)*.62+Math.sin(ie*.0043+4.2)*.38)*t*.055,b=(ie,ne)=>{let B=(ie+v(ne))/t;return B<1/3?"desert":B<2/3?"jungle":"winter"},A={x:t/2,y:i/2,r:46},E=[];for(let ie=0;ie<5;ie++){let ne=ie%2===0,B=ne?t:i,O=ne?i:t,k=e.rand(.14,.86)*O,P=e.rand(260,820),L=e.rand(1.4,3.2),se=e.rand(0,Xe),T=[];for(let Q=0;Q<=30;Q++){let Ee=Q/30,ze=it(k+Math.sin(Ee*L*Xe+se)*P,60,O-60);T.push(ne?{x:Ee*B,y:ze}:{x:ze,y:Ee*B})}let X=e.rand(26,42),q=[],re=e.chance(.5)?1:-1;for(let Q=0;Q<T.length;Q+=2){let Ee=D(T,Q);q.push({x:it(T[Q].x+Math.cos(Ee+Math.PI/2)*re*(X/2+24),20,t-20),y:it(T[Q].y+Math.sin(Ee+Math.PI/2)*re*(X/2+24),20,i-20)})}E.push({pts:T,w:X,poles:q,fade:T.map(()=>1)})}function D(ie,ne){let B=ie[Math.max(0,ne-1)],O=ie[Math.min(ie.length-1,ne+1)];return Math.atan2(O.y-B.y,O.x-B.x)}let _=(ie,ne)=>{let B=ie,O=ne;for(let k=0;k<7;k++){let P={x:(B.x+O.x)/2,y:(B.y+O.y)/2};m(P.x,P.y)>.015?B=P:O=P}return{x:B.x,y:B.y}},M=ie=>{let ne=ie.map(P=>m(P.x,P.y)>.015),B=ne.indexOf(!0),O=ne.lastIndexOf(!0);if(B===-1||O-B<2)return null;let k=ie.slice(B,O+1);return B>0&&(k[0]=_(k[0],ie[B-1])),O<ie.length-1&&(k[k.length-1]=_(k[k.length-1],ie[O+1])),k},S=e.chance(.5),C=[];for(let ie of[[.15,.35],[.65,.85]]){let ne=S?t:i,B=S?i:t;for(let O=0;O<4&&!C.some(k=>k.band===ie[0]);O++){let k=e.rand(ie[0],ie[1])*B,P=e.rand(70,Math.min(300,B*.09)),L=e.rand(.7,1.5),se=e.rand(0,Xe),T=[];for(let q=0;q<=46;q++){let re=q/46,Q=it(k+Math.sin(re*L*Xe+se)*P,90,B-90);T.push(S?{x:re*ne,y:Q}:{x:Q,y:re*ne})}if(T=M(T),!T)continue;let X=!1;for(let q of C)for(let re=0;re<T.length-1&&!X;re++)for(let Q=0;Q<q.pts.length-1;Q++)if(oi(T[re].x,T[re].y,T[re+1].x,T[re+1].y,q.pts[Q].x,q.pts[Q].y,q.pts[Q+1].x,q.pts[Q+1].y)){X=!0;break}X||C.push({pts:T,band:ie[0]})}}let N=(ie,ne,B)=>{let O=1e9;for(let k of B){let P=k.pts;for(let L=0;L<P.length-1;L++)O=Math.min(O,Et(ie,ne,P[L].x,P[L].y,P[L+1].x,P[L+1].y))}return O},W=(ie,ne)=>N(ie,ne,C),Y=(ie,ne)=>N(ie,ne,E),U=[];for(let ie of C)for(let ne=0;ne<ie.pts.length-1;ne++)for(let B of E)for(let O=0;O<B.pts.length-1;O++){let k=wf(ie.pts[ne].x,ie.pts[ne].y,ie.pts[ne+1].x,ie.pts[ne+1].y,B.pts[O].x,B.pts[O].y,B.pts[O+1].x,B.pts[O+1].y);k&&U.push({x:k.x,y:k.y,railAng:Math.atan2(ie.pts[ne+1].y-ie.pts[ne].y,ie.pts[ne+1].x-ie.pts[ne].x),gate:0,active:!1})}let H=[];for(let ie=0;ie<26&&H.length<5;ie++){let ne=e.rand(.34*t,.97*t),B=e.rand(.14*i,.86*i),O=e.rand(170,330);if(m(ne,B)<O/Math.min(a,l)+.06||b(ne,B)==="desert"||W(ne,B)<O+120||ee(ne,B,A.x,A.y)<wt+O+260||H.some(T=>ee(ne,B,T.x,T.y)<O+T.r+220))continue;let k=[],P=[{f:2,p:e.rand(0,Xe)},{f:3,p:e.rand(0,Xe)},{f:5,p:e.rand(0,Xe)}];for(let T=0;T<28;T++){let X=T/28*Xe,q=0;for(let re=0;re<3;re++)q+=Math.sin(X*P[re].f+P[re].p)/(re+1.6);k.push(1+.17*Math.max(-1,Math.min(1,q)))}let L=b(ne,B)==="winter",se=[];if(!L)for(let T=0,X=e.randi(2,4);T<X;T++)se.push({a:e.rand(0,Xe),rr:e.rand(.2,.72),s:e.rand(9,16)});H.push({x:ne,y:B,r:O,wob:k,frozen:L,pads:se,seed:e.rand(0,9)})}let $=(ie,ne)=>{for(let B of H)if(me(ie,ne,B.x,B.y)<B.r*B.r)return B;return null};for(let ie of E)ie.fade=ie.pts.map(ne=>{let B=m(ne.x,ne.y);if(B<=.015)return 0;let O=Ai((B-.015)/.05);for(let k of H){let P=ee(ne.x,ne.y,k.x,k.y)-k.r*1.08;O*=Ai((P-12)/70)}return O}),ie.poles=ie.poles.filter(ne=>m(ne.x,ne.y)>.03&&!H.some(B=>ee(ne.x,ne.y,B.x,B.y)<B.r+40));let le=[];for(let ie of Mf){let ne=ie.fx*t,B=ie.fy*i;for(let O=0;O<8&&(m(ne,B)<.12||$(ne,B));O++)ne=ne*.78+r*.22,B=B*.78+o*.22;le.push({type:ie.type,name:ie.name,x:ne,y:B,r:200,crates:ie.crates,nbarrels:ie.barrels,nguards:ie.guards})}let de=wt+240+700,ye={x:.4*t,y:.52*i};e:for(let ie=0;ie<6;ie++){let ne=de+ie*700;for(let B=0;B<16;B++){let O=B/16*Xe,k=A.x+Math.cos(O)*ne,P=A.y+Math.sin(O)*ne;if(!(k<600||P<600||k>t-600||P>i-600)&&!(m(k,P)<.12||$(k,P))&&!(W(k,P)<360||Y(k,P)<320)&&!(ee(k,P,A.x,A.y)<de)){ye={x:k,y:P};break e}}}le.push({type:"quarry",name:"Quarry",x:ye.x,y:ye.y,r:170}),n.quarry={x:ye.x,y:ye.y,r:Kn.capR,owner:null,capOwner:null,capT:0,payT:0,arm:0,paid:0};let Ce=[],Ue=[],Ke=(ie,ne,B,O)=>{if(m(ie,ne)<.06||$(ie,ne))return!1;let k=b(ie,ne);if(k!=="jungle"&&k!=="winter"||ee(ie,ne,A.x,A.y)<wt+B)return!1;for(let P of le)if(ee(ie,ne,P.x,P.y)<P.r+240)return!1;if(W(ie,ne)<B+90)return!1;for(let P of O)if(ee(ie,ne,P.x,P.y)<B+P.r+44)return!1;return!0};for(let ie=0;ie<34;ie++)for(let ne=0;ne<30;ne++){let B=e.rand(t/3,t-120),O=e.rand(120,i-120),k=e.rand(28,42);if(Ke(B,O,k,Ce)){Ce.push({x:B,y:O,r:k,seed:e.rand(0,9),winter:b(B,O)==="winter"});break}}for(let ie=0;ie<72;ie++)for(let ne=0;ne<18;ne++){let B=e.rand(t/3,t-100),O=e.rand(100,i-100),k=e.rand(7,13);if(Ke(B,O,k,Ce)){Ue.push({x:B,y:O,r:k,seed:e.rand(0,9),winter:b(B,O)==="winter"});break}}n.world={island:p,islandPath:y,onLand:g,landFactor:m,islandRadAt:x,biomeAt:b,biomeRidge:v,shop:A,roads:E,rails:C,railHoriz:S,crossings:U,lakes:H,lakeAt:$,railDist:W,pathDist:Y,monuments:le,boulders:Ce,rocks:Ue,flora:[],palms:[]},k0(n),F0(n),B0(n),z0(n),n.copter={x:n.player.x+120,y:n.player.y,angle:0,rotor:0,vx:0,vy:0,spd:0,hp:_t.hp,max:_t.hp,destroyed:!1}}function U0(n,e,t,i){let s=n.rng;for(let r=0;r<40;r++){let o=s.rand(i,ue.w-i),a=s.rand(i,ue.h-i);if(ee(o,a,n.player.x,n.player.y)<220||n.world.landFactor(o,a)<.05||n.world.lakeAt(o,a))continue;let l=!1;for(let c of e)if(ee(o,a,c.x,c.y)<t+c.r+24){l=!0;break}if(!l)return{x:o,y:a}}return null}function k0(n){let e=n.rng,t=[["tree",290,22,120,"wood"],["stone",190,26,140,"stone"],["metal",150,24,110,"metal"]],i=[];for(let[s,r,o,a,l]of t)for(let c=0;c<r;c++){let d=U0(n,i,o,90);if(!d)continue;let h={type:s,x:d.x,y:d.y,r:o,amount:a,max:a,regen:0,seed:e.rand(0,1e3),base:l,by:null,byT:0};i.push(h),n.resources.push(h)}}function F0(n){let e=n.rng;for(let t of n.world.monuments)if(t.type!=="quarry"){for(let i=0;i<t.crates;i++){let s=e.rand(0,Xe),r=e.rand(24,.62*t.r);n.barrels.push({x:t.x+Math.cos(s)*r,y:t.y+Math.sin(s)*r,r:18,hp:45,max:45,seed:e.rand(0,9),tier:"mon",crate:!0,respawnT:0})}for(let i=0;i<t.nbarrels;i++){let s=e.rand(0,Xe),r=e.rand(.45*t.r,.95*t.r);n.barrels.push({x:t.x+Math.cos(s)*r,y:t.y+Math.sin(s)*r,r:16,hp:30,max:30,seed:e.rand(0,9),tier:"mon",respawnT:0})}for(let i=0;i<t.nguards;i++)O0(n,t)}for(let t of n.world.roads)if(!t.convoy)for(let i=0;i<t.pts.length;i+=2){if(i%4!==0||!e.chance(.7))continue;let s=t.pts[i],r=e.rand(0,Xe),o=it(s.x+Math.cos(r)*(t.w/2+e.rand(16,70)),30,ue.w-30),a=it(s.y+Math.sin(r)*(t.w/2+e.rand(16,70)),30,ue.h-30);ee(o,a,n.world.shop.x,n.world.shop.y)<wt+60||!n.world.onLand(o,a)||n.world.lakeAt(o,a)||n.barrels.push({x:o,y:a,r:16,hp:30,max:30,seed:e.rand(0,9),tier:"road",respawnT:0})}}function O0(n,e){let t=n.rng,i=t.rand(0,Xe),s=t.rand(.35*e.r,.8*e.r);n.guards.push({mx:e.x,my:e.y,mr:e.r,x:e.x+Math.cos(i)*s,y:e.y+Math.sin(i)*s,hp:Xt.hp,max:Xt.hp,angle:t.rand(0,Xe),gunCd:t.rand(0,.6),dead:!1,respawnT:0,wpX:0,wpY:0,wpT:0,hasWp:!1,seed:t.rand(0,9),vx:0,vy:0})}function B0(n){let e=n.rng,t=ue.w,i=ue.h,s=["#d96a83","#dbb44a","#c46ac4","#e8e4da","#e08a52","#7aa0e0"];for(let r=0,o=e.randi(200,300);r<o;r++){let a=e.rand(t/3,2*t/3),l=e.rand(60,i-60);if(!n.world.onLand(a,l)||n.world.lakeAt(a,l)||n.world.biomeAt(a,l)!=="jungle")continue;let c=e.next();n.world.flora.push({x:a,y:l,type:c<.4?"flower":c<.72?"fern":"shrub",seed:e.rand(0,9),col:e.pick(s)})}for(let r=0,o=e.randi(90,140);r<o;r++){let a=e.rand(30,t/3),l=e.rand(60,i-60);!n.world.onLand(a,l)||n.world.lakeAt(a,l)||n.world.biomeAt(a,l)!=="desert"||n.world.flora.push({x:a,y:l,type:e.chance(.5)?"cactus":"deshrub",seed:e.rand(0,9),arms:e.randi(0,2)})}for(let r=0;r<n.world.islandPath.length;r+=2){let o=n.world.islandPath[r],a=n.world.island.cx+(o.x-n.world.island.cx)*.93,l=n.world.island.cy+(o.y-n.world.island.cy)*.93;n.world.biomeAt(a,l)==="jungle"&&e.chance(.34)&&n.world.palms.push({x:a,y:l,seed:e.rand(0,9)})}for(let r=0,o=e.randi(10,16);r<o;r++){let a=e.rand(40,t/3-20),l=e.rand(80,i-80);n.world.biomeAt(a,l)==="desert"&&n.world.onLand(a,l)&&!n.world.lakeAt(a,l)&&n.world.palms.push({x:a,y:l,seed:e.rand(0,9),desert:!0})}}function z0(n){let e=n.rng,t=ue.w,i=ue.h,s=o=>o==="desert"?[0,t/3]:o==="jungle"?[t/3,2*t/3]:o==="winter"?[2*t/3,t]:[0,t],r=[];for(let[o,a]of vf){let l=ys[o];for(let c=0;c<a;c++){let d=Tf(n,o,l,s(l.biome),r,null);if(d&&l.pack&&e.chance(.45))for(let h=0,f=e.randi(1,2);h<f;h++)Tf(n,o,l,s(l.biome),r,d)}}}function Tf(n,e,t,i,s,r){let o=n.rng;for(let a=0;a<40;a++){let l,c,d=r?r.lake:null;if(r)l=r.x+o.rand(-150,150),c=r.y+o.rand(-150,150);else if(t.lake){let u=n.world.lakes.filter(m=>!m.frozen||t.biome!=="jungle");if(!u.length)return null;d=o.pick(u);let p=o.rand(0,Xe),x=d.r+o.rand(30,200);l=d.x+Math.cos(p)*x,c=d.y+Math.sin(p)*x}else l=o.rand(i[0],i[1]),c=o.rand(90,ue.h-90);if(l=it(l,i[0]-70,i[1]+70),c=it(c,90,ue.h-90),ee(l,c,n.player.x,n.player.y)<220||ee(l,c,n.world.shop.x,n.world.shop.y)<wt+200||n.world.landFactor(l,c)<.05||n.world.lakeAt(l,c)&&!t.lake)continue;let h=!1;for(let u of s)if(ee(l,c,u.x,u.y)<t.r+u.r+8){h=!0;break}if(h)continue;let f={type:e,x:l,y:c,vx:0,vy:0,r:t.r,hp:t.hp,max:t.hp,aggro:null,atkcd:0,hit:0,wanderT:o.rand(0,2),dir:o.rand(0,Xe),respawnT:0,hostile:o.chance(.1),foe:null,lake:d,pauseT:0,stuckT:0,blockedAll:0,dead:!1,avoidT:0,avoidA:0};return s.push(f),n.animals.push(f),f}return null}var _n=Math.ceil(ue.w/64),Vs=Math.ceil(ue.h/64),$i=_n*Vs;function If(n){let e=new Uint8Array($i),t=new Float32Array($i);for(let i=0;i<Vs;i++)for(let s=0;s<_n;s++){let r=s*64+64/2,o=i*64+64/2,a=i*_n+s,l=1;if(!n.world.onLand(r,o)){e[a]=1,t[a]=1;continue}let c=n.world.lakeAt(r,o);c&&(l=c.frozen?1.15:3);for(let d of n.world.boulders)if((r-d.x)*(r-d.x)+(o-d.y)*(o-d.y)<(d.r+18)*(d.r+18)){e[a]=1;break}n.world.pathDist(r,o)<26&&(l=Math.min(l,.85)),t[a]=l}n.nav={COLS:_n,ROWS:Vs,N:$i,terrain:e,cost:t,stamp:1,penalty:new Map,g:new Float32Array($i),came:new Int32Array($i),vis:new Int32Array($i),gen:0,heap:new Int32Array($i+1),heapF:new Float32Array($i+1)}}var kr=(n,e)=>n<0||e<0||n>=_n||e>=Vs?-1:e*_n+n;function H0(n,e,t,i){let s=n.deploys.get(Je(e,t));return s?s.type==="cupboard"?s.owner!==i:!0:!1}function da(n,e,t,i){let s=kr(e,t);return!(s<0||n.nav.terrain[s]||n.walls.has("D,"+e+","+t)||H0(n,e,t,i)||n.nav.fenceCells&&n.nav.fenceCells.has(s))}function th(n,e,t,i,s,r){let o;i>e?o=Ne("V",i,t):i<e?o=Ne("V",e,t):s>t?o=Ne("H",e,s):o=Ne("H",e,t);let a=n.walls.get(o);return!a||a.hp<=0?0:a.type==="door"&&(a.open||a.lock&&a.lock.by===r)?1:2}function Ci(n,e,t,i,s,r){if(!da(n,i,s,r))return-1;let o=th(n,e,t,i,s,r);return o===2?-1:o}function V0(n,e,t){let i=n.nav.cost[e],s=n.nav.penalty.get(e);return s!==void 0&&(s>t?i+=6:n.nav.penalty.delete(e)),i}function fa(n,e,t,i=12){let s=kr(Math.floor(e/64),Math.floor(t/64));s>=0&&n.nav.penalty.set(s,n.t+i)}var Gs=256,ha=Math.ceil(ue.w/Gs),Af=Math.ceil(ue.h/Gs);function G0(n){let e=n.nav;if(e.maskStamp===e.stamp&&e.mask)return e.mask;let t=e.mask&&e.maskStamp!==void 0?e.mask.fill(0):new Uint8Array(ha*Af),i=(s,r)=>{let o=s/Gs|0,a=r/Gs|0;for(let l=-1;l<=1;l++)for(let c=-1;c<=1;c++){let d=(a+l)*ha+(o+c);o+c>=0&&a+l>=0&&o+c<ha&&a+l<Af&&(t[d]=1)}};for(let s of n.walls.keys()){let r=s.split(",");i(+r[1]*64,+r[2]*64)}for(let s of n.deploys.keys()){let r=s.split(",");i(+r[0]*64,+r[1]*64)}for(let s of n.fences)i(s.x,s.y);return e.mask=t,e.maskStamp=e.stamp,t}function Pf(n,e,t){let i=G0(n),s=(t/Gs|0)*ha+(e/Gs|0);return i[s]===1}function Df(n){let e=new Set;for(let t of n.fences)e.add(kr(Math.floor(t.x/64),Math.floor(t.y/64)));n.nav.fenceCells=e,n.nav.stamp++}function Rf(n,e,t,i){if(da(n,e,t,i))return{gx:e,gy:t};for(let s=1;s<=8;s++)for(let r=-s;r<=s;r++)for(let o=-s;o<=s;o++)if(Math.max(Math.abs(o),Math.abs(r))===s&&da(n,e+o,t+r,i))return{gx:e+o,gy:t+r};return null}function Cf(n,e,t){let i=++n.heapN,s=n.heap,r=n.heapF;for(;i>1;){let o=i>>1;if(r[o]<=t)break;s[i]=s[o],r[i]=r[o],i=o}s[i]=e,r[i]=t}function W0(n){let e=n.heap,t=n.heapF,i=e[1],s=e[n.heapN],r=t[n.heapN--],o=1;for(;;){let a=o<<1;if(a>n.heapN||(a+1<=n.heapN&&t[a+1]<t[a]&&a++,t[a]>=r))break;e[o]=e[a],t[o]=t[a],o=a}return e[o]=s,t[o]=r,i}var Sf=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];function Lf(n,e,t,i,s,r,o){let a=n.nav,l=it(Math.floor(t/64),0,_n-1),c=it(Math.floor(i/64),0,Vs-1),d=it(Math.floor(s/64),0,_n-1),h=it(Math.floor(r/64),0,Vs-1),f=Rf(n,l,c,e);if(!f)return null;let u=Rf(n,d,h,e);if(!u)return null;if(l=f.gx,c=f.gy,d=u.gx,h=u.gy,l===d&&c===h)return[{x:s,y:r}];let p=++a.gen;a.heapN=0;let x=c*_n+l,m=h*_n+d;a.vis[x]=p,a.g[x]=0,a.came[x]=-1,Cf(a,x,0);let g=Math.max(Math.abs(d-l),Math.abs(h-c)),y=o||Math.min(26e3,3e3+g*90),v=0,b=!1;for(;a.heapN>0&&v++<y;){let S=W0(a);if(S===m){b=!0;break}let C=S%_n,N=S/_n|0,W=a.g[S];for(let Y=0;Y<8;Y++){let U=Sf[Y][0],H=Sf[Y][1],$=C+U,le=N+H,de=kr($,le);if(de<0)continue;let ye=0;if(Y<4){let B=Ci(n,C,N,$,le,e);if(B<0)continue;B===1&&(ye=2)}else if(Ci(n,C,N,C+U,N,e)!==0||Ci(n,C,N,C,N+H,e)!==0||Ci(n,C+U,N,$,le,e)!==0||Ci(n,C,N+H,$,le,e)!==0)continue;let Ce=(Y<4?1:1.41421)*V0(n,de,n.t)+ye,Ue=W+Ce;if(a.vis[de]===p&&a.g[de]<=Ue)continue;a.vis[de]=p,a.g[de]=Ue,a.came[de]=S;let Ke=Math.abs($-d),ie=Math.abs(le-h),ne=(Math.max(Ke,ie)+.41421*Math.min(Ke,ie))*.85;Cf(a,de,Ue+ne)}}if(!b)return null;let A=[],E=m;for(;E!==-1;)A.push(E),E=a.came[E];A.reverse();let D=[];for(let S=0;S<A.length;S++){let C=A[S]%_n,N=A[S]/_n|0,W=!1;if(S>0){let Y=A[S-1]%_n,U=A[S-1]/_n|0;Math.abs(C-Y)+Math.abs(N-U)===1&&(W=th(n,Y,U,C,N,e)===1)}D.push({x:C*64+64/2,y:N*64+64/2,door:W})}D[D.length-1]={x:s,y:r,door:D[D.length-1].door};let _=[D[0]],M=0;for(let S=1;S<D.length;S++)if(D[S].door||S===D.length-1){let C=M;for(;C<S;){let N=C+1;for(let W=S;W>C;W--)if(!(D[W].door&&W!==S)&&Ur(n,e,D[C].x,D[C].y,D[W].x,D[W].y)){N=W;break}_.push(D[N]),C=N}M=S}return _.length>1&&!_[0].door&&Ur(n,e,t,i,_[1].x,_[1].y)&&_.shift(),_}function Ur(n,e,t,i,s,r){let o=Math.hypot(s-t,r-i),a=Math.max(1,Math.ceil(o/(64*.4))),l=Math.floor(t/64),c=Math.floor(i/64);for(let d=1;d<=a;d++){let h=d/a,f=t+(s-t)*h,u=i+(r-i)*h,p=Math.floor(f/64),x=Math.floor(u/64);if(!(p===l&&x===c)){if(!da(n,p,x,e))return!1;if(p!==l&&x!==c){if(Ci(n,l,c,p,c,e)!==0||Ci(n,p,c,p,x,e)!==0||Ci(n,l,c,l,x,e)!==0||Ci(n,l,x,p,x,e)!==0)return!1}else if(th(n,l,c,p,x,e)!==0)return!1;l=p,c=x}}return!0}function Nf(n,e,t,i,s){let r=Math.hypot(i-e,s-t),o=Math.max(1,Math.ceil(r/(64*.5)));for(let a=1;a<=o;a++){let l=a/o,c=kr(Math.floor((e+(i-e)*l)/64),Math.floor((t+(s-t)*l)/64));if(c<0||n.nav.terrain[c])return!1}return!0}function nh(n){let e={seed:n>>>0,rng:bf(n),t:0,tick:0,resources:[],barrels:[],loot:[],bullets:[],rockets:[],grenades:[],satchels:[],fences:[],fires:[],wrecks:[],animals:[],guards:[],dummies:[],structures:new Map,walls:new Map,deploys:new Map,units:[],teams:[],transports:[],trains:[],convoys:[],airdrop:null,plane:null,airdropT:150,signal:null,patrol:null,patrolT:0,lockedCrate:null,crateT:0,quarry:null,trainT:0,convoyT:0,clouds:null,fogBanks:null,fireflies:null,footprints:[],weather:{mode:"clear",timer:28,rain:0,boltT:0,flash:0,fog:0,fogTimer:18,fogOn:!1},wind:0,player:{x:ue.w/2,y:ue.h/2+260,vx:0,vy:0,angle:0,walk:200,run:340,recoil:0,health:100,maxhp:100,hurt:0,regenDelay:0,dead:!1,deadT:0,invuln:0,moving:!1,inCopter:!1,facemask:0,bodyArmor:0,rifleLaser:!1,poison:0,swing:0,gatherCd:0,lastHitBy:null},inv:{wood:1e4,stone:1e4,metal:1e4,scrap:0,hqm:0,fence:10,grenade:3,signal:0},owned:{pistol:!0,rifle:!1,minigun:!1,rocket:!1,sniper:!1,shotgun:!1,hmg:!1},weapons:X0(),slot:0,buildMode:!1,buildPiece:"wall",buildRot:0,jackhammer:!1,ghost:!0,copter:null,playerKills:0,deathMark:null,bounty:null,raids:[],elims:[],raidAlarm:null,breachT:{},shake:0,aggressor:-1,aggressorOwner:null,aggroT:0,roleT:0,aliveBases:0,dbSweepT:0,events:[],muzzle:null,blasts:[],scorch:[],flashes:[],floats:[],particles:[],cmd:{mx:0,my:0,fire:!1,fireHeld:!1,up:!1,down:!1,left:!1,right:!1,run:!1},metrics:{hardUnstick:0,wallPhase:0,stuckTotal:0,maxStuck:0,repaths:0,pathFails:0,act:{},raidsLaunched:0,tcKilled:0,elims:0,winner:null,decisiveT:null,workerLog:[],stuckLog:[],regionStuck:{base:0,lake:0,monument:0,open:0}}};return Ef(e),If(e),q0(e),e.trainT=e.rng.rand(20,60),e.patrolT=e.rng.rand(180,280),e.crateT=e.rng.rand(100,180),e.convoyT=e.rng.rand(120,200),e}function X0(){let n={};for(let e in ln){let t=ln[e];n[e]={ammo:t.magSize,reserve:t.reserve,reloading:0,cd:0,spin:0}}return n}function q0(n){let e=n.rng,t=[{x:n.world.shop.x,y:n.world.shop.y,r:wt+500},{x:n.player.x,y:n.player.y,r:700},...n.world.monuments.map(i=>({x:i.x,y:i.y,r:wt+320}))];for(let i=0;i<mt.TEAM_COUNT;i++){let s=null;for(let d=0;d<120&&!s;d++){let h=e.rand(1400,ue.w-1400),f=e.rand(1400,ue.h-1400);n.world.landFactor(h,f)<.12||n.world.lakeAt(h,f)||n.world.lakes.some(u=>ee(h,f,u.x,u.y)<u.r+560)||n.world.railDist(h,f)<400||n.world.pathDist(h,f)<340||t.some(u=>ee(h,f,u.x,u.y)<u.r)||(s={x:h,y:f})}if(!s)continue;t.push({x:s.x,y:s.y,r:qi});let r=e.next(),o=r<.25,a=r>=.75,l={id:i,owner:"e"+i,col:mt.COLS[i%mt.COLS.length],hard:o,weak:a,role:["raider","turtle","nomad"][i%3],shotgun:e.chance(.3),eliminated:!1,bases:[],brain:{sealed:!0,decaying:!1,ready:!1,attack:!1,attackers:0,urgent:!1,aggressor:!1,raidTarget:null,raidPhase:null,breachKey:null,breachT:0,buildHoldT:0,builderId:null,lootCd:0,qCd:0,sigCd:0,statusT:e.rand(0,.5),stage:null,stageT:0}};n.teams.push(l);let c=Fr(n,l,s.x,s.y,!0);c.inv={wood:120,stone:30,metal:10},c.unfounded=!0,c.siteX=s.x,c.siteY=s.y,c.copter={x:s.x-256,y:s.y,angle:0,rotor:0,spin:0,vx:0,vy:0,hp:160,max:160,destroyed:!1};for(let d=0;d<3;d++){let h=Fr(n,l,s.x+e.rand(-46,46),s.y+e.rand(24,64),!1);h.unfounded=!0,h.siteX=s.x,h.siteY=s.y}}}function Fr(n,e,t,i,s){let r=n.rng,o={id:e.id,owner:e.owner,col:e.col,primary:!!s,worker:!s,ally:!1,hard:e.hard,weak:e.weak,shotgun:e.shotgun,role:e.role,x:t,y:i,vx:0,vy:0,angle:r.rand(0,Math.PI*2),hx:t,hy:i,tcKey:null,doorX:t,doorY:i+64,doorGy:Math.floor(i/64)+1,hp:100,max:100,dead:!1,respawnT:0,eliminated:!1,regenT:0,lastHitBy:null,inv:{wood:0,stone:0,metal:0},scrap:0,rockets:0,satchels:0,grenades:0,hqm:0,gun:"pistol",rifleLaser:!1,facemask:e.hard?1:0,bodyArmor:e.hard?2:0,jack:!1,kills:0,state:"gather",act:"gather",unfounded:!1,siteX:0,siteY:0,think:r.rand(0,1),gunCd:0,rkCd:0,gnCd:0,fenceCd:0,expandT:r.rand(3,9),retaliateT:0,threatX:0,threatY:0,disengageT:0,defendT:0,defHold:0,defTgt:null,retreat:!1,raid:null,wasRaid:!1,raidCd:0,raidBias:r.next(),raidUrge:0,defDuty:!1,buildDuty:!1,rocketer:!1,lootRun:null,qRun:null,monRun:!1,monRunT:0,monCd:0,monStay:0,tgtNode:null,skipNode:null,skipT:0,lootTgt:null,lootSkip:null,lootSkipT:0,lane:r.rand(-12,12),hoff:r.rand(-26,26),path:null,pathI:0,pathGX:0,pathGY:0,pathT:0,navStamp:0,repathN:0,noPathT:0,progT:0,progBest:1e9,stuckT:0,baseT:0,idleT:0,aiNetT:0,aiPx:t,aiPy:i,retT:0,maintT:-10,hireT:0,stT:0,expT:r.rand(40,80),fwdT:0,endgame:!1,copter:null,flying:!1,aboard:null,tradeDone:!1,parkChk:0,gathering:!1,swing:0,hf:!1,strafeT:0,strafeS:1,backoff:!1,tickPhase:n.units.length%9};return n.units.push(o),o}function Uf(n){let e=n.rng,t=n.world.shop,i=Y0(n),r=Fr(n,{id:-1,owner:Ye,col:"#7ec850",hard:!1,weak:!1,shotgun:!1,role:"raider"},t.x+e.rand(-60,60),t.y+(t.r||120)+40,!1);return r.ally=!0,r.gun="rifle",r.col="#7ec850",r.raidUrge=e.rand(12,24),r.facemask=0,r.bodyArmor=0,i?(r.hx=i.hx,r.hy=i.hy,r.tcKey=i.tcKey):(r.hx=n.player.x,r.hy=n.player.y),r.doorX=r.hx,r.doorY=r.hy+64,r.doorGy=Math.floor(r.hy/64)+1,r}function Y0(n){for(let[e,t]of n.deploys)if(t.type==="cupboard"&&t.owner===Ye){let[i,s]=e.split(",").map(Number);return{owner:Ye,tcKey:e,hx:i*64+64/2,hy:s*64+64/2,isPlayer:!0}}return null}var kf=(n,e)=>n.teams.find(t=>t.owner===e)||null;function He(n,e,t,i,s){let r=0,o=n.floats[n.floats.length-1];o&&n.t-o.born<1&&Math.abs(o.ox-e)<60&&Math.abs(o.oy-t)<44&&(r=o.lift+15),n.floats.push({x:e,y:t-r,ox:e,oy:t,lift:r,text:i,col:s||"#e8e2cf",vy:-26,life:.9,max:.9,born:n.t}),n.floats.length>90&&n.floats.shift()}function ft(n,e,t,i,s,r){for(let o=0;o<s;o++){let a=n.rng.rand(0,Math.PI*2),l=n.rng.rand(.3*r,r);n.particles.push({x:e,y:t,vx:Math.cos(a)*l,vy:Math.sin(a)*l,life:n.rng.rand(.25,.6),max:.6,r:n.rng.rand(1.5,3.5),col:i})}n.particles.length>900&&n.particles.splice(0,n.particles.length-900)}function At(n,e,t,i,s,r){let o=n.rng.rand(0,Math.PI*2),a=n.rng.rand(40,90);n.loot.push({x:e,y:t,vx:Math.cos(o)*a,vy:Math.sin(o)*a,kind:i,amt:s,gun:r||null,life:0,bob:n.rng.rand(0,Math.PI*2)})}function cn(n,e,t,i,s){if(s<=0)return;let r=Math.min(12,Math.max(1,Math.ceil(s/50))),o=s;for(let a=0;a<r;a++){let l=Math.min(o,Math.ceil(s/r));if(l<=0)break;At(n,e+n.rng.rand(-14,14),t+n.rng.rand(-14,14),i,l),o-=l}}function Ff(n,e,t,i){if(i.store)for(let s of["wood","stone","metal"])cn(n,e,t,s,i.store[s]|0),i.store[s]=0}function Of(n,e,t,i){let s=n.raids.find(r=>r.id===i);if(s){s.x=e,s.y=t,s.t=60;return}n.raids.push({x:e,y:t,id:i,t:60}),n.raids.length>40&&n.raids.shift()}function ua(n,e){if(!e)return;if(e===Ye){n.playerKills++,n.inv.scrap+=12;return}let t=n.units.find(i=>i.owner===e&&i.primary&&!i.eliminated)||n.units.find(i=>i.owner===e&&!i.eliminated);t&&(t.kills++,t.scrap+=12)}function Ft(n,e){let t=n.split(","),i=+t[1],s=+t[2];return t[0]==="V"?[i*64,s*64,i*64,(s+1)*64]:t[0]==="H"?[i*64,s*64,(i+1)*64,s*64]:e&&e.rot===1?[i*64,(s+1)*64,(i+1)*64,s*64]:[i*64,s*64,(i+1)*64,(s+1)*64]}var ih=(n,e)=>[Ne("V",n,e),Ne("V",n+1,e),Ne("H",n,e),Ne("H",n,e+1),Ne("D",n,e)];function sh(n,e,t,i,s){let r=Math.floor((e-i)/64),o=Math.floor((e+i)/64),a=Math.floor((t-i)/64),l=Math.floor((t+i)/64);for(let c=a;c<=l;c++)for(let d=r;d<=o;d++)for(let h of ih(d,c)){let f=n.walls.get(h);if(f&&f.hp>0&&s(h,f)===!0)return!0}return!1}function Or(n,e,t,i){let s=n.deploys.get(Je(Math.floor(e/64),Math.floor(t/64)));return!s||i&&s.type==="cupboard"&&s.owner===i?!1:s.type==="turret"||s.type==="cupboard"||s.type==="box"}function Z0(n,e,t,i,s){if(Or(n,e,t,s))return!0;for(let r=0;r<8;r++){let o=r/8*Math.PI*2;if(Or(n,e+Math.cos(o)*i,t+Math.sin(o)*i,s))return!0}return!1}function rh(n,e,t,i){for(let s of n.world.boulders)if(me(e,t,s.x,s.y)<(i+s.r)*(i+s.r))return!0;return!1}function Br(n,e,t){for(let i of n.world.boulders)if(me(e,t,i.x,i.y)<(i.r+12)*(i.r+12))return i;return null}function ai(n,e,t,i,s){for(let r of n.world.boulders)if(Et(r.x,r.y,e,t,i,s)<r.r)return!0;return!1}function $0(n,e,t,i){for(let s of n.fences)if(!(s.hp<=0)&&Et(e,t,s.x0,s.y0,s.x1,s.y1)<i+4)return s;return null}function Tt(n,e,t,i,s={}){if(!n.world.onLand(e,t)||rh(n,e,t,i))return!0;if(!Pf(n,e,t))return!1;if(Z0(n,e,t,i,s.passOwner)||$0(n,e,t,i))return!0;let r=!1;return sh(n,e,t,i+8,(o,a)=>{if(a.type==="door"&&a.open)return!1;if(a.type==="door"&&s.openOwnDoors&&a.lock&&a.lock.by===s.passOwner)return a.open=!0,a.closeT=n.t+1,n.nav.stamp++,!1;let l=Ft(o,a);if(Et(e,t,l[0],l[1],l[2],l[3])<i+4)return r=!0,!0}),r}function Ht(n,e,t,i,s){let r=Math.min(e,i)-64,o=Math.max(e,i)+64,a=Math.min(t,s)-64,l=Math.max(t,s)+64,c=Math.floor(r/64),d=Math.floor(o/64),h=Math.floor(a/64),f=Math.floor(l/64),u=Math.hypot(i-e,s-t);if(u>192){let p=Math.ceil(u/(64*.5)),x=new Set;for(let m=0;m<=p;m++){let g=m/p,y=Math.floor((e+(i-e)*g)/64),v=Math.floor((t+(s-t)*g)/64),b=y*10007+v;if(!x.has(b)){x.add(b);for(let A of ih(y,v)){let E=n.walls.get(A);if(!E||E.hp<=0||E.type==="door"&&E.open)continue;let D=Ft(A,E);if(oi(e,t,i,s,D[0],D[1],D[2],D[3]))return!0}}}return!1}for(let p=h;p<=f;p++)for(let x=c;x<=d;x++)for(let m of ih(x,p)){let g=n.walls.get(m);if(!g||g.hp<=0||g.type==="door"&&g.open)continue;let y=Ft(m,g);if(oi(e,t,i,s,y[0],y[1],y[2],y[3]))return!0}return!1}function Mt(n,e,t){return me(e,t,n.world.shop.x,n.world.shop.y)<wt*wt}function Ws(n,e,t){for(let i of n.world.monuments)if(me(e,t,i.x,i.y)<Jc*Jc)return i;return null}function pa(n,e,t){return Et(n,e,t.px,t.py,t.x,t.y)<xf}var ct=(n,e)=>({x:n*64+64/2,y:e*64+64/2});function K0(n,e,t,i){let s=null,r=zt*zt;for(let[o,a]of n.deploys){if(a.type!=="cupboard"||i&&a.owner!==i)continue;let[l,c]=o.split(",").map(Number),d=ct(l,c),h=me(e,t,d.x,d.y);h<r&&(r=h,s={key:o,d:a,x:d.x,y:d.y})}return s}function En(n,e){let t=n.deploys.get(e);return t&&t.type==="cupboard"?t:null}var Cn={has(n,e){for(let t in e){let i=0;for(let s of n)i+=s[t]||0;if(i<e[t])return!1}return!0},pay(n,e){if(!Cn.has(n,e))return!1;for(let t in e){let i=e[t];for(let s of n){let r=Math.min(i,s[t]||0);if(s[t]=(s[t]||0)-r,i-=r,i<=0)break}}return!0}};function J0(n,e,t,i){let s=t,r=t,o=i,a=i,l=!1;for(let[c,d]of n.structures){if(d.owner!==e)continue;let[h,f]=c.split(",").map(Number);Math.abs(h-t)*64>zt||Math.abs(f-i)*64>zt||(l=!0,s=Math.min(s,h),r=Math.max(r,h),o=Math.min(o,f),a=Math.max(a,f))}return l?r-s+1>$c||a-o+1>$c:!1}function Bf(n,e){let t=e.split(","),i=+t[1],s=+t[2];return t[0]==="V"?n.structures.has(Je(i-1,s))||n.structures.has(Je(i,s)):n.structures.has(Je(i,s-1))||n.structures.has(Je(i,s))}function oh(n,e,t,i){let s=Qt[t];if(!s)return!1;if(s.cat==="cell"){let{gx:r,gy:o}=i,a=ct(r,o);if(r<1||o<1||a.x>13760||a.y>9152||Mt(n,a.x,a.y)||Ws(n,a.x,a.y)||Br(n,a.x,a.y)||!n.world.onLand(a.x,a.y)||n.world.lakeAt(a.x,a.y))return!1;if(s.found)return!(n.structures.has(Je(r,o))||n.deploys.has(Je(r,o))||J0(n,e,r,o)||j0(n,r,o));if(n.deploys.has(Je(r,o))||(s.tc||s.box)&&!n.structures.has(Je(r,o)))return!1;if(s.tc){if(e===Ye&&[...n.deploys.values()].some(l=>l.type==="cupboard"&&l.owner===Ye))return!1;for(let[l,c]of n.deploys){if(c.type!=="cupboard")continue;let[d,h]=l.split(",").map(Number),f=ct(d,h);if(ee(a.x,a.y,f.x,f.y)<qi)return!1}}return!(s.turret&&!K0(n,a.x,a.y,e))}if(s.cat==="edge"){let r=i.key;if(n.walls.has(r)||!Bf(n,r))return!1;let a=Ft(r,{type:t}),l=(a[0]+a[2])/2,c=(a[1]+a[3])/2;return!(Mt(n,l,c)||Ws(n,l,c))}if(s.cat==="diag"){let r=i.key;if(n.walls.has(r))return!1;let o=r.split(",");return!!n.structures.has(Je(+o[1],+o[2]))}return!1}function j0(n,e,t){let i=ct(e,t),s=r=>r&&!r.destroyed&&Math.abs(r.x-i.x)<38&&Math.abs(r.y-i.y)<38;if(s(n.copter))return!0;for(let r of n.units)if(s(r.copter))return!0;return!1}function zf(n,e,t,i,s,r={}){let o=Qt[t];if(!oh(n,e,t,i)||s&&!Cn.pay(s,o.cost))return null;let a=r.mat||"wood",l=Ei(o,a),c;return o.cat==="cell"&&o.found?(c={type:t,mat:a,hp:l,max:l,owner:e,hitT:-100,rot:(r.rot||0)&3},n.structures.set(Je(i.gx,i.gy),c)):o.cat==="cell"?(c={type:t,mat:"wood",hp:o.hp,max:o.hp,owner:e,hitT:-100},o.store&&(c.store={wood:0,stone:0,metal:0,scrap:0}),o.turret&&(c.tier=r.tier||1,c.angle=0,c.cd=0,c.mag=12,c.reload=0,c.ext=!!r.ext,c.scanT=n.rng.rand(.5,4.5)),(o.tc||o.box||o.door)&&(c.lock={by:e}),n.deploys.set(Je(i.gx,i.gy),c)):(c={type:t,mat:a,hp:Ei(o,a),max:Ei(o,a),owner:e,hitT:-100,open:!1,rot:(r.rot||0)&1},o.door&&(c.lock={by:e}),n.walls.set(i.key,c)),n.nav.stamp++,c}function Hf(n,e,t,i){let s=uf[e.mat];return!s||!t.up||i&&!Cn.pay(i,s.cost)?!1:(e.mat=s.to,e.max=Ei(t,e.mat),e.hp=e.max,!0)}function Xs(n,e,t,i){let s=n.walls.get(e);if(!s||s.hp<=0)return!1;if(s.hp-=t,s.hitT=n.t,s.hp<=0){let r=Ft(e,s);return ft(n,(r[0]+r[2])/2,(r[1]+r[3])/2,"#8a7a5c",10,160),n.walls.delete(e),n.breachT[e]=n.t,n.nav.stamp++,n.events.push({type:"wallDown",x:(r[0]+r[2])/2,y:(r[1]+r[3])/2}),!0}return!1}function zr(n,e,t){let i=n.structures.get(e);return i?(i.hp-=t,i.hitT=n.t,i.hp<=0?(n.structures.delete(e),n.breachT[e]=n.t,ma(n,e),n.nav.stamp++,!0):!1):!1}function _s(n,e,t,i){let s=n.deploys.get(e);return s?(s.hp-=t,s.hitT=n.t,s.hp<=0?(ah(n,e,s,i),!0):!1):!1}function ah(n,e,t,i){let[s,r]=e.split(",").map(Number),o=ct(s,r);if(Ff(n,o.x,o.y,t),n.deploys.delete(e),n.nav.stamp++,ft(n,o.x,o.y,"#caa24a",14,220),t.type==="cupboard"){if(He(n,o.x,o.y,"TC destroyed!","#ff7a4a"),n.metrics.tcKilled++,t.owner===Ye)for(let l of["wood","stone","metal"])n.inv[l]>0;lh(n,t.owner,o.x,o.y);let a=kf(n,t.owner);if(a){let l=a.bases.find(c=>c.tcKey===e);l&&(l.dead=!0)}}}function lh(n,e,t,i){for(let[s,r]of[...n.walls]){if(r.owner!==e)continue;let o=Ft(s,r);ee((o[0]+o[2])/2,(o[1]+o[3])/2,t,i)<560&&n.walls.delete(s)}for(let[s,r]of[...n.structures]){if(r.owner!==e)continue;let[o,a]=s.split(",").map(Number),l=ct(o,a);ee(l.x,l.y,t,i)<560&&(n.structures.delete(s),ft(n,l.x,l.y,"#6b5a40",3,120))}for(let[s,r]of[...n.deploys]){if(r.owner!==e||r.type==="cupboard")continue;let[o,a]=s.split(",").map(Number),l=ct(o,a);ee(l.x,l.y,t,i)<560&&n.deploys.delete(s)}n.nav.stamp++}function ma(n,e){let[t,i]=e.split(",").map(Number);for(let s of[Ne("D",t,i)])n.walls.delete(s);for(let s of[Ne("V",t,i),Ne("V",t+1,i),Ne("H",t,i),Ne("H",t,i+1)])n.walls.has(s)&&!Bf(n,s)&&n.walls.delete(s)}function Q0(n,e,t){let i={};for(let s in n.cost)i[s]=Math.max(1,Math.ceil(n.cost[s]*t));return(e.mat==="stone"||e.mat==="metal")&&(i.stone=(i.stone||0)+Math.ceil(15*t)),e.mat==="metal"&&(i.metal=(i.metal||0)+Math.ceil(20*t)),i}function Vf(n,e,t,i,s=oa){if(e.hp>=e.max||n.t-e.hitT<s)return!1;let r=Math.min(e.max-e.hp,e.max*.2),o=r/e.max;return Cn.pay(i,Q0(t,e,o))?(e.hp+=r,!0):!1}function Gf(n,e){if(n.decayT=(n.decayT||0)+e,n.decayT<.5)return;let t=n.decayT;n.decayT=0;let i=[];for(let[r,o]of n.deploys){if(o.type!=="cupboard")continue;let[a,l]=r.split(",").map(Number);i.push({key:r,d:o,...ct(a,l),n:0})}let s=(r,o,a)=>{let l=r.split(","),c=+l[l.length-2],d=+l[l.length-1],h=ct(c,d),f=null,u=zt*zt;for(let p of i){let x=me(h.x,h.y,p.x,p.y);x<u&&(u=x,f=p)}if(f){if(f.n++,f.d.store.wood+f.d.store.stone+f.d.store.metal>0)return;let x=Math.sqrt(u)/zt,m=Kc+(gf-Kc)*x;o.hp-=o.max*(t/m)}else o.hp-=o.max*(t/mf);o.hp<=0&&(a?(n.walls.delete(r),n.nav.stamp++):(n.structures.delete(r),ma(n,r),n.nav.stamp++))};for(let[r,o]of[...n.walls])s(r,o,!0);for(let[r,o]of[...n.structures])s(r,o,!1);for(let r of i){let o=r.n*Dr*t;for(let a of["wood","stone","metal"]){if(o<=0)break;let l=Math.min(o,r.d.store[a]);r.d.store[a]-=l,o-=l}}}function ga(n,e,t,i){let s=Math.floor(t/64),r=Math.floor(i/64),o=e.owner;for(let p=0;p<3;p++)for(let x=0;x<3;x++)n.structures.set(Je(s+x,r+p),{type:"floor",mat:"wood",hp:100,max:100,owner:o,hitT:-100});let a=p=>n.walls.set(p,{type:"wall",mat:"wood",hp:100,max:100,owner:o,hitT:-100,open:!1}),l=p=>n.walls.set(p,{type:"door",mat:"wood",hp:50,max:50,owner:o,hitT:-100,open:!1,lock:{by:o}});for(let p=0;p<3;p++)a(Ne("H",s+p,r));a(Ne("H",s,r+3)),a(Ne("H",s+2,r+3)),l(Ne("H",s+1,r+3));for(let p=0;p<3;p++)a(Ne("V",s,r+p)),a(Ne("V",s+3,r+p));let c=s+1,d=r+1;l(Ne("H",c,d)),a(Ne("V",c,d)),a(Ne("V",c+1,d)),l(Ne("H",c,d+1));let h=Je(c,d);if(n.deploys.set(h,{type:"cupboard",mat:"wood",hp:300,max:300,owner:o,hitT:-100,lock:{by:o},store:{wood:200+n.rng.randi(20,70),stone:0,metal:n.rng.randi(0,40),scrap:0}}),n.deploys.set(Je(s+2,r),{type:"turret",mat:"wood",hp:150,max:150,owner:o,hitT:-100,tier:e.hard?3:e.weak?1:2,angle:0,cd:0,mag:12,reload:0,ext:!1,scanT:n.rng.rand(.5,4.5)}),e.hard)for(let[,p]of n.walls)p.owner===o&&p.mat==="wood"&&(p.mat="metal",p.max=Ei(Qt[p.type],"metal"),p.hp=p.max);let f=ct(c,d),u={owner:o,tcKey:h,hx:f.x,hy:f.y,doorX:(s+1)*64+64/2,doorY:(r+3)*64,doorGy:r+3,kind:"home",dead:!1,cleared:!1};return e.bases.push(u),ch(n,e,u),n.nav.stamp++,u}function xa(n,e,t,i){let s=1e9,r=1e9,o=-1e9,a=-1e9,l=!1;for(let[c,d]of n.structures){if(d.owner!==e)continue;let[h,f]=c.split(",").map(Number),u=ct(h,f);me(u.x,u.y,t,i)>zt*zt||(l=!0,s=Math.min(s,h),o=Math.max(o,h),r=Math.min(r,f),a=Math.max(a,f))}return l?{minx:s,miny:r,maxx:o,maxy:a}:null}function ch(n,e,t){let i=xa(n,e.owner,t.hx,t.hy);if(!i)return;let s=Math.floor((i.minx+i.maxx)/2),r=Math.floor((i.miny+i.maxy)/2),o=[Ne("H",s,i.miny),Ne("H",s,i.maxy+1),Ne("V",i.minx,r),Ne("V",i.maxx+1,r)];for(let a of o){let l=n.walls.get(a);l&&l.owner===e.owner&&l.type==="wall"&&l.hp>0&&(l.type="door",l.lock={by:e.owner},l.open=!1)}n.nav.stamp++}function Hr(n,e,t){let i=e.owner,s=Ne("H",Math.floor(t.doorX/64),t.doorGy);for(let[r,o]of n.structures){if(o.owner!==i)continue;let[a,l]=r.split(",").map(Number),c=ct(a,l);if(me(c.x,c.y,t.hx,t.hy)>zt*zt)continue;let d=[[Ne("V",a,l),Je(a-1,l)],[Ne("V",a+1,l),Je(a+1,l)],[Ne("H",a,l),Je(a,l-1)],[Ne("H",a,l+1),Je(a,l+1)]];for(let[h,f]of d){let u=n.structures.get(f);if(u&&u.owner===i||h===s)continue;let p=n.walls.get(h);if(!p||p.hp<=0)return h}}return null}function hh(n,e,t,i){return n.t-(n.breachT[t]||-1e9)<pf||!Cn.pay(i,{wood:40})?!1:(n.walls.set(t,{type:"wall",mat:"wood",hp:100,max:100,owner:e.owner,hitT:-100,open:!1}),n.nav.stamp++,!0)}function ya(n,e,t){let i=null,s=.6;for(let[r,o]of n.walls){if(o.owner!==e.owner||o.type==="door"||o.hp<=0||n.t-o.hitT<oa)continue;let a=Ft(r,o);if(me((a[0]+a[2])/2,(a[1]+a[3])/2,t.hx,t.hy)>zt*zt)continue;let l=o.hp/o.max;l<s&&(s=l,i=r)}return i}function Wf(n,e,t,i){let s=n.walls.get(t);if(!s||n.t-s.hitT<oa)return!1;let r=s.mat==="metal"?{metal:8}:s.mat==="stone"?{stone:8}:{wood:12};return Cn.pay(i,r)?(s.hp=Math.min(s.max,s.hp+s.max*.5),!0):!1}function Ln(n,e){n.bullets.push({x:e.x,y:e.y,px:e.x,py:e.y,vx:Math.cos(e.angle)*e.speed,vy:Math.sin(e.angle)*e.speed,life:e.life,dmg:e.dmg,from:e.from,col:e.col||null,turret:!!e.turret,enemy:e.from!==Ye,bounces:0,ricochet:!1,dist:0})}function Vr(n,e,t,i,s){let r=ln.rocket;n.rockets.push({x:e,y:t,vx:Math.cos(i)*r.speed,vy:Math.sin(i)*r.speed,life:r.range,w:r,smoke:0,from:s}),n.events.push({type:"rocketLaunch",x:e,y:t})}var eg=(n,e,t)=>e*(1-Qc(t?n.player.facemask:n.player.bodyArmor,t?"head":"body")),tg=(n,e,t)=>e*(1-Qc(t?n.facemask:n.bodyArmor,t?"head":"body"));function vs(n,e,t,i,s){let r=n.player;if(!(r.dead||r.invuln>0||n.ghost||Mt(n,r.x,r.y))){if(r.health-=e,r.regenDelay=4.5,r.hurt=.28,s&&(r.lastHitBy=s),t!==void 0){let o=Math.max(1,ee(t,i,r.x,r.y));r.x+=(r.x-t)/o*7,r.y+=(r.y-i)/o*7}ft(n,r.x,r.y,"#9e2b1e",6,160),r.health<=0&&Gr(n)}}function Gr(n,e){let t=n.player;if(t.dead)return;t.dead=!0,t.deadT=e?4:2.2,n.deathMark={x:t.x,y:t.y},ua(n,t.lastHitBy);for(let a of["wood","stone","metal"])cn(n,t.x,t.y,a,n.inv[a]),n.inv[a]=0;let i=0;for(let a in n.weapons)a!=="rocket"&&(i+=n.weapons[a].ammo+n.weapons[a].reserve,n.weapons[a].ammo=0,n.weapons[a].reserve=0);let s=Math.min(8,Math.ceil(i/30));for(let a=0;a<s;a++)At(n,t.x,t.y,"ammo",Math.ceil(i/Math.max(1,s)));let r=n.weapons.rocket,o=Math.min(12,r.ammo+r.reserve);r.ammo=0,r.reserve=0;for(let a=0;a<o;a++)At(n,t.x,t.y,"rocket",1);n.events.push({type:"playerDie",x:t.x,y:t.y})}function Ms(n,e,t,i,s,r){e.dead||e.flying||e.eliminated||Mt(n,e.x,e.y)||(e.hp-=t,ft(n,e.x,e.y,"#9e2b1e",4,150),e.regenT=4,e.lastHitBy=r||null,i!==void 0&&(e.threatX=i,e.threatY=s,e.retaliateT=2.2),e.hp<=0&&fh(n,e))}function fh(n,e){if(e.dead)return;e.dead=!0,e.respawnT=15,e.flying=!1,e.aboard=null;for(let s of["wood","stone","metal"])cn(n,e.x,e.y,s,e.inv[s]),e.inv[s]=0;let t=Math.min(12,e.rockets);e.rockets=0;for(let s=0;s<t;s++)At(n,e.x,e.y,"rocket",1);let i=Math.min(6,e.grenades);e.grenades=0;for(let s=0;s<i;s++)At(n,e.x,e.y,"rocket",1);At(n,e.x,e.y,"ammo",n.rng.randi(24,60)),e.gun!=="pistol"&&(At(n,e.x,e.y,"gun",1,e.gun),e.gun="pistol"),e.scrap>0&&(cn(n,e.x,e.y,"scrap",e.scrap),e.scrap=0),e.id===n.bounty&&e.lastHitBy===Ye&&(n.inv.scrap+=jc,He(n,e.x,e.y,"+"+jc+" bounty!","#ffd76b"),n.bounty=null),ua(n,e.lastHitBy),ft(n,e.x,e.y,"#9e2b1e",14,220),He(n,e.x,e.y,"down","#e2664a")}function Xf(n,e,t,i){e.dead||(e.hp-=t,ft(n,e.x,e.y,"#9e2b1e",5,140),e.hp<=0&&(e.dead=!0,e.respawnT=82,ft(n,e.x,e.y,"#9e2b1e",20,220),cn(n,e.x,e.y,"scrap",n.rng.randi(4,9)),At(n,e.x,e.y,"ammo",n.rng.randi(12,26)),i===Ye?(n.inv.scrap+=8,He(n,e.x,e.y,"+8 guard","#ffe07a")):(He(n,e.x,e.y,"guard down","#e2664a"),ua(n,i))))}function _a(n,e,t,i,s,r){if(!e.dead){if(e.hp-=t,e.hit=.12,i!==void 0){let o=Math.max(1,ee(i,s,e.x,e.y)),a=Math.min(16,t*.4);e.x+=(e.x-i)/o*a,e.y+=(e.y-s)/o*a}if(e.foe=r||e.foe,e.aggro=e.aggro||"hit",He(n,e.x,e.y-e.r,"-"+Math.round(t),"#e8b06a"),e.hp<=0){e.dead=!0,e.respawnT=n.rng.rand(11,18),ft(n,e.x,e.y,"#9e2b1e",12,200);let o=ys[e.type];o&&o.loot&&At(n,e.x,e.y,o.loot[0],n.rng.randi(o.loot[1],o.loot[2])),He(n,e.x,e.y,(o?e.type:"animal")+" down","#caa46a")}}}function qf(n,e,t,i){if(e.hp-=t,e.hp>0){ft(n,e.x,e.y,"#d2664a",3,120);return}ft(n,e.x,e.y,e.crate?"#caa15f":"#d2664a",14,230),e.tier==="mon"?(cn(n,e.x,e.y,"scrap",n.rng.randi(e.crate?22:12,e.crate?42:26)),At(n,e.x,e.y,"ammo",n.rng.randi(45,85)),e.respawnT=82):e.tier==="road"?(cn(n,e.x,e.y,"scrap",n.rng.randi(8,16)),At(n,e.x,e.y,"ammo",n.rng.randi(16,34)),e.respawnT=22):(cn(n,e.x,e.y,"scrap",n.rng.randi(3,7)),cn(n,e.x,e.y,"metal",n.rng.randi(2,5)),e.respawnT=22),e.hp=0}function ng(n,e){let t=Math.floor(e.x/64),i=Math.floor(e.y/64),s=[Ne("V",t,i),Ne("V",t+1,i),Ne("H",t,i),Ne("H",t,i+1),Ne("D",t,i)];for(let o of s){let a=n.walls.get(o);if(!a||a.hp<=0||a.type==="door"&&a.open)continue;let l=Ft(o,a);if(oi(e.px,e.py,e.x,e.y,l[0],l[1],l[2],l[3])||Et(e.x,e.y,l[0],l[1],l[2],l[3])<10)return ig(n,a)!==e.from&&Xs(n,o,Math.max(1,Math.round(e.dmg*.1)),e.from),{kind:"wall",key:o,w:a}}let r=n.deploys.get(Je(t,i));if(r&&r.owner!==e.from){let o=ct(t,i);if(!Ht(n,e.px,e.py,o.x,o.y)){let a=r.type==="cupboard"?.05:.25;_s(n,Je(t,i),Math.max(1,Math.round(e.dmg*a)),e.from)}return{kind:"deploy",key:Je(t,i),d:r}}return null}var ig=(n,e)=>e.owner;function sg(n,e,t){if(t&&t.kind==="wall"){let i=t.key.split(",");if(i[0]==="V")return{x:1,y:0};if(i[0]==="H")return{x:0,y:1};let s=Ft(t.key,t.w),r=s[2]-s[0],o=s[3]-s[1],a=Math.hypot(r,o);return{x:-o/a,y:r/a}}if(t&&t.cx!==void 0){let i=Math.max(1,ee(e.px,e.py,t.cx,t.cy));return{x:(e.px-t.cx)/i,y:(e.py-t.cy)/i}}return{x:0,y:1}}function rg(n,e,t,i){if(e.bounces>=2||!n.rng.chance(i))return!1;let s=sg(n,e,t);s.x*(e.px-e.x)+s.y*(e.py-e.y)<0&&(s.x=-s.x,s.y=-s.y);let r=e.vx*s.x+e.vy*s.y,o=e.vx-2*r*s.x,a=e.vy-2*r*s.y,l=n.rng.rand(-.45,.45),c=Math.cos(l),d=Math.sin(l),h=o*c-a*d,f=o*d+a*c,u=Math.hypot(h,f);return h*s.x+f*s.y>=.05*u&&(o=h,a=f),e.vx=o*.6,e.vy=a*.6,e.x=e.px+s.x*6,e.y=e.py+s.y*6,e.dmg=Math.max(1,Math.round(e.dmg*.6)),e.bounces++,e.ricochet=!0,e.col="ricochet",ft(n,e.x,e.y,"#86d8ff",4,180),!0}function Yf(n,e){let t=n.player;for(let i=n.bullets.length-1;i>=0;i--){let s=n.bullets[i];if(s.px=s.x,s.py=s.y,s.ricochet){let l=Math.pow(.3,e);if(s.vx*=l,s.vy*=l,Math.hypot(s.vx,s.vy)<150){n.bullets.splice(i,1);continue}}if(s.x+=s.vx*e,s.y+=s.vy*e,s.dist+=Math.hypot(s.vx,s.vy)*e,s.life-=e,s.life<=0||s.x<0||s.y<0||s.x>ue.w||s.y>ue.h||s.dist>3400){n.bullets.splice(i,1);continue}let r=!1,o=null;if(sh(n,(s.px+s.x)/2,(s.py+s.y)/2,Math.abs(s.x-s.px)+Math.abs(s.y-s.py)+12,(l,c)=>{if(c.type==="door"&&c.open)return!1;let d=Ft(l,c);if(oi(s.px,s.py,s.x,s.y,d[0],d[1],d[2],d[3]))return o={kind:"wall",key:l,w:c},!0}),!o&&Or(n,s.x,s.y)){let l=Math.floor(s.x/64),c=Math.floor(s.y/64),d=n.deploys.get(Je(l,c));if(!(d&&d.type==="turret"&&d.owner===s.from)){let h=ct(l,c);o={kind:"solid",key:Je(l,c),d,cx:h.x,cy:h.y}}}let a=null;if(!o){for(let l of n.world.boulders)if(Et(l.x,l.y,s.px,s.py,s.x,s.y)<l.r){a={cx:l.x,cy:l.y};break}}if(o||a){o&&ng(n,s),rg(n,s,o||a,a?.8:.15)||(ft(n,s.px,s.py,"#bfb49a",3,110),n.bullets.splice(i,1));continue}for(let l=n.fences.length-1;l>=0;l--){let c=n.fences[l];if(oi(s.px,s.py,s.x,s.y,c.x0,c.y0,c.x1,c.y1)||Et(s.x,s.y,c.x0,c.y0,c.x1,c.y1)<5){Zf(n,c,s.dmg),r=!0;break}}if(r){n.bullets.splice(i,1);continue}for(let l of n.barrels)if(!(l.hp<=0)&&me(s.x,s.y,l.x,l.y)<(l.r+2)*(l.r+2)){qf(n,l,s.dmg,s.from),r=!0;break}if(r){n.bullets.splice(i,1);continue}if(n.patrol&&s.from!=="patrol"&&Et(n.patrol.x,n.patrol.y,s.px,s.py,s.x,s.y)<34){n.patrol.hp-=s.dmg,ft(n,s.x,s.y,"#aab1b8",2,120),n.bullets.splice(i,1);continue}if(n.airdrop&&n.airdrop.fall>=1&&Et(n.airdrop.x,n.airdrop.y,s.px,s.py,s.x,s.y)<22){n.airdrop.hp-=s.dmg,n.bullets.splice(i,1);continue}for(let l of n.animals)if(!l.dead&&Et(l.x,l.y,s.px,s.py,s.x,s.y)<l.r+2){_a(n,l,s.dmg,s.px,s.py,s.from),r=!0;break}if(r){n.bullets.splice(i,1);continue}if(s.from!=="guard"){for(let l of n.guards)if(!l.dead&&Et(l.x,l.y,s.px,s.py,s.x,s.y)<Xt.r+2){let c=pa(l.x,l.y,s);Xf(n,l,s.dmg*(c?aa:1),s.from),c&&s.from===Ye&&He(n,l.x,l.y-14,"headshot","#ffe07a"),r=!0;break}}if(r){n.bullets.splice(i,1);continue}for(let l of n.units)if(!(l.dead||l.flying||l.eliminated||l.owner===s.from)&&Et(l.x,l.y,s.px,s.py,s.x,s.y)<14){let c=pa(l.x,l.y,s),d=s.dmg*(c?aa:1);d=tg(l,d,c);let h=s.px,f=s.py;Ms(n,l,d,h,f,s.from),c&&s.from===Ye&&He(n,l.x,l.y-14,"headshot","#ffe07a"),r=!0;break}if(r){n.bullets.splice(i,1);continue}for(let l of n.transports)if(!(l.destroyed||l.owner===s.from)&&Et(l.x,l.y,s.px,s.py,s.x,s.y)<Zt.r+2){l.hp-=s.dmg,l.hp<=0&&(l.destroyed=!0),r=!0;break}if(r){n.bullets.splice(i,1);continue}for(let l of n.convoys){if(s.from==="convoy")break;if(!l.dead&&Et(l.x,l.y,s.px,s.py,s.x,s.y)<26){l.hp-=s.dmg,r=!0;break}for(let c of l.guards)if(!c.dead&&Et(c.x,c.y,s.px,s.py,s.x,s.y)<14){c.hp-=s.dmg,c.hp<=0&&(c.dead=!0,At(n,c.x,c.y,"ammo",n.rng.randi(6,12))),r=!0;break}if(r)break}if(r){n.bullets.splice(i,1);continue}if(s.from!==Ye&&!t.dead&&!t.inCopter&&!n.ghost&&Et(t.x,t.y,s.px,s.py,s.x,s.y)<18){let l=pa(t.x,t.y,s);vs(n,eg(n,s.dmg*(l?aa:1),l),s.px,s.py,s.from),n.bullets.splice(i,1);continue}}}function Zf(n,e,t){e.hp-=t,e.hp<=0?(ft(n,e.x,e.y,"#caa46a",14,200),n.fences.splice(n.fences.indexOf(e),1),n.needFenceRefresh=!0):ft(n,e.x,e.y,"#d8b888",3,120)}function uh(n,e,t,i,s){let r=i.splash,o=i.splashDmg,a=i.structDmg||i.splashDmg;ft(n,e,t,"#ffb24a",22,320),ft(n,e,t,"#5a534a",12,200),n.flashes.push({x:e,y:t,r,life:.25,max:.25}),n.scorch.push({x:e,y:t,r:r*.66}),n.scorch.length>36&&n.scorch.shift(),n.events.push({type:"explosion",x:e,y:t,r}),n.shake=Math.max(n.shake,16);let l=i===ln.rocket||i.structDmg===50;if(l&&s!==Ye){let h=!1;for(let[f,u]of n.structures)if(u.owner===Ye){let[p,x]=f.split(",").map(Number),m=ct(p,x);if(me(e,t,m.x,m.y)<(r+64)*(r+64)){h=!0;break}}h&&(n.raidAlarm={x:e,y:t,t:1.5})}if(l){let h=og(n,e,t,r+128);h&&h!==s&&Of(n,e,t,"raid_"+h)}for(let[h,f]of[...n.structures]){let[u,p]=h.split(",").map(Number),x=ct(u,p),m=ee(e,t,x.x,x.y);m>r+32||f.owner===s||zr(n,h,a*(1-m/(r+32)))}for(let[h,f]of[...n.walls]){if(f.owner===s)continue;let u=Ft(h,f),p=Et(e,t,u[0],u[1],u[2],u[3]);p>r||Xs(n,h,a*(1-p/r),s)}for(let[h,f]of[...n.deploys]){if(f.owner===s)continue;let[u,p]=h.split(",").map(Number),x=ct(u,p),m=ee(e,t,x.x,x.y);m>r+25.6||Ht(n,e,t,x.x,x.y)||_s(n,h,o*(1-m/(r+25.6)),s)}for(let h of n.animals){if(h.dead)continue;let f=ee(e,t,h.x,h.y);f<r+h.r&&_a(n,h,o*(1-f/(r+h.r)),e,t,s)}for(let h of n.guards){if(h.dead)continue;let f=ee(e,t,h.x,h.y);f<r+14&&Xf(n,h,o*(1-f/(r+14)),s)}for(let h of n.convoys){let f=ee(e,t,h.x,h.y);!h.dead&&f<r+26&&(h.hp-=o*1.5*(1-f/(r+26)));for(let u of h.guards){if(u.dead)continue;let p=ee(e,t,u.x,u.y);p<r+14&&(u.hp-=o*(1-p/(r+14)),u.hp<=0&&(u.dead=!0,At(n,u.x,u.y,"ammo",n.rng.randi(6,12))))}}for(let h of n.barrels){if(h.hp<=0)continue;let f=ee(e,t,h.x,h.y);f<r+h.r&&qf(n,h,o*(1-f/(r+h.r)),s)}for(let h=n.fences.length-1;h>=0;h--){let f=n.fences[h],u=ee(e,t,f.x,f.y);u<r+23&&Zf(n,f,o*(1-u/(r+23)))}let c=n.player;if(!c.dead&&!c.inCopter){let h=ee(e,t,c.x,c.y);if(h<r+16){let f=1-h/(r+16);s===Ye?n.ghost||(c.health-=Math.round(o*.45*f),c.regenDelay=4.5,c.hurt=.28,c.health<=0&&Gr(n)):vs(n,Math.round(o*.45*f),e,t,s)}}for(let h of n.units){if(h.dead||h.eliminated||h.owner===s)continue;let f=ee(e,t,h.x,h.y);f<r+14&&Ms(n,h,o*.8*(1-f/(r+14)),e,t,s)}let d=(h,f,u)=>{if(!h||h.destroyed||f===s)return;let p=ee(e,t,h.x,h.y);p<r+30&&ag(n,h,o*(1-p/(r+30)),u)};d(n.copter,Ye,!0);for(let h of n.units)d(h.copter,h.owner,!1,h);for(let h of n.transports){if(h.destroyed||h.owner===s)continue;let f=ee(e,t,h.x,h.y);f<r+Zt.r&&(h.hp-=o*(1-f/(r+Zt.r)),h.hp<=0&&(h.destroyed=!0))}if(i.rocket&&n.rng.chance(.25)&&$f(n,e,t),n.patrol){let h=ee(e,t,n.patrol.x,n.patrol.y);h<r+34&&(n.patrol.hp-=o*(1-h/(r+34)))}}function og(n,e,t,i){for(let[s,r]of n.structures){let[o,a]=s.split(",").map(Number),l=ct(o,a);if(me(e,t,l.x,l.y)<i*i)return r.owner}for(let[s,r]of n.walls){let o=Ft(s,r);if(Et(e,t,o[0],o[1],o[2],o[3])<i)return r.owner}return null}function ag(n,e,t,i,s){e.hp-=t,!(e.hp>0||e.destroyed)&&(e.destroyed=!0,ph(n,e.x,e.y),i&&n.player.inCopter&&(n.player.inCopter=!1,n.player.health=0,Gr(n)))}function ph(n,e,t){ft(n,e,t,"#ffb24a",30,340),ft(n,e,t,"#5a534a",18,240),n.flashes.push({x:e,y:t,r:96,life:.25,max:.25}),n.scorch.push({x:e,y:t,r:52}),n.scorch.length>36&&n.scorch.shift(),n.wrecks.push({x:e,y:t,t:15}),n.wrecks.length>24&&n.wrecks.shift(),n.shake=Math.max(n.shake,15),n.events.push({type:"explosion",x:e,y:t,r:96})}function $f(n,e,t){n.fires.length>=80||n.fires.push({x:e,y:t,r:36,life:30,max:30,dmgT:0,spread:0,spreadT:n.rng.rand(3,7)})}function Kf(n,e){for(let t=n.fires.length-1;t>=0;t--){let i=n.fires[t];if(i.life-=e,i.life<=0){n.fires.splice(t,1);continue}if(i.dmgT-=e,i.dmgT<=0){i.dmgT=.3;for(let[r,o]of[...n.structures]){let[a,l]=r.split(",").map(Number),c=ct(a,l);me(i.x,i.y,c.x,c.y)<i.r*i.r&&zr(n,r,22*.3)}for(let[r,o]of[...n.walls]){let a=Ft(r,o);Et(i.x,i.y,a[0],a[1],a[2],a[3])<i.r&&Xs(n,r,18*.3,"fire")}let s=n.player;!s.dead&&me(i.x,i.y,s.x,s.y)<(i.r+16)*(i.r+16)&&vs(n,15*.3,void 0,void 0,"fire");for(let r of n.units)r.dead||r.eliminated||me(i.x,i.y,r.x,r.y)<(i.r+12)*(i.r+12)&&Ms(n,r,15*.3)}if(i.spreadT-=e,i.spreadT<=0&&i.spread<3&&(i.spreadT=n.rng.rand(4,8),n.rng.chance(.25))){let s=null,r=(i.r+64)*(i.r+64);for(let[o,a]of n.structures){let[l,c]=o.split(",").map(Number),d=ct(l,c),h=me(i.x,i.y,d.x,d.y);h<r&&!Ht(n,i.x,i.y,d.x,d.y)&&(r=h,s=d)}s&&($f(n,s.x,s.y),i.spread++)}n.rng.chance(.3)&&n.particles.push({x:i.x+n.rng.rand(-10,10),y:i.y+n.rng.rand(-10,10),vx:n.wind*8,vy:-n.rng.rand(20,50),life:n.rng.rand(.6,1.4),max:1.4,r:n.rng.rand(2,5),col:"rgba(60,56,50,0.5)"})}}function Jf(n,e){for(let t=n.satchels.length-1;t>=0;t--){let i=n.satchels[t];i.t-=e,i.t<=0&&(n.satchels.splice(t,1),uh(n,i.x,i.y,{splash:88,splashDmg:120,structDmg:50},i.from))}}function jf(n,e){for(let t=n.grenades.length-1;t>=0;t--){let i=n.grenades[t],s=i.x,r=i.y,o=Math.pow(.9,e*60);i.vx*=o,i.vy*=o,i.x=it(i.x+i.vx*e,8,ue.w-8),i.y=it(i.y+i.vy*e,8,ue.h-8),i.bob+=e,i.t-=e,Ht(n,s,r,i.x,i.y)&&(i.x=s,i.y=r,i.t=0),i.t<=0&&(n.grenades.splice(t,1),uh(n,i.x,i.y,zs,i.from))}}function Qf(n,e){for(let t=n.rockets.length-1;t>=0;t--){let i=n.rockets[t],s=i.x,r=i.y;i.x+=i.vx*e,i.y+=i.vy*e,i.life-=e,i.smoke-=e,i.smoke<=0&&(i.smoke=.016,n.particles.push({x:i.x,y:i.y,vx:n.rng.rand(-12,12),vy:n.rng.rand(-12,12),life:.5,max:.5,r:n.rng.rand(2,4),col:"rgba(120,114,104,0.5)"}));let o=i.life<=0||i.x<4||i.y<4||i.x>ue.w-4||i.y>ue.h-4;if(!o&&(Or(n,i.x,i.y)||rh(n,i.x,i.y,2))&&(o=!0),!o&&Ht(n,s,r,i.x,i.y)&&(o=!0,i.x=s,i.y=r),!o){for(let a of n.animals)if(!a.dead&&me(i.x,i.y,a.x,a.y)<(a.r+3)*(a.r+3)){o=!0;break}}if(!o){for(let a of n.barrels)if(a.hp>0&&me(i.x,i.y,a.x,a.y)<(a.r+3)*(a.r+3)){o=!0;break}}if(!o){let a=(l,c)=>l&&!l.destroyed&&c!==i.from&&me(i.x,i.y,l.x,l.y)<1089;if(a(n.copter,Ye)&&(o=!0),!o){for(let l of n.units)if(a(l.copter,l.owner)){o=!0;break}}}o&&(n.rockets.splice(t,1),uh(n,i.x,i.y,i.w,i.from))}}function eu(n,e){for(let[t,i]of n.deploys){if(i.type!=="turret")continue;let[s,r]=t.split(",").map(Number),o=ct(s,r),a=la[i.tier||1];if(n.tick%30===0&&(i.tcOk=lg(n,i.owner)),i.tcOk===!1)continue;i.cd=Math.max(0,(i.cd||0)-e),i.reload>0&&(i.reload-=e,i.reload<=0&&(i.mag=a.mag)),i.targT=(i.targT||0)-e;let l=i.tgt||null;if(l){let c=l.ref;!c||c.dead||c.flying||c.eliminated||c===n.player&&(n.ghost||c.inCopter)||me(o.x,o.y,c.x,c.y)>a.range*a.range*1.2?(l=null,i.tgt=null):(l.x=c.x,l.y=c.y,l.vx=c.vx||0,l.vy=c.vy||0)}if(i.targT<=0){i.targT=.12;let c=a.range*a.range;l=null;let d=(f,u,p,x,m)=>{let g=me(o.x,o.y,f,u);g<c&&!hg(n,i.owner,o.x,o.y,f,u)&&(c=g,l={x:f,y:u,vx:p||0,vy:x||0,ref:m})};for(let f of n.animals)!f.dead&&me(o.x,o.y,f.x,f.y)<c&&d(f.x,f.y,f.vx,f.vy,f);for(let f of n.units)!f.dead&&!f.flying&&!f.eliminated&&f.owner!==i.owner&&d(f.x,f.y,f.vx,f.vy,f);let h=n.player;i.owner!==Ye&&!h.dead&&!h.inCopter&&!n.ghost&&d(h.x,h.y,h.vx,h.vy,h),i.tgt=l}if(l){let c=ee(o.x,o.y,l.x,l.y),d=Math.min(.45,c/a.speed)*a.lead,h=Math.atan2(l.y+l.vy*d-o.y,l.x+l.vx*d-o.x),f=(i.tier===3?16:10)*e;if(i.angle=dh(i.angle,h,f),Math.abs(tu(i.angle,h))<.22&&i.cd<=0&&i.reload<=0)if(i.mag<=0)i.reload=a.reload;else{i.mag--,i.cd=a.rof;let u=i.angle+n.rng.rand(-a.spread,a.spread);Ln(n,{x:o.x+Math.cos(i.angle)*eh,y:o.y+Math.sin(i.angle)*eh,angle:u,speed:a.speed,dmg:a.dmg,from:i.owner,life:a.range/a.speed+.1,turret:!0}),n.events.push({type:"turretFire",x:o.x,y:o.y,a:i.angle})}}else{if(n.tick%18===0||i.trk===void 0){let d=null,h=(a.range*2.2)**2;for(let f of n.units)if(!f.dead&&!f.eliminated&&f.owner!==i.owner){let u=me(o.x,o.y,f.x,f.y);u<h&&(h=u,d=f)}i.trk=d}let c=i.trk&&!i.trk.dead?i.trk:null;if(c)i.angle=dh(i.angle,Math.atan2(c.y-o.y,c.x-o.x),5*e);else{if(i.scanT-=e,i.scanT<=0){i.scanT=n.rng.rand(2.5,6.5);let d=cg(n,i.owner,o.x,o.y),h=d?Math.atan2(o.y-d.y,o.x-d.x):n.rng.rand(0,Xe);i.scanAim=h+n.rng.rand(-1.1,1.1)}i.scanAim!==void 0&&(i.angle=dh(i.angle,i.scanAim,1.6*e))}}}}function lg(n,e){for(let t of n.deploys.values())if(t.type==="cupboard"&&t.owner===e)return!0;return!1}function cg(n,e,t,i){let s=null,r=1e18;for(let[o,a]of n.deploys){if(a.type!=="cupboard"||a.owner!==e)continue;let[l,c]=o.split(",").map(Number),d=ct(l,c),h=me(t,i,d.x,d.y);h<r&&(r=h,s=d)}return s}function hg(n,e,t,i,s,r){let o=Math.min(t,s),a=Math.max(t,s),l=!1;return dg(n,t,i,s,r,(c,d)=>{if(d.owner===e||d.type==="door"&&d.open)return!1;let h=Ft(c,d);if(oi(t,i,s,r,h[0],h[1],h[2],h[3]))return l=!0,!0}),l}function dg(n,e,t,i,s,r){let o=Math.hypot(i-e,s-t),a=Math.max(1,Math.ceil(o/(64*.5))),l=new Set;for(let c=0;c<=a;c++){let d=c/a,h=Math.floor((e+(i-e)*d)/64),f=Math.floor((t+(s-t)*d)/64),u=h*10007+f;if(!l.has(u)){l.add(u);for(let p of[Ne("V",h,f),Ne("V",h+1,f),Ne("H",h,f),Ne("H",h,f+1),Ne("D",h,f)]){let x=n.walls.get(p);if(x&&x.hp>0&&r(p,x)===!0)return}}}}var dh=(n,e,t)=>{let i=tu(n,e);return Math.abs(i)<=t?e:n+Math.sign(i)*t},tu=(n,e)=>{let t=(e-n)%Xe;return t>Math.PI&&(t-=Xe),t<-Math.PI&&(t+=Xe),t};function nu(n,e){let t=n.player;for(let i=n.loot.length-1;i>=0;i--){let s=n.loot[i];s.life+=e,s.bob+=e;let r=Math.pow(.88,e*60);if(s.vx*=r,s.vy*=r,s.x+=s.vx*e,s.y+=s.vy*e,!t.dead&&!t.inCopter&&!n.ghost&&s.life>.35){let o=ee(t.x,t.y,s.x,s.y);if(o<150&&(s.x+=(t.x-s.x)/o*210*e,s.y+=(t.y-s.y)/o*210*e,o<20)){fg(n,s),n.loot.splice(i,1);continue}}if(s.life>.3){let o=null,a=32400;for(let l of n.units){if(l.dead||l.eliminated||l.flying)continue;let c=me(l.x,l.y,s.x,s.y);c<a&&(a=c,o=l)}if(o){let l=Math.sqrt(a)||1;if(s.x+=(o.x-s.x)/l*240*e,s.y+=(o.y-s.y)/l*240*e,l<22){ug(n,o,s),n.loot.splice(i,1);continue}}}s.life>120&&n.loot.splice(i,1)}}function fg(n,e){let t=n.weapons,i=n.player;if(e.kind==="ammo")t.rifle.reserve+=e.amt,t.pistol.reserve+=Math.ceil(e.amt*.4),t.shotgun.reserve+=Math.ceil(e.amt*.3),He(n,i.x,i.y-20,"+"+e.amt+" ammo","#ffe08a");else if(e.kind==="rocket")t.rocket.reserve+=e.amt,He(n,i.x,i.y-20,"+"+e.amt+" rocket","#ff9a5a");else if(e.kind==="satchel")n.inv.scrap+=e.amt*8,He(n,i.x,i.y-20,"+"+e.amt*8+" scrap","#d6dce0");else if(e.kind==="sniper")n.owned.sniper=!0,t.sniper.reserve+=12,He(n,i.x,i.y-20,"SNIPER unlocked!","#bfe3ff");else if(e.kind==="gun")e.gun&&n.owned[e.gun]!==void 0&&(n.owned[e.gun]=!0,t[e.gun].reserve+=e.gun==="hmg"?60:30,He(n,i.x,i.y-20,"+"+e.gun.toUpperCase(),"#bfe3ff"));else{n.inv[e.kind]=(n.inv[e.kind]||0)+e.amt;let s={wood:"#b98446",stone:"#aab1b8",metal:"#e8a24e",scrap:"#d6dce0"};He(n,i.x,i.y-20,"+"+e.amt+" "+e.kind,s[e.kind]||"#d8e0c2")}}function ug(n,e,t){if(t.kind==="scrap")e.scrap+=t.amt;else if(t.kind==="rocket")e.rockets+=t.amt;else if(t.kind==="satchel")e.satchels+=t.amt;else if(t.kind==="ammo")e.scrap+=Math.ceil(t.amt/8);else if(t.kind==="sniper")e.scrap+=30;else if(t.kind==="gun"){let i={pistol:1,shotgun:2,rifle:3,hmg:4};(i[t.gun]||0)>(i[e.gun]||0)?e.gun=t.gun:e.scrap+=10}else e.inv[t.kind]=(e.inv[t.kind]||0)+t.amt}function iu(n,e){for(let t=n.wrecks.length-1;t>=0;t--){let i=n.wrecks[t];if(i.t-=e,i.t<=0){n.wrecks.splice(t,1);continue}n.rng.chance(.25)&&n.particles.push({x:i.x+n.rng.rand(-12,12),y:i.y+n.rng.rand(-8,8),vx:n.wind*10,vy:-n.rng.rand(24,60),life:n.rng.rand(.7,1.6),max:1.6,r:n.rng.rand(2.5,6),col:"rgba(50,46,44,0.55)"})}}function su(n,e){let t=n.copter,i=n.player,s=n.cmd;if(!t||t.destroyed){i.inCopter=!1;return}s.left&&(t.angle-=_t.turn*e),s.right&&(t.angle+=_t.turn*e);let r=0;s.up?r=1:s.down&&(r=-.55);let o=s.run?_t.boost:_t.speed;t.vx+=Math.cos(t.angle)*_t.accel*r*e,t.vy+=Math.sin(t.angle)*_t.accel*r*e;let a=Math.pow(r!==0?_t.drag:_t.dragIdle,e);t.vx*=a,t.vy*=a;let l=Math.hypot(t.vx,t.vy);l>o&&(t.vx*=o/l,t.vy*=o/l),t.x+=t.vx*e,t.y+=t.vy*e,t.x<_t.r&&(t.x=_t.r,t.vx*=-.3),t.y<_t.r&&(t.y=_t.r,t.vy*=-.3),t.x>ue.w-_t.r&&(t.x=ue.w-_t.r,t.vx*=-.3),t.y>ue.h-_t.r&&(t.y=ue.h-_t.r,t.vy*=-.3),t.spd=Math.hypot(t.vx,t.vy),t.rotor+=e*(20+t.spd*.05),i.x=t.x,i.y=t.y,i.vx=t.vx,i.vy=t.vy}function ru(n,e,t){let i=n.world.shop,s={owner:e.owner,x:i.x,y:i.y+(i.r||120)+90,angle:0,vx:0,vy:0,rotor:0,hp:Zt.hp,max:Zt.hp,destroyed:!1,state:"idle",stateT:0,boardT:0,homeX:t.hx,homeY:t.hy,riders:[],destX:0,destY:0};return n.transports.push(s),He(n,s.x,s.y,"+transport heli","#bfe3ff"),s}function ou(n,e,t){return t.riders.length>=Zt.seats||t.state==="fly"||t.state==="unload"?!1:(e.aboard=t,e.flying=!0,e.wasRaid=!1,e.state="raid",t.riders.push(e),t.state==="idle"&&(t.state="board"),!0)}function mh(n,e,t,i,s){let r=ee(e.x,e.y,t,i),o=Math.atan2(i-e.y,t-e.x);e.angle=Ri(e.angle,o,s*3);let a=r>220?1:Math.max(.08,r/220);e.vx+=Math.cos(e.angle)*Zt.accel*a*s,e.vy+=Math.sin(e.angle)*Zt.accel*a*s;let l=Math.pow(Zt.drag,s);e.vx*=l,e.vy*=l;let c=Math.hypot(e.vx,e.vy);return c>Zt.speed&&(e.vx*=Zt.speed/c,e.vy*=Zt.speed/c),e.x=it(e.x+e.vx*s,Zt.r,ue.w-Zt.r),e.y=it(e.y+e.vy*s,Zt.r,ue.h-Zt.r),r}function au(n,e){for(let t=n.transports.length-1;t>=0;t--){let i=n.transports[t];if(i.hp<=0||i.destroyed){ph(n,i.x,i.y);for(let a of i.riders)a.aboard=null,a.flying=!1,a.x=i.x+n.rng.rand(-30,30),a.y=i.y+n.rng.rand(-30,30),fh(n,a);n.transports.splice(t,1);continue}i.riders=i.riders.filter(a=>!a.dead&&a.aboard===i),i.stateT+=e;let s=i.riders.length>0;(s||i.state==="fly"||i.state==="unload"||i.state==="return")&&(i.rotor+=e*40);let r=i.riders.length?i.riders[0].raid:null,o=r&&r.bases?r.bases.find(a=>!a.dead):null;if(i.state==="idle"||i.state==="board"){if(s&&o){if(i.boardT+=e,i.riders.length>=2||i.boardT>5){let a=ee(i.x,i.y,o.hx,o.hy),l=Math.max(0,(a-620)/Math.max(1,a));i.destX=i.x+(o.hx-i.x)*l,i.destY=i.y+(o.hy-i.y)*l,i.state="fly",i.stateT=0,i.boardT=0}}else s?mh(n,i,i.homeX-320,i.homeY,e):(i.vx=i.vy=0,i.boardT=0);for(let a of i.riders)a.x=i.x,a.y=i.y}else if(i.state==="fly"){let a=mh(n,i,i.destX,i.destY,e);for(let l of i.riders)l.x=i.x,l.y=i.y;(a<200||!o||i.stateT>16)&&(i.state="unload",i.stateT=0)}else if(i.state==="unload"){for(let a of i.riders){let l=i.x+n.rng.rand(-60,60),c=i.y+n.rng.rand(-60,60);for(let d=0;d<14&&Tt(n,l,c,12);d++){let h=n.rng.rand(0,Xe),f=n.rng.rand(40,150);l=i.x+Math.cos(h)*f,c=i.y+Math.sin(h)*f}a.x=it(l,12,ue.w-12),a.y=it(c,12,ue.h-12),a.aboard=null,a.flying=!1}i.riders=[],i.state="return",i.stateT=0}else i.state==="return"&&(mh(n,i,i.homeX-320,i.homeY,e)<160||i.stateT>16)&&(i.state="idle",i.vx=i.vy=0)}}function lu(n,e){if(n.world.rails.length&&(n.trainT-=e,n.trainT<=0&&n.trains.length<2)){n.trainT=n.rng.rand(30,90);let t=n.rng.pick(n.world.rails),s=n.rng.chance(.5)?t.pts:[...t.pts].reverse();n.trains.push({pts:s,seg:0,x:s[0].x,y:s[0].y,px:s[0].x,py:s[0].y,ang:0,speed:n.rng.rand(460,640),smokeT:0})}for(let t=n.trains.length-1;t>=0;t--){let i=n.trains[t];i.px=i.x,i.py=i.y;let s=i.speed*e;for(;s>0&&i.seg<i.pts.length-1;){let c=i.pts[i.seg],d=i.pts[i.seg+1],h=ee(c.x,c.y,d.x,d.y),f=ee(c.x,c.y,i.x,i.y),u=h-f;if(s<u){let p=(f+s)/h;i.x=c.x+(d.x-c.x)*p,i.y=c.y+(d.y-c.y)*p,s=0}else i.seg++,i.x=d.x,i.y=d.y,s-=u}i.ang=Math.atan2(i.y-i.py,i.x-i.px)||i.ang;let r=36,o=n.player;!o.dead&&!o.inCopter&&Et(o.x,o.y,i.px,i.py,i.x,i.y)<r&&vs(n,999,i.px,i.py,"train");for(let c of n.units)!c.dead&&!c.flying&&!c.eliminated&&Et(c.x,c.y,i.px,i.py,i.x,i.y)<r&&Ms(n,c,999,i.px,i.py,"train");for(let c of n.animals)!c.dead&&Et(c.x,c.y,i.px,i.py,i.x,i.y)<r&&(c.hp=0,c.dead=!0,c.respawnT=n.rng.rand(11,18));for(let c of n.barrels)c.hp>0&&Et(c.x,c.y,i.px,i.py,i.x,i.y)<r&&(c.hp=0);let a=ee(i.px,i.py,i.x,i.y),l=Math.max(1,Math.ceil(a/64));for(let c=0;c<=l;c++){let d=c/l,h=Math.floor((i.px+(i.x-i.px)*d)/64),f=Math.floor((i.py+(i.y-i.py)*d)/64);zr(n,h+","+f,9999),_s(n,h+","+f,9999,"train");for(let u of["V,"+h+","+f,"V,"+(h+1)+","+f,"H,"+h+","+f,"H,"+h+","+(f+1)])Xs(n,u,9999,"train")}if(i.smokeT-=e,i.smokeT<=0){i.smokeT=.28;let c=i.x+Math.cos(i.ang)*16,d=i.y+Math.sin(i.ang)*16;n.particles.push({x:c,y:d,vx:n.rng.rand(-7,7)+n.wind*5,vy:-n.rng.rand(6,16),life:n.rng.rand(11,15),max:15,r:n.rng.rand(5,10),col:"rgba(74,74,80,0.5)"}),n.particles.push({x:c,y:d,vx:n.rng.rand(-4,4),vy:-n.rng.rand(4,10),life:n.rng.rand(8,12),max:12,r:n.rng.rand(3,6),col:"rgba(40,40,46,0.45)"})}i.seg>=i.pts.length-1&&n.trains.splice(t,1)}for(let t of n.world.crossings)t.active=n.trains.some(i=>me(i.x,i.y,t.x,t.y)<820*820),t.gate+=((t.active?1:0)-t.gate)*Math.min(1,e*3)}function cu(n,e){n.convoys.length||(n.convoyT-=e,n.convoyT<=0&&pg(n));for(let t=n.convoys.length-1;t>=0;t--){let i=n.convoys[t];if(i.hp<=0&&!i.dead){i.dead=!0,ft(n,i.x,i.y,"#ffb24a",30,340),ft(n,i.x,i.y,"#ffe2a0",16,220),n.flashes.push({x:i.x,y:i.y,r:96,life:.25,max:.25}),n.shake=Math.max(n.shake,12),n.scorch.push({x:i.x,y:i.y,r:60}),n.scorch.length>36&&n.scorch.shift(),cn(n,i.x,i.y,"metal",n.rng.randi(50,90)),cn(n,i.x,i.y,"scrap",n.rng.randi(60,110)),At(n,i.x,i.y,"ammo",n.rng.randi(50,100));for(let c=0,d=n.rng.randi(3,5);c<d;c++)At(n,i.x,i.y,"rocket",1);for(let c=0,d=n.rng.randi(2,4);c<d;c++)At(n,i.x,i.y,"satchel",1);for(let c of i.guards)c.dead||At(n,c.x,c.y,"ammo",n.rng.randi(8,16));He(n,i.x,i.y,"convoy destroyed!","#ffd0a0"),n.events.push({type:"explosion",x:i.x,y:i.y,r:96}),n.convoys.splice(t,1);continue}i.px=i.x,i.py=i.y;let s=fn.speed*e;for(;s>0&&i.seg<i.pts.length-1;){let c=i.pts[i.seg],d=i.pts[i.seg+1],h=ee(c.x,c.y,d.x,d.y),f=ee(c.x,c.y,i.x,i.y),u=h-f;if(s<u){let p=(f+s)/h;i.x=c.x+(d.x-c.x)*p,i.y=c.y+(d.y-c.y)*p,s=0}else i.seg++,i.x=d.x,i.y=d.y,s-=u}if(i.ang=Math.atan2(i.y-i.py,i.x-i.px)||i.ang,i.seg>=i.pts.length-1){n.convoys.splice(t,1);continue}i.gunCd=Math.max(0,i.gunCd-e);let r=null,o=fn.trange,a=n.player;if(!a.dead&&!a.inCopter&&!n.ghost){let c=ee(i.x,i.y,a.x,a.y);c<o&&!Ht(n,i.x,i.y,a.x,a.y)&&!ai(n,i.x,i.y,a.x,a.y)&&(r=a,o=c)}for(let c of n.units){if(c.dead||c.flying||c.eliminated)continue;let d=ee(i.x,i.y,c.x,c.y);d<o&&!Ht(n,i.x,i.y,c.x,c.y)&&!ai(n,i.x,i.y,c.x,c.y)&&(r=c,o=d)}r?(i.taim=Math.atan2(r.y-i.y,r.x-i.x),i.gunCd<=0&&(i.gunCd=fn.trof,Ln(n,{x:i.x+Math.cos(i.taim)*30,y:i.y+Math.sin(i.taim)*30,angle:i.taim+n.rng.rand(-.04,.04),speed:fn.bspeed,dmg:fn.tdmg,from:"convoy",life:.6}),ft(n,i.x+Math.cos(i.taim)*30,i.y+Math.sin(i.taim)*30,"#ffd76b",2,90))):i.taim=i.ang;let l=[[-46,28],[-46,-28],[50,30],[50,-30]];for(let c=0;c<i.guards.length;c++){let d=i.guards[c];if(d.dead)continue;d.gunCd=Math.max(0,d.gunCd-e);let h=null,f=fn.grange;if(!a.dead&&!a.inCopter&&!n.ghost){let u=ee(d.x,d.y,a.x,a.y);u<f&&!Ht(n,d.x,d.y,a.x,a.y)&&!ai(n,d.x,d.y,a.x,a.y)&&(h=a,f=u)}for(let u of n.units){if(u.dead||u.flying||u.eliminated)continue;let p=ee(d.x,d.y,u.x,u.y);p<f&&!Ht(n,d.x,d.y,u.x,u.y)&&!ai(n,d.x,d.y,u.x,u.y)&&(h=u,f=p)}if(ee(d.x,d.y,i.x,i.y)>fn.leash&&(h=null),h){let u=Math.atan2(h.y-d.y,h.x-d.x);d.angle=Ri(d.angle,u,e*9),d.gunCd<=0&&Math.abs(xg(d.angle,u))<.3&&(d.gunCd=fn.grof,Ln(n,{x:d.x+Math.cos(d.angle)*14,y:d.y+Math.sin(d.angle)*14,angle:d.angle+n.rng.rand(-.06,.06),speed:fn.bspeed,dmg:fn.gdmg,from:"convoy",life:.55}));let p=0,x=0;f>260?(p=Math.cos(u),x=Math.sin(u)):f<150&&(p=-Math.cos(u),x=-Math.sin(u));let m=d.x+p*fn.gspeed*e,g=d.y+x*fn.gspeed*e;Tt(n,m,g,12)||(d.x=m,d.y=g)}else{let u=i.x+Math.cos(i.ang)*l[c][0]-Math.sin(i.ang)*l[c][1],p=i.y+Math.sin(i.ang)*l[c][0]+Math.cos(i.ang)*l[c][1],x=ee(d.x,d.y,u,p);if(x>4){let m=fn.speed+50;d.x+=(u-d.x)/x*Math.min(x,m*e),d.y+=(p-d.y)/x*Math.min(x,m*e)}d.angle=Ri(d.angle,i.ang,e*5)}}}}function pg(n){n.convoyT=n.rng.rand(180,300);let e=[];for(let r of n.world.roads){let o=-1,a=null;for(let l=0;l<=r.pts.length;l++){let c=l<r.pts.length&&r.fade[l]>.05;c&&o===-1&&(o=l),!c&&o!==-1&&((!a||l-o>a.len)&&(a={start:o,len:l-o}),o=-1)}a&&a.len>=10&&e.push({rd:r,...a})}if(!e.length)return;let t=e[Math.floor(n.rng.next()*e.length)],i=t.rd.pts.slice(t.start,t.start+t.len);n.rng.chance(.5)&&(i=[...i].reverse());let s={pts:i,seg:0,x:i[0].x,y:i[0].y,px:i[0].x,py:i[0].y,ang:0,taim:0,hp:fn.vhp,max:fn.vhp,gunCd:0,dead:!1,guards:[]};for(let r=0;r<4;r++)s.guards.push({x:i[0].x,y:i[0].y,hp:fn.ghp,max:fn.ghp,angle:0,gunCd:0,dead:!1});n.convoys.push(s),n.events.push({type:"convoy",x:s.x,y:s.y})}function hu(n,e){if(!n.patrol){n.patrolT-=e,n.patrolT<=0&&mg(n);return}let t=n.patrol;t.rotor+=e*28;let i=n.teams.find(c=>c.owner===t.huntOwner&&!c.eliminated&&c.bases.some(d=>!d.dead));if(t.hp<=0){gg(n);return}let s,r,o=!1;if(!i||t.orbitT<=0){if(o=!0,s=t.exitX,r=t.exitY,t.x<-320||t.x>ue.w+320||t.y<-320||t.y>ue.h+320){n.patrol=null,n.patrolT=n.rng.rand(240,420);return}}else{let c=i.bases.find(h=>!h.dead);ee(t.x,t.y,c.hx,c.hy)>460&&!t.orbiting?(s=c.hx,r=c.hy):(t.orbiting=!0,t.orbitA+=.55*e,t.orbitT-=e,s=c.hx+Math.cos(t.orbitA)*Jn.orbitR,r=c.hy+Math.sin(t.orbitA)*Jn.orbitR)}let a=Math.atan2(r-t.y,s-t.x);t.angle=Ri(t.angle,a,e*3);let l=ee(t.x,t.y,s,r);if(t.spd=Math.min(Jn.speed,Jn.speed*l/300+40),t.x+=Math.cos(t.angle)*t.spd*e,t.y+=Math.sin(t.angle)*t.spd*e,t.flash=Math.max(0,t.flash-e),i&&!o){if(t.strafeT-=e,t.strafeT<=0){t.strafeT=1.2;let c=null,d=Jn.strafeR;for(let h of n.units){if(h.owner!==t.huntOwner||h.dead||h.eliminated||h.flying)continue;let f=ee(t.x,t.y,h.x,h.y);f<d&&(d=f,c=h)}if(c){for(let h=0;h<5;h++){let f=.18+h*.02,u=c.x+c.vx*f+n.rng.rand(-26,26),p=c.y+c.vy*f+n.rng.rand(-26,26);Ln(n,{x:t.x,y:t.y,angle:Math.atan2(p-t.y,u-t.x),speed:900,dmg:9,from:"patrol",life:1,col:"hmg"})}t.flash=.12}}for(let c of n.units)if(!(c.owner!==t.huntOwner||c.dead||c.eliminated||c.flying)&&!(me(t.x,t.y,c.x,c.y)>Jn.flakR*Jn.flakR)&&(c.flakT=(c.flakT||0)-e,c.flakT<=0)){c.flakT=1;let d=ee(t.x,t.y,c.x,c.y)/1100,h=t.x+Math.cos(t.angle)*t.spd*d,f=t.y+Math.sin(t.angle)*t.spd*d,u=Math.atan2(f-c.y,h-c.x)+n.rng.rand(-.07,.07);c.angle=u;let p=c.x+Math.cos(u)*1100*.7,x=c.y+Math.sin(u)*1100*.7;n.events.push({type:"flak",x0:c.x,y0:c.y,x1:p,y1:x}),Et(t.x,t.y,c.x,c.y,p,x)<40&&(t.hp-=6,ft(n,t.x,t.y,"#aab1b8",3,120))}}}function mg(n){let e=null,t=-1;for(let o of n.teams){if(o.eliminated)continue;let a=o.bases.find(u=>!u.dead);if(!a)continue;let l=n.units.filter(u=>u.owner===o.owner&&!u.dead&&!u.eliminated).length,c=0;for(let u of n.structures.values())u.owner===o.owner&&c++;let d=n.deploys.get(a.tcKey),h=d?d.store.wood+d.store.stone+d.store.metal:0,f=l*10+c*2+h*.01;f>t&&(t=f,e={t:o,rec:a})}if(!e){n.patrolT=n.rng.rand(120,240);return}let{t:i,rec:s}=e,r=s.hx>ue.w/2;n.patrol={huntOwner:i.owner,huntId:i.id,x:r?-200:ue.w+200,y:it(s.hy+n.rng.rand(-600,600),200,ue.h-200),exitX:r?ue.w+360:-360,exitY:s.hy,angle:0,rotor:0,spd:0,hp:Jn.hp,max:Jn.hp,orbitA:n.rng.rand(0,Xe),orbitT:Jn.orbitT,orbiting:!1,strafeT:1,flash:0},He(n,s.hx,s.hy-80,"Patrol helicopter inbound!","#ffb84a"),n.elims.push({text:"PATROL HELI hunts Base "+(i.id+1),t:10})}function gg(n){let e=n.patrol;ft(n,e.x,e.y,"#ffb24a",40,360),ft(n,e.x,e.y,"#ff9b3d",24,280),n.scorch.push({x:e.x,y:e.y,r:64}),n.scorch.length>36&&n.scorch.shift(),n.wrecks.push({x:e.x,y:e.y,t:15});for(let t=0,i=n.rng.randi(4,6);t<i;t++)At(n,e.x+n.rng.rand(-30,30),e.y+n.rng.rand(-30,30),"rocket",1);for(let t=0,i=n.rng.randi(2,3);t<i;t++)At(n,e.x+n.rng.rand(-30,30),e.y+n.rng.rand(-30,30),"satchel",1);At(n,e.x,e.y,"ammo",n.rng.randi(100,180)),cn(n,e.x,e.y,"scrap",n.rng.randi(80,150)),cn(n,e.x,e.y,"metal",n.rng.randi(50,90)),n.elims.push({text:"PATROL HELI DOWN",t:12}),n.events.push({type:"explosion",x:e.x,y:e.y,r:110}),n.shake=Math.max(n.shake,14),n.patrol=null,n.patrolT=n.rng.rand(240,420)}var xg=(n,e)=>{let t=(e-n)%Xe;return t>Math.PI&&(t-=Xe),t<-Math.PI&&(t+=Xe),t};function du(n,e){let t=n.weather;t.timer-=e,t.timer<=0&&(t.mode==="clear"?(t.mode="rain",t.timer=n.rng.rand(8,16),t.boltT=n.rng.rand(3,8)):(t.mode="clear",t.timer=n.rng.rand(90,170)));let i=t.mode==="rain"?1:0;t.rain+=(i-t.rain)*Math.min(1,e*.5),t.rain>.4&&(t.boltT-=e,t.boltT<=0&&(t.boltT=n.rng.rand(4,13),t.flash=1,n.events.push({type:"bolt"}))),t.flash=Math.max(0,t.flash-e*2.4),t.fogTimer-=e,t.fogTimer<=0&&(t.fogOn=!t.fogOn,t.fogTimer=t.fogOn?n.rng.rand(28,60):n.rng.rand(45,95)),t.fog+=((t.fogOn?1:0)-t.fog)*Math.min(1,e*.22),n.wind=(Math.sin(n.t*.5)*.5+Math.sin(n.t*1.9+1.1)*.5)*(1+t.rain*1.7)}function fu(n,e){if(!n.plane&&!n.airdrop&&(n.airdropT-=e,n.airdropT<=0&&(uu(n),n.airdropT=n.rng.rand(120,300))),n.plane){let t=n.plane;t.x+=t.vx*e,t.prop+=e*30,!t.released&&(t.vx>0&&t.x>=t.dropX||t.vx<0&&t.x<=t.dropX)&&(t.released=!0,n.airdrop={x:t.dropX,y:t.dropY-780,gy:t.dropY,hp:90,max:90,fall:0,sway:n.rng.rand(0,Xe),loot:yg(n)},He(n,t.dropX,t.dropY,"Airdrop incoming!","#ffe07a"),n.events.push({type:"airdropCalled",x:t.dropX,y:t.dropY})),(t.x<-300||t.x>ue.w+300)&&(n.plane=null)}if(n.airdrop){let t=n.airdrop;if(t.fall<1){t.fall=Math.min(1,t.fall+e*.16);let i=t.fall*t.fall*(3-2*t.fall);t.y=t.gy-780+780*i,t.sway+=e*1.5}else t.hp<=0&&(_g(n,t),n.airdrop=null)}}function uu(n,e,t){let i=e,s=t;if(i===void 0){for(let o=0;o<24;o++){let a=n.rng.rand(.16*ue.w,.84*ue.w),l=n.rng.rand(.16*ue.h,.84*ue.h);if(!(ee(a,l,n.world.shop.x,n.world.shop.y)<wt+160)){i=a,s=l;break}}i===void 0&&(i=ue.w*.25,s=ue.h*.25)}let r=n.rng.chance(.5);n.plane={x:i+(r?-1700:1700),y:s,vx:r?820:-820,dropX:i,dropY:s,released:!1,prop:0}}function yg(n){let e=[["scrap",n.rng.randi(50,110)]];return n.rng.chance(.85)&&e.push(["rocket",n.rng.randi(2,6)]),n.rng.chance(.85)&&e.push(["ammo",n.rng.randi(70,150)]),n.rng.chance(.55)&&e.push(["metal",n.rng.randi(25,60)]),n.rng.chance(.5)&&e.push(["wood",n.rng.randi(30,70)]),n.rng.chance(.4)&&e.push(["sniper",1]),e}function _g(n,e){ft(n,e.x,e.y,"#ffd27a",30,300),ft(n,e.x,e.y,"#d2664a",16,220);for(let[t,i]of e.loot)if(t==="rocket")for(let s=0;s<i;s++)At(n,e.x,e.y,"rocket",1);else t==="sniper"?At(n,e.x,e.y,"sniper",1):t==="ammo"?At(n,e.x,e.y,"ammo",i):cn(n,e.x,e.y,t,i);He(n,e.x,e.y-30,"AIRDROP LOOTED!","#ffe07a")}function gh(n,e,t){if(n.signal)return!1;let i=n.player,s=ee(i.x,i.y,e,t);if(s>700){let r=700/s;e=i.x+(e-i.x)*r,t=i.y+(t-i.y)*r}return Mt(n,e,t)?(He(n,i.x,i.y-20,"Not in the safe zone","#d2664a"),!1):(n.inv.signal|0)<1?(He(n,i.x,i.y-20,"No supply signal \u2014 buy one at the trade zone","#d2664a"),!1):(n.inv.signal--,n.signal={x:e,y:t,t:0,dur:6,puff:0,called:!1},He(n,i.x,i.y-20,"Supply signal out \u2014 everyone saw it","#c9a0ff"),!0)}function pu(n,e,t){return n.signal||n.plane||n.airdrop?!1:(n.signal={x:e,y:t,t:0,dur:6,puff:0,called:!1},!0)}function mu(n,e){let t=n.signal;t&&(t.t+=e,t.puff-=e,t.puff<=0&&(t.puff=.12,ft(n,t.x+n.rng.rand(-8,8),t.y+n.rng.rand(-6,2),"#a96bd4",3,60)),!t.called&&t.t>t.dur&&!n.plane&&!n.airdrop&&(uu(n,t.x,t.y),t.called=!0),(t.called||t.t>t.dur+60)&&(n.signal=null))}function gu(n,e){let t=n.quarry;if(!t)return;let i=new Set;!n.player.dead&&!n.player.inCopter&&!n.ghost&&me(n.player.x,n.player.y,t.x,t.y)<t.r*t.r&&i.add(Ye);for(let s of n.units)s.dead||s.eliminated||s.flying||me(s.x,s.y,t.x,t.y)<t.r*t.r&&i.add(s.owner);if(i.size===1){let s=[...i][0];if(s!==t.owner){if(t.capOwner!==s&&(t.capOwner=s,t.capT=0),t.capT+=e,t.capT>=Kn.capT){t.owner=s,t.capT=0,t.capOwner=null,t.payT=0;let r=n.teams.find(a=>a.owner===s),o=s===Ye?"You":"Base "+(r?r.id+1:"?");He(n,t.x,t.y-44,"Quarry captured!","#cdd6a3"),n.elims.push({text:"QUARRY \u2192 "+o,t:10})}}else t.capT=0}else t.capT=Math.max(0,t.capT-e);if(t.owner&&t.owner!==Ye){let s=n.teams.find(o=>o.owner===t.owner);s&&!s.eliminated&&n.units.some(o=>o.owner===t.owner&&o.primary&&!o.eliminated)||(t.owner=null)}if(t.owner&&(t.arm+=e,t.payT+=e,t.payT>=Kn.payEvery)){if(t.payT=0,t.paid++,t.owner===Ye)n.inv.stone+=Kn.pay.stone,n.inv.metal+=Kn.pay.metal,n.inv.scrap+=Kn.pay.scrap;else{let s=n.teams.find(a=>a.owner===t.owner),r=s&&s.bases.find(a=>!a.dead),o=r&&n.deploys.get(r.tcKey);o&&o.store&&(o.store.stone+=Kn.pay.stone,o.store.metal+=Kn.pay.metal,o.store.scrap+=Kn.pay.scrap)}He(n,t.x,t.y-44,"+stone +metal +scrap","#cdd6a3")}}function xu(n,e){if(!n.lockedCrate){if(n.crateT-=e,n.crateT<=0){let s=n.world.monuments.filter(a=>a.type!=="quarry"),r=n.rng.pick(s),o=n.rng.rand(0,Xe);n.lockedCrate={x:r.x+Math.cos(o)*(r.r+90),y:r.y+Math.sin(o)*(r.r+90),mon:r.name,t:Hs.hackT,started:!1,blink:0},He(n,n.lockedCrate.x,n.lockedCrate.y-30,"Locked crate at the "+r.name+"!","#ffb84a"),n.elims.push({text:"LOCKED CRATE \u2014 "+r.name,t:12}),n.crateT=n.rng.rand(240,360)}return}let t=n.lockedCrate;t.blink+=e;let i=!n.player.dead&&!n.ghost&&me(n.player.x,n.player.y,t.x,t.y)<Hs.r*Hs.r;if(!i){for(let s of n.units)if(!(s.dead||s.eliminated||s.flying)&&me(s.x,s.y,t.x,t.y)<Hs.r*Hs.r){i=!0;break}}if(i&&(t.started=!0,t.t-=e),t.t<=0){ft(n,t.x,t.y,"#ffd27a",30,300),ft(n,t.x,t.y,"#d2664a",16,220),cn(n,t.x,t.y,"scrap",n.rng.randi(80,140)),cn(n,t.x,t.y,"metal",n.rng.randi(40,80));for(let s=0,r=n.rng.randi(3,6);s<r;s++)At(n,t.x+n.rng.rand(-20,20),t.y+n.rng.rand(-20,20),"rocket",1);for(let s=0,r=n.rng.randi(2,4);s<r;s++)At(n,t.x+n.rng.rand(-20,20),t.y+n.rng.rand(-20,20),"satchel",1);At(n,t.x,t.y,"ammo",n.rng.randi(80,160)),n.rng.chance(.5)&&At(n,t.x,t.y,"sniper",1),He(n,t.x,t.y-24,"Locked crate opened!","#ffb84a"),n.lockedCrate=null}}function xh(n){let e=n.rng,t=ue.w,i=ue.h,s=(o,a,l)=>{let c=l?e.rand(86,140):e.rand(70,128),d=[],h=c;for(let f=0,u=e.randi(5,9);f<u;f++){let p=e.rand(-.95,.95)*c,x=e.rand(-.42,.42)*c,m=c*e.rand(.55,1);d.push({dx:p,dy:x,r:m}),h=Math.max(h,Math.hypot(p,x)+m)}return{x:o,y:a,puffs:d,r:h,op:l?e.rand(.92,1):e.rand(.7,1),sp:e.rand(9,19),heavy:l}};n.clouds=[];let r=e.randi(7,10);for(;r>0;)if(r>=2&&e.chance(.5)){let o=e.rand(0,t),a=e.rand(0,i),l=Math.min(r,e.randi(2,3));for(let c=0;c<l;c++)n.clouds.push(s(o+e.rand(-150,150),a+e.rand(-95,95),!0));r-=l}else n.clouds.push(s(e.rand(0,t),e.rand(0,i),e.chance(.4))),r--;n.fogBanks=[];for(let o=0,a=e.randi(13,20);o<a;o++){let l=e.rand(150,320),c=[];for(let d=0,h=e.randi(2,5);d<h;d++)c.push({dx:e.rand(-1,1)*l,dy:e.rand(-.6,.6)*l,r:l*e.rand(.7,1.2)});n.fogBanks.push({x:e.rand(0,t),y:e.rand(0,i),r:l,puffs:c,dens:e.rand(.5,1.15),sp:e.rand(5,12),vy:e.rand(-3,3)})}n.fireflies=[];for(let o=0,a=e.randi(16,28);o<a;o++)n.fireflies.push({x:e.rand(t/3+30,2*t/3-30),y:e.rand(60,i-60),vx:e.rand(-28,28),vy:e.rand(-28,28),ph:e.rand(0,Xe),fs:e.rand(2.5,4.5),wT:e.rand(.5,1.7)})}function yu(n,e){let t=ue.w,i=ue.h;n.clouds||xh(n);for(let o of n.clouds)o.x+=o.sp*e,o.x-o.r>t+160&&(o.x=-o.r-n.rng.rand(0,500),o.y=n.rng.rand(0,i));for(let o of n.fogBanks)o.x+=o.sp*e,o.y+=o.vy*e,o.x-o.r>t+220&&(o.x=-o.r-n.rng.rand(0,450),o.y=n.rng.rand(0,i)),o.y<-o.r?o.y=i+o.r*.5:o.y>i+o.r&&(o.y=-o.r*.5);let s=t/3+20,r=2*t/3-20;for(let o of n.fireflies){if(o.wT-=e,o.wT<=0){o.wT=n.rng.rand(.5,1.7);let a=n.rng.rand(0,Xe),l=n.rng.rand(14,40);o.vx=Math.cos(a)*l,o.vy=Math.sin(a)*l}o.x+=o.vx*e,o.y+=o.vy*e,o.x<s&&(o.x=s,o.vx=Math.abs(o.vx)),o.x>r&&(o.x=r,o.vx=-Math.abs(o.vx)),o.y=it(o.y,40,i-40),o.ph+=o.fs*e}for(let o=n.footprints.length-1;o>=0;o--)n.footprints[o].t+=e,n.footprints[o].t>=10&&n.footprints.splice(o,1)}function va(n,e,t){if(e.fpAcc=(e.fpAcc||0)+ee(e.x,e.y,e.fpX||e.x,e.fpY||e.y),e.fpX=e.x,e.fpY=e.y,e.fpAcc<30)return;e.fpAcc=0,e.fpSide=!e.fpSide;let i=e.fpSide?5:-5;n.footprints.push({x:e.x-Math.sin(t)*i,y:e.y+Math.cos(t)*i,a:t,t:0}),n.footprints.length>700&&n.footprints.shift()}function _u(n,e){for(let t of n.resources)t.amount>=t.max||(t.regen+=e,t.amount<=0?t.regen>=29&&(t.amount=t.max,t.regen=0):t.regen>=2.5&&(t.amount=Math.min(t.max,t.amount+Math.ceil(t.max*.05)),t.regen=0));for(let t of n.barrels)t.hp>0||(t.respawnT-=e,t.respawnT<=0&&(t.hp=t.max))}var vu={1:"pistol",2:"rifle",3:"minigun",4:"rocket",6:"sniper",7:"shotgun",8:"hmg"};function Wr(n){let e=vu[n.slot];return e&&n.owned[e]?e:null}function Mu(n,e){let t=n.player,i=n.cmd;if(t.gatherCd=Math.max(0,(t.gatherCd||0)-e),t.recoil=Math.max(0,t.recoil-42*e),t.swing=Math.max(0,t.swing-e),t.hurt=Math.max(0,t.hurt-e),t.invuln=Math.max(0,t.invuln-e),t.dead){t.deadT-=e,t.deadT<=0&&bg(n);return}if(t.poison>0&&(t.poison-=e,t.regenDelay=Math.max(t.regenDelay,1.5),t.health-=3.2*e,n.tick%60===0&&He(n,t.x,t.y-20,"poison","#7bbf4f"),t.health<=0)){Gr(n,!0);return}if(t.regenDelay=Math.max(0,t.regenDelay-e),t.regenDelay<=0&&t.health<t.maxhp&&(t.health=Math.min(t.maxhp,t.health+12*e)),t.inCopter){su(n,e);return}t.angle=Math.atan2(i.my-t.y,i.mx-t.x);let s=(i.right?1:0)-(i.left?1:0),r=(i.down?1:0)-(i.up?1:0),o=i.run?t.run:t.walk,a=Wr(n);a==="minigun"&&n.weapons.minigun.spin>=ln.minigun.windup&&(o*=.4);let l=n.world.lakeAt(t.x,t.y);l&&!l.frozen&&(o*=.5);let c=Math.hypot(s,r),d=0,h=0;if(c>0&&(d=s/c*o,h=r/c*o),l&&l.frozen){let y=Math.min(1,e*1.1);if(t.vx+=(d-t.vx)*y,t.vy+=(h-t.vy)*y,c===0){let v=Math.pow(.6,e);t.vx*=v,t.vy*=v}}else t.vx=d,t.vy=h;t.moving=Math.hypot(t.vx,t.vy)>10;let f={passOwner:Ye,openOwnDoors:!1},u=t.x+t.vx*e,p=t.y+t.vy*e;Tt(n,t.x,t.y,jt,f)?(t.x=u,t.y=p):(Tt(n,u,t.y,jt,f)?t.vx*=-.2:t.x=u,Tt(n,t.x,p,jt,f)?t.vy*=-.2:t.y=p),t.x=it(t.x,jt,ue.w-jt),t.y=it(t.y,jt,ue.h-jt);for(let y of n.resources)y.amount>0&&Ma(t,y.x,y.y,y.r+jt-6);for(let y of n.barrels)y.hp>0&&Ma(t,y.x,y.y,y.r+jt-4);for(let y of n.world.boulders)Ma(t,y.x,y.y,y.r+jt-2);Ma(t,n.world.shop.x,n.world.shop.y,n.world.shop.r+jt),t.moving&&va(n,t,Math.atan2(t.vy,t.vx));let x=a&&n.weapons[a],m=a&&ln[a];if(x&&(x.cd=Math.max(0,x.cd-e),x.reloading>0&&(x.reloading-=e,x.reloading<=0))){let y=Math.min(m.magSize-x.ammo,x.reserve);x.ammo+=y,x.reserve-=y}let g=!n.buildMode&&!t.dead&&!t.inCopter&&!n.shopOpen&&!n.storeOpen;if(g&&a==="minigun"){let y=n.weapons.minigun;i.fireHeld?y.spin=Math.min(m.windup+.4,y.spin+e):y.spin=Math.max(0,y.spin-1.6*e),i.fireHeld&&y.spin>=m.windup&&ba(n)}else g&&i.fireHeld&&m&&m.auto?ba(n):g&&i.fireHeld&&n.slot===0&&t.gatherCd<=0&&(t.gatherCd=.34,vg(n));n.rapidRockets&&g&&i.fireHeld&&(n.rapidCd=Math.max(0,(n.rapidCd||0)-e),n.rapidCd<=0&&!Mt(n,t.x,t.y)&&(n.rapidCd=.1,Vr(n,t.x+Math.cos(t.angle)*26,t.y+Math.sin(t.angle)*26,t.angle,Ye)))}function Ma(n,e,t,i){let s=me(n.x,n.y,e,t);if(s<i*i&&s>.01){let r=Math.sqrt(s);n.x+=(n.x-e)/r*(i-r),n.y+=(n.y-t)/r*(i-r)}}function ba(n){let e=n.player,t=Wr(n);if(!t)return;if(Mt(n,e.x,e.y)){mn(n,"No weapons in the safe zone");return}let i=n.weapons[t],s=ln[t];if(i.reloading>0||i.cd>0)return;if(i.ammo<=0){yh(n);return}i.ammo--,i.cd=s.rof;let r=s.spread;t==="rifle"&&e.rifleLaser&&(r*=.4);let o=s.pellets||1;for(let a=0;a<o;a++){let l=e.angle+n.rng.rand(-r,r),c=e.x+Math.cos(l)*26,d=e.y+Math.sin(l)*26;s.rocket?Vr(n,c,d,l,Ye):Ln(n,{x:c,y:d,angle:l,speed:s.speed,dmg:s.dmg,from:Ye,life:s.range,col:s.tracer||null})}e.recoil=Math.min(12,e.recoil+s.kick),n.muzzle={x:e.x+Math.cos(e.angle)*30,y:e.y+Math.sin(e.angle)*30,a:e.angle,t:s.rocket?.08:.05},n.events.push({type:"shot",x:e.x,y:e.y,a:e.angle,weapon:t})}function yh(n){let e=Wr(n);if(!e)return;let t=n.weapons[e],i=ln[e];t.reloading>0||t.ammo>=i.magSize||t.reserve<=0||(t.reloading=i.reloadT)}function Xr(n,e){if(n.player.inCopter)return;let t=vu[e];if(t&&!n.owned[t]){mn(n,"locked \u2014 buy it at the trade shop");return}n.slot=e,n.buildMode=e===5,n.rapidRockets&&e!==4&&(n.rapidRockets=!1)}function vg(n){let e=n.player;e.swing=.16;let t=null,i=ra*.85;for(let o of n.animals){if(o.dead)continue;let a=ee(e.x,e.y,o.x,o.y)-o.r;a<i&&(i=a,t=o)}if(t){_a(n,t,18,e.x,e.y,Ye);return}if(Mg(n))return;let s=null,r=ra;for(let o of n.resources){if(o.amount<=0)continue;let a=ee(e.x,e.y,o.x,o.y)-o.r;a<r&&(r=a,s=o)}if(s){let o=s.base==="wood"?8:s.base==="stone"?6:5,a=Math.min((n.jackhammer?3:1)*o,s.amount);s.amount-=a,s.regen=0,n.inv[s.base]+=a,He(n,s.x,s.y-s.r,"+"+a+" "+s.base,"#d8e0c2"),ft(n,s.x,s.y,"#caa07a",n.jackhammer?6:3,140),n.events.push({type:"harvest",x:s.x,y:s.y,kind:s.base,jack:n.jackhammer})}}function Mg(n){let e=n.player,t=ra+38.4,i=null,s=t,r=null,o=null;for(let[c,d]of n.structures){if(d.owner!==Ye||d.hp>=d.max)continue;let[h,f]=c.split(",").map(Number),u=ct(h,f),p=ee(e.x,e.y,u.x,u.y);p<s&&(s=p,i=d,r="cell",o=c)}for(let[c,d]of n.walls){if(d.owner!==Ye||d.hp>=d.max)continue;let h=Ft(c,d),f=ee(e.x,e.y,(h[0]+h[2])/2,(h[1]+h[3])/2);f<s&&(s=f,i=d,r="wall",o=c)}for(let[c,d]of n.deploys){if(d.owner!==Ye||d.hp>=d.max)continue;let[h,f]=c.split(",").map(Number),u=ct(h,f),p=ee(e.x,e.y,u.x,u.y);p<s&&(s=p,i=d,r="deploy",o=c)}if(!i)return!1;let a=Qt[i.type],l=r==="deploy"?0:void 0;return Vf(n,i,a,[n.inv],l)&&He(n,e.x,e.y-20,"repaired","#9ad06a"),!0}function bu(n){let e=n.player;if(e.inCopter){let a=Math.floor(e.x/64),l=Math.floor(e.y/64);if(n.structures.has(Je(a,l))){mn(n,"Can't land on a base");return}e.inCopter=!1,e.y+=_t.r+jt+6;return}if(n.copter&&!n.copter.destroyed&&ee(e.x,e.y,n.copter.x,n.copter.y)<_t.r+jt+34){e.inCopter=!0,mn(n,"liftoff");return}let t=n.world.shop;if(ee(e.x,e.y,t.x,t.y)<t.r+jt+44){n.shopOpen=!n.shopOpen;return}let i=null,s=64*1.4,r=null,o=null;for(let[a,l]of n.walls){if(l.type!=="door"||l.hp<=0)continue;let c=Ft(a,l),d=ee(e.x,e.y,(c[0]+c[2])/2,(c[1]+c[3])/2);d<s&&(s=d,i=l,r="door",o=a)}for(let[a,l]of n.deploys){if(!(l.type==="cupboard"||l.type==="box"))continue;let[c,d]=a.split(",").map(Number),h=ct(c,d),f=ee(e.x,e.y,h.x,h.y);f<s&&(s=f,i=l,r="store",o=a)}if(i){if(i.lock&&i.lock.by!==Ye){mn(n,"Locked \u2014 not your base");return}r==="door"?(i.open=!i.open,n.nav.stamp++):n.storeOpen=o}}function qr(n,e,t){let i=n.buildPiece,s=Qt[i],r=Math.floor(e/64),o=Math.floor(t/64);if(s.cat==="cell")return{gx:r,gy:o};if(s.cat==="diag")return{key:Ne("D",r,o)};let a=e-r*64,l=t-o*64;return{key:[{key:Ne("V",r,o),d:a},{key:Ne("V",r+1,o),d:64-a},{key:Ne("H",r,o),d:l},{key:Ne("H",r,o+1),d:64-l}].sort((d,h)=>d.d-h.d)[0].key}}function wu(n){let e=qr(n,n.cmd.mx,n.cmd.my),t=n.buildPiece;zf(n,Ye,t,e,[n.inv],{rot:n.buildRot})?(Qt[t].tc&&He(n,n.cmd.mx,n.cmd.my,"base claimed","#9ad06a"),n.events.push({type:"place",x:n.cmd.mx,y:n.cmd.my})):mn(n,"can't place there")}function Tu(n){let e=qr(n,n.cmd.mx,n.cmd.my),t=Math.floor(n.cmd.mx/64),i=Math.floor(n.cmd.my/64),s=(l,c)=>{for(let d in l.cost)n.inv[d]+=Math.ceil(l.cost[d]/2);(c.mat==="stone"||c.mat==="metal")&&(n.inv.stone+=7),c.mat==="metal"&&(n.inv.metal+=10)};if(e.key){let l=n.walls.get(e.key);if(l&&l.owner===Ye){s(Qt[l.type],l),n.walls.delete(e.key),n.nav.stamp++;return}}let r=Je(t,i),o=n.deploys.get(r);if(o&&o.owner===Ye){s(Qt[o.type],o),n.deploys.delete(r),n.nav.stamp++;return}let a=n.structures.get(r);if(a&&a.owner===Ye){s(Qt[a.type],a),n.structures.delete(r),ma(n,r),n.nav.stamp++;return}}function Eu(n){let e=n.cmd.mx,t=n.cmd.my,i=Math.floor(e/64),s=Math.floor(t/64);if(n.buildMode){let r=qr(n,e,t),o=a=>a&&a.owner===Ye&&Hf(n,a,Qt[a.type],[n.inv]);for(let a of[Ne("V",i,s),Ne("V",i+1,s),Ne("H",i,s),Ne("H",i,s+1)]){let l=n.walls.get(a);if(!l)continue;let c=Ft(a,l);if(Math.min(ee(e,t,c[0],c[1]),ee(e,t,c[2],c[3]),ee(e,t,(c[0]+c[2])/2,(c[1]+c[3])/2))<18&&o(l))return}if(o(n.structures.get(Je(i,s))))return}else{let r=n.deploys.get(Je(i,s));if(r&&r.type==="turret"&&r.owner===Ye){let o=(r.tier||1)+1,a=_f[o];a&&n.inv.scrap>=a&&(n.inv.scrap-=a,r.tier=o,r.mag=30,r.reload=0,He(n,e,t,"turret T"+o,"#9ab0d0"))}}}function Au(n){let e=n.player;if(n.inv.grenade<=0){mn(n,"No grenades \u2014 buy at the trade shop");return}if(Mt(n,e.x,e.y)){mn(n,"No weapons in the safe zone");return}n.inv.grenade--;let t=Math.min(560,ee(e.x,e.y,n.cmd.mx,n.cmd.my)),i=Math.max(120,t*6)*.2,s=e.angle;n.grenades.push({x:e.x+Math.cos(s)*22,y:e.y+Math.sin(s)*22,vx:Math.cos(s)*i,vy:Math.sin(s)*i,t:zs.fuse,from:Ye,bob:0})}function Ru(n){let e=n.player;if(n.inv.fence<=0){mn(n,"No fences \u2014 buy more (10 wood)");return}let t=e.x+Math.cos(e.angle)*34,i=e.y+Math.sin(e.angle)*34;if(n.structures.has(Je(Math.floor(t/64),Math.floor(i/64)))){mn(n,"Not on a base");return}n.inv.fence--;let s=e.angle+Math.PI/2;n.fences.push({x:t,y:i,a:s,owner:Ye,hp:Yi.hp,max:Yi.hp,t:Yi.life,x0:t-Math.cos(s)*Yi.half,y0:i-Math.sin(s)*Yi.half,x1:t+Math.cos(s)*Yi.half,y1:i+Math.sin(s)*Yi.half}),n.needFenceRefresh=!0}function bg(n){let e=n.player;e.dead=!1,e.health=e.maxhp,e.invuln=1.8,e.poison=0;let t=null;for(let[i,s]of n.deploys)if(s.type==="cupboard"&&s.owner===Ye){let[r,o]=i.split(",").map(Number),a=ct(r,o);t={x:a.x,y:a.y+64};break}if(t)e.x=t.x,e.y=t.y;else for(let i=0;i<60;i++){let s=n.rng.rand(600,ue.w-600),r=n.rng.rand(600,ue.h-600);if(!(!n.world.onLand(s,r)||n.world.lakeAt(s,r)||Mt(n,s,r)||Tt(n,s,r,jt))){e.x=s,e.y=r;break}}n.copter&&n.copter.destroyed&&(n.copter.destroyed=!1,n.copter.hp=n.copter.max,n.copter.x=e.x+120,n.copter.y=e.y);for(let i of n.animals)i.aggro=null,i.foe=null,!i.dead&&me(i.x,i.y,e.x,e.y)<4e4&&(i.dead=!0,i.respawnT=.6)}function Cu(n,e){let[t,i,s]=Vt.trades[e];if(n.inv[t]<i){mn(n,"not enough "+t);return}n.inv[t]-=i,n.inv.scrap+=s}function Su(n,e){let t=Vt.buys[e];if(!t||n.inv.scrap<t.cost){mn(n,"not enough scrap");return}n.inv.scrap-=t.cost;let i=n.weapons[e];n.owned[e]?i.reserve+=t.ammo:(n.owned[e]=!0,i.ammo<ln[e].magSize&&(i.ammo=ln[e].magSize),He(n,n.player.x,n.player.y-20,ln[e].name+" unlocked!","#bfe3ff"))}function Iu(n,e){let t=n.player,i=s=>n.inv.scrap<s?(mn(n,"not enough scrap"),!1):(n.inv.scrap-=s,!0);switch(e){case"jackhammer":!n.jackhammer&&i(Vt.jackhammer)&&(n.jackhammer=!0,mn(n,"Jackhammer! 3\xD7 gather"));break;case"laser":if(!n.owned.rifle){mn(n,"buy the rifle first");break}!t.rifleLaser&&i(Vt.laser)&&(t.rifleLaser=!0);break;case"fence":n.inv.wood>=Vt.fenceWood?(n.inv.wood-=Vt.fenceWood,n.inv.fence++):mn(n,"not enough wood");break;case"grenade":i(Vt.grenade)&&n.inv.grenade++;break;case"signal":i(Vt.signal)&&(n.inv.signal=(n.inv.signal|0)+1);break;case"hqm":i(Vt.hqm.cost)&&(n.inv.hqm+=Vt.hqm.amt);break;case"facemask":{let s=t.facemask+1;s<=3&&i(xs.cost[s])&&(t.facemask=s);break}case"bodyArmor":{let s=t.bodyArmor+1;s<=3&&i(xs.cost[s])&&(t.bodyArmor=s);break}case"worker":i(Vt.worker)&&(Uf(n),mn(n,"worker hired \u2014 they gather and fight for you"));break}}function Pu(n,e,t){let i=n.deploys.get(n.storeOpen);if(!(!i||!i.store))if(t>0){let s=t>=9e3?n.inv[e]:Math.max(1,Math.floor(n.inv[e]*t)),r=Math.min(s,n.inv[e]);n.inv[e]-=r,i.store[e]+=r}else{let s=-t,r=s>=9e3?i.store[e]:Math.max(1,Math.floor(i.store[e]*s)),o=Math.min(r,i.store[e]);i.store[e]-=o,n.inv[e]+=o}}function mn(n,e){n.tip={text:e,t:1.4}}function Lu(n,e){let t=n.player;for(let i of n.animals){if(i.dead){i.respawnT-=e,i.respawnT<=0&&Du(n,i);continue}let s=ys[i.type];if(i.atkcd=Math.max(0,i.atkcd-e),i.hit=Math.max(0,i.hit-e),i.pauseT>0){i.pauseT-=e,i.vx=i.vy=0;continue}i.phase===void 0&&(i.phase=n.rng.next()*12|0);let r,o,a=1e9;if((n.tick+i.phase)%12===0||i.tgtCache===void 0){r=null,o=null;let m=t.dead||t.inCopter||n.ghost||Mt(n,t.x,t.y),g=null,y=1e9;for(let v of n.units){if(v.dead||v.flying||v.eliminated||Mt(n,v.x,v.y))continue;let b=ee(i.x,i.y,v.x,v.y);b<s.detect&&b<y&&!Ht(n,i.x,i.y,v.x,v.y)&&(y=b,g=v)}if(!m){let v=ee(i.x,i.y,t.x,t.y);v<s.detect&&v<=y&&!Ht(n,i.x,i.y,t.x,t.y)&&(r=t,o="player")}if(!r&&g&&(r=g,o="bot"),!r){let v=null,b=s.detect*s.detect;for(let[A,E]of n.deploys){if(E.type!=="turret")continue;let[D,_]=A.split(",").map(Number),M=ct(D,_),S=me(i.x,i.y,M.x,M.y);S<b&&!Ht(n,i.x,i.y,M.x,M.y)&&(b=S,v={key:A,x:M.x,y:M.y})}v&&(r=v,o="turret")}if(!r&&i.hostile){let v=null,b=s.detect*s.detect;for(let A of n.animals){if(A===i||A.dead)continue;let E=me(i.x,i.y,A.x,A.y);E<b&&(b=E,v=A)}v&&(r=v,o="animal")}if(!r&&i.foe){let v=i.foe;typeof v=="object"&&!v.dead&&ee(i.x,i.y,v.x,v.y)<s.detect*1.4&&(r=v,o=v===t?"player":v.owner!==void 0?"bot":"animal")}i.tgtCache=r?{tgt:r,kind:o}:null}else if(i.tgtCache){let m=i.tgtCache;(m.tgt.dead||m.kind==="player"&&(t.dead||n.ghost)||m.kind==="turret"&&!n.deploys.has(m.tgt.key))&&(i.tgtCache=null)}r=i.tgtCache?i.tgtCache.tgt:null,o=i.tgtCache?i.tgtCache.kind:null,r&&(a=ee(i.x,i.y,r.x,r.y)),r&&o!=="turret"&&a>s.lose&&(r=null,i.aggro=null);let l=s.walk,c=0,d=0;if(r){i.aggro=o,l=s.chase;let m=Math.max(1,a);c=(r.x-i.x)/m,d=(r.y-i.y)/m;let g=o==="turret"?i.r+35.2:o==="player"?i.r+16+2:i.r+16;if(i.atkcd<=0&&a<g){o==="player"?(vs(n,s.dmg,i.x,i.y,"animal"),s.poison&&(t.poison=Math.max(t.poison,10))):o==="bot"?Ms(n,r,s.dmg,i.x,i.y,"animal"):o==="turret"?_s(n,r.key,s.dmg,"animal"):o==="animal"&&(r.hp-=s.dmg,r.foe=i,r.hit=.12,r.hp<=0&&(r.dead=!0,r.respawnT=n.rng.rand(11,18))),i.atkcd=s.atk,i.pauseT=yf;continue}}else{if(i.aggro=null,i.wanderT-=e,i.avoidT>0)i.avoidT-=e,i.dir=i.avoidA;else if(i.wanderT<=0)if(i.wanderT=n.rng.rand(1.2,3.2),i.lake&&ee(i.x,i.y,i.lake.x,i.lake.y)>i.lake.r*.9)i.dir=Math.atan2(i.lake.y-i.y,i.lake.x-i.x);else if(i.lake&&n.rng.chance(.55)){i.vx=i.vy=0;continue}else if(n.rng.chance(.3)){i.vx=i.vy=0;continue}else i.dir=n.rng.rand(0,Xe);for(let[m,g]of n.deploys){if(g.type!=="cupboard")continue;let[y,v]=m.split(",").map(Number),b=ct(y,v);if(me(i.x,i.y,b.x,b.y)<340*340){i.avoidA=Math.atan2(i.y-b.y,i.x-b.x),i.avoidT=1.2,i.dir=i.avoidA;break}}{let m=n.world.shop;me(i.x,i.y,m.x,m.y)<760*760&&(i.avoidA=Math.atan2(i.y-m.y,i.x-m.x)+n.rng.rand(-.3,.3),i.avoidT=1.6,i.dir=i.avoidA)}c=Math.cos(i.dir),d=Math.sin(i.dir)}let h=i.x+c*l*e,f=i.y+d*l*e,u={x:i.x,y:i.y},p=i.lake?{allowLake:!0}:{},x=wg(n,i,h,f);if(i.vx=(i.x-u.x)/e,i.vy=(i.y-u.y)/e,r)if(ee(i.x,i.y,u.x,u.y)<l*e*.25){if(i.stuckT+=e,i.stuckT>3){Du(n,i);continue}i.stuckT>1.5&&(i.aggro=null,i.foe=null,i.stuckT=0,i.dir=n.rng.rand(0,Xe))}else i.stuckT=Math.max(0,i.stuckT-e*2);else!x&&n.rng.chance(.5)&&(i.dir=n.rng.rand(0,Xe))}}function wg(n,e,t,i){if(Mt(n,t,i)){let r=n.world.shop;e.avoidA=Math.atan2(e.y-r.y,e.x-r.x)+n.rng.rand(-.6,.6),e.avoidT=1.6,e.dir=e.avoidA,e.aggro=null,e.foe=null;let o=!1;return!Mt(n,t,e.y)&&!Tt(n,t,e.y,e.r*.7)?(e.x=t,o=!0):!Mt(n,e.x,i)&&!Tt(n,e.x,i,e.r*.7)&&(e.y=i,o=!0),e.x=it(e.x,20,ue.w-20),e.y=it(e.y,20,ue.h-20),o}let s=!1;return Tt(n,e.x,e.y,e.r*.7)?(e.x=t,e.y=i,s=!0):(!Tt(n,t,e.y,e.r*.7)&&(e.lake||!n.world.lakeAt(t,e.y))&&(e.x=t,s=!0),!Tt(n,e.x,i,e.r*.7)&&(e.lake||!n.world.lakeAt(e.x,i))&&(e.y=i,s=!0)),e.x=it(e.x,20,ue.w-20),e.y=it(e.y,20,ue.h-20),s}function Du(n,e){let t=ys[e.type],i=ue.w,s=t.biome==="desert"?[0,i/3]:t.biome==="jungle"?[i/3,2*i/3]:t.biome==="winter"?[2*i/3,i]:[0,i];for(let r=0;r<30;r++){let o,a;if(e.lake){let l=n.rng.rand(0,Xe);o=e.lake.x+Math.cos(l)*(e.lake.r+n.rng.rand(30,200)),a=e.lake.y+Math.sin(l)*(e.lake.r+n.rng.rand(30,200))}else o=n.rng.rand(Math.max(90,s[0]-90),Math.min(i-90,s[1]+90)),a=n.rng.rand(90,ue.h-90);if(!(ee(o,a,n.player.x,n.player.y)<520)&&!(ee(o,a,n.world.shop.x,n.world.shop.y)<820)&&!(n.world.landFactor(o,a)<.05)&&!(n.world.lakeAt(o,a)&&!e.lake)&&!Tt(n,o,a,e.r)){e.x=o,e.y=a;break}}e.dead=!1,e.hp=e.max,e.aggro=null,e.foe=null,e.pauseT=0,e.stuckT=0,e.dir=n.rng.rand(0,Xe),e.respawnT=0,e.looted=!1}function Nu(n,e){let t=n.player;for(let i of n.guards){if(i.dead){if(i.respawnT-=e,i.respawnT<=0){let a=n.rng.rand(0,Xe),l=n.rng.rand(.35*i.mr,.8*i.mr);i.x=i.mx+Math.cos(a)*l,i.y=i.my+Math.sin(a)*l,i.hp=i.max,i.dead=!1}continue}i.gunCd=Math.max(0,i.gunCd-e);let s=null,r=Xt.detect;if(!t.dead&&!t.inCopter&&!n.ghost&&!Mt(n,t.x,t.y)){let a=ee(i.x,i.y,t.x,t.y);a<r&&!Ht(n,i.x,i.y,t.x,t.y)&&(s=t,r=a)}for(let a of n.units){if(a.dead||a.flying||a.eliminated)continue;let l=ee(i.x,i.y,a.x,a.y);l<r&&!Ht(n,i.x,i.y,a.x,a.y)&&(s=a,r=l)}let o=ee(i.x,i.y,i.mx,i.my);if(o>i.mr+Xt.leash&&(s=null),s){let a=Math.atan2(s.y-i.y,s.x-i.x);if(i.angle=Ri(i.angle,a,Math.min(1,e*9)*Math.PI),r<Xt.range&&i.gunCd<=0&&Math.abs(Tg(i.angle,a))<.3){i.gunCd=Xt.rof;let f=i.angle+n.rng.rand(-Xt.spread,Xt.spread);Ln(n,{x:i.x+Math.cos(i.angle)*16,y:i.y+Math.sin(i.angle)*16,angle:f,speed:Xt.bspeed,dmg:Xt.dmg,from:"guard",life:Xt.range/Xt.bspeed+.1}),ft(n,i.x+Math.cos(i.angle)*16,i.y+Math.sin(i.angle)*16,"#ffd76b",2,90)}let l=0,c=0;r>300?(l=Math.cos(a),c=Math.sin(a)):r<150?(l=-Math.cos(a),c=-Math.sin(a)):(l=-Math.sin(a)*(i.seed>4.5?1:-1),c=Math.cos(a)*(i.seed>4.5?1:-1));let d=i.x+l*Xt.speed*e,h=i.y+c*Xt.speed*e;Tt(n,d,h,Xt.r)||(i.x=d,i.y=h),i.hasWp=!1}else{let a=Math.min(580,i.mr*2.6);if(o>a+90){let l=Math.atan2(i.my-i.y,i.mx-i.x);i.angle=Ri(i.angle,l,e*4);let c=i.x+Math.cos(i.angle)*Xt.speed*e,d=i.y+Math.sin(i.angle)*Xt.speed*e;Tt(n,c,d,Xt.r)||(i.x=c,i.y=d),i.hasWp=!1}else{if(i.wpT-=e,!i.hasWp||i.wpT<=0||ee(i.x,i.y,i.wpX,i.wpY)<26){let f=n.rng.rand(0,Xe),u=n.rng.rand(.25*i.mr,a);i.wpX=i.mx+Math.cos(f)*u,i.wpY=i.my+Math.sin(f)*u,i.wpT=n.rng.rand(2.4,6),i.hasWp=!0}let l=Math.atan2(i.wpY-i.y,i.wpX-i.x);i.angle=Ri(i.angle,l,e*3.5);let c=Xt.speed*.55,d=i.x+Math.cos(i.angle)*c*e,h=i.y+Math.sin(i.angle)*c*e;Tt(n,d,h,Xt.r)?i.hasWp=!1:(i.x=d,i.y=h)}}}}var Tg=(n,e)=>{let t=(e-n)%Xe;return t>Math.PI&&(t-=Xe),t<-Math.PI&&(t+=Xe),t};function qs(n,e){let t=Vn(n,e),i=t&&En(n,t.tcKey);return i?[e.inv,i.store]:[e.inv]}function Vn(n,e){let t=n.teams[e.id];return!t||e.ally?null:t.bases.find(i=>i.tcKey===e.tcKey&&!i.dead)||t.bases.find(i=>!i.dead)||null}function Yr(n,e){let t=e.bases.find(s=>!s.dead),i=t&&En(n,t.tcKey);return i?i.store:null}function wa(n,e,t){if(e<1400||t<1400||e>12424||t>7816||!n.world.onLand(e,t)||n.world.lakeAt(e,t)||n.world.railDist(e,t)<360||n.world.pathDist(e,t)<320||n.world.landFactor(e,t)<.12||ee(e,t,n.world.shop.x,n.world.shop.y)<wt+450)return!1;for(let i of n.world.monuments)if(ee(e,t,i.x,i.y)<wt+200)return!1;for(let i of n.world.lakes)if(ee(e,t,i.x,i.y)<i.r+560)return!1;for(let i of n.world.boulders)if(ee(e,t,i.x,i.y)<i.r+300)return!1;for(let[i,s]of n.deploys){if(s.type!=="cupboard")continue;let[r,o]=i.split(",").map(Number),a=ct(r,o);if(ee(e,t,a.x,a.y)<qi)return!1}return!0}function Ou(n,e,t){if(t.inv.wood+t.inv.stone+t.inv.metal<220)return!1;let s=220;for(let o of["wood","stone","metal"]){let a=Math.min(s,t.inv[o]);if(t.inv[o]-=a,s-=a,s<=0)break}let r=ga(n,e,t.siteX,t.siteY);for(let o of n.units)o.owner===e.owner&&(o.unfounded=!1,o.hx=r.hx,o.hy=r.hy,o.tcKey=r.tcKey,o.doorX=r.doorX,o.doorY=r.doorY,o.doorGy=r.doorGy);return He(n,r.hx,r.hy,"base founded","#9ad06a"),!0}function Bu(n,e){let t=n.teams[e.id],i=Vn(n,e);if(!t||!i)return!1;let s=qs(n,e),r=Eg(n,t.owner,i),o=Ag(n,t.owner,i),a=e.hard?9:5,l=e.hard?10:e.weak?5:8,c=e.hard?49:36;return r<a&&Uu(n,e,t,i,s)||e.primary&&r>=5&&Ta(n,e)||o<l&&Sg(n,e,t,i,s)||e.hard&&_h(n,e,t,i,s)?!0:!e.jack&&Cn.pay(s,{wood:120,metal:60})?(e.jack=!0,He(n,e.x,e.y,"+jackhammer","#ffd76b"),!0):(e.hf=!e.hf,!!((e.hf?ku(n,e,t,i,s)||_h(n,e,t,i,s):_h(n,e,t,i,s)||ku(n,e,t,i,s))||r<c&&Uu(n,e,t,i,s)))}function Eg(n,e,t){let i=0;for(let[s,r]of n.structures){if(r.owner!==e)continue;let[o,a]=s.split(",").map(Number),l=ct(o,a);me(l.x,l.y,t.hx,t.hy)<zt*zt&&i++}return i}function Ag(n,e,t){let i=0;for(let[s,r]of n.deploys){if(r.type!=="turret"||r.owner!==e)continue;let[o,a]=s.split(",").map(Number),l=ct(o,a);me(l.x,l.y,t.hx,t.hy)<zt*zt&&i++}return i}function Rg(n,e,t,i,s){let r=Je(e,t);if(n.structures.has(r)||n.deploys.has(r))return!1;let o=ct(e,t);if(t>=s.doorGy||Mt(n,o.x,o.y)||Ws(n,o.x,o.y)||!n.world.onLand(o.x,o.y)||n.world.lakeAt(o.x,o.y)||Br(n,o.x,o.y))return!1;for(let l of n.animals)if(!l.dead&&Math.abs(l.x-o.x)<64&&Math.abs(l.y-o.y)<64)return!1;let a=xa(n,i.owner,s.hx,s.hy);if(a){let l=Math.min(a.minx,e),c=Math.max(a.maxx,e),d=Math.min(a.miny,t),h=Math.max(a.maxy,t);if(c-l+1>10||h-d+1>10)return!1}return!0}function Cg(n,e,t){let i=t.split(","),s=+i[1],r=+i[2],o=i[0]==="V"?[[s-1,r],[s,r]]:[[s,r-1],[s,r]];for(let[a,l]of o){if(!n.structures.has(Je(a,l)))continue;let c=0;for(let d of[Ne("V",a,l),Ne("V",a+1,l),Ne("H",a,l),Ne("H",a,l+1)]){if(d===t)continue;let h=n.walls.get(d);(!h||h.hp<=0||h.type==="door")&&c++}if(c===0)return!0}return!1}function Uu(n,e,t,i,s){if(!Cn.has(s,{wood:40}))return!1;let r=[];for(let[c,d]of n.structures){if(d.owner!==t.owner)continue;let[h,f]=c.split(",").map(Number),u=ct(h,f);if(!(me(u.x,u.y,i.hx,i.hy)>zt*zt))for(let[p,x]of[[1,0],[-1,0],[0,1],[0,-1]])Rg(n,h+p,f+x,t,i)&&r.push([h+p,f+x])}if(!r.length)return!1;let[o,a]=r[Math.floor(n.rng.next()*r.length)];if(!Cn.pay(s,{wood:40}))return!1;n.structures.set(Je(o,a),{type:"floor",mat:"wood",hp:100,max:100,owner:t.owner,hitT:-100});let l=[[Ne("V",o,a),Je(o-1,a)],[Ne("V",o+1,a),Je(o+1,a)],[Ne("H",o,a),Je(o,a-1)],[Ne("H",o,a+1),Je(o,a+1)]];for(let[c,d]of l){let h=n.structures.get(d);h&&h.owner===t.owner||n.walls.has(c)||Cg(n,t.owner,c)||n.walls.set(c,{type:"wall",mat:"wood",hp:100,max:100,owner:t.owner,hitT:-100,open:!1})}return ch(n,t,i),n.nav.stamp++,He(n,o*64+64/2,a*64+64/2,"+room","#bcd0e0"),!0}function Sg(n,e,t,i,s){if(!Cn.has(s,{wood:40,metal:30}))return!1;let r=xa(n,t.owner,i.hx,i.hy);if(!r)return!1;let o=Math.floor(i.doorX/64),a=[];for(let c=r.miny-1;c<=r.maxy+1;c++)for(let d=r.minx-1;d<=r.maxx+1;d++){let h=Je(d,c);if(n.structures.has(h)||n.deploys.has(h)||c>=i.doorGy&&Math.abs(d-o)<=1)continue;let f=ct(d,c);if(Mt(n,f.x,f.y)||Ws(n,f.x,f.y)||!n.world.onLand(f.x,f.y)||n.world.lakeAt(f.x,f.y)||Br(n,f.x,f.y))continue;let u=!1,p=!1;for(let x=-1;x<=1&&!u;x++)for(let m=-1;m<=1;m++){let g=n.structures.get(Je(d+m,c+x));if(g&&g.owner===t.owner){u=!0;break}}for(let[x,m]of[[1,0],[-1,0],[0,1],[0,-1]]){let g=n.deploys.get(Je(d+x,c+m));if(g&&g.type==="turret"){p=!0;break}}u&&!p&&a.push({gx:d,gy:c,c:f})}if(!a.length)return!1;a.sort((c,d)=>me(d.c.x,d.c.y,i.doorX,i.doorY)-me(c.c.x,c.c.y,i.doorX,i.doorY));let l=a[0];return Cn.pay(s,{wood:40,metal:30})?(n.deploys.set(Je(l.gx,l.gy),{type:"turret",mat:"wood",hp:150,max:150,owner:t.owner,hitT:-100,tier:e.hard?3:e.weak?1:2,angle:0,cd:0,mag:12,reload:0,ext:!0,scanT:n.rng.rand(.5,4.5)}),n.nav.stamp++,He(n,l.c.x,l.c.y,"+turret","#bcd0e0"),!0):!1}var Ig={wood:{mat:"stone",cost:{stone:15}},stone:{mat:"metal",cost:{metal:20}},metal:{mat:"armored",hqm:8}},Pg={wood:{mat:"stone",cost:{stone:12}},stone:{mat:"metal",cost:{metal:16}},metal:{mat:"armored",hqm:6}};function _h(n,e,t,i,s){for(let[r,o]of n.walls){if(o.owner!==t.owner||o.hp<=0)continue;let a=Ig[o.mat];if(a){if(a.hqm){if(e.hqm<a.hqm)continue;e.hqm-=a.hqm}else if(!Cn.pay(s,a.cost))continue;return o.mat=a.mat,o.max=Ei(Qt[o.type],o.mat),o.hp=o.max,He(n,e.x,e.y,"+"+a.mat,a.mat==="armored"?"#7f93ad":a.mat==="metal"?"#aeb6bf":"#c2c8cf"),!0}}return!1}function ku(n,e,t,i,s){for(let[r,o]of n.structures){if(o.owner!==t.owner)continue;let a=Pg[o.mat];if(a){if(a.hqm){if(e.hqm<a.hqm)continue;e.hqm-=a.hqm}else if(!Cn.pay(s,a.cost))continue;return o.mat=a.mat,o.max=Ei(Qt[o.type],o.mat),o.hp=o.max,!0}}return!1}function Ta(n,e){let t=n.teams[e.id];if(!t||!e.primary)return!1;let i=e.hard?mt.HIRE_CAP_HARD:mt.HIRE_CAP;if(n.units.filter(d=>d.owner===t.owner&&!d.eliminated).length>=i)return!1;let r=Vn(n,e),o=r&&En(n,r.tcKey),a=mt.WORKER_COST,l=Math.min(a,e.scrap);if(l+(o?o.store.scrap:0)<a)return!1;e.scrap-=l,a-=l,a>0&&(o.store.scrap-=a);let c=Fr(n,t,e.hx+n.rng.rand(-46,46),e.hy+n.rng.rand(24,64),!1);return c.hx=e.hx,c.hy=e.hy,c.tcKey=e.tcKey,c.doorX=e.doorX,c.doorY=e.doorY,c.doorGy=e.doorGy,c.unfounded=e.unfounded,He(n,c.x,c.y,"+worker hired","#9ad06a"),!0}function zu(n,e,t){let i=n.units.find(c=>c.owner===e.owner&&c.primary&&!c.eliminated);if(!i||i.unfounded||e.eliminated)return;let s=e.bases.filter(c=>!c.dead);if(!s.length)return;let r=e.hard?4:3,o=Yr(n,e),a=o?o.wood+o.stone+o.metal:0,l=e.brain;if(i.fwdT-=t,l.aggressor&&l.raidTarget&&s.length<r&&a>=170&&i.fwdT<=0){i.fwdT=10;let c=Gn(n,l.raidTarget);if(c&&!s.some(d=>ee(d.hx,d.hy,c.hx,c.hy)<2400)){let d=s[0],h=Math.atan2(d.hy-c.hy,d.hx-c.hx);for(let f of[1800,2300,1400,2700]){let u=c.hx+Math.cos(h)*f,p=c.hy+Math.sin(h)*f;if(wa(n,u,p)){Fu(o,200);let x=ga(n,e,u,p);x.kind="raid-forward",He(n,u,p,"+raid base","#ffd0a0");return}}}}if(i.expT-=t,i.expT<=0){i.expT=n.rng.rand(50,90);let c=l.attack?160:260;if(s.length>=1&&s.length<r&&a>=c){let d=Dg(n,e,s[0]);if(d){Fu(o,240);let h=ga(n,e,d.x,d.y);h.kind=d.kind,He(n,d.x,d.y,"+"+d.kind+" base","#bcd0e0")}}}}function Fu(n,e){if(n)for(let t of["wood","stone","metal"]){let i=Math.min(e,n[t]);if(n[t]-=i,e-=i,e<=0)return}}function Gn(n,e){if(!e)return null;if(e==="player"){for(let[t,i]of n.deploys)if(i.type==="cupboard"&&i.owner===Ye){let[s,r]=t.split(",").map(Number),o=ct(s,r);return{owner:Ye,tcKey:t,hx:o.x,hy:o.y,isPlayer:!0}}return null}return e.bases&&e.bases.find(t=>!t.dead)||null}function Dg(n,e,t){for(let s of n.world.monuments){let r=!1;for(let o of n.teams)if(o.bases.some(a=>!a.dead&&ee(a.hx,a.hy,s.x,s.y)<wt+900)){r=!0;break}if(!r)for(let o=0;o<8;o++){let a=o/8*Math.PI*2,l=s.x+Math.cos(a)*(wt+320),c=s.y+Math.sin(a)*(wt+320);if(wa(n,l,c))return{x:l,y:c,kind:"monument"}}}let i=Gn(n,e.brain.raidTarget)||Lg(n,e,t);if(i){let s=Math.atan2(i.hy-t.hy,i.hx-t.hx);for(let r of[1700,2200,1300]){let o=t.hx+Math.cos(s)*r,a=t.hy+Math.sin(s)*r;if(wa(n,o,a))return{x:o,y:a,kind:"raid-forward"}}}for(let s=0;s<10;s++){let r=n.rng.rand(0,Math.PI*2),o=n.rng.rand(qi+200,qi+1600),a=t.hx+Math.cos(r)*o,l=t.hy+Math.sin(r)*o;if(wa(n,a,l))return{x:a,y:l,kind:"survival"}}return null}function Lg(n,e,t){let i=null,s=3e3*3e3;for(let r of n.teams)if(!(r===e||r.eliminated))for(let o of r.bases){if(o.dead)continue;let a=me(t.hx,t.hy,o.hx,o.hy);a>s&&(s=a,i=o)}return i}function vh(n,e){if(e.ally)return!1;let t=Math.floor(e.x/64),i=Math.floor(e.y/64),s=null,r=-1;for(let[a,l,c]of[[Ne("V",t,i),Je(t-1,i),!1],[Ne("V",t+1,i),Je(t+1,i),!1],[Ne("H",t,i),Je(t,i-1),!1],[Ne("H",t,i+1),Je(t,i+1),!0]]){let d=n.walls.get(a);if(!d||d.owner!==e.owner||d.type==="door")continue;let h=(n.structures.has(l)?0:60)+(c?12:0)+n.rng.rand(0,2);h>r&&(r=h,s=a)}if(!s)return!1;let o=n.walls.get(s);return o.type="door",o.open=!0,o.closeT=n.t+1.2,o.lock={by:e.owner},o.hp=Math.max(o.hp,50),o.max=Math.max(o.max,50),n.nav.stamp++,n.metrics.doorCuts=(n.metrics.doorCuts||0)+1,He(n,e.x,e.y,"cut a door","#caa46a"),!0}function Zr(n){n.path=null,n.pathI=0,n.repathN=0}function Gt(n,e,t,i,s,r={}){let o=r.arrive||16,a=ee(e.x,e.y,t,i);if(a<=o)return Zr(e),e.progBest=1e9,"arrived";let l=ee(e.pathGX,e.pathGY,t,i)>90,c=n.t-e.pathT>3,d=!e.path||n.t-(e.lastPlanT||-1)>.5;if((!e.path||l||c||e.pathI>=e.path.length)&&d){if(e.lastPlanT=n.t,a<192&&Ur(n,e.owner,e.x,e.y,t,i))e.path=[{x:t,y:i}],e.pathI=0;else{let M=Lf(n,e.owner,e.x,e.y,t,i);n.metrics.repaths++,M?(e.path=M,e.pathI=0,e.directFallback=!1):(n.metrics.pathFails++,e.path=[{x:t,y:i}],e.pathI=0,e.directFallback=!0)}e.pathGX=t,e.pathGY=i,e.pathT=n.t}let h=e.path[Math.min(e.pathI,e.path.length-1)],f=h.door?12:15;ee(e.x,e.y,h.x,h.y)<f&&e.pathI<e.path.length-1&&(e.pathI++,h=e.path[e.pathI]),!h.door&&e.pathI+1<e.path.length&&!e.path[e.pathI+1].door&&n.tick%7===e.tickPhase%7&&Ur(n,e.owner,e.x,e.y,e.path[e.pathI+1].x,e.path[e.pathI+1].y)&&(e.pathI++,h=e.path[e.pathI]);let u=r.speed||mt.BOT_SPEED,p=n.world.lakeAt(e.x,e.y);p&&!p.frozen&&(u*=.5);let x=Math.max(1,ee(e.x,e.y,h.x,h.y)),m=(h.x-e.x)/x,g=(h.y-e.y)/x,y=Math.min(u*s,x),v=e.x+m*y,b=e.y+g*y,A=e.x,E=e.y,D={passOwner:e.owner,openOwnDoors:!0},_=!1;if(Tt(n,e.x,e.y,13,D)?(e.x=v,e.y=b,_=!0):Tt(n,v,b,13,D)?(Tt(n,v,e.y,13,D)||(e.x=v,_=!0),Tt(n,e.x,b,13,D)||(e.y=b,_=!0)):(e.x=v,e.y=b,_=!0),e.x=it(e.x,12,ue.w-12),e.y=it(e.y,12,ue.h-12),e.vx=(e.x-A)/s,e.vy=(e.y-E)/s,_){let M=Math.atan2(g,m);e.angle=e.angle+Ea(e.angle,M)*Math.min(1,s*7)}if(e.progT+=s,e.progT>=.5){e.progT=0;let M=ee(e.x,e.y,t,i);if(M<e.progBest-12)e.progBest=M,e.noProgT=0,e.repathN=0;else if(e.noProgT=(e.noProgT||0)+.5,e.noProgT>=1.5){if(e.noProgT=0,e.repathN++,fa(n,e.x,e.y,12),fa(n,e.x+(t>e.x?64:-64),e.y,10),fa(n,e.x,e.y+(i>e.y?64:-64),10),n.metrics.stuckTotal+=1.5,e.path=null,e.lastPlanT=-1,e.repathN===2){let S=Math.atan2(i-e.y,t-e.x)+(e.id%2?1:-1)*Math.PI/2;e.detourX=e.x+Math.cos(S)*220,e.detourY=e.y+Math.sin(S)*220,e.detourT=n.t+2.5}if(e.repathN>=3)return e.repathN=0,e.progBest=1e9,Zr(e),n.metrics.stuckLog.push({t:n.t,owner:e.owner,x:e.x|0,y:e.y|0}),"stuck"}}if(e.detourT&&n.t<e.detourT)if(ee(e.x,e.y,e.detourX,e.detourY)>20){let S=Math.atan2(e.detourY-e.y,e.detourX-e.x),C=e.x+Math.cos(S)*u*s,N=e.y+Math.sin(S)*u*s;Tt(n,C,N,13,D)||(e.x=C,e.y=N)}else e.detourT=0;return!_&&e.path&&e.pathI<e.path.length-1?(e.wpStallT=(e.wpStallT||0)+s,e.wpStallT>.6&&(e.wpStallT=0,e.pathI++)):_&&(e.wpStallT=0),e.gotoTick=n.tick,_?e.stuckT=Math.max(0,e.stuckT-s*2):(e.stuckT+=s,e.state!=="raid"&&(n.metrics.maxStuck=Math.max(n.metrics.maxStuck,e.stuckT))),"moving"}function Hu(n,e,t){for(let i of n.units){if(i===e||i.dead||i.eliminated||i.flying||i.owner!==e.owner)continue;let s=me(e.x,e.y,i.x,i.y);if(s>.01&&s<324){let r=Math.sqrt(s),o=(18-r)*.5*t*6,a=(e.x-i.x)/r*o,l=(e.y-i.y)/r*o;Tt(n,e.x+a,e.y+l,13,{passOwner:e.owner})||(e.x+=a,e.y+=l)}}}function Nn(n,e,t,i,s=8){let r=Math.atan2(t-n.y,e-n.x);n.angle=n.angle+Ea(n.angle,r)*Math.min(1,i*s)}var Ea=(n,e)=>{let t=(e-n)%Xe;return t>Math.PI&&(t-=Xe),t<-Math.PI&&(t+=Xe),t};var Vu=mt.BOT_SPEED;function Yu(n,e,t){if(e.eliminated)return;let i=e.ally?null:n.teams[e.id];if(!e.ally&&!e.unfounded){let f=Vn(n,e);if(!f){Zu(n,e,i);return}f.tcKey!==e.tcKey&&$u(n,e,f);let u=En(n,f.tcKey);u&&(u.store.wood=Math.max(u.store.wood,40))}if(e.dead){e.respawnT-=t,e.respawnT<=0&&Ug(n,e,i);return}if(e.gunCd=Math.max(0,e.gunCd-t),e.rkCd=Math.max(0,e.rkCd-t),e.gnCd=Math.max(0,e.gnCd-t),e.fenceCd=Math.max(0,e.fenceCd-t),e.think-=t,e.expandT-=t,e.retaliateT=Math.max(0,e.retaliateT-t),e.disengageT=Math.max(0,e.disengageT-t),e.regenT=Math.max(0,e.regenT-t),e.regenT<=0&&e.hp<e.max&&(e.hp=Math.min(e.max,e.hp+9*t)),e.primary&&!e.unfounded&&!e.ally&&(e.hireT-=t,e.hireT<=0)){e.hireT=2;let f=Vn(n,e),u=f&&En(n,f.tcKey);e.scrap+(u?u.store.scrap:0)>=mt.WORKER_COST+24&&Ta(n,e)}if(e.aboard)if(e.aboard.destroyed||!e.aboard.riders.includes(e))e.aboard=null,e.flying=!1;else{e.flying=!0;return}if(e.flying&&(!e.copter||e.copter.destroyed)&&(e.flying=!1),e.flying&&e.state!=="trade"&&tp(e),e.unfounded){kg(n,e,i,t),Gu(n,e,t);return}e.endgame=n.aliveBases<=mt.ENDGAME_BASES||n.t>mt.ENDGAME_T;let s=i?i.brain:Ng,r=e.retaliateT>0&&me(e.x,e.y,e.threatX,e.threatY)<mt.REACT_R*mt.REACT_R&&!Mt(n,e.x,e.y);(n.tick+e.tickPhase)%9===0||e.thCache===void 0?e.thCache=ep(n,e)||Ah(n,e):e.thCache&&e.thCache.ref&&!e.thCache.ref.dead?(e.thCache.x=e.thCache.ref.x,e.thCache.y=e.thCache.ref.y):e.thCache&&e.thCache.ref&&e.thCache.ref.dead&&(e.thCache=null);let o=r?{x:e.threatX,y:e.threatY,vx:0,vy:0}:e.thCache,a=ee(e.x,e.y,e.hx,e.hy);me(e.x,e.y,n.world.shop.x,n.world.shop.y)<(wt+140)*(wt+140)&&(o=null),e.ally&&(e.raidUrge-=t);let l=e.raid&&Gn(n,e.raid),c=e.rocketer&&(e.state==="raid"||e.wasRaid)&&l&&e.rockets>0&&e.hp>=e.max*.2&&!s.urgent,d=o?ee(e.x,e.y,o.x,o.y):1e9;switch(o&&!c&&(e.defDuty||r&&!e.wasRaid||s.urgent||e.ally)&&!((e.wasRaid||e.endgame)&&d>=230)&&!(s.aggressor&&d>=160)?(e.state="defend",e.defHold=e.defDuty&&(s.attack||s.urgent)?2.5:.7,e.defTgt={x:o.x,y:o.y,vx:o.vx||0,vy:o.vy||0,ref:o.ref}):e.state==="defend"?(e.defHold-=t,e.defHold<=0&&(e.state="gather",e.defendT=0,e.defTgt=null)):e.state==="raid"&&(!l||i&&s.decaying)?(e.raid=null,e.wasRaid=!1,e.state="gather"):e.defDuty&&(s.attackers>0||s.urgent)&&a>340&&e.state!=="raid"&&e.state!=="trade"?e.state="return":e.state==="gather"&&Fg(n,e,i,s)&&(e.state=Og(n,e,i,s)),e.act=e.state,e.state){case"defend":Vg(n,e,i,s,o,t);break;case"raid":Gg(n,e,i,s,t);break;case"return":qg(n,e,t);break;case"trade":Yg(n,e,i,s,t);break;default:$g(n,e,i,s,t);break}Gu(n,e,t)}var Ng={sealed:!0,decaying:!1,ready:!1,attack:!1,urgent:!1,aggressor:!1,raidTarget:null};function Gu(n,e,t){if(Hu(n,e,t),e.gotoTick!==n.tick&&(e.stuckT=Math.max(0,e.stuckT-t)),!e.flying&&(e.state==="gather"||e.state==="raid"||e.state==="return"||e.state==="trade")&&Math.hypot(e.vx,e.vy)>30&&va(n,e,Math.atan2(e.vy,e.vx)),e.directFallback&&e.stuckT>1.5){let i=Math.floor(e.x/64),s=Math.floor(e.y/64),r=n.structures.get(i+","+s);r&&r.owner===e.owner&&vh(n,e)&&(Zr(e),e.directFallback=!1,e.stuckT=0)}n.metrics.act[e.act]=(n.metrics.act[e.act]||0)+t}function Zu(n,e,t){e.eliminated=!0,e.dead=!0,e.primary&&t&&!t.elimsPosted&&(t.elimsPosted=!0,t.eliminated=!0,n.elims.push({text:"Base "+(e.id+1)+" ELIMINATED",t:30}),n.metrics.elims++)}function $u(n,e,t){e.hx=t.hx,e.hy=t.hy,e.tcKey=t.tcKey,e.doorX=t.doorX,e.doorY=t.doorY,e.doorGy=t.doorGy,Zr(e)}function Ug(n,e,t){if(e.ally){e.hp=e.max,e.dead=!1,e.x=e.hx,e.y=e.hy+50,e.state="gather";return}if(!t)return;let i=t.bases.filter(r=>!r.dead);if(!i.length){Zu(n,e,t);return}let s=i[0];if(i.length>1&&!e.primary){let r=Gn(n,t.brain.raidTarget);r&&(e.rocketer||e.wasRaid||e.state==="raid")?s=i.reduce((o,a)=>me(o.hx,o.hy,r.hx,r.hy)<me(a.hx,a.hy,r.hx,r.hy)?o:a):s=i[Math.floor(n.rng.next()*i.length)]}$u(n,e,s),e.hp=e.max,e.dead=!1,e.x=s.hx,e.y=s.hy+50,e.state="gather",e.raid=null,e.wasRaid=!1,e.primary&&e.copter&&(e.copter.destroyed=!1,e.copter.hp=e.copter.max,e.copter.x=e.hx-256,e.copter.y=e.hy)}function kg(n,e,t,i){e.act="found";let s=e.inv.wood+e.inv.stone+e.inv.metal,r=ep(n,e);if(r&&!Mt(n,e.x,e.y)){ip(n,e,r,i);return}if(e.primary){if(s>=220){if(ee(e.x,e.y,e.siteX,e.siteY)<=128){Ou(n,t,e);return}Gt(n,e,e.siteX,e.siteY,i);return}}else if(s>=70)if(ee(e.x,e.y,e.siteX,e.siteY)<=192){let a=n.units.find(l=>l.owner===e.owner&&l.primary&&!l.dead);if(a)for(let l of["wood","stone","metal"])a.inv[l]+=e.inv[l],e.inv[l]=0}else{Gt(n,e,e.siteX,e.siteY,i);return}e.act="gather";let o=e.tgtNode;(!o||o.amount<=0)&&(o=Qg(n,e,"wood",2600)||qu(n,e,4e3)||qu(n,e,1e9),e.tgtNode=o),o&&np(n,e,o,i)}function Fg(n,e,t,i){if(e.monRun)return!1;let s=e.inv.wood+e.inv.stone+e.inv.metal;return!!(s>=mt.GATHER_LOAD||e.scrap>40||!e.ally&&t&&(i.breach||i.damaged&&bh(n,e)>=12||e.rocketer&&e.rockets<8&&e.role!=="turtle"&&n.t>=(e.tradeCd||0)&&(e.scrap>=12||s>=100||Th(n,e)>=24)||Ku(n,e,i)||Ju(n,e,i))||e.ally&&e.raidUrge<=0)}function Ku(n,e,t){if(e.ally||e.role==="turtle"||n.t<(e.tradeCd||0)||e.rockets>=(e.primary?12:6))return!1;let i=e.inv.wood+e.inv.stone+e.inv.metal;return(e.scrap>=24||i>=120||e.primary&&Th(n,e)>=48)&&(t.aggressor||Bg(n,e)||t.ready)}function Ju(n,e,t){return!(n.t>120||e.endgame)||n.t<e.raidCd||e.role==="turtle"&&!e.endgame||!(e.rockets>0||e.satchels>0||e.endgame)?!1:e.endgame||t.aggressor?!0:t.ready&&t.raidTarget&&e.raidBias<.72&&zg(n,e)>=4}function Og(n,e,t,i){let s=e.inv.wood+e.inv.stone+e.inv.metal;if(!e.ally&&t){let r=i.breach;if(r&&bh(n,e)<40)return"gather";let o=ee(e.x,e.y,e.hx,e.hy);if(r||i.damaged&&bh(n,e)>=12)return o>180?"return":"gather";if(e.rocketer&&e.rockets<8&&e.role!=="turtle"&&n.t>=(e.tradeCd||0)&&(e.scrap>=12||s>=100||Th(n,e)>=24))return"trade";if(e.scrap>40||s>=mt.GATHER_LOAD)return"return";if(Ku(n,e,i))return"trade";if(Ju(n,e,i)){let a=i.raidTarget;if(n.transports.find(c=>c.owner===e.owner&&!c.destroyed&&c.state!=="fly"&&c.state!=="unload"&&c.riders.length<Zt.seats)){let c=Qu(n,t);c&&(a=c)}if((!a||!Gn(n,a))&&(a=Eh(n,t,e)),a)return e.raid=a,e.raidCd=n.t+2,n.metrics.raidsLaunched++,"raid"}}if(e.ally&&e.raidUrge<=0){let r=Hg(n);if(r)return e.raid=r,e.raidUrge=n.rng.rand(24,44),"raid";e.raidUrge=n.rng.rand(8,14)}return"gather"}var bh=(n,e)=>e.inv.wood+ju(n,e,"wood"),Th=(n,e)=>ju(n,e,"scrap");function ju(n,e,t){let i=Vn(n,e),s=i&&En(n,i.tcKey);return s?s.store[t]:0}function Bg(n,e){let t=Vn(n,e),i=t&&En(n,t.tcKey);if(!i)return!1;let s=n.teams[e.id],r=2;for(let o of n.structures.values())o.owner===e.owner&&r++;for(let o of n.deploys.values())o.owner===e.owner&&o.type==="turret"&&r++;return i.store.wood+i.store.stone+i.store.metal>r*.0075*300}function zg(n,e){let t=0;for(let i of n.structures.values())i.owner===e.owner&&(i.type==="floor"||i.type==="trifloor")&&t++;return t}function Eh(n,e,t){let i=null,s=1e18,r=e.bases.find(a=>!a.dead);if(!r)return null;for(let a of n.teams){if(a===e||a.eliminated)continue;let l=a.bases.find(p=>!p.dead);if(!l)continue;let c=En(n,l.tcKey),d=c?c.store.wood+c.store.stone+c.store.metal:0,h=0;for(let p of n.deploys.values())p.owner===a.owner&&p.type==="turret"&&h++;let f=0;if(e.hard)for(let p of n.units)p.owner===a.owner&&!p.dead&&!p.eliminated&&me(p.x,p.y,l.hx,l.hy)<720*720&&f++;let u=me(r.hx,r.hy,l.hx,l.hy)*(1+h*mt.RAID_TUR_W)*(1+f*mt.RAID_DEF_W)/(1+d*.003);u<s&&(s=u,i=a)}let o=Gn(n,"player");return o&&!n.ghost&&me(r.hx,r.hy,o.hx,o.hy)<s&&(i="player"),i}function Hg(n){let e=null,t=1e18;for(let i of n.teams){if(i.eliminated)continue;let s=i.bases.find(o=>!o.dead);if(!s)continue;let r=me(n.player.x,n.player.y,s.hx,s.hy);r<t&&(t=r,e=i)}return e}function Qu(n,e){let t=e.bases.find(r=>!r.dead);if(!t)return null;let i=null,s=3e3*3e3;for(let r of n.teams){if(r===e||r.eliminated)continue;let o=r.bases.find(l=>!l.dead);if(!o)continue;let a=me(t.hx,t.hy,o.hx,o.hy);a>s&&(s=a,i=r)}return i}function ep(n,e){if(e.disengageT>0||Mt(n,e.x,e.y))return null;let t=null,i=mt.REACT_R*mt.REACT_R,s=n.player,r=(o,a,l,c,d,h)=>{if(d===e.unreach&&n.t<e.unreachT)return;let f=me(e.x,e.y,o,a);f>=i||h&&f>h*h||Mt(n,o,a)||ai(n,e.x,e.y,o,a)||(i=f,t={x:o,y:a,vx:l,vy:c,ref:d})};!e.ally&&!s.dead&&!s.inCopter&&!n.ghost&&r(s.x,s.y,s.vx,s.vy,s);for(let o of n.units)o.owner===e.owner||o.dead||o.flying||o.eliminated||r(o.x,o.y,o.vx,o.vy,o);for(let o of n.animals)!o.dead&&o.aggro&&r(o.x,o.y,o.vx,o.vy,o,360);for(let o of n.guards)o.dead||r(o.x,o.y,0,0,o,480);return t}function Ah(n,e){if(e.disengageT>0||Mt(n,e.x,e.y))return null;let t=null,i=430*430,s=n.player,r=(o,a,l,c,d)=>{if(d===e.unreach&&n.t<e.unreachT)return;let h=me(e.x,e.y,o,a);h>=i||Mt(n,o,a)||ai(n,e.x,e.y,o,a)||(i=h,t={x:o,y:a,vx:l,vy:c,ref:d})};!e.ally&&!s.dead&&!s.inCopter&&!n.ghost&&r(s.x,s.y,s.vx,s.vy,s);for(let o of n.units)o.owner===e.owner||o.dead||o.flying||o.eliminated||r(o.x,o.y,o.vx,o.vy,o);for(let o of n.guards)o.dead||r(o.x,o.y,0,0,o);return t}function Vg(n,e,t,i,s,r){e.defendT+=r;let o=s||e.defTgt;if(!o){e.state="gather";return}let a=e.raid&&Gn(n,e.raid),c=e.inv.wood+e.inv.stone+e.inv.metal>60||e.scrap>20,d=e.hp<e.max*.2;if((e.hp<e.max*(c?.45:.28)&&!a||d)&&!e.endgame&&!e.retreat&&n.rng.chance(c?.05:.02)&&(e.retreat=!0),e.retreat)if(e.hp>=e.max*.85||e.defendT>9)e.retreat=!1;else{e.disengageT=Math.max(e.disengageT,2.5),Ht(n,e.x,e.y,o.x,o.y)||Jr(n,e,o,r),(Gt(n,e,e.hx+e.lane,e.hy+e.hoff,r)==="arrived"||ee(e.x,e.y,e.hx,e.hy)<64*1.5)&&(e.retreat=!1,e.state="return");return}ip(n,e,o,r),nx(n,e,o);let f=a?2.2:7;e.defendT>f&&(a?e.state="raid":(e.disengageT=6,e.state="gather"),e.defendT=0)}function Gg(n,e,t,i,s){e.wasRaid=!0,e.act="raid";let r=Gn(n,e.raid);if(!r){e.wasRaid=!1,e.state="return";return}let o=En(n,r.tcKey);if(!o){e.wasRaid=!1,e.state="return";return}if(e.rockets<=0&&e.satchels<=0&&!e.endgame){e.raid=null,e.wasRaid=!1;let m=e.inv.wood+e.inv.stone+e.inv.metal;e.state=e.scrap>=8||m>=100?"trade":"gather";return}if(!e.aboard&&ee(e.x,e.y,e.hx,e.hy)<600&&ee(r.hx,r.hy,e.hx,e.hy)>2800){let m=n.transports.find(g=>g.owner===e.owner&&!g.destroyed&&(g.state==="idle"||g.state==="board")&&g.riders.length<Zt.seats);if(m){if(ee(e.x,e.y,m.x,m.y)<70){ou(n,e,m);return}Gt(n,e,m.x,m.y,s);return}}let a=ee(e.x,e.y,r.hx,r.hy),c=n.units.filter(m=>m.owner===e.owner&&m.state==="raid"&&m.raid===e.raid&&!m.dead&&me(m.x,m.y,r.hx,r.hy)<560*560).length>=2||e.endgame||e.ally;if(e.stagedFor!==e.raid&&(e.staged=!1,e.stagedFor=e.raid),a<700?e.staged=!0:a>1600&&(e.staged=!1),!e.staged){let m=Math.atan2(e.hy-r.hy,e.hx-r.hx),g=(e.id%5-2)*70+e.lane*2,y=r.hx+Math.cos(m)*540+Math.cos(m+Math.PI/2)*g,v=r.hy+Math.sin(m)*540+Math.sin(m+Math.PI/2)*g;Gt(n,e,y,v,s)==="stuck"&&(e.raidCd=n.t+8,e.raid=null,e.wasRaid=!1,e.state="gather");return}if(c&&a<(e.endgame?420:300)&&!Ht(n,e.x,e.y,r.hx,r.hy)){Nn(e,r.hx,r.hy,s),o.hp-=(e.endgame?140:e.hard?24:14)*s,o.hitT=n.t,n.rng.chance(.2)&&n.particles.push({x:r.hx+n.rng.rand(-10,10),y:r.hy+n.rng.rand(-10,10),vx:n.rng.rand(-40,40),vy:n.rng.rand(-60,-20),life:.4,max:.4,r:2,col:"#caa24a"}),o.hp<=0&&ah(n,r.tcKey,o,e.owner);return}let d=Wg(n,e,r),h=null,f=null,u=!1;if(d)h=d.c,f=d.key;else{let m=Xg(n,e,t,r);m?(h=m.c,f=m.key,u=m.door):h={x:r.hx,y:r.hy}}let p=ee(e.x,e.y,h.x,h.y);if(e.rockets>0){if(a>=mt.ROCKET_MIN&&a<460&&!Ht(n,e.x,e.y,r.hx,r.hy)){Nn(e,r.hx,r.hy,s),wh(n,e,r.hx,r.hy,2.2);return}if(p>380){let m=Math.atan2(e.y-h.y,e.x-h.x),g=(e.id%5-2)*70,y=h.x+Math.cos(m)*320+Math.cos(m+Math.PI/2)*g,v=h.y+Math.sin(m)*320+Math.sin(m+Math.PI/2)*g;Gt(n,e,y,v,s),Wu(n,e,r)}else if(p<mt.ROCKET_MIN){let m=Math.atan2(e.y-h.y,e.x-h.x),g=e.x+Math.cos(m)*120*s,y=e.y+Math.sin(m)*120*s;Tt(n,g,y,13,{passOwner:e.owner})||(e.x=g,e.y=y)}else Nn(e,h.x,h.y,s),wh(n,e,h.x,h.y,2.2);return}if(e.satchels>0&&c){p<100?e.rkCd<=0&&(n.satchels.push({x:h.x,y:h.y,t:2,from:e.owner}),e.satchels--,e.rkCd=2.6,He(n,e.x,e.y,"satchel!","#ffd0a0")):(Gt(n,e,h.x,h.y,s,{arrive:80}),Wu(n,e,r));return}let x=Ah(n,e);if(x)ee(e.x,e.y,x.x,x.y)<480?(Nn(e,x.x,x.y,s),Jr(n,e,x,s)):Gt(n,e,x.x,x.y,s);else if(c){let m=Math.atan2(e.hy-r.hy,e.hx-r.hx),g=(e.id%5-2)*64;Gt(n,e,h.x+Math.cos(m)*380+Math.cos(m+Math.PI/2)*g,h.y+Math.sin(m)*380+Math.sin(m+Math.PI/2)*g,s,{arrive:40})}else if(p<380){let m=Math.atan2(e.y-h.y,e.x-h.x),g=e.x+Math.cos(m)*Vu*s,y=e.y+Math.sin(m)*Vu*s;Tt(n,g,y,13,{passOwner:e.owner})||(e.x=g,e.y=y)}else Gt(n,e,h.x,h.y,s,{arrive:340})}function Wg(n,e,t){let i=null,s=1e18;for(let[r,o]of n.deploys){if(o.type!=="turret"||o.owner!==t.owner)continue;let[a,l]=r.split(",").map(Number),c=ct(a,l),d={1:340,2:380,3:460}[o.tier||1]+60,h=me(e.x,e.y,c.x,c.y);h<d*d&&!Ht(n,e.x,e.y,c.x,c.y)&&h<s&&(s=h,i={key:r,c})}return i}function Xg(n,e,t,i){for(let f of n.units)if(!(f.owner!==e.owner||f.dead||f.raid!==e.raid)&&me(f.x,f.y,i.hx,i.hy)<760*760&&!Ht(n,f.x,f.y,i.hx,i.hy))return null;let s=t?t.brain:null;if(s&&s.breachKey&&n.t-s.breachT<1.5){let f=n.walls.get(s.breachKey);if(f&&f.hp>0&&!(f.type==="door"&&f.open)){let u=Aa(n,s.breachKey,f);return{key:s.breachKey,c:u,door:f.type==="door"}}}let r=0,o=0,a=0;for(let f of n.units)f.owner===e.owner&&f.raid===e.raid&&!f.dead&&(r+=f.x,o+=f.y,a++);a||(r=e.x,o=e.y,a=1),r/=a,o/=a;let l=null,c=1e18,d=!1;for(let[f,u]of n.walls){if(u.owner!==i.owner||u.hp<=0||u.type==="door"&&u.open)continue;let p=Aa(n,f,u);if(me(p.x,p.y,i.hx,i.hy)>zt*zt)continue;let x=(ee(r,o,p.x,p.y)+ee(p.x,p.y,i.hx,i.hy))*(u.type==="door"?.6:1);x<c&&(c=x,l=f,d=u.type==="door")}if(!l)return null;s&&(s.breachKey=l,s.breachT=n.t);let h=n.walls.get(l);return{key:l,c:Aa(n,l,h),door:d}}function Aa(n,e,t){let i=e.split(","),s=+i[1],r=+i[2];return i[0]==="V"?{x:s*64,y:r*64+64/2}:{x:s*64+64/2,y:r*64}}function Wu(n,e,t){let i=null,s=57600,r=!1;for(let[a,l]of n.walls){if(l.owner!==t.owner||l.hp<=0||l.type==="door"&&l.open)continue;let c=Aa(n,a,l),d=me(e.x,e.y,c.x,c.y),h=l.type==="door";(d<s||h&&!r&&d<57600)&&(h||!r)&&(s=d,i=c,r=h)}if(!i||e.rkCd>0)return;let o=ee(e.x,e.y,i.x,i.y);e.rockets>0&&o>=mt.ROCKET_MIN?(Nn(e,i.x,i.y,1),wh(n,e,i.x,i.y,2.2)):o<90&&e.satchels>0&&(n.satchels.push({x:i.x,y:i.y,t:3,from:e.owner}),e.satchels--,e.rkCd=4.5)}function qg(n,e,t){e.wasRaid=!1,e.act="return",e.retT+=t;let i=Gt(n,e,e.hx+e.lane,e.hy+e.hoff,t,{arrive:64*1.5});if(i==="arrived"){Kr(n,e),e.state="gather",e.retT=0;return}if(i==="stuck"||e.retT>14){let s=e.ally?null:n.teams[e.id],r=s&&Vn(n,e);s&&r&&Hr(n,s,r)?i==="stuck"&&vh(n,e):(Kr(n,e),e.state="gather",e.retT=0)}}function Kr(n,e){if(e.ally){for(let s of["wood","stone","metal"])n.inv[s]+=e.inv[s],e.inv[s]=0;n.inv.scrap+=e.scrap,e.scrap=0;return}let t=Vn(n,e),i=t&&En(n,t.tcKey);if(i){for(let s of["wood","stone","metal"])i.store[s]+=e.inv[s],e.inv[s]=0;i.store.scrap+=e.scrap,e.scrap=0}}function Yg(n,e,t,i,s){e.act="trade";let r=n.world.shop;if(!r){e.state="return";return}let o=(e.id>=0?e.id:3)+(e.tradeJitter||0),a=r.x+Math.cos(o*2.39996)*wt*.34,l=r.y+Math.sin(o*2.39996)*wt*.34;if(!e.tradeDone){if(ee(e.x,e.y,r.x,r.y)>wt*.55){if(e.copter&&!e.copter.destroyed){Xu(n,e,a,l,s,wt*.5);return}Gt(n,e,a,l,s,{arrive:30})==="stuck"&&(e.tradeCd=n.t+20,e.tradeJitter=(e.tradeJitter||0)+1,e.state="return");return}Zg(n,e,t,i),e.tradeDone=!0;return}if(e.flying){Xu(n,e,e.hx-256,e.hy,s,46)&&(tp(e),e.tradeDone=!1,e.state="return");return}e.tradeDone=!1,e.state="return"}function Zg(n,e,t,i){let s=0;for(;e.inv.wood>=100;)e.inv.wood-=100,e.scrap+=6,s+=6;for(;e.inv.stone>=100;)e.inv.stone-=100,e.scrap+=9,s+=9;for(;e.inv.metal>=50;)e.inv.metal-=50,e.scrap+=10,s+=10;s>0&&He(n,e.x,e.y,"+"+s+" scrap","#ffe07a");let r=Vn(n,e),o=r&&En(n,r.tcKey);if(o){if(e.primary)e.scrap+=o.store.scrap,o.store.scrap=0;else if(e.rocketer){let c=Math.max(0,o.store.scrap-100);e.scrap+=c,o.store.scrap-=c}}let a=!1;for(e.primary&&t&&e.scrap>=Zt.cost&&!n.transports.some(c=>c.owner===e.owner&&!c.destroyed)&&Qu(n,t)&&(e.scrap-=Zt.cost,ru(n,t,e),a=!0),!e.weak&&e.gun==="pistol"&&e.scrap>=10&&(e.scrap-=10,e.gun=e.shotgun?"shotgun":"rifle",He(n,e.x,e.y,"+"+e.gun,"#bfe3ff"),a=!0),e.hard&&e.gun==="rifle"&&!e.rifleLaser&&e.scrap>=10&&(e.scrap-=10,e.rifleLaser=!0,He(n,e.x,e.y,"+laser","#ff6a6a"),a=!0);e.rockets<2&&e.scrap>=12;)e.scrap-=12,e.rockets++,a=!0;if(e.primary&&e.rockets>=2)for(;e.scrap>=mt.WORKER_COST&&Ta(n,e);)a=!0;for(;e.rockets<12&&e.scrap>=12;)e.scrap-=12,e.rockets++,a=!0;for(;e.satchels<4&&e.scrap>=8;)e.scrap-=8,e.satchels++,a=!0;if(e.grenades<2&&e.scrap>=8&&(e.scrap-=8,e.grenades++,a=!0),e.hard){for(;e.scrap>=14&&e.bodyArmor<3;)e.scrap-=14,e.bodyArmor++,He(n,e.x,e.y,"+armor","#9fb0c8"),a=!0;for(;e.scrap>=12&&e.facemask<3;)e.scrap-=12,e.facemask++,a=!0;for(;e.scrap>=20&&e.hqm<60;)e.scrap-=14,e.hqm+=10,a=!0}let l=n.units.filter(c=>c.owner===e.owner&&c.copter&&!c.copter.destroyed).length;(!e.copter||e.copter.destroyed)&&!e.aboard&&e.scrap>=mt.MINICOPTER_COST&&l<(e.hard?3:2)&&(e.scrap-=mt.MINICOPTER_COST,e.copter={x:e.x-128,y:e.y,angle:0,rotor:0,spin:0,vx:0,vy:0,hp:160,max:160,destroyed:!1},He(n,e.x,e.y,"+minicopter","#bfe3ff"),a=!0),a&&He(n,e.x,e.y-16,"resupplied","#bfe3ff")}function Xu(n,e,t,i,s,r=44){let o=e.copter;if(!o||o.destroyed)return!0;e.flying||(o.x=e.x,o.y=e.y,e.flying=!0,e.flyT=0),e.flyT=(e.flyT||0)+s;let a=ee(o.x,o.y,t,i);if(a<r||e.flyT>9)return e.flyT>9&&(o.x=t,o.y=i,o.vx=o.vy=0),e.x=o.x,e.y=o.y,!0;let l=Math.atan2(i-o.y,t-o.x);o.angle=o.angle+Ea(o.angle,l)*Math.min(1,s*4),o.rotor+=s*46;let c=a>160?1:Math.max(.12,a/160);o.vx+=Math.cos(o.angle)*_t.accel*c*s,o.vy+=Math.sin(o.angle)*_t.accel*c*s;let d=Math.pow(_t.drag,s);o.vx*=d,o.vy*=d;let h=Math.hypot(o.vx,o.vy);return h>_t.speed&&(o.vx*=_t.speed/h,o.vy*=_t.speed/h),o.x=it(o.x+o.vx*s,_t.r,ue.w-_t.r),o.y=it(o.y+o.vy*s,_t.r,ue.h-_t.r),e.x=o.x,e.y=o.y,!1}function tp(n){n.copter&&(n.copter.x=n.x,n.copter.y=n.y,n.copter.vx=0,n.copter.vy=0,n.copter.spin=0),n.flying=!1}function $g(n,e,t,i,s){e.wasRaid=!1,e.retT=0;let r=e.inv.wood+e.inv.stone+e.inv.metal,o=ee(e.x,e.y,e.hx,e.hy),a=o<200;e.gathering=!1;let l=t&&Vn(n,e);if(e.buildDuty&&t&&l){let h=Hr(n,t,l);if(h){if(e.act="build",o>200){Gt(n,e,e.hx+e.lane,e.hy+e.hoff,s);return}r>0&&Kr(n,e),hh(n,t,h,qs(n,e))&&(He(n,e.x,e.y,"sealed","#9ad06a"),e.maintT=n.t);return}if(a){r>0&&Kr(n,e);let f=ya(n,t,l);if(f&&Wf(n,t,f,qs(n,e))){e.act="build",e.maintT=n.t,He(n,e.x,e.y,"repaired","#9ad06a");return}if(e.expandT<=0&&(e.expandT=n.rng.rand(2.5,6),Bu(n,e))){e.act="build",e.maintT=n.t;return}}}if(a&&t&&l&&((r>100||e.scrap>0)&&Kr(n,e),i.breach&&hh(n,t,i.breach,qs(n,e))&&(i.breach=null,i.sealed=!0,e.maintT=n.t,He(n,e.x,e.y,"sealed","#9ad06a"))),e.qRun){let h=n.quarry;if(!h||h.owner===e.owner||n.t>e.qRun.until)e.qRun=null;else{e.act="quarry";let f=Ah(n,e),u=ee(e.x,e.y,h.x,h.y);if(f&&u<h.r){Nn(e,f.x,f.y,s,10),Jr(n,e,f,s);return}u>h.r*.5&&Gt(n,e,h.x,h.y,s,{arrive:h.r*.4})==="stuck"&&(e.qRun=null);return}}if(e.lootRun){let h=e.lootRun,f=n.t<h.until;if(h.kind==="crate"&&(f=f&&!!n.lockedCrate),h.kind==="airdrop"){let u=ee(e.x,e.y,h.x,h.y);(u<2200&&n.airdrop||!n.airdrop&&u<480)&&(f=!1)}if(h.kind==="pile"&&(ee(e.x,e.y,h.x,h.y)<480?f=!1:n.loot.some(p=>(p.kind==="rocket"||p.kind==="satchel")&&me(p.x,p.y,h.x,h.y)<300*300)||(f=!1)),!f)e.lootRun=null;else{e.act="loot",h.kind==="crate"&&n.lockedCrate&&ee(e.x,e.y,n.lockedCrate.x,n.lockedCrate.y)<=90||Gt(n,e,h.x,h.y,s,{arrive:80,speed:170})==="stuck"&&(e.lootRun=null);return}}if(e.lootSkipSet&&n.t>e.lootSkipT&&(e.lootSkipSet=null),e.lootTgt&&(!n.loot.includes(e.lootTgt)||me(e.x,e.y,e.lootTgt.x,e.lootTgt.y)>560*560)&&(e.lootTgt=null),!e.lootTgt){let h=null,f=520*520;for(let u of n.loot){if(e.lootSkipSet&&e.lootSkipSet.has(u))continue;let p=me(e.x,e.y,u.x,u.y);p<f&&(f=p,h=u)}e.lootTgt=h}if(e.lootTgt){e.act="loot",(Gt(n,e,e.lootTgt.x,e.lootTgt.y,s,{arrive:22,speed:170})==="stuck"||e.directFallback&&e.stuckT>2)&&(e.lootSkipSet||(e.lootSkipSet=new Set),e.lootSkipSet.add(e.lootTgt),e.lootSkipT=n.t+25,e.lootTgt=null);return}if(n.airdrop&&n.t>(e.airdropCd||0)&&me(e.x,e.y,n.airdrop.x,n.airdrop.gy)<2600*2600){let h=n.airdrop;e.act="airdrop";let f=h.fall<1?h.gy:h.y,u=ee(e.x,e.y,h.x,f);if(h.fall>=1&&u<150){Nn(e,h.x,h.y,s,10),e.gunCd<=0&&Ra(n,e,h.x,h.y);return}if(u>130){Gt(n,e,h.x,f,s,{arrive:120,speed:165})==="stuck"&&(e.airdropCd=n.t+25);return}return}if(n.lockedCrate&&!e.buildDuty&&n.t>(e.crateCd||0)&&me(e.x,e.y,n.lockedCrate.x,n.lockedCrate.y)<1600*1600){let h=n.lockedCrate;if(e.act="crate",ee(e.x,e.y,h.x,h.y)>90){Gt(n,e,h.x,h.y,s,{arrive:80,speed:165})==="stuck"&&(e.crateCd=n.t+30);return}return}if(!e.endgame){if(e.monRun){let h=Mh(n,e),f=h&&$r(n,h);if(e.monRunT+=s,!f||r>=340||e.monRunT>12)e.monRun=!1,e.monCd=n.t+n.rng.rand(60,110);else{e.act="monument";let u=ex(n,h);if(u&&me(e.x,e.y,h.x,h.y)<(h.r+320)*(h.r+320)){ee(e.x,e.y,u.x,u.y)>340||Ht(n,e.x,e.y,u.x,u.y)?Gt(n,e,u.x,u.y,s,{arrive:300})==="stuck"&&(e.monRun=!1,e.monCd=n.t+30):(Nn(e,u.x,u.y,s,10),Jr(n,e,{x:u.x,y:u.y,ref:u},s));return}let p=$r(n,h);if(p){ee(e.x,e.y,p.x,p.y)>120?Gt(n,e,p.x,p.y,s,{arrive:110,speed:150})==="stuck"&&(e.monRun=!1,e.monCd=n.t+14):(Nn(e,p.x,p.y,s,10),e.gunCd<=0&&Ra(n,e,p.x,p.y));return}}}else if(n.t>e.monCd&&r<200){let h=Mh(n,e);h&&$r(n,h)&&(me(h.x,h.y,e.hx,e.hy)<2100*2100||me(h.x,h.y,e.x,e.y)<1300*1300)&&(e.monRun=!0,e.monRunT=0)}}let c=Mh(n,e);c&&me(e.x,e.y,c.x,c.y)<(c.r+150)*(c.r+150)&&!e.monRun?(e.monStay+=s,e.monStay>10&&(e.monStay=0,e.monCd=n.t+45,e.tgtNode=null)):e.monStay=Math.max(0,e.monStay-2*s);let d=Kg(n,e);if(d){np(n,e,d,s);return}if(c&&$r(n,c)&&n.t>e.monCd){let h=$r(n,c);e.act="monument",ee(e.x,e.y,h.x,h.y)>120?Gt(n,e,h.x,h.y,s,{arrive:110,speed:150})==="stuck"&&(e.monCd=n.t+30):(Nn(e,h.x,h.y,s,10),e.gunCd<=0&&Ra(n,e,h.x,h.y));return}e.act="roam",tx(n,e,s)}function np(n,e,t,i){if(ee(e.x,e.y,t.x,t.y)>t.r+22){e.act="toNode",Gt(n,e,t.x,t.y,i,{arrive:t.r+18})==="stuck"&&((!e.skipSet||n.t>e.skipT)&&(e.skipSet=new Set),e.skipSet.add(t),e.skipT=n.t+10,e.tgtNode=null);return}if(e.act="gather",e.gathering=!0,Nn(e,t.x,t.y,i),e.swing+=i*9,e.think<=0){e.think=.5;let r=Math.min(e.jack?24:8,t.amount);r>0&&(t.amount-=r,t.regen=0,e.inv[t.base]+=r,n.events.push({type:"harvest",x:t.x,y:t.y,kind:t.base,jack:e.jack}))}}function Kg(n,e){if(e.tgtNode){let i=e.tgtNode,s=i.by&&i.by!==e&&!i.by.dead&&n.t-i.byT<3;if(i.amount>0&&!s)return i.by=e,i.byT=n.t,i;e.tgtNode=null}let t=[1400,2800,5600,1e9];for(let i of t){let s=null,r=1e18;for(let o of n.resources){if(o.amount<=0||e.skipSet&&e.skipSet.has(o)&&n.t<e.skipT)continue;let a=me(o.x,o.y,e.hx,e.hy);if(a<57600||a>i*i||o.by&&o.by!==e&&!o.by.dead&&n.t-o.byT<2.5||n.structures.has(Jg(o.x,o.y)))continue;let l=me(e.x,e.y,o.x,o.y);l*=jg(n,e,o)?1:6,l<r&&(r=l,s=o)}if(s)return s.by=e,s.byT=n.t,e.tgtNode=s,s}return null}var Jg=(n,e)=>Math.floor(n/64)+","+Math.floor(e/64);function jg(n,e,t){return t._losT&&n.t-t._losT<2&&t._losFor===e||(t._los=Nf(n,e.x,e.y,t.x,t.y),t._losT=n.t,t._losFor=e),t._los}function qu(n,e,t){let i=null,s=t*t;for(let r of n.resources){if(r.amount<=0)continue;let o=me(e.x,e.y,r.x,r.y);o<s&&(s=o,i=r)}return i}function Qg(n,e,t,i){let s=null,r=i*i;for(let o of n.resources){if(o.amount<=0||o.base!==t)continue;let a=me(e.x,e.y,o.x,o.y);a<r&&(r=a,s=o)}return s}function Mh(n,e){let t=null,i=1e18;for(let s of n.world.monuments){if(s.type==="quarry")continue;let r=me(e.x,e.y,s.x,s.y);r<i&&(i=r,t=s)}return t}function $r(n,e){for(let t of n.barrels)if(!(t.hp<=0||t.tier!=="mon")&&me(t.x,t.y,e.x,e.y)<(e.r+220)*(e.r+220))return t;return null}function ex(n,e){let t=null,i=(e.r+280)*(e.r+280);for(let s of n.guards){if(s.dead)continue;let r=me(s.x,s.y,e.x,e.y);r<i&&(i=r,t=s)}return t}function tx(n,e,t){if(!e.roamX||ee(e.x,e.y,e.roamX,e.roamY)<140||n.t>(e.roamT||0))for(let i=0;i<12;i++){let s=n.rng.rand(800,ue.w-800),r=n.rng.rand(800,ue.h-800);if(!(!n.world.onLand(s,r)||n.world.lakeAt(s,r))){e.roamX=s,e.roamY=r,e.roamT=n.t+n.rng.rand(7,13);break}}e.roamX&&Gt(n,e,e.roamX,e.roamY,t,{speed:140,arrive:120})==="stuck"&&(e.roamX=0)}function ip(n,e,t,i){e.hp<e.max*.35&&ix(n,e,t);let s=t.x,r=t.y;if(e.hard&&(t.vx||t.vy)){let l=e.weak?1150:1500,c=Math.min(.7,ee(e.x,e.y,t.x,t.y)/l);s+=(t.vx||0)*c,r+=(t.vy||0)*c}let o=ee(e.x,e.y,t.x,t.y);if(!Ht(n,e.x,e.y,t.x,t.y)&&!ai(n,e.x,e.y,t.x,t.y)&&o<460){if(Nn(e,s,r,i,10),Jr(n,e,{x:s,y:r,ref:t.ref},i),o<140?e.backoff=!0:o>180&&(e.backoff=!1),e.backoff){let l=Math.atan2(e.y-t.y,e.x-t.x),c=e.x+Math.cos(l)*120*i,d=e.y+Math.sin(l)*120*i;Tt(n,c,d,13,{passOwner:e.owner})||(e.x=c,e.y=d,e.path=null)}else if(e.regenT>0||e.retaliateT>0){e.strafeT-=i,e.strafeT<=0&&(e.strafeT=mt.STRAFE_FLIP,e.strafeS=-e.strafeS);let l=Math.atan2(t.y-e.y,t.x-e.x)+Math.PI/2*e.strafeS,c=e.x+Math.cos(l)*120*i,d=e.y+Math.sin(l)*120*i;Tt(n,c,d,13,{passOwner:e.owner})||(e.x=c,e.y=d,e.path=null)}}else Gt(n,e,t.x,t.y,i,{arrive:380})==="stuck"&&(e.disengageT=4,e.retaliateT=0,e.defHold=0,e.defTgt=null,e.thCache=null,t.ref&&(e.unreach=t.ref,e.unreachT=n.t+25))}function Jr(n,e,t,i){e.gunCd>0||e.flying||e.dead||Mt(n,e.x,e.y)||Mt(n,t.x,t.y)||Ht(n,e.x,e.y,t.x,t.y)||ai(n,e.x,e.y,t.x,t.y)||Ra(n,e,t.x,t.y)}function Ra(n,e,t,i){let s=ee(e.x,e.y,t,i),r=Math.atan2(i-e.y,t-e.x);e.angle=r;let o=18;if(e.gun==="shotgun"&&s<420){e.gunCd=.34;for(let a=0;a<6;a++)Ln(n,{x:e.x+Math.cos(r)*o,y:e.y+Math.sin(r)*o,angle:r+n.rng.rand(-.18,.18),speed:1050,dmg:8,from:e.owner,life:.95})}else if(e.gun==="rifle"){e.gunCd=e.hard?.12:.16;let a=e.hard?.02:.055;e.rifleLaser&&(a*=.45),Ln(n,{x:e.x+Math.cos(r)*o,y:e.y+Math.sin(r)*o,angle:r+n.rng.rand(-a,a),speed:1500,dmg:e.hard?13:11,from:e.owner,life:1.6})}else e.gunCd=.3,Ln(n,{x:e.x+Math.cos(r)*o,y:e.y+Math.sin(r)*o,angle:r+n.rng.rand(-.1,.1),speed:1150,dmg:7,from:e.owner,life:1.6});n.events.push({type:"botShot",x:e.x,y:e.y,a:r})}function wh(n,e,t,i,s){if(e.rkCd>0||e.rockets<=0||ee(e.x,e.y,t,i)<mt.ROCKET_MIN||Mt(n,e.x,e.y))return!1;e.rkCd=s||2.4,e.rockets--;let r=Math.atan2(i-e.y,t-e.x);return Vr(n,e.x+Math.cos(r)*22,e.y+Math.sin(r)*22,r,e.owner),!0}function nx(n,e,t){if(e.grenades<=0||e.gnCd>0)return;let i=ee(e.x,e.y,t.x,t.y);if(i<150||i>380)return;let s=!1,r=n.player;if(!r.dead&&me(t.x,t.y,r.x,r.y)<4900&&(s=!0),!s){for(let l of n.units)if(!l.dead&&l.owner!==e.owner&&me(t.x,t.y,l.x,l.y)<4900){s=!0;break}}if(!s)return;e.gnCd=n.rng.rand(5,8),e.grenades--;let o=Math.atan2(t.y-e.y,t.x-e.x),a=Math.min(420,i)*5.4;n.grenades.push({x:e.x+Math.cos(o)*22,y:e.y+Math.sin(o)*22,vx:Math.cos(o)*a*.2,vy:Math.sin(o)*a*.2,t:zs.fuse,from:e.owner,bob:0}),He(n,e.x,e.y,"grenade!","#ffd0a0")}function ix(n,e,t){if(e.fenceCd>0)return;let i=qs(n,e),s=0;for(let f of i)s+=f.wood||0;if(s<10)return;let r=Math.atan2(t.y-e.y,t.x-e.x),o=e.x+Math.cos(r)*30,a=e.y+Math.sin(r)*30,l=Math.floor(o/64),c=Math.floor(a/64);if(n.structures.has(l+","+c))return;let d=10;for(let f of i){let u=Math.min(d,f.wood||0);if(f.wood-=u,d-=u,d<=0)break}let h=r+Math.PI/2;n.fences.push({x:o,y:a,a:h,owner:e.owner,hp:200,max:200,t:60,x0:o-Math.cos(h)*23,y0:a-Math.sin(h)*23,x1:o+Math.cos(h)*23,y1:a+Math.sin(h)*23}),n.fences.length>120&&n.fences.shift(),n.needFenceRefresh=!0,e.fenceCd=9}function sp(n,e){for(let[o,a]of n.walls)a.type==="door"&&a.open&&a.closeT!==void 0&&n.t>a.closeT&&(a.open=!1,n.nav.stamp++);let t=0;for(let o of n.teams)o.eliminated||(o.bases.some(a=>!a.dead)||n.units.some(a=>a.owner===o.owner&&a.unfounded&&!a.eliminated))&&t++;if(n.aliveBases=t,n.dbSweepT-=e,n.dbSweepT<=0){n.dbSweepT=2;for(let o of n.teams)for(let a of o.bases)!a.dead&&!En(n,a.tcKey)&&(a.dead=!0),a.dead&&!a.cleared&&(a.cleared=!0,lh(n,o.owner,a.hx,a.hy))}if(n.aggroT-=e,n.aggroT<=0){let o=n.teams.find(l=>l.owner===n.aggressorOwner);if(o&&!o.eliminated&&o.brain.raidTarget&&Gn(n,o.brain.raidTarget)&&n.units.some(l=>l.owner===o.owner&&!l.dead&&!l.eliminated))n.aggroT=8;else{let l=n.teams.filter(c=>!c.eliminated&&n.units.some(d=>d.owner===c.owner&&d.primary&&!d.eliminated));if(l.length){let c=l[Math.floor(n.rng.next()*l.length)];n.aggressor=c.id,n.aggressorOwner=c.owner}n.aggroT=n.rng.rand(35,55)}}n.roleT-=e;let i=n.roleT<=0;i&&(n.roleT=.4);for(let o of n.teams){if(o.eliminated)continue;let a=o.brain,l=o.bases.filter(M=>!M.dead);if(!l.length)continue;let c=n.units.find(M=>M.owner===o.owner&&M.primary&&!M.eliminated);if(a.statusT-=e,a.statusT<=0){a.statusT=.5;let M=l[0];a.breach=Hr(n,o,M),a.damaged=ya(n,o,M),a.sealed=!a.breach;let S=2,C=0,N=0;for(let H of n.structures.values())H.owner===o.owner&&(S++,N++);for(let H of n.deploys.values())H.owner===o.owner&&H.type==="turret"&&(S++,C++);let W=Yr(n,o),Y=W?W.wood+W.stone+W.metal:0;a.decaying=Y<S*Dr*150;let U=o.hard?4:o.weak?2:3;a.ready=a.sealed&&C>=U&&Y>S*Dr*300&&N>=(o.hard?6:4),a.floors=N,a.turrets=C}if(!i)continue;let d=n.units.filter(M=>M.owner===o.owner&&!M.eliminated&&!M.dead&&!M.flying&&!M.unfounded&&!M.aboard),h=(M,S)=>l.some(C=>me(M,S,C.hx,C.hy)<720*720),f=0,u=0,p=0,x=n.player;!x.dead&&!x.inCopter&&!n.ghost&&h(x.x,x.y)&&(f++,u+=x.x,p+=x.y);for(let M of n.units)M.owner===o.owner||M.dead||M.flying||M.eliminated||h(M.x,M.y)&&(f++,u+=M.x,p+=M.y);let m=!1;for(let M of n.rockets)if(M.from!==o.owner&&h(M.x,M.y)){m=!0;break}if(!m){for(let M of n.satchels)if(M.from!==o.owner&&h(M.x,M.y)){m=!0;break}}a.attackers=f,a.urgent=m,a.attack=f>0||n.units.some(M=>M.raid===o&&M.state==="raid"&&!M.dead),a.aggressor=o.owner===n.aggressorOwner||n.aliveBases<=3;let g=0;if(o.hard)for(let M of n.units)M.owner===o.owner||M.dead||M.eliminated||M.state==="raid"&&M.raid===o&&l.some(S=>me(M.x,M.y,S.hx,S.hy)<1400*1400)&&g++;let y=Math.max(f,g),v=m?d.length:y>0?Math.min(y+1,d.length):0;f>0?(u/=f,p/=f):(u=l[0].hx,p=l[0].hy);let b=[...d].sort((M,S)=>me(M.x,M.y,u,p)-me(S.x,S.y,u,p));for(let M=0;M<b.length;M++)b[M].defDuty=M<v;let A=Yr(n,o);(!a.sealed||A&&A.wood>=40&&a.floors<(o.hard?49:36))&&(a.buildHoldT=n.t+6);let D=d.filter(M=>!M.defDuty),_=null;n.t<a.buildHoldT&&D.length>=2&&(_=D.find(M=>M.buildDuty)||D.reduce((M,S)=>me(M.x,M.y,l[0].hx,l[0].hy)<me(S.x,S.y,l[0].hx,l[0].hy)?M:S,D[0]));for(let M of d)M.buildDuty=M===_;if(m||f>0&&!a.aggressor){a.raidTarget=null;for(let M of d)M.rocketer=!1}else if(a.ready||a.aggressor){let M=0;for(let U of d)M+=U.rockets+U.satchels;let S=d.filter(U=>!U.defDuty&&!U.buildDuty),C=Math.min(n.aliveBases<=4?3:2,S.length),N=S.filter(U=>U.rocketer);for(let U of d)U.rocketer&&(U.defDuty||U.buildDuty)&&(U.rocketer=!1,N=N.filter(H=>H!==U));if(N.length<C){let U=S.filter(H=>!H.rocketer).sort((H,$)=>$.rockets+$.satchels-(H.rockets+H.satchels)||me(H.x,H.y,l[0].hx,l[0].hy)-me($.x,$.y,l[0].hx,l[0].hy));for(let H of U){if(N.length>=C)break;H.rocketer=!0,N.push(H)}}let W=a.aggressor?2:4,Y=d.filter(U=>!U.defDuty).length;c&&Y>=2&&M>=W?(!a.raidTarget||!Gn(n,a.raidTarget))&&(a.raidTarget=Eh(n,o,c)):a.raidTarget=null}else{a.raidTarget=null;for(let M of d)M.rocketer=!1}if(o.hard&&n.t>a.lootCd&&!n.units.some(M=>M.owner===o.owner&&M.lootRun)){let M=null;if(n.lockedCrate)M={x:n.lockedCrate.x,y:n.lockedCrate.y,kind:"crate"};else if(n.airdrop)M={x:n.airdrop.x,y:n.airdrop.gy,kind:"airdrop"};else for(let S of n.loot){if(S.kind!=="rocket"&&S.kind!=="satchel")continue;let C=!1;for(let N of n.teams)if(!(N===o||N.eliminated)&&N.bases.some(W=>!W.dead&&me(S.x,S.y,W.hx,W.hy)<800*800)){C=!0;break}if(!C){M={x:S.x,y:S.y,kind:"pile"};break}}if(M){let S=n.units.filter(C=>C.owner===o.owner&&!C.dead&&!C.eliminated&&!C.primary&&!C.defDuty&&!C.buildDuty&&!C.rocketer&&!C.monRun&&C.state==="gather").sort((C,N)=>me(C.x,C.y,M.x,M.y)-me(N.x,N.y,M.x,M.y))[0];if(S){let C=ee(S.x,S.y,M.x,M.y),N=M.kind==="pile"?520:2400;C>N&&C<4500&&(S.lootRun={x:M.x,y:M.y,kind:M.kind,until:n.t+C/mt.BOT_SPEED*1.8+(M.kind==="crate"?170:20)},a.lootCd=n.t+45)}}}if(n.quarry&&n.quarry.owner!==o.owner&&n.t>a.qCd&&!n.units.some(M=>M.owner===o.owner&&M.qRun)){let M=n.units.filter(S=>S.owner===o.owner&&!S.dead&&!S.eliminated&&!S.primary&&!S.defDuty&&!S.buildDuty&&!S.rocketer&&!S.monRun&&!S.lootRun&&S.state==="gather").sort((S,C)=>me(S.x,S.y,n.quarry.x,n.quarry.y)-me(C.x,C.y,n.quarry.x,n.quarry.y))[0];if(M){let S=ee(M.x,M.y,n.quarry.x,n.quarry.y);S<5200&&(M.qRun={until:n.t+S/mt.BOT_SPEED*1.8+25},a.qCd=n.t+(o.hard?90:150))}}if(o.hard&&c&&!n.signal&&!n.plane&&!n.airdrop&&n.t>a.sigCd){let M=Yr(n,o);if(c.scrap+(M?M.scrap:0)>=mt.SIGNAL_COST+60){let C=l[0];for(let N=0;N<8;N++){let W=N/8*Math.PI*2,Y=C.hx+Math.cos(W)*620,U=C.hy+Math.sin(W)*620;if(Y<300||U<300||Y>ue.w-300||U>ue.h-300||ee(Y,U,n.world.shop.x,n.world.shop.y)<wt||!n.world.onLand(Y,U)||n.world.lakeAt(Y,U))continue;let H=mt.SIGNAL_COST,$=Math.min(H,c.scrap);c.scrap-=$,H-=$,H>0&&M&&(M.scrap-=H),pu(n,Y,U),a.sigCd=n.t+n.rng.rand(150,240),He(n,C.hx,C.hy-40,"supply signal!","#c9a0ff");break}}}}for(let o of n.teams)o.eliminated||zu(n,o,e);let s=0,r=null;for(let o of n.teams){if(o.eliminated)continue;let a=0;for(let l of n.units)l.owner===o.owner&&(a+=l.kills);a>s&&(s=a,r=o.id)}if(n.bounty=s>0?r:null,!n.metrics.winner){let o=n.teams.filter(a=>!a.eliminated);o.length===1&&n.teams.length>1&&(n.metrics.winner=o[0].owner,n.metrics.decisiveT=n.t)}}function rp(n){let e=Pr;n.t+=e,n.tick++,n.clouds||xh(n),n.needFenceRefresh&&(n.needFenceRefresh=!1,Df(n)),Mu(n,e),Qf(n,e),Lu(n,e),Nu(n,e),eu(n,e),Gf(n,e),du(n,e),yu(n,e),lu(n,e),cu(n,e),fu(n,e),gu(n,e),mu(n,e),hu(n,e),xu(n,e),Kf(n,e),iu(n,e),Jf(n,e),jf(n,e),sx(n,e),rx(n,e),n.raidAlarm&&(n.raidAlarm.t-=e,n.raidAlarm.t<=0&&(n.raidAlarm=null)),sp(n,e),au(n,e);for(let t of n.units)Yu(n,t,e);for(let t=n.elims.length-1;t>=0;t--)n.elims[t].t-=e,n.elims[t].t<=0&&n.elims.splice(t,1);Yf(n,e),nu(n,e),_u(n,e);for(let t=n.particles.length-1;t>=0;t--){let i=n.particles[t],s=Math.pow(.9,e*60);i.vx*=s,i.vy*=s,i.x+=i.vx*e,i.y+=i.vy*e,i.life-=e,i.life<=0&&n.particles.splice(t,1)}for(let t=n.floats.length-1;t>=0;t--){let i=n.floats[t];i.y+=i.vy*e,i.life-=e,i.life<=0&&n.floats.splice(t,1)}for(let t=n.flashes.length-1;t>=0;t--)n.flashes[t].life-=e,n.flashes[t].life<=0&&n.flashes.splice(t,1);for(let t=n.blasts.length-1;t>=0;t--)n.blasts[t].life-=e,n.blasts[t].life<=0&&n.blasts.splice(t,1);n.muzzle&&(n.muzzle.t-=e,n.muzzle.t<=0&&(n.muzzle=null)),n.shake=Math.max(0,n.shake-26*e),n.tip&&(n.tip.t-=e,n.tip.t<=0&&(n.tip=null)),n.events.length>600&&n.events.splice(0,n.events.length-600),n.tick%120===0&&ax(n)}function sx(n,e){for(let t=n.fences.length-1;t>=0;t--){let i=n.fences[t];i.t-=e,i.t<=0&&(n.fences.splice(t,1),n.needFenceRefresh=!0)}}function rx(n,e){for(let t=n.raids.length-1;t>=0;t--)n.raids[t].t-=e,n.raids[t].t<=0&&n.raids.splice(t,1)}function ox(n,e){let t=Math.floor(e.x/64),i=Math.floor(e.y/64);for(let s of["V,"+t+","+i,"V,"+(t+1)+","+i,"H,"+t+","+i,"H,"+t+","+(i+1)]){let r=n.walls.get(s);if(!r||r.hp<=0||r.type==="door"&&r.open||r.owner===e.owner)continue;let o=Ft(s,r);if(Et(e.x,e.y,o[0],o[1],o[2],o[3])<3)return!0}return!1}function ax(n){let e=n.metrics;for(let t of n.units)if(!(t.dead||t.eliminated)&&((!isFinite(t.x)||!isFinite(t.y))&&(e.nan=(e.nan||0)+1,t.x=t.hx,t.y=t.hy),ox(n,t)&&e.wallPhase++,t.stuckT>1.5&&t.state!=="raid")){let i=n.world.lakeAt(t.x,t.y),s="open";if(Math.abs(t.x-t.hx)<460&&Math.abs(t.y-t.hy)<460)s="base";else if(i)s="lake";else for(let r of n.world.monuments)if((t.x-r.x)**2+(t.y-r.y)**2<(r.r+220)**2){s="monument";break}e.regionStuck[s]+=2}if((!isFinite(n.player.x)||!isFinite(n.player.y))&&(e.nan=(e.nan||0)+1,n.player.x=6912,n.player.y=4868),n.t-(e._wlT||0)>=60){e._wlT=n.t;let t={t:Math.round(n.t)};for(let i of n.teams)t[i.owner]=n.units.filter(s=>s.owner===i.owner&&!s.eliminated).length;e.workerLog.push(t)}}var Hp=0,md=1,Vp=2;var Go=1,Gp=2,wr=3,Fi=0,xn=1,In=2,_i=0,ns=1,wn=2,gd=3,xd=4,Wp=5;var is=100,Xp=101,qp=102,Yp=103,Zp=104,$p=200,Kp=201,Jp=202,jp=203,il=204,sl=205,Qp=206,em=207,tm=208,nm=209,im=210,sm=211,rm=212,om=213,am=214,rl=0,ol=1,al=2,Rs=3,ll=4,cl=5,hl=6,dl=7,Wl=0,lm=1,cm=2,ni=0,yd=1,_d=2,vd=3,Md=4,bd=5,wd=6,Td=7;var Ed=300,cs=301,Ls=302,Xl=303,ql=304,Wo=306,di=1e3,hi=1001,fl=1002,pn=1003,hm=1004;var Xo=1005;var gn=1006,Yl=1007;var vi=1008;var Pn=1009,Ad=1010,Rd=1011,Tr=1012,Zl=1013,ii=1014,Zn=1015,Mi=1016,$l=1017,Kl=1018,Er=1020,Cd=35902,Sd=35899,Id=1021,Pd=1022,$n=1023,fi=1026,hs=1027,Jl=1028,jl=1029,ds=1030,Ql=1031;var ec=1033,qo=33776,Yo=33777,Zo=33778,$o=33779,tc=35840,nc=35841,ic=35842,sc=35843,rc=36196,oc=37492,ac=37496,lc=37488,cc=37489,Ko=37490,hc=37491,dc=37808,fc=37809,uc=37810,pc=37811,mc=37812,gc=37813,xc=37814,yc=37815,_c=37816,vc=37817,Mc=37818,bc=37819,wc=37820,Tc=37821,Ec=36492,Ac=36494,Rc=36495,Cc=36283,Sc=36284,Jo=36285,Ic=36286;var ho=2300,ul=2301,nl=2302,td=2303,nd=2400,id=2401,sd=2402;var dm=3200;var Pc=0,fm=1,Vi="",on="srgb",fo="srgb-linear",uo="linear",Rt="srgb";var As=7680;var rd=519,um=512,pm=513,mm=514,Dc=515,gm=516,xm=517,Lc=518,ym=519,pl=35044;var Dd="300 es",ti=2e3,fr=2001;function lx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function cx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function po(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function _m(){let n=po("canvas");return n.style.display="block",n}var op={},ur=null;function mo(...n){let e="THREE."+n.shift();ur?ur("log",e,...n):console.log(e,...n)}function vm(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Qe(...n){n=vm(n);let e="THREE."+n.shift();if(ur)ur("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function je(...n){n=vm(n);let e="THREE."+n.shift();if(ur)ur("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ml(...n){let e=n.join(" ");e in op||(op[e]=!0,Qe(...n))}function Mm(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var bm={[rl]:ol,[al]:hl,[ll]:dl,[Rs]:cl,[ol]:rl,[hl]:al,[dl]:ll,[cl]:Rs},ui=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Rh=Math.PI/180,gl=180/Math.PI;function Ui(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]).toLowerCase()}function ut(n,e,t){return Math.max(e,Math.min(t,n))}function hx(n,e){return(n%e+e)%e}function Ch(n,e,t){return(1-t)*n+t*e}function ci(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Dt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Pe=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pi=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],d=i[s+2],h=i[s+3],f=r[o+0],u=r[o+1],p=r[o+2],x=r[o+3];if(h!==x||l!==f||c!==u||d!==p){let m=l*f+c*u+d*p+h*x;m<0&&(f=-f,u=-u,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),v=Math.sin(y);g=Math.sin(g*y)/v,a=Math.sin(a*y)/v,l=l*g+f*a,c=c*g+u*a,d=d*g+p*a,h=h*g+x*a}else{l=l*g+f*a,c=c*g+u*a,d=d*g+p*a,h=h*g+x*a;let y=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=y,c*=y,d*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],d=i[s+3],h=r[o],f=r[o+1],u=r[o+2],p=r[o+3];return e[t]=a*p+d*h+l*u-c*f,e[t+1]=l*p+d*f+c*h-a*u,e[t+2]=c*p+d*u+a*f-l*h,e[t+3]=d*p-a*h-l*f-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(s/2),h=a(r/2),f=l(i/2),u=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*d*h+c*u*p,this._y=c*u*h-f*d*p,this._z=c*d*p+f*u*h,this._w=c*d*h-f*u*p;break;case"YXZ":this._x=f*d*h+c*u*p,this._y=c*u*h-f*d*p,this._z=c*d*p-f*u*h,this._w=c*d*h+f*u*p;break;case"ZXY":this._x=f*d*h-c*u*p,this._y=c*u*h+f*d*p,this._z=c*d*p+f*u*h,this._w=c*d*h-f*u*p;break;case"ZYX":this._x=f*d*h-c*u*p,this._y=c*u*h+f*d*p,this._z=c*d*p-f*u*h,this._w=c*d*h+f*u*p;break;case"YZX":this._x=f*d*h+c*u*p,this._y=c*u*h+f*d*p,this._z=c*d*p-f*u*h,this._w=c*d*h-f*u*p;break;case"XZY":this._x=f*d*h-c*u*p,this._y=c*u*h-f*d*p,this._z=c*d*p+f*u*h,this._w=c*d*h+f*u*p;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],h=t[10],f=i+a+h;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(d-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(i>a&&i>h){let u=2*Math.sqrt(1+i-a-h);this._w=(d-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>h){let u=2*Math.sqrt(1+a-i-h);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+d)/u}else{let u=2*Math.sqrt(1+h-i-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+d)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+o*a+s*c-r*l,this._y=s*d+o*l+r*a-i*c,this._z=r*d+o*c+i*l-s*a,this._w=o*d-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ap.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ap.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),d=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*d,this.y=i+l*d+a*c-r*h,this.z=s+l*h+r*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Sh.copy(this).projectOnVector(e),this.sub(Sh)}reflect(e){return this.sub(Sh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Sh=new F,ap=new pi,rt=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],u=i[5],p=i[8],x=s[0],m=s[3],g=s[6],y=s[1],v=s[4],b=s[7],A=s[2],E=s[5],D=s[8];return r[0]=o*x+a*y+l*A,r[3]=o*m+a*v+l*E,r[6]=o*g+a*b+l*D,r[1]=c*x+d*y+h*A,r[4]=c*m+d*v+h*E,r[7]=c*g+d*b+h*D,r[2]=f*x+u*y+p*A,r[5]=f*m+u*v+p*E,r[8]=f*g+u*b+p*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-i*r*d+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,f=a*l-d*r,u=c*r-o*l,p=t*h+i*f+s*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=h*x,e[1]=(s*c-d*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(d*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=u*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ih.makeScale(e,t)),this}rotate(e){return this.premultiply(Ih.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ih.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ih=new rt,lp=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cp=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dx(){let n={enabled:!0,workingColorSpace:fo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Rt&&(s.r=ki(s.r),s.g=ki(s.g),s.b=ki(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Rt&&(s.r=hr(s.r),s.g=hr(s.g),s.b=hr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Vi?uo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ml("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ml("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[fo]:{primaries:e,whitePoint:i,transfer:uo,toXYZ:lp,fromXYZ:cp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:e,whitePoint:i,transfer:Rt,toXYZ:lp,fromXYZ:cp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),n}var gt=dx();function ki(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function hr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ys,xl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ys===void 0&&(Ys=po("canvas")),Ys.width=e.width,Ys.height=e.height;let s=Ys.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ys}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=po("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ki(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ki(t[i]/255)*255):t[i]=ki(t[i]);return{data:t,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},fx=0,pr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=Ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ph(s[o].image)):r.push(Ph(s[o]))}else r=Ph(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Ph(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}var ux=0,Dh=new F,Rn=class n extends ui{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=hi,s=hi,r=gn,o=vi,a=$n,l=Pn,c=n.DEFAULT_ANISOTROPY,d=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=Ui(),this.name="",this.source=new pr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Dh).x}get height(){return this.source.getSize(Dh).y}get depth(){return this.source.getSize(Dh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Qe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ed)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case di:e.x=e.x-Math.floor(e.x);break;case hi:e.x=e.x<0?0:1;break;case fl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case di:e.y=e.y-Math.floor(e.y);break;case hi:e.y=e.y<0?0:1;break;case fl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Ed;Rn.DEFAULT_ANISOTROPY=1;var Kt=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],u=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,b=(u+1)/2,A=(g+1)/2,E=(d+f)/4,D=(h+x)/4,_=(p+m)/4;return v>b&&v>A?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=E/i,r=D/i):b>A?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=E/s,r=_/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=D/r,s=_/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-p)*(m-p)+(h-x)*(h-x)+(f-d)*(f-d));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(h-x)/y,this.z=(f-d)/y,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yl=class extends ui{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Kt(0,0,e,t),this.scissorTest=!1,this.viewport=new Kt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new Rn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new pr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fn=class extends yl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},go=class extends Rn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var _l=class extends Rn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xt=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,l,c,d,h,f,u,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,d,h,f,u,p,x,m)}set(e,t,i,s,r,o,a,l,c,d,h,f,u,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=d,g[10]=h,g[14]=f,g[3]=u,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Zs.setFromMatrixColumn(e,0).length(),r=1/Zs.setFromMatrixColumn(e,1).length(),o=1/Zs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*d,u=o*h,p=a*d,x=a*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=u+p*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=p+u*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*d,u=l*h,p=c*d,x=c*h;t[0]=f+x*a,t[4]=p*a-u,t[8]=o*c,t[1]=o*h,t[5]=o*d,t[9]=-a,t[2]=u*a-p,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*d,u=l*h,p=c*d,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=p+u*a,t[1]=u+p*a,t[5]=o*d,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*d,u=o*h,p=a*d,x=a*h;t[0]=l*d,t[4]=p*c-u,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=u*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,u=o*c,p=a*l,x=a*c;t[0]=l*d,t[4]=x-f*h,t[8]=p*h+u,t[1]=h,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=u*h+p,t[10]=f-x*h}else if(e.order==="XZY"){let f=o*l,u=o*c,p=a*l,x=a*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=f*h+x,t[5]=o*d,t[9]=u*h-p,t[2]=p*h-u,t[6]=a*d,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(px,e,mx)}lookAt(e,t,i){let s=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),Ki.crossVectors(i,Un),Ki.lengthSq()===0&&(Math.abs(i.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),Ki.crossVectors(i,Un)),Ki.normalize(),Ca.crossVectors(Un,Ki),s[0]=Ki.x,s[4]=Ca.x,s[8]=Un.x,s[1]=Ki.y,s[5]=Ca.y,s[9]=Un.y,s[2]=Ki.z,s[6]=Ca.z,s[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],u=i[13],p=i[2],x=i[6],m=i[10],g=i[14],y=i[3],v=i[7],b=i[11],A=i[15],E=s[0],D=s[4],_=s[8],M=s[12],S=s[1],C=s[5],N=s[9],W=s[13],Y=s[2],U=s[6],H=s[10],$=s[14],le=s[3],de=s[7],ye=s[11],Ce=s[15];return r[0]=o*E+a*S+l*Y+c*le,r[4]=o*D+a*C+l*U+c*de,r[8]=o*_+a*N+l*H+c*ye,r[12]=o*M+a*W+l*$+c*Ce,r[1]=d*E+h*S+f*Y+u*le,r[5]=d*D+h*C+f*U+u*de,r[9]=d*_+h*N+f*H+u*ye,r[13]=d*M+h*W+f*$+u*Ce,r[2]=p*E+x*S+m*Y+g*le,r[6]=p*D+x*C+m*U+g*de,r[10]=p*_+x*N+m*H+g*ye,r[14]=p*M+x*W+m*$+g*Ce,r[3]=y*E+v*S+b*Y+A*le,r[7]=y*D+v*C+b*U+A*de,r[11]=y*_+v*N+b*H+A*ye,r[15]=y*M+v*W+b*$+A*Ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],u=e[14],p=e[3],x=e[7],m=e[11],g=e[15],y=l*u-c*f,v=a*u-c*h,b=a*f-l*h,A=o*u-c*d,E=o*f-l*d,D=o*h-a*d;return t*(x*y-m*v+g*b)-i*(p*y-m*A+g*E)+s*(p*v-x*A+g*D)-r*(p*b-x*E+m*D)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],u=e[11],p=e[12],x=e[13],m=e[14],g=e[15],y=t*a-i*o,v=t*l-s*o,b=t*c-r*o,A=i*l-s*a,E=i*c-r*a,D=s*c-r*l,_=d*x-h*p,M=d*m-f*p,S=d*g-u*p,C=h*m-f*x,N=h*g-u*x,W=f*g-u*m,Y=y*W-v*N+b*C+A*S-E*M+D*_;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/Y;return e[0]=(a*W-l*N+c*C)*U,e[1]=(s*N-i*W-r*C)*U,e[2]=(x*D-m*E+g*A)*U,e[3]=(f*E-h*D-u*A)*U,e[4]=(l*S-o*W-c*M)*U,e[5]=(t*W-s*S+r*M)*U,e[6]=(m*b-p*D-g*v)*U,e[7]=(d*D-f*b+u*v)*U,e[8]=(o*N-a*S+c*_)*U,e[9]=(i*S-t*N-r*_)*U,e[10]=(p*E-x*b+g*y)*U,e[11]=(h*b-d*E-u*y)*U,e[12]=(a*M-o*C-l*_)*U,e[13]=(t*C-i*M+s*_)*U,e[14]=(x*v-p*A-m*y)*U,e[15]=(d*A-h*v+f*y)*U,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,d=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,d*a+i,d*l-s*o,0,c*l-s*a,d*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,d=o+o,h=a+a,f=r*c,u=r*d,p=r*h,x=o*d,m=o*h,g=a*h,y=l*c,v=l*d,b=l*h,A=i.x,E=i.y,D=i.z;return s[0]=(1-(x+g))*A,s[1]=(u+b)*A,s[2]=(p-v)*A,s[3]=0,s[4]=(u-b)*E,s[5]=(1-(f+g))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(p+v)*D,s[9]=(m-y)*D,s[10]=(1-(f+x))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinant();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Zs.set(s[0],s[1],s[2]).length(),a=Zs.set(s[4],s[5],s[6]).length(),l=Zs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),jn.copy(this);let c=1/o,d=1/a,h=1/l;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=d,jn.elements[5]*=d,jn.elements[6]*=d,jn.elements[8]*=h,jn.elements[9]*=h,jn.elements[10]*=h,t.setFromRotationMatrix(jn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=ti,l=!1){let c=this.elements,d=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),u=(i+s)/(i-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===ti)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===fr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ti,l=!1){let c=this.elements,d=2/(t-e),h=2/(i-s),f=-(t+e)/(t-e),u=-(i+s)/(i-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===ti)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===fr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Zs=new F,jn=new xt,px=new F(0,0,0),mx=new F(1,1,1),Ki=new F,Ca=new F,Un=new F,hp=new xt,dp=new pi,Oi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],d=s[9],h=s[2],f=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,u),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return hp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dp.setFromEuler(this),this.setFromQuaternion(dp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Oi.DEFAULT_ORDER="XYZ";var mr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},gx=0,fp=new F,$s=new pi,Si=new xt,Sa=new F,jr=new F,xx=new F,yx=new pi,up=new F(1,0,0),pp=new F(0,1,0),mp=new F(0,0,1),gp={type:"added"},_x={type:"removed"},Ks={type:"childadded",child:null},Lh={type:"childremoved",child:null},an=class n extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new F,t=new Oi,i=new pi,s=new F(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xt},normalMatrix:{value:new rt}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(up,e)}rotateY(e){return this.rotateOnAxis(pp,e)}rotateZ(e){return this.rotateOnAxis(mp,e)}translateOnAxis(e,t){return fp.copy(e).applyQuaternion(this.quaternion),this.position.add(fp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(up,e)}translateY(e){return this.translateOnAxis(pp,e)}translateZ(e){return this.translateOnAxis(mp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Sa.copy(e):Sa.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(jr,Sa,this.up):Si.lookAt(Sa,jr,this.up),this.quaternion.setFromRotationMatrix(Si),s&&(Si.extractRotation(s.matrixWorld),$s.setFromRotationMatrix(Si),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gp),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_x),Lh.child=e,this.dispatchEvent(Lh),Lh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gp),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,e,xx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,yx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),u=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),u.length>0&&(i.animations=u),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};an.DEFAULT_UP=new F(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $e=class extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}},vx={type:"move"},gr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),u=.02,p=.005;c.inputState.pinching&&f>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new $e;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},wm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},Ia={h:0,s:0,l:0};function Nh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var nt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=gt.workingColorSpace){return this.r=e,this.g=t,this.b=i,gt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=gt.workingColorSpace){if(e=hx(e,1),t=ut(t,0,1),i=ut(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Nh(o,r,e+1/3),this.g=Nh(o,r,e),this.b=Nh(o,r,e-1/3)}return gt.colorSpaceToWorking(this,s),this}setStyle(e,t=on){function i(r){r!==void 0&&parseFloat(r)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){let i=wm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return gt.workingToColorSpace(Mn.copy(this),e),Math.round(ut(Mn.r*255,0,255))*65536+Math.round(ut(Mn.g*255,0,255))*256+Math.round(ut(Mn.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(Mn.copy(this),t);let i=Mn.r,s=Mn.g,r=Mn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,d=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=on){gt.workingToColorSpace(Mn.copy(this),e);let t=Mn.r,i=Mn.g,s=Mn.b;return e!==on?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+t,Ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ji),e.getHSL(Ia);let i=Ch(Ji.h,Ia.h,t),s=Ch(Ji.s,Ia.s,t),r=Ch(Ji.l,Ia.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new nt;nt.NAMES=wm;var xo=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new nt(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},yo=class extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Qn=new F,Ii=new F,Uh=new F,Pi=new F,Js=new F,js=new F,xp=new F,kh=new F,Fh=new F,Oh=new F,Bh=new Kt,zh=new Kt,Hh=new Kt,Ni=class n{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Qn.subVectors(e,t),s.cross(Qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Qn.subVectors(s,t),Ii.subVectors(i,t),Uh.subVectors(e,t);let o=Qn.dot(Qn),a=Qn.dot(Ii),l=Qn.dot(Uh),c=Ii.dot(Ii),d=Ii.dot(Uh),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,u=(c*l-a*d)*f,p=(o*d-a*l)*f;return r.set(1-u-p,p,u)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pi.x),l.addScaledVector(o,Pi.y),l.addScaledVector(a,Pi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Bh.setScalar(0),zh.setScalar(0),Hh.setScalar(0),Bh.fromBufferAttribute(e,t),zh.fromBufferAttribute(e,i),Hh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Bh,r.x),o.addScaledVector(zh,r.y),o.addScaledVector(Hh,r.z),o}static isFrontFacing(e,t,i,s){return Qn.subVectors(i,t),Ii.subVectors(e,t),Qn.cross(Ii).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),Qn.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Js.subVectors(s,i),js.subVectors(r,i),kh.subVectors(e,i);let l=Js.dot(kh),c=js.dot(kh);if(l<=0&&c<=0)return t.copy(i);Fh.subVectors(e,s);let d=Js.dot(Fh),h=js.dot(Fh);if(d>=0&&h<=d)return t.copy(s);let f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(i).addScaledVector(Js,o);Oh.subVectors(e,r);let u=Js.dot(Oh),p=js.dot(Oh);if(p>=0&&u<=p)return t.copy(r);let x=u*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(js,a);let m=d*p-u*h;if(m<=0&&h-d>=0&&u-p>=0)return xp.subVectors(r,s),a=(h-d)/(h-d+(u-p)),t.copy(s).addScaledVector(xp,a);let g=1/(m+x+f);return o=x*g,a=f*g,t.copy(i).addScaledVector(Js,o).addScaledVector(js,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},mi=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ei):ei.fromBufferAttribute(r,o),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pa.copy(i.boundingBox)),Pa.applyMatrix4(e.matrixWorld),this.union(Pa)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qr),Da.subVectors(this.max,Qr),Qs.subVectors(e.a,Qr),er.subVectors(e.b,Qr),tr.subVectors(e.c,Qr),ji.subVectors(er,Qs),Qi.subVectors(tr,er),bs.subVectors(Qs,tr);let t=[0,-ji.z,ji.y,0,-Qi.z,Qi.y,0,-bs.z,bs.y,ji.z,0,-ji.x,Qi.z,0,-Qi.x,bs.z,0,-bs.x,-ji.y,ji.x,0,-Qi.y,Qi.x,0,-bs.y,bs.x,0];return!Vh(t,Qs,er,tr,Da)||(t=[1,0,0,0,1,0,0,0,1],!Vh(t,Qs,er,tr,Da))?!1:(La.crossVectors(ji,Qi),t=[La.x,La.y,La.z],Vh(t,Qs,er,tr,Da))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Di=[new F,new F,new F,new F,new F,new F,new F,new F],ei=new F,Pa=new mi,Qs=new F,er=new F,tr=new F,ji=new F,Qi=new F,bs=new F,Qr=new F,Da=new F,La=new F,ws=new F;function Vh(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ws.fromArray(n,r);let a=s.x*Math.abs(ws.x)+s.y*Math.abs(ws.y)+s.z*Math.abs(ws.z),l=e.dot(ws),c=t.dot(ws),d=i.dot(ws);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}var rn=new F,Na=new Pe,Mx=0,en=class extends ui{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=pl,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Na.fromBufferAttribute(this,t),Na.applyMatrix3(e),this.setXY(t,Na.x,Na.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ci(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Dt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),s=Dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),s=Dt(s,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pl&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var _o=class extends en{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var vo=class extends en{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ct=class extends en{constructor(e,t,i){super(new Float32Array(e),t,i)}},bx=new mi,eo=new F,Gh=new F,Bi=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):bx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;eo.subVectors(e,this.center);let t=eo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(eo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(eo.copy(e.center).add(Gh)),this.expandByPoint(eo.copy(e.center).sub(Gh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},wx=0,Wn=new xt,Wh=new an,nr=new F,kn=new mi,to=new mi,un=new F,qt=class n extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lx(e)?vo:_o)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new rt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,i){return Wn.makeTranslation(e,t,i),this.applyMatrix4(Wn),this}scale(e,t,i){return Wn.makeScale(e,t,i),this.applyMatrix4(Wn),this}lookAt(e){return Wh.lookAt(e),Wh.updateMatrix(),this.applyMatrix4(Wh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ct(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];kn.setFromBufferAttribute(r),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let i=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];to.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(kn.min,to.min),kn.expandByPoint(un),un.addVectors(kn.max,to.max),kn.expandByPoint(un)):(kn.expandByPoint(to.min),kn.expandByPoint(to.max))}kn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)un.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(un));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)un.fromBufferAttribute(a,c),l&&(nr.fromBufferAttribute(e,c),un.add(nr)),s=Math.max(s,i.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let _=0;_<i.count;_++)a[_]=new F,l[_]=new F;let c=new F,d=new F,h=new F,f=new Pe,u=new Pe,p=new Pe,x=new F,m=new F;function g(_,M,S){c.fromBufferAttribute(i,_),d.fromBufferAttribute(i,M),h.fromBufferAttribute(i,S),f.fromBufferAttribute(r,_),u.fromBufferAttribute(r,M),p.fromBufferAttribute(r,S),d.sub(c),h.sub(c),u.sub(f),p.sub(f);let C=1/(u.x*p.y-p.x*u.y);isFinite(C)&&(x.copy(d).multiplyScalar(p.y).addScaledVector(h,-u.y).multiplyScalar(C),m.copy(h).multiplyScalar(u.x).addScaledVector(d,-p.x).multiplyScalar(C),a[_].add(x),a[M].add(x),a[S].add(x),l[_].add(m),l[M].add(m),l[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let _=0,M=y.length;_<M;++_){let S=y[_],C=S.start,N=S.count;for(let W=C,Y=C+N;W<Y;W+=3)g(e.getX(W+0),e.getX(W+1),e.getX(W+2))}let v=new F,b=new F,A=new F,E=new F;function D(_){A.fromBufferAttribute(s,_),E.copy(A);let M=a[_];v.copy(M),v.sub(A.multiplyScalar(A.dot(M))).normalize(),b.crossVectors(E,M);let C=b.dot(l[_])<0?-1:1;o.setXYZW(_,v.x,v.y,v.z,C)}for(let _=0,M=y.length;_<M;++_){let S=y[_],C=S.start,N=S.count;for(let W=C,Y=C+N;W<Y;W+=3)D(e.getX(W+0)),D(e.getX(W+1)),D(e.getX(W+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,u=i.count;f<u;f++)i.setXYZ(f,0,0,0);let s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,d=new F,h=new F;if(e)for(let f=0,u=e.count;f<u;f+=3){let p=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),d.subVectors(o,r),h.subVectors(s,r),d.cross(h),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=t.count;f<u;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),d.subVectors(o,r),h.subVectors(s,r),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(a,l){let c=a.array,d=a.itemSize,h=a.normalized,f=new c.constructor(l.length*d),u=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?u=l[x]*a.data.stride+a.offset:u=l[x]*d;for(let g=0;g<d;g++)f[p++]=c[u++]}return new en(f,d,h)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let d=0,h=c.length;d<h;d++){let f=c[d],u=e(f,i);l.push(u)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){let u=c[h];d.push(u.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(t))}let r=e.morphAttributes;for(let c in r){let d=[],h=r[c];for(let f=0,u=h.length;f<u;f++)d.push(h[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,d=o.length;c<d;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},vl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=pl,this.updateRanges=[],this.version=0,this.uuid=Ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},An=new F,Mo=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ci(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Dt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ci(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),s=Dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),s=Dt(s,this.array),r=Dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){mo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new en(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){mo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Tx=0,gi=class extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=ns,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=il,this.blendDst=sl,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Qe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(i.blending=this.blending),this.side!==Fi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==il&&(i.blendSrc=this.blendSrc),this.blendDst!==sl&&(i.blendDst=this.blendDst),this.blendEquation!==is&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(i.stencilFail=this.stencilFail),this.stencilZFail!==As&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ss=class extends gi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ir,no=new F,sr=new F,rr=new F,or=new Pe,io=new Pe,Tm=new xt,Ua=new F,so=new F,ka=new F,yp=new Pe,Xh=new Pe,_p=new Pe,Cs=class extends an{constructor(e=new ss){if(super(),this.isSprite=!0,this.type="Sprite",ir===void 0){ir=new qt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new vl(t,5);ir.setIndex([0,1,2,0,2,3]),ir.setAttribute("position",new Mo(i,3,0,!1)),ir.setAttribute("uv",new Mo(i,2,3,!1))}this.geometry=ir,this.material=e,this.center=new Pe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&je('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),sr.setFromMatrixScale(this.matrixWorld),Tm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),rr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&sr.multiplyScalar(-rr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Fa(Ua.set(-.5,-.5,0),rr,o,sr,s,r),Fa(so.set(.5,-.5,0),rr,o,sr,s,r),Fa(ka.set(.5,.5,0),rr,o,sr,s,r),yp.set(0,0),Xh.set(1,0),_p.set(1,1);let a=e.ray.intersectTriangle(Ua,so,ka,!1,no);if(a===null&&(Fa(so.set(-.5,.5,0),rr,o,sr,s,r),Xh.set(0,1),a=e.ray.intersectTriangle(Ua,ka,so,!1,no),a===null))return;let l=e.ray.origin.distanceTo(no);l<e.near||l>e.far||t.push({distance:l,point:no.clone(),uv:Ni.getInterpolation(no,Ua,so,ka,yp,Xh,_p,new Pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Fa(n,e,t,i,s,r){or.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(io.x=r*or.x-s*or.y,io.y=s*or.x+r*or.y):io.copy(or),n.copy(e),n.x+=io.x,n.y+=io.y,n.applyMatrix4(Tm)}var Li=new F,qh=new F,Oa=new F,es=new F,Yh=new F,Ba=new F,Zh=new F,xr=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){qh.copy(e).add(t).multiplyScalar(.5),Oa.copy(t).sub(e).normalize(),es.copy(this.origin).sub(qh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Oa),a=es.dot(this.direction),l=-es.dot(Oa),c=es.lengthSq(),d=Math.abs(1-o*o),h,f,u,p;if(d>0)if(h=o*l-a,f=o*a-l,p=r*d,h>=0)if(f>=-p)if(f<=p){let x=1/d;h*=x,f*=x,u=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),u=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),u=-h*h+f*(f+2*l)+c;else f<=-p?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),u=-h*h+f*(f+2*l)+c):f<=p?(h=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),u=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),u=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(qh).addScaledVector(Oa,f),u}intersectSphere(e,t){Li.subVectors(e.center,this.origin);let i=Li.dot(this.direction),s=Li.dot(Li)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),d>=0?(r=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(r=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,i,s,r){Yh.subVectors(t,e),Ba.subVectors(i,e),Zh.crossVectors(Yh,Ba);let o=this.direction.dot(Zh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;es.subVectors(this.origin,e);let l=a*this.direction.dot(Ba.crossVectors(es,Ba));if(l<0)return null;let c=a*this.direction.dot(Yh.cross(es));if(c<0||l+c>o)return null;let d=-a*es.dot(Zh);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Yt=class extends gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=Wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},vp=new xt,Ts=new xr,za=new Bi,Mp=new F,Ha=new F,Va=new F,Ga=new F,$h=new F,Wa=new F,bp=new F,Xa=new F,ge=class extends an{constructor(e=new qt,t=new Yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Wa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=a[l],h=r[l];d!==0&&($h.fromBufferAttribute(h,e),o?Wa.addScaledVector($h,d):Wa.addScaledVector($h.sub(t),d))}t.add(Wa)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),za.copy(i.boundingSphere),za.applyMatrix4(r),Ts.copy(e.ray).recast(e.near),!(za.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(za,Mp)===null||Ts.origin.distanceToSquared(Mp)>(e.far-e.near)**2))&&(vp.copy(r).invert(),Ts.copy(e.ray).applyMatrix4(vp),!(i.boundingBox!==null&&Ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ts)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],y=Math.max(m.start,u.start),v=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let b=y,A=v;b<A;b+=3){let E=a.getX(b),D=a.getX(b+1),_=a.getX(b+2);s=qa(this,g,e,i,c,d,h,E,D,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){let y=a.getX(m),v=a.getX(m+1),b=a.getX(m+2);s=qa(this,o,e,i,c,d,h,y,v,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],y=Math.max(m.start,u.start),v=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let b=y,A=v;b<A;b+=3){let E=b,D=b+1,_=b+2;s=qa(this,g,e,i,c,d,h,E,D,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,u.start),x=Math.min(l.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){let y=m,v=m+1,b=m+2;s=qa(this,o,e,i,c,d,h,y,v,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Ex(n,e,t,i,s,r,o,a){let l;if(e.side===xn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Fi,a),l===null)return null;Xa.copy(a),Xa.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Xa);return c<t.near||c>t.far?null:{distance:c,point:Xa.clone(),object:n}}function qa(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Ha),n.getVertexPosition(l,Va),n.getVertexPosition(c,Ga);let d=Ex(n,e,t,i,Ha,Va,Ga,bp);if(d){let h=new F;Ni.getBarycoord(bp,Ha,Va,Ga,h),s&&(d.uv=Ni.getInterpolatedAttribute(s,a,l,c,h,new Pe)),r&&(d.uv1=Ni.getInterpolatedAttribute(r,a,l,c,h,new Pe)),o&&(d.normal=Ni.getInterpolatedAttribute(o,a,l,c,h,new F),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new F,materialIndex:0};Ni.getNormal(Ha,Va,Ga,f.normal),d.face=f,d.barycoord=h}return d}var bo=class extends Rn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=pn,d=pn,h,f){super(null,o,a,l,c,d,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wo=class extends en{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ar=new xt,wp=new xt,Ya=[],Tp=new mi,Ax=new xt,ro=new ge,oo=new Bi,Lt=class extends ge{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wo(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Ax)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ar),Tp.copy(e.boundingBox).applyMatrix4(ar),this.boundingBox.union(Tp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ar),oo.copy(e.boundingSphere).applyMatrix4(ar),this.boundingSphere.union(oo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(ro.geometry=this.geometry,ro.material=this.material,ro.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oo.copy(this.boundingSphere),oo.applyMatrix4(i),e.ray.intersectsSphere(oo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ar),wp.multiplyMatrices(i,ar),ro.matrixWorld=wp,ro.raycast(e,Ya);for(let o=0,a=Ya.length;o<a;o++){let l=Ya[o];l.instanceId=r,l.object=this,t.push(l)}Ya.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new wo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new bo(new Float32Array(s*this.count),s,this.count,Jl,Zn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Kh=new F,Rx=new F,Cx=new rt,Xn=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Kh.subVectors(i,t).cross(Rx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Kh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Cx.getNormalMatrix(e),s=this.coplanarPoint(Kh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Es=new Bi,Sx=new Pe(.5,.5),Za=new F,yr=class{constructor(e=new Xn,t=new Xn,i=new Xn,s=new Xn,r=new Xn,o=new Xn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ti,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],d=r[4],h=r[5],f=r[6],u=r[7],p=r[8],x=r[9],m=r[10],g=r[11],y=r[12],v=r[13],b=r[14],A=r[15];if(s[0].setComponents(c-o,u-d,g-p,A-y).normalize(),s[1].setComponents(c+o,u+d,g+p,A+y).normalize(),s[2].setComponents(c+a,u+h,g+x,A+v).normalize(),s[3].setComponents(c-a,u-h,g-x,A-v).normalize(),i)s[4].setComponents(l,f,m,b).normalize(),s[5].setComponents(c-l,u-f,g-m,A-b).normalize();else if(s[4].setComponents(c-l,u-f,g-m,A-b).normalize(),t===ti)s[5].setComponents(c+l,u+f,g+m,A+b).normalize();else if(t===fr)s[5].setComponents(l,f,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(e){Es.center.set(0,0,0);let t=Sx.distanceTo(e.center);return Es.radius=.7071067811865476+t,Es.applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Za.x=s.normal.x>0?e.max.x:e.min.x,Za.y=s.normal.y>0?e.max.y:e.min.y,Za.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Za)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xi=class extends gi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ep=new xt,od=new xr,$a=new Bi,Ka=new F,zi=class extends an{constructor(e=new qt,t=new xi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$a.copy(i.boundingSphere),$a.applyMatrix4(s),$a.radius+=r,e.ray.intersectsSphere($a)===!1)return;Ep.copy(s).invert(),od.copy(e.ray).applyMatrix4(Ep);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let p=f,x=u;p<x;p++){let m=c.getX(p);Ka.fromBufferAttribute(h,m),Ap(Ka,m,l,s,e,t,this)}}else{let f=Math.max(0,o.start),u=Math.min(h.count,o.start+o.count);for(let p=f,x=u;p<x;p++)Ka.fromBufferAttribute(h,p),Ap(Ka,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ap(n,e,t,i,s,r,o){let a=od.distanceSqToPoint(n);if(a<t){let l=new F;od.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var To=class extends Rn{constructor(e=[],t=cs,i,s,r,o,a,l,c,d){super(e,t,i,s,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},qn=class extends Rn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Hi=class extends Rn{constructor(e,t,i=ii,s,r,o,a=pn,l=pn,c,d=fi,h=1){if(d!==fi&&d!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,s,r,o,a,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new pr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ml=class extends Hi{constructor(e,t=ii,i=cs,s,r,o=pn,a=pn,l,c=fi){let d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,t,i,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Eo=class extends Rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},rs=class n extends qt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],d=[],h=[],f=0,u=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(d,3)),this.setAttribute("uv",new Ct(h,2));function p(x,m,g,y,v,b,A,E,D,_,M){let S=b/D,C=A/_,N=b/2,W=A/2,Y=E/2,U=D+1,H=_+1,$=0,le=0,de=new F;for(let ye=0;ye<H;ye++){let Ce=ye*C-W;for(let Ue=0;Ue<U;Ue++){let Ke=Ue*S-N;de[x]=Ke*y,de[m]=Ce*v,de[g]=Y,c.push(de.x,de.y,de.z),de[x]=0,de[m]=0,de[g]=E>0?1:-1,d.push(de.x,de.y,de.z),h.push(Ue/D),h.push(1-ye/_),$+=1}}for(let ye=0;ye<_;ye++)for(let Ce=0;Ce<D;Ce++){let Ue=f+Ce+U*ye,Ke=f+Ce+U*(ye+1),ie=f+(Ce+1)+U*(ye+1),ne=f+(Ce+1)+U*ye;l.push(Ue,Ke,ne),l.push(Ke,ie,ne),le+=6}a.addGroup(u,le,M),u+=le,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var yi=class n extends qt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new F,d=new Pe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){let u=i+h/t*s;c.x=e*Math.cos(u),c.y=e*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[f]/e+1)/2,d.y=(o[f+1]/e+1)/2,l.push(d.x,d.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Ct(o,3)),this.setAttribute("normal",new Ct(a,3)),this.setAttribute("uv",new Ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ss=class n extends qt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let d=[],h=[],f=[],u=[],p=0,x=[],m=i/2,g=0;y(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(d),this.setAttribute("position",new Ct(h,3)),this.setAttribute("normal",new Ct(f,3)),this.setAttribute("uv",new Ct(u,2));function y(){let b=new F,A=new F,E=0,D=(t-e)/i;for(let _=0;_<=r;_++){let M=[],S=_/r,C=S*(t-e)+e;for(let N=0;N<=s;N++){let W=N/s,Y=W*l+a,U=Math.sin(Y),H=Math.cos(Y);A.x=C*U,A.y=-S*i+m,A.z=C*H,h.push(A.x,A.y,A.z),b.set(U,D,H).normalize(),f.push(b.x,b.y,b.z),u.push(W,1-S),M.push(p++)}x.push(M)}for(let _=0;_<s;_++)for(let M=0;M<r;M++){let S=x[M][_],C=x[M+1][_],N=x[M+1][_+1],W=x[M][_+1];(e>0||M!==0)&&(d.push(S,C,W),E+=3),(t>0||M!==r-1)&&(d.push(C,N,W),E+=3)}c.addGroup(g,E,0),g+=E}function v(b){let A=p,E=new Pe,D=new F,_=0,M=b===!0?e:t,S=b===!0?1:-1;for(let N=1;N<=s;N++)h.push(0,m*S,0),f.push(0,S,0),u.push(.5,.5),p++;let C=p;for(let N=0;N<=s;N++){let Y=N/s*l+a,U=Math.cos(Y),H=Math.sin(Y);D.x=M*H,D.y=m*S,D.z=M*U,h.push(D.x,D.y,D.z),f.push(0,S,0),E.x=U*.5+.5,E.y=H*.5*S+.5,u.push(E.x,E.y),p++}for(let N=0;N<s;N++){let W=A+N,Y=C+N;b===!0?d.push(Y,Y+1,W):d.push(Y+1,Y,W),_+=3}c.addGroup(g,_,b===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ao=class n extends Ss{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},bl=class n extends qt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),d(),this.setAttribute("position",new Ct(r,3)),this.setAttribute("normal",new Ct(r.slice(),3)),this.setAttribute("uv",new Ct(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let v=new F,b=new F,A=new F;for(let E=0;E<t.length;E+=3)u(t[E+0],v),u(t[E+1],b),u(t[E+2],A),l(v,b,A,y)}function l(y,v,b,A){let E=A+1,D=[];for(let _=0;_<=E;_++){D[_]=[];let M=y.clone().lerp(b,_/E),S=v.clone().lerp(b,_/E),C=E-_;for(let N=0;N<=C;N++)N===0&&_===E?D[_][N]=M:D[_][N]=M.clone().lerp(S,N/C)}for(let _=0;_<E;_++)for(let M=0;M<2*(E-_)-1;M++){let S=Math.floor(M/2);M%2===0?(f(D[_][S+1]),f(D[_+1][S]),f(D[_][S])):(f(D[_][S+1]),f(D[_+1][S+1]),f(D[_+1][S]))}}function c(y){let v=new F;for(let b=0;b<r.length;b+=3)v.x=r[b+0],v.y=r[b+1],v.z=r[b+2],v.normalize().multiplyScalar(y),r[b+0]=v.x,r[b+1]=v.y,r[b+2]=v.z}function d(){let y=new F;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];let b=m(y)/2/Math.PI+.5,A=g(y)/Math.PI+.5;o.push(b,1-A)}p(),h()}function h(){for(let y=0;y<o.length;y+=6){let v=o[y+0],b=o[y+2],A=o[y+4],E=Math.max(v,b,A),D=Math.min(v,b,A);E>.9&&D<.1&&(v<.2&&(o[y+0]+=1),b<.2&&(o[y+2]+=1),A<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function u(y,v){let b=y*3;v.x=e[b+0],v.y=e[b+1],v.z=e[b+2]}function p(){let y=new F,v=new F,b=new F,A=new F,E=new Pe,D=new Pe,_=new Pe;for(let M=0,S=0;M<r.length;M+=9,S+=6){y.set(r[M+0],r[M+1],r[M+2]),v.set(r[M+3],r[M+4],r[M+5]),b.set(r[M+6],r[M+7],r[M+8]),E.set(o[S+0],o[S+1]),D.set(o[S+2],o[S+3]),_.set(o[S+4],o[S+5]),A.copy(y).add(v).add(b).divideScalar(3);let C=m(A);x(E,S+0,y,C),x(D,S+2,v,C),x(_,S+4,b,C)}}function x(y,v,b,A){A<0&&y.x===1&&(o[v]=y.x-1),b.x===0&&b.z===0&&(o[v]=A/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var On=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let d=i[s],f=i[s+1]-d,u=(o-d)/f;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Pe:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new F,s=[],r=[],o=[],a=new F,l=new xt;for(let u=0;u<=e;u++){let p=u/e;s[u]=this.getTangentAt(p,new F)}r[0]=new F,o[0]=new F;let c=Number.MAX_VALUE,d=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);d<=c&&(c=d,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(ut(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,p))}o[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(ut(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(u=-u);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],u*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},_r=class extends On{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Pe){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let d=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*d-u*h+this.aX,c=f*h+u*d+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},wl=class extends _r{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ld(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,d,h){let f=(o-r)/c-(a-r)/(c+d)+(a-o)/d,u=(a-o)/d-(l-o)/(d+h)+(l-a)/h;f*=d,u*=d,s(o,a,f,u)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Rp=new F,Cp=new F,Jh=new Ld,jh=new Ld,Qh=new Ld,Tl=class extends On{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new F){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,d;this.closed||a>0?c=s[(a-1)%r]:(Cp.subVectors(s[0],s[1]).add(s[0]),c=Cp);let h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?d=s[(a+2)%r]:(Rp.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=Rp),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(h),u),x=Math.pow(h.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(d),u);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Jh.initNonuniformCatmullRom(c.x,h.x,f.x,d.x,p,x,m),jh.initNonuniformCatmullRom(c.y,h.y,f.y,d.y,p,x,m),Qh.initNonuniformCatmullRom(c.z,h.z,f.z,d.z,p,x,m)}else this.curveType==="catmullrom"&&(Jh.initCatmullRom(c.x,h.x,f.x,d.x,this.tension),jh.initCatmullRom(c.y,h.y,f.y,d.y,this.tension),Qh.initCatmullRom(c.z,h.z,f.z,d.z,this.tension));return i.set(Jh.calc(l),jh.calc(l),Qh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Sp(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Ix(n,e){let t=1-n;return t*t*e}function Px(n,e){return 2*(1-n)*n*e}function Dx(n,e){return n*n*e}function lo(n,e,t,i){return Ix(n,e)+Px(n,t)+Dx(n,i)}function Lx(n,e){let t=1-n;return t*t*t*e}function Nx(n,e){let t=1-n;return 3*t*t*n*e}function Ux(n,e){return 3*(1-n)*n*n*e}function kx(n,e){return n*n*n*e}function co(n,e,t,i,s){return Lx(n,e)+Nx(n,t)+Ux(n,i)+kx(n,s)}var Ro=class extends On{constructor(e=new Pe,t=new Pe,i=new Pe,s=new Pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Pe){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(co(e,s.x,r.x,o.x,a.x),co(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},El=class extends On{constructor(e=new F,t=new F,i=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new F){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(co(e,s.x,r.x,o.x,a.x),co(e,s.y,r.y,o.y,a.y),co(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Co=class extends On{constructor(e=new Pe,t=new Pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Pe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Al=class extends On{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},So=class extends On{constructor(e=new Pe,t=new Pe,i=new Pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Pe){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(lo(e,s.x,r.x,o.x),lo(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Rl=class extends On{constructor(e=new F,t=new F,i=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new F){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(lo(e,s.x,r.x,o.x),lo(e,s.y,r.y,o.y),lo(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Io=class extends On{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Pe){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],d=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(Sp(a,l.x,c.x,d.x,h.x),Sp(a,l.y,c.y,d.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new Pe().fromArray(s))}return this}},Ip=Object.freeze({__proto__:null,ArcCurve:wl,CatmullRomCurve3:Tl,CubicBezierCurve:Ro,CubicBezierCurve3:El,EllipseCurve:_r,LineCurve:Co,LineCurve3:Al,QuadraticBezierCurve:So,QuadraticBezierCurve3:Rl,SplineCurve:Io}),Cl=class extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ip[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let d=l[c];i&&i.equals(d)||(t.push(d),i=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Ip[s.type]().fromJSON(s))}return this}},Po=class extends Cl{constructor(e){super(),this.type="Path",this.currentPoint=new Pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Co(this.currentPoint.clone(),new Pe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new So(this.currentPoint.clone(),new Pe(e,t),new Pe(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Ro(this.currentPoint.clone(),new Pe(e,t),new Pe(i,s),new Pe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Io(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new _r(e,t,i,s,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},vr=class extends Po{constructor(e){super(e),this.uuid=Ui(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Po().fromJSON(s))}return this}};function Fx(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Em(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Vx(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let d=a,h=l;for(let f=t;f<s;f+=t){let u=n[f],p=n[f+1];u<a&&(a=u),p<l&&(l=p),u>d&&(d=u),p>h&&(h=p)}c=Math.max(d-a,h-l),c=c!==0?32767/c:0}return Do(r,o,t,a,l,c,0),o}function Em(n,e,t,i,s){let r;if(s===Qx(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Pp(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Pp(o/i|0,n[o],n[o+1],r);return r&&Mr(r,r.next)&&(No(r),r=r.next),r}function Is(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Mr(t,t.next)||$t(t.prev,t,t.next)===0)){if(No(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Do(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Yx(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Bx(n,i,s,r):Ox(n)){e.push(l.i,n.i,c.i),No(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=zx(Is(n),e),Do(n,e,t,i,s,r,2)):o===2&&Hx(n,e,t,i,s,r):Do(Is(n),e,t,i,s,r,1);break}}}function Ox(n){let e=n.prev,t=n,i=n.next;if($t(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,d=Math.min(s,r,o),h=Math.min(a,l,c),f=Math.max(s,r,o),u=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=d&&p.x<=f&&p.y>=h&&p.y<=u&&ao(s,a,r,l,o,c,p.x,p.y)&&$t(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Bx(n,e,t,i){let s=n.prev,r=n,o=n.next;if($t(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,d=s.y,h=r.y,f=o.y,u=Math.min(a,l,c),p=Math.min(d,h,f),x=Math.max(a,l,c),m=Math.max(d,h,f),g=ad(u,p,e,t,i),y=ad(x,m,e,t,i),v=n.prevZ,b=n.nextZ;for(;v&&v.z>=g&&b&&b.z<=y;){if(v.x>=u&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&ao(a,d,l,h,c,f,v.x,v.y)&&$t(v.prev,v,v.next)>=0||(v=v.prevZ,b.x>=u&&b.x<=x&&b.y>=p&&b.y<=m&&b!==s&&b!==o&&ao(a,d,l,h,c,f,b.x,b.y)&&$t(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;v&&v.z>=g;){if(v.x>=u&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&ao(a,d,l,h,c,f,v.x,v.y)&&$t(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;b&&b.z<=y;){if(b.x>=u&&b.x<=x&&b.y>=p&&b.y<=m&&b!==s&&b!==o&&ao(a,d,l,h,c,f,b.x,b.y)&&$t(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function zx(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Mr(i,s)&&Rm(i,t,t.next,s)&&Lo(i,s)&&Lo(s,i)&&(e.push(i.i,t.i,s.i),No(t),No(t.next),t=n=s),t=t.next}while(t!==n);return Is(t)}function Hx(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Kx(o,a)){let l=Cm(o,a);o=Is(o,o.next),l=Is(l,l.next),Do(o,e,t,i,s,r,0),Do(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Vx(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Em(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push($x(c))}s.sort(Gx);for(let r=0;r<s.length;r++)t=Wx(s[r],t);return t}function Gx(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Wx(n,e){let t=Xx(n,e);if(!t)return e;let i=Cm(t,n);return Is(i,i.next),Is(t,t.next)}function Xx(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(Mr(n,t))return t;do{if(Mr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,d=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Am(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let h=Math.abs(s-t.y)/(i-t.x);Lo(t,n)&&(h<d||h===d&&(t.x>o.x||t.x===o.x&&qx(o,t)))&&(o=t,d=h)}t=t.next}while(t!==a);return o}function qx(n,e){return $t(n.prev,n,e.prev)<0&&$t(e.next,n,n.next)<0}function Yx(n,e,t,i){let s=n;do s.z===0&&(s.z=ad(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Zx(s)}function Zx(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function ad(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function $x(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Am(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function ao(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Am(n,e,t,i,s,r,o,a)}function Kx(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Jx(n,e)&&(Lo(n,e)&&Lo(e,n)&&jx(n,e)&&($t(n.prev,n,e.prev)||$t(n,e.prev,e))||Mr(n,e)&&$t(n.prev,n,n.next)>0&&$t(e.prev,e,e.next)>0)}function $t(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Mr(n,e){return n.x===e.x&&n.y===e.y}function Rm(n,e,t,i){let s=ja($t(n,e,t)),r=ja($t(n,e,i)),o=ja($t(t,i,n)),a=ja($t(t,i,e));return!!(s!==r&&o!==a||s===0&&Ja(n,t,e)||r===0&&Ja(n,i,e)||o===0&&Ja(t,n,i)||a===0&&Ja(t,e,i))}function Ja(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ja(n){return n>0?1:n<0?-1:0}function Jx(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Rm(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Lo(n,e){return $t(n.prev,n,n.next)<0?$t(n,e,n.next)>=0&&$t(n,n.prev,e)>=0:$t(n,e,n.prev)<0||$t(n,n.next,e)<0}function jx(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Cm(n,e){let t=ld(n.i,n.x,n.y),i=ld(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Pp(n,e,t,i){let s=ld(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function No(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ld(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Qx(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var cd=class{static triangulate(e,t,i=2){return Fx(e,t,i)}},dr=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Dp(e),Lp(i,e);let o=e.length;t.forEach(Dp);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Lp(i,t[l]);let a=cd.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Dp(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Lp(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Ps=class n extends bl{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Yn=class n extends qt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,d=l+1,h=e/a,f=t/l,u=[],p=[],x=[],m=[];for(let g=0;g<d;g++){let y=g*f-o;for(let v=0;v<c;v++){let b=v*h-r;p.push(b,-y,0),x.push(0,0,1),m.push(v/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let v=y+c*g,b=y+c*(g+1),A=y+1+c*(g+1),E=y+1+c*g;u.push(v,b,E),u.push(b,A,E)}this.setIndex(u),this.setAttribute("position",new Ct(p,3)),this.setAttribute("normal",new Ct(x,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Uo=class n extends qt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],d=[],h=e,f=(t-e)/s,u=new F,p=new Pe;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){let g=r+m/i*o;u.x=h*Math.cos(g),u.y=h*Math.sin(g),l.push(u.x,u.y,u.z),c.push(0,0,1),p.x=(u.x/t+1)/2,p.y=(u.y/t+1)/2,d.push(p.x,p.y)}h+=f}for(let x=0;x<s;x++){let m=x*(i+1);for(let g=0;g<i;g++){let y=g+m,v=y,b=y+i+1,A=y+i+2,E=y+1;a.push(v,b,E),a.push(b,A,E)}}this.setIndex(a),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(c,3)),this.setAttribute("uv",new Ct(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},ko=class n extends qt{constructor(e=new vr([new Pe(0,.5),new Pe(-.5,-.5),new Pe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let d=0;d<e.length;d++)c(e[d]),this.addGroup(a,l,d),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ct(s,3)),this.setAttribute("normal",new Ct(r,3)),this.setAttribute("uv",new Ct(o,2));function c(d){let h=s.length/3,f=d.extractPoints(t),u=f.shape,p=f.holes;dr.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,g=p.length;m<g;m++){let y=p[m];dr.isClockWise(y)===!0&&(p[m]=y.reverse())}let x=dr.triangulateShape(u,p);for(let m=0,g=p.length;m<g;m++){let y=p[m];u=u.concat(y)}for(let m=0,g=u.length;m<g;m++){let y=u[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,g=x.length;m<g;m++){let y=x[m],v=y[0]+h,b=y[1]+h,A=y[2]+h;i.push(v,b,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return ey(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function ey(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var Ds=class n extends qt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,d=[],h=new F,f=new F,u=[],p=[],x=[],m=[];for(let g=0;g<=i;g++){let y=[],v=g/i,b=0;g===0&&o===0?b=.5/t:g===i&&l===Math.PI&&(b=-.5/t);for(let A=0;A<=t;A++){let E=A/t;h.x=-e*Math.cos(s+E*r)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(s+E*r)*Math.sin(o+v*a),p.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(E+b,1-v),y.push(c++)}d.push(y)}for(let g=0;g<i;g++)for(let y=0;y<t;y++){let v=d[g][y+1],b=d[g][y],A=d[g+1][y],E=d[g+1][y+1];(g!==0||o>0)&&u.push(v,b,E),(g!==i-1||l<Math.PI)&&u.push(b,A,E)}this.setIndex(u),this.setAttribute("position",new Ct(p,3)),this.setAttribute("normal",new Ct(x,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Ns(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Np(s))s.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Np(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Tn(n){let e={};for(let t=0;t<n.length;t++){let i=Ns(n[t]);for(let s in i)e[s]=i[s]}return e}function Np(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function ty(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Nd(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}var Sm={clone:Ns,merge:Tn},ny=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bn=class extends gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ny,this.fragmentShader=iy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=ty(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Sl=class extends Bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Sn=class extends gi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pc,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=Wl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Il=class extends gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Pl=class extends gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Qa(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}var os=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Dl=class extends os{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nd,endingEnd:nd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case id:r=e,a=2*t-i;break;case sd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case id:o=e,l=2*i-t;break;case sd:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,d=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,u=this._weightNext,p=(i-t)/(s-t),x=p*p,m=x*p,g=-f*m+2*f*x-f*p,y=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*p+1,v=(-1-u)*m+(1.5+u)*x+.5*p,b=u*m-u*x;for(let A=0;A!==a;++A)r[A]=g*o[d+A]+y*o[c+A]+v*o[l+A]+b*o[h+A];return r}},Ll=class extends os{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=(i-t)/(s-t),h=1-d;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*d;return r}},Nl=class extends os{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ul=class extends os{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this.settings||this.DefaultSettings_,h=d.inTangents,f=d.outTangents;if(!h||!f){let x=(i-t)/(s-t),m=1-x;for(let g=0;g!==a;++g)r[g]=o[c+g]*m+o[l+g]*x;return r}let u=a*2,p=e-1;for(let x=0;x!==a;++x){let m=o[c+x],g=o[l+x],y=p*u+x*2,v=f[y],b=f[y+1],A=e*u+x*2,E=h[A],D=h[A+1],_=(i-t)/(s-t),M,S,C,N,W;for(let Y=0;Y<8;Y++){M=_*_,S=M*_,C=1-_,N=C*C,W=N*C;let H=W*t+3*N*_*v+3*C*M*E+S*s-i;if(Math.abs(H)<1e-10)break;let $=3*N*(v-t)+6*C*_*(E-v)+3*M*(s-E);if(Math.abs($)<1e-10)break;_=_-H/$,_=Math.max(0,Math.min(1,_))}r[x]=W*m+3*N*_*b+3*C*M*D+S*g}return r}},zn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qa(t,this.TimeBufferType),this.values=Qa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Qa(e.times,Array),values:Qa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ul(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case ho:t=this.InterpolantFactoryMethodDiscrete;break;case ul:t=this.InterpolantFactoryMethodLinear;break;case nl:t=this.InterpolantFactoryMethodSmooth;break;case td:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Qe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ho;case this.InterpolantFactoryMethodLinear:return ul;case this.InterpolantFactoryMethodSmooth:return nl;case this.InterpolantFactoryMethodBezier:return td}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(je("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(je("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){je("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){je("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&cx(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){je("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===nl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],d=e[a+1];if(c!==d&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*i,f=h-i,u=h+i;for(let p=0;p!==i;++p){let x=t[h+p];if(x!==t[f+p]||x!==t[u+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,f=o*i;for(let u=0;u!==i;++u)t[f+u]=t[h+u]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};zn.prototype.ValueTypeName="";zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=ul;var as=class extends zn{constructor(e,t,i){super(e,t,i)}};as.prototype.ValueTypeName="bool";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=ho;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var kl=class extends zn{constructor(e,t,i,s){super(e,t,i,s)}};kl.prototype.ValueTypeName="color";var Fl=class extends zn{constructor(e,t,i,s){super(e,t,i,s)}};Fl.prototype.ValueTypeName="number";var Ol=class extends os{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let d=c+a;c!==d;c+=4)pi.slerpFlat(r,0,o,c-a,o,c,l);return r}},Fo=class extends zn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Ol(this.times,this.values,this.getValueSize(),e)}};Fo.prototype.ValueTypeName="quaternion";Fo.prototype.InterpolantFactoryMethodSmooth=void 0;var ls=class extends zn{constructor(e,t,i){super(e,t,i)}};ls.prototype.ValueTypeName="string";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=ho;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Bl=class extends zn{constructor(e,t,i,s){super(e,t,i,s)}};Bl.prototype.ValueTypeName="vector";var zl=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){let h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,f=c.length;h<f;h+=2){let u=c[h],p=c[h+1];if(u.global&&(u.lastIndex=0),u.test(d))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Im=new zl,Hl=class{constructor(e){this.manager=e!==void 0?e:Im,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Hl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Oo=class extends an{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Bo=class extends Oo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.groundColor=new nt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ed=new xt,Up=new F,kp=new F,hd=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yr,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Up.setFromMatrixPosition(e.matrixWorld),t.position.copy(Up),kp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kp),t.updateMatrixWorld(),ed.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ed,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===fr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ed)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},el=new F,tl=new pi,li=new F,zo=class extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(el,tl,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(el,tl,li.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(el,tl,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(el,tl,li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ts=new F,Fp=new Pe,Op=new Pe,bn=class extends zo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=gl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Rh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gl*2*Math.atan(Math.tan(Rh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ts.x,ts.y).multiplyScalar(-e/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ts.x,ts.y).multiplyScalar(-e/ts.z)}getViewSize(e,t){return this.getViewBounds(e,Fp,Op),t.subVectors(Op,Fp)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Rh*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var br=class extends zo{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},dd=class extends hd{constructor(){super(new br(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ho=class extends Oo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new dd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var lr=-90,cr=1,Vl=class extends an{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new bn(lr,cr,e,t);s.layers=this.layers,this.add(s);let r=new bn(lr,cr,e,t);r.layers=this.layers,this.add(r);let o=new bn(lr,cr,e,t);o.layers=this.layers,this.add(o);let a=new bn(lr,cr,e,t);a.layers=this.layers,this.add(a);let l=new bn(lr,cr,e,t);l.layers=this.layers,this.add(l);let c=new bn(lr,cr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ti)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(h,f,u),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Gl=class extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Ud="\\[\\]\\.:\\/",sy=new RegExp("["+Ud+"]","g"),kd="[^"+Ud+"]",ry="[^"+Ud.replace("\\.","")+"]",oy=/((?:WC+[\/:])*)/.source.replace("WC",kd),ay=/(WCOD+)?/.source.replace("WCOD",ry),ly=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kd),cy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kd),hy=new RegExp("^"+oy+ay+ly+cy+"$"),dy=["material","materials","bones","map"],fd=class{constructor(e,t,i){let s=i||Wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Wt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sy,"")}static parseTrackName(e){let t=hy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);dy.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;je("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Wt.Composite=fd;Wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Wt.prototype.GetterByBindingType=[Wt.prototype._getValue_direct,Wt.prototype._getValue_array,Wt.prototype._getValue_arrayElement,Wt.prototype._getValue_toArray];Wt.prototype.SetterByBindingTypeAndVersioning=[[Wt.prototype._setValue_direct,Wt.prototype._setValue_direct_setNeedsUpdate,Wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_array,Wt.prototype._setValue_array_setNeedsUpdate,Wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_arrayElement,Wt.prototype._setValue_arrayElement_setNeedsUpdate,Wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_fromArray,Wt.prototype._setValue_fromArray_setNeedsUpdate,Wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var eE=new Float32Array(1);var Bp=new xt,Vo=class{constructor(e,t,i=0,s=1/0){this.ray=new xr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new mr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Bp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bp),this}intersectObject(e,t=!0,i=[]){return ud(e,this,i,t),i.sort(zp),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)ud(e[s],this,i,t);return i.sort(zp),i}};function zp(n,e){return n.distance-e.distance}function ud(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)ud(r[o],e,t,!0)}}var pd=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};function Fd(n,e,t,i){let s=fy(i);switch(t){case Id:return n*e;case Jl:return n*e/s.components*s.byteLength;case jl:return n*e/s.components*s.byteLength;case ds:return n*e*2/s.components*s.byteLength;case Ql:return n*e*2/s.components*s.byteLength;case Pd:return n*e*3/s.components*s.byteLength;case $n:return n*e*4/s.components*s.byteLength;case ec:return n*e*4/s.components*s.byteLength;case qo:case Yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Zo:case $o:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nc:case sc:return Math.max(n,16)*Math.max(e,8)/4;case tc:case ic:return Math.max(n,8)*Math.max(e,8)/2;case rc:case oc:case lc:case cc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ac:case Ko:case hc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case dc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case uc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case pc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case mc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case gc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case xc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case yc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case _c:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case vc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case bc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case wc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Tc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ec:case Ac:case Rc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Cc:case Sc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Jo:case Ic:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fy(n){switch(n){case Pn:case Ad:return{byteLength:1,components:1};case Tr:case Rd:case Mi:return{byteLength:2,components:1};case $l:case Kl:return{byteLength:2,components:4};case ii:case Zl:case Zn:return{byteLength:4,components:1};case Cd:case Sd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");function Qm(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function py(n){let e=new WeakMap;function t(a,l){let c=a.array,d=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,d),a.onUploadCallback();let u;if(c instanceof Float32Array)u=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=n.HALF_FLOAT:u=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=n.SHORT;else if(c instanceof Uint32Array)u=n.UNSIGNED_INT;else if(c instanceof Int32Array)u=n.INT;else if(c instanceof Int8Array)u=n.BYTE;else if(c instanceof Uint8Array)u=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let d=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,d);else{h.sort((u,p)=>u.start-p.start);let f=0;for(let u=1;u<h.length;u++){let p=h[f],x=h[u];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,h[f]=x)}h.length=f+1;for(let u=0,p=h.length;u<p;u++){let x=h[u];n.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var my=`#ifdef USE_ALPHAHASH
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
#endif`,zy=`vec3 transformedNormal = objectNormal;
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
#endif`,Hy=`#ifdef USE_DISPLACEMENTMAP
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
#endif`,z_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,H_=`#ifdef USE_CLEARCOATMAP
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
}`,zv=`#define STANDARD
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
}`,Hv=`#define TOON
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
}`,ht={alphahash_fragment:my,alphahash_pars_fragment:gy,alphamap_fragment:xy,alphamap_pars_fragment:yy,alphatest_fragment:_y,alphatest_pars_fragment:vy,aomap_fragment:My,aomap_pars_fragment:by,batching_pars_vertex:wy,batching_vertex:Ty,begin_vertex:Ey,beginnormal_vertex:Ay,bsdfs:Ry,iridescence_fragment:Cy,bumpmap_pars_fragment:Sy,clipping_planes_fragment:Iy,clipping_planes_pars_fragment:Py,clipping_planes_pars_vertex:Dy,clipping_planes_vertex:Ly,color_fragment:Ny,color_pars_fragment:Uy,color_pars_vertex:ky,color_vertex:Fy,common:Oy,cube_uv_reflection_fragment:By,defaultnormal_vertex:zy,displacementmap_pars_vertex:Hy,displacementmap_vertex:Vy,emissivemap_fragment:Gy,emissivemap_pars_fragment:Wy,colorspace_fragment:Xy,colorspace_pars_fragment:qy,envmap_fragment:Yy,envmap_common_pars_fragment:Zy,envmap_pars_fragment:$y,envmap_pars_vertex:Ky,envmap_physical_pars_fragment:a_,envmap_vertex:Jy,fog_vertex:jy,fog_pars_vertex:Qy,fog_fragment:e_,fog_pars_fragment:t_,gradientmap_pars_fragment:n_,lightmap_pars_fragment:i_,lights_lambert_fragment:s_,lights_lambert_pars_fragment:r_,lights_pars_begin:o_,lights_toon_fragment:l_,lights_toon_pars_fragment:c_,lights_phong_fragment:h_,lights_phong_pars_fragment:d_,lights_physical_fragment:f_,lights_physical_pars_fragment:u_,lights_fragment_begin:p_,lights_fragment_maps:m_,lights_fragment_end:g_,lightprobes_pars_fragment:x_,logdepthbuf_fragment:y_,logdepthbuf_pars_fragment:__,logdepthbuf_pars_vertex:v_,logdepthbuf_vertex:M_,map_fragment:b_,map_pars_fragment:w_,map_particle_fragment:T_,map_particle_pars_fragment:E_,metalnessmap_fragment:A_,metalnessmap_pars_fragment:R_,morphinstance_vertex:C_,morphcolor_vertex:S_,morphnormal_vertex:I_,morphtarget_pars_vertex:P_,morphtarget_vertex:D_,normal_fragment_begin:L_,normal_fragment_maps:N_,normal_pars_fragment:U_,normal_pars_vertex:k_,normal_vertex:F_,normalmap_pars_fragment:O_,clearcoat_normal_fragment_begin:B_,clearcoat_normal_fragment_maps:z_,clearcoat_pars_fragment:H_,iridescence_pars_fragment:V_,opaque_fragment:G_,packing:W_,premultiplied_alpha_fragment:X_,project_vertex:q_,dithering_fragment:Y_,dithering_pars_fragment:Z_,roughnessmap_fragment:$_,roughnessmap_pars_fragment:K_,shadowmap_pars_fragment:J_,shadowmap_pars_vertex:j_,shadowmap_vertex:Q_,shadowmask_pars_fragment:ev,skinbase_vertex:tv,skinning_pars_vertex:nv,skinning_vertex:iv,skinnormal_vertex:sv,specularmap_fragment:rv,specularmap_pars_fragment:ov,tonemapping_fragment:av,tonemapping_pars_fragment:lv,transmission_fragment:cv,transmission_pars_fragment:hv,uv_pars_fragment:dv,uv_pars_vertex:fv,uv_vertex:uv,worldpos_vertex:pv,background_vert:mv,background_frag:gv,backgroundCube_vert:xv,backgroundCube_frag:yv,cube_vert:_v,cube_frag:vv,depth_vert:Mv,depth_frag:bv,distance_vert:wv,distance_frag:Tv,equirect_vert:Ev,equirect_frag:Av,linedashed_vert:Rv,linedashed_frag:Cv,meshbasic_vert:Sv,meshbasic_frag:Iv,meshlambert_vert:Pv,meshlambert_frag:Dv,meshmatcap_vert:Lv,meshmatcap_frag:Nv,meshnormal_vert:Uv,meshnormal_frag:kv,meshphong_vert:Fv,meshphong_frag:Ov,meshphysical_vert:Bv,meshphysical_frag:zv,meshtoon_vert:Hv,meshtoon_frag:Vv,points_vert:Gv,points_frag:Wv,shadow_vert:Xv,shadow_frag:qv,sprite_vert:Yv,sprite_frag:Zv},Se={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},wi={basic:{uniforms:Tn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Tn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new nt(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Tn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Tn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Tn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new nt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Tn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Tn([Se.points,Se.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Tn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Tn([Se.common,Se.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Tn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Tn([Se.sprite,Se.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Tn([Se.common,Se.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Tn([Se.lights,Se.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};wi.physical={uniforms:Tn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var Nc={r:0,b:0,g:0},$v=new xt,e0=new rt;e0.set(-1,0,0,0,1,0,0,0,1);function Kv(n,e,t,i,s,r){let o=new nt(0),a=s===!0?0:1,l,c,d=null,h=0,f=null;function u(y){let v=y.isScene===!0?y.background:null;if(v&&v.isTexture){let b=y.backgroundBlurriness>0;v=e.get(v,b)}return v}function p(y){let v=!1,b=u(y);b===null?m(o,a):b&&b.isColor&&(m(b,1),v=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||v)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(y,v){let b=u(v);b&&(b.isCubeTexture||b.mapping===Wo)?(c===void 0&&(c=new ge(new rs(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:Ns(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,E,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4($v.makeRotationFromEuler(v.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(e0),c.material.toneMapped=gt.getTransfer(b.colorSpace)!==Rt,(d!==b||h!==b.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=b,h=b.version,f=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new ge(new Yn(2,2),new Bn({name:"BackgroundMaterial",uniforms:Ns(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=gt.getTransfer(b.colorSpace)!==Rt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||h!==b.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=b,h=b.version,f=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,v){y.getRGB(Nc,Nd(n)),t.buffers.color.setClear(Nc.r,Nc.g,Nc.b,v,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),a=v,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:x,dispose:g}}function Jv(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(C,N,W,Y,U){let H=!1,$=h(C,Y,W,N);r!==$&&(r=$,c(r.object)),H=u(C,Y,W,U),H&&p(C,Y,W,U),U!==null&&e.update(U,n.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,b(C,N,W,Y),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return n.createVertexArray()}function c(C){return n.bindVertexArray(C)}function d(C){return n.deleteVertexArray(C)}function h(C,N,W,Y){let U=Y.wireframe===!0,H=i[N.id];H===void 0&&(H={},i[N.id]=H);let $=C.isInstancedMesh===!0?C.id:0,le=H[$];le===void 0&&(le={},H[$]=le);let de=le[W.id];de===void 0&&(de={},le[W.id]=de);let ye=de[U];return ye===void 0&&(ye=f(l()),de[U]=ye),ye}function f(C){let N=[],W=[],Y=[];for(let U=0;U<t;U++)N[U]=0,W[U]=0,Y[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:W,attributeDivisors:Y,object:C,attributes:{},index:null}}function u(C,N,W,Y){let U=r.attributes,H=N.attributes,$=0,le=W.getAttributes();for(let de in le)if(le[de].location>=0){let Ce=U[de],Ue=H[de];if(Ue===void 0&&(de==="instanceMatrix"&&C.instanceMatrix&&(Ue=C.instanceMatrix),de==="instanceColor"&&C.instanceColor&&(Ue=C.instanceColor)),Ce===void 0||Ce.attribute!==Ue||Ue&&Ce.data!==Ue.data)return!0;$++}return r.attributesNum!==$||r.index!==Y}function p(C,N,W,Y){let U={},H=N.attributes,$=0,le=W.getAttributes();for(let de in le)if(le[de].location>=0){let Ce=H[de];Ce===void 0&&(de==="instanceMatrix"&&C.instanceMatrix&&(Ce=C.instanceMatrix),de==="instanceColor"&&C.instanceColor&&(Ce=C.instanceColor));let Ue={};Ue.attribute=Ce,Ce&&Ce.data&&(Ue.data=Ce.data),U[de]=Ue,$++}r.attributes=U,r.attributesNum=$,r.index=Y}function x(){let C=r.newAttributes;for(let N=0,W=C.length;N<W;N++)C[N]=0}function m(C){g(C,0)}function g(C,N){let W=r.newAttributes,Y=r.enabledAttributes,U=r.attributeDivisors;W[C]=1,Y[C]===0&&(n.enableVertexAttribArray(C),Y[C]=1),U[C]!==N&&(n.vertexAttribDivisor(C,N),U[C]=N)}function y(){let C=r.newAttributes,N=r.enabledAttributes;for(let W=0,Y=N.length;W<Y;W++)N[W]!==C[W]&&(n.disableVertexAttribArray(W),N[W]=0)}function v(C,N,W,Y,U,H,$){$===!0?n.vertexAttribIPointer(C,N,W,U,H):n.vertexAttribPointer(C,N,W,Y,U,H)}function b(C,N,W,Y){x();let U=Y.attributes,H=W.getAttributes(),$=N.defaultAttributeValues;for(let le in H){let de=H[le];if(de.location>=0){let ye=U[le];if(ye===void 0&&(le==="instanceMatrix"&&C.instanceMatrix&&(ye=C.instanceMatrix),le==="instanceColor"&&C.instanceColor&&(ye=C.instanceColor)),ye!==void 0){let Ce=ye.normalized,Ue=ye.itemSize,Ke=e.get(ye);if(Ke===void 0)continue;let ie=Ke.buffer,ne=Ke.type,B=Ke.bytesPerElement,O=ne===n.INT||ne===n.UNSIGNED_INT||ye.gpuType===Zl;if(ye.isInterleavedBufferAttribute){let k=ye.data,P=k.stride,L=ye.offset;if(k.isInstancedInterleavedBuffer){for(let se=0;se<de.locationSize;se++)g(de.location+se,k.meshPerAttribute);C.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let se=0;se<de.locationSize;se++)m(de.location+se);n.bindBuffer(n.ARRAY_BUFFER,ie);for(let se=0;se<de.locationSize;se++)v(de.location+se,Ue/de.locationSize,ne,Ce,P*B,(L+Ue/de.locationSize*se)*B,O)}else{if(ye.isInstancedBufferAttribute){for(let k=0;k<de.locationSize;k++)g(de.location+k,ye.meshPerAttribute);C.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let k=0;k<de.locationSize;k++)m(de.location+k);n.bindBuffer(n.ARRAY_BUFFER,ie);for(let k=0;k<de.locationSize;k++)v(de.location+k,Ue/de.locationSize,ne,Ce,Ue*B,Ue/de.locationSize*k*B,O)}}else if($!==void 0){let Ce=$[le];if(Ce!==void 0)switch(Ce.length){case 2:n.vertexAttrib2fv(de.location,Ce);break;case 3:n.vertexAttrib3fv(de.location,Ce);break;case 4:n.vertexAttrib4fv(de.location,Ce);break;default:n.vertexAttrib1fv(de.location,Ce)}}}}y()}function A(){M();for(let C in i){let N=i[C];for(let W in N){let Y=N[W];for(let U in Y){let H=Y[U];for(let $ in H)d(H[$].object),delete H[$];delete Y[U]}}delete i[C]}}function E(C){if(i[C.id]===void 0)return;let N=i[C.id];for(let W in N){let Y=N[W];for(let U in Y){let H=Y[U];for(let $ in H)d(H[$].object),delete H[$];delete Y[U]}}delete i[C.id]}function D(C){for(let N in i){let W=i[N];for(let Y in W){let U=W[Y];if(U[C.id]===void 0)continue;let H=U[C.id];for(let $ in H)d(H[$].object),delete H[$];delete U[C.id]}}}function _(C){for(let N in i){let W=i[N],Y=C.isInstancedMesh===!0?C.id:0,U=W[Y];if(U!==void 0){for(let H in U){let $=U[H];for(let le in $)d($[le].object),delete $[le];delete U[H]}delete W[Y],Object.keys(W).length===0&&delete i[N]}}}function M(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:M,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function jv(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,d){d!==0&&(n.drawArraysInstanced(i,l,c,d),t.update(c,i,d))}function a(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let f=0;for(let u=0;u<d;u++)f+=c[u];t.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Qv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==$n&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let _=D===Mi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Pn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Zn&&!_)}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(Qe("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:b,maxSamples:A,samples:E}}function eM(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Xn,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let u=h.length!==0||f||i!==0||s;return s=f,i=h.length,u},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=d(h,f,0)},this.setState=function(h,f,u){let p=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,g=n.get(h);if(!s||p===null||p.length===0||r&&!m)r?d(null):c();else{let y=r?0:i,v=y*4,b=g.clippingState||null;l.value=b,b=d(p,f,v,u);for(let A=0;A!==v;++A)b[A]=t[A];g.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,u,p){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=u+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let v=0,b=u;v!==x;++v,b+=4)o.copy(h[v]).applyMatrix4(y,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var fs=4,Pm=[.125,.215,.35,.446,.526,.582],Us=20,tM=256,jo=new br,Dm=new nt,Od=null,Bd=0,zd=0,Hd=!1,nM=new F,kc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=nM}=r;Od=this._renderer.getRenderTarget(),Bd=this._renderer.getActiveCubeFace(),zd=this._renderer.getActiveMipmapLevel(),Hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Um(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Od,Bd,zd),this._renderer.xr.enabled=Hd,e.scissorTest=!1,Ar(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cs||e.mapping===Ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Od=this._renderer.getRenderTarget(),Bd=this._renderer.getActiveCubeFace(),zd=this._renderer.getActiveMipmapLevel(),Hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:Mi,format:$n,colorSpace:fo,depthBuffer:!1},s=Lm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lm(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=iM(r)),this._blurMaterial=rM(r,e,t),this._ggxMaterial=sM(r,e,t)}return s}_compileMaterial(e){let t=new ge(new qt,e);this._renderer.compile(t,jo)}_sceneToCubeUV(e,t,i,s,r){let l=new bn(90,1,t,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(Dm),h.toneMapping=ni,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ge(new rs,new Yt({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,g=!1,y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,g=!0):(m.color.copy(Dm),g=!0);for(let v=0;v<6;v++){let b=v%3;b===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[v],r.y,r.z)):b===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[v]));let A=this._cubeSize;Ar(s,b*A,v>2?A:0,A,A),h.setRenderTarget(s),g&&h.render(x,l),h.render(e,l)}h.toneMapping=u,h.autoClear=f,e.background=y}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===cs||e.mapping===Ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Um()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nm());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Ar(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,jo)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),f=0+c*1.25,u=h*f,{_lodMax:p}=this,x=this._sizeLods[i],m=3*x*(i>p-fs?i-p+fs:0),g=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=u,l.mipInt.value=p-t,Ar(r,m,g,3*x,2*x),s.setRenderTarget(r),s.render(a,jo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-i,Ar(e,m,g,3*x,2*x),s.setRenderTarget(e),s.render(a,jo)}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&je("blur direction must be either latitudinal or longitudinal!");let d=3,h=this._lodMeshes[s];h.material=c;let f=c.uniforms,u=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Us-1),x=r/p,m=isFinite(r)?1+Math.floor(d*x):Us;m>Us&&Qe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Us}`);let g=[],y=0;for(let D=0;D<Us;++D){let _=D/x,M=Math.exp(-_*_/2);g.push(M),D===0?y+=M:D<m&&(y+=2*M)}for(let D=0;D<g.length;D++)g[D]=g[D]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=p,f.mipInt.value=v-i;let b=this._sizeLods[s],A=3*b*(s>v-fs?s-v+fs:0),E=4*(this._cubeSize-b);Ar(t,A,E,3*b,2*b),l.setRenderTarget(t),l.render(h,jo)}};function iM(n){let e=[],t=[],i=[],s=n,r=n-fs+1+Pm.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-fs?l=Pm[o-n+fs-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],u=6,p=6,x=3,m=2,g=1,y=new Float32Array(x*p*u),v=new Float32Array(m*p*u),b=new Float32Array(g*p*u);for(let E=0;E<u;E++){let D=E%3*2/3-1,_=E>2?0:-1,M=[D,_,0,D+2/3,_,0,D+2/3,_+1,0,D,_,0,D+2/3,_+1,0,D,_+1,0];y.set(M,x*p*E),v.set(f,m*p*E);let S=[E,E,E,E,E,E];b.set(S,g*p*E)}let A=new qt;A.setAttribute("position",new en(y,x)),A.setAttribute("uv",new en(v,m)),A.setAttribute("faceIndex",new en(b,g)),i.push(new ge(A,null)),s>fs&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Lm(n,e,t){let i=new Fn(n,e,t);return i.texture.mapping=Wo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ar(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function sM(n,e,t){return new Bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:tM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function rM(n,e,t){let i=new Float32Array(Us),s=new F(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Bc(),fragmentShader:`

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
	`}var Fc=class extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new To(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new rs(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:Ns(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:_i});r.uniforms.tEquirect.value=t;let o=new ge(s,r),a=t.minFilter;return t.minFilter===vi&&(t.minFilter=gn),new Vl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}};function oM(n){let e=new WeakMap,t=new WeakMap,i=null;function s(f,u=!1){return f==null?null:u?o(f):r(f)}function r(f){if(f&&f.isTexture){let u=f.mapping;if(u===Xl||u===ql)if(e.has(f)){let p=e.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let x=new Fc(p.height);return x.fromEquirectangularTexture(n,f),e.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let u=f.mapping,p=u===Xl||u===ql,x=u===cs||u===Ls;if(p||x){let m=t.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return i===null&&(i=new kc(n)),m=p?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let y=f.image;return p&&y&&y.height>0||x&&y&&l(y)?(i===null&&(i=new kc(n)),m=p?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",d),m.texture):null}}}return f}function a(f,u){return u===Xl?f.mapping=cs:u===ql&&(f.mapping=Ls),f}function l(f){let u=0,p=6;for(let x=0;x<p;x++)f[x]!==void 0&&u++;return u===p}function c(f){let u=f.target;u.removeEventListener("dispose",c);let p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function d(f){let u=f.target;u.removeEventListener("dispose",d);let p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function aM(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&ml("WebGLRenderer: "+i+" extension not supported."),s}}}function lM(n,e,t,i){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete s[f.id];let u=r.get(f);u&&(e.remove(u),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let u in f)e.update(f[u],n.ARRAY_BUFFER)}function c(h){let f=[],u=h.index,p=h.attributes.position,x=0;if(p===void 0)return;if(u!==null){let y=u.array;x=u.version;for(let v=0,b=y.length;v<b;v+=3){let A=y[v+0],E=y[v+1],D=y[v+2];f.push(A,E,E,D,D,A)}}else{let y=p.array;x=p.version;for(let v=0,b=y.length/3-1;v<b;v+=3){let A=v+0,E=v+1,D=v+2;f.push(A,E,E,D,D,A)}}let m=new(p.count>=65535?vo:_o)(f,1);m.version=x;let g=r.get(h);g&&e.remove(g),r.set(h,m)}function d(h){let f=r.get(h);if(f){let u=h.index;u!==null&&f.version<u.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function cM(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){n.drawElements(i,f,r,h*o),t.update(f,i,1)}function c(h,f,u){u!==0&&(n.drawElementsInstanced(i,f,r,h*o,u),t.update(f,i,u))}function d(h,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,h,0,u);let x=0;for(let m=0;m<u;m++)x+=f[m];t.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function hM(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:je("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function dM(n,e,t){let i=new WeakMap,s=new Kt;function r(o,a,l){let c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0,f=i.get(a);if(f===void 0||f.count!==h){let M=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;u===!0&&(v=1),p===!0&&(v=2),x===!0&&(v=3);let b=a.attributes.position.count*v,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let E=new Float32Array(b*A*4*h),D=new go(E,b,A,h);D.type=Zn,D.needsUpdate=!0;let _=v*4;for(let S=0;S<h;S++){let C=m[S],N=g[S],W=y[S],Y=b*A*4*S;for(let U=0;U<C.count;U++){let H=U*_;u===!0&&(s.fromBufferAttribute(C,U),E[Y+H+0]=s.x,E[Y+H+1]=s.y,E[Y+H+2]=s.z,E[Y+H+3]=0),p===!0&&(s.fromBufferAttribute(N,U),E[Y+H+4]=s.x,E[Y+H+5]=s.y,E[Y+H+6]=s.z,E[Y+H+7]=0),x===!0&&(s.fromBufferAttribute(W,U),E[Y+H+8]=s.x,E[Y+H+9]=s.y,E[Y+H+10]=s.z,E[Y+H+11]=W.itemSize===4?s.w:1)}}f={count:h,texture:D,size:new Pe(b,A)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let u=0;for(let x=0;x<c.length;x++)u+=c[x];let p=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function fM(n,e,t,i,s){let r=new WeakMap;function o(c){let d=s.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==d&&(e.update(f),r.set(f,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==d&&(u.update(),r.set(u,d))}return f}function a(){r=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:a}}var uM={[yd]:"LINEAR_TONE_MAPPING",[_d]:"REINHARD_TONE_MAPPING",[vd]:"CINEON_TONE_MAPPING",[Md]:"ACES_FILMIC_TONE_MAPPING",[wd]:"AGX_TONE_MAPPING",[Td]:"NEUTRAL_TONE_MAPPING",[bd]:"CUSTOM_TONE_MAPPING"};function pM(n,e,t,i,s){let r=new Fn(e,t,{type:n,depthBuffer:i,stencilBuffer:s,depthTexture:i?new Hi(e,t):void 0}),o=new Fn(e,t,{type:Mi,depthBuffer:!1,stencilBuffer:!1}),a=new qt;a.setAttribute("position",new Ct([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Ct([0,2,0,0,2,0],2));let l=new Sl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new ge(a,l),d=new br(-1,1,1,-1,0,1),h=null,f=null,u=!1,p,x=null,m=[],g=!1;this.setSize=function(y,v){r.setSize(y,v),o.setSize(y,v);for(let b=0;b<m.length;b++){let A=m[b];A.setSize&&A.setSize(y,v)}},this.setEffects=function(y){m=y,g=m.length>0&&m[0].isRenderPass===!0;let v=r.width,b=r.height;for(let A=0;A<m.length;A++){let E=m[A];E.setSize&&E.setSize(v,b)}},this.begin=function(y,v){if(u||y.toneMapping===ni&&m.length===0)return!1;if(x=v,v!==null){let b=v.width,A=v.height;(r.width!==b||r.height!==A)&&this.setSize(b,A)}return g===!1&&y.setRenderTarget(r),p=y.toneMapping,y.toneMapping=ni,!0},this.hasRenderPass=function(){return g},this.end=function(y,v){y.toneMapping=p,u=!0;let b=r,A=o;for(let E=0;E<m.length;E++){let D=m[E];if(D.enabled!==!1&&(D.render(y,A,b,v),D.needsSwap!==!1)){let _=b;b=A,A=_}}if(h!==y.outputColorSpace||f!==y.toneMapping){h=y.outputColorSpace,f=y.toneMapping,l.defines={},gt.getTransfer(h)===Rt&&(l.defines.SRGB_TRANSFER="");let E=uM[f];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(x),y.render(c,d),x=null,u=!1},this.isCompositing=function(){return u},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),a.dispose(),l.dispose()}}var t0=new Rn,Wd=new Hi(1,1),n0=new go,i0=new _l,s0=new To,km=[],Fm=[],Om=new Float32Array(16),Bm=new Float32Array(9),zm=new Float32Array(4);function Cr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=km[s];if(r===void 0&&(r=new Float32Array(s),km[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function hn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function dn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function zc(n,e){let t=Fm[e];t===void 0&&(t=new Int32Array(e),Fm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function mM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function gM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2fv(this.addr,e),dn(t,e)}}function xM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;n.uniform3fv(this.addr,e),dn(t,e)}}function yM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4fv(this.addr,e),dn(t,e)}}function _M(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,i))return;zm.set(i),n.uniformMatrix2fv(this.addr,!1,zm),dn(t,i)}}function vM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,i))return;Bm.set(i),n.uniformMatrix3fv(this.addr,!1,Bm),dn(t,i)}}function MM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,i))return;Om.set(i),n.uniformMatrix4fv(this.addr,!1,Om),dn(t,i)}}function bM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function wM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2iv(this.addr,e),dn(t,e)}}function TM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;n.uniform3iv(this.addr,e),dn(t,e)}}function EM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4iv(this.addr,e),dn(t,e)}}function AM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function RM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2uiv(this.addr,e),dn(t,e)}}function CM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;n.uniform3uiv(this.addr,e),dn(t,e)}}function SM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4uiv(this.addr,e),dn(t,e)}}function IM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Wd.compareFunction=t.isReversedDepthBuffer()?Lc:Dc,r=Wd):r=t0,t.setTexture2D(e||r,s)}function PM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||i0,s)}function DM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||s0,s)}function LM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||n0,s)}function NM(n){switch(n){case 5126:return mM;case 35664:return gM;case 35665:return xM;case 35666:return yM;case 35674:return _M;case 35675:return vM;case 35676:return MM;case 5124:case 35670:return bM;case 35667:case 35671:return wM;case 35668:case 35672:return TM;case 35669:case 35673:return EM;case 5125:return AM;case 36294:return RM;case 36295:return CM;case 36296:return SM;case 35678:case 36198:case 36298:case 36306:case 35682:return IM;case 35679:case 36299:case 36307:return PM;case 35680:case 36300:case 36308:case 36293:return DM;case 36289:case 36303:case 36311:case 36292:return LM}}function UM(n,e){n.uniform1fv(this.addr,e)}function kM(n,e){let t=Cr(e,this.size,2);n.uniform2fv(this.addr,t)}function FM(n,e){let t=Cr(e,this.size,3);n.uniform3fv(this.addr,t)}function OM(n,e){let t=Cr(e,this.size,4);n.uniform4fv(this.addr,t)}function BM(n,e){let t=Cr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function zM(n,e){let t=Cr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function HM(n,e){let t=Cr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function VM(n,e){n.uniform1iv(this.addr,e)}function GM(n,e){n.uniform2iv(this.addr,e)}function WM(n,e){n.uniform3iv(this.addr,e)}function XM(n,e){n.uniform4iv(this.addr,e)}function qM(n,e){n.uniform1uiv(this.addr,e)}function YM(n,e){n.uniform2uiv(this.addr,e)}function ZM(n,e){n.uniform3uiv(this.addr,e)}function $M(n,e){n.uniform4uiv(this.addr,e)}function KM(n,e,t){let i=this.cache,s=e.length,r=zc(t,s);hn(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Wd:o=t0;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function JM(n,e,t){let i=this.cache,s=e.length,r=zc(t,s);hn(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||i0,r[o])}function jM(n,e,t){let i=this.cache,s=e.length,r=zc(t,s);hn(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||s0,r[o])}function QM(n,e,t){let i=this.cache,s=e.length,r=zc(t,s);hn(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||n0,r[o])}function e1(n){switch(n){case 5126:return UM;case 35664:return kM;case 35665:return FM;case 35666:return OM;case 35674:return BM;case 35675:return zM;case 35676:return HM;case 5124:case 35670:return VM;case 35667:case 35671:return GM;case 35668:case 35672:return WM;case 35669:case 35673:return XM;case 5125:return qM;case 36294:return YM;case 36295:return ZM;case 36296:return $M;case 35678:case 36198:case 36298:case 36306:case 35682:return KM;case 35679:case 36299:case 36307:return JM;case 35680:case 36300:case 36308:case 36293:return jM;case 36289:case 36303:case 36311:case 36292:return QM}}var Xd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=NM(t.type)}},qd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=e1(t.type)}},Yd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Vd=/(\w+)(\])?(\[|\.)?/g;function Hm(n,e){n.seq.push(e),n.map[e.id]=e}function t1(n,e,t){let i=n.name,s=i.length;for(Vd.lastIndex=0;;){let r=Vd.exec(i),o=Vd.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Hm(t,c===void 0?new Xd(a,n,e):new qd(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Yd(a),Hm(t,h)),t=h}}}var Rr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);t1(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Vm(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var n1=37297,i1=0;function s1(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Gm=new rt;function r1(n){gt._getMatrix(Gm,gt.workingColorSpace,n);let e=`mat3( ${Gm.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(n)){case uo:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return Qe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Wm(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+s1(n.getShaderSource(e),a)}else return r}function o1(n,e){let t=r1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var a1={[yd]:"Linear",[_d]:"Reinhard",[vd]:"Cineon",[Md]:"ACESFilmic",[wd]:"AgX",[Td]:"Neutral",[bd]:"Custom"};function l1(n,e){let t=a1[e];return t===void 0?(Qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Uc=new F;function c1(){gt.getLuminanceCoefficients(Uc);let n=Uc.x.toFixed(4),e=Uc.y.toFixed(4),t=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function h1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function d1(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function f1(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ea(n){return n!==""}function Xm(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var u1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zd(n){return n.replace(u1,m1)}var p1=new Map;function m1(n,e){let t=ht[e];if(t===void 0){let i=p1.get(e);if(i!==void 0)t=ht[i],Qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Zd(t)}var g1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ym(n){return n.replace(g1,x1)}function x1(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zm(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var y1={[Go]:"SHADOWMAP_TYPE_PCF",[wr]:"SHADOWMAP_TYPE_VSM"};function _1(n){return y1[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var v1={[cs]:"ENVMAP_TYPE_CUBE",[Ls]:"ENVMAP_TYPE_CUBE",[Wo]:"ENVMAP_TYPE_CUBE_UV"};function M1(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":v1[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var b1={[Ls]:"ENVMAP_MODE_REFRACTION"};function w1(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":b1[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var T1={[Wl]:"ENVMAP_BLENDING_MULTIPLY",[lm]:"ENVMAP_BLENDING_MIX",[cm]:"ENVMAP_BLENDING_ADD"};function E1(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":T1[n.combine]||"ENVMAP_BLENDING_NONE"}function A1(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function R1(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=_1(t),c=M1(t),d=w1(t),h=E1(t),f=A1(t),u=h1(t),p=d1(r),x=s.createProgram(),m,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ea).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ea).join(`
`),g.length>0&&(g+=`
`)):(m=[Zm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),g=[Zm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?ht.tonemapping_pars_fragment:"",t.toneMapping!==ni?l1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,o1("linearToOutputTexel",t.outputColorSpace),c1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ea).join(`
`)),o=Zd(o),o=Xm(o,t),o=qm(o,t),a=Zd(a),a=Xm(a,t),a=qm(a,t),o=Ym(o),a=Ym(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Dd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=y+m+o,b=y+g+a,A=Vm(s,s.VERTEX_SHADER,v),E=Vm(s,s.FRAGMENT_SHADER,b);s.attachShader(x,A),s.attachShader(x,E),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function D(C){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(x)||"",W=s.getShaderInfoLog(A)||"",Y=s.getShaderInfoLog(E)||"",U=N.trim(),H=W.trim(),$=Y.trim(),le=!0,de=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(le=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,A,E);else{let ye=Wm(s,A,"vertex"),Ce=Wm(s,E,"fragment");je("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+U+`
`+ye+`
`+Ce)}else U!==""?Qe("WebGLProgram: Program Info Log:",U):(H===""||$==="")&&(de=!1);de&&(C.diagnostics={runnable:le,programLog:U,vertexShader:{log:H,prefix:m},fragmentShader:{log:$,prefix:g}})}s.deleteShader(A),s.deleteShader(E),_=new Rr(s,x),M=f1(s,x)}let _;this.getUniforms=function(){return _===void 0&&D(this),_};let M;this.getAttributes=function(){return M===void 0&&D(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,n1)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=i1++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=E,this}var C1=0,$d=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Kd(e),t.set(e,i)),i}},Kd=class{constructor(e){this.id=C1++,this.code=e,this.usedTimes=0}};function S1(n){return n===ds||n===Ko||n===Jo}function I1(n,e,t,i,s,r){let o=new mr,a=new $d,l=new Set,c=[],d=new Map,h=i.logarithmicDepthBuffer,f=i.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,M,S,C,N,W){let Y=C.fog,U=N.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,le=e.get(_.envMap||H,$),de=le&&le.mapping===Wo?le.image.height:null,ye=u[_.type];_.precision!==null&&(f=i.getMaxPrecision(_.precision),f!==_.precision&&Qe("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let Ce=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Ue=Ce!==void 0?Ce.length:0,Ke=0;U.morphAttributes.position!==void 0&&(Ke=1),U.morphAttributes.normal!==void 0&&(Ke=2),U.morphAttributes.color!==void 0&&(Ke=3);let ie,ne,B,O;if(ye){let ot=wi[ye];ie=ot.vertexShader,ne=ot.fragmentShader}else ie=_.vertexShader,ne=_.fragmentShader,a.update(_),B=a.getVertexShaderID(_),O=a.getFragmentShaderID(_);let k=n.getRenderTarget(),P=n.state.buffers.depth.getReversed(),L=N.isInstancedMesh===!0,se=N.isBatchedMesh===!0,T=!!_.map,X=!!_.matcap,q=!!le,re=!!_.aoMap,Q=!!_.lightMap,Ee=!!_.bumpMap,ze=!!_.normalMap,Ge=!!_.displacementMap,z=!!_.emissiveMap,tt=!!_.metalnessMap,et=!!_.roughnessMap,yt=_.anisotropy>0,Me=_.clearcoat>0,St=_.dispersion>0,I=_.iridescence>0,w=_.sheen>0,K=_.transmission>0,ae=yt&&!!_.anisotropyMap,pe=Me&&!!_.clearcoatMap,ve=Me&&!!_.clearcoatNormalMap,be=Me&&!!_.clearcoatRoughnessMap,oe=I&&!!_.iridescenceMap,fe=I&&!!_.iridescenceThicknessMap,Le=w&&!!_.sheenColorMap,Oe=w&&!!_.sheenRoughnessMap,Ae=!!_.specularMap,we=!!_.specularColorMap,st=!!_.specularIntensityMap,lt=K&&!!_.transmissionMap,bt=K&&!!_.thicknessMap,V=!!_.gradientMap,Te=!!_.alphaMap,ce=_.alphaTest>0,ke=!!_.alphaHash,Re=!!_.extensions,xe=ni;_.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(xe=n.toneMapping);let We={shaderID:ye,shaderType:_.type,shaderName:_.name,vertexShader:ie,fragmentShader:ne,defines:_.defines,customVertexShaderID:B,customFragmentShaderID:O,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:se,batchingColor:se&&N._colorsTexture!==null,instancing:L,instancingColor:L&&N.instanceColor!==null,instancingMorph:L&&N.morphTexture!==null,outputColorSpace:k===null?n.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:gt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:T,matcap:X,envMap:q,envMapMode:q&&le.mapping,envMapCubeUVHeight:de,aoMap:re,lightMap:Q,bumpMap:Ee,normalMap:ze,displacementMap:Ge,emissiveMap:z,normalMapObjectSpace:ze&&_.normalMapType===fm,normalMapTangentSpace:ze&&_.normalMapType===Pc,packedNormalMap:ze&&_.normalMapType===Pc&&S1(_.normalMap.format),metalnessMap:tt,roughnessMap:et,anisotropy:yt,anisotropyMap:ae,clearcoat:Me,clearcoatMap:pe,clearcoatNormalMap:ve,clearcoatRoughnessMap:be,dispersion:St,iridescence:I,iridescenceMap:oe,iridescenceThicknessMap:fe,sheen:w,sheenColorMap:Le,sheenRoughnessMap:Oe,specularMap:Ae,specularColorMap:we,specularIntensityMap:st,transmission:K,transmissionMap:lt,thicknessMap:bt,gradientMap:V,opaque:_.transparent===!1&&_.blending===ns&&_.alphaToCoverage===!1,alphaMap:Te,alphaTest:ce,alphaHash:ke,combine:_.combine,mapUv:T&&p(_.map.channel),aoMapUv:re&&p(_.aoMap.channel),lightMapUv:Q&&p(_.lightMap.channel),bumpMapUv:Ee&&p(_.bumpMap.channel),normalMapUv:ze&&p(_.normalMap.channel),displacementMapUv:Ge&&p(_.displacementMap.channel),emissiveMapUv:z&&p(_.emissiveMap.channel),metalnessMapUv:tt&&p(_.metalnessMap.channel),roughnessMapUv:et&&p(_.roughnessMap.channel),anisotropyMapUv:ae&&p(_.anisotropyMap.channel),clearcoatMapUv:pe&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:ve&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&p(_.sheenRoughnessMap.channel),specularMapUv:Ae&&p(_.specularMap.channel),specularColorMapUv:we&&p(_.specularColorMap.channel),specularIntensityMapUv:st&&p(_.specularIntensityMap.channel),transmissionMapUv:lt&&p(_.transmissionMap.channel),thicknessMapUv:bt&&p(_.thicknessMap.channel),alphaMapUv:Te&&p(_.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ze||yt),vertexNormals:!!U.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!U.attributes.uv&&(T||Te),fog:!!Y,useFog:_.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||U.attributes.normal===void 0&&ze===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:P,skinning:N.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:Ke,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&S.length>0,shadowMapType:n.shadowMap.type,toneMapping:xe,decodeVideoTexture:T&&_.map.isVideoTexture===!0&&gt.getTransfer(_.map.colorSpace)===Rt,decodeVideoTextureEmissive:z&&_.emissiveMap.isVideoTexture===!0&&gt.getTransfer(_.emissiveMap.colorSpace)===Rt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===In,flipSided:_.side===xn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Re&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&_.extensions.multiDraw===!0||se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return We.vertexUv1s=l.has(1),We.vertexUv2s=l.has(2),We.vertexUv3s=l.has(3),l.clear(),We}function m(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let S in _.defines)M.push(S),M.push(_.defines[S]);return _.isRawShaderMaterial===!1&&(g(M,_),y(M,_),M.push(n.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function g(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function y(_,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),_.push(o.mask)}function v(_){let M=u[_.type],S;if(M){let C=wi[M];S=Sm.clone(C.uniforms)}else S=_.uniforms;return S}function b(_,M){let S=d.get(M);return S!==void 0?++S.usedTimes:(S=new R1(n,M,_,s),c.push(S),d.set(M,S)),S}function A(_){if(--_.usedTimes===0){let M=c.indexOf(_);c[M]=c[c.length-1],c.pop(),d.delete(_.cacheKey),_.destroy()}}function E(_){a.remove(_)}function D(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:v,acquireProgram:b,releaseProgram:A,releaseShaderCache:E,programs:c,dispose:D}}function P1(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function D1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function $m(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Km(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function a(f,u,p,x,m,g){let y=n[e];return y===void 0?(y={id:f.id,object:f,geometry:u,material:p,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:g},n[e]=y):(y.id=f.id,y.object=f,y.geometry=u,y.material=p,y.materialVariant=o(f),y.groupOrder=x,y.renderOrder=f.renderOrder,y.z=m,y.group=g),e++,y}function l(f,u,p,x,m,g){let y=a(f,u,p,x,m,g);p.transmission>0?i.push(y):p.transparent===!0?s.push(y):t.push(y)}function c(f,u,p,x,m,g){let y=a(f,u,p,x,m,g);p.transmission>0?i.unshift(y):p.transparent===!0?s.unshift(y):t.unshift(y)}function d(f,u){t.length>1&&t.sort(f||D1),i.length>1&&i.sort(u||$m),s.length>1&&s.sort(u||$m)}function h(){for(let f=e,u=n.length;f<u;f++){let p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:h,sort:d}}function L1(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Km,n.set(i,[o])):s>=r.length?(o=new Km,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function N1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new nt};break;case"SpotLight":t={position:new F,direction:new F,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function U1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var k1=0;function F1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function O1(n){let e=new N1,t=U1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);let s=new F,r=new xt,o=new xt;function a(c){let d=0,h=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let u=0,p=0,x=0,m=0,g=0,y=0,v=0,b=0,A=0,E=0,D=0;c.sort(F1);for(let M=0,S=c.length;M<S;M++){let C=c[M],N=C.color,W=C.intensity,Y=C.distance,U=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===ds?U=C.shadow.map.texture:U=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)d+=N.r*W,h+=N.g*W,f+=N.b*W;else if(C.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(C.sh.coefficients[H],W);D++}else if(C.isDirectionalLight){let H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let $=C.shadow,le=t.get(C);le.shadowIntensity=$.intensity,le.shadowBias=$.bias,le.shadowNormalBias=$.normalBias,le.shadowRadius=$.radius,le.shadowMapSize=$.mapSize,i.directionalShadow[u]=le,i.directionalShadowMap[u]=U,i.directionalShadowMatrix[u]=C.shadow.matrix,y++}i.directional[u]=H,u++}else if(C.isSpotLight){let H=e.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(N).multiplyScalar(W),H.distance=Y,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,i.spot[x]=H;let $=C.shadow;if(C.map&&(i.spotLightMap[A]=C.map,A++,$.updateMatrices(C),C.castShadow&&E++),i.spotLightMatrix[x]=$.matrix,C.castShadow){let le=t.get(C);le.shadowIntensity=$.intensity,le.shadowBias=$.bias,le.shadowNormalBias=$.normalBias,le.shadowRadius=$.radius,le.shadowMapSize=$.mapSize,i.spotShadow[x]=le,i.spotShadowMap[x]=U,b++}x++}else if(C.isRectAreaLight){let H=e.get(C);H.color.copy(N).multiplyScalar(W),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=H,m++}else if(C.isPointLight){let H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){let $=C.shadow,le=t.get(C);le.shadowIntensity=$.intensity,le.shadowBias=$.bias,le.shadowNormalBias=$.normalBias,le.shadowRadius=$.radius,le.shadowMapSize=$.mapSize,le.shadowCameraNear=$.camera.near,le.shadowCameraFar=$.camera.far,i.pointShadow[p]=le,i.pointShadowMap[p]=U,i.pointShadowMatrix[p]=C.shadow.matrix,v++}i.point[p]=H,p++}else if(C.isHemisphereLight){let H=e.get(C);H.skyColor.copy(C.color).multiplyScalar(W),H.groundColor.copy(C.groundColor).multiplyScalar(W),i.hemi[g]=H,g++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;let _=i.hash;(_.directionalLength!==u||_.pointLength!==p||_.spotLength!==x||_.rectAreaLength!==m||_.hemiLength!==g||_.numDirectionalShadows!==y||_.numPointShadows!==v||_.numSpotShadows!==b||_.numSpotMaps!==A||_.numLightProbes!==D)&&(i.directional.length=u,i.spot.length=x,i.rectArea.length=m,i.point.length=p,i.hemi.length=g,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=b+A-E,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=D,_.directionalLength=u,_.pointLength=p,_.spotLength=x,_.rectAreaLength=m,_.hemiLength=g,_.numDirectionalShadows=y,_.numPointShadows=v,_.numSpotShadows=b,_.numSpotMaps=A,_.numLightProbes=D,i.version=k1++)}function l(c,d){let h=0,f=0,u=0,p=0,x=0,m=d.matrixWorldInverse;for(let g=0,y=c.length;g<y;g++){let v=c[g];if(v.isDirectionalLight){let b=i.directional[h];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),h++}else if(v.isSpotLight){let b=i.spot[u];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(v.isRectAreaLight){let b=i.rectArea[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){let b=i.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let b=i.hemi[x];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Jm(n){let e=new O1(n),t=[],i=[],s=[];function r(f){h.camera=f,t.length=0,i.length=0,s.length=0}function o(f){t.push(f)}function a(f){i.push(f)}function l(f){s.push(f)}function c(){e.setup(t)}function d(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:d,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function B1(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Jm(n),e.set(s,[a])):r>=o.length?(a=new Jm(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var z1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H1=`uniform sampler2D shadow_pass;
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
}`,V1=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],G1=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],jm=new xt,Qo=new F,Gd=new F;function W1(n,e,t){let i=new yr,s=new Pe,r=new Pe,o=new Kt,a=new Il,l=new Pl,c={},d=t.maxTextureSize,h={[Fi]:xn,[xn]:Fi,[In]:In},f=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:z1,fragmentShader:H1}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let p=new qt;p.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ge(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Go;let g=this.type;this.render=function(E,D,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Gp&&(Qe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Go);let M=n.getRenderTarget(),S=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),N=n.state;N.setBlending(_i),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let W=g!==this.type;W&&D.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(U=>U.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,U=E.length;Y<U;Y++){let H=E[Y],$=H.shadow;if($===void 0){Qe("WebGLShadowMap:",H,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let le=$.getFrameExtents();s.multiply(le),r.copy($.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/le.x),s.x=r.x*le.x,$.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/le.y),s.y=r.y*le.y,$.mapSize.y=r.y));let de=n.state.buffers.depth.getReversed();if($.camera._reversedDepth=de,$.map===null||W===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===wr){if(H.isPointLight){Qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Fn(s.x,s.y,{format:ds,type:Mi,minFilter:gn,magFilter:gn,generateMipmaps:!1}),$.map.texture.name=H.name+".shadowMap",$.map.depthTexture=new Hi(s.x,s.y,Zn),$.map.depthTexture.name=H.name+".shadowMapDepth",$.map.depthTexture.format=fi,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=pn,$.map.depthTexture.magFilter=pn}else H.isPointLight?($.map=new Fc(s.x),$.map.depthTexture=new Ml(s.x,ii)):($.map=new Fn(s.x,s.y),$.map.depthTexture=new Hi(s.x,s.y,ii)),$.map.depthTexture.name=H.name+".shadowMap",$.map.depthTexture.format=fi,this.type===Go?($.map.depthTexture.compareFunction=de?Lc:Dc,$.map.depthTexture.minFilter=gn,$.map.depthTexture.magFilter=gn):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=pn,$.map.depthTexture.magFilter=pn);$.camera.updateProjectionMatrix()}let ye=$.map.isWebGLCubeRenderTarget?6:1;for(let Ce=0;Ce<ye;Ce++){if($.map.isWebGLCubeRenderTarget)n.setRenderTarget($.map,Ce),n.clear();else{Ce===0&&(n.setRenderTarget($.map),n.clear());let Ue=$.getViewport(Ce);o.set(r.x*Ue.x,r.y*Ue.y,r.x*Ue.z,r.y*Ue.w),N.viewport(o)}if(H.isPointLight){let Ue=$.camera,Ke=$.matrix,ie=H.distance||Ue.far;ie!==Ue.far&&(Ue.far=ie,Ue.updateProjectionMatrix()),Qo.setFromMatrixPosition(H.matrixWorld),Ue.position.copy(Qo),Gd.copy(Ue.position),Gd.add(V1[Ce]),Ue.up.copy(G1[Ce]),Ue.lookAt(Gd),Ue.updateMatrixWorld(),Ke.makeTranslation(-Qo.x,-Qo.y,-Qo.z),jm.multiplyMatrices(Ue.projectionMatrix,Ue.matrixWorldInverse),$._frustum.setFromProjectionMatrix(jm,Ue.coordinateSystem,Ue.reversedDepth)}else $.updateMatrices(H);i=$.getFrustum(),b(D,_,$.camera,H,this.type)}$.isPointLightShadow!==!0&&this.type===wr&&y($,_),$.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(M,S,C)};function y(E,D){let _=e.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Fn(s.x,s.y,{format:ds,type:Mi})),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(D,null,_,f,x,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(D,null,_,u,x,null)}function v(E,D,_,M){let S=null,C=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)S=C;else if(S=_.isPointLight===!0?l:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let N=S.uuid,W=D.uuid,Y=c[N];Y===void 0&&(Y={},c[N]=Y);let U=Y[W];U===void 0&&(U=S.clone(),Y[W]=U,D.addEventListener("dispose",A)),S=U}if(S.visible=D.visible,S.wireframe=D.wireframe,M===wr?S.side=D.shadowSide!==null?D.shadowSide:D.side:S.side=D.shadowSide!==null?D.shadowSide:h[D.side],S.alphaMap=D.alphaMap,S.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,S.map=D.map,S.clipShadows=D.clipShadows,S.clippingPlanes=D.clippingPlanes,S.clipIntersection=D.clipIntersection,S.displacementMap=D.displacementMap,S.displacementScale=D.displacementScale,S.displacementBias=D.displacementBias,S.wireframeLinewidth=D.wireframeLinewidth,S.linewidth=D.linewidth,_.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let N=n.properties.get(S);N.light=_}return S}function b(E,D,_,M,S){if(E.visible===!1)return;if(E.layers.test(D.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===wr)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);let W=e.update(E),Y=E.material;if(Array.isArray(Y)){let U=W.groups;for(let H=0,$=U.length;H<$;H++){let le=U[H],de=Y[le.materialIndex];if(de&&de.visible){let ye=v(E,de,M,S);E.onBeforeShadow(n,E,D,_,W,ye,le),n.renderBufferDirect(_,null,W,ye,E,le),E.onAfterShadow(n,E,D,_,W,ye,le)}}}else if(Y.visible){let U=v(E,Y,M,S);E.onBeforeShadow(n,E,D,_,W,U,null),n.renderBufferDirect(_,null,W,U,E,null),E.onAfterShadow(n,E,D,_,W,U,null)}}let N=E.children;for(let W=0,Y=N.length;W<Y;W++)b(N[W],D,_,M,S)}function A(E){E.target.removeEventListener("dispose",A);for(let _ in c){let M=c[_],S=E.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function X1(n,e){function t(){let V=!1,Te=new Kt,ce=null,ke=new Kt(0,0,0,0);return{setMask:function(Re){ce!==Re&&!V&&(n.colorMask(Re,Re,Re,Re),ce=Re)},setLocked:function(Re){V=Re},setClear:function(Re,xe,We,ot,tn){tn===!0&&(Re*=ot,xe*=ot,We*=ot),Te.set(Re,xe,We,ot),ke.equals(Te)===!1&&(n.clearColor(Re,xe,We,ot),ke.copy(Te))},reset:function(){V=!1,ce=null,ke.set(-1,0,0,0)}}}function i(){let V=!1,Te=!1,ce=null,ke=null,Re=null;return{setReversed:function(xe){if(Te!==xe){let We=e.get("EXT_clip_control");xe?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),Te=xe;let ot=Re;Re=null,this.setClear(ot)}},getReversed:function(){return Te},setTest:function(xe){xe?k(n.DEPTH_TEST):P(n.DEPTH_TEST)},setMask:function(xe){ce!==xe&&!V&&(n.depthMask(xe),ce=xe)},setFunc:function(xe){if(Te&&(xe=bm[xe]),ke!==xe){switch(xe){case rl:n.depthFunc(n.NEVER);break;case ol:n.depthFunc(n.ALWAYS);break;case al:n.depthFunc(n.LESS);break;case Rs:n.depthFunc(n.LEQUAL);break;case ll:n.depthFunc(n.EQUAL);break;case cl:n.depthFunc(n.GEQUAL);break;case hl:n.depthFunc(n.GREATER);break;case dl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ke=xe}},setLocked:function(xe){V=xe},setClear:function(xe){Re!==xe&&(Re=xe,Te&&(xe=1-xe),n.clearDepth(xe))},reset:function(){V=!1,ce=null,ke=null,Re=null,Te=!1}}}function s(){let V=!1,Te=null,ce=null,ke=null,Re=null,xe=null,We=null,ot=null,tn=null;return{setTest:function(It){V||(It?k(n.STENCIL_TEST):P(n.STENCIL_TEST))},setMask:function(It){Te!==It&&!V&&(n.stencilMask(It),Te=It)},setFunc:function(It,Ti,si){(ce!==It||ke!==Ti||Re!==si)&&(n.stencilFunc(It,Ti,si),ce=It,ke=Ti,Re=si)},setOp:function(It,Ti,si){(xe!==It||We!==Ti||ot!==si)&&(n.stencilOp(It,Ti,si),xe=It,We=Ti,ot=si)},setLocked:function(It){V=It},setClear:function(It){tn!==It&&(n.clearStencil(It),tn=It)},reset:function(){V=!1,Te=null,ce=null,ke=null,Re=null,xe=null,We=null,ot=null,tn=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,d={},h={},f={},u=new WeakMap,p=[],x=null,m=!1,g=null,y=null,v=null,b=null,A=null,E=null,D=null,_=new nt(0,0,0),M=0,S=!1,C=null,N=null,W=null,Y=null,U=null,H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,le=0,de=n.getParameter(n.VERSION);de.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(de)[1]),$=le>=1):de.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(de)[1]),$=le>=2);let ye=null,Ce={},Ue=n.getParameter(n.SCISSOR_BOX),Ke=n.getParameter(n.VIEWPORT),ie=new Kt().fromArray(Ue),ne=new Kt().fromArray(Ke);function B(V,Te,ce,ke){let Re=new Uint8Array(4),xe=n.createTexture();n.bindTexture(V,xe),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let We=0;We<ce;We++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(Te,0,n.RGBA,1,1,ke,0,n.RGBA,n.UNSIGNED_BYTE,Re):n.texImage2D(Te+We,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Re);return xe}let O={};O[n.TEXTURE_2D]=B(n.TEXTURE_2D,n.TEXTURE_2D,1),O[n.TEXTURE_CUBE_MAP]=B(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),O[n.TEXTURE_2D_ARRAY]=B(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),O[n.TEXTURE_3D]=B(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),k(n.DEPTH_TEST),o.setFunc(Rs),Ee(!1),ze(md),k(n.CULL_FACE),re(_i);function k(V){d[V]!==!0&&(n.enable(V),d[V]=!0)}function P(V){d[V]!==!1&&(n.disable(V),d[V]=!1)}function L(V,Te){return f[V]!==Te?(n.bindFramebuffer(V,Te),f[V]=Te,V===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Te),V===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Te),!0):!1}function se(V,Te){let ce=p,ke=!1;if(V){ce=u.get(Te),ce===void 0&&(ce=[],u.set(Te,ce));let Re=V.textures;if(ce.length!==Re.length||ce[0]!==n.COLOR_ATTACHMENT0){for(let xe=0,We=Re.length;xe<We;xe++)ce[xe]=n.COLOR_ATTACHMENT0+xe;ce.length=Re.length,ke=!0}}else ce[0]!==n.BACK&&(ce[0]=n.BACK,ke=!0);ke&&n.drawBuffers(ce)}function T(V){return x!==V?(n.useProgram(V),x=V,!0):!1}let X={[is]:n.FUNC_ADD,[Xp]:n.FUNC_SUBTRACT,[qp]:n.FUNC_REVERSE_SUBTRACT};X[Yp]=n.MIN,X[Zp]=n.MAX;let q={[$p]:n.ZERO,[Kp]:n.ONE,[Jp]:n.SRC_COLOR,[il]:n.SRC_ALPHA,[im]:n.SRC_ALPHA_SATURATE,[tm]:n.DST_COLOR,[Qp]:n.DST_ALPHA,[jp]:n.ONE_MINUS_SRC_COLOR,[sl]:n.ONE_MINUS_SRC_ALPHA,[nm]:n.ONE_MINUS_DST_COLOR,[em]:n.ONE_MINUS_DST_ALPHA,[sm]:n.CONSTANT_COLOR,[rm]:n.ONE_MINUS_CONSTANT_COLOR,[om]:n.CONSTANT_ALPHA,[am]:n.ONE_MINUS_CONSTANT_ALPHA};function re(V,Te,ce,ke,Re,xe,We,ot,tn,It){if(V===_i){m===!0&&(P(n.BLEND),m=!1);return}if(m===!1&&(k(n.BLEND),m=!0),V!==Wp){if(V!==g||It!==S){if((y!==is||A!==is)&&(n.blendEquation(n.FUNC_ADD),y=is,A=is),It)switch(V){case ns:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wn:n.blendFunc(n.ONE,n.ONE);break;case gd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xd:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:je("WebGLState: Invalid blending: ",V);break}else switch(V){case ns:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case gd:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xd:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",V);break}v=null,b=null,E=null,D=null,_.set(0,0,0),M=0,g=V,S=It}return}Re=Re||Te,xe=xe||ce,We=We||ke,(Te!==y||Re!==A)&&(n.blendEquationSeparate(X[Te],X[Re]),y=Te,A=Re),(ce!==v||ke!==b||xe!==E||We!==D)&&(n.blendFuncSeparate(q[ce],q[ke],q[xe],q[We]),v=ce,b=ke,E=xe,D=We),(ot.equals(_)===!1||tn!==M)&&(n.blendColor(ot.r,ot.g,ot.b,tn),_.copy(ot),M=tn),g=V,S=!1}function Q(V,Te){V.side===In?P(n.CULL_FACE):k(n.CULL_FACE);let ce=V.side===xn;Te&&(ce=!ce),Ee(ce),V.blending===ns&&V.transparent===!1?re(_i):re(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);let ke=V.stencilWrite;a.setTest(ke),ke&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),z(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?k(n.SAMPLE_ALPHA_TO_COVERAGE):P(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(V){C!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),C=V)}function ze(V){V!==Hp?(k(n.CULL_FACE),V!==N&&(V===md?n.cullFace(n.BACK):V===Vp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):P(n.CULL_FACE),N=V}function Ge(V){V!==W&&($&&n.lineWidth(V),W=V)}function z(V,Te,ce){V?(k(n.POLYGON_OFFSET_FILL),(Y!==Te||U!==ce)&&(Y=Te,U=ce,o.getReversed()&&(Te=-Te),n.polygonOffset(Te,ce))):P(n.POLYGON_OFFSET_FILL)}function tt(V){V?k(n.SCISSOR_TEST):P(n.SCISSOR_TEST)}function et(V){V===void 0&&(V=n.TEXTURE0+H-1),ye!==V&&(n.activeTexture(V),ye=V)}function yt(V,Te,ce){ce===void 0&&(ye===null?ce=n.TEXTURE0+H-1:ce=ye);let ke=Ce[ce];ke===void 0&&(ke={type:void 0,texture:void 0},Ce[ce]=ke),(ke.type!==V||ke.texture!==Te)&&(ye!==ce&&(n.activeTexture(ce),ye=ce),n.bindTexture(V,Te||O[V]),ke.type=V,ke.texture=Te)}function Me(){let V=Ce[ye];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function St(){try{n.compressedTexImage2D(...arguments)}catch(V){je("WebGLState:",V)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(V){je("WebGLState:",V)}}function w(){try{n.texSubImage2D(...arguments)}catch(V){je("WebGLState:",V)}}function K(){try{n.texSubImage3D(...arguments)}catch(V){je("WebGLState:",V)}}function ae(){try{n.compressedTexSubImage2D(...arguments)}catch(V){je("WebGLState:",V)}}function pe(){try{n.compressedTexSubImage3D(...arguments)}catch(V){je("WebGLState:",V)}}function ve(){try{n.texStorage2D(...arguments)}catch(V){je("WebGLState:",V)}}function be(){try{n.texStorage3D(...arguments)}catch(V){je("WebGLState:",V)}}function oe(){try{n.texImage2D(...arguments)}catch(V){je("WebGLState:",V)}}function fe(){try{n.texImage3D(...arguments)}catch(V){je("WebGLState:",V)}}function Le(V){return h[V]!==void 0?h[V]:n.getParameter(V)}function Oe(V,Te){h[V]!==Te&&(n.pixelStorei(V,Te),h[V]=Te)}function Ae(V){ie.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),ie.copy(V))}function we(V){ne.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),ne.copy(V))}function st(V,Te){let ce=c.get(Te);ce===void 0&&(ce=new WeakMap,c.set(Te,ce));let ke=ce.get(V);ke===void 0&&(ke=n.getUniformBlockIndex(Te,V.name),ce.set(V,ke))}function lt(V,Te){let ke=c.get(Te).get(V);l.get(Te)!==ke&&(n.uniformBlockBinding(Te,ke,V.__bindingPointIndex),l.set(Te,ke))}function bt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},h={},ye=null,Ce={},f={},u=new WeakMap,p=[],x=null,m=!1,g=null,y=null,v=null,b=null,A=null,E=null,D=null,_=new nt(0,0,0),M=0,S=!1,C=null,N=null,W=null,Y=null,U=null,ie.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:k,disable:P,bindFramebuffer:L,drawBuffers:se,useProgram:T,setBlending:re,setMaterial:Q,setFlipSided:Ee,setCullFace:ze,setLineWidth:Ge,setPolygonOffset:z,setScissorTest:tt,activeTexture:et,bindTexture:yt,unbindTexture:Me,compressedTexImage2D:St,compressedTexImage3D:I,texImage2D:oe,texImage3D:fe,pixelStorei:Oe,getParameter:Le,updateUBOMapping:st,uniformBlockBinding:lt,texStorage2D:ve,texStorage3D:be,texSubImage2D:w,texSubImage3D:K,compressedTexSubImage2D:ae,compressedTexSubImage3D:pe,scissor:Ae,viewport:we,reset:bt}}function q1(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pe,d=new WeakMap,h=new Set,f,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,w){return p?new OffscreenCanvas(I,w):po("canvas")}function m(I,w,K){let ae=1,pe=St(I);if((pe.width>K||pe.height>K)&&(ae=K/Math.max(pe.width,pe.height)),ae<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let ve=Math.floor(ae*pe.width),be=Math.floor(ae*pe.height);f===void 0&&(f=x(ve,be));let oe=w?x(ve,be):f;return oe.width=ve,oe.height=be,oe.getContext("2d").drawImage(I,0,0,ve,be),Qe("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+ve+"x"+be+")."),oe}else return"data"in I&&Qe("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),I;return I}function g(I){return I.generateMipmaps}function y(I){n.generateMipmap(I)}function v(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(I,w,K,ae,pe,ve=!1){if(I!==null){if(n[I]!==void 0)return n[I];Qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let be;ae&&(be=e.get("EXT_texture_norm16"),be||Qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let oe=w;if(w===n.RED&&(K===n.FLOAT&&(oe=n.R32F),K===n.HALF_FLOAT&&(oe=n.R16F),K===n.UNSIGNED_BYTE&&(oe=n.R8),K===n.UNSIGNED_SHORT&&be&&(oe=be.R16_EXT),K===n.SHORT&&be&&(oe=be.R16_SNORM_EXT)),w===n.RED_INTEGER&&(K===n.UNSIGNED_BYTE&&(oe=n.R8UI),K===n.UNSIGNED_SHORT&&(oe=n.R16UI),K===n.UNSIGNED_INT&&(oe=n.R32UI),K===n.BYTE&&(oe=n.R8I),K===n.SHORT&&(oe=n.R16I),K===n.INT&&(oe=n.R32I)),w===n.RG&&(K===n.FLOAT&&(oe=n.RG32F),K===n.HALF_FLOAT&&(oe=n.RG16F),K===n.UNSIGNED_BYTE&&(oe=n.RG8),K===n.UNSIGNED_SHORT&&be&&(oe=be.RG16_EXT),K===n.SHORT&&be&&(oe=be.RG16_SNORM_EXT)),w===n.RG_INTEGER&&(K===n.UNSIGNED_BYTE&&(oe=n.RG8UI),K===n.UNSIGNED_SHORT&&(oe=n.RG16UI),K===n.UNSIGNED_INT&&(oe=n.RG32UI),K===n.BYTE&&(oe=n.RG8I),K===n.SHORT&&(oe=n.RG16I),K===n.INT&&(oe=n.RG32I)),w===n.RGB_INTEGER&&(K===n.UNSIGNED_BYTE&&(oe=n.RGB8UI),K===n.UNSIGNED_SHORT&&(oe=n.RGB16UI),K===n.UNSIGNED_INT&&(oe=n.RGB32UI),K===n.BYTE&&(oe=n.RGB8I),K===n.SHORT&&(oe=n.RGB16I),K===n.INT&&(oe=n.RGB32I)),w===n.RGBA_INTEGER&&(K===n.UNSIGNED_BYTE&&(oe=n.RGBA8UI),K===n.UNSIGNED_SHORT&&(oe=n.RGBA16UI),K===n.UNSIGNED_INT&&(oe=n.RGBA32UI),K===n.BYTE&&(oe=n.RGBA8I),K===n.SHORT&&(oe=n.RGBA16I),K===n.INT&&(oe=n.RGBA32I)),w===n.RGB&&(K===n.UNSIGNED_SHORT&&be&&(oe=be.RGB16_EXT),K===n.SHORT&&be&&(oe=be.RGB16_SNORM_EXT),K===n.UNSIGNED_INT_5_9_9_9_REV&&(oe=n.RGB9_E5),K===n.UNSIGNED_INT_10F_11F_11F_REV&&(oe=n.R11F_G11F_B10F)),w===n.RGBA){let fe=ve?uo:gt.getTransfer(pe);K===n.FLOAT&&(oe=n.RGBA32F),K===n.HALF_FLOAT&&(oe=n.RGBA16F),K===n.UNSIGNED_BYTE&&(oe=fe===Rt?n.SRGB8_ALPHA8:n.RGBA8),K===n.UNSIGNED_SHORT&&be&&(oe=be.RGBA16_EXT),K===n.SHORT&&be&&(oe=be.RGBA16_SNORM_EXT),K===n.UNSIGNED_SHORT_4_4_4_4&&(oe=n.RGBA4),K===n.UNSIGNED_SHORT_5_5_5_1&&(oe=n.RGB5_A1)}return(oe===n.R16F||oe===n.R32F||oe===n.RG16F||oe===n.RG32F||oe===n.RGBA16F||oe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function A(I,w){let K;return I?w===null||w===ii||w===Er?K=n.DEPTH24_STENCIL8:w===Zn?K=n.DEPTH32F_STENCIL8:w===Tr&&(K=n.DEPTH24_STENCIL8,Qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ii||w===Er?K=n.DEPTH_COMPONENT24:w===Zn?K=n.DEPTH_COMPONENT32F:w===Tr&&(K=n.DEPTH_COMPONENT16),K}function E(I,w){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==pn&&I.minFilter!==gn?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function D(I){let w=I.target;w.removeEventListener("dispose",D),M(w),w.isVideoTexture&&d.delete(w),w.isHTMLTexture&&h.delete(w)}function _(I){let w=I.target;w.removeEventListener("dispose",_),C(w)}function M(I){let w=i.get(I);if(w.__webglInit===void 0)return;let K=I.source,ae=u.get(K);if(ae){let pe=ae[w.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&S(I),Object.keys(ae).length===0&&u.delete(K)}i.remove(I)}function S(I){let w=i.get(I);n.deleteTexture(w.__webglTexture);let K=I.source,ae=u.get(K);delete ae[w.__cacheKey],o.memory.textures--}function C(I){let w=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(w.__webglFramebuffer[ae]))for(let pe=0;pe<w.__webglFramebuffer[ae].length;pe++)n.deleteFramebuffer(w.__webglFramebuffer[ae][pe]);else n.deleteFramebuffer(w.__webglFramebuffer[ae]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[ae])}else{if(Array.isArray(w.__webglFramebuffer))for(let ae=0;ae<w.__webglFramebuffer.length;ae++)n.deleteFramebuffer(w.__webglFramebuffer[ae]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ae=0;ae<w.__webglColorRenderbuffer.length;ae++)w.__webglColorRenderbuffer[ae]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[ae]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let K=I.textures;for(let ae=0,pe=K.length;ae<pe;ae++){let ve=i.get(K[ae]);ve.__webglTexture&&(n.deleteTexture(ve.__webglTexture),o.memory.textures--),i.remove(K[ae])}i.remove(I)}let N=0;function W(){N=0}function Y(){return N}function U(I){N=I}function H(){let I=N;return I>=s.maxTextures&&Qe("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),N+=1,I}function $(I){let w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function le(I,w){let K=i.get(I);if(I.isVideoTexture&&yt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&K.__version!==I.version){let ae=I.image;if(ae===null)Qe("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)Qe("WebGLRenderer: Texture marked for update but image is incomplete");else{P(K,I,w);return}}else I.isExternalTexture&&(K.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,K.__webglTexture,n.TEXTURE0+w)}function de(I,w){let K=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&K.__version!==I.version){P(K,I,w);return}else I.isExternalTexture&&(K.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,K.__webglTexture,n.TEXTURE0+w)}function ye(I,w){let K=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&K.__version!==I.version){P(K,I,w);return}t.bindTexture(n.TEXTURE_3D,K.__webglTexture,n.TEXTURE0+w)}function Ce(I,w){let K=i.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&K.__version!==I.version){L(K,I,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture,n.TEXTURE0+w)}let Ue={[di]:n.REPEAT,[hi]:n.CLAMP_TO_EDGE,[fl]:n.MIRRORED_REPEAT},Ke={[pn]:n.NEAREST,[hm]:n.NEAREST_MIPMAP_NEAREST,[Xo]:n.NEAREST_MIPMAP_LINEAR,[gn]:n.LINEAR,[Yl]:n.LINEAR_MIPMAP_NEAREST,[vi]:n.LINEAR_MIPMAP_LINEAR},ie={[um]:n.NEVER,[ym]:n.ALWAYS,[pm]:n.LESS,[Dc]:n.LEQUAL,[mm]:n.EQUAL,[Lc]:n.GEQUAL,[gm]:n.GREATER,[xm]:n.NOTEQUAL};function ne(I,w){if(w.type===Zn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===gn||w.magFilter===Yl||w.magFilter===Xo||w.magFilter===vi||w.minFilter===gn||w.minFilter===Yl||w.minFilter===Xo||w.minFilter===vi)&&Qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,Ue[w.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,Ue[w.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,Ue[w.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,Ke[w.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,Ke[w.minFilter]),w.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,ie[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===pn||w.minFilter!==Xo&&w.minFilter!==vi||w.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){let K=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function B(I,w){let K=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",D));let ae=w.source,pe=u.get(ae);pe===void 0&&(pe={},u.set(ae,pe));let ve=$(w);if(ve!==I.__cacheKey){pe[ve]===void 0&&(pe[ve]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,K=!0),pe[ve].usedTimes++;let be=pe[I.__cacheKey];be!==void 0&&(pe[I.__cacheKey].usedTimes--,be.usedTimes===0&&S(w)),I.__cacheKey=ve,I.__webglTexture=pe[ve].texture}return K}function O(I,w,K){return Math.floor(Math.floor(I/K)/w)}function k(I,w,K,ae){let ve=I.updateRanges;if(ve.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,K,ae,w.data);else{ve.sort((Oe,Ae)=>Oe.start-Ae.start);let be=0;for(let Oe=1;Oe<ve.length;Oe++){let Ae=ve[be],we=ve[Oe],st=Ae.start+Ae.count,lt=O(we.start,w.width,4),bt=O(Ae.start,w.width,4);we.start<=st+1&&lt===bt&&O(we.start+we.count-1,w.width,4)===lt?Ae.count=Math.max(Ae.count,we.start+we.count-Ae.start):(++be,ve[be]=we)}ve.length=be+1;let oe=t.getParameter(n.UNPACK_ROW_LENGTH),fe=t.getParameter(n.UNPACK_SKIP_PIXELS),Le=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let Oe=0,Ae=ve.length;Oe<Ae;Oe++){let we=ve[Oe],st=Math.floor(we.start/4),lt=Math.ceil(we.count/4),bt=st%w.width,V=Math.floor(st/w.width),Te=lt,ce=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,bt),t.pixelStorei(n.UNPACK_SKIP_ROWS,V),t.texSubImage2D(n.TEXTURE_2D,0,bt,V,Te,ce,K,ae,w.data)}I.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,oe),t.pixelStorei(n.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Le)}}function P(I,w,K){let ae=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ae=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ae=n.TEXTURE_3D);let pe=B(I,w),ve=w.source;t.bindTexture(ae,I.__webglTexture,n.TEXTURE0+K);let be=i.get(ve);if(ve.version!==be.__version||pe===!0){if(t.activeTexture(n.TEXTURE0+K),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let ce=gt.getPrimaries(gt.workingColorSpace),ke=w.colorSpace===Vi?null:gt.getPrimaries(w.colorSpace),Re=w.colorSpace===Vi||ce===ke?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re)}t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment);let fe=m(w.image,!1,s.maxTextureSize);fe=Me(w,fe);let Le=r.convert(w.format,w.colorSpace),Oe=r.convert(w.type),Ae=b(w.internalFormat,Le,Oe,w.normalized,w.colorSpace,w.isVideoTexture);ne(ae,w);let we,st=w.mipmaps,lt=w.isVideoTexture!==!0,bt=be.__version===void 0||pe===!0,V=ve.dataReady,Te=E(w,fe);if(w.isDepthTexture)Ae=A(w.format===hs,w.type),bt&&(lt?t.texStorage2D(n.TEXTURE_2D,1,Ae,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,Ae,fe.width,fe.height,0,Le,Oe,null));else if(w.isDataTexture)if(st.length>0){lt&&bt&&t.texStorage2D(n.TEXTURE_2D,Te,Ae,st[0].width,st[0].height);for(let ce=0,ke=st.length;ce<ke;ce++)we=st[ce],lt?V&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,we.width,we.height,Le,Oe,we.data):t.texImage2D(n.TEXTURE_2D,ce,Ae,we.width,we.height,0,Le,Oe,we.data);w.generateMipmaps=!1}else lt?(bt&&t.texStorage2D(n.TEXTURE_2D,Te,Ae,fe.width,fe.height),V&&k(w,fe,Le,Oe)):t.texImage2D(n.TEXTURE_2D,0,Ae,fe.width,fe.height,0,Le,Oe,fe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){lt&&bt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Ae,st[0].width,st[0].height,fe.depth);for(let ce=0,ke=st.length;ce<ke;ce++)if(we=st[ce],w.format!==$n)if(Le!==null)if(lt){if(V)if(w.layerUpdates.size>0){let Re=Fd(we.width,we.height,w.format,w.type);for(let xe of w.layerUpdates){let We=we.data.subarray(xe*Re/we.data.BYTES_PER_ELEMENT,(xe+1)*Re/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,xe,we.width,we.height,1,Le,We)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,we.width,we.height,fe.depth,Le,we.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ce,Ae,we.width,we.height,fe.depth,0,we.data,0,0);else Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?V&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,we.width,we.height,fe.depth,Le,Oe,we.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ce,Ae,we.width,we.height,fe.depth,0,Le,Oe,we.data)}else{lt&&bt&&t.texStorage2D(n.TEXTURE_2D,Te,Ae,st[0].width,st[0].height);for(let ce=0,ke=st.length;ce<ke;ce++)we=st[ce],w.format!==$n?Le!==null?lt?V&&t.compressedTexSubImage2D(n.TEXTURE_2D,ce,0,0,we.width,we.height,Le,we.data):t.compressedTexImage2D(n.TEXTURE_2D,ce,Ae,we.width,we.height,0,we.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?V&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,we.width,we.height,Le,Oe,we.data):t.texImage2D(n.TEXTURE_2D,ce,Ae,we.width,we.height,0,Le,Oe,we.data)}else if(w.isDataArrayTexture)if(lt){if(bt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Ae,fe.width,fe.height,fe.depth),V)if(w.layerUpdates.size>0){let ce=Fd(fe.width,fe.height,w.format,w.type);for(let ke of w.layerUpdates){let Re=fe.data.subarray(ke*ce/fe.data.BYTES_PER_ELEMENT,(ke+1)*ce/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ke,fe.width,fe.height,1,Le,Oe,Re)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Le,Oe,fe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,fe.width,fe.height,fe.depth,0,Le,Oe,fe.data);else if(w.isData3DTexture)lt?(bt&&t.texStorage3D(n.TEXTURE_3D,Te,Ae,fe.width,fe.height,fe.depth),V&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Le,Oe,fe.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,fe.width,fe.height,fe.depth,0,Le,Oe,fe.data);else if(w.isFramebufferTexture){if(bt)if(lt)t.texStorage2D(n.TEXTURE_2D,Te,Ae,fe.width,fe.height);else{let ce=fe.width,ke=fe.height;for(let Re=0;Re<Te;Re++)t.texImage2D(n.TEXTURE_2D,Re,Ae,ce,ke,0,Le,Oe,null),ce>>=1,ke>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in n){let ce=n.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),fe.parentNode!==ce){ce.appendChild(fe),h.add(w),ce.onpaint=ot=>{let tn=ot.changedElements;for(let It of h)tn.includes(It.image)&&(It.needsUpdate=!0)},ce.requestPaint();return}let ke=0,Re=n.RGBA,xe=n.RGBA,We=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,ke,Re,xe,We,fe),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(st.length>0){if(lt&&bt){let ce=St(st[0]);t.texStorage2D(n.TEXTURE_2D,Te,Ae,ce.width,ce.height)}for(let ce=0,ke=st.length;ce<ke;ce++)we=st[ce],lt?V&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,Le,Oe,we):t.texImage2D(n.TEXTURE_2D,ce,Ae,Le,Oe,we);w.generateMipmaps=!1}else if(lt){if(bt){let ce=St(fe);t.texStorage2D(n.TEXTURE_2D,Te,Ae,ce.width,ce.height)}V&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Le,Oe,fe)}else t.texImage2D(n.TEXTURE_2D,0,Ae,Le,Oe,fe);g(w)&&y(ae),be.__version=ve.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function L(I,w,K){if(w.image.length!==6)return;let ae=B(I,w),pe=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+K);let ve=i.get(pe);if(pe.version!==ve.__version||ae===!0){t.activeTexture(n.TEXTURE0+K);let be=gt.getPrimaries(gt.workingColorSpace),oe=w.colorSpace===Vi?null:gt.getPrimaries(w.colorSpace),fe=w.colorSpace===Vi||be===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let Le=w.isCompressedTexture||w.image[0].isCompressedTexture,Oe=w.image[0]&&w.image[0].isDataTexture,Ae=[];for(let xe=0;xe<6;xe++)!Le&&!Oe?Ae[xe]=m(w.image[xe],!0,s.maxCubemapSize):Ae[xe]=Oe?w.image[xe].image:w.image[xe],Ae[xe]=Me(w,Ae[xe]);let we=Ae[0],st=r.convert(w.format,w.colorSpace),lt=r.convert(w.type),bt=b(w.internalFormat,st,lt,w.normalized,w.colorSpace),V=w.isVideoTexture!==!0,Te=ve.__version===void 0||ae===!0,ce=pe.dataReady,ke=E(w,we);ne(n.TEXTURE_CUBE_MAP,w);let Re;if(Le){V&&Te&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ke,bt,we.width,we.height);for(let xe=0;xe<6;xe++){Re=Ae[xe].mipmaps;for(let We=0;We<Re.length;We++){let ot=Re[We];w.format!==$n?st!==null?V?ce&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We,0,0,ot.width,ot.height,st,ot.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We,bt,ot.width,ot.height,0,ot.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We,0,0,ot.width,ot.height,st,lt,ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We,bt,ot.width,ot.height,0,st,lt,ot.data)}}}else{if(Re=w.mipmaps,V&&Te){Re.length>0&&ke++;let xe=St(Ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ke,bt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Oe){V?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ae[xe].width,Ae[xe].height,st,lt,Ae[xe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,bt,Ae[xe].width,Ae[xe].height,0,st,lt,Ae[xe].data);for(let We=0;We<Re.length;We++){let tn=Re[We].image[xe].image;V?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We+1,0,0,tn.width,tn.height,st,lt,tn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We+1,bt,tn.width,tn.height,0,st,lt,tn.data)}}else{V?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,st,lt,Ae[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,bt,st,lt,Ae[xe]);for(let We=0;We<Re.length;We++){let ot=Re[We];V?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We+1,0,0,st,lt,ot.image[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We+1,bt,st,lt,ot.image[xe])}}}g(w)&&y(n.TEXTURE_CUBE_MAP),ve.__version=pe.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function se(I,w,K,ae,pe,ve){let be=r.convert(K.format,K.colorSpace),oe=r.convert(K.type),fe=b(K.internalFormat,be,oe,K.normalized,K.colorSpace),Le=i.get(w),Oe=i.get(K);if(Oe.__renderTarget=w,!Le.__hasExternalTextures){let Ae=Math.max(1,w.width>>ve),we=Math.max(1,w.height>>ve);pe===n.TEXTURE_3D||pe===n.TEXTURE_2D_ARRAY?t.texImage3D(pe,ve,fe,Ae,we,w.depth,0,be,oe,null):t.texImage2D(pe,ve,fe,Ae,we,0,be,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),et(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,pe,Oe.__webglTexture,0,tt(w)):(pe===n.TEXTURE_2D||pe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ae,pe,Oe.__webglTexture,ve),t.bindFramebuffer(n.FRAMEBUFFER,null)}function T(I,w,K){if(n.bindRenderbuffer(n.RENDERBUFFER,I),w.depthBuffer){let ae=w.depthTexture,pe=ae&&ae.isDepthTexture?ae.type:null,ve=A(w.stencilBuffer,pe),be=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;et(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,tt(w),ve,w.width,w.height):K?n.renderbufferStorageMultisample(n.RENDERBUFFER,tt(w),ve,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,ve,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,I)}else{let ae=w.textures;for(let pe=0;pe<ae.length;pe++){let ve=ae[pe],be=r.convert(ve.format,ve.colorSpace),oe=r.convert(ve.type),fe=b(ve.internalFormat,be,oe,ve.normalized,ve.colorSpace);et(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,tt(w),fe,w.width,w.height):K?n.renderbufferStorageMultisample(n.RENDERBUFFER,tt(w),fe,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,fe,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function X(I,w,K){let ae=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let pe=i.get(w.depthTexture);if(pe.__renderTarget=w,(!pe.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ae){if(pe.__webglInit===void 0&&(pe.__webglInit=!0,w.depthTexture.addEventListener("dispose",D)),pe.__webglTexture===void 0){pe.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,pe.__webglTexture),ne(n.TEXTURE_CUBE_MAP,w.depthTexture);let Le=r.convert(w.depthTexture.format),Oe=r.convert(w.depthTexture.type),Ae;w.depthTexture.format===fi?Ae=n.DEPTH_COMPONENT24:w.depthTexture.format===hs&&(Ae=n.DEPTH24_STENCIL8);for(let we=0;we<6;we++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Ae,w.width,w.height,0,Le,Oe,null)}}else le(w.depthTexture,0);let ve=pe.__webglTexture,be=tt(w),oe=ae?n.TEXTURE_CUBE_MAP_POSITIVE_X+K:n.TEXTURE_2D,fe=w.depthTexture.format===hs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(w.depthTexture.format===fi)et(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,fe,oe,ve,0,be):n.framebufferTexture2D(n.FRAMEBUFFER,fe,oe,ve,0);else if(w.depthTexture.format===hs)et(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,fe,oe,ve,0,be):n.framebufferTexture2D(n.FRAMEBUFFER,fe,oe,ve,0);else throw new Error("Unknown depthTexture format")}function q(I){let w=i.get(I),K=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){let ae=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ae){let pe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ae.removeEventListener("dispose",pe)};ae.addEventListener("dispose",pe),w.__depthDisposeCallback=pe}w.__boundDepthTexture=ae}if(I.depthTexture&&!w.__autoAllocateDepthBuffer)if(K)for(let ae=0;ae<6;ae++)X(w.__webglFramebuffer[ae],I,ae);else{let ae=I.texture.mipmaps;ae&&ae.length>0?X(w.__webglFramebuffer[0],I,0):X(w.__webglFramebuffer,I,0)}else if(K){w.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[ae]),w.__webglDepthbuffer[ae]===void 0)w.__webglDepthbuffer[ae]=n.createRenderbuffer(),T(w.__webglDepthbuffer[ae],I,!1);else{let pe=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=w.__webglDepthbuffer[ae];n.bindRenderbuffer(n.RENDERBUFFER,ve),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,ve)}}else{let ae=I.texture.mipmaps;if(ae&&ae.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),T(w.__webglDepthbuffer,I,!1);else{let pe=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ve),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,ve)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function re(I,w,K){let ae=i.get(I);w!==void 0&&se(ae.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),K!==void 0&&q(I)}function Q(I){let w=I.texture,K=i.get(I),ae=i.get(w);I.addEventListener("dispose",_);let pe=I.textures,ve=I.isWebGLCubeRenderTarget===!0,be=pe.length>1;if(be||(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=w.version,o.memory.textures++),ve){K.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer[oe]=[];for(let fe=0;fe<w.mipmaps.length;fe++)K.__webglFramebuffer[oe][fe]=n.createFramebuffer()}else K.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer=[];for(let oe=0;oe<w.mipmaps.length;oe++)K.__webglFramebuffer[oe]=n.createFramebuffer()}else K.__webglFramebuffer=n.createFramebuffer();if(be)for(let oe=0,fe=pe.length;oe<fe;oe++){let Le=i.get(pe[oe]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),o.memory.textures++)}if(I.samples>0&&et(I)===!1){K.__webglMultisampledFramebuffer=n.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let oe=0;oe<pe.length;oe++){let fe=pe[oe];K.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,K.__webglColorRenderbuffer[oe]);let Le=r.convert(fe.format,fe.colorSpace),Oe=r.convert(fe.type),Ae=b(fe.internalFormat,Le,Oe,fe.normalized,fe.colorSpace,I.isXRRenderTarget===!0),we=tt(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,we,Ae,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,K.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(K.__webglDepthRenderbuffer=n.createRenderbuffer(),T(K.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ve){t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),ne(n.TEXTURE_CUBE_MAP,w);for(let oe=0;oe<6;oe++)if(w.mipmaps&&w.mipmaps.length>0)for(let fe=0;fe<w.mipmaps.length;fe++)se(K.__webglFramebuffer[oe][fe],I,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe);else se(K.__webglFramebuffer[oe],I,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);g(w)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let oe=0,fe=pe.length;oe<fe;oe++){let Le=pe[oe],Oe=i.get(Le),Ae=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ae=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ae,Oe.__webglTexture),ne(Ae,Le),se(K.__webglFramebuffer,I,Le,n.COLOR_ATTACHMENT0+oe,Ae,0),g(Le)&&y(Ae)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(oe=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,ae.__webglTexture),ne(oe,w),w.mipmaps&&w.mipmaps.length>0)for(let fe=0;fe<w.mipmaps.length;fe++)se(K.__webglFramebuffer[fe],I,w,n.COLOR_ATTACHMENT0,oe,fe);else se(K.__webglFramebuffer,I,w,n.COLOR_ATTACHMENT0,oe,0);g(w)&&y(oe),t.unbindTexture()}I.depthBuffer&&q(I)}function Ee(I){let w=I.textures;for(let K=0,ae=w.length;K<ae;K++){let pe=w[K];if(g(pe)){let ve=v(I),be=i.get(pe).__webglTexture;t.bindTexture(ve,be),y(ve),t.unbindTexture()}}}let ze=[],Ge=[];function z(I){if(I.samples>0){if(et(I)===!1){let w=I.textures,K=I.width,ae=I.height,pe=n.COLOR_BUFFER_BIT,ve=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(I),oe=w.length>1;if(oe)for(let Le=0;Le<w.length;Le++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);let fe=I.texture.mipmaps;fe&&fe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Le=0;Le<w.length;Le++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(pe|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(pe|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[Le]);let Oe=i.get(w[Le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Oe,0)}n.blitFramebuffer(0,0,K,ae,0,0,K,ae,pe,n.NEAREST),l===!0&&(ze.length=0,Ge.length=0,ze.push(n.COLOR_ATTACHMENT0+Le),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ze.push(ve),Ge.push(ve),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ge)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ze))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let Le=0;Le<w.length;Le++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,be.__webglColorRenderbuffer[Le]);let Oe=i.get(w[Le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,Oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let w=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function tt(I){return Math.min(s.maxSamples,I.samples)}function et(I){let w=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function yt(I){let w=o.render.frame;d.get(I)!==w&&(d.set(I,w),I.update())}function Me(I,w){let K=I.colorSpace,ae=I.format,pe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||K!==fo&&K!==Vi&&(gt.getTransfer(K)===Rt?(ae!==$n||pe!==Pn)&&Qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",K)),w}function St(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=W,this.getTextureUnits=Y,this.setTextureUnits=U,this.setTexture2D=le,this.setTexture2DArray=de,this.setTexture3D=ye,this.setTextureCube=Ce,this.rebindTextures=re,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=se,this.useMultisampledRTT=et,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Y1(n,e){function t(i,s=Vi){let r,o=gt.getTransfer(s);if(i===Pn)return n.UNSIGNED_BYTE;if(i===$l)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Kl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Cd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Sd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ad)return n.BYTE;if(i===Rd)return n.SHORT;if(i===Tr)return n.UNSIGNED_SHORT;if(i===Zl)return n.INT;if(i===ii)return n.UNSIGNED_INT;if(i===Zn)return n.FLOAT;if(i===Mi)return n.HALF_FLOAT;if(i===Id)return n.ALPHA;if(i===Pd)return n.RGB;if(i===$n)return n.RGBA;if(i===fi)return n.DEPTH_COMPONENT;if(i===hs)return n.DEPTH_STENCIL;if(i===Jl)return n.RED;if(i===jl)return n.RED_INTEGER;if(i===ds)return n.RG;if(i===Ql)return n.RG_INTEGER;if(i===ec)return n.RGBA_INTEGER;if(i===qo||i===Yo||i===Zo||i===$o)if(o===Rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===qo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===qo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Yo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===tc||i===nc||i===ic||i===sc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===tc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ic)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rc||i===oc||i===ac||i===lc||i===cc||i===Ko||i===hc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===rc||i===oc)return o===Rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ac)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===lc)return r.COMPRESSED_R11_EAC;if(i===cc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ko)return r.COMPRESSED_RG11_EAC;if(i===hc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===dc||i===fc||i===uc||i===pc||i===mc||i===gc||i===xc||i===yc||i===_c||i===vc||i===Mc||i===bc||i===wc||i===Tc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===dc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===uc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===mc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_c)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Tc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ec||i===Ac||i===Rc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ec)return o===Rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ac)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Rc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Cc||i===Sc||i===Jo||i===Ic)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Cc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Sc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Jo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ic)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Er?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Z1=`
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

}`,Jd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Eo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Bn({vertexShader:Z1,fragmentShader:$1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ge(new Yn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},jd=class extends ui{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,f=null,u=null,p=null,x=typeof XRWebGLBinding<"u",m=new Jd,g={},y=t.getContextAttributes(),v=null,b=null,A=[],E=[],D=new Pe,_=null,M=new bn;M.viewport=new Kt;let S=new bn;S.viewport=new Kt;let C=[M,S],N=new Gl,W=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let O=A[B];return O===void 0&&(O=new gr,A[B]=O),O.getTargetRaySpace()},this.getControllerGrip=function(B){let O=A[B];return O===void 0&&(O=new gr,A[B]=O),O.getGripSpace()},this.getHand=function(B){let O=A[B];return O===void 0&&(O=new gr,A[B]=O),O.getHandSpace()};function U(B){let O=E.indexOf(B.inputSource);if(O===-1)return;let k=A[O];k!==void 0&&(k.update(B.inputSource,B.frame,c||o),k.dispatchEvent({type:B.type,data:B.inputSource}))}function H(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",$);for(let B=0;B<A.length;B++){let O=E[B];O!==null&&(E[B]=null,A[B].disconnect(O))}W=null,Y=null,m.reset();for(let B in g)delete g[B];e.setRenderTarget(v),u=null,f=null,h=null,s=null,b=null,ne.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,i.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",H),s.addEventListener("inputsourceschange",$),y.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(D),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let k=null,P=null,L=null;y.depth&&(L=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,k=y.stencil?hs:fi,P=y.stencil?Er:ii);let se={colorFormat:t.RGBA8,depthFormat:L,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(se),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new Fn(f.textureWidth,f.textureHeight,{format:$n,type:Pn,depthTexture:new Hi(f.textureWidth,f.textureHeight,P,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let k={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,k),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),b=new Fn(u.framebufferWidth,u.framebufferHeight,{format:$n,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ne.setContext(s),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(B){for(let O=0;O<B.removed.length;O++){let k=B.removed[O],P=E.indexOf(k);P>=0&&(E[P]=null,A[P].disconnect(k))}for(let O=0;O<B.added.length;O++){let k=B.added[O],P=E.indexOf(k);if(P===-1){for(let se=0;se<A.length;se++)if(se>=E.length){E.push(k),P=se;break}else if(E[se]===null){E[se]=k,P=se;break}if(P===-1)break}let L=A[P];L&&L.connect(k)}}let le=new F,de=new F;function ye(B,O,k){le.setFromMatrixPosition(O.matrixWorld),de.setFromMatrixPosition(k.matrixWorld);let P=le.distanceTo(de),L=O.projectionMatrix.elements,se=k.projectionMatrix.elements,T=L[14]/(L[10]-1),X=L[14]/(L[10]+1),q=(L[9]+1)/L[5],re=(L[9]-1)/L[5],Q=(L[8]-1)/L[0],Ee=(se[8]+1)/se[0],ze=T*Q,Ge=T*Ee,z=P/(-Q+Ee),tt=z*-Q;if(O.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(tt),B.translateZ(z),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),L[10]===-1)B.projectionMatrix.copy(O.projectionMatrix),B.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{let et=T+z,yt=X+z,Me=ze-tt,St=Ge+(P-tt),I=q*X/yt*et,w=re*X/yt*et;B.projectionMatrix.makePerspective(Me,St,I,w,et,yt),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function Ce(B,O){O===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(O.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let O=B.near,k=B.far;m.texture!==null&&(m.depthNear>0&&(O=m.depthNear),m.depthFar>0&&(k=m.depthFar)),N.near=S.near=M.near=O,N.far=S.far=M.far=k,(W!==N.near||Y!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),W=N.near,Y=N.far),N.layers.mask=B.layers.mask|6,M.layers.mask=N.layers.mask&-5,S.layers.mask=N.layers.mask&-3;let P=B.parent,L=N.cameras;Ce(N,P);for(let se=0;se<L.length;se++)Ce(L[se],P);L.length===2?ye(N,M,S):N.projectionMatrix.copy(M.projectionMatrix),Ue(B,N,P)};function Ue(B,O,k){k===null?B.matrix.copy(O.matrixWorld):(B.matrix.copy(k.matrixWorld),B.matrix.invert(),B.matrix.multiply(O.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(O.projectionMatrix),B.projectionMatrixInverse.copy(O.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=gl*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(B){l=B,f!==null&&(f.fixedFoveation=B),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=B)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(B){return g[B]};let Ke=null;function ie(B,O){if(d=O.getViewerPose(c||o),p=O,d!==null){let k=d.views;u!==null&&(e.setRenderTargetFramebuffer(b,u.framebuffer),e.setRenderTarget(b));let P=!1;k.length!==N.cameras.length&&(N.cameras.length=0,P=!0);for(let X=0;X<k.length;X++){let q=k[X],re=null;if(u!==null)re=u.getViewport(q);else{let Ee=h.getViewSubImage(f,q);re=Ee.viewport,X===0&&(e.setRenderTargetTextures(b,Ee.colorTexture,Ee.depthStencilTexture),e.setRenderTarget(b))}let Q=C[X];Q===void 0&&(Q=new bn,Q.layers.enable(X),Q.viewport=new Kt,C[X]=Q),Q.matrix.fromArray(q.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(q.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(re.x,re.y,re.width,re.height),X===0&&(N.matrix.copy(Q.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),P===!0&&N.cameras.push(Q)}let L=s.enabledFeatures;if(L&&L.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=i.getBinding();let X=h.getDepthInformation(k[0]);X&&X.isValid&&X.texture&&m.init(X,s.renderState)}if(L&&L.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let X=0;X<k.length;X++){let q=k[X].camera;if(q){let re=g[q];re||(re=new Eo,g[q]=re);let Q=h.getCameraImage(q);re.sourceTexture=Q}}}}for(let k=0;k<A.length;k++){let P=E[k],L=A[k];P!==null&&L!==void 0&&L.update(P,O,c||o)}Ke&&Ke(B,O),O.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:O}),p=null}let ne=new Qm;ne.setAnimationLoop(ie),this.setAnimationLoop=function(B){Ke=B},this.dispose=function(){}}},K1=new xt,r0=new rt;r0.set(-1,0,0,0,1,0,0,0,1);function J1(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Nd(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,y,v,b){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),h(m,g)):g.isMeshPhongMaterial?(r(m,g),d(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&u(m,g,b)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,v):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===xn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===xn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=e.get(g),v=y.envMap,b=y.envMapRotation;v&&(m.envMap.value=v,m.envMapRotation.value.setFromMatrix4(K1.makeRotationFromEuler(b)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(r0),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,v){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=v*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function d(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function u(m,g,y){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===xn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function j1(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){let b=v.program;i.uniformBlockBinding(y,b)}function c(y,v){let b=s[y.id];b===void 0&&(p(y),b=d(y),s[y.id]=b,y.addEventListener("dispose",m));let A=v.program;i.updateUBOMapping(y,A);let E=e.render.frame;r[y.id]!==E&&(f(y),r[y.id]=E)}function d(y){let v=h();y.__bindingPointIndex=v;let b=n.createBuffer(),A=y.__size,E=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,A,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,b),b}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let v=s[y.id],b=y.uniforms,A=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let E=0,D=b.length;E<D;E++){let _=Array.isArray(b[E])?b[E]:[b[E]];for(let M=0,S=_.length;M<S;M++){let C=_[M];if(u(C,E,M,A)===!0){let N=C.__offset,W=Array.isArray(C.value)?C.value:[C.value],Y=0;for(let U=0;U<W.length;U++){let H=W[U],$=x(H);typeof H=="number"||typeof H=="boolean"?(C.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,N+Y,C.__data)):H.isMatrix3?(C.__data[0]=H.elements[0],C.__data[1]=H.elements[1],C.__data[2]=H.elements[2],C.__data[3]=0,C.__data[4]=H.elements[3],C.__data[5]=H.elements[4],C.__data[6]=H.elements[5],C.__data[7]=0,C.__data[8]=H.elements[6],C.__data[9]=H.elements[7],C.__data[10]=H.elements[8],C.__data[11]=0):ArrayBuffer.isView(H)?C.__data.set(new H.constructor(H.buffer,H.byteOffset,C.__data.length)):(H.toArray(C.__data,Y),Y+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(y,v,b,A){let E=y.value,D=v+"_"+b;if(A[D]===void 0)return typeof E=="number"||typeof E=="boolean"?A[D]=E:ArrayBuffer.isView(E)?A[D]=E.slice():A[D]=E.clone(),!0;{let _=A[D];if(typeof E=="number"||typeof E=="boolean"){if(_!==E)return A[D]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(_.equals(E)===!1)return _.copy(E),!0}}return!1}function p(y){let v=y.uniforms,b=0,A=16;for(let D=0,_=v.length;D<_;D++){let M=Array.isArray(v[D])?v[D]:[v[D]];for(let S=0,C=M.length;S<C;S++){let N=M[S],W=Array.isArray(N.value)?N.value:[N.value];for(let Y=0,U=W.length;Y<U;Y++){let H=W[Y],$=x(H),le=b%A,de=le%$.boundary,ye=le+de;b+=de,ye!==0&&A-ye<$.storage&&(b+=A-ye),N.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=$.storage}}}let E=b%A;return E>0&&(b+=A-E),y.__size=b,y.__cache={},this}function x(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?Qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):Qe("WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){let v=y.target;v.removeEventListener("dispose",m);let b=o.indexOf(v.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function g(){for(let y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}var Q1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),bi=null;function eb(){return bi===null&&(bi=new bo(Q1,16,16,ds,Mi),bi.name="DFG_LUT",bi.minFilter=gn,bi.magFilter=gn,bi.wrapS=hi,bi.wrapT=hi,bi.generateMipmaps=!1,bi.needsUpdate=!0),bi}var Oc=class{constructor(e={}){let{canvas:t=_m(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:u=Pn}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let x=u,m=new Set([ec,Ql,jl]),g=new Set([Pn,ii,Tr,Er,$l,Kl]),y=new Uint32Array(4),v=new Int32Array(4),b=new F,A=null,E=null,D=[],_=[],M=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,C=!1,N=null;this._outputColorSpace=on;let W=0,Y=0,U=null,H=-1,$=null,le=new Kt,de=new Kt,ye=null,Ce=new nt(0),Ue=0,Ke=t.width,ie=t.height,ne=1,B=null,O=null,k=new Kt(0,0,Ke,ie),P=new Kt(0,0,Ke,ie),L=!1,se=new yr,T=!1,X=!1,q=new xt,re=new F,Q=new Kt,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ze=!1;function Ge(){return U===null?ne:1}let z=i;function tt(R,Z){return t.getContext(R,Z)}try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"184"}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",ot,!1),z===null){let Z="webgl2";if(z=tt(Z,R),z===null)throw tt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw je("WebGLRenderer: "+R.message),R}let et,yt,Me,St,I,w,K,ae,pe,ve,be,oe,fe,Le,Oe,Ae,we,st,lt,bt,V,Te,ce;function ke(){et=new aM(z),et.init(),V=new Y1(z,et),yt=new Qv(z,et,e,V),Me=new X1(z,et),yt.reversedDepthBuffer&&f&&Me.buffers.depth.setReversed(!0),St=new hM(z),I=new P1,w=new q1(z,et,Me,I,yt,V,St),K=new oM(S),ae=new py(z),Te=new Jv(z,ae),pe=new lM(z,ae,St,Te),ve=new fM(z,pe,ae,Te,St),st=new dM(z,yt,w),Oe=new eM(I),be=new I1(S,K,et,yt,Te,Oe),oe=new J1(S,I),fe=new L1,Le=new B1(et),we=new Kv(S,K,Me,ve,p,l),Ae=new W1(S,ve,yt),ce=new j1(z,St,yt,Me),lt=new jv(z,et,St),bt=new cM(z,et,St),St.programs=be.programs,S.capabilities=yt,S.extensions=et,S.properties=I,S.renderLists=fe,S.shadowMap=Ae,S.state=Me,S.info=St}ke(),x!==Pn&&(M=new pM(x,t.width,t.height,s,r));let Re=new jd(S,z);this.xr=Re,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let R=et.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=et.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(R){R!==void 0&&(ne=R,this.setSize(Ke,ie,!1))},this.getSize=function(R){return R.set(Ke,ie)},this.setSize=function(R,Z,te=!0){if(Re.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ke=R,ie=Z,t.width=Math.floor(R*ne),t.height=Math.floor(Z*ne),te===!0&&(t.style.width=R+"px",t.style.height=Z+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(Ke*ne,ie*ne).floor()},this.setDrawingBufferSize=function(R,Z,te){Ke=R,ie=Z,ne=te,t.width=Math.floor(R*te),t.height=Math.floor(Z*te),this.setViewport(0,0,R,Z)},this.setEffects=function(R){if(x===Pn){je("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Z=0;Z<R.length;Z++)if(R[Z].isOutputPass===!0){Qe("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(le)},this.getViewport=function(R){return R.copy(k)},this.setViewport=function(R,Z,te,J){R.isVector4?k.set(R.x,R.y,R.z,R.w):k.set(R,Z,te,J),Me.viewport(le.copy(k).multiplyScalar(ne).round())},this.getScissor=function(R){return R.copy(P)},this.setScissor=function(R,Z,te,J){R.isVector4?P.set(R.x,R.y,R.z,R.w):P.set(R,Z,te,J),Me.scissor(de.copy(P).multiplyScalar(ne).round())},this.getScissorTest=function(){return L},this.setScissorTest=function(R){Me.setScissorTest(L=R)},this.setOpaqueSort=function(R){B=R},this.setTransparentSort=function(R){O=R},this.getClearColor=function(R){return R.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(R=!0,Z=!0,te=!0){let J=0;if(R){let j=!1;if(U!==null){let De=U.texture.format;j=m.has(De)}if(j){let De=U.texture.type,Be=g.has(De),Ie=we.getClearColor(),Ve=we.getClearAlpha(),qe=Ie.r,at=Ie.g,dt=Ie.b;Be?(y[0]=qe,y[1]=at,y[2]=dt,y[3]=Ve,z.clearBufferuiv(z.COLOR,0,y)):(v[0]=qe,v[1]=at,v[2]=dt,v[3]=Ve,z.clearBufferiv(z.COLOR,0,v))}else J|=z.COLOR_BUFFER_BIT}Z&&(J|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(J|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&z.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),N=R},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",ot,!1),we.dispose(),fe.dispose(),Le.dispose(),I.dispose(),K.dispose(),ve.dispose(),Te.dispose(),ce.dispose(),be.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",rf),Re.removeEventListener("sessionend",of),ms.stop()};function xe(R){R.preventDefault(),mo("WebGLRenderer: Context Lost."),C=!0}function We(){mo("WebGLRenderer: Context Restored."),C=!1;let R=St.autoReset,Z=Ae.enabled,te=Ae.autoUpdate,J=Ae.needsUpdate,j=Ae.type;ke(),St.autoReset=R,Ae.enabled=Z,Ae.autoUpdate=te,Ae.needsUpdate=J,Ae.type=j}function ot(R){je("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function tn(R){let Z=R.target;Z.removeEventListener("dispose",tn),It(Z)}function It(R){Ti(R),I.remove(R)}function Ti(R){let Z=I.get(R).programs;Z!==void 0&&(Z.forEach(function(te){be.releaseProgram(te)}),R.isShaderMaterial&&be.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,te,J,j,De){Z===null&&(Z=Ee);let Be=j.isMesh&&j.matrixWorld.determinant()<0,Ie=R0(R,Z,te,J,j);Me.setMaterial(J,Be);let Ve=te.index,qe=1;if(J.wireframe===!0){if(Ve=pe.getWireframeAttribute(te),Ve===void 0)return;qe=2}let at=te.drawRange,dt=te.attributes.position,Ze=at.start*qe,Pt=(at.start+at.count)*qe;De!==null&&(Ze=Math.max(Ze,De.start*qe),Pt=Math.min(Pt,(De.start+De.count)*qe)),Ve!==null?(Ze=Math.max(Ze,0),Pt=Math.min(Pt,Ve.count)):dt!=null&&(Ze=Math.max(Ze,0),Pt=Math.min(Pt,dt.count));let nn=Pt-Ze;if(nn<0||nn===1/0)return;Te.setup(j,J,Ie,te,Ve);let Jt,Ut=lt;if(Ve!==null&&(Jt=ae.get(Ve),Ut=bt,Ut.setIndex(Jt)),j.isMesh)J.wireframe===!0?(Me.setLineWidth(J.wireframeLinewidth*Ge()),Ut.setMode(z.LINES)):Ut.setMode(z.TRIANGLES);else if(j.isLine){let yn=J.linewidth;yn===void 0&&(yn=1),Me.setLineWidth(yn*Ge()),j.isLineSegments?Ut.setMode(z.LINES):j.isLineLoop?Ut.setMode(z.LINE_LOOP):Ut.setMode(z.LINE_STRIP)}else j.isPoints?Ut.setMode(z.POINTS):j.isSprite&&Ut.setMode(z.TRIANGLES);if(j.isBatchedMesh)if(et.get("WEBGL_multi_draw"))Ut.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let yn=j._multiDrawStarts,Fe=j._multiDrawCounts,Dn=j._multiDrawCount,vt=Ve?ae.get(Ve).bytesPerElement:1,Hn=I.get(J).currentProgram.getUniforms();for(let ri=0;ri<Dn;ri++)Hn.setValue(z,"_gl_DrawID",ri),Ut.render(yn[ri]/vt,Fe[ri])}else if(j.isInstancedMesh)Ut.renderInstances(Ze,nn,j.count);else if(te.isInstancedBufferGeometry){let yn=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Fe=Math.min(te.instanceCount,yn);Ut.renderInstances(Ze,nn,Fe)}else Ut.render(Ze,nn)};function si(R,Z,te){R.transparent===!0&&R.side===In&&R.forceSinglePass===!1?(R.side=xn,R.needsUpdate=!0,sa(R,Z,te),R.side=Fi,R.needsUpdate=!0,sa(R,Z,te),R.side=In):sa(R,Z,te)}this.compile=function(R,Z,te=null){te===null&&(te=R),E=Le.get(te),E.init(Z),_.push(E),te.traverseVisible(function(j){j.isLight&&j.layers.test(Z.layers)&&(E.pushLight(j),j.castShadow&&E.pushShadow(j))}),R!==te&&R.traverseVisible(function(j){j.isLight&&j.layers.test(Z.layers)&&(E.pushLight(j),j.castShadow&&E.pushShadow(j))}),E.setupLights();let J=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let De=j.material;if(De)if(Array.isArray(De))for(let Be=0;Be<De.length;Be++){let Ie=De[Be];si(Ie,te,j),J.add(Ie)}else si(De,te,j),J.add(De)}),E=_.pop(),J},this.compileAsync=function(R,Z,te=null){let J=this.compile(R,Z,te);return new Promise(j=>{function De(){if(J.forEach(function(Be){I.get(Be).currentProgram.isReady()&&J.delete(Be)}),J.size===0){j(R);return}setTimeout(De,10)}et.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Yc=null;function E0(R){Yc&&Yc(R)}function rf(){ms.stop()}function of(){ms.start()}let ms=new Qm;ms.setAnimationLoop(E0),typeof self<"u"&&ms.setContext(self),this.setAnimationLoop=function(R){Yc=R,Re.setAnimationLoop(R),R===null?ms.stop():ms.start()},Re.addEventListener("sessionstart",rf),Re.addEventListener("sessionend",of),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;N!==null&&N.renderStart(R,Z);let te=Re.enabled===!0&&Re.isPresenting===!0,J=M!==null&&(U===null||te)&&M.begin(S,U);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(Z),Z=Re.getCamera()),R.isScene===!0&&R.onBeforeRender(S,R,Z,U),E=Le.get(R,_.length),E.init(Z),E.state.textureUnits=w.getTextureUnits(),_.push(E),q.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),se.setFromProjectionMatrix(q,ti,Z.reversedDepth),X=this.localClippingEnabled,T=Oe.init(this.clippingPlanes,X),A=fe.get(R,D.length),A.init(),D.push(A),Re.enabled===!0&&Re.isPresenting===!0){let Be=S.xr.getDepthSensingMesh();Be!==null&&Zc(Be,Z,-1/0,S.sortObjects)}Zc(R,Z,0,S.sortObjects),A.finish(),S.sortObjects===!0&&A.sort(B,O),ze=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,ze&&we.addToRenderList(A,R),this.info.render.frame++,T===!0&&Oe.beginShadows();let j=E.state.shadowsArray;if(Ae.render(j,R,Z),T===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(J&&M.hasRenderPass())===!1){let Be=A.opaque,Ie=A.transmissive;if(E.setupLights(),Z.isArrayCamera){let Ve=Z.cameras;if(Ie.length>0)for(let qe=0,at=Ve.length;qe<at;qe++){let dt=Ve[qe];lf(Be,Ie,R,dt)}ze&&we.render(R);for(let qe=0,at=Ve.length;qe<at;qe++){let dt=Ve[qe];af(A,R,dt,dt.viewport)}}else Ie.length>0&&lf(Be,Ie,R,Z),ze&&we.render(R),af(A,R,Z)}U!==null&&Y===0&&(w.updateMultisampleRenderTarget(U),w.updateRenderTargetMipmap(U)),J&&M.end(S),R.isScene===!0&&R.onAfterRender(S,R,Z),Te.resetDefaultState(),H=-1,$=null,_.pop(),_.length>0?(E=_[_.length-1],w.setTextureUnits(E.state.textureUnits),T===!0&&Oe.setGlobalState(S.clippingPlanes,E.state.camera)):E=null,D.pop(),D.length>0?A=D[D.length-1]:A=null,N!==null&&N.renderEnd()};function Zc(R,Z,te,J){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)te=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLightProbeGrid)E.pushLightProbeGrid(R);else if(R.isLight)E.pushLight(R),R.castShadow&&E.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||se.intersectsSprite(R)){J&&Q.setFromMatrixPosition(R.matrixWorld).applyMatrix4(q);let Be=ve.update(R),Ie=R.material;Ie.visible&&A.push(R,Be,Ie,te,Q.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||se.intersectsObject(R))){let Be=ve.update(R),Ie=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Q.copy(R.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),Q.copy(Be.boundingSphere.center)),Q.applyMatrix4(R.matrixWorld).applyMatrix4(q)),Array.isArray(Ie)){let Ve=Be.groups;for(let qe=0,at=Ve.length;qe<at;qe++){let dt=Ve[qe],Ze=Ie[dt.materialIndex];Ze&&Ze.visible&&A.push(R,Be,Ze,te,Q.z,dt)}}else Ie.visible&&A.push(R,Be,Ie,te,Q.z,null)}}let De=R.children;for(let Be=0,Ie=De.length;Be<Ie;Be++)Zc(De[Be],Z,te,J)}function af(R,Z,te,J){let{opaque:j,transmissive:De,transparent:Be}=R;E.setupLightsView(te),T===!0&&Oe.setGlobalState(S.clippingPlanes,te),J&&Me.viewport(le.copy(J)),j.length>0&&ia(j,Z,te),De.length>0&&ia(De,Z,te),Be.length>0&&ia(Be,Z,te),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function lf(R,Z,te,J){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[J.id]===void 0){let Ze=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[J.id]=new Fn(1,1,{generateMipmaps:!0,type:Ze?Mi:Pn,minFilter:vi,samples:Math.max(4,yt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace})}let De=E.state.transmissionRenderTarget[J.id],Be=J.viewport||le;De.setSize(Be.z*S.transmissionResolutionScale,Be.w*S.transmissionResolutionScale);let Ie=S.getRenderTarget(),Ve=S.getActiveCubeFace(),qe=S.getActiveMipmapLevel();S.setRenderTarget(De),S.getClearColor(Ce),Ue=S.getClearAlpha(),Ue<1&&S.setClearColor(16777215,.5),S.clear(),ze&&we.render(te);let at=S.toneMapping;S.toneMapping=ni;let dt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),E.setupLightsView(J),T===!0&&Oe.setGlobalState(S.clippingPlanes,J),ia(R,te,J),w.updateMultisampleRenderTarget(De),w.updateRenderTargetMipmap(De),et.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Pt=0,nn=Z.length;Pt<nn;Pt++){let Jt=Z[Pt],{object:Ut,geometry:yn,material:Fe,group:Dn}=Jt;if(Fe.side===In&&Ut.layers.test(J.layers)){let vt=Fe.side;Fe.side=xn,Fe.needsUpdate=!0,cf(Ut,te,J,yn,Fe,Dn),Fe.side=vt,Fe.needsUpdate=!0,Ze=!0}}Ze===!0&&(w.updateMultisampleRenderTarget(De),w.updateRenderTargetMipmap(De))}S.setRenderTarget(Ie,Ve,qe),S.setClearColor(Ce,Ue),dt!==void 0&&(J.viewport=dt),S.toneMapping=at}function ia(R,Z,te){let J=Z.isScene===!0?Z.overrideMaterial:null;for(let j=0,De=R.length;j<De;j++){let Be=R[j],{object:Ie,geometry:Ve,group:qe}=Be,at=Be.material;at.allowOverride===!0&&J!==null&&(at=J),Ie.layers.test(te.layers)&&cf(Ie,Z,te,Ve,at,qe)}}function cf(R,Z,te,J,j,De){R.onBeforeRender(S,Z,te,J,j,De),R.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(S,Z,te,J,R,De),j.transparent===!0&&j.side===In&&j.forceSinglePass===!1?(j.side=xn,j.needsUpdate=!0,S.renderBufferDirect(te,Z,J,j,R,De),j.side=Fi,j.needsUpdate=!0,S.renderBufferDirect(te,Z,J,j,R,De),j.side=In):S.renderBufferDirect(te,Z,J,j,R,De),R.onAfterRender(S,Z,te,J,j,De)}function sa(R,Z,te){Z.isScene!==!0&&(Z=Ee);let J=I.get(R),j=E.state.lights,De=E.state.shadowsArray,Be=j.state.version,Ie=be.getParameters(R,j.state,De,Z,te,E.state.lightProbeGridArray),Ve=be.getProgramCacheKey(Ie),qe=J.programs;J.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Z.environment:null,J.fog=Z.fog;let at=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;J.envMap=K.get(R.envMap||J.environment,at),J.envMapRotation=J.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,qe===void 0&&(R.addEventListener("dispose",tn),qe=new Map,J.programs=qe);let dt=qe.get(Ve);if(dt!==void 0){if(J.currentProgram===dt&&J.lightsStateVersion===Be)return df(R,Ie),dt}else Ie.uniforms=be.getUniforms(R),N!==null&&R.isNodeMaterial&&N.build(R,te,Ie),R.onBeforeCompile(Ie,S),dt=be.acquireProgram(Ie,Ve),qe.set(Ve,dt),J.uniforms=Ie.uniforms;let Ze=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ze.clippingPlanes=Oe.uniform),df(R,Ie),J.needsLights=S0(R),J.lightsStateVersion=Be,J.needsLights&&(Ze.ambientLightColor.value=j.state.ambient,Ze.lightProbe.value=j.state.probe,Ze.directionalLights.value=j.state.directional,Ze.directionalLightShadows.value=j.state.directionalShadow,Ze.spotLights.value=j.state.spot,Ze.spotLightShadows.value=j.state.spotShadow,Ze.rectAreaLights.value=j.state.rectArea,Ze.ltc_1.value=j.state.rectAreaLTC1,Ze.ltc_2.value=j.state.rectAreaLTC2,Ze.pointLights.value=j.state.point,Ze.pointLightShadows.value=j.state.pointShadow,Ze.hemisphereLights.value=j.state.hemi,Ze.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ze.spotLightMatrix.value=j.state.spotLightMatrix,Ze.spotLightMap.value=j.state.spotLightMap,Ze.pointShadowMatrix.value=j.state.pointShadowMatrix),J.lightProbeGrid=E.state.lightProbeGridArray.length>0,J.currentProgram=dt,J.uniformsList=null,dt}function hf(R){if(R.uniformsList===null){let Z=R.currentProgram.getUniforms();R.uniformsList=Rr.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function df(R,Z){let te=I.get(R);te.outputColorSpace=Z.outputColorSpace,te.batching=Z.batching,te.batchingColor=Z.batchingColor,te.instancing=Z.instancing,te.instancingColor=Z.instancingColor,te.instancingMorph=Z.instancingMorph,te.skinning=Z.skinning,te.morphTargets=Z.morphTargets,te.morphNormals=Z.morphNormals,te.morphColors=Z.morphColors,te.morphTargetsCount=Z.morphTargetsCount,te.numClippingPlanes=Z.numClippingPlanes,te.numIntersection=Z.numClipIntersection,te.vertexAlphas=Z.vertexAlphas,te.vertexTangents=Z.vertexTangents,te.toneMapping=Z.toneMapping}function A0(R,Z){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;b.setFromMatrixPosition(Z.matrixWorld);for(let te=0,J=R.length;te<J;te++){let j=R[te];if(j.texture!==null&&j.boundingBox.containsPoint(b))return j}return null}function R0(R,Z,te,J,j){Z.isScene!==!0&&(Z=Ee),w.resetTextureUnits();let De=Z.fog,Be=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?Z.environment:null,Ie=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:gt.workingColorSpace,Ve=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,qe=K.get(J.envMap||Be,Ve),at=J.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,dt=!!te.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ze=!!te.morphAttributes.position,Pt=!!te.morphAttributes.normal,nn=!!te.morphAttributes.color,Jt=ni;J.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Jt=S.toneMapping);let Ut=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,yn=Ut!==void 0?Ut.length:0,Fe=I.get(J),Dn=E.state.lights;if(T===!0&&(X===!0||R!==$)){let Bt=R===$&&J.id===H;Oe.setState(J,R,Bt)}let vt=!1;J.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Dn.state.version||Fe.outputColorSpace!==Ie||j.isBatchedMesh&&Fe.batching===!1||!j.isBatchedMesh&&Fe.batching===!0||j.isBatchedMesh&&Fe.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Fe.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Fe.instancing===!1||!j.isInstancedMesh&&Fe.instancing===!0||j.isSkinnedMesh&&Fe.skinning===!1||!j.isSkinnedMesh&&Fe.skinning===!0||j.isInstancedMesh&&Fe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Fe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Fe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Fe.instancingMorph===!1&&j.morphTexture!==null||Fe.envMap!==qe||J.fog===!0&&Fe.fog!==De||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Oe.numPlanes||Fe.numIntersection!==Oe.numIntersection)||Fe.vertexAlphas!==at||Fe.vertexTangents!==dt||Fe.morphTargets!==Ze||Fe.morphNormals!==Pt||Fe.morphColors!==nn||Fe.toneMapping!==Jt||Fe.morphTargetsCount!==yn||!!Fe.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,Fe.__version=J.version);let Hn=Fe.currentProgram;vt===!0&&(Hn=sa(J,Z,j),N&&J.isNodeMaterial&&N.onUpdateProgram(J,Hn,Fe));let ri=!1,Gi=!1,Os=!1,kt=Hn.getUniforms(),sn=Fe.uniforms;if(Me.useProgram(Hn.program)&&(ri=!0,Gi=!0,Os=!0),J.id!==H&&(H=J.id,Gi=!0),Fe.needsLights){let Bt=A0(E.state.lightProbeGridArray,j);Fe.lightProbeGrid!==Bt&&(Fe.lightProbeGrid=Bt,Gi=!0)}if(ri||$!==R){Me.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),kt.setValue(z,"projectionMatrix",R.projectionMatrix),kt.setValue(z,"viewMatrix",R.matrixWorldInverse);let Xi=kt.map.cameraPosition;Xi!==void 0&&Xi.setValue(z,re.setFromMatrixPosition(R.matrixWorld)),yt.logarithmicDepthBuffer&&kt.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&kt.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),$!==R&&($=R,Gi=!0,Os=!0)}if(Fe.needsLights&&(Dn.state.directionalShadowMap.length>0&&kt.setValue(z,"directionalShadowMap",Dn.state.directionalShadowMap,w),Dn.state.spotShadowMap.length>0&&kt.setValue(z,"spotShadowMap",Dn.state.spotShadowMap,w),Dn.state.pointShadowMap.length>0&&kt.setValue(z,"pointShadowMap",Dn.state.pointShadowMap,w)),j.isSkinnedMesh){kt.setOptional(z,j,"bindMatrix"),kt.setOptional(z,j,"bindMatrixInverse");let Bt=j.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),kt.setValue(z,"boneTexture",Bt.boneTexture,w))}j.isBatchedMesh&&(kt.setOptional(z,j,"batchingTexture"),kt.setValue(z,"batchingTexture",j._matricesTexture,w),kt.setOptional(z,j,"batchingIdTexture"),kt.setValue(z,"batchingIdTexture",j._indirectTexture,w),kt.setOptional(z,j,"batchingColorTexture"),j._colorsTexture!==null&&kt.setValue(z,"batchingColorTexture",j._colorsTexture,w));let Wi=te.morphAttributes;if((Wi.position!==void 0||Wi.normal!==void 0||Wi.color!==void 0)&&st.update(j,te,Hn),(Gi||Fe.receiveShadow!==j.receiveShadow)&&(Fe.receiveShadow=j.receiveShadow,kt.setValue(z,"receiveShadow",j.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&Z.environment!==null&&(sn.envMapIntensity.value=Z.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=eb()),Gi){if(kt.setValue(z,"toneMappingExposure",S.toneMappingExposure),Fe.needsLights&&C0(sn,Os),De&&J.fog===!0&&oe.refreshFogUniforms(sn,De),oe.refreshMaterialUniforms(sn,J,ne,ie,E.state.transmissionRenderTarget[R.id]),Fe.needsLights&&Fe.lightProbeGrid){let Bt=Fe.lightProbeGrid;sn.probesSH.value=Bt.texture,sn.probesMin.value.copy(Bt.boundingBox.min),sn.probesMax.value.copy(Bt.boundingBox.max),sn.probesResolution.value.copy(Bt.resolution)}Rr.upload(z,hf(Fe),sn,w)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Rr.upload(z,hf(Fe),sn,w),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&kt.setValue(z,"center",j.center),kt.setValue(z,"modelViewMatrix",j.modelViewMatrix),kt.setValue(z,"normalMatrix",j.normalMatrix),kt.setValue(z,"modelMatrix",j.matrixWorld),J.uniformsGroups!==void 0){let Bt=J.uniformsGroups;for(let Xi=0,Bs=Bt.length;Xi<Bs;Xi++){let ff=Bt[Xi];ce.update(ff,Hn),ce.bind(ff,Hn)}}return Hn}function C0(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function S0(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(R,Z,te){let J=I.get(R);J.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),I.get(R.texture).__webglTexture=Z,I.get(R.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:te,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Z){let te=I.get(R);te.__webglFramebuffer=Z,te.__useDefaultFramebuffer=Z===void 0};let I0=z.createFramebuffer();this.setRenderTarget=function(R,Z=0,te=0){U=R,W=Z,Y=te;let J=null,j=!1,De=!1;if(R){let Ie=I.get(R);if(Ie.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(z.FRAMEBUFFER,Ie.__webglFramebuffer),le.copy(R.viewport),de.copy(R.scissor),ye=R.scissorTest,Me.viewport(le),Me.scissor(de),Me.setScissorTest(ye),H=-1;return}else if(Ie.__webglFramebuffer===void 0)w.setupRenderTarget(R);else if(Ie.__hasExternalTextures)w.rebindTextures(R,I.get(R.texture).__webglTexture,I.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let at=R.depthTexture;if(Ie.__boundDepthTexture!==at){if(at!==null&&I.has(at)&&(R.width!==at.image.width||R.height!==at.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(R)}}let Ve=R.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(De=!0);let qe=I.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(qe[Z])?J=qe[Z][te]:J=qe[Z],j=!0):R.samples>0&&w.useMultisampledRTT(R)===!1?J=I.get(R).__webglMultisampledFramebuffer:Array.isArray(qe)?J=qe[te]:J=qe,le.copy(R.viewport),de.copy(R.scissor),ye=R.scissorTest}else le.copy(k).multiplyScalar(ne).floor(),de.copy(P).multiplyScalar(ne).floor(),ye=L;if(te!==0&&(J=I0),Me.bindFramebuffer(z.FRAMEBUFFER,J)&&Me.drawBuffers(R,J),Me.viewport(le),Me.scissor(de),Me.setScissorTest(ye),j){let Ie=I.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ie.__webglTexture,te)}else if(De){let Ie=Z;for(let Ve=0;Ve<R.textures.length;Ve++){let qe=I.get(R.textures[Ve]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ve,qe.__webglTexture,te,Ie)}}else if(R!==null&&te!==0){let Ie=I.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ie.__webglTexture,te)}H=-1},this.readRenderTargetPixels=function(R,Z,te,J,j,De,Be,Ie=0){if(!(R&&R.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=I.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Be!==void 0&&(Ve=Ve[Be]),Ve){Me.bindFramebuffer(z.FRAMEBUFFER,Ve);try{let qe=R.textures[Ie],at=qe.format,dt=qe.type;if(R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ie),!yt.textureFormatReadable(at)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(dt)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-J&&te>=0&&te<=R.height-j&&z.readPixels(Z,te,J,j,V.convert(at),V.convert(dt),De)}finally{let qe=U!==null?I.get(U).__webglFramebuffer:null;Me.bindFramebuffer(z.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(R,Z,te,J,j,De,Be,Ie=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=I.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Be!==void 0&&(Ve=Ve[Be]),Ve)if(Z>=0&&Z<=R.width-J&&te>=0&&te<=R.height-j){Me.bindFramebuffer(z.FRAMEBUFFER,Ve);let qe=R.textures[Ie],at=qe.format,dt=qe.type;if(R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ie),!yt.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ze=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ze),z.bufferData(z.PIXEL_PACK_BUFFER,De.byteLength,z.STREAM_READ),z.readPixels(Z,te,J,j,V.convert(at),V.convert(dt),0);let Pt=U!==null?I.get(U).__webglFramebuffer:null;Me.bindFramebuffer(z.FRAMEBUFFER,Pt);let nn=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Mm(z,nn,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ze),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,De),z.deleteBuffer(Ze),z.deleteSync(nn),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Z=null,te=0){let J=Math.pow(2,-te),j=Math.floor(R.image.width*J),De=Math.floor(R.image.height*J),Be=Z!==null?Z.x:0,Ie=Z!==null?Z.y:0;w.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,te,0,0,Be,Ie,j,De),Me.unbindTexture()};let P0=z.createFramebuffer(),D0=z.createFramebuffer();this.copyTextureToTexture=function(R,Z,te=null,J=null,j=0,De=0){let Be,Ie,Ve,qe,at,dt,Ze,Pt,nn,Jt=R.isCompressedTexture?R.mipmaps[De]:R.image;if(te!==null)Be=te.max.x-te.min.x,Ie=te.max.y-te.min.y,Ve=te.isBox3?te.max.z-te.min.z:1,qe=te.min.x,at=te.min.y,dt=te.isBox3?te.min.z:0;else{let sn=Math.pow(2,-j);Be=Math.floor(Jt.width*sn),Ie=Math.floor(Jt.height*sn),R.isDataArrayTexture?Ve=Jt.depth:R.isData3DTexture?Ve=Math.floor(Jt.depth*sn):Ve=1,qe=0,at=0,dt=0}J!==null?(Ze=J.x,Pt=J.y,nn=J.z):(Ze=0,Pt=0,nn=0);let Ut=V.convert(Z.format),yn=V.convert(Z.type),Fe;Z.isData3DTexture?(w.setTexture3D(Z,0),Fe=z.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(w.setTexture2DArray(Z,0),Fe=z.TEXTURE_2D_ARRAY):(w.setTexture2D(Z,0),Fe=z.TEXTURE_2D),Me.activeTexture(z.TEXTURE0),Me.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Z.flipY),Me.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),Me.pixelStorei(z.UNPACK_ALIGNMENT,Z.unpackAlignment);let Dn=Me.getParameter(z.UNPACK_ROW_LENGTH),vt=Me.getParameter(z.UNPACK_IMAGE_HEIGHT),Hn=Me.getParameter(z.UNPACK_SKIP_PIXELS),ri=Me.getParameter(z.UNPACK_SKIP_ROWS),Gi=Me.getParameter(z.UNPACK_SKIP_IMAGES);Me.pixelStorei(z.UNPACK_ROW_LENGTH,Jt.width),Me.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Jt.height),Me.pixelStorei(z.UNPACK_SKIP_PIXELS,qe),Me.pixelStorei(z.UNPACK_SKIP_ROWS,at),Me.pixelStorei(z.UNPACK_SKIP_IMAGES,dt);let Os=R.isDataArrayTexture||R.isData3DTexture,kt=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isDepthTexture){let sn=I.get(R),Wi=I.get(Z),Bt=I.get(sn.__renderTarget),Xi=I.get(Wi.__renderTarget);Me.bindFramebuffer(z.READ_FRAMEBUFFER,Bt.__webglFramebuffer),Me.bindFramebuffer(z.DRAW_FRAMEBUFFER,Xi.__webglFramebuffer);for(let Bs=0;Bs<Ve;Bs++)Os&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,I.get(R).__webglTexture,j,dt+Bs),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,I.get(Z).__webglTexture,De,nn+Bs)),z.blitFramebuffer(qe,at,Be,Ie,Ze,Pt,Be,Ie,z.DEPTH_BUFFER_BIT,z.NEAREST);Me.bindFramebuffer(z.READ_FRAMEBUFFER,null),Me.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||I.has(R)){let sn=I.get(R),Wi=I.get(Z);Me.bindFramebuffer(z.READ_FRAMEBUFFER,P0),Me.bindFramebuffer(z.DRAW_FRAMEBUFFER,D0);for(let Bt=0;Bt<Ve;Bt++)Os?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,sn.__webglTexture,j,dt+Bt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,sn.__webglTexture,j),kt?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Wi.__webglTexture,De,nn+Bt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Wi.__webglTexture,De),j!==0?z.blitFramebuffer(qe,at,Be,Ie,Ze,Pt,Be,Ie,z.COLOR_BUFFER_BIT,z.NEAREST):kt?z.copyTexSubImage3D(Fe,De,Ze,Pt,nn+Bt,qe,at,Be,Ie):z.copyTexSubImage2D(Fe,De,Ze,Pt,qe,at,Be,Ie);Me.bindFramebuffer(z.READ_FRAMEBUFFER,null),Me.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else kt?R.isDataTexture||R.isData3DTexture?z.texSubImage3D(Fe,De,Ze,Pt,nn,Be,Ie,Ve,Ut,yn,Jt.data):Z.isCompressedArrayTexture?z.compressedTexSubImage3D(Fe,De,Ze,Pt,nn,Be,Ie,Ve,Ut,Jt.data):z.texSubImage3D(Fe,De,Ze,Pt,nn,Be,Ie,Ve,Ut,yn,Jt):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,De,Ze,Pt,Be,Ie,Ut,yn,Jt.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,De,Ze,Pt,Jt.width,Jt.height,Ut,Jt.data):z.texSubImage2D(z.TEXTURE_2D,De,Ze,Pt,Be,Ie,Ut,yn,Jt);Me.pixelStorei(z.UNPACK_ROW_LENGTH,Dn),Me.pixelStorei(z.UNPACK_IMAGE_HEIGHT,vt),Me.pixelStorei(z.UNPACK_SKIP_PIXELS,Hn),Me.pixelStorei(z.UNPACK_SKIP_ROWS,ri),Me.pixelStorei(z.UNPACK_SKIP_IMAGES,Gi),De===0&&Z.generateMipmaps&&z.generateMipmap(Fe),Me.unbindTexture()},this.initRenderTarget=function(R){I.get(R).__webglFramebuffer===void 0&&w.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?w.setTextureCube(R,0):R.isData3DTexture?w.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?w.setTexture2DArray(R,0):w.setTexture2D(R,0),Me.unbindTexture()},this.resetState=function(){W=0,Y=0,U=null,Me.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}};function o0(n,e){let t=new Oc({canvas:e.canvas,antialias:!0});t.setPixelRatio(Math.min(2,devicePixelRatio||1)),t.setSize(e.VW,e.VH),t.outputColorSpace=on;let i=new yo;i.background=new nt(861232);let s=new bn(50,e.VW/e.VH,10,6e4),r=new Bo(15397624,4867128,.95);i.add(r);let o=new Ho(16773852,1.35);o.position.set(-.45,1,-.3).multiplyScalar(1e3),i.add(o);let a=new an;i.add(a),o.target=a,i.fog=new xo(10466494,2600,9e3);let l={renderer:t,scene:i,camera:s,sun:o,hemi:r,cx:n.player.x,cy:n.player.y,dist:1150,elev:.96,shakeX:0,shakeY:0,orbit:0,zoomFactor:1,_ray:new Vo,_plane:new Xn(new F(0,1,0),0),_v3:new F,lightLevel(){return .5+.5*Math.cos(Math.PI*2*(n.t%Lr/Lr))},resize(){s.aspect=e.VW/e.VH,s.updateProjectionMatrix(),t.setSize(e.VW,e.VH)},update(c){let d=n.player,h=d.x,f=d.y,u=1500*l.zoomFactor,p=.96;if(e.godView){h=ue.w/2,f=ue.h/2,p=1.52;let _=Math.tan(s.fov/2*Math.PI/180),M=(ue.h/2+500)/_,S=(ue.w/2+500)/(_*s.aspect);u=Math.max(M,S)*1.02}else d.inCopter&&n.copter&&(u=(1850+Math.hypot(n.copter.vx,n.copter.vy)*.9)*l.zoomFactor);l._wasGod!==e.godView&&(l._wasGod=e.godView,l.cx=h,l.cy=f,l.dist=u,l.elev=p);let x=Math.min(1,c*(e.godView?6:5));l.cx=Nr(l.cx,h,x),l.cy=Nr(l.cy,f,x),l.dist=Nr(l.dist,u,Math.min(1,c*4)),l.elev=Nr(l.elev,p,Math.min(1,c*4)),n.shake>0?(l.shakeX=(Math.random()*2-1)*n.shake,l.shakeY=(Math.random()*2-1)*n.shake):(l.shakeX=0,l.shakeY=0);let m=l.cx+l.shakeX,g=l.cy+l.shakeY,y=Math.sin(l.elev)*l.dist,v=Math.cos(l.elev)*l.dist,b=e.godView?0:l.orbit;s.position.set(m+Math.sin(b)*v,y,g+Math.cos(b)*v),s.lookAt(m,0,g),a.position.set(m,0,g);let A=l.lightLevel(),E=Math.sin((1-A)*Math.PI);o.intensity=1+A*.45,o.color.setHSL(.105-E*.045,.52+E*.25,.62-E*.06),r.intensity=.78+A*.25;let D=n.t%Lr/Lr*Math.PI*2;o.position.set(m+Math.cos(D)*1400,900+A*600,g+Math.sin(D)*1400-400),i.fog.near=l.dist*2.2,i.fog.far=l.dist*8,l._viewR=l.dist*1.9},render(){t.render(i,s)},screenToWorld(c,d){let h=new Pe(c/e.VW*2-1,-(d/e.VH)*2+1);l._ray.setFromCamera(h,s);let f=new F;return l._ray.ray.intersectPlane(l._plane,f),f?{x:f.x,y:f.z}:{x:l.cx,y:l.cy}},worldToScreen(c,d,h=0){return l._v3.set(c,h,d).project(s),{x:(l._v3.x+1)/2*e.VW,y:(-l._v3.y+1)/2*e.VH,behind:l._v3.z>1}},inView(c,d,h=0){let f=c-l.cx,u=d-l.cy;return f*f+u*u<(l._viewR+h)*(l._viewR+h)},viewRect(c=0){let d=l._viewR+c;return{x0:l.cx-d,y0:l.cy-d,x1:l.cx+d,y1:l.cy+d}},get zoom(){return 900/l.dist}};return l.update(.1),l}var Hc=.45;function l0(n,e){let t=Math.round(ue.w*Hc),i=Math.round(ue.h*Hc),s=document.createElement("canvas");s.width=t,s.height=i;let r=s.getContext("2d");r.save(),r.scale(Hc,Hc),tb(n,r),r.restore();let o=new qn(s);o.colorSpace=on,o.anisotropy=8,o.minFilter=vi;let a=new ge(new Yn(ue.w,ue.h),new Sn({map:o,transparent:!0}));a.rotation.x=-Math.PI/2,a.position.set(ue.w/2,0,ue.h/2),a.renderOrder=-1,e.add(a);let l=new ge(new Yn(ue.w*6,ue.h*6),new Sn({color:1060924}));l.rotation.x=-Math.PI/2,l.position.set(ue.w/2,-3,ue.h/2),e.add(l);let c=document.createElement("canvas");c.width=256,c.height=256;let d=c.getContext("2d");for(let A=0;A<260;A++){let E=Math.random()*256,D=Math.random()*256;d.fillStyle=`rgba(200,235,245,${.25+Math.random()*.5})`,d.fillRect(E,D,1.6+Math.random()*2.4,1.2)}let h=new qn(c);h.wrapS=h.wrapT=di,h.repeat.set(220,146);let f=new ge(new Yn(ue.w*6,ue.h*6),new Yt({map:h,transparent:!0,opacity:.5,depthWrite:!1,blending:wn}));f.rotation.x=-Math.PI/2,f.position.set(ue.w/2,-1.5,ue.h/2),f.renderOrder=-2,e.add(f);let u=h.clone();u.wrapS=u.wrapT=di,u.repeat.set(133,88);let p=new ge(new Yn(ue.w*6,ue.h*6),new Yt({map:u,transparent:!0,opacity:.3,depthWrite:!1,blending:wn}));p.rotation.x=-Math.PI/2,p.position.set(ue.w/2,-1.2,ue.h/2),p.renderOrder=-2,e.add(p);let x=[];for(let A of n.world.lakes){if(A.frozen)continue;let E=new vr;for(let C=0;C<=28;C++){let N=C/28*Math.PI*2,W=A.r*A.wob[C%28],Y=Math.cos(N)*W,U=-Math.sin(N)*W*.84;C?E.lineTo(Y,U):E.moveTo(Y,U)}let D=new ko(E),_=new ge(D,new Yt({color:3040376,transparent:!0,opacity:.45,depthWrite:!1}));_.rotation.x=-Math.PI/2,_.position.set(A.x,1.2,A.y),_.renderOrder=1,e.add(_);let M=h.clone();M.wrapS=M.wrapT=di,M.repeat.set(.045,.045);let S=new ge(D,new Yt({map:M,transparent:!0,opacity:.4,depthWrite:!1,blending:wn}));S.rotation.x=-Math.PI/2,S.position.set(A.x,1.5,A.y),S.renderOrder=2,e.add(S),x.push(M)}let m=document.createElement("canvas");m.width=4,m.height=256;let g=m.getContext("2d"),y=g.createLinearGradient(0,0,0,256);y.addColorStop(0,"#5d9bd3"),y.addColorStop(.62,"#9cc3dd"),y.addColorStop(.78,"#cfddd8"),y.addColorStop(1,"#dfe5da"),g.fillStyle=y,g.fillRect(0,0,4,256);let v=new qn(m);v.colorSpace=on;let b=new ge(new Ds(34e3,18,12,0,Math.PI*2,0,Math.PI/2),new Yt({map:v,side:xn,fog:!1}));return b.position.set(ue.w/2,-40,ue.h/2),e.add(b),e.background=null,{tex:o,sync(A,E,D){let _=f.material.map,M=p.material.map;_.offset.x+=A*.0022,_.offset.y+=A*.0013,M.offset.x-=A*.0011,M.offset.y+=A*8e-4;for(let C of x)C.offset.x+=A*.006,C.offset.y+=A*.0035;b.position.set(D.cx,-40,D.cy);let S=D.lightLevel();b.material.color.setHSL(.58,.18,.62+S*.38)}}}function a0(n,e,t){let i=(e+n.world.biomeRidge(t))/ue.w,s=.05,r=Ai((i-(1/3-s))/(2*s)),o=Ai((i-(2/3-s))/(2*s)),a=(f,u,p)=>[f[0]+(u[0]-f[0])*p,f[1]+(u[1]-f[1])*p,f[2]+(u[2]-f[2])*p],l=[181,154,102],c=[74,92,48],d=[185,199,209],h=a(l,c,r);return h=a(h,d,o),h}function Qd(n,e){e.beginPath(),n.world.islandPath.forEach((t,i)=>i?e.lineTo(t.x,t.y):e.moveTo(t.x,t.y)),e.closePath()}function tb(n,e){let t=ue.w,i=ue.h;e.lineJoin="round",e.strokeStyle="rgba(64,124,134,0.45)",e.lineWidth=64,Qd(n,e),e.stroke(),e.strokeStyle="rgba(90,150,158,0.30)",e.lineWidth=26,Qd(n,e),e.stroke(),e.save(),Qd(n,e),e.clip();let s=32;for(let h=0;h<i;h+=s)for(let f=0;f<t;f+=s){if(n.world.landFactor(f+s/2,h+s/2)<=-.25)continue;let[p,x,m]=a0(n,f+s/2,h+s/2),g=Zi(f/s|0,h/s|0),y=Zi(f/96|0,h/96|0),v=.88+g*.14+(y-.5)*.12-h/i*.06;p*=v,x*=v,m*=v,e.fillStyle=`rgb(${p|0},${x|0},${m|0})`,e.fillRect(f-1,h-1,s+2,s+2)}e.lineCap="round";let r=n.world.islandPath;for(let h=0;h<3;h++){let f=h===0?96:h===1?30:7;for(let u=0;u<r.length;u++){let p=r[u],x=r[(u+1)%r.length],m=n.world.biomeAt((p.x+x.x)/2,(p.y+x.y)/2)==="winter";e.strokeStyle=h===0?m?"rgba(214,227,235,0.95)":"rgba(186,166,120,0.95)":h===1?m?"rgba(168,190,204,0.9)":"rgba(146,128,92,0.9)":"rgba(240,248,252,0.55)",e.lineWidth=f,e.beginPath(),e.moveTo(p.x,p.y),e.lineTo(x.x,x.y),e.stroke()}}for(let h of n.world.lakes){e.save(),e.translate(h.x,h.y);let f=()=>{e.beginPath();for(let p=0;p<=28;p++){let x=p/28*Math.PI*2,m=h.r*h.wob[p%28],g=Math.cos(x)*m,y=Math.sin(x)*m*.84;p?e.lineTo(g,y):e.moveTo(g,y)}e.closePath()};e.save(),e.scale(1.06,1.06),f(),e.fillStyle=h.frozen?"rgba(238,246,251,.95)":"rgba(96,118,66,.7)",e.fill(),e.restore(),f();let u=e.createRadialGradient(0,-.3*h.r,h.r*.1,0,0,h.r);h.frozen?(u.addColorStop(0,"#dfeaf2"),u.addColorStop(1,"#96b2c8")):(u.addColorStop(0,"#33687c"),u.addColorStop(1,"#0c2531")),e.fillStyle=u,e.fill(),e.restore()}for(let h of n.world.monuments){let f=e.createRadialGradient(h.x,h.y,h.r*.2,h.x,h.y,h.r);f.addColorStop(0,"rgba(110,106,95,.5)"),f.addColorStop(.8,"rgba(98,94,84,.32)"),f.addColorStop(1,"rgba(90,86,76,0)"),e.fillStyle=f,e.beginPath(),e.arc(h.x,h.y,h.r,0,7),e.fill()}e.lineCap="round",e.lineJoin="round";let o=[];for(let h of n.world.roads){let f=null;for(let u=0;u<h.pts.length;u++)h.fade[u]>.05?(f||(f={rd:h,pts:[]}),f.pts.push(h.pts[u])):f&&(f.pts.length>1&&o.push(f),f=null);f&&f.pts.length>1&&o.push(f)}let a=(h,f)=>{let u=[];for(let p=0;p<h.length-1;p++){let x=h[p],m=h[p+1],g=Math.hypot(m.x-x.x,m.y-x.y),y=Math.max(1,Math.ceil(g/f));for(let v=0;v<y;v++)u.push({x:x.x+(m.x-x.x)*(v/y),y:x.y+(m.y-x.y)*(v/y)})}return u.push(h[h.length-1]),u},l=(h,f,u,p,x)=>{e.fillStyle=f,e.globalAlpha=x;let m=a(h.pts,u*.55);for(let g=0;g<m.length;g++){let y=m[g],v=Zi(y.x*.13|0,y.y*.13|0),b=Zi(y.x*.31|0,y.y*.07|0),A=u*(.86+v*.34),E=(b-.5)*p,D=(v-.5)*p;e.beginPath(),e.arc(y.x+E,y.y+D,A,0,7),e.fill()}e.globalAlpha=1};for(let h of o)l(h,"#564a31",h.rd.w*.62,9,.85);for(let h of o)l(h,"#6c5d3b",h.rd.w*.46,6,1);for(let h of o)l(h,"#75653f",h.rd.w*.3,8,.5);for(let h of o){e.fillStyle="#5d5034";let f=a(h.pts,34);for(let u=0;u<f.length;u++){let p=f[u],x=Zi(p.x*.21|0,p.y*.17|0);if(x<.45)continue;let m=f[Math.max(0,u-1)],g=f[Math.min(f.length-1,u+1)],y=Math.atan2(g.y-m.y,g.x-m.x)+Math.PI/2,v=x>.72?1:-1,b=h.rd.w*.58+x*53%1*14;e.globalAlpha=.4,e.beginPath(),e.arc(p.x+Math.cos(y)*b*v,p.y+Math.sin(y)*b*v,2.5+x*31%1*5,0,7),e.fill()}e.globalAlpha=1}e.globalAlpha=.3;for(let h of o)e.strokeStyle="#544731",e.lineWidth=4,e.beginPath(),h.pts.forEach((f,u)=>u?e.lineTo(f.x,f.y):e.moveTo(f.x,f.y)),e.stroke();e.globalAlpha=1;for(let h of o){let f=a(h.pts,90);e.fillStyle="rgba(58,48,30,0.5)";for(let u of f){let p=Zi(u.x*.07|0,u.y*.23|0);p>.82&&(e.beginPath(),e.ellipse(u.x+(p*91%1-.5)*h.rd.w*.5,u.y+(p*47%1-.5)*h.rd.w*.5,4+p*5,3+p*3,p*6,0,7),e.fill())}}let c=11;for(let h of n.world.crossings){let f=Math.cos(h.railAng),u=Math.sin(h.railAng);e.save(),e.translate(h.x,h.y),e.rotate(h.railAng);let p=e.createRadialGradient(0,0,10,0,0,64);p.addColorStop(0,"rgba(116,104,78,0.95)"),p.addColorStop(.7,"rgba(108,96,72,0.7)"),p.addColorStop(1,"rgba(100,90,68,0)"),e.fillStyle=p,e.beginPath(),e.ellipse(0,0,64,50,0,0,7),e.fill(),e.fillStyle="#7b6a45";for(let x of[-c-7,0,c+7])e.fillRect(-34,x-3.4,68,6.8);e.strokeStyle="rgba(60,50,34,0.5)",e.lineWidth=1.2;for(let x of[-c-7,0,c+7])e.strokeRect(-34,x-3.4,68,6.8);e.restore()}let d=(h,f)=>n.world.crossings.some(u=>(h-u.x)*(h-u.x)+(f-u.y)*(f-u.y)<2704);for(let h of n.world.rails){let f=()=>{e.beginPath(),h.pts.forEach((u,p)=>p?e.lineTo(u.x,u.y):e.moveTo(u.x,u.y))};f(),e.strokeStyle="rgba(87,77,64,0.85)",e.lineWidth=2*c+16,e.stroke(),f(),e.strokeStyle="rgba(107,95,78,0.85)",e.lineWidth=2*c+7,e.stroke(),e.strokeStyle="#3a2e1d",e.lineWidth=4.5;for(let u=0;u<h.pts.length-1;u++){let p=h.pts[u],x=h.pts[u+1],m=Math.hypot(x.x-p.x,x.y-p.y),g=Math.atan2(x.y-p.y,x.x-p.x),y=-Math.sin(g),v=Math.cos(g);for(let b=8;b<m;b+=24){let A=p.x+Math.cos(g)*b,E=p.y+Math.sin(g)*b;d(A,E)||(e.beginPath(),e.moveTo(A-y*(c+5),E-v*(c+5)),e.lineTo(A+y*(c+5),E+v*(c+5)),e.stroke())}}e.strokeStyle="#a4abb2",e.lineWidth=2.8;for(let u of[-c,c]){e.beginPath();for(let p=0;p<h.pts.length;p++){let x=h.pts[Math.max(0,p-1)],m=h.pts[Math.min(h.pts.length-1,p+1)],g=Math.atan2(m.y-x.y,m.x-x.x),y=-Math.sin(g),v=Math.cos(g),b=h.pts[p].x+y*u,A=h.pts[p].y+v*u;p?e.lineTo(b,A):e.moveTo(b,A)}e.stroke()}}for(let h=0;h<i;h+=96)for(let f=0;f<t;f+=96){if(!n.world.onLand(f,h)||n.world.lakeAt(f,h))continue;let u=Zi(f/96|0,h/96|0);if(u>.5)continue;let[p,x,m]=a0(n,f,h);e.fillStyle=`rgba(${p*.75|0},${x*.75|0},${m*.75|0},0.5)`,e.beginPath(),e.ellipse(f+u*80,h+u*7919%1*80,9+u*14,5+u*8,u*6,0,7),e.fill()}e.restore()}var ef=new Map;function _e(n,e={}){let t=n+JSON.stringify(e);return ef.has(t)||ef.set(t,new Sn({color:n,emissive:e.emissive||0,emissiveIntensity:e.emissiveIntensity??1,transparent:!!e.transparent,opacity:e.opacity??1,flatShading:!0})),ef.get(t)}var he={box:new rs(1,1,1),cyl:new Ss(1,1,1,8),cyl6:new Ss(1,1.18,1,6),cone:new Ao(1,1,7),ico:new Ps(1,0),sphere:new Ds(1,8,6),quad:new Yn(1,1)},Vc=null;function nb(){if(Vc)return Vc;let n=document.createElement("canvas");n.width=64,n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.4,"rgba(255,255,255,0.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),Vc=new qn(n),Vc}var Gc=null;function Xc(){if(Gc)return Gc;let n=document.createElement("canvas");n.width=128,n.height=128;let e=n.getContext("2d"),t=e.createRadialGradient(64,64,6,64,64,64);t.addColorStop(0,"rgba(255,255,255,0.5)"),t.addColorStop(.55,"rgba(255,255,255,0.42)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),e.globalCompositeOperation="destination-out";for(let i=0;i<5;i++){let s=i*1.26,r=58,o=e.createRadialGradient(64+Math.cos(s)*r,64+Math.sin(s)*r,2,64+Math.cos(s)*r,64+Math.sin(s)*r,26);o.addColorStop(0,"rgba(0,0,0,0.5)"),o.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=o,e.fillRect(0,0,128,128)}return Gc=new qn(n),Gc}var Wc=null;function nf(){if(Wc)return Wc;let n=document.createElement("canvas");n.width=64,n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,4,32,32,30);return t.addColorStop(0,"rgba(8,8,6,0.42)"),t.addColorStop(.7,"rgba(8,8,6,0.22)"),t.addColorStop(1,"rgba(8,8,6,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),Wc=new qn(n),Wc}function us(n,e=60){let t=new ss({map:nb(),color:n,transparent:!0,blending:wn,depthWrite:!1,depthTest:!1}),i=new Cs(t);return i.scale.set(e,e,1),i.renderOrder=4,i}var tf=null;function Fs(n=40){tf||(tf=new yi(.5,14));let e=new Yt({map:nf(),transparent:!0,depthWrite:!1}),t=new ge(tf,e);return t.rotation.x=-Math.PI/2,t.scale.set(n,n*.8,1),t}var ta={wood:6111006,stone:5659747,metal:3948871,armored:2567996},Sr=new Map;function c0(n){let e=document.createElement("canvas");e.width=128,e.height=128;let t=e.getContext("2d"),i=ib(n.length*1337+7);if(n==="wood"){t.fillStyle="#86602e",t.fillRect(0,0,128,128);for(let r=0;r<128;r+=21){t.fillStyle=`rgba(${70+i()*50|0},${48+i()*34|0},${20+i()*16|0},0.55)`,t.fillRect(r,0,21,128),t.fillStyle="rgba(42,28,12,0.85)",t.fillRect(r,0,2,128),t.strokeStyle="rgba(50,34,14,0.30)",t.lineWidth=1;for(let o=0;o<5;o++){let a=r+4+i()*14;t.beginPath(),t.moveTo(a,0),t.bezierCurveTo(a+i()*4-2,40,a+i()*4-2,88,a,128),t.stroke()}if(i()>.55){let o=r+6+i()*10,a=i()*128;t.fillStyle="rgba(40,26,10,0.6)",t.beginPath(),t.ellipse(o,a,3.2,4.5,.3,0,7),t.fill(),t.strokeStyle="rgba(120,90,48,0.5)",t.beginPath(),t.ellipse(o,a,5,6.5,.3,0,7),t.stroke()}}t.fillStyle="rgba(255,235,200,0.05)",t.fillRect(0,0,128,10)}else if(n==="stone"){t.fillStyle="#7b8289",t.fillRect(0,0,128,128);let r=26;for(let o=0;o<5;o++){let a=o%2*26;for(let l=-26;l<128;l+=52){let c=l+a;t.fillStyle=`rgba(${108+i()*34|0},${114+i()*32|0},${120+i()*30|0},0.7)`,t.fillRect(c+2,o*r+2,48,r-4),t.strokeStyle="rgba(60,66,72,0.35)",t.lineWidth=1;for(let d=0;d<3;d++){let h=c+6+i()*38,f=o*r+5+i()*(r-10);t.beginPath(),t.moveTo(h,f),t.lineTo(h+6+i()*8,f+i()*3-1.5),t.stroke()}}t.fillStyle="rgba(70,76,82,0.9)",t.fillRect(0,o*r-1.5,128,3)}}else if(n==="metal"){t.fillStyle="#5b6168",t.fillRect(0,0,128,128);for(let r=0;r<128;r+=43){t.fillStyle=`rgba(${80+i()*26|0},${88+i()*22|0},${96+i()*20|0},0.45)`,t.fillRect(r+2,0,39,128),t.fillStyle="rgba(34,38,43,0.9)",t.fillRect(r,0,2.4,128);for(let o=8;o<128;o+=18)t.fillStyle="rgba(28,32,36,0.9)",t.beginPath(),t.arc(r+6,o,1.9,0,7),t.fill(),t.fillStyle="rgba(200,210,218,0.5)",t.beginPath(),t.arc(r+5.4,o-.6,.8,0,7),t.fill()}t.strokeStyle="rgba(168,178,188,0.25)";for(let r=0;r<7;r++){let o=i()*128,a=i()*128;t.beginPath(),t.moveTo(o,a),t.lineTo(o+10+i()*22,a+i()*6-3),t.stroke()}for(let r=0;r<5;r++){let o=i()*128,a=i()*128,l=t.createRadialGradient(o,a,1,o,a,7+i()*10);l.addColorStop(0,"rgba(140,72,30,0.5)"),l.addColorStop(1,"rgba(140,72,30,0)"),t.fillStyle=l,t.fillRect(o-18,a-18,36,36)}}else{t.fillStyle="#3c4a5e",t.fillRect(0,0,128,128),t.strokeStyle="rgba(22,28,38,0.9)",t.lineWidth=6,t.strokeRect(3,3,122,122),t.strokeStyle="rgba(30,38,50,0.85)",t.lineWidth=10,t.beginPath(),t.moveTo(0,0),t.lineTo(128,128),t.stroke(),t.beginPath(),t.moveTo(128,0),t.lineTo(0,128),t.stroke(),t.strokeStyle="rgba(110,130,160,0.35)",t.lineWidth=2,t.beginPath(),t.moveTo(0,0),t.lineTo(128,128),t.stroke(),t.beginPath(),t.moveTo(128,0),t.lineTo(0,128),t.stroke(),t.fillStyle="rgba(190,205,225,0.6)";for(let[r,o]of[[12,12],[116,12],[12,116],[116,116],[64,14],[64,114],[14,64],[114,64]])t.beginPath(),t.arc(r,o,2.6,0,7),t.fill();t.fillStyle="rgba(255,255,255,0.05)",t.fillRect(0,0,128,22)}let s=new qn(e);return s.wrapS=s.wrapT=di,s.colorSpace=on,s}function ib(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function na(n){let e="w"+n;return Sr.has(e)||Sr.set(e,new Sn({map:c0(n),flatShading:!0})),Sr.get(e)}function h0(n){let e="f"+n;if(!Sr.has(e)){let t=new Sn({map:c0(n),flatShading:!0});t.color.setScalar(.72),Sr.set(e,t)}return Sr.get(e)}var d0=Math.PI*2;function f0(n,e){let t=n.resources.filter(P=>P.type==="tree"),i=n.resources.filter(P=>P.type==="stone"),s=n.resources.filter(P=>P.type==="metal"),r=new Lt(he.cyl,_e(6111008),t.length),o=new Lt(he.cone,_e(16777215),t.length),a=new Lt(he.cone,_e(16777215),t.length),l=new Lt(he.cone,_e(16777215),t.length),c=new Lt(he.ico,_e(16777215),t.length),d=new Lt(he.ico,_e(16777215),t.length),h=new Lt(he.cone,_e(15660281),t.length),f=new Lt(he.ico,_e(9278603),i.length),u=new Lt(he.ico,_e(8094328),i.length),p=new Lt(he.ico,_e(9271114),s.length),x=new Lt(he.ico,_e(14198864,{emissive:6965776}),s.length),m=new Lt(he.ico,_e(13145412,{emissive:5914124}),s.length);for(let P of[r,o,a,l,c,d,h,f,u,p,x,m])P.frustumCulled=!1,e.add(P);let g=new nt,y=new nt,v=[],b=[];t.forEach((P,L)=>{let se=.85+P.seed*7.3%1*.4,T=n.world.biomeAt(P.x,P.y)==="winter",X=!T&&P.seed*13.1%1<.42;v.push(T),b.push(X),g.setHex(T?3953968:3494175).multiplyScalar(se),y.setHex(T?5995082:5274160).multiplyScalar(se),o.setColorAt(L,g),a.setColorAt(L,y),l.setColorAt(L,y),g.setHex(4613672).multiplyScalar(se),y.setHex(6127926).multiplyScalar(se),c.setColorAt(L,g),d.setColorAt(L,y)});for(let P of[o,a,l,c,d])P.instanceColor&&(P.instanceColor.needsUpdate=!0);let A=new xt,E=0;function D(){let P=new F(.001,.001,.001);t.forEach((L,se)=>{let T=L.amount<=0?.001:.55+.45*(L.amount/L.max),X=(L.seed*13.7%1-.5)*.12,q=b[se];A.makeRotationZ(X).scale(new F(7*T,30*T,7*T)).setPosition(L.x,15*T,L.y),r.setMatrixAt(se,A),A.makeRotationY(L.seed).scale(q?P:new F(31*T,36*T,31*T)).setPosition(L.x,32*T,L.y),o.setMatrixAt(se,A),A.makeRotationY(L.seed*2).scale(q?P:new F(23*T,28*T,23*T)).setPosition(L.x+2,52*T,L.y-2),a.setMatrixAt(se,A),A.makeRotationY(L.seed*3).scale(q?P:new F(14*T,22*T,14*T)).setPosition(L.x+3,70*T,L.y-3),l.setMatrixAt(se,A),A.makeRotationY(L.seed).scale(q?new F(26*T,20*T,26*T):P).setPosition(L.x,42*T,L.y),c.setMatrixAt(se,A),A.makeRotationY(L.seed*2.3).scale(q?new F(17*T,14*T,17*T):P).setPosition(L.x+6*T,56*T,L.y-4*T),d.setMatrixAt(se,A);let re=v[se]?T:.001;A.makeScale(11*re,10*re,11*re).setPosition(L.x+3,80*re,L.y-3),h.setMatrixAt(se,A)}),i.forEach((L,se)=>{let T=L.amount<=0?.001:(.55+.45*(L.amount/L.max))*L.r;A.makeRotationY(L.seed).scale(new F(T,T*.75,T)).setPosition(L.x,T*.45,L.y),f.setMatrixAt(se,A),A.makeRotationY(L.seed*3).scale(new F(T*.45,T*.35,T*.45)).setPosition(L.x+T*.9,T*.2,L.y+T*.35),u.setMatrixAt(se,A)}),s.forEach((L,se)=>{let T=L.amount<=0?.001:(.55+.45*(L.amount/L.max))*L.r;A.makeRotationY(L.seed*2).scale(new F(T,T*.7,T)).setPosition(L.x,T*.42,L.y),p.setMatrixAt(se,A),A.makeScale(T*.4,T*.34,T*.4).setPosition(L.x+3,T*.85,L.y-2),x.setMatrixAt(se,A),A.makeScale(T*.26,T*.22,T*.26).setPosition(L.x-T*.5,T*.7,L.y+T*.3),m.setMatrixAt(se,A)});for(let L of[r,o,a,l,c,d,h,f,u,p,x,m])L.instanceMatrix.needsUpdate=!0}D();let _=new Lt(he.ico,_e(7896708),n.world.boulders.length||1);n.world.boulders.forEach((P,L)=>{A.makeRotationY(P.seed).scale(new F(P.r,P.r*.8,P.r)).setPosition(P.x,P.r*.45,P.y),_.setMatrixAt(L,A)}),_.frustumCulled=!1,e.add(_);let M=new Lt(he.ico,_e(8685967),n.world.rocks.length||1);n.world.rocks.forEach((P,L)=>{A.makeRotationY(P.seed).scale(new F(P.r,P.r*.6,P.r)).setPosition(P.x,P.r*.3,P.y),M.setMatrixAt(L,A)}),M.frustumCulled=!1,e.add(M);let S=new Lt(he.cyl,_e(7032616),n.world.palms.length||1),C=new Lt(he.cone,_e(5077552),n.world.palms.length||1);n.world.palms.forEach((P,L)=>{A.makeScale(3.4,44,3.4).setPosition(P.x,22,P.y),S.setMatrixAt(L,A),A.makeScale(26,14,26).setPosition(P.x,48,P.y),C.setMatrixAt(L,A)}),S.frustumCulled=!1,C.frustumCulled=!1,e.add(S,C);let N=n.world.flora.filter(P=>P.type==="cactus"),W=new Lt(he.cyl,_e(5143098),N.length||1);N.forEach((P,L)=>{A.makeScale(4.5,22,4.5).setPosition(P.x,11,P.y),W.setMatrixAt(L,A)}),W.frustumCulled=!1,e.add(W);let Y=n.world.flora.filter(P=>P.type==="fern"||P.type==="shrub"),U=new Lt(he.ico,_e(5599290),Y.length||1);Y.forEach((P,L)=>{A.makeScale(8,6,8).setPosition(P.x,4,P.y),U.setMatrixAt(L,A)}),U.frustumCulled=!1,e.add(U),sb(n,e);let H=n.barrels.map(P=>{let L;return P.crate?(L=new ge(he.box,_e(9069104)),L.scale.set(P.r*1.8,P.r*1.5,P.r*1.8),L.position.set(P.x,P.r*.75,P.y)):(L=new ge(he.cyl,_e(10768174)),L.scale.set(P.r*.9,P.r*1.7,P.r*.9),L.position.set(P.x,P.r*.85,P.y)),e.add(L),L}),$={quarryArm:null,gates:[],fadeables:[]};for(let P of n.world.monuments)ob(n,e,P,$);ab(n,e);for(let P of n.world.crossings){let L=new $e;L.position.set(P.x,0,P.y),L.rotation.y=-P.railAng;for(let se of[-1,1]){let T=new ge(he.box,_e(2500139));T.scale.set(5,20,5),T.position.set(0,10,se*38),L.add(T);let X=new ge(he.box,_e(12597802));X.scale.set(40,3.6,3.6),X.position.set(20,18,se*38);let q=new $e;q.position.set(0,18,se*38),X.position.set(20,0,0),q.add(X),L.add(q),$.gates.push({pivot:q,cr:P,side:se})}e.add(L)}let le=new $e;e.add(le);let de=new Map,ye=new Map,Ce=new Map,Ue=-1,Ke=new Set;function ie(P){if(P==="p1")return 8308816;let L=n.teams.find(se=>se.owner===P);return L?parseInt(L.col.slice(1),16):8947848}function ne(){if(n.nav.stamp!==Ue){Ue=n.nav.stamp,Ke.clear();for(let[P,L]of n.structures){Ke.add(P);let se=L.mat,T=ye.get(P);if(T&&T.sig!==se&&(le.remove(T.mesh),ye.delete(P),T=null),!T){let[X,q]=P.split(",").map(Number),re=new ge(he.box,h0(L.mat||"wood"));re.scale.set(62,5,62),re.position.set(X*64+64/2,2.5,q*64+64/2),le.add(re),ye.set(P,{mesh:re,sig:se})}}for(let[P,L]of ye)Ke.has(P)||(le.remove(L.mesh),ye.delete(P));Ke.clear();for(let[P,L]of n.walls){if(L.hp<=0)continue;Ke.add(P);let se=L.type+L.mat+(L.open?"o":"c"),T=de.get(P);if(T&&T.sig!==se&&(le.remove(T.mesh),de.delete(P),T=null),!T){let X=Ft(P,L),q=(X[0]+X[2])/2,re=(X[1]+X[3])/2,Q=X[0]===X[2],Ee=new $e;if(L.type==="door"&&L.open)for(let ze of[-26,26]){let Ge=new ge(he.box,_e(ta[L.mat]||ta.wood));Ge.scale.set(Q?11:12,40,Q?12:11),Ge.position.set(Q?0:ze,20,Q?ze:0),Ee.add(Ge)}else{let ze=na(L.mat||"wood"),Ge=new ge(he.box,ze),z=L.type==="door"?42:48;Ge.scale.set(Q?11:64,z,Q?64:11),Ge.position.y=z/2,L.type==="door"&&(Ge.material=ze.clone(),Ge.material.color.setScalar(.78)),Ee.add(Ge);let tt=new ge(he.box,_e(ta[L.mat]||ta.wood));if(tt.scale.set(Q?13:66,4,Q?66:13),tt.position.y=z+2,Ee.add(tt),L.type==="door"){let et=new ge(he.sphere,_e(14202462));et.scale.set(2.5,2.5,2.5),et.position.set(Q?7:10,22,Q?10:7),Ee.add(et)}}Ee.position.set(q,0,re),le.add(Ee),de.set(P,{mesh:Ee,sig:se})}}for(let[P,L]of de)Ke.has(P)||(le.remove(L.mesh),de.delete(P));Ke.clear();for(let[P,L]of n.deploys){Ke.add(P);let se=L.type+(L.tier||"")+L.owner,T=Ce.get(P);if(T&&T.sig!==se&&(le.remove(T.group),Ce.delete(P),T=null),!T){let[X,q]=P.split(",").map(Number),re=X*64+64/2,Q=q*64+64/2,Ee=new $e;Ee.position.set(re,0,Q);let ze={group:Ee,sig:se};if(L.type==="turret"){let Ge=L.tier===3?6277344:L.tier===2?14721594:10133928;for(let ae=0;ae<3;ae++){let pe=ae/3*d0+.5,ve=new ge(he.cyl,_e(3027760));ve.scale.set(2.2,18,2.2),ve.position.set(Math.cos(pe)*11,8,Math.sin(pe)*11),ve.rotation.z=-Math.cos(pe)*.5,ve.rotation.x=Math.sin(pe)*.5,Ee.add(ve);let be=new ge(he.box,_e(2303787));be.scale.set(6,2,6),be.position.set(Math.cos(pe)*16,1,Math.sin(pe)*16),Ee.add(be)}let z=new ge(he.cyl,_e(3817284));z.scale.set(3.6,16,3.6),z.position.y=16,Ee.add(z);let tt=new $e;tt.position.y=26;for(let ae of[-1,1]){let pe=new ge(he.box,_e(4870228));pe.scale.set(12,13,2.4),pe.position.set(0,2,ae*7.6),tt.add(pe)}let et=new ge(he.box,_e(5659994));et.scale.set(13,9.5,12),et.position.y=3,tt.add(et);let yt=new ge(he.cyl,_e(1316892));yt.scale.set(3.2,2,3.2),yt.rotation.z=Math.PI/2,yt.position.set(7.6,4.5,0),tt.add(yt);let Me=new ge(he.sphere,_e(13777960,{emissive:13777960,emissiveIntensity:.8}));Me.scale.set(1.5,1.5,1.5),Me.position.set(9.2,4.5,0),tt.add(Me);let St=L.tier===3?22:L.tier===2?17:13,I=new ge(he.box,_e(1974822));if(I.scale.set(St,3.8,3.4),I.position.set(St/2+5,-2.6,0),tt.add(I),L.tier===2){let ae=I.clone();ae.position.z=4.4,tt.add(ae)}let w=new ge(he.cyl,_e(Ge,{emissive:Ge,emissiveIntensity:.45}));w.scale.set(2,2.6,2),w.rotation.z=Math.PI/2,w.position.set(St+6,-2.6,0),tt.add(w);let K=new ge(he.cyl,_e(Ge,{emissive:Ge,emissiveIntensity:.3}));K.scale.set(4.1,2,4.1),K.position.y=21,Ee.add(K),Ee.add(tt),ze.pivot=tt}else if(L.type==="cupboard"){let Ge=new ge(he.box,_e(ie(L.owner)));Ge.scale.set(42,40,42),Ge.position.y=20,Ee.add(Ge);let z=new ge(he.box,_e(2891532));z.scale.set(46,5,46),z.position.y=42,Ee.add(z);let tt=us(7790698,26);tt.position.y=50,Ee.add(tt),ze.led=tt}else{let Ge=new ge(he.box,_e(7031332));Ge.scale.set(40,24,40),Ge.position.y=12,Ee.add(Ge)}le.add(Ee),Ce.set(P,ze)}}for(let[P,L]of Ce)Ke.has(P)||(le.remove(L.group),Ce.delete(P))}}let B=new $e;e.add(B);let O=-1;function k(){if(n.fences.length!==O){O=n.fences.length,B.clear();for(let P of n.fences){let L=new ge(he.box,_e(8215600));L.scale.set(46,22,5),L.position.set(P.x,11,P.y),L.rotation.y=-P.a,B.add(L)}}}return{sync(P){E-=P,E<=0&&(E=.25,D()),n.barrels.forEach((se,T)=>{H[T].visible=se.hp>0}),ne(),k();for(let[se,T]of Ce){let X=n.deploys.get(se);if(X&&(T.pivot&&(T.pivot.rotation.y=-(X.angle||0)),T.led&&X.store)){let q=X.store.wood+X.store.stone+X.store.metal>0;T.led.material.color.setHex(q?7790698:16734780)}}if($.quarryArm){let se=n.quarry;$.quarryArm.rotation.z=se&&se.owner?Math.sin(se.arm*2.4)*.35:-.18}for(let se of $.gates)se.pivot.rotation.z=(1-se.cr.gate)*1.35;let L=n.player;for(let se of $.fadeables){let T=L.x-se.x,X=L.y-se.y,re=!L.dead&&T*T+X*X<(se.r+90)*(se.r+90)?.3:1;for(let Q of se.mats)Q.opacity+=(re-Q.opacity)*Math.min(1,P*7)}}}}function sb(n,e){let{hash2:t}=rb,i=[],s=[],r=[],o=13824,a=9216;for(let u=120;u<a-120;u+=150)for(let p=120;p<o-120;p+=150){let x=t(p/150|0,u/150|0);if(x>.62)continue;let m=p+x*977%1*130,g=u+x*467%1*130;if(!n.world.onLand(m,g)||n.world.lakeAt(m,g)||n.world.pathDist(m,g)<40)continue;let y=n.world.biomeAt(m,g);y==="jungle"?i.push({x:m,y:g,h:x}):y==="desert"?x<.3&&s.push({x:m,y:g,h:x}):x<.4&&r.push({x:m,y:g,h:x})}let l=new xt,c=new nt,d=new Lt(he.cone,_e(16777215),i.length||1);i.forEach((u,p)=>{let x=5+u.h*8;l.makeRotationY(u.h*6).scale(new F(x,x*1.8,x)).setPosition(u.x,x*.9,u.y),d.setMatrixAt(p,l),c.setHex(4876846).multiplyScalar(.8+u.h*37%1*.5),d.setColorAt(p,c)});let h=new Lt(he.ico,_e(16777215),s.length||1);s.forEach((u,p)=>{let x=3+u.h*8;l.makeRotationY(u.h*9).scale(new F(x,x*.55,x)).setPosition(u.x,x*.3,u.y),h.setMatrixAt(p,l),c.setHex(10259040).multiplyScalar(.85+u.h*53%1*.3),h.setColorAt(p,c)});let f=new Lt(he.sphere,_e(15265781),r.length||1);r.forEach((u,p)=>{let x=6+u.h*12;l.makeScale(x,x*.4,x*.8).setPosition(u.x,x*.16,u.y),f.setMatrixAt(p,l)});for(let u of[d,h,f])u.frustumCulled=!1,u.instanceColor&&(u.instanceColor.needsUpdate=!0),e.add(u)}var rb={hash2(n,e){let t=n*374761393+e*668265263|0;return t=t^t>>13|0,t=Math.imul(t,1274126177),((t^t>>16)>>>0)/4294967296}};function ob(n,e,t,i){let s=new $e;s.position.set(t.x,0,t.y);let r=(l,c,d,h,f,u,p,x,m=0,g)=>{let y=new ge(l,_e(c,g));return y.scale.set(d,h,f),y.position.set(u,p,x),y.rotation.y=m,s.add(y),y},o=[],a=(...l)=>{let c=r(...l),d=c.material.clone();return d.transparent=!0,c.material=d,o.push(d),c};if(t.type==="gas"){a(he.box,11027246,216,8,30,0,64,-70);for(let l of[-96,-30,36,96])r(he.box,4147024,6,60,6,l,30,-62);for(let l of[-58,0])r(he.box,5989227,18,30,16,l,15,-22);a(he.box,9081241,54,52,50,58,26,-16),r(he.box,12574959,18,14,2,66,34,10),r(he.box,13279562,26,26,6,-104,40,-62)}else if(t.type==="junk"){for(let l=0;l<5;l++){let c=l/5*d0;r(he.ico,7238780,26,14,20,Math.cos(c)*70,8,Math.sin(c)*54,c)}r(he.box,8011824,56,22,26,-58,11,-40,.3),r(he.box,3824234,56,22,26,54,11,44,-.5),r(he.cyl,2302237,12,16,12,70,8,-50),r(he.cyl,2302237,12,16,12,-66,8,58)}else if(t.type==="warehouse"){a(he.box,8291470,252,70,164,0,35,0),a(he.box,5988971,264,10,176,0,74,0);for(let l of[-72,0,72])a(he.box,2764597,60,46,4,l,23,84);a(he.box,4870488,30,14,16,-38,84,0),a(he.box,4870488,30,14,16,38,84,0)}else if(t.type==="quarry"){r(he.cyl,3814438,46,8,28,-36,4,26),r(he.box,3948871,12,64,12,8,32,-46);let l=new $e;l.position.set(14,60,-44);let c=new ge(he.box,_e(8226963));c.scale.set(86,9,9),l.add(c);let d=new ge(he.sphere,_e(10768430));d.scale.set(9,9,9),d.position.x=-43,l.add(d),s.add(l),i.quarryArm=l,r(he.box,5061152,4,46,4,-44,23,-58),r(he.box,7236186,24,13,2,-32,40,-58)}o.length&&i.fadeables.push({x:t.x,y:t.y,r:t.r,mats:o}),e.add(s)}function ab(n,e){let t=n.world.shop,i=new $e;i.position.set(t.x,0,t.y);let s=new ge(he.cyl,_e(6969398));s.scale.set(46,6,46),s.position.y=3,i.add(s);let r=new ge(he.box,_e(10120764));r.scale.set(60,24,22),r.position.set(0,16,2),i.add(r);let o=new ge(he.cone,_e(11751744));o.scale.set(52,26,52),o.position.y=56,i.add(o);for(let l of[-34,34]){let c=new ge(he.cyl,_e(6177574));c.scale.set(3,44,3),c.position.set(l,22,8),i.add(c)}let a=new ge(new Uo(wt-7,wt,72),new Yt({color:9885695,transparent:!0,opacity:.3,side:In,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=1.2,i.add(a),e.add(i)}var sf=13081716,Ir=Math.PI*2;function Nt(n,e,t,i,s,r,o){let a=new ge(he.box,_e(n));return a.scale.set(e,t,i),a.position.set(s,r,o),a}function pt(n,e,t,i,s,r=1,o=1){let a=new ge(he.sphere,_e(n));return a.scale.set(e,e*r,e*o),a.position.set(t,i,s),a}var u0={pistol:n=>n.add(Nt(2303519,10,4,3.4,11,0,0)),rifle:n=>{n.add(Nt(2303519,20,3.6,3.4,15,0,0)),n.add(Nt(4864544,5,5,3.8,7,-1,0))},shotgun:n=>{n.add(Nt(2827808,16,4.6,4,13,0,0)),n.add(Nt(5980710,5,5.5,4.2,5,-1,0))},hmg:n=>{n.add(Nt(2303519,24,5,4.4,16,0,0)),n.add(Nt(3817271,6,7,4.8,10,-3,0))},tool:n=>{n.add(Nt(5980710,13,3,3,9,0,0)),n.add(Nt(12173511,4,8,3.4,16,1,0))},rocket:n=>{n.add(Nt(3751983,22,6.5,6,14,1,0)),n.add(Nt(16751421,3,7,6.4,25,1,0))},hammer:n=>{n.add(Nt(5980710,11,3,3,8,0,0)),n.add(Nt(10133928,4,7,4.4,14,1,0))},jack:n=>{n.add(Nt(1842204,4,4,3.4,6,1,0)),n.add(Nt(13279802,11,9,5.5,13,0,0)),n.add(Nt(3817271,4,5.5,4,20,-1,0)),n.add(Nt(12173511,11,2.6,2.6,27,-2,0))}};function m0(n,e={}){let t=new $e,i={};i.shadow=Fs(46),i.shadow.position.y=1,t.add(i.shadow),i.lower=new $e,t.add(i.lower);for(let l of["L","R"]){let c=new $e;c.position.set(0,12,l==="L"?-3.2:3.2);let d=Nt(3289130,4.6,12,4.6,0,-6,0);c.add(d),i.lower.add(c),i["leg"+l]=c}i.torso=Nt(n,10,14,12,0,24.5,0),t.add(i.torso),i.torsoShade=Nt(p0(n,.7),10.4,4.5,12.4,0,19,0),t.add(i.torsoShade),i.armor=Nt(9804963,11,10,13,.8,24.5,0),i.armor.visible=!1,t.add(i.armor),i.pack=Nt(4866100,4,9,8,-7,25,0),t.add(i.pack),i.armL=new $e,i.armL.position.set(0,30,-7.4);let s=Nt(sf,3.6,11,3.6,0,-5,0);i.armL.add(s),t.add(i.armL),i.armR=new $e,i.armR.position.set(2,29,7.4),i.armR.add(Nt(sf,9,3.6,3.6,4.5,0,-1.5)),i.gun=new $e,i.armR.add(i.gun),t.add(i.armR),i.head=new $e,i.head.position.y=38;let r=null;if(e.scientist){i.head.add(pt(n,6.3,0,.4,0)),i.head.add(Nt(1974822,5.5,4.5,7.5,4.2,-1.2,0));for(let c of[-1,1])i.head.add(pt(14214848,1.3,5.2,1.4,c*2.4));let l=new ge(he.cyl,_e(5857382));l.scale.set(3.6,12,3.6),l.position.set(-8,25,0),t.add(l),i.pack.visible=!1}else{i.head.add(pt(sf,5.6,0,0,0));let l=new ge(he.sphere,_e(e.hairCol??3811864));l.scale.set(5.9,4.4,5.9),l.position.y=2.2,i.head.add(l),r=new ge(he.cyl,_e(n)),r.scale.set(5.9,1.6,5.9),r.position.y=1.2,i.head.add(r)}i.band=r,i.helmet=new $e;let o=new ge(he.sphere,_e(10136504));o.scale.set(6.3,6.3,6.3),i.helmet.add(o);let a=Nt(1119516,3,3,9.5,4.6,-.5,0);return i.helmet.add(a),i.helmet.visible=!1,i.head.add(i.helmet),t.add(i.head),t.userData={parts:i,colHex:n,phase:Math.random()*7,setGun(l){t.userData.gunKind!==l&&(t.userData.gunKind=l,i.gun.clear(),(u0[l]||u0.pistol)(i.gun))},setArmor(l,c){i.armor.visible=l>0,l>0&&(i.armor.material=_e(l>=3?6126235:l===2?9804963:8746824)),i.helmet.visible=c>0,c>0&&(i.helmet.children[0].material=_e(c>=3?8163017:c===2?10136504:13482898))},setColor(l){t.userData.colHex!==l&&(t.userData.colHex=l,i.torso.material=_e(l),i.torsoShade.material=_e(p0(l,.7)),r&&(r.material=_e(l)))},animate(l,c,d,h,f){let u=t.userData,p=Math.min(.1,Math.max(.001,l-(u.lastT??l)));u.lastT=l;let x=u.hipsCur??0,m=1,g=1;if(c>.05&&f!==null&&f!==void 0){let E=f%Ir;E>Math.PI&&(E-=Ir),E<-Math.PI&&(E+=Ir),Math.abs(E)>2.06&&(m=-1,g=.72,E=E>0?E-Math.PI:E+Math.PI),x=E}else c<=.05&&(x=0);let y=u.hipsCur??0,v=(x-y)%Ir;v>Math.PI&&(v-=Ir),v<-Math.PI&&(v+=Ir),y+=v*Math.min(1,p*14),u.hipsCur=y,i.lower.rotation.y=-y;let b=l*11+u.phase,A=Math.sin(b)*.75*c*g*m;if(i.legL.rotation.z=A,i.legR.rotation.z=-A,i.armL.rotation.z=-A*.55,t.position.y=Math.abs(Math.sin(b))*1.4*c,d&&h){i.armR.rotation.z=-.22+Math.sin(l*62)*.05;let E=Math.sin(l*57)*1.5,D=Math.sin(l*71)*1.1;t.position.y+=Math.abs(D)*.8,t.userData.judder={x:E,z:Math.cos(l*49)*1.3}}else t.userData.judder=null,d?i.armR.rotation.z=-.5+Math.sin(l*9)*.55:i.armR.rotation.z=0}},t.userData.setGun(e.gun||"pistol"),t}function p0(n,e){let t=Math.min(255,(n>>16&255)*e)|0,i=Math.min(255,(n>>8&255)*e)|0,s=Math.min(255,(n&255)*e)|0;return t<<16|i<<8|s}function qc(n,e,t,i,s,r){let o=[];for(let a of[-1,1])for(let l of[-1,1]){let c=new $e;c.position.set(a*i,r,l*s);let d=new ge(he.cyl,_e(e));d.scale.set(t*.16,r,t*.16),d.position.y=-r/2,c.add(d),n.add(c),o.push({pivot:c,phase:a*l>0?0:Math.PI})}return o}function g0(n,e){let t=new $e,i={legs:[],extra:null},s={boar:[8282692,5521451],wolf:[7698047,4605773],bear:[6375471,3812380],polarbear:[14542315,11451592],alligator:[5599286,3229980],snake:[11704890,7430430],scorpion:[8278566,4664850]}[n]||[8947848,5592405],[r,o]=s,a=Fs(e*3.2);if(a.position.y=.8,t.add(a),n==="snake"){i.segs=[];for(let c=0;c<6;c++){let d=pt(c%2?o:r,e*(.55-c*.05),-c*e*.5,e*.4,0);t.add(d),i.segs.push(d)}let l=pt(r,e*.62,e*.45,e*.45,0,.8,.9);t.add(l),i.head=l}else if(n==="scorpion"){t.add(pt(o,e*.85,0,e*.4,0,.5,.8)),t.add(pt(r,e*.62,e*.2,e*.55,0,.5,.75));for(let h of[-1,1])t.add(Nt(r,e*.8,e*.2,e*.18,e*.75,e*.35,h*e*.5)),t.add(pt(o,e*.26,e*1.2,e*.35,h*e*.62));i.tail=new $e,i.tail.position.set(-e*.7,e*.5,0);let l=0,c=0;for(let h=0;h<3;h++)l-=e*.3,c+=e*.34,i.tail.add(pt(o,e*.2,l,c,0));let d=new ge(he.cone,_e(3810320));d.scale.set(e*.14,e*.3,e*.14),d.position.set(l+e*.16,c+e*.22,0),d.rotation.z=-1,i.tail.add(d),t.add(i.tail)}else if(n==="alligator"){let l=e*.55;t.add(pt(o,e,0,l,0,.5,.72)),t.add(pt(r,e*.82,0,l+e*.18,0,.42,.6)),t.add(pt(r,e*.5,e*1.15,l,0,.5,.62)),t.add(Nt(o,e*.9,e*.16,e*.5,e*1.25,l-e*.1,0)),t.add(pt(o,e*.62,-e*1.05,l,0,.45,.6)),t.add(pt(o,e*.4,-e*1.7,l*.9,0,.45,.55));for(let c=0;c<4;c++){let d=new ge(he.cone,_e(o));d.scale.set(e*.12,e*.25,e*.12),d.position.set(-e*.6+c*e*.42,l+e*.42,0),t.add(d)}i.legs=qc(t,o,e,e*.55,e*.5,l*.8)}else if(n==="bear"||n==="polarbear"){let l=e*.95;t.add(pt(r,e*.88,e*.2,l,0,.95,.78)),t.add(pt(o,e*.74,-e*.62,l*.88,0,.85,.74)),t.add(pt(r,e*.46,e*.05,l+e*.62,0)),t.add(pt(o,e*.16,-e*1.28,l*.95,0));let c=new $e;c.position.set(e*1,l+e*.42,0),c.add(pt(r,e*.42,0,0,0)),c.add(pt(o,e*.26,e*.4,-e*.06,0,.75,.7)),c.add(pt(1840144,e*.08,e*.62,-e*.04,0));for(let d of[-1,1])c.add(pt(o,e*.13,-e*.18,e*.36,d*e*.26)),c.add(pt(1314828,e*.05,e*.3,e*.12,d*e*.2));t.add(c),i.head=c,i.legs=qc(t,o,e*1.25,e*.52,e*.4,l*.92)}else if(n==="wolf"){let l=e*.95;t.add(pt(r,e*.85,e*.15,l,0,.62,.52)),t.add(pt(o,e*.66,-e*.6,l*.96,0,.55,.48));let c=new $e;c.add(pt(o,e*.22,-e*1.15,l+e*.1,0,1,.8)),c.add(pt(o,e*.16,-e*1.45,l+e*.3,0)),t.add(c);let d=new $e;d.position.set(e*.95,l+e*.3,0),d.add(pt(r,e*.34,0,0,0)),d.add(pt(o,e*.18,e*.36,-e*.05,0,.7,.6)),d.add(pt(1840144,e*.06,e*.52,-e*.02,0));for(let h of[-1,1]){let f=new ge(he.cone,_e(o));f.scale.set(e*.1,e*.26,e*.1),f.position.set(-e*.12,e*.4,h*e*.18),d.add(f),d.add(pt(14206010,e*.05,e*.26,e*.1,h*e*.15))}t.add(d),i.head=d,i.legs=qc(t,o,e*.85,e*.5,e*.3,l*1)}else{let l=e*.66;t.add(pt(o,e*1,0,l,0,.72,.72)),t.add(pt(r,e*.88,e*.1,l+e*.08,0,.66,.64));for(let d=0;d<4;d++){let h=new ge(he.cone,_e(4075554));h.scale.set(e*.1,e*.2,e*.1),h.position.set(e*.45-d*e*.3,l+e*.52-d*e*.03,0),t.add(h)}t.add(pt(o,e*.1,-e*1.05,l+e*.15,0));let c=new $e;c.position.set(e*.92,l,0),c.add(pt(r,e*.46,0,0,0,.9,.8)),c.add(pt(9071192,e*.2,e*.5,-e*.12,0,.7,.9));for(let d of[-1,1]){let h=new ge(he.cone,_e(15261903));h.scale.set(e*.06,e*.2,e*.06),h.position.set(e*.42,-e*.16,d*e*.22),h.rotation.z=.6,c.add(h);let f=new ge(he.cone,_e(o));f.scale.set(e*.1,e*.18,e*.1),f.position.set(-e*.2,e*.38,d*e*.24),f.rotation.x=d*.4,c.add(f),c.add(pt(1314828,e*.05,e*.3,e*.14,d*e*.22))}t.add(c),i.head=c,i.legs=qc(t,o,e*.95,e*.48,e*.36,l*.9)}return t.userData={...i,phase:Math.random()*7,animate(l,c){let d=l*9+t.userData.phase;for(let h of i.legs)h.pivot.rotation.z=Math.sin(d+h.phase)*.55*c;if(i.segs)for(let h=0;h<i.segs.length;h++)i.segs[h].position.z=Math.sin(l*7-h*.8)*e*.3*(.4+c);i.tail&&(i.tail.rotation.z=Math.sin(l*3)*.08),i.head&&!i.segs&&(i.head.rotation.z=Math.sin(l*2.2+t.userData.phase)*.06)}},t}var x0=Math.PI*2,lb={0:"tool",1:"pistol",2:"rifle",3:"hmg",4:"rocket",5:"hammer",6:"rifle",7:"shotgun",8:"hmg"},ps=class{constructor(e,t){this.scene=e,this.make=t,this.map=new Map,this.seen=new Set,this.miss=new Map}get(e,...t){this.seen.add(e);let i=this.map.get(e);return i||(i=this.make(...t),this.map.set(e,i),this.scene.add(i)),i.visible=!0,i}sweep(){for(let[e,t]of this.map)if(this.seen.has(e))this.miss.delete(e);else{t.visible=!1;let i=(this.miss.get(e)||0)+1;i>300?(this.scene.remove(t),this.map.delete(e),this.miss.delete(e)):this.miss.set(e,i)}this.seen.clear()}};function y0(n,e){let t=new ps(e,(O,k,P)=>m0(O,{gun:k,scientist:P})),i=new ps(e,(O,k)=>g0(O,k));function s(){return _e(1645589)}let r=(O,k,P,L,se,T,X)=>{let q=new ge(he.box,_e(O));return q.scale.set(k,P,L),q.position.set(se,T,X),q},o=new ps(e,O=>{let k=new $e;k.add(r(3356462,34,3,24,2,8,0)),k.add(r(O,15,11,15,4,15,0)),k.add(r(O,13,16,3.4,-3,24,0)),k.add(r(2303519,9,7,12,15,13,0)),k.add(r(3817271,10,10,11,-11,14,0));let P=new ge(he.cyl,_e(2895656));P.scale.set(2.4,16,2.4),P.position.set(-2,32,0),k.add(P),k.add(r(2895656,42,3.6,3.6,-32,22,0)),k.add(r(3356462,8,12,2.4,-51,26,0));let L=r(1645589,1.4,16,2.6,-53,24,3);k.add(L);for(let re of[-1,1]){let Q=new ge(he.cyl,_e(2303519));Q.scale.set(1.8,52,1.8),Q.rotation.z=Math.PI/2,Q.position.set(2,2.5,re*13),k.add(Q),k.add(r(2303519,2,8,2,-8,5,re*13)),k.add(r(2303519,2,8,2,12,5,re*13))}let se=r(1645589,96,1.6,7,-2,41,0);k.add(se);let T=new $e;T.add(r(O,8,11,9,4,21,0));let X=new ge(he.sphere,_e(13081716));X.scale.set(4.5,4.5,4.5),X.position.set(4,30,0),T.add(X),T.visible=!1,k.add(T);let q=Fs(86);return q.position.y=1,k.add(q),k.userData={rotor:se,tailRotor:L,sh:q,pilot:T},k}),a=new ps(e,O=>{let k=new $e;k.add(r(O,104,30,34,0,26,0)),k.add(r(2501666,104,8,35,0,13,0)),k.add(r(2040857,18,22,30,56,24,0)),k.add(r(10470104,6,9,26,64,30,0));let P=r(2896680,20,4,30,-56,12,0);P.rotation.z=.5,k.add(P);for(let q=0;q<4;q++)k.add(r(1316892,7,7,2,32-q*22,30,17.6));for(let q=0;q<4;q++)k.add(r(1316892,7,7,2,32-q*22,30,-17.6));k.add(r(3817524,26,10,20,-38,46,0));let L=r(2895656,4,12,4,38,46,0);k.add(L);let se=r(1645589,100,2,8,38,54,0);k.add(se);let T=r(1645589,100,2,8,-38,58,0);k.add(T);for(let[q,re]of[[44,14],[44,-14],[-40,16],[-40,-16]]){let Q=new ge(he.cyl,_e(1316892));Q.scale.set(4.5,3,4.5),Q.rotation.x=Math.PI/2,Q.position.set(q,5,re),k.add(Q)}let X=Fs(150);return X.position.y=1,k.add(X),k.userData={rotor:se,rotor2:T,sh:X},k}),l=new ps(e,O=>O()),c=new ps(e,(O,k)=>us(O,k)),d=700,h=new Lt(he.quad,new Yt({color:2366482,transparent:!0,opacity:.34,depthWrite:!1,side:In}),d);h.frustumCulled=!1,h.renderOrder=2,e.add(h);let f=new xt,u=new xt,p=new F,x=64,m=[],g=new Lt(he.box,new Sn({color:16777215,flatShading:!0}),x);g.frustumCulled=!1,e.add(g);let y=new xt,v=new nt,b={wood:9069104,stone:8685967,metal:13145412},A=90,E=[],D=new qt,_=new Float32Array(A*3);D.setAttribute("position",new en(_,3));let M=new zi(D,new xi({color:16771491,size:6,transparent:!0,opacity:.95,blending:wn,depthWrite:!1,sizeAttenuation:!0}));M.frustumCulled=!1,e.add(M);function S(O){let k=O.jack?5:3;for(let P=0;P<k;P++){m.length>=x&&m.shift();let L=Math.random()*x0;m.push({x:O.x+Math.cos(L)*6,y:O.y+Math.sin(L)*6,h:18+Math.random()*14,vx:Math.cos(L)*(40+Math.random()*70),vy:Math.sin(L)*(40+Math.random()*70),vh:60+Math.random()*90,life:.85,rot:Math.random()*7,vrot:(Math.random()-.5)*14,s:2.2+Math.random()*(O.jack?3.4:2.2),col:b[O.kind]||9069104})}if(O.jack)for(let P=0;P<7;P++){E.length>=A&&E.shift();let L=Math.random()*x0;E.push({x:O.x,y:O.y,h:16,vx:Math.cos(L)*(90+Math.random()*160),vy:Math.sin(L)*(90+Math.random()*160),vh:40+Math.random()*120,life:.22+Math.random()*.14})}}function C(O){for(let P=m.length-1;P>=0;P--){let L=m[P];if(L.life-=O,L.life<=0){m.splice(P,1);continue}L.vh-=320*O,L.x+=L.vx*O,L.y+=L.vy*O,L.h+=L.vh*O,L.h<1.5&&(L.h=1.5,L.vh*=-.35,L.vx*=.6,L.vy*=.6),L.rot+=L.vrot*O}m.forEach((P,L)=>{y.makeRotationY(P.rot).scale(new F(P.s,P.s,P.s)).setPosition(P.x,P.h,P.y),g.setMatrixAt(L,y),v.setHex(P.col),g.setColorAt(L,v)}),g.count=m.length,g.instanceMatrix.needsUpdate=!0,g.instanceColor&&(g.instanceColor.needsUpdate=!0);let k=0;for(let P=E.length-1;P>=0;P--){let L=E[P];if(L.life-=O,L.life<=0){E.splice(P,1);continue}L.vh-=260*O,L.x+=L.vx*O,L.y+=L.vy*O,L.h=Math.max(1,L.h+L.vh*O)}for(let P of E){if(k>=A)break;_[k*3]=P.x,_[k*3+1]=P.h,_[k*3+2]=P.y,k++}D.setDrawRange(0,k),D.attributes.position.needsUpdate=!0}let N=46,W=[];for(let O=0;O<N;O++){let k=new Cs(new ss({map:Xc(),color:8817810,transparent:!0,opacity:0,depthWrite:!1}));k.visible=!1,e.add(k),W.push(k)}let Y=[];function U(O,k,P,L){Y.length>=N&&Y.shift(),Y.push({x:O,y:k,h:P,life:2.8,max:2.8,s0:26*L,drift:Math.random()*7})}function H(O){for(let k=Y.length-1;k>=0;k--){let P=Y[k];if(P.life-=O,P.life<=0){Y.splice(k,1);continue}P.h+=50*O,P.x+=n.wind*9*O,P.y+=Math.sin(P.drift)*3*O}W.forEach((k,P)=>{let L=Y[P];if(!L){k.visible=!1;return}k.visible=!0;let se=1-L.life/L.max,T=L.s0*(1+se*2.4);k.scale.set(T,T,1),k.position.set(L.x,L.h,L.y),k.material.opacity=.36*(L.life/L.max)*Math.min(1,se*6+.2)})}function $(O,k){let P=O.pts,L=0;for(let T=0;T<O.seg&&T<P.length-1;T++)L+=Math.hypot(P[T+1].x-P[T].x,P[T+1].y-P[T].y);L+=Math.hypot(O.x-P[Math.min(O.seg,P.length-1)].x,O.y-P[Math.min(O.seg,P.length-1)].y);let se=[];for(let T of k){let X=Math.max(.1,L+T),q=0,re=0;for(;q<P.length-2;){let z=Math.hypot(P[q+1].x-P[q].x,P[q+1].y-P[q].y);if(re+z>=X)break;re+=z,q++}let Q=P[q],Ee=P[q+1],ze=Math.hypot(Ee.x-Q.x,Ee.y-Q.y)||1,Ge=Math.max(0,Math.min(1,(X-re)/ze));se.push({x:Q.x+(Ee.x-Q.x)*Ge,y:Q.y+(Ee.y-Q.y)*Ge,a:Math.atan2(Ee.y-Q.y,Ee.x-Q.x)})}return se}let le=1200,de=new qt,ye=new Float32Array(le*3),Ce=new Float32Array(le*3);de.setAttribute("position",new en(ye,3)),de.setAttribute("color",new en(Ce,3));let Ue=new zi(de,new xi({size:7,vertexColors:!0,transparent:!0,opacity:.9,sizeAttenuation:!0,depthWrite:!1}));Ue.frustumCulled=!1,e.add(Ue);let Ke=new Map;function ie(O){let k=Ke.get(O);if(!k){k=new nt;try{if(O.startsWith("rgba")){let P=O.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)/);P&&k.setRGB(+P[1]/255,+P[2]/255,+P[3]/255)}else k.set(O)}catch{k.setRGB(.7,.7,.7)}Ke.set(O,k)}return k}let ne=1/60;function B(O,k,P,L,se,T={}){O.position.set(k,0,P),O.rotation.y=-L;let X=O.userData;X.setColor(se),T.gun&&X.setGun(T.gun),X.setArmor(T.bodyArmor||0,T.facemask||0);let q=null;(T.vx||T.vy)&&Math.hypot(T.vx,T.vy)>18&&(q=Math.atan2(T.vy,T.vx)-L),X.animate(n.t,T.moveAmt??0,!!T.gathering,!!T.jack,q),X.judder&&(O.position.x+=X.judder.x,O.position.z+=X.judder.z);let re=n.world.lakeAt(k,P),Q=re&&!re.frozen?30:0;X.sinkY=(X.sinkY??0)+(Q-(X.sinkY??0))*Math.min(1,ne*5),O.position.y-=X.sinkY}return{sync(O,k){ne=O;for(let T of n.units){if(T.dead||T.eliminated)continue;if(T.copter&&!T.copter.destroyed&&k.inView(T.copter.x,T.copter.y,200)){let Q=o.get(T.copter,parseInt(T.col.slice(1),16)),Ee=T.flying&&T.state==="trade";Q.position.set(T.copter.x,Ee?70:0,T.copter.y),Q.rotation.y=-(T.copter.angle||0),Q.userData.rotor.rotation.y=T.copter.rotor||0,Q.userData.tailRotor.rotation.z=(T.copter.rotor||0)*4,Q.userData.pilot.visible=Ee,Q.userData.sh.position.y=Ee?-68:1}if(T.flying||!k.inView(T.x,T.y,200))continue;let X=parseInt((T.ally?"#7ec850":T.col).slice(1),16),q=t.get(T,X,T.gun),re=Math.min(1,Math.hypot(T.vx,T.vy)/120);B(q,T.x,T.y,T.angle,X,{gun:T.gathering?T.jack?"jack":"tool":T.gun,moveAmt:re,gathering:T.gathering,jack:T.jack,bodyArmor:T.bodyArmor,facemask:T.facemask,vx:T.vx,vy:T.vy})}let P=n.player;if(!P.inCopter){let T=t.get(P,8030800,"pistol"),X=P.moving?1:0,q=n.slot===0&&n.jackhammer;B(T,P.x,P.y,P.angle,P.hurt>0?12876382:8030800,{gun:n.slot===0&&n.jackhammer?"jack":lb[n.slot]||"pistol",moveAmt:X,gathering:P.swing>0&&n.slot===0,jack:q,bodyArmor:P.bodyArmor,facemask:P.facemask,vx:P.vx,vy:P.vy}),P.dead&&(T.visible=!1)}if(n.copter&&!n.copter.destroyed){let T=o.get(n.copter,6121548),X=P.inCopter;T.position.set(n.copter.x,X?80:0,n.copter.y),T.rotation.y=-(n.copter.angle||0),T.userData.rotor.rotation.y=(n.copter.rotor||0)*3,T.userData.tailRotor.rotation.z=(n.copter.rotor||0)*11,T.userData.pilot.visible=X,T.userData.sh.position.y=X?-78:1}for(let T of n.guards){if(T.dead||!k.inView(T.x,T.y,150))continue;let X=t.get(T,12410412,"rifle",!0),q=Math.min(1,Math.hypot(T.vx||0,T.vy||0)/90+.2);B(X,T.x,T.y,T.angle,12410412,{gun:"rifle",moveAmt:q,vx:T.vx,vy:T.vy})}for(let T of n.animals){if(T.dead||!k.inView(T.x,T.y,150))continue;let X=i.get(T,T.type,T.r),q=0;T.type==="alligator"&&n.world.lakeAt(T.x,T.y)&&(q=T.r*.62),X.userData.sinkY=(X.userData.sinkY??0)+(q-(X.userData.sinkY??0))*Math.min(1,O*5),X.position.set(T.x,-X.userData.sinkY,T.y);let re=Math.hypot(T.vx||0,T.vy||0),Q=re>2?Math.atan2(T.vy,T.vx):T.dir;X.rotation.y=-Q,X.userData.animate(n.t,Math.min(1,re/80))}for(let T of n.transports){let X=T.owner===Ye?8308816:parseInt((n.teams.find(Q=>Q.owner===T.owner)||{col:"#888888"}).col.slice(1),16),q=a.get(T,X),re=T.state==="fly"||T.state==="return"||T.riders.length>0;q.position.set(T.x,re?110:2,T.y),q.rotation.y=-T.angle,q.userData.rotor.rotation.y=T.rotor,q.userData.rotor2.rotation.y=-T.rotor,q.userData.sh.position.y=re?-106:1}for(let T of n.trains){let X=l.get(T,()=>{let Q=new $e,Ee=na("metal").clone();Ee.color.setScalar(.62);let ze=new ge(he.box,Ee);ze.scale.set(54,30,26),ze.position.y=17,Q.add(ze),Q.add(r(2303788,18,14,27,-14,38,0)),Q.add(r(10470104,4,7,22,-4,39,0));let Ge=new ge(he.cyl,_e(1843238));Ge.scale.set(4.5,12,4.5),Ge.position.set(16,38,0),Q.add(Ge);let z=r(2764339,12,10,24,30,8,0);z.rotation.z=-.5,Q.add(z);let tt=us(16771491,44);tt.position.set(30,20,0),Q.add(tt);let et=[];for(let yt=0;yt<4;yt++){let Me=new $e,St=na("wood").clone();St.color.setScalar(.78+yt%2*.14);let I=new ge(he.box,St);I.scale.set(46,26,24),I.position.y=15,Me.add(I);let w=r(2893344,48,3.5,26,0,30,0);Me.add(w),Me.add(r(2038292,8,12,25,0,14,0)),Q.add(Me),et.push(Me)}return Q.userData={cars:et,smokeT:0},Q}),q=$(T,[0,-64,-116,-168,-220]),re=q[0];if(X.position.set(re.x,0,re.y),X.rotation.y=-re.a,X.userData.cars.forEach((Q,Ee)=>{let ze=q[Ee+1],Ge=ze.x-re.x,z=ze.y-re.y,tt=Math.cos(re.a),et=Math.sin(re.a);Q.position.set(Ge*tt+z*et,0,-Ge*et+z*tt),Q.rotation.y=-(ze.a-re.a)}),X.userData.smokeT-=O,X.userData.smokeT<=0){X.userData.smokeT=.12;let Q=re.x+Math.cos(re.a)*16,Ee=re.y+Math.sin(re.a)*16;U(Q,Ee,40,1)}}for(let T of n.convoys){if(T.dead)continue;let X=l.get(T,()=>{let q=new $e,re=new ge(he.box,_e(5660746));re.scale.set(68,24,36),re.position.y=12,q.add(re);let Q=new $e;Q.position.y=28;let Ee=new ge(he.cyl,_e(3752499));Ee.scale.set(12,9,12),Q.add(Ee);let ze=new ge(he.box,_e(1250830));ze.scale.set(32,5,5),ze.position.x=20,Q.add(ze),q.add(Q),q.userData={turret:Q};let Ge=Fs(90);return Ge.position.y=1,q.add(Ge),q});X.position.set(T.x,0,T.y),X.rotation.y=-T.ang,X.userData.turret.rotation.y=-(T.taim-T.ang);for(let q of T.guards){if(q.dead)continue;let re=t.get(q,3829413,"rifle",!0);B(re,q.x,q.y,q.angle,3829413,{gun:"rifle",moveAmt:.6})}}if(n.patrol){let T=n.patrol,X=l.get("patrol",()=>{let q=new $e;q.add(r(4740158,76,20,20,0,0,0)),q.add(r(3818548,76,6,21,0,-12,0));let re=new ge(he.sphere,_e(4740158));re.scale.set(14,11,10),re.position.set(40,-1,0),q.add(re),q.add(r(1316892,14,8,14,26,8,0)),q.add(r(10470104,4,6,12,34,7,0)),q.add(r(1974822,10,6,6,36,-13,0)),q.add(r(1316892,14,2.6,2.6,46,-13,0));for(let Ge of[-1,1]){q.add(r(3818548,16,4,26,2,2,Ge*22));for(let z of[16,26]){let tt=new ge(he.cyl,_e(2830374));tt.scale.set(4.5,16,4.5),tt.rotation.z=Math.PI/2,tt.position.set(4,-3,Ge*z),q.add(tt)}}q.add(r(3357744,52,6,6,-58,4,0)),q.add(r(3818548,9,18,3,-82,12,0));let Q=r(1645589,1.6,20,3,-84,10,4);q.add(Q);let Ee=r(2895656,5,8,5,0,13,0);q.add(Ee);let ze=r(1645589,124,2.2,9,0,19,0);return q.add(ze),q.userData={rotor:ze,tailRotor:Q},q});X.position.set(T.x,150,T.y),X.rotation.y=-T.angle,X.userData.rotor.rotation.y=T.rotor,X.userData.tailRotor.rotation.z=T.rotor*4}if(n.plane){let T=l.get("plane",()=>{let X=new $e,q=new ge(he.sphere,_e(8291985));q.scale.set(28,8,8),X.add(q);let re=new ge(he.box,_e(7041660));return re.scale.set(10,2,52),X.add(re),X});T.position.set(n.plane.x,320,n.plane.y),T.rotation.y=n.plane.vx<0?Math.PI:0}if(n.airdrop){let T=n.airdrop,X=l.get("airdrop",()=>{let re=new $e,Q=new ge(he.box,_e(6120530));Q.scale.set(30,24,30),Q.position.y=12,re.add(Q);let Ee=new ge(he.box,_e(16766827));Ee.scale.set(32,5,32),Ee.position.y=12,re.add(Ee);let ze=new ge(he.cone,_e(12079162,{transparent:!0,opacity:.9}));return ze.scale.set(34,26,34),ze.position.y=56,re.add(ze),re.userData={chute:ze},re}),q=T.fall<1?(1-T.fall)*320:0;X.position.set(T.x+(T.fall<1?Math.sin(T.sway)*12:0),q,T.fall<1?T.gy:T.y),X.userData.chute.visible=T.fall<1}if(n.lockedCrate){let T=n.lockedCrate,X=l.get("crate",()=>{let re=new $e,Q=new ge(he.box,_e(3948871));Q.scale.set(40,26,30),Q.position.y=13,re.add(Q);let Ee=us(16758858,22);return Ee.position.set(13,26,-8),re.add(Ee),re.userData={light:Ee},re});X.position.set(T.x,0,T.y);let q=T.blink%.8<.4;X.userData.light.visible=q,X.userData.light.material.color.setHex(T.started?16758858:13777960)}for(let T of n.bullets){let X=l.get(T,()=>{let Q=new $e,Ee=new ge(he.sphere,new Yt({color:16767392,transparent:!0,opacity:.95,blending:wn,depthWrite:!1}));Ee.scale.set(3.4,3,3),Q.add(Ee);let ze=new ge(he.cone,new Yt({color:16756820,transparent:!0,opacity:.5,blending:wn,depthWrite:!1}));ze.scale.set(2.6,30,2.6),ze.rotation.z=Math.PI/2,ze.position.x=-15,Q.add(ze);let Ge=new ge(he.cone,new Yt({color:16749620,transparent:!0,opacity:.2,blending:wn,depthWrite:!1}));return Ge.scale.set(4.5,44,4.5),Ge.rotation.z=Math.PI/2,Ge.position.x=-22,Q.add(Ge),Q.userData={head:Ee,tail:ze,tail2:Ge},Q});X.position.set(T.x,18,T.y),X.rotation.y=-Math.atan2(T.vy,T.vx);let q=T.col==="hmg"?16738864:T.ricochet?10150655:16767392,re=T.col==="hmg"?15219732:T.ricochet?6076648:16756820;X.userData.head.material.color.setHex(q),X.userData.tail.material.color.setHex(re),X.userData.tail2.material.color.setHex(re)}for(let T of n.rockets){let X=l.get(T,()=>{let q=new $e,re=new ge(he.cone,_e(3751983));re.scale.set(5,18,5),re.rotation.z=-Math.PI/2,q.add(re);let Q=us(16751421,34);return Q.position.x=-12,q.add(Q),q});X.position.set(T.x,18,T.y),X.rotation.y=-Math.atan2(T.vy,T.vx)}for(let T of n.grenades)l.get(T,()=>{let q=new ge(he.sphere,_e(2898466));return q.scale.set(6,6,6),q}).position.set(T.x,8+Math.abs(Math.sin(T.bob*6))*8,T.y);for(let T of n.satchels){let X=l.get(T,()=>{let q=new ge(he.box,_e(3814444));return q.scale.set(14,9,12),q.position.y=4,q});X.position.set(T.x,4,T.y),X.visible=Math.sin(n.t*18)>-.6}for(let T of n.loot){if(!k.inView(T.x,T.y,100))continue;let X=l.get(T,()=>{let re=new ge(he.box,_e(14081248));return re.scale.set(9,9,9),re}),q={wood:12158022,stone:11186616,metal:15245902,scrap:14081248,ammo:16769162,rocket:16751194,sniper:12575743,satchel:13154442,gun:12896701};X.material=_e(q[T.kind]||14081248),X.position.set(T.x,8+Math.sin(T.bob*3)*2.5,T.y),X.rotation.y=T.bob}for(let T of n.fires){let X=c.get(T,16747050,90);X.position.set(T.x,16,T.y);let q=.8+Math.sin(n.t*11+T.x)*.25;X.scale.set(90*q,110*q,1)}for(let T of n.wrecks)l.get(T,()=>{let q=new $e,re=new ge(he.box,_e(2499614));re.scale.set(30,14,20),re.position.y=7,re.rotation.y=.5,q.add(re);let Q=us(16755260,60);return Q.position.y=14,q.add(Q),q}).position.set(T.x,0,T.y);for(let T of n.scorch){let X=l.get(T,()=>{let q=new ge(new yi(1,12),new Yt({color:1314828,transparent:!0,opacity:.45,depthWrite:!1}));return q.rotation.x=-Math.PI/2,q.position.y=.8,q});X.position.set(T.x,.8,T.y),X.scale.set(T.r,T.r,1)}for(let T of n.flashes){let X=c.get(T,16757322,T.r*2.4);X.position.set(T.x,20,T.y);let q=T.life/T.max;X.material.opacity=q,X.scale.set(T.r*(2.6-q),T.r*(2.6-q),1)}if(n.muzzle){let T=c.get("muzzle",16766827,46);T.position.set(n.muzzle.x,18,n.muzzle.y),T.material.opacity=n.muzzle.t/.08}for(let T of n.events)T.type==="harvest"&&k.inView(T.x,T.y,300)&&S(T);C(O),H(O);let L=0;for(let T of n.footprints){if(L>=d)break;let X=1-T.t/10;if(X<.06||!k.inView(T.x,T.y,60))continue;let q=6.2*(.45+.55*X);f.makeRotationY(-T.a),u.makeRotationX(-Math.PI/2),f.multiply(u),p.set(q,q*.55,1),f.scale(p),f.setPosition(T.x,.45+L%9*.025,T.y),h.setMatrixAt(L,f),L++}h.count=L,h.instanceMatrix.needsUpdate=!0;let se=0;for(let T of n.particles){if(se>=le)break;ye[se*3]=T.x,ye[se*3+1]=10+(1-T.life/T.max)*14,ye[se*3+2]=T.y;let X=ie(T.col),q=Math.max(0,T.life/T.max);Ce[se*3]=X.r*q,Ce[se*3+1]=X.g*q,Ce[se*3+2]=X.b*q,se++}de.setDrawRange(0,se),de.attributes.position.needsUpdate=!0,de.attributes.color.needsUpdate=!0,t.sweep(),i.sweep(),o.sweep(),a.sweep(),l.sweep(),c.sweep()}}}function _0(n,e){let i=new qt,s=new Float32Array(700*3),r=[];for(let g=0;g<700;g++)r.push({x:Math.random(),z:Math.random(),y:Math.random(),sp:.4+Math.random()*.8});i.setAttribute("position",new en(s,3));let o=new xi({color:12374764,size:5,transparent:!0,opacity:0,depthWrite:!1}),a=new zi(i,o);a.frustumCulled=!1,e.add(a);let l=[],c=()=>{if(l.length||!n.clouds)return;let g=new Ps(1,0);for(let y of n.clouds){let v=new Sn({color:16251644,emissive:9279908,flatShading:!0,transparent:!0,opacity:.5,depthWrite:!1}),b=new $e;y.puffs.forEach((E,D)=>{let _=new ge(g,v),M=E.r*.45*(y.heavy?1:.85);_.scale.set(M,M*.45,M*.72),_.position.set(E.dx*.55,D*37%17-6,E.dy*.55),_.rotation.y=D*1.7,b.add(_)}),e.add(b);let A=new ge(new yi(y.r*1.05,14),new Yt({map:nf(),transparent:!0,opacity:.5*y.op,depthWrite:!1}));A.rotation.x=-Math.PI/2,A.scale.set(1.35,1,1),e.add(A),l.push({cl:y,g:b,sh:A,matC:v})}},d=[],h=new yi(1,16),f=()=>{if(!(d.length||!n.fogBanks))for(let g of n.fogBanks){let y=new $e,v=[];g.puffs.forEach((b,A)=>{let E=new Yt({map:Xc(),color:13160664,transparent:!0,opacity:0,depthWrite:!1}),D=new ge(h,E);D.rotation.x=-Math.PI/2;let _=b.r*(.85+A%3*.18);D.scale.set(_,_*.8,1),D.position.set(b.dx*.6,2+A*4.5,b.dy*.6),D.renderOrder=3+A,y.add(D),v.push({s:D,r:_,phase:A*1.7+g.dens*5,spin:(A%2?1:-1)*(.015+A*.004)})}),e.add(y),d.push({f:g,group:y,puffs:v})}},u=new qt,p=new Float32Array(120);u.setAttribute("position",new en(p,3));let x=new xi({color:14221190,size:9,transparent:!0,opacity:.9,blending:wn,depthWrite:!1,sizeAttenuation:!0}),m=new zi(u,x);return m.frustumCulled=!1,e.add(m),{sync(g,y){c(),f();let v=n.weather,b=(y.cx+n.world.biomeRidge(y.cy))/ue.w,A=.085,E=Ai((b-(2/3-A))/(2*A)),D=Ai((b-(1/3-A))/(2*A))*(1-E),_=v.rain*(D+E);if(o.opacity=Math.min(.75,_*.8),o.color.setHex(E>D?16054524:12374764),o.size=E>D?7:4.5,_>.02){let N=E>D?.12:.55;for(let W=0;W<700;W++){let Y=r[W],U=(Y.y+n.t*Y.sp*N)%1;s[W*3]=y.cx+(Y.x-.5)*2*1700+n.wind*60*U,s[W*3+1]=700*(1-U),s[W*3+2]=y.cy+(Y.z-.5)*2*1700}i.attributes.position.needsUpdate=!0}let M=y.lightLevel();for(let{cl:C,g:N,sh:W,matC:Y}of l){N.position.set(C.x,560,C.y),W.position.set(C.x+64,2.5,C.y+86);let U=C.x-y.cx,H=C.y-y.cy,$=Math.sqrt(U*U+H*H),le=($<700?.22:$<1400?.22+($-700)/700*.28:.5)*C.op;Y.opacity+=(le-Y.opacity)*Math.min(1,g*4),Y.color.setScalar(.82+M*.18),W.material.opacity=(.32+.26*M)*C.op}for(let{f:C,group:N,puffs:W}of d){let Y=n.world.biomeAt(C.x,C.y)==="winter";N.position.set(C.x,0,C.y);let U=Y?0:Math.min(.16,v.fog*C.dens*.15);for(let H of W){H.s.material.opacity=U,H.s.rotation.z=H.phase+n.t*H.spin;let $=1+Math.sin(n.t*.27+H.phase)*.07;H.s.scale.set(H.r*$,H.r*.8*$,1)}}let S=0;if(n.fireflies){let C=1-y.lightLevel();x.opacity=.35+.5*C+.3*Math.min(1,v.fog);for(let N of n.fireflies){if(S>=40)break;n.world.biomeAt(N.x,N.y)==="jungle"&&(p[S*3]=N.x,p[S*3+1]=16+Math.sin(N.ph)*8,p[S*3+2]=N.y,S++)}u.attributes.position.needsUpdate=!0}u.setDrawRange(0,S)}}}function v0(n,e,t){let i=document.createElement("canvas");i.id="overlay",i.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:5",document.body.appendChild(i);let s=i.getContext("2d");function r(){i.width=e.VW,i.height=e.VH}r(),addEventListener("resize",r);let o=(d,h,f=0)=>t.worldToScreen(d,h,f);function a(d,h,f,u,p){s.strokeStyle=u,s.lineWidth=2,p&&s.setLineDash(p),s.beginPath();for(let x=0;x<=36;x++){let m=x/36*Math.PI*2,g=o(d+Math.cos(m)*f,h+Math.sin(m)*f);x?s.lineTo(g.x,g.y):s.moveTo(g.x,g.y)}s.stroke(),s.setLineDash([])}return{draw(){let d=e.VW,h=e.VH;s.clearRect(0,0,d,h);let f=n.t;s.font="bold 13px Trebuchet MS",s.textAlign="center";for(let u of e.godView?[]:n.floats){let p=o(u.ox,u.y,40);if(p.behind)continue;let x=Math.max(0,u.life/u.max);s.globalAlpha=x,s.fillStyle="#000",s.fillText(u.text,p.x+1,p.y-u.lift+1),s.fillStyle=u.col,s.fillText(u.text,p.x,p.y-u.lift)}if(s.globalAlpha=1,n.buildMode&&!e.godView){let m=function(){for(let g in x.cost)if((n.inv[g]||0)<x.cost[g])return!1;return!0},u=qr(n,n.cmd.mx,n.cmd.my),p=oh(n,Ye,n.buildPiece,u)&&m();s.fillStyle=p?"rgba(180,220,120,.4)":"rgba(210,80,60,.45)",s.strokeStyle=p?"#c4d66a":"#d2553c",s.lineWidth=2;let x=Qt[n.buildPiece];if(x.cat==="cell"){let g=u.gx*64,y=u.gy*64;s.beginPath(),[[0,0],[64,0],[64,64],[0,64]].forEach(([v,b],A)=>{let E=o(g+v,y+b);A?s.lineTo(E.x,E.y):s.moveTo(E.x,E.y)}),s.closePath(),s.fill(),s.stroke()}else{let g=Ft(u.key,{type:n.buildPiece,rot:n.buildRot&1}),y=o(g[0],g[1]),v=o(g[2],g[3]);s.lineWidth=8,s.globalAlpha=.75,s.beginPath(),s.moveTo(y.x,y.y),s.lineTo(v.x,v.y),s.stroke(),s.globalAlpha=1}}if(!e.godView&&!n.player.inCopter){for(let[u,p]of n.deploys){if(p.type!=="cupboard"||p.owner!==Ye)continue;let[x,m]=u.split(",").map(Number);a(x*64+32,m*64+32,zt,"rgba(126,200,80,0.3)",[10,8])}if(!n.shopOpen&&!n.storeOpen){let u=Math.floor(n.cmd.mx/64),p=Math.floor(n.cmd.my/64),x=n.deploys.get(u+","+p);x&&x.type==="turret"&&a(u*64+32,p*64+32,la[x.tier||1].range,"rgba(240,156,72,0.3)",[6,7]);let m=l(u,p);if(m){let g=o(m.x,m.y,50),y=Math.max(0,m.hp/m.max);s.fillStyle="rgba(0,0,0,.7)",s.fillRect(g.x-18,g.y-8,36,5),s.fillStyle=y>.5?"#7bbf4f":y>.25?"#d8b24a":"#c0432f",s.fillRect(g.x-18,g.y-8,36*y,5)}}}if(e.debugPaths){s.font="bold 10px Trebuchet MS";for(let u of n.units){if(u.dead||u.eliminated||u.flying||!t.inView(u.x,u.y,600))continue;let p=u.ally?"#7ec850":u.col;if(u.path&&u.pathI<u.path.length){s.strokeStyle=p,s.lineWidth=1.5,s.globalAlpha=.8,s.beginPath();let m=o(u.x,u.y);s.moveTo(m.x,m.y);for(let g=u.pathI;g<u.path.length;g++)m=o(u.path[g].x,u.path[g].y),s.lineTo(m.x,m.y);s.stroke(),s.globalAlpha=1}let x=o(u.x,u.y,56);s.fillStyle="#000",s.fillText(u.act||u.state,x.x+1,x.y+1),s.fillStyle=p,s.fillText(u.act||u.state,x.x,x.y)}}if(c(n.airdrop&&{x:n.airdrop.x,y:n.airdrop.fall<1?n.airdrop.gy:n.airdrop.y},"AIRDROP","#ffd76b","\u2708"),n.quarry){let u=n.teams.find(p=>p.owner===n.quarry.owner);c(n.quarry,"QUARRY",n.quarry.owner===Ye?"#7ec850":u?u.col:"#b9b39d","Q")}if(n.lockedCrate){let u=n.lockedCrate;c(u,u.started?"CRATE "+Math.ceil(u.t)+"s":"LOCKED CRATE","#ffb84a","C")}if(e.godView){s.font="bold 9px Trebuchet MS";for(let p of n.teams)for(let x of p.bases){if(x.dead)continue;let m=o(x.hx,x.hy);s.fillStyle=p.col,s.fillRect(m.x-6,m.y-6,12,12),s.fillStyle="#fff",s.fillText(String(p.id+1),m.x,m.y+3.5)}for(let p of n.units){if(p.dead||p.eliminated)continue;let x=o(p.x,p.y);s.fillStyle=p.ally?"#7ec850":p.col,s.beginPath(),s.arc(x.x,x.y,p.primary?3.4:2.4,0,7),s.fill()}for(let p of n.raids){let x=o(p.x,p.y);s.fillStyle=`rgba(255,82,56,${.35+.4*(p.t/60)})`,s.beginPath(),s.arc(x.x,x.y,7+3*Math.sin(f*6),0,7),s.fill()}if(n.deathMark){let p=o(n.deathMark.x,n.deathMark.y);s.fillStyle="#000",s.beginPath(),s.arc(p.x,p.y,8,0,7),s.fill(),s.fillStyle="#fff",s.beginPath(),s.arc(p.x,p.y-1,5,0,7),s.fill()}let u=o(n.player.x,n.player.y);s.strokeStyle="#7ec850",s.lineWidth=2.5,s.beginPath(),s.arc(u.x,u.y,11+3*Math.sin(f*6),0,7),s.stroke(),s.font="bold 11px Trebuchet MS",s.fillStyle="#7ec850",s.fillText("YOU",u.x,u.y-18),s.fillStyle="#d8d0ba",s.font="bold 14px Trebuchet MS",s.fillText("Click anywhere on the map to travel there",d/2,h-66)}else{let u=e.mouseSX,p=e.mouseSY;if(u!==void 0){s.strokeStyle="rgba(225,235,195,.9)",s.lineWidth=3,s.lineCap="round";for(let[x,m]of[[1,0],[-1,0],[0,1],[0,-1]])s.beginPath(),s.moveTo(u+x*6,p+m*6),s.lineTo(u+x*15,p+m*15),s.stroke()}}if(n.raidAlarm){let u=Math.min(1,n.raidAlarm.t/1.5);s.fillStyle=`rgba(180,30,20,${.14*u})`,s.fillRect(0,0,d,h),s.textAlign="center",s.font="bold 22px Trebuchet MS",s.fillStyle="rgba(0,0,0,.7)",s.fillText("BASE UNDER ATTACK",d/2+2,54),s.fillStyle=`rgba(255,${80+110*(.5+.5*Math.sin(f*8))},55,${u})`,s.fillText("BASE UNDER ATTACK",d/2,52)}n.player.hurt>0&&(s.fillStyle=`rgba(150,28,18,${n.player.hurt*.4})`,s.fillRect(0,0,d,h)),n.player.dead&&(s.fillStyle="rgba(10,6,4,.55)",s.fillRect(0,0,d,h),s.textAlign="center",s.fillStyle="#e6d9b8",s.font="bold 44px Trebuchet MS",s.fillText("YOU DIED",d/2,h/2-4),s.fillStyle="#b9a06f",s.font="15px Trebuchet MS",s.fillText("respawning\u2026",d/2,h/2+24)),s.textAlign="left",s.font="bold 14px Trebuchet MS",n.elims.forEach((u,p)=>{let x=Math.min(1,u.t/3);s.globalAlpha=x,s.fillStyle="rgba(0,0,0,.5)",s.fillRect(d/2-130,92+p*24,264,20),s.fillStyle="#e2664a",s.fillText(u.text,d/2-122,106+p*24)}),s.globalAlpha=1,s.textAlign="center"}};function l(d,h){let f=n.deploys.get(d+","+h);if(f)return{x:d*64+32,y:h*64+32,hp:f.hp,max:f.max};let u=n.structures.get(d+","+h);if(u)return{x:d*64+32,y:h*64+32,hp:u.hp,max:u.max};for(let p of["V,"+d+","+h,"V,"+(d+1)+","+h,"H,"+d+","+h,"H,"+d+","+(h+1)]){let x=n.walls.get(p);if(!x)continue;let m=Ft(p,x),g=(m[0]+m[2])/2,y=(m[1]+m[3])/2;if(Math.hypot(n.cmd.mx-g,n.cmd.my-y)<16)return{x:g,y,hp:x.hp,max:x.max}}return null}function c(d,h,f,u){if(!d)return;let p=o(d.x,d.y),x=e.VW,m=e.VH;if(s.textAlign="center",!p.behind&&p.x>0&&p.x<x&&p.y>0&&p.y<m){if(e.godView)return;s.font="bold 11px Trebuchet MS",s.fillStyle="rgba(0,0,0,.7)",s.fillText(h,p.x+1,p.y-49),s.fillStyle=f,s.fillText(h,p.x,p.y-50)}else{let g=Math.max(54,Math.min(x-54,p.x)),y=Math.max(54,Math.min(m-54,p.behind?m-54:p.y));s.fillStyle=f,s.globalAlpha=.92,s.beginPath(),s.arc(g,y,14,0,7),s.fill(),s.globalAlpha=1,s.fillStyle="#1c1812",s.font="bold 13px Trebuchet MS",s.fillText(u,g,y+4.5)}}}function b0(n,e,t,i){let s={},r=e.canvas,o=(c,d)=>{let h=t.screenToWorld(c,d);n.cmd.mx=h.x,n.cmd.my=h.y,e.mouseSX=c,e.mouseSY=d};addEventListener("keydown",c=>{let d=c.key.toLowerCase();if(n.storeOpen){(d==="escape"||d==="e")&&(n.storeOpen=null,i.closeModals()),c.preventDefault();return}if(n.shopOpen){(d==="escape"||d==="e")&&(n.shopOpen=!1,i.closeModals()),c.preventDefault();return}s[d]=!0,a(),d==="e"&&bu(n),d==="g"&&!n.player.inCopter&&Ru(n),d==="q"&&(n.buildMode?M0(n,1):n.player.inCopter||Au(n)),d==="t"&&!n.buildMode&&!n.player.inCopter&&gh(n,n.cmd.mx,n.cmd.my),/^Digit[1-9]$|^Numpad[1-9]$/.test(c.code)&&!n.player.inCopter&&Xr(n,+c.code.slice(-1)-1),d==="b"&&!n.player.inCopter&&Xr(n,n.buildMode?0:5),d==="r"&&(n.buildMode?n.buildRot=(n.buildRot+1)%4:yh(n)),d==="u"&&Eu(n),["w","a","s","d"," "].includes(d)&&c.preventDefault()}),addEventListener("keyup",c=>{s[c.key.toLowerCase()]=!1,a()}),addEventListener("blur",()=>{for(let c in s)s[c]=!1;a(),n.cmd.fireHeld=!1});function a(){let c=(s.d?1:0)-(s.a?1:0),d=(s.s?1:0)-(s.w?1:0),h=t.orbit||0,f=c*Math.cos(h)+d*Math.sin(h),u=-c*Math.sin(h)+d*Math.cos(h);n.cmd.right=f>.38,n.cmd.left=f<-.38,n.cmd.down=u>.38,n.cmd.up=u<-.38,n.cmd.run=!!s.shift}addEventListener("wheel",c=>{if(n.buildMode&&!n.shopOpen&&!n.storeOpen){M0(n,c.deltaY>0?1:-1),c.preventDefault();return}!e.godView&&!n.shopOpen&&!n.storeOpen&&t.zoomFactor!==void 0&&(t.zoomFactor=it(t.zoomFactor*(1+c.deltaY*.0011),.55,1.9),c.preventDefault())},{passive:!1});let l=null;r.addEventListener("mousedown",c=>{c.button===1&&!e.godView&&(l={x:c.clientX,start:t.orbit||0},c.preventDefault())}),addEventListener("mousemove",c=>{l&&t.orbit!==void 0&&(t.orbit=l.start+(c.clientX-l.x)*.006,a())}),addEventListener("mouseup",c=>{c.button===1&&(l=null)}),r.addEventListener("auxclick",c=>{c.button===1&&c.preventDefault()}),r.addEventListener("mousemove",c=>{let d=r.getBoundingClientRect();o(c.clientX-d.left,c.clientY-d.top)}),r.addEventListener("mousedown",c=>{let d=r.getBoundingClientRect();if(o(c.clientX-d.left,c.clientY-d.top),c.button===0){if(e.godView){cb(n,e);return}if(n.cmd.fireHeld=!0,n.buildMode)wu(n);else if(!n.shopOpen&&!n.storeOpen){let h=n.slot;ba(n)}}else c.button===2&&n.buildMode&&Tu(n)}),addEventListener("mouseup",()=>{n.cmd.fireHeld=!1}),r.addEventListener("contextmenu",c=>c.preventDefault()),setInterval(()=>{e.mouseSX!==void 0&&o(e.mouseSX,e.mouseSY)},50)}function M0(n,e){let t=gs.indexOf(n.buildPiece);n.buildPiece=gs[(t+e+gs.length)%gs.length]}function cb(n,e){let t=n.cmd.mx,i=n.cmd.my;t=it(t,jt,13824-jt),i=it(i,jt,9216-jt);for(let s=0;s<24&&Tt(n,t,i,jt);s++)t+=(Math.random()*2-1)*40,i+=(Math.random()*2-1)*40;n.player.x=t,n.player.y=i,n.player.inCopter=!1,e.godView=!1,document.getElementById("mapbtn").classList.remove("on"),document.getElementById("mapbtn").textContent="Map View",n.tip={text:"arrived",t:1.2}}var hb={tool:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20l7-7"/><path d="M14 4l6 6-5 5-6-6z" fill="currentColor"/></svg>',pistol:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 8h16v4h-6l-1 5h-4l1-5H6a3 3 0 0 1-3-3z"/></svg>',rifle:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1 11h18l4-2v3l-4 1h-5l-1 5h-3l1-5H1z"/></svg>',minigun:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="7" width="14" height="3"/><rect x="2" y="11" width="14" height="3"/><rect x="2" y="15" width="14" height="3"/><rect x="15" y="6" width="6" height="13" rx="2"/></svg>',rocket:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 10h13l5 2-5 2H2z"/><path d="M20 8l3 4-3 4z"/></svg>',build:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21l4-12 6 6-10 6z" fill="currentColor"/><path d="M13 5l6 6"/></svg>',sniper:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="1" y="10" width="20" height="3"/><rect x="6" y="6" width="6" height="3" rx="1"/><path d="M21 9l2 2-2 2z"/></svg>',shotgun:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1 10h17v5H8l-2 4H3l2-4H1z"/></svg>',hmg:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="1" y="9" width="19" height="5"/><rect x="6" y="14" width="6" height="6"/><path d="M20 9l3 2.5-3 2.5z"/></svg>'},db=[["Tool","tool"],["Pistol","pistol"],["Rifle","rifle"],["Minigun","minigun"],["Rocket","rocket"],["Build","build"],["Sniper","sniper"],["Shotgun","shotgun"],["HMG","hmg"]],fb={1:"pistol",2:"rifle",3:"minigun",4:"rocket",6:"sniper",7:"shotgun",8:"hmg"},ub={floor:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="16" height="16" rx="2"/></svg>',wall:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="10" y="3" width="4" height="18" rx="1"/></svg>',door:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="9" y="3" width="6" height="18" rx="1"/><circle cx="13" cy="12" r="1.4" fill="#15130e"/></svg>',turret:'<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="13" r="6"/><rect x="12" y="11" width="10" height="4" rx="1"/></svg>',cupboard:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="3" width="14" height="18" rx="2"/><rect x="11.4" y="5" width="1.2" height="14" fill="#15130e"/></svg>'};function w0(n,e){let t=p=>document.getElementById(p),i=t("hotbar");db.forEach(([p,x],m)=>{let g=document.createElement("div");g.className="slot",g.innerHTML=`<span class="key">${m+1}</span>${hb[x]}<span class="nm">${p}</span>`,g.addEventListener("mousedown",y=>{y.stopPropagation(),Xr(n,m)}),i.appendChild(g)});let s=t("bpieces");for(let p of gs){let x=document.createElement("div");x.className="bpiece",x.dataset.piece=p;let m=Object.entries(Qt[p].cost).map(([g,y])=>y+" "+g).join(" + ");x.innerHTML=`${ub[p]}${Qt[p].name}<br><span style="opacity:.7">${m}</span>`,x.addEventListener("mousedown",g=>{g.stopPropagation(),n.buildPiece=p}),s.appendChild(x)}let r=(p,x)=>t(p).addEventListener("mousedown",m=>{m.stopPropagation(),x(t(p))});r("mapbtn",p=>{e.godView=!e.godView,p.classList.toggle("on",e.godView),p.textContent=e.godView?"Exit Map":"Map View"}),r("ghostbtn",p=>{n.ghost=!n.ghost,p.classList.toggle("on",n.ghost),p.textContent=n.ghost?"Ghost: ON":"Ghost"}),r("rocketbtn",p=>{n.rapidRockets=!n.rapidRockets,p.classList.toggle("on",n.rapidRockets),p.textContent=n.rapidRockets?"Rockets: ON":"Rapid Rockets"}),r("refillbtn",()=>window.__refillAll()),r("boosthardbtn",()=>window.__boostHard()),r("debugbtn",p=>{e.debugPaths=!e.debugPaths,p.classList.toggle("on",e.debugPaths),p.textContent=e.debugPaths?"Debug: ON":"Debug paths"}),t("ghostbtn").classList.add("on"),t("ghostbtn").textContent="Ghost: ON",t("helpToggle").addEventListener("click",()=>{let p=t("help");p.classList.toggle("min"),t("helpToggle").textContent=p.classList.contains("min")?"show":"hide"}),document.querySelectorAll(".spdbtn").forEach(p=>{p.addEventListener("mousedown",x=>{x.stopPropagation(),e.speed=+p.dataset.spd,document.querySelectorAll(".spdbtn").forEach(m=>m.classList.toggle("on",m===p))})});let o=0,a=null,l=!1;function c(){let p=t("shop"),x='<h3>Trade Shop</h3><div style="margin-bottom:8px">Scrap: <b id="shop-scrap">0</b></div><div class="cols"><div class="col"><h5>SELL \u2192 SCRAP</h5>';Vt.trades.forEach(([m,g,y],v)=>{x+=`<div class="trow"><span>${g} ${m} \u2192 ${y} scrap</span><button data-trade="${v}">Sell</button></div>`}),x+='</div><div class="col"><h5>BUY WEAPONS + GEAR</h5>';for(let m in Vt.buys)x+=`<div class="trow"><span id="shopown-${m}">${ln[m].name} <small>+${Vt.buys[m].ammo} ammo</small></span><button data-buy="${m}">${Vt.buys[m].cost} scrap</button></div>`;x+=`<div class="trow"><span>Jackhammer <small>3\xD7 gather</small></span><button data-misc="jackhammer">${Vt.jackhammer} scrap</button></div>`,x+=`<div class="trow"><span>Rifle laser sight</span><button data-misc="laser">${Vt.laser} scrap</button></div>`,x+=`<div class="trow"><span>Wood fence (G)</span><button data-misc="fence">${Vt.fenceWood} wood</button></div>`,x+=`<div class="trow"><span>Grenade (Q)</span><button data-misc="grenade">${Vt.grenade} scrap</button></div>`,x+=`<div class="trow"><span>Supply signal (T)</span><button data-misc="signal">${Vt.signal} scrap</button></div>`,x+=`<div class="trow"><span>+10 HQM</span><button data-misc="hqm">${Vt.hqm.cost} scrap</button></div>`,x+='<div class="trow"><span id="fm-lbl">Facemask</span><button data-misc="facemask">buy</button></div>',x+='<div class="trow"><span id="ba-lbl">Body armor</span><button data-misc="bodyArmor">buy</button></div>',x+=`<div class="trow"><span>Hire worker</span><button data-misc="worker">${Vt.worker} scrap</button></div>`,x+='</div></div><button class="close">Close (E / Esc)</button>',p.innerHTML=x,p.querySelectorAll("button").forEach(m=>{m.addEventListener("mousedown",g=>g.stopPropagation()),m.addEventListener("click",()=>{m.dataset.trade!==void 0?Cu(n,+m.dataset.trade):m.dataset.buy?Su(n,m.dataset.buy):m.dataset.misc?Iu(n,m.dataset.misc):(n.shopOpen=!1,p.classList.add("hidden")),d()})}),d()}function d(){let p=t("shop-scrap");p&&(p.textContent=n.inv.scrap|0);let x=t("fm-lbl");if(x){let g=n.player.facemask+1;x.textContent=g<=3?`Facemask L${g} (${xs.cost[g]} scrap)`:"Facemask MAX"}let m=t("ba-lbl");if(m){let g=n.player.bodyArmor+1;m.textContent=g<=3?`Body armor L${g} (${xs.cost[g]} scrap)`:"Body armor MAX"}for(let g in Vt.buys){let y=t("shopown-"+g);y&&(y.style.color=n.owned[g]?"var(--accent2)":"var(--ink)")}}function h(p){let x=t("store"),m=n.deploys.get(p);if(!m)return;let g=`<h3>${m.type==="cupboard"?"Tool Cupboard":"Storage"}</h3>`;for(let y of["wood","stone","metal","scrap"])g+=`<div class="strow"><span class="ic ${y}"></span>
        <button data-mv="${y},-9999">\u25C0 all</button><button data-mv="${y},-0.1">\u25C0 10%</button>
        <span class="cnt"><b id="st-${y}">0</b> store \xB7 bag <b id="inv-${y}">0</b></span>
        <button data-mv="${y},0.1">10% \u25B6</button><button data-mv="${y},9999">all \u25B6</button>
        <span></span></div>`;g+='<button class="close">Close (E / Esc)</button>',x.innerHTML=g,x.querySelectorAll("button").forEach(y=>{y.addEventListener("mousedown",v=>v.stopPropagation()),y.addEventListener("click",()=>{if(y.dataset.mv){let[v,b]=y.dataset.mv.split(",");Pu(n,v,+b),f()}else n.storeOpen=null,x.classList.add("hidden")})}),f()}function f(){let p=n.deploys.get(n.storeOpen);if(!(!p||!p.store))for(let x of["wood","stone","metal","scrap"]){let m=t("st-"+x),g=t("inv-"+x);m&&(m.textContent=p.store[x]|0),g&&(g.textContent=n.inv[x]|0)}}return{closeModals(){t("store").classList.add("hidden"),t("shop").classList.add("hidden")},update(){t("r-wood").textContent=n.inv.wood|0,t("r-stone").textContent=n.inv.stone|0,t("r-metal").textContent=n.inv.metal|0,t("r-scrap").textContent=n.inv.scrap|0;let p=Math.floor(n.t/60),x=Math.floor(n.t%60);t("playtime").textContent=p+":"+String(x).padStart(2,"0");let m=n.player,g=Math.max(0,m.health/m.maxhp),y=t("hpfill");y.style.width=g*100+"%",y.style.background=g>.5?"linear-gradient(180deg,#9ccb5a,#6fae3e)":g>.25?"linear-gradient(180deg,#e0c14e,#c9962f)":"linear-gradient(180deg,#d76a4a,#b23b2a)",t("hptxt").textContent=Math.ceil(Math.max(0,m.health));let v=i.children;for(let E=0;E<v.length;E++){v[E].classList.toggle("sel",n.slot===E);let D=fb[E];v[E].classList.toggle("dim",!!D&&!n.owned[D])}if(t("buildmenu").classList.toggle("hidden",!n.buildMode),n.buildMode)for(let E of s.children){E.classList.toggle("sel",E.dataset.piece===n.buildPiece);let D=!0;for(let _ in Qt[E.dataset.piece].cost)(n.inv[_]||0)<Qt[E.dataset.piece].cost[_]&&(D=!1);E.classList.toggle("cant",!D)}let b=Wr(n);if(t("ammo").classList.toggle("hidden",!b),b){let E=n.weapons[b];t("ammo-mag").innerHTML=`${E.ammo} <small>/ ${E.reserve}</small>`;let D=b==="minigun"&&E.spin>0&&E.spin<ln.minigun.windup;t("ammo-rl").textContent=E.reloading>0?"RELOADING":D?"SPINNING\u2026":E.ammo===0?"PRESS R":""}let A=t("tip");n.tip?(A.textContent=n.tip.text,A.classList.add("show")):A.classList.remove("show"),n.shopOpen!==l?(l=n.shopOpen,t("shop").classList.toggle("hidden",!n.shopOpen),n.shopOpen&&c()):n.shopOpen&&n.tick%30===0&&d(),n.storeOpen!==a?(a=n.storeOpen,t("store").classList.toggle("hidden",!n.storeOpen),n.storeOpen&&h(n.storeOpen)):n.storeOpen&&n.tick%30===0&&f(),n.t-o>.4&&(o=n.t,u())}};function u(){let p=[];p.push({id:Ye,name:"You",col:"#c4d66a",alive:!n.player.dead,you:!0,kills:n.playerKills,scrap:n.inv.scrap|0,res:n.inv.wood+n.inv.stone+n.inv.metal|0,tier:""});for(let y of n.teams){let v=0,b=0,A=0,E=!1;for(let _ of n.units)_.owner===y.owner&&(v+=_.kills,b+=_.scrap,A+=_.inv.wood+_.inv.stone+_.inv.metal,_.eliminated||(E=!0));let D=y.bases.find(_=>!_.dead);if(D){let _=n.deploys.get(D.tcKey);_&&_.store&&(A+=_.store.wood+_.store.stone+_.store.metal,b+=_.store.scrap)}p.push({id:y.id,name:"Base "+(y.id+1),col:y.col,alive:E&&!y.eliminated,kills:v,scrap:b|0,res:A|0,tier:y.hard?"HARD":y.weak?"EASY":""})}let x=null,m=0;for(let y of p)!y.you&&y.alive&&y.kills>m&&(m=y.kills,x=y.id);p.sort((y,v)=>v.scrap-y.scrap||v.kills-y.kills||v.res-y.res);let g=y=>y>=1e4?(y/1e3|0)+"k":y>=1e3?(y/1e3).toFixed(1)+"k":y;t("lb-rows").innerHTML=p.map(y=>`
      <div class="lbr ${y.alive?"":"dead"} ${y.id===x?"lb-bounty":""}">
        <span class="dot" style="background:${y.col}"></span>
        <span class="nm">${y.id===x?"\u2605 ":""}${y.name}</span>
        ${y.tier?`<span class="pill ${y.tier.toLowerCase()}">${y.tier}</span>`:""}
        <span>${y.kills}</span><span style="color:var(--ink-dim)">${g(y.scrap)}</span><span style="color:var(--ink-dim)">${g(y.res)}</span>
      </div>`).join("")}}var T0=Math.random()*1e9>>>0,Ot=nh(T0);Ot.ghost=!0;function pb(){let e={canvas:document.getElementById("game"),VW:innerWidth,VH:innerHeight,speed:1,godView:!1,debugPaths:!1},t=o0(Ot,e),i=l0(Ot,t.scene),s=f0(Ot,t.scene),r=y0(Ot,t.scene),o=_0(Ot,t.scene),a=v0(Ot,e,t),l=w0(Ot,e);b0(Ot,e,t,l),addEventListener("resize",()=>{e.VW=innerWidth,e.VH=innerHeight,t.resize()});let c=document.getElementById("seedval");c&&(c.textContent=String(T0)),window.__refillAll=()=>{for(let u in Ot.owned)Ot.owned[u]=!0;for(let u in Ot.weapons){let p=Ot.weapons[u];p.reserve=Math.max(p.reserve,u==="rocket"?80:u==="sniper"?60:u==="shotgun"?80:600),p.ammo=ln[u].magSize,p.reloading=0}for(let u of["wood","stone","metal"])Ot.inv[u]=Math.max(Ot.inv[u],1e4);Ot.inv.scrap=Math.max(Ot.inv.scrap,500),Ot.inv.fence=Math.max(Ot.inv.fence,10),Ot.tip={text:"Refilled ammo + resources",t:1.4}},window.__boostHard=()=>{let u=0;for(let p of Ot.units)!p.hard||p.dead||p.eliminated||(u++,p.hp=p.max,p.rockets=Math.max(p.rockets,12),p.satchels=Math.max(p.satchels,6),p.grenades=Math.max(p.grenades,4),p.hqm=Math.max(p.hqm,80),p.gun=p.shotgun?"shotgun":"rifle",p.facemask=Math.max(p.facemask,2),p.bodyArmor=Math.max(p.bodyArmor,3),p.jack=!0);for(let p of Ot.teams){if(!p.hard||p.eliminated)continue;let x=p.bases.find(m=>!m.dead);if(x){let m=Ot.deploys.get(x.tcKey);m&&m.store&&(m.store.wood=Math.max(m.store.wood,3e3),m.store.stone=Math.max(m.store.stone,1500),m.store.metal=Math.max(m.store.metal,1500),m.store.scrap=Math.max(m.store.scrap,600))}}Ot.tip={text:"Boosted "+u+" hard units",t:1.4}};let d=performance.now(),h=0;function f(u){requestAnimationFrame(f);let p=Math.min(.1,(u-d)/1e3);d=u,h+=p*e.speed;let x=0,m=Math.max(4,e.speed*4);for(;h>=Pr&&x<m;)rp(Ot),h-=Pr,x++;x>=m&&(h=0),t.update(p),i.sync(p,Ot,t),s.sync(p),r.sync(p,t),o.sync(p,t),t.render(),a.draw(),l.update(),Ot.events.length=0}requestAnimationFrame(f)}try{pb()}catch(n){console.error("SCRAPLAND boot failed: WebGL unavailable \u2014",n&&n.message);let e=document.createElement("div");e.style.cssText="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;color:#ddd5c2;font:16px Trebuchet MS;background:#14120e;z-index:99",e.textContent="SCRAPLAND needs WebGL \u2014 please enable hardware acceleration and reload.",document.body&&document.body.appendChild(e)}})();
