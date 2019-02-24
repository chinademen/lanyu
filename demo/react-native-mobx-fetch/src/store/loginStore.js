import { observable, computed, action, runInAction } from 'mobx'
import { userLogin } from '@/services/login'

class LoginStore {
    @observable username = '';

    // 登录
    @action.bound
    async userLogin(params) {
        const res = await userLogin(params);
        runInAction(() => {
            if (!res) return;
        })
    }
}

export default new LoginStore()