 /**
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
说明:

所有输入只包含小写字母 a-z 。
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
 	let str='';

 	let result='';

 	let i=0;

 	if(strs.length){
 		const strsSort=strs.sort((a,b)=>a.length-b.length)

 		const targetStr=strs[0];

 		for(i of targetStr){
 			str+=i;
 			if(strsSort.every(item=>{return item.includes(str)&&item.indexOf(str)===0})){
 				result+=i
 			}else{
 				return result;
 			}
 		}
 	}

 	return result;

 };