import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import { useParams } from 'react-router-dom';
import Page from 'src/components/Page';
import Results from './Results';
import Toolbar from './Toolbar';

import api from 'src/dswg';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const PeersView = () => {
  const classes = useStyles();
  const [peers, setPeers] = useState([]);
  const params = useParams();

  useEffect(() => {
    api.fetchPeers(params.linkName)
      .then(setPeers)
      .catch(err => console.log(err));
  }, [params]);

  const updatePeer = (peerName, peer) => {
    let peersCopy = peers.slice();
    let found = false;

    for(let i=0; i<peersCopy.length; ++i) {
      if(peersCopy[i].name === peerName) {
        found = true;
        peersCopy[i] = {...peersCopy[i], ...peer};
      }
    }

    if(!found) throw Error("Peer not found");

    api.updatePeer(params.linkName, peerName, peer)
      .then(() => setPeers(peersCopy))
      .catch(err => console.log(err));
  }

  return (
    <Page className={classes.root} title={params.linkName + " peers"}>
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Results peers={peers} updatePeer={updatePeer}/>
        </Box>
      </Container>
    </Page>
  );
};

export default PeersView;
