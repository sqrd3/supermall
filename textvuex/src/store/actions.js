export default {

    aUpdate(context, payload) {

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('Update'),
            console.log(payload),
            resolve(11111)
        }, 1000)
      })
    }
  }