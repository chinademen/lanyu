//通用样式
import 'src/assets/styles/common.scss'

//mock
//if(isDevMode){
    console.log('当前是开发模式，使用mockjs')
    require('./mock.js')
//}

//工具类
require('./util.js');

import Vue from 'vue';

//axios拦截器
import './api/axios.js'

import App from './App.vue'

new Vue({
    render: h => h(App)
}).$mount('#root')





