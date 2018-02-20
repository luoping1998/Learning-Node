const express = require('express');
var router = express.Router();

var getImg = require('../users/crawl_img');
var logIn = require('../users/login');
var getInfor = require('../users/getInfor');
var signUp = require('../users/add_infor')
var change = require('../libs/change');

var err,data,infor;
var session,username;

//设置响应头
router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

router.get('/vcode',function(req, res){
	getImg(function(err,data){
		var _callback = req.query.callback;
		var _data = null;
		if(err){
			_data = {
				"err" : "server error"
			}
		} else{
			_data = {
				'sess':data.session,
				'vcode':data.imgCode
			}
		}
		res.type('text/javascript');
		res.send(_callback + '(' +JSON.stringify(_data) +')');
	});
		//渲染模板引擎 指定某个文件 传入需要的参数
});

router.post('/login',function(req, res){
	//var username ,password ,vcode ,session;
	var username = req.body.username;
	var password = req.body.password;
	var vcode = req.body.verCode;
	var session = req.body.session; 
	var result = null;
	logIn(username,password,vcode,session,
		function(result){
			console.log(result);
			if(result.error){
				res.send(result);
			}else{
				getInfor(username,session,function(infor){
					console.log(infor);
					var _data = null;
					if(err){
						_data = {
							"err" : "server error"
						}
					} else{
						_data = infor;
					}
					res.send(infor);

				})
			}
		})
})

router.post('/sign_up',function(req, res){
	console.log('sign up');
	signUp(req.body.group, req.body.infor, function(result){
		console.log(result);
		res.send(result);
	});
})

module.exports = router;