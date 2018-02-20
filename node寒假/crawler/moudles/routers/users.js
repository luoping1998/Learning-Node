const express = require('express');
var router = express.Router();

var getImg = require('../users/crawl_img');
var logIn = require('../users/login');
var getInfor = require('../users/getInfor');
var change = require('../libs/change');

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');	

var err,data,infor;
var session,username;

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
				var _callback = req.query.callback;
				var _data = null;
				_data = result ;
				res.type('text/javascript');
				res.send(_callback + '(' +JSON.stringify(_data) +')');
				res.send(result);
			}else{
				getInfor(username,session,function(infor){
					console.log(infor);
					console.log(typeof(infor));
					var _callback = req.query.callback;
					var _data = null;
					if(err){
						_data = {
							"err" : "server error"
						}
					} else{
						_data = infor;
					}
					res.type('text/javascript');
					res.send(_callback + '(' +JSON.stringify(_data) +')');
					//res.send(infor);

				})
			}
		})
})

module.exports = router;