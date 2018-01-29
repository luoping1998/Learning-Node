var express = require('express');
var cookieParser = reqire('cookie-parser');

var server = express();


server.use(cookieParser('adjfjsalkfjklf'));

server.use('/',function(req, res) {
	req.secret='adjfjsalkfjklf';		//'签名' ：杜绝修改		此句可省略

	res.cookie('user','luoping',{signed : true});	//是否签名:是
	
	console.log(req.cookies);			//未签名的cookie
	console.log(req.signedCookies);		//签名的cookie
	res.send('hhhhhh');

	// res.clearCookies(name);			//删除指定的cookie
})

server.listen(8080);