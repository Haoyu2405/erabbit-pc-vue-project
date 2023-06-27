// 提供复用逻辑的函数（钩子）

import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'
/**
 * 
 * @param {*} target 
 * @param {*} apiFn 
 * @returns 
 */

export const useLazyData = (target, apiFn) => {
  const result = ref(null)
  // stop: 停止监听
  const { stop } = useIntersectionObserver(
    // 监听的目标元素
    target,
    ([{ isIntersecting }], observerElement) => {
      // 判断是否进入可视区
      if (isIntersecting) {
        // 停止监听
        stop()
        // 请求数据
        apiFn().then(res => {
          result.value = res.result
        })
      }
    }
  )
  return result
}
