const accountId = 144553
let accountEmail = "Ashish@gmail.com"
var accountPassword = "12345"
accountCity = "Kanpur"
let accountState;

//accountId = 2  // not allowed.

console.log(accountId);

accountEmail = "Ashish027@gmail.com"
accountPassword = "2121212121"
accountCity = "Bengaluru"

console.log(accountEmail);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
