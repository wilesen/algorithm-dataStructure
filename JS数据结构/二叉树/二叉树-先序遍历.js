const root={
  val:'A',
  left:{
    val:'B',
    left:{
      val:'C'
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


const PreOrder=function(root){

  if(!root){

    console.log('节点为空')

    return 

  }

  console.log('now ,the node is : ',root.val);

  PreOrder(root.left);

  PreOrder(root.right);

}



