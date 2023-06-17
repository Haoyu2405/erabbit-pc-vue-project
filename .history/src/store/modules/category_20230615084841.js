import { topCategory } from '@/api/constants'
import { findAllCategory } from '@/api/category'

// 分类模块
export default {
  namespaced: true,
  state () {
    return {
      // 分类信息集合,依赖toCategory重新设置，保证初始化就要数据，不至于白屏
      list: topCategory.map(item => ({ name: item }))
    }
  },
  // 修改分类函数
  mutations: {
    // payload所有的分类集合
    setList (state, payload) {
      state.list = payload
    },
    // 定义show和hide函数，控制 
  },
  // 获取分类函数
  actions: {
    /**
     * { context}
     * By using { commit } as the function parameter,
     * it allows you to access the commit method directly within the function without explicitly referencing context.commit.
     * In other words, it's a shorthand syntax that extracts the commit method from the context object and assigns it to a variable named commit.
     */
    async getList ({ commit }) {
      // 获取分类数据
      const data = await findAllCategory()
      // 给每个分类加上控制二级分类显示隐藏的数据
      data.result.forEach(top => {
        top.open = false
        console.log(data.result);
      })
      // 修改分类数据
      commit('setList', data.result)
    }
  }
}
