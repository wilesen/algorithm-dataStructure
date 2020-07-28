const p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('result')
	},
	1000);
}) 

p1.then(res => console.log(res), err => console.log(err))



// 基础架构

class MyPromise{
	constructor(executor){

		this._resolveQueue=[];
		this._rejectQueue=[];


		let _resolve=(val)=>{

			while (this._resolveQueue.length) {
				const callback=this._resolveQueue.shift();
				callback(val)
			}
			
		}

		let _reject=(val)=>{
			while (this._resolveQueue.length) {
				const callback=this._resolveQueue.shift();
				callback(val)
			}
		}

		executor(_resolve,_reject)

	}

	then(resolveFn,rejectFn){

		this._resolveQueue.push(resolveFn);
		this._rejectQueue.push(rejectFn);

	}
}

const p1 = new MyPromise((resolve, reject) => {
	setTimeout(() => {
		resolve('result')
	},
	1000);
}) 

p1.then(res => console.log(res), err => console.log(err))



// 添加Promise的三种状态

const PENDING='pending';
const FULFILLED='fulfilled';
const REHECTED='rejected';

class MyPromise{

	constructor(executor){
		this._status=PENDING;
		this._resolveQueue=[];
		this._rejectQueue=[];

		const _resolve=(val)=>{

			if(this._status!==PENDING) return;

			this._status=FULFILLED;
			
			while (this._resolveQueue.length) {

				const callback=this._resolveQueue.shift();

				callback(val);

			}

		}
		const _reject=(val)=>{

			if(this._status!==PENDING) return;

			this._status=REHECTED;
			
			while (this._rejectQueue.length) {

				const callback=this._rejectQueue.shift();

				callback(val);
				
			}

		}
		executor(_resolve,_reject);
	}


	then(resolveFn,rejectFn){

		this._resolveQueue.push(resolveFn);
		this._rejectQueue.push(rejectFn);

	}

}

new MyPromise((resolve,reject)=>{resolve(1)}).then(res=>console.log(res))


//then的链式调用

class MyPromise{
	constructor(executor){

		this._status=PENDING;
		this._resolveQueue=[];
		this._rejectQueue=[];

		const _resolve=(val)=>{

			if(this._status!==PENDING) return;

			this._status=FULLFILLED;
			
			while (this._resolveQueue.length) {

				const callback=this._resolveQueue.shift();

				callback(val);

			}

		}
		const _reject=(val)=>{

			if(this._status!==PENDING) return;

			this._status=REHECTED;
			
			while (this._rejectQueue.length) {

				const callback=this._rejectQueue.shift();

				callback(val);
				
			}

		}
		executor(_resolve,_reject);
	}
	then(resolveFn, rejectFn) {
  //return一个新的promise
  return new MyPromise((resolve, reject) => {
    //把resolveFn重新包装一下,再push进resolve执行队列,这是为了能够获取回调的返回值进行分类讨论
    const fulfilledFn = value => {
    	try {
        //执行第一个(当前的)Promise的成功回调,并获取返回值
        let x = resolveFn(value)
        //分类讨论返回值,如果是Promise,那么等待Promise状态变更,否则直接resolve
        //这里resolve之后，就能被下一个.then()的回调获取到返回值，从而实现链式调用
        x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
    } catch (error) {
    	reject(error)
    }
}
    //把后续then收集的依赖都push进当前Promise的成功回调队列中(_rejectQueue), 这是为了保证顺序调用
    this._resolveQueue.push(fulfilledFn)

    //reject同理
    const rejectedFn  = error => {
    	try {
    		let x = rejectFn(error)
    		x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
    	} catch (error) {
    		reject(error)
    	}
    }
    this._rejectQueue.push(rejectedFn)
})
}

}