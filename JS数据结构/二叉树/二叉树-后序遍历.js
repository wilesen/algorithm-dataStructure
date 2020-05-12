const root={
	val:'A',
	left:{
		val:'B',
		left:{
			val:'D'
		},
		right:{
			val:'E'
		}
	},
	right:{
		val:'C',
		right:{
			val:'F',
		}
	}
}


const postOrder=function(root){

	if(!root) return;

	postOrder(root.left);

	postOrder(root.right);
	

	console.log('now ,the node is : ',root.val);
	

}

postOrder(root)

