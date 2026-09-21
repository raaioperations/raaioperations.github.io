
// ---- Test 06H: Living World — streamed/offscreen persistence ----
const LIVING_WORLD_06H_MARKER='06H_STREAMED_PERSISTENCE';
const STREAM_06H={
  loadRadiusM:18,
  unloadRadiusM:22,
  alertDurationMs:9000,
  directPlayerBehaviorTrigger:false
};

const memoryApi06H=globalThis.__livingWorld06C;
if(!memoryApi06H||memoryApi06H.marker!=='06C_LOCAL_DISTURBANCE_MEMORY')throw new Error('06H requires frozen accepted 06C memory API');

const spawnYaw06H=Number.isFinite(playerRoot.rotation.y)?playerRoot.rotation.y:0;
const spawnX06H=playerRoot.position.x,spawnZ06H=playerRoot.position.z;
const fwdX06H=Math.sin(spawnYaw06H),fwdZ06H=Math.cos(spawnYaw06H);
const rightX06H=Math.cos(spawnYaw06H),rightZ06H=-Math.sin(spawnYaw06H);

// Streamed proof actor sits beside the remembered area.
const streamX06H=spawnX06H+fwdX06H*15.7+rightX06H*8.4;
const streamZ06H=spawnZ06H+fwdZ06H*15.7+rightZ06H*8.4;

let streamLoaded06H=false;
let streamRoot06H=null;
let streamMeshes06H=[];
let streamState06H={phase:'CALM',alertEndsAtWallMs:0,lastHandledMemoryEvent:memoryApi06H.events,eventCount:0};
let serialized06H=null;
let streamLifecycle06H='BOOT';
let unloadCount06H=0;
let restoreCount06H=0;
let duplicateCount06H=0;
let offscreenExpired06H=false;
let lastPlayerDistance06H=Infinity;

const streamLifecycleEl06H=document.getElementById('worldStreamLifecycle');
const streamStateEl06H=document.getElementById('worldStreamState');
const streamRemainingEl06H=document.getElementById('worldStreamRemaining');
const streamRestoreEl06H=document.getElementById('worldStreamRestore');
const streamResultEl06H=document.getElementById('worldStreamResult');

function setStreamLifecycle06H(value,color='#a8f0b5'){
  streamLifecycle06H=value;
  if(streamLifecycleEl06H){streamLifecycleEl06H.textContent=value;streamLifecycleEl06H.style.color=color;}
}
function setStreamResult06H(value,color='#a8f0b5'){
  if(streamResultEl06H){streamResultEl06H.textContent=value;streamResultEl06H.style.color=color;}
}
function resolveSerialized06H(snapshot,wallNow){
  const next={...snapshot};
  if(next.phase==='ALERT'&&wallNow>=next.alertEndsAtWallMs){
    next.phase='CALM';
    offscreenExpired06H=true;
  }
  return next;
}
function actorColor06H(){
  return streamState06H.phase==='ALERT'?0xd98a38:0x4f98b8;
}
function createStreamActor06H(){
  if(streamRoot06H)return;
  const root=new THREE.Group();
  const bodyGeo=new THREE.CylinderGeometry(.42,.56,1.7,10);
  const crownGeo=new THREE.TorusGeometry(.62,.075,8,24);
  const orbGeo=new THREE.SphereGeometry(.24,10,8);
  const bodyMat=new THREE.MeshStandardMaterial({color:0x7c7468,roughness:.9,metalness:0});
  const glowMat=new THREE.MeshStandardMaterial({color:actorColor06H(),emissive:actorColor06H(),emissiveIntensity:.72,roughness:.38,metalness:.04});
  const body=new THREE.Mesh(bodyGeo,bodyMat);
  const crown=new THREE.Mesh(crownGeo,glowMat);
  const orb=new THREE.Mesh(orbGeo,glowMat.clone());
  body.position.y=.85;
  crown.position.y=1.72;crown.rotation.x=Math.PI/2;
  orb.position.y=2.08;
  body.castShadow=true;crown.castShadow=true;orb.castShadow=true;
  root.add(body,crown,orb);
  root.position.set(streamX06H,groundHeight(streamX06H,streamZ06H)+.03,streamZ06H);
  root.userData.glowMaterials=[glowMat,orb.material];
  scene.add(root);
  streamRoot06H=root;
  streamMeshes06H=[body,crown,orb];
  streamLoaded06H=true;
}
function destroyStreamActor06H(){
  if(!streamRoot06H)return;
  scene.remove(streamRoot06H);
  for(const mesh of streamMeshes06H){
    if(mesh.geometry)mesh.geometry.dispose();
    if(mesh.material){
      if(Array.isArray(mesh.material))mesh.material.forEach(m=>m.dispose());
      else mesh.material.dispose();
    }
  }
  streamRoot06H.clear();
  streamRoot06H=null;
  streamMeshes06H=[];
  streamLoaded06H=false;
}
function applyStreamVisual06H(now){
  if(!streamRoot06H)return;
  const c=actorColor06H();
  for(const m of streamRoot06H.userData.glowMaterials||[]){
    m.color.setHex(c);m.emissive.setHex(c);
    m.emissiveIntensity=streamState06H.phase==='ALERT'?.82:.55;
  }
  const pulse=1+Math.sin(now*.006)*(streamState06H.phase==='ALERT'?.08:.025);
  streamRoot06H.scale.setScalar(pulse);
  streamRoot06H.rotation.y+=streamState06H.phase==='ALERT'?.008:.0025;
}
function serializeAndUnload06H(){
  serialized06H=JSON.parse(JSON.stringify(streamState06H));
  unloadCount06H++;
  destroyStreamActor06H();
  setStreamLifecycle06H('UNLOADED','#ffd18a');
  setStreamResult06H('STATE SERIALIZED · ACTOR DISPOSED','#ffe59a');
}
function restoreFromSerialized06H(){
  const wallNow=Date.now();
  if(serialized06H){
    streamState06H=resolveSerialized06H(serialized06H,wallNow);
    serialized06H=null;
  }
  createStreamActor06H();
  restoreCount06H++;
  setStreamLifecycle06H('RESTORED','#9fe0ff');
  if(offscreenExpired06H)setStreamResult06H('OFFSCREEN TIMER RESOLVED ✓','#a8f0b5');
  else setStreamResult06H('STATE RESTORED ✓','#a8f0b5');
}
function handleMemoryEvent06H(){
  const eventId=memoryApi06H.events;
  if(eventId<=streamState06H.lastHandledMemoryEvent){
    if(eventId<streamState06H.lastHandledMemoryEvent)duplicateCount06H++;
    return;
  }
  streamState06H.lastHandledMemoryEvent=eventId;
  streamState06H.eventCount++;
  streamState06H.phase='ALERT';
  streamState06H.alertEndsAtWallMs=Date.now()+STREAM_06H.alertDurationMs;
  offscreenExpired06H=false;
  setStreamResult06H('ALERT STATE ACTIVE · LEAVE AREA','#ffd18a');
}
function updateStreamHud06H(){
  if(streamStateEl06H){
    streamStateEl06H.textContent=streamState06H.phase;
    streamStateEl06H.style.color=streamState06H.phase==='ALERT'?'#ffd18a':'#a8f0b5';
  }
  if(streamRemainingEl06H){
    let remaining=0;
    const source=serialized06H||streamState06H;
    if(source.phase==='ALERT')remaining=Math.max(0,source.alertEndsAtWallMs-Date.now());
    streamRemainingEl06H.textContent=(remaining/1000).toFixed(1)+' s';
  }
  if(streamRestoreEl06H)streamRestoreEl06H.textContent=`${unloadCount06H}/${restoreCount06H}`;
}
function updateLivingWorld06H(now){
  handleMemoryEvent06H();

  const dx=playerRoot.position.x-streamX06H,dz=playerRoot.position.z-streamZ06H;
  lastPlayerDistance06H=Math.hypot(dx,dz);

  if(streamLoaded06H){
    // State advances only while loaded. When unloaded, decay is resolved from persisted wall time on restore.
    if(streamState06H.phase==='ALERT'&&Date.now()>=streamState06H.alertEndsAtWallMs){
      streamState06H.phase='CALM';
    }
    applyStreamVisual06H(now);
    if(lastPlayerDistance06H>STREAM_06H.unloadRadiusM)serializeAndUnload06H();
  }else{
    if(lastPlayerDistance06H<STREAM_06H.loadRadiusM)restoreFromSerialized06H();
  }

  updateStreamHud06H();
}
function livingWorld06HLoop(now){
  requestAnimationFrame(livingWorld06HLoop);
  updateLivingWorld06H(now);
}

// Initial load is explicit, then distance hysteresis controls subsequent lifecycle.
createStreamActor06H();
setStreamLifecycle06H('LOADED','#a8f0b5');
requestAnimationFrame(livingWorld06HLoop);

globalThis.__livingWorld06H={
  marker:LIVING_WORLD_06H_MARKER,
  get loaded(){return streamLoaded06H;},
  get lifecycle(){return streamLifecycle06H;},
  get state(){return streamState06H.phase;},
  get serialized(){return serialized06H?JSON.parse(JSON.stringify(serialized06H)):null;},
  get playerDistanceM(){return lastPlayerDistance06H;},
  get unloadCount(){return unloadCount06H;},
  get restoreCount(){return restoreCount06H;},
  get duplicateCount(){return duplicateCount06H;},
  get offscreenExpired(){return offscreenExpired06H;},
  loadRadiusM:STREAM_06H.loadRadiusM,
  unloadRadiusM:STREAM_06H.unloadRadiusM,
  alertDurationMs:STREAM_06H.alertDurationMs,
  directPlayerBehaviorTrigger:false,
  persistence:'serialized state + absolute wall-clock expiry'
};
