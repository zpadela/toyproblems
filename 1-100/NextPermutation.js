var nextPermutation = function(nums) {
  var i = nums.length - 1;
  while (nums[i] < nums[i-1] && i > 0) {
    i--
  }

  var j = nums.length - 1;
  while (nums[i-1] > nums[j] && j > i) {
    j--
  }

  var container = nums[i - 1];
  nums.splice(i - 1, 1, nums[j]);
  nums.splice(j, 1, container)

  var breakpoint = nums.splice(i)
  breakpoint.reverse();
  nums.splice(nums.length - 1, 0, ...breakpoint);

  console.log(nums)

};

console.log(nextPermutation([1,5,8,4,7,6,5,3,1]) + ' EXPECT 132')

console.log(nextPermutation([1,3,2]) + ' EXPECT 213')

console.log(nextPermutation([1,1,5]) + ' EXPECT 151')
