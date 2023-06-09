import { createStore } from 'vuex'
import xx from 'vuex-persistedstate'

// 三个模块
import cart from './modules/cart'
import category from './modules/category'
import user from './modules/user'

export default createStore({
  modules: {
    cart,
    user,
    category
  }
})
