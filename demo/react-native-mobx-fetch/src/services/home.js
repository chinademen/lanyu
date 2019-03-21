import request from '@/axios'
import api from '@/config/api'

// 获取banner图
export function getBanner(params = {}) {
    return request(api.home.getBanner, {
        method: 'POST',
        data: params,
        dataType: 'FormData'
    })
}

// 获取公告
export function getNotice(params = {}) {
    return request(api.home.getNotice, {
        method: 'POST',
        data: params,
        dataType: 'FormData'
    })
}

// 获取用户信息
export function getUserInfo(params = {}) {
    return request(api.home.getUserInfo, {
        method: 'POST',
        data: params,
        dataType: 'FormData'
    })
}

// 获取彩种列表
export function getUserLotteryList(params = {}) {
    return request(api.home.getUserLotteryList, {
        method: 'POST',
        data: params,
        dataType: 'FormData'
    })
}

// 获取第三方游戏列表
export function workroomThirdgameList(params = {}) {
    return request(api.home.workroomThirdgameList, {
        method: 'POST',
        data: params,
        dataType: 'FormData'
    })
}

// 获取用户投注金额模式(元角分厘)
export function getLotteryBetMode(params = {}) {
    return request(api.home.getLotteryBetMode, {
        method: 'POST',
        data: params,
        dataType: 'FormData'
    })
}