/*function removeExclamationMarks(s) {
    console.log(s.split("!").join(""))
  }

  removeExclamationMarks("he!llo!") */


  /*function check(a, x) {
    let arr = a.find((e)=> (e === x) )
    console.log(arr? true:false)
  }

  check([], ) */

  /*function stringToArray(string){

    let arr = string.split(" ")
    return arr

  }
  
  stringToArray("I love arrays they are my favorite")*/

  /*function isIsogram(str){
    let count = 0;
    let str1 = str.toLowerCase()
    let arr = str1.split('')
    
     arr.sort()
     for(let i = 0 ; i < arr.length; i++){
      if(arr[i] == arr[i+1]){
         count+= 1
      }  
    }

    console.log (count >= 1 ? false :true)

    }
    isIsogram("moOse") */


  /*function isIsogram(str){

      let count = 0;
      
      let arr = str.toLowerCase().split('')
      arr.sort()
       for(let i = 0 ; i < arr.length; i++){
        if(arr[i] == arr[i+1]){
           count+= 1
        }  
      }
  
      return (count >= 1 ? false :true)
  
      }*/


/*      Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Implement the function taking n and d as parameters and returning this count.
Examples:

n = 10, d = 1 
the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

The function, when given n = 25 and d = 1 as argument, should return 11 since
the k*k that contain the digit 1 are:
1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
So there are 11 digits 1 for the squares of numbers between 0 and 25.


      /*function nbDig(n, d) {
      
       let str1 = ""
      
          for(let i = 0; i <= n; i++){
            str1 += i*i
          }
          console.log(str1)
      console.log(str1.split(d).length-1)
     
      }

      nbDig(6 , 6) */


     /* function str(a,b){
        console.log(Number(a+b))
      }

      str("123", "456") */



  /*    You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

    Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).



      function isValidWalk(walk) {


       function count(direction) {
        return walk.filter((e)=> e == direction).length
       }
        
          
          
        
        if(count("n") == count("s") && count("e") == count("w") && walk.length == 10){
          console.log(true)
        }else{
          console.log(false)
        }
      }*/


/*     Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.
Example

{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6


      function sumArray(array) {


        if ( ![] || array.length == 0 || array.length ==1){
          console.log(0)
        }

        array.sort((a,b)=> a-b)

        while (array[0] == array[1]){
          array.shift()
        } 
        array.shift()
        

        while (array[array.length-1] == array[array.length -2]){
          array.pop()
        } 
        array.pop()
        

        console.log(array.reduce((acc,e)=> acc+e, 0))
      }
    


      
sumArray() */


/*function fakeBin(x){
 let arr = x.split("")

 for(let i = 0; i < arr.length; i++){
  if(arr[i] < 5){
    arr[i] = "0"
  }else{
    arr[i] = "1"
  }
 }

 console.log(arr)
 x = arr.join("")
 console.log(x)

}*/

/* convert a number into its squares and contctenate them eg -- 234(input) -- 4916(output)
function squareDigits(num){
  let array = num.toString().split('').map((e)=> e*e)

  console.log (array.join(''))
}

squareDigits(234) */



/*var isSquare = function(n){
  const squareRoot = Math.sqrt(n)
  let str1 = squareRoot.toString()
  return n < 0 ||  str1.includes(".") ? false : true
}

isSquare(-4)

or */

/*best practice
var isSquare = function(n){ 
  return Math.sqrt(n) % 1 === '0'
} */

/*Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3] */


/*var uniqueInOrder=function(iterable){
  let arr = []
  
  for(let i=0; i< iterable.length; i++){
    if(iterable[i] != iterable[i+1]){
      arr.push(iterable[i])
    }
  }
   return arr
 } */
 
 //Best Practice
 /*function uniqueInOrder(d){
   console.log([...d].filter((x, i, a) => x != a[i + 1])) 

 }


 uniqueInOrder("AaaaBBBBBJJJjjjjLLLLmm")
 /*function l(d){

  console.log([...d])
 } 

l("abvxfg is a dog") */



//in this problem dont use filter method. modify the same array nums to remove the duplicates. filter returns a new array we dont want that
/*var removeDuplicates = function(nums) {
  let j = 0;
  for(let i = 0; i < nums.length; i++){
    if(nums[i]! = nums[i+1]){
      nums[j++] = nums[i]    //here j++ operator first assigns the value and then increments. so pehle j[0] assign krega fir increment
    }
  }

  return nums
}; 

removeDuplicates([1,1,2]) */



/*var mergeTwoLists = function(list1, list2) {
  let arr = []
  for(let i = 0; i<list2.length; i++){
      list1.push(list2[i])

       arr = list1.sort((a,b)=> a-b)
     
  }
  console.log(arr)
};

mergeTwoLists([1,2,3,4], [5,6,7,8,3])*/ 


/*function lol(str){
console.log( str.split(" ").map((element)=> element[0].toUpperCase() + element.slice(1)).join (" "))

}

lol("How can mirrors be real if our eyes aren't real")
output : How Can Mirrors Be Real If Our Eyes Aren't Real */

/*function alphaToNumeric(str) {
  var result = "";
  
  for (var i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i);
    var numericValue = charCode - 65 + 1; // Subtract 'A' and add 1 to get numeric value
    
    result += numericValue.toString() + " ";
  }
  
  return result.trim();
}

// Example usage:
var input = "HELLO";
var output = alphaToNumeric(input);
console.log(output); */


//revised