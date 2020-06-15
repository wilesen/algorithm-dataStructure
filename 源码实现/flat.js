/*
* 数组扁平化
*  [1, [1,2], [1,2,3,[1,2,3,[3,3,3]]]]  --->[1,1,2,1,2,3,1,2,3,3,3,3]
*/



const arr=[1, [1,2], [1,2,3,[1,2,3,[3,3,3]]]];





// 方法一
arr.flat(Infinity);



// 方法二（正则）


JSON.parse(`[${JSON.stringify(arr).replace(/(\[|\])/g,'')}]`);


// 方法三 递归


function flat (arr){
	return arr.reduce((prev,cur)=>{
		return prev.concat(cur instanceof Array?flat(cur):cur)
	},[])
}