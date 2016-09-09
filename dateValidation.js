function dateChecker(date){
  return /(?:\d{2}-){2}\d{4}\s\d{2}:\d{2}/.test(date);
}

// Found out you can do this to make it even shorter:
const dateChecker = d => (/(?:\d{2}-){2}\d{4}\s\d{2}:\d{2}/).test(d);