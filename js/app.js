//******************VERBAL QUESTIONS*************************
// a. Paramter and Argument difference ~ a parameter is a variable you declare in the parentheses of a function and
// the argument is the value you assign to the parameter.

// b. Within a function the difference between RETURN and CONSOLE.LOG ~ console.log will log anything into the console.
// Inside of a function if will print any value you place inside it. The return statement will end the function and
// retun a specified value to the function caller.

// c. Concept of Scope ~ scope is the context in which the values and expressions are visable (or useable) for reference.
// The clearest example of this is local variables that are only defined inside a given function or a global variable
// which can be accesed from anywhere in the code.

//*****************PALINDROME*********************************
// function checkPalindrome (str){
//     var caseString = str.toLowerCase().split("").filter(c => c != ' ').join("");
//     var reverseString = caseString.split("").reverse().join("");
//     return reverseString == caseString;
// }
// console.log( checkPalindrome("RaDar") );

// convert all to lowercase then turn to array with split then use filter to loop through each charater and removes the space charaters and then use join to convert back to a string // turn back into array to reverse then back into a string // then check for equality

//****************DIGIT SUM************************************
/*
function sumDigits(num){
    //split to array to add each
    var toString = num.toString();
    var splitNum = toString.split("");
    // split is not a function of an integer so you need to convert to a string first

    let sum = 0; //placeholder for value you can iterate through array with to later add each
    for(i=0; i < splitNum.length; i++){
        // to see sum being iterated and added ~ console.log(sum, "= sum");
        sum = sum + parseInt(splitNum[i]);
        // change back to integer to add
    }
    return sum;
}
sumDigits(42);
*/
//*******************PYTHAGONAL*********************************
// function calculateSide(sideA, sideB){
//     var sideC = Math.pow(sideA, 2) + Math.pow(sideB, 2);
//     return Math.sqrt(sideC);
// }
// calculateSide(8,6);

//*********************SUM ARRAYS********************************
// function sumArray(arr){
//     let product = 0;
//     for (i=0; i < arr.length; i++){
//         product = product + arr[i];
//     }
//     return product;
// }
// sumArray([2,3,4]);



//*****************PRIME NUMBERS********************************
// function checkPrime(num){
//     for(let i=2; i <= Math.sqrt(num); i++){
//         if(num % i === 0) {
//             return false
//         }
//     }
//     return true;
// }
//
// function printPrimes (limit){
//     for(let i=1; i <= limit; i++){
//         if (checkPrime(i)) {
//             console.log(i);
//         }
//     }
// }
// printPrimes(97);


//********************INSERT DASH*********************************
//cant iterate through numbers
// console.log(23423);
function insertDash (num){
    let toArray = num.toString().split("");
    let newArray = [];  // for pushing in one by one (our output)

    // loop through toArray TO BUILD our output
    for(i=0; i < toArray.length; i++){
        // add this digit of toArray
        newArray.push(toArray[i]);

        // if this digit of toArray and the digit after this of toArray are both odd
        // compare equal value
        // if(parseInt(toArra[i]) % 2 === 1 && parseInt(toArray[i + 1])){
        if(toArray[i] % 2 === 1 && toArray[i + 1] % 2 === 1){   // [i + 1] is how you acess the next iteration of the array
            newArray.push("-");
        }
        else if (toArray === newArray.length -1){
            // dont add dash
        }
    }
    return newArray.join('');
}

console.log(insertDash(454793));













