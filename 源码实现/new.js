function myNew(context,...args){

	let obj={};

	Object.setPrototypeOf(obj,context.prototype);

	// 这里把this指向变为obj，理解下文中的Person中的this为obj，实质为obj.name=name;
	const result=context.apply(obj,args);

	return result instanceof Object?result:obj;

}

function Person(name){
	this.name=name;
}

var p1=new Person('wtz');

var p2=myNew(Person,'wtz')


/*
首先函数接受不定量的参数，第一个参数为构造函数，接下来的参数被构造函数使用
然后内部创建一个空对象 obj
因为 obj 对象需要访问到构造函数原型链上的属性，所以我们通过 setPrototypeOf 将两者联系起来。这段代码等同于 obj.__proto__ = Con.prototype
将 obj 绑定到构造函数上，并且传入剩余的参数
判断构造函数返回值是否为对象，如果为对象就使用构造函数返回的值，否则使用 obj，这样就实现了忽略构造函数返回的原始值
*/



