var nextPermutation = function(nums) {
  let pointer = nums.length - 1;
  let nextPointer = pointer - 1;
  while (nums[nextPointer] >= nums[pointer]) {
    pointer--;
    nextPointer--;
    if (nextPointer === -1) {
      return reverseInputs(nums, 0)
    }
  }
  while (nums[nextPointer] < nums[pointer]) {
    pointer++
  }
  pointer--
  swapInputs(nums, nextPointer, pointer);
  nextPointer++
  reverseInputs(nums, nextPointer);
  return nums;
};


var swapInputs = function(array, i1, i2) {
  let temp = array[i1];
  array[i1] = array[i2];
  array[i2] = temp;
  return array;
}

var reverseInputs = function(array, startIndex) {
  let endIndex = array.length - 1;
  while (startIndex < endIndex) {
    swapInputs(array, startIndex, endIndex)
    startIndex++
    endIndex--
  }
  return array
}

console.log(nextPermutation([5,1,1]))

543216
612345