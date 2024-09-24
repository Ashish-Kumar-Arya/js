const accountId = 144553
let accountEmail = "ashish@google.com"
var accountPassword = "12345"
accountCity = "Haldwani"
// accountId = 12221 // not allowed
/*
Prefer not to use var because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity])