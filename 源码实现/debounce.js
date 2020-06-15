
/*
*所谓防抖就是在触发时间后一定时间内只执行一次，如果再一定时间内又触发会重新计算函数时间，-->重点是会重新计算时间
*防抖是控制次数
*/ 

// 延时执行
function debounce(fn,wait){

	let timeout;

	return function(){

		const content=this;

		if(timeout) clearTimeout(timeout);

		timeout=setTimeout(()=>{

			fn.apply(content,[...arguments]);

		},wait)

	}

}

debounce(()=>console.log(1),1000);


document.querySelectorAll('body')[0].onclick=debounce(say,1000)



// 立即执行
function debounce_atTime(fn,wait){
	let timeout;
	return function(){
		const content=this;
		let  callNow=!timeout;
		if(timeout) clearTimeout(timeout);
		timeout=setTimeout(()=>{timeout=null},wait)
		if(callNow) fn.apply(content ,[...arguments])
	}
}


// 合并版

function debounce_All(fn,wait,immediate){
	let timeout;
	return function (){
		let content = this;
		let callNow=!timeout;
		if(timeout) clearTimeout(timeout);
		if(immediate){

			timeout=setTimeout(()=>{
				timeout=null;
			},wait)

			if(callNow) fn.apply(content, [...arguments])

		}else{
			timeout=setTimeout(()=>{
				fn.apply(content, [...arguments])
			},wait)


		}
	}
}
