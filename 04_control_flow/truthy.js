const userEmail = []

if(userEmail) {
    console.log("Got user Email")
} else {
    console.log("Don't have user Email")
}

// flasy Value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy Value
// "0", "false", " ", [], {}, function() {}, Symbol(), BigInt(1), Infinity, -Infinity

// if(userEmail.length === 0) {
//     console.log("User Email is empty")
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty")
}

false == 0 // true
false == '' // true
0 == '' // true
false == null // false
false == undefined // false

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10; // 5 
// if the first value is null or undefined, it returns the second value
// val1 = null ?? 10; // 10

// val1 = undefined ?? 15; // 15

val1 = null ?? 10 ?? 20; // 10
val1 = null ?? undefined ?? 20; // 20

console.log(val1);


// Ternary Operator

// condition ? true : false

const teaPrice = 100;
teaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")