import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入1
// import HomeView from '../views/HomeView.vue'
// import User from '../components/User.vue'
// 路由懒加载
// 导入2
const HomeView=()=>import('../views/HomeView')
const AboutView=()=>import('../views/AboutView')
const User=()=>import('../components/User')
const HomeNews=()=>import('../components/HomeNews')
const HomeMessage=()=>import('../components/HomeMessage')
const Profile=()=>import('../components/Profile')

// 通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

const routes = [
// 配置映射关系
  {
    path: '/',
    name: 'home',
    meta:{
      title:'首页'
    },
    component: HomeView,
    children:[
      {
        path:'news',
        component:HomeNews,
        meta:{
          title:'新闻'
        },
      },
      {
        path:'message',
        component:HomeMessage,
        meta:{
          title:'信息'
        },
      },
      
    ]
  },
  
  // 动态路由
  {
    path:'/user/:userID',
    component:User,
    meta:{
      title:'用户'
    },
  },
  {
    path: '/about',
    name: 'about',
    meta:{
      title:'关于'
    },
    // 路由独享组件
    beforeEnter:((to,from,next)=>{
      console.log('++++++');
      next();
    }),
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/profile',
    component:Profile,
    meta:{
      title:'档案'
    },
  }
]
// 创建BueRouter对象

const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  routes 
})
// router导出

// 全局导航守卫  


// 前置钩子
// 内部参数是一个函数，必须调next函数
// 从from跳到to
// router.beforeEach((to,from,next)=>{
//   // 实现页面跳转时，页面标题也发生改变
// document.title=to.matched[0].meta.title,
//   next()
// })

// 后置钩子，路由跳转完进行回调
router.afterEach((to,from)=>{

})
export default router
