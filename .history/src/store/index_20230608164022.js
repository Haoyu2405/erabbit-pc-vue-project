import { createStore } from 'vuex'
im

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
