import request from '@/axios/request';
import api from '@/config/api';
import { objToStr } from '@/utils/format';

// login
export function login(params) {
    return request(api.common.login, {
        method: 'POST',
        data: params,
    })
}

// logout
export function logout(params) {
    return request(api.common.logout, {
        method: 'POST',
        data: params,
    })
}