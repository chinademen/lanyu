const sql = require('../mysql/index');
const util = require('../util');

// 行业资讯文章列表(不需要登录)
const webarticlelist = (req, res) => {
    util.tablePaging(req, res, sql, 'article_info', ['id', 'title', 'author', 'views', 'points', 'content', 'imageurl'])
}

// 鉴定攻略列表(不需要登录)
const webraiderslist = (req, res) => {
    util.tablePaging(req, res, sql, 'raiders_info', ['id', 'title', 'author', 'views', 'points', 'content', 'imageurl'])
}

// DNA检测文章列表(不需要登录)
const webdnalist = (req, res) => {
    util.tablePaging(req, res, sql, 'dna_info', ['id', 'title', 'author', 'views', 'points', 'content', 'imageurl'])
}

// 成功案例文章列表(不需要登录)
const webcaselist = (req, res) => {
    util.tablePaging(req, res, sql, 'case_info', ['id', 'title', 'author', 'views', 'points', 'content', 'imageurl'])
}

// 用户提交信息页面
const webuseradd = (req, res) => {
    const starttime = util.fmtDate(new Date());
    const { username, telphone, qq, wechat, address } = req.body;
    // 客户可以重复新增
    const insertStr = `INSERT user_info (username, telphone, qq, wechat, address, remark, starttime) values (?, ?, ?, ?, ?, ?, ?);`;
    sql(insertStr, [username, telphone, qq, wechat, address, '用户提交', starttime], (err, data) => {
        if (err) {
                res.json({
                status: -1,
                message: '信息提交失败'
            });
        } else {
            res.json({
                status: 1,
                message: '信息提交成功'
            });
        }
    })
}


module.exports = {
    webarticlelist,
    webraiderslist,
    webdnalist,
    webcaselist,
    webuseradd
};