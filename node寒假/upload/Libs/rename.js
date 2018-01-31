const fs = require('fs');

//重命名 原文件名 ->  改成的名字  执行的回调函数
fs.rename('a.txt','b.txt',function(err,data){
	console.log(err);
})