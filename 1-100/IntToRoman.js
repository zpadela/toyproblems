var intToRoman = function(num) {
  var romanNumeral = ''

  while (num > 0) {
    if (num / 1000 >= 1) {
      romanNumeral += 'M'
      num -= 1000;
    } else if (num / 100 >= 1) {
      if (num / 900 >= 1) {
        romanNumeral += 'CM'
        num -= 900
      } else if (num / 500 >= 1) {
        romanNumeral += 'D'
        num -= 500
      }else if (num / 400 >= 1) {
        romanNumeral += 'CD'
        num -= 400
      } else  {
        romanNumeral += 'C'
        num -= 100;
      }
    } else if (num / 10 >= 1) {
      if (num / 90 >= 1) {
        romanNumeral += 'XC'
        num -= 90
      } else if (num / 50 >= 1) {
        romanNumeral += 'L'
        num -= 50
      } else if (num / 40 >= 1) {
        romanNumeral += 'XL'
        num -= 40
      } else {
        romanNumeral += 'X'
        num -= 10;
      }
    } else if (num / 1 >= 1) {
      if (num / 9 >= 1) {
        romanNumeral += 'IX'
        num -= 9
      } else if (num / 5 >= 1) {
        romanNumeral += 'V'
        num -= 5
      } else if (num / 4 >= 1) {
        romanNumeral += 'IV'
        num -= 4;
      } else {
        romanNumeral += 'I'
        num -= 1;
      }
    }
  }
  return romanNumeral;
};

console.log(intToRoman(9));