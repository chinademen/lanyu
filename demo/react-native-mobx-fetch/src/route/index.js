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
    // 首页
    'TabBarView': require('@/pages/TabBarView'),
    // 'Scanner': require('../components/Scanner'),

    // home
    'Foods': require('@/pages/home/Foods'),

    // feed
    'FeedDetail': require('@/pages/feed/FeedDetail'),

    // profile
}

export default router