// 鉴定攻略
const fs = require('fs');
const path = require('path');
const sql = require('../mysql/index');
const util = require('../util');
const config = require('../config');

// 鉴定攻略文章列表
const raiderslist = (req, res) => {
    util.logout(req, res, () => {
        util.tablePaging(req, res, sql, 'raiders_info', ['id', 'title', 'author', 'views', 'points', 'content', 'imageurl'])
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

// 上传图片
const raidersimage = (req, res) => {
    util.logout(req, res, () => {
        const { id } = req.body;
        const source = fs.createReadStream(req.files.file.path);
        const dest = fs.createWriteStream(path.join(process.cwd() + '/public/images/raiders/' + req.files.file.name)); 
        const newPath = config.baseUrl + '/images/raiders/' + req.files.file.name; 
        source.pipe(dest);
        source.on('end', function () {
                // 更新数据库路径
                const sqlStr = `UPDATE raiders_info SET imageurl=? WHERE id=${id};`
                sql(sqlStr, [newPath], (err, data) => {
                    res.json({
                        status: 1,
                        message: '上传成功'
                    });
                });
        });
        source.on('error', function (err) {
            console.log(err);
        });
    })
}


module.exports = {
    raiderslist,
    raidersadd,
    raidersedit,
    raidersimage
};