// below is Object literal

const user = {
    username: "Ahmad",
    loginCount: 5,
    signedIn: true,
    
    getUserDetails: function(){
        console.log("User details are here")
    }
}

console.log(user.username)
console.log('UserLoginCout', user['loginCount'])
console.log(user.getUserDetails())

// if we have two arrays as below, and check it in console of browser, and run one of array methods which come with it. as we know that the mep method is one, but how it know that on which array should i loop
// the difference is define by this keyword
// this keyword consider the current context

const myArray = [1, 2, 3]
const myArray2 = [1, 2, 3, 4, 5, 6]


// in below example when we are trying to print username without this keyword, it will show error, username is not defined, as it does not know about which username you are talking about
// but if we use this keyword with username it will print the value correctly, 
// by adding this in front of the username we are telling it clearly that we are talking about current context, which is user2

const user2 = {
    username: "Ahmad2",
    loginCount: 15,
    signedIn: true,
    
    // getUserDetails: function(){
    //     console.log("User name", username)
    // },
    getUserDetails2: function(){
        console.log("User name", this.username)
        console.log(this); // printing current context, and trying to know what is in our current context
        
    }
}

console.log(user2.username)
console.log('UserLoginCout', user2['loginCount'])
// console.log(user2.getUserDetails())
console.log(user2.getUserDetails2())

console.log(this) // printing global context, currently we don't have anything in global context. it is empty object in node environment

// but running the console in browser console we get below and much more
// We get window object in browser global context this
// Window is global object
// Printing console.log(this) in node envirnoment is empty object

// Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
// 0
// : 
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// JSCompiler_renameProperty
// : 
// ƒ (t,e)
// alert
// : 
// ƒ alert()
// atob
// : 
// ƒ atob()
// blur
// : 
// ƒ blur()
// btoa
// : 
// ƒ btoa()


// Constructor function 
// as we have seen below lines of code in earlier work, where the new keyword is used
// and this new keyword is constructor function itself
// which allow us to create multiple instance of Object literal
// the new keyword is used to create separate context

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username // the left hand side is our variable and right hand side is passed to the function, and using this.username means that we are putting username in current context, whch is blank at the begining
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){ // we can write method as well here, as above all are properties
        console.log(`Welcome ${this.username}`)
    }
    
    return this // this object is returned from the function where we have put above values in it.
    // if we don't return this value, it will return the values of this. as it is done implicitly
    // but writting is good practice to make your code verbose (readable)
}

const userOne = User("Ahmad", 20, true)
// console.log(userOne) // this return eveything which is inside this including Getter, Setter method and the object values
// when we are trying to create another instance problem occurs
const userTwo = User("Ahmad two", 36, false)
console.log(userOne) // here we can see that value of first instance is overridden by the second instance, it means while printing the userOne we get value of userTwo instance

// above is not the rigth way to create instance of an object, as it last one override the value of previous one
// we have to use the new keyword (constructor function) which give us a new copy or new instance, where one instance will not be affected by other
// while using new keyword we don't get those Getter and Setter method as well
const userThree = new User("userThreeName", 40, true)
const userFour = new User("userFourName", 50, false)
console.log(userThree)
console.log(userFour)
console.log(userFour.constructor) // it will give us the information about itself. here it give us information aobut User, which is Constructor
console.log(userFour instanceof User) // it give us true value as it say that userFour is instance of User, which is true, userFrour is instance of User

// Step to remember while using new keyword
// 1: After writing the new keyword, an empty objects got create which is called instance
// 2: Constructor Function get called because of new keyword, it pack every thing it give it to you
// 3; this keyword inject in the object
// 4: the values will be returned or recieved