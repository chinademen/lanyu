import { userLogin, userLogout, lotteryList, currentLottery, getBalance } from '@/services/common';
import { opStorage } from '@/util/db';

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
            // 登录成功 保存当前用户信息和状态到storage
            opStorage('electron-vue', {
                key: 'islogin',
                value: true
            });
            opStorage('electron-vue', {
                key: 'userInfo',
                value: payload.data
            });
            state.islogin = true;
            state.userInfo = payload.data;
        },
        // 退出登陆
        USER_LOGOUT (state, payload) {
            if (!payload) alert('退出失败');
            alert('退出成功');
            // 退出登录，清除storage
            opStorage('electron-vue', 'null');
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
        // 刷新余额
        GET_BALANCE (state, payload) {
            if (!payload) alert('刷新余额失败');
            if (state.userInfo) {
                const { balance } = payload.data;
                let userInfo = opStorage('electron-vue').userInfo;
                userInfo.balance = balance;
                opStorage('electron-vue', {
                    key: 'userInfo',
                    value: userInfo
                });
                state.userInfo.balance = balance;
            }
        },
        // f5刷新 更新是否已登录
        REFLASH_ISLOGIN (state, payload) {
            let islogin = opStorage('electron-vue').islogin;
            state.islogin = islogin ? true : false;
        }
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
        // 刷新余额
        async getBalance ({ state, commit }, params) {
            commit('GET_BALANCE', await getBalance())
        },
        // f5刷新 更新是否已登录
        async reflashIsLogin ({ state, commit }, params) {
            commit('REFLASH_ISLOGIN');
        }
    }
}

export default LoginTool