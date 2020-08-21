import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import PeerMinimal from './PeerMinimal';
import PeerDetails from './PeerDetails';
import { useParams } from 'react-router-dom';

import api, { dummyPeer } from 'src/dswg';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const PeerView = () => {
  const classes = useStyles();
  const [peer, setPeer] = useState(dummyPeer);
  const params = useParams();

  useEffect(() => {
    api.fetchPeer(params.linkName, params.peerName)
      .then(setPeer)
      .catch(err => console.log(err));
  }, [params]);

  const updatePeer = (newPeer) => {
    newPeer = {...peer, ...newPeer};
    console.log(newPeer)
    api.updatePeer(params.linkName, peer.name, newPeer)
      .then(() => setPeer(newPeer))
      .catch(err => console.log(err));
  }

  return (
    <Page className={classes.root} title={"Peer - " + peer.name}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <PeerMinimal peer={peer} updatePeer={updatePeer}/>
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <PeerDetails peer={peer} updatePeer={updatePeer}/>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default PeerView;
