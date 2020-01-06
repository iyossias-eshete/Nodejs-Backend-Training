const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {
  res.writeHead(200);
  fs.readFile('index.html',(err,content)=>{
    if(err){
      res.writeHead(500);//check if this is the write server error code
      res.write(`An error ${err} occured!`);
      return res.end();
    }
    res.writeHead(200, {'Content-Type' : 'text/html'});
    //res.writeHead(200);
    res.write(content);
    res.end();
  })

}).listen(3000);

