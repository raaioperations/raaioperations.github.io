import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root=process.cwd();
const out=path.resolve(root,'../threejs-test-05r');
const info=JSON.parse(await readFile(path.join(out,'build-info.json'),'utf8'));
const buildId=info.build_id;

const sw=`const CACHE='raai-threejs-test05r-${buildId}';
const CORE=['./app.js?v=${buildId}','./assets/Soldier.glb'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('raai-threejs-test05r-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  if(event.request.mode==='navigate'||url.pathname.endsWith('/index.html')){
    event.respondWith(fetch(event.request,{cache:'no-store'}).catch(()=>caches.match('./index.html')));
    return;
  }
  event.respondWith(caches.match(event.request,{cacheName:CACHE}).then(hit=>hit||fetch(event.request).then(response=>{
    if(url.origin===self.location.origin&&response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));}
    return response;
  })));
});
`;
await writeFile(path.join(out,'sw.js'),sw);
console.log('Applied Test 05R service-worker cache repair for',buildId);
