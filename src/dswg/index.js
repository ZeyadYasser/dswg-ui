import {
  fetchLinks,
  fetchLink,
  updateLink,
  dummyLink,
} from './link';

import {
  fetchPeers,
  fetchPeer,
  updatePeer,
  dummyPeer,
} from './peer';

const api = {
  fetchLinks: fetchLinks,
  fetchLink: fetchLink,
  updateLink: updateLink,
  fetchPeers: fetchPeers,
  fetchPeer: fetchPeer,
  updatePeer: updatePeer,
};

export default api;
export {
  dummyLink,
  dummyPeer
};