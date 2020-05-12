function fibonacci(n){
	if(n===1||n===0)return n;
	return fibonacci(n-1)+fibonacci(n-2);
}



// 优化版
'use strict'
function fibonacci(n, current = 0, next = 1) {
    if(n === 1) return next;
    if(n === 0) return 0;
    return fibonacci(n - 1, next, current + next);
}