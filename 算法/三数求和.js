
let nums = [-1, 0, 1, 2, -1, -4];
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
