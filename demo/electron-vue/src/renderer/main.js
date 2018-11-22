import Vue from 'vue'
import axios from 'axios'
import common from './common'

import App from './App'
import router from './router'
import store from './store'

import './index.less'
import '@/assets/icomoon/style.css'

import '@/mock';

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

// 注册自定义组件
common.forEach(component => {
    Vue.component(component.name, component);
});

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
