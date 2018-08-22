// node自带模块
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
// 第三方模块
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// const cookieParser = require('cookie-parser');
const session = require('express-session');
const redisStore = require('connect-redis')(session);
const sessionStore = new redisStore({ 
    host: '192.168.28.9',
    port: 6379,
    db: 0,                  // 使用第0个数据库
    // pass: 123456,        // 数据库密码 默认无
    prefix: 'sessionid:',   // 数据表前缀, 默认为"sess:"
    ttl: 10 * 60,           // 过期时间 单位：s
});
const app = express();
// app.use(cookieParser('session_id'));    // cookie
app.use(session({           // session
    store: sessionStore,    // 设置session存储在redis中
    secret: 'session_id',
    // name: Math.floor(Math.random()*1000) + '_' + new Date().getTime() + '_' + Math.floor(Math.random()*10000), // sessionKey 为  (1-1000)_当前时间戳_(1_10000)
    resave: true,
    rolling: true,
    saveUninitialized: false,
    // cookie : {
    //     httpOnly: true,
    //     maxAge : 10 * 60 * 1000, // 设置 session 的有效时间，单位毫秒    该有效时间对存在redis和数据库中的session无效
    // },
}));

// 输出日志
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'logs/access.log'));
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

// 设置静态资源路径     访问例子: http://localhost:9000/images/w.jpg
app.use(express.static(path.join(__dirname, 'public')));

// 路由
app.use('/', require('./router/index'));

http.createServer(app).listen(9000);

console.log("Start Serving Success  >>>  localhost:9000");


