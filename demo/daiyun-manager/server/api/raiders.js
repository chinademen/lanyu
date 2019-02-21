// 鉴定攻略
const sql = require('../mysql/index');
const util = require('../util');

// 鉴定攻略文章列表
const raiderslist = (req, res) => {
    util.logout(req, res, () => {
        util.tablePaging(req, res, sql, 'raiders_info', ['id', 'title', 'author', 'views', 'points', 'content'])
    })
}

// 新增鉴定攻略文章
const raidersadd = (req, res) => {
    util.logout(req, res, () => {
        const { title, author, views, points, content } = req.body;
        // 鉴定攻略可以重复新增
        const insertStr = `INSERT raiders_info (title, author, views, points, content) values (?, ?, ?, ?, ?);`;
        sql(insertStr, [title, author, views, points, content], (err, data) => {
            if (err) {
                    res.json({
                    status: -1,
                    message: '新增文章失败'
                });
            } else {
                res.json({
                    status: 1,
                    message: '新增文章成功'
                });
            }
        })
    })
}

// 修改鉴定攻略详情
const raidersedit = (req, res) => {
    util.logout(req, res, () => {
        const { title, author, views, points, content, id } = req.body;
        const updateStr = `UPDATE raiders_info set title = ?, author = ?, views = ?, points = ?, content = ? WHERE id = ?`;
        sql(updateStr, [title, author, views, points, content, id], (err, data) => {
            if (err) {
                res.json({
                    status: -1,
                    message: '文章修改失败'
                });
            } else {
                res.json({
                    status: 1,
                    message: '文章修改成功'
                });
            }
        });
    })
}

module.exports = {
    raiderslist,
    raidersadd,
    raidersedit
};