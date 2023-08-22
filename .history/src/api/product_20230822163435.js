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
 * 获取相关推荐商品 / 猜你喜欢商品
 * @param {String} id 商品id,传入相关推荐，不传入为猜你喜欢
 * @param {Integer} limit 商品数量，默认16
 * @returns
 */
export const findRelevantGoods = ({ id, limit = 16 }) => {
  return request('/goods/relevant', 'get', { id, limit })
}

export const findGoodsHot = ()
