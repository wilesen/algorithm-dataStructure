// 反转字符串
const str = 'juejin'  ;
const res = str.split('').reverse().join('');


function isPalindrome(str) {
    // 先反转字符串
    const reversedStr = str.split('').reverse().join('')
    // 判断反转前后是否相等
    return reversedStr === str
}


/* 同时，回文字符串还有另一个特性：如果从中间位置“劈开”，
*  那么两边的两个子串在内容上是完全对称的。因此我们也可以结合对称性来做判断：
*/