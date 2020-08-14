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
import LinkRow from './LinkRow';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Results = ({ className, links, setLink, ...rest }) => {
  const classes = useStyles();

  const toggleEnable = (link) => {
    setLink(link.name, {
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
                  Port
                </TableCell>
                <TableCell>
                  IPv4
                </TableCell>
                <TableCell>
                  IPv6
                </TableCell>
                <TableCell>
                  Private Key
                </TableCell>
                <TableCell>
                  Forwarding
                </TableCell>
                <TableCell>
                  Fwmark
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {links.map((link) => (
                <LinkRow
                  key={link.name}
                  link={link}
                  toggleEnable={()=> toggleEnable(link)}
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
  links: PropTypes.array.isRequired,
  setLink: PropTypes.func.isRequired
};

export default Results;
