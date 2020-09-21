
let nums = [-1, 0, 1, 2, -1, -4];
// 指针对撞法

/*
*给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

 

示例：

给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/3sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/ 

/*
*每次指针移动一次位置，就计算一下两个指针指向数字之和加上固定的那个数之后，是否等于0。如果是，那么我们就得到了一个目标组合；否则，分两种情况来看：
*相加之和大于0，说明右侧的数偏大了，右指针左移
*相加之和小于0，说明左侧的数偏小了，左指针右移
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
