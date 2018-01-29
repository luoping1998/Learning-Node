var server = require('express');

var users = {};

server.get('/login',function(req, res){
	var user = req.query['user'];
	var pass = req.query['pass'];

	if(users[user]==null){
		res.send({ok : false , msg : '用户不存在'});
	}else if(users[user]!=pass){
		res.send({ok : false , msg :'密码错误'});
	}else {
		res.send({ok : true , msg :'登录成功'});
	}
});

server.get('/reg',function(req, res){
	var user = req.query['user'];
	var pass = req.query['pass'];

	if(users[user]){
		res.send({ok : false , msg : '用户存在'});
	}else if(pass==null){
		res.send({ok : false , msg : '未输入密码'});
	}
	else {
		users[user]=pass;
		res.send({ok : true , msg :'注册成功'});
	}
});


server.use('/reg',function (req, res) {
	
})
server.listen(8080);