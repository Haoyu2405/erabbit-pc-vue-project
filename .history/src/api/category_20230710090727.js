// 定义分类相关的api接口函数
import request from '@/utils/request'

/**
 * 获取所有分类（顶级，二级，对应的商品推荐数据）
 * @returns promise
 */

export const findAllCategory = () => {
  return request('/home/category/head', 'get')
}

/**
 * 获取顶级类目信息（children属性就是各个子分类）
 * @param {String} id - 顶级类目id
 * @returns promise
 */
export const findTopCategory = id => {
  return request('/category', 'get', { id })
}

/**
 * 获取二级类目的筛选条件
 * @param {String} id - 二级类目id
 * @returns promise
 */

export const findSubCategoryFilter = id => {
  return request('/category/sub/filter', 'get', { id })
}

/**
 * 获取分类xoa筛选条件
 * @param {String} id - 二级类目id
 * @returns promise
 */

export const findSubCategoryGoods = params => {
  return request('/category/goods/temporary', 'post', params)
}
