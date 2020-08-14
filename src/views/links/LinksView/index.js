import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
import Toolbar from './Toolbar';

import {
  fetchLinks,
  updateLink
} from 'src/api/link'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const LinksView = () => {
  const classes = useStyles();
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetchLinks()
      .then(setLinks)
      .catch(err => console.log(err));
  }, []);

  const setLink = (linkName, link) => {
    let linksCopy = links.slice();
    let found = false;

    for(let i=0; i<linksCopy.length; ++i) {
      if(linksCopy[i].name === linkName) {
        found = true;
        linksCopy[i] = {...linksCopy[i], ...link};
      }
    }

    if(!found) throw Error("Link not found");

    updateLink(linkName, link)
      .then(() => setLinks(linksCopy))
      .catch(err => console.log(err));
  }

  return (
    <Page className={classes.root} title="Links">
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Results links={links} setLink={setLink}/>
        </Box>
      </Container>
    </Page>
  );
};

export default LinksView;
