/*
给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。

返回被除数 dividend 除以除数 divisor 得到的商。

整数除法的结果应当截去（truncate）其小数部分，例如：truncate(8.345) = 8 以及 truncate(-2.7335) = -2

 

示例 1:

输入: dividend = 10, divisor = 3
输出: 3
解释: 10/3 = truncate(3.33333..) = truncate(3) = 3
示例 2:

输入: dividend = 7, divisor = -3
输出: -2
解释: 7/-3 = truncate(-2.33333..) = -2
 

提示：

被除数和除数均为 32 位有符号整数。
除数不为 0。
假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。本题中，如果除法结果溢出，则返回 231 − 1。


解题思路：
使用的是比较简单的位运算
- 首先判定结果的正负数
- 循环dividend并循环相减，判断减了多少次与减了以后小于被除数的值 加入到下一次的运算中
- 最后将每次循环的结果加起来
- 判定结果的边界值

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/divide-two-integers
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/ 

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 var divide = function(dividend, divisor) {
     let result=0,carry=0,sign=dividend>0?divisor>0?'':'-':divisor>0?'-':'';
     let absDividend=String(Math.abs(dividend));
     let absDivisor=String(Math.abs(divisor));
     if(dividend==0) return 0;

     for(let i=0;i<absDividend.length;i++){  
         let cur=+absDividend[i]+carry;
         let remain=0;
         while(absDivisor<=cur){
             cur-=absDivisor;
             remain++;
         }
         carry=cur*10;
         result+=`${remain}`;
     }
     result= parseInt(sign+result);
     if(result>Math.pow(2,31)-1||result<Math.pow(-2,31))return Math.pow(2,31)-1
         return result;
 };