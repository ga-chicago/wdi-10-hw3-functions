// const words = 'that\'s a...'

// {
// 	const item = 'spicy meatball';
// 	console.log(item);
// 	console.log(words);
// }


// for(var i = 0; i<100; i++){
// 	// console.log(i) 
// }
// 	console.log(i) 


// function checkSquare(num) {
// 	if ((num % Math.sqrt(num)) ==0){
// 		console.log(num+ " is perfect")
// 	}else{
// 		//console.log(num + " is not perfect")

// 	}
// //OK ...... I understand it better ... thanks ... if ..... "Math.sqrt(age)" & "age" return a modulus equivalent to 0 then it's perfectly squared .... Thanks again
// 	// return true if perfect square 
// }



// function checkToLim(lim){
// 		for (let i = 0; i <= lim; i++){
// 	checkSquare(i);
// 	}
// }


// checkToLim(100)



// function sumDigits(num){

// var arr = num.toString().split("");
// var sum = 0;
//     for(var i = 0; i<arr.length; i++){
//     // add each digit to the sum of previous digits
// 	    sum = sum + parseInt(arr[i]);

// 	}
// 		    console.log(sum)
// }

// sumDigits(12);




// function calculateSide(a,b){
// 	//// side a^2 + side b^2 
// 	let pothag = Math.sqrt(a * a + b * b);
//  	console.log(pothag)
// }

// calculateSide(3,4)


// function sumArray(num){

// var arr = num
// var sum = 0;
// //console.log(arr)
//     for(var i = 0; i<arr.length; i++){
//     // add each digit to the sum of previous digits
// 	    sum = sum + (arr[i]);

// 	}
// 	return sum
// }


// // tells whether a number is prime
// function checkPrime(num) {
//   // edge case
//   if(num == 2 || num == 1) {
//   }
//   // make sure num can't be divided evenly by anything between 2 and num-1
//   for(let i = 2; i < (num); i++) {
//     // if num is divisible by i
//     if(num % i == 0) {
//       return false
//     }

//   }    
//   return true;
// }

// function printPrimes(limit){
//     // make array of all numbers from 0 to limit
//     for(var i = 2; i<=limit; i++ ) { 
//     // call checkPrime to see if each iteration is Prime
//       if(checkPrime(i)===true) {
//           console.log(i)
//         }
//     }
// }  




// function checkPalindrome(words){
// // convert to string 
// 	let wordToCheck = words.split('');
// // convet to array 
// 	wordToCheck.reverse(); 

// // reverse array 
// 	wordToCheck = wordToCheck.join('');
// // back to string
// // compare to first string 
// 	if (words == wordToCheck){
// 		return true;
// 	} else {return false;}
// }

function insertDash(numb){
	//convert to array 

	let wordToCheck = numb.toString().split('')
	//convert to array 
	console.log(wordToCheck);
	//run though for loop for each # of digits 
	for (let i = 0; i <= wordToCheck.length; i++){
	// check if odd 
	console.log(wordToCheck)
		if(parseInt(wordToCheck[i])%2==1 && parseInt(wordToCheck[i+1])%2==1){
		//if odd splice in a - 
			wordToCheck.splice(i+1, 0, '-');

		}
	}return true;
}











