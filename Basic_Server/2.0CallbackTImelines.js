const http = require('http');

http.createServer( (req, res)=>{
	res.write(' <div> Writing before the setTimeout </div> ');
	setTimeout( ()=>{
		res.write('Wriing inside the setTimeout');
		res.end();
	}, 2000);
	res.write('Writing under the setTimeout </br>');
	//res.end(); // uncommenting this would result in an error as responses can't be written more than once
	//the error is actually thrown on the write found inside the setTimeout as it happens
	// after the response has been ended in the code under the setTimeout
}).listen(3000);

console.log('Listening on 3000');
