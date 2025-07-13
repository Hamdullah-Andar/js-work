const myObject = {
    js: "javascript",
    cpp: "C++",
    py: "python",
    java: "java",
}

for (const key in myObject) {
    // console.log(key)
    console.log(`${key} is for ${myObject[key]}`); // This will log each key and its corresponding value in the object, 
    // myObject[key] will give the value for the key, myObject[key] is used when the key is dynamic, like in a loop, 
    
    // where myObject.js will give 'javascript' always as written below, but myObject[key] will give the value for the key that is currently being iterated over
    console.log(`${key} is for ${myObject.js}`);
}

const programming = ["js", "cpp", "py", "java"];
for (const key in programming){
    console.log(key); // This will log the index of each element in the array, like 0, 1, 2, 3
    console.log(typeof key); // This will log 'string' because the key is a string representation of the index
    console.log(programming[key]); // This will log the value of each element in the array
}

// Avoid using for...in on arrays unless you're doing something very specific. It's better suited for objects.
const fruits = ['apple', 'banana', 'cherry'];
for (const index in fruits) {
  console.log(index);         // "0", "1", "2"
  console.log(fruits[index]); // "apple", "banana", "cherry"
}
for (const fruit of fruits) {
  console.log(fruit);  // "apple", "banana", "cherry"
}

// const myMap = new Map(); 
// myMap.set('IN', 'India'); 
// myMap.set('US', 'United States');
// myMap.set('UK', 'United Kingdom');
// myMap.set('CA', 'Canada');

// for (const key in myMap) { // map is not iterable so can not use for...in loop, but we use other methods to iterate over map
//     console.log(key) 
// }

// We can use for...of loop to iterate over map, but not for...in loop
// "for in" is used for object
// "for of" is used for ararys but there are some other loops also to be used for array