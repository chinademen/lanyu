import { observable, action, runInAction } from 'mobx'
import { raidersList, raidersAdd, raidersEdit, updateImage } from '@/services/raiders'

class RaidersStore {
    @observable data = {    // 成功案例数据 
        list: [],
        pageNo: 1,
        pageSize: 10,
        totalPage: 0,
        totalRecord: 0
    };

    // 查询鉴定攻略列表
    @action.bound
    async raidersList(params) {
        const res = await raidersList(params);
        runInAction(() => {
            if(!res) return;
            this.data = res.data;
        })
    }

    // 新增鉴定攻略
    @action.bound
    async raidersAdd(params, callback) {
        const res = await raidersAdd(params);
        runInAction(() => {
            if(!res) return;
            if (callback) callback(res);
        })
    }

    // 修改鉴定攻略
    @action.bound
    async raidersEdit(params, callback) {
        const res = await raidersEdit(params);
        runInAction(() => {
            if(!res) return;
            if (callback) callback(res);
        })
    }

    // 上传图片
    @action.bound
    async updateImage(params, callback) {
        const res = await updateImage(params);
        runInAction(() => {
            if(!res) return;
            if (callback) callback(res);
        })
    }
}

const raidersStore = new RaidersStore();
export default raidersStore;