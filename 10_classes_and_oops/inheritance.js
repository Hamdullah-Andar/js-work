// User Parent Class
class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

// Teacher Child Class
class Teacher extends User {
    // we can override constroctor
    // if we don't want to override, we can skip it
     constructor(username, email, password){
        // As we were passing this keyword to assign variable in current context
        // but here we don't need to use this. it will take the username from the super class (User) and assign it username
        super(username)
        this.email = email
        this.password = password 
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

// Create chai Object of Teacher Child Class
const chai = new Teacher('chai', 'chai@teacher.com', '123')

console.log(chai);
chai.addCourse()

// Calling the logMe method of Teacher (parent) class using an object from Teacher (child) class, which is accessabel
chai.logMe()

// Create masalaChai Object of Prent User
const masalaChai = new User('masalaChai')

// Calling addCourse method of Teacher (chid) class using an object from User (parent) class, which is not accessable
// masalaChai.addCourse()

// Calling logMe method of of User (parent) class using an object from User (parent) class, which is accessable
masalaChai.logMe()

// Comparing Techer (child) class object with User (parent) class object, which return false 
console.log(chai === masalaChai); // false

// Trying to check whether chai is instance of Teacher (child) class which is true
console.log(chai instanceof Teacher); // true

// Trying to check whether chai is instance of User (parent) classs which is true
console.log(chai instanceof User) // true

