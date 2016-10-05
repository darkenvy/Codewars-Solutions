
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var newStr = str.replace(/[a-z][A-Z]/g, function(frag) {
    return frag[0] + "-" + frag[1];
  });
  return newStr.replace(/[\s_]/g, "-").toLowerCase();
}

spinalCase('This Is Spinal Tap');
