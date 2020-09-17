/*
你打算利用空闲时间来做兼职工作赚些零花钱。

这里有 n 份兼职工作，每份工作预计从 startTime[i] 开始到 endTime[i] 结束，报酬为 profit[i]。

给你一份兼职工作表，包含开始时间 startTime，结束时间 endTime 和预计报酬 profit 三个数组，请你计算并返回可以获得的最大报酬。

注意，时间上出现重叠的 2 份工作不能同时进行。

如果你选择的工作在时间 X 结束，那么你可以立刻进行在时间 X 开始的下一份工作。

示例 1：

输入：startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]
输出：120
解释：
我们选出第 1 份和第 4 份工作， 
时间范围是 [1-3]+[3-6]，共获得报酬 120 = 50 + 70。
示例 2：
输入：startTime = [1,2,3,4,6], endTime = [3,5,10,6,9], profit = [20,20,100,70,60]
输出：150
解释：
我们选择第 1，4，5 份工作。 
共获得报酬 150 = 20 + 70 + 60。
示例 3：
输入：startTime = [1,1,1], endTime = [2,3,4], profit = [5,6,4]
输出：6
 
解题思路

- 先将数据进行组合并以结束时间作为依据排序
- 从时间早到时间晚遍历，区分两种情况 
	- 如果是选该工作 计算该时间段工作段报酬以及上一个不重合时间段的报酬
	- 如果是不选该工作 贼直接计算上一个相邻时间段工作的报酬
	- 最后比较选该工作 与 不选该工作的报酬
	- 比较取的最大值并缓存到内存中
- 最后可以得到所有节点的最大报酬值与最小报酬值
- 选择最大的那个数值

https://www.bilibili.com/video/BV18x411V7fm?from=search&seid=396257549939904616

提示：

1 <= startTime.length == endTime.length == profit.length <= 5 * 10^4
1 <= startTime[i] < endTime[i] <= 10^9
1 <= profit[i] <= 10^4

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximum-profit-in-job-scheduling
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/ 

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
 var jobScheduling = function(startTime, endTime, profit) {
 	let resultMap={};
 	let profitArr=startTime.map((item,index)=>[startTime[index],endTime[index],profit[index]]).sort((x,y)=>x[1]-y[1]);
 	let reverseArr=[...profitArr].reverse();
 	const len=profitArr.length;

 	const preOPT=(index)=>{
 		if(index==-1) return 0;
 		const [targetStartTime,targetEndTime,value]=profitArr[index];
 		let preItem=-1;

 		for(let index=0;index<len;index++){
 			if(preItem==-1&&targetStartTime>=reverseArr[index][1]){
 				preItem=profitArr.length-(index+1);
 				break;
 			}
 		}

 		if(preItem==-1){
 			return 0;
 		}else{
 			return	resultMap[`${preItem}`]
 		} 		
 	}
 	const OPT=(index)=>{
 		if(index==-1) return 0;
 		return 	profitArr[index][2]
 	}

 	return profitArr.map((item,index)=>{
 		const [startTime,endTime,value]=item;
 		const choose=value+preOPT(index),noChoose=resultMap[`${index-1}`]||0;
 		resultMap[`${index}`]=Math.max(choose,noChoose);
 		return Math.max(choose,noChoose);
 		
 	}).sort((x,y)=>x-y).pop();
 };
 jobScheduling([6,15,7,11,1,3,16,2],[19,18,19,16,10,8,19,8],[2,9,1,19,5,7,3,19])

 jobScheduling([1,2,3,4,6],[3,5,10,6,9],[20,20,100,70,60])
 jobScheduling([1,2,3,3],[3,4,5,6],[50,10,40,70])