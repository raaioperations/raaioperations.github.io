import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root=process.cwd();
const out=path.resolve(root,'../threejs-test-05r');
const indexPath=path.join(out,'index.html');
const appPath=path.join(out,'app.js');
let html=await readFile(indexPath,'utf8');
let app=await readFile(appPath,'utf8');

// 05R-R6: camera recoil is now an additive transform INSIDE the established
// Three.js camera pipeline. The base exploration camera computes normally each
// frame; after lookAt(), we apply local yaw/pitch/roll derived from the exact
// accepted 05R-JOLT pixel waveform. No DOM movement, snapshots, view offsets,
// or second rendering surface are involved.
const oldKick=/function kickCanvas\(strength\)\{[\s\S]*?\n  \}\n  function impact\(damage\)\{/;
if(!oldKick.test(html)) throw new Error('05R R6 camera bridge anchor missing.');
const nativeBridge=`function kickCanvas(strength){
    const trigger=globalThis.__r05CameraImpulse;
    if(typeof trigger==='function'){
      trigger(strength);
      return;
    }
    console.warn('05R-R6 camera impulse bridge not ready');
  }
  function impact(damage){`;
html=html.replace(oldKick,nativeBridge);

// Use the same ordinary click activation that passed in the isolated jolt demo.
html=html.replace('<button id="r05Demo25">','<button id="r05Demo25" type="button">');
html=html.replace('<button id="r05Demo40">','<button id="r05Demo40" type="button">');
html=html.replace("d25.addEventListener('pointerdown',e=>{e.preventDefault();impact(25);});","d25.addEventListener('click',e=>{e.preventDefault();impact(25);});");
html=html.replace("d40.addEventListener('pointerdown',e=>{e.preventDefault();impact(40);});","d40.addEventListener('click',e=>{e.preventDefault();impact(40);});");

// Visible runtime indicator: confirms the button reached the camera system.
const indicator=`<div id="r05CameraState" aria-hidden="true" style="position:fixed;z-index:15;left:50%;top:122px;transform:translateX(-50%);padding:5px 8px;border-radius:999px;background:rgba(8,13,16,.72);border:1px solid rgba(255,255,255,.18);color:#9df2ae;font:800 8px/1 system-ui;letter-spacing:.06em;pointer-events:none">CAMERA READY</div>`;
html=html.replace('</body>',indicator+'<div id="r05KickRevision" data-revision="05R-R6-CAMERA-SPACE-IMPULSE" hidden></div></body>');

const stateAnchor='var Mm=new xo,$u=0,hl=0,ul=0,ju=0;function yg(){';
if(!app.includes(stateAnchor)) throw new Error('05R-R6 camera state anchor missing.');
const impulseState=`var r05Impulse={active:!1,strong:!1,start:0,token:0};globalThis.__r05CameraImpulse=i=>{r05Impulse.active=!0,r05Impulse.strong=i>=40,r05Impulse.start=performance.now(),r05Impulse.token++;let e=document.getElementById("r05CameraState");e&&(e.textContent="CAMERA JOLT "+(i>=40?40:25),e.style.color=i>=40?"#ff9b91":"#ffd18a")};function r05ApplyCameraImpulse(){if(!r05Impulse.active)return;let i=performance.now(),e=r05Impulse.strong?300:240,t=Math.min(1,(i-r05Impulse.start)/e),n=Math.pow(1-t,1.65),s=t*Math.PI*6,r=r05Impulse.strong?34:20,o=r05Impulse.strong?20:12,a=r05Impulse.strong?1.15:.68,c=r05Impulse.strong?.030:.018,l=Math.sin(s)*r*n+(t<.16?r*.34*(1-t/.16):0),h=-Math.cos(s*.91)*o*n,d=Math.sin(s*.73)*a*n,u=Ti.fov*Math.PI/180,f=2*Math.atan(Math.tan(u/2)*Ti.aspect),g=(l/Math.max(1,innerWidth))*f*1.35,y=(h/Math.max(1,innerHeight))*u*1.35;Ti.rotateY(-g),Ti.rotateX(y),Ti.rotateZ(-d*Math.PI/180);Ti.fov=Ti.fov/(1+c*n);if(t>=1){r05Impulse.active=!1;let m=document.getElementById("r05CameraState");m&&(m.textContent="CAMERA READY",m.style.color="#9df2ae")}};`;
app=app.replace(stateAnchor,impulseState+stateAnchor);

const cameraAnchor='Ti.position.lerp(u,f),Ti.lookAt(d),Ti.fov=_n.lerp(Ti.fov,r?60:53,1-Math.exp(-5*i)),Ti.updateProjectionMatrix(),kt.target.position.copy(Pe.position),';
if(!app.includes(cameraAnchor)) throw new Error('05R-R6 camera render anchor missing.');
const cameraReplacement='Ti.position.lerp(u,f),Ti.lookAt(d),Ti.fov=_n.lerp(Ti.fov,r?60:53,1-Math.exp(-5*i)),r05ApplyCameraImpulse(),Ti.updateProjectionMatrix(),kt.target.position.copy(Pe.position),';
app=app.replace(cameraAnchor,cameraReplacement);

await writeFile(indexPath,html);
await writeFile(appPath,app);

const infoPath=path.join(out,'build-info.json');
const info=JSON.parse(await readFile(infoPath,'utf8'));
info.visual_runtime_revision='05R-R6 additive camera-space recoil';
info.hit_impact_visual.camera_kick=true;
info.hit_impact_visual.camera_kick_revision='accepted 05R-JOLT waveform converted from screen pixels into camera-local yaw/pitch, with accepted roll and zoom applied after base lookAt each render frame';
info.hit_impact_visual.camera_kick_source='labs/threejs-test-05r-jolt/acceptance.json';
info.hit_impact_visual.status='PENDING HUMAN ACCEPTANCE';
info.hit_impact_visual.previous_integrated_revisions=['05R-R1 FAILED','05R-R2 FAILED','05R-R3 FAILED','05R-R4 FAILED','05R-R5 FAILED'];
info.hit_impact_visual.architecture='additive camera impulse channel inside established Three.js camera render pipeline';
info.hit_impact_visual.input_confirmation='CAMERA JOLT 25/40 runtime indicator';
await writeFile(infoPath,JSON.stringify(info,null,2));
console.log('Applied Test 05R-R6 additive camera-space recoil.');
