const http = require('http');

http.createServer( ( req, res) =>{
	console.log(response);
	//res.wrtieHead(200);
	res.write('IG says hello world');
	res.end();
}).listen(3000);
