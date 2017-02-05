const path = require('path');
const http = require('http');
const express = require('express'); // npm i express --save
const socketIO = require('socket.io'); // npm i socket.io --save

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

// show public html
app.use(express.static(publicPath));

// Event Listner
io.on('connection', (socket) => {
  console.log('New user connected');

  // Socket Emitter
  socket.emit('newMessage', {
    from: 'John',
    text: 'See you then',
    createdAt: 12333
  });

  // Socket Listner
  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
