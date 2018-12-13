// 第三方模块
const express = require('express');
const multiparty = require('connect-multiparty');
const multipartMiddleware = multiparty();   // 处理FormData格式数据
// 项目模块
const router = express.Router();
// 所有的请求回调
const loginApi = require('../api/login');

// 登录
router.post('/api/user/login', loginApi.login);
// 登出
router.post('/api/user/logout', loginApi.logout);
// 上传LOGO
// router.post('/api/web/webSet', multipartMiddleware, webApi.uploadCompanyLogo);

module.exports = router;
