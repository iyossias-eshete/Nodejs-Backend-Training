const http = require('http');

http.createServer( ( request, response) =>{
	console.log(response);
	//response.wrtieHead(200);
	response.write('IG says hello world');
	response.end();
}).listen(3000);
