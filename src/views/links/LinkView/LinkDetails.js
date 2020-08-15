import React, { useState } from 'react';
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

const LinkDetails = ({ className, link, ...rest }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    firstName: 'Katarina',
    lastName: 'Smith',
    email: 'demo@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA'
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
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
                value={link.name}
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
                value={link.port}
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
                value={link.private_key}
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
                value={nullString(link.ipv4_cidr)}
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
                value={nullString(link.ipv6_cidr)}
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
                value={link.mtu}
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
                value={link.fwmark}
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
                value={link.default_dns1}
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
                value={link.default_dns2}
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
                defaultValue=""
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
                onChange={handleChange}
                select
                SelectProps={{ native: true }}
                value={values.state}
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
                name="post_up"
                value=""
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
                name="post_down"
                value=""
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
          <Button
            color="primary"
            variant="contained"
          >
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};

LinkDetails.propTypes = {
  className: PropTypes.string,
  link: PropTypes.object.isRequired,
};

export default LinkDetails;
