/*

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

*/

var reverse = function(x) {
  var negativeCheck = x < 0 ? true : false;
  var numArray = x.toString().split('');
  var newString = numArray.reverse().join('');
  var newNum = negativeCheck === true ? parseInt(newString) * -1 : parseInt(newString);
  return newNum;
};