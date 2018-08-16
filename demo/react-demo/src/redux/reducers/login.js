// 1. 定义action type
// 修改store的action
export const CHANGE_GETVERIFY = 'CHANGE_GETVERIFY';
export const CHANGE_USERLOGIN = 'CHANGE_USERLOGIN';
// 和后台的数据交互的action   
export const LOGIN_GETVERIFY = 'LOGIN_GETVERIFY';   // 获取验证码
export const LOGIN_USERLOGIN = 'LOGIN_USERLOGIN';   // 登入
export const LOGIN_USERLOGOUT = 'LOGIN_USERLOGOUT'; // 登出




// 3. 定义reducer
// 初始化state
const initState = {
    userAccount: null,
    currentCompanyName: null,
    info1: 0,
    info2: 0,
    menusData: [],
};

const login = (state = initState, action) => {
   switch(action.type) {
        case CHANGE_GETVERIFY: {
            return {imgSrc: `data:image/jpeg;base64,${action.payload}`}
        }
        case CHANGE_USERLOGIN: {
            const { payload } = action;
            return { ...state, ...payload }
        }
    }
    return state;
};

export default login;
