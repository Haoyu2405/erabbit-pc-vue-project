import request from '@/utils/request'

/**
 * 获取商品详情
 * @param {String} id 商品id
 * @returns
 */
export const findGoods = id => {
  return request('/goods', 'get', { id })
}

/**
 * 
 * @param {} param0 
 * @returns 
 */
export const findRelevantGoods = ({ id, limit = 16 }) => {
  return request('/goods/relevant', 'get', { id, limit })
}
