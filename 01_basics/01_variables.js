const accountId = 34343
let accountEmail = "email@gmail.com"
var accountPassword = "password123"
accountCity = "Kabul"

// accountId = 12345; // not allowed, const cannot be reassigned

accountEmail = "anotherEmail@gmail.com"
accountPassword = "newPassword456"
accountCity = "Kandahar"
let accountState

console.log(accountId);

/* 
Prefer not to use var, use let or const instead.
because of issue in block scope and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);