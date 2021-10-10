
var romanToInt = function(s) {
  var sum = 0
  var romanArray = s.split('');
  for (var i = 0; i < romanArray.length; i++) {
    switch(romanArray[i]) {
      case 'I':
        if (romanArray[i + 1] === 'V') {
          sum += 4;
          i++
        } else if (romanArray[i + 1] === 'X') {
          sum += 9;
          i++
        } else {
          sum += 1;
        }
        break;
      case 'V':
        sum += 5;
        break;
      case 'X':
        if (romanArray[i + 1] === 'L') {
          sum += 40;
          i++
        } else if (romanArray[i + 1] === 'C') {
          sum += 90;
          i++
        } else {
          sum += 10;
        }
        break;
      case 'L':
        sum += 50;
        break
      case 'C':
        if (romanArray[i + 1] === 'D') {
          sum += 400;
          i++
        } else if (romanArray[i + 1] === 'M') {
          sum += 900;
          i++
        } else {
          sum += 100;
        }
        break;
      case 'D':
        sum += 500;
        break;
      case 'M':
        sum += 1000;
        break;
    }
  }
  return sum;
};

