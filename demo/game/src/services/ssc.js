// 演示使用axios的各种数据类型提交方式
import request from '@/axios/request';
import api from '@/config/api';
import { objToStr } from '@/utils/format';

// 时时彩
 export function getCqssc(params) {
    return request(api.ssc.cqssc, {
        method: 'POST',
        data: params,
        // dataType: 'FormData'
    });
}

