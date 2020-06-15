class PublishSubject{
	constructor(){
		this.subscribers={}
	}
	subscriber(type,fn){
		if(!Object.prototype.hasOwnProperty.call(this.subscribers,type)){
			this.subscribers[type]=fn
		}
		this.subscribers[type].push(fn);
	}
	unSubscriber(type,fn){
		let listeners = this.subscribers[type];
		if (!listeners || !listeners.length) return;
		this.subscribers[type] = listeners.filter(v => v !== fn);
	}
	publish(type, ...args){
		let listeners = this.subscribers[type];
		if (!listeners || !listeners.length) return;
		listeners.forEach(fn => fn(...args));        
	}
}


let ob = new PubSub();
ob.subscribe('add', (val) => console.log(val));
ob.publish('add', 1);