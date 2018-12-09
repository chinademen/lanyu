// 第三方模块
const express = require('express');
const multiparty = require('connect-multiparty');
const multipartMiddleware = multiparty();   // 处理FormData格式数据
// 项目模块
const sql = require('../mysql/index');
// const app = express();
const router = express.Router();
// 所有的请求回调
const memberApi = require('../api/member');

console.log('路由正常');
// 会员信息列表
router.get('/api/member/memberList', memberApi.memberList);
// 修改会员
// router.post('/api/member/editMember', memberApi.editMember);
// 删除会员
router.post('/api/member/deleteMember', memberApi.deleteMember);

module.exports = router;
