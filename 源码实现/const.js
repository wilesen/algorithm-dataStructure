function _const(key,value){

	const desc={
		value,
		writable:false
	}

	Object.defineProperty(window, key, desc)

}


_const('obj',{name:'obj'})

obj={}  //不允许直接修改