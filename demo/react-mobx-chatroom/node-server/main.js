// node模块
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
// 第三方模块
const express = require('express');
const socketio = require('socket.io');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const md5 = require('md5');
const session = require('express-session');
// 用于上线环境，将session存储到redis
const redisStore = require('connect-redis')(session);
// 用于开发和测试环境，将redis存储到内存当中
// const sessionStore = new session.MemoryStore({ reapInterval: 10000 });

const app = express();

// 兼容json数据
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 创建redis对象
const sessionStore = new redisStore({ 
    host: '127.0.0.1',
    port: 6379,
    db: 0,                  // 使用第0个数据库
    // pass: 123456,        // 数据库密码 默认无
    prefix: 'sessionid:',   // 数据表前缀, 默认为"sess:"
    ttl: 10 * 60,           // 过期时间 单位：s, 当session保存在redis中，在此处设置过期时间，而不是在maxAge中设置过期时间
});

// 设置session缓存到redis
app.use(session({           // session
    store: sessionStore,    // 设置session存储在redis中
	secret: 'keyboard cat',
	genid: function (req) { // 生成一个自定义的sessionid串，实际值： sessionid:xxx...
		const { username } = req.body;
		if (username) {
			return md5(username);
		}
	},
    name: 'token', // 设置sessionid的名字，默认是connect.sid
    resave: true,  
    rolling: true, // 用户每次请求都修改session的保存时间
    saveUninitialized: false, // 配置session是否需要初始化
}));

// 输出日志
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'logs/access.log'));
app.use(morgan('common', { stream: accessLogStream }));



// 允许所有跨域请求
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// 设置静态资源路径     访问例子: http://localhost:80/images/level/1.png
app.use(express.static(path.join(__dirname, 'public')));

// 路由
app.use('/', require('./router/index'));

// 创建http服务
const server = http.createServer(app);

// 监听80端口
server.listen(80, function () {
	console.log('listen http://localhost:80/');
});

// 创建socketio对象
const io = socketio(server);

// 在线用户
var onlineUsers = {};
// 当前在线人数
var onlineCount = 0;
// 用户等级和logo
var level = '1级小菜鸡';
var levelLogo = 'http://127.0.0.1/images/level/1.png';

io.on('connection', function (socket) {
    console.log('新用户加入');

	// 监听新用户加入
	socket.on('login', function (obj) {
		// 将新加入用户的唯一标识当作socket的名称，后面退出的时候会用到
		socket.name = obj.username;	
		
		// 检查在线列表，如果不在里面就加入
		if(!onlineUsers.hasOwnProperty(obj.username)) {
			onlineUsers[obj.username] = obj.username;
			// 在线人数 + 1
			onlineCount++;
		}
		
        // 向所有客户端广播用户加入
        io.emit('login', {onlineUsers: onlineUsers, onlineCount: onlineCount, user: obj});
        console.log(obj.username + '加入了聊天室');
	});
	
	// 监听用户退出
	socket.on('disconnected', function () {
		console.log(socket);
		// 将退出的用户从在线列表中删除
		if(onlineUsers.hasOwnProperty(socket.name)) {
			// 退出用户的信息
			var obj = {username:socket.name, username:onlineUsers[socket.name]};
			
			// 删除
			delete onlineUsers[socket.name];
			// 在线人数-1
			onlineCount--;
			
			// 向所有客户端广播用户退出
			io.emit('logout', {onlineUsers: onlineUsers, onlineCount: onlineCount, user:obj});
            console.log(obj.username + '退出了聊天室');
		}
	});
	
	// 监听用户发布聊天内容
	socket.on('chat message', function (obj) {
		// 设置用户的等级和logo
		if (obj.username === 'amao') {
			level = '17级创世神';
			levelLogo = 'http://127.0.0.1/images/level/17.png'
		} else {
			level = '1级小菜鸡';
			levelLogo = 'http://127.0.0.1/images/level/1.png'
		}
		obj.level = level;
		obj.levelLogo = levelLogo;

		// 向所有客户端广播发布的消息
		io.emit('chat message', obj);
		console.log('发消息的用户消息: ', obj);
		console.log(obj.username + '说：' + obj.content);
	});
  
});
