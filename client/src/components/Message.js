import React from 'react';

import ReactEmoji from 'react-emoji';

const Message = ({ message: { user, text, time }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    <div>
      <p>{isSentByCurrentUser ? trimmedName : user}</p>
      <p>{time}</p>
      <div>
        <p>{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  );
};

export default Message;
