const express = require("express");
const static = require("express-static");
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const multer = require('multer');

var consolidate = require('consolidate');

var server = express();
server.listen(8080);

//1.解析cookie
server.use(cookieParser('dsaasfkhwerqwe'));

//2.使用session
var arr = [];
for(var i = 0;i<10000;i++){
	arr.push('keys_'+Math.random());
}
server.use(cookieSession({name:'sess',keys:arr ,maxAge:20*3600*1000}));

//3.post数据
server.use(bodyParser.urlencoded({extended:false}));
server.use(multer({dest:'./file'}).any());

//4.配置模板引擎
//输出html
server.set('view engine','html');
//模板文件在./views目录找
server.set('views','../views');
//使用哪种模板引擎
server.engine('html',consolidate.ejs);		//当渲染html 使用ejs


//接收用户请求
server.get('/index',function(req, res){
	res.render('1.ejs',{name:'111'});		//渲染模板引擎 指定某个文件 传入需要的参数
})

//4.static数据
server.use(static('./www'));