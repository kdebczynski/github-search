async function requestWithBackgroundFetch(url, config) {
  // background fetch data recieve experiment
  const registration = await navigator.serviceWorker.ready;
  const request = new Request(url, config);
  const bgFetchRegistration = await registration.backgroundFetch.fetch('my-fetch', request);
  const record = await bgFetchRegistration.match(request);
  const response = await record.responseReady;

  return response;
}

export default requestWithBackgroundFetch;