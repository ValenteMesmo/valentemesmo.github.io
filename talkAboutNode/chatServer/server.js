var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    fs.readFile('client.html', 'utf-8', function (error, data) {
        response.end(data);
    });
}).listen(1337);

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
    socket.on('send', function (data) {
        io.sockets.emit('receive', data);
    });
});