// https://leetcode.com/problems/add-two-numbers/
// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */

const addTwoNumbers = function (l1, l2) {
  let headNode = new ListNode();
  let currNode = headNode;
  let carryOver = 0; 
  let sum = 0; 

  if (l1 || l2 || sum > 0) {
    if (l1) {
      sum += l1.val; 
      l1 = l1.next; 
    }

    if (l2) {
      sum += l2.val; 
      l2 = l2.next; 
    }

    if (sum > 10) {
      carryOver = 1; 
      sum = sum - 10; 
    }

    currNode.next = new ListNode(sum);
    currNode = currNode.next; 
    sum = carryOver; 
    carryOver = 0; 
  }

  return headNode.next; 
};