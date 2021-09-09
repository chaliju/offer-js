// 剑指 Offer 03. 数组中重复的数字
/**
 * 找出数组中重复的数字。
 * 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。
 * 数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。
 * 请找出数组中任意一个重复的数字。
 */

/**
 * 先排序再查找：排序之后有重复的肯定是挨着的，然后前后两两比较，如果有重复的直接返回
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  //对拿到的数组从小到大进行排序
  nums.sort();
  let n = nums.length
  for (let i = 1; i < n; i++) {
    if (nums[i] == nums[i - 1])
      return nums[i];
  }
  return -1
};