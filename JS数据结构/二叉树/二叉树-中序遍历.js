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


const inOrder=function(root){

	if(!root) return;

	inOrder(root.left);

	console.log('now ,the node is : ',root.val);
	

	inOrder(root.right);

}

inOrder(root)

