import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const SideBarInfo = ({ users }) => (
  <Grid container className='sidebar'>
    {users && (
      <div>
        <Typography variant='h4' gutterBottom>
          Online Users
        </Typography>
        <Typography variant='subtitle1' gutterBottom>
          {users.map(({ name }) => (
            <div key={name} className='activeItem'>
              {name}
            </div>
          ))}
        </Typography>
      </div>
    )}
  </Grid>
);

export default SideBarInfo;
