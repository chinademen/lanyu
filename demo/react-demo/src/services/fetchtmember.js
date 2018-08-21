import request from '@/fetch/fetch';
import api from '@/config/api';
import { objToStr } from '@/util/format';

// 会员信息列表
export function memberList(params) {
    return request(api.member.memberList + objToStr(params), {
        method: 'GET'
    });
}

// 新增会员
export function addMember(params) {
    return request(api.member.addMember, {
        method: 'POST',
        body: params
    });
}

// 修改会员信息
export function editMember(params) {
    return request(api.member.editMember, {
        method: 'POST',
        body: params
    });
}