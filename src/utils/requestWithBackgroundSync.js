import request from "utils/request";
import parseJson from "utils/parseJson";

async function getSwRegistration() {
  return navigator.serviceWorker.ready;
}

async function registerBackgroundSync(tag) {
  const registration = await getSwRegistration();

  registration.sync.register(tag);
}

function createFetchSyncDataObj(url, method) {
  return {
    type: 'fetch-sync',
    method,
    url,
    link: document.location.href
  };
}

function prepareResponse(data, headers) {
  const blob = new Blob([JSON.stringify(data)]);
  const response = new Response(blob, { headers });

  return response;
}

function createFetchSyncMessageListener(jsonTag, done) {
  function handler(event) {
    const recievedJsonTag = parseJson(event.data.jsonTag);

    if (recievedJsonTag) {
      const isFetchSyncMatch = jsonTag.type === 'fetch-sync'
        && jsonTag.url === recievedJsonTag.url
        && jsonTag.method === recievedJsonTag.method;

      if (isFetchSyncMatch) {
        done(event.data);
      }
    }
  }

  return handler;
}

function getDataFromBackgroundSyncByJsonTag(jsonTag) {
  // TODO: add timeout and remove event listener after timeout

  return new Promise(resolve => {
    const handler = createFetchSyncMessageListener(jsonTag, onDone);

    function onDone(data) {
      navigator.serviceWorker.removeEventListener('message', handler);
      resolve(data);
    }

    navigator.serviceWorker.addEventListener('message', handler);
  });
}

async function backgroundSyncRequest(url, config) {
  const isGetRequest = !config || (config && config.method === 'GET');

  // background sync experiment - only basic GET request available without any config like headers etc.
  if (isGetRequest) {
    const jsonTag = createFetchSyncDataObj(url, 'GET');

    await registerBackgroundSync(JSON.stringify(jsonTag));

    // background sync data recieve experiment
    const { data, headers } = await getDataFromBackgroundSyncByJsonTag(jsonTag);
    const response = prepareResponse(data, headers);

    return response;
  } else {
    throw new Error('Fetch failed');
  }
}

function requestWithBackgroundSync(url, config) {
  return request(url, config)
    .catch(() => backgroundSyncRequest(url, config));
}

export default requestWithBackgroundSync;