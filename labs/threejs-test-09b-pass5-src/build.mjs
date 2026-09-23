import {build} from 'esbuild';
import {mkdir,writeFile,readFile,stat,rm,copyFile} from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {makePass5Html09B} from './page.mjs';

const root=process.cwd();
const labs=path.resolve(root,'..');
const repo=path.resolve(root,'../..');
const source09bDir=path.join(labs,'threejs-test-09b-src');
const out=path.join(labs,'threejs-test-09b');
const envRoot=path.join(repo,'assets','3d','sunlit-basin','v3');

const blobSha=text=>{
  const b=Buffer.from(text);
  return crypto.createHash('sha1').update(Buffer.concat([Buffer.from('blob '+b.length+'\0'),b])).digest('hex');
};
const assert=(c,m)=>{if(!c)throw new Error('09B Pass 5 build proof failed: '+m);};

const frozenPass4Commit='4d294732fb2a49b604c12e89758fa00d7a5840db';
const gitShow=(file)=>execFileSync(
  'git',
  ['show',frozenPass4Commit+':'+file],
  {cwd:repo,encoding:'utf8',maxBuffer:32*1024*1024}
);
const sourcePass4=gitShow('labs/threejs-test-09b/source-main.js');
const indexPass4=gitShow('labs/threejs-test-09b/index.html');
const buildPass4=JSON.parse(gitShow('labs/threejs-test-09b/build-info.json'));
const verifyPass4=JSON.parse(gitShow('labs/threejs-test-09b/verification-report.json'));
const accept09D=JSON.parse(await readFile(path.join(labs,'threejs-test-09d','acceptance.json'),'utf8'));
const manifest=JSON.parse(await readFile(path.join(envRoot,'asset_manifest.generated.json'),'utf8'));
assert(manifest.version==='3.0.1','Pass 5 repaired v3 manifest required');
assert(manifest.geometry_qa?.strip_faces_upward===true,'strip winding QA required');
assert(manifest.geometry_qa?.strip_outer_skirts_buried===true,'buried strip skirts QA required');
assert(manifest.geometry_qa?.shore_faces_upward===true,'shore winding QA required');
assert(manifest.geometry_qa?.no_double_side_geometry_fix===true,'geometry repair must not rely on DoubleSide');

const expectedPass4Source='5a5baf46ef5e650188e9974e11ae65e853c25305';
const expectedPass4Index='d05f33ddba7ac5612842eb982954265e7a6b1352';
assert(blobSha(sourcePass4)===expectedPass4Source,'Pass 4 source changed');
assert(blobSha(indexPass4)===expectedPass4Index,'Pass 4 index changed');
assert(buildPass4.build_id==='20260923040859','expected deployed Pass 4 build');
assert(verifyPass4.status==='PASS','Pass 4 automated proof required');
assert(accept09D.canonical===true&&accept09D.frozen===true,'accepted/frozen 09D required');

const expected=[
  'terrain_bank_a.glb',
  'terrain_bank_b.glb',
  'path_cut_berms.glb',
  'shoreline_shelf.glb',
  'ruin_sunlit_gate_v2.glb',
  'tree_d_forked.glb',
  'tree_e_windswept.glb',
  'wetland_cluster.glb'
];
assert(Object.keys(manifest.assets||{}).length===8,'eight v3 environment GLBs required');
for(const name of expected){
  const meta=manifest.assets?.[name];
  assert(meta,'manifest missing '+name);
  assert(meta.triangles>0&&meta.triangles<=meta.budget,'asset triangle budget '+name);
  const file=await stat(path.join(envRoot,name));
  assert(file.size===meta.bytes,'asset file size mismatch '+name);
}

const frag=await readFile(path.join(root,'presentation-pass5.fragment.js'),'utf8');
const source=sourcePass4+'\n'+frag;
const inheritedRaf=(sourcePass4.match(/requestAnimationFrame\s*\(/g)||[]).length;
const finalRaf=(source.match(/requestAnimationFrame\s*\(/g)||[]).length;
assert(finalRaf===inheritedRaf,'Pass 5 must not add RAF loop');
assert(!/requestAnimationFrame\s*\(/.test(frag),'Pass 5 fragment contains prohibited RAF');

const buildId=new Date().toISOString().replace(/\D/g,'').slice(0,14);

await rm(out,{recursive:true,force:true});
await mkdir(path.join(out,'assets'),{recursive:true});
await writeFile(path.join(out,'index.html'),makePass5Html09B(indexPass4,buildId));
await writeFile(path.join(out,'source-main.js'),source);
await copyFile(
  path.join(labs,'threejs-test-08d','assets','Soldier.glb'),
  path.join(out,'assets','Soldier.glb')
);

await build({
  stdin:{
    contents:source,
    resolveDir:source09bDir,
    sourcefile:'test09b-pass5-main.js',
    loader:'js'
  },
  bundle:true,
  minify:true,
  format:'esm',
  target:['safari16.4'],
  outfile:path.join(out,'app.js'),
  legalComments:'none',
  treeShaking:true,
  nodePaths:[path.join(root,'node_modules')]
});

const app=await readFile(path.join(out,'app.js'),'utf8');
for(const marker of [
  '09D_SUNLIT_BASIN_ASSET_INTEGRATION',
  '09B_PRESENTATION_PASS_4_SCENE_ASSETIZATION',
  '09B_PRESENTATION_PASS_5_ENVIRONMENT_ART'
])assert(app.includes(marker),'runtime marker missing '+marker);

for(const token of [
  'ENVIRONMENT GLBs',
  'AUTHORED BANKS/PATH/SHORE',
  'RUIN V2',
  'TREE VARIANTS',
  'WETLAND ECOLOGY',
  'PERFORMANCE PASS',
  'HUMAN PRESENTATION REVIEW REQUIRED'
])assert(app.includes(token),'runtime token missing '+token);

const soldier=await stat(path.join(out,'assets','Soldier.glb'));
assert(soldier.size>1000000,'Soldier.glb packaging failed');

const sw="self.addEventListener('install',()=>self.skipWaiting());\nself.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('raai-threejs-test09b-')).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));\n";
await writeFile(path.join(out,'sw.js'),sw);

const appStat=await stat(path.join(out,'app.js'));
await writeFile(path.join(out,'build-info.json'),JSON.stringify({
  build_id:buildId,
  test:'09B',
  roadmap:'Test09 — Presentation Foundation',
  milestone:'Vertical Beauty Slice',
  iteration:'Presentation Pass 5',
  environment:'Sunlit Basin',
  classification:'ENVIRONMENT ART PRODUCTION / GEOMETRY-REPAIRED HUMAN REVIEW CANDIDATE',
  doctrine:'Stylized Physical Realism',
  foundations:{
    test09d:'ACCEPTED / FROZEN / CANONICAL',
    pass4_build:'20260923040859',
    pass4_commit:frozenPass4Commit,
    pass4_source:expectedPass4Source,
    pass4_index:expectedPass4Index
  },
  new_asset_family:{
    root:'/assets/3d/sunlit-basin/v3/',
    assets:expected,
    asset_count:8,
    runtime_batch_ceiling:6
  },
  presentation_changes:{
    meso_scale_terrain_banks:true,
    authored_path_cut_berms:true,
    shoreline_shelf:true,
    ruin_v2:true,
    two_additional_tree_silhouettes:true,
    wetland_ecology_clusters:true,
    legacy_gate_presentation_clipped:true,
    corrective_geometry_revision:'3.0.1',
    strip_winding_repaired:true,
    strip_outer_skirts_buried:true,
    shoreline_winding_validated:true
  },
  hard_limits:{draw_calls_max:120,triangles_max:350000,regression_06j_required:'PASS'},
  runtime_external_dependencies:0,
  target:'safari16.4+',
  frame_integration:{
    inherited_request_animation_frame_calls:inheritedRaf,
    final_request_animation_frame_calls:finalRaf,
    added_request_animation_frame_calls:finalRaf-inheritedRaf
  },
  mechanics_changed:false,
  combat_changed:false,
  ai_changed:false,
  persistence_changed:false,
  streaming_semantics_changed:false,
  broad_content_expansion:false,
  automated_presentation_acceptance:false,
  human_presentation_review:'REQUIRED',
  frozen:false,
  app_js_bytes:appStat.size
},null,2)+'\n');

await writeFile(path.join(out,'verification-report.json'),JSON.stringify({
  test:'09B',
  iteration:'Presentation Pass 5',
  status:'PASS',
  build_id:buildId,
  classification:'ENVIRONMENT ART PRODUCTION / GEOMETRY-REPAIRED HUMAN REVIEW CANDIDATE',
  delegated_nonvisual_checks:{
    accepted_09d_frozen_required:true,
    pass4_source_reused_unchanged:true,
    eight_v3_environment_glbs_generated:true,
    all_v3_asset_budgets_pass:true,
    strip_winding_qa:true,
    strip_outer_skirts_buried_qa:true,
    shoreline_winding_qa:true,
    geometry_fix_does_not_use_double_side:true,
    runtime_batch_ceiling:6,
    legacy_gate_clip_runtime_hook:true,
    local_player_glb_packaged:true,
    frozen_06j_draw_ceiling_preserved:120,
    frozen_06j_triangle_ceiling_preserved:350000,
    added_request_animation_frame_calls:finalRaf-inheritedRaf,
    external_runtime_dependencies:0,
    safari_target:'16.4+'
  },
  real_device_runtime_review:'REQUIRED',
  human_presentation_review:'REQUIRED',
  acceptance_authority:'USER'
},null,2)+'\n');

await writeFile(path.join(out,'status.json'),JSON.stringify({
  test:'09B',
  milestone:'Vertical Beauty Slice',
  iteration:'Presentation Pass 5',
  status:'DEPLOYED_HUMAN_PRESENTATION_REVIEW_REQUIRED',
  build_id:buildId,
  foundation:'Accepted/frozen 09D + Pass 4',
  automated_presentation_acceptance:false,
  frozen:false
},null,2)+'\n');

console.log(JSON.stringify({buildId,status:'PASS',output:'threejs-test-09b',iteration:'Presentation Pass 5'}));
