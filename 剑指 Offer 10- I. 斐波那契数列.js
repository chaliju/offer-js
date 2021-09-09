// 写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。斐波那契数列的定义如下：

/**
 * @param {number} n
 * @return {number}
 */

// 解法一
// 直接递归（爆栈，超时）
var fib = function (n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}


// 解法二
// 动态规划
/**
 * 状态定义： 设 dp 为一维数组，其中 dp[i] 的值代表 斐波那契数列第 i 个数字 。
 * 转移方程： dp[i + 1] = dp[i] + dp[i - 1] ，即对应数列定义 f(n + 1) = f(n) + f(n - 1)；
 * 初始状态： dp[0] = 0, dp[1] = 1 ，即初始化前两个数字；
 * 返回值： dp[n] ，即斐波那契数列的第 n 个数字。
 */

var fib = function (n) {
  //判断越界
  if (n == 0) {
    return 0;
  }
  //初始化
  let fb = [];
  //初始化 斐波那契数列的0，1情况
  fb[0] = 0;
  fb[1] = 1;
  //从第二项开始 按照公式递归 并取模
  for (let i = 2; i <= n; i++) {
    fb[i] = (fb[i - 1] + fb[i - 2]) % 1000000007;
  }
  //返回值
  return fb[n];
}


// 解法三
// 动态规划 + 自底向下循环迭代
/**
 * 可以使用动态规划，将每次前两数之和存起来，便于下次直接使用，这样子，我们就把一个栈溢出的问题，变为了单纯的数学加法，大大减少了内存的压力。
 */

 var fib = function(n) {
  let n1 = 0, n2 = 1, sum
  for(let i=0; i<n; i++){
      sum = (n1 + n2) % 1000000007
      n1 = n2
      n2 = sum
  }
  return n1
};
