(()=>{var xe={w:13824,h:9216},jt=16,oa=64,Ye="p1",Fr=1/60,ln={pistol:{name:"Pistol",magSize:12,reserve:96,dmg:14,rof:.22,spread:.03,speed:1150,auto:!1,reloadT:1,kick:6,range:1.6},rifle:{name:"Rifle",magSize:30,reserve:180,dmg:11,rof:.09,spread:.05,speed:1500,auto:!0,reloadT:1.6,kick:4,range:2.4},minigun:{name:"Minigun",magSize:200,reserve:200,dmg:6,rof:.045,spread:.09,speed:1300,auto:!0,reloadT:4.5,kick:2,range:1.8,windup:2.6},rocket:{name:"Rocket",magSize:1,reserve:50,dmg:55,rof:.9,spread:.012,speed:560,auto:!1,reloadT:1.9,kick:16,range:2.8,rocket:!0,splash:96,splashDmg:150,structDmg:55},sniper:{name:"Sniper",magSize:1,reserve:30,dmg:60,rof:1,spread:.004,speed:1180,auto:!1,reloadT:1.8,kick:14,range:3.4,locked:!0},shotgun:{name:"Shotgun",magSize:6,reserve:48,dmg:9,rof:.3,spread:.17,speed:1050,auto:!0,reloadT:1.5,kick:9,range:1.1,pellets:7},hmg:{name:"HMG",magSize:100,reserve:300,dmg:15,rof:.05,spread:.11,speed:1500,auto:!0,reloadT:3,kick:9,range:2.4,locked:!0,tracer:"hmg"}};var Ws={splash:120,splashDmg:120,structDmg:22,fuse:2},Qt={floor:{name:"Floor",cost:{wood:5},cat:"cell",hp:100,found:!0,up:!0},trifloor:{name:"Tri-Floor",cost:{wood:4},cat:"cell",hp:90,found:!0,up:!0,tri:!0,hidden:!0},wall:{name:"Wall",cost:{wood:10},cat:"edge",hp:100,up:!0},triangle:{name:"Triangle",cost:{wood:8},cat:"diag",hp:100,up:!0,hidden:!0},door:{name:"Door",cost:{wood:10,metal:5},cat:"edge",hp:50,up:!0,mMul:2,door:!0},box:{name:"Box",cost:{wood:15},cat:"cell",hp:90,box:!0,store:!0,hidden:!0},turret:{name:"Turret",cost:{wood:40,metal:30},cat:"cell",hp:150,solid:!0,turret:!0},cupboard:{name:"Cupboard",cost:{wood:60,metal:25},cat:"cell",hp:300,solid:!0,tc:!0,store:!0}},Ai=["floor","wall","door","turret","cupboard"];var Jc=10,yd={wood:{to:"stone",cost:{stone:15}},stone:{to:"metal",cost:{metal:20}},metal:{to:"armored",cost:{hqm:8}}};function Ri(n,e){let t=n.mMul||4;return e==="armored"?n.hp*t*2:e==="metal"?n.hp*t:e==="stone"?Math.round(n.hp*(1+t)/2):n.hp}var Ht=900,Ki=900,Or=.0075,_d=30,aa=10,vd=600,jc=3600,Md=1200,Br=240,Tt=620,Qc=620,eh=50,$i={hp:200,len:46,half:23,life:60},bd=7,la=1.9,wd=.65,_s={head:[0,.25,.45,.62],body:[0,.18,.34,.5],cost:[0,16,34,60],headCol:[null,"#cdbb92","#9aabb8","#7c8ec9"],bodyCol:[null,"#857748","#959ca3","#5d7a9b"]},th=(n,e)=>_s[e][H0(n)],H0=n=>n<0?0:n>3?3:n|0,st={speed:560,boost:980,accel:360,drag:.55,dragIdle:.85,turn:2.1,r:30,hp:260,grav:180,liftMax:268,liftExp:1.6,spinUp:.6,spinDown:.9,rpmDecay:.12,pitchK:.004,rollK:.002,yawK:3.2,bank:1,stab:.5,angDrag:.1,linDrag:.78,altDrag:.45,ceiling:470,safeAlt:26},Zt={speed:455,accel:300,drag:.55,turn:1.6,r:46,seats:4,cost:40,hp:360},ca={1:{name:"Pistol",dmg:14,rof:.5,speed:1e3,spread:.05,mag:12,reload:1.6,range:340,lead:0},2:{name:"Rifle",dmg:11,rof:.12,speed:1500,spread:.05,mag:30,reload:2,range:380,lead:.55},3:{name:"Sniper",dmg:60,rof:1.3,speed:1900,spread:0,mag:1,reload:2.4,range:460,lead:1}},Td={2:50,3:250},nh=50,vs={boar:{hp:35,r:17,walk:62,chase:128,dmg:7,atk:.8,detect:300,lose:560,loot:["wood",1,3]},wolf:{hp:62,r:15,walk:84,chase:190,dmg:12,atk:.6,detect:430,lose:720,loot:["metal",1,2],biome:"jungle",pack:!0},bear:{hp:165,r:25,walk:54,chase:132,dmg:24,atk:1,detect:360,lose:660,loot:["metal",3,6],biome:"winter"},alligator:{hp:140,r:22,walk:48,chase:158,dmg:22,atk:.9,detect:340,lose:620,loot:["metal",2,5],biome:"jungle",lake:!0},snake:{hp:42,r:11,walk:78,chase:214,dmg:14,atk:.5,detect:380,lose:640,loot:["metal",1,2],biome:"desert"},scorpion:{hp:28,r:12,walk:74,chase:158,dmg:6,atk:.7,detect:300,lose:540,loot:["metal",1,2],biome:"desert",poison:!0},polarbear:{hp:205,r:27,walk:58,chase:142,dmg:28,atk:1,detect:380,lose:690,loot:["metal",4,7],biome:"winter"}},Ed=[["boar",12],["wolf",7],["bear",6],["alligator",8],["snake",9],["scorpion",8],["polarbear",5]],Vt={trades:[["wood",100,6],["stone",100,9],["metal",50,10]],buys:{pistol:{ammo:48,cost:6},rifle:{ammo:90,cost:10},minigun:{ammo:200,cost:16},rocket:{ammo:2,cost:24},shotgun:{ammo:24,cost:9},sniper:{ammo:5,cost:24},hmg:{ammo:150,cost:20}},jackhammer:30,laser:14,fenceWood:10,grenade:8,signal:60,hqm:{cost:12,amt:10},worker:100},qt={hp:64,r:14,dmg:8,rof:.5,range:430,detect:540,speed:118,leash:170,bspeed:1200,spread:.06},Ad=[{type:"gas",name:"Gas Station",fx:.26,fy:.3,crates:4,barrels:12,guards:3},{type:"junk",name:"Junkyard",fx:.75,fy:.32,crates:5,barrels:7,guards:3},{type:"warehouse",name:"Abandoned Warehouse",fx:.5,fy:.74,crates:7,barrels:7,guards:4}],$n={capR:240,capT:8,payEvery:6,pay:{stone:10,metal:6,scrap:4}},dn={vhp:1100,ghp:80,speed:120,trange:560,tdmg:13,trof:.34,gdmg:9,grof:.5,grange:440,gspeed:120,leash:300,bspeed:1300},Jn={hp:450,speed:330,orbitR:420,orbitT:22,strafeR:760,flakR:720},Xs={hackT:60,r:150},yt={TEAM_COUNT:7,COLS:["#b85b5b","#5b8bb8","#b89b5b","#7bb85b","#9b5bb8","#5bb8a8","#b8765b","#8b8b5b","#b85b9b","#6b78b8"],BOT_SPEED:160,ROCKET_MIN:230,STRAFE_FLIP:.9,REACT_R:640,WORKER_COST:50,GATHER_LOAD:300,MINICOPTER_COST:30,SIGNAL_COST:60,HIRE_CAP_HARD:16,HIRE_CAP:8,RESPAWN_T:15,TRIPWIRE:2600,RAID_DEF_W:.55,RAID_TUR_W:.3,ENDGAME_T:420,ENDGAME_BASES:6};function Rd(n){let e=n>>>0||1,t=()=>{e|=0,e=e+1831565813|0;let i=Math.imul(e^e>>>15,1|e);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296};return{next:t,rand:(i=0,s=1)=>i+t()*(s-i),randi:(i,s)=>Math.floor(i+t()*(s-i+1)),chance:i=>t()<i,pick:i=>i[Math.floor(t()*i.length)],angle:()=>t()*Math.PI*2}}var Ke=Math.PI*2,et=(n,e,t)=>n<e?e:n>t?t:n,qs=(n,e,t)=>n+(e-n)*t,ve=(n,e,t,i)=>{let s=t-n,r=i-e;return s*s+r*r},te=(n,e,t,i)=>Math.sqrt(ve(n,e,t,i)),Ci=n=>(n=et(n,0,1),n*n*(3-2*n));function z0(n,e){let t=(e-n)%Ke;return t>Math.PI&&(t-=Ke),t<-Math.PI&&(t+=Ke),t}function Si(n,e,t){let i=z0(n,e);return Math.abs(i)<=t?e:n+Math.sign(i)*t}var tt=(n,e)=>n+","+e,Be=(n,e,t)=>n+","+e+","+t;function At(n,e,t,i,s,r){let o=s-t,a=r-i,c=o*o+a*a;if(c===0)return te(n,e,t,i);let l=((n-t)*o+(e-i)*a)/c;return l=et(l,0,1),te(n,e,t+l*o,i+l*a)}function oi(n,e,t,i,s,r,o,a){let c=ha(s,r,o,a,n,e),l=ha(s,r,o,a,t,i),f=ha(n,e,t,i,s,r),h=ha(n,e,t,i,o,a);return(c>0&&l<0||c<0&&l>0)&&(f>0&&h<0||f<0&&h>0)}function ha(n,e,t,i,s,r){return(t-n)*(r-e)-(i-e)*(s-n)}function Cd(n,e,t,i,s,r,o,a){let c=t-n,l=i-e,f=o-s,h=a-r,d=c*h-l*f;if(Math.abs(d)<1e-9)return null;let u=((s-n)*h-(r-e)*f)/d,p=((s-n)*l-(r-e)*c)/d;return u<0||u>1||p<0||p>1?null:{x:n+u*c,y:e+u*l}}function Ji(n,e){let t=n*374761393+e*668265263|0;return t=t^t>>13|0,t=Math.imul(t,1274126177),((t^t>>16)>>>0)/4294967296}function Pd(n){let e=n.rng,t=xe.w,i=xe.h,s=200,r=t/2,o=i/2,a=.47*t,c=.47*i,l=[];for(let se=0;se<5;se++)l.push({f:se+2,w:1/(se+1.2),p:e.rand(0,Ke)});let f=[],h=1e9,d=-1e9;for(let se=0;se<s;se++){let re=se/s*Ke,F=0;for(let ne of l)F+=Math.sin(re*ne.f+ne.p)*ne.w;f.push(F),h=Math.min(h,F),d=Math.max(d,F)}let u=f.map(se=>1-.22*(.5-.5*((se-h)/(d-h)*2-1))),p={cx:r,cy:o,rx:a,ry:c,N:s,rad:u},x=se=>{let re=se%Ke;re<0&&(re+=Ke);let F=re/Ke*s,ne=Math.floor(F)%s,oe=(ne+1)%s;return u[ne]+(u[oe]-u[ne])*(F-ne)},m=(se,re)=>{let F=(se-r)/a,ne=(re-o)/c,oe=Math.sqrt(F*F+ne*ne);return x(Math.atan2(ne,F))-oe},g=(se,re)=>m(se,re)>0,y=[];for(let se=0;se<s;se++){let re=se/s*Ke;y.push({x:r+Math.cos(re)*u[se]*a,y:o+Math.sin(re)*u[se]*c})}let _=se=>se===void 0?0:(Math.sin(se*.0016+1.7)*.62+Math.sin(se*.0043+4.2)*.38)*t*.055,M=(se,re)=>{let F=(se+_(re))/t;return F<1/3?"desert":F<2/3?"jungle":"winter"},E={x:t/2,y:i/2,r:46},T=[];for(let se=0;se<5;se++){let re=se%2===0,F=re?t:i,ne=re?i:t,oe=e.rand(.14,.86)*ne,O=e.rand(260,820),W=e.rand(1.4,3.2),de=e.rand(0,Ke),k=[];for(let ye=0;ye<=30;ye++){let C=ye/30,Q=et(oe+Math.sin(C*W*Ke+de)*O,60,ne-60);k.push(re?{x:C*F,y:Q}:{x:Q,y:C*F})}let H=e.rand(26,42),$=[],ee=e.chance(.5)?1:-1;for(let ye=0;ye<k.length;ye+=2){let C=I(k,ye);$.push({x:et(k[ye].x+Math.cos(C+Math.PI/2)*ee*(H/2+24),20,t-20),y:et(k[ye].y+Math.sin(C+Math.PI/2)*ee*(H/2+24),20,i-20)})}T.push({pts:k,w:H,poles:$,fade:k.map(()=>1)})}function I(se,re){let F=se[Math.max(0,re-1)],ne=se[Math.min(se.length-1,re+1)];return Math.atan2(ne.y-F.y,ne.x-F.x)}let v=(se,re)=>{let F=se,ne=re;for(let oe=0;oe<7;oe++){let O={x:(F.x+ne.x)/2,y:(F.y+ne.y)/2};m(O.x,O.y)>.015?F=O:ne=O}return{x:F.x,y:F.y}},b=se=>{let re=se.map(O=>m(O.x,O.y)>.015),F=re.indexOf(!0),ne=re.lastIndexOf(!0);if(F===-1||ne-F<2)return null;let oe=se.slice(F,ne+1);return F>0&&(oe[0]=v(oe[0],se[F-1])),ne<se.length-1&&(oe[oe.length-1]=v(oe[oe.length-1],se[ne+1])),oe},S=e.chance(.5),R=[];for(let se of[[.15,.35],[.65,.85]]){let re=S?t:i,F=S?i:t;for(let ne=0;ne<4&&!R.some(oe=>oe.band===se[0]);ne++){let oe=e.rand(se[0],se[1])*F,O=e.rand(70,Math.min(300,F*.09)),W=e.rand(.7,1.5),de=e.rand(0,Ke),k=[];for(let $=0;$<=46;$++){let ee=$/46,ye=et(oe+Math.sin(ee*W*Ke+de)*O,90,F-90);k.push(S?{x:ee*re,y:ye}:{x:ye,y:ee*re})}if(k=b(k),!k)continue;let H=!1;for(let $ of R)for(let ee=0;ee<k.length-1&&!H;ee++)for(let ye=0;ye<$.pts.length-1;ye++)if(oi(k[ee].x,k[ee].y,k[ee+1].x,k[ee+1].y,$.pts[ye].x,$.pts[ye].y,$.pts[ye+1].x,$.pts[ye+1].y)){H=!0;break}H||R.push({pts:k,band:se[0]})}}let L=(se,re,F)=>{let ne=1e9;for(let oe of F){let O=oe.pts;for(let W=0;W<O.length-1;W++)ne=Math.min(ne,At(se,re,O[W].x,O[W].y,O[W+1].x,O[W+1].y))}return ne},X=(se,re)=>L(se,re,R),q=(se,re)=>L(se,re,T),N=[];for(let se of R)for(let re=0;re<se.pts.length-1;re++)for(let F of T)for(let ne=0;ne<F.pts.length-1;ne++){let oe=Cd(se.pts[re].x,se.pts[re].y,se.pts[re+1].x,se.pts[re+1].y,F.pts[ne].x,F.pts[ne].y,F.pts[ne+1].x,F.pts[ne+1].y);oe&&N.push({x:oe.x,y:oe.y,railAng:Math.atan2(se.pts[re+1].y-se.pts[re].y,se.pts[re+1].x-se.pts[re].x),gate:0,active:!1})}let B=[];for(let se=0;se<26&&B.length<5;se++){let re=e.rand(.34*t,.97*t),F=e.rand(.14*i,.86*i),ne=e.rand(170,330);if(m(re,F)<ne/Math.min(a,c)+.06||M(re,F)==="desert"||X(re,F)<ne+120||te(re,F,E.x,E.y)<Tt+ne+260||B.some(k=>te(re,F,k.x,k.y)<ne+k.r+220))continue;let oe=[],O=[{f:2,p:e.rand(0,Ke)},{f:3,p:e.rand(0,Ke)},{f:5,p:e.rand(0,Ke)}];for(let k=0;k<28;k++){let H=k/28*Ke,$=0;for(let ee=0;ee<3;ee++)$+=Math.sin(H*O[ee].f+O[ee].p)/(ee+1.6);oe.push(1+.17*Math.max(-1,Math.min(1,$)))}let W=M(re,F)==="winter",de=[];if(!W)for(let k=0,H=e.randi(2,4);k<H;k++)de.push({a:e.rand(0,Ke),rr:e.rand(.2,.72),s:e.rand(9,16)});B.push({x:re,y:F,r:ne,wob:oe,frozen:W,pads:de,seed:e.rand(0,9)})}let Z=(se,re)=>{for(let F of B)if(ve(se,re,F.x,F.y)<F.r*F.r)return F;return null};for(let se of T)se.fade=se.pts.map(re=>{let F=m(re.x,re.y);if(F<=.015)return 0;let ne=Ci((F-.015)/.05);for(let oe of B){let O=te(re.x,re.y,oe.x,oe.y)-oe.r*1.08;ne*=Ci((O-12)/70)}return ne}),se.poles=se.poles.filter(re=>m(re.x,re.y)>.03&&!B.some(F=>te(re.x,re.y,F.x,F.y)<F.r+40));let ce=[];for(let se of Ad){let re=se.fx*t,F=se.fy*i;for(let ne=0;ne<8&&(m(re,F)<.12||Z(re,F));ne++)re=re*.78+r*.22,F=F*.78+o*.22;ce.push({type:se.type,name:se.name,x:re,y:F,r:200,crates:se.crates,nbarrels:se.barrels,nguards:se.guards})}let ue=Tt+240+700,Ee={x:.4*t,y:.52*i};e:for(let se=0;se<6;se++){let re=ue+se*700;for(let F=0;F<16;F++){let ne=F/16*Ke,oe=E.x+Math.cos(ne)*re,O=E.y+Math.sin(ne)*re;if(!(oe<600||O<600||oe>t-600||O>i-600)&&!(m(oe,O)<.12||Z(oe,O))&&!(X(oe,O)<360||q(oe,O)<320)&&!(te(oe,O,E.x,E.y)<ue)){Ee={x:oe,y:O};break e}}}ce.push({type:"quarry",name:"Quarry",x:Ee.x,y:Ee.y,r:170}),n.quarry={x:Ee.x,y:Ee.y,r:$n.capR,owner:null,capOwner:null,capT:0,payT:0,arm:0,paid:0};let De=[],ze=[],Qe=(se,re,F,ne)=>{if(m(se,re)<.06||Z(se,re))return!1;let oe=M(se,re);if(oe!=="jungle"&&oe!=="winter"||te(se,re,E.x,E.y)<Tt+F)return!1;for(let O of ce)if(te(se,re,O.x,O.y)<O.r+240)return!1;if(X(se,re)<F+90)return!1;for(let O of ne)if(te(se,re,O.x,O.y)<F+O.r+44)return!1;return!0};for(let se=0;se<34;se++)for(let re=0;re<30;re++){let F=e.rand(t/3,t-120),ne=e.rand(120,i-120),oe=e.rand(28,42);if(Qe(F,ne,oe,De)){De.push({x:F,y:ne,r:oe,seed:e.rand(0,9),winter:M(F,ne)==="winter"});break}}for(let se=0;se<72;se++)for(let re=0;re<18;re++){let F=e.rand(t/3,t-100),ne=e.rand(100,i-100),oe=e.rand(7,13);if(Qe(F,ne,oe,De)){ze.push({x:F,y:ne,r:oe,seed:e.rand(0,9),winter:M(F,ne)==="winter"});break}}n.world={island:p,islandPath:y,onLand:g,landFactor:m,islandRadAt:x,biomeAt:M,biomeRidge:_,shop:E,roads:T,rails:R,railHoriz:S,crossings:N,lakes:B,lakeAt:Z,railDist:X,pathDist:q,monuments:ce,boulders:De,rocks:ze,flora:[],palms:[]},G0(n),W0(n),q0(n),Y0(n),n.copter={x:n.player.x+120,y:n.player.y,angle:0,rotor:0,vx:0,vy:0,spd:0,hp:st.hp,max:st.hp,destroyed:!1}}function V0(n,e,t,i){let s=n.rng;for(let r=0;r<40;r++){let o=s.rand(i,xe.w-i),a=s.rand(i,xe.h-i);if(te(o,a,n.player.x,n.player.y)<220||n.world.landFactor(o,a)<.05||n.world.lakeAt(o,a))continue;let c=!1;for(let l of e)if(te(o,a,l.x,l.y)<t+l.r+24){c=!0;break}if(!c)return{x:o,y:a}}return null}function G0(n){let e=n.rng,t=[["tree",290,22,120,"wood"],["stone",190,26,140,"stone"],["metal",150,24,110,"metal"]],i=[];for(let[s,r,o,a,c]of t)for(let l=0;l<r;l++){let f=V0(n,i,o,90);if(!f)continue;let h={type:s,x:f.x,y:f.y,r:o,amount:a,max:a,regen:0,seed:e.rand(0,1e3),base:c,by:null,byT:0};i.push(h),n.resources.push(h)}}function W0(n){let e=n.rng;for(let t of n.world.monuments)if(t.type!=="quarry"){for(let i=0;i<t.crates;i++){let s=e.rand(0,Ke),r=e.rand(24,.62*t.r);n.barrels.push({x:t.x+Math.cos(s)*r,y:t.y+Math.sin(s)*r,r:18,hp:45,max:45,seed:e.rand(0,9),tier:"mon",crate:!0,respawnT:0})}for(let i=0;i<t.nbarrels;i++){let s=e.rand(0,Ke),r=e.rand(.45*t.r,.95*t.r);n.barrels.push({x:t.x+Math.cos(s)*r,y:t.y+Math.sin(s)*r,r:16,hp:30,max:30,seed:e.rand(0,9),tier:"mon",respawnT:0})}for(let i=0;i<t.nguards;i++)X0(n,t)}for(let t of n.world.roads)if(!t.convoy)for(let i=0;i<t.pts.length;i+=2){if(i%4!==0||!e.chance(.7))continue;let s=t.pts[i],r=e.rand(0,Ke),o=et(s.x+Math.cos(r)*(t.w/2+e.rand(16,70)),30,xe.w-30),a=et(s.y+Math.sin(r)*(t.w/2+e.rand(16,70)),30,xe.h-30);te(o,a,n.world.shop.x,n.world.shop.y)<Tt+60||!n.world.onLand(o,a)||n.world.lakeAt(o,a)||n.barrels.push({x:o,y:a,r:16,hp:30,max:30,seed:e.rand(0,9),tier:"road",respawnT:0})}}function X0(n,e){let t=n.rng,i=t.rand(0,Ke),s=t.rand(.35*e.r,.8*e.r);n.guards.push({mx:e.x,my:e.y,mr:e.r,x:e.x+Math.cos(i)*s,y:e.y+Math.sin(i)*s,hp:qt.hp,max:qt.hp,angle:t.rand(0,Ke),gunCd:t.rand(0,.6),dead:!1,respawnT:0,wpX:0,wpY:0,wpT:0,hasWp:!1,seed:t.rand(0,9),vx:0,vy:0})}function q0(n){let e=n.rng,t=xe.w,i=xe.h,s=["#d96a83","#dbb44a","#c46ac4","#e8e4da","#e08a52","#7aa0e0"];for(let r=0,o=e.randi(200,300);r<o;r++){let a=e.rand(t/3,2*t/3),c=e.rand(60,i-60);if(!n.world.onLand(a,c)||n.world.lakeAt(a,c)||n.world.biomeAt(a,c)!=="jungle")continue;let l=e.next();n.world.flora.push({x:a,y:c,type:l<.4?"flower":l<.72?"fern":"shrub",seed:e.rand(0,9),col:e.pick(s)})}for(let r=0,o=e.randi(90,140);r<o;r++){let a=e.rand(30,t/3),c=e.rand(60,i-60);!n.world.onLand(a,c)||n.world.lakeAt(a,c)||n.world.biomeAt(a,c)!=="desert"||n.world.flora.push({x:a,y:c,type:e.chance(.5)?"cactus":"deshrub",seed:e.rand(0,9),arms:e.randi(0,2)})}for(let r=0;r<n.world.islandPath.length;r+=2){let o=n.world.islandPath[r],a=n.world.island.cx+(o.x-n.world.island.cx)*.93,c=n.world.island.cy+(o.y-n.world.island.cy)*.93;n.world.biomeAt(a,c)==="jungle"&&e.chance(.34)&&n.world.palms.push({x:a,y:c,seed:e.rand(0,9)})}for(let r=0,o=e.randi(10,16);r<o;r++){let a=e.rand(40,t/3-20),c=e.rand(80,i-80);n.world.biomeAt(a,c)==="desert"&&n.world.onLand(a,c)&&!n.world.lakeAt(a,c)&&n.world.palms.push({x:a,y:c,seed:e.rand(0,9),desert:!0})}}function Y0(n){let e=n.rng,t=xe.w,i=xe.h,s=o=>o==="desert"?[0,t/3]:o==="jungle"?[t/3,2*t/3]:o==="winter"?[2*t/3,t]:[0,t],r=[];for(let[o,a]of Ed){let c=vs[o];for(let l=0;l<a;l++){let f=Sd(n,o,c,s(c.biome),r,null);if(f&&c.pack&&e.chance(.45))for(let h=0,d=e.randi(1,2);h<d;h++)Sd(n,o,c,s(c.biome),r,f)}}}function Sd(n,e,t,i,s,r){let o=n.rng;for(let a=0;a<40;a++){let c,l,f=r?r.lake:null;if(r)c=r.x+o.rand(-150,150),l=r.y+o.rand(-150,150);else if(t.lake){let u=n.world.lakes.filter(m=>!m.frozen||t.biome!=="jungle");if(!u.length)return null;f=o.pick(u);let p=o.rand(0,Ke),x=f.r+o.rand(30,200);c=f.x+Math.cos(p)*x,l=f.y+Math.sin(p)*x}else c=o.rand(i[0],i[1]),l=o.rand(90,xe.h-90);if(c=et(c,i[0]-70,i[1]+70),l=et(l,90,xe.h-90),te(c,l,n.player.x,n.player.y)<220||te(c,l,n.world.shop.x,n.world.shop.y)<Tt+200||n.world.landFactor(c,l)<.05||n.world.lakeAt(c,l)&&!t.lake)continue;let h=!1;for(let u of s)if(te(c,l,u.x,u.y)<t.r+u.r+8){h=!0;break}if(h)continue;let d={type:e,x:c,y:l,vx:0,vy:0,r:t.r,hp:t.hp,max:t.hp,aggro:null,atkcd:0,hit:0,wanderT:o.rand(0,2),dir:o.rand(0,Ke),respawnT:0,hostile:o.chance(.1),foe:null,lake:f,pauseT:0,stuckT:0,blockedAll:0,dead:!1,avoidT:0,avoidA:0};return s.push(d),n.animals.push(d),d}return null}var vn=Math.ceil(xe.w/64),Ys=Math.ceil(xe.h/64),ji=vn*Ys;function kd(n){let e=new Uint8Array(ji),t=new Float32Array(ji);for(let i=0;i<Ys;i++)for(let s=0;s<vn;s++){let r=s*64+64/2,o=i*64+64/2,a=i*vn+s,c=1;if(!n.world.onLand(r,o)){e[a]=1,t[a]=1;continue}let l=n.world.lakeAt(r,o);l&&(c=l.frozen?1.15:3);for(let f of n.world.boulders)if((r-f.x)*(r-f.x)+(o-f.y)*(o-f.y)<(f.r+18)*(f.r+18)){e[a]=1;break}n.world.pathDist(r,o)<26&&(c=Math.min(c,.85)),t[a]=c}n.nav={COLS:vn,ROWS:Ys,N:ji,terrain:e,cost:t,stamp:1,penalty:new Map,g:new Float32Array(ji),came:new Int32Array(ji),vis:new Int32Array(ji),gen:0,heap:new Int32Array(ji+1),heapF:new Float32Array(ji+1)}}var zr=(n,e)=>n<0||e<0||n>=vn||e>=Ys?-1:e*vn+n;function Z0(n,e,t,i){let s=n.deploys.get(tt(e,t));return s?s.type==="cupboard"?s.owner!==i:!0:!1}function da(n,e,t,i){let s=zr(e,t);return!(s<0||n.nav.terrain[s]||n.walls.has("D,"+e+","+t)||Z0(n,e,t,i)||n.nav.fenceCells&&n.nav.fenceCells.has(s))}function ih(n,e,t,i,s,r){let o;i>e?o=Be("V",i,t):i<e?o=Be("V",e,t):s>t?o=Be("H",e,s):o=Be("H",e,t);let a=n.walls.get(o);return!a||a.hp<=0?0:a.type==="door"&&(a.open||a.lock&&a.lock.by===r)?1:2}function Pi(n,e,t,i,s,r){if(!da(n,i,s,r))return-1;let o=ih(n,e,t,i,s,r);return o===2?-1:o}function K0(n,e,t){let i=n.nav.cost[e],s=n.nav.penalty.get(e);return s!==void 0&&(s>t?i+=6:n.nav.penalty.delete(e)),i}function ua(n,e,t,i=12){let s=zr(Math.floor(e/64),Math.floor(t/64));s>=0&&n.nav.penalty.set(s,n.t+i)}var Zs=256,fa=Math.ceil(xe.w/Zs),Id=Math.ceil(xe.h/Zs);function $0(n){let e=n.nav;if(e.maskStamp===e.stamp&&e.mask)return e.mask;let t=e.mask&&e.maskStamp!==void 0?e.mask.fill(0):new Uint8Array(fa*Id),i=(s,r)=>{let o=s/Zs|0,a=r/Zs|0;for(let c=-1;c<=1;c++)for(let l=-1;l<=1;l++){let f=(a+c)*fa+(o+l);o+l>=0&&a+c>=0&&o+l<fa&&a+c<Id&&(t[f]=1)}};for(let s of n.walls.keys()){let r=s.split(",");i(+r[1]*64,+r[2]*64)}for(let s of n.deploys.keys()){let r=s.split(",");i(+r[0]*64,+r[1]*64)}for(let s of n.fences)i(s.x,s.y);return e.mask=t,e.maskStamp=e.stamp,t}function Ud(n,e,t){let i=$0(n),s=(t/Zs|0)*fa+(e/Zs|0);return i[s]===1}function Fd(n){let e=new Set;for(let t of n.fences)e.add(zr(Math.floor(t.x/64),Math.floor(t.y/64)));n.nav.fenceCells=e,n.nav.stamp++}function Dd(n,e,t,i){if(da(n,e,t,i))return{gx:e,gy:t};for(let s=1;s<=8;s++)for(let r=-s;r<=s;r++)for(let o=-s;o<=s;o++)if(Math.max(Math.abs(o),Math.abs(r))===s&&da(n,e+o,t+r,i))return{gx:e+o,gy:t+r};return null}function Ld(n,e,t){let i=++n.heapN,s=n.heap,r=n.heapF;for(;i>1;){let o=i>>1;if(r[o]<=t)break;s[i]=s[o],r[i]=r[o],i=o}s[i]=e,r[i]=t}function J0(n){let e=n.heap,t=n.heapF,i=e[1],s=e[n.heapN],r=t[n.heapN--],o=1;for(;;){let a=o<<1;if(a>n.heapN||(a+1<=n.heapN&&t[a+1]<t[a]&&a++,t[a]>=r))break;e[o]=e[a],t[o]=t[a],o=a}return e[o]=s,t[o]=r,i}var Nd=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];function Od(n,e,t,i,s,r,o){let a=n.nav,c=et(Math.floor(t/64),0,vn-1),l=et(Math.floor(i/64),0,Ys-1),f=et(Math.floor(s/64),0,vn-1),h=et(Math.floor(r/64),0,Ys-1),d=Dd(n,c,l,e);if(!d)return null;let u=Dd(n,f,h,e);if(!u)return null;if(c=d.gx,l=d.gy,f=u.gx,h=u.gy,c===f&&l===h)return[{x:s,y:r}];let p=++a.gen;a.heapN=0;let x=l*vn+c,m=h*vn+f;a.vis[x]=p,a.g[x]=0,a.came[x]=-1,Ld(a,x,0);let g=Math.max(Math.abs(f-c),Math.abs(h-l)),y=o||Math.min(26e3,3e3+g*90),_=0,M=!1;for(;a.heapN>0&&_++<y;){let S=J0(a);if(S===m){M=!0;break}let R=S%vn,L=S/vn|0,X=a.g[S];for(let q=0;q<8;q++){let N=Nd[q][0],B=Nd[q][1],Z=R+N,ce=L+B,ue=zr(Z,ce);if(ue<0)continue;let Ee=0;if(q<4){let F=Pi(n,R,L,Z,ce,e);if(F<0)continue;F===1&&(Ee=2)}else if(Pi(n,R,L,R+N,L,e)!==0||Pi(n,R,L,R,L+B,e)!==0||Pi(n,R+N,L,Z,ce,e)!==0||Pi(n,R,L+B,Z,ce,e)!==0)continue;let De=(q<4?1:1.41421)*K0(n,ue,n.t)+Ee,ze=X+De;if(a.vis[ue]===p&&a.g[ue]<=ze)continue;a.vis[ue]=p,a.g[ue]=ze,a.came[ue]=S;let Qe=Math.abs(Z-f),se=Math.abs(ce-h),re=(Math.max(Qe,se)+.41421*Math.min(Qe,se))*.85;Ld(a,ue,ze+re)}}if(!M)return null;let E=[],T=m;for(;T!==-1;)E.push(T),T=a.came[T];E.reverse();let I=[];for(let S=0;S<E.length;S++){let R=E[S]%vn,L=E[S]/vn|0,X=!1;if(S>0){let q=E[S-1]%vn,N=E[S-1]/vn|0;Math.abs(R-q)+Math.abs(L-N)===1&&(X=ih(n,q,N,R,L,e)===1)}I.push({x:R*64+64/2,y:L*64+64/2,door:X})}I[I.length-1]={x:s,y:r,door:I[I.length-1].door};let v=[I[0]],b=0;for(let S=1;S<I.length;S++)if(I[S].door||S===I.length-1){let R=b;for(;R<S;){let L=R+1;for(let X=S;X>R;X--)if(!(I[X].door&&X!==S)&&Hr(n,e,I[R].x,I[R].y,I[X].x,I[X].y)){L=X;break}v.push(I[L]),R=L}b=S}return v.length>1&&!v[0].door&&Hr(n,e,t,i,v[1].x,v[1].y)&&v.shift(),v}function Hr(n,e,t,i,s,r){let o=Math.hypot(s-t,r-i),a=Math.max(1,Math.ceil(o/(64*.4))),c=Math.floor(t/64),l=Math.floor(i/64);for(let f=1;f<=a;f++){let h=f/a,d=t+(s-t)*h,u=i+(r-i)*h,p=Math.floor(d/64),x=Math.floor(u/64);if(!(p===c&&x===l)){if(!da(n,p,x,e))return!1;if(p!==c&&x!==l){if(Pi(n,c,l,p,l,e)!==0||Pi(n,p,l,p,x,e)!==0||Pi(n,c,l,c,x,e)!==0||Pi(n,c,x,p,x,e)!==0)return!1}else if(ih(n,c,l,p,x,e)!==0)return!1;c=p,l=x}}return!0}function Bd(n,e,t,i,s){let r=Math.hypot(i-e,s-t),o=Math.max(1,Math.ceil(r/(64*.5)));for(let a=1;a<=o;a++){let c=a/o,l=zr(Math.floor((e+(i-e)*c)/64),Math.floor((t+(s-t)*c)/64));if(l<0||n.nav.terrain[l])return!1}return!0}function sh(n){let e={seed:n>>>0,rng:Rd(n),t:0,tick:0,resources:[],barrels:[],loot:[],bullets:[],rockets:[],grenades:[],satchels:[],fences:[],fires:[],wrecks:[],animals:[],guards:[],dummies:[],structures:new Map,walls:new Map,deploys:new Map,units:[],teams:[],transports:[],trains:[],convoys:[],airdrop:null,plane:null,airdropT:150,signal:null,patrol:null,patrolT:0,lockedCrate:null,crateT:0,quarry:null,trainT:0,convoyT:0,clouds:null,fogBanks:null,fireflies:null,footprints:[],weather:{mode:"clear",timer:28,rain:0,boltT:0,flash:0,fog:0,fogTimer:18,fogOn:!1},wind:0,player:{x:xe.w/2,y:xe.h/2+260,vx:0,vy:0,angle:0,walk:200,run:340,recoil:0,health:100,maxhp:100,hurt:0,regenDelay:0,dead:!1,deadT:0,invuln:0,moving:!1,inCopter:!1,facemask:0,bodyArmor:0,rifleLaser:!1,poison:0,swing:0,gatherCd:0,lastHitBy:null},inv:{wood:1e4,stone:1e4,metal:1e4,scrap:0,hqm:0,fence:10,grenade:3,signal:0},owned:{pistol:!0,rifle:!1,minigun:!1,rocket:!1,sniper:!1,shotgun:!1,hmg:!1},weapons:j0(),slot:0,buildMode:!1,buildPiece:"wall",buildRot:0,jackhammer:!1,ghost:!0,copter:null,playerKills:0,deathMark:null,bounty:null,raids:[],elims:[],raidAlarm:null,breachT:{},shake:0,aggressor:-1,aggressorOwner:null,aggroT:0,roleT:0,aliveBases:0,dbSweepT:0,events:[],muzzle:null,blasts:[],scorch:[],flashes:[],floats:[],particles:[],cmd:{mx:0,my:0,fire:!1,fireHeld:!1,up:!1,down:!1,left:!1,right:!1,run:!1},metrics:{hardUnstick:0,wallPhase:0,stuckTotal:0,maxStuck:0,repaths:0,pathFails:0,act:{},raidsLaunched:0,tcKilled:0,elims:0,winner:null,decisiveT:null,workerLog:[],stuckLog:[],regionStuck:{base:0,lake:0,monument:0,open:0}}};return Pd(e),kd(e),Q0(e),e.trainT=e.rng.rand(20,60),e.patrolT=e.rng.rand(180,280),e.crateT=e.rng.rand(100,180),e.convoyT=e.rng.rand(120,200),e}function j0(){let n={};for(let e in ln){let t=ln[e];n[e]={ammo:t.magSize,reserve:t.reserve,reloading:0,cd:0,spin:0}}return n}function Q0(n){let e=n.rng,t=[{x:n.world.shop.x,y:n.world.shop.y,r:Tt+500},{x:n.player.x,y:n.player.y,r:700},...n.world.monuments.map(i=>({x:i.x,y:i.y,r:Tt+320}))];for(let i=0;i<yt.TEAM_COUNT;i++){let s=null;for(let f=0;f<120&&!s;f++){let h=e.rand(1400,xe.w-1400),d=e.rand(1400,xe.h-1400);n.world.landFactor(h,d)<.12||n.world.lakeAt(h,d)||n.world.lakes.some(u=>te(h,d,u.x,u.y)<u.r+560)||n.world.railDist(h,d)<400||n.world.pathDist(h,d)<340||t.some(u=>te(h,d,u.x,u.y)<u.r)||(s={x:h,y:d})}if(!s)continue;t.push({x:s.x,y:s.y,r:Ki});let r=e.next(),o=r<.25,a=r>=.75,c={id:i,owner:"e"+i,col:yt.COLS[i%yt.COLS.length],hard:o,weak:a,role:["raider","turtle","nomad"][i%3],shotgun:e.chance(.3),eliminated:!1,bases:[],brain:{sealed:!0,decaying:!1,ready:!1,attack:!1,attackers:0,urgent:!1,aggressor:!1,raidTarget:null,raidPhase:null,breachKey:null,breachT:0,buildHoldT:0,builderId:null,lootCd:0,qCd:0,sigCd:0,statusT:e.rand(0,.5),stage:null,stageT:0}};n.teams.push(c);let l=Vr(n,c,s.x,s.y,!0);l.inv={wood:120,stone:30,metal:10},l.unfounded=!0,l.siteX=s.x,l.siteY=s.y,l.copter={x:s.x-256,y:s.y,angle:0,rotor:0,spin:0,vx:0,vy:0,hp:160,max:160,destroyed:!1};for(let f=0;f<3;f++){let h=Vr(n,c,s.x+e.rand(-46,46),s.y+e.rand(24,64),!1);h.unfounded=!0,h.siteX=s.x,h.siteY=s.y}}}function Vr(n,e,t,i,s){let r=n.rng,o={id:e.id,owner:e.owner,col:e.col,primary:!!s,worker:!s,ally:!1,hard:e.hard,weak:e.weak,shotgun:e.shotgun,role:e.role,x:t,y:i,vx:0,vy:0,angle:r.rand(0,Math.PI*2),hx:t,hy:i,tcKey:null,doorX:t,doorY:i+64,doorGy:Math.floor(i/64)+1,hp:100,max:100,dead:!1,respawnT:0,eliminated:!1,regenT:0,lastHitBy:null,inv:{wood:0,stone:0,metal:0},scrap:0,rockets:0,satchels:0,grenades:0,hqm:0,gun:"pistol",rifleLaser:!1,facemask:e.hard?1:0,bodyArmor:e.hard?2:0,jack:!1,kills:0,state:"gather",act:"gather",unfounded:!1,siteX:0,siteY:0,think:r.rand(0,1),gunCd:0,rkCd:0,gnCd:0,fenceCd:0,expandT:r.rand(3,9),retaliateT:0,threatX:0,threatY:0,disengageT:0,defendT:0,defHold:0,defTgt:null,retreat:!1,raid:null,wasRaid:!1,raidCd:0,raidBias:r.next(),raidUrge:0,defDuty:!1,buildDuty:!1,rocketer:!1,lootRun:null,qRun:null,monRun:!1,monRunT:0,monCd:0,monStay:0,tgtNode:null,skipNode:null,skipT:0,lootTgt:null,lootSkip:null,lootSkipT:0,lane:r.rand(-12,12),hoff:r.rand(-26,26),path:null,pathI:0,pathGX:0,pathGY:0,pathT:0,navStamp:0,repathN:0,noPathT:0,progT:0,progBest:1e9,stuckT:0,baseT:0,idleT:0,aiNetT:0,aiPx:t,aiPy:i,retT:0,maintT:-10,hireT:0,stT:0,expT:r.rand(40,80),fwdT:0,endgame:!1,copter:null,flying:!1,aboard:null,tradeDone:!1,parkChk:0,gathering:!1,swing:0,hf:!1,strafeT:0,strafeS:1,backoff:!1,tickPhase:n.units.length%9};return n.units.push(o),o}function Hd(n){let e=n.rng,t=n.world.shop,i=eg(n),r=Vr(n,{id:-1,owner:Ye,col:"#7ec850",hard:!1,weak:!1,shotgun:!1,role:"raider"},t.x+e.rand(-60,60),t.y+(t.r||120)+40,!1);return r.ally=!0,r.gun="rifle",r.col="#7ec850",r.raidUrge=e.rand(12,24),r.facemask=0,r.bodyArmor=0,i?(r.hx=i.hx,r.hy=i.hy,r.tcKey=i.tcKey):(r.hx=n.player.x,r.hy=n.player.y),r.doorX=r.hx,r.doorY=r.hy+64,r.doorGy=Math.floor(r.hy/64)+1,r}function eg(n){for(let[e,t]of n.deploys)if(t.type==="cupboard"&&t.owner===Ye){let[i,s]=e.split(",").map(Number);return{owner:Ye,tcKey:e,hx:i*64+64/2,hy:s*64+64/2,isPlayer:!0}}return null}var zd=(n,e)=>n.teams.find(t=>t.owner===e)||null;function Xe(n,e,t,i,s){let r=0,o=n.floats[n.floats.length-1];o&&n.t-o.born<1&&Math.abs(o.ox-e)<60&&Math.abs(o.oy-t)<44&&(r=o.lift+15),n.floats.push({x:e,y:t-r,ox:e,oy:t,lift:r,text:i,col:s||"#e8e2cf",vy:-26,life:.9,max:.9,born:n.t}),n.floats.length>90&&n.floats.shift()}function ft(n,e,t,i,s,r){for(let o=0;o<s;o++){let a=n.rng.rand(0,Math.PI*2),c=n.rng.rand(.3*r,r);n.particles.push({x:e,y:t,vx:Math.cos(a)*c,vy:Math.sin(a)*c,life:n.rng.rand(.25,.6),max:.6,r:n.rng.rand(1.5,3.5),col:i})}n.particles.length>900&&n.particles.splice(0,n.particles.length-900)}function Rt(n,e,t,i,s,r){let o=n.rng.rand(0,Math.PI*2),a=n.rng.rand(40,90);n.loot.push({x:e,y:t,vx:Math.cos(o)*a,vy:Math.sin(o)*a,kind:i,amt:s,gun:r||null,life:0,bob:n.rng.rand(0,Math.PI*2)})}function cn(n,e,t,i,s){if(s<=0)return;let r=Math.min(12,Math.max(1,Math.ceil(s/50))),o=s;for(let a=0;a<r;a++){let c=Math.min(o,Math.ceil(s/r));if(c<=0)break;Rt(n,e+n.rng.rand(-14,14),t+n.rng.rand(-14,14),i,c),o-=c}}function Vd(n,e,t,i){if(i.store)for(let s of["wood","stone","metal"])cn(n,e,t,s,i.store[s]|0),i.store[s]=0}function Gd(n,e,t,i){let s=n.raids.find(r=>r.id===i);if(s){s.x=e,s.y=t,s.t=60;return}n.raids.push({x:e,y:t,id:i,t:60}),n.raids.length>40&&n.raids.shift()}function pa(n,e){if(!e)return;if(e===Ye){n.playerKills++,n.inv.scrap+=12;return}let t=n.units.find(i=>i.owner===e&&i.primary&&!i.eliminated)||n.units.find(i=>i.owner===e&&!i.eliminated);t&&(t.kills++,t.scrap+=12)}function Ot(n,e){let t=n.split(","),i=+t[1],s=+t[2];return t[0]==="V"?[i*64,s*64,i*64,(s+1)*64]:t[0]==="H"?[i*64,s*64,(i+1)*64,s*64]:e&&e.rot===1?[i*64,(s+1)*64,(i+1)*64,s*64]:[i*64,s*64,(i+1)*64,(s+1)*64]}var rh=(n,e)=>[Be("V",n,e),Be("V",n+1,e),Be("H",n,e),Be("H",n,e+1),Be("D",n,e)];function oh(n,e,t,i,s){let r=Math.floor((e-i)/64),o=Math.floor((e+i)/64),a=Math.floor((t-i)/64),c=Math.floor((t+i)/64);for(let l=a;l<=c;l++)for(let f=r;f<=o;f++)for(let h of rh(f,l)){let d=n.walls.get(h);if(d&&d.hp>0&&s(h,d)===!0)return!0}return!1}function Gr(n,e,t,i){let s=n.deploys.get(tt(Math.floor(e/64),Math.floor(t/64)));return!s||i&&s.type==="cupboard"&&s.owner===i?!1:s.type==="turret"||s.type==="cupboard"||s.type==="box"}function tg(n,e,t,i,s){if(Gr(n,e,t,s))return!0;for(let r=0;r<8;r++){let o=r/8*Math.PI*2;if(Gr(n,e+Math.cos(o)*i,t+Math.sin(o)*i,s))return!0}return!1}function ah(n,e,t,i){for(let s of n.world.boulders)if(ve(e,t,s.x,s.y)<(i+s.r)*(i+s.r))return!0;return!1}function Wr(n,e,t){for(let i of n.world.boulders)if(ve(e,t,i.x,i.y)<(i.r+12)*(i.r+12))return i;return null}function ai(n,e,t,i,s){for(let r of n.world.boulders)if(At(r.x,r.y,e,t,i,s)<r.r)return!0;return!1}function ng(n,e,t,i){for(let s of n.fences)if(!(s.hp<=0)&&At(e,t,s.x0,s.y0,s.x1,s.y1)<i+4)return s;return null}function Et(n,e,t,i,s={}){if(!n.world.onLand(e,t)||ah(n,e,t,i))return!0;if(!Ud(n,e,t))return!1;if(tg(n,e,t,i,s.passOwner)||ng(n,e,t,i))return!0;let r=!1;return oh(n,e,t,i+8,(o,a)=>{if(a.type==="door"&&a.open)return!1;if(a.type==="door"&&s.openOwnDoors&&a.lock&&a.lock.by===s.passOwner)return a.open=!0,a.closeT=n.t+1,n.nav.stamp++,!1;let c=Ot(o,a);if(At(e,t,c[0],c[1],c[2],c[3])<i+4)return r=!0,!0}),r}function zt(n,e,t,i,s){let r=Math.min(e,i)-64,o=Math.max(e,i)+64,a=Math.min(t,s)-64,c=Math.max(t,s)+64,l=Math.floor(r/64),f=Math.floor(o/64),h=Math.floor(a/64),d=Math.floor(c/64),u=Math.hypot(i-e,s-t);if(u>192){let p=Math.ceil(u/(64*.5)),x=new Set;for(let m=0;m<=p;m++){let g=m/p,y=Math.floor((e+(i-e)*g)/64),_=Math.floor((t+(s-t)*g)/64),M=y*10007+_;if(!x.has(M)){x.add(M);for(let E of rh(y,_)){let T=n.walls.get(E);if(!T||T.hp<=0||T.type==="door"&&T.open)continue;let I=Ot(E,T);if(oi(e,t,i,s,I[0],I[1],I[2],I[3]))return!0}}}return!1}for(let p=h;p<=d;p++)for(let x=l;x<=f;x++)for(let m of rh(x,p)){let g=n.walls.get(m);if(!g||g.hp<=0||g.type==="door"&&g.open)continue;let y=Ot(m,g);if(oi(e,t,i,s,y[0],y[1],y[2],y[3]))return!0}return!1}function bt(n,e,t){return ve(e,t,n.world.shop.x,n.world.shop.y)<Tt*Tt}function Ks(n,e,t){for(let i of n.world.monuments)if(ve(e,t,i.x,i.y)<Qc*Qc)return i;return null}function ma(n,e,t){return At(n,e,t.px,t.py,t.x,t.y)<bd}var ut=(n,e)=>({x:n*64+64/2,y:e*64+64/2});function ig(n,e,t,i){let s=null,r=Ht*Ht;for(let[o,a]of n.deploys){if(a.type!=="cupboard"||i&&a.owner!==i)continue;let[c,l]=o.split(",").map(Number),f=ut(c,l),h=ve(e,t,f.x,f.y);h<r&&(r=h,s={key:o,d:a,x:f.x,y:f.y})}return s}function En(n,e){let t=n.deploys.get(e);return t&&t.type==="cupboard"?t:null}var Cn={has(n,e){for(let t in e){let i=0;for(let s of n)i+=s[t]||0;if(i<e[t])return!1}return!0},pay(n,e){if(!Cn.has(n,e))return!1;for(let t in e){let i=e[t];for(let s of n){let r=Math.min(i,s[t]||0);if(s[t]=(s[t]||0)-r,i-=r,i<=0)break}}return!0}};function sg(n,e,t,i){let s=t,r=t,o=i,a=i,c=!1;for(let[l,f]of n.structures){if(f.owner!==e)continue;let[h,d]=l.split(",").map(Number);Math.abs(h-t)*64>Ht||Math.abs(d-i)*64>Ht||(c=!0,s=Math.min(s,h),r=Math.max(r,h),o=Math.min(o,d),a=Math.max(a,d))}return c?r-s+1>Jc||a-o+1>Jc:!1}function Wd(n,e){let t=e.split(","),i=+t[1],s=+t[2];return t[0]==="V"?n.structures.has(tt(i-1,s))||n.structures.has(tt(i,s)):n.structures.has(tt(i,s-1))||n.structures.has(tt(i,s))}function lh(n,e,t,i){let s=Qt[t];if(!s)return!1;if(s.cat==="cell"){let{gx:r,gy:o}=i,a=ut(r,o);if(r<1||o<1||a.x>13760||a.y>9152||bt(n,a.x,a.y)||Ks(n,a.x,a.y)||Wr(n,a.x,a.y)||!n.world.onLand(a.x,a.y)||n.world.lakeAt(a.x,a.y))return!1;if(s.found)return!(n.structures.has(tt(r,o))||n.deploys.has(tt(r,o))||sg(n,e,r,o)||rg(n,r,o));if(n.deploys.has(tt(r,o))||(s.tc||s.box)&&!n.structures.has(tt(r,o)))return!1;if(s.tc){if(e===Ye&&[...n.deploys.values()].some(c=>c.type==="cupboard"&&c.owner===Ye))return!1;for(let[c,l]of n.deploys){if(l.type!=="cupboard")continue;let[f,h]=c.split(",").map(Number),d=ut(f,h);if(te(a.x,a.y,d.x,d.y)<Ki)return!1}}return!(s.turret&&!ig(n,a.x,a.y,e))}if(s.cat==="edge"){let r=i.key;if(n.walls.has(r)||!Wd(n,r))return!1;let a=Ot(r,{type:t}),c=(a[0]+a[2])/2,l=(a[1]+a[3])/2;return!(bt(n,c,l)||Ks(n,c,l))}if(s.cat==="diag"){let r=i.key;if(n.walls.has(r))return!1;let o=r.split(",");return!!n.structures.has(tt(+o[1],+o[2]))}return!1}function rg(n,e,t){let i=ut(e,t),s=r=>r&&!r.destroyed&&Math.abs(r.x-i.x)<38&&Math.abs(r.y-i.y)<38;if(s(n.copter))return!0;for(let r of n.units)if(s(r.copter))return!0;return!1}function Xd(n,e,t,i,s,r={}){let o=Qt[t];if(!lh(n,e,t,i)||s&&!Cn.pay(s,o.cost))return null;let a=r.mat||"wood",c=Ri(o,a),l;return o.cat==="cell"&&o.found?(l={type:t,mat:a,hp:c,max:c,owner:e,hitT:-100,rot:(r.rot||0)&3},n.structures.set(tt(i.gx,i.gy),l)):o.cat==="cell"?(l={type:t,mat:"wood",hp:o.hp,max:o.hp,owner:e,hitT:-100},o.store&&(l.store={wood:0,stone:0,metal:0,scrap:0}),o.turret&&(l.tier=r.tier||1,l.angle=0,l.cd=0,l.mag=12,l.reload=0,l.ext=!!r.ext,l.scanT=n.rng.rand(.5,4.5)),(o.tc||o.box||o.door)&&(l.lock={by:e}),n.deploys.set(tt(i.gx,i.gy),l)):(l={type:t,mat:a,hp:Ri(o,a),max:Ri(o,a),owner:e,hitT:-100,open:!1,rot:(r.rot||0)&1},o.door&&(l.lock={by:e}),n.walls.set(i.key,l)),n.nav.stamp++,l}function qd(n,e,t,i){let s=yd[e.mat];return!s||!t.up||i&&!Cn.pay(i,s.cost)?!1:(e.mat=s.to,e.max=Ri(t,e.mat),e.hp=e.max,!0)}function $s(n,e,t,i){let s=n.walls.get(e);if(!s||s.hp<=0)return!1;if(s.hp-=t,s.hitT=n.t,s.hp<=0){let r=Ot(e,s);return ft(n,(r[0]+r[2])/2,(r[1]+r[3])/2,"#8a7a5c",10,160),n.walls.delete(e),n.breachT[e]=n.t,n.nav.stamp++,n.events.push({type:"wallDown",x:(r[0]+r[2])/2,y:(r[1]+r[3])/2}),!0}return!1}function Xr(n,e,t){let i=n.structures.get(e);return i?(i.hp-=t,i.hitT=n.t,i.hp<=0?(n.structures.delete(e),n.breachT[e]=n.t,ga(n,e),n.nav.stamp++,!0):!1):!1}function Ms(n,e,t,i){let s=n.deploys.get(e);return s?(s.hp-=t,s.hitT=n.t,s.hp<=0?(ch(n,e,s,i),!0):!1):!1}function ch(n,e,t,i){let[s,r]=e.split(",").map(Number),o=ut(s,r);if(Vd(n,o.x,o.y,t),n.deploys.delete(e),n.nav.stamp++,ft(n,o.x,o.y,"#caa24a",14,220),t.type==="cupboard"){if(Xe(n,o.x,o.y,"TC destroyed!","#ff7a4a"),n.metrics.tcKilled++,t.owner===Ye)for(let c of["wood","stone","metal"])n.inv[c]>0;hh(n,t.owner,o.x,o.y);let a=zd(n,t.owner);if(a){let c=a.bases.find(l=>l.tcKey===e);c&&(c.dead=!0)}}}function hh(n,e,t,i){for(let[s,r]of[...n.walls]){if(r.owner!==e)continue;let o=Ot(s,r);te((o[0]+o[2])/2,(o[1]+o[3])/2,t,i)<560&&n.walls.delete(s)}for(let[s,r]of[...n.structures]){if(r.owner!==e)continue;let[o,a]=s.split(",").map(Number),c=ut(o,a);te(c.x,c.y,t,i)<560&&(n.structures.delete(s),ft(n,c.x,c.y,"#6b5a40",3,120))}for(let[s,r]of[...n.deploys]){if(r.owner!==e||r.type==="cupboard")continue;let[o,a]=s.split(",").map(Number),c=ut(o,a);te(c.x,c.y,t,i)<560&&n.deploys.delete(s)}n.nav.stamp++}function ga(n,e){let[t,i]=e.split(",").map(Number);for(let s of[Be("D",t,i)])n.walls.delete(s);for(let s of[Be("V",t,i),Be("V",t+1,i),Be("H",t,i),Be("H",t,i+1)])n.walls.has(s)&&!Wd(n,s)&&n.walls.delete(s)}function og(n,e,t){let i={};for(let s in n.cost)i[s]=Math.max(1,Math.ceil(n.cost[s]*t));return(e.mat==="stone"||e.mat==="metal")&&(i.stone=(i.stone||0)+Math.ceil(15*t)),e.mat==="metal"&&(i.metal=(i.metal||0)+Math.ceil(20*t)),i}function Yd(n,e,t,i,s=aa){if(e.hp>=e.max||n.t-e.hitT<s)return!1;let r=Math.min(e.max-e.hp,e.max*.2),o=r/e.max;return Cn.pay(i,og(t,e,o))?(e.hp+=r,!0):!1}function Zd(n,e){if(n.decayT=(n.decayT||0)+e,n.decayT<.5)return;let t=n.decayT;n.decayT=0;let i=[];for(let[r,o]of n.deploys){if(o.type!=="cupboard")continue;let[a,c]=r.split(",").map(Number);i.push({key:r,d:o,...ut(a,c),n:0})}let s=(r,o,a)=>{let c=r.split(","),l=+c[c.length-2],f=+c[c.length-1],h=ut(l,f),d=null,u=Ht*Ht;for(let p of i){let x=ve(h.x,h.y,p.x,p.y);x<u&&(u=x,d=p)}if(d){if(d.n++,d.d.store.wood+d.d.store.stone+d.d.store.metal>0)return;let x=Math.sqrt(u)/Ht,m=jc+(Md-jc)*x;o.hp-=o.max*(t/m)}else o.hp-=o.max*(t/vd);o.hp<=0&&(a?(n.walls.delete(r),n.nav.stamp++):(n.structures.delete(r),ga(n,r),n.nav.stamp++))};for(let[r,o]of[...n.walls])s(r,o,!0);for(let[r,o]of[...n.structures])s(r,o,!1);for(let r of i){let o=r.n*Or*t;for(let a of["wood","stone","metal"]){if(o<=0)break;let c=Math.min(o,r.d.store[a]);r.d.store[a]-=c,o-=c}}}function xa(n,e,t,i){let s=Math.floor(t/64),r=Math.floor(i/64),o=e.owner;for(let p=0;p<3;p++)for(let x=0;x<3;x++)n.structures.set(tt(s+x,r+p),{type:"floor",mat:"wood",hp:100,max:100,owner:o,hitT:-100});let a=p=>n.walls.set(p,{type:"wall",mat:"wood",hp:100,max:100,owner:o,hitT:-100,open:!1}),c=p=>n.walls.set(p,{type:"door",mat:"wood",hp:50,max:50,owner:o,hitT:-100,open:!1,lock:{by:o}});for(let p=0;p<3;p++)a(Be("H",s+p,r));a(Be("H",s,r+3)),a(Be("H",s+2,r+3)),c(Be("H",s+1,r+3));for(let p=0;p<3;p++)a(Be("V",s,r+p)),a(Be("V",s+3,r+p));let l=s+1,f=r+1;c(Be("H",l,f)),a(Be("V",l,f)),a(Be("V",l+1,f)),c(Be("H",l,f+1));let h=tt(l,f);if(n.deploys.set(h,{type:"cupboard",mat:"wood",hp:300,max:300,owner:o,hitT:-100,lock:{by:o},store:{wood:200+n.rng.randi(20,70),stone:0,metal:n.rng.randi(0,40),scrap:0}}),n.deploys.set(tt(s+2,r),{type:"turret",mat:"wood",hp:150,max:150,owner:o,hitT:-100,tier:e.hard?3:e.weak?1:2,angle:0,cd:0,mag:12,reload:0,ext:!1,scanT:n.rng.rand(.5,4.5)}),e.hard)for(let[,p]of n.walls)p.owner===o&&p.mat==="wood"&&(p.mat="metal",p.max=Ri(Qt[p.type],"metal"),p.hp=p.max);let d=ut(l,f),u={owner:o,tcKey:h,hx:d.x,hy:d.y,doorX:(s+1)*64+64/2,doorY:(r+3)*64,doorGy:r+3,kind:"home",dead:!1,cleared:!1};return e.bases.push(u),fh(n,e,u),n.nav.stamp++,u}function ya(n,e,t,i){let s=1e9,r=1e9,o=-1e9,a=-1e9,c=!1;for(let[l,f]of n.structures){if(f.owner!==e)continue;let[h,d]=l.split(",").map(Number),u=ut(h,d);ve(u.x,u.y,t,i)>Ht*Ht||(c=!0,s=Math.min(s,h),o=Math.max(o,h),r=Math.min(r,d),a=Math.max(a,d))}return c?{minx:s,miny:r,maxx:o,maxy:a}:null}function fh(n,e,t){let i=ya(n,e.owner,t.hx,t.hy);if(!i)return;let s=Math.floor((i.minx+i.maxx)/2),r=Math.floor((i.miny+i.maxy)/2),o=[Be("H",s,i.miny),Be("H",s,i.maxy+1),Be("V",i.minx,r),Be("V",i.maxx+1,r)];for(let a of o){let c=n.walls.get(a);c&&c.owner===e.owner&&c.type==="wall"&&c.hp>0&&(c.type="door",c.lock={by:e.owner},c.open=!1)}n.nav.stamp++}function qr(n,e,t){let i=e.owner,s=Be("H",Math.floor(t.doorX/64),t.doorGy);for(let[r,o]of n.structures){if(o.owner!==i)continue;let[a,c]=r.split(",").map(Number),l=ut(a,c);if(ve(l.x,l.y,t.hx,t.hy)>Ht*Ht)continue;let f=[[Be("V",a,c),tt(a-1,c)],[Be("V",a+1,c),tt(a+1,c)],[Be("H",a,c),tt(a,c-1)],[Be("H",a,c+1),tt(a,c+1)]];for(let[h,d]of f){let u=n.structures.get(d);if(u&&u.owner===i||h===s)continue;let p=n.walls.get(h);if(!p||p.hp<=0)return h}}return null}function dh(n,e,t,i){return n.t-(n.breachT[t]||-1e9)<_d||!Cn.pay(i,{wood:40})?!1:(n.walls.set(t,{type:"wall",mat:"wood",hp:100,max:100,owner:e.owner,hitT:-100,open:!1}),n.nav.stamp++,!0)}function _a(n,e,t){let i=null,s=.6;for(let[r,o]of n.walls){if(o.owner!==e.owner||o.type==="door"||o.hp<=0||n.t-o.hitT<aa)continue;let a=Ot(r,o);if(ve((a[0]+a[2])/2,(a[1]+a[3])/2,t.hx,t.hy)>Ht*Ht)continue;let c=o.hp/o.max;c<s&&(s=c,i=r)}return i}function Kd(n,e,t,i){let s=n.walls.get(t);if(!s||n.t-s.hitT<aa)return!1;let r=s.mat==="metal"?{metal:8}:s.mat==="stone"?{stone:8}:{wood:12};return Cn.pay(i,r)?(s.hp=Math.min(s.max,s.hp+s.max*.5),!0):!1}function Ln(n,e){n.bullets.push({x:e.x,y:e.y,px:e.x,py:e.y,vx:Math.cos(e.angle)*e.speed,vy:Math.sin(e.angle)*e.speed,life:e.life,dmg:e.dmg,from:e.from,col:e.col||null,turret:!!e.turret,enemy:e.from!==Ye,bounces:0,ricochet:!1,dist:0})}function Yr(n,e,t,i,s){let r=ln.rocket;n.rockets.push({x:e,y:t,vx:Math.cos(i)*r.speed,vy:Math.sin(i)*r.speed,life:r.range,w:r,smoke:0,from:s}),n.events.push({type:"rocketLaunch",x:e,y:t})}var ag=(n,e,t)=>e*(1-th(t?n.player.facemask:n.player.bodyArmor,t?"head":"body")),lg=(n,e,t)=>e*(1-th(t?n.facemask:n.bodyArmor,t?"head":"body"));function bs(n,e,t,i,s){let r=n.player;if(!(r.dead||r.invuln>0||n.ghost||bt(n,r.x,r.y))){if(r.health-=e,r.regenDelay=4.5,r.hurt=.28,s&&(r.lastHitBy=s),t!==void 0){let o=Math.max(1,te(t,i,r.x,r.y));r.x+=(r.x-t)/o*7,r.y+=(r.y-i)/o*7}ft(n,r.x,r.y,"#9e2b1e",6,160),r.health<=0&&Js(n)}}function Js(n,e){let t=n.player;if(t.dead)return;t.dead=!0,t.deadT=e?4:2.2,n.deathMark={x:t.x,y:t.y},pa(n,t.lastHitBy);for(let a of["wood","stone","metal"])cn(n,t.x,t.y,a,n.inv[a]),n.inv[a]=0;let i=0;for(let a in n.weapons)a!=="rocket"&&(i+=n.weapons[a].ammo+n.weapons[a].reserve,n.weapons[a].ammo=0,n.weapons[a].reserve=0);let s=Math.min(8,Math.ceil(i/30));for(let a=0;a<s;a++)Rt(n,t.x,t.y,"ammo",Math.ceil(i/Math.max(1,s)));let r=n.weapons.rocket,o=Math.min(12,r.ammo+r.reserve);r.ammo=0,r.reserve=0;for(let a=0;a<o;a++)Rt(n,t.x,t.y,"rocket",1);n.events.push({type:"playerDie",x:t.x,y:t.y})}function ws(n,e,t,i,s,r){e.dead||e.flying||e.eliminated||bt(n,e.x,e.y)||(e.hp-=t,ft(n,e.x,e.y,"#9e2b1e",4,150),e.regenT=4,e.lastHitBy=r||null,i!==void 0&&(e.threatX=i,e.threatY=s,e.retaliateT=2.2),e.hp<=0&&ph(n,e))}function ph(n,e){if(e.dead)return;e.dead=!0,e.respawnT=15,e.flying=!1,e.aboard=null;for(let s of["wood","stone","metal"])cn(n,e.x,e.y,s,e.inv[s]),e.inv[s]=0;let t=Math.min(12,e.rockets);e.rockets=0;for(let s=0;s<t;s++)Rt(n,e.x,e.y,"rocket",1);let i=Math.min(6,e.grenades);e.grenades=0;for(let s=0;s<i;s++)Rt(n,e.x,e.y,"rocket",1);Rt(n,e.x,e.y,"ammo",n.rng.randi(24,60)),e.gun!=="pistol"&&(Rt(n,e.x,e.y,"gun",1,e.gun),e.gun="pistol"),e.scrap>0&&(cn(n,e.x,e.y,"scrap",e.scrap),e.scrap=0),e.id===n.bounty&&e.lastHitBy===Ye&&(n.inv.scrap+=eh,Xe(n,e.x,e.y,"+"+eh+" bounty!","#ffd76b"),n.bounty=null),pa(n,e.lastHitBy),ft(n,e.x,e.y,"#9e2b1e",14,220),Xe(n,e.x,e.y,"down","#e2664a")}function $d(n,e,t,i){e.dead||(e.hp-=t,ft(n,e.x,e.y,"#9e2b1e",5,140),e.hp<=0&&(e.dead=!0,e.respawnT=82,ft(n,e.x,e.y,"#9e2b1e",20,220),cn(n,e.x,e.y,"scrap",n.rng.randi(4,9)),Rt(n,e.x,e.y,"ammo",n.rng.randi(12,26)),i===Ye?(n.inv.scrap+=8,Xe(n,e.x,e.y,"+8 guard","#ffe07a")):(Xe(n,e.x,e.y,"guard down","#e2664a"),pa(n,i))))}function va(n,e,t,i,s,r){if(!e.dead){if(e.hp-=t,e.hit=.12,i!==void 0){let o=Math.max(1,te(i,s,e.x,e.y)),a=Math.min(16,t*.4);e.x+=(e.x-i)/o*a,e.y+=(e.y-s)/o*a}if(e.foe=r||e.foe,e.aggro=e.aggro||"hit",Xe(n,e.x,e.y-e.r,"-"+Math.round(t),"#e8b06a"),e.hp<=0){e.dead=!0,e.respawnT=n.rng.rand(11,18),ft(n,e.x,e.y,"#9e2b1e",12,200);let o=vs[e.type];o&&o.loot&&Rt(n,e.x,e.y,o.loot[0],n.rng.randi(o.loot[1],o.loot[2])),Xe(n,e.x,e.y,(o?e.type:"animal")+" down","#caa46a")}}}function Jd(n,e,t,i){if(e.hp-=t,e.hp>0){ft(n,e.x,e.y,"#d2664a",3,120);return}ft(n,e.x,e.y,e.crate?"#caa15f":"#d2664a",14,230),e.tier==="mon"?(cn(n,e.x,e.y,"scrap",n.rng.randi(e.crate?22:12,e.crate?42:26)),Rt(n,e.x,e.y,"ammo",n.rng.randi(45,85)),e.respawnT=82):e.tier==="road"?(cn(n,e.x,e.y,"scrap",n.rng.randi(8,16)),Rt(n,e.x,e.y,"ammo",n.rng.randi(16,34)),e.respawnT=22):(cn(n,e.x,e.y,"scrap",n.rng.randi(3,7)),cn(n,e.x,e.y,"metal",n.rng.randi(2,5)),e.respawnT=22),e.hp=0}function cg(n,e){let t=Math.floor(e.x/64),i=Math.floor(e.y/64),s=[Be("V",t,i),Be("V",t+1,i),Be("H",t,i),Be("H",t,i+1),Be("D",t,i)];for(let o of s){let a=n.walls.get(o);if(!a||a.hp<=0||a.type==="door"&&a.open)continue;let c=Ot(o,a);if(oi(e.px,e.py,e.x,e.y,c[0],c[1],c[2],c[3])||At(e.x,e.y,c[0],c[1],c[2],c[3])<10)return hg(n,a)!==e.from&&$s(n,o,Math.max(1,Math.round(e.dmg*.1)),e.from),{kind:"wall",key:o,w:a}}let r=n.deploys.get(tt(t,i));if(r&&r.owner!==e.from){let o=ut(t,i);if(!zt(n,e.px,e.py,o.x,o.y)){let a=r.type==="cupboard"?.05:.25;Ms(n,tt(t,i),Math.max(1,Math.round(e.dmg*a)),e.from)}return{kind:"deploy",key:tt(t,i),d:r}}return null}var hg=(n,e)=>e.owner;function fg(n,e,t){if(t&&t.kind==="wall"){let i=t.key.split(",");if(i[0]==="V")return{x:1,y:0};if(i[0]==="H")return{x:0,y:1};let s=Ot(t.key,t.w),r=s[2]-s[0],o=s[3]-s[1],a=Math.hypot(r,o);return{x:-o/a,y:r/a}}if(t&&t.cx!==void 0){let i=Math.max(1,te(e.px,e.py,t.cx,t.cy));return{x:(e.px-t.cx)/i,y:(e.py-t.cy)/i}}return{x:0,y:1}}function dg(n,e,t,i){if(e.bounces>=2||!n.rng.chance(i))return!1;let s=fg(n,e,t);s.x*(e.px-e.x)+s.y*(e.py-e.y)<0&&(s.x=-s.x,s.y=-s.y);let r=e.vx*s.x+e.vy*s.y,o=e.vx-2*r*s.x,a=e.vy-2*r*s.y,c=n.rng.rand(-.45,.45),l=Math.cos(c),f=Math.sin(c),h=o*l-a*f,d=o*f+a*l,u=Math.hypot(h,d);return h*s.x+d*s.y>=.05*u&&(o=h,a=d),e.vx=o*.6,e.vy=a*.6,e.x=e.px+s.x*6,e.y=e.py+s.y*6,e.dmg=Math.max(1,Math.round(e.dmg*.6)),e.bounces++,e.ricochet=!0,e.col="ricochet",ft(n,e.x,e.y,"#86d8ff",4,180),!0}function jd(n,e){let t=n.player;for(let i=n.bullets.length-1;i>=0;i--){let s=n.bullets[i];if(s.px=s.x,s.py=s.y,s.ricochet){let c=Math.pow(.3,e);if(s.vx*=c,s.vy*=c,Math.hypot(s.vx,s.vy)<150){n.bullets.splice(i,1);continue}}if(s.x+=s.vx*e,s.y+=s.vy*e,s.dist+=Math.hypot(s.vx,s.vy)*e,s.life-=e,s.life<=0||s.x<0||s.y<0||s.x>xe.w||s.y>xe.h||s.dist>3400){n.bullets.splice(i,1);continue}let r=!1,o=null;if(oh(n,(s.px+s.x)/2,(s.py+s.y)/2,Math.abs(s.x-s.px)+Math.abs(s.y-s.py)+12,(c,l)=>{if(l.type==="door"&&l.open)return!1;let f=Ot(c,l);if(oi(s.px,s.py,s.x,s.y,f[0],f[1],f[2],f[3]))return o={kind:"wall",key:c,w:l},!0}),!o&&Gr(n,s.x,s.y)){let c=Math.floor(s.x/64),l=Math.floor(s.y/64),f=n.deploys.get(tt(c,l));if(!(f&&f.type==="turret"&&f.owner===s.from)){let h=ut(c,l);o={kind:"solid",key:tt(c,l),d:f,cx:h.x,cy:h.y}}}let a=null;if(!o){for(let c of n.world.boulders)if(At(c.x,c.y,s.px,s.py,s.x,s.y)<c.r){a={cx:c.x,cy:c.y};break}}if(o||a){o&&cg(n,s),dg(n,s,o||a,a?.8:.15)||(ft(n,s.px,s.py,"#bfb49a",3,110),n.bullets.splice(i,1));continue}for(let c=n.fences.length-1;c>=0;c--){let l=n.fences[c];if(oi(s.px,s.py,s.x,s.y,l.x0,l.y0,l.x1,l.y1)||At(s.x,s.y,l.x0,l.y0,l.x1,l.y1)<5){Qd(n,l,s.dmg),r=!0;break}}if(r){n.bullets.splice(i,1);continue}for(let c of n.barrels)if(!(c.hp<=0)&&ve(s.x,s.y,c.x,c.y)<(c.r+2)*(c.r+2)){Jd(n,c,s.dmg,s.from),r=!0;break}if(r){n.bullets.splice(i,1);continue}if(n.patrol&&s.from!=="patrol"&&At(n.patrol.x,n.patrol.y,s.px,s.py,s.x,s.y)<34){n.patrol.hp-=s.dmg,ft(n,s.x,s.y,"#aab1b8",2,120),n.bullets.splice(i,1);continue}if(n.airdrop&&n.airdrop.fall>=1&&At(n.airdrop.x,n.airdrop.y,s.px,s.py,s.x,s.y)<22){n.airdrop.hp-=s.dmg,n.bullets.splice(i,1);continue}for(let c of n.animals)if(!c.dead&&At(c.x,c.y,s.px,s.py,s.x,s.y)<c.r+2){va(n,c,s.dmg,s.px,s.py,s.from),r=!0;break}if(r){n.bullets.splice(i,1);continue}if(s.from!=="guard"){for(let c of n.guards)if(!c.dead&&At(c.x,c.y,s.px,s.py,s.x,s.y)<qt.r+2){let l=ma(c.x,c.y,s);$d(n,c,s.dmg*(l?la:1),s.from),l&&s.from===Ye&&Xe(n,c.x,c.y-14,"headshot","#ffe07a"),r=!0;break}}if(r){n.bullets.splice(i,1);continue}for(let c of n.units)if(!(c.dead||c.flying||c.eliminated||c.owner===s.from)&&At(c.x,c.y,s.px,s.py,s.x,s.y)<14){let l=ma(c.x,c.y,s),f=s.dmg*(l?la:1);f=lg(c,f,l);let h=s.px,d=s.py;ws(n,c,f,h,d,s.from),l&&s.from===Ye&&Xe(n,c.x,c.y-14,"headshot","#ffe07a"),r=!0;break}if(r){n.bullets.splice(i,1);continue}for(let c of n.transports)if(!(c.destroyed||c.owner===s.from)&&At(c.x,c.y,s.px,s.py,s.x,s.y)<Zt.r+2){c.hp-=s.dmg,c.hp<=0&&(c.destroyed=!0),r=!0;break}if(r){n.bullets.splice(i,1);continue}for(let c of n.convoys){if(s.from==="convoy")break;if(!c.dead&&At(c.x,c.y,s.px,s.py,s.x,s.y)<26){c.hp-=s.dmg,r=!0;break}for(let l of c.guards)if(!l.dead&&At(l.x,l.y,s.px,s.py,s.x,s.y)<14){l.hp-=s.dmg,l.hp<=0&&(l.dead=!0,Rt(n,l.x,l.y,"ammo",n.rng.randi(6,12))),r=!0;break}if(r)break}if(r){n.bullets.splice(i,1);continue}if(s.from!==Ye&&!t.dead&&!t.inCopter&&!n.ghost&&At(t.x,t.y,s.px,s.py,s.x,s.y)<18){let c=ma(t.x,t.y,s);bs(n,ag(n,s.dmg*(c?la:1),c),s.px,s.py,s.from),n.bullets.splice(i,1);continue}}}function Qd(n,e,t){e.hp-=t,e.hp<=0?(ft(n,e.x,e.y,"#caa46a",14,200),n.fences.splice(n.fences.indexOf(e),1),n.needFenceRefresh=!0):ft(n,e.x,e.y,"#d8b888",3,120)}function mh(n,e,t,i,s){let r=i.splash,o=i.splashDmg,a=i.structDmg||i.splashDmg;ft(n,e,t,"#ffb24a",22,320),ft(n,e,t,"#5a534a",12,200),n.flashes.push({x:e,y:t,r,life:.25,max:.25}),n.scorch.push({x:e,y:t,r:r*.66}),n.scorch.length>36&&n.scorch.shift(),n.events.push({type:"explosion",x:e,y:t,r}),n.shake=Math.max(n.shake,16);let c=i===ln.rocket||i.structDmg===50;if(c&&s!==Ye){let h=!1;for(let[d,u]of n.structures)if(u.owner===Ye){let[p,x]=d.split(",").map(Number),m=ut(p,x);if(ve(e,t,m.x,m.y)<(r+64)*(r+64)){h=!0;break}}h&&(n.raidAlarm={x:e,y:t,t:1.5})}if(c){let h=ug(n,e,t,r+128);h&&h!==s&&Gd(n,e,t,"raid_"+h)}for(let[h,d]of[...n.structures]){let[u,p]=h.split(",").map(Number),x=ut(u,p),m=te(e,t,x.x,x.y);m>r+32||d.owner===s||Xr(n,h,a*(1-m/(r+32)))}for(let[h,d]of[...n.walls]){if(d.owner===s)continue;let u=Ot(h,d),p=At(e,t,u[0],u[1],u[2],u[3]);p>r||$s(n,h,a*(1-p/r),s)}for(let[h,d]of[...n.deploys]){if(d.owner===s)continue;let[u,p]=h.split(",").map(Number),x=ut(u,p),m=te(e,t,x.x,x.y);m>r+25.6||zt(n,e,t,x.x,x.y)||Ms(n,h,o*(1-m/(r+25.6)),s)}for(let h of n.animals){if(h.dead)continue;let d=te(e,t,h.x,h.y);d<r+h.r&&va(n,h,o*(1-d/(r+h.r)),e,t,s)}for(let h of n.guards){if(h.dead)continue;let d=te(e,t,h.x,h.y);d<r+14&&$d(n,h,o*(1-d/(r+14)),s)}for(let h of n.convoys){let d=te(e,t,h.x,h.y);!h.dead&&d<r+26&&(h.hp-=o*1.5*(1-d/(r+26)));for(let u of h.guards){if(u.dead)continue;let p=te(e,t,u.x,u.y);p<r+14&&(u.hp-=o*(1-p/(r+14)),u.hp<=0&&(u.dead=!0,Rt(n,u.x,u.y,"ammo",n.rng.randi(6,12))))}}for(let h of n.barrels){if(h.hp<=0)continue;let d=te(e,t,h.x,h.y);d<r+h.r&&Jd(n,h,o*(1-d/(r+h.r)),s)}for(let h=n.fences.length-1;h>=0;h--){let d=n.fences[h],u=te(e,t,d.x,d.y);u<r+23&&Qd(n,d,o*(1-u/(r+23)))}let l=n.player;if(!l.dead&&!l.inCopter){let h=te(e,t,l.x,l.y);if(h<r+16){let d=1-h/(r+16);s===Ye?n.ghost||(l.health-=Math.round(o*.45*d),l.regenDelay=4.5,l.hurt=.28,l.health<=0&&Js(n)):bs(n,Math.round(o*.45*d),e,t,s)}}for(let h of n.units){if(h.dead||h.eliminated||h.owner===s)continue;let d=te(e,t,h.x,h.y);d<r+14&&ws(n,h,o*.8*(1-d/(r+14)),e,t,s)}let f=(h,d,u)=>{if(!h||h.destroyed||d===s)return;let p=te(e,t,h.x,h.y);p<r+30&&gh(n,h,o*(1-p/(r+30)),u)};f(n.copter,Ye,!0);for(let h of n.units)f(h.copter,h.owner,!1,h);for(let h of n.transports){if(h.destroyed||h.owner===s)continue;let d=te(e,t,h.x,h.y);d<r+Zt.r&&(h.hp-=o*(1-d/(r+Zt.r)),h.hp<=0&&(h.destroyed=!0))}if(i.rocket&&n.rng.chance(.25)&&eu(n,e,t),n.patrol){let h=te(e,t,n.patrol.x,n.patrol.y);h<r+34&&(n.patrol.hp-=o*(1-h/(r+34)))}}function ug(n,e,t,i){for(let[s,r]of n.structures){let[o,a]=s.split(",").map(Number),c=ut(o,a);if(ve(e,t,c.x,c.y)<i*i)return r.owner}for(let[s,r]of n.walls){let o=Ot(s,r);if(At(e,t,o[0],o[1],o[2],o[3])<i)return r.owner}return null}function gh(n,e,t,i,s){e.hp-=t,!(e.hp>0||e.destroyed)&&(e.destroyed=!0,xh(n,e.x,e.y),i&&n.player.inCopter&&(n.player.inCopter=!1,n.player.health=0,Js(n)))}function xh(n,e,t){ft(n,e,t,"#ffb24a",30,340),ft(n,e,t,"#5a534a",18,240),n.flashes.push({x:e,y:t,r:96,life:.25,max:.25}),n.scorch.push({x:e,y:t,r:52}),n.scorch.length>36&&n.scorch.shift(),n.wrecks.push({x:e,y:t,t:15}),n.wrecks.length>24&&n.wrecks.shift(),n.shake=Math.max(n.shake,15),n.events.push({type:"explosion",x:e,y:t,r:96})}function eu(n,e,t){n.fires.length>=80||n.fires.push({x:e,y:t,r:36,life:30,max:30,dmgT:0,spread:0,spreadT:n.rng.rand(3,7)})}function tu(n,e){for(let t=n.fires.length-1;t>=0;t--){let i=n.fires[t];if(i.life-=e,i.life<=0){n.fires.splice(t,1);continue}if(i.dmgT-=e,i.dmgT<=0){i.dmgT=.3;for(let[r,o]of[...n.structures]){let[a,c]=r.split(",").map(Number),l=ut(a,c);ve(i.x,i.y,l.x,l.y)<i.r*i.r&&Xr(n,r,22*.3)}for(let[r,o]of[...n.walls]){let a=Ot(r,o);At(i.x,i.y,a[0],a[1],a[2],a[3])<i.r&&$s(n,r,18*.3,"fire")}let s=n.player;!s.dead&&ve(i.x,i.y,s.x,s.y)<(i.r+16)*(i.r+16)&&bs(n,15*.3,void 0,void 0,"fire");for(let r of n.units)r.dead||r.eliminated||ve(i.x,i.y,r.x,r.y)<(i.r+12)*(i.r+12)&&ws(n,r,15*.3)}if(i.spreadT-=e,i.spreadT<=0&&i.spread<3&&(i.spreadT=n.rng.rand(4,8),n.rng.chance(.25))){let s=null,r=(i.r+64)*(i.r+64);for(let[o,a]of n.structures){let[c,l]=o.split(",").map(Number),f=ut(c,l),h=ve(i.x,i.y,f.x,f.y);h<r&&!zt(n,i.x,i.y,f.x,f.y)&&(r=h,s=f)}s&&(eu(n,s.x,s.y),i.spread++)}n.rng.chance(.3)&&n.particles.push({x:i.x+n.rng.rand(-10,10),y:i.y+n.rng.rand(-10,10),vx:n.wind*8,vy:-n.rng.rand(20,50),life:n.rng.rand(.6,1.4),max:1.4,r:n.rng.rand(2,5),col:"rgba(60,56,50,0.5)"})}}function nu(n,e){for(let t=n.satchels.length-1;t>=0;t--){let i=n.satchels[t];i.t-=e,i.t<=0&&(n.satchels.splice(t,1),mh(n,i.x,i.y,{splash:88,splashDmg:120,structDmg:50},i.from))}}function iu(n,e){for(let t=n.grenades.length-1;t>=0;t--){let i=n.grenades[t],s=i.x,r=i.y,o=Math.pow(.9,e*60);i.vx*=o,i.vy*=o,i.x=et(i.x+i.vx*e,8,xe.w-8),i.y=et(i.y+i.vy*e,8,xe.h-8),i.bob+=e,i.t-=e,zt(n,s,r,i.x,i.y)&&(i.x=s,i.y=r,i.t=0),i.t<=0&&(n.grenades.splice(t,1),mh(n,i.x,i.y,Ws,i.from))}}function su(n,e){for(let t=n.rockets.length-1;t>=0;t--){let i=n.rockets[t],s=i.x,r=i.y;i.x+=i.vx*e,i.y+=i.vy*e,i.life-=e,i.smoke-=e,i.smoke<=0&&(i.smoke=.016,n.particles.push({x:i.x,y:i.y,vx:n.rng.rand(-12,12),vy:n.rng.rand(-12,12),life:.5,max:.5,r:n.rng.rand(2,4),col:"rgba(120,114,104,0.5)"}));let o=i.life<=0||i.x<4||i.y<4||i.x>xe.w-4||i.y>xe.h-4;if(!o&&(Gr(n,i.x,i.y)||ah(n,i.x,i.y,2))&&(o=!0),!o&&zt(n,s,r,i.x,i.y)&&(o=!0,i.x=s,i.y=r),!o){for(let a of n.animals)if(!a.dead&&ve(i.x,i.y,a.x,a.y)<(a.r+3)*(a.r+3)){o=!0;break}}if(!o){for(let a of n.barrels)if(a.hp>0&&ve(i.x,i.y,a.x,a.y)<(a.r+3)*(a.r+3)){o=!0;break}}if(!o){let a=(c,l)=>c&&!c.destroyed&&l!==i.from&&ve(i.x,i.y,c.x,c.y)<1089;if(a(n.copter,Ye)&&(o=!0),!o){for(let c of n.units)if(a(c.copter,c.owner)){o=!0;break}}}o&&(n.rockets.splice(t,1),mh(n,i.x,i.y,i.w,i.from))}}function ru(n,e){for(let[t,i]of n.deploys){if(i.type!=="turret")continue;let[s,r]=t.split(",").map(Number),o=ut(s,r),a=ca[i.tier||1];if(n.tick%30===0&&(i.tcOk=pg(n,i.owner)),i.tcOk===!1)continue;i.cd=Math.max(0,(i.cd||0)-e),i.reload>0&&(i.reload-=e,i.reload<=0&&(i.mag=a.mag)),i.targT=(i.targT||0)-e;let c=i.tgt||null;if(c){let l=c.ref;!l||l.dead||l.flying||l.eliminated||l===n.player&&(n.ghost||l.inCopter)||ve(o.x,o.y,l.x,l.y)>a.range*a.range*1.2?(c=null,i.tgt=null):(c.x=l.x,c.y=l.y,c.vx=l.vx||0,c.vy=l.vy||0)}if(i.targT<=0){i.targT=.12;let l=a.range*a.range;c=null;let f=(d,u,p,x,m)=>{let g=ve(o.x,o.y,d,u);g<l&&!gg(n,i.owner,o.x,o.y,d,u)&&(l=g,c={x:d,y:u,vx:p||0,vy:x||0,ref:m})};for(let d of n.animals)!d.dead&&ve(o.x,o.y,d.x,d.y)<l&&f(d.x,d.y,d.vx,d.vy,d);for(let d of n.units)!d.dead&&!d.flying&&!d.eliminated&&d.owner!==i.owner&&f(d.x,d.y,d.vx,d.vy,d);let h=n.player;i.owner!==Ye&&!h.dead&&!h.inCopter&&!n.ghost&&f(h.x,h.y,h.vx,h.vy,h),i.tgt=c}if(c){let l=te(o.x,o.y,c.x,c.y),f=Math.min(.45,l/a.speed)*a.lead,h=Math.atan2(c.y+c.vy*f-o.y,c.x+c.vx*f-o.x),d=(i.tier===3?16:10)*e;if(i.angle=uh(i.angle,h,d),Math.abs(ou(i.angle,h))<.22&&i.cd<=0&&i.reload<=0)if(i.mag<=0)i.reload=a.reload;else{i.mag--,i.cd=a.rof;let u=i.angle+n.rng.rand(-a.spread,a.spread);Ln(n,{x:o.x+Math.cos(i.angle)*nh,y:o.y+Math.sin(i.angle)*nh,angle:u,speed:a.speed,dmg:a.dmg,from:i.owner,life:a.range/a.speed+.1,turret:!0}),n.events.push({type:"turretFire",x:o.x,y:o.y,a:i.angle})}}else{if(n.tick%18===0||i.trk===void 0){let f=null,h=(a.range*2.2)**2;for(let d of n.units)if(!d.dead&&!d.eliminated&&d.owner!==i.owner){let u=ve(o.x,o.y,d.x,d.y);u<h&&(h=u,f=d)}i.trk=f}let l=i.trk&&!i.trk.dead?i.trk:null;if(l)i.angle=uh(i.angle,Math.atan2(l.y-o.y,l.x-o.x),5*e);else{if(i.scanT-=e,i.scanT<=0){i.scanT=n.rng.rand(2.5,6.5);let f=mg(n,i.owner,o.x,o.y),h=f?Math.atan2(o.y-f.y,o.x-f.x):n.rng.rand(0,Ke);i.scanAim=h+n.rng.rand(-1.1,1.1)}i.scanAim!==void 0&&(i.angle=uh(i.angle,i.scanAim,1.6*e))}}}}function pg(n,e){for(let t of n.deploys.values())if(t.type==="cupboard"&&t.owner===e)return!0;return!1}function mg(n,e,t,i){let s=null,r=1e18;for(let[o,a]of n.deploys){if(a.type!=="cupboard"||a.owner!==e)continue;let[c,l]=o.split(",").map(Number),f=ut(c,l),h=ve(t,i,f.x,f.y);h<r&&(r=h,s=f)}return s}function gg(n,e,t,i,s,r){let o=Math.min(t,s),a=Math.max(t,s),c=!1;return xg(n,t,i,s,r,(l,f)=>{if(f.owner===e||f.type==="door"&&f.open)return!1;let h=Ot(l,f);if(oi(t,i,s,r,h[0],h[1],h[2],h[3]))return c=!0,!0}),c}function xg(n,e,t,i,s,r){let o=Math.hypot(i-e,s-t),a=Math.max(1,Math.ceil(o/(64*.5))),c=new Set;for(let l=0;l<=a;l++){let f=l/a,h=Math.floor((e+(i-e)*f)/64),d=Math.floor((t+(s-t)*f)/64),u=h*10007+d;if(!c.has(u)){c.add(u);for(let p of[Be("V",h,d),Be("V",h+1,d),Be("H",h,d),Be("H",h,d+1),Be("D",h,d)]){let x=n.walls.get(p);if(x&&x.hp>0&&r(p,x)===!0)return}}}}var uh=(n,e,t)=>{let i=ou(n,e);return Math.abs(i)<=t?e:n+Math.sign(i)*t},ou=(n,e)=>{let t=(e-n)%Ke;return t>Math.PI&&(t-=Ke),t<-Math.PI&&(t+=Ke),t};function au(n,e){let t=n.player;for(let i=n.loot.length-1;i>=0;i--){let s=n.loot[i];s.life+=e,s.bob+=e;let r=Math.pow(.88,e*60);if(s.vx*=r,s.vy*=r,s.x+=s.vx*e,s.y+=s.vy*e,!t.dead&&!t.inCopter&&!n.ghost&&s.life>.35){let o=te(t.x,t.y,s.x,s.y);if(o<150&&(s.x+=(t.x-s.x)/o*210*e,s.y+=(t.y-s.y)/o*210*e,o<20)){yg(n,s),n.loot.splice(i,1);continue}}if(s.life>.3){let o=null,a=32400;for(let c of n.units){if(c.dead||c.eliminated||c.flying)continue;let l=ve(c.x,c.y,s.x,s.y);l<a&&(a=l,o=c)}if(o){let c=Math.sqrt(a)||1;if(s.x+=(o.x-s.x)/c*240*e,s.y+=(o.y-s.y)/c*240*e,c<22){_g(n,o,s),n.loot.splice(i,1);continue}}}s.life>120&&n.loot.splice(i,1)}}function yg(n,e){let t=n.weapons,i=n.player;if(e.kind==="ammo")t.rifle.reserve+=e.amt,t.pistol.reserve+=Math.ceil(e.amt*.4),t.shotgun.reserve+=Math.ceil(e.amt*.3),Xe(n,i.x,i.y-20,"+"+e.amt+" ammo","#ffe08a");else if(e.kind==="rocket")t.rocket.reserve+=e.amt,Xe(n,i.x,i.y-20,"+"+e.amt+" rocket","#ff9a5a");else if(e.kind==="satchel")n.inv.scrap+=e.amt*8,Xe(n,i.x,i.y-20,"+"+e.amt*8+" scrap","#d6dce0");else if(e.kind==="sniper")n.owned.sniper=!0,t.sniper.reserve+=12,Xe(n,i.x,i.y-20,"SNIPER unlocked!","#bfe3ff");else if(e.kind==="gun")e.gun&&n.owned[e.gun]!==void 0&&(n.owned[e.gun]=!0,t[e.gun].reserve+=e.gun==="hmg"?60:30,Xe(n,i.x,i.y-20,"+"+e.gun.toUpperCase(),"#bfe3ff"));else{n.inv[e.kind]=(n.inv[e.kind]||0)+e.amt;let s={wood:"#b98446",stone:"#aab1b8",metal:"#e8a24e",scrap:"#d6dce0"};Xe(n,i.x,i.y-20,"+"+e.amt+" "+e.kind,s[e.kind]||"#d8e0c2")}}function _g(n,e,t){if(t.kind==="scrap")e.scrap+=t.amt;else if(t.kind==="rocket")e.rockets+=t.amt;else if(t.kind==="satchel")e.satchels+=t.amt;else if(t.kind==="ammo")e.scrap+=Math.ceil(t.amt/8);else if(t.kind==="sniper")e.scrap+=30;else if(t.kind==="gun"){let i={pistol:1,shotgun:2,rifle:3,hmg:4};(i[t.gun]||0)>(i[e.gun]||0)?e.gun=t.gun:e.scrap+=10}else e.inv[t.kind]=(e.inv[t.kind]||0)+t.amt}function lu(n,e){for(let t=n.wrecks.length-1;t>=0;t--){let i=n.wrecks[t];if(i.t-=e,i.t<=0){n.wrecks.splice(t,1);continue}n.rng.chance(.25)&&n.particles.push({x:i.x+n.rng.rand(-12,12),y:i.y+n.rng.rand(-8,8),vx:n.wind*10,vy:-n.rng.rand(24,60),life:n.rng.rand(.7,1.6),max:1.6,r:n.rng.rand(2.5,6),col:"rgba(50,46,44,0.55)"})}}function cu(n,e){let t=n.copter,i=n.player,s=n.cmd;if(!t||t.destroyed){i.inCopter&&(i.inCopter=!1);return}let r=i.inCopter;t.alt=t.alt||0,t.altV=t.altV||0,t.rpm=t.rpm||0,t.pitchA=t.pitchA||0,t.rollA=t.rollA||0,t.pitchV=t.pitchV||0,t.rollV=t.rollV||0,t.yawV=t.yawV||0;let o=r?(s.up?1:0)-(s.down?1:0):0;o>0?t.rpm=Math.min(1,t.rpm+st.spinUp*e):o<0?t.rpm=Math.max(0,t.rpm-st.spinDown*e):t.rpm=Math.max(0,t.rpm-st.rpmDecay*e*(r?1:2.2));let a=st.liftMax*Math.pow(t.rpm,st.liftExp),c=r?et(s.stickPitch||0,-2600,2600):0,l=r?et(s.stickRoll||0,-2600,2600):0,f=r?(s.right?1:0)-(s.left?1:0):0;t.pitchV+=c*st.pitchK*e,t.rollV+=l*st.rollK*e,t.yawV+=f*st.yawK*e,s.flat||(t.rollV+=f*st.bank*e),t.pitchV-=t.pitchA*st.stab*e,t.rollV-=t.rollA*st.stab*e;let h=Math.pow(st.angDrag,e);t.pitchV*=h,t.rollV*=h,t.yawV*=Math.pow(.05,e),t.pitchA=et(t.pitchA+t.pitchV*e,-1.1,1.1),t.rollA=et(t.rollA+t.rollV*e,-1.05,1.05),t.angle+=t.yawV*e;let d=a*Math.cos(t.pitchA)*Math.cos(t.rollA),u=a*Math.sin(-t.pitchA),p=a*Math.sin(t.rollA),x=Math.cos(t.angle),m=Math.sin(t.angle);t.vx+=(u*x-p*m)*e,t.vy+=(u*m+p*x)*e;let g=Math.pow(st.linDrag,e);if(t.vx*=g,t.vy*=g,t.x+=t.vx*e,t.y+=t.vy*e,t.x<st.r&&(t.x=st.r,t.vx*=-.3),t.y<st.r&&(t.y=st.r,t.vy*=-.3),t.x>xe.w-st.r&&(t.x=xe.w-st.r,t.vx*=-.3),t.y>xe.h-st.r&&(t.y=xe.h-st.r,t.vy*=-.3),t.altV+=(d-st.grav)*e,t.altV*=Math.pow(st.altDrag,e),t.alt<26&&t.altV<0&&(t.altV*=Math.pow(.55,e*(1-t.alt/26))),t.alt+=t.altV*e,t.alt>=st.ceiling&&(t.alt=st.ceiling,t.altV=Math.min(0,t.altV)),t.alt<=0){t.alt=0;let y=Math.hypot(t.vx,t.vy),_=Math.abs(t.pitchA)+Math.abs(t.rollA),M=Math.max(0,-t.altV-70)+Math.max(0,y-300)*.3+(_>.5?16:0);if(M>5){let T=M*1.1;if(n.shake=Math.max(n.shake,Math.min(10,M*.12)),Xe(n,t.x,t.y-30,(M>60?"CRASH -":"hard landing -")+Math.round(T),"#d2664a"),ft(n,t.x,t.y,"#c9b48a",12,170),t.altV=Math.min(40,-t.altV*.25),t.rollV+=n.rng.rand(-1.3,1.3)*Math.min(1,M/60),gh(n,t,T,!0),t.destroyed)return}else t.altV=Math.max(0,t.altV);let E=Math.pow(t.rpm>.4?.45:.1,e);if(t.vx*=E,t.vy*=E,d<st.grav){let T=Math.pow(.18,e);t.pitchA*=T,t.rollA*=T,t.pitchV*=T,t.rollV*=T,t.rpm>.3&&n.tick%18===0&&(n.shake=Math.max(n.shake,.7))}t.rpm>.45&&n.tick%10===0&&ft(n,t.x+n.rng.rand(-26,26),t.y+n.rng.rand(-20,20),"#b9a37e",2,130)}else t.alt<50&&t.rpm>.5&&n.tick%14===0&&ft(n,t.x+n.rng.rand(-30,30),t.y+n.rng.rand(-24,24),"#b9a37e",2,110);t.spd=Math.hypot(t.vx,t.vy),t.rotor+=e*(3+t.rpm*52+t.spd*.02),r&&(i.x=t.x,i.y=t.y,i.vx=t.vx,i.vy=t.vy)}function hu(n,e,t){let i=n.world.shop,s={owner:e.owner,x:i.x,y:i.y+(i.r||120)+90,angle:0,vx:0,vy:0,rotor:0,hp:Zt.hp,max:Zt.hp,destroyed:!1,state:"idle",stateT:0,boardT:0,homeX:t.hx,homeY:t.hy,riders:[],destX:0,destY:0};return n.transports.push(s),Xe(n,s.x,s.y,"+transport heli","#bfe3ff"),s}function fu(n,e,t){return t.riders.length>=Zt.seats||t.state==="fly"||t.state==="unload"?!1:(e.aboard=t,e.flying=!0,e.wasRaid=!1,e.state="raid",t.riders.push(e),t.state==="idle"&&(t.state="board"),!0)}function yh(n,e,t,i,s){let r=te(e.x,e.y,t,i),o=Math.atan2(i-e.y,t-e.x);e.angle=Si(e.angle,o,s*3);let a=r>220?1:Math.max(.08,r/220);e.vx+=Math.cos(e.angle)*Zt.accel*a*s,e.vy+=Math.sin(e.angle)*Zt.accel*a*s;let c=Math.pow(Zt.drag,s);e.vx*=c,e.vy*=c;let l=Math.hypot(e.vx,e.vy);return l>Zt.speed&&(e.vx*=Zt.speed/l,e.vy*=Zt.speed/l),e.x=et(e.x+e.vx*s,Zt.r,xe.w-Zt.r),e.y=et(e.y+e.vy*s,Zt.r,xe.h-Zt.r),r}function du(n,e){for(let t=n.transports.length-1;t>=0;t--){let i=n.transports[t];if(i.hp<=0||i.destroyed){xh(n,i.x,i.y);for(let a of i.riders)a.aboard=null,a.flying=!1,a.x=i.x+n.rng.rand(-30,30),a.y=i.y+n.rng.rand(-30,30),ph(n,a);n.transports.splice(t,1);continue}i.riders=i.riders.filter(a=>!a.dead&&a.aboard===i),i.stateT+=e;let s=i.riders.length>0;(s||i.state==="fly"||i.state==="unload"||i.state==="return")&&(i.rotor+=e*40);let r=i.riders.length?i.riders[0].raid:null,o=r&&r.bases?r.bases.find(a=>!a.dead):null;if(i.state==="idle"||i.state==="board"){if(s&&o){if(i.boardT+=e,i.riders.length>=2||i.boardT>5){let a=te(i.x,i.y,o.hx,o.hy),c=Math.max(0,(a-620)/Math.max(1,a));i.destX=i.x+(o.hx-i.x)*c,i.destY=i.y+(o.hy-i.y)*c,i.state="fly",i.stateT=0,i.boardT=0}}else s?yh(n,i,i.homeX-320,i.homeY,e):(i.vx=i.vy=0,i.boardT=0);for(let a of i.riders)a.x=i.x,a.y=i.y}else if(i.state==="fly"){let a=yh(n,i,i.destX,i.destY,e);for(let c of i.riders)c.x=i.x,c.y=i.y;(a<200||!o||i.stateT>16)&&(i.state="unload",i.stateT=0)}else if(i.state==="unload"){for(let a of i.riders){let c=i.x+n.rng.rand(-60,60),l=i.y+n.rng.rand(-60,60);for(let f=0;f<14&&Et(n,c,l,12);f++){let h=n.rng.rand(0,Ke),d=n.rng.rand(40,150);c=i.x+Math.cos(h)*d,l=i.y+Math.sin(h)*d}a.x=et(c,12,xe.w-12),a.y=et(l,12,xe.h-12),a.aboard=null,a.flying=!1}i.riders=[],i.state="return",i.stateT=0}else i.state==="return"&&(yh(n,i,i.homeX-320,i.homeY,e)<160||i.stateT>16)&&(i.state="idle",i.vx=i.vy=0)}}function uu(n,e){if(n.world.rails.length&&(n.trainT-=e,n.trainT<=0&&n.trains.length<2)){n.trainT=n.rng.rand(30,90);let t=n.rng.pick(n.world.rails),s=n.rng.chance(.5)?t.pts:[...t.pts].reverse();n.trains.push({pts:s,seg:0,x:s[0].x,y:s[0].y,px:s[0].x,py:s[0].y,ang:0,speed:n.rng.rand(460,640),smokeT:0})}for(let t=n.trains.length-1;t>=0;t--){let i=n.trains[t];i.px=i.x,i.py=i.y;let s=i.speed*e;for(;s>0&&i.seg<i.pts.length-1;){let l=i.pts[i.seg],f=i.pts[i.seg+1],h=te(l.x,l.y,f.x,f.y),d=te(l.x,l.y,i.x,i.y),u=h-d;if(s<u){let p=(d+s)/h;i.x=l.x+(f.x-l.x)*p,i.y=l.y+(f.y-l.y)*p,s=0}else i.seg++,i.x=f.x,i.y=f.y,s-=u}i.ang=Math.atan2(i.y-i.py,i.x-i.px)||i.ang;let r=36,o=n.player;!o.dead&&!o.inCopter&&At(o.x,o.y,i.px,i.py,i.x,i.y)<r&&bs(n,999,i.px,i.py,"train");for(let l of n.units)!l.dead&&!l.flying&&!l.eliminated&&At(l.x,l.y,i.px,i.py,i.x,i.y)<r&&ws(n,l,999,i.px,i.py,"train");for(let l of n.animals)!l.dead&&At(l.x,l.y,i.px,i.py,i.x,i.y)<r&&(l.hp=0,l.dead=!0,l.respawnT=n.rng.rand(11,18));for(let l of n.barrels)l.hp>0&&At(l.x,l.y,i.px,i.py,i.x,i.y)<r&&(l.hp=0);let a=te(i.px,i.py,i.x,i.y),c=Math.max(1,Math.ceil(a/64));for(let l=0;l<=c;l++){let f=l/c,h=Math.floor((i.px+(i.x-i.px)*f)/64),d=Math.floor((i.py+(i.y-i.py)*f)/64);Xr(n,h+","+d,9999),Ms(n,h+","+d,9999,"train");for(let u of["V,"+h+","+d,"V,"+(h+1)+","+d,"H,"+h+","+d,"H,"+h+","+(d+1)])$s(n,u,9999,"train")}if(i.smokeT-=e,i.smokeT<=0){i.smokeT=.28;let l=i.x+Math.cos(i.ang)*16,f=i.y+Math.sin(i.ang)*16;n.particles.push({x:l,y:f,vx:n.rng.rand(-7,7)+n.wind*5,vy:-n.rng.rand(6,16),life:n.rng.rand(11,15),max:15,r:n.rng.rand(5,10),col:"rgba(74,74,80,0.5)"}),n.particles.push({x:l,y:f,vx:n.rng.rand(-4,4),vy:-n.rng.rand(4,10),life:n.rng.rand(8,12),max:12,r:n.rng.rand(3,6),col:"rgba(40,40,46,0.45)"})}i.seg>=i.pts.length-1&&n.trains.splice(t,1)}for(let t of n.world.crossings)t.active=n.trains.some(i=>ve(i.x,i.y,t.x,t.y)<820*820),t.gate+=((t.active?1:0)-t.gate)*Math.min(1,e*3)}function pu(n,e){n.convoys.length||(n.convoyT-=e,n.convoyT<=0&&vg(n));for(let t=n.convoys.length-1;t>=0;t--){let i=n.convoys[t];if(i.hp<=0&&!i.dead){i.dead=!0,ft(n,i.x,i.y,"#ffb24a",30,340),ft(n,i.x,i.y,"#ffe2a0",16,220),n.flashes.push({x:i.x,y:i.y,r:96,life:.25,max:.25}),n.shake=Math.max(n.shake,12),n.scorch.push({x:i.x,y:i.y,r:60}),n.scorch.length>36&&n.scorch.shift(),cn(n,i.x,i.y,"metal",n.rng.randi(50,90)),cn(n,i.x,i.y,"scrap",n.rng.randi(60,110)),Rt(n,i.x,i.y,"ammo",n.rng.randi(50,100));for(let l=0,f=n.rng.randi(3,5);l<f;l++)Rt(n,i.x,i.y,"rocket",1);for(let l=0,f=n.rng.randi(2,4);l<f;l++)Rt(n,i.x,i.y,"satchel",1);for(let l of i.guards)l.dead||Rt(n,l.x,l.y,"ammo",n.rng.randi(8,16));Xe(n,i.x,i.y,"convoy destroyed!","#ffd0a0"),n.events.push({type:"explosion",x:i.x,y:i.y,r:96}),n.convoys.splice(t,1);continue}i.px=i.x,i.py=i.y;let s=dn.speed*e;for(;s>0&&i.seg<i.pts.length-1;){let l=i.pts[i.seg],f=i.pts[i.seg+1],h=te(l.x,l.y,f.x,f.y),d=te(l.x,l.y,i.x,i.y),u=h-d;if(s<u){let p=(d+s)/h;i.x=l.x+(f.x-l.x)*p,i.y=l.y+(f.y-l.y)*p,s=0}else i.seg++,i.x=f.x,i.y=f.y,s-=u}if(i.ang=Math.atan2(i.y-i.py,i.x-i.px)||i.ang,i.seg>=i.pts.length-1){n.convoys.splice(t,1);continue}i.gunCd=Math.max(0,i.gunCd-e);let r=null,o=dn.trange,a=n.player;if(!a.dead&&!a.inCopter&&!n.ghost){let l=te(i.x,i.y,a.x,a.y);l<o&&!zt(n,i.x,i.y,a.x,a.y)&&!ai(n,i.x,i.y,a.x,a.y)&&(r=a,o=l)}for(let l of n.units){if(l.dead||l.flying||l.eliminated)continue;let f=te(i.x,i.y,l.x,l.y);f<o&&!zt(n,i.x,i.y,l.x,l.y)&&!ai(n,i.x,i.y,l.x,l.y)&&(r=l,o=f)}r?(i.taim=Math.atan2(r.y-i.y,r.x-i.x),i.gunCd<=0&&(i.gunCd=dn.trof,Ln(n,{x:i.x+Math.cos(i.taim)*30,y:i.y+Math.sin(i.taim)*30,angle:i.taim+n.rng.rand(-.04,.04),speed:dn.bspeed,dmg:dn.tdmg,from:"convoy",life:.6}),ft(n,i.x+Math.cos(i.taim)*30,i.y+Math.sin(i.taim)*30,"#ffd76b",2,90))):i.taim=i.ang;let c=[[-46,28],[-46,-28],[50,30],[50,-30]];for(let l=0;l<i.guards.length;l++){let f=i.guards[l];if(f.dead)continue;f.gunCd=Math.max(0,f.gunCd-e);let h=null,d=dn.grange;if(!a.dead&&!a.inCopter&&!n.ghost){let u=te(f.x,f.y,a.x,a.y);u<d&&!zt(n,f.x,f.y,a.x,a.y)&&!ai(n,f.x,f.y,a.x,a.y)&&(h=a,d=u)}for(let u of n.units){if(u.dead||u.flying||u.eliminated)continue;let p=te(f.x,f.y,u.x,u.y);p<d&&!zt(n,f.x,f.y,u.x,u.y)&&!ai(n,f.x,f.y,u.x,u.y)&&(h=u,d=p)}if(te(f.x,f.y,i.x,i.y)>dn.leash&&(h=null),h){let u=Math.atan2(h.y-f.y,h.x-f.x);f.angle=Si(f.angle,u,e*9),f.gunCd<=0&&Math.abs(wg(f.angle,u))<.3&&(f.gunCd=dn.grof,Ln(n,{x:f.x+Math.cos(f.angle)*14,y:f.y+Math.sin(f.angle)*14,angle:f.angle+n.rng.rand(-.06,.06),speed:dn.bspeed,dmg:dn.gdmg,from:"convoy",life:.55}));let p=0,x=0;d>260?(p=Math.cos(u),x=Math.sin(u)):d<150&&(p=-Math.cos(u),x=-Math.sin(u));let m=f.x+p*dn.gspeed*e,g=f.y+x*dn.gspeed*e;Et(n,m,g,12)||(f.x=m,f.y=g)}else{let u=i.x+Math.cos(i.ang)*c[l][0]-Math.sin(i.ang)*c[l][1],p=i.y+Math.sin(i.ang)*c[l][0]+Math.cos(i.ang)*c[l][1],x=te(f.x,f.y,u,p);if(x>4){let m=dn.speed+50;f.x+=(u-f.x)/x*Math.min(x,m*e),f.y+=(p-f.y)/x*Math.min(x,m*e)}f.angle=Si(f.angle,i.ang,e*5)}}}}function vg(n){n.convoyT=n.rng.rand(180,300);let e=[];for(let r of n.world.roads){let o=-1,a=null;for(let c=0;c<=r.pts.length;c++){let l=c<r.pts.length&&r.fade[c]>.05;l&&o===-1&&(o=c),!l&&o!==-1&&((!a||c-o>a.len)&&(a={start:o,len:c-o}),o=-1)}a&&a.len>=10&&e.push({rd:r,...a})}if(!e.length)return;let t=e[Math.floor(n.rng.next()*e.length)],i=t.rd.pts.slice(t.start,t.start+t.len);n.rng.chance(.5)&&(i=[...i].reverse());let s={pts:i,seg:0,x:i[0].x,y:i[0].y,px:i[0].x,py:i[0].y,ang:0,taim:0,hp:dn.vhp,max:dn.vhp,gunCd:0,dead:!1,guards:[]};for(let r=0;r<4;r++)s.guards.push({x:i[0].x,y:i[0].y,hp:dn.ghp,max:dn.ghp,angle:0,gunCd:0,dead:!1});n.convoys.push(s),n.events.push({type:"convoy",x:s.x,y:s.y})}function mu(n,e){if(!n.patrol){n.patrolT-=e,n.patrolT<=0&&Mg(n);return}let t=n.patrol;t.rotor+=e*28;let i=n.teams.find(l=>l.owner===t.huntOwner&&!l.eliminated&&l.bases.some(f=>!f.dead));if(t.hp<=0){bg(n);return}let s,r,o=!1;if(!i||t.orbitT<=0){if(o=!0,s=t.exitX,r=t.exitY,t.x<-320||t.x>xe.w+320||t.y<-320||t.y>xe.h+320){n.patrol=null,n.patrolT=n.rng.rand(240,420);return}}else{let l=i.bases.find(h=>!h.dead);te(t.x,t.y,l.hx,l.hy)>460&&!t.orbiting?(s=l.hx,r=l.hy):(t.orbiting=!0,t.orbitA+=.55*e,t.orbitT-=e,s=l.hx+Math.cos(t.orbitA)*Jn.orbitR,r=l.hy+Math.sin(t.orbitA)*Jn.orbitR)}let a=Math.atan2(r-t.y,s-t.x);t.angle=Si(t.angle,a,e*3);let c=te(t.x,t.y,s,r);if(t.spd=Math.min(Jn.speed,Jn.speed*c/300+40),t.x+=Math.cos(t.angle)*t.spd*e,t.y+=Math.sin(t.angle)*t.spd*e,t.flash=Math.max(0,t.flash-e),i&&!o){if(t.strafeT-=e,t.strafeT<=0){t.strafeT=1.2;let l=null,f=Jn.strafeR;for(let h of n.units){if(h.owner!==t.huntOwner||h.dead||h.eliminated||h.flying)continue;let d=te(t.x,t.y,h.x,h.y);d<f&&(f=d,l=h)}if(l){for(let h=0;h<5;h++){let d=.18+h*.02,u=l.x+l.vx*d+n.rng.rand(-26,26),p=l.y+l.vy*d+n.rng.rand(-26,26);Ln(n,{x:t.x,y:t.y,angle:Math.atan2(p-t.y,u-t.x),speed:900,dmg:9,from:"patrol",life:1,col:"hmg"})}t.flash=.12}}for(let l of n.units)if(!(l.owner!==t.huntOwner||l.dead||l.eliminated||l.flying)&&!(ve(t.x,t.y,l.x,l.y)>Jn.flakR*Jn.flakR)&&(l.flakT=(l.flakT||0)-e,l.flakT<=0)){l.flakT=1;let f=te(t.x,t.y,l.x,l.y)/1100,h=t.x+Math.cos(t.angle)*t.spd*f,d=t.y+Math.sin(t.angle)*t.spd*f,u=Math.atan2(d-l.y,h-l.x)+n.rng.rand(-.07,.07);l.angle=u;let p=l.x+Math.cos(u)*1100*.7,x=l.y+Math.sin(u)*1100*.7;n.events.push({type:"flak",x0:l.x,y0:l.y,x1:p,y1:x}),At(t.x,t.y,l.x,l.y,p,x)<40&&(t.hp-=6,ft(n,t.x,t.y,"#aab1b8",3,120))}}}function Mg(n){let e=null,t=-1;for(let o of n.teams){if(o.eliminated)continue;let a=o.bases.find(u=>!u.dead);if(!a)continue;let c=n.units.filter(u=>u.owner===o.owner&&!u.dead&&!u.eliminated).length,l=0;for(let u of n.structures.values())u.owner===o.owner&&l++;let f=n.deploys.get(a.tcKey),h=f?f.store.wood+f.store.stone+f.store.metal:0,d=c*10+l*2+h*.01;d>t&&(t=d,e={t:o,rec:a})}if(!e){n.patrolT=n.rng.rand(120,240);return}let{t:i,rec:s}=e,r=s.hx>xe.w/2;n.patrol={huntOwner:i.owner,huntId:i.id,x:r?-200:xe.w+200,y:et(s.hy+n.rng.rand(-600,600),200,xe.h-200),exitX:r?xe.w+360:-360,exitY:s.hy,angle:0,rotor:0,spd:0,hp:Jn.hp,max:Jn.hp,orbitA:n.rng.rand(0,Ke),orbitT:Jn.orbitT,orbiting:!1,strafeT:1,flash:0},Xe(n,s.hx,s.hy-80,"Patrol helicopter inbound!","#ffb84a"),n.elims.push({text:"PATROL HELI hunts Base "+(i.id+1),t:10})}function bg(n){let e=n.patrol;ft(n,e.x,e.y,"#ffb24a",40,360),ft(n,e.x,e.y,"#ff9b3d",24,280),n.scorch.push({x:e.x,y:e.y,r:64}),n.scorch.length>36&&n.scorch.shift(),n.wrecks.push({x:e.x,y:e.y,t:15});for(let t=0,i=n.rng.randi(4,6);t<i;t++)Rt(n,e.x+n.rng.rand(-30,30),e.y+n.rng.rand(-30,30),"rocket",1);for(let t=0,i=n.rng.randi(2,3);t<i;t++)Rt(n,e.x+n.rng.rand(-30,30),e.y+n.rng.rand(-30,30),"satchel",1);Rt(n,e.x,e.y,"ammo",n.rng.randi(100,180)),cn(n,e.x,e.y,"scrap",n.rng.randi(80,150)),cn(n,e.x,e.y,"metal",n.rng.randi(50,90)),n.elims.push({text:"PATROL HELI DOWN",t:12}),n.events.push({type:"explosion",x:e.x,y:e.y,r:110}),n.shake=Math.max(n.shake,14),n.patrol=null,n.patrolT=n.rng.rand(240,420)}var wg=(n,e)=>{let t=(e-n)%Ke;return t>Math.PI&&(t-=Ke),t<-Math.PI&&(t+=Ke),t};function gu(n,e){let t=n.weather;t.timer-=e,t.timer<=0&&(t.mode==="clear"?(t.mode="rain",t.timer=n.rng.rand(8,16),t.boltT=n.rng.rand(3,8)):(t.mode="clear",t.timer=n.rng.rand(90,170)));let i=t.mode==="rain"?1:0;t.rain+=(i-t.rain)*Math.min(1,e*.5),t.rain>.4&&(t.boltT-=e,t.boltT<=0&&(t.boltT=n.rng.rand(4,13),t.flash=1,n.events.push({type:"bolt"}))),t.flash=Math.max(0,t.flash-e*2.4),t.fogTimer-=e,t.fogTimer<=0&&(t.fogOn=!t.fogOn,t.fogTimer=t.fogOn?n.rng.rand(28,60):n.rng.rand(45,95)),t.fog+=((t.fogOn?1:0)-t.fog)*Math.min(1,e*.22),n.wind=(Math.sin(n.t*.5)*.5+Math.sin(n.t*1.9+1.1)*.5)*(1+t.rain*1.7)}function xu(n,e){if(!n.plane&&!n.airdrop&&(n.airdropT-=e,n.airdropT<=0&&(yu(n),n.airdropT=n.rng.rand(120,300))),n.plane){let t=n.plane;t.x+=t.vx*e,t.prop+=e*30,!t.released&&(t.vx>0&&t.x>=t.dropX||t.vx<0&&t.x<=t.dropX)&&(t.released=!0,n.airdrop={x:t.dropX,y:t.dropY-780,gy:t.dropY,hp:90,max:90,fall:0,sway:n.rng.rand(0,Ke),loot:Tg(n)},Xe(n,t.dropX,t.dropY,"Airdrop incoming!","#ffe07a"),n.events.push({type:"airdropCalled",x:t.dropX,y:t.dropY})),(t.x<-300||t.x>xe.w+300)&&(n.plane=null)}if(n.airdrop){let t=n.airdrop;if(t.fall<1){t.fall=Math.min(1,t.fall+e*.16);let i=t.fall*t.fall*(3-2*t.fall);t.y=t.gy-780+780*i,t.sway+=e*1.5}else t.hp<=0&&(Eg(n,t),n.airdrop=null)}}function yu(n,e,t){let i=e,s=t;if(i===void 0){for(let o=0;o<24;o++){let a=n.rng.rand(.16*xe.w,.84*xe.w),c=n.rng.rand(.16*xe.h,.84*xe.h);if(!(te(a,c,n.world.shop.x,n.world.shop.y)<Tt+160)){i=a,s=c;break}}i===void 0&&(i=xe.w*.25,s=xe.h*.25)}let r=n.rng.chance(.5);n.plane={x:i+(r?-1700:1700),y:s,vx:r?820:-820,dropX:i,dropY:s,released:!1,prop:0}}function Tg(n){let e=[["scrap",n.rng.randi(50,110)]];return n.rng.chance(.85)&&e.push(["rocket",n.rng.randi(2,6)]),n.rng.chance(.85)&&e.push(["ammo",n.rng.randi(70,150)]),n.rng.chance(.55)&&e.push(["metal",n.rng.randi(25,60)]),n.rng.chance(.5)&&e.push(["wood",n.rng.randi(30,70)]),n.rng.chance(.4)&&e.push(["sniper",1]),e}function Eg(n,e){ft(n,e.x,e.y,"#ffd27a",30,300),ft(n,e.x,e.y,"#d2664a",16,220);for(let[t,i]of e.loot)if(t==="rocket")for(let s=0;s<i;s++)Rt(n,e.x,e.y,"rocket",1);else t==="sniper"?Rt(n,e.x,e.y,"sniper",1):t==="ammo"?Rt(n,e.x,e.y,"ammo",i):cn(n,e.x,e.y,t,i);Xe(n,e.x,e.y-30,"AIRDROP LOOTED!","#ffe07a")}function _h(n,e,t){if(n.signal)return!1;let i=n.player,s=te(i.x,i.y,e,t);if(s>700){let r=700/s;e=i.x+(e-i.x)*r,t=i.y+(t-i.y)*r}return bt(n,e,t)?(Xe(n,i.x,i.y-20,"Not in the safe zone","#d2664a"),!1):(n.inv.signal|0)<1?(Xe(n,i.x,i.y-20,"No supply signal \u2014 buy one at the trade zone","#d2664a"),!1):(n.inv.signal--,n.signal={x:e,y:t,t:0,dur:6,puff:0,called:!1},Xe(n,i.x,i.y-20,"Supply signal out \u2014 everyone saw it","#c9a0ff"),!0)}function _u(n,e,t){return n.signal||n.plane||n.airdrop?!1:(n.signal={x:e,y:t,t:0,dur:6,puff:0,called:!1},!0)}function vu(n,e){let t=n.signal;t&&(t.t+=e,t.puff-=e,t.puff<=0&&(t.puff=.12,ft(n,t.x+n.rng.rand(-8,8),t.y+n.rng.rand(-6,2),"#a96bd4",3,60)),!t.called&&t.t>t.dur&&!n.plane&&!n.airdrop&&(yu(n,t.x,t.y),t.called=!0),(t.called||t.t>t.dur+60)&&(n.signal=null))}function Mu(n,e){let t=n.quarry;if(!t)return;let i=new Set;!n.player.dead&&!n.player.inCopter&&!n.ghost&&ve(n.player.x,n.player.y,t.x,t.y)<t.r*t.r&&i.add(Ye);for(let s of n.units)s.dead||s.eliminated||s.flying||ve(s.x,s.y,t.x,t.y)<t.r*t.r&&i.add(s.owner);if(i.size===1){let s=[...i][0];if(s!==t.owner){if(t.capOwner!==s&&(t.capOwner=s,t.capT=0),t.capT+=e,t.capT>=$n.capT){t.owner=s,t.capT=0,t.capOwner=null,t.payT=0;let r=n.teams.find(a=>a.owner===s),o=s===Ye?"You":"Base "+(r?r.id+1:"?");Xe(n,t.x,t.y-44,"Quarry captured!","#cdd6a3"),n.elims.push({text:"QUARRY \u2192 "+o,t:10})}}else t.capT=0}else t.capT=Math.max(0,t.capT-e);if(t.owner&&t.owner!==Ye){let s=n.teams.find(o=>o.owner===t.owner);s&&!s.eliminated&&n.units.some(o=>o.owner===t.owner&&o.primary&&!o.eliminated)||(t.owner=null)}if(t.owner&&(t.arm+=e,t.payT+=e,t.payT>=$n.payEvery)){if(t.payT=0,t.paid++,t.owner===Ye)n.inv.stone+=$n.pay.stone,n.inv.metal+=$n.pay.metal,n.inv.scrap+=$n.pay.scrap;else{let s=n.teams.find(a=>a.owner===t.owner),r=s&&s.bases.find(a=>!a.dead),o=r&&n.deploys.get(r.tcKey);o&&o.store&&(o.store.stone+=$n.pay.stone,o.store.metal+=$n.pay.metal,o.store.scrap+=$n.pay.scrap)}Xe(n,t.x,t.y-44,"+stone +metal +scrap","#cdd6a3")}}function bu(n,e){if(!n.lockedCrate){if(n.crateT-=e,n.crateT<=0){let s=n.world.monuments.filter(a=>a.type!=="quarry"),r=n.rng.pick(s),o=n.rng.rand(0,Ke);n.lockedCrate={x:r.x+Math.cos(o)*(r.r+90),y:r.y+Math.sin(o)*(r.r+90),mon:r.name,t:Xs.hackT,started:!1,blink:0},Xe(n,n.lockedCrate.x,n.lockedCrate.y-30,"Locked crate at the "+r.name+"!","#ffb84a"),n.elims.push({text:"LOCKED CRATE \u2014 "+r.name,t:12}),n.crateT=n.rng.rand(240,360)}return}let t=n.lockedCrate;t.blink+=e;let i=!n.player.dead&&!n.ghost&&ve(n.player.x,n.player.y,t.x,t.y)<Xs.r*Xs.r;if(!i){for(let s of n.units)if(!(s.dead||s.eliminated||s.flying)&&ve(s.x,s.y,t.x,t.y)<Xs.r*Xs.r){i=!0;break}}if(i&&(t.started=!0,t.t-=e),t.t<=0){ft(n,t.x,t.y,"#ffd27a",30,300),ft(n,t.x,t.y,"#d2664a",16,220),cn(n,t.x,t.y,"scrap",n.rng.randi(80,140)),cn(n,t.x,t.y,"metal",n.rng.randi(40,80));for(let s=0,r=n.rng.randi(3,6);s<r;s++)Rt(n,t.x+n.rng.rand(-20,20),t.y+n.rng.rand(-20,20),"rocket",1);for(let s=0,r=n.rng.randi(2,4);s<r;s++)Rt(n,t.x+n.rng.rand(-20,20),t.y+n.rng.rand(-20,20),"satchel",1);Rt(n,t.x,t.y,"ammo",n.rng.randi(80,160)),n.rng.chance(.5)&&Rt(n,t.x,t.y,"sniper",1),Xe(n,t.x,t.y-24,"Locked crate opened!","#ffb84a"),n.lockedCrate=null}}function vh(n){let e=n.rng,t=xe.w,i=xe.h,s=(o,a,c)=>{let l=c?e.rand(86,140):e.rand(70,128),f=[],h=l;for(let d=0,u=e.randi(5,9);d<u;d++){let p=e.rand(-.95,.95)*l,x=e.rand(-.42,.42)*l,m=l*e.rand(.55,1);f.push({dx:p,dy:x,r:m}),h=Math.max(h,Math.hypot(p,x)+m)}return{x:o,y:a,puffs:f,r:h,op:c?e.rand(.92,1):e.rand(.7,1),sp:e.rand(9,19),heavy:c}};n.clouds=[];let r=e.randi(7,10);for(;r>0;)if(r>=2&&e.chance(.5)){let o=e.rand(0,t),a=e.rand(0,i),c=Math.min(r,e.randi(2,3));for(let l=0;l<c;l++)n.clouds.push(s(o+e.rand(-150,150),a+e.rand(-95,95),!0));r-=c}else n.clouds.push(s(e.rand(0,t),e.rand(0,i),e.chance(.4))),r--;n.fogBanks=[];for(let o=0,a=e.randi(13,20);o<a;o++){let c=e.rand(150,320),l=[];for(let f=0,h=e.randi(2,5);f<h;f++)l.push({dx:e.rand(-1,1)*c,dy:e.rand(-.6,.6)*c,r:c*e.rand(.7,1.2)});n.fogBanks.push({x:e.rand(0,t),y:e.rand(0,i),r:c,puffs:l,dens:e.rand(.5,1.15),sp:e.rand(5,12),vy:e.rand(-3,3)})}n.fireflies=[];for(let o=0,a=e.randi(16,28);o<a;o++)n.fireflies.push({x:e.rand(t/3+30,2*t/3-30),y:e.rand(60,i-60),vx:e.rand(-28,28),vy:e.rand(-28,28),ph:e.rand(0,Ke),fs:e.rand(2.5,4.5),wT:e.rand(.5,1.7)})}function wu(n,e){let t=xe.w,i=xe.h;n.clouds||vh(n);for(let o of n.clouds)o.x+=o.sp*e,o.x-o.r>t+160&&(o.x=-o.r-n.rng.rand(0,500),o.y=n.rng.rand(0,i));for(let o of n.fogBanks)o.x+=o.sp*e,o.y+=o.vy*e,o.x-o.r>t+220&&(o.x=-o.r-n.rng.rand(0,450),o.y=n.rng.rand(0,i)),o.y<-o.r?o.y=i+o.r*.5:o.y>i+o.r&&(o.y=-o.r*.5);let s=t/3+20,r=2*t/3-20;for(let o of n.fireflies){if(o.wT-=e,o.wT<=0){o.wT=n.rng.rand(.5,1.7);let a=n.rng.rand(0,Ke),c=n.rng.rand(14,40);o.vx=Math.cos(a)*c,o.vy=Math.sin(a)*c}o.x+=o.vx*e,o.y+=o.vy*e,o.x<s&&(o.x=s,o.vx=Math.abs(o.vx)),o.x>r&&(o.x=r,o.vx=-Math.abs(o.vx)),o.y=et(o.y,40,i-40),o.ph+=o.fs*e}for(let o=n.footprints.length-1;o>=0;o--)n.footprints[o].t+=e,n.footprints[o].t>=10&&n.footprints.splice(o,1)}function Ma(n,e,t){if(e.fpAcc=(e.fpAcc||0)+te(e.x,e.y,e.fpX||e.x,e.fpY||e.y),e.fpX=e.x,e.fpY=e.y,e.fpAcc<30)return;e.fpAcc=0,e.fpSide=!e.fpSide;let i=n.world.lakeAt(e.x,e.y);if(i&&!i.frozen){n.events.push({type:"splash",x:e.x,y:e.y});return}let s=e.fpSide?5:-5;n.footprints.push({x:e.x-Math.sin(t)*s,y:e.y+Math.cos(t)*s,a:t,t:0}),n.footprints.length>700&&n.footprints.shift()}function Tu(n,e){for(let t of n.resources)t.amount>=t.max||(t.regen+=e,t.amount<=0?t.regen>=29&&(t.amount=t.max,t.regen=0):t.regen>=2.5&&(t.amount=Math.min(t.max,t.amount+Math.ceil(t.max*.05)),t.regen=0));for(let t of n.barrels)t.hp>0||(t.respawnT-=e,t.respawnT<=0&&(t.hp=t.max))}var Eu={1:"pistol",2:"rifle",3:"minigun",4:"rocket",6:"sniper",7:"shotgun",8:"hmg"};function Zr(n){let e=Eu[n.slot];return e&&n.owned[e]?e:null}function Au(n,e){let t=n.player,i=n.cmd;if(t.gatherCd=Math.max(0,(t.gatherCd||0)-e),t.recoil=Math.max(0,t.recoil-42*e),t.swing=Math.max(0,t.swing-e),t.hurt=Math.max(0,t.hurt-e),t.invuln=Math.max(0,t.invuln-e),cu(n,e),t.dead){t.deadT-=e,t.deadT<=0&&Cg(n);return}if(t.poison>0&&(t.poison-=e,t.regenDelay=Math.max(t.regenDelay,1.5),t.health-=3.2*e,n.tick%60===0&&Xe(n,t.x,t.y-20,"poison","#7bbf4f"),t.health<=0)){Js(n,!0);return}if(t.regenDelay=Math.max(0,t.regenDelay-e),t.regenDelay<=0&&t.health<t.maxhp&&(t.health=Math.min(t.maxhp,t.health+12*e)),t.inCopter)return;t.angle=Math.atan2(i.my-t.y,i.mx-t.x);let s=(i.right?1:0)-(i.left?1:0),r=(i.down?1:0)-(i.up?1:0);(i.moveX||i.moveY)&&(s=i.moveX,r=i.moveY);let o=i.run?t.run:t.walk,a=Zr(n);a==="minigun"&&n.weapons.minigun.spin>=ln.minigun.windup&&(o*=.4);let c=n.world.lakeAt(t.x,t.y);c&&!c.frozen&&(o*=.5);let l=Math.hypot(s,r),f=0,h=0;if(l>0&&(f=s/l*o,h=r/l*o),c&&c.frozen){let y=Math.min(1,e*1.1);if(t.vx+=(f-t.vx)*y,t.vy+=(h-t.vy)*y,l===0){let _=Math.pow(.6,e);t.vx*=_,t.vy*=_}}else t.vx=f,t.vy=h;t.moving=Math.hypot(t.vx,t.vy)>10;let d={passOwner:Ye,openOwnDoors:!1},u=t.x+t.vx*e,p=t.y+t.vy*e;Et(n,t.x,t.y,jt,d)?(t.x=u,t.y=p):(Et(n,u,t.y,jt,d)?t.vx*=-.2:t.x=u,Et(n,t.x,p,jt,d)?t.vy*=-.2:t.y=p),t.x=et(t.x,jt,xe.w-jt),t.y=et(t.y,jt,xe.h-jt);for(let y of n.resources)y.amount>0&&ba(t,y.x,y.y,y.r+jt-6);for(let y of n.barrels)y.hp>0&&ba(t,y.x,y.y,y.r+jt-4);for(let y of n.world.boulders)ba(t,y.x,y.y,y.r+jt-2);ba(t,n.world.shop.x,n.world.shop.y,n.world.shop.r+jt),t.moving&&Ma(n,t,Math.atan2(t.vy,t.vx));let x=a&&n.weapons[a],m=a&&ln[a];if(x&&(x.cd=Math.max(0,x.cd-e),x.reloading>0&&(x.reloading-=e,x.reloading<=0))){let y=Math.min(m.magSize-x.ammo,x.reserve);x.ammo+=y,x.reserve-=y}let g=!n.buildMode&&!t.dead&&!t.inCopter&&!n.shopOpen&&!n.storeOpen;if(g&&a==="minigun"){let y=n.weapons.minigun;i.fireHeld?y.spin=Math.min(m.windup+.4,y.spin+e):y.spin=Math.max(0,y.spin-1.6*e),i.fireHeld&&y.spin>=m.windup&&wa(n)}else g&&i.fireHeld&&m&&m.auto?wa(n):g&&i.fireHeld&&n.slot===0&&t.gatherCd<=0&&(t.gatherCd=.34,Ag(n));n.rapidRockets&&g&&i.fireHeld&&(n.rapidCd=Math.max(0,(n.rapidCd||0)-e),n.rapidCd<=0&&!bt(n,t.x,t.y)&&(n.rapidCd=.1,Yr(n,t.x+Math.cos(t.angle)*26,t.y+Math.sin(t.angle)*26,t.angle,Ye)))}function ba(n,e,t,i){let s=ve(n.x,n.y,e,t);if(s<i*i&&s>.01){let r=Math.sqrt(s);n.x+=(n.x-e)/r*(i-r),n.y+=(n.y-t)/r*(i-r)}}function wa(n){let e=n.player,t=Zr(n);if(!t)return;if(bt(n,e.x,e.y)){gn(n,"No weapons in the safe zone");return}let i=n.weapons[t],s=ln[t];if(i.reloading>0||i.cd>0)return;if(i.ammo<=0){Mh(n);return}i.ammo--,i.cd=s.rof;let r=s.spread;t==="rifle"&&e.rifleLaser&&(r*=.4);let o=s.pellets||1;for(let a=0;a<o;a++){let c=e.angle+n.rng.rand(-r,r),l=e.x+Math.cos(c)*26,f=e.y+Math.sin(c)*26;s.rocket?Yr(n,l,f,c,Ye):Ln(n,{x:l,y:f,angle:c,speed:s.speed,dmg:s.dmg,from:Ye,life:s.range,col:s.tracer||null})}e.recoil=Math.min(12,e.recoil+s.kick),n.muzzle={x:e.x+Math.cos(e.angle)*30,y:e.y+Math.sin(e.angle)*30,a:e.angle,t:s.rocket?.08:.05},n.events.push({type:"shot",x:e.x,y:e.y,a:e.angle,weapon:t})}function Mh(n){let e=Zr(n);if(!e)return;let t=n.weapons[e],i=ln[e];t.reloading>0||t.ammo>=i.magSize||t.reserve<=0||(t.reloading=i.reloadT)}function Kr(n,e){if(n.player.inCopter)return;let t=Eu[e];if(t&&!n.owned[t]){gn(n,"locked \u2014 buy it at the trade shop");return}n.slot=e,n.buildMode=e===5,n.rapidRockets&&e!==4&&(n.rapidRockets=!1)}function Ag(n){let e=n.player;e.swing=.16;let t=null,i=oa*.85;for(let o of n.animals){if(o.dead)continue;let a=te(e.x,e.y,o.x,o.y)-o.r;a<i&&(i=a,t=o)}if(t){va(n,t,18,e.x,e.y,Ye);return}if(Rg(n))return;let s=null,r=oa;for(let o of n.resources){if(o.amount<=0)continue;let a=te(e.x,e.y,o.x,o.y)-o.r;a<r&&(r=a,s=o)}if(s){let o=s.base==="wood"?8:s.base==="stone"?6:5,a=Math.min((n.jackhammer?3:1)*o,s.amount);s.amount-=a,s.regen=0,n.inv[s.base]+=a,Xe(n,s.x,s.y-s.r,"+"+a+" "+s.base,"#d8e0c2"),ft(n,s.x,s.y,"#caa07a",n.jackhammer?6:3,140),n.events.push({type:"harvest",x:s.x,y:s.y,kind:s.base,jack:n.jackhammer})}}function Rg(n){let e=n.player,t=oa+38.4,i=null,s=t,r=null,o=null;for(let[l,f]of n.structures){if(f.owner!==Ye||f.hp>=f.max)continue;let[h,d]=l.split(",").map(Number),u=ut(h,d),p=te(e.x,e.y,u.x,u.y);p<s&&(s=p,i=f,r="cell",o=l)}for(let[l,f]of n.walls){if(f.owner!==Ye||f.hp>=f.max)continue;let h=Ot(l,f),d=te(e.x,e.y,(h[0]+h[2])/2,(h[1]+h[3])/2);d<s&&(s=d,i=f,r="wall",o=l)}for(let[l,f]of n.deploys){if(f.owner!==Ye||f.hp>=f.max)continue;let[h,d]=l.split(",").map(Number),u=ut(h,d),p=te(e.x,e.y,u.x,u.y);p<s&&(s=p,i=f,r="deploy",o=l)}if(!i)return!1;let a=Qt[i.type],c=r==="deploy"?0:void 0;return Yd(n,i,a,[n.inv],c)&&Xe(n,e.x,e.y-20,"repaired","#9ad06a"),!0}function Ru(n){let e=n.player,t=n.copter,i=t&&t.alt||0;if(i<st.safeAlt){let s=Math.floor(e.x/64),r=Math.floor(e.y/64);if(n.structures.has(tt(s,r)))return gn(n,"Can't land on a base"),-1}if(e.inCopter=!1,e.y+=st.r+jt+6,i>=st.safeAlt){let s=(i-st.safeAlt+4)*1.25;if(e.health-=s,e.regenDelay=Math.max(e.regenDelay,3),e.hurt=.4,n.shake=Math.max(n.shake,7),Xe(n,e.x,e.y-24,"fall -"+Math.round(s),"#d2664a"),e.health<=0)return Js(n,!0),i}return i}function Cu(n){return n.player.inCopter?Ru(n):0}function Su(n){let e=n.player;if(e.inCopter){Ru(n);return}if(n.copter&&!n.copter.destroyed&&te(e.x,e.y,n.copter.x,n.copter.y)<st.r+jt+34){e.inCopter=!0,gn(n,"liftoff");return}let t=n.world.shop;if(te(e.x,e.y,t.x,t.y)<t.r+jt+44){n.shopOpen=!n.shopOpen;return}let i=null,s=64*1.4,r=null,o=null;for(let[a,c]of n.walls){if(c.type!=="door"||c.hp<=0)continue;let l=Ot(a,c),f=te(e.x,e.y,(l[0]+l[2])/2,(l[1]+l[3])/2);f<s&&(s=f,i=c,r="door",o=a)}for(let[a,c]of n.deploys){if(!(c.type==="cupboard"||c.type==="box"))continue;let[l,f]=a.split(",").map(Number),h=ut(l,f),d=te(e.x,e.y,h.x,h.y);d<s&&(s=d,i=c,r="store",o=a)}if(i){if(i.lock&&i.lock.by!==Ye){gn(n,"Locked \u2014 not your base");return}r==="door"?(i.open=!i.open,n.nav.stamp++):n.storeOpen=o}}function $r(n,e,t){let i=n.buildPiece,s=Qt[i],r=Math.floor(e/64),o=Math.floor(t/64);if(s.cat==="cell")return{gx:r,gy:o};if(s.cat==="diag")return{key:Be("D",r,o)};let a=e-r*64,c=t-o*64;return{key:[{key:Be("V",r,o),d:a},{key:Be("V",r+1,o),d:64-a},{key:Be("H",r,o),d:c},{key:Be("H",r,o+1),d:64-c}].sort((f,h)=>f.d-h.d)[0].key}}function Pu(n){let e=$r(n,n.cmd.mx,n.cmd.my),t=n.buildPiece;Xd(n,Ye,t,e,[n.inv],{rot:n.buildRot})?(Qt[t].tc&&Xe(n,n.cmd.mx,n.cmd.my,"base claimed","#9ad06a"),n.events.push({type:"place",x:n.cmd.mx,y:n.cmd.my})):gn(n,"can't place there")}function Iu(n){let e=$r(n,n.cmd.mx,n.cmd.my),t=Math.floor(n.cmd.mx/64),i=Math.floor(n.cmd.my/64),s=(c,l)=>{for(let f in c.cost)n.inv[f]+=Math.ceil(c.cost[f]/2);(l.mat==="stone"||l.mat==="metal")&&(n.inv.stone+=7),l.mat==="metal"&&(n.inv.metal+=10)};if(e.key){let c=n.walls.get(e.key);if(c&&c.owner===Ye){s(Qt[c.type],c),n.walls.delete(e.key),n.nav.stamp++;return}}let r=tt(t,i),o=n.deploys.get(r);if(o&&o.owner===Ye){s(Qt[o.type],o),n.deploys.delete(r),n.nav.stamp++;return}let a=n.structures.get(r);if(a&&a.owner===Ye){s(Qt[a.type],a),n.structures.delete(r),ga(n,r),n.nav.stamp++;return}}function Du(n){let e=n.cmd.mx,t=n.cmd.my,i=Math.floor(e/64),s=Math.floor(t/64);if(n.buildMode){let r=$r(n,e,t),o=a=>a&&a.owner===Ye&&qd(n,a,Qt[a.type],[n.inv]);for(let a of[Be("V",i,s),Be("V",i+1,s),Be("H",i,s),Be("H",i,s+1)]){let c=n.walls.get(a);if(!c)continue;let l=Ot(a,c);if(Math.min(te(e,t,l[0],l[1]),te(e,t,l[2],l[3]),te(e,t,(l[0]+l[2])/2,(l[1]+l[3])/2))<18&&o(c))return}if(o(n.structures.get(tt(i,s))))return}else{let r=n.deploys.get(tt(i,s));if(r&&r.type==="turret"&&r.owner===Ye){let o=(r.tier||1)+1,a=Td[o];a&&n.inv.scrap>=a&&(n.inv.scrap-=a,r.tier=o,r.mag=30,r.reload=0,Xe(n,e,t,"turret T"+o,"#9ab0d0"))}}}function Lu(n){let e=n.player;if(n.inv.grenade<=0){gn(n,"No grenades \u2014 buy at the trade shop");return}if(bt(n,e.x,e.y)){gn(n,"No weapons in the safe zone");return}n.inv.grenade--;let t=Math.min(560,te(e.x,e.y,n.cmd.mx,n.cmd.my)),i=Math.max(120,t*6)*.2,s=e.angle;n.grenades.push({x:e.x+Math.cos(s)*22,y:e.y+Math.sin(s)*22,vx:Math.cos(s)*i,vy:Math.sin(s)*i,t:Ws.fuse,from:Ye,bob:0})}function Nu(n){let e=n.player;if(n.inv.fence<=0){gn(n,"No fences \u2014 buy more (10 wood)");return}let t=e.x+Math.cos(e.angle)*34,i=e.y+Math.sin(e.angle)*34;if(n.structures.has(tt(Math.floor(t/64),Math.floor(i/64)))){gn(n,"Not on a base");return}n.inv.fence--;let s=e.angle+Math.PI/2;n.fences.push({x:t,y:i,a:s,owner:Ye,hp:$i.hp,max:$i.hp,t:$i.life,x0:t-Math.cos(s)*$i.half,y0:i-Math.sin(s)*$i.half,x1:t+Math.cos(s)*$i.half,y1:i+Math.sin(s)*$i.half}),n.needFenceRefresh=!0}function Cg(n){let e=n.player;e.dead=!1,e.health=e.maxhp,e.invuln=1.8,e.poison=0;let t=null;for(let[i,s]of n.deploys)if(s.type==="cupboard"&&s.owner===Ye){let[r,o]=i.split(",").map(Number),a=ut(r,o);t={x:a.x,y:a.y+64};break}if(t)e.x=t.x,e.y=t.y;else for(let i=0;i<60;i++){let s=n.rng.rand(600,xe.w-600),r=n.rng.rand(600,xe.h-600);if(!(!n.world.onLand(s,r)||n.world.lakeAt(s,r)||bt(n,s,r)||Et(n,s,r,jt))){e.x=s,e.y=r;break}}n.copter&&n.copter.destroyed&&(n.copter.destroyed=!1,n.copter.hp=n.copter.max,n.copter.x=e.x+120,n.copter.y=e.y);for(let i of n.animals)i.aggro=null,i.foe=null,!i.dead&&ve(i.x,i.y,e.x,e.y)<4e4&&(i.dead=!0,i.respawnT=.6)}function ku(n,e){let[t,i,s]=Vt.trades[e];if(n.inv[t]<i){gn(n,"not enough "+t);return}n.inv[t]-=i,n.inv.scrap+=s}function Uu(n,e){let t=Vt.buys[e];if(!t||n.inv.scrap<t.cost){gn(n,"not enough scrap");return}n.inv.scrap-=t.cost;let i=n.weapons[e];n.owned[e]?i.reserve+=t.ammo:(n.owned[e]=!0,i.ammo<ln[e].magSize&&(i.ammo=ln[e].magSize),Xe(n,n.player.x,n.player.y-20,ln[e].name+" unlocked!","#bfe3ff"))}function Fu(n,e){let t=n.player,i=s=>n.inv.scrap<s?(gn(n,"not enough scrap"),!1):(n.inv.scrap-=s,!0);switch(e){case"jackhammer":!n.jackhammer&&i(Vt.jackhammer)&&(n.jackhammer=!0,gn(n,"Jackhammer! 3\xD7 gather"));break;case"laser":if(!n.owned.rifle){gn(n,"buy the rifle first");break}!t.rifleLaser&&i(Vt.laser)&&(t.rifleLaser=!0);break;case"fence":n.inv.wood>=Vt.fenceWood?(n.inv.wood-=Vt.fenceWood,n.inv.fence++):gn(n,"not enough wood");break;case"grenade":i(Vt.grenade)&&n.inv.grenade++;break;case"signal":i(Vt.signal)&&(n.inv.signal=(n.inv.signal|0)+1);break;case"hqm":i(Vt.hqm.cost)&&(n.inv.hqm+=Vt.hqm.amt);break;case"facemask":{let s=t.facemask+1;s<=3&&i(_s.cost[s])&&(t.facemask=s);break}case"bodyArmor":{let s=t.bodyArmor+1;s<=3&&i(_s.cost[s])&&(t.bodyArmor=s);break}case"worker":i(Vt.worker)&&(Hd(n),gn(n,"worker hired \u2014 they gather and fight for you"));break}}function Ou(n,e,t){let i=n.deploys.get(n.storeOpen);if(!(!i||!i.store))if(t>0){let s=t>=9e3?n.inv[e]:Math.max(1,Math.floor(n.inv[e]*t)),r=Math.min(s,n.inv[e]);n.inv[e]-=r,i.store[e]+=r}else{let s=-t,r=s>=9e3?i.store[e]:Math.max(1,Math.floor(i.store[e]*s)),o=Math.min(r,i.store[e]);i.store[e]-=o,n.inv[e]+=o}}function gn(n,e){n.tip={text:e,t:1.4}}function Hu(n,e){let t=n.player;for(let i of n.animals){if(i.dead){i.respawnT-=e,i.respawnT<=0&&Bu(n,i);continue}let s=vs[i.type];if(i.atkcd=Math.max(0,i.atkcd-e),i.hit=Math.max(0,i.hit-e),i.pauseT>0){i.pauseT-=e,i.vx=i.vy=0;continue}i.phase===void 0&&(i.phase=n.rng.next()*12|0);let r,o,a=1e9;if((n.tick+i.phase)%12===0||i.tgtCache===void 0){r=null,o=null;let m=t.dead||t.inCopter||n.ghost||bt(n,t.x,t.y),g=null,y=1e9;for(let _ of n.units){if(_.dead||_.flying||_.eliminated||bt(n,_.x,_.y))continue;let M=te(i.x,i.y,_.x,_.y);M<s.detect&&M<y&&!zt(n,i.x,i.y,_.x,_.y)&&(y=M,g=_)}if(!m){let _=te(i.x,i.y,t.x,t.y);_<s.detect&&_<=y&&!zt(n,i.x,i.y,t.x,t.y)&&(r=t,o="player")}if(!r&&g&&(r=g,o="bot"),!r){let _=null,M=s.detect*s.detect;for(let[E,T]of n.deploys){if(T.type!=="turret")continue;let[I,v]=E.split(",").map(Number),b=ut(I,v),S=ve(i.x,i.y,b.x,b.y);S<M&&!zt(n,i.x,i.y,b.x,b.y)&&(M=S,_={key:E,x:b.x,y:b.y})}_&&(r=_,o="turret")}if(!r&&i.hostile){let _=null,M=s.detect*s.detect;for(let E of n.animals){if(E===i||E.dead)continue;let T=ve(i.x,i.y,E.x,E.y);T<M&&(M=T,_=E)}_&&(r=_,o="animal")}if(!r&&i.foe){let _=i.foe;typeof _=="object"&&!_.dead&&te(i.x,i.y,_.x,_.y)<s.detect*1.4&&(r=_,o=_===t?"player":_.owner!==void 0?"bot":"animal")}i.tgtCache=r?{tgt:r,kind:o}:null}else if(i.tgtCache){let m=i.tgtCache;(m.tgt.dead||m.kind==="player"&&(t.dead||n.ghost)||m.kind==="turret"&&!n.deploys.has(m.tgt.key))&&(i.tgtCache=null)}r=i.tgtCache?i.tgtCache.tgt:null,o=i.tgtCache?i.tgtCache.kind:null,r&&(a=te(i.x,i.y,r.x,r.y)),r&&o!=="turret"&&a>s.lose&&(r=null,i.aggro=null);let c=s.walk,l=0,f=0;if(r){i.aggro=o,c=s.chase;let m=Math.max(1,a);l=(r.x-i.x)/m,f=(r.y-i.y)/m;let g=o==="turret"?i.r+35.2:o==="player"?i.r+16+2:i.r+16;if(i.atkcd<=0&&a<g){o==="player"?(bs(n,s.dmg,i.x,i.y,"animal"),s.poison&&(t.poison=Math.max(t.poison,10))):o==="bot"?ws(n,r,s.dmg,i.x,i.y,"animal"):o==="turret"?Ms(n,r.key,s.dmg,"animal"):o==="animal"&&(r.hp-=s.dmg,r.foe=i,r.hit=.12,r.hp<=0&&(r.dead=!0,r.respawnT=n.rng.rand(11,18))),i.atkcd=s.atk,i.pauseT=wd;continue}}else{if(i.aggro=null,i.wanderT-=e,i.avoidT>0)i.avoidT-=e,i.dir=i.avoidA;else if(i.wanderT<=0)if(i.wanderT=n.rng.rand(1.2,3.2),i.lake&&te(i.x,i.y,i.lake.x,i.lake.y)>i.lake.r*.9)i.dir=Math.atan2(i.lake.y-i.y,i.lake.x-i.x);else if(i.lake&&n.rng.chance(.55)){i.vx=i.vy=0;continue}else if(n.rng.chance(.3)){i.vx=i.vy=0;continue}else i.dir=n.rng.rand(0,Ke);for(let[m,g]of n.deploys){if(g.type!=="cupboard")continue;let[y,_]=m.split(",").map(Number),M=ut(y,_);if(ve(i.x,i.y,M.x,M.y)<340*340){i.avoidA=Math.atan2(i.y-M.y,i.x-M.x),i.avoidT=1.2,i.dir=i.avoidA;break}}{let m=n.world.shop;ve(i.x,i.y,m.x,m.y)<760*760&&(i.avoidA=Math.atan2(i.y-m.y,i.x-m.x)+n.rng.rand(-.3,.3),i.avoidT=1.6,i.dir=i.avoidA)}l=Math.cos(i.dir),f=Math.sin(i.dir)}let h=i.x+l*c*e,d=i.y+f*c*e,u={x:i.x,y:i.y},p=i.lake?{allowLake:!0}:{},x=Sg(n,i,h,d);if(i.vx=(i.x-u.x)/e,i.vy=(i.y-u.y)/e,r)if(te(i.x,i.y,u.x,u.y)<c*e*.25){if(i.stuckT+=e,i.stuckT>3){Bu(n,i);continue}i.stuckT>1.5&&(i.aggro=null,i.foe=null,i.stuckT=0,i.dir=n.rng.rand(0,Ke))}else i.stuckT=Math.max(0,i.stuckT-e*2);else!x&&n.rng.chance(.5)&&(i.dir=n.rng.rand(0,Ke))}}function Sg(n,e,t,i){if(bt(n,t,i)){let r=n.world.shop;e.avoidA=Math.atan2(e.y-r.y,e.x-r.x)+n.rng.rand(-.6,.6),e.avoidT=1.6,e.dir=e.avoidA,e.aggro=null,e.foe=null;let o=!1;return!bt(n,t,e.y)&&!Et(n,t,e.y,e.r*.7)?(e.x=t,o=!0):!bt(n,e.x,i)&&!Et(n,e.x,i,e.r*.7)&&(e.y=i,o=!0),e.x=et(e.x,20,xe.w-20),e.y=et(e.y,20,xe.h-20),o}let s=!1;return Et(n,e.x,e.y,e.r*.7)?(e.x=t,e.y=i,s=!0):(!Et(n,t,e.y,e.r*.7)&&(e.lake||!n.world.lakeAt(t,e.y))&&(e.x=t,s=!0),!Et(n,e.x,i,e.r*.7)&&(e.lake||!n.world.lakeAt(e.x,i))&&(e.y=i,s=!0)),e.x=et(e.x,20,xe.w-20),e.y=et(e.y,20,xe.h-20),s}function Bu(n,e){let t=vs[e.type],i=xe.w,s=t.biome==="desert"?[0,i/3]:t.biome==="jungle"?[i/3,2*i/3]:t.biome==="winter"?[2*i/3,i]:[0,i];for(let r=0;r<30;r++){let o,a;if(e.lake){let c=n.rng.rand(0,Ke);o=e.lake.x+Math.cos(c)*(e.lake.r+n.rng.rand(30,200)),a=e.lake.y+Math.sin(c)*(e.lake.r+n.rng.rand(30,200))}else o=n.rng.rand(Math.max(90,s[0]-90),Math.min(i-90,s[1]+90)),a=n.rng.rand(90,xe.h-90);if(!(te(o,a,n.player.x,n.player.y)<520)&&!(te(o,a,n.world.shop.x,n.world.shop.y)<820)&&!(n.world.landFactor(o,a)<.05)&&!(n.world.lakeAt(o,a)&&!e.lake)&&!Et(n,o,a,e.r)){e.x=o,e.y=a;break}}e.dead=!1,e.hp=e.max,e.aggro=null,e.foe=null,e.pauseT=0,e.stuckT=0,e.dir=n.rng.rand(0,Ke),e.respawnT=0,e.looted=!1}function zu(n,e){let t=n.player;for(let i of n.guards){if(i.dead){if(i.respawnT-=e,i.respawnT<=0){let a=n.rng.rand(0,Ke),c=n.rng.rand(.35*i.mr,.8*i.mr);i.x=i.mx+Math.cos(a)*c,i.y=i.my+Math.sin(a)*c,i.hp=i.max,i.dead=!1}continue}i.gunCd=Math.max(0,i.gunCd-e);let s=null,r=qt.detect;if(!t.dead&&!t.inCopter&&!n.ghost&&!bt(n,t.x,t.y)){let a=te(i.x,i.y,t.x,t.y);a<r&&!zt(n,i.x,i.y,t.x,t.y)&&(s=t,r=a)}for(let a of n.units){if(a.dead||a.flying||a.eliminated)continue;let c=te(i.x,i.y,a.x,a.y);c<r&&!zt(n,i.x,i.y,a.x,a.y)&&(s=a,r=c)}let o=te(i.x,i.y,i.mx,i.my);if(o>i.mr+qt.leash&&(s=null),s){let a=Math.atan2(s.y-i.y,s.x-i.x);if(i.angle=Si(i.angle,a,Math.min(1,e*9)*Math.PI),r<qt.range&&i.gunCd<=0&&Math.abs(Pg(i.angle,a))<.3){i.gunCd=qt.rof;let d=i.angle+n.rng.rand(-qt.spread,qt.spread);Ln(n,{x:i.x+Math.cos(i.angle)*16,y:i.y+Math.sin(i.angle)*16,angle:d,speed:qt.bspeed,dmg:qt.dmg,from:"guard",life:qt.range/qt.bspeed+.1}),ft(n,i.x+Math.cos(i.angle)*16,i.y+Math.sin(i.angle)*16,"#ffd76b",2,90)}let c=0,l=0;r>300?(c=Math.cos(a),l=Math.sin(a)):r<150?(c=-Math.cos(a),l=-Math.sin(a)):(c=-Math.sin(a)*(i.seed>4.5?1:-1),l=Math.cos(a)*(i.seed>4.5?1:-1));let f=i.x+c*qt.speed*e,h=i.y+l*qt.speed*e;Et(n,f,h,qt.r)||(i.x=f,i.y=h),i.hasWp=!1}else{let a=Math.min(580,i.mr*2.6);if(o>a+90){let c=Math.atan2(i.my-i.y,i.mx-i.x);i.angle=Si(i.angle,c,e*4);let l=i.x+Math.cos(i.angle)*qt.speed*e,f=i.y+Math.sin(i.angle)*qt.speed*e;Et(n,l,f,qt.r)||(i.x=l,i.y=f),i.hasWp=!1}else{if(i.wpT-=e,!i.hasWp||i.wpT<=0||te(i.x,i.y,i.wpX,i.wpY)<26){let d=n.rng.rand(0,Ke),u=n.rng.rand(.25*i.mr,a);i.wpX=i.mx+Math.cos(d)*u,i.wpY=i.my+Math.sin(d)*u,i.wpT=n.rng.rand(2.4,6),i.hasWp=!0}let c=Math.atan2(i.wpY-i.y,i.wpX-i.x);i.angle=Si(i.angle,c,e*3.5);let l=qt.speed*.55,f=i.x+Math.cos(i.angle)*l*e,h=i.y+Math.sin(i.angle)*l*e;Et(n,f,h,qt.r)?i.hasWp=!1:(i.x=f,i.y=h)}}}}var Pg=(n,e)=>{let t=(e-n)%Ke;return t>Math.PI&&(t-=Ke),t<-Math.PI&&(t+=Ke),t};function js(n,e){let t=Vn(n,e),i=t&&En(n,t.tcKey);return i?[e.inv,i.store]:[e.inv]}function Vn(n,e){let t=n.teams[e.id];return!t||e.ally?null:t.bases.find(i=>i.tcKey===e.tcKey&&!i.dead)||t.bases.find(i=>!i.dead)||null}function Jr(n,e){let t=e.bases.find(s=>!s.dead),i=t&&En(n,t.tcKey);return i?i.store:null}function Ta(n,e,t){if(e<1400||t<1400||e>12424||t>7816||!n.world.onLand(e,t)||n.world.lakeAt(e,t)||n.world.railDist(e,t)<360||n.world.pathDist(e,t)<320||n.world.landFactor(e,t)<.12||te(e,t,n.world.shop.x,n.world.shop.y)<Tt+450)return!1;for(let i of n.world.monuments)if(te(e,t,i.x,i.y)<Tt+200)return!1;for(let i of n.world.lakes)if(te(e,t,i.x,i.y)<i.r+560)return!1;for(let i of n.world.boulders)if(te(e,t,i.x,i.y)<i.r+300)return!1;for(let[i,s]of n.deploys){if(s.type!=="cupboard")continue;let[r,o]=i.split(",").map(Number),a=ut(r,o);if(te(e,t,a.x,a.y)<Ki)return!1}return!0}function Xu(n,e,t){if(t.inv.wood+t.inv.stone+t.inv.metal<220)return!1;let s=220;for(let o of["wood","stone","metal"]){let a=Math.min(s,t.inv[o]);if(t.inv[o]-=a,s-=a,s<=0)break}let r=xa(n,e,t.siteX,t.siteY);for(let o of n.units)o.owner===e.owner&&(o.unfounded=!1,o.hx=r.hx,o.hy=r.hy,o.tcKey=r.tcKey,o.doorX=r.doorX,o.doorY=r.doorY,o.doorGy=r.doorGy);return Xe(n,r.hx,r.hy,"base founded","#9ad06a"),!0}function qu(n,e){let t=n.teams[e.id],i=Vn(n,e);if(!t||!i)return!1;let s=js(n,e),r=Ig(n,t.owner,i),o=Dg(n,t.owner,i),a=e.hard?9:5,c=e.hard?10:e.weak?5:8,l=e.hard?49:36;return r<a&&Vu(n,e,t,i,s)||e.primary&&r>=5&&Ea(n,e)||o<c&&kg(n,e,t,i,s)||e.hard&&bh(n,e,t,i,s)?!0:!e.jack&&Cn.pay(s,{wood:120,metal:60})?(e.jack=!0,Xe(n,e.x,e.y,"+jackhammer","#ffd76b"),!0):(e.hf=!e.hf,!!((e.hf?Gu(n,e,t,i,s)||bh(n,e,t,i,s):bh(n,e,t,i,s)||Gu(n,e,t,i,s))||r<l&&Vu(n,e,t,i,s)))}function Ig(n,e,t){let i=0;for(let[s,r]of n.structures){if(r.owner!==e)continue;let[o,a]=s.split(",").map(Number),c=ut(o,a);ve(c.x,c.y,t.hx,t.hy)<Ht*Ht&&i++}return i}function Dg(n,e,t){let i=0;for(let[s,r]of n.deploys){if(r.type!=="turret"||r.owner!==e)continue;let[o,a]=s.split(",").map(Number),c=ut(o,a);ve(c.x,c.y,t.hx,t.hy)<Ht*Ht&&i++}return i}function Lg(n,e,t,i,s){let r=tt(e,t);if(n.structures.has(r)||n.deploys.has(r))return!1;let o=ut(e,t);if(t>=s.doorGy||bt(n,o.x,o.y)||Ks(n,o.x,o.y)||!n.world.onLand(o.x,o.y)||n.world.lakeAt(o.x,o.y)||Wr(n,o.x,o.y))return!1;for(let c of n.animals)if(!c.dead&&Math.abs(c.x-o.x)<64&&Math.abs(c.y-o.y)<64)return!1;let a=ya(n,i.owner,s.hx,s.hy);if(a){let c=Math.min(a.minx,e),l=Math.max(a.maxx,e),f=Math.min(a.miny,t),h=Math.max(a.maxy,t);if(l-c+1>10||h-f+1>10)return!1}return!0}function Ng(n,e,t){let i=t.split(","),s=+i[1],r=+i[2],o=i[0]==="V"?[[s-1,r],[s,r]]:[[s,r-1],[s,r]];for(let[a,c]of o){if(!n.structures.has(tt(a,c)))continue;let l=0;for(let f of[Be("V",a,c),Be("V",a+1,c),Be("H",a,c),Be("H",a,c+1)]){if(f===t)continue;let h=n.walls.get(f);(!h||h.hp<=0||h.type==="door")&&l++}if(l===0)return!0}return!1}function Vu(n,e,t,i,s){if(!Cn.has(s,{wood:40}))return!1;let r=[];for(let[l,f]of n.structures){if(f.owner!==t.owner)continue;let[h,d]=l.split(",").map(Number),u=ut(h,d);if(!(ve(u.x,u.y,i.hx,i.hy)>Ht*Ht))for(let[p,x]of[[1,0],[-1,0],[0,1],[0,-1]])Lg(n,h+p,d+x,t,i)&&r.push([h+p,d+x])}if(!r.length)return!1;let[o,a]=r[Math.floor(n.rng.next()*r.length)];if(!Cn.pay(s,{wood:40}))return!1;n.structures.set(tt(o,a),{type:"floor",mat:"wood",hp:100,max:100,owner:t.owner,hitT:-100});let c=[[Be("V",o,a),tt(o-1,a)],[Be("V",o+1,a),tt(o+1,a)],[Be("H",o,a),tt(o,a-1)],[Be("H",o,a+1),tt(o,a+1)]];for(let[l,f]of c){let h=n.structures.get(f);h&&h.owner===t.owner||n.walls.has(l)||Ng(n,t.owner,l)||n.walls.set(l,{type:"wall",mat:"wood",hp:100,max:100,owner:t.owner,hitT:-100,open:!1})}return fh(n,t,i),n.nav.stamp++,Xe(n,o*64+64/2,a*64+64/2,"+room","#bcd0e0"),!0}function kg(n,e,t,i,s){if(!Cn.has(s,{wood:40,metal:30}))return!1;let r=ya(n,t.owner,i.hx,i.hy);if(!r)return!1;let o=Math.floor(i.doorX/64),a=[];for(let l=r.miny-1;l<=r.maxy+1;l++)for(let f=r.minx-1;f<=r.maxx+1;f++){let h=tt(f,l);if(n.structures.has(h)||n.deploys.has(h)||l>=i.doorGy&&Math.abs(f-o)<=1)continue;let d=ut(f,l);if(bt(n,d.x,d.y)||Ks(n,d.x,d.y)||!n.world.onLand(d.x,d.y)||n.world.lakeAt(d.x,d.y)||Wr(n,d.x,d.y))continue;let u=!1,p=!1;for(let x=-1;x<=1&&!u;x++)for(let m=-1;m<=1;m++){let g=n.structures.get(tt(f+m,l+x));if(g&&g.owner===t.owner){u=!0;break}}for(let[x,m]of[[1,0],[-1,0],[0,1],[0,-1]]){let g=n.deploys.get(tt(f+x,l+m));if(g&&g.type==="turret"){p=!0;break}}u&&!p&&a.push({gx:f,gy:l,c:d})}if(!a.length)return!1;a.sort((l,f)=>ve(f.c.x,f.c.y,i.doorX,i.doorY)-ve(l.c.x,l.c.y,i.doorX,i.doorY));let c=a[0];return Cn.pay(s,{wood:40,metal:30})?(n.deploys.set(tt(c.gx,c.gy),{type:"turret",mat:"wood",hp:150,max:150,owner:t.owner,hitT:-100,tier:e.hard?3:e.weak?1:2,angle:0,cd:0,mag:12,reload:0,ext:!0,scanT:n.rng.rand(.5,4.5)}),n.nav.stamp++,Xe(n,c.c.x,c.c.y,"+turret","#bcd0e0"),!0):!1}var Ug={wood:{mat:"stone",cost:{stone:15}},stone:{mat:"metal",cost:{metal:20}},metal:{mat:"armored",hqm:8}},Fg={wood:{mat:"stone",cost:{stone:12}},stone:{mat:"metal",cost:{metal:16}},metal:{mat:"armored",hqm:6}};function bh(n,e,t,i,s){for(let[r,o]of n.walls){if(o.owner!==t.owner||o.hp<=0)continue;let a=Ug[o.mat];if(a){if(a.hqm){if(e.hqm<a.hqm)continue;e.hqm-=a.hqm}else if(!Cn.pay(s,a.cost))continue;return o.mat=a.mat,o.max=Ri(Qt[o.type],o.mat),o.hp=o.max,Xe(n,e.x,e.y,"+"+a.mat,a.mat==="armored"?"#7f93ad":a.mat==="metal"?"#aeb6bf":"#c2c8cf"),!0}}return!1}function Gu(n,e,t,i,s){for(let[r,o]of n.structures){if(o.owner!==t.owner)continue;let a=Fg[o.mat];if(a){if(a.hqm){if(e.hqm<a.hqm)continue;e.hqm-=a.hqm}else if(!Cn.pay(s,a.cost))continue;return o.mat=a.mat,o.max=Ri(Qt[o.type],o.mat),o.hp=o.max,!0}}return!1}function Ea(n,e){let t=n.teams[e.id];if(!t||!e.primary)return!1;let i=e.hard?yt.HIRE_CAP_HARD:yt.HIRE_CAP;if(n.units.filter(f=>f.owner===t.owner&&!f.eliminated).length>=i)return!1;let r=Vn(n,e),o=r&&En(n,r.tcKey),a=yt.WORKER_COST,c=Math.min(a,e.scrap);if(c+(o?o.store.scrap:0)<a)return!1;e.scrap-=c,a-=c,a>0&&(o.store.scrap-=a);let l=Vr(n,t,e.hx+n.rng.rand(-46,46),e.hy+n.rng.rand(24,64),!1);return l.hx=e.hx,l.hy=e.hy,l.tcKey=e.tcKey,l.doorX=e.doorX,l.doorY=e.doorY,l.doorGy=e.doorGy,l.unfounded=e.unfounded,Xe(n,l.x,l.y,"+worker hired","#9ad06a"),!0}function Yu(n,e,t){let i=n.units.find(l=>l.owner===e.owner&&l.primary&&!l.eliminated);if(!i||i.unfounded||e.eliminated)return;let s=e.bases.filter(l=>!l.dead);if(!s.length)return;let r=e.hard?4:3,o=Jr(n,e),a=o?o.wood+o.stone+o.metal:0,c=e.brain;if(i.fwdT-=t,c.aggressor&&c.raidTarget&&s.length<r&&a>=170&&i.fwdT<=0){i.fwdT=10;let l=Gn(n,c.raidTarget);if(l&&!s.some(f=>te(f.hx,f.hy,l.hx,l.hy)<2400)){let f=s[0],h=Math.atan2(f.hy-l.hy,f.hx-l.hx);for(let d of[1800,2300,1400,2700]){let u=l.hx+Math.cos(h)*d,p=l.hy+Math.sin(h)*d;if(Ta(n,u,p)){Wu(o,200);let x=xa(n,e,u,p);x.kind="raid-forward",Xe(n,u,p,"+raid base","#ffd0a0");return}}}}if(i.expT-=t,i.expT<=0){i.expT=n.rng.rand(50,90);let l=c.attack?160:260;if(s.length>=1&&s.length<r&&a>=l){let f=Og(n,e,s[0]);if(f){Wu(o,240);let h=xa(n,e,f.x,f.y);h.kind=f.kind,Xe(n,f.x,f.y,"+"+f.kind+" base","#bcd0e0")}}}}function Wu(n,e){if(n)for(let t of["wood","stone","metal"]){let i=Math.min(e,n[t]);if(n[t]-=i,e-=i,e<=0)return}}function Gn(n,e){if(!e)return null;if(e==="player"){for(let[t,i]of n.deploys)if(i.type==="cupboard"&&i.owner===Ye){let[s,r]=t.split(",").map(Number),o=ut(s,r);return{owner:Ye,tcKey:t,hx:o.x,hy:o.y,isPlayer:!0}}return null}return e.bases&&e.bases.find(t=>!t.dead)||null}function Og(n,e,t){for(let s of n.world.monuments){let r=!1;for(let o of n.teams)if(o.bases.some(a=>!a.dead&&te(a.hx,a.hy,s.x,s.y)<Tt+900)){r=!0;break}if(!r)for(let o=0;o<8;o++){let a=o/8*Math.PI*2,c=s.x+Math.cos(a)*(Tt+320),l=s.y+Math.sin(a)*(Tt+320);if(Ta(n,c,l))return{x:c,y:l,kind:"monument"}}}let i=Gn(n,e.brain.raidTarget)||Bg(n,e,t);if(i){let s=Math.atan2(i.hy-t.hy,i.hx-t.hx);for(let r of[1700,2200,1300]){let o=t.hx+Math.cos(s)*r,a=t.hy+Math.sin(s)*r;if(Ta(n,o,a))return{x:o,y:a,kind:"raid-forward"}}}for(let s=0;s<10;s++){let r=n.rng.rand(0,Math.PI*2),o=n.rng.rand(Ki+200,Ki+1600),a=t.hx+Math.cos(r)*o,c=t.hy+Math.sin(r)*o;if(Ta(n,a,c))return{x:a,y:c,kind:"survival"}}return null}function Bg(n,e,t){let i=null,s=3e3*3e3;for(let r of n.teams)if(!(r===e||r.eliminated))for(let o of r.bases){if(o.dead)continue;let a=ve(t.hx,t.hy,o.hx,o.hy);a>s&&(s=a,i=o)}return i}function wh(n,e){if(e.ally)return!1;let t=Math.floor(e.x/64),i=Math.floor(e.y/64),s=null,r=-1;for(let[a,c,l]of[[Be("V",t,i),tt(t-1,i),!1],[Be("V",t+1,i),tt(t+1,i),!1],[Be("H",t,i),tt(t,i-1),!1],[Be("H",t,i+1),tt(t,i+1),!0]]){let f=n.walls.get(a);if(!f||f.owner!==e.owner||f.type==="door")continue;let h=(n.structures.has(c)?0:60)+(l?12:0)+n.rng.rand(0,2);h>r&&(r=h,s=a)}if(!s)return!1;let o=n.walls.get(s);return o.type="door",o.open=!0,o.closeT=n.t+1.2,o.lock={by:e.owner},o.hp=Math.max(o.hp,50),o.max=Math.max(o.max,50),n.nav.stamp++,n.metrics.doorCuts=(n.metrics.doorCuts||0)+1,Xe(n,e.x,e.y,"cut a door","#caa46a"),!0}function jr(n){n.path=null,n.pathI=0,n.repathN=0}function Gt(n,e,t,i,s,r={}){let o=r.arrive||16,a=te(e.x,e.y,t,i);if(a<=o)return jr(e),e.progBest=1e9,"arrived";let c=te(e.pathGX,e.pathGY,t,i)>90,l=n.t-e.pathT>3,f=!e.path||n.t-(e.lastPlanT||-1)>.5;if((!e.path||c||l||e.pathI>=e.path.length)&&f){if(e.lastPlanT=n.t,a<192&&Hr(n,e.owner,e.x,e.y,t,i))e.path=[{x:t,y:i}],e.pathI=0;else{let b=Od(n,e.owner,e.x,e.y,t,i);n.metrics.repaths++,b?(e.path=b,e.pathI=0,e.directFallback=!1):(n.metrics.pathFails++,e.path=[{x:t,y:i}],e.pathI=0,e.directFallback=!0)}e.pathGX=t,e.pathGY=i,e.pathT=n.t}let h=e.path[Math.min(e.pathI,e.path.length-1)],d=h.door?12:15;te(e.x,e.y,h.x,h.y)<d&&e.pathI<e.path.length-1&&(e.pathI++,h=e.path[e.pathI]),!h.door&&e.pathI+1<e.path.length&&!e.path[e.pathI+1].door&&n.tick%7===e.tickPhase%7&&Hr(n,e.owner,e.x,e.y,e.path[e.pathI+1].x,e.path[e.pathI+1].y)&&(e.pathI++,h=e.path[e.pathI]);let u=r.speed||yt.BOT_SPEED,p=n.world.lakeAt(e.x,e.y);p&&!p.frozen&&(u*=.5);let x=Math.max(1,te(e.x,e.y,h.x,h.y)),m=(h.x-e.x)/x,g=(h.y-e.y)/x,y=Math.min(u*s,x),_=e.x+m*y,M=e.y+g*y,E=e.x,T=e.y,I={passOwner:e.owner,openOwnDoors:!0},v=!1;if(Et(n,e.x,e.y,13,I)?(e.x=_,e.y=M,v=!0):Et(n,_,M,13,I)?(Et(n,_,e.y,13,I)||(e.x=_,v=!0),Et(n,e.x,M,13,I)||(e.y=M,v=!0)):(e.x=_,e.y=M,v=!0),e.x=et(e.x,12,xe.w-12),e.y=et(e.y,12,xe.h-12),e.vx=(e.x-E)/s,e.vy=(e.y-T)/s,v){let b=Math.atan2(g,m);e.angle=e.angle+Aa(e.angle,b)*Math.min(1,s*7)}if(e.progT+=s,e.progT>=.5){e.progT=0;let b=te(e.x,e.y,t,i);if(b<e.progBest-12)e.progBest=b,e.noProgT=0,e.repathN=0;else if(e.noProgT=(e.noProgT||0)+.5,e.noProgT>=1.5){if(e.noProgT=0,e.repathN++,ua(n,e.x,e.y,12),ua(n,e.x+(t>e.x?64:-64),e.y,10),ua(n,e.x,e.y+(i>e.y?64:-64),10),n.metrics.stuckTotal+=1.5,e.path=null,e.lastPlanT=-1,e.repathN===2){let S=Math.atan2(i-e.y,t-e.x)+(e.id%2?1:-1)*Math.PI/2;e.detourX=e.x+Math.cos(S)*220,e.detourY=e.y+Math.sin(S)*220,e.detourT=n.t+2.5}if(e.repathN>=3)return e.repathN=0,e.progBest=1e9,jr(e),n.metrics.stuckLog.push({t:n.t,owner:e.owner,x:e.x|0,y:e.y|0}),"stuck"}}if(e.detourT&&n.t<e.detourT)if(te(e.x,e.y,e.detourX,e.detourY)>20){let S=Math.atan2(e.detourY-e.y,e.detourX-e.x),R=e.x+Math.cos(S)*u*s,L=e.y+Math.sin(S)*u*s;Et(n,R,L,13,I)||(e.x=R,e.y=L)}else e.detourT=0;return!v&&e.path&&e.pathI<e.path.length-1?(e.wpStallT=(e.wpStallT||0)+s,e.wpStallT>.6&&(e.wpStallT=0,e.pathI++)):v&&(e.wpStallT=0),e.gotoTick=n.tick,v?e.stuckT=Math.max(0,e.stuckT-s*2):(e.stuckT+=s,e.state!=="raid"&&(n.metrics.maxStuck=Math.max(n.metrics.maxStuck,e.stuckT))),"moving"}function Zu(n,e,t){for(let i of n.units){if(i===e||i.dead||i.eliminated||i.flying||i.owner!==e.owner)continue;let s=ve(e.x,e.y,i.x,i.y);if(s>.01&&s<324){let r=Math.sqrt(s),o=(18-r)*.5*t*6,a=(e.x-i.x)/r*o,c=(e.y-i.y)/r*o;Et(n,e.x+a,e.y+c,13,{passOwner:e.owner})||(e.x+=a,e.y+=c)}}}function Nn(n,e,t,i,s=8){let r=Math.atan2(t-n.y,e-n.x);n.angle=n.angle+Aa(n.angle,r)*Math.min(1,i*s)}var Aa=(n,e)=>{let t=(e-n)%Ke;return t>Math.PI&&(t-=Ke),t<-Math.PI&&(t+=Ke),t};var Ku=yt.BOT_SPEED;function ep(n,e,t){if(e.eliminated)return;let i=e.ally?null:n.teams[e.id];if(!e.ally&&!e.unfounded){let d=Vn(n,e);if(!d){tp(n,e,i);return}d.tcKey!==e.tcKey&&np(n,e,d);let u=En(n,d.tcKey);u&&(u.store.wood=Math.max(u.store.wood,40))}if(e.dead){e.respawnT-=t,e.respawnT<=0&&zg(n,e,i);return}if(e.gunCd=Math.max(0,e.gunCd-t),e.rkCd=Math.max(0,e.rkCd-t),e.gnCd=Math.max(0,e.gnCd-t),e.fenceCd=Math.max(0,e.fenceCd-t),e.think-=t,e.expandT-=t,e.retaliateT=Math.max(0,e.retaliateT-t),e.disengageT=Math.max(0,e.disengageT-t),e.regenT=Math.max(0,e.regenT-t),e.regenT<=0&&e.hp<e.max&&(e.hp=Math.min(e.max,e.hp+9*t)),e.primary&&!e.unfounded&&!e.ally&&(e.hireT-=t,e.hireT<=0)){e.hireT=2;let d=Vn(n,e),u=d&&En(n,d.tcKey);e.scrap+(u?u.store.scrap:0)>=yt.WORKER_COST+24&&Ea(n,e)}if(e.aboard)if(e.aboard.destroyed||!e.aboard.riders.includes(e))e.aboard=null,e.flying=!1;else{e.flying=!0;return}if(e.flying&&(!e.copter||e.copter.destroyed)&&(e.flying=!1),e.flying&&e.state!=="trade"&&lp(e),e.unfounded){Vg(n,e,i,t),$u(n,e,t);return}e.endgame=n.aliveBases<=yt.ENDGAME_BASES||n.t>yt.ENDGAME_T;let s=i?i.brain:Hg,r=e.retaliateT>0&&ve(e.x,e.y,e.threatX,e.threatY)<yt.REACT_R*yt.REACT_R&&!bt(n,e.x,e.y);(n.tick+e.tickPhase)%9===0||e.thCache===void 0?e.thCache=ap(n,e)||Sh(n,e):e.thCache&&e.thCache.ref&&!e.thCache.ref.dead?(e.thCache.x=e.thCache.ref.x,e.thCache.y=e.thCache.ref.y):e.thCache&&e.thCache.ref&&e.thCache.ref.dead&&(e.thCache=null);let o=r?{x:e.threatX,y:e.threatY,vx:0,vy:0}:e.thCache,a=te(e.x,e.y,e.hx,e.hy);ve(e.x,e.y,n.world.shop.x,n.world.shop.y)<(Tt+140)*(Tt+140)&&(o=null),e.ally&&(e.raidUrge-=t);let c=e.raid&&Gn(n,e.raid),l=e.rocketer&&(e.state==="raid"||e.wasRaid)&&c&&e.rockets>0&&e.hp>=e.max*.2&&!s.urgent,f=o?te(e.x,e.y,o.x,o.y):1e9;switch(o&&!l&&(e.defDuty||r&&!e.wasRaid||s.urgent||e.ally)&&!((e.wasRaid||e.endgame)&&f>=230)&&!(s.aggressor&&f>=160)?(e.state="defend",e.defHold=e.defDuty&&(s.attack||s.urgent)?2.5:.7,e.defTgt={x:o.x,y:o.y,vx:o.vx||0,vy:o.vy||0,ref:o.ref}):e.state==="defend"?(e.defHold-=t,e.defHold<=0&&(e.state="gather",e.defendT=0,e.defTgt=null)):e.state==="raid"&&(!c||i&&s.decaying)?(e.raid=null,e.wasRaid=!1,e.state="gather"):e.defDuty&&(s.attackers>0||s.urgent)&&a>340&&e.state!=="raid"&&e.state!=="trade"?e.state="return":e.state==="gather"&&Gg(n,e,i,s)&&(e.state=Wg(n,e,i,s)),e.act=e.state,e.state){case"defend":Zg(n,e,i,s,o,t);break;case"raid":Kg(n,e,i,s,t);break;case"return":jg(n,e,t);break;case"trade":Qg(n,e,i,s,t);break;default:tx(n,e,i,s,t);break}$u(n,e,t)}var Hg={sealed:!0,decaying:!1,ready:!1,attack:!1,urgent:!1,aggressor:!1,raidTarget:null};function $u(n,e,t){if(Zu(n,e,t),e.gotoTick!==n.tick&&(e.stuckT=Math.max(0,e.stuckT-t)),!e.flying&&(e.state==="gather"||e.state==="raid"||e.state==="return"||e.state==="trade")&&Math.hypot(e.vx,e.vy)>30&&Ma(n,e,Math.atan2(e.vy,e.vx)),e.directFallback&&e.stuckT>1.5){let i=Math.floor(e.x/64),s=Math.floor(e.y/64),r=n.structures.get(i+","+s);r&&r.owner===e.owner&&wh(n,e)&&(jr(e),e.directFallback=!1,e.stuckT=0)}n.metrics.act[e.act]=(n.metrics.act[e.act]||0)+t}function tp(n,e,t){e.eliminated=!0,e.dead=!0,e.primary&&t&&!t.elimsPosted&&(t.elimsPosted=!0,t.eliminated=!0,n.elims.push({text:"Base "+(e.id+1)+" ELIMINATED",t:30}),n.metrics.elims++)}function np(n,e,t){e.hx=t.hx,e.hy=t.hy,e.tcKey=t.tcKey,e.doorX=t.doorX,e.doorY=t.doorY,e.doorGy=t.doorGy,jr(e)}function zg(n,e,t){if(e.ally){e.hp=e.max,e.dead=!1,e.x=e.hx,e.y=e.hy+50,e.state="gather";return}if(!t)return;let i=t.bases.filter(r=>!r.dead);if(!i.length){tp(n,e,t);return}let s=i[0];if(i.length>1&&!e.primary){let r=Gn(n,t.brain.raidTarget);r&&(e.rocketer||e.wasRaid||e.state==="raid")?s=i.reduce((o,a)=>ve(o.hx,o.hy,r.hx,r.hy)<ve(a.hx,a.hy,r.hx,r.hy)?o:a):s=i[Math.floor(n.rng.next()*i.length)]}np(n,e,s),e.hp=e.max,e.dead=!1,e.x=s.hx,e.y=s.hy+50,e.state="gather",e.raid=null,e.wasRaid=!1,e.primary&&e.copter&&(e.copter.destroyed=!1,e.copter.hp=e.copter.max,e.copter.x=e.hx-256,e.copter.y=e.hy)}function Vg(n,e,t,i){e.act="found";let s=e.inv.wood+e.inv.stone+e.inv.metal,r=ap(n,e);if(r&&!bt(n,e.x,e.y)){hp(n,e,r,i);return}if(e.primary){if(s>=220){if(te(e.x,e.y,e.siteX,e.siteY)<=128){Xu(n,t,e);return}Gt(n,e,e.siteX,e.siteY,i);return}}else if(s>=70)if(te(e.x,e.y,e.siteX,e.siteY)<=192){let a=n.units.find(c=>c.owner===e.owner&&c.primary&&!c.dead);if(a)for(let c of["wood","stone","metal"])a.inv[c]+=e.inv[c],e.inv[c]=0}else{Gt(n,e,e.siteX,e.siteY,i);return}e.act="gather";let o=e.tgtNode;(!o||o.amount<=0)&&(o=rx(n,e,"wood",2600)||Qu(n,e,4e3)||Qu(n,e,1e9),e.tgtNode=o),o&&cp(n,e,o,i)}function Gg(n,e,t,i){if(e.monRun)return!1;let s=e.inv.wood+e.inv.stone+e.inv.metal;return!!(s>=yt.GATHER_LOAD||e.scrap>40||!e.ally&&t&&(i.breach||i.damaged&&Eh(n,e)>=12||e.rocketer&&e.rockets<8&&e.role!=="turtle"&&n.t>=(e.tradeCd||0)&&(e.scrap>=12||s>=100||Rh(n,e)>=24)||ip(n,e,i)||sp(n,e,i))||e.ally&&e.raidUrge<=0)}function ip(n,e,t){if(e.ally||e.role==="turtle"||n.t<(e.tradeCd||0)||e.rockets>=(e.primary?12:6))return!1;let i=e.inv.wood+e.inv.stone+e.inv.metal;return(e.scrap>=24||i>=120||e.primary&&Rh(n,e)>=48)&&(t.aggressor||Xg(n,e)||t.ready)}function sp(n,e,t){return!(n.t>120||e.endgame)||n.t<e.raidCd||e.role==="turtle"&&!e.endgame||!(e.rockets>0||e.satchels>0||e.endgame)?!1:e.endgame||t.aggressor?!0:t.ready&&t.raidTarget&&e.raidBias<.72&&qg(n,e)>=4}function Wg(n,e,t,i){let s=e.inv.wood+e.inv.stone+e.inv.metal;if(!e.ally&&t){let r=i.breach;if(r&&Eh(n,e)<40)return"gather";let o=te(e.x,e.y,e.hx,e.hy);if(r||i.damaged&&Eh(n,e)>=12)return o>180?"return":"gather";if(e.rocketer&&e.rockets<8&&e.role!=="turtle"&&n.t>=(e.tradeCd||0)&&(e.scrap>=12||s>=100||Rh(n,e)>=24))return"trade";if(e.scrap>40||s>=yt.GATHER_LOAD)return"return";if(ip(n,e,i))return"trade";if(sp(n,e,i)){let a=i.raidTarget;if(n.transports.find(l=>l.owner===e.owner&&!l.destroyed&&l.state!=="fly"&&l.state!=="unload"&&l.riders.length<Zt.seats)){let l=op(n,t);l&&(a=l)}if((!a||!Gn(n,a))&&(a=Ch(n,t,e)),a)return e.raid=a,e.raidCd=n.t+2,n.metrics.raidsLaunched++,"raid"}}if(e.ally&&e.raidUrge<=0){let r=Yg(n);if(r)return e.raid=r,e.raidUrge=n.rng.rand(24,44),"raid";e.raidUrge=n.rng.rand(8,14)}return"gather"}var Eh=(n,e)=>e.inv.wood+rp(n,e,"wood"),Rh=(n,e)=>rp(n,e,"scrap");function rp(n,e,t){let i=Vn(n,e),s=i&&En(n,i.tcKey);return s?s.store[t]:0}function Xg(n,e){let t=Vn(n,e),i=t&&En(n,t.tcKey);if(!i)return!1;let s=n.teams[e.id],r=2;for(let o of n.structures.values())o.owner===e.owner&&r++;for(let o of n.deploys.values())o.owner===e.owner&&o.type==="turret"&&r++;return i.store.wood+i.store.stone+i.store.metal>r*.0075*300}function qg(n,e){let t=0;for(let i of n.structures.values())i.owner===e.owner&&(i.type==="floor"||i.type==="trifloor")&&t++;return t}function Ch(n,e,t){let i=null,s=1e18,r=e.bases.find(a=>!a.dead);if(!r)return null;for(let a of n.teams){if(a===e||a.eliminated)continue;let c=a.bases.find(p=>!p.dead);if(!c)continue;let l=En(n,c.tcKey),f=l?l.store.wood+l.store.stone+l.store.metal:0,h=0;for(let p of n.deploys.values())p.owner===a.owner&&p.type==="turret"&&h++;let d=0;if(e.hard)for(let p of n.units)p.owner===a.owner&&!p.dead&&!p.eliminated&&ve(p.x,p.y,c.hx,c.hy)<720*720&&d++;let u=ve(r.hx,r.hy,c.hx,c.hy)*(1+h*yt.RAID_TUR_W)*(1+d*yt.RAID_DEF_W)/(1+f*.003);u<s&&(s=u,i=a)}let o=Gn(n,"player");return o&&!n.ghost&&ve(r.hx,r.hy,o.hx,o.hy)<s&&(i="player"),i}function Yg(n){let e=null,t=1e18;for(let i of n.teams){if(i.eliminated)continue;let s=i.bases.find(o=>!o.dead);if(!s)continue;let r=ve(n.player.x,n.player.y,s.hx,s.hy);r<t&&(t=r,e=i)}return e}function op(n,e){let t=e.bases.find(r=>!r.dead);if(!t)return null;let i=null,s=3e3*3e3;for(let r of n.teams){if(r===e||r.eliminated)continue;let o=r.bases.find(c=>!c.dead);if(!o)continue;let a=ve(t.hx,t.hy,o.hx,o.hy);a>s&&(s=a,i=r)}return i}function ap(n,e){if(e.disengageT>0||bt(n,e.x,e.y))return null;let t=null,i=yt.REACT_R*yt.REACT_R,s=n.player,r=(o,a,c,l,f,h)=>{if(f===e.unreach&&n.t<e.unreachT)return;let d=ve(e.x,e.y,o,a);d>=i||h&&d>h*h||bt(n,o,a)||ai(n,e.x,e.y,o,a)||(i=d,t={x:o,y:a,vx:c,vy:l,ref:f})};!e.ally&&!s.dead&&!s.inCopter&&!n.ghost&&r(s.x,s.y,s.vx,s.vy,s);for(let o of n.units)o.owner===e.owner||o.dead||o.flying||o.eliminated||r(o.x,o.y,o.vx,o.vy,o);for(let o of n.animals)!o.dead&&o.aggro&&r(o.x,o.y,o.vx,o.vy,o,360);for(let o of n.guards)o.dead||r(o.x,o.y,0,0,o,480);return t}function Sh(n,e){if(e.disengageT>0||bt(n,e.x,e.y))return null;let t=null,i=430*430,s=n.player,r=(o,a,c,l,f)=>{if(f===e.unreach&&n.t<e.unreachT)return;let h=ve(e.x,e.y,o,a);h>=i||bt(n,o,a)||ai(n,e.x,e.y,o,a)||(i=h,t={x:o,y:a,vx:c,vy:l,ref:f})};!e.ally&&!s.dead&&!s.inCopter&&!n.ghost&&r(s.x,s.y,s.vx,s.vy,s);for(let o of n.units)o.owner===e.owner||o.dead||o.flying||o.eliminated||r(o.x,o.y,o.vx,o.vy,o);for(let o of n.guards)o.dead||r(o.x,o.y,0,0,o);return t}function Zg(n,e,t,i,s,r){e.defendT+=r;let o=s||e.defTgt;if(!o){e.state="gather";return}let a=e.raid&&Gn(n,e.raid),l=e.inv.wood+e.inv.stone+e.inv.metal>60||e.scrap>20,f=e.hp<e.max*.2;if((e.hp<e.max*(l?.45:.28)&&!a||f)&&!e.endgame&&!e.retreat&&n.rng.chance(l?.05:.02)&&(e.retreat=!0),e.retreat)if(e.hp>=e.max*.85||e.defendT>9)e.retreat=!1;else{e.disengageT=Math.max(e.disengageT,2.5),zt(n,e.x,e.y,o.x,o.y)||to(n,e,o,r),(Gt(n,e,e.hx+e.lane,e.hy+e.hoff,r)==="arrived"||te(e.x,e.y,e.hx,e.hy)<64*1.5)&&(e.retreat=!1,e.state="return");return}hp(n,e,o,r),lx(n,e,o);let d=a?2.2:7;e.defendT>d&&(a?e.state="raid":(e.disengageT=6,e.state="gather"),e.defendT=0)}function Kg(n,e,t,i,s){e.wasRaid=!0,e.act="raid";let r=Gn(n,e.raid);if(!r){e.wasRaid=!1,e.state="return";return}let o=En(n,r.tcKey);if(!o){e.wasRaid=!1,e.state="return";return}if(e.rockets<=0&&e.satchels<=0&&!e.endgame){e.raid=null,e.wasRaid=!1;let m=e.inv.wood+e.inv.stone+e.inv.metal;e.state=e.scrap>=8||m>=100?"trade":"gather";return}if(!e.aboard&&te(e.x,e.y,e.hx,e.hy)<600&&te(r.hx,r.hy,e.hx,e.hy)>2800){let m=n.transports.find(g=>g.owner===e.owner&&!g.destroyed&&(g.state==="idle"||g.state==="board")&&g.riders.length<Zt.seats);if(m){if(te(e.x,e.y,m.x,m.y)<70){fu(n,e,m);return}Gt(n,e,m.x,m.y,s);return}}let a=te(e.x,e.y,r.hx,r.hy),l=n.units.filter(m=>m.owner===e.owner&&m.state==="raid"&&m.raid===e.raid&&!m.dead&&ve(m.x,m.y,r.hx,r.hy)<560*560).length>=2||e.endgame||e.ally;if(e.stagedFor!==e.raid&&(e.staged=!1,e.stagedFor=e.raid),a<700?e.staged=!0:a>1600&&(e.staged=!1),!e.staged){let m=Math.atan2(e.hy-r.hy,e.hx-r.hx),g=(e.id%5-2)*70+e.lane*2,y=r.hx+Math.cos(m)*540+Math.cos(m+Math.PI/2)*g,_=r.hy+Math.sin(m)*540+Math.sin(m+Math.PI/2)*g;Gt(n,e,y,_,s)==="stuck"&&(e.raidCd=n.t+8,e.raid=null,e.wasRaid=!1,e.state="gather");return}if(l&&a<(e.endgame?420:300)&&!zt(n,e.x,e.y,r.hx,r.hy)){Nn(e,r.hx,r.hy,s),o.hp-=(e.endgame?140:e.hard?24:14)*s,o.hitT=n.t,n.rng.chance(.2)&&n.particles.push({x:r.hx+n.rng.rand(-10,10),y:r.hy+n.rng.rand(-10,10),vx:n.rng.rand(-40,40),vy:n.rng.rand(-60,-20),life:.4,max:.4,r:2,col:"#caa24a"}),o.hp<=0&&ch(n,r.tcKey,o,e.owner);return}let f=$g(n,e,r),h=null,d=null,u=!1;if(f)h=f.c,d=f.key;else{let m=Jg(n,e,t,r);m?(h=m.c,d=m.key,u=m.door):h={x:r.hx,y:r.hy}}let p=te(e.x,e.y,h.x,h.y);if(e.rockets>0){if(a>=yt.ROCKET_MIN&&a<460&&!zt(n,e.x,e.y,r.hx,r.hy)){Nn(e,r.hx,r.hy,s),Ah(n,e,r.hx,r.hy,2.2);return}if(p>380){let m=Math.atan2(e.y-h.y,e.x-h.x),g=(e.id%5-2)*70,y=h.x+Math.cos(m)*320+Math.cos(m+Math.PI/2)*g,_=h.y+Math.sin(m)*320+Math.sin(m+Math.PI/2)*g;Gt(n,e,y,_,s),Ju(n,e,r)}else if(p<yt.ROCKET_MIN){let m=Math.atan2(e.y-h.y,e.x-h.x),g=e.x+Math.cos(m)*120*s,y=e.y+Math.sin(m)*120*s;Et(n,g,y,13,{passOwner:e.owner})||(e.x=g,e.y=y)}else Nn(e,h.x,h.y,s),Ah(n,e,h.x,h.y,2.2);return}if(e.satchels>0&&l){p<100?e.rkCd<=0&&(n.satchels.push({x:h.x,y:h.y,t:2,from:e.owner}),e.satchels--,e.rkCd=2.6,Xe(n,e.x,e.y,"satchel!","#ffd0a0")):(Gt(n,e,h.x,h.y,s,{arrive:80}),Ju(n,e,r));return}let x=Sh(n,e);if(x)te(e.x,e.y,x.x,x.y)<480?(Nn(e,x.x,x.y,s),to(n,e,x,s)):Gt(n,e,x.x,x.y,s);else if(l){let m=Math.atan2(e.hy-r.hy,e.hx-r.hx),g=(e.id%5-2)*64;Gt(n,e,h.x+Math.cos(m)*380+Math.cos(m+Math.PI/2)*g,h.y+Math.sin(m)*380+Math.sin(m+Math.PI/2)*g,s,{arrive:40})}else if(p<380){let m=Math.atan2(e.y-h.y,e.x-h.x),g=e.x+Math.cos(m)*Ku*s,y=e.y+Math.sin(m)*Ku*s;Et(n,g,y,13,{passOwner:e.owner})||(e.x=g,e.y=y)}else Gt(n,e,h.x,h.y,s,{arrive:340})}function $g(n,e,t){let i=null,s=1e18;for(let[r,o]of n.deploys){if(o.type!=="turret"||o.owner!==t.owner)continue;let[a,c]=r.split(",").map(Number),l=ut(a,c),f={1:340,2:380,3:460}[o.tier||1]+60,h=ve(e.x,e.y,l.x,l.y);h<f*f&&!zt(n,e.x,e.y,l.x,l.y)&&h<s&&(s=h,i={key:r,c:l})}return i}function Jg(n,e,t,i){for(let d of n.units)if(!(d.owner!==e.owner||d.dead||d.raid!==e.raid)&&ve(d.x,d.y,i.hx,i.hy)<760*760&&!zt(n,d.x,d.y,i.hx,i.hy))return null;let s=t?t.brain:null;if(s&&s.breachKey&&n.t-s.breachT<1.5){let d=n.walls.get(s.breachKey);if(d&&d.hp>0&&!(d.type==="door"&&d.open)){let u=Ra(n,s.breachKey,d);return{key:s.breachKey,c:u,door:d.type==="door"}}}let r=0,o=0,a=0;for(let d of n.units)d.owner===e.owner&&d.raid===e.raid&&!d.dead&&(r+=d.x,o+=d.y,a++);a||(r=e.x,o=e.y,a=1),r/=a,o/=a;let c=null,l=1e18,f=!1;for(let[d,u]of n.walls){if(u.owner!==i.owner||u.hp<=0||u.type==="door"&&u.open)continue;let p=Ra(n,d,u);if(ve(p.x,p.y,i.hx,i.hy)>Ht*Ht)continue;let x=(te(r,o,p.x,p.y)+te(p.x,p.y,i.hx,i.hy))*(u.type==="door"?.6:1);x<l&&(l=x,c=d,f=u.type==="door")}if(!c)return null;s&&(s.breachKey=c,s.breachT=n.t);let h=n.walls.get(c);return{key:c,c:Ra(n,c,h),door:f}}function Ra(n,e,t){let i=e.split(","),s=+i[1],r=+i[2];return i[0]==="V"?{x:s*64,y:r*64+64/2}:{x:s*64+64/2,y:r*64}}function Ju(n,e,t){let i=null,s=57600,r=!1;for(let[a,c]of n.walls){if(c.owner!==t.owner||c.hp<=0||c.type==="door"&&c.open)continue;let l=Ra(n,a,c),f=ve(e.x,e.y,l.x,l.y),h=c.type==="door";(f<s||h&&!r&&f<57600)&&(h||!r)&&(s=f,i=l,r=h)}if(!i||e.rkCd>0)return;let o=te(e.x,e.y,i.x,i.y);e.rockets>0&&o>=yt.ROCKET_MIN?(Nn(e,i.x,i.y,1),Ah(n,e,i.x,i.y,2.2)):o<90&&e.satchels>0&&(n.satchels.push({x:i.x,y:i.y,t:3,from:e.owner}),e.satchels--,e.rkCd=4.5)}function jg(n,e,t){e.wasRaid=!1,e.act="return",e.retT+=t;let i=Gt(n,e,e.hx+e.lane,e.hy+e.hoff,t,{arrive:64*1.5});if(i==="arrived"){eo(n,e),e.state="gather",e.retT=0;return}if(i==="stuck"||e.retT>14){let s=e.ally?null:n.teams[e.id],r=s&&Vn(n,e);s&&r&&qr(n,s,r)?i==="stuck"&&wh(n,e):(eo(n,e),e.state="gather",e.retT=0)}}function eo(n,e){if(e.ally){for(let s of["wood","stone","metal"])n.inv[s]+=e.inv[s],e.inv[s]=0;n.inv.scrap+=e.scrap,e.scrap=0;return}let t=Vn(n,e),i=t&&En(n,t.tcKey);if(i){for(let s of["wood","stone","metal"])i.store[s]+=e.inv[s],e.inv[s]=0;i.store.scrap+=e.scrap,e.scrap=0}}function Qg(n,e,t,i,s){e.act="trade";let r=n.world.shop;if(!r){e.state="return";return}let o=(e.id>=0?e.id:3)+(e.tradeJitter||0),a=r.x+Math.cos(o*2.39996)*Tt*.34,c=r.y+Math.sin(o*2.39996)*Tt*.34;if(!e.tradeDone){if(te(e.x,e.y,r.x,r.y)>Tt*.55){if(e.copter&&!e.copter.destroyed){ju(n,e,a,c,s,Tt*.5);return}Gt(n,e,a,c,s,{arrive:30})==="stuck"&&(e.tradeCd=n.t+20,e.tradeJitter=(e.tradeJitter||0)+1,e.state="return");return}ex(n,e,t,i),e.tradeDone=!0;return}if(e.flying){ju(n,e,e.hx-256,e.hy,s,46)&&(lp(e),e.tradeDone=!1,e.state="return");return}e.tradeDone=!1,e.state="return"}function ex(n,e,t,i){let s=0;for(;e.inv.wood>=100;)e.inv.wood-=100,e.scrap+=6,s+=6;for(;e.inv.stone>=100;)e.inv.stone-=100,e.scrap+=9,s+=9;for(;e.inv.metal>=50;)e.inv.metal-=50,e.scrap+=10,s+=10;s>0&&Xe(n,e.x,e.y,"+"+s+" scrap","#ffe07a");let r=Vn(n,e),o=r&&En(n,r.tcKey);if(o){if(e.primary)e.scrap+=o.store.scrap,o.store.scrap=0;else if(e.rocketer){let l=Math.max(0,o.store.scrap-100);e.scrap+=l,o.store.scrap-=l}}let a=!1;for(e.primary&&t&&e.scrap>=Zt.cost&&!n.transports.some(l=>l.owner===e.owner&&!l.destroyed)&&op(n,t)&&(e.scrap-=Zt.cost,hu(n,t,e),a=!0),!e.weak&&e.gun==="pistol"&&e.scrap>=10&&(e.scrap-=10,e.gun=e.shotgun?"shotgun":"rifle",Xe(n,e.x,e.y,"+"+e.gun,"#bfe3ff"),a=!0),e.hard&&e.gun==="rifle"&&!e.rifleLaser&&e.scrap>=10&&(e.scrap-=10,e.rifleLaser=!0,Xe(n,e.x,e.y,"+laser","#ff6a6a"),a=!0);e.rockets<2&&e.scrap>=12;)e.scrap-=12,e.rockets++,a=!0;if(e.primary&&e.rockets>=2)for(;e.scrap>=yt.WORKER_COST&&Ea(n,e);)a=!0;for(;e.rockets<12&&e.scrap>=12;)e.scrap-=12,e.rockets++,a=!0;for(;e.satchels<4&&e.scrap>=8;)e.scrap-=8,e.satchels++,a=!0;if(e.grenades<2&&e.scrap>=8&&(e.scrap-=8,e.grenades++,a=!0),e.hard){for(;e.scrap>=14&&e.bodyArmor<3;)e.scrap-=14,e.bodyArmor++,Xe(n,e.x,e.y,"+armor","#9fb0c8"),a=!0;for(;e.scrap>=12&&e.facemask<3;)e.scrap-=12,e.facemask++,a=!0;for(;e.scrap>=20&&e.hqm<60;)e.scrap-=14,e.hqm+=10,a=!0}let c=n.units.filter(l=>l.owner===e.owner&&l.copter&&!l.copter.destroyed).length;(!e.copter||e.copter.destroyed)&&!e.aboard&&e.scrap>=yt.MINICOPTER_COST&&c<(e.hard?3:2)&&(e.scrap-=yt.MINICOPTER_COST,e.copter={x:e.x-128,y:e.y,angle:0,rotor:0,spin:0,vx:0,vy:0,hp:160,max:160,destroyed:!1},Xe(n,e.x,e.y,"+minicopter","#bfe3ff"),a=!0),a&&Xe(n,e.x,e.y-16,"resupplied","#bfe3ff")}function ju(n,e,t,i,s,r=44){let o=e.copter;if(!o||o.destroyed)return!0;e.flying||(o.x=e.x,o.y=e.y,e.flying=!0,e.flyT=0),e.flyT=(e.flyT||0)+s;let a=te(o.x,o.y,t,i);if(a<r||e.flyT>9)return e.flyT>9&&(o.x=t,o.y=i,o.vx=o.vy=0),e.x=o.x,e.y=o.y,!0;let c=Math.atan2(i-o.y,t-o.x);o.angle=o.angle+Aa(o.angle,c)*Math.min(1,s*4),o.rotor+=s*46;let l=a>160?1:Math.max(.12,a/160);o.vx+=Math.cos(o.angle)*st.accel*l*s,o.vy+=Math.sin(o.angle)*st.accel*l*s;let f=Math.pow(st.drag,s);o.vx*=f,o.vy*=f;let h=Math.hypot(o.vx,o.vy);return h>st.speed&&(o.vx*=st.speed/h,o.vy*=st.speed/h),o.x=et(o.x+o.vx*s,st.r,xe.w-st.r),o.y=et(o.y+o.vy*s,st.r,xe.h-st.r),e.x=o.x,e.y=o.y,!1}function lp(n){n.copter&&(n.copter.x=n.x,n.copter.y=n.y,n.copter.vx=0,n.copter.vy=0,n.copter.spin=0),n.flying=!1}function tx(n,e,t,i,s){e.wasRaid=!1,e.retT=0;let r=e.inv.wood+e.inv.stone+e.inv.metal,o=te(e.x,e.y,e.hx,e.hy),a=o<200;e.gathering=!1;let c=t&&Vn(n,e);if(e.buildDuty&&t&&c){let h=qr(n,t,c);if(h){if(e.act="build",o>200){Gt(n,e,e.hx+e.lane,e.hy+e.hoff,s);return}r>0&&eo(n,e),dh(n,t,h,js(n,e))&&(Xe(n,e.x,e.y,"sealed","#9ad06a"),e.maintT=n.t);return}if(a){r>0&&eo(n,e);let d=_a(n,t,c);if(d&&Kd(n,t,d,js(n,e))){e.act="build",e.maintT=n.t,Xe(n,e.x,e.y,"repaired","#9ad06a");return}if(e.expandT<=0&&(e.expandT=n.rng.rand(2.5,6),qu(n,e))){e.act="build",e.maintT=n.t;return}}}if(a&&t&&c&&((r>100||e.scrap>0)&&eo(n,e),i.breach&&dh(n,t,i.breach,js(n,e))&&(i.breach=null,i.sealed=!0,e.maintT=n.t,Xe(n,e.x,e.y,"sealed","#9ad06a"))),e.qRun){let h=n.quarry;if(!h||h.owner===e.owner||n.t>e.qRun.until)e.qRun=null;else{e.act="quarry";let d=Sh(n,e),u=te(e.x,e.y,h.x,h.y);if(d&&u<h.r){Nn(e,d.x,d.y,s,10),to(n,e,d,s);return}u>h.r*.5&&Gt(n,e,h.x,h.y,s,{arrive:h.r*.4})==="stuck"&&(e.qRun=null);return}}if(e.lootRun){let h=e.lootRun,d=n.t<h.until;if(h.kind==="crate"&&(d=d&&!!n.lockedCrate),h.kind==="airdrop"){let u=te(e.x,e.y,h.x,h.y);(u<2200&&n.airdrop||!n.airdrop&&u<480)&&(d=!1)}if(h.kind==="pile"&&(te(e.x,e.y,h.x,h.y)<480?d=!1:n.loot.some(p=>(p.kind==="rocket"||p.kind==="satchel")&&ve(p.x,p.y,h.x,h.y)<300*300)||(d=!1)),!d)e.lootRun=null;else{e.act="loot",h.kind==="crate"&&n.lockedCrate&&te(e.x,e.y,n.lockedCrate.x,n.lockedCrate.y)<=90||Gt(n,e,h.x,h.y,s,{arrive:80,speed:170})==="stuck"&&(e.lootRun=null);return}}if(e.lootSkipSet&&n.t>e.lootSkipT&&(e.lootSkipSet=null),e.lootTgt&&(!n.loot.includes(e.lootTgt)||ve(e.x,e.y,e.lootTgt.x,e.lootTgt.y)>560*560)&&(e.lootTgt=null),!e.lootTgt){let h=null,d=520*520;for(let u of n.loot){if(e.lootSkipSet&&e.lootSkipSet.has(u))continue;let p=ve(e.x,e.y,u.x,u.y);p<d&&(d=p,h=u)}e.lootTgt=h}if(e.lootTgt){e.act="loot",(Gt(n,e,e.lootTgt.x,e.lootTgt.y,s,{arrive:22,speed:170})==="stuck"||e.directFallback&&e.stuckT>2)&&(e.lootSkipSet||(e.lootSkipSet=new Set),e.lootSkipSet.add(e.lootTgt),e.lootSkipT=n.t+25,e.lootTgt=null);return}if(n.airdrop&&n.t>(e.airdropCd||0)&&ve(e.x,e.y,n.airdrop.x,n.airdrop.gy)<2600*2600){let h=n.airdrop;e.act="airdrop";let d=h.fall<1?h.gy:h.y,u=te(e.x,e.y,h.x,d);if(h.fall>=1&&u<150){Nn(e,h.x,h.y,s,10),e.gunCd<=0&&Ca(n,e,h.x,h.y);return}if(u>130){Gt(n,e,h.x,d,s,{arrive:120,speed:165})==="stuck"&&(e.airdropCd=n.t+25);return}return}if(n.lockedCrate&&!e.buildDuty&&n.t>(e.crateCd||0)&&ve(e.x,e.y,n.lockedCrate.x,n.lockedCrate.y)<1600*1600){let h=n.lockedCrate;if(e.act="crate",te(e.x,e.y,h.x,h.y)>90){Gt(n,e,h.x,h.y,s,{arrive:80,speed:165})==="stuck"&&(e.crateCd=n.t+30);return}return}if(!e.endgame){if(e.monRun){let h=Th(n,e),d=h&&Qr(n,h);if(e.monRunT+=s,!d||r>=340||e.monRunT>12)e.monRun=!1,e.monCd=n.t+n.rng.rand(60,110);else{e.act="monument";let u=ox(n,h);if(u&&ve(e.x,e.y,h.x,h.y)<(h.r+320)*(h.r+320)){te(e.x,e.y,u.x,u.y)>340||zt(n,e.x,e.y,u.x,u.y)?Gt(n,e,u.x,u.y,s,{arrive:300})==="stuck"&&(e.monRun=!1,e.monCd=n.t+30):(Nn(e,u.x,u.y,s,10),to(n,e,{x:u.x,y:u.y,ref:u},s));return}let p=Qr(n,h);if(p){te(e.x,e.y,p.x,p.y)>120?Gt(n,e,p.x,p.y,s,{arrive:110,speed:150})==="stuck"&&(e.monRun=!1,e.monCd=n.t+14):(Nn(e,p.x,p.y,s,10),e.gunCd<=0&&Ca(n,e,p.x,p.y));return}}}else if(n.t>e.monCd&&r<200){let h=Th(n,e);h&&Qr(n,h)&&(ve(h.x,h.y,e.hx,e.hy)<2100*2100||ve(h.x,h.y,e.x,e.y)<1300*1300)&&(e.monRun=!0,e.monRunT=0)}}let l=Th(n,e);l&&ve(e.x,e.y,l.x,l.y)<(l.r+150)*(l.r+150)&&!e.monRun?(e.monStay+=s,e.monStay>10&&(e.monStay=0,e.monCd=n.t+45,e.tgtNode=null)):e.monStay=Math.max(0,e.monStay-2*s);let f=nx(n,e);if(f){cp(n,e,f,s);return}if(l&&Qr(n,l)&&n.t>e.monCd){let h=Qr(n,l);e.act="monument",te(e.x,e.y,h.x,h.y)>120?Gt(n,e,h.x,h.y,s,{arrive:110,speed:150})==="stuck"&&(e.monCd=n.t+30):(Nn(e,h.x,h.y,s,10),e.gunCd<=0&&Ca(n,e,h.x,h.y));return}e.act="roam",ax(n,e,s)}function cp(n,e,t,i){if(te(e.x,e.y,t.x,t.y)>t.r+22){e.act="toNode",Gt(n,e,t.x,t.y,i,{arrive:t.r+18})==="stuck"&&((!e.skipSet||n.t>e.skipT)&&(e.skipSet=new Set),e.skipSet.add(t),e.skipT=n.t+10,e.tgtNode=null);return}if(e.act="gather",e.gathering=!0,Nn(e,t.x,t.y,i),e.swing+=i*9,e.think<=0){e.think=.5;let r=Math.min(e.jack?24:8,t.amount);r>0&&(t.amount-=r,t.regen=0,e.inv[t.base]+=r,n.events.push({type:"harvest",x:t.x,y:t.y,kind:t.base,jack:e.jack}))}}function nx(n,e){if(e.tgtNode){let i=e.tgtNode,s=i.by&&i.by!==e&&!i.by.dead&&n.t-i.byT<3;if(i.amount>0&&!s)return i.by=e,i.byT=n.t,i;e.tgtNode=null}let t=[1400,2800,5600,1e9];for(let i of t){let s=null,r=1e18;for(let o of n.resources){if(o.amount<=0||e.skipSet&&e.skipSet.has(o)&&n.t<e.skipT)continue;let a=ve(o.x,o.y,e.hx,e.hy);if(a<57600||a>i*i||o.by&&o.by!==e&&!o.by.dead&&n.t-o.byT<2.5||n.structures.has(ix(o.x,o.y)))continue;let c=ve(e.x,e.y,o.x,o.y);c*=sx(n,e,o)?1:6,c<r&&(r=c,s=o)}if(s)return s.by=e,s.byT=n.t,e.tgtNode=s,s}return null}var ix=(n,e)=>Math.floor(n/64)+","+Math.floor(e/64);function sx(n,e,t){return t._losT&&n.t-t._losT<2&&t._losFor===e||(t._los=Bd(n,e.x,e.y,t.x,t.y),t._losT=n.t,t._losFor=e),t._los}function Qu(n,e,t){let i=null,s=t*t;for(let r of n.resources){if(r.amount<=0)continue;let o=ve(e.x,e.y,r.x,r.y);o<s&&(s=o,i=r)}return i}function rx(n,e,t,i){let s=null,r=i*i;for(let o of n.resources){if(o.amount<=0||o.base!==t)continue;let a=ve(e.x,e.y,o.x,o.y);a<r&&(r=a,s=o)}return s}function Th(n,e){let t=null,i=1e18;for(let s of n.world.monuments){if(s.type==="quarry")continue;let r=ve(e.x,e.y,s.x,s.y);r<i&&(i=r,t=s)}return t}function Qr(n,e){for(let t of n.barrels)if(!(t.hp<=0||t.tier!=="mon")&&ve(t.x,t.y,e.x,e.y)<(e.r+220)*(e.r+220))return t;return null}function ox(n,e){let t=null,i=(e.r+280)*(e.r+280);for(let s of n.guards){if(s.dead)continue;let r=ve(s.x,s.y,e.x,e.y);r<i&&(i=r,t=s)}return t}function ax(n,e,t){if(!e.roamX||te(e.x,e.y,e.roamX,e.roamY)<140||n.t>(e.roamT||0))for(let i=0;i<12;i++){let s=n.rng.rand(800,xe.w-800),r=n.rng.rand(800,xe.h-800);if(!(!n.world.onLand(s,r)||n.world.lakeAt(s,r))){e.roamX=s,e.roamY=r,e.roamT=n.t+n.rng.rand(7,13);break}}e.roamX&&Gt(n,e,e.roamX,e.roamY,t,{speed:140,arrive:120})==="stuck"&&(e.roamX=0)}function hp(n,e,t,i){e.hp<e.max*.35&&cx(n,e,t);let s=t.x,r=t.y;if(e.hard&&(t.vx||t.vy)){let c=e.weak?1150:1500,l=Math.min(.7,te(e.x,e.y,t.x,t.y)/c);s+=(t.vx||0)*l,r+=(t.vy||0)*l}let o=te(e.x,e.y,t.x,t.y);if(!zt(n,e.x,e.y,t.x,t.y)&&!ai(n,e.x,e.y,t.x,t.y)&&o<460){if(Nn(e,s,r,i,10),to(n,e,{x:s,y:r,ref:t.ref},i),o<140?e.backoff=!0:o>180&&(e.backoff=!1),e.backoff){let c=Math.atan2(e.y-t.y,e.x-t.x),l=e.x+Math.cos(c)*120*i,f=e.y+Math.sin(c)*120*i;Et(n,l,f,13,{passOwner:e.owner})||(e.x=l,e.y=f,e.path=null)}else if(e.regenT>0||e.retaliateT>0){e.strafeT-=i,e.strafeT<=0&&(e.strafeT=yt.STRAFE_FLIP,e.strafeS=-e.strafeS);let c=Math.atan2(t.y-e.y,t.x-e.x)+Math.PI/2*e.strafeS,l=e.x+Math.cos(c)*120*i,f=e.y+Math.sin(c)*120*i;Et(n,l,f,13,{passOwner:e.owner})||(e.x=l,e.y=f,e.path=null)}}else Gt(n,e,t.x,t.y,i,{arrive:380})==="stuck"&&(e.disengageT=4,e.retaliateT=0,e.defHold=0,e.defTgt=null,e.thCache=null,t.ref&&(e.unreach=t.ref,e.unreachT=n.t+25))}function to(n,e,t,i){e.gunCd>0||e.flying||e.dead||bt(n,e.x,e.y)||bt(n,t.x,t.y)||zt(n,e.x,e.y,t.x,t.y)||ai(n,e.x,e.y,t.x,t.y)||Ca(n,e,t.x,t.y)}function Ca(n,e,t,i){let s=te(e.x,e.y,t,i),r=Math.atan2(i-e.y,t-e.x);e.angle=r;let o=18;if(e.gun==="shotgun"&&s<420){e.gunCd=.34;for(let a=0;a<6;a++)Ln(n,{x:e.x+Math.cos(r)*o,y:e.y+Math.sin(r)*o,angle:r+n.rng.rand(-.18,.18),speed:1050,dmg:8,from:e.owner,life:.95})}else if(e.gun==="rifle"){e.gunCd=e.hard?.12:.16;let a=e.hard?.02:.055;e.rifleLaser&&(a*=.45),Ln(n,{x:e.x+Math.cos(r)*o,y:e.y+Math.sin(r)*o,angle:r+n.rng.rand(-a,a),speed:1500,dmg:e.hard?13:11,from:e.owner,life:1.6})}else e.gunCd=.3,Ln(n,{x:e.x+Math.cos(r)*o,y:e.y+Math.sin(r)*o,angle:r+n.rng.rand(-.1,.1),speed:1150,dmg:7,from:e.owner,life:1.6});n.events.push({type:"botShot",x:e.x,y:e.y,a:r})}function Ah(n,e,t,i,s){if(e.rkCd>0||e.rockets<=0||te(e.x,e.y,t,i)<yt.ROCKET_MIN||bt(n,e.x,e.y))return!1;e.rkCd=s||2.4,e.rockets--;let r=Math.atan2(i-e.y,t-e.x);return Yr(n,e.x+Math.cos(r)*22,e.y+Math.sin(r)*22,r,e.owner),!0}function lx(n,e,t){if(e.grenades<=0||e.gnCd>0)return;let i=te(e.x,e.y,t.x,t.y);if(i<150||i>380)return;let s=!1,r=n.player;if(!r.dead&&ve(t.x,t.y,r.x,r.y)<4900&&(s=!0),!s){for(let c of n.units)if(!c.dead&&c.owner!==e.owner&&ve(t.x,t.y,c.x,c.y)<4900){s=!0;break}}if(!s)return;e.gnCd=n.rng.rand(5,8),e.grenades--;let o=Math.atan2(t.y-e.y,t.x-e.x),a=Math.min(420,i)*5.4;n.grenades.push({x:e.x+Math.cos(o)*22,y:e.y+Math.sin(o)*22,vx:Math.cos(o)*a*.2,vy:Math.sin(o)*a*.2,t:Ws.fuse,from:e.owner,bob:0}),Xe(n,e.x,e.y,"grenade!","#ffd0a0")}function cx(n,e,t){if(e.fenceCd>0)return;let i=js(n,e),s=0;for(let d of i)s+=d.wood||0;if(s<10)return;let r=Math.atan2(t.y-e.y,t.x-e.x),o=e.x+Math.cos(r)*30,a=e.y+Math.sin(r)*30,c=Math.floor(o/64),l=Math.floor(a/64);if(n.structures.has(c+","+l))return;let f=10;for(let d of i){let u=Math.min(f,d.wood||0);if(d.wood-=u,f-=u,f<=0)break}let h=r+Math.PI/2;n.fences.push({x:o,y:a,a:h,owner:e.owner,hp:200,max:200,t:60,x0:o-Math.cos(h)*23,y0:a-Math.sin(h)*23,x1:o+Math.cos(h)*23,y1:a+Math.sin(h)*23}),n.fences.length>120&&n.fences.shift(),n.needFenceRefresh=!0,e.fenceCd=9}function fp(n,e){for(let[o,a]of n.walls)a.type==="door"&&a.open&&a.closeT!==void 0&&n.t>a.closeT&&(a.open=!1,n.nav.stamp++);let t=0;for(let o of n.teams)o.eliminated||(o.bases.some(a=>!a.dead)||n.units.some(a=>a.owner===o.owner&&a.unfounded&&!a.eliminated))&&t++;if(n.aliveBases=t,n.dbSweepT-=e,n.dbSweepT<=0){n.dbSweepT=2;for(let o of n.teams)for(let a of o.bases)!a.dead&&!En(n,a.tcKey)&&(a.dead=!0),a.dead&&!a.cleared&&(a.cleared=!0,hh(n,o.owner,a.hx,a.hy))}if(n.aggroT-=e,n.aggroT<=0){let o=n.teams.find(c=>c.owner===n.aggressorOwner);if(o&&!o.eliminated&&o.brain.raidTarget&&Gn(n,o.brain.raidTarget)&&n.units.some(c=>c.owner===o.owner&&!c.dead&&!c.eliminated))n.aggroT=8;else{let c=n.teams.filter(l=>!l.eliminated&&n.units.some(f=>f.owner===l.owner&&f.primary&&!f.eliminated));if(c.length){let l=c[Math.floor(n.rng.next()*c.length)];n.aggressor=l.id,n.aggressorOwner=l.owner}n.aggroT=n.rng.rand(35,55)}}n.roleT-=e;let i=n.roleT<=0;i&&(n.roleT=.4);for(let o of n.teams){if(o.eliminated)continue;let a=o.brain,c=o.bases.filter(b=>!b.dead);if(!c.length)continue;let l=n.units.find(b=>b.owner===o.owner&&b.primary&&!b.eliminated);if(a.statusT-=e,a.statusT<=0){a.statusT=.5;let b=c[0];a.breach=qr(n,o,b),a.damaged=_a(n,o,b),a.sealed=!a.breach;let S=2,R=0,L=0;for(let B of n.structures.values())B.owner===o.owner&&(S++,L++);for(let B of n.deploys.values())B.owner===o.owner&&B.type==="turret"&&(S++,R++);let X=Jr(n,o),q=X?X.wood+X.stone+X.metal:0;a.decaying=q<S*Or*150;let N=o.hard?4:o.weak?2:3;a.ready=a.sealed&&R>=N&&q>S*Or*300&&L>=(o.hard?6:4),a.floors=L,a.turrets=R}if(!i)continue;let f=n.units.filter(b=>b.owner===o.owner&&!b.eliminated&&!b.dead&&!b.flying&&!b.unfounded&&!b.aboard),h=(b,S)=>c.some(R=>ve(b,S,R.hx,R.hy)<720*720),d=0,u=0,p=0,x=n.player;!x.dead&&!x.inCopter&&!n.ghost&&h(x.x,x.y)&&(d++,u+=x.x,p+=x.y);for(let b of n.units)b.owner===o.owner||b.dead||b.flying||b.eliminated||h(b.x,b.y)&&(d++,u+=b.x,p+=b.y);let m=!1;for(let b of n.rockets)if(b.from!==o.owner&&h(b.x,b.y)){m=!0;break}if(!m){for(let b of n.satchels)if(b.from!==o.owner&&h(b.x,b.y)){m=!0;break}}a.attackers=d,a.urgent=m,a.attack=d>0||n.units.some(b=>b.raid===o&&b.state==="raid"&&!b.dead),a.aggressor=o.owner===n.aggressorOwner||n.aliveBases<=3;let g=0;if(o.hard)for(let b of n.units)b.owner===o.owner||b.dead||b.eliminated||b.state==="raid"&&b.raid===o&&c.some(S=>ve(b.x,b.y,S.hx,S.hy)<1400*1400)&&g++;let y=Math.max(d,g),_=m?f.length:y>0?Math.min(y+1,f.length):0;d>0?(u/=d,p/=d):(u=c[0].hx,p=c[0].hy);let M=[...f].sort((b,S)=>ve(b.x,b.y,u,p)-ve(S.x,S.y,u,p));for(let b=0;b<M.length;b++)M[b].defDuty=b<_;let E=Jr(n,o);(!a.sealed||E&&E.wood>=40&&a.floors<(o.hard?49:36))&&(a.buildHoldT=n.t+6);let I=f.filter(b=>!b.defDuty),v=null;n.t<a.buildHoldT&&I.length>=2&&(v=I.find(b=>b.buildDuty)||I.reduce((b,S)=>ve(b.x,b.y,c[0].hx,c[0].hy)<ve(S.x,S.y,c[0].hx,c[0].hy)?b:S,I[0]));for(let b of f)b.buildDuty=b===v;if(m||d>0&&!a.aggressor){a.raidTarget=null;for(let b of f)b.rocketer=!1}else if(a.ready||a.aggressor){let b=0;for(let N of f)b+=N.rockets+N.satchels;let S=f.filter(N=>!N.defDuty&&!N.buildDuty),R=Math.min(n.aliveBases<=4?3:2,S.length),L=S.filter(N=>N.rocketer);for(let N of f)N.rocketer&&(N.defDuty||N.buildDuty)&&(N.rocketer=!1,L=L.filter(B=>B!==N));if(L.length<R){let N=S.filter(B=>!B.rocketer).sort((B,Z)=>Z.rockets+Z.satchels-(B.rockets+B.satchels)||ve(B.x,B.y,c[0].hx,c[0].hy)-ve(Z.x,Z.y,c[0].hx,c[0].hy));for(let B of N){if(L.length>=R)break;B.rocketer=!0,L.push(B)}}let X=a.aggressor?2:4,q=f.filter(N=>!N.defDuty).length;l&&q>=2&&b>=X?(!a.raidTarget||!Gn(n,a.raidTarget))&&(a.raidTarget=Ch(n,o,l)):a.raidTarget=null}else{a.raidTarget=null;for(let b of f)b.rocketer=!1}if(o.hard&&n.t>a.lootCd&&!n.units.some(b=>b.owner===o.owner&&b.lootRun)){let b=null;if(n.lockedCrate)b={x:n.lockedCrate.x,y:n.lockedCrate.y,kind:"crate"};else if(n.airdrop)b={x:n.airdrop.x,y:n.airdrop.gy,kind:"airdrop"};else for(let S of n.loot){if(S.kind!=="rocket"&&S.kind!=="satchel")continue;let R=!1;for(let L of n.teams)if(!(L===o||L.eliminated)&&L.bases.some(X=>!X.dead&&ve(S.x,S.y,X.hx,X.hy)<800*800)){R=!0;break}if(!R){b={x:S.x,y:S.y,kind:"pile"};break}}if(b){let S=n.units.filter(R=>R.owner===o.owner&&!R.dead&&!R.eliminated&&!R.primary&&!R.defDuty&&!R.buildDuty&&!R.rocketer&&!R.monRun&&R.state==="gather").sort((R,L)=>ve(R.x,R.y,b.x,b.y)-ve(L.x,L.y,b.x,b.y))[0];if(S){let R=te(S.x,S.y,b.x,b.y),L=b.kind==="pile"?520:2400;R>L&&R<4500&&(S.lootRun={x:b.x,y:b.y,kind:b.kind,until:n.t+R/yt.BOT_SPEED*1.8+(b.kind==="crate"?170:20)},a.lootCd=n.t+45)}}}if(n.quarry&&n.quarry.owner!==o.owner&&n.t>a.qCd&&!n.units.some(b=>b.owner===o.owner&&b.qRun)){let b=n.units.filter(S=>S.owner===o.owner&&!S.dead&&!S.eliminated&&!S.primary&&!S.defDuty&&!S.buildDuty&&!S.rocketer&&!S.monRun&&!S.lootRun&&S.state==="gather").sort((S,R)=>ve(S.x,S.y,n.quarry.x,n.quarry.y)-ve(R.x,R.y,n.quarry.x,n.quarry.y))[0];if(b){let S=te(b.x,b.y,n.quarry.x,n.quarry.y);S<5200&&(b.qRun={until:n.t+S/yt.BOT_SPEED*1.8+25},a.qCd=n.t+(o.hard?90:150))}}if(o.hard&&l&&!n.signal&&!n.plane&&!n.airdrop&&n.t>a.sigCd){let b=Jr(n,o);if(l.scrap+(b?b.scrap:0)>=yt.SIGNAL_COST+60){let R=c[0];for(let L=0;L<8;L++){let X=L/8*Math.PI*2,q=R.hx+Math.cos(X)*620,N=R.hy+Math.sin(X)*620;if(q<300||N<300||q>xe.w-300||N>xe.h-300||te(q,N,n.world.shop.x,n.world.shop.y)<Tt||!n.world.onLand(q,N)||n.world.lakeAt(q,N))continue;let B=yt.SIGNAL_COST,Z=Math.min(B,l.scrap);l.scrap-=Z,B-=Z,B>0&&b&&(b.scrap-=B),_u(n,q,N),a.sigCd=n.t+n.rng.rand(150,240),Xe(n,R.hx,R.hy-40,"supply signal!","#c9a0ff");break}}}}for(let o of n.teams)o.eliminated||Yu(n,o,e);let s=0,r=null;for(let o of n.teams){if(o.eliminated)continue;let a=0;for(let c of n.units)c.owner===o.owner&&(a+=c.kills);a>s&&(s=a,r=o.id)}if(n.bounty=s>0?r:null,!n.metrics.winner){let o=n.teams.filter(a=>!a.eliminated);o.length===1&&n.teams.length>1&&(n.metrics.winner=o[0].owner,n.metrics.decisiveT=n.t)}}function dp(n){let e=Fr;n.t+=e,n.tick++,n.clouds||vh(n),n.needFenceRefresh&&(n.needFenceRefresh=!1,Fd(n)),Au(n,e),su(n,e),Hu(n,e),zu(n,e),ru(n,e),Zd(n,e),gu(n,e),wu(n,e),uu(n,e),pu(n,e),xu(n,e),Mu(n,e),vu(n,e),mu(n,e),bu(n,e),tu(n,e),lu(n,e),nu(n,e),iu(n,e),hx(n,e),fx(n,e),n.raidAlarm&&(n.raidAlarm.t-=e,n.raidAlarm.t<=0&&(n.raidAlarm=null)),fp(n,e),du(n,e);for(let t of n.units)ep(n,t,e);for(let t=n.elims.length-1;t>=0;t--)n.elims[t].t-=e,n.elims[t].t<=0&&n.elims.splice(t,1);jd(n,e),au(n,e),Tu(n,e);for(let t=n.particles.length-1;t>=0;t--){let i=n.particles[t],s=Math.pow(.9,e*60);i.vx*=s,i.vy*=s,i.x+=i.vx*e,i.y+=i.vy*e,i.life-=e,i.life<=0&&n.particles.splice(t,1)}for(let t=n.floats.length-1;t>=0;t--){let i=n.floats[t];i.y+=i.vy*e,i.life-=e,i.life<=0&&n.floats.splice(t,1)}for(let t=n.flashes.length-1;t>=0;t--)n.flashes[t].life-=e,n.flashes[t].life<=0&&n.flashes.splice(t,1);for(let t=n.blasts.length-1;t>=0;t--)n.blasts[t].life-=e,n.blasts[t].life<=0&&n.blasts.splice(t,1);n.muzzle&&(n.muzzle.t-=e,n.muzzle.t<=0&&(n.muzzle=null)),n.shake=Math.max(0,n.shake-26*e),n.tip&&(n.tip.t-=e,n.tip.t<=0&&(n.tip=null)),n.events.length>600&&n.events.splice(0,n.events.length-600),n.tick%120===0&&ux(n)}function hx(n,e){for(let t=n.fences.length-1;t>=0;t--){let i=n.fences[t];i.t-=e,i.t<=0&&(n.fences.splice(t,1),n.needFenceRefresh=!0)}}function fx(n,e){for(let t=n.raids.length-1;t>=0;t--)n.raids[t].t-=e,n.raids[t].t<=0&&n.raids.splice(t,1)}function dx(n,e){let t=Math.floor(e.x/64),i=Math.floor(e.y/64);for(let s of["V,"+t+","+i,"V,"+(t+1)+","+i,"H,"+t+","+i,"H,"+t+","+(i+1)]){let r=n.walls.get(s);if(!r||r.hp<=0||r.type==="door"&&r.open||r.owner===e.owner)continue;let o=Ot(s,r);if(At(e.x,e.y,o[0],o[1],o[2],o[3])<3)return!0}return!1}function ux(n){let e=n.metrics;for(let t of n.units)if(!(t.dead||t.eliminated)&&((!isFinite(t.x)||!isFinite(t.y))&&(e.nan=(e.nan||0)+1,t.x=t.hx,t.y=t.hy),dx(n,t)&&e.wallPhase++,t.stuckT>1.5&&t.state!=="raid")){let i=n.world.lakeAt(t.x,t.y),s="open";if(Math.abs(t.x-t.hx)<460&&Math.abs(t.y-t.hy)<460)s="base";else if(i)s="lake";else for(let r of n.world.monuments)if((t.x-r.x)**2+(t.y-r.y)**2<(r.r+220)**2){s="monument";break}e.regionStuck[s]+=2}if((!isFinite(n.player.x)||!isFinite(n.player.y))&&(e.nan=(e.nan||0)+1,n.player.x=6912,n.player.y=4868),n.t-(e._wlT||0)>=60){e._wlT=n.t;let t={t:Math.round(n.t)};for(let i of n.teams)t[i.owner]=n.units.filter(s=>s.owner===i.owner&&!s.eliminated).length;e.workerLog.push(t)}}var Zp=0,_f=1,Kp=2;var Go=1,$p=2,Sr=3,Bi=0,yn=1,Pn=2,vi=0,rs=1,wn=2,vf=3,Mf=4,Jp=5;var os=100,jp=101,Qp=102,em=103,tm=104,nm=200,im=201,sm=202,rm=203,sl=204,rl=205,om=206,am=207,lm=208,cm=209,hm=210,fm=211,dm=212,um=213,pm=214,ol=0,al=1,ll=2,Ss=3,cl=4,hl=5,fl=6,dl=7,Xl=0,mm=1,gm=2,ni=0,bf=1,wf=2,Tf=3,Ef=4,Af=5,Rf=6,Cf=7;var Sf=300,fs=301,Os=302,ql=303,Yl=304,Wo=306,fi=1e3,hi=1001,ul=1002,mn=1003,xm=1004;var Xo=1005;var xn=1006,Zl=1007;var Mi=1008;var In=1009,Pf=1010,If=1011,Pr=1012,Kl=1013,ii=1014,Zn=1015,bi=1016,$l=1017,Jl=1018,Ir=1020,Df=35902,Lf=35899,Nf=1021,kf=1022,Kn=1023,di=1026,ds=1027,jl=1028,Ql=1029,us=1030,ec=1031;var tc=1033,qo=33776,Yo=33777,Zo=33778,Ko=33779,nc=35840,ic=35841,sc=35842,rc=35843,oc=36196,ac=37492,lc=37496,cc=37488,hc=37489,$o=37490,fc=37491,dc=37808,uc=37809,pc=37810,mc=37811,gc=37812,xc=37813,yc=37814,_c=37815,vc=37816,Mc=37817,bc=37818,wc=37819,Tc=37820,Ec=37821,Ac=36492,Rc=36494,Cc=36495,Sc=36283,Pc=36284,Jo=36285,Ic=36286;var mo=2300,pl=2301,il=2302,rf=2303,of=2400,af=2401,lf=2402;var ym=3200;var Dc=0,_m=1,Xi="",on="srgb",go="srgb-linear",xo="linear",Ct="srgb";var Cs=7680;var cf=519,vm=512,Mm=513,bm=514,Lc=515,wm=516,Tm=517,Nc=518,Em=519,ml=35044;var Uf="300 es",ti=2e3,yr=2001;function px(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function mx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function yo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Am(){let n=yo("canvas");return n.style.display="block",n}var up={},_r=null;function _o(...n){let e="THREE."+n.shift();_r?_r("log",e,...n):console.log(e,...n)}function Rm(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function it(...n){n=Rm(n);let e="THREE."+n.shift();if(_r)_r("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function nt(...n){n=Rm(n);let e="THREE."+n.shift();if(_r)_r("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function gl(...n){let e=n.join(" ");e in up||(up[e]=!0,it(...n))}function Cm(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Sm={[ol]:al,[ll]:fl,[cl]:dl,[Ss]:hl,[al]:ol,[fl]:ll,[dl]:cl,[hl]:Ss},ui=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ph=Math.PI/180,xl=180/Math.PI;function Fi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]).toLowerCase()}function gt(n,e,t){return Math.max(e,Math.min(t,n))}function gx(n,e){return(n%e+e)%e}function Ih(n,e,t){return(1-t)*n+t*e}function ci(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Lt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ke=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pi=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],f=i[s+2],h=i[s+3],d=r[o+0],u=r[o+1],p=r[o+2],x=r[o+3];if(h!==x||c!==d||l!==u||f!==p){let m=c*d+l*u+f*p+h*x;m<0&&(d=-d,u=-u,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),_=Math.sin(y);g=Math.sin(g*y)/_,a=Math.sin(a*y)/_,c=c*g+d*a,l=l*g+u*a,f=f*g+p*a,h=h*g+x*a}else{c=c*g+d*a,l=l*g+u*a,f=f*g+p*a,h=h*g+x*a;let y=1/Math.sqrt(c*c+l*l+f*f+h*h);c*=y,l*=y,f*=y,h*=y}}e[t]=c,e[t+1]=l,e[t+2]=f,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],f=i[s+3],h=r[o],d=r[o+1],u=r[o+2],p=r[o+3];return e[t]=a*p+f*h+c*u-l*d,e[t+1]=c*p+f*d+l*h-a*u,e[t+2]=l*p+f*u+a*d-c*h,e[t+3]=f*p-a*h-c*d-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),f=a(s/2),h=a(r/2),d=c(i/2),u=c(s/2),p=c(r/2);switch(o){case"XYZ":this._x=d*f*h+l*u*p,this._y=l*u*h-d*f*p,this._z=l*f*p+d*u*h,this._w=l*f*h-d*u*p;break;case"YXZ":this._x=d*f*h+l*u*p,this._y=l*u*h-d*f*p,this._z=l*f*p-d*u*h,this._w=l*f*h+d*u*p;break;case"ZXY":this._x=d*f*h-l*u*p,this._y=l*u*h+d*f*p,this._z=l*f*p+d*u*h,this._w=l*f*h-d*u*p;break;case"ZYX":this._x=d*f*h-l*u*p,this._y=l*u*h+d*f*p,this._z=l*f*p-d*u*h,this._w=l*f*h+d*u*p;break;case"YZX":this._x=d*f*h+l*u*p,this._y=l*u*h+d*f*p,this._z=l*f*p-d*u*h,this._w=l*f*h-d*u*p;break;case"XZY":this._x=d*f*h-l*u*p,this._y=l*u*h-d*f*p,this._z=l*f*p+d*u*h,this._w=l*f*h+d*u*p;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],f=t[6],h=t[10],d=i+a+h;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(f-c)*u,this._y=(r-l)*u,this._z=(o-s)*u}else if(i>a&&i>h){let u=2*Math.sqrt(1+i-a-h);this._w=(f-c)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+l)/u}else if(a>h){let u=2*Math.sqrt(1+a-i-h);this._w=(r-l)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(c+f)/u}else{let u=2*Math.sqrt(1+h-i-a);this._w=(o-s)/u,this._x=(r+l)/u,this._y=(c+f)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,f=t._w;return this._x=i*f+o*a+s*l-r*c,this._y=s*f+o*c+r*a-i*l,this._z=r*f+o*l+i*c-s*a,this._w=o*f-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),f=Math.sin(l);c=Math.sin(c*l)/f,t=Math.sin(t*l)/f,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),f=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+c*l+o*h-a*f,this.y=i+c*f+a*l-r*h,this.z=s+c*h+r*f-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Dh.copy(this).projectOnVector(e),this.sub(Dh)}reflect(e){return this.sub(Dh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Dh=new U,pp=new pi,lt=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){let f=this.elements;return f[0]=e,f[1]=s,f[2]=a,f[3]=t,f[4]=r,f[5]=c,f[6]=i,f[7]=o,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],f=i[4],h=i[7],d=i[2],u=i[5],p=i[8],x=s[0],m=s[3],g=s[6],y=s[1],_=s[4],M=s[7],E=s[2],T=s[5],I=s[8];return r[0]=o*x+a*y+c*E,r[3]=o*m+a*_+c*T,r[6]=o*g+a*M+c*I,r[1]=l*x+f*y+h*E,r[4]=l*m+f*_+h*T,r[7]=l*g+f*M+h*I,r[2]=d*x+u*y+p*E,r[5]=d*m+u*_+p*T,r[8]=d*g+u*M+p*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8];return t*o*f-t*a*l-i*r*f+i*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8],h=f*o-a*l,d=a*c-f*r,u=l*r-o*c,p=t*h+i*d+s*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=h*x,e[1]=(s*l-f*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(f*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=u*x,e[7]=(i*c-l*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Lh.makeScale(e,t)),this}rotate(e){return this.premultiply(Lh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Lh=new lt,mp=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gp=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xx(){let n={enabled:!0,workingColorSpace:go,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ct&&(s.r=Oi(s.r),s.g=Oi(s.g),s.b=Oi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ct&&(s.r=gr(s.r),s.g=gr(s.g),s.b=gr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Xi?xo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return gl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return gl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[go]:{primaries:e,whitePoint:i,transfer:xo,toXYZ:mp,fromXYZ:gp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:e,whitePoint:i,transfer:Ct,toXYZ:mp,fromXYZ:gp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),n}var _t=xx();function Oi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function gr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Qs,yl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Qs===void 0&&(Qs=yo("canvas")),Qs.width=e.width,Qs.height=e.height;let s=Qs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Qs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=yo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Oi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Oi(t[i]/255)*255):t[i]=Oi(t[i]);return{data:t,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},yx=0,vr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=Fi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Nh(s[o].image)):r.push(Nh(s[o]))}else r=Nh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Nh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?yl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}var _x=0,kh=new U,Rn=class n extends ui{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=hi,s=hi,r=xn,o=Mi,a=Kn,c=In,l=n.DEFAULT_ANISOTROPY,f=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=Fi(),this.name="",this.source=new vr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(kh).x}get height(){return this.source.getSize(kh).y}get depth(){return this.source.getSize(kh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){it(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){it(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fi:e.x=e.x-Math.floor(e.x);break;case hi:e.x=e.x<0?0:1;break;case ul:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fi:e.y=e.y-Math.floor(e.y);break;case hi:e.y=e.y<0?0:1;break;case ul:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Sf;Rn.DEFAULT_ANISOTROPY=1;var $t=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],f=c[4],h=c[8],d=c[1],u=c[5],p=c[9],x=c[2],m=c[6],g=c[10];if(Math.abs(f-d)<.01&&Math.abs(h-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+x)<.1&&Math.abs(p+m)<.1&&Math.abs(l+u+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,M=(u+1)/2,E=(g+1)/2,T=(f+d)/4,I=(h+x)/4,v=(p+m)/4;return _>M&&_>E?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=T/i,r=I/i):M>E?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=T/s,r=v/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=I/r,s=v/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-p)*(m-p)+(h-x)*(h-x)+(d-f)*(d-f));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(h-x)/y,this.z=(d-f)/y,this.w=Math.acos((l+u+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_l=class extends ui{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new Rn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new vr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fn=class extends _l{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},vo=class extends Rn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var vl=class extends Rn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vt=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,c,l,f,h,d,u,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,f,h,d,u,p,x,m)}set(e,t,i,s,r,o,a,c,l,f,h,d,u,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=f,g[10]=h,g[14]=d,g[3]=u,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,s=1/er.setFromMatrixColumn(e,0).length(),r=1/er.setFromMatrixColumn(e,1).length(),o=1/er.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),f=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*f,u=o*h,p=a*f,x=a*h;t[0]=c*f,t[4]=-c*h,t[8]=l,t[1]=u+p*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=p+u*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*f,u=c*h,p=l*f,x=l*h;t[0]=d+x*a,t[4]=p*a-u,t[8]=o*l,t[1]=o*h,t[5]=o*f,t[9]=-a,t[2]=u*a-p,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*f,u=c*h,p=l*f,x=l*h;t[0]=d-x*a,t[4]=-o*h,t[8]=p+u*a,t[1]=u+p*a,t[5]=o*f,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*f,u=o*h,p=a*f,x=a*h;t[0]=c*f,t[4]=p*l-u,t[8]=d*l+x,t[1]=c*h,t[5]=x*l+d,t[9]=u*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,u=o*l,p=a*c,x=a*l;t[0]=c*f,t[4]=x-d*h,t[8]=p*h+u,t[1]=h,t[5]=o*f,t[9]=-a*f,t[2]=-l*f,t[6]=u*h+p,t[10]=d-x*h}else if(e.order==="XZY"){let d=o*c,u=o*l,p=a*c,x=a*l;t[0]=c*f,t[4]=-h,t[8]=l*f,t[1]=d*h+x,t[5]=o*f,t[9]=u*h-p,t[2]=p*h-u,t[6]=a*f,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vx,e,Mx)}lookAt(e,t,i){let s=this.elements;return kn.subVectors(e,t),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),Qi.crossVectors(i,kn),Qi.lengthSq()===0&&(Math.abs(i.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),Qi.crossVectors(i,kn)),Qi.normalize(),Sa.crossVectors(kn,Qi),s[0]=Qi.x,s[4]=Sa.x,s[8]=kn.x,s[1]=Qi.y,s[5]=Sa.y,s[9]=kn.y,s[2]=Qi.z,s[6]=Sa.z,s[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],f=i[1],h=i[5],d=i[9],u=i[13],p=i[2],x=i[6],m=i[10],g=i[14],y=i[3],_=i[7],M=i[11],E=i[15],T=s[0],I=s[4],v=s[8],b=s[12],S=s[1],R=s[5],L=s[9],X=s[13],q=s[2],N=s[6],B=s[10],Z=s[14],ce=s[3],ue=s[7],Ee=s[11],De=s[15];return r[0]=o*T+a*S+c*q+l*ce,r[4]=o*I+a*R+c*N+l*ue,r[8]=o*v+a*L+c*B+l*Ee,r[12]=o*b+a*X+c*Z+l*De,r[1]=f*T+h*S+d*q+u*ce,r[5]=f*I+h*R+d*N+u*ue,r[9]=f*v+h*L+d*B+u*Ee,r[13]=f*b+h*X+d*Z+u*De,r[2]=p*T+x*S+m*q+g*ce,r[6]=p*I+x*R+m*N+g*ue,r[10]=p*v+x*L+m*B+g*Ee,r[14]=p*b+x*X+m*Z+g*De,r[3]=y*T+_*S+M*q+E*ce,r[7]=y*I+_*R+M*N+E*ue,r[11]=y*v+_*L+M*B+E*Ee,r[15]=y*b+_*X+M*Z+E*De,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],f=e[2],h=e[6],d=e[10],u=e[14],p=e[3],x=e[7],m=e[11],g=e[15],y=c*u-l*d,_=a*u-l*h,M=a*d-c*h,E=o*u-l*f,T=o*d-c*f,I=o*h-a*f;return t*(x*y-m*_+g*M)-i*(p*y-m*E+g*T)+s*(p*_-x*E+g*I)-r*(p*M-x*T+m*I)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8],h=e[9],d=e[10],u=e[11],p=e[12],x=e[13],m=e[14],g=e[15],y=t*a-i*o,_=t*c-s*o,M=t*l-r*o,E=i*c-s*a,T=i*l-r*a,I=s*l-r*c,v=f*x-h*p,b=f*m-d*p,S=f*g-u*p,R=h*m-d*x,L=h*g-u*x,X=d*g-u*m,q=y*X-_*L+M*R+E*S-T*b+I*v;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/q;return e[0]=(a*X-c*L+l*R)*N,e[1]=(s*L-i*X-r*R)*N,e[2]=(x*I-m*T+g*E)*N,e[3]=(d*T-h*I-u*E)*N,e[4]=(c*S-o*X-l*b)*N,e[5]=(t*X-s*S+r*b)*N,e[6]=(m*M-p*I-g*_)*N,e[7]=(f*I-d*M+u*_)*N,e[8]=(o*L-a*S+l*v)*N,e[9]=(i*S-t*L-r*v)*N,e[10]=(p*T-x*M+g*y)*N,e[11]=(h*M-f*T-u*y)*N,e[12]=(a*b-o*R-c*v)*N,e[13]=(t*R-i*b+s*v)*N,e[14]=(x*_-p*E-m*y)*N,e[15]=(f*E-h*_+d*y)*N,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,f=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,f*a+i,f*c-s*o,0,l*c-s*a,f*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,f=o+o,h=a+a,d=r*l,u=r*f,p=r*h,x=o*f,m=o*h,g=a*h,y=c*l,_=c*f,M=c*h,E=i.x,T=i.y,I=i.z;return s[0]=(1-(x+g))*E,s[1]=(u+M)*E,s[2]=(p-_)*E,s[3]=0,s[4]=(u-M)*T,s[5]=(1-(d+g))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(p+_)*I,s[9]=(m-y)*I,s[10]=(1-(d+x))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinant();if(r===0)return i.set(1,1,1),t.identity(),this;let o=er.set(s[0],s[1],s[2]).length(),a=er.set(s[4],s[5],s[6]).length(),c=er.set(s[8],s[9],s[10]).length();r<0&&(o=-o),jn.copy(this);let l=1/o,f=1/a,h=1/c;return jn.elements[0]*=l,jn.elements[1]*=l,jn.elements[2]*=l,jn.elements[4]*=f,jn.elements[5]*=f,jn.elements[6]*=f,jn.elements[8]*=h,jn.elements[9]*=h,jn.elements[10]*=h,t.setFromRotationMatrix(jn),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,s,r,o,a=ti,c=!1){let l=this.elements,f=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),u=(i+s)/(i-s),p,x;if(c)p=r/(o-r),x=o*r/(o-r);else if(a===ti)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===yr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ti,c=!1){let l=this.elements,f=2/(t-e),h=2/(i-s),d=-(t+e)/(t-e),u=-(i+s)/(i-s),p,x;if(c)p=1/(o-r),x=o/(o-r);else if(a===ti)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===yr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},er=new U,jn=new vt,vx=new U(0,0,0),Mx=new U(1,1,1),Qi=new U,Sa=new U,kn=new U,xp=new vt,yp=new pi,Hi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],f=s[9],h=s[2],d=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,u),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,u),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return xp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yp.setFromEuler(this),this.setFromQuaternion(yp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hi.DEFAULT_ORDER="XYZ";var Mr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},bx=0,_p=new U,tr=new pi,Ii=new vt,Pa=new U,no=new U,wx=new U,Tx=new pi,vp=new U(1,0,0),Mp=new U(0,1,0),bp=new U(0,0,1),wp={type:"added"},Ex={type:"removed"},nr={type:"childadded",child:null},Uh={type:"childremoved",child:null},an=class n extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bx++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new U,t=new Hi,i=new pi,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new vt},normalMatrix:{value:new lt}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.multiply(tr),this}rotateOnWorldAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.premultiply(tr),this}rotateX(e){return this.rotateOnAxis(vp,e)}rotateY(e){return this.rotateOnAxis(Mp,e)}rotateZ(e){return this.rotateOnAxis(bp,e)}translateOnAxis(e,t){return _p.copy(e).applyQuaternion(this.quaternion),this.position.add(_p.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vp,e)}translateY(e){return this.translateOnAxis(Mp,e)}translateZ(e){return this.translateOnAxis(bp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Pa.copy(e):Pa.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(no,Pa,this.up):Ii.lookAt(Pa,no,this.up),this.quaternion.setFromRotationMatrix(Ii),s&&(Ii.extractRotation(s.matrixWorld),tr.setFromRotationMatrix(Ii),this.quaternion.premultiply(tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wp),nr.child=e,this.dispatchEvent(nr),nr.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ex),Uh.child=e,this.dispatchEvent(Uh),Uh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wp),nr.child=e,this.dispatchEvent(nr),nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,e,wx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,Tx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),u=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),u.length>0&&(i.animations=u),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let c=[];for(let l in a){let f=a[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};an.DEFAULT_UP=new U(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Je=class extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ax={type:"move"},br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),g=this._getHandJoint(l,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let f=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=f.position.distanceTo(h.position),u=.02,p=.005;l.inputState.pinching&&d>u+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=u-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ax)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Je;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Pm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},Ia={h:0,s:0,l:0};function Fh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var rt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=_t.workingColorSpace){return this.r=e,this.g=t,this.b=i,_t.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=_t.workingColorSpace){if(e=gx(e,1),t=gt(t,0,1),i=gt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Fh(o,r,e+1/3),this.g=Fh(o,r,e),this.b=Fh(o,r,e-1/3)}return _t.colorSpaceToWorking(this,s),this}setStyle(e,t=on){function i(r){r!==void 0&&parseFloat(r)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:it("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){let i=Pm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return _t.workingToColorSpace(bn.copy(this),e),Math.round(gt(bn.r*255,0,255))*65536+Math.round(gt(bn.g*255,0,255))*256+Math.round(gt(bn.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.workingToColorSpace(bn.copy(this),t);let i=bn.r,s=bn.g,r=bn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,f=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=f<=.5?h/(o+a):h/(2-o-a),o){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,t=_t.workingColorSpace){return _t.workingToColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=on){_t.workingToColorSpace(bn.copy(this),e);let t=bn.r,i=bn.g,s=bn.b;return e!==on?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(es),this.setHSL(es.h+e,es.s+t,es.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(es),e.getHSL(Ia);let i=Ih(es.h,Ia.h,t),s=Ih(es.s,Ia.s,t),r=Ih(es.l,Ia.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bn=new rt;rt.NAMES=Pm;var Mo=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new rt(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ps=class extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Qn=new U,Di=new U,Oh=new U,Li=new U,ir=new U,sr=new U,Tp=new U,Bh=new U,Hh=new U,zh=new U,Vh=new $t,Gh=new $t,Wh=new $t,Ui=class n{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Qn.subVectors(e,t),s.cross(Qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Qn.subVectors(s,t),Di.subVectors(i,t),Oh.subVectors(e,t);let o=Qn.dot(Qn),a=Qn.dot(Di),c=Qn.dot(Oh),l=Di.dot(Di),f=Di.dot(Oh),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,u=(l*c-a*f)*d,p=(o*f-a*c)*d;return r.set(1-u-p,p,u)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Li)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Li.x),c.addScaledVector(o,Li.y),c.addScaledVector(a,Li.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return Vh.setScalar(0),Gh.setScalar(0),Wh.setScalar(0),Vh.fromBufferAttribute(e,t),Gh.fromBufferAttribute(e,i),Wh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Vh,r.x),o.addScaledVector(Gh,r.y),o.addScaledVector(Wh,r.z),o}static isFrontFacing(e,t,i,s){return Qn.subVectors(i,t),Di.subVectors(e,t),Qn.cross(Di).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),Qn.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;ir.subVectors(s,i),sr.subVectors(r,i),Bh.subVectors(e,i);let c=ir.dot(Bh),l=sr.dot(Bh);if(c<=0&&l<=0)return t.copy(i);Hh.subVectors(e,s);let f=ir.dot(Hh),h=sr.dot(Hh);if(f>=0&&h<=f)return t.copy(s);let d=c*h-f*l;if(d<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(i).addScaledVector(ir,o);zh.subVectors(e,r);let u=ir.dot(zh),p=sr.dot(zh);if(p>=0&&u<=p)return t.copy(r);let x=u*l-c*p;if(x<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(i).addScaledVector(sr,a);let m=f*p-u*h;if(m<=0&&h-f>=0&&u-p>=0)return Tp.subVectors(r,s),a=(h-f)/(h-f+(u-p)),t.copy(s).addScaledVector(Tp,a);let g=1/(m+x+d);return o=x*g,a=d*g,t.copy(i).addScaledVector(ir,o).addScaledVector(sr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},mi=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ei):ei.fromBufferAttribute(r,o),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Da.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Da.copy(i.boundingBox)),Da.applyMatrix4(e.matrixWorld),this.union(Da)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(io),La.subVectors(this.max,io),rr.subVectors(e.a,io),or.subVectors(e.b,io),ar.subVectors(e.c,io),ts.subVectors(or,rr),ns.subVectors(ar,or),Ts.subVectors(rr,ar);let t=[0,-ts.z,ts.y,0,-ns.z,ns.y,0,-Ts.z,Ts.y,ts.z,0,-ts.x,ns.z,0,-ns.x,Ts.z,0,-Ts.x,-ts.y,ts.x,0,-ns.y,ns.x,0,-Ts.y,Ts.x,0];return!Xh(t,rr,or,ar,La)||(t=[1,0,0,0,1,0,0,0,1],!Xh(t,rr,or,ar,La))?!1:(Na.crossVectors(ts,ns),t=[Na.x,Na.y,Na.z],Xh(t,rr,or,ar,La))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ni=[new U,new U,new U,new U,new U,new U,new U,new U],ei=new U,Da=new mi,rr=new U,or=new U,ar=new U,ts=new U,ns=new U,Ts=new U,io=new U,La=new U,Na=new U,Es=new U;function Xh(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Es.fromArray(n,r);let a=s.x*Math.abs(Es.x)+s.y*Math.abs(Es.y)+s.z*Math.abs(Es.z),c=e.dot(Es),l=t.dot(Es),f=i.dot(Es);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>a)return!1}return!0}var rn=new U,ka=new ke,Rx=0,en=class extends ui{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ml,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ka.fromBufferAttribute(this,t),ka.applyMatrix3(e),this.setXY(t,ka.x,ka.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ci(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ml&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var bo=class extends en{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var wo=class extends en{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var St=class extends en{constructor(e,t,i){super(new Float32Array(e),t,i)}},Cx=new mi,so=new U,qh=new U,zi=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Cx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;so.subVectors(e,this.center);let t=so.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(so,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(so.copy(e.center).add(qh)),this.expandByPoint(so.copy(e.center).sub(qh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Sx=0,Wn=new vt,Yh=new an,lr=new U,Un=new mi,ro=new mi,un=new U,Yt=class n extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(px(e)?wo:bo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new lt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,i){return Wn.makeTranslation(e,t,i),this.applyMatrix4(Wn),this}scale(e,t,i){return Wn.makeScale(e,t,i),this.applyMatrix4(Wn),this}lookAt(e){return Yh.lookAt(e),Yh.updateMatrix(),this.applyMatrix4(Yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new St(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Un.setFromBufferAttribute(r),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let i=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ro.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(Un.min,ro.min),Un.expandByPoint(un),un.addVectors(Un.max,ro.max),Un.expandByPoint(un)):(Un.expandByPoint(ro.min),Un.expandByPoint(ro.max))}Un.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)un.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(un));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,f=a.count;l<f;l++)un.fromBufferAttribute(a,l),c&&(lr.fromBufferAttribute(e,l),un.add(lr)),s=Math.max(s,i.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let v=0;v<i.count;v++)a[v]=new U,c[v]=new U;let l=new U,f=new U,h=new U,d=new ke,u=new ke,p=new ke,x=new U,m=new U;function g(v,b,S){l.fromBufferAttribute(i,v),f.fromBufferAttribute(i,b),h.fromBufferAttribute(i,S),d.fromBufferAttribute(r,v),u.fromBufferAttribute(r,b),p.fromBufferAttribute(r,S),f.sub(l),h.sub(l),u.sub(d),p.sub(d);let R=1/(u.x*p.y-p.x*u.y);isFinite(R)&&(x.copy(f).multiplyScalar(p.y).addScaledVector(h,-u.y).multiplyScalar(R),m.copy(h).multiplyScalar(u.x).addScaledVector(f,-p.x).multiplyScalar(R),a[v].add(x),a[b].add(x),a[S].add(x),c[v].add(m),c[b].add(m),c[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let v=0,b=y.length;v<b;++v){let S=y[v],R=S.start,L=S.count;for(let X=R,q=R+L;X<q;X+=3)g(e.getX(X+0),e.getX(X+1),e.getX(X+2))}let _=new U,M=new U,E=new U,T=new U;function I(v){E.fromBufferAttribute(s,v),T.copy(E);let b=a[v];_.copy(b),_.sub(E.multiplyScalar(E.dot(b))).normalize(),M.crossVectors(T,b);let R=M.dot(c[v])<0?-1:1;o.setXYZW(v,_.x,_.y,_.z,R)}for(let v=0,b=y.length;v<b;++v){let S=y[v],R=S.start,L=S.count;for(let X=R,q=R+L;X<q;X+=3)I(e.getX(X+0)),I(e.getX(X+1)),I(e.getX(X+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,u=i.count;d<u;d++)i.setXYZ(d,0,0,0);let s=new U,r=new U,o=new U,a=new U,c=new U,l=new U,f=new U,h=new U;if(e)for(let d=0,u=e.count;d<u;d+=3){let p=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),f.subVectors(o,r),h.subVectors(s,r),f.cross(h),a.fromBufferAttribute(i,p),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(f),c.add(f),l.add(f),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,u=t.count;d<u;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),f.subVectors(o,r),h.subVectors(s,r),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(a,c){let l=a.array,f=a.itemSize,h=a.normalized,d=new l.constructor(c.length*f),u=0,p=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?u=c[x]*a.data.stride+a.offset:u=c[x]*f;for(let g=0;g<f;g++)d[p++]=l[u++]}return new en(d,f,h)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let f=0,h=l.length;f<h;f++){let d=l[f],u=e(d,i);c.push(u)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],f=[];for(let h=0,d=l.length;h<d;h++){let u=l[h];f.push(u.toJSON(e.data))}f.length>0&&(s[c]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let f=s[l];this.setAttribute(l,f.clone(t))}let r=e.morphAttributes;for(let l in r){let f=[],h=r[l];for(let d=0,u=h.length;d<u;d++)f.push(h[d].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,f=o.length;l<f;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ml=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ml,this.updateRanges=[],this.version=0,this.uuid=Fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},An=new U,To=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ci(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Lt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ci(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array),r=Lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){_o("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new en(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){_o("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Px=0,gi=class extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Px++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=rs,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sl,this.blendDst=rl,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){it(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){it(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(i.blending=this.blending),this.side!==Bi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sl&&(i.blendSrc=this.blendSrc),this.blendDst!==rl&&(i.blendDst=this.blendDst),this.blendEquation!==os&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ss&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},xi=class extends gi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},cr,oo=new U,hr=new U,fr=new U,dr=new ke,ao=new ke,Im=new vt,Ua=new U,lo=new U,Fa=new U,Ep=new ke,Zh=new ke,Ap=new ke,Vi=class extends an{constructor(e=new xi){if(super(),this.isSprite=!0,this.type="Sprite",cr===void 0){cr=new Yt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ml(t,5);cr.setIndex([0,1,2,0,2,3]),cr.setAttribute("position",new To(i,3,0,!1)),cr.setAttribute("uv",new To(i,2,3,!1))}this.geometry=cr,this.material=e,this.center=new ke(.5,.5),this.count=1}raycast(e,t){e.camera===null&&nt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),hr.setFromMatrixScale(this.matrixWorld),Im.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),fr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&hr.multiplyScalar(-fr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Oa(Ua.set(-.5,-.5,0),fr,o,hr,s,r),Oa(lo.set(.5,-.5,0),fr,o,hr,s,r),Oa(Fa.set(.5,.5,0),fr,o,hr,s,r),Ep.set(0,0),Zh.set(1,0),Ap.set(1,1);let a=e.ray.intersectTriangle(Ua,lo,Fa,!1,oo);if(a===null&&(Oa(lo.set(-.5,.5,0),fr,o,hr,s,r),Zh.set(0,1),a=e.ray.intersectTriangle(Ua,Fa,lo,!1,oo),a===null))return;let c=e.ray.origin.distanceTo(oo);c<e.near||c>e.far||t.push({distance:c,point:oo.clone(),uv:Ui.getInterpolation(oo,Ua,lo,Fa,Ep,Zh,Ap,new ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Oa(n,e,t,i,s,r){dr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(ao.x=r*dr.x-s*dr.y,ao.y=s*dr.x+r*dr.y):ao.copy(dr),n.copy(e),n.x+=ao.x,n.y+=ao.y,n.applyMatrix4(Im)}var ki=new U,Kh=new U,Ba=new U,is=new U,$h=new U,Ha=new U,Jh=new U,wr=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,t),ki.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Kh.copy(e).add(t).multiplyScalar(.5),Ba.copy(t).sub(e).normalize(),is.copy(this.origin).sub(Kh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ba),a=is.dot(this.direction),c=-is.dot(Ba),l=is.lengthSq(),f=Math.abs(1-o*o),h,d,u,p;if(f>0)if(h=o*c-a,d=o*a-c,p=r*f,h>=0)if(d>=-p)if(d<=p){let x=1/f;h*=x,d*=x,u=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),u=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),u=-h*h+d*(d+2*c)+l;else d<=-p?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),u=-h*h+d*(d+2*c)+l):d<=p?(h=0,d=Math.min(Math.max(-r,-c),r),u=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),u=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),u=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Kh).addScaledVector(Ba,d),u}intersectSphere(e,t){ki.subVectors(e.center,this.origin);let i=ki.dot(this.direction),s=ki.dot(ki)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c,l=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),f>=0?(r=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(r=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,t,i,s,r){$h.subVectors(t,e),Ha.subVectors(i,e),Jh.crossVectors($h,Ha);let o=this.direction.dot(Jh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;is.subVectors(this.origin,e);let c=a*this.direction.dot(Ha.crossVectors(is,Ha));if(c<0)return null;let l=a*this.direction.dot($h.cross(is));if(l<0||c+l>o)return null;let f=-a*is.dot(Jh);return f<0?null:this.at(f/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xt=class extends gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Rp=new vt,As=new wr,za=new zi,Cp=new U,Va=new U,Ga=new U,Wa=new U,jh=new U,Xa=new U,Sp=new U,qa=new U,_e=class extends an{constructor(e=new Yt,t=new Xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Xa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let f=a[c],h=r[c];f!==0&&(jh.fromBufferAttribute(h,e),o?Xa.addScaledVector(jh,f):Xa.addScaledVector(jh.sub(t),f))}t.add(Xa)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),za.copy(i.boundingSphere),za.applyMatrix4(r),As.copy(e.ray).recast(e.near),!(za.containsPoint(As.origin)===!1&&(As.intersectSphere(za,Cp)===null||As.origin.distanceToSquared(Cp)>(e.far-e.near)**2))&&(Rp.copy(r).invert(),As.copy(e.ray).applyMatrix4(Rp),!(i.boundingBox!==null&&As.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,As)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,f=r.attributes.uv1,h=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],y=Math.max(m.start,u.start),_=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let M=y,E=_;M<E;M+=3){let T=a.getX(M),I=a.getX(M+1),v=a.getX(M+2);s=Ya(this,g,e,i,l,f,h,T,I,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){let y=a.getX(m),_=a.getX(m+1),M=a.getX(m+2);s=Ya(this,o,e,i,l,f,h,y,_,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],y=Math.max(m.start,u.start),_=Math.min(c.count,Math.min(m.start+m.count,u.start+u.count));for(let M=y,E=_;M<E;M+=3){let T=M,I=M+1,v=M+2;s=Ya(this,g,e,i,l,f,h,T,I,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,u.start),x=Math.min(c.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){let y=m,_=m+1,M=m+2;s=Ya(this,o,e,i,l,f,h,y,_,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Ix(n,e,t,i,s,r,o,a){let c;if(e.side===yn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===Bi,a),c===null)return null;qa.copy(a),qa.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(qa);return l<t.near||l>t.far?null:{distance:l,point:qa.clone(),object:n}}function Ya(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,Va),n.getVertexPosition(c,Ga),n.getVertexPosition(l,Wa);let f=Ix(n,e,t,i,Va,Ga,Wa,Sp);if(f){let h=new U;Ui.getBarycoord(Sp,Va,Ga,Wa,h),s&&(f.uv=Ui.getInterpolatedAttribute(s,a,c,l,h,new ke)),r&&(f.uv1=Ui.getInterpolatedAttribute(r,a,c,l,h,new ke)),o&&(f.normal=Ui.getInterpolatedAttribute(o,a,c,l,h,new U),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new U,materialIndex:0};Ui.getNormal(Va,Ga,Wa,d.normal),f.face=d,f.barycoord=h}return f}var Eo=class extends Rn{constructor(e=null,t=1,i=1,s,r,o,a,c,l=mn,f=mn,h,d){super(null,o,a,c,l,f,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ao=class extends en{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ur=new vt,Pp=new vt,Za=[],Ip=new mi,Dx=new vt,co=new _e,ho=new zi,Pt=class extends _e{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ao(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Dx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ur),Ip.copy(e.boundingBox).applyMatrix4(ur),this.boundingBox.union(Ip)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ur),ho.copy(e.boundingSphere).applyMatrix4(ur),this.boundingSphere.union(ho)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(co.geometry=this.geometry,co.material=this.material,co.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ho.copy(this.boundingSphere),ho.applyMatrix4(i),e.ray.intersectsSphere(ho)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ur),Pp.multiplyMatrices(i,ur),co.matrixWorld=Pp,co.raycast(e,Za);for(let o=0,a=Za.length;o<a;o++){let c=Za[o];c.instanceId=r,c.object=this,t.push(c)}Za.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ao(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Eo(new Float32Array(s*this.count),s,this.count,jl,Zn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Qh=new U,Lx=new U,Nx=new lt,Xn=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Qh.subVectors(i,t).cross(Lx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Qh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Nx.getNormalMatrix(e),s=this.coplanarPoint(Qh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Rs=new zi,kx=new ke(.5,.5),Ka=new U,Tr=class{constructor(e=new Xn,t=new Xn,i=new Xn,s=new Xn,r=new Xn,o=new Xn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ti,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],f=r[4],h=r[5],d=r[6],u=r[7],p=r[8],x=r[9],m=r[10],g=r[11],y=r[12],_=r[13],M=r[14],E=r[15];if(s[0].setComponents(l-o,u-f,g-p,E-y).normalize(),s[1].setComponents(l+o,u+f,g+p,E+y).normalize(),s[2].setComponents(l+a,u+h,g+x,E+_).normalize(),s[3].setComponents(l-a,u-h,g-x,E-_).normalize(),i)s[4].setComponents(c,d,m,M).normalize(),s[5].setComponents(l-c,u-d,g-m,E-M).normalize();else if(s[4].setComponents(l-c,u-d,g-m,E-M).normalize(),t===ti)s[5].setComponents(l+c,u+d,g+m,E+M).normalize();else if(t===yr)s[5].setComponents(c,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(e){Rs.center.set(0,0,0);let t=kx.distanceTo(e.center);return Rs.radius=.7071067811865476+t,Rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Ka.x=s.normal.x>0?e.max.x:e.min.x,Ka.y=s.normal.y>0?e.max.y:e.min.y,Ka.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ka)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var yi=class extends gi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Dp=new vt,hf=new wr,$a=new zi,Ja=new U,Gi=class extends an{constructor(e=new Yt,t=new yi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$a.copy(i.boundingSphere),$a.applyMatrix4(s),$a.radius+=r,e.ray.intersectsSphere($a)===!1)return;Dp.copy(s).invert(),hf.copy(e.ray).applyMatrix4(Dp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,h=i.attributes.position;if(l!==null){let d=Math.max(0,o.start),u=Math.min(l.count,o.start+o.count);for(let p=d,x=u;p<x;p++){let m=l.getX(p);Ja.fromBufferAttribute(h,m),Lp(Ja,m,c,s,e,t,this)}}else{let d=Math.max(0,o.start),u=Math.min(h.count,o.start+o.count);for(let p=d,x=u;p<x;p++)Ja.fromBufferAttribute(h,p),Lp(Ja,p,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Lp(n,e,t,i,s,r,o){let a=hf.distanceSqToPoint(n);if(a<t){let c=new U;hf.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ro=class extends Rn{constructor(e=[],t=fs,i,s,r,o,a,c,l,f){super(e,t,i,s,r,o,a,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},qn=class extends Rn{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Wi=class extends Rn{constructor(e,t,i=ii,s,r,o,a=mn,c=mn,l,f=di,h=1){if(f!==di&&f!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,o,a,c,f,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},bl=class extends Wi{constructor(e,t=ii,i=fs,s,r,o=mn,a=mn,c,l=di){let f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,t,i,s,r,o,a,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Co=class extends Rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},as=class n extends Yt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],f=[],h=[],d=0,u=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new St(l,3)),this.setAttribute("normal",new St(f,3)),this.setAttribute("uv",new St(h,2));function p(x,m,g,y,_,M,E,T,I,v,b){let S=M/I,R=E/v,L=M/2,X=E/2,q=T/2,N=I+1,B=v+1,Z=0,ce=0,ue=new U;for(let Ee=0;Ee<B;Ee++){let De=Ee*R-X;for(let ze=0;ze<N;ze++){let Qe=ze*S-L;ue[x]=Qe*y,ue[m]=De*_,ue[g]=q,l.push(ue.x,ue.y,ue.z),ue[x]=0,ue[m]=0,ue[g]=T>0?1:-1,f.push(ue.x,ue.y,ue.z),h.push(ze/I),h.push(1-Ee/v),Z+=1}}for(let Ee=0;Ee<v;Ee++)for(let De=0;De<I;De++){let ze=d+De+N*Ee,Qe=d+De+N*(Ee+1),se=d+(De+1)+N*(Ee+1),re=d+(De+1)+N*Ee;c.push(ze,Qe,re),c.push(Qe,se,re),ce+=6}a.addGroup(u,ce,b),u+=ce,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var _i=class n extends Yt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new U,f=new ke;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let u=i+h/t*s;l.x=e*Math.cos(u),l.y=e*Math.sin(u),o.push(l.x,l.y,l.z),a.push(0,0,1),f.x=(o[d]/e+1)/2,f.y=(o[d+1]/e+1)/2,c.push(f.x,f.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new St(o,3)),this.setAttribute("normal",new St(a,3)),this.setAttribute("uv",new St(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Is=class n extends Yt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let f=[],h=[],d=[],u=[],p=0,x=[],m=i/2,g=0;y(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(f),this.setAttribute("position",new St(h,3)),this.setAttribute("normal",new St(d,3)),this.setAttribute("uv",new St(u,2));function y(){let M=new U,E=new U,T=0,I=(t-e)/i;for(let v=0;v<=r;v++){let b=[],S=v/r,R=S*(t-e)+e;for(let L=0;L<=s;L++){let X=L/s,q=X*c+a,N=Math.sin(q),B=Math.cos(q);E.x=R*N,E.y=-S*i+m,E.z=R*B,h.push(E.x,E.y,E.z),M.set(N,I,B).normalize(),d.push(M.x,M.y,M.z),u.push(X,1-S),b.push(p++)}x.push(b)}for(let v=0;v<s;v++)for(let b=0;b<r;b++){let S=x[b][v],R=x[b+1][v],L=x[b+1][v+1],X=x[b][v+1];(e>0||b!==0)&&(f.push(S,R,X),T+=3),(t>0||b!==r-1)&&(f.push(R,L,X),T+=3)}l.addGroup(g,T,0),g+=T}function _(M){let E=p,T=new ke,I=new U,v=0,b=M===!0?e:t,S=M===!0?1:-1;for(let L=1;L<=s;L++)h.push(0,m*S,0),d.push(0,S,0),u.push(.5,.5),p++;let R=p;for(let L=0;L<=s;L++){let q=L/s*c+a,N=Math.cos(q),B=Math.sin(q);I.x=b*B,I.y=m*S,I.z=b*N,h.push(I.x,I.y,I.z),d.push(0,S,0),T.x=N*.5+.5,T.y=B*.5*S+.5,u.push(T.x,T.y),p++}for(let L=0;L<s;L++){let X=E+L,q=R+L;M===!0?f.push(q,q+1,X):f.push(q+1,q,X),v+=3}l.addGroup(g,v,M===!0?1:2),g+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},So=class n extends Is{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},wl=class n extends Yt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),l(i),f(),this.setAttribute("position",new St(r,3)),this.setAttribute("normal",new St(r.slice(),3)),this.setAttribute("uv",new St(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let _=new U,M=new U,E=new U;for(let T=0;T<t.length;T+=3)u(t[T+0],_),u(t[T+1],M),u(t[T+2],E),c(_,M,E,y)}function c(y,_,M,E){let T=E+1,I=[];for(let v=0;v<=T;v++){I[v]=[];let b=y.clone().lerp(M,v/T),S=_.clone().lerp(M,v/T),R=T-v;for(let L=0;L<=R;L++)L===0&&v===T?I[v][L]=b:I[v][L]=b.clone().lerp(S,L/R)}for(let v=0;v<T;v++)for(let b=0;b<2*(T-v)-1;b++){let S=Math.floor(b/2);b%2===0?(d(I[v][S+1]),d(I[v+1][S]),d(I[v][S])):(d(I[v][S+1]),d(I[v+1][S+1]),d(I[v+1][S]))}}function l(y){let _=new U;for(let M=0;M<r.length;M+=3)_.x=r[M+0],_.y=r[M+1],_.z=r[M+2],_.normalize().multiplyScalar(y),r[M+0]=_.x,r[M+1]=_.y,r[M+2]=_.z}function f(){let y=new U;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];let M=m(y)/2/Math.PI+.5,E=g(y)/Math.PI+.5;o.push(M,1-E)}p(),h()}function h(){for(let y=0;y<o.length;y+=6){let _=o[y+0],M=o[y+2],E=o[y+4],T=Math.max(_,M,E),I=Math.min(_,M,E);T>.9&&I<.1&&(_<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),E<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function u(y,_){let M=y*3;_.x=e[M+0],_.y=e[M+1],_.z=e[M+2]}function p(){let y=new U,_=new U,M=new U,E=new U,T=new ke,I=new ke,v=new ke;for(let b=0,S=0;b<r.length;b+=9,S+=6){y.set(r[b+0],r[b+1],r[b+2]),_.set(r[b+3],r[b+4],r[b+5]),M.set(r[b+6],r[b+7],r[b+8]),T.set(o[S+0],o[S+1]),I.set(o[S+2],o[S+3]),v.set(o[S+4],o[S+5]),E.copy(y).add(_).add(M).divideScalar(3);let R=m(E);x(T,S+0,y,R),x(I,S+2,_,R),x(v,S+4,M,R)}}function x(y,_,M,E){E<0&&y.x===1&&(o[_]=y.x-1),M.x===0&&M.z===0&&(o[_]=E/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var On=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){it("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let f=i[s],d=i[s+1]-f,u=(o-f)/d;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ke:new U);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new U,s=[],r=[],o=[],a=new U,c=new vt;for(let u=0;u<=e;u++){let p=u/e;s[u]=this.getTangentAt(p,new U)}r[0]=new U,o[0]=new U;let l=Number.MAX_VALUE,f=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);f<=l&&(l=f,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(gt(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(c.makeRotationAxis(a,p))}o[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(gt(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(u=-u);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],u*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Er=class extends On{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ke){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let f=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,u=l-this.aY;c=d*f-u*h+this.aX,l=d*h+u*f+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Tl=class extends Er{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ff(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,f,h){let d=(o-r)/l-(a-r)/(l+f)+(a-o)/f,u=(a-o)/f-(c-o)/(f+h)+(c-a)/h;d*=f,u*=f,s(o,a,d,u)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Np=new U,kp=new U,ef=new Ff,tf=new Ff,nf=new Ff,El=class extends On{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new U){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,f;this.closed||a>0?l=s[(a-1)%r]:(kp.subVectors(s[0],s[1]).add(s[0]),l=kp);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?f=s[(a+2)%r]:(Np.subVectors(s[r-1],s[r-2]).add(s[r-1]),f=Np),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(h),u),x=Math.pow(h.distanceToSquared(d),u),m=Math.pow(d.distanceToSquared(f),u);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),ef.initNonuniformCatmullRom(l.x,h.x,d.x,f.x,p,x,m),tf.initNonuniformCatmullRom(l.y,h.y,d.y,f.y,p,x,m),nf.initNonuniformCatmullRom(l.z,h.z,d.z,f.z,p,x,m)}else this.curveType==="catmullrom"&&(ef.initCatmullRom(l.x,h.x,d.x,f.x,this.tension),tf.initCatmullRom(l.y,h.y,d.y,f.y,this.tension),nf.initCatmullRom(l.z,h.z,d.z,f.z,this.tension));return i.set(ef.calc(c),tf.calc(c),nf.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Up(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function Ux(n,e){let t=1-n;return t*t*e}function Fx(n,e){return 2*(1-n)*n*e}function Ox(n,e){return n*n*e}function uo(n,e,t,i){return Ux(n,e)+Fx(n,t)+Ox(n,i)}function Bx(n,e){let t=1-n;return t*t*t*e}function Hx(n,e){let t=1-n;return 3*t*t*n*e}function zx(n,e){return 3*(1-n)*n*n*e}function Vx(n,e){return n*n*n*e}function po(n,e,t,i,s){return Bx(n,e)+Hx(n,t)+zx(n,i)+Vx(n,s)}var Po=class extends On{constructor(e=new ke,t=new ke,i=new ke,s=new ke){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ke){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(po(e,s.x,r.x,o.x,a.x),po(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Al=class extends On{constructor(e=new U,t=new U,i=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new U){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(po(e,s.x,r.x,o.x,a.x),po(e,s.y,r.y,o.y,a.y),po(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Io=class extends On{constructor(e=new ke,t=new ke){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ke){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ke){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Rl=class extends On{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Do=class extends On{constructor(e=new ke,t=new ke,i=new ke){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ke){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(uo(e,s.x,r.x,o.x),uo(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Cl=class extends On{constructor(e=new U,t=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new U){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(uo(e,s.x,r.x,o.x),uo(e,s.y,r.y,o.y),uo(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Lo=class extends On{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ke){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],f=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(Up(a,c.x,l.x,f.x,h.x),Up(a,c.y,l.y,f.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ke().fromArray(s))}return this}},Fp=Object.freeze({__proto__:null,ArcCurve:Tl,CatmullRomCurve3:El,CubicBezierCurve:Po,CubicBezierCurve3:Al,EllipseCurve:Er,LineCurve:Io,LineCurve3:Rl,QuadraticBezierCurve:Do,QuadraticBezierCurve3:Cl,SplineCurve:Lo}),Sl=class extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fp[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let f=c[l];i&&i.equals(f)||(t.push(f),i=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Fp[s.type]().fromJSON(s))}return this}},No=class extends Sl{constructor(e){super(),this.type="Path",this.currentPoint=new ke,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Io(this.currentPoint.clone(),new ke(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Do(this.currentPoint.clone(),new ke(e,t),new ke(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Po(this.currentPoint.clone(),new ke(e,t),new ke(i,s),new ke(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Lo(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){let l=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+l,t+f,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){let l=new Er(e,t,i,s,r,o,a,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let f=l.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ar=class extends No{constructor(e){super(e),this.uuid=Fi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new No().fromJSON(s))}return this}};function Gx(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Dm(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=Zx(n,e,r,t)),n.length>80*t){a=n[0],c=n[1];let f=a,h=c;for(let d=t;d<s;d+=t){let u=n[d],p=n[d+1];u<a&&(a=u),p<c&&(c=p),u>f&&(f=u),p>h&&(h=p)}l=Math.max(f-a,h-c),l=l!==0?32767/l:0}return ko(r,o,t,a,c,l,0),o}function Dm(n,e,t,i,s){let r;if(s===ry(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Op(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Op(o/i|0,n[o],n[o+1],r);return r&&Rr(r,r.next)&&(Fo(r),r=r.next),r}function Ds(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Rr(t,t.next)||Kt(t.prev,t,t.next)===0)){if(Fo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ko(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Qx(n,i,s,r);let a=n;for(;n.prev!==n.next;){let c=n.prev,l=n.next;if(r?Xx(n,i,s,r):Wx(n)){e.push(c.i,n.i,l.i),Fo(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=qx(Ds(n),e),ko(n,e,t,i,s,r,2)):o===2&&Yx(n,e,t,i,s,r):ko(Ds(n),e,t,i,s,r,1);break}}}function Wx(n){let e=n.prev,t=n,i=n.next;if(Kt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,c=t.y,l=i.y,f=Math.min(s,r,o),h=Math.min(a,c,l),d=Math.max(s,r,o),u=Math.max(a,c,l),p=i.next;for(;p!==e;){if(p.x>=f&&p.x<=d&&p.y>=h&&p.y<=u&&fo(s,a,r,c,o,l,p.x,p.y)&&Kt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Xx(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Kt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,f=s.y,h=r.y,d=o.y,u=Math.min(a,c,l),p=Math.min(f,h,d),x=Math.max(a,c,l),m=Math.max(f,h,d),g=ff(u,p,e,t,i),y=ff(x,m,e,t,i),_=n.prevZ,M=n.nextZ;for(;_&&_.z>=g&&M&&M.z<=y;){if(_.x>=u&&_.x<=x&&_.y>=p&&_.y<=m&&_!==s&&_!==o&&fo(a,f,c,h,l,d,_.x,_.y)&&Kt(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=u&&M.x<=x&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&fo(a,f,c,h,l,d,M.x,M.y)&&Kt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=g;){if(_.x>=u&&_.x<=x&&_.y>=p&&_.y<=m&&_!==s&&_!==o&&fo(a,f,c,h,l,d,_.x,_.y)&&Kt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=y;){if(M.x>=u&&M.x<=x&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&fo(a,f,c,h,l,d,M.x,M.y)&&Kt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function qx(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Rr(i,s)&&Nm(i,t,t.next,s)&&Uo(i,s)&&Uo(s,i)&&(e.push(i.i,t.i,s.i),Fo(t),Fo(t.next),t=n=s),t=t.next}while(t!==n);return Ds(t)}function Yx(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ny(o,a)){let c=km(o,a);o=Ds(o,o.next),c=Ds(c,c.next),ko(o,e,t,i,s,r,0),ko(c,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Zx(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,c=r<o-1?e[r+1]*i:n.length,l=Dm(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(ty(l))}s.sort(Kx);for(let r=0;r<s.length;r++)t=$x(s[r],t);return t}function Kx(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function $x(n,e){let t=Jx(n,e);if(!t)return e;let i=km(t,n);return Ds(i,i.next),Ds(t,t.next)}function Jx(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(Rr(n,t))return t;do{if(Rr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,f=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&Lm(s<l?i:r,s,c,l,s<l?r:i,s,t.x,t.y)){let h=Math.abs(s-t.y)/(i-t.x);Uo(t,n)&&(h<f||h===f&&(t.x>o.x||t.x===o.x&&jx(o,t)))&&(o=t,f=h)}t=t.next}while(t!==a);return o}function jx(n,e){return Kt(n.prev,n,e.prev)<0&&Kt(e.next,n,n.next)<0}function Qx(n,e,t,i){let s=n;do s.z===0&&(s.z=ff(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,ey(s)}function ey(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function ff(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function ty(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Lm(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function fo(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Lm(n,e,t,i,s,r,o,a)}function ny(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!iy(n,e)&&(Uo(n,e)&&Uo(e,n)&&sy(n,e)&&(Kt(n.prev,n,e.prev)||Kt(n,e.prev,e))||Rr(n,e)&&Kt(n.prev,n,n.next)>0&&Kt(e.prev,e,e.next)>0)}function Kt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Rr(n,e){return n.x===e.x&&n.y===e.y}function Nm(n,e,t,i){let s=Qa(Kt(n,e,t)),r=Qa(Kt(n,e,i)),o=Qa(Kt(t,i,n)),a=Qa(Kt(t,i,e));return!!(s!==r&&o!==a||s===0&&ja(n,t,e)||r===0&&ja(n,i,e)||o===0&&ja(t,n,i)||a===0&&ja(t,e,i))}function ja(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Qa(n){return n>0?1:n<0?-1:0}function iy(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Nm(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Uo(n,e){return Kt(n.prev,n,n.next)<0?Kt(n,e,n.next)>=0&&Kt(n,n.prev,e)>=0:Kt(n,e,n.prev)<0||Kt(n,n.next,e)<0}function sy(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function km(n,e){let t=df(n.i,n.x,n.y),i=df(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Op(n,e,t,i){let s=df(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Fo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function df(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ry(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var uf=class{static triangulate(e,t,i=2){return Gx(e,t,i)}},xr=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Bp(e),Hp(i,e);let o=e.length;t.forEach(Bp);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Hp(i,t[c]);let a=uf.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Bp(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Hp(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Ls=class n extends wl{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Yn=class n extends Yt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,f=c+1,h=e/a,d=t/c,u=[],p=[],x=[],m=[];for(let g=0;g<f;g++){let y=g*d-o;for(let _=0;_<l;_++){let M=_*h-r;p.push(M,-y,0),x.push(0,0,1),m.push(_/a),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let y=0;y<a;y++){let _=y+l*g,M=y+l*(g+1),E=y+1+l*(g+1),T=y+1+l*g;u.push(_,M,T),u.push(M,E,T)}this.setIndex(u),this.setAttribute("position",new St(p,3)),this.setAttribute("normal",new St(x,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Ns=class n extends Yt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],f=[],h=e,d=(t-e)/s,u=new U,p=new ke;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){let g=r+m/i*o;u.x=h*Math.cos(g),u.y=h*Math.sin(g),c.push(u.x,u.y,u.z),l.push(0,0,1),p.x=(u.x/t+1)/2,p.y=(u.y/t+1)/2,f.push(p.x,p.y)}h+=d}for(let x=0;x<s;x++){let m=x*(i+1);for(let g=0;g<i;g++){let y=g+m,_=y,M=y+i+1,E=y+i+2,T=y+1;a.push(_,M,T),a.push(M,E,T)}}this.setIndex(a),this.setAttribute("position",new St(c,3)),this.setAttribute("normal",new St(l,3)),this.setAttribute("uv",new St(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Oo=class n extends Yt{constructor(e=new Ar([new ke(0,.5),new ke(-.5,-.5),new ke(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let f=0;f<e.length;f++)l(e[f]),this.addGroup(a,c,f),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new St(s,3)),this.setAttribute("normal",new St(r,3)),this.setAttribute("uv",new St(o,2));function l(f){let h=s.length/3,d=f.extractPoints(t),u=d.shape,p=d.holes;xr.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,g=p.length;m<g;m++){let y=p[m];xr.isClockWise(y)===!0&&(p[m]=y.reverse())}let x=xr.triangulateShape(u,p);for(let m=0,g=p.length;m<g;m++){let y=p[m];u=u.concat(y)}for(let m=0,g=u.length;m<g;m++){let y=u[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,g=x.length;m<g;m++){let y=x[m],_=y[0]+h,M=y[1]+h,E=y[2]+h;i.push(_,M,E),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return oy(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function oy(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var ks=class n extends Yt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,f=[],h=new U,d=new U,u=[],p=[],x=[],m=[];for(let g=0;g<=i;g++){let y=[],_=g/i,M=0;g===0&&o===0?M=.5/t:g===i&&c===Math.PI&&(M=-.5/t);for(let E=0;E<=t;E++){let T=E/t;h.x=-e*Math.cos(s+T*r)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(s+T*r)*Math.sin(o+_*a),p.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(T+M,1-_),y.push(l++)}f.push(y)}for(let g=0;g<i;g++)for(let y=0;y<t;y++){let _=f[g][y+1],M=f[g][y],E=f[g+1][y],T=f[g+1][y+1];(g!==0||o>0)&&u.push(_,M,T),(g!==i-1||c<Math.PI)&&u.push(M,E,T)}this.setIndex(u),this.setAttribute("position",new St(p,3)),this.setAttribute("normal",new St(x,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Bs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(zp(s))s.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(zp(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Tn(n){let e={};for(let t=0;t<n.length;t++){let i=Bs(n[t]);for(let s in i)e[s]=i[s]}return e}function zp(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function ay(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Of(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}var Um={clone:Bs,merge:Tn},ly=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bn=class extends gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ly,this.fragmentShader=cy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=ay(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Pl=class extends Bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Sn=class extends gi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dc,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=Xl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Il=class extends gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ym,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Dl=class extends gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function el(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}var ls=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ll=class extends ls{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:of,endingEnd:of}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case af:r=e,a=2*t-i;break;case lf:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case af:o=e,c=2*i-t;break;case lf:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}let l=(i-t)*.5,f=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*f,this._offsetNext=o*f}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,f=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,u=this._weightNext,p=(i-t)/(s-t),x=p*p,m=x*p,g=-d*m+2*d*x-d*p,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*p+1,_=(-1-u)*m+(1.5+u)*x+.5*p,M=u*m-u*x;for(let E=0;E!==a;++E)r[E]=g*o[f+E]+y*o[l+E]+_*o[c+E]+M*o[h+E];return r}},Nl=class extends ls{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,f=(i-t)/(s-t),h=1-f;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*f;return r}},kl=class extends ls{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ul=class extends ls{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,f=this.settings||this.DefaultSettings_,h=f.inTangents,d=f.outTangents;if(!h||!d){let x=(i-t)/(s-t),m=1-x;for(let g=0;g!==a;++g)r[g]=o[l+g]*m+o[c+g]*x;return r}let u=a*2,p=e-1;for(let x=0;x!==a;++x){let m=o[l+x],g=o[c+x],y=p*u+x*2,_=d[y],M=d[y+1],E=e*u+x*2,T=h[E],I=h[E+1],v=(i-t)/(s-t),b,S,R,L,X;for(let q=0;q<8;q++){b=v*v,S=b*v,R=1-v,L=R*R,X=L*R;let B=X*t+3*L*v*_+3*R*b*T+S*s-i;if(Math.abs(B)<1e-10)break;let Z=3*L*(_-t)+6*R*v*(T-_)+3*b*(s-T);if(Math.abs(Z)<1e-10)break;v=v-B/Z,v=Math.max(0,Math.min(1,v))}r[x]=X*m+3*L*v*M+3*R*b*I+S*g}return r}},Hn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=el(t,this.TimeBufferType),this.values=el(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:el(e.times,Array),values:el(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new kl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ul(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case mo:t=this.InterpolantFactoryMethodDiscrete;break;case pl:t=this.InterpolantFactoryMethodLinear;break;case il:t=this.InterpolantFactoryMethodSmooth;break;case rf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return it("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mo;case this.InterpolantFactoryMethodLinear:return pl;case this.InterpolantFactoryMethodSmooth:return il;case this.InterpolantFactoryMethodBezier:return rf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(nt("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(nt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){nt("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){nt("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&mx(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){nt("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===il,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],f=e[a+1];if(l!==f&&(a!==1||l!==e[0]))if(s)c=!0;else{let h=a*i,d=h-i,u=h+i;for(let p=0;p!==i;++p){let x=t[h+p];if(x!==t[d+p]||x!==t[u+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let h=a*i,d=o*i;for(let u=0;u!==i;++u)t[d+u]=t[h+u]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Hn.prototype.ValueTypeName="";Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=pl;var cs=class extends Hn{constructor(e,t,i){super(e,t,i)}};cs.prototype.ValueTypeName="bool";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=mo;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Fl=class extends Hn{constructor(e,t,i,s){super(e,t,i,s)}};Fl.prototype.ValueTypeName="color";var Ol=class extends Hn{constructor(e,t,i,s){super(e,t,i,s)}};Ol.prototype.ValueTypeName="number";var Bl=class extends ls{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t),l=e*a;for(let f=l+a;l!==f;l+=4)pi.slerpFlat(r,0,o,l-a,o,l,c);return r}},Bo=class extends Hn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Bl(this.times,this.values,this.getValueSize(),e)}};Bo.prototype.ValueTypeName="quaternion";Bo.prototype.InterpolantFactoryMethodSmooth=void 0;var hs=class extends Hn{constructor(e,t,i){super(e,t,i)}};hs.prototype.ValueTypeName="string";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=mo;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var Hl=class extends Hn{constructor(e,t,i,s){super(e,t,i,s)}};Hl.prototype.ValueTypeName="vector";var zl=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(f){a++,r===!1&&s.onStart!==void 0&&s.onStart(f,o,a),r=!0},this.itemEnd=function(f){o++,s.onProgress!==void 0&&s.onProgress(f,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,h){return l.push(f,h),this},this.removeHandler=function(f){let h=l.indexOf(f);return h!==-1&&l.splice(h,2),this},this.getHandler=function(f){for(let h=0,d=l.length;h<d;h+=2){let u=l[h],p=l[h+1];if(u.global&&(u.lastIndex=0),u.test(f))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Fm=new zl,Vl=class{constructor(e){this.manager=e!==void 0?e:Fm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Vl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ho=class extends an{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Us=class extends Ho{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.groundColor=new rt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},sf=new vt,Vp=new U,Gp=new U,pf=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tr,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Vp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vp),Gp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gp),t.updateMatrixWorld(),sf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sf,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===yr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(sf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},tl=new U,nl=new pi,li=new U,zo=class extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(tl,nl,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tl,nl,li.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(tl,nl,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tl,nl,li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ss=new U,Wp=new ke,Xp=new ke,pn=class extends zo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=xl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ph*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xl*2*Math.atan(Math.tan(Ph*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ss.x,ss.y).multiplyScalar(-e/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ss.x,ss.y).multiplyScalar(-e/ss.z)}getViewSize(e,t){return this.getViewBounds(e,Wp,Xp),t.subVectors(Xp,Wp)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ph*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Cr=class extends zo{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=f*this.view.offsetY,c=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},mf=class extends pf{constructor(){super(new Cr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fs=class extends Ho{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new mf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var pr=-90,mr=1,Gl=class extends an{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new pn(pr,mr,e,t);s.layers=this.layers,this.add(s);let r=new pn(pr,mr,e,t);r.layers=this.layers,this.add(r);let o=new pn(pr,mr,e,t);o.layers=this.layers,this.add(o);let a=new pn(pr,mr,e,t);a.layers=this.layers,this.add(a);let c=new pn(pr,mr,e,t);c.layers=this.layers,this.add(c);let l=new pn(pr,mr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===ti)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===yr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(h,d,u),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Wl=class extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Bf="\\[\\]\\.:\\/",hy=new RegExp("["+Bf+"]","g"),Hf="[^"+Bf+"]",fy="[^"+Bf.replace("\\.","")+"]",dy=/((?:WC+[\/:])*)/.source.replace("WC",Hf),uy=/(WCOD+)?/.source.replace("WCOD",fy),py=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hf),my=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hf),gy=new RegExp("^"+dy+uy+py+my+"$"),xy=["material","materials","bones","map"],gf=class{constructor(e,t,i){let s=i||Wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Wt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(hy,"")}static parseTrackName(e){let t=gy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);xy.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){it("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){nt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){nt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===l){l=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){nt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){nt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){nt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;nt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Wt.Composite=gf;Wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Wt.prototype.GetterByBindingType=[Wt.prototype._getValue_direct,Wt.prototype._getValue_array,Wt.prototype._getValue_arrayElement,Wt.prototype._getValue_toArray];Wt.prototype.SetterByBindingTypeAndVersioning=[[Wt.prototype._setValue_direct,Wt.prototype._setValue_direct_setNeedsUpdate,Wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_array,Wt.prototype._setValue_array_setNeedsUpdate,Wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_arrayElement,Wt.prototype._setValue_arrayElement_setNeedsUpdate,Wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_fromArray,Wt.prototype._setValue_fromArray_setNeedsUpdate,Wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var cE=new Float32Array(1);var qp=new vt,Vo=class{constructor(e,t,i=0,s=1/0){this.ray=new wr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Mr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):nt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return qp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qp),this}intersectObject(e,t=!0,i=[]){return xf(e,this,i,t),i.sort(Yp),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)xf(e[s],this,i,t);return i.sort(Yp),i}};function Yp(n,e){return n.distance-e.distance}function xf(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)xf(r[o],e,t,!0)}}var yf=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};function zf(n,e,t,i){let s=yy(i);switch(t){case Nf:return n*e;case jl:return n*e/s.components*s.byteLength;case Ql:return n*e/s.components*s.byteLength;case us:return n*e*2/s.components*s.byteLength;case ec:return n*e*2/s.components*s.byteLength;case kf:return n*e*3/s.components*s.byteLength;case Kn:return n*e*4/s.components*s.byteLength;case tc:return n*e*4/s.components*s.byteLength;case qo:case Yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Zo:case Ko:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ic:case rc:return Math.max(n,16)*Math.max(e,8)/4;case nc:case sc:return Math.max(n,8)*Math.max(e,8)/2;case oc:case ac:case cc:case hc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case lc:case $o:case fc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case dc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case uc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case pc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case mc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case gc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case xc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case yc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case _c:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case vc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case bc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case wc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Tc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ec:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ac:case Rc:case Cc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Sc:case Pc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Jo:case Ic:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yy(n){switch(n){case In:case Pf:return{byteLength:1,components:1};case Pr:case If:case bi:return{byteLength:2,components:1};case $l:case Jl:return{byteLength:2,components:4};case ii:case Kl:case Zn:return{byteLength:4,components:1};case Df:case Lf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");function o0(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function vy(n){let e=new WeakMap;function t(a,c){let l=a.array,f=a.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,f),a.onUploadCallback();let u;if(l instanceof Float32Array)u=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?u=n.HALF_FLOAT:u=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=n.SHORT;else if(l instanceof Uint32Array)u=n.UNSIGNED_INT;else if(l instanceof Int32Array)u=n.INT;else if(l instanceof Int8Array)u=n.BYTE;else if(l instanceof Uint8Array)u=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){let f=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,f);else{h.sort((u,p)=>u.start-p.start);let d=0;for(let u=1;u<h.length;u++){let p=h[d],x=h[u];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,h[d]=x)}h.length=d+1;for(let u=0,p=h.length;u<p;u++){let x=h[u];n.bufferSubData(l,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var My=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,by=`#ifdef USE_ALPHAHASH
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
#endif`,wy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ty=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ey=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ay=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ry=`#ifdef USE_AOMAP
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
#endif`,Cy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sy=`#ifdef USE_BATCHING
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
#endif`,Py=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Iy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ly=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ny=`#ifdef USE_IRIDESCENCE
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
#endif`,ky=`#ifdef USE_BUMPMAP
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
#endif`,Uy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Oy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,By=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Vy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Gy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Wy=`#define PI 3.141592653589793
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
} // validated`,Xy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qy=`vec3 transformedNormal = objectNormal;
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
#endif`,Yy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ky=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$y=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jy="gl_FragColor = linearToOutputTexel( gl_FragColor );",jy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qy=`#ifdef USE_ENVMAP
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
#endif`,e_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,t_=`#ifdef USE_ENVMAP
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
#endif`,n_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,i_=`#ifdef USE_ENVMAP
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
#endif`,s_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,r_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,o_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,a_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,l_=`#ifdef USE_GRADIENTMAP
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
}`,c_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,h_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,f_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,d_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,u_=`#ifdef USE_ENVMAP
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
#endif`,p_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,m_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,g_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,x_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,y_=`PhysicalMaterial material;
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
#endif`,__=`uniform sampler2D dfgLUT;
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
}`,v_=`
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
#endif`,M_=`#if defined( RE_IndirectDiffuse )
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
#endif`,b_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,w_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,T_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,E_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,C_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,S_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,P_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,I_=`#if defined( USE_POINTS_UV )
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
#endif`,D_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,L_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,N_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,k_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,U_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F_=`#ifdef USE_MORPHTARGETS
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
#endif`,O_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,H_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,z_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,W_=`#ifdef USE_NORMALMAP
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
#endif`,X_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,q_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Y_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Z_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,K_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,J_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,j_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Q_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ev=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ov=`float getShadowMask() {
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
}`,av=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lv=`#ifdef USE_SKINNING
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
#endif`,cv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hv=`#ifdef USE_SKINNING
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
#endif`,fv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mv=`#ifdef USE_TRANSMISSION
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
#endif`,gv=`#ifdef USE_TRANSMISSION
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
#endif`,xv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Mv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bv=`uniform sampler2D t2D;
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
}`,wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Av=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rv=`#include <common>
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
}`,Cv=`#if DEPTH_PACKING == 3200
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
}`,Sv=`#define DISTANCE
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
}`,Pv=`#define DISTANCE
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
}`,Iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lv=`uniform float scale;
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
}`,Nv=`uniform vec3 diffuse;
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
}`,kv=`#include <common>
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
}`,Uv=`uniform vec3 diffuse;
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
}`,Fv=`#define LAMBERT
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
}`,Ov=`#define LAMBERT
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
}`,Bv=`#define MATCAP
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
}`,Hv=`#define MATCAP
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
}`,zv=`#define NORMAL
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
}`,Vv=`#define NORMAL
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
}`,Gv=`#define PHONG
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
}`,Wv=`#define PHONG
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
}`,Xv=`#define STANDARD
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
}`,qv=`#define STANDARD
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
}`,Yv=`#define TOON
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
}`,Zv=`#define TOON
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
}`,Kv=`uniform float size;
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
}`,$v=`uniform vec3 diffuse;
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
}`,Jv=`#include <common>
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
}`,jv=`uniform vec3 color;
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
}`,Qv=`uniform float rotation;
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
}`,eM=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:My,alphahash_pars_fragment:by,alphamap_fragment:wy,alphamap_pars_fragment:Ty,alphatest_fragment:Ey,alphatest_pars_fragment:Ay,aomap_fragment:Ry,aomap_pars_fragment:Cy,batching_pars_vertex:Sy,batching_vertex:Py,begin_vertex:Iy,beginnormal_vertex:Dy,bsdfs:Ly,iridescence_fragment:Ny,bumpmap_pars_fragment:ky,clipping_planes_fragment:Uy,clipping_planes_pars_fragment:Fy,clipping_planes_pars_vertex:Oy,clipping_planes_vertex:By,color_fragment:Hy,color_pars_fragment:zy,color_pars_vertex:Vy,color_vertex:Gy,common:Wy,cube_uv_reflection_fragment:Xy,defaultnormal_vertex:qy,displacementmap_pars_vertex:Yy,displacementmap_vertex:Zy,emissivemap_fragment:Ky,emissivemap_pars_fragment:$y,colorspace_fragment:Jy,colorspace_pars_fragment:jy,envmap_fragment:Qy,envmap_common_pars_fragment:e_,envmap_pars_fragment:t_,envmap_pars_vertex:n_,envmap_physical_pars_fragment:u_,envmap_vertex:i_,fog_vertex:s_,fog_pars_vertex:r_,fog_fragment:o_,fog_pars_fragment:a_,gradientmap_pars_fragment:l_,lightmap_pars_fragment:c_,lights_lambert_fragment:h_,lights_lambert_pars_fragment:f_,lights_pars_begin:d_,lights_toon_fragment:p_,lights_toon_pars_fragment:m_,lights_phong_fragment:g_,lights_phong_pars_fragment:x_,lights_physical_fragment:y_,lights_physical_pars_fragment:__,lights_fragment_begin:v_,lights_fragment_maps:M_,lights_fragment_end:b_,lightprobes_pars_fragment:w_,logdepthbuf_fragment:T_,logdepthbuf_pars_fragment:E_,logdepthbuf_pars_vertex:A_,logdepthbuf_vertex:R_,map_fragment:C_,map_pars_fragment:S_,map_particle_fragment:P_,map_particle_pars_fragment:I_,metalnessmap_fragment:D_,metalnessmap_pars_fragment:L_,morphinstance_vertex:N_,morphcolor_vertex:k_,morphnormal_vertex:U_,morphtarget_pars_vertex:F_,morphtarget_vertex:O_,normal_fragment_begin:B_,normal_fragment_maps:H_,normal_pars_fragment:z_,normal_pars_vertex:V_,normal_vertex:G_,normalmap_pars_fragment:W_,clearcoat_normal_fragment_begin:X_,clearcoat_normal_fragment_maps:q_,clearcoat_pars_fragment:Y_,iridescence_pars_fragment:Z_,opaque_fragment:K_,packing:$_,premultiplied_alpha_fragment:J_,project_vertex:j_,dithering_fragment:Q_,dithering_pars_fragment:ev,roughnessmap_fragment:tv,roughnessmap_pars_fragment:nv,shadowmap_pars_fragment:iv,shadowmap_pars_vertex:sv,shadowmap_vertex:rv,shadowmask_pars_fragment:ov,skinbase_vertex:av,skinning_pars_vertex:lv,skinning_vertex:cv,skinnormal_vertex:hv,specularmap_fragment:fv,specularmap_pars_fragment:dv,tonemapping_fragment:uv,tonemapping_pars_fragment:pv,transmission_fragment:mv,transmission_pars_fragment:gv,uv_pars_fragment:xv,uv_pars_vertex:yv,uv_vertex:_v,worldpos_vertex:vv,background_vert:Mv,background_frag:bv,backgroundCube_vert:wv,backgroundCube_frag:Tv,cube_vert:Ev,cube_frag:Av,depth_vert:Rv,depth_frag:Cv,distance_vert:Sv,distance_frag:Pv,equirect_vert:Iv,equirect_frag:Dv,linedashed_vert:Lv,linedashed_frag:Nv,meshbasic_vert:kv,meshbasic_frag:Uv,meshlambert_vert:Fv,meshlambert_frag:Ov,meshmatcap_vert:Bv,meshmatcap_frag:Hv,meshnormal_vert:zv,meshnormal_frag:Vv,meshphong_vert:Gv,meshphong_frag:Wv,meshphysical_vert:Xv,meshphysical_frag:qv,meshtoon_vert:Yv,meshtoon_frag:Zv,points_vert:Kv,points_frag:$v,shadow_vert:Jv,shadow_frag:jv,sprite_vert:Qv,sprite_frag:eM},Le={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Ti={basic:{uniforms:Tn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Tn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new rt(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Tn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Tn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Tn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new rt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Tn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Tn([Le.points,Le.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Tn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Tn([Le.common,Le.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Tn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Tn([Le.sprite,Le.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Tn([Le.common,Le.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Tn([Le.lights,Le.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Ti.physical={uniforms:Tn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};var kc={r:0,b:0,g:0},tM=new vt,a0=new lt;a0.set(-1,0,0,0,1,0,0,0,1);function nM(n,e,t,i,s,r){let o=new rt(0),a=s===!0?0:1,c,l,f=null,h=0,d=null;function u(y){let _=y.isScene===!0?y.background:null;if(_&&_.isTexture){let M=y.backgroundBlurriness>0;_=e.get(_,M)}return _}function p(y){let _=!1,M=u(y);M===null?m(o,a):M&&M.isColor&&(m(M,1),_=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||_)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(y,_){let M=u(_);M&&(M.isCubeTexture||M.mapping===Wo)?(l===void 0&&(l=new _e(new as(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:Bs(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,T,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(tM.makeRotationFromEuler(_.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(a0),l.material.toneMapped=_t.getTransfer(M.colorSpace)!==Ct,(f!==M||h!==M.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,f=M,h=M.version,d=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new _e(new Yn(2,2),new Bn({name:"BackgroundMaterial",uniforms:Bs(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=_t.getTransfer(M.colorSpace)!==Ct,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=M,h=M.version,d=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,_){y.getRGB(kc,Of(n)),t.buffers.color.setClear(kc.r,kc.g,kc.b,_,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),a=_,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:x,dispose:g}}function iM(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(R,L,X,q,N){let B=!1,Z=h(R,q,X,L);r!==Z&&(r=Z,l(r.object)),B=u(R,q,X,N),B&&p(R,q,X,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,M(R,L,X,q),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return n.createVertexArray()}function l(R){return n.bindVertexArray(R)}function f(R){return n.deleteVertexArray(R)}function h(R,L,X,q){let N=q.wireframe===!0,B=i[L.id];B===void 0&&(B={},i[L.id]=B);let Z=R.isInstancedMesh===!0?R.id:0,ce=B[Z];ce===void 0&&(ce={},B[Z]=ce);let ue=ce[X.id];ue===void 0&&(ue={},ce[X.id]=ue);let Ee=ue[N];return Ee===void 0&&(Ee=d(c()),ue[N]=Ee),Ee}function d(R){let L=[],X=[],q=[];for(let N=0;N<t;N++)L[N]=0,X[N]=0,q[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:X,attributeDivisors:q,object:R,attributes:{},index:null}}function u(R,L,X,q){let N=r.attributes,B=L.attributes,Z=0,ce=X.getAttributes();for(let ue in ce)if(ce[ue].location>=0){let De=N[ue],ze=B[ue];if(ze===void 0&&(ue==="instanceMatrix"&&R.instanceMatrix&&(ze=R.instanceMatrix),ue==="instanceColor"&&R.instanceColor&&(ze=R.instanceColor)),De===void 0||De.attribute!==ze||ze&&De.data!==ze.data)return!0;Z++}return r.attributesNum!==Z||r.index!==q}function p(R,L,X,q){let N={},B=L.attributes,Z=0,ce=X.getAttributes();for(let ue in ce)if(ce[ue].location>=0){let De=B[ue];De===void 0&&(ue==="instanceMatrix"&&R.instanceMatrix&&(De=R.instanceMatrix),ue==="instanceColor"&&R.instanceColor&&(De=R.instanceColor));let ze={};ze.attribute=De,De&&De.data&&(ze.data=De.data),N[ue]=ze,Z++}r.attributes=N,r.attributesNum=Z,r.index=q}function x(){let R=r.newAttributes;for(let L=0,X=R.length;L<X;L++)R[L]=0}function m(R){g(R,0)}function g(R,L){let X=r.newAttributes,q=r.enabledAttributes,N=r.attributeDivisors;X[R]=1,q[R]===0&&(n.enableVertexAttribArray(R),q[R]=1),N[R]!==L&&(n.vertexAttribDivisor(R,L),N[R]=L)}function y(){let R=r.newAttributes,L=r.enabledAttributes;for(let X=0,q=L.length;X<q;X++)L[X]!==R[X]&&(n.disableVertexAttribArray(X),L[X]=0)}function _(R,L,X,q,N,B,Z){Z===!0?n.vertexAttribIPointer(R,L,X,N,B):n.vertexAttribPointer(R,L,X,q,N,B)}function M(R,L,X,q){x();let N=q.attributes,B=X.getAttributes(),Z=L.defaultAttributeValues;for(let ce in B){let ue=B[ce];if(ue.location>=0){let Ee=N[ce];if(Ee===void 0&&(ce==="instanceMatrix"&&R.instanceMatrix&&(Ee=R.instanceMatrix),ce==="instanceColor"&&R.instanceColor&&(Ee=R.instanceColor)),Ee!==void 0){let De=Ee.normalized,ze=Ee.itemSize,Qe=e.get(Ee);if(Qe===void 0)continue;let se=Qe.buffer,re=Qe.type,F=Qe.bytesPerElement,ne=re===n.INT||re===n.UNSIGNED_INT||Ee.gpuType===Kl;if(Ee.isInterleavedBufferAttribute){let oe=Ee.data,O=oe.stride,W=Ee.offset;if(oe.isInstancedInterleavedBuffer){for(let de=0;de<ue.locationSize;de++)g(ue.location+de,oe.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let de=0;de<ue.locationSize;de++)m(ue.location+de);n.bindBuffer(n.ARRAY_BUFFER,se);for(let de=0;de<ue.locationSize;de++)_(ue.location+de,ze/ue.locationSize,re,De,O*F,(W+ze/ue.locationSize*de)*F,ne)}else{if(Ee.isInstancedBufferAttribute){for(let oe=0;oe<ue.locationSize;oe++)g(ue.location+oe,Ee.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let oe=0;oe<ue.locationSize;oe++)m(ue.location+oe);n.bindBuffer(n.ARRAY_BUFFER,se);for(let oe=0;oe<ue.locationSize;oe++)_(ue.location+oe,ze/ue.locationSize,re,De,ze*F,ze/ue.locationSize*oe*F,ne)}}else if(Z!==void 0){let De=Z[ce];if(De!==void 0)switch(De.length){case 2:n.vertexAttrib2fv(ue.location,De);break;case 3:n.vertexAttrib3fv(ue.location,De);break;case 4:n.vertexAttrib4fv(ue.location,De);break;default:n.vertexAttrib1fv(ue.location,De)}}}}y()}function E(){b();for(let R in i){let L=i[R];for(let X in L){let q=L[X];for(let N in q){let B=q[N];for(let Z in B)f(B[Z].object),delete B[Z];delete q[N]}}delete i[R]}}function T(R){if(i[R.id]===void 0)return;let L=i[R.id];for(let X in L){let q=L[X];for(let N in q){let B=q[N];for(let Z in B)f(B[Z].object),delete B[Z];delete q[N]}}delete i[R.id]}function I(R){for(let L in i){let X=i[L];for(let q in X){let N=X[q];if(N[R.id]===void 0)continue;let B=N[R.id];for(let Z in B)f(B[Z].object),delete B[Z];delete N[R.id]}}}function v(R){for(let L in i){let X=i[L],q=R.isInstancedMesh===!0?R.id:0,N=X[q];if(N!==void 0){for(let B in N){let Z=N[B];for(let ce in Z)f(Z[ce].object),delete Z[ce];delete N[B]}delete X[q],Object.keys(X).length===0&&delete i[L]}}}function b(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function sM(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,f){f!==0&&(n.drawArraysInstanced(i,c,l,f),t.update(l,i,f))}function a(c,l,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,f);let d=0;for(let u=0;u<f;u++)d+=l[u];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function rM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==Kn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let v=I===bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==In&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Zn&&!v)}function c(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",f=c(l);f!==l&&(it("WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&it("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:M,maxSamples:E,samples:T}}function oM(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Xn,a=new lt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let u=h.length!==0||d||i!==0||s;return s=d,i=h.length,u},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=f(h,d,0)},this.setState=function(h,d,u){let p=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,g=n.get(h);if(!s||p===null||p.length===0||r&&!m)r?f(null):l();else{let y=r?0:i,_=y*4,M=g.clippingState||null;c.value=M,M=f(p,d,_,u);for(let E=0;E!==_;++E)M[E]=t[E];g.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,u,p){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=c.value,p!==!0||m===null){let g=u+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let _=0,M=u;_!==x;++_,M+=4)o.copy(h[_]).applyMatrix4(y,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var ps=4,Om=[.125,.215,.35,.446,.526,.582],Hs=20,aM=256,jo=new Cr,Bm=new rt,Vf=null,Gf=0,Wf=0,Xf=!1,lM=new U,Fc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=lM}=r;Vf=this._renderer.getRenderTarget(),Gf=this._renderer.getActiveCubeFace(),Wf=this._renderer.getActiveMipmapLevel(),Xf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Vf,Gf,Wf),this._renderer.xr.enabled=Xf,e.scissorTest=!1,Dr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fs||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vf=this._renderer.getRenderTarget(),Gf=this._renderer.getActiveCubeFace(),Wf=this._renderer.getActiveMipmapLevel(),Xf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:bi,format:Kn,colorSpace:go,depthBuffer:!1},s=Hm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hm(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=cM(r)),this._blurMaterial=fM(r,e,t),this._ggxMaterial=hM(r,e,t)}return s}_compileMaterial(e){let t=new _e(new Yt,e);this._renderer.compile(t,jo)}_sceneToCubeUV(e,t,i,s,r){let c=new pn(90,1,t,i),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Bm),h.toneMapping=ni,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _e(new as,new Xt({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,g=!1,y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,g=!0):(m.color.copy(Bm),g=!0);for(let _=0;_<6;_++){let M=_%3;M===0?(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+f[_],r.y,r.z)):M===1?(c.up.set(0,0,l[_]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+f[_],r.z)):(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+f[_]));let E=this._cubeSize;Dr(s,M*E,_>2?E:0,E,E),h.setRenderTarget(s),g&&h.render(x,c),h.render(e,c)}h.toneMapping=u,h.autoClear=d,e.background=y}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===fs||e.mapping===Os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zm());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Dr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,jo)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let c=o.uniforms,l=i/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-f*f),d=0+l*1.25,u=h*d,{_lodMax:p}=this,x=this._sizeLods[i],m=3*x*(i>p-ps?i-p+ps:0),g=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=u,c.mipInt.value=p-t,Dr(r,m,g,3*x,2*x),s.setRenderTarget(r),s.render(a,jo),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-i,Dr(e,m,g,3*x,2*x),s.setRenderTarget(e),s.render(a,jo)}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&nt("blur direction must be either latitudinal or longitudinal!");let f=3,h=this._lodMeshes[s];h.material=l;let d=l.uniforms,u=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Hs-1),x=r/p,m=isFinite(r)?1+Math.floor(f*x):Hs;m>Hs&&it(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hs}`);let g=[],y=0;for(let I=0;I<Hs;++I){let v=I/x,b=Math.exp(-v*v/2);g.push(b),I===0?y+=b:I<m&&(y+=2*b)}for(let I=0;I<g.length;I++)g[I]=g[I]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=p,d.mipInt.value=_-i;let M=this._sizeLods[s],E=3*M*(s>_-ps?s-_+ps:0),T=4*(this._cubeSize-M);Dr(t,E,T,3*M,2*M),c.setRenderTarget(t),c.render(h,jo)}};function cM(n){let e=[],t=[],i=[],s=n,r=n-ps+1+Om.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>n-ps?c=Om[o-n+ps-1]:o===0&&(c=0),t.push(c);let l=1/(a-2),f=-l,h=1+l,d=[f,f,h,f,h,h,f,f,h,h,f,h],u=6,p=6,x=3,m=2,g=1,y=new Float32Array(x*p*u),_=new Float32Array(m*p*u),M=new Float32Array(g*p*u);for(let T=0;T<u;T++){let I=T%3*2/3-1,v=T>2?0:-1,b=[I,v,0,I+2/3,v,0,I+2/3,v+1,0,I,v,0,I+2/3,v+1,0,I,v+1,0];y.set(b,x*p*T),_.set(d,m*p*T);let S=[T,T,T,T,T,T];M.set(S,g*p*T)}let E=new Yt;E.setAttribute("position",new en(y,x)),E.setAttribute("uv",new en(_,m)),E.setAttribute("faceIndex",new en(M,g)),i.push(new _e(E,null)),s>ps&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Hm(n,e,t){let i=new Fn(n,e,t);return i.texture.mapping=Wo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Dr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function hM(n,e,t){return new Bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:aM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Hc(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function fM(n,e,t){let i=new Float32Array(Hs),s=new U(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:Hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Hc(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function zm(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hc(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Vm(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Hc(){return`

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
	`}var Oc=class extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ro(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new as(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:Bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:vi});r.uniforms.tEquirect.value=t;let o=new _e(s,r),a=t.minFilter;return t.minFilter===Mi&&(t.minFilter=xn),new Gl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}};function dM(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,u=!1){return d==null?null:u?o(d):r(d)}function r(d){if(d&&d.isTexture){let u=d.mapping;if(u===ql||u===Yl)if(e.has(d)){let p=e.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new Oc(p.height);return x.fromEquirectangularTexture(n,d),e.set(d,x),d.addEventListener("dispose",l),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let u=d.mapping,p=u===ql||u===Yl,x=u===fs||u===Os;if(p||x){let m=t.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return i===null&&(i=new Fc(n)),m=p?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let y=d.image;return p&&y&&y.height>0||x&&y&&c(y)?(i===null&&(i=new Fc(n)),m=p?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",f),m.texture):null}}}return d}function a(d,u){return u===ql?d.mapping=fs:u===Yl&&(d.mapping=Os),d}function c(d){let u=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&u++;return u===p}function l(d){let u=d.target;u.removeEventListener("dispose",l);let p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function f(d){let u=d.target;u.removeEventListener("dispose",f);let p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function uM(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&gl("WebGLRenderer: "+i+" extension not supported."),s}}}function pM(n,e,t,i){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete s[d.id];let u=r.get(d);u&&(e.remove(u),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let u in d)e.update(d[u],n.ARRAY_BUFFER)}function l(h){let d=[],u=h.index,p=h.attributes.position,x=0;if(p===void 0)return;if(u!==null){let y=u.array;x=u.version;for(let _=0,M=y.length;_<M;_+=3){let E=y[_+0],T=y[_+1],I=y[_+2];d.push(E,T,T,I,I,E)}}else{let y=p.array;x=p.version;for(let _=0,M=y.length/3-1;_<M;_+=3){let E=_+0,T=_+1,I=_+2;d.push(E,T,T,I,I,E)}}let m=new(p.count>=65535?wo:bo)(d,1);m.version=x;let g=r.get(h);g&&e.remove(g),r.set(h,m)}function f(h){let d=r.get(h);if(d){let u=h.index;u!==null&&d.version<u.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:f}}function mM(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function c(h,d){n.drawElements(i,d,r,h*o),t.update(d,i,1)}function l(h,d,u){u!==0&&(n.drawElementsInstanced(i,d,r,h*o,u),t.update(d,i,u))}function f(h,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,u);let x=0;for(let m=0;m<u;m++)x+=d[m];t.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=f}function gM(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:nt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function xM(n,e,t){let i=new WeakMap,s=new $t;function r(o,a,c){let l=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0,d=i.get(a);if(d===void 0||d.count!==h){let b=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],_=0;u===!0&&(_=1),p===!0&&(_=2),x===!0&&(_=3);let M=a.attributes.position.count*_,E=1;M>e.maxTextureSize&&(E=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let T=new Float32Array(M*E*4*h),I=new vo(T,M,E,h);I.type=Zn,I.needsUpdate=!0;let v=_*4;for(let S=0;S<h;S++){let R=m[S],L=g[S],X=y[S],q=M*E*4*S;for(let N=0;N<R.count;N++){let B=N*v;u===!0&&(s.fromBufferAttribute(R,N),T[q+B+0]=s.x,T[q+B+1]=s.y,T[q+B+2]=s.z,T[q+B+3]=0),p===!0&&(s.fromBufferAttribute(L,N),T[q+B+4]=s.x,T[q+B+5]=s.y,T[q+B+6]=s.z,T[q+B+7]=0),x===!0&&(s.fromBufferAttribute(X,N),T[q+B+8]=s.x,T[q+B+9]=s.y,T[q+B+10]=s.z,T[q+B+11]=X.itemSize===4?s.w:1)}}d={count:h,texture:I,size:new ke(M,E)},i.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let u=0;for(let x=0;x<l.length;x++)u+=l[x];let p=a.morphTargetsRelative?1:1-u;c.getUniforms().setValue(n,"morphTargetBaseInfluence",p),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function yM(n,e,t,i,s){let r=new WeakMap;function o(l){let f=s.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==f&&(e.update(d),r.set(d,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==f&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,f))),l.isSkinnedMesh){let u=l.skeleton;r.get(u)!==f&&(u.update(),r.set(u,f))}return d}function a(){r=new WeakMap}function c(l){let f=l.target;f.removeEventListener("dispose",c),i.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:o,dispose:a}}var _M={[bf]:"LINEAR_TONE_MAPPING",[wf]:"REINHARD_TONE_MAPPING",[Tf]:"CINEON_TONE_MAPPING",[Ef]:"ACES_FILMIC_TONE_MAPPING",[Rf]:"AGX_TONE_MAPPING",[Cf]:"NEUTRAL_TONE_MAPPING",[Af]:"CUSTOM_TONE_MAPPING"};function vM(n,e,t,i,s){let r=new Fn(e,t,{type:n,depthBuffer:i,stencilBuffer:s,depthTexture:i?new Wi(e,t):void 0}),o=new Fn(e,t,{type:bi,depthBuffer:!1,stencilBuffer:!1}),a=new Yt;a.setAttribute("position",new St([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new St([0,2,0,0,2,0],2));let c=new Pl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new _e(a,c),f=new Cr(-1,1,1,-1,0,1),h=null,d=null,u=!1,p,x=null,m=[],g=!1;this.setSize=function(y,_){r.setSize(y,_),o.setSize(y,_);for(let M=0;M<m.length;M++){let E=m[M];E.setSize&&E.setSize(y,_)}},this.setEffects=function(y){m=y,g=m.length>0&&m[0].isRenderPass===!0;let _=r.width,M=r.height;for(let E=0;E<m.length;E++){let T=m[E];T.setSize&&T.setSize(_,M)}},this.begin=function(y,_){if(u||y.toneMapping===ni&&m.length===0)return!1;if(x=_,_!==null){let M=_.width,E=_.height;(r.width!==M||r.height!==E)&&this.setSize(M,E)}return g===!1&&y.setRenderTarget(r),p=y.toneMapping,y.toneMapping=ni,!0},this.hasRenderPass=function(){return g},this.end=function(y,_){y.toneMapping=p,u=!0;let M=r,E=o;for(let T=0;T<m.length;T++){let I=m[T];if(I.enabled!==!1&&(I.render(y,E,M,_),I.needsSwap!==!1)){let v=M;M=E,E=v}}if(h!==y.outputColorSpace||d!==y.toneMapping){h=y.outputColorSpace,d=y.toneMapping,c.defines={},_t.getTransfer(h)===Ct&&(c.defines.SRGB_TRANSFER="");let T=_M[d];T&&(c.defines[T]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=M.texture,y.setRenderTarget(x),y.render(l,f),x=null,u=!1},this.isCompositing=function(){return u},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),a.dispose(),c.dispose()}}var l0=new Rn,Zf=new Wi(1,1),c0=new vo,h0=new vl,f0=new Ro,Gm=[],Wm=[],Xm=new Float32Array(16),qm=new Float32Array(9),Ym=new Float32Array(4);function Nr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Gm[s];if(r===void 0&&(r=new Float32Array(s),Gm[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function hn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function fn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function zc(n,e){let t=Wm[e];t===void 0&&(t=new Int32Array(e),Wm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function MM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function bM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2fv(this.addr,e),fn(t,e)}}function wM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;n.uniform3fv(this.addr,e),fn(t,e)}}function TM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4fv(this.addr,e),fn(t,e)}}function EM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,i))return;Ym.set(i),n.uniformMatrix2fv(this.addr,!1,Ym),fn(t,i)}}function AM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,i))return;qm.set(i),n.uniformMatrix3fv(this.addr,!1,qm),fn(t,i)}}function RM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,i))return;Xm.set(i),n.uniformMatrix4fv(this.addr,!1,Xm),fn(t,i)}}function CM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function SM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2iv(this.addr,e),fn(t,e)}}function PM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;n.uniform3iv(this.addr,e),fn(t,e)}}function IM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4iv(this.addr,e),fn(t,e)}}function DM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function LM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2uiv(this.addr,e),fn(t,e)}}function NM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;n.uniform3uiv(this.addr,e),fn(t,e)}}function kM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4uiv(this.addr,e),fn(t,e)}}function UM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Zf.compareFunction=t.isReversedDepthBuffer()?Nc:Lc,r=Zf):r=l0,t.setTexture2D(e||r,s)}function FM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||h0,s)}function OM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||f0,s)}function BM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||c0,s)}function HM(n){switch(n){case 5126:return MM;case 35664:return bM;case 35665:return wM;case 35666:return TM;case 35674:return EM;case 35675:return AM;case 35676:return RM;case 5124:case 35670:return CM;case 35667:case 35671:return SM;case 35668:case 35672:return PM;case 35669:case 35673:return IM;case 5125:return DM;case 36294:return LM;case 36295:return NM;case 36296:return kM;case 35678:case 36198:case 36298:case 36306:case 35682:return UM;case 35679:case 36299:case 36307:return FM;case 35680:case 36300:case 36308:case 36293:return OM;case 36289:case 36303:case 36311:case 36292:return BM}}function zM(n,e){n.uniform1fv(this.addr,e)}function VM(n,e){let t=Nr(e,this.size,2);n.uniform2fv(this.addr,t)}function GM(n,e){let t=Nr(e,this.size,3);n.uniform3fv(this.addr,t)}function WM(n,e){let t=Nr(e,this.size,4);n.uniform4fv(this.addr,t)}function XM(n,e){let t=Nr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function qM(n,e){let t=Nr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function YM(n,e){let t=Nr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ZM(n,e){n.uniform1iv(this.addr,e)}function KM(n,e){n.uniform2iv(this.addr,e)}function $M(n,e){n.uniform3iv(this.addr,e)}function JM(n,e){n.uniform4iv(this.addr,e)}function jM(n,e){n.uniform1uiv(this.addr,e)}function QM(n,e){n.uniform2uiv(this.addr,e)}function e1(n,e){n.uniform3uiv(this.addr,e)}function t1(n,e){n.uniform4uiv(this.addr,e)}function n1(n,e,t){let i=this.cache,s=e.length,r=zc(t,s);hn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Zf:o=l0;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function i1(n,e,t){let i=this.cache,s=e.length,r=zc(t,s);hn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||h0,r[o])}function s1(n,e,t){let i=this.cache,s=e.length,r=zc(t,s);hn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||f0,r[o])}function r1(n,e,t){let i=this.cache,s=e.length,r=zc(t,s);hn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||c0,r[o])}function o1(n){switch(n){case 5126:return zM;case 35664:return VM;case 35665:return GM;case 35666:return WM;case 35674:return XM;case 35675:return qM;case 35676:return YM;case 5124:case 35670:return ZM;case 35667:case 35671:return KM;case 35668:case 35672:return $M;case 35669:case 35673:return JM;case 5125:return jM;case 36294:return QM;case 36295:return e1;case 36296:return t1;case 35678:case 36198:case 36298:case 36306:case 35682:return n1;case 35679:case 36299:case 36307:return i1;case 35680:case 36300:case 36308:case 36293:return s1;case 36289:case 36303:case 36311:case 36292:return r1}}var Kf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=HM(t.type)}},$f=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=o1(t.type)}},Jf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},qf=/(\w+)(\])?(\[|\.)?/g;function Zm(n,e){n.seq.push(e),n.map[e.id]=e}function a1(n,e,t){let i=n.name,s=i.length;for(qf.lastIndex=0;;){let r=qf.exec(i),o=qf.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Zm(t,l===void 0?new Kf(a,n,e):new $f(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Jf(a),Zm(t,h)),t=h}}}var Lr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);a1(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Km(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var l1=37297,c1=0;function h1(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var $m=new lt;function f1(n){_t._getMatrix($m,_t.workingColorSpace,n);let e=`mat3( ${$m.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(n)){case xo:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Jm(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+h1(n.getShaderSource(e),a)}else return r}function d1(n,e){let t=f1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var u1={[bf]:"Linear",[wf]:"Reinhard",[Tf]:"Cineon",[Ef]:"ACESFilmic",[Rf]:"AgX",[Cf]:"Neutral",[Af]:"Custom"};function p1(n,e){let t=u1[e];return t===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Uc=new U;function m1(){_t.getLuminanceCoefficients(Uc);let n=Uc.x.toFixed(4),e=Uc.y.toFixed(4),t=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function g1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function x1(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function y1(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ea(n){return n!==""}function jm(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var _1=/^[ \t]*#include +<([\w\d./]+)>/gm;function jf(n){return n.replace(_1,M1)}var v1=new Map;function M1(n,e){let t=pt[e];if(t===void 0){let i=v1.get(e);if(i!==void 0)t=pt[i],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return jf(t)}var b1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function e0(n){return n.replace(b1,w1)}function w1(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function t0(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var T1={[Go]:"SHADOWMAP_TYPE_PCF",[Sr]:"SHADOWMAP_TYPE_VSM"};function E1(n){return T1[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var A1={[fs]:"ENVMAP_TYPE_CUBE",[Os]:"ENVMAP_TYPE_CUBE",[Wo]:"ENVMAP_TYPE_CUBE_UV"};function R1(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":A1[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var C1={[Os]:"ENVMAP_MODE_REFRACTION"};function S1(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":C1[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var P1={[Xl]:"ENVMAP_BLENDING_MULTIPLY",[mm]:"ENVMAP_BLENDING_MIX",[gm]:"ENVMAP_BLENDING_ADD"};function I1(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":P1[n.combine]||"ENVMAP_BLENDING_NONE"}function D1(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function L1(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=E1(t),l=R1(t),f=S1(t),h=I1(t),d=D1(t),u=g1(t),p=x1(r),x=s.createProgram(),m,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ea).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ea).join(`
`),g.length>0&&(g+=`
`)):(m=[t0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),g=[t0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?pt.tonemapping_pars_fragment:"",t.toneMapping!==ni?p1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,d1("linearToOutputTexel",t.outputColorSpace),m1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ea).join(`
`)),o=jf(o),o=jm(o,t),o=Qm(o,t),a=jf(a),a=jm(a,t),a=Qm(a,t),o=e0(o),a=e0(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Uf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let _=y+m+o,M=y+g+a,E=Km(s,s.VERTEX_SHADER,_),T=Km(s,s.FRAGMENT_SHADER,M);s.attachShader(x,E),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function I(R){if(n.debug.checkShaderErrors){let L=s.getProgramInfoLog(x)||"",X=s.getShaderInfoLog(E)||"",q=s.getShaderInfoLog(T)||"",N=L.trim(),B=X.trim(),Z=q.trim(),ce=!0,ue=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ce=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,E,T);else{let Ee=Jm(s,E,"vertex"),De=Jm(s,T,"fragment");nt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+N+`
`+Ee+`
`+De)}else N!==""?it("WebGLProgram: Program Info Log:",N):(B===""||Z==="")&&(ue=!1);ue&&(R.diagnostics={runnable:ce,programLog:N,vertexShader:{log:B,prefix:m},fragmentShader:{log:Z,prefix:g}})}s.deleteShader(E),s.deleteShader(T),v=new Lr(s,x),b=y1(s,x)}let v;this.getUniforms=function(){return v===void 0&&I(this),v};let b;this.getAttributes=function(){return b===void 0&&I(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,l1)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=c1++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=T,this}var N1=0,Qf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new ed(e),t.set(e,i)),i}},ed=class{constructor(e){this.id=N1++,this.code=e,this.usedTimes=0}};function k1(n){return n===us||n===$o||n===Jo}function U1(n,e,t,i,s,r){let o=new Mr,a=new Qf,c=new Set,l=[],f=new Map,h=i.logarithmicDepthBuffer,d=i.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function x(v,b,S,R,L,X){let q=R.fog,N=L.geometry,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,Z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ce=e.get(v.envMap||B,Z),ue=ce&&ce.mapping===Wo?ce.image.height:null,Ee=u[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&it("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let De=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ze=De!==void 0?De.length:0,Qe=0;N.morphAttributes.position!==void 0&&(Qe=1),N.morphAttributes.normal!==void 0&&(Qe=2),N.morphAttributes.color!==void 0&&(Qe=3);let se,re,F,ne;if(Ee){let ct=Ti[Ee];se=ct.vertexShader,re=ct.fragmentShader}else se=v.vertexShader,re=v.fragmentShader,a.update(v),F=a.getVertexShaderID(v),ne=a.getFragmentShaderID(v);let oe=n.getRenderTarget(),O=n.state.buffers.depth.getReversed(),W=L.isInstancedMesh===!0,de=L.isBatchedMesh===!0,k=!!v.map,H=!!v.matcap,$=!!ce,ee=!!v.aoMap,ye=!!v.lightMap,C=!!v.bumpMap,Q=!!v.normalMap,V=!!v.displacementMap,D=!!v.emissiveMap,pe=!!v.metalnessMap,Ae=!!v.roughnessMap,Fe=v.anisotropy>0,Me=v.clearcoat>0,ot=v.dispersion>0,P=v.iridescence>0,w=v.sheen>0,K=v.transmission>0,ae=Fe&&!!v.anisotropyMap,ge=Me&&!!v.clearcoatMap,Te=Me&&!!v.clearcoatNormalMap,Re=Me&&!!v.clearcoatRoughnessMap,le=P&&!!v.iridescenceMap,me=P&&!!v.iridescenceThicknessMap,Oe=w&&!!v.sheenColorMap,Ge=w&&!!v.sheenRoughnessMap,Pe=!!v.specularMap,Ce=!!v.specularColorMap,at=!!v.specularIntensityMap,dt=K&&!!v.transmissionMap,wt=K&&!!v.thicknessMap,z=!!v.gradientMap,Se=!!v.alphaMap,he=v.alphaTest>0,He=!!v.alphaHash,Ie=!!v.extensions,be=ni;v.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(be=n.toneMapping);let Ze={shaderID:Ee,shaderType:v.type,shaderName:v.name,vertexShader:se,fragmentShader:re,defines:v.defines,customVertexShaderID:F,customFragmentShaderID:ne,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:de,batchingColor:de&&L._colorsTexture!==null,instancing:W,instancingColor:W&&L.instanceColor!==null,instancingMorph:W&&L.morphTexture!==null,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:_t.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:k,matcap:H,envMap:$,envMapMode:$&&ce.mapping,envMapCubeUVHeight:ue,aoMap:ee,lightMap:ye,bumpMap:C,normalMap:Q,displacementMap:V,emissiveMap:D,normalMapObjectSpace:Q&&v.normalMapType===_m,normalMapTangentSpace:Q&&v.normalMapType===Dc,packedNormalMap:Q&&v.normalMapType===Dc&&k1(v.normalMap.format),metalnessMap:pe,roughnessMap:Ae,anisotropy:Fe,anisotropyMap:ae,clearcoat:Me,clearcoatMap:ge,clearcoatNormalMap:Te,clearcoatRoughnessMap:Re,dispersion:ot,iridescence:P,iridescenceMap:le,iridescenceThicknessMap:me,sheen:w,sheenColorMap:Oe,sheenRoughnessMap:Ge,specularMap:Pe,specularColorMap:Ce,specularIntensityMap:at,transmission:K,transmissionMap:dt,thicknessMap:wt,gradientMap:z,opaque:v.transparent===!1&&v.blending===rs&&v.alphaToCoverage===!1,alphaMap:Se,alphaTest:he,alphaHash:He,combine:v.combine,mapUv:k&&p(v.map.channel),aoMapUv:ee&&p(v.aoMap.channel),lightMapUv:ye&&p(v.lightMap.channel),bumpMapUv:C&&p(v.bumpMap.channel),normalMapUv:Q&&p(v.normalMap.channel),displacementMapUv:V&&p(v.displacementMap.channel),emissiveMapUv:D&&p(v.emissiveMap.channel),metalnessMapUv:pe&&p(v.metalnessMap.channel),roughnessMapUv:Ae&&p(v.roughnessMap.channel),anisotropyMapUv:ae&&p(v.anisotropyMap.channel),clearcoatMapUv:ge&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:Te&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:me&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&p(v.sheenRoughnessMap.channel),specularMapUv:Pe&&p(v.specularMap.channel),specularColorMapUv:Ce&&p(v.specularColorMap.channel),specularIntensityMapUv:at&&p(v.specularIntensityMap.channel),transmissionMapUv:dt&&p(v.transmissionMap.channel),thicknessMapUv:wt&&p(v.thicknessMap.channel),alphaMapUv:Se&&p(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Q||Fe),vertexNormals:!!N.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!N.attributes.uv&&(k||Se),fog:!!q,useFog:v.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||N.attributes.normal===void 0&&Q===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:O,skinning:L.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ze,morphTextureStride:Qe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&S.length>0,shadowMapType:n.shadowMap.type,toneMapping:be,decodeVideoTexture:k&&v.map.isVideoTexture===!0&&_t.getTransfer(v.map.colorSpace)===Ct,decodeVideoTextureEmissive:D&&v.emissiveMap.isVideoTexture===!0&&_t.getTransfer(v.emissiveMap.colorSpace)===Ct,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Pn,flipSided:v.side===yn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ie&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&v.extensions.multiDraw===!0||de)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ze.vertexUv1s=c.has(1),Ze.vertexUv2s=c.has(2),Ze.vertexUv3s=c.has(3),c.clear(),Ze}function m(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let S in v.defines)b.push(S),b.push(v.defines[S]);return v.isRawShaderMaterial===!1&&(g(b,v),y(b,v),b.push(n.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function g(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function y(v,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),v.push(o.mask)}function _(v){let b=u[v.type],S;if(b){let R=Ti[b];S=Um.clone(R.uniforms)}else S=v.uniforms;return S}function M(v,b){let S=f.get(b);return S!==void 0?++S.usedTimes:(S=new L1(n,b,v,s),l.push(S),f.set(b,S)),S}function E(v){if(--v.usedTimes===0){let b=l.indexOf(v);l[b]=l[l.length-1],l.pop(),f.delete(v.cacheKey),v.destroy()}}function T(v){a.remove(v)}function I(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:_,acquireProgram:M,releaseProgram:E,releaseShaderCache:T,programs:l,dispose:I}}function F1(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function O1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function n0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function i0(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function a(d,u,p,x,m,g){let y=n[e];return y===void 0?(y={id:d.id,object:d,geometry:u,material:p,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:g},n[e]=y):(y.id=d.id,y.object=d,y.geometry=u,y.material=p,y.materialVariant=o(d),y.groupOrder=x,y.renderOrder=d.renderOrder,y.z=m,y.group=g),e++,y}function c(d,u,p,x,m,g){let y=a(d,u,p,x,m,g);p.transmission>0?i.push(y):p.transparent===!0?s.push(y):t.push(y)}function l(d,u,p,x,m,g){let y=a(d,u,p,x,m,g);p.transmission>0?i.unshift(y):p.transparent===!0?s.unshift(y):t.unshift(y)}function f(d,u){t.length>1&&t.sort(d||O1),i.length>1&&i.sort(u||n0),s.length>1&&s.sort(u||n0)}function h(){for(let d=e,u=n.length;d<u;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:h,sort:f}}function B1(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new i0,n.set(i,[o])):s>=r.length?(o=new i0,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function H1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new rt};break;case"SpotLight":t={position:new U,direction:new U,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function z1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var V1=0;function G1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function W1(n){let e=new H1,t=z1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new U);let s=new U,r=new vt,o=new vt;function a(l){let f=0,h=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let u=0,p=0,x=0,m=0,g=0,y=0,_=0,M=0,E=0,T=0,I=0;l.sort(G1);for(let b=0,S=l.length;b<S;b++){let R=l[b],L=R.color,X=R.intensity,q=R.distance,N=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===us?N=R.shadow.map.texture:N=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)f+=L.r*X,h+=L.g*X,d+=L.b*X;else if(R.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(R.sh.coefficients[B],X);I++}else if(R.isDirectionalLight){let B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Z=R.shadow,ce=t.get(R);ce.shadowIntensity=Z.intensity,ce.shadowBias=Z.bias,ce.shadowNormalBias=Z.normalBias,ce.shadowRadius=Z.radius,ce.shadowMapSize=Z.mapSize,i.directionalShadow[u]=ce,i.directionalShadowMap[u]=N,i.directionalShadowMatrix[u]=R.shadow.matrix,y++}i.directional[u]=B,u++}else if(R.isSpotLight){let B=e.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(L).multiplyScalar(X),B.distance=q,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,i.spot[x]=B;let Z=R.shadow;if(R.map&&(i.spotLightMap[E]=R.map,E++,Z.updateMatrices(R),R.castShadow&&T++),i.spotLightMatrix[x]=Z.matrix,R.castShadow){let ce=t.get(R);ce.shadowIntensity=Z.intensity,ce.shadowBias=Z.bias,ce.shadowNormalBias=Z.normalBias,ce.shadowRadius=Z.radius,ce.shadowMapSize=Z.mapSize,i.spotShadow[x]=ce,i.spotShadowMap[x]=N,M++}x++}else if(R.isRectAreaLight){let B=e.get(R);B.color.copy(L).multiplyScalar(X),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=B,m++}else if(R.isPointLight){let B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),B.distance=R.distance,B.decay=R.decay,R.castShadow){let Z=R.shadow,ce=t.get(R);ce.shadowIntensity=Z.intensity,ce.shadowBias=Z.bias,ce.shadowNormalBias=Z.normalBias,ce.shadowRadius=Z.radius,ce.shadowMapSize=Z.mapSize,ce.shadowCameraNear=Z.camera.near,ce.shadowCameraFar=Z.camera.far,i.pointShadow[p]=ce,i.pointShadowMap[p]=N,i.pointShadowMatrix[p]=R.shadow.matrix,_++}i.point[p]=B,p++}else if(R.isHemisphereLight){let B=e.get(R);B.skyColor.copy(R.color).multiplyScalar(X),B.groundColor.copy(R.groundColor).multiplyScalar(X),i.hemi[g]=B,g++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Le.LTC_FLOAT_1,i.rectAreaLTC2=Le.LTC_FLOAT_2):(i.rectAreaLTC1=Le.LTC_HALF_1,i.rectAreaLTC2=Le.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;let v=i.hash;(v.directionalLength!==u||v.pointLength!==p||v.spotLength!==x||v.rectAreaLength!==m||v.hemiLength!==g||v.numDirectionalShadows!==y||v.numPointShadows!==_||v.numSpotShadows!==M||v.numSpotMaps!==E||v.numLightProbes!==I)&&(i.directional.length=u,i.spot.length=x,i.rectArea.length=m,i.point.length=p,i.hemi.length=g,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+E-T,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=I,v.directionalLength=u,v.pointLength=p,v.spotLength=x,v.rectAreaLength=m,v.hemiLength=g,v.numDirectionalShadows=y,v.numPointShadows=_,v.numSpotShadows=M,v.numSpotMaps=E,v.numLightProbes=I,i.version=V1++)}function c(l,f){let h=0,d=0,u=0,p=0,x=0,m=f.matrixWorldInverse;for(let g=0,y=l.length;g<y;g++){let _=l[g];if(_.isDirectionalLight){let M=i.directional[h];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(_.isSpotLight){let M=i.spot[u];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(_.isRectAreaLight){let M=i.rectArea[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),p++}else if(_.isPointLight){let M=i.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let M=i.hemi[x];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:i}}function s0(n){let e=new W1(n),t=[],i=[],s=[];function r(d){h.camera=d,t.length=0,i.length=0,s.length=0}function o(d){t.push(d)}function a(d){i.push(d)}function c(d){s.push(d)}function l(){e.setup(t)}function f(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:f,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function X1(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new s0(n),e.set(s,[a])):r>=o.length?(a=new s0(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var q1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y1=`uniform sampler2D shadow_pass;
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
}`,Z1=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],K1=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],r0=new vt,Qo=new U,Yf=new U;function $1(n,e,t){let i=new Tr,s=new ke,r=new ke,o=new $t,a=new Il,c=new Dl,l={},f=t.maxTextureSize,h={[Bi]:yn,[yn]:Bi,[Pn]:Pn},d=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:q1,fragmentShader:Y1}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let p=new Yt;p.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new _e(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Go;let g=this.type;this.render=function(T,I,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===$p&&(it("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Go);let b=n.getRenderTarget(),S=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),L=n.state;L.setBlending(vi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let X=g!==this.type;X&&I.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(N=>N.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,N=T.length;q<N;q++){let B=T[q],Z=B.shadow;if(Z===void 0){it("WebGLShadowMap:",B,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let ce=Z.getFrameExtents();s.multiply(ce),r.copy(Z.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/ce.x),s.x=r.x*ce.x,Z.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/ce.y),s.y=r.y*ce.y,Z.mapSize.y=r.y));let ue=n.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=ue,Z.map===null||X===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===Sr){if(B.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Fn(s.x,s.y,{format:us,type:bi,minFilter:xn,magFilter:xn,generateMipmaps:!1}),Z.map.texture.name=B.name+".shadowMap",Z.map.depthTexture=new Wi(s.x,s.y,Zn),Z.map.depthTexture.name=B.name+".shadowMapDepth",Z.map.depthTexture.format=di,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=mn,Z.map.depthTexture.magFilter=mn}else B.isPointLight?(Z.map=new Oc(s.x),Z.map.depthTexture=new bl(s.x,ii)):(Z.map=new Fn(s.x,s.y),Z.map.depthTexture=new Wi(s.x,s.y,ii)),Z.map.depthTexture.name=B.name+".shadowMap",Z.map.depthTexture.format=di,this.type===Go?(Z.map.depthTexture.compareFunction=ue?Nc:Lc,Z.map.depthTexture.minFilter=xn,Z.map.depthTexture.magFilter=xn):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=mn,Z.map.depthTexture.magFilter=mn);Z.camera.updateProjectionMatrix()}let Ee=Z.map.isWebGLCubeRenderTarget?6:1;for(let De=0;De<Ee;De++){if(Z.map.isWebGLCubeRenderTarget)n.setRenderTarget(Z.map,De),n.clear();else{De===0&&(n.setRenderTarget(Z.map),n.clear());let ze=Z.getViewport(De);o.set(r.x*ze.x,r.y*ze.y,r.x*ze.z,r.y*ze.w),L.viewport(o)}if(B.isPointLight){let ze=Z.camera,Qe=Z.matrix,se=B.distance||ze.far;se!==ze.far&&(ze.far=se,ze.updateProjectionMatrix()),Qo.setFromMatrixPosition(B.matrixWorld),ze.position.copy(Qo),Yf.copy(ze.position),Yf.add(Z1[De]),ze.up.copy(K1[De]),ze.lookAt(Yf),ze.updateMatrixWorld(),Qe.makeTranslation(-Qo.x,-Qo.y,-Qo.z),r0.multiplyMatrices(ze.projectionMatrix,ze.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(r0,ze.coordinateSystem,ze.reversedDepth)}else Z.updateMatrices(B);i=Z.getFrustum(),M(I,v,Z.camera,B,this.type)}Z.isPointLightShadow!==!0&&this.type===Sr&&y(Z,v),Z.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(b,S,R)};function y(T,I){let v=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,u.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Fn(s.x,s.y,{format:us,type:bi})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(I,null,v,d,x,null),u.uniforms.shadow_pass.value=T.mapPass.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(I,null,v,u,x,null)}function _(T,I,v,b){let S=null,R=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)S=R;else if(S=v.isPointLight===!0?c:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let L=S.uuid,X=I.uuid,q=l[L];q===void 0&&(q={},l[L]=q);let N=q[X];N===void 0&&(N=S.clone(),q[X]=N,I.addEventListener("dispose",E)),S=N}if(S.visible=I.visible,S.wireframe=I.wireframe,b===Sr?S.side=I.shadowSide!==null?I.shadowSide:I.side:S.side=I.shadowSide!==null?I.shadowSide:h[I.side],S.alphaMap=I.alphaMap,S.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,S.map=I.map,S.clipShadows=I.clipShadows,S.clippingPlanes=I.clippingPlanes,S.clipIntersection=I.clipIntersection,S.displacementMap=I.displacementMap,S.displacementScale=I.displacementScale,S.displacementBias=I.displacementBias,S.wireframeLinewidth=I.wireframeLinewidth,S.linewidth=I.linewidth,v.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let L=n.properties.get(S);L.light=v}return S}function M(T,I,v,b,S){if(T.visible===!1)return;if(T.layers.test(I.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Sr)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);let X=e.update(T),q=T.material;if(Array.isArray(q)){let N=X.groups;for(let B=0,Z=N.length;B<Z;B++){let ce=N[B],ue=q[ce.materialIndex];if(ue&&ue.visible){let Ee=_(T,ue,b,S);T.onBeforeShadow(n,T,I,v,X,Ee,ce),n.renderBufferDirect(v,null,X,Ee,T,ce),T.onAfterShadow(n,T,I,v,X,Ee,ce)}}}else if(q.visible){let N=_(T,q,b,S);T.onBeforeShadow(n,T,I,v,X,N,null),n.renderBufferDirect(v,null,X,N,T,null),T.onAfterShadow(n,T,I,v,X,N,null)}}let L=T.children;for(let X=0,q=L.length;X<q;X++)M(L[X],I,v,b,S)}function E(T){T.target.removeEventListener("dispose",E);for(let v in l){let b=l[v],S=T.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}function J1(n,e){function t(){let z=!1,Se=new $t,he=null,He=new $t(0,0,0,0);return{setMask:function(Ie){he!==Ie&&!z&&(n.colorMask(Ie,Ie,Ie,Ie),he=Ie)},setLocked:function(Ie){z=Ie},setClear:function(Ie,be,Ze,ct,tn){tn===!0&&(Ie*=ct,be*=ct,Ze*=ct),Se.set(Ie,be,Ze,ct),He.equals(Se)===!1&&(n.clearColor(Ie,be,Ze,ct),He.copy(Se))},reset:function(){z=!1,he=null,He.set(-1,0,0,0)}}}function i(){let z=!1,Se=!1,he=null,He=null,Ie=null;return{setReversed:function(be){if(Se!==be){let Ze=e.get("EXT_clip_control");be?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),Se=be;let ct=Ie;Ie=null,this.setClear(ct)}},getReversed:function(){return Se},setTest:function(be){be?oe(n.DEPTH_TEST):O(n.DEPTH_TEST)},setMask:function(be){he!==be&&!z&&(n.depthMask(be),he=be)},setFunc:function(be){if(Se&&(be=Sm[be]),He!==be){switch(be){case ol:n.depthFunc(n.NEVER);break;case al:n.depthFunc(n.ALWAYS);break;case ll:n.depthFunc(n.LESS);break;case Ss:n.depthFunc(n.LEQUAL);break;case cl:n.depthFunc(n.EQUAL);break;case hl:n.depthFunc(n.GEQUAL);break;case fl:n.depthFunc(n.GREATER);break;case dl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}He=be}},setLocked:function(be){z=be},setClear:function(be){Ie!==be&&(Ie=be,Se&&(be=1-be),n.clearDepth(be))},reset:function(){z=!1,he=null,He=null,Ie=null,Se=!1}}}function s(){let z=!1,Se=null,he=null,He=null,Ie=null,be=null,Ze=null,ct=null,tn=null;return{setTest:function(It){z||(It?oe(n.STENCIL_TEST):O(n.STENCIL_TEST))},setMask:function(It){Se!==It&&!z&&(n.stencilMask(It),Se=It)},setFunc:function(It,Ei,si){(he!==It||He!==Ei||Ie!==si)&&(n.stencilFunc(It,Ei,si),he=It,He=Ei,Ie=si)},setOp:function(It,Ei,si){(be!==It||Ze!==Ei||ct!==si)&&(n.stencilOp(It,Ei,si),be=It,Ze=Ei,ct=si)},setLocked:function(It){z=It},setClear:function(It){tn!==It&&(n.clearStencil(It),tn=It)},reset:function(){z=!1,Se=null,he=null,He=null,Ie=null,be=null,Ze=null,ct=null,tn=null}}}let r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap,f={},h={},d={},u=new WeakMap,p=[],x=null,m=!1,g=null,y=null,_=null,M=null,E=null,T=null,I=null,v=new rt(0,0,0),b=0,S=!1,R=null,L=null,X=null,q=null,N=null,B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,ce=0,ue=n.getParameter(n.VERSION);ue.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(ue)[1]),Z=ce>=1):ue.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),Z=ce>=2);let Ee=null,De={},ze=n.getParameter(n.SCISSOR_BOX),Qe=n.getParameter(n.VIEWPORT),se=new $t().fromArray(ze),re=new $t().fromArray(Qe);function F(z,Se,he,He){let Ie=new Uint8Array(4),be=n.createTexture();n.bindTexture(z,be),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ze=0;Ze<he;Ze++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(Se,0,n.RGBA,1,1,He,0,n.RGBA,n.UNSIGNED_BYTE,Ie):n.texImage2D(Se+Ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ie);return be}let ne={};ne[n.TEXTURE_2D]=F(n.TEXTURE_2D,n.TEXTURE_2D,1),ne[n.TEXTURE_CUBE_MAP]=F(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[n.TEXTURE_2D_ARRAY]=F(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ne[n.TEXTURE_3D]=F(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(n.DEPTH_TEST),o.setFunc(Ss),C(!1),Q(_f),oe(n.CULL_FACE),ee(vi);function oe(z){f[z]!==!0&&(n.enable(z),f[z]=!0)}function O(z){f[z]!==!1&&(n.disable(z),f[z]=!1)}function W(z,Se){return d[z]!==Se?(n.bindFramebuffer(z,Se),d[z]=Se,z===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Se),z===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Se),!0):!1}function de(z,Se){let he=p,He=!1;if(z){he=u.get(Se),he===void 0&&(he=[],u.set(Se,he));let Ie=z.textures;if(he.length!==Ie.length||he[0]!==n.COLOR_ATTACHMENT0){for(let be=0,Ze=Ie.length;be<Ze;be++)he[be]=n.COLOR_ATTACHMENT0+be;he.length=Ie.length,He=!0}}else he[0]!==n.BACK&&(he[0]=n.BACK,He=!0);He&&n.drawBuffers(he)}function k(z){return x!==z?(n.useProgram(z),x=z,!0):!1}let H={[os]:n.FUNC_ADD,[jp]:n.FUNC_SUBTRACT,[Qp]:n.FUNC_REVERSE_SUBTRACT};H[em]=n.MIN,H[tm]=n.MAX;let $={[nm]:n.ZERO,[im]:n.ONE,[sm]:n.SRC_COLOR,[sl]:n.SRC_ALPHA,[hm]:n.SRC_ALPHA_SATURATE,[lm]:n.DST_COLOR,[om]:n.DST_ALPHA,[rm]:n.ONE_MINUS_SRC_COLOR,[rl]:n.ONE_MINUS_SRC_ALPHA,[cm]:n.ONE_MINUS_DST_COLOR,[am]:n.ONE_MINUS_DST_ALPHA,[fm]:n.CONSTANT_COLOR,[dm]:n.ONE_MINUS_CONSTANT_COLOR,[um]:n.CONSTANT_ALPHA,[pm]:n.ONE_MINUS_CONSTANT_ALPHA};function ee(z,Se,he,He,Ie,be,Ze,ct,tn,It){if(z===vi){m===!0&&(O(n.BLEND),m=!1);return}if(m===!1&&(oe(n.BLEND),m=!0),z!==Jp){if(z!==g||It!==S){if((y!==os||E!==os)&&(n.blendEquation(n.FUNC_ADD),y=os,E=os),It)switch(z){case rs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wn:n.blendFunc(n.ONE,n.ONE);break;case vf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:nt("WebGLState: Invalid blending: ",z);break}else switch(z){case rs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case vf:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mf:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",z);break}_=null,M=null,T=null,I=null,v.set(0,0,0),b=0,g=z,S=It}return}Ie=Ie||Se,be=be||he,Ze=Ze||He,(Se!==y||Ie!==E)&&(n.blendEquationSeparate(H[Se],H[Ie]),y=Se,E=Ie),(he!==_||He!==M||be!==T||Ze!==I)&&(n.blendFuncSeparate($[he],$[He],$[be],$[Ze]),_=he,M=He,T=be,I=Ze),(ct.equals(v)===!1||tn!==b)&&(n.blendColor(ct.r,ct.g,ct.b,tn),v.copy(ct),b=tn),g=z,S=!1}function ye(z,Se){z.side===Pn?O(n.CULL_FACE):oe(n.CULL_FACE);let he=z.side===yn;Se&&(he=!he),C(he),z.blending===rs&&z.transparent===!1?ee(vi):ee(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let He=z.stencilWrite;a.setTest(He),He&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),D(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):O(n.SAMPLE_ALPHA_TO_COVERAGE)}function C(z){R!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),R=z)}function Q(z){z!==Zp?(oe(n.CULL_FACE),z!==L&&(z===_f?n.cullFace(n.BACK):z===Kp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):O(n.CULL_FACE),L=z}function V(z){z!==X&&(Z&&n.lineWidth(z),X=z)}function D(z,Se,he){z?(oe(n.POLYGON_OFFSET_FILL),(q!==Se||N!==he)&&(q=Se,N=he,o.getReversed()&&(Se=-Se),n.polygonOffset(Se,he))):O(n.POLYGON_OFFSET_FILL)}function pe(z){z?oe(n.SCISSOR_TEST):O(n.SCISSOR_TEST)}function Ae(z){z===void 0&&(z=n.TEXTURE0+B-1),Ee!==z&&(n.activeTexture(z),Ee=z)}function Fe(z,Se,he){he===void 0&&(Ee===null?he=n.TEXTURE0+B-1:he=Ee);let He=De[he];He===void 0&&(He={type:void 0,texture:void 0},De[he]=He),(He.type!==z||He.texture!==Se)&&(Ee!==he&&(n.activeTexture(he),Ee=he),n.bindTexture(z,Se||ne[z]),He.type=z,He.texture=Se)}function Me(){let z=De[Ee];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ot(){try{n.compressedTexImage2D(...arguments)}catch(z){nt("WebGLState:",z)}}function P(){try{n.compressedTexImage3D(...arguments)}catch(z){nt("WebGLState:",z)}}function w(){try{n.texSubImage2D(...arguments)}catch(z){nt("WebGLState:",z)}}function K(){try{n.texSubImage3D(...arguments)}catch(z){nt("WebGLState:",z)}}function ae(){try{n.compressedTexSubImage2D(...arguments)}catch(z){nt("WebGLState:",z)}}function ge(){try{n.compressedTexSubImage3D(...arguments)}catch(z){nt("WebGLState:",z)}}function Te(){try{n.texStorage2D(...arguments)}catch(z){nt("WebGLState:",z)}}function Re(){try{n.texStorage3D(...arguments)}catch(z){nt("WebGLState:",z)}}function le(){try{n.texImage2D(...arguments)}catch(z){nt("WebGLState:",z)}}function me(){try{n.texImage3D(...arguments)}catch(z){nt("WebGLState:",z)}}function Oe(z){return h[z]!==void 0?h[z]:n.getParameter(z)}function Ge(z,Se){h[z]!==Se&&(n.pixelStorei(z,Se),h[z]=Se)}function Pe(z){se.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),se.copy(z))}function Ce(z){re.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),re.copy(z))}function at(z,Se){let he=l.get(Se);he===void 0&&(he=new WeakMap,l.set(Se,he));let He=he.get(z);He===void 0&&(He=n.getUniformBlockIndex(Se,z.name),he.set(z,He))}function dt(z,Se){let He=l.get(Se).get(z);c.get(Se)!==He&&(n.uniformBlockBinding(Se,He,z.__bindingPointIndex),c.set(Se,He))}function wt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),f={},h={},Ee=null,De={},d={},u=new WeakMap,p=[],x=null,m=!1,g=null,y=null,_=null,M=null,E=null,T=null,I=null,v=new rt(0,0,0),b=0,S=!1,R=null,L=null,X=null,q=null,N=null,se.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:oe,disable:O,bindFramebuffer:W,drawBuffers:de,useProgram:k,setBlending:ee,setMaterial:ye,setFlipSided:C,setCullFace:Q,setLineWidth:V,setPolygonOffset:D,setScissorTest:pe,activeTexture:Ae,bindTexture:Fe,unbindTexture:Me,compressedTexImage2D:ot,compressedTexImage3D:P,texImage2D:le,texImage3D:me,pixelStorei:Ge,getParameter:Oe,updateUBOMapping:at,uniformBlockBinding:dt,texStorage2D:Te,texStorage3D:Re,texSubImage2D:w,texSubImage3D:K,compressedTexSubImage2D:ae,compressedTexSubImage3D:ge,scissor:Pe,viewport:Ce,reset:wt}}function j1(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ke,f=new WeakMap,h=new Set,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,w){return p?new OffscreenCanvas(P,w):yo("canvas")}function m(P,w,K){let ae=1,ge=ot(P);if((ge.width>K||ge.height>K)&&(ae=K/Math.max(ge.width,ge.height)),ae<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let Te=Math.floor(ae*ge.width),Re=Math.floor(ae*ge.height);d===void 0&&(d=x(Te,Re));let le=w?x(Te,Re):d;return le.width=Te,le.height=Re,le.getContext("2d").drawImage(P,0,0,Te,Re),it("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Te+"x"+Re+")."),le}else return"data"in P&&it("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),P;return P}function g(P){return P.generateMipmaps}function y(P){n.generateMipmap(P)}function _(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(P,w,K,ae,ge,Te=!1){if(P!==null){if(n[P]!==void 0)return n[P];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Re;ae&&(Re=e.get("EXT_texture_norm16"),Re||it("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let le=w;if(w===n.RED&&(K===n.FLOAT&&(le=n.R32F),K===n.HALF_FLOAT&&(le=n.R16F),K===n.UNSIGNED_BYTE&&(le=n.R8),K===n.UNSIGNED_SHORT&&Re&&(le=Re.R16_EXT),K===n.SHORT&&Re&&(le=Re.R16_SNORM_EXT)),w===n.RED_INTEGER&&(K===n.UNSIGNED_BYTE&&(le=n.R8UI),K===n.UNSIGNED_SHORT&&(le=n.R16UI),K===n.UNSIGNED_INT&&(le=n.R32UI),K===n.BYTE&&(le=n.R8I),K===n.SHORT&&(le=n.R16I),K===n.INT&&(le=n.R32I)),w===n.RG&&(K===n.FLOAT&&(le=n.RG32F),K===n.HALF_FLOAT&&(le=n.RG16F),K===n.UNSIGNED_BYTE&&(le=n.RG8),K===n.UNSIGNED_SHORT&&Re&&(le=Re.RG16_EXT),K===n.SHORT&&Re&&(le=Re.RG16_SNORM_EXT)),w===n.RG_INTEGER&&(K===n.UNSIGNED_BYTE&&(le=n.RG8UI),K===n.UNSIGNED_SHORT&&(le=n.RG16UI),K===n.UNSIGNED_INT&&(le=n.RG32UI),K===n.BYTE&&(le=n.RG8I),K===n.SHORT&&(le=n.RG16I),K===n.INT&&(le=n.RG32I)),w===n.RGB_INTEGER&&(K===n.UNSIGNED_BYTE&&(le=n.RGB8UI),K===n.UNSIGNED_SHORT&&(le=n.RGB16UI),K===n.UNSIGNED_INT&&(le=n.RGB32UI),K===n.BYTE&&(le=n.RGB8I),K===n.SHORT&&(le=n.RGB16I),K===n.INT&&(le=n.RGB32I)),w===n.RGBA_INTEGER&&(K===n.UNSIGNED_BYTE&&(le=n.RGBA8UI),K===n.UNSIGNED_SHORT&&(le=n.RGBA16UI),K===n.UNSIGNED_INT&&(le=n.RGBA32UI),K===n.BYTE&&(le=n.RGBA8I),K===n.SHORT&&(le=n.RGBA16I),K===n.INT&&(le=n.RGBA32I)),w===n.RGB&&(K===n.UNSIGNED_SHORT&&Re&&(le=Re.RGB16_EXT),K===n.SHORT&&Re&&(le=Re.RGB16_SNORM_EXT),K===n.UNSIGNED_INT_5_9_9_9_REV&&(le=n.RGB9_E5),K===n.UNSIGNED_INT_10F_11F_11F_REV&&(le=n.R11F_G11F_B10F)),w===n.RGBA){let me=Te?xo:_t.getTransfer(ge);K===n.FLOAT&&(le=n.RGBA32F),K===n.HALF_FLOAT&&(le=n.RGBA16F),K===n.UNSIGNED_BYTE&&(le=me===Ct?n.SRGB8_ALPHA8:n.RGBA8),K===n.UNSIGNED_SHORT&&Re&&(le=Re.RGBA16_EXT),K===n.SHORT&&Re&&(le=Re.RGBA16_SNORM_EXT),K===n.UNSIGNED_SHORT_4_4_4_4&&(le=n.RGBA4),K===n.UNSIGNED_SHORT_5_5_5_1&&(le=n.RGB5_A1)}return(le===n.R16F||le===n.R32F||le===n.RG16F||le===n.RG32F||le===n.RGBA16F||le===n.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function E(P,w){let K;return P?w===null||w===ii||w===Ir?K=n.DEPTH24_STENCIL8:w===Zn?K=n.DEPTH32F_STENCIL8:w===Pr&&(K=n.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ii||w===Ir?K=n.DEPTH_COMPONENT24:w===Zn?K=n.DEPTH_COMPONENT32F:w===Pr&&(K=n.DEPTH_COMPONENT16),K}function T(P,w){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==mn&&P.minFilter!==xn?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function I(P){let w=P.target;w.removeEventListener("dispose",I),b(w),w.isVideoTexture&&f.delete(w),w.isHTMLTexture&&h.delete(w)}function v(P){let w=P.target;w.removeEventListener("dispose",v),R(w)}function b(P){let w=i.get(P);if(w.__webglInit===void 0)return;let K=P.source,ae=u.get(K);if(ae){let ge=ae[w.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&S(P),Object.keys(ae).length===0&&u.delete(K)}i.remove(P)}function S(P){let w=i.get(P);n.deleteTexture(w.__webglTexture);let K=P.source,ae=u.get(K);delete ae[w.__cacheKey],o.memory.textures--}function R(P){let w=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(w.__webglFramebuffer[ae]))for(let ge=0;ge<w.__webglFramebuffer[ae].length;ge++)n.deleteFramebuffer(w.__webglFramebuffer[ae][ge]);else n.deleteFramebuffer(w.__webglFramebuffer[ae]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[ae])}else{if(Array.isArray(w.__webglFramebuffer))for(let ae=0;ae<w.__webglFramebuffer.length;ae++)n.deleteFramebuffer(w.__webglFramebuffer[ae]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ae=0;ae<w.__webglColorRenderbuffer.length;ae++)w.__webglColorRenderbuffer[ae]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[ae]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let K=P.textures;for(let ae=0,ge=K.length;ae<ge;ae++){let Te=i.get(K[ae]);Te.__webglTexture&&(n.deleteTexture(Te.__webglTexture),o.memory.textures--),i.remove(K[ae])}i.remove(P)}let L=0;function X(){L=0}function q(){return L}function N(P){L=P}function B(){let P=L;return P>=s.maxTextures&&it("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),L+=1,P}function Z(P){let w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function ce(P,w){let K=i.get(P);if(P.isVideoTexture&&Fe(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&K.__version!==P.version){let ae=P.image;if(ae===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{O(K,P,w);return}}else P.isExternalTexture&&(K.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,K.__webglTexture,n.TEXTURE0+w)}function ue(P,w){let K=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){O(K,P,w);return}else P.isExternalTexture&&(K.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,K.__webglTexture,n.TEXTURE0+w)}function Ee(P,w){let K=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){O(K,P,w);return}t.bindTexture(n.TEXTURE_3D,K.__webglTexture,n.TEXTURE0+w)}function De(P,w){let K=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&K.__version!==P.version){W(K,P,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture,n.TEXTURE0+w)}let ze={[fi]:n.REPEAT,[hi]:n.CLAMP_TO_EDGE,[ul]:n.MIRRORED_REPEAT},Qe={[mn]:n.NEAREST,[xm]:n.NEAREST_MIPMAP_NEAREST,[Xo]:n.NEAREST_MIPMAP_LINEAR,[xn]:n.LINEAR,[Zl]:n.LINEAR_MIPMAP_NEAREST,[Mi]:n.LINEAR_MIPMAP_LINEAR},se={[vm]:n.NEVER,[Em]:n.ALWAYS,[Mm]:n.LESS,[Lc]:n.LEQUAL,[bm]:n.EQUAL,[Nc]:n.GEQUAL,[wm]:n.GREATER,[Tm]:n.NOTEQUAL};function re(P,w){if(w.type===Zn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===xn||w.magFilter===Zl||w.magFilter===Xo||w.magFilter===Mi||w.minFilter===xn||w.minFilter===Zl||w.minFilter===Xo||w.minFilter===Mi)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,ze[w.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,ze[w.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,ze[w.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,Qe[w.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,Qe[w.minFilter]),w.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,se[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===mn||w.minFilter!==Xo&&w.minFilter!==Mi||w.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){let K=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function F(P,w){let K=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",I));let ae=w.source,ge=u.get(ae);ge===void 0&&(ge={},u.set(ae,ge));let Te=Z(w);if(Te!==P.__cacheKey){ge[Te]===void 0&&(ge[Te]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,K=!0),ge[Te].usedTimes++;let Re=ge[P.__cacheKey];Re!==void 0&&(ge[P.__cacheKey].usedTimes--,Re.usedTimes===0&&S(w)),P.__cacheKey=Te,P.__webglTexture=ge[Te].texture}return K}function ne(P,w,K){return Math.floor(Math.floor(P/K)/w)}function oe(P,w,K,ae){let Te=P.updateRanges;if(Te.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,K,ae,w.data);else{Te.sort((Ge,Pe)=>Ge.start-Pe.start);let Re=0;for(let Ge=1;Ge<Te.length;Ge++){let Pe=Te[Re],Ce=Te[Ge],at=Pe.start+Pe.count,dt=ne(Ce.start,w.width,4),wt=ne(Pe.start,w.width,4);Ce.start<=at+1&&dt===wt&&ne(Ce.start+Ce.count-1,w.width,4)===dt?Pe.count=Math.max(Pe.count,Ce.start+Ce.count-Pe.start):(++Re,Te[Re]=Ce)}Te.length=Re+1;let le=t.getParameter(n.UNPACK_ROW_LENGTH),me=t.getParameter(n.UNPACK_SKIP_PIXELS),Oe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let Ge=0,Pe=Te.length;Ge<Pe;Ge++){let Ce=Te[Ge],at=Math.floor(Ce.start/4),dt=Math.ceil(Ce.count/4),wt=at%w.width,z=Math.floor(at/w.width),Se=dt,he=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,wt),t.pixelStorei(n.UNPACK_SKIP_ROWS,z),t.texSubImage2D(n.TEXTURE_2D,0,wt,z,Se,he,K,ae,w.data)}P.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,le),t.pixelStorei(n.UNPACK_SKIP_PIXELS,me),t.pixelStorei(n.UNPACK_SKIP_ROWS,Oe)}}function O(P,w,K){let ae=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ae=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ae=n.TEXTURE_3D);let ge=F(P,w),Te=w.source;t.bindTexture(ae,P.__webglTexture,n.TEXTURE0+K);let Re=i.get(Te);if(Te.version!==Re.__version||ge===!0){if(t.activeTexture(n.TEXTURE0+K),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let he=_t.getPrimaries(_t.workingColorSpace),He=w.colorSpace===Xi?null:_t.getPrimaries(w.colorSpace),Ie=w.colorSpace===Xi||he===He?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment);let me=m(w.image,!1,s.maxTextureSize);me=Me(w,me);let Oe=r.convert(w.format,w.colorSpace),Ge=r.convert(w.type),Pe=M(w.internalFormat,Oe,Ge,w.normalized,w.colorSpace,w.isVideoTexture);re(ae,w);let Ce,at=w.mipmaps,dt=w.isVideoTexture!==!0,wt=Re.__version===void 0||ge===!0,z=Te.dataReady,Se=T(w,me);if(w.isDepthTexture)Pe=E(w.format===ds,w.type),wt&&(dt?t.texStorage2D(n.TEXTURE_2D,1,Pe,me.width,me.height):t.texImage2D(n.TEXTURE_2D,0,Pe,me.width,me.height,0,Oe,Ge,null));else if(w.isDataTexture)if(at.length>0){dt&&wt&&t.texStorage2D(n.TEXTURE_2D,Se,Pe,at[0].width,at[0].height);for(let he=0,He=at.length;he<He;he++)Ce=at[he],dt?z&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Ce.width,Ce.height,Oe,Ge,Ce.data):t.texImage2D(n.TEXTURE_2D,he,Pe,Ce.width,Ce.height,0,Oe,Ge,Ce.data);w.generateMipmaps=!1}else dt?(wt&&t.texStorage2D(n.TEXTURE_2D,Se,Pe,me.width,me.height),z&&oe(w,me,Oe,Ge)):t.texImage2D(n.TEXTURE_2D,0,Pe,me.width,me.height,0,Oe,Ge,me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){dt&&wt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,Pe,at[0].width,at[0].height,me.depth);for(let he=0,He=at.length;he<He;he++)if(Ce=at[he],w.format!==Kn)if(Oe!==null)if(dt){if(z)if(w.layerUpdates.size>0){let Ie=zf(Ce.width,Ce.height,w.format,w.type);for(let be of w.layerUpdates){let Ze=Ce.data.subarray(be*Ie/Ce.data.BYTES_PER_ELEMENT,(be+1)*Ie/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,be,Ce.width,Ce.height,1,Oe,Ze)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Ce.width,Ce.height,me.depth,Oe,Ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,Pe,Ce.width,Ce.height,me.depth,0,Ce.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else dt?z&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Ce.width,Ce.height,me.depth,Oe,Ge,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,Pe,Ce.width,Ce.height,me.depth,0,Oe,Ge,Ce.data)}else{dt&&wt&&t.texStorage2D(n.TEXTURE_2D,Se,Pe,at[0].width,at[0].height);for(let he=0,He=at.length;he<He;he++)Ce=at[he],w.format!==Kn?Oe!==null?dt?z&&t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,Ce.width,Ce.height,Oe,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,he,Pe,Ce.width,Ce.height,0,Ce.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?z&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Ce.width,Ce.height,Oe,Ge,Ce.data):t.texImage2D(n.TEXTURE_2D,he,Pe,Ce.width,Ce.height,0,Oe,Ge,Ce.data)}else if(w.isDataArrayTexture)if(dt){if(wt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,Pe,me.width,me.height,me.depth),z)if(w.layerUpdates.size>0){let he=zf(me.width,me.height,w.format,w.type);for(let He of w.layerUpdates){let Ie=me.data.subarray(He*he/me.data.BYTES_PER_ELEMENT,(He+1)*he/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,He,me.width,me.height,1,Oe,Ge,Ie)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Oe,Ge,me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,me.width,me.height,me.depth,0,Oe,Ge,me.data);else if(w.isData3DTexture)dt?(wt&&t.texStorage3D(n.TEXTURE_3D,Se,Pe,me.width,me.height,me.depth),z&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Oe,Ge,me.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,me.width,me.height,me.depth,0,Oe,Ge,me.data);else if(w.isFramebufferTexture){if(wt)if(dt)t.texStorage2D(n.TEXTURE_2D,Se,Pe,me.width,me.height);else{let he=me.width,He=me.height;for(let Ie=0;Ie<Se;Ie++)t.texImage2D(n.TEXTURE_2D,Ie,Pe,he,He,0,Oe,Ge,null),he>>=1,He>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in n){let he=n.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),me.parentNode!==he){he.appendChild(me),h.add(w),he.onpaint=ct=>{let tn=ct.changedElements;for(let It of h)tn.includes(It.image)&&(It.needsUpdate=!0)},he.requestPaint();return}let He=0,Ie=n.RGBA,be=n.RGBA,Ze=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,He,Ie,be,Ze,me),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(at.length>0){if(dt&&wt){let he=ot(at[0]);t.texStorage2D(n.TEXTURE_2D,Se,Pe,he.width,he.height)}for(let he=0,He=at.length;he<He;he++)Ce=at[he],dt?z&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Oe,Ge,Ce):t.texImage2D(n.TEXTURE_2D,he,Pe,Oe,Ge,Ce);w.generateMipmaps=!1}else if(dt){if(wt){let he=ot(me);t.texStorage2D(n.TEXTURE_2D,Se,Pe,he.width,he.height)}z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Oe,Ge,me)}else t.texImage2D(n.TEXTURE_2D,0,Pe,Oe,Ge,me);g(w)&&y(ae),Re.__version=Te.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function W(P,w,K){if(w.image.length!==6)return;let ae=F(P,w),ge=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+K);let Te=i.get(ge);if(ge.version!==Te.__version||ae===!0){t.activeTexture(n.TEXTURE0+K);let Re=_t.getPrimaries(_t.workingColorSpace),le=w.colorSpace===Xi?null:_t.getPrimaries(w.colorSpace),me=w.colorSpace===Xi||Re===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let Oe=w.isCompressedTexture||w.image[0].isCompressedTexture,Ge=w.image[0]&&w.image[0].isDataTexture,Pe=[];for(let be=0;be<6;be++)!Oe&&!Ge?Pe[be]=m(w.image[be],!0,s.maxCubemapSize):Pe[be]=Ge?w.image[be].image:w.image[be],Pe[be]=Me(w,Pe[be]);let Ce=Pe[0],at=r.convert(w.format,w.colorSpace),dt=r.convert(w.type),wt=M(w.internalFormat,at,dt,w.normalized,w.colorSpace),z=w.isVideoTexture!==!0,Se=Te.__version===void 0||ae===!0,he=ge.dataReady,He=T(w,Ce);re(n.TEXTURE_CUBE_MAP,w);let Ie;if(Oe){z&&Se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,He,wt,Ce.width,Ce.height);for(let be=0;be<6;be++){Ie=Pe[be].mipmaps;for(let Ze=0;Ze<Ie.length;Ze++){let ct=Ie[Ze];w.format!==Kn?at!==null?z?he&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ze,0,0,ct.width,ct.height,at,ct.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ze,wt,ct.width,ct.height,0,ct.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ze,0,0,ct.width,ct.height,at,dt,ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ze,wt,ct.width,ct.height,0,at,dt,ct.data)}}}else{if(Ie=w.mipmaps,z&&Se){Ie.length>0&&He++;let be=ot(Pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,He,wt,be.width,be.height)}for(let be=0;be<6;be++)if(Ge){z?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Pe[be].width,Pe[be].height,at,dt,Pe[be].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,wt,Pe[be].width,Pe[be].height,0,at,dt,Pe[be].data);for(let Ze=0;Ze<Ie.length;Ze++){let tn=Ie[Ze].image[be].image;z?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ze+1,0,0,tn.width,tn.height,at,dt,tn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ze+1,wt,tn.width,tn.height,0,at,dt,tn.data)}}else{z?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,at,dt,Pe[be]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,wt,at,dt,Pe[be]);for(let Ze=0;Ze<Ie.length;Ze++){let ct=Ie[Ze];z?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ze+1,0,0,at,dt,ct.image[be]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ze+1,wt,at,dt,ct.image[be])}}}g(w)&&y(n.TEXTURE_CUBE_MAP),Te.__version=ge.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function de(P,w,K,ae,ge,Te){let Re=r.convert(K.format,K.colorSpace),le=r.convert(K.type),me=M(K.internalFormat,Re,le,K.normalized,K.colorSpace),Oe=i.get(w),Ge=i.get(K);if(Ge.__renderTarget=w,!Oe.__hasExternalTextures){let Pe=Math.max(1,w.width>>Te),Ce=Math.max(1,w.height>>Te);ge===n.TEXTURE_3D||ge===n.TEXTURE_2D_ARRAY?t.texImage3D(ge,Te,me,Pe,Ce,w.depth,0,Re,le,null):t.texImage2D(ge,Te,me,Pe,Ce,0,Re,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),Ae(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,ge,Ge.__webglTexture,0,pe(w)):(ge===n.TEXTURE_2D||ge>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ae,ge,Ge.__webglTexture,Te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function k(P,w,K){if(n.bindRenderbuffer(n.RENDERBUFFER,P),w.depthBuffer){let ae=w.depthTexture,ge=ae&&ae.isDepthTexture?ae.type:null,Te=E(w.stencilBuffer,ge),Re=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ae(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe(w),Te,w.width,w.height):K?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe(w),Te,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Te,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Re,n.RENDERBUFFER,P)}else{let ae=w.textures;for(let ge=0;ge<ae.length;ge++){let Te=ae[ge],Re=r.convert(Te.format,Te.colorSpace),le=r.convert(Te.type),me=M(Te.internalFormat,Re,le,Te.normalized,Te.colorSpace);Ae(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe(w),me,w.width,w.height):K?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe(w),me,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,me,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function H(P,w,K){let ae=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ge=i.get(w.depthTexture);if(ge.__renderTarget=w,(!ge.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ae){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,w.depthTexture.addEventListener("dispose",I)),ge.__webglTexture===void 0){ge.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ge.__webglTexture),re(n.TEXTURE_CUBE_MAP,w.depthTexture);let Oe=r.convert(w.depthTexture.format),Ge=r.convert(w.depthTexture.type),Pe;w.depthTexture.format===di?Pe=n.DEPTH_COMPONENT24:w.depthTexture.format===ds&&(Pe=n.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Pe,w.width,w.height,0,Oe,Ge,null)}}else ce(w.depthTexture,0);let Te=ge.__webglTexture,Re=pe(w),le=ae?n.TEXTURE_CUBE_MAP_POSITIVE_X+K:n.TEXTURE_2D,me=w.depthTexture.format===ds?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(w.depthTexture.format===di)Ae(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,le,Te,0,Re):n.framebufferTexture2D(n.FRAMEBUFFER,me,le,Te,0);else if(w.depthTexture.format===ds)Ae(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,le,Te,0,Re):n.framebufferTexture2D(n.FRAMEBUFFER,me,le,Te,0);else throw new Error("Unknown depthTexture format")}function $(P){let w=i.get(P),K=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){let ae=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ae){let ge=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ae.removeEventListener("dispose",ge)};ae.addEventListener("dispose",ge),w.__depthDisposeCallback=ge}w.__boundDepthTexture=ae}if(P.depthTexture&&!w.__autoAllocateDepthBuffer)if(K)for(let ae=0;ae<6;ae++)H(w.__webglFramebuffer[ae],P,ae);else{let ae=P.texture.mipmaps;ae&&ae.length>0?H(w.__webglFramebuffer[0],P,0):H(w.__webglFramebuffer,P,0)}else if(K){w.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[ae]),w.__webglDepthbuffer[ae]===void 0)w.__webglDepthbuffer[ae]=n.createRenderbuffer(),k(w.__webglDepthbuffer[ae],P,!1);else{let ge=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=w.__webglDepthbuffer[ae];n.bindRenderbuffer(n.RENDERBUFFER,Te),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,Te)}}else{let ae=P.texture.mipmaps;if(ae&&ae.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),k(w.__webglDepthbuffer,P,!1);else{let ge=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Te),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,Te)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(P,w,K){let ae=i.get(P);w!==void 0&&de(ae.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),K!==void 0&&$(P)}function ye(P){let w=P.texture,K=i.get(P),ae=i.get(w);P.addEventListener("dispose",v);let ge=P.textures,Te=P.isWebGLCubeRenderTarget===!0,Re=ge.length>1;if(Re||(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=w.version,o.memory.textures++),Te){K.__webglFramebuffer=[];for(let le=0;le<6;le++)if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer[le]=[];for(let me=0;me<w.mipmaps.length;me++)K.__webglFramebuffer[le][me]=n.createFramebuffer()}else K.__webglFramebuffer[le]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer=[];for(let le=0;le<w.mipmaps.length;le++)K.__webglFramebuffer[le]=n.createFramebuffer()}else K.__webglFramebuffer=n.createFramebuffer();if(Re)for(let le=0,me=ge.length;le<me;le++){let Oe=i.get(ge[le]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&Ae(P)===!1){K.__webglMultisampledFramebuffer=n.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let le=0;le<ge.length;le++){let me=ge[le];K.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,K.__webglColorRenderbuffer[le]);let Oe=r.convert(me.format,me.colorSpace),Ge=r.convert(me.type),Pe=M(me.internalFormat,Oe,Ge,me.normalized,me.colorSpace,P.isXRRenderTarget===!0),Ce=pe(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,Pe,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,K.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(K.__webglDepthRenderbuffer=n.createRenderbuffer(),k(K.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Te){t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),re(n.TEXTURE_CUBE_MAP,w);for(let le=0;le<6;le++)if(w.mipmaps&&w.mipmaps.length>0)for(let me=0;me<w.mipmaps.length;me++)de(K.__webglFramebuffer[le][me],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,me);else de(K.__webglFramebuffer[le],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);g(w)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let le=0,me=ge.length;le<me;le++){let Oe=ge[le],Ge=i.get(Oe),Pe=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Pe=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Pe,Ge.__webglTexture),re(Pe,Oe),de(K.__webglFramebuffer,P,Oe,n.COLOR_ATTACHMENT0+le,Pe,0),g(Oe)&&y(Pe)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(le=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,ae.__webglTexture),re(le,w),w.mipmaps&&w.mipmaps.length>0)for(let me=0;me<w.mipmaps.length;me++)de(K.__webglFramebuffer[me],P,w,n.COLOR_ATTACHMENT0,le,me);else de(K.__webglFramebuffer,P,w,n.COLOR_ATTACHMENT0,le,0);g(w)&&y(le),t.unbindTexture()}P.depthBuffer&&$(P)}function C(P){let w=P.textures;for(let K=0,ae=w.length;K<ae;K++){let ge=w[K];if(g(ge)){let Te=_(P),Re=i.get(ge).__webglTexture;t.bindTexture(Te,Re),y(Te),t.unbindTexture()}}}let Q=[],V=[];function D(P){if(P.samples>0){if(Ae(P)===!1){let w=P.textures,K=P.width,ae=P.height,ge=n.COLOR_BUFFER_BIT,Te=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=i.get(P),le=w.length>1;if(le)for(let Oe=0;Oe<w.length;Oe++)t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);let me=P.texture.mipmaps;me&&me.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Oe=0;Oe<w.length;Oe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ge|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ge|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Re.__webglColorRenderbuffer[Oe]);let Ge=i.get(w[Oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ge,0)}n.blitFramebuffer(0,0,K,ae,0,0,K,ae,ge,n.NEAREST),c===!0&&(Q.length=0,V.length=0,Q.push(n.COLOR_ATTACHMENT0+Oe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Q.push(Te),V.push(Te),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,V)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Q))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let Oe=0;Oe<w.length;Oe++){t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,Re.__webglColorRenderbuffer[Oe]);let Ge=i.get(w[Oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,Ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){let w=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function pe(P){return Math.min(s.maxSamples,P.samples)}function Ae(P){let w=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Fe(P){let w=o.render.frame;f.get(P)!==w&&(f.set(P,w),P.update())}function Me(P,w){let K=P.colorSpace,ae=P.format,ge=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||K!==go&&K!==Xi&&(_t.getTransfer(K)===Ct?(ae!==Kn||ge!==In)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",K)),w}function ot(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=X,this.getTextureUnits=q,this.setTextureUnits=N,this.setTexture2D=ce,this.setTexture2DArray=ue,this.setTexture3D=Ee,this.setTextureCube=De,this.rebindTextures=ee,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Ae,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Q1(n,e){function t(i,s=Xi){let r,o=_t.getTransfer(s);if(i===In)return n.UNSIGNED_BYTE;if(i===$l)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Jl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Df)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Lf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Pf)return n.BYTE;if(i===If)return n.SHORT;if(i===Pr)return n.UNSIGNED_SHORT;if(i===Kl)return n.INT;if(i===ii)return n.UNSIGNED_INT;if(i===Zn)return n.FLOAT;if(i===bi)return n.HALF_FLOAT;if(i===Nf)return n.ALPHA;if(i===kf)return n.RGB;if(i===Kn)return n.RGBA;if(i===di)return n.DEPTH_COMPONENT;if(i===ds)return n.DEPTH_STENCIL;if(i===jl)return n.RED;if(i===Ql)return n.RED_INTEGER;if(i===us)return n.RG;if(i===ec)return n.RG_INTEGER;if(i===tc)return n.RGBA_INTEGER;if(i===qo||i===Yo||i===Zo||i===Ko)if(o===Ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===qo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===qo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Yo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ko)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nc||i===ic||i===sc||i===rc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===nc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ic)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===rc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===oc||i===ac||i===lc||i===cc||i===hc||i===$o||i===fc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===oc||i===ac)return o===Ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===lc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===cc)return r.COMPRESSED_R11_EAC;if(i===hc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===$o)return r.COMPRESSED_RG11_EAC;if(i===fc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===dc||i===uc||i===pc||i===mc||i===gc||i===xc||i===yc||i===_c||i===vc||i===Mc||i===bc||i===wc||i===Tc||i===Ec)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===dc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===uc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===pc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===mc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_c)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Mc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===bc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Tc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ec)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ac||i===Rc||i===Cc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ac)return o===Ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Rc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Cc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sc||i===Pc||i===Jo||i===Ic)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Sc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Pc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Jo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ic)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ir?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var eb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tb=`
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

}`,td=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Co(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Bn({vertexShader:eb,fragmentShader:tb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _e(new Yn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nd=class extends ui{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,f=null,h=null,d=null,u=null,p=null,x=typeof XRWebGLBinding<"u",m=new td,g={},y=t.getContextAttributes(),_=null,M=null,E=[],T=[],I=new ke,v=null,b=new pn;b.viewport=new $t;let S=new pn;S.viewport=new $t;let R=[b,S],L=new Wl,X=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let ne=E[F];return ne===void 0&&(ne=new br,E[F]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(F){let ne=E[F];return ne===void 0&&(ne=new br,E[F]=ne),ne.getGripSpace()},this.getHand=function(F){let ne=E[F];return ne===void 0&&(ne=new br,E[F]=ne),ne.getHandSpace()};function N(F){let ne=T.indexOf(F.inputSource);if(ne===-1)return;let oe=E[ne];oe!==void 0&&(oe.update(F.inputSource,F.frame,l||o),oe.dispatchEvent({type:F.type,data:F.inputSource}))}function B(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",Z);for(let F=0;F<E.length;F++){let ne=T[F];ne!==null&&(T[F]=null,E[F].disconnect(ne))}X=null,q=null,m.reset();for(let F in g)delete g[F];e.setRenderTarget(_),u=null,d=null,h=null,s=null,M=null,re.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,i.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,i.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(F){if(s=F,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",B),s.addEventListener("inputsourceschange",Z),y.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(I),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,O=null,W=null;y.depth&&(W=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=y.stencil?ds:di,O=y.stencil?Ir:ii);let de={colorFormat:t.RGBA8,depthFormat:W,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(de),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Fn(d.textureWidth,d.textureHeight,{format:Kn,type:In,depthTexture:new Wi(d.textureWidth,d.textureHeight,O,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let oe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),M=new Fn(u.framebufferWidth,u.framebufferHeight,{format:Kn,type:In,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),re.setContext(s),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(F){for(let ne=0;ne<F.removed.length;ne++){let oe=F.removed[ne],O=T.indexOf(oe);O>=0&&(T[O]=null,E[O].disconnect(oe))}for(let ne=0;ne<F.added.length;ne++){let oe=F.added[ne],O=T.indexOf(oe);if(O===-1){for(let de=0;de<E.length;de++)if(de>=T.length){T.push(oe),O=de;break}else if(T[de]===null){T[de]=oe,O=de;break}if(O===-1)break}let W=E[O];W&&W.connect(oe)}}let ce=new U,ue=new U;function Ee(F,ne,oe){ce.setFromMatrixPosition(ne.matrixWorld),ue.setFromMatrixPosition(oe.matrixWorld);let O=ce.distanceTo(ue),W=ne.projectionMatrix.elements,de=oe.projectionMatrix.elements,k=W[14]/(W[10]-1),H=W[14]/(W[10]+1),$=(W[9]+1)/W[5],ee=(W[9]-1)/W[5],ye=(W[8]-1)/W[0],C=(de[8]+1)/de[0],Q=k*ye,V=k*C,D=O/(-ye+C),pe=D*-ye;if(ne.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(pe),F.translateZ(D),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),W[10]===-1)F.projectionMatrix.copy(ne.projectionMatrix),F.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let Ae=k+D,Fe=H+D,Me=Q-pe,ot=V+(O-pe),P=$*H/Fe*Ae,w=ee*H/Fe*Ae;F.projectionMatrix.makePerspective(Me,ot,P,w,Ae,Fe),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function De(F,ne){ne===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(ne.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(s===null)return;let ne=F.near,oe=F.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(oe=m.depthFar)),L.near=S.near=b.near=ne,L.far=S.far=b.far=oe,(X!==L.near||q!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),X=L.near,q=L.far),L.layers.mask=F.layers.mask|6,b.layers.mask=L.layers.mask&-5,S.layers.mask=L.layers.mask&-3;let O=F.parent,W=L.cameras;De(L,O);for(let de=0;de<W.length;de++)De(W[de],O);W.length===2?Ee(L,b,S):L.projectionMatrix.copy(b.projectionMatrix),ze(F,L,O)};function ze(F,ne,oe){oe===null?F.matrix.copy(ne.matrixWorld):(F.matrix.copy(oe.matrixWorld),F.matrix.invert(),F.matrix.multiply(ne.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(ne.projectionMatrix),F.projectionMatrixInverse.copy(ne.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=xl*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&u===null))return c},this.setFoveation=function(F){c=F,d!==null&&(d.fixedFoveation=F),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=F)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(F){return g[F]};let Qe=null;function se(F,ne){if(f=ne.getViewerPose(l||o),p=ne,f!==null){let oe=f.views;u!==null&&(e.setRenderTargetFramebuffer(M,u.framebuffer),e.setRenderTarget(M));let O=!1;oe.length!==L.cameras.length&&(L.cameras.length=0,O=!0);for(let H=0;H<oe.length;H++){let $=oe[H],ee=null;if(u!==null)ee=u.getViewport($);else{let C=h.getViewSubImage(d,$);ee=C.viewport,H===0&&(e.setRenderTargetTextures(M,C.colorTexture,C.depthStencilTexture),e.setRenderTarget(M))}let ye=R[H];ye===void 0&&(ye=new pn,ye.layers.enable(H),ye.viewport=new $t,R[H]=ye),ye.matrix.fromArray($.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray($.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(ee.x,ee.y,ee.width,ee.height),H===0&&(L.matrix.copy(ye.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),O===!0&&L.cameras.push(ye)}let W=s.enabledFeatures;if(W&&W.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=i.getBinding();let H=h.getDepthInformation(oe[0]);H&&H.isValid&&H.texture&&m.init(H,s.renderState)}if(W&&W.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let H=0;H<oe.length;H++){let $=oe[H].camera;if($){let ee=g[$];ee||(ee=new Co,g[$]=ee);let ye=h.getCameraImage($);ee.sourceTexture=ye}}}}for(let oe=0;oe<E.length;oe++){let O=T[oe],W=E[oe];O!==null&&W!==void 0&&W.update(O,ne,l||o)}Qe&&Qe(F,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),p=null}let re=new o0;re.setAnimationLoop(se),this.setAnimationLoop=function(F){Qe=F},this.dispose=function(){}}},nb=new vt,d0=new lt;d0.set(-1,0,0,0,1,0,0,0,1);function ib(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Of(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,y,_,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),h(m,g)):g.isMeshPhongMaterial?(r(m,g),f(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&u(m,g,M)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?c(m,g,y,_):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===yn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===yn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=e.get(g),_=y.envMap,M=y.envMapRotation;_&&(m.envMap.value=_,m.envMapRotation.value.setFromMatrix4(nb.makeRotationFromEuler(M)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(d0),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,y,_){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=_*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function f(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function u(m,g,y){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===yn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function sb(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,_){let M=_.program;i.uniformBlockBinding(y,M)}function l(y,_){let M=s[y.id];M===void 0&&(p(y),M=f(y),s[y.id]=M,y.addEventListener("dispose",m));let E=_.program;i.updateUBOMapping(y,E);let T=e.render.frame;r[y.id]!==T&&(d(y),r[y.id]=T)}function f(y){let _=h();y.__bindingPointIndex=_;let M=n.createBuffer(),E=y.__size,T=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,E,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,M),M}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let _=s[y.id],M=y.uniforms,E=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let T=0,I=M.length;T<I;T++){let v=Array.isArray(M[T])?M[T]:[M[T]];for(let b=0,S=v.length;b<S;b++){let R=v[b];if(u(R,T,b,E)===!0){let L=R.__offset,X=Array.isArray(R.value)?R.value:[R.value],q=0;for(let N=0;N<X.length;N++){let B=X[N],Z=x(B);typeof B=="number"||typeof B=="boolean"?(R.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,L+q,R.__data)):B.isMatrix3?(R.__data[0]=B.elements[0],R.__data[1]=B.elements[1],R.__data[2]=B.elements[2],R.__data[3]=0,R.__data[4]=B.elements[3],R.__data[5]=B.elements[4],R.__data[6]=B.elements[5],R.__data[7]=0,R.__data[8]=B.elements[6],R.__data[9]=B.elements[7],R.__data[10]=B.elements[8],R.__data[11]=0):ArrayBuffer.isView(B)?R.__data.set(new B.constructor(B.buffer,B.byteOffset,R.__data.length)):(B.toArray(R.__data,q),q+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(y,_,M,E){let T=y.value,I=_+"_"+M;if(E[I]===void 0)return typeof T=="number"||typeof T=="boolean"?E[I]=T:ArrayBuffer.isView(T)?E[I]=T.slice():E[I]=T.clone(),!0;{let v=E[I];if(typeof T=="number"||typeof T=="boolean"){if(v!==T)return E[I]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(v.equals(T)===!1)return v.copy(T),!0}}return!1}function p(y){let _=y.uniforms,M=0,E=16;for(let I=0,v=_.length;I<v;I++){let b=Array.isArray(_[I])?_[I]:[_[I]];for(let S=0,R=b.length;S<R;S++){let L=b[S],X=Array.isArray(L.value)?L.value:[L.value];for(let q=0,N=X.length;q<N;q++){let B=X[q],Z=x(B),ce=M%E,ue=ce%Z.boundary,Ee=ce+ue;M+=ue,Ee!==0&&E-Ee<Z.storage&&(M+=E-Ee),L.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=M,M+=Z.storage}}}let T=M%E;return T>0&&(M+=E-T),y.__size=M,y.__cache={},this}function x(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(_.boundary=16,_.storage=y.byteLength):it("WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){let _=y.target;_.removeEventListener("dispose",m);let M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function g(){for(let y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:g}}var rb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),wi=null;function ob(){return wi===null&&(wi=new Eo(rb,16,16,us,bi),wi.name="DFG_LUT",wi.minFilter=xn,wi.magFilter=xn,wi.wrapS=hi,wi.wrapT=hi,wi.generateMipmaps=!1,wi.needsUpdate=!0),wi}var Bc=class{constructor(e={}){let{canvas:t=Am(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:u=In}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let x=u,m=new Set([tc,ec,Ql]),g=new Set([In,ii,Pr,Ir,$l,Jl]),y=new Uint32Array(4),_=new Int32Array(4),M=new U,E=null,T=null,I=[],v=[],b=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,R=!1,L=null;this._outputColorSpace=on;let X=0,q=0,N=null,B=-1,Z=null,ce=new $t,ue=new $t,Ee=null,De=new rt(0),ze=0,Qe=t.width,se=t.height,re=1,F=null,ne=null,oe=new $t(0,0,Qe,se),O=new $t(0,0,Qe,se),W=!1,de=new Tr,k=!1,H=!1,$=new vt,ee=new U,ye=new $t,C={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Q=!1;function V(){return N===null?re:1}let D=i;function pe(A,Y){return t.getContext(A,Y)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"184"}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",Ze,!1),t.addEventListener("webglcontextcreationerror",ct,!1),D===null){let Y="webgl2";if(D=pe(Y,A),D===null)throw pe(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw nt("WebGLRenderer: "+A.message),A}let Ae,Fe,Me,ot,P,w,K,ae,ge,Te,Re,le,me,Oe,Ge,Pe,Ce,at,dt,wt,z,Se,he;function He(){Ae=new uM(D),Ae.init(),z=new Q1(D,Ae),Fe=new rM(D,Ae,e,z),Me=new J1(D,Ae),Fe.reversedDepthBuffer&&d&&Me.buffers.depth.setReversed(!0),ot=new gM(D),P=new F1,w=new j1(D,Ae,Me,P,Fe,z,ot),K=new dM(S),ae=new vy(D),Se=new iM(D,ae),ge=new pM(D,ae,ot,Se),Te=new yM(D,ge,ae,Se,ot),at=new xM(D,Fe,w),Ge=new oM(P),Re=new U1(S,K,Ae,Fe,Se,Ge),le=new ib(S,P),me=new B1,Oe=new X1(Ae),Ce=new nM(S,K,Me,Te,p,c),Pe=new $1(S,Te,Fe),he=new sb(D,ot,Fe,Me),dt=new sM(D,Ae,ot),wt=new mM(D,Ae,ot),ot.programs=Re.programs,S.capabilities=Fe,S.extensions=Ae,S.properties=P,S.renderLists=me,S.shadowMap=Pe,S.state=Me,S.info=ot}He(),x!==In&&(b=new vM(x,t.width,t.height,s,r));let Ie=new nd(S,D);this.xr=Ie,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let A=Ae.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Ae.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(A){A!==void 0&&(re=A,this.setSize(Qe,se,!1))},this.getSize=function(A){return A.set(Qe,se)},this.setSize=function(A,Y,ie=!0){if(Ie.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}Qe=A,se=Y,t.width=Math.floor(A*re),t.height=Math.floor(Y*re),ie===!0&&(t.style.width=A+"px",t.style.height=Y+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(Qe*re,se*re).floor()},this.setDrawingBufferSize=function(A,Y,ie){Qe=A,se=Y,re=ie,t.width=Math.floor(A*ie),t.height=Math.floor(Y*ie),this.setViewport(0,0,A,Y)},this.setEffects=function(A){if(x===In){nt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Y=0;Y<A.length;Y++)if(A[Y].isOutputPass===!0){it("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ce)},this.getViewport=function(A){return A.copy(oe)},this.setViewport=function(A,Y,ie,J){A.isVector4?oe.set(A.x,A.y,A.z,A.w):oe.set(A,Y,ie,J),Me.viewport(ce.copy(oe).multiplyScalar(re).round())},this.getScissor=function(A){return A.copy(O)},this.setScissor=function(A,Y,ie,J){A.isVector4?O.set(A.x,A.y,A.z,A.w):O.set(A,Y,ie,J),Me.scissor(ue.copy(O).multiplyScalar(re).round())},this.getScissorTest=function(){return W},this.setScissorTest=function(A){Me.setScissorTest(W=A)},this.setOpaqueSort=function(A){F=A},this.setTransparentSort=function(A){ne=A},this.getClearColor=function(A){return A.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,ie=!0){let J=0;if(A){let j=!1;if(N!==null){let Ue=N.texture.format;j=m.has(Ue)}if(j){let Ue=N.texture.type,We=g.has(Ue),Ne=Ce.getClearColor(),qe=Ce.getClearAlpha(),$e=Ne.r,ht=Ne.g,mt=Ne.b;We?(y[0]=$e,y[1]=ht,y[2]=mt,y[3]=qe,D.clearBufferuiv(D.COLOR,0,y)):(_[0]=$e,_[1]=ht,_[2]=mt,_[3]=qe,D.clearBufferiv(D.COLOR,0,_))}else J|=D.COLOR_BUFFER_BIT}Y&&(J|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ie&&(J|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&D.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),L=A},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",Ze,!1),t.removeEventListener("webglcontextcreationerror",ct,!1),Ce.dispose(),me.dispose(),Oe.dispose(),P.dispose(),K.dispose(),Te.dispose(),Se.dispose(),he.dispose(),Re.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",hd),Ie.removeEventListener("sessionend",fd),ys.stop()};function be(A){A.preventDefault(),_o("WebGLRenderer: Context Lost."),R=!0}function Ze(){_o("WebGLRenderer: Context Restored."),R=!1;let A=ot.autoReset,Y=Pe.enabled,ie=Pe.autoUpdate,J=Pe.needsUpdate,j=Pe.type;He(),ot.autoReset=A,Pe.enabled=Y,Pe.autoUpdate=ie,Pe.needsUpdate=J,Pe.type=j}function ct(A){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function tn(A){let Y=A.target;Y.removeEventListener("dispose",tn),It(Y)}function It(A){Ei(A),P.remove(A)}function Ei(A){let Y=P.get(A).programs;Y!==void 0&&(Y.forEach(function(ie){Re.releaseProgram(ie)}),A.isShaderMaterial&&Re.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,ie,J,j,Ue){Y===null&&(Y=C);let We=j.isMesh&&j.matrixWorld.determinant()<0,Ne=N0(A,Y,ie,J,j);Me.setMaterial(J,We);let qe=ie.index,$e=1;if(J.wireframe===!0){if(qe=ge.getWireframeAttribute(ie),qe===void 0)return;$e=2}let ht=ie.drawRange,mt=ie.attributes.position,je=ht.start*$e,Dt=(ht.start+ht.count)*$e;Ue!==null&&(je=Math.max(je,Ue.start*$e),Dt=Math.min(Dt,(Ue.start+Ue.count)*$e)),qe!==null?(je=Math.max(je,0),Dt=Math.min(Dt,qe.count)):mt!=null&&(je=Math.max(je,0),Dt=Math.min(Dt,mt.count));let nn=Dt-je;if(nn<0||nn===1/0)return;Se.setup(j,J,Ne,ie,qe);let Jt,Ut=dt;if(qe!==null&&(Jt=ae.get(qe),Ut=wt,Ut.setIndex(Jt)),j.isMesh)J.wireframe===!0?(Me.setLineWidth(J.wireframeLinewidth*V()),Ut.setMode(D.LINES)):Ut.setMode(D.TRIANGLES);else if(j.isLine){let _n=J.linewidth;_n===void 0&&(_n=1),Me.setLineWidth(_n*V()),j.isLineSegments?Ut.setMode(D.LINES):j.isLineLoop?Ut.setMode(D.LINE_LOOP):Ut.setMode(D.LINE_STRIP)}else j.isPoints?Ut.setMode(D.POINTS):j.isSprite&&Ut.setMode(D.TRIANGLES);if(j.isBatchedMesh)if(Ae.get("WEBGL_multi_draw"))Ut.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let _n=j._multiDrawStarts,Ve=j._multiDrawCounts,Dn=j._multiDrawCount,Mt=qe?ae.get(qe).bytesPerElement:1,zn=P.get(J).currentProgram.getUniforms();for(let ri=0;ri<Dn;ri++)zn.setValue(D,"_gl_DrawID",ri),Ut.render(_n[ri]/Mt,Ve[ri])}else if(j.isInstancedMesh)Ut.renderInstances(je,nn,j.count);else if(ie.isInstancedBufferGeometry){let _n=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Ve=Math.min(ie.instanceCount,_n);Ut.renderInstances(je,nn,Ve)}else Ut.render(je,nn)};function si(A,Y,ie){A.transparent===!0&&A.side===Pn&&A.forceSinglePass===!1?(A.side=yn,A.needsUpdate=!0,ra(A,Y,ie),A.side=Bi,A.needsUpdate=!0,ra(A,Y,ie),A.side=Pn):ra(A,Y,ie)}this.compile=function(A,Y,ie=null){ie===null&&(ie=A),T=Oe.get(ie),T.init(Y),v.push(T),ie.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),A!==ie&&A.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),T.setupLights();let J=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let Ue=j.material;if(Ue)if(Array.isArray(Ue))for(let We=0;We<Ue.length;We++){let Ne=Ue[We];si(Ne,ie,j),J.add(Ne)}else si(Ue,ie,j),J.add(Ue)}),T=v.pop(),J},this.compileAsync=function(A,Y,ie=null){let J=this.compile(A,Y,ie);return new Promise(j=>{function Ue(){if(J.forEach(function(We){P.get(We).currentProgram.isReady()&&J.delete(We)}),J.size===0){j(A);return}setTimeout(Ue,10)}Ae.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let Kc=null;function D0(A){Kc&&Kc(A)}function hd(){ys.stop()}function fd(){ys.start()}let ys=new o0;ys.setAnimationLoop(D0),typeof self<"u"&&ys.setContext(self),this.setAnimationLoop=function(A){Kc=A,Ie.setAnimationLoop(A),A===null?ys.stop():ys.start()},Ie.addEventListener("sessionstart",hd),Ie.addEventListener("sessionend",fd),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;L!==null&&L.renderStart(A,Y);let ie=Ie.enabled===!0&&Ie.isPresenting===!0,J=b!==null&&(N===null||ie)&&b.begin(S,N);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(Y),Y=Ie.getCamera()),A.isScene===!0&&A.onBeforeRender(S,A,Y,N),T=Oe.get(A,v.length),T.init(Y),T.state.textureUnits=w.getTextureUnits(),v.push(T),$.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),de.setFromProjectionMatrix($,ti,Y.reversedDepth),H=this.localClippingEnabled,k=Ge.init(this.clippingPlanes,H),E=me.get(A,I.length),E.init(),I.push(E),Ie.enabled===!0&&Ie.isPresenting===!0){let We=S.xr.getDepthSensingMesh();We!==null&&$c(We,Y,-1/0,S.sortObjects)}$c(A,Y,0,S.sortObjects),E.finish(),S.sortObjects===!0&&E.sort(F,ne),Q=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,Q&&Ce.addToRenderList(E,A),this.info.render.frame++,k===!0&&Ge.beginShadows();let j=T.state.shadowsArray;if(Pe.render(j,A,Y),k===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(J&&b.hasRenderPass())===!1){let We=E.opaque,Ne=E.transmissive;if(T.setupLights(),Y.isArrayCamera){let qe=Y.cameras;if(Ne.length>0)for(let $e=0,ht=qe.length;$e<ht;$e++){let mt=qe[$e];ud(We,Ne,A,mt)}Q&&Ce.render(A);for(let $e=0,ht=qe.length;$e<ht;$e++){let mt=qe[$e];dd(E,A,mt,mt.viewport)}}else Ne.length>0&&ud(We,Ne,A,Y),Q&&Ce.render(A),dd(E,A,Y)}N!==null&&q===0&&(w.updateMultisampleRenderTarget(N),w.updateRenderTargetMipmap(N)),J&&b.end(S),A.isScene===!0&&A.onAfterRender(S,A,Y),Se.resetDefaultState(),B=-1,Z=null,v.pop(),v.length>0?(T=v[v.length-1],w.setTextureUnits(T.state.textureUnits),k===!0&&Ge.setGlobalState(S.clippingPlanes,T.state.camera)):T=null,I.pop(),I.length>0?E=I[I.length-1]:E=null,L!==null&&L.renderEnd()};function $c(A,Y,ie,J){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)ie=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLightProbeGrid)T.pushLightProbeGrid(A);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||de.intersectsSprite(A)){J&&ye.setFromMatrixPosition(A.matrixWorld).applyMatrix4($);let We=Te.update(A),Ne=A.material;Ne.visible&&E.push(A,We,Ne,ie,ye.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||de.intersectsObject(A))){let We=Te.update(A),Ne=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ye.copy(A.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),ye.copy(We.boundingSphere.center)),ye.applyMatrix4(A.matrixWorld).applyMatrix4($)),Array.isArray(Ne)){let qe=We.groups;for(let $e=0,ht=qe.length;$e<ht;$e++){let mt=qe[$e],je=Ne[mt.materialIndex];je&&je.visible&&E.push(A,We,je,ie,ye.z,mt)}}else Ne.visible&&E.push(A,We,Ne,ie,ye.z,null)}}let Ue=A.children;for(let We=0,Ne=Ue.length;We<Ne;We++)$c(Ue[We],Y,ie,J)}function dd(A,Y,ie,J){let{opaque:j,transmissive:Ue,transparent:We}=A;T.setupLightsView(ie),k===!0&&Ge.setGlobalState(S.clippingPlanes,ie),J&&Me.viewport(ce.copy(J)),j.length>0&&sa(j,Y,ie),Ue.length>0&&sa(Ue,Y,ie),We.length>0&&sa(We,Y,ie),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function ud(A,Y,ie,J){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[J.id]===void 0){let je=Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[J.id]=new Fn(1,1,{generateMipmaps:!0,type:je?bi:In,minFilter:Mi,samples:Math.max(4,Fe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace})}let Ue=T.state.transmissionRenderTarget[J.id],We=J.viewport||ce;Ue.setSize(We.z*S.transmissionResolutionScale,We.w*S.transmissionResolutionScale);let Ne=S.getRenderTarget(),qe=S.getActiveCubeFace(),$e=S.getActiveMipmapLevel();S.setRenderTarget(Ue),S.getClearColor(De),ze=S.getClearAlpha(),ze<1&&S.setClearColor(16777215,.5),S.clear(),Q&&Ce.render(ie);let ht=S.toneMapping;S.toneMapping=ni;let mt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),T.setupLightsView(J),k===!0&&Ge.setGlobalState(S.clippingPlanes,J),sa(A,ie,J),w.updateMultisampleRenderTarget(Ue),w.updateRenderTargetMipmap(Ue),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Dt=0,nn=Y.length;Dt<nn;Dt++){let Jt=Y[Dt],{object:Ut,geometry:_n,material:Ve,group:Dn}=Jt;if(Ve.side===Pn&&Ut.layers.test(J.layers)){let Mt=Ve.side;Ve.side=yn,Ve.needsUpdate=!0,pd(Ut,ie,J,_n,Ve,Dn),Ve.side=Mt,Ve.needsUpdate=!0,je=!0}}je===!0&&(w.updateMultisampleRenderTarget(Ue),w.updateRenderTargetMipmap(Ue))}S.setRenderTarget(Ne,qe,$e),S.setClearColor(De,ze),mt!==void 0&&(J.viewport=mt),S.toneMapping=ht}function sa(A,Y,ie){let J=Y.isScene===!0?Y.overrideMaterial:null;for(let j=0,Ue=A.length;j<Ue;j++){let We=A[j],{object:Ne,geometry:qe,group:$e}=We,ht=We.material;ht.allowOverride===!0&&J!==null&&(ht=J),Ne.layers.test(ie.layers)&&pd(Ne,Y,ie,qe,ht,$e)}}function pd(A,Y,ie,J,j,Ue){A.onBeforeRender(S,Y,ie,J,j,Ue),A.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(S,Y,ie,J,A,Ue),j.transparent===!0&&j.side===Pn&&j.forceSinglePass===!1?(j.side=yn,j.needsUpdate=!0,S.renderBufferDirect(ie,Y,J,j,A,Ue),j.side=Bi,j.needsUpdate=!0,S.renderBufferDirect(ie,Y,J,j,A,Ue),j.side=Pn):S.renderBufferDirect(ie,Y,J,j,A,Ue),A.onAfterRender(S,Y,ie,J,j,Ue)}function ra(A,Y,ie){Y.isScene!==!0&&(Y=C);let J=P.get(A),j=T.state.lights,Ue=T.state.shadowsArray,We=j.state.version,Ne=Re.getParameters(A,j.state,Ue,Y,ie,T.state.lightProbeGridArray),qe=Re.getProgramCacheKey(Ne),$e=J.programs;J.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Y.environment:null,J.fog=Y.fog;let ht=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;J.envMap=K.get(A.envMap||J.environment,ht),J.envMapRotation=J.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,$e===void 0&&(A.addEventListener("dispose",tn),$e=new Map,J.programs=$e);let mt=$e.get(qe);if(mt!==void 0){if(J.currentProgram===mt&&J.lightsStateVersion===We)return gd(A,Ne),mt}else Ne.uniforms=Re.getUniforms(A),L!==null&&A.isNodeMaterial&&L.build(A,ie,Ne),A.onBeforeCompile(Ne,S),mt=Re.acquireProgram(Ne,qe),$e.set(qe,mt),J.uniforms=Ne.uniforms;let je=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(je.clippingPlanes=Ge.uniform),gd(A,Ne),J.needsLights=U0(A),J.lightsStateVersion=We,J.needsLights&&(je.ambientLightColor.value=j.state.ambient,je.lightProbe.value=j.state.probe,je.directionalLights.value=j.state.directional,je.directionalLightShadows.value=j.state.directionalShadow,je.spotLights.value=j.state.spot,je.spotLightShadows.value=j.state.spotShadow,je.rectAreaLights.value=j.state.rectArea,je.ltc_1.value=j.state.rectAreaLTC1,je.ltc_2.value=j.state.rectAreaLTC2,je.pointLights.value=j.state.point,je.pointLightShadows.value=j.state.pointShadow,je.hemisphereLights.value=j.state.hemi,je.directionalShadowMatrix.value=j.state.directionalShadowMatrix,je.spotLightMatrix.value=j.state.spotLightMatrix,je.spotLightMap.value=j.state.spotLightMap,je.pointShadowMatrix.value=j.state.pointShadowMatrix),J.lightProbeGrid=T.state.lightProbeGridArray.length>0,J.currentProgram=mt,J.uniformsList=null,mt}function md(A){if(A.uniformsList===null){let Y=A.currentProgram.getUniforms();A.uniformsList=Lr.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function gd(A,Y){let ie=P.get(A);ie.outputColorSpace=Y.outputColorSpace,ie.batching=Y.batching,ie.batchingColor=Y.batchingColor,ie.instancing=Y.instancing,ie.instancingColor=Y.instancingColor,ie.instancingMorph=Y.instancingMorph,ie.skinning=Y.skinning,ie.morphTargets=Y.morphTargets,ie.morphNormals=Y.morphNormals,ie.morphColors=Y.morphColors,ie.morphTargetsCount=Y.morphTargetsCount,ie.numClippingPlanes=Y.numClippingPlanes,ie.numIntersection=Y.numClipIntersection,ie.vertexAlphas=Y.vertexAlphas,ie.vertexTangents=Y.vertexTangents,ie.toneMapping=Y.toneMapping}function L0(A,Y){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;M.setFromMatrixPosition(Y.matrixWorld);for(let ie=0,J=A.length;ie<J;ie++){let j=A[ie];if(j.texture!==null&&j.boundingBox.containsPoint(M))return j}return null}function N0(A,Y,ie,J,j){Y.isScene!==!0&&(Y=C),w.resetTextureUnits();let Ue=Y.fog,We=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?Y.environment:null,Ne=N===null?S.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:_t.workingColorSpace,qe=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,$e=K.get(J.envMap||We,qe),ht=J.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,mt=!!ie.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),je=!!ie.morphAttributes.position,Dt=!!ie.morphAttributes.normal,nn=!!ie.morphAttributes.color,Jt=ni;J.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Jt=S.toneMapping);let Ut=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,_n=Ut!==void 0?Ut.length:0,Ve=P.get(J),Dn=T.state.lights;if(k===!0&&(H===!0||A!==Z)){let Bt=A===Z&&J.id===B;Ge.setState(J,A,Bt)}let Mt=!1;J.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Dn.state.version||Ve.outputColorSpace!==Ne||j.isBatchedMesh&&Ve.batching===!1||!j.isBatchedMesh&&Ve.batching===!0||j.isBatchedMesh&&Ve.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ve.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ve.instancing===!1||!j.isInstancedMesh&&Ve.instancing===!0||j.isSkinnedMesh&&Ve.skinning===!1||!j.isSkinnedMesh&&Ve.skinning===!0||j.isInstancedMesh&&Ve.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ve.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ve.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ve.instancingMorph===!1&&j.morphTexture!==null||Ve.envMap!==$e||J.fog===!0&&Ve.fog!==Ue||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Ge.numPlanes||Ve.numIntersection!==Ge.numIntersection)||Ve.vertexAlphas!==ht||Ve.vertexTangents!==mt||Ve.morphTargets!==je||Ve.morphNormals!==Dt||Ve.morphColors!==nn||Ve.toneMapping!==Jt||Ve.morphTargetsCount!==_n||!!Ve.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Mt=!0):(Mt=!0,Ve.__version=J.version);let zn=Ve.currentProgram;Mt===!0&&(zn=ra(J,Y,j),L&&J.isNodeMaterial&&L.onUpdateProgram(J,zn,Ve));let ri=!1,qi=!1,Vs=!1,Ft=zn.getUniforms(),sn=Ve.uniforms;if(Me.useProgram(zn.program)&&(ri=!0,qi=!0,Vs=!0),J.id!==B&&(B=J.id,qi=!0),Ve.needsLights){let Bt=L0(T.state.lightProbeGridArray,j);Ve.lightProbeGrid!==Bt&&(Ve.lightProbeGrid=Bt,qi=!0)}if(ri||Z!==A){Me.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ft.setValue(D,"projectionMatrix",A.projectionMatrix),Ft.setValue(D,"viewMatrix",A.matrixWorldInverse);let Zi=Ft.map.cameraPosition;Zi!==void 0&&Zi.setValue(D,ee.setFromMatrixPosition(A.matrixWorld)),Fe.logarithmicDepthBuffer&&Ft.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ft.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),Z!==A&&(Z=A,qi=!0,Vs=!0)}if(Ve.needsLights&&(Dn.state.directionalShadowMap.length>0&&Ft.setValue(D,"directionalShadowMap",Dn.state.directionalShadowMap,w),Dn.state.spotShadowMap.length>0&&Ft.setValue(D,"spotShadowMap",Dn.state.spotShadowMap,w),Dn.state.pointShadowMap.length>0&&Ft.setValue(D,"pointShadowMap",Dn.state.pointShadowMap,w)),j.isSkinnedMesh){Ft.setOptional(D,j,"bindMatrix"),Ft.setOptional(D,j,"bindMatrixInverse");let Bt=j.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),Ft.setValue(D,"boneTexture",Bt.boneTexture,w))}j.isBatchedMesh&&(Ft.setOptional(D,j,"batchingTexture"),Ft.setValue(D,"batchingTexture",j._matricesTexture,w),Ft.setOptional(D,j,"batchingIdTexture"),Ft.setValue(D,"batchingIdTexture",j._indirectTexture,w),Ft.setOptional(D,j,"batchingColorTexture"),j._colorsTexture!==null&&Ft.setValue(D,"batchingColorTexture",j._colorsTexture,w));let Yi=ie.morphAttributes;if((Yi.position!==void 0||Yi.normal!==void 0||Yi.color!==void 0)&&at.update(j,ie,zn),(qi||Ve.receiveShadow!==j.receiveShadow)&&(Ve.receiveShadow=j.receiveShadow,Ft.setValue(D,"receiveShadow",j.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&Y.environment!==null&&(sn.envMapIntensity.value=Y.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=ob()),qi){if(Ft.setValue(D,"toneMappingExposure",S.toneMappingExposure),Ve.needsLights&&k0(sn,Vs),Ue&&J.fog===!0&&le.refreshFogUniforms(sn,Ue),le.refreshMaterialUniforms(sn,J,re,se,T.state.transmissionRenderTarget[A.id]),Ve.needsLights&&Ve.lightProbeGrid){let Bt=Ve.lightProbeGrid;sn.probesSH.value=Bt.texture,sn.probesMin.value.copy(Bt.boundingBox.min),sn.probesMax.value.copy(Bt.boundingBox.max),sn.probesResolution.value.copy(Bt.resolution)}Lr.upload(D,md(Ve),sn,w)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Lr.upload(D,md(Ve),sn,w),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ft.setValue(D,"center",j.center),Ft.setValue(D,"modelViewMatrix",j.modelViewMatrix),Ft.setValue(D,"normalMatrix",j.normalMatrix),Ft.setValue(D,"modelMatrix",j.matrixWorld),J.uniformsGroups!==void 0){let Bt=J.uniformsGroups;for(let Zi=0,Gs=Bt.length;Zi<Gs;Zi++){let xd=Bt[Zi];he.update(xd,zn),he.bind(xd,zn)}}return zn}function k0(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function U0(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(A,Y,ie){let J=P.get(A);J.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),P.get(A.texture).__webglTexture=Y,P.get(A.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:ie,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){let ie=P.get(A);ie.__webglFramebuffer=Y,ie.__useDefaultFramebuffer=Y===void 0};let F0=D.createFramebuffer();this.setRenderTarget=function(A,Y=0,ie=0){N=A,X=Y,q=ie;let J=null,j=!1,Ue=!1;if(A){let Ne=P.get(A);if(Ne.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(D.FRAMEBUFFER,Ne.__webglFramebuffer),ce.copy(A.viewport),ue.copy(A.scissor),Ee=A.scissorTest,Me.viewport(ce),Me.scissor(ue),Me.setScissorTest(Ee),B=-1;return}else if(Ne.__webglFramebuffer===void 0)w.setupRenderTarget(A);else if(Ne.__hasExternalTextures)w.rebindTextures(A,P.get(A.texture).__webglTexture,P.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let ht=A.depthTexture;if(Ne.__boundDepthTexture!==ht){if(ht!==null&&P.has(ht)&&(A.width!==ht.image.width||A.height!==ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(A)}}let qe=A.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ue=!0);let $e=P.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray($e[Y])?J=$e[Y][ie]:J=$e[Y],j=!0):A.samples>0&&w.useMultisampledRTT(A)===!1?J=P.get(A).__webglMultisampledFramebuffer:Array.isArray($e)?J=$e[ie]:J=$e,ce.copy(A.viewport),ue.copy(A.scissor),Ee=A.scissorTest}else ce.copy(oe).multiplyScalar(re).floor(),ue.copy(O).multiplyScalar(re).floor(),Ee=W;if(ie!==0&&(J=F0),Me.bindFramebuffer(D.FRAMEBUFFER,J)&&Me.drawBuffers(A,J),Me.viewport(ce),Me.scissor(ue),Me.setScissorTest(Ee),j){let Ne=P.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ne.__webglTexture,ie)}else if(Ue){let Ne=Y;for(let qe=0;qe<A.textures.length;qe++){let $e=P.get(A.textures[qe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+qe,$e.__webglTexture,ie,Ne)}}else if(A!==null&&ie!==0){let Ne=P.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ne.__webglTexture,ie)}B=-1},this.readRenderTargetPixels=function(A,Y,ie,J,j,Ue,We,Ne=0){if(!(A&&A.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=P.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&We!==void 0&&(qe=qe[We]),qe){Me.bindFramebuffer(D.FRAMEBUFFER,qe);try{let $e=A.textures[Ne],ht=$e.format,mt=$e.type;if(A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ne),!Fe.textureFormatReadable(ht)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(mt)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-J&&ie>=0&&ie<=A.height-j&&D.readPixels(Y,ie,J,j,z.convert(ht),z.convert(mt),Ue)}finally{let $e=N!==null?P.get(N).__webglFramebuffer:null;Me.bindFramebuffer(D.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(A,Y,ie,J,j,Ue,We,Ne=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=P.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&We!==void 0&&(qe=qe[We]),qe)if(Y>=0&&Y<=A.width-J&&ie>=0&&ie<=A.height-j){Me.bindFramebuffer(D.FRAMEBUFFER,qe);let $e=A.textures[Ne],ht=$e.format,mt=$e.type;if(A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ne),!Fe.textureFormatReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let je=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,je),D.bufferData(D.PIXEL_PACK_BUFFER,Ue.byteLength,D.STREAM_READ),D.readPixels(Y,ie,J,j,z.convert(ht),z.convert(mt),0);let Dt=N!==null?P.get(N).__webglFramebuffer:null;Me.bindFramebuffer(D.FRAMEBUFFER,Dt);let nn=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Cm(D,nn,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,je),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Ue),D.deleteBuffer(je),D.deleteSync(nn),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,ie=0){let J=Math.pow(2,-ie),j=Math.floor(A.image.width*J),Ue=Math.floor(A.image.height*J),We=Y!==null?Y.x:0,Ne=Y!==null?Y.y:0;w.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,ie,0,0,We,Ne,j,Ue),Me.unbindTexture()};let O0=D.createFramebuffer(),B0=D.createFramebuffer();this.copyTextureToTexture=function(A,Y,ie=null,J=null,j=0,Ue=0){let We,Ne,qe,$e,ht,mt,je,Dt,nn,Jt=A.isCompressedTexture?A.mipmaps[Ue]:A.image;if(ie!==null)We=ie.max.x-ie.min.x,Ne=ie.max.y-ie.min.y,qe=ie.isBox3?ie.max.z-ie.min.z:1,$e=ie.min.x,ht=ie.min.y,mt=ie.isBox3?ie.min.z:0;else{let sn=Math.pow(2,-j);We=Math.floor(Jt.width*sn),Ne=Math.floor(Jt.height*sn),A.isDataArrayTexture?qe=Jt.depth:A.isData3DTexture?qe=Math.floor(Jt.depth*sn):qe=1,$e=0,ht=0,mt=0}J!==null?(je=J.x,Dt=J.y,nn=J.z):(je=0,Dt=0,nn=0);let Ut=z.convert(Y.format),_n=z.convert(Y.type),Ve;Y.isData3DTexture?(w.setTexture3D(Y,0),Ve=D.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(w.setTexture2DArray(Y,0),Ve=D.TEXTURE_2D_ARRAY):(w.setTexture2D(Y,0),Ve=D.TEXTURE_2D),Me.activeTexture(D.TEXTURE0),Me.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,Y.flipY),Me.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),Me.pixelStorei(D.UNPACK_ALIGNMENT,Y.unpackAlignment);let Dn=Me.getParameter(D.UNPACK_ROW_LENGTH),Mt=Me.getParameter(D.UNPACK_IMAGE_HEIGHT),zn=Me.getParameter(D.UNPACK_SKIP_PIXELS),ri=Me.getParameter(D.UNPACK_SKIP_ROWS),qi=Me.getParameter(D.UNPACK_SKIP_IMAGES);Me.pixelStorei(D.UNPACK_ROW_LENGTH,Jt.width),Me.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Jt.height),Me.pixelStorei(D.UNPACK_SKIP_PIXELS,$e),Me.pixelStorei(D.UNPACK_SKIP_ROWS,ht),Me.pixelStorei(D.UNPACK_SKIP_IMAGES,mt);let Vs=A.isDataArrayTexture||A.isData3DTexture,Ft=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){let sn=P.get(A),Yi=P.get(Y),Bt=P.get(sn.__renderTarget),Zi=P.get(Yi.__renderTarget);Me.bindFramebuffer(D.READ_FRAMEBUFFER,Bt.__webglFramebuffer),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,Zi.__webglFramebuffer);for(let Gs=0;Gs<qe;Gs++)Vs&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,P.get(A).__webglTexture,j,mt+Gs),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,P.get(Y).__webglTexture,Ue,nn+Gs)),D.blitFramebuffer($e,ht,We,Ne,je,Dt,We,Ne,D.DEPTH_BUFFER_BIT,D.NEAREST);Me.bindFramebuffer(D.READ_FRAMEBUFFER,null),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||P.has(A)){let sn=P.get(A),Yi=P.get(Y);Me.bindFramebuffer(D.READ_FRAMEBUFFER,O0),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,B0);for(let Bt=0;Bt<qe;Bt++)Vs?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,sn.__webglTexture,j,mt+Bt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,sn.__webglTexture,j),Ft?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Yi.__webglTexture,Ue,nn+Bt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Yi.__webglTexture,Ue),j!==0?D.blitFramebuffer($e,ht,We,Ne,je,Dt,We,Ne,D.COLOR_BUFFER_BIT,D.NEAREST):Ft?D.copyTexSubImage3D(Ve,Ue,je,Dt,nn+Bt,$e,ht,We,Ne):D.copyTexSubImage2D(Ve,Ue,je,Dt,$e,ht,We,Ne);Me.bindFramebuffer(D.READ_FRAMEBUFFER,null),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Ft?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(Ve,Ue,je,Dt,nn,We,Ne,qe,Ut,_n,Jt.data):Y.isCompressedArrayTexture?D.compressedTexSubImage3D(Ve,Ue,je,Dt,nn,We,Ne,qe,Ut,Jt.data):D.texSubImage3D(Ve,Ue,je,Dt,nn,We,Ne,qe,Ut,_n,Jt):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Ue,je,Dt,We,Ne,Ut,_n,Jt.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Ue,je,Dt,Jt.width,Jt.height,Ut,Jt.data):D.texSubImage2D(D.TEXTURE_2D,Ue,je,Dt,We,Ne,Ut,_n,Jt);Me.pixelStorei(D.UNPACK_ROW_LENGTH,Dn),Me.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Mt),Me.pixelStorei(D.UNPACK_SKIP_PIXELS,zn),Me.pixelStorei(D.UNPACK_SKIP_ROWS,ri),Me.pixelStorei(D.UNPACK_SKIP_IMAGES,qi),Ue===0&&Y.generateMipmaps&&D.generateMipmap(Ve),Me.unbindTexture()},this.initRenderTarget=function(A){P.get(A).__webglFramebuffer===void 0&&w.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?w.setTextureCube(A,0):A.isData3DTexture?w.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?w.setTexture2DArray(A,0):w.setTexture2D(A,0),Me.unbindTexture()},this.resetState=function(){X=0,q=0,N=null,Me.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}};function u0(n,e){let t=new Bc({canvas:e.canvas,antialias:!0});t.setPixelRatio(Math.min(2,devicePixelRatio||1)),t.setSize(e.VW,e.VH),t.outputColorSpace=on;let i=new Ps;i.background=new rt(861232);let s=new pn(50,e.VW/e.VH,10,6e4),r=new Us(15397624,4867128,.95);i.add(r);let o=new Fs(16773852,1.35);o.position.set(-.45,1,-.3).multiplyScalar(1e3),i.add(o);let a=new an;i.add(a),o.target=a,i.fog=new Mo(10466494,2600,9e3);let c=38,l={renderer:t,scene:i,camera:s,sun:o,hemi:r,cx:n.player.x,cy:n.player.y,dist:1150,elev:.96,shakeX:0,shakeY:0,orbit:0,zoomFactor:1,fp:!0,yaw:0,pitch:-.08,eyeH:c,jumpH:0,jumpV:0,jump(){let f=n.player,h=n.world.lakeAt(f.x,f.y);e.godView||f.dead||f.inCopter||l.jumpH>0||h&&!h.frozen||(l.jumpV=100,l.jumpH=.001)},fall(f){l.jumpH=Math.max(l.jumpH,f),l.jumpV=-10},_ray:new Vo,_plane:new Xn(new U(0,1,0),0),_v3:new U,simAngle(){return Math.atan2(-Math.cos(l.yaw),-Math.sin(l.yaw))},setYawFromSim(f){l.yaw=Math.atan2(-Math.cos(f),-Math.sin(f))},aimPoint(){let f=l.simAngle(),h=n.player,d=560;return l.pitch<-.055&&(d=(l.eyeH+l.jumpH)/Math.tan(-l.pitch)),d=et(d,70,980),{x:h.x+Math.cos(f)*d,y:h.y+Math.sin(f)*d}},lightLevel(){return .5+.5*Math.cos(Math.PI*2*(n.t%Br/Br))},resize(){s.aspect=e.VW/e.VH,s.updateProjectionMatrix(),t.setSize(e.VW,e.VH)},update(f){let h=n.player;n.shake>0?(l.shakeX=(Math.random()*2-1)*n.shake,l.shakeY=(Math.random()*2-1)*n.shake):(l.shakeX=0,l.shakeY=0);let d,u;if(e.godView){d=xe.w/2,u=xe.h/2;let g=1.52,y=Math.tan(s.fov/2*Math.PI/180),_=(xe.h/2+500)/y,M=(xe.w/2+500)/(y*s.aspect),E=Math.max(_,M)*1.02;l._wasGod!==!0&&(l.dist=E,l.elev=g,s.fov=50,s.updateProjectionMatrix()),l._wasGod=!0,l.hideOwnRig=!1,l.cx=d,l.cy=u,l.dist=qs(l.dist,E,Math.min(1,f*4));let T=Math.sin(l.elev)*l.dist,I=Math.cos(l.elev)*l.dist;s.position.set(d,T,u+I),s.lookAt(d,0,u),l._viewR=l.dist*1.9,i.fog.near=l.dist*2.2,i.fog.far=l.dist*8}else{l._wasGod!==!1&&(l._wasGod=!1,s.fov=74,s.updateProjectionMatrix()),l.hideOwnRig=!0;let g=c,y=n.world.lakeAt(h.x,h.y);if(h.inCopter&&n.copter){let _=n.copter,M=_.alt||0,E=_.angle+(l.flyYawOff||0),T=235+_.spd*.08,I=112+(l.flyPitchOff||0)*150,v=_.x-Math.cos(E)*T,b=_.y-Math.sin(E)*T,S=M+I;l._fly||(l._fly=!0,l._camX=v,l._camY=b,l._camZ=S);let R=Math.min(1,f*6);l._camX=qs(l._camX,v,R),l._camY=qs(l._camY,b,R),l._camZ=qs(l._camZ,S,R),s.position.set(l._camX+l.shakeX*.45,Math.max(16,l._camZ),l._camY+l.shakeY*.45),s.lookAt(_.x,M+24,_.y),s.rotateZ(-(_.rollA||0)*.2),l.cx=_.x,l.cy=_.y,l.dist=320,l.setYawFromSim(_.angle),l.pitch=(_.pitchA||0)*.4-.1,d=_.x,u=_.y}else l._fly&&(l._fly=!1),y&&!y.frozen&&(g=15),l.eyeH=qs(l.eyeH,g,Math.min(1,f*5)),(l.jumpH>0||l.jumpV>0)&&(l.jumpH+=l.jumpV*f,l.jumpV-=400*f,l.jumpH<=0&&(l.jumpH=0,l.jumpV=0)),d=h.x,u=h.y,l.cx=h.x,l.cy=h.y,l.dist=320,s.position.set(h.x+l.shakeX*.35,l.eyeH+l.jumpH,h.y+l.shakeY*.35),s.rotation.order="YXZ",s.rotation.y=l.yaw+l.shakeX*.0012,s.rotation.x=l.pitch+l.shakeY*.0012,s.rotation.z=0;l._viewR=2800,i.fog.near=2e3,i.fog.far=8200}a.position.set(d,0,u);let p=l.lightLevel(),x=Math.sin((1-p)*Math.PI);o.intensity=1+p*.45,o.color.setHSL(.105-x*.045,.52+x*.25,.62-x*.06),r.intensity=.78+p*.25;let m=n.t%Br/Br*Math.PI*2;o.position.set(d+Math.cos(m)*1400,900+p*600,u+Math.sin(m)*1400-400)},render(){t.render(i,s)},screenToWorld(f,h){let d=new ke(f/e.VW*2-1,-(h/e.VH)*2+1);l._ray.setFromCamera(d,s);let u=new U;return l._ray.ray.intersectPlane(l._plane,u)?{x:u.x,y:u.z}:{x:l.cx,y:l.cy}},worldToScreen(f,h,d=0){return l._v3.set(f,d,h).project(s),{x:(l._v3.x+1)/2*e.VW,y:(-l._v3.y+1)/2*e.VH,behind:l._v3.z>1}},inView(f,h,d=0){let u=f-l.cx,p=h-l.cy;return u*u+p*p<(l._viewR+d)*(l._viewR+d)},viewRect(f=0){let h=l._viewR+f;return{x0:l.cx-h,y0:l.cy-h,x1:l.cx+h,y1:l.cy+h}},get zoom(){return 900/l.dist}};return l.setYawFromSim(n.player.angle||0),l.update(.1),l}var Vc=.5;function m0(n,e){let t=Math.round(xe.w*Vc),i=Math.round(xe.h*Vc),s=document.createElement("canvas");s.width=t,s.height=i;let r=s.getContext("2d");r.save(),r.scale(Vc,Vc),ab(n,r),r.restore();let o=new qn(s);o.colorSpace=on,o.anisotropy=8,o.minFilter=Mi;let a=new _e(new Yn(xe.w,xe.h),new Sn({map:o,transparent:!0}));a.rotation.x=-Math.PI/2,a.position.set(xe.w/2,0,xe.h/2),a.renderOrder=-1,e.add(a);let c=new _e(new Yn(xe.w*6,xe.h*6),new Sn({color:1060924}));c.rotation.x=-Math.PI/2,c.position.set(xe.w/2,-3,xe.h/2),e.add(c);let l=document.createElement("canvas");l.width=256,l.height=256;let f=l.getContext("2d");for(let E=0;E<260;E++){let T=Math.random()*256,I=Math.random()*256;f.fillStyle=`rgba(200,235,245,${.25+Math.random()*.5})`,f.fillRect(T,I,1.6+Math.random()*2.4,1.2)}let h=new qn(l);h.wrapS=h.wrapT=fi,h.repeat.set(220,146);let d=new _e(new Yn(xe.w*6,xe.h*6),new Xt({map:h,transparent:!0,opacity:.5,depthWrite:!1,blending:wn}));d.rotation.x=-Math.PI/2,d.position.set(xe.w/2,-1.5,xe.h/2),d.renderOrder=-2,e.add(d);let u=h.clone();u.wrapS=u.wrapT=fi,u.repeat.set(133,88);let p=new _e(new Yn(xe.w*6,xe.h*6),new Xt({map:u,transparent:!0,opacity:.3,depthWrite:!1,blending:wn}));p.rotation.x=-Math.PI/2,p.position.set(xe.w/2,-1.2,xe.h/2),p.renderOrder=-2,e.add(p);let x=[];for(let E of n.world.lakes){if(E.frozen)continue;let T=new Ar;for(let R=0;R<=28;R++){let L=R/28*Math.PI*2,X=E.r*E.wob[R%28],q=Math.cos(L)*X,N=-Math.sin(L)*X*.84;R?T.lineTo(q,N):T.moveTo(q,N)}let I=new Oo(T),v=new _e(I,new Xt({color:3040376,transparent:!0,opacity:.45,depthWrite:!1}));v.rotation.x=-Math.PI/2,v.position.set(E.x,1.2,E.y),v.renderOrder=1,e.add(v);let b=h.clone();b.wrapS=b.wrapT=fi,b.repeat.set(.045,.045);let S=new _e(I,new Xt({map:b,transparent:!0,opacity:.4,depthWrite:!1,blending:wn}));S.rotation.x=-Math.PI/2,S.position.set(E.x,1.5,E.y),S.renderOrder=2,e.add(S),x.push(b)}let m=document.createElement("canvas");m.width=4,m.height=256;let g=m.getContext("2d"),y=g.createLinearGradient(0,0,0,256);y.addColorStop(0,"#5d9bd3"),y.addColorStop(.62,"#9cc3dd"),y.addColorStop(.78,"#cfddd8"),y.addColorStop(1,"#dfe5da"),g.fillStyle=y,g.fillRect(0,0,4,256);let _=new qn(m);_.colorSpace=on;let M=new _e(new ks(34e3,18,12,0,Math.PI*2,0,Math.PI/2),new Xt({map:_,side:yn,fog:!1}));return M.position.set(xe.w/2,-40,xe.h/2),e.add(M),e.background=null,{tex:o,sync(E,T,I){let v=d.material.map,b=p.material.map;v.offset.x+=E*.0022,v.offset.y+=E*.0013,b.offset.x-=E*.0011,b.offset.y+=E*8e-4;for(let R of x)R.offset.x+=E*.006,R.offset.y+=E*.0035;M.position.set(I.cx,-40,I.cy);let S=I.lightLevel();M.material.color.setHSL(.58,.18,.62+S*.38)}}}function p0(n,e,t){let i=(e+n.world.biomeRidge(t))/xe.w,s=.05,r=Ci((i-(1/3-s))/(2*s)),o=Ci((i-(2/3-s))/(2*s)),a=(d,u,p)=>[d[0]+(u[0]-d[0])*p,d[1]+(u[1]-d[1])*p,d[2]+(u[2]-d[2])*p],c=[181,154,102],l=[74,92,48],f=[185,199,209],h=a(c,l,r);return h=a(h,f,o),h}function id(n,e){e.beginPath(),n.world.islandPath.forEach((t,i)=>i?e.lineTo(t.x,t.y):e.moveTo(t.x,t.y)),e.closePath()}function ab(n,e){let t=xe.w,i=xe.h;e.lineJoin="round",e.strokeStyle="rgba(64,124,134,0.45)",e.lineWidth=64,id(n,e),e.stroke(),e.strokeStyle="rgba(90,150,158,0.30)",e.lineWidth=26,id(n,e),e.stroke(),e.save(),id(n,e),e.clip();let s=32;for(let h=0;h<i;h+=s)for(let d=0;d<t;d+=s){if(n.world.landFactor(d+s/2,h+s/2)<=-.25)continue;let[p,x,m]=p0(n,d+s/2,h+s/2),g=Ji(d/s|0,h/s|0),y=Ji(d/96|0,h/96|0),_=.88+g*.14+(y-.5)*.12-h/i*.06;p*=_,x*=_,m*=_,e.fillStyle=`rgb(${p|0},${x|0},${m|0})`,e.fillRect(d-1,h-1,s+2,s+2)}e.lineCap="round";let r=n.world.islandPath;for(let h=0;h<3;h++){let d=h===0?96:h===1?30:7;for(let u=0;u<r.length;u++){let p=r[u],x=r[(u+1)%r.length],m=n.world.biomeAt((p.x+x.x)/2,(p.y+x.y)/2)==="winter";e.strokeStyle=h===0?m?"rgba(214,227,235,0.95)":"rgba(186,166,120,0.95)":h===1?m?"rgba(168,190,204,0.9)":"rgba(146,128,92,0.9)":"rgba(240,248,252,0.55)",e.lineWidth=d,e.beginPath(),e.moveTo(p.x,p.y),e.lineTo(x.x,x.y),e.stroke()}}for(let h of n.world.lakes){e.save(),e.translate(h.x,h.y);let d=()=>{e.beginPath();for(let p=0;p<=28;p++){let x=p/28*Math.PI*2,m=h.r*h.wob[p%28],g=Math.cos(x)*m,y=Math.sin(x)*m*.84;p?e.lineTo(g,y):e.moveTo(g,y)}e.closePath()};e.save(),e.scale(1.06,1.06),d(),e.fillStyle=h.frozen?"rgba(238,246,251,.95)":"rgba(96,118,66,.7)",e.fill(),e.restore(),d();let u=e.createRadialGradient(0,-.3*h.r,h.r*.1,0,0,h.r);h.frozen?(u.addColorStop(0,"#dfeaf2"),u.addColorStop(1,"#96b2c8")):(u.addColorStop(0,"#33687c"),u.addColorStop(1,"#0c2531")),e.fillStyle=u,e.fill(),e.restore()}for(let h of n.world.monuments){let d=e.createRadialGradient(h.x,h.y,h.r*.2,h.x,h.y,h.r);d.addColorStop(0,"rgba(110,106,95,.5)"),d.addColorStop(.8,"rgba(98,94,84,.32)"),d.addColorStop(1,"rgba(90,86,76,0)"),e.fillStyle=d,e.beginPath(),e.arc(h.x,h.y,h.r,0,7),e.fill()}e.lineCap="round",e.lineJoin="round";let o=[];for(let h of n.world.roads){let d=null;for(let u=0;u<h.pts.length;u++)h.fade[u]>.05?(d||(d={rd:h,pts:[]}),d.pts.push(h.pts[u])):d&&(d.pts.length>1&&o.push(d),d=null);d&&d.pts.length>1&&o.push(d)}let a=(h,d)=>{let u=[];for(let p=0;p<h.length-1;p++){let x=h[p],m=h[p+1],g=Math.hypot(m.x-x.x,m.y-x.y),y=Math.max(1,Math.ceil(g/d));for(let _=0;_<y;_++)u.push({x:x.x+(m.x-x.x)*(_/y),y:x.y+(m.y-x.y)*(_/y)})}return u.push(h[h.length-1]),u},c=(h,d,u,p,x)=>{e.fillStyle=d,e.globalAlpha=x;let m=a(h.pts,u*.55);for(let g=0;g<m.length;g++){let y=m[g],_=Ji(y.x*.13|0,y.y*.13|0),M=Ji(y.x*.31|0,y.y*.07|0),E=u*(.86+_*.34),T=(M-.5)*p,I=(_-.5)*p;e.beginPath(),e.arc(y.x+T,y.y+I,E,0,7),e.fill()}e.globalAlpha=1};for(let h of o)c(h,"#564a31",h.rd.w*.62,9,.85);for(let h of o)c(h,"#6c5d3b",h.rd.w*.46,6,1);for(let h of o)c(h,"#75653f",h.rd.w*.3,8,.5);for(let h of o){e.fillStyle="#5d5034";let d=a(h.pts,34);for(let u=0;u<d.length;u++){let p=d[u],x=Ji(p.x*.21|0,p.y*.17|0);if(x<.45)continue;let m=d[Math.max(0,u-1)],g=d[Math.min(d.length-1,u+1)],y=Math.atan2(g.y-m.y,g.x-m.x)+Math.PI/2,_=x>.72?1:-1,M=h.rd.w*.58+x*53%1*14;e.globalAlpha=.4,e.beginPath(),e.arc(p.x+Math.cos(y)*M*_,p.y+Math.sin(y)*M*_,2.5+x*31%1*5,0,7),e.fill()}e.globalAlpha=1}e.globalAlpha=.3;for(let h of o)e.strokeStyle="#544731",e.lineWidth=4,e.beginPath(),h.pts.forEach((d,u)=>u?e.lineTo(d.x,d.y):e.moveTo(d.x,d.y)),e.stroke();e.globalAlpha=1;for(let h of o){let d=a(h.pts,90);e.fillStyle="rgba(58,48,30,0.5)";for(let u of d){let p=Ji(u.x*.07|0,u.y*.23|0);p>.82&&(e.beginPath(),e.ellipse(u.x+(p*91%1-.5)*h.rd.w*.5,u.y+(p*47%1-.5)*h.rd.w*.5,4+p*5,3+p*3,p*6,0,7),e.fill())}}let l=11;for(let h of n.world.crossings){let d=Math.cos(h.railAng),u=Math.sin(h.railAng);e.save(),e.translate(h.x,h.y),e.rotate(h.railAng);let p=e.createRadialGradient(0,0,10,0,0,64);p.addColorStop(0,"rgba(116,104,78,0.95)"),p.addColorStop(.7,"rgba(108,96,72,0.7)"),p.addColorStop(1,"rgba(100,90,68,0)"),e.fillStyle=p,e.beginPath(),e.ellipse(0,0,64,50,0,0,7),e.fill(),e.fillStyle="#7b6a45";for(let x of[-l-7,0,l+7])e.fillRect(-34,x-3.4,68,6.8);e.strokeStyle="rgba(60,50,34,0.5)",e.lineWidth=1.2;for(let x of[-l-7,0,l+7])e.strokeRect(-34,x-3.4,68,6.8);e.restore()}let f=(h,d)=>n.world.crossings.some(u=>(h-u.x)*(h-u.x)+(d-u.y)*(d-u.y)<2704);for(let h of n.world.rails){let d=()=>{e.beginPath(),h.pts.forEach((u,p)=>p?e.lineTo(u.x,u.y):e.moveTo(u.x,u.y))};d(),e.strokeStyle="rgba(87,77,64,0.85)",e.lineWidth=2*l+16,e.stroke(),d(),e.strokeStyle="rgba(107,95,78,0.85)",e.lineWidth=2*l+7,e.stroke()}for(let h=0;h<i;h+=96)for(let d=0;d<t;d+=96){if(!n.world.onLand(d,h)||n.world.lakeAt(d,h))continue;let u=Ji(d/96|0,h/96|0);if(u>.5)continue;let[p,x,m]=p0(n,d,h);e.fillStyle=`rgba(${p*.75|0},${x*.75|0},${m*.75|0},0.5)`,e.beginPath(),e.ellipse(d+u*80,h+u*7919%1*80,9+u*14,5+u*8,u*6,0,7),e.fill()}e.restore()}var sd=new Map;function we(n,e={}){let t=n+JSON.stringify(e);return sd.has(t)||sd.set(t,new Sn({color:n,emissive:e.emissive||0,emissiveIntensity:e.emissiveIntensity??1,transparent:!!e.transparent,opacity:e.opacity??1,flatShading:!0})),sd.get(t)}var fe={box:new as(1,1,1),cyl:new Is(1,1,1,8),cyl6:new Is(1,1.18,1,6),cone:new So(1,1,7),ico:new Ls(1,0),sphere:new ks(1,8,6),quad:new Yn(1,1)},Gc=null;function od(){if(Gc)return Gc;let n=document.createElement("canvas");n.width=64,n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.4,"rgba(255,255,255,0.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),Gc=new qn(n),Gc}var Wc=null;function qc(){if(Wc)return Wc;let n=document.createElement("canvas");n.width=128,n.height=128;let e=n.getContext("2d"),t=e.createRadialGradient(64,64,6,64,64,64);t.addColorStop(0,"rgba(255,255,255,0.5)"),t.addColorStop(.55,"rgba(255,255,255,0.42)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),e.globalCompositeOperation="destination-out";for(let i=0;i<5;i++){let s=i*1.26,r=58,o=e.createRadialGradient(64+Math.cos(s)*r,64+Math.sin(s)*r,2,64+Math.cos(s)*r,64+Math.sin(s)*r,26);o.addColorStop(0,"rgba(0,0,0,0.5)"),o.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=o,e.fillRect(0,0,128,128)}return Wc=new qn(n),Wc}var Xc=null;function ad(){if(Xc)return Xc;let n=document.createElement("canvas");n.width=64,n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,4,32,32,30);return t.addColorStop(0,"rgba(8,8,6,0.42)"),t.addColorStop(.7,"rgba(8,8,6,0.22)"),t.addColorStop(1,"rgba(8,8,6,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),Xc=new qn(n),Xc}function gs(n,e=60){let t=new xi({map:od(),color:n,transparent:!0,blending:wn,depthWrite:!1,depthTest:!1}),i=new Vi(t);return i.scale.set(e,e,1),i.renderOrder=4,i}var rd=null;function zs(n=40){rd||(rd=new _i(.5,14));let e=new Xt({map:ad(),transparent:!0,depthWrite:!1}),t=new _e(rd,e);return t.rotation.x=-Math.PI/2,t.scale.set(n,n*.8,1),t}var ta={wood:6111006,stone:5659747,metal:3948871,armored:2567996},kr=new Map;function g0(n){let e=document.createElement("canvas");e.width=128,e.height=128;let t=e.getContext("2d"),i=lb(n.length*1337+7);if(n==="wood"){t.fillStyle="#86602e",t.fillRect(0,0,128,128);for(let r=0;r<128;r+=21){t.fillStyle=`rgba(${70+i()*50|0},${48+i()*34|0},${20+i()*16|0},0.55)`,t.fillRect(r,0,21,128),t.fillStyle="rgba(42,28,12,0.85)",t.fillRect(r,0,2,128),t.strokeStyle="rgba(50,34,14,0.30)",t.lineWidth=1;for(let o=0;o<5;o++){let a=r+4+i()*14;t.beginPath(),t.moveTo(a,0),t.bezierCurveTo(a+i()*4-2,40,a+i()*4-2,88,a,128),t.stroke()}if(i()>.55){let o=r+6+i()*10,a=i()*128;t.fillStyle="rgba(40,26,10,0.6)",t.beginPath(),t.ellipse(o,a,3.2,4.5,.3,0,7),t.fill(),t.strokeStyle="rgba(120,90,48,0.5)",t.beginPath(),t.ellipse(o,a,5,6.5,.3,0,7),t.stroke()}}t.fillStyle="rgba(255,235,200,0.05)",t.fillRect(0,0,128,10)}else if(n==="stone"){t.fillStyle="#7b8289",t.fillRect(0,0,128,128);let r=26;for(let o=0;o<5;o++){let a=o%2*26;for(let c=-26;c<128;c+=52){let l=c+a;t.fillStyle=`rgba(${108+i()*34|0},${114+i()*32|0},${120+i()*30|0},0.7)`,t.fillRect(l+2,o*r+2,48,r-4),t.strokeStyle="rgba(60,66,72,0.35)",t.lineWidth=1;for(let f=0;f<3;f++){let h=l+6+i()*38,d=o*r+5+i()*(r-10);t.beginPath(),t.moveTo(h,d),t.lineTo(h+6+i()*8,d+i()*3-1.5),t.stroke()}}t.fillStyle="rgba(70,76,82,0.9)",t.fillRect(0,o*r-1.5,128,3)}}else if(n==="metal"){t.fillStyle="#5b6168",t.fillRect(0,0,128,128);for(let r=0;r<128;r+=43){t.fillStyle=`rgba(${80+i()*26|0},${88+i()*22|0},${96+i()*20|0},0.45)`,t.fillRect(r+2,0,39,128),t.fillStyle="rgba(34,38,43,0.9)",t.fillRect(r,0,2.4,128);for(let o=8;o<128;o+=18)t.fillStyle="rgba(28,32,36,0.9)",t.beginPath(),t.arc(r+6,o,1.9,0,7),t.fill(),t.fillStyle="rgba(200,210,218,0.5)",t.beginPath(),t.arc(r+5.4,o-.6,.8,0,7),t.fill()}t.strokeStyle="rgba(168,178,188,0.25)";for(let r=0;r<7;r++){let o=i()*128,a=i()*128;t.beginPath(),t.moveTo(o,a),t.lineTo(o+10+i()*22,a+i()*6-3),t.stroke()}for(let r=0;r<5;r++){let o=i()*128,a=i()*128,c=t.createRadialGradient(o,a,1,o,a,7+i()*10);c.addColorStop(0,"rgba(140,72,30,0.5)"),c.addColorStop(1,"rgba(140,72,30,0)"),t.fillStyle=c,t.fillRect(o-18,a-18,36,36)}}else{t.fillStyle="#3c4a5e",t.fillRect(0,0,128,128),t.strokeStyle="rgba(22,28,38,0.9)",t.lineWidth=6,t.strokeRect(3,3,122,122),t.strokeStyle="rgba(30,38,50,0.85)",t.lineWidth=10,t.beginPath(),t.moveTo(0,0),t.lineTo(128,128),t.stroke(),t.beginPath(),t.moveTo(128,0),t.lineTo(0,128),t.stroke(),t.strokeStyle="rgba(110,130,160,0.35)",t.lineWidth=2,t.beginPath(),t.moveTo(0,0),t.lineTo(128,128),t.stroke(),t.beginPath(),t.moveTo(128,0),t.lineTo(0,128),t.stroke(),t.fillStyle="rgba(190,205,225,0.6)";for(let[r,o]of[[12,12],[116,12],[12,116],[116,116],[64,14],[64,114],[14,64],[114,64]])t.beginPath(),t.arc(r,o,2.6,0,7),t.fill();t.fillStyle="rgba(255,255,255,0.05)",t.fillRect(0,0,128,22)}let s=new qn(e);return s.wrapS=s.wrapT=fi,s.colorSpace=on,s}function lb(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function na(n){let e="w"+n;return kr.has(e)||kr.set(e,new Sn({map:g0(n),flatShading:!0})),kr.get(e)}function x0(n){let e="f"+n;if(!kr.has(e)){let t=new Sn({map:g0(n),flatShading:!0});t.color.setScalar(.72),kr.set(e,t)}return kr.get(e)}var y0=Math.PI*2;function _0(n,e){let t=n.resources.filter(O=>O.type==="tree"),i=n.resources.filter(O=>O.type==="stone"),s=n.resources.filter(O=>O.type==="metal"),r=new Pt(fe.cyl,we(6111008),t.length),o=new Pt(fe.cone,we(16777215),t.length),a=new Pt(fe.cone,we(16777215),t.length),c=new Pt(fe.cone,we(16777215),t.length),l=new Pt(fe.ico,we(16777215),t.length),f=new Pt(fe.ico,we(16777215),t.length),h=new Pt(fe.cone,we(15660281),t.length),d=new Pt(fe.ico,we(9278603),i.length),u=new Pt(fe.ico,we(8094328),i.length),p=new Pt(fe.ico,we(9271114),s.length),x=new Pt(fe.ico,we(14198864,{emissive:6965776}),s.length),m=new Pt(fe.ico,we(13145412,{emissive:5914124}),s.length);for(let O of[r,o,a,c,l,f,h,d,u,p,x,m])O.frustumCulled=!1,e.add(O);let g=new rt,y=new rt,_=[],M=[];t.forEach((O,W)=>{let de=.85+O.seed*7.3%1*.4,k=n.world.biomeAt(O.x,O.y)==="winter",H=!k&&O.seed*13.1%1<.42;_.push(k),M.push(H),g.setHex(k?3953968:3494175).multiplyScalar(de),y.setHex(k?5995082:5274160).multiplyScalar(de),o.setColorAt(W,g),a.setColorAt(W,y),c.setColorAt(W,y),g.setHex(4613672).multiplyScalar(de),y.setHex(6127926).multiplyScalar(de),l.setColorAt(W,g),f.setColorAt(W,y)});for(let O of[o,a,c,l,f])O.instanceColor&&(O.instanceColor.needsUpdate=!0);let E=new vt,T=0;function I(){let O=new U(.001,.001,.001);t.forEach((W,de)=>{let k=W.amount<=0?.001:.55+.45*(W.amount/W.max),H=(W.seed*13.7%1-.5)*.12,$=M[de];E.makeRotationZ(H).scale(new U(7*k,30*k,7*k)).setPosition(W.x,15*k,W.y),r.setMatrixAt(de,E),E.makeRotationY(W.seed).scale($?O:new U(31*k,36*k,31*k)).setPosition(W.x,32*k,W.y),o.setMatrixAt(de,E),E.makeRotationY(W.seed*2).scale($?O:new U(23*k,28*k,23*k)).setPosition(W.x+2,52*k,W.y-2),a.setMatrixAt(de,E),E.makeRotationY(W.seed*3).scale($?O:new U(14*k,22*k,14*k)).setPosition(W.x+3,70*k,W.y-3),c.setMatrixAt(de,E),E.makeRotationY(W.seed).scale($?new U(26*k,20*k,26*k):O).setPosition(W.x,42*k,W.y),l.setMatrixAt(de,E),E.makeRotationY(W.seed*2.3).scale($?new U(17*k,14*k,17*k):O).setPosition(W.x+6*k,56*k,W.y-4*k),f.setMatrixAt(de,E);let ee=_[de]?k:.001;E.makeScale(11*ee,10*ee,11*ee).setPosition(W.x+3,80*ee,W.y-3),h.setMatrixAt(de,E)}),i.forEach((W,de)=>{let k=W.amount<=0?.001:(.55+.45*(W.amount/W.max))*W.r;E.makeRotationY(W.seed).scale(new U(k,k*.75,k)).setPosition(W.x,k*.45,W.y),d.setMatrixAt(de,E),E.makeRotationY(W.seed*3).scale(new U(k*.45,k*.35,k*.45)).setPosition(W.x+k*.9,k*.2,W.y+k*.35),u.setMatrixAt(de,E)}),s.forEach((W,de)=>{let k=W.amount<=0?.001:(.55+.45*(W.amount/W.max))*W.r;E.makeRotationY(W.seed*2).scale(new U(k,k*.7,k)).setPosition(W.x,k*.42,W.y),p.setMatrixAt(de,E),E.makeScale(k*.4,k*.34,k*.4).setPosition(W.x+3,k*.85,W.y-2),x.setMatrixAt(de,E),E.makeScale(k*.26,k*.22,k*.26).setPosition(W.x-k*.5,k*.7,W.y+k*.3),m.setMatrixAt(de,E)});for(let W of[r,o,a,c,l,f,h,d,u,p,x,m])W.instanceMatrix.needsUpdate=!0}I();let v=new Pt(fe.ico,we(7896708),n.world.boulders.length||1);n.world.boulders.forEach((O,W)=>{E.makeRotationY(O.seed).scale(new U(O.r,O.r*.8,O.r)).setPosition(O.x,O.r*.45,O.y),v.setMatrixAt(W,E)}),v.frustumCulled=!1,e.add(v);let b=new Pt(fe.ico,we(8685967),n.world.rocks.length||1);n.world.rocks.forEach((O,W)=>{E.makeRotationY(O.seed).scale(new U(O.r,O.r*.6,O.r)).setPosition(O.x,O.r*.3,O.y),b.setMatrixAt(W,E)}),b.frustumCulled=!1,e.add(b);let S=new Pt(fe.cyl,we(7032616),n.world.palms.length||1),R=new Pt(fe.cone,we(5077552),n.world.palms.length||1);n.world.palms.forEach((O,W)=>{E.makeScale(3.4,44,3.4).setPosition(O.x,22,O.y),S.setMatrixAt(W,E),E.makeScale(26,14,26).setPosition(O.x,48,O.y),R.setMatrixAt(W,E)}),S.frustumCulled=!1,R.frustumCulled=!1,e.add(S,R);let L=n.world.flora.filter(O=>O.type==="cactus"),X=new Pt(fe.cyl,we(5143098),L.length||1);L.forEach((O,W)=>{E.makeScale(4.5,22,4.5).setPosition(O.x,11,O.y),X.setMatrixAt(W,E)}),X.frustumCulled=!1,e.add(X);let q=n.world.flora.filter(O=>O.type==="fern"||O.type==="shrub"),N=new Pt(fe.ico,we(5599290),q.length||1);q.forEach((O,W)=>{E.makeScale(8,6,8).setPosition(O.x,4,O.y),N.setMatrixAt(W,E)}),N.frustumCulled=!1,e.add(N),cb(n,e);{let O=[],W=new Je,de=we(10133928),k=11;for(let $ of n.world.rails)for(let ee=0;ee<$.pts.length-1;ee++){let ye=$.pts[ee],C=$.pts[ee+1],Q=Math.hypot(C.x-ye.x,C.y-ye.y),V=Math.atan2(C.y-ye.y,C.x-ye.x),D=-Math.sin(V),pe=Math.cos(V);for(let Ae=8;Ae<Q;Ae+=24){let Fe=ye.x+Math.cos(V)*Ae,Me=ye.y+Math.sin(V)*Ae;n.world.crossings.some(ot=>(Fe-ot.x)**2+(Me-ot.y)**2<2704)||O.push({x:Fe,y:Me,a:V})}for(let Ae of[-k,k]){let Fe=new _e(fe.box,de);Fe.scale.set(Q+2,2.2,2.4),Fe.position.set((ye.x+C.x)/2+D*Ae,1.6,(ye.y+C.y)/2+pe*Ae),Fe.rotation.y=-V,W.add(Fe)}}let H=new Pt(fe.box,we(4141858),O.length||1);O.forEach(($,ee)=>{E.makeRotationY(-$.a).scale(new U(5,1.6,2*k+10)).setPosition($.x,.9,$.y),H.setMatrixAt(ee,E)}),H.frustumCulled=!1,e.add(H,W)}let B=n.barrels.map(O=>{let W;return O.crate?(W=new _e(fe.box,we(9069104)),W.scale.set(O.r*1.8,O.r*1.5,O.r*1.8),W.position.set(O.x,O.r*.75,O.y)):(W=new _e(fe.cyl,we(10768174)),W.scale.set(O.r*.9,O.r*1.7,O.r*.9),W.position.set(O.x,O.r*.85,O.y)),e.add(W),W}),Z={quarryArm:null,gates:[],fadeables:[]};for(let O of n.world.monuments)fb(n,e,O,Z);db(n,e);for(let O of n.world.crossings){let W=new Je;W.position.set(O.x,0,O.y),W.rotation.y=-O.railAng;for(let de of[-1,1]){let k=new _e(fe.box,we(2500139));k.scale.set(5,20,5),k.position.set(0,10,de*38),W.add(k);let H=new _e(fe.box,we(12597802));H.scale.set(40,3.6,3.6),H.position.set(20,18,de*38);let $=new Je;$.position.set(0,18,de*38),H.position.set(20,0,0),$.add(H),W.add($),Z.gates.push({pivot:$,cr:O,side:de})}e.add(W)}let ce=new Je;e.add(ce);let ue=new Map,Ee=new Map,De=new Map,ze=-1,Qe=new Set;function se(O){if(O==="p1")return 8308816;let W=n.teams.find(de=>de.owner===O);return W?parseInt(W.col.slice(1),16):8947848}function re(){if(n.nav.stamp!==ze){ze=n.nav.stamp,Qe.clear();for(let[O,W]of n.structures){Qe.add(O);let de=W.mat,k=Ee.get(O);if(k&&k.sig!==de&&(ce.remove(k.mesh),Ee.delete(O),k=null),!k){let[H,$]=O.split(",").map(Number),ee=new _e(fe.box,x0(W.mat||"wood"));ee.scale.set(62,5,62),ee.position.set(H*64+64/2,2.5,$*64+64/2),ce.add(ee),Ee.set(O,{mesh:ee,sig:de})}}for(let[O,W]of Ee)Qe.has(O)||(ce.remove(W.mesh),Ee.delete(O));Qe.clear();for(let[O,W]of n.walls){if(W.hp<=0)continue;Qe.add(O);let de=W.type+W.mat+(W.open?"o":"c"),k=ue.get(O);if(k&&k.sig!==de&&(ce.remove(k.mesh),ue.delete(O),k=null),!k){let H=Ot(O,W),$=(H[0]+H[2])/2,ee=(H[1]+H[3])/2,ye=H[0]===H[2],C=new Je;if(W.type==="door"&&W.open)for(let Q of[-26,26]){let V=new _e(fe.box,we(ta[W.mat]||ta.wood));V.scale.set(ye?11:12,40,ye?12:11),V.position.set(ye?0:Q,20,ye?Q:0),C.add(V)}else{let Q=na(W.mat||"wood"),V=new _e(fe.box,Q),D=W.type==="door"?42:48;V.scale.set(ye?11:64,D,ye?64:11),V.position.y=D/2,W.type==="door"&&(V.material=Q.clone(),V.material.color.setScalar(.78)),C.add(V);let pe=new _e(fe.box,we(ta[W.mat]||ta.wood));if(pe.scale.set(ye?13:66,4,ye?66:13),pe.position.y=D+2,C.add(pe),W.type==="door"){let Ae=new _e(fe.sphere,we(14202462));Ae.scale.set(2.5,2.5,2.5),Ae.position.set(ye?7:10,22,ye?10:7),C.add(Ae)}}C.position.set($,0,ee),ce.add(C),ue.set(O,{mesh:C,sig:de})}}for(let[O,W]of ue)Qe.has(O)||(ce.remove(W.mesh),ue.delete(O));Qe.clear();for(let[O,W]of n.deploys){Qe.add(O);let de=W.type+(W.tier||"")+W.owner,k=De.get(O);if(k&&k.sig!==de&&(ce.remove(k.group),De.delete(O),k=null),!k){let[H,$]=O.split(",").map(Number),ee=H*64+64/2,ye=$*64+64/2,C=new Je;C.position.set(ee,0,ye);let Q={group:C,sig:de};if(W.type==="turret"){let V=W.tier===3?6277344:W.tier===2?14721594:10133928;for(let ae=0;ae<3;ae++){let ge=ae/3*y0+.5,Te=new _e(fe.cyl,we(3027760));Te.scale.set(2.2,18,2.2),Te.position.set(Math.cos(ge)*11,8,Math.sin(ge)*11),Te.rotation.z=-Math.cos(ge)*.5,Te.rotation.x=Math.sin(ge)*.5,C.add(Te);let Re=new _e(fe.box,we(2303787));Re.scale.set(6,2,6),Re.position.set(Math.cos(ge)*16,1,Math.sin(ge)*16),C.add(Re)}let D=new _e(fe.cyl,we(3817284));D.scale.set(3.6,16,3.6),D.position.y=16,C.add(D);let pe=new Je;pe.position.y=26;for(let ae of[-1,1]){let ge=new _e(fe.box,we(4870228));ge.scale.set(12,13,2.4),ge.position.set(0,2,ae*7.6),pe.add(ge)}let Ae=new _e(fe.box,we(5659994));Ae.scale.set(13,9.5,12),Ae.position.y=3,pe.add(Ae);let Fe=new _e(fe.cyl,we(1316892));Fe.scale.set(3.2,2,3.2),Fe.rotation.z=Math.PI/2,Fe.position.set(7.6,4.5,0),pe.add(Fe);let Me=new _e(fe.sphere,we(13777960,{emissive:13777960,emissiveIntensity:.8}));Me.scale.set(1.5,1.5,1.5),Me.position.set(9.2,4.5,0),pe.add(Me);let ot=W.tier===3?22:W.tier===2?17:13,P=new _e(fe.box,we(1974822));if(P.scale.set(ot,3.8,3.4),P.position.set(ot/2+5,-2.6,0),pe.add(P),W.tier===2){let ae=P.clone();ae.position.z=4.4,pe.add(ae)}let w=new _e(fe.cyl,we(V,{emissive:V,emissiveIntensity:.45}));w.scale.set(2,2.6,2),w.rotation.z=Math.PI/2,w.position.set(ot+6,-2.6,0),pe.add(w);let K=new _e(fe.cyl,we(V,{emissive:V,emissiveIntensity:.3}));K.scale.set(4.1,2,4.1),K.position.y=21,C.add(K),C.add(pe),Q.pivot=pe}else if(W.type==="cupboard"){let V=new _e(fe.box,we(se(W.owner)));V.scale.set(42,40,42),V.position.y=20,C.add(V);let D=new _e(fe.box,we(2891532));D.scale.set(46,5,46),D.position.y=42,C.add(D);let pe=gs(7790698,26);pe.position.y=50,C.add(pe),Q.led=pe}else{let V=new _e(fe.box,we(7031332));V.scale.set(40,24,40),V.position.y=12,C.add(V)}ce.add(C),De.set(O,Q)}}for(let[O,W]of De)Qe.has(O)||(ce.remove(W.group),De.delete(O))}}let F=new Je;e.add(F);let ne=-1;function oe(){if(n.fences.length!==ne){ne=n.fences.length,F.clear();for(let O of n.fences){let W=new _e(fe.box,we(8215600));W.scale.set(46,22,5),W.position.set(O.x,11,O.y),W.rotation.y=-O.a,F.add(W)}}}return{sync(O){T-=O,T<=0&&(T=.25,I()),n.barrels.forEach((de,k)=>{B[k].visible=de.hp>0}),re(),oe();for(let[de,k]of De){let H=n.deploys.get(de);if(H&&(k.pivot&&(k.pivot.rotation.y=-(H.angle||0)),k.led&&H.store)){let $=H.store.wood+H.store.stone+H.store.metal>0;k.led.material.color.setHex($?7790698:16734780)}}if(Z.quarryArm){let de=n.quarry;Z.quarryArm.rotation.z=de&&de.owner?Math.sin(de.arm*2.4)*.35:-.18}for(let de of Z.gates)de.pivot.rotation.z=(1-de.cr.gate)*1.35;let W=n.player;for(let de of Z.fadeables){let k=W.x-de.x,H=W.y-de.y,ee=!W.dead&&k*k+H*H<(de.r+90)*(de.r+90)?.3:1;for(let ye of de.mats)ye.opacity+=(ee-ye.opacity)*Math.min(1,O*7)}}}}function cb(n,e){let{hash2:t}=hb,i=[],s=[],r=[],o=13824,a=9216;for(let u=120;u<a-120;u+=150)for(let p=120;p<o-120;p+=150){let x=t(p/150|0,u/150|0);if(x>.62)continue;let m=p+x*977%1*130,g=u+x*467%1*130;if(!n.world.onLand(m,g)||n.world.lakeAt(m,g)||n.world.pathDist(m,g)<40)continue;let y=n.world.biomeAt(m,g);y==="jungle"?i.push({x:m,y:g,h:x}):y==="desert"?x<.3&&s.push({x:m,y:g,h:x}):x<.4&&r.push({x:m,y:g,h:x})}let c=new vt,l=new rt,f=new Pt(fe.cone,we(16777215),i.length||1);i.forEach((u,p)=>{let x=5+u.h*8;c.makeRotationY(u.h*6).scale(new U(x,x*1.8,x)).setPosition(u.x,x*.9,u.y),f.setMatrixAt(p,c),l.setHex(4876846).multiplyScalar(.8+u.h*37%1*.5),f.setColorAt(p,l)});let h=new Pt(fe.ico,we(16777215),s.length||1);s.forEach((u,p)=>{let x=3+u.h*8;c.makeRotationY(u.h*9).scale(new U(x,x*.55,x)).setPosition(u.x,x*.3,u.y),h.setMatrixAt(p,c),l.setHex(10259040).multiplyScalar(.85+u.h*53%1*.3),h.setColorAt(p,l)});let d=new Pt(fe.sphere,we(15265781),r.length||1);r.forEach((u,p)=>{let x=6+u.h*12;c.makeScale(x,x*.4,x*.8).setPosition(u.x,x*.16,u.y),d.setMatrixAt(p,c)});for(let u of[f,h,d])u.frustumCulled=!1,u.instanceColor&&(u.instanceColor.needsUpdate=!0),e.add(u)}var hb={hash2(n,e){let t=n*374761393+e*668265263|0;return t=t^t>>13|0,t=Math.imul(t,1274126177),((t^t>>16)>>>0)/4294967296}};function fb(n,e,t,i){let s=new Je;s.position.set(t.x,0,t.y);let r=(c,l,f,h,d,u,p,x,m=0,g)=>{let y=new _e(c,we(l,g));return y.scale.set(f,h,d),y.position.set(u,p,x),y.rotation.y=m,s.add(y),y},o=[],a=(...c)=>{let l=r(...c),f=l.material.clone();return f.transparent=!0,l.material=f,o.push(f),l};if(t.type==="gas"){a(fe.box,11027246,216,8,30,0,64,-70);for(let c of[-96,-30,36,96])r(fe.box,4147024,6,60,6,c,30,-62);for(let c of[-58,0])r(fe.box,5989227,18,30,16,c,15,-22);a(fe.box,9081241,54,52,50,58,26,-16),r(fe.box,12574959,18,14,2,66,34,10),r(fe.box,13279562,26,26,6,-104,40,-62)}else if(t.type==="junk"){for(let c=0;c<5;c++){let l=c/5*y0;r(fe.ico,7238780,26,14,20,Math.cos(l)*70,8,Math.sin(l)*54,l)}r(fe.box,8011824,56,22,26,-58,11,-40,.3),r(fe.box,3824234,56,22,26,54,11,44,-.5),r(fe.cyl,2302237,12,16,12,70,8,-50),r(fe.cyl,2302237,12,16,12,-66,8,58)}else if(t.type==="warehouse"){a(fe.box,8291470,252,70,164,0,35,0),a(fe.box,5988971,264,10,176,0,74,0);for(let c of[-72,0,72])a(fe.box,2764597,60,46,4,c,23,84);a(fe.box,4870488,30,14,16,-38,84,0),a(fe.box,4870488,30,14,16,38,84,0)}else if(t.type==="quarry"){r(fe.cyl,3814438,46,8,28,-36,4,26),r(fe.box,3948871,12,64,12,8,32,-46);let c=new Je;c.position.set(14,60,-44);let l=new _e(fe.box,we(8226963));l.scale.set(86,9,9),c.add(l);let f=new _e(fe.sphere,we(10768430));f.scale.set(9,9,9),f.position.x=-43,c.add(f),s.add(c),i.quarryArm=c,r(fe.box,5061152,4,46,4,-44,23,-58),r(fe.box,7236186,24,13,2,-32,40,-58)}o.length&&i.fadeables.push({x:t.x,y:t.y,r:t.r,mats:o}),e.add(s)}function db(n,e){let t=n.world.shop,i=new Je;i.position.set(t.x,0,t.y);let s=new _e(fe.cyl,we(6969398));s.scale.set(46,6,46),s.position.y=3,i.add(s);let r=new _e(fe.box,we(10120764));r.scale.set(60,24,22),r.position.set(0,16,2),i.add(r);let o=new _e(fe.cone,we(11751744));o.scale.set(52,26,52),o.position.y=56,i.add(o);for(let c of[-34,34]){let l=new _e(fe.cyl,we(6177574));l.scale.set(3,44,3),l.position.set(c,22,8),i.add(l)}let a=new _e(new Ns(Tt-7,Tt,72),new Xt({color:9885695,transparent:!0,opacity:.3,side:Pn,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=1.2,i.add(a),e.add(i)}var ld=13081716,Ur=Math.PI*2;function Nt(n,e,t,i,s,r,o){let a=new _e(fe.box,we(n));return a.scale.set(e,t,i),a.position.set(s,r,o),a}function xt(n,e,t,i,s,r=1,o=1){let a=new _e(fe.sphere,we(n));return a.scale.set(e,e*r,e*o),a.position.set(t,i,s),a}var ia={pistol:n=>n.add(Nt(2303519,10,4,3.4,11,0,0)),rifle:n=>{n.add(Nt(2303519,20,3.6,3.4,15,0,0)),n.add(Nt(4864544,5,5,3.8,7,-1,0))},shotgun:n=>{n.add(Nt(2827808,16,4.6,4,13,0,0)),n.add(Nt(5980710,5,5.5,4.2,5,-1,0))},hmg:n=>{n.add(Nt(2303519,24,5,4.4,16,0,0)),n.add(Nt(3817271,6,7,4.8,10,-3,0))},tool:n=>{n.add(Nt(5980710,13,3,3,9,0,0)),n.add(Nt(12173511,4,8,3.4,16,1,0))},rocket:n=>{n.add(Nt(3751983,22,6.5,6,14,1,0)),n.add(Nt(16751421,3,7,6.4,25,1,0))},hammer:n=>{n.add(Nt(5980710,11,3,3,8,0,0)),n.add(Nt(10133928,4,7,4.4,14,1,0))},jack:n=>{n.add(Nt(1842204,4,4,3.4,6,1,0)),n.add(Nt(13279802,11,9,5.5,13,0,0)),n.add(Nt(3817271,4,5.5,4,20,-1,0)),n.add(Nt(12173511,11,2.6,2.6,27,-2,0))}};function M0(n,e={}){let t=new Je,i={};i.shadow=zs(46),i.shadow.position.y=1,t.add(i.shadow),i.lower=new Je,t.add(i.lower);for(let c of["L","R"]){let l=new Je;l.position.set(0,12,c==="L"?-3.2:3.2);let f=Nt(3289130,4.6,12,4.6,0,-6,0);l.add(f),i.lower.add(l),i["leg"+c]=l}i.torso=Nt(n,10,14,12,0,24.5,0),t.add(i.torso),i.torsoShade=Nt(v0(n,.7),10.4,4.5,12.4,0,19,0),t.add(i.torsoShade),i.armor=Nt(9804963,11,10,13,.8,24.5,0),i.armor.visible=!1,t.add(i.armor),i.pack=Nt(4866100,4,9,8,-7,25,0),t.add(i.pack),i.armL=new Je,i.armL.position.set(0,30,-7.4);let s=Nt(ld,3.6,11,3.6,0,-5,0);i.armL.add(s),t.add(i.armL),i.armR=new Je,i.armR.position.set(2,29,7.4),i.armR.add(Nt(ld,9,3.6,3.6,4.5,0,-1.5)),i.gun=new Je,i.armR.add(i.gun),t.add(i.armR),i.head=new Je,i.head.position.y=38;let r=null;if(e.scientist){i.head.add(xt(n,6.3,0,.4,0)),i.head.add(Nt(1974822,5.5,4.5,7.5,4.2,-1.2,0));for(let l of[-1,1])i.head.add(xt(14214848,1.3,5.2,1.4,l*2.4));let c=new _e(fe.cyl,we(5857382));c.scale.set(3.6,12,3.6),c.position.set(-8,25,0),t.add(c),i.pack.visible=!1}else{i.head.add(xt(ld,5.6,0,0,0));let c=new _e(fe.sphere,we(e.hairCol??3811864));c.scale.set(5.9,4.4,5.9),c.position.y=2.2,i.head.add(c),r=new _e(fe.cyl,we(n)),r.scale.set(5.9,1.6,5.9),r.position.y=1.2,i.head.add(r)}i.band=r,i.helmet=new Je;let o=new _e(fe.sphere,we(10136504));o.scale.set(6.3,6.3,6.3),i.helmet.add(o);let a=Nt(1119516,3,3,9.5,4.6,-.5,0);return i.helmet.add(a),i.helmet.visible=!1,i.head.add(i.helmet),t.add(i.head),t.userData={parts:i,colHex:n,phase:Math.random()*7,setGun(c){t.userData.gunKind!==c&&(t.userData.gunKind=c,i.gun.clear(),(ia[c]||ia.pistol)(i.gun))},setArmor(c,l){i.armor.visible=c>0,c>0&&(i.armor.material=we(c>=3?6126235:c===2?9804963:8746824)),i.helmet.visible=l>0,l>0&&(i.helmet.children[0].material=we(l>=3?8163017:l===2?10136504:13482898))},setColor(c){t.userData.colHex!==c&&(t.userData.colHex=c,i.torso.material=we(c),i.torsoShade.material=we(v0(c,.7)),r&&(r.material=we(c)))},animate(c,l,f,h,d){let u=t.userData,p=Math.min(.1,Math.max(.001,c-(u.lastT??c)));u.lastT=c;let x=u.hipsCur??0,m=1,g=1;if(l>.05&&d!==null&&d!==void 0){let T=d%Ur;T>Math.PI&&(T-=Ur),T<-Math.PI&&(T+=Ur),Math.abs(T)>2.06&&(m=-1,g=.72,T=T>0?T-Math.PI:T+Math.PI),x=T}else l<=.05&&(x=0);let y=u.hipsCur??0,_=(x-y)%Ur;_>Math.PI&&(_-=Ur),_<-Math.PI&&(_+=Ur),y+=_*Math.min(1,p*14),u.hipsCur=y,i.lower.rotation.y=-y;let M=c*11+u.phase,E=Math.sin(M)*.75*l*g*m;if(i.legL.rotation.z=E,i.legR.rotation.z=-E,i.armL.rotation.z=-E*.55,t.position.y=Math.abs(Math.sin(M))*1.4*l,f&&h){i.armR.rotation.z=-.22+Math.sin(c*62)*.05;let T=Math.sin(c*57)*1.5,I=Math.sin(c*71)*1.1;t.position.y+=Math.abs(I)*.8,t.userData.judder={x:T,z:Math.cos(c*49)*1.3}}else t.userData.judder=null,f?i.armR.rotation.z=-.5+Math.sin(c*9)*.55:i.armR.rotation.z=0}},t.userData.setGun(e.gun||"pistol"),t}function v0(n,e){let t=Math.min(255,(n>>16&255)*e)|0,i=Math.min(255,(n>>8&255)*e)|0,s=Math.min(255,(n&255)*e)|0;return t<<16|i<<8|s}function Yc(n,e,t,i,s,r){let o=[];for(let a of[-1,1])for(let c of[-1,1]){let l=new Je;l.position.set(a*i,r,c*s);let f=new _e(fe.cyl,we(e));f.scale.set(t*.16,r,t*.16),f.position.y=-r/2,l.add(f),n.add(l),o.push({pivot:l,phase:a*c>0?0:Math.PI})}return o}function b0(n,e){let t=new Je,i={legs:[],extra:null},s={boar:[8282692,5521451],wolf:[7698047,4605773],bear:[6375471,3812380],polarbear:[14542315,11451592],alligator:[5599286,3229980],snake:[11704890,7430430],scorpion:[8278566,4664850]}[n]||[8947848,5592405],[r,o]=s,a=zs(e*3.2);if(a.position.y=.8,t.add(a),n==="snake"){i.segs=[];for(let l=0;l<6;l++){let f=xt(l%2?o:r,e*(.55-l*.05),-l*e*.5,e*.4,0);t.add(f),i.segs.push(f)}let c=xt(r,e*.62,e*.45,e*.45,0,.8,.9);t.add(c),i.head=c}else if(n==="scorpion"){t.add(xt(o,e*.85,0,e*.4,0,.5,.8)),t.add(xt(r,e*.62,e*.2,e*.55,0,.5,.75));for(let h of[-1,1])t.add(Nt(r,e*.8,e*.2,e*.18,e*.75,e*.35,h*e*.5)),t.add(xt(o,e*.26,e*1.2,e*.35,h*e*.62));i.tail=new Je,i.tail.position.set(-e*.7,e*.5,0);let c=0,l=0;for(let h=0;h<3;h++)c-=e*.3,l+=e*.34,i.tail.add(xt(o,e*.2,c,l,0));let f=new _e(fe.cone,we(3810320));f.scale.set(e*.14,e*.3,e*.14),f.position.set(c+e*.16,l+e*.22,0),f.rotation.z=-1,i.tail.add(f),t.add(i.tail)}else if(n==="alligator"){let c=e*.55;t.add(xt(o,e,0,c,0,.5,.72)),t.add(xt(r,e*.82,0,c+e*.18,0,.42,.6)),t.add(xt(r,e*.5,e*1.15,c,0,.5,.62)),t.add(Nt(o,e*.9,e*.16,e*.5,e*1.25,c-e*.1,0)),t.add(xt(o,e*.62,-e*1.05,c,0,.45,.6)),t.add(xt(o,e*.4,-e*1.7,c*.9,0,.45,.55));for(let l=0;l<4;l++){let f=new _e(fe.cone,we(o));f.scale.set(e*.12,e*.25,e*.12),f.position.set(-e*.6+l*e*.42,c+e*.42,0),t.add(f)}i.legs=Yc(t,o,e,e*.55,e*.5,c*.8)}else if(n==="bear"||n==="polarbear"){let c=e*.95;t.add(xt(r,e*.88,e*.2,c,0,.95,.78)),t.add(xt(o,e*.74,-e*.62,c*.88,0,.85,.74)),t.add(xt(r,e*.46,e*.05,c+e*.62,0)),t.add(xt(o,e*.16,-e*1.28,c*.95,0));let l=new Je;l.position.set(e*1,c+e*.42,0),l.add(xt(r,e*.42,0,0,0)),l.add(xt(o,e*.26,e*.4,-e*.06,0,.75,.7)),l.add(xt(1840144,e*.08,e*.62,-e*.04,0));for(let f of[-1,1])l.add(xt(o,e*.13,-e*.18,e*.36,f*e*.26)),l.add(xt(1314828,e*.05,e*.3,e*.12,f*e*.2));t.add(l),i.head=l,i.legs=Yc(t,o,e*1.25,e*.52,e*.4,c*.92)}else if(n==="wolf"){let c=e*.95;t.add(xt(r,e*.85,e*.15,c,0,.62,.52)),t.add(xt(o,e*.66,-e*.6,c*.96,0,.55,.48));let l=new Je;l.add(xt(o,e*.22,-e*1.15,c+e*.1,0,1,.8)),l.add(xt(o,e*.16,-e*1.45,c+e*.3,0)),t.add(l);let f=new Je;f.position.set(e*.95,c+e*.3,0),f.add(xt(r,e*.34,0,0,0)),f.add(xt(o,e*.18,e*.36,-e*.05,0,.7,.6)),f.add(xt(1840144,e*.06,e*.52,-e*.02,0));for(let h of[-1,1]){let d=new _e(fe.cone,we(o));d.scale.set(e*.1,e*.26,e*.1),d.position.set(-e*.12,e*.4,h*e*.18),f.add(d),f.add(xt(14206010,e*.05,e*.26,e*.1,h*e*.15))}t.add(f),i.head=f,i.legs=Yc(t,o,e*.85,e*.5,e*.3,c*1)}else{let c=e*.66;t.add(xt(o,e*1,0,c,0,.72,.72)),t.add(xt(r,e*.88,e*.1,c+e*.08,0,.66,.64));for(let f=0;f<4;f++){let h=new _e(fe.cone,we(4075554));h.scale.set(e*.1,e*.2,e*.1),h.position.set(e*.45-f*e*.3,c+e*.52-f*e*.03,0),t.add(h)}t.add(xt(o,e*.1,-e*1.05,c+e*.15,0));let l=new Je;l.position.set(e*.92,c,0),l.add(xt(r,e*.46,0,0,0,.9,.8)),l.add(xt(9071192,e*.2,e*.5,-e*.12,0,.7,.9));for(let f of[-1,1]){let h=new _e(fe.cone,we(15261903));h.scale.set(e*.06,e*.2,e*.06),h.position.set(e*.42,-e*.16,f*e*.22),h.rotation.z=.6,l.add(h);let d=new _e(fe.cone,we(o));d.scale.set(e*.1,e*.18,e*.1),d.position.set(-e*.2,e*.38,f*e*.24),d.rotation.x=f*.4,l.add(d),l.add(xt(1314828,e*.05,e*.3,e*.14,f*e*.22))}t.add(l),i.head=l,i.legs=Yc(t,o,e*.95,e*.48,e*.36,c*.9)}return t.userData={...i,phase:Math.random()*7,animate(c,l){let f=c*9+t.userData.phase;for(let h of i.legs)h.pivot.rotation.z=Math.sin(f+h.phase)*.55*l;if(i.segs)for(let h=0;h<i.segs.length;h++)i.segs[h].position.z=Math.sin(c*7-h*.8)*e*.3*(.4+l);i.tail&&(i.tail.rotation.z=Math.sin(c*3)*.08),i.head&&!i.segs&&(i.head.rotation.z=Math.sin(c*2.2+t.userData.phase)*.06)}},t}var w0=Math.PI*2,ub={0:"tool",1:"pistol",2:"rifle",3:"hmg",4:"rocket",5:"hammer",6:"rifle",7:"shotgun",8:"hmg"},xs=class{constructor(e,t){this.scene=e,this.make=t,this.map=new Map,this.seen=new Set,this.miss=new Map}get(e,...t){this.seen.add(e);let i=this.map.get(e);return i||(i=this.make(...t),this.map.set(e,i),this.scene.add(i)),i.visible=!0,i}sweep(){for(let[e,t]of this.map)if(this.seen.has(e))this.miss.delete(e);else{t.visible=!1;let i=(this.miss.get(e)||0)+1;i>300?(this.scene.remove(t),this.map.delete(e),this.miss.delete(e)):this.miss.set(e,i)}this.seen.clear()}};function T0(n,e){let t=new xs(e,(k,H,$)=>M0(k,{gun:H,scientist:$})),i=new xs(e,(k,H)=>b0(k,H));function s(){return we(1645589)}let r=(k,H,$,ee,ye,C,Q)=>{let V=new _e(fe.box,we(k));return V.scale.set(H,$,ee),V.position.set(ye,C,Q),V},o=new xs(e,k=>{let H=new Je;H.add(r(3356462,34,3,24,2,8,0)),H.add(r(k,15,11,15,4,15,0)),H.add(r(k,13,16,3.4,-3,24,0)),H.add(r(2303519,9,7,12,15,13,0)),H.add(r(3817271,10,10,11,-11,14,0));let $=new _e(fe.cyl,we(2895656));$.scale.set(2.4,16,2.4),$.position.set(-2,32,0),H.add($),H.add(r(2895656,42,3.6,3.6,-32,22,0)),H.add(r(3356462,8,12,2.4,-51,26,0));let ee=r(1645589,1.4,16,2.6,-53,24,3);H.add(ee);for(let D of[-1,1]){let pe=new _e(fe.cyl,we(2303519));pe.scale.set(1.8,52,1.8),pe.rotation.z=Math.PI/2,pe.position.set(2,2.5,D*13),H.add(pe),H.add(r(2303519,2,8,2,-8,5,D*13)),H.add(r(2303519,2,8,2,12,5,D*13))}let ye=r(1645589,96,1.6,7,-2,41,0);H.add(ye);let C=new Je;C.add(r(k,8,11,9,4,21,0));let Q=new _e(fe.sphere,we(13081716));Q.scale.set(4.5,4.5,4.5),Q.position.set(4,30,0),C.add(Q),C.visible=!1,H.add(C);let V=zs(86);return V.position.y=1,H.add(V),H.userData={rotor:ye,tailRotor:ee,sh:V,pilot:C},H}),a=new xs(e,k=>{let H=new Je;H.add(r(k,104,30,34,0,26,0)),H.add(r(2501666,104,8,35,0,13,0)),H.add(r(2040857,18,22,30,56,24,0)),H.add(r(10470104,6,9,26,64,30,0));let $=r(2896680,20,4,30,-56,12,0);$.rotation.z=.5,H.add($);for(let V=0;V<4;V++)H.add(r(1316892,7,7,2,32-V*22,30,17.6));for(let V=0;V<4;V++)H.add(r(1316892,7,7,2,32-V*22,30,-17.6));H.add(r(3817524,26,10,20,-38,46,0));let ee=r(2895656,4,12,4,38,46,0);H.add(ee);let ye=r(1645589,100,2,8,38,54,0);H.add(ye);let C=r(1645589,100,2,8,-38,58,0);H.add(C);for(let[V,D]of[[44,14],[44,-14],[-40,16],[-40,-16]]){let pe=new _e(fe.cyl,we(1316892));pe.scale.set(4.5,3,4.5),pe.rotation.x=Math.PI/2,pe.position.set(V,5,D),H.add(pe)}let Q=zs(150);return Q.position.y=1,H.add(Q),H.userData={rotor:ye,rotor2:C,sh:Q},H}),c=new xs(e,k=>k()),l=new xs(e,(k,H)=>gs(k,H)),f=700,h=new Pt(fe.quad,new Xt({color:2366482,transparent:!0,opacity:.34,depthWrite:!1,side:Pn}),f);h.frustumCulled=!1,h.renderOrder=2,e.add(h);let d=new vt,u=new vt,p=new U,x=64,m=[],g=new Pt(fe.box,new Sn({color:16777215,flatShading:!0}),x);g.frustumCulled=!1,e.add(g);let y=new vt,_=new rt,M={wood:9069104,stone:8685967,metal:13145412},E=90,T=[],I=new Yt,v=new Float32Array(E*3);I.setAttribute("position",new en(v,3));let b=new Gi(I,new yi({color:16771491,size:6,transparent:!0,opacity:.95,blending:wn,depthWrite:!1,sizeAttenuation:!0}));b.frustumCulled=!1,e.add(b);function S(k){let H=k.jack?5:3;for(let $=0;$<H;$++){m.length>=x&&m.shift();let ee=Math.random()*w0;m.push({x:k.x+Math.cos(ee)*6,y:k.y+Math.sin(ee)*6,h:18+Math.random()*14,vx:Math.cos(ee)*(40+Math.random()*70),vy:Math.sin(ee)*(40+Math.random()*70),vh:60+Math.random()*90,life:.85,rot:Math.random()*7,vrot:(Math.random()-.5)*14,s:2.2+Math.random()*(k.jack?3.4:2.2),col:M[k.kind]||9069104})}if(k.jack)for(let $=0;$<7;$++){T.length>=E&&T.shift();let ee=Math.random()*w0;T.push({x:k.x,y:k.y,h:16,vx:Math.cos(ee)*(90+Math.random()*160),vy:Math.sin(ee)*(90+Math.random()*160),vh:40+Math.random()*120,life:.22+Math.random()*.14})}}function R(k){for(let $=m.length-1;$>=0;$--){let ee=m[$];if(ee.life-=k,ee.life<=0){m.splice($,1);continue}ee.vh-=320*k,ee.x+=ee.vx*k,ee.y+=ee.vy*k,ee.h+=ee.vh*k,ee.h<1.5&&(ee.h=1.5,ee.vh*=-.35,ee.vx*=.6,ee.vy*=.6),ee.rot+=ee.vrot*k}m.forEach(($,ee)=>{y.makeRotationY($.rot).scale(new U($.s,$.s,$.s)).setPosition($.x,$.h,$.y),g.setMatrixAt(ee,y),_.setHex($.col),g.setColorAt(ee,_)}),g.count=m.length,g.instanceMatrix.needsUpdate=!0,g.instanceColor&&(g.instanceColor.needsUpdate=!0);let H=0;for(let $=T.length-1;$>=0;$--){let ee=T[$];if(ee.life-=k,ee.life<=0){T.splice($,1);continue}ee.vh-=260*k,ee.x+=ee.vx*k,ee.y+=ee.vy*k,ee.h=Math.max(1,ee.h+ee.vh*k)}for(let $ of T){if(H>=E)break;v[H*3]=$.x,v[H*3+1]=$.h,v[H*3+2]=$.y,H++}I.setDrawRange(0,H),I.attributes.position.needsUpdate=!0}let L=46,X=[];for(let k=0;k<L;k++){let H=new Vi(new xi({map:qc(),color:8817810,transparent:!0,opacity:0,depthWrite:!1}));H.visible=!1,e.add(H),X.push(H)}let q=[];function N(k,H,$,ee){q.length>=L&&q.shift(),q.push({x:k,y:H,h:$,life:2.8,max:2.8,s0:26*ee,drift:Math.random()*7})}function B(k){for(let H=q.length-1;H>=0;H--){let $=q[H];if($.life-=k,$.life<=0){q.splice(H,1);continue}$.h+=50*k,$.x+=n.wind*9*k,$.y+=Math.sin($.drift)*3*k}X.forEach((H,$)=>{let ee=q[$];if(!ee){H.visible=!1;return}H.visible=!0;let ye=1-ee.life/ee.max,C=ee.s0*(1+ye*2.4);H.scale.set(C,C,1),H.position.set(ee.x,ee.h,ee.y),H.material.opacity=.36*(ee.life/ee.max)*Math.min(1,ye*6+.2)})}function Z(k,H){let $=k.pts,ee=0;for(let C=0;C<k.seg&&C<$.length-1;C++)ee+=Math.hypot($[C+1].x-$[C].x,$[C+1].y-$[C].y);ee+=Math.hypot(k.x-$[Math.min(k.seg,$.length-1)].x,k.y-$[Math.min(k.seg,$.length-1)].y);let ye=[];for(let C of H){let Q=Math.max(.1,ee+C),V=0,D=0;for(;V<$.length-2;){let ot=Math.hypot($[V+1].x-$[V].x,$[V+1].y-$[V].y);if(D+ot>=Q)break;D+=ot,V++}let pe=$[V],Ae=$[V+1],Fe=Math.hypot(Ae.x-pe.x,Ae.y-pe.y)||1,Me=Math.max(0,Math.min(1,(Q-D)/Fe));ye.push({x:pe.x+(Ae.x-pe.x)*Me,y:pe.y+(Ae.y-pe.y)*Me,a:Math.atan2(Ae.y-pe.y,Ae.x-pe.x)})}return ye}let ce=18,ue=[],Ee=[];for(let k=0;k<ce;k++){let H=new _e(new Ns(.6,1,14),new Xt({color:12575468,transparent:!0,opacity:0,depthWrite:!1}));H.rotation.x=-Math.PI/2,H.renderOrder=3,H.visible=!1,e.add(H),Ee.push(H)}function De(k,H){ue.length>=ce&&ue.shift(),ue.push({x:k+(Math.random()-.5)*6,y:H+(Math.random()-.5)*6,life:.5,max:.5})}function ze(k){for(let H=ue.length-1;H>=0;H--){let $=ue[H];$.life-=k,$.life<=0&&ue.splice(H,1)}Ee.forEach((H,$)=>{let ee=ue[$];if(!ee){H.visible=!1;return}H.visible=!0;let C=5+(1-ee.life/ee.max)*17;H.scale.set(C,C,1),H.position.set(ee.x,2.2,ee.y),H.material.opacity=.55*(ee.life/ee.max)})}let Qe=1200,se=new Yt,re=new Float32Array(Qe*3),F=new Float32Array(Qe*3);se.setAttribute("position",new en(re,3)),se.setAttribute("color",new en(F,3));let ne=new Gi(se,new yi({size:7,vertexColors:!0,transparent:!0,opacity:.9,sizeAttenuation:!0,depthWrite:!1}));ne.frustumCulled=!1,e.add(ne);let oe=new Map;function O(k){let H=oe.get(k);if(!H){H=new rt;try{if(k.startsWith("rgba")){let $=k.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)/);$&&H.setRGB(+$[1]/255,+$[2]/255,+$[3]/255)}else H.set(k)}catch{H.setRGB(.7,.7,.7)}oe.set(k,H)}return H}let W=1/60;function de(k,H,$,ee,ye,C={}){k.position.set(H,0,$),k.rotation.y=-ee;let Q=k.userData;Q.setColor(ye),C.gun&&Q.setGun(C.gun),Q.setArmor(C.bodyArmor||0,C.facemask||0);let V=null;(C.vx||C.vy)&&Math.hypot(C.vx,C.vy)>18&&(V=Math.atan2(C.vy,C.vx)-ee),Q.animate(n.t,C.moveAmt??0,!!C.gathering,!!C.jack,V),Q.judder&&(k.position.x+=Q.judder.x,k.position.z+=Q.judder.z);let D=n.world.lakeAt(H,$),pe=D&&!D.frozen?30:0;Q.sinkY=(Q.sinkY??0)+(pe-(Q.sinkY??0))*Math.min(1,W*5),k.position.y-=Q.sinkY}return{sync(k,H){W=k;for(let C of n.units){if(C.dead||C.eliminated)continue;if(C.copter&&!C.copter.destroyed&&H.inView(C.copter.x,C.copter.y,200)){let pe=o.get(C.copter,parseInt(C.col.slice(1),16)),Ae=C.flying&&C.state==="trade";pe.position.set(C.copter.x,Ae?70:0,C.copter.y),pe.rotation.y=-(C.copter.angle||0),pe.userData.rotor.rotation.y=C.copter.rotor||0,pe.userData.tailRotor.rotation.z=(C.copter.rotor||0)*4,pe.userData.pilot.visible=Ae,pe.userData.sh.position.y=Ae?-68:1}if(C.flying||!H.inView(C.x,C.y,200))continue;let Q=parseInt((C.ally?"#7ec850":C.col).slice(1),16),V=t.get(C,Q,C.gun),D=Math.min(1,Math.hypot(C.vx,C.vy)/120);de(V,C.x,C.y,C.angle,Q,{gun:C.gathering?C.jack?"jack":"tool":C.gun,moveAmt:D,gathering:C.gathering,jack:C.jack,bodyArmor:C.bodyArmor,facemask:C.facemask,vx:C.vx,vy:C.vy})}let $=n.player;if(!$.inCopter){let C=t.get($,8030800,"pistol"),Q=$.moving?1:0,V=n.slot===0&&n.jackhammer;de(C,$.x,$.y,$.angle,$.hurt>0?12876382:8030800,{gun:n.slot===0&&n.jackhammer?"jack":ub[n.slot]||"pistol",moveAmt:Q,gathering:$.swing>0&&n.slot===0,jack:V,bodyArmor:$.bodyArmor,facemask:$.facemask,vx:$.vx,vy:$.vy}),($.dead||H.hideOwnRig)&&(C.visible=!1)}if(n.copter&&!n.copter.destroyed){let C=o.get(n.copter,6121548),Q=$.inCopter,V=n.copter.alt||0;C.position.set(n.copter.x,V,n.copter.y),C.rotation.order="YZX",C.rotation.y=-(n.copter.angle||0),C.rotation.z=(n.copter.pitchA||0)*.9,C.rotation.x=(n.copter.rollA||0)*.9,C.userData.rotor.rotation.y=(n.copter.rotor||0)*3,C.userData.tailRotor.rotation.z=(n.copter.rotor||0)*11,C.userData.pilot.visible=Q,C.userData.sh.position.y=V>3?-V+1:1}for(let C of n.guards){if(C.dead||!H.inView(C.x,C.y,150))continue;let Q=t.get(C,12410412,"rifle",!0),V=Math.min(1,Math.hypot(C.vx||0,C.vy||0)/90+.2);de(Q,C.x,C.y,C.angle,12410412,{gun:"rifle",moveAmt:V,vx:C.vx,vy:C.vy})}for(let C of n.animals){if(C.dead||!H.inView(C.x,C.y,150))continue;let Q=i.get(C,C.type,C.r),V=0;C.type==="alligator"&&n.world.lakeAt(C.x,C.y)&&(V=C.r*.62),Q.userData.sinkY=(Q.userData.sinkY??0)+(V-(Q.userData.sinkY??0))*Math.min(1,k*5),Q.position.set(C.x,-Q.userData.sinkY,C.y);let D=Math.hypot(C.vx||0,C.vy||0),pe=D>2?Math.atan2(C.vy,C.vx):C.dir;Q.rotation.y=-pe,Q.userData.animate(n.t,Math.min(1,D/80))}for(let C of n.transports){let Q=C.owner===Ye?8308816:parseInt((n.teams.find(pe=>pe.owner===C.owner)||{col:"#888888"}).col.slice(1),16),V=a.get(C,Q),D=C.state==="fly"||C.state==="return"||C.riders.length>0;V.position.set(C.x,D?110:2,C.y),V.rotation.y=-C.angle,V.userData.rotor.rotation.y=C.rotor,V.userData.rotor2.rotation.y=-C.rotor,V.userData.sh.position.y=D?-106:1}for(let C of n.trains){let Q=c.get(C,()=>{let pe=new Je,Ae=na("metal").clone();Ae.color.setScalar(.62);let Fe=new _e(fe.box,Ae);Fe.scale.set(54,30,26),Fe.position.y=17,pe.add(Fe),pe.add(r(2303788,18,14,27,-14,38,0)),pe.add(r(10470104,4,7,22,-4,39,0));let Me=new _e(fe.cyl,we(1843238));Me.scale.set(4.5,12,4.5),Me.position.set(16,38,0),pe.add(Me);let ot=r(2764339,12,10,24,30,8,0);ot.rotation.z=-.5,pe.add(ot);let P=gs(16771491,44);P.position.set(30,20,0),pe.add(P);let w=[];for(let K=0;K<4;K++){let ae=new Je,ge=na("wood").clone();ge.color.setScalar(.78+K%2*.14);let Te=new _e(fe.box,ge);Te.scale.set(46,26,24),Te.position.y=15,ae.add(Te);let Re=r(2893344,48,3.5,26,0,30,0);ae.add(Re),ae.add(r(2038292,8,12,25,0,14,0)),pe.add(ae),w.push(ae)}return pe.userData={cars:w,smokeT:0},pe}),V=Z(C,[0,-64,-116,-168,-220]),D=V[0];if(Q.position.set(D.x,0,D.y),Q.rotation.y=-D.a,Q.userData.cars.forEach((pe,Ae)=>{let Fe=V[Ae+1],Me=Fe.x-D.x,ot=Fe.y-D.y,P=Math.cos(D.a),w=Math.sin(D.a);pe.position.set(Me*P+ot*w,0,-Me*w+ot*P),pe.rotation.y=-(Fe.a-D.a)}),Q.userData.smokeT-=k,Q.userData.smokeT<=0){Q.userData.smokeT=.12;let pe=D.x+Math.cos(D.a)*16,Ae=D.y+Math.sin(D.a)*16;N(pe,Ae,40,1)}}for(let C of n.convoys){if(C.dead)continue;let Q=c.get(C,()=>{let V=new Je,D=new _e(fe.box,we(5660746));D.scale.set(68,24,36),D.position.y=12,V.add(D);let pe=new Je;pe.position.y=28;let Ae=new _e(fe.cyl,we(3752499));Ae.scale.set(12,9,12),pe.add(Ae);let Fe=new _e(fe.box,we(1250830));Fe.scale.set(32,5,5),Fe.position.x=20,pe.add(Fe),V.add(pe),V.userData={turret:pe};let Me=zs(90);return Me.position.y=1,V.add(Me),V});Q.position.set(C.x,0,C.y),Q.rotation.y=-C.ang,Q.userData.turret.rotation.y=-(C.taim-C.ang);for(let V of C.guards){if(V.dead)continue;let D=t.get(V,3829413,"rifle",!0);de(D,V.x,V.y,V.angle,3829413,{gun:"rifle",moveAmt:.6})}}if(n.patrol){let C=n.patrol,Q=c.get("patrol",()=>{let V=new Je;V.add(r(4740158,76,20,20,0,0,0)),V.add(r(3818548,76,6,21,0,-12,0));let D=new _e(fe.sphere,we(4740158));D.scale.set(14,11,10),D.position.set(40,-1,0),V.add(D),V.add(r(1316892,14,8,14,26,8,0)),V.add(r(10470104,4,6,12,34,7,0)),V.add(r(1974822,10,6,6,36,-13,0)),V.add(r(1316892,14,2.6,2.6,46,-13,0));for(let Me of[-1,1]){V.add(r(3818548,16,4,26,2,2,Me*22));for(let ot of[16,26]){let P=new _e(fe.cyl,we(2830374));P.scale.set(4.5,16,4.5),P.rotation.z=Math.PI/2,P.position.set(4,-3,Me*ot),V.add(P)}}V.add(r(3357744,52,6,6,-58,4,0)),V.add(r(3818548,9,18,3,-82,12,0));let pe=r(1645589,1.6,20,3,-84,10,4);V.add(pe);let Ae=r(2895656,5,8,5,0,13,0);V.add(Ae);let Fe=r(1645589,124,2.2,9,0,19,0);return V.add(Fe),V.userData={rotor:Fe,tailRotor:pe},V});Q.position.set(C.x,150,C.y),Q.rotation.y=-C.angle,Q.userData.rotor.rotation.y=C.rotor,Q.userData.tailRotor.rotation.z=C.rotor*4}if(n.plane){let C=c.get("plane",()=>{let Q=new Je,V=new _e(fe.sphere,we(8291985));V.scale.set(28,8,8),Q.add(V);let D=new _e(fe.box,we(7041660));return D.scale.set(10,2,52),Q.add(D),Q});C.position.set(n.plane.x,320,n.plane.y),C.rotation.y=n.plane.vx<0?Math.PI:0}if(n.airdrop){let C=n.airdrop,Q=c.get("airdrop",()=>{let D=new Je,pe=new _e(fe.box,we(6120530));pe.scale.set(30,24,30),pe.position.y=12,D.add(pe);let Ae=new _e(fe.box,we(16766827));Ae.scale.set(32,5,32),Ae.position.y=12,D.add(Ae);let Fe=new _e(fe.cone,we(12079162,{transparent:!0,opacity:.9}));return Fe.scale.set(34,26,34),Fe.position.y=56,D.add(Fe),D.userData={chute:Fe},D}),V=C.fall<1?(1-C.fall)*320:0;Q.position.set(C.x+(C.fall<1?Math.sin(C.sway)*12:0),V,C.fall<1?C.gy:C.y),Q.userData.chute.visible=C.fall<1}if(n.lockedCrate){let C=n.lockedCrate,Q=c.get("crate",()=>{let D=new Je,pe=new _e(fe.box,we(3948871));pe.scale.set(40,26,30),pe.position.y=13,D.add(pe);let Ae=gs(16758858,22);return Ae.position.set(13,26,-8),D.add(Ae),D.userData={light:Ae},D});Q.position.set(C.x,0,C.y);let V=C.blink%.8<.4;Q.userData.light.visible=V,Q.userData.light.material.color.setHex(C.started?16758858:13777960)}for(let C of n.bullets){let Q=c.get(C,()=>{let Fe=new Je,Me=new _e(fe.sphere,new Xt({color:16767392,transparent:!0,opacity:.95,blending:wn,depthWrite:!1}));Me.scale.set(3.4,3,3),Fe.add(Me);let ot=new _e(fe.cone,new Xt({color:16756820,transparent:!0,opacity:.5,blending:wn,depthWrite:!1}));ot.scale.set(2.6,30,2.6),ot.rotation.z=Math.PI/2,ot.position.x=-15,Fe.add(ot);let P=new _e(fe.cone,new Xt({color:16749620,transparent:!0,opacity:.2,blending:wn,depthWrite:!1}));return P.scale.set(4.5,44,4.5),P.rotation.z=Math.PI/2,P.position.x=-22,Fe.add(P),Fe.userData={head:Me,tail:ot,tail2:P},Fe}),V=Q.userData;V.h0===void 0&&(C.from===Ye&&H.fp?(V.h0=H.eyeH+(H.jumpH||0)-6,V.slope=Math.tan(H.pitch||0),V.sx=C.x,V.sy=C.y,V.tilt=Math.atan(V.slope)):V.h0=null);let D=18;if(V.h0!==null){let Fe=Math.hypot(C.x-V.sx,C.y-V.sy);D=Math.min(220,Math.max(3,V.h0+V.slope*Fe))}Q.position.set(C.x,D,C.y),Q.rotation.order="YZX",Q.rotation.y=-Math.atan2(C.vy,C.vx),Q.rotation.z=V.h0!==null&&D>3&&D<220?V.tilt:0;let pe=C.col==="hmg"?16738864:C.ricochet?10150655:16767392,Ae=C.col==="hmg"?15219732:C.ricochet?6076648:16756820;Q.userData.head.material.color.setHex(pe),Q.userData.tail.material.color.setHex(Ae),Q.userData.tail2.material.color.setHex(Ae)}for(let C of n.rockets){let Q=c.get(C,()=>{let pe=new Je,Ae=new _e(fe.cone,we(3751983));Ae.scale.set(5,18,5),Ae.rotation.z=-Math.PI/2,pe.add(Ae);let Fe=gs(16751421,34);return Fe.position.x=-12,pe.add(Fe),pe}),V=Q.userData;V.h0===void 0&&(C.from===Ye&&H.fp?(V.h0=H.eyeH+(H.jumpH||0)-6,V.slope=Math.tan(H.pitch||0),V.sx=C.x,V.sy=C.y,V.tilt=Math.atan(V.slope)):V.h0=null);let D=18;if(V.h0!==null){let pe=Math.hypot(C.x-V.sx,C.y-V.sy);D=Math.min(220,Math.max(6,V.h0+V.slope*pe))}Q.position.set(C.x,D,C.y),Q.rotation.order="YZX",Q.rotation.y=-Math.atan2(C.vy,C.vx),Q.rotation.z=V.h0!==null&&D>6&&D<220?V.tilt:0}for(let C of n.grenades)c.get(C,()=>{let V=new _e(fe.sphere,we(2898466));return V.scale.set(6,6,6),V}).position.set(C.x,8+Math.abs(Math.sin(C.bob*6))*8,C.y);for(let C of n.satchels){let Q=c.get(C,()=>{let V=new _e(fe.box,we(3814444));return V.scale.set(14,9,12),V.position.y=4,V});Q.position.set(C.x,4,C.y),Q.visible=Math.sin(n.t*18)>-.6}for(let C of n.loot){if(!H.inView(C.x,C.y,100))continue;let Q=c.get(C,()=>{let D=new _e(fe.box,we(14081248));return D.scale.set(9,9,9),D}),V={wood:12158022,stone:11186616,metal:15245902,scrap:14081248,ammo:16769162,rocket:16751194,sniper:12575743,satchel:13154442,gun:12896701};Q.material=we(V[C.kind]||14081248),Q.position.set(C.x,8+Math.sin(C.bob*3)*2.5,C.y),Q.rotation.y=C.bob}for(let C of n.fires){let Q=l.get(C,16747050,90);Q.position.set(C.x,16,C.y);let V=.8+Math.sin(n.t*11+C.x)*.25;Q.scale.set(90*V,110*V,1)}for(let C of n.wrecks)c.get(C,()=>{let V=new Je,D=new _e(fe.box,we(2499614));D.scale.set(30,14,20),D.position.y=7,D.rotation.y=.5,V.add(D);let pe=gs(16755260,60);return pe.position.y=14,V.add(pe),V}).position.set(C.x,0,C.y);for(let C of n.scorch){let Q=c.get(C,()=>{let V=new _e(new _i(1,12),new Xt({color:1314828,transparent:!0,opacity:.45,depthWrite:!1}));return V.rotation.x=-Math.PI/2,V.position.y=.8,V});Q.position.set(C.x,.8,C.y),Q.scale.set(C.r,C.r,1)}for(let C of n.flashes){let Q=l.get(C,16757322,C.r*2.4);Q.position.set(C.x,20,C.y);let V=C.life/C.max;Q.material.opacity=V,Q.scale.set(C.r*(2.6-V),C.r*(2.6-V),1)}if(n.muzzle){let C=l.get("muzzle",16766827,46);C.position.set(n.muzzle.x,18,n.muzzle.y),C.material.opacity=n.muzzle.t/.08}for(let C of n.events)C.type==="harvest"&&H.inView(C.x,C.y,300)?S(C):C.type==="splash"&&H.inView(C.x,C.y,300)&&De(C.x,C.y);R(k),ze(k),B(k);let ee=0;for(let C of n.footprints){if(ee>=f)break;let Q=1-C.t/10;if(Q<.06||!H.inView(C.x,C.y,60))continue;let V=6.2*(.45+.55*Q);d.makeRotationY(-C.a),u.makeRotationX(-Math.PI/2),d.multiply(u),p.set(V,V*.55,1),d.scale(p),d.setPosition(C.x,.45+ee%9*.025,C.y),h.setMatrixAt(ee,d),ee++}h.count=ee,h.instanceMatrix.needsUpdate=!0;let ye=0;for(let C of n.particles){if(ye>=Qe)break;re[ye*3]=C.x,re[ye*3+1]=10+(1-C.life/C.max)*14,re[ye*3+2]=C.y;let Q=O(C.col),V=Math.max(0,C.life/C.max);F[ye*3]=Q.r*V,F[ye*3+1]=Q.g*V,F[ye*3+2]=Q.b*V,ye++}se.setDrawRange(0,ye),se.attributes.position.needsUpdate=!0,se.attributes.color.needsUpdate=!0,t.sweep(),i.sweep(),o.sweep(),a.sweep(),c.sweep(),l.sweep()}}}function E0(n,e){let i=new Yt,s=new Float32Array(700*3),r=[];for(let g=0;g<700;g++)r.push({x:Math.random(),z:Math.random(),y:Math.random(),sp:.4+Math.random()*.8});i.setAttribute("position",new en(s,3));let o=new yi({color:12374764,size:5,transparent:!0,opacity:0,depthWrite:!1}),a=new Gi(i,o);a.frustumCulled=!1,e.add(a);let c=[],l=()=>{if(c.length||!n.clouds)return;let g=new Ls(1,0);for(let y of n.clouds){let _=new Sn({color:16251644,emissive:9279908,flatShading:!0,transparent:!0,opacity:.5,depthWrite:!1}),M=new Je;y.puffs.forEach((T,I)=>{let v=new _e(g,_),b=T.r*.45*(y.heavy?1:.85);v.scale.set(b,b*.45,b*.72),v.position.set(T.dx*.55,I*37%17-6,T.dy*.55),v.rotation.y=I*1.7,M.add(v)}),e.add(M);let E=new _e(new _i(y.r*1.05,14),new Xt({map:ad(),transparent:!0,opacity:.5*y.op,depthWrite:!1}));E.rotation.x=-Math.PI/2,E.scale.set(1.35,1,1),e.add(E),c.push({cl:y,g:M,sh:E,matC:_})}},f=[],h=new _i(1,16),d=()=>{if(!(f.length||!n.fogBanks))for(let g of n.fogBanks){let y=new Je,_=[];g.puffs.forEach((M,E)=>{let T=new Xt({map:qc(),color:13160664,transparent:!0,opacity:0,depthWrite:!1}),I=new _e(h,T);I.rotation.x=-Math.PI/2;let v=M.r*(.85+E%3*.18);I.scale.set(v,v*.8,1),I.position.set(M.dx*.6,2+E*4.5,M.dy*.6),I.renderOrder=3+E,y.add(I),_.push({s:I,r:v,phase:E*1.7+g.dens*5,spin:(E%2?1:-1)*(.015+E*.004)})}),e.add(y),f.push({f:g,group:y,puffs:_})}},u=new Yt,p=new Float32Array(120);u.setAttribute("position",new en(p,3));let x=new yi({color:14221190,size:9,transparent:!0,opacity:.9,blending:wn,depthWrite:!1,sizeAttenuation:!0}),m=new Gi(u,x);return m.frustumCulled=!1,e.add(m),{sync(g,y){l(),d();let _=n.weather,M=(y.cx+n.world.biomeRidge(y.cy))/xe.w,E=.085,T=Ci((M-(2/3-E))/(2*E)),I=Ci((M-(1/3-E))/(2*E))*(1-T),v=_.rain*(I+T);if(o.opacity=Math.min(.75,v*.8),o.color.setHex(T>I?16054524:12374764),o.size=T>I?7:4.5,v>.02){let L=T>I?.12:.55;for(let X=0;X<700;X++){let q=r[X],N=(q.y+n.t*q.sp*L)%1;s[X*3]=y.cx+(q.x-.5)*2*1700+n.wind*60*N,s[X*3+1]=700*(1-N),s[X*3+2]=y.cy+(q.z-.5)*2*1700}i.attributes.position.needsUpdate=!0}let b=y.lightLevel();for(let{cl:R,g:L,sh:X,matC:q}of c){L.position.set(R.x,560,R.y),X.position.set(R.x+64,2.5,R.y+86);let N=R.x-y.cx,B=R.y-y.cy,Z=Math.sqrt(N*N+B*B),ce=(Z<700?.22:Z<1400?.22+(Z-700)/700*.28:.5)*R.op;q.opacity+=(ce-q.opacity)*Math.min(1,g*4),q.color.setScalar(.82+b*.18),X.material.opacity=(.32+.26*b)*R.op}for(let{f:R,group:L,puffs:X}of f){let q=n.world.biomeAt(R.x,R.y)==="winter";L.position.set(R.x,0,R.y);let N=q?0:Math.min(.16,_.fog*R.dens*.15);for(let B of X){B.s.material.opacity=N,B.s.rotation.z=B.phase+n.t*B.spin;let Z=1+Math.sin(n.t*.27+B.phase)*.07;B.s.scale.set(B.r*Z,B.r*.8*Z,1)}}let S=0;if(n.fireflies){let R=1-y.lightLevel();x.opacity=.35+.5*R+.3*Math.min(1,_.fog);for(let L of n.fireflies){if(S>=40)break;n.world.biomeAt(L.x,L.y)==="jungle"&&(p[S*3]=L.x,p[S*3+1]=16+Math.sin(L.ph)*8,p[S*3+2]=L.y,S++)}u.attributes.position.needsUpdate=!0}u.setDrawRange(0,S)}}}var cd=13081716,pb=5595210,mb={0:"tool",1:"pistol",2:"rifle",3:"hmg",4:"rocket",5:"hammer",6:"rifle",7:"shotgun",8:"hmg"},gb={pistol:1.1,rifle:.9,minigun:.45,sniper:2.6,shotgun:2.2,hmg:.8,rocket:3},xb=new Set(["rifle","hmg","shotgun","rocket","jack"]);function A0(n,e,t){let i=new Ps,s=new pn(56,e.VW/e.VH,1,300);i.add(new Us(15397624,4867128,1.05));let r=new Fs(16773852,.9);r.position.set(40,80,30),i.add(r);let o=new Je;o.rotation.y=Math.PI/2,i.add(o);let a=(_,M,E,T,I,v,b)=>{let S=new _e(fe.box,we(_));return S.scale.set(M,E,T),S.position.set(I,v,b),S};o.add(a(pb,9,4.8,4.8,-7,-1.6,0)),o.add(a(cd,7,4.2,4.2,-.5,-.9,0));let c=a(cd,4.2,4.6,4.6,4.5,0,0);o.add(c);let l=a(cd,4,4.2,4.2,14,-1.2,0);o.add(l);let f=null,h=null,d=22;function u(_){_!==h&&(h=_,f&&o.remove(f),f=new Je,(ia[_]||ia.pistol)(f),o.add(f),d={pistol:16,rifle:25,shotgun:21,hmg:28,tool:18,rocket:25,hammer:16,jack:32}[_]||20,l.visible=xb.has(_),l.position.set(_==="rocket"?18:13.5,-1.4,0),p.position.set(d+5,.5,0))}let p=new Vi(new xi({map:od(),color:16767392,transparent:!0,opacity:0,depthTest:!1}));p.scale.set(10,10,1),o.add(p);let x=0,m=0,g=0,y={x:7.8,y:-6.6,z:-17.5};return{sync(_){let M=n.player,E=!e.godView&&!M.dead&&!M.inCopter;if(o.visible=E,!E)return;let T=n.buildMode?"hammer":n.slot===0?n.jackhammer?"jack":"tool":mb[n.slot]||"pistol";u(T);for(let q of n.events)q.type==="shot"&&(m=Math.min(3.4,m+(gb[q.weapon]||1)),q.weapon!=="rocket"&&(g=.055));m*=Math.exp(-11*_),g=Math.max(0,g-_),p.material.opacity=g>0?.95:0,p.material.rotation=Math.random()*Math.PI;let I=8+Math.random()*5;p.scale.set(I,I,1);let v=M.moving?1:0;x+=_*(4+8.5*v)*(n.cmd.run?1.25:1);let b=Math.cos(x*.5)*.5*v,S=Math.sin(x)*.6*v+Math.sin(n.t*1.7)*.12,R=m*1.1,L=-m*.045;(T==="tool"||T==="hammer")&&M.swing>0&&(L+=-.5-Math.sin(n.t*15)*.32),T==="jack"&&M.swing>0&&(b+=(Math.random()-.5)*.7,S+=(Math.random()-.5)*.7,L+=-.18),o.position.set(y.x+b,y.y+S,y.z+R),o.rotation.x=L,o.rotation.z=Math.cos(x*.5)*.012*v},render(_){s.aspect!==e.VW/e.VH&&(s.aspect=e.VW/e.VH,s.updateProjectionMatrix()),_.autoClear=!1,_.clearDepth(),_.render(i,s),_.autoClear=!0}}}function R0(n,e,t){let i=document.createElement("canvas");i.id="overlay",i.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:5",document.body.appendChild(i);let s=i.getContext("2d");function r(){i.width=e.VW,i.height=e.VH}r(),addEventListener("resize",r);let o=(f,h,d=0)=>t.worldToScreen(f,h,d);function a(f,h,d,u,p){s.strokeStyle=u,s.lineWidth=2,p&&s.setLineDash(p),s.beginPath();let x=!1;for(let m=0;m<=36;m++){let g=m/36*Math.PI*2,y=o(f+Math.cos(g)*d,h+Math.sin(g)*d);if(y.behind){x=!1;continue}x?s.lineTo(y.x,y.y):s.moveTo(y.x,y.y),x=!0}s.stroke(),s.setLineDash([])}return{draw(){let f=e.VW,h=e.VH;s.clearRect(0,0,f,h);let d=n.t;s.font="bold 13px Trebuchet MS",s.textAlign="center";for(let u of e.godView?[]:n.floats){let p=o(u.ox,u.y,40);if(p.behind)continue;let x=Math.max(0,u.life/u.max);s.globalAlpha=x,s.fillStyle="#000",s.fillText(u.text,p.x+1,p.y-u.lift+1),s.fillStyle=u.col,s.fillText(u.text,p.x,p.y-u.lift)}if(s.globalAlpha=1,n.buildMode&&!e.godView){let m=function(){for(let g in x.cost)if((n.inv[g]||0)<x.cost[g])return!1;return!0},u=$r(n,n.cmd.mx,n.cmd.my),p=lh(n,Ye,n.buildPiece,u)&&m();s.fillStyle=p?"rgba(180,220,120,.4)":"rgba(210,80,60,.45)",s.strokeStyle=p?"#c4d66a":"#d2553c",s.lineWidth=2;let x=Qt[n.buildPiece];if(x.cat==="cell"){let g=u.gx*64,y=u.gy*64,_=[[0,0],[64,0],[64,64],[0,64]].map(([M,E])=>o(g+M,y+E));_.some(M=>M.behind)||(s.beginPath(),_.forEach((M,E)=>E?s.lineTo(M.x,M.y):s.moveTo(M.x,M.y)),s.closePath(),s.fill(),s.stroke())}else{let g=Ot(u.key,{type:n.buildPiece,rot:n.buildRot&1}),y=o(g[0],g[1]),_=o(g[2],g[3]);!y.behind&&!_.behind&&(s.lineWidth=8,s.globalAlpha=.75,s.beginPath(),s.moveTo(y.x,y.y),s.lineTo(_.x,_.y),s.stroke(),s.globalAlpha=1)}}if(!e.godView&&!n.player.inCopter){for(let[u,p]of n.deploys){if(p.type!=="cupboard"||p.owner!==Ye)continue;let[x,m]=u.split(",").map(Number);a(x*64+32,m*64+32,Ht,"rgba(126,200,80,0.3)",[10,8])}if(!n.shopOpen&&!n.storeOpen){let u=Math.floor(n.cmd.mx/64),p=Math.floor(n.cmd.my/64),x=n.deploys.get(u+","+p);x&&x.type==="turret"&&a(u*64+32,p*64+32,ca[x.tier||1].range,"rgba(240,156,72,0.3)",[6,7]);let m=c(u,p);if(m){let g=o(m.x,m.y,50),y=Math.max(0,m.hp/m.max);s.fillStyle="rgba(0,0,0,.7)",s.fillRect(g.x-18,g.y-8,36,5),s.fillStyle=y>.5?"#7bbf4f":y>.25?"#d8b24a":"#c0432f",s.fillRect(g.x-18,g.y-8,36*y,5)}}}if(e.debugPaths){s.font="bold 10px Trebuchet MS";for(let u of n.units){if(u.dead||u.eliminated||u.flying||!t.inView(u.x,u.y,600))continue;let p=u.ally?"#7ec850":u.col;if(u.path&&u.pathI<u.path.length){s.strokeStyle=p,s.lineWidth=1.5,s.globalAlpha=.8,s.beginPath();let m=o(u.x,u.y);s.moveTo(m.x,m.y);for(let g=u.pathI;g<u.path.length;g++)m=o(u.path[g].x,u.path[g].y),s.lineTo(m.x,m.y);s.stroke(),s.globalAlpha=1}let x=o(u.x,u.y,56);s.fillStyle="#000",s.fillText(u.act||u.state,x.x+1,x.y+1),s.fillStyle=p,s.fillText(u.act||u.state,x.x,x.y)}}if(l(n.airdrop&&{x:n.airdrop.x,y:n.airdrop.fall<1?n.airdrop.gy:n.airdrop.y},"AIRDROP","#ffd76b","\u2708"),n.quarry){let u=n.teams.find(p=>p.owner===n.quarry.owner);l(n.quarry,"QUARRY",n.quarry.owner===Ye?"#7ec850":u?u.col:"#b9b39d","Q")}if(n.lockedCrate){let u=n.lockedCrate;l(u,u.started?"CRATE "+Math.ceil(u.t)+"s":"LOCKED CRATE","#ffb84a","C")}if(e.godView){s.font="bold 9px Trebuchet MS";for(let p of n.teams)for(let x of p.bases){if(x.dead)continue;let m=o(x.hx,x.hy);s.fillStyle=p.col,s.fillRect(m.x-6,m.y-6,12,12),s.fillStyle="#fff",s.fillText(String(p.id+1),m.x,m.y+3.5)}for(let p of n.units){if(p.dead||p.eliminated)continue;let x=o(p.x,p.y);s.fillStyle=p.ally?"#7ec850":p.col,s.beginPath(),s.arc(x.x,x.y,p.primary?3.4:2.4,0,7),s.fill()}for(let p of n.raids){let x=o(p.x,p.y);s.fillStyle=`rgba(255,82,56,${.35+.4*(p.t/60)})`,s.beginPath(),s.arc(x.x,x.y,7+3*Math.sin(d*6),0,7),s.fill()}if(n.deathMark){let p=o(n.deathMark.x,n.deathMark.y);s.fillStyle="#000",s.beginPath(),s.arc(p.x,p.y,8,0,7),s.fill(),s.fillStyle="#fff",s.beginPath(),s.arc(p.x,p.y-1,5,0,7),s.fill()}let u=o(n.player.x,n.player.y);s.strokeStyle="#7ec850",s.lineWidth=2.5,s.beginPath(),s.arc(u.x,u.y,11+3*Math.sin(d*6),0,7),s.stroke(),s.font="bold 11px Trebuchet MS",s.fillStyle="#7ec850",s.fillText("YOU",u.x,u.y-18),s.fillStyle="#d8d0ba",s.font="bold 14px Trebuchet MS",s.fillText("Click anywhere on the map to travel there",f/2,h-66)}else{let u=e.mouseSX,p=e.mouseSY;if(u!==void 0){s.strokeStyle="rgba(225,235,195,.9)",s.lineWidth=3,s.lineCap="round";for(let[x,m]of[[1,0],[-1,0],[0,1],[0,-1]])s.beginPath(),s.moveTo(u+x*6,p+m*6),s.lineTo(u+x*15,p+m*15),s.stroke()}}if(n.raidAlarm){let u=Math.min(1,n.raidAlarm.t/1.5);s.fillStyle=`rgba(180,30,20,${.14*u})`,s.fillRect(0,0,f,h),s.textAlign="center",s.font="bold 22px Trebuchet MS",s.fillStyle="rgba(0,0,0,.7)",s.fillText("BASE UNDER ATTACK",f/2+2,54),s.fillStyle=`rgba(255,${80+110*(.5+.5*Math.sin(d*8))},55,${u})`,s.fillText("BASE UNDER ATTACK",f/2,52)}n.player.hurt>0&&(s.fillStyle=`rgba(150,28,18,${n.player.hurt*.4})`,s.fillRect(0,0,f,h)),n.player.dead&&(s.fillStyle="rgba(10,6,4,.55)",s.fillRect(0,0,f,h),s.textAlign="center",s.fillStyle="#e6d9b8",s.font="bold 44px Trebuchet MS",s.fillText("YOU DIED",f/2,h/2-4),s.fillStyle="#b9a06f",s.font="15px Trebuchet MS",s.fillText("respawning\u2026",f/2,h/2+24)),s.textAlign="left",s.font="bold 14px Trebuchet MS",n.elims.forEach((u,p)=>{let x=Math.min(1,u.t/3);s.globalAlpha=x,s.fillStyle="rgba(0,0,0,.5)",s.fillRect(f/2-130,92+p*24,264,20),s.fillStyle="#e2664a",s.fillText(u.text,f/2-122,106+p*24)}),s.globalAlpha=1,s.textAlign="center"}};function c(f,h){let d=n.deploys.get(f+","+h);if(d)return{x:f*64+32,y:h*64+32,hp:d.hp,max:d.max};let u=n.structures.get(f+","+h);if(u)return{x:f*64+32,y:h*64+32,hp:u.hp,max:u.max};for(let p of["V,"+f+","+h,"V,"+(f+1)+","+h,"H,"+f+","+h,"H,"+f+","+(h+1)]){let x=n.walls.get(p);if(!x)continue;let m=Ot(p,x),g=(m[0]+m[2])/2,y=(m[1]+m[3])/2;if(Math.hypot(n.cmd.mx-g,n.cmd.my-y)<16)return{x:g,y,hp:x.hp,max:x.max}}return null}function l(f,h,d,u){if(!f)return;let p=o(f.x,f.y),x=e.VW,m=e.VH;if(s.textAlign="center",!p.behind&&p.x>0&&p.x<x&&p.y>0&&p.y<m){if(e.godView)return;s.font="bold 11px Trebuchet MS",s.fillStyle="rgba(0,0,0,.7)",s.fillText(h,p.x+1,p.y-49),s.fillStyle=d,s.fillText(h,p.x,p.y-50)}else{let g=Math.max(54,Math.min(x-54,p.x)),y=Math.max(54,Math.min(m-54,p.behind?m-54:p.y));s.fillStyle=d,s.globalAlpha=.92,s.beginPath(),s.arc(g,y,14,0,7),s.fill(),s.globalAlpha=1,s.fillStyle="#1c1812",s.font="bold 13px Trebuchet MS",s.fillText(u,g,y+4.5)}}}var Zc=.0023;function S0(n,e,t,i){let s={},r=e.canvas,o=()=>document.pointerLockElement===r,a=()=>!!(n.shopOpen||n.storeOpen);function c(){!o()&&!e.godView&&!a()&&!n.player.dead&&r.requestPointerLock()}function l(){o()&&document.exitPointerLock()}function f(){if(n.player.inCopter&&n.copter){let m=performance.now(),g=Math.max(.008,(m-x)/1e3);x=m,n.cmd.stickPitch=p/g,n.cmd.stickRoll=u/g,u=0,p=0,n.cmd.flat=!!(s.control||s.c),s.alt||(t.flyYawOff=(t.flyYawOff||0)*.82,t.flyPitchOff=(t.flyPitchOff||0)*.82),n.cmd.mx=n.copter.x+Math.cos(n.copter.angle)*620,n.cmd.my=n.copter.y+Math.sin(n.copter.angle)*620}else{let m=t.aimPoint();n.cmd.mx=m.x,n.cmd.my=m.y,n.cmd.stickPitch=0,n.cmd.stickRoll=0}e.mouseSX=e.VW/2,e.mouseSY=e.VH/2}function h(m){e.godView=m;let g=document.getElementById("mapbtn");g.classList.toggle("on",m),g.textContent=m?"Exit Map (M)":"Map (M)",m&&l()}addEventListener("keydown",m=>{let g=m.key.toLowerCase();if(n.storeOpen){(g==="escape"||g==="e")&&(n.storeOpen=null,i.closeModals()),m.preventDefault();return}if(n.shopOpen){(g==="escape"||g==="e")&&(n.shopOpen=!1,i.closeModals()),m.preventDefault();return}if(s[g]=!0,d(),g==="m"&&(h(!e.godView),e.godView||c()),g==="e"&&(Su(n),a()&&l()),g==="g"&&!n.player.inCopter&&Nu(n),g==="q"&&(n.buildMode?C0(n,1):n.player.inCopter||Lu(n)),g==="t"&&!n.buildMode&&!n.player.inCopter&&_h(n,n.cmd.mx,n.cmd.my),/^Digit[1-9]$|^Numpad[1-9]$/.test(m.code)&&!n.player.inCopter){let y=+m.code.slice(-1)-1;n.buildMode&&y<Ai.length?n.buildPiece=Ai[y]:Kr(n,y)}if(g==="b"&&!n.player.inCopter&&Kr(n,n.buildMode?0:5),g==="r"&&(n.buildMode?n.buildRot=(n.buildRot+1)%4:Mh(n)),g==="u"&&Du(n),g===" "&&!m.repeat)if(n.player.inCopter){let y=Cu(n);y>24&&t.fall(y)}else t.jump();["w","a","s","d"," ","alt","control"].includes(g)&&m.preventDefault()}),addEventListener("keyup",m=>{s[m.key.toLowerCase()]=!1,d()}),addEventListener("blur",()=>{for(let m in s)s[m]=!1;d(),n.cmd.fireHeld=!1});function d(){if(n.cmd.run=!!s.shift,n.player.inCopter){n.cmd.up=!!s.w,n.cmd.down=!!s.s,n.cmd.left=!!s.a,n.cmd.right=!!s.d,n.cmd.moveX=0,n.cmd.moveY=0;return}let m=(s.w?1:0)-(s.s?1:0),g=(s.d?1:0)-(s.a?1:0),y=t.simAngle();n.cmd.moveX=m*Math.cos(y)-g*Math.sin(y),n.cmd.moveY=m*Math.sin(y)+g*Math.cos(y),n.cmd.right=n.cmd.moveX>.38,n.cmd.left=n.cmd.moveX<-.38,n.cmd.down=n.cmd.moveY>.38,n.cmd.up=n.cmd.moveY<-.38}let u=0,p=0,x=performance.now();addEventListener("mousemove",m=>{if(o()){if(n.player.inCopter&&n.copter){s.alt?(t.flyYawOff=et((t.flyYawOff||0)+m.movementX*Zc,-2.7,2.7),t.flyPitchOff=et((t.flyPitchOff||0)+m.movementY*Zc,-.5,.9)):(u+=m.movementX,p+=m.movementY);return}t.yaw-=m.movementX*Zc,t.pitch=et(t.pitch-m.movementY*Zc,-1.25,1.2),d()}}),addEventListener("wheel",m=>{n.buildMode&&!a()&&(C0(n,m.deltaY>0?1:-1),m.preventDefault())},{passive:!1}),r.addEventListener("mousedown",m=>{if(e.godView){if(m.button===0){let g=r.getBoundingClientRect(),y=t.screenToWorld(m.clientX-g.left,m.clientY-g.top);n.cmd.mx=y.x,n.cmd.my=y.y,yb(n,e,h),c()}return}if(!o()){c();return}m.button===0?(n.cmd.fireHeld=!0,n.buildMode?Pu(n):a()||wa(n)):m.button===2&&n.buildMode&&Iu(n)}),addEventListener("mouseup",()=>{n.cmd.fireHeld=!1}),r.addEventListener("contextmenu",m=>m.preventDefault()),setInterval(()=>{e.godView||f(),d(),(n.player.dead||a())&&o()&&l()},16),document.addEventListener("pointerlockchange",()=>{document.getElementById("fphint").classList.toggle("hidden",o()||e.godView||a()||n.player.dead),o()||(n.cmd.fireHeld=!1)}),setInterval(()=>{document.getElementById("fphint").classList.toggle("hidden",o()||e.godView||a()||n.player.dead),document.getElementById("xhair").classList.toggle("hidden",!o()||e.godView)},200),f()}function C0(n,e){let t=Ai.indexOf(n.buildPiece);n.buildPiece=Ai[(t+e+Ai.length)%Ai.length]}function yb(n,e,t){let i=n.cmd.mx,s=n.cmd.my;i=et(i,jt,13824-jt),s=et(s,jt,9216-jt);for(let r=0;r<24&&Et(n,i,s,jt);r++)i+=(Math.random()*2-1)*40,s+=(Math.random()*2-1)*40;n.player.x=i,n.player.y=s,n.player.inCopter=!1,t(!1),n.tip={text:"arrived",t:1.2}}var _b={tool:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20l7-7"/><path d="M14 4l6 6-5 5-6-6z" fill="currentColor"/></svg>',pistol:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 8h16v4h-6l-1 5h-4l1-5H6a3 3 0 0 1-3-3z"/></svg>',rifle:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1 11h18l4-2v3l-4 1h-5l-1 5h-3l1-5H1z"/></svg>',minigun:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="7" width="14" height="3"/><rect x="2" y="11" width="14" height="3"/><rect x="2" y="15" width="14" height="3"/><rect x="15" y="6" width="6" height="13" rx="2"/></svg>',rocket:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 10h13l5 2-5 2H2z"/><path d="M20 8l3 4-3 4z"/></svg>',build:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21l4-12 6 6-10 6z" fill="currentColor"/><path d="M13 5l6 6"/></svg>',sniper:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="1" y="10" width="20" height="3"/><rect x="6" y="6" width="6" height="3" rx="1"/><path d="M21 9l2 2-2 2z"/></svg>',shotgun:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1 10h17v5H8l-2 4H3l2-4H1z"/></svg>',hmg:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="1" y="9" width="19" height="5"/><rect x="6" y="14" width="6" height="6"/><path d="M20 9l3 2.5-3 2.5z"/></svg>'},vb=[["Tool","tool"],["Pistol","pistol"],["Rifle","rifle"],["Minigun","minigun"],["Rocket","rocket"],["Build","build"],["Sniper","sniper"],["Shotgun","shotgun"],["HMG","hmg"]],Mb={1:"pistol",2:"rifle",3:"minigun",4:"rocket",6:"sniper",7:"shotgun",8:"hmg"},bb={floor:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="16" height="16" rx="2"/></svg>',wall:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="10" y="3" width="4" height="18" rx="1"/></svg>',door:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="9" y="3" width="6" height="18" rx="1"/><circle cx="13" cy="12" r="1.4" fill="#15130e"/></svg>',turret:'<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="13" r="6"/><rect x="12" y="11" width="10" height="4" rx="1"/></svg>',cupboard:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="3" width="14" height="18" rx="2"/><rect x="11.4" y="5" width="1.2" height="14" fill="#15130e"/></svg>'};function P0(n,e){let t=p=>document.getElementById(p),i=t("hotbar");vb.forEach(([p,x],m)=>{let g=document.createElement("div");g.className="slot",g.innerHTML=`<span class="key">${m+1}</span>${_b[x]}<span class="nm">${p}</span>`,g.addEventListener("mousedown",y=>{y.stopPropagation(),Kr(n,m)}),i.appendChild(g)});let s=t("bpieces");Ai.forEach((p,x)=>{let m=document.createElement("div");m.className="bpiece",m.dataset.piece=p;let g=Object.entries(Qt[p].cost).map(([y,_])=>_+" "+y).join(" + ");m.innerHTML=`<span class="key">${x+1}</span>${bb[p]}${Qt[p].name}<br><span style="opacity:.7">${g}</span>`,m.addEventListener("mousedown",y=>{y.stopPropagation(),n.buildPiece=p}),s.appendChild(m)});let r=(p,x)=>t(p).addEventListener("mousedown",m=>{m.stopPropagation(),x(t(p))});r("mapbtn",p=>{e.godView=!e.godView,p.classList.toggle("on",e.godView),p.textContent=e.godView?"Exit Map (M)":"Map (M)",e.godView&&document.pointerLockElement&&document.exitPointerLock()}),r("ghostbtn",p=>{n.ghost=!n.ghost,p.classList.toggle("on",n.ghost),p.textContent=n.ghost?"Ghost: ON":"Ghost"}),r("rocketbtn",p=>{n.rapidRockets=!n.rapidRockets,p.classList.toggle("on",n.rapidRockets),p.textContent=n.rapidRockets?"Rockets: ON":"Rapid Rockets"}),r("refillbtn",()=>window.__refillAll()),r("boosthardbtn",()=>window.__boostHard()),r("debugbtn",p=>{e.debugPaths=!e.debugPaths,p.classList.toggle("on",e.debugPaths),p.textContent=e.debugPaths?"Debug: ON":"Debug paths"}),t("ghostbtn").classList.add("on"),t("ghostbtn").textContent="Ghost: ON",t("helpToggle").addEventListener("click",()=>{let p=t("help");p.classList.toggle("min"),t("helpToggle").textContent=p.classList.contains("min")?"show":"hide"}),document.querySelectorAll(".spdbtn").forEach(p=>{p.addEventListener("mousedown",x=>{x.stopPropagation(),e.speed=+p.dataset.spd,document.querySelectorAll(".spdbtn").forEach(m=>m.classList.toggle("on",m===p))})});let o=0,a=null,c=!1;function l(){let p=t("shop"),x='<h3>Trade Shop</h3><div style="margin-bottom:8px">Scrap: <b id="shop-scrap">0</b></div><div class="cols"><div class="col"><h5>SELL \u2192 SCRAP</h5>';Vt.trades.forEach(([m,g,y],_)=>{x+=`<div class="trow"><span>${g} ${m} \u2192 ${y} scrap</span><button data-trade="${_}">Sell</button></div>`}),x+='</div><div class="col"><h5>BUY WEAPONS + GEAR</h5>';for(let m in Vt.buys)x+=`<div class="trow"><span id="shopown-${m}">${ln[m].name} <small>+${Vt.buys[m].ammo} ammo</small></span><button data-buy="${m}">${Vt.buys[m].cost} scrap</button></div>`;x+=`<div class="trow"><span>Jackhammer <small>3\xD7 gather</small></span><button data-misc="jackhammer">${Vt.jackhammer} scrap</button></div>`,x+=`<div class="trow"><span>Rifle laser sight</span><button data-misc="laser">${Vt.laser} scrap</button></div>`,x+=`<div class="trow"><span>Wood fence (G)</span><button data-misc="fence">${Vt.fenceWood} wood</button></div>`,x+=`<div class="trow"><span>Grenade (Q)</span><button data-misc="grenade">${Vt.grenade} scrap</button></div>`,x+=`<div class="trow"><span>Supply signal (T)</span><button data-misc="signal">${Vt.signal} scrap</button></div>`,x+=`<div class="trow"><span>+10 HQM</span><button data-misc="hqm">${Vt.hqm.cost} scrap</button></div>`,x+='<div class="trow"><span id="fm-lbl">Facemask</span><button data-misc="facemask">buy</button></div>',x+='<div class="trow"><span id="ba-lbl">Body armor</span><button data-misc="bodyArmor">buy</button></div>',x+=`<div class="trow"><span>Hire worker</span><button data-misc="worker">${Vt.worker} scrap</button></div>`,x+='</div></div><button class="close">Close (E / Esc)</button>',p.innerHTML=x,p.querySelectorAll("button").forEach(m=>{m.addEventListener("mousedown",g=>g.stopPropagation()),m.addEventListener("click",()=>{m.dataset.trade!==void 0?ku(n,+m.dataset.trade):m.dataset.buy?Uu(n,m.dataset.buy):m.dataset.misc?Fu(n,m.dataset.misc):(n.shopOpen=!1,p.classList.add("hidden")),f()})}),f()}function f(){let p=t("shop-scrap");p&&(p.textContent=n.inv.scrap|0);let x=t("fm-lbl");if(x){let g=n.player.facemask+1;x.textContent=g<=3?`Facemask L${g} (${_s.cost[g]} scrap)`:"Facemask MAX"}let m=t("ba-lbl");if(m){let g=n.player.bodyArmor+1;m.textContent=g<=3?`Body armor L${g} (${_s.cost[g]} scrap)`:"Body armor MAX"}for(let g in Vt.buys){let y=t("shopown-"+g);y&&(y.style.color=n.owned[g]?"var(--accent2)":"var(--ink)")}}function h(p){let x=t("store"),m=n.deploys.get(p);if(!m)return;let g=`<h3>${m.type==="cupboard"?"Tool Cupboard":"Storage"}</h3>`;for(let y of["wood","stone","metal","scrap"])g+=`<div class="strow"><span class="ic ${y}"></span>
        <button data-mv="${y},-9999">\u25C0 all</button><button data-mv="${y},-0.1">\u25C0 10%</button>
        <span class="cnt"><b id="st-${y}">0</b> store \xB7 bag <b id="inv-${y}">0</b></span>
        <button data-mv="${y},0.1">10% \u25B6</button><button data-mv="${y},9999">all \u25B6</button>
        <span></span></div>`;g+='<button class="close">Close (E / Esc)</button>',x.innerHTML=g,x.querySelectorAll("button").forEach(y=>{y.addEventListener("mousedown",_=>_.stopPropagation()),y.addEventListener("click",()=>{if(y.dataset.mv){let[_,M]=y.dataset.mv.split(",");Ou(n,_,+M),d()}else n.storeOpen=null,x.classList.add("hidden")})}),d()}function d(){let p=n.deploys.get(n.storeOpen);if(!(!p||!p.store))for(let x of["wood","stone","metal","scrap"]){let m=t("st-"+x),g=t("inv-"+x);m&&(m.textContent=p.store[x]|0),g&&(g.textContent=n.inv[x]|0)}}return{closeModals(){t("store").classList.add("hidden"),t("shop").classList.add("hidden")},update(){t("r-wood").textContent=n.inv.wood|0,t("r-stone").textContent=n.inv.stone|0,t("r-metal").textContent=n.inv.metal|0,t("r-scrap").textContent=n.inv.scrap|0;let p=Math.floor(n.t/60),x=Math.floor(n.t%60);t("playtime").textContent=p+":"+String(x).padStart(2,"0");let m=n.player,g=Math.max(0,m.health/m.maxhp),y=t("hpfill");y.style.width=g*100+"%",y.style.background=g>.5?"linear-gradient(180deg,#9ccb5a,#6fae3e)":g>.25?"linear-gradient(180deg,#e0c14e,#c9962f)":"linear-gradient(180deg,#d76a4a,#b23b2a)",t("hptxt").textContent=Math.ceil(Math.max(0,m.health));let _=i.children;for(let T=0;T<_.length;T++){_[T].classList.toggle("sel",n.slot===T);let I=Mb[T];_[T].classList.toggle("dim",!!I&&!n.owned[I])}if(t("buildmenu").classList.toggle("hidden",!n.buildMode),n.buildMode)for(let T of s.children){T.classList.toggle("sel",T.dataset.piece===n.buildPiece);let I=!0;for(let v in Qt[T.dataset.piece].cost)(n.inv[v]||0)<Qt[T.dataset.piece].cost[v]&&(I=!1);T.classList.toggle("cant",!I)}let M=Zr(n);if(t("ammo").classList.toggle("hidden",!M),M){let T=n.weapons[M];t("ammo-mag").innerHTML=`${T.ammo} <small>/ ${T.reserve}</small>`;let I=M==="minigun"&&T.spin>0&&T.spin<ln.minigun.windup;t("ammo-rl").textContent=T.reloading>0?"RELOADING":I?"SPINNING\u2026":T.ammo===0?"PRESS R":""}let E=t("tip");n.tip?(E.textContent=n.tip.text,E.classList.add("show")):E.classList.remove("show"),n.shopOpen!==c?(c=n.shopOpen,t("shop").classList.toggle("hidden",!n.shopOpen),n.shopOpen&&l()):n.shopOpen&&n.tick%30===0&&f(),n.storeOpen!==a?(a=n.storeOpen,t("store").classList.toggle("hidden",!n.storeOpen),n.storeOpen&&h(n.storeOpen)):n.storeOpen&&n.tick%30===0&&d(),n.t-o>.4&&(o=n.t,u())}};function u(){let p=[];p.push({id:Ye,name:"You",col:"#c4d66a",alive:!n.player.dead,you:!0,kills:n.playerKills,scrap:n.inv.scrap|0,res:n.inv.wood+n.inv.stone+n.inv.metal|0,tier:""});for(let y of n.teams){let _=0,M=0,E=0,T=!1;for(let v of n.units)v.owner===y.owner&&(_+=v.kills,M+=v.scrap,E+=v.inv.wood+v.inv.stone+v.inv.metal,v.eliminated||(T=!0));let I=y.bases.find(v=>!v.dead);if(I){let v=n.deploys.get(I.tcKey);v&&v.store&&(E+=v.store.wood+v.store.stone+v.store.metal,M+=v.store.scrap)}p.push({id:y.id,name:"Base "+(y.id+1),col:y.col,alive:T&&!y.eliminated,kills:_,scrap:M|0,res:E|0,tier:y.hard?"HARD":y.weak?"EASY":""})}let x=null,m=0;for(let y of p)!y.you&&y.alive&&y.kills>m&&(m=y.kills,x=y.id);p.sort((y,_)=>_.scrap-y.scrap||_.kills-y.kills||_.res-y.res);let g=y=>y>=1e4?(y/1e3|0)+"k":y>=1e3?(y/1e3).toFixed(1)+"k":y;t("lb-rows").innerHTML=p.map(y=>`
      <div class="lbr ${y.alive?"":"dead"} ${y.id===x?"lb-bounty":""}">
        <span class="dot" style="background:${y.col}"></span>
        <span class="nm">${y.id===x?"\u2605 ":""}${y.name}</span>
        ${y.tier?`<span class="pill ${y.tier.toLowerCase()}">${y.tier}</span>`:""}
        <span>${y.kills}</span><span style="color:var(--ink-dim)">${g(y.scrap)}</span><span style="color:var(--ink-dim)">${g(y.res)}</span>
      </div>`).join("")}}var I0=Math.random()*1e9>>>0,kt=sh(I0);kt.ghost=!0;function wb(){let e={canvas:document.getElementById("game"),VW:innerWidth,VH:innerHeight,speed:1,godView:!1,debugPaths:!1},t=u0(kt,e),i=m0(kt,t.scene),s=_0(kt,t.scene),r=T0(kt,t.scene),o=E0(kt,t.scene),a=A0(kt,e,t),c=R0(kt,e,t),l=P0(kt,e);S0(kt,e,t,l),addEventListener("resize",()=>{e.VW=innerWidth,e.VH=innerHeight,t.resize()});let f=document.getElementById("seedval");f&&(f.textContent=String(I0)),window.__refillAll=()=>{for(let p in kt.owned)kt.owned[p]=!0;for(let p in kt.weapons){let x=kt.weapons[p];x.reserve=Math.max(x.reserve,p==="rocket"?80:p==="sniper"?60:p==="shotgun"?80:600),x.ammo=ln[p].magSize,x.reloading=0}for(let p of["wood","stone","metal"])kt.inv[p]=Math.max(kt.inv[p],1e4);kt.inv.scrap=Math.max(kt.inv.scrap,500),kt.inv.fence=Math.max(kt.inv.fence,10),kt.tip={text:"Refilled ammo + resources",t:1.4}},window.__boostHard=()=>{let p=0;for(let x of kt.units)!x.hard||x.dead||x.eliminated||(p++,x.hp=x.max,x.rockets=Math.max(x.rockets,12),x.satchels=Math.max(x.satchels,6),x.grenades=Math.max(x.grenades,4),x.hqm=Math.max(x.hqm,80),x.gun=x.shotgun?"shotgun":"rifle",x.facemask=Math.max(x.facemask,2),x.bodyArmor=Math.max(x.bodyArmor,3),x.jack=!0);for(let x of kt.teams){if(!x.hard||x.eliminated)continue;let m=x.bases.find(g=>!g.dead);if(m){let g=kt.deploys.get(m.tcKey);g&&g.store&&(g.store.wood=Math.max(g.store.wood,3e3),g.store.stone=Math.max(g.store.stone,1500),g.store.metal=Math.max(g.store.metal,1500),g.store.scrap=Math.max(g.store.scrap,600))}}kt.tip={text:"Boosted "+p+" hard units",t:1.4}};let h=performance.now(),d=0;function u(p){requestAnimationFrame(u);let x=Math.min(.1,(p-h)/1e3);h=p,d+=x*e.speed;let m=0,g=Math.max(4,e.speed*4);for(;d>=Fr&&m<g;)dp(kt),d-=Fr,m++;m>=g&&(d=0),t.update(x),i.sync(x,kt,t),s.sync(x),r.sync(x,t),o.sync(x,t),a.sync(x),t.render(),a.render(t.renderer),c.draw(),l.update(),kt.events.length=0}requestAnimationFrame(u)}try{wb()}catch(n){console.error("SCRAPLAND boot failed: WebGL unavailable \u2014",n&&n.message);let e=document.createElement("div");e.style.cssText="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;color:#ddd5c2;font:16px Trebuchet MS;background:#14120e;z-index:99",e.textContent="SCRAPLAND needs WebGL \u2014 please enable hardware acceleration and reload.",document.body&&document.body.appendChild(e)}})();
