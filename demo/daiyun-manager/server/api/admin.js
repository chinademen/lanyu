const sql = require('../mysql');
const util = require('../util');
const checkout = require('../util/checkout');

// 管理员列表
const adminlist = (req, res) => {
    util.logout(req, res, () => {
        util.tablePaging(req, res, sql, 'admin_info', ['id', 'userAccount', 'userPassword'])
    })
}

// 新增管理员
const adminadd = (req, res) => {
    util.logout(req, res, () => {
        const { userAccount, userPassword } = req.body;
        // 账号格式校验
        const checkUserAccount = checkout.check('userAccount', userAccount);
        if (checkUserAccount !== true) {
            res.json({
                status: -1,
                message: checkUserAccount
            });
            return;
        }
        // 新增
        const queryStr = `SELECT userAccount FROM admin_info WHERE userAccount=?;`;
        const insertStr = `INSERT admin_info (userAccount, userPassword) values (?, ?);`;

        sql(queryStr, [userAccount], (err, data) => {
            // 查不到数据再进行新增
            if (data.length === 0) { 
                sql(insertStr, [userAccount, userPassword], (err, data) => {
                    if (err) {
                        res.json({
                            status: -1,
                            message: '新增管理员失败'
                        });
                    } else {
                        res.json({
                            status: 1,
                            message: '新增管理员成功'
                        });
                    }
                })
            } else {
                res.json({
                    status: -1,
                    message: '账号已存在'
                })
            }
        })
    })
}

// 修改管理员信息
const adminedit = (req, res) => {
    util.logout(req, res, () => {
        const { userAccount, userPassword, id } = req.body;
        const updateStr = `UPDATE admin_info set userAccount = ?, userPassword = ? WHERE id = ?`;
        sql(updateStr, [userAccount, userPassword, id], (err, data) => {
            if (err) {
                res.json({
                    status: -1,
                    message: '管理员密码修改失败'
                });
            } else {
                res.json({
                    status: 1,
                    message: '管理员密码修改成功'
                });
            }
        });
    })
}

module.exports = {
    adminlist,
    adminadd,
    adminedit
};