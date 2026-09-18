const CACHE='hair-factory-v5';
const ASSETS=[
 './','./index.html','./styles.css','./app.js','./manifest.webmanifest','./404.html','./robots.txt',
 './assets/logo.svg','./icons/icon-192.png','./icons/icon-512.png','./icons/apple-touch-icon.png','./icons/favicon-32.png',
 './assets/styles/taper-fade.png','./assets/styles/textured-crop.png','./assets/styles/buzz-cut.png','./assets/styles/low-fade.png',
 './assets/styles/clasico.png','./assets/styles/side-part.png','./assets/styles/crew-cut.png','./assets/styles/tijera.png',
 './assets/styles/barba-3.png','./assets/styles/barba-corta.png','./assets/styles/barba-media.png','./assets/styles/barba-larga.png'
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
