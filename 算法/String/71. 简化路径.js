/*
以 Unix 风格给出一个文件的绝对路径，你需要简化它。或者换句话说，将其转换为规范路径。

在 Unix 风格的文件系统中，一个点（.）表示当前目录本身；此外，两个点 （..） 表示将目录切换到上一级（指向父目录）；两者都可以是复杂相对路径的组成部分。更多信息请参阅：Linux / Unix中的绝对路径 vs 相对路径

请注意，返回的规范路径必须始终以斜杠 / 开头，并且两个目录名之间必须只有一个斜杠 /。最后一个目录名（如果存在）不能以 / 结尾。此外，规范路径必须是表示绝对路径的最短字符串。

 

示例 1：

输入："/home/"
输出："/home"
解释：注意，最后一个目录名后面没有斜杠。
示例 2：

输入："/../"
输出："/"
解释：从根目录向上一级是不可行的，因为根是你可以到达的最高级。
示例 3：

输入："/home//foo/"
输出："/home/foo"
解释：在规范路径中，多个连续斜杠需要用一个斜杠替换。
示例 4：

输入："/a/./b/../../c/"
输出："/c"
示例 5：

输入："/a/../../b/../c//.//"
输出："/c"
示例 6：

输入："/a//b////c/d//././/.."
输出："/a/b/c"


解题：
- 将字符串进行处理，使用正则把//变成/，并使用/分割字符串
- 声明一个模拟栈的数组用于存储结果，遵循后入先出的原则
- 遍历字符串，如果遇到.. 则将数据推出一个元素，遇到.不进行任何操作，遇到其他情况统一推入堆中。
- 遍历结束对结果进行处理，如果只有一个元素输出'/'，如果有元素对元素添加/并进行链接

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/simplify-path
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/ 



/**
 * @param {string} path
 * @return {string}
 */
 var simplifyPath = function(path) {

 	let splitArr=path.replace(new RegExp("//",'g'),"/").split('/').filter(item=>item.length);
 	let result=[];
 	let len=0;
 	while (len<splitArr.length) {
 		debugger;
 		if(splitArr[len]=='..'){
 			result.pop();
 		}else if(splitArr[len]!=='.'){
 			result.push(splitArr[len]);
 		}
 		len++;
 	}

 	return result.length?result.reduce((x,y)=>x+`/${y}`,'').toString():'/';

 };

 // simplifyPath("/a/../../b/../c//.//");
 simplifyPath("/home//foo/")
