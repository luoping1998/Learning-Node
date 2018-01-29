
// request = {
// 	url : 发出请求的网址,
// 	method : HTTP请求的方法,
// 	headers : HTTP请求的所有HTTP头信息
// }

var  http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.write(req.url+' '+req.method+' '+req.headers);
	res.end();

}).listen(8080,'127.0.0.1');

console.log('Server is running on port 8080');