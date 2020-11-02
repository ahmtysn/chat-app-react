import React, { useState, useEffect } from 'react';
import { Grid, Divider, Box, makeStyles } from '@material-ui/core';
import queryString from 'query-string';
import io from 'socket.io-client';

import '../App.css';

import Header from './Header';
import SideBarInfo from './SideBarInfo';
import Messages from './Messages';
import Input from './Input';

const ENDPOINT = 'https://react-chat-ayk.herokuapp.com/'; // localhost:5000

let socket;

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
  chatContainer: {
    height: '100%',
    '& > div': {
      height: '80%',
    },
  },
  chatMessage: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#132743',
    color: '#edc988',
  },
}));

const Chat = ({ location }) => {
  const classes = useStyles();
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
    <div className={classes.root}>
      <Header name={name} room={room} />
      <Grid container className={classes.chatContainer}>
        <Box
          component={Grid}
          item
          sm={3}
          display={{ xs: 'none', sm: 'block' }}
          style={{ backgroundColor: '#edc988' }}
        >
          <SideBarInfo users={users} style={{ height: '100vh' }} />
        </Box>
        <Grid item xs={12} sm={9} className={classes.chatMessage}>
          <Messages messages={messages} name={name} />
          <Input
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Chat;
