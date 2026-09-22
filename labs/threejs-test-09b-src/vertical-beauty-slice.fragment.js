
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
