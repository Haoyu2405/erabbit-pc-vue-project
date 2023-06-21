// 实现计算数组中有几对数字相加等于目标值的代码
// 例如：[1, 2, 3, 4, 5] 目标值为 5
// 则有 1 + 4 = 5 2 + 3 = 5
// 两对数字相加等于目标值
// 实现代码

function test (arr, target) {
  // todo
  const arr2 = arr.map((item) => target - item);
  const len = arr.length;
  let count = 0;
  for (let i = 0; i < len; i++) {
    if (arr2.includes(arr[i])) {
      count++;
    }
  }
  return count / 2;
}

console.log(test([1, 2, 3, 4, 5], 5));

// arr = 
