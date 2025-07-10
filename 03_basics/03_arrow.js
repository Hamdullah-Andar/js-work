const user = {
  username: "Ahmad",
  price: 900,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`); // this refer to the current context, current context mean the variable of current block scope where "this" resists
    console.log(this);
  },
};

// user.welcomeMessage()
// user.username = "Naweed" // context is changed here
// user.welcomeMessage()

// console.log(this) // this refer or give us empty object {}

// console.log(this) // "this" in browser give us the Window Object which is global object

// function chai(){
//     let username = 'Ahmad'
//     console.log(this) // give us some value like global
//     console.log(this.username) // give us undefined, as we can not use this inside a function, we can use it inside an object only
// }

// chai()

// const chai = () => {
//     let username = "Ahmad"
//     console.log(this) // give us empty Object
//     console.log(this.username) // give us undefined
// }

// chai()

// () => {} // Arrow function basic syntax
// const addTwo = (num1, num2) => {} // assigning arrow function value to a variable

// const addTwo = (num1, num2) => {
//     return num1 + num2 // this is explicit return which return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 // this is implicit return which return num1 + num2

// const addTwo = (num1, num2) =>  ( num1 + num2 ) // this is implicit return which return num1 + num2
// when we use {} we have to use return key word
// when we use () we don't need to use return key word

const addTwo = (num1, num2) => ({ username: "Ahmad" });

console.log(addTwo(5, 8));


// const myArray = [8, 3, 2, 5, 9, 4]

// myArray.forEach()
