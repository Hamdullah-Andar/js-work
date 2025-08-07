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