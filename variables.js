Variables ek container hote hain jisme hum data ko store kar sakte hain

1. Declaration of Variables:

JavaScript mein variables declare karne ke liye kuch different keywords hote hain:

var: eh purana tarika hai variable declare karne ka, lekin yeh function-scoped hota hai (block-scoped nahi). Iska use avoid karna recommend kiya jata hai, kyunki yeh bugs create kar sakta hai.
let: Yeh ek block-scoped variable hai, jo sirf usi block (like a loop, if statement) mein accessible hota hai jahan declare kiya gaya ho. Agar tum kisi variable ko dobara value assign karna chahte ho, toh let use karna better hota hai.
const: Yeh ek constant variable hota hai, jo ek baar assign hone ke baad uski value change nahi ho sakti. Yeh bhi block-scoped hota hai.

const accountId  = 124531; //change nahi ho sakta
let accountEmail =  "vatsal@gamil.com"; //change ho sakta he
var accountpassword = 2512 //change ho sakata he but iska use nahi karna he

// 1.var example
var x = 10;
var x = 20; // Allowed
console.log(x); // 20

// 2.let example
let y = 10;
// let y = 20; // Error: Identifier 'y' has already been declared
y = 20; // Allowed
console.log(y); // 20

// 3.const example
const z = 30;
// const z = 40; // Error: Identifier 'z' has already been declared
// z = 40; // Error: Assignment to constant variable
console.log(z); // 30



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
