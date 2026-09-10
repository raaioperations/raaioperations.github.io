import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const out=path.resolve(process.cwd(),'../threejs-test-05a');
const indexPath=path.join(out,'index.html');
const infoPath=path.join(out,'build-info.json');
let html=await readFile(indexPath,'utf8');

const replace=(a,b,label)=>{if(!html.includes(a))throw new Error(`Missing ${label}`);html=html.replace(a,b);};
replace('id="walkSpeed" type="range" min="2.5" max="7" step="0.1" value="4.8"','id="walkSpeed" type="range" min="2.5" max="24" step="0.1" value="2.5"','walk default');
replace('id="sprintSpeed" type="range" min="5" max="12" step="0.1" value="8.7"','id="sprintSpeed" type="range" min="5" max="36" step="0.1" value="19.8"','sprint default');
replace('id="accel" type="range" min="3" max="24" step="0.5" value="12"','id="accel" type="range" min="3" max="24" step="0.5" value="14"','accel default');
replace('id="gravity" type="range" min="8" max="30" step="0.2" value="18.6"','id="gravity" type="range" min="8" max="30" step="0.2" value="23.8"','gravity default');
replace('<label><span>Walk <output id="walkV"></output></span><input id="walkSpeed"','<label class="internalSpeed"><span>Walk internal</span><input id="walkSpeed"','hide internal walk');
replace('<label><span>Sprint <output id="sprintV"></output></span><input id="sprintSpeed"','<label class="internalSpeed"><span>Sprint internal</span><input id="sprintSpeed"','hide internal sprint');
replace('<label><span>Accel <output id="accelV"></output></span>','<label><span>Walk <output id="walkTuneV">2.5</output></span><input id="walkTune" type="range" min="1.5" max="5" step="0.1" value="2.5"></label><label><span>Run <output id="runTuneV">6.6</output></span><input id="runTune" type="range" min="3" max="10" step="0.1" value="6.6"></label><label><span>Sprint <output id="sprintDerivedV">19.8</output></span><b style="font-size:9px;opacity:.72">3× Run</b></label><label><span>Accel <output id="accelV"></output></span>','add visible walk run sprint');
html=html.replace('</style>','.internalSpeed{display:none!important}</style>');
replace('READY — tune movement, then validate each action','READY — tune Walk / Run; Sprint is always 3× Run','proof copy');

const patchScript=`<script>addEventListener('DOMContentLoaded',()=>{const q=id=>document.getElementById(id),walk=q('walkTune'),run=q('runTune'),walkInternal=q('walkSpeed'),sprintInternal=q('sprintSpeed'),walkV=q('walkTuneV'),runV=q('runTuneV'),sprintV=q('sprintDerivedV'),proof=q('proofSuccess'),move=q('moveState'),speed=q('speed'),stick=q('stick'),sprint=q('sprint'),reset=q('resetMove');let mag=0,sprintHeld=false,runProof=false;function sync(){walkV.textContent=(+walk.value).toFixed(1);runV.textContent=(+run.value).toFixed(1);sprintV.textContent=(+run.value*3).toFixed(1);sprintInternal.max=36;sprintInternal.value=(+run.value*3).toFixed(1);sprintInternal.dispatchEvent(new Event('input'));}function applyMode(){walkInternal.value=(mag>=.62?+run.value:+walk.value).toFixed(1);walkInternal.dispatchEvent(new Event('input'));sync();}for(const e of [walk,run])e.addEventListener('input',()=>{sync();applyMode();});function readMag(e){const r=stick.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2;mag=Math.min(1,Math.hypot(e.clientX-cx,e.clientY-cy)/(r.width*.42));applyMode();}stick.addEventListener('pointerdown',readMag);stick.addEventListener('pointermove',e=>{if(e.buttons||e.pointerType==='touch')readMag(e)});for(const ev of ['pointerup','pointercancel','pointerleave'])stick.addEventListener(ev,()=>{mag=0;runProof=false;applyMode();});sprint.addEventListener('pointerdown',()=>sprintHeld=true);for(const ev of ['pointerup','pointercancel','pointerleave'])sprint.addEventListener(ev,()=>sprintHeld=false);reset.addEventListener('click',e=>{e.stopImmediatePropagation();walk.value=2.5;run.value=6.6;q('accel').value=14;q('brake').value=10;q('turnRate').value=14;q('jumpVel').value=7.7;q('gravity').value=23.8;q('damp').value=.12;for(const id of ['accel','brake','turnRate','jumpVel','gravity','damp'])q(id).dispatchEvent(new Event('input'));sync();applyMode();proof.textContent='✓ TUNED DEFAULTS RESTORED';proof.classList.add('show');setTimeout(()=>proof.classList.remove('show'),1200);},true);function tick(){const v=parseFloat(speed.textContent)||0;if(!sprintHeld&&mag>=.62&&v>=+run.value*.9){move.textContent='RUN';if(!runProof){proof.textContent='✓ RUN SUCCESS · '+v.toFixed(1)+' m/s';proof.classList.add('show');setTimeout(()=>proof.classList.remove('show'),1200);runProof=true;}}else if(!sprintHeld&&mag>0&&mag<.62){move.textContent='WALK';runProof=false;}requestAnimationFrame(tick);}sync();applyMode();requestAnimationFrame(tick);});</script>`;
html=html.replace('</body>',patchScript+'\n</body>');
await writeFile(indexPath,html);

const info=JSON.parse(await readFile(infoPath,'utf8'));
info.movement_parameters=['walk speed','run speed','sprint = 3x run','acceleration','braking','turn response','jump velocity','gravity','camera damping'];
info.tuned_defaults={walk_mps:2.5,run_mps:6.6,sprint_mps:19.8,accel:14,brake:10,turn:14,jump:7.7,gravity:23.8,camera:0.120};
info.proof_labels=['WALK SUCCESS','RUN SUCCESS','SPRINT SUCCESS','JUMP SUCCESS','STOP SUCCESS'];
await writeFile(infoPath,JSON.stringify(info,null,2));
