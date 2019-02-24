import request from '@/fetch'
import api from '@/config/api'

// 登录
export function userLogin(params) {
    return request('/api/webarticlelist', {
        method: 'POST',
        data: params,
        dataType: 'FormData'
    })
}
