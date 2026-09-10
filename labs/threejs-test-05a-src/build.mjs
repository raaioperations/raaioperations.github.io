import { build } from 'esbuild';
import { mkdir, writeFile, stat, readFile } from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const root=process.cwd();
const baseRoot=path.resolve(root,'../threejs-test-04-src');
const out=path.resolve(root,'../threejs-test-05a');
const assets=path.join(out,'assets');
await mkdir(assets,{recursive:true});

function gitBlobSha(text){const b=Buffer.from(text);return crypto.createHash('sha1').update(Buffer.concat([Buffer.from(`blob ${b.length}\0`),b])).digest('hex');}
function mustReplace(text,find,repl,label){const i=text.indexOf(find);if(i<0)throw new Error(`Patch anchor missing: ${label}`);if(text.indexOf(find,i+find.length)>=0)throw new Error(`Patch anchor not unique: ${label}`);return text.slice(0,i)+repl+text.slice(i+find.length);}

let source=await readFile(path.join(baseRoot,'src/main.js'),'utf8');
const expectedBase='8ec3761c2cf4a507a072d79307220c0b315a8261';
const actualBase=gitBlobSha(source);
if(actualBase!==expectedBase)throw new Error(`Accepted Test 04 source changed (${actualBase}); refusing unreviewed inheritance.`);

source=mustReplace(source,
"const boot=$('boot'), errorBox=$('error'), fpsEl=$('fps'), callsEl=$('calls'), trisEl=$('tris'), charEl=$('char'), scaleEl=$('scale'), zoneEl=$('zone');",
"const boot=$('boot'), errorBox=$('error'), fpsEl=$('fps'), callsEl=$('calls'), trisEl=$('tris'), charEl=$('char'), scaleEl=$('scale'), zoneEl=$('zone'), moveStateEl=$('moveState'), speedEl=$('speed'), proofSuccessEl=$('proofSuccess');",
'movement HUD bindings');

source=mustReplace(source,
"let yaw=.08,pitch=.30,camDist=7.8,drag=false,lastX=0,lastY=0,touchSprint=false,jumpQueued=false,verticalVel=0,grounded=true;const keys={},touchMove=new THREE.Vector2(),velocity=new THREE.Vector3();",
"let yaw=.08,pitch=.30,camDist=7.8,drag=false,lastX=0,lastY=0,touchSprint=false,jumpQueued=false,verticalVel=0,grounded=true;const keys={},touchMove=new THREE.Vector2(),velocity=new THREE.Vector3();let movementState='IDLE',proofHideTimer=0;function prove(label,detail=''){proofSuccessEl.textContent='✓ '+label+(detail?' · '+detail:'');proofSuccessEl.classList.add('show');clearTimeout(proofHideTimer);proofHideTimer=setTimeout(()=>proofSuccessEl.classList.remove('show'),1200);}",
'proof feedback system');

source=mustReplace(source,
"const panel=$('panel');$('tuneBtn').onclick=()=>panel.classList.toggle('open');const tod=$('tod'),fogS=$('fog'),windS=$('wind'),dampS=$('damp');$('shadowBtn').onclick=e=>{renderer.shadowMap.enabled=!renderer.shadowMap.enabled;e.target.textContent='Dynamic shadows: '+(renderer.shadowMap.enabled?'ON':'OFF')};",
"const panel=$('panel');$('tuneBtn').onclick=()=>panel.classList.toggle('open');const tod=$('tod'),fogS=$('fog'),windS=$('wind'),dampS=$('damp'),walkS=$('walkSpeed'),sprintS=$('sprintSpeed'),accelS=$('accel'),brakeS=$('brake'),turnS=$('turnRate'),jumpS=$('jumpVel'),gravityS=$('gravity');const tunePairs=[[walkS,$('walkV')],[sprintS,$('sprintV')],[accelS,$('accelV')],[brakeS,$('brakeV')],[turnS,$('turnV')],[jumpS,$('jumpV')],[gravityS,$('gravityV')],[dampS,$('dampV')]];for(const [s,o] of tunePairs){const sync=()=>o.textContent=(+s.value).toFixed(s===dampS?3:1);s.addEventListener('input',sync);sync();}$('resetMove').onclick=()=>{walkS.value=4.8;sprintS.value=8.7;accelS.value=12;brakeS.value=10;turnS.value=14;jumpS.value=7.7;gravityS.value=18.6;dampS.value=.12;for(const [s,o] of tunePairs)o.textContent=(+s.value).toFixed(s===dampS?3:1);prove('DEFAULTS RESTORED');};$('shadowBtn').onclick=e=>{renderer.shadowMap.enabled=!renderer.shadowMap.enabled;e.target.textContent='Dynamic shadows: '+(renderer.shadowMap.enabled?'ON':'OFF')};",
'movement tuning controls');

source=mustReplace(source,
"const maxSpeed=(sprinting?8.7:4.8)*(wet?.58:1);if(input.lengthSq()>0){input.normalize();const tv=input.multiplyScalar(maxSpeed),blend=1-Math.exp(-(grounded?12:5)*dt);velocity.x=THREE.MathUtils.lerp(velocity.x,tv.x,blend);velocity.z=THREE.MathUtils.lerp(velocity.z,tv.z,blend);}else{const d=Math.exp(-(grounded?10:2.5)*dt);velocity.x*=d;velocity.z*=d;}if(jumpQueued&&grounded){verticalVel=7.7;grounded=false;}jumpQueued=false;verticalVel-=18.6*dt;",
"const maxSpeed=(sprinting?+sprintS.value:+walkS.value)*(wet?.58:1);if(input.lengthSq()>0){input.normalize();const tv=input.multiplyScalar(maxSpeed),blend=1-Math.exp(-(grounded?+accelS.value:(+accelS.value*.42))*dt);velocity.x=THREE.MathUtils.lerp(velocity.x,tv.x,blend);velocity.z=THREE.MathUtils.lerp(velocity.z,tv.z,blend);}else{const d=Math.exp(-(grounded?+brakeS.value:(+brakeS.value*.25))*dt);velocity.x*=d;velocity.z*=d;}if(jumpQueued&&grounded){verticalVel=+jumpS.value;grounded=false;prove('JUMP SUCCESS','launch '+(+jumpS.value).toFixed(1)+' m/s');}jumpQueued=false;verticalVel-=+gravityS.value*dt;",
'movement parameterization');

source=mustReplace(source,
"playerRoot.rotation.y+=d*(1-Math.exp(-14*dt));}",
"playerRoot.rotation.y+=d*(1-Math.exp(-(+turnS.value)*dt));}",
'turn response parameterization');

source=mustReplace(source,
"const speed=Math.hypot(velocity.x,velocity.z);if(speed>.18){",
"const speed=Math.hypot(velocity.x,velocity.z);speedEl.textContent=speed.toFixed(1)+' m/s';let nextMove='IDLE';if(!grounded)nextMove='AIR';else if(sprinting&&speed>(+walkS.value*.92))nextMove='SPRINT';else if(speed>.35)nextMove='WALK';if(nextMove!==movementState){if(nextMove==='WALK')prove('WALK SUCCESS',speed.toFixed(1)+' m/s');else if(nextMove==='SPRINT')prove('SPRINT SUCCESS',speed.toFixed(1)+' m/s');else if(nextMove==='IDLE'&&(movementState==='WALK'||movementState==='SPRINT'))prove('STOP SUCCESS');movementState=nextMove;moveStateEl.textContent=movementState;}if(speed>.18){",
'movement state proof');

let html=await readFile(path.join(baseRoot,'index.template.html'),'utf8');
html=html.replaceAll('Test 04 — Visual Fidelity','Test 05A — Movement Tuning').replaceAll('RAAI Proof 04 — Visual Fidelity','RAAI Proof 05A — Movement Tuning').replace('Starting local production bundle…','Starting movement tuning proof…');
html=mustReplace(html,
'<span>Render scale</span><b id="scale">—</b>',
'<span>Render scale</span><b id="scale">—</b><span>Movement</span><b id="moveState">IDLE</b><span>Speed</span><b id="speed">0.0 m/s</b>',
'movement telemetry');
html=mustReplace(html,
'<div id="zone">FOREST APPROACH</div>',
'<div id="zone">FOREST APPROACH</div><div id="proofSuccess">READY — tune movement, then validate each action</div>',
'proof success overlay');
html=html.replace('<div id="panel"><div class="title">Live variables</div>','<div id="panel"><div class="title">Movement tune</div>');
html=html.replace('<label><span>Time</span><input id="tod" type="range" min="6" max="20" step="0.1" value="9.8"></label>','<label class="envHidden"><span>Time</span><input id="tod" type="range" min="6" max="20" step="0.1" value="9.8"></label>');
html=html.replace('<label><span>Atmosphere</span><input id="fog" type="range" min="0" max="1" step="0.01" value="0.34"></label>','<label class="envHidden"><span>Atmosphere</span><input id="fog" type="range" min="0" max="1" step="0.01" value="0.34"></label>');
html=html.replace('<label><span>Wind</span><input id="wind" type="range" min="0" max="1" step="0.01" value="0.48"></label>','<label class="envHidden"><span>Wind</span><input id="wind" type="range" min="0" max="1" step="0.01" value="0.48"></label>');
html=html.replace('<label><span>Camera</span><input id="damp" type="range" min="0.05" max="0.22" step="0.005" value="0.12"></label>',
'<label><span>Walk <output id="walkV"></output></span><input id="walkSpeed" type="range" min="2.5" max="7" step="0.1" value="4.8"></label><label><span>Sprint <output id="sprintV"></output></span><input id="sprintSpeed" type="range" min="5" max="12" step="0.1" value="8.7"></label><label><span>Accel <output id="accelV"></output></span><input id="accel" type="range" min="3" max="24" step="0.5" value="12"></label><label><span>Brake <output id="brakeV"></output></span><input id="brake" type="range" min="2" max="24" step="0.5" value="10"></label><label><span>Turn <output id="turnV"></output></span><input id="turnRate" type="range" min="4" max="28" step="0.5" value="14"></label><label><span>Jump <output id="jumpV"></output></span><input id="jumpVel" type="range" min="4" max="12" step="0.1" value="7.7"></label><label><span>Gravity <output id="gravityV"></output></span><input id="gravity" type="range" min="8" max="30" step="0.2" value="18.6"></label><label><span>Camera <output id="dampV"></output></span><input id="damp" type="range" min="0.05" max="0.22" step="0.005" value="0.12"></label><button id="resetMove">Reset movement defaults</button>');
const extraCss=`\n.envHidden{display:none!important}#proofSuccess{position:absolute;left:50%;top:72px;transform:translate(-50%,-8px);padding:9px 14px;border:1px solid rgba(255,255,255,.20);border-radius:999px;background:rgba(8,18,15,.82);backdrop-filter:blur(10px);font-size:10px;font-weight:850;letter-spacing:.05em;opacity:.72;transition:.16s ease;white-space:nowrap}#proofSuccess.show{transform:translate(-50%,0) scale(1.04);opacity:1;box-shadow:0 0 22px rgba(159,255,190,.22)}#panel output{display:inline-block;min-width:30px;text-align:right;color:#c9f6d3;font:700 10px ui-monospace,SFMono-Regular,Menlo,monospace}@media(pointer:coarse),(max-width:900px){#proofSuccess{top:66px;max-width:72vw;overflow:hidden;text-overflow:ellipsis;font-size:9px;padding:7px 10px}#panel{max-height:72vh;overflow:auto}}\n`;
html=html.replace('</style>',extraCss+'</style>');

const modelUrl='https://raw.githubusercontent.com/mrdoob/three.js/r186/examples/models/gltf/Soldier.glb';
const res=await fetch(modelUrl);if(!res.ok)throw new Error(`Failed to fetch pinned Soldier.glb: ${res.status}`);await writeFile(path.join(assets,'Soldier.glb'),Buffer.from(await res.arrayBuffer()));
const buildId=new Date().toISOString().replace(/\D/g,'').slice(0,14);html=html.replaceAll('__BUILD_ID__',buildId);await writeFile(path.join(out,'index.html'),html);

await build({stdin:{contents:source,resolveDir:root,sourcefile:'test05a-main.js',loader:'js'},bundle:true,minify:true,format:'esm',target:['safari16.4'],outfile:path.join(out,'app.js'),legalComments:'none',treeShaking:true});
const sw=`const CACHE='raai-threejs-test05a-${buildId}';\nconst CORE=['./','./index.html','./app.js?v=${buildId}','./assets/Soldier.glb'];\nself.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));\nself.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('raai-threejs-test05a-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));\nself.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r;}).catch(()=>caches.match('./index.html'))));});\n`;await writeFile(path.join(out,'sw.js'),sw);
const js=await stat(path.join(out,'app.js')),glb=await stat(path.join(assets,'Soldier.glb'));await writeFile(path.join(out,'build-info.json'),JSON.stringify({build_id:buildId,inherits:'Test 04 accepted baseline',base_blob:expectedBase,three:'0.186.0',pipeline:'esbuild-local-bundle',runtime_external_dependencies:0,focus:'movement tuning + explicit success proof',movement_parameters:['walk speed','sprint speed','acceleration','braking','turn response','jump velocity','gravity','camera damping'],proof_labels:['WALK SUCCESS','SPRINT SUCCESS','JUMP SUCCESS','STOP SUCCESS'],combo_status:'deferred until movement acceptance',app_js_bytes:js.size,soldier_glb_bytes:glb.size,service_worker_cache:true,target:'safari16.4+',mobile_fps_target:60},null,2));console.log(JSON.stringify({buildId,appBytes:js.size,glbBytes:glb.size,baseBlob:actualBase}));
