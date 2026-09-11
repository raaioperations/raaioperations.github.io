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
for(const symbol of ['targetRoot','playerRoot','enemyAttackPhase05O','enemyPhaseStart05O','n05StartEnemyAttack']){
  if(!app.includes(symbol)) throw new Error(`05Q prerequisite missing from promoted runtime: ${symbol}`);
}

// IMPORTANT: this layer is appended after the bundled Three.js module. The namespace identifier
// `THREE` is not guaranteed to survive bundling, so 05Q intentionally creates all world-space
// presentation by cloning constructors/meshes already present in the accepted runtime.
const visualRuntime=`

// Test 05Q — human visual-review telegraph readability layer (clone-native; no THREE namespace dependency).
if(typeof targetRoot==='undefined'||typeof playerRoot==='undefined'||typeof n05StartEnemyAttack!=='function'){
  throw new Error('05Q promoted runtime prerequisites unavailable');
}
const q05VisualRoot=new targetRoot.constructor();
q05VisualRoot.position.set(0,0,0);q05VisualRoot.rotation.set(0,0,0);q05VisualRoot.scale.set(1,1,1);targetRoot.add(q05VisualRoot);

let q05RingTemplate=null,q05GroundTemplate=null;
targetRoot.traverse(o=>{
  if(!o||!o.isMesh||!o.geometry)return;
  if(!q05RingTemplate&&o.geometry.type==='TorusGeometry')q05RingTemplate=o;
  if(!q05GroundTemplate&&o.geometry.type==='CylinderGeometry')q05GroundTemplate=o;
});
let q05LaneTemplate=null;
if(typeof playerSword!=='undefined'&&playerSword&&playerSword.traverse){
  playerSword.traverse(o=>{if(!q05LaneTemplate&&o&&o.isMesh&&o.geometry&&o.geometry.type==='BoxGeometry')q05LaneTemplate=o;});
}
if(!q05RingTemplate)throw new Error('05Q could not locate accepted target ring template');
if(!q05LaneTemplate&&!q05GroundTemplate)throw new Error('05Q could not locate a reusable lane template');

function q05CloneMesh(template){
  const m=template.clone();
  if(m.material&&m.material.clone)m.material=m.material.clone();
  m.visible=false;m.castShadow=false;m.receiveShadow=false;
  if(m.material){m.material.transparent=true;m.material.depthWrite=false;m.material.opacity=0;}
  return m;
}
function q05Paint(mesh,hex,opacity){
  if(!mesh||!mesh.material)return;
  const mat=mesh.material;
  if(mat.color&&mat.color.setHex)mat.color.setHex(hex);
  if(mat.emissive&&mat.emissive.setHex){mat.emissive.setHex(hex);mat.emissiveIntensity=.45;}
  mat.opacity=opacity;mat.transparent=true;mat.depthWrite=false;
}
function q05Clamp(v){return Math.max(0,Math.min(1,v));}

const q05Ring=q05CloneMesh(q05RingTemplate);q05Ring.position.set(0,.12,0);q05Ring.rotation.x=Math.PI/2;q05VisualRoot.add(q05Ring);
const q05Halo=q05CloneMesh(q05RingTemplate);q05Halo.position.set(0,1.35,0);q05Halo.rotation.set(Math.PI/2,0,0);q05Halo.scale.set(.92,.92,.92);q05VisualRoot.add(q05Halo);

const q05LaneSource=q05LaneTemplate||q05GroundTemplate;
const q05Fan=[];
for(const angle of [-.62,-.31,0,.31,.62]){
  const lane=q05CloneMesh(q05LaneSource);
  lane.rotation.set(0,angle,0);
  lane.position.set(Math.sin(angle)*1.72,.075,Math.cos(angle)*1.72);
  if(q05LaneTemplate)lane.scale.set(5.2,.48,2.22);
  else lane.scale.set(.32,.22,2.45);
  q05VisualRoot.add(lane);q05Fan.push(lane);
}
const q05Strike=q05CloneMesh(q05LaneSource);q05Strike.position.set(0,.09,1.72);q05Strike.rotation.set(0,0,0);
if(q05LaneTemplate)q05Strike.scale.set(9,.60,2.22);else q05Strike.scale.set(.46,.25,2.5);
q05VisualRoot.add(q05Strike);

let q05LastPhase='READY',q05Auto=false,q05AutoTimer=0,q05LastFrame=performance.now();
function q05OrientAtPlayer(){
  const dx=playerRoot.position.x-targetRoot.position.x,dz=playerRoot.position.z-targetRoot.position.z;
  q05VisualRoot.rotation.y=Math.atan2(dx,dz);
}
function q05SetDemoButton(){const e=document.getElementById('visualDemoAuto');if(e)e.textContent=q05Auto?'AUTO: ON':'AUTO: OFF';}
function q05StartDemo(){if(enemyAttackPhase05O!=='READY')return false;q05OrientAtPlayer();return n05StartEnemyAttack('05Q_VISUAL');}
function q05BindVisualControls(){
  const once=document.getElementById('visualDemoAttack');if(once)once.addEventListener('pointerdown',e=>{e.preventDefault();q05StartDemo();});
  const auto=document.getElementById('visualDemoAuto');if(auto)auto.addEventListener('pointerdown',e=>{e.preventDefault();q05Auto=!q05Auto;q05AutoTimer=0;q05SetDemoButton();if(q05Auto)q05StartDemo();});
}
function q05HideAll(){q05Ring.visible=false;q05Halo.visible=false;q05Strike.visible=false;for(const lane of q05Fan)lane.visible=false;}
function q05VisualLoop(now){
  const phase=enemyAttackPhase05O;
  const dt=Math.min(.05,Math.max(0,(now-q05LastFrame)/1000));q05LastFrame=now;
  if(phase!==q05LastPhase){if(phase==='TELEGRAPH')q05OrientAtPlayer();q05LastPhase=phase;}
  const elapsed=Math.max(0,(performance.now()-enemyPhaseStart05O)/1000);
  q05HideAll();
  if(phase==='TELEGRAPH'){
    const p=q05Clamp(elapsed/.70),pulse=.5+.5*Math.sin(now*.018);
    q05Ring.visible=q05Halo.visible=true;for(const lane of q05Fan)lane.visible=true;
    q05Ring.scale.setScalar(1.38-.42*p);q05Paint(q05Ring,0xffc15b,.44+.30*p);
    q05Halo.scale.setScalar(.92+.10*pulse);q05Paint(q05Halo,0xffa33a,.18+.12*pulse);
    for(let i=0;i<q05Fan.length;i++)q05Paint(q05Fan[i],0xffa33a,.16+.16*p+(i===2?.08:0));
  }else if(phase==='ACTIVE'){
    const p=q05Clamp(elapsed/.12),pulse=1+Math.sin(p*Math.PI)*.18;
    q05Ring.visible=q05Halo.visible=q05Strike.visible=true;for(const lane of q05Fan)lane.visible=true;
    q05Ring.scale.setScalar(.90*pulse);q05Paint(q05Ring,0xff2d24,.95);
    q05Halo.scale.setScalar(1.10*pulse);q05Paint(q05Halo,0xff2d24,.46);
    for(const lane of q05Fan)q05Paint(lane,0xff352d,.62);
    q05Strike.scale.x=(q05LaneTemplate?9:0.46)*(1+.16*p);q05Paint(q05Strike,0xff1f1a,.96-.22*p);
  }else if(phase==='RECOVERY'){
    const p=q05Clamp(elapsed/.40);
    q05Ring.visible=true;for(const lane of q05Fan)lane.visible=true;
    q05Ring.scale.setScalar(1+.15*p);q05Paint(q05Ring,0x8ba9bd,.34*(1-p));
    for(const lane of q05Fan)q05Paint(lane,0x7da0b8,.15*(1-p));
  }
  if(q05Auto){q05AutoTimer+=dt;if(phase==='READY'&&q05AutoTimer>.75){q05AutoTimer=0;q05StartDemo();}else if(phase!=='READY')q05AutoTimer=0;}
  requestAnimationFrame(q05VisualLoop);
}
queueMicrotask(()=>{q05BindVisualControls();q05SetDemoButton();requestAnimationFrame(q05VisualLoop);});
`;
if(visualRuntime.includes('THREE.'))throw new Error('05Q visual runtime must not depend on stripped THREE namespace');
app+=visualRuntime;
await writeFile(path.join(out,'app.js'),app);

let html=await readFile(path.join(out,'index.html'),'utf8');
html=html.replaceAll('05P','05Q').replaceAll('05p','05q');
html=html.replaceAll('Defense Integration Verified','Enemy Telegraph Readability');
html=html.replace('DEFENSE INTEGRATION — automated deterministic verification complete; no manual proof required','VISUAL REVIEW — watch the enemy cue from TELEGRAPH → ACTIVE → RECOVERY; judge readability, direction, impact, and clutter');
html=html.replace(/<div id="checklist">[\s\S]*?<div class="acceptedContract">[\s\S]*?<\/div>/,
`<div id="checklist"><div><b>REVIEW</b><span>01 TELEGRAPH is immediately noticeable before ACTIVE</span></div><div><b>REVIEW</b><span>02 Attack direction / danger area is readable before impact</span></div><div><b>REVIEW</b><span>03 ACTIVE moment is unmistakably stronger than TELEGRAPH</span></div><div><b>REVIEW</b><span>04 RECOVERY reads as a clear safe/reset state</span></div><div><b>REVIEW</b><span>05 Cue does not obscure the character, controls, or scene</span></div></div><div class="contract"><b>VISUAL CONTRACT</b><span>Mechanical timing is already accepted and unchanged: TELEGRAPH 0.70 s → ACTIVE 0.12 s → RECOVERY 0.40 s. This test changes presentation only.</span></div><div class="acceptedContract"><b>AUTOMATED / NOT RETESTED</b><span>05P defense integration passed all deterministic checks. Movement, attacks, dodge/i-frames, guard, parry, stagger, counters, telegraph timing, and enemy damage remain active. Jump animation replacement stays deferred.</span></div>`);
html=html.replace('</body>','<button id="visualDemoAttack">DEMO ATTACK</button><button id="visualDemoAuto">AUTO: OFF</button></body>');
html=html.replace('</style>','#visualDemoAttack,#visualDemoAuto{position:fixed;z-index:14;top:54px;padding:9px 12px;border:1px solid rgba(255,255,255,.28);border-radius:999px;background:rgba(8,13,16,.72);backdrop-filter:blur(10px);color:#fff;font:800 9px/1 system-ui;letter-spacing:.05em;pointer-events:auto;touch-action:manipulation}#visualDemoAttack{left:50%;transform:translateX(-54%)}#visualDemoAuto{left:calc(50% + 72px)}@media(pointer:coarse),(max-width:900px){#visualDemoAttack,#visualDemoAuto{top:50px;font-size:8px;padding:8px 10px}#visualDemoAuto{left:calc(50% + 65px)}}</style>');
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
info.enemy_attack.visual_signal='world-space cloned-mesh directional fan + countdown ring + body halo + ACTIVE strike lane + RECOVERY fade';
info.enemy_attack.visual_review_status='PENDING HUMAN ACCEPTANCE';
info.delegated_verification_status_05p='PASS';
info.human_acceptance={accepted:false,status:'PENDING HUMAN VISUAL ACCEPTANCE'};
info.disabled_systems={enemy_ai:true,authored_enemy_attack_animation:true,counter_animation:true,counter_hitstop:true,counter_vfx:true,block_stamina:true};
info.visual_runtime_revision='05Q-R1 clone-native / no stripped THREE namespace dependency';
info.app_js_bytes=Buffer.byteLength(app);
await writeFile(path.join(out,'build-info.json'),JSON.stringify(info,null,2));
console.log(`Built Test 05Q-R1 visual telegraph readability review ${buildId}.`);
