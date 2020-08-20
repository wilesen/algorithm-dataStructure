

/**
真题描述：将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有结点组成的。
示例： 输入：1->2->4, 1->3->4 输出：1->1->2->3->4->4

解题思路：
因为无论是修改l1链表或者l2链表都是一个很消耗内存的操作，所以这里直接创建新的链表去储存新链表结构
- 新建一个链表用作储存新的链表顺序结构
- 建立零时变量去串联l1与l2
- 在比较过程中，那个值小那个就排序在前优先被串联起来
- 串联完成以后判定l1或者l2是否都被遍历完整
- 如果有没有遍历完整的就直接接在cur后
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
   let head=new ListNode();
   let cur=head;
   while (l1&&l2) {
     if(l1.val>l2.val){
       cur.next=l2;
       l2=l2.next;
     }else{
       cur.next=l1;
       l1=l1.next;
     }
     cur=cur.next;
   }
   cur.next=l1!==null?l1:l2;
   return head.next;
 };





 const mergeTwoLists = function(l1, l2) {
  // 定义头结点，确保链表可以被访问到
  let head = new ListNode()
  // cur 这里就是咱们那根“针”
  let cur = head
  // “针”开始在 l1 和 l2 间穿梭了
  while(l1 && l2) {
      // 如果 l1 的结点值较小
      if(l1.val<=l2.val) {
          // 先串起 l1 的结点
          cur.next = l1
          // l1 指针向前一步
          l1 = l1.next
        } else {
          // l2 较小时，串起 l2 结点
          cur.next = l2
          // l2 向前一步
          l2 = l2.next
        }

      // “针”在串起一个结点后，也会往前一步
      cur = cur.next 

    }

  // 处理链表不等长的情况
  cur.next = l1!==null?l1:l2
  // 返回起始结点
  return head.next
};