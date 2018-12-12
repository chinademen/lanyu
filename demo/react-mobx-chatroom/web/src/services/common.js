import request from '@/axios/request';
import api from '@/config/api';
import { objToStr } from '@/utils/format';

// 获取所有广告图片
export function getgg(params) {
    return request(api.common.getgg, {
        method: 'POST',
        data: params,
        dataType: 'FormData'
    })
}