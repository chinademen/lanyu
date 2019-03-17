import { observable, computed, action, runInAction } from 'mobx'
import api from '@/config/api'
import { enterLottery } from '@/services/lottery'

class LotteryStore {
    @observable url = ''             // 不携带lotteryid的初始url
    @observable lotteryUrl = ''      // 彩票投注页面地址
    @observable awardUrl = ''        // 彩票开奖信息页面地址

    // 彩票投注页面入口 res={ url:'' }
    @action.bound
    async enterLottery() {
        let res = await enterLottery();
        runInAction(() => {
            if (!res) return;
            const { url } = res;
            this.url = url;
            this.lotteryUrl = `https://${url}&url=${api.baseURL}/h5/#/login`;
            this.awardUrl = `https://${url.split('?')[0].split('#')[0]}#/allIssueCode?${url.split('?')[1]}`;
        })
    }

    // 第二次进入彩票投注页面
    @action.bound
    updateLotteryUrl(lotteryid) {
        const arr = this.url.split('?');
        this.lotteryUrl = `https://${arr[0]}lottery/${lotteryid}?${arr[1]}&url=${api.baseURL}/h5/#/login`;
    }

}

export default new LotteryStore()