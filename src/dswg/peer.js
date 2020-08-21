import {logPass} from './utils';
import {BASE_URL} from './config';

// TODO: Handle status codes
const fetchPeers = (linkName) => {
  let peersURL = BASE_URL + '/link/' + linkName + '/peer';
  return fetch(peersURL)
    .then(resp => resp.json())
    .then(logPass);
};

// TODO: Handle status codes
const fetchPeer = (linkName, peerName) => {
  let peerURL = BASE_URL + '/link/' + linkName + '/peer/' + peerName;
  return fetch(peerURL)
    .then(resp => resp.json())
    .then(logPass);
};

// TODO: Handle status codes
const updatePeer = (linkName, peerName, peer) => {
    let peerURL = BASE_URL + '/link/' + linkName + '/peer/' + peerName;
  return fetch(peerURL, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(peer),
  })
    .then(resp => resp.json())
    .then(logPass);
};

const dummyPeer = {
  name: "",
  allowed_ips: [],
  enable: false,
  endpoint: null,
  public_key: "",
  preshared_key: "",
  dns1: "",
  dns2: "",
  keepalive: 0,
};

export {
  fetchPeer,
  fetchPeers,
  updatePeer,
  dummyPeer,
};