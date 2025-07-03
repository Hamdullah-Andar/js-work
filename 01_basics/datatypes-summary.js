// Data types

// JavaScript has dynamic typing, meaning variables can hold any type of data
// and can change types at runtime. 

// Primitive data types
// 7 types : String, Number, BigInt, Boolean, Undefined, Null, Symbol

const score = 100; 
const scoreValue = 100.3; 

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol(123);
const anotherId = Symbol(123); 

// console.log(id === anotherId); 

const bigNumber = 123456789012345678901234567898989801234567890n


// Reference data types (Non-primitive)
// Objects, Arrays, Functions

const heros = ["firstHero", "SecondHero", "ThirdHero"];
const myObj = {
    name: "John",
    age: 30,
    isLoggedIn: true
};

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof anotherId);

// https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-ecmascript-specification-types



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack memory vs Heap memory

// Stack (Primitive), Heap (Non-primitive or reference)

// Stack memory is used for static memory allocation and stores primitive data types.
// It is fast and has a fixed size. Variables in stack memory are stored in a last-in, first-out (LIFO) manner.

// Heap memory is used for dynamic memory allocation and stores reference data types.
// It is slower and has a variable size. Objects, arrays, and functions are stored in heap memory.

let myYoutubename = "hiteshchoudharydotcom"; 

let anothername = myYoutubename; // Stack memory, primitive type
anothername = "Chaiaurcode"; // Changing anothername does not affect myYoutubename

console.log(myYoutubename); // Ahmad
console.log(anothername); // John


let userOne = {    
    email: "user@gmail.com",
    upi: "user@ybl",         
}

let userTwo = userOne; // Heap memory, reference type

userTwo.email = "hitesh@google.com"; // Changing userTwo affects userOne

console.log(userOne.email); 
console.log(userTwo.email); 