const http = require('http');
const app = require('./app');
const port = 5000;
const server = http.createServer(app);

server.on('listening', () => {
  console.log('====================================');
  console.log('Listening on ' + port);
  console.log(`http://localhost:${port}/`);
  console.log('====================================');
});

server.listen(port);
