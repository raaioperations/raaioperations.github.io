
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
