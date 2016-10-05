
function convertHTML(str) {
  var safe = {
    "&": "&amp;",
    "<" : "&lt;",
    ">" : "&gt;",
    "\"" : "&quot;",
    "\'" : "&apos;"
  };

  return str.replace(/[&<>"']/g, function(match) {
    return safe[match];
  });
}

convertHTML("Dolce & Gabbana");