export default {
    commom: {
        login: '/api/login', // 登录
        logout: '/api/logout' // 登出
    },
    admin: {
        list: '/api/adminlist', // 管理员列表
        add: '/api/adminadd', // 新增管理员
        edit: '/api/adminedit' // 修改管理员信息
    },
    user: {
        list: '/api/userlist', // 客户列表
        add: '/api/useradd', // 新增客户
        edit: '/api/useredit' // 修改客户信息
    },
    // 行业资讯
    article: {
        list: '/api/articlelist', // 行业资讯列表
        add: '/api/articleadd', // 新增行业资讯
        edit: '/api/articleedit' // 修改行业资讯详情
    },
    // 成功案例
    case: {
        list: '/api/caselist', // 成功案例列表
        add: '/api/caseadd', // 新增成功案例
        edit: '/api/caseedit' // 修改成功案例详情
    },
    // DNA检测
    dna: {
        list: '/api/dnalist', // DNA检测列表
        add: '/api/dnaadd', // 新增DNA检测
        edit: '/api/dnaedit' // 修改DNA检测详情
    },
    // 鉴定攻略
    raiders: {
        list: '/api/raiderslist', // 鉴定攻略列表
        add: '/api/raidersadd', // 新增鉴定攻略
        edit: '/api/raidersedit' // 修改鉴定攻略详情
    }
}   
