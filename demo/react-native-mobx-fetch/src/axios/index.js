import axios from 'axios'
import { Alert } from 'react-native'
import api from '@/config/api'
import app from '@/store/common/app'

// axios公共配置
const service = axios.create({
    // 配置默认域名
    baseURL: api.baseURL,
    // baseURL: 'https://frontapi.yuleyun.app', // pre环境
    // baseURL: 'https://frontapi.donghuang918.com', // 正式环境
    // 配置超时
    timeout: 15000,     
    // 这里可以配置终止axios请求的开关, 但是saga的takeLatest可以代替, 这里就不需要配置了    
});

// 处理状态码(这里处理的是项目约定的状态码, 非浏览器自带的状态码)
function checkStatus(data) {
    const { status, msg } = data;
    // 401用户没有权限
    if (status === 401) {
        // 这里做清除storage等操作
        // 返回登录界面
        // return history.replace('/login');
    }
    // 13参数错误
    if (status === 13) {
        Alert.alert(data.msg);
        app.submiting = fasle;
        return;
    }
}

// 获取token
async function getToken() {
    let token = await storage.get('token');
}

// 处理application/x-www-form-urlencoded格式数据
function toFormData(config) {
    config.transformRequest = [function (data) {
        let res = '';
        for (let i in data) {
            // 数组处理
            if (data[i] instanceof Array) {
                let len = data[i].length;
                for (let j = 0; j < len; j++) {
                    res += encodeURIComponent(i + '[' + j + ']') + '=' + encodeURIComponent(data[i][j]) + '&';
                }
            } else {
                // 非数组数据处理
                res += encodeURIComponent(i) + '=' + encodeURIComponent(data[i]) + '&';
            }
        }
        res = res.slice(0, res.length - 1);
        return res;
    }];
}

// request拦截器
service.interceptors.request.use(
    config => {
        // alert(JSON.stringify(config.data))
        // 通过参数判断是否需要携带token，接口默认携带token
        let { data, noToken } = config;
        if (!data) data = {};
        if (!noToken) {
            data.token = app.token || getToken();
        }

        // 添加公共参数
        data.devicetype = 1;
        data.deviceno = 1;
        
        // 加密

        // 重新赋值
        config.data = data;
        
        // FormData格式  其余方法使用json格式  提交数据使用multipart/form-data提交
        if (config.dataType === 'FormData') {
            toFormData(config);
        }
        
        // alert(JSON.stringify(config))
        return config;
    },
    error => {
        Promise.reject(error);
    }
);

// respone拦截器
service.interceptors.response.use(
    response => {
        // 这里处理响应数据, 比如保存响应头中的  authorization
        const { config: { method }, data } = response;

        // 处理状态码(非浏览器自带状态码)
        checkStatus(data);

        // 操作成功
        if (data.status === 0) {
            return data.data;
        }

    },
    error => {
        let errortext = error + '';
        // alert(JSON.stringify(error))
        Alert.alert('服务器出错，请稍后重试');
        return Promise.reject({
            success: false,
            statusCode: errortext.substr(-3),
            message: errortext
        });
    }
);

export default service;