// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
// 输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。
// 例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。  
/**
 * @param {number[]} numbers
 * @return {number}
 */


// 解法一
// 暴力解法：遍历数组，判断数组元素是否递增，如果遍历完一直是递增则返回首个元素，如果不是则返回首个不是递增的元素，也就是numbers[i]<numbers[i-1]不成立，返回numbers[i]
var minArray = function (numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > numbers[i + 1]) return numbers[i + 1]
  }
  return numbers[0]
};


// 解法二
// 二分查找，找到第一个小于左边的数的数

var minArray = function (numbers) {
  let low = 0;
  let high = numbers.length - 1;
  while (low < high) {
    const pivot = low + Math.floor((high - low) / 2);
    if (numbers[pivot] < numbers[high]) {
      high = pivot;
    } else if (numbers[pivot] > numbers[high]) {
      low = pivot + 1;
    } else {
      high -= 1;
    }
  }
  return numbers[low];
};