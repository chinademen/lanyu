import request from '@/axios/request';
import api from '@/config/api';

// 登陆
export function userLogin(params) {
    return {
        "msg": "登录成功",
        "status": 0,
        "data": []
    }
    // return request(api.logintools.login, {
    //     method: 'POST',
    //     data: params,
    //     dataType: 'FormData'
    // });
}