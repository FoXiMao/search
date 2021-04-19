import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/css/reset.css'
// import '../public/static/pio.css'
import Api from './api'
import Storage from './storage'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.prototype.$storage = Storage
Vue.prototype.$api = Api
//全局路由守卫
router.beforeEach((to,from,next) => {
//  router.beforeEach((to) => {
  const title = to.meta.title || '聚合搜索'
  //是否需要登录才能进入
  // const checkLogin = to.meta.checkLogin || false
  document.title = title
  Vue.prototype.$title = title
  // const token = Storage.User.getToken()
  // if(checkLogin && storage.User.getToken() === ''){
  //   const redirect = to.path
  //   next('/login?redirect='+redirect)
  // }else{
  //   if((to.path === '/login' || to.path === '/register') && token != ''){
  //     // console.log("login")
  //     const back = from.path || '/'
  //     next(back)
  //   }
    next()
  // }
  
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
