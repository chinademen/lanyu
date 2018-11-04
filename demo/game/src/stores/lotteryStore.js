import { observable, action, runInAction } from 'mobx';
import { getMethods } from '@/services/ssc';

class LotteryStore {
    @observable lotteryList = observable.map() // 彩票列表
    @observable gameMethods = null // 当前彩种玩法详情(包括玩法组和玩法群)
    @observable historyNumbers = null; // 历史开奖记录

    // 获取当前彩种详情
    @action.bound
    async getMethods(type) {
        const res = await getMethods(type);
        runInAction(() => {
            if (!res) return;
            const { gameMethods, historyNumbers } = res.data;
            this.historyNumbers = historyNumbers;
            this.gameMethods = gameMethods;
        });
    }

}

const lotteryStore = new LotteryStore();
export default lotteryStore;