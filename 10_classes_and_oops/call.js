// you might have heard Call, Bind and Apply together
// So they can be covered together
// Covering them at thier usage time will be better, to better understand thier usage
// call and bind have been used alot in React version 1, as syntactic suger was less

// usage of call keyword
// As we have call stack, we everything gets executed
// inside Call Stack we have Global Execution Context, which is always there 
// function Execution Context gets added when the function gets called
// When function execution finishes, it get out of call stack
// it happens in every functional Execution context

// What happen when we call a function inside another function
// How to tell in to inner function that What this keyword refer to in the outer function
// it was a problem in JS, but it is mostly solved now
// it happens the same in arrow function too
// in such satuation when we have inner function and this keyword does not refer to outer function, but here this keyword refers to refers to global execution context, and it's probelm is as below
// this keyword as global Execution context in brower is window object
// this keyword as global Execution context is {} in node environment

// this problem is currently solved in react by overlapping or abstaction, but the problem is still there

// in below example we have created a separate function for setting username as we are checking some role

function SetUsername(username) {
    // Complex calculation on DB
    this.username = username
    console.log("Called")    
}

function createUser(username, email, password) {
    // SetUsername(username) // we call SetUsername function to set the username for after the calucaltion inside that function
    // SetUsername.call(username) // we can explicitly call the SetUsername using call method to keep the refernce of function, after completing the execution it gets remove from the call stack and memory get clean
    SetUsername.call(this, username) // we have to pass the createUser this keyword to save everything in my (createUser) context, when the outer function complete it's execution, it give everything to the outer function
    
    this.email = email
    this.password = password
}

const Chai = new createUser("Chai", "chai@gmail.com", "123")
console.log(Chai); // createUser { username: 'Chai', email: 'chai@gmail.com', password: '123' }
