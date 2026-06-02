self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
self.addEventListener('fetch', e => {
  if (e.request.mode === 'navigate') return;
  e.respondWith(fetch(e.request));
});
