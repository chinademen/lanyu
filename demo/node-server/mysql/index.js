const mysql = require('mysql');
/*
* @sql       mysql语句
* @value     数据
* @callback  回调
*/
module.exports = (sql, value, callback) => {
    let config = mysql.createConnection({
        host: 'localhost',
        user: 'test',
        password: '123456',
        port: '3306',
        database: 'test'
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