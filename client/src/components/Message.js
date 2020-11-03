import React from 'react';

import ReactEmoji from 'react-emoji';

import './message.css';

const Message = ({ message: { text, user, time }, name }) => {
  let isCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isCurrentUser = true;
  }

  return isCurrentUser ? (
    <div className='messageContainer justifyEnd'>
      <p className='sentText pr-10'>{trimmedName}</p>
      <div className='messageBox backgroundBlue'>
        <p className='messageText colorWhite'>{ReactEmoji.emojify(text)}</p>
        <p className='timeText colorWhite'>{time}</p>
      </div>
    </div>
  ) : (
    <div className='messageContainer justifyStart'>
      <p className='sentText pr-10 '>{user}</p>
      <div className='messageBox backgroundLight'>
        <p className='messageText colorDark'>{ReactEmoji.emojify(text)}</p>
        <p className='timeText colorDark'>{time}</p>
      </div>
    </div>
  );
};

export default Message;
