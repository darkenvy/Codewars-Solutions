
function translatePigLatin(str) {
  if (/^[aeiouy]/i.test(str)) {return str + "way";}
  return /([aeiouy].+$)/.exec(str)[0] + /(^[^aeiouy]+)/.exec(str)[0] + 'ay';
}

translatePigLatin("consonant");
