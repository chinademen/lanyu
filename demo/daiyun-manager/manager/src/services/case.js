import request from '@/axios/request';
import api from '@/config/api';

// 成功案例列表
export function caseList(params) {
    return request(api.case.list, {
        method: 'POST',
        data: params,
        dataType: 'FormData'
    });
}

// 成功案例资讯
export function caseAdd(params) {
    return request(api.case.add, {
        method: 'POST',
        data: params,
        dataType: 'FormData'
    });
}

// 修改成功案例信息
export function caseEdit(params) {
    return request(api.case.edit, {
        method: 'POST',
        data: params,
        dataType: 'FormData'
    });
}

// 上传图片
export function updateImage(params) {
    return request(api.case.updateImage, {
        method: 'POST',
        data: params,
        header: {
            'content-type': false,
        }
    });
}