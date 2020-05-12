
/*
**	堆栈的特点就是后进先出
**	只允许从尾部添加元素
**	只允许从尾部取出元素
**	
*/ 

function Stack(){

	this.dataList=[];
	this.top=-1;

}

// 入栈
Stack.prototype.push=function(el){

	this.dataList[++this.top]=el;

}

// 出栈
Stack.prototype.pop=function(el){

	return this.dataList[this.top--];

}

// 获取栈顶元素
Stack.prototype.peek=function(){

	return this.dataList[this.top];

}

// 清除栈中所有元素

Stack.prototype.clear=function(){
	
	delete this.dataList;
	
	this.dataList=[];

	this.top=-1;

}

// 获取栈中元素个数
Stack.prototype.length=function(){

	return this.top+1；

}