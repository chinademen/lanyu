import request from '@/axios'
import api from '@/config/api'

// 登录
export function userLogin(params = {}) {
    return request(api.login.userLogin, {
        method: 'POST',
        data: params,
        dataType: 'FormData',
        // noToken: true,
    })
}

// 忘记密码1 ---> 账号验证
export function userCheckFundPassword(params = {}) {
    return request(api.login.userCheckFundPassword, {
        method: 'POST',
        data: params,
        dataType: 'FormData',
        noToken: true,
    })
}

// 忘记密码 ---> 密码重置
export function userFindPassword(params = {}) {
    return request(api.login.userFindPassword, {
        method: 'POST',
        data: params,
        dataType: 'FormData',
        noToken: true,
    })
}