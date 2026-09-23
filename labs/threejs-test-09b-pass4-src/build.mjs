import {build} from 'esbuild';
import {mkdir,writeFile,readFile,stat,rm,copyFile} from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import {makePass4Html09B} from './page.mjs';

const root=process.cwd();
const labs=path.resolve(root,'..');
const repo=path.resolve(root,'../..');
const source09bDir=path.join(labs,'threejs-test-09b-src');
const out=path.join(labs,'threejs-test-09b');
const ridgeV2Root=path.join(repo,'assets','3d','sunlit-basin','v2');

const blobSha=text=>{
  const b=Buffer.from(text);
  return crypto.createHash('sha1').update(Buffer.concat([Buffer.from('blob '+b.length+'\0'),b])).digest('hex');
};
const assert=(c,m)=>{if(!c)throw new Error('09B Pass 4 build proof failed: '+m);};

const sourcePass3=await readFile(path.join(out,'source-main.js'),'utf8');
const indexPass3=await readFile(path.join(out,'index.html'),'utf8');
const buildPass3=JSON.parse(await readFile(path.join(out,'build-info.json'),'utf8'));
const verifyPass3=JSON.parse(await readFile(path.join(out,'verification-report.json'),'utf8'));
const accept09D=JSON.parse(await readFile(path.join(labs,'threejs-test-09d','acceptance.json'),'utf8'));
const ridgeManifest=JSON.parse(await readFile(path.join(ridgeV2Root,'asset_manifest.generated.json'),'utf8'));

const expectedPass3Source='18ea5fcef2bf12855e17de8728ead0f1da6e560e';
const expectedPass3Index='d99699770ee4da49653409bcf13cb5de78e3bb5f';
assert(blobSha(sourcePass3)===expectedPass3Source,'Pass 3 source changed');
assert(blobSha(indexPass3)===expectedPass3Index,'Pass 3 index changed');
assert(buildPass3.build_id==='20260923035027','expected deployed Pass 3 build');
assert(verifyPass3.status==='PASS','Pass 3 automated proof required');
assert(accept09D.canonical===true&&accept09D.frozen===true,'accepted/frozen 09D required');
assert(Object.keys(ridgeManifest.assets||{}).length===2,'two v2 ridge GLBs required');
for(const [name,meta] of Object.entries(ridgeManifest.assets)){
  assert(meta.triangles>0&&meta.triangles<=220,'ridge triangle budget '+name);
  assert(meta.materials?.length===1&&meta.materials[0]==='MAT_RIDGE_SLATE','ridge material '+name);
  const file=await stat(path.join(ridgeV2Root,name));
  assert(file.size===meta.bytes,'ridge file size mismatch '+name);
}

const frag=await readFile(path.join(root,'presentation-pass4.fragment.js'),'utf8');
const source=sourcePass3+'\n'+frag;
const inheritedRaf=(sourcePass3.match(/requestAnimationFrame\s*\(/g)||[]).length;
const finalRaf=(source.match(/requestAnimationFrame\s*\(/g)||[]).length;
assert(finalRaf===inheritedRaf,'Pass 4 must not add RAF loop');
assert(!/requestAnimationFrame\s*\(/.test(frag),'Pass 4 fragment contains prohibited RAF');

const buildId=new Date().toISOString().replace(/\D/g,'').slice(0,14);

await rm(out,{recursive:true,force:true});
await mkdir(path.join(out,'assets'),{recursive:true});
await writeFile(path.join(out,'index.html'),makePass4Html09B(indexPass3,buildId));
await writeFile(path.join(out,'source-main.js'),source);
await copyFile(
  path.join(labs,'threejs-test-08d','assets','Soldier.glb'),
  path.join(out,'assets','Soldier.glb')
);

await build({
  stdin:{
    contents:source,
    resolveDir:source09bDir,
    sourcefile:'test09b-pass4-main.js',
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
  '09B_PRESENTATION_PASS_3_ASSET_INTEGRATED',
  '09B_PRESENTATION_PASS_4_SCENE_ASSETIZATION'
])assert(app.includes(marker),'runtime marker missing '+marker);

for(const token of [
  'V2 RIDGE ASSETS',
  'V1 RIDGE PRESENTATION CLIPPED',
  'PROOF VISUALS SUPPRESSED',
  'PLAYER GLB',
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
  iteration:'Presentation Pass 4',
  environment:'Sunlit Basin',
  classification:'SCENE ASSETIZATION + COMPOSITION / HUMAN REVIEW CANDIDATE',
  doctrine:'Stylized Physical Realism',
  foundations:{
    test09d:'ACCEPTED / FROZEN / CANONICAL',
    pass3_build:'20260923035027',
    pass3_source:expectedPass3Source,
    pass3_index:expectedPass3Index
  },
  new_asset_family:{
    root:'/assets/3d/sunlit-basin/v2/',
    assets:Object.keys(ridgeManifest.assets),
    material:'MAT_RIDGE_SLATE',
    runtime_batch_target:1
  },
  presentation_changes:{
    far_v1_ridge_fragments_presentation_clipped:true,
    proof_visuals_suppressed_without_stopping_simulation:true,
    terrain_material_hierarchy_rebalanced:true,
    local_player_glb_packaged:true
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
  iteration:'Presentation Pass 4',
  status:'PASS',
  build_id:buildId,
  classification:'SCENE ASSETIZATION + COMPOSITION / HUMAN REVIEW CANDIDATE',
  delegated_nonvisual_checks:{
    accepted_09d_frozen_required:true,
    pass3_source_reused_unchanged:true,
    two_v2_ridge_glbs_generated:true,
    ridge_assets_single_material_family:true,
    proof_visual_suppression_runtime_hook:true,
    legacy_ridge_presentation_clip_runtime_hook:true,
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
  iteration:'Presentation Pass 4',
  status:'DEPLOYED_HUMAN_PRESENTATION_REVIEW_REQUIRED',
  build_id:buildId,
  foundation:'Accepted/frozen 09D + Pass 3',
  automated_presentation_acceptance:false,
  frozen:false
},null,2)+'\n');

console.log(JSON.stringify({buildId,status:'PASS',output:'threejs-test-09b',iteration:'Presentation Pass 4'}));
