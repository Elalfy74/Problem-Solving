/*
Problem Description:

Given an array, rotate the array to the right by k steps, where k is non-negative.
*/

/*
Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

//Solution:
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let n = nums.length;
  if (n < k) {
    let temp;
    for (let i = 0; i < k; i++) {
      let count = nums.length - 1;
      temp = nums[nums.length - 1];
      for (let j = nums.length - 2; j >= 0; j--) {
        nums[count] = nums[j];
        count--;
      }
      nums[0] = temp;
    }
  }
  if (n >= k) {
    //using reversal algorithm
    //reversal algorithm works only when k is less than the length of the array
    reverse(nums, 0, n - k - 1);
    reverse(nums, n - k, n - 1);
    reverse(nums, 0, n - 1);
  }
};
function reverse(array, start, end) {
  while (start < end) {
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
  }
  return array;
}
