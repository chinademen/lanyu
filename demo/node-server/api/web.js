const fs = require('fs');
const path = require('path');
const sql = require('../mysql/index');
const util = require('../util/util');

// 上传公司LOGO
const uploadCompanyLogo = (req, res) => {
    if (util.logout(req, res)) { 
        const { companyId } = req.body;
        const source = fs.createReadStream(req.files.file.path);
        const dest = fs.createWriteStream(path.join(process.cwd() + '/public/images/' + req.files.file.name)); 
        const newPath = 'http://localhost:9000' + '/images/' + req.files.file.name; 
        source.pipe(dest);
        source.on('end', function () {
                // 更新数据库路径
                const sqlStr = `UPDATE company SET companyLogo=? WHERE companyId=${companyId};`
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
    }
}

module.exports = {
    uploadCompanyLogo,
};