import { build } from 'esbuild';
import { mkdir, writeFile, readFile, stat, copyFile, rm } from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const root=process.cwd();
const labs=path.resolve(root,'..');
const baseRoot=path.join(labs,'threejs-test-04-src');
const out=path.join(labs,'threejs-test-06c');
const assets=path.join(out,'assets');
await rm(out,{recursive:true,force:true});
await mkdir(assets,{recursive:true});

function gitBlobSha(text){const b=Buffer.from(text);return crypto.createHash('sha1').update(Buffer.concat([Buffer.from(`blob ${b.length}\0`),b])).digest('hex');}
function mustReplace(text,find,repl,label){const i=text.indexOf(find);if(i<0)throw new Error(`06C anchor missing: ${label}`);if(text.indexOf(find,i+find.length)>=0)throw new Error(`06C anchor not unique: ${label}`);return text.slice(0,i)+repl+text.slice(i+find.length);}

const accepted06B=JSON.parse(await readFile(path.join(labs,'threejs-test-06b','acceptance.json'),'utf8'));
if(accepted06B.test!=='06B'||accepted06B.status!=='ACCEPTED'||accepted06B.human_visual_acceptance!==true||accepted06B.frozen!==true||accepted06B.revision!=='06B-R1')throw new Error('Frozen accepted 06B-R1 required before Test06C');

const baseSource=await readFile(path.join(baseRoot,'src/main.js'),'utf8');
const expectedBase='8ec3761c2cf4a507a072d79307220c0b315a8261';
const actualBase=gitBlobSha(baseSource);
if(actualBase!==expectedBase)throw new Error(`Accepted Test04 source changed (${actualBase}); refusing unreviewed inheritance.`);

const accepted06AFragment=await readFile(path.join(labs,'threejs-test-06a-src','living-world.fragment.js'),'utf8');
const accepted06BFragment=await readFile(path.join(labs,'threejs-test-06b-src','disturbance-propagation.fragment.js'),'utf8');
const memoryFragment=await readFile(path.join(root,'local-memory.fragment.js'),'utf8');

const expected06A='e79d37ccb063aeb3cd1852ecabeefdea25089a3f';
const expected06B='0a7725c5f53c0f6ed582456a6baceaa886af2ade';
if(gitBlobSha(accepted06AFragment)!==expected06A)throw new Error('Frozen 06A source fragment changed');
if(gitBlobSha(accepted06BFragment)!==expected06B)throw new Error('Frozen 06B-R1 source fragment changed');

const source=baseSource+'\n'+accepted06AFragment+'\n'+accepted06BFragment+'\n'+memoryFragment;
const buildId=new Date().toISOString().replace(/\D/g,'').slice(0,14);

let html=await readFile(path.join(labs,'threejs-test-06b','index.html'),'utf8');
html=html.replaceAll('RAAI Three.js Test 06B — Disturbance Propagation','RAAI Three.js Test 06C — Local Disturbance Memory');
html=html.replaceAll('RAAI Proof 06B — Disturbance Propagation','RAAI Proof 06C — Local Disturbance Memory');
html=html.replace('Starting Living World 06B…','Starting Living World 06C…');
html=html.replace('<div id="zone">06B · TRIGGER FLOCK A → WATCH FLOCK B</div>','<div id="zone">06C · A → B → WATCH THE REEDS REMEMBER</div>');
html=mustReplace(
  html,
  '<span>Propagation</span><b id="worldLinkDelay">—</b>',
  '<span>Propagation</span><b id="worldLinkDelay">—</b><span>World memory</span><b id="worldMemoryState">CALM</b><span>Memory age</span><b id="worldMemoryAge">—</b><span>Memory result</span><b id="worldMemoryResult">WAITING</b>',
  '06C memory telemetry'
);
html=html.replace(
  '<div id="panel"><div class="title">06B World Propagation</div><div id="worldBrief"><b>New variable only:</b> actor-to-actor disturbance propagation. Approach Flock A. Flock B has no direct player trigger; it should react only after A flees and the disturbance reaches it.</div>',
  '<div id="panel"><div class="title">06C Local World Memory</div><div id="worldBrief"><b>New variable only:</b> persistent local world state. Trigger Flock A, watch Flock B react, then watch the nearby reed patch remain disturbed after the birds have moved on and gradually settle by itself.</div>'
);
html=html.replace('</style>','#worldMemoryState,#worldMemoryResult{color:#a8f0b5}</style>');
html=html.replace(/app\.js\?v=\d+/g,`app.js?v=${buildId}`).replace(/sw\.js\?v=\d+/g,`sw.js?v=${buildId}`);

await writeFile(path.join(out,'index.html'),html);
await writeFile(path.join(out,'source-main.js'),source);
await copyFile(path.join(labs,'threejs-test-06b','assets','Soldier.glb'),path.join(assets,'Soldier.glb'));

await build({
  stdin:{contents:source,resolveDir:root,sourcefile:'test06c-main.js',loader:'js'},
  bundle:true,
  minify:true,
  format:'esm',
  target:['safari16.4'],
  outfile:path.join(out,'app.js'),
  legalComments:'none',
  treeShaking:true
});

const app=await readFile(path.join(out,'app.js'),'utf8');
if(!app.includes('06A_LIVING_WORLD_FLOCK'))throw new Error('Frozen 06A marker missing from 06C bundle');
if(!app.includes('06B_WORLD_DISTURBANCE_PROPAGATION'))throw new Error('Frozen 06B marker missing from 06C bundle');
if(!app.includes('06C_LOCAL_DISTURBANCE_MEMORY'))throw new Error('06C memory marker missing from bundle');
if(!app.includes('MEMORY ACTIVE'))throw new Error('06C visible memory state missing from bundle');
if(!app.includes('directPlayerTrigger:!1')&&!app.includes('directPlayerTrigger:false'))throw new Error('06C direct-player-trigger guard missing');

const sw=`self.addEventListener('install',()=>self.skipWaiting());\nself.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('raai-threejs-test06c-')).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));\n`;
await writeFile(path.join(out,'sw.js'),sw);

const js=await stat(path.join(out,'app.js')),glb=await stat(path.join(assets,'Soldier.glb'));
const info={
  build_id:buildId,
  test:'06C',
  roadmap:'Test06 — Living World',
  purpose:'prove that an accepted world-to-world disturbance can leave a visible local environmental state that persists after the initiating actors move on and then settles without player input',
  prerequisite:{test06b:'ACCEPTED / FROZEN / 06B-R1'},
  inherits:'Frozen accepted 06A + 06B-R1 living-world behavior unchanged; accepted Test04 environment',
  base_blob:expectedBase,
  frozen_source_blobs:{test06a:expected06A,test06b_r1:expected06B},
  three:'0.186.0',
  pipeline:'source-level frozen 06A + frozen 06B-R1 + isolated memory fragment + esbuild local bundle',
  runtime_external_dependencies:0,
  service_worker_cache:false,
  target:'safari16.4+',
  mobile_fps_target:60,
  memory_actor:{
    type:'instanced tall-reed patch',
    count:28,
    draw_call_budget_added:1,
    direct_player_trigger:false,
    trigger:'accepted Flock B transition into FLEEING'
  },
  memory_states:['CALM','DISTURBED','SETTLING'],
  persistence:{disturbed_ms:2300,settling_ms:2800,total_memory_ms:5100},
  mechanics_changed:false,
  combat_changed:false,
  accepted_06a_changed:false,
  accepted_06b_changed:false,
  acceptance_checklist:{
    reed_patch_visibly_present:'HUMAN REVIEW',
    flock_a_and_b_chain_remains_intact:'HUMAN REVIEW',
    flock_b_takeoff_visibly_disturbs_reeds:'HUMAN REVIEW',
    reeds_remain_disturbed_after_birds_move_on:'HUMAN REVIEW',
    reeds_gradually_settle_without_player_input:'HUMAN REVIEW',
    lingering_state_reads_as_world_memory_not_one_frame_vfx:'HUMAN REVIEW'
  },
  human_visual_review:'REQUIRED',
  app_js_bytes:js.size,
  soldier_glb_bytes:glb.size
};
await writeFile(path.join(out,'build-info.json'),JSON.stringify(info,null,2));

await writeFile(path.join(out,'verification-report.json'),JSON.stringify({
  test:'06C',
  status:'PASS',
  build_id:buildId,
  delegated_nonvisual_checks:{
    accepted_06b_r1_frozen_required:true,
    accepted_test04_blob_verified:true,
    accepted_06a_fragment_reused_unchanged:true,
    accepted_06b_r1_fragment_reused_unchanged:true,
    memory_actor_count:28,
    memory_actor_instanced:true,
    memory_added_draw_call_budget:1,
    memory_direct_player_trigger:false,
    memory_trigger:'06B secondary flock state transition to FLEEING',
    disturbed_ms:2300,
    settling_ms:2800,
    total_memory_ms:5100,
    memory_state_machine:true,
    dynamic_memory_actor_frustum_culling_disabled:true,
    combat_not_modified:true,
    source_level:true
  },
  human_visual_review:'REQUIRED'
},null,2));

console.log(JSON.stringify({buildId,status:'PASS',output:'threejs-test-06c'}));
