import React from 'react';

import Typography from '@material-ui/core/Typography';

const SideBarInfo = ({ users }) => (
  <div>
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
  </div>
);

export default SideBarInfo;
