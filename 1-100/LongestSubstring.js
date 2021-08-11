/*

Given a string s, find the length of the longest substring without repeating characters.

*/

var lengthOfLongestSubstring = function(s) {
  var subArray = [];
  var subArrayLength = 0 ;
  for (var i = 0; i < s.length; i++) {
    var currentLetter = s[i];
    var indexInSubArray = subArray.indexOf(currentLetter);
    if (indexInSubArray != -1) {
      subArray = subArray.slice(indexInSubArray + 1);
    }
    subArray.push(currentLetter);
    subArrayLength = subArray.length > subArrayLength ? subArray.length : subArrayLength
  }
return subArrayLength;
};