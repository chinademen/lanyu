/**
 * 路由
 */
const router = {
    // 初始化过渡页面
    'Splash': require('@/views/Splash'),
    // 登录页面
    'Login': require('@/views/login'),
    // 忘记密码
    'ForgetPassword': require('@/views/login/ForgetPassword'),
    // 导航
    'TabBarView': require('@/views/TabBarView'),
    'Test': require('@/views/test'),

    // 侧边栏
    // 切换皮肤
    'ChangeSkin': require('@/views/sidebar/ChangeSkin'),
    // 切换平台
    'ChangePlat': require('@/views/sidebar/ChangePlat'),

    // home
    // 公告
    'NoticeList': require('@/views/notice/NoticeList'),
    'NoticeDetails': require('@/views/notice/NoticeDetails'),

    // 彩票投注页面
    'LotteryBet': require('@/views/Bet'),

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