// How we can use getter and setter throug prototype
// there was no classes before, there were function, and we can do it using function as below
// it is function base syntax for getter and setter
// or technically it is call "define Property" base syntax for getter and setter

function User (email, password){
    this._email = email
    this._password = password

    // using the class we get setter and getter
    // but here Object itself allow us to define property as below
    // function behave as function and Object
    // as parameters of defineProperty we pass below arguments
    // first we are giving our this keyword to it, 
    // second email, wiring _email is not required in defining the get and set method, it will be handled automatically 
    // third and {} object where we have to define our getter and setter
    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    
    // we can do similar for password too
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}

const ahmad = new User('ahmad@gmail.com', 'ahmad')
console.log(ahmad.password)