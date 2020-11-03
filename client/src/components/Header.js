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
        backgroundColor: '#28272a',
        color: '#fff',
        borderBottom: '2px solid #999',
      }}
    >
      <Link to='/' style={{ display: 'flex', color: '#fff' }}>
        <BiArrowBack style={{ marginRight: '10px', fontSize: '1.5rem' }} />
      </Link>
      <div style={{ textAlign: 'center' }}>
        <Typography variant='h5' gutterBottom>
          welcome to coders chat
          <span style={{ fontWeight: 'bolder' }}> {name}!</span>
        </Typography>
        <Typography variant='subtitle2' gutterBottom>
          ...you are now in <span style={{ fontWeight: 'bolder' }}>{room}</span>{' '}
          room...
        </Typography>
      </div>

      <BiHelpCircle style={{ marginRight: '10px', fontSize: '1.5rem' }} />
    </div>
  );
};

export default Header;
