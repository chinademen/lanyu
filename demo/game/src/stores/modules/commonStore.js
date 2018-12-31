import { observable, action } from 'mobx';

class CommonStore {
    @observable username = '';  // 当前登陆用户
    @observable balance = 0; // 当前登陆用户可用余额
    @observable currentLottertyName = '首页'; // 当前彩种名称

    @action.bound
    async getUserInfo() {

    }

    /* 改变当前彩种名称 */
    @action.bound
    async changeCurrentLotteryName(name) {
        this.currentLottertyName = name;
    }
}

const commonStore = new CommonStore();
export default commonStore;