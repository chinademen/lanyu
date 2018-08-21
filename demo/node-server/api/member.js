const sql = require('../mysql/index');
const util = require('../util/util');
const checkout = require('../util/checkout');

// 会员信息列表
const memberList = (req, res) => {
    setTimeout(() => {
        util.logout(req, res) && util.tablePaging(req, res, sql, 'memberinfo', ['id', 'userAccount', 'userName', 'level', 'balance', 'registTime', 'currentCompanyName']);
    }, 10000);
}

// 新增会员
const addMember = (req, res) => {
    if (util.logout(req, res)) {
        const { userAccount, userName, userPassword, level, balance, currentCompanyName } = req.body;
        // 校验会员账号和会员名称格式
        const checkUserAccount = checkout.check('userAccount', userAccount);
        const checkUserName = checkout.check('userName', userName);
        if (checkUserAccount !== true) {
            res.json({
                status: -1,
                message: checkUserAccount
            });
            return;
        }
        if (checkUserName !== true) {
            res.json({
                status: -1,
                message: checkUserName
            });
            return;
        }
        // 新增
        const queryStr = `SELECT userAccount FROM memberinfo WHERE userAccount=?;`;
        const insertStr = `INSERT memberinfo (userAccount, userName, userPassword, level, balance, currentCompanyName) values (?, ?, ?, ?, ?, ?);`;

        sql(queryStr, [userAccount], (err, data) => {
            // 查不到数据新增
            if (data.length === 0) {
                sql(insertStr, [userAccount, userName, userPassword, level, balance, currentCompanyName || '暂无公司'], (err, data) => {
                    if (err) {
                        // 输出日志
                        res.json({
                            status: -1,
                            message: '新增用户失败'
                        });
                    } else {
                        res.json({
                            status: 1,
                            message: '新增会员成功'
                        });
                    }
                }); 
            } else {
                res.json({
                    status: -1,
                    message: '用户已存在'
                });
            }  
        });
        
    }
}

// 修改会员信息
const editMember = (req, res) => {
    if (util.logout(req, res)) {
        const { userName, level, balance, currentCompanyName, id } = req.body;
        const updateStr = `UPDATE memberinfo set userName = ?, level = ?, balance = ?, currentCompanyName = ? WHERE id = ?`;
        sql(updateStr, [userName, level, balance, currentCompanyName || '暂无公司', id], (err, data) => {
            res.json({
                status: 1,
                message: '修改会员成功'
            });
        });
    }
}

module.exports = {
    memberList,
    addMember,
    editMember
};