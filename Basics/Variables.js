const accountId = 2434434;
let accountEmail = "name123@gmail.com";
var accountPassword = "123456";
accountcity = "Jaipur";
let accountstate;


// accountId = 3; //not allowed
accountEmail = "joe12@gmail.com";
accountPassword = "323323";
accountcity = "Bengaluru";

console.log(accountId)

console.table([accountId , accountEmail, accountcity, accountPassword, accountstate])


/*
Prefer not to use var 
because of issue in block scope and functional scope
*/