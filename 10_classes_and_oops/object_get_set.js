// Object base syntax for getter and setter
// it is very rare 
// you will get "function base" or "define Property" syntax in some old code
// 90% we will see class base syntax for getter and setter
const User = {
    _email: 'a@gmail.com',
    _password: 'abc',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

// we can use factoroy function as below in Object base syntax
// it creates an object base on another object
// it creates an Object base on User object 
const tea = Object.create(User)
console.log(tea.email)
// as we have writtern email in above console, but we have _email inside our object, how we can access email
// when we define getter and setter ourself, it is not assume to be method, it is special method which is kept it the top of property
// so email which is defined as method is not method but it property of the object, which get and set value from _email 
// these getter and setter are by the name of email which is kept on the top of property _email
// hence we can access _email through email and inside get we get it's value from memory, and using set to put it's value in memory

 // similarly in array .length property use get and set, where get give you the length, and set does not set any value

// _ at _email means it is private property 