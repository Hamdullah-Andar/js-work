class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    // every class has getter and setter with it's default behaviour
    // we can set getter or setter on the properties above
    // for all the properties that we have, it's related getter and setter get created automatically

    // get password(){
    //     return this.password.toUpperCase()
    // }

    // we can not set getter alone, if we do so, we will get "Cannot set property password of #<User> which has only a getter" error
    // we have to define it's setter too as below

    // set password(value){
    //     this.password = value
    // }

    // as we are setting this.password inside the constructor and inside the setter, hence we will get "Maximum call stack size exceeded" error
    // as the password get set by constructor and also by setter, race happens between them and hence "Maximum call stack size exceeded" occurs means call stack is filled
    // the solution for this race condition, can be done inside getter and setter as below

    get password(){
        // return this._password.toUpperCase()
        // by updating the getter as this_password, race condition in getter is also solved 
        // we have overridden setting and getting the password value from the constructor, as passowrd value gets and sets from getter and setter now
        // but email value still set from the constructor, we can override email values too in it's getter and setter 
        
        // if we want to modify the password in getter method, we can do it as below
        return `${this._password}ahmad`
    }

    set password(value){
        this._password = value
        // Actually the value is gets set and get from the getter and setter method, 
        // the value of constroctor can be different from getter and setter
        // this._password will create a new variable then the one in constructor, and will solve the race condition problem
        // updating this._password solve the setter method issue, after running the program now, will show the same error in getter
        // to solve it in getter too, we have to write this._password to solve getter issue too
    }

    // let try to define getter and setter for email
    // we have to write the name of getter and setter as it's name in the constructor
    // when we write getter for a property we have write setter for that property too
    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    // as we have used _email and _password while getting and setting the values, and it is different from the values inside the constructor
    // _email and _password is kind of private properties of class, _email and _pssword values are assinged to email and password and we can access it using email and password outside the class
}

// const ahmad = new User('ahmad@gmail.com', '123')

// As we are using uppercase we have to use below example
const ahmad = new User('ahmad@gmail.com', 'abc')

// as we have console the password below, which shows correct password
// but you want to modify or incrypt the password and not show the real one, we can use getter and setter as above
// console.log(ahmad.password)

console.log(ahmad.email)