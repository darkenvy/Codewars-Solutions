function solution(str){
   var final = [];
   str.length % 2 == 1 ? str += "_" : false;
   for (var i=0; i<str.length; i+=2) {
      final.push(str[i] + str[i+1])
   }
   return final;
}

solution("abc")