// Everything we do here in the file is After ES6
// this is just Syntactic suger, everything is done using the new keyword

// Creating a class
class User {
    // whenever an object is initialzed form a class the constructor gets call automatically (using the new keyword)
    // writing constructor is required to be written all the time
    constructor(username, email, password){
        // put everything in variables
        this.username = username
        this.email = email
        this.password = password
    }
    // Encrypting password method
    encrpytPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

// Creating an object from User class
const chai = new User('chai', 'chai@gmail.com', '123')

console.log(chai.encrpytPassword())
console.log(chai.changeUsername())


// Behind the scene

function User2(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User2.prototype.encrpytPassword = function(){
    return `${this.password}abc`
}

User2.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User('tea', 'tea@gmail.com', '123')

console.log(tea.encrpytPassword())
console.log(tea.changeUsername())