const name = "Ahmad"
const repoCount = 10

// console.log(name + repoCount + " Value")

console.log(`My name is ${name} and I have ${repoCount} repositories.`) //  Template literals allow for multi-line strings and string interpolation

const gameName = new String("Call-of-Duty")
// console.log(gameName[0]) // String object, not a primitive string
// console.log(gameName.__proto__) // String object prototype;

// console.log(gameName.length) // Length of the string object
// console.log(gameName.toUpperCase()) // Convert to uppercase
// console.log(gameName.charAt(0)) // Get character at index 0
// console.log(gameName.indexOf("l")) // Get index of substring

const newString = gameName.substring(0, 4) // Get substring from index 0 to 4 
console.log(newString) // "Call"

// we can not use negative indices with substring

const anotherString = gameName.slice(-10, 4) // Get substring from index -10 to 4
console.log(anotherString) // "Call"

const newStringOne = "     Ahamd   " // String with leading and trailing spaces
console.log(newStringOne) // "     Ahamd   "
console.log(newStringOne.trim()) // Remove leading and trailing spaces


const url = "https://www.example.com/path%20fragment"

console.log(url.replace("%20", "-")) // Replace first occurrence of "%20" with "-"

console.log(url.includes("example")) // Check if the string includes "example"

console.log(gameName.split("-")) // Split the string into an array using "-" as the delimiter