import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ name, room }) => {
  return (
    <div>
      <h2>Welcome to Special Chat World</h2>
      <Link to={`/chat?name=${name}&room=${room}`}>
        <p>created by @ahmtysn</p>
      </Link>
      <p>
        You are now in{' '}
        <span
          style={{ fontWeight: 'bolder' }}
          onClick={() => console.log('deneme')}
        >
          {room}
        </span>{' '}
        room.
      </p>
      <a href='/'>X(exit)</a>
    </div>
  );
};

export default Header;
