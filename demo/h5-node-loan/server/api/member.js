const sql = require('../mysql/index');
const util = require('../util/util');

// 会员信息列表
const memberList = (req, res) => {
    util.tablePaging(req, res, sql, 'memberinfo', ['id', 'userName', 'telephone', 'IDCard', 'address', 'type', 'balance']);
}

// 新增会员
// const addMember = (req, res) => {
//     const { userName, telephone, IDCard, address, type, balance } = req.body;
//     // 新增
//     const queryStr = `SELECT userName FROM memberinfo WHERE userName=?;`;
//     const insertStr = `INSERT memberinfo (userName, telephone, IDCard, address, type, balance) values (?, ?, ?, ?, ?, ?);`;

//     sql(queryStr, [userName], (err, data) => {
//         // 查不到数据新增
//         if (data.length === 0) {
//             sql(insertStr, [userName, telephone, IDCard, address, type, balance], (err, data) => {
//                 if (err) {
//                     res.json({
//                         status: -1,
//                         message: '新增用户失败'
//                     });
//                 } else {
//                     res.json({
//                         status: 1,
//                         message: '新增会员成功'
//                     });
//                 }
//             }); 
//         } else {
//             res.json({
//                 status: -1,
//                 message: '用户已存在'
//             });
//         }  
//     }); 
// }

// 修改会员信息
// const editMember = (req, res) => {
//     const { userName, telephone, IDCard, address, type, balance, id } = req.body;
//     const updateStr = `UPDATE memberinfo SET userName = ?, telephone = ?, IDCard = ?, address = ?, type = ?, balance = ?, WHERE id = ?`;
//     sql(updateStr, [userName, telephone, IDCard, address, type, balance, id], (err, data) => {
//         res.json({
//             status: 1,
//             message: '修改会员成功'
//         });
//     });
// }

// 删除会员
const deleteMember = (req, res) => {
    const { id } = req.body;
    const deleteStr = `DELETE FROM memberinfo WHERE id = ?`;
    sql(deleteStr, [id], (err, data) => {
        if (!err) {
            res.json({
                status: 1,
                message: '删除会员成功'
            })
        } else {
            res.json({
                status: 0,
                message: '删除会员失败',
            })
        }
       
    });
}

module.exports = {
    memberList,
    // addMember,
    // editMember,
    deleteMember,
};