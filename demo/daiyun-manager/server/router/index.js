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
const caseApi = require('../api/case');
const dnaApi = require('../api/dna');
const raidersApi = require('../api/raiders');
const webApi = require('../api/web');

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

// 行业资讯文章列表
router.post('/api/articlelist', articleApi.articlelist);
// 新增行业资讯文章
router.post('/api/articleadd', articleApi.articleadd);
// 修改行业资讯文章详情
router.post('/api/articleedit', articleApi.articleedit);
// 上传图片
router.post('/api/articleimage', multipartMiddleware, articleApi.articleimage);

// 成功案例文章列表
router.post('/api/caselist', caseApi.caselist);
// 新增成功案例文章
router.post('/api/caseadd', caseApi.caseadd);
// 修改成功案例文章详情
router.post('/api/caseedit', caseApi.caseedit);
// 上传图片
router.post('/api/caseimage', multipartMiddleware, caseApi.caseimage);

// DNA检测文章列表
router.post('/api/dnalist', dnaApi.dnalist);
// 新增DNA检测文章
router.post('/api/dnaadd', dnaApi.dnaadd);
// 修改DNA检测详情
router.post('/api/dnaedit', dnaApi.dnaedit);
// 上传图片
router.post('/api/dnaimage', multipartMiddleware, dnaApi.dnaimage);

// 鉴定攻略文章列表
router.post('/api/raiderslist', raidersApi.raiderslist);
// 新增鉴定攻略文章
router.post('/api/raidersadd', raidersApi.raidersadd);
// 修改鉴定攻略详情
router.post('/api/raidersedit', raidersApi.raidersedit);
// 上传图片
router.post('/api/raidersimage', multipartMiddleware, raidersApi.raidersimage);

// 行业资讯文章列表
router.post('/api/webarticlelist', webApi.webarticlelist);
// 鉴定攻略文章列表
router.post('/api/webraiderslist', webApi.webraiderslist);
// DNA检测文章列表
router.post('/api/webdnalist', webApi.webdnalist);
// 成功案例文章列表
router.post('/api/webcaselist', webApi.webcaselist);
// 用户提交信息页面
router.post('/api/webuseradd', webApi.webuseradd);


module.exports = router;
