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

}

export default new LotteryStore()