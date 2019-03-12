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
    'Test': require('@/views/test'),

    // home
    // 公告
    'NoticeList': require('@/views/notice/NoticeList'),
    'NoticeDetails': require('@/views/notice/NoticeDetails'),

    // 开奖号码
    'award': require('@/views/award'),

    // 报表
    'Overview': require('@/views/report/overview'),
    'ProfitLoss': require('@/views/report/profitloss'),
    'AccountChange': require('@/views/report/accountchange'),
    'DayKnot': require('@/views/report/dayknot'),
    'Recharge': require('@/views/report/recharge'),
    'Bet': require('@/views/report/bet'),
    'Contract': require('@/views/report/contract'),
    'Proxy': require('@/views/report/proxy'),

    // profile
}

export default router