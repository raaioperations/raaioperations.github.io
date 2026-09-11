import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root=process.cwd();
const base=path.resolve(root,'../threejs-test-05b');
const out=path.resolve(root,'../threejs-test-05f');
await rm(out,{recursive:true,force:true});
await mkdir(out,{recursive:true});
await cp(base,out,{recursive:true});

const pad=n=>String(n).padStart(2,'0');
const d=new Date();
const buildId=`${d.getUTCFullYear()}${pad(d.getUTCMonth()+1)}${pad(d.getUTCDate())}${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}`;

const indexPath=path.join(out,'index.html');
let html=await readFile(indexPath,'utf8');
html=html.replaceAll('Test 05B — Single Attack Proof','Test 05F — Attack Timing Regression')
         .replaceAll('RAAI Proof 05B — Single Attack Proof','RAAI Proof 05F — Attack Timing Regression')
         .replace('Starting single-attack proof…','Starting attack-timing regression…');
html=html.replace(/app\.js\?v=\d+/g,`app.js?v=${buildId}`).replace(/sw\.js\?v=\d+/g,`sw.js?v=${buildId}`);
html=html.replace('<div id="zone">FOREST APPROACH</div>','<div id="zone">FOREST APPROACH</div><div id="timingProof">TIMING TEST — press F / ATTACK once</div>');
html=html.replace('<div class="title">Test 05B checklist</div>','<div class="title">Test 05F checklist</div>');
html=html.replace(/<div id="checklist">[\s\S]*?<\/div><div class="contract">/,
'<div id="checklist"><div><b>PENDING</b><span>01 Windup → active → recovery → ready sequence</span></div></div><div class="contract">');
html=html.replace('</style>',`#proofSuccess{display:none!important}#timingProof{position:absolute;left:50%;top:72px;transform:translateX(-50%);padding:9px 14px;border:1px solid rgba(255,255,255,.20);border-radius:999px;background:rgba(8,18,15,.86);backdrop-filter:blur(10px);font-size:10px;font-weight:850;letter-spacing:.05em;white-space:nowrap}#timingProof.pass{box-shadow:0 0 24px rgba(159,255,190,.28);border-color:rgba(159,255,190,.5)}#timingReadout{margin:8px 0;padding:8px;border:1px solid rgba(255,255,255,.12);border-radius:9px;background:rgba(255,255,255,.04);font:8.5px/1.35 ui-monospace,SFMono-Regular,Menlo,monospace}@media(pointer:coarse),(max-width:900px){#timingProof{top:66px;max-width:78vw;overflow:hidden;text-overflow:ellipsis;font-size:9px}}</style>`);
html=html.replace('<div class="contract"><b>LOCKED MOVEMENT</b>','<div id="timingReadout">Expected: WINDUP ≈115 ms · ACTIVE ≈135 ms · RECOVERY ≈190 ms · total ≈440 ms</div><div class="contract"><b>LOCKED MOVEMENT</b>');

const timingScript=`<script>addEventListener('DOMContentLoaded',()=>{const state=document.getElementById('attackState'),proof=document.getElementById('timingProof'),readout=document.getElementById('timingReadout');if(!state||!proof||!readout)throw new Error('05F timing DOM binding missing');let last=state.textContent,seq=null;const expected=['WINDUP','ACTIVE','RECOVERY','READY'];function onState(s){if(s===last)return;last=s;const now=performance.now();if(s==='WINDUP'){seq={states:['WINDUP'],times:[now]};proof.classList.remove('pass');proof.textContent='WINDUP CONFIRMED';return;}if(!seq)return;const next=expected[seq.states.length];if(s!==next){proof.textContent='SEQUENCE RESET · '+s;seq=null;return;}seq.states.push(s);seq.times.push(now);if(s==='ACTIVE'){proof.textContent='ACTIVE CONFIRMED';return;}if(s==='RECOVERY'){proof.textContent='RECOVERY CONFIRMED';return;}if(s==='READY'&&seq.states.length===4){const w=seq.times[1]-seq.times[0],a=seq.times[2]-seq.times[1],r=seq.times[3]-seq.times[2],total=seq.times[3]-seq.times[0];readout.textContent='Measured: WINDUP '+w.toFixed(0)+' ms · ACTIVE '+a.toFixed(0)+' ms · RECOVERY '+r.toFixed(0)+' ms · total '+total.toFixed(0)+' ms';const pass=w>=80&&w<=170&&a>=90&&a<=190&&r>=140&&r<=250&&total>=360&&total<=520;proof.textContent=pass?'✓ TIMING SEQUENCE CONFIRMED':'TIMING OUT OF RANGE';proof.classList.toggle('pass',pass);seq=null;}}new MutationObserver(()=>onState(state.textContent)).observe(state,{childList:true,characterData:true,subtree:true});});</script>`;
html=html.replace('</body>',timingScript+'\n</body>');
await writeFile(indexPath,html);

const info={
  build_id:buildId,
  inherits:'Accepted Test 05B single-attack runtime; accepted movement carried forward; jump animation regression omitted',
  focus:'05B windup → active → recovery timing regression only',
  active_check:'Windup → Active → Recovery → Ready state order and measured phase durations',
  expected_timing_ms:{windup:115,active:135,recovery:190,total:440},
  acceptance_status:'PENDING HUMAN ACCEPTANCE',
  accepted_labels_suppressed:['ATTACK INPUT ACCEPTED','HIT CONFIRMED','MISS CONFIRMED'],
  procedural_jump_status:'CLOSED / FAILED / DEFERRED TO AUTHORED ANIMATION',
  runtime_external_dependencies:0
};
await writeFile(path.join(out,'build-info.json'),JSON.stringify(info,null,2));
console.log('Built Test 05F',buildId);
