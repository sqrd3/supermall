export default {

    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },

    incrementCount(state, payload) {

      state.counter += payload.count
    },
    addStudent(state, stu) {
      state.students.push(stu)
    },
    addInformation(state) {

      Vue.set(state.info, 'address', 'london')

    },
    Update(state) {

      state.info.name = 'name'


    }
  }