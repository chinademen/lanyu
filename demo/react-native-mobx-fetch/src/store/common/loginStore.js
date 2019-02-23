import { observable, computed, action, runInAction } from 'mobx'
import { getServerApi } from '@/services/login'

class LoginStore {
    @observable username = '';
    @observable getServerApi = '111'

    // 获取域名
    @action
    getServerApi = async(params) => {
        const res = await getServerApi(params);
        runInAction(() => {
            if (!res) return;
            alert(res.data.apiurl, res.data.socketurl)
        })
    }
}

export default new LoginStore()