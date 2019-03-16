export default {
    // baseURL: 'https://frontapi.yuleyun.app', // pre环境
    baseURL: 'https://frontapi.donghuang918.com', // 正式环境
    // 公共接口
    common: {
        getLotteryBetMode: 'lottery/get-lottery-bet-mode',              // 获取用户投注金额模式(元角分厘)
        getMethodList: '/lottery/get-method-list',                      // 获取彩种玩法
        getIssueList: '/lottery/get-issue-list',                        // 获取奖期
    },
    // 登录
    login: {
        // getServerApi: '/api/get-server-api',                            // 获取域名
        userLogin: '/passport/user-login',                              // 用户登录
        userLogout: '/user/user-logout',                                // 用户登出
        userCheckFundPassword: '/passport/user-check-fund-password',    // 忘记密码第一步
        userFindPassword: '/passport/user-find-password',               // 忘记密码第二步
        checkDomain: '/website/check-domain',                           // 域名验证
        getAllDomain: '/website/get-all-domain',                        // 获取域名接口
        getWebsiteTime: '/assets/images/greenline.png',                 // 域名测试访问文件
    },
    // 首页
    home: {
        getBanner: '/website/get-banner',                               // 获取banner图
        getNotice: '/website/get-notice',                               // 公告详情，首页的通知的效果跑马灯
        getUserInfo: '/user/get-user-info',                             // 得到用户信息
        getUserLotteryList: '/lottery/get-user-lottery-list',           // 获取彩种列表
        workroomThirdgameList: '/thirdgame/workroom-thirdgame-list',    // 第三方游戏列表
    },
    // 彩票
    lottery: {
        enterLottery: '/lottery/enter-lottery',             // 彩票投注页面入口
    },
    // 用户相关
    userInfo: {
        workroomBankList: '/user/workroom-bank-list',       // 银行列表
        districtList :'user/district-list',                 // 地区列表
        bankList: '/user/bank-list',                        // 用户绑定的银行卡列表
        workroomTopupList: '/fund/workroom-topup-list',     // 充值渠道列表
        addBank: '/user/add-bank',                          // 添加银行卡
        checkLastBankinfo: '/user/check-last-bankinfo',     // 验证上次添加的银行卡
        lockBank: '/user/lock-bank',                        // 锁定银行卡
        editPassword: '/user/edit-password',                // 修改密码
        editProfile: '/user/edit-profile',                  // 修改个人资料
        setSafeQuestion: '/user/set-safe-question',         // 设置密保问题(未设置或者已验证密保问题)
        setFundPassword: '/user/set-fund-password',         // 设置资金密码(未设置或者已验证密保问题)
        getSafeQuestion: '/user/get-safe-question',         // 验证密保问题-获取问题
        checkSafeQuestion: '/user/check-safe-question',     // 验证密保问题-验证答案
        topup: '/fund/topup',                               // 充值
        checkFundPassword: '/user/check-fund-password',     // 验证资金密码
        withdraw: '/fund/withdraw',                         // 提款
    },
    // 收件箱
    email: {
        getUserMail: '/user/get-user-mail',                 // 收件箱信息
        sendUserMail: '/user/send-user-mail',               // 发送站内信息
        getJuniorUsers: '/user/get-junior-users',           // 发送站获取下级用户
        setUserMail: '/user/set-user-mail',                 // 删除站内信
    },
    // 资金管理
    fund: {
        fundList: '/fund/fund-list',                                // 账变明细
        transferList: '/fund/transfer-list',                        // 转账记录
        withdrawList: '/fund/withdraw-list',                        // 提款列表
        getFundOrdertypeid: '/fund/get-fund-ordertypeid',           // 彩票账变列表的账变类型
        getTransferOrderTypeid: '/fund/get-transfer-ordertypeid',   // 根据平台获取账变类型
    },
    // 第三方游戏
    game: {
        startGame: '/thirdgame/start-game',                         // 第三方游戏开始的列表
        getPtgame: '/website/get-ptgame',                           // 得到PT的所有游戏列表
        getBalance: '/thirdgame/get-balance',                       // 获取每一个平台余额
        fundTransfer: '/thirdgame/fund-transfer',                   // 平台转账的接口
        getPromo: '/website/get-promo',                             // 活动的接口
    },
    // 注册
    register: {
        userView: '/passport/user-view',                    // 注册前验证用户
        userRegister: '/passport/user-register',            // 用户注册
    },
    // 代理中心
    proxy: {
        getRebatesAmount: '/report/get-rebate-amount',                      // 返点总额
        getAgentList: '/agent/get-agent-list',                              // 获取下级代理列表(用户列表)
        getUserLotteryBonusInfo: '/lottery/get-user-lottery-bonus-info',    // 获取下级代理列表(用户列表 ---> 详情 ---> 彩种信息)
        agentRegister: '/agent/agent-register',                             // 代理开户(代理开户的注册管理)
        agentBalance: '/agent/agent-balance',                               // 团队余额
        agentTopup: '/agent/agent-topup',                                   // 代理充值
        setAgentRebatePercent: '/agent/set-agent-rebate-percent',           // 设置代理返点
        addMarketing: '/agent/add-marketing',                               // 添加推广链接
        marketingList: '/agent/marketing-list',                             // 推广链接列表
        setMarketingStatus: '/agent/set-marketing-status',                  // 推广链接修改状态
    },
    // 报表
    report: {
        getProjectList: '/report/get-project-list',                         // 彩票投注记录(购彩查询)
        getTaskList: '/report/get-task-list',                               // 投注记录 ---> 追号查询
        getTaskDetail: '/report/get-task-detail',                           // 投注记录 ---> 追号详情
        getBetHistory: '/thirdgame/get-bet-history',                        // 第三方投注记录 (PT/AG)
        getApcpProfitReport: '/report/get-apcp-profit-report',              // 盈亏报表 ---> 彩票盈亏
        getThirdProfitReport: '/report/get-third-profit-report',            // 第三方游戏盈亏报表 (PT/AG)
        lotteryFundflow: '/report/lottery-fundflow',                        // 彩票账变
        getThirdFundflow: '/report/get-third-fundflow',                     // 第三方账变(AG/PT)
        getRechargeDepositReport: '/report/get-recharge-deposit-report',    // 日结报表 ---> 充提数据
        getActiveReport: '/report/get-active-report',                       // 日结报表 ---> 活跃数据
        getSettlementReport: '/report/get-settlement-report',               // 日结报表 ---> AG/ PT 查询
        getApcpSettlementReport: '/report/get-apcp-settlement-report',      // 日结报表 ---> 彩票
        reportOverview: '/report/overview',                                 // 总览
    },
    //  契约模块
    contract: {
        getContract: '/contract/get-contract',              // 基础契约
        signContract: '/contract/sign-contract',            // 签订契约
        contractReport: '/contract/contract-report',        // 契约报表
        contractList: '/contract/contract-list',            // 下级契约
        getContractTopup: '/contract/get-contract-topup',   // 契约发放列表
        createContract: '/contract/create-contract',        // 创建契约
        contractTopup: '/contract/contract-topup',          // 契约发放操作
    }
}