var http = require('http');
var urlLib = require('url');

http.createServer(function(req, res) {
	var obj = urlLib.parse(req.url,true);
	var url = obj.pathname;
	var query = obj.query;

	console.log(url,query);
}).listen(8080);