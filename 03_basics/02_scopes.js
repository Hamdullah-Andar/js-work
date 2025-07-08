// var c = 300; // Declare a variable with var in block will be accessable in outside the block also, which is a problem
// What ever goes inside a scope {} is called block scope

let a = 300;

if(true){
    let a = 10;
    // console.log("Inner : ", a)
    const b = 20;
    // var c = 30
    // What ever goes outside a scope is called global scope
}

// console.log(a)
// console.log(b)
// console.log(c)


function one() {
    const username = "Ahmad"

    function two(){
        const website = "My Website"
        console.log(username)
    }
    // console.log(website)

    // two()
}

// one()

if(true){
    const username = "Ahmad"
    if(username === "Ahmad"){
        const website = " myWebsite"
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)


// +++++++++++++++++++++++++++++++++ Intersting +++++++++++++++++++++++++++++++++

console.log(addOne(8)) // addOne can be used before declaration, and it works fine
// Because function declarations are hoisted — both the name and the function body are moved to the top of the scope during compilation.

 function addOne(num){ // this is normal function
    return num + 1;
 }
 addOne(8)

//  Under the hood, JavaScript treats it like this:
//  function addOne(num) {
//   return num + 1;
// }
// console.log(addOne(8));



//  addTwo(9) // calling a function before the definition as below will show error, "ReferenceError: Cannot access 'addTwo' before initialization"
 const addTwo = function(num){ // addTwo had hold function value, which is sometime called expression
    return num + 2;
 }

 addTwo(9)