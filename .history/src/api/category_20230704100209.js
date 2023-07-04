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
 * 获取 
 * @param {String} id -  
 * @returns 
 */
export const findTopCategory = (id) => {
  return request('/category', 'get', { id })
}
