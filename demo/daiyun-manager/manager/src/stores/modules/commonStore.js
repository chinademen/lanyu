import { observable, action, runInAction } from 'mobx'
import { userLogin, userLogout } from '@/services/common'

class CommonStore {
    @observable username = '';  // 当前登陆用户

    // 登录
    @action.bound
    async userLogin(values, callback) {
        const params = {
            ...values
        }
        const res = await userLogin(params);
        runInAction(() => {
            if (!res) return;
            if (callback) callback(res);
        })
    }

    // 登出
    @action.bound
    async userLogout(callback) {
        const res = await userLogout();
        runInAction(() => {
            if (!res) return;
            if (callback) callback(res);
        })
    }
}

const commonStore = new CommonStore();
export default commonStore;