const mysql = require('mysql');
/*
* @sql       mysql语句
* @value     数据
* @callback  回调
*/
module.exports = (sql, value, callback) => {
    console.log('数据库正常');
    console.log(sql);
    let config = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'loan',
        multipleStatements: true,       // 可以同时执行多条sql语句
    });
    
    config.connect((err) => {
        console.log('数据库报错: ', err);
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