var maxArea = function(height) {
  let start = 0;
  let end = height.length - 1;
  let area = 0;
  while (start < end) {
   let h = height[start] >= height[end] ? height[end] : height[start]
   let l = end - start
   let a = h * l
   if (a > area) {
       area = a;
   }
   if (height[start] > height[end]) {
       end --
   } else {
       start++
   }
  }
  return area;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));