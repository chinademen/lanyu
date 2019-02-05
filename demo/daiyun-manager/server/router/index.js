// 第三方模块
const express = require('express');
const multiparty = require('connect-multiparty');
const multipartMiddleware = multiparty();   // 处理FormData格式数据
// 项目模块
const router = express.Router();
// 所有的请求回调
const loginApi = require('../api/login');
const adminApi = require('../api/admin');
const userApi = require('../api/user');
const articleApi = require('../api/article');

// 登录
router.post('/api/login', loginApi.login);
// 登出
router.post('/api/logout', loginApi.logout);

// 管理员列表
router.post('/api/adminlist', adminApi.adminlist);
// 新增管理员
router.post('/api/adminadd', adminApi.adminadd);
// 修改管理员信息
router.post('/api/adminedit', adminApi.adminedit);

// 客户列表
router.post('/api/userlist', userApi.userlist);
// 新增客户
router.post('/api/useradd', userApi.useradd);
// 修改客户信息
router.post('/api/useredit', userApi.useredit);

// 文章列表
router.post('/api/articlelist', articleApi.articlelist);
// 新增文章
router.post('/api/articleadd', articleApi.articleadd);
// 修改文章详情
router.post('/api/articleedit', articleApi.articleedit);

// 上传LOGO
// router.post('/api/web/webSet', multipartMiddleware, webApi.uploadCompanyLogo);

module.exports = router;
