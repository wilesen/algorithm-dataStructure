function Father() {
	this.names = ['ziyi', 'ziyi1', 'ziyi2']
}
function Son() { }

Father.prototype.getName = function () {
	return this.names
}

// Son类的原型对象包含了Father类原型对象的方法和属性
// 同时也包含了Father类实例对象的实例方法和实例属性 *****
Son.prototype = new Father()

// 重写了Son类的原型对象
// Son.prototype.constructor !== Son
// true
console.log(Son.prototype.constructor === Father)

let son = new Son()

// 继承Father类实例对象的引用类型属性 
// ["ziyi", "ziyi1", "ziyi2"]
console.log(son.names)

// 继承Father类原型对象的方法
console.log(son.getName())


// 读取对象的属性和方法时，会执行搜索，首先搜索实例对象本身有没有同名的属性和方法，有则返回, 如果没有找到，那么继续搜索原型对象，在原型对象中查找具有给定名字的属性和方法。



/*
该继承方法有一个缺陷，具体可以查看原型的弊端，在原型中使用引用类型的属性，在所有的实例对象中的该属性都引用了同一个物理空间，一旦空间的值发生了变化，那么所有实例对象的该属性值就发生了变化。
*/


console.log(son instanceof Son)