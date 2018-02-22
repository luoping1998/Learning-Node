var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var db = mysql.createConnection({host:'localhost',user:'root',password:'luo...1998ping',database:'freshinfor'});

var getFinfor = require('../admins/getFinfors');

router.use('/getinfors',function(req,res){
	console.log(req.body);
	getFinfor(db, req.body.group,req.body.interview,function(result){
		res.send(result);
	})
})

module.exports = router;