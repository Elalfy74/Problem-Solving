/*
Problem Description:

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.
*/

/*
Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4
*/

/*
Idea: 
similar to binary search but here we have two conditions, first the target is bigger than value of the mid then his position must be the next position,
second if the target is smaller than value of the mid then we must return the mid position
*/

//Solution:
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let min = 0;
  let max = nums.length - 1;
  let mid;

  while (min <= max) {
    mid = Math.round((max + min) / 2);
    if (target === nums[mid]) return mid;
    else if (target > nums[mid]) min = mid + 1;
    else max = mid - 1;
  }
  if (target > nums[mid]) return mid + 1;
  return mid;
};
