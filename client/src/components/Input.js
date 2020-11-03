import React from 'react';

import './input.css';

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
    <form className='form'>
      <input
        className='input'
        type='text'
        placeholder='Type a message...'
        value={message}
        onChange={changeHandler}
      />
      <button className='sendButton' onClick={e => sendMessage(e)}>
        Send
      </button>
    </form>
  );
};

export default Input;
