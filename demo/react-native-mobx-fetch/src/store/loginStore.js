import { observable, computed, action, runInAction } from 'mobx'
import { userLogin } from '@/services/login'

class LoginStore {
    @observable username = '';

    // ????
    @action.bound
    async userLogin(params, callback) {
        const res = await userLogin(params);
        runInAction(() => {
            if (!res) return;
            storage.set('token', res.token) // ??token
            callback(res)
        })
    }
}

export default new LoginStore()