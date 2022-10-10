//Objects
//Please create a pokemon class with as much detail as possible in 10 minutes

function sum(numbers) {
   let total = 0
   for(let i = 0; i < numbers.length; i++){
      total = total+numbers[i]
   }
   return total;
}



function sum(arr){

return arr.reduce((acc,el)=> acc+=el,0) //callback function se acc ki value return hogi arrorw function me hamesha.

console.log(sum)
}


function sum(arr){
   return arr.reduce(function(acc,curr){
      
       return acc+=curr},0)
}
 

 

//find max using reduce.

function max(arr){
  return  arr.reduce((high,curr)=> curr>high? curr: high,0)
}


function max(a){
   let max = 0;
   for(let i = 0; i< a.length; i++){
      if(a[i]>max){
         max = a[i]
      }
      else{
         return max;
      }
   }
   console.log(max)
}

   

   


   

 