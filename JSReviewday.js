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


function palindrome(word){
    var reverseString = word.split("").reverse().join("")
    if(word === reverseString){
        console.log(word + " is a palindrome")
    } else {
        console.log(word + " is not a palindrom")
    }
}


palindrome("racecar")
