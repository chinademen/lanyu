const mysql = require('mysql');
/*
* @sql       mysql语句
* @value     数据
* @callback  回调
*/
module.exports = (sql, value, callback) => {
    let config = mysql.createConnection({
        host: '207.148.73.3',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'chatroom',
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