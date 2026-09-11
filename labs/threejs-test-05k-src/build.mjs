import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root=process.cwd();
const basePath=path.resolve(root,'../threejs-test-05j-src/build.mjs');
const runtimeBuilder=path.resolve(root,'.build-05k-wrapper.mjs');
let src=await readFile(basePath,'utf8');

// Promote accepted 05J parry timing into a new isolated enemy-stagger proof.
src=src.replaceAll('05J','05K').replaceAll('05j','05k');

function replaceReq(find,repl,label){
  const i=src.indexOf(find);
  if(i<0) throw new Error(`05K patch anchor missing: ${label}`);
  if(src.indexOf(find,i+find.length)>=0) throw new Error(`05K patch anchor not unique: ${label}`);
  src=src.slice(0,i)+repl+src.slice(i+find.length);
}

// Only new stagger proof labels are visible. Accepted parry timing labels are suppressed.
replaceReq(
  `src=src.replace("if(!label.startsWith('BLOCK'))return;","if(!label.startsWith('PARRY'))return;");`,
  `src=src.replace("if(!label.startsWith('BLOCK'))return;","if(!label.startsWith('STAGGER'))return;");`,
  'proof label filter'
);

const staggerCode=`
const ENEMY_STAGGER_DURATION=.65,ENEMY_STAGGER_MID=.30;
let enemyStaggerState='READY',enemyStaggerUntil=0,lateNoStagger=false,rearNoStagger=false;
function setStaggerCheck(n){const e=document.getElementById('staggerCheck'+n);if(e){e.textContent='PASS';e.style.color='#a8f0b5';}}
function enemyStaggered(){return enemyStaggerState==='STAGGERED'&&performance.now()<enemyStaggerUntil;}
function beginEnemyStagger(){
  enemyStaggerState='STAGGERED';enemyStaggerUntil=performance.now()+ENEMY_STAGGER_DURATION*1000;
  uiText('enemyState','STAGGERED');uiText('enemyAction','LOCKED');setStaggerCheck(1);prove('STAGGER ENTERED','0.65 s');
  setTimeout(()=>{if(enemyStaggered()){setStaggerCheck(2);prove('STAGGER HELD','0.30 s MIDPOINT');}},ENEMY_STAGGER_MID*1000);
  setTimeout(()=>{enemyStaggerState='READY';uiText('enemyState','READY');uiText('enemyAction','AVAILABLE');setStaggerCheck(4);prove('STAGGER RECOVERED','READY');},ENEMY_STAGGER_DURATION*1000+8);
}
function attemptEnemyAction(){
  if(enemyStaggered()){uiText('enemyAction','BLOCKED');setStaggerCheck(3);prove('STAGGER ACTION BLOCKED','ENEMY ACTION REJECTED');return;}
  uiText('enemyAction','EXECUTED');setStaggerCheck(5);prove('STAGGER ACTION RESTORED','ENEMY ACTION EXECUTED');
}
function confirmNoStagger(kind){
  if(enemyStaggered())return;
  if(kind==='LATE')lateNoStagger=true;
  if(kind==='REAR')rearNoStagger=true;
  if(lateNoStagger&&rearNoStagger){setStaggerCheck(6);prove('STAGGER NON-PARRY BYPASS CONFIRMED','LATE + REAR REMAIN READY');}
}
function bindStaggerControls(){const e=document.getElementById('enemyActionBtn');if(e)e.addEventListener('pointerdown',ev=>{ev.preventDefault();attemptEnemyAction();});}
queueMicrotask(bindStaggerControls);
`;

replaceReq(
  "let parryActive=false,parryStartMs=0,armedParryProbe='NONE';",
  "let parryActive=false,parryStartMs=0,armedParryProbe='NONE';\n"+staggerCode,
  'stagger state insertion'
);
replaceReq(
  "if(kind==='FRONT'&&inWindow&&front&&damage===0){setParryCheck(2);prove('PARRY FRONT WINDOW CONFIRMED','0 DAMAGE · '+elapsed.toFixed(3)+' s');}",
  "if(kind==='FRONT'&&inWindow&&front&&damage===0){setParryCheck(2);prove('PARRY FRONT WINDOW CONFIRMED','0 DAMAGE · '+elapsed.toFixed(3)+' s');beginEnemyStagger();}",
  'successful parry triggers stagger'
);
replaceReq(
  "if(kind==='LATE'&&!inWindow&&front&&blocking&&damage===5){setParryCheck(3);prove('PARRY WINDOW CLOSE CONFIRMED','GUARD 5 DAMAGE · '+elapsed.toFixed(3)+' s');}",
  "if(kind==='LATE'&&!inWindow&&front&&blocking&&damage===5){setParryCheck(3);prove('PARRY WINDOW CLOSE CONFIRMED','GUARD 5 DAMAGE · '+elapsed.toFixed(3)+' s');confirmNoStagger('LATE');}",
  'late does not stagger'
);
replaceReq(
  "if(kind==='REAR'&&inWindow&&!front&&damage===20){setParryCheck(4);prove('PARRY REAR BYPASS CONFIRMED','20 DAMAGE · '+elapsed.toFixed(3)+' s');}",
  "if(kind==='REAR'&&inWindow&&!front&&damage===20){setParryCheck(4);prove('PARRY REAR BYPASS CONFIRMED','20 DAMAGE · '+elapsed.toFixed(3)+' s');confirmNoStagger('REAR');}",
  'rear does not stagger'
);

await writeFile(runtimeBuilder,src);
await import(pathToFileURL(runtimeBuilder).href+'?v='+Date.now());

// Final 05K presentation: stagger consequence only. Accepted parry timing remains active but is not re-proven.
const out=path.resolve(root,'../threejs-test-05k');
const indexPath=path.join(out,'index.html');
let html=await readFile(indexPath,'utf8');
html=html.replaceAll('Test 05K — Parry Timing','Test 05K — Parry Enemy Stagger');
html=html.replaceAll('RAAI Proof 05K — Parry Timing','RAAI Proof 05K — Parry Enemy Stagger');
html=html.replace('PARRY TEST — arm a probe in CHECK, then press + hold BLOCK','STAGGER TEST — ARM PARRY + BLOCK, then test enemy action during/after stagger');
html=html.replace('<span>Parry dmg</span><b id="parryDamage">—</b>','<span>Parry dmg</span><b id="parryDamage">—</b><span>Enemy state</span><b id="enemyState">READY</b><span>Enemy action</span><b id="enemyAction">AVAILABLE</b>');
html=html.replace(/<div id="checklist">[\s\S]*?<div class="acceptedContract">[\s\S]*?<\/div>/,
`<div id="checklist"><div><b id="staggerCheck1">PENDING</b><span>01 Successful front parry enters STAGGERED</span></div><div><b id="staggerCheck2">PENDING</b><span>02 STAGGERED state is still active at 0.30 s</span></div><div><b id="staggerCheck3">PENDING</b><span>03 Enemy action during stagger is mechanically blocked</span></div><div><b id="staggerCheck4">PENDING</b><span>04 Stagger ends at 0.65 s and returns READY</span></div><div><b id="staggerCheck5">PENDING</b><span>05 Enemy action works again after recovery</span></div><div><b id="staggerCheck6">PENDING</b><span>06 Late guard + rear bypass do not trigger stagger</span></div></div><div class="contract"><b>STAGGER CONTRACT</b><span>Accepted front parry → STAGGERED for 0.65 s · enemy action rejected while staggered · action restored on recovery · late guard/rear bypass never stagger · no counter window yet</span></div><div id="staggerControls"><button id="armParryFront">ARM PARRY</button><button id="armParryLate">ARM LATE</button><button id="armParryRear">ARM REAR</button><button id="enemyActionBtn">ENEMY ACTION</button><button id="resetParryHp">RESET HP</button></div><div class="acceptedContract"><b>ACCEPTED / NOT RETESTED</b><span>Movement, lock-on, single attack, two-hit chain, dodge + i-frames, block/guard, and parry timing remain active. Jump animation replacement stays deferred.</span></div>`);
html=html.replace('</style>','#staggerControls{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin:9px 0 2px}#staggerControls button{border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.08);color:#eef7f2;border-radius:8px;padding:7px 5px;font-size:8px;font-weight:800;letter-spacing:.03em}#staggerControls #resetParryHp{grid-column:1/-1}</style>');
await writeFile(indexPath,html);

const infoPath=path.join(out,'build-info.json');
const info=JSON.parse(await readFile(infoPath,'utf8'));
info.inherits='Accepted Test 05J combat baseline: movement + lock-on + single attack + two-hit chain + dodge + i-frames + block/guard + parry timing';
info.focus='isolated successful-parry enemy stagger state proof';
info.proof_labels=['STAGGER ENTERED','STAGGER HELD','STAGGER ACTION BLOCKED','STAGGER RECOVERED','STAGGER ACTION RESTORED','STAGGER NON-PARRY BYPASS CONFIRMED'];
info.acceptance_checklist={parry_enters_stagger:'PENDING',stagger_midpoint_held:'PENDING',enemy_action_blocked:'PENDING',stagger_recovers_ready:'PENDING',enemy_action_restored:'PENDING',non_parry_no_stagger:'PENDING'};
info.accepted_systems_active_not_retested={movement:true,lock_on:true,single_attack:true,two_hit_chain:true,dodge:true,dodge_iframes:true,block_guard:true,parry_timing:true};
info.parry.timing_status='ACCEPTED';
info.parry.enemy_stagger=true;
info.parry.counter_window=false;
info.stagger={trigger:'successful frontal parry only',duration_s:.65,midpoint_probe_s:.30,enemy_action_during_stagger:'rejected',enemy_action_after_recovery:'allowed',late_guard_triggers:false,rear_bypass_triggers:false,animation:false,counter_window:false};
info.disabled_systems={parry_counterattack:true,block_stamina:true,enemy_telegraph:true,enemy_ai:true,extra_vfx:true};
info.human_acceptance={accepted:false,status:'PENDING HUMAN ACCEPTANCE'};
await writeFile(infoPath,JSON.stringify(info,null,2));
console.log('Built Test 05K parry enemy stagger proof.');
