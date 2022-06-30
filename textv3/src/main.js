import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
// 所有的组件都继承自Vue雷都原型
// Vue.prototype.name='aaa'
// 后续所有组件都有name属性
new Vue({
  // 将router对象传入到Vue实例中
  router,
  render: h => h(App)//render首先渲染App.vue
}).$mount('#app')
// route：代表当前路由信息对象，可以获取到当前路由的信息参数
//  router：代表路由实例的对象，包含了路由的跳转方法，钩子函数等