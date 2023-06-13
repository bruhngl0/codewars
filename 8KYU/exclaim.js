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



    