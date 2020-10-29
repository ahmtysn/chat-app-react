import React, { useEffect } from 'react';

import ReactEmoji from 'react-emoji';

const Message = ({ message: { user, text, time }, name }) => {
  let sentByUser = false;

  if (user === name) {
    sentByUser = true;
  }

  return (
    <div>
      <p>{sentByUser ? name : user}</p>
      <p>{time}</p>
      <div>
        <p>{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  );
};

export default Message;
