
function myReplace(str, before, after) {
  var newAfter = /[A-Z]/.test(before[0]) ? after[0].toUpperCase() : after[0];
  newAfter += after.slice(1, after.length);
  console.log(newAfter);

  return str.replace(before, newAfter);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
