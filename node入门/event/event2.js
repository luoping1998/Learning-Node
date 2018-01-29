var fa = require("fs");  

fs.readFile("input.txt", function (err, data){    //异步读文件
	if(err){
		console.log(err.stack);
		return;
	}
	console.log(data.toString());
});
console.log("end .");