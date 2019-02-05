import request from '@/axios/request';
import api from '@/config/api';

// 文章列表
export function articleList(params) {
    return request(api.article.list, {
        method: 'POST',
        data: params,
        dataType: 'FormData'
    });
}

// 新增文章
export function articleAdd(params) {
    return request(api.article.add, {
        method: 'POST',
        data: params,
        dataType: 'FormData'
    });
}

// 修改文章信息
export function articleEdit(params) {
    return request(api.article.edit, {
        method: 'POST',
        data: params,
        dataType: 'FormData'
    });
}