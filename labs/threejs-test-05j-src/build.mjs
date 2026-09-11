import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root=process.cwd();
const basePath=path.resolve(root,'../threejs-test-05i-src/build.mjs');
const runtimeBuilder=path.resolve(root,'.build-05j-wrapper.mjs');
let src=await readFile(basePath,'utf8');

// Promote the accepted 05I block architecture into an isolated 05J parry proof.
src=src.replaceAll('05I','05J').replaceAll('05i','05j');

// Only new parry proof labels are visible in this test.
src=src.replace("if(!label.startsWith('BLOCK'))return;","if(!label.startsWith('PARRY'))return;");

const parryCode=`
const PARRY_WINDOW=.12,PARRY_FRONT_PROBE=.06,PARRY_LATE_PROBE=.18;
let parryActive=false,parryStartMs=0,armedParryProbe='NONE';
function setParryCheck(n){const e=document.getElementById('parryCheck'+n);if(e){e.textContent='PASS';e.style.color='#a8f0b5';}}
function parryElapsed(){return parryStartMs?Math.max(0,(performance.now()-parryStartMs)/1000):0;}
function applyParryProbe(kind){
  const f=blockForward(),srcDir=kind==='REAR'?f.clone().multiplyScalar(-1):f.clone(),frontDot=f.dot(srcDir),elapsed=parryElapsed();
  const front=frontDot>=BLOCK_FRONT_DOT,inWindow=blocking&&elapsed<=PARRY_WINDOW;
  let damage=BLOCK_BASE_DAMAGE,result='HIT';
  if(inWindow&&front){damage=0;result='PARRIED';}
  else if(blocking&&front){damage=BLOCK_DAMAGE;result='GUARDED';}
  playerHP=Math.max(0,playerHP-damage);
  uiText('playerHp',playerHP+'/100');uiText('hitResult',kind+' · '+result+' · '+damage+' DAMAGE');uiText('parryDamage',damage+'');uiText('parryTime',elapsed.toFixed(3)+' s');uiText('blockFrontDot',frontDot.toFixed(2));
  if(kind==='FRONT'&&inWindow&&front&&damage===0){setParryCheck(2);prove('PARRY FRONT WINDOW CONFIRMED','0 DAMAGE · '+elapsed.toFixed(3)+' s');}
  if(kind==='LATE'&&!inWindow&&front&&blocking&&damage===5){setParryCheck(3);prove('PARRY WINDOW CLOSE CONFIRMED','GUARD 5 DAMAGE · '+elapsed.toFixed(3)+' s');}
  if(kind==='REAR'&&inWindow&&!front&&damage===20){setParryCheck(4);prove('PARRY REAR BYPASS CONFIRMED','20 DAMAGE · '+elapsed.toFixed(3)+' s');}
}
function armParryProbe(kind){if(blocking){uiText('hitResult','RELEASE BLOCK FIRST');return;}armedParryProbe=kind;uiText('hitResult','ARMED · '+kind+' · PRESS + HOLD BLOCK');}
function beginParryWindow(){
  parryStartMs=performance.now();parryActive=true;uiText('parryState','ACTIVE');uiText('parryTime','0.000 s');setParryCheck(1);prove('PARRY WINDOW OPEN','0.000–0.120 s');
  const probe=armedParryProbe;armedParryProbe='NONE';
  if(probe!=='NONE')setTimeout(()=>{if(blocking)applyParryProbe(probe);},(probe==='LATE'?PARRY_LATE_PROBE:PARRY_FRONT_PROBE)*1000);
  setTimeout(()=>{if(blocking){parryActive=false;uiText('parryState','GUARD');uiText('parryTime',parryElapsed().toFixed(3)+' s');}},PARRY_WINDOW*1000+4);
}
function resetParryHP(){playerHP=100;uiText('playerHp','100/100');uiText('hitResult','—');uiText('parryDamage','—');uiText('parryTime','—');armedParryProbe='NONE';}
const _requestBlockStart05J=requestBlockStart;
requestBlockStart=function(){const was=blocking;_requestBlockStart05J();if(!was&&blocking)beginParryWindow();};
const _requestBlockEnd05J=requestBlockEnd;
requestBlockEnd=function(){const was=blocking;_requestBlockEnd05J();if(was){parryActive=false;uiText('parryState','READY');setParryCheck(5);prove('PARRY RELEASE CONFIRMED','READY');}};
function bindParryControls(){const binds=[['armParryFront',()=>armParryProbe('FRONT')],['armParryLate',()=>armParryProbe('LATE')],['armParryRear',()=>armParryProbe('REAR')],['resetParryHp',resetParryHP]];for(const [id,fn] of binds){const e=document.getElementById(id);if(e)e.addEventListener('pointerdown',ev=>{ev.preventDefault();fn();});}}
queueMicrotask(bindParryControls);
`;

// Insert after the accepted block controls are defined. The queued bindings resolve the wrapped functions at event time.
const injectAnchor='queueMicrotask(bindBlockControls);';
if(!src.includes(injectAnchor))throw new Error('05J parry insertion anchor missing');
src=src.replace(injectAnchor,injectAnchor+'\n'+parryCode);

await writeFile(runtimeBuilder,src);
await import(pathToFileURL(runtimeBuilder).href+'?v='+Date.now());

// Final 05J presentation: parry only. Accepted block remains active but is not re-proven.
const out=path.resolve(root,'../threejs-test-05j');
const indexPath=path.join(out,'index.html');
let html=await readFile(indexPath,'utf8');
html=html.replaceAll('Test 05J — Block / Guard','Test 05J — Parry Timing');
html=html.replaceAll('RAAI Proof 05J — Block / Guard','RAAI Proof 05J — Parry Timing');
html=html.replace('BLOCK TEST — B / hold BLOCK · arm FRONT or REAR probes in CHECK','PARRY TEST — arm a probe in CHECK, then press + hold BLOCK');
html=html.replace('<span>Front dot</span><b id="blockFrontDot">—</b>','<span>Front dot</span><b id="blockFrontDot">—</b><span>Parry</span><b id="parryState">READY</b><span>Parry t</span><b id="parryTime">—</b><span>Parry dmg</span><b id="parryDamage">—</b>');
html=html.replace(/<div id="checklist">[\s\S]*?<div class="acceptedContract">[\s\S]*?<\/div>/,
`<div id="checklist"><div><b id="parryCheck1">PENDING</b><span>01 Pressing BLOCK opens parry window immediately</span></div><div><b id="parryCheck2">PENDING</b><span>02 Front hit inside 0.00–0.12 s parry window deals 0</span></div><div><b id="parryCheck3">PENDING</b><span>03 Front hit after parry window falls through to guard for 5</span></div><div><b id="parryCheck4">PENDING</b><span>04 Rear hit during parry window bypasses and deals 20</span></div><div><b id="parryCheck5">PENDING</b><span>05 Releasing BLOCK returns to READY</span></div></div><div class="contract"><b>PARRY CONTRACT</b><span>Parry is the first 0.12 s of accepted BLOCK · front only · successful parry = 0 damage · late front hit = accepted guard 5 · rear bypass = 20 · no stagger/counter/stamina yet</span></div><div id="parryControls"><button id="armParryFront">ARM PARRY</button><button id="armParryLate">ARM LATE</button><button id="armParryRear">ARM REAR</button><button id="resetParryHp">RESET HP</button></div><div class="acceptedContract"><b>ACCEPTED / NOT RETESTED</b><span>Movement, lock-on, single attack, two-hit chain, dodge + i-frames, and block/guard remain active. Jump animation replacement stays deferred.</span></div>`);
html=html.replace('</style>','#parryControls{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin:9px 0 2px}#parryControls button{border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.08);color:#eef7f2;border-radius:8px;padding:7px 5px;font-size:8px;font-weight:800;letter-spacing:.03em}</style>');
await writeFile(indexPath,html);

const infoPath=path.join(out,'build-info.json');
const info=JSON.parse(await readFile(infoPath,'utf8'));
info.inherits='Accepted Test 05I combat baseline: movement + lock-on + single attack + two-hit chain + dodge + i-frames + block/guard';
info.focus='isolated parry startup timing and directional validity proof';
info.proof_labels=['PARRY WINDOW OPEN','PARRY FRONT WINDOW CONFIRMED','PARRY WINDOW CLOSE CONFIRMED','PARRY REAR BYPASS CONFIRMED','PARRY RELEASE CONFIRMED'];
info.acceptance_checklist={parry_window_opens:'PENDING',front_parry_zero_damage:'PENDING',late_front_falls_to_guard_5:'PENDING',rear_bypass_20:'PENDING',release_ready:'PENDING'};
info.accepted_systems_active_not_retested={movement:true,lock_on:true,single_attack:true,two_hit_chain:true,dodge:true,dodge_iframes:true,block_guard:true};
info.parry={window_start_s:0,window_end_s:.12,front_dot_min:.50,guard_cone_degrees:120,successful_damage:0,late_front_damage:5,rear_damage:20,front_probe_s:.06,late_probe_s:.18,rear_probe_s:.06,enemy_stagger:false,counter_window:false,stamina:false};
info.block.parry=true;
info.disabled_systems={parry_enemy_stagger:true,parry_counterattack:true,block_stamina:true,enemy_telegraph:true,enemy_ai:true,extra_vfx:true};
info.human_acceptance={accepted:false,status:'PENDING HUMAN ACCEPTANCE'};
await writeFile(infoPath,JSON.stringify(info,null,2));
console.log('Built Test 05J parry timing mechanical proof.');
