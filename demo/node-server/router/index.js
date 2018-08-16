// node自带模块
const path = require('path');
// 第三方模块
const express = require('express');
// 项目模块
const sql = require('../mysql/index');
// 导入模拟数据
const menuData = require('../api/login');

const app = express();
const router = express.Router();

// 验证码生成
var BMP24 = require('gd-bmp').BMP24;
var imgStr = '';

//仿PHP的rand函数
function rand(min, max) {
    return Math.random()*(max-min+1) + min | 0; //特殊的技巧，|0可以强制转换为整数
}

//制造验证码图片
function makeCapcha() {
    var img = new BMP24(100, 40);
    img.drawCircle(rand(0, 100), rand(0, 40), rand(10 , 40), rand(0, 0xffffff));
    //边框
    img.drawRect(0, 0, img.w-1, img.h-1, rand(0, 0xffffff));
    // 修改背景颜色
    img.fillRect(rand(0, 100), rand(0, 40), rand(10, 35), rand(10, 35), rand(0, 0xffffff));
    img.drawLine(rand(0, 100), rand(0, 40), rand(0, 100), rand(0, 40), rand(0, 0xffffff));
    //return img;

    //画曲线
    var w=img.w/2;
    var h=img.h;
    var color = rand(0, 0xffffff);
    var y1=rand(-5,5); //Y轴位置调整
    var w2=rand(10,15); //数值越小频率越高
    var h3=rand(4,6); //数值越小幅度越大
    var bl = rand(1,5);
    for(var i=-w; i<w; i+=0.1) {
        var y = Math.floor(h/h3*Math.sin(i/w2)+h/2+y1);
        var x = Math.floor(i+w);
        for(var j=0; j<bl; j++){
            img.drawPoint(x, y+j, color);
        }
    }

    var p = "ABCDEFGHKMNPQRSTUVWXYZ3456789";
    var str = '';
    // 验证码个数
    for(var i=0; i<4; i++){
        str += p.charAt(Math.random() * p.length |0);
    }
   
    // 保存当前验证码
    imgStr = str;

    var fonts = [BMP24.font8x16, BMP24.font12x24, BMP24.font16x32];
    var x = 15, y=8;
    for(var i=0; i<str.length; i++){
        var f = fonts[Math.random() * fonts.length |0];
        y = 8 + rand(-10, 10);
        img.drawChar(str[i], x, y, f, rand(0, 0xffffff));
        x += f.w + rand(2, 8);
    }
    return img;
}
// 接口

// 验证码
router.get('/api/getVerify', (req, res) => {
    var img = makeCapcha();
    res.setHeader('Content-Type', 'image/bmp');
    res.end(img.getFileData());
});

// 登录(静态数据)
router.post('/api/user/login', (req, res) => {
    const { userAccount, userPassword, validCode } = req.body;
    // 用户名密码校验
    if (userAccount == 'admin' && userPassword == '698d51a19d8a121ce581499d7b701668') {
        if (validCode.toLowerCase() == imgStr.toLowerCase()) {
            // 清空验证码
            imgStr = '';
            // 登录成功
            res.json({
                status: 1,
                message: '成功',
                data: menuData
            });
        } else {
            res.json({
                status: -1,
                message: '验证码错误',
                data: null
            });
        }
       
    } else {
        res.json({
            status: -1,
            message: '账号密码错误',
            data: null
        });
    }
});

// 登出
router.get('/api/user/logout', (req, res) => {
    res.json({
        status: 1,
        message: '退出成功'
    });
});

// 登录(数据库登录)
// router.post('/member/login', (req, res) => {
//     const { userName, password, type } = req.body;
//     if (userName && password) {
//         sql('SELECT * FROM userinfo', (err, data) => {
//             // 用户名密码校验
//             var iNow = Array.prototype.some.call(data, function (a, i, arr) {
//                 // 登录成功
//                 userName === a.username && password === a.password && res.json({
//                     code: 200,
//                     message: '成功',
//                     data: memberLogin,
//                 });
//                 return (userName == a.username && password == a.password);
//             });
//             if (!iNow) {
//                 res.json({
//                     status: -1,
//                     msg: '账号密码错误'
//                 });
//             }
//         });
//     } else {
//         res.json({
//             status: -1,
//             msg: '请输入账号密码'
//         });
//     }
// });


module.exports = router;
