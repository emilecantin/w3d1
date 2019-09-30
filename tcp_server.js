const net = require('net');
const server = net.createServer((c) => {
  // 'connection' listener.
  console.log('client connected');
  c.on('end', () => {
    console.log('client disconnected');
  });
  c.on('data', (data) => {
    console.log('Received:', data);
    c.write('you said:');
    c.write(data);
    c.write('\r\n');
  })
  c.write('hello\r\n');
  c.pipe(c);
});
server.on('error', (err) => {
  throw err;
});
server.listen(9000, () => {
  console.log('server bound');
});
