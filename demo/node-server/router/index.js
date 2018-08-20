// 第三方模块
const express = require('express');
// 项目模块
const sql = require('../mysql/index');
// const app = express();
const router = express.Router();
// 所有的请求回调
const valideImg = require('../api/valideImg');
const loginApi = require('../api/login');
const memberApi = require('../api/member');

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


module.exports = router;
