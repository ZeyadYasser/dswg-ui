import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles
} from '@material-ui/core';
import { dummyPeer } from 'src/dswg';

const useStyles = makeStyles(() => ({
  root: {}
}));

const nullString = (obj) => {
  if(obj) return obj;
  return "";
}

const PeerDetails = ({ className, peer, updatePeer, ...rest }) => {
  const classes = useStyles();
  const [peerDetails, setpeerDetails] = useState(dummyPeer);

  useEffect(() => {
    setpeerDetails(peer);
  }, [peer]);

  const resetPeer = () => {
    setpeerDetails(peer);
  }

  const  updatePeerDetails = (key, value) => {
    setpeerDetails({
      ...peerDetails,
      [key]: value
    });
  };

  return (
    <form
      autoComplete="off"
      noValidate
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardHeader
          title="Peer Details"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Peer Name"
                name="name"
                value={peerDetails.name}
                onChange={(e) => updatePeerDetails(e.target.name, e.target.value)}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Endpoint"
                name="endpoint"
                value={nullString(peerDetails.endpoint)}
                onChange={(e) => updatePeerDetails(e.target.name, e.target.value)}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Public Key"
                name="public_key"
                value={peerDetails.public_key}
                onChange={(e) => updatePeerDetails(e.target.name, e.target.value)}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Preshared Key"
                name="preshared_key"
                value={nullString(peerDetails.preshared_key)}
                onChange={(e) => updatePeerDetails(e.target.name, e.target.value)}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="DNS1"
                name="dns1"
                value={nullString(peerDetails.dns1)}
                onChange={(e) => updatePeerDetails(e.target.name, e.target.value)}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="DNS2"
                name="dns2"
                value={nullString(peerDetails.dns2)}
                onChange={(e) => updatePeerDetails(e.target.name, e.target.value)}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Allowed IPs"
                multiline
                name="allowed_ips"
                value={peerDetails.allowed_ips.join("\n")}
                onChange={(e) => updatePeerDetails(e.target.name, e.target.value.split("\n"))}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Keepalive Interval"
                name="keepalive"
                value={peerDetails.keepalive}
                onChange={(e) => updatePeerDetails(e.target.name, JSON.parse(e.target.value))}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="flex-end"
          p={2}
        >
          <Box p={1} >
            <Button
              color="primary"
              variant="contained"
              onClick={resetPeer}
            >
              Reset details
            </Button>
          </Box>
          <Box p={1} >
            <Button
              color="primary"
              variant="contained"
              onClick={() => updatePeer(peerDetails)}
            >
              Save details
            </Button>
          </Box>
        </Box>
      </Card>
    </form>
  );
};

PeerDetails.propTypes = {
  className: PropTypes.string,
  peer: PropTypes.object.isRequired,
  updatePeer: PropTypes.func.isRequired,
};

export default PeerDetails;
