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


function sumDigits(num){
  //string is now a version of num
  var str = num.toString();
  //digitArray is now an array with each digit as a character
  var digitArray = str.split("");
  var sum = 0
  for(i = 0; i < digitArray.length; i++ ){
    sum = sum + parseInt(digitArray[i]);
  }
  return sum
}

function calculateSide(sideA, sideB){
  // side c = sideA^2 + sideB^2
  var sideC = sideA * sideA + sideB * sideB;
  return sideC
}


function sumArray(arr){
  let sum = 0;
  for(var i = 0; i < arr.length; i++){
    sum = sum + arr[i];
  }
  return sum
}




function checkPrime(num){
  for(var i = 0; i < num; i++){
    if(num % i === 0){
      return false 
    }
  }
  return true
}

function printPrimes(limit) {
    // make array of all numbers from 0 to limit



    for(var i = 2; i<=limit; i++) {
    // call checkPrime to see if each iteration is Prime
      if(checkPrime(i)===true) {
          console.log(i);
      }
      // feed into array of all Primes
    }
  // return array of all primes

}

// DOESNT FUCKING WORK AHHHHHHHH!!!!!
//maybe running an infinte loop? but doesnt make sense becuase it looks like i ended the loop. Whenever i run it in the browser the browser freezes.
function insertDash(num){
  //turn numbers entered into string and split them into an array
  var arr = num.toString().split("");
  //iterate through the array
  for(let i = 0; i < arr.length; i++){
    // the if conditional evaluates if there are two odd numbers next to eachother
    if(parseInt(arr[i]) % 2 != 0 && parseInt(arr[i + 1]) % 2 != 0){
      arr.splice(i + 1, 0, '-');
    }
  }
  return arr.join("")
}






