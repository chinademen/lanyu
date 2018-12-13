import request from '@/axios/request';
import api from '@/config/api';
import { objToStr } from '@/utils/format';

// 登陆
export function login(params) {
    return request(api.common.login, {
        method: 'POST',
        data: params,
    })
}

// 登出
export function logout(params) {
    return request(api.common.logout, {
        method: 'POST',
        data: params,
    })
}