// ok it mean as we have premitive and none premitive type, 
// in premitive are store in stack while copying it, it create a separate copy of the object, 
// but in none premitive it which are store in heap memory like function, array, object.

// here also the premitive type value of an object are deep copied and the non premitive type in objects are shallow copied

// ✅ Primitive types (stack) → copied by value → act like deep copy
// ❗ Non-primitive types (heap) → copied by reference → shallow copy in objects

// Arrays Are Objects in JavaScript
// So yes — arrays follow the exact same rules as objects:


const myArray = [1, 2, 3, 4, 5];
const myArray2 = myArray; // shallow copy, here we are not creating a new array, we are just referencing the same array in memory, this is not copying, it's just a reference
console.log(myArray2); // [1, 2, 3, 4, 5]
myArray2[0] = 100;
console.log(myArray2); // [100, 2, 3, 4, 5]
console.log(myArray); // [100, 2, 3, 4, 5]

const myArray3 = [...myArray]; // deep copy
console.log(myArray3); // [100, 2, 3, 4, 5]
myArray3[0] = 200;
console.log(myArray3); // [200, 2, 3, 4, 5]
console.log(myArray); // [100, 2, 3, 4, 5]


const myArray4 = myArray.slice(); // deep copy
console.log(myArray4); // [100, 2, 3, 4, 5]
myArray4[0] = 300;  
console.log(myArray4); // [300, 2, 3, 4, 5]
console.log(myArray); // [100, 2, 3, 4, 5]

// as i have all primitives' values in my array hence the copy is deep, 
// but you used nested array, 
// hence when you are copying using spread operator or slice, 
// it is creating shallow copy of the nested array and all other primitive value are deep copied

// Primitive-only: deep by effect
const a = [1, 2, 3];
const b = [...a];
b[0] = 100;
console.log(a); // [1, 2, 3] ✅

// -----------------------------

// Nested: shallow copy exposed
const aa = [1, 2, [3, 4]];
const bb = [...aa];
bb[2].push(5);
console.log(aa); // [1, 2, [3, 4, 5]] ❗


const newArray = new Array(10); // creates an array of length 10 with empty slots
console.log(newArray); // [ <10 empty items> ]
newArray[0] = 1; // you can assign values to the array
newArray[1] = 2;    
console.log(newArray); // [ 1, 2, <8 empty items> ]



const arrayWithValues = new Array(1, 2, 3, 4, 5); // creates an array with the specified values
console.log(arrayWithValues); // [1, 2, 3, 4, 5]
console.log(arrayWithValues.length); // 5, the length of the array
console.log(arrayWithValues[0]); // 1, accessing the first element of the array
// arrayWithValues.push(6); // adds a new element to the end of the array
// arrayWithValues.push(7, 8); // adds multiple elements to the end of the array
// arrayWithValues.pop(); // removes the last element from the array

// arrayWithValues.unshift(23); // adds an element to the beginning of the array
// arrayWithValues.unshift(24, 25); // adds multiple elements to the beginning of the array

// arrayWithValues.shift(); // removes the first element from the array

// console.log(arrayWithValues.includes(3)); // true, checks if the array includes the value 3
// console.log(arrayWithValues.indexOf(4)); // 3, returns the index of the value 4 in the array

const newArrayToJoin = arrayWithValues.join(); // joins the elements of the array into a string
console.log(newArrayToJoin); // "1,2,3,4,5", the elements are joined with a comma by default

const newArrayToJoinWithSeparator = arrayWithValues.join(' - '); // joins the elements with a custom separator
console.log(newArrayToJoinWithSeparator); // "1 - 2 - 3 - 4 - 5", the elements are joined with " - " as the separator

console.log(arrayWithValues); // [1, 2, 3, 4, 5, 6, 7]

// slice, splice

console.log("A------------------", arrayWithValues); // [1, 2, 3, 4, 5, 6, 7]
const slicedArray = arrayWithValues.slice(1, 4); // creates a shallow copy, the final elements are not included  

console.log(slicedArray); // [2, 3, 4], the elements from index 1 to 3 are copied
console.log("B------------------", arrayWithValues); // [1, 2, 3, 4, 5, 6, 7]

const splicedArray = arrayWithValues.splice(1, 3); // removes 3 elements starting from index 1 and returns them, it modifies the original array
console.log("C------------------", arrayWithValues); // [1, 5, 6, 7], the original array is modified
console.log(splicedArray); // [2, 3, 4], the removed elements

