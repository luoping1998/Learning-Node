const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

var users = require('./routers/users');

const server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.listen(8080);

server.use('/users',users);