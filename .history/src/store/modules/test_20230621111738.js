// 实现计算数组中有几对数字相加等于目标值的代码
// 例如：[1, 2, 3, 4, 5] 目标值为 5
// 则有 1 + 4 = 5 2 + 3 = 5
// 两对数字相加等于目标值
// 实现代码

function test(arr, target) {
  // todo
  let arr2 = arr.map((item) => target - item);
  let len = arr.length;
  let count = 0;
  for (let i = 0; i < len; i++) {
    if (arr2.includes(arr[i])) {
      count++;
    }
  }
  return count / 2;
}

console.log(test([1, 2, 3, 4, 5], 5));

// 1. 请写出输出内容，并解释为什么
// 1. 请写出输出内容，并解释为什么
// var a = 1;
// function fn(a) {
//   console.log(a); // 2
//   var a = 2;
//   console.log(a); // 2
//   function a() {}
//   console.log(a); // 2
// }
// fn(a);

// 2. 请写出输出内容，并解释为什么
// var a = 1;
// function fn() {
//   console.log(a); // undefined
//   var a = 2;
//   console.log(a); // 2
// }
// fn();

// 3. 请写出输出内容，并解释为什么
// var a = 1;
// function fn() {
//   console.log(a); // function a() {}
//   function a() {}
//   var a = 2;
//   console.log(a); // 2
// }
// fn();

// 4. 请写出输出内容，并解释为什么
// var a = 1;
// function fn() {
//   console.log(a); // function a() {}
//   function a() {}
//   var a = 2;
//   console.log(a); // 2
//   function a() {}
// }
// fn();

// 5. 请写出输出内容，并解释为什么
// var a = 1;
// function fn() {
//   console.log(a); // undefined
//   var
