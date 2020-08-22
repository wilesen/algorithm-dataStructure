/*
JS快速排序
本质就是不断递归选取中位数，然后将比中位数小的，跟中位数大的进行分类处理，最后再循环递归
*/ 


function JsQuick(arr){

	if(arr.length<=1) return arr;
	const middleIndex=Math.floor(arr.length/2);
	const middleItem=arr.splice(middleIndex,1)[0];
	const left=[],right=[];
	arr.forEach(item=>{
		if(item<middleItem){
			left.push(item)
		}else{
			right.push(item)
		}
	})

	return JsQuick(left).concat(middleItem,JsQuick(right));
}


JsQuick([11,2,3,412,312,22,12,0])