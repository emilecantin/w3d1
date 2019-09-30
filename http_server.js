'use strict';

let http = require('http');

// define app constants
const PORT = 9000;

// create a server with a responder function
let server = http.createServer(function respondToRequests(request, response){
        // respond to all requests in this function
    console.log('Received a', request.method, 'request for the url:', request.url);
    response.end('Hello from the other siiiiiiide!');
});

// start the server
server.listen(PORT, function onServerStart(){
    console.log("Server listening on: http://localhost:%s", PORT);
});
