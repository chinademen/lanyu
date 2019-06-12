// 第三方模块
const express = require('express');
const router = express.Router();

// 登入
const Test = (req, res) => {
    res.json({
        status: 0,
        message: '登录成功',
        data: {
            template: `
                <ul style="width: 300px; height: 400px; margin: 100px auto;">
                    <li style="float: left; width: 100%; height: 100px; line-height: 100px;  text-align: center; border: 1px solid #000;">1</li>
                    <li style="float: left; width: 100%; height: 100px; line-height: 100px;  text-align: center; border: 1px solid #000;">2</li>
                    <li style="float: left; width: 100%; height: 100px; line-height: 100px;  text-align: center; border: 1px solid #000;">3</li>
                    <li style="float: left; width: 100%; height: 100px; line-height: 100px;  text-align: center; border: 1px solid #000;">4</li>
                </ul>
            `
        }
    });
}


// 验证码
router.post('/test', Test);

module.exports = router;
