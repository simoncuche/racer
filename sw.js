// Offline-Cache: erst das Netz fragen (damit Updates sofort ankommen), nur ohne Verbindung aus dem Cache liefern.
const CACHE='mallorca-rallye-3.9.1';
const FILES=['./','./index.html','./manifest.json'];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).catch(()=>{})); self.skipWaiting(); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  if(e.request.url.includes('googleapis.com')) return;
  e.respondWith(
    fetch(e.request).then(r=>{ if(r && r.ok){ const copy=r.clone(); caches.open(CACHE).then(c=>c.put(e.request,copy)).catch(()=>{}); } return r; })
      .catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html')))
  );
});
