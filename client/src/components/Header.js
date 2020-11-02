import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';

const Header = ({ name, room }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#effad3',
        color: '#132743',
      }}
    >
      <Link to='/' style={{ alignSelf: 'flex-start' }}>
        <BiArrowBack />
      </Link>
      <Typography variant='h4' gutterBottom>
        Welcome to Emoji Chat
      </Typography>

      <Typography
        variant='subtitle2'
        gutterBottom
        style={{ marginBottom: '5%' }}
      >
        You are now in <span style={{ fontWeight: 'bolder' }}>{room}</span>{' '}
        room...
      </Typography>
    </div>
  );
};

export default Header;
