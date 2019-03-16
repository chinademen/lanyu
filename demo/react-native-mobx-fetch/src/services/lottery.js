import request from '@/axios'
import api from '@/config/api'

// 彩票投注页面入口
export function enterLottery(params = {}) {
    return request(api.lottery.enterLottery, {
        method: 'POST',
        data: params,
        dataType: 'FormData'
    })
}