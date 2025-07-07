function sayName() {
  console.log("A");
  console.log("H");
  console.log("M");
  console.log("A");
  console.log("D");
}

// sayName()

// function addTwoNumbers(number1, number2){ // number1, number2 are Parameters
//     console.log(number1 + number2)
// }

// function addTwoNumbers(number1, number2){ // Parameters
//     let result = number1 + number2
//     console.log("Ahmad")
//     return result
//     console.log("Ahamd") // this section will never run after the return keyword
// }

function addTwoNumbers(number1, number2){
    return number1 + number2
}

// addTwoNumbers() // resulted with NaN
// addTwoNumbers(3, "4") // resulted with 34
// addTwoNumbers(5, "a") // resulted with 5a
// addTwoNumbers(9, null) // resulted with 9

const result = addTwoNumbers(5, 3) // 5, 3 are aurgments
// console.log("Result : ", result) // resulted with undefined

function loginUserMessage(username = "Naweed"){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

// loginUserMessage("Ahmad") // No value is printed here
// console.log(loginUserMessage("Ahmad")) // Ahmad just logged in
// console.log(loginUserMessage("")) // just logged in
console.log(loginUserMessage()) // undefined just logged in