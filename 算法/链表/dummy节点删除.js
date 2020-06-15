/*
删除问题的延伸——dummy 结点登场
真题描述：给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字。

示例 1:
输入: 1->2->3->3->4->4->5
输出: 1->2->5
示例 2:
输入: 1->1->1->2->3
输出: 2->3
*/ 

const deleteDuplicates = function(head) {
    // 极端情况：0个或1个结点，则不会重复，直接返回
    if(!head || !head.next) {
        return head
    }
    // dummy 登场
    let dummy = new ListNode() 
    // dummy 永远指向头结点
    dummy.next = head   
    // cur 从 dummy 开始遍历
    let cur = dummy 
    // 当 cur 的后面有至少两个结点时
    while(cur.next && cur.next.next) {
        // 对 cur 后面的两个结点进行比较
        if(cur.next.val === cur.next.next.val) {
            // 若值重复，则记下这个值
            let val = cur.next.val
            // 反复地排查后面的元素是否存在多次重复该值的情况（会把包括当前这个节点一同删除）
            while(cur.next && cur.next.val===val) {
                // 若有，则删除
                cur.next = cur.next.next 
            }
        } else {
            // 若不重复，则正常遍历
            cur = cur.next
        }
    }
    // 返回链表的起始结点
    return dummy.next;
};





















































const deleteDuplicates = function(head){

	if(!head||!head.next){

		return head;

	}

	let dummy=new ListNode();

	dummy.next=head;

	let cur=dummy;

	while (cur.next&&cur.next.next) {
		
		if(cur.next.value==cur.next.next.value){

			const value=cur.next.value;

			while (cur.next.value&&cur.next.next.value==value) {
				cur.next=cur.next.next
			}

		}else{

			cur.next=cur.next

		}

	}

}
















