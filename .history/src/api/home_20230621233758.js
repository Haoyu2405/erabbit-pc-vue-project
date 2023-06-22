// 提供首页相关api函数
import request from '@/utils/request'


export const findBrand = (limit = 6) => {
  return request('/home/brand', 'get', { limit })
}