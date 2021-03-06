import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入第三方包：ElementUI
import "element-ui/lib/theme-chalk/index.css";
import ElementUI from "element-ui";
// 引入ve-admin样式
import "@/assets/ve-admin/ve-admin.scss";
// 引入全局基础设置js
import Base from './Base.js';

Vue.use(Base);
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')