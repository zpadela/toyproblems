/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
  let mergedList = new ListNode(0 , null)
  let head = mergedList;

  while (list1 !== null && list2 !== null) {
      if (list1.val < list2.val) {
          mergedList.next = new ListNode(list1.val)
          list1 = list1.next
      } else {
          mergedList.next = new ListNode(list2.val)
          list2 = list2.next
      }
      mergedList = mergedList.next;
  }

  if (list1 !== null) {
      mergedList.next = list1;
  }

  if (list2 !== null){
      mergedList.next = list2;
  }

  return head.next;
};

console.log(mergeTwoLists([1,2,4],[1,3,4]))
//Input: list1 = [1,2,4], list2 = [1,3,4]
//Output: [1,1,2,3,4,4]
