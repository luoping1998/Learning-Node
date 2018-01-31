var mysql = require('mysql');

//1.连接数据库createConnection(哪台服务器，用户名，密码，库名)
var db = mysql.createConnection({host:'localhost',user:'root',password:'luo...1998ping',database:'new'});

//console.log(db);

//2.查询
db.query('SELECT * FROM `userdata`',function(err,data){
	if(err) 
		console.log('error!');
	else
		console.log(data);
});

/*
sql语句：

添加：INSERT
INSERT INTO 表 （字段列表） VALUES(值列表)
INSERT INTO userdata (id,user,password) VALUES(0,str1,str2);

删除：DELETE

修改：UPDATE

查询：SELECT 什么 FROM `表` 

*/