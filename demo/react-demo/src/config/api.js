export default {
    // 登录
    login: {
        getVerify: '/api/getVerify',        // 验证码
        userLogin: '/api/user/login',       // 登录
        userLogout: '/api/user/logout',     // 登出
    },
    // 会员管理
    member: {
        memberList: '/api/member/memberList',   // 会员信息列表
        addMember: '/api/member/addMember',     // 新增会员
        editMember: '/api/member/editMember',   // 修改会员
    },
}