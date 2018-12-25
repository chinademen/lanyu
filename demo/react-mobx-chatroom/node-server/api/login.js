const config = require('../config');
const redis = require('redis');
let client = redis.createClient(config.redis.port, config.domain, { auth_pass: config.redis.password });
client.auth(config.redis.password)
const sql = require('../mysql/index');
const md5 = require('md5');
const util = require('../util/index');

// 登入
const login = (req, res) => {
    const ip = util.getClientIP(req);
    let { username } = req.body;
    if (!username) username = '游客';
    // 校验该ip是否有其他用户在线，如果有，将其他用户踢下线
    util.signInCheck('ip', ip);
    // 校验该用户是否在线，如果有，将该用户踢下线、游客除外
    if (username !== '游客') {
        util.signInCheck('username', username);
    }
    console.log(req.session);
    const authorization = md5(username + new Date().getTime());
    // 在session中保存用户名，自定义身份标识，客户端ip
    req.session.username = username;
    req.session.authorization = authorization;
    req.session.ip = ip;
    
    var level = '1级小菜鸡';
    var levelLogo = config.baseUrl + '/images/level/1.png';
    var userAvatar = config.baseUrl + '/images/avatar/avatar30.jpg';
    if (username === 'amao') {
        level = '17级创世神';
        levelLogo = config.baseUrl + '/images/level/17.png';
        userAvatar = config.baseUrl + '/images/avatar/avatar24.jpg';
    }
    // 设置响应头
    res.append('authorization', authorization); // token
    // 设置响应body
    res.json({
        status: 0,
        message: '登录成功',
        data: {
            username: username, // 用户名
            level: level, // 用户等级
            levelLogo: levelLogo, // 用户等级logo
            userAvatar: userAvatar, // 用户聊天头像
        },
    });
    
}

// 登出
const logout = (req, res) => {
    // 清空对应域名下的session
    const { authorization } = req.headers;
    client.keys("sessionid:*", function (err, reply) {
        reply.forEach(item => {
            // 查找对应的session对象
            client.get(item, function (err, data) {
                // 删除指定的sessionid
                if (JSON.parse(data).authorization === authorization) {
                    client.del(item)
                }
            })
        })
    });
    res.json({
        status: 0,
        message: '退出成功'
    });
}

module.exports = {
    login,
    logout  
};
