var express = require('express'),
    app = express(),
    connect = require('connect').createServer(app),
    io = require('socket.io').listen(connect);
    chatter = require('chatter');


   connect.listen(3000);
   
   var chat_room = io;
   
   chatter.set_sockets(chat_room.sockets);

   app.get('/', function(req, res){
    res.sendfile(__dirname + '/public/index.html');
});

io.sockets.on('connection', function (socket) {
  chatter.connect_chatter({
    socket: socket,
    username: socket.id
  });
});