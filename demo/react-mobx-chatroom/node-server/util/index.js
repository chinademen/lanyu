const config = require('../config');
const redis = require('redis');
const client = redis.createClient(config.redis.port, config.domain);

// 获取用户 ip 地址
function getClientIP(req) {
    // 判断是否有ip、反向代理IP、connection的远程IP、后端的socket的IP
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    if (ip.split(',').length > 0) {
        ip = ip.split(',')[0]
    }
    return ip;
}

// 单点登录
// key: 要查询的字段;  value：该字段对应的value
function signInCheck(key, value) {
    client.keys("sessionid:*", function (err, reply) {
        reply.forEach(item => {
            // 查找对应的session对象
            client.get(item, function (err, data) {
                // 删除指定的sessionid
                if (JSON.parse(data)[key] === value) {
                    client.del(item)
                }
            })
        })
    });
}


// 统一判断session是否过期
// function logout(authorization) {
//     let result = false;
//     client.keys("sessionid:*", function (err, reply) {
//         reply.forEach(item => {
//             // 查找对应的session对象
//             client.get(item, function (err, data) {
//                 // 删除指定的sessionid
//                 if (JSON.parse(data).authorization === authorization) {
//                     result = true;
//                 }
//             })
//         })
//     });
//     return result;
// }

module.exports = {
    getClientIP,
    signInCheck,
}