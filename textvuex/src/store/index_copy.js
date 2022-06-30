import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const moduleA={
  state:{
    name:'张三'
  },
  mutations:{
    updatename(state,payload){
      state.name=payload
    }
  },
  getters:{
    fullname(state){
      return state.name+'aaa'
    },
    fullname2(state,getters){
      return getters.fullname+'2222'
    },
    fullname3(state,getters,rootState){
      // rootState获取根state中的变量
      return getters.fullname2+rootState.counter
    }
  },
  actions:{
    // aUpdateName({state,commit,rootState})  获取context的内容 对象的解构
    aUpdateName(context){ 
      setTimeout(()=>{
        // context.rootGetters  获取根state内元素
      context.commit('updatename','王五')

      },1000)
    }
  } 

}
export default new Vuex.Store({
  state: {
    // 保存共享状态(变量)
    counter:0,
    students:[
      {id:110,name:'aaa',age:17},
      {id:111,name:'bbb',age:18},
      {id:112,name:'ccc',age:19}
    ],
    info:
      {id:'sda',name:'234',age:365}
  },
  getters: {
    // 类似于组件的计算属性
    powerCounter(state){
      return state.counter*state.counter
    },
    more(state){
      return state.students.filter(s=>s.age>=11)
    },
    morelength(state,getters){
      // 可以有getters本身为参数
      return getters.more.length
    },
    moreage(state){
      // 从外部传入一个age，选择age范围内的student
      // return function(age){
      //   return state.students.filter(s=>s.age>age)
      // }
      // 简写
      return age=> state.students.filter(s=>s.age>age)
    }
  },
  mutations: {
    // 方法,修改state内的变量要通过mutation，若有异步操作还需通过action
    // Vuex的store状态的更新唯一方式
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    // incrementCount(state,count){
    //   state.counter+=count
    // }
    incrementCount(state,payload){
      // 当传入的为一个对象时要这样用
      state.counter+=payload.count
    },
    addStudent(state,stu){
      state.students.push(stu)
    },
    addInformation(state){
      // 因为数据是响应式，此方法不会在页面显示
      // state.info['address']='london'
      // 此方法会
       Vue.set(state.info,'address','london')
      // 页面不响应
      // delete state.info.age
      // 页面响应
      // Vue.delete(state.info,'age')
    },
    Update(state){

         state.info.name='name'

      // 错误代码，不能在这里进行异步操作
      // setTimeout(()=>{
      //   state.info.name='name'
      // },1000)
    }
  },
  actions: {
    // 做一些异步操作
    // context上下文
    aUpdate(context,payload){
      // 写法1

      // setTimeout(()=>{
      //   context.commit('Update'),
      //   // 方法1**
      // // console.log(payload.message ),
      // // payload.success()
      // console.log(payload)
      // },1000)


      // 写法2
      return new Promise((resolve,reject)=>{
         setTimeout(()=>{
        context.commit('Update'),
      console.log(payload),
      resolve(11111)
      },1000)
      })
    }
  },
  modules: {
    // 划分模块，进行操作
    // a模块

    a:moduleA
  }
})

// 对象的解构
// const obj={
//   name:'qqq',
//   age:13,
//   height:123.2
// }
// const {name,age,height}=obj

// 获取obj内的内容，可调换顺序，不是按顺序赋值，而是按变量名赋值