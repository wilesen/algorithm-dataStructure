/*
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

 

示例：

给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
解题思路：
	1.先对数组进行排列
	2.判断最小的数字是不是大于0（如果大于0则返回空数组）
	3.固定一位数
	4.使用双指针循环
	5.判断三数相加的值（如果相加为0则记录三个数字，如果小于0则左边指针向右边移动，如果大于0右边指针向左移动）
	6.去除元素相同的节点(通过while循环可以去除相同元素节点)
	7.返回结果数组
	有一个骚操作：

while (sortArr[i]==sortArr[++i]) {}
这里指的是通过while循环来达到去除重复元素的目的即：如果sortArr[i]与sortArr[++i]相同则进入while循环体中进行下一次值的比较，如果不相同则跳出while循环进入外层的循环中

	*/ 

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum=function(nums){

 	// 排序
 	let sortArr=nums.sort((a,b)=>a-b);
 	const size=nums.length;
 	let returnArr=[];
 	if(sortArr[0]<=0&&sortArr[size-1]>=0){
 		let i=0;
 		while (i<size-2) {
 			let first=i+1;
 			let last=size-1;
 			while (first<last) {
 				let sum=sortArr[i]+sortArr[first]+sortArr[last];
 				if(sum==0){
 					returnArr.push([sortArr[i],sortArr[first],sortArr[last]])
 				}
 				if(sum<0){
 					while (sortArr[first]==sortArr[++first]) {} //循环first，且如果遇见重复值则跳过
 				}else{
 					while (sortArr[last]==sortArr[--last]) {}//循环last，且如果遇见重复值则跳过
 				}
 		}
 			while (sortArr[i]==sortArr[++i]) {} //循环i，且如果遇见重复值则跳过
 		}
 }
 return returnArr;
}

threeSum([-1, 0, 1, 2, -1, -4]);

