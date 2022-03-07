var lengthOfLastWord = function(s) {
  var stringArray = s.split(' ').reverse();
  for (const element of stringArray) {
    if (element.length !== 0){
      return element.length
    }
  }
};

let testCase1 = "   fly me   to   the moon  "
console.log(lengthOfLastWord(testCase1))