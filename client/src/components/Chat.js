import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import '../App.css';

import Header from './Header';
import SideBarInfo from './SideBarInfo';
import Messages from './Messages';
import Input from './Input';

import Grid from '@material-ui/core/Grid';

const ENDPOINT = 'https://react-chat-ayk.herokuapp.com/'; // localhost:5000

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);

    socket.emit('join', { name, room }, error => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [...messages, message]);
    });

    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = event => {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  return (
    <Grid container className='App'>
      <Grid item xs={12} className='chat-header'>
        <Header name={name} room={room} />
      </Grid>
      <Grid item container xs={12} className='chat-body'>
        <Grid item xs={3}>
          <SideBarInfo users={users} />
        </Grid>
        <Grid item xs={9} className='chat-message'>
          <Messages messages={messages} name={name} />
          <Input
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Chat;
