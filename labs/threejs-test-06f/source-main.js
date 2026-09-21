import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const $=id=>document.getElementById(id);
const boot=$('boot'), errorBox=$('error'), fpsEl=$('fps'), callsEl=$('calls'), trisEl=$('tris'), charEl=$('char'), scaleEl=$('scale'), zoneEl=$('zone');
addEventListener('error',e=>{errorBox.style.display='block';errorBox.textContent='Runtime error:\n'+e.message;});
addEventListener('unhandledrejection',e=>{errorBox.style.display='block';errorBox.textContent='Load/runtime error:\n'+(e.reason?.message||e.reason||'Unknown rejection');});
const COARSE=matchMedia('(pointer:coarse)').matches;

let seed=0x6d2b79f5;
function rnd(){seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;}
function hash2(x,z){const s=Math.sin(x*127.1+z*311.7)*43758.5453123;return s-Math.floor(s);}
function makeNoiseTexture(size=96){const data=new Uint8Array(size*size*4);for(let y=0;y<size;y++)for(let x=0;x<size;x++){const i=(y*size+x)*4;const n=Math.floor(255*(.36+.64*hash2(x*.31,y*.37)));data[i]=data[i+1]=data[i+2]=n;data[i+3]=255;}const t=new THREE.DataTexture(data,size,size,THREE.RGBAFormat);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.colorSpace=THREE.NoColorSpace;t.needsUpdate=true;return t;}
const microNoise=makeNoiseTexture();microNoise.repeat.set(26,26);
const pathNoise=makeNoiseTexture(64);pathNoise.repeat.set(18,36);

const scene=new THREE.Scene();scene.fog=new THREE.FogExp2(0xb7cbd0,.0057);
const camera=new THREE.PerspectiveCamera(53,innerWidth/innerHeight,.1,800);camera.position.set(0,6,10);
const renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});
let renderScale=Math.min(devicePixelRatio,COARSE?1.32:1.8), minScale=COARSE?1.0:1.25, maxScale=Math.min(devicePixelRatio,COARSE?1.42:1.9);
renderer.setPixelRatio(renderScale);renderer.setSize(innerWidth,innerHeight);renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;document.body.prepend(renderer.domElement);
scaleEl.textContent=renderScale.toFixed(2)+'×';

const hemi=new THREE.HemisphereLight(0xd9efff,0x4d5945,1.85);scene.add(hemi);
const fill=new THREE.AmbientLight(0x91a8b4,.18);scene.add(fill);
const sun=new THREE.DirectionalLight(0xffefd0,3.35);sun.position.set(-46,58,18);sun.castShadow=true;sun.shadow.mapSize.set(COARSE?1024:1536,COARSE?1024:1536);sun.shadow.camera.left=-46;sun.shadow.camera.right=46;sun.shadow.camera.top=46;sun.shadow.camera.bottom=-46;sun.shadow.camera.near=1;sun.shadow.camera.far=155;sun.shadow.bias=-.00018;sun.shadow.normalBias=.025;scene.add(sun,sun.target);
const skyU={top:{value:new THREE.Color(0x5ea9d0)},mid:{value:new THREE.Color(0xbfd7d4)},bottom:{value:new THREE.Color(0xf0ddbc)},sunDir:{value:new THREE.Vector3(-.5,.8,.25)},sunWarm:{value:new THREE.Color(0xffd79a)}};
const skyM=new THREE.ShaderMaterial({side:THREE.BackSide,depthWrite:false,uniforms:skyU,vertexShader:`varying vec3 vW;void main(){vW=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`uniform vec3 top,mid,bottom,sunDir,sunWarm;varying vec3 vW;void main(){vec3 d=normalize(vW);float h=clamp(d.y*.5+.5,0.,1.);vec3 c=mix(bottom,mid,smoothstep(0.,.5,h));c=mix(c,top,smoothstep(.38,1.,h));float a=max(dot(d,normalize(sunDir)),0.);float disc=pow(a,520.);float halo=pow(a,18.)*.28;float horizon=pow(1.-abs(d.y),5.)*.045;c+=sunWarm*(disc*2.8+halo+horizon);gl_FragColor=vec4(c,1.);}`});scene.add(new THREE.Mesh(new THREE.SphereGeometry(390,40,20),skyM));

function streamCenter(z){return -18+Math.sin(z*.048)*4.2+Math.sin(z*.013)*2.2;}
function heightAt(x,z){const broad=Math.sin(x*.029)*3.0+Math.cos(z*.032)*2.4+Math.sin((x+z)*.021)*1.65;const detail=Math.sin(x*.093+z*.032)*.50+Math.cos(z*.108-x*.025)*.38;const dx=x-streamCenter(z);const valley=-Math.exp(-(dx*dx)/54)*5.2;const overlook=Math.exp(-((x-46)*(x-46)+(z+54)*(z+54))/920)*7.0;const ridge=Math.exp(-((x+50)*(x+50)+(z+42)*(z+42))/1600)*3.0;return broad+detail+valley+overlook+ridge;}
function slopeAt(x,z){const e=.45,dx=(heightAt(x+e,z)-heightAt(x-e,z))/(2*e),dz=(heightAt(x,z+e)-heightAt(x,z-e))/(2*e);return Math.min(1,Math.hypot(dx,dz));}
const bridge={cx:0,cz:4,w:18,d:5.0,top:0};bridge.cx=streamCenter(bridge.cz);bridge.top=Math.max(heightAt(bridge.cx-10,bridge.cz),heightAt(bridge.cx+10,bridge.cz))+.72;
function onBridge(x,z){return Math.abs(x-bridge.cx)<bridge.w*.5&&Math.abs(z-bridge.cz)<bridge.d*.5;}
function groundHeight(x,z){return onBridge(x,z)?bridge.top:heightAt(x,z);}
function inWater(x,z){return Math.abs(x-streamCenter(z))<5.8&&!onBridge(x,z);}
function terrainColor(y,x,z){const c=new THREE.Color();const s=slopeAt(x,z),wet=Math.exp(-Math.pow((x-streamCenter(z))/11,2)),n=hash2(x*.9,z*.9);if(s>.55)c.setRGB(.31,.34,.31);else if(y<-1.4)c.setRGB(.26,.38,.25);else if(y<1)c.setRGB(.38,.52,.29);else if(y<4.4)c.setRGB(.43,.58,.31);else c.setRGB(.35,.49,.28);c.offsetHSL((n-.5)*.012,(wet-.5)*.035,(n-.5)*.055);c.lerp(new THREE.Color(.38,.36,.30),Math.max(0,s-.32)*.48);return c;}
const terrainGeo=new THREE.PlaneGeometry(240,240,170,170);terrainGeo.rotateX(-Math.PI/2);const tp=terrainGeo.attributes.position,tc=[];for(let i=0;i<tp.count;i++){const x=tp.getX(i),z=tp.getZ(i),y=heightAt(x,z);tp.setY(i,y);const c=terrainColor(y,x,z);tc.push(c.r,c.g,c.b);}terrainGeo.setAttribute('color',new THREE.Float32BufferAttribute(tc,3));terrainGeo.computeVertexNormals();
const terrainMat=new THREE.MeshStandardMaterial({vertexColors:true,roughness:.92,bumpMap:microNoise,bumpScale:.20});const terrain=new THREE.Mesh(terrainGeo,terrainMat);terrain.receiveShadow=true;scene.add(terrain);

const route=new THREE.CatmullRomCurve3([new THREE.Vector3(5,0,60),new THREE.Vector3(-2,0,41),new THREE.Vector3(-12,0,22),new THREE.Vector3(bridge.cx,0,bridge.cz),new THREE.Vector3(-3,0,-13),new THREE.Vector3(18,0,-31),new THREE.Vector3(36,0,-44),new THREE.Vector3(47,0,-55)]);
const pv=[],pi=[],puv=[],pathSeg=112;for(let i=0;i<=pathSeg;i++){const t=i/pathSeg,p=route.getPoint(t),p2=route.getPoint(Math.min(1,t+.0025)),tan=p2.clone().sub(p).normalize(),n=new THREE.Vector3(-tan.z,0,tan.x),half=2.45+Math.sin(i*.41)*.18;for(let si=0;si<2;si++){const s=si?1:-1,q=p.clone().addScaledVector(n,half*s);q.y=groundHeight(q.x,q.z)+.07;pv.push(q.x,q.y,q.z);puv.push(si,t*8);}}for(let i=0;i<pathSeg;i++){const a=i*2,b=a+1,c=a+2,d=a+3;pi.push(a,c,b,b,c,d);}const pg=new THREE.BufferGeometry();pg.setAttribute('position',new THREE.Float32BufferAttribute(pv,3));pg.setAttribute('uv',new THREE.Float32BufferAttribute(puv,2));pg.setIndex(pi);pg.computeVertexNormals();const pathMat=new THREE.MeshStandardMaterial({color:0x957754,roughness:.96,bumpMap:pathNoise,bumpScale:.18});const pathMesh=new THREE.Mesh(pg,pathMat);pathMesh.receiveShadow=true;scene.add(pathMesh);

const rv=[],ri=[],ruv=[],riverSeg=128;for(let i=0;i<=riverSeg;i++){const z=-110+i*(220/riverSeg),cx=streamCenter(z),half=5.55;rv.push(cx-half,-2.30,z,cx+half,-2.30,z);ruv.push(0,i/riverSeg*14,1,i/riverSeg*14);}for(let i=0;i<riverSeg;i++){const a=i*2,b=a+1,c=a+2,d=a+3;ri.push(a,c,b,b,c,d);}const rg=new THREE.BufferGeometry();rg.setAttribute('position',new THREE.Float32BufferAttribute(rv,3));rg.setAttribute('uv',new THREE.Float32BufferAttribute(ruv,2));rg.setIndex(ri);rg.computeVertexNormals();
const waterU={time:{value:0},sunDir:{value:new THREE.Vector3(-.5,.8,.2)},deep:{value:new THREE.Color(0x1e5267)},shallow:{value:new THREE.Color(0x74b9c2)},sky:{value:new THREE.Color(0xbfd7d4)}};
const waterM=new THREE.ShaderMaterial({transparent:true,depthWrite:false,uniforms:waterU,vertexShader:`uniform float time;varying vec3 vW;varying vec2 vUv;void main(){vec3 p=position;float w=sin((p.x+time*2.3)*.48)*.065+cos((p.z-time*1.6)*.34)*.050+sin((p.x+p.z+time)*.17)*.025;p.y+=w;vUv=uv;vec4 wp=modelMatrix*vec4(p,1.);vW=wp.xyz;gl_Position=projectionMatrix*viewMatrix*wp;}`,fragmentShader:`uniform float time;uniform vec3 deep,shallow,sunDir,sky;varying vec3 vW;varying vec2 vUv;void main(){float dx=.065*.48*cos((vW.x+time*2.3)*.48)+.025*.17*cos((vW.x+vW.z+time)*.17);float dz=-.050*.34*sin((vW.z-time*1.6)*.34)+.025*.17*cos((vW.x+vW.z+time)*.17);vec3 N=normalize(vec3(-dx,1.,-dz));vec3 V=normalize(cameraPosition-vW);float fres=pow(1.-max(dot(N,V),0.),2.8);vec3 R=reflect(-normalize(sunDir),N);float glint=pow(max(dot(R,V),0.),90.)*.9;float edge=min(vUv.x,1.-vUv.x);float foam=(1.-smoothstep(.02,.105,edge))*(.45+.35*sin(vUv.y*5.+time*2.));vec3 c=mix(deep,shallow,.48+N.x*.65);c=mix(c,sky,fres*.48);c+=vec3(1.,.82,.52)*glint;c=mix(c,vec3(.90,.96,.93),foam*.62);gl_FragColor=vec4(c,.88);}`});scene.add(new THREE.Mesh(rg,waterM));

const obstacles=[];const addObstacle=(x,z,r,h=7)=>obstacles.push({x,z,r,h});
function addWind(mat,amp){mat.onBeforeCompile=s=>{s.uniforms.uTime={value:0};s.uniforms.uWind={value:.48};mat.userData.shader=s;s.vertexShader=s.vertexShader.replace('#include <common>','#include <common>\nuniform float uTime;uniform float uWind;').replace('#include <begin_vertex>',`#include <begin_vertex>\nfloat sw=sin(uTime*1.42+(instanceMatrix[3].x+instanceMatrix[3].z)*.052+position.y*.78)*uWind*${amp.toFixed(3)};transformed.x+=sw*max(position.y,0.);`);};mat.customProgramCacheKey=()=>`wind-${amp}`;}
const bark=new THREE.MeshStandardMaterial({color:0x5a3724,roughness:1,bumpMap:microNoise,bumpScale:.08});
const leafA=new THREE.MeshStandardMaterial({color:0x2b6337,roughness:.86});const leafB=new THREE.MeshStandardMaterial({color:0x397847,roughness:.84});const leafC=new THREE.MeshStandardMaterial({color:0x4d8250,roughness:.84});addWind(leafA,.018);addWind(leafB,.022);addWind(leafC,.025);
const TREE=238, trunkGeo=new THREE.CylinderGeometry(.29,.48,5.4,8);trunkGeo.translate(0,2.7,0);const crownGeo=new THREE.IcosahedronGeometry(1.55,1),smallCrown=new THREE.IcosahedronGeometry(1.18,1);
const trunks=new THREE.InstancedMesh(trunkGeo,bark,TREE), crown1=new THREE.InstancedMesh(crownGeo,leafA,TREE), crown2=new THREE.InstancedMesh(smallCrown,leafB,TREE), crown3=new THREE.InstancedMesh(smallCrown,leafC,TREE);trunks.castShadow=trunks.receiveShadow=true;crown1.castShadow=crown2.castShadow=crown3.castShadow=true;
const td=new THREE.Object3D();let ti=0,tries=0;while(ti<TREE&&tries++<5000){const x=(rnd()-.5)*224,z=(rnd()-.5)*224;if(Math.abs(x-streamCenter(z))<9.2)continue;if(Math.hypot(x-5,z-60)<10)continue;if(Math.hypot(x-38,z+45)<14)continue;const y=heightAt(x,z),s=.72+rnd()*1.12,rot=rnd()*Math.PI*2;td.position.set(x,y,z);td.rotation.set(0,rot,0);td.scale.set(s,s,s);td.updateMatrix();trunks.setMatrixAt(ti,td.matrix);const baseY=y+5.15*s;for(const [mesh,ox,oy,oz,ss] of [[crown1,0,0,0,1],[crown2,.75,.18,.05,.86],[crown3,-.62,.42,-.18,.78]]){const ca=Math.cos(rot),sa=Math.sin(rot),rx=ox*ca-oz*sa,rz=ox*sa+oz*ca;td.position.set(x+rx*s,baseY+oy*s,z+rz*s);td.rotation.set(0,rot+rnd()*.5,0);td.scale.set(s*ss*(.9+rnd()*.18),s*ss*(.9+rnd()*.16),s*ss*(.9+rnd()*.18));td.updateMatrix();mesh.setMatrixAt(ti,td.matrix);}addObstacle(x,z,.50*s,7*s);ti++;}scene.add(trunks,crown1,crown2,crown3);

const bushMat=new THREE.MeshStandardMaterial({color:0x477a43,roughness:.9});addWind(bushMat,.030);const bushGeo=new THREE.DodecahedronGeometry(.72,0),BUSH=260,bushes=new THREE.InstancedMesh(bushGeo,bushMat,BUSH);for(let i=0;i<BUSH;i++){const x=(rnd()-.5)*214,z=(rnd()-.5)*214;if(Math.abs(x-streamCenter(z))<7)continue;const y=heightAt(x,z),s=.45+rnd()*.95;td.position.set(x,y+.35*s,z);td.rotation.set(0,rnd()*6.28,0);td.scale.set(s*1.35,s*.75,s);td.updateMatrix();bushes.setMatrixAt(i,td.matrix);}bushes.castShadow=true;scene.add(bushes);

const grassMat=new THREE.MeshStandardMaterial({color:0x648e42,roughness:1,side:THREE.DoubleSide});addWind(grassMat,.060);const bladeGeo=new THREE.ConeGeometry(.052,.62,3);bladeGeo.translate(0,.31,0);const GRASS=2600,grass=new THREE.InstancedMesh(bladeGeo,grassMat,GRASS);for(let i=0;i<GRASS;i++){const x=(rnd()-.5)*220,z=(rnd()-.5)*220;if(Math.abs(x-streamCenter(z))<6.3)continue;const y=heightAt(x,z),s=.45+rnd()*1.15;td.position.set(x,y,z);td.rotation.set(0,rnd()*6.28,0);td.scale.set(s,s,s);td.updateMatrix();grass.setMatrixAt(i,td.matrix);}scene.add(grass);

const flowerMat=new THREE.MeshStandardMaterial({color:0xf0ddb0,roughness:.78,emissive:0x1d1407,emissiveIntensity:.15});addWind(flowerMat,.025);const flowerGeo=new THREE.SphereGeometry(.065,5,4),FLOWERS=310,flowers=new THREE.InstancedMesh(flowerGeo,flowerMat,FLOWERS);for(let i=0;i<FLOWERS;i++){const t=rnd(),p=route.getPoint(t),x=p.x+(rnd()-.5)*14,z=p.z+(rnd()-.5)*14,y=heightAt(x,z);td.position.set(x,y+.18,z);const s=.65+rnd()*.8;td.scale.setScalar(s);td.updateMatrix();flowers.setMatrixAt(i,td.matrix);}scene.add(flowers);

function authoredRockGeometry(k){const g=new THREE.IcosahedronGeometry(1,1),p=g.attributes.position;for(let i=0;i<p.count;i++){const x=p.getX(i),y=p.getY(i),z=p.getZ(i),n=.78+.30*hash2(i*.37+k*11,i*.73+k*7);p.setXYZ(i,x*n,y*n,z*n);}g.computeVertexNormals();return g;}
const rockMat=new THREE.MeshStandardMaterial({color:0x757b78,roughness:.93,bumpMap:microNoise,bumpScale:.12});const ROCKS=120,rockMeshes=[0,1,2].map(k=>{const m=new THREE.InstancedMesh(authoredRockGeometry(k),rockMat,Math.ceil(ROCKS/3));m.castShadow=m.receiveShadow=true;scene.add(m);return m;});const rc=[0,0,0];for(let i=0;i<ROCKS;i++){const x=(rnd()-.5)*215,z=(rnd()-.5)*215,y=heightAt(x,z),s=.22+rnd()*1.25,k=i%3,j=rc[k]++;td.position.set(x,y+.12,z);td.rotation.set(rnd()*.23,rnd()*6.28,rnd()*.20);td.scale.set(s*1.45,s*.72,s);td.updateMatrix();rockMeshes[k].setMatrixAt(j,td.matrix);if(s>.62)addObstacle(x,z,.78*s,1.4*s);}

const mountainMatA=new THREE.MeshStandardMaterial({color:0x687873,roughness:1,flatShading:true}),mountainMatB=new THREE.MeshStandardMaterial({color:0x82908a,roughness:1,flatShading:true});const mountainGeo=new THREE.ConeGeometry(15,36,7,1),M=28,m1=new THREE.InstancedMesh(mountainGeo,mountainMatA,M),m2=new THREE.InstancedMesh(mountainGeo,mountainMatB,M);for(let i=0;i<M;i++){const a=i/M*Math.PI*2,r=145+Math.sin(i*2.17)*15,x=Math.cos(a)*r,z=Math.sin(a)*r,s=.68+((i*13)%11)/18;td.position.set(x,7+Math.sin(i)*3,z);td.rotation.set(0,-a+rnd()*.35,0);td.scale.set(s*(.8+rnd()*.35),s,s*(.8+rnd()*.35));td.updateMatrix();(i%2?m1:m2).setMatrixAt(i,td.matrix);}scene.add(m1,m2);

const wood=new THREE.MeshStandardMaterial({color:0x765134,roughness:.9,bumpMap:microNoise,bumpScale:.08});const bridgeGroup=new THREE.Group();bridgeGroup.position.set(bridge.cx,bridge.top,bridge.cz);scene.add(bridgeGroup);for(let i=0;i<11;i++){const plank=new THREE.Mesh(new THREE.BoxGeometry(1.66,.18,4.0),wood);plank.position.set(-8.1+i*1.62,0,0);plank.rotation.y=(i%3-1)*.008;plank.castShadow=plank.receiveShadow=true;bridgeGroup.add(plank);}for(const sx of [-1,1])for(const sz of [-1,1]){const post=new THREE.Mesh(new THREE.CylinderGeometry(.12,.17,2.45,7),wood);post.position.set(sx*8.0,1.12,sz*1.72);post.castShadow=true;bridgeGroup.add(post);}

const ruin=new THREE.Group(),ruinX=36,ruinZ=-44;ruin.position.set(ruinX,heightAt(ruinX,ruinZ),ruinZ);scene.add(ruin);const stone=new THREE.MeshStandardMaterial({color:0x918d82,roughness:.91,bumpMap:microNoise,bumpScale:.13});function rbox(x,y,z,sx,sy,sz,ry=0){const m=new THREE.Mesh(new THREE.BoxGeometry(sx,sy,sz),stone);m.position.set(x,y,z);m.rotation.y=ry;m.castShadow=m.receiveShadow=true;ruin.add(m);addObstacle(ruinX+x,ruinZ+z,Math.max(sx,sz)*.42,sy);}rbox(0,2.8,0,7.8,5.6,1.7,.07);rbox(-4.9,4.0,.2,1.7,8.0,1.7,.07);rbox(4.9,4.0,.2,1.7,8.0,1.7,.07);rbox(0,7.15,.2,11.2,1.0,1.6,.07);rbox(0,9.35,0,1.3,4.6,1.3);const ring=new THREE.Mesh(new THREE.TorusGeometry(3.55,.30,8,26),stone);ring.position.set(0,10.8,0);ring.rotation.x=Math.PI/2.35;ring.rotation.z=.34;ring.castShadow=true;ruin.add(ring);
const bx=48,bz=-59,by=heightAt(bx,bz),beacon=new THREE.Group();beacon.position.set(bx,by,bz);scene.add(beacon);const beaconMat=new THREE.MeshStandardMaterial({color:0x756f64,roughness:.9,bumpMap:microNoise,bumpScale:.1}),glowMat=new THREE.MeshStandardMaterial({color:0xffd88d,emissive:0xffb84d,emissiveIntensity:2.3});const col=new THREE.Mesh(new THREE.CylinderGeometry(.6,.85,7.5,9),beaconMat);col.position.y=3.75;col.castShadow=true;beacon.add(col);const orb=new THREE.Mesh(new THREE.SphereGeometry(.55,14,10),glowMat);orb.position.y=7.8;beacon.add(orb);const orbLight=new THREE.PointLight(0xffb95a,5.5,18,2);orbLight.position.y=7.8;beacon.add(orbLight);addObstacle(bx,bz,1,8);

const playerRoot=new THREE.Group();scene.add(playerRoot);playerRoot.position.set(5,groundHeight(5,60),60);let model=null,mixer=null,actions={},activeAction=null,characterMode='FALLBACK';
function buildFallback(){const g=new THREE.Group(),bodyMat=new THREE.MeshStandardMaterial({color:0x2a5b79,roughness:.72}),skin=new THREE.MeshStandardMaterial({color:0xd9a57c,roughness:.78}),dark=new THREE.MeshStandardMaterial({color:0x302923,roughness:.92});const torso=new THREE.Mesh(new THREE.CapsuleGeometry(.32,.74,4,8),bodyMat);torso.position.y=1.18;g.add(torso);const head=new THREE.Mesh(new THREE.SphereGeometry(.28,12,8),skin);head.position.y=1.86;g.add(head);for(const sx of [-1,1]){const leg=new THREE.Mesh(new THREE.CapsuleGeometry(.085,.45,3,6),dark);leg.position.set(.145*sx,.52,0);g.add(leg);}g.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});playerRoot.add(g);model=g;charEl.textContent='FALLBACK';}
buildFallback();boot.classList.add('hide');setTimeout(()=>boot.remove(),320);
const loader=new GLTFLoader();loader.load('./assets/Soldier.glb',g=>{if(model)playerRoot.remove(model);model=g.scene;model.scale.setScalar(1.0);model.rotation.y=Math.PI;model.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});playerRoot.add(model);mixer=new THREE.AnimationMixer(model);actions={};for(const clip of g.animations)actions[clip.name]=mixer.clipAction(clip);characterMode='GLB';charEl.textContent='GLB';setAction(actions.Idle?'Idle':Object.keys(actions)[0],0);},undefined,err=>{console.warn('Local GLB failed; fallback remains active',err);charEl.textContent='FALLBACK';});
function setAction(name,fade=.16){if(!actions[name]||activeAction===actions[name])return;const next=actions[name];next.reset().play();if(activeAction)activeAction.crossFadeTo(next,fade,true);activeAction=next;}

let yaw=.08,pitch=.30,camDist=7.8,drag=false,lastX=0,lastY=0,touchSprint=false,jumpQueued=false,verticalVel=0,grounded=true;const keys={},touchMove=new THREE.Vector2(),velocity=new THREE.Vector3();addEventListener('keydown',e=>{keys[e.code]=true;if(e.code==='Space')jumpQueued=true;});addEventListener('keyup',e=>keys[e.code]=false);
renderer.domElement.addEventListener('pointerdown',e=>{if(e.pointerType==='touch'&&e.clientX<innerWidth*.36&&e.clientY>innerHeight*.52)return;if(e.pointerType==='touch'&&e.clientX>innerWidth*.68&&e.clientY>innerHeight*.54)return;drag=true;lastX=e.clientX;lastY=e.clientY;renderer.domElement.setPointerCapture(e.pointerId);});renderer.domElement.addEventListener('pointerup',()=>drag=false);renderer.domElement.addEventListener('pointercancel',()=>drag=false);renderer.domElement.addEventListener('pointermove',e=>{if(!drag)return;const dx=e.clientX-lastX,dy=e.clientY-lastY;yaw-=dx*.0060;pitch=THREE.MathUtils.clamp(pitch+dy*.0047,-.05,.90);lastX=e.clientX;lastY=e.clientY;});renderer.domElement.addEventListener('wheel',e=>camDist=THREE.MathUtils.clamp(camDist+e.deltaY*.008,4.8,14),{passive:true});
const stick=$('stick'),knob=$('knob'),sprint=$('sprint'),jump=$('jump');let sp=null;function setStick(e){const r=stick.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,max=r.width*.34;let dx=e.clientX-cx,dy=e.clientY-cy,l=Math.hypot(dx,dy)||1,k=Math.min(1,max/l);dx*=k;dy*=k;knob.style.transform=`translate(${dx}px,${dy}px)`;touchMove.set(dx/max,-dy/max);}stick.addEventListener('pointerdown',e=>{e.preventDefault();sp=e.pointerId;stick.setPointerCapture(sp);setStick(e)});stick.addEventListener('pointermove',e=>{if(e.pointerId===sp){e.preventDefault();setStick(e)}});function freeStick(e){if(sp===null||e.pointerId===sp){sp=null;touchMove.set(0,0);knob.style.transform='translate(0,0)'}}stick.addEventListener('pointerup',freeStick);stick.addEventListener('pointercancel',freeStick);sprint.addEventListener('pointerdown',e=>{e.preventDefault();touchSprint=true;sprint.style.transform='scale(.94)'});for(const ev of ['pointerup','pointercancel','pointerleave'])sprint.addEventListener(ev,()=>{touchSprint=false;sprint.style.transform='scale(1)'});jump.addEventListener('pointerdown',e=>{e.preventDefault();jumpQueued=true;jump.style.transform='scale(.93)'});for(const ev of ['pointerup','pointercancel','pointerleave'])jump.addEventListener(ev,()=>jump.style.transform='scale(1)');
const panel=$('panel');$('tuneBtn').onclick=()=>panel.classList.toggle('open');const tod=$('tod'),fogS=$('fog'),windS=$('wind'),dampS=$('damp');$('shadowBtn').onclick=e=>{renderer.shadowMap.enabled=!renderer.shadowMap.enabled;e.target.textContent='Dynamic shadows: '+(renderer.shadowMap.enabled?'ON':'OFF')};

const dayTop=new THREE.Color(0x5ea9d0),duskTop=new THREE.Color(0x646f8d),dayMid=new THREE.Color(0xbfd7d4),duskMid=new THREE.Color(0xc3978f),dayBottom=new THREE.Color(0xf0ddbc),duskBottom=new THREE.Color(0xf0a171);
function updateEnvironment(){const hour=+tod.value,t=(hour-6)/14,ang=.10+t*Math.PI*.91,elev=Math.max(.04,Math.sin(ang)),az=-1.65+t*1.55;sun.position.set(Math.cos(az)*78,elev*90,Math.sin(az)*78);sun.intensity=.88+elev*3.5;const sd=sun.position.clone().normalize();skyU.sunDir.value.copy(sd);waterU.sunDir.value.copy(sd);const edge=THREE.MathUtils.smoothstep(Math.abs(hour-13),3,7);skyU.top.value.copy(dayTop).lerp(duskTop,edge);skyU.mid.value.copy(dayMid).lerp(duskMid,edge*.82);skyU.bottom.value.copy(dayBottom).lerp(duskBottom,edge);waterU.sky.value.copy(skyU.mid.value);sun.color.setRGB(1,.94-.12*edge,.81-.17*edge);hemi.intensity=.90+elev*1.42;fill.intensity=.16+elev*.21;scene.fog.density=.0022+(+fogS.value)*.0082;scene.fog.color.copy(skyU.mid.value).lerp(skyU.bottom.value,.42);renderer.toneMappingExposure=.84+elev*.31;}
function resolveObstacles(pos){for(const o of obstacles){const dx=pos.x-o.x,dz=pos.z-o.z,dist=Math.hypot(dx,dz),min=o.r+.36;if(dist<min&&dist>.0001){const push=min-dist;pos.x+=dx/dist*push;pos.z+=dz/dist*push;}}}
function cameraCollision(target,desired){let best=desired.clone(),ray=desired.clone().sub(target),steps=13;for(let i=1;i<=steps;i++){const t=i/steps,p=target.clone().addScaledVector(ray,t),gh=groundHeight(p.x,p.z)+.66;if(p.y<gh){best=target.clone().addScaledVector(ray,Math.max(.14,(i-1)/steps));break;}for(const o of obstacles){if(Math.hypot(p.x-o.x,p.z-o.z)<o.r+.26&&p.y<groundHeight(o.x,o.z)+o.h){return target.clone().addScaledVector(ray,Math.max(.14,(i-1)/steps));}}}return best;}
function zoneName(x,z){if(Math.hypot(x-bx,z-bz)<10)return'OVERLOOK BEACON';if(Math.hypot(x-ruinX,z-ruinZ)<16)return'RUINED OBSERVATORY';if(onBridge(x,z))return'OLD RIVER BRIDGE';if(Math.abs(x-streamCenter(z))<9)return'RIVER VALLEY';if(z<2)return'HIGHLAND TRAIL';return'FOREST APPROACH';}

const clock=new THREE.Clock();let frames=0,acc=0,qualityAcc=0,qualityFrames=0;
function animate(){requestAnimationFrame(animate);const dt=Math.min(.033,clock.getDelta()),time=clock.elapsedTime;updateEnvironment();const fwd=new THREE.Vector3(-Math.sin(yaw),0,-Math.cos(yaw)),right=new THREE.Vector3(Math.cos(yaw),0,-Math.sin(yaw)),input=new THREE.Vector3();if(keys.KeyW)input.add(fwd);if(keys.KeyS)input.sub(fwd);if(keys.KeyD)input.add(right);if(keys.KeyA)input.sub(right);if(touchMove.lengthSq()>.002){input.addScaledVector(fwd,touchMove.y);input.addScaledVector(right,touchMove.x);}const sprinting=(keys.ShiftLeft||touchSprint)&&input.lengthSq()>.01;const wet=inWater(playerRoot.position.x,playerRoot.position.z)&&groundHeight(playerRoot.position.x,playerRoot.position.z)<-1.1;const maxSpeed=(sprinting?8.7:4.8)*(wet?.58:1);if(input.lengthSq()>0){input.normalize();const tv=input.multiplyScalar(maxSpeed),blend=1-Math.exp(-(grounded?12:5)*dt);velocity.x=THREE.MathUtils.lerp(velocity.x,tv.x,blend);velocity.z=THREE.MathUtils.lerp(velocity.z,tv.z,blend);}else{const d=Math.exp(-(grounded?10:2.5)*dt);velocity.x*=d;velocity.z*=d;}if(jumpQueued&&grounded){verticalVel=7.7;grounded=false;}jumpQueued=false;verticalVel-=18.6*dt;playerRoot.position.x+=velocity.x*dt;playerRoot.position.z+=velocity.z*dt;playerRoot.position.x=THREE.MathUtils.clamp(playerRoot.position.x,-112,112);playerRoot.position.z=THREE.MathUtils.clamp(playerRoot.position.z,-112,112);resolveObstacles(playerRoot.position);const gh=groundHeight(playerRoot.position.x,playerRoot.position.z);playerRoot.position.y+=verticalVel*dt;if(playerRoot.position.y<=gh){playerRoot.position.y=gh;if(verticalVel<0)verticalVel=0;grounded=true;}else grounded=false;const speed=Math.hypot(velocity.x,velocity.z);if(speed>.18){const targetYaw=Math.atan2(velocity.x,velocity.z);let d=((targetYaw-playerRoot.rotation.y+Math.PI)%(Math.PI*2))-Math.PI;playerRoot.rotation.y+=d*(1-Math.exp(-14*dt));}if(characterMode==='GLB'&&grounded){if(speed<.22)setAction(actions.Idle?'Idle':Object.keys(actions)[0]);else if(speed<6)setAction(actions.Walk?'Walk':(actions.Run?'Run':Object.keys(actions)[0]));else setAction(actions.Run?'Run':Object.keys(actions)[0]);}if(mixer)mixer.update(dt*(sprinting?1.08:1));const target=playerRoot.position.clone().add(new THREE.Vector3(0,1.42,0));let desired=target.clone().add(new THREE.Vector3(Math.sin(yaw)*Math.cos(pitch)*camDist,Math.sin(pitch)*camDist+1.0,Math.cos(yaw)*Math.cos(pitch)*camDist));desired=cameraCollision(target,desired);const ck=1-Math.pow(1-(+dampS.value),dt*60);camera.position.lerp(desired,ck);camera.lookAt(target);camera.fov=THREE.MathUtils.lerp(camera.fov,sprinting?60:53,1-Math.exp(-5*dt));camera.updateProjectionMatrix();sun.target.position.copy(playerRoot.position);sun.target.updateMatrixWorld();waterU.time.value=time;const w=+windS.value;for(const mat of [leafA,leafB,leafC,bushMat,grassMat,flowerMat])if(mat.userData.shader){mat.userData.shader.uniforms.uTime.value=time;mat.userData.shader.uniforms.uWind.value=w;}orb.position.y=7.8+Math.sin(time*1.5)*.10;orbLight.intensity=5.0+Math.sin(time*2.1)*.6;zoneEl.textContent=zoneName(playerRoot.position.x,playerRoot.position.z);renderer.render(scene,camera);frames++;acc+=dt;qualityFrames++;qualityAcc+=dt;if(acc>.55){const fps=Math.round(frames/acc);fpsEl.textContent=fps;frames=0;acc=0;callsEl.textContent=renderer.info.render.calls;trisEl.textContent=renderer.info.render.triangles.toLocaleString();}if(COARSE&&qualityAcc>1.8){const avg=qualityFrames/qualityAcc;let next=renderScale;if(avg<53.5)next=Math.max(minScale,renderScale-.08);else if(avg>58.7)next=Math.min(maxScale,renderScale+.04);if(Math.abs(next-renderScale)>.001){renderScale=next;renderer.setPixelRatio(renderScale);renderer.setSize(innerWidth,innerHeight,false);scaleEl.textContent=renderScale.toFixed(2)+'×';}qualityAcc=0;qualityFrames=0;}}
animate();
addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setPixelRatio(renderScale);renderer.setSize(innerWidth,innerHeight);});


// ---- Test 06A: Living World Baseline — deterministic flock response ----
const LIVING_WORLD_06A_MARKER='06A_LIVING_WORLD_FLOCK';
const FLOCK={count:12,triggerRadius:7.0,resetRadius:13.5,fleeMs:1450,returnMs:1350,farHoldMs:1400};
const flockSpawnYaw=Number.isFinite(playerRoot.rotation.y)?playerRoot.rotation.y:0;
const flockCenterX=playerRoot.position.x+Math.sin(flockSpawnYaw)*8.0;
const flockCenterZ=playerRoot.position.z+Math.cos(flockSpawnYaw)*8.0;
const flockCenterY=groundHeight(flockCenterX,flockCenterZ)+0.18;

const flockBodyGeo=new THREE.SphereGeometry(.12,7,5);
const flockWingGeo=new THREE.PlaneGeometry(.26,.10);
const flockBodyMat=new THREE.MeshStandardMaterial({color:0x283137,roughness:.78,metalness:.03});
const flockWingMat=new THREE.MeshStandardMaterial({color:0x66757a,roughness:.82,side:THREE.DoubleSide});
const flockBodies=new THREE.InstancedMesh(flockBodyGeo,flockBodyMat,FLOCK.count);
const flockLeftWings=new THREE.InstancedMesh(flockWingGeo,flockWingMat,FLOCK.count);
const flockRightWings=new THREE.InstancedMesh(flockWingGeo,flockWingMat,FLOCK.count);
flockBodies.castShadow=true;flockLeftWings.castShadow=true;flockRightWings.castShadow=true;
scene.add(flockBodies,flockLeftWings,flockRightWings);

const flockBirds=[];
for(let i=0;i<FLOCK.count;i++){
  const a=(i/FLOCK.count)*Math.PI*2+((i*37)%11)*.041;
  const r=1.0+((i*53)%7)*.18;
  const px=Math.cos(a)*r,pz=Math.sin(a)*r;
  const escapeA=a+((i%3)-1)*.22;
  flockBirds.push({
    px,pz,
    ex:px+Math.cos(escapeA)*(5.0+(i%4)*.72),
    ez:pz+Math.sin(escapeA)*(5.0+(i%4)*.72),
    rise:2.8+(i%5)*.42,
    phase:i*.83,
    yaw:escapeA
  });
}

let flockState='CALM',flockStateStart=performance.now(),flockFarSince=0,flockResponses=0;
const bodyObj=new THREE.Object3D(),leftObj=new THREE.Object3D(),rightObj=new THREE.Object3D();
const worldStateEl=document.getElementById('worldState');
const worldDistanceEl=document.getElementById('worldDistance');
const worldResultEl=document.getElementById('worldResult');

function flockEaseOut(p){return 1-Math.pow(1-p,3);}
function flockEaseInOut(p){return p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2;}
function flockDistance(){return Math.hypot(playerRoot.position.x-flockCenterX,playerRoot.position.z-flockCenterZ);}
function setFlockState(next,now){
  flockState=next;flockStateStart=now;flockFarSince=0;
  if(worldStateEl){worldStateEl.textContent=next;worldStateEl.style.color=next==='CALM'?'#a8f0b5':next==='FLEEING'?'#ffd18a':next==='DISPERSED'?'#ffb095':'#b9d9ff';}
}
function updateFlockHud(dist){
  if(worldDistanceEl)worldDistanceEl.textContent=dist.toFixed(1)+' m';
  if(worldResultEl&&flockResponses===0)worldResultEl.textContent=dist<=FLOCK.triggerRadius?'TRIGGERING':'APPROACH';
}
function birdPose(b,i,now){
  const calmX=flockCenterX+b.px,calmZ=flockCenterZ+b.pz,calmY=groundHeight(calmX,calmZ)+.22;
  const destX=flockCenterX+b.ex,destZ=flockCenterZ+b.ez,destY=flockCenterY+b.rise;
  let x=calmX,y=calmY,z=calmZ,yaw=b.yaw,flight=0;
  const elapsed=now-flockStateStart;
  if(flockState==='CALM'){
    y+=Math.sin(now*.0021+b.phase)*.022;
    yaw=b.phase*.37+Math.sin(now*.0007+b.phase)*.18;
  }else if(flockState==='FLEEING'){
    const p=Math.min(1,elapsed/FLOCK.fleeMs),e=flockEaseOut(p);
    x=THREE.MathUtils.lerp(calmX,destX,e);z=THREE.MathUtils.lerp(calmZ,destZ,e);
    y=THREE.MathUtils.lerp(calmY,destY,e)+Math.sin(p*Math.PI)*.75;
    flight=1;
  }else if(flockState==='DISPERSED'){
    const t=now*.0014+b.phase;
    x=destX+Math.cos(t)*.45;z=destZ+Math.sin(t)*.45;y=destY+Math.sin(t*1.8)*.18;
    yaw=t+Math.PI/2;flight=1;
  }else if(flockState==='RETURNING'){
    const p=Math.min(1,elapsed/FLOCK.returnMs),e=flockEaseInOut(p);
    x=THREE.MathUtils.lerp(destX,calmX,e);z=THREE.MathUtils.lerp(destZ,calmZ,e);
    y=THREE.MathUtils.lerp(destY,calmY,e)+Math.sin(p*Math.PI)*.92;
    yaw=b.yaw+Math.PI;flight=1;
  }
  const flap=flight?Math.sin(now*.020+b.phase)*.72:Math.sin(now*.006+b.phase)*.08;
  bodyObj.position.set(x,y,z);bodyObj.rotation.set(0,yaw,0);bodyObj.scale.set(.88,.58,1.45);bodyObj.updateMatrix();flockBodies.setMatrixAt(i,bodyObj.matrix);
  const sx=Math.cos(yaw),sz=-Math.sin(yaw);
  leftObj.position.set(x+sx*.13,y+.015,z+sz*.13);leftObj.rotation.set(-Math.PI/2,yaw,flap);leftObj.scale.set(1,1,1);leftObj.updateMatrix();flockLeftWings.setMatrixAt(i,leftObj.matrix);
  rightObj.position.set(x-sx*.13,y+.015,z-sz*.13);rightObj.rotation.set(-Math.PI/2,yaw,-flap);rightObj.scale.set(1,1,1);rightObj.updateMatrix();flockRightWings.setMatrixAt(i,rightObj.matrix);
}
function updateLivingWorld06A(now){
  const dist=flockDistance();updateFlockHud(dist);
  if(flockState==='CALM'&&dist<=FLOCK.triggerRadius){
    flockResponses++;setFlockState('FLEEING',now);
    if(worldResultEl){worldResultEl.textContent='RESPONDED ✓';worldResultEl.style.color='#ffd18a';}
  }else if(flockState==='FLEEING'&&now-flockStateStart>=FLOCK.fleeMs){
    setFlockState('DISPERSED',now);
  }else if(flockState==='DISPERSED'){
    if(dist>FLOCK.resetRadius){
      if(!flockFarSince)flockFarSince=now;
      if(now-flockFarSince>=FLOCK.farHoldMs)setFlockState('RETURNING',now);
    }else flockFarSince=0;
  }else if(flockState==='RETURNING'){
    if(dist<=FLOCK.triggerRadius){setFlockState('FLEEING',now);}
    else if(now-flockStateStart>=FLOCK.returnMs)setFlockState('CALM',now);
  }
  for(let i=0;i<flockBirds.length;i++)birdPose(flockBirds[i],i,now);
  flockBodies.instanceMatrix.needsUpdate=true;flockLeftWings.instanceMatrix.needsUpdate=true;flockRightWings.instanceMatrix.needsUpdate=true;
}
function livingWorld06ALoop(now){requestAnimationFrame(livingWorld06ALoop);updateLivingWorld06A(now);}
requestAnimationFrame(livingWorld06ALoop);

globalThis.__livingWorld06A={
  marker:LIVING_WORLD_06A_MARKER,
  get state(){return flockState;},
  get responses(){return flockResponses;},
  get distance(){return flockDistance();},
  triggerRadius:FLOCK.triggerRadius,
  resetRadius:FLOCK.resetRadius
};


// ---- Test 06B: Living World — deterministic actor-to-actor disturbance propagation ----
const LIVING_WORLD_06B_MARKER='06B_WORLD_DISTURBANCE_PROPAGATION';
const PROPAGATION_06B={secondaryCount:10,disturbanceSpeed:18.0,fleeMs:1250,returnMs:1350,farHoldMs:1200};

// 06A remains frozen. 06B observes only the stable exported 06A public state and never reaches
// into 06A private flock internals. This adapter is the prototype boundary for a future WorldEventBus.
const primaryApi=globalThis.__livingWorld06A;
if(!primaryApi||primaryApi.marker!=='06A_LIVING_WORLD_FLOCK')throw new Error('06B requires accepted 06A public world-state API');

// 06B-R1 visibility correction.
// Dynamic InstancedMesh transforms can outrun stale frustum bounds on mobile Safari/WebGL,
// making a flock appear to blink out even though its state machine is still flying it away.
// Keep the tiny proof flocks render-visible for their complete deterministic travel path.
// This changes no positions, timings, triggers, propagation, or draw-call count.
flockBodies.frustumCulled=false;
flockLeftWings.frustumCulled=false;
flockRightWings.frustumCulled=false;

const spawnYaw06B=Number.isFinite(playerRoot.rotation.y)?playerRoot.rotation.y:0;
const spawnX06B=playerRoot.position.x,spawnZ06B=playerRoot.position.z;
const fwdX06B=Math.sin(spawnYaw06B),fwdZ06B=Math.cos(spawnYaw06B);
const rightX06B=Math.cos(spawnYaw06B),rightZ06B=-Math.sin(spawnYaw06B);
const primaryApproxX06B=spawnX06B+fwdX06B*8.0;
const primaryApproxZ06B=spawnZ06B+fwdZ06B*8.0;
const secondaryCenterX06B=spawnX06B+fwdX06B*15.5+rightX06B*4.5;
const secondaryCenterZ06B=spawnZ06B+fwdZ06B*15.5+rightZ06B*4.5;
const secondaryCenterY06B=groundHeight(secondaryCenterX06B,secondaryCenterZ06B)+0.18;
const propagationDistance06B=Math.hypot(secondaryCenterX06B-primaryApproxX06B,secondaryCenterZ06B-primaryApproxZ06B);
const propagationTravelMs06B=(propagationDistance06B/PROPAGATION_06B.disturbanceSpeed)*1000;

const secondaryBodyGeo06B=new THREE.SphereGeometry(.12,7,5);
const secondaryWingGeo06B=new THREE.PlaneGeometry(.26,.10);
const secondaryBodyMat06B=new THREE.MeshStandardMaterial({color:0x34454d,roughness:.78,metalness:.03});
const secondaryWingMat06B=new THREE.MeshStandardMaterial({color:0x86a1a8,roughness:.82,side:THREE.DoubleSide});
const secondaryBodies06B=new THREE.InstancedMesh(secondaryBodyGeo06B,secondaryBodyMat06B,PROPAGATION_06B.secondaryCount);
const secondaryLeftWings06B=new THREE.InstancedMesh(secondaryWingGeo06B,secondaryWingMat06B,PROPAGATION_06B.secondaryCount);
const secondaryRightWings06B=new THREE.InstancedMesh(secondaryWingGeo06B,secondaryWingMat06B,PROPAGATION_06B.secondaryCount);
secondaryBodies06B.castShadow=true;secondaryLeftWings06B.castShadow=true;secondaryRightWings06B.castShadow=true;
// Same dynamic-instancing visibility rule for Flock B.
secondaryBodies06B.frustumCulled=false;
secondaryLeftWings06B.frustumCulled=false;
secondaryRightWings06B.frustumCulled=false;
scene.add(secondaryBodies06B,secondaryLeftWings06B,secondaryRightWings06B);

const secondaryBirds06B=[];
for(let i=0;i<PROPAGATION_06B.secondaryCount;i++){
  const a=(i/PROPAGATION_06B.secondaryCount)*Math.PI*2+((i*29)%9)*.047;
  const r=.85+((i*41)%6)*.19;
  const px=Math.cos(a)*r,pz=Math.sin(a)*r;
  const escapeA=a+((i%3)-1)*.18+.12;
  secondaryBirds06B.push({
    px,pz,
    ex:px+Math.cos(escapeA)*(4.7+(i%4)*.66),
    ez:pz+Math.sin(escapeA)*(4.7+(i%4)*.66),
    rise:2.5+(i%4)*.46,
    phase:i*.91,
    yaw:escapeA
  });
}

const secondaryBodyObj06B=new THREE.Object3D(),secondaryLeftObj06B=new THREE.Object3D(),secondaryRightObj06B=new THREE.Object3D();
let secondaryState06B='CALM',secondaryStateStart06B=performance.now(),secondaryResponses06B=0;
let primaryPrevState06B=primaryApi.state,disturbance06B=null,disturbanceEvents06B=0;

const secondaryStateEl06B=document.getElementById('worldBState');
const propagationStateEl06B=document.getElementById('worldLinkState');
const propagationDelayEl06B=document.getElementById('worldLinkDelay');
const secondaryDistanceEl06B=document.getElementById('worldBDistance');

function easeOut06B(p){return 1-Math.pow(1-p,3);}
function easeInOut06B(p){return p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2;}
function playerToSecondaryDistance06B(){return Math.hypot(playerRoot.position.x-secondaryCenterX06B,playerRoot.position.z-secondaryCenterZ06B);}
function setSecondaryState06B(next,now){
  secondaryState06B=next;secondaryStateStart06B=now;
  if(secondaryStateEl06B){secondaryStateEl06B.textContent=next;secondaryStateEl06B.style.color=next==='CALM'?'#a8f0b5':next==='ALERT_DELAY'?'#ffe59a':next==='FLEEING'?'#ffd18a':next==='DISPERSED'?'#ffb095':'#b9d9ff';}
}
function setLinkState06B(text,color='#a8f0b5'){
  if(propagationStateEl06B){propagationStateEl06B.textContent=text;propagationStateEl06B.style.color=color;}
}
function emitDisturbance06B(now){
  disturbanceEvents06B++;
  disturbance06B={emittedAt:now,arrivalAt:now+propagationTravelMs06B,id:disturbanceEvents06B};
  if(secondaryState06B==='CALM'||secondaryState06B==='RETURNING')setSecondaryState06B('ALERT_DELAY',now);
  setLinkState06B('TRAVELING','#ffe59a');
  if(propagationDelayEl06B)propagationDelayEl06B.textContent=Math.round(propagationTravelMs06B)+' ms';
}
function poseSecondaryBird06B(b,i,now){
  const calmX=secondaryCenterX06B+b.px,calmZ=secondaryCenterZ06B+b.pz,calmY=groundHeight(calmX,calmZ)+.22;
  const destX=secondaryCenterX06B+b.ex,destZ=secondaryCenterZ06B+b.ez,destY=secondaryCenterY06B+b.rise;
  let x=calmX,y=calmY,z=calmZ,yaw=b.yaw,flight=0;
  const elapsed=now-secondaryStateStart06B;
  if(secondaryState06B==='CALM'||secondaryState06B==='ALERT_DELAY'){
    y+=Math.sin(now*.002+b.phase)*.021;
    yaw=b.phase*.34+Math.sin(now*.00072+b.phase)*.16;
    if(secondaryState06B==='ALERT_DELAY')y+=Math.sin(now*.014+b.phase)*.025;
  }else if(secondaryState06B==='FLEEING'){
    const p=Math.min(1,elapsed/PROPAGATION_06B.fleeMs),e=easeOut06B(p);
    x=THREE.MathUtils.lerp(calmX,destX,e);z=THREE.MathUtils.lerp(calmZ,destZ,e);
    y=THREE.MathUtils.lerp(calmY,destY,e)+Math.sin(p*Math.PI)*.68;
    flight=1;
  }else if(secondaryState06B==='DISPERSED'){
    const t=now*.00135+b.phase;
    x=destX+Math.cos(t)*.40;z=destZ+Math.sin(t)*.40;y=destY+Math.sin(t*1.75)*.16;
    yaw=t+Math.PI/2;flight=1;
  }else if(secondaryState06B==='RETURNING'){
    const p=Math.min(1,elapsed/PROPAGATION_06B.returnMs),e=easeInOut06B(p);
    x=THREE.MathUtils.lerp(destX,calmX,e);z=THREE.MathUtils.lerp(destZ,calmZ,e);
    y=THREE.MathUtils.lerp(destY,calmY,e)+Math.sin(p*Math.PI)*.78;
    yaw=b.yaw+Math.PI;flight=1;
  }
  const flap=flight?Math.sin(now*.0205+b.phase)*.72:Math.sin(now*.006+b.phase)*.08;
  secondaryBodyObj06B.position.set(x,y,z);secondaryBodyObj06B.rotation.set(0,yaw,0);secondaryBodyObj06B.scale.set(.88,.58,1.45);secondaryBodyObj06B.updateMatrix();secondaryBodies06B.setMatrixAt(i,secondaryBodyObj06B.matrix);
  const sx=Math.cos(yaw),sz=-Math.sin(yaw);
  secondaryLeftObj06B.position.set(x+sx*.13,y+.015,z+sz*.13);secondaryLeftObj06B.rotation.set(-Math.PI/2,yaw,flap);secondaryLeftObj06B.scale.set(1,1,1);secondaryLeftObj06B.updateMatrix();secondaryLeftWings06B.setMatrixAt(i,secondaryLeftObj06B.matrix);
  secondaryRightObj06B.position.set(x-sx*.13,y+.015,z-sz*.13);secondaryRightObj06B.rotation.set(-Math.PI/2,yaw,-flap);secondaryRightObj06B.scale.set(1,1,1);secondaryRightObj06B.updateMatrix();secondaryRightWings06B.setMatrixAt(i,secondaryRightObj06B.matrix);
}
function updateLivingWorld06B(now){
  const primaryState=primaryApi.state;
  const distB=playerToSecondaryDistance06B();
  if(secondaryDistanceEl06B)secondaryDistanceEl06B.textContent=distB.toFixed(1)+' m';

  // World-to-world trigger: only a new primary CALM/RETURNING -> FLEEING transition emits the event.
  if(primaryState==='FLEEING'&&primaryPrevState06B!=='FLEEING')emitDisturbance06B(now);
  primaryPrevState06B=primaryState;

  if(disturbance06B&&now>=disturbance06B.arrivalAt){
    disturbance06B=null;
    secondaryResponses06B++;
    setSecondaryState06B('FLEEING',now);
    setLinkState06B('ARRIVED ✓','#ffd18a');
  }

  if(secondaryState06B==='FLEEING'&&now-secondaryStateStart06B>=PROPAGATION_06B.fleeMs){
    setSecondaryState06B('DISPERSED',now);
  }else if(secondaryState06B==='DISPERSED'&&(primaryState==='RETURNING'||primaryState==='CALM')){
    setSecondaryState06B('RETURNING',now);
    setLinkState06B('RESETTING','#b9d9ff');
  }else if(secondaryState06B==='RETURNING'){
    if(disturbance06B){setSecondaryState06B('ALERT_DELAY',now);}
    else if(now-secondaryStateStart06B>=PROPAGATION_06B.returnMs){setSecondaryState06B('CALM',now);setLinkState06B('IDLE');}
  }

  for(let i=0;i<secondaryBirds06B.length;i++)poseSecondaryBird06B(secondaryBirds06B[i],i,now);
  secondaryBodies06B.instanceMatrix.needsUpdate=true;secondaryLeftWings06B.instanceMatrix.needsUpdate=true;secondaryRightWings06B.instanceMatrix.needsUpdate=true;
}
function livingWorld06BLoop(now){requestAnimationFrame(livingWorld06BLoop);updateLivingWorld06B(now);}
requestAnimationFrame(livingWorld06BLoop);

globalThis.__livingWorld06B={
  marker:LIVING_WORLD_06B_MARKER,
  get secondaryState(){return secondaryState06B;},
  get secondaryResponses(){return secondaryResponses06B;},
  get disturbanceEvents(){return disturbanceEvents06B;},
  get disturbanceTravelMs(){return propagationTravelMs06B;},
  get playerDistanceToSecondary(){return playerToSecondaryDistance06B();},
  directPlayerTrigger:false,
  source:'06A primary flock state transition'
};


// ---- Test 06C: Living World — local disturbance memory ----
const LIVING_WORLD_06C_MARKER='06C_LOCAL_DISTURBANCE_MEMORY';
const MEMORY_06C={
  reedCount:28,
  disturbedMs:2300,
  settlingMs:2800,
  directPlayerTrigger:false
};

const secondaryApi06C=globalThis.__livingWorld06B;
if(!secondaryApi06C||secondaryApi06C.marker!=='06B_WORLD_DISTURBANCE_PROPAGATION')throw new Error('06C requires frozen accepted 06B public world-state API');

// Reconstruct the accepted 06B secondary-flock location from the same spawn frame without
// reaching into frozen 06B private internals.
const memorySpawnYaw06C=Number.isFinite(playerRoot.rotation.y)?playerRoot.rotation.y:0;
const memorySpawnX06C=playerRoot.position.x,memorySpawnZ06C=playerRoot.position.z;
const memoryFwdX06C=Math.sin(memorySpawnYaw06C),memoryFwdZ06C=Math.cos(memorySpawnYaw06C);
const memoryRightX06C=Math.cos(memorySpawnYaw06C),memoryRightZ06C=-Math.sin(memorySpawnYaw06C);
const memorySecondaryX06C=memorySpawnX06C+memoryFwdX06C*15.5+memoryRightX06C*4.5;
const memorySecondaryZ06C=memorySpawnZ06C+memoryFwdZ06C*15.5+memoryRightZ06C*4.5;
const memoryCenterX06C=memorySpawnX06C+memoryFwdX06C*15.7+memoryRightX06C*6.2;
const memoryCenterZ06C=memorySpawnZ06C+memoryFwdZ06C*15.7+memoryRightZ06C*6.2;

// One natural world actor: a persistent reed patch. It is not player-triggered. The accepted
// Flock B takeoff is the only stimulus. The patch then holds and decays its own local state.
const memoryBladeGeo06C=new THREE.PlaneGeometry(.18,1.55,1,3);
memoryBladeGeo06C.translate(0,.775,0);
const memoryBladeMat06C=new THREE.MeshStandardMaterial({
  color:0x8f9a55,
  roughness:.96,
  metalness:0,
  side:THREE.DoubleSide
});
const memoryReeds06C=new THREE.InstancedMesh(memoryBladeGeo06C,memoryBladeMat06C,MEMORY_06C.reedCount);
memoryReeds06C.castShadow=true;
memoryReeds06C.receiveShadow=true;
// Dynamic instance transforms must remain visible through the entire memory cycle on mobile.
memoryReeds06C.frustumCulled=false;
scene.add(memoryReeds06C);

const memoryReedData06C=[];
for(let i=0;i<MEMORY_06C.reedCount;i++){
  const a=i*2.399963229728653;
  const ring=.35+(i%7)*.115;
  const px=Math.cos(a)*ring;
  const pz=Math.sin(a)*ring*.72;
  const scaleY=.76+((i*17)%9)*.035;
  const yaw=(i*.83)%Math.PI;
  memoryReedData06C.push({px,pz,scaleY,yaw,phase:i*.71});
}

let memoryState06C='CALM';
let memoryStateStart06C=performance.now();
let memoryEvents06C=0;
let memoryPrevSecondaryState06C=secondaryApi06C.secondaryState;
let memoryLastTrigger06C=0;

const memoryObj06C=new THREE.Object3D();
const memoryStateEl06C=document.getElementById('worldMemoryState');
const memoryAgeEl06C=document.getElementById('worldMemoryAge');
const memoryResultEl06C=document.getElementById('worldMemoryResult');

function setMemoryState06C(next,now){
  memoryState06C=next;
  memoryStateStart06C=now;
  if(memoryStateEl06C){
    memoryStateEl06C.textContent=next;
    memoryStateEl06C.style.color=next==='CALM'?'#a8f0b5':next==='DISTURBED'?'#ffd18a':'#b9d9ff';
  }
}
function triggerMemory06C(now){
  memoryEvents06C++;
  memoryLastTrigger06C=now;
  setMemoryState06C('DISTURBED',now);
  if(memoryResultEl06C){
    memoryResultEl06C.textContent='MEMORY ACTIVE ✓';
    memoryResultEl06C.style.color='#ffd18a';
  }
}
function memoryEnvelope06C(now,phase){
  const elapsed=now-memoryStateStart06C;
  if(memoryState06C==='DISTURBED'){
    const p=Math.min(1,elapsed/MEMORY_06C.disturbedMs);
    const hold=.34-.055*p;
    const ring=Math.sin(now*.012+phase)*.065;
    return hold+ring;
  }
  if(memoryState06C==='SETTLING'){
    const p=Math.min(1,elapsed/MEMORY_06C.settlingMs);
    const decay=1-p;
    return decay*(.27+.075*Math.sin(now*.010+phase));
  }
  return .018*Math.sin(now*.0018+phase);
}
function updateMemoryReeds06C(now){
  const dx=memoryCenterX06C-memorySecondaryX06C;
  const dz=memoryCenterZ06C-memorySecondaryZ06C;
  const len=Math.max(.0001,Math.hypot(dx,dz));
  const gustX=dx/len,gustZ=dz/len;

  for(let i=0;i<memoryReedData06C.length;i++){
    const b=memoryReedData06C[i];
    const x=memoryCenterX06C+b.px,z=memoryCenterZ06C+b.pz;
    const y=groundHeight(x,z)+.035;
    const mag=memoryEnvelope06C(now,b.phase);
    const variation=.82+((i*13)%7)*.045;
    const lean=mag*variation;
    memoryObj06C.position.set(x,y,z);
    memoryObj06C.rotation.set(gustZ*lean,b.yaw,-gustX*lean);
    memoryObj06C.scale.set(.8,b.scaleY,1);
    memoryObj06C.updateMatrix();
    memoryReeds06C.setMatrixAt(i,memoryObj06C.matrix);
  }
  memoryReeds06C.instanceMatrix.needsUpdate=true;
}
function updateLivingWorld06C(now){
  const secondaryState=secondaryApi06C.secondaryState;

  // The only trigger is the accepted Flock B transition into FLEEING.
  if(secondaryState==='FLEEING'&&memoryPrevSecondaryState06C!=='FLEEING')triggerMemory06C(now);
  memoryPrevSecondaryState06C=secondaryState;

  if(memoryState06C==='DISTURBED'&&now-memoryStateStart06C>=MEMORY_06C.disturbedMs){
    setMemoryState06C('SETTLING',now);
  }else if(memoryState06C==='SETTLING'&&now-memoryStateStart06C>=MEMORY_06C.settlingMs){
    setMemoryState06C('CALM',now);
    if(memoryResultEl06C)memoryResultEl06C.textContent='SETTLED';
  }

  if(memoryAgeEl06C){
    if(!memoryLastTrigger06C)memoryAgeEl06C.textContent='—';
    else memoryAgeEl06C.textContent=((now-memoryLastTrigger06C)/1000).toFixed(1)+' s';
  }

  updateMemoryReeds06C(now);
}
function livingWorld06CLoop(now){
  requestAnimationFrame(livingWorld06CLoop);
  updateLivingWorld06C(now);
}
requestAnimationFrame(livingWorld06CLoop);

globalThis.__livingWorld06C={
  marker:LIVING_WORLD_06C_MARKER,
  get state(){return memoryState06C;},
  get events(){return memoryEvents06C;},
  get ageMs(){return memoryLastTrigger06C?performance.now()-memoryLastTrigger06C:0;},
  disturbedMs:MEMORY_06C.disturbedMs,
  settlingMs:MEMORY_06C.settlingMs,
  directPlayerTrigger:false,
  source:'accepted 06B Flock B transition to FLEEING'
};


// ---- Test 06D: Living World — memory-informed autonomous route choice ----
const LIVING_WORLD_06D_MARKER='06D_MEMORY_INFORMS_ACTOR_BEHAVIOR';
const BEHAVIOR_06D={
  arrivalDelayMs:1800,
  avoidTravelMs:2450,
  calmHoldMs:550,
  directReturnMs:2500,
  detourOffsetM:2.8,
  directPlayerTrigger:false
};

const memoryApi06D=globalThis.__livingWorld06C;
if(!memoryApi06D||memoryApi06D.marker!=='06C_LOCAL_DISTURBANCE_MEMORY')throw new Error('06D requires frozen accepted 06C public world-memory API');

const spawnYaw06D=Number.isFinite(playerRoot.rotation.y)?playerRoot.rotation.y:0;
const spawnX06D=playerRoot.position.x,spawnZ06D=playerRoot.position.z;
const fwdX06D=Math.sin(spawnYaw06D),fwdZ06D=Math.cos(spawnYaw06D);
const rightX06D=Math.cos(spawnYaw06D),rightZ06D=-Math.sin(spawnYaw06D);

// Reconstruct the accepted 06C reed-patch center from the same deterministic spawn frame.
const memoryCenterX06D=spawnX06D+fwdX06D*15.7+rightX06D*6.2;
const memoryCenterZ06D=spawnZ06D+fwdZ06D*15.7+rightZ06D*6.2;
const routeStartX06D=memoryCenterX06D-rightX06D*3.4;
const routeStartZ06D=memoryCenterZ06D-rightZ06D*3.4;
const routeEndX06D=memoryCenterX06D+rightX06D*3.4;
const routeEndZ06D=memoryCenterZ06D+rightZ06D*3.4;
const detourX06D=memoryCenterX06D+fwdX06D*BEHAVIOR_06D.detourOffsetM;
const detourZ06D=memoryCenterZ06D+fwdZ06D*BEHAVIOR_06D.detourOffsetM;

// A tiny stylized hare/forager built from two instanced geometry families: rounded body parts + ears.
// It is a world actor, not a UI marker, and it has no direct player-proximity behavior.
const foragerRoot06D=new THREE.Group();
scene.add(foragerRoot06D);
const foragerBodyGeo06D=new THREE.DodecahedronGeometry(.5,1);
const foragerEarGeo06D=new THREE.ConeGeometry(.115,.55,7);
const foragerBodyMat06D=new THREE.MeshStandardMaterial({color:0x8a6547,roughness:.9,metalness:0});
const foragerEarMat06D=new THREE.MeshStandardMaterial({color:0x76523d,roughness:.92,metalness:0});
const foragerBodies06D=new THREE.InstancedMesh(foragerBodyGeo06D,foragerBodyMat06D,5);
const foragerEars06D=new THREE.InstancedMesh(foragerEarGeo06D,foragerEarMat06D,2);
foragerBodies06D.castShadow=true;foragerEars06D.castShadow=true;
foragerBodies06D.frustumCulled=false;foragerEars06D.frustumCulled=false;
foragerRoot06D.add(foragerBodies06D,foragerEars06D);

const partObj06D=new THREE.Object3D();
function setForagerPart06D(mesh,index,x,y,z,sx,sy,sz,rx=0,ry=0,rz=0){
  partObj06D.position.set(x,y,z);
  partObj06D.scale.set(sx,sy,sz);
  partObj06D.rotation.set(rx,ry,rz);
  partObj06D.updateMatrix();
  mesh.setMatrixAt(index,partObj06D.matrix);
}
setForagerPart06D(foragerBodies06D,0,0,.42,0,.72,.55,1.08);        // body
setForagerPart06D(foragerBodies06D,1,0,.62,.50,.48,.48,.48);       // head
setForagerPart06D(foragerBodies06D,2,-.33,.25,-.20,.32,.34,.38);   // hind leg L
setForagerPart06D(foragerBodies06D,3,.33,.25,-.20,.32,.34,.38);    // hind leg R
setForagerPart06D(foragerBodies06D,4,0,.48,-.60,.25,.25,.25);      // tail
setForagerPart06D(foragerEars06D,0,-.16,1.08,.49,.72,1.0,.72,-.10,0,-.08);
setForagerPart06D(foragerEars06D,1,.16,1.08,.49,.72,1.0,.72,-.10,0,.08);
foragerBodies06D.instanceMatrix.needsUpdate=true;
foragerEars06D.instanceMatrix.needsUpdate=true;

let behaviorState06D='WAITING';
let behaviorStateStart06D=performance.now();
let behaviorEvents06D=0;
let memoryEventSeen06D=memoryApi06D.events;
let routeChoice06D='NONE';
let directReturnEligibleAt06D=0;
let currentX06D=routeStartX06D,currentZ06D=routeStartZ06D;
let lastX06D=currentX06D,lastZ06D=currentZ06D;

const behaviorStateEl06D=document.getElementById('worldBehaviorState');
const routeChoiceEl06D=document.getElementById('worldRouteChoice');
const behaviorResultEl06D=document.getElementById('worldBehaviorResult');

function setBehaviorState06D(next,now){
  behaviorState06D=next;
  behaviorStateStart06D=now;
  if(behaviorStateEl06D){
    behaviorStateEl06D.textContent=next;
    behaviorStateEl06D.style.color=next==='WAITING'?'#d6d6d6':next==='AVOIDING'?'#ffd18a':next==='HOLDING'?'#ffe59a':next==='DIRECT_RETURN'?'#9fe0ff':'#a8f0b5';
  }
}
function setRouteChoice06D(choice,text,color){
  routeChoice06D=choice;
  if(routeChoiceEl06D){routeChoiceEl06D.textContent=text;routeChoiceEl06D.style.color=color;}
}
function bezier2_06D(a,b,c,t){
  const u=1-t;
  return u*u*a+2*u*t*b+t*t*c;
}
function smooth06D(t){return t*t*(3-2*t);}
function startAvoidance06D(now){
  behaviorEvents06D++;
  setBehaviorState06D('AVOIDING',now);
  setRouteChoice06D('MEMORY_DETOUR','DETOUR: MEMORY','#ffd18a');
  if(behaviorResultEl06D){behaviorResultEl06D.textContent='MEMORY CHANGED ROUTE ✓';behaviorResultEl06D.style.color='#ffd18a';}
}
function updateForagerPose06D(now){
  const dx=currentX06D-lastX06D,dz=currentZ06D-lastZ06D;
  const moving=Math.hypot(dx,dz)>.00001;
  let yaw=foragerRoot06D.rotation.y;
  if(moving)yaw=Math.atan2(dx,dz);
  const hop=(behaviorState06D==='AVOIDING'||behaviorState06D==='DIRECT_RETURN')?Math.max(0,Math.sin((now-behaviorStateStart06D)*.011))*0.12:0;
  const y=groundHeight(currentX06D,currentZ06D)+.03+hop;
  foragerRoot06D.position.set(currentX06D,y,currentZ06D);
  foragerRoot06D.rotation.y=yaw;
  lastX06D=currentX06D;lastZ06D=currentZ06D;
}
function updateLivingWorld06D(now){
  const memoryEvents=memoryApi06D.events;

  // A new accepted 06C memory event starts a delayed actor arrival. The actor intentionally
  // does not react to the birds directly; it arrives late and queries the surviving world state.
  if(memoryEvents>memoryEventSeen06D){
    memoryEventSeen06D=memoryEvents;
    currentX06D=routeStartX06D;currentZ06D=routeStartZ06D;
    setBehaviorState06D('ARRIVAL_DELAY',now);
    setRouteChoice06D('PENDING','READING WORLD…','#ffe59a');
    if(behaviorResultEl06D)behaviorResultEl06D.textContent='LATE ACTOR INBOUND';
  }

  if(behaviorState06D==='ARRIVAL_DELAY'&&now-behaviorStateStart06D>=BEHAVIOR_06D.arrivalDelayMs){
    // This is the test: route selection depends on persistent memory at arrival time, not on
    // the original bird event. Under frozen 06C timings this should select the detour.
    if(memoryApi06D.state!=='CALM')startAvoidance06D(now);
    else{
      setBehaviorState06D('DIRECT_RETURN',now);
      setRouteChoice06D('DIRECT','DIRECT: WORLD CLEAR','#9fe0ff');
    }
  }else if(behaviorState06D==='AVOIDING'){
    const p=Math.min(1,(now-behaviorStateStart06D)/BEHAVIOR_06D.avoidTravelMs),e=smooth06D(p);
    currentX06D=bezier2_06D(routeStartX06D,detourX06D,routeEndX06D,e);
    currentZ06D=bezier2_06D(routeStartZ06D,detourZ06D,routeEndZ06D,e);
    if(p>=1){
      currentX06D=routeEndX06D;currentZ06D=routeEndZ06D;
      setBehaviorState06D('HOLDING',now);
      directReturnEligibleAt06D=0;
      setRouteChoice06D('WAIT_FOR_CLEAR','WAITING FOR CLEAR','#ffe59a');
    }
  }else if(behaviorState06D==='HOLDING'){
    if(memoryApi06D.state==='CALM'){
      if(!directReturnEligibleAt06D)directReturnEligibleAt06D=now+BEHAVIOR_06D.calmHoldMs;
      if(now>=directReturnEligibleAt06D){
        setBehaviorState06D('DIRECT_RETURN',now);
        setRouteChoice06D('DIRECT','DIRECT: MEMORY CLEARED','#9fe0ff');
      }
    }else directReturnEligibleAt06D=0;
  }else if(behaviorState06D==='DIRECT_RETURN'){
    const p=Math.min(1,(now-behaviorStateStart06D)/BEHAVIOR_06D.directReturnMs),e=smooth06D(p);
    currentX06D=THREE.MathUtils.lerp(routeEndX06D,routeStartX06D,e);
    currentZ06D=THREE.MathUtils.lerp(routeEndZ06D,routeStartZ06D,e);
    if(p>=1){
      currentX06D=routeStartX06D;currentZ06D=routeStartZ06D;
      setBehaviorState06D('COMPLETE',now);
      setRouteChoice06D('PROVED','DETOUR THEN DIRECT ✓','#a8f0b5');
      if(behaviorResultEl06D){behaviorResultEl06D.textContent='WORLD STATE AFFECTED BEHAVIOR ✓';behaviorResultEl06D.style.color='#a8f0b5';}
    }
  }

  updateForagerPose06D(now);
}
function livingWorld06DLoop(now){
  requestAnimationFrame(livingWorld06DLoop);
  updateLivingWorld06D(now);
}
requestAnimationFrame(livingWorld06DLoop);

globalThis.__livingWorld06D={
  marker:LIVING_WORLD_06D_MARKER,
  get state(){return behaviorState06D;},
  get routeChoice(){return routeChoice06D;},
  get events(){return behaviorEvents06D;},
  directPlayerTrigger:false,
  reads:'06C persistent world-memory state',
  arrivalDelayMs:BEHAVIOR_06D.arrivalDelayMs,
  avoidTravelMs:BEHAVIOR_06D.avoidTravelMs,
  directReturnMs:BEHAVIOR_06D.directReturnMs
};


// ---- Test 06E: Living World — spatially scoped world memory ----
const LIVING_WORLD_06E_MARKER='06E_SPATIALLY_SCOPED_MEMORY';
const SPATIAL_06E={
  arrivalDelayMs:1800,
  travelMs:2450,
  memoryRadiusM:1.8,
  laneOffsetM:3.35,
  directPlayerTrigger:false
};

const memoryApi06E=globalThis.__livingWorld06C;
const behaviorApi06E=globalThis.__livingWorld06D;
if(!memoryApi06E||memoryApi06E.marker!=='06C_LOCAL_DISTURBANCE_MEMORY')throw new Error('06E requires frozen accepted 06C memory API');
if(!behaviorApi06E||behaviorApi06E.marker!=='06D_MEMORY_INFORMS_ACTOR_BEHAVIOR')throw new Error('06E requires frozen accepted 06D behavior API');

const spawnYaw06E=Number.isFinite(playerRoot.rotation.y)?playerRoot.rotation.y:0;
const spawnX06E=playerRoot.position.x,spawnZ06E=playerRoot.position.z;
const fwdX06E=Math.sin(spawnYaw06E),fwdZ06E=Math.cos(spawnYaw06E);
const rightX06E=Math.cos(spawnYaw06E),rightZ06E=-Math.sin(spawnYaw06E);

const memoryCenterX06E=spawnX06E+fwdX06E*15.7+rightX06E*6.2;
const memoryCenterZ06E=spawnZ06E+fwdZ06E*15.7+rightZ06E*6.2;

// Control lane runs parallel to the accepted 06D path but outside the remembered location.
// It sees the same active memory state; only spatial overlap differs.
const controlLaneCenterX06E=memoryCenterX06E-fwdX06E*SPATIAL_06E.laneOffsetM;
const controlLaneCenterZ06E=memoryCenterZ06E-fwdZ06E*SPATIAL_06E.laneOffsetM;
const controlStartX06E=controlLaneCenterX06E-rightX06E*3.4;
const controlStartZ06E=controlLaneCenterZ06E-rightZ06E*3.4;
const controlEndX06E=controlLaneCenterX06E+rightX06E*3.4;
const controlEndZ06E=controlLaneCenterZ06E+rightZ06E*3.4;

function pointSegmentDistance06E(px,pz,ax,az,bx,bz){
  const abx=bx-ax,abz=bz-az;
  const denom=abx*abx+abz*abz;
  const t=denom>1e-9?THREE.MathUtils.clamp(((px-ax)*abx+(pz-az)*abz)/denom,0,1):0;
  const cx=ax+abx*t,cz=az+abz*t;
  return Math.hypot(px-cx,pz-cz);
}
const controlPathDistanceToMemory06E=pointSegmentDistance06E(
  memoryCenterX06E,memoryCenterZ06E,
  controlStartX06E,controlStartZ06E,
  controlEndX06E,controlEndZ06E
);

// A second stylized forager acts as the spatial control. Gray material distinguishes it
// from the accepted brown 06D forager without changing the accepted actor.
const controlRoot06E=new THREE.Group();
scene.add(controlRoot06E);
const controlBodyGeo06E=new THREE.DodecahedronGeometry(.5,1);
const controlEarGeo06E=new THREE.ConeGeometry(.115,.55,7);
const controlBodyMat06E=new THREE.MeshStandardMaterial({color:0x7c8385,roughness:.91,metalness:0});
const controlEarMat06E=new THREE.MeshStandardMaterial({color:0x666d70,roughness:.93,metalness:0});
const controlBodies06E=new THREE.InstancedMesh(controlBodyGeo06E,controlBodyMat06E,5);
const controlEars06E=new THREE.InstancedMesh(controlEarGeo06E,controlEarMat06E,2);
controlBodies06E.castShadow=true;controlEars06E.castShadow=true;
controlBodies06E.frustumCulled=false;controlEars06E.frustumCulled=false;
controlRoot06E.add(controlBodies06E,controlEars06E);

const controlPart06E=new THREE.Object3D();
function setControlPart06E(mesh,index,x,y,z,sx,sy,sz,rx=0,ry=0,rz=0){
  controlPart06E.position.set(x,y,z);
  controlPart06E.scale.set(sx,sy,sz);
  controlPart06E.rotation.set(rx,ry,rz);
  controlPart06E.updateMatrix();
  mesh.setMatrixAt(index,controlPart06E.matrix);
}
setControlPart06E(controlBodies06E,0,0,.42,0,.72,.55,1.08);
setControlPart06E(controlBodies06E,1,0,.62,.50,.48,.48,.48);
setControlPart06E(controlBodies06E,2,-.33,.25,-.20,.32,.34,.38);
setControlPart06E(controlBodies06E,3,.33,.25,-.20,.32,.34,.38);
setControlPart06E(controlBodies06E,4,0,.48,-.60,.25,.25,.25);
setControlPart06E(controlEars06E,0,-.16,1.08,.49,.72,1,.72,-.10,0,-.08);
setControlPart06E(controlEars06E,1,.16,1.08,.49,.72,1,.72,-.10,0,.08);
controlBodies06E.instanceMatrix.needsUpdate=true;
controlEars06E.instanceMatrix.needsUpdate=true;

let spatialState06E='WAITING';
let spatialStateStart06E=performance.now();
let spatialEvents06E=0;
let memoryEventSeen06E=memoryApi06E.events;
let spatialOverlap06E=false;
let spatialChoice06E='NONE';
let controlX06E=controlStartX06E,controlZ06E=controlStartZ06E;
let controlPrevX06E=controlX06E,controlPrevZ06E=controlZ06E;

const spatialStateEl06E=document.getElementById('worldSpatialState');
const spatialOverlapEl06E=document.getElementById('worldSpatialOverlap');
const spatialChoiceEl06E=document.getElementById('worldSpatialChoice');
const spatialResultEl06E=document.getElementById('worldSpatialResult');

function setSpatialState06E(next,now){
  spatialState06E=next;spatialStateStart06E=now;
  if(spatialStateEl06E){
    spatialStateEl06E.textContent=next;
    spatialStateEl06E.style.color=next==='WAITING'?'#d6d6d6':next==='ARRIVAL_DELAY'?'#ffe59a':next==='DIRECT'?'#9fe0ff':next==='AVOIDING'?'#ffd18a':'#a8f0b5';
  }
}
function setSpatialChoice06E(choice,text,color){
  spatialChoice06E=choice;
  if(spatialChoiceEl06E){spatialChoiceEl06E.textContent=text;spatialChoiceEl06E.style.color=color;}
}
function smoothSpatial06E(t){return t*t*(3-2*t);}
function updateControlPose06E(now){
  const dx=controlX06E-controlPrevX06E,dz=controlZ06E-controlPrevZ06E;
  if(Math.hypot(dx,dz)>.00001)controlRoot06E.rotation.y=Math.atan2(dx,dz);
  const moving=spatialState06E==='DIRECT'||spatialState06E==='AVOIDING';
  const hop=moving?Math.max(0,Math.sin((now-spatialStateStart06E)*.011))*0.11:0;
  controlRoot06E.position.set(controlX06E,groundHeight(controlX06E,controlZ06E)+.03+hop,controlZ06E);
  controlPrevX06E=controlX06E;controlPrevZ06E=controlZ06E;
}
function updateLivingWorld06E(now){
  const memoryEvents=memoryApi06E.events;

  if(memoryEvents>memoryEventSeen06E){
    memoryEventSeen06E=memoryEvents;
    spatialEvents06E++;
    controlX06E=controlStartX06E;controlZ06E=controlStartZ06E;
    controlPrevX06E=controlX06E;controlPrevZ06E=controlZ06E;
    setSpatialState06E('ARRIVAL_DELAY',now);
    setSpatialChoice06E('PENDING','SAME MEMORY · CHECKING SPACE','#ffe59a');
    if(spatialResultEl06E)spatialResultEl06E.textContent='CONTROL ACTOR INBOUND';
  }

  if(spatialState06E==='ARRIVAL_DELAY'&&now-spatialStateStart06E>=SPATIAL_06E.arrivalDelayMs){
    const memoryActive=memoryApi06E.state!=='CALM';
    spatialOverlap06E=controlPathDistanceToMemory06E<=SPATIAL_06E.memoryRadiusM;
    if(spatialOverlapEl06E){
      spatialOverlapEl06E.textContent=spatialOverlap06E?'YES':'NO';
      spatialOverlapEl06E.style.color=spatialOverlap06E?'#ffd18a':'#a8f0b5';
    }

    // Same active world memory, but no path overlap -> no behavioral effect.
    if(memoryActive&&spatialOverlap06E){
      setSpatialState06E('AVOIDING',now);
      setSpatialChoice06E('DETOUR','DETOUR: LOCAL MEMORY','#ffd18a');
    }else{
      setSpatialState06E('DIRECT',now);
      setSpatialChoice06E('DIRECT','DIRECT: OUTSIDE MEMORY','#9fe0ff');
      if(spatialResultEl06E){
        spatialResultEl06E.textContent=memoryActive?'MEMORY ACTIVE · ACTOR UNAFFECTED ✓':'WORLD CLEAR · DIRECT';
        spatialResultEl06E.style.color='#a8f0b5';
      }
    }
  }else if(spatialState06E==='DIRECT'){
    const p=Math.min(1,(now-spatialStateStart06E)/SPATIAL_06E.travelMs),e=smoothSpatial06E(p);
    controlX06E=THREE.MathUtils.lerp(controlStartX06E,controlEndX06E,e);
    controlZ06E=THREE.MathUtils.lerp(controlStartZ06E,controlEndZ06E,e);
    if(p>=1){
      controlX06E=controlEndX06E;controlZ06E=controlEndZ06E;
      setSpatialState06E('COMPLETE',now);
      setSpatialChoice06E('PROVED','LOCAL SCOPE ✓','#a8f0b5');
      if(spatialResultEl06E){spatialResultEl06E.textContent='SAME MEMORY · DIFFERENT LOCATION · NO EFFECT ✓';spatialResultEl06E.style.color='#a8f0b5';}
    }
  }else if(spatialState06E==='AVOIDING'){
    // Defensive path: should not occur for this control lane. If it does, verification remains
    // mechanically honest and the human review will clearly show the unexpected detour.
    const p=Math.min(1,(now-spatialStateStart06E)/SPATIAL_06E.travelMs),e=smoothSpatial06E(p);
    const midX=(controlStartX06E+controlEndX06E)*.5-fwdX06E*2.0;
    const midZ=(controlStartZ06E+controlEndZ06E)*.5-fwdZ06E*2.0;
    const u=1-e;
    controlX06E=u*u*controlStartX06E+2*u*e*midX+e*e*controlEndX06E;
    controlZ06E=u*u*controlStartZ06E+2*u*e*midZ+e*e*controlEndZ06E;
    if(p>=1)setSpatialState06E('COMPLETE',now);
  }

  updateControlPose06E(now);
}
function livingWorld06ELoop(now){
  requestAnimationFrame(livingWorld06ELoop);
  updateLivingWorld06E(now);
}
requestAnimationFrame(livingWorld06ELoop);

if(spatialOverlapEl06E)spatialOverlapEl06E.textContent='PENDING';

globalThis.__livingWorld06E={
  marker:LIVING_WORLD_06E_MARKER,
  get state(){return spatialState06E;},
  get overlap(){return spatialOverlap06E;},
  get choice(){return spatialChoice06E;},
  get events(){return spatialEvents06E;},
  directPlayerTrigger:false,
  memoryRadiusM:SPATIAL_06E.memoryRadiusM,
  controlPathDistanceToMemoryM:controlPathDistanceToMemory06E,
  expectedOverlap:false,
  reads:'same 06C memory state with spatial path query'
};


// ---- Test 06F: Living World — deterministic stimulus priority / arbitration ----
const LIVING_WORLD_06F_MARKER='06F_STIMULUS_PRIORITY_ARBITRATION';
const ARB_06F={
  arrivalDelayMs:1800,
  foodBecomesValidAfterMs:120,
  arbitrationDelayMs:180,
  hazardPriority:100,
  foodPriority:40,
  escapeTravelMs:2550,
  escapeOffsetM:3.2,
  directPlayerTrigger:false
};

const memoryApi06F=globalThis.__livingWorld06C;
const spatialApi06F=globalThis.__livingWorld06E;
if(!memoryApi06F||memoryApi06F.marker!=='06C_LOCAL_DISTURBANCE_MEMORY')throw new Error('06F requires frozen accepted 06C memory API');
if(!spatialApi06F||spatialApi06F.marker!=='06E_SPATIALLY_SCOPED_MEMORY')throw new Error('06F requires frozen accepted 06E spatial-memory API');

const spawnYaw06F=Number.isFinite(playerRoot.rotation.y)?playerRoot.rotation.y:0;
const spawnX06F=playerRoot.position.x,spawnZ06F=playerRoot.position.z;
const fwdX06F=Math.sin(spawnYaw06F),fwdZ06F=Math.cos(spawnYaw06F);
const rightX06F=Math.cos(spawnYaw06F),rightZ06F=-Math.sin(spawnYaw06F);

const memoryCenterX06F=spawnX06F+fwdX06F*15.7+rightX06F*6.2;
const memoryCenterZ06F=spawnZ06F+fwdZ06F*15.7+rightZ06F*6.2;

// Arbitration actor starts on a path that would normally cross the remembered location toward food.
const arbStartX06F=memoryCenterX06F-rightX06F*3.9-fwdX06F*.65;
const arbStartZ06F=memoryCenterZ06F-rightZ06F*3.9-fwdZ06F*.65;
const foodX06F=memoryCenterX06F+rightX06F*3.7;
const foodZ06F=memoryCenterZ06F+rightZ06F*3.7;
const escapeX06F=arbStartX06F-fwdX06F*ARB_06F.escapeOffsetM-rightX06F*.8;
const escapeZ06F=arbStartZ06F-fwdZ06F*ARB_06F.escapeOffsetM-rightZ06F*.8;

// Amber forager = the arbitration subject.
const arbRoot06F=new THREE.Group();
scene.add(arbRoot06F);
const arbBodyGeo06F=new THREE.DodecahedronGeometry(.5,1);
const arbEarGeo06F=new THREE.ConeGeometry(.115,.55,7);
const arbBodyMat06F=new THREE.MeshStandardMaterial({color:0xb97c37,roughness:.9,metalness:0});
const arbEarMat06F=new THREE.MeshStandardMaterial({color:0x9b642f,roughness:.92,metalness:0});
const arbBodies06F=new THREE.InstancedMesh(arbBodyGeo06F,arbBodyMat06F,5);
const arbEars06F=new THREE.InstancedMesh(arbEarGeo06F,arbEarMat06F,2);
arbBodies06F.castShadow=true;arbEars06F.castShadow=true;
arbBodies06F.frustumCulled=false;arbEars06F.frustumCulled=false;
arbRoot06F.add(arbBodies06F,arbEars06F);

const arbPart06F=new THREE.Object3D();
function setArbPart06F(mesh,index,x,y,z,sx,sy,sz,rx=0,ry=0,rz=0){
  arbPart06F.position.set(x,y,z);arbPart06F.scale.set(sx,sy,sz);arbPart06F.rotation.set(rx,ry,rz);arbPart06F.updateMatrix();mesh.setMatrixAt(index,arbPart06F.matrix);
}
setArbPart06F(arbBodies06F,0,0,.42,0,.72,.55,1.08);
setArbPart06F(arbBodies06F,1,0,.62,.50,.48,.48,.48);
setArbPart06F(arbBodies06F,2,-.33,.25,-.20,.32,.34,.38);
setArbPart06F(arbBodies06F,3,.33,.25,-.20,.32,.34,.38);
setArbPart06F(arbBodies06F,4,0,.48,-.60,.25,.25,.25);
setArbPart06F(arbEars06F,0,-.16,1.08,.49,.72,1,.72,-.10,0,-.08);
setArbPart06F(arbEars06F,1,.16,1.08,.49,.72,1,.72,-.10,0,.08);
arbBodies06F.instanceMatrix.needsUpdate=true;arbEars06F.instanceMatrix.needsUpdate=true;

// Small visible food target beyond the remembered patch.
const foodGeo06F=new THREE.SphereGeometry(.13,7,5);
const foodMat06F=new THREE.MeshStandardMaterial({color:0x6e9d46,roughness:.86,metalness:0});
const foodMesh06F=new THREE.InstancedMesh(foodGeo06F,foodMat06F,7);
foodMesh06F.frustumCulled=false;
const foodPart06F=new THREE.Object3D();
for(let i=0;i<7;i++){
  const a=i*2.399963229728653,r=.12+(i%3)*.09;
  const x=foodX06F+Math.cos(a)*r,z=foodZ06F+Math.sin(a)*r;
  foodPart06F.position.set(x,groundHeight(x,z)+.12+(i%2)*.04,z);
  foodPart06F.scale.set(1,1,1);
  foodPart06F.updateMatrix();
  foodMesh06F.setMatrixAt(i,foodPart06F.matrix);
}
foodMesh06F.instanceMatrix.needsUpdate=true;
scene.add(foodMesh06F);

let arbState06F='WAITING';
let arbStateStart06F=performance.now();
let arbMemoryEventSeen06F=memoryApi06F.events;
let arbEvents06F=0;
let arbChoice06F='NONE';
let arbLastStimulus06F='NONE';
let arbHazardValid06F=false;
let arbFoodValid06F=false;
let arbFoodValidAt06F=0;
let arbDecisionAt06F=0;
let arbX06F=arbStartX06F,arbZ06F=arbStartZ06F;
let arbPrevX06F=arbX06F,arbPrevZ06F=arbZ06F;

const arbStateEl06F=document.getElementById('worldArbState');
const arbCandidatesEl06F=document.getElementById('worldArbCandidates');
const arbLastEl06F=document.getElementById('worldArbLast');
const arbWinnerEl06F=document.getElementById('worldArbWinner');
const arbResultEl06F=document.getElementById('worldArbResult');

function setArbState06F(next,now){
  arbState06F=next;arbStateStart06F=now;
  if(arbStateEl06F){
    arbStateEl06F.textContent=next;
    arbStateEl06F.style.color=next==='WAITING'?'#d6d6d6':next==='ARRIVAL_DELAY'?'#ffe59a':next==='ARBITRATING'?'#ffe59a':next==='ESCAPING'?'#ffd18a':'#a8f0b5';
  }
}
function setArbWinner06F(choice,text,color){
  arbChoice06F=choice;
  if(arbWinnerEl06F){arbWinnerEl06F.textContent=text;arbWinnerEl06F.style.color=color;}
}
function smoothArb06F(t){return t*t*(3-2*t);}
function updateArbPose06F(now){
  const dx=arbX06F-arbPrevX06F,dz=arbZ06F-arbPrevZ06F;
  if(Math.hypot(dx,dz)>.00001)arbRoot06F.rotation.y=Math.atan2(dx,dz);
  const moving=arbState06F==='ESCAPING';
  const hop=moving?Math.max(0,Math.sin((now-arbStateStart06F)*.012))*0.115:0;
  arbRoot06F.position.set(arbX06F,groundHeight(arbX06F,arbZ06F)+.03+hop,arbZ06F);
  arbPrevX06F=arbX06F;arbPrevZ06F=arbZ06F;
}
function beginArbitration06F(now){
  arbEvents06F++;
  arbX06F=arbStartX06F;arbZ06F=arbStartZ06F;arbPrevX06F=arbX06F;arbPrevZ06F=arbZ06F;
  arbHazardValid06F=false;arbFoodValid06F=false;
  arbLastStimulus06F='NONE';
  arbFoodValidAt06F=0;arbDecisionAt06F=0;
  setArbState06F('ARRIVAL_DELAY',now);
  setArbWinner06F('PENDING','PENDING','#ffe59a');
  if(arbCandidatesEl06F)arbCandidatesEl06F.textContent='WAITING';
  if(arbLastEl06F)arbLastEl06F.textContent='NONE';
  if(arbResultEl06F)arbResultEl06F.textContent='ACTOR INBOUND';
}
function chooseHighestPriority06F(now){
  const candidates=[];
  if(arbHazardValid06F)candidates.push({id:'HAZARD',priority:ARB_06F.hazardPriority});
  if(arbFoodValid06F)candidates.push({id:'FOOD',priority:ARB_06F.foodPriority});
  candidates.sort((a,b)=>b.priority-a.priority||a.id.localeCompare(b.id));
  const winner=candidates[0]?.id||'NONE';
  if(arbCandidatesEl06F)arbCandidatesEl06F.textContent=`HAZARD ${ARB_06F.hazardPriority} · FOOD ${ARB_06F.foodPriority}`;

  if(winner==='HAZARD'){
    setArbWinner06F('HAZARD','HAZARD 100','#ffd18a');
    setArbState06F('ESCAPING',now);
    if(arbResultEl06F){arbResultEl06F.textContent='NEWER FOOD LOST TO HIGHER PRIORITY ✓';arbResultEl06F.style.color='#a8f0b5';}
  }else if(winner==='FOOD'){
    setArbWinner06F('FOOD','FOOD 40','#9fe0ff');
    setArbState06F('COMPLETE',now);
    if(arbResultEl06F){arbResultEl06F.textContent='FOOD WON';arbResultEl06F.style.color='#9fe0ff';}
  }else{
    setArbWinner06F('NONE','NONE','#d6d6d6');
    setArbState06F('COMPLETE',now);
  }
}
function updateLivingWorld06F(now){
  const memoryEvents=memoryApi06F.events;

  if(memoryEvents>arbMemoryEventSeen06F){
    arbMemoryEventSeen06F=memoryEvents;
    beginArbitration06F(now);
  }

  if(arbState06F==='ARRIVAL_DELAY'&&now-arbStateStart06F>=ARB_06F.arrivalDelayMs){
    // Hazard is established first from persistent local memory.
    arbHazardValid06F=memoryApi06F.state!=='CALM';
    if(arbHazardValid06F){
      arbLastStimulus06F='HAZARD';
      if(arbLastEl06F)arbLastEl06F.textContent='HAZARD';
    }
    arbFoodValidAt06F=now+ARB_06F.foodBecomesValidAfterMs;
    arbDecisionAt06F=now+ARB_06F.arbitrationDelayMs;
    setArbState06F('ARBITRATING',now);
  }else if(arbState06F==='ARBITRATING'){
    // Food intentionally becomes valid later. A last-event system would therefore pick FOOD.
    if(!arbFoodValid06F&&now>=arbFoodValidAt06F){
      arbFoodValid06F=true;
      arbLastStimulus06F='FOOD';
      if(arbLastEl06F){arbLastEl06F.textContent='FOOD (NEWER)';arbLastEl06F.style.color='#9fe0ff';}
    }
    if(now>=arbDecisionAt06F)chooseHighestPriority06F(now);
  }else if(arbState06F==='ESCAPING'){
    const p=Math.min(1,(now-arbStateStart06F)/ARB_06F.escapeTravelMs),e=smoothArb06F(p);
    // Escape away from the remembered location instead of taking the direct food line.
    arbX06F=THREE.MathUtils.lerp(arbStartX06F,escapeX06F,e);
    arbZ06F=THREE.MathUtils.lerp(arbStartZ06F,escapeZ06F,e);
    if(p>=1){
      arbX06F=escapeX06F;arbZ06F=escapeZ06F;
      setArbState06F('COMPLETE',now);
      setArbWinner06F('PROVED','HAZARD WON ✓','#a8f0b5');
      if(arbResultEl06F){arbResultEl06F.textContent='PRIORITY > RECENCY ✓';arbResultEl06F.style.color='#a8f0b5';}
    }
  }

  updateArbPose06F(now);
}
function livingWorld06FLoop(now){
  requestAnimationFrame(livingWorld06FLoop);
  updateLivingWorld06F(now);
}
requestAnimationFrame(livingWorld06FLoop);

globalThis.__livingWorld06F={
  marker:LIVING_WORLD_06F_MARKER,
  get state(){return arbState06F;},
  get winner(){return arbChoice06F;},
  get lastStimulus(){return arbLastStimulus06F;},
  get events(){return arbEvents06F;},
  priorities:{hazard:ARB_06F.hazardPriority,food:ARB_06F.foodPriority},
  foodBecomesValidAfterMs:ARB_06F.foodBecomesValidAfterMs,
  arbitrationDelayMs:ARB_06F.arbitrationDelayMs,
  directPlayerTrigger:false,
  rule:'highest priority wins; event recency is not decision authority'
};
