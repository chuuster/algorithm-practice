// const swapPairs = function (head) {
//   if (!head) return head;

//   const headNode = new ListNode();
//   headNode.next = head;

//   let prevIterationNode = headNode;
//   let currNode = head;

//   while (currNode.next) {
//     let firstNode = currNode;

//     currNode = currNode.next;
//     firstNode.next = currNode.next;
//     currNode.next = firstNode;

//     prevIterationNode.next = currNode;
//     prevIterationNode = firstNode;

//     if (firstNode.next) {
//       currNode = firstNode.next;
//     } else {
//       break;
//     }
//   }

//   return headNode.next;
// };

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// /**
//  * @param {ListNode} head
//  * @param {number} k
//  * @return {ListNode}
//  */

const reverseKGroup = function (head, k) {

};