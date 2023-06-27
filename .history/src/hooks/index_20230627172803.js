// 提供复用逻辑的函数（钩子）

import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'
/**
 * 数据懒加载函数
 * @param {Element} target - Dom对象
 * @param {Function} apiFn - Api函数
 * @returns result - 返回请求的数据
 */

export const useLazyData = apiFn => {
  const target = ref(null)
  const result = ref([])
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
        apiFn().then(data => {
          result.value = data.result
        })
      }
    },
    {
      th
    }
  )
  return { result, target }
}
