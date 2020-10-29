import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className='App'>
      <h1>Join</h1>
      <div>
        <input
          placeholder='Name'
          type='text'
          onChange={event => setName(event.target.value)}
        />
      </div>
      <div>
        <input
          placeholder='Room'
          type='text'
          onChange={event => setRoom(event.target.value)}
        />
      </div>
      <Link
        onClick={e => (!name || !room ? e.preventDefault() : null)}
        to={`/chat?name=${name}&room=${room}`}
      >
        <button type='submit'>Sign In</button>
      </Link>
    </div>
  );
}
