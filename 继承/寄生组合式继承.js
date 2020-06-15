function objectCreate(o) {
  function F() {}
  F.prototype = o
  console.log(new F().__proto__ === o)
  return new F()
}

function inheritPrototype(SubClass, SuperClass) {
  var prototype = objectCreate(SuperClass.prototype)
  prototype.constructor = SubClass
  SubClass.prototype = prototype
}


function Father(name, age) {
  this.name = name
  this.age = age
}

Father.prototype.getName = function() {
  return this.name
}

function Son1(name, age, job) {
  // 借用构造函数
  Father.apply(this, arguments)
  this.job = job
}

function Son2(name, age, job) {
  // 借用构造函数
  Father.apply(this, arguments)
  this.job = job
}



// 组合继承的写法
Son1.prototype = new Father()
Son1.prototype.constructor = Son1
// age : undefined
// constructor : ƒ Son1(name, age, job)
// name : undefined
// __proto__ : { getName:ƒ () constructor : ƒ Father(name, age) }
console.log(Son1.prototype)

// 寄生组合式继承的写法
// 借用构造函数实现构造函数的方法和属性的继承
// inheritPrototype函数实现原型对象的方法和属性的继承
inheritPrototype(Son2, Father)
// constructor : ƒ Son2(name, age, job)
// __proto__ : { getName:ƒ () constructor : ƒ Father(name, age) }
console.log(Son2.prototype)


var son1 = new Son1('ziyi2', 28, 'web')
var son2 = new Son2('ziyi3', 28, 'hardware')
son1.getName()
son2.getName()











































function createObject(o){

  function F(){};

  F.prototype = o;

  return new F();

}

function inheritPrototype(SubClass,SuperClass){

  var proptype=createObject(SuperClass.proptype);

  proptype.constructor=SubClass;

  SubClass.proptype=proptype;

}
