var summation = function (num) {
    let result = 0
    for(let i = 1;i<=num ; i++){
      result += i;
    }
   return result;
    }

    Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
Numerical Score 	Letter Grade
90 <= score <= 100 	'A'
80 <= score < 90 	'B'
70 <= score < 80 	'C'
60 <= score < 70 	'D'
0 <= score < 60 	'F'


function getGrade (s1, s2, s3) {
  let average = (s1+s2+s3)/3
  
  if (average<60) {
    return "F"
  }
  
  else if( average < 70){
    return "D"
  }
  
  else if(average < 80){
    return "C"
  }
  else if(average < 90){
    return "B"
  }
  else{
    return "A"
  }
}