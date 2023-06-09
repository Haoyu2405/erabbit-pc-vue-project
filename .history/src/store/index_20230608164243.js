import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

// 三个模块
import cart from './modules/cart'
import category from './modules/category'
import user from './modules/user'

export default createStore({
  modules: {
    cart,
    user,
    category
  },
  // 导入插件
  plugins:[
    createPersistedState({
      key:'erabbit-pc-vue-state',
      paths:['user',;cart]
    })
  ]
})
