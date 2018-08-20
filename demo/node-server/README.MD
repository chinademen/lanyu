### main.js
    入口文件, 配置express, 日志, session, redis, post数据兼容, 路由入口等

### /router/index
    路由主文件

### /api
    路由分发的所有请求回调

### /util 工具
    checkout.js     校验模块
    util.js
        logout      判断session是否过期
        tablePaging 分页

### /doc 文档资源
    *.sql       项目相关所有表

### /mysql/index
    mysql请求封装

### /redis/index
    redis请求封装
