<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h1>This is an home page</h1>
    <router-link to="/home/news">新闻</router-link>|
    <ul>
      <li>1</li>
      <li>2</li>
    </ul>
    <router-link to="/message">消息</router-link>
    

    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  // 组件被创建时回调
  created() {
    // document.title='首页'
  },
  // template被挂载到DOM上回调
  mounted() {
    
  },
  // 界面发生刷新时回调
  updated() {
    
  },
  // 销毁时回调
  destroyed() {
    
  },
  // 这2个组件只有该组件被保持了状态使用keep-alive，才有效
  activated() {
    
  },
  deactivated() {
    
  },
}
</script>
