const fs = require('fs');

const file = fs.createReadStream('fruits.txt');

file.pipe(process.stdout);
// file.on('readable', function(){
//   var chunk;
//   while(null !== (chunk = file.read())){
//     console.log(chunk.toString());
//   }
// });

/*By default, stream.end() is called on the destination Writable stream when the source Readable stream emits 'end', so that the destination is no longer writable. To disable this default behavior, the end option can be passed as false, causing the destination stream to remain open:


reader.pipe(writer, { end: false });
*/

/*
piping index to response
var fs = require('fs');
var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});

  var file = fs.createReadStream('index.html');
  file.pipe(response);
}).listen(8080);

*/
