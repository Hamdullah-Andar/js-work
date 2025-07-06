// Singleton
// Object.create // is called the constructor way of creating object, which create singleton object only
// Singletom mean thier is only one object of its type

// Object literals
// its multiple instance can be created

const mySym = Symbol("key1") // Declaring a Symbol 
// Symbols are not enumerable — they won’t show up in for...in loops or JSON.stringify.
// They are great for defining "hidden" or "private-like" properties.

const JsUser = {
    name: "Ahmad",
    "full name": "Ahmad Ahmadi",
    [mySym]: "myKey1", // using symbol in object as key
    age: 23,
    location: "India",
    email: "email@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// the system process the key of an object as string "name", but it accept it like name also

// console.log(JsUser.email)
// console.log(JsUser["email"]) // we can access a value of object like this also, as we said earlier that key is stored as sting internally

// console.log(JsUser["full name"]) // if a key in object is declared as "full name", it can only be access using square notation as JsUser["full name"]

// console.log(JsUser[mySym]) // after declaring an object as above the key in the Object should be accessed in square bracket [mySym]: "myKey1" 
// console.log(typeof mySym) // the typeof mySym is symbol 

JsUser.email = "naweed@gmail.com" // this is how we can change the value of the an object
// console.log(JsUser)
// Object.freeze(JsUser)
JsUser.email = "update@gmail.com"
// console.log(JsUser)

JsUser.greeting = function() {
    console.log("Hello js User")
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`) // using backtick here is called String interpolation, where we can inject on variable
    // this key refer to the current object
    // current obj here is JsUser
}

console.log(JsUser)
console.log(JsUser.greeting) // this give us the reference of the function
console.log(JsUser.greeting()) // this section runs or call the function
console.log(JsUser.greetingTwo());

