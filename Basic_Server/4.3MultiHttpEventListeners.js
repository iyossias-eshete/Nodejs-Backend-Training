const http = require('http');

const server = http.createServer();
server.on('request', function(req, res) {
  res.writeHead(200);
  res.write("Hello, this is IG");
  res.end();
});

//results in a runtime error as we are writing, via the second listener, after ending a response.
/*server.on('request', function(req, res) {
  res.writeHead(200);
  res.write("Hello, this is IG");
  res.end();
});*/

server.on('close', function() {
	console.log("Closing down the server...");
});
server.listen(3000);

