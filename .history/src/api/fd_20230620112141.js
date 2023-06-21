// 实现防抖
function debounce(fn, delay) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);


// 求和计算
function sum(a, b) {
  return a + b;
}

