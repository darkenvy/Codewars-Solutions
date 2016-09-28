function anagrams(word, words) {
  var wordLength = word.length,
      wordsLenght = words.length,
      wordLetters = {},
      ret = [];
  wordLetters = analyzeString(word);
  for (var i = 0; i < wordsLenght; i++) {
    var tempWord = words[i];
        tempWordLetters = analyzeString(tempWord);
    if(compareLetterCount(wordLetters, tempWordLetters))
      ret.push(tempWord);
  }
  return ret;
}

function analyzeString (string) {
  var stringLength = string.length,
      ret = {};
  for (var i = 0; i < stringLength; i++) {
    if (typeof ret[string[i]] === 'undefined') {
      ret[string[i]] = 1;
    } else {
      ret[string[i]]++;
    }
  }
  return ret;
}

function compareLetterCount (a, b) {
  if(Object.keys(a).length !== Object.keys(b).length)
    return false;
  for (var letter in a) {
    if (typeof b[letter] === 'undefined')
      return false;
    if (a[letter] !== b[letter])
      return false;
  }
  return true;
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
