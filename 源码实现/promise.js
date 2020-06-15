const p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('result')
	},
	1000);
}) 

p1.then(res => console.log(res), err => console.log(err))




class myPromise{
	constructor(executor){

		this._resolveQueue=[];
		this._rejectQueue=[];


		let _resolve=()=>{
			
		}

		let _reject=()=>{
			
		}

		executor(_resolve,_reject)

	}

	then(resolveFn,rejectFn){

		this._resolveQueue.push(resolveFn);
		this._rejectQueue.push(rejectFn);

	}
}