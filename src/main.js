import Vue from 'vue'
import App from './App.vue'

// 三级联动组件（全局组件）
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name, TypeNav)

// 轮播图组件（全局组件）
import CarouseIndex from '@/components/Carousel'
Vue.component(CarouseIndex.name, CarouseIndex)

Vue.config.productionTip = false // 关闭提示, 默认为true

// 引入路由
import router from '@/router'

// 引入仓库
import store from '@/store'


// 引入element-ui
import ElementUI from 'element-ui';
// 引入element-ui全部样式
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入mockServe.js
import '@/mock/mockServe'

// 引入swiper样式
import "swiper/css/swiper.css"

new Vue({
  render: h => h(App),

  // 注册路由
  router,

  // 注册仓库，组件实例对象中，$store属性，可以获取仓库
  store
  
}).$mount('#app')
