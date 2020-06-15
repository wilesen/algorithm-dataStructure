Function.prototype.myBind = function(target){
	let context = target||window;
	let _this=this;
	let _args=[...arguments].splice(1);

	return function (){
		let args=arguments;
		return _this.apply(context,[...args,_args])
	}
};