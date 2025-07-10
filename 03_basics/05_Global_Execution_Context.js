// +++++++++++++++++++++++++ Execution Context +++++++++++++++++++++++++

// const { useContext } = require("react");

// 01: JavaScript Execution context

// How JavaScript run or execute a file

// Whenever we run a JavaScript file, it create Global Execution context, which is kept in "this" keyword

// Global Execution Context is different in browser, node, bun and deno
// The important one is of browser which value of "This" key is "Window" object
// Sometime when our react does not work at you render it on server side, is because we don't have access to window object

// JavaScript is Single Threaded

// 02: Function Execution Context

// 03: Eval Execution Context

// A javascript file is run in two phases

// 1: Memory Creation Phase or Creation Phase
// Memory is alocated in this Phase for variable
// 2: Execution Phase
// Mathemical Operation is done in Execution phase

// Ex:
// let val1 = 10
// let val2 = 8
// function addNum(num1, num2){
//     let total = num1 + num2
//     return total
// }
// let result1 = addNum(val1, val2)
// let result2 = addNum(20, 4)

// Step for above Example
// 1: Global Execution: Creates Global Execution Context of Global Environment, which is alocated in "this" keyword
// 2: Memory Phase: in Memory Phase all the variable are kept with itself as below
// val1 -> undefined
// val2 -> undefined
// addNum -> defintion
// result1 -> undefined
// result2 -> undefined

// 3: Execution Phase:
// val1 <- 10
// val2 <- 5
// addNum -> a new Execution Context will be created which hold, a new Environment Variable Environment and Execution Thread,
// as new sandbox creates for function, hence Memory Phase and Execution Phase will be executed again, it happen for every function

// Memory Phase: which can be seen in function defintion
// val1 -> undefined
// val2 -> undefined
// total -> undefined

// Execution Context
// num1 -> 10
// num2 -> 5
// total -> 15 // total will be return to global Execution Context,
// after returning the value the Execution Context gets deleted,
// and the retuned value is assigned to the variable which holds the function returned value, here it is result1

// The same thing will repeat for the second call of function
// All JavaScript Execution is done on Thread

// addNum -> a new Execution Context will be created which hold, a new Environment Variable Environment and Execution Thread,
// as new sandbox creates for function, hence Memory Phase and Execution Phase will be executed again, it happen for every function

// Memory Phase: which can be seen in function defintion
// val1 -> undefined
// val2 -> undefined
// total -> undefined

// Execution Context
// num1 -> 20
// num2 -> 4
// total -> 24 // Total will be return to global Execution Context,
// after returning the value the Execution Context gets deleted,
// and the retuned value is assigned to the variable which holds the function returned value, here it is result2

// +++++++++++++++++++++++++ Call Stack +++++++++++++++++++++++++

// in Call Stac the first thing which get created is Global useContext
// then any function which is called, and get out of the stack we it finishes its work
// if we have funcOne() and called funcTwo(), then the funcTwo() will finish execution and get out of the stack
// then the funcOne() will finish it execution and get out of the stack

// it works as LIFO

function one() {
  console.log("One");
  two();
}
function two() {
  console.log("Two");
  three(98);
}
function three(ty) {
  console.log(`Three ${ty}`);
}

one();
two();
three(15);

// in above example One() will go to stack
// One() will bring Two() in stack
// Two() will bring Three() in stack

// when Three() work is completed it will go out of stack
// then Two() work will completed it will go out of stack
// The One() work will completed and it will go out of stack
