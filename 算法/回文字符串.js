/*
示例 1: 输入: "aba"
输出: True
示例 2:
输入: "abca"
输出: True
解释: 你可以删除c字符。
注意: 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。
*/ 
function isPalindrome(strs){

	if(!strs.length) return false;

	let i=0,j=strs.length-1;
	while(i<j){
		let left=strs[i];
		let leftOne=strs[i+1];
		let right=strs[j];
		let rightOne=strs[j-1];
		if(left!==right){
			if(!(leftOne==right||left==rightOne)){
				return false;
			}
		}
		i++;
		j--;
	}
	

	return true;

}
