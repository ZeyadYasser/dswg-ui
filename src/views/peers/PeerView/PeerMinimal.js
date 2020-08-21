import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Switch,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 100,
    width: 100
  }
}));

const PeerMinimal = ({ className, peer, updatePeer, ...rest }) => {
  const classes = useStyles();

  const toggleEnable = () => {
    updatePeer({enable: !peer.enable});
  }

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            {peer.name}
            <Switch
              checked={peer.enable}
              onChange={toggleEnable}
              color="primary"
              name="checkedB"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          </Typography>
          {peer.allowed_ips.map((ip) => (
            <Typography
              color="textSecondary"
              variant="body1"
              key={ip}
            >
              {ip}
            </Typography>
          ))}
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          color="primary"
          fullWidth
          variant="text"
        >
          QR Code
        </Button>
      </CardActions>
    </Card>
  );
};

PeerMinimal.propTypes = {
  className: PropTypes.string,
  peer: PropTypes.object.isRequired,
  updatePeer: PropTypes.func.isRequired,
};

export default PeerMinimal;
