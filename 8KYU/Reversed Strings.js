function solution(str){
    str1 = ""
    for(let i = str.length-1;i>=0;i--) {
      str1 +=  str[i]
    }
    return str1;
  }

  //or

  function rev(str){
    return str.split("").reverse().join("")
  }