import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Header = ({ name, room }) => {
  return (
    <Grid container alignItems='center'>
      <Grid item xs={8}>
        <Typography variant='h3' gutterBottom>
          Welcome to Special Chat World
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant='h6' gutterBottom>
          @ahmtysn
        </Typography>
        <Typography variant='subtitle2' gutterBottom>
          you are now in <span style={{ fontWeight: 'bolder' }}>{room}</span>{' '}
          room
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
