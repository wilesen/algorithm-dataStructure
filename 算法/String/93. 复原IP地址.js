/*
给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。

有效的 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

例如："0.1.2.201" 和 "192.168.1.1" 是 有效的 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效的 IP 地址。

 

示例 1：

输入：s = "25525511135"
输出：["255.255.11.135","255.255.111.35"]
示例 2：

输入：s = "0000"
输出：["0.0.0.0"]
示例 3：

输入：s = "1111"
输出：["1.1.1.1"]
示例 4：

输入：s = "010010"
输出：["0.10.0.10","0.100.1.0"]
示例 5：

输入：s = "101023"
输出：["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
 

解题思路：
- 首先确定是需要递归操作，并且及时的进行剪枝
- 第一如果数组碎片数组已经有四个元素，且还有剩余长度没有使用完 （剪枝）
- 进行遍历，如果遍历的数字大于元素整体长度 返回（剪枝）
- 如果元素长度大于1，且开头为0 返回（剪枝）
- 如果单个元素的长度大于255 返回 （剪枝）
- 及时的退出最后一个元素 否则长度会变长


提示：

0 <= s.length <= 3000
s 仅由数字组成

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/restore-ip-addresses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/ 

/**
 * @param {string} s
 * @return {string[]}
 */
 var restoreIpAddresses = function(s) {
 	let res=[];
 	const dfs=(fragmentArr,start)=>{
 		if(fragmentArr.length==4&&start==s.length){ //如果已经截取完毕同时长度也耗光（正常情况）
 			res.push(fragmentArr.join('.'));
 			return;
 		}
 		if(fragmentArr.length==4&&start<s.length){ //如果截取完了但是长度未耗光
 			return;
 		}
 		for(let i=1;i<=3;i++){    //截取新的字符串
 			if(start+i>s.length) return;
 			const str=s.substring(start,start+i);
 			if(i!==1&&str.startsWith('0')) return;
 			if(+str>255) return;
 			fragmentArr.push(str);
 			dfs(fragmentArr,start+i);
 			fragmentArr.pop();
 		}
 	}

 	dfs([],0);

 	return res;

 };

 restoreIpAddresses("25525511135")