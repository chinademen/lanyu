import request from '@/fetch/fetch';
import api from '@/config/api';
import { objToStr } from '@/util/format';

// 验证码
export function getVerify(params) {
    return request(api.login.getVerify, {
        method: 'GET',
    });
}

// 登录
export function userLogin(params) {
    return request(api.login.userLogin, {
        method: 'POST',
        body: params
    });
}

// 登出
export function userLogout(params) {
    return request(api.login.userLogout, {
        method: 'GET'
    }); 
}