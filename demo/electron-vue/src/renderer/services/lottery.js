import request from '@/axios/request';
import api from '@/config/api';

// 近期开奖号码
export function lotteryNumber(params) {
    return request(api.lottery.lotteryNumber, {
        method: 'POST',
        data: params,
        dataType: 'FormData',
    });
}
