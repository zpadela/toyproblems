var isPalindrome = function(x) {
  let reversedNum = x.toString().split('').reverse().join('');
  return parseInt(reversedNum) === x ? true : false;
};

console.log(isPalindrome(123))

console.log(isPalindrome(121))