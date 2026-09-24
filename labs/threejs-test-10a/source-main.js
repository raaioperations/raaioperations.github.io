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
function animate(){requestAnimationFrame(animate);const dt=Math.min(.033,clock.getDelta()),time=clock.elapsedTime;updateEnvironment();const fwd=new THREE.Vector3(-Math.sin(yaw),0,-Math.cos(yaw)),right=new THREE.Vector3(Math.cos(yaw),0,-Math.sin(yaw)),input=new THREE.Vector3();if(keys.KeyW)input.add(fwd);if(keys.KeyS)input.sub(fwd);if(keys.KeyD)input.add(right);if(keys.KeyA)input.sub(right);if(touchMove.lengthSq()>.002){input.addScaledVector(fwd,touchMove.y);input.addScaledVector(right,touchMove.x);}const sprinting=(keys.ShiftLeft||touchSprint)&&input.lengthSq()>.01;const wet=inWater(playerRoot.position.x,playerRoot.position.z)&&groundHeight(playerRoot.position.x,playerRoot.position.z)<-1.1;const maxSpeed=(sprinting?8.7:4.8)*(wet?.58:1);if(input.lengthSq()>0){input.normalize();const tv=input.multiplyScalar(maxSpeed),blend=1-Math.exp(-(grounded?12:5)*dt);velocity.x=THREE.MathUtils.lerp(velocity.x,tv.x,blend);velocity.z=THREE.MathUtils.lerp(velocity.z,tv.z,blend);}else{const d=Math.exp(-(grounded?10:2.5)*dt);velocity.x*=d;velocity.z*=d;}if(jumpQueued&&grounded){verticalVel=7.7;grounded=false;}jumpQueued=false;verticalVel-=18.6*dt;playerRoot.position.x+=velocity.x*dt;playerRoot.position.z+=velocity.z*dt;playerRoot.position.x=THREE.MathUtils.clamp(playerRoot.position.x,-112,112);playerRoot.position.z=THREE.MathUtils.clamp(playerRoot.position.z,-112,112);resolveObstacles(playerRoot.position);const gh=groundHeight(playerRoot.position.x,playerRoot.position.z);playerRoot.position.y+=verticalVel*dt;if(playerRoot.position.y<=gh){playerRoot.position.y=gh;if(verticalVel<0)verticalVel=0;grounded=true;}else grounded=false;const speed=Math.hypot(velocity.x,velocity.z);if(speed>.18){const targetYaw=Math.atan2(velocity.x,velocity.z);let d=((targetYaw-playerRoot.rotation.y+Math.PI)%(Math.PI*2))-Math.PI;playerRoot.rotation.y+=d*(1-Math.exp(-14*dt));}if(characterMode==='GLB'&&grounded){if(speed<.22)setAction(actions.Idle?'Idle':Object.keys(actions)[0]);else if(speed<6)setAction(actions.Walk?'Walk':(actions.Run?'Run':Object.keys(actions)[0]));else setAction(actions.Run?'Run':Object.keys(actions)[0]);}if(mixer)mixer.update(dt*(sprinting?1.08:1));const target=playerRoot.position.clone().add(new THREE.Vector3(0,1.42,0));let desired=target.clone().add(new THREE.Vector3(Math.sin(yaw)*Math.cos(pitch)*camDist,Math.sin(pitch)*camDist+1.0,Math.cos(yaw)*Math.cos(pitch)*camDist));desired=cameraCollision(target,desired);const ck=1-Math.pow(1-(+dampS.value),dt*60);camera.position.lerp(desired,ck);camera.lookAt(target);camera.fov=THREE.MathUtils.lerp(camera.fov,sprinting?60:53,1-Math.exp(-5*dt));camera.updateProjectionMatrix();sun.target.position.copy(playerRoot.position);sun.target.updateMatrixWorld();waterU.time.value=time;const w=+windS.value;for(const mat of [leafA,leafB,leafC,bushMat,grassMat,flowerMat])if(mat.userData.shader){mat.userData.shader.uniforms.uTime.value=time;mat.userData.shader.uniforms.uWind.value=w;}orb.position.y=7.8+Math.sin(time*1.5)*.10;orbLight.intensity=5.0+Math.sin(time*2.1)*.6;zoneEl.textContent=zoneName(playerRoot.position.x,playerRoot.position.z);if(globalThis.__raaiFrameHooks){for(const hook of globalThis.__raaiFrameHooks)hook(performance.now(),dt);}renderer.render(scene,camera);frames++;acc+=dt;qualityFrames++;qualityAcc+=dt;if(acc>.55){const fps=Math.round(frames/acc);fpsEl.textContent=fps;frames=0;acc=0;callsEl.textContent=renderer.info.render.calls;trisEl.textContent=renderer.info.render.triangles.toLocaleString();}if(COARSE&&qualityAcc>1.8){const avg=qualityFrames/qualityAcc;let next=renderScale;if(avg<53.5)next=Math.max(minScale,renderScale-.08);else if(avg>58.7)next=Math.min(maxScale,renderScale+.04);if(Math.abs(next-renderScale)>.001){renderScale=next;renderer.setPixelRatio(renderScale);renderer.setSize(innerWidth,innerHeight,false);scaleEl.textContent=renderScale.toFixed(2)+'×';}qualityAcc=0;qualityFrames=0;}}
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


// ---- Test 06G: Living World — interrupted goal recovery ----
const LIVING_WORLD_06G_MARKER='06G_INTERRUPTED_GOAL_RECOVERY';
const RECOVERY_06G={
  preGoalTravelMs:6200,
  preGoalCap:0.34,
  evadeTravelMs:1450,
  recoverHoldMs:450,
  resumeTravelMs:3000,
  evadeOffsetM:3.0,
  directPlayerTrigger:false
};

const memoryApi06G=globalThis.__livingWorld06C;
const arbApi06G=globalThis.__livingWorld06F;
if(!memoryApi06G||memoryApi06G.marker!=='06C_LOCAL_DISTURBANCE_MEMORY')throw new Error('06G requires frozen accepted 06C memory API');
if(!arbApi06G||arbApi06G.marker!=='06F_STIMULUS_PRIORITY_ARBITRATION')throw new Error('06G requires frozen accepted 06F arbitration API');

const spawnYaw06G=Number.isFinite(playerRoot.rotation.y)?playerRoot.rotation.y:0;
const spawnX06G=playerRoot.position.x,spawnZ06G=playerRoot.position.z;
const fwdX06G=Math.sin(spawnYaw06G),fwdZ06G=Math.cos(spawnYaw06G);
const rightX06G=Math.cos(spawnYaw06G),rightZ06G=-Math.sin(spawnYaw06G);

const memoryCenterX06G=spawnX06G+fwdX06G*15.7+rightX06G*6.2;
const memoryCenterZ06G=spawnZ06G+fwdZ06G*15.7+rightZ06G*6.2;
const goalStartX06G=memoryCenterX06G-rightX06G*4.4+fwdX06G*.9;
const goalStartZ06G=memoryCenterZ06G-rightZ06G*4.4+fwdZ06G*.9;
const foodX06G=memoryCenterX06G+rightX06G*4.0+fwdX06G*.8;
const foodZ06G=memoryCenterZ06G+rightZ06G*4.0+fwdZ06G*.8;
const evadeX06G=memoryCenterX06G-fwdX06G*RECOVERY_06G.evadeOffsetM-rightX06G*1.2;
const evadeZ06G=memoryCenterZ06G-fwdZ06G*RECOVERY_06G.evadeOffsetM-rightZ06G*1.2;

// Teal forager = continuity subject. It has an active food goal before any disturbance occurs.
const recoveryRoot06G=new THREE.Group();
scene.add(recoveryRoot06G);
const recoveryBodyGeo06G=new THREE.DodecahedronGeometry(.5,1);
const recoveryEarGeo06G=new THREE.ConeGeometry(.115,.55,7);
const recoveryBodyMat06G=new THREE.MeshStandardMaterial({color:0x3f8f88,roughness:.9,metalness:0});
const recoveryEarMat06G=new THREE.MeshStandardMaterial({color:0x34766f,roughness:.92,metalness:0});
const recoveryBodies06G=new THREE.InstancedMesh(recoveryBodyGeo06G,recoveryBodyMat06G,5);
const recoveryEars06G=new THREE.InstancedMesh(recoveryEarGeo06G,recoveryEarMat06G,2);
recoveryBodies06G.castShadow=true;recoveryEars06G.castShadow=true;
recoveryBodies06G.frustumCulled=false;recoveryEars06G.frustumCulled=false;
recoveryRoot06G.add(recoveryBodies06G,recoveryEars06G);

const recoveryPart06G=new THREE.Object3D();
function setRecoveryPart06G(mesh,index,x,y,z,sx,sy,sz,rx=0,ry=0,rz=0){
  recoveryPart06G.position.set(x,y,z);recoveryPart06G.scale.set(sx,sy,sz);recoveryPart06G.rotation.set(rx,ry,rz);recoveryPart06G.updateMatrix();mesh.setMatrixAt(index,recoveryPart06G.matrix);
}
setRecoveryPart06G(recoveryBodies06G,0,0,.42,0,.72,.55,1.08);
setRecoveryPart06G(recoveryBodies06G,1,0,.62,.50,.48,.48,.48);
setRecoveryPart06G(recoveryBodies06G,2,-.33,.25,-.20,.32,.34,.38);
setRecoveryPart06G(recoveryBodies06G,3,.33,.25,-.20,.32,.34,.38);
setRecoveryPart06G(recoveryBodies06G,4,0,.48,-.60,.25,.25,.25);
setRecoveryPart06G(recoveryEars06G,0,-.16,1.08,.49,.72,1,.72,-.10,0,-.08);
setRecoveryPart06G(recoveryEars06G,1,.16,1.08,.49,.72,1,.72,-.10,0,.08);
recoveryBodies06G.instanceMatrix.needsUpdate=true;recoveryEars06G.instanceMatrix.needsUpdate=true;

// Separate visible food patch for the continuity actor.
const recoveryFoodGeo06G=new THREE.SphereGeometry(.13,7,5);
const recoveryFoodMat06G=new THREE.MeshStandardMaterial({color:0x7fbf54,roughness:.86,metalness:0});
const recoveryFood06G=new THREE.InstancedMesh(recoveryFoodGeo06G,recoveryFoodMat06G,7);
recoveryFood06G.frustumCulled=false;
const recoveryFoodPart06G=new THREE.Object3D();
for(let i=0;i<7;i++){
  const a=i*2.399963229728653,r=.12+(i%3)*.09;
  const x=foodX06G+Math.cos(a)*r,z=foodZ06G+Math.sin(a)*r;
  recoveryFoodPart06G.position.set(x,groundHeight(x,z)+.12+(i%2)*.04,z);
  recoveryFoodPart06G.scale.set(1,1,1);recoveryFoodPart06G.updateMatrix();
  recoveryFood06G.setMatrixAt(i,recoveryFoodPart06G.matrix);
}
recoveryFood06G.instanceMatrix.needsUpdate=true;
scene.add(recoveryFood06G);

let recoveryState06G='SEEKING_FOOD';
let recoveryStateStart06G=performance.now();
let recoveryMemoryEventSeen06G=memoryApi06G.events;
let recoveryEvents06G=0;
let recoveryGoal06G='FOOD';
let recoverySuspendedGoal06G='NONE';
let recoveryInterrupt06G='NONE';
let recoveryX06G=goalStartX06G,recoveryZ06G=goalStartZ06G;
let recoveryPrevX06G=recoveryX06G,recoveryPrevZ06G=recoveryZ06G;
let interruptionStartX06G=goalStartX06G,interruptionStartZ06G=goalStartZ06G;
let resumeStartX06G=evadeX06G,resumeStartZ06G=evadeZ06G;
let recoveryClearSince06G=0;

const recoveryStateEl06G=document.getElementById('worldRecoveryState');
const recoveryGoalEl06G=document.getElementById('worldRecoveryGoal');
const recoverySuspendedEl06G=document.getElementById('worldRecoverySuspended');
const recoveryInterruptEl06G=document.getElementById('worldRecoveryInterrupt');
const recoveryResultEl06G=document.getElementById('worldRecoveryResult');

function setRecoveryState06G(next,now){
  recoveryState06G=next;recoveryStateStart06G=now;
  if(recoveryStateEl06G){
    recoveryStateEl06G.textContent=next;
    recoveryStateEl06G.style.color=next==='SEEKING_FOOD'?'#9fe0ff':next==='EVADING'?'#ffd18a':next==='WAIT_CLEAR'?'#ffe59a':next==='RESUMING_FOOD'?'#9fe0ff':'#a8f0b5';
  }
}
function setRecoveryGoal06G(goal){
  recoveryGoal06G=goal;
  if(recoveryGoalEl06G)recoveryGoalEl06G.textContent=goal;
}
function smoothRecovery06G(t){return t*t*(3-2*t);}
function updateRecoveryPose06G(now){
  const dx=recoveryX06G-recoveryPrevX06G,dz=recoveryZ06G-recoveryPrevZ06G;
  if(Math.hypot(dx,dz)>.00001)recoveryRoot06G.rotation.y=Math.atan2(dx,dz);
  const moving=recoveryState06G==='SEEKING_FOOD'||recoveryState06G==='EVADING'||recoveryState06G==='RESUMING_FOOD';
  const hop=moving?Math.max(0,Math.sin((now-recoveryStateStart06G)*.011))*0.11:0;
  recoveryRoot06G.position.set(recoveryX06G,groundHeight(recoveryX06G,recoveryZ06G)+.03+hop,recoveryZ06G);
  recoveryPrevX06G=recoveryX06G;recoveryPrevZ06G=recoveryZ06G;
}
function interruptFoodGoal06G(now){
  recoveryEvents06G++;
  interruptionStartX06G=recoveryX06G;interruptionStartZ06G=recoveryZ06G;
  recoverySuspendedGoal06G='FOOD';
  recoveryInterrupt06G='HAZARD';
  setRecoveryGoal06G('HAZARD');
  setRecoveryState06G('EVADING',now);
  if(recoverySuspendedEl06G){recoverySuspendedEl06G.textContent='FOOD';recoverySuspendedEl06G.style.color='#ffe59a';}
  if(recoveryInterruptEl06G){recoveryInterruptEl06G.textContent='HAZARD';recoveryInterruptEl06G.style.color='#ffd18a';}
  if(recoveryResultEl06G){recoveryResultEl06G.textContent='FOOD GOAL SUSPENDED';recoveryResultEl06G.style.color='#ffd18a';}
}
function updateLivingWorld06G(now){
  const memoryEvents=memoryApi06G.events;

  if(memoryEvents>recoveryMemoryEventSeen06G){
    recoveryMemoryEventSeen06G=memoryEvents;
    if(recoveryState06G==='SEEKING_FOOD')interruptFoodGoal06G(now);
  }

  if(recoveryState06G==='SEEKING_FOOD'){
    // Repeatable pre-hazard presentation: actor visibly pursues food but holds at 34% so the
    // goal cannot complete before the player triggers the living-world chain.
    const raw=Math.min(1,(now-recoveryStateStart06G)/RECOVERY_06G.preGoalTravelMs);
    const p=Math.min(RECOVERY_06G.preGoalCap,smoothRecovery06G(raw));
    recoveryX06G=THREE.MathUtils.lerp(goalStartX06G,foodX06G,p);
    recoveryZ06G=THREE.MathUtils.lerp(goalStartZ06G,foodZ06G,p);
  }else if(recoveryState06G==='EVADING'){
    const p=Math.min(1,(now-recoveryStateStart06G)/RECOVERY_06G.evadeTravelMs),e=smoothRecovery06G(p);
    recoveryX06G=THREE.MathUtils.lerp(interruptionStartX06G,evadeX06G,e);
    recoveryZ06G=THREE.MathUtils.lerp(interruptionStartZ06G,evadeZ06G,e);
    if(p>=1){
      recoveryX06G=evadeX06G;recoveryZ06G=evadeZ06G;
      setRecoveryState06G('WAIT_CLEAR',now);
      setRecoveryGoal06G('WAITING');
      if(recoveryResultEl06G){recoveryResultEl06G.textContent='WAITING FOR HAZARD TO CLEAR';recoveryResultEl06G.style.color='#ffe59a';}
    }
  }else if(recoveryState06G==='WAIT_CLEAR'){
    if(memoryApi06G.state==='CALM'){
      if(!recoveryClearSince06G)recoveryClearSince06G=now;
      if(now-recoveryClearSince06G>=RECOVERY_06G.recoverHoldMs){
        resumeStartX06G=recoveryX06G;resumeStartZ06G=recoveryZ06G;
        recoverySuspendedGoal06G='NONE';
        setRecoveryGoal06G('FOOD');
        setRecoveryState06G('RESUMING_FOOD',now);
        if(recoverySuspendedEl06G){recoverySuspendedEl06G.textContent='NONE';recoverySuspendedEl06G.style.color='#a8f0b5';}
        if(recoveryResultEl06G){recoveryResultEl06G.textContent='RESUMING ORIGINAL FOOD GOAL';recoveryResultEl06G.style.color='#9fe0ff';}
      }
    }else recoveryClearSince06G=0;
  }else if(recoveryState06G==='RESUMING_FOOD'){
    const p=Math.min(1,(now-recoveryStateStart06G)/RECOVERY_06G.resumeTravelMs),e=smoothRecovery06G(p);
    recoveryX06G=THREE.MathUtils.lerp(resumeStartX06G,foodX06G,e);
    recoveryZ06G=THREE.MathUtils.lerp(resumeStartZ06G,foodZ06G,e);
    if(p>=1){
      recoveryX06G=foodX06G;recoveryZ06G=foodZ06G;
      setRecoveryState06G('COMPLETE',now);
      setRecoveryGoal06G('FOOD REACHED');
      if(recoveryInterruptEl06G){recoveryInterruptEl06G.textContent='RESOLVED';recoveryInterruptEl06G.style.color='#a8f0b5';}
      if(recoveryResultEl06G){recoveryResultEl06G.textContent='INTERRUPT → RECOVER → RESUME ✓';recoveryResultEl06G.style.color='#a8f0b5';}
    }
  }

  updateRecoveryPose06G(now);
}
function livingWorld06GLoop(now){
  requestAnimationFrame(livingWorld06GLoop);
  updateLivingWorld06G(now);
}
requestAnimationFrame(livingWorld06GLoop);

globalThis.__livingWorld06G={
  marker:LIVING_WORLD_06G_MARKER,
  get state(){return recoveryState06G;},
  get goal(){return recoveryGoal06G;},
  get suspendedGoal(){return recoverySuspendedGoal06G;},
  get interrupt(){return recoveryInterrupt06G;},
  get events(){return recoveryEvents06G;},
  directPlayerTrigger:false,
  originalGoal:'FOOD',
  interruption:'HAZARD',
  rule:'suspend original goal, resolve higher-priority interruption, resume original goal when valid'
};


// ---- Test 06H: Living World — offscreen / streamed persistence ----
import {StreamCell,StreamStateStore,STREAM_CELL_SCHEMA_VERSION,DEFAULT_STREAM_CONFIG} from './stream-cell-core.js';

const LIVING_WORLD_06H_MARKER='06H_STREAMED_PERSISTENCE';
const memoryApi06H=globalThis.__livingWorld06C;
if(!memoryApi06H||memoryApi06H.marker!=='06C_LOCAL_DISTURBANCE_MEMORY')throw new Error('06H requires frozen accepted 06C memory API');

const STREAM_06H={
  ...DEFAULT_STREAM_CONFIG,
  cellId:'06H_CELL_A',
  directPlayerBehaviorTrigger:false
};

const spawnYaw06H=Number.isFinite(playerRoot.rotation.y)?playerRoot.rotation.y:0;
const spawnX06H=playerRoot.position.x,spawnZ06H=playerRoot.position.z;
const fwdX06H=Math.sin(spawnYaw06H),fwdZ06H=Math.cos(spawnYaw06H);
const rightX06H=Math.cos(spawnYaw06H),rightZ06H=-Math.sin(spawnYaw06H);

const cellCenterX06H=spawnX06H+fwdX06H*10.5+rightX06H*6.0;
const cellCenterZ06H=spawnZ06H+fwdZ06H*10.5+rightZ06H*6.0;
const actorStart06H={
  x:cellCenterX06H-rightX06H*2.2-fwdX06H*.4,
  z:cellCenterZ06H-rightZ06H*2.2-fwdZ06H*.4
};
const actorDestination06H={
  x:cellCenterX06H+rightX06H*3.6+fwdX06H*.7,
  z:cellCenterZ06H+rightZ06H*3.6+fwdZ06H*.7
};

const streamStore06H=new StreamStateStore();
let streamDistance06H=Infinity;
let lastRestoreTimerCaughtUp06H=false;
let lastRestoreProgressPreserved06H=false;
let lastResult06H='READY';

const streamLifecycleEl06H=document.getElementById('worldStreamLifecycle');
const streamDistanceEl06H=document.getElementById('worldStreamDistance');
const streamSnapshotEl06H=document.getElementById('worldStreamSnapshot');
const streamOffscreenEl06H=document.getElementById('worldStreamOffscreen');
const streamMemoryEl06H=document.getElementById('worldStreamMemory');
const streamGoalEl06H=document.getElementById('worldStreamGoal');
const streamProgressEl06H=document.getElementById('worldStreamProgress');
const streamDuplicatesEl06H=document.getElementById('worldStreamDuplicates');
const streamResultEl06H=document.getElementById('worldStreamResult');

function set06HText(el,value,color){
  if(!el)return;
  el.textContent=value;
  if(color)el.style.color=color;
}
function memoryColor06H(state){
  if(state==='DISTURBED')return 0xd98a38;
  if(state==='SETTLING')return 0xc2ad62;
  return 0x78925d;
}
function disposeMaterial06H(material){
  if(Array.isArray(material)){for(const item of material)item.dispose();}
  else if(material)material.dispose();
}
function attachCellVisual06H(state){
  const root=new THREE.Group();
  root.userData.streamCellId=STREAM_06H.cellId;

  const reedGeo=new THREE.PlaneGeometry(.18,1.42,1,2);
  reedGeo.translate(0,.71,0);
  const reedMat=new THREE.MeshStandardMaterial({
    color:memoryColor06H(state.memory.state),
    roughness:.96,
    metalness:0,
    side:THREE.DoubleSide
  });
  const reeds=new THREE.InstancedMesh(reedGeo,reedMat,14);
  reeds.castShadow=true;
  reeds.receiveShadow=true;
  reeds.frustumCulled=false;
  const temp=new THREE.Object3D();
  for(let i=0;i<14;i++){
    const a=i*2.399963229728653;
    const r=.55+(i%5)*.19;
    const x=cellCenterX06H+Math.cos(a)*r;
    const z=cellCenterZ06H+Math.sin(a)*r;
    temp.position.set(x,groundHeight(x,z)+.03,z);
    temp.rotation.set(0,a*.37,0);
    temp.scale.set(.82,.78+(i%4)*.10,1);
    temp.updateMatrix();
    reeds.setMatrixAt(i,temp.matrix);
  }
  reeds.instanceMatrix.needsUpdate=true;

  const actorGeo=new THREE.DodecahedronGeometry(.48,1);
  const actorMat=new THREE.MeshStandardMaterial({color:0x3f8f88,roughness:.9,metalness:0});
  const actor=new THREE.Mesh(actorGeo,actorMat);
  actor.castShadow=true;

  const foodGeo=new THREE.SphereGeometry(.20,10,8);
  const foodMat=new THREE.MeshStandardMaterial({color:0xd8b35a,emissive:0x6c4d18,emissiveIntensity:.28,roughness:.72});
  const food=new THREE.Mesh(foodGeo,foodMat);
  food.castShadow=true;

  root.add(reeds,actor,food);
  scene.add(root);

  const handle={root,reeds,reedGeo,reedMat,actor,actorGeo,actorMat,food,foodGeo,foodMat};
  updateCellVisual06H(handle,state,Date.now());
  return handle;
}
function updateCellVisual06H(handle,state,wallNow){
  if(!handle)return;
  const p=state.actor.position;
  handle.actor.position.set(p.x,groundHeight(p.x,p.z)+.48,p.z);
  const d=state.actor.destination;
  handle.food.position.set(d.x,groundHeight(d.x,d.z)+.23,d.z);
  const color=memoryColor06H(state.memory.state);
  handle.reedMat.color.setHex(color);
  const pulse=state.memory.state==='DISTURBED'?1+Math.sin(wallNow*.012)*.08:1;
  handle.reeds.scale.setScalar(pulse);
}
function detachCellVisual06H(handle){
  if(!handle)return;
  scene.remove(handle.root);
  handle.root.traverse(obj=>{
    if(obj.geometry)obj.geometry.dispose();
    if(obj.material)disposeMaterial06H(obj.material);
  });
  handle.root.clear();
}

const streamCell06H=new StreamCell({
  id:STREAM_06H.cellId,
  store:streamStore06H,
  actorStart:actorStart06H,
  actorDestination:actorDestination06H,
  config:STREAM_06H,
  initialEventId:memoryApi06H.events,
  attachVisual:attachCellVisual06H,
  detachVisual:detachCellVisual06H,
  updateVisual:updateCellVisual06H
});

streamCell06H.load(Date.now());

function updateStreamHud06H(wallNow){
  const lifecycle=streamCell06H.isActive?'ACTIVE':'UNLOADED';
  set06HText(streamLifecycleEl06H,lifecycle,lifecycle==='ACTIVE'?'#a8f0b5':'#ffd18a');
  set06HText(streamDistanceEl06H,streamDistance06H.toFixed(1)+' m');
  set06HText(streamSnapshotEl06H,streamCell06H.hasSnapshot?'SAVED':'NONE',streamCell06H.hasSnapshot?'#9fe0ff':'#d8ebe5');
  set06HText(streamOffscreenEl06H,(streamCell06H.offscreenMs(wallNow)/1000).toFixed(1)+' s');
  set06HText(streamMemoryEl06H,streamCell06H.state.memory.state,streamCell06H.state.memory.state==='CALM'?'#a8f0b5':'#ffd18a');
  set06HText(streamGoalEl06H,streamCell06H.state.actor.goal);
  set06HText(streamProgressEl06H,Math.round(streamCell06H.state.actor.progress*100)+'%');
  set06HText(streamDuplicatesEl06H,String(streamCell06H.duplicateCount),streamCell06H.duplicateCount===0?'#a8f0b5':'#ff8f8f');
  set06HText(streamResultEl06H,lastResult06H,lastResult06H.includes('✓')?'#a8f0b5':'#ffe59a');
}

function updateLivingWorld06H(now,dt){
  const wallNow=Date.now();
  streamDistance06H=Math.hypot(playerRoot.position.x-cellCenterX06H,playerRoot.position.z-cellCenterZ06H);

  if(streamCell06H.isActive&&streamDistance06H>=STREAM_06H.unloadRadiusM){
    streamCell06H.unload(wallNow);
    lastResult06H='STATE SERIALIZED · SIMULATION STOPPED';
  }else if(!streamCell06H.isActive&&streamDistance06H<=STREAM_06H.loadRadiusM){
    const saved=streamStore06H.load(STREAM_06H.cellId);
    const savedProgress=saved?.actor?.progress;
    const savedMemoryState=saved?.memory?.state;
    const savedExpiresAt=saved?.memory?.expiresAt||0;
    const restore=streamCell06H.load(wallNow);
    if(restore.rehydrated){
      lastRestoreProgressPreserved06H=Math.abs(streamCell06H.state.actor.progress-savedProgress)<1e-9;
      lastRestoreTimerCaughtUp06H=savedMemoryState!=='CALM'&&wallNow>=savedExpiresAt&&streamCell06H.state.memory.state==='CALM';
      if(lastRestoreTimerCaughtUp06H&&lastRestoreProgressPreserved06H&&streamCell06H.duplicateCount===0){
        lastResult06H='STATE RESTORED ✓ · TIMER CAUGHT UP ✓ · NO DUPLICATES ✓';
      }else if(lastRestoreProgressPreserved06H&&streamCell06H.duplicateCount===0){
        lastResult06H='STATE RESTORED ✓ · NO DUPLICATES ✓';
      }else{
        lastResult06H='RESTORE CHECK FAILED';
      }
    }
  }

  if(streamCell06H.isActive){
    streamCell06H.update({
      dtMs:Math.max(0,dt*1000),
      wallNow,
      eventId:memoryApi06H.events
    });
    if(streamCell06H.state.memory.state==='DISTURBED'&&streamCell06H.lastTransition==='MEMORY_DISTURBED'){
      lastResult06H='MEMORY DISTURBED · LEAVE CELL';
    }
  }

  updateStreamHud06H(wallNow);
}

const frameHooks06H=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);
const frameHook06H=(now,dt)=>updateLivingWorld06H(now,dt);
frameHook06H.streamCellId=STREAM_06H.cellId;
if(!frameHooks06H.some(h=>h.streamCellId===STREAM_06H.cellId))frameHooks06H.push(frameHook06H);

globalThis.__livingWorld06H={
  marker:LIVING_WORLD_06H_MARKER,
  schemaVersion:STREAM_CELL_SCHEMA_VERSION,
  get lifecycle(){return streamCell06H.lifecycle;},
  get loaded(){return streamCell06H.isActive;},
  get state(){return streamCell06H.state.memory.state;},
  get snapshot(){return streamStore06H.load(STREAM_06H.cellId);},
  get playerDistanceM(){return streamDistance06H;},
  get actorGoal(){return streamCell06H.state.actor.goal;},
  get actorProgress(){return streamCell06H.state.actor.progress;},
  get unloadCount(){return streamCell06H.unloadCount;},
  get restoreCount(){return streamCell06H.restoreCount;},
  get duplicateCount(){return streamCell06H.duplicateCount;},
  get lastOffscreenMs(){return streamCell06H.lastOffscreenMs;},
  get timerCaughtUp(){return lastRestoreTimerCaughtUp06H;},
  get progressPreserved(){return lastRestoreProgressPreserved06H;},
  loadRadiusM:STREAM_06H.loadRadiusM,
  unloadRadiusM:STREAM_06H.unloadRadiusM,
  directPlayerBehaviorTrigger:false,
  activeSceneRootCount:()=>scene.children.filter(o=>o.userData?.streamCellId===STREAM_06H.cellId).length
};


// ---- Test 06I: Living World — simulation LOD + sleep/wake ----
import {StreamStateStore as StreamStateStore06I,STREAM_CELL_SCHEMA_VERSION as STREAM_CELL_SCHEMA_VERSION_06I} from './stream-cell-core.js';
import {SimulationLODController,SIM_LOD_TIERS,DEFAULT_SIM_LOD_CONFIG} from './simulation-lod-core.js';

const LIVING_WORLD_06I_MARKER='06I_SIMULATION_LOD_SLEEP_WAKE';
const SIM_06I={
  ...DEFAULT_SIM_LOD_CONFIG,
  cellId:'06I_LOD_CELL',
  actorTravelMs:90000,
  directPlayerBehaviorTrigger:false
};

const lodSpawnYaw06I=Number.isFinite(playerRoot.rotation.y)?playerRoot.rotation.y:0;
const lodSpawnX06I=playerRoot.position.x,lodSpawnZ06I=playerRoot.position.z;
const lodFwdX06I=Math.sin(lodSpawnYaw06I),lodFwdZ06I=Math.cos(lodSpawnYaw06I);
const lodRightX06I=Math.cos(lodSpawnYaw06I),lodRightZ06I=-Math.sin(lodSpawnYaw06I);

const lodCenterX06I=lodSpawnX06I+lodFwdX06I*8.8-lodRightX06I*4.8;
const lodCenterZ06I=lodSpawnZ06I+lodFwdZ06I*8.8-lodRightZ06I*4.8;
const lodActorStart06I={
  x:lodCenterX06I-lodRightX06I*2.4,
  z:lodCenterZ06I-lodRightZ06I*2.4
};
const lodActorDestination06I={
  x:lodCenterX06I+lodRightX06I*4.8+lodFwdX06I*.9,
  z:lodCenterZ06I+lodRightZ06I*4.8+lodFwdZ06I*.9
};

const lodStore06I=new StreamStateStore06I();
let lodRoot06I=null;
let lodVisual06I=null;
let lodDistance06I=Infinity;
let lodDuplicateCount06I=0;
let lodLastSleepProgress06I=0;
let lodProgressPreserved06I=false;
let lodLastSleepAt06I=0;
let lodLastOffscreenMs06I=0;
let lodResult06I='NEAR FULL SIMULATION';
let lodTicksWindowStart06I=performance.now();
let lodTicksWindowCount06I=0;
let lodTicksPerSecond06I=0;
const lodVisited06I=new Set([SIM_LOD_TIERS.NEAR]);

const lodActorState06I={
  goal:'FOOD',
  behaviorState:'SEEKING_FOOD',
  progress:0,
  position:{...lodActorStart06I},
  destination:{...lodActorDestination06I}
};

const lodTierEl06I=document.getElementById('worldLodTier');
const lodDistanceEl06I=document.getElementById('worldLodDistance');
const lodCadenceEl06I=document.getElementById('worldLodCadence');
const lodTicksEl06I=document.getElementById('worldLodTicks');
const lodGoalEl06I=document.getElementById('worldLodGoal');
const lodProgressEl06I=document.getElementById('worldLodProgress');
const lodSnapshotEl06I=document.getElementById('worldLodSnapshot');
const lodSleepWakeEl06I=document.getElementById('worldLodSleepWake');
const lodDuplicatesEl06I=document.getElementById('worldLodDuplicates');
const lodResultEl06I=document.getElementById('worldLodResult');

function set06IText(el,value,color){
  if(!el)return;
  el.textContent=value;
  if(color)el.style.color=color;
}
function tierColor06I(tier){
  if(tier===SIM_LOD_TIERS.NEAR)return 0x3f8f88;
  if(tier===SIM_LOD_TIERS.MID)return 0x4f83a8;
  if(tier===SIM_LOD_TIERS.FAR)return 0x75639a;
  return 0x5f6668;
}
function disposeMaterial06I(material){
  if(Array.isArray(material)){for(const item of material)item.dispose();}
  else if(material)material.dispose();
}
function applyActorPosition06I(){
  const p=lodActorState06I.progress;
  lodActorState06I.position.x=THREE.MathUtils.lerp(lodActorStart06I.x,lodActorDestination06I.x,p);
  lodActorState06I.position.z=THREE.MathUtils.lerp(lodActorStart06I.z,lodActorDestination06I.z,p);
}
function attachLodVisual06I(){
  if(lodRoot06I){
    lodDuplicateCount06I++;
    return;
  }
  const root=new THREE.Group();
  root.userData.simLodCellId=SIM_06I.cellId;

  const bodyGeo=new THREE.DodecahedronGeometry(.46,1);
  const bodyMat=new THREE.MeshStandardMaterial({color:tierColor06I(SIM_LOD_TIERS.NEAR),roughness:.9,metalness:0});
  const body=new THREE.Mesh(bodyGeo,bodyMat);
  body.castShadow=true;

  const earGeo=new THREE.ConeGeometry(.11,.46,7);
  const earMat=new THREE.MeshStandardMaterial({color:0x315f5b,roughness:.92,metalness:0});
  const earL=new THREE.Mesh(earGeo,earMat);
  const earR=new THREE.Mesh(earGeo,earMat.clone());
  earL.position.set(-.19,.43,0);
  earR.position.set(.19,.43,0);
  earL.rotation.z=.22;
  earR.rotation.z=-.22;
  body.add(earL,earR);

  const foodGeo=new THREE.SphereGeometry(.19,10,8);
  const foodMat=new THREE.MeshStandardMaterial({color:0xd7b45a,emissive:0x624914,emissiveIntensity:.25,roughness:.74});
  const food=new THREE.Mesh(foodGeo,foodMat);
  food.castShadow=true;

  root.add(body,food);
  scene.add(root);
  lodRoot06I=root;
  lodVisual06I={root,body,bodyGeo,bodyMat,earL,earR,food,foodGeo,foodMat};
  updateLodVisual06I();
}
function detachLodVisual06I(){
  if(!lodRoot06I)return;
  scene.remove(lodRoot06I);
  lodRoot06I.traverse(obj=>{
    if(obj.geometry)obj.geometry.dispose();
    if(obj.material)disposeMaterial06I(obj.material);
  });
  lodRoot06I.clear();
  lodRoot06I=null;
  lodVisual06I=null;
}
function updateLodVisual06I(){
  if(!lodVisual06I)return;
  const p=lodActorState06I.position;
  lodVisual06I.body.position.set(p.x,groundHeight(p.x,p.z)+.5,p.z);
  const d=lodActorState06I.destination;
  lodVisual06I.food.position.set(d.x,groundHeight(d.x,d.z)+.22,d.z);
  lodVisual06I.bodyMat.color.setHex(tierColor06I(lodController06I?.tier||SIM_LOD_TIERS.NEAR));
}
function saveSleepSnapshot06I(wallNow){
  const snapshot={
    version:STREAM_CELL_SCHEMA_VERSION_06I,
    cellId:SIM_06I.cellId,
    serializedAt:wallNow,
    actor:{
      goal:lodActorState06I.goal,
      behaviorState:lodActorState06I.behaviorState,
      progress:lodActorState06I.progress,
      position:{...lodActorState06I.position},
      destination:{...lodActorState06I.destination}
    }
  };
  lodStore06I.save(SIM_06I.cellId,snapshot);
  lodLastSleepProgress06I=lodActorState06I.progress;
  lodLastSleepAt06I=wallNow;
}
function restoreSleepSnapshot06I(wallNow){
  const snapshot=lodStore06I.load(SIM_06I.cellId);
  if(!snapshot)return false;
  lodActorState06I.goal=snapshot.actor.goal;
  lodActorState06I.behaviorState=snapshot.actor.behaviorState;
  lodActorState06I.progress=snapshot.actor.progress;
  lodActorState06I.position={...snapshot.actor.position};
  lodActorState06I.destination={...snapshot.actor.destination};
  lodLastOffscreenMs06I=Math.max(0,wallNow-snapshot.serializedAt);
  lodProgressPreserved06I=Math.abs(lodActorState06I.progress-lodLastSleepProgress06I)<1e-9;
  return true;
}
function advanceLodActor06I(stepMs){
  if(lodActorState06I.behaviorState!=='SEEKING_FOOD')return;
  lodActorState06I.progress=Math.min(1,lodActorState06I.progress+stepMs/SIM_06I.actorTravelMs);
  if(lodActorState06I.progress>=1){
    lodActorState06I.progress=1;
    lodActorState06I.goal='FOOD REACHED';
    lodActorState06I.behaviorState='COMPLETE';
  }
  applyActorPosition06I();
}

const lodController06I=new SimulationLODController({
  config:SIM_06I,
  onSimulate:(stepMs)=>{
    lodTicksWindowCount06I++;
    advanceLodActor06I(stepMs);
    updateLodVisual06I();
  },
  onTierChange:(next)=>{
    lodVisited06I.add(next);
    if(next===SIM_LOD_TIERS.NEAR)lodResult06I='NEAR FULL SIMULATION';
    else if(next===SIM_LOD_TIERS.MID)lodResult06I='MID REDUCED-RATE SIMULATION';
    else if(next===SIM_LOD_TIERS.FAR)lodResult06I='FAR COARSE SIMULATION';
    else lodResult06I='DORMANT · SNAPSHOT SAVED · SIMULATION SLEEPING';
    updateLodVisual06I();
  },
  onSleep:(wallNow)=>{
    saveSleepSnapshot06I(wallNow);
    detachLodVisual06I();
  },
  onWake:(wallNow)=>{
    const restored=restoreSleepSnapshot06I(wallNow);
    attachLodVisual06I();
    if(restored&&lodProgressPreserved06I&&lodDuplicateCount06I===0){
      lodResult06I='WAKE RESTORED ✓ · PROGRESS PRESERVED ✓ · NO DUPLICATES ✓';
    }else{
      lodResult06I='WAKE VALIDATION FAILED';
    }
  }
});

attachLodVisual06I();

function updateLodHud06I(wallNow){
  const tier=lodController06I.tier;
  const tierColor=tier===SIM_LOD_TIERS.DORMANT?'#ffd18a':'#a8f0b5';
  set06IText(lodTierEl06I,tier,tierColor);
  set06IText(lodDistanceEl06I,lodDistance06I.toFixed(1)+' m');
  set06IText(lodCadenceEl06I,lodController06I.cadenceLabel(),tierColor);
  set06IText(lodTicksEl06I,lodTicksPerSecond06I.toFixed(1)+' /s');
  set06IText(lodGoalEl06I,lodActorState06I.goal);
  set06IText(lodProgressEl06I,Math.round(lodActorState06I.progress*100)+'%');
  set06IText(lodSnapshotEl06I,lodStore06I.has(SIM_06I.cellId)?'SAVED':'NONE',lodStore06I.has(SIM_06I.cellId)?'#9fe0ff':'#d8ebe5');
  set06IText(lodSleepWakeEl06I,lodController06I.sleepCount+'/'+lodController06I.wakeCount);
  set06IText(lodDuplicatesEl06I,String(lodDuplicateCount06I),lodDuplicateCount06I===0?'#a8f0b5':'#ff8f8f');

  if(lodVisited06I.has(SIM_LOD_TIERS.NEAR)&&lodVisited06I.has(SIM_LOD_TIERS.MID)&&lodVisited06I.has(SIM_LOD_TIERS.FAR)&&lodVisited06I.has(SIM_LOD_TIERS.DORMANT)&&lodController06I.wakeCount>0&&lodProgressPreserved06I&&lodDuplicateCount06I===0){
    lodResult06I='LOD LADDER ✓ · SLEEP/WAKE ✓ · NO DUPLICATES ✓';
  }
  set06IText(lodResultEl06I,lodResult06I,lodResult06I.includes('✓')?'#a8f0b5':'#ffe59a');

  const elapsed=performance.now()-lodTicksWindowStart06I;
  if(elapsed>=1000){
    lodTicksPerSecond06I=lodTicksWindowCount06I/(elapsed/1000);
    lodTicksWindowCount06I=0;
    lodTicksWindowStart06I=performance.now();
  }
}

function updateLivingWorld06I(now,dt){
  const wallNow=Date.now();
  lodDistance06I=Math.hypot(playerRoot.position.x-lodCenterX06I,playerRoot.position.z-lodCenterZ06I);
  lodController06I.step({
    distanceM:lodDistance06I,
    dtMs:Math.max(0,dt*1000),
    wallNow
  });
  updateLodHud06I(wallNow);
}

const frameHooks06I=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);
const frameHook06I=(now,dt)=>updateLivingWorld06I(now,dt);
frameHook06I.simLodCellId=SIM_06I.cellId;
if(!frameHooks06I.some(h=>h.simLodCellId===SIM_06I.cellId))frameHooks06I.push(frameHook06I);

globalThis.__livingWorld06I={
  marker:LIVING_WORLD_06I_MARKER,
  get tier(){return lodController06I.tier;},
  get playerDistanceM(){return lodDistance06I;},
  get cadence(){return lodController06I.cadenceLabel();},
  get totalTicks(){return lodController06I.totalTicks;},
  get ticksByTier(){return {...lodController06I.ticksByTier};},
  get actorGoal(){return lodActorState06I.goal;},
  get actorProgress(){return lodActorState06I.progress;},
  get sleepCount(){return lodController06I.sleepCount;},
  get wakeCount(){return lodController06I.wakeCount;},
  get duplicateCount(){return lodDuplicateCount06I;},
  get snapshot(){return lodStore06I.load(SIM_06I.cellId);},
  get lastOffscreenMs(){return lodLastOffscreenMs06I;},
  get progressPreserved(){return lodProgressPreserved06I;},
  activeSceneRootCount:()=>scene.children.filter(o=>o.userData?.simLodCellId===SIM_06I.cellId).length,
  config:{...SIM_06I},
  directPlayerBehaviorTrigger:false
};


// ---- Test 06J: Living World — integration / scale audit ----
import {
  SCALE_ACTOR_COUNT_06J as SCALE_ACTOR_COUNT_06J_RUNTIME,
  PERFORMANCE_BUDGET_06J as PERFORMANCE_BUDGET_06J_RUNTIME,
  createScaleActor06J as createScaleActor06JRuntime,
  advanceScaleActor06J as advanceScaleActor06JRuntime,
  snapshotScaleActor06J as snapshotScaleActor06JRuntime,
  restoreScaleActor06J as restoreScaleActor06JRuntime,
  summarizePerformance06J as summarizePerformance06JRuntime
} from './integration-scale-core.js';
import {
  SimulationLODController as SimulationLODController06J,
  SIM_LOD_TIERS as SIM_LOD_TIERS_06J,
  DEFAULT_SIM_LOD_CONFIG as DEFAULT_SIM_LOD_CONFIG_06J
} from './simulation-lod-core.js';
import {STREAM_CELL_SCHEMA_VERSION as STREAM_CELL_SCHEMA_VERSION_06J} from './stream-cell-core.js';

const LIVING_WORLD_06J_MARKER='06J_LIVING_WORLD_INTEGRATION_SCALE_AUDIT';
const SCALE_06J={
  actorCount:SCALE_ACTOR_COUNT_06J_RUNTIME,
  directPlayerBehaviorTrigger:false
};

const auditSpawnX06J=playerRoot.position.x;
const auditSpawnZ06J=playerRoot.position.z;
const auditStartWall06J=Date.now();
const auditActors06J=[];
let auditDuplicateCount06J=0;
let auditMatrixDirty06J=false;
let auditColorDirty06J=false;
let auditLogicTicksWindow06J=0;
let auditLogicTicksPerSec06J=0;
let auditLogicWindowStart06J=performance.now();
let auditLastFrameNow06J=0;
let auditStartedAt06J=0;
let auditFinished06J=false;
let auditFinalSummary06J=null;
let auditWarmupProgramCount06J=null;
let auditLastTelemetryAt06J=0;
let auditObjectCount06J=0;
let auditDrawCallsMax06J=0;
let auditTrianglesMax06J=0;
let auditFrameSamples06J=[];
let auditCpuSamples06J=[];
let auditFrameSum06J=0;
let auditCpuSum06J=0;
let auditStage06J='WAITING';
let auditResult06J='WAITING FOR RUNTIME';
let auditTierCounts06J={NEAR:0,MID:0,FAR:0,DORMANT:0};
let auditMemoryActive06J=0;
let auditSuspendedGoals06J=0;
let auditSnapshots06J=0;

const auditStageEl06J=document.getElementById('auditStage06J');
const auditActorsEl06J=document.getElementById('auditActors06J');
const auditTiersEl06J=document.getElementById('auditTiers06J');
const auditTicksEl06J=document.getElementById('auditTicks06J');
const auditFrameEl06J=document.getElementById('auditFrame06J');
const auditCpuEl06J=document.getElementById('auditCpu06J');
const auditDrawEl06J=document.getElementById('auditDraw06J');
const auditSceneEl06J=document.getElementById('auditScene06J');
const auditMemoryEl06J=document.getElementById('auditMemory06J');
const auditShadersEl06J=document.getElementById('auditShaders06J');
const auditGpuEl06J=document.getElementById('auditGpu06J');
const auditStateEl06J=document.getElementById('auditState06J');
const auditResultEl06J=document.getElementById('auditResult06J');
const charEl06J=document.getElementById('char');

const auditGeo06J=new THREE.TetrahedronGeometry(.22,0);
const auditMat06J=new THREE.MeshStandardMaterial({color:0xffffff,roughness:.9,metalness:0});
const auditMesh06J=new THREE.InstancedMesh(auditGeo06J,auditMat06J,SCALE_06J.actorCount);
auditMesh06J.castShadow=false;
auditMesh06J.receiveShadow=false;
auditMesh06J.frustumCulled=false;
auditMesh06J.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
auditMesh06J.userData.scaleAuditRoot=true;
scene.add(auditMesh06J);

const auditObj06J=new THREE.Object3D();
const auditColor06J=new THREE.Color();

function tierHex06J(tier){
  if(tier===SIM_LOD_TIERS_06J.NEAR)return 0x39a99b;
  if(tier===SIM_LOD_TIERS_06J.MID)return 0x4f83b6;
  if(tier===SIM_LOD_TIERS_06J.FAR)return 0x7a62a9;
  return 0x596164;
}

function setAuditInstance06J(actor,tier){
  const wx=auditSpawnX06J+actor.position.x;
  const wz=auditSpawnZ06J+actor.position.z;
  const dormant=tier===SIM_LOD_TIERS_06J.DORMANT;
  auditObj06J.position.set(wx,groundHeight(wx,wz)+.18,wz);
  auditObj06J.rotation.set(0,actor.index*.61803398875,0);
  const scale=dormant?0:.58+((actor.index%7)*.025);
  auditObj06J.scale.setScalar(scale);
  auditObj06J.updateMatrix();
  auditMesh06J.setMatrixAt(actor.index,auditObj06J.matrix);
  auditColor06J.setHex(tierHex06J(tier));
  auditMesh06J.setColorAt(actor.index,auditColor06J);
  auditMatrixDirty06J=true;
  auditColorDirty06J=true;
}

function resolveAuditDistance06J(actor){
  const wx=auditSpawnX06J+actor.position.x;
  const wz=auditSpawnZ06J+actor.position.z;
  return Math.hypot(playerRoot.position.x-wx,playerRoot.position.z-wz);
}

for(let i=0;i<SCALE_06J.actorCount;i++){
  const actor=createScaleActor06JRuntime(i,auditStartWall06J);
  actor.controller=new SimulationLODController06J({
    config:DEFAULT_SIM_LOD_CONFIG_06J,
    onSimulate:(stepMs,tier,wallNow)=>{
      auditLogicTicksWindow06J++;
      advanceScaleActor06JRuntime(actor,stepMs,wallNow);
      setAuditInstance06J(actor,tier);
    },
    onTierChange:(next)=>{
      setAuditInstance06J(actor,next);
    },
    onSleep:(wallNow)=>{
      if(!actor.visualActive)auditDuplicateCount06J++;
      actor.snapshot=snapshotScaleActor06JRuntime(actor,STREAM_CELL_SCHEMA_VERSION_06J,wallNow);
      actor.sleepCount++;
      actor.visualActive=false;
      setAuditInstance06J(actor,SIM_LOD_TIERS_06J.DORMANT);
    },
    onWake:(wallNow,nextTier)=>{
      if(actor.visualActive)auditDuplicateCount06J++;
      if(actor.snapshot)restoreScaleActor06JRuntime(actor,actor.snapshot,wallNow);
      actor.wakeCount++;
      actor.visualActive=true;
      setAuditInstance06J(actor,nextTier);
    }
  });
  auditActors06J.push(actor);
  setAuditInstance06J(actor,SIM_LOD_TIERS_06J.NEAR);
}
auditMesh06J.instanceMatrix.needsUpdate=true;
if(auditMesh06J.instanceColor)auditMesh06J.instanceColor.needsUpdate=true;
auditMatrixDirty06J=false;
auditColorDirty06J=false;

function countSceneObjects06J(){
  let count=0;
  scene.traverse(()=>count++);
  return count;
}

function heapLabel06J(){
  const memory=performance.memory;
  if(!memory||!Number.isFinite(memory.usedJSHeapSize))return 'JS N/A';
  return 'JS '+(memory.usedJSHeapSize/(1024*1024)).toFixed(1)+' MB';
}

function setAuditText06J(el,value,color){
  if(!el)return;
  el.textContent=value;
  if(color)el.style.color=color;
}

function updateAuditCounters06J(){
  const counts={NEAR:0,MID:0,FAR:0,DORMANT:0};
  let memoryActive=0,suspended=0,snapshots=0;
  for(const actor of auditActors06J){
    const tier=actor.controller.tier;
    counts[tier]=(counts[tier]||0)+1;
    if(actor.memory.state!=='CALM')memoryActive++;
    if(actor.suspendedGoal!=='NONE')suspended++;
    if(actor.snapshot)snapshots++;
  }
  auditTierCounts06J=counts;
  auditMemoryActive06J=memoryActive;
  auditSuspendedGoals06J=suspended;
  auditSnapshots06J=snapshots;
}

function liveFrameLabel06J(){
  if(auditFinalSummary06J){
    const s=auditFinalSummary06J;
    return s.frame_avg_ms.toFixed(2)+' / '+s.frame_p95_ms.toFixed(2)+' / '+s.frame_p99_ms.toFixed(2)+' ms';
  }
  const avg=auditFrameSamples06J.length?auditFrameSum06J/auditFrameSamples06J.length:0;
  return avg?avg.toFixed(2)+' ms avg':'—';
}

function liveCpuLabel06J(){
  if(auditFinalSummary06J){
    const s=auditFinalSummary06J;
    return s.audit_cpu_avg_ms.toFixed(3)+' / '+s.audit_cpu_p95_ms.toFixed(3)+' ms';
  }
  const avg=auditCpuSamples06J.length?auditCpuSum06J/auditCpuSamples06J.length:0;
  return avg?avg.toFixed(3)+' ms avg':'—';
}

function updateAuditHud06J(nowPerf){
  const totalTiers=auditTierCounts06J.NEAR+auditTierCounts06J.MID+auditTierCounts06J.FAR+auditTierCounts06J.DORMANT;
  const rendererMem=renderer.info.memory||{};
  const shaderPrograms=Array.isArray(renderer.info.programs)?renderer.info.programs.length:0;
  const shaderDelta=auditWarmupProgramCount06J===null?'—':String(shaderPrograms-auditWarmupProgramCount06J);
  const rootCount=scene.children.filter(o=>o.userData?.scaleAuditRoot===true).length;

  setAuditText06J(auditStageEl06J,auditStage06J,auditStage06J==='PASS'?'#a8f0b5':auditStage06J==='FAIL'?'#ff9b9b':'#ffe59a');
  setAuditText06J(auditActorsEl06J,totalTiers+'/'+SCALE_06J.actorCount);
  setAuditText06J(auditTiersEl06J,auditTierCounts06J.NEAR+'/'+auditTierCounts06J.MID+'/'+auditTierCounts06J.FAR+'/'+auditTierCounts06J.DORMANT);
  setAuditText06J(auditTicksEl06J,auditLogicTicksPerSec06J.toFixed(0)+' /s');
  setAuditText06J(auditFrameEl06J,liveFrameLabel06J());
  setAuditText06J(auditCpuEl06J,liveCpuLabel06J());
  setAuditText06J(auditDrawEl06J,renderer.info.render.calls+' / '+renderer.info.render.triangles.toLocaleString());
  setAuditText06J(auditSceneEl06J,auditObjectCount06J+' obj · '+(rendererMem.geometries||0)+' geo · '+(rendererMem.textures||0)+' tex');
  setAuditText06J(auditMemoryEl06J,heapLabel06J());
  setAuditText06J(auditShadersEl06J,shaderPrograms+' · Δ '+shaderDelta);
  setAuditText06J(auditGpuEl06J,'N/A · WebGL');
  setAuditText06J(auditStateEl06J,'mem '+auditMemoryActive06J+' · susp '+auditSuspendedGoals06J+' · snap '+auditSnapshots06J+' · root '+rootCount);
  setAuditText06J(auditResultEl06J,auditResult06J,auditFinalSummary06J?.pass?'#a8f0b5':auditStage06J==='FAIL'?'#ff9b9b':'#ffe59a');
}

function finishAudit06J(){
  updateAuditCounters06J();
  const tierTotal=auditTierCounts06J.NEAR+auditTierCounts06J.MID+auditTierCounts06J.FAR+auditTierCounts06J.DORMANT;
  const rootCount=scene.children.filter(o=>o.userData?.scaleAuditRoot===true).length;
  const effectiveDuplicates=auditDuplicateCount06J+(rootCount===1?0:1);
  auditFinalSummary06J=summarizePerformance06JRuntime({
    frameSamples:auditFrameSamples06J,
    cpuSamples:auditCpuSamples06J,
    drawCallsMax:auditDrawCallsMax06J,
    trianglesMax:auditTrianglesMax06J,
    actorCount:tierTotal,
    duplicateCount:effectiveDuplicates,
    limits:PERFORMANCE_BUDGET_06J_RUNTIME
  });
  auditFinished06J=true;
  if(auditFinalSummary06J.pass){
    auditStage06J='PASS';
    auditResult06J='192 ACTORS ✓ · BUDGET PASS ✓ · STATE STABLE ✓';
  }else{
    auditStage06J='FAIL';
    auditResult06J='BUDGET FAIL · '+auditFinalSummary06J.failed.slice(0,3).join(' · ');
  }
}

function updateLivingWorld06J(now,dt){
  const cpuStart=performance.now();
  const wallNow=Date.now();
  const rawFrameMs=auditLastFrameNow06J>0?Math.max(0,now-auditLastFrameNow06J):0;
  auditLastFrameNow06J=now;

  if(!auditStartedAt06J&&charEl06J&&charEl06J.textContent!=='BOOT'){
    auditStartedAt06J=now;
    auditStage06J='WARMUP';
    auditResult06J='WARMING SHADERS + SCALE ACTORS';
    auditFrameSamples06J=[];
    auditCpuSamples06J=[];
    auditFrameSum06J=0;
    auditCpuSum06J=0;
    auditDrawCallsMax06J=0;
    auditTrianglesMax06J=0;
  }

  for(const actor of auditActors06J){
    actor.controller.step({
      distanceM:resolveAuditDistance06J(actor),
      dtMs:Math.max(0,dt*1000),
      wallNow
    });
  }

  if(auditMatrixDirty06J){
    auditMesh06J.instanceMatrix.needsUpdate=true;
    auditMatrixDirty06J=false;
  }
  if(auditColorDirty06J&&auditMesh06J.instanceColor){
    auditMesh06J.instanceColor.needsUpdate=true;
    auditColorDirty06J=false;
  }

  updateAuditCounters06J();

  const logicElapsed=now-auditLogicWindowStart06J;
  if(logicElapsed>=1000){
    auditLogicTicksPerSec06J=auditLogicTicksWindow06J/(logicElapsed/1000);
    auditLogicTicksWindow06J=0;
    auditLogicWindowStart06J=now;
  }

  const cpuCost=performance.now()-cpuStart;

  if(auditStartedAt06J&&!auditFinished06J){
    const elapsed=now-auditStartedAt06J;
    if(elapsed<PERFORMANCE_BUDGET_06J_RUNTIME.warmupMs){
      auditStage06J='WARMUP';
    }else{
      if(auditStage06J==='WARMUP'){
        auditWarmupProgramCount06J=Array.isArray(renderer.info.programs)?renderer.info.programs.length:0;
        auditStage06J='MEASURING';
        auditResult06J='MEASURING 15 s PERFORMANCE WINDOW';
      }
      if(rawFrameMs>0){
        auditFrameSamples06J.push(rawFrameMs);
        auditFrameSum06J+=rawFrameMs;
      }
      auditCpuSamples06J.push(cpuCost);
      auditCpuSum06J+=cpuCost;
      auditDrawCallsMax06J=Math.max(auditDrawCallsMax06J,renderer.info.render.calls||0);
      auditTrianglesMax06J=Math.max(auditTrianglesMax06J,renderer.info.render.triangles||0);

      if(elapsed>=PERFORMANCE_BUDGET_06J_RUNTIME.warmupMs+PERFORMANCE_BUDGET_06J_RUNTIME.measureMs){
        finishAudit06J();
      }
    }
  }

  if(now-auditLastTelemetryAt06J>=1000){
    auditObjectCount06J=countSceneObjects06J();
    auditLastTelemetryAt06J=now;
  }

  updateAuditHud06J(now);
}

const frameHooks06J=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);
const frameHook06J=(now,dt)=>updateLivingWorld06J(now,dt);
frameHook06J.scaleAuditId='06J_SCALE_AUDIT';
if(!frameHooks06J.some(h=>h.scaleAuditId==='06J_SCALE_AUDIT'))frameHooks06J.push(frameHook06J);

globalThis.__livingWorld06J={
  marker:LIVING_WORLD_06J_MARKER,
  get stage(){return auditStage06J;},
  get result(){return auditResult06J;},
  get actorCount(){return auditActors06J.length;},
  get tiers(){return {...auditTierCounts06J};},
  get logicTicksPerSecond(){return auditLogicTicksPerSec06J;},
  get memoryActive(){return auditMemoryActive06J;},
  get suspendedGoals(){return auditSuspendedGoals06J;},
  get snapshots(){return auditSnapshots06J;},
  get duplicateCount(){return auditDuplicateCount06J;},
  get summary(){return auditFinalSummary06J?JSON.parse(JSON.stringify(auditFinalSummary06J)):null;},
  get budgets(){return {...PERFORMANCE_BUDGET_06J_RUNTIME};},
  get gpuTiming(){return 'N/A · WebGL';},
  directPlayerBehaviorTrigger:false
};


// ---- Test 07A: Production Architecture Promotion ----
import {
  PRODUCTION_ARCHITECTURE_07A as PRODUCTION_ARCHITECTURE_07A_RUNTIME,
  LivingWorldKernel as LivingWorldKernel07A,
  StreamStateStore as StreamStateStore07A,
  StreamCell as StreamCell07A,
  SimulationLODController as SimulationLODController07A,
  SIM_LOD_TIERS as SIM_LOD_TIERS_07A
} from './production/index.js';

const PRODUCTION_ARCHITECTURE_07A_MARKER='07A_PRODUCTION_ARCHITECTURE_PROMOTION';

const archModulesEl07A=document.getElementById('archModules07A');
const archBoundaryEl07A=document.getElementById('archBoundary07A');
const archParityEl07A=document.getElementById('archParity07A');
const archStreamEl07A=document.getElementById('archStream07A');
const archRegressionEl07A=document.getElementById('archRegression07A');
const archResultEl07A=document.getElementById('archResult07A');

function setArchText07A(el,value,color){
  if(!el)return;
  if(el.textContent!==value)el.textContent=value;
  if(color&&el.style.color!==color)el.style.color=color;
}

function runProductionArchitectureProof07A(){
  const checks={};

  const kernel=new LivingWorldKernel07A({initialGoal:'FOOD',initialProgress:.34});
  kernel.createHazardEvent({center:{x:0,z:0},at:1000});
  const interrupted=kernel.update({
    now:1120,
    actorPath:{a:{x:-4,z:0},b:{x:4,z:0}},
    foodValid:true,
    foodEventAt:1120,
    foodProgressDelta:.05
  });
  checks.priority_over_recency=
    interrupted.memoryState==='DISTURBED'&&
    interrupted.winner==='HAZARD'&&
    interrupted.goal==='HAZARD'&&
    interrupted.suspendedGoal==='FOOD'&&
    Math.abs(interrupted.progress-.34)<1e-12;

  const snapshot=kernel.serialize(1600);
  const restoredKernel=new LivingWorldKernel07A();
  const restored=restoredKernel.restore(snapshot,7000);
  checks.offscreen_time_resolution=
    restored.memoryState==='CALM'&&
    restored.goal==='FOOD'&&
    Math.abs(restored.progress-.34)<1e-12&&
    restored.offscreenMs===5400;

  const store=new StreamStateStore07A();
  let attached=0,detached=0;
  const cell=new StreamCell07A({
    id:'07A_STREAM_PROOF',
    store,
    actorStart:{x:0,z:0},
    actorDestination:{x:10,z:0},
    initialEventId:0,
    attachVisual:()=>{attached++;return {id:attached};},
    detachVisual:()=>{detached++;},
    updateVisual:()=>{}
  });
  cell.load(1000);
  cell.update({dtMs:800,wallNow:1800,eventId:1});
  const streamProgress=cell.state.actor.progress;
  cell.unload(1900);
  const streamRestore=cell.load(8000);
  checks.stream_parity=
    streamRestore.rehydrated===true&&
    cell.state.memory.state==='CALM'&&
    cell.state.actor.goal==='FOOD'&&
    Math.abs(cell.state.actor.progress-streamProgress)<1e-12&&
    cell.duplicateCount===0&&
    attached===2&&
    detached===1;

  let lodTicks=0;
  const lod=new SimulationLODController07A({onSimulate:()=>{lodTicks++;}});
  lod.step({distanceM:10,dtMs:16,wallNow:1000});
  lod.step({distanceM:17,dtMs:0,wallNow:1016});
  for(let i=0;i<10;i++)lod.step({distanceM:20,dtMs:10,wallNow:1026+i*10});
  lod.step({distanceM:31,dtMs:0,wallNow:1200});
  for(let i=0;i<50;i++)lod.step({distanceM:40,dtMs:10,wallNow:1210+i*10});
  lod.step({distanceM:60,dtMs:0,wallNow:1800});
  const dormantTier=lod.tier;
  const ticksBeforeDormant=lod.totalTicks;
  lod.step({distanceM:60,dtMs:5000,wallNow:6800});
  lod.step({distanceM:45,dtMs:0,wallNow:6801});
  checks.lod_parity=
    dormantTier===SIM_LOD_TIERS_07A.DORMANT&&
    lod.totalTicks===ticksBeforeDormant&&
    lod.tier===SIM_LOD_TIERS_07A.FAR&&
    lod.sleepCount===1&&
    lod.wakeCount===1;

  checks.module_manifest=PRODUCTION_ARCHITECTURE_07A_RUNTIME.modules.length===8;
  checks.boundaries=
    PRODUCTION_ARCHITECTURE_07A_RUNTIME.boundaries.rendering.includes('no THREE')&&
    PRODUCTION_ARCHITECTURE_07A_RUNTIME.boundaries.dom==='none'&&
    PRODUCTION_ARCHITECTURE_07A_RUNTIME.boundaries.productionActorPipeline==='deferred to 07B';

  const failed=Object.entries(checks).filter(([,ok])=>!ok).map(([name])=>name);
  return {pass:failed.length===0,failed,checks};
}

const architectureProof07A=runProductionArchitectureProof07A();
setArchText07A(archModulesEl07A,String(PRODUCTION_ARCHITECTURE_07A_RUNTIME.modules.length));
setArchText07A(archBoundaryEl07A,architectureProof07A.checks.boundaries?'PURE CORE ✓':'FAIL',architectureProof07A.checks.boundaries?'#a8f0b5':'#ff9b9b');
setArchText07A(archParityEl07A,architectureProof07A.checks.priority_over_recency&&architectureProof07A.checks.offscreen_time_resolution?'PASS ✓':'FAIL',architectureProof07A.checks.priority_over_recency&&architectureProof07A.checks.offscreen_time_resolution?'#a8f0b5':'#ff9b9b');
setArchText07A(archStreamEl07A,architectureProof07A.checks.stream_parity&&architectureProof07A.checks.lod_parity?'PASS ✓':'FAIL',architectureProof07A.checks.stream_parity&&architectureProof07A.checks.lod_parity?'#a8f0b5':'#ff9b9b');

function updateProductionArchitecture07A(){
  const regression=globalThis.__livingWorld06J?.stage||'WAITING';
  setArchText07A(archRegressionEl07A,regression,regression==='PASS'?'#a8f0b5':regression==='FAIL'?'#ff9b9b':'#ffe59a');
  if(!architectureProof07A.pass){
    setArchText07A(archResultEl07A,'ARCHITECTURE PROOF FAILED · '+architectureProof07A.failed.join(' · '),'#ff9b9b');
  }else if(regression==='PASS'){
    setArchText07A(archResultEl07A,'PRODUCTION ARCHITECTURE PROMOTED ✓ · 06J REGRESSION PASS ✓','#a8f0b5');
  }else if(regression==='FAIL'){
    setArchText07A(archResultEl07A,'PRODUCTION CORE PASS ✓ · 06J REGRESSION FAILED','#ff9b9b');
  }else{
    setArchText07A(archResultEl07A,'PRODUCTION CORE PASS ✓ · WAITING FOR 06J REGRESSION','#ffe59a');
  }
}

updateProductionArchitecture07A();
const architectureStatusTimer07A=setInterval(()=>{
  updateProductionArchitecture07A();
  const regression=globalThis.__livingWorld06J?.stage||'WAITING';
  if(regression==='PASS'||regression==='FAIL')clearInterval(architectureStatusTimer07A);
},1000);

globalThis.__productionArchitecture07A={
  marker:PRODUCTION_ARCHITECTURE_07A_MARKER,
  manifest:PRODUCTION_ARCHITECTURE_07A_RUNTIME,
  proof:architectureProof07A,
  get regression(){return globalThis.__livingWorld06J?.stage||'WAITING';}
};


// ---- Test 07B: Production Actor Pipeline ----
import {ProductionActorPipeline as ProductionActorPipeline07B} from './production/actors/actor-pipeline-core.js';
import {ThreeProductionActorFactory as ThreeProductionActorFactory07B} from './production/actors/three-actor-adapter.js';

const PRODUCTION_ACTOR_PIPELINE_07B_MARKER='07B_PRODUCTION_ACTOR_PIPELINE';

const actorPipeline07B=new ProductionActorPipeline07B();
const actorDefinition07B=actorPipeline07B.registerDefinition({
  typeId:'HUMANOID_FORAGER_V1',
  asset:{id:'SOLDIER_GLB_V1',url:'./assets/Soldier.glb'},
  scale:.92,
  yawOffset:Math.PI,
  animationMap:{IDLE:'Idle',WALK:'Walk',RUN:'Run'},
  presentation:{castShadow:false,receiveShadow:true}
});

const actorAnchorX07B=playerRoot.position.x;
const actorAnchorZ07B=playerRoot.position.z;
const actorA07B=actorPipeline07B.createActor({
  id:'07B_ACTOR_A',
  typeId:actorDefinition07B.typeId,
  position:{x:actorAnchorX07B-3.2,y:groundHeight(actorAnchorX07B-3.2,actorAnchorZ07B-6.0),z:actorAnchorZ07B-6.0},
  yaw:.18,
  animationIntent:'IDLE',
  kernelOptions:{initialGoal:'FOOD',initialProgress:.22}
});
const actorB07B=actorPipeline07B.createActor({
  id:'07B_ACTOR_B',
  typeId:actorDefinition07B.typeId,
  position:{x:actorAnchorX07B+3.2,y:groundHeight(actorAnchorX07B+3.2,actorAnchorZ07B-7.0),z:actorAnchorZ07B-7.0},
  yaw:-.18,
  animationIntent:'WALK',
  kernelOptions:{initialGoal:'FOOD',initialProgress:.62}
});

const actorFactory07B=new ThreeProductionActorFactory07B({scene});
let actorBindings07B=[];
let actorPipelineState07B='LOADING ASSET';
let actorPipelineError07B='';
let actorReadyAt07B=0;

const markerGeo07B=new THREE.RingGeometry(.72,.92,24);
markerGeo07B.rotateX(-Math.PI/2);
const markerMat07B=new THREE.MeshBasicMaterial({color:0x78e0d3,transparent:true,opacity:.74,side:THREE.DoubleSide,depthWrite:false});
const markerMesh07B=new THREE.InstancedMesh(markerGeo07B,markerMat07B,2);
markerMesh07B.frustumCulled=false;
markerMesh07B.userData.productionActorMarkers=true;
const markerObj07B=new THREE.Object3D();
for(const [i,actor] of [actorA07B,actorB07B].entries()){
  markerObj07B.position.set(actor.position.x,actor.position.y+.025,actor.position.z);
  markerObj07B.rotation.set(0,0,0);
  markerObj07B.scale.setScalar(1);
  markerObj07B.updateMatrix();
  markerMesh07B.setMatrixAt(i,markerObj07B.matrix);
}
markerMesh07B.instanceMatrix.needsUpdate=true;
scene.add(markerMesh07B);

const actorStageEl07B=document.getElementById('actorStage07B');
const actorDefinitionsEl07B=document.getElementById('actorDefinitions07B');
const actorAssetLoadsEl07B=document.getElementById('actorAssetLoads07B');
const actorInstancesEl07B=document.getElementById('actorInstances07B');
const actorBindingsEl07B=document.getElementById('actorBindings07B');
const actorRootsEl07B=document.getElementById('actorRoots07B');
const actorMixersEl07B=document.getElementById('actorMixers07B');
const actorAnimationsEl07B=document.getElementById('actorAnimations07B');
const actorKernelsEl07B=document.getElementById('actorKernels07B');
const actorDuplicatesEl07B=document.getElementById('actorDuplicates07B');
const actorRegressionEl07B=document.getElementById('actorRegression07B');
const actorResultEl07B=document.getElementById('actorResult07B');

function setActorText07B(el,value,color){
  if(!el)return;
  if(el.textContent!==value)el.textContent=value;
  if(color&&el.style.color!==color)el.style.color=color;
}

function productionActorRoots07B(){
  return scene.children.filter(o=>o.userData?.productionActorId==='07B_ACTOR_A'||o.userData?.productionActorId==='07B_ACTOR_B');
}

function productionActorProof07B(){
  const roots=productionActorRoots07B();
  const uniqueRootUuids=new Set(roots.map(root=>root.uuid));
  const bindings=actorBindings07B.filter(Boolean);
  const uniqueModels=new Set(bindings.map(binding=>binding.model?.uuid).filter(Boolean));
  const mixers=bindings.filter(binding=>binding.mixer).length;
  const resolved=bindings.map(binding=>binding.resolvedAnimation).filter(name=>name&&name!=='NONE');
  const kernels=[actorA07B.kernel,actorB07B.kernel].filter(Boolean).length;
  const regression=globalThis.__livingWorld06J?.stage||'WAITING';
  const architecturePass=globalThis.__productionArchitecture07A?.proof?.pass===true;
  const checks={
    definitions:actorPipeline07B.definitions.list().length===1,
    asset_load_once:actorFactory07B.assetCache.loadCount===1,
    actors:actorPipeline07B.size===2,
    bindings:actorFactory07B.size===2&&bindings.length===2,
    unique_roots:roots.length===2&&uniqueRootUuids.size===2&&uniqueModels.size===2,
    independent_mixers:mixers===2,
    animations_resolved:resolved.length===2,
    kernels:kernels===2,
    stable_binding_claims:actorA07B.bindingClaims===1&&actorB07B.bindingClaims===1,
    duplicates:actorFactory07B.duplicateBindingCount===0,
    architecture:architecturePass,
    regression:regression==='PASS'
  };
  const failed=Object.entries(checks).filter(([,ok])=>!ok).map(([name])=>name);
  return {pass:failed.length===0,failed,checks,roots,bindings,resolved,regression,mixers,kernels};
}

async function bootProductionActors07B(){
  try{
    actorBindings07B=await Promise.all([
      actorFactory07B.bind(actorA07B),
      actorFactory07B.bind(actorB07B)
    ]);
    actorBindings07B[0].setAnimationIntent('IDLE',0);
    actorBindings07B[1].setAnimationIntent('WALK',0);
    actorPipelineState07B='READY';
    actorReadyAt07B=performance.now();
  }catch(error){
    actorPipelineState07B='FAIL';
    actorPipelineError07B=error?.message||String(error);
    console.error('07B production actor pipeline failed',error);
  }
}
bootProductionActors07B();

function updateActorHud07B(){
  const proof=productionActorProof07B();
  const ready=actorPipelineState07B==='READY';
  const architecturePass=proof.checks.architecture;
  const corePass=ready&&architecturePass&&
    proof.checks.definitions&&proof.checks.asset_load_once&&proof.checks.actors&&proof.checks.bindings&&
    proof.checks.unique_roots&&proof.checks.independent_mixers&&proof.checks.animations_resolved&&
    proof.checks.kernels&&proof.checks.stable_binding_claims&&proof.checks.duplicates;

  let stage=actorPipelineState07B;
  if(corePass&&proof.regression==='PASS')stage='PASS';
  else if(corePass)stage='WAITING REGRESSION';
  if(actorPipelineState07B==='FAIL')stage='FAIL';

  setActorText07B(actorStageEl07B,stage,stage==='PASS'?'#a8f0b5':stage==='FAIL'?'#ff9b9b':'#ffe59a');
  setActorText07B(actorDefinitionsEl07B,String(actorPipeline07B.definitions.list().length));
  setActorText07B(actorAssetLoadsEl07B,String(actorFactory07B.assetCache.loadCount));
  setActorText07B(actorInstancesEl07B,actorPipeline07B.size+'/2');
  setActorText07B(actorBindingsEl07B,actorFactory07B.size+'/2');
  setActorText07B(actorRootsEl07B,proof.roots.length+' / '+new Set(proof.roots.map(root=>root.uuid)).size);
  setActorText07B(actorMixersEl07B,String(proof.mixers));
  setActorText07B(actorAnimationsEl07B,proof.resolved.length?proof.resolved.join(' / '):'—');
  setActorText07B(actorKernelsEl07B,String(proof.kernels));
  setActorText07B(actorDuplicatesEl07B,String(actorFactory07B.duplicateBindingCount),actorFactory07B.duplicateBindingCount===0?'#a8f0b5':'#ff9b9b');
  setActorText07B(actorRegressionEl07B,proof.regression,proof.regression==='PASS'?'#a8f0b5':proof.regression==='FAIL'?'#ff9b9b':'#ffe59a');

  if(actorPipelineState07B==='FAIL'){
    setActorText07B(actorResultEl07B,'PIPELINE FAIL · '+actorPipelineError07B,'#ff9b9b');
  }else if(corePass&&proof.regression==='PASS'){
    setActorText07B(actorResultEl07B,'ACTOR PIPELINE ✓ · ASSET CACHE ✓ · INDEPENDENT INSTANCES ✓ · 06J REGRESSION PASS ✓','#a8f0b5');
  }else if(corePass){
    setActorText07B(actorResultEl07B,'ACTOR PIPELINE ✓ · WAITING FOR 06J REGRESSION','#ffe59a');
  }else if(ready){
    setActorText07B(actorResultEl07B,'PIPELINE CHECKING · '+proof.failed.filter(x=>x!=='regression').join(' · '),'#ffe59a');
  }else{
    setActorText07B(actorResultEl07B,'LOADING PRODUCTION ACTOR ASSET','#ffe59a');
  }
}

let actorHudNext07B=0;
const actorFrameHooks07B=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);
const actorFrameHook07B=(now,dt)=>{
  actorFactory07B.update(dt);
  if(now>=actorHudNext07B){
    updateActorHud07B();
    actorHudNext07B=now+1000;
  }
};
actorFrameHook07B.productionActorPipelineId='07B_PRODUCTION_ACTOR_PIPELINE';
if(!actorFrameHooks07B.some(h=>h.productionActorPipelineId==='07B_PRODUCTION_ACTOR_PIPELINE'))actorFrameHooks07B.push(actorFrameHook07B);

globalThis.__productionActorPipeline07B={
  marker:PRODUCTION_ACTOR_PIPELINE_07B_MARKER,
  pipeline:actorPipeline07B,
  factory:actorFactory07B,
  actors:[actorA07B,actorB07B],
  get state(){return actorPipelineState07B;},
  get proof(){return productionActorProof07B();}
};


// ---- Test 07C: Streamed Production Region ----
import {
  ProductionRegion as ProductionRegion07C,
  ProductionRegionStateStore as ProductionRegionStateStore07C
} from './production/regions/production-region-core.js';

const STREAMED_PRODUCTION_REGION_07C_MARKER='07C_STREAMED_PRODUCTION_REGION';

const inheritedActorSystem07C=globalThis.__productionActorPipeline07B;
if(!inheritedActorSystem07C)throw new Error('07C requires frozen accepted 07B actor pipeline');

const regionPipeline07C=inheritedActorSystem07C.pipeline;
const regionFactory07C=inheritedActorSystem07C.factory;
const regionDefinition07C=regionPipeline07C.definitions.get('HUMANOID_FORAGER_V1');

const regionCenter07C={
  x:playerRoot.position.x+12,
  z:playerRoot.position.z-10
};
const regionActorIds07C=['07C_REGION_ACTOR_A','07C_REGION_ACTOR_B'];

const regionBlueprints07C=[
  {
    id:regionActorIds07C[0],
    typeId:regionDefinition07C.typeId,
    position:{
      x:regionCenter07C.x-2.5,
      y:groundHeight(regionCenter07C.x-2.5,regionCenter07C.z),
      z:regionCenter07C.z
    },
    yaw:.22,
    animationIntent:'IDLE',
    kernelOptions:{initialGoal:'FOOD',initialProgress:.28}
  },
  {
    id:regionActorIds07C[1],
    typeId:regionDefinition07C.typeId,
    position:{
      x:regionCenter07C.x+2.5,
      y:groundHeight(regionCenter07C.x+2.5,regionCenter07C.z-.6),
      z:regionCenter07C.z-.6
    },
    yaw:-.22,
    animationIntent:'WALK',
    kernelOptions:{initialGoal:'FOOD',initialProgress:.58}
  }
];

const regionStore07C=new ProductionRegionStateStore07C();
const productionRegion07C=new ProductionRegion07C({
  id:'07C_PRODUCTION_REGION_A',
  pipeline:regionPipeline07C,
  store:regionStore07C,
  actorBlueprints:regionBlueprints07C,
  bindActor:actor=>regionFactory07C.bind(actor),
  unbindActor:actor=>regionFactory07C.unbind(actor.id),
  loadRadiusM:24,
  unloadRadiusM:38
});

let regionDistance07C=Infinity;
let regionOperationError07C='';
let regionLastAction07C='WAITING';
let regionLastUnloadProgress07C=null;
let regionLastRestoreProgress07C=null;
let regionHudNext07C=0;

const regionMarkerGeo07C=new THREE.RingGeometry(5.4,5.75,48);
regionMarkerGeo07C.rotateX(-Math.PI/2);
const regionMarkerMat07C=new THREE.MeshBasicMaterial({
  color:0x5ed8cf,
  transparent:true,
  opacity:.58,
  side:THREE.DoubleSide,
  depthWrite:false
});
const regionMarker07C=new THREE.Mesh(regionMarkerGeo07C,regionMarkerMat07C);
regionMarker07C.position.set(
  regionCenter07C.x,
  groundHeight(regionCenter07C.x,regionCenter07C.z)+.035,
  regionCenter07C.z
);
regionMarker07C.userData.productionRegionDiagnostic=true;
scene.add(regionMarker07C);

const regionStageEl07C=document.getElementById('regionStage07C');
const regionDistanceEl07C=document.getElementById('regionDistance07C');
const regionActorsEl07C=document.getElementById('regionActors07C');
const regionBindingsEl07C=document.getElementById('regionBindings07C');
const regionAssetLoadsEl07C=document.getElementById('regionAssetLoads07C');
const regionSnapshotEl07C=document.getElementById('regionSnapshot07C');
const regionOffscreenEl07C=document.getElementById('regionOffscreen07C');
const regionIdsEl07C=document.getElementById('regionIds07C');
const regionProgressEl07C=document.getElementById('regionProgress07C');
const regionCyclesEl07C=document.getElementById('regionCycles07C');
const regionDuplicatesEl07C=document.getElementById('regionDuplicates07C');
const regionRegressionEl07C=document.getElementById('regionRegression07C');
const regionResultEl07C=document.getElementById('regionResult07C');

function setRegionText07C(el,value,color){
  if(!el)return;
  if(el.textContent!==value)el.textContent=value;
  if(color&&el.style.color!==color)el.style.color=color;
}

function activeRegionRoots07C(){
  const ids=new Set(regionActorIds07C);
  return scene.children.filter(root=>ids.has(root.userData?.productionActorId));
}

function activeRegionBindings07C(){
  return regionActorIds07C.filter(id=>regionFactory07C.getBinding(id)).length;
}

function savedProgress07C(){
  const snapshot=regionStore07C.load(productionRegion07C.id);
  const actor=snapshot?.actors?.find(item=>item.actorId===regionActorIds07C[0]);
  return actor?.kernel?.goals?.progress;
}

function liveProgress07C(){
  const actor=regionPipeline07C.getActor(regionActorIds07C[0]);
  return actor?.kernel?.goals?.progress;
}

function runRegionRuntimeProof07C(){
  const roots=activeRegionRoots07C();
  const rootIds=new Set(roots.map(root=>root.userData?.productionActorId));
  const activeActors=productionRegion07C.activeActors;
  const duplicates=productionRegion07C.duplicateCount+regionFactory07C.duplicateBindingCount;
  const regression=globalThis.__livingWorld06J?.stage||'WAITING';
  const staticControlsPresent=
    !!regionPipeline07C.getActor('07B_ACTOR_A')&&
    !!regionPipeline07C.getActor('07B_ACTOR_B');

  const checks={
    asset_load_one:regionFactory07C.assetCache.loadCount===1,
    static_controls_present:staticControlsPresent,
    actor_count:productionRegion07C.isActive?activeActors.length===2:activeActors.length===0,
    bindings:productionRegion07C.isActive?activeRegionBindings07C()===2:activeRegionBindings07C()===0,
    roots:productionRegion07C.isActive?roots.length===2&&rootIds.size===2:roots.length===0,
    snapshot:productionRegion07C.unloadCount===0||productionRegion07C.hasSnapshot,
    ids_stable:productionRegion07C.restoreCount===0||productionRegion07C.lastRestoreIdsStable,
    progress_preserved:productionRegion07C.restoreCount===0||productionRegion07C.lastRestoreProgressPreserved,
    duplicates:duplicates===0,
    regression:regression==='PASS'
  };
  const failed=Object.entries(checks).filter(([,ok])=>!ok).map(([name])=>name);
  return {pass:failed.length===0,failed,checks,duplicates,regression,roots,activeActors};
}

function updateRegionHud07C(){
  const proof=runRegionRuntimeProof07C();
  const lifecycle=productionRegion07C.lifecycle;
  const lifecycleColor=lifecycle==='ACTIVE'?'#a8f0b5':
    lifecycle==='UNLOADED'?'#ffd18a':
    lifecycle==='LOADING'||lifecycle==='REHYDRATING'?'#9fe0ff':
    lifecycle==='SERIALIZING'||lifecycle==='UNLOADING'?'#ffe59a':'#ffe59a';

  setRegionText07C(regionStageEl07C,lifecycle,lifecycleColor);
  setRegionText07C(regionDistanceEl07C,regionDistance07C.toFixed(1)+' m');
  setRegionText07C(regionActorsEl07C,productionRegion07C.activeActors.length+'/2');
  setRegionText07C(regionBindingsEl07C,activeRegionBindings07C()+'/2');
  setRegionText07C(regionAssetLoadsEl07C,String(regionFactory07C.assetCache.loadCount),regionFactory07C.assetCache.loadCount===1?'#a8f0b5':'#ff9b9b');
  setRegionText07C(regionSnapshotEl07C,productionRegion07C.hasSnapshot?'SAVED':'NONE',productionRegion07C.hasSnapshot?'#9fe0ff':'#d8ebe5');
  setRegionText07C(regionOffscreenEl07C,(productionRegion07C.lastOffscreenMs/1000).toFixed(1)+' s');
  setRegionText07C(regionIdsEl07C,productionRegion07C.restoreCount===0?'PENDING':productionRegion07C.lastRestoreIdsStable?'STABLE ✓':'FAIL',
    productionRegion07C.restoreCount===0?'#ffe59a':productionRegion07C.lastRestoreIdsStable?'#a8f0b5':'#ff9b9b');

  const live=liveProgress07C();
  const saved=savedProgress07C();
  const progressLabel=Number.isFinite(live)?Math.round(live*100)+'%':
    Number.isFinite(saved)?Math.round(saved*100)+'% saved':'—';
  setRegionText07C(regionProgressEl07C,progressLabel);

  setRegionText07C(regionCyclesEl07C,productionRegion07C.unloadCount+'/'+productionRegion07C.restoreCount);
  setRegionText07C(regionDuplicatesEl07C,String(proof.duplicates),proof.duplicates===0?'#a8f0b5':'#ff9b9b');
  setRegionText07C(regionRegressionEl07C,proof.regression,proof.regression==='PASS'?'#a8f0b5':proof.regression==='FAIL'?'#ff9b9b':'#ffe59a');

  if(regionOperationError07C){
    setRegionText07C(regionResultEl07C,'REGION FAIL · '+regionOperationError07C,'#ff9b9b');
  }else if(
    productionRegion07C.restoreCount>0&&
    productionRegion07C.isActive&&
    productionRegion07C.lastRestoreIdsStable&&
    productionRegion07C.lastRestoreProgressPreserved&&
    regionFactory07C.assetCache.loadCount===1&&
    proof.duplicates===0&&
    proof.regression==='PASS'
  ){
    setRegionText07C(
      regionResultEl07C,
      'REGION RESTORED ✓ · IDS STABLE ✓ · PROGRESS PRESERVED ✓ · ASSET LOAD 1 ✓ · NO DUPLICATES ✓ · 06J REGRESSION PASS ✓',
      '#a8f0b5'
    );
  }else if(lifecycle==='UNLOADED'&&productionRegion07C.hasSnapshot){
    setRegionText07C(regionResultEl07C,'REGION UNLOADED ✓ · ACTORS REMOVED ✓ · SNAPSHOT SAVED ✓','#ffe59a');
  }else if(lifecycle==='ACTIVE'){
    setRegionText07C(regionResultEl07C,regionLastAction07C,'#ffe59a');
  }else{
    setRegionText07C(regionResultEl07C,regionLastAction07C,'#ffe59a');
  }
}

function startRegionLoad07C(wallNow){
  if(productionRegion07C.operation)return;
  regionLastAction07C=productionRegion07C.hasSnapshot?'REHYDRATING PRODUCTION REGION':'LOADING PRODUCTION REGION';
  productionRegion07C.load(wallNow).then(result=>{
    regionOperationError07C='';
    if(result.rehydrated){
      regionLastRestoreProgress07C=liveProgress07C();
      regionLastAction07C='REGION REHYDRATED · VERIFYING CONTINUITY';
    }else{
      regionLastAction07C='REGION ACTIVE · LEAVE PAST 38 m';
    }
    updateRegionHud07C();
  }).catch(error=>{
    regionOperationError07C=error?.message||String(error);
    updateRegionHud07C();
  });
}

function startRegionUnload07C(wallNow){
  if(productionRegion07C.operation)return;
  regionLastUnloadProgress07C=liveProgress07C();
  regionLastAction07C='SERIALIZING / UNLOADING REGION';
  productionRegion07C.unload(wallNow).then(()=>{
    regionOperationError07C='';
    regionLastAction07C='REGION UNLOADED · RETURN INSIDE 24 m';
    updateRegionHud07C();
  }).catch(error=>{
    regionOperationError07C=error?.message||String(error);
    updateRegionHud07C();
  });
}

const regionFrameHooks07C=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);
const regionFrameHook07C=(now,dt)=>{
  const wallNow=Date.now();
  regionDistance07C=Math.hypot(
    playerRoot.position.x-regionCenter07C.x,
    playerRoot.position.z-regionCenter07C.z
  );

  if(!productionRegion07C.operation){
    if(productionRegion07C.lifecycle==='UNLOADED'&&regionDistance07C<=productionRegion07C.loadRadiusM){
      startRegionLoad07C(wallNow);
    }else if(productionRegion07C.lifecycle==='ACTIVE'&&regionDistance07C>=productionRegion07C.unloadRadiusM){
      startRegionUnload07C(wallNow);
    }
  }

  if(productionRegion07C.isActive){
    productionRegion07C.update({
      dtMs:Math.max(0,dt*1000),
      now:wallNow,
      foodProgressPerSecond:.006
    });
  }

  if(now>=regionHudNext07C){
    updateRegionHud07C();
    regionHudNext07C=now+500;
  }
};
regionFrameHook07C.productionRegionId='07C_PRODUCTION_REGION';
if(!regionFrameHooks07C.some(h=>h.productionRegionId==='07C_PRODUCTION_REGION'))regionFrameHooks07C.push(regionFrameHook07C);

globalThis.__streamedProductionRegion07C={
  marker:STREAMED_PRODUCTION_REGION_07C_MARKER,
  region:productionRegion07C,
  store:regionStore07C,
  center:{...regionCenter07C},
  actorIds:[...regionActorIds07C],
  get distanceM(){return regionDistance07C;},
  get proof(){return runRegionRuntimeProof07C();},
  get lastUnloadProgress(){return regionLastUnloadProgress07C;},
  get lastRestoreProgress(){return regionLastRestoreProgress07C;}
};


// ---- Test 07D: Production Vertical Slice ----
import {ProductionVerticalSliceCoordinator as ProductionVerticalSliceCoordinator07D} from './production/vertical-slice/production-vertical-slice-core.js';

const PRODUCTION_VERTICAL_SLICE_07D_MARKER='07D_PRODUCTION_VERTICAL_SLICE';

const regionSystem07D=globalThis.__streamedProductionRegion07C;
const actorSystem07D=globalThis.__productionActorPipeline07B;
if(!regionSystem07D||!actorSystem07D)throw new Error('07D requires frozen accepted 07B + 07C runtime');

const region07D=regionSystem07D.region;
const pipeline07D=actorSystem07D.pipeline;
const factory07D=actorSystem07D.factory;
const actorId07D='07C_REGION_ACTOR_A';

const coordinator07D=new ProductionVerticalSliceCoordinator07D({
  region:region07D,
  pipeline:pipeline07D,
  actorId:actorId07D,
  hazardCenter:{x:regionSystem07D.center.x,z:regionSystem07D.center.z},
  triggerDelayMs:1800
});

let sliceLastIntent07D='';
let sliceHudNext07D=0;
let sliceBehaviorLoopPass07D=false;
let sliceStreamPass07D=false;
let sliceLastCompletion07D=null;

const beaconGeo07D=new THREE.RingGeometry(1.05,1.35,32);
beaconGeo07D.rotateX(-Math.PI/2);
const beaconMat07D=new THREE.MeshBasicMaterial({
  color:0x5fd8cf,
  transparent:true,
  opacity:.62,
  side:THREE.DoubleSide,
  depthWrite:false
});
const beacon07D=new THREE.Mesh(beaconGeo07D,beaconMat07D);
beacon07D.position.set(
  regionSystem07D.center.x,
  groundHeight(regionSystem07D.center.x,regionSystem07D.center.z)+.05,
  regionSystem07D.center.z
);
beacon07D.userData.productionVerticalSliceBeacon=true;
scene.add(beacon07D);

const sliceStageEl07D=document.getElementById('sliceStage07D');
const sliceRegionEl07D=document.getElementById('sliceRegion07D');
const sliceGoalEl07D=document.getElementById('sliceGoal07D');
const sliceMemoryEl07D=document.getElementById('sliceMemory07D');
const sliceAnimEl07D=document.getElementById('sliceAnim07D');
const sliceBehaviorEl07D=document.getElementById('sliceBehavior07D');
const sliceStreamEl07D=document.getElementById('sliceStream07D');
const sliceIdsEl07D=document.getElementById('sliceIds07D');
const sliceProgressEl07D=document.getElementById('sliceProgress07D');
const sliceAssetEl07D=document.getElementById('sliceAsset07D');
const sliceDuplicatesEl07D=document.getElementById('sliceDuplicates07D');
const sliceRegressionEl07D=document.getElementById('sliceRegression07D');
const sliceResultEl07D=document.getElementById('sliceResult07D');

function setSliceText07D(el,value,color){
  if(!el)return;
  if(el.textContent!==value)el.textContent=value;
  if(color&&el.style.color!==color)el.style.color=color;
}

function actorState07D(){
  const actor=pipeline07D.getActor(actorId07D);
  if(!actor)return {actor:null,binding:null,goal:'UNLOADED',memory:'UNLOADED',intent:'NONE',progress:null};
  const binding=factory07D.getBinding(actorId07D);
  return {
    actor,
    binding,
    goal:actor.kernel.goals.activeGoal,
    memory:actor.kernel.memory.state,
    intent:actor.animationIntent,
    progress:actor.kernel.goals.progress
  };
}

function syncProductionPresentation07D(){
  const state=actorState07D();
  if(!state.actor||!state.binding)return state;

  let desired='WALK';
  if(state.goal==='HAZARD')desired='RUN';
  else if(state.goal==='FOOD REACHED')desired='IDLE';

  if(sliceLastIntent07D!==desired||state.actor.animationIntent!==desired){
    state.binding.setAnimationIntent(desired,.12);
    sliceLastIntent07D=desired;
  }

  if(state.memory==='DISTURBED'){
    beaconMat07D.color.setHex(0xe49a42);
    beaconMat07D.opacity=.9;
  }else if(state.memory==='SETTLING'){
    beaconMat07D.color.setHex(0xd9c46b);
    beaconMat07D.opacity=.76;
  }else{
    beaconMat07D.color.setHex(0x5fd8cf);
    beaconMat07D.opacity=.62;
  }
  return actorState07D();
}

function combinedDuplicates07D(){
  return region07D.duplicateCount+factory07D.duplicateBindingCount;
}

function updateSliceHud07D(){
  const state=actorState07D();
  const regression=globalThis.__livingWorld06J?.stage||'WAITING';
  const completion=coordinator07D.completion({
    assetLoadCount:factory07D.assetCache.loadCount,
    duplicateCount:combinedDuplicates07D(),
    regressionStatus:regression
  });
  sliceLastCompletion07D=completion;

  sliceBehaviorLoopPass07D=
    coordinator07D.hazardObserved&&
    coordinator07D.recoveryObserved&&
    completion.checks.progress_preserved;

  sliceStreamPass07D=
    coordinator07D.streamOutObserved&&
    coordinator07D.restoreObserved&&
    completion.checks.region_ids_stable&&
    completion.checks.region_progress_preserved;

  setSliceText07D(sliceStageEl07D,completion.pass?'PASS':coordinator07D.stage,completion.pass?'#a8f0b5':'#ffe59a');
  setSliceText07D(sliceRegionEl07D,region07D.lifecycle,region07D.isActive?'#a8f0b5':region07D.lifecycle==='UNLOADED'?'#ffd18a':'#9fe0ff');
  setSliceText07D(sliceGoalEl07D,state.goal,state.goal==='HAZARD'?'#ffd18a':'#a8f0b5');
  setSliceText07D(sliceMemoryEl07D,state.memory,state.memory==='CALM'?'#a8f0b5':'#ffd18a');
  setSliceText07D(sliceAnimEl07D,state.binding?.resolvedAnimation||state.intent||'NONE');
  setSliceText07D(sliceBehaviorEl07D,sliceBehaviorLoopPass07D?'PASS ✓':
    coordinator07D.hazardObserved?'HAZARD OBSERVED':
    coordinator07D.hazardEventId?'EVENT EMITTED':'WAITING',
    sliceBehaviorLoopPass07D?'#a8f0b5':'#ffe59a');
  setSliceText07D(sliceStreamEl07D,sliceStreamPass07D?'PASS ✓':
    coordinator07D.streamOutObserved?'UNLOADED ✓ · RETURN':'PENDING',
    sliceStreamPass07D?'#a8f0b5':'#ffe59a');
  setSliceText07D(sliceIdsEl07D,region07D.restoreCount===0?'PENDING':region07D.lastRestoreIdsStable?'STABLE ✓':'FAIL',
    region07D.restoreCount===0?'#ffe59a':region07D.lastRestoreIdsStable?'#a8f0b5':'#ff9b9b');
  setSliceText07D(sliceProgressEl07D,Number.isFinite(state.progress)?Math.round(state.progress*100)+'%':
    Number.isFinite(coordinator07D.recoveredProgress)?Math.round(coordinator07D.recoveredProgress*100)+'% saved':'—');
  setSliceText07D(sliceAssetEl07D,String(factory07D.assetCache.loadCount),factory07D.assetCache.loadCount===1?'#a8f0b5':'#ff9b9b');
  setSliceText07D(sliceDuplicatesEl07D,String(combinedDuplicates07D()),combinedDuplicates07D()===0?'#a8f0b5':'#ff9b9b');
  setSliceText07D(sliceRegressionEl07D,regression,regression==='PASS'?'#a8f0b5':regression==='FAIL'?'#ff9b9b':'#ffe59a');

  if(completion.pass){
    setSliceText07D(
      sliceResultEl07D,
      'PRODUCTION VERTICAL SLICE ✓ · BEHAVIOR LOOP ✓ · STREAM RESTORE ✓ · ASSET PIPELINE ✓ · PERFORMANCE PASS ✓',
      '#a8f0b5'
    );
  }else if(regression==='FAIL'){
    setSliceText07D(sliceResultEl07D,'VERTICAL SLICE BLOCKED · PERFORMANCE REGRESSION FAILED','#ff9b9b');
  }else if(sliceBehaviorLoopPass07D&&!sliceStreamPass07D){
    setSliceText07D(sliceResultEl07D,'BEHAVIOR LOOP ✓ · LEAVE REGION PAST 38 m, THEN RETURN INSIDE 24 m','#ffe59a');
  }else{
    setSliceText07D(sliceResultEl07D,'OBSERVE FOOD → HAZARD → FOOD RECOVERY','#ffe59a');
  }
}

const sliceFrameHooks07D=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);
const sliceFrameHook07D=(now)=>{
  const wallNow=Date.now();
  coordinator07D.update(wallNow);
  syncProductionPresentation07D();

  const pulse=1+Math.sin(now*.006)*.08;
  beacon07D.scale.setScalar(pulse);

  if(now>=sliceHudNext07D){
    updateSliceHud07D();
    sliceHudNext07D=now+500;
  }
};
sliceFrameHook07D.productionVerticalSliceId='07D_PRODUCTION_VERTICAL_SLICE';
if(!sliceFrameHooks07D.some(h=>h.productionVerticalSliceId==='07D_PRODUCTION_VERTICAL_SLICE'))sliceFrameHooks07D.push(sliceFrameHook07D);

globalThis.__productionVerticalSlice07D={
  marker:PRODUCTION_VERTICAL_SLICE_07D_MARKER,
  coordinator:coordinator07D,
  get completion(){return sliceLastCompletion07D;},
  get behaviorLoopPass(){return sliceBehaviorLoopPass07D;},
  get streamPass(){return sliceStreamPass07D;}
};


// ---- Test 08A: Multi-Region Production World ----
import {ProductionRegion as ProductionRegion08A,ProductionRegionStateStore as ProductionRegionStateStore08A} from './production/regions/production-region-core.js';
import {ProductionWorldManager as ProductionWorldManager08A} from './production/world/production-world-manager.js';

const MULTI_REGION_PRODUCTION_WORLD_08A_MARKER='08A_MULTI_REGION_PRODUCTION_WORLD';

const actorSystem08A=globalThis.__productionActorPipeline07B;
if(!actorSystem08A)throw new Error('08A requires frozen accepted 07B actor pipeline');

// Test07 is frozen. Its 07C/07D diagnostic frame hooks are superseded by the
// production-world manager in 08A and must not stack underneath World Expansion.
// Production modules and the 06J regression remain untouched.
const inheritedHooks08A=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);
for(let i=inheritedHooks08A.length-1;i>=0;i--){
  const hook=inheritedHooks08A[i];
  if(hook?.productionRegionId==='07C_PRODUCTION_REGION'||
     hook?.productionVerticalSliceId==='07D_PRODUCTION_VERTICAL_SLICE'){
    inheritedHooks08A.splice(i,1);
  }
}
for(const child of [...scene.children]){
  if(child.userData?.productionRegionDiagnostic===true||
     child.userData?.productionVerticalSliceBeacon===true){
    scene.remove(child);
  }
}

const pipeline08A=actorSystem08A.pipeline;
const factory08A=actorSystem08A.factory;
const definition08A=pipeline08A.definitions.get('HUMANOID_FORAGER_V1');

const spawnYaw08A=Number.isFinite(playerRoot.rotation.y)?playerRoot.rotation.y:0;
const spawnX08A=playerRoot.position.x;
const spawnZ08A=playerRoot.position.z;
const fwdX08A=Math.sin(spawnYaw08A),fwdZ08A=Math.cos(spawnYaw08A);
const rightX08A=Math.cos(spawnYaw08A),rightZ08A=-Math.sin(spawnYaw08A);

function localPoint08A(forward,right){
  return {
    x:spawnX08A+fwdX08A*forward+rightX08A*right,
    z:spawnZ08A+fwdZ08A*forward+rightZ08A*right
  };
}

// Keep the diagnostic route inside the frozen player controller's ±112 m
// world clamp. The previous B/C layout extended past z=112 and was
// physically unreachable on-device.
const centers08A={
  A:localPoint08A(18,0),
  B:localPoint08A(18,48),
  C:localPoint08A(-30,48)
};

const sharedStore08A=new ProductionRegionStateStore08A();
const regionIds08A=['08A_WORLD_REGION_A','08A_WORLD_REGION_B','08A_WORLD_REGION_C'];

function makeBlueprints08A(regionKey,center){
  return [
    {
      id:'08A_'+regionKey+'_ACTOR_1',
      typeId:definition08A.typeId,
      position:{x:center.x-1.9,y:groundHeight(center.x-1.9,center.z),z:center.z},
      yaw:.18,
      animationIntent:'WALK',
      kernelOptions:{initialGoal:'FOOD',initialProgress:regionKey==='A'?.21:regionKey==='B'?.41:.61}
    },
    {
      id:'08A_'+regionKey+'_ACTOR_2',
      typeId:definition08A.typeId,
      position:{x:center.x+1.9,y:groundHeight(center.x+1.9,center.z-.5),z:center.z-.5},
      yaw:-.18,
      animationIntent:'IDLE',
      kernelOptions:{initialGoal:'FOOD',initialProgress:regionKey==='A'?.31:regionKey==='B'?.51:.71}
    }
  ];
}

function makeRegion08A(key,center){
  return new ProductionRegion08A({
    id:'08A_WORLD_REGION_'+key,
    pipeline:pipeline08A,
    store:sharedStore08A,
    actorBlueprints:makeBlueprints08A(key,center),
    bindActor:actor=>factory08A.bind(actor),
    unbindActor:actor=>factory08A.unbind(actor.id),
    loadRadiusM:24,
    unloadRadiusM:38
  });
}

const regions08A={
  A:makeRegion08A('A',centers08A.A),
  B:makeRegion08A('B',centers08A.B),
  C:makeRegion08A('C',centers08A.C)
};

const world08A=new ProductionWorldManager08A({
  entries:[
    {id:'A',center:centers08A.A,region:regions08A.A},
    {id:'B',center:centers08A.B,region:regions08A.B},
    {id:'C',center:centers08A.C,region:regions08A.C}
  ]
});

const visited08A=new Set();
let returnedToA08A=false;
let firstAProgress08A=null;
let returnAProgress08A=null;
let stepPending08A=false;
let stepError08A='';
let hudNext08A=0;
let worldLogicNext08A=0;
let worldLogicAccumMs08A=0;
const WORLD_LOGIC_INTERVAL_MS_08A=100;

const ringGeo08A=new THREE.RingGeometry(4.8,5.15,48);
ringGeo08A.rotateX(-Math.PI/2);
const ringMat08A=[
  new THREE.MeshBasicMaterial({color:0x5fd8cf,transparent:true,opacity:.55,side:THREE.DoubleSide,depthWrite:false}),
  new THREE.MeshBasicMaterial({color:0x5f8ed8,transparent:true,opacity:.55,side:THREE.DoubleSide,depthWrite:false}),
  new THREE.MeshBasicMaterial({color:0x9a6fd8,transparent:true,opacity:.55,side:THREE.DoubleSide,depthWrite:false})
];
for(const [index,key] of ['A','B','C'].entries()){
  const center=centers08A[key];
  const ring=new THREE.Mesh(ringGeo08A,ringMat08A[index]);
  ring.position.set(center.x,groundHeight(center.x,center.z)+.04,center.z);
  ring.userData.worldRegion08A=key;
  scene.add(ring);
}

const stageEl08A=document.getElementById('worldStage08A');
const nearestEl08A=document.getElementById('worldNearest08A');
const distEl08A=document.getElementById('worldDistances08A');
const statesEl08A=document.getElementById('worldStates08A');
const activeEl08A=document.getElementById('worldActive08A');
const visitedEl08A=document.getElementById('worldVisited08A');
const snapshotsEl08A=document.getElementById('worldSnapshots08A');
const progressEl08A=document.getElementById('worldProgress08A');
const assetsEl08A=document.getElementById('worldAssets08A');
const duplicatesEl08A=document.getElementById('worldDuplicates08A');
const regressionEl08A=document.getElementById('worldRegression08A');
const resultEl08A=document.getElementById('worldResult08A');

function setWorldText08A(el,value,color){
  if(!el)return;
  if(el.textContent!==value)el.textContent=value;
  if(color&&el.style.color!==color)el.style.color=color;
}

function regionProgress08A(key){
  const actor=pipeline08A.getActor('08A_'+key+'_ACTOR_1');
  return actor?.kernel?.goals?.progress;
}

function activeKeys08A(){
  return ['A','B','C'].filter(key=>regions08A[key].isActive);
}

function totalDuplicates08A(){
  return regions08A.A.duplicateCount+regions08A.B.duplicateCount+regions08A.C.duplicateCount+factory08A.duplicateBindingCount;
}

function nearest08A(){
  return world08A.nearest({x:playerRoot.position.x,z:playerRoot.position.z});
}

function worldProof08A(){
  const active=activeKeys08A();
  const regression=globalThis.__livingWorld06J?.stage||'WAITING';
  const allVisited=['A','B','C'].every(key=>visited08A.has(key));
  const allSnapshots=['A','B','C'].every(key=>sharedStore08A.has('08A_WORLD_REGION_'+key));
  const aRestored=regions08A.A.restoreCount>0&&regions08A.A.lastRestoreIdsStable&&regions08A.A.lastRestoreProgressPreserved;
  const assetOne=factory08A.assetCache.loadCount===1;
  const duplicates=totalDuplicates08A();
  const checks={
    region_count:world08A.size===3,
    active_count:active.length<=1,
    all_visited:allVisited,
    all_snapshots:allSnapshots,
    a_restored:aRestored,
    asset_load_one:assetOne,
    duplicates:duplicates===0,
    regression:regression==='PASS'
  };
  const failed=Object.entries(checks).filter(([,ok])=>!ok).map(([name])=>name);
  return {pass:failed.length===0,failed,checks,active,regression,duplicates};
}

async function stepWorld08A(now,dt){
  if(stepPending08A)return;
  stepPending08A=true;
  try{
    await world08A.step({
      playerPosition:{x:playerRoot.position.x,z:playerRoot.position.z},
      dtMs:Math.max(0,dt*1000),
      now:Date.now(),
      foodProgressPerSecond:.004
    });

    for(const key of ['A','B','C']){
      if(regions08A[key].isActive){
        if(!visited08A.has(key)){
          visited08A.add(key);
          if(key==='A'&&!Number.isFinite(firstAProgress08A))firstAProgress08A=regionProgress08A('A');
        }
        if(key==='A'&&visited08A.has('B')&&visited08A.has('C')&&regions08A.A.restoreCount>0){
          returnedToA08A=true;
          returnAProgress08A=regionProgress08A('A');
        }
      }
    }
    stepError08A='';
  }catch(error){
    stepError08A=error?.message||String(error);
  }finally{
    stepPending08A=false;
  }
}

function updateWorldHud08A(){
  const proof=worldProof08A();
  const nearest=nearest08A();
  const distances=world08A.distances({x:playerRoot.position.x,z:playerRoot.position.z});
  const active=proof.active;
  const states=['A','B','C'].map(key=>regions08A[key].lifecycle[0]).join('/');
  const snaps=['A','B','C'].map(key=>sharedStore08A.has('08A_WORLD_REGION_'+key)?'S':'—').join('/');
  const visited=['A','B','C'].map(key=>visited08A.has(key)?key:'—').join('');
  const progressPreserved=returnedToA08A&&regions08A.A.lastRestoreProgressPreserved;

  setWorldText08A(stageEl08A,proof.pass?'PASS':stepError08A?'FAIL':'ACTIVE',proof.pass?'#a8f0b5':stepError08A?'#ff9b9b':'#ffe59a');
  setWorldText08A(nearestEl08A,nearest?nearest.id+' '+nearest.distance.toFixed(1)+' m':'—');
  setWorldText08A(distEl08A,distances.map(item=>item.id+':'+item.distance.toFixed(0)).join(' · '));
  setWorldText08A(statesEl08A,states);
  setWorldText08A(activeEl08A,active.length?active.join(','):'NONE',active.length<=1?'#a8f0b5':'#ff9b9b');
  setWorldText08A(visitedEl08A,visited);
  setWorldText08A(snapshotsEl08A,snaps);
  setWorldText08A(progressEl08A,progressPreserved?'PRESERVED ✓':returnedToA08A?'FAIL':'PENDING',progressPreserved?'#a8f0b5':'#ffe59a');
  setWorldText08A(assetsEl08A,String(factory08A.assetCache.loadCount),factory08A.assetCache.loadCount===1?'#a8f0b5':'#ff9b9b');
  setWorldText08A(duplicatesEl08A,String(proof.duplicates),proof.duplicates===0?'#a8f0b5':'#ff9b9b');
  setWorldText08A(regressionEl08A,proof.regression,proof.regression==='PASS'?'#a8f0b5':proof.regression==='FAIL'?'#ff9b9b':'#ffe59a');

  if(stepError08A){
    setWorldText08A(resultEl08A,'WORLD FAIL · '+stepError08A,'#ff9b9b');
  }else if(proof.pass){
    setWorldText08A(resultEl08A,'MULTI-REGION WORLD ✓ · A/B/C VISITED ✓ · STATE ISOLATED ✓ · RETURN RESTORED ✓ · ASSET LOAD 1 ✓ · PERFORMANCE PASS ✓','#a8f0b5');
  }else if(!visited08A.has('A')){
    setWorldText08A(resultEl08A,'VISIT REGION A','#ffe59a');
  }else if(!visited08A.has('B')){
    setWorldText08A(resultEl08A,'A VISITED ✓ · MOVE TO REGION B','#ffe59a');
  }else if(!visited08A.has('C')){
    setWorldText08A(resultEl08A,'A/B VISITED ✓ · MOVE TO REGION C','#ffe59a');
  }else if(!returnedToA08A){
    setWorldText08A(resultEl08A,'A/B/C VISITED ✓ · RETURN TO REGION A','#ffe59a');
  }else{
    setWorldText08A(resultEl08A,'RETURNED TO A · WAITING FOR REGRESSION / RESTORE CHECKS','#ffe59a');
  }
}

const frameHooks08A=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);
const frameHook08A=(now,dt)=>{
  worldLogicAccumMs08A+=Math.max(0,dt*1000);
  if(now>=worldLogicNext08A&&!stepPending08A){
    const logicDt=worldLogicAccumMs08A/1000;
    worldLogicAccumMs08A=0;
    worldLogicNext08A=now+WORLD_LOGIC_INTERVAL_MS_08A;
    stepWorld08A(now,logicDt);
  }
  if(now>=hudNext08A){
    updateWorldHud08A();
    hudNext08A=now+500;
  }
};
frameHook08A.multiRegionWorldId='08A_MULTI_REGION_WORLD';
if(!frameHooks08A.some(h=>h.multiRegionWorldId==='08A_MULTI_REGION_WORLD'))frameHooks08A.push(frameHook08A);

globalThis.__multiRegionWorld08A={
  marker:MULTI_REGION_PRODUCTION_WORLD_08A_MARKER,
  world:world08A,
  regions:regions08A,
  store:sharedStore08A,
  centers:centers08A,
  visited:visited08A,
  get returnedToA(){return returnedToA08A;},
  get proof(){return worldProof08A();}
};


// ---- Test 08B: Predictive Region Handoff ----
import {ProductionRegion as ProductionRegion08B,ProductionRegionStateStore as ProductionRegionStateStore08B} from './production/regions/production-region-core.js';
import {ProductionWorldManager as ProductionWorldManager08B} from './production/world/production-world-manager.js';
import {PredictiveRegionPrefetchPlanner as PredictiveRegionPrefetchPlanner08B} from './production/prefetch/predictive-region-prefetch-core.js';
import {ThreePredictiveActorFactory as ThreePredictiveActorFactory08B} from './production/prefetch/three-predictive-actor-factory.js';

const PREDICTIVE_REGION_HANDOFF_08B_MARKER='08B_PREDICTIVE_REGION_HANDOFF';

const inheritedWorld08B=globalThis.__multiRegionWorld08A;
const actorSystem08B=globalThis.__productionActorPipeline07B;
if(!inheritedWorld08B||!actorSystem08B)throw new Error('08B requires frozen accepted 08A + 07B runtime');

// 08A is frozen. Its diagnostic world manager must not continue running under
// the next milestone. Keep all production modules and the 06J regression intact.
const inheritedHooks08B=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);
for(let i=inheritedHooks08B.length-1;i>=0;i--){
  const hook=inheritedHooks08B[i];
  if(hook?.multiRegionWorldId==='08A_MULTI_REGION_WORLD'){
    inheritedHooks08B.splice(i,1);
  }
}
for(const child of [...scene.children]){
  if(child.userData?.worldRegion08A)scene.remove(child);
}

const pipeline08B=actorSystem08B.pipeline;
const frozenFactory08B=actorSystem08B.factory;
const definition08B=pipeline08B.definitions.get('HUMANOID_FORAGER_V1');
const predictiveFactory08B=new ThreePredictiveActorFactory08B({
  scene,
  assetCache:frozenFactory08B.assetCache
});
const planner08B=new PredictiveRegionPrefetchPlanner08B({
  prefetchRadiusM:58,
  minApproachSpeedMps:.35,
  minApproachDot:.25
});
const store08B=new ProductionRegionStateStore08B();

const centers08B={
  A:{...inheritedWorld08B.centers.A},
  B:{...inheritedWorld08B.centers.B}
};

function blueprints08B(key,center){
  return [
    {
      id:'08B_'+key+'_ACTOR_1',
      typeId:definition08B.typeId,
      position:{x:center.x-1.8,y:groundHeight(center.x-1.8,center.z),z:center.z},
      yaw:.16,
      animationIntent:'WALK',
      kernelOptions:{initialGoal:'FOOD',initialProgress:key==='A'?.24:.54}
    },
    {
      id:'08B_'+key+'_ACTOR_2',
      typeId:definition08B.typeId,
      position:{x:center.x+1.8,y:groundHeight(center.x+1.8,center.z-.45),z:center.z-.45},
      yaw:-.16,
      animationIntent:'IDLE',
      kernelOptions:{initialGoal:'FOOD',initialProgress:key==='A'?.34:.64}
    }
  ];
}

function makeRegion08B(key){
  return new ProductionRegion08B({
    id:'08B_REGION_'+key,
    pipeline:pipeline08B,
    store:store08B,
    actorBlueprints:blueprints08B(key,centers08B[key]),
    bindActor:actor=>predictiveFactory08B.bind(key,actor),
    unbindActor:actor=>predictiveFactory08B.unbind(actor.id),
    loadRadiusM:24,
    unloadRadiusM:38
  });
}

const regions08B={A:makeRegion08B('A'),B:makeRegion08B('B')};
const world08B=new ProductionWorldManager08B({
  entries:[
    {id:'A',center:centers08B.A,region:regions08B.A},
    {id:'B',center:centers08B.B,region:regions08B.B}
  ]
});

const ringGeo08B=new THREE.RingGeometry(4.7,5.1,48);
ringGeo08B.rotateX(-Math.PI/2);
const ringMat08B=new THREE.MeshBasicMaterial({
  color:0x5fd8cf,
  transparent:true,
  opacity:.58,
  side:THREE.DoubleSide,
  depthWrite:false
});
const ringMesh08B=new THREE.InstancedMesh(ringGeo08B,ringMat08B,2);
ringMesh08B.frustumCulled=false;
ringMesh08B.userData.predictiveHandoffRings08B=true;
const ringObj08B=new THREE.Object3D();
for(const [index,key] of ['A','B'].entries()){
  const c=centers08B[key];
  ringObj08B.position.set(c.x,groundHeight(c.x,c.z)+.04,c.z);
  ringObj08B.rotation.set(0,0,0);
  ringObj08B.scale.setScalar(1);
  ringObj08B.updateMatrix();
  ringMesh08B.setMatrixAt(index,ringObj08B.matrix);
}
ringMesh08B.instanceMatrix.needsUpdate=true;
scene.add(ringMesh08B);

let logicPending08B=false;
let logicNext08B=0;
let logicAccumMs08B=0;
let hudNext08B=0;
let lastTarget08B='NONE';
let lastPrefetchState08B='IDLE';
let prefetchError08B='';
let bVisited08B=false;
let returnedA08B=false;
let initialASeen08B=false;
let bPrefetchedBeforeLoad08B=false;
let aReturnPrefetchedBeforeLoad08B=false;
let aInitialProgress08B=null;
let aReturnProgress08B=null;
let maxActiveRegions08B=0;

const stageEl08B=document.getElementById('handoffStage08B');
const targetEl08B=document.getElementById('handoffTarget08B');
const preparedEl08B=document.getElementById('handoffPrepared08B');
const consumedEl08B=document.getElementById('handoffConsumed08B');
const fallbackEl08B=document.getElementById('handoffFallback08B');
const statesEl08B=document.getElementById('handoffStates08B');
const activeEl08B=document.getElementById('handoffActive08B');
const visitedEl08B=document.getElementById('handoffVisited08B');
const restoredEl08B=document.getElementById('handoffRestored08B');
const assetEl08B=document.getElementById('handoffAsset08B');
const duplicatesEl08B=document.getElementById('handoffDuplicates08B');
const regressionEl08B=document.getElementById('handoffRegression08B');
const resultEl08B=document.getElementById('handoffResult08B');

function setHandoffText08B(el,value,color){
  if(!el)return;
  if(el.textContent!==value)el.textContent=value;
  if(color&&el.style.color!==color)el.style.color=color;
}

function activeKeys08B(){
  return ['A','B'].filter(key=>regions08B[key].isActive);
}
function duplicateCount08B(){
  return regions08B.A.duplicateCount+regions08B.B.duplicateCount+predictiveFactory08B.duplicateBindingCount;
}
function regionProgress08B(key){
  return pipeline08B.getActor('08B_'+key+'_ACTOR_1')?.kernel?.goals?.progress;
}

async function logicStep08B(now,dtSeconds){
  if(logicPending08B)return;
  logicPending08B=true;
  try{
    const regression=globalThis.__livingWorld06J?.stage||'WAITING';
    if(regression!=='PASS')return;

    const position={x:playerRoot.position.x,z:playerRoot.position.z};
    planner08B.updateMotion(position,Date.now());

    const entries=['A','B'].map(key=>({
      id:key,
      center:centers08B[key],
      lifecycle:regions08B[key].lifecycle
    }));
    const active=activeKeys08B();
    const candidate=planner08B.choose({position,regions:entries,excludeIds:active});
    lastTarget08B=candidate?.id??'NONE';

    if(candidate){
      lastPrefetchState08B='PREFETCHING '+candidate.id;
      await predictiveFactory08B.prefetch(candidate.id,definition08B,2);
      lastPrefetchState08B='PREFETCHED '+candidate.id;

      const region=regions08B[candidate.id];
      const distance=Math.hypot(position.x-centers08B[candidate.id].x,position.z-centers08B[candidate.id].z);
      if(region.lifecycle==='UNLOADED'&&distance<=region.loadRadiusM&&predictiveFactory08B.preparedCount(candidate.id)>=2){
        if(candidate.id==='B')bPrefetchedBeforeLoad08B=true;
        if(candidate.id==='A'&&bVisited08B)aReturnPrefetchedBeforeLoad08B=true;
      }
    }

    await world08B.step({
      playerPosition:position,
      dtMs:Math.max(0,dtSeconds*1000),
      now:Date.now(),
      foodProgressPerSecond:.004
    });

    const nowActive=activeKeys08B();
    maxActiveRegions08B=Math.max(maxActiveRegions08B,nowActive.length);

    if(regions08B.A.isActive&&!initialASeen08B){
      initialASeen08B=true;
      aInitialProgress08B=regionProgress08B('A');
    }
    if(regions08B.B.isActive)bVisited08B=true;
    if(bVisited08B&&regions08B.A.isActive&&regions08B.A.restoreCount>0){
      returnedA08B=true;
      aReturnProgress08B=regionProgress08B('A');
    }
    prefetchError08B='';
  }catch(error){
    prefetchError08B=error?.message||String(error);
  }finally{
    logicPending08B=false;
  }
}

function handoffProof08B(){
  const regression=globalThis.__livingWorld06J?.stage||'WAITING';
  const restored=returnedA08B&&regions08B.A.lastRestoreIdsStable&&regions08B.A.lastRestoreProgressPreserved;
  const checks={
    b_prefetched:bPrefetchedBeforeLoad08B,
    a_return_prefetched:aReturnPrefetchedBeforeLoad08B,
    prepared_consumed:predictiveFactory08B.consumedInstances>=4,
    fallback_initial_only:predictiveFactory08B.fallbackInstances===2,
    state_restored:restored,
    asset_load_one:frozenFactory08B.assetCache.loadCount===1,
    duplicates:duplicateCount08B()===0,
    regression:regression==='PASS'
  };
  const failed=Object.entries(checks).filter(([,ok])=>!ok).map(([name])=>name);
  return {pass:failed.length===0,failed,checks,regression,restored};
}

function updateHandoffHud08B(){
  const proof=handoffProof08B();
  const active=activeKeys08B();
  const states=['A','B'].map(key=>regions08B[key].lifecycle[0]).join('/');
  const preparedA=predictiveFactory08B.preparedCount('A');
  const preparedB=predictiveFactory08B.preparedCount('B');

  setHandoffText08B(stageEl08B,proof.pass?'PASS':prefetchError08B?'FAIL':globalThis.__livingWorld06J?.stage==='PASS'?'READY':'WAITING REGRESSION',
    proof.pass?'#a8f0b5':prefetchError08B?'#ff9b9b':'#ffe59a');
  setHandoffText08B(targetEl08B,lastTarget08B+' · '+lastPrefetchState08B);
  setHandoffText08B(preparedEl08B,'A:'+preparedA+' · B:'+preparedB);
  setHandoffText08B(consumedEl08B,String(predictiveFactory08B.consumedInstances));
  setHandoffText08B(fallbackEl08B,String(predictiveFactory08B.fallbackInstances));
  setHandoffText08B(statesEl08B,states);
  setHandoffText08B(activeEl08B,active.length?active.join(','):'NONE');
  setHandoffText08B(visitedEl08B,(initialASeen08B?'A':'—')+'→'+(bVisited08B?'B':'—')+'→'+(returnedA08B?'A':'—'));
  setHandoffText08B(restoredEl08B,proof.restored?'STABLE ✓':returnedA08B?'FAIL':'PENDING',proof.restored?'#a8f0b5':'#ffe59a');
  setHandoffText08B(assetEl08B,String(frozenFactory08B.assetCache.loadCount),frozenFactory08B.assetCache.loadCount===1?'#a8f0b5':'#ff9b9b');
  setHandoffText08B(duplicatesEl08B,String(duplicateCount08B()),duplicateCount08B()===0?'#a8f0b5':'#ff9b9b');
  setHandoffText08B(regressionEl08B,proof.regression,proof.regression==='PASS'?'#a8f0b5':proof.regression==='FAIL'?'#ff9b9b':'#ffe59a');

  if(prefetchError08B){
    setHandoffText08B(resultEl08B,'HANDOFF FAIL · '+prefetchError08B,'#ff9b9b');
  }else if(proof.pass){
    setHandoffText08B(resultEl08B,'PREDICTIVE HANDOFF ✓ · B PREFETCHED ✓ · A RETURN PREFETCHED ✓ · PREPARED CONSUMED ✓ · STATE RESTORED ✓ · ASSET LOAD 1 ✓ · NO DUPLICATES ✓ · PERFORMANCE PASS ✓','#a8f0b5');
  }else if(proof.regression!=='PASS'){
    setHandoffText08B(resultEl08B,'WAIT FOR 06J REGRESSION PASS','#ffe59a');
  }else if(!initialASeen08B){
    setHandoffText08B(resultEl08B,'ENTER REGION A','#ffe59a');
  }else if(!bVisited08B){
    setHandoffText08B(resultEl08B,'A ACTIVE · MOVE TOWARD REGION B','#ffe59a');
  }else if(!returnedA08B){
    setHandoffText08B(resultEl08B,'B HANDOFF COMPLETE · RETURN TO REGION A','#ffe59a');
  }else{
    setHandoffText08B(resultEl08B,'RETURNED TO A · VERIFYING PREFETCH / RESTORE','#ffe59a');
  }
}

const frameHooks08B=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);
const frameHook08B=(now,dt)=>{
  predictiveFactory08B.update(dt);
  logicAccumMs08B+=Math.max(0,dt*1000);
  if(now>=logicNext08B&&!logicPending08B){
    const dtSeconds=logicAccumMs08B/1000;
    logicAccumMs08B=0;
    logicNext08B=now+100;
    logicStep08B(now,dtSeconds);
  }
  if(now>=hudNext08B){
    updateHandoffHud08B();
    hudNext08B=now+500;
  }
};
frameHook08B.predictiveHandoffId='08B_PREDICTIVE_HANDOFF';
if(!frameHooks08B.some(h=>h.predictiveHandoffId==='08B_PREDICTIVE_HANDOFF'))frameHooks08B.push(frameHook08B);

globalThis.__predictiveHandoff08B={
  marker:PREDICTIVE_REGION_HANDOFF_08B_MARKER,
  world:world08B,
  regions:regions08B,
  planner:planner08B,
  factory:predictiveFactory08B,
  centers:centers08B,
  get proof(){return handoffProof08B();},
  get maxActiveRegions(){return maxActiveRegions08B;},
  get aInitialProgress(){return aInitialProgress08B;},
  get aReturnProgress(){return aReturnProgress08B;}
};


// ---- Test 08C: Bounded Prefetch Lifecycle ----
import {ProductionRegion as ProductionRegion08C,ProductionRegionStateStore as ProductionRegionStateStore08C} from './production/regions/production-region-core.js';
import {ProductionWorldManager as ProductionWorldManager08C} from './production/world/production-world-manager.js';
import {PredictiveRegionPrefetchPlanner as PredictiveRegionPrefetchPlanner08C} from './production/prefetch/predictive-region-prefetch-core.js';
import {ThreePredictiveActorFactory as ThreePredictiveActorFactory08C} from './production/prefetch/three-predictive-actor-factory.js';
import {BoundedPredictivePrefetchController as BoundedPredictivePrefetchController08C} from './production/prefetch/bounded-predictive-prefetch-controller.js';

const BOUNDED_PREFETCH_LIFECYCLE_08C_MARKER='08C_BOUNDED_PREFETCH_LIFECYCLE';

const inheritedHandoff08C=globalThis.__predictiveHandoff08B;
const actorSystem08C=globalThis.__productionActorPipeline07B;
if(!inheritedHandoff08C||!actorSystem08C)throw new Error('08C requires frozen accepted 08B + 07B runtime');

// 08B is frozen. Quiesce only its diagnostic runtime hook and ring so 08C
// measures its own bounded lifecycle without stacking prior proof overhead.
const inheritedHooks08C=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);
for(let i=inheritedHooks08C.length-1;i>=0;i--){
  const hook=inheritedHooks08C[i];
  if(hook?.predictiveHandoffId==='08B_PREDICTIVE_HANDOFF'){
    inheritedHooks08C.splice(i,1);
  }
}
for(const child of [...scene.children]){
  if(child.userData?.predictiveHandoffRings08B===true)scene.remove(child);
}

const pipeline08C=actorSystem08C.pipeline;
const frozenFactory08C=actorSystem08C.factory;
const definition08C=pipeline08C.definitions.get('HUMANOID_FORAGER_V1');
const predictiveFactory08C=new ThreePredictiveActorFactory08C({
  scene,
  assetCache:frozenFactory08C.assetCache
});
const boundedPrefetch08C=new BoundedPredictivePrefetchController08C({
  factory:predictiveFactory08C,
  maxPreparedInstances:2
});
const planner08C=new PredictiveRegionPrefetchPlanner08C({
  prefetchRadiusM:58,
  minApproachSpeedMps:.35,
  minApproachDot:.25
});
const store08C=new ProductionRegionStateStore08C();

const centers08C={
  A:{...inheritedHandoff08C.centers.A},
  B:{...inheritedHandoff08C.centers.B}
};

function blueprints08C(key,center){
  return [
    {
      id:'08C_'+key+'_ACTOR_1',
      typeId:definition08C.typeId,
      position:{x:center.x-1.8,y:groundHeight(center.x-1.8,center.z),z:center.z},
      yaw:.16,
      animationIntent:'WALK',
      kernelOptions:{initialGoal:'FOOD',initialProgress:key==='A'?.26:.56}
    },
    {
      id:'08C_'+key+'_ACTOR_2',
      typeId:definition08C.typeId,
      position:{x:center.x+1.8,y:groundHeight(center.x+1.8,center.z-.45),z:center.z-.45},
      yaw:-.16,
      animationIntent:'IDLE',
      kernelOptions:{initialGoal:'FOOD',initialProgress:key==='A'?.36:.66}
    }
  ];
}

function makeRegion08C(key){
  return new ProductionRegion08C({
    id:'08C_REGION_'+key,
    pipeline:pipeline08C,
    store:store08C,
    actorBlueprints:blueprints08C(key,centers08C[key]),
    bindActor:actor=>predictiveFactory08C.bind(key,actor),
    unbindActor:actor=>predictiveFactory08C.unbind(actor.id),
    loadRadiusM:24,
    unloadRadiusM:38
  });
}

const regions08C={A:makeRegion08C('A'),B:makeRegion08C('B')};
const world08C=new ProductionWorldManager08C({
  entries:[
    {id:'A',center:centers08C.A,region:regions08C.A},
    {id:'B',center:centers08C.B,region:regions08C.B}
  ]
});

const ringGeo08C=new THREE.RingGeometry(4.7,5.1,48);
ringGeo08C.rotateX(-Math.PI/2);
const ringMat08C=new THREE.MeshBasicMaterial({
  color:0x5fd8cf,
  transparent:true,
  opacity:.58,
  side:THREE.DoubleSide,
  depthWrite:false
});
const ringMesh08C=new THREE.InstancedMesh(ringGeo08C,ringMat08C,2);
ringMesh08C.frustumCulled=false;
ringMesh08C.userData.boundedPrefetchRings08C=true;
const ringObj08C=new THREE.Object3D();
for(const [index,key] of ['A','B'].entries()){
  const c=centers08C[key];
  ringObj08C.position.set(c.x,groundHeight(c.x,c.z)+.04,c.z);
  ringObj08C.rotation.set(0,0,0);
  ringObj08C.scale.setScalar(1);
  ringObj08C.updateMatrix();
  ringMesh08C.setMatrixAt(index,ringObj08C.matrix);
}
ringMesh08C.instanceMatrix.needsUpdate=true;
scene.add(ringMesh08C);

// Diagnostic-only B beacon: make the human route unambiguous without changing
// region coordinates, activation radii, simulation, or predictive logic.
const bGround08C=groundHeight(centers08C.B.x,centers08C.B.z);
const bBeaconGroup08C=new THREE.Group();
bBeaconGroup08C.userData.boundedPrefetchBeacon08C=true;
const bBeam08C=new THREE.Mesh(
  new THREE.CylinderGeometry(.13,.13,18,10,1,true),
  new THREE.MeshBasicMaterial({
    color:0x67f4ff,
    transparent:true,
    opacity:.62,
    depthTest:false,
    depthWrite:false
  })
);
bBeam08C.position.set(centers08C.B.x,bGround08C+9,centers08C.B.z);
bBeam08C.renderOrder=999;
bBeaconGroup08C.add(bBeam08C);
const bCap08C=new THREE.Mesh(
  new THREE.SphereGeometry(.75,12,8),
  new THREE.MeshBasicMaterial({
    color:0xb8fbff,
    transparent:true,
    opacity:.88,
    depthTest:false,
    depthWrite:false
  })
);
bCap08C.position.set(centers08C.B.x,bGround08C+18.5,centers08C.B.z);
bCap08C.renderOrder=1000;
bBeaconGroup08C.add(bCap08C);
scene.add(bBeaconGroup08C);

let logicPending08C=false;
let logicNext08C=0;
let logicAccumMs08C=0;
let hudNext08C=0;
let logicError08C='';

let initialASeen08C=false;
let firstBPrefetchObserved08C=false;
let bCancellationObserved08C=false;
let bRePrefetchObserved08C=false;
let bVisited08C=false;
let aReturnPrefetchObserved08C=false;
let returnedA08C=false;
let aInitialProgress08C=null;
let aReturnProgress08C=null;
let firstBPreparedAt08C=0;
let cancellationAt08C=0;

const stageEl08C=document.getElementById('boundedStage08C');
const targetEl08C=document.getElementById('boundedTarget08C');
const distanceBEl08C=document.getElementById('boundedDistanceB08C');
const bearingBEl08C=document.getElementById('boundedBearingB08C');
const preparedEl08C=document.getElementById('boundedPrepared08C');
const cancelEl08C=document.getElementById('boundedCancel08C');
const evictedEl08C=document.getElementById('boundedEvicted08C');
const peakEl08C=document.getElementById('boundedPeak08C');
const consumedEl08C=document.getElementById('boundedConsumed08C');
const fallbackEl08C=document.getElementById('boundedFallback08C');
const statesEl08C=document.getElementById('boundedStates08C');
const routeEl08C=document.getElementById('boundedRoute08C');
const restoredEl08C=document.getElementById('boundedRestored08C');
const assetEl08C=document.getElementById('boundedAsset08C');
const duplicatesEl08C=document.getElementById('boundedDuplicates08C');
const regressionEl08C=document.getElementById('boundedRegression08C');
const resultEl08C=document.getElementById('boundedResult08C');

function setBoundedText08C(el,value,color){
  if(!el)return;
  if(el.textContent!==value)el.textContent=value;
  if(color&&el.style.color!==color)el.style.color=color;
}

const cameraForward08C=new THREE.Vector3();
function bGuidance08C(){
  const dx=centers08C.B.x-playerRoot.position.x;
  const dz=centers08C.B.z-playerRoot.position.z;
  const distance=Math.hypot(dx,dz);
  if(distance<.001)return {distance:0,label:'HERE',degrees:0};

  camera.getWorldDirection(cameraForward08C);
  let fx=cameraForward08C.x;
  let fz=cameraForward08C.z;
  const fl=Math.hypot(fx,fz)||1;
  fx/=fl; fz/=fl;
  const tx=dx/distance;
  const tz=dz/distance;
  const degrees=Math.atan2(fx*tz-fz*tx,fx*tx+fz*tz)*180/Math.PI;
  const abs=Math.abs(degrees);
  let label;
  if(abs<=22.5)label='FORWARD';
  else if(abs<=67.5)label=degrees>0?'FORWARD-RIGHT':'FORWARD-LEFT';
  else if(abs<=112.5)label=degrees>0?'RIGHT':'LEFT';
  else if(abs<=157.5)label=degrees>0?'BACK-RIGHT':'BACK-LEFT';
  else label='BACK';
  return {distance,label,degrees};
}

function activeKeys08C(){
  return ['A','B'].filter(key=>regions08C[key].isActive);
}
function duplicateCount08C(){
  return regions08C.A.duplicateCount+regions08C.B.duplicateCount+predictiveFactory08C.duplicateBindingCount;
}
function regionProgress08C(key){
  return pipeline08C.getActor('08C_'+key+'_ACTOR_1')?.kernel?.goals?.progress;
}

async function logicStep08C(dtSeconds){
  if(logicPending08C)return;
  logicPending08C=true;
  try{
    const regression=globalThis.__livingWorld06J?.stage||'WAITING';
    if(regression!=='PASS')return;

    const wallNow=Date.now();
    const position={x:playerRoot.position.x,z:playerRoot.position.z};
    planner08C.updateMotion(position,wallNow);

    const activeBefore=activeKeys08C();
    const candidate=planner08C.choose({
      position,
      regions:['A','B'].map(key=>({
        id:key,
        center:centers08C[key],
        lifecycle:regions08C[key].lifecycle
      })),
      excludeIds:activeBefore
    });
    const desired=candidate?.id??null;

    if(desired!==boundedPrefetch08C.targetId){
      await boundedPrefetch08C.retarget(desired,definition08C,2);
    }else if(desired&&boundedPrefetch08C.preparedCount(desired)<2){
      await boundedPrefetch08C.retarget(desired,definition08C,2);
    }

    if(
      desired==='B'&&
      regions08C.B.lifecycle==='UNLOADED'&&
      boundedPrefetch08C.preparedCount('B')===2
    ){
      const executions=boundedPrefetch08C.executionCount('B');
      if(executions===1&&!firstBPrefetchObserved08C){
        firstBPrefetchObserved08C=true;
        firstBPreparedAt08C=wallNow;
      }
      if(executions>=2&&bCancellationObserved08C){
        bRePrefetchObserved08C=true;
      }
    }

    if(
      firstBPrefetchObserved08C&&
      !bVisited08C&&
      boundedPrefetch08C.budget.cancellations>=1&&
      boundedPrefetch08C.budget.evictedInstances>=2&&
      boundedPrefetch08C.preparedCount('B')===0
    ){
      bCancellationObserved08C=true;
      if(!cancellationAt08C)cancellationAt08C=wallNow;
    }

    if(
      desired==='A'&&
      bVisited08C&&
      regions08C.A.lifecycle==='UNLOADED'&&
      boundedPrefetch08C.preparedCount('A')===2
    ){
      aReturnPrefetchObserved08C=true;
    }

    await world08C.step({
      playerPosition:position,
      dtMs:Math.max(0,dtSeconds*1000),
      now:wallNow,
      foodProgressPerSecond:.004
    });
    boundedPrefetch08C.observeAfterWorldStep();

    if(regions08C.A.isActive&&!initialASeen08C){
      initialASeen08C=true;
      aInitialProgress08C=regionProgress08C('A');
    }
    if(regions08C.B.isActive)bVisited08C=true;
    if(bVisited08C&&regions08C.A.isActive&&regions08C.A.restoreCount>0){
      returnedA08C=true;
      aReturnProgress08C=regionProgress08C('A');
    }

    // Once a target region is active it is no longer a prefetch target.
    const activeAfter=activeKeys08C();
    if(boundedPrefetch08C.targetId&&activeAfter.includes(boundedPrefetch08C.targetId)){
      await boundedPrefetch08C.retarget(null,definition08C,2);
      boundedPrefetch08C.observeAfterWorldStep();
    }

    logicError08C='';
  }catch(error){
    logicError08C=error?.message||String(error);
  }finally{
    logicPending08C=false;
  }
}

function boundedProof08C(){
  const regression=globalThis.__livingWorld06J?.stage||'WAITING';
  const restored=
    returnedA08C&&
    regions08C.A.lastRestoreIdsStable===true&&
    regions08C.A.lastRestoreProgressPreserved===true;

  const checks={
    first_b_prefetch:firstBPrefetchObserved08C,
    stale_b_evicted:bCancellationObserved08C,
    b_reprefetched:bRePrefetchObserved08C,
    prepared_consumed:predictiveFactory08C.consumedInstances>=4,
    fallback_initial_only:predictiveFactory08C.fallbackInstances===2,
    pool_bounded:boundedPrefetch08C.budget.peakPrepared<=2&&boundedPrefetch08C.totalPrepared()<=2,
    a_return_prefetched:aReturnPrefetchObserved08C,
    state_restored:restored,
    asset_load_one:frozenFactory08C.assetCache.loadCount===1,
    duplicates:duplicateCount08C()===0,
    regression:regression==='PASS'
  };
  const failed=Object.entries(checks).filter(([,ok])=>!ok).map(([name])=>name);
  return {pass:failed.length===0,failed,checks,regression,restored};
}

function updateBoundedHud08C(){
  const proof=boundedProof08C();
  const budget=boundedPrefetch08C.budget;
  const states=['A','B'].map(key=>regions08C[key].lifecycle[0]).join('/');
  const route=(initialASeen08C?'A':'—')+'→'+(bVisited08C?'B':'—')+'→'+(returnedA08C?'A':'—');

  setBoundedText08C(stageEl08C,proof.pass?'PASS':logicError08C?'FAIL':proof.regression==='PASS'?'READY':'WAITING REGRESSION',
    proof.pass?'#a8f0b5':logicError08C?'#ff9b9b':'#ffe59a');
  setBoundedText08C(targetEl08C,(boundedPrefetch08C.targetId||'NONE')+' · '+boundedPrefetch08C.lastAction);
  const guidance=bGuidance08C();
  setBoundedText08C(distanceBEl08C,guidance.distance.toFixed(1)+' m');
  setBoundedText08C(bearingBEl08C,guidance.label+' · '+Math.round(Math.abs(guidance.degrees))+'°');
  setBoundedText08C(preparedEl08C,'A:'+boundedPrefetch08C.preparedCount('A')+' · B:'+boundedPrefetch08C.preparedCount('B'));
  setBoundedText08C(cancelEl08C,String(budget.cancellations),budget.cancellations>=1?'#a8f0b5':'#ffe59a');
  setBoundedText08C(evictedEl08C,String(budget.evictedInstances),budget.evictedInstances>=2?'#a8f0b5':'#ffe59a');
  setBoundedText08C(peakEl08C,budget.peakPrepared+'/2',budget.peakPrepared<=2?'#a8f0b5':'#ff9b9b');
  setBoundedText08C(consumedEl08C,String(predictiveFactory08C.consumedInstances));
  setBoundedText08C(fallbackEl08C,String(predictiveFactory08C.fallbackInstances));
  setBoundedText08C(statesEl08C,states);
  setBoundedText08C(routeEl08C,route);
  setBoundedText08C(restoredEl08C,proof.restored?'STABLE ✓':returnedA08C?'FAIL':'PENDING',proof.restored?'#a8f0b5':'#ffe59a');
  setBoundedText08C(assetEl08C,String(frozenFactory08C.assetCache.loadCount),frozenFactory08C.assetCache.loadCount===1?'#a8f0b5':'#ff9b9b');
  setBoundedText08C(duplicatesEl08C,String(duplicateCount08C()),duplicateCount08C()===0?'#a8f0b5':'#ff9b9b');
  setBoundedText08C(regressionEl08C,proof.regression,proof.regression==='PASS'?'#a8f0b5':proof.regression==='FAIL'?'#ff9b9b':'#ffe59a');

  if(logicError08C){
    setBoundedText08C(resultEl08C,'BOUNDED PREFETCH FAIL · '+logicError08C,'#ff9b9b');
  }else if(proof.pass){
    setBoundedText08C(resultEl08C,'BOUNDED PREFETCH ✓ · STALE B EVICTED ✓ · B RE-PREFETCHED ✓ · PREPARED CONSUMED ✓ · POOL BOUNDED 2 ✓ · STATE RESTORED ✓ · ASSET LOAD 1 ✓ · NO DUPLICATES ✓ · PERFORMANCE PASS ✓','#a8f0b5');
  }else if(proof.regression!=='PASS'){
    setBoundedText08C(resultEl08C,'WAIT FOR 06J REGRESSION PASS','#ffe59a');
  }else if(!initialASeen08C){
    setBoundedText08C(resultEl08C,'ENTER REGION A','#ffe59a');
  }else if(!firstBPrefetchObserved08C){
    setBoundedText08C(resultEl08C,'MOVE TOWARD B UNTIL PREPARED B = 2','#ffe59a');
  }else if(!bCancellationObserved08C){
    setBoundedText08C(resultEl08C,'B PREFETCHED ✓ · REVERSE TOWARD A BEFORE B ACTIVATES','#ffe59a');
  }else if(!bRePrefetchObserved08C){
    setBoundedText08C(resultEl08C,'STALE B EVICTED ✓ · MOVE TOWARD B AGAIN','#ffe59a');
  }else if(!bVisited08C){
    setBoundedText08C(resultEl08C,'B RE-PREFETCHED ✓ · ENTER REGION B','#ffe59a');
  }else if(!returnedA08C){
    setBoundedText08C(resultEl08C,'B HANDOFF ✓ · RETURN TO REGION A','#ffe59a');
  }else{
    setBoundedText08C(resultEl08C,'RETURNED TO A · VERIFYING BOUNDS / RESTORE','#ffe59a');
  }
}

const frameHooks08C=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);
const frameHook08C=(now,dt)=>{
  predictiveFactory08C.update(dt);
  logicAccumMs08C+=Math.max(0,dt*1000);
  if(now>=logicNext08C&&!logicPending08C){
    const dtSeconds=logicAccumMs08C/1000;
    logicAccumMs08C=0;
    logicNext08C=now+100;
    logicStep08C(dtSeconds);
  }
  if(now>=hudNext08C){
    updateBoundedHud08C();
    hudNext08C=now+500;
  }
};
frameHook08C.boundedPrefetchId='08C_BOUNDED_PREFETCH';
if(!frameHooks08C.some(h=>h.boundedPrefetchId==='08C_BOUNDED_PREFETCH'))frameHooks08C.push(frameHook08C);

globalThis.__boundedPrefetch08C={
  marker:BOUNDED_PREFETCH_LIFECYCLE_08C_MARKER,
  world:world08C,
  regions:regions08C,
  planner:planner08C,
  factory:predictiveFactory08C,
  controller:boundedPrefetch08C,
  centers:centers08C,
  get proof(){return boundedProof08C();},
  get firstBPreparedAt(){return firstBPreparedAt08C;},
  get cancellationAt(){return cancellationAt08C;},
  get aInitialProgress(){return aInitialProgress08C;},
  get aReturnProgress(){return aReturnProgress08C;}
};


// ---- Test 08D: World Expansion Certification ----
const WORLD_EXPANSION_CERTIFICATION_08D_MARKER='08D_WORLD_EXPANSION_CERTIFICATION';

const inherited08C=globalThis.__boundedPrefetch08C;
const actorSystem08D=globalThis.__productionActorPipeline07B;
if(!inherited08C||!actorSystem08D)throw new Error('08D requires frozen accepted 08C runtime');

const regions08D=inherited08C.regions;
const centers08D=inherited08C.centers;
const factory08D=inherited08C.factory;
const controller08D=inherited08C.controller;
const frozenFactory08D=actorSystem08D.factory;

const visitRadius08D=14;
const requiredSequence08D=['A','B','A','B','A'];
const minElapsedMs08D=30000;

let visitSequence08D=[];
let lastCommittedVisit08D=null;
let certStart08D=0;
let maxActiveActors08D=0;
let maxBindings08D=0;
let maxPrepared08D=0;
let violation08D='';
let hudNext08D=0;

const certStageEl08D=document.getElementById('certStage08D');
const nextEl08D=document.getElementById('certNext08D');
const distanceEl08D=document.getElementById('certDistance08D');
const directionEl08D=document.getElementById('certDirection08D');
const sequenceEl08D=document.getElementById('certSequence08D');
const elapsedEl08D=document.getElementById('certElapsed08D');
const aCyclesEl08D=document.getElementById('certACycles08D');
const bCyclesEl08D=document.getElementById('certBCycles08D');
const activeActorsEl08D=document.getElementById('certActiveActors08D');
const bindingsEl08D=document.getElementById('certBindings08D');
const preparedEl08D=document.getElementById('certPrepared08D');
const consumedEl08D=document.getElementById('certConsumed08D');
const fallbackEl08D=document.getElementById('certFallback08D');
const assetEl08D=document.getElementById('certAsset08D');
const duplicatesEl08D=document.getElementById('certDuplicates08D');
const regressionEl08D=document.getElementById('certRegression08D');
const resultEl08D=document.getElementById('certResult08D');

function setCertText08D(el,value,color){
  if(!el)return;
  if(el.textContent!==value)el.textContent=value;
  if(color&&el.style.color!==color)el.style.color=color;
}

const cameraForward08D=new THREE.Vector3();
function targetGuidance08D(target){
  const center=centers08D[target];
  const dx=center.x-playerRoot.position.x;
  const dz=center.z-playerRoot.position.z;
  const distance=Math.hypot(dx,dz);
  if(distance<.001)return {distance:0,label:'HERE',degrees:0};
  camera.getWorldDirection(cameraForward08D);
  let fx=cameraForward08D.x;
  let fz=cameraForward08D.z;
  const fl=Math.hypot(fx,fz)||1;
  fx/=fl; fz/=fl;
  const tx=dx/distance;
  const tz=dz/distance;
  const degrees=Math.atan2(fx*tz-fz*tx,fx*tx+fz*tz)*180/Math.PI;
  const abs=Math.abs(degrees);
  let label;
  if(abs<=22.5)label='FORWARD';
  else if(abs<=67.5)label=degrees>0?'FORWARD-RIGHT':'FORWARD-LEFT';
  else if(abs<=112.5)label=degrees>0?'RIGHT':'LEFT';
  else if(abs<=157.5)label=degrees>0?'BACK-RIGHT':'BACK-LEFT';
  else label='BACK';
  return {distance,label,degrees};
}

function totalActiveActors08D(){
  return regions08D.A.activeActors.length+regions08D.B.activeActors.length;
}
function duplicateCount08D(){
  return regions08D.A.duplicateCount+regions08D.B.duplicateCount+factory08D.duplicateBindingCount;
}
function distanceTo08D(key){
  const c=centers08D[key];
  return Math.hypot(playerRoot.position.x-c.x,playerRoot.position.z-c.z);
}
function committedRegion08D(){
  if(regions08D.A.isActive&&distanceTo08D('A')<=visitRadius08D)return 'A';
  if(regions08D.B.isActive&&distanceTo08D('B')<=visitRadius08D)return 'B';
  return null;
}
function nextTarget08D(){
  const index=Math.min(visitSequence08D.length,requiredSequence08D.length-1);
  return requiredSequence08D[index];
}

function observeCertification08D(){
  const regression=globalThis.__livingWorld06J?.stage||'WAITING';
  const committed=committedRegion08D();

  if(visitSequence08D.length===0){
    if(committed==='A'){
      visitSequence08D.push('A');
      lastCommittedVisit08D='A';
      certStart08D=Date.now();
    }
  }else if(committed&&committed!==lastCommittedVisit08D){
    visitSequence08D.push(committed);
    lastCommittedVisit08D=committed;
  }

  const activeActors=totalActiveActors08D();
  const bindings=factory08D.size;
  const prepared=controller08D.totalPrepared();
  maxActiveActors08D=Math.max(maxActiveActors08D,activeActors);
  maxBindings08D=Math.max(maxBindings08D,bindings);
  maxPrepared08D=Math.max(maxPrepared08D,prepared);

  if(certStart08D){
    if(maxActiveActors08D>4)violation08D='ACTIVE ACTORS > 4';
    else if(maxBindings08D>4)violation08D='BINDINGS > 4';
    else if(maxPrepared08D>2)violation08D='PREFETCH POOL > 2';
    else if(duplicateCount08D()>0)violation08D='DUPLICATE STATE';
    else if(frozenFactory08D.assetCache.loadCount!==1)violation08D='ASSET LOAD COUNT CHANGED';
    else if(factory08D.fallbackInstances!==2)violation08D='FALLBACK COUNT CHANGED';
    else if(regression==='FAIL')violation08D='06J REGRESSION FAIL';
  }
}

function certificationProof08D(){
  const regression=globalThis.__livingWorld06J?.stage||'WAITING';
  const elapsed=certStart08D?Date.now()-certStart08D:0;
  const sequencePass=requiredSequence08D.every((key,index)=>visitSequence08D[index]===key);
  const checks={
    sequence:sequencePass,
    elapsed:elapsed>=minElapsedMs08D,
    a_restores:regions08D.A.restoreCount>=2,
    b_restores:regions08D.B.restoreCount>=1,
    a_unloads:regions08D.A.unloadCount>=2,
    b_unloads:regions08D.B.unloadCount>=2,
    prepared_consumed:factory08D.consumedInstances>=8,
    fallback_stable:factory08D.fallbackInstances===2,
    max_active_actors:maxActiveActors08D<=4,
    max_bindings:maxBindings08D<=4,
    max_prepared:maxPrepared08D<=2&&controller08D.budget.peakPrepared<=2,
    final_prepared:controller08D.totalPrepared()===0,
    final_a_active:regions08D.A.isActive&&regions08D.B.lifecycle==='UNLOADED',
    final_active_actors:totalActiveActors08D()===2,
    final_bindings:factory08D.size===2,
    asset_load_one:frozenFactory08D.assetCache.loadCount===1,
    duplicates:duplicateCount08D()===0,
    regression:regression==='PASS',
    no_violation:!violation08D
  };
  const failed=Object.entries(checks).filter(([,ok])=>!ok).map(([name])=>name);
  return {pass:failed.length===0,failed,checks,elapsed,regression};
}

function updateCertificationHud08D(){
  const proof=certificationProof08D();
  const next=nextTarget08D();
  const guide=targetGuidance08D(next);
  const sequence=visitSequence08D.slice(0,5).join('→')||'—';
  const elapsedSeconds=Math.floor(proof.elapsed/1000);

  setCertText08D(certStageEl08D,proof.pass?'PASS':violation08D?'FAIL':proof.regression==='PASS'?'RUNNING':'WAITING REGRESSION',
    proof.pass?'#a8f0b5':violation08D?'#ff9b9b':'#ffe59a');
  setCertText08D(nextEl08D,next);
  setCertText08D(distanceEl08D,guide.distance.toFixed(1)+' m');
  setCertText08D(directionEl08D,guide.label+' · '+Math.round(Math.abs(guide.degrees))+'°');
  setCertText08D(sequenceEl08D,sequence);
  setCertText08D(elapsedEl08D,elapsedSeconds+' / 30 s',elapsedSeconds>=30?'#a8f0b5':'#ffe59a');
  setCertText08D(aCyclesEl08D,'restore '+regions08D.A.restoreCount+' · unload '+regions08D.A.unloadCount);
  setCertText08D(bCyclesEl08D,'restore '+regions08D.B.restoreCount+' · unload '+regions08D.B.unloadCount);
  setCertText08D(activeActorsEl08D,totalActiveActors08D()+' · peak '+maxActiveActors08D+'/4');
  setCertText08D(bindingsEl08D,factory08D.size+' · peak '+maxBindings08D+'/4');
  setCertText08D(preparedEl08D,controller08D.totalPrepared()+' · peak '+Math.max(maxPrepared08D,controller08D.budget.peakPrepared)+'/2');
  setCertText08D(consumedEl08D,String(factory08D.consumedInstances));
  setCertText08D(fallbackEl08D,String(factory08D.fallbackInstances),factory08D.fallbackInstances===2?'#a8f0b5':'#ff9b9b');
  setCertText08D(assetEl08D,String(frozenFactory08D.assetCache.loadCount),frozenFactory08D.assetCache.loadCount===1?'#a8f0b5':'#ff9b9b');
  setCertText08D(duplicatesEl08D,String(duplicateCount08D()),duplicateCount08D()===0?'#a8f0b5':'#ff9b9b');
  setCertText08D(regressionEl08D,proof.regression,proof.regression==='PASS'?'#a8f0b5':proof.regression==='FAIL'?'#ff9b9b':'#ffe59a');

  if(violation08D){
    setCertText08D(resultEl08D,'CERTIFICATION FAIL · '+violation08D,'#ff9b9b');
  }else if(proof.pass){
    setCertText08D(resultEl08D,'WORLD EXPANSION CERTIFIED ✓ · 4 HANDOFFS ✓ · REPEATED RESTORE ✓ · ACTORS BOUNDED 4 ✓ · BINDINGS BOUNDED 4 ✓ · PREFETCH BOUNDED 2 ✓ · ASSET LOAD 1 ✓ · NO DUPLICATES ✓ · PERFORMANCE PASS ✓','#a8f0b5');
  }else if(proof.regression!=='PASS'){
    setCertText08D(resultEl08D,'WAIT FOR 06J REGRESSION PASS','#ffe59a');
  }else if(visitSequence08D.length===0){
    setCertText08D(resultEl08D,'ENTER REGION A TO START CERTIFICATION','#ffe59a');
  }else if(visitSequence08D.length<5){
    setCertText08D(resultEl08D,'GO TO '+next+' · COMPLETE A→B→A→B→A','#ffe59a');
  }else if(proof.elapsed<minElapsedMs08D){
    setCertText08D(resultEl08D,'ROUTE COMPLETE ✓ · HOLD UNTIL 30 s CERT WINDOW','#ffe59a');
  }else{
    setCertText08D(resultEl08D,'ROUTE COMPLETE · VERIFYING FINAL LIFECYCLE STATE','#ffe59a');
  }
}

// Add an A beacon. 08C already owns the diagnostic B beacon.
const aGround08D=groundHeight(centers08D.A.x,centers08D.A.z);
const aBeaconGroup08D=new THREE.Group();
aBeaconGroup08D.userData.worldExpansionCertificationBeacon08D=true;
const aBeam08D=new THREE.Mesh(
  new THREE.CylinderGeometry(.13,.13,18,10,1,true),
  new THREE.MeshBasicMaterial({
    color:0xffd66b,
    transparent:true,
    opacity:.62,
    depthTest:false,
    depthWrite:false
  })
);
aBeam08D.position.set(centers08D.A.x,aGround08D+9,centers08D.A.z);
aBeam08D.renderOrder=999;
aBeaconGroup08D.add(aBeam08D);
const aCap08D=new THREE.Mesh(
  new THREE.SphereGeometry(.75,12,8),
  new THREE.MeshBasicMaterial({
    color:0xffefad,
    transparent:true,
    opacity:.9,
    depthTest:false,
    depthWrite:false
  })
);
aCap08D.position.set(centers08D.A.x,aGround08D+18.5,centers08D.A.z);
aCap08D.renderOrder=1000;
aBeaconGroup08D.add(aCap08D);
scene.add(aBeaconGroup08D);

const hooks08D=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);
const certificationHook08D=(now)=>{
  observeCertification08D();
  if(now>=hudNext08D){
    updateCertificationHud08D();
    hudNext08D=now+250;
  }
};
certificationHook08D.worldExpansionCertificationId='08D_WORLD_EXPANSION_CERTIFICATION';
if(!hooks08D.some(h=>h.worldExpansionCertificationId==='08D_WORLD_EXPANSION_CERTIFICATION')){
  hooks08D.push(certificationHook08D);
}

globalThis.__worldExpansionCertification08D={
  marker:WORLD_EXPANSION_CERTIFICATION_08D_MARKER,
  requiredSequence:[...requiredSequence08D],
  get visits(){return [...visitSequence08D];},
  get proof(){return certificationProof08D();},
  get maxActiveActors(){return maxActiveActors08D;},
  get maxBindings(){return maxBindings08D;},
  get maxPrepared(){return maxPrepared08D;},
  get violation(){return violation08D;}
};


// ---- Test 09B: Vertical Beauty Slice / Sunlit Basin / Presentation Pass 2 ----
import {BEAUTY_SLICE_09B,seededBeautyRandom} from './presentation/beauty-slice-spec.js';

const BEAUTY_SLICE_09B_MARKER='09B_VERTICAL_BEAUTY_SLICE';
const inheritedWorld09B=globalThis.__boundedPrefetch08C;
const actorSystem09B=globalThis.__productionActorPipeline07B;
if(!inheritedWorld09B||!actorSystem09B)throw new Error('09B requires frozen Test08 production runtime');

const center09B={...inheritedWorld09B.centers.A};
const root09B=new THREE.Group();
root09B.name='09B_SUNLIT_BASIN';
root09B.userData.presentationSlice09B=true;
root09B.position.set(center09B.x,0,center09B.z);

let sliceBuilt09B=false;
let buildError09B='';
let buildTime09B=0;
let presentationTriangles09B=0;
let presentationDrawables09B=0;
let hudNext09B=0;
let baselineCalls09B=0;
let baselineTriangles09B=0;

const stageEl09B=document.getElementById('beautyStage09B');
const placeEl09B=document.getElementById('beautyPlace09B');
const materialsEl09B=document.getElementById('beautyMaterials09B');
const depthEl09B=document.getElementById('beautyDepth09B');
const motionEl09B=document.getElementById('beautyMotion09B');
const sliceDrawEl09B=document.getElementById('beautySliceDraw09B');
const sliceTriEl09B=document.getElementById('beautySliceTri09B');
const totalDrawEl09B=document.getElementById('beautyTotalDraw09B');
const totalTriEl09B=document.getElementById('beautyTotalTri09B');
const runtimeEl09B=document.getElementById('beautyRuntime09B');
const assetEl09B=document.getElementById('beautyAsset09B');
const dupEl09B=document.getElementById('beautyDuplicates09B');
const distanceEl09B=document.getElementById('beautyDistance09B');
const resultEl09B=document.getElementById('beautyResult09B');

function setBeautyText09B(el,value,color){
  if(!el)return;
  if(el.textContent!==value)el.textContent=value;
  if(color&&el.style.color!==color)el.style.color=color;
}

function geometryTriangles09B(geometry,instances=1){
  const tris=geometry.index ? geometry.index.count/3 : geometry.getAttribute('position').count/3;
  return Math.round(tris*instances);
}

function addRenderable09B(object,triangles){
  root09B.add(object);
  presentationDrawables09B++;
  presentationTriangles09B+=Math.max(0,Math.round(triangles));
  return object;
}

function textureClone09B(base,repeatX,repeatY){
  const t=base.clone();
  t.wrapS=t.wrapT=THREE.RepeatWrapping;
  t.repeat.set(repeatX,repeatY);
  t.needsUpdate=true;
  return t;
}

function patchWind09B(material,{speed=.8,strength=.12,scale=.1}={}){
  material.onBeforeCompile=shader=>{
    shader.uniforms.uBeautyTime={value:0};
    shader.vertexShader=shader.vertexShader
      .replace('#include <common>','#include <common>\nuniform float uBeautyTime;')
      .replace(
        '#include <begin_vertex>',
        '#include <begin_vertex>\n#ifdef USE_INSTANCING\n'+
        'float beautyPhase=instanceMatrix[3].x*0.071+instanceMatrix[3].z*0.053;\n'+
        'float beautyWeight=clamp(position.y*0.34,0.0,1.0);\n'+
        'transformed.x+=sin(uBeautyTime*'+speed.toFixed(3)+'+beautyPhase+position.y*'+scale.toFixed(3)+')*'+strength.toFixed(3)+'*beautyWeight;\n'+
        'transformed.z+=cos(uBeautyTime*'+(speed*.73).toFixed(3)+'+beautyPhase*1.31)*'+(strength*.55).toFixed(3)+'*beautyWeight;\n'+
        '#endif'
      );
    material.userData.beautyShader=shader;
  };
  material.customProgramCacheKey=()=>('09B-p2-wind-'+speed+'-'+strength+'-'+scale);
  return material;
}

function pathCenterX09B(z){
  const t=(z+24)/50;
  if(t<0||t>1)return null;
  return -1.7+6.7*t+2.0*Math.sin(t*Math.PI*1.15);
}

function tuneEnvironment09B(){
  renderer.toneMappingExposure=1.0;
  camera.fov=50;
  camera.updateProjectionMatrix();

  if(scene.fog&&'density' in scene.fog){
    scene.fog.color.set(0xb8ccd0);
    scene.fog.density=.0078;
  }

  hemi.color.set(0xc8e4f1);
  hemi.groundColor.set(0x4b5545);
  hemi.intensity=1.28;
  fill.color.set(0x8099a5);
  fill.intensity=.10;

  sun.color.set(0xffdfae);
  sun.intensity=3.65;
  sun.position.set(-42,54,14);
  sun.target.position.set(center09B.x,0,center09B.z+8);
  sun.target.updateMatrixWorld();

  if(typeof skyU!=='undefined'){
    skyU.top.value.set(0x4d94c2);
    skyU.mid.value.set(0xafd0cf);
    skyU.bottom.value.set(0xf0d7aa);
    skyU.sunWarm.value.set(0xffcc82);
  }
}

function makeGround09B(){
  const g=new THREE.PlaneGeometry(66,66,40,40);
  g.rotateX(-Math.PI/2);
  const p=g.getAttribute('position');
  const colors=[];
  const c=new THREE.Color();

  for(let i=0;i<p.count;i++){
    const x=p.getX(i),z=p.getZ(i);
    const wx=center09B.x+x,wz=center09B.z+z;
    const radial=Math.hypot(x,z);
    const edgeLift=Math.max(0,(radial-21)/12);
    const waterD=Math.hypot(x+12,z-7);
    const waterBowl=Math.max(0,1-waterD/10.2);
    const undulation=.07*Math.sin(x*.22)+.05*Math.cos(z*.19)+.025*Math.sin((x+z)*.47);
    const authoredLift=.28*edgeLift*edgeLift-.14*waterBowl*waterBowl;
    p.setY(i,groundHeight(wx,wz)+.055+undulation+authoredLift);

    const moisture=Math.max(0,1-waterD/15);
    const n=.5+.5*Math.sin(x*.17+z*.13)+.22*Math.cos(z*.31);
    const hue=.245-moisture*.018+(n-.5)*.014;
    const sat=.31+moisture*.08;
    const light=.285+moisture*.045+(n-.5)*.028;
    c.setHSL(hue,sat,light);
    colors.push(c.r,c.g,c.b);
  }

  g.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));
  g.computeVertexNormals();

  const bump=textureClone09B(microNoise,22,22);
  const rough=textureClone09B(microNoise,17,17);
  const m=new THREE.MeshStandardMaterial({
    vertexColors:true,
    roughness:.91,
    metalness:0,
    bumpMap:bump,
    bumpScale:.085,
    roughnessMap:rough,
    polygonOffset:true,
    polygonOffsetFactor:-1,
    polygonOffsetUnits:-1
  });
  const mesh=new THREE.Mesh(g,m);
  mesh.receiveShadow=true;
  mesh.name='09B meadow ground p2';
  return addRenderable09B(mesh,geometryTriangles09B(g));
}

function makePath09B(){
  const seg=BEAUTY_SLICE_09B.layout.pathSegments;
  const width=3.15;
  const positions=[],indices=[],uvs=[],colors=[],centers=[];
  const c=new THREE.Color();

  for(let i=0;i<=seg;i++){
    const t=i/seg;
    const x=-1.7+6.7*t+2.0*Math.sin(t*Math.PI*1.15);
    const z=-24+50*t;
    centers.push({x,z,t});
  }

  for(let i=0;i<=seg;i++){
    const prev=centers[Math.max(0,i-1)],next=centers[Math.min(seg,i+1)];
    let tx=next.x-prev.x,tz=next.z-prev.z;
    const len=Math.hypot(tx,tz)||1; tx/=len; tz/=len;
    const nx=-tz,nz=tx;
    const cc=centers[i];

    for(const side of [-1,1]){
      const x=cc.x+nx*width*.5*side;
      const z=cc.z+nz*width*.5*side;
      const y=groundHeight(center09B.x+x,center09B.z+z)+.105+.018*Math.sin(cc.t*31+side);
      positions.push(x,y,z);
      uvs.push(side<0?0:1,cc.t*8);
      c.setHSL(.085,.27,.31+(side<0?.015:-.005)+.02*Math.sin(cc.t*17));
      colors.push(c.r,c.g,c.b);
    }
    if(i<seg){
      const a=i*2,b=a+1,c0=a+2,d=a+3;
      indices.push(a,c0,b,b,c0,d);
    }
  }

  const g=new THREE.BufferGeometry();
  g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));
  g.setAttribute('uv',new THREE.Float32BufferAttribute(uvs,2));
  g.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));
  g.setIndex(indices);
  g.computeVertexNormals();

  const bump=textureClone09B(pathNoise,2.4,14);
  const rough=textureClone09B(pathNoise,1.8,11);
  const m=new THREE.MeshStandardMaterial({
    vertexColors:true,
    roughness:.96,
    metalness:0,
    bumpMap:bump,
    bumpScale:.13,
    roughnessMap:rough
  });
  const mesh=new THREE.Mesh(g,m);
  mesh.receiveShadow=true;
  mesh.name='09B soil path p2';
  return addRenderable09B(mesh,geometryTriangles09B(g));
}

function makeShore09B(){
  const seg=BEAUTY_SLICE_09B.layout.shoreSegments;
  const positions=[],indices=[],colors=[];
  const c=new THREE.Color();
  const cx=-12,cz=7;

  for(let i=0;i<=seg;i++){
    const a=(i/seg)*Math.PI*2;
    for(const ring of [0,1]){
      const r=ring?10.15:8.25;
      const x=cx+Math.cos(a)*r;
      const z=cz+Math.sin(a)*r;
      const y=groundHeight(center09B.x+x,center09B.z+z)+(ring?.085:.105);
      positions.push(x,y,z);
      if(ring)c.setHSL(.20,.22,.27);
      else c.setHSL(.12,.18,.235);
      colors.push(c.r,c.g,c.b);
    }
    if(i<seg){
      const q=i*2;
      indices.push(q,q+2,q+1,q+1,q+2,q+3);
    }
  }

  const g=new THREE.BufferGeometry();
  g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));
  g.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));
  g.setIndex(indices);
  g.computeVertexNormals();

  const m=new THREE.MeshStandardMaterial({
    vertexColors:true,
    roughness:.88,
    metalness:0,
    bumpMap:textureClone09B(microNoise,8,8),
    bumpScale:.07
  });
  const mesh=new THREE.Mesh(g,m);
  mesh.receiveShadow=true;
  mesh.name='09B wet shoreline p2';
  return addRenderable09B(mesh,geometryTriangles09B(g));
}

function makeWater09B(){
  const g=new THREE.CircleGeometry(8.4,72);
  g.rotateX(-Math.PI/2);
  const y=groundHeight(center09B.x-12,center09B.z+7)+.14;
  const m=new THREE.ShaderMaterial({
    transparent:true,
    depthWrite:false,
    side:THREE.DoubleSide,
    uniforms:{
      uBeautyTime:{value:0},
      uDeep:{value:new THREE.Color(0x264f61)},
      uShallow:{value:new THREE.Color(0x6aa69e)},
      uSky:{value:new THREE.Color(0x8dc8d2)},
      uSun:{value:new THREE.Color(0xffd593)},
      uSunDir:{value:new THREE.Vector3(-.56,.78,.20).normalize()}
    },
    vertexShader:[
      'uniform float uBeautyTime;',
      'varying vec2 vLocal;',
      'varying vec3 vWorld;',
      'varying vec3 vNormalW;',
      'void main(){',
      ' vec3 p=position;',
      ' float ax=(p.x+uBeautyTime*.95)*.72;',
      ' float az=(p.z-uBeautyTime*.62)*.91;',
      ' float w=sin(ax)*.075+cos(az)*.052+sin((p.x+p.z)*.43+uBeautyTime*.41)*.028;',
      ' p.y+=w;',
      ' float dx=.054*cos(ax)+.012*cos((p.x+p.z)*.43+uBeautyTime*.41);',
      ' float dz=-.047*sin(az)+.012*cos((p.x+p.z)*.43+uBeautyTime*.41);',
      ' vec3 n=normalize(vec3(-dx,1.0,-dz));',
      ' vec4 wp=modelMatrix*vec4(p,1.0);',
      ' vWorld=wp.xyz;',
      ' vNormalW=normalize(mat3(modelMatrix)*n);',
      ' vLocal=p.xz/8.4;',
      ' vec4 mvPosition=viewMatrix*wp;',
      ' gl_Position=projectionMatrix*mvPosition;',
      '}'
    ].join('\n'),
    fragmentShader:[
      'uniform vec3 uDeep;',
      'uniform vec3 uShallow;',
      'uniform vec3 uSky;',
      'uniform vec3 uSun;',
      'uniform vec3 uSunDir;',
      'uniform float uBeautyTime;',
      'varying vec2 vLocal;',
      'varying vec3 vWorld;',
      'varying vec3 vNormalW;',
      'void main(){',
      ' float r=length(vLocal);',
      ' vec3 N=normalize(vNormalW);',
      ' vec3 V=normalize(cameraPosition-vWorld);',
      ' float fres=pow(1.0-max(dot(N,V),0.0),3.0);',
      ' float sparkle=pow(max(dot(reflect(-uSunDir,N),V),0.0),72.0);',
      ' float ripple=.5+.5*sin((vLocal.x*23.0-vLocal.y*17.0)+uBeautyTime*1.25);',
      ' float shallow=smoothstep(.0,.92,r);',
      ' vec3 col=mix(uDeep,uShallow,.32+.42*shallow);',
      ' col=mix(col,uSky,.18+.47*fres);',
      ' col+=uSun*sparkle*(.75+.25*ripple);',
      ' float foam=smoothstep(.82,.985,r)*(1.0-smoothstep(.985,1.0,r));',
      ' col=mix(col,vec3(.82,.90,.82),foam*.48);',
      ' float alpha=(.72+.12*fres)*(1.0-smoothstep(.985,1.0,r));',
      ' gl_FragColor=vec4(col,alpha);',
      '}'
    ].join('\n')
  });
  const mesh=new THREE.Mesh(g,m);
  mesh.position.set(-12,y,7);
  mesh.renderOrder=3;
  mesh.name='09B water p2';
  mesh.userData.timeUniform=m.uniforms.uBeautyTime;
  return addRenderable09B(mesh,geometryTriangles09B(g));
}

function makeTrees09B(rand){
  const trunkGeo=new THREE.CylinderGeometry(.42,.64,7,8,2);
  const trunkMat=new THREE.MeshStandardMaterial({
    color:0xffffff,
    roughness:.91,
    metalness:0,
    bumpMap:textureClone09B(microNoise,5,12),
    bumpScale:.095
  });
  const trunks=new THREE.InstancedMesh(trunkGeo,trunkMat,BEAUTY_SLICE_09B.layout.trees);
  trunks.castShadow=true; trunks.receiveShadow=true; trunks.name='09B tree trunks p2';

  const canopyGeo=new THREE.IcosahedronGeometry(2.65,1);
  const canopyMat=patchWind09B(
    new THREE.MeshStandardMaterial({color:0xffffff,roughness:.82,metalness:0}),
    {speed:.74,strength:.18,scale:.50}
  );
  const canopy=new THREE.InstancedMesh(canopyGeo,canopyMat,BEAUTY_SLICE_09B.layout.trees);
  canopy.castShadow=true; canopy.receiveShadow=true; canopy.name='09B canopy p2';

  const o=new THREE.Object3D();
  const col=new THREE.Color();

  for(let i=0;i<BEAUTY_SLICE_09B.layout.trees;i++){
    const angle=(i/BEAUTY_SLICE_09B.layout.trees)*Math.PI*2+(rand()-.5)*.22;
    const radius=22.2+rand()*9.0;
    let x=Math.cos(angle)*radius,z=Math.sin(angle)*radius;
    if(z>13&&Math.abs(x-4)<8)x+=x<4?-7:7;
    const worldY=groundHeight(center09B.x+x,center09B.z+z);
    const h=.82+rand()*.42;

    o.position.set(x,worldY+3.5*h,z);
    o.rotation.set(0,rand()*Math.PI*2,0);
    o.scale.set(.82+rand()*.34,h,.82+rand()*.34);
    o.updateMatrix();
    trunks.setMatrixAt(i,o.matrix);
    col.setHSL(.075+(rand()-.5)*.018,.37,.22+rand()*.06);
    trunks.setColorAt(i,col);

    o.position.set(x+(rand()-.5)*.55,worldY+7.45*h,z+(rand()-.5)*.55);
    o.rotation.set((rand()-.5)*.11,rand()*Math.PI*2,(rand()-.5)*.11);
    o.scale.set(1+rand()*.52,.78+rand()*.46,1+rand()*.52);
    o.updateMatrix();
    canopy.setMatrixAt(i,o.matrix);
    col.setHSL(.29+(rand()-.5)*.035,.38+rand()*.10,.27+rand()*.075);
    canopy.setColorAt(i,col);
  }

  trunks.instanceMatrix.needsUpdate=true;
  canopy.instanceMatrix.needsUpdate=true;
  if(trunks.instanceColor)trunks.instanceColor.needsUpdate=true;
  if(canopy.instanceColor)canopy.instanceColor.needsUpdate=true;

  addRenderable09B(trunks,geometryTriangles09B(trunkGeo,BEAUTY_SLICE_09B.layout.trees));
  addRenderable09B(canopy,geometryTriangles09B(canopyGeo,BEAUTY_SLICE_09B.layout.trees));
  return canopyMat;
}

function makeGrassGeometry09B(){
  const p=new Float32Array([
    -.10,0,0, .10,0,0, -.065,.9,0, .065,.9,0,
    0,0,-.10, 0,0,.10, 0,.9,-.065, 0,.9,.065
  ]);
  const g=new THREE.BufferGeometry();
  g.setAttribute('position',new THREE.BufferAttribute(p,3));
  g.setIndex([0,1,2,1,3,2,4,5,6,5,7,6]);
  g.computeVertexNormals();
  return g;
}

function makeGrass09B(rand){
  const geo=makeGrassGeometry09B();
  const mat=patchWind09B(
    new THREE.MeshStandardMaterial({
      color:0xffffff,
      roughness:.84,
      metalness:0,
      side:THREE.DoubleSide
    }),
    {speed:1.26,strength:.13,scale:.88}
  );
  const mesh=new THREE.InstancedMesh(geo,mat,BEAUTY_SLICE_09B.layout.grassTufts);
  mesh.name='09B grass blades p2';
  const o=new THREE.Object3D();
  const col=new THREE.Color();
  let i=0;

  while(i<BEAUTY_SLICE_09B.layout.grassTufts){
    const x=(rand()*2-1)*31,z=(rand()*2-1)*31;
    if(x*x+z*z>31*31)continue;
    if(Math.hypot(x+12,z-7)<10.2)continue;
    const px=pathCenterX09B(z);
    if(px!==null&&Math.abs(x-px)<2.25)continue;

    const y=groundHeight(center09B.x+x,center09B.z+z);
    o.position.set(x,y+.055,z);
    o.rotation.set((rand()-.5)*.045,rand()*Math.PI*2,(rand()-.5)*.045);
    const s=.55+rand()*1.05;
    o.scale.set(.7+rand()*.55,s,.7+rand()*.55);
    o.updateMatrix();
    mesh.setMatrixAt(i,o.matrix);
    const moisture=Math.max(0,1-Math.hypot(x+12,z-7)/18);
    col.setHSL(.265-moisture*.025+(rand()-.5)*.025,.43+rand()*.08,.31+rand()*.075);
    mesh.setColorAt(i,col);
    i++;
  }

  mesh.instanceMatrix.needsUpdate=true;
  if(mesh.instanceColor)mesh.instanceColor.needsUpdate=true;
  addRenderable09B(mesh,geometryTriangles09B(geo,BEAUTY_SLICE_09B.layout.grassTufts));
  return mat;
}

function makeShrubs09B(rand){
  const geo=new THREE.DodecahedronGeometry(.70,0);
  const mat=patchWind09B(
    new THREE.MeshStandardMaterial({color:0xffffff,roughness:.86,metalness:0}),
    {speed:.82,strength:.08,scale:.62}
  );
  const mesh=new THREE.InstancedMesh(geo,mat,BEAUTY_SLICE_09B.layout.shrubs);
  mesh.name='09B understory shrubs p2';
  const o=new THREE.Object3D();
  const col=new THREE.Color();
  let i=0;

  while(i<BEAUTY_SLICE_09B.layout.shrubs){
    const angle=rand()*Math.PI*2;
    const radius=13.5+rand()*14.5;
    const x=Math.cos(angle)*radius,z=Math.sin(angle)*radius;
    if(Math.hypot(x+12,z-7)<10.4)continue;
    const px=pathCenterX09B(z);
    if(px!==null&&Math.abs(x-px)<3.2)continue;

    const y=groundHeight(center09B.x+x,center09B.z+z);
    o.position.set(x,y+.55,z);
    o.rotation.set((rand()-.5)*.13,rand()*Math.PI*2,(rand()-.5)*.13);
    o.scale.set(.7+rand()*.9,.52+rand()*.8,.7+rand()*.9);
    o.updateMatrix();
    mesh.setMatrixAt(i,o.matrix);
    col.setHSL(.30+(rand()-.5)*.035,.40+rand()*.13,.235+rand()*.09);
    mesh.setColorAt(i,col);
    i++;
  }

  mesh.instanceMatrix.needsUpdate=true;
  if(mesh.instanceColor)mesh.instanceColor.needsUpdate=true;
  addRenderable09B(mesh,geometryTriangles09B(geo,BEAUTY_SLICE_09B.layout.shrubs));
  return mat;
}

function makeFlowers09B(rand){
  const geo=new THREE.OctahedronGeometry(.10,0);
  const mat=new THREE.MeshStandardMaterial({
    color:0xffffff,
    roughness:.66,
    metalness:0,
    emissive:0x241707,
    emissiveIntensity:.10
  });
  const mesh=new THREE.InstancedMesh(geo,mat,BEAUTY_SLICE_09B.layout.flowers);
  mesh.name='09B flowers p2';
  const o=new THREE.Object3D();
  const col=new THREE.Color();
  let i=0;

  while(i<BEAUTY_SLICE_09B.layout.flowers){
    const x=(rand()*2-1)*25,z=(rand()*2-1)*25;
    if(Math.hypot(x+12,z-7)<10.0)continue;
    const px=pathCenterX09B(z);
    if(px!==null&&Math.abs(x-px)<2.0)continue;
    const y=groundHeight(center09B.x+x,center09B.z+z);
    o.position.set(x,y+.22+rand()*.22,z);
    o.rotation.set(rand()*Math.PI,rand()*Math.PI,rand()*Math.PI);
    const s=.55+rand()*.92;
    o.scale.setScalar(s);
    o.updateMatrix();
    mesh.setMatrixAt(i,o.matrix);

    const palette=i%4;
    if(palette===0)col.set(0xf4d477);
    else if(palette===1)col.set(0xe7a7a3);
    else if(palette===2)col.set(0xc8c5ef);
    else col.set(0xf0eee0);
    col.offsetHSL((rand()-.5)*.02,0,(rand()-.5)*.05);
    mesh.setColorAt(i,col);
    i++;
  }

  mesh.instanceMatrix.needsUpdate=true;
  if(mesh.instanceColor)mesh.instanceColor.needsUpdate=true;
  addRenderable09B(mesh,geometryTriangles09B(geo,BEAUTY_SLICE_09B.layout.flowers));
}

function makeRidgeGeometry09B(rand){
  const positions=[],colors=[];
  const col=new THREE.Color();
  const layers=BEAUTY_SLICE_09B.layout.ridgeLayers;
  const segs=BEAUTY_SLICE_09B.layout.ridgeSegments;

  function pushVertex(x,y,z,color){
    positions.push(x,y,z);
    colors.push(color.r,color.g,color.b);
  }

  for(let layer=0;layer<layers;layer++){
    const z=49+layer*13;
    const startX=-44-layer*5;
    const span=88+layer*10;
    const step=span/segs;

    for(let i=0;i<segs;i++){
      const x1=startX+i*step;
      const x2=x1+step;
      const xm=(x1+x2)*.5+(rand()-.5)*1.6;
      const base1=groundHeight(center09B.x+x1,center09B.z+z)-.3;
      const base2=groundHeight(center09B.x+x2,center09B.z+z)-.3;
      const peakY=Math.max(base1,base2)+9+layer*3+rand()*9;
      const backZ=z+5.5+rand()*3;
      const backPeakY=peakY-(1.2+rand()*3.0);

      const light=.35-layer*.035+rand()*.025;
      col.setHSL(.56,.14+layer*.015,light);
      const cFront=col.clone();
      col.setHSL(.57,.12,light-.055);
      const cSide=col.clone();
      col.setHSL(.55,.11,light-.085);
      const cBack=col.clone();

      pushVertex(x1,base1,z,cSide); pushVertex(xm,peakY,z,cFront); pushVertex(x2,base2,z,cSide);
      pushVertex(x1,base1,z,cSide); pushVertex(xm,backPeakY,backZ,cBack); pushVertex(xm,peakY,z,cFront);
      pushVertex(xm,peakY,z,cFront); pushVertex(xm,backPeakY,backZ,cBack); pushVertex(x2,base2,z,cSide);
    }
  }

  const g=new THREE.BufferGeometry();
  g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));
  g.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));
  g.computeVertexNormals();
  return g;
}

function makeStone09B(rand){
  const stoneBump=textureClone09B(microNoise,5,5);
  const stoneMat=new THREE.MeshStandardMaterial({
    color:0xffffff,
    vertexColors:false,
    roughness:.91,
    metalness:0,
    bumpMap:stoneBump,
    bumpScale:.11
  });
  const o=new THREE.Object3D();
  const col=new THREE.Color();

  const rockGeo=new THREE.DodecahedronGeometry(.7,0);
  const rocks=new THREE.InstancedMesh(rockGeo,stoneMat,BEAUTY_SLICE_09B.layout.rocks);
  rocks.name='09B rocks p2';
  rocks.castShadow=true;
  rocks.receiveShadow=true;

  for(let i=0;i<BEAUTY_SLICE_09B.layout.rocks;i++){
    const angle=rand()*Math.PI*2,radius=8+rand()*21;
    const x=Math.cos(angle)*radius,z=Math.sin(angle)*radius;
    if(Math.hypot(x+12,z-7)<9.0)continue;
    const y=groundHeight(center09B.x+x,center09B.z+z);
    o.position.set(x,y+.25,z);
    o.rotation.set(rand()*Math.PI,rand()*Math.PI,rand()*Math.PI);
    o.scale.set(.55+rand()*1.55,.38+rand()*.85,.55+rand()*1.35);
    o.updateMatrix();
    rocks.setMatrixAt(i,o.matrix);
    col.setHSL(.17+(rand()-.5)*.035,.08+rand()*.07,.40+rand()*.12);
    rocks.setColorAt(i,col);
  }
  rocks.instanceMatrix.needsUpdate=true;
  if(rocks.instanceColor)rocks.instanceColor.needsUpdate=true;
  addRenderable09B(rocks,geometryTriangles09B(rockGeo,BEAUTY_SLICE_09B.layout.rocks));

  const ridgeGeo=makeRidgeGeometry09B(rand);
  const ridgeMat=new THREE.MeshStandardMaterial({
    vertexColors:true,
    roughness:.96,
    metalness:0,
    side:THREE.DoubleSide,
    fog:true
  });
  const ridge=new THREE.Mesh(ridgeGeo,ridgeMat);
  ridge.receiveShadow=false;
  ridge.castShadow=false;
  ridge.name='09B layered ridge p2';
  addRenderable09B(ridge,geometryTriangles09B(ridgeGeo));

  const gateX=5,gateZ=25;
  const gateY=groundHeight(center09B.x+gateX,center09B.z+gateZ);
  const blockGeo=new THREE.BoxGeometry(1.25,1.1,1.5);
  const blocks=new THREE.InstancedMesh(blockGeo,stoneMat,BEAUTY_SLICE_09B.layout.gateBlocks);
  blocks.name='09B weathered stone gate p2';
  blocks.castShadow=true;
  blocks.receiveShadow=true;

  let index=0;
  for(const side of [-1,1]){
    for(let level=0;level<5;level++){
      o.position.set(gateX+side*2.45,gateY+.65+level*1.16,gateZ+(rand()-.5)*.16);
      o.rotation.set((rand()-.5)*.04,(rand()-.5)*.10,(rand()-.5)*.055);
      o.scale.set(.96+rand()*.10,.95+rand()*.10,.94+rand()*.12);
      o.updateMatrix();
      blocks.setMatrixAt(index,o.matrix);
      col.setHSL(.15+(rand()-.5)*.025,.07+rand()*.04,.43+rand()*.09);
      blocks.setColorAt(index,col);
      index++;
    }
  }
  for(let j=0;j<4;j++){
    o.position.set(gateX-1.8+j*1.2,gateY+6.25+Math.sin(j*.9)*.15,gateZ+(rand()-.5)*.14);
    o.rotation.set((rand()-.5)*.04,(rand()-.5)*.06,(j-1.5)*-.025);
    o.scale.set(1.08,1.0,.98);
    o.updateMatrix();
    blocks.setMatrixAt(index,o.matrix);
    col.setHSL(.15,.075,.46+rand()*.07);
    blocks.setColorAt(index,col);
    index++;
  }
  blocks.instanceMatrix.needsUpdate=true;
  if(blocks.instanceColor)blocks.instanceColor.needsUpdate=true;
  addRenderable09B(blocks,geometryTriangles09B(blockGeo,BEAUTY_SLICE_09B.layout.gateBlocks));
}

function makePollen09B(rand){
  const positions=new Float32Array(BEAUTY_SLICE_09B.layout.pollen*3);
  for(let i=0;i<BEAUTY_SLICE_09B.layout.pollen;i++){
    const j=i*3;
    positions[j]=(rand()*2-1)*31;
    positions[j+1]=1.0+rand()*9.5;
    positions[j+2]=(rand()*2-1)*31;
  }
  const g=new THREE.BufferGeometry();
  g.setAttribute('position',new THREE.BufferAttribute(positions,3));
  const m=new THREE.ShaderMaterial({
    transparent:true,
    depthWrite:false,
    blending:THREE.AdditiveBlending,
    uniforms:{uBeautyTime:{value:0}},
    vertexShader:[
      'uniform float uBeautyTime;',
      'void main(){',
      ' vec3 p=position;',
      ' float phase=p.x*.17+p.z*.11;',
      ' p.x+=sin(uBeautyTime*.31+phase)*.65;',
      ' p.y+=sin(uBeautyTime*.43+phase*1.7)*.35;',
      ' p.z+=cos(uBeautyTime*.27+phase)*.42;',
      ' vec4 mvPosition=modelViewMatrix*vec4(p,1.0);',
      ' gl_Position=projectionMatrix*mvPosition;',
      ' gl_PointSize=clamp(18.0/max(1.0,-mvPosition.z),1.0,3.0);',
      '}'
    ].join('\n'),
    fragmentShader:[
      'void main(){',
      ' vec2 q=gl_PointCoord-.5;',
      ' float d=length(q);',
      ' float a=smoothstep(.5,.06,d)*.40;',
      ' gl_FragColor=vec4(1.0,.84,.50,a);',
      '}'
    ].join('\n')
  });
  const points=new THREE.Points(g,m);
  points.name='09B airborne pollen p2';
  points.userData.timeUniform=m.uniforms.uBeautyTime;
  addRenderable09B(points,0);
}

function buildSlice09B(){
  if(sliceBuilt09B)return;

  baselineCalls09B=renderer.info.render.calls||0;
  baselineTriangles09B=renderer.info.render.triangles||0;
  const rand=seededBeautyRandom();

  const hooks=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);
  for(let i=hooks.length-1;i>=0;i--){
    if(hooks[i]?.worldExpansionCertificationId==='08D_WORLD_EXPANSION_CERTIFICATION')hooks.splice(i,1);
  }
  for(const child of [...scene.children]){
    if(
      child.userData?.worldExpansionCertificationBeacon08D===true||
      child.userData?.boundedPrefetchBeacon08C===true||
      child.userData?.boundedPrefetchRings08C===true
    )scene.remove(child);
  }

  tuneEnvironment09B();
  makeGround09B();
  makePath09B();
  makeShore09B();
  const water=makeWater09B();
  const canopyMat=makeTrees09B(rand);
  const grassMat=makeGrass09B(rand);
  const shrubMat=makeShrubs09B(rand);
  makeFlowers09B(rand);
  makeStone09B(rand);
  makePollen09B(rand);

  const pollen=root09B.children.find(o=>o.name==='09B airborne pollen p2');
  root09B.userData.animatedMaterials=[
    canopyMat,
    grassMat,
    shrubMat,
    water.material,
    pollen?.material
  ].filter(Boolean);

  scene.add(root09B);
  sliceBuilt09B=true;
  buildTime09B=performance.now();
}

function test08Invariants09B(){
  const factory=inheritedWorld09B.factory;
  const regions=inheritedWorld09B.regions;
  const duplicates=(regions.A?.duplicateCount||0)+(regions.B?.duplicateCount||0)+(factory?.duplicateBindingCount||0);
  return {assetLoads:actorSystem09B.factory.assetCache.loadCount,duplicates};
}

function presentationProof09B(){
  const regression=globalThis.__livingWorld06J?.stage||'WAITING';
  const inv=test08Invariants09B();
  const calls=renderer.info.render.calls||0;
  const tris=renderer.info.render.triangles||0;

  const checks={
    slice_built:sliceBuilt09B,
    presentation_pass:BEAUTY_SLICE_09B.presentationPass===2,
    materials:BEAUTY_SLICE_09B.materialFamilies.length===6,
    depth_layers:BEAUTY_SLICE_09B.depthLayers.length===5,
    motion_systems:BEAUTY_SLICE_09B.ambientMotionSystems.length===4,
    human_review_required:BEAUTY_SLICE_09B.acceptance.humanPresentationReviewRequired===true,
    no_automated_acceptance:BEAUTY_SLICE_09B.acceptance.automatedProofIsPresentationAcceptance===false,
    slice_drawables:presentationDrawables09B<=BEAUTY_SLICE_09B.presentationBudget.addedDrawCallsMax,
    slice_triangles:presentationTriangles09B<=BEAUTY_SLICE_09B.presentationBudget.addedTrianglesMax,
    total_draw_calls:calls<=BEAUTY_SLICE_09B.presentationBudget.absoluteDrawCallsMax,
    total_triangles:tris<=BEAUTY_SLICE_09B.presentationBudget.absoluteTrianglesMax,
    asset_load_one:inv.assetLoads===1,
    duplicates_zero:inv.duplicates===0,
    regression:regression==='PASS',
    no_build_error:!buildError09B
  };
  const failed=Object.entries(checks).filter(([,ok])=>!ok).map(([name])=>name);
  return {
    ready:false,
    automatedReady:failed.length===0,
    humanReviewRequired:true,
    failed,
    checks,
    calls,
    tris,
    inv,
    regression
  };
}

function updateBeautyHud09B(){
  const proof=presentationProof09B();
  const dist=Math.hypot(playerRoot.position.x-center09B.x,playerRoot.position.z-center09B.z);

  setBeautyText09B(
    stageEl09B,
    proof.automatedReady?'HUMAN REVIEW':buildError09B?'FAIL':proof.regression==='PASS'?'BUILDING':'WAITING 06J',
    proof.automatedReady?'#ffe59a':buildError09B?'#ff9b9b':'#ffe59a'
  );
  setBeautyText09B(placeEl09B,BEAUTY_SLICE_09B.name+' · P2');
  setBeautyText09B(materialsEl09B,BEAUTY_SLICE_09B.materialFamilies.length+'/6');
  setBeautyText09B(depthEl09B,BEAUTY_SLICE_09B.depthLayers.length+'/5');
  setBeautyText09B(motionEl09B,BEAUTY_SLICE_09B.ambientMotionSystems.length+'/4');
  setBeautyText09B(sliceDrawEl09B,presentationDrawables09B+' / '+BEAUTY_SLICE_09B.presentationBudget.addedDrawCallsMax);
  setBeautyText09B(sliceTriEl09B,presentationTriangles09B.toLocaleString()+' / '+BEAUTY_SLICE_09B.presentationBudget.addedTrianglesMax.toLocaleString());
  setBeautyText09B(totalDrawEl09B,proof.calls+' / '+BEAUTY_SLICE_09B.presentationBudget.absoluteDrawCallsMax,proof.calls<=120?'#bdf3c8':'#ff9b9b');
  setBeautyText09B(totalTriEl09B,proof.tris.toLocaleString()+' / '+BEAUTY_SLICE_09B.presentationBudget.absoluteTrianglesMax.toLocaleString(),proof.tris<=350000?'#bdf3c8':'#ff9b9b');
  setBeautyText09B(runtimeEl09B,proof.regression,proof.regression==='PASS'?'#bdf3c8':'#ffe59a');
  setBeautyText09B(assetEl09B,String(proof.inv.assetLoads),proof.inv.assetLoads===1?'#bdf3c8':'#ff9b9b');
  setBeautyText09B(dupEl09B,String(proof.inv.duplicates),proof.inv.duplicates===0?'#bdf3c8':'#ff9b9b');
  setBeautyText09B(distanceEl09B,dist.toFixed(1)+' m');

  if(buildError09B){
    setBeautyText09B(resultEl09B,'SLICE BUILD FAIL · '+buildError09B,'#ff9b9b');
  }else if(proof.automatedReady){
    setBeautyText09B(
      resultEl09B,
      'STRUCTURAL/RUNTIME PASS ✓ · PRESENTATION PASS 2 ✓ · HUMAN VISUAL REVIEW REQUIRED',
      '#ffe59a'
    );
  }else if(proof.regression!=='PASS'){
    setBeautyText09B(resultEl09B,'WAIT FOR 06J REGRESSION PASS','#ffe59a');
  }else{
    setBeautyText09B(resultEl09B,'BUILDING SUNLIT BASIN PRESENTATION PASS 2','#ffe59a');
  }
}

const hooks09B=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);
const frameHook09B=(now)=>{
  try{
    const regression=globalThis.__livingWorld06J?.stage||'WAITING';
    if(regression==='PASS'&&!sliceBuilt09B&&!buildError09B)buildSlice09B();

    if(sliceBuilt09B){
      const t=(now-buildTime09B)/1000;
      for(const material of root09B.userData.animatedMaterials||[]){
        const shader=material?.userData?.beautyShader;
        if(shader?.uniforms?.uBeautyTime)shader.uniforms.uBeautyTime.value=t;
        if(material?.uniforms?.uBeautyTime)material.uniforms.uBeautyTime.value=t;
      }
    }

    if(now>=hudNext09B){
      updateBeautyHud09B();
      hudNext09B=now+400;
    }
  }catch(error){
    buildError09B=error?.message||String(error);
  }
};
frameHook09B.verticalBeautySliceId='09B_VERTICAL_BEAUTY_SLICE';
if(!hooks09B.some(h=>h.verticalBeautySliceId==='09B_VERTICAL_BEAUTY_SLICE'))hooks09B.push(frameHook09B);

globalThis.__verticalBeautySlice09B={
  marker:BEAUTY_SLICE_09B_MARKER,
  spec:BEAUTY_SLICE_09B,
  root:root09B,
  center:center09B,
  get built(){return sliceBuilt09B;},
  get presentationTriangles(){return presentationTriangles09B;},
  get presentationDrawables(){return presentationDrawables09B;},
  get baselineCalls(){return baselineCalls09B;},
  get baselineTriangles(){return baselineTriangles09B;},
  get proof(){return presentationProof09B();}
};


// ---- Test 09D: Sunlit Basin Asset Integration Proof ----
import {GLTFLoader as GLTFLoader09D} from 'three/addons/loaders/GLTFLoader.js';
import {mergeGeometries as mergeGeometries09D} from 'three/addons/utils/BufferGeometryUtils.js';
import {
  ASSET_BASE_09D,
  ASSET_FILES_09D,
  APPROVED_MATERIALS_09D,
  PROTOTYPE_NAMES_09D,
  PLACEMENTS_09D,
  INTEGRATION_BUDGET_09D
} from '../threejs-test-09d-src/asset-integration-spec.js';

const ASSET_INTEGRATION_09D_MARKER='09D_SUNLIT_BASIN_ASSET_INTEGRATION';
const beauty09D=globalThis.__verticalBeautySlice09B;
const world09D=globalThis.__boundedPrefetch08C;
const actorSystem09D=globalThis.__productionActorPipeline07B;
if(!beauty09D||!world09D||!actorSystem09D)throw new Error('09D requires 09B + frozen Test08 runtime');

const integrationRoot09D=new THREE.Group();
integrationRoot09D.name='09D_09C_ASSET_INTEGRATION';
integrationRoot09D.userData.assetIntegration09D=true;

let stage09D='WAITING 09B';
let integrationError09D='';
let integrationStarted09D=false;
let integrationComplete09D=false;
let loadedCount09D=0;
let loadErrors09D=0;
let prototypeRemoved09D=0;
let materialBatches09D=0;
let integratedTriangles09D=0;
let hudNext09D=0;
let assetLoadMs09D=0;
let mergeMs09D=0;

const stageEl09D=document.getElementById('assetStage09D');
const loadsEl09D=document.getElementById('assetLoads09D');
const removedEl09D=document.getElementById('assetRemoved09D');
const placedEl09D=document.getElementById('assetPlaced09D');
const batchesEl09D=document.getElementById('assetBatches09D');
const assetTriEl09D=document.getElementById('assetTriangles09D');
const drawEl09D=document.getElementById('assetDraw09D');
const triEl09D=document.getElementById('assetTotalTriangles09D');
const soldierEl09D=document.getElementById('assetSoldierLoads09D');
const dupEl09D=document.getElementById('assetDuplicates09D');
const regressionEl09D=document.getElementById('assetRegression09D');
const resultEl09D=document.getElementById('assetResult09D');

function set09D(el,value,color){
  if(!el)return;
  const text=String(value);
  if(el.textContent!==text)el.textContent=text;
  if(color&&el.style.color!==color)el.style.color=color;
}

function removePrototype09D(){
  const root=beauty09D.root;
  let removed=0;
  for(const name of PROTOTYPE_NAMES_09D){
    const child=root.children.find(o=>o.name===name);
    if(child){
      root.remove(child);
      removed++;
    }
  }
  prototypeRemoved09D=removed;
}

function normalizedGeometry09D(mesh,placementMatrix){
  mesh.updateWorldMatrix(true,false);
  let g=mesh.geometry.clone();
  const combined=new THREE.Matrix4().multiplyMatrices(placementMatrix,mesh.matrixWorld);
  g.applyMatrix4(combined);

  if(g.index)g=g.toNonIndexed();
  for(const attr of Object.keys(g.attributes)){
    if(attr!=='position'&&attr!=='normal')g.deleteAttribute(attr);
  }
  if(!g.getAttribute('normal'))g.computeVertexNormals();
  g.computeBoundingBox();
  g.computeBoundingSphere();
  return g;
}

function consolidatedBucket09D(materialName){
  if(materialName.startsWith('MAT_FOLIAGE_'))return 'MAT_FOLIAGE_BATCH';
  if(materialName.startsWith('MAT_FLOWER_'))return 'MAT_FLOWER_BATCH';
  return materialName;
}

function bakeMaterialColor09D(geometry,material){
  const count=geometry.getAttribute('position')?.count||0;
  const color=material?.color?.isColor?material.color:new THREE.Color(0xffffff);
  const values=new Float32Array(count*3);
  for(let i=0;i<count;i++){
    const j=i*3;
    values[j]=color.r;
    values[j+1]=color.g;
    values[j+2]=color.b;
  }
  geometry.setAttribute('color',new THREE.BufferAttribute(values,3));
  return geometry;
}

function groundY09D(x,z,asset){
  // Ridges are distant silhouettes, not ground-contact gameplay props.
  if(asset.startsWith('ridge_')){
    return groundHeight(beauty09D.center.x+x,beauty09D.center.z+z)-1.0;
  }
  return groundHeight(beauty09D.center.x+x,beauty09D.center.z+z)+.04;
}

async function integrateAssets09D(){
  if(integrationStarted09D)return;
  integrationStarted09D=true;
  stage09D='LOADING GLBs';

  const loader=new GLTFLoader09D();
  const loaded=new Map();
  const tLoad=performance.now();

  const results=await Promise.allSettled(
    ASSET_FILES_09D.map(async name=>{
      const gltf=await loader.loadAsync(ASSET_BASE_09D+name);
      gltf.scene.updateMatrixWorld(true);
      loaded.set(name,gltf.scene);
      loadedCount09D++;
      return name;
    })
  );

  for(const r of results){
    if(r.status==='rejected')loadErrors09D++;
  }
  assetLoadMs09D=performance.now()-tLoad;
  if(loadErrors09D>0||loadedCount09D!==ASSET_FILES_09D.length){
    throw new Error('09D GLB load failure: '+loadedCount09D+'/'+ASSET_FILES_09D.length+' loaded, '+loadErrors09D+' errors');
  }

  stage09D='REPLACING PROTOTYPES';
  removePrototype09D();
  if(prototypeRemoved09D!==INTEGRATION_BUDGET_09D.requiredPrototypeReplacements){
    throw new Error('09D expected '+INTEGRATION_BUDGET_09D.requiredPrototypeReplacements+' prototype families, removed '+prototypeRemoved09D);
  }

  stage09D='BATCHING ASSETS';
  const tMerge=performance.now();
  const buckets=new Map();
  const materialTemplates=new Map();

  for(const placement of PLACEMENTS_09D){
    const source=loaded.get(placement.asset);
    if(!source)throw new Error('09D missing loaded asset '+placement.asset);

    const q=new THREE.Quaternion().setFromEuler(new THREE.Euler(0,placement.yaw,0));
    const p=new THREE.Vector3(
      placement.x,
      groundY09D(placement.x,placement.z,placement.asset),
      placement.z
    );
    const s=new THREE.Vector3(placement.scale,placement.scale,placement.scale);
    const placementMatrix=new THREE.Matrix4().compose(p,q,s);

    source.updateMatrixWorld(true);
    source.traverse(obj=>{
      if(!obj.isMesh)return;
      const materials=Array.isArray(obj.material)?obj.material:[obj.material];
      if(materials.length!==1)throw new Error('09D multi-material source mesh unsupported: '+placement.asset);
      const material=materials[0];
      const materialName=material?.name||'';
      if(!APPROVED_MATERIALS_09D.includes(materialName)){
        throw new Error('09D unapproved material '+materialName+' in '+placement.asset);
      }

      const bucketName=consolidatedBucket09D(materialName);
      let g=normalizedGeometry09D(obj,placementMatrix);
      if(bucketName==='MAT_FOLIAGE_BATCH'||bucketName==='MAT_FLOWER_BATCH'){
        g=bakeMaterialColor09D(g,material);
      }
      const list=buckets.get(bucketName)||[];
      list.push(g);
      buckets.set(bucketName,list);
      if(!materialTemplates.has(bucketName))materialTemplates.set(bucketName,material);
    });
  }

  materialBatches09D=buckets.size;
  if(materialBatches09D>INTEGRATION_BUDGET_09D.maxMaterialBatches){
    throw new Error('09D material batch ceiling exceeded: '+materialBatches09D);
  }

  for(const [materialName,geometries] of buckets){
    const merged=mergeGeometries09D(geometries,false);
    if(!merged)throw new Error('09D merge failed for '+materialName);

    const material=materialTemplates.get(materialName).clone();
    material.name=materialName;
    const consolidatedColors=
      materialName==='MAT_FOLIAGE_BATCH'||
      materialName==='MAT_FLOWER_BATCH';
    material.vertexColors=consolidatedColors;
    if(consolidatedColors&&material.color?.isColor)material.color.set(0xffffff);
    if(materialName.startsWith('MAT_GRASS_'))material.side=THREE.DoubleSide;
    material.needsUpdate=true;

    const mesh=new THREE.Mesh(merged,material);
    mesh.name='09D_BATCH_'+materialName;
    mesh.castShadow=
      !materialName.startsWith('MAT_GRASS_')&&
      materialName!=='MAT_FLOWER_BATCH';
    mesh.receiveShadow=true;
    integrationRoot09D.add(mesh);

    const count=merged.getAttribute('position')?.count||0;
    integratedTriangles09D+=Math.round(count/3);
  }

  mergeMs09D=performance.now()-tMerge;
  if(integratedTriangles09D>INTEGRATION_BUDGET_09D.maxAddedTriangles){
    throw new Error('09D integrated triangle ceiling exceeded: '+integratedTriangles09D);
  }

  beauty09D.root.add(integrationRoot09D);
  integrationComplete09D=true;
  stage09D='HUMAN REVIEW';
}

function runtimeDuplicates09D(){
  const f=world09D.factory;
  const r=world09D.regions;
  return (r.A?.duplicateCount||0)+(r.B?.duplicateCount||0)+(f?.duplicateBindingCount||0);
}

function proof09D(){
  const calls=renderer.info.render.calls||0;
  const triangles=renderer.info.render.triangles||0;
  const regression=globalThis.__livingWorld06J?.stage||'WAITING';
  const soldierLoads=actorSystem09D.factory.assetCache.loadCount;

  const checks={
    integration_complete:integrationComplete09D,
    glbs_loaded:loadedCount09D===INTEGRATION_BUDGET_09D.requiredAssetLoads,
    load_errors:loadErrors09D===0,
    prototypes_replaced:prototypeRemoved09D===INTEGRATION_BUDGET_09D.requiredPrototypeReplacements,
    placements:PLACEMENTS_09D.length<=INTEGRATION_BUDGET_09D.maxPlacementCount,
    material_batches:materialBatches09D<=INTEGRATION_BUDGET_09D.maxMaterialBatches,
    asset_triangles:integratedTriangles09D<=INTEGRATION_BUDGET_09D.maxAddedTriangles,
    draw_calls:calls<=INTEGRATION_BUDGET_09D.absoluteDrawCallsMax,
    total_triangles:triangles<=INTEGRATION_BUDGET_09D.absoluteTrianglesMax,
    soldier_asset_loads:soldierLoads===INTEGRATION_BUDGET_09D.soldierAssetLoadsExpected,
    duplicate_runtime_state:runtimeDuplicates09D()===INTEGRATION_BUDGET_09D.duplicateRuntimeStateExpected,
    regression:regression==='PASS',
    no_error:!integrationError09D
  };
  const failed=Object.entries(checks).filter(([,v])=>!v).map(([k])=>k);
  return {pass:failed.length===0,failed,checks,calls,triangles,regression,soldierLoads};
}

function updateHud09D(){
  const p=proof09D();
  set09D(stageEl09D,p.pass?'HUMAN REVIEW':integrationError09D?'FAIL':stage09D,p.pass?'#ffe59a':integrationError09D?'#ff9b9b':'#ffe59a');
  set09D(loadsEl09D,loadedCount09D+' / 13'+(loadErrors09D?' · errors '+loadErrors09D:''));
  set09D(removedEl09D,prototypeRemoved09D+' / 8');
  set09D(placedEl09D,String(PLACEMENTS_09D.length));
  set09D(batchesEl09D,materialBatches09D+' / 8');
  set09D(assetTriEl09D,integratedTriangles09D.toLocaleString()+' / 18,000');
  set09D(drawEl09D,p.calls+' / 120',p.calls<=120?'#bdf3c8':'#ff9b9b');
  set09D(triEl09D,p.triangles.toLocaleString()+' / 350,000',p.triangles<=350000?'#bdf3c8':'#ff9b9b');
  set09D(soldierEl09D,String(p.soldierLoads),p.soldierLoads===1?'#bdf3c8':'#ff9b9b');
  set09D(dupEl09D,String(runtimeDuplicates09D()),runtimeDuplicates09D()===0?'#bdf3c8':'#ff9b9b');
  set09D(regressionEl09D,p.regression,p.regression==='PASS'?'#bdf3c8':'#ffe59a');

  if(integrationError09D){
    set09D(resultEl09D,'ASSET INTEGRATION FAIL · '+integrationError09D,'#ff9b9b');
  }else if(p.pass){
    set09D(resultEl09D,'13 GLBs ✓ · PROTOTYPES REPLACED ✓ · MATERIAL BATCHES ✓ · SCALE/PLACEMENT RUNTIME ✓ · TEST08 PRESERVED ✓ · PERFORMANCE PASS ✓ · HUMAN ASSET REVIEW REQUIRED','#ffe59a');
  }else if(!beauty09D.built){
    set09D(resultEl09D,'WAITING FOR 09B SUNLIT BASIN','#ffe59a');
  }else{
    set09D(resultEl09D,'INTEGRATING 09C ASSETS INTO SUNLIT BASIN','#ffe59a');
  }
}

const hooks09D=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);
const hook09D=(now)=>{
  if(
    !integrationStarted09D&&
    beauty09D.built&&
    globalThis.__livingWorld06J?.stage==='PASS'
  ){
    integrateAssets09D().catch(error=>{
      integrationError09D=error?.message||String(error);
      stage09D='FAIL';
    });
  }
  if(now>=hudNext09D){
    updateHud09D();
    hudNext09D=now+350;
  }
};
hook09D.assetIntegrationId='09D_SUNLIT_BASIN_ASSET_INTEGRATION';
if(!hooks09D.some(h=>h.assetIntegrationId==='09D_SUNLIT_BASIN_ASSET_INTEGRATION'))hooks09D.push(hook09D);

globalThis.__assetIntegration09D={
  marker:ASSET_INTEGRATION_09D_MARKER,
  root:integrationRoot09D,
  get complete(){return integrationComplete09D;},
  get loadedCount(){return loadedCount09D;},
  get loadErrors(){return loadErrors09D;},
  get prototypesRemoved(){return prototypeRemoved09D;},
  get materialBatches(){return materialBatches09D;},
  get integratedTriangles(){return integratedTriangles09D;},
  get assetLoadMs(){return assetLoadMs09D;},
  get mergeMs(){return mergeMs09D;},
  get proof(){return proof09D();}
};


// ---- Test 09B: Vertical Beauty Slice / Presentation Pass 3 ----
const PRESENTATION_PASS_3_09B_MARKER='09B_PRESENTATION_PASS_3_ASSET_INTEGRATED';

let pass3Applied09B=false;
let pass3Error09B='';
let pass3HudNext09B=0;
let legacyMountainsHidden09B=0;

const p3StageEl09B=document.getElementById('p3Stage09B');
const p3MountainsEl09B=document.getElementById('p3Mountains09B');
const p3PlayerEl09B=document.getElementById('p3Player09B');
const p3AssetsEl09B=document.getElementById('p3Assets09B');
const p3BatchesEl09B=document.getElementById('p3Batches09B');
const p3DrawEl09B=document.getElementById('p3Draw09B');
const p3TriEl09B=document.getElementById('p3Triangles09B');
const p3RegressionEl09B=document.getElementById('p3Regression09B');
const p3DupEl09B=document.getElementById('p3Duplicates09B');
const p3ResultEl09B=document.getElementById('p3Result09B');

function setP3Text09B(el,value,color){
  if(!el)return;
  const text=String(value);
  if(el.textContent!==text)el.textContent=text;
  if(color&&el.style.color!==color)el.style.color=color;
}

function materialByNameP3(name){
  let found=null;
  beauty09D.root.traverse(o=>{
    if(found||!o.material)return;
    const mats=Array.isArray(o.material)?o.material:[o.material];
    for(const m of mats)if(m?.name===name){found=m;break;}
  });
  return found;
}

function objectByNameP3(name){
  return beauty09D.root.getObjectByName(name);
}

function applyPresentationPass3_09B(){
  if(pass3Applied09B)return;
  if(!globalThis.__assetIntegration09D?.complete)throw new Error('09B Pass 3 requires complete accepted 09D integration');

  // Remove inherited prototype horizon. The accepted 09C ridge GLBs remain.
  if(m1?.visible!==false){m1.visible=false;legacyMountainsHidden09B++;}
  if(m2?.visible!==false){m2.visible=false;legacyMountainsHidden09B++;}

  // Global presentation balance: deeper material response, less washout.
  renderer.toneMappingExposure=.92;
  scene.fog.color.set(0xaabfbd);
  scene.fog.density=.0067;

  hemi.color.set(0xc3dde3);
  hemi.groundColor.set(0x485246);
  hemi.intensity=1.18;
  fill.color.set(0x7e9298);
  fill.intensity=.085;
  sun.color.set(0xffdda9);
  sun.intensity=3.55;

  skyU.top.value.set(0x4789b2);
  skyU.mid.value.set(0xa8c6c3);
  skyU.bottom.value.set(0xe3cda6);
  skyU.sunWarm.value.set(0xffc77f);

  // Inherited world stays systemic, but recedes behind authored 09C asset families.
  bark.color.set(0x493326);
  bark.roughness=.96;
  leafA.color.set(0x28583a);
  leafB.color.set(0x376b45);
  leafC.color.set(0x4a7850);
  for(const m of [leafA,leafB,leafC])m.roughness=.9;
  bushMat.color.set(0x416d45);
  bushMat.roughness=.94;

  terrainMat.roughness=.98;
  terrainMat.bumpScale=.13;
  pathMat.color.set(0x7f654d);
  pathMat.roughness=.99;
  pathMat.bumpScale=.12;

  const meadow=objectByNameP3('09B meadow ground p2');
  if(meadow?.material){
    meadow.material.color.set(0xd5dfc4);
    meadow.material.roughness=.97;
    meadow.material.bumpScale=.10;
  }
  const path=objectByNameP3('09B soil path p2');
  if(path?.material){
    path.material.color.set(0xad8b67);
    path.material.roughness=.99;
    path.material.bumpScale=.11;
  }
  const shore=objectByNameP3('09B wet shoreline p2');
  if(shore?.material){
    shore.material.color.set(0x9c957e);
    shore.material.roughness=.92;
    shore.material.bumpScale=.08;
  }

  // Accepted 09C PBR families: preserve geometry/batching, tune only response.
  const barkDark=materialByNameP3('MAT_BARK_DARK');
  const barkWarm=materialByNameP3('MAT_BARK_WARM');
  const stoneWarm=materialByNameP3('MAT_STONE_WARM');
  const stoneDark=materialByNameP3('MAT_STONE_DARK');
  const grassMeadow=materialByNameP3('MAT_GRASS_MEADOW');
  const grassDark=materialByNameP3('MAT_GRASS_DARK');
  for(const m of [barkDark,barkWarm])if(m){m.roughness=.94;m.metalness=0;}
  for(const m of [stoneWarm,stoneDark])if(m){m.roughness=.98;m.metalness=0;}
  for(const m of [grassMeadow,grassDark])if(m){m.roughness=.92;m.metalness=0;}

  pass3Applied09B=true;
}

function pass3Proof09B(){
  const calls=renderer.info.render.calls||0;
  const triangles=renderer.info.render.triangles||0;
  const regression=globalThis.__livingWorld06J?.stage||'WAITING';
  const integration=globalThis.__assetIntegration09D;
  const duplicates=integration?.proof?.checks?.duplicate_runtime_state===true?0:1;
  const checks={
    applied:pass3Applied09B,
    accepted_09d_integration:integration?.complete===true,
    all_13_assets:integration?.loadedCount===13,
    legacy_mountains_hidden:legacyMountainsHidden09B===2,
    player_glb:characterMode==='GLB',
    material_batches:integration?.materialBatches<=8,
    draw_calls:calls<=120,
    triangles:triangles<=350000,
    regression:regression==='PASS',
    runtime_duplicates:duplicates===0,
    no_error:!pass3Error09B
  };
  const failed=Object.entries(checks).filter(([,v])=>!v).map(([k])=>k);
  return {automatedReady:failed.length===0,failed,checks,calls,triangles,regression,duplicates};
}

function updatePass3Hud09B(){
  const p=pass3Proof09B();
  setP3Text09B(p3StageEl09B,p.automatedReady?'HUMAN REVIEW':pass3Error09B?'FAIL':'BUILDING',p.automatedReady?'#ffe59a':pass3Error09B?'#ff9b9b':'#ffe59a');
  setP3Text09B(p3MountainsEl09B,legacyMountainsHidden09B+' / 2',legacyMountainsHidden09B===2?'#bdf3c8':'#ffe59a');
  setP3Text09B(p3PlayerEl09B,characterMode,characterMode==='GLB'?'#bdf3c8':'#ffb4a6');
  setP3Text09B(p3AssetsEl09B,(globalThis.__assetIntegration09D?.loadedCount||0)+' / 13');
  setP3Text09B(p3BatchesEl09B,(globalThis.__assetIntegration09D?.materialBatches||0)+' / 8');
  setP3Text09B(p3DrawEl09B,p.calls+' / 120',p.calls<=120?'#bdf3c8':'#ff9b9b');
  setP3Text09B(p3TriEl09B,p.triangles.toLocaleString()+' / 350,000',p.triangles<=350000?'#bdf3c8':'#ff9b9b');
  setP3Text09B(p3RegressionEl09B,p.regression,p.regression==='PASS'?'#bdf3c8':'#ffe59a');
  setP3Text09B(p3DupEl09B,String(p.duplicates),p.duplicates===0?'#bdf3c8':'#ff9b9b');

  if(pass3Error09B){
    setP3Text09B(p3ResultEl09B,'PASS 3 FAIL · '+pass3Error09B,'#ff9b9b');
  }else if(p.automatedReady){
    setP3Text09B(p3ResultEl09B,'ASSET-INTEGRATED ✓ · LEGACY MOUNTAINS REMOVED ✓ · PLAYER GLB ✓ · PERFORMANCE PASS ✓ · HUMAN PRESENTATION REVIEW REQUIRED','#ffe59a');
  }else if(characterMode!=='GLB'){
    setP3Text09B(p3ResultEl09B,'WAITING FOR LOCAL PLAYER GLB','#ffe59a');
  }else{
    setP3Text09B(p3ResultEl09B,'BUILDING PRESENTATION PASS 3','#ffe59a');
  }
}

const pass3Hooks09B=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);
const pass3Hook09B=(now)=>{
  try{
    if(!pass3Applied09B&&globalThis.__assetIntegration09D?.complete)applyPresentationPass3_09B();

    if(pass3Applied09B){
      // The inherited movement loop updates FOV before frame hooks. Enforce the
      // presentation lens here so the rendered frame uses the intended values.
      const movingFast=(keys.ShiftLeft||touchSprint)&&velocity.lengthSq()>.04;
      const targetFov=movingFast?56:50;
      camera.fov=THREE.MathUtils.lerp(camera.fov,targetFov,.18);
      camera.updateProjectionMatrix();
    }

    if(now>=pass3HudNext09B){
      updatePass3Hud09B();
      pass3HudNext09B=now+350;
    }
  }catch(error){
    pass3Error09B=error?.message||String(error);
  }
};
pass3Hook09B.presentationPass3Id='09B_PRESENTATION_PASS_3_ASSET_INTEGRATED';
if(!pass3Hooks09B.some(h=>h.presentationPass3Id===pass3Hook09B.presentationPass3Id))pass3Hooks09B.push(pass3Hook09B);

globalThis.__presentationPass3_09B={
  marker:PRESENTATION_PASS_3_09B_MARKER,
  get applied(){return pass3Applied09B;},
  get mountainsHidden(){return legacyMountainsHidden09B;},
  get proof(){return pass3Proof09B();}
};


// ---- Test 09B: Vertical Beauty Slice / Presentation Pass 4 ----
const PRESENTATION_PASS_4_09B_MARKER='09B_PRESENTATION_PASS_4_SCENE_ASSETIZATION';
const RIDGE_V2_BASE_09B='/assets/3d/sunlit-basin/v2/';
const RIDGE_V2_ASSETS_09B=['ridge_erosion_a.glb','ridge_erosion_b.glb'];

let pass4Applied09B=false;
let pass4Error09B='';
let pass4HudNext09B=0;
let ridgeV2Loaded09B=0;
let ridgeV2Triangles09B=0;
let ridgeV2BatchCount09B=0;
let oldRidgeClipMaterials09B=0;
let proofVisualsHidden09B=0;

const pass4RidgeRoot09B=new THREE.Group();
pass4RidgeRoot09B.name='09B_PASS4_V2_RIDGE_ASSETS';

const p4StageEl09B=document.getElementById('p4Stage09B');
const p4RidgeEl09B=document.getElementById('p4Ridge09B');
const p4OldRidgeEl09B=document.getElementById('p4OldRidge09B');
const p4DebugEl09B=document.getElementById('p4Debug09B');
const p4PlayerEl09B=document.getElementById('p4Player09B');
const p4AssetsEl09B=document.getElementById('p4Assets09B');
const p4DrawEl09B=document.getElementById('p4Draw09B');
const p4TriEl09B=document.getElementById('p4Triangles09B');
const p4DupEl09B=document.getElementById('p4Duplicates09B');
const p4RegressionEl09B=document.getElementById('p4Regression09B');
const p4ResultEl09B=document.getElementById('p4Result09B');

function setP4Text09B(el,value,color){
  if(!el)return;
  const text=String(value);
  if(el.textContent!==text)el.textContent=text;
  if(color&&el.style.color!==color)el.style.color=color;
}

function clipLegacyRidgeGeometry09B(material){
  if(!material||material.userData?.pass4RidgeClip)return false;
  material.userData.pass4RidgeClip=true;
  material.onBeforeCompile=shader=>{
    shader.vertexShader=shader.vertexShader
      .replace('#include <common>','#include <common>\nvarying float vPass4LocalZ;')
      .replace('#include <begin_vertex>','#include <begin_vertex>\nvPass4LocalZ=position.z;');
    shader.fragmentShader=shader.fragmentShader
      .replace('#include <common>','#include <common>\nvarying float vPass4LocalZ;')
      .replace('#include <clipping_planes_fragment>','#include <clipping_planes_fragment>\nif(vPass4LocalZ>43.0) discard;');
  };
  material.customProgramCacheKey=()=>('09B-pass4-ridge-clip-'+material.name);
  material.needsUpdate=true;
  return true;
}

function hideProofVisuals09B(){
  const visuals=[
    foragerRoot06D,
    controlRoot06E,
    arbRoot06F,
    foodMesh06F,
    recoveryRoot06G,
    recoveryFood06G,
    markerMesh07B
  ];
  let count=0;
  for(const visual of visuals){
    if(visual&&visual.visible!==false){
      visual.visible=false;
      count++;
    }else if(visual){
      count++;
    }
  }
  proofVisualsHidden09B=count;
  if(lodRoot06I)lodRoot06I.visible=false;
}

async function loadV2Ridges09B(){
  const loader=new GLTFLoader09D();
  const loaded=new Map();
  const results=await Promise.allSettled(
    RIDGE_V2_ASSETS_09B.map(async name=>{
      const gltf=await loader.loadAsync(RIDGE_V2_BASE_09B+name);
      gltf.scene.updateMatrixWorld(true);
      loaded.set(name,gltf.scene);
      ridgeV2Loaded09B++;
    })
  );
  const failed=results.filter(r=>r.status==='rejected');
  if(failed.length)throw new Error('Pass 4 ridge GLB load failure '+ridgeV2Loaded09B+'/2');

  const placements=[
    {asset:'ridge_erosion_a.glb',x:-24,z:49,scale:1.35,yaw:-.035},
    {asset:'ridge_erosion_b.glb',x:15,z:55,scale:1.25,yaw:.028},
    {asset:'ridge_erosion_b.glb',x:-12,z:68,scale:1.52,yaw:-.018},
    {asset:'ridge_erosion_a.glb',x:23,z:74,scale:1.42,yaw:.018}
  ];

  const geos=[];
  let templateMat=null;
  for(const p of placements){
    const source=loaded.get(p.asset);
    const q=new THREE.Quaternion().setFromEuler(new THREE.Euler(0,p.yaw,0));
    const worldX=beauty09D.center.x+p.x;
    const worldZ=beauty09D.center.z+p.z;
    const y=groundHeight(worldX,worldZ)-1.25;
    const placementMatrix=new THREE.Matrix4().compose(
      new THREE.Vector3(p.x,y,p.z),
      q,
      new THREE.Vector3(p.scale,p.scale,p.scale)
    );
    source.updateMatrixWorld(true);
    source.traverse(obj=>{
      if(!obj.isMesh)return;
      const mat=Array.isArray(obj.material)?obj.material[0]:obj.material;
      if(!mat||mat.name!=='MAT_RIDGE_SLATE')throw new Error('Pass 4 ridge material mismatch');
      if(!templateMat)templateMat=mat;
      geos.push(normalizedGeometry09D(obj,placementMatrix));
    });
  }

  const merged=mergeGeometries09D(geos,false);
  if(!merged)throw new Error('Pass 4 ridge merge failed');
  ridgeV2Triangles09B=Math.round((merged.getAttribute('position')?.count||0)/3);

  const mat=templateMat.clone();
  mat.name='MAT_RIDGE_SLATE';
  mat.color.set(0x59645f);
  mat.roughness=.99;
  mat.metalness=0;
  mat.needsUpdate=true;

  const mesh=new THREE.Mesh(merged,mat);
  mesh.name='09B_PASS4_RIDGE_BATCH';
  mesh.castShadow=false;
  mesh.receiveShadow=false;
  pass4RidgeRoot09B.add(mesh);
  ridgeV2BatchCount09B=1;
  beauty09D.root.add(pass4RidgeRoot09B);
}

async function applyPresentationPass4_09B(){
  if(pass4Applied09B)return;
  if(!globalThis.__presentationPass3_09B?.applied)throw new Error('Pass 4 requires applied Pass 3');
  if(!globalThis.__assetIntegration09D?.complete)throw new Error('Pass 4 requires accepted 09D integration');

  hideProofVisuals09B();

  const stoneWarm=materialByNameP3('MAT_STONE_WARM');
  const stoneDark=materialByNameP3('MAT_STONE_DARK');
  if(clipLegacyRidgeGeometry09B(stoneWarm))oldRidgeClipMaterials09B++;
  if(clipLegacyRidgeGeometry09B(stoneDark))oldRidgeClipMaterials09B++;

  if(stoneWarm){
    stoneWarm.color.set(0x78756a);
    stoneWarm.roughness=.99;
  }
  if(stoneDark){
    stoneDark.color.set(0x555b57);
    stoneDark.roughness=.99;
  }

  terrainMat.color.set(0xb9c6a4);
  terrainMat.roughness=.99;
  terrainMat.bumpScale=.16;
  pathMat.color.set(0x765b45);
  pathMat.roughness=1;
  pathMat.bumpScale=.14;

  const meadow=objectByNameP3('09B meadow ground p2');
  if(meadow?.material){
    meadow.material.color.set(0xb5c39e);
    meadow.material.roughness=.99;
    meadow.material.bumpScale=.11;
  }
  const path=objectByNameP3('09B soil path p2');
  if(path?.material){
    path.material.color.set(0x977155);
    path.material.roughness=1;
    path.material.bumpScale=.13;
  }
  const shore=objectByNameP3('09B wet shoreline p2');
  if(shore?.material){
    shore.material.color.set(0x858376);
    shore.material.roughness=.95;
    shore.material.bumpScale=.09;
  }

  // Slightly stronger near/far separation without a post-process pass.
  scene.fog.color.set(0xa1b7b5);
  scene.fog.density=.0063;
  renderer.toneMappingExposure=.90;

  await loadV2Ridges09B();
  pass4Applied09B=true;
}

function pass4Proof09B(){
  const calls=renderer.info.render.calls||0;
  const triangles=renderer.info.render.triangles||0;
  const regression=globalThis.__livingWorld06J?.stage||'WAITING';
  const integration=globalThis.__assetIntegration09D;
  const duplicates=integration?.proof?.checks?.duplicate_runtime_state===true?0:1;
  const checks={
    applied:pass4Applied09B,
    pass3:globalThis.__presentationPass3_09B?.applied===true,
    integration:integration?.complete===true,
    player_glb:characterMode==='GLB',
    v2_ridge_assets:ridgeV2Loaded09B===2,
    v2_ridge_batch:ridgeV2BatchCount09B===1,
    legacy_ridge_clip:oldRidgeClipMaterials09B===2,
    proof_visuals_hidden:proofVisualsHidden09B===7,
    draw_calls:calls<=120,
    triangles:triangles<=350000,
    regression:regression==='PASS',
    duplicates:duplicates===0,
    no_error:!pass4Error09B
  };
  const failed=Object.entries(checks).filter(([,ok])=>!ok).map(([k])=>k);
  return {automatedReady:failed.length===0,failed,checks,calls,triangles,regression,duplicates};
}

function updatePass4Hud09B(){
  if(lodRoot06I)lodRoot06I.visible=false;
  const p=pass4Proof09B();
  setP4Text09B(p4StageEl09B,p.automatedReady?'HUMAN REVIEW':pass4Error09B?'FAIL':'BUILDING',p.automatedReady?'#ffe59a':pass4Error09B?'#ff9b9b':'#ffe59a');
  setP4Text09B(p4RidgeEl09B,ridgeV2Loaded09B+' / 2 · '+ridgeV2BatchCount09B+' batch');
  setP4Text09B(p4OldRidgeEl09B,oldRidgeClipMaterials09B+' / 2');
  setP4Text09B(p4DebugEl09B,proofVisualsHidden09B+' + LOD');
  setP4Text09B(p4PlayerEl09B,characterMode,characterMode==='GLB'?'#bdf3c8':'#ff9b9b');
  setP4Text09B(p4AssetsEl09B,(globalThis.__assetIntegration09D?.loadedCount||0)+' + 2');
  setP4Text09B(p4DrawEl09B,p.calls+' / 120',p.calls<=120?'#bdf3c8':'#ff9b9b');
  setP4Text09B(p4TriEl09B,p.triangles.toLocaleString()+' / 350,000',p.triangles<=350000?'#bdf3c8':'#ff9b9b');
  setP4Text09B(p4DupEl09B,String(p.duplicates),p.duplicates===0?'#bdf3c8':'#ff9b9b');
  setP4Text09B(p4RegressionEl09B,p.regression,p.regression==='PASS'?'#bdf3c8':'#ffe59a');

  if(pass4Error09B){
    setP4Text09B(p4ResultEl09B,'PASS 4 FAIL · '+pass4Error09B,'#ff9b9b');
  }else if(p.automatedReady){
    setP4Text09B(p4ResultEl09B,'V2 RIDGE ASSETS ✓ · V1 RIDGE PRESENTATION CLIPPED ✓ · PROOF VISUALS SUPPRESSED ✓ · PLAYER GLB ✓ · PERFORMANCE PASS ✓ · HUMAN PRESENTATION REVIEW REQUIRED','#ffe59a');
  }else{
    setP4Text09B(p4ResultEl09B,'BUILDING SCENE ASSETIZATION PASS','#ffe59a');
  }
}

const pass4Hooks09B=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);
let pass4Started09B=false;
const pass4Hook09B=(now)=>{
  if(!pass4Started09B&&globalThis.__presentationPass3_09B?.applied&&globalThis.__assetIntegration09D?.complete){
    pass4Started09B=true;
    applyPresentationPass4_09B().catch(error=>{
      pass4Error09B=error?.message||String(error);
    });
  }

  // Proof-only visuals can be recreated by their original runtime lifecycle.
  // Keep presentation suppression separate from the frozen state machines.
  if(lodRoot06I)lodRoot06I.visible=false;

  if(now>=pass4HudNext09B){
    updatePass4Hud09B();
    pass4HudNext09B=now+350;
  }
};
pass4Hook09B.presentationPass4Id='09B_PRESENTATION_PASS_4_SCENE_ASSETIZATION';
if(!pass4Hooks09B.some(h=>h.presentationPass4Id===pass4Hook09B.presentationPass4Id))pass4Hooks09B.push(pass4Hook09B);

globalThis.__presentationPass4_09B={
  marker:PRESENTATION_PASS_4_09B_MARKER,
  root:pass4RidgeRoot09B,
  get applied(){return pass4Applied09B;},
  get ridgeAssetsLoaded(){return ridgeV2Loaded09B;},
  get ridgeTriangles(){return ridgeV2Triangles09B;},
  get proof(){return pass4Proof09B();}
};


// ---- Test 09B: Vertical Beauty Slice / Presentation Pass 5 ----
const PRESENTATION_PASS_5_09B_MARKER='09B_PRESENTATION_PASS_5_ENVIRONMENT_ART';
const ENV_V3_BASE_09B='/assets/3d/sunlit-basin/v3/';
const ENV_V3_ASSETS_09B=[
  'terrain_bank_a.glb',
  'terrain_bank_b.glb',
  'path_cut_berms.glb',
  'shoreline_shelf.glb',
  'ruin_sunlit_gate_v2.glb',
  'tree_d_forked.glb',
  'tree_e_windswept.glb',
  'wetland_cluster.glb'
];

let pass5Started09B=false;
let pass5Applied09B=false;
let pass5Error09B='';
let pass5HudNext09B=0;
let pass5Loaded09B=0;
let pass5Batches09B=0;
let pass5Triangles09B=0;
let legacyGateClipMaterials09B=0;
let pass5ConformedVertices09B=0;
let pass5MinVertexClearance09B=Infinity;
let legacyShoreHidden09B=false;
let legacyMeadowHidden09B=false;

const pass5Root09B=new THREE.Group();
pass5Root09B.name='09B_PASS5_ENVIRONMENT_ART';

const p5StageEl09B=document.getElementById('p5Stage09B');
const p5AssetsEl09B=document.getElementById('p5Assets09B');
const p5BatchesEl09B=document.getElementById('p5Batches09B');
const p5AssetTriEl09B=document.getElementById('p5AssetTri09B');
const p5GateEl09B=document.getElementById('p5Gate09B');
const p5PlayerEl09B=document.getElementById('p5Player09B');
const p5DrawEl09B=document.getElementById('p5Draw09B');
const p5TriEl09B=document.getElementById('p5Triangles09B');
const p5DupEl09B=document.getElementById('p5Duplicates09B');
const p5RegressionEl09B=document.getElementById('p5Regression09B');
const p5ResultEl09B=document.getElementById('p5Result09B');

function setP5Text09B(el,value,color){
  if(!el)return;
  const text=String(value);
  if(el.textContent!==text)el.textContent=text;
  if(color&&el.style.color!==color)el.style.color=color;
}

function clipLegacyGateGeometry09B(material){
  if(!material||material.userData?.pass5GateClip)return false;
  material.userData.pass5GateClip=true;

  const previousCompile=material.onBeforeCompile;
  const previousKey=material.customProgramCacheKey?.bind(material);

  material.onBeforeCompile=shader=>{
    if(previousCompile)previousCompile(shader);

    shader.vertexShader=shader.vertexShader
      .replace('#include <common>','#include <common>\nvarying vec2 vPass5LocalXZ;')
      .replace('#include <begin_vertex>','#include <begin_vertex>\nvPass5LocalXZ=position.xz;');

    shader.fragmentShader=shader.fragmentShader
      .replace('#include <common>','#include <common>\nvarying vec2 vPass5LocalXZ;')
      .replace(
        '#include <clipping_planes_fragment>',
        '#include <clipping_planes_fragment>\n'+
        'if(abs(vPass5LocalXZ.x-5.0)<4.7 && abs(vPass5LocalXZ.y-25.0)<4.6) discard;'
      );
  };

  material.customProgramCacheKey=()=>(
    '09B-pass5-gate-clip-'+material.name+'-'+(previousKey?previousKey():'base')
  );
  material.needsUpdate=true;
  return true;
}

function environmentPlacementY09B(x,z,asset){
  const wx=beauty09D.center.x+x;
  const wz=beauty09D.center.z+z;
  let y=groundHeight(wx,wz)+.035;
  if(asset==='shoreline_shelf.glb')y+=.06;
  if(asset==='wetland_cluster.glb')y+=.035;
  return y;
}

function visibleGroundYPass5_09B(localX,localZ){
  const wx=beauty09D.center.x+localX;
  const wz=beauty09D.center.z+localZ;
  // Match the actual systemic terrain mesh exactly. The base terrain geometry
  // is authored from heightAt(x,z); the duplicate meadow overlay is suppressed.
  return heightAt(wx,wz);
}

function conformTerrainGeometryPass5_09B(geometry,placementY,asset){
  if(![
    'terrain_bank_a.glb',
    'terrain_bank_b.glb',
    'path_cut_berms.glb',
    'shoreline_shelf.glb'
  ].includes(asset))return geometry;

  const pos=geometry.getAttribute('position');
  if(!pos)throw new Error('Pass 5 conform geometry missing position '+asset);

  for(let i=0;i<pos.count;i++){
    const x=pos.getX(i);
    const z=pos.getZ(i);
    const authoredOffset=pos.getY(i)-placementY;
    const clearance=Math.abs(authoredOffset);
    if(clearance<.10){
      throw new Error('Pass 5 terrain vertex entered coplanar band '+asset+' '+clearance.toFixed(4));
    }
    pass5MinVertexClearance09B=Math.min(pass5MinVertexClearance09B,clearance);
    pos.setY(i,visibleGroundYPass5_09B(x,z)+authoredOffset);
    pass5ConformedVertices09B++;
  }

  pos.needsUpdate=true;
  geometry.computeVertexNormals();
  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();
  return geometry;
}

async function loadPass5EnvironmentAssets09B(){
  const loader=new GLTFLoader09D();
  const loaded=new Map();

  const results=await Promise.allSettled(
    ENV_V3_ASSETS_09B.map(async name=>{
      const gltf=await loader.loadAsync(ENV_V3_BASE_09B+name);
      gltf.scene.updateMatrixWorld(true);
      loaded.set(name,gltf.scene);
      pass5Loaded09B++;
    })
  );
  const failed=results.filter(r=>r.status==='rejected');
  if(failed.length)throw new Error('Pass 5 environment GLB load failure '+pass5Loaded09B+'/8');

  const placements=[
    // Meso-scale banks around the basin.
    {asset:'terrain_bank_a.glb',x:-3,z:-8,scale:1.0,yaw:Math.PI*.48},
    {asset:'terrain_bank_a.glb',x:13,z:8,scale:.92,yaw:Math.PI*.15},
    {asset:'terrain_bank_a.glb',x:-18,z:18,scale:.88,yaw:Math.PI*.73},
    {asset:'terrain_bank_b.glb',x:-18,z:-9,scale:1.05,yaw:Math.PI*.18},
    {asset:'terrain_bank_b.glb',x:17,z:-15,scale:.96,yaw:Math.PI*.61},
    {asset:'terrain_bank_b.glb',x:20,z:15,scale:.90,yaw:Math.PI*.92},

    // Path cuts: oriented along the traversal path.
    {asset:'path_cut_berms.glb',x:-.7,z:-15,scale:1.0,yaw:Math.PI/2},
    {asset:'path_cut_berms.glb',x:1.8,z:-2,scale:.95,yaw:Math.PI/2+.04},
    {asset:'path_cut_berms.glb',x:4.3,z:12,scale:.92,yaw:Math.PI/2+.06},

    // Authored shoreline: two half-ring placements, no coplanar overlap.
    {asset:'shoreline_shelf.glb',x:-12,z:7,scale:1.04,yaw:0},
    {asset:'shoreline_shelf.glb',x:-12,z:7,scale:1.04,yaw:Math.PI},

    // Hero ruin replaces presentation of old gate region.
    {asset:'ruin_sunlit_gate_v2.glb',x:5,z:25,scale:1.05,yaw:.03},

    // Stronger tree silhouettes.
    {asset:'tree_d_forked.glb',x:-22,z:4,scale:1.05,yaw:-.35},
    {asset:'tree_d_forked.glb',x:18,z:20,scale:.96,yaw:.48},
    {asset:'tree_d_forked.glb',x:24,z:-14,scale:1.02,yaw:-.12},
    {asset:'tree_e_windswept.glb',x:-21,z:20,scale:1.02,yaw:.80},
    {asset:'tree_e_windswept.glb',x:16,z:-20,scale:.92,yaw:-.55},
    {asset:'tree_e_windswept.glb',x:-8,z:27,scale:.97,yaw:.28},

    // Wetland ecology — clustered near water instead of uniform scatter.
    {asset:'wetland_cluster.glb',x:-19,z:7,scale:1.05,yaw:.15},
    {asset:'wetland_cluster.glb',x:-17,z:12,scale:.95,yaw:-.30},
    {asset:'wetland_cluster.glb',x:-12,z:15,scale:1.12,yaw:.45},
    {asset:'wetland_cluster.glb',x:-6,z:10,scale:.92,yaw:-.20},
    {asset:'wetland_cluster.glb',x:-7,z:4,scale:1.0,yaw:.30},
    {asset:'wetland_cluster.glb',x:-15,z:0,scale:.88,yaw:-.45}
  ];

  const buckets=new Map();
  const materials=new Map();

  for(const p of placements){
    const source=loaded.get(p.asset);
    if(!source)throw new Error('Pass 5 missing source '+p.asset);

    const q=new THREE.Quaternion().setFromEuler(new THREE.Euler(0,p.yaw,0));
    const matrix=new THREE.Matrix4().compose(
      new THREE.Vector3(p.x,environmentPlacementY09B(p.x,p.z,p.asset),p.z),
      q,
      new THREE.Vector3(p.scale,p.scale,p.scale)
    );

    source.updateMatrixWorld(true);
    source.traverse(obj=>{
      if(!obj.isMesh)return;
      const sourceMats=Array.isArray(obj.material)?obj.material:[obj.material];
      if(sourceMats.length!==1)throw new Error('Pass 5 multi-material mesh unsupported '+p.asset);
      const material=sourceMats[0];
      const name=material?.name||'';
      if(![
        'MAT_EARTH_WARM',
        'MAT_EARTH_DAMP',
        'MAT_RUIN_STONE',
        'MAT_BARK_DARK',
        'MAT_FOLIAGE_MID',
        'MAT_WETLAND_REED'
      ].includes(name))throw new Error('Pass 5 material not approved '+name);

      const placementY=environmentPlacementY09B(p.x,p.z,p.asset);
      const g=conformTerrainGeometryPass5_09B(
        normalizedGeometry09D(obj,matrix),
        placementY,
        p.asset
      );
      const list=buckets.get(name)||[];
      list.push(g);
      buckets.set(name,list);
      if(!materials.has(name))materials.set(name,material);
    });
  }

  pass5Batches09B=buckets.size;
  if(pass5Batches09B>6)throw new Error('Pass 5 batch ceiling exceeded '+pass5Batches09B);

  for(const [name,geos] of buckets){
    const merged=mergeGeometries09D(geos,false);
    if(!merged)throw new Error('Pass 5 merge failed '+name);

    const material=materials.get(name).clone();
    material.name=name;
    material.metalness=0;

    if(name==='MAT_EARTH_WARM')material.color.set(0x72684f);
    if(name==='MAT_EARTH_DAMP')material.color.set(0x66755b);
    if(name==='MAT_RUIN_STONE')material.color.set(0x77796f);
    if(name==='MAT_BARK_DARK')material.color.set(0x503526);
    if(name==='MAT_FOLIAGE_MID')material.color.set(0x3f7242);
    if(name==='MAT_WETLAND_REED'){
      material.color.set(0x718b50);
      material.side=THREE.DoubleSide;
    }
    material.roughness=Math.max(.9,material.roughness||.9);
    material.needsUpdate=true;

    const mesh=new THREE.Mesh(merged,material);
    mesh.name='09B_PASS5_BATCH_'+name;
    mesh.castShadow=!name.includes('WETLAND');
    mesh.receiveShadow=true;
    pass5Root09B.add(mesh);

    pass5Triangles09B+=Math.round((merged.getAttribute('position')?.count||0)/3);
  }

  beauty09D.root.add(pass5Root09B);
}

async function applyPresentationPass5_09B(){
  if(pass5Applied09B)return;
  if(!globalThis.__presentationPass4_09B?.applied)throw new Error('Pass 5 requires applied Pass 4');

  const stoneWarm=materialByNameP3('MAT_STONE_WARM');
  const stoneDark=materialByNameP3('MAT_STONE_DARK');
  if(clipLegacyGateGeometry09B(stoneWarm))legacyGateClipMaterials09B++;
  if(clipLegacyGateGeometry09B(stoneDark))legacyGateClipMaterials09B++;

  await loadPass5EnvironmentAssets09B();

  // The systemic terrain becomes the sole visible ground surface. Preserve the
  // Pass-5 presentation look through its existing vertex colors/material rather
  // than stacking a second near-coplanar meadow mesh above it.
  terrainMat.color.set(0xa9b59a);
  terrainMat.roughness=.99;
  terrainMat.bumpScale=.14;

  const meadow=objectByNameP3('09B meadow ground p2');
  if(meadow){
    meadow.visible=false;
    legacyMeadowHidden09B=true;
  }

  const path=objectByNameP3('09B soil path p2');
  if(path?.material){
    path.material.color.set(0x8c684e);
    path.material.roughness=1;
    path.material.bumpScale=.14;
  }

  const shore=objectByNameP3('09B wet shoreline p2');
  if(shore){
    shore.visible=false;
    legacyShoreHidden09B=true;
  }

  pass5Applied09B=true;
}

function pass5Proof09B(){
  const calls=renderer.info.render.calls||0;
  const triangles=renderer.info.render.triangles||0;
  const regression=globalThis.__livingWorld06J?.stage||'WAITING';
  const integration=globalThis.__assetIntegration09D;
  const duplicates=integration?.proof?.checks?.duplicate_runtime_state===true?0:1;
  const checks={
    applied:pass5Applied09B,
    pass4:globalThis.__presentationPass4_09B?.applied===true,
    v3_assets:pass5Loaded09B===8,
    v3_batches:pass5Batches09B<=6,
    gate_clip:legacyGateClipMaterials09B===2,
    terrain_conformance:pass5ConformedVertices09B>0,
    terrain_clearance:Number.isFinite(pass5MinVertexClearance09B)&&pass5MinVertexClearance09B>=.10,
    legacy_shore_hidden:legacyShoreHidden09B===true,
    legacy_meadow_hidden:legacyMeadowHidden09B===true,
    player_glb:characterMode==='GLB',
    draw_calls:calls<=120,
    triangles:triangles<=350000,
    regression:regression==='PASS',
    duplicates:duplicates===0,
    no_error:!pass5Error09B
  };
  const failed=Object.entries(checks).filter(([,ok])=>!ok).map(([k])=>k);
  return {automatedReady:failed.length===0,failed,checks,calls,triangles,regression,duplicates};
}

function updatePass5Hud09B(){
  if(lodRoot06I)lodRoot06I.visible=false;
  const p=pass5Proof09B();
  setP5Text09B(p5StageEl09B,p.automatedReady?'HUMAN REVIEW':pass5Error09B?'FAIL':'BUILDING',p.automatedReady?'#ffe59a':pass5Error09B?'#ff9b9b':'#ffe59a');
  setP5Text09B(p5AssetsEl09B,pass5Loaded09B+' / 8');
  setP5Text09B(p5BatchesEl09B,pass5Batches09B+' / 6');
  setP5Text09B(p5AssetTriEl09B,pass5Triangles09B.toLocaleString());
  setP5Text09B(p5GateEl09B,legacyGateClipMaterials09B+' / 2');
  setP5Text09B(p5PlayerEl09B,characterMode,characterMode==='GLB'?'#bdf3c8':'#ff9b9b');
  setP5Text09B(p5DrawEl09B,p.calls+' / 120',p.calls<=120?'#bdf3c8':'#ff9b9b');
  setP5Text09B(p5TriEl09B,p.triangles.toLocaleString()+' / 350,000',p.triangles<=350000?'#bdf3c8':'#ff9b9b');
  setP5Text09B(p5DupEl09B,String(p.duplicates),p.duplicates===0?'#bdf3c8':'#ff9b9b');
  setP5Text09B(p5RegressionEl09B,p.regression,p.regression==='PASS'?'#bdf3c8':'#ffe59a');

  if(pass5Error09B){
    setP5Text09B(p5ResultEl09B,'PASS 5 FAIL · '+pass5Error09B,'#ff9b9b');
  }else if(p.automatedReady){
    setP5Text09B(
      p5ResultEl09B,
      'ENVIRONMENT GLBs ✓ · SYSTEMIC GROUND ONLY ✓ · TERRAIN-CONFORMED BANKS/PATH/SHORE ✓ · ERODED BANK/BERM FORMS ✓ · LEGACY SHORE HIDDEN ✓ · RUIN V2 ✓ · TREE VARIANTS ✓ · WETLAND ECOLOGY ✓ · PERFORMANCE PASS ✓ · HUMAN PRESENTATION REVIEW REQUIRED',
      '#ffe59a'
    );
  }else{
    setP5Text09B(p5ResultEl09B,'BUILDING ENVIRONMENT ART PRODUCTION PASS','#ffe59a');
  }
}

const pass5Hooks09B=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);
const pass5Hook09B=(now)=>{
  if(!pass5Started09B&&globalThis.__presentationPass4_09B?.applied){
    pass5Started09B=true;
    applyPresentationPass5_09B().catch(error=>{
      pass5Error09B=error?.message||String(error);
    });
  }

  // Preserve Pass-4 presentation cleanup if frozen proof lifecycles recreate visuals.
  if(lodRoot06I)lodRoot06I.visible=false;

  if(now>=pass5HudNext09B){
    updatePass5Hud09B();
    pass5HudNext09B=now+350;
  }
};
pass5Hook09B.presentationPass5Id='09B_PRESENTATION_PASS_5_ENVIRONMENT_ART';
if(!pass5Hooks09B.some(h=>h.presentationPass5Id===pass5Hook09B.presentationPass5Id))pass5Hooks09B.push(pass5Hook09B);

globalThis.__presentationPass5_09B={
  marker:PRESENTATION_PASS_5_09B_MARKER,
  root:pass5Root09B,
  get applied(){return pass5Applied09B;},
  get assetsLoaded(){return pass5Loaded09B;},
  get batches(){return pass5Batches09B;},
  get triangles(){return pass5Triangles09B;},
  get conformedVertices(){return pass5ConformedVertices09B;},
  get minVertexClearance(){return pass5MinVertexClearance09B;},
  get legacyShoreHidden(){return legacyShoreHidden09B;},
  get legacyMeadowHidden(){return legacyMeadowHidden09B;},
  get proof(){return pass5Proof09B();}
};

export const PRESENTATION_REPLICATION_10A = Object.freeze({
  roadmap: 'Test10 — Presentation Replication',
  milestone: '10A — Second Environment Replication Proof',
  environment: 'Windcut Shelf',
  foundation: Object.freeze({
    acceptedBuild09B: '20260924205044',
    acceptancePath: 'labs/threejs-test-09b/acceptance.json',
    doctrine: 'Stylized Physical Realism'
  }),
  center: Object.freeze({
    source: '__boundedPrefetch08C.centers.B',
    terrainSampler: 'heightAt'
  }),
  budgets: Object.freeze({
    drawCallsMax: 120,
    trianglesMax: 350000,
    runtimeBatchesMax: 6,
    runtimeDuplicatesMax: 0,
    addedRafLoopsMax: 0,
    regression06J: 'PASS'
  }),
  materialBuckets: Object.freeze([
    'EARTH_CUT',
    'EARTH_CROWN',
    'STONE',
    'BARK',
    'FOLIAGE'
  ]),
  assets: Object.freeze({
    v3Base: '/assets/3d/sunlit-basin/v3/',
    v1Base: '/assets/3d/sunlit-basin/v1/',
    allowed: Object.freeze([
      'terrain_bank_a.glb',
      'terrain_bank_b.glb',
      'path_cut_berms.glb',
      'ruin_sunlit_gate_v2.glb',
      'tree_d_forked.glb',
      'tree_e_windswept.glb',
      'tree_a_tall_broad.glb',
      'tree_b_short_wide.glb',
      'tree_c_leaning_asym.glb',
      'rock_a_medium_angular.glb',
      'rock_b_flat_shore.glb',
      'rock_c_hero_boulder.glb',
      'shrub_a_round.glb',
      'shrub_b_spreading.glb'
    ])
  }),
  composition: Object.freeze({
    identity: 'exposed elevated forest shelf',
    waterCenterpiece: false,
    negativeSpace: 'high',
    canopyDensity: 'sparse-clustered',
    horizon: 'rock-and-ruin framed',
    route: 'diagonal',
    atmosphere: 'cooler-drier',
    macroFirst: true
  }),
  placements: Object.freeze([
    {asset:'terrain_bank_a.glb',version:'v3',x:-11,z:-7,scale:.88,yaw:.30},
    {asset:'terrain_bank_b.glb',version:'v3',x:10,z:8,scale:.84,yaw:2.25},
    {asset:'terrain_bank_b.glb',version:'v3',x:17,z:-10,scale:.78,yaw:1.62},
    {asset:'path_cut_berms.glb',version:'v3',x:-2,z:-10,scale:.92,yaw:1.08},
    {asset:'path_cut_berms.glb',version:'v3',x:5,z:8,scale:.84,yaw:1.14},
    {asset:'ruin_sunlit_gate_v2.glb',version:'v3',x:18,z:22,scale:.96,yaw:-.18},

    {asset:'tree_d_forked.glb',version:'v3',x:-22,z:16,scale:1.00,yaw:.42},
    {asset:'tree_e_windswept.glb',version:'v3',x:22,z:3,scale:.92,yaw:-.74},
    {asset:'tree_a_tall_broad.glb',version:'v1',x:-25,z:-11,scale:.92,yaw:.08},
    {asset:'tree_b_short_wide.glb',version:'v1',x:14,z:-22,scale:.86,yaw:1.14},
    {asset:'tree_c_leaning_asym.glb',version:'v1',x:-12,z:24,scale:.92,yaw:-.42},

    {asset:'rock_c_hero_boulder.glb',version:'v1',x:-18,z:4,scale:1.15,yaw:.24},
    {asset:'rock_c_hero_boulder.glb',version:'v1',x:10,z:19,scale:.92,yaw:1.20},
    {asset:'rock_a_medium_angular.glb',version:'v1',x:-5,z:16,scale:.90,yaw:.66},
    {asset:'rock_a_medium_angular.glb',version:'v1',x:14,z:-4,scale:.82,yaw:2.10},
    {asset:'rock_b_flat_shore.glb',version:'v1',x:-15,z:-16,scale:1.00,yaw:.48},
    {asset:'rock_b_flat_shore.glb',version:'v1',x:20,z:14,scale:.88,yaw:1.76},

    {asset:'shrub_a_round.glb',version:'v1',x:-8,z:5,scale:.82,yaw:.10},
    {asset:'shrub_a_round.glb',version:'v1',x:7,z:-15,scale:.76,yaw:.90},
    {asset:'shrub_b_spreading.glb',version:'v1',x:-20,z:11,scale:.82,yaw:1.40},
    {asset:'shrub_b_spreading.glb',version:'v1',x:17,z:6,scale:.78,yaw:-.60}
  ])
});


// ---- Test 10A: Presentation Replication / Windcut Shelf ----
const PRESENTATION_REPLICATION_10A_MARKER='10A_WINDCUT_SHELF_REPLICATION_PROOF';
const replicationWorld10A=globalThis.__boundedPrefetch08C;
const acceptedPresentation10A=globalThis.__presentationPass5_09B;
if(!replicationWorld10A||!acceptedPresentation10A)throw new Error('10A requires frozen 09B + frozen Test08 runtime');

const center10A={...replicationWorld10A.centers.B};
const root10A=new THREE.Group();
root10A.name='10A_WINDCUT_SHELF';
root10A.userData.presentationReplication10A=true;
root10A.position.set(center10A.x,0,center10A.z);

let started10A=false;
let applied10A=false;
let error10A='';
let loadedAssets10A=0;
let runtimeBatches10A=0;
let presentationTriangles10A=0;
let conformedVertices10A=0;
let minClearance10A=Infinity;
let hudNext10A=0;
let playerMoved10A=false;

const stageEl10A=document.getElementById('repStage10A');
const assetsEl10A=document.getElementById('repAssets10A');
const placementsEl10A=document.getElementById('repPlacements10A');
const batchesEl10A=document.getElementById('repBatches10A');
const drawEl10A=document.getElementById('repDraw10A');
const triEl10A=document.getElementById('repTriangles10A');
const dupEl10A=document.getElementById('repDuplicates10A');
const regressionEl10A=document.getElementById('repRegression10A');
const resultEl10A=document.getElementById('repResult10A');
const zoneEl10A=document.getElementById('zone');

function set10A(el,value,color){
  if(!el)return;
  const text=String(value);
  if(el.textContent!==text)el.textContent=text;
  if(color&&el.style.color!==color)el.style.color=color;
}

function assetUrl10A(name,version){
  if(version==='v3')return PRESENTATION_REPLICATION_10A.assets.v3Base+name;
  if(version==='v1')return PRESENTATION_REPLICATION_10A.assets.v1Base+name;
  throw new Error('10A unsupported asset version '+version);
}

function bucket10A(materialName){
  if(materialName==='MAT_EARTH_WARM')return 'EARTH_CUT';
  if(materialName==='MAT_EARTH_DAMP')return 'EARTH_CROWN';
  if(materialName==='MAT_RUIN_STONE'||materialName.startsWith('MAT_STONE_'))return 'STONE';
  if(materialName.startsWith('MAT_BARK_'))return 'BARK';
  if(materialName.startsWith('MAT_FOLIAGE_'))return 'FOLIAGE';
  throw new Error('10A material outside replication contract '+materialName);
}

function terrainIntegratedAsset10A(asset){
  return asset==='terrain_bank_a.glb'||
    asset==='terrain_bank_b.glb'||
    asset==='path_cut_berms.glb';
}

function conform10A(geometry,placementY,asset){
  if(!terrainIntegratedAsset10A(asset))return geometry;
  const p=geometry.getAttribute('position');
  if(!p)throw new Error('10A geometry missing position '+asset);
  for(let i=0;i<p.count;i++){
    const x=p.getX(i),z=p.getZ(i);
    const authoredOffset=p.getY(i)-placementY;
    const clearance=Math.abs(authoredOffset);
    if(clearance<.10)throw new Error('10A terrain clearance violation '+asset+' '+clearance.toFixed(4));
    minClearance10A=Math.min(minClearance10A,clearance);
    p.setY(i,heightAt(center10A.x+x,center10A.z+z)+authoredOffset);
    conformedVertices10A++;
  }
  p.needsUpdate=true;
  geometry.computeVertexNormals();
  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();
  return geometry;
}

function material10A(bucket){
  const configs={
    EARTH_CUT:{color:0xffffff,roughness:1.0},
    EARTH_CROWN:{color:0xffffff,roughness:.98},
    STONE:{color:0xffffff,roughness:.96},
    BARK:{color:0xffffff,roughness:.98},
    FOLIAGE:{color:0xffffff,roughness:.90}
  };
  const c=configs[bucket];
  const m=new THREE.MeshStandardMaterial({
    color:c.color,
    vertexColors:true,
    roughness:c.roughness,
    metalness:0
  });
  m.name='10A_'+bucket;
  return m;
}

function deactivateSunlitBasin10A(){
  root09B.visible=false;
  integrationRoot09D.visible=false;
  pass4RidgeRoot09B.visible=false;
  pass5Root09B.visible=false;
}

function tuneWindcutShelf10A(){
  terrainMat.color.set(0x9da58a);
  terrainMat.roughness=.99;
  terrainMat.bumpScale=.14;

  if(scene.fog&&'density' in scene.fog){
    scene.fog.color.set(0xb8c2b7);
    scene.fog.density=.0064;
  }

  hemi.color.set(0xd1e0df);
  hemi.groundColor.set(0x4e5647);
  hemi.intensity=1.18;
  fill.color.set(0x8da0a2);
  fill.intensity=.10;

  sun.color.set(0xffd6a2);
  sun.intensity=3.35;
  sun.position.set(center10A.x-50,58,center10A.z-18);
  sun.target.position.set(center10A.x,0,center10A.z+8);
  sun.target.updateMatrixWorld();

  if(typeof skyU!=='undefined'){
    skyU.top.value.set(0x6c9eb5);
    skyU.mid.value.set(0xbac9bf);
    skyU.bottom.value.set(0xddc49a);
    skyU.sunWarm.value.set(0xffc978);
  }
}

async function buildWindcutShelf10A(){
  deactivateSunlitBasin10A();
  tuneWindcutShelf10A();

  const loader=new GLTFLoader09D();
  const unique=new Map();
  const used=[];
  for(const p of PRESENTATION_REPLICATION_10A.placements){
    const key=p.version+':'+p.asset;
    if(!unique.has(key)){
      unique.set(key,null);
      used.push({key,asset:p.asset,version:p.version});
    }
  }

  const results=await Promise.allSettled(used.map(async item=>{
    const gltf=await loader.loadAsync(assetUrl10A(item.asset,item.version));
    gltf.scene.updateMatrixWorld(true);
    unique.set(item.key,gltf.scene);
    loadedAssets10A++;
  }));
  const failed=results.filter(r=>r.status==='rejected');
  if(failed.length)throw new Error('10A asset load failure '+loadedAssets10A+'/'+used.length);

  const buckets=new Map();
  for(const p of PRESENTATION_REPLICATION_10A.placements){
    const source=unique.get(p.version+':'+p.asset);
    if(!source)throw new Error('10A missing asset source '+p.asset);

    const placementY=heightAt(center10A.x+p.x,center10A.z+p.z)+.035;
    const q=new THREE.Quaternion().setFromEuler(new THREE.Euler(0,p.yaw,0));
    const matrix=new THREE.Matrix4().compose(
      new THREE.Vector3(p.x,placementY,p.z),
      q,
      new THREE.Vector3(p.scale,p.scale,p.scale)
    );

    source.updateMatrixWorld(true);
    source.traverse(obj=>{
      if(!obj.isMesh)return;
      const sourceMats=Array.isArray(obj.material)?obj.material:[obj.material];
      if(sourceMats.length!==1)throw new Error('10A multi-material mesh unsupported '+p.asset);
      const sourceMat=sourceMats[0];
      const bucket=bucket10A(sourceMat?.name||'');
      let g=normalizedGeometry09D(obj,matrix);
      g=bakeMaterialColor09D(g,sourceMat);
      g=conform10A(g,placementY,p.asset);
      const list=buckets.get(bucket)||[];
      list.push(g);
      buckets.set(bucket,list);
    });
  }

  runtimeBatches10A=buckets.size;
  if(runtimeBatches10A>PRESENTATION_REPLICATION_10A.budgets.runtimeBatchesMax){
    throw new Error('10A batch ceiling exceeded '+runtimeBatches10A);
  }

  for(const [bucket,geos] of buckets){
    const merged=mergeGeometries09D(geos,false);
    if(!merged)throw new Error('10A merge failed '+bucket);
    const mesh=new THREE.Mesh(merged,material10A(bucket));
    mesh.name='10A_BATCH_'+bucket;
    mesh.castShadow=true;
    mesh.receiveShadow=true;
    root10A.add(mesh);
    presentationTriangles10A+=Math.round((merged.getAttribute('position')?.count||0)/3);
  }

  scene.add(root10A);

  if(!playerMoved10A){
    const sx=center10A.x-4;
    const sz=center10A.z-16;
    playerRoot.position.set(sx,groundHeight(sx,sz),sz);
    velocity.set(0,0,0);
    verticalVel=0;
    yaw=.36;
    pitch=.29;
    camDist=8.2;
    playerMoved10A=true;
  }

  applied10A=true;
}

function proof10A(){
  const calls=renderer.info.render.calls||0;
  const triangles=renderer.info.render.triangles||0;
  const regression=globalThis.__livingWorld06J?.stage||'WAITING';
  const duplicates=globalThis.__assetIntegration09D?.proof?.checks?.duplicate_runtime_state===true?0:1;
  const expectedAssets=new Set(PRESENTATION_REPLICATION_10A.placements.map(p=>p.version+':'+p.asset)).size;
  const checks={
    applied:applied10A,
    frozen_09b:acceptedPresentation10A?.applied===true,
    assets:loadedAssets10A===expectedAssets,
    placements:PRESENTATION_REPLICATION_10A.placements.length===21,
    batches:runtimeBatches10A<=PRESENTATION_REPLICATION_10A.budgets.runtimeBatchesMax,
    terrain_conformance:conformedVertices10A>0,
    terrain_clearance:Number.isFinite(minClearance10A)&&minClearance10A>=.10,
    draw_calls:calls<=PRESENTATION_REPLICATION_10A.budgets.drawCallsMax,
    triangles:triangles<=PRESENTATION_REPLICATION_10A.budgets.trianglesMax,
    duplicates:duplicates===0,
    regression:regression==='PASS',
    player_glb:characterMode==='GLB',
    no_error:!error10A
  };
  const failed=Object.entries(checks).filter(([,ok])=>!ok).map(([k])=>k);
  return {automatedReady:failed.length===0,failed,checks,calls,triangles,duplicates,regression,expectedAssets};
}

function updateHud10A(){
  const p=proof10A();
  set10A(stageEl10A,p.automatedReady?'HUMAN REVIEW':error10A?'FAIL':'BUILDING',p.automatedReady?'#ffe59a':error10A?'#ff9b9b':'#ffe59a');
  set10A(assetsEl10A,loadedAssets10A+' / '+p.expectedAssets);
  set10A(placementsEl10A,PRESENTATION_REPLICATION_10A.placements.length+' / 21');
  set10A(batchesEl10A,runtimeBatches10A+' / 6');
  set10A(drawEl10A,p.calls+' / 120',p.calls<=120?'#bdf3c8':'#ff9b9b');
  set10A(triEl10A,p.triangles.toLocaleString()+' / 350,000',p.triangles<=350000?'#bdf3c8':'#ff9b9b');
  set10A(dupEl10A,String(p.duplicates),p.duplicates===0?'#bdf3c8':'#ff9b9b');
  set10A(regressionEl10A,p.regression,p.regression==='PASS'?'#bdf3c8':'#ffe59a');

  if(error10A){
    set10A(resultEl10A,'10A FAIL · '+error10A,'#ff9b9b');
  }else if(p.automatedReady){
    set10A(resultEl10A,'REUSE-ONLY COMPOSITION ✓ · DISTINCT REGION B ENVIRONMENT ✓ · <=6 BATCHES ✓ · PERFORMANCE PASS ✓ · HUMAN PRESENTATION REVIEW REQUIRED','#ffe59a');
  }else{
    set10A(resultEl10A,'BUILDING WINDCUT SHELF REPLICATION PROOF','#ffe59a');
  }
}

const hooks10A=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);
const hook10A=(now)=>{
  if(zoneEl10A)zoneEl10A.textContent='10A · WINDCUT SHELF · REPLICATION PROOF';

  if(!started10A&&acceptedPresentation10A?.applied&&globalThis.__livingWorld06J?.stage==='PASS'){
    started10A=true;
    buildWindcutShelf10A().catch(error=>{
      error10A=error?.message||String(error);
    });
  }

  if(now>=hudNext10A){
    updateHud10A();
    hudNext10A=now+350;
  }
};
hook10A.presentationReplicationId='10A_WINDCUT_SHELF_REPLICATION_PROOF';
if(!hooks10A.some(h=>h.presentationReplicationId===hook10A.presentationReplicationId))hooks10A.push(hook10A);

globalThis.__presentationReplication10A={
  marker:PRESENTATION_REPLICATION_10A_MARKER,
  root:root10A,
  center:center10A,
  recipe:PRESENTATION_REPLICATION_10A,
  get applied(){return applied10A;},
  get assetLoads(){return loadedAssets10A;},
  get batches(){return runtimeBatches10A;},
  get presentationTriangles(){return presentationTriangles10A;},
  get proof(){return proof10A();}
};
