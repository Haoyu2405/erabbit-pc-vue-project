import request from '@/utils/request'

/**
 * 获取商品详情
 * @param {String} id 商品id
 * @returns
 */
export const findGoods = id => {
  return request('/goods', 'get', { id })
}

export const findRelevantGoods = ({ id, limit = 16 }) => {
  
}
