// import { createStore } from 'vuex'

// export default createStore({
//   // vue2.0 创建仓库 new Vuex.Store({})
//   // vue3.0 创建仓库 createStore({})
//   state: {
//     username: 'xl'
//   },
//   getters: {
//     newName (state) {
//       return state.username + '!!!'
//     }
//   },
//   mutations: {
//     updateName1 (state) {
//       state.username = 'hy'
//     },
//     updateName2 (state) {
//       state.username = 'xl'
//     }
//   },
//   actions: {
//     updateName (ctx) {
//       setTimeout(() => {
//         ctx.commit('updateName2')
//       }, 1000)
//     }
//   },
//   modules: {}
// })

import { createStore } from 'vuex'

const moduleA = {
  // 
  state: () => {
    return {
      username: '模块A'
    }
  },
  getters: {
    changeName (state) {
      return state.username + 'AAAAA'
    }
  }
}
