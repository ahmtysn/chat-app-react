import React from 'react';

import ReactEmoji from 'react-emoji';

const Message = ({ message: { text, user, time }, name }) => {
  let isCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isCurrentUser = true;
  }

  return isCurrentUser ? (
    <div
      style={{
        color: 'd7385e',
        border: '1px solid red',
        width: '40%',
        padding: '10px',
      }}
    >
      <p>{trimmedName}</p>
      <p>{ReactEmoji.emojify(text)}</p>
      <p>{time}</p>
    </div>
  ) : (
    <div
      style={{
        color: '#d7385e',
        border: '1px solid yellow',
        width: '40%',
        padding: '10px',
      }}
    >
      <p>{user}</p>
      <p>{ReactEmoji.emojify(text)}</p>
      <p>{time}</p>
    </div>
  );
};

export default Message;
