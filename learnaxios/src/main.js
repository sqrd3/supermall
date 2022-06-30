import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { request } from './network/request'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


request({
  url:'/home/multidata'

}).then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
})

// axios({
//   url:'http://123.207.32.32:8000/home/multidata',
//   // method:'post'
// }).then(res=>{
//   console.log('aaa')
//   console.log(res)
// })
// // 基本使用
// axios({
//   url:'http://123.207.32.32:8000/home/data?type=sell&page=3',


//   // 也可以写为
//   // 专门针对get请求的参数拼接
//   // url:'http://123.207.32.32:8000/home/data',
//   // params:{
//   //   type:'sell',
//   //   page:3
//   // }
// }).then(res=>{
//   console.log(res)
// })


// 使用全局的axios和对应的配置进行网络请求
// axios发送并发请求
// 提取全局配置，利用axios全局配置
// axios.defaults.baseURL='http://123.207.32.32:8000'
// axios.defaults.timeout=5000
// axios.all([axios({
//   url:'/home/multidata',
// }),axios({
//   url:'/home/data?type=sell&page=3',
// })]).then(results=>{
//   console.log(results)
// })

// 创建对应的axios实例
// const instancel=axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:5000
// })
// instancel({
//   url:'/home/multidata'
// }).then(res=>{
//   console.log(res);
// })
// instancel({
//   url:'/home/data?type=sell&page=3'
// }).catch.then(res=>{
//   console.log(res);
// })

// 封装一个request模块
// request({
//   url:'/home/multidata'
// },res=>{
//   console.log(res)
// },err=>{
//    console.log(err)
// }
// )
// request({
//   baseConfig:{

//   },
//   success:function(res){

//   },
//   failure:function(err){

//   }
// })
