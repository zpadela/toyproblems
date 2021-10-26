var longestPalindrome = function(s) {
var start = 0;
var end = 0;

for (var i = 0; i < s.length; i++) {
  var pointer = getCenter(s, i);
  var bounds = expandAroundCenter(s, pointer[0], pointer[1]);
  var L = bounds[0];
  var R = bounds[1];

  if (R - L > end - start) {
    start = L;
    end = R;
  }

  i = pointer[1]
}

  return s.substring(start, end + 1);
};

var getCenter = function(s,c) {
  var L = c;
  var R = c;
  while ( s[L] === s[R] & R < s.length) {
    R++
  }
  return [L, --R]
}

var expandAroundCenter = function(s, left, right) {
  var L = left;
  var R = right;

  while(L >= 0 && R < s.length && s[L] === s[R]){
    L--;
    R++;
  }
  return [++L, --R]

}



