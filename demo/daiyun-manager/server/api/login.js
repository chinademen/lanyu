const redis = require('redis');
const md5 = require('md5');
const config = require('../config');
let client = redis.createClient(config.redis.port, config.domain, { auth_pass: config.redis.password });
client.auth(config.redis.password)
const sql = require('../mysql');
const util = require('../util');

// 登入
const login = (req, res) => {
    const ip = util.getClientIP(req);
    let { userAccount, userPassword } = req.body;
    // 校验该ip是否有其他用户在线，如果有，将其他用户踢下线
    util.signInCheck('ip', ip);
    // 校验该用户是否在线，如果有，将该用户踢下线
    util.signInCheck('userAccount', userAccount);
    const authorization = md5(userAccount);
    // 在session中保存用户名，自定义身份标识，客户端ip
    req.session.userAccount = userAccount;
    req.session.authorization = authorization;
    req.session.ip = ip;
    // 设置响应头
    res.append('authorization', authorization);
    // 设置响应body
    res.json({
        status: 1,
        message: '登录成功',
        data: {
            userAccount: userAccount
        }
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
        status: 1,
        message: '退出成功'
    });
}

module.exports = {
    login,
    logout  
};
