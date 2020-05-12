class Single{
	name(){
		console.log('单例模式');
	}

	static getInstance(){
		if(!Single.instance){
			Single.instance = new Single()
		}
		return Single.instance
	}
}

const s1 = Single.getInstance()
const s2 = Single.getInstance()

// true
s1 === s2