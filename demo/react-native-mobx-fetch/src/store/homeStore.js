import { observable, computed, action, runInAction } from 'mobx'
import api from '@/config/api'
import { getBanner,  getNotice,  getUserInfo,  getUserLotteryList,  workroomThirdgameList } from '@/services/home'

class HomeStore {
    @observable bannerList = []      // banner数组
    @observable noticeList = []      // 公告列表
    @observable userInfo = {}        // 用户信息
    @observable lotteryList = []     // 彩种列表
    @observable thirdGameList = []   // 第三方游戏列表
    @observable username = ''
    @observable foodCategoryList = []
    @observable errorMsg = ''


    // 获取banner图 res=[{id,title,target,url}]
    @action.bound
    async getBanner() {
        let res = await getBanner();
        runInAction(() => {
            if (!res) return;
            if (res.length > 0) {
                res.forEach((a) => {
                    let url = a.url;
                    url = (url[0] === '.') ? url.substring(1, url.length) : url;
                    a.url = api.baseURL + url;
                })
            }
            this.bannerList.splice(res.length, 0, ...res)
        })
    }
    
    // 获取公告 res={list:[{id,isnew,title,content,updatetime}],currentpage,pagesize,totalcount,totalpage}
    @action.bound
    async getNotice() {
        const res = await getNotice();
        runInAction(() => {
            if (!res) return;
            let { list } = res;
            if (list.length > 0) {
                this.noticeList.splice(list.length, 0, ...list)
            }
        })
    }
    
    // 获取用户信息
    // res = {id,balance,islockbank,issetfundpassword,issetsafequesion,
    // istester,istopproxy,mailcount,nickname,phone,qq,rebate,username}
    @action.bound
    async getUserInfo() {
        const res = await getUserInfo();
        runInAction(() => {
            if (!res) return;
            this.userInfo = res;
        })
    }

    // 获取彩种列表 res=[{lotteryid,tag,isshow,fronttype,cnname,typecode}]
    @action.bound
    async getUserLotteryList() {
        const res = await getUserLotteryList();
        runInAction(() => {
            if (!res) return;
            this.lotteryList = res;
        })
    }

    // 获取第三方游戏列表 res=[{id,createtime,gamename,maxtransfer,mintransfer,status,thirdgameid,updatetime,workroomid}]
    @action.bound
    async workroomThirdgameList() {
        const res = await workroomThirdgameList();
        runInAction(() => {
            if (!res) return;
            this.thirdGameList = res;
        })
    }

    @action
    fetchCategoryList = async() => {
        try {
            const url = 'http://food.boohee.com/fb/v1/categories/list'
            const responseData = await get({url, timeout: 30}).then(res => res.json())

            runInAction(() => {
                this.foodCategoryList.replace(responseData.group)
                this.errorMsg = ''
            })
        } catch (error) {
            if (error.msg) {
                this.errorMsg = error.msg
            } else {
                this.errorMsg = error
            }
        }
    }

    @computed
    get isFetching() {
        return this.foodCategoryList.length === 0 && this.errorMsg === ''
    }

    @computed
    get isNoResult() {
        return this.foodCategoryList.length === 0
    }
}

export default new HomeStore()