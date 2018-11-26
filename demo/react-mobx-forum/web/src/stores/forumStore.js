import { observable, action, runInAction } from 'mobx';
import { getForumListZone } from '@/services/forum';

class ForumStore {
    @observable forumZoneList = null; // 所有广告图片
    @observable forumid = null; // 当前贴吧社区id
    @observable closeForumList = []; // 当前收起的社区

    // 获取对应的贴吧分区列表
    @action.bound
    async getForumListZone(forumid) {
        const res = await getForumListZone({ forumid });
        runInAction(() => {
            if (!res) return;
            this.forumZoneList = res.data;
        })
    }

    // 设置当前贴吧社区id
    @action setForumid(forumid) {
        this.forumid = forumid;
    }

    // 设置当前收起/展开的社区
    @action setCloseForumList(forumid) {
        const hasId = this.closeForumList.includes(forumid);
        if (hasId) {
            const i = this.closeForumList.indexOf(forumid);
            this.closeForumList.splice(i, 1);
        } else {
            this.closeForumList.push(forumid)
        }
    }
}

const forumStore = new ForumStore();
export default forumStore;