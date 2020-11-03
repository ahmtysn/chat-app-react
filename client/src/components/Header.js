import React from 'react';
import { BiArrowBack, BiHelpCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';

const Header = ({ name, room }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#323739',
        color: '#fff',
      }}
    >
      <Link to='/' style={{ display: 'flex', color: '#fff' }}>
        <BiArrowBack style={{ marginRight: '10px', fontSize: '1.5rem' }} />
      </Link>
      <Typography variant='subtitle2' gutterBottom>
        You are now in <span style={{ fontWeight: 'bolder' }}>{room}</span>{' '}
        room...
      </Typography>
      <BiHelpCircle style={{ marginRight: '10px', fontSize: '1.5rem' }} />
    </div>
  );
};

export default Header;
