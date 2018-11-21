import { userLogin, userLogout } from '@/services/common'

const LoginTool = {
    state: {
        islogin: false, // 是否登陆
        userInfo: null, // 保存当前用户信息
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
        }
    },
    // 异步
    actions: {
        // 登录
        async UserLogin ({ state, commit }, payload) {
            const { username, password } = payload;
            if (!username) return alert('请输入用户名');
            if (!password) return alert('请输入密码');
            commit('USER_LOGIN', await userLogin(payload))
        },
        // 退出
        async UserLogout ({ state, commit }, payload) {
            commit('USER_LOGOUT', await userLogout())
        }
    }
}

export default LoginTool