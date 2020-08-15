import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Switch,
  TableCell,
  TableRow,
  Typography,
} from '@material-ui/core';

const nullPrint = (obj) => {
  if (obj) return obj;
  else return "None";
}

const enablePrint = (enable) => {
  if (enable) return "Enabled";
  else return "Disabled";
}

const LinkRow = ({ className, link, toggleEnable, ...rest }) => {

  return (
    <TableRow hover>
      <TableCell>
        <Box alignItems="center" display="flex">
          <RouterLink to={"/app/links/" + link.name}>
            <Typography color="textPrimary" variant="body1">
              {link.name}
            </Typography>
          </RouterLink>
        </Box>
      </TableCell>
      <TableCell>
        {link.port}
      </TableCell>
      <TableCell>
        {nullPrint(link.ipv4_cidr)}
      </TableCell>
      <TableCell>
        {nullPrint(link.ipv6_cidr)}
      </TableCell>
      <TableCell>
        {nullPrint(link.private_key)}
      </TableCell>
      <TableCell>
        {enablePrint(link.forward)}
      </TableCell>
      <TableCell>
        {link.fwmark}
      </TableCell>
      <TableCell>
        <Switch
          checked={link.enable}
          onChange={toggleEnable}
          color="primary"
          name="checkedB"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      </TableCell>
    </TableRow>
  );
};

LinkRow.propTypes = {
  className: PropTypes.string,
  link: PropTypes.object.isRequired
};

export default LinkRow;
