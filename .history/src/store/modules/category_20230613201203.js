// 分类模块
export default {
  namespaced: true,
  state () {
    return {
      // 分类信息集合,依赖toCategory重新设置
      list: []
    }
  }
}