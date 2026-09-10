import { build } from 'esbuild';
import { mkdir, writeFile, stat, readFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const out = path.resolve(root, '../threejs-test-04');
const assets = path.join(out, 'assets');
await mkdir(assets, { recursive: true });

const modelUrl = 'https://raw.githubusercontent.com/mrdoob/three.js/r186/examples/models/gltf/Soldier.glb';
const res = await fetch(modelUrl);
if (!res.ok) throw new Error(`Failed to fetch pinned Soldier.glb: ${res.status}`);
await writeFile(path.join(assets, 'Soldier.glb'), Buffer.from(await res.arrayBuffer()));

const buildId = new Date().toISOString().replace(/\D/g, '').slice(0, 14);
let html = await readFile('index.template.html', 'utf8');
html = html.replaceAll('__BUILD_ID__', buildId);
await writeFile(path.join(out, 'index.html'), html);

await build({
  entryPoints: ['src/main.js'],
  bundle: true,
  minify: true,
  format: 'esm',
  target: ['safari16.4'],
  outfile: path.join(out, 'app.js'),
  legalComments: 'none',
  treeShaking: true
});

const sw = `const CACHE='raai-threejs-test04-${buildId}';\nconst CORE=['./','./index.html','./app.js?v=${buildId}','./assets/Soldier.glb'];\nself.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));\nself.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('raai-threejs-test04-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));\nself.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r;}).catch(()=>caches.match('./index.html'))));});\n`;
await writeFile(path.join(out, 'sw.js'), sw);

const js = await stat(path.join(out, 'app.js'));
const glb = await stat(path.join(assets, 'Soldier.glb'));
await writeFile(path.join(out, 'build-info.json'), JSON.stringify({
  build_id: buildId,
  three: '0.186.0',
  pipeline: 'esbuild-local-bundle',
  runtime_external_dependencies: 0,
  app_js_bytes: js.size,
  soldier_glb_bytes: glb.size,
  service_worker_cache: true,
  target: 'safari16.4+'
}, null, 2));
console.log(JSON.stringify({buildId, appBytes: js.size, glbBytes: glb.size}));
