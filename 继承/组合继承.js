function Father(name,age) {
	this.name = name
	this.age = age
  // 引用类型的实例属性
  this.names = []
}

Father.prototype.getNames = function() {
	return this.names
}

function Son(name, age, job) {
  // 借用构造函数
  // this执行的过程中也会创建this.names实例属性
  Father.call(this, name, age)
  this.job = job
}

// 创建原型链
// 需要注意此时Son类的原型对象中还是有Father类的实例对象的属性和方法
Son.prototype = new Father()
// 调整Son原型对象的constructor指向
Son.prototype.constructor = Son

let son = new Son('ziyi2', 28, 'web')
son.names.push('ziyi2')
// { age:28 job:"web" name:"ziyi2" names:["ziyi2"] }
console.log(son)
let son1 = new Son('ziyi2', 28, 'web')
// [] son.name和son1.names是不同的指针，指向不同的物理空间
console.log(son1.names)


// 组合继承已经可以解决大部分问题，但是也有缺陷，就是会调用两次父类的构造函数，
// 一次是实现原型时使子类的原型等于父类的实例对象调用了父类构造函数（同时在子类的原型对象中还存在了父类实例对象的实例属性），
// 一次是使用子类构造函数时调用了一次父类构造函数。