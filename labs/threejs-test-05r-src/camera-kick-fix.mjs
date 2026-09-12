import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root=process.cwd();
const out=path.resolve(root,'../threejs-test-05r');
const indexPath=path.join(out,'index.html');
const appPath=path.join(out,'app.js');
let html=await readFile(indexPath,'utf8');
let app=await readFile(appPath,'utf8');

// 05R-R5: stop moving/capturing DOM/WebGL surfaces. The accepted isolated jolt
// is now applied to the actual Three.js camera projection. Screen-space X/Y are
// reproduced with PerspectiveCamera.setViewOffset(), roll uses camera-local Z,
// and zoom uses camera.zoom. This cannot expose black viewport edges and avoids
// Safari's fragile WebGL->2D canvas snapshot path entirely.
const oldKick=/function kickCanvas\(strength\)\{[\s\S]*?\n  \}\n  function impact\(damage\)\{/;
if(!oldKick.test(html)) throw new Error('05R native-camera kick anchor missing.');
const nativeBridge=`function kickCanvas(strength){
    const trigger=globalThis.__r05NativeCameraJolt;
    if(typeof trigger==='function'){
      trigger(strength);
      return;
    }
    console.warn('05R-R5 native camera jolt bridge not ready');
  }
  function impact(damage){`;
html=html.replace(oldKick,nativeBridge);

// Match the interaction topology of the accepted isolated demo on iOS Safari:
// normal click activation, explicit button type, no pointerdown-only dependency.
html=html.replace('<button id="r05Demo25">','<button id="r05Demo25" type="button">');
html=html.replace('<button id="r05Demo40">','<button id="r05Demo40" type="button">');
html=html.replace("d25.addEventListener('pointerdown',e=>{e.preventDefault();impact(25);});","d25.addEventListener('click',e=>{e.preventDefault();impact(25);});");
html=html.replace("d40.addEventListener('pointerdown',e=>{e.preventDefault();impact(40);});","d40.addEventListener('click',e=>{e.preventDefault();impact(40);});");
html=html.replace('</body>','<div id="r05KickRevision" data-revision="05R-R5-NATIVE-CAMERA" hidden></div></body>');

const stateAnchor='var Mm=new xo,$u=0,hl=0,ul=0,ju=0;function yg(){';
if(!app.includes(stateAnchor)) throw new Error('05R-R5 camera state anchor missing.');
const nativeState=`var r05Jolt={active:!1,strong:!1,start:0,resetPending:!1};globalThis.__r05NativeCameraJolt=i=>{r05Jolt.active=!0,r05Jolt.strong=i>=40,r05Jolt.start=performance.now(),r05Jolt.resetPending=!1};function r05ApplyCameraJolt(){if(!r05Jolt.active){r05Jolt.resetPending&&(Ti.clearViewOffset(),Ti.zoom=1,r05Jolt.resetPending=!1);return}let i=performance.now(),e=r05Jolt.strong?300:240,t=Math.min(1,(i-r05Jolt.start)/e),n=Math.pow(1-t,1.65),s=t*Math.PI*6,r=r05Jolt.strong?34:20,o=r05Jolt.strong?20:12,a=r05Jolt.strong?1.15:.68,c=r05Jolt.strong?.03:.018,l=Math.sin(s)*r*n+(t<.16?r*.34*(1-t/.16):0),h=-Math.cos(s*.91)*o*n,d=Math.sin(s*.73)*a*n,u=1+c*n;Ti.setViewOffset(innerWidth,innerHeight,-l,-h,innerWidth,innerHeight),Ti.zoom=u,Ti.rotateZ(-d*Math.PI/180),t>=1&&(r05Jolt.active=!1,r05Jolt.resetPending=!0,Ti.clearViewOffset(),Ti.zoom=1)};`;
app=app.replace(stateAnchor,nativeState+stateAnchor);

const cameraAnchor='Ti.position.lerp(u,f),Ti.lookAt(d),Ti.fov=_n.lerp(Ti.fov,r?60:53,1-Math.exp(-5*i)),Ti.updateProjectionMatrix(),kt.target.position.copy(Pe.position),';
if(!app.includes(cameraAnchor)) throw new Error('05R-R5 camera render anchor missing.');
const cameraReplacement='Ti.position.lerp(u,f),Ti.lookAt(d),Ti.fov=_n.lerp(Ti.fov,r?60:53,1-Math.exp(-5*i)),r05ApplyCameraJolt(),Ti.updateProjectionMatrix(),kt.target.position.copy(Pe.position),';
app=app.replace(cameraAnchor,cameraReplacement);

await writeFile(indexPath,html);
await writeFile(appPath,app);

const infoPath=path.join(out,'build-info.json');
const info=JSON.parse(await readFile(infoPath,'utf8'));
info.visual_runtime_revision='05R-R5 native Three.js camera-projection jolt';
info.hit_impact_visual.camera_kick=true;
info.hit_impact_visual.camera_kick_revision='accepted 05R-JOLT waveform applied directly to PerspectiveCamera projection: setViewOffset screen displacement + local Z roll + camera.zoom; no DOM movement or canvas snapshot';
info.hit_impact_visual.camera_kick_source='labs/threejs-test-05r-jolt/acceptance.json';
info.hit_impact_visual.status='PENDING HUMAN ACCEPTANCE';
info.hit_impact_visual.previous_integrated_revisions=['05R-R1 FAILED','05R-R2 FAILED','05R-R3 FAILED','05R-R4 FAILED'];
info.hit_impact_visual.browser_fix='R5 removes Safari WebGL snapshot dependency and uses click activation matching accepted isolated demo';
await writeFile(infoPath,JSON.stringify(info,null,2));
console.log('Applied Test 05R-R5 native Three.js camera jolt.');
