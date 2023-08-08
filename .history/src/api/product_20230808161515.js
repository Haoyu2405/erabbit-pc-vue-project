import request from '@/utils/request'

/**
 * 
 * 获取商品 
 * @param {String} id 商品id 
 * @returns 
 */
export const findGoods = (id) => {
  return request('/goods','get',{id})
}