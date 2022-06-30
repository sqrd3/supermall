// store目录组织
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'
Vue.use(Vuex)

const state={
  counter: 0,
  students: [
    { id: 110, name: 'aaa', age: 17 },
    { id: 111, name: 'bbb', age: 18 },
    { id: 112, name: 'ccc', age: 19 }
  ],
  info:
    { id: 'sda', name: '234', age: 365 }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    a: moduleA
  }
})

