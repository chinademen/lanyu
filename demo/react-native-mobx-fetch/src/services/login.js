import request from '@/fetch'
import api from '@/config/api'

// 登录
export function userLogin(params) {
    return request(api.login.userLogin, {
        method: 'POST',
        data: params,
        dataType: 'FormData'
    })
}
