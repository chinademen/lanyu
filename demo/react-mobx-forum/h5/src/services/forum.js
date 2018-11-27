import request from '@/axios/request';
import api from '@/config/api';
import { objToStr } from '@/utils/format';

// 获取对应的贴吧分区列表
export function getForumListZone(params) {
    return request(api.forum.getForumListZone, {
        method: 'POST',
        data: params,
        dataType: 'FormData'
    })
}