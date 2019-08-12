const CACHE_NAME = 'cache-and-update';
const STATIC_ASSETS = [
  './',
  './index.html',
  './index.bundle.js',
  './assets/',
  './assets/github-logo-128.png',
  './assets/github-logo-512.png',
  './manifest.json'
];
const BODY_EXTRACT_METHOD_NAMES = ['arrayBuffer', 'blob', 'json', 'text', 'formData'];

self.addEventListener('install', (event) => {
  console.log('install');

  // forces the waiting service worker to become the active service worker.
  self.skipWaiting();

  // delay install by caching assets and open database
  event.waitUntil(cacheStaticAssets());
});

self.addEventListener('activate', (event) => {
  console.log('activate');

  // allows an active service worker to set itself as the controller for all clients within its scope.
  self.clients.claim();

  // remove old cache and then cache new static assets
  event.waitUntil(caches.delete(CACHE_NAME).then(cacheStaticAssets));
});

self.addEventListener('fetch', (event) => {
  console.log('fetch');

  // respond from cache first
  event.respondWith((async function() {
    try {
      const response = await fetchFromNetworkFirst(event.request);
  
      return response;
    } catch(e) {
      // fallback for navigate requests
      if (event.request.mode === 'navigate') {
        return getCachedIndex();
      }

      throw e;
    }
  })());
});

self.addEventListener('sync', (event) => {
  console.log('sync');

  const recievedJsonTag = parseJson(event.tag);

  if (recievedJsonTag && recievedJsonTag.type === 'fetch-sync') {
    const { url, bodyExtractMethodName, config } = recievedJsonTag;

    event.waitUntil(
      (async function () {
        try {
          const response = await fetch(url, config);
  
          const headers = {};
          response.headers.forEach((val, key) => {
            headers[key] = val;
          })
  
          await updateCache(url, response.clone());
  
          // extact data from body by recieved method name
          const data = await extractDataFromResponse(response, bodyExtractMethodName);
  
          self.registration.showNotification(`Background sync finished with success`, { data: { link: recievedJsonTag.link } });
  
          return sendMessageToAllClients({ jsonTag: event.tag, data, headers });
        } catch(e) {
          if (event.lastChance) {
            self.registration.showNotification(`Can't get ${url}`);
          }
          throw e;
        }
      })()
    );
  }
});

// push api
self.addEventListener('push', () => {
  console.log('push');

  // The Push API gives web applications the ability to receive messages pushed to them from a server,
  // whether or not the web app is in the foreground, or even currently loaded, on a user agent.
});

self.addEventListener('notificationclick', function (event) {
  console.log('notificationclick');

  event.notification.close();
  clients.openWindow(event.notification.data.link);
});
// --------

// background fetch
self.addEventListener('backgroundfetchsuccess', (event) => {
  console.log('backgroundfetchsuccess', event)
});

self.addEventListener('backgroundfetchfail', (event) => {
  console.log('backgroundfetchfail', event)
});

self.addEventListener('backgroundfetchabort', (event) => {
  console.log('backgroundfetchabort', event)
});

self.addEventListener('backgroundfetchclick', (event) => {
  console.log('backgroundfetchclick', event)
});
// ---------------

async function extractDataFromResponse(response, methodName) {
  if (BODY_EXTRACT_METHOD_NAMES.includes(methodName)) {
    return response[methodName]();
  }

  throw new Error(`Can't extract data from response body by method ${methodName}`);
}

async function fetchFromCacheFirst(request) {
  const responseFromCache = await fromCache(request);

  if (!responseFromCache) {
    const response = await fromNetwork(request);

    await updateCache(request, response.clone());

    return response;
  }

  return responseFromCache;
}

async function fetchFromNetworkFirst(request) {
  try {
    const response =  await fromNetwork(request);

    await updateCache(request, response.clone());

    return response;
  } catch(e) {
    const responseFromCache = await fromCache(request);

    if (responseFromCache) {
      return responseFromCache;
    } else {
      throw e;
    }
  }
}

function getCachedIndex() {
  return caches.open(CACHE_NAME).then((cache) => cache.match('index.html'));
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

function parseJson(str) {
  try {
    return JSON.parse(str);
  } catch(e) {
    return undefined;
  }
}