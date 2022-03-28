var threeSumClosest = function(nums, target) {
  let triplet = [];
  let tripletSum = 0;
  for (var i = 0; i < nums.length - 2; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      for(var k = j + 1; k < nums.length; k++) {
        if (triplet.length !== 0) {
          tripletSum = triplet[0] + triplet[1] + triplet[2]
          let sum = nums[i] + nums[j] + nums[k]
          if (Math.abs(sum - target) < Math.abs(tripletSum - target)) {
            triplet[0] = nums[i];
            triplet[1] = nums[j];
            truplet[2] = nums[k];
          }
        } else {
          triplet.push(nums[i]);
          triplet.push(nums[j]);
          triplet.push(nums[k]);
        }
      }
    }
  }
  tripletSum = triplet[0] + triplet[1] + triplet[2]
  return tripletSum;
};