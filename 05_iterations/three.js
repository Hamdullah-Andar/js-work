// for of

// higher order functions are array specific methods
// forEach, map, filter, reduce, find, some, every

// ["", "", ""]
// [{}, {}, {}]


// The **for...of** loop lets you iterate over iterable objects like:
// Arrays
// Strings
// Maps
// Sets
// NodeLists (in the DOM)

// syntax
// for (const element of object) { // the object can be an array, string, map, set, etc. which is iterable and can be looped over, 
// // don't confuse the object with the object in JavaScript, here the object is an iterable object like an array or string, 
// // and the element will be the value of each iteration, can be named anything, 
// // the increment is done automatically by the for...of loop,
// // the length of the loop is determined by the length of the iterable object,

// }

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num); // This will log each number in the array
}

const greetings = "Hello World!"
for(const greet of greetings){ // the common practice base on the iterable object is to use a singular form of the object name, like greet for greeting
    // // if(greet === ' '){
    // //     continue; // This will skip the space character and continue to the next iteration
    // // }
    // // if(greet === ' '){
    // //     break; // This will break the loop if a space character is encountered, but in this case, it won't be reached because of the continue above
    // // }
    // console.log(`Character: ${greet}`); // This will log each character in the string
}


// Maps

const myMap = new Map(); // Creating a new Map, Map is a collection of key-value pairs, and it is an iterable object
// everything in javascript is an object, and Map is also an object, but it is a special type of object that allows you to store key-value pairs, 
// it store unique keys and values, and it is iterable, so you can use for...of loop to iterate over it
// map remember the order of insertion, so the order of the elements will be the same as the order of insertion
// the key in the map is unique, and the value can be anything, it can be an object, array, string, number, etc.

myMap.set('IN', 'India'); // Adding key-value pairs to the map
myMap.set('US', 'United States');
myMap.set('UK', 'United Kingdom');
myMap.set('CA', 'Canada');
// myMap.set('IN', 'Indiana'); // This will update the value for the key 'IN', as keys in a map are unique

// console.log(myMap); // This will log the map object with the key-value pairs

// for (const key of myMap){
//     console.log(key); // This will log each key-value pair as an array, like ['IN', 'India'], ['US', 'United States'], etc.
// }

for (const [key, value] of myMap){ // This will destructure the key-value pair into key and value variables, this is array destructuring
    // console.log(key, value); // This will log each key and its corresponding value
}


const myObject = {
    game1: 'NFS',
    game2: 'FIFA',
    game3: 'PUBG',
}

// for (const key of myObject){
//     console.log(key); // This will not work as expected, because myObject is not iterable, it is a plain object, and for...of loop cannot be used on it
// }

