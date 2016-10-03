function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var tempArr = [];
  for(var i = 0; i < arr.length; i++){
    var fullRadius = arr[i].avgAlt + earthRadius;
    var diameter = 3.14159265359 * (fullRadius * 2);
    var time = Math.round((3.14159265359 * 2) * Math.sqrt(Math.pow(fullRadius, 3)/ GM));
    tempArr.push({name: arr[i].name, orbitalPeriod: time});
  }
  return tempArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);