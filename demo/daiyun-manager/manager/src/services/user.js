import request from '@/axios/request';
import api from '@/config/api';

// 客户列表
export function userList(params) {
    return request(api.user.list, {
        method: 'POST',
        data: params,
        dataType: 'FormData'
    });
}

// 新增客户
export function userAdd(params) {
    return request(api.user.add, {
        method: 'POST',
        data: params,
        dataType: 'FormData'
    });
}

// 修改客户信息
export function userEdit(params) {
    return request(api.user.edit, {
        method: 'POST',
        data: params,
        dataType: 'FormData'
    });
}