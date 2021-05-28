
// 所谓节流就是一定时间内只允许触发一次，不同于防抖重新计算时间，节流不会重新计算时间只会在规定时间内不会重新触发
// 节流是控制频率

function throttle(fn,wait){
	let timeout;
	return function(){
		const content=this;
		if(!timeout){
			timeout=setTimeout(()=>{
				timeout=null;
				fn.apply(content, [...arguments])
			},wait)
		}

	}

}


