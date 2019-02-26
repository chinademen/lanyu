import { observable, computed, action, runInAction } from 'mobx'
import { getBanner,  getNotice,  getUserInfo,  getUserLotteryList,  workroomThirdgameList } from '@/services/home'

class HomeStore {
    @observable username = '';

    // 获取banner图
    @action.bound
    async getBanner(params, callback) {
        const res = await getBanner(params);
        runInAction(() => {
            if (!res) return;
            callback(res)
        })
    }

    // 获取公告
    @action.bound
    async getNotice(params, callback) {
        const res = await getNotice(params);
        runInAction(() => {
            if (!res) return;
            callback(res)
        })
    }

    // 获取用户信息
    @action.bound
    async getUserInfo(params, callback) {
        const res = await getUserInfo(params);
        runInAction(() => {
            if (!res) return;
            callback(res)
        })
    }

    // 获取彩种列表
    @action.bound
    async getUserLotteryList(params, callback) {
        const res = await getUserLotteryList(params);
        runInAction(() => {
            if (!res) return;
            callback(res)
        })
    }

    // 获取第三方游戏列表
    @action.bound
    async workroomThirdgameList(params, callback) {
        const res = await workroomThirdgameList(params);
        runInAction(() => {
            if (!res) return;
            callback(res)
        })
    }
}

export default new HomeStore()