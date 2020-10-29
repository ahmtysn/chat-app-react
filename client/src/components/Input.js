import React from 'react';

const Input = ({ setMessage, sendMessage, message }) => {
  console.log({ message });
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
    </form>
  );
};

export default Input;
