/*

给定一个包含了一些 0 和 1 的非空二维数组 grid 。

一个 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在水平或者竖直方向上相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。

找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为 0 。)

 

示例 1:

[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
对于上面这个给定矩阵应返回 6。注意答案不应该是 11 ，因为岛屿只能包含水平或垂直的四个方向的 1 。

示例 2:

[[0,0,0,0,0,0,0,0]]
对于上面这个给定的矩阵, 返回 0。

解题思路：
- 为了解决已经遍历的点重复计算 会把已经计算过的点变成状态2
- 在二位数组中进行遍历的同时，如果找到一个点为1，则对该点进行顺序为上左下右的判定
- 如果该点为1则将该点输入到零时数组中
- 计算完毕后进行大小比较

注意: 给定的矩阵grid 的长度和宽度都不超过 50。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/max-area-of-island
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/ 

/**
 * @param {number[][]} grid
 * @return {number}
 */

 
 var a=[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]];

 var maxAreaOfIsland = function(grid) {
 	let result=0;
 	const xlen=grid[0].length;
 	const ylen=grid.length;
 	const DFS=function(value,x,y){
 		if(grid[x]==undefined||grid[x][y]==undefined){
 			return ;
 		}
 		const target=grid[x][y];
 		if(target==1){
 			value.push([x,y]);
 			grid[x][y]=2;
 			// 上
 			DFS(value,x-1,y);
            // 左
            DFS(value,x,y-1);
            // 下
            DFS(value,x+1,y);
            // 右
            DFS(value,x,y+1);

        }
    };
    grid.forEach((xItem,xIndex)=>{
    	xItem.forEach((yItem,yIndex)=>{
    		let temp=[];
    		DFS(temp,xIndex,yIndex);
    		result=Math.max(temp.length,result);
    	}) 		
    });

    return result;
};

maxAreaOfIsland(a);