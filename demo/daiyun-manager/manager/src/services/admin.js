import request from '@/axios/request';
import api from '@/config/api';

// 管理员列表
export function adminList(params) {
    return request(api.admin.list, {
        method: 'POST',
        data: params,
        dataType: 'FormData'
    });
}

// 新增管理员
export function adminAdd(params) {
    return request(api.admin.add, {
        method: 'POST',
        data: params,
        dataType: 'FormData'
    });
}

// 修改管理员信息
export function adminEdit(params) {
    return request(api.admin.edit, {
        method: 'POST',
        data: params,
        dataType: 'FormData'
    });
}