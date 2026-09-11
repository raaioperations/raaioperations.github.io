import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const sourcePath=path.resolve(process.cwd(),'build.mjs');
const runtimePath=path.resolve(process.cwd(),'.build-05d-runtime.mjs');
let text=await readFile(sourcePath,'utf8');

function replaceOnce(find,repl,label){
  const first=text.indexOf(find);
  if(first<0) throw new Error(`05D combo repair anchor missing: ${label}`);
  if(text.indexOf(find,first+find.length)>=0) throw new Error(`05D combo repair anchor not unique: ${label}`);
  text=text.slice(0,first)+repl+text.slice(first+find.length);
}

// Human-test correction: the original 0.20–0.34 s window was only 140 ms.
// Open the chain at Attack 1's mechanically confirmed hit and keep it open to 0.40 s.
// Attack 1 duration, hit timing, damage, range, movement and lock-on remain unchanged.
replaceOnce(
  'const ATTACK1_DURATION=.44,ATTACK1_ACTIVE=.16,COMBO_OPEN=.20,COMBO_CLOSE=.34,ATTACK2_DURATION=.48,ATTACK2_ACTIVE=.17,ATTACK_REACH=2.75,ATTACK_DAMAGE=25;',
  'const ATTACK1_DURATION=.44,ATTACK1_ACTIVE=.16,COMBO_OPEN=.16,COMBO_CLOSE=.40,ATTACK2_DURATION=.48,ATTACK2_ACTIVE=.17,ATTACK_REACH=2.75,ATTACK_DAMAGE=25;',
  'combo constants'
);

replaceOnce(
  "if(attackTime<COMBO_OPEN)comboWindowEl.textContent='EARLY';else if(attackTime<=COMBO_CLOSE)comboWindowEl.textContent=comboQueued?'QUEUED':'OPEN';else comboWindowEl.textContent='LATE';",
  "if(attackTime<COMBO_OPEN){comboWindowEl.textContent='EARLY';const b=document.getElementById('attack');if(b){b.textContent='ATTACK';b.style.boxShadow='';}}else if(attackTime<=COMBO_CLOSE){comboWindowEl.textContent=comboQueued?'QUEUED':'OPEN · PRESS ATTACK';const b=document.getElementById('attack');if(b){b.textContent=comboQueued?'QUEUED':'CHAIN';b.style.boxShadow=comboQueued?'':'0 0 0 3px rgba(168,240,181,.72),0 0 22px rgba(168,240,181,.36)';}}else{comboWindowEl.textContent='LATE';const b=document.getElementById('attack');if(b){b.textContent='ATTACK';b.style.boxShadow='';}}",
  'open-window HUD feedback'
);

replaceOnce(
  "function resetAttackState(){attackPhase=0;attackTime=0;attackHitDone=false;comboQueued=false;attackStateEl.textContent='READY';comboWindowEl.textContent='—';}",
  "function resetAttackState(){attackPhase=0;attackTime=0;attackHitDone=false;comboQueued=false;attackStateEl.textContent='READY';comboWindowEl.textContent='—';const b=document.getElementById('attack');if(b){b.textContent='ATTACK';b.style.boxShadow='';}}",
  'attack button reset'
);

replaceOnce(
  'Attack 1: 0.44 s · hit 0.16 s · combo OPEN 0.20–0.34 s · Attack 2: 0.48 s · hit 0.17 s · 25 damage each',
  'Attack 1: 0.44 s · hit 0.16 s · combo OPEN 0.16–0.40 s · Attack 2: 0.48 s · hit 0.17 s · 25 damage each',
  'visible combo contract'
);

replaceOnce(
  'combo_window_open_s:.20,combo_window_close_s:.34',
  "combo_window_open_s:.16,combo_window_close_s:.40,combo_window_width_s:.24,repair_revision:'05D-R1'",
  'build metadata'
);

await writeFile(runtimePath,text);
await import(pathToFileURL(runtimePath).href+'?r='+Date.now());
