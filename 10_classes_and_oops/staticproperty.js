class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    // createId(){
    //     return `123`
    // }

    // When we are trying to limit the access of some property or method to the Object which is instantiated from that class we use static keyword in front of that property or method
    // it won't be accessable to child class also
    static createId(){
        return `123`
    }
}

const ahmad = new User('Ahmad')
// console.log(ahmad.createId()); // when createId is static it would not be accessable to the object instantiated from it


class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher('iphone', 'i@iphone.com')
console.log(iphone)
iphone.logMe() // logMe method is accessable as it is not static
// console.log(iphone.createId()) // createId won't be accessable to child class also as it is static in parent class