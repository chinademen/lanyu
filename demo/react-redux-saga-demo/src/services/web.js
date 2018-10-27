import request from '@/fetch/request';
import api from '@/config/api';
import { objToStr } from '@/util/format';

// 上传公司LOGO
export function uploadCompanyLogo(params) {
    return request(api.web.uploadCompanyLogo, {
        method: 'POST',
        data: params,
        header: {
            'content-type': false,
        }
    });
}
