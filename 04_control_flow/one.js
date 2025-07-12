// if

// const isUserLoggedIn = true;
// const temprature = 25;

// if (temprature < 30) {   
//     console.log('Temperature is less then 30');
// } else {
//     console.log("Temperature is more then 30")
// }
// console.log("Execute") // this section will execute always

// <, >, <=, >=, ==, !=, ===, !==


// const score = 200
// if(score > 100){
//     const power = "Fly"
//     console.log(`User poswer is ${power}`)
// }
// console.log(`User poswer is ${power}`) // ReferenceError: power is not defined


// const balance = 1000;

// if(balance > 500) console.log("test"), console.log("test2"), // implicit scope
// console.log("test3") // by giving a comma we can write multiple statements in on line or in the next line, 
// // which is very unreadable and not recommended, but writing a single statement is Ok

// if(balance < 250) {
//     console.log("Balance is Less then 250");
// } else if(balance < 500) {
//     console.log("Balance is Less then 500")
// } else if(balance < 750) {
//     console.log("Balance is Less then 750")
// } else {
//     console.log("Balance is Less then 1200")
// }


const userLoggedIn = true;
const creditCard = true;
const loggedInFromGoogle = false;
const loggedInFromGmail = true;

if(userLoggedIn && creditCard && 2==3){
    console.log("You can purchase Courses")
}

if(loggedInFromGmail || loggedInFromGoogle){
    console.log("User Logged In")
}