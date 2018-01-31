const express = require('express');

var server = express();

//创建router
var userRouter = express.Router();

//将userRouter添加在server上
server.use('/user',userRouter);

//设置router 
userRouter.use('/login.html',function(req, res){
	res.send("login.");
})


var moniterRouter = express.Router();
server.use('/moniter',moniterRouter);

//再创建router
var delRouter = express.Router();
delRouter.use('/delname.html',function (req, res) {
	res.send("del name.");
})

//将router添加在moniterRouter上
moniterRouter.use('/del',delRouter);

server.listen(8080);


/*

var router = express.Router();
router.use('/访问',回调函数/其他router);

 */