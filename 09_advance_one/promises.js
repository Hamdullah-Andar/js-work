// becuase  of promises we have .then .catch and finally 
// fetch is also used recently, it works alot behind the scene. to understand that behind the scene we need to understand the promises first
// claseess are used less in javascript, 
// because of new keyword don't assume it as creating an object
// Every thing is like an Object refernce in javascript

// Promises
// the Promise object represents the eventual completion or failure of an asynchronous operation and it's resulting value
// it is not necessory that everything should happen immediatly
// many people think that only network request will complete after a delay, but it is not the case
// there are many operation which does not happen at the speed at which the programming caluculation happen or at which the programm interperatation happens
// Ex: file reading, which can not be access directly, we need kernel access and kernel bring that file to us
// Ex2: Operation are calculative some time, where server can be on a different content or do some caculation on the response you get so it take some time
// Ex3: Cryptoghraphy: while encripting the password which take some time
// and there are many similar operation whihc take some time to complete and we have two option to use
// 1. Async await: which tills the program to wait untill the operation gets completed
// 2. promises: whihc is used in modern programming, where promise complete in the future, like in mobile application where we try to activate sound device or cemera device, where we can use promises only. the name might be different in different language but the concept or same

// in promises we have three states
// 1. pending: initial state, not fullfilled not rejected
// 2. fullfilled: means that the operation is completed successfully
// 3. rejected: means that the operation is failed

// we creates promises, but mostly we consume the promises
// below is promise consume example: fetch('https://something.com').then().catch().finally()

// but we will try to create a promise and then consume it

// Promise() is an Object
// Promise is an Object representing the eventual completion or failure of an asynchronous operation.

// We can create a new Instance of an Object using the new Keyword. as we can create new instance of class in other languages
// we have the class keyword too in JavaScript
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

// Using new keyword, we can create promiseOne as above, which is an instance of Promise() Object. it was introduce in ES6

// We there was no direct access to promises in javascript, and still there was some asynchronous task, there was Q and blueBird to do these async tasks. and later it was integrated in javascript. 
// so don't need to install Q and blueBird as we it's functionality by default in javascript

// promise has two part, creating it and consuming it
// Promise reduce call back hell

const promiseOne = new Promise(function(resolve, reject){ // Promise created and stored in promiseOne, we can create a promise without holding it in a varialbe like 
    // Do Async tasks
    // Batabase calls
    // Cryptography related takse
    // network call

    setTimeout(function(){
        console.log("Async task is completed")
        resolve(); // writing resolve() inside the async task in compulsory to connect resolve to .then otherwise .then will not run
    }, 1000);
}); 

promiseOne.then(function(){ // promiseOne.then has direct connection with resolve
    // inside .then we get a call back
    // this call back automatically recieve an argument, which is return from async task from the creation of promiseOne, currently we have setTimeout()
    // to connect the resolve to .then we have to use resolve() method inside the async task of promise, currently inside setTimeout()
    console.log("Promise Consumed") // promise consume will never come before Async task, it will come after the async task is completed. currently in our case it is setTimeout()
}) 

// the promise can be created as below without storing it in a varialbe
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Aync 2 Task")
        resolve();
    }, 1000)
}).then(function(){ // we can wirte .then directly after the Promise(), when we don't want to save it in a variable, it combine both Promise() and .then() two section in one.
    console.log("Aync 2 Resolved")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username: "Ahmad", emil: "example@gmail.com"}) // we can pass date in resolve in recieve it inside .then 
    }, 1000);
})

promiseThree.then(function(userInfo){ // here we have recieved the data which is passed by resolve in promiseThree
    console.log(userInfo)
})

const promiseFour = new Promise(function(resolve, reject){
    const error = false;
    setTimeout(function(){
        if(!error){
            resolve({username: "Ahmad", password: "123"})
        } else {
            reject("ERROR: Something Went Wrong") // when error happen it will be passed through reject() and it can be recieved in .catch()
        }
    }, 1000)
})

// const username = promiseFour.then(function(user){ 
//     console.log(user)
//     return user.username
// })
// console.log(username) // if we store promiseFour.then() rerutned value in a variable, it will not be stored there, it will be passed to second .then() which come after the first one

// to avoid the call back hell, we can use as many .then() as we want, which is called chaining
// the date which is returned by earlier .then() will be recieved in next .then()

promiseFour.then(function(user){ 
    console.log(user)
    return user.username
}).then(function(username){ // whatever is return by the first .then() will be recieved in second .then(), we can limit data in the next .then() and the one after that
    console.log(username) // we can chain as many .then() as we want, the returned value of previous of earlier .then() will be recieved in next .then()
}).catch(function(error){ // if error is equal to true it will be recieved in .catch section
    console.log(error)
}).finally(() => console.log("The Promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){ // promise is something which happen in the future, which can be handled through .then() .catch() or aync() await
    const error = false;
    setTimeout(function(){
        if(!error){
            resolve({username: "JavaScript", password: "12345"})
        } else {
            reject("ERROR: JavaScript Went Wrong") 
        }
    }, 1000)
})

// async await is similar to .then() .catch(). it wait for the operation to happen for some time. if the operation takes place it move farward otherwise it give you error
// when we handle promise using async await, it does not grancefully handle the error or catch

async function consumePromiseFive() {
    try {
        const response = await promiseFive // Promise is an Object, which can not be consumed as promiseFive()
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

// when the promise is design in such a way where error might occur, problem can happen, because async await does not handle error directly
// so we have to use try catch block inside the async await
// we can handle promises using async await or .then() .catch()

consumePromiseFive()


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users') // fetch was a library at the very begining, it is just an object now. it gives us a promise
//         // console.log("RESPONSE",response)
//         const data = await response.json() // convert the response to Object, as the response is a string now, we won't be able to extract value from string
//         // as converting the response to Object take time, so we need to put await in front of it
//         console.log(data)
//     } catch (error) {
//         console.log("E: ", error)
//     }
// }

// getAllUsers()

// As fetch gives us a promise, so writing it inside the Promise will not work
// const lastPromise = new Promise(function(resolve, reject){
//     const response = fetch('https://jsonplaceholder.typicode.com/users')
//     if(response){
//         console.log('This is lastpromise resolve section', response)
//         resolve()
//     } else {
//         reject()
//     }
// })

// lastPromise.then(function(){
//     console.log("this is lastPromise response")
// })

// so we can write fetch directly which will give us a promise, then we can use .then() and catch() on it as below
fetch("https://jsonplaceholder.typicode.com/users").then(function(response){
    return response.json()
}).then((data) => {
    console.log(data)
}).catch(function(error){
    console.log("Error: ", error)
})