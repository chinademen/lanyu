import { observable, action, runInAction } from 'mobx';
import { getgg } from '@/services/common';

class CommonStore {
    @observable username = null; // 当前登录用户

    // 保存当前登录用户
    @action saveUsername(username) {
        this.username = username;
    }

}

const commonStore = new CommonStore();
export default commonStore;