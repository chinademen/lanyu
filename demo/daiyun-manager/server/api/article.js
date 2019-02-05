const sql = require('../mysql/index');
const util = require('../util');
const checkout = require('../util/checkout');

// 文章列表
const articlelist = (req, res) => {
    util.logout(req, res, () => {
        util.tablePaging(req, res, sql, 'article_info', ['id', 'title', 'author', 'views', 'points', 'content'])
    })
}

// 新增文章
const articleadd = (req, res) => {
    util.logout(req, res, () => {
        const { title, author, views, points, content } = req.body;
        // 文章可以重复新增
        const insertStr = `INSERT article_info (title, author, views, points, content) values (?, ?, ?, ?, ?);`;
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

// 修改文章详情
const articleedit = (req, res) => {
    util.logout(req, res, () => {
        const { title, author, views, points, content, id } = req.body;
        const updateStr = `UPDATE article_info set title = ?, author = ?, views = ?, points = ?, content = ? WHERE id = ?`;
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
    articlelist,
    articleadd,
    articleedit
};