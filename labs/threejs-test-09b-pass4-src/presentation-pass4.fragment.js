
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
