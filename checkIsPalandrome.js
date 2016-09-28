
function palindrome(str) {
  // Good luck!
  str = /([\dA-Za-z\s,\.]+)/.exec(str)[0].split(' ').join('').split(',').join('').split('.').join('');
  for (var i=0; i<str.length/2; i++) {
    console.log(str, i, str[i], str[str.length-1 - i]);
    if (str[i].toLowerCase() !== str[str.length-1 - i].toLowerCase()) {
      console.log('false', str[i], str[str.length-1-i]);
      return false;
    }
  }
  return true;
}



palindrome("eye");
