String.prototype.isLetter = function() {
  return /^[a-z]$/i.test(this)
}

"a".isLetter()
"av".isLetter()