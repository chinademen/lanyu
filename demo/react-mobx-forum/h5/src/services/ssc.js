// 演示使用axios的各种数据类型提交方式
import request from '@/axios/request';
import api from '@/config/api';
import { objToStr } from '@/utils/format';

// 获取对应彩种玩法
export function getMethods(params) {
    return request(api.lottery[params], {
        method: 'POST',
    });
}