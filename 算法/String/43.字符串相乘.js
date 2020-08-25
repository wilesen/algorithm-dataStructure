/*
给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

示例 1:

输入: num1 = "2", num2 = "3"
输出: "6"
示例 2:

输入: num1 = "123", num2 = "456"
输出: "56088"
说明：

num1 和 num2 的长度小于110。
num1 和 num2 只包含数字 0-9。
num1 和 num2 均不以零开头，除非是数字 0 本身。
不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。


解题思路：

    123
    456
  --------
    738
   615
  492
  ---------
  56088

- 先将两个数组每个元素相乘放进一个公共数组内
- 将每个元素从后取出进行加法运算，如果超过10则带入到下次计算
- 最后获取字符串并且反转


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/multiply-strings
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/ 


/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var multiply = function(num1, num2) {

 	if(num1=='0'||num2=='0') return '0';

 	let l1=num1.length;
 	let l2=num2.length;

 	let sumArr= new Array(l1+l2-1).fill(0),carry=0,result='';

 	for(let i=0;i<l1;i++){
 		for(let j=0;j<l2;j++){
 			sumArr[i+j]+=+num1[i]*+num2[j]  //转为数字
 		}
 	}

 	r=sumArr.length;
 	
 	while (r--) {
 		let remain=(sumArr[r]+carry)%10;
 		carry=(sumArr[r]+carry)/10|0;
 		result+=remain;
 	}

 	return result;

 };

 multiply('9','99')
