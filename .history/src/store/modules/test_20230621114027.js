// 实现计算数组中有几对数字相加等于目标值的代码(不能重复使用相同数字)
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

// arr = [1, 2, 3, 4, 5] target = 5
// arr = [1, 2, 3, 4, 5] target = 10
// arr2 = [9, ]
// arr2 = [4, 3, 2, 1, 0] target = 5
// len = 5
// count = 0
// i = 0
// arr2.includes(arr[0]) => arr2.includes(1) => false
