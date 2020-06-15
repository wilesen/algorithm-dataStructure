function Father() {
	this.names = ['ziyi','ziyi1', 'ziyi2']
}
function Son() {
  // 使用new关键字执行的构造函数this指向实例对象
  // 注意如果不用new关键字执行this指向全局对象window
  // 这里的Father类当做一个普通的执行函数
  // 此时只是让Son类的实例对象创建了和Father类实例对象一样的实例属性和实例方法
  Father.call(this)

  // Father.call(this)类似于在Son构造函数中执行
  // this.names = ['ziyi','ziyi1', 'ziyi2']
}

let son = new Son()
son.names.push('ziyi3')
// ["ziyi", "ziyi1", "ziyi2", "ziyi3"]
console.log(son.names)

let son1 = new Son()
// ['ziyi','ziyi1', 'ziyi2']
console.log(son1.names)




/* 在子类的构造函数中调用父类的构造函数，从而使子类的this对象在父类构造函数中执行，
*  并最终返回的是子类的this对象（我们知道子类的this对象在构造函数的执行过程中都是开辟新的对象空间，因此引用类型的实例属性都是不同的指针地址）。
* 这里的开辟新的对象空间可以理解为  每一个 实例的this都是一个新的内存空间，然后在父类中传递的时候因为this地址不一样 所以属性绑定的指针地址也是不一样的
*/