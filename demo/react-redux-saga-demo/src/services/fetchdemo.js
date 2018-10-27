// 演示使用axios的各种数据类型提交方式
import request from '@/fetch/fetch';
import api from '@/config/api';
import { objToStr } from '@/util/format';

// 1. application/x-www-form-urlencoded 表单默认提交
/*
Form Data
    username: admin
    password: 123456
    validCode: 0000
*/
// GET/POST
 export function userLogin1(params) {
    return request(api.login.userLogin, {
        method: 'POST',
        body: params,
        type: 'FormData'
    });
}

// 2. multipart/form-data 上传文件
// 提交数据格式:
/*
------WebKitFormBoundaryKVTJKN2OA9sGhF8Q
Content-Disposition: form-data; name="username"
admin

------WebKitFormBoundaryKVTJKN2OA9sGhF8Q
Content-Disposition: form-data; name="password"
123456

------WebKitFormBoundaryKVTJKN2OA9sGhF8Q
Content-Disposition: form-data; name="validCode"
0000
*/
// GET/POST
// export function userLogin2(params) {
//     return request(api.login.userLogin, {
//         method: 'POST',
//         body: params,
//         header: {
//             'content-type': false
//         }
//     });
// }

// 3. application/json json格式
// GET
/* 
Query String Parameters
username: admin
password: 123456
validCode: 0000
*/
export function userLogin3(params) {
    return request(api.login.userLogin + objToStr(params), {
        method: 'GET'
    });
}

// POST
/*
Request Payload
{
    username: admin
    password: 123456
    validCode: 0000
}
*/
export function userLogin4(params) {
    return request(api.login.userLogin, {
        method: 'POST',
        body: params
    });
}