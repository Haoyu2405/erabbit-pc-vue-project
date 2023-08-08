import request from '@/utils/request'

/**
 * 
 * @param {*} id 
 * @returns 
 */
export const findGoods = (id) => {
  return request('/goods','get',{id})
}