const nums = [2, 7, 11, 15], target = 9;

/* 我们可以在遍历数组的过程中，增加一个 Map 来记录已经遍历过的数字及其对应的索引值。
*  然后每遍历到一个新数字的时候，都回到 Map 里去查询 targetNum 与该数的差值是否已经在前面的数字中出现过了。
*  若出现过，那么答案已然显现，我们就不必再往下走了。
*/

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