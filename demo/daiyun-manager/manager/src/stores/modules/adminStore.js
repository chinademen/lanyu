import { observable, action, runInAction } from 'mobx'
import { adminList, adminAdd, adminEdit } from '@/services/admin'

class AdminStore {
    @observable data = {    // 管理员列表数据 
        list: [],
        pageNo: 1,
        pageSize: 10,
        totalPage: 0,
        totalRecord: 0
    }; 

    // 查询管理员列表
    @action.bound
    async adminList(params) {
        const res = await adminList(params);
        runInAction(() => {
            if(!res) return;
            this.data = res.data;
        })
    }

    // 新增管理员
    @action.bound
    async adminAdd(params, callback) {
        const res = await adminAdd(params);
        runInAction(() => {
            if(!res) return;
            if (callback) callback(res);
        })
    }

    // 修改管理员信息
    @action.bound
    async adminEdit(params, callback) {
        const res = await adminEdit(params);
        runInAction(() => {
            if(!res) return;
            if (callback) callback(res);
        })
    }
}

const adminStore = new AdminStore();
export default adminStore;