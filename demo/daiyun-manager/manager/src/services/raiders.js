import request from '@/axios/request';
import api from '@/config/api';

// 鉴定攻略列表
export function raidersList(params) {
    return request(api.raiders.list, {
        method: 'POST',
        data: params,
        dataType: 'FormData'
    });
}

// 鉴定攻略资讯
export function raidersAdd(params) {
    return request(api.raiders.add, {
        method: 'POST',
        data: params,
        dataType: 'FormData'
    });
}

// 修改鉴定攻略信息
export function raidersEdit(params) {
    return request(api.raiders.edit, {
        method: 'POST',
        data: params,
        dataType: 'FormData'
    });
}