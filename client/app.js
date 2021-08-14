const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', function() {
  console.log('client open');
  ws.on('message', function(message) {
    console.log('client receive message: %s', message);
    ws.close();
  })
  const time = new Date().getTime()
  const message = "from client " + time;
  console.log('client send message: %s', message);
  ws.send(message);
});
