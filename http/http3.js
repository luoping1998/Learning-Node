var http = require('http');


//根据url不同 显示不同页面
http.createServer(function(req, res) {

	if(req.url == "/") {
		res.writeHead(200, {"Content-Type":'text/html'});
		res.end("Welcome to the homepage!");
	}

	else if(req.url == "/about") {
		res.writeHead(200, {"Content-Type":"text/html"});
		res.end("Welcome to the about page!");
	}

	else{
		res.writeHead(404, {"Content-Type":"text.plain"});
		res.end("404 error! File not found.");
	}
}).listen(8080,"localhost");