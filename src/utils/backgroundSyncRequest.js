import request from "utils/request";
import notify from "utils/notify";

const hasMessageEventListenerRegistered = false;

async function backgroundSync(reqKey) {
  return new Promise((resolve, reject) => {
    if (!hasMessageEventListenerRegistered) {
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (reqKey === event.data.reqKey) {
          resolve(event.data);
        }
      });
    }

    navigator.serviceWorker.ready.then(registration => {
      return registration.sync.register(reqKey);
    });
  });
}

async function getSyncData(url, config) {
  const isGetRequest = !config || (config && config.method === 'GET');

  // background sync - only basic GET request available without any config (for demo)
  if (isGetRequest) {
    notify(`Background sync have been started for ${url}`);

    const prefix = 'GET';
    const { data } = await backgroundSync(`${prefix}:${url}`);

    notify(`Background sync finished with success for ${url}`);

    // compability with fetch api
    return {
      json: () => data
    };
  } else {
    throw new Error('Fetch failed');
  }
}

function requestWithSync(url, config) {
  return request(url, config).catch(() => getSyncData(url, config));
}

export default requestWithSync;