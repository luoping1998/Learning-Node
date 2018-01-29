var http = require('http');

								//创建http服务器
http.createServer(function (req, res){        
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write("Hello Node.js");
	res.end();
}).listen(8080, '127.0.0.1');

console.log('Server running on port 8080.');