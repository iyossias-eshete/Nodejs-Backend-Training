const http = require('http');

http.createServer( (request, response)=>{
	response.write(' <div> Writing before the setTimeout </div> ');
	setTimeout( ()=>{
		response.write('Wriing inside the setTimeout');
		response.end();
	}, 2000);
	response.write('Writing under the setTimeout </br>');
	//response.end(); // uncommenting this would result in an error as responses can't be written more than once
	//the error is actually thrown on the write found inside the setTimeout as it happens
	// after the response has been ended in the code under the setTimeout
}).listen(3000);

console.log('Listening on 3000');
