const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

var users = require('./routers/users');
var admins = require('./routers/admin');

const server = express();

//设置响应头
server.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",'3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

server.use(bodyParser.urlencoded({ extended: false }));
server.listen(8080);

server.use('/users',users);
server.use('/admins',admins);