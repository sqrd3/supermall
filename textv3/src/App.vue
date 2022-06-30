<template>
  <div id="app">
    <nav>
      <!-- to属性  用于指定跳转路径 -->
      <!--active-class  修改默认名称  -->
      <router-link to="/" tag="button" active-class="active" >Home</router-link> |
      <router-link to="/about" >About</router-link>|

      <!-- 路由跳转方法2 -->
      <button @click="userclick">用户</button>
      <!-- 路由跳转方法一 -->
      <!-- <router-link :to="'user/'+userID">用户</router-link>| -->

    <!-- <router-link to="/profile">档案</router-link> -->
    <!-- <router-link :to="{path:'/profile',query:{name:'aaa',age:18}}">档案</router-link> -->

<!--路由跳转方法2 -->
    <button @click="profile">档案</button>

    </nav>
    <!-- 相当于一个占位的作用，之后组件渲染的位置 -->
    <!-- <router-view/> -->
    <keep-alive exclude="Profile">
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name:'App',
  data(){
    // 动态路由
    return{
      userID:'zhangsan'
    }
  },
  methods: {
    userclick(){
      // 通过代码跳转路由
      // push =>pushState
      // this.$router.push('/user/'+this.userID)
      // 或者用replace
      this.$router.replace('/user/'+this.userID)
    },
    // 路由跳转方法2并且添加query
    profile(){
      this.$router.push({
        path:'/profile',
        query:{
          name:'aaa',
          age:18
        }
      })
    }
  },
}
</script>
<style>
.active{
  color: blue;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
