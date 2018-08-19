import axios from "axios";
import { message } from 'antd';
import createHistory from 'history/createHashHistory';
const history = createHistory();

// 提示框
message.config({
    top: 100,
    delay: 3,
    maxCount: 1,
});

// axios公共配置
const service = axios.create({
    timeout: 15000,     // 配置超时
    // 这里可以配置终止axios请求的开关, 但是saga的takeLatest可以代替, 这里就不需要配置了    
});

// 处理状态码(这里处理的是项目约定的状态码, 非浏览器自带的状态码)
function checkStatus(data) {
    const status = data.status;
    // 401用户没有权限
    if (status === 401) {
        // 这里做清除storage等操作
        // 返回登录界面
        history.replace('/user/login');
        return;
    }
    // 其他状态码操作
}

// 处理application/x-www-form-urlencoded格式数据
function toFormData(config) {
    config.transformRequest = [function (data) {
        let res = '';
        for (let i in data) {
            res += encodeURIComponent(i) + '=' + encodeURIComponent(data[i]) + '&';
        }
        return res;
    }];
}

// request拦截器
service.interceptors.request.use(
    config => {
        // 登录使用FormData格式  其余方法使用json格式  提交数据使用multipart/form-data提交
        if (config.dataType === 'FormData') {
            toFormData(config);
        }

        // 这里设置请求头字段,  比如所有请求携带 Authorization
        // config.headers.Authorization = xxx.Authorization;
        
        return config;
    },
    error => {
        Promise.reject(error);
    }
);

// respone拦截器
service.interceptors.response.use(
    response => {
        // 这里处理响应数据, 比如保存响应头中的  Authorization
        const { config: {method}, data, headers: {authorization} } = response;
        
        // 处理状态码(非浏览器自带状态码)
        checkStatus(data);

        // 统一post提交的提示信息
        if (data.status === 1) {
            if (method.toLocaleUpperCase() === 'POST') message.success(data.message);
            return data;
        } else {
            message.error(data.message);
        }
    },
    error => {
        let errortext = error + '';
        message.error(errortext);
        return Promise.reject({
            success: false,
            statusCode: errortext.substr(-3),
            message: errortext
        });
    }
);

export default service;