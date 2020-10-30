import React from 'react';

import Typography from '@material-ui/core/Typography';

const Header = ({ name, room }) => {
  return (
    <div>
      <Typography variant='h3' gutterBottom>
        Welcome to Special Chat World
      </Typography>
      <Typography variant='h6' gutterBottom>
        @ahmtysn
      </Typography>
      <Typography variant='subtitle2' gutterBottom>
        you are now in <span style={{ fontWeight: 'bolder' }}>{room}</span> room
      </Typography>
    </div>
  );
};

export default Header;
