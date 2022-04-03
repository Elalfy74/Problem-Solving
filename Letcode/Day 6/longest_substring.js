/*
Description:
Given a string s, find the length of the longest substring without repeating characters. 
 */
/* 
Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

//idea: sliding window https://www.youtube.com/watch?v=4i6-9IzQHwo&feature=youtu.be

//Solution:
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  var firstArray = [];
  var firstCounter = 0;
  var secondArray = [];
  var secondCounter = 0;
  for (let i = 0; i < s.length; i++) {
    if (!firstArray.includes(s[i])) {
      firstArray.push(s[i]);
      firstCounter++;
    } else if (!secondArray.includes(s[i])) {
      console.log(s[i]);
      secondArray.push(s[i]);
      secondCounter++;
    }
  }
  return firstCounter > secondCounter ? firstCounter : secondCounter;
};
