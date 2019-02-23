import request from '@/axios/request';
import api from '@/config/api';

// 行业资讯列表
export function articleList(params) {
    return request(api.article.list, {
        method: 'POST',
        data: params,
        dataType: 'FormData'
    });
}

// 新增行业资讯
export function articleAdd(params) {
    return request(api.article.add, {
        method: 'POST',
        data: params,
        dataType: 'FormData'
    });
}

// 修改行业资讯信息
export function articleEdit(params) {
    return request(api.article.edit, {
        method: 'POST',
        data: params,
        dataType: 'FormData'
    });
}

// 上传图片
export function updateImage(params) {
    return request(api.article.updateImage, {
        method: 'POST',
        data: params,
        header: {
            'content-type': false,
        }
    });
}