// 提供复用逻辑的函数（钩子）

export const useLazyData = (target, apiFn) => {
  const result = ref(null)
  // stop: 停止监听
  const {stop}