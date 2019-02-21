import { observable, action, runInAction } from 'mobx'
import { dnaList, dnaAdd, dnaEdit } from '@/services/dna'

class DnaStore {
    @observable data = {    // 成功案例数据 
        list: [],
        pageNo: 1,
        pageSize: 10,
        totalPage: 0,
        totalRecord: 0
    };

    // 查询DNA检测列表
    @action.bound
    async dnaList(params) {
        const res = await dnaList(params);
        runInAction(() => {
            if(!res) return;
            this.data = res.data;
        })
    }

    // 新增DNA检测
    @action.bound
    async dnaAdd(params, callback) {
        const res = await dnaAdd(params);
        runInAction(() => {
            if(!res) return;
            if (callback) callback(res);
        })
    }

    // 修改DNA检测
    @action.bound
    async dnaEdit(params, callback) {
        const res = await dnaEdit(params);
        runInAction(() => {
            if(!res) return;
            if (callback) callback(res);
        })
    }
}

const dnaStore = new DnaStore();
export default dnaStore;