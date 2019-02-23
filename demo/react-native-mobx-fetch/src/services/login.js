import request from '@/fetch'
import api from '@/config/api'

// 获取域名
export function getServerApi(params) {
    return request(api.login.getServerApi, {
        method: 'POST',
        data: params,
        // dataType: 'FormData'
    })
}