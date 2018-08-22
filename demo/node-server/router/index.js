// 第三方模块
const express = require('express');
const multiparty = require('connect-multiparty');
const multipartMiddleware = multiparty();   // 处理FormData格式数据
// 项目模块
const sql = require('../mysql/index');
// const app = express();
const router = express.Router();
// 所有的请求回调
const valideImg = require('../api/valideImg');
const loginApi = require('../api/login');
const memberApi = require('../api/member');
const webApi = require('../api/web');

// 验证码
router.get('/api/getVerify', valideImg.getVerify);
// 登录
router.post('/api/user/login', loginApi.login);
// 登出
router.get('/api/user/logout', loginApi.logout);
// 会员信息列表
router.get('/api/member/memberList', memberApi.memberList);
// 新增会员
router.post('/api/member/addMember', memberApi.addMember);
// 修改会员
router.post('/api/member/editMember', memberApi.editMember);
// 设置公司LOGO
router.post('/api/web/webSet', multipartMiddleware, webApi.uploadCompanyLogo);

module.exports = router;
