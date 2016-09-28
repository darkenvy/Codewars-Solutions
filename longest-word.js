
function findLongestWord(str) {
  var longest = 0;
  str.split(' ').forEach(function(word) {
    console.log(word, word.length, longest);
    if (word.length > longest) {
      longest = word.length;
    } 
  });
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
