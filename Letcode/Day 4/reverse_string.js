/*
Description:
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

*/

/*
Example 1:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/

//Solution:
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  //solution with for
  // let temp;
  // for(let i =0 ; i<s.length/2 ; i++){
  //     temp=s[i]
  //     s[i]=s[s.length-i-1]
  //     s[s.length-i-1]=temp;
  // }
  let start = 0;
  let end = s.length - 1;
  let temp;
  while (start < end) {
    temp = s[start];
    s[start] = s[end];
    s[end] = temp;
    start++;
    end--;
  }
};
