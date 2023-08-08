import request from '@/utils/request'

/**
 * 
 * @param {String} i d 
 * @returns 
 */
export const findGoods = (id) => {
  return request('/goods','get',{id})
}