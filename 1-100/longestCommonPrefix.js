var longestCommonPrefix = function(strs) {

  if (strs.length === 1) {
    return strs[0]
  }

  var longestString = strs[0];
  var index = 0;
  for (var i = 0; i < strs.length; i++) {
    if (strs[i].length > longestString.length) {
      longestString = strs[i]
      index = i
    }
  }

  var string = strs.splice(index, 1)[0]
  var testString = '';
  var j = 0;
  var result = '';

  while (j < string.length && strs.every(element => { return element.substring(0, j) === testString})){
    testString+= string[j];
    j++
  }


  return testString.slice(0, -1);

}


console.log(longestCommonPrefix(["a", ]))


