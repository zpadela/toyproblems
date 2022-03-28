/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    let endIndex = digits.length - 1
    let doneAdding = false;
    while (doneAdding === false) {
      digits[endIndex] += 1;
      checkForTen(digits, endIndex)
      doneAdding = true;
    }
    return digits;
};

var checkForTen = function(digits, index) {
  if (digits[index] === 10) {
    digits[index] = 0;
    index --
    if (digits[index]) {
      digits[index] += 1;
      return checkForTen(digits, index)
    } else {
      digits.unshift(1)
    }
  } else {
    return true;
  }
}

console.log(plusOne([9,9]))