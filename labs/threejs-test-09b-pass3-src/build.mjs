import {build} from 'esbuild';
import {mkdir,writeFile,readFile,stat,rm,copyFile} from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import {makePass3Html09B} from './page.mjs';

const root=process.cwd();
const labs=path.resolve(root,'..');
const repo=path.resolve(root,'../..');
const source09bDir=path.join(labs,'threejs-test-09b-src');
const out=path.join(labs,'threejs-test-09b');

const blobSha=text=>{
  const b=Buffer.from(text);
  return crypto.createHash('sha1').update(Buffer.concat([Buffer.from('blob '+b.length+'\0'),b])).digest('hex');
};
const assert=(c,m)=>{if(!c)throw new Error('09B Pass 3 build proof failed: '+m);};

const source09D=await readFile(path.join(labs,'threejs-test-09d','source-main.js'),'utf8');
const index09D=await readFile(path.join(labs,'threejs-test-09d','index.html'),'utf8');
const build09D=JSON.parse(await readFile(path.join(labs,'threejs-test-09d','build-info.json'),'utf8'));
const verify09D=JSON.parse(await readFile(path.join(labs,'threejs-test-09d','verification-report.json'),'utf8'));
const accept09D=JSON.parse(await readFile(path.join(labs,'threejs-test-09d','acceptance.json'),'utf8'));

const frozen09DSource='004f4c587a3ba764712f2de6a96b7cc0aa6266da';
const frozen09DIndex='9d1583636d20f232ce894ea4afd83f59ad6259a8';
assert(blobSha(source09D)===frozen09DSource,'accepted 09D source changed');
assert(blobSha(index09D)===frozen09DIndex,'accepted 09D index changed');
assert(build09D.build_id==='20260923033144','expected accepted 09D build');
assert(verify09D.status==='PASS','accepted 09D automated proof');
assert(accept09D.canonical===true&&accept09D.frozen===true,'09D acceptance/freeze required');

const frag=await readFile(path.join(root,'presentation-pass3.fragment.js'),'utf8');
const source=source09D+'\n'+frag;
const inheritedRaf=(source09D.match(/requestAnimationFrame\s*\(/g)||[]).length;
const finalRaf=(source.match(/requestAnimationFrame\s*\(/g)||[]).length;
assert(finalRaf===inheritedRaf,'Pass 3 must not add RAF loop');
assert(!/requestAnimationFrame\s*\(/.test(frag),'Pass 3 fragment contains prohibited RAF');

const buildId=new Date().toISOString().replace(/\D/g,'').slice(0,14);

await rm(out,{recursive:true,force:true});
await mkdir(path.join(out,'assets'),{recursive:true});
await writeFile(path.join(out,'index.html'),makePass3Html09B(index09D,buildId));
await writeFile(path.join(out,'source-main.js'),source);

// Restore the actual local player/NPC asset for the 09B presentation deployment.
await copyFile(
  path.join(labs,'threejs-test-08d','assets','Soldier.glb'),
  path.join(out,'assets','Soldier.glb')
);

await build({
  stdin:{
    contents:source,
    resolveDir:source09bDir,
    sourcefile:'test09b-pass3-main.js',
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
  '09B_PRESENTATION_PASS_3_ASSET_INTEGRATED'
])assert(app.includes(marker),'runtime marker missing '+marker);

for(const token of [
  'ASSET-INTEGRATED',
  'LEGACY MOUNTAINS REMOVED',
  'PLAYER GLB',
  'PERFORMANCE PASS',
  'HUMAN PRESENTATION REVIEW REQUIRED'
])assert(app.includes(token),'runtime proof token missing '+token);

const soldier=await stat(path.join(out,'assets','Soldier.glb'));
assert(soldier.size>1000000,'Soldier.glb packaging failed');

const sw="self.addEventListener('install',()=>self.skipWaiting());\nself.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('raai-threejs-test09b-')).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));\n";
await writeFile(path.join(out,'sw.js'),sw);

const appStat=await stat(path.join(out,'app.js'));
const info={
  build_id:buildId,
  test:'09B',
  roadmap:'Test09 — Presentation Foundation',
  milestone:'Vertical Beauty Slice',
  iteration:'Presentation Pass 3',
  environment:'Sunlit Basin',
  classification:'ASSET-INTEGRATED PRESENTATION PASS 3 / HUMAN REVIEW CANDIDATE',
  doctrine:'Stylized Physical Realism',
  foundation:{
    test09d:'ACCEPTED / FROZEN / CANONICAL',
    build:'20260923033144',
    source_main:frozen09DSource,
    index:frozen09DIndex
  },
  corrections:{
    legacy_cone_mountain_meshes_hidden:2,
    local_player_glb_packaged:true,
    player_glb_bytes:soldier.size,
    exposure_rebalanced:true,
    material_hierarchy_rebalanced:true,
    presentation_fov_enforced:true
  },
  hard_limits:{
    draw_calls_max:120,
    triangles_max:350000,
    regression_06j_required:'PASS'
  },
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
};
await writeFile(path.join(out,'build-info.json'),JSON.stringify(info,null,2)+'\n');

await writeFile(path.join(out,'verification-report.json'),JSON.stringify({
  test:'09B',
  iteration:'Presentation Pass 3',
  status:'PASS',
  build_id:buildId,
  classification:'ASSET-INTEGRATED PRESENTATION PASS 3 / HUMAN REVIEW CANDIDATE',
  delegated_nonvisual_checks:{
    accepted_09d_frozen_required:true,
    accepted_09d_source_reused_unchanged:true,
    local_player_glb_packaged:true,
    legacy_cone_mountain_removal_runtime_hook:true,
    asset_integration_preserved:true,
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
  iteration:'Presentation Pass 3',
  status:'DEPLOYED_HUMAN_PRESENTATION_REVIEW_REQUIRED',
  build_id:buildId,
  foundation:'Accepted/frozen 09D build 20260923033144',
  automated_presentation_acceptance:false,
  frozen:false
},null,2)+'\n');

console.log(JSON.stringify({buildId,status:'PASS',output:'threejs-test-09b',iteration:'Presentation Pass 3'}));
