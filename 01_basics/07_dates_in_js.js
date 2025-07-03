let myDate = new Date(); // current date and time
// console.log(myDate);
// console.log(typeof myDate); // object

// console.log(myDate.toString()); // Convert date to string
// console.log(typeof myDate.toString()); // string

// console.log(myDate.toString().length); // length of the string representation
// console.log(typeof myDate.toString().length); // number

// console.log(myDate.toDateString()); // Convert date to date string
// console.log(typeof myDate.toDateString()); // string

// console.log(myDate.toISOString()); // Convert date to ISO string
// console.log(typeof myDate.toISOString()); // string

// console.log(myDate.toLocaleString()); // Convert date to locale string
// console.log(typeof myDate.toLocaleString()); // string

// console.log(myDate.toLocaleDateString()); // Convert date to locale date string
// console.log(typeof myDate.toLocaleDateString()); // string

// console.log(myDate.toLocaleTimeString()); // Convert date to locale time string
// console.log(typeof myDate.toLocaleTimeString()); // string

// console.log(myDate.getTime()); // Get time in milliseconds since Jan 1, 1970
// console.log(typeof myDate.getTime()); // number

// console.log(myDate.toJSON()); // Convert date to JSON string
// console.log(typeof myDate.toJSON()); // string



// let myNewDate = new Date(2025, 0, 23); // specific date
// let myNewDate = new Date(2025, 0, 23, 5, 3); // specific date and time 
// let myNewDate = new Date("2023-01-14"); // specific date in ISO format
let myNewDate = new Date("01-24-2025"); // specific date in MM-DD-YYYY format
// console.log(myNewDate.toLocaleString()); // Convert date to locale string

let myTimeStamp = Date.now(); // Get current timestamp in milliseconds
// console.log(myTimeStamp);
// console.log(myNewDate.getTime()); // Get time in milliseconds since Jan 1, 1970 for myNewDate
// console.log(Math.floor(Date.now() / 1000)); // Get current timestamp in seconds


// console.log(myTimeStamp); // prints the timestamp
// Date.now() returns the number of milliseconds since January 1, 1970, 00:00:00 UTC
// new Date().getTime() returns the same value as Date.now()
// both methods return the current timestamp in milliseconds
// new Date() returns the current date and time as a Date object

// console.log(typeof myTimeStamp); // number
// console.log(new Date(myTimeStamp)); // Convert timestamp to date object 
// console.log(new Date(myTimeStamp).toLocaleString()); // Convert timestamp to locale string


let newDate = new Date();
console.log(newDate); // current date and time
console.log(newDate.getMonth()); // Get month (0-11, where 0 is January and 11 is December)
console.log(newDate.getMonth() + 1); // Get month (1-12, where 1 is January and 12 is December)
console.log(newDate.getDay()); // Get day of the week (0-6, where 0 is Sunday and 6 is Saturday)

console.log(`It is the month of ${newDate.getMonth() + 1} and the day of the week is ${newDate.getDay()}`); // Template literals for string interpolation

console.log(newDate.toLocaleString("default", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Asia/Kabul"
}))