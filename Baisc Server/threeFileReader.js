var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  response.writeHead(200);
  fs.readFile('index.html',(err,content)=>{
    if(err){
      response.writeHead(500);//check if this is the write server error code
      response.write(`An error ${err} occured!`);
      return res.end();
    }
    response.writeHead(200, {'Content-Type' : 'text/html'});
    //response.writeHead(200);
    response.write(content);
    response.end();
  })

}).listen(8080);

