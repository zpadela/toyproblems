var isValid = function(s) {
  var currentOpen = [];

  for (var i = 0; i < s.length; i++) {

    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      currentOpen.push(s[i])
    }

    if (s[i] === ')' || s[i] === '}' || s[i] === ']') {
      if (closer(currentOpen[currentOpen.length - 1]) === s[i]) {
        currentOpen.pop()
      } else {
        return false
      }
    }
  }

  if (currentOpen.length) {
    return false
  }

  return true;
};

var closer = function(x) {
  if (x === '(') {
    return ')'
  }
  if (x === '{') {
    return '}'
  }
  if (x === '[') {
    return ']'
  }
}

console.log(isValid('()}'))