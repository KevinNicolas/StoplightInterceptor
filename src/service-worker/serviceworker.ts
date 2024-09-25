// NOTE - Aqui los alias como "@/*" no estan habilitados
import { getStorageConfig } from "../utils/chrome/storage"

async function setup() {
  const config = await getStorageConfig();

  // let url = 'https://stoplight.io';
  let url = 'https://jsonplaceholder.typicode.com'
  if (config.webRequestListenerEndpoint) url += `/${config.webRequestListenerEndpoint}`

  // NOTE - WebRequest
  chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
      console.info(details)
      return {};
    },
    { urls: [`${url}/*`] }
  )
}

setup();