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

const LinkMinimal = ({ className, link, updateLink, ...rest }) => {
  const classes = useStyles();

  const toggleEnable = () => {
    updateLink({enable: !link.enable});
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
            {link.name}
            <Switch
              checked={link.enable}
              onChange={toggleEnable}
              color="primary"
              name="checkedB"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            {link.ipv4_cidr}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            {link.ipv6_cidr}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          color="primary"
          fullWidth
          variant="text"
        >
          View Peers
        </Button>
      </CardActions>
    </Card>
  );
};

LinkMinimal.propTypes = {
  className: PropTypes.string,
  link: PropTypes.object.isRequired,
  updateLink: PropTypes.func.isRequired,
};

export default LinkMinimal;
