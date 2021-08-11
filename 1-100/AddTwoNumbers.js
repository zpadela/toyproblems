/*

 You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

*/
 var addTwoNumbers = function(l1, l2) {
  var carry = 0;
  var head = new ListNode(0);
  var currentNode = head;

  while (l1 || l2) {

    var numOne = l1 ? l1.val : 0;
    var numTwo  = l2 ? l2.val : 0;

    var sum = numOne + numTwo + carry;
    carry = 0;

    if (sum > 9) {
      sum = sum % 10;
      carry = 1;
    }

    currentNode.next = new ListNode(sum);
    currentNode = currentNode.next;


    if (l1) {
      l1 = l1.next;
    };

    if (l2) {
      l2 = l2.next;
    };
  }

  if (carry) {
    currentNode.next = new ListNode(carry);
  }

  return head.next;
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0: val)
  this.next = (next === undefined ? null: next)
}