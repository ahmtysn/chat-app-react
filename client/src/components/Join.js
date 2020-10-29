import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [filled, setFilled] = useState(false);

  const getName = e => {
    const value = e.target.value;
    if (value.trim()) {
      setName(value);
    }
  };

  const getRoom = e => {
    const value = e.target.value;
    if (value.trim()) {
      setRoom(value);
    } else {
      setRoom('');
    }
  };

  useEffect(() => {
    if (name && room) {
      setFilled(true);
    }
  }, [name, room]);

  return (
    <div className='App'>
      <h1>Join</h1>
      <form>
        <div>
          <input placeholder='Name' type='text' onChange={getName} />
        </div>

        <div>
          {/* <label for='room'>Room</label> */}
          <select name='room' id='room' onChange={getRoom}>
            <option value=''>Select Room</option>
            <option value='Relation'>Relation</option>
            <option value='Family'>Family</option>
            <option value='Activity'>Activity</option>
            <option value='Secret'>Secret</option>
            <option value='Technology'>Technology</option>
            <option value='Hobby'>Hobby</option>
            <option value='Sport'>Sport</option>
            <option value='Cinema'>Cinema</option>
            <option value='Others'>Others</option>
          </select>
        </div>
        <div>
          <input
            placeholder='Create or select'
            value={room}
            type='text'
            onChange={getRoom}
          />
        </div>
        <Link to={filled && `/chat?name=${name}&room=${room}`}>
          <button type='submit'>Join Chat</button>
        </Link>
      </form>
    </div>
  );
}
