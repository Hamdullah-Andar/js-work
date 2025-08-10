// JavaScript’s prototypal behavior

// we do below practice in console of chrome developer mode
const newHero = ["Hulk", "Spiderman"] // declare an array, you can declare arrary or object

// After hitting Enter, we can see undefined, as we have not returned anything, it is decalre and the space is allocated in memory
// After writting newHero, console gives me some extra information which you can see as [[Prototype]]: Array(0) and we will discuss about it below, beside the below information
// 0: 'hulk' // first array element
// 1: 'spiderman' // second array element
// length 2 // array length property

// we will discuss about this Prototype

// JavaScript default behaviour is Prototypal behviour, which means that JavaScript does not compromise very soon, which means that when javascript does not find about some data, it goes and check it in parent and grant parent and more untill it reach to null value, which is called JavaScript Prototypal behaviour
// because of link to this prototypal behaviour "this" keyword work. it means that because of JS prototypal behaviour we have "new", "this", class and Prototypal Inheritance
// we don't have access to "this" keyword an arrow function, because prototype comes there

// When open prototype we have array methods as flatMap, forEach, indexOf, join
// When we scroll down a little to see another [[Prototype]]: Array(0) at the end
// As said earlier that JS does not compromise sooner, when it does not get the data, it search in the parent 
// After opening the prototype for the seocond then we don't get another prototype
// But we have Getter and Setter, as they are function definition, they have it's own ptototype

// we have to know where the prototype stops
// As we open the first Prototype wich was [[Prototype]]: Array(0)
// Then we open the second Prototype wich was [[Prototype]]: Object(0), 
// Then we get protype in Getter and Setter
// But As we can see a new Prototype at the end of each prototype, that stop at Object level prototype ( [[Prototype]]: Object(0) )

// We can check prototyping in diagram

// As everything in JavaScript is an Object, hence array is also an object

// Declare a String or Array, take an array right now, and array parent is Object, and Object parent is null (it means thier is no parnet for Object, here the prototype reference is null)
// if we take an String, It's prototype redirect to Object, and Object parent is null
// hence we can say that everything in JavaScript is an Object, and all those properties which are availabe in Object, they are availabe in Sting and array also, whether those Object properties are usable or not, it is a separate topic
// As we said about inheritance, Properties from Object are inherited to Stirng and array. it the same for everything in JavaScript

// About funciton
// is function a function or an Ojbect, we have to check this in VS code as below
// Function is a function and function is an Object too, because we have all it's function related properties and we can make it behave like an Object too
// Object is end of the world, we can move it beyond the Object, as we can not move beyong C Drive in windows or / in linux
// but we have Getter and Setter in Object we can add more refernce, but we don't do it normally

function multiplyBy5(num){
    return num * 5;
}

multiplyBy5.power = 2; // As we can see that we have decalre a function but dot access is used with Ojbect. is function also an Object. YES IT IS ALSO OBJECT

console.log(multiplyBy5(5))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype) // can we access prototype here too. Yes we can access prototype which is empty object, it set Context by default, it is that method "this"
// prototype in above line give us only method, it gives us some internal properties, if we add this.num = num in multiplyBy5 we can get to num property too, but it will not be visible, we have take and use it to be visible

function createUser(username, score){
    this.username = username // writing username = username creates confusion, so we use "this" keyword, this keyword set the current context
    this.score = score
}

// can we add our own properties in prototype, YES WE CAN DO IT as bellow
// below we have inject our own method to createUser function
createUser.prototype.increment = function(){
    // score++
    this.score++
}

// there is a problem we are tring to create two instance of createUser. increment method gets confused, which value should i increment tea, chai, as we dont have context here
// to define it's context use this.score++ in above increment method, so which ever call increment his value will be incremented
// we can remember "this" as. "Jis ne bhi bolaya hu, Aus ki pass jao" (this means Jis)
const chai = new createUser('chai', 20) // adding the new keyword in this line tell the createUser that we have added some new methods, printMe and increament
const tea = createUser('tea', 220)

// let inject another method
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

// we dont wirte as myArray.prototype.map, as we have multiple prototype, writing it will be repeatitve code. hence JS handles it by default hence we can also access our injected method in the same way, without writing the prototype
chai.printMe() // this way it will give me an error as "createUser.printMe is not a function", but after adding the new keyword in chai instance of of createUser function object, we will not get the error as we are creating a copy of the object using new keyword
// console.log(createUser.prototype) // but if we print the prototype the printMe method is added in the prototype as "{ increment: [Function (anonymous)], printMe: [Function (anonymous)] }"
    


// About new keyword

// Here's is what happens behind the scenes when the new keyword is issued:

// A new object is created: the new keyword initiates the creation of a new JavaScript object

// A ptototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
// this means that it has access to properties and methods defined on the constructor's prototype.

// note: JavaScript does give us constructor function through classes, it give us constructor function through new keyword

// The constructor is called: the constructor function is called with the specified arguments and this is bound to the newly created object. if no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value

// The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (Object, array, funciton etc), the newly created object is returned