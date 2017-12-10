//verbal question

//a parameter is anything in the parenthesis in the function decleration. An argument is what is passed into the function when called.

//console.log prints out the function & return returns the value of the function

//scope determines what variable are accessible. ie a global variable would be accessible to all function, while a local variable is only available to one function


function palinDrome(str){
  var arr = str.split("")
  arr = arr.reverse()
  var str2 = arr.join("")
  if(str === str2){
    return true;
  }
  return false;
}