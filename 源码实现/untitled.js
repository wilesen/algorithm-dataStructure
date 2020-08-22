const PENDING='pending';
const FULFILLED='fulfilled';
const REJECTED='rejected';

class myPromise{
	constructor(executor){
		this._status=PENDING;
		this._resolveQueue=[];
		this._rejectQueue=[];

		const _resolve=(val)=>{
			if(this._status!==PENDING) return ;
			this._status=FULFILLED;
			while (this._resolveQueue.length) {
				const callback=this._resolveQueue.shift();
				return callback(val);
			}
			

		}

		const _reject=(val)=>{
			if(this._status!==PENDING) return ;
			this._status=REJECTED;
			while (this._rejectQueue.length) {
				const callback=this._rejectQueue.shift();
				return callback(val);
			}

		}

		return executor(_resolve,_reject);
	}
	then(resolveFn,rejectFn){
		this._resolveQueue.push(resolveFn);
		this._rejectQueue.push(rejectFn);
	}
}




class myPromie{
	constructor(executor){
		this._status=PENDING;
		this._resolveQueue=[];
		this._rejectQueue=[];
		const _resolve=(val)=>{
			if(this._status!==PENDING) return '';
			this._status=FULFILLED;
			while (this._resolveQueue.length) {
				const callback=this._resolveQueue.shift();
				return callback(val)
			}
		}
		const _reject=(val)=>{
			if(this._status!==PENDING) return '';
			this._status=REJECTED;
			while (this._rejectQueue.length) {
				const callback=this._rejectQueue.shift();
				return callback(val)
			}
		}
		executor(_resolve,_reject);
	}
	then(resolveFn,rejectFn){
		this._resolveQueue.push(resolveFn);
		this._rejectQueue.push(rejectFn);
	}
}