import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink, useParams } from 'react-router-dom';
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

const PeerRow = ({ className, peer, toggleEnable, ...rest }) => {
  const params = useParams();

  return (
    <TableRow hover>
      <TableCell>
        <Box alignItems="center" display="flex">
          <RouterLink to={"/app/links/" + params.linkName + "/peers/" + peer.name}>
            <Typography color="textPrimary" variant="body1">
              {peer.name}
            </Typography>
          </RouterLink>
        </Box>
      </TableCell>
      <TableCell>
        {nullPrint(peer.public_key)}
      </TableCell>
      <TableCell>
        <Switch
          checked={peer.enable}
          onChange={toggleEnable}
          color="primary"
          name="checkedB"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      </TableCell>
    </TableRow>
  );
};

PeerRow.propTypes = {
  className: PropTypes.string,
  peer: PropTypes.object.isRequired
};

export default PeerRow;
