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
    updateName1 (state) {
      state.username = 'hy'
    },
    updateName2 (state) {
      state.username = 'xl'
    }
  },
  actions: {
    updateName (ctx){
      setTimeout(()=>{
ctx.commit('')
      },1000)
    }
  },
  modules: {}
})
