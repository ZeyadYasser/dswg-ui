import {logPass} from './utils'
import {BASE_URL} from './config'

// TODO: Handle status codes
const fetchLinks = () => {
  let linksURL = BASE_URL + '/link';
  return fetch(linksURL)
    .then(resp => resp.json())
    .then(logPass);
}

// TODO: Handle status codes
const updateLink = (linkName, link) => {
  let linkURL = BASE_URL + '/link/' + linkName;
  return fetch(linkURL, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(link),
  })
    .then(resp => resp.json())
    .then(logPass);
}

export {
  fetchLinks,
  updateLink,
}