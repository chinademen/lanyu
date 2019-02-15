const config = require('../config');
const redis = require('redis');
let client = redis.createClient(config.redis.port, config.domain, { auth_pass: config.redis.password });
client.auth(config.redis.password)

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
function logout(req, res, callback) {
    const { authorization } = req.headers;
    client.get("sessionid:" + authorization, function (err, data) {
        // token没失效
        if (data != null) {
            callback()
        } else {
            // token 失效
            res.json({
                status: 401,
                message: '会话已过期'
            })
        }
    });
}

// 分页封装  tableName 表名 columns 要查询的字段数组
function tablePaging(req, res, sql, tableName, columns) {
    // 请求参数
    let { pageNo, pageSize } = req.body;
    if (!pageNo || !pageSize) {
        res.json({status: -1,
            data: null,
            message: '请传入当前页数pageNo和当前页数据条数pageSize'
        });
        return false;
    }
    // 查询初始行
    let start = (pageNo - 1) * pageSize;
    const sqlStr = `SELECT COUNT(*) FROM ${tableName}; SELECT ${[...columns]} FROM ${tableName} limit ${start}, ${pageSize};`;
    sql(sqlStr, {}, (err, data) => {
        // 总条数
        let totalRecord = JSON.parse(JSON.stringify(data[0]));
        totalRecord = Object.values(totalRecord[0])[0]
        // 数据
        const list = JSON.parse(JSON.stringify(data[1]));
        res.json({
            status: 1,
            data: {
                list: list,
                pageNo: Number(pageNo),
                pageSize: Number(pageSize),
                totalPage: Math.ceil(totalRecord / pageSize),
                totalRecord: totalRecord,
            },
            message: '成功'
        });
        return true;
    });
}

// 时间戳转换成 YYYY-MM-DD
function fmtDate(obj){
    var date =  new Date(obj);
    var y = 1900 + date.getYear();
    var m = "0" + (date.getMonth() + 1);
    var d = "0" + date.getDate();
    return y + "-" + m.substring(m.length - 2, m.length) + "-" + d.substring(d.length - 2, d.length);
}


module.exports = {
    getClientIP,
    signInCheck,
    logout,
    tablePaging,
    fmtDate
}