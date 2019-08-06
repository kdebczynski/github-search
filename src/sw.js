const CACHE_NAME = 'cache-and-update';
const STATIC_ASSETS = [
  './index.html',
  './index.bundle.js',
  './assets/',
  './assets/github-logo-128.png',
  './assets/github-logo-512.png',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  console.log('install');

  // skip waiting after install for previous sw to be unactivated and progress into the activating state
  self.skipWaiting();

  // delay install by caching assets and open database
  event.waitUntil(cacheStaticAssets());
});

self.addEventListener('activate', (event) => {
  console.log('activate');

  // remove old cache and then cache new static assets
  event.waitUntil(caches.delete(CACHE_NAME).then(cacheStaticAssets));
});

self.addEventListener('fetch', (event) => {
  console.log('fetch');

  // respond from cache first
  event.respondWith(fetchFromCacheFirst(event.request));
});

self.addEventListener('push', () => {
  console.log('push');

  // The Push API gives web applications the ability to receive messages pushed to them from a server,
  // whether or not the web app is in the foreground, or even currently loaded, on a user agent.
});

self.addEventListener('sync', (event) => {
  console.log('sync');

  const tag = event.tag;
  const [method, ...rest] = tag.split(':');

  if (method === 'GET') {
    const url = rest.join(':');

    event.waitUntil(
      fetch(url)
        .then(async (response) => {
          await updateCache(url, response.clone());

          const data = await response.json();

          console.log(data)

          return sendMessageToAllClients({reqKey: tag, data});
        })
        .catch(err => {
          if (event.lastChance) {
            self.registration.showNotification(`Can't get ${url}`);
          }
          throw err;
        })
    );
  }
});

async function fetchFromCacheFirst(request) {
  const matching = await fromCache(request);

  if (!matching) {
    const response = await fromNetwork(request);

    await updateCache(request, response.clone());

    return response;
  }

  return matching;
}

function cacheStaticAssets() {
  return caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
}

function fromCache(request) {
  return caches.open(CACHE_NAME).then((cache) => cache.match(request));
}

function fromNetwork(request) {
  return fetch(request);
}

function updateCache(request, response) {
  return caches.open(CACHE_NAME).then((cache) => cache.put(request, response));
}

function sendMessageToAllClients(msg) {
  return clients.matchAll()
    .then(clients => {
      clients.forEach(client => client.postMessage(msg))
    });
}
