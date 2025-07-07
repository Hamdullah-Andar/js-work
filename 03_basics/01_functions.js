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

// function calculateCartPrice(num1){ // this parameter will get the first value in the list
//     return num1
// }

// function calculateCartPrice(...num1){ // here the 3 dots are called the Rest Operator which accept multiple values
//     return num1
// }

function calculateCartPrice(val1, val2, ...num1){ // here the val1 and valu1 will fist and second value and the Rest Operator will accept the rest of the values
    return num1
}

console.log(calculateCartPrice(400, 399, 5000, 6000))

const user = {
    username: "Ahmad",
    price: 594
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and the price is ${anyObject.price}`)
}

// handleObject(user)
handleObject({
    username: "Salim",
    price: 984
})

const newArray = [300, 6000, 5000, 7000]

function returnThirdValue(acceptArray){
    return acceptArray[2]
}

// console.log(returnThirdValue(newArray));
console.log(returnThirdValue([400, 200, 100, 3400]));
