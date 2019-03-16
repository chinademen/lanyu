import { observable, computed, action, runInAction } from 'mobx'
import api from '@/config/api'
import { enterLottery } from '@/services/lottery'

class LotteryStore {
    @observable lotteryUrl = ''      // 彩票投注页面地址
    @observable awardUrl = ''        // 彩票开奖信息页面地址

    // 彩票投注页面入口 res={ url:'' }
    @action.bound
    async enterLottery(params = {}) {
        let res = await enterLottery(params);
        runInAction(() => {
            if (!res) return;
            const { url } = res;
            this.lotteryUrl = `https://${url}&url=${api.baseURL}/h5/#/login`;
            this.awardUrl = `https://${url.split('?')[0].split('#')[0]}#/allIssueCode?${url.split('?')[1]}`;
        })
    }

    // 第二次进入彩票投注页面
    @action.bound
    updateLotteryUrl(lotteryid) {
        const arr = this.lotteryUrl.split('?');
        this.lotteryUrl = `${arr[0]}lottery/${lotteryid}?${arr[1]}`;
    }

}

export default new LotteryStore()