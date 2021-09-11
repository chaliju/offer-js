//剑指 Offer 12. 矩阵中的路径

//给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

//单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。


/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */



var exist = function (board, word) {
    const len = board.length;
    let dx = [0, 0, -1, 1]
    let dy = [-1, 1, 0, 0]
    const width = board[0].length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < width; j++) {
            //从i j开始
            if (dfs(i, j, 0)) {
                return true
            }
        }
    }

    function dfs(x, y, index) {
        //如果越界了 或者当前的字母不是位数的 那么就返回false
        if (x < 0 || x >= len || y < 0 || y >= width || board[x][y] !== word[index]) {
            return false
        }
        //如果全部都匹配 true 
        if (index === word.length - 1) {
            return true
        }
        let res = false
        board[x][y] = ""
        //上下左右各走一格
        for (let i = 0; i < 4; i++) {
            res = res || dfs(x + dy[i], y + dx[i], index + 1)
        }
        //恢复现场
        board[x][y] = word[index]
        return res
    }
    return false
};