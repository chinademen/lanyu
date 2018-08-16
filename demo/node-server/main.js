// node自带模块
const http = require('http');
const fs = require('fs');
const path = require('path');
// 第三方模块
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
// 输出日志
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'));
app.use(morgan('common', { stream: accessLogStream }));

// 兼容json数据
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 允许所有跨域请求
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// 路由
app.use('/', require('./router/index'));

http.createServer(app).listen(9000);

console.log("Start Serving Success  >>>  localhost:9000");


