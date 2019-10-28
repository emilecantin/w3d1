const http = require('http');

const hostname = '127.0.0.1';
const port = 9000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  if(req.url === '/') {
    console.log('Request:', req.url);
    res.end('Hello, Émile!\n');
  } else if(req.url === '/potato') {
    console.log('Request:', req.url);
    res.end('Hello, Prince Edward Island');
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
