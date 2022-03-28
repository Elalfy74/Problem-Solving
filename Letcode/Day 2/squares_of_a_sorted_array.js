/*
Problem Description:

Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
*/

/*
Example 1:
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Example 2:
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
*/

//Solution:
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const squaredArray = nums.map((x) => x ** 2);

  //Selection Sort Solution
  // for(let i =0 ; i<nums.length ; i++){
  //     for(let j =i+1 ; j<nums.length ; j++)
  //         if(nums[j]**2<nums[i]**2){
  //            let temp = nums[i]**2
  //            nums[i] = nums[j]**2
  //            nums[j] =temp
  //         }
  // }
  // return(nums)
  return quickSort(squaredArray, 0, squaredArray.length);
};

//Quick Sort Solution
function partion(a, l, h) {
  //pivot could be any number in the array
  let pivot = a[l];
  let i = l;
  let j = h;
  let temp;
  while (i < j) {
    do i++;
    while (a[i] <= pivot);
    do j--;
    while (a[j] > pivot);
    if (i < j) {
      temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
  }
  temp = a[l];
  a[l] = a[j];
  a[j] = temp;
  return j;
}

function quickSort(a, l, h) {
  if (l < h) {
    let j = partion(a, l, h);
    quickSort(a, l, j);
    quickSort(a, j + 1, h);
  }
  return a;
}
