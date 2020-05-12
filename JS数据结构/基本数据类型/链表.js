function Node(el){
	this.el=el;
	this.next=null;
}

function Link(){

	this.head=new Node('head');

}
// 添加节点
Link.prototype.append=function(el){

	var currentNode=this.head;

	while(currentNode.next != null){

		currentNode=currentNode.next;

	}
	console.log('currentNode',currentNode)

	console.log('this.head',this.head)

	currentNode.next=new Node(el)
}
// 查询节点
Link.prototype.find=function(el){
	var currentNode=this.head;

	while(currentNode&&currentNode.el!=el){

		currentNode=currentNode.next

	}

	return currentNode;
}
// 插入节点
Link.prototype.insert=function(newEl,oldEl){

	var newNode=new Node(newEl);

	var findNode=this.find(oldEl);

	if(findNode){

		newNode.next=findNode.next;

		findNode.next=newNode;

	}else{
		throw new Error('找不到插入的节点')
	}

}
// 展示所有节点
Link.prototype.display=function(){
	var currentNode=this.head.next;

	while(currentNode){

		console.log(currentNode.el);

		currentNode=currentNode.next;
	}
}
// 查找该节点前节点
Link.prototype.findPrev=function(el){

	var currentNode=this.head;

	while(currentNode&&currentNode.next.el!=el){

		currentNode=currentNode.next
	}
	return currentNode;

}
// 移除节点
Link.prototype.remove=function(el){

	var preNode=this.findPrev(el);

	if(preNode.next!=null){

		preNode.next=preNode.next.next

	}else{
		throw new Error('找不到要删除的节点')
	}
	
}




var link = new Link();
link.append(1);
link.append(3);
link.display();
console.log('---------------')
console.log(link.find(1));
link.insert(2,1);
link.remove(3);
link.display();