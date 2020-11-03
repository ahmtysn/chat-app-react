import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';
const Messages = ({ messages, name, className }) => (
  <ScrollToBottom className={className}>
    {messages.map((message, i) => (
      <div key={i} style={{ padding: '10px' }}>
        <Message message={message} name={name} />
      </div>
    ))}
  </ScrollToBottom>
);
export default Messages;
