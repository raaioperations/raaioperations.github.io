import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root=process.cwd();
const out=path.resolve(root,'../threejs-test-05r');
const indexPath=path.join(out,'index.html');
let html=await readFile(indexPath,'utf8');

const old=/function kickCanvas\(strength\)\{[\s\S]*?\n  \}\n  function impact\(damage\)\{/;
if(!old.test(html)) throw new Error('05R camera-kick function anchor missing.');

const replacement=`function kickCanvas(strength){
    const canvas=document.querySelector('canvas');
    if(!canvas)return;
    if(canvas.__r05KickRaf)cancelAnimationFrame(canvas.__r05KickRaf);
    const strong=strength>=40;
    const duration=strong?150:118;
    const ampX=strong?12:7;
    const ampY=strong?8:4.5;
    const ampRot=strong?.32:.18;
    const zoom=strong?.014:.009;
    const start=performance.now();
    canvas.style.transformOrigin='50% 50%';
    function frame(now){
      const p=Math.min(1,(now-start)/duration);
      const decay=(1-p)*(1-p);
      const phase=p*Math.PI*5.2;
      const x=Math.sin(phase)*ampX*decay;
      const y=-Math.cos(phase*.86)*ampY*decay;
      const r=Math.sin(phase*.72)*ampRot*decay;
      const s=1+zoom*decay;
      canvas.style.transform='translate3d('+x.toFixed(2)+'px,'+y.toFixed(2)+'px,0) scale('+s.toFixed(4)+') rotate('+r.toFixed(3)+'deg)';
      if(p<1)canvas.__r05KickRaf=requestAnimationFrame(frame);
      else{canvas.style.transform='';canvas.__r05KickRaf=0;}
    }
    canvas.__r05KickRaf=requestAnimationFrame(frame);
  }
  function impact(damage){`;

html=html.replace(old,replacement);
html=html.replace('</body>','<div id="r05KickRevision" data-revision="05R-R1" hidden></div></body>');
await writeFile(indexPath,html);

const infoPath=path.join(out,'build-info.json');
const info=JSON.parse(await readFile(infoPath,'utf8'));
info.visual_runtime_revision='05R-R1 perceptible requestAnimationFrame scene kick';
info.hit_impact_visual.camera_kick=true;
info.hit_impact_visual.camera_kick_revision='rAF canvas scene kick: basic 7 px / counter 12 px with damped rotation and zoom';
info.hit_impact_visual.status='PENDING HUMAN ACCEPTANCE';
await writeFile(infoPath,JSON.stringify(info,null,2));
console.log('Applied Test 05R-R1 camera-kick repair.');
