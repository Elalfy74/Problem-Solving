/*
Description:
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2. 
 */

/*
Example 1:
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").

Example 2:
Input: s1 = "ab", s2 = "eidboaoo"
Output: false  
*/

//Solution

//check permutation using array of ASCII characters
let NO_OF_CHARS = 256;
function arePermutation(str1, str2) {
  let count1 = Array(256);
  let count2 = Array(256);
  count1.fill(0);
  count2.fill(0);
  let i;
  for (i = 0; i < str1.length; i++) {
    count1[str1[i].charCodeAt(0)]++;
    count2[str2[i].charCodeAt(0)]++;
  }
  for (i = 0; i < NO_OF_CHARS; i++) if (count1[i] != count2[i]) return false;

  return true;
}
var checkInclusion = function (s1, s2) {
  //sliding Window
  let guess = "";
  let j = s1.length - 1;

  for (j; j < s2.length; j++) {
    let k = -s1.length + 1;
    guess = s2[j + k];
    for (k = k + 1; k <= 0; k++) {
      guess = guess + s2[j + k];
    }
    if (arePermutation(guess.split(""), s1.split(""))) return true;
  }
  return false;
};
