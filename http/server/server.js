var http = require('http');
var fs = require('fs');
var querystring = require('querystring');
var urlLib = require('url');

//存储数据 一旦服务器关闭，数据清空
var users={};

http.createServer(function(req,res) {
	var str = '';

	req.on('data',function(data){
		str+=data;
	})

	//解析数据
	req.on('end',function () {
		var obj = urlLib.parse(req.url,true);

		var url = obj.pathname;
		var GET = obj.query;
		var POST = querystring.parse(str);

		//请求接口
		if(url == '/user'){
			switch(GET.act){
				case 'reg':
					// console.log(GET.user,GET.pass);
					if(users[GET.user]){
						res.write('{"ok":false,"msg":"用户已存在"}');
						console.log('reg fail');
					}else {
						if(GET.pass){
							res.write('{"ok":true,"msg":"注册成功"}');
							users[GET.user]=GET.pass;
							console.log(users);
							console.log('reg success');
						}else{
							res.write('{"ok":false,"msg":"未输入密码"}');
						}
					}
					break;
				case 'login':
					if(users[GET.user]==null){
						res.write('{"ok":false,"msg":"用户不存在"}');
						console.log('user not exits');
					}else if(users[GET.user]!=GET.pass){
						res.write('{"ok":false,"msg":"用户名错误或密码错误"}');
						console.log('user wrong');
					}else{
						res.write('{"ok":true,"msg":"登录成功"}');
						console.log('login success');
					}
					break;
				default:
					res.write('{"ok":false,"msg":"未知操作"}');
					console.log('unexpected error');
			}
			res.end();
		}else{
			//请求文件
			var file_name = './www' + url;
			fs.readFile(file_name,function(err,data) {
				if(err){
					res.write('404');
				}else{
					res.write(data);
				}
				res.end();
			});
		}
		
	});

}).listen(8080);