import {logPass} from './utils';
import {BASE_URL} from './config';

// TODO: Handle status codes
const fetchLinks = () => {
  let linksURL = BASE_URL + '/link';
  return fetch(linksURL)
    .then(resp => resp.json())
    .then(logPass);
};

// TODO: Handle status codes
const fetchLink = (linkName) => {
  let linksURL = BASE_URL + '/link/' + linkName;
  return fetch(linksURL)
    .then(resp => resp.json())
    .then(logPass);
};

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
};

const dummyLink = {
  name: "",
  enable: false,
  allowed_ips: [],
  port: 0,
  ipv4_cidr: "",
  ipv6_cidr: "",
  mtu: 0,
  fwmark: 0,
  private_key: "",
  default_dns1: "",
  default_dns2: "",
  post_up: [],
  post_down: [],
};

export {
  fetchLinks,
  fetchLink,
  updateLink,
  dummyLink,
};