import { observable, action, runInAction } from 'mobx';
import { getForumListZone } from '@/services/forum';

class ForumStore {
    @observable forumid = null; // 当前贴吧社区id
    @observable forumZoneList = null; // 所有广告图片

    // 设置当前贴吧社区id
    @action setForumid(forumid) {
        this.forumid = forumid;
    }

    // 获取对应的贴吧分区列表
    @action.bound
    async getForumListZone(forumid) {
        const res = await getForumListZone({ forumid });
        runInAction(() => {
            if (!res) return;
            this.forumZoneList = res.data;
        })
    }
}

const forumStore = new ForumStore();
export default forumStore;