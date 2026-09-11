import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root=process.cwd();
const basePath=path.resolve(root,'../threejs-test-05n-src/build.mjs');
const runtimeBuilder=path.resolve(root,'.build-05o-wrapper.mjs');
let src=await readFile(basePath,'utf8');

// Promote the accepted 05N telegraph architecture into one isolated ACTIVE-window damage proof.
src=src.replaceAll('05N','05O').replaceAll('05n','05o');
await writeFile(runtimeBuilder,src);
await import(pathToFileURL(runtimeBuilder).href+'?v='+Date.now());

const out=path.resolve(root,'../threejs-test-05o');
const indexPath=path.join(out,'index.html');
const appPath=path.join(out,'app.js');
const infoPath=path.join(out,'build-info.json');

let app=await readFile(appPath,'utf8');
const damageRuntime=`

// Test 05O — isolated enemy ACTIVE-window damage proof.
const ENEMY_DAMAGE_05O=20;
let enemyDamageHp05O=100,enemyDamageEvents05O=0,enemyDamageConsumed05O=false;
let enemyDamageRun05O=0,enemyDamageFirstCycle05O=false,enemyDamageDuplicateZero05O=false,enemyDamageRecoveryZero05O=false;
function o05El(id){return document.getElementById(id);}
function o05Text(id,value){const e=o05El(id);if(e)e.textContent=value;}
function o05Check(n,value='PASS',color='#a8f0b5'){const e=o05El('enemyDamageCheck'+n);if(e){e.textContent=value;e.style.color=color;}}
function o05Proof(title,detail){const e=o05El('proofSuccess');if(!e)return;e.textContent='✓ '+title+(detail?' · '+detail:'');e.classList.add('show');clearTimeout(o05Proof.t);o05Proof.t=setTimeout(()=>e.classList.remove('show'),1350);}
function o05NoExtraProgress(){
  const count=(enemyDamageDuplicateZero05O?1:0)+(enemyDamageRecoveryZero05O?1:0);
  if(count<2)o05Check(4,count+'/2','#ffd27a');
  else{o05Check(4);o05Proof('ENEMY DAMAGE EXTRA BLOCKED','DUPLICATE + RECOVERY = 0');}
}
function o05AttemptDamage(kind){
  const phase=enemyAttackPhase05N;
  const before=enemyDamageHp05O;
  let dealt=0;
  if(phase==='ACTIVE'&&!enemyDamageConsumed05O){
    enemyDamageConsumed05O=true;
    enemyDamageHp05O=Math.max(0,enemyDamageHp05O-ENEMY_DAMAGE_05O);
    dealt=before-enemyDamageHp05O;
    enemyDamageEvents05O++;
  }
  o05Text('enemyDamagePhase',phase);o05Text('enemyDamageAmount',dealt+'');o05Text('enemyDamageHp',enemyDamageHp05O+'/100');o05Text('enemyDamageEvents',enemyDamageEvents05O+'');
  if(kind==='TELEGRAPH'&&phase==='TELEGRAPH'&&dealt===0&&before===enemyDamageHp05O){o05Check(1);o05Proof('ENEMY DAMAGE TELEGRAPH ZERO','0 DAMAGE');}
  if(kind==='ACTIVE'&&phase==='ACTIVE'&&dealt===20){o05Check(2);o05Proof('ENEMY DAMAGE ACTIVE CONFIRMED','ACTIVE ONLY');if(before===100&&enemyDamageHp05O===80){o05Check(3);o05Proof('ENEMY DAMAGE EXACT','100 → 80');}}
  if(kind==='DUPLICATE'&&phase==='ACTIVE'&&dealt===0){enemyDamageDuplicateZero05O=true;o05NoExtraProgress();}
  if(kind==='RECOVERY'&&phase==='RECOVERY'&&dealt===0){enemyDamageRecoveryZero05O=true;o05NoExtraProgress();}
  if(kind==='FRESH'&&phase==='ACTIVE'&&dealt===20&&before===80&&enemyDamageHp05O===60){o05Check(5);o05Proof('ENEMY DAMAGE NEW CYCLE','80 → 60');}
  return dealt;
}
function o05WaitPhase(phase,token,cb,timeoutMs=1800){
  const start=performance.now();
  const tick=()=>{
    if(token!==enemyDamageRun05O)return;
    if(enemyAttackPhase05N===phase){cb();return;}
    if(performance.now()-start>timeoutMs){o05Text('enemyDamageResult','TIMEOUT · '+phase);return;}
    setTimeout(tick,5);
  };
  tick();
}
function o05RunDamageCycle(){
  if(enemyAttackPhase05N!=='READY'){o05Text('enemyDamageResult','WAIT FOR READY');return;}
  if(enemyDamageHp05O!==100||enemyDamageEvents05O!==0){o05Text('enemyDamageResult','RESET FIRST');return;}
  const token=++enemyDamageRun05O;enemyDamageConsumed05O=false;enemyDamageFirstCycle05O=false;enemyDamageDuplicateZero05O=false;enemyDamageRecoveryZero05O=false;o05Check(4,'0/2','#ffd27a');o05Text('enemyDamageResult','RUNNING FIRST CYCLE');
  if(!n05StartEnemyAttack('05O_DAMAGE'))return;
  setTimeout(()=>{if(token===enemyDamageRun05O)o05AttemptDamage('TELEGRAPH');},250);
  o05WaitPhase('ACTIVE',token,()=>{
    setTimeout(()=>{if(token!==enemyDamageRun05O)return;o05AttemptDamage('ACTIVE');setTimeout(()=>{if(token===enemyDamageRun05O)o05AttemptDamage('DUPLICATE');},40);},25);
  });
  o05WaitPhase('RECOVERY',token,()=>{setTimeout(()=>{if(token===enemyDamageRun05O)o05AttemptDamage('RECOVERY');},30);});
  o05WaitPhase('READY',token,()=>{enemyDamageFirstCycle05O=enemyDamageHp05O===80&&enemyDamageEvents05O===1;o05Text('enemyDamageResult',enemyDamageFirstCycle05O?'FIRST CYCLE COMPLETE · RUN FRESH':'FIRST CYCLE INCOMPLETE');},1900);
}
function o05RunFreshCycle(){
  if(!enemyDamageFirstCycle05O||enemyDamageHp05O!==80||enemyDamageEvents05O!==1){o05Text('enemyDamageResult','RUN FIRST CYCLE FIRST');return;}
  if(enemyAttackPhase05N!=='READY'){o05Text('enemyDamageResult','WAIT FOR READY');return;}
  const token=++enemyDamageRun05O;enemyDamageConsumed05O=false;o05Text('enemyDamageResult','RUNNING FRESH CYCLE');
  if(!n05StartEnemyAttack('05O_FRESH'))return;
  o05WaitPhase('ACTIVE',token,()=>{setTimeout(()=>{if(token===enemyDamageRun05O){o05AttemptDamage('FRESH');o05Text('enemyDamageResult','FRESH DAMAGE COMPLETE');}},25);});
}
function o05ResetDamage(){
  enemyDamageRun05O++;n05Reset();enemyDamageHp05O=100;enemyDamageEvents05O=0;enemyDamageConsumed05O=false;enemyDamageFirstCycle05O=false;enemyDamageDuplicateZero05O=false;enemyDamageRecoveryZero05O=false;
  o05Text('enemyDamageHp','100/100');o05Text('enemyDamageAmount','—');o05Text('enemyDamageEvents','0');o05Text('enemyDamagePhase','READY');o05Text('enemyDamageResult','READY');
  for(let i=1;i<=5;i++)o05Check(i,i===4?'0/2':'PENDING',i===4?'#ffd27a':'#ffd27a');
}
function o05Bind(){
  const run=o05El('enemyDamageRun');if(run)run.addEventListener('pointerdown',e=>{e.preventDefault();o05RunDamageCycle();});
  const fresh=o05El('enemyDamageFresh');if(fresh)fresh.addEventListener('pointerdown',e=>{e.preventDefault();o05RunFreshCycle();});
  const reset=o05El('enemyDamageReset');if(reset)reset.addEventListener('pointerdown',e=>{e.preventDefault();o05ResetDamage();});
}
// Retire accepted 05N telegraph proof toasts while preserving its state machine and HUD phase signal.
n05Proof=()=>{};
queueMicrotask(o05Bind);
`;
if(app.includes('Test 05O — isolated enemy ACTIVE-window damage proof'))throw new Error('05O runtime already appended');
app+=damageRuntime;
await writeFile(appPath,app);

let html=await readFile(indexPath,'utf8');
html=html.replaceAll('Test 05O — Enemy Telegraph','Test 05O — Enemy Active Damage');
html=html.replaceAll('RAAI Proof 05O — Enemy Telegraph','RAAI Proof 05O — Enemy Active Damage');
html=html.replace('ENEMY TELEGRAPH — START ATTACK or press T · prove one deterministic TELEGRAPH → ACTIVE → RECOVERY → READY cycle','ENEMY DAMAGE — RUN DAMAGE CYCLE proves TELEGRAPH 0 → ACTIVE 20 → duplicate/recovery 0; then RUN FRESH CYCLE');
html=html.replace('<span>Enemy attack cycle</span><b id="enemyAttackCycle">0</b>','<span>Enemy attack cycle</span><b id="enemyAttackCycle">0</b><span>Enemy damage phase</span><b id="enemyDamagePhase">READY</b><span>Enemy damage HP</span><b id="enemyDamageHp">100/100</b><span>Enemy damage</span><b id="enemyDamageAmount">—</b><span>Enemy damage events</span><b id="enemyDamageEvents">0</b><span>Enemy damage result</span><b id="enemyDamageResult">READY</b>');
html=html.replace(/<div id="checklist">[\s\S]*?<div class="acceptedContract">[\s\S]*?<\/div>/,
`<div id="checklist"><div><b id="enemyDamageCheck1">PENDING</b><span>01 TELEGRAPH-phase damage probe deals 0</span></div><div><b id="enemyDamageCheck2">PENDING</b><span>02 Damage event is accepted only while attack phase is ACTIVE</span></div><div><b id="enemyDamageCheck3">PENDING</b><span>03 ACTIVE hit deals exactly 20: HP 100 → 80</span></div><div><b id="enemyDamageCheck4">0/2</b><span>04 Duplicate ACTIVE hit + RECOVERY hit each deal 0 additional damage</span></div><div><b id="enemyDamageCheck5">PENDING</b><span>05 New READY cycle grants one fresh 20-damage event: HP 80 → 60</span></div></div><div class="contract"><b>ENEMY DAMAGE CONTRACT</b><span>Accepted telegraph cycle retained · damage gate = ACTIVE only · exactly 20 damage · maximum one damage event per attack cycle · TELEGRAPH/RECOVERY/duplicate = 0 · fresh READY cycle restores one damage opportunity · no AI/animation/defense interaction proof yet</span></div><div id="enemyDamageControls"><button id="enemyDamageRun">RUN DAMAGE CYCLE</button><button id="enemyDamageFresh">RUN FRESH CYCLE</button><button id="enemyDamageReset">RESET DAMAGE TEST</button></div><div class="acceptedContract"><b>ACCEPTED / NOT RETESTED</b><span>Movement, lock-on, attacks, dodge + i-frames, block/guard, parry, stagger, counter systems, and enemy telegraph timing remain active. Defense interaction with this enemy damage is intentionally deferred. Jump animation replacement stays deferred.</span></div>`);
html=html.replace('</style>','#enemyDamageControls{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin:9px 0 2px}#enemyDamageControls button{border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.08);color:#eef7f2;border-radius:8px;padding:7px 5px;font-size:8px;font-weight:800;letter-spacing:.03em}#enemyDamageControls #enemyDamageReset{grid-column:1/-1}</style>');
await writeFile(indexPath,html);

const info=JSON.parse(await readFile(infoPath,'utf8'));
info.inherits='Accepted Test 05N combat baseline: movement + lock-on + attacks + dodge + i-frames + block/guard + parry + stagger + counter systems + enemy telegraph';
info.focus='isolated enemy attack damage gating during accepted ACTIVE window';
info.proof_labels=['ENEMY DAMAGE TELEGRAPH ZERO','ENEMY DAMAGE ACTIVE CONFIRMED','ENEMY DAMAGE EXACT','ENEMY DAMAGE EXTRA BLOCKED','ENEMY DAMAGE NEW CYCLE'];
info.acceptance_checklist={telegraph_damage_zero:'PENDING',active_only_damage_gate:'PENDING',active_exact_20:'PENDING',duplicate_and_recovery_zero:'PENDING',new_cycle_fresh_damage:'PENDING'};
info.accepted_systems_active_not_retested={movement:true,lock_on:true,single_attack:true,two_hit_chain:true,dodge:true,dodge_iframes:true,block_guard:true,parry_timing:true,enemy_stagger:true,counter_window:true,counter_damage:true,enemy_telegraph:true};
info.enemy_attack.status='ACCEPTED';
info.enemy_attack.damage=20;
info.enemy_attack.damage_phase='ACTIVE only';
info.enemy_attack.max_damage_events_per_cycle=1;
info.enemy_attack.telegraph_damage=0;
info.enemy_attack.recovery_damage=0;
info.enemy_attack.duplicate_active_damage=0;
info.enemy_attack.fresh_ready_cycle_restores_damage_opportunity=true;
info.enemy_attack.damage_interactions_with_defense='DEFERRED';
info.disabled_systems={enemy_ai:true,authored_enemy_attack_animation:true,enemy_damage_defense_interaction:true,counter_animation:true,counter_hitstop:true,counter_vfx:true,block_stamina:true,extra_vfx:true};
info.human_acceptance={accepted:false,status:'PENDING HUMAN ACCEPTANCE'};
info.app_js_bytes=Buffer.byteLength(app);
await writeFile(infoPath,JSON.stringify(info,null,2));
console.log('Built Test 05O enemy ACTIVE-window damage proof.');
