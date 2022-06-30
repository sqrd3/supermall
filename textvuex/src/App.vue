<template>
  <div id="app">

<h2>-----modules中的内容</h2>
<!-- 获取模块内容 -->
<h2>{{$store.state.a.name}}</h2>
<button @click="updatename">修改名字</button>
<!-- 获取模块内的getters -->
<h2>{{$store.getters.fullname}}</h2>
<h2>{{$store.getters.fullname2}}</h2>
<h2>{{$store.getters.fullname3}}</h2>
<button @click="aaupdate">异步修改</button>



<h2>---------infor对象的内容是否为响应式--------</h2>
<h2>{{$store.state.info}}</h2>
<button @click="addInformation">增加信息</button>
<button @click="Update">修改信息</button>

    <h2>{{ message }}</h2>
    <!-- 获取共享状态 -->
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="substraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>
    <hello-vuex></hello-vuex>
    <h2>{{$store.getters.powerCounter}}</h2>
    <!-- 获取vuex内的getters -->
    <h2>{{$store.getters.more}}</h2>
    <h2>-------------</h2>
    <!-- 外部传入age -->
    <h2>{{$store.getters.moreage(18)}}</h2>
    <h2>-------------</h2>
    <h2>{{more}}</h2>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex.vue'
export default {
  name: "App",
  data() {
    return {
      message: "App组件",
      
    };
  },
  components:{
    HelloVuex
  },
  methods:{
    addition(){
      // 在vuex内定义好了的increment
      this.$store.commit('increment')
    },
    substraction(){
      this.$store.commit('decrement')
      
    },
    addCount(count){
      // 写法1
      // 此处count是一个参量
      // this.$store.commit('incrementCount',count)
      // 写法2
      this.$store.commit({
        type:'incrementCount',
        // 此处count是一个对象
        count
      })

    },
    addStudent(){
      const stu={id:114,name:'fff',age:22}
      this.$store.commit('addStudent',stu)
    },
    addInformation(){
      this.$store.commit('addInformation')
    },
    Update(){
      // 异步操作,并且传递参数

      // 方法1**
      // this.$store.dispatch('aUpdate',{
      //   message:'携带信息',
      //   success:()=>{
      //     console.log('修改成功')
      //   }
      // })

      this.$store.dispatch('aUpdate','携带信息').then(res=>{
       console.log('里面完成了提交'),
        console.log(res)
      })
    },
    updatename(){
      // 获取模块内mutation
      this.$store.commit('updatename','李四')
    },
    aaupdate(){
      // 获取模块内的异步操作
      this.$store.dispatch('aUpdateName')
    }
  },
  computed:{
    more(){
      return this.$store.state.students.filter(s=>s.age>=10)
    }
  }
};
</script>
<style>
</style>
 