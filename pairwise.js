function pairwise(arr, arg) {
  var sum = 0;
  if(arr.length){
    for(var i = 0; i < arr.length; i++){
      for(var k = i+1; k < arr.length; k++){
        if(arr[i] + arr[k] === arg){  
          sum += (i + k);
          i += 1;
          k += 1;
        }
      }
    }
  }
  console.log(sum);
  return sum;
}

pairwise([1,4,2,3,0,5], 7);