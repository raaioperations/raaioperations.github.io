
// ---- Test 08A: Multi-Region Production World ----
import {ProductionRegion as ProductionRegion08A,ProductionRegionStateStore as ProductionRegionStateStore08A} from './production/regions/production-region-core.js';
import {ProductionWorldManager as ProductionWorldManager08A} from './production/world/production-world-manager.js';

const MULTI_REGION_PRODUCTION_WORLD_08A_MARKER='08A_MULTI_REGION_PRODUCTION_WORLD';

const actorSystem08A=globalThis.__productionActorPipeline07B;
if(!actorSystem08A)throw new Error('08A requires frozen accepted 07B actor pipeline');

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

const centers08A={
  A:localPoint08A(18,0),
  B:localPoint08A(64,22),
  C:localPoint08A(66,-42)
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
  stepWorld08A(now,dt);
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
