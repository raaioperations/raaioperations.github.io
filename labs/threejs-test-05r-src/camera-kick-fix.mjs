import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root=process.cwd();
const out=path.resolve(root,'../threejs-test-05r');
const indexPath=path.join(out,'index.html');
let html=await readFile(indexPath,'utf8');

const old=/function kickCanvas\(strength\)\{[\s\S]*?\n  \}\n  function impact\(damage\)\{/;
if(!old.test(html)) throw new Error('05R camera-kick function anchor missing.');

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
    const shell=ensureSceneKickShell();
    if(!shell)return;
    if(shell.__r05KickRaf)cancelAnimationFrame(shell.__r05KickRaf);
    const strong=strength>=40;
    const duration=strong?290:235;
    const ampX=strong?28:16;
    const ampY=strong?18:10;
    const ampRot=strong?.78:.46;
    const zoom=strong?.038:.024;
    const start=performance.now();
    function frame(now){
      const p=Math.min(1,(now-start)/duration);
      let x=0,y=0,r=0,s=1;
      if(p<.18){
        const q=p/.18;
        const ease=1-Math.pow(1-q,3);
        x=ampX*ease;
        y=-ampY*ease;
        r=ampRot*ease;
        s=1+zoom*ease;
      }else{
        const t=(p-.18)/.82;
        const decay=Math.pow(1-t,2);
        const wave=Math.cos(t*Math.PI*4.2);
        x=-ampX*.62*wave*decay;
        y=ampY*.50*Math.cos(t*Math.PI*3.5)*decay;
        r=-ampRot*.58*wave*decay;
        s=1+zoom*.72*decay;
      }
      shell.style.transform='translate3d('+x.toFixed(2)+'px,'+y.toFixed(2)+'px,0) rotate('+r.toFixed(3)+'deg) scale('+s.toFixed(4)+')';
      if(p<1)shell.__r05KickRaf=requestAnimationFrame(frame);
      else{shell.style.transform='';shell.__r05KickRaf=0;}
    }
    shell.__r05KickRaf=requestAnimationFrame(frame);
  }
  function impact(damage){`;

html=html.replace(old,replacement);
html=html.replace('</body>','<div id="r05KickRevision" data-revision="05R-R2" hidden></div></body>');
await writeFile(indexPath,html);

const infoPath=path.join(out,'build-info.json');
const info=JSON.parse(await readFile(infoPath,'utf8'));
info.visual_runtime_revision='05R-R2 isolated scene-wrapper recoil';
info.hit_impact_visual.camera_kick=true;
info.hit_impact_visual.camera_kick_revision='isolated scene wrapper: basic 16x10 px / counter 28x18 px recoil, damped rotation and zoom, HUD excluded';
info.hit_impact_visual.status='PENDING HUMAN ACCEPTANCE';
await writeFile(infoPath,JSON.stringify(info,null,2));
console.log('Applied Test 05R-R2 isolated scene-wrapper camera-kick repair.');
