const config = require('../config');
const redis = require('redis');
const client = redis.createClient(config.redis.port, config.domain, { password: 'gPj-Z9qw' });
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

// const { userAccount, userPassword, validCode } = req.body;
// // 判断用户名密码验证码sessionId校验是否通过
// sql(`SELECT * FROM memberinfo WHERE userAccount="${userAccount}" AND userPassword="${userPassword}"; SELECT * FROM menu;`, {}, (err, data) => {
//     // 用户名密码校验
//     if (data[0].length == 0) {
//         res.json({ status: -1, message: '账号密码错误', data: null });
//         return;
//     }
//     // 验证码校验
//     if (validCode.toLowerCase() == global.imgStr.toLowerCase()) {
//         // 用户信息
//         let userInfo = JSON.parse(JSON.stringify(data[0]));
//         // 生成目录树
//         let menu = JSON.parse(JSON.stringify(data[1]));
//         let menusData = [];
//         menu.forEach(item => {
//             const { pid } = item;
//             // 一级目录
//             if (pid === 0) {
//                 item.children = [];
//                 menusData.push(item);
//             } else {
//                 menusData.forEach(a => {
//                     if (a.resourceId == pid) {
//                         a.children.push(item);
//                     }
//                 });
//             }
//         });
//         const { currentCompanyName, userAccount, userName, info1, info2, balance } = userInfo[0];
//         sql(`SELECT * FROM company WHERE companyName="${currentCompanyName}";`, {}, (err2, data2) => {
//             data2 = JSON.parse(JSON.stringify(data2));
//             const { companyId, companyLogo } = data2[0];
//              // 清空验证码
//             global.imgStr = '';
//             // 存储session
//             req.session.userAccount = userAccount;
//             // 拼装当前用户信息 和公司信息
//             const info = { currentCompanyName, userAccount, userName, info1, info2, balance, companyId, companyLogo };
//             // 返回body
//             res.json({
//                 status: 1,
//                 message: '登录成功',
//                 data: {
//                     menusData,
//                     ...info
//                 }
//             });
//         });
//     } else {
//         res.json({
//             status: -1,
//             message: '验证码错误',
//             data: null
//         });
//     } 
    
// });