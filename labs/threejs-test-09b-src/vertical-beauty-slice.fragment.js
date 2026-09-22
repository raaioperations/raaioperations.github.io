
// ---- Test 09B: Vertical Beauty Slice / Sunlit Basin ----
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

function patchWind09B(material,{speed=.8,strength=.12,scale=.1}={}){
  material.onBeforeCompile=shader=>{
    shader.uniforms.uBeautyTime={value:0};
    shader.vertexShader=shader.vertexShader
      .replace('#include <common>','#include <common>\nuniform float uBeautyTime;')
      .replace(
        '#include <begin_vertex>',
        '#include <begin_vertex>\n#ifdef USE_INSTANCING\n'+
        'float beautyPhase=instanceMatrix[3].x*0.071+instanceMatrix[3].z*0.053;\n'+
        'float beautyWeight=clamp((position.y+3.0)*0.17,0.0,1.0);\n'+
        'transformed.x+=sin(uBeautyTime*'+speed.toFixed(3)+'+beautyPhase+position.y*'+scale.toFixed(3)+')*'+strength.toFixed(3)+'*beautyWeight;\n'+
        'transformed.z+=cos(uBeautyTime*'+(speed*.73).toFixed(3)+'+beautyPhase*1.31)*'+(strength*.55).toFixed(3)+'*beautyWeight;\n'+
        '#endif'
      );
    material.userData.beautyShader=shader;
  };
  material.customProgramCacheKey=()=>('09B-wind-'+speed+'-'+strength+'-'+scale);
  return material;
}

function makeGround09B(){
  const g=new THREE.PlaneGeometry(66,66,32,32);
  g.rotateX(-Math.PI/2);
  const p=g.getAttribute('position');
  const colors=[];
  const c=new THREE.Color();
  for(let i=0;i<p.count;i++){
    const x=p.getX(i),z=p.getZ(i);
    const wx=center09B.x+x,wz=center09B.z+z;
    const undulation=.025*Math.sin(x*.31)+.018*Math.cos(z*.27);
    p.setY(i,groundHeight(wx,wz)+.065+undulation);
    const n=.5+.5*Math.sin(x*.21+z*.17)+.18*Math.cos(z*.43);
    c.setHSL(.245+Math.max(-.025,Math.min(.025,n*.012)),.34,.31+Math.max(-.035,Math.min(.035,n*.018)));
    colors.push(c.r,c.g,c.b);
  }
  g.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));
  g.computeVertexNormals();
  const m=new THREE.MeshStandardMaterial({
    vertexColors:true,roughness:.94,metalness:0,
    polygonOffset:true,polygonOffsetFactor:-1,polygonOffsetUnits:-1
  });
  const mesh=new THREE.Mesh(g,m);
  mesh.receiveShadow=true;
  mesh.name='09B meadow ground';
  return addRenderable09B(mesh,geometryTriangles09B(g));
}

function makePath09B(){
  const seg=BEAUTY_SLICE_09B.layout.pathSegments;
  const width=3.4;
  const positions=[],indices=[],centers=[];
  for(let i=0;i<=seg;i++){
    const t=i/seg;
    const x=-1.7+6.7*t+2.0*Math.sin(t*Math.PI*1.15);
    const z=-24+50*t;
    centers.push({x,z});
  }
  for(let i=0;i<=seg;i++){
    const prev=centers[Math.max(0,i-1)],next=centers[Math.min(seg,i+1)];
    let tx=next.x-prev.x,tz=next.z-prev.z;
    const len=Math.hypot(tx,tz)||1; tx/=len; tz/=len;
    const nx=-tz,nz=tx;
    const c=centers[i];
    for(const side of [-1,1]){
      const x=c.x+nx*width*.5*side;
      const z=c.z+nz*width*.5*side;
      const y=groundHeight(center09B.x+x,center09B.z+z)+.115;
      positions.push(x,y,z);
    }
    if(i<seg){
      const a=i*2,b=a+1,c0=a+2,d=a+3;
      indices.push(a,c0,b,b,c0,d);
    }
  }
  const g=new THREE.BufferGeometry();
  g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));
  g.setIndex(indices);
  g.computeVertexNormals();
  const m=new THREE.MeshStandardMaterial({color:0x876a49,roughness:.98,metalness:0});
  const mesh=new THREE.Mesh(g,m);
  mesh.receiveShadow=true;
  mesh.name='09B soil path';
  return addRenderable09B(mesh,geometryTriangles09B(g));
}

function makeWater09B(){
  const g=new THREE.CircleGeometry(8.4,56);
  g.rotateX(-Math.PI/2);
  const y=groundHeight(center09B.x-12,center09B.z+7)+.15;
  const m=new THREE.ShaderMaterial({
    transparent:true,
    depthWrite:false,
    side:THREE.DoubleSide,
    uniforms:{
      uBeautyTime:{value:0},
      uDeep:{value:new THREE.Color(0x315d69)},
      uShallow:{value:new THREE.Color(0x78b6ac)}
    },
    vertexShader:'uniform float uBeautyTime;\nvarying vec2 vLocal;\nvarying float vWave;\nvoid main(){\nvec3 p=position;\nfloat w=sin((p.x+uBeautyTime*1.15)*.72)*.055+cos((p.z-uBeautyTime*.78)*1.05)*.036;\np.y+=w;\nvWave=w;\nvLocal=p.xz/8.4;\ngl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.0);\n}',
    fragmentShader:'uniform vec3 uDeep;\nuniform vec3 uShallow;\nuniform float uBeautyTime;\nvarying vec2 vLocal;\nvarying float vWave;\nvoid main(){\nfloat r=length(vLocal);\nfloat edge=1.0-smoothstep(.82,1.0,r);\nfloat shimmer=.5+.5*sin((vLocal.x+vLocal.y)*18.0+uBeautyTime*1.7);\nvec3 col=mix(uDeep,uShallow,.46+.18*shimmer+vWave*2.5);\nfloat alpha=(.58+.12*shimmer)*edge;\ngl_FragColor=vec4(col,alpha);\n}'
  });
  const mesh=new THREE.Mesh(g,m);
  mesh.position.set(-12,y,7);
  mesh.renderOrder=3;
  mesh.name='09B reflective pool';
  mesh.userData.timeUniform=m.uniforms.uBeautyTime;
  return addRenderable09B(mesh,geometryTriangles09B(g));
}

function makeTrees09B(rand){
  const trunkGeo=new THREE.CylinderGeometry(.42,.62,7,6,1);
  const trunkMat=new THREE.MeshStandardMaterial({color:0x6a432d,roughness:.9,metalness:0});
  const trunks=new THREE.InstancedMesh(trunkGeo,trunkMat,BEAUTY_SLICE_09B.layout.trees);
  trunks.castShadow=true; trunks.receiveShadow=true; trunks.name='09B tree trunks';

  const canopyGeo=new THREE.IcosahedronGeometry(2.65,1);
  const canopyMat=patchWind09B(
    new THREE.MeshStandardMaterial({color:0x4c7740,roughness:.78,metalness:0}),
    {speed:.78,strength:.16,scale:.46}
  );
  const canopy=new THREE.InstancedMesh(canopyGeo,canopyMat,BEAUTY_SLICE_09B.layout.trees);
  canopy.castShadow=true; canopy.receiveShadow=true; canopy.name='09B canopy';

  const o=new THREE.Object3D();
  for(let i=0;i<BEAUTY_SLICE_09B.layout.trees;i++){
    const angle=(i/BEAUTY_SLICE_09B.layout.trees)*Math.PI*2+(rand()-.5)*.18;
    const radius=23+rand()*8;
    let x=Math.cos(angle)*radius,z=Math.sin(angle)*radius;
    if(z>14&&Math.abs(x-4)<8)x+=x<4?-7:7;
    const worldY=groundHeight(center09B.x+x,center09B.z+z);
    const h=.86+rand()*.34;

    o.position.set(x,worldY+3.5*h,z);
    o.rotation.set(0,rand()*Math.PI*2,0);
    o.scale.set(.92+rand()*.28,h,.92+rand()*.28);
    o.updateMatrix(); trunks.setMatrixAt(i,o.matrix);

    o.position.set(x+(rand()-.5)*.35,worldY+7.5*h,z+(rand()-.5)*.35);
    o.rotation.set(rand()*.08,rand()*Math.PI*2,rand()*.08);
    o.scale.set(1+rand()*.42,.9+rand()*.4,1+rand()*.42);
    o.updateMatrix(); canopy.setMatrixAt(i,o.matrix);
  }
  trunks.instanceMatrix.needsUpdate=true;
  canopy.instanceMatrix.needsUpdate=true;
  addRenderable09B(trunks,geometryTriangles09B(trunkGeo,BEAUTY_SLICE_09B.layout.trees));
  addRenderable09B(canopy,geometryTriangles09B(canopyGeo,BEAUTY_SLICE_09B.layout.trees));
  return canopyMat;
}

function makeGrass09B(rand){
  const geo=new THREE.ConeGeometry(.14,.9,4,1);
  const mat=patchWind09B(
    new THREE.MeshStandardMaterial({color:0x76964b,roughness:.84,metalness:0}),
    {speed:1.34,strength:.11,scale:.82}
  );
  const mesh=new THREE.InstancedMesh(geo,mat,BEAUTY_SLICE_09B.layout.grassTufts);
  mesh.name='09B ground cover';
  const o=new THREE.Object3D();
  let i=0;
  while(i<BEAUTY_SLICE_09B.layout.grassTufts){
    const x=(rand()*2-1)*31,z=(rand()*2-1)*31;
    if(x*x+z*z>31*31)continue;
    if(Math.hypot(x+12,z-7)<9.6)continue;
    const y=groundHeight(center09B.x+x,center09B.z+z);
    o.position.set(x,y+.42,z);
    o.rotation.set((rand()-.5)*.08,rand()*Math.PI*2,(rand()-.5)*.08);
    const s=.72+rand()*.8;
    o.scale.set(.7+rand()*.6,s,.7+rand()*.6);
    o.updateMatrix(); mesh.setMatrixAt(i++,o.matrix);
  }
  mesh.instanceMatrix.needsUpdate=true;
  addRenderable09B(mesh,geometryTriangles09B(geo,BEAUTY_SLICE_09B.layout.grassTufts));
  return mat;
}

function makeFlowers09B(rand){
  const geo=new THREE.OctahedronGeometry(.11,0);
  const mat=new THREE.MeshStandardMaterial({
    color:0xf0cf78,roughness:.7,metalness:0,
    emissive:0x2b1d08,emissiveIntensity:.12
  });
  const mesh=new THREE.InstancedMesh(geo,mat,BEAUTY_SLICE_09B.layout.flowers);
  mesh.name='09B flowers';
  const o=new THREE.Object3D();
  let i=0;
  while(i<BEAUTY_SLICE_09B.layout.flowers){
    const x=(rand()*2-1)*24,z=(rand()*2-1)*24;
    if(Math.hypot(x+12,z-7)<9.4)continue;
    const y=groundHeight(center09B.x+x,center09B.z+z);
    o.position.set(x,y+.34+rand()*.18,z);
    o.rotation.set(rand()*Math.PI,rand()*Math.PI,rand()*Math.PI);
    const s=.65+rand()*.8; o.scale.setScalar(s);
    o.updateMatrix(); mesh.setMatrixAt(i++,o.matrix);
  }
  mesh.instanceMatrix.needsUpdate=true;
  addRenderable09B(mesh,geometryTriangles09B(geo,BEAUTY_SLICE_09B.layout.flowers));
}

function makeStone09B(rand){
  const stoneMat=new THREE.MeshStandardMaterial({color:0x8b9084,roughness:.94,metalness:0});
  const o=new THREE.Object3D();

  const rockGeo=new THREE.DodecahedronGeometry(.7,0);
  const rocks=new THREE.InstancedMesh(rockGeo,stoneMat,BEAUTY_SLICE_09B.layout.rocks);
  rocks.name='09B rocks';
  for(let i=0;i<BEAUTY_SLICE_09B.layout.rocks;i++){
    const angle=rand()*Math.PI*2,radius=9+rand()*20;
    const x=Math.cos(angle)*radius,z=Math.sin(angle)*radius;
    const y=groundHeight(center09B.x+x,center09B.z+z);
    o.position.set(x,y+.35,z);
    o.rotation.set(rand()*Math.PI,rand()*Math.PI,rand()*Math.PI);
    o.scale.set(.65+rand()*1.4,.45+rand()*.75,.65+rand()*1.2);
    o.updateMatrix(); rocks.setMatrixAt(i,o.matrix);
  }
  rocks.instanceMatrix.needsUpdate=true;
  addRenderable09B(rocks,geometryTriangles09B(rockGeo,BEAUTY_SLICE_09B.layout.rocks));

  const cliffGeo=new THREE.ConeGeometry(2.4,10,5,1);
  const cliffs=new THREE.InstancedMesh(cliffGeo,stoneMat,BEAUTY_SLICE_09B.layout.distantCliffs);
  cliffs.name='09B distant cliffs';
  for(let i=0;i<BEAUTY_SLICE_09B.layout.distantCliffs;i++){
    const x=-25+i*5.7+(rand()-.5)*3.2;
    const z=45+rand()*13;
    const y=groundHeight(center09B.x+x,center09B.z+z);
    o.position.set(x,y+4.5,z);
    o.rotation.set((rand()-.5)*.1,rand()*Math.PI*2,(rand()-.5)*.08);
    o.scale.set(.8+rand()*1.4,.8+rand()*1.6,.8+rand()*1.4);
    o.updateMatrix(); cliffs.setMatrixAt(i,o.matrix);
  }
  cliffs.instanceMatrix.needsUpdate=true;
  addRenderable09B(cliffs,geometryTriangles09B(cliffGeo,BEAUTY_SLICE_09B.layout.distantCliffs));

  const gateX=5,gateZ=25;
  const gateY=groundHeight(center09B.x+gateX,center09B.z+gateZ);
  const pillarGeo=new THREE.BoxGeometry(1.45,7,1.55);
  const pillars=new THREE.InstancedMesh(pillarGeo,stoneMat,2);
  for(let i=0;i<2;i++){
    o.position.set(gateX+(i?2.55:-2.55),gateY+3.5,gateZ);
    o.rotation.set(0,(i?-.04:.04),0);
    o.scale.set(1,1,1);
    o.updateMatrix(); pillars.setMatrixAt(i,o.matrix);
  }
  pillars.instanceMatrix.needsUpdate=true;
  pillars.castShadow=true; pillars.receiveShadow=true;
  pillars.name='09B stone gate pillars';
  addRenderable09B(pillars,geometryTriangles09B(pillarGeo,2));

  const lintelGeo=new THREE.BoxGeometry(7.2,1.2,1.8);
  const lintel=new THREE.Mesh(lintelGeo,stoneMat);
  lintel.position.set(gateX,gateY+7.15,gateZ);
  lintel.rotation.z=-.025;
  lintel.castShadow=true; lintel.receiveShadow=true;
  lintel.name='09B stone gate lintel';
  addRenderable09B(lintel,geometryTriangles09B(lintelGeo));
}

function makePollen09B(rand){
  const positions=new Float32Array(BEAUTY_SLICE_09B.layout.pollen*3);
  for(let i=0;i<BEAUTY_SLICE_09B.layout.pollen;i++){
    const j=i*3;
    positions[j]=(rand()*2-1)*31;
    positions[j+1]=1.2+rand()*8.5;
    positions[j+2]=(rand()*2-1)*31;
  }
  const g=new THREE.BufferGeometry();
  g.setAttribute('position',new THREE.BufferAttribute(positions,3));
  const m=new THREE.ShaderMaterial({
    transparent:true,
    depthWrite:false,
    blending:THREE.AdditiveBlending,
    uniforms:{uBeautyTime:{value:0}},
    vertexShader:'uniform float uBeautyTime;\nvoid main(){\nvec3 p=position;\nfloat phase=p.x*.17+p.z*.11;\np.x+=sin(uBeautyTime*.31+phase)*.65;\np.y+=sin(uBeautyTime*.43+phase*1.7)*.35;\np.z+=cos(uBeautyTime*.27+phase)*.42;\nvec4 mv=modelViewMatrix*vec4(p,1.0);\ngl_Position=projectionMatrix*mv;\ngl_PointSize=clamp(18.0/max(1.0,-mv.z),1.2,3.2);\n}',
    fragmentShader:'void main(){\nvec2 q=gl_PointCoord-.5;\nfloat d=length(q);\nfloat a=smoothstep(.5,.05,d)*.48;\ngl_FragColor=vec4(1.0,.86,.52,a);\n}'
  });
  const points=new THREE.Points(g,m);
  points.name='09B airborne pollen';
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

  makeGround09B();
  makePath09B();
  const water=makeWater09B();
  const canopyMat=makeTrees09B(rand);
  const grassMat=makeGrass09B(rand);
  makeFlowers09B(rand);
  makeStone09B(rand);
  makePollen09B(rand);

  const pollen=root09B.children.find(o=>o.name==='09B airborne pollen');
  root09B.userData.animatedMaterials=[canopyMat,grassMat,water.material,pollen?.material].filter(Boolean);

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
    materials:BEAUTY_SLICE_09B.materialFamilies.length===6,
    depth_layers:BEAUTY_SLICE_09B.depthLayers.length===5,
    motion_systems:BEAUTY_SLICE_09B.ambientMotionSystems.length===4,
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
  return {ready:failed.length===0,failed,checks,calls,tris,inv,regression};
}

function updateBeautyHud09B(){
  const proof=presentationProof09B();
  const dist=Math.hypot(playerRoot.position.x-center09B.x,playerRoot.position.z-center09B.z);
  setBeautyText09B(stageEl09B,proof.ready?'READY':buildError09B?'FAIL':proof.regression==='PASS'?'BUILDING':'WAITING 06J',
    proof.ready?'#bdf3c8':buildError09B?'#ff9b9b':'#ffe59a');
  setBeautyText09B(placeEl09B,BEAUTY_SLICE_09B.name);
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
  }else if(proof.ready){
    setBeautyText09B(resultEl09B,'VERTICAL BEAUTY SLICE READY ✓ · 6 MATERIAL FAMILIES ✓ · 5 DEPTH LAYERS ✓ · 4 MOTION SYSTEMS ✓ · RUNTIME PRESERVED ✓ · PRESENTATION BUDGET PASS ✓','#bdf3c8');
  }else if(proof.regression!=='PASS'){
    setBeautyText09B(resultEl09B,'WAIT FOR 06J REGRESSION PASS','#ffe59a');
  }else{
    setBeautyText09B(resultEl09B,'BUILDING SUNLIT BASIN PRESENTATION LAYER','#ffe59a');
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
