const express = require("express");
const bodyParser = require('body-parser');		//解析上传文字类
const multer = require('multer');				//解析上传文件
const pathLib = require('path');				//解析路径

var fs = require('fs');

var server = express();
var objMulter = multer({dest:'./www/file/'});			//创建multer对象，将文件存在dest路径下

server.use(objMulter.any());

//只能处理enctype="url..."数据	
//server.use(bodyParser.urlencoded({extended:false}));


// server.post('/',function (req,res) {
// 	console.log(req.files);
// })


server.post('/',function (req,res) {
	var newName = req.files[0].path+pathLib.parse(req.files[0].originalname).ext;
	//新文件名 =  path + 扩展名
	fs.rename(req.files[0].path,newName,function(err){
		if(err) 
			res.send("error!");
		else 
			res.send("success");
	});
})

server.listen(8080);


/*
	files:
	{
	filename:'',
	originalname:'文件名',
	encoding:'编码',
	mimetype:'类型',
	buffer:'磁盘',
	size:'大小'
	}

 */