import request from '@/axios/request';
import api from '@/config/api';

// 登入
export function userLogin(params) {
    return request(api.commom.login, {
        method: 'POST',
        data: params,
        dataType: 'FormData'
    });
}

// 登出
export function userLogout(params) {
    return request(api.commom.logout, {
        method: 'POST',
        data: params,
        dataType: 'FormData'
    });
}