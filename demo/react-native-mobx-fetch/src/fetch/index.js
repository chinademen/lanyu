// import { message } from 'antd';
// import createHistory from 'history/createHashHistory';
// const history = createHistory();

// 提示框
// message.config({
//     top: 100,
//     delay: 3,
//     maxCount: 1,
// });

// 加密
function encrypt() {

}

// 解密
function decode() {

}

// 处理application/x-www-form-urlencoded格式数据
function toFormData(config) {
    config.transformRequest = [function (data) {
        let res = '';
        for (let i in data) {
			// 如果传输的是数组， key为 key[]
            i = (data[i] instanceof Array) ? `${i}[]` : i;
            res += encodeURIComponent(i) + '=' + encodeURIComponent(data[i]) + '&';
        }
        res = res.slice(0, res.length - 1);
        return res;
    }];
}

// 处理状态码
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
}

export default function request(url, options) {
    // alert(url)
    // alert(JSON.stringify(options.body))
    alert(options.body instanceof FormData)
    // 设置 cookie可以跨域
    // options.credentials = 'include';

    // token  devicetype=1  deviceno=1

    // JSON格式数据
    if (!(options.body instanceof FormData)) {
        options.headers = {
            Accept: 'application/json', 'Content-Type': 'application/json; charset=utf-8',
        };
        options.body = JSON.stringify(options.body);
    } else {
        // FormData格式数据
        options.headers = {
            Accept: 'application/json', 'Content-Type': 'multipart/form-data',
            ...options.headers,
        };
        alert(options.body)
        // options.body = toFormData(config);
    }

    // 设置链接超时
    const xhr = Promise.race([
        fetch(url, options),
        new Promise((resolve, reject) => {
            setTimeout(() => reject(new Error('请求链接超时')), 15000)  // 设置超时时间
        })
    ]);

    return xhr.then(checkStatus)
        .then(response => {
            // alert(response.json())
            return response.json();
        })
        .catch(e => {
            // message.error(e + '');
        });
};  