const protocol = 'http';
const domain = '207.148.73.3';
// const domain = '127.0.0.1';
const port = 8080; // 服务器端口
const baseUrl = protocol + '://' + domain + ':' + + port;

// redis
const redis = {
    port: 6379,  // 端口
    user: 'root',  // 用户名
    password: '123456', // 密码
    db: 0 // 数据库 
};

// mysql
const mysql = {
    port: 3306,  // 端口
    user: 'root',  // 用户名
    password: '123456', // 密码
    database: 'chatroom' // 数据库名
};

module.exports = {
    baseUrl,
    protocol,
    port,
    domain,
    redis,
    mysql
};