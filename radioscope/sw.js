const CACHE = 'radioscope-shell-v1-inline-20261120';
const SHELL = ['./','./index.html','./manifest.webmanifest','./assets/icon.svg'];
self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('radioscope-shell-') && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', event => {
  if(event.request.method !== 'GET') return;
  const u = new URL(event.request.url);
  if(u.origin !== self.location.origin || !u.pathname.startsWith(new URL('./',self.registration.scope).pathname)) return;
  if(event.request.mode === 'navigate'){ event.respondWith(fetch(event.request).catch(()=>caches.match('./index.html'))); return; }
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
});