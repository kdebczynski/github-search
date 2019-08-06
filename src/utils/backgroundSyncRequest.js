import request from "utils/request";

async function getSwRegistration() {
  return navigator.serviceWorker.ready;
}

function getDataFromBackgroundSyncByTag(reqTag) {
  return new Promise(async (resolve) => {
    navigator.serviceWorker.addEventListener('message', (event) => {
      if (reqTag === event.data.reqTag) {
        resolve(event.data);
      }
    }, { once: true });
  });
}

async function backgroundSync(url, method) {
  const reqTag = `${method}:${url}`;
  const registration = await getSwRegistration();
  
  registration.sync.register(reqTag);

  return await getDataFromBackgroundSyncByTag(reqTag);
}

async function getSyncData(url, config) {
  const isGetRequest = !config || (config && config.method === 'GET');

  // background sync - only basic GET request available without any config (for demo)
  if (isGetRequest) {
    const { data } = await backgroundSync(url, 'GET');

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