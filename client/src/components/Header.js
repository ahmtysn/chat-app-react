import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Header = ({ name, room }) => {
  return (
    <div>
      <h2>Welcome to Special Chat World</h2>
      <Link to='/'>
        <AiFillCloseCircle />
      </Link>
      <p>created by @ahmtysn</p>
      <p>
        You are now in <span style={{ fontWeight: 'bolder' }}>{room}</span>{' '}
        room.
      </p>
    </div>
  );
};

export default Header;
