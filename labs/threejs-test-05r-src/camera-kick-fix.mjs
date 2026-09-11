import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root=process.cwd();
const out=path.resolve(root,'../threejs-test-05r');
const indexPath=path.join(out,'index.html');
let html=await readFile(indexPath,'utf8');

const old=/function kickCanvas\(strength\)\{[\s\S]*?\n  \}\n  function impact\(damage\)\{/;
if(!old.test(html)) throw new Error('05R camera-kick function anchor missing.');

// 05R-R4: reproduce the accepted isolated-jolt topology instead of moving the
// viewport-sized live WebGL canvas. Capture the rendered frame, place it in an
// oversized scene surface, then apply the exact accepted jolt waveform to that
// surface while the live game remains beneath it. HUD/control layers stay fixed.
const replacement=`function ensureJoltCompositor(){
    let viewport=document.getElementById('r05JoltViewportR4');
    if(viewport)return {
      viewport,
      scene:document.getElementById('r05JoltSceneR4'),
      snapshot:document.getElementById('r05JoltSnapshotR4')
    };
    viewport=document.createElement('div');
    viewport.id='r05JoltViewportR4';
    viewport.style.position='fixed';
    viewport.style.inset='0';
    viewport.style.overflow='hidden';
    viewport.style.pointerEvents='none';
    viewport.style.zIndex='4';
    viewport.style.display='none';
    const scene=document.createElement('div');
    scene.id='r05JoltSceneR4';
    scene.style.position='absolute';
    scene.style.inset='-46px';
    scene.style.transformOrigin='50% 50%';
    scene.style.willChange='transform';
    const snapshot=document.createElement('canvas');
    snapshot.id='r05JoltSnapshotR4';
    snapshot.style.position='absolute';
    snapshot.style.inset='0';
    snapshot.style.width='100%';
    snapshot.style.height='100%';
    snapshot.style.display='block';
    scene.appendChild(snapshot);
    viewport.appendChild(scene);
    document.body.appendChild(viewport);
    return {viewport,scene,snapshot};
  }
  function paintJoltSnapshot(live,snapshot){
    const pad=46;
    const rect=live.getBoundingClientRect();
    const w=Math.max(1,Math.round(rect.width||innerWidth));
    const h=Math.max(1,Math.round(rect.height||innerHeight));
    const dpr=Math.max(1,Math.min(devicePixelRatio||1,2));
    snapshot.width=Math.round((w+pad*2)*dpr);
    snapshot.height=Math.round((h+pad*2)*dpr);
    const ctx=snapshot.getContext('2d',{alpha:false,desynchronized:true});
    if(!ctx)return false;
    ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#101719';
    ctx.fillRect(0,0,w+pad*2,h+pad*2);
    try{
      // Preserve the live frame at 1:1 inside a 46 px overscan border.
      ctx.drawImage(live,0,0,live.width,live.height,pad,pad,w,h);
      // Extend the actual edge pixels into the overscan border. This prevents
      // exposed black body pixels without zooming the central gameplay frame.
      const sx=Math.max(1,Math.round(live.width*pad/w));
      const sy=Math.max(1,Math.round(live.height*pad/h));
      ctx.drawImage(live,0,0,sx,live.height,0,pad,pad,h);
      ctx.drawImage(live,Math.max(0,live.width-sx),0,sx,live.height,pad+w,pad,pad,h);
      ctx.drawImage(live,0,0,live.width,sy,pad,0,w,pad);
      ctx.drawImage(live,0,Math.max(0,live.height-sy),live.width,sy,pad,pad+h,w,pad);
      ctx.drawImage(live,0,0,sx,sy,0,0,pad,pad);
      ctx.drawImage(live,Math.max(0,live.width-sx),0,sx,sy,pad+w,0,pad,pad);
      ctx.drawImage(live,0,Math.max(0,live.height-sy),sx,sy,0,pad+h,pad,pad);
      ctx.drawImage(live,Math.max(0,live.width-sx),Math.max(0,live.height-sy),sx,sy,pad+w,pad+h,pad,pad);
      return true;
    }catch(err){
      console.warn('05R-R4 snapshot capture failed',err);
      return false;
    }
  }
  function runAcceptedJolt(scene,viewport,strength){
    if(scene.__r05KickRaf)cancelAnimationFrame(scene.__r05KickRaf);
    const strong=strength>=40;
    const duration=strong?300:240;
    const ampX=strong?34:20;
    const ampY=strong?20:12;
    const ampRot=strong?1.15:.68;
    const ampZoom=strong?.030:.018;
    const token=(scene.__r05KickToken||0)+1;
    scene.__r05KickToken=token;
    const start=performance.now();
    viewport.style.display='block';
    function frame(now){
      if(token!==scene.__r05KickToken)return;
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
        viewport.style.display='none';
        scene.__r05KickRaf=0;
      }
    }
    scene.__r05KickRaf=requestAnimationFrame(frame);
  }
  function kickCanvas(strength){
    const live=[...document.querySelectorAll('canvas')].find(c=>c.id!=='r05JoltSnapshotR4');
    if(!live)return;
    const compositor=ensureJoltCompositor();
    // Capture immediately after the game's next rendered frame. The second RAF
    // keeps this after the established Three.js animation callback on Safari.
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      if(!paintJoltSnapshot(live,compositor.snapshot))return;
      runAcceptedJolt(compositor.scene,compositor.viewport,strength);
    }));
  }
  function impact(damage){`;

html=html.replace(old,replacement);
html=html.replace('</body>','<div id="r05KickRevision" data-revision="05R-R4-OVERSCAN-COMPOSITOR" hidden></div></body>');
await writeFile(indexPath,html);

const infoPath=path.join(out,'build-info.json');
const info=JSON.parse(await readFile(infoPath,'utf8'));
info.visual_runtime_revision='05R-R4 accepted-jolt oversized frame compositor';
info.hit_impact_visual.camera_kick=true;
info.hit_impact_visual.camera_kick_revision='accepted 05R-JOLT waveform on 46px-overscanned captured gameplay scene; live WebGL canvas stays fixed beneath; HUD stationary; black-edge exposure eliminated';
info.hit_impact_visual.camera_kick_source='labs/threejs-test-05r-jolt/acceptance.json';
info.hit_impact_visual.status='PENDING HUMAN ACCEPTANCE';
info.hit_impact_visual.previous_integrated_revisions=['05R-R1 FAILED','05R-R2 FAILED','05R-R3 FAILED'];
await writeFile(infoPath,JSON.stringify(info,null,2));
console.log('Applied Test 05R-R4 accepted-jolt oversized compositor.');
