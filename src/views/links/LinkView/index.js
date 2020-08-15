import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import LinkMinimal from './LinkMinimal';
import LinkDetails from './LinkDetails';
import { useParams } from 'react-router-dom';

import api, { dummyLink } from 'src/dswg';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const LinkView = () => {
  const classes = useStyles();
  const [link, setLink] = useState(dummyLink);
  const params = useParams();

  useEffect(() => {
    api.fetchLink(params.linkName)
      .then(setLink)
      .catch(err => console.log(err));
  }, [params]);

  const updateLink = (newLink) => {
    newLink = {...link, ...newLink};
    console.log(newLink)
    api.updateLink(link.name, newLink)
      .then(() => setLink(newLink))
      .catch(err => console.log(err));
  }

  return (
    <Page className={classes.root} title={"Link - " + link.name}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <LinkMinimal link={link} updateLink={updateLink}/>
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <LinkDetails link={link} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default LinkView;
