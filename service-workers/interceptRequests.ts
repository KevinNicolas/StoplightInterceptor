chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return {};
  },
  { urls: ['https://jsonplaceholder.typicode.com/*'] }
)