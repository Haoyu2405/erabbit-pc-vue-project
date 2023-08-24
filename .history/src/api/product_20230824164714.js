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

/**
 * 获取热销榜数据
 * @param {String} id 商品id
 * @param {Integer} limit 商品数量
 * @param {Integer} type 热销类型，1为热销榜，2为周榜，3为总榜, 默认为1
 * @returns
 */
export const findGoodsHot = ({ id, limit = 3, type = 1 }) => {
  return request('/goods/hot', 'get', { id, limit, type })
}

/**
 * 获取商品的评价统计信息
 * @param {String} id - 商品ID
 */
export const findGoodsCommentInfo = id => {
  return request(`/goods/${id}/evaluate`, 'get')
  // axios遇上http/https开头的字符串，会自动忽略baseURL
  // return request('https://mock.boxuegu.com/mock/1175/goods/${id}/evaluate', 'get')
}

/**
 * 获取商品的评价列表
 * @param {String} id - 商品ID
 */
export const findGoodsCommentList = (id, params => {
  return request(`/goods/${id}/evaluate`, 'get')
  // axios遇上http/https开头的字符串，会自动忽略baseURL
  // return request('https://mock.boxuegu.com/mock/1175/goods/${id}/evaluate', 'get')
}
