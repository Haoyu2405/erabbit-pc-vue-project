import request from '@/utils/request'

/**
 * 
 * @param {String} id  
 * @returns 
 */
export const findGoods = (id) => {
  return request('/goods','get',{id})
}