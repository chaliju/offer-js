// 剑指 Offer 09. 用两个栈实现队列
// 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )


/**
 * 队列是先入先出，栈是后入先出。一个为入队栈，一个为出队栈，各自负责入队和出队。
 * 
 * 入队操作：
 *      直接压入入队栈即可，即将元素放入 inStack 中。
 * 
 * 出队操作：
 *      outStack 不为空：弹出元素
 *      outStack 为空：将 inStack 元素依次弹出，放入到 outStack中（在数据转移过程中，顺序已经从后入先出变成了先入先出）
 * push(队尾压入)和pop(队头弹出)
 */



var CQueue = function () {
  this.inStack = [];
  this.outStack = [];
};

CQueue.prototype.appendTail = function (value) {
  this.inStack.push(value);
};

CQueue.prototype.deleteHead = function () {
  // outStack非空则可以直接出栈，栈顶元素就是队首元素
  if (this.outStack.length) {
    return this.outStack.pop()
  } else {
    while (this.inStack.length) {
      this.outStack.push(this.inStack.pop())
    }
    if (!this.outStack.length) {
      return -1
    } else {
      return this.outStack.pop()
    }
  }
};