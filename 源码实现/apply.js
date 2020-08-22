function test(a){
	console.log(a)
	console.log(this.name);
	console.log(arguments);
}

Function.prototype.myApply=function(target){
	// 这里是为了保证在test函数内的this是指向target，否则的话指向就是this  ---》理解为 target.test()  this指向改为tartget
	target._$this=this;
	let args=arguments[1];
	let result;
	if(args){
		result =target._$this(...args);
	}else{
		result =target._$this();
	}
	delete target._$this;
	return result;
}



test.myApply({name:123},[1,2,3,4]);


Function.prototype.applys=(argument)=>{
	target.this=this||window;
	let args=arguments[1];
	let result;
	if(args){
		resize = =target.this(...args);
	}else{
		resize=target.this();
	}
	delete target._$this;
	return result;
}