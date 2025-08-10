// let myName = "Ahmad    "
// let myLastName = "Ahmadi    "

// console.log(myName.trueLength);

// As we have used trueLength method above , which is not available currently. 
// we want to add it and want to see the trueLength of above Sting by removing the white space, which can be done using trim() toolbar.visible
// but we want to add our own trueLength

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}

// heroPower.ahmad()

// Do we have a method called ahmad, No we don't have it. can we add it to object, Yes we can add it
// we want to add it to object which will be accessable to everything (String, Array etc) as everything goes through an Object
// but if we add it heroPower as heroPower.ahmad() it will be accessable to heroPower only, hence we want to add it to the Object, so that it should be available to everything (String, Array ...)

Object.prototype.ahmad = function(){
    console.log(`Ahmad is Present in all Objects`);
}

// heroPower.ahmad() // Ahmad is Present in all Objects

// myHeros.ahmad() // Ahmad is Present in all Objects
// As we have added ahmad method to Object, hence it is available to myHeros Array also 



// if we give the power (add method using prototype) to array will it be accessable inside Object also (it is intersting)

Array.prototype.heyAhmad = function(){
    console.log(`Ahmad say Hey`)
}

myHeros.heyAhmad();
// heroPower.heyAhmad(); // when we give power to array (assign a method to it) it will be accessable to arrays only, not to object sting and others ...


// Inheritance

// each object is a separate instance, they don't share anything with each other
// each have it's default properties
// when we want to exchange information between Objects we have to link them with each others
// to link them we have something called prototype which can be find inside prototype as __proto__, which can be access using dot notation or uisng __proto__ as above in TASupport object

const User = {
    name: 'chai',
    email: 'chai@gmail.com'
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // We are referncing TASupport prototype to TeachingSupport
    // so now when we want to create a new object of TASupport using new keyword we can get TeachingSupport Access too
}
// we can share the access or information between outside the object too as below
Teacher.__proto__ = User // here Teacher can access all the properties of User Object, this is interitance (prototypal Inheritance) where we can access one object properties in another (here we can access User properties in Teacher)
// above approaches got a little outdated (the __proto__ one which is used inside or outside the Object) below is the modern syntax

// modern Syntax
// what ever we can see in prototype in console of chrome developer tools is modern structure
// we have a special method called setPrototypeOf, which workes exactly the same as above outdated approaches, but it has better and easy syntax (Syntactic Sugar)
Object.setPrototypeOf(TeachingSupport, Teacher) // we are assiging or giving access to all properties of Teacher to TeachingSuport


// Coming back to problem which we were trying to work on at the top of the current file
// we are adding a property called trueLength to sting which gives us true Length

let anotherUsername = "anotherName     "

String.prototype.trueLength = function(){
    console.log(`${this}`) // here this will give us whatever sting call trueLength method
    console.log(`True Length is: ${this.trim().length}`)
}

anotherUsername.trueLength() // here this keyword value inside trueLength method is anotherName and trueLength value is 11
"Ahmad".trueLength() // here this keyword value inside trueLength method is Ahmad and trueLength value is 5
"Mahmood".trueLength() // here this keyword value inside trueLength method is Mahmood and trueLength value is 7