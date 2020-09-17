/*
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-palindromic-substring
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/ 

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let result={},str='';
    if(s.length==0||s.length==1) return s;
    for(let i of s){
        if(str.includes(i)){
            str+=i;
            const resultStr=str.slice(str.indexOf(i));
            result[`${resultStr.length}`]=resultStr;
        }else{
            result[`${i.length}`]=i;
            str+=i;
        }
    }
    const maxKey=Object.keys(result).sort().unshift();
    return result[`${maxKey}`];
};