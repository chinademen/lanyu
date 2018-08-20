// 统一判断session是否过期
const logout = (req, res) => {
    if (!req.session.userAccount) {
        res.json({
            status: 401,
            message: '登录过期'
        });
        return false;
    }
    return true;
}

// 分页封装  tableName 表名 columns 要查询的字段数组
const tablePaging = (req, res, sql, tableName, columns) => {
    // 请求参数
    let { pageNo, pageSize } = req.query;
    if (!pageNo || !pageSize) {
        res.json({status: -1,
            data: null,
            message: '请传入当前页数pageNo和当前页数据条数pageSize'
        });
        return false;
    }
    // 查询初始行
    let start = (pageNo - 1) * pageSize;
    const sqlStr = `SELECT COUNT(*) FROM ${tableName}; SELECT ${[...columns]} FROM ${tableName} limit ${start}, ${pageSize};`;
    sql(sqlStr, {}, (err, data) => {
        // 总条数
        let totalRecord = JSON.parse(JSON.stringify(data[0]));
        totalRecord = Object.values(totalRecord[0])[0]
        // 数据
        const list = JSON.parse(JSON.stringify(data[1]));
        res.json({
            status: 1,
            data: {
                list: list,
                pageNo: Number(pageNo),
                pageSize: Number(pageSize),
                totalPage: Math.ceil(totalRecord / pageSize),
                totalRecord: totalRecord,
            },
            message: '成功'
        });
        return true;
    });
}


const util = {
    logout,
    tablePaging,
};

module.exports = util;
 