const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');	
var getImg = require('./users/crawl_img');
var logIn = require('./users/login');
var getInfor = require('./users/getInfor');
var change = require('./users/change');
var err ,data,infor;
var session ,username;

var server = express();
server.listen(8080);

server.get('/login',function(req, res){
	getImg(function(err,data){
	if(err){
		return ;
	}
		res.render('./enter.ejs',{src:data.imgCode,sess:data.session});	
	});
		//渲染模板引擎 指定某个文件 传入需要的参数
});

server.post('/login',function (req, res) {
	req.on('data',function(buf){
		buf = decodeURIComponent(buf);
		var arr = buf.split('&');
		username = change.chOthers(''+arr[0].split('='));
		var password = change.chOthers(''+arr[1].split('='));
		var verCode = change.chOthers(''+arr[2].split('='));
		
		var sess = arr[3].split('=');
		session = ''+sess;
		session = change.chSession(session);
		var result;

	logIn(username,password,verCode,session,
		function(result){
			if(result.err){
				console.log(result.result);
			}else{
				console.log(result.result);
			}
		});
	})
});

server.get('/infor',function (req, res) {
	getInfor(username,session,function(infor){
		console.log(infor);
	})
})

