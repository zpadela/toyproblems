var strStr = function(haystack, needle) {
  return needle !== '' ? haystack.indexOf(needle) : 0;
};

console.log(strStr('hello', 'll'))
