const CACHE='hair-factory-v5';
const ASSETS=[
 './','./index.html','./styles.css','./app.js','./manifest.webmanifest','./404.html','./robots.txt',
 './assets/logo.png','./icons/icon-192.png','./icons/icon-512.png','./icons/apple-touch-icon.png','./icons/favicon-32.png',
 './assets/styles/png/taper-fade.png','./assets/styles/png/textured-crop.png','./assets/styles/png/buzz-cut.png','./assets/styles/png/low-fade.png',
 './assets/styles/png/clasico.png','./assets/styles/png/side-part.png','./assets/styles/png/crew-cut.png','./assets/styles/png/tijera.png',
 './assets/styles/png/barba-3.png','./assets/styles/png/barba-corta.png','./assets/styles/png/barba-media.png','./assets/styles/png/barba-larga.png'
];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET') return;
 e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(r=>{
   if(new URL(e.request.url).origin===location.origin){const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));}
   return r;
 }).catch(()=>caches.match('./index.html'))));
});
