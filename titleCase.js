
function titleCase(str) {
  var newStr = str.split(' ').map(function(word) {
    return word[0].toUpperCase() + word.toLowerCase().slice(1);
  });

  return newStr.join(' ');
}

titleCase("I'm a little tea pot");
