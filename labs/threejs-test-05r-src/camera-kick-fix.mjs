import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root=process.cwd();
const out=path.resolve(root,'../threejs-test-05r');
const indexPath=path.join(out,'index.html');
let html=await readFile(indexPath,'utf8');

const old=/function kickCanvas\(strength\)\{[\s\S]*?\n  \}\n  function impact\(damage\)\{/;
if(!old.test(html)) throw new Error('05R camera-kick function anchor missing.');

// 05R-R3: transplant the exact human-accepted isolated jolt timing/amplitudes.
const replacement=`function ensureSceneKickShell(){
    const canvas=document.querySelector('canvas');
    if(!canvas)return null;
    let shell=document.getElementById('r05SceneKickShell');
    if(shell)return shell;
    const parent=canvas.parentNode;
    if(!parent)return null;
    shell=document.createElement('div');
    shell.id='r05SceneKickShell';
    shell.style.position='fixed';
    shell.style.inset='0';
    shell.style.overflow='hidden';
    shell.style.transformOrigin='50% 50%';
    shell.style.willChange='transform';
    shell.style.zIndex='0';
    parent.insertBefore(shell,canvas);
    shell.appendChild(canvas);
    canvas.style.width='100%';
    canvas.style.height='100%';
    canvas.style.display='block';
    return shell;
  }
  function kickCanvas(strength){
    const scene=ensureSceneKickShell();
    if(!scene)return;
    if(scene.__r05KickRaf)cancelAnimationFrame(scene.__r05KickRaf);
    const strong=strength>=40;
    const duration=strong?300:240;
    const ampX=strong?34:20;
    const ampY=strong?20:12;
    const ampRot=strong?1.15:.68;
    const ampZoom=strong?.030:.018;
    const start=performance.now();
    function frame(now){
      const p=Math.min(1,(now-start)/duration);
      const decay=Math.pow(1-p,1.65);
      const phase=p*Math.PI*6.0;
      const x=Math.sin(phase)*ampX*decay + (p<.16?ampX*.34*(1-p/.16):0);
      const y=-Math.cos(phase*.91)*ampY*decay;
      const rot=Math.sin(phase*.73)*ampRot*decay;
      const scale=1+ampZoom*decay;
      scene.style.transform='translate3d('+x.toFixed(2)+'px,'+y.toFixed(2)+'px,0) rotate('+rot.toFixed(3)+'deg) scale('+scale.toFixed(4)+')';
      if(p<1){scene.__r05KickRaf=requestAnimationFrame(frame);}else{
        scene.style.transform='';
        scene.__r05KickRaf=0;
      }
    }
    scene.__r05KickRaf=requestAnimationFrame(frame);
  }
  function impact(damage){`;

html=html.replace(old,replacement);
html=html.replace('</body>','<div id="r05KickRevision" data-revision="05R-R3-ACCEPTED-JOLT" hidden></div></body>');
await writeFile(indexPath,html);

const infoPath=path.join(out,'build-info.json');
const info=JSON.parse(await readFile(infoPath,'utf8'));
info.visual_runtime_revision='05R-R3 exact accepted isolated-jolt transplant';
info.hit_impact_visual.camera_kick=true;
info.hit_impact_visual.camera_kick_revision='human-accepted 05R-JOLT contract: 25=240ms/20x12px/0.68deg/0.018 zoom; 40=300ms/34x20px/1.15deg/0.030 zoom; decay 1.65; phase 6.0';
info.hit_impact_visual.camera_kick_source='labs/threejs-test-05r-jolt/acceptance.json';
info.hit_impact_visual.status='PENDING HUMAN ACCEPTANCE';
await writeFile(infoPath,JSON.stringify(info,null,2));
console.log('Applied Test 05R-R3 exact accepted screen-jolt contract.');
