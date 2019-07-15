import axios from "axios";

class LotteryApi {
    /**
     * 彩种列表
     */
    static getLotteryList() {
        return axios.get('/lotteryList?t=' + new Date().getTime())
    }

    static getLotteryData() {
        return axios.get('/lotteryData?t=' + new Date().getTime())
    }
}

export default LotteryApi;