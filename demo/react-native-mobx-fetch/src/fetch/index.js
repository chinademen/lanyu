import axios from "axios"

// axios公共配置
const service = axios.create({
    // 配置默认域名
    baseURL: 'https://frontapi.yuleyun.app',
    // 配置超时
    timeout: 15000,     
    // 这里可以配置终止axios请求的开关, 但是saga的takeLatest可以代替, 这里就不需要配置了    
});

// 处理状态码(这里处理的是项目约定的状态码, 非浏览器自带的状态码)
function checkStatus(data) {
    const status = data.status;
    // 401用户没有权限
    if (status === 401) {
        // 这里做清除storage等操作
        // 返回登录界面
        // return history.replace('/login');
    }
    // 其他状态码操作
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
        // 添加公共参数
        let dataList = config.data;
        dataList.devicetype = 1;
        dataList.deviceno = 1;
        
        // 加密
        
        config.data = dataList;
        
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

        // 统一post提交的提示信息
        if (data.status === 0) {
            // alert(JSON.stringify(data))
            return data;
        }

    },
    error => {
        let errortext = error + '';
        // alert(JSON.stringify(error))
        return Promise.reject({
            success: false,
            statusCode: errortext.substr(-3),
            message: errortext
        });
    }
);

export default service;