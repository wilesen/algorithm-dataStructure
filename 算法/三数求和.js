
let nums = [-1, 0, 1, 2, -1, -4];
// 指针对撞法

/*
*每次指针移动一次位置，就计算一下两个指针指向数字之和加上固定的那个数之后，是否等于0。如果是，那么我们就得到了一个目标组合；否则，分两种情况来看：
*相加之和大于0，说明右侧的数偏大了，右指针左移
*相加之和小于0，说明左侧的数偏小了，左指针右移
*/ 
function addThree(nums){
	let res=[];
	nums = nums.sort((a,b)=>{
		return a-b
	})
	let len=nums.length;
	for(let i=0;i<len-2;i++){
		let leftPointer=i+1;
		let rightPointer=len-1;
		if(i>0&&nums[i]===nums[i-1]) {
			continue
		}
		while(leftPointer<rightPointer){
			if(nums[i]+nums[leftPointer]+nums[rightPointer]<0){
				leftPointer++;
				while(leftPointer<rightPointer&&nums[leftPointer]===nums[leftPointer-1]){
					leftPointer++;
				}
			}else if (nums[i]+nums[leftPointer]+nums[rightPointer]>0){
				rightPointer--;
				while(leftPointer<rightPointer&&nums[rightPointer]===nums[rightPointer+1]){
					rightPointer--;				
				}
			}else{
				res.push([nums[i],nums[leftPointer],nums[rightPointer]]);
				leftPointer++;
				rightPointer--;
				while(leftPointer<rightPointer&&nums[leftPointer]===nums[leftPointer-1]){
					leftPointer++;
				}
				while(leftPointer<rightPointer&&nums[rightPointer]===nums[rightPointer+1]){
					rightPointer--;			
				}
			}	
		}
	}
	return res;
}
addThree(nums)
