// https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */


const mergeTwoLists = function (l1, l2) {
  const headNode = new ListNode(); 
  let currNode = headNode; 

  while (l1 || l2) {
    let nextNode; 

    if (l1 && l2) {
      nextNode = Math.min(l1.val, l2.val) === l1.val ? l1 : l2;
    } else {
      nextNode = l1 ? l1 : l2; 
    }

    (nextNode === l1) ? l1 = l1.next : l2 = l2.next; 
    currNode.next = nextNode; 
    currNode = currNode.next; 
  }

  return headNode.next; 
};