var express = require('express');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');

var server = express();

server.use(cookieParser());	//解析cookie;
server.use(cookieSession({
	//maxAge:''				//session在cookie中存在的时间
	// name:'sess',			//sessionID在cookie中存名字
	keys:['aaa','bbbb','ccccc']
}));		

server.use('/',function(req, res) {

	req.session['count']='aaa';
	console.log(req.session);

	res.send('hhhhhh');

	// res.clearCookies(name);			//删除指定的cookie
})

server.listen(8080);

//cookie中的session存的为sessionID
//session_sign 为签名；