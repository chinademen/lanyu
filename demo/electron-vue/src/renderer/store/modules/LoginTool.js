import { userLogin, userLogout, lotteryList, currentLottery } from '@/services/common'

const LoginTool = {
    state: {
        islogin: false, // 是否登陆
        userInfo: null, // 保存当前用户信息
        lotteryList: null, // 彩种列表
        lotteryInfo: null, // 切换彩种返回的数据, 包括 当前选中彩种，彩种最后一期的期数，开奖号码等
    },
    // 同步
    mutations: {
        // 登陆
        USER_LOGIN (state, payload) {
            if (!payload) alert('登陆失败, 请重新登陆');
            alert('登陆成功');
            state.islogin = true;
            state.userInfo = payload.data;
        },
        // 退出登陆
        USER_LOGOUT (state, payload) {
            if (!payload) alert('退出失败');
            alert('退出成功');
            state.islogin = false;
        },
        // 彩种列表
        GET_LOTTERYLIST (state, payload) {
            if (!payload) alert('获取彩种列表失败');
            state.lotteryList = payload.data;
        },
        // 切换彩种
        CHANGE_LOTTERYTYPE (state, payload) {
            if (!payload) alert('切换彩种失败');
            state.lotteryInfo = payload.data;
        },
    },
    // 异步
    actions: {
        // 登录
        async UserLogin ({ state, commit }, params) {
            const { username, password } = params;
            if (!username) return alert('请输入用户名');
            if (!password) return alert('请输入密码');
            commit('USER_LOGIN', await userLogin(params))
        },
        // 退出
        async UserLogout ({ state, commit }, params) {
            commit('USER_LOGOUT', await userLogout())
        },
        // 彩种列表
        async getLotteryList ({ state, commit }, params) {
            commit('GET_LOTTERYLIST', await lotteryList())
        },
        // 切换彩种
        async ChangeLotteryType ({ state, commit }, params) {
            commit('CHANGE_LOTTERYTYPE', await currentLottery(params))
        },
    }
}

export default LoginTool