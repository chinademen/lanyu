// DNA检测
const sql = require('../mysql/index');
const util = require('../util');

// DNA检测文章列表
const dnalist = (req, res) => {
    util.logout(req, res, () => {
        util.tablePaging(req, res, sql, 'dna_info', ['id', 'title', 'author', 'views', 'points', 'content'])
    })
}

// 新增DNA检测文章
const dnaadd = (req, res) => {
    util.logout(req, res, () => {
        const { title, author, views, points, content } = req.body;
        // DNA检测可以重复新增
        const insertStr = `INSERT dna_info (title, author, views, points, content) values (?, ?, ?, ?, ?);`;
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

// 修改DNA检测详情
const dnaedit = (req, res) => {
    util.logout(req, res, () => {
        const { title, author, views, points, content, id } = req.body;
        const updateStr = `UPDATE dna_info set title = ?, author = ?, views = ?, points = ?, content = ? WHERE id = ?`;
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
    dnalist,
    dnaadd,
    dnaedit
};