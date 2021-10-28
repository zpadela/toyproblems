
var maxArea = function(height) {
  var maxLength = height.length
  var maxHeight = [0, 0];
  var viableHeight = 0;
  var viableLength = 0;

  for (var i = 0; i < maxLength; i++) {

    if (height[i] > maxHeight[0]) {
      maxHeight = [height[i], i]
    }

    if (height[i] <= maxHeight[0] && height[i] > viableHeight) {
      viableHeight = height[i];
    }

    if (i - maxHeight > viableLength)

  }

  return (viableHeight * viableLength)
};



console.log(maxArea([1,8,6,2,5,4,8,3,7]) + ' Expected: 49')
console.log(maxArea([1,1])  + ' Expected: 1')
console.log(maxArea([4,3,2,1,4])  + ' Expected: 16')
console.log(maxArea([1,2,1])  + ' Expected: 2')


