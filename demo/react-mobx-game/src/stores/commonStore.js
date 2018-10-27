import { observable, action } from 'mobx';

class CommonStore {
    @observable username = '';  // 当前登陆用户
    @observable balance = 0; // 当前登陆用户可用余额

    @action.bound
    async getUserInfo() {

    }
}

const commonStore = new CommonStore();
export default commonStore;