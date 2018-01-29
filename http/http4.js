var http = require('http');
var url = 'http://jyc.xupt.edu.cn/';     //西邮教务系统网址
var fs = require('fs');

http.get(url, function (res) {
	var html = '';

	res.on('data', function (data) {
		html +=data;
	})

	res.on('end', function (){
		fs.writeFile('example.html',html ,function() {
			console.log('It\'s saved!');
		})
	})
}).on('error',function () {
	console.log('获取数据失败！');
})