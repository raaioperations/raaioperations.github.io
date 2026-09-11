import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root=process.cwd();
const basePath=path.resolve(root,'../threejs-test-05h-src/build.mjs');
const runtimeBuilder=path.resolve(root,'.build-05i-wrapper.mjs');
let src=await readFile(basePath,'utf8');

// Reuse the accepted 05H architecture but emit a new 05I build.
src=src.replaceAll('05H','05I').replaceAll('05h','05i');

const blockCode=`
const BLOCK_BASE_DAMAGE=20,BLOCK_DAMAGE=5,BLOCK_FRONT_DOT=.50;
let blocking=false,armedBlockProbe='NONE';
function setBlockCheck(n){const e=document.getElementById('blockCheck'+n);if(e){e.textContent='PASS';e.style.color='#a8f0b5';}}
function blockForward(){return new THREE.Vector3(Math.sin(playerRoot.rotation.y),0,Math.cos(playerRoot.rotation.y)).normalize();}
function applyBlockProbe(kind){
  const f=blockForward(),srcDir=kind==='REAR'?f.clone().multiplyScalar(-1):f.clone();
  const frontDot=f.dot(srcDir),guarded=blocking&&frontDot>=BLOCK_FRONT_DOT,damage=guarded?BLOCK_DAMAGE:BLOCK_BASE_DAMAGE;
  playerHP=Math.max(0,playerHP-damage);uiText('playerHp',playerHP+'/100');uiText('blockDamage',damage+'');uiText('blockFrontDot',frontDot.toFixed(2));uiText('hitResult',kind+' · '+damage+' DAMAGE');
  if(kind==='DIRECT'&&!blocking&&damage===20){setBlockCheck(1);prove('BLOCK BASELINE DAMAGE CONFIRMED','20 DAMAGE');}
  if(kind==='FRONT'&&blocking&&guarded&&damage===5){setBlockCheck(3);prove('BLOCK FRONT MITIGATION CONFIRMED','20 → 5 DAMAGE');}
  if(kind==='REAR'&&blocking&&!guarded&&damage===20){setBlockCheck(4);prove('BLOCK REAR BYPASS CONFIRMED','20 DAMAGE');}
}
function armBlockProbe(kind){if(blocking){uiText('hitResult','RELEASE BLOCK FIRST');return;}armedBlockProbe=kind;uiText('hitResult','ARMED · '+kind+' · HOLD BLOCK');}
function requestBlockStart(){
  if(blocking)return;
  if(!grounded||attackPhase!==0||dodgeState!=='READY'){prove('BLOCK INPUT REJECTED','BUSY');return;}
  blocking=true;uiText('blockState','GUARD');setBlockCheck(2);prove('BLOCK INPUT ACCEPTED','GUARD');
  if(armedBlockProbe!=='NONE'){const k=armedBlockProbe;armedBlockProbe='NONE';applyBlockProbe(k);}
}
function requestBlockEnd(){if(!blocking)return;blocking=false;uiText('blockState','READY');setBlockCheck(5);prove('BLOCK RELEASE CONFIRMED','READY');}
function resetBlockHP(){playerHP=100;uiText('playerHp','100/100');uiText('hitResult','—');uiText('blockDamage','—');uiText('blockFrontDot','—');armedBlockProbe='NONE';}
function bindBlockControls(){
  const blockBtn=document.getElementById('block');
  if(blockBtn){blockBtn.addEventListener('pointerdown',e=>{e.preventDefault();requestBlockStart();blockBtn.style.transform='scale(.93)';});for(const ev of ['pointerup','pointercancel','pointerleave'])blockBtn.addEventListener(ev,()=>{requestBlockEnd();blockBtn.style.transform='scale(1)';});}
  document.addEventListener('keydown',e=>{if(e.code==='KeyB'&&!e.repeat){e.preventDefault();requestBlockStart();}});
  document.addEventListener('keyup',e=>{if(e.code==='KeyB'){e.preventDefault();requestBlockEnd();}});
  const binds=[['directBlockHit',()=>applyBlockProbe('DIRECT')],['armFrontBlock',()=>armBlockProbe('FRONT')],['armRearBlock',()=>armBlockProbe('REAR')],['resetBlockHp',resetBlockHP]];
  for(const [id,fn] of binds){const e=document.getElementById(id);if(e)e.addEventListener('pointerdown',ev=>{ev.preventDefault();fn();});}
}
queueMicrotask(bindBlockControls);
`;

const blockPatch=`
// ---- Test 05I: isolated block / guard proof ----
replaceReq(
  "if(!(label.startsWith('IFRAME')||label.startsWith('DAMAGE')))return;",
  "if(!label.startsWith('BLOCK'))return;",
  '05I proof label filter'
);
const blockCode05I=${JSON.stringify(blockCode)};
replaceReq('queueMicrotask(bindIframeControls);','queueMicrotask(bindIframeControls);\\n'+blockCode05I,'05I block state and controls');
replaceReq("function requestAttack(){if(!grounded||dodgeState!=='READY')return;","function requestAttack(){if(!grounded||dodgeState!=='READY'||blocking)return;",'05I block attack exclusion');
replaceReq("if(!grounded||attackPhase!==0){prove('DODGE INPUT REJECTED','BUSY');return;}","if(!grounded||attackPhase!==0||blocking){prove('DODGE INPUT REJECTED','BUSY');return;}",'05I block dodge exclusion');
`;

const marker='await writeFile(runtimePath,text);';
if(!src.includes(marker))throw new Error('05I wrapper insertion anchor missing');
src=src.replace(marker,blockPatch+'\n'+marker);
await writeFile(runtimeBuilder,src);
await import(pathToFileURL(runtimeBuilder).href+'?v='+Date.now());

// Final 05I presentation: block only. Accepted i-frame machinery stays active but is not retested.
const out=path.resolve(root,'../threejs-test-05i');
const indexPath=path.join(out,'index.html');
let html=await readFile(indexPath,'utf8');
html=html.replaceAll('Test 05I — Dodge I-Frame Window','Test 05I — Block / Guard');
html=html.replaceAll('RAAI Proof 05I — Dodge I-Frame Window','RAAI Proof 05I — Block / Guard');
html=html.replace('I-FRAME TEST — use CHECK controls, then DODGE when armed','BLOCK TEST — B / hold BLOCK · arm FRONT or REAR probes in CHECK');
html=html.replace('<span>Hit test</span><b id="hitResult">—</b>','<span>Hit test</span><b id="hitResult">—</b><span>Guard</span><b id="blockState">READY</b><span>Block dmg</span><b id="blockDamage">—</b><span>Front dot</span><b id="blockFrontDot">—</b>');
html=html.replace('<button id="dodge" class="action">DODGE</button><button id="sprint" class="action">RUN</button>','<button id="dodge" class="action">DODGE</button><button id="block" class="action">BLOCK</button><button id="sprint" class="action">RUN</button>');
html=html.replace(/<div id="checklist">[\s\S]*?<div class="acceptedContract">[\s\S]*?<\/div>/,
`<div id="checklist"><div><b id="blockCheck1">PENDING</b><span>01 Unblocked direct hit deals exactly 20</span></div><div><b id="blockCheck2">PENDING</b><span>02 Hold BLOCK enters GUARD immediately</span></div><div><b id="blockCheck3">PENDING</b><span>03 Front hit while guarding is reduced 20 → 5</span></div><div><b id="blockCheck4">PENDING</b><span>04 Rear hit bypasses guard and deals 20</span></div><div><b id="blockCheck5">PENDING</b><span>05 Releasing BLOCK returns to READY</span></div></div><div class="contract"><b>BLOCK CONTRACT</b><span>Hold-to-guard · 120° frontal guard cone (dot ≥ 0.50) · 75% mitigation · 20 → 5 damage · rear bypasses · no parry/stamina yet</span></div><div id="blockControls"><button id="directBlockHit">DIRECT HIT</button><button id="armFrontBlock">ARM FRONT</button><button id="armRearBlock">ARM REAR</button><button id="resetBlockHp">RESET HP</button></div><div class="acceptedContract"><b>ACCEPTED / NOT RETESTED</b><span>Movement, lock-on, single attack, two-hit chain, dodge movement, and dodge i-frames remain active. Jump animation replacement stays deferred.</span></div>`);
html=html.replace('</style>','#blockControls{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin:9px 0 2px}#blockControls button{border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.08);color:#eef7f2;border-radius:8px;padding:7px 5px;font-size:8px;font-weight:800;letter-spacing:.03em}#block{right:max(101px,calc(env(safe-area-inset-right) + 88px));bottom:max(184px,calc(env(safe-area-inset-bottom) + 172px));width:64px;height:64px;font-size:9px}</style>');
await writeFile(indexPath,html);

const infoPath=path.join(out,'build-info.json');
const info=JSON.parse(await readFile(infoPath,'utf8'));
info.inherits='Accepted Test 05H combat baseline: movement + lock-on + single attack + two-hit chain + dodge + i-frames';
info.focus='isolated hold block / directional guard proof';
info.proof_labels=['BLOCK BASELINE DAMAGE CONFIRMED','BLOCK INPUT ACCEPTED','BLOCK FRONT MITIGATION CONFIRMED','BLOCK REAR BYPASS CONFIRMED','BLOCK RELEASE CONFIRMED'];
info.acceptance_checklist={direct_hit_20:'PENDING',guard_input:'PENDING',front_mitigation_5:'PENDING',rear_bypass_20:'PENDING',guard_release:'PENDING'};
info.accepted_systems_active_not_retested={movement:true,lock_on:true,single_attack:true,two_hit_chain:true,dodge:true,dodge_iframes:true};
info.block={input:'hold',base_damage:20,blocked_damage:5,mitigation_percent:75,front_dot_min:.50,guard_cone_degrees:120,rear_bypass:true,parry:false,stamina:false,attack_while_guarding:false,dodge_while_guarding:false};
info.iframe.status='ACCEPTED';
info.disabled_systems={parry:true,block_stamina:true,enemy_telegraph:true,enemy_ai:true,extra_vfx:true};
info.human_acceptance={accepted:false,status:'PENDING HUMAN ACCEPTANCE'};
await writeFile(infoPath,JSON.stringify(info,null,2));
console.log('Built Test 05I block / guard mechanical proof.');
