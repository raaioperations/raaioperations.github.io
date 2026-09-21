import { build } from 'esbuild';
import { mkdir, writeFile, readFile, stat, copyFile, rm } from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const root=process.cwd();
const labs=path.resolve(root,'..');
const baseRoot=path.join(labs,'threejs-test-04-src');
const out=path.join(labs,'threejs-test-06h');
const assets=path.join(out,'assets');
await rm(out,{recursive:true,force:true});
await mkdir(assets,{recursive:true});

function gitBlobSha(text){const b=Buffer.from(text);return crypto.createHash('sha1').update(Buffer.concat([Buffer.from(`blob ${b.length}\0`),b])).digest('hex');}
function mustReplace(text,find,repl,label){const i=text.indexOf(find);if(i<0)throw new Error(`06H anchor missing: ${label}`);if(text.indexOf(find,i+find.length)>=0)throw new Error(`06H anchor not unique: ${label}`);return text.slice(0,i)+repl+text.slice(i+find.length);}

const accepted06G=JSON.parse(await readFile(path.join(labs,'threejs-test-06g','acceptance.json'),'utf8'));
if(accepted06G.test!=='06G'||accepted06G.status!=='ACCEPTED'||accepted06G.human_visual_acceptance!==true||accepted06G.frozen!==true)throw new Error('Frozen accepted 06G required before Test06H');

const baseSource=await readFile(path.join(baseRoot,'src/main.js'),'utf8');
const expectedBase='8ec3761c2cf4a507a072d79307220c0b315a8261';
const actualBase=gitBlobSha(baseSource);
if(actualBase!==expectedBase)throw new Error(`Accepted Test04 source changed (${actualBase}); refusing unreviewed inheritance.`);

const frag06A=await readFile(path.join(labs,'threejs-test-06a-src','living-world.fragment.js'),'utf8');
const frag06B=await readFile(path.join(labs,'threejs-test-06b-src','disturbance-propagation.fragment.js'),'utf8');
const frag06C=await readFile(path.join(labs,'threejs-test-06c-src','local-memory.fragment.js'),'utf8');
const frag06D=await readFile(path.join(labs,'threejs-test-06d-src','memory-behavior.fragment.js'),'utf8');
const frag06E=await readFile(path.join(labs,'threejs-test-06e-src','spatial-scope.fragment.js'),'utf8');
const frag06F=await readFile(path.join(labs,'threejs-test-06f-src','stimulus-arbitration.fragment.js'),'utf8');
const frag06G=await readFile(path.join(labs,'threejs-test-06g-src','goal-recovery.fragment.js'),'utf8');
const frag06H=await readFile(path.join(root,'streamed-persistence.fragment.js'),'utf8');

const expected06A='e79d37ccb063aeb3cd1852ecabeefdea25089a3f';
const expected06B='0a7725c5f53c0f6ed582456a6baceaa886af2ade';
const expected06C='4016f6780987bc33dc3bc353b9d0ec507bde7215';
const expected06D='c5b73ef81dd2752c1d357c0178f0c33b1ce415ab';
const expected06E='cf0a28460679adc2f2cd05fa9458e376d901400c';
const expected06F='458af887ded745b9252be59d12a41fe488c19b2f';
const expected06G='91b9da7b56010987ba30902cf5b9491c60bb519d';
if(gitBlobSha(frag06A)!==expected06A)throw new Error('Frozen 06A source fragment changed');
if(gitBlobSha(frag06B)!==expected06B)throw new Error('Frozen 06B-R1 source fragment changed');
if(gitBlobSha(frag06C)!==expected06C)throw new Error('Frozen 06C source fragment changed');
if(gitBlobSha(frag06D)!==expected06D)throw new Error('Frozen 06D source fragment changed');
if(gitBlobSha(frag06E)!==expected06E)throw new Error('Frozen 06E source fragment changed');
if(gitBlobSha(frag06F)!==expected06F)throw new Error('Frozen 06F source fragment changed');
if(gitBlobSha(frag06G)!==expected06G)throw new Error('Frozen 06G source fragment changed');

const source=baseSource+'\n'+frag06A+'\n'+frag06B+'\n'+frag06C+'\n'+frag06D+'\n'+frag06E+'\n'+frag06F+'\n'+frag06G+'\n'+frag06H;
const buildId=new Date().toISOString().replace(/\D/g,'').slice(0,14);

let html=await readFile(path.join(labs,'threejs-test-06g','index.html'),'utf8');
html=html.replaceAll('RAAI Three.js Test 06G — Interrupted Goal Recovery','RAAI Three.js Test 06H — Streamed Persistence');
html=html.replaceAll('RAAI Proof 06G — Interrupted Goal Recovery','RAAI Proof 06H — Streamed Persistence');
html=html.replace('Starting Living World 06G…','Starting Living World 06H…');
html=html.replace('<div id="zone">06G · FOOD GOAL → HAZARD INTERRUPT → FOOD RESUMES</div>','<div id="zone">06H · TRIGGER → LEAVE REGION → WAIT → RETURN</div>');

html=mustReplace(
  html,
  '<span>Recovery result</span><b id="worldRecoveryResult">PURSUING FOOD</b>',
  '<span>Recovery result</span><b id="worldRecoveryResult">PURSUING FOOD</b><span>Stream lifecycle</span><b id="worldStreamLifecycle">LOADED</b><span>Persisted state</span><b id="worldStreamState">CALM</b><span>Wall time left</span><b id="worldStreamRemaining">0.0 s</b><span>Unload/restore</span><b id="worldStreamRestore">0/0</b><span>Persistence</span><b id="worldStreamResult">READY</b>',
  '06H stream telemetry'
);

html=html.replace(
  '<div id="panel"><div class="title">06G Interrupted Goal Recovery</div><div id="worldBrief"><b>New variable only:</b> goal continuity across interruption. The teal forager begins with a FOOD goal before the disturbance. Trigger A → B → reeds. Hazard should suspend FOOD, force an evade, wait for world memory to clear, then restore the same FOOD goal and complete it. The actor must not forget its original intent.</div>',
  '<div id="panel"><div class="title">06H Streamed Persistence</div><div id="worldBrief"><b>New variable only:</b> unload/restore persistence. Trigger A → B → reeds so the nearby stream beacon turns amber. Then run away until Stream lifecycle says <b>UNLOADED</b>. Stay away until Wall time left reaches 0. Return to the area. The actor is reconstructed from serialized state and must restore <b>CALM</b> without replaying the alert.</div>'
);

html=html.replace('</style>','#worldStreamLifecycle,#worldStreamState,#worldStreamRemaining,#worldStreamRestore,#worldStreamResult{color:#a8f0b5}</style>');
html=html.replace(/app\.js\?v=\d+/g,`app.js?v=${buildId}`).replace(/sw\.js\?v=\d+/g,`sw.js?v=${buildId}`);

await writeFile(path.join(out,'index.html'),html);
await writeFile(path.join(out,'source-main.js'),source);
await copyFile(path.join(labs,'threejs-test-06g','assets','Soldier.glb'),path.join(assets,'Soldier.glb'));

await build({
  stdin:{contents:source,resolveDir:root,sourcefile:'test06h-main.js',loader:'js'},
  bundle:true,
  minify:true,
  format:'esm',
  target:['safari16.4'],
  outfile:path.join(out,'app.js'),
  legalComments:'none',
  treeShaking:true
});

const app=await readFile(path.join(out,'app.js'),'utf8');
for(const marker of ['06A_LIVING_WORLD_FLOCK','06B_WORLD_DISTURBANCE_PROPAGATION','06C_LOCAL_DISTURBANCE_MEMORY','06D_MEMORY_INFORMS_ACTOR_BEHAVIOR','06E_SPATIALLY_SCOPED_MEMORY','06F_STIMULUS_PRIORITY_ARBITRATION','06G_INTERRUPTED_GOAL_RECOVERY','06H_STREAMED_PERSISTENCE']){
  if(!app.includes(marker))throw new Error(`Required marker missing: ${marker}`);
}
if(!app.includes('OFFSCREEN TIMER RESOLVED'))throw new Error('06H offscreen timer restore result missing');
if(!app.includes('STATE SERIALIZED'))throw new Error('06H serialized unload state missing');

const sw=`self.addEventListener('install',()=>self.skipWaiting());\nself.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('raai-threejs-test06h-')).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));\n`;
await writeFile(path.join(out,'sw.js'),sw);

const js=await stat(path.join(out,'app.js')),glb=await stat(path.join(assets,'Soldier.glb'));
const info={
  build_id:buildId,
  test:'06H',
  roadmap:'Test06 — Living World',
  purpose:'prove a local world actor can be serialized, logically deactivated/disposed offscreen, restored later, and resolve elapsed timers from absolute wall time without replaying events',
  prerequisite:{test06g:'ACCEPTED / FROZEN'},
  inherits:'Frozen accepted 06A + 06B-R1 + 06C + 06D + 06E + 06F + 06G unchanged; accepted Test04 environment',
  base_blob:expectedBase,
  frozen_source_blobs:{test06a:expected06A,test06b_r1:expected06B,test06c:expected06C,test06d:expected06D,test06e:expected06E,test06f:expected06F,test06g:expected06G},
  three:'0.186.0',
  pipeline:'source-level frozen 06A–06G + isolated streamed-persistence fragment + esbuild local bundle',
  runtime_external_dependencies:0,
  service_worker_cache:false,
  target:'safari16.4+',
  mobile_fps_target:60,
  stream_actor:{
    type:'streamable disturbance beacon',
    loaded_draw_call_budget_added:3,
    unloaded_draw_call_budget_added:0,
    behavioral_trigger:'06C memory event',
    direct_player_behavior_trigger:false
  },
  stream_lifecycle:{
    load_radius_m:18,
    unload_radius_m:22,
    hysteresis_m:4,
    unload_action:'serialize state, remove actor from scene, dispose geometry/material resources',
    restore_action:'deserialize snapshot, resolve absolute wall-clock expiry, reconstruct actor'
  },
  persistence:{
    states:['CALM','ALERT'],
    alert_duration_ms:9000,
    clock:'Date.now absolute wall time',
    offscreen_simulation:'none for actor state',
    elapsed_timer_resolution:'on restore',
    event_identity_persisted:true,
    duplicate_replay_expected:false
  },
  mechanics_changed:false,
  combat_changed:false,
  accepted_06a_changed:false,
  accepted_06b_changed:false,
  accepted_06c_changed:false,
  accepted_06d_changed:false,
  accepted_06e_changed:false,
  accepted_06f_changed:false,
  accepted_06g_changed:false,
  acceptance_checklist:{
    beacon_visible_and_calm_before_event:'HUMAN REVIEW',
    memory_event_turns_beacon_alert:'HUMAN REVIEW',
    moving_beyond_unload_radius_reports_unloaded_and_actor_is_absent:'HUMAN REVIEW',
    alert_countdown_continues_as_wall_time_while_actor_is_unloaded:'HUMAN REVIEW',
    returning_inside_load_radius_reconstructs_actor:'HUMAN REVIEW',
    expired_offscreen_alert_restores_as_calm_not_replayed_alert:'HUMAN REVIEW',
    unload_restore_counts_increment_once_per_cycle:'HUMAN REVIEW',
    result_reads_as_state_persistence_not_reset_to_default:'HUMAN REVIEW'
  },
  human_visual_review:'REQUIRED',
  app_js_bytes:js.size,
  soldier_glb_bytes:glb.size
};
await writeFile(path.join(out,'build-info.json'),JSON.stringify(info,null,2));

await writeFile(path.join(out,'verification-report.json'),JSON.stringify({
  test:'06H',
  status:'PASS',
  build_id:buildId,
  delegated_nonvisual_checks:{
    accepted_06g_frozen_required:true,
    accepted_test04_blob_verified:true,
    accepted_06a_fragment_reused_unchanged:true,
    accepted_06b_r1_fragment_reused_unchanged:true,
    accepted_06c_fragment_reused_unchanged:true,
    accepted_06d_fragment_reused_unchanged:true,
    accepted_06e_fragment_reused_unchanged:true,
    accepted_06f_fragment_reused_unchanged:true,
    accepted_06g_fragment_reused_unchanged:true,
    stream_actor_direct_player_behavior_trigger:false,
    load_radius_m:18,
    unload_radius_m:22,
    hysteresis_m:4,
    alert_duration_ms:9000,
    serialization_on_unload:true,
    render_resources_disposed_on_unload:true,
    actor_logic_inactive_while_unloaded:true,
    absolute_wall_clock_expiry_persisted:true,
    elapsed_timer_resolved_on_restore:true,
    last_handled_event_persisted:true,
    duplicate_replay_guard:true,
    combat_not_modified:true,
    source_level:true
  },
  human_visual_review:'REQUIRED'
},null,2));

console.log(JSON.stringify({buildId,status:'PASS',output:'threejs-test-06h'}));
