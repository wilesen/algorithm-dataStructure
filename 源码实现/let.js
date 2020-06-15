for (var i=0;i<10;i++){
	console.log(i) //输出 0.1.2.3.4.5.6.7.8.9.10
}

console.log(i)  // ->10






// 在函数外部无法访问i

(function(){

	for (let i=0;i<10;i++){
	console.log(i) //输出 0.1.2.3.4.5.6.7.8.9.10
}

})()


console.log(i)   //->Uncaught ReferenceError: i is not defined 