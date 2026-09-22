
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

      const g=normalizedGeometry09D(obj,placementMatrix);
      const list=buckets.get(materialName)||[];
      list.push(g);
      buckets.set(materialName,list);
      if(!materialTemplates.has(materialName))materialTemplates.set(materialName,material);
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
    material.vertexColors=false;
    if(materialName.startsWith('MAT_GRASS_'))material.side=THREE.DoubleSide;
    material.needsUpdate=true;

    const mesh=new THREE.Mesh(merged,material);
    mesh.name='09D_BATCH_'+materialName;
    mesh.castShadow=!materialName.startsWith('MAT_GRASS_')&&!materialName.startsWith('MAT_FLOWER_');
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
  set09D(batchesEl09D,materialBatches09D+' / 12');
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
