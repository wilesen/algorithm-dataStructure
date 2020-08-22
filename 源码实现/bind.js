Function.prototype.myBind = function(target){
	let context = target||window;
	let _this=this;
	let _args=[...arguments].splice(1);

	return function (){
		let args=arguments;
		return _this.apply(context,[...args,_args])
	}
};


function test(){
	console.log(this.name)
}

test.bind({name:2});




Function.prototype.myBind=function(target){
	let context=target||window;
	const _this=this;
	let _args=[...arguments].splice(1);
	return function(){
		_this.apply(context,[...arguments,..._args,])
	}
}