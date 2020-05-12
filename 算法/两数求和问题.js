const nums = [2, 7, 11, 15], target = 9;


function getAdd(nums,target){


	var m=new Map();

	for(let i =0;i<nums.length;i++){

		if(m.get(target-nums[i])!==undefined){

			return [m.get(target-nums[i]),i]

		}

		m.set(nums[i],i)

	}

}

getAdd(nums,target)