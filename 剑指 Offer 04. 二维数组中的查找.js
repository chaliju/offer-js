//剑指 Offer 04. 二维数组中的查找
//在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。


/**
 * 1.从右上角开始遍历
 * 2.当前元素小于目标元素，进入下一行
 * 3.当前元素大于目标元素，向前一列查找
 */


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var findNumberIn2DArray = function (matrix, target) {
  const lenX = matrix.length // 行数
  // 判断数组不存在的情况以及越界的情况 返回false
  if (lenX === 0) {
    return false;
  }
  //定位到数组的右上角
  const lenY = matrix[0].length
  if (lenY === 0) {
    return false
  }
  let i = 0,
    j = lenY - 1;
  // 可以发现题目给出的数组具有从右上角看，往左的数字都比当前的小，往下的数字都比当前的大 所以可按照此规律循环比对查找到目标数字
  while (i < lenX && j >= 0) {
    if (matrix[i][j] === target) {
      return true
    } else if (matrix[i][j] < target) {
      i++
    } else {
      j--
    }
  }
  return false
}