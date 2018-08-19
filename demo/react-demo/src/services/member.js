import request from '@/fetch/request';
import api from '@/config/api';
import { objToStr } from '@/util/format';

// 会员信息列表
export function memberList(params) {
    return request(api.member.memberList + objToStr(params), {
        method: 'GET'
    });
}
