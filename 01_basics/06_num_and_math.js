const score = 400;
// console.log(score);
// console.log(typeof score); // number
// console.log(score.toString()); // Convert number to string
// console.log(typeof score.toString()); // string
// console.log(score.length); // undefined, because score is a number, not a string
// console.log(score.toString().length); // Convert number to string and get its length

const balance = new Number(1000);
// console.log(balance)

// console.log(balance.toString().length); // Convert number to string and get its length
// console.log(balance.toFixed(2)); // Format number to 2 decimal places

const otherNumber = 4589.5656

// console.log(otherNumber.toPrecision(3)); // Format number to 3 significant digits,

// it keeps the first 3 digits and rounds the rest, 
// if the number is less than 3 digits, it will add trailing zeros
// if the number is more than 3 digits, it will round the number to 3 significant digits

const hundreds = 1000000

// console.log(hundreds.toLocaleString()); // Convert number to locale string, adds commas for thousands
// console.log(hundreds.toLocaleString("en-IN")); // Convert number to locale string for India, adds commas for thousands



// ++++++++++++++++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math); // Math object provides mathematical constants and functions
// console.log(Math.abs(-10)); // Absolute value, returns 10
// console.log(Math.round(4.6)); // Round to nearest integer, returns 5
// console.log(Math.ceil(4.1)); // Round up to nearest integer, returns 5
// console.log(Math.floor(4.9)); // Round down to nearest integer, returns 4
// console.log(Math.max(1, 2, 3, 4, 5)); // Maximum value, returns 5
// console.log(Math.min(1, 2, 3, 4, 5)); // Minimum value, returns 1

// console.log(Math.random()); // Random number between 0 and 1, returns a float
// console.log(Math.random() * 10); // Random number between 0 and 10, returns a float
// console.log(Math.floor(Math.random() * 10) + 1); // Random integer between 1 and 10, returns an integer

const min = 10;
const max = 20;

Math.random() * (max - min + 1) + min; // Random number between min and max, returns a float
console.log(Math.floor(Math.random() * (max - min + 1) + min)); // Random integer between min and max, returns an integer
// max - min + 1 is used to include both min and max in the range
// + min is used to shift the range to start from min