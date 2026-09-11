import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root=process.cwd();
const basePath=path.resolve(root,'../threejs-test-05l-src/build.mjs');
const runtimeBuilder=path.resolve(root,'.build-05m-wrapper.mjs');
let src=await readFile(basePath,'utf8');

// Promote accepted 05L counter-window architecture into an isolated counter-damage proof.
src=src.replaceAll('05L','05M').replaceAll('05l','05m');

function replaceReq(find,repl,label){
  const i=src.indexOf(find);
  if(i<0) throw new Error(`05M patch anchor missing: ${label}`);
  if(src.indexOf(find,i+find.length)>=0) throw new Error(`05M patch anchor not unique: ${label}`);
  src=src.slice(0,i)+repl+src.slice(i+find.length);
}

// Suppress accepted counter-window proof labels; only new counter-damage labels are visible.
replaceReq(
  "if(!label.startsWith('COUNTER'))return;",
  "if(!label.startsWith('COUNTER DAMAGE'))return;",
  'proof label filter'
);

const damageCode=`
const COUNTER_DAMAGE=40;
let counterTargetHP=100,counterDamageEvents=0,counterEarlyNoDamage=false,counterLateNoDamage=false;
function setCounterDamageCheck(n){const e=document.getElementById('counterDamageCheck'+n);if(e){e.textContent='PASS';e.style.color='#a8f0b5';}}
function updateInvalidDamageProgress(){
  const e=document.getElementById('counterDamageCheck4');if(!e)return;
  const count=(counterEarlyNoDamage?1:0)+(counterLateNoDamage?1:0);
  if(count<2){e.textContent=count+'/2';e.style.color='#ffd27a';}
  else{e.textContent='PASS';e.style.color='#a8f0b5';prove('COUNTER DAMAGE INVALID ZERO','EARLY + LATE = 0 DAMAGE');}
}
function applyCounterDamage(){
  const before=counterTargetHP;
  counterTargetHP=Math.max(0,counterTargetHP-COUNTER_DAMAGE);
  const dealt=before-counterTargetHP;
  counterDamageEvents++;
  uiText('counterTargetHp',counterTargetHP+'/100');uiText('counterDamage',dealt+'');uiText('counterDamageEvents',counterDamageEvents+'');
  if(dealt===40){setCounterDamageCheck(1);prove('COUNTER DAMAGE APPLIED','40 DAMAGE');}
  if(counterDamageEvents===1&&before===100&&counterTargetHP===60){setCounterDamageCheck(2);prove('COUNTER DAMAGE EXACT','100 → 60');}
  if(counterDamageEvents===2&&before===60&&counterTargetHP===20){setCounterDamageCheck(5);prove('COUNTER DAMAGE NEW PARRY','60 → 20');}
}
function recordInvalidCounterDamage(kind){
  if(kind==='EARLY')counterEarlyNoDamage=true;
  if(kind==='LATE')counterLateNoDamage=true;
  uiText('counterDamage','0');updateInvalidDamageProgress();
}
function resetCounterTarget(){
  counterTargetHP=100;counterDamageEvents=0;counterEarlyNoDamage=false;counterLateNoDamage=false;
  uiText('counterTargetHp','100/100');uiText('counterDamage','—');uiText('counterDamageEvents','0');
  const e=document.getElementById('counterDamageCheck4');if(e&&e.textContent!=='PASS'){e.textContent='0/2';e.style.color='#ffd27a';}
}
function bindCounterDamageControls(){const e=document.getElementById('resetCounterTarget');if(e)e.addEventListener('pointerdown',ev=>{ev.preventDefault();resetCounterTarget();});}
queueMicrotask(bindCounterDamageControls);
`;

replaceReq(
  "const COUNTER_WINDOW_START=.08,COUNTER_WINDOW_END=.50,COUNTER_VALID_PROBE=.20,COUNTER_EARLY_PROBE=.03,COUNTER_LATE_PROBE=.55;",
  "const COUNTER_WINDOW_START=.08,COUNTER_WINDOW_END=.50,COUNTER_VALID_PROBE=.20,COUNTER_EARLY_PROBE=.03,COUNTER_LATE_PROBE=.55;\n"+damageCode,
  'counter damage state insertion'
);
replaceReq(
  "setCounterCheck(3);uiText('counterResult','REPEAT BLOCKED');prove('COUNTER REPEAT BLOCKED','ONE COUNTER PER PARRY');return false;",
  "setCounterCheck(3);setCounterDamageCheck(3);uiText('counterResult','REPEAT BLOCKED');uiText('counterDamage','0');prove('COUNTER REPEAT BLOCKED','ONE COUNTER PER PARRY');prove('COUNTER DAMAGE REPEAT BLOCKED','0 ADDITIONAL DAMAGE');return false;",
  'repeat has zero damage'
);
replaceReq(
  "setCounterCheck(2);prove('COUNTER INPUT ACCEPTED',t.toFixed(3)+' s');return true;",
  "setCounterCheck(2);prove('COUNTER INPUT ACCEPTED',t.toFixed(3)+' s');applyCounterDamage();return true;",
  'accepted counter applies damage'
);
replaceReq(
  "uiText('counterResult','EARLY REJECTED');setCounterCheck(4);prove('COUNTER EARLY REJECTED',t.toFixed(3)+' s');return false;",
  "uiText('counterResult','EARLY REJECTED');uiText('counterDamage','0');setCounterCheck(4);recordInvalidCounterDamage('EARLY');prove('COUNTER EARLY REJECTED',t.toFixed(3)+' s');return false;",
  'early counter zero damage'
);
replaceReq(
  "uiText('counterResult','LATE REJECTED');setCounterCheck(5);prove('COUNTER LATE REJECTED',t.toFixed(3)+' s');return false;",
  "uiText('counterResult','LATE REJECTED');uiText('counterDamage','0');setCounterCheck(5);recordInvalidCounterDamage('LATE');prove('COUNTER LATE REJECTED',t.toFixed(3)+' s');return false;",
  'late counter zero damage'
);

await writeFile(runtimeBuilder,src);
await import(pathToFileURL(runtimeBuilder).href+'?v='+Date.now());

// Final 05M presentation: counter damage only. Accepted counter-window behavior remains active but is not re-proven.
const out=path.resolve(root,'../threejs-test-05m');
const indexPath=path.join(out,'index.html');
let html=await readFile(indexPath,'utf8');
html=html.replaceAll('Test 05M — Parry Counter Window','Test 05M — Counter Damage');
html=html.replaceAll('RAAI Proof 05M — Parry Counter Window','RAAI Proof 05M — Counter Damage');
html=html.replace('COUNTER TEST — arm VALID / EARLY / LATE, then hold BLOCK to trigger the accepted parry','COUNTER DAMAGE — ARM COUNTER / EARLY / LATE, then hold BLOCK; use ARM COUNTER twice to prove a fresh opportunity');
html=html.replace('<span>Counter count</span><b id="counterCount">0</b>','<span>Counter count</span><b id="counterCount">0</b><span>Counter target HP</span><b id="counterTargetHp">100/100</b><span>Counter dmg</span><b id="counterDamage">—</b><span>Damage events</span><b id="counterDamageEvents">0</b>');
html=html.replace(/<div id="checklist">[\s\S]*?<div class="acceptedContract">[\s\S]*?<\/div>/,
`<div id="checklist"><div><b id="counterDamageCheck1">PENDING</b><span>01 Accepted counter causes a damage event</span></div><div><b id="counterDamageCheck2">PENDING</b><span>02 Counter deals exactly 40: target HP 100 → 60</span></div><div><b id="counterDamageCheck3">PENDING</b><span>03 Repeat in the same opportunity deals 0 additional damage</span></div><div><b id="counterDamageCheck4">0/2</b><span>04 EARLY + LATE counters each deal 0 damage</span></div><div><b id="counterDamageCheck5">PENDING</b><span>05 New successful parry grants one fresh 40-damage counter: 60 → 20</span></div></div><div class="contract"><b>COUNTER DAMAGE CONTRACT</b><span>Accepted counter only · exactly 40 damage · maximum one damage event per successful parry · repeat/early/late = 0 · new successful parry grants one fresh counter · no counter animation/hitstop/VFX yet</span></div><div id="counterControls"><button id="armCounterValid">ARM COUNTER</button><button id="armCounterEarly">ARM EARLY</button><button id="armCounterLate">ARM LATE</button><button id="resetCounterTarget">RESET TARGET</button></div><div class="acceptedContract"><b>ACCEPTED / NOT RETESTED</b><span>Movement, lock-on, attacks, dodge + i-frames, block/guard, parry timing, enemy stagger, and counter window remain active. Jump animation replacement stays deferred.</span></div>`);
await writeFile(indexPath,html);

const infoPath=path.join(out,'build-info.json');
const info=JSON.parse(await readFile(infoPath,'utf8'));
info.inherits='Accepted Test 05L combat baseline: movement + lock-on + attacks + dodge + i-frames + block/guard + parry + stagger + counter window';
info.focus='isolated accepted-counter damage and damage-gating proof';
info.proof_labels=['COUNTER DAMAGE APPLIED','COUNTER DAMAGE EXACT','COUNTER DAMAGE REPEAT BLOCKED','COUNTER DAMAGE INVALID ZERO','COUNTER DAMAGE NEW PARRY'];
info.acceptance_checklist={counter_damage_event:'PENDING',counter_exact_40:'PENDING',repeat_zero_damage:'PENDING',early_late_zero_damage:'PENDING',new_parry_fresh_damage:'PENDING'};
info.accepted_systems_active_not_retested={movement:true,lock_on:true,single_attack:true,two_hit_chain:true,dodge:true,dodge_iframes:true,block_guard:true,parry_timing:true,enemy_stagger:true,counter_window:true};
info.counter.status='ACCEPTED';
info.counter.damage=40;
info.counter.damage_target_hp=100;
info.counter.max_damage_events_per_parry=1;
info.counter.invalid_input_damage=0;
info.counter.animation=false;
info.disabled_systems={counter_animation:true,counter_hitstop:true,counter_vfx:true,block_stamina:true,enemy_telegraph:true,enemy_ai:true,extra_vfx:true};
info.human_acceptance={accepted:false,status:'PENDING HUMAN ACCEPTANCE'};
await writeFile(infoPath,JSON.stringify(info,null,2));
console.log('Built Test 05M counter damage mechanical proof.');
