/*
 观察者模式：在软件设计中是一个对象，维护一个依赖列表，当任何状态发生变化自动通知他们
 属于行为型模式的一种，它定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个主题对象。这个主体对象在状态变化时，会通知所有的观察者对象，使他们能够自动更新自己。
 */ 
 class Observer{
 	constructor(name){
 		this.name=name
 	}

 	update(){
 		console.log(this.name)
 	}

 }

 class Subject{
 	constructor(){
 		this.sublist=[]
 	}

 	add(sub){
 		this.sublist.push(sub)
 	}

 	notify(){
 		this.sublist.forEach(item=>item.update())
 	}
 }

 var wtz=new Observer('wtz');
 var whh=new Observer('whh');
 var dfp=new Observer('dfp');


 var sub=new Subject();

// 向依赖列表添加对象
 sub.add(wtz);
 sub.add(whh);
 sub.add(dfp);
 // 发生变化以后通知他们
 sub.notify();