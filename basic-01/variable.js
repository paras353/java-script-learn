const accountId = 1291
let accountMail = "test@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;



// accountId = 121 Const not allow to change value
accountMail = "testing2@gmail.com"
accountPassword = "Hello@321"
accountCity = "New Delhi"


/*
    Prefer  not to use var 
    bcz of issue  in block scope and functional scope
*/
console.table([accountId, accountMail, accountPassword, accountCity, accountState])