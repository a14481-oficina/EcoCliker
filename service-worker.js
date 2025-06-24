// Quando o service worker for instalado, armazenamos em cache os recursos necessários
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('hello-world-cache').then(function(cache) {
            return cache.addAll([
                '/', 
                '/EcoClicker-32px.jpg',
                '/index.html',
                '/index_ing.html',
                '/manifest.json'
            ]);
        })
    );
});

// Quando o service worker intercepta uma requisição, ele primeiro tenta buscar do cache
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(cachedResponse) {
            return cachedResponse || fetch(event.request);
        })
    );
});