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
const redis = require('redis');
const redisStore = require('connect-redis')(session);

const config = require('./config');

const app = express();

// 输出日志
// const accessLogStream = fs.createWriteStream(path.join(__dirname, 'logs/access.log'));
// app.use(morgan('common', { stream: accessLogStream }));

// 兼容json数据
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 允许所有跨域请求
// 默认请求上, 浏览器只能访问以下默认的响应头 Cache-Control, Content-Language, Content-Type, Expires, Last-Modified, Pragma
// 如果要前端的axios等能获取到自定义响应头, 如Authorization, 则要设置 Access-Control-Expose-Headers
// 如果要前端的axios等能发送自定义请求头, 如Authorization, 则要设置 Access-Control-Allow-Headers
// Access-Control-Allow-Headers 表示 允许前端传给后端的 字段
// Access-Control-Expose-Headers 表示 允许前端接收后端给的 字段
app.all('*', function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	res.header('Access-Control-Allow-Headers', 'X-Requested-With');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	res.header('Access-Control-Expose-Headers', 'Authorization'); 
	next();
});

// 设置静态资源路径     访问例子: http://207.148.73.3:80/images/level/1.png
app.use(express.static(path.join(__dirname, 'public')));

// 创建 redis客户端实例对象
let client = redis.createClient(config.redis.port, config.domain, { auth_pass: config.redis.password });
// 设置密码的redis必须 加上 client.auth(password) 验证，否则会报错 Ready check failed: NOAUTH Authentication required
client.auth(config.redis.password);

// 设置session保存的redis对象
var sessionStore = new redisStore({ 
	host: config.domain,
	port: config.redis.port,
	db: config.redis.db,                  // 使用第0个数据库
	pass: 'gPj-Z9qw',        	// 数据库密码 默认无
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

// 路由
app.use('/', require('./router/index'));

// 创建http服务
const server = http.createServer(app);

/**
 * 	监听指定端口 + 域名, 
 *  server.listen(port, host, backlog, callback])  启动一个TCP服务监听输入的 port 和 host.
 *  注意：如果 host 省略，如果 ipv6 可用，使用req.headers['x-forwarded-for']获取客户端域名的时候会返回类似：::ffff:127.0.0.1的连接，所以想获取正常的客户端域名，最好不要省略host
*/
server.listen(config.port, config.domain, function () {
	console.log('listen ' + config.baseUrl);
});

// 创建socketio对象
const io = socketio(server);

// 在线用户
var onlineUsers = {};
// 当前在线人数
var onlineCount = 0;
// 用户等级和logo
var level = '1级小菜鸡';

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
		// 向所有客户端广播发布的消息
		io.emit('chat message', obj);
		console.log('发消息的用户消息: ', obj);
		console.log(obj.username + '说：' + obj.content);
	});

});

