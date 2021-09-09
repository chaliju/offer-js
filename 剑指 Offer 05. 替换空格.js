//请实现一个函数，把字符串 s 中的每个空格替换成"%20"。


/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  // 解法一：
  return s.replace(/\s/g, '%20')

  //split分割  join 替换
  return s.split(' ').join('%20');
};