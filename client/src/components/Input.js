import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Input = ({ setMessage, sendMessage, message }) => {
  const changeHandler = e => {
    const value = e.target.value;
    if (value.trim()) {
      setMessage(value);
    } else {
      setMessage('');
    }
  };
  return (
    <form>
      <input
        type='text'
        placeholder='Type a message...'
        value={message}
        onChange={changeHandler}
      />
      <button onClick={e => sendMessage(e)}>Send</button>
      <Link to='/'>
        <AiOutlineHome />
      </Link>
    </form>
  );
};

export default Input;
