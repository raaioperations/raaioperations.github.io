const CACHE = 'radioscope-shell-v1.3-fast-tune';
const SHELL = ['./','./index.html','./manifest.webmanifest','./assets/icon.svg'];
self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('radioscope-shell-') && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin || !url.pathname.startsWith(new URL('./', self.registration.scope).pathname)) return;
  // Only cache same-origin app shell; never proxy radio streams or directory APIs.
  if (event.request.mode === 'navigate') { event.respondWith(fetch(event.request).catch(() => caches.match('./index.html'))); return; }
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
});
