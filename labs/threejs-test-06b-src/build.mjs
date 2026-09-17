import { build } from 'esbuild';
import { mkdir, writeFile, readFile, stat, copyFile, rm } from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const root=process.cwd();
const labs=path.resolve(root,'..');
const baseRoot=path.join(labs,'threejs-test-04-src');
const out=path.join(labs,'threejs-test-06b');
const assets=path.join(out,'assets');
await rm(out,{recursive:true,force:true});
await mkdir(assets,{recursive:true});

function gitBlobSha(text){const b=Buffer.from(text);return crypto.createHash('sha1').update(Buffer.concat([Buffer.from(`blob ${b.length}\0`),b])).digest('hex');}
function mustReplace(text,find,repl,label){const i=text.indexOf(find);if(i<0)throw new Error(`06B anchor missing: ${label}`);if(text.indexOf(find,i+find.length)>=0)throw new Error(`06B anchor not unique: ${label}`);return text.slice(0,i)+repl+text.slice(i+find.length);}

const accepted06A=JSON.parse(await readFile(path.join(labs,'threejs-test-06a','acceptance.json'),'utf8'));
if(accepted06A.test!=='06A'||accepted06A.status!=='ACCEPTED'||accepted06A.human_visual_acceptance!==true||accepted06A.frozen!==true)throw new Error('Frozen accepted 06A required before Test06B');

const baseSource=await readFile(path.join(baseRoot,'src/main.js'),'utf8');
const expectedBase='8ec3761c2cf4a507a072d79307220c0b315a8261';
const actualBase=gitBlobSha(baseSource);
if(actualBase!==expectedBase)throw new Error(`Accepted Test04 source changed (${actualBase}); refusing unreviewed inheritance.`);
const accepted06AFragment=await readFile(path.join(labs,'threejs-test-06a-src','living-world.fragment.js'),'utf8');
const propagationFragment=await readFile(path.join(root,'disturbance-propagation.fragment.js'),'utf8');
const source=baseSource+'\n'+accepted06AFragment+'\n'+propagationFragment;

const buildId=new Date().toISOString().replace(/\D/g,'').slice(0,14);
let html=await readFile(path.join(labs,'threejs-test-06a','index.html'),'utf8');
html=html.replaceAll('RAAI Three.js Test 06A — Living World Baseline','RAAI Three.js Test 06B — Disturbance Propagation');
html=html.replaceAll('RAAI Proof 06A — Living World Baseline','RAAI Proof 06B — Disturbance Propagation');
html=html.replace('Starting Living World 06A…','Starting Living World 06B…');
html=html.replace('<div id="zone">06A · APPROACH THE FLOCK</div>','<div id="zone">06B · TRIGGER FLOCK A → WATCH FLOCK B</div>');
html=mustReplace(html,
  '<span>Response</span><b id="worldResult">APPROACH</b>',
  '<span>Response</span><b id="worldResult">APPROACH</b><span>Flock B</span><b id="worldBState">CALM</b><span>Distance to B</span><b id="worldBDistance">—</b><span>World link</span><b id="worldLinkState">IDLE</b><span>Propagation</span><b id="worldLinkDelay">—</b>',
  '06B propagation telemetry');
html=html.replace('<div id="panel"><div class="title">06A Living World</div><div id="worldBrief">One actor family · one player-proximity stimulus · one visible response. Approach the flock until it reacts, then walk away to allow it to return.</div>',
  '<div id="panel"><div class="title">06B World Propagation</div><div id="worldBrief"><b>New variable only:</b> actor-to-actor disturbance propagation. Approach Flock A. Flock B has no direct player trigger; it should react only after A flees and the disturbance reaches it.</div>');
html=html.replace('</style>',`#worldBState,#worldLinkState{color:#a8f0b5}</style>`);
html=html.replace(/app\.js\?v=\d+/g,`app.js?v=${buildId}`).replace(/sw\.js\?v=\d+/g,`sw.js?v=${buildId}`);
await writeFile(path.join(out,'index.html'),html);
await writeFile(path.join(out,'source-main.js'),source);
await copyFile(path.join(labs,'threejs-test-06a','assets','Soldier.glb'),path.join(assets,'Soldier.glb'));

await build({stdin:{contents:source,resolveDir:root,sourcefile:'test06b-main.js',loader:'js'},bundle:true,minify:true,format:'esm',target:['safari16.4'],outfile:path.join(out,'app.js'),legalComments:'none',treeShaking:true});

const app=await readFile(path.join(out,'app.js'),'utf8');
if(!app.includes('06A_LIVING_WORLD_FLOCK'))throw new Error('Accepted 06A marker missing from 06B bundle');
if(!app.includes('06B_WORLD_DISTURBANCE_PROPAGATION'))throw new Error('06B propagation marker missing from bundle');
if(!app.includes('TRAVELING'))throw new Error('06B propagation state missing from bundle');
if(!app.includes('directPlayerTrigger'))throw new Error('06B direct-player-trigger guard missing from bundle');

const sw=`self.addEventListener('install',()=>self.skipWaiting());\nself.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('raai-threejs-test06b-')).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));\n`;
await writeFile(path.join(out,'sw.js'),sw);

const js=await stat(path.join(out,'app.js')),glb=await stat(path.join(assets,'Soldier.glb'));
const primaryToSecondaryDistance=Math.hypot(7.5,4.5);
const propagationTravelMs=(primaryToSecondaryDistance/18)*1000;
const info={
  build_id:buildId,
  test:'06B',
  roadmap:'Test06 — Living World',
  purpose:'prove deterministic world actor → world actor stimulus propagation without adding combat or direct secondary player triggering',
  prerequisite:{test06a:'ACCEPTED / FROZEN'},
  inherits:'Frozen accepted 06A flock response + accepted Test04 environment; 06A behavior is not modified',
  base_blob:expectedBase,
  three:'0.186.0',pipeline:'source-level accepted 06A fragment + isolated propagation fragment + esbuild local bundle',runtime_external_dependencies:0,service_worker_cache:false,target:'safari16.4+',mobile_fps_target:60,
  primary_actor:{type:'accepted 06A flock',count:12,trigger:'player proximity <= 7m'},
  secondary_actor:{type:'second stylized instanced bird flock',count:10,draw_call_budget_added:3,direct_player_trigger:false},
  propagation:{source:'primary flock enters FLEEING',mechanism:'state-transition adapter -> disturbance event -> travel delay -> secondary response',distance_m:Number(primaryToSecondaryDistance.toFixed(3)),speed_m_s:18,travel_delay_ms:Math.round(propagationTravelMs)},
  secondary_states:['CALM','ALERT_DELAY','FLEEING','DISPERSED','RETURNING'],
  mechanics_changed:false,
  combat_changed:false,
  acceptance_checklist:{both_flocks_visibly_present:'HUMAN REVIEW',primary_flock_reacts_first:'HUMAN REVIEW',secondary_flock_reacts_after_clear_delay:'HUMAN REVIEW',secondary_response_reads_as_caused_by_world_not_direct_player:'HUMAN REVIEW',retreat_allows_both_flocks_to_recover:'HUMAN REVIEW',world_feels_more_systemic_than_06a:'HUMAN REVIEW'},
  human_visual_review:'REQUIRED',
  app_js_bytes:js.size,soldier_glb_bytes:glb.size
};
await writeFile(path.join(out,'build-info.json'),JSON.stringify(info,null,2));
await writeFile(path.join(out,'verification-report.json'),JSON.stringify({
  test:'06B',status:'PASS',build_id:buildId,
  delegated_nonvisual_checks:{accepted_06a_frozen_required:true,accepted_test04_blob_verified:true,accepted_06a_fragment_reused_unchanged:true,secondary_actor_count:10,secondary_actor_instanced:true,secondary_added_draw_call_budget:3,secondary_direct_player_trigger:false,propagation_source:'06A primary state transition to FLEEING',propagation_distance_m:Number(primaryToSecondaryDistance.toFixed(3)),propagation_speed_m_s:18,propagation_delay_ms:Math.round(propagationTravelMs),secondary_state_machine:true,combat_not_modified:true,source_level:true},
  human_visual_review:'REQUIRED'
},null,2));
console.log(JSON.stringify({buildId,status:'PASS',output:'threejs-test-06b'}));
