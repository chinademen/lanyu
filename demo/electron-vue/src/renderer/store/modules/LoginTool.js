import { userLogin } from '@/services/LoginTools'

const LoginTool = {
    state: {
        isLoginError: false, // 登陆失败
    },
    // 同步
    mutations: {
        // 本地操作
        TOGGLE_LOGINERROR (state, payload) {
            // state.isLoginError = payload.isError;
            state.isLoginError = !state.isLoginError;
        },
        // 异步操作
        // 登陆
        USER_LOGIN (state, payload) {
            const { status } = payload;
            alert(payload.msg);
        },
    },
    // 异步
    actions: {
        ToggleLoginError ({ commit }, isError) {
            commit({
                type: 'TOGGLE_LOGINERROR',
                isError: isError
            })
        },
        // 登录
        async UserLogin ({ state, commit }, payload) {
            const { username, password } = payload;
            if (!username) {
                return alert('请输入用户名')
            };
            if (!password) {
                return alert('请输入密码')
            };
            commit('USER_LOGIN', await userLogin(payload))
        }
    }
}

export default LoginTool