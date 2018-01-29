var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
	
	//异步读取data.txt文件 ，readData为读取完成后执行的回调函数
	fs.readFile('data.txt',function readData(err, data) {
		res.writeHead(200,{'Content-Type':'text/plain'});
		res.end(data);
	});

	fs.createReadStream('./index.html').pipe(res);
	//读取到文件流里
}).listen(8080,'127.0.0.1').on('error',function (err) {
  	console.log(err);
  })

console.log('Server running on port 8080.');