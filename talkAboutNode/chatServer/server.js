var http = require('http');
var fs = require('fs');

var app = http.createServer(function (request, response) {
    fs.readFile("client.html", 'utf-8', function (error, data) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(data);
        response.end();
    });
}).listen(process.env.PORT);

var io = require('socket.io').listen(app);

io.sockets.on('connection', function (socket) {
    socket.on('message_to_server', function (data) {
        io.sockets.emit("message_to_client", data);
    });
});