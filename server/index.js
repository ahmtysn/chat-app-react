const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');
const formatMessage = require('./formatMessage');

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
app.use(router);

io.on('connect', socket => {
  const admin = 'admin';
  socket.on('join', ({ name, room }, cb) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return cb(error);

    socket.join(user.room);

    socket.emit(
      'message',
      formatMessage(admin, `${user.name}, welcome to room ${user.room}.`),
    );
    socket.broadcast
      .to(user.room)
      .emit('message', formatMessage(admin, `${user.name} has joined!`));

    io.to(user.room).emit('roomData', {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    cb();
  });

  socket.on('sendMessage', (message, cb) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', formatMessage(user.name, message));
    cb();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit(
        'message',
        formatMessage(admin, `${user.name} has left.`),
      );
      io.to(user.room).emit('roomData', {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
    }
  });
});

server.listen(process.env.PORT || 5000, () =>
  console.log(`Server has started.`),
);
