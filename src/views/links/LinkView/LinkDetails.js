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
import { dummyLink } from 'src/dswg';

const forwardingValues = [
  {
    value: true,
    label: 'Enable'
  },
  {
    value: false,
    label: 'Disable'
  },
];

const useStyles = makeStyles(() => ({
  root: {}
}));

const nullString = (obj) => {
  if(obj) return obj;
  return "";
}

const LinkDetails = ({ className, link, updateLink, ...rest }) => {
  const classes = useStyles();
  const [linkDetails, setLinkDetails] = useState(dummyLink);

  useEffect(() => {
    setLinkDetails(link);
  }, [link]);

  const resetLink = () => {
    setLinkDetails(link);
  }

  const  updateLinkDetails = (key, value) => {
    setLinkDetails({
      ...linkDetails,
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
          title="Link Details"
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
                label="Link Name"
                name="name"
                value={linkDetails.name}
                onChange={(e) => updateLinkDetails(e.target.name, e.target.value)}
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
                label="Port"
                name="port"
                value={linkDetails.port}
                onChange={(e) => updateLinkDetails(e.target.name, e.target.value)}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Private Key"
                name="private_key"
                value={linkDetails.private_key}
                onChange={(e) => updateLinkDetails(e.target.name, e.target.value)}
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
                label="IPv4"
                name="ipv4_cidr"
                value={nullString(linkDetails.ipv4_cidr)}
                onChange={(e) => updateLinkDetails(e.target.name, e.target.value)}
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
                label="IPv6"
                name="ipv6_cidr"
                value={nullString(linkDetails.ipv6_cidr)}
                onChange={(e) => updateLinkDetails(e.target.name, e.target.value)}
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
                label="MTU"
                name="mtu"
                value={linkDetails.mtu}
                onChange={(e) => updateLinkDetails(e.target.name, JSON.parse(e.target.value))}
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
                label="Forward Mark"
                name="fwmark"
                type="int"
                value={linkDetails.fwmark}
                onChange={(e) => updateLinkDetails(e.target.name, JSON.parse(e.target.value))}
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
                name="default_dns1"
                value={nullString(linkDetails.default_dns1)}
                onChange={(e) => updateLinkDetails(e.target.name, e.target.value)}
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
                name="default_dns2"
                value={nullString(linkDetails.default_dns2)}
                onChange={(e) => updateLinkDetails(e.target.name, e.target.value)}
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
                value={linkDetails.allowed_ips.join("\n")}
                onChange={(e) => updateLinkDetails(e.target.name, e.target.value.split("\n"))}
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
                label="Forwarding"
                name="forward"
                onChange={(e) => updateLinkDetails(e.target.name, JSON.parse(e.target.value))}
                value={linkDetails.forward}
                select
                SelectProps={{ native: true }}
                variant="outlined"
              >
                {forwardingValues.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Post Up Commands"
                multiline
                name="post_up"
                value={linkDetails.post_up.join("\n")}
                onChange={(e) => updateLinkDetails(e.target.name, e.target.value.split("\n"))}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Post Down Commands"
                multiline
                name="post_down"
                value={linkDetails.post_down.join("\n")}
                onChange={(e) => updateLinkDetails(e.target.name, e.target.value.split("\n"))}
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
              onClick={resetLink}
            >
              Reset details
            </Button>
          </Box>
          <Box p={1} >
            <Button
              color="primary"
              variant="contained"
              onClick={() => updateLink(linkDetails)}
            >
              Save details
            </Button>
          </Box>
        </Box>
      </Card>
    </form>
  );
};

LinkDetails.propTypes = {
  className: PropTypes.string,
  link: PropTypes.object.isRequired,
  updateLink: PropTypes.func.isRequired,
};

export default LinkDetails;
