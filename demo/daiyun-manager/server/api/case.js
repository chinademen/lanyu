// 成功案例
const sql = require('../mysql/index');
const util = require('../util');

// 成功案例文章列表
const caselist = (req, res) => {
    util.logout(req, res, () => {
        util.tablePaging(req, res, sql, 'case_info', ['id', 'title', 'author', 'views', 'points', 'content'])
    })
}

// 新增成功案例文章
const caseadd = (req, res) => {
    util.logout(req, res, () => {
        const { title, author, views, points, content } = req.body;
        // 成功案例可以重复新增
        const insertStr = `INSERT case_info (title, author, views, points, content) values (?, ?, ?, ?, ?);`;
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

// 修改成功案例详情
const caseedit = (req, res) => {
    util.logout(req, res, () => {
        const { title, author, views, points, content, id } = req.body;
        const updateStr = `UPDATE case_info set title = ?, author = ?, views = ?, points = ?, content = ? WHERE id = ?`;
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
    caselist,
    caseadd,
    caseedit
};