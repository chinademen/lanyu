import request from '@/axios/request';
import api from '@/config/api';

// 线路检测
export function checkLine(params) {
    return request(api.common.line, {
        method: 'POST',
        data: params,
        dataType: 'FormData',
    });
}

// 登陆
export function userLogin(params) {
    return request(api.common.login, {
        method: 'POST',
        data: params,
        dataType: 'FormData',
    });
}

// 登出
export function userLogout(params) {
    return request(api.common.logout, {
        method: 'POST',
        data: params,
        dataType: 'FormData',
    });
}

// 彩种列表
export function lotteryList(params) {
    return request(api.common.lotteryList, {
        method: 'POST',
        data: params,
        dataType: 'FormData',
    });
}


// 当前彩种信息
export function currentLottery(params) {
    return request(api.common.currentLottery, {
        method: 'POST',
        data: params,
        dataType: 'FormData',
    });
}