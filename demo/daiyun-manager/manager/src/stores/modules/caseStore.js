import { observable, action, runInAction } from 'mobx'
import { caseList, caseAdd, caseEdit, updateImage } from '@/services/case'

class CaseStore {
    @observable data = {    // 成功案例数据 
        list: [],
        pageNo: 1,
        pageSize: 10,
        totalPage: 0,
        totalRecord: 0
    };

    // 查询成功案例列表
    @action.bound
    async caseList(params) {
        const res = await caseList(params);
        runInAction(() => {
            if(!res) return;
            this.data = res.data;
        })
    }

    // 新增成功案例
    @action.bound
    async caseAdd(params, callback) {
        const res = await caseAdd(params);
        runInAction(() => {
            if(!res) return;
            if (callback) callback(res);
        })
    }

    // 修改成功案例
    @action.bound
    async caseEdit(params, callback) {
        const res = await caseEdit(params);
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

const caseStore = new CaseStore();
export default caseStore;