import { mkdir, copyFile, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root=process.cwd();
const base=path.resolve(root,'../threejs-test-05q');
const out=path.resolve(root,'../threejs-test-05r');
const assets=path.join(out,'assets');
await mkdir(assets,{recursive:true});

const acceptance=JSON.parse(await readFile(path.join(base,'acceptance.json'),'utf8'));
if(acceptance.status!=='ACCEPTED'||acceptance.human_visual_acceptance!==true){
  throw new Error('05R refuses to build until Test 05Q has explicit human visual acceptance.');
}

for(const name of ['index.html','app.js','sw.js','build-info.json']) await copyFile(path.join(base,name),path.join(out,name));
await copyFile(path.join(base,'assets/Soldier.glb'),path.join(assets,'Soldier.glb'));

const buildId=new Date().toISOString().replace(/[-:TZ.]/g,'').slice(0,14);
let html=await readFile(path.join(out,'index.html'),'utf8');
html=html.replaceAll('Test 05Q — Enemy Telegraph Readability','Test 05R — Combat Hit Impact');
html=html.replaceAll('RAAI Three.js Test 05Q — Enemy Telegraph Readability','RAAI Three.js Test 05R — Combat Hit Impact');
html=html.replace('VISUAL REVIEW — watch the enemy cue from TELEGRAPH → ACTIVE → RECOVERY; judge readability, direction, impact, and clutter','HIT IMPACT REVIEW — land attacks or use DEMO HIT; judge weight, clarity, camera kick, and visual clutter');
html=html.replace(/<div id="checklist">[\s\S]*?<div class="acceptedContract">[\s\S]*?<\/div>/,
`<div id="checklist"><div><b>REVIEW</b><span>01 A successful hit is immediately noticeable without reading HUD text</span></div><div><b>REVIEW</b><span>02 Burst + flash are focused and disappear quickly</span></div><div><b>REVIEW</b><span>03 Camera kick adds weight without becoming disorienting</span></div><div><b>REVIEW</b><span>04 A 40-damage counter impact reads stronger than a 25-damage basic hit</span></div><div><b>REVIEW</b><span>05 Repeated hits remain readable and do not obscure combat</span></div></div><div class="contract"><b>HIT IMPACT CONTRACT</b><span>Presentation only. Accepted attack damage, counter damage, hit timing, range, guard, parry, stagger, dodge, telegraph timing, and enemy damage mechanics are unchanged.</span></div><div class="acceptedContract"><b>ACCEPTED / NOT RETESTED</b><span>05Q enemy telegraph presentation is accepted. 05P defense integration remains mechanically verified. Jump animation replacement stays deferred.</span></div>`);

const impactMarkup=`<div id="r05ImpactLayer" aria-hidden="true"><div id="r05ImpactFlash"></div><div id="r05ImpactBurst"><div id="r05ImpactCore"></div><div id="r05ImpactLabel">25</div></div></div><button id="r05Demo25">DEMO 25</button><button id="r05Demo40">DEMO 40</button>`;
html=html.replace('</body>',impactMarkup+'</body>');

const impactCss=`#r05ImpactLayer{position:fixed;inset:0;z-index:13;pointer-events:none;overflow:hidden}#r05ImpactFlash{position:absolute;inset:0;opacity:0;background:radial-gradient(circle at 50% 47%,rgba(255,245,215,.38),rgba(255,173,74,.12) 18%,rgba(0,0,0,0) 52%)}#r05ImpactBurst{position:absolute;left:50%;top:47%;width:170px;height:170px;transform:translate(-50%,-50%) scale(.45) rotate(-8deg);opacity:0}#r05ImpactBurst:before,#r05ImpactBurst:after{content:"";position:absolute;inset:0;border-radius:50%;background:repeating-conic-gradient(from 8deg,rgba(255,245,215,.98) 0 2deg,transparent 2deg 14deg);clip-path:polygon(50% 0,58% 36%,100% 50%,61% 59%,50% 100%,42% 62%,0 50%,39% 40%)}#r05ImpactBurst:after{inset:18px;transform:rotate(18deg);opacity:.65}#r05ImpactCore{position:absolute;left:50%;top:50%;width:44px;height:44px;border:3px solid rgba(255,255,255,.95);border-radius:50%;transform:translate(-50%,-50%);box-shadow:0 0 28px rgba(255,176,74,.85),inset 0 0 18px rgba(255,220,155,.68)}#r05ImpactLabel{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font:900 15px/1 system-ui;color:#fff;text-shadow:0 2px 8px rgba(0,0,0,.9)}#r05Demo25,#r05Demo40{position:fixed;z-index:14;top:91px;padding:8px 10px;border:1px solid rgba(255,255,255,.24);border-radius:999px;background:rgba(8,13,16,.72);color:#fff;font:800 8px/1 system-ui;letter-spacing:.05em;pointer-events:auto;touch-action:manipulation}#r05Demo25{left:50%;transform:translateX(-58px)}#r05Demo40{left:50%;transform:translateX(18px)}@media(pointer:coarse),(max-width:900px){#r05ImpactBurst{width:145px;height:145px}#r05Demo25,#r05Demo40{top:86px}}`;
html=html.replace('</style>',impactCss+'</style>');

const impactScript=`<script>
(()=>{
  const layer=document.getElementById('r05ImpactLayer');
  const flash=document.getElementById('r05ImpactFlash');
  const burst=document.getElementById('r05ImpactBurst');
  const label=document.getElementById('r05ImpactLabel');
  let active=0;
  function kickCanvas(strength){
    const canvas=document.querySelector('canvas');
    if(!canvas||!canvas.animate)return;
    const px=strength>=40?5:3;
    canvas.animate([
      {transform:'translate(0,0)'},
      {transform:'translate('+px+'px,-'+Math.max(1,px-1)+'px)'},
      {transform:'translate(-'+Math.max(1,px-2)+'px,'+Math.max(1,px-3)+'px)'},
      {transform:'translate(0,0)'}
    ],{duration:strength>=40?115:90,easing:'ease-out'});
  }
  function impact(damage){
    active++;
    const token=active;
    const strong=damage>=40;
    label.textContent=String(damage);
    flash.style.opacity=strong?'.95':'.72';
    burst.style.opacity='1';
    burst.style.transform='translate(-50%,-50%) scale('+(strong?'1.18':'1')+') rotate('+(strong?'-3deg':'-8deg')+')';
    burst.style.filter=strong?'drop-shadow(0 0 22px rgba(255,95,54,.85))':'drop-shadow(0 0 16px rgba(255,177,74,.65))';
    kickCanvas(damage);
    requestAnimationFrame(()=>{
      flash.style.transition='opacity '+(strong?'130':'105')+'ms ease-out';
      burst.style.transition='opacity '+(strong?'180':'145')+'ms ease-out,transform '+(strong?'180':'145')+'ms cubic-bezier(.2,.8,.2,1)';
      flash.style.opacity='0';
      burst.style.opacity='0';
      burst.style.transform='translate(-50%,-50%) scale('+(strong?'1.52':'1.34')+') rotate(7deg)';
    });
    setTimeout(()=>{if(token===active){flash.style.transition='none';burst.style.transition='none';}},220);
  }
  function parseHp(text){const m=String(text||'').match(/(\d+)\s*\/\s*(\d+)/);return m?Number(m[1]):null;}
  function watchHp(id,expectedDamage){
    const el=document.getElementById(id);if(!el)return;
    let last=parseHp(el.textContent);
    new MutationObserver(()=>{
      const now=parseHp(el.textContent);
      if(last!==null&&now!==null&&now<last){impact(last-now||expectedDamage);}
      last=now;
    }).observe(el,{subtree:true,childList:true,characterData:true});
  }
  watchHp('targetHp',25);
  watchHp('counterTargetHp',40);
  const d25=document.getElementById('r05Demo25');if(d25)d25.addEventListener('pointerdown',e=>{e.preventDefault();impact(25);});
  const d40=document.getElementById('r05Demo40');if(d40)d40.addEventListener('pointerdown',e=>{e.preventDefault();impact(40);});
  globalThis.__r05ImpactDemo=impact;
})();
</script>`;
html=html.replace('</body>',impactScript+'</body>');
html=html.replace(/app\.js\?v=\d+/g,`app.js?v=${buildId}`).replace(/sw\.js\?v=\d+/g,`sw.js?v=${buildId}`);
await writeFile(path.join(out,'index.html'),html);

let sw=await readFile(path.join(out,'sw.js'),'utf8');
sw=sw.replace(/raai-threejs-test05q-\d+/g,`raai-threejs-test05r-${buildId}`).replace(/app\.js\?v=\d+/g,`app.js?v=${buildId}`);
await writeFile(path.join(out,'sw.js'),sw);

const info=JSON.parse(await readFile(path.join(out,'build-info.json'),'utf8'));
info.build_id=buildId;
info.inherits='Accepted Test 05Q visual telegraph baseline + verified Test 05P combat integration';
info.focus='human visual review of hit impact readability, screen kick, and strength differentiation';
info.acceptance_checklist={hit_noticeability:'HUMAN REVIEW',burst_flash_focus:'HUMAN REVIEW',camera_kick_weight:'HUMAN REVIEW',counter_vs_basic_strength:'HUMAN REVIEW',repeat_hit_clutter:'HUMAN REVIEW'};
info.hit_impact_visual={basic_damage_reference:25,counter_damage_reference:40,mechanics_changed:false,screen_flash:true,impact_burst:true,camera_kick:true,damage_strength_scaling:true,status:'PENDING HUMAN ACCEPTANCE'};
info.enemy_attack.visual_review_status='ACCEPTED';
info.human_acceptance={accepted:false,status:'PENDING HUMAN VISUAL ACCEPTANCE'};
info.visual_runtime_revision='05R DOM-observed bundle-safe hit-impact presentation';
await writeFile(path.join(out,'build-info.json'),JSON.stringify(info,null,2));
console.log(`Built Test 05R combat hit-impact visual review ${buildId}.`);
