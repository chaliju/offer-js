//剑指 Offer 13. 机器人的运动范围

//地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。
//一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），
//也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，
// /因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？


/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
    //方向数组模拟四个方向移动
    let dx = [1, -1, 0, 0];
    let dy = [0, 0, -1, 1];
    let sum = 0;
    let set = new Set();
    dfs(0, 0)
    function dfs(x, y) {
        if (set.has(`{${x},${y}}`)) {
            return
        }
        if (x >= 0 && x < m && y >= 0 && y < n && sumOfNumber(x) + sumOfNumber(y) <= k) {
            //如果满足条件 那么就走下一步
            sum++;
            set.add(`{${x},${y}}`)
            for (let i = 0; i < 4; i++) {
                dfs(x + dx[i], y + dy[i])
            }
        }
    }
    return sum
    function sumOfNumber(num) {
        num += ''
        let sum = 0;
        for (let i = 0; i < num.length; i++) {
            sum += Number(num[i])
        }
        return sum
    }
};