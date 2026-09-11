import { mkdir, copyFile, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root=process.cwd();
const base=path.resolve(root,'../threejs-test-05p');
const out=path.resolve(root,'../threejs-test-05q');
const assets=path.join(out,'assets');
await mkdir(assets,{recursive:true});
for(const name of ['index.html','app.js','sw.js','build-info.json']) await copyFile(path.join(base,name),path.join(out,name));
await copyFile(path.join(base,'assets/Soldier.glb'),path.join(assets,'Soldier.glb'));

const buildId=new Date().toISOString().replace(/[-:TZ.]/g,'').slice(0,14);
let app=await readFile(path.join(out,'app.js'),'utf8');
for(const symbol of ['enemyAttackPhase05O','enemyPhaseStart05O','n05StartEnemyAttack']){
  if(!app.includes(symbol)) throw new Error(`05Q prerequisite missing from promoted runtime: ${symbol}`);
}

// 05Q is a presentation/readability review. The accepted Three.js bundle is already built, so this
// layer intentionally uses screen-space DOM presentation instead of reaching back into stripped
// bundle-local Three.js identifiers. Mechanical timing remains owned by the accepted 05O runtime.
const visualRuntime=`

// Test 05Q — human visual-review telegraph readability layer (bundle-safe screen-space presentation).
let q05LastPhase='READY',q05Auto=false,q05AutoTimer=0,q05LastFrame=performance.now();
function q05El(id){return document.getElementById(id);}
function q05SetDemoButton(){const e=q05El('visualDemoAuto');if(e)e.textContent=q05Auto?'AUTO: ON':'AUTO: OFF';}
function q05StartDemo(){if(enemyAttackPhase05O!=='READY')return false;return n05StartEnemyAttack('05Q_VISUAL');}
function q05BindVisualControls(){
  const once=q05El('visualDemoAttack');if(once)once.addEventListener('pointerdown',e=>{e.preventDefault();q05StartDemo();});
  const auto=q05El('visualDemoAuto');if(auto)auto.addEventListener('pointerdown',e=>{e.preventDefault();q05Auto=!q05Auto;q05AutoTimer=0;q05SetDemoButton();if(q05Auto)q05StartDemo();});
}
function q05VisualLoop(now){
  const phase=enemyAttackPhase05O,root=q05El('q05Cue'),ring=q05El('q05Ring'),cone=q05El('q05Cone'),lane=q05El('q05Lane'),label=q05El('q05Phase');
  const dt=Math.min(.05,Math.max(0,(now-q05LastFrame)/1000));q05LastFrame=now;
  const elapsed=Math.max(0,(performance.now()-enemyPhaseStart05O)/1000);
  if(root){root.dataset.phase=phase;root.style.display=phase==='READY'?'none':'block';}
  if(phase!==q05LastPhase){q05LastPhase=phase;}
  if(phase==='TELEGRAPH'){
    const p=Math.max(0,Math.min(1,elapsed/.70)),pulse=.5+.5*Math.sin(now*.018);
    if(cone)cone.style.opacity=String(.20+.22*p);
    if(ring){ring.style.opacity=String(.52+.32*p);ring.style.transform='translate(-50%,-50%) scale('+(1.42-.42*p).toFixed(3)+')';}
    if(lane)lane.style.opacity='0';
    if(label){label.textContent='TELEGRAPH';label.style.opacity=String(.70+.25*pulse);}
  }else if(phase==='ACTIVE'){
    const p=Math.max(0,Math.min(1,elapsed/.12)),pulse=1+Math.sin(p*Math.PI)*.14;
    if(cone)cone.style.opacity='.72';
    if(ring){ring.style.opacity='.98';ring.style.transform='translate(-50%,-50%) scale('+(.92*pulse).toFixed(3)+')';}
    if(lane){lane.style.opacity=String(.98-.18*p);lane.style.transform='translateX(-50%) scaleX('+(1+.25*p).toFixed(3)+')';}
    if(label){label.textContent='ACTIVE';label.style.opacity='1';}
  }else if(phase==='RECOVERY'){
    const p=Math.max(0,Math.min(1,elapsed/.40));
    if(cone)cone.style.opacity=String(.18*(1-p));
    if(ring){ring.style.opacity=String(.34*(1-p));ring.style.transform='translate(-50%,-50%) scale('+(1+.16*p).toFixed(3)+')';}
    if(lane)lane.style.opacity='0';
    if(label){label.textContent='RECOVERY';label.style.opacity=String(.75*(1-p));}
  }
  if(q05Auto){q05AutoTimer+=dt;if(phase==='READY'&&q05AutoTimer>.75){q05AutoTimer=0;q05StartDemo();}else if(phase!=='READY')q05AutoTimer=0;}
  requestAnimationFrame(q05VisualLoop);
}
queueMicrotask(()=>{q05BindVisualControls();q05SetDemoButton();requestAnimationFrame(q05VisualLoop);});
`;
if(visualRuntime.includes('THREE.'))throw new Error('05Q visual runtime must remain independent of stripped THREE namespace');
app+=visualRuntime;
await writeFile(path.join(out,'app.js'),app);

let html=await readFile(path.join(out,'index.html'),'utf8');
html=html.replaceAll('05P','05Q').replaceAll('05p','05q');
html=html.replaceAll('Defense Integration Verified','Enemy Telegraph Readability');
html=html.replace('DEFENSE INTEGRATION — automated deterministic verification complete; no manual proof required','VISUAL REVIEW — watch the enemy cue from TELEGRAPH → ACTIVE → RECOVERY; judge readability, direction, impact, and clutter');
html=html.replace(/<div id="checklist">[\s\S]*?<div class="acceptedContract">[\s\S]*?<\/div>/,
`<div id="checklist"><div><b>REVIEW</b><span>01 TELEGRAPH is immediately noticeable before ACTIVE</span></div><div><b>REVIEW</b><span>02 Attack direction / danger area is readable before impact</span></div><div><b>REVIEW</b><span>03 ACTIVE moment is unmistakably stronger than TELEGRAPH</span></div><div><b>REVIEW</b><span>04 RECOVERY reads as a clear safe/reset state</span></div><div><b>REVIEW</b><span>05 Cue does not obscure the character, controls, or scene</span></div></div><div class="contract"><b>VISUAL CONTRACT</b><span>Mechanical timing is already accepted and unchanged: TELEGRAPH 0.70 s → ACTIVE 0.12 s → RECOVERY 0.40 s. This test changes presentation only.</span></div><div class="acceptedContract"><b>AUTOMATED / NOT RETESTED</b><span>05P defense integration passed all deterministic checks. Movement, attacks, dodge/i-frames, guard, parry, stagger, counters, telegraph timing, and enemy damage remain active. Jump animation replacement stays deferred.</span></div>`);
html=html.replace('</body>',`<div id="q05Cue" data-phase="READY" aria-hidden="true"><div id="q05Cone"></div><div id="q05Lane"></div><div id="q05Ring"></div><div id="q05Phase">TELEGRAPH</div><div id="q05Direction">DANGER ▼</div></div><button id="visualDemoAttack">DEMO ATTACK</button><button id="visualDemoAuto">AUTO: OFF</button></body>`);
html=html.replace('</style>',`#q05Cue{display:none;position:fixed;z-index:9;left:50%;top:38%;width:240px;height:360px;transform:translateX(-50%);pointer-events:none;filter:drop-shadow(0 6px 18px rgba(0,0,0,.35))}#q05Cone{position:absolute;left:50%;top:58px;width:220px;height:274px;transform:translateX(-50%);clip-path:polygon(50% 0,100% 100%,0 100%);background:linear-gradient(to bottom,rgba(255,187,74,.92),rgba(255,132,45,.20));opacity:0;transition:background .05s linear}#q05Ring{position:absolute;left:50%;top:56px;width:94px;height:94px;border:7px solid rgba(255,194,82,.96);border-radius:50%;box-shadow:0 0 22px rgba(255,165,50,.72),inset 0 0 16px rgba(255,177,61,.30);transform:translate(-50%,-50%) scale(1.4);opacity:0}#q05Lane{position:absolute;left:50%;top:58px;width:34px;height:274px;transform:translateX(-50%);transform-origin:50% 0;background:linear-gradient(to bottom,rgba(255,48,38,.98),rgba(255,48,38,.16));box-shadow:0 0 20px rgba(255,42,34,.70);opacity:0}#q05Phase{position:absolute;left:50%;top:0;transform:translateX(-50%);padding:6px 10px;border-radius:999px;background:rgba(8,13,16,.80);border:1px solid rgba(255,255,255,.22);font:900 10px/1 system-ui;letter-spacing:.10em;color:#ffd06f;white-space:nowrap}#q05Direction{position:absolute;left:50%;bottom:4px;transform:translateX(-50%);font:900 11px/1 system-ui;letter-spacing:.12em;color:#ffd06f;text-shadow:0 2px 8px rgba(0,0,0,.9);white-space:nowrap}#q05Cue[data-phase="ACTIVE"] #q05Cone{background:linear-gradient(to bottom,rgba(255,50,42,.96),rgba(255,28,24,.26))}#q05Cue[data-phase="ACTIVE"] #q05Ring{border-color:#ff3d34;box-shadow:0 0 30px rgba(255,42,34,.92),inset 0 0 22px rgba(255,42,34,.45)}#q05Cue[data-phase="ACTIVE"] #q05Phase,#q05Cue[data-phase="ACTIVE"] #q05Direction{color:#ff5b50}#q05Cue[data-phase="RECOVERY"] #q05Cone{background:linear-gradient(to bottom,rgba(136,177,205,.68),rgba(110,150,176,.08))}#q05Cue[data-phase="RECOVERY"] #q05Ring{border-color:#91b6cf;box-shadow:0 0 18px rgba(120,166,195,.45)}#q05Cue[data-phase="RECOVERY"] #q05Phase,#q05Cue[data-phase="RECOVERY"] #q05Direction{color:#a9c9dd}#visualDemoAttack,#visualDemoAuto{position:fixed;z-index:14;top:54px;padding:9px 12px;border:1px solid rgba(255,255,255,.28);border-radius:999px;background:rgba(8,13,16,.72);backdrop-filter:blur(10px);color:#fff;font:800 9px/1 system-ui;letter-spacing:.05em;pointer-events:auto;touch-action:manipulation}#visualDemoAttack{left:50%;transform:translateX(-54%)}#visualDemoAuto{left:calc(50% + 72px)}@media(pointer:coarse),(max-width:900px){#q05Cue{top:35%;width:210px;height:320px}#q05Cone,#q05Lane{height:235px}#q05Cone{width:190px}#q05Ring{width:82px;height:82px}#visualDemoAttack,#visualDemoAuto{top:50px;font-size:8px;padding:8px 10px}#visualDemoAuto{left:calc(50% + 65px)}}</style>`);
html=html.replace(/app\.js\?v=\d+/g,`app.js?v=${buildId}`).replace(/sw\.js\?v=\d+/g,`sw.js?v=${buildId}`);
await writeFile(path.join(out,'index.html'),html);

let sw=await readFile(path.join(out,'sw.js'),'utf8');
sw=sw.replace(/raai-threejs-test05o-\d+/g,`raai-threejs-test05q-${buildId}`).replace(/raai-threejs-test05q-\d+/g,`raai-threejs-test05q-${buildId}`).replace(/app\.js\?v=\d+/g,`app.js?v=${buildId}`);
await writeFile(path.join(out,'sw.js'),sw);

const info=JSON.parse(await readFile(path.join(out,'build-info.json'),'utf8'));
info.build_id=buildId;
info.inherits='Verified Test 05P combat baseline with delegated nonvisual defense integration';
info.focus='human visual review of enemy telegraph readability and phase presentation';
info.proof_labels=[];
info.acceptance_checklist={telegraph_noticeability:'HUMAN REVIEW',direction_readability:'HUMAN REVIEW',active_impact_readability:'HUMAN REVIEW',recovery_readability:'HUMAN REVIEW',visual_clutter_and_scene_readability:'HUMAN REVIEW'};
info.enemy_attack.visual_signal='screen-space directional cone + countdown ring + ACTIVE strike lane + RECOVERY fade; mechanics remain world/controller authoritative';
info.enemy_attack.visual_review_status='PENDING HUMAN ACCEPTANCE';
info.delegated_verification_status_05p='PASS';
info.human_acceptance={accepted:false,status:'PENDING HUMAN VISUAL ACCEPTANCE'};
info.disabled_systems={enemy_ai:true,authored_enemy_attack_animation:true,counter_animation:true,counter_hitstop:true,counter_vfx:true,block_stamina:true};
info.visual_runtime_revision='05Q-R2 bundle-safe screen-space presentation';
info.app_js_bytes=Buffer.byteLength(app);
await writeFile(path.join(out,'build-info.json'),JSON.stringify(info,null,2));
console.log(`Built Test 05Q-R2 visual telegraph readability review ${buildId}.`);
