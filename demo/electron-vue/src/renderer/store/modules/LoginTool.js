import { userLogin } from '@/services/LoginTools'

const LoginTool = {
    state: {
        isLoginError: false, // 登陆失败
    },
    mutations: {
        // 本地操作
        TOGGLE_LOGINERROR (state, payload) {
            // state.isLoginError = payload.isError;
            state.isLoginError = !state.isLoginError;
        },
        // 异步操作
        // 登陆
        USER_LOGIN (state, payload) {
            const { username, password } = payload;
            const params = {
                username, 
                password
            };
            const res = userLogin(params);
            alert('登陆成功');
        },
    },
    actions: {
        ToggleLoginError ({ commit }, isError) {
            commit({
                type: 'TOGGLE_LOGINERROR',
                isError: isError
            })
        },
        UserLogin ({ commit }, params) {
            commit({
                type: 'USER_LOGIN',
                ...params
            })
        }
    }
}

export default LoginTool