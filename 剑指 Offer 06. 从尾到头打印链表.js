//剑指 Offer 06. 从尾到头打印链表

//输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  const arr = [];
  while (head !== null) {
    //unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
    arr.unshift(head.val)
    head = head.next
  }
  return arr
  // unshift 方法的复杂度可能有点高，而且不常见
};




// 解法二：递归
var reversePrint = function (head) {
  if (!head) return []
  let p = head
  let arr = reversePrint(head.next)
  arr.push(p.val)
  return arr
};