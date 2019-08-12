import request from "utils/request";
import parseJson from "utils/parseJson";
import uuidv4 from "uuid/v4";

async function registerBackgroundSync(tag) {
  const registration = await navigator.serviceWorker.ready;

  registration.sync.register(tag);
}

function createFetchSyncDataObj(url, config) {
  // method name used to extact data from body by service worker
  // TODO: detect method name by "Content-Type" header
  const bodyExtractMethodName = 'json';

  return {
    type: 'fetch-sync',
    requestId: uuidv4(),
    url,
    config,
    bodyExtractMethodName,
    link: document.location.href
  };
}

function prepareResponse(data, headers) {
  // TODO: build blob bases on "Content-Type" header (for now json is created)
  const blob = new Blob([JSON.stringify(data)]);
  const response = new Response(blob, { headers });

  return response;
}

function createFetchSyncMessageListener(jsonTag, done) {
  function handler(event) {
    const recievedJsonTag = parseJson(event.data.jsonTag);

    if (recievedJsonTag) {
      const isFetchSyncMessage = recievedJsonTag.type === 'fetch-sync';
      const isTheSameRequestId = jsonTag.requestId = recievedJsonTag.requestId;

      if (isFetchSyncMessage && isTheSameRequestId) {
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
  // data that are passed to sync event
  const jsonTag = createFetchSyncDataObj(url, config);

  await registerBackgroundSync(JSON.stringify(jsonTag));

  // background sync data recieve experiment
  const { data, headers } = await getDataFromBackgroundSyncByJsonTag(jsonTag);

  return prepareResponse(data, headers);
}

function requestWithBackgroundSync(url, config) {
  return request(url, config)
    .catch(() => backgroundSyncRequest(url, config));
}

export default requestWithBackgroundSync;