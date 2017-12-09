var express = require('express');
var socket = require('socket.io');


//setup
var app = express();
var server = app.listen(8081, function(){
  console.log("Server Running on 8081");
});


//static
app.use(express.static('public'));


//socket
var io = socket(server);
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/oldEarth.html');
});
io.on('connection', function(socket){
  console.log("Connection " + socket.id);
  socket.on("given", function(data){
    console.log("Hello", data.searched+"!");
    socket.emit("returned", "server");
  });
});
