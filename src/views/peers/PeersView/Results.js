import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  makeStyles
} from '@material-ui/core';
import PeerRow from './PeerRow';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Results = ({ className, peers, updatePeer, ...rest }) => {
  const classes = useStyles();

  const toggleEnable = (link) => {
    updatePeer(link.name, {
      enable: !link.enable,
    });
  }

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <PerfectScrollbar>
        <Box minWidth={200}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Public Key
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {peers.map((peer) => (
                <PeerRow
                  key={peer.name}
                  peer={peer}
                  toggleEnable={()=> toggleEnable(peer)}
                />
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  peers: PropTypes.array.isRequired,
  updatePeer: PropTypes.func.isRequired
};

export default Results;
