// node自带模块
const http = require('http');
const path = require('path');
// 第三方模块
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

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

// 设置静态资源路径     访问例子: http://localhost:9000/images/w.jpg
app.use(express.static(path.join(__dirname, 'public')));

// 路由
app.use('/', require('./router/index'));

http.createServer(app).listen(9000);


