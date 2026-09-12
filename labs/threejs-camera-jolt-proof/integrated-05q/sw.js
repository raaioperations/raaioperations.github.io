self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('raai-threejs-test05r-v2-')).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
