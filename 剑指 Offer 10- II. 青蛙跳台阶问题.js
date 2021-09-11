//一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
//答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
/**
 * @param {number} n
 * @return {number}
 */

// 解法一：
var numWays = function (n) {
  if (n < 1) {
    return 1
  }
  if (n <= 2) {
    return n
  }
  let arr = [0, 1, 2];
  let i = 3;
  while (arr.length <= n) {
    arr[i] = (arr[i - 1] % 1000000007 + arr[i - 2] % 1000000007) % 1000000007
    i++;
  }
  return arr[n]
};


// 解法二
/**
 * 非递归
 * 时间复杂度O(n), 空间复杂度O(1)
 */
function fn2(n) {
  let sum = 0,
    a = 1,
    b = 2
  if (n < 1) return 1
  if (n === 1) return 1
  if (n === 2) return 2
  for (let i = 3; i <= n; i++) {
    sum = (a + b) % 1000000007
    a = b
    b = sum
  }
  return sum
}