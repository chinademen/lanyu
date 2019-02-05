import { observable, action, runInAction } from 'mobx'
import { articleList, articleAdd, articleEdit } from '@/services/article'

class ArticleStore {
    @observable data = {    // 文章列表数据 
        list: [],
        pageNo: 1,
        pageSize: 10,
        totalPage: 0,
        totalRecord: 0
    };

    // 查询文章列表
    @action.bound
    async articleList(params) {
        const res = await articleList(params);
        runInAction(() => {
            if(!res) return;
            this.data = res.data;
        })
    }

    // 新增文章
    @action.bound
    async articleAdd(params, callback) {
        const res = await articleAdd(params);
        runInAction(() => {
            if(!res) return;
            if (callback) callback(res);
        })
    }

    // 修改文章
    @action.bound
    async articleEdit(params, callback) {
        const res = await articleEdit(params);
        runInAction(() => {
            if(!res) return;
            if (callback) callback(res);
        })
    }
}

const articleStore = new ArticleStore();
export default articleStore;