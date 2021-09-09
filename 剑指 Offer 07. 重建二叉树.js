//剑指 Offer 07. 重建二叉树
//输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

//这里主要需要明白一下前序遍历和中序遍历的一个关系

/**
 * 1. 前序的第一个元素是 是根元素
 * 2. 在中序遍历中找到这个元素  那么左边就是左树 右边就是右树  再对左和又分别递归
 */
 var buildTree = function (preorder, inorder) {
    if (preorder.length === 0) return null
    const rootValue = preorder[0]
    // findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。
    const index = inorder.findIndex((value) => {
        return value === rootValue
    })
    const root = new TreeNode(rootValue);
    root.left = buildTree(preorder.slice(1,index+1),inorder.slice(0,index));
    root.right = buildTree(preorder.slice(index+1),inorder.slice(index+1));
    return root
};


var buildTree = function(preorder, inorder) {
  //判断越界
      if(!preorder.length || !inorder.length){
          return null;
      }
      //前序遍历的时候 以第一个元素为根节点
      let root = preorder[0];
      //确定根节点 放入二叉树
      let node = new TreeNode(root);
      //确定根节点在中序遍历中的位置，以此来分割左右子树   i有两个含义，一个是根节点在中序遍历结果中的下标，另一个是当前左子树的节点个数
      let i = inorder.indexOf(root); // indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1
      //递归操作
      node.left = buildTree(preorder.slice(1,i+1),inorder.slice(0,i));
      node.right = buildTree(preorder.slice(i+1),inorder.slice(i+1));
      return node;
  };
 