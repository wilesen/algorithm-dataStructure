/*
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:

输入: "()"
输出: true
示例 2:

输入: "()[]{}"
输出: true
示例 3:

输入: "(]"
输出: false
示例 4:

输入: "([)]"
输出: false
示例 5:

输入: "{[]}"
输出: true

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

解题思路：
1.去除字符串中的空格
2.遍历字符串
3.如果遇到")""}""]"则在栈中找到最后一个元素是否是其匹配的元素
4.如果匹配则继续循环 如果不匹配则跳出循环（例如："([)]" 当循环到 ")"时候 栈中对应的最后一个元素为 "["，不符合规则则返回false）

作者：wilesen
链接：https://leetcode-cn.com/problems/valid-parentheses/solution/javascriptji-chu-jie-ti-si-lu-by-wilesen/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/ 



/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
 	let saveArr=[];
 	let str=s.replace(/\s/g,'');
 	if(str.length==0) return true;
 	const sourceMap={
 		")":"(",
 		"}":"{",
 		"]":"["
 	};
 	for(let value of str){
 		debugger;
 		if(value==')'||value=='}'||value==']'){
 			const reaction=sourceMap[`${value}`];
 			const target=saveArr.pop();
 			if(target!==reaction){
 				return false
 			}
 		}else{
 			saveArr.push(value)
 		}
 	}

 	return saveArr.length?false:true

 };


 isValid("()[]{}")