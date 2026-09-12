const CAMERA_JOLT_SOURCE_MARKER='05R_V2_SOURCE_CAMERA_JOLT';
const CAMERA_JOLT={
  25:{duration:240,ampX:20,ampY:12,rotation:.68,zoom:.018},
  40:{duration:300,ampX:34,ampY:20,rotation:1.15,zoom:.030},
  decayPower:1.65,
  phaseMultiplier:6
};
let cameraJoltActive=null;
function triggerCameraJolt(damage){
  const key=damage>=40?40:25;
  cameraJoltActive={damage:key,start:performance.now()};
  const e=document.getElementById('cameraJoltState');
  if(e){e.textContent='JOLT '+key;e.style.color=key===40?'#ff9b91':'#ffd18a';}
}
function cameraJoltWaveform(now){
  if(!cameraJoltActive)return{x:0,y:0,rot:0,scale:1,done:false};
  const s=CAMERA_JOLT[cameraJoltActive.damage];
  const p=Math.min(1,(now-cameraJoltActive.start)/s.duration);
  const decay=Math.pow(1-p,CAMERA_JOLT.decayPower);
  const phase=p*Math.PI*CAMERA_JOLT.phaseMultiplier;
  return{
    x:Math.sin(phase)*s.ampX*decay+(p<.16?s.ampX*.34*(1-p/.16):0),
    y:-Math.cos(phase*.91)*s.ampY*decay,
    rot:Math.sin(phase*.73)*s.rotation*decay,
    scale:1+s.zoom*decay,
    done:p>=1
  };
}
function applyCameraJolt(now,target,baseFov){
  const w=cameraJoltWaveform(now);
  if(w.x||w.y||w.rot||w.scale!==1){
    const distance=camera.position.distanceTo(target);
    const verticalWorld=2*distance*Math.tan(THREE.MathUtils.degToRad(baseFov)/2);
    const worldPerPixel=verticalWorld/Math.max(1,innerHeight);
    camera.translateX(w.x*worldPerPixel);
    camera.translateY(-w.y*worldPerPixel);
    camera.rotateZ(THREE.MathUtils.degToRad(w.rot));
    camera.fov=baseFov/w.scale;
  }
  if(w.done&&cameraJoltActive){
    cameraJoltActive=null;
    const e=document.getElementById('cameraJoltState');
    if(e){e.textContent='JOLT READY';e.style.color='#9df2ae';}
  }
}
addEventListener('keydown',e=>{
  if(e.repeat)return;
  if(e.code==='KeyK'){e.preventDefault();triggerCameraJolt(25);}
  else if(e.code==='KeyL'){e.preventDefault();triggerCameraJolt(40);}
});
queueMicrotask(()=>{
  document.getElementById('cameraJolt25')?.addEventListener('click',()=>triggerCameraJolt(25));
  document.getElementById('cameraJolt40')?.addEventListener('click',()=>triggerCameraJolt(40));
});
globalThis.__cameraJolt=triggerCameraJolt;
globalThis.__cameraJoltSourceMarker=CAMERA_JOLT_SOURCE_MARKER;
