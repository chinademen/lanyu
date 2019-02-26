import { observable, computed, action, runInAction } from 'mobx'
import { userLogin, userCheckFundPassword, userFindPassword } from '@/services/login'

class LoginStore {
    @observable username = '';

    // 登录
    @action.bound
    async userLogin(params, callback) {
        const res = await userLogin(params);
        runInAction(() => {
            if (!res) return;
            callback(res)
        })
    }

    // 忘记密码1 ---> 账号验证
    @action.bound
    async userCheckFundPassword(params, callback) {
        const res = await userCheckFundPassword(params);
        runInAction(() => {
            if (!res) return;
            callback(res)
        })
    }

    // 忘记密码 ---> 密码重置
    @action.bound
    async userFindPassword(params, callback) {
        const res = await userFindPassword(params);
        runInAction(() => {
            if (!res) return;
            callback(res)
        })
    }

}

export default new LoginStore()