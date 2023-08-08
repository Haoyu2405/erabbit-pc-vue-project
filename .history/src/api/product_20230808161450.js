import request from '@/utils/request'

/**
 * 
 * @param {Str} id 
 * @returns 
 */
export const findGoods = (id) => {
  return request('/goods','get',{id})
}