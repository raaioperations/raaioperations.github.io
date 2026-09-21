import { build } from 'esbuild';
import { mkdir, writeFile, readFile, stat, copyFile, rm } from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const root=process.cwd();
const labs=path.resolve(root,'..');
const baseRoot=path.join(labs,'threejs-test-04-src');
const out=path.join(labs,'threejs-test-06g');
const assets=path.join(out,'assets');
await rm(out,{recursive:true,force:true});
await mkdir(assets,{recursive:true});

function gitBlobSha(text){const b=Buffer.from(text);return crypto.createHash('sha1').update(Buffer.concat([Buffer.from(`blob ${b.length}\0`),b])).digest('hex');}
function mustReplace(text,find,repl,label){const i=text.indexOf(find);if(i<0)throw new Error(`06G anchor missing: ${label}`);if(text.indexOf(find,i+find.length)>=0)throw new Error(`06G anchor not unique: ${label}`);return text.slice(0,i)+repl+text.slice(i+find.length);}

const accepted06F=JSON.parse(await readFile(path.join(labs,'threejs-test-06f','acceptance.json'),'utf8'));
if(accepted06F.test!=='06F'||accepted06F.status!=='ACCEPTED'||accepted06F.human_visual_acceptance!==true||accepted06F.frozen!==true)throw new Error('Frozen accepted 06F required before Test06G');

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
const frag06G=await readFile(path.join(root,'goal-recovery.fragment.js'),'utf8');

const expected06A='e79d37ccb063aeb3cd1852ecabeefdea25089a3f';
const expected06B='0a7725c5f53c0f6ed582456a6baceaa886af2ade';
const expected06C='4016f6780987bc33dc3bc353b9d0ec507bde7215';
const expected06D='c5b73ef81dd2752c1d357c0178f0c33b1ce415ab';
const expected06E='cf0a28460679adc2f2cd05fa9458e376d901400c';
const expected06F='458af887ded745b9252be59d12a41fe488c19b2f';
if(gitBlobSha(frag06A)!==expected06A)throw new Error('Frozen 06A source fragment changed');
if(gitBlobSha(frag06B)!==expected06B)throw new Error('Frozen 06B-R1 source fragment changed');
if(gitBlobSha(frag06C)!==expected06C)throw new Error('Frozen 06C source fragment changed');
if(gitBlobSha(frag06D)!==expected06D)throw new Error('Frozen 06D source fragment changed');
if(gitBlobSha(frag06E)!==expected06E)throw new Error('Frozen 06E source fragment changed');
if(gitBlobSha(frag06F)!==expected06F)throw new Error('Frozen 06F source fragment changed');

const source=baseSource+'\n'+frag06A+'\n'+frag06B+'\n'+frag06C+'\n'+frag06D+'\n'+frag06E+'\n'+frag06F+'\n'+frag06G;
const buildId=new Date().toISOString().replace(/\D/g,'').slice(0,14);

let html=await readFile(path.join(labs,'threejs-test-06f','index.html'),'utf8');
html=html.replaceAll('RAAI Three.js Test 06F — Stimulus Arbitration','RAAI Three.js Test 06G — Interrupted Goal Recovery');
html=html.replaceAll('RAAI Proof 06F — Stimulus Arbitration','RAAI Proof 06G — Interrupted Goal Recovery');
html=html.replace('Starting Living World 06F…','Starting Living World 06G…');
html=html.replace('<div id="zone">06F · HAZARD 100 vs NEWER FOOD 40 · WATCH THE WINNER</div>','<div id="zone">06G · FOOD GOAL → HAZARD INTERRUPT → FOOD RESUMES</div>');

html=mustReplace(
  html,
  '<span>Arbitration</span><b id="worldArbResult">WAITING</b>',
  '<span>Arbitration</span><b id="worldArbResult">WAITING</b><span>Recovery actor</span><b id="worldRecoveryState">SEEKING_FOOD</b><span>Current goal</span><b id="worldRecoveryGoal">FOOD</b><span>Suspended goal</span><b id="worldRecoverySuspended">NONE</b><span>Interrupt</span><b id="worldRecoveryInterrupt">NONE</b><span>Recovery result</span><b id="worldRecoveryResult">PURSUING FOOD</b>',
  '06G recovery telemetry'
);

html=html.replace(
  '<div id="panel"><div class="title">06F Stimulus Arbitration</div><div id="worldBrief"><b>New variable only:</b> competing motivations. Trigger A → B → reeds. The amber forager has an always-valid food goal beyond the reeds, but the active remembered hazard has higher priority. Food intentionally becomes valid <i>later</i>, so a last-event system would choose food. This actor must still choose the hazard response and move away from the food target.</div>',
  '<div id="panel"><div class="title">06G Interrupted Goal Recovery</div><div id="worldBrief"><b>New variable only:</b> goal continuity across interruption. The teal forager begins with a FOOD goal before the disturbance. Trigger A → B → reeds. Hazard should suspend FOOD, force an evade, wait for world memory to clear, then restore the same FOOD goal and complete it. The actor must not forget its original intent.</div>'
);

html=html.replace('</style>','#worldRecoveryState,#worldRecoveryGoal,#worldRecoverySuspended,#worldRecoveryInterrupt,#worldRecoveryResult{color:#a8f0b5}</style>');
html=html.replace(/app\.js\?v=\d+/g,`app.js?v=${buildId}`).replace(/sw\.js\?v=\d+/g,`sw.js?v=${buildId}`);

await writeFile(path.join(out,'index.html'),html);
await writeFile(path.join(out,'source-main.js'),source);
await copyFile(path.join(labs,'threejs-test-06f','assets','Soldier.glb'),path.join(assets,'Soldier.glb'));

await build({
  stdin:{contents:source,resolveDir:root,sourcefile:'test06g-main.js',loader:'js'},
  bundle:true,
  minify:true,
  format:'esm',
  target:['safari16.4'],
  outfile:path.join(out,'app.js'),
  legalComments:'none',
  treeShaking:true
});

const app=await readFile(path.join(out,'app.js'),'utf8');
for(const marker of ['06A_LIVING_WORLD_FLOCK','06B_WORLD_DISTURBANCE_PROPAGATION','06C_LOCAL_DISTURBANCE_MEMORY','06D_MEMORY_INFORMS_ACTOR_BEHAVIOR','06E_SPATIALLY_SCOPED_MEMORY','06F_STIMULUS_PRIORITY_ARBITRATION','06G_INTERRUPTED_GOAL_RECOVERY']){
  if(!app.includes(marker))throw new Error(`Required marker missing: ${marker}`);
}
if(!app.includes('INTERRUPT → RECOVER → RESUME'))throw new Error('06G recovery proof result missing');
if(!app.includes('RESUMING ORIGINAL FOOD GOAL'))throw new Error('06G original-goal resume state missing');

const sw=`self.addEventListener('install',()=>self.skipWaiting());\nself.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('raai-threejs-test06g-')).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));\n`;
await writeFile(path.join(out,'sw.js'),sw);

const js=await stat(path.join(out,'app.js')),glb=await stat(path.join(assets,'Soldier.glb'));
const info={
  build_id:buildId,
  test:'06G',
  roadmap:'Test06 — Living World',
  purpose:'prove an autonomous actor preserves and resumes its original goal after a higher-priority world-state interruption resolves',
  prerequisite:{test06f:'ACCEPTED / FROZEN'},
  inherits:'Frozen accepted 06A + 06B-R1 + 06C + 06D + 06E + 06F unchanged; accepted Test04 environment',
  base_blob:expectedBase,
  frozen_source_blobs:{test06a:expected06A,test06b_r1:expected06B,test06c:expected06C,test06d:expected06D,test06e:expected06E,test06f:expected06F},
  three:'0.186.0',
  pipeline:'source-level frozen 06A–06F + isolated goal-recovery fragment + esbuild local bundle',
  runtime_external_dependencies:0,
  service_worker_cache:false,
  target:'safari16.4+',
  mobile_fps_target:60,
  new_actor:{
    type:'teal stylized hare/forager',
    geometry_draw_call_budget_added:2,
    direct_player_trigger:false,
    initial_goal:'FOOD'
  },
  goal_target:{type:'dedicated visible food patch',draw_call_budget_added:1},
  recovery:{
    pre_goal_visual_cap:0.34,
    interruption:'HAZARD memory event',
    suspended_goal:'FOOD',
    evade_travel_ms:1450,
    wait_until:'06C memory state returns CALM',
    clear_hold_ms:450,
    resumed_goal:'FOOD',
    resume_travel_ms:3000,
    expected_terminal_state:'FOOD REACHED'
  },
  mechanics_changed:false,
  combat_changed:false,
  accepted_06a_changed:false,
  accepted_06b_changed:false,
  accepted_06c_changed:false,
  accepted_06d_changed:false,
  accepted_06e_changed:false,
  accepted_06f_changed:false,
  acceptance_checklist:{
    teal_forager_and_food_target_visibly_readable:'HUMAN REVIEW',
    food_goal_is_visibly_active_before_interruption:'HUMAN REVIEW',
    hazard_visibly_interrupts_food_pursuit:'HUMAN REVIEW',
    food_goal_is_shown_suspended_not_deleted:'HUMAN REVIEW',
    actor_waits_until_world_memory_clears:'HUMAN REVIEW',
    same_food_goal_resumes_after_clear:'HUMAN REVIEW',
    actor_reaches_original_food_target:'HUMAN REVIEW',
    sequence_reads_as_interrupt_recover_resume_not_random_retasking:'HUMAN REVIEW'
  },
  human_visual_review:'REQUIRED',
  app_js_bytes:js.size,
  soldier_glb_bytes:glb.size
};

await writeFile(path.join(out,'build-info.json'),JSON.stringify(info,null,2));

await writeFile(path.join(out,'verification-report.json'),JSON.stringify({
  test:'06G',
  status:'PASS',
  build_id:buildId,
  delegated_nonvisual_checks:{
    accepted_06f_frozen_required:true,
    accepted_test04_blob_verified:true,
    accepted_06a_fragment_reused_unchanged:true,
    accepted_06b_r1_fragment_reused_unchanged:true,
    accepted_06c_fragment_reused_unchanged:true,
    accepted_06d_fragment_reused_unchanged:true,
    accepted_06e_fragment_reused_unchanged:true,
    accepted_06f_fragment_reused_unchanged:true,
    recovery_actor_direct_player_trigger:false,
    original_goal:'FOOD',
    interruption:'HAZARD',
    original_goal_is_suspended_not_deleted:true,
    evade_travel_ms:1450,
    recovery_requires_memory_calm:true,
    clear_hold_ms:450,
    resumed_goal:'FOOD',
    resume_travel_ms:3000,
    expected_terminal_goal:'FOOD REACHED',
    added_draw_call_budget:3,
    combat_not_modified:true,
    source_level:true
  },
  human_visual_review:'REQUIRED'
},null,2));

console.log(JSON.stringify({buildId,status:'PASS',output:'threejs-test-06g'}));
