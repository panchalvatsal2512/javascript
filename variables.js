/*
Variables ek container hote hain jisme hum data ko store kar sakte hain

1. Declaration of Variables:

JavaScript mein variables declare karne ke liye kuch different keywords hote hain:

var: Yeh purana method hai, lekin ab kam use hota hai kyunki yeh scope issues create kar sakta hai.
let: Yeh zyada flexible hai, aur scope ko better manage karta hai. Most of the time, isey use karte hain.
const: Yeh ek constant variable declare karta hai, jo ki change nahi ho sakta.

const accountId  = 124531; //change nahi ho sakta
let accountEmail =  "vatsal@gamil.com"; //change ho sakta he
var accountpassword = 2512 //change ho sakata he but iska use nahi karna he

*/

// EXAMPLE

const accountId = 12345;  //const keyword he //accountId varaible he // 12345 uski value he
let accountEmail = "vatsal@gmail.com";
var accountpassword = 2512;
accountCity = "jaipur"; /* bina keyword ke bhi variable decalre kar sakate he but woh global ban jata he 
                          hai aur aap usse kisi bhi jagah access kar sakte ho. */

let accountstate;

// accountId = 54321 not allowed bcz value change nahi ho sakti
accountEmail = "panchal@gmail.com"; // change the value 
accountpassword = 2004;  // change the value
accountCity = "gandhinagar";

// 2 method he output ki...

//method 1
console.log(accountId); 
console.log(accountEmail);
console.log(accountpassword);
console.log(accountCity);

//method 2
console.table([accountEmail,accountId,accountpassword,accountCity,accountstate]);
