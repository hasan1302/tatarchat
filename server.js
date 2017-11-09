var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const port = 3000;
//app.get('/', function(req, res){
//  res.sendFile(__dirname + '/public/index.html');
//});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('eventServer', function (data) {
    console.log(data);
    socket.emit('eventClient', { data: 'Hello Client' });
});
});



http.listen(port, function(){
  console.log('listening on ' + port);
});
