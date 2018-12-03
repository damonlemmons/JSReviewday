//Create a function that takes in a word and returns whether or not the word is a palindrome (same forward and backward).

//Hint:
//you do not need any loops

// Var testWord1 = “nomad”
// //expected output = “no nomad is not a palindrome”
//
// STRETCH: copy / paste and refactor to account for sentences and capital letters. Do not worry about punctuation.
//
// var testSentence1 = "Nomad DaMon"
// // expected output:  "yes Nomad DaMon is a palindrome"


// function palindrome(word){
//     var reverseString = word.split("").reverse().join("")
//     if(word === reverseString){
//         console.log(word + " is a palindrome")
//     } else {
//         console.log(word + " is not a palindrom")
//     }
// }
//
//
// palindrome("racecar")

//Write a function that takes in two or more arrays (of numbers) and checks for duplicates.  The function should output a new array with only the unique numbers.

var a = [1, 2, 3, 5, 10];
var b = [2, 30, 1, 17];

// create function that takes in two arrays and returns a new array with no duplicates

function dedupe(arr1, arr2){
    //create an empty array to push numbers into
    var emptyArr = []
    //concat the two arrays
    var combinedArr = arr1.concat(arr2)
    // console.log(combinedArr);

    //compare the concatenated array to the empty array for duplciated
    for(let i = 0; i < combinedArr.length; i++){
        if(!emptyArr.includes(combinedArr[i])) {
    //push if not included in empty array
            emptyArr.push(combinedArr[i])
        }
    }
    return emptyArr
}

console.log(dedupe(a, b))






//compare the concatenated array to the empty array for duplciated
