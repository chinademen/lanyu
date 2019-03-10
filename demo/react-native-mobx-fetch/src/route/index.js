/**
 * 路由
 */
const router = {
    // 初始化过渡页面
    'Splash': require('@/views/Splash'),
    // 登录页面
    'Login': require('@/views/login'),
    // 忘记密码
    'forgetPassword': require('@/views/login/forgetPassword'),
    // 导航
    'TabBarView': require('@/views/TabBarView'),

    // home
    // 公告
    'NoticeList': require('@/views/notice/NoticeList'),
    'NoticeDetails': require('@/views/notice/NoticeDetails'),

    // 开奖号码
    'award': require('@/views/award'),

    // profile
}

export default router