/* 
Description:
Given the head of a linked list, remove the nth node from the end of the list and return its head.
*/

/*
Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1] 
*/

//Solution:
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  //initialization of the variables
  let lastNode = head;
  let removedNode = null;

  //if there is only one node then return empty list
  if (!head.next) {
    return null;
  }
  //make the last node +n faster than the removed node
  for (let i = 0; i < n; i++) {
    lastNode = lastNode.next;
  }
  //loop the pointer to find the element before the target
  while (lastNode) {
    if (removedNode == null) {
      removedNode = head;
    } else {
      removedNode = removedNode.next;
    }
    lastNode = lastNode.next;
  }
  //if the remove node still null then the head is the target node
  if (removedNode == null) {
    head = head.next;
    return head;
  }
  //remove the target
  removedNode.next = removedNode.next.next;
  return head;
};
