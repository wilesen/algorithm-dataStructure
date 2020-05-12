/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
 	let str='';
 	let num=0;
 	let result=0;
//      遍历字符串
 	for(i of s){
//         判断是否重复
 		if(str.includes(i)){
//             这里只是为了计数
 			str+=i;
 			str=str.slice(str.indexOf(i)+1);
//             设置边界值
 			num=str.length;

 		}else{
//             正常的遍历增加
 			str+=i;
 			num++;
 			result=Math.max(num,result);
 		}
 	}
 	return result;

 };