import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root=process.cwd();
const basePath=path.resolve(root,'../threejs-test-05k-src/build.mjs');
const runtimeBuilder=path.resolve(root,'.build-05l-wrapper.mjs');
let src=await readFile(basePath,'utf8');

// Promote accepted 05K stagger architecture into an isolated counter-opportunity proof.
src=src.replaceAll('05K','05L').replaceAll('05k','05l');

function replaceReq(find,repl,label){
  const i=src.indexOf(find);
  if(i<0) throw new Error(`05L patch anchor missing: ${label}`);
  if(src.indexOf(find,i+find.length)>=0) throw new Error(`05L patch anchor not unique: ${label}`);
  src=src.slice(0,i)+repl+src.slice(i+find.length);
}

// Only new counter-window proof labels are visible. Accepted stagger labels are suppressed.
replaceReq(
  `src=src.replace("if(!label.startsWith('BLOCK'))return;","if(!label.startsWith('STAGGER'))return;");`,
  `src=src.replace("if(!label.startsWith('BLOCK'))return;","if(!label.startsWith('COUNTER'))return;");`,
  'proof label filter'
);

const counterCode=`
const COUNTER_WINDOW_START=.08,COUNTER_WINDOW_END=.50,COUNTER_VALID_PROBE=.20,COUNTER_EARLY_PROBE=.03,COUNTER_LATE_PROBE=.55;
let counterState='IDLE',counterStartMs=0,armedCounterProbe='NONE',counterAcceptCount=0;
function setCounterCheck(n){const e=document.getElementById('counterCheck'+n);if(e){e.textContent='PASS';e.style.color='#a8f0b5';}}
function counterElapsed(){return counterStartMs?Math.max(0,(performance.now()-counterStartMs)/1000):0;}
function setCounterUi(state){counterState=state;uiText('counterState',state);uiText('counterTime',counterElapsed().toFixed(3)+' s');}
function attemptCounterInput(kind='INPUT'){
  const t=counterElapsed();uiText('counterTime',t.toFixed(3)+' s');
  if(counterState==='CONSUMED'){
    setCounterCheck(3);uiText('counterResult','REPEAT BLOCKED');prove('COUNTER REPEAT BLOCKED','ONE COUNTER PER PARRY');return false;
  }
  const valid=enemyStaggered()&&counterState==='OPEN'&&t>=COUNTER_WINDOW_START&&t<=COUNTER_WINDOW_END;
  if(valid){counterAcceptCount++;setCounterUi('CONSUMED');uiText('counterResult','ACCEPTED');uiText('counterCount',counterAcceptCount+'');setCounterCheck(2);prove('COUNTER INPUT ACCEPTED',t.toFixed(3)+' s');return true;}
  if(t<COUNTER_WINDOW_START){uiText('counterResult','EARLY REJECTED');setCounterCheck(4);prove('COUNTER EARLY REJECTED',t.toFixed(3)+' s');return false;}
  if(t>COUNTER_WINDOW_END){uiText('counterResult','LATE REJECTED');setCounterCheck(5);prove('COUNTER LATE REJECTED',t.toFixed(3)+' s');return false;}
  uiText('counterResult','REJECTED');return false;
}
function armCounterProbe(kind){
  if(blocking){uiText('counterResult','RELEASE BLOCK FIRST');return;}
  armedCounterProbe=kind;armParryProbe('FRONT');uiText('counterResult','ARMED · '+kind+' · HOLD BLOCK');
}
function startCounterOpportunity(){
  counterStartMs=performance.now();counterAcceptCount=0;setCounterUi('PENDING');uiText('counterResult','WAIT');uiText('counterCount','0');
  const probe=armedCounterProbe;armedCounterProbe='NONE';
  setTimeout(()=>{if(enemyStaggered()&&counterState==='PENDING'){setCounterUi('OPEN');setCounterCheck(1);prove('COUNTER WINDOW OPEN','0.080–0.500 s');}},COUNTER_WINDOW_START*1000);
  setTimeout(()=>{if(counterState==='OPEN'){setCounterUi('EXPIRED');uiText('counterResult','WINDOW CLOSED');prove('COUNTER WINDOW CLOSED','0.500 s');}},COUNTER_WINDOW_END*1000+3);
  if(probe==='VALID'){
    setTimeout(()=>attemptCounterInput('VALID'),COUNTER_VALID_PROBE*1000);
    setTimeout(()=>attemptCounterInput('REPEAT'),(COUNTER_VALID_PROBE+.04)*1000);
  }else if(probe==='EARLY')setTimeout(()=>attemptCounterInput('EARLY'),COUNTER_EARLY_PROBE*1000);
  else if(probe==='LATE')setTimeout(()=>attemptCounterInput('LATE'),COUNTER_LATE_PROBE*1000);
}
function bindCounterControls(){
  const binds=[['armCounterValid',()=>armCounterProbe('VALID')],['armCounterEarly',()=>armCounterProbe('EARLY')],['armCounterLate',()=>armCounterProbe('LATE')]];
  for(const [id,fn] of binds){const e=document.getElementById(id);if(e)e.addEventListener('pointerdown',ev=>{ev.preventDefault();fn();});}
  const attackBtn=document.getElementById('attack');
  if(attackBtn)attackBtn.addEventListener('pointerdown',ev=>{if(enemyStaggered()&&counterState!=='IDLE'){ev.preventDefault();ev.stopImmediatePropagation();attemptCounterInput('INPUT');}},true);
  document.addEventListener('keydown',ev=>{if(ev.code==='KeyF'&&enemyStaggered()&&counterState!=='IDLE'){ev.preventDefault();ev.stopImmediatePropagation();attemptCounterInput('INPUT');}},true);
}
queueMicrotask(bindCounterControls);
`;

replaceReq(
  "const ENEMY_STAGGER_DURATION=.65,ENEMY_STAGGER_MID=.30;",
  "const ENEMY_STAGGER_DURATION=.65,ENEMY_STAGGER_MID=.30;\n"+counterCode,
  'counter state insertion'
);
replaceReq(
  "beginEnemyStagger();}",
  "beginEnemyStagger();startCounterOpportunity();}",
  'successful parry starts counter opportunity'
);

await writeFile(runtimeBuilder,src);
await import(pathToFileURL(runtimeBuilder).href+'?v='+Date.now());

// Final 05L presentation: counter-opportunity window only. Accepted stagger remains active but is not re-proven.
const out=path.resolve(root,'../threejs-test-05l');
const indexPath=path.join(out,'index.html');
let html=await readFile(indexPath,'utf8');
html=html.replaceAll('Test 05L — Parry Enemy Stagger','Test 05L — Parry Counter Window');
html=html.replaceAll('RAAI Proof 05L — Parry Enemy Stagger','RAAI Proof 05L — Parry Counter Window');
html=html.replace('STAGGER TEST — ARM PARRY + BLOCK, then test enemy action during/after stagger','COUNTER TEST — arm VALID / EARLY / LATE, then hold BLOCK to trigger the accepted parry');
html=html.replace('<span>Enemy action</span><b id="enemyAction">AVAILABLE</b>','<span>Enemy action</span><b id="enemyAction">AVAILABLE</b><span>Counter</span><b id="counterState">IDLE</b><span>Counter t</span><b id="counterTime">—</b><span>Counter result</span><b id="counterResult">—</b><span>Counter count</span><b id="counterCount">0</b>');
html=html.replace(/<div id="checklist">[\s\S]*?<div class="acceptedContract">[\s\S]*?<\/div>/,
`<div id="checklist"><div><b id="counterCheck1">PENDING</b><span>01 Successful parry opens counter window at 0.08 s</span></div><div><b id="counterCheck2">PENDING</b><span>02 Counter input inside 0.08–0.50 s is accepted</span></div><div><b id="counterCheck3">PENDING</b><span>03 Accepted counter consumes the opportunity; repeat is blocked</span></div><div><b id="counterCheck4">PENDING</b><span>04 Counter input at 0.03 s is rejected as EARLY</span></div><div><b id="counterCheck5">PENDING</b><span>05 Counter input at 0.55 s is rejected as LATE</span></div></div><div class="contract"><b>COUNTER CONTRACT</b><span>Accepted front parry → stagger + counter opportunity · window 0.08–0.50 s · one counter input maximum · early/late inputs do not count as counter · no counter damage/animation yet</span></div><div id="counterControls"><button id="armCounterValid">ARM COUNTER</button><button id="armCounterEarly">ARM EARLY</button><button id="armCounterLate">ARM LATE</button><button id="resetParryHp">RESET HP</button></div><div class="acceptedContract"><b>ACCEPTED / NOT RETESTED</b><span>Movement, lock-on, single attack, two-hit chain, dodge + i-frames, block/guard, parry timing, and enemy stagger remain active. Jump animation replacement stays deferred.</span></div>`);
html=html.replace('</style>','#counterControls{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin:9px 0 2px}#counterControls button{border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.08);color:#eef7f2;border-radius:8px;padding:7px 5px;font-size:8px;font-weight:800;letter-spacing:.03em}</style>');
await writeFile(indexPath,html);

const infoPath=path.join(out,'build-info.json');
const info=JSON.parse(await readFile(infoPath,'utf8'));
info.inherits='Accepted Test 05K combat baseline: movement + lock-on + single attack + two-hit chain + dodge + i-frames + block/guard + parry timing + enemy stagger';
info.focus='isolated parry counter-opportunity timing and one-shot consumption proof';
info.proof_labels=['COUNTER WINDOW OPEN','COUNTER INPUT ACCEPTED','COUNTER REPEAT BLOCKED','COUNTER EARLY REJECTED','COUNTER LATE REJECTED'];
info.acceptance_checklist={counter_window_opens:'PENDING',valid_counter_input:'PENDING',counter_consumes_opportunity:'PENDING',early_counter_rejected:'PENDING',late_counter_rejected:'PENDING'};
info.accepted_systems_active_not_retested={movement:true,lock_on:true,single_attack:true,two_hit_chain:true,dodge:true,dodge_iframes:true,block_guard:true,parry_timing:true,enemy_stagger:true};
info.parry.counter_window=true;
info.stagger.status='ACCEPTED';
info.stagger.counter_window=true;
info.counter={trigger:'successful frontal parry only',window_start_s:.08,window_end_s:.50,valid_probe_s:.20,early_probe_s:.03,late_probe_s:.55,max_inputs_per_parry:1,damage:false,animation:false};
info.disabled_systems={counter_damage:true,counter_animation:true,block_stamina:true,enemy_telegraph:true,enemy_ai:true,extra_vfx:true};
info.human_acceptance={accepted:false,status:'PENDING HUMAN ACCEPTANCE'};
await writeFile(infoPath,JSON.stringify(info,null,2));
console.log('Built Test 05L parry counter window proof.');
