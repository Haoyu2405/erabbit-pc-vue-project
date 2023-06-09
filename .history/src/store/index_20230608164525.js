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
  plugins: [
    createPersistedState({
      // 本地存储的key
      key: 'erabbit-pc-vue-state',
      //  需要存储的模块
      paths: ['user', 'cart']
    })
  ]
})
