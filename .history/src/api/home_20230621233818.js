// 提供首页相关api函数
import request from '@/utils/request'

/**
 * 
 * @param {Inte} limit 
 * @returns 
 */
export const findBrand = (limit = 6) => {
  return request('/home/brand', 'get', { limit })
}