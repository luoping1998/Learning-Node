const express = require('express');
var router = express.Router();

var mysql = require('mysql');
var db = mysql.createConnection({host:'localhost',user:'root',password:'luo...1998ping',database:'freshinfor'});

var getImg = require('../users/crawl_img');
var logIn = require('../users/login');
var getInfor = require('../users/getInfor');

var addInfor = require('../mysql/add_infor');
var existInfor = require('../mysql/exist_infor');

var change = require('../libs/users_lib/change');

var err,data,infor;
var session,username;

router.get('/vcode',function(req, res){
	getImg(function(err,data){
		var _callback = req.query.callback;
		var _data = null;
		if(err){
			_data = {
				"err" : err
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
	addInfor(db,req.body.group,req.body.infor,req.body.contact, function(result){
		res.send(result);
	});
})

router.post('/exist',function(req,res){
	existInfor(db,req.body.atrr,req.body.value,function(result){
		res.send(result);
	})
})

module.exports = router;