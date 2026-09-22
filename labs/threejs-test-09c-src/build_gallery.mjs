import {build} from 'esbuild';
import {mkdir,readFile,writeFile,rm,stat} from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const root=process.cwd();
const repo=path.resolve(root,'../..');
const out=path.resolve(repo,'labs/threejs-test-09c');
const assets=path.resolve(repo,'assets/3d/sunlit-basin/v1');

await mkdir(out,{recursive:true});

const html=await readFile(path.join(root,'gallery.html'),'utf8');
await writeFile(path.join(out,'index.html'),html);

await build({
  entryPoints:[path.join(root,'gallery-main.js')],
  bundle:true,
  minify:true,
  format:'esm',
  target:['safari16.4'],
  outfile:path.join(out,'app.js'),
  legalComments:'none'
});

const manifest=JSON.parse(await readFile(path.join(assets,'asset_manifest.generated.json'),'utf8'));
const verification=JSON.parse(await readFile(path.join(out,'verification-report.json'),'utf8'));
if(verification.status!=='PASS')throw new Error('09C asset verification must pass before gallery build');

const hash=async p=>crypto.createHash('sha256').update(await readFile(p)).digest('hex');
const inventory={};
for(const [name,meta] of Object.entries(manifest.assets)){
  inventory[name]={...meta,sha256:await hash(path.join(assets,name))};
}
const appStat=await stat(path.join(out,'app.js'));
await writeFile(path.join(out,'build-info.json'),JSON.stringify({
  test:'09C',
  roadmap:'Test09 — Presentation Foundation',
  milestone:'Sunlit Basin Production Asset Kit',
  status:'ASSET KIT GENERATED / HUMAN REVIEW REQUIRED',
  generated_at:new Date().toISOString(),
  asset_count:Object.keys(inventory).length,
  format:'GLB / glTF 2.0',
  source:'deterministic in-repository Python geometry authoring',
  original_assets_only:true,
  external_runtime_dependencies:0,
  gallery_target:'safari16.4+',
  gallery_app_bytes:appStat.size,
  assets:inventory,
  human_asset_review:'REQUIRED',
  integration_back_into_09b:'REQUIRED',
  frozen:false
},null,2)+'\n');
