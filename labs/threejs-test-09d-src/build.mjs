import {build} from 'esbuild';
import {mkdir,writeFile,readFile,stat,rm} from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import {runAssetIntegrationProof} from './proof.mjs';
import {make09DHtml} from './page.mjs';

const root=process.cwd();
const labs=path.resolve(root,'..');
const repo=path.resolve(root,'../..');
const out=path.join(labs,'threejs-test-09d');
const source09bDir=path.join(labs,'threejs-test-09b-src');
const assetRoot=path.join(repo,'assets','3d','sunlit-basin','v1');

await rm(out,{recursive:true,force:true});
await mkdir(out,{recursive:true});

const blobSha=text=>{
  const b=Buffer.from(text);
  return crypto.createHash('sha1').update(Buffer.concat([Buffer.from('blob '+b.length+'\0'),b])).digest('hex');
};
const sha256=buf=>crypto.createHash('sha256').update(buf).digest('hex');
const assert=(c,m)=>{if(!c)throw new Error('09D build proof failed: '+m);};

const source09B=await readFile(path.join(labs,'threejs-test-09b','source-main.js'),'utf8');
const index09B=await readFile(path.join(labs,'threejs-test-09b','index.html'),'utf8');
const build09B=JSON.parse(await readFile(path.join(labs,'threejs-test-09b','build-info.json'),'utf8'));
const verify09B=JSON.parse(await readFile(path.join(labs,'threejs-test-09b','verification-report.json'),'utf8');
const manifest09C=JSON.parse(await readFile(path.join(assetRoot,'asset_manifest.generated.json'),'utf8'));
const verify09C=JSON.parse(await readFile(path.join(labs,'threejs-test-09c','verification-report.json'),'utf8'));
const status09C=JSON.parse(await readFile(path.join(labs,'threejs-test-09c','status.json'),'utf8'));

const expectedSource09B='d08363c52fc6e3858f50942d51aab6401292e4a5';
const expectedIndex09B='43529c044dd3b5474696bc9414318d25d7671878';
assert(blobSha(source09B)===expectedSource09B,'09B source-main changed');
assert(blobSha(index09B)===expectedIndex09B,'09B index changed');
assert(build09B.build_id==='20260922045902','expected 09B repaired Pass 2 build');
assert(verify09B.status==='PASS','09B automated structural/runtime proof must pass');
assert(status09C.automated_verification==='PASS','09C generated verification status');
assert(verify09C.status==='PASS'&&verify09C.asset_count_passed===13,'09C 13/13 GLBs must pass');

for(const [name,meta] of Object.entries(verify09C.assets)){
  const bytes=await readFile(path.join(assetRoot,name));
  assert(sha256(bytes)===meta.sha256,'09C GLB hash changed: '+name);
}

const delegated=runAssetIntegrationProof(manifest09C,verify09C);
const frag=await readFile(path.join(root,'asset-integration.fragment.js'),'utf8');
const source=source09B+'\n'+frag;

const inheritedRaf=(source09B.match(/requestAnimationFrame\s*\(/g)||[]).length;
const finalRaf=(source.match(/requestAnimationFrame\s*\(/g)||[]).length;
assert(finalRaf===inheritedRaf,'09D must not add RAF loop');
assert(!/requestAnimationFrame\s*\(/.test(frag),'09D fragment contains prohibited RAF loop');

const buildId=new Date().toISOString().replace(/\D/g,'').slice(0,14);
await writeFile(path.join(out,'index.html'),make09DHtml(index09B,buildId));
await writeFile(path.join(out,'source-main.js'),source);

await build({
  stdin:{
    contents:source,
    resolveDir:source09bDir,
    sourcefile:'test09d-main.js',
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
for(const marker of ['09B_VERTICAL_BEAUTY_SLICE','09D_SUNLIT_BASIN_ASSET_INTEGRATION']){
  assert(app.includes(marker),'runtime marker missing '+marker);
}
for(const token of [
  '13 GLBs',
  'PROTOTYPES REPLACED',
  'MATERIAL BATCHES',
  'TEST08 PRESERVED',
  'HUMAN ASSET REVIEW REQUIRED'
]){
  assert(app.includes(token),'09D runtime token missing '+token);
}

const sw="self.addEventListener('install',()=>self.skipWaiting());\nself.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('raai-threejs-test09d-')).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));\n";
await writeFile(path.join(out,'sw.js'),sw);

const appStat=await stat(path.join(out,'app.js'));
const info={
  build_id:buildId,
  test:'09D',
  roadmap:'Test09 — Presentation Foundation',
  milestone:'Sunlit Basin Asset Integration Proof',
  classification:'ASSET PIPELINE / RUNTIME INTEGRATION PROOF',
  purpose:'load all 13 verified 09C GLBs into the live Sunlit Basin, replace eight 09B prototype drawable families, batch static placements by PBR material family, and prove frozen Test08 runtime/performance invariants remain intact',
  prerequisites:{
    test08:'CLOSED / ACCEPTED / FROZEN',
    test09a:'ACCEPTED / FROZEN / CANONICAL',
    test09b:'OPEN / STRUCTURAL+RUNTIME PASS / PRESENTATION NOT ACCEPTED',
    test09c:'13 GLBs GENERATED / AUTOMATED VERIFICATION PASS'
  },
  frozen_inputs:{
    test09b_build:'20260922045902',
    test09b_source_main:expectedSource09B,
    test09b_index:expectedIndex09B,
    asset_manifest_09c_blob:'4e6cfab00a4e89de7767c35c418f55a30bdcd67e',
    asset_verification_09c_blob:'15018ccd298ec6f60ef28ede6b194179297ec3f3'
  },
  integration:delegated,
  batching:'static geometry merged by approved 09C PBR material family',
  runtime_external_dependencies:0,
  target:'safari16.4+',
  mobile_fps_target:60,
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
  presentation_acceptance:false,
  human_runtime_asset_review:'REQUIRED',
  app_js_bytes:appStat.size
};
await writeFile(path.join(out,'build-info.json'),JSON.stringify(info,null,2)+'\n');

await writeFile(path.join(out,'verification-report.json'),JSON.stringify({
  test:'09D',
  status:'PASS',
  build_id:buildId,
  classification:'ASSET PIPELINE / RUNTIME INTEGRATION PROOF',
  delegated_nonvisual_checks:{
    09b_source_reused_unchanged:true,
    09c_asset_hashes_verified:true,
    all_13_glbs_referenced:true,
    all_13_asset_families_have_placements:true,
    eight_prototype_families_targeted_for_replacement:true,
    placement_transforms_finite:true,
    approved_material_families_only:true,
    static_material_batch_count_within_12:true,
    integrated_asset_triangle_plan_within_18000:true,
    frozen_06j_draw_ceiling_preserved:120,
    frozen_06j_triangle_ceiling_preserved:350000,
    added_request_animation_frame_calls:finalRaf-inheritedRaf,
    external_runtime_dependencies:0,
    safari_target:'16.4+'
  },
  integration_plan:delegated,
  human_runtime_asset_review:'REQUIRED',
  presentation_acceptance:false,
  acceptance_authority:'USER'
},null,2)+'\n');

await writeFile(path.join(out,'status.json'),JSON.stringify({
  test:'09D',
  milestone:'Sunlit Basin Asset Integration Proof',
  status:'DEPLOYED_HUMAN_REVIEW_REQUIRED',
  build_id:buildId,
  supports_open_milestone:'09B — Vertical Beauty Slice',
  presentation_acceptance:false,
  frozen:false
},null,2)+'\n');

console.log(JSON.stringify({buildId,status:'PASS',output:'threejs-test-09d',integration:delegated}));
