var express = require('express');

var server = express();

// var cookieParser = require('cookie-parser');

server.use('/',function(req, res) {
	res.cookie('user','luoping',{path:'/'});
	res.send('hhhhhh');
})

/*
	server.use(path,callback(req,res){
		res.cookie(NAME,VALUE,{path:'',maxAge:''});		//在path目录下才能读取到cookie
		res.send();//		//发送响应
	})
 */
server.listen(8080);