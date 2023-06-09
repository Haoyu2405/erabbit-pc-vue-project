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
  // 子模块state建议写成函数
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

const moduleB = {
  // 带命名空间的模块
  namespaced: true,
  // 子模块state建议写成函数
  state: () => {
    return {
      username: '模块B'
    }
  },
  getters: {
    changeName (state) {
      return state.username + 'BBBBB'
    }
  },
  mutations: {
    // 修改名字的mutation
    update (state) {
      state.username = 'BBBB' + state.username
    }
  },
  actions: {
    update ({ commit }) {
      // 模拟异步请求
      setTimeout(() => {
        commit('update')
      }, 2000)
    }
  }
}

// 创建仓库并导出
export default createStore({
  state: {
    // 数据
    person: [
      {
        id: 1,
        name: 'tom',
        gender: '男'
      },
      {
        id: 2,
        name: 'lucy',
        gender: '女'
      },
      {
        id: 3,
        name: 'jack',
        gender: '男'
      }
    ]
  },
  mutations: {
    // 该数据函数
  },
  actions: {
    // 请求数据函数
  },
  modules: {
    // 分模块
    a: moduleA,
    b: moduleB
  },
  getters: {
    // vuex的计算属性
    boys: state => {
      return state.person.filter(p => p.gender === '男')
    }
  }
})

function * draw(cards){
  const c = [...cards]
  for (let i = c.length; i >0 ; i--) {
     const pIdx = Math.floor(Math.random() *i)
     []
  }
}
