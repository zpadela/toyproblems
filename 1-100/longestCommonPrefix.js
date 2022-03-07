var longestCommonPrefix = function(strs) {
  let prefix = '';
  let index = 0;
  if (strs.length) {
    for (const element of strs[0]) {
      prefix += element;
      index++;
      for (subElement of strs) {
        if (subElement.slice(0 , index) === prefix) {
          continue;
        } else {
          return prefix.substring(0, prefix.length - 1)
        }
      }
    }
  }
  return prefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]))

console.log(longestCommonPrefix(["dog","racecar","car"]))
