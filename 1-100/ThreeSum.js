var threeSum = function(nums) {
  nums.sort((a,b) => a - b)
  var triplets = [];

  for (var i = 0; nums[i] <= 0; i++) {
    var min = i + 1
    var max = nums.length - 1

    if (nums[i] === nums[i-1]){
      continue;
    }

    while ( min < max) {
      var sum  = nums[i] + nums[min] + nums[max];
      if (sum < 0){
        min++
      } else if (sum > 0) {
        max--
      } else if (sum === 0) {
        var triplet = [nums[i], nums[min], nums[max]];
        triplets.push(triplet)
          while (nums[min] === nums[min + 1]) {
            min++
          }
        min++
      }
    }

  }
  return triplets;
};
