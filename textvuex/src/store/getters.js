export default {

    powerCounter(state) {
      return state.counter * state.counter
    },
    more(state) {
      return state.students.filter(s => s.age >= 11)
    },
    morelength(state, getters) {

      return getters.more.length
    },
    moreage(state) {

      return age => state.students.filter(s => s.age > age)
    }
  }