const sql = require('../mysql');
const util = require('../util');
const checkout = require('../util/checkout');

// 客户列表
const userlist = (req, res) => {
    util.logout(req, res, () => {
        util.tablePaging(req, res, sql, 'user_info', ['id', 'username', 'telphone', 'qq', 'wechat', 'address', 'remark'])
    })
}

// 新增客户
const useradd = (req, res) => {
    util.logout(req, res, () => {
        const { username, telphone, qq, wechat, address, remark } = req.body;
        // 客户可以重复新增
        const insertStr = `INSERT user_info (username, telphone, qq, wechat, address, remark) values (?, ?, ?, ?, ?, ?);`;
        sql(insertStr, [username, telphone, qq, wechat, address, remark], (err, data) => {
            if (err) {
                    res.json({
                    status: -1,
                    message: '新增客户失败'
                });
            } else {
                res.json({
                    status: 1,
                    message: '新增客户成功'
                });
            }
        })
    })
}

// 修改客户资料
const useredit = (req, res) => {
    util.logout(req, res, () => {
        const { username, telphone, qq, wechat, address, remark, id } = req.body;
        const updateStr = `UPDATE user_info set username = ?, telphone = ?, qq = ?, wechat = ?, address = ?, remark = ? WHERE id = ?`;
        sql(updateStr, [username, telphone, qq, wechat, address, remark, id], (err, data) => {
            if (err) {
                res.json({
                    status: -1,
                    message: '客户信息修改失败'
                });
            } else {
                res.json({
                    status: 1,
                    message: '客户信息修改成功'
                });
            }
        });
    })
}

module.exports = {
    userlist,
    useradd,
    useredit
};