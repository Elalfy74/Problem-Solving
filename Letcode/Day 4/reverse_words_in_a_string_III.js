/* 
Description:
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
*/

/* 
Example 1:
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Example 2:
Input: s = "God Ding"
Output: "doG gniD"
*/

//Solution:
/**
 * @param {string} s
 * @return {string}
 */
//First Solution "unorganized"
/* var reverseWords = function (s) {
   var array = s.split(" ");
   var finalArray = [];
   let newString;
   for (let i = 0; i < array.length; i++) {
     newString = reverseString(array[i].split("")).join("");
     finalArray.push(newString);
   }
   return finalArray.join(" ");
 };

 var reverseString = function (s) {
   let temp;
   for (let i = 0; i < s.length / 2; i++) {
     temp = s[i];
     s[i] = s[s.length - i - 1];
     s[s.length - i - 1] = temp;
   }
   return s;
 };

 */

var reverseWords = function (s) {
  var array = s.split(" ");
  const finalArray = array.map((str) => reverseArray(str.split("")).join(""));
  return finalArray.join(" ");
};

var reverseArray = function (s) {
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
  return s;
};
