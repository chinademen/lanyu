import { observable, action, runInAction } from 'mobx';
import { userList, userAdd, userEdit } from '@/services/user'

class UserStore {
    @observable data = {    // 客户列表数据 
        list: [],
        pageNo: 1,
        pageSize: 10,
        totalPage: 0,
        totalRecord: 0
    };

    // 查询客户列表
    @action.bound
    async userList(params) {
        const res = await userList(params);
        runInAction(() => {
            if(!res) return;
            this.data = res.data;
        })
    }

    // 新增客户
    @action.bound
    async userAdd(params, callback) {
        const res = await userAdd(params);
        runInAction(() => {
            if(!res) return;
            if (callback) callback(res);
        })
    }

    // 修改客户信息
    @action.bound
    async userEdit(params, callback) {
        const res = await userEdit(params);
        runInAction(() => {
            if(!res) return;
            if (callback) callback(res);
        })
    }
}

const userStore = new UserStore();
export default userStore;