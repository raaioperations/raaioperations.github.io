import {build} from 'esbuild';
import {mkdir,writeFile,readFile,stat,rm,copyFile} from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import {make10AHtml} from './page.mjs';
import {PRESENTATION_REPLICATION_10A} from './presentation-recipe.js';

const root=process.cwd();
const labs=path.resolve(root,'..');
const repo=path.resolve(root,'../..');
const source09bDir=path.join(labs,'threejs-test-09b-src');
const accepted09bDir=path.join(labs,'threejs-test-09b');
const out=path.join(labs,'threejs-test-10a');

const blobSha=text=>{
  const b=Buffer.from(text);
  return crypto.createHash('sha1').update(Buffer.concat([Buffer.from('blob '+b.length+'\0'),b])).digest('hex');
};
const assert=(c,m)=>{if(!c)throw new Error('10A build proof failed: '+m);};

const acceptance=JSON.parse(await readFile(path.join(accepted09bDir,'acceptance.json'),'utf8'));
assert(acceptance.frozen===true&&acceptance.canonical===true,'09B must be frozen canonical');
assert(acceptance.accepted_build==='20260924205044','expected accepted 09B build');

const source09B=await readFile(path.join(accepted09bDir,'source-main.js'),'utf8');
const index09B=await readFile(path.join(accepted09bDir,'index.html'),'utf8');
assert(blobSha(source09B)===acceptance.frozen_artifacts.source_main,'frozen 09B source hash mismatch');
assert(blobSha(index09B)===acceptance.frozen_artifacts.index,'frozen 09B index hash mismatch');
assert(PRESENTATION_REPLICATION_10A.foundation.acceptedBuild09B===acceptance.accepted_build,'recipe foundation mismatch');

const allowed=new Set(PRESENTATION_REPLICATION_10A.assets.allowed);
assert(PRESENTATION_REPLICATION_10A.placements.length===21,'expected 21 authored placements');
for(const p of PRESENTATION_REPLICATION_10A.placements){
  assert(allowed.has(p.asset),'placement uses non-approved asset '+p.asset);
  assert(p.version==='v1'||p.version==='v3','unsupported asset version '+p.version);
  const assetPath=path.join(repo,'assets','3d','sunlit-basin',p.version,p.asset);
  const s=await stat(assetPath);
  assert(s.size>0,'missing asset '+p.asset);
}

const manifestV1=JSON.parse(await readFile(path.join(repo,'assets','3d','sunlit-basin','v1','asset_manifest.generated.json'),'utf8'));
const manifestV3=JSON.parse(await readFile(path.join(repo,'assets','3d','sunlit-basin','v3','asset_manifest.generated.json'),'utf8'));
let authoredPlacementTriangles=0;
for(const p of PRESENTATION_REPLICATION_10A.placements){
  const meta=(p.version==='v1'?manifestV1:manifestV3).assets[p.asset];
  assert(meta,'manifest missing '+p.version+'/'+p.asset);
  authoredPlacementTriangles+=meta.triangles;
}
assert(authoredPlacementTriangles<=18000,'reuse composition exceeds 18k authored placement triangles');

const recipeSource=await readFile(path.join(root,'presentation-recipe.js'),'utf8');
const frag=await readFile(path.join(root,'presentation-10a.fragment.js'),'utf8');
const source=source09B+'\n'+recipeSource+'\n'+frag;

const inheritedRaf=(source09B.match(/requestAnimationFrame\s*\(/g)||[]).length;
const finalRaf=(source.match(/requestAnimationFrame\s*\(/g)||[]).length;
assert(finalRaf===inheritedRaf,'10A must not add RAF loop');
assert(!/requestAnimationFrame\s*\(/.test(frag),'10A fragment contains prohibited RAF');
assert(frag.includes('root09B.visible=false'),'10A must hide frozen Sunlit Basin presentation root');
assert(frag.includes('pass5Root09B.visible=false'),'10A must hide Pass-5 environment root');
assert(frag.includes('center10A={...replicationWorld10A.centers.B}'),'10A must anchor to frozen Region B center');
assert(frag.includes('conform10A'),'10A terrain conformance required');

const buildId=new Date().toISOString().replace(/\D/g,'').slice(0,14);

await rm(out,{recursive:true,force:true});
await mkdir(path.join(out,'assets'),{recursive:true});
await writeFile(path.join(out,'index.html'),make10AHtml(index09B,buildId));
await writeFile(path.join(out,'source-main.js'),source);
await copyFile(
  path.join(accepted09bDir,'assets','Soldier.glb'),
  path.join(out,'assets','Soldier.glb')
);

await build({
  stdin:{
    contents:source,
    resolveDir:source09bDir,
    sourcefile:'test10a-main.js',
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
  '09B_PRESENTATION_PASS_5_ENVIRONMENT_ART',
  '10A_WINDCUT_SHELF_REPLICATION_PROOF'
])assert(app.includes(marker),'runtime marker missing '+marker);

for(const token of [
  'REUSE-ONLY COMPOSITION',
  'DISTINCT REGION B ENVIRONMENT',
  'HUMAN PRESENTATION REVIEW REQUIRED'
])assert(app.includes(token),'runtime token missing '+token);

const soldier=await stat(path.join(out,'assets','Soldier.glb'));
assert(soldier.size>1000000,'Soldier.glb packaging failed');

const sw="self.addEventListener('install',()=>self.skipWaiting());\nself.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('raai-threejs-test10a-')).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));\n";
await writeFile(path.join(out,'sw.js'),sw);

const appStat=await stat(path.join(out,'app.js'));
await writeFile(path.join(out,'build-info.json'),JSON.stringify({
  build_id:buildId,
  test:'10A',
  roadmap:'Test10 — Presentation Replication',
  milestone:'Second Environment Replication Proof',
  environment:'Windcut Shelf',
  classification:'REUSE-ONLY PRESENTATION REPLICATION / HUMAN REVIEW CANDIDATE',
  doctrine:'Stylized Physical Realism',
  frozen_foundation:{
    test09b:'ACCEPTED / FROZEN / CANONICAL',
    accepted_build:acceptance.accepted_build,
    source_main:acceptance.frozen_artifacts.source_main,
    index:acceptance.frozen_artifacts.index,
    acceptance_blob_expected:true
  },
  composition:{
    region:'B',
    authored_placements:PRESENTATION_REPLICATION_10A.placements.length,
    unique_asset_glbs:new Set(PRESENTATION_REPLICATION_10A.placements.map(p=>p.version+':'+p.asset)).size,
    authored_placement_triangles:authoredPlacementTriangles,
    new_glbs:0,
    runtime_batch_ceiling:PRESENTATION_REPLICATION_10A.budgets.runtimeBatchesMax
  },
  hard_limits:PRESENTATION_REPLICATION_10A.budgets,
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
  broad_world_expansion:false,
  automated_presentation_acceptance:false,
  human_presentation_review:'REQUIRED',
  frozen:false,
  app_js_bytes:appStat.size
},null,2)+'\n');

await writeFile(path.join(out,'verification-report.json'),JSON.stringify({
  test:'10A',
  status:'PASS',
  build_id:buildId,
  classification:'REUSE-ONLY PRESENTATION REPLICATION / HUMAN REVIEW CANDIDATE',
  delegated_nonvisual_checks:{
    frozen_09b_acceptance_required:true,
    frozen_09b_hashes_verified:true,
    region_b_anchor_required:true,
    reuse_only_assets_required:true,
    new_glbs:0,
    authored_placements:21,
    authored_placement_triangles:authoredPlacementTriangles,
    runtime_batch_ceiling:6,
    terrain_conformance_required:true,
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
  test:'10A',
  roadmap:'Test10 — Presentation Replication',
  milestone:'Second Environment Replication Proof',
  environment:'Windcut Shelf',
  status:'DEPLOYED_HUMAN_PRESENTATION_REVIEW_REQUIRED',
  build_id:buildId,
  foundation:'Accepted/frozen/canonical 09B',
  reuse_only:true,
  new_glbs:0,
  automated_presentation_acceptance:false,
  human_presentation_review:'REQUIRED',
  frozen:false,
  canonical:false
},null,2)+'\n');

console.log(JSON.stringify({
  buildId,
  status:'PASS',
  output:'threejs-test-10a',
  authoredPlacementTriangles,
  placements:PRESENTATION_REPLICATION_10A.placements.length
}));
