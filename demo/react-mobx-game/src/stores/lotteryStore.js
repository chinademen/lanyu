import { observable, action } from 'mobx';

class LotteryStore {
    @observable lotteryList = observable.map()
}

const lotteryStore = new LotteryStore();
export default lotteryStore;