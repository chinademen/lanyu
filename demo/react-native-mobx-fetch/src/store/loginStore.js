import { observable, computed, action, runInAction } from 'mobx'
import { getServerApi } from '@/services/login'

export default class LoginStore {
    @observable username = '';
    // constructor(params) {
    //     this.getServerApi(params)
    // }

    // 获取域名
    @action.bound
    async getServerApi(params) {
        const res = await getServerApi(params);
        runInAction(() => {
            if (!res) return;
            alert(res.data.apiurl, res.data.socketurl)
        })
    }
}
