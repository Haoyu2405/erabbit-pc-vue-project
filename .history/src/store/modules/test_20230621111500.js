function countPairs (arr, target) {
  let count = 0 // 计数器，记录符合条件的对数

  // 创建一个对象用于记录每个数字出现的次数
  const numCount = {}

  // 遍历数组，统计每个数字出现的次数
  for (const num of arr) {
    numCount[num] = (numCount[num] || 0) + 1
  }

  // 遍历数组，寻找符合条件的数字对
  for (const num of arr) {
    const complement = target - num // 计算补数

    // 判断补数是否存在且不等于当前数字
    if (numCount[complement] && complement !== num) {
      count += 1 // 符合条件的数字对数加1
      numCount[num] -= 1 // 将当前数字的出现次数减1，避免重复使用
      numCount[complement] -= 1 // 将补数的出现次数减1，避免重复使用
    }
  }

  return count // 返回符合条件的数字对数
}

const arr = [1, 1,2, 3, 4, 4]
const target = 5

console.log(countPairs(arr, target)) // 输出：2
