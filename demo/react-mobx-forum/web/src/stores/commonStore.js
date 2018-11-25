import { observable, action, runInAction } from 'mobx';
import { getgg } from '@/services/common';

class CommonStore {
    @observable activeNav = 0; // 被选中一级导航栏
    @observable activeNavTwo = 0; // 被选中二级导航栏
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

    // 更新被选中导航
    @action.bound
    updateTab(index, level) {
        if (level === 1) {
            this.activeNav = index;
        } else {
            this.activeNavTwo = index;
        }
    }
}

const commonStore = new CommonStore();
export default commonStore;