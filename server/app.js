const WebSocket = require('ws');

const wss = new WebSocket.Server({port: 8080});

wss.on('connection', function(ws) {
  console.log('server connection');
  ws.on('message', function(message) {
    console.log('server receive message: %s', message);
    ws.send(message);
  });
});
