const mysql = require('mysql');
const config = require('../config');
/*
* @sql       mysql语句
* @value     数据
* @callback  回调
*/
module.exports = (sql, value, callback) => {
    let config = mysql.createConnection({
        host: config.domain,
        user: config.mysql.user,
        password: config.mysql.password,
        port:  config.mysql.port,
        database: config.mysql.database,
        multipleStatements: true,       // 可以同时执行多条sql语句
    });

    config.connect((err) => {
        // 数据库链接失败
        if (err) {
            return console.error(err);
        }
    });

    config.query(sql, value, (err, data) => {
        callback(err, data);
    });

    config.end();
};