import { observable, action } from 'mobx';

class HomeStore {
    @observable theme = '';
}

const homeStore = new HomeStore();
export default homeStore;