// Immediately Invoked Function Expressions (IIFE)

// ther are two reason for using IIFE
// Global Scope variable accessibility may create problem sometime in block scope, so we use IIFE to avoid Global scope polution in block scope
// To Execute it Immediatly

// below is normal function
// function chai(){
//     console.log("DB Connected")
// }
// chai()

// function chai(){
//     console.log("DB Connected")
// }() // assuming we have invoked it immediatly, which does not work

(function chai(){
    // named IIFE
    console.log("DB Connected")
})(); // as parenteses can create a block and we can work their, so putting the a parenthesis aroung the function defintion run the function immediatly
// When we are using more the one IIFE we have to End the earlier IIFE with semicolon ; as above IIFE, Javascript add semicolon in other case but not in this one


// IIFE Syntax
// ()() // the first pair of parenthesis is for function definition and the second pair of it is for execution

// IIFE Syntax with arrow function
// (()=>{})()

(() => {
    // unnamed IIFE
    console.log("DB Connected Two")
})();

// Passing Vairiable to IIFE
((name) => {
    console.log(`DB Connected Two ${name}`)
})('Ahmad')