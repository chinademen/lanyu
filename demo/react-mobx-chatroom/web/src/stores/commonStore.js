import { observable, action, runInAction } from 'mobx';
import { getgg } from '@/services/common';

class CommonStore {
    @observable ggList = null; // 所有广告图片

    // 获取所有广告图片
    @action.bound
    async getgg(params) {
        const res = await getgg();
        runInAction(() => {
            if (!res) return;
            this.ggList = res.data;
        })
    }
}

const commonStore = new CommonStore();
export default commonStore;