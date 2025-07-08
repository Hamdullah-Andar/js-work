// var c = 300; // Declare a variable with var in block will be accessable in outside the block also, which is a problem
// What ever goes inside a scope {} is called block scope

let a = 300;

if(true){
    let a = 10;
    console.log("Inner : ", a)
    const b = 20;
    // var c = 30
    // What ever goes outside a scope is called global scope
}

console.log(a)
// console.log(b)
// console.log(c)
