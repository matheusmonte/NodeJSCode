var http = require('http');
http.createServer(function (req,res){
	res.writeHead(200, {'Content-Type' : 'text-plain'});
	res.end('First REsponse on Node JS');
}).listen(3000, '127.0.0.1');

console.log('My first server is on!');