import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const Home=()=> import('../pages/home/Home');
const Category=()=> import('../pages/category/Category');
const Cart=()=> import('../pages/cart/Cart');
const Profile=()=> import('../pages/profile/Profile');

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    name: 'home',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  routes
})

export default router
