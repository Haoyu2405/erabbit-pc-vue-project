import { createStore } from 'vuex'

export default createStore({
  // vue2.0 创建仓库 new Vuex.Store({})
  // vue3.0 创建仓库 createStore({})
  state: {
    username: 'xl'
  },
  getters: {
    newName (state) {
      return state.username + '!!!'
    }
  },
  mutations: {
    updateName (state) {
      state.username = 'hy'
    }
  },
  actions: {
    up
  },
  modules: {}
})
