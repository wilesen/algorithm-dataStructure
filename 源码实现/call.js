function test(){
	// this.names='xxx'  如果myCall中  let result =this(...args);  会导致this指向的是window
	console.log(this.name);
	console.log(arguments);
}

Function.prototype.myCall=function(target){
	// 这里是为了保证在test函数内的this是指向target，否则的话指向就是window  ---》理解为{name:123,test:(){console.log(this.name)}} target.test()  this指向改为tartget
	target._$this=this|| window ;
	let args=[...arguments].splice(1);
	let result =target._$this(...args);
	delete target._$this;
	return result;
}



// test.call({name:123},1,2,3,4);
test.myCall({name:123},1,2,3,4);
