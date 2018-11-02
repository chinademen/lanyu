import { observable, action, runInAction } from 'mobx';
import methodsList from '@/mock/methodlist';
import { getCqssc } from '@/services/ssc';

class LotteryStore {
    @observable lotteryList = observable.map()

    // 获取时时彩
    @action.bound
    async getCqssc() {
        const res = await getCqssc();
        runInAction(() => {
            console.log(res)
        });
    }
}

const lotteryStore = new LotteryStore();
export default lotteryStore;