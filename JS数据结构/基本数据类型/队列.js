
/*
**	链表的特点就是后进先出
**	只允许从尾部添加元素
**	只允许从头部取出元素
**	
*/ 
function List(){

	var args=Array.prototype.slice.call(arguments);//把入参变成数组

	this.size=args.length;//记录入参的原始长度

	this.pos=-1;

	this.dataList=args;

}

// 向着列表添加元素
List.prototype.append=function(el){

	this.dataList[this.size++]=el;

}

// 找到指定元素的下标
List.prototype.find=function(el){

	for(var i=0;i<this.size;i++){

		if(this.dataList[i]==el){

			return i

		}

	}

	return -1;

}

// 删除指定元素
List.prototype.remove=function(el){

	var findIndex=this.find(el);

	if(findIndex!=-1){

		this.dataList.splice(findIndex,1);

		this.size--;

		return true;

	}

	return false;

}

// 返回列表长度
List.prototype.length=function(){

	return this.size;

}

// 以字符串的形式显示列表中的元素
List.prototype.toString = function () {

	return this.dataList.join();

}


// 清空列表中的所有元素
List.prototype.clear=function(){

	delete this.dataList;

	this.dataList=[];
	
	this.size=0;

	this.pos=-1;

}











