import request from '@/axios/request';
import api from '@/config/api';

// DNA检测列表
export function dnaList(params) {
    return request(api.dna.list, {
        method: 'POST',
        data: params,
        dataType: 'FormData'
    });
}

// 新增DNA检测
export function dnaAdd(params) {
    return request(api.dna.add, {
        method: 'POST',
        data: params,
        dataType: 'FormData'
    });
}

// 修改DNA检测信息
export function dnaEdit(params) {
    return request(api.dna.edit, {
        method: 'POST',
        data: params,
        dataType: 'FormData'
    });
}