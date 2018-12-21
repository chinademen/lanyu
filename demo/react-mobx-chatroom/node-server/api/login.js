const redis = require('redis');
const client = redis.createClient('6379', '207.148.73.3');
const sql = require('../mysql/index');
const md5 = require('md5');

// 登入
const login = (req, res) => {
    let { username } = req.body;
    if (!username) username = '游客';
    const authorization = md5(username + new Date().getTime());
    req.session.username = username;
    req.session.authorization = authorization;
    
    var level = '1级小菜鸡';
    var levelLogo = 'http://207.148.73.3:8080/images/level/1.png';
    if (username === 'amao') {
        level = '17级创世神';
        levelLogo = 'http://207.148.73.3:8080/images/level/17.png'
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
            levelLogo: levelLogo, // 用户logo
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