import { observable, computed, action, runInAction } from 'mobx'
import api from '@/config/api'
import { getBanner,  getNotice,  getUserInfo,  getUserLotteryList,  workroomThirdgameList } from '@/services/home'

class HomeStore {
    @observable bannerList = []      // banner数组
    @observable noticeList = []      // 公告列表
    @observable userInfo = {}        // 用户信息
    @observable lotteryList = []     // 彩种列表
    @observable newLotteryList = []  // 处理彩种列表
    @observable thirdGameList = []   // 第三方游戏列表
    @observable username = ''


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
            storage.set('user', res);
            this.userInfo = res;
        })
    }

    // 获取彩种列表 res=[{lotteryid,tag,isshow,fronttype,cnname,typecode}]
    @action.bound
    async getUserLotteryList() {
        const res = await getUserLotteryList();
        runInAction(() => {
            if (!res) return;
            this.lotteryList.splice(res.length, 0, ...res)
            // 处理彩种列表
            let isssc = [], isffc = [], is11x5 = [], isdp = [], ispk10 = [], isqt = [];
            this.lotteryList.forEach((item, index) => {
                switch ((item.fronttype - 0)) {
                    case 1:
                        isssc.push(item);
                        break;
                    case 2:
                        isffc.push(item);
                        break;
                    case 3:
                        is11x5.push(item);
                        break;
                    case 4:
                        isdp.push(item);
                        break;
                    case 5:
                        ispk10.push(item);
                        break;
                    case 6:
                        isqt.push(item);
                        break;
                    default: 
                        break;
                }
            });
            this.newLotteryList = [
                { name: '时时彩', list: isssc },
                { name: '分分彩', list: isffc },
                { name: '11选5', list: is11x5 },
                { name: '低频彩', list: isdp },
                { name: 'PK10/赛马', list: ispk10 },
                { name: '其他', list: isqt },
            ]
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

}

export default new HomeStore()