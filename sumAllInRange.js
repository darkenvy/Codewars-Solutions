
function sumAll(arr) {
  arr.sort(function(a,b) {return a > b;});
  var counter = 0;
  for (var i=arr[0]; i<=arr[arr.length-1]; i++) {
    console.log(counter, i);
    counter += i;
  }
  // console.log(counter);
  return counter;
}

sumAll([1, 4]);
