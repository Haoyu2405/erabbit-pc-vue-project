// 实现防抖
export function debounce(fn, delay) {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

// 计算求和
export function sum(arr) {
  return arr.reduce((prev, curr) => {
    return prev + curr
  }, 0)
}
