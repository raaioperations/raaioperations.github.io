import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root=process.cwd();
const basePath=path.resolve(root,'../threejs-test-05m-src/build.mjs');
const runtimeBuilder=path.resolve(root,'.build-05n-wrapper.mjs');
let src=await readFile(basePath,'utf8');

// Promote the accepted 05M combat baseline into one isolated enemy-telegraph state-cycle proof.
src=src.replaceAll('05M','05N').replaceAll('05m','05n');
// Retire accepted counter-damage success labels in this test.
src=src.replace("if(!label.startsWith('COUNTER DAMAGE'))return;","if(!label.startsWith('ENEMY TELEGRAPH'))return;");

await writeFile(runtimeBuilder,src);
await import(pathToFileURL(runtimeBuilder).href+'?v='+Date.now());

const out=path.resolve(root,'../threejs-test-05n');
const indexPath=path.join(out,'index.html');
const appPath=path.join(out,'app.js');
const infoPath=path.join(out,'build-info.json');

// Add the isolated deterministic attack-state machine directly to the built module.
let app=await readFile(appPath,'utf8');
const telegraphRuntime=`

// Test 05N — isolated enemy telegraph state-cycle proof.
const ENEMY_TELEGRAPH_S=.70,ENEMY_ACTIVE_S=.12,ENEMY_RECOVERY_S=.40;
let enemyAttackPhase05N='READY',enemyAttackSeq05N=0,enemyPhaseStart05N=performance.now();
let busyRejected05N=false,freshAccepted05N=false;
function n05El(id){return document.getElementById(id);}
function n05Text(id,value){const e=n05El(id);if(e)e.textContent=value;}
function n05Check(n,value='PASS',color='#a8f0b5'){const e=n05El('enemyTelegraphCheck'+n);if(e){e.textContent=value;e.style.color=color;}}
function n05Proof(title,detail){const e=n05El('proofSuccess');if(!e)return;e.textContent='✓ '+title+(detail?' · '+detail:'');e.classList.add('show');clearTimeout(n05Proof.t);n05Proof.t=setTimeout(()=>e.classList.remove('show'),1300);}
function n05SetPhase(phase){enemyAttackPhase05N=phase;enemyPhaseStart05N=performance.now();n05Text('enemyAttackPhase',phase);const s=n05El('enemyAttackSignal');if(s){s.textContent=phase;s.dataset.phase=phase;}}
function n05PhaseElapsed(){return Math.max(0,(performance.now()-enemyPhaseStart05N)/1000);}
function n05UpdateRetrigger(){const e=n05El('enemyTelegraphCheck5');if(!e)return;const count=(busyRejected05N?1:0)+(freshAccepted05N?1:0);if(count<2){e.textContent=count+'/2';e.style.color='#ffd27a';}else{e.textContent='PASS';e.style.color='#a8f0b5';n05Proof('ENEMY TELEGRAPH RETRIGGER CONFIRMED','BUSY REJECTED · READY ACCEPTED');}}
function n05StartEnemyAttack(source='MANUAL'){
  if(enemyAttackPhase05N!=='READY'){
    n05Text('enemyAttackResult','REJECTED · BUSY');
    if(source==='BUSY_PROBE'){busyRejected05N=true;n05UpdateRetrigger();}
    n05Proof('ENEMY TELEGRAPH BUSY REJECTED',enemyAttackPhase05N);
    return false;
  }
  const seq=++enemyAttackSeq05N;
  n05SetPhase('TELEGRAPH');n05Text('enemyAttackResult','STARTED');n05Text('enemyAttackCycle',seq+'');
  n05Check(1);n05Proof('ENEMY TELEGRAPH ENTERED','TELEGRAPH');
  if(source==='FRESH_PROBE'){freshAccepted05N=true;n05UpdateRetrigger();}
  setTimeout(()=>{
    if(seq!==enemyAttackSeq05N||enemyAttackPhase05N!=='TELEGRAPH')return;
    const held=n05PhaseElapsed();n05Text('enemyAttackMeasured',held.toFixed(3)+' s telegraph');n05Check(2);n05SetPhase('ACTIVE');n05Proof('ENEMY TELEGRAPH ACTIVE','after '+held.toFixed(3)+' s');
    setTimeout(()=>{
      if(seq!==enemyAttackSeq05N||enemyAttackPhase05N!=='ACTIVE')return;
      const heldActive=n05PhaseElapsed();n05Text('enemyAttackMeasured',heldActive.toFixed(3)+' s active');n05Check(3);n05SetPhase('RECOVERY');n05Proof('ENEMY TELEGRAPH RECOVERY','after '+heldActive.toFixed(3)+' s active');
      setTimeout(()=>{
        if(seq!==enemyAttackSeq05N||enemyAttackPhase05N!=='RECOVERY')return;
        const heldRecovery=n05PhaseElapsed();n05Text('enemyAttackMeasured',heldRecovery.toFixed(3)+' s recovery');n05Check(4);n05SetPhase('READY');n05Text('enemyAttackResult','READY');n05Proof('ENEMY TELEGRAPH CYCLE COMPLETE','READY');
      },ENEMY_RECOVERY_S*1000);
    },ENEMY_ACTIVE_S*1000);
  },ENEMY_TELEGRAPH_S*1000);
  return true;
}
function n05RetriggerProbe(){
  if(enemyAttackPhase05N!=='READY'){n05Text('enemyAttackResult','WAIT FOR READY');return;}
  busyRejected05N=false;freshAccepted05N=false;n05Check(5,'0/2','#ffd27a');
  n05StartEnemyAttack('PROBE');
  setTimeout(()=>n05StartEnemyAttack('BUSY_PROBE'),200);
  setTimeout(()=>n05StartEnemyAttack('FRESH_PROBE'),(ENEMY_TELEGRAPH_S+ENEMY_ACTIVE_S+ENEMY_RECOVERY_S+.08)*1000);
}
function n05Reset(){enemyAttackSeq05N++;busyRejected05N=false;freshAccepted05N=false;n05SetPhase('READY');n05Text('enemyAttackResult','READY');n05Text('enemyAttackMeasured','—');n05Check(5,'0/2','#ffd27a');}
function n05Bind(){
  const start=n05El('enemyAttackStart');if(start)start.addEventListener('pointerdown',e=>{e.preventDefault();n05StartEnemyAttack();});
  const probe=n05El('enemyAttackRetrigger');if(probe)probe.addEventListener('pointerdown',e=>{e.preventDefault();n05RetriggerProbe();});
  const reset=n05El('enemyAttackReset');if(reset)reset.addEventListener('pointerdown',e=>{e.preventDefault();n05Reset();});
  document.addEventListener('keydown',e=>{if(e.code==='KeyT'){e.preventDefault();n05StartEnemyAttack();}});
}
queueMicrotask(n05Bind);
`;
if(app.includes('Test 05N — isolated enemy telegraph state-cycle proof'))throw new Error('05N runtime already appended');
app+=telegraphRuntime;
await writeFile(appPath,app);

// Present only the new mechanic checklist. Previously accepted systems stay active but are not re-proven.
let html=await readFile(indexPath,'utf8');
html=html.replaceAll('Test 05N — Counter Damage','Test 05N — Enemy Telegraph');
html=html.replaceAll('RAAI Proof 05N — Counter Damage','RAAI Proof 05N — Enemy Telegraph');
html=html.replace('COUNTER DAMAGE — ARM COUNTER / EARLY / LATE, then hold BLOCK; use ARM COUNTER twice to prove a fresh opportunity','ENEMY TELEGRAPH — START ATTACK or press T · prove one deterministic TELEGRAPH → ACTIVE → RECOVERY → READY cycle');
html=html.replace('<span>Damage events</span><b id="counterDamageEvents">0</b>','<span>Damage events</span><b id="counterDamageEvents">0</b><span>Enemy attack</span><b id="enemyAttackPhase">READY</b><span>Enemy attack result</span><b id="enemyAttackResult">READY</b><span>Enemy attack timing</span><b id="enemyAttackMeasured">—</b><span>Enemy attack cycle</span><b id="enemyAttackCycle">0</b>');
html=html.replace('<div id="proofSuccess">ENEMY TELEGRAPH — START ATTACK or press T · prove one deterministic TELEGRAPH → ACTIVE → RECOVERY → READY cycle</div>','<div id="proofSuccess">ENEMY TELEGRAPH — START ATTACK or press T · prove one deterministic TELEGRAPH → ACTIVE → RECOVERY → READY cycle</div><div id="enemyAttackSignal" data-phase="READY">READY</div>');
html=html.replace(/<div id="checklist">[\s\S]*?<div class="acceptedContract">[\s\S]*?<\/div>/,
`<div id="checklist"><div><b id="enemyTelegraphCheck1">PENDING</b><span>01 START ATTACK enters TELEGRAPH immediately</span></div><div><b id="enemyTelegraphCheck2">PENDING</b><span>02 TELEGRAPH holds 0.70 s then enters ACTIVE</span></div><div><b id="enemyTelegraphCheck3">PENDING</b><span>03 ACTIVE holds 0.12 s then enters RECOVERY</span></div><div><b id="enemyTelegraphCheck4">PENDING</b><span>04 RECOVERY holds 0.40 s then returns READY</span></div><div><b id="enemyTelegraphCheck5">0/2</b><span>05 Busy retrigger is rejected + fresh trigger after READY is accepted</span></div></div><div class="contract"><b>ENEMY TELEGRAPH CONTRACT</b><span>READY → TELEGRAPH 0.70 s → ACTIVE 0.12 s → RECOVERY 0.40 s → READY · only READY may start a new cycle · no attack damage/AI/authored telegraph animation yet</span></div><div id="telegraphControls"><button id="enemyAttackStart">START ATTACK</button><button id="enemyAttackRetrigger">TEST BUSY + FRESH</button><button id="enemyAttackReset">RESET STATE</button></div><div class="acceptedContract"><b>ACCEPTED / NOT RETESTED</b><span>Movement, lock-on, attacks, dodge + i-frames, block/guard, parry timing, enemy stagger, counter window, and counter damage remain active. Jump animation replacement stays deferred.</span></div>`);
html=html.replace('</style>','#telegraphControls{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin:9px 0 2px}#telegraphControls button{border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.08);color:#eef7f2;border-radius:8px;padding:7px 5px;font-size:8px;font-weight:800;letter-spacing:.03em}#telegraphControls #enemyAttackReset{grid-column:1/-1}#enemyAttackSignal{position:absolute;left:50%;top:105px;transform:translateX(-50%);padding:6px 11px;border:1px solid rgba(255,255,255,.2);border-radius:999px;background:rgba(8,13,16,.74);font-size:9px;font-weight:900;letter-spacing:.08em}#enemyAttackSignal[data-phase="TELEGRAPH"]{background:rgba(120,78,10,.88)}#enemyAttackSignal[data-phase="ACTIVE"]{background:rgba(145,30,28,.92)}#enemyAttackSignal[data-phase="RECOVERY"]{background:rgba(35,61,83,.88)}@media(pointer:coarse),(max-width:900px){#enemyAttackSignal{top:96px}}</style>');
await writeFile(indexPath,html);

const info=JSON.parse(await readFile(infoPath,'utf8'));
info.inherits='Accepted Test 05M combat baseline: movement + lock-on + attacks + dodge + i-frames + block/guard + parry + stagger + counter window + counter damage';
info.focus='isolated deterministic enemy attack telegraph state-cycle proof';
info.proof_labels=['ENEMY TELEGRAPH ENTERED','ENEMY TELEGRAPH ACTIVE','ENEMY TELEGRAPH RECOVERY','ENEMY TELEGRAPH CYCLE COMPLETE','ENEMY TELEGRAPH BUSY REJECTED','ENEMY TELEGRAPH RETRIGGER CONFIRMED'];
info.acceptance_checklist={telegraph_enters_immediately:'PENDING',telegraph_to_active_070:'PENDING',active_to_recovery_012:'PENDING',recovery_to_ready_040:'PENDING',busy_rejected_fresh_accepted:'PENDING'};
info.accepted_systems_active_not_retested={movement:true,lock_on:true,single_attack:true,two_hit_chain:true,dodge:true,dodge_iframes:true,block_guard:true,parry_timing:true,enemy_stagger:true,counter_window:true,counter_damage:true};
info.counter.status='ACCEPTED';
info.counter.damage_status='ACCEPTED';
info.enemy_attack={trigger:'manual deterministic proof trigger',ready_required:true,telegraph_s:.70,active_s:.12,recovery_s:.40,total_cycle_s:1.22,busy_retrigger:'rejected',fresh_after_ready:'accepted',damage:false,ai:false,authored_animation:false,visual_signal:'HUD phase signal only'};
info.disabled_systems={enemy_attack_damage:true,enemy_ai:true,authored_enemy_telegraph_animation:true,counter_animation:true,counter_hitstop:true,counter_vfx:true,block_stamina:true,extra_vfx:true};
info.human_acceptance={accepted:false,status:'PENDING HUMAN ACCEPTANCE'};
info.app_js_bytes=Buffer.byteLength(app);
await writeFile(infoPath,JSON.stringify(info,null,2));
console.log('Built Test 05N enemy telegraph state-cycle proof.');
