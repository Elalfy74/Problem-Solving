/* 
Description:
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.
*/

/*
Example 1:
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Example 2:
Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one. 
*/

/*
Idea : 
two pointers 
fast and slow
with the fast moving the twice steps of the slow, if the fast reaches the end, the slow will be at the middle */

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
 * @return {ListNode}
 */
var middleNode = function (head) {
  let lastNode = head;
  let middleNode = head;

  while (lastNode.next) {
    lastNode = lastNode.next;

    if (lastNode.next) {
      lastNode = lastNode.next;
    }
    middleNode = middleNode.next;
  }
  return middleNode;
};
